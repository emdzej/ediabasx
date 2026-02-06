# DXC8.prg

## General

|  |  |
| --- | --- |
| File | DXC8.prg |
| Type | PRG |
| Jobs | 80 |
| Tables | 19 |
| Origin | BMW EF-43 Barbet |
| Revision | 9.00 |
| Author | BMW EF-43 Barbet, BMW EF-43 Kusch |
| ECU Comment | Version Robert Bosch DXC8 KWP 2000 star E83/84, E53 (ab 9/03) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitaets Control DXC8 E83/84, E53 (ab 9/03) |  |  |
| ORIGIN | string | BMW EF-43 Barbet |  |  |
| REVISION | string | 9.00 |  |  |
| AUTHOR | string | BMW EF-43 Barbet, BMW EF-43 Kusch |  |  |
| COMMENT | string | Version Robert Bosch DXC8 KWP 2000 star E83/84, E53 (ab 9/03) |  |  |
| PACKAGE | string | 1.14 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

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

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten KWP2000: $3E TesterPresent Modus  : Default

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

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer SG automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. Diag_Mode ist integriert KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### IDENT_VIN

Identdaten, BMW Fahrgestellnummer VIN KWP2000 star: $1A,$90 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_HW_NR

Identdaten, SystemSupplier ECU Hardware Nr KWP2000 star: $1A,$92 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_SW_BB_NR

Identdaten Robert Bosch SG Software Nummer (BB-Nummer) KWP2000: $1A,$94 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_SW_VERSION_NR

Identdaten Robert Bosch SG Softwareversionsnummer KWP2000: $1A,$95 ReadECUIdentification Modus  : Default

_No arguments._

### STATUS_RADGESCHWINDIGKEIT

Radgeschwindigkeiten auslesen KWP2000 star: $21,$01 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_ANALOG

Status analoge Eingaenge DXC_8 KWP2000 star: $21,$02 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_IO_LESEN_ANALOG

Status analoge Eingaenge DXC_8 KWP2000 star: $21,$02 ReadDataByLocalIdentifier service identisch mit dem Job STATUS_ANALOG

_No arguments._

### STATUS_DIGITAL

Status digitale Eingaenge DXC_8 KWP2000 star: $21,$03 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_CAN

Status CAN DSC8 KWP2000 star: $21,$04 ReadDataByLocalIdentifier service

_No arguments._

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt !) Musterparametersatz: ROMI,0xFF12AB,12,Datenbytes Argumente mit "Strich_Punkt" getrennt (nicht mit Komma !) 0x04,0x05,0x0B,0x0C...Datenbytes(hex) durch Komma getrennt !) 04,05,03,11,12 ... Datenbytes(dec) durch Komma getrennt !) das High-Byte ist bei R.Bosch DXC8 immer 0xFFxxxx KWP2000 star: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### STEUERN_VAK_BEFUELL

Evakuierung und Befuellung der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: E,12,6,R jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Bsp: E,10,1,R: Routine laeuft 10 sec, 1 sec nach Start wird zusaetzlich die Pumpe eingeschaltet Bsp: E,10,8,R: Routine laeuft 10 sec, 8 sec nach Start wird zusaetzlich die Pumpe eingeschaltet Bsp: E,10,10,R oder E,10,0,R: Routine laeuft 10 sec nur mit Ventilansteuerung KWP2000 star: $30,$01 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| ZEIT_ROUTINE | int |  |
| DELAY_PUMPE | int |  |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_REP_ENTLUEFTUNG

Evakuierung und Befuellung der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: E,V_links,3,R jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) KWP2000 star: $30,$02 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| RAD_NR | string |  |
| WIEDERHOLUNG | int |  |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_DREHZAHLFUEHLER_ALLE

Test Drehzahlfuehler Musterparametersatz: 2000 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit in ms |

### STEUERN_ERGEBNIS_ROUTINE

Ergebnis der Routine abholen es ist nur ein Argument zulaessig Musterparametersatz: "REP_ENTLUEFTUNG" Musterparametersatz: "VAK_BEFUELL" Musterparametersatz: "STELLGLIED" Musterparametersatz: "KUPPLUNGS_TEST "

| Name | Type | Description |
| --- | --- | --- |
| TYP | string | Typ der Routine angeben |

### STEUERN_STOP

Digitale Stellglieder ansteuern ABS_DSC57 KWP2000 star: $30,$10 InputOutputControlByLocalIdentifier

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

Digitale Stellglieder ansteuern DSC_8 Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an KWP2000 star: $30,$04 InputOutputControlByLocalIdentifier Musterparametersatz_1: "E,EIN,0,0,USV1,USV2,EIN,0,0,0,MRA,800,AUS,0,0,USV2,USV1,EIN,EVVL,EVVR,EVHL,EVHR" Musterparametersatz_2: "W,EIN,VLV1,VLV1,VLV2,VLV2,EIN,MRA,MRA,MRA,MRA,800,AUS,USV1,USV2,USV2,USV1,EIN,AVVL,AVVL,AVVR,AVHR,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es gibt 5 Stellgliedgruppen "EIN/AUS,MRA" "EIN/AUS,USV1,USV2" "EIN/AUS,VLV1,VLV2" "EIN/AUS,EVVL,EVVR,EVHL,EVHR" "EIN/AUS,AVVL,AVVR,AVHL,AVHR" in jedem Job koennen dann 4 beliebige Stellgliedgruppen angesteuert werden und zwar 2 Stellgliedgruppen vor dem Zeitglied und 2 Stellgliedgruppen nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit:  W_ZEIT in ms eine Stellgliedgruppe besteht aus 5 Argumenten: einem Befehl "EIN" oder "AUS" und aus genau 4 Stellgliedern werden weniger als 4 Stellglieder angesteuert, bzw. koennen pro Gruppe nur 1 bzw. 2 Stellglieder angesteuert werden, so sind die restlichen linksbuendig mit "0" zu besetzen(siehe Musterparametersatz_1) um Nullen zu vermeiden kann man sie auch mehrfach mit dem gleichen Stellglied besetzen (siehe Musterparametersatz_2) die Stellglieder einer Gruppen duerfen nicht mit Stellgliedern anderer Gruppen gemixt werden

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

### ECU_HW_NR_SCHREIBEN

KWP2000 star: $3B WriteDataByLocalIdentifier $92 Hersteller ECU Hardware Nummer schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 5 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### STEUERN_AKTUATORIK

Statischer Test der Komponenten DSC_8 Musterparametersatz: 600,400 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| USV_ZEIT | int | Ausfuehrungszeit in ms: t >= 400ms Verzoegerungszeit bis zur Aktivierung der USVs |
| PUMPE_ZEIT | int | Ausfuehrungszeit in ms: t >= 200ms Verzoegerungszeit zwischen der Aktivierung der USVs und Abschalten des Pumpenmotors |

### IDENT_SCHREIBEN

KWP2000 star: $3B WriteDataByLocalIdentifier $80 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 17 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### IDENT_VIN_SCHREIBEN

KWP2000 star:$3B,$90 WriteDataByLocalIdentifier service Ident-Daten des SG schreiben

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (8-stellig) Es muss 1 String mit 8 Zeichen uebergeben werden das letzte Zeichen ist ein Dummy z.B. JR250001 FG_NR: JR25000 |

### STATUS_RPA

KWP2000: $21,$05 ReadDataByLocalIdentifier service Modus  : Default

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

### COD_LESEN_DSC

Auslesen der Codierdaten KWP2000 star: $22 ReadDataByCommonIdentifier $3000 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_DSC

Codierdaten schreiben Es muessen 4 Codierbyte als Hex_String uebergeben werden Argument: z.B.: 01,07,02,AB, die CS wird in der ECU berechnet KWP2000 star: $2E WriteDataByCommonIdentifier $3000 codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Bereich: 00 - FF |

### COD_LESEN_RPA_1

Auslesen der Codierdaten KWP2000: $22 ReadDataByCommonIdentifier $3001 Codierdaten Modus  : Default

_No arguments._

### COD_SCHREIBEN_RPA_1

Codierdaten schreiben KWP2000: $2E WriteDataByCommonIdentifier $3001 codingDataSet Modus  : Default

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
| C_BYTES | string | Es muessen 12(ab SW 19) bzw. 28(ab SW 25) Codier_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 das Laengenbyte wird automatisch berechnet Bereich:  0x00-0xFF |

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

### RPA_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $05 RPA schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muss 1 Byte uebergeben werden 00 keine Aktion oder 01 Standardisierung |

### RPA_FASTA_LOESCHEN

KWP2000: $3B WriteDataByLocalIdentifier $06 RPA_FASTA_loeschen

_No arguments._

### RPA_DEFAULT

KWP2000: $3B WriteDataByLocalIdentifier $06 RPA_FASTA_loeschen $07 Standardisierungdaten_1 $08 Standardisierungdaten_2 $09 Standardisierungdaten_3 Fasta- und Standardisierungsdaten auf default setzten

_No arguments._

### RPA_LAMPE_EINSCHALTEN

KWP2000: $3B WriteDataByLocalIdentifier $09 Standardisierungdaten_3 Fuer USA Standardisierungsdaten auf default setzten und dazu RPA-Lampe einschalten

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

### LENKWINKEL_DSC_ABGLEICHEN

KWP2000 star: $30,$08 InputOutputControlByLocalIdentifier service Musterparametersatz: 78 gueltige Zufallszahlen: 1 - 254 wird keine Zufallszahl uebergeben, dann wird eine Zufallszahl aus der Systemzeit ermittelt

| Name | Type | Description |
| --- | --- | --- |
| LFD_NR | int | laufende Nummer bzw. Zufallszahl fuer Eintrag ins LW-SG |

### TEST_LENKWINKEL

KWP2000 star: $30,$08 InputOutputControlByLocalIdentifier service Musterparametersatz: 78 gueltige Zufallszahlen: 1 - 254 wird keine Zufallszahl uebergeben, dann wird eine Zufallszahl aus der Systemzeit ermittelt identisch mit dem Job LENKWINKEL_DSC_ABGLEICHEN (wurde aufgrund einer Anforderung von VS-22 angelegt)

| Name | Type | Description |
| --- | --- | --- |
| LFD_NR | int | Laufende Nummer fuer Eintrag in LW-SG und DSC57-SG |

### FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000 star: $18 ReadDiagnosticTroubleCodesByStatus Modus    : Default

_No arguments._

### STEUERN_KUPPLUNG

Digitale Stellglieder ansteuern DXC8 KWP2000 star: $31,$20 Musterparametersatz: "AKTIV" oder "PASSIV" Default ist aktiv

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | string | "AKTIV" oder "PASSIV" Default ist aktiv |

### STEUERN_KUPPLUNGS_TEST

der Kupplungstest dauert ca. 10 sec im n.i.O. Fall dauert der Kupplungstest ca. 26 sec der Parameter"R" oder "r" ist optional "R" fordert zusaetzlich ein Ergebnis-Telegramm an

| Name | Type | Description |
| --- | --- | --- |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### EEPROM_ASW_BLOCK

HPS,HHV,TOL,Rassellogik,FLR Codierung schreiben werden keine Argumente uebergeben, so wird nur der EEPROM Codierstatus ausgegeben. zum Start der Umcodierung muss als 1. Argument der Diagnoseindex der DSC ECU uebergeben werden. dann koennen noch max. 3 weitere Argumente uebergeben werden "HPS_ON" oder "HPS_OFF" (Fadingunterstuetzung) "HVV_ON" oder "HVV_OFF" (hydr. Vollverstaerkung) "TOL_ON" oder "TOL_OFF" (Anh.-Schlingerlogik) "FLR_ON" oder "FLR_OFF" (Fahr_Leistungs_Regelung) "RASSEL_ON" oder "RASSEL_OFF" (Rassellogik) Musterparametersatz: "0x23,RASSEL_ON,HVV_ON,TOL_OFF" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) als Dummy fuer das 1. Argument (Diagnose_Index) kann auch der Wert 0x9999 ubergeben werden (Umcodierung funktioniert so immer) Rassellogik nur fuer E83 ab Diagnoseindex 0x0023 verfuegbar KWP2000 star: $23,$3D

| Name | Type | Description |
| --- | --- | --- |
| ARG_UMCODIERUNG | int | Dummy "0x9999" (hex) oder "39321" (dezimal) |
| ARG_1 | string | "HPS_ON" oder "HPS_OFF" oder "HVV_ON" oder "HVV_OFF" oder "TOL_ON" oder "TOL_OFF" oder "FLR_ON" oder "FLR_OFF" oder "RASSEL_ON" oder "RASSEL_OFF" |
| ARG_2 | string | "HPS_ON" oder "HPS_OFF" oder "HVV_ON" oder "HVV_OFF" oder "TOL_ON" oder "TOL_OFF" oder "FLR_ON" oder "FLR_OFF" oder "RASSEL_ON" oder "RASSEL_OFF" |
| ARG_3 | string | "HPS_ON" oder "HPS_OFF" oder "HVV_ON" oder "HVV_OFF" oder "TOL_ON" oder "TOL_OFF" oder "FLR_ON" oder "FLR_OFF" oder "RASSEL_ON" oder "RASSEL_OFF" |

### _FS_LESEN_INPA

KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes KWP2000: $18 ReadDiagnosticTroubleCodesByStatus kombinierter Job §17 und §18 Fehlerspeicher lesen mit allen Umweltdaten Ausgabe der Results wie INPA

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5d8c | 5d8c - Rueckfoerder Pumpe: - Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AN aber erwartet: AUS - Leitungsstoerung ? |
| 0x5d8d | 5d8d - Rueckfoerder Pumpe: - steht. Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AUS aber erwartet: AN - Sicherung oder Pumpenmotorrelais defekt ? |
| 0x5d8e | 5d8e - Rueckfoerder Pumpe: - Nachlauf zu kurz. |
| 0x5d8f | 5d8f - Rueckfoerder Pumpe: - Freigabe des Pumpen-Anlauf-Zyklus, kein Fehler: Gutpruefung nach behobenem Defekt erfolgt. |
| 0x5d90 | 5d90 - Ventil Relais: VR offen. Fehler verursacht durch zu viele erkannte Einzelventilfehler - Sicherung defekt ? |
| 0x5d91 | 5d91 - Ventil Relais: VR offen, Relais schliesst nicht waehrend Startup-Test. |
| 0x5d92 | 5d92 - Ventil Relais: VR-Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. |
| 0x5d93 | 5d93 - Ventil Relais: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse ueber Startup-Test erkannt.  |
| 0x5d94 | 5d94 - Ventil Relais: VR steckt in geschlossener Position. Relais schaltet nicht ab waehrend Startup-Test. |
| 0x5d95 | 5d95 - Ventil Relais: VR offen, Spannungsversorgung_VR waehrend Startup-Test zu niedrig (verglichen mit Uz Versorgungsspannung_Klemme_15); Defekte Sicherung! |
| 0x5d96 | 5d96 - Ventil Relais: Kurzschluss zu Uz Versorgungsspannung_Klemme_15 im zyklischen Ventilrelais-Test festgestellt. |
| 0x5d97 | 5d97 - Ventil Relais: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse waehrend zyklischem Ventilrelais-Testregistriert. |
| 0x5d98 | 5d98 - Einlass Ventil (EV) Vorne Links - zyklischer Ventil- und Relaistest. |
| 0x5d99 | 5d99 - Einlass Ventil (EV) Vorne Links - Allgemeiner Fehler. |
| 0x5d9b | 5d9b - Einlass Ventil (EV) Vorne Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5dda | 5DDA - Einlassventil (Ev) Vorne links - Kurzschluss zur Masse. |
| 0x5ddb | 5DDB - Einlassventil (Ev) Vorne links - Fehler nicht zuweisbar |
| 0x5d9d | 5d9d - Auslass Ventil (AV) Vorne Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5d9e | 5d9e - Auslass Ventil (AV) Vorne Links - Allgemeiner Fehler. |
| 0x5de5 | 5DE5 - Auslassventil (Av) Vorne links - Kurzschluss zur Masse. |
| 0x5de6 | 5DE6 - Auslassventil (Av) Vorne links - Fehler nicht zuweisbar |
| 0x5da1 | 5da1 - Einlass Ventil (EV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da2 | 5da2 - Einlass Ventil (EV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5e29 | 5E29 - Einlassventil (Ev) Vorne rechts - Kurzschluss zur Masse. |
| 0x5e2a | 5E2A - Einlassventil (Ev) Vorne rechts - Fehler nicht zuweisbar |
| 0x5da6 | 5da6 - Auslass Ventil (AV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da7 | 5da7 - Auslass Ventil (AV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5e2b | 5E2B - Auslassventil (Av) Vorne rechts - Kurzschluss zur Masse. |
| 0x5e78 | 5E78 - Auslassventil (Av) Vorne rechts - Fehler nicht zuweisbar |
| 0x5daa | 5daa - Einlass Ventil (EV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dab | 5dab - Einlass Ventil (EV) Hinten Links - Allgemeiner Fehler. |
| 0x5dad | 5dad - Einlass Ventil (EV) Hinten Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5e47 | 5E47 - Einlassventil (Ev) Hinten links - Kurzschluss zur Masse. |
| 0x5e48 | 5E48 - Einlassventil (Ev) Hinten links - Fehler nicht zuweisbar |
| 0x5daf | 5daf - Auslass Ventil (AV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db0 | 5db0 - Auslass Ventil (AV) Hinten Links - Allgemeiner Fehler. |
| 0x5e6e | 5E6E - Auslassventil (Av) Hinten links - Kurzschluss zur Masse. |
| 0x5e6f | 5E6F - Auslassventil (Av) Hinten links - Fehler nicht zuweisbar |
| 0x5db3 | 5db3 - Einlass Ventil (EV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db4 | 5db4 - Einlass Ventil (EV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5e71 | 5E71 - Einlassventil (Ev) Hinten rechts - Kurzschluss zur Masse. |
| 0x5e73 | 5E73 - Einlassventil (Ev) Hinten rechts - Fehler nicht zuweisbar |
| 0x5db8 | 5db8 - Auslass Ventil (AV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db9 | 5db9 - Auslass Ventil (AV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5e7c | 5E7C - Auslassventil (Av) Hinten rechts - Kurzschluss zur Masse. |
| 0x5e7d | 5E7D - Auslassventil (Av) Hinten rechts - Fehler nicht zuweisbar |
| 0x5dbc | 5dbc - Ventil (USV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dbd | 5dbd - Ventil (USV1): Allgemeiner Fehler. |
| 0x5dbf | 5dbf - Ventil (USV1): Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5e7f | 5E7F - Ventil USV1 - Kurzschluss zur Masse. |
| 0x5e80 | 5E80 - Ventil USV1 - Fehler nicht zuweisbar |
| 0x5dc1 | 5dc1 - Ventil (USV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc2 | 5dc2 - Ventil (USV2): Allgemeiner Fehler. |
| 0x5e81 | 5E81 - Ventil USV2 - Kurzschluss zur Masse. |
| 0x5e82 | 5E82 - Ventil USV2 - Fehler nicht zuweisbar |
| 0x5dc6 | 5dc6 - Ventil (HSV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc7 | 5dc7 - Ventil (HSV1): Allgemeiner Fehler. |
| 0x5dc8 | 5DC8 - Ventil HSV1 - Kurzschluss zur Masse. |
| 0x5dc9 | 5DC9 - Ventil HSV1 - Fehler nicht zuweisbar |
| 0x5dca | 5dca - Ventil (HSV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dcb | 5dcb - Ventil (HSV2): Allgemeiner Fehler. |
| 0x5dcc | 5DCC - Ventil HSV2 - Kurzschluss zur Masse. |
| 0x5dcd | 5DCD - Ventil HSV2 - Fehler nicht zuweisbar |
| 0x5dce | 5dce - Uz Versorgungsspannung_Klemme_15-Fehler: leichte Unterspannung (Spannung zu niedrig). |
| 0x5dcf | 5dcf - Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). |
| 0x5dd0 | 5dd0 - Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). |
| 0x5dd1 | 5dd1 - Uz Versorgungsspannung_Klemme_15-Fehler: Kurzschluss einer Drehzahlsensor-Spannungsleitung auf UBatt. (Stromfluss durch den ASPxx-Pin des Drehzahlsensor_Inputamplifiers). |
| 0x5dd2 | 5dd2 - Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz Versorgungsspannung_Klemme_15. |
| 0x5dd3 | 5dd3 - DSC-ECU: Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler). |
| 0x5dd4 | 5dd4 - DSC-ECU: ECU-intern: Raddrehzahlfuehler-Driverchip: Fehler bei Versorgungsspannung/Masse. Reset-Response-Test fehlerhaft. |
| 0x5dd5 | 5dd5 - DSC-ECU: ECU-intern: Enable-Leitung kann nicht eingeschaltet werden (Startup-Test Enable High). |
| 0x5dd6 | 5dd6 - DSC-ECU: ECU-intern: Enable-Leitung kann nicht ausgeschaltet werden (Startup-Test Enable low). |
| 0x5dd8 | 5dd8 - DSC-ECU: ECU-intern: System Startup-Synchronisation-Timeout aufgetreten. |
| 0x5dd9 | 5dd9 - DSC-ECU: ECU-intern: SP-Interface: Hardware Fehler erkannt. |
| 0x5ddc | 5ddc - DSC-ECU: ECU-intern: Het-SP-Interface sendet Fehler; Nachricht nicht korrekt uebertragen. |
| 0x5ddd | 5ddd - DSC-ECU: ECU-intern: Zugang in Uebersetzungstabelle des Het-SP-Interface ist nicht moeglich. |
| 0x5dde | 5dde - DSC-ECU: ECU-intern: Watchdog-Ueberwachung meldet: Datenfehler aufgetreten. |
| 0x5ddf | 5ddf - DSC-ECU: ECU-intern: Watchdog-Ueberwachung meldet: Status nicht korrekt. |
| 0x5de0 | 5de0 - DSC-ECU: ECU-intern: Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15. |
| 0x5de1 | 5de1 - DSC-ECU: ECU-intern: Clockstatus des SP-Interface zeigt fehlende Uhr. |
| 0x5de2 | 5de2 - DSC-ECU: ECU-intern: DePwm Status : Software-/ Hardware Konfigurationen passen nicht zusammen (DF11i/s). |
| 0x5de3 | 5de3 - DSC-ECU: ECU-intern: Status_Raddrehzahlfuehler des SP-Interface passt nicht zur Konfiguration. |
| 0x5de4 | 5de4 - DSC-ECU: ECU-intern: Boot Block ROM Checksummentest-Fehler. |
| 0x5ded | 5ded - DSC-ECU: ECU-intern: Fehlererkennungssystem-Fehler und Statustransfer: Transfer in Algorithm Server nicht gestartet . |
| 0x5dee | 5dee - DSC-ECU: ECU-intern: Fehlererkennungssystem-Fehler in Status/Transfer: SP-Interface-Fehler in Algorithm-Server. |
| 0x5def | 5def - DSC-ECU: ECU-intern: ROM Checksummentest-Fehler. |
| 0x5df0 | 5df0 - DSC-ECU: ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5df1 | 5df1 - DSC-ECU: ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5df2 | 5df2 - DSC-ECU: ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5df3 | 5df3 - DSC-ECU: ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5df5 | 5df5 - DSC-ECU: ECU-intern: Can RAM Checkpatterntest-Fehler. |
| 0x5df6 | 5df6 - DSC-ECU: ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task)-Timing. |
| 0x5df7 | 5df7 - DSC-ECU: ECU-intern: Betriebssystem: geringe Background-Rechenzyklus(Task) Aktivitaet - System ueberlastet ! |
| 0x5df8 | 5df8 - DSC-ECU: ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5df9 | 5df9 - DSC-ECU: ECU-intern: Betriebssystem: Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5dfa | 5dfa - DSC-ECU: ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5dfb | 5dfb - DSC-ECU: ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5dfc | 5dfc - DSC-ECU: ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5dfd | 5dfd - DSC-ECU: ECU-intern: Illegalen Opcode gefunden    -> Mikrocontroller Mode: undefiniert. |
| 0x5dfe | 5dfe - DSC-ECU: ECU-intern: ROM Checksummentest-Fehler. |
| 0x5dff | 5dff - DSC-ECU: ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5e00 | 5e00 - DSC-ECU: ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5e01 | 5e01 - DSC-ECU: ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5e02 | 5e02 - DSC-ECU: ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5e03 | 5e03 - DSC-ECU: ECU-intern: Allgemeiner Fehler des Ventiltreiber-Status oder -antriebes durch zyklischen Ventilrelaistest registriert.  |
| 0x5e04 | 5e04 - DSC-ECU: ECU-intern: Fehler der permanenten Enable-Leitungsueberwachung (Enable ist low nach Startup-Test). |
| 0x5e05 | 5e05 - DSC-ECU: ECU-intern: nicht moeglich SP-Interface transfer zu planen. |
| 0x5e06 | 5e06 - DSC-ECU: ECU-intern: Planmaessige Datenuebertragung nicht verfuegbar.  |
| 0x5e07 | 5e07 - DSC-ECU: ECU-intern: Datenuebertragungsfehler (Antwort des SP-Interface handler). |
| 0x5e08 | 5e08 - DSC-ECU: ECU-intern: Planmaessiger Build-in-self-test (BIST) nicht korrekt (BIST Kontinuität). |
| 0x5e09 | 5e09 - DSC-ECU: ECU-intern: Build-in-self-test (BIST)-Signaturen verschieden, CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0a | 5e0a - DSC-ECU: ECU-intern: Allgemeiner Steuergeräte-Fehler. |
| 0x5e0b | 5e0b - DSC-ECU: ECU-intern: Fehlererkennungssystem Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. |
| 0x5e0c | 5e0c - DSC-ECU: ECU-intern: Build-in-self-test (BIST)-Signaturen unterschiedlich. CPU Fehler in Algorithm- oder System-Server. |
| 0x5e0d | 5e0d - DSC-ECU: ECU-intern: Timeout des Build-in-self-test (BIST). Antwort durch Algorithm-Server. |
| 0x5e0e | 5e0e - DSC-ECU: ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task) Timing. |
| 0x5e0f | 5e0f - DSC-ECU: ECU-intern: Betriebssystem Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5e10 | 5e10 - DSC-ECU: ECU-intern: Betriebssystem: geringe Background Rechenzyklus (Task) Aktivität - System ueberlastet ! |
| 0x5e11 | 5e11 - DSC-ECU: ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5e12 | 5e12 - DSC-ECU: ECU-intern: Illegaler Opcode gefunden  -> Mikrocontroller Mode: undefiniert |
| 0x5e13 | 5e13 - DSC-ECU: ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5e14 | 5e14 - DSC-ECU: ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5e15 | 5e15 - DSC-ECU: ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface timeout in System-Server.  |
| 0x5e16 | 5e16 - DSC-ECU: ECU-intern: Fehlererkennungssystem Transfer Fehler: SP-Interface timeout in System-Server. |
| 0x5e17 | 5e17 - DSC-ECU: ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface Fehler in System-Server. |
| 0x5e18 | 5e18 - DSC-ECU: ECU-intern: Datenmenge der Peripherie SP-Interface ueberschreitet Bufferlaenge. |
| 0x5e19 | 5e19 - DSC-ECU: ECU-intern: Serial-Peripherial-Interface (SPI): ID Anfrage nicht akzeptiert. |
| 0x5e1a | 5e1a - DSC-ECU: ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler multi IC. |
| 0x5e1b | 5e1b - DSC-ECU: ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler im EEPROM. |
| 0x5e1c | 5e1c - DSC-ECU: ECU-intern: Bandluecke Spannung ausserhalb gueltigem Bereich. |
| 0x5e1d | 5e1d - DSC-ECU: ECU-intern: ADC Umwandlung Start-Fehler. |
| 0x5e20 | 5e20 - DSC-ECU: Allgemeiner Steuergeräte-Fehler. |
| 0x5e21 | 5e21 - DSC-ECU: ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5f03 | 5f03 - ECU-Fehler: Fehler beim lesen der ASW-EEPROM Werte: Defekte EEPROM-Zelle |
| 0x5f04 | 5f04 - ECU-Fehler: Auslesen der ASW-EEPROM Werte dauert zu lange |
| 0x5f05 | 5f05 - ECU-Fehler: Testpin Leitungsunterbrechung ueber ValveDriftCheck fuer U467 erkannt. |
| 0x5f06 | 5f06 - ECU-Fehler: fehlerhafter Zugriff auf Ventilausgang |
| 0x5f17 | 5f17 - ECU-Fehler: High-end-timer (HET) - Fehler aufgetreten |
| 0x5f38 | 5f38 - DSC-ECU: ECU-intern : Radgeschwindigkeiten von Algorithm- und System-Server sind unterschiedlich. |
| 0x5e22 | 5e22 - Raddrehzahlfuehler Vorne Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e23 | 5e23 - Raddrehzahlfuehler Vorne Links: Langzeitig vorhandener Fehlerverdacht. |
| 0x5e24 | 5e24 - Raddrehzahlfuehler Vorne Links: Signalflanke fehlt (RDF Typ 11i). |
| 0x5e25 | 5e25 - Raddrehzahlfuehler Vorne Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e26 | 5e26 - Raddrehzahlfuehler Vorne Links: Luftspalt zu groß. |
| 0x5e27 | 5e27 - Raddrehzahlfuehler Vorne Links: Dynamischen Signalverlust registriert. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e28 | 5e28 - Raddrehzahlfuehler Vorne Links: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e2d | 5e2d - Raddrehzahlfuehler Vorne Links: Fehlender Zahn RAD VL. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e2e | 5e2e - Raddrehzahlfuehler Vorne Links: Radschlupfueberwachung RAD VL. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e2f | 5e2f - Raddrehzahlfuehler Vorne Links: Fehler Anfahrerkennung RAD VL (RDF-Signalwert ungueltig). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5efe | 5efe - Raddrehzahlfuehler Vorne Links: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad VL. |
| 0x5e30 | 5e30 - Raddrehzahlfuehler Hinten Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e31 | 5e31 - Raddrehzahlfuehler Hinten Links: Langzeitig vorhandener Fehlerverdacht. |
| 0x5e32 | 5e32 - Raddrehzahlfuehler Hinten Links: Signalflanke fehlt (RDF Typ 11i). |
| 0x5e33 | 5e33 - Raddrehzahlfuehler Hinten Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e34 | 5e34 - Raddrehzahlfuehler Hinten Links: Luftspalt zu groß. |
| 0x5e35 | 5e35 - Raddrehzahlfuehler Hinten Links: Dynamischen Signalverlust registriert. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e36 | 5e36 - Raddrehzahlfuehler Hinten Links: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e3b | 5e3b - Raddrehzahlfuehler Hinten Links: Fehlender Zahn RAD HL. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e3c | 5e3c - Raddrehzahlfuehler Hinten Links: Radschlupfueberwachung  RAD HL. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e3d | 5e3d - Raddrehzahlfuehler Hinten Links: Fehler Anfahrerkennung RAD HL (RDF-Signalwert ungueltig). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5eff | 5eff - Raddrehzahlfuehler Hinten Links: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad HL. |
| 0x5e3e | 5e3e - Raddrehzahlfuehler Hinten Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e3f | 5e3f - Raddrehzahlfuehler Hinten Rechts: Langzeitig vorhandener Fehlerverdacht. |
| 0x5e40 | 5e40 - Raddrehzahlfuehler Hinten Rechts: Signalflanke fehlt (RDF Typ 11i). |
| 0x5e41 | 5e41 - Raddrehzahlfuehler Hinten Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e42 | 5e42 - Raddrehzahlfuehler Hinten Rechts: Luftspalt zu groß. |
| 0x5e43 | 5e43 - Raddrehzahlfuehler Hinten Rechts: Dynamischen Signalverlust registriert. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e44 | 5e44 - Raddrehzahlfuehler Hinten Rechts: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e49 | 5e49 - Raddrehzahlfuehler Hinten Rechts: Fehlender Zahn RAD HR. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e4a | 5e4a - Raddrehzahlfuehler Hinten Rechts: Radschlupfueberwachung  RAD HR. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e4b | 5e4b - Raddrehzahlfuehler Hinten Rechts: Fehler Anfahrerkennung RAD HR (RDF-Signalwert ungueltig). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5f00 | 5f00 - Raddrehzahlfuehler Hinten Rechts: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad HR. |
| 0x5e4c | 5e4c - Raddrehzahlfuehler Vorne Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e4d | 5e4d - Raddrehzahlfuehler Vorne Rechts: Langzeitig vorhandener Fehlerverdacht. |
| 0x5e4e | 5e4e - Raddrehzahlfuehler Vorne Rechts: Signalflanke fehlt (RDF Typ 11i). |
| 0x5e4f | 5e4f - Raddrehzahlfuehler Vorne Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e50 | 5e50 - Raddrehzahlfuehler Vorne Rechts: Luftspalt zu groß. |
| 0x5e51 | 5e51 - Raddrehzahlfuehler Vorne Rechts: Dynamischen Signalverlust registriert. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e52 | 5e52 - Raddrehzahlfuehler Vorne Rechts: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e57 | 5e57 - Raddrehzahlfuehler Vorne Rechts: Fehlender Zahn RAD VR. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e58 | 5e58 - Raddrehzahlfuehler Vorne Rechts: Radschlupfueberwachung  RAD VR. Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5e59 | 5e59 - Raddrehzahlfuehler Vorne Rechts: Fehler Anfahrerkennung RAD VR (RDF-Signalwert ungueltig). Gutpruefung nach behobenem Defekt erforderlich ! |
| 0x5f01 | 5f01 - Raddrehzahlfuehler Vorne Rechts: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad VR. |
| 0x5e5a | 5e5a - Raddrehzahlfuehler allgemein: Mehrere Raddrehzahlfuehler: Langzeitig vorhandener Fehlerverdacht von 2 Raddrehzahlfuehler. |
| 0x5e5b | 5e5b - Raddrehzahlfuehler allgemein: Mehrere Raddrehzahlfuehler: Langzeitig vorhandener Fehlerverdacht von 3 oder 4 Raddrehzahlfuehler. |
| 0x5e5c | 5e5c - Raddrehzahlfuehler allgemein: Plausibilitaet Drehrichtung. |
| 0x5e5d | 5e5d - Raddrehzahlfuehler allgemein: Unplausibilitaet bei ABS-Regelung. |
| 0x5e5e | 5e5e - Raddrehzahlfuehler allgemein: Schlupfueberwachung (Lambda) allgemein. |
| 0x5e5f | 5e5f - Raddrehzahlfuehler allgemein: Mehrere Raddrehzahlfuehler: Kurzzeitiger Fehlerverdacht von 2-3 Raddrehzahlfuehler. Möglicherweise ohne Lampenanzeige. (Temporärer, heilbarer Fehler). |
| 0x5e66 | 5E66 - Raddrehzahlfuehler allgemein: vertauschte Raddrehzahlfuehler an Vorderachse. |
| 0x5e67 | 5E67 - Raddrehzahlfuehler allgemein: vertauschte Raddrehzahlfuehler an Hinterachse. |
| 0x5e68 | 5E68 - Raddrehzahlfuehler allgemein: vertauschte Raddrehzahlfuehler an Vorderachse mit SilaMemory. |
| 0x5e69 | 5E69 - Raddrehzahlfuehler allgemein: vertauschte Raddrehzahlfuehler an Hinterachse mit SilaMemory. |
| 0x5f02 | 5f02 - Raddrehzahlfuehler allgemein: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten. |
| 0x5dc5 | 5DC5 - BLS - Leitungsunterbrechung |
| 0x5e60 | 5e60 - Bremslichschalter-Fehler: DME meldet BLS-Fehler im Bremssystem (F_BS) - Leitungs-Kurzschluss ? |
| 0x5e62 | 5e62 - Bremslichschalter-Fehler: Ueberwachung BLS permanent high |
| 0x5e63 | 5e63 - Bremslichschalter-Fehler: Ueberwachung BLS permanent high mit SilaMemory (ECU sieht permanent getretenes Bremspedal)- Gutpruefung nach behobenem Defekt erforderlich ! -Leitungsunterbrechung oder Kurzschluss ? |
| 0x5eee | 5eee - Bremslichschalter:  - Plausibilitaet 2 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5eef | 5eef - Bremslichschalter:  - Plausibilitaet 1 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5ef0 | 5ef0 - Bremslichschalter:  - Plausibilitaet 3 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5e64 | 5e64 - CAN-Bus-Fehler: Allgemeiner CAN-Fehler. |
| 0xD347 | D347 - CAN-Bus-Fehler: CAN Initialisierungs- oder BusOff-Fehler - CAN Leitungsunterbrechung oder Kurzschluss ? |
| 0x5e6a | 5e6a - CAN-Botschaft/DSC-Fehler: Botschaft ASC1 (ID 0x153) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5e6b | 5e6b - CAN-Botschaft/DSC-Fehler: Botschaft ASC2 (ID 0x1F0) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5e70 | 5e70 - CAN-Botschaft/DSC-Fehler: Botschaft ASC3 (ID 0x1F3) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5e74 | 5e74 - CAN-Botschaft/DSC-Fehler: Botschaft Yaw_R (ID 0xCA) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5e76 | 5e76 - CAN-Botschaft/DSC-Fehler: Botschaft ASC4 (ID 0x1F8) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5e77 | 5e77 - CAN-Botschaft/DSC-Fehler: Botschaft DSC1 (ID 0x190) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5e61 | 5E61 - Querbeschleunigungssensor:  - Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5e8e | 5e8e - Querbeschleunigungssensor:  - Messbereich Querbeschleunigungssensor. |
| 0x5e90 | 5e90 - Querbeschleunigungssensor:  - Langzeit-Offset ueberschreitet Limit. |
| 0x5e91 | 5e91 - Querbeschleunigungssensor:  - Wert waehrend Stillstand zu gross. |
| 0x5e92 | 5e92 - Querbeschleunigungssensor:  - Plausibilitaetsfehler, obwohl Modellgueltigkeit gegeben. |
| 0x5e93 | 5e93 - Querbeschleunigungssensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modellgueltigkeit nicht mehr vorhanden). |
| 0x5e95 | 5e95 - Querbeschleunigungssensor:  - Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5e96 | 5e96 - Querbeschleunigungssensor:  - Plattform-Software (PSW) - Fehlerverdacht. |
| 0x5e97 | 5e97 - Querbeschleunigungssensor:  - Controller Release System (CRS)- Fehlerverdacht bei Messbereich. |
| 0x5f07 | 5f07 - Querbeschleunigungssensor: DRS Typ MM 1.1 Interner Querbeschleunigungs-Sensorwert ausserhalb gueltigem Bereich. |
| 0x5f08 | 5f08 - Querbeschleunigungssensor: DRS Typ MM 1.1 interner Querbeschleunigungs-Selbsttest fehlgeschlagen. |
| 0xD35B | D35B - CAN-Botschaft/DRS-Fehler: Botschaft YAW_A (ID 0xCB) fehlt (RCV) (von DSC-ECU empfangen). |
| 0x5e9a | 5e9a - Drehratensensor:  - Vorzeichen-Fehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e9b | 5e9b - Drehratensensor:  - Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5e9c | 5e9c - Drehratensensor:  - Plausibilitaetsfehler in Bezug zu Lenkwinkelsensor. |
| 0x5e9d | 5e9d - Drehratensensor:  - Messbereich DRS. |
| 0x5e9f | 5e9f - Drehratensensor:  - Offset ueberschreitet Limit waehrend Stillstand. |
| 0x5ea0 | 5ea0 - Drehratensensor:  - Signalgradient DRS. |
| 0x5ea1 | 5ea1 - Drehratensensor:  - Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5ea2 | 5ea2 - Drehratensensor:  - Offset ueberschreitet Limit waehrend schneller Kompensation. |
| 0x5ea3 | 5ea3 - Drehratensensor:  - Empfindlichkeit ueberschreitet Limit. |
| 0x5ea4 | 5ea4 - Drehratensensor:  - Offset ueberschreitet Limit waehrend langsamer Kompensation. |
| 0x5ea5 | 5ea5 - Drehratensensor:  - Plausibilitaetsfehler, obwohl Modellgueltigkeit gegeben. |
| 0x5ea6 | 5ea6 - Drehratensensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modellgueltigkeit nicht mehr vorhanden). |
| 0x5ea8 | 5ea8 - Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht bei Messbereich DRS. |
| 0x5ea9 | 5ea9 - Drehratensensor:  - Controller Release System (CRS) - Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5eaa | 5eaa - Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht DRS bei Signalgradient. |
| 0x5eab | 5eab - Drehratensensor:  - Controller Release System (CRS) - Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5eac | 5eac - Drehratensensor:  - Plattform-Software (PSW) - Fehlerverdacht DRS. |
| 0x5eae | 5eae - Drehratensensor:  - IDB - ID ungueltig. |
| 0x5f09 | 5f09 - Drehratensensor: DRS Typ MM 1.1 Checksummen der CAN-Botschaften falsch. |
| 0x5f0a | 5f0a - Drehratensensor: DRS Typ MM 1.1 Allgemeiner DRS-Fehler. |
| 0x5f0b | 5f0b - Drehratensensor: DRS Typ MM 1.1 interner DRS-Wert ausserhalb gueltigem Bereich. |
| 0x5f0c | 5f0c - Drehratensensor: DRS Typ MM 1.1 interner DRS-Referenzwert ausserhalb gueltigem Bereich. |
| 0x5f0d | 5f0d - Drehratensensor: DRS Typ MM 1.1 DRS empfaengt CAN-Botschaft zu frueh. |
| 0x5f0f | 5f0f - Drehratensensor: DRS Typ MM 1.1 Spannungsversorgung zu hoch. |
| 0x5f10 | 5f10 - Drehratensensor: DRS Typ MM 1.1 Sensor in Initialisierung. |
| 0x5f58 | 5f58 - Drehratensensor:  - Controller Release System (CRS) - Fehler bei beabsichtigter Signalstoerung (Dynamic Bite). |
| 0x5f59 | 5f59 - Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht Yrs bei Signalgradient. |
| 0x5ee2 | 5ee2 - Drucksensor: Plausibilitaet Drucksensor_Signalleitungen- DS5 :DSLine+DSLine2 = 5Volt. |
| 0x5ee4 | 5ee4 - Drucksensor: Drucksensor-Spannungsversorgung Fehler. |
| 0x5ee5 | 5ee5 - Drucksensor:  - Leitungsfehler. |
| 0x5ee6 | 5ee6 - Drucksensor:  - Leitungsfehler: Signal invertiert. |
| 0x5ee7 | 5ee7 - Drucksensor:  - Fehler beiPower Up Selbsttest (POS). |
| 0x5eed | 5eed - Drucksensor:  - Drucksensor-Offset ungueltig. |
| 0xD357 | D357 - CAN-Botschaft/LWS-Fehler: Botschaft LWS1 (ID 0x1F5) fehlt (RCV) (von DSC-ECU empfangen). |
| 0x5eb0 | 5eb0 - Lenkwinkelsensor: interner Fehler : Signal ungueltig. |
| 0x5eb1 | 5eb1 - Lenkwinkelsensor: LWS - Signal relativ. Lenkrad-Mittenstellung unbekannt. Lernquadrant. |
| 0x5eb2 | 5eb2 - Lenkwinkelsensor: LWS - nicht Initialisiert, (empfangene id Null). |
| 0x5eb3 | 5eb3 - Lenkwinkelsensor: LWS - Empfangene id ungleich letztem DSC-LWS-Abgleich. |
| 0x5ebb | 5ebb - Lenkwinkelsensor:  - Signalfehler- Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5ebd | 5ebd - Lenkwinkelsensor:  - Signal verbleibt auf konstanten Wert. |
| 0x5ebe | 5ebe - Lenkwinkelsensor:  - Messbereich LWS. |
| 0x5ebf | 5ebf - Lenkwinkelsensor:  - Signalgradient LWS. |
| 0x5ec0 | 5ec0 - Lenkwinkelsensor:  - Langzeit-Offset-Wert ueberschreitet Limit. |
| 0x5ec1 | 5ec1 - Lenkwinkelsensor:  - Plausibilitaetsfehler - in Bezug zu Drehratensensor. |
| 0x5ec5 | 5ec5 - Lenkwinkelsensor:  - CAN-Botschaftszaehler meldet Fehler. |
| 0x5ed4 | 5ed4 - Unplausible DSC-Regelung : Unplausibilitaet bei Gierratenregelung (FZR-Controlling). |
| 0x5ed5 | 5ed5 - Unplausible DSC-Regelung : Notbremsfunktion ausgeloest (wegen unplausible Regelung: Blockieren der Raeder wird moeglich gemacht). |
| 0x5ed6 | 5ed6 - Infoeintrag : Langzeitabgleich: LWS-, DRS- und AY-Sensor-Langzeitabgleiche deaktiviert. |
| 0x5eb7 | 5eb7 - Variantencodierung: ungueltige Variantencodierung des Luffeder-Steuergeraetes. |
| 0x5eb8 | 5eb8 - Variantencodierung: Variante mit manuellem Getriebe empfaengt CAN-Botschaft von Getriebesteuergeraet - Fehler. |
| 0x5eb9 | 5eb9 - Variantencodierung: MD-Norm_Wert nicht erlaubt fuer ausgewaehlte Variante. |
| 0x5eda | 5eda - Variantencodierung: Codierungswert in EEPROM nicht zulaessig. |
| 0x5edb | 5edb - Variantencodierung: Codierungswert ausserhalb Wertebereich. |
| 0x5edc | 5edc - Variantencodierung: Codierungswert nicht freigegeben in diesem Projekt. |
| 0x5f18 | 5f18 - Variantencodierung: EEPROM Konfiguration FZR: Anhaenger-Schlinger-Logik (Tol)_Wert in EEPROM ungueltig |
| 0x5f2c | 5f2c - EEPROM Inhalt nicht gueltig. |
| 0x5f1e | 5f1e - Variantencodierung: Infoeintrag : Anhaenger-Schlinger-Logik ueber EEPROM deaktiviert. |
| 0x5ef9 | 5ef9 - DSC-Software: ECU-intern : Timeout in Software-Startup-Phase. |
| 0x5efa | 5efa - DSC-Software: ECU-intern : asynchroner Rechenzyklus (Task)-Counter in Software. |
| 0x5f1a | 5f1a - Infoeintrag: CUS: Fahrleistungsreduzierung durch DSC-Befehl aktiv. |
| 0x5f1b | 5f1b - Infoeintrag: CUS: Fahrleistungsreduzierung durch DSC-Befehl abgeschaltet. |
| 0x5f1c | 5f1c - Infoeintrag: CUS: Aktiver Bremseneingriff waehrend ueberhitzten Bremsscheiben. |
| 0xD35C | D35C - CAN-Botschaft/VG-Fehler: Verteilergetriebe - Botschaft DXC1 (ID 0x192) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD35f | D35f - CAN-Botschaft/VG-Fehler: Botschaft DXC3 (ID 0x600)  fehlt (RCV) (von DSC-ECU empfangen). |
| 0x5f15 | 5f15 - Infoeintrag: Verteilergetriebe-ECU-Fehler: VG-Kupplung ueber Diagnose geoeffnet - Heckantrieb ! |
| 0x5de7 | 5de7 - Verteilergetriebe-ECU: Funktionspruefung nicht Ok. |
| 0x5dec | 5dec - Verteilergetriebe-ECU: Kupplung voruebergehend (temporaer) stillgelegt. Heckantrieb! Zu hohe Belastung des Verteilergetriebes erkannt. Abkühlen lassen. VG-SG macht keinen Fehlereintrag - Ein Raddrehzahlfühler defekt? |
| 0x5f39 | 5f39 - Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplungsposition unbekannt. |
| 0x5f3a | 5f3a - Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplung ist in geoeffneter Position - Heckantrieb! |
| 0x5f3d | 5f3d - Verteilergetriebe-ECU: VG-Kupplung setzt Momentenvorgabe nicht um : Allradverlust ! |
| 0x5f3e | 5f3e - Verteilergetriebe-ECU: Botschaft DXC3 (ID 0x600): Signal_Lamelle sendet Fehlercode. |
| 0x5f3f | 5f3f - Verteilergetriebe-ECU: Botschaft DXC3 (ID 0x600): Signal_Kette sendet Fehlercode. |
| 0x5de9 | 5de9 - Infoeintrag: Verteilergetriebe-ECU: Unkomfortable VG-Kupplungsregelung. |
| 0x5dea | 5dea - Infoeintrag: Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen Reibarbeit im VG. |
| 0x5f3b | 5f3b - Infoeintrag: Verteilergetriebe-ECU: VG-Kupplung: Einbussen Stellgenauigkeit. Unkomfortable Regelung. |
| 0x5dec | 5dec - Verteilergetriebe-ECU: Kupplung voruebergehend (temporaer) stillgelegt. Heckantrieb! Zu hohe Belastung des Verteilergetriebes erkannt. Abkühlen lassen. VG-SG macht keinen Fehlereintrag - Ein Raddrehzahlfühler defekt? |
| 0x5f3c | 5f3c - Infoeintrag: Verteilergetriebe-ECU: VG-Kupplung setzt Momentenvorgabe nicht zufriedenstellend um. |
| 0x5f41 | 5f41 - Infoeintrag: Verteilergetriebe-ECU: DSC-VG-Notlauf aktiv (VG uebernimmt Kupplungsregelung). |
| 0xD354 | D354 - CAN-Botschaft/DME-Fehler: Motronic - Botschaft DME1 (ID 0x316) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD355 | D355 - CAN-Botschaft/DME-Fehler: Motronic - Botschaft DME2 (ID 0x329) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD356 | D356 - CAN-Botschaft/DME-Fehler: Motronic - Botschaft DME4 (ID 0x545) fehlt (RCV) (von DSC-ECU empfangen). |
| 0x5f16 | 5f16 - Motronic-Fehler: Q_ASC Timeout aufgetreten. |
| 0x5f1d | 5f1d - Motronic-Fehler: DME Momenteingriff nicht moeglich (STAT_MD_E=3). |
| 0x5f21 | 5f21 - Motronic-Fehler: Fehler im Motordrehzahl-Signal (CAN-Botschaft DME1). |
| 0x5f22 | 5f22 - Motronic-Fehler: MotPedalPos sendet Fehlerkennzeichnung FFh (CAN-Botschaft DME2). |
| 0x5f23 | 5f23 - Motronic-Fehler: Tempomatanforderung im HDC kann nicht gestellt werden. |
| 0x5f24 | 5f24 - Motronic-Fehler: MdNorm-Signal ungueltig (=0) (CAN-Botschaft DME2, ID 0x329). |
| 0xD358 | D358 - CAN-Botschaft/EGS-Fehler: Getriebe - Botschaft EGS1 (ID 0x43F) fehlt (RCV) (von DSC-ECU empfangen). |
| 0x5f42 | 5f42 - EGS-Fehler: Getriebe im Notlaufmodus. |
| 0x5f43 | 5f43 - EGS-Fehler: Getriebe Abbtriebsdrehzahl sendet Fehlerkennzeichnung. |
| 0xD35e | D35e - CAN-Botschaft/EHC-Fehler: Luftfederung - Botschaft EHC1 (ID 0x5DC) fehlt (RCV) (von DSC-ECU empfangen). |
| 0x5dd7 | 5dd7 - EHC-Fehler: Luftfederung - Hoehenstaende ungueltig. |
| 0x5f19 | 5f19 - Allgemeiner Ventil-Fehler: Ventil-Ueberhitzung ! |
| 0x5f12 | 5f12 - Codierungs-Fehler: Eeprom Konfiguration :ACB: Hydraul-Brems-Assistent_Wert in EEPROM ungueltig. |
| 0x5f11 | 5f11 - Codierungs-Fehler: Eeprom Konfiguration :ACB: Hill-Descent-Control_Wert in EEPROM ungueltig. |
| 0xD359 | D359 - CAN-Botschaft/Kombi-Fehler: Botschaft Instrumentkombi INSTR2 (ID 0x613) fehlt (RCV) (von DSC-SG empfangen). |
| 0xD35A | D35A - CAN-Botschaft/Kombi-Fehler: Botschaft Instrumentkombi INSTR3 (ID 0x615) fehlt (RCV) (von DSC-SG empfangen). |
| 0x5f5a | 5f5a - CAN-Botschaft/Kombi-Fehler: Instr3, ID 0x615: Umgebungstemperatur sendet Fehlerkennzeichnung. |
| 0x5f5b | 5f5b - CAN-Botschaft/Kombi-Fehler: Instr2, ID 0x613: Km_Stand sendet Fehlerkennzeichnung. |
| 0x5f5c | 5f5c - CAN-Botschaft/Kombi-Fehler: Instr3, ID 0x615: Anhaenger-Schlinger-Logik (TOL) wegen fehlender CAN-Botschaft deaktiviert. |
| 0x5deb | 5deb - Infoeintrag : Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen zu hoher Reifenumfangstoleranz. |
| 0x60ac | 60ac - RPA-Fehler: Reifenpannenanzeige: Codierdaten unplausibel. |
| 0x60ad | 60ad - RPA-Fehler: Reifenpannenanzeige: Standardisierungsdaten unplausibel. |
| 0x60ae | 60ae - RPA-Fehler: Reifenpannenanzeige: FASTA_Daten unplausibel. |
| 0x60af | 60af - RPA-Fehler: Reifenpannenanzeige: RPA inaktiv, Hoehenstands_Differenz der Vorderachs_Luftfeder ist zu gross |
| 0x60b0 | 60b0 - RPA-Fehler: Reifenpannenanzeige: RPA inaktiv, Hoehenstands_Differenz der Hinterachs_Luftfeder ist zu gross |
| 0xFFFF | unbekannter Fehlerort |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | DIGITAL | - | - |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 0.05625 | 1 | 0 |
| 0x02 | ACB | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x03 | HBA | 0/1 | - | 0x02 | - | 1 | 1 | 0 |
| 0x04 | ECD | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x05 | HDC | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x06 | DSC | 0/1 | - | 0x10 | - | 1 | 1 | 0 |
| 0x07 | ABS | 0/1 | - | 0x20 | - | 1 | 1 | 0 |
| 0x08 | BLS | 0/1 | - | 0x40 | - | 1 | 1 | 0 |
| 0x09 | ASC | 0/1 | - | 0x80 | - | 1 | 1 | 0 |

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
| ACC | 0x98 | 0xFF | 0xFF |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |

### STEUERN_I_O_EIN

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0xFF | 0xFF |
| ACC | 0x98 | 0xFF | 0xFF |
| EVVL | 0x28 | 0x60 | 0x01 |
| AVVL | 0x2A | 0x60 | 0x02 |
| EVVR | 0x28 | 0x60 | 0x04 |
| AVVR | 0x2A | 0x60 | 0x08 |
| EVHL | 0x28 | 0x60 | 0x10 |
| AVHL | 0x2A | 0x60 | 0x20 |
| EVHR | 0x28 | 0x60 | 0x40 |
| AVHR | 0x2A | 0x60 | 0x80 |
| USV1 | 0x2C | 0x32 | 0x01 |
| USV2 | 0x2C | 0x32 | 0x02 |
| VLV1 | 0x2E | 0x60 | 0x04 |
| VLV2 | 0x2E | 0x60 | 0x08 |
| 40VLV1 | 0x2E | 0x28 | 0x04 |
| 40VLV2 | 0x2E | 0x28 | 0x08 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |
| XYZ | 0x00 | 0x00 | 0x00 |

### STEUERN_I_O_AUS

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0x00 | 0x00 |
| ACC | 0x98 | 0x00 | 0x00 |
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
