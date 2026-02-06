# DSC_60.prg

## General

|  |  |
| --- | --- |
| File | DSC_60.prg |
| Type | PRG |
| Jobs | 95 |
| Tables | 24 |
| Origin | BMW EF-43 Kusch |
| Revision | 11.000 |
| Author | BMW EF-43 Kusch |
| ECU Comment | Robert Bosch DSC8 BMW_FAST |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitaets Control DSC E60  |  |  |
| ORIGIN | string | BMW EF-43 Kusch |  |  |
| REVISION | string | 11.000 |  |  |
| AUTHOR | string | BMW EF-43 Kusch |  |  |
| COMMENT | string | Robert Bosch DSC8 BMW_FAST  |  |  |
| PACKAGE | string | 1.29 |  |  |
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

### CBS_INFO

Ausgabe der CBS-Version

_No arguments._

### CBS_DATEN_LESEN

CBS Daten auslesen (fuer CBS Version 1-3) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS Version 1-3) KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BOS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| BOS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, keine Aenderung: 31 Defaultwert: 31 |
| BOS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter fuer Monat, keine Aenderung: 255 Defaultwert: 255 |
| BOS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine Aenderung: 255 Defaultwert: 255 |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### C_CI_LESEN

Codierindex lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $9B Vehicle Manufacturer Coding Index oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob KWP2000: $3B WriteDataByLocalIdentifier $90 Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob KWP2000: $3B WriteDataByLocalIdentifier $90 Vehicle Identification Number KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_AEI_LESEN

Aenderungsindex der Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

_No arguments._

### C_AEI_SCHREIBEN

Aenderungsindex der Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII inkl. Ziffern 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII inkl. Ziffern 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_C_LESEN

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_AUFTRAG

Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### ZIF_LESEN

Auslesen des Zulieferinfofeldes KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz und KWP2000: $1A   ReadECUIdentification $91   VehicleManufacturerECUHardware*Number oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### ZIF_BACKUP_LESEN

Auslesen des Backups des Zulieferinfofeldes ProgrammReferenzBackup         PRGREFB vehicleManufECUHW*NumberBackup VMECUH*NB KWP2000: $22   ReadDataByCommonIdentifier $2500 PRBHW*B oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### PHYSIKALISCHE_HW_NR_LESEN

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen KWP2000: $22   ReadDataByCommonIdentifier $2506 MaximaleBlockLaenge Modus  : Default

_No arguments._

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. Diag_Mode ist integriert KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_RADGESCHWINDIGKEIT

Radgeschwindigkeiten auslesen KWP2000: $21,$01 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_ANALOG

Status Eingaenge DSC_8

_No arguments._

### STATUS_DIGITAL

Status Eingaenge DSC_8

_No arguments._

### STATUS_CAN

Status CAN DSC8

_No arguments._

### STATUS_RPA

Radgeschwindigkeiten auslesen KWP2000: $21,$05 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_FASTA

RPA Fastadaten auslesen KWP2000: $21,$06 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_STANDARDISIERUNG_1

Radgeschwindigkeiten auslesen KWP2000: $21,$07 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_STANDARDISIERUNG_2

Radgeschwindigkeiten auslesen KWP2000: $21,$08 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_STANDARDISIERUNG_3

Radgeschwindigkeiten auslesen erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $21,$09 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_4_DRUCKWERTE

4 aufeinanderfolgende Druckwerte

_No arguments._

### STEUERN_STOP

Digitale Stellglieder ansteuern ABS_DSC57

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### STEUERN_D_STELLGLIED

Digitale Stellglieder ansteuern KWP2000: $30,$04 InputOutputControlByLocalIdentifier Parameter (argument) koennen ausgewaehlt werden Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: "E,EIN,EVVL,AUS,AVVL,1000,EIN,MRA,EIN,USV1" Musterparametersatz: "E,EIN,EVVL,AUS,AVVL,1000,EIN,MRA,EIN,USV,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string | Ein = 64, Aus = 00 |
| ST_1 | string | Stellglied 1 |
| BEFEHL_2 | string | Ein = 64, Aus = 00 |
| ST_2 | string | Stellglied 2 |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_3 | string | Ein = 64, Aus = 00 |
| ST_3 | string | Stellglied 3 |
| BEFEHL_4 | string | Ein = 64, Aus = 00 |
| ST_4 | string | Stellglied 4 |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_DX_STELLGLIED

Digitale Stellglieder ansteuern DSC_8 KWP2000 star: $30,$04 InputOutputControlByLocalIdentifier Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz_1: "E,EIN,0,0,USV1,USV2,EIN,0,0,0,MRA,800,AUS,0,0,USV2,USV1,EIN,EVVL,EVVR,EVHL,EVHR" Musterparametersatz_2: "W,EIN,VLV1,VLV1,VLV2,VLV2,EIN,MRA,MRA,MRA,MRA,800,AUS,USV1,USV2,USV2,USV1,EIN,AVVL,AVVL,AVVR,AVHR,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es gibt 5 Stellgliedgruppen "EIN/AUS,MRA" "EIN/AUS,USV1,USV2" "EIN/AUS,VLV1,VLV2" "EIN/AUS,EVVL,EVVR,EVHL,EVHR" "EIN/AUS,AVVL,AVVR,AVHL,AVHR" in jedem Job koennen dann 4 beliebige Stellgliedgruppen angesteuert werden und zwar 2 Stellgliedgruppen vor dem Zeitglied und 2 Stellgliedgruppen nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit:  W_ZEIT in ms eine Stellgliedgruppe besteht aus 5 Argumenten: einem Befehl "EIN" oder "AUS" und aus genau 4 Stellgliedern werden weniger als 4 Stellglieder angesteuert, bzw. koennen pro Gruppe nur 1 bzw. 2 Stellglieder angesteuert werden, so sind die restlichen linksbuendig mit "0" zu besetzen(siehe Musterparametersatz_1) um Nullen zu vermeiden kann man sie auch mehrfach mit dem gleichen Stellglied besetzen (siehe Musterparametersatz_2) die Stellglieder einer Gruppen duerfen nicht mit Stellgliedern anderer Gruppen gemixt werden

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string |  |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |
| ST_4 | string | Stellglied 4 |
| BEFEHL_2 | string |  |
| ST_5 | string | Stellglied 5 |
| ST_6 | string | Stellglied 6 |
| ST_7 | string | Stellglied 7 |
| ST_8 | string | Stellglied 8 |
| W_ZEIT | int | Wartezeit vor Ansteuerung  Stellglied 5-8 |
| BEFEHL_3 | string |  |
| ST_9 | string | Stellglied 5 |
| ST_10 | string | Stellglied 5 |
| ST_11 | string | Stellglied 6 |
| ST_12 | string | Stellglied 7 |
| BEFEHL_4 | string |  |
| ST_13 | string | Stellglied 8 |
| ST_14 | string | Stellglied 5 |
| ST_15 | string | Stellglied 6 |
| ST_16 | string | Stellglied 7 |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_STELLGLIED_DYNAMISCH

Digitale Stellglieder ansteuern DSC_8 KWP2000 star: $30,$04 InputOutputControlByLocalIdentifier Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz_1: "E,EIN,0,0,USV1,USV2,EIN,0,0,0,MRA,800,AUS,0,0,USV2,USV1,EIN,EVVL,EVVR,EVHL,EVHR,100" Musterparametersatz_2: "W,EIN,VLV1,VLV1,VLV2,VLV2,EIN,MRA,MRA,MRA,MRA,800,AUS,USV1,USV2,USV2,USV1,EIN,AVVL,AVVL,AVVR,AVHR,200,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es gibt 5 Stellgliedgruppen "EIN/AUS,MRA" "EIN/AUS,USV1,USV2" "EIN/AUS,VLV1,VLV2" "EIN/AUS,EVVL,EVVR,EVHL,EVHR" "EIN/AUS,AVVL,AVVR,AVHL,AVHR" in jedem Job koennen dann 4 beliebige Stellgliedgruppen angesteuert werden und zwar 2 Stellgliedgruppen vor dem Zeitglied und 2 Stellgliedgruppen nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit:  W_ZEIT in ms eine Stellgliedgruppe besteht aus 5 Argumenten: einem Befehl "EIN" oder "AUS" und aus genau 4 Stellgliedern werden weniger als 4 Stellglieder angesteuert, bzw. koennen pro Gruppe nur 1 bzw. 2 Stellglieder angesteuert werden, so sind die restlichen linksbuendig mit "0" zu besetzen(siehe Musterparametersatz_1) um Nullen zu vermeiden kann man sie auch mehrfach mit dem gleichen Stellglied besetzen (siehe Musterparametersatz_2) die Stellglieder einer Gruppen duerfen nicht mit Stellgliedern anderer Gruppen gemixt werden

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string |  |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |
| ST_4 | string | Stellglied 4 |
| BEFEHL_2 | string |  |
| ST_5 | string | Stellglied 5 |
| ST_6 | string | Stellglied 6 |
| ST_7 | string | Stellglied 7 |
| ST_8 | string | Stellglied 8 |
| W_ZEIT_1 | int | Wartezeit nach der Ansteuerung der Stellglieder 1-8 |
| BEFEHL_3 | string |  |
| ST_9 | string | Stellglied 9 |
| ST_10 | string | Stellglied 10 |
| ST_11 | string | Stellglied 11 |
| ST_12 | string | Stellglied 12 |
| BEFEHL_4 | string |  |
| ST_13 | string | Stellglied 13 |
| ST_14 | string | Stellglied 14 |
| ST_15 | string | Stellglied 15 |
| ST_16 | string | Stellglied 16 |
| W_ZEIT_2 | int | Wartezeit nach der Ansteuerung der Stellglieder 9-16 |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_DREHZAHLFUEHLER_ALLE

Test Drehzahlfuehler Musterparametersatz: 2000 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit in ms |

### STEUERN_AKTUATORIK

Statischer Test der Komponenten DSC_8 Musterparametersatz: 600,400 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| USV_ZEIT | int | Ausfuehrungszeit in ms: t >= 400ms Verzoegerungszeit bis zur Aktivierung der USVs |
| PUMPE_ZEIT | int | Ausfuehrungszeit in ms: t >= 200ms Verzoegerungszeit zwischen der Aktivierung der USVs und Abschalten des Pumpenmotors |

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes Musterparametersatz: ROMI,0xFF12AB,12 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) das High-Byte ist bei R.Bosch DSC_60 immer 0xFFxxxx KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt !) Musterparametersatz: ROMI,0xFF12AB,12,Datenbytes Argumente mit "Strich_Punkt" getrennt (nicht mit Komma !) 0x04,0x05,0x0B,0x0C...Datenbytes(hex) durch Komma getrennt !) 04,05,03,11,12 ... Datenbytes(dec) durch Komma getrennt !) das High-Byte ist bei R.Bosch DSC_60 immer 0xFFxxxx KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### STEUERN_VAK_BEFUELL

Evakuierung und Befuellung der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: E,12,6,R jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| ZEIT_ROUTINE | int | Zeit =< 150 sec |
| DELAY_PUMPE | int | Verzoegerung Pumpenansteuerung Zeit >= 1sec |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_REP_ENTLUEFTUNG

Evakuierung und Befuellung der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: E,V_links,3,R jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| RAD_NR | string | V_Links,V_rechts,H_Links,H_rechts |
| WIEDERHOLUNG | int | 3,4 oder 5 Wiederholungen nur bei V_rechts und H_rechts aktiv |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_ERGEBNIS_ROUTINE

Ergebnis der Routine abholen Musterparametersatz: "REP_ENTLUEFTUNG" Musterparametersatz: "VAK_BEFUELL"

| Name | Type | Description |
| --- | --- | --- |
| TYP | string | Typ der Routine angeben |

### IDENT_VIN

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_HW_NR

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_SW_BB_NR

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_SW_VERSION_NR

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $80 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 17 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### IDENT_BOSCH_HW_NR_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $92 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 5 Ident_Daten als ein Hex_String uebergeben werden: z.B. 02,65,56,12,18 Bereich:  0x00-0xFF |

### RPA_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $05 RPA schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATA | string | Es muss 1 Byte uebergeben werden z.B. 0x01 Standardisierung starten z.B. 0x00 keine Aktion Bereich:  0x00-0xFF |

### RPA_FASTA_LOESCHEN

KWP2000: $3B WriteDataByLocalIdentifier $06 RPA_FASTA_loeschen

_No arguments._

### RPA_STANDARDISIERUNG_1_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $07 RPA Standardisierungsdaten_1 vorgeben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 25 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### RPA_STANDARDISIERUNG_2_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $08 RPA Standardisierungsdaten_2 vorgeben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 25 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### RPA_STANDARDISIERUNG_3_SCHREIBEN

erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $3B WriteDataByLocalIdentifier $09 RPA Standardisierungsdaten_3 vorgeben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 22 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### RPA_DEFAULT

KWP2000: $3B WriteDataByLocalIdentifier $06 RPA_FASTA_loeschen $07 Standardisierungdaten_1 $08 Standardisierungdaten_2 $09 Standardisierungdaten_3 Fasta- und Standardisierungsdaten auf default setzten

_No arguments._

### RPA_LAMPE_EINSCHALTEN

KWP2000: $3B WriteDataByLocalIdentifier $09 Standardisierungdaten_3 Fuer USA Standardisierungsdaten auf default setzten und dazu RPA-Lampe einschalten

_No arguments._

### COD_LESEN_DSC

Auslesen der Codierdaten KWP2000: $22 ReadDataByCommonIdentifier $3000 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_DSC

Codierdaten schreiben Es muessen 4 Codierbyte als Hex_String uebergeben werden Argument: z.B.: 01,07,02,AB, die CS wird in der ECU berechnet KWP2000: $2E WriteDataByCommonIdentifier $3000 codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Bereich: 00 - FF |

### COD_LESEN_RPA_1

Auslesen der Codierdaten KWP2000: $22 ReadDataByCommonIdentifier $3000 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_RPA_1

Codierdaten schreiben KWP2000: $2E WriteDataByCommonIdentifier $3000 codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Es muessen 18 Codier_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### COD_LESEN_RPA_2

Auslesen der Codierdaten KWP2000: $22 ReadDataByCommonIdentifier $3002 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_RPA_2

Codierdaten schreiben erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $2E WriteDataByCommonIdentifier $3000 codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Es muessen 12Bytes (bis SW4.83dec) bzw. 28Bytes(ab SW4.83dec) Codier_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 das Laengenbyte wird automatisch berechnet Bereich:  0x00-0xFF |

### COD_LESEN_RPA_3

Auslesen der Codierdaten KWP2000: $22 ReadDataByCommonIdentifier $3003 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_RPA_3

Codierdaten schreiben erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $2E WriteDataByCommonIdentifier $3003 codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Es muessen 28 Codier_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### COD_LESEN_RPA_4

Auslesen der Codierdaten erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $22 ReadDataByCommonIdentifier $3004 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_RPA_4

Codierdaten schreiben erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $2E WriteDataByCommonIdentifier $3004 codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Es muessen 16 Codier_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### CBS_ZUSTAND_NEUFAHRZEUG

CBS Daten schreiben KWP2000: $3D Ruecksetzen VA und HA auf 100% Verfuegbarkeit CUS-Block01/02: Neuzustand-Bremsbelagdicken (BPTXA) für VA =13,7mm und HA = 11,2 mm Gesamtlaufleistung Bremsbeläge (TotalMilageXA)  für VA und HA = 0 km CUS-Block03: Enable Korrektur wegen Info1XA (EnKorr1XA)  für VA und HA = 1 Enable Korrektur wegen Info2XA (EnKorr1XA)  für VA und HA = 0 Info Verschleißpillen (Info1XA, Info2XA) für VA und HA = 0 Steuerbits plausibel (CtrlBitsEEPROM) = 1 Anforderung Serviceinfo (ServReqXa) für VA und HA=0 Stopbit (StopBPTXA) für VA und HA = 0 Manipulationsbit (ManipulationXA) für VA und HA = 0 Korrekturfaktor (PKorrXA) für VA und HA = 1,0 CUS-Block04: Anfangs-Restlaufleistung (BPTMXA) für VA=40.000km und für HA=50.000km Servicezaehler (ServCntXA)  für VA und HA =1

_No arguments._

### CBS_BASISINITIALISIERUNG

CBS Daten schreiben KWP2000: $3D Neuzustand DSC-Steuergerät = Auslieferungszustand RB-Werk ASW-Block:   FLR ein, CBS-totalmilage fix aus ROM CUS-Block01/02: Neuzustand-Bremsbelagdicken (BPTXA) für VA=0 mm und HA = 0,0 mm Gesamtlaufleistung Bremsbeläge (TotalMilageXA)  für VA und HA = 0 km CUS-Block03: Enable Korrektur wegen Info1XA (EnKorr1XA)  für VA und HA = 1 Enable Korrektur wegen Info2XA (EnKorr1XA)  für VA und HA = 0 Info Verschleißpillen (Info1XA, Info2XA) für VA und HA = 0 Steuerbits plausibel (CtrlBitsEEPROM) = 0 Anforderung Serviceinfo (ServReqXa) für VA und HA = 1 Stopbit (StopBPTXA) für VA und HA = 0 Manipulationsbit (ManipulationXA) für VA und HA = 0 Korrekturfaktor (PKorrXA) für VA und HA = 1,0 CUS-Block04: Anfangs-Restlaufleistung (BPTMXA) für VA = 0 km und für  HA = 0 km Servicezaehler (ServCntXA)  für VA und HA = 0

_No arguments._

### FLR_CBS_MILAGE

FLR,CBS_MILAGE Codierung schreiben es koennen max. 2 Argumente uebergeben werden "FLR_ON" oder "FLR_OFF" "ROM_FIX" oder "EEPROM_FIX" oder "EEPROM_VAR" Musterparametersatz: "FLR_ON,ROM_FIX" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) wird kein Argument uebergeben, dann wird die Basiseinstellung: "FLR ein, CBS-totalmilage fix aus ROM" eingestellt KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | string | "FLR_ON" oder "FLR_OFF" oder "ROM_FIX" oder "EEPROM_FIX" oder "EEPROM_VAR" |
| ARG_2 | string | "FLR_ON" oder "FLR_OFF" oder "ROM_FIX" oder "EEPROM_FIX" oder "EEPROM_VAR" |

### CBS_EEPROM_LESEN

EEPROM lesen KWP2000: $23

_No arguments._

### SPERREN_LANGZEITABGLEICH

SPERREN_LANGZEITABGLEICH Codierung schreiben es kann max. 1 Argumente uebergeben werden "SPERREN" oder "SPERREN+SW" "SPERREN" sperrt Ay,Lw-Offset,vgi-Empfindlichkeit,vgi-Offset "SPERREN+SW" wie SPERREN + Steilwandmodus wird kein Argument uebergeben, dann ist die Basiseinstellung aktiv dies entspricht der Serieneinstellung Musterparametersatz: "SPERREN+SW" KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | string | "SPERREN" oder "SPERREN+SW" |

### BREMSENTEMPERATUR

EEPROM lesen und schreiben es muessen 4 Argumente in folgender Reihenfolge uebergeben werden Bremsentemperatur VL,VR,HL,HR Musterparametersatz: "500,550,600,720" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessige Werte: 50 .... 850 Grad werden keine Argumente uebergeben, dann werden die vorhandenen Temperaturwerte beibehalten KWP2000: $23,$3D

| Name | Type | Description |
| --- | --- | --- |
| ARG_TEMP_BREMSE_VL | long | Bremsentemperatur VL Einheit = Grad C |
| ARG_TEMP_BREMSE_VR | long | Bremsentemperatur VR Einheit = Grad C |
| ARG_TEMP_BREMSE_HL | long | Bremsentemperatur HL Einheit = Grad C |
| ARG_TEMP_BREMSE_HR | long | Bremsentemperatur HR Einheit = Grad C |

### CBS_KORREKTURFAKTOR

CBS_KORREKTURFAKTOR eingeben es koennen max. 2 Argumente uebergeben werden Korrekturfaktor VA, Korrekturfaktor HA wird nur ein Korrekturfaktor uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert Korrekturfaktor=1.0 eingestellt Musterparametersatz: "1.2,0.9" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessige Werte: 0.2 .... 7.9 werden keine Argumente uebergeben, dann ist die Basiseinstellung aktiv d.h. Korrekturfaktor=1.0 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| KORR_FAK_VA | string |  |
| KORR_FAK_HA | string |  |

### CBS_MANIPULATIONS_BIT

CBS_MANIPULATIONS_BIT eingeben es koennen max. 2 Argumente uebergeben werden Manipulationsbit VA, Manipulationsbit HA wird nur ein Manipulationsbit uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert Manipulationsbit=0 eingestellt Musterparametersatz: "0,1" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessige Werte: 0 bzw. 1 werden keine Argumente uebergeben, dann ist die Basiseinstellung aktiv d.h. Manipulationsbit=0 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| MANIPULATIONS_BIT_VA | int |  |
| MANIPULATIONS_BIT_HA | int |  |

### CBS_TOTALMILAGE_STARTWERTE

EEPROM lesen/schreiben es koennen max. 2 Argumente uebergeben werden Gesamtlaufleistung VA (km), Gesamtlaufleistung HA (km) wird nur ein Korrekturfaktor uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert 50000km eingestellt Musterparametersatz: "15000,32000" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessiger Bereich: 10000 ... 80000km werden keine Argumente uebergeben, dann ist die Basiseinstellung aktiv VA=40000km, HA=50000km der aktuelle Service-Zaehlerstand wird immer uebernommen zulaessiger Bereich 0 ... 31 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARGVA | long |  |
| ARGHA | long |  |

### CBS_SERVICEZAEHLER

EEPROM lesen/schreiben es koennen max. 2 Argumente uebergeben werden Servicezaehler VA, Servicezaehler HA wird nur ein Servicezaehlerstand (ServCntXA) uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert 1 eingestellt Musterparametersatz: "1,2" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessiger Bereich: 0 ... 31 werden keine Argumente uebergeben, dann ist die Basiseinstellung aktiv VA = 1, HA = 1 der aktuelle Gesamtlaufleistung wird immer uebernommen Servicezaehler-wert (ServCntXA) 31 : fuehrt zum automatischen Inkrementieren des Servicezaehlers im DSC- SG um +1 Servicezaehler (ServCntXA)  0 fuehrt zur Anforderung (ServiceRequest) der aktuellen CBS-Werte vom Kombiinstrument KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARGVA | long |  |
| ARGHA | long |  |

### _TEST_AUTO_CODIERUNG

Autocodierung wird ausgeloest ab I-Stufe 5.22 (SE 12/03) Job ohne Argument abschicken FG-Nr. Eintrag erfolgt ab Adresse "FF 03 D8" vor I-Stufe 5.22 (bis 12/03) Job mit Argument "sw_alt" abschicken FG-Nr. Eintrag erfolgt ab Adresse "FF 03 ED"

| Name | Type | Description |
| --- | --- | --- |
| SW_ALT | string |  |

### DSC_EEPROM_LESEN

DSC EEPROM lesen KWP2000: $23

_No arguments._

### _OFFSETWERTE_DSC_SENSOREN_NULLEN

Bestimmte EEPROM Zellen auf Null schreiben: SIC-Block01, SMO-Block01, SMO-Block02, SCO-Block01, SCO-Block02 es koennen max. 3 Argumente uebergeben werden "LW_AY_OFFSET_NULL" "VGI_OFFSET_NULL" "DRUCKSENSOR_OFFSET_NULL" Musterparametersatz: "LW_AY_OFFSET_NULL,VGI_OFFSET_NULL,DRUCKSENSOR_OFFSET_NULL" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) wird kein Argument uebergeben, dann wird die aktuelle Einstellung uebernommen KWP2000: $23 und $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | string | "LW_AY_OFFSET_NULL" oder "VGI_OFFSET_NULL" oder "DRUCKSENSOR_OFFSET_NULL" |
| ARG_2 | string | "LW_AY_OFFSET_NULL" oder "VGI_OFFSET_NULL" oder "DRUCKSENSOR_OFFSET_NULL" |
| ARG_3 | string | "LW_AY_OFFSET_NULL" oder "VGI_OFFSET_NULL" oder "DRUCKSENSOR_OFFSET_NULL" |

### _FS_LESEN_INPA

KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes KWP2000: $18 ReadDiagnosticTroubleCodesByStatus kombinierter Job §17 und §18 Fehlerspeicher lesen mit allen Umweltdaten Ausgabe der Results wie INPA

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
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
| ?81? | ERROR_VIHICLE_IDENTFICATON_NR |
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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
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
| 0x09 | VTG | Verteilergetriebeoel |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x13 | H2 | H2-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x16 | DAD | Additiv fuer Partikelfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |

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
| 0x5d8c | Rueckfoerder Pumpe: - Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AN aber erwartet: AUS - Leitungsstoerung ? |
| 0x5d8d | Rueckfoerder Pumpe: - steht. Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AUS aber erwartet: AN - Sicherung oder Pumpenmotorrelais defekt ? |
| 0x5d8e | Rueckfoerder Pumpe: - Nachlauf zu kurz. |
| 0x5d8f | Rueckfoerder Pumpe: - Freigabe des Pumpen-Anlauf-Zyklus, kein Fehler: Gutpruefung nach behobenem Defekt erfolgt. |
| 0x5d90 | Ventil Relais: VR offen. Fehler verursacht durch zu viele erkannte Einzelventilfehler - Sicherung defekt ? |
| 0x5d91 | Ventil Relais: VR offen, Relais schliesst nicht waehrend Startup-Test. |
| 0x5d92 | Ventil Relais: VR-Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. |
| 0x5d93 | Ventil Relais: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse ueber Startup-Test erkannt. |
| 0x5d94 | Ventil Relais: VR steckt in geschlossener Position. Relais schaltet nicht ab waehrend Startup-Test. |
| 0x5d95 | Ventil Relais: VR offen, Spannungsversorgung_VR waehrend Startup-Test zu niedrig (verglichen mit Uz Versorgungsspannung_Klemme_15); Defekte Sicherung! |
| 0x5d96 | Ventil Relais: Kurzschluss zu Uz Versorgungsspannung_Klemme_15 im zyklischen Ventilrelais-Test festgestellt. |
| 0x5d97 | Ventil Relais: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse waehrend zyklischem Ventilrelais-Test registriert. |
| 0x5d98 | Einlass Ventil (EV) Vorne Links - zyklischer Ventil- und Relaistest. |
| 0x5d99 | Einlass Ventil (EV) Vorne Links - Allgemeiner Fehler. |
| 0x5d9b | Einlass Ventil (EV) Vorne Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5d9d | Auslass Ventil (AV) Vorne Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5d9e | Auslass Ventil (AV) Vorne Links - Allgemeiner Fehler. |
| 0x5da1 | Einlass Ventil (EV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da2 | Einlass Ventil (EV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5da6 | Auslass Ventil (AV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da7 | Auslass Ventil (AV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5daa | Einlass Ventil (EV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dab | Einlass Ventil (EV) Hinten Links - Allgemeiner Fehler. |
| 0x5dad | Einlass Ventil (EV) Hinten Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5daf | Auslass Ventil (AV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db0 | Auslass Ventil (AV) Hinten Links - Allgemeiner Fehler. |
| 0x5db3 | Einlass Ventil (EV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db4 | Einlass Ventil (EV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5db8 | Auslass Ventil (AV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db9 | Auslass Ventil (AV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5dbc | Ventil (USV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dbd | Ventil (USV1): Allgemeiner Fehler. |
| 0x5dbf | Ventil (USV1): - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5dc1 | Ventil (USV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc2 | Ventil (USV2): Allgemeiner Fehler. |
| 0x5dc6 | Ventil (HSV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc7 | Ventil (HSV1): Allgemeiner Fehler. |
| 0x5dca | Ventil (HSV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dcb | Ventil (HSV2): Allgemeiner Fehler. |
| 0x5dce | Uz Versorgungsspannung_Klemme_15-Fehler: leichte Unterspannung (Spannung zu niedrig). |
| 0x5dcf | Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). |
| 0x5dd0 | Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). |
| 0x5dd1 | Uz Versorgungsspannung_Klemme_15-Fehler: Kurzschluss einer Drehzahlsensor-Spannungsleitung auf UBatt. (Stromfluss durch den ASPxx-Pin des Drehzahlsensor_Inputamplifiers). |
| 0x5dd2 | Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz Versorgungsspannung_Klemme_15. |
| 0x5dd3 | DSC-ECU : Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler). |
| 0x5dd4 | DSC-ECU : ECU-intern: Raddrehzahlfuehler-Driverchip: Fehler bei Versorgungsspannung/Masse Fehler. Reset-Response-Test fehlerhaft. |
| 0x5dd5 | DSC-ECU : ECU-intern: Enable-Leitung kann nicht eingeschaltet werden (Startup-Test Enable High). |
| 0x5dd6 | DSC-ECU : ECU-intern: Enable-Leitung kann nicht ausgeschaltet werden (Startup-Test Enable low). |
| 0x5dd8 | DSC-ECU : ECU-intern: System Startup-Synchronisation-Timeout aufgetreten. |
| 0x5dd9 | DSC-ECU : ECU-intern: SP-Interface: Hardware Fehler erkannt. |
| 0x5ddc | DSC-ECU : ECU-intern: Het-SP-Interface sendet Fehler; Nachricht nicht korrekt uebertragen. |
| 0x5ddd | DSC-ECU : ECU-intern: Zugang in Uebersetzungstabelle des Het-SP-Interface ist nicht moeglich. |
| 0x5dde | DSC-ECU : ECU-intern: Watchdog-Ueberwachung meldet: Datenfehler aufgetreten. |
| 0x5ddf | DSC-ECU : ECU-intern: Watchdog-Ueberwachung meldet: Status nicht korrekt. |
| 0x5de0 | DSC-ECU : ECU-intern: Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15. |
| 0x5de1 | DSC-ECU : ECU-intern: Clockstatus des SP-Interface zeigt fehlende Uhr. |
| 0x5de2 | DSC-ECU : ECU-intern: DePwm Status : Software-/ Hardware Konfigurationen passen nicht zusammen (DF11i/s). |
| 0x5de3 | DSC-ECU : ECU-intern: Status_Raddrehzahlfuehler des SP-Interface passt nicht zur Konfiguration. |
| 0x5de4 | DSC-ECU : ECU-intern: Boot Block Checksummen Fehler |
| 0x5dee | DSC-ECU : ECU-intern: FPS Fault Transfer SysServ->AlgoSrv: Fifo Overflow aufgetreten oder Fehlererkennungssystem-Fehler und Statustransfer: Transfer in Algorithm Server nicht gestartet in AS oder SPI Fehler in AS |
| 0x5def | DSC-ECU : ECU-intern: ROM Checksummentest-Fehler. |
| 0x5df0 | DSC-ECU : ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5df1 | DSC-ECU : ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5df2 | DSC-ECU : ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5df3 | DSC-ECU : ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5df5 | DSC-ECU : ECU-intern: Can RAM Checkpatterntest-Fehler. |
| 0x5df6 | DSC-ECU : ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task)-Timing. |
| 0x5df7 | DSC-ECU : ECU-intern: Betriebssystem: geringe Background-Rechenzyklus(Task) Aktivitaet - System ueberlastet ! |
| 0x5df8 | DSC-ECU : ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5df9 | DSC-ECU : ECU-intern: Betriebssystem: Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5dfa | DSC-ECU : ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5dfb | DSC-ECU : ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5dfc | DSC-ECU : ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5dfd | DSC-ECU : ECU-intern: Illegalen Opcode gefunden    -> Mikrocontroller Mode: undef. |
| 0x5dfe | DSC-ECU : ECU-intern: ROM Checksummentest-Fehler. |
| 0x5dff | DSC-ECU : ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5e00 | DSC-ECU : ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5e01 | DSC-ECU : ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5e02 | DSC-ECU : ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5e03 | DSC-ECU : ECU-intern: Allgemeiner Fehler des Ventiltreiber-Status oder -antriebes durch zyklischen Ventilrelaistest registriert. |
| 0x5e04 | DSC-ECU : ECU-intern: Fehler der permanenten Enable-Leitungsueberwachung (Enable ist low nach Startup-Test). |
| 0x5e05 | DSC-ECU : ECU-intern: nicht moeglich SP-Interface transfer zu planen. |
| 0x5e06 | DSC-ECU : ECU-intern: Planmaessige Datenuebertragung nicht verfuegbar. |
| 0x5e07 | DSC-ECU : ECU-intern: Datenuebertragungsfehler (Antwort des SP-Interface handler). |
| 0x5e08 | DSC-ECU : ECU-intern: Planmaessiger Build-in-self-test (BIST) nicht korrekt (BIST Kontinuität). |
| 0x5e09 | DSC-ECU : ECU-intern: Build-in-self-test (BIST)-Signaturen verschieden, CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0a | DSC-ECU : ECU-intern: Allgemeiner Steuergeräte-Fehler. |
| 0x5e0b | DSC-ECU : ECU-intern: Fehlererkennungssystem Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. |
| 0x5e0c | DSC-ECU : ECU-intern: Build-in-self-test (BIST)-Signaturen unterschiedlich. CPU Fehler in Algorithm- oder System-Server. |
| 0x5e0d | DSC-ECU : ECU-intern: Timeout des Build-in-self-test (BIST). Antwort durch Algorithm-Server. |
| 0x5e0e | DSC-ECU : ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task) Timing. |
| 0x5e0f | DSC-ECU : ECU-intern: Betriebssystem Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5e10 | DSC-ECU : ECU-intern: Betriebssystem: geringe Background Rechenzyklus (Task) Aktivität - System ueberlastet ! |
| 0x5e11 | DSC-ECU : ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5e12 | DSC-ECU : ECU-intern: Illegaler Opcode gefunden  -> Mikrocontroller Mode: undef. |
| 0x5e13 | DSC-ECU : ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5e14 | DSC-ECU : ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5e15 | DSC-ECU : ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface timeout in System-Server. |
| 0x5e16 | DSC-ECU : ECU-intern: Fehlererkennungssystem Transfer Fehler: SP-Interface timeout in System-Server. |
| 0x5e17 | DSC-ECU : ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface Fehler in System-Server. |
| 0x5e18 | DSC-ECU : ECU-intern: Datenmenge der Peripherie SP-Interface ueberschreitet Bufferlaenge. |
| 0x5e19 | DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): ID Anfrage nicht akzeptiert. |
| 0x5e1a | DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler multi IC. |
| 0x5e1b | DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler im EEPROM. |
| 0x5e1c | DSC-ECU : ECU-intern: Bandluecke Spannung ausserhalb gueltigem Bereich. |
| 0x5e1d | DSC-ECU : ECU-intern: ADC Umwandlung Start-Fehler. |
| 0x5e1e | DSC-ECU : ECU-intern: Flash Reprogrammierungszyklus ist fehlgeschlagen (Zellen nicht reprogrammiert) |
| 0x5e1f | DSC-ECU : ECU-intern: Flash Reprogrammierungszyklus wurde erfolgreich ausgefuehrt (Info) |
| 0x5e20 | DSC-ECU : ECU-intern: Allgemeiner Steuergeräte-Fehler. |
| 0x5e21 | DSC-ECU : ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5f03 | DSC-ECU : ECU-intern : Fehler beim Auslesen der Software-EEPROM-Werte: EEPROM-Zelle defekt. |
| 0x5f04 | DSC-ECU : ECU-intern : Timeout beim Auslesen der Software-EEPROM-Werte. |
| 0x5f05 | DSC-ECU : ECU-intern : Testpin Leitungs-Unterbrechung ueber ValveDriftCheck fuer U467 erkannt. |
| 0x5f06 | DSC-ECU : ECU-intern : fehlerhafter Zugriff auf Ventilansteuerungs-Ausgang. |
| 0x5f16 | DSC-ECU : ECU-intern: Radgeschwindigkeit von Hauptprozessor und Coprozessor stimmen nicht ueberein |
| 0x5f17 | DSC-ECU : ECU-intern: High-end-timer (HET) - Fehler aufgetreten |
| 0x5e22 | Raddrehzahlfuehler Vorne Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e24 | Raddrehzahlfuehler Vorne Links: Signalflanke fehlt (DF11i). |
| 0x5e25 | Raddrehzahlfuehler Vorne Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e26 | Raddrehzahlfuehler Vorne Links: Luftspalt zu groß. |
| 0x5e27 | Raddrehzahlfuehler Vorne Links: Dynamischen Signalverlust registriert. |
| 0x5e28 | Raddrehzahlfuehler Vorne Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e2d | Raddrehzahlfuehler Vorne Links: Fehlender Zahn RAD FL. |
| 0x5e2e | Raddrehzahlfuehler Vorne Links: Radschlupfueberwachung  FL. |
| 0x5e2f | Raddrehzahlfuehler Vorne Links: Fehler Anfahrerkennung RAD FL (RDF-Signalwert ungueltig). |
| 0x5efe | Raddrehzahlfuehler Vorne Links: max. Time InplRad Rad FL ueberschritten |
| 0x5e30 | Raddrehzahlfuehler Hinten Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e32 | Raddrehzahlfuehler Hinten Links: Signalflanke fehlt. |
| 0x5e33 | Raddrehzahlfuehler Hinten Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e34 | Raddrehzahlfuehler Hinten Links: Luftspalt zu groß. |
| 0x5e35 | Raddrehzahlfuehler Hinten Links: Dynamischen Signalverlust registriert. |
| 0x5e36 | Raddrehzahlfuehler Hinten Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e3b | Raddrehzahlfuehler Hinten Links: Fehlender Zahn RAD RL. |
| 0x5e3c | Raddrehzahlfuehler Hinten Links: Radschlupfueberwachung  RL. |
| 0x5e3d | Raddrehzahlfuehler Hinten Links: Fehler Anfahrerkennung RAD RL (RDF-Signalwert ungueltig). |
| 0x5eff | Raddrehzahlfuehler Hinten Links: max. Time InplRad Rad FL ueberschritten |
| 0x5e3e | Raddrehzahlfuehler Hinten Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e40 | Raddrehzahlfuehler Hinten Rechts: Signalflanke fehlt. |
| 0x5e41 | Raddrehzahlfuehler Hinten Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e42 | Raddrehzahlfuehler Hinten Rechts: Luftspalt zu groß. |
| 0x5e43 | Raddrehzahlfuehler Hinten Rechts: Dynamischen Signalverlust registriert |
| 0x5e44 | Raddrehzahlfuehler Hinten Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e49 | Raddrehzahlfuehler Hinten Rechts: Fehlender Zahn RAD RR. |
| 0x5e4a | Raddrehzahlfuehler Hinten Rechts: Radschlupfueberwachung  RR. |
| 0x5e4b | Raddrehzahlfuehler Hinten Rechts: Fehler Anfahrerkennung RAD RR (RDF-Signalwert ungueltig). |
| 0x5f00 | Raddrehzahlfuehler Hinten Rechts: max. Time InplRad Rad FL ueberschritten |
| 0x5e4c | Raddrehzahlfuehler Vorne Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e4e | Raddrehzahlfuehler Vorne Rechts: Signalflanke fehlt. |
| 0x5e4f | Raddrehzahlfuehler Vorne Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e50 | Raddrehzahlfuehler Vorne Rechts: Luftspalt zu groß. |
| 0x5e51 | Raddrehzahlfuehler Vorne Rechts: Dynamischen Signalverlust registriert. |
| 0x5e52 | Raddrehzahlfuehler Vorne Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e57 | Raddrehzahlfuehler Vorne Rechts: Fehlender Zahn RAD FR. |
| 0x5e58 | Raddrehzahlfuehler Vorne Rechts: Radschlupfueberwachung  FR. |
| 0x5e59 | Raddrehzahlfuehler Vorne Rechts: Fehler Anfahrerkennung RAD FR (RDF-Signalwert ungueltig). |
| 0x5f01 | Raddrehzahlfuehler Vorne Rechts: max. Time InplRad Rad FL ueberschritten |
| 0x5e5c | Raddrehzahlfuehler allgemein: Plausibilitaet Drehrichtung. |
| 0x5e5d | Raddrehzahlfuehler allgemein: Unplausibilitaet bei ABS-Regelung. |
| 0x5e5e | Raddrehzahlfuehler allgemein: Schlupfueberwachung (Lambda) allgemein. |
| 0x5f02 | Raddrehzahlfuehler allgemein: max. Anzahl der InplRad ueberschritten |
| 0x5e60 | Bremslichschalter-Fehler: Plausibilitaet BLS versus BS |
| 0x5e62 | Bremslichschalter-Fehler: Ueberwachung BLS permanent high |
| 0x5f37 | Bremslichschalter-Fehler: DME meldet BLS-Fehler im Bremssystem. |
| 0x5eee | Bremslichschalter:  - Plausibilitaet 1 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5eef | Bremslichschalter:  - Plausibilitaet 2 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5ef0 | Bremslichschalter:  - Plausibilitaet 3 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0xD347 | CAN-Fehler: BusOff Fehler CAN1 = PT_CAN oder CANSys - Init oder allgemeiner Fehler |
| 0xD34B | CAN-Fehler: BusOff Fehler CAN2 = F_CAN |
| 0xD354 | CAN-Fehler: Botschaft TORQUE_1 (ID 0x0A8) fehlt ! |
| 0xD355 | CAN-Fehler: Botschaft TORQUE_2 (ID 0x0A9) fehlt ! |
| 0xD356 | CAN-Fehler: Botschaft TORQUE_3 (ID 0x0AA) fehlt ! |
| 0xD357 | CAN-Fehler: Botschaft VERZOEGERUNG_ANF-ACC (ID 0x0AD,(ST_DCRN_BRP_TAR_ACC)) fehlt ! |
| 0x5e6a | CAN-Fehler: Botschaft DREHMOMENT-ANF-DSC (ID 0x0B6) nicht abgeschickt ! |
| 0xD358 | CAN-Fehler: Botschaft GETRIEBEDATEN (ID 0x0BA) fehlt ! |
| 0x5e6b | CAN-Fehler: Botschaft LENKRADWINKEL (ID 0x0C4) nicht abgeschickt ! |
| 0xD359 | CAN-Fehler: Botschaft LENKRADWINKEL_OBEN (ID 0x0C8) fehlt ! |
| 0x5e72 | CAN-Fehler: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) nicht abgeschickt ! |
| 0xD35A | CAN-Fehler: Botschaft KLEMMENSTATUS (ID 0x130) fehlt ! |
| 0x5e74 | CAN-Fehler: Botschaft STAT_DSC (ID 0x19E) nicht abgeschickt ! |
| 0x5e75 | CAN-Fehler: Botschaft GESCHWINDIGKEIT (ID 0x1A0) nicht abgeschickt ! |
| 0x5e76 | CAN-Fehler: Botschaft WEGSTRECKE (ID 0x1A6) fehlt ! |
| 0xD35C | CAN-Fehler: Botschaft STAT_KOMBI (ID 0x1B4) fehlt ! |
| 0xD35D | CAN-Fehler: Botschaft STAT_AFS (ID 0x1FC) fehlt ! |
| 0x5E77 | CAN-Fehler: Botschaft STAT_RPA (ID 0x31D) nicht abgeschickt ! |
| 0x5E7A | CAN-Fehler: Botschaft BREMSDRUCK_RAD (ID 0x2B2) nicht abgeschickt ! |
| 0xD35E | CAN-Fehler: Botschaft A_TEMP_RELATIVZEIT (ID 0x310) fehlt ! |
| 0xD35F | CAN-Fehler: Botschaft STAT_ARS (ID 0x1AC) fehlt ! |
| 0xD360 | CAN-Fehler: Botschaft KILOMETERSTAND (ID 0x330) fehlt ! |
| 0x5e7e | CAN-Fehler: Botschaft RAD_TOLERANZ (ID 0x374) nicht abgeschickt ! |
| 0xD361 | CAN-Fehler: Botschaft FAHRGESTELLNUMMER (ID 0x380) fehlt ! |
| 0xD362 | CAN-Fehler: Botschaft FAHRZEUGTYP (ID 0x388) fehlt ! |
| 0xD363 | CAN-Fehler: Botschaft BEDIENUNG_FAHRWERK (ID 0x398) fehlt ! |
| 0xD364 | CAN-Fehler: Botschaft NM_PT_CAN (ID 0x480) fehlt ! |
| 0x5e83 | CAN-Fehler: Botschaft NM_PT_CAN_DSC (ID 0x4A9) nicht abgeschickt ! |
| 0x5e84 | CAN-Fehler: Botschaft BOS_MELDUNG_DSC (ID 0x5A9) nicht abgeschickt ! |
| 0xD365 | CAN-Fehler: Botschaft BOS_RUECKSTELLUNG (ID 0x5E0) fehlt ! |
| 0x5e85 | CAN-Fehler: Botschaft YAW_REQUEST (ID 0x0C5) nicht abgeschickt ! |
| 0xD366 | CAN-Fehler: Botschaft YAW_ANSWER (ID 0x0C7) fehlt ! |
| 0xD367 | CAN-Fehler: Botschaft EXCH_AFS_DSC (ID 0x118) fehlt ! |
| 0xD368 | CAN-Fehler: Botschaft RWDT_STEA_WHL (ID 0x0C3) fehlt ! |
| 0x5e89 | CAN-Fehler: Botschaft YAW_REQUEST_2 (ID 0x0CA) nicht abgeschickt ! |
| 0xD369 | CAN-Fehler: Botschaft YAW_ANSWER_2 (ID 0x0CB) fehlt ! |
| 0x5e8a | CAN-Fehler: Botschaft REGELEINGRIFF_DSC_AFS (ID 0x11E) nicht abgeschickt ! |
| 0x5e8b | CAN-Fehler: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) nicht abgeschickt ! |
| 0x5e8c | CAN-Fehler: Botschaft STATUS_ANHAENGER (ID 0x2E4) fehlt ! |
| 0x5e8e | Querbeschleunigungssensor:  - Messbereich Querbeschleunigungssensor. |
| 0x5e90 | Querbeschleunigungssensor:  - Langzeit-Offset ueberschreitet Limit. |
| 0x5e91 | Querbeschleunigungssensor:  - Wert waehrend Stillstand zu gross. |
| 0x5e92 | Querbeschleunigungssensor:  - Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5e93 | Querbeschleunigungssensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5e95 | Querbeschleunigungssensor:  - Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5e96 | Querbeschleunigungssensor:  - Plattform-Software (PSW) - Fehlerverdacht. |
| 0x5e97 | Querbeschleunigungssensor:  - Controller Release System (CRS)- Fehlerverdacht bei Messbereich. |
| 0x5e98 | Querbeschleunigungssensor:  - DrsERRN02 - AYS interner Wert ausser Messbereich |
| 0x5e99 | Querbeschleunigungssensor:  - DrsERRN04 - AYS interner Selbsttest nicht bestanden |
| 0x5f64 | Querbeschleunigungssensor:  - Drs2ERRN02 - AYS interner Wert ausserhalb Messbereich (DRS2 AFS) |
| 0x5f65 | Querbeschleunigungssensor:  - Drs2ERRN04 - AYS interner Selbsttest nicht bestanden (DRS2 AFS) |
| 0x5e9a | Drehratensensor:  - Vorzeichen-Fehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e9b | Drehratensensor:  - Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5e9c | Drehratensensor:  - Plausibilitaetsfehler in Bezug zu Lenkwinkelsensor. |
| 0x5e9d | Drehratensensor:  - Messbereich DRS. |
| 0x5e9e | Drehratensensor:  - Sign Fehler (ohne SilaMemory) |
| 0x5e9f | Drehratensensor:  - Offset ueberschreitet Limit waehrend Stillstand. |
| 0x5ea0 | Drehratensensor:  - Signalgradient DRS. |
| 0x5ea1 | Drehratensensor:  - Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5ea2 | Drehratensensor:  - Offset ueberschreitet Limit waehrend schneller Kompensation. |
| 0x5ea3 | Drehratensensor:  - Empfindlichkeit ueberschreitet Limit. |
| 0x5ea4 | Drehratensensor:  - Offset ueberschreitet Limit waehrend langsamer Kompensation. |
| 0x5ea5 | Drehratensensor:  - Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5ea6 | Drehratensensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5ea7 | Drehratensensor:  - Redundanz Fehler |
| 0x5ea8 | Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht bei Messbereich DRS. |
| 0x5ea9 | Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht DRS Static BITE. |
| 0x5eaa | Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht DRS bei Signalgradient. |
| 0x5eab | Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht YDRS Dynamic BITE. |
| 0x5eac | Drehratensensor:  - Plattform-Software (PSW) - Fehlerverdacht DRS. |
| 0x5ead | Drehratensensor:  - Drs ID passt nicht zur Anfrage |
| 0x5eae | Drehratensensor:  Checksumme der empfangenen Sensor-Nachricht ist nicht korrekt |
| 0x5eaf | Drehratensensor:  ERR oder TERR Bit. Keine zusaetzliche Information (ERRNO = 0) |
| 0x5eb0 | Drehratensensor:  NO1: YRS Interner Wert ausser Wertebereich |
| 0x5eb1 | Drehratensensor:  NO3: Interner Ref Wert ausser Wertebereich |
| 0x5eb2 | Drehratensensor:  NO5: Timeout fuer empfangene Nachricht |
| 0x5eb3 | Drehratensensor:  NO6: Spannungsversorgung zu niedrig |
| 0x5eb4 | Drehratensensor:  NO7: Spannungsversorgung zu hoch |
| 0x5eb5 | Drehratensensor:  NO8: Sensor in Initialisierung |
| 0x5f66 | Drehratensensor:  DRS2- Drs ID passt nicht zur Anfrage |
| 0x5f67 | Drehratensensor:  DRS2 Checksumme der empfangenen Sensor-Nachricht ist nicht korrekt |
| 0x5f68 | Drehratensensor:  DRS2 ERR oder TERR Bit. Keine zusaetzliche Information (ERRNO = 0) |
| 0x5f69 | Drehratensensor:  DRS2: NO1 YRS Interner Wert ausser Wertebereich |
| 0x5f6a | Drehratensensor:  DRS2: NO3 Interner Ref Wert ausser Wertebereich |
| 0x5f6b | Drehratensensor:  DRS2: NO5 Timeout fuer empfangene Nachricht |
| 0x5f6c | Drehratensensor:  DRS2: NO6 Spannungsversorgung zu niedrig |
| 0x5f6d | Drehratensensor:  DRS2: NO7 Spannungsversorgung zu hoch |
| 0x5f6e | Drehratensensor:  DRS2: NO8 Sensor in Initialisierung |
| 0x5ee2 | Drucksensor: Plausibilitaet Drucksensor_Signalleitungen- DS5 :DSLine+DSLine2 = 5Volt. |
| 0x5ee4 | Drucksensor: Fehler Drucksensor_Stromversorgung. |
| 0x5ee5 | Drucksensor:  - Leitungsfehler. |
| 0x5ee6 | Drucksensor:  - Leitungsfehler: Signal invertiert. |
| 0x5ee7 | Drucksensor:  - Fehler beiPower Up Selbsttest (POS). |
| 0x5eed | Drucksensor:  - Drucksensor-Offset ungueltig. |
| 0x5ef2 | Druck Sensor_ACC_vorne:  - Offset Fehler Drucksensor |
| 0x5ef4 | Druck Sensor_ACC_vorne:  - Plausibilitaets Fehler Drucksensor Kreis |
| 0x5ef6 | Druck Sensor_ACC_vorne:  - DS2Add1-e.g. Ti-Drucksensor Leitungsfehler |
| 0x5ef8 | Druck Sensor_ACC_vorne:  - DS2Add-e.g. Ti-Drucksensor Fehler Spannungsversorgung |
| 0x5ef3 | Druck Sensor_ACC_hinten:  - Offset Fehler Drucksensor |
| 0x5ef5 | Druck Sensor_ACC_hinten:  - Plausibilitaets Fehler Drucksensor Kreis |
| 0x5ef7 | Druck Sensor_ACC_hinten:  - DS2Add2-e.g. Ti-Drucksensor Leitungsfehler |
| 0x5eba | Lenkwinkelsensor:  - Status Fehler |
| 0x5ebb | Lenkwinkelsensor:  - Signalfehler- Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5ebc | Lenkwinkelsensor:  - Sign Fehler (ohne SilaMemory) |
| 0x5ebd | Lenkwinkelsensor:  - Signal verbleibt auf konstanten Wert. |
| 0x5ebe | Lenkwinkelsensor:  - Messbereich LWS. |
| 0x5ebf | Lenkwinkelsensor:  - Signalgradient LWS. |
| 0x5ec0 | Lenkwinkelsensor:  - Langzeit-Offset-Wert ueberschreitet Limit. |
| 0x5ec1 | Lenkwinkelsensor:  - Plausibilitaetsfehler - in Bezug zu Drehratensensor. |
| 0x5ec5 | Lenkwinkelsensor:  - CAN-Botschaftszaehler meldet Fehler. |
| 0x5f0d | Lenkwinkelsensor:  - Segment-Finder Algorithmus  fand falsches Segment |
| 0x5f0e | Lenkwinkelsensor:  - SFA fand kein Segment und vfzref > 25 km/h, Temp. |
| 0x5f63 | Lenkwinkelsensor:  - LWS4 (RWDT_STEA_WHL) nicht abgeglichen |
| 0x5ed4 | Unplausible DSC-Regelung : Unplausibilitaet bei Gierratenregelung. |
| 0x5ed5 | Unplausible DSC-Regelung : Notbremsfunktion ausgeloest. |
| 0x5eda | Variantencodierung: Codierungswert in EEPROM nicht zulaessig. |
| 0x5edb | Variantencodierung: Codierungswert ausserhalb Wertebereich. |
| 0x5edc | Variantencodierung: Codierungswert nicht freigegeben in diesem Projekt. |
| 0x5efb | Varianten Umstellung nicht gelesen aus EEPROM |
| 0x5efc | keine Fahrzeugtyp Daten empfangen |
| 0x5efd | neue Variantenkodierung - Wert gesetzt |
| 0x5f23 | EEPROM Konfiguration ACB Hba Value im EEPROM nicht gueltig |
| 0x5f24 | Abgeschaltet ACB HBA HPS HVV durch EEPROM |
| 0x5f2c | EEPROM Inhalt nicht gueltig |
| 0x5f60 | Variantenkodierung passt nicht zum Fahrzeug |
| 0x5f18 | Variantenkodierung: EEPROM Konfiguration FZR Tol Wert in EEPROM nicht gueltig |
| 0x5f1e | Variantenkodierung: TOL ueber EEPROM deaktiviert |
| 0x5ef9 | DSC-Software: ECU-intern : Timeout in Software-Startup-Phase. |
| 0x5efa | DSC-Software: ECU-intern : asynchroner Rechenzyklus (Task)-Counter in Software. |
| 0x5f20 | ASW Anwendersoftware-Fehler: fordert vollstaendiges Abschalten des Systems an |
| 0x5f21 | ASW Anwendersoftware-Fehler: fordert nur EBD Funktion an |
| 0x5f22 | ASW Anwendersoftware-Fehler: fordert nur ABS Funktion an |
| 0x5f07 | AccEcd-Fehler: Timeout beim Empfangen der CAN Botschaften fuer ACC (ID 0x0AD), |
| 0x5f08 | AccEcd-Fehler: ACC, ECD alive-Fehler (ID 0x0AD,(ALIV_DCRN_BRP_ACC)) |
| 0x5f09 | AccEcd-Fehler: Gueltigkeitscheck des gesetzten Werts gescheitert (ID 0x0AD,(ST_DCRN_BRP_TAR_ACC)(DCRN_BRP_TAR_ACC)) |
| 0x5f0a | AccEcd-Fehler: ACC sendet Fehler Bit(ID 0x0AD,(ST_ACC_SWO_SYS_DSC)) |
| 0x5f2d | AccEcd-Fehler: Checksumme der empfangenen ACC Botschaft nicht richtig (ID 0x0AD,(CHKSM_DCRN_BRP_ACC) |
| 0x5f40 | AccEcd-Fehler: Status Verzoegerung Bremsdruck ungueltig oder Status ACC Systemabschaltung, ungueltiges Signal im Botschaft (ID 0x0AD,(ST_ACC_SWO_SYS_DSC)(ST_DCRN_BRP_TAR_ACC)) |
| 0x5f10 | Bremsbelagverschleiss-Fehler: Sensor check Vorderachse gescheitert |
| 0x5f11 | Bremsbelagverschleiss-Fehler: Sensor check Hinterachse gescheitert |
| 0x5f12 | Bremsbelagverschleiss-Fehler: Vorderachse Verschleissgrenze erreicht |
| 0x5f13 | Bremsbelagverschleiss-Fehler: Hinterachse Verschleissgrenze erreicht |
| 0x5f14 | Bremsbelagverschleiss-Fehler: Vorderachse Werte - sind nicht aktualisiert |
| 0x5f15 | Bremsbelagverschleiss-Fehler: Hinterachse Werte - sind nicht aktualisiert |
| 0x5f1a | DSC-ECU Software: CUS-Block: Fahrleistungsreduzierung |
| 0x5f1b | DSC-ECU Software: CUS-Block: Fahrleistungsreduzierung abgeschaltet |
| 0x5f25 | ARS-ECU-Fehler:Timeout waehrend Empfang von CAN Botschaften fuer ARS (reversibel!) |
| 0x5f26 | ARS-ECU-Fehler: ARS alive-Fehler (ID 0x1AC,(ALIV_COU_ARS)) |
| 0x5f1f | ARS-ECU-Fehler: Status ungueltig (ID 0x1AC,(ST_ARS)) |
| 0x5ed6 | LZA-Fehler: SIC-Langzeit-Kompensation abgeschaltet. |
| 0x5f2e | Getriebe-Fehler: Getriebe Botschaft fehlt oder Checksumme nicht gueltig (ID 0x0BA,(ALIV_GRB)(CHKSM_GRB)) |
| 0x5f2f | Getriebe-Fehler: Getriebe Status ungueltig oder Schalthebel ungueltig oder Getriebe negative-lift ungueltig (ID 0x0BA,(RPM_GRB_NEGL)(ST_GRLV_ACV)(ST_GR_GRB)) |
| 0x5f30 | DME-Fehler: Motordrehzahl ungueltig |
| 0x5f31 | DME-Fehler: mittleres Effektivdrehmoment ungueltig |
| 0x5f32 | DME-Fehler: unbearbeitetes Gaspedal ungueltig |
| 0x5f33 | DME-Fehler: ASR/MSR Rueckmeldung ist Null |
| 0x5f34 | DME-Fehler: Checksumme oder alive-Fehler von Nachricht TORQUE_1 ungueltig |
| 0x5f35 | DME-Fehler: Checksumme oder alive von Nachricht TORQUE_2 ungueltig |
| 0x5f36 | DME-Fehler: Checksumme oder alive von Nachricht TORQUE_3 ungueltig |
| 0x5f6f | DME-Fehler: Drehmoment aktueller Wert ungueltig (ID 0x0A8,(TORQ_AVL)) |
| 0x5f70 | DME-Fehler: Status Kupplungsschalter ungueltig (ID 0x0A8,(ST_SW_CLT)) |
| 0x5f71 | DME-Fehler: Drehmoment aktuelles Minimum ungueltig (ID 0x0A9,(TORQ_AVL_MIN)) |
| 0x5f72 | DME-Fehler: Drehmoment aktuelles Maximum ungueltig (ID 0x0A9,(TORQ_AVL_MAX)) |
| 0x5f73 | DME-Fehler: Drehmoment aktueller Wert der freien Stellung ungueltig (ID 0x0A9,(TORQ_AVL_SPAR_POS)) |
| 0x5f74 | DME-Fehler: Winkel Gaspedal ungueltig (ID 0x0AA,(ANG_ACPD)) |
| 0x5f75 | DME-Fehler: Drehmoment Fahrer Wahl ungueltig (ID 0x0AA,(TORQ_DVCH)) |
| 0x5f76 | DME-Fehler: Drehzahl Wert ungueltig (ID 0x0AA,(RPM_ENG)) |
| 0x5f77 | DME-Fehler: Status Drehmoment aktueller Wert ungueltig (ID 0x0A8,(ST_RCPT_ENG_DSC)) |
| 0x5f78 | DME-Fehler: Status vom Motor empfangen ungueltig (ID 0x0A8,(ST_RCPT_ENG_DSC)) |
| 0x5f45 | Niveau Bremsfluessigkeit zu niedrig |
| 0x5f47 | Kombi-Fehler: Kombi alive-Fehler |
| 0x5f48 | Kombi-Fehler: Zeit ungueltig oder Temperatur ungueltig (ID 0x310,(TEMP_EX,T_SEC_COU_REL) |
| 0x5f49 | Kombi-Fehler: Kilometerstand ungueltig (ID 0x330,(MILE_KM)) |
| 0x5f4a | Kombi-Fehler: Bremsbelagverschleiss vorne oder hinten: Daten ungueltig |
| 0x5f4b | Kombi-Fehler: Statusanzeige Handbremslichtschalter ungueltig(ID 0x1B4,(ST_IDLI_HABR)) |
| 0x5f4c | Kombi-Fehler: CANSys - Unterbrechung aller Kombi Nachrichten (0x1B4,0x310,0x330,0x5E0) |
| 0x5f50 | Ventil-Fehler: ValveGen Uebertemperatur Fehler |
| 0x5f52 | CCC/MASK-Fehler: Bedienung Reifendruckcontrol ungueltig |
| 0x5f54 | CAS-Fehler: Fahrzeugfahrgestellnummer ungueltig (ID 0x380,(NO_VECH_1) |
| 0x5f55 | CAS-Fehler: Motortyp ungueltig (ID 0x388,(TYP_VEH,TYP_ENG,TYP_GRP,TYP_CAPA) |
| 0x5f56 | CAS-Fehler: KL-15 Signal ungueltig oder KL-R Signal ungueltig oder KL-15 verglichen mit Wauln Plausibilitaets test nicht bestanden (ID 0x130,(ST_KL_R,ST_KL_15) |
| 0x5f57 | CAS-Fehler: CANSys - Unterbrechung aller CAS Nachrichten (ID 0x130,0x380,0x388) |
| 0x5f61 | AFS-Status ungueltig (ID 0x1FC,(ST_FN_AFS)) |
| 0x5f62 | Signal Austausch AFS-DSC ungueltig |
| 0x5f79 | Anhaenger Fehler; Anhaenger Signal ungueltig |
| 0x5f7a | Querbeschleunigung-Fehler zugeordnet zum ersten Querbeschleunigungssensor. |
| 0x5f7b | Querbeschleunigung-Fehler zugeordnet zum zweiten Querbeschleunigungssensor. |
| 0x60ac | RPA-Fehler: Reifenpannenanzeige: Codierdaten unplausibel |
| 0x60ad | RPA-Fehler: Reifenpannenanzeige: Standardisierungsdaten unplausibel |
| 0x60ae | RPA-Fehler: Reifenpannenanzeige: RPA-FASTA Daten unplausibel |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | DIGITAL | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 1 | 16.0 | 0 |
| 0x02 | ACB | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x03 | DBC | 0/1 | - | 0x02 | - | 1 | 1 | 0 |
| 0x04 | ECD | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x05 | HDC (nur 4x4) | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x06 | DSC | 0/1 | - | 0x10 | - | 1 | 1 | 0 |
| 0x07 | ABS | 0/1 | - | 0x20 | - | 1 | 1 | 0 |
| 0x08 | BLS | 0/1 | - | 0x40 | - | 1 | 1 | 0 |
| 0x09 | ASC | 0/1 | - | 0x80 | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 |

### STG_TABELLE

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0xFF | 0xFF |
| EVVL | 0x30 | 0x00 | 0x55 |
| AVVL | 0x32 | 0x00 | 0x64 |
| EVVR | 0x34 | 0x00 | 0x55 |
| AVVR | 0x36 | 0x00 | 0x64 |
| EVHR | 0x38 | 0x00 | 0x55 |
| AVHR | 0x3A | 0x00 | 0x64 |
| EVHL | 0x3C | 0x00 | 0x55 |
| AVHL | 0x3E | 0x00 | 0x64 |
| USV1 | 0x4E | 0x00 | 0x32 |
| USV2 | 0x50 | 0x00 | 0x32 |
| VLV1 | 0x52 | 0x00 | 0x55 |
| VLV2 | 0x54 | 0x00 | 0x55 |
| 40VLV1 | 0x52 | 0x00 | 0x28 |
| 40VLV2 | 0x54 | 0x00 | 0x28 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |

### STEUERN_I_O_EIN

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0xFF | 0xFF |
| EVVL | 0x28 | 0x55 | 0x01 |
| AVVL | 0x2A | 0x64 | 0x02 |
| EVVR | 0x28 | 0x55 | 0x04 |
| AVVR | 0x2A | 0x64 | 0x08 |
| EVHL | 0x28 | 0x55 | 0x10 |
| AVHL | 0x2A | 0x64 | 0x20 |
| EVHR | 0x28 | 0x55 | 0x40 |
| AVHR | 0x2A | 0x64 | 0x80 |
| USV1 | 0x2C | 0x32 | 0x01 |
| USV2 | 0x2C | 0x32 | 0x02 |
| VLV1 | 0x2E | 0x55 | 0x04 |
| VLV2 | 0x2E | 0x55 | 0x08 |
| 40VLV1 | 0x2E | 0x28 | 0x04 |
| 40VLV2 | 0x2E | 0x28 | 0x08 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |
| XYZ | 0x00 | 0x00 | 0x00 |

### STEUERN_I_O_AUS

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0x00 | 0x00 |
| EVVL | 0x28 | 0x00 | 0x01 |
| AVVL | 0x2A | 0x00 | 0x02 |
| EVVR | 0x28 | 0x00 | 0x04 |
| AVVR | 0x2A | 0x00 | 0x08 |
| EVHL | 0x28 | 0x00 | 0x10 |
| AVHL | 0x2A | 0x00 | 0x20 |
| EVHR | 0x28 | 0x00 | 0x40 |
| AVHR | 0x2A | 0x00 | 0x80 |
| USV1 | 0x2C | 0x00 | 0x01 |
| USV2 | 0x2C | 0x00 | 0x02 |
| VLV1 | 0x2E | 0x00 | 0x04 |
| VLV2 | 0x2E | 0x00 | 0x08 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |
| XYZ | 0x00 | 0x00 | 0x00 |

### RAD_NR_TABELLE

| SIGNAL | BYTE | BYTE_REPAIR |
| --- | --- | --- |
| V_LINKS | 0xA0 | 0x23 |
| V_RECHTS | 0xA2 | 0x24 |
| H_RECHTS | 0xA4 | 0x25 |
| H_LINKS | 0xA6 | 0x22 |

### BOSKENNUNG

| NR | BOS_K | BOS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Ölqualität |
| 0x02 | Br_v | Bremsbelagverschleiss vorne |
| 0x03 | Brfl | Bremsflüssigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x05 | Batt | Batteriezustand |
| 0x06 | Br_h | Bremsbelagverschleiss hinten |
| 0x10 | ZKrz | Zündkerzen |
| 0x11 | Sic | Sichtprüfung |
| 0x12 | Kfl | Kühlflüssigkeit |
| 0x20 | TUV | TÜV |
| 0x21 | AU | AU |
