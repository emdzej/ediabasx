# cem_68.prg

## General

|  |  |
| --- | --- |
| File | cem_68.prg |
| Type | PRG |
| Jobs | 184 |
| Tables | 25 |
| Origin | BMW EA-41 Thomas Teske |
| Revision | 4.001 |
| Author | Atena TEMS2 Stefan Bauermeister |
| ECU Comment | Initial |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CleanEnergy Steuergerät |  |  |
| ORIGIN | string | BMW EA-41 Thomas Teske |  |  |
| REVISION | string | 4.001 |  |  |
| AUTHOR | string | Atena TEMS2 Stefan Bauermeister |  |  |
| COMMENT | string | Initial |  |  |
| PACKAGE | string | 1.35 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### DIAGNOSEPROTOKOLL_LESEN

Gibt die möglichen Diagnoseprotokolle für eine Auswahl an den Aufrufer zurück

_No arguments._

### DIAGNOSEPROTOKOLL_SETZEN

Wählt ein Diagnoseprotokoll aus

| Name | Type | Description |
| --- | --- | --- |
| DIAG_PROT | string | Diagnoseprotokoll table KONZEPT_TABELLE KONZEPT_TEXT |

### IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### FS_LOESCHEN

Fehlerspeicher loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | 0x????: Angabe eines einzelnen Fehlers 0xFFFB: alle Antriebsfehler 0xFFFC: alle Fahrwerkfehler 0xFFFD: alle Karosseriefehler 0xFFFE: alle Netzwerkfehler Default: 0xFFFF: alle Fehler |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### NORMALER_DATENVERKEHR

Sperren bzw. Freigeben des normalen Datenverkehrs KWP2000: $28 DisableNormalMessageTransmission KWP2000: $29 EnableNormalMessageTransmission Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREIGEBEN | string | "ja"   -> normalen Datenverkehr freigeben "nein" -> normalen Datenverkehr sperren table DigitalArgument TEXT |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten KWP2000: $3E TesterPresent Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden KWP2000: $20 StopDiagnosticSession Modus  : Default

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |
| BAUDRATE | string | optionaler Parameter fuer die gewuenschte Baudrate table BaudRate BAUD |
| SPEZIFISCHE_BAUDRATE_WERT | long | Parameter nur fuer BAUDRATE = 'SB' ( spezifische Baudrate ) |

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### PHYSIKALISCHE_HW_NR_LESEN

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### STATUS_BO_PRES

Lesen Ansprechdruck Boil-Off KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_WPDA_LES

Lesen Wärmeleistung PDA KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_WPBO_LES

Lesen Wärmeleistung PBO KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### START_DICHT_TEST

Dichtigkeitstest anfangen KWP2000: $31 StartRoutineByLocalIdentifier $20 StartDichtigkeitsTest Modus  : Default

_No arguments._

### STOP_DICHT_TEST

Dichtigkeitstest aufhören KWP2000: $32 StopRoutineByLocalIdentifier $20 StopDichtigkeitsTest Modus  : Default

_No arguments._

### ROUT_RES_DICHT_TEST

Ergebnisse des Dichtigkeitstests abfragen KWP2000: $33 RequestRoutineResultsByLocalIdentifier $20 DichtigkeitsTest Modus  : Default

_No arguments._

### ANZAHL_LETZTEN_DICHT_TEST

Anzahl der Tage seit dem letzten Dichtigkeitstest KWP2000: $21 ReadDataByLocalIdentifier $10 AnzahlTagenLetzenDichtTest Modus  : Default

_No arguments._

### START_VORLAUF_ENTSPANNEN

H2-Vorlaufleitung entspannen KWP2000: $31 StartRoutineByLocalIdentifier $21 StartVorlaufEntspannung Modus  : Default

_No arguments._

### START_ZUGANG_TANK

Zugang zum Tank bzw. zur Entnahmeleitung KWP2000: $31 StartRoutineByLocalIdentifier $22 StartZugangTankEntnahme Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MODUS | int | 1 (Modus A: Zugang zum Tank) 2 (Modus B: Zugang zur Entnahmeleitung) 3 (Modus C: Zugang zum Tank und Entnahmeleitung) Legt fest in welcher Zugangsmodus gestartet werden soll |

### STOP_ZUGANG_TANK_ENTNAHME

ZugangTank aufhören KWP2000: $32 StopRoutineByLocalIdentifier $22 Stop ZugangTankt Modus  : Default

_No arguments._

### START_GASWARN_TEST

Test der Gaswarn-LED's starten KWP2000: $31 StartRoutineByLocalIdentifier $23 Gas Warn Test Modus  : Default

_No arguments._

### START_BOIL_OFF_TEST

Boil Off Test beim nächsten H2-Betrieb auslösen KWP2000: $31 StartRoutineByLocalIdentifier $24 Boil Off Test Modus  : Default

_No arguments._

### START_KALIBR_MASS_TEST

Kalibrierung der Füllmassenerfassung starten KWP2000: $31 StartRoutineByLocalIdentifier $25 Kalibrierung Modus  : Default

_No arguments._

### START_BEF_ENT_DRUCKSPEICHER

Befüllen oder Entleeren des Druckspeichers starten KWP2000: $31 StartRoutineByLocalIdentifier $26 Befüllen/Entleeren des Druckspeichers Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MODUS | int | 1 Druckspeicher befüllen 2 Druckspeicher entleeren Druckspeicher befüllen oder entleeren |

### STOP_BEF_ENT_DRUCKSPEICHER

Befüllen und Entleeren des Druckspeichers stoppen KWP2000: $32 StopRoutineByLocalIdentifier $26 Befüllen und Entleeren des Druckspeichers Modus  : Default

_No arguments._

### START_ALLOW_WARM_BTANK

Warmbetankung erlauben KWP2000: $31 StartRoutineByLocalIdentifier $27 Warmbetankung erlauben Modus  : Default

_No arguments._

### START_RESET_THERMOSHOCK

Thermoschockzaehler zuruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier $28 Thermoschockzaehler zuruecksetzen Modus  : Default

_No arguments._

### ANZAHL_THERMOSCHOCKS

Anzahl der Thermoschocks KWP2000: $21 ReadDataByLocalIdentifier $11 Anzahl der Thermoschocks Modus  : Default

_No arguments._

### STEUERN_PERSIS_DATEN_RUECKSETZEN

Persistente Daten zuruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier $29 Persistente Daten Ruecksetzen Modus  : Default

_No arguments._

### EM_RESET_VALUES

Energie Management Job - Rücksetzen der berechneten Werte KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

_No arguments._

### EM_BT_THROUGHPUT_SET

Energie Management Job - Setzen des Energiedurchsatzes KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DURCHSATZ | int | Bereich: 0-65535 bzw. 0x0000-0xFFFF Wert von Energiedurchsatz |

### EM_F_SP_CL

Energie Management Job - Betankungsfreigabe KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_AUWP_H2_I

Strom der H2-Hilfswasserpumpe KWP2000:  $30 InputOutputControlByLocalIdentifier $01 Index fuer AUWP_H2_I $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AUWP_H2_TEMP

Temperatur der H2-Hilfswasserpumpe KWP2000:  $30 InputOutputControlByLocalIdentifier $02 Index fuer AUWP_H2_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AUWP_H2_VA

Variante der H2-Hilfswasserpumpe KWP2000:  $30 InputOutputControlByLocalIdentifier $03 Index fuer AUWP_H2_VA $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AUWP_H2_VOLT

Spannung der H2-Hilfswasserpumpe KWP2000:  $30 InputOutputControlByLocalIdentifier $04 Index fuer AUWP_H2_VOLT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_CAL_INFO

Kalibrierungsinfo KWP2000:  $30 InputOutputControlByLocalIdentifier $05 Index fuer CAL_INFO $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_CER_IDEN

Protokollkennung KWP2000:  $30 InputOutputControlByLocalIdentifier $06 Index fuer CER_IDEN $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DMA_TEMP

Wert des 1ten Temperatursensors KWP2000:  $30 InputOutputControlByLocalIdentifier $07 Index fuer DMA_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ERR_FL_LV_SEN

Fehler Füllungsgradsensoren_1_2 KWP2000:  $30 InputOutputControlByLocalIdentifier $08 Index fuer ERR_FL_LV_SEN $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ERR_TEMP_SEN

Fehler Temperatursensoren KWP2000:  $30 InputOutputControlByLocalIdentifier $09 Index fuer ERR_TEMP_SEN $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_GRAD_INFO

Gradienteninformation KWP2000:  $30 InputOutputControlByLocalIdentifier $0A Index fuer GRAD_INFO $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_BOOT_HYC

Hy-Sensor_Kofferraum_H2-Konzentration KWP2000:  $30 InputOutputControlByLocalIdentifier $0B Index fuer HS_BOOT_HYC $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_BOOT_LL

Hy-Sensor_Kofferraum_Unterer_Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $0C Index fuer HS_BOOT_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_BOOT_ST_1

Hy-Sensor_Kofferraum_Status_1 KWP2000:  $30 InputOutputControlByLocalIdentifier $0D Index fuer HS_BOOT_ST_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_BOOT_UL

Hy-Sensor_Kofferraum_Oberer_Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $0E Index fuer HS_BOOT_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_ENG_HYC

Hy-Sensor_Motor_H2-Konzentration KWP2000:  $30 InputOutputControlByLocalIdentifier $0F Index fuer HS_ENG_HYC $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_ENG_LL

Hy-Sensor Motor Unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $10 Index fuer HS_ENG_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_ENG_ST_1

Hy-Sensor Motor Status 1 KWP2000:  $30 InputOutputControlByLocalIdentifier $11 Index fuer HS_ENG_ST_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_ENG_UL

Hy-Sensor Motor Oberer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $12 Index fuer HS_ENG_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_FUTA_CLT_HYC

Hy-Sensor_TANK_KUPPLUNG_H2-Konzentration KWP2000:  $30 InputOutputControlByLocalIdentifier $13 Index fuer HS_FUTA_CLT_HYC $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_FUTA_CLT_LL

Hy-Sensor Tank Kupplung Unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $14 Index fuer HS_FUTA_CLT_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_FUTA_CLT_ST_1

Hy-Sensor Tank Kupplung Status 1 KWP2000:  $30 InputOutputControlByLocalIdentifier $15 Index fuer HS_FUTA_CLT_ST_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_FUTA_CLT_UL

Hy-Sensor Tank Kupplung Oberer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $16 Index fuer HS_FUTA_CLT_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_PSCMP_HYC

Hy-Sensor Fahrgastzelle H2-Konzentration KWP2000:  $30 InputOutputControlByLocalIdentifier $17 Index fuer HS_PSCMP_HYC $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_PSCMP_LL

Hy-Sensor Fahrgastzelle UntererGrenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $18 Index fuer HS_PSCMP_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_PSCMP_ST_1

Hy-Sensor Fahrgastzelle Status 1 KWP2000:  $30 InputOutputControlByLocalIdentifier $19 Index fuer HS_PSCMP_ST_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_PSCMP_UL

Hy-Sensor Fahrgastzelle Oberer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $1A Index fuer HS_PSCMP_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_SCAP_HYC

Hy-Sensor Nebensystemkapsel H2-Konzentration KWP2000:  $30 InputOutputControlByLocalIdentifier $1B Index fuer HS_SCAP_HYC $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_SCAP_LL

Hy-Sensor Nebensystemkapsel Unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $1C Index fuer HS_SCAP_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_SCAP_ST_1

Hy-Sensor Nebensystemkapsel Status 1 KWP2000:  $30 InputOutputControlByLocalIdentifier $1D Index fuer HS_SCAP_ST_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HS_SCAP_UL

Hy-Sensor Nebensystemkapsel Oberer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier $1E Index fuer HS_SCAP_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_AMB_P

Auslesen UMGEBUNG DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $1F Index fuer IN_AMB_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_AUWP_H2_ERR

Eingang Hilfswasserpumpe H2 Fehler KWP2000:  $30 InputOutputControlByLocalIdentifier $21 Index fuer IN_AUWP_H2_ERR $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_AUWP_H2_RPM

EINGANG_HILFSWASSERPUMPE_H2_RPM KWP2000:  $30 InputOutputControlByLocalIdentifier $22 Index fuer IN_AUWP_H2_RPM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_BN

Eingang Bordnetz Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $23 Index fuer IN_BN $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_BO_P

BOIL-OFF VALVE DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $24 Index fuer IN_BO_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_COL_EXH_TEMP

KÜHLMITTEL AUSLASS TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $25 Index fuer IN_COL_EXH_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_COL_INL_TEMP

KÜHLMITTEL EINLASS TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $26 Index fuer IN_COL_INL_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_COMP_TEMP

KOMPRESSOR TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $27 Index fuer IN_COMP_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_CR

CRASH Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $28 Index fuer IN_CR $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_FTC_CLO_1

TANKDECKEL GESCHLOSSEN Sensor 1 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $29 Index fuer IN_FTC_CLO_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_FTC_CLO_2

TANKDECKEL GESCHLOSSEN Sensor 2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $2A Index fuer IN_FTC_CLO_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_FTC_OPN

TANKDECKEL OFFEN Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $2B Index fuer IN_FTC_OPN $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_FUT_CLT_TEMP

TANK KUPPLUNG TEMPERATUR KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $20 Index fuer IN_FUT_CLT_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_FUTA_P_1

TANK DRUCK Sensor 1 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $2C Index fuer IN_FUTA_P_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_FUTA_P_2

TANK DRUCK Sensor 2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $2D Index fuer IN_FUTA_P_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_GHY_CL_P

GASFÖRMIGER-H2 STEUERLEITUNGS DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $2E Index fuer IN_GHY_CL_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_HEATEX_TEMP

WT TEILSTROM WARM TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $2F Index fuer IN_HEATEX_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_LHY_CL_P

FLÜSSIGER-H2 STEUERLEITUNGS DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $30 Index fuer IN_LHY_CL_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_MPVA_IN_TEMP

WÄRMETAUSCHER TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $31 Index fuer IN_MPVA_IN_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_MPVA_SP_TEMP

MOTOR ABSPERRVENTIL TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $32 Index fuer IN_MPVA_SP_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_OFI_PR_1

ÜBERLAUFSICHERUNG Sensor 1 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $33 Index fuer IN_OFI_PR_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_OFI_PR_2

ÜBERLAUFSICHERUNG Sensor 2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $34 Index fuer IN_OFI_PR_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_OX_TEMP

BOIL OFF MANAGAMENT SYSTEM TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $35 Index fuer IN_OX_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_PRS_ACCU_P

PRS DRUCKSPEICHER DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $36 Index fuer IN_PRS_ACCU_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_STRT_ILK_1

STARTER SPERRE Sensor 1 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $37 Index fuer IN_STRT_ILK_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_STRT_ILK_2

STARTER SPERRE Sensor 2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $38 Index fuer IN_STRT_ILK_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_SUPPIPE_P_1

TEILSTROMREGELVENTIL DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $39 Index fuer IN_SUPPIPE_P_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_SUPPIPE_P_2

EINGANG MOTOR ABSPERRVENTIL DRUCK Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $3A Index fuer IN_SUPPIPE_P_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IN_VENT_TEMP

VENTURIDÜSE TEMPERATUR Sensor KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $3B Index fuer IN_VENT_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_BT_CHG

Lesen Batterie Zuladung KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $3D Index fuer R_BT_CHG $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_BT_CHG_PSTP

Lesen Batterie Zuladung Vor-Stop KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $3E Index fuer R_BT_CHG_PSTP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_BT_DCHG

Lesen Batterie Entladung KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $3F Index fuer R_BT_DCHG $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_BT_DCHG_PSTP

Lesen Batterie Entladung Vor-Stop KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $40 Index fuer R_BT_DCHG_PSTP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_IBS_REG_2

Lesen IBS_REG_2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $41 Index fuer R_IBS_REG_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_IBS_REG_4

Lesen IBS_REG_4 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $42 Index fuer R_IBS_REG_4 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_CRCS

Lesen CRC Summe KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $43 Index fuer R_QVM_CRCS $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_I

LESEN RUHESPANNUNGSMESSUNG STROM KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $44 Index fuer R_QVM_I $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_T_1

LESEN RUHESPANNUNGSMESSUNG ZEIT 1 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $45 Index fuer R_QVM_T_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_T_2

LESEN RUHESPANNUNGSMESSUNG ZEIT 2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $46 Index fuer R_QVM_T_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_T_3

LESEN RUHESPANNUNGSMESSUNG ZEIT 3 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $47 Index fuer R_QVM_T_3 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_T_4

LESEN RUHESPANNUNGSMESSUNG ZEIT 4 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $48 Index fuer R_QVM_T_4 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_TEMP

LESEN RUHESPANNUNGSMESSUNG TEMPERATUR KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $49 Index fuer R_QVM_TEMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_U_1

LESEN RUHESPANNUNGSMESSUNG SPANNUNG 1 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $4A Index fuer R_QVM_U_1 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_U_2

LESEN RUHESPANNUNGSMESSUNG SPANNUNG 2 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $4B Index fuer R_QVM_U_2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_R_QVM_U_3

LESEN RUHESPANNUNGSMESSUNG SPANNUNG 3 KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $4C Index fuer R_QVM_U_3 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_CLC_N

STROMSCHLEIFE NEGATIV KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $4D Index fuer ST_CLC_N $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_CLC_P

STROMSCHLEIFE POSITIV KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $4E Index fuer ST_CLC_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_FUTA_CHO_SW

TANK WAHL SCHALTER KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $4F Index fuer ST_FUTA_CHO_SW $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_GRB_PPOS

GETRIEBE PARK POSITION KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $50 Index fuer ST_GRB_PPOS $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_WGH_LH2

H2 Massenwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $51 Index fuer WGH_LH2 $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_WGH_LH2_MAX

Maximal zulässige Füllmasse KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $52 Index fuer WGH_LH2_MAX $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_COSP_HY_MAX

Verbrauch Wasserstoff Maximal KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $64 Index fuer COSP_HY_MAX $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DMA_FUTA_P

DMA Tank Druck KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $65 Index fuer DMA_FUTA_P $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ERR_CE_OPMO_HY

Fehler CE Betriebsart Wasserstoff KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $66 Index fuer ERR_CE_OPMO_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_FLLV_FUTA_HY

Füllstand Tank Wasserstoff KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $67 Index fuer FLLV_FUTA_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_FN_RQ

FUNKTIONS ANFORDERUNG KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $68 Index fuer FN_RQ $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_FU_TAR

Kraftstoff Soll KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $69 Index fuer FU_TAR $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_FU_TAR_STAPRC

Kraftstoff Soll Startvorgang KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $6A Index fuer FU_TAR_STAPRC $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ID_FN_REAC_HVEH

ID FUNKTION REAKTION WASSERSTOFF FAHRZEUG KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $6B Index fuer ID_FN_REAC_HVEH $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ID2_CC_MESS_EXT

Identifier Kontrollmeldungsdienst KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $6C Index fuer ID2_CC_MESS_EXT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_NO_CC_MESS_EXT

Nummer_Meldung KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $6D Index fuer NO_CC_MESS_EXT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_NO_FRM_CC_MES_EXT

Nummer aktueller Frame KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $6E Index fuer NO_FRM_CC_MES_EXT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_ADD_ABV

ZUSATZENTLÜFTUNGSVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $6F Index fuer OUT_ADD_ABV_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_AUWP_DR

ZUSATZWASSERPUMPE NOTLAUF KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $70 Index fuer OUT_AUWP_DR $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_AUWP_H2_RPM

AUSGANG ZUSATZWASSERPUMPE H2 DREHZAHL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $71 Index fuer OUT_AUWP_H2_RPM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_BO_CLO_RV

BOIL OFF ZU UMSCHALTVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $72 Index fuer OUT_BO_CLO_RV_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_BO_OPEN_RV

BOIL OFF AUF UMSCHALTVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $73 Index fuer OUT_BO_OPEN_RV_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_COMP_REL

KOMPRESSOR PRS RELAIS KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $74 Index fuer OUT_COMP_REL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_ENG_OPM_LED

MOTOR BETRIEBSMODUS LED KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $75 Index fuer OUT_ENG_OPM_LED $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_ENG_SOV

MOTOR ABSPERRVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $76 Index fuer OUT_ENG_SOV_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_FUTA_CHO_SW_LED

TANK WAHL SCHALTER LED KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $77 Index fuer OUT_FUTA_CHO_SW_LED $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_FUFF_N

TANKKLAPPE N KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $78 Index fuer OUT_FUFF_N_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_FUFF_P

TANKKLAPPE P KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $79 Index fuer OUT_FUFF_P_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_GHY_COV

GASFÖRMIGER-H2 PRS STEUERVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $7A Index fuer OUT_GHY_COV_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_BOOT_LL

H2 Sensor Kofferraum unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $7B Index fuer OUT_HS_BOOT_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_BOOT_UL

H2 Sensor Kofferraum unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $7C Index fuer OUT_HS_BOOT_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_ENG_LL

H2 Sensor Motor unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $7D Index fuer OUT_HS_ENG_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_ENG_UL

H2 Sensor Motor unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $7E Index fuer OUT_HS_ENG_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_FT_CLT_LL

H2 Sensor Tank Kupplung unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $7F Index fuer OUT_HS_FT_CLT_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_FT_CLT_UL

H2 Sensor Tank Kupplung unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $80 Index fuer OUT_HS_FT_CLT_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_MSG_CNT

H2 Sensor Nachrichten Zähler KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $81 Index fuer OUT_HS_MSG_CNT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_PSCMP_LL

H2 Sensor Fahrgastzelle unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $82 Index fuer OUT_HS_PSCMP_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_PSCMP_UL

H2 Sensor Fahrgastzelle unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $83 Index fuer OUT_HS_PSCMP_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_SCAP_LL

H2 Sensor Nebensystemkapsel unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $84 Index fuer OUT_HS_SCAP_LL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_HS_SCAP_UL

H2 Sensor Nebensystemkapsel unterer Grenzwert KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $85 Index fuer OUT_HS_SCAP_UL $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_LHY_COV

FLÜSSIGER-H2 PRS STEUERVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $86 Index fuer OUT_LHY_COV_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_ML

MOVILINE KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $87 Index fuer OUT_ML $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_MPVA

TEILSTROMREGELVENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $88 Index fuer OUT_MPVA_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_NSK_FL_VA

Nebensystemkapsel Spülung PRS Ventil KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $89 Index fuer OUT_NSK_FL_VA_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_OFI_PR_DIAG

ÜBERFÜLLSICHERUNG DIAGNOSE KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $8A Index fuer OUT_OFI_PR_DIAG $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_OFI_PR_PWR

ÜBERFÜLLSICHERUNG VERSORGUNG KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $8B Index fuer OUT_OFI_PR_PWR $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_P_ACCU_VA

DRUCKSPEICHER PRS VENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $8C Index fuer OUT_P_ACCU_VA_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_REG_VA

REGENERIERUNG PRS VENTIL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $8D Index fuer OUT_REG_VA_PWM $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUT_STRT_ILK

STARTER SPERRE KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $8E Index fuer OUT_STRT_ILK $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_P_FUTA_HY

DRUCK TANK INNEN WASSERSTOFF KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $8F Index fuer P_FUTA_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_P_SUPPLN_HY

H2 Druck Versorgungsleituung KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $90 Index fuer P_SUPPLN_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_QU_FRM_CC_MES_EXT

Gesamt Zahl Frames KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $91 Index fuer QU_FRM_CC_MES_EXT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_RNG_HY

Reichweite Wasserstoff KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $92 Index fuer RNG_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_RQ_FU_TAR

ANFORDERUNG_KRAFTSTOFF_SOLL KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $93 Index fuer RQ_FU_TAR $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_CC_DSP_FRQ

STATUS BLINKEN TAKT CHECKCONTROL MELDUNG ERWEITERT KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $94 Index fuer ST_CC_DSP_FRQ $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_CC_MESS_EXT

Meldung_setzen_ruecksetzen KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $95 Index fuer ST_CC_MESS_EXT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_FLLV_FUTA_SPAR_HY

Status_Füllstand_Tank_Reserve_Wasserstoff KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $96 Index fuer ST_FLLV_FUTA_SPAR_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_OPMO_HY

STATUS_BETRIEBSART_WASSERSTOFF KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $97 Index fuer ST_OPMO_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_OPMOCHG_CE

Status Betriebsartenwechsel CE KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $98 Index fuer ST_OPMOCHG_CE $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ST_RFG_HY

Status_Nachtanken_Wasserstoff KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $99 Index fuer ST_RFG_HY $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_STARTFREIGABE_CE

Meldung Motorstart Verhindern KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $9A Index fuer STARTFREIGABE_CE $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_TEMP_EX_TA

TEMPERATUR AUßENDRUCK KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $9B Index fuer TEMP_EX_TA $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_TRANF_CC_MESS_EXT

Übetragungsintervall KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $9C Index fuer TRANF_CC_MESS_EXT $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_TSTMP

ZEITSPANNE KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $9D Index fuer TSTMP $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_UTDT_CC_MESS

NUTZDATEN_CHECK-CONTROL_MELDUNG KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $9E Index fuer UTDT_CC_MESS $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_VEH_CO

FAHRZEUGZUSTAND KWP2000:  $30 InputOutputControlByLocalIdentifier argument: $9F Index fuer VEH_CO $01 ReportCurrentState Modus  : Default

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED__SECURITY_ACCESS_REQUESTED |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x40 | ERROR_ECU_DOWNLOAD_NOT_ACCEPTED |
| 0x41 | ERROR_ECU_IMPROPER_DOWNLOAD_TYPE |
| 0x42 | ERROR_ECU_CANNOT_DOWNLOAD_TO_SPECIFIED_ADDRESS |
| 0x43 | ERROR_ECU_CANNOT_DOWNLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x50 | ERROR_ECU_UPLOAD_NOT_ACCEPTED |
| 0x51 | ERROR_ECU_IMPROPER_UPLOAD_TYPE |
| 0x52 | ERROR_ECU_CANNOT_UPLOAD_FROM_SPECIFIED_ADDRESS |
| 0x53 | ERROR_ECU_CANNOT_UPLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x71 | ERROR_ECU_TRANSFER_SUSPENDED |
| 0x72 | ERROR_ECU_TRANSFER_ABORTED |
| 0x74 | ERROR_ECU_ILLEGAL_ADDRESS_IN_BLOCK_TRANSFER |
| 0x75 | ERROR_ECU_ILLEGAL_BYTE_COUNT_IN_BLOCK_TRANSFER |
| 0x76 | ERROR_ECU_ILLEGAL_BLOCK_TRANSFER_TYPE |
| 0x77 | ERROR_ECU_BLOCKTRANSFER_DATA_CHECKSUM_ERROR |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIAGNOSTIC_MODE |
| ?00? | OKAY |
| ?02? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?03? | ERROR_ECU_INCORRECT_LEN |
| ?04? | ERROR_ECU_INCORRECT_LIN_RESPONSE_ID |
| ?05? | ERROR_ECU_INCORRECT_LIN_LEN |
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
| ?41? | ERROR_BAUDRATE |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_DATA_OUT_OF_RANGE |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| ?73? | ERROR_NO_BIN_BUFFER |
| ?74? | ERROR_BIN_BUFFER |
| ?75? | ERROR_DATA_TYPE |
| ?76? | ERROR_CHECKSUM |
| ?80? | ERROR_FLASH_SIGNATURE_CHECK |
| ?81? | ERROR_VEHICLE_IDENTIFICATION_NR |
| ?82? | ERROR_PROGRAMMING_DATE |
| ?83? | ERROR_ASSEMBLY_NR |
| ?84? | ERROR_CALIBRATION_DATASET_NR |
| ?85? | ERROR_EXHAUST_REGULATION_OR_TYPE_APPROVAL_NR |
| ?86? | ERROR_REPAIR_SHOP_NR |
| ?87? | ERROR_TESTER_SERIAL_NR |
| ?88? | ERROR_MILAGE |
| ?89? | ERROR_PROGRAMMING_REFERENCE |
| ?8A? | ERROR_NO_FREE_UIF |
| ?8B? | ERROR_MAX_UIF |
| ?8C? | ERROR_SIZE_UIF |
| ?8D? | ERROR_LEVEL |
| ?8E? | ERROR_KEY |
| ?8F? | ERROR_AUTHENTICATION |
| ?90? | ERROR_NO_DREF |
| ?91? | ERROR_CHECK_PECUHN |
| ?92? | ERROR_CHECK_PRGREF |
| ?93? | ERROR_AIF_NR |
| ?94? | ERROR_CHECK_DREF |
| ?95? | ERROR_CHECK_HWREF |
| ?96? | ERROR_CHECK_HWREF |
| ?97? | ERROR_CHECK_PRGREFB |
| ?98? | ERROR_CHECK_VMECUH*NB |
| ?99? | ERROR_CHECK_PRGREFB |
| ?9A? | ERROR_CHECK_VMECUH*N |
| ?9B? | ERROR_MOST_CAN_GATEWAY_DISABLE |
| ?9C? | ERROR_NO_P2MIN |
| ?9D? | ERROR_NO_P2MAX |
| ?9E? | ERROR_NO_P3MIN |
| ?9F? | ERROR_NO_P3MAX |
| ?A0? | ERROR_NO_P4MIN |
| ?B0? | ERROR_DIAG_PROT |
| ?B1? | ERROR_SG_ADRESSE |
| ?B2? | ERROR_SG_MAXANZAHL_AIF |
| ?B3? | ERROR_SG_GROESSE_AIF |
| ?B4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?B5? | ERROR_SG_AUTHENTISIERUNG |
| ?C0? | ERROR_TELEGRAM_LEN_OUT_OFF_RANGE |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen => Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe => Lear |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Continental Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO => BERU |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE |
| 0x41 | Megamos |
| 0x42 | TRW |
| 0x43 | Wabco |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0x47 | ZF |
| 0x48 | GMPT |
| 0x49 | Harman Kardon |
| 0x50 | Remes |
| 0x51 | ZF Lenksysteme |
| 0x52 | Magneti Marelli |
| 0x53 | Borg Instruments |
| 0x54 | GETRAG |
| 0x55 | BHTC (Behr Hella Thermocontrol) |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon |
| 0x58 | Autoliv |
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
| 0x72 | AISIN AW CO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | AKsys GmbH |
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0xFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
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

### AUTHENTISIERUNG

| AUTH_NR | AUTH_TEXT |
| --- | --- |
| 0x01 | Simple |
| 0x02 | Symetrisch |
| 0x03 | Asymetrisch |
| 0xFF | Keine |

### DIAGMODE

| NR | MODE | MODE_TEXT |
| --- | --- | --- |
| 0x81 | DEFAULT | DefaultMode |
| 0x82 | PT | PeriodicTransmissions |
| 0x84 | EOLSSM | EndOfLineSystemSupplierMode |
| 0x85 | ECUPM | ECUProgrammingMode |
| 0x86 | ECUDM | ECUDevelopmentMode |
| 0x87 | ECUAM | ECUAdjustmentMode |
| 0x88 | ECUVCM | ECUVariantCodingMode |
| 0x89 | ECUSM | ECUSafetyMode |
| 0xFA | SSS_A | SystemSupplierSpecific (A) |
| 0xFB | SSS_B | SystemSupplierSpecific (B) |
| 0xFC | SSS_C | SystemSupplierSpecific (C) |
| 0xFD | SSS_D | SystemSupplierSpecific (D) |
| 0xFE | SSS_E | SystemSupplierSpecific (E) |
| 0xXY | -- | unbekannter Diagnose-Mode |

### BAUDRATE

| NR | BAUD | BAUD_TEXT |
| --- | --- | --- |
| 0x01 | PC9600 | Baudrate 9.6 kBaud |
| 0x02 | PC19200 | Baudrate 19.2 kBaud |
| 0x03 | PC38400 | Baudrate 38.4 kBaud |
| 0x04 | PC57600 | Baudrate 57.6 kBaud |
| 0x05 | PC115200 | Baudrate 115.2 kBaud |
| 0x06 | SB | Specific Baudrate |
| 0xXY | -- | unbekannte Baudrate |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM, internal |
| 0x07 | UIFM | User Info Field Memory |
| 0x08 | VODM | Vehicle Order Data Memory |
| 0x09 | FLASHX | Flash EPROM, external |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x648C | H2-Alarm Tankkupplung |
| 0x648D | H2-Alarm Nebensystemkapsel |
| 0x648E | Steuergerät, interner Fehler |
| 0x648F | Batterie 2 |
| 0x6490 | Batterie 1 |
| 0x6491 | Tankdruck zu hoch |
| 0x6492 | Versorgungsleitung |
| 0x6493 | Boil-Off Arbeitspunkt |
| 0x6494 | Crash |
| 0x6495 | Tankklappe |
| 0x6496 | DME Kommunikation |
| 0x6497 | Wärmetauscher |
| 0x6498 | Wärmetauscher, Kühlwassersensoren |
| 0x649A | Temperatursensor Austritt Kühlmittel |
| 0x649B | Temperatursensor Eintritt Kühlmittel |
| 0x649C | Temperatursensor Oxidator |
| 0x649D | Temperatursensor Motorabsperrventil |
| 0x649E | Temperatursensor Austritt Wärmetauscher |
| 0x649F | Drucksensor Austritt Teilstromregelventil |
| 0x64A0 | Drucksensor Austritt Motorabsperrventil |
| 0x64A1 | Drucksensor Austritt Boil-Off Ventil |
| 0x64A2 | Drucksensor Stichleitung |
| 0x64A3 | Drucksensor Eintritt Boil-Off Ventil |
| 0x64A4 | Hallsensor 1, zu am Tankdeckel |
| 0x64A5 | Hallsensor 2, zu am Tankdeckelgetriebe |
| 0x64A6 | Hallsensor 3, offen am Tankdeckelgetriebe |
| 0x64A7 | Überfüllsicherung 1 |
| 0x64A8 | Überfüllsicherung 2 |
| 0x64A9 | Eingang 1 Starter Interlock |
| 0x64AA | Eingang 2 Starter Interlock |
| 0x64AB | Tankwahlschalter |
| 0x64AD | H2-Sensor Passagierraum |
| 0x64AE | H2-Sensor Motorraum |
| 0x64AF | H2-Sensor Tankkupplung |
| 0x64B0 | H2-Sensor Nebensystemkapsel |
| 0x64B1 | H2-Sensor Kofferraum |
| 0x64B2 | Luftdrucksensor 1 |
| 0x64B3 | H2-Alarm Passagierraum |
| 0x64B4 | Energiemanagement Batterie 1 |
| 0x64B5 | Energiemanagement Batterie 2 |
| 0x64B6 | Teilstromregelventil |
| 0x64B7 | Motorabsperrventil |
| 0x64B8 | Tankklappe |
| 0x64B9 | Ausgangskreis Zusatzwasserpumpe |
| 0x64BA | Tankdruck zu niedrig |
| 0x64BB | Ausgangskreis Starter Interlock |
| 0x64BC | Bordnetzspannung |
| 0x64BD | CE-SG, Kanal 1, Ausfall Stromversorgung |
| 0x64BE | CE-SG, Kanal 2, Ausfall Stromversorgung |
| 0x64BF | Crash Sensor |
| 0x64C0 | Dichtigkeitstest der Ventile |
| 0x64C1 | Batterie 1 und 2 |
| 0x64C2 | Batterie 1 |
| 0x64C3 | Tank-Isolationsvakuum |
| 0x64C4 | Dichtigkeitstest der Ventile ist fällig |
| 0x64C5 | Temperatursensor Wärmetauscher Eingang |
| 0x64C6 | Temperatursensor Kompressor |
| 0x64C7 | Temperatursensor Eingang Venturidüse |
| 0x64C8 | Drucksensor in Steuerleitung für gasförmigen H2 |
| 0x64C9 | Drucksensor in Steuerleitung für flüssigen H2 |
| 0x64CA | Drucksensor Eingang PRS Druckspeicher |
| 0x64CB | Boil-Off Ventil |
| 0x64CC | TSE-CAN-Nachricht Druck |
| 0x64CD | Zusatzentlüftungsventil |
| 0x64CE | Druckspeicher PRS-Ventil |
| 0x64CF | NSK-Spülung PRS-Ventil |
| 0x64D0 | Regenerierung PRS-Ventil |
| 0x64D1 | Steuerventil für Entnahme von flüssigem H2 |
| 0x64D2 | Steuerventil für Entnahme von gasförmigem H2 |
| 0x64D3 | Pneumatik, Druckauf- oder Abbau |
| 0x64D4 | Druckfehler Druckspeicher |
| 0x64D5 | Druckaufbaufehler im Druckspeicher |
| 0x64D6 | Entfeuchtung nicht erfolgreich |
| 0x64D7 | PRS Spülung nicht erfolgreich |
| 0x64D8 | Temperatursensor Tankkupplung |
| 0x64D9 | IBS-Kommunikation Batterie 1 |
| 0x64DA | Regelthermostat |
| 0x64DB | Druckentlastungsventil leckt |
| 0x64DC | Druckentlastungsventil blockiert |
| 0x64DD | TSE nicht kalibriert/defekt |
| 0x64DE | TSE Massenberechnung |
| 0x64DF | TSE Füllstandssensor Kanal 1 |
| 0x64E0 | TSE Füllstandssensor Kanal 2 |
| 0x64E2 | TSE Temperatursensor Kanal 1 |
| 0x64E3 | TSE Temperatursensor Kanal 2 |
| 0x64E4 | IBS-Kommunikation Batterie 2 |
| 0x64E5 | Batterie 2 |
| 0x64E6 | Sicherheitsventil |
| 0x64E7 | Befüll- und Entnahmeventil für flüssigen H2 |
| 0x64E8 | Defektes Vakuum am Tankfüllstutzen oder offen blockiertes Befüll- und Entnahmeventil während Betankung |
| 0x64E9 | Defektes Vakuum am Tankfüllstutzen oder offen blockiertes Befüll- und Entnahmeventil während H2-Betrieb |
| 0x64EA | Defektes Vakuum am Tankfüllstutzen oder offen blockiertes Befüll- und Entnahmeventil während keine Betankung und kein H2-Betrieb |
| 0x64EB | H2-Alarm Motorraum |
| 0x64EC | Luftdrucksensor, Motorsteuerung |
| 0x64ED | Batterie 1 |
| 0x64EE | Batterie 2 |
| 0x64F0 | H2-Sensor Kofferraum schwerer Fehler |
| 0x64F1 | H2-High-Alarm Kofferraum |
| 0x64F2 | H2-Sensor Motorraum schwerer Fehler |
| 0x64F3 | H2-High-Alarm Motorraum |
| 0x64F4 | H2-Sensor Tankkupplung schwerer Fehler |
| 0x64F5 | H2-High-Alarm Tankkupplung |
| 0x64F6 | H2-Sensor Passagierraum schwerer Fehler |
| 0x64F7 | H2-High-Alarm Passagierraum |
| 0x64F8 | H2-Sensor Nebensystemkapsel schwerer Fehler |
| 0x64F9 | H2-High-Alarm Nebensystemkapsel |
| 0x6500 | Befüll- und Entnahmeventil für flüssigen H2 |
| 0x6501 | H2-Alarm Kofferraum |
| 0x6502 | Steuerventil für flüssigen H2 |
| 0x6503 | Steuerventil für gasförmigen H2 |
| 0x6504 | Teilstromregelventil |
| 0x6505 | Motorabsperrventil |
| 0x6506 | IBS an Batterie 1 |
| 0x6507 | IBS an Batterie 2 |
| 0x6508 | Befüll- und Entnahmeventil für gasförmigen H2 |
| 0x6509 | Wärmetauscher |
| 0xCE07 | PT-CAN Kommunikationsfehler |
| 0xCE0B | Füllstands-CAN Kommunikationsfehler |
| 0xCE0F | H2-CAN 1 Kommunikationsfehler |
| 0xCE13 | H2-CAN 2 Kommunikationsfehler |
| 0xCE14 | Botschaft (ENGINE_HVEH, 1D3) |
| 0xCE15 | Botschaft (TORQUE_3, AA) |
| 0xCE16 | Botschaft (KLEMMENSTATUS, 130) |
| 0xCE18 | Botschaft (GESCHWINDIGKEIT, 1A0) |
| 0xCE19 | Botschaft (STAT_ZV_KLAPPEN, 2FC) |
| 0xCE1A | Botschaft (VERZOEGERUNG_ANF_EMF, AE) |
| 0xCE1B | Botschaft (ENGINE_1, 1D0) |
| 0xCE1C | Botschaft (GETRIEBEDATEN, BA) |
| 0xCE1D | Botschaft (KILOMETERSTAND, 330) |
| 0xCE1E | Botschaft (HS_PSCMP, H2-CAN 1, 648) |
| 0xCE1F | Botschaft (HS_ENG, H2-CAN 1, 658) |
| 0xCE20 | Botschaft (HS_FUTA_CLT, H2-CAN 1, 660) |
| 0xCE21 | Botschaft (HS_SCAP, H2-CAN 2, 640) |
| 0xCE22 | Botschaft (HS_BOOT, H2-CAN 2, 650) |
| 0xCE24 | Botschaft (MM_M, Fuel-CAN, 258) |
| 0xCE25 | Botschaft (MM_T, Fuel-CAN, 258) |
| 0xCE26 | Botschaft (BEDIENUNG_AUDIO_TEL, 1D6) |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x648C | 0x0066 | 0x0001 | 0x0049 | 0xFFFE |
| 0x648D | 0x0066 | 0x0001 | 0x004D | 0xFFFE |
| 0x648E | 0x0066 | 0x0001 | 0x0064 | 0x0065 |
| 0x648F | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x6490 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x6491 | 0x0066 | 0x0002 | 0x0003 | 0x0004 |
| 0x6492 | 0x0066 | 0x0001 | 0x0004 | 0x0005 |
| 0x6493 | 0x0020 | 0x000F | 0x0001 | 0x0008 |
| 0x6494 | 0x0066 | 0x0024 | 0x0027 | 0xFFFE |
| 0x6495 | 0x0066 | 0x003F | 0x0041 | 0x0043 |
| 0x6496 | 0x0066 | 0x0001 | 0xFFFE | 0xFFFE |
| 0x6497 | 0x0011 | 0x0013 | 0x0015 | 0x0017 |
| 0x6498 | 0x0011 | 0x0013 | 0x0015 | 0x0017 |
| 0x649A | 0x0066 | 0x0018 | 0xFFFE | 0xFFFE |
| 0x649B | 0x0066 | 0x0016 | 0xFFFE | 0xFFFE |
| 0x649C | 0x0066 | 0x001F | 0x0008 | 0x0010 |
| 0x649D | 0x0066 | 0x0014 | 0xFFFE | 0xFFFE |
| 0x649E | 0x0066 | 0x0012 | 0xFFFE | 0xFFFE |
| 0x649F | 0x0002 | 0x0003 | 0x0006 | 0x0007 |
| 0x64A0 | 0x0002 | 0x0003 | 0x0006 | 0x0007 |
| 0x64A1 | 0x0066 | 0x0009 | 0x0008 | 0x000B |
| 0x64A2 | 0x0002 | 0x0003 | 0x0006 | 0x0007 |
| 0x64A3 | 0x0002 | 0x0003 | 0x0006 | 0x0007 |
| 0x64A4 | 0x0066 | 0x0040 | 0x0042 | 0xFFFE |
| 0x64A5 | 0x0066 | 0x0040 | 0x0042 | 0xFFFE |
| 0x64A6 | 0x0066 | 0x0044 | 0xFFFE | 0xFFFE |
| 0x64A7 | 0x0066 | 0x0002 | 0x0057 | 0x0058 |
| 0x64A8 | 0x0066 | 0x0002 | 0x0057 | 0x0058 |
| 0x64A9 | 0x0066 | 0x0029 | 0xFFFE | 0xFFFE |
| 0x64AA | 0x0066 | 0x002B | 0xFFFE | 0xFFFE |
| 0x64AB | 0x0066 | 0x0001 | 0xFFFE | 0xFFFE |
| 0x64AD | 0x0066 | 0x0001 | 0x004C | 0x0061 |
| 0x64AE | 0x0066 | 0x0001 | 0x0048 | 0x005F |
| 0x64AF | 0x0066 | 0x0001 | 0x004A | 0x0060 |
| 0x64B0 | 0x0066 | 0x0001 | 0x004E | 0x0062 |
| 0x64B1 | 0x0066 | 0x0001 | 0x0046 | 0x005E |
| 0x64B2 | 0x0066 | 0x000A | 0x0008 | 0x000B |
| 0x64B3 | 0x0066 | 0x0001 | 0x004B | 0xFFFE |
| 0x64B4 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64B5 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64B6 | 0x0031 | 0x0032 | 0x0022 | 0x0023 |
| 0x64B7 | 0x0033 | 0x0034 | 0x0022 | 0x0023 |
| 0x64B8 | 0x003D | 0x003E | 0x0022 | 0x0023 |
| 0x64B9 | 0x0063 | 0x005C | 0x005D | 0xFFFE |
| 0x64BA | 0x0066 | 0x0002 | 0x0003 | 0x0004 |
| 0x64BB | 0x0066 | 0x002A | 0x002C | 0x0024 |
| 0x64BC | 0x0066 | 0x0025 | 0x0026 | 0xFFFE |
| 0x64BD | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64BE | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64BF | 0x0066 | 0x0028 | 0x0024 | 0xFFFE |
| 0x64C0 | 0x0066 | 0x0001 | 0x0004 | 0x0005 |
| 0x64C1 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64C2 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64C3 | 0x0066 | 0x0001 | 0x0059 | 0x005A |
| 0x64C4 | 0x0066 | 0x0001 | 0x0004 | 0x0005 |
| 0x64C5 | 0x0066 | 0x001C | 0xFFFE | 0xFFFE |
| 0x64C6 | 0x0066 | 0x001A | 0xFFFE | 0xFFFE |
| 0x64C7 | 0x0066 | 0x001F | 0x0008 | 0x0010 |
| 0x64C8 | 0x0066 | 0x000C | 0x000D | 0x000E |
| 0x64C9 | 0x0066 | 0x000C | 0x000D | 0x000E |
| 0x64CA | 0x0066 | 0x000C | 0x000D | 0x000E |
| 0x64CB | 0x0066 | 0x0008 | 0x0001 | 0x0009 |
| 0x64CC | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64CD | 0x0035 | 0x0036 | 0x0022 | 0x0023 |
| 0x64CE | 0x0037 | 0x0038 | 0x0022 | 0x0023 |
| 0x64CF | 0x0039 | 0x003A | 0x0022 | 0x0023 |
| 0x64D0 | 0x003B | 0x003C | 0x0022 | 0x0023 |
| 0x64D1 | 0x002D | 0x002E | 0x0022 | 0x0023 |
| 0x64D2 | 0x002F | 0x0030 | 0x0022 | 0x0023 |
| 0x64D3 | 0x0066 | 0x000C | 0x000D | 0x000E |
| 0x64D4 | 0x0066 | 0x000C | 0x000D | 0x000E |
| 0x64D5 | 0x0066 | 0x0019 | 0x000C | 0x000E |
| 0x64D6 | 0x0066 | 0x000C | 0x000D | 0x000E |
| 0x64D7 | 0x0066 | 0x000C | 0x000E | 0x004D |
| 0x64D8 | 0x0066 | 0x001E | 0xFFFE | 0xFFFE |
| 0x64D9 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64DA | 0x0015 | 0x0017 | 0x0011 | 0x005C |
| 0x64DB | 0x0001 | 0x0004 | 0x001B | 0x0013 |
| 0x64DC | 0x0002 | 0x0003 | 0x0004 | 0x001B |
| 0x64DD | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64DE | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64DF | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64E0 | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64E2 | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64E3 | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0x64E4 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64E5 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x64E6 | 0x0066 | 0x005B | 0x0059 | 0x005A |
| 0x64E7 | 0x0066 | 0x001D | 0x0011 | 0x0056 |
| 0x64E8 | 0x0066 | 0x0054 | 0x0011 | 0x0063 |
| 0x64E9 | 0x0055 | 0x0011 | 0x0056 | 0xFFFE |
| 0x64EA | 0x0066 | 0x0011 | 0x0013 | 0xFFFE |
| 0x64EB | 0x0066 | 0x0001 | 0x0047 | 0xFFFE |
| 0x64EC | 0x0066 | 0x0009 | 0x0008 | 0x000B |
| 0x64ED | 0x0050 | 0x0051 | 0x0052 | 0x0053 |
| 0x64EE | 0x0050 | 0x0051 | 0x0052 | 0x0053 |
| 0x64F0 | 0x0066 | 0x0001 | 0x0046 | 0x005E |
| 0x64F1 | 0x0066 | 0x0001 | 0x0045 | 0xFFFE |
| 0x64F2 | 0x0066 | 0x0001 | 0x0048 | 0x005F |
| 0x64F3 | 0x0066 | 0x0001 | 0x0047 | 0xFFFE |
| 0x64F4 | 0x0066 | 0x0001 | 0x004A | 0x0060 |
| 0x64F5 | 0x0066 | 0x0001 | 0x0049 | 0xFFFE |
| 0x64F6 | 0x0066 | 0x0001 | 0x004C | 0x0061 |
| 0x64F7 | 0x0066 | 0x0001 | 0x004B | 0xFFFE |
| 0x64F8 | 0x0066 | 0x0001 | 0x004E | 0x0062 |
| 0x64F9 | 0x0066 | 0x0001 | 0x004D | 0xFFFE |
| 0x6500 | 0x0066 | 0x0069 | 0x006A | 0x004F |
| 0x6501 | 0x0066 | 0x0001 | 0x0045 | 0xFFFE |
| 0x6502 | 0x002D | 0x002E | 0x0022 | 0x0023 |
| 0x6503 | 0x002F | 0x0030 | 0x0022 | 0x0023 |
| 0x6504 | 0x0031 | 0x0032 | 0x0022 | 0x0023 |
| 0x6505 | 0x0033 | 0x0034 | 0x0022 | 0x0023 |
| 0x6506 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x6507 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x6508 | 0x0066 | 0x0001 | 0x0004 | 0x004F |
| 0x6509 | 0x0066 | 0x004F | 0x0001 | 0x0021 |
| 0xCE07 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE0B | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE0F | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE13 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE14 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE15 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE16 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE18 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE19 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE1A | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE1B | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE1C | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE1D | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE1E | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE1F | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE20 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE21 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE22 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |
| 0xCE24 | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0xCE25 | 0x0066 | 0x0001 | 0x004F | 0xFFFE |
| 0xCE26 | 0x0067 | 0x0068 | 0xFFFE | 0xFFFE |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | IN_FUTA_P_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0002 | IN_FUTA_P_1_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0003 | IN_FUTA_P_2_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0004 | IN_SUPPIPE_P_1_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0005 | IN_SUPPIPE_P_2_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0006 | IN_SUPPIPE_P_1_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0007 | IN_SUPPIPE_P_2_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0008 | IN_BO_P_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0009 | IN_AMB_P_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x000A | IN_AMB_P_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x000B | AIP_ENG_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x000C | IN_GHY_CL_P_V | bar | high | unsigned int | - | 21 | 65535 | 0 |
| 0x000D | IN_LHY_CL_P_V | bar | high | unsigned int | - | 21 | 65535 | 0 |
| 0x000E | IN_PRS_ACCU_P_V | bar | high | unsigned int | - | 21 | 65535 | 0 |
| 0x000F | IN_OX_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0010 | IN_OX_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0011 | IN_MPVA_IN_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0012 | IN_MPVA_IN_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0013 | IN_MPVA_SP_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0014 | IN_MPVA_SP_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0015 | IN_COL_INL_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0016 | IN_COL_INL_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0017 | IN_COL_EXH_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0018 | IN_COL_EXH_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0019 | IN_COMP_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001A | IN_COMP_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001B | IN_HEATEX_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001C | IN_HEATEX_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001D | IN_FUT_CLT_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001E | IN_FUT_CLT_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001F | IN_VENT_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0020 | IN_VENT_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0021 | DMA_TEMP_V | °C | high | unsigned int | - | 360 | 65535 | -260 |
| 0x0022 | IN_BT_U_1_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0023 | IN_BT_U_2_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0024 | IN_BN_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0025 | IN_BN_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0026 | IN_BN_CD_O | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0027 | IN_CR_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0028 | IN_CR_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0029 | IN_STRT_ILK_1_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002A | IN_STRT_ILK_1_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002B | IN_STRT_ILK_2_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002C | IN_STRT_ILK_2_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002D | IN_LHY_COV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x002E | IN_LHY_COV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x002F | IN_GHY_COV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0030 | IN_GHY_COV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0031 | IN_MPVA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0032 | IN_MPVA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0033 | IN_ENG_SOV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0034 | IN_ENG_SOV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0035 | IN_ADD_ABV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0036 | IN_ADD_ABV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0037 | IN_P_ACCU_VA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0038 | IN_P_ACCU_VA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0039 | IN_NSK_FL_VA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003A | IN_NSK_FL_VA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003B | IN_REG_VA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003C | IN_REG_VA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003D | IN_FUFF_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003E | IN_FUFF_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003F | IN_FTC_CLO_1_V | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0040 | IN_FTC_CLO_1_CD | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0041 | IN_FTC_CLO_2_V | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0042 | IN_FTC_CLO_2_CD | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0043 | IN_FTC_OPN_V | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0044 | IN_FTC_OPN_CD | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0045 | HS_BOOT_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0046 | HS_BOOT_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0047 | HS_ENG_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0048 | HS_ENG_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0049 | HS_FUTA_CLT_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004A | HS_FUTA_CLT_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004B | HS_PSCMP_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004C | HS_PSCMP_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004D | HS_SCAP_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004E | HS_SCAP_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004F | WGH_LH2_V | g | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x0050 | R_QVM_T_1_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0051 | R_QVM_T_2_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0052 | R_QVM_T_3_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0053 | R_QVM_T_4_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0054 | CURR_REF_TIME | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0055 | CURR_H2_TIME | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0056 | COSP_HY_AVL_V | kg/h | high | unsigned int | - | 200 | 65535 | 0 |
| 0x0057 | IN_OFI_PR_1_CD | Ohm | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x0058 | IN_OFI_PR_2_CD | Ohm | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x0059 | P_DA | W | high | unsigned int | - | 40 | 65535 | 0 |
| 0x005A | P_BO | W | high | unsigned int | - | 40 | 65535 | 0 |
| 0x005B | P_DA_SV | W | high | unsigned int | - | 40 | 65535 | 0 |
| 0x005C | IN_AUWP_H2_RPM_V | rpm | high | unsigned int | - | 1 | 1 | 0 |
| 0x005D | OUT_AUWP_H2_RPM | rpm | high | unsigned int | - | 1 | 1 | 0 |
| 0x005E | DIAG_HS_BOOT_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x005F | DIAG_HS_ENG_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0060 | DIAG_HS_FUTA_CLT_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0061 | DIAG_HS_PSCMP_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0062 | DIAG_HS_SCAP_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0063 | BETRIEBSZUST | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0064 | ST_CLC_N_CD | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0065 | ST_CLC_P_CD | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0066 | SYSTEM_TIME | h | high | unsigned int | - | 1 | 1 | 0 |
| 0x0067 | ST_KL_15_V | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0068 | ST_KL_R_V | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0069 | IN_OFI_PR_1_V | Ohm | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x006A | IN_OFI_PR_2_V | Ohm | high | unsigned int | - | 10000 | 65535 | 0 |
| 0xFFFE | Unbenutzte Umweltbedingung | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFF | Unbekannte Umweltbedingung | - | high | unsigned int | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x648C | 0xFFFF | 0x0048 | 0xFFFF | 0xFFFF |
| 0x648D | 0xFFFF | 0x0048 | 0xFFFF | 0xFFFF |
| 0x648E | 0x0069 | 0x0062 | 0x0008 | 0x0061 |
| 0x648F | 0xFFFF | 0x000A | 0xFFFF | 0xFFFF |
| 0x6490 | 0xFFFF | 0x000A | 0xFFFF | 0xFFFF |
| 0x6491 | 0xFFFF | 0xFFFF | 0x000B | 0x0039 |
| 0x6492 | 0xFFFF | 0xFFFF | 0xFFFF | 0x000D |
| 0x6493 | 0x0038 | 0x0037 | 0x0057 | 0x000E |
| 0x6494 | 0xFFFF | 0xFFFF | 0xFFFF | 0x000F |
| 0x6495 | 0xFFFF | 0x0010 | 0xFFFF | 0xFFFF |
| 0x6496 | 0xFFFF | 0xFFFF | 0x0060 | 0xFFFF |
| 0x6497 | 0xFFFF | 0x0013 | 0x0014 | 0x006E |
| 0x6498 | 0xFFFF | 0x0036 | 0xFFFF | 0x0015 |
| 0x649A | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x649B | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x649C | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x649D | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x649E | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x649F | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64A0 | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64A1 | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64A2 | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64A3 | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64A4 | 0xFFFF | 0x0068 | 0x0074 | 0x0074 |
| 0x64A5 | 0xFFFF | 0x0068 | 0x0074 | 0x0074 |
| 0x64A6 | 0xFFFF | 0x0068 | 0x0074 | 0x0074 |
| 0x64A7 | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x64A8 | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x64A9 | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64AA | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64AB | 0xFFFF | 0x0068 | 0xFFFF | 0xFFFF |
| 0x64AD | 0x004B | 0x004A | 0xFFFF | 0xFFFF |
| 0x64AE | 0x004B | 0x004A | 0xFFFF | 0xFFFF |
| 0x64AF | 0x004B | 0x004A | 0xFFFF | 0xFFFF |
| 0x64B0 | 0x004B | 0x004A | 0xFFFF | 0xFFFF |
| 0x64B1 | 0x004B | 0x004A | 0xFFFF | 0xFFFF |
| 0x64B2 | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x64B3 | 0xFFFF | 0x0048 | 0xFFFF | 0xFFFF |
| 0x64B4 | 0xFFFF | 0x0045 | 0xFFFF | 0xFFFF |
| 0x64B5 | 0xFFFF | 0x0045 | 0xFFFF | 0xFFFF |
| 0x64B6 | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64B7 | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64B8 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0075 |
| 0x64B9 | 0x0028 | 0x0027 | 0xFFFF | 0x0070 |
| 0x64BA | 0x004D | 0x004E | 0x004C | 0x000C |
| 0x64BB | 0x0026 | 0x0025 | 0xFFFF | 0xFFFF |
| 0x64BC | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64BD | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64BE | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64BF | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64C0 | 0x005E | 0x005D | 0x005C | 0x005B |
| 0x64C1 | 0x002A | 0x0029 | 0x001C | 0x001B |
| 0x64C2 | 0xFFFF | 0x001D | 0x001E | 0xFFFF |
| 0x64C3 | 0xFFFF | 0x001F | 0xFFFF | 0xFFFF |
| 0x64C4 | 0xFFFF | 0xFFFF | 0x005F | 0xFFFF |
| 0x64C5 | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x64C6 | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64C7 | 0x0069 | 0x0068 | 0x0067 | 0x0066 |
| 0x64C8 | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64C9 | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64CA | 0x0069 | 0x0068 | 0x006A | 0x0066 |
| 0x64CB | 0xFFFF | 0x0010 | 0x0012 | 0x0011 |
| 0x64CC | 0xFFFF | 0xFFFF | 0xFFFF | 0x006B |
| 0x64CD | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64CE | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64CF | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64D0 | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64D1 | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64D2 | 0x0024 | 0xFFFF | 0x0022 | 0x0023 |
| 0x64D3 | 0x002E | 0x002D | 0x002C | 0x002B |
| 0x64D4 | 0xFFFF | 0xFFFF | 0x002F | 0x0031 |
| 0x64D5 | 0xFFFF | 0x0032 | 0xFFFF | 0xFFFF |
| 0x64D6 | 0xFFFF | 0x0033 | 0xFFFF | 0xFFFF |
| 0x64D7 | 0xFFFF | 0x0034 | 0xFFFF | 0xFFFF |
| 0x64D8 | 0xFFFF | 0x0068 | 0x0067 | 0x0066 |
| 0x64D9 | 0xFFFF | 0x0018 | 0x0017 | 0xFFFF |
| 0x64DA | 0xFFFF | 0x003B | 0x003A | 0x006F |
| 0x64DB | 0xFFFF | 0xFFFF | 0xFFFF | 0x003C |
| 0x64DC | 0xFFFF | 0xFFFF | 0xFFFF | 0x0010 |
| 0x64DD | 0x0071 | 0x003D | 0x003E | 0x0035 |
| 0x64DE | 0x0042 | 0xFFFF | 0x003F | 0x003E |
| 0x64DF | 0xFFFF | 0x0042 | 0x0041 | 0x0040 |
| 0x64E0 | 0xFFFF | 0x0042 | 0x0041 | 0x0040 |
| 0x64E2 | 0xFFFF | 0x0042 | 0x0041 | 0x0040 |
| 0x64E3 | 0xFFFF | 0x0042 | 0x0041 | 0x0040 |
| 0x64E4 | 0xFFFF | 0x0018 | 0x0017 | 0xFFFF |
| 0x64E5 | 0xFFFF | 0x001D | 0x001E | 0xFFFF |
| 0x64E6 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0058 |
| 0x64E7 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0053 |
| 0x64E8 | 0xFFFF | 0xFFFF | 0x0054 | 0x0054 |
| 0x64E9 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0055 |
| 0x64EA | 0xFFFF | 0xFFFF | 0xFFFF | 0x0056 |
| 0x64EB | 0xFFFF | 0x0048 | 0xFFFF | 0xFFFF |
| 0x64EC | 0x0069 | 0x0068 | 0xFFFF | 0xFFFF |
| 0x64ED | 0xFFFF | 0xFFFF | 0xFFFF | 0x0009 |
| 0x64EE | 0xFFFF | 0xFFFF | 0xFFFF | 0x0009 |
| 0x64F0 | 0xFFFF | 0xFFFF | 0x0068 | 0xFFFF |
| 0x64F1 | 0xFFFF | 0xFFFF | 0x0049 | 0xFFFF |
| 0x64F2 | 0xFFFF | 0xFFFF | 0x0068 | 0xFFFF |
| 0x64F3 | 0xFFFF | 0xFFFF | 0x0049 | 0xFFFF |
| 0x64F4 | 0xFFFF | 0xFFFF | 0x0068 | 0xFFFF |
| 0x64F5 | 0xFFFF | 0xFFFF | 0x0049 | 0xFFFF |
| 0x64F6 | 0xFFFF | 0xFFFF | 0x0068 | 0xFFFF |
| 0x64F7 | 0xFFFF | 0xFFFF | 0x0049 | 0xFFFF |
| 0x64F8 | 0xFFFF | 0xFFFF | 0x0068 | 0xFFFF |
| 0x64F9 | 0xFFFF | 0xFFFF | 0x0049 | 0xFFFF |
| 0x6500 | 0xFFFF | 0xFFFF | 0x0073 | 0xFFFF |
| 0x6501 | 0xFFFF | 0x0048 | 0xFFFF | 0xFFFF |
| 0x6502 | 0xFFFF | 0x0064 | 0x0065 | 0x0063 |
| 0x6503 | 0xFFFF | 0x0064 | 0x0065 | 0x0063 |
| 0x6504 | 0xFFFF | 0x0064 | 0x0065 | 0x0063 |
| 0x6505 | 0xFFFF | 0x0064 | 0x0065 | 0x0063 |
| 0x6506 | 0xFFFF | 0xFFFF | 0x0047 | 0x0046 |
| 0x6507 | 0xFFFF | 0xFFFF | 0x0047 | 0x0046 |
| 0x6508 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0053 |
| 0x6509 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0059 |
| 0xCE07 | 0xFFFF | 0x006D | 0xFFFF | 0x006C |
| 0xCE0B | 0xFFFF | 0x006D | 0xFFFF | 0x006C |
| 0xCE0F | 0xFFFF | 0x006D | 0xFFFF | 0x006C |
| 0xCE13 | 0xFFFF | 0x006D | 0xFFFF | 0x006C |
| 0xCE14 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE15 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE16 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE18 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE19 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE1A | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE1B | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE1C | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE1D | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE1E | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE1F | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE20 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE21 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE22 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE24 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCE25 | 0xFFFF | 0xFFFF | 0x003E | 0x0072 |
| 0xCE26 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | Kein Fehler |
| 0x0001 | Wert zu groß |
| 0x0002 | Wert zu klein |
| 0x0003 | Kein Signal |
| 0x0004 | Wert unplausibel |
| 0x0005 | Computerfehler |
| 0x0006 | Eingangssignalfehler |
| 0x0007 | Ausgangssignalfehler des CE-SG |
| 0x0008 | Eingangssignalfehler an der Stromschleife |
| 0x0009 | Ruhestromverletzung |
| 0x000A | Überspannung |
| 0x000B | zu hoch |
| 0x000C | unterhalb der kritischen Grenze |
| 0x000D | Rohrbruch |
| 0x000E | Boil-Off Druck zu niedrig |
| 0x000F | CRASH erkannt |
| 0x0010 | blockiert |
| 0x0011 | Boil-Off Ansprechdruck zu hoch |
| 0x0012 | Boil-Off Ansprechdruck zu niedrig |
| 0x0013 | Vereisung Stufe 1 |
| 0x0014 | Vereisung Stufe 2 |
| 0x0015 | Vertauschung der Sensoren am Eintritt und Austritt |
| 0x0016 | Fehlerhafte Überfüllsicherung |
| 0x0017 | BSD- Fehler |
| 0x0018 | Parameter-Checksummen von IBS und CE-SG unterscheiden sich |
| 0x0019 | zu niedrig |
| 0x001A | unplausibel |
| 0x001B | Zellenschluss Batterie 1 |
| 0x001C | Zellenschluss Batterie 2 |
| 0x001D | Maximaler Energiedurchsatz überschritten |
| 0x001E | Batterie Tiefentladen |
| 0x001F | Schlechtes Isolationsvakuum am Tank |
| 0x0020 | AD-Wandler Fehler auf Kanal 1 |
| 0x0021 | AD-Wandler Fehler auf Kanal 2 |
| 0x0022 | Strom Über- oder Unterschreitung im angesteuerten Zustand |
| 0x0023 | Strom Über- oder Unterschreitung im nicht angesteuerten Zustand |
| 0x0024 | Widerstandsfehler: Widerstand außerhalb der vorgesehenen Bereichsgrenzen |
| 0x0025 | Plausibilitätsfehler im nicht angesteuerten Zustand des Starter Interlock |
| 0x0026 | Plausibilitätsfehler im angesteuerten Zustand des Starter Interlock |
| 0x0027 | Plausibilitätsfehler Drehzahl Zusatzwasserpumpe |
| 0x0028 | Fehler in der Zusatzwasserpumpe |
| 0x0029 | Spannungsabfall über Diode 1 unplausibel |
| 0x002A | Spannungsabfall über Diode 2 unplausibel |
| 0x002B | Leitungsdruck fällt nach dem Ausschalten des Steuerventils für gasförmigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002C | Leitungsdruck fällt nach dem Ausschalten des Steuerventils für flüssigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002D | Leitungsdruck steigt nach dem Einschalten des Steuerventils für gasförmigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002E | Leitungsdruck steigt nach dem Einschalten des Steuerventils für flüssigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002F | Passiver Druckverlust |
| 0x0030 | Druck im Druckspeicher unter Minimalwert |
| 0x0031 | Druck über Maximalwert |
| 0x0032 | Fehler beim Druckaufbau Kompressor (Zeitüberschreitung) |
| 0x0033 | Fehler Entlüftung (Zeitüberschreitung) |
| 0x0034 | Fehler beim Spülen der Nebensystemkapsel |
| 0x0035 | Selbsttest TSE fehlgeschlagen |
| 0x0036 | Plausibilitätsfehler Kühlwassersensoren |
| 0x0037 | Fehler bei Boil-Off Überwachung |
| 0x0038 | Oxidator-Temperatur zu hoch oder zu niedrig |
| 0x0039 | über der kritischen Grenze |
| 0x003A | Überhitzungsstufe 2 |
| 0x003B | Überhitzungsstufe 1 |
| 0x003C | Ventil leckt |
| 0x003D | Falsche Protokollinterpretation zwischen CE-SG und TSE |
| 0x003E | Integrität des TSE-Massenwertes ist nicht gewährleistet |
| 0x003F | Berechnung des TSE-Massenwertes nicht möglich |
| 0x0040 | Sensor fehlt / Leitungsunterbrechung |
| 0x0041 | Kurzschluss |
| 0x0042 | Fehlerhafter Sensor (Werte außerhalb des zulässigen Bereichs) |
| 0x0043 | Plausibilitätsfehler gegenüber Referenzsensor |
| 0x0044 | Cross Check Fehler oder Plausibilitätsfehler gegenüber Referenzsensor |
| 0x0045 | Schwerer Fehler |
| 0x0046 | Power Fail |
| 0x0047 | Interner IBS Fehler |
| 0x0048 | H2-Warnung Low-Alarm |
| 0x0049 | H2-Warnung High-Alarm |
| 0x004A | Quittierungsfehler |
| 0x004B | Leichter Sensor Fehler |
| 0x004C | zu niedrig während der Betankung |
| 0x004D | Tankdruckschwelle 1 unterschritten |
| 0x004E | Tankdruckschwelle 2 unterschritten |
| 0x004F | Übertemperatur |
| 0x0050 | Trockenlauf |
| 0x0051 | Falsche Spannung |
| 0x0052 | Defektes Isolationsvakuum an Tankkupplung |
| 0x0053 | Offen blockiert |
| 0x0054 | Defektes Isolationsvakuum am Einfüllrohr |
| 0x0055 | Defektes Isolationsvakuum oder offen blockiertes Befüll- und Entnahmeventil flüssig während H2-Betrieb |
| 0x0056 | Defektes Isolationsvakuum oder offen blockiertes Befüll- und Entnahmeventil flüssig während keine Betankung und kein H2-Betrieb |
| 0x0057 | Zu niedrige Temperatur des Oxidators bei genügend Druck in der Boil-Off Leitung |
| 0x0058 | Ventil undicht |
| 0x0059 | Anzahl Thermoshocks überschritten |
| 0x005A | Pneumatikdruck zu niedrig für Betankung |
| 0x005B | Fehler beim Drucktest |
| 0x005C | Fehler beim gasförmigen Entnahmeventil |
| 0x005D | Fehler beim Motorabsperrventil |
| 0x005E | Fehler am Druckregler |
| 0x005F | Zeitüberschreitung Dichtigkeitstest |
| 0x0060 | Netzwerkmanagement Kommunikationsfehler DME-CESG |
| 0x0061 | Eingangssignalfehler |
| 0x0062 | Computerfehler |
| 0x0063 | Kurzschluss nach Masse |
| 0x0064 | Kurzschluss nach Batteriespannung oder Übertemperatur |
| 0x0065 | Leitungsunterbrechung |
| 0x0066 | Leitungsunterbrechung |
| 0x0067 | Kurzschluss nach Masse |
| 0x0068 | Wert oder Signal außerhalb des spezifizierten Bereichs |
| 0x0069 | Wert oder Signal unplausibel |
| 0x006A | Kurzschluss nach Masse oder Verlust der Versorgungsspannung |
| 0x006B | Botschaftsausfall DI_N |
| 0x006C | Error Passiv |
| 0x006D | Bus Off |
| 0x006E | Dauerhafte Unterkühlung |
| 0x006F | Dauerhafte Überhitzung |
| 0x0070 | Kommunikationsfehler |
| 0x0071 | TSE nicht kalibriert |
| 0x0072 | Timeout (Botschaft in 450ms nicht empfangen) |
| 0x0073 | offen blockiert, oder die Überfüllsicherung springen nicht an |
| 0x0074 | Leitungsunterbrechung oder Kurzschluss nach Masse |
| 0x0075 | Strom Über- oder Unterschreitung im angesteuerten oder nicht angesteuerten Zustand |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | Steuergerät, interner Fehler, Kanal 1 |
| 0x5D0D | Steuergerät, interner Fehler, Kanal 2 |
| 0x5D10 | Batterie 1 Ladezustand |
| 0x5D11 | AD-Wandler im CE-SG |
| 0x5D12 | Batterie 2 Ladezustand |
| 0x5D2C | Fehlerrückmeldungen Zusatzwasserpumpe |
| 0x5D2E | Stromschleife für Betankung |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5D0C | 0x0066 | 0x0001 | 0xFFFE | 0xFFFE |
| 0x5D0D | 0x0066 | 0x0001 | 0xFFFE | 0xFFFE |
| 0x5D10 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x5D11 | 0x0066 | 0x0001 | 0xFFFE | 0xFFFE |
| 0x5D12 | 0x0066 | 0x0022 | 0x0023 | 0x0024 |
| 0x5D2C | 0x0063 | 0x005C | 0x005D | 0xFFFE |
| 0x5D2E | 0x0066 | 0x0001 | 0x0064 | 0x0065 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | IN_FUTA_P_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0002 | IN_FUTA_P_1_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0003 | IN_FUTA_P_2_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0004 | IN_SUPPIPE_P_1_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0005 | IN_SUPPIPE_P_2_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0006 | IN_SUPPIPE_P_1_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0007 | IN_SUPPIPE_P_2_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0008 | IN_BO_P_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x0009 | IN_AMB_P_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x000A | IN_AMB_P_CD | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x000B | AIP_ENG_V | bar | high | unsigned int | - | 8 | 65535 | 0 |
| 0x000C | IN_GHY_CL_P_V | bar | high | unsigned int | - | 21 | 65535 | 0 |
| 0x000D | IN_LHY_CL_P_V | bar | high | unsigned int | - | 21 | 65535 | 0 |
| 0x000E | IN_PRS_ACCU_P_V | bar | high | unsigned int | - | 21 | 65535 | 0 |
| 0x000F | IN_OX_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0010 | IN_OX_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0011 | IN_MPVA_IN_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0012 | IN_MPVA_IN_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0013 | IN_MPVA_SP_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0014 | IN_MPVA_SP_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0015 | IN_COL_INL_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0016 | IN_COL_INL_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0017 | IN_COL_EXH_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0018 | IN_COL_EXH_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0019 | IN_COMP_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001A | IN_COMP_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001B | IN_HEATEX_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001C | IN_HEATEX_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001D | IN_FUT_CLT_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001E | IN_FUT_CLT_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x001F | IN_VENT_TEMP_CD | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0020 | IN_VENT_TEMP_V | °C | high | unsigned int | - | 900 | 65535 | -100 |
| 0x0021 | DMA_TEMP_V | °C | high | unsigned int | - | 360 | 65535 | -260 |
| 0x0022 | IN_BT_U_1_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0023 | IN_BT_U_2_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0024 | IN_BN_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0025 | IN_BN_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0026 | IN_BN_CD_O | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0027 | IN_CR_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0028 | IN_CR_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0029 | IN_STRT_ILK_1_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002A | IN_STRT_ILK_1_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002B | IN_STRT_ILK_2_CD | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002C | IN_STRT_ILK_2_V | V | high | unsigned int | - | 20 | 65535 | 0 |
| 0x002D | IN_LHY_COV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x002E | IN_LHY_COV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x002F | IN_GHY_COV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0030 | IN_GHY_COV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0031 | IN_MPVA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0032 | IN_MPVA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0033 | IN_ENG_SOV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0034 | IN_ENG_SOV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0035 | IN_ADD_ABV_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0036 | IN_ADD_ABV_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0037 | IN_P_ACCU_VA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0038 | IN_P_ACCU_VA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x0039 | IN_NSK_FL_VA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003A | IN_NSK_FL_VA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003B | IN_REG_VA_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003C | IN_REG_VA_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003D | IN_FUFF_I_CD | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003E | IN_FUFF_I_CD_O | A | high | unsigned int | - | 3 | 65535 | 0 |
| 0x003F | IN_FTC_CLO_1_V | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0040 | IN_FTC_CLO_1_CD | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0041 | IN_FTC_CLO_2_V | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0042 | IN_FTC_CLO_2_CD | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0043 | IN_FTC_OPN_V | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0044 | IN_FTC_OPN_CD | mA | high | unsigned int | - | 20 | 65535 | 0 |
| 0x0045 | HS_BOOT_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0046 | HS_BOOT_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0047 | HS_ENG_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0048 | HS_ENG_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x0049 | HS_FUTA_CLT_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004A | HS_FUTA_CLT_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004B | HS_PSCMP_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004C | HS_PSCMP_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004D | HS_SCAP_HYC_V | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004E | HS_SCAP_HYC_CD | % | high | unsigned int | - | 4 | 65535 | 0 |
| 0x004F | WGH_LH2_V | g | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x0050 | R_QVM_T_1_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0051 | R_QVM_T_2_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0052 | R_QVM_T_3_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0053 | R_QVM_T_4_CD | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0054 | CURR_REF_TIME | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0055 | CURR_H2_TIME | min | high | unsigned int | - | 1 | 1 | 0 |
| 0x0056 | COSP_HY_AVL_V | kg/h | high | unsigned int | - | 200 | 65535 | 0 |
| 0x0057 | IN_OFI_PR_1_CD | Ohm | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x0058 | IN_OFI_PR_2_CD | Ohm | high | unsigned int | - | 10000 | 65535 | 0 |
| 0x0059 | P_DA | W | high | unsigned int | - | 40 | 65535 | 0 |
| 0x005A | P_BO | W | high | unsigned int | - | 40 | 65535 | 0 |
| 0x005B | P_DA_SV | W | high | unsigned int | - | 40 | 65535 | 0 |
| 0x005C | IN_AUWP_H2_RPM_V | rpm | high | unsigned int | - | 1 | 1 | 0 |
| 0x005D | OUT_AUWP_H2_RPM | rpm | high | unsigned int | - | 1 | 1 | 0 |
| 0x005E | DIAG_HS_BOOT_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x005F | DIAG_HS_ENG_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0060 | DIAG_HS_FUTA_CLT_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0061 | DIAG_HS_PSCMP_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0062 | DIAG_HS_SCAP_PARAM | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0063 | BETRIEBSZUST | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0064 | ST_CLC_N_CD | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0065 | ST_CLC_P_CD | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0066 | SYSTEM_TIME | h | high | unsigned int | - | 1 | 1 | 0 |
| 0x0067 | ST_KL_15_V | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0068 | ST_KL_R_V | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFE | Unbenutzte Umweltbedingung | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xFFFF | Unbekannte Umweltbedingung | - | high | unsigned int | - | 1 | 1 | 0 |

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x5D0C | 0xFFFF | 0xFFFF | 0x0006 | 0x0005 |
| 0x5D0D | 0xFFFF | 0xFFFF | 0x0006 | 0x0005 |
| 0x5D10 | 0xFFFF | 0x001A | 0x0019 | 0xFFFF |
| 0x5D11 | 0xFFFF | 0x0021 | 0x0020 | 0xFFFF |
| 0x5D12 | 0xFFFF | 0x001A | 0x0019 | 0xFFFF |
| 0x5D2C | 0x0051 | 0x0050 | 0x0010 | 0x004F |
| 0x5D2E | 0xFFFF | 0xFFFF | 0x0008 | 0x0069 |

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | Kein Fehler |
| 0x0001 | Wert zu groß |
| 0x0002 | Wert zu klein |
| 0x0003 | Kein Signal |
| 0x0004 | Wert unplausibel |
| 0x0005 | Computerfehler |
| 0x0006 | Eingangssignalfehler |
| 0x0007 | Ausgangssignalfehler des CE-SG |
| 0x0008 | Eingangssignalfehler an der Stromschleife |
| 0x0009 | Ruhestromverletzung |
| 0x000A | Überspannung |
| 0x000B | zu hoch |
| 0x000C | unterhalb der kritischen Grenze |
| 0x000D | Rohrbruch |
| 0x000E | Boil-Off Druck zu niedrig |
| 0x000F | CRASH erkannt |
| 0x0010 | blockiert |
| 0x0011 | Boil-Off Ansprechdruck zu hoch |
| 0x0012 | Boil-Off Ansprechdruck zu niedrig |
| 0x0013 | Vereisung Stufe 1 |
| 0x0014 | Vereisung Stufe 2 |
| 0x0015 | Vertauschung der Sensoren am Eintritt und Austritt |
| 0x0016 | Fehlerhafte Überfüllsicherung |
| 0x0017 | BSD- Fehler |
| 0x0018 | Parameter-Checksummen von IBS und CE-SG unterscheiden sich |
| 0x0019 | zu niedrig |
| 0x001A | unplausibel |
| 0x001B | Zellenschluss Batterie 1 |
| 0x001C | Zellenschluss Batterie 2 |
| 0x001D | Maximaler Energiedurchsatz überschritten |
| 0x001E | Batterie Tiefentladen |
| 0x001F | Schlechtes Isolationsvakuum am Tank |
| 0x0020 | AD-Wandler Fehler auf Kanal 1 |
| 0x0021 | AD-Wandler Fehler auf Kanal 2 |
| 0x0022 | Strom Über- oder Unterschreitung im angesteuerten Zustand |
| 0x0023 | Strom Über- oder Unterschreitung im nicht angesteuerten Zustand |
| 0x0024 | Widerstandsfehler: Widerstand außerhalb der vorgesehenen Bereichsgrenzen |
| 0x0025 | Plausibilitätsfehler im nicht angesteuerten Zustand des Starter Interlock |
| 0x0026 | Plausibilitätsfehler im angesteuerten Zustand des Starter Interlock |
| 0x0027 | Plausibilitätsfehler Drehzahl Zusatzwasserpumpe |
| 0x0028 | Fehler in der Zusatzwasserpumpe |
| 0x0029 | Spannungsabfall über Diode 1 unplausibel |
| 0x002A | Spannungsabfall über Diode 2 unplausibel |
| 0x002B | Leitungsdruck fällt nach dem Ausschalten des Steuerventils für gasförmigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002C | Leitungsdruck fällt nach dem Ausschalten des Steuerventils für flüssigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002D | Leitungsdruck steigt nach dem Einschalten des Steuerventils für gasförmigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002E | Leitungsdruck steigt nach dem Einschalten des Steuerventils für flüssigen H2 nicht innerhalb der vorgesehen Zeit |
| 0x002F | Passiver Druckverlust |
| 0x0030 | Druck im Druckspeicher unter Minimalwert |
| 0x0031 | Druck über Maximalwert |
| 0x0032 | Fehler beim Druckaufbau Kompressor (Zeitüberschreitung) |
| 0x0033 | Fehler Entlüftung (Zeitüberschreitung) |
| 0x0034 | Fehler beim Spülen der Nebensystemkapsel |
| 0x0035 | Selbsttest TSE fehlgeschlagen |
| 0x0036 | Plausibilitätsfehler Kühlwassersensoren |
| 0x0037 | Fehler bei Boil-Off Überwachung |
| 0x0038 | Oxidator-Temperatur zu hoch oder zu niedrig |
| 0x0039 | über der kritischen Grenze |
| 0x003A | Überhitzungsstufe 2 |
| 0x003B | Überhitzungsstufe 1 |
| 0x003C | Ventil leckt |
| 0x003D | Falsche Protokollinterpretation zwischen CE-SG und TSE |
| 0x003E | Integrität des TSE-Massenwertes ist nicht gewährleistet |
| 0x003F | Berechnung des TSE-Massenwertes nicht möglich |
| 0x0040 | Sensor fehlt / Leitungsunterbrechung |
| 0x0041 | Kurzschluss |
| 0x0042 | Fehlerhafter Sensor (Werte außerhalb des zulässigen Bereichs) |
| 0x0043 | Plausibilitätsfehler gegenüber Referenzsensor |
| 0x0044 | Cross Check Fehler oder Plausibilitätsfehler gegenüber Referenzsensor |
| 0x0045 | Schwerer Fehler |
| 0x0046 | Power Fail |
| 0x0047 | Interner IBS Fehler |
| 0x0048 | H2-Warnung Low-Alarm |
| 0x0049 | H2-Warnung High-Alarm |
| 0x004A | Quittierungsfehler |
| 0x004B | Leichter Sensor Fehler |
| 0x004C | zu niedrig während der Betankung |
| 0x004D | Tankdruckschwelle 1 unterschritten |
| 0x004E | Tankdruckschwelle 2 unterschritten |
| 0x004F | Übertemperatur |
| 0x0050 | Trockenlauf |
| 0x0051 | Falsche Spannung |
| 0x0052 | Defektes Isolationsvakuum an Tankkupplung |
| 0x0053 | Offen blockiert |
| 0x0054 | Defektes Isolationsvakuum |
| 0x0055 | Defektes Isolationsvakuum oder offen blockiertes Befüll- und Entnahmeventil flüssig während H2-Betrieb |
| 0x0056 | Defektes Isolationsvakuum oder offen blockiertes Befüll- und Entnahmeventil flüssig während keine Betankung und kein H2-Betrieb |
| 0x0057 | Zu niedrige Temperatur des Oxidators bei genügend Druck in der Boil-Off Leitung |
| 0x0058 | Ventil undicht |
| 0x0059 | Anzahl Thermoshocks überschritten |
| 0x005A | Pneumatikdruck zu niedrig für Betankung |
| 0x005B | Fehler beim Drucktest |
| 0x005C | Fehler beim gasförmigen Entnahmeventil |
| 0x005D | Fehler beim Motorabsperrventil |
| 0x005E | Fehler am Druckregler |
| 0x005F | Zeitüberschreitung Dichtigkeitstest |
| 0x0060 | Netzwerkmanagement Kommunikationsfehler DME-CESG |
| 0x0061 | Eingangssignalfehler |
| 0x0062 | Computerfehler |
| 0x0063 | Kurzschluss nach Masse |
| 0x0064 | Kurzschluss nach Batteriespannung oder Übertemperatur |
| 0x0065 | Leitungsunterbrechung |
| 0x0066 | Leitungsunterbrechung |
| 0x0067 | Kurzschluss nach Masse |
| 0x0068 | Wert oder Signal außerhalb des spezifizierten Bereichs |
| 0x0069 | Wert oder Signal unplausibel |
| 0x006A | Kurzschluss nach Masse oder Verlust der Versorgungsspannung |
| 0x006B | Botschaftsausfall DI_N |
| 0x006C | Error Passiv |
| 0x006D | Bus Off |
| 0x006E | Dauerhafte Unterkühlung |
| 0x006F | Dauerhafte Überhitzung |
| 0x0070 | Kommunikationsfehler |
| 0x0071 | TSE nicht kalibriert |
| 0x0072 | Timeout (Botschaft in 450ms nicht empfangen) |
| 0xFFFF | unbekannte Fehlerart |
