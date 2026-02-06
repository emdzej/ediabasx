# scsl.prg

## General

|  |  |
| --- | --- |
| File | scsl.prg |
| Type | PRG |
| Jobs | 64 |
| Tables | 19 |
| Origin | BMW EE-211 Robert Schmidt |
| Revision | 0.51 |
| Author | BMW EE-211 Robert Schmidt |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Satellit C-Saeule links |  |  |
| ORIGIN | string | BMW EE-211 Robert Schmidt |  |  |
| REVISION | string | 0.51 |  |  |
| AUTHOR | string | BMW EE-211 Robert Schmidt |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.14 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

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
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

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

### PROGRAMM_REFERENZ_BACKUP_LESEN

Auslesen des Backups der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier $2500 ProgrammReferenzBackup Modus  : Default

_No arguments._

### FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit und Resetzeit KWP2000: $22   ReadDataByCommonIdentifier $2501 Zeiten Modus  : Default

_No arguments._

### HARDWARE_REFERENZ_LESEN

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier $2502 HardwareReferenz Modus  : Default

_No arguments._

### PROGRAMM_REFERENZ_LESEN

Auslesen der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DatenReferenz Modus  : Default

_No arguments._

### FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen KWP2000: $22   ReadDataByCommonIdentifier $2506 MaximaleBlockLaenge Modus  : Default

_No arguments._

### AUTHENTISIERUNG_ZUFALLSZAHL_LESEN

Authentisierung Zufallszahl des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $07 RequestForAuthentication Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LEVEL | int |  |
| USER_ID | long | optional |

### AUTHENTISIERUNG_START

Authentisierung pruefen KWP2000: $31 StartRoutineByLocalIdentifier $08 ReleaseAuthentication Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL | binary | Schluessel |

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### FLASH_SIGNATUR_PRUEFEN

Flash Signatur pruefen KWP2000: $31 StartRoutineByLocalIdentifier $09 CheckSignature Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' 'Daten' |

### STEUERGERAETE_RESET

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN_ADRESSE

Vorbereitung fuer Flash schreiben Standard Flashjob KWP2000: $34 RequestDownload Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN

Flash Daten schreiben Standard Flashjob KWP2000: $36 TransferData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN_ENDE

Flashprogrammierung abschliessen Standard Flashjob KWP2000: $37 RequestTransferExit Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NR | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### AIF_SCHREIBEN

Schreiben des Anwender Informations Feldes Standard Flashjob KWP 2000: $3D WriteMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_FAHRGESTELL_NR | string | Fahrgestellnummer 7-stellig |
| AIF_PROGRAMMIER_DATUM | string | Datum der SG-Programmierung in der Form JJJJ.MM.TT |
| AIF_ZUSAMMENBAU_NR | string | BMW/Rover Zusammenbaunummer |
| AIF_DATENSATZ_NR | string | BMW/Rover Datensatznummer - Softwarenummer |
| AIF_BEHOERDEN_NR | string | BMW/Rover Behoerdennummer |
| AIF_HAENDLER_NR | string | Haendlernummer |
| AIF_TESTER_NR | string | Tester Seriennummer |
| AIF_KM_STAND | long | km-Stand bei der Programmierung |
| AIF_PROGRAMM_STAND | string | Programmstandsnummer |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden KWP2000: $20 StopDiagnosticSession Modus  : Default

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory oder alternativ KWP2000: $18 ReadDiagnosticTroubleCodesByStatus $04 requestetIdentifiedShadowMemoryDTCAndStatus

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### AUSGABE_HISTOGRAMM_LI_ODER_X

Ausgabe des Histogramms fuer x oder delta-V links KWP2000: $31 Steuergeraetespezifische Routine starten $A0 Ausgabe des Histogramms fuer x oder delta-V links Modus  : Default

_No arguments._

### AUSGABE_HISTOGRAMM_RE_ODER_Y

Ausgabe des Histogramms fuer y oder delta-V rechts KWP2000: $31 Steuergeraetespezifische Routine starten $A1 Ausgabe des Histogramms fuer y oder delta-V rechts Modus  : Default

_No arguments._

### LOESCHEN_HISTOGRAMM_LI_ODER_X

Loeschen des Histogramms fuer x oder delta-V links KWP2000: $31 Steuergeraetespezifische Routine starten $A2 Loeschen des Histogramms fuer x oder delta-V links Modus  : Default

_No arguments._

### LOESCHEN_HISTOGRAMM_RE_ODER_Y

Loeschen des Histogramms fuer y oder delta-V rechts KWP2000: $31 Steuergeraetespezifische Routine starten $A3 Ausgabe des Histogramms fuer y oder delta-V rechts Modus  : Default

_No arguments._

### STATUS_ZUENDKREISMODUS_SETZEN

Statusvorgabe Zuendkreismodus setzen KWP2000: $31 Steuergeraetespezifische Routine starten $2B Statusvorgabe Zuendkreismodus setzen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MODUS_NR | int | Modus-Nummer $00-$0F |
| ZUENDKREIS_NR | int | Zuendkreis-Nummer Statusvorgabe fuer Zuendkreis-Nummer x wenn Bit x=1 |

### STATUS_ZUENDKREISTESTABLAUF_STARTEN

Statusvorgabe Zuendkreis-Testablauf starten KWP2000: $31 Steuergeraetespezifische Routine starten $2C Statusvorgabe Zuendkreis-Testsequenzen starten Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | int | TEST-Nummer ??? tbd |
| ZUENDKREIS_NR | int | Zuendkreis-Nummer Statusvorgabe fuer Zuendkreis-Nummer x wenn Bit x=1 |

### RECYCLING_ZUEPI

Der Job RECYCLING_ZUEPI veranlasst nach erfolgreichem setzen des ALARM-Pulses ueber Einspeisung an den dV- Sensoren am SIM und dem Uebertragen eines Fzg.individuellen Codes ein Zuenden noch vorhandener Zuendpillen durch das Steuergeraet. KWP2000: $31 Steuergeraetespezifische Routine starten $2D Recycling der Zuendpillen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| HI_FZG_INDIVID_CODIERUNG | int | Fahrzeugindividuelle Codierung High Byte |
| LO_FZG_INDIVID_CODIERUNG | int | Fahrzeugindividuelle Codierung Low Byte |
| ZUENDKREISNUMMER | int | Nummer des auszuloesenden Zuendkreises 1 bis 4 |

### STATUS_ZURUECKNEHMEN_STEUERGERAETESTATUS

Statusvorgaben zuruecknehmen KWP2000: $31 Steuergeraetespezifische Routine starten $20 Statusvorgaben zuruecknehmen $yz Status $yz zuruecknehmen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STATUS_ID | int | ID des zurueck zu nehmenden Status $00 = alle Stati zuruecknehmen |

### STATUS_KOMMUNIKATIONSTEST_SENDE_EMPFANG_ANSTOSSEN

Statusvorgabe: Kommunikationstest Sende Empfang anstossen KWP2000: $31 Steuergeraetespezifische Routine starten $27 Kommunikationstest Sende Empfang anstossen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATENBYTE_1 | int | Frei waehlbares Datenbyte 1 |
| DATENBYTE_2 | int | Frei waehlbares Datenbyte 2 |
| DATENBYTE_3 | int | Frei waehlbares Datenbyte 3 |
| DATENBYTE_4 | int | Frei waehlbares Datenbyte 4 |

### STATUS_SI_BUS_STATUS_LESEN_ANSTOSSEN

Statusvorgabe: SI-Bus-Status lesen anstossen KWP2000: $31 Steuergeraetespezifische Routine starten $29 SI-Bus-Status lesen anstossen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SI_BUS_ID | int | Zu lesende SI-Bus-ID |

### LAUFENDE_SG_NUMMER_SCHREIBEN

Laufende Steuergeraetenummer schreiben KWP2000: $2E SG spezifische Daten schreiben $00 Laufende Steuergeraetenummer schreiben $05 0x FF FF FF ist keine gueltige SG Nummer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| L_SG_NR_BYTE_1 | int | Laufende Steuergeraetenummer Byte 1 0x0 - 0xFF bzw. 0 - 255 |
| L_SG_NR_BYTE_2 | int | Laufende Steuergeraetenummer Byte 2 0x0 - 0xFF bzw. 0 - 255 |
| L_SG_NR_BYTE_3 | int | Laufende Steuergeraetenummer Byte 3 0x0 - 0xFF bzw. 0 - 255 |

### LAUFENDE_SG_NUMMER_LESEN

Laufende Steuergeraetenummer lesen KWP2000: $22 SG spezifische Daten lesen $00 Laufende Steuergeraetenummer lesen $05 0x FF FF FF ist keine gueltige SG Nummer Modus  : Default

_No arguments._

### SYSTEMZEIT_SCHREIBEN

Systemzeit schreiben KWP2000: $2E SG spezifische Daten schreiben $00 Systemzeit schreiben $02 0x FF FF FF FF FF ist keine gueltige Systemzeit Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SZ_BYTE_1 | int | Systemzeit Byte 1 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_2 | int | Systemzeit Byte 2 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_3 | int | Systemzeit Byte 3 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_4 | int | Systemzeit Byte 4 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_5 | int | Systemzeit Byte 5 0x0 - 0xFF bzw. 0 - 255 |

### SYSTEMZEIT_LESEN

Systemzeit lesen KWP2000: $22 SG spezifische Daten lesen $00 Systemzeit lesen $02 0x FF FF FF FF FF ist keine gueltige Systemzeit Modus  : Default

_No arguments._

### HERSTELLERDATEN_SCHREIBEN

Herstellerdaten schreiben KWP2000: $2E SG spezifische Daten schreiben $00 Herstellerdaten schreiben $04 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| HD_BYTE_1 | int | Herstellerdaten Byte 1 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_2 | int | Herstellerdaten Byte 2 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_3 | int | Herstellerdaten Byte 3 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_4 | int | Herstellerdaten Byte 4 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_5 | int | Herstellerdaten Byte 5 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_6 | int | Herstellerdaten Byte 6 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_7 | int | Herstellerdaten Byte 7 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_8 | int | Herstellerdaten Byte 8 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_9 | int | Herstellerdaten Byte 9 0x0 - 0xFF bzw. 0 - 255 |
| HD_BYTE_10 | int | Herstellerdaten Byte 10 0x0 - 0xFF bzw. 0 - 255 |

### HERSTELLERDATEN_LESEN

Herstellerdaten lesen KWP2000: $22 SG spezifische Daten lesen $00 Herstellerdaten lesen $04 Modus  : Default

_No arguments._

### STATUS_SELBSTTEST_BESCHLEUNIGUNGSSENSOR_X_RICHTUNG

Selbsttest Beschleunigungssensor x-Richtung anstossen KWP2000: $31 Steuergeraetespezifische Routine starten $21 Selbsttest Beschleunigungssensor x-Richtung anstossen Modus  : Default

_No arguments._

### STEUERGERAETE_STATUS_LESEN

Steuergeraete Status lesen KWP2000: $22 SG spezifische Daten lesen $98 Steuergeraete Status lesen $00 Modus  : Default

_No arguments._

## Tables

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
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
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
| ?8A? | ERROR_LARGE_UIF_FOUND |
| ?8B? | ERROR_SMALL_UIF_FOUND |
| ?8C? | ERROR_NO_FREE_UIF |
| ?8D? | ERROR_MAX_UIF |
| ?8E? | ERROR_LEVEL |
| ?8F? | ERROR_KEY |
| ?90? | ERROR_AUTHENTICATION |
| ?91? | ERROR_FLASH_SIGNATURE_METHOD |
| ?92? | ERROR_SIZE_UIF |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | BERU (DODUCO) |
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
| 0xFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 12300000 |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 1xxxxxxx | 11 | Fehlerklassifikation  t > 1min |
| x1xxxxxx | 21 | Fehlerklassifikation 1s < t < 1min |
| xx1xxxxx | 31 | Fehlerklassifikation 0 < t < 1s |
| xxxxxxxx | 0 | -- |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 12300000 |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 1xxxxxxx | 11 | Fehlerklassifikation  t > 1min |
| x1xxxxxx | 21 | Fehlerklassifikation 1s < t < 1min |
| xx1xxxxx | 31 | Fehlerklassifikation 0 < t < 1s |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | - | - |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Systemzeit Fehlerbeginn | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0x02 | Systemzeit Fehlerende | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0xXY | unbekannte UW | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Systemzeit Fehlerbeginn | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0x02 | Systemzeit Fehlerende | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0xXY | unbekannte UW | 1 | - | unsigned char | - | 1 | 1 | 0 |

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

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM |
| 0x07 | UIFM | User Info Field Memory |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Anlieferzustand |
| 0x01 | Normalbetrieb |
| 0x02 | nicht benutzt |
| 0x03 | nicht benutzt |
| 0x04 | nicht benutzt |
| 0x05 | nicht benutzt |
| 0x06 | nicht benutzt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Datenreferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vollstaendig |
| 0x10 | Reserviert fuer BMW |
| 0x80 | Reserviert fuer Zulieferer |
| 0xXY | unbekannter Programmierstatus |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9928 | Watchdog-Reset uP |
| 0x9929 | Clock-Monitor-Reset uP |
| 0x992A | Illegal Opcode uP |
| 0x992B | falsche Fahrgestellnummer |
| 0x992C | Systemzeitfehler |
| 0x992D | Timeout ID 01 |
| 0x992E | Timeout ID 02 |
| 0x992F | Timeout ID 03 |
| 0x9930 | Timeout ID 04 |
| 0x9931 | Timeout ID 05 |
| 0x9932 | Timeout ID 06 |
| 0x9933 | Timeout ID 07 |
| 0x9934 | Timeout ID 08 |
| 0x9935 | Timeout ID 09 |
| 0x9936 | Timeout ID 10 |
| 0x9937 | Timeout ID 32 |
| 0x9938 | Timeout ID 33 |
| 0x9939 | Timeout ID 34 |
| 0x993A | Timeout ID 35 |
| 0x993B | Timeout ID 36 |
| 0x993C | Timeout ID 96 |
| 0x993D | Timeout ID 127 |
| 0x993E | Timeout ID 172 |
| 0x993F | Timeout ID 175 |
| 0x9940 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9941 | Kurzschluss ZK1 nach Masse |
| 0x9942 | Kurzschluss ZK1 nach Plus |
| 0x9943 | Widerstand Zuendpille ZK1 zu klein |
| 0x9944 | Widerstand Zuendpille ZK1 zu gross |
| 0x9945 | Unterbrechung ZK1 |
| 0x9946 | Spannung ZK1 n. i. O. |
| 0x9947 | Zuendkondensator ZK1 n. i. O. |
| 0x9948 | Codierung / Konfiguration ZK1 unstimmig |
| 0x9949 | sonstiger Fehler ZK1 |
| 0x994A | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x994B | Kurzschluss ZK2 nach Masse |
| 0x994C | Kurzschluss ZK2 nach Plus |
| 0x994D | Widerstand Zuendpille ZK2 zu klein |
| 0x994E | Widerstand Zuendpille ZK2 zu gross |
| 0x994F | Unterbrechung ZK2 |
| 0x9950 | Spannung ZK2 n. i. O. |
| 0x9951 | Zuendkondensator ZK2 n. i. O. |
| 0x9952 | Codierung / Konfiguration ZK2 unstimmig |
| 0x9953 | sonstiger Fehler ZK2 |
| 0x9956 | Fehler im Alarm-Pfad |
| 0x9957 | Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9958 | Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x9959 | Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x995A | Statusfehler Beschleunigungssensor |
| 0x99E8 | Power-On-Reset uP |
| 0x99E9 | Diagnose S/E-Modul (Lichtleistung) |
| 0x99EA | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x99EB | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x99EC | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x99ED | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x99EE | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x99EF | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x???? | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9928 | Watchdog-Reset uP |
| 0x9929 | Clock-Monitor-Reset uP |
| 0x992A | Illegal Opcode uP |
| 0x992B | falsche Fahrgestellnummer |
| 0x992C | Systemzeitfehler |
| 0x992D | Timeout ID 01 |
| 0x992E | Timeout ID 02 |
| 0x992F | Timeout ID 03 |
| 0x9930 | Timeout ID 04 |
| 0x9931 | Timeout ID 05 |
| 0x9932 | Timeout ID 06 |
| 0x9933 | Timeout ID 07 |
| 0x9934 | Timeout ID 08 |
| 0x9935 | Timeout ID 09 |
| 0x9936 | Timeout ID 10 |
| 0x9937 | Timeout ID 32 |
| 0x9938 | Timeout ID 33 |
| 0x9939 | Timeout ID 34 |
| 0x993A | Timeout ID 35 |
| 0x993B | Timeout ID 36 |
| 0x993C | Timeout ID 96 |
| 0x993D | Timeout ID 127 |
| 0x993E | Timeout ID 172 |
| 0x993F | Timeout ID 175 |
| 0x9940 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9941 | Kurzschluss ZK1 nach Masse |
| 0x9942 | Kurzschluss ZK1 nach Plus |
| 0x9943 | Widerstand Zuendpille ZK1 zu klein |
| 0x9944 | Widerstand Zuendpille ZK1 zu gross |
| 0x9945 | Unterbrechung ZK1 |
| 0x9946 | Spannung ZK1 n. i. O. |
| 0x9947 | Zuendkondensator ZK1 n. i. O. |
| 0x9948 | Codierung / Konfiguration ZK1 unstimmig |
| 0x9949 | sonstiger Fehler ZK1 |
| 0x994A | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x994B | Kurzschluss ZK2 nach Masse |
| 0x994C | Kurzschluss ZK2 nach Plus |
| 0x994D | Widerstand Zuendpille ZK2 zu klein |
| 0x994E | Widerstand Zuendpille ZK2 zu gross |
| 0x994F | Unterbrechung ZK2 |
| 0x9950 | Spannung ZK2 n. i. O. |
| 0x9951 | Zuendkondensator ZK2 n. i. O. |
| 0x9952 | Codierung / Konfiguration ZK2 unstimmig |
| 0x9953 | sonstiger Fehler ZK2 |
| 0x9956 | Fehler im Alarm-Pfad |
| 0x9957 | Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9958 | Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x9959 | Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x995A | Statusfehler Beschleunigungssensor |
| 0x99E8 | Power-On-Reset uP |
| 0x99E9 | Diagnose S/E-Modul (Lichtleistung) |
| 0x99EA | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x99EB | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x99EC | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x99ED | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x99EE | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x99EF | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x???? | unbekannter Fehlerort |
