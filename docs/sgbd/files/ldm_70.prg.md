# ldm_70.prg

## General

|  |  |
| --- | --- |
| File | ldm_70.prg |
| Type | PRG |
| Jobs | 69 |
| Tables | 35 |
| Origin | Continental EF Schröder |
| Revision | 2.001 |
| Author | ContiTemic SegmentChassisElectronics Apelt |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Längsdynamikmanager E70 |  |  |
| ORIGIN | string | Continental EF Schröder |  |  |
| REVISION | string | 2.001 |  |  |
| AUTHOR | string | ContiTemic SegmentChassisElectronics Apelt |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.50 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers KWP2000: $85 ControlDTCSetting Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT |
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

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LESEN_DETAIL

Historypeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2101 - $21FF HistoryMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Historycode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

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

### HARDWARE_REFERENZ_LESEN

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier $2502 HWREF oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DREF Modus  : Default

_No arguments._

### FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit, Authentisierberechnungszeit und Resetzeit KWP2000: $22   ReadDataByCommonIdentifier $2501 Zeiten Modus  : Default

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
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Authentisierungszeit in Sekunden Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Schluesseldaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### FLASH_SIGNATUR_PRUEFEN

Flash Signatur pruefen KWP2000: $31 StartRoutineByLocalIdentifier $09 CheckSignature Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' 'Daten' |
| SIGNATURTESTZEIT | int | Zeit in Sekunden |

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden (Byteparameter 1) Byte 5,6            : Loeschzeit in Sekunden (WordParameter 1 (low/high)) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

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
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### AIF_SCHREIBEN

Schreiben des Anwender Informations Feldes Standard Flashjob KWP 2000: $3D WriteMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_FG_NR | string | Fahrgestellnummer 7-stellig oder 17-stellig |
| AIF_DATUM | string | Datum der SG-Programmierung in der Form TT.MM.JJJJ oder TTMMJJ |
| AIF_ZB_NR | string | BMW/Rover Zusammenbaunummer |
| AIF_SW_NR | string | BMW/Rover Datensatznummer - Softwarenummer |
| AIF_BEHOERDEN_NR | string | BMW/Rover Behoerdennummer |
| AIF_HAENDLER_NR | string | Haendlernummer |
| AIF_SERIEN_NR | string | Tester Seriennummer |
| AIF_KM | long | km-Stand bei der Programmierung |
| AIF_PROG_NR | string | Programmstandsnummer |

### STATUS_BEDIENUNG_ACC

Auslesen der Botschaft Bedienung_Tempomat/ACC Signale beider Prozessoren KWP 2000: $21 ReadDataByLocalIdentifier $50 status_bedienung_acc

_No arguments._

### STATUS_HL_DIAGNOSE

Auslesen der HL-Diagnose KWP 2000: $21 ReadDataByLocalIdentifier $60 status_hl_diagnose

_No arguments._

### STEUERN_HL_DIAGNOSE

Vorgeben der HL-Diagnose KWP 2000: $3B WriteDataByLocalIdentifier $60 steuern_hl_diagnose

| Name | Type | Description |
| --- | --- | --- |
| DIAG_DATA_1 | char | Diagnosedaten für die Highlevel-SW |
| DIAG_DATA_2 | char | Diagnosedaten für die Highlevel-SW |
| DIAG_DATA_3 | char | Diagnosedaten für die Highlevel-SW |
| DIAG_DATA_4 | char | Diagnosedaten für die Highlevel-SW |

### STATUS_COMPILER_MPC_URBOOT

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des MPC-Urbootloader KWP 2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_COMPILER_MPC_LOWLEVEL_SW

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung der MPC LL-SW KWP 2000: $21 ReadDataByLocalIdentifier $A1 status_compiler_mpc_lowlevel_sw

_No arguments._

### STATUS_COMPILER_MPC_HIGHLEVEL_SW

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung der MPC HL-SW KWP 2000: $21 ReadDataByLocalIdentifier $A2 status_compiler_mpc_highlevel_sw

_No arguments._

### STATUS_COMPILER_MPC_DAF

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des DAF KWP 2000: $21 ReadDataByLocalIdentifier $A3 status_compiler_mpc_daf

_No arguments._

### STATUS_COMPILER_STAR_URBOOT

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des Star-Urbootloader KWP 2000: $21 ReadDataByLocalIdentifier $A5 status_compiler_star_urboot

_No arguments._

### STATUS_COMPILER_STAR_BOOT

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des Star-Bootloader KWP 2000: $21 ReadDataByLocalIdentifier $A6 status_compiler_star_boot

_No arguments._

### STATUS_COMPILER_STAR_LOWLEVEL_SW

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung der Star LL-SW KWP 2000: $21 ReadDataByLocalIdentifier $A7 status_compiler_star_lowlevel_sw

_No arguments._

### STATUS_COMPILER_STAR_HIGHLEVEL_SW

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung der Star HL-SW KWP 2000: $21 ReadDataByLocalIdentifier $A8 status_compiler_star_highlevel_sw

_No arguments._

### STATUS_COMPILER_STAR_DAF

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des DAF KWP 2000: $21 ReadDataByLocalIdentifier $A9 status_compiler_star_daf

_No arguments._

### LERNDATEN_LESEN

Job um alle Lerndaten auszulesen KWP2000: $21 ReadDataByLocalIdentifier $14 Alle Lerndaten ausgeben

_No arguments._

### STATUS_AKTUELLE_DATEN

Auslesen der aktuellen Statistikdaten Signale beider Prozessoren KWP 2000: $21 ReadDataByLocalIdentifier $40 status_aktuelle_daten

_No arguments._

### STATUS_PROTOKOLLDATEN

Auslesen der Protokolldaten aus den Statistikdaten Signale beider Prozessoren KWP 2000: $21 ReadDataByLocalIdentifier $41 status_aktuelle_daten

_No arguments._

### STEUERN_RESET_DEJU_DATA_FUS

Rücksetzen der DEJU Daten der Fusion KWP 2000: $3B WriteDataByLocalIdentifier $60 steuern_hl_diagnose

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
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
| 0x93 | TPO Display Corp. |
| 0x94 | KÜSTER Automotive Control |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental Automotive |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls |
| 0x9A | Takata- Petri |
| 0x9B | Mitsubishi Electric B.V. (Melco) |
| 0x9C | Autokabel |
| 0x9D | GKN-Driveline |
| 0x9E | Zollner Elektronik AG |
| 0x9F | PEIKER acustics GmbH |
| 0xA0 | Bosal-Oris |
| 0xA1 | Cobasys |
| 0xA2 | Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | ADC Automotive Distance Control Systems GmbH |
| 0xA5 | Funkwerk Dabendorf GmbH |
| 0xA6 | Lame |
| 0xA7 | Magna/Closures |
| 0xA8 | Wanyu |
| 0xA9 | Thyssen Krupp Presta |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
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

### HARTTEXTE

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
| 0x62CC | 0x62CC - Steuergerätefehler |
| 0x62CD | 0x62CD - Codierdatenfehler |
| 0x62CE | 0x62CE - Überspannungfehler |
| 0x62CF | 0x62CF - Unterspannungsfehler |
| 0x62D1 | 0x62D1 - Sicherheitsabschaltung durch den Hauptrechner |
| 0x62D2 | 0x62D2 - Plausibilität  Fahrpedal getreten  |
| 0x62D3 | 0x62D3 - V_DSC und V_ANZ unplausibel |
| 0x62D4 | 0x62D4 - Abschaltung durch Motorsteuergerät |
| 0x62D5 | 0x62D5 - Stillstandsmanagement |
| 0x62D6 | 0x62D6 - Abschaltung durch Bremsensteuergerät |
| 0x62D8 | 0x62D8 - Abschaltung durch Kombi |
| 0x62DA | 0x62DA - Harte Abschaltung Antrieb |
| 0x62DB | 0x62DB - Harte Abschaltung Bremse |
| 0x62DC | 0x62DC - Weckleitungsfehler |
| 0x62DE | 0x62DE - Sicherheitsabschaltung PT-CAN |
| 0x62DF | 0x62DF - Steuergerät Aufstartfehler |
| 0x62E2 | 0x62E2 - NVC Modul Zustand |
| 0x62E6 | 0x62E6 - Zustand Fahrpedal Signale |
| 0x62E7 | 0x62E7 - Zustand Gierraten Signal |
| 0x63AC | 0x63AC - Plausibilität KOMBI Signal ungültig |
| 0x63AD | 0x63AD - Plausibilität Beschleunigungssensoren |
| 0x63AE | 0x63AE - Harte Abschaltung durch den Überwachungsrechner |
| 0x63AF | 0x63AF - Sicherheitsabschaltung durch den Überwachungsrechner |
| 0x63B0 | 0x63B0 - DAF nicht programmiert |
| 0x63B3 | 0x63B3 - Bremsmomentenabbau |
| 0x63B5 | 0x63B5 - Stillstandsmanagement |
| 0x63CE | 0x63CE - Kalibrierfehler |
| 0x63D0 | 0x63D0 - FRR Sensor SG Zustand (Hinweiseintrag) |
| 0x63D8 | 0x63D8 - Schnittstelle AHM |
| 0x63D9 | 0x63D9 - Schnittstelle ASE / ACSM / MRSZ |
| 0x63DA | 0x63DA - Schnittstelle CAS |
| 0x63DB | 0x63DB - Schnittstelle CIC_GW |
| 0x63DC | 0x63DC - Schnittstelle DDE / DME |
| 0x63DD | 0x63DD - Schnittstelle DSC |
| 0x63DE | 0x63DE - Schnittstelle EGS |
| 0x63DF | 0x63DF - Schnittstelle KOMBI |
| 0x63E0 | 0x63E0 - Schnittstelle LDM |
| 0x63E1 | 0x63E1 - Schnittstelle LM |
| 0x63E2 | 0x63E2 - Schnittstelle FRR |
| 0x63E6 | 0x63E6 - Schnittstelle SZL / LWS |
| 0x63E8 | 0x63E8 - Schnittstelle DSC - Radgeschwindigkeiten Signal ungültig |
| 0x63E9 | 0x63E9 - Schnittstelle DSC - Radgeschwindigkeiten Zustand ungültig |
| 0x63EA | 0x63EA - Schnittstelle EMF |
| 0x63EB | 0x63EB - Schnittstelle FRMFA |
| 0xCE47 | 0xCE47 - Bus Kommunikationsfehler PT-CAN |
| 0xCE4B | 0xCE4B - Bus Kommunikationsfehler SF-CAN |
| 0xCE4F | 0xCE4F - Botschaft Navigation GPS 2, ID 34Ch |
| 0xCE50 | 0xCE50 - Botschaft Navigation System Information, ID 34Eh |
| 0xCE51 | 0xCE51 - Botschaft Übereinstimmung Navigationsgraph, ID 348h |
| 0xCE52 | 0xCE52 - Botschaft Navigationsgraph, ID 278h |
| 0xCE53 | 0xCE53 - Botschaft Synchronisation Navigationsgraph, ID 27Ah |
| 0xCE55 | 0xCE55 - Botschaft Außentemperatur / Relativzeit, ID 310h |
| 0xCE56 | 0xCE56 - Botschaft Bedienung Lenkstock, ID 194h |
| 0xCE57 | 0xCE57 - Botschaft Blinken, ID 1F6h |
| 0xCE58 | 0xCE58 - Botschaft Drehmoment 1 PT-CAN, ID A8h |
| 0xCE59 | 0xCE59 - Botschaft Drehmoment 2, ID A9h |
| 0xCE5A | 0xCE5A - Botschaft Drehmoment 3 PT-CAN, ID AAh |
| 0xCE5C | 0xCE5C - Botschaft Geschwindigkeit PT-CAN, ID 1A0h |
| 0xCE5D | 0xCE5D - Botschaft Getriebedaten, ID BAh |
| 0xCE5E | 0xCE5E - Botschaft Kilometerstand / Reichweite, ID 330h |
| 0xCE5F | 0xCE5F - Botschaft Klemmenstatus, ID 130h |
| 0xCE60 | 0xCE60 - Botschaft Lenkradwinkel PT-CAN, ID C4h |
| 0xCE61 | 0xCE61 - Botschaft Anforderung Radmoment Antriebsstrang, ID BFh |
| 0xCE62 | 0xCE62 - Botschaft Raddrücke PT-CAN, ID 2B2h |
| 0xCE63 | 0xCE63 - Botschaft Radgeschwindigkeit PT-CAN, ID CEh |
| 0xCE64 | 0xCE64 - Botschaft Radmoment Antriebsstrang 1, ID B4h |
| 0xCE65 | 0xCE65 - Botschaft Radmoment Antriebsstrang 2, ID ACh |
| 0xCE66 | 0xCE66 - Botschaft Radmoment Bremse, ID  E1h |
| 0xCE67 | 0xCE67 - Botschaft Radtoleranzabgleich, ID  374h |
| 0xCE68 | 0xCE68 - Botschaft Sitzbelegung Gurtkontakte, ID 2F1h |
| 0xCE69 | 0xCE69 - Botschaft Beschleunigungsdaten, ID 2B3h |
| 0xCE6A | 0xCE6A - Botschaft Status Anhänger, ID 2E4h |
| 0xCE6B | 0xCE6B - Botschaft Status DSC PT-CAN, ID 19Eh |
| 0xCE6C | 0xCE6C - Botschaft Status Tuersensoren Abgesichert BN2000, ID 1E1h |
| 0xCE6E | 0xCE6E - Botschaft Anforderung Radmoment Bremse, ID D5h |
| 0xCE6F | 0xCE6F - Botschaft Sollmomentanforderung, ID BBh |
| 0xCE70 | 0xCE70 - Botschaft Status Kombi, ID 1B4h |
| 0xCE72 | 0xCE72 - Botschaft Status EMF PT-CAN, ID 201h |
| 0xCE73 | 0xCE73 - Botschaft Stellanforderung EMF, ID 1A7h |
| 0xCE76 | 0xCE76 - Botschaft Sensordaten Frontraumüberwachung, ID 70Fh |
| 0xCE77 | 0xCE77 - Botschaft Status FRR, ID 760h |
| 0xCE78 | 0xCE78 - Botschaft Objektdaten FRR, ID 740h-75Fh |
| 0xCE79 | 0xCE79 - Botschaft Daten Frontraumüberwachung, ID 719h |
| 0xCE80 | 0xCE80 - Botschaft Motordaten, ID 1D0h |
| 0xCE83 | 0xCE83 - Botschaft Status Fahrlicht, ID 314h |
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
| default | Umbed1 | Umbed2 | Umbed3 | 0x07 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fehlercode intern | Hex | - | unsigned char | - | - | 1 | - |
| 0x02 | Fehlerinfo intern | Hex | - | unsigned char | - | - | 1 | - |
| 0x03 | Klemme30 Spannung | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x05 | Antriebsanforderung | Nm | - | unsigned char | - | 20 | 1 | 0 |
| 0x06 | Bremsanforderung | Nm | - | unsigned char | - | 20 | 1 | 0 |
| 0x07 | Betriebszustand | Hex | high | unsigned int | - | - | - | - |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x62CC | 0x62CC - Steuergerätefehler |
| 0x62CD | 0x62CD - Codierdatenfehler |
| 0x62CE | 0x62CE - Überspannungfehler |
| 0x62CF | 0x62CF - Unterspannungsfehler |
| 0x62D1 | 0x62D1 - Sicherheitsabschaltung durch den Hauptrechner |
| 0x62D2 | 0x62D2 - Plausibilität  Fahrpedal getreten  |
| 0x62D3 | 0x62D3 - V_DSC und V_ANZ unplausibel |
| 0x62D4 | 0x62D4 - Abschaltung durch Motorsteuergerät |
| 0x62D5 | 0x62D5 - Stillstandsmanagement |
| 0x62D6 | 0x62D6 - Abschaltung durch Bremsensteuergerät |
| 0x62D8 | 0x62D8 - Abschaltung durch Kombi |
| 0x62DA | 0x62DA - Harte Abschaltung Antrieb |
| 0x62DB | 0x62DB - Harte Abschaltung Bremse |
| 0x62DC | 0x62DC - Weckleitungsfehler |
| 0x62DE | 0x62DE - Sicherheitsabschaltung PT-CAN |
| 0x62DF | 0x62DF - Steuergerät Aufstartfehler |
| 0x62E2 | 0x62E2 - NVC Modul Zustand |
| 0x62E6 | 0x62E6 - Zustand Fahrpedal Signale |
| 0x62E7 | 0x62E7 - Zustand Gierraten Signal |
| 0x63AC | 0x63AC - Plausibilität KOMBI Signal ungültig |
| 0x63AD | 0x63AD - Plausibilität Beschleunigungssensoren |
| 0x63AE | 0x63AE - Harte Abschaltung durch den Überwachungsrechner |
| 0x63AF | 0x63AF - Sicherheitsabschaltung durch den Überwachungsrechner |
| 0x63B0 | 0x63B0 - DAF nicht programmiert |
| 0x63B3 | 0x63B3 - Bremsmomentenabbau |
| 0x63B5 | 0x63B5 - Stillstandsmanagement |
| 0x63CE | 0x63CE - Kalibrierfehler |
| 0x63D0 | 0x63D0 - FRR Sensor SG Zustand (Hinweiseintrag) |
| 0x63D8 | 0x63D8 - Schnittstelle AHM |
| 0x63D9 | 0x63D9 - Schnittstelle ASE / ACSM / MRSZ |
| 0x63DA | 0x63DA - Schnittstelle CAS |
| 0x63DB | 0x63DB - Schnittstelle CIC_GW |
| 0x63DC | 0x63DC - Schnittstelle DDE / DME |
| 0x63DD | 0x63DD - Schnittstelle DSC |
| 0x63DE | 0x63DE - Schnittstelle EGS |
| 0x63DF | 0x63DF - Schnittstelle KOMBI |
| 0x63E0 | 0x63E0 - Schnittstelle LDM |
| 0x63E1 | 0x63E1 - Schnittstelle LM |
| 0x63E2 | 0x63E2 - Schnittstelle FRR |
| 0x63E6 | 0x63E6 - Schnittstelle SZL / LWS |
| 0x63E8 | 0x63E8 - Schnittstelle DSC - Radgeschwindigkeiten Signal ungültig |
| 0x63E9 | 0x63E9 - Schnittstelle DSC - Radgeschwindigkeiten Zustand ungültig |
| 0x63EA | 0x63EA - Schnittstelle EMF |
| 0x63EB | 0x63EB - Schnittstelle FRMFA |
| 0xCE47 | 0xCE47 - Bus Kommunikationsfehler PT-CAN |
| 0xCE4B | 0xCE4B - Bus Kommunikationsfehler SF-CAN |
| 0xCE4F | 0xCE4F - Botschaft Navigation GPS 2, ID 34Ch |
| 0xCE50 | 0xCE50 - Botschaft Navigation System Information, ID 34Eh |
| 0xCE51 | 0xCE51 - Botschaft Übereinstimmung Navigationsgraph, ID 348h |
| 0xCE52 | 0xCE52 - Botschaft Navigationsgraph, ID 278h |
| 0xCE53 | 0xCE53 - Botschaft Synchronisation Navigationsgraph, ID 27Ah |
| 0xCE55 | 0xCE55 - Botschaft Außentemperatur / Relativzeit, ID 310h |
| 0xCE56 | 0xCE56 - Botschaft Bedienung Lenkstock, ID 194h |
| 0xCE57 | 0xCE57 - Botschaft Blinken, ID 1F6h |
| 0xCE58 | 0xCE58 - Botschaft Drehmoment 1 PT-CAN, ID A8h |
| 0xCE59 | 0xCE59 - Botschaft Drehmoment 2, ID A9h |
| 0xCE5A | 0xCE5A - Botschaft Drehmoment 3 PT-CAN, ID AAh |
| 0xCE5C | 0xCE5C - Botschaft Geschwindigkeit PT-CAN, ID 1A0h |
| 0xCE5D | 0xCE5D - Botschaft Getriebedaten, ID BAh |
| 0xCE5E | 0xCE5E - Botschaft Kilometerstand / Reichweite, ID 330h |
| 0xCE5F | 0xCE5F - Botschaft Klemmenstatus, ID 130h |
| 0xCE60 | 0xCE60 - Botschaft Lenkradwinkel PT-CAN, ID C4h |
| 0xCE61 | 0xCE61 - Botschaft Anforderung Radmoment Antriebsstrang, ID BFh |
| 0xCE62 | 0xCE62 - Botschaft Raddrücke PT-CAN, ID 2B2h |
| 0xCE63 | 0xCE63 - Botschaft Radgeschwindigkeit PT-CAN, ID CEh |
| 0xCE64 | 0xCE64 - Botschaft Radmoment Antriebsstrang 1, ID B4h |
| 0xCE65 | 0xCE65 - Botschaft Radmoment Antriebsstrang 2, ID ACh |
| 0xCE66 | 0xCE66 - Botschaft Radmoment Bremse, ID  E1h |
| 0xCE67 | 0xCE67 - Botschaft Radtoleranzabgleich, ID  374h |
| 0xCE68 | 0xCE68 - Botschaft Sitzbelegung Gurtkontakte, ID 2F1h |
| 0xCE69 | 0xCE69 - Botschaft Beschleunigungsdaten, ID 2B3h |
| 0xCE6A | 0xCE6A - Botschaft Status Anhänger, ID 2E4h |
| 0xCE6B | 0xCE6B - Botschaft Status DSC PT-CAN, ID 19Eh |
| 0xCE6C | 0xCE6C - Botschaft Status Tuersensoren Abgesichert BN2000, ID 1E1h |
| 0xCE6E | 0xCE6E - Botschaft Anforderung Radmoment Bremse, ID D5h |
| 0xCE6F | 0xCE6F - Botschaft Sollmomentanforderung, ID BBh |
| 0xCE70 | 0xCE70 - Botschaft Status Kombi, ID 1B4h |
| 0xCE72 | 0xCE72 - Botschaft Status EMF PT-CAN, ID 201h |
| 0xCE73 | 0xCE73 - Botschaft Stellanforderung EMF, ID 1A7h |
| 0xCE76 | 0xCE76 - Botschaft Sensordaten Frontraumüberwachung, ID 70Fh |
| 0xCE77 | 0xCE77 - Botschaft Status FRR, ID 760h |
| 0xCE78 | 0xCE78 - Botschaft Objektdaten FRR, ID 740h-75Fh |
| 0xCE79 | 0xCE79 - Botschaft Daten Frontraumüberwachung, ID 719h |
| 0xCE80 | 0xCE80 - Botschaft Motordaten, ID 1D0h |
| 0xCE83 | 0xCE83 - Botschaft Status Fahrlicht, ID 314h |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | Umbed1 | Umbed2 | Umbed3 | 0x07 |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fehlercode intern | Hex | - | unsigned char | - | - | 1 | - |
| 0x02 | Fehlerinfo intern | Hex | - | unsigned char | - | - | 1 | - |
| 0x03 | Klemme30 Spannung | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x05 | Antriebsanforderung | Nm | - | unsigned char | - | 20 | 1 | 0 |
| 0x06 | Bremsanforderung | Nm | - | unsigned char | - | 20 | 1 | 0 |
| 0x07 | Betriebszustand | Hex | high | unsigned int | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5000 | 0x5000 - Signalfehler (USI) |
| 0x5100 | 0x5100 - Harte Abschaltung durch Überwachungsrechner (Hinweiseintrag) |
| 0x5101 | 0x5101 - Sicherheitsabschaltung druch Überwachungsrechner (Hinweiseintrag) |
| 0x5110 | 0x5110 - Vorwarnung Antrieb |
| 0x5111 | 0x5111 - Vorwarnung Bremse |
| 0x5200 | 0x5200 - Zustand Fahrpedal Signale |
| 0x5210 | 0x5210 - Plausibilität KOMBI Signal ungültig |
| 0x5240 | 0x5240 - SG - SHUTDOWN Fehler |
| 0x5241 | 0x5241 - temporärer EEPROM Fehler |
| 0x5242 | 0x5242 - Falsche oder fehlerhafte Fahrgestellnummer |
| 0x5243 | 0x5243 - Synchronisation Slave (HR) fehlerhaft |
| 0x62CC | 0x62CC - Steuergerätefehler |
| 0x62CD | 0x62CD - Codierdatenfehler |
| 0x62CE | 0x62CE - Überspannungfehler |
| 0x62CF | 0x62CF - Unterspannungsfehler |
| 0x62D1 | 0x62D1 - Sicherheitsabschaltung durch den Hauptrechner |
| 0x62D2 | 0x62D2 - Plausibilität  Fahrpedal getreten  |
| 0x62D3 | 0x62D3 - V_DSC und V_ANZ unplausibel |
| 0x62D4 | 0x62D4 - Abschaltung durch Motorsteuergerät |
| 0x62D5 | 0x62D5 - Stillstandsmanagement |
| 0x62D6 | 0x62D6 - Abschaltung durch Bremsensteuergerät |
| 0x62D8 | 0x62D8 - Abschaltung durch Kombi |
| 0x62DA | 0x62DA - Harte Abschaltung Antrieb |
| 0x62DB | 0x62DB - Harte Abschaltung Bremse |
| 0x62DC | 0x62DC - Weckleitungsfehler |
| 0x62DE | 0x62DE - Sicherheitsabschaltung PT-CAN |
| 0x62DF | 0x62DF - Steuergerät Aufstartfehler |
| 0x62E2 | 0x62E2 - NVC Modul Zustand |
| 0x62E6 | 0x62E6 - Zustand Fahrpedal Signale |
| 0x62E7 | 0x62E7 - Zustand Gierraten Signal |
| 0x63AC | 0x63AC - Plausibilität KOMBI Signal ungültig |
| 0x63AD | 0x63AD - Plausibilität Beschleunigungssensoren |
| 0x63AE | 0x63AE - Harte Abschaltung durch den Überwachungsrechner |
| 0x63AF | 0x63AF - Sicherheitsabschaltung durch den Überwachungsrechner |
| 0x63B0 | 0x63B0 - DAF nicht programmiert |
| 0x63B3 | 0x63B3 - Bremsmomentenabbau |
| 0x63B5 | 0x63B5 - Stillstandsmanagement |
| 0x63CE | 0x63CE - Kalibrierfehler |
| 0x63D0 | 0x63D0 - FRR Sensor SG Zustand (Hinweiseintrag) |
| 0x63D8 | 0x63D8 - Schnittstelle AHM |
| 0x63D9 | 0x63D9 - Schnittstelle ASE / ACSM / MRSZ |
| 0x63DA | 0x63DA - Schnittstelle CAS |
| 0x63DB | 0x63DB - Schnittstelle CIC_GW |
| 0x63DC | 0x63DC - Schnittstelle DDE / DME |
| 0x63DD | 0x63DD - Schnittstelle DSC |
| 0x63DE | 0x63DE - Schnittstelle EGS |
| 0x63DF | 0x63DF - Schnittstelle KOMBI |
| 0x63E0 | 0x63E0 - Schnittstelle LDM |
| 0x63E1 | 0x63E1 - Schnittstelle LM |
| 0x63E2 | 0x63E2 - Schnittstelle FRR |
| 0x63E6 | 0x63E6 - Schnittstelle SZL / LWS |
| 0x63E8 | 0x63E8 - Schnittstelle DSC - Radgeschwindigkeiten Signal ungültig |
| 0x63E9 | 0x63E9 - Schnittstelle DSC - Radgeschwindigkeiten Zustand ungültig |
| 0x63EA | 0x63EA - Schnittstelle EMF |
| 0x63EB | 0x63EB - Schnittstelle FRMFA |
| 0x8001 | 0x8001 - Weckleitung dauerhaft EIN |
| 0x8021 | 0x8021 - HL Abschaltung HR |
| 0x8022 | 0x8022 - HL Abschaltung UER |
| 0x8030 | 0x8030 - Startup Handler HR |
| 0x8031 | 0x8031 - Startup Programmierstatus HR |
| 0x8032 | 0x8032 - Startup Verrieglungstestzeit HR |
| 0x8033 | 0x8033 - Startup Testzeit HR |
| 0x8034 | 0x8034 - Startup EEPROM HR |
| 0x8035 | 0x8035 - Startup UERCHECK HR |
| 0x8036 | 0x8036 - Startup IOPIN HR |
| 0x8037 | 0x8037 - Startup UERLOCK HR |
| 0x8038 | 0x8038 - Startup Handler UER |
| 0x8039 | 0x8039 - Startup Programmierstatus UER |
| 0x803A | 0x803A - Startup Verrieglungstest UER |
| 0x803B | 0x803B - Startup Verrieglungstestzeit UER |
| 0x803C | 0x803C - Startup Testzeit UER |
| 0x803D | 0x803D - Startup ADC UER |
| 0x803E | 0x803E - Startup HRLOCK UER |
| 0x803F | 0x803F - Startup HRCHK UER |
| 0x8041 | 0x8041 - SCI1 CHKSUM HR |
| 0x8042 | 0x8042 - SCI1 OVERRUN HR |
| 0x8043 | 0x8043 - SCI1 PARITY HR |
| 0x8044 | 0x8044 - SCI2 CHKSUM HR |
| 0x8045 | 0x8045 - SCI2 OVERRUN HR |
| 0x8046 | 0x8046 - SCI2 PARITY HR |
| 0x8048 | 0x8048 - SCI0 CHKSUM UER |
| 0x8049 | 0x8049 - SCI0 OVERRUN UER |
| 0x804A | 0x804A - SCI0 PARITY UER |
| 0x804B | 0x804B - SCI1 CHKSUM UER |
| 0x804C | 0x804C - SCI1 OVERRUN UER |
| 0x804D | 0x804D - SCI1 PARITY UER |
| 0x8054 | 0x8054 - Task System HR |
| 0x8055 | 0x8055 - Task Master Timeout |
| 0x8056 | 0x8056 - Task Master Task |
| 0x8057 | 0x8057 - Task TimingAll HR |
| 0x8058 | 0x8058 - Stack User HR |
| 0x8059 | 0x8059 - Stack OS HR |
| 0x805A | 0x805A - Task Anzahl 2ms HR |
| 0x805B | 0x805B - Task Anzahl 5ms HR |
| 0x805C | 0x805C - Task Anzahl 10ms HR |
| 0x805D | 0x805D - Task Anzahl Sensor HR |
| 0x805E | 0x805E - Task Anzahl Reglertask HR |
| 0x8060 | 0x8060 - intern HR |
| 0x8061 | 0x8061 - intern ROM HR |
| 0x8062 | 0x8062 - intern RAM HR |
| 0x8063 | 0x8063 - intern VoltageADC HR |
| 0x8064 | 0x8064 - intern VoltageVCC HR |
| 0x8065 | 0x8065 - intern Shutdown HR |
| 0x8066 | 0x8066 - intern CPU HR |
| 0x8067 | 0x8067 - intern Ablauf HR |
| 0x8071 | 0x8071 - Exception Reserved HR |
| 0x8072 | 0x8072 - Exception MachineCheck HR |
| 0x8073 | 0x8073 - Exception DataAccess HR |
| 0x8074 | 0x8074 - Exception InstrAccess HR |
| 0x8075 | 0x8075 - Exception Alignment HR |
| 0x8076 | 0x8076 - Exception Program HR |
| 0x8077 | 0x8077 - Exception FPunavailable HR |
| 0x8078 | 0x8078 - Exception SystemCall HR |
| 0x8079 | 0x8079 - Exception Trace HR |
| 0x807A | 0x807A - Exception FPassist HR |
| 0x807B | 0x807B - Exception PerfMonitor HR |
| 0x807C | 0x807C - Exception SWEmulation HR |
| 0x807D | 0x807D - Exception InstrProtection HR |
| 0x807E | 0x807E - Exception DataProtection HR |
| 0x807F | 0x807F - Exception ImplBreakpoint HR |
| 0x8080 | 0x8080 - Reset Extern HR |
| 0x8081 | 0x8081 - Reset LossLock HR |
| 0x8082 | 0x8082 - Reset COP HR |
| 0x8083 | 0x8083 - Reset Checkstop HR |
| 0x8084 | 0x8084 - Reset DebugHard HR |
| 0x8085 | 0x8085 - Reset DebugSoft HR |
| 0x8086 | 0x8086 - Reset JTAG HR |
| 0x8087 | 0x8087 - Reset ClockSwitch HR |
| 0x8088 | 0x8088 - Reset IllegalBitChange HR |
| 0x8094 | 0x8094 - Task System UER |
| 0x8095 | 0x8095 - Task Slave UER |
| 0x8096 | 0x8096 - Task Slave UER |
| 0x8097 | 0x8097 - Task TimingAll UER |
| 0x8098 | 0x8098 - Stack Stack5 UER |
| 0x8099 | 0x8099 - Stack Stack20 UER |
| 0x809A | 0x809A - Stack StackIRQ UER |
| 0x80A0 | 0x80A0 - intern UER |
| 0x80A1 | 0x80A1 - intern ROM UER |
| 0x80A2 | 0x80A2 - intern RAM UER |
| 0x80A3 | 0x80A3 - intern VoltageADC UER |
| 0x80A4 | 0x80A4 - intern VoltageVCC UER |
| 0x80A6 | 0x80A6 - intern EEPROM |
| 0x80A7 | 0x80A7 - intern CPU  UER |
| 0x80B1 | 0x80B1 - Reset Clock UER |
| 0x80B2 | 0x80B2 - Reset COP UER |
| 0x80B3 | 0x80B3 - Reset IntrTrap UER |
| 0x80B4 | 0x80B4 - Reset SWI UER |
| 0x80D0 | 0x80D0 - Ringbuf StatusEMF |
| 0x80D3 | 0x80D3 - Ringbuf StatusMSA |
| 0x80D8 | 0x80D8 - Ringbuf StatusKombi |
| 0x80DA | 0x80DA - Ringbuf Geschwindigkeit |
| 0x80DC | 0x80DC - Ringbuf BedienungTempomat |
| 0x80DD | 0x80DD - Ringbuf Klemmenstatus |
| 0x80DE | 0x80DE - Ringbuf RadmomBremse |
| 0x80E1 | 0x80E1 - Ringbuf Getriebedaten |
| 0x80E2 | 0x80E2 - Ringbuf RadmomPT1 |
| 0x80E3 | 0x80E3 - Ringbuf RadmomPT2 |
| 0x80E4 | 0x80E4 - Ringbuf Torque3 |
| 0x80E6 | 0x80E6 - Ringbuf Torque1 |
| 0x80E8 | 0x80E8 - Ringbuf StatusDSBN2000 |
| 0x80EC | 0x80EC - Ringbuf StellanfEMF |
| 0x80FC | 0x80FC - Startup Verrieglunstest Senden |
| 0x80FD | 0x80FD - Startup SelfClock UER |
| 0x8140 | 0x8140 - Systemauslastung HR 80 Prozent |
| 0x8141 | 0x8141 - Systemauslastung HR 95 Prozent |
| 0x8142 | 0x8142 - Tick HR ungleich 1us |
| 0x8143 | 0x8143 - Time Check HR Taskfehler |
| 0x8400 | 0x8400 - Unkritische Fehler |
| 0x8510 | 0x8510 - Fehler ext RAM Testmodul |
| 0x8541 | 0x8541 - Warning Stack User HR |
| 0x8542 | 0x8542 - Warning Stack OS HR |
| 0xCE47 | 0xCE47 - Bus Kommunikationsfehler PT-CAN |
| 0xCE4B | 0xCE4B - Bus Kommunikationsfehler SF-CAN |
| 0xCE4F | 0xCE4F - Botschaft Navigation GPS 2, ID 34Ch |
| 0xCE50 | 0xCE50 - Botschaft Navigation System Information, ID 34Eh |
| 0xCE51 | 0xCE51 - Botschaft Übereinstimmung Navigationsgraph, ID 348h |
| 0xCE52 | 0xCE52 - Botschaft Navigationsgraph, ID 278h |
| 0xCE53 | 0xCE53 - Botschaft Synchronisation Navigationsgraph, ID 27Ah |
| 0xCE55 | 0xCE55 - Botschaft Außentemperatur / Relativzeit, ID 310h |
| 0xCE56 | 0xCE56 - Botschaft Bedienung Lenkstock, ID 194h |
| 0xCE57 | 0xCE57 - Botschaft Blinken, ID 1F6h |
| 0xCE58 | 0xCE58 - Botschaft Drehmoment 1 PT-CAN, ID A8h |
| 0xCE59 | 0xCE59 - Botschaft Drehmoment 2, ID A9h |
| 0xCE5A | 0xCE5A - Botschaft Drehmoment 3 PT-CAN, ID AAh |
| 0xCE5C | 0xCE5C - Botschaft Geschwindigkeit PT-CAN, ID 1A0h |
| 0xCE5D | 0xCE5D - Botschaft Getriebedaten, ID BAh |
| 0xCE5E | 0xCE5E - Botschaft Kilometerstand / Reichweite, ID 330h |
| 0xCE5F | 0xCE5F - Botschaft Klemmenstatus, ID 130h |
| 0xCE60 | 0xCE60 - Botschaft Lenkradwinkel PT-CAN, ID C4h |
| 0xCE61 | 0xCE61 - Botschaft Anforderung Radmoment Antriebsstrang, ID BFh |
| 0xCE62 | 0xCE62 - Botschaft Raddrücke PT-CAN, ID 2B2h |
| 0xCE63 | 0xCE63 - Botschaft Radgeschwindigkeit PT-CAN, ID CEh |
| 0xCE64 | 0xCE64 - Botschaft Radmoment Antriebsstrang 1, ID B4h |
| 0xCE65 | 0xCE65 - Botschaft Radmoment Antriebsstrang 2, ID ACh |
| 0xCE66 | 0xCE66 - Botschaft Radmoment Bremse, ID  E1h |
| 0xCE67 | 0xCE67 - Botschaft Radtoleranzabgleich, ID  374h |
| 0xCE68 | 0xCE68 - Botschaft Sitzbelegung Gurtkontakte, ID 2F1h |
| 0xCE69 | 0xCE69 - Botschaft Beschleunigungsdaten, ID 2B3h |
| 0xCE6A | 0xCE6A - Botschaft Status Anhänger, ID 2E4h |
| 0xCE6B | 0xCE6B - Botschaft Status DSC PT-CAN, ID 19Eh |
| 0xCE6C | 0xCE6C - Botschaft Status Tuersensoren Abgesichert BN2000, ID 1E1h |
| 0xCE6E | 0xCE6E - Botschaft Anforderung Radmoment Bremse, ID D5h |
| 0xCE6F | 0xCE6F - Botschaft Sollmomentanforderung, ID BBh |
| 0xCE70 | 0xCE70 - Botschaft Status Kombi, ID 1B4h |
| 0xCE72 | 0xCE72 - Botschaft Status EMF PT-CAN, ID 201h |
| 0xCE73 | 0xCE73 - Botschaft Stellanforderung EMF, ID 1A7h |
| 0xCE76 | 0xCE76 - Botschaft Sensordaten Frontraumüberwachung, ID 70Fh |
| 0xCE77 | 0xCE77 - Botschaft Status FRR, ID 760h |
| 0xCE78 | 0xCE78 - Botschaft Objektdaten FRR, ID 740h-75Fh |
| 0xCE79 | 0xCE79 - Botschaft Daten Frontraumüberwachung, ID 719h |
| 0xCE80 | 0xCE80 - Botschaft Motordaten, ID 1D0h |
| 0xCE83 | 0xCE83 - Botschaft Status Fahrlicht, ID 314h |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x8001 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8021 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8022 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8030 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8031 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8032 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8033 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8034 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8035 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8036 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8037 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8038 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8039 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x803A | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x803B | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x803C | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x803D | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x803E | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x803F | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8041 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8042 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8043 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8044 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8045 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8046 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8048 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8049 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x804A | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x804B | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x804C | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x804D | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8054 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8055 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8056 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8057 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8058 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8059 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x805A | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x805B | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x805C | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x805D | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x805E | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8060 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8061 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8062 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8063 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8064 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8065 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8066 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8067 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8071 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8072 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8073 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8074 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8075 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8076 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8077 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8078 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8079 | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x807A | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x807B | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x807C | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x807D | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x807E | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x807F | 0x08 | 0x09 | UmbedISP | 0x0D |
| 0x8080 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8081 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8082 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8083 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8084 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8085 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8086 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8087 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8088 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8094 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8095 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8096 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8097 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8098 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8099 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x809A | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80A0 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80A1 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80A2 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80A3 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80A4 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80A7 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80B1 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80B2 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80B3 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80B4 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80D8 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80DA | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80DB | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80DC | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80DD | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80DE | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80E2 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80E4 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80E6 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80FC | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x80FD | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8140 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8141 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8142 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8143 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8400 | 0x0B | 0x0C | UmbedISP | 0x0D |
| 0x8541 | 0x0A | 0x0A | UmbedISP | 0x0D |
| 0x8542 | 0x0A | 0x0A | UmbedISP | 0x0D |
| default | Umbed1 | Umbed2 | Umbed3 | 0x07 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fehlercode intern | Hex | - | unsigned char | - | - | 1 | - |
| 0x02 | Fehlerinfo intern | Hex | - | unsigned char | - | - | 1 | - |
| 0x03 | Klemme30 Spannung | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x05 | Antriebsanforderung | Nm | - | unsigned char | - | 20 | 1 | 0 |
| 0x06 | Bremsanforderung | Nm | - | unsigned char | - | 20 | 1 | 0 |
| 0x07 | Betriebszustand | Hex | high | unsigned int | - | - | 1 | - |
| 0x08 | Exception Adresse high | Hex | high | unsigned int | - | - | 1 | - |
| 0x09 | Exception Adresse low | Hex | high | unsigned int | - | - | 1 | - |
| 0x0A | leer | Hex | high | unsigned int | - | - | 1 | - |
| 0x0B | Unkritischer Fehler high | Hex | high | unsigned int | - | - | 1 | - |
| 0x0C | Unkritischer Fehler low | Hex | high | unsigned int | - | - | 1 | - |
| 0x0D | Systemzeit Sekundenteil | s | high | unsigned int | - | - | 1 | - |
| 0x0E | Systemzeit Millisekundenteil | ms | - | unsigned char | - | 4 | - | - |

### JOBRESULTECUSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | RUN |
| 0x02 | Pruefung des Programmierstatus UR |
| 0x04 | Pruefung der CAN-Verriegelung |
| 0x11 | Warten auf Freigabe vom UR |
| 0x12 | SLEEP_INDIKATION UR |
| 0xXY | für diesen Wert ist kein Text hinterlegt |

### UMBED1

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 0x02 | 0x01 | 0x02 |

### UMBED2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 0x02 | 0x03 | 0x04 |

### UMBED3

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 0x02 | 0x05 | 0x06 |

### TEMP_ACC_TASTER

| BIT | TEXT_TASTER | WERT |
| --- | --- | --- |
| 0x00 | Keine Aktion | 1 |
| 0x01 | Tippen nach vorne | 2 |
| 0x02 | Überdrücken nach vorne | 3 |
| 0x04 | Tippen nach hinten | 4 |
| 0x08 | Überdrücken nach hinten | 5 |
| 0x10 | Tippen nach unten | 6 |
| 0x40 | Axial Tippen | 7 |
| 0x90 | Tippen nach oben | 8 |
| 0xFF | Signal ungültig | 9 |
| 0xXY | nicht definiert | 99 |

### STAT_BOTSCHAFT

| BIT | STATUS |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Timeoutfehler |
| 0x02 | Signal ungültig |
| 0x04 | Checksummenfehler |
| 0x08 | Alivezählerfehler |
| 0x10 | Signal undefiniert |
| 0x20 | Initialisierungsfehler |
| 0x40 | Signal irrelevant |
| 0xXY | nicht definiert |

### TEMP_ACC_ABSTANDSWAHL

| BIT | TEXT_ABSTAND | WERT |
| --- | --- | --- |
| 0x00 | Keine Aktion | 1 |
| 0x01 | Tippen nach oben | 2 |
| 0x02 | Tippen nach unten | 3 |
| 0x03 | Signal ungültig | 4 |
| 0xXY | nichtl definiert | 99 |

### NAHBEREICHSRADAR

| WERT | TEXT |
| --- | --- |
| 0x0600 | linker SRR |
| 0x0700 | rechter SRR |

### UMBEDISP

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 0x02 | 0x03 | 0x0E |
