# bpcm72.prg

## General

|  |  |
| --- | --- |
| File | bpcm72.prg |
| Type | PRG |
| Jobs | 117 |
| Tables | 55 |
| Origin | BMW EA-431 MAXIMILIAN_ZETTL |
| Revision | 1.010 |
| Author | IAV_INC. EA-423 NAYAN_PATEL, BERATA_GmbH HT_A_2 MAXIMILIAN_ZETT |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | BPCM (Battery Pack Control Module) |  |  |
| ORIGIN | string | BMW EA-431 MAXIMILIAN_ZETTL |  |  |
| REVISION | string | 1.010 |  |  |
| AUTHOR | string | IAV_INC. EA-423 NAYAN_PATEL, BERATA_GmbH HT_A_2 MAXIMILIAN_ZETT |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.11 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

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

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $04 reportDTCSnapshotRecordByDTCNumber UDS  : $06 reportDTCExtendedDataRecordByDTCNumber UDS  : $09 reportSeverityInformationOfDTC Modus: Default

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

_No arguments._

### IDENT

Identdaten UDS  : $22   ReadDataByIdentifier UDS  : $3F30 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### _IDENT_DCX

DCX Ident only for development UDS $22 $F1 $xx

_No arguments._

### _UDS_TEST_E72

Test Services Modus: Default

_No arguments._

### _BPCM_ENG_SW_NO

TO READ OUT THE SW NUMBER ASSIGNED DURING EACH I-STEP OF DEVELOPMENT THIS SERVICE IS ONLY FOR DEVELOPMENT AND MAY BE REMOVED AT START OF PRODUCTION THIS NUMBER REPRESENTS THE MAJOR, MINOR AND BUILD OF SW RELEASE AS WELL AS THE INDICATES IF THE SW PRESENT IN BPCM IS FOR BMW_SW OR DCX TO VERIFY THE VALIDITY

_No arguments._

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob Modus   : Default

_No arguments._

### ZIF_LESEN

Auslesen des Zulieferinfofeldes KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz und KWP2000: $1A   ReadECUIdentification $91   VehicleManufacturerECUHardware*Number oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### ZIF_BACKUP_LESEN

Auslesen des Backups des Zulieferinfofeldes ProgrammReferenzBackup         PRGREFB vehicleManufECUHW*NumberBackup VMECUH*NB KWP2000: $22   ReadDataByCommonIdentifier $2500 PRBHW*B oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### PHYSIKALISCHE_HW_NR_LESEN

Auslesen der physikalischen Hardwarenummer UDS: $22,$3F Read Data Identifier BMW $41 Hardware Part Number

_No arguments._

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### STATUS_SOC_LESEN

HIGH VOLTAGE BATTERIE SOC WERT

_No arguments._

### STATUS_CURRENT_LESEN

HIGH VOLT BATTERIE STROM SENSOR WERT negative Stromwerte bedeuten Laden der Batterie POSITIVE Stromwerte bedeuten Entladung der Batterie

_No arguments._

### STATUS_BUSVOLT_CALCULATE_LESEN

SUMME der 26 MODUL SPANNUNGEN ALS HV-BUS SPANNUNG LESEN

_No arguments._

### STATUS_BUS_VOLT_LESEN

HV BUS SPANNUNG Wert

_No arguments._

### STATUS_BUSVOLT_SOURCE_LESEN

QUELLE FUER HV BUS SPANNUNG Wert

_No arguments._

### STATUS_PACK_VOLT_LESEN

PACK SPANNUNG SENSOR Wert

_No arguments._

### STATUS_PACK_VOLT_SOURCE_LESEN

QUELLE FUER PACK SPANNUNG Wert

_No arguments._

### STATUS_PWR_CHRG_LT_LESEN

Lang Zeit 10s LADELEISTUNGS LIMIT

_No arguments._

### STATUS_PWR_CHRG_ST_LESEN

Kurz Zeit 2s LADELEISTUNGS LIMIT

_No arguments._

### STATUS_PWR_DISCHRG_LT_LESEN

Lang Zeit 10s ENTLADELEISTUNGS LIMIT

_No arguments._

### STATUS_PWR_DISCHRG_ST_LESEN

Kurz Zeit 2s ENTLADELEISTUNGS LIMIT

_No arguments._

### STATUS_MAX_MODVOLT_LESEN

MAXIMALE SPANNUNG ALLER 26 MODUL SPANNUNGSENSOREN

_No arguments._

### STATUS_MIN_MODULSPANNUNG_LESEN

MINIMALE SPANNUNG ALLER 26 MODUL SPANNUNGSENSOREN

_No arguments._

### STATUS_12V_FEED2CONTROLLER_LESEN

WERT 12V Versorgungsspannung BPCM LESEN

_No arguments._

### STATUS_12V_FEED2PUMP_LESEN

WERT 12V Versorgungsspannung BATTERIE KUEHLMITTEL PUMPE

_No arguments._

### STATUS_12V_FEED2CNTCR_LESEN

WERT 12V Versorgungsspannung HIGH VOLTAGE BATTERIE PACK SCHUETZE ALLE SCHUETZE WERDEN AUS DER SELBEN QUELLE VERSORGT

_No arguments._

### STATUS_MAX_MODTEMP_LESEN

MAXIMALE TEMPERATUR DER 4 MODUL SENSOREN LESEN

_No arguments._

### STATUS_MIN_MODTEMP_LESEN

MINIMALE TEMPERATUR DER 4 MODUL SENSOREN LESEN

_No arguments._

### STATUS_HV_BPCM_STATE_LESEN

RESULT: TRUE->JA  FALSE->NEIN GRUND FUER VERHINDERUNG ODER ABBRUCH DER vORLADEPROZEDUR

_No arguments._

### STATUS_HVILCURR_RETURN_LESEN

WERT HVIL RUECKKEHRSTROM IN mA

_No arguments._

### STATUS_COOLANT_IN_TEMP_LESEN

KUEHLMITTEL INLET TEMPERATUR

_No arguments._

### STATUS_COOLANT_OUT_TEMP_LESEN

KUEHLMITTEL OUTLET TEMPERATUR

_No arguments._

### STATUS_ISOLATION_RESI_LESEN

ISOLATIONS WIDERSTANDSWERTE MIT OFFENEN UND GESCHLOSSENEN SCHUETZEN UND FUER POSITVEN UND NEGATIVEN HV_BUS

_No arguments._

### STATUS_ISOLATION_STATE_LESEN

ISOLATION TEST RESULT

_No arguments._

### STATUS_CNCTR_PWM_CMD_LESEN

PEB CONTACTOR COMMAND Wert IN %PWM

_No arguments._

### STATUS_COOL_PUMP_SPEED_LESEN

KUEHLMITTEL Pumpe Geschwindigkeit

_No arguments._

### STATUS_PRECHARGE_INHIBIT_TIME_LESEN

Verbleibende Zeit in der die Vorladung verboten ist max. 30min

_No arguments._

### STATUS_4MODULES_TEMP_LESEN

Temperaturwerte ALLER 4 ODER EINZELNER MODULTEMPERATURSENSOREN

| Name | Type | Description |
| --- | --- | --- |
| MODULE_NUMBER | unsigned int | MODULSENSOR NUMMER:1-4 KEIN ARGUMENT(DEFAULT) FUER ALLE SENSOREN NUMMER 1-4 FUER EINZELNEN SENSOR |

### STATUS_26_MODULES_VOLT_LESEN

Spannungswerte ALLER 26 ODER EINZELNER MODULSPANNUNGSSENSOREN

| Name | Type | Description |
| --- | --- | --- |
| MODULE_NUMBER | unsigned int | MODULSENSOR NUMMER:1-26 KEIN ARGUMENT(DEFAULT) FUER ALLE SENSOREN NUMMER 1-26 FUER EINZELNEN SENSOR |

### STATUS_SERVICE_DISCONNECT_LESEN

MELDET DEN AKTUELLEN ZUSTAND DES SERVICE SCHALTERS 0 -> GESCHLOSSEN ODER 1 -> OFFEN ODER 2 -> GESCHLOSSEN & SICHERUNG KAPUTT ODER 3 -> UNBEKANNT

_No arguments._

### STATUS_HVIL_LESEN

MELDET DEN AKTUELLEN ZUSTAND DES HVIL, HOCHVOLTKONTAKTUEBERWACHUNG 0 -> NICHT AKTIV, 1 -> FEHLERFREI,2 -> FEHLER ODER 3 -> UNGUELTIG

_No arguments._

### STATUS_REASON_CNCTR_NOT_CLOSE_WHEN_CMND_LESEN

Gespeicherte & momentan anliegende Fehler die das Schliesen der Schuetze verhindern STORED: Gespeicherte Fehler sind aus vorangegangenen Zyklen PRESENT: momentan anliegende Fehler sind aus dem momentanen Zyklus

_No arguments._

### STATUS_REASONS_CNCTR_OPENED_LESEN

Gespeicherte & momentan anliegende Gruende fuer das Oeffnen der Schuetze STORED: Gespeicherte Fehler sind aus vorangegangenen Zyklen PRESENT: momentan anliegende Fehler sind aus dem momentanen Zyklus

_No arguments._

### STATUS_ACTIVE_DISCHARGE_LESEN

Status der der Aktiven Entladung beim letzen Abschalten des HV-BUS

_No arguments._

### STATUS_BATTERY_RESI_LESEN

Wert HV Batterie Innenwiderstand

_No arguments._

### STATUS_HVBP_CNTCR_STATE_LESEN

Zustand HIGH VOLTAGE Batterie Schuetze

_No arguments._

### STATUS_CAN_CNTCR_CMND_LESEN

Zustand PEB CONTACTOR COMMAND von HCP VIA CAN BUS

_No arguments._

### STATUS_UH_SOC_HISTOGRAM_LESEN

Nutzung-Historie fuer die Ladezustandwerte wandert in verschiedene Intervalle/Schlitze Waehrend der Schuetzen geschlossen sind, erfasst das BPCM ein Snapshot ueber der SOC-Historie. Am Ende aller 10 Sekunden-Interval (Waehrend der Schuetzen geschlossen sind), der richtige wird auf Basis der laufenden SOC inkrementiert. Die Absicht ist ein Snaptshot vom SOC aller 10 Sekunden aufzuzeichnen. SOC Intervalle: 1-> 0~15.9%, 2-> 16.0~30.9%, 3-> 31.0~40.9%, 4-> 41.0~51.9%, 5-> 52.0~60.9%, 6-> 61.0~68.9% SOC Intervalle: 7-> 69.0~80.9%, 8-> 81.0~90.9%, 9-> 91.0~100%

_No arguments._

### STATUS_UH_HIGH_VOLT_EXCEEDED_LESEN

Nutzung-Historie fuer die gesamte Sekunden, wo die Pack- und Modulspannung die Min und MAX- Grenzwerte ueberschreitet das maximale Limit fuer Pack-Spannung ist 419V & das minimale Limit fuer Pack-Spannung ist 244V das maximale Limit fuer Modulspannung ist 16.5V & das minimale Limit fuer Modulspannung ist 9V

_No arguments._

### STATUS_UH_MOD_VOLT_DIFF_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal die Differenz der Modulspannung in einem bestimmten Bereich oder Intervall geht

_No arguments._

### STATUS_UH_MAX_MOD_VLT_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal das maximale Modulspannungswert in einem bestimmten Bereich geht Das BPCM erfasst waehrend seines Betriebes die Historie der maximale Modulspannung referenziert auf die "VLID". Das BPCM erfasst die maximale Modulspannung und Modeltemperatur im Zusammenhang zur Modulspannung über 10 Sekunden Intervall Am Ende der 10 Sekunden VLID wird berechnet und der richtige BIN wird auf Basis der maximale Modulespannung über 10 Sekunden-Intervall inkrementiert wenn MAXMODTEMP < 25°C, VLID = 16.25V / wenn MAXMODTEMP >= 25°C, VLID = 16.723 - 0.0137 * MAXMODTEMP - 0.00020833 * MAXMODTEMP * MAXMODTEMP wenn es ein Fehler in der Sensor-Temperatur gibt , VLID = 16.25V BIN Beschreibung: Intervall 1: < VLID, Intervall 2: VLID TO VLID+0.2, Intervall 3: > VLID+0.2 Z.B.: hier ist ein Liste von Werten über 10 Sekunden- Bereich: MAX MOD VOLT | MAX MOD TEMP 16.0V        |  20.5°C 16.1V        |  20°C 16.2V        |  20°C 16.3V        |  20°C Die von der VLID-Kalkualation benutzte Temperatur von 20°C wird mit 16.3V verglichen, um den Bereich zu bestimmen.

_No arguments._

### STATUS_UH_MIN_MOD_VLT_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal das minimale Modulspannungswert in einem bestimmten Bereich geht MIN MOD Spannung Intervall: Intervall 1: 10.0~20.0V, Intervall 2: 9.0~9.999V, Intervall 3: 8.0~8.999V, Intervall 4: 0~7.999V

_No arguments._

### STATUS_UH_HVBP_VOLTS_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal das HVBP-spannung in einem verschiedenen Bereich geht Intervall 1: <200V, Intervall 2: 200~220V, Intervall 3: 220~240, Intervall 4: 240~260V, Intervall 5: 260~280V,  Intervall 6: 280~300A Intervall 7: 300~320V, Intervall 8: 320~340V,  Intervall 9: 340~360V,  Intervall 10: 360~380V,  Intervall 11: 380~400A,	 Intervall 12: > 400A

_No arguments._

### STATUS_UH_CURRENT_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal der Strom in einem verschiedenen Bereich geht Intervall 1: <-200A, Intervall 2: -200~-120A, Intervall 3: -120~-60A, Intervall 4: -60~-30A, Intervall 5: -30~-10A,  Intervall 6: -10~0A Intervall 7: 0~10A, Intervall 8: 10~30A,  Intervall 9: 30~60A,  Intervall 10: 60~120A,  Intervall 11: 120~200A,	 Intervall 12: > 200A

_No arguments._

### STATUS_UH_TEMPERATURE_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal die HVBP-Temperatur in einem verschiedenen Bereich geht Intervall 1: -40~-5 C, Intervall 2: -4.9~15 C, Intervall 3: 15.1~30 C, Intervall 4: 30.1~35 C, Intervall 5: 35.1~40 C Intervall 6: 40.1~45 C, Intervall 7: 45.1~50 C, Intervall 8: 50.1~60 C, Intervall 9: 60.1~65 C, Intervall 10: 65.1~75 C, Intervall 11: 75.1~85 C

_No arguments._

### STATUS_UH_MOD_TEMP_DIFF_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal die HVBP-Temperatur in einem verschiedenen Bereich geht Modul-Temperatur-Differenz  = MAX MODULE TEMP - MIN MODULE TEMP Intervall 1: 0~3 C, Intervall 2: 3.1~6 C, Intervall 3: 6.1~10 C, Intervall 4: 10.1~125 C

_No arguments._

### STATUS_UH_HVBP_COOLANT_IN_TEMP_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal das HVBP-Kuehlmitteleinlass in einem verschiedenen Temperaturbereich geht Intervall 1: < 0 C, Intervall 2: 0.10~20 C, Intervall 3: 20.1~30 C, Intervall 4: 30.1~45 C, Intervall 5: > 45 C

_No arguments._

### STATUS_UH_HVBP_COOLANT_OUT_TEMP_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal das HVBP-Kuehlmittelauslass in einem verschiedenen Temperaturbereich geht Intervall 1: < 10 C, Intervall 2: 10.1~30 C, Intervall 3: 30.1~40 C, Intervall 4: 40.1~55.0 C, Intervall 5: > 55.0 C

_No arguments._

### STATUS_UH_MOD_COOLANT_TEMP_DELTA_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal das HVBP-Modul und die Kuehlmittel-Einlasstemperaturdifferenz in einem verschiedenen Bereich geht Intervall 1: -40~-30 C, Intervall 2: -29.9~-25 C, Intervall 3: -24.9~20.0 C, Intervall 4: -19.90~-15 C, Intervall 5: -14.9~-0.1 C Intervall 6: 0~15 C, Intervall 7: 15.1~20 C, Intervall 8: 20.1~25 C, Intervall 9: 25.1~30 C, Intervall 10: 30.1~40 C, Intervall 11: > 40 C

_No arguments._

### STATUS_UH_ISOLATION_RESI_HISTOGRAM_LESEN

Nutzung-Historie fuer den Isolationswiderstandwert, der in verschiedenen Widerstandsbereiche/Intervalle geht Intervall 1: < 250 kOHMS, Intervall 2: 250~499 kOHMS, Intervall 3: 500~749 kOHMS, Intervall 4: 750~999 kOHMS, Intervall 5: > 999 kOHMS

_No arguments._

### STATUS_LIFETIME_CNCTR_CLOSES_LESEN

Nutzung-Historie fuer wieviel mal während der Lebensdauer der Hochvolt-Batterie, die Schuetzen geschlossen waren

_No arguments._

### STATUS_LIFETIME_12V_LOSS_LESEN

Nutzung-Historie fuer wieviel mal ein Ausfall der 12v Spannung zum Kontroller waehrend der Lebensdauer geschah Die Bedeutung vom Zaehler ist zu bestimmen, wie oft während der Lebensdauer des FZGes Die 12 Volt Spannung mit geschlossenen Schuetzen oder ohne korrekten Auschaltmechanismus aus Grund eines zufaelligen 12v Ausfall verloren war

_No arguments._

### STATUS_LIFETIME_MIN_OCV_LESEN

die minimael erfasste Leerlaufspannung der Batterie waehrend der Lebensdauer Das BPCM speichert die minimale Leerlaufpannung der Batterie-Pack. die Leerlaufspannung (OCV) wird beim Startup bevor die Schuetzen geschlossen sind ein mal erfasst. wenn dieser Wert kleiner als der gespeicherten Wert ist, wird er als neuen minimalen Leerlauf-Pack-Spannung ueberschrieben.

_No arguments._

### STATUS_LIFETIME_CNCTR_OPEN_REQ_LESEN

Nutzung-Historie fuer wie oft der "Open Request" für die Schuetzen waehrend der Lebensdauer vom BPCM gesetzt sind Jedes mal wenn das BPCM vom HCP verlangt, die Schuetzen zu oeffnen, diese Datenspeicherung wird inkrementiert. Z.B: das BPCM feststellt, dass das FZG. die Schuetzen oeffnen soll und daher wird das BIT auf CAN gesetzt für die "OPEN REquest" -Bedingung. diese Datenspeicherung wird nur einmal inkrementiert. Es ist kein wiederholtes Inkrement im CAN-Signal.

_No arguments._

### STATUS_LIFETIME_PRECHARGE_FAILS_LESEN

Nutzung-Historie fuer wie oft die Aufladuprozedur waehrend der Lebensdauer fehlgeschlagen war

_No arguments._

### STATUS_TOTAL_OEPRATION_TIME_LESEN

Nutzung Historie fuer wieviele Operationen der Batterie Pack waehrend eines Klemmenwechsels akkumuliert waren Das BPCM speichert die gesammte akkumulierte Zeit, in der er im Betrieb war, ab der Zeit wo der Kontroller geweckt ist bis er einschlaeft

_No arguments._

### STATUS_TOTAL_CNCTR_CLOSING_TIME_LESEN

Nutzung-Historie fuer wieviel mal während der Lebensdauer der Hochvolt-Batterie, die Schuetzen geschlossen waren

_No arguments._

### STATUS_CUMULATIVE_CHARGE_AMP_HOURS_LESEN

Total akkumulierter Wert der Batterieladung seit der ersten Nutzung RESOLUTION  1 Ampere/Stunde

_No arguments._

### STATUS_CUMULATIVE_DISCHARGE_AMP_HOURS_LESEN

Total akkumulierter Wert der Batterieentladung seit der ersten Nutzung RESOLUTION 1 Ampere/Stunde

_No arguments._

### STATUS_LIFETIME_CNCTR_OPENS_LESEN

Nutzung-Historie fuer wieviel mal während der Lebensdauer der Hochvolt-Batterie, die Schuetzen offen waren Auch die Nutzung-Historie für wieviel der Lebensdauer der Batterie, die Schuetzen offen waren unter "Impending-Open" Bedingung und Nutzung-Historie fuer wieviel mal waren die schuetzen offen unter hoehen Strombelastung waehrend Lebensdauer Jedes mal wenn die Schuetzen aus irgend ein Grund offen sind, wenn der absolute Wert (Plus oder minus) des Stroms grosser als 5 Ampere

_No arguments._

### STATUS_UH_BAT_RESI_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal der Batteriewiderstand in verschiedenen Widerstandbereiche/Intervalle geht Intervall 1: 0-100 mOhms, Intervall 2: 101-500 mOhms, Intervall 3: 501-1000 mOhms, Intervall 4: 1001-1500 mOhms, Intervall 5: 1501-2000 mOhms Intervall 6: 2001-2500 mOhms, Intervall 7: 2501-3000 mOhms, Intervall 8: 3001-3500 mOhms, Intervall 9: 3501-4000 mOhms Intervall 10: 4001-4500 mOhms, Intervall 11: 4501-5000 mOhms

_No arguments._

### STATUS_SOC_5DAY_HISTORY

Ladezustand-Historie mit STAT_AMPRH_CHG_WERT Integrationswerte in der letzten 6 Tagen ab heute das Ziel dieser gespeicherten Daten und der Ladenzustand-Historie am Tag X, ist eine Hilfe für die Service, um festzustellen was am Batterie in den letzten 5 Betriebstagen geschah. die Ladezustandswerte und die Delta der Amp/Stunde (Ladung und Entladung) sind Snapschuesse an einem bestimmten Tag. Der Ladezustand bei Klemme 30, Ampere/Stunden (Ladung und Entladung) - Delta-Wert vom letzten Betriebstag

_No arguments._

### STATUS_UH_HVBP_COOLANT_TEMP_DELTA_HISTOGRAM_LESEN

Nutzung-Historie fuer wieviel mal die Temperaturdiffirenz für das HVBP-Kuehlmittel-Einlass und Auslass in einem verschiedenen Temperaturbereich geht Intervall 1: < 0 C, Intervall 2: 0~1 C, Intervall 3: 1~2 C, Intervall 4: 2~3 C, Intervall 5: 3~4 C Intervall 6: 4~5 C, Intervall 7: 5~6 C, Intervall 8: 6~7 C, Intervall 9: 7~9 C, Intervall 10: 9~11 C, Intervall 11: 11~13 C Intervall 12: 13~15 c, Intervall 13: > 15 C

_No arguments._

### STATUS_WELD_CHECK_LESEN

Ergebnisse vom Schweiss-Check -Ablauf für das Hochvolt Batterie Pack (HVBP) zeigt, ob eine oder beide Hochvoltleitungen der Schuetze(n) verschweisst ist (sind)

_No arguments._

### STATUS_OPEN_CABLE_LESEN

TO READ OUT THE OPEN CABLE DETECTION TEST RESULT AND THE OPEN CABLE DETECTION CIRCUIT CHECK RESULT

_No arguments._

### STATUS_BATT_CHANGE_ODOMETER

Fzg.- ODOMETER-Wert vom letzten Batteriewechsel auslesen

_No arguments._

### _STATUS_FAULT_CHECK_LESEN

SHOWS THE STATUS OF DIFFERENT FAULT CHECK AND REMEDIAL ACTION FUNCTIONALITIES THAT IF THE FUNCTIONALITIES IS ENABLED OR DISABLED

_No arguments._

### _STATUS_WAKE_UP_SIGNALS_LESEN

SHOWS THE STATUS OF WAKE UP SIGNALS FOR BPCM - HYBRID ACCESSORY AND HS COMMUNICATION ENABLE

_No arguments._

### STATUS_CONTACTOR_CLOSURE_ENABLE_LESEN

Auslesen von Wert des Schuetze-Schliessen Aktivierungsbits geschrieben von "STEUERN_CONTACTOR_CLOSURE_ENABLE" JOB

_No arguments._

### STEUERN_CONTACTOR_CLOSURE_ENABLE

Bit wird gesetzt oder nicht gesetzt, um die Schuetze-Schliessen zu aktivieren oder deaktivieren Bei Deaktivierung des Schutzen-Scliessens bewirkt, dass die Schuetzen sich nicht schliessen mit dem Befehl von HCP bis das Schutzen-Schliessen aktiviert wird Warnung -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

| Name | Type | Description |
| --- | --- | --- |
| CLOSURE_ENABLE | unsigned int | Werttabelle 0 = Disable (HCP -Befehl kann die Schuetzen nicht schliessen) 1 = Enable  (HCP -Befehl kann die Schuetzen schliessen) |

### STATUS_PUMP_ENABLE_LESEN

Auslesen von Wert des Schuetze-Schliessen Aktivierungsbits geschrieben von "STEUERN_PUMP_ENABLE" JOB

_No arguments._

### STEUERN_PUMP_ENABLE

Bit wird gesetzt, um die Pumpe zu aktivieren bzw. deaktivieren Deaktivierung der Pumpen-Kontrolle bewirkt, dass die Pumpe nicht laufen wird Mit internen BPCM-Logik oder bei Ueberschreibung des Befehls vom HCP oder bei Pumpen-Ansteuerung SGBD JOB Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

| Name | Type | Description |
| --- | --- | --- |
| PUMP_ENABLE | unsigned int | Werttabelle 0 = Disable (Pumpe kann nicht in jeder Lage Laufen) 1 = Enable  (Pumpe kann in jeder Lage Laufen) |

### STEUERN_COOL_PUMP

Dieser Job dient den Betrieb von Hochvolt-Batterie Pack-Kuehlmittel PUMPE benutzt extern das das Diagnose-Tool WARNUNG -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

| Name | Type | Description |
| --- | --- | --- |
| ENABLE_PUMP_CONTROL | unsigned int | Werttabelle 0 = DISABLE_CONTROL 1 = ENABLE_CONTROL |
| DESIRED_PUMP_SPEED | unsigned int | gewuenschte Pumpengeschwindigkeit : 0-100% |

### STEUERN_COOL_PUMP_RETURN_CONTROL

Die Kontrolle wiederzubekommen nach Durchfuehrung des	 "STEUERN_COOL_PUMP" JOB Warnung -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

_No arguments._

### STATUS_COOL_PUMP_LESEN

Das BPCM sendet diese Ergebnisse und jede FAULT CODES waehrend der Zeit der Durchfuehrung von "PUMP Control" falls angefordert durch STEUERN JOB

_No arguments._

### STEUERN_BATT_CHANGE_ODOMETER

TO ENTER THE VEHICLE ODOMETER VALUE AT EVERY BATTERY CHANGE

| Name | Type | Description |
| --- | --- | --- |
| CHANGE_ODOMETER | unsigned int | ENTER 1 um den letzten gespeicherten ODOMETER - Wert zu ueberschreiben ENTER 0 um den letzten gespeicherten ODOMETER - Wert zu behalten |

### STEUERN_ISOL_TEST

Starten des Isolationstests durch das Service-Tool Warnung -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

| Name | Type | Description |
| --- | --- | --- |
| ISOLATION_TEST_COMMAND | unsigned int | Werttabelle 0 = STOP 1 = START Bitte 1 zum Test-start oder 0 zum Test-Stopp eingeben |

### STEUERN_ISOL_TEST_RETURN_CONTROL

Die Kontrolle wiederzubekommen nach Durchfuehrung von "STEUERN_ISOL_TEST" JOB Warnung -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

_No arguments._

### STATUS_ISOL_TEST_LESEN

BPCM sendet diese Resultate und Fault-CODES waehrend Ausfuehrung von ISOLATION TEST aufgefordert durch "STEUERN" JOB

_No arguments._

### STEUERN_CLEAR_PUMP_DRYRUN_OFF

RESET die Pumpen-Trockenlauf SWITCH OFF FLAG Warnung -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

| Name | Type | Description |
| --- | --- | --- |
| CLEAR_DRYRUN_OFF | unsigned int | Werttabelle 0 = Don't Reset 1 = Reset ENTER 0 nicht loeschen PUMP DRY RUN OFF ENTER 1 loeschen PUMP DRY RUN OFF |

### STEUERN_CLEAR_DRYRUN_OFF_RETURN_CONTROL

Die Kontrolle wiederzubekommen nach Durchfuehrung von "STEUERN_CLEAR_DRYRUN_OFF" JOB Warnung -> Dieser Job sollte nicht von einer Person ohne ausreichende Systemkenntnisse durchgefuehrt werden

_No arguments._

### STATUS_CLEAR_DRYRUN_OFF_LESEN

BPCM sendet diese Resultate und Fault-CODES waehrend Ausfuehrung von CLEAR PUMP Trockenlauf SWITCH OFF aufgefordert durch "STEUERN" JOB

_No arguments._

### _STEUERN_FAULT_CHECK_DISABLER

TO ENABLE OR DISABLE DIFFERENT FAULT CHECK TESTS THIS INCLUDES THE FAULT CHECK TESTS OF ISOLATION DETECTION WITH CLOSED CONTACTORS, OPEN CABLE DETECTION, OPEN CABLE DETECTION CIRCUIT CHECK AND WELD CHECK & ACTIVE DISCHARGE TEST

| Name | Type | Description |
| --- | --- | --- |
| ISOL_TEST | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE ISOLATION DETECTION TEST WITH CLOSED CONTACTORS 0 = DISABLE 1 = ENABLE |
| OCD | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE ISOLATION DETECTION TEST WITH CLOSED CONTACTORS 0 = DISABLE 1 = ENABLE |
| OCD_CIRCUIT_CHECK | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE ISOLATION DETECTION TEST WITH CLOSED CONTACTORS 0 = DISABLE 1 = ENABLE |
| WELD_CHECK_TEST | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE ISOLATION DETECTION TEST WITH CLOSED CONTACTORS 0 = DISABLE 1 = ENABLE |
| WELD_CHECK_CNTCR_INHIBIT | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE CONTACTOR CLOSURE AFTER FAILED WELD CHECK 0 = DISABLE 1 = ENABLE |

### _BSE_INIT_STATES

BSE INITIALIZATION PARAMETERS

_No arguments._

### _BSE_BPCM_INPUT

BSE INPUTS FROM BPCM SW, MAINLY THE SENSOR VALUES

_No arguments._

### _BSE_BSEC_DATA

None

_No arguments._

### _BSE_EEPROM_DATA_01

EEPROM DATA - INPUT TO BSE

_No arguments._

### _BSE_EEPROM_DATA_02

EEPROM DATA - INPUT TO BSE

_No arguments._

### _BSE_API_DATA_01

BSE API OUTPUTS

_No arguments._

### _BSE_API_DATA_02

BSE API OUTPUTS

_No arguments._

### _BSE_API_DATA_03

BSE API OUTPUTS

_No arguments._

### _WRITE_SOC_OLD

TO OVERWRITE THE OLD SOC VALUE STORED IN THE EEPROM

| Name | Type | Description |
| --- | --- | --- |
| NEW_SOC_OLD | unsigned int | ENTER THE NEW DESIRED STORED SOC TO BE OVERWRITTEN TO THE EEPROM |

### _WRITE_AMPHR_CHARGE

TO OVERWRITE THE AMP-HR CHARGE VALUE STORED IN THE EEPROM

| Name | Type | Description |
| --- | --- | --- |
| NEW_AMP_CHRG_OLD | unsigned long | ENTER THE NEW DESIRED STORED AMP-HR CHARGE TO BE OVERWRITTEN TO THE EEPROM |

### _WRITE_AMPHR_DISCHARGE

TO OVERWRITE THE AMP-HR CHARGE VALUE STORED IN THE EEPROM

| Name | Type | Description |
| --- | --- | --- |
| NEW_AMP_DISCHRG_OLD | unsigned long | ENTER THE NEW DESIRED STORED AMP-HR CHARGE TO BE OVERWRITTEN TO THE EEPROM |

### _STEUERN_LOAD_CHECK_ENABLER

TO ENABLE OR DISABLE LOAD CHECK AND SHORTED BUS DETECTION FUNCTIONALITY

| Name | Type | Description |
| --- | --- | --- |
| ENABLE_DISABLE | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE LOAD CHECK AND SHORTED BUS DETECTION 0 = DISABLE 1 = ENABLE |

### _STATUS_LOAD_CHECK_ENABLER

TO READ OUT THE LOAD CHECK AND SHORTED BUS DETECTION ENABLER BIT

_No arguments._

### _SERVICE_CAN_ENABLER

TO ENABLE OR DISABLE SERVICE CAN COMMUNICATION

| Name | Type | Description |
| --- | --- | --- |
| ENABLE_DISABLE | unsigned int | PUT 0 OR 1 FOR DISABLING OR ENABLING THE SERVICE CAN COMMUNICATION 0 = DISABLE 1 = ENABLE |

### _STATUS_SERVICE_CAN_ENABLER

TO READ OUT THE LOAD CHECK AND SHORTED BUS DETECTION ENABLER BIT

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
| 0x04 | ECUSSDS | ECUSafetySystemDiagnosticSession |
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x43 | ECUHDD | ECUHDDDownloadSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0xXY | -- | unbekannter Diagnose-Mode |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

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

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x000001 | ExampleErrorCode | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### T_TRUE_OR_FALSE

| WERT | TEXT |
| --- | --- |
| 0 | False |
| 1 | True |

### T_HV_ISOLATION_DIAGNOSTIC_STATUS_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | nicht gestartet |
| 1 | gestartet |
| 2 | Diagnose beendet |
| 3 | Diagnose beendet |

### T_STATUS_OF_ISOLATION_FAULT_DIAGNOSITIC_CONTROL

| WERT | TEXT |
| --- | --- |
| 0 | Hybrid Batterie Schuetz muss geschlossen sein |
| 1 | Fehler momentan vorhanden: alle kritischen Fehler |
| 2 | PEB verbunden |

### T_HYBRID_BATTERY_HV_ISOLATION_FAULT_DIAGNOSTIC_STATUS_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | noch nicht gestartet |
| 1 | gestartet |
| 2 | Diagnose fehlerfrei beendet |
| 3 | Diagnose beendet Fehler vorhanden |

### T_CONTACTOR_ENABLE_CONTROL_STAUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb |
| 1 | HV Schuetz Zustand muss offen sein |
| 2 | HV Service Schalter muss gezogen sein |
| 3 | Ausgangs Timer ist abgelaufen bitte warten - Test beendet |

### T_EEPROM_RESET_COMMAND_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | geloescht |
| 1 | Kein Befehl gesendet  |
| 2 | Fahrzeug Geschwindigkeit ungleich null |
| 3 | HV Service Schalter nicht gezogen |

### T_RESET_AND_DONT_RESET

| WERT | TEXT |
| --- | --- |
| 0 | kein Reset |
| 1 | Reset |

### T_HYBRID_BATTERY_PACK_VOLTAGE_SOURCE_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | keine |
| 1 | Erste gueltige Modul Spannung |
| 2 | Summe der Modul Spannungen |
| 3 | Batterie Pack Spannung Sensor |
| 4 | reserviert |
| 5 |  |

### T_HYBRID_BATTERY_BUS_VOLTAGE_SOURCE_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | keine |
| 1 | HL-CAN WERT von PEB |
| 2 | Batterie HV Bus Spannung Sensor |
| 3 | reserviert |

### T_INVALIDVALID_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | ungueltig |
| 1 | gueltig |

### T_COOLING_DEVICE_CONTROLLED_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb |
| 1 | Hybrid batterie temperatur ausserhalb gueltigen Bereich  |
| 2 | Run/Crank Spannung zu niedrig |
| 3 | Fehler momentan vorhanden: alle kritischen Fehler |

### T_EEPROM_RESET_ENABLE

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle-deaktive |
| 1 | Kontrolle-aktiv  |

### T_COOLING_DEVICE_ENABLE

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle-deaktive |
| 1 | Kontrolle-aktiv  |

### T_VALUE_VALID_OR_INVALID

| WERT | TEXT |
| --- | --- |
| 0 | Wert gueltig  |
| 1 | Wert ungueltig |

### T_PROPER_SHUTDOWN

| WERT | TEXT |
| --- | --- |
| 0 | ECU fehlerhaft eingeschlafen |
| 1 | ECU korrekt eingeschlafen |

### T_OFFON_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |

### WELD_CONTACTORS

| WERT | TEXT |
| --- | --- |
| 0 | nicht verschweist |
| 1 | verschweist |

### ACTIVE_DISCHARGE

| WERT | TEXT |
| --- | --- |
| 0 | ERFOLGREICH ENTLADEN |
| 1 | nicht ERFOLGREICH ENTLADEN |

### T_HVBP_CONTACTOR_STATES

| WERT | TEXT |
| --- | --- |
| 0 | offen |
| 1 | VORLADEN |
| 2 | GESCHLOSSEN |
| 3 | VORLADUNG fehlgeschlagen |
| 4 | VORLADUNG VERBOTEN |
| 5 | RESERVIERTER Zustand 1 |
| 6 | RESERVIERTER Zustand 2 |
| 7 | RESERVIERTER Zustand 3 |

### T_HCP_CONTACTOR_CMND

| WERT | TEXT |
| --- | --- |
| 0 | offen |
| 1 | GESCHLOSSEN |
| 2 | ungueltig |
| 3 | CHRASH OEFFNUNG |
| 4 | RESERVIERTER Zustand 2 |
| 5 | RESERVIERTER Zustand 3 |
| 6 | RESERVIERTER Zustand 4 |
| 7 | RESERVIERTER Zustand 5 |

### T_CNTCTRSTAT_TYPE

| WERT | TEXT |
| --- | --- |
| 0 | offen |
| 1 | VORLADEN |
| 2 | GESCHLOSSEN |
| 3 | VORLADUNG VERBOTEN |
| 4 | fehlgeschlagen |
| 7 | Signal nicht verfuegbar |

### T_B_CONTACTOR_COMMAND_TYPE

| WERT | TEXT |
| --- | --- |
| 0 | Qualified Contactor Command = offen |
| 1 | Qualified Contactor Command = geschlossen oder Oeffnung erwartet |

### SERVICE_DISCONNECT

| WERT | TEXT |
| --- | --- |
| 0 | OFFEN |
| 1 | GESCHLOSSEN |
| 2 | GESCHLOSSEN & SICHERUNG Kaputt |
| 3 | NICHT VERFUEGBAR |

### T_OPEN_CLOSE_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | OFFEN |
| 1 | SCHLIESEN |

### T_HYBRID_BATTERY_CONTACTOR_DEVICE_CONTROL_ENABLE_TABLE_1

| WERT | TEXT |
| --- | --- |
| 1 | Positive SCHUETZ Kontrolle aktiv |
| 2 | Vorlade Schuetz Kontrolle aktiv |
| 3 | Negative Schuetz Kontrolle aktiv |

### T_SELECT_OR_DISREGARD

| WERT | TEXT |
| --- | --- |
| 0 | abwaehlen |
| 1 | auswaehlen |

### T_CONTACTOR_TABLE

| WERT | TEXT |
| --- | --- |
| 0 | Offen |
| 1 | schliesen |

### T_HYBRID_BATTERY_CONTACTOR_DEVICE_CONTROL_ENABLE_SELECTION

| WERT | TEXT |
| --- | --- |
| 0 | nichts ausgewaehlt |
| 1 | Positive SCHUETZ Kontrolle aktiv |
| 2 | Vorlade Schuetz Kontrolle aktiv |
| 3 | Negative Schuetz Kontrolle aktiv |

### T_DISABLE_ENABLE_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivieren |
| 1 | Aktivieren |

### HYBRID_LIEF

| NR | TEXT |
| --- | --- |
| 0003 | Bosch |
| 0040 | Delphi |
| 007E | Hitachi |
| 009C | Cobasys |
| 0008 | Siemens |
| FFFF | undefinierter Lieferant |

### DATUM_MONAT

| KW | MON |
| --- | --- |
| 0x01 | 0x01 |
| 0x02 | 0x01 |
| 0x03 | 0x01 |
| 0x04 | 0x01 |
| 0x05 | 0x01 |
| 0x06 | 0x02 |
| 0x07 | 0x02 |
| 0x08 | 0x02 |
| 0x09 | 0x02 |
| 0x0A | 0x03 |
| 0x0B | 0x03 |
| 0x0C | 0x03 |
| 0x0D | 0x03 |
| 0x0E | 0x04 |
| 0x0F | 0x04 |
| 0x10 | 0x04 |
| 0x11 | 0x04 |
| 0x12 | 0x04 |
| 0x13 | 0x05 |
| 0x14 | 0x05 |
| 0x15 | 0x05 |
| 0x16 | 0x05 |
| 0x17 | 0x06 |
| 0x18 | 0x06 |
| 0x19 | 0x06 |
| 0x1A | 0x06 |
| 0x1B | 0x07 |
| 0x1C | 0x07 |
| 0x1D | 0x07 |
| 0x1E | 0x07 |
| 0x1F | 0x07 |
| 0x20 | 0x08 |
| 0x21 | 0x08 |
| 0x22 | 0x08 |
| 0x23 | 0x08 |
| 0x24 | 0x09 |
| 0x25 | 0x09 |
| 0x26 | 0x09 |
| 0x27 | 0x09 |
| 0x28 | 0x0A |
| 0x29 | 0x0A |
| 0x2A | 0x0A |
| 0x2B | 0x0A |
| 0x2C | 0x0A |
| 0x2D | 0x0B |
| 0x2E | 0x0B |
| 0x2F | 0x0B |
| 0x30 | 0x0B |
| 0x31 | 0x0C |
| 0x32 | 0x0C |
| 0x33 | 0x0C |
| 0x34 | 0x0C |
| 0xFF | 0x00 |

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Anlieferzustand |
| 0x01 | Normalbetrieb |
| 0x02 | nicht benutzt |
| 0x03 | Speicher gelöscht |
| 0x04 | nicht benutzt |
| 0x05 | Signaturprüfung PAF nicht durchgeführt |
| 0x06 | Signaturprüfung DAF nicht durchgeführt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vorhanden oder nicht vollständig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vorhanden oder nicht vollständig |
| 0x10 | Reserviert fuer BMW |
| 0x80 | Reserviert fuer Zulieferer |
| 0xXY | unbekannter Programmierstatus |

### HVIL_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | NICHT BESTROMT |
| 1 | FEHLERFREI |
| 2 | fehlgeschlagen |
| 3 | ungueltig |

### FAULT_CHECK

| WERT | TEXT |
| --- | --- |
| 0 | DEAKTIVIERT |
| 1 | AKTIVIERT |

### FAULT_CHECK_TEST

| WERT | TEXT |
| --- | --- |
| 0 | DEAKTIVIERT |
| 1 | AKTIVIERT |

### OCD_TEST_RESULT

| WERT | TEXT |
| --- | --- |
| 0 | noch nicht gestartet |
| 1 | Diagnose fehlerfrei beendet |
| 2 | Diagnose beendet Fehler vorhanden |
| 3 | ABGEBROCHEN |
| 4 | DEAKTIVIERT – KEIN ERGEBNIS VERFÜGBAR |

### ISOLATION_COMMAND

| WERT | TEXT |
| --- | --- |
| 0 | STOP |
| 1 | START |

### ISOLATION_TEST_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | TEST nicht gestartet |
| 1 | TEST gestartet |
| 2 | TEST BEENDET & fehlgeschlagen |
| 3 | TEST BEENDET & bestanden |

### ROUTINE_RETURN_CODES

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 8 | DIAGNOSE TIMER ABGELAUFEN |
| 776 | BPCM FEHLER VORHANDEN IN PEB |
| 1029 | RUN/CRANK Spannung zu niedrig |
| 1291 | Service Schalter muss gezogen sein |
| 1292 | HV BATTERIE SCHUETZ ZUSTAND muss offen sein |
| 2572 | HYBRID BATTERIE Temperatur ausserhalb gueltigen Bereich |
| 2584 | PEB STECKER NICHT ENTFERNT BITTE MIT DIAGNOSEBOX ERSETZEN  |
| 2585 | VORHERIGE DIAGNOSE IST NOCH NICHT BEENDET |
| 2586 | BATTERIE KUEHLMITTEL PUMPE Fehler vorhanden - START NICHT MOEGLICH |
| 2587 | BATTERIE KUEHLMITTEL PUMPE Fehler vorhanden REDUZIERTE GESCHWINDIGKEIT - GESCHWINDIGKEIT KANN NICHT EINGESTELLT WERDEN |
| 2588 | START NICHT MOEGLICH - PUMPE 12V  Versorgungsspannung zu niedrig |
