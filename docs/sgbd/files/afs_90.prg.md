# afs_90.prg

## General

|  |  |
| --- | --- |
| File | afs_90.prg |
| Type | PRG |
| Jobs | 141 |
| Tables | 113 |
| Origin | BMW EF-61 Einberger, Reinhold |
| Revision | 4.100 |
| Author | BMW EF-61 Einberger, Reinhold, Software & Systems EF-61 Schindlbeck, Joachim |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Active Front Steering für E90 |  |  |
| ORIGIN | string | BMW EF-61 Einberger, Reinhold |  |  |
| REVISION | string | 4.100 |  |  |
| AUTHOR | string | BMW EF-61 Einberger, Reinhold, Software & Systems EF-61 Schindlbeck, Joachim |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.34 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

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

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### IDENT_LESEN

Identdaten KWP2000: $1A ReadECUIdentification SubID    $80 vordefinierte Tabellenstruktur auslesen Modus  : Default

_No arguments._

### IDENT_CUIFDT_LESEN

CUIFDT aktuelles AIF Feld auslesen KWP2000: $1A ReadECUIdentification SubID    $86 CurrentUIFDataTable Modus  : Default

_No arguments._

### IDENT_PECUHN_LESEN

Physikalische Hardware Nummer lesen, PECUHN KWP2000: $1A ReadECUIdentification SubID    $87 physicalECUHardwareNumber, PECUHN Index Modus  : Default

_No arguments._

### IDENT_SSECUSEN_LESEN

Seriennummer aus EEPROM lesen KWP2000: $1A ReadECUIdentification SubID    $89 systemSupplierECUSerialNumber Modus  : Default

_No arguments._

### IDENT_SSS_LESEN

Revisionsnummer des MPC564 KWP2000: $1A ReadECUIdentification SubID    $8A systemSupplierSpecific Modus  : Default

_No arguments._

### IDENT_VIN_LESEN

Fahrgestellnummer KWP2000: $1A ReadECUIdentification SubID    $90 VIN VehicleIndentificationNumber Modus  : Default

_No arguments._

### IDENT_VMECUHN_LESEN

SG Herstelldatum KWP2000: $1A ReadECUIdentification SubID    $91 vehicleManufacturerECUHardwareNumber Modus  : Default

_No arguments._

### IDENT_SSECUHN_LESEN

KFZ-Typ auslesen (3 Byte) Datensatz-Typ auslesen (4 Byte) KWP2000: $1A ReadECUIdentification SubID    $92 systemSupplierECUHardwareNumber Modus  : Default

_No arguments._

### IDENT_SSECUHVN_LESEN

KWP2000: $1A ReadECUIdentification SubID    $93 systemSupplierECUHardwareVersionNumber Modus  : Default

_No arguments._

### IDENT_SSECUSON_LESEN

Uhrzeit der SG-Softwareprogrammerstellung Rechnername auf dem die Software (LowLevel) erzeugt wurde KWP2000: $1A ReadECUIdentification SubID    $94 systemSupplierECUSoftwareNumber Modus  : Default

_No arguments._

### IDENT_SSECUSVN_LESEN

interne Softwareversionsnummern des MPC und NEC abgelegt in ZF-LS Code KWP2000: $1A ReadECUIdentification SubID    $95 systemSupplierECUSoftwareVersionNumber Modus  : Default

_No arguments._

### IDENT_EROTAN_LESEN

BehoerdenNummer KWP2000: $1A ReadECUIdentification SubID    $96 exhaustRegulationOrTypeApprovalNumber Modus  : Default

_No arguments._

### IDENT_SNOET_LESEN

Variantenindex KWP2000: $1A ReadECUIdentification SubID    $97 systemNameOrEngineType

_No arguments._

### IDENT_RSCATSN_LESEN

Testernummer KWP2000: $1A ReadECUIdentification SubID    $98 repairShopCodeandTesterSerialNumber Modus  : Default

_No arguments._

### IDENT_PD_LESEN

letztes Programmierdatum lesen KWP2000: $1A ReadECUIdentification SubID    $99 ProgrammingDate Modus  : Default

_No arguments._

### IDENT_VMECUHVN_LESEN

HardwareNummer aus EEPROM lesen KWP2000: $1A ReadECUIdentification SubID    $9A vehicleManufacturerECUHardwareVersionNumber Modus  : Default

_No arguments._

### IDENT_VMCI_LESEN

Codierindex lesen KWP2000: $1A ReadECUIdentification SubID    $9B vehicleManufacturerCodingIndex Modus  : Default

_No arguments._

### IDENT_VMDI_LESEN

Diagnoseindex lesen KWP2000: $1A ReadECUIdentification SubID    $9C vehicleManufacturerDiagnosticIndex Modus  : Default

_No arguments._

### IDENT_DOECUM_LESEN

Herstelldatum des SG aus EEPROM lesen KWP2000: $1A ReadECUIdentification SubID    $9D dateOfECUManufacturing Modus  : Default

_No arguments._

### IDENT_SSI_LESEN

Lieferantennummer/Index lesen KWP2000: $1A ReadECUIdentification SubID    $9E systemSupplierIndex Modus  : Default

_No arguments._

### IDENT_VMECUSLVN_LESEN

MCV,OSV,FSV,RES Nummern lesen KWP2000: $1A ReadECUIdentification SubID    $9F vehicleManufECUSoftwareLayerVersionNumber Modus  : Default

_No arguments._

### HARDWARE_REFERENZ_LESEN_PAF_DAF

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier SubID    $2502 HardwareReferenz 7 Byte ASCII 3 fach Ablage im Flash Bootblock Modus  : Default

_No arguments._

### PROGRAMM_REFERENZ_LESEN_PAF_DAF

Auslesen der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier SubID    $2503 ProgrammReferenz Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN_PAF_DAF

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier SubID    $2504 DatenReferenz Modus  : Default

_No arguments._

### AFS_FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit, Authentisierberechnungszeit und Resetzeit KWP2000: $22   ReadDataByCommonIdentifier SubID    $2501 Zeiten Modus  : Default

_No arguments._

### AFS_FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen KWP2000: $22   ReadDataByCommonIdentifier SubID    $2506 MaximaleBlockLaenge Modus  : Default

_No arguments._

### AFS_ZIF_BACKUP_LESEN

Auslesen des Backups des Zulieferinfofeldes ProgrammReferenzBackup         PRGREFB vehicleManufECUHW*NumberBackup VMECUH*NB KWP2000: $22   ReadDataByCommonIdentifier SubID    $2500 PRBHW*B oder alternativ KWP2000: $1A ReadECUIdentification SubID    $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### AFS_AIF_LESEN

AIF/UIF Datenblock auslesen KWP2000: $23   ReadMemoryByAddress $AdrHigh AdrMid AdrLow UIFM UIFBlockLaenge SubID    $00      00     00     07   40 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NR | int | == 0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF AIF Blocknummer |

### STATUS_VERSORGUNGEN

Auslesen der aktuellen Spanungspegel KWP2000: $30 InputOutputControlByLocalIdentifier SubID    $01 InputOutputLocalIdentifier(IOLI) SubID    $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_AFS_OS

Auslesen verschiedener Betriebssystem (OS,SG) Stati KWP2000: $30 InputOutputControlByLocalIdentifier SubID    $02 InputOutputLocalIdentifier(IOLI) SubID    $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SICHERHEIT

Auslesen interner DPRAM Zustaende KWP2000: $30 InputOutputControlByLocalIdentifier $03 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_PHASENSTROEME

Auslesen der Staenderstroeme I1 - I3 KWP2000: $30 InputOutputControlByLocalIdentifier $04 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP)

_No arguments._

### STATUS_TEMPERATUREN

Auslesen der Motor und Endstufentemperaturen KWP2000: $30 InputOutputControlByLocalIdentifier $05 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SZL

Auslesen verschiedener vom SZL gesendeter Werte uebertragen ueber F-CAN KWP2000: $30 InputOutputControlByLocalIdentifier $06 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_LWG_WINKELWERTE_PHYSIKALISCH

gefilterter Rohwert des Summenlenkwinkel vom Summenlenkwinkelsensor ueber Botschaft (C3) LO-CAN, Fahrwerks-CAN, F-CAN, Private-CAN oder auch FW-CAN KWP2000: $30 InputOutputControlByLocalIdentifier $07 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_LWG_WINKELWERTE_ABSOLUT

Auslesen des Summenlenkwinkels (multiturn) der von ASCET berechnet wurde Wert wird ueber FW-CAN vom AFS versendet ueber Botschaft (118) LO-CAN, Fahrwerks-CAN, F-CAN, Private-CAN oder auch FW-CAN KWP2000: $30 InputOutputControlByLocalIdentifier $08 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_MOTORLAGEWINKEL

Auslesen der Spannungen am Motor, und Motorlagewinkel Absolutwert(Istwert) KWP2000: $30 InputOutputControlByLocalIdentifier $09 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_FAHRERLENKWINKEL

Auslesen des Fahrerlenkwinkels KWP2000: $30 InputOutputControlByLocalIdentifier $0A InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_GESCHWINDIGKEITEN

Auslesen des Fahrerlenkwinkels KWP2000: $30 InputOutputControlByLocalIdentifier $0B InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_QUERBESCHLEUNIGUNG

Auslesen des Fahrerlenkwinkels KWP2000: $30 InputOutputControlByLocalIdentifier $0C InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_GIERRATEN

Auslesen des Fahrerlenkwinkels KWP2000: $30 InputOutputControlByLocalIdentifier $0D InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_DSC_INFO

Auslesen des DSC Status KWP2000: $30 InputOutputControlByLocalIdentifier $0E InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_WINKELWERTE

Auslesen verschiedener Winkelwerte, wie Fahrerlenkwinkel,Summenlenkwinkel,Motorlagewinkel KWP2000: $30 InputOutputControlByLocalIdentifier $0F InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_PHASENSPANNUNGEN

Auslesen der Phasenspannungen U1 - U3 KWP2000: $30 InputOutputControlByLocalIdentifier $10 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP)

_No arguments._

### STATUS_QUALIFIER

Auslesen verschiedener ASCET Qualifier KWP2000: $30 InputOutputControlByLocalIdentifier $11 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP)

_No arguments._

### STATUS_KLEMMEN_INFO

Auslesen verschiedener Klemmenstati KWP2000: $30 InputOutputControlByLocalIdentifier $12 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_ALIVE_INFO

Auslesen verschiedener ALIVE Zaehler KWP2000: $30 InputOutputControlByLocalIdentifier $13 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_AFS

Auslesen verschiedener SG Stati KWP2000: $30 InputOutputControlByLocalIdentifier $14 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_CAN_FEHLER_SIGNALE

Auslesen verschiedener CAN Signalfehlerzustaende KWP2000: $30 InputOutputControlByLocalIdentifier $15 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_PTCAN_SIGNALE

Auslesen verschiedener PT-CAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier $16 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_DYNAMIK

Auslesen verschiedener PT-CAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier $17 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_ECO_STROM_MA

Auslesen des aktuell anliegenden Stromes an ECO Ventil KWP2000: $30 InputOutputControlByLocalIdentifier $18 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SERVO_STROM_MA

Auslesen des aktuell anliegenden Stromes an SERVO Ventil KWP2000: $30 InputOutputControlByLocalIdentifier $19 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_GMK

verschiedene GMK Werte KWP2000: $30 InputOutputControlByLocalIdentifier $1A InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SUMMENLENKWINKEL_SENSOR

ungefilterte Rohwerte des Summenlenkwinkelsensors ueber F-CAN, nur SINGLE TURN Wert KWP2000: $30 InputOutputControlByLocalIdentifier $1B InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_MPC_ERROR_INFO

Auslesen des MPC Fehlerspeichers KWP2000: $30 InputOutputControlByLocalIdentifier $30 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_NEC_ERROR_INFO

Auslesen des NEC Fehlerspeichers KWP2000: $30 InputOutputControlByLocalIdentifier $31 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_FSP_MPC_CONTROLFELD

Auslesen des MPC Fehlerspeicher Diagnose Kontrollfeld ZFLS Konserve, ZFLS EXCEL Tabelle KWP2000: $30 InputOutputControlByLocalIdentifier $32 InputOutputLocalIdentifier(IOLI) $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | DTC Codes des INFO Fehlerspeicherbereiches, 2 Byte Wertebereich des DTC[6001..60FF] |

### STATUS_FSP_NEC_CONTROLFELD

Auslesen des NEC Fehlerspeicher Diagnose Kontrollfeld ZFLS Konserve, ZFLS EXCEL Tabelle KWP2000: $30 InputOutputControlByLocalIdentifier $33 InputOutputLocalIdentifier(IOLI) $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | DTC Codes des INFO Fehlerspeicherbereiches, 2 Byte Wertebereich des DTC[6101..61FF] |

### STEUERN_ECO_STROM_MA

Auslesen des MPC Fehlerspeichers KWP2000: $30 InputOutputControlByLocalIdentifier $20 InputOutputLocalIdentifier(IOLI) $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ECO_STROM_SOLL_WERT | int | zu stellender Strom fuer das ECO Ventil, (2 Byte) Wertebereich[0..1000 mA] |

### STEUERN_SERVO_STROM_MA

Auslesen des MPC Fehlerspeichers KWP2000: $30 InputOutputControlByLocalIdentifier $21 InputOutputLocalIdentifier(IOLI) $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SERVO_STROM_SOLL_WERT | int | zu stellender Strom fuer das Servo Ventil Wertebereich[0..1000 mA] |

### STEUERN_ECOSERVO

KWP2000: $3B WriteDataByLocalIdentifier KWP2000: $91 SubID Freischaltung Bestromung der ECO SERVO Ventile ueber Diagnose

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_PSW | string | OKAY, wenn fehlerfrei |

### STATUS_EEPROM_SERIENNUMMER_SZL

Auslesen der im AFS EEPROM abgelegten Seriennummer des SZL AFS wird/bleibt inaktiv falls SZL getauscht wird KWP2000: $30 InputOutputControlByLocalIdentifier $01 InputOutputLocalIdentifier(IOLI) $08 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_EEPROM_OFFSET_SZL

Auslesen des im AFS EEPROM abgelegten Fahrerlenkwinkeloffsets vom SZL KWP2000: $30 InputOutputControlByLocalIdentifier $02 InputOutputLocalIdentifier(IOLI) $08 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_EEPROM_SENSOREN

Sensordaten aus EEPROM lesen auch mit COTOOL32 KWP2000: $30 InputOutputControlByLocalIdentifier $04 InputOutputLocalIdentifier(IOLI) $08 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### COD_C_LESEN

Codierdaten lesen ueber COTOOL(Loehnert) Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_C_SCHREIBEN

Codierdaten schreiben ueber COTOOL(Loehnert) Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_N_LESEN

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_N_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_PARAMETER_LESEN

Codierdaten lesen ueber COTOOL(Loehnert) Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 CodingDataSet, Block 3000 Modus  : Default

_No arguments._

### FS_MPC_LOESCHEN

NUR Fehlerspeicher des MPC loeschen KWP2000: $14 ClearDiagnosticInformation $FF,$00 Modus  : Default

_No arguments._

### FS_NEC_LOESCHEN

NUR Fehlerspeicher des NEC loeschen KWP2000: $14 ClearDiagnosticInformation $FF $01 Modus  : Default

_No arguments._

### START_LWG_INIT

Start der Summenlenkwinkelinitialisierung KWP2000: $31 StartRoutineByLocalIdentifier $50 RoutineLocalIdentifier Modus  : Default

_No arguments._

### START_SENSORCLUSTER_OFFSET_ABGLEICH

AFS EEPROM Sensorclusteroffsetwerte mit DEFAULT Daten beschreiben KWP2000: $31 StartRoutineByLocalIdentifier $51 RoutineLocalIdentifier Modus  : SG darf NICHT im NORMAL_MODE, Fahrzeuggeschwindigkeit kleiner 5 km/h Modus  : Zugriff auf EEPROM muss moeglich sein Modus  : um die Werte ins EEPROM zu uebenehmen MUSS SG ueber POSTRUN laufen Modus  : Wechsel Klemme 15

_No arguments._

### START_SUMMENLENKWINKEL_OFFSET_ABGLEICH

AFS EEPROM Summenlenkwinkeloffsetwerte mit DEFAULT Daten beschreiben KWP2000: $31 StartRoutineByLocalIdentifier $52 RoutineLocalIdentifier Modus  : SG darf NICHT im NORMAL_MODE, Fahrzeuggeschwindigkeit kleiner 5 km/h Modus  : Zugriff auf EEPROM muss moeglich sein Modus  : um die Werte ins EEPROM zu uebenehmen MUSS SG ueber POSTRUN laufen Modus  : Wechsel Klemme 15

_No arguments._

### START_GIERRATENEMPFINDLICHKEIT_ABGLEICH

AFS EEPROM Gierratenempfindlichkeiten mit DEFAULT Daten beschreiben KWP2000: $31 StartRoutineByLocalIdentifier $53 RoutineLocalIdentifier Modus  : SG darf NICHT im NORMAL_MODE, Fahrzeuggeschwindigkeit kleiner 5 km/h Modus  : Zugriff auf EEPROM muss moeglich sein Modus  : um die Werte ins EEPROM zu uebenehmen MUSS SG ueber POSTRUN laufen Modus  : Wechsel Klemme 15

_No arguments._

### START_LWM_RUECKSETZEN

1 Telegramm Motorlagewinkels auf ungueltig setzen, durch SG RESET Positive Antwort NUR im PRE_DRIVE und NORMAL_MODE 2 Telegramm Status des Motorlagewinkels wird ausgelesen KWP2000: $31 RequestRoutineResultsByLocalIdentifier $54 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### LWM_INIT_ABFRAGEN

Gueltigkeit des Rotorlagewinkels auslesen KWP2000: $33 RequestRoutineResultsByLocalIdentifier $50 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### STATUS_LWG_QUADRANT_ABFRAGEN

Quadrantengueltigkeit des Summenlenkwinkels auslesen KWP2000: $33 RequestRoutineResultsByLocalIdentifier $51 Modus  : Default

_No arguments._

### NEC_FLASH_PROGRAMMIER_STATUS_LESEN

Zustand des NEC beim bzw. nach dem Flashen KWP2000: $33 RequestRoutineResultsByLocalIdentifier $52 Resultat anfragen Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_ABGLEICH_ABFRAGEN

aktueller Zustand des EEPROM Adaptivdatenabgleichs KWP2000: $33 RequestRoutineResultsByLocalIdentifier $53 RoutineLocalIdentifier ( RELI ) Modus  : Default

_No arguments._

### NEC_EEPROM_LESEN

NEC EEPROM Daten lesen ueber COTOOL(Loehnert) KWP2000: $23 readMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige NEC Speicher Adressen: 0x0000-0x01FF NEC Speichergroesse 512 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### NEC_EEPROM_SCHREIBEN

NEC EEPROM Daten lesen ueber COTOOL(Loehnert) KWP2000: $3D writeMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige NEC Speicher Adressen: 0x0000-0x01FF NEC Speichergroesse 512 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### MPC_EEPROM_LESEN

MPC EEPROM Daten lesen ueber COTOOL(Loehnert) KWP2000: $23 readMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige NEC Speicher Adressen: 0x0200-0x0FFF NEC Speichergroesse 4096 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### MPC_EEPROM_SCHREIBEN

MPC EEPROM Daten lesen ueber COTOOL(Loehnert) KWP2000: $3D writeMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige MPC Speicher Adressen: 0x0200-0x0FFF MPC Speichergroesse 4096 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### ZF_FACTORY_DATEN_LESEN

MPC EEPROM Daten lesen fuer INPA Darstellung KWP2000: $23 readMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige MPC Speicher Adressen: 0x0200-0x0FFF EEPROM Speichergroesse 4096 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte hier werden 12 Byte aus dem Werksdatenbereich ausgelesen, ab Adresse  0x0FCA Modus  : Default

_No arguments._

### STATUS_AFS_OS_UNTER_NUMMER

Auslesen verschiedener Betriebssystem (OS,SG) Stati KWP2000: $30 InputOutputControlByLocalIdentifier SubID    $32 InputOutputLocalIdentifier(IOLI) SubID    $01 InputOutputControlParameter(IOCP) Modus  : Default

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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
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
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x80 | ERROR_FAILED_DELETE_MPC |
| 0x81 | ERROR_FAILED_DELETE_NEC |
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
| 0x612C | Hardwarefehler Steuergerät |
| 0x612D | Giermomentenkompensations Fehler |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder Flashfehler NEC |
| 0x6132 | kein 2 Prozessor SZL gefunden oder verbaut |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6135 | SZL neu verbaut oder neu abgeglichen |
| 0x6136 | Sensorversorgung Motorlage und -position |
| 0x6137 | Motorlagesensor |
| 0x6138 | Motor-uebertemperatur |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Versorgungsspannung Kl. 30 (< 7.5 Volt) |
| 0x613B | Fahrdynamiksensoren |
| 0x613C | Winkelsummenbeziehung fehlerhaft |
| 0x613D | elektr. Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x613F | Plausibilitaet Lenkwinkel-Rad (Summenlenkwinkel) |
| 0x6140 | Redundanzvergleich Fahrerlenkwinkel oben |
| 0x6141 | Motordynamikueberwachung |
| 0x6142 | ECO-Ventil |
| 0x6143 | SERVO-Ventil |
| 0x6144 | Selbsthemmungsueberwachung |
| 0x6145 | keine Ueberwachung der Winkelsummenbeziehung |
| 0x6146 | Motortemperatursensor |
| 0x6147 | Sensorversorgung Lenkwinkel-Rad (Summenlenkwinkel) |
| 0x6149 | kombinierte Lage- Drehzahlueberwachung |
| 0x614A | Motorlagewinkel nicht initialisiert |
| 0x614B | ERCOSEK Fehler |
| 0xCE84 | nicht benutzt |
| 0xCE85 | nicht benutzt |
| 0xCE86 | nicht benutzt |
| 0xCE87 | F-CAN Kommunikationsfehler |
| 0xCE88 | nicht benutzt |
| 0xCE89 | nicht benutzt |
| 0xCE8A | nicht benutzt |
| 0xCE8B | PT-CAN Kommunikationsfehler |
| 0xCE8C | nicht benutzt |
| 0xCE8D | nicht benutzt |
| 0xCE8E | nicht benutzt |
| 0xCE8F | nicht benutzt |
| 0xCE90 | nicht benutzt |
| 0xCE91 | nicht benutzt |
| 0xCE92 | nicht benutzt |
| 0xCE93 | Botschaft (Lenkradwinkel oben, ID=0C9)Initialisierungsphase |
| 0xCE94 | Botschaft (Fahrdynamiksensor 1, ID=0CD) vom F-CAN |
| 0xCE95 | Botschaft (Fahrdynamiksensor 2, ID=0D1) vom F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) vom DSC F-CAN |
| 0xCE97 | Botschaft (Lenkwinkel-Rad (Summenlenkwinkel), ID=0C3) vom F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC_AFS, ID=11E) vom DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C9) vom SZL F-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) vom DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) vom DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) vom DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) vom DME PT-CAN |
| 0xCEA0 | Botschaft (Motor-Start-Stop Automatik, ID=308) vom DME PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) vom CAS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) vom KombiInstr. PT-CAN |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00000011 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxx00 | 100 | Allgemeiner Fehler |
| xxxxxx01 | 101 | FSP uebergelaufen |
| xxxxxx10 | 110 | FSP nicht uebergelaufen |
| xxxxxx11 | 111 | Status ungueltig |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x612D | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | GMK |
| 0x613B | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DPSI |
| 0x613F | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DEH |
| 0x6140 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | LWS |
| 0x6141 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | MDYN |
| default | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | 0xFF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Reihenfolge der Ablage | - | -- | unsigned char | - | - | - | - |
| 0x02 | ZF-LS Fehlercode | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x03 | ZF-LS Fehlerart | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | -- | signed char | -- | 2 | 1 | 0 |
| 0x05 | Querbeschleunigung | m/(s*s) | -- | signed char | -- | 1 | 7 | 0 |
| 0x06 | Gierrate | rad/s | -- | signed char | -- | 1 | 70 | 0 |
| 0x07 | Summenlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x08 | Fahrerlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x09 | Versorgungsspannung | Volt | -- | unsigned char | -- | 1 | 12.75 | 0 |
| 0x0A | ohne Bedeutung | ? | -- | signed char | -- | 1 | 1 | 0 |
| 0x0B | diverse SG-Stati | digital | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x10 | Abschaltung der Aktivlenkung Bit 0 | 0/1 | -- | 0x00000001 | -- | - | - | - |
| 0x11 | Abschaltung der Gierratenregelung Bit 1 | 0/1 | -- | 0x00000002 | -- | - | - | - |
| 0x12 | Ersatzwert fuer Motordrehzahl fuer ECO-Funktionalitaet Bit 2 | 0/1 | -- | 0x00000004 | -- | - | - | - |
| 0x13 | Einfrieren oder langsames Zurueckstellen des aktuellen Motorlagewinkels  Bit 3 | 0/1 | -- | 0x00000008 | -- | - | - | - |
| 0x14 | Sofortige Abschaltung der GRR Bit 4 | 0/1 | -- | 0x00000010 | -- | - | - | - |
| 0x15 | Verzoegerte Abschaltung der GRR Bit 5 | 0/1 | -- | 0x00000020 | -- | - | - | - |
| 0x16 | Einfrieren der Lenkuebersetzung(aktueller Zuendungszyklus) Bit 6 | 0/1 | -- | 0x00000040 | -- | - | - | - |
| 0x17 | Einfrieren der geschwindigkeitsabhaengigen Lenkuebersetzung Bit 7 | 0/1 | -- | 0x00000080 | -- | - | - | - |
| 0x18 | Einfrieren der Fahrtrichtung Bit 8 | 0/1 | -- | 0x00000100 | -- | - | - | - |
| 0x19 | Ersatzwert fuer Gierrate fuer die Fkt.en Servotro. u. DME Bit 9 | 0/1 | -- | 0x00000200 | -- | - | - | - |
| 0x1A | Ersatzwert fuer Querbesch. fuer die Fkt.en Servotro. u. DME Bit 10 | 0/1 | -- | 0x00000400 | -- | - | - | - |
| 0x1B | Ersatzwert fuer Lenkwinkelgeschw. fuer die Fkt.en Servotro. u. DME Bit 11 | 0/1 | -- | 0x00000800 | -- | - | - | - |
| 0x1C | Fehler des Fahrerlenkwinkels oder des Motorlagewinkels Bit 12 | 0/1 | -- | 0x00001000 | -- | - | - | - |
| 0x1D | konst. Ersatzwert fuer den Summenlenkwinkel Bit 13 | 0/1 | -- | 0x00002000 | -- | - | - | - |
| 0x1E | Fehler des Summenlenkwinkels oder des Motorlagewinkels Bit 14 | 0/1 | -- | 0x00004000 | -- | - | - | - |
| 0x1F | konst. Ersatzwert fuer den Fahrerlenkwinkel Bit 15 | 0/1 | -- | 0x00008000 | -- | - | - | - |
| 0x20 | reversible GMK Abschaltung Bit 16 | 0/1 | -- | 0x00010000 | -- | - | - | - |
| 0x21 | irreversible GMK Abschaltung Bit 17 | 0/1 | -- | 0x00020000 | -- | - | - | - |
| 0x22 | Ersatzwert des Motormoments fuer SNK Bit 18 | 0/1 | -- | 0x00040000 | -- | - | - | - |
| 0x23 | Ersatzmassnahme unbenutzt Bit 19 | 0/1 | -- | 0x00080000 | -- | - | - | - |
| 0x24 | Ersatzmassnahme unbenutzt Bit 20 | 0/1 | -- | 0x00100000 | -- | - | - | - |
| 0x25 | Ersatzmassnahme unbenutzt Bit 21 | 0/1 | -- | 0x00200000 | -- | - | - | - |
| 0x26 | Ersatzmassnahme unbenutzt Bit 22 | 0/1 | -- | 0x00400000 | -- | - | - | - |
| 0x27 | Ersatzmassnahme unbenutzt Bit 23 | 0/1 | -- | 0x00800000 | -- | - | - | - |
| 0x28 | Ersatzmassnahme unbenutzt Bit 24 | 0/1 | -- | 0x01000000 | -- | - | - | - |
| 0x29 | Ersatzmassnahme unbenutzt Bit 25 | 0/1 | -- | 0x02000000 | -- | - | - | - |
| 0x2A | Ersatzmassnahme unbenutzt Bit 26 | 0/1 | -- | 0x04000000 | -- | - | - | - |
| 0x2B | Ersatzmassnahme unbenutzt Bit 27 | 0/1 | -- | 0x08000000 | -- | - | - | - |
| 0x2C | Ersatzmassnahme unbenutzt Bit 28 | 0/1 | -- | 0x10000000 | -- | - | - | - |
| 0x2D | Ersatzmassnahme unbenutzt Bit 29 | 0/1 | -- | 0x20000000 | -- | - | - | - |
| 0x2E | Ersatzmassnahme unbenutzt Bit 30 | 0/1 | -- | 0x40000000 | -- | - | - | - |
| 0x2F | Ersatzmassnahme unbenutzt Bit 31 | 0/1 | -- | 0x80000000 | -- | - | - | - |
| 0x30 | Sensorfehler FDYS Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x31 | Gradient Fehlerverdacht FDYS Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x32 | Gradient Fehler FDYS Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x33 | Signal Peak Fehler FDYS Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x34 | Offsetueberwachung Fehler FDYS Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x35 | Empfindlichkeits Ueberwachung Fehler FDYS Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x36 | Roh-Redundanz Fehlerverdacht FDYS Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x37 | Roh-Redundanz Fehler FDYS Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x38 | unbenutzt FDYS Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x39 | Referenz Redundanz Fehlerverdacht FDYS Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x3A | Referenz Redundanz Fehler FDYS Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x3B | unbenutzt FDYS Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x3C | Fehler im Sensorcluster 1 FDYS Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x3D | Fehler im Sensorcluster 2 FDYS Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x3E | unbenutzt FDYS Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x3F | unbenutzt FDYS Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x40 | Lenkwinkelgradient Fehlerverdacht LWG Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x41 | Lenkwinkelgradient Fehler LWG Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x42 | Lenkwinkel Peak Fehler LWG Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x43 | unbenutzt LWG Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x44 | Lenkwinkeloffset Fehlerverdacht LWG Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x45 | Lenkwinkeloffset Fehler LWG Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x46 | Winkelsummengleichung Fehlerverdacht LWG Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x47 | Winkelsummengleichung Fehler LWG Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x48 | unbenutzt LWG Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x49 | unbenutzt LWG Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x4A | unbenutzt LWG Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x4B | unbenutzt LWG Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x4C | unbenutzt LWG Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x4D | unbenutzt LWG Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x4E | unbenutzt LWG Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x4F | unbenutzt LWG Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x50 | Can Signal Fehlerwert des Maincontrollers SZL LWDS Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x51 | Can Signal Fehlerwert des Subcontrollers SZL LWDS Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x52 | Can Signal Timeout des Maincontrollers SZL LWDS Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x53 | Can Signal Timeout des Subcontrollers SZL LWDS Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x54 | Can Signal SZL in diesem Zündungszyklus nie dagewesen LWDS Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x55 | SZL Winkel außerhalb erwartetem Band LWDS Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x56 | Differenz zwischen redundaten Lenkwinkelsignalen ist zu groß LWDS Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x57 | Differenz nach Timeout zwischen aufeinanderfolgenden Signalwerten zu groß LWSD Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x58 | Kein 2uC SZL LWDS Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x59 | SZL neu verbaut oder neu abgeglichen LWDS Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x5A | SZL Typ wurde nicht empfangen LWDS Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x5B | unbenutzt LWDS Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x5C | unbenutzt LWDS Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x5D | unbenutzt LWDS Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x5E | unbenutzt LWDS Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x5F | unbenutzt LWDS Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x60 | Fehler Integral 1 MDYN Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x61 | Fehler Integral 2 MDYN Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x62 | unbenutzt MDYN Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x63 | unbenutzt MDYN Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x64 | unbenutzt MDYN Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x65 | unbenutzt MDYN Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x66 | unbenutzt MDYN Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x67 | unbenutzt MDYN Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x68 | unbenutzt MDYN Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x69 | unbenutzt MDYN Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x6A | unbenutzt MDYN Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x6B | unbenutzt MDYN Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x6C | unbenutzt MDYN Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x6D | unbenutzt MDYN Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x6E | unbenutzt MDYN Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x6F | unbenutzt MDYN Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x70 | GMK keine Lenkanforderung Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x71 | GMK Lenkanforderung Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x72 | GMK irreversibel deaktiviert Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x73 | GMK Timeout Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x74 | GMK Fehlerwert Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x75 | GMK CRC/Alive Fehler Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x76 | GMK Teilsollwert zu hoch Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x77 | GMK Regelung zu lang Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x78 | GMK Teilsollwert ins Modell ungleich NULL Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x79 | DSC Status passiv Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x7A | DSC Status defekt Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x7B | DSC Status DTC Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x7C | unbenutzt GMK Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x7D | ECO Status Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x7E | Motordynamik SW1 Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x7F | Signalfehler AY,RR Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0xFF | ohne Bedeutung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x612C | Hardwarefehler Steuergerät |
| 0x612D | Giermomentenkompensations Fehler |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder Flashfehler NEC |
| 0x6132 | kein 2 Prozessor SZL gefunden oder verbaut |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6135 | SZL neu verbaut oder neu abgeglichen |
| 0x6136 | Sensorversorgung Motorlage und -position |
| 0x6137 | Motorlagesensor |
| 0x6138 | Motor-uebertemperatur |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Versorgungsspannung Kl. 30 (< 7.5 Volt) |
| 0x613B | Fahrdynamiksensoren |
| 0x613C | Winkelsummenbeziehung fehlerhaft |
| 0x613D | elektr. Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x613F | Plausibilitaet Lenkwinkel-Rad (Summenlenkwinkel) |
| 0x6140 | Redundanzvergleich Fahrerlenkwinkel oben |
| 0x6141 | Motordynamikueberwachung |
| 0x6142 | ECO-Ventil |
| 0x6144 | Selbsthemmungsueberwachung |
| 0x6143 | SERVO-Ventil |
| 0x6145 | keine Ueberwachung der Winkelsummenbeziehung |
| 0x6146 | Motortemperatursensor |
| 0x6147 | Sensorversorgung Lenkwinkel-Rad (Summenlenkwinkel) |
| 0x6149 | kombinierte Lage- Drehzahlueberwachung |
| 0x614A | Motorlagewinkel nicht initialisiert |
| 0x614B | ERCOSEK Fehler |
| 0xCE84 | nicht benutzt |
| 0xCE85 | nicht benutzt |
| 0xCE86 | nicht benutzt |
| 0xCE87 | F-CAN Kommunikationsfehler |
| 0xCE88 | nicht benutzt |
| 0xCE89 | nicht benutzt |
| 0xCE8A | nicht benutzt |
| 0xCE8B | PT-CAN Kommunikationsfehler |
| 0xCE8C | nicht benutzt |
| 0xCE8D | nicht benutzt |
| 0xCE8E | nicht benutzt |
| 0xCE8F | nicht benutzt |
| 0xCE90 | nicht benutzt |
| 0xCE91 | nicht benutzt |
| 0xCE92 | nicht benutzt |
| 0xCE93 | Botschaft (Lenkradwinkel oben, ID=0C9)Initialisierungsphase |
| 0xCE94 | Botschaft (Fahrdynamiksensor 1, ID=0CD) vom F-CAN |
| 0xCE95 | Botschaft (Fahrdynamiksensor 2, ID=0D1) vom F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) vom DSC F-CAN |
| 0xCE97 | Botschaft (Lenkwinkel-Rad (Summenlenkwinkel), ID=0C3) vom F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC_AFS, ID=11E) vom DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C9) vom SZL F-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) vom DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) vom DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) vom DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) vom DME PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) vom CAS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) vom KombiInstr. PT-CAN |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00000011 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x612D | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | GMK |
| 0x613B | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DPSI |
| 0x613F | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DEH |
| 0x6140 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | LWS |
| 0x6141 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | MDYN |
| default | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | 0xFF |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Reihenfolge der Ablage | - | -- | unsigned char | - | - | - | - |
| 0x02 | ZF-LS Fehlercode | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x03 | ZF-LS Fehlerart | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | -- | signed char | -- | 2 | 1 | 0 |
| 0x05 | Querbeschleunigung | m/(s*s) | -- | signed char | -- | 1 | 7 | 0 |
| 0x06 | Gierrate | rad/s | -- | signed char | -- | 1 | 70 | 0 |
| 0x07 | Summenlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x08 | Fahrerlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x09 | Versorgungsspannung | Volt | -- | unsigned char | -- | 1 | 12.75 | 0 |
| 0x0A | ohne Bedeutung | ? | -- | signed char | -- | 1 | 1 | 0 |
| 0x0B | diverse SG-Stati | digital | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x10 | Abschaltung der Aktivlenkung Bit 0 | 0/1 | -- | 0x00000001 | -- | - | - | - |
| 0x11 | Abschaltung der Gierratenregelung Bit 1 | 0/1 | -- | 0x00000002 | -- | - | - | - |
| 0x12 | Ersatzwert fuer Motordrehzahl fuer ECO-Funktionalitaet Bit 2 | 0/1 | -- | 0x00000004 | -- | - | - | - |
| 0x13 | Einfrieren oder langsames Zurueckstellen des aktuellen Motorlagewinkels  Bit 3 | 0/1 | -- | 0x00000008 | -- | - | - | - |
| 0x14 | Sofortige Abschaltung der GRR Bit 4 | 0/1 | -- | 0x00000010 | -- | - | - | - |
| 0x15 | Verzoegerte Abschaltung der GRR Bit 5 | 0/1 | -- | 0x00000020 | -- | - | - | - |
| 0x16 | Einfrieren der Lenkuebersetzung(aktueller Zuendungszyklus) Bit 6 | 0/1 | -- | 0x00000040 | -- | - | - | - |
| 0x17 | Einfrieren der geschwindigkeitsabhaengigen Lenkuebersetzung Bit 7 | 0/1 | -- | 0x00000080 | -- | - | - | - |
| 0x18 | Einfrieren der Fahrtrichtung Bit 8 | 0/1 | -- | 0x00000100 | -- | - | - | - |
| 0x19 | Ersatzwert fuer Gierrate fuer die Fkt.en Servotro. u. DME Bit 9 | 0/1 | -- | 0x00000200 | -- | - | - | - |
| 0x1A | Ersatzwert fuer Querbesch. fuer die Fkt.en Servotro. u. DME Bit 10 | 0/1 | -- | 0x00000400 | -- | - | - | - |
| 0x1B | Ersatzwert fuer Lenkwinkelgeschw. fuer die Fkt.en Servotro. u. DME Bit 11 | 0/1 | -- | 0x00000800 | -- | - | - | - |
| 0x1C | Fehler des Fahrerlenkwinkels oder des Motorlagewinkels Bit 12 | 0/1 | -- | 0x00001000 | -- | - | - | - |
| 0x1D | konst. Ersatzwert fuer den Summenlenkwinkel Bit 13 | 0/1 | -- | 0x00002000 | -- | - | - | - |
| 0x1E | Fehler des Summenlenkwinkels oder des Motorlagewinkels Bit 14 | 0/1 | -- | 0x00004000 | -- | - | - | - |
| 0x1F | konst. Ersatzwert fuer den Fahrerlenkwinkel Bit 15 | 0/1 | -- | 0x00008000 | -- | - | - | - |
| 0x20 | reversible GMK Abschaltung Bit 16 | 0/1 | -- | 0x00010000 | -- | - | - | - |
| 0x21 | irreversible GMK Abschaltung Bit 17 | 0/1 | -- | 0x00020000 | -- | - | - | - |
| 0x22 | Ersatzwert des Motormoments fuer SNK Bit 18 | 0/1 | -- | 0x00040000 | -- | - | - | - |
| 0x23 | Ersatzmassnahme unbenutzt Bit 19 | 0/1 | -- | 0x00080000 | -- | - | - | - |
| 0x24 | Ersatzmassnahme unbenutzt Bit 20 | 0/1 | -- | 0x00100000 | -- | - | - | - |
| 0x25 | Ersatzmassnahme unbenutzt Bit 21 | 0/1 | -- | 0x00200000 | -- | - | - | - |
| 0x26 | Ersatzmassnahme unbenutzt Bit 22 | 0/1 | -- | 0x00400000 | -- | - | - | - |
| 0x27 | Ersatzmassnahme unbenutzt Bit 23 | 0/1 | -- | 0x00800000 | -- | - | - | - |
| 0x28 | Ersatzmassnahme unbenutzt Bit 24 | 0/1 | -- | 0x01000000 | -- | - | - | - |
| 0x29 | Ersatzmassnahme unbenutzt Bit 25 | 0/1 | -- | 0x02000000 | -- | - | - | - |
| 0x2A | Ersatzmassnahme unbenutzt Bit 26 | 0/1 | -- | 0x04000000 | -- | - | - | - |
| 0x2B | Ersatzmassnahme unbenutzt Bit 27 | 0/1 | -- | 0x08000000 | -- | - | - | - |
| 0x2C | Ersatzmassnahme unbenutzt Bit 28 | 0/1 | -- | 0x10000000 | -- | - | - | - |
| 0x2D | Ersatzmassnahme unbenutzt Bit 29 | 0/1 | -- | 0x20000000 | -- | - | - | - |
| 0x2E | Ersatzmassnahme unbenutzt Bit 30 | 0/1 | -- | 0x40000000 | -- | - | - | - |
| 0x2F | Ersatzmassnahme unbenutzt Bit 31 | 0/1 | -- | 0x80000000 | -- | - | - | - |
| 0x30 | Sensorfehler FDYS Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x31 | Gradient Fehlerverdacht FDYS Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x32 | Gradient Fehler FDYS Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x33 | Signal Peak Fehler FDYS Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x34 | Offsetueberwachung Fehler FDYS Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x35 | Empfindlichkeits Ueberwachung Fehler FDYS Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x36 | Roh-Redundanz Fehlerverdacht FDYS Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x37 | Roh-Redundanz Fehler FDYS Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x38 | unbenutzt FDYS Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x39 | Referenz Redundanz Fehlerverdacht FDYS Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x3A | Referenz Redundanz Fehler FDYS Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x3B | unbenutzt FDYS Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x3C | Fehler im Sensorcluster 1 FDYS Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x3D | Fehler im Sensorcluster 2 FDYS Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x3E | unbenutzt FDYS Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x3F | unbenutzt FDYS Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x40 | Lenkwinkelgradient Fehlerverdacht LWG Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x41 | Lenkwinkelgradient Fehler LWG Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x42 | Lenkwinkel Peak Fehler LWG Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x43 | unbenutzt LWG Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x44 | Lenkwinkeloffset Fehlerverdacht LWG Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x45 | Lenkwinkeloffset Fehler LWG Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x46 | Winkelsummengleichung Fehlerverdacht LWG Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x47 | Winkelsummengleichung Fehler LWG Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x48 | unbenutzt LWG Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x49 | unbenutzt LWG Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x4A | unbenutzt LWG Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x4B | unbenutzt LWG Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x4C | unbenutzt LWG Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x4D | unbenutzt LWG Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x4E | unbenutzt LWG Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x4F | unbenutzt LWG Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x50 | Can Signal Fehlerwert des Maincontrollers SZL LWDS Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x51 | Can Signal Fehlerwert des Subcontrollers SZL LWDS Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x52 | Can Signal Timeout des Maincontrollers SZL LWDS Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x53 | Can Signal Timeout des Subcontrollers SZL LWDS Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x54 | Can Signal SZL in diesem Zündungszyklus nie dagewesen LWDS Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x55 | SZL Winkel außerhalb erwartetem Band LWDS Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x56 | Differenz zwischen redundaten Lenkwinkelsignalen ist zu groß LWDS Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x57 | Differenz nach Timeout zwischen aufeinanderfolgenden Signalwerten zu groß LWSD Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x58 | Kein 2uC SZL LWDS Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x59 | SZL neu verbaut oder neu abgeglichen LWDS Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x5A | SZL Typ wurde nicht empfangen LWDS Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x5B | unbenutzt LWDS Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x5C | unbenutzt LWDS Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x5D | unbenutzt LWDS Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x5E | unbenutzt LWDS Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x5F | unbenutzt LWDS Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x60 | Fehler Integral 1 MDYN Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x61 | Fehler Integral 2 MDYN Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x62 | unbenutzt MDYN Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x63 | unbenutzt MDYN Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x64 | unbenutzt MDYN Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x65 | unbenutzt MDYN Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x66 | unbenutzt MDYN Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x67 | unbenutzt MDYN Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x68 | unbenutzt MDYN Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x69 | unbenutzt MDYN Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x6A | unbenutzt MDYN Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x6B | unbenutzt MDYN Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x6C | unbenutzt MDYN Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x6D | unbenutzt MDYN Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x6E | unbenutzt MDYN Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x6F | unbenutzt MDYN Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x70 | GMK keine Lenkanforderung Bit 0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x71 | GMK Lenkanforderung Bit 1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x72 | GMK irreversibel deaktiviert Bit 2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x73 | GMK Timeout Bit 3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x74 | GMK Fehlerwert Bit 4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x75 | GMK CRC/Alive Fehler Bit 5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x76 | GMK Teilsollwert zu hoch Bit 6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x77 | GMK Regelung zu lang Bit 7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x78 | GMK Teilsollwert ins Modell ungleich NULL Bit 8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x79 | DSC Status passiv Bit 9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x7A | DSC Status defekt Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x7B | DSC Status DTC Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x7C | unbenutzt GMK Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x7D | ECO Status Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x7E | Motordynamik SW1 Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x7F | Signalfehler AY,RR Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0xFF | ohne Bedeutung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### HARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxx00 | 100 | Allgemeiner Fehler |
| xxxxxx01 | 101 | FSP uebergelaufen |
| xxxxxx10 | 110 | FSP nicht uebergelaufen |
| xxxxxx11 | 111 | Status ungueltig |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x6001 | KFC_NEC_ERR_1 |
| 0x6002 | KFC_NEC_ERR_2 |
| 0x6003 | KFC_NEC_ERR_3 |
| 0x6004 | KFC_NEC_ERR_4 |
| 0x6005 | KFC_NEC_ERR_5 |
| 0x6006 | KFC_NEC_ERR_6 |
| 0x6007 | KFC_NEC_ERR_7 |
| 0x6008 | KFC_NEC_ERR_8 |
| 0x6009 | KFC_PROG |
| 0x600A | KFC_COMM |
| 0x600B | KFC_EEPROMNR |
| 0x600C | KFC_EEPROMHR |
| 0x600D | KFC_KLD |
| 0x600E | KFC_ROM |
| 0x600F | KFC_TBD15 |
| 0x6010 | KFC_CORE |
| 0x6011 | KFC_TBD17 |
| 0x6012 | KFC_OS |
| 0x6013 | KFC_MLW_INVALID |
| 0x6014 | KFC_VX_REF |
| 0x6015 | KFC_DPSI1 |
| 0x6016 | KFC_TBD22 |
| 0x6017 | KFC_DPSI2 |
| 0x6018 | KFC_TBD24 |
| 0x6019 | KFC_AY1 |
| 0x601A | KFC_TBD26 |
| 0x601B | KFC_AY2 |
| 0x601C | KFC_TBD28 |
| 0x601D | KFC_DEH |
| 0x601E | KFC_TBD30 |
| 0x601F | KFC_TBD31 |
| 0x6020 | KFC_LWS |
| 0x6021 | KFC_MPC_POSCTRL_ERR |
| 0x6022 | KFC_VINCOMP |
| 0x6023 | KFC_CONFIG |
| 0x6024 | KFC_MPC_BOOT_FLASH |
| 0x6025 | KFC_NEC_UPDATE |
| 0x6026 | KFC_MPC_SCI_ERR |
| 0x6027 | KFC_INV_SER_SLZ |
| 0x6028 | KFC_GEST_1 |
| 0x6029 | KFC_GEST_2 |
| 0x602A | KFC_GEST_3 |
| 0x602B | KFC_LOW_VOLTAGE |
| 0x602C | KFC_LWS_FS |
| 0x602D | KFC_LWS_FS_OFF |
| 0x602E | KFC_SENSOR_DRIVE |
| 0x602F | KFC_CANA |
| 0x6030 | KFC_CANB |
| 0x6031 | KFC_CANA_Y1 |
| 0x6032 | KFC_CANA_Y2 |
| 0x6033 | KFC_CANA_DSC_VWHL |
| 0x6034 | KFC_CANA_LWSRAD |
| 0x6035 | KFC_CANA_DSC_REGULATION |
| 0x6036 | KFC_CANA_SZL_LWDS |
| 0x6037 | KFC_TBD55 |
| 0x6038 | KFC_TBD56 |
| 0x6039 | KFC_CANB_DSC_STAT |
| 0x603A | KFC_CANB_DME_TORQ1 |
| 0x603B | KFC_CANB_DME_TORQ3 |
| 0x603C | KFC_CANB_DME_MOTORDAT |
| 0x603D | KFC_GMK |
| 0x603E | KFC_CANB_CAS_KLEMMEN |
| 0x603F | KFC_TBD63 |
| 0x6040 | KFC_CANB_KI_KM |
| 0x6041 | KFC_TBD65 |
| 0x6042 | KFC_CANA_SZL_LWDS_INIT |
| 0x6043 | KFC_RSCAN |
| 0x6044 | KFC_TBD68 |
| 0x6101 | NKFC_CAN |
| 0x6102 | NKFC_CCU |
| 0x6103 | NKFC_EEPROMNR |
| 0x6104 | NKFC_US |
| 0x6105 | NKFC_EPROM |
| 0x6106 | NKFC_IWD |
| 0x6107 | NKFC_COMP |
| 0x6108 | NKFC_RAM |
| 0x6109 | NKFC_RELAIS |
| 0x610A | NKFC_SMCURR |
| 0x610B | NKFC_SMPOS |
| 0x610C | NKFC_SMVOLT |
| 0x610D | NKFC_PROG |
| 0x610E | NKFC_EEPROMHR |
| 0x610F | NKFC_MOD_MC |
| 0x6110 | NKFC_BRAKE |
| 0x6111 | NKFC_COMM |
| 0x6112 | NKFC_MTEMP |
| 0x6113 | NKFC_LWSSUPP |
| 0x6114 | NKFC_DPOP |
| 0x6115 | NKFC_MPC |
| 0x6116 | NKFC_MPC_SUBS_1 |
| 0x6117 | NKFC_MPC_SUBS_2 |
| 0x6118 | NKFC_MPC_SUBS_3 |
| 0x6119 | NKFC_MPC_SUBS_4 |
| 0x611A | NKFC_MPC_SUBS_5 |
| 0x611B | NKFC_MPC_SUBS_6 |
| 0x611C | NKFC_MPC_SUBS_7 |
| 0x611D | NKFC_MPC_SUBS_8 |
| 0x611E | NKFC_MPC_SUBS_9 |
| 0x611F | NKFC_MTEMP_SENS |
| 0x6120 | NKFC_EN_CHOKE |
| 0x6121 | NKFC_ST |
| 0x6122 | NKFC_ECO |
| 0x6123 | NKFC_COMP_CAN |
| 0x6124 | NKFC_DEBUG_ACTIVE |
| 0x6125 | NKFC_SELFLOCK |
| 0x6126 | NKFC_CANA_WHEELSPEED |
| 0x6127 | NKFC_LOWVOLT |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00002211 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | INFO_A | INFO_B | INFO_C | INFO_D |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Reihenfolge der Ablage | - | -- | unsigned char | - | - | - | - |
| 0x02 | Position im FSP | - | -- | unsigned char | - | - | - | - |
| 0x10 | ZF-LS FehlerCode | - | high | unsigned int | -- | - | - | - |
| 0x11 | ZF-LS FehlerArt | - | high | unsigned int | -- | - | - | - |
| 0x12 | ZF-LS Statuswort | Hex | high | unsigned int | -- | - | - | - |
| 0x20 | Fahrzeuggeschwindigkeit | km/h | -- | signed char | -- | 2 | 1 | 0 |
| 0x21 | Querbeschleunigung | m/(s*s) | -- | signed char | -- | 1 | 7 | 0 |
| 0x22 | Gierrate | rad/s | -- | signed char | -- | 1 | 70 | 0 |
| 0x23 | Summenlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x24 | Fahrerlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x25 | Versorgungsspannung | Volt | -- | unsigned char | -- | 1 | 12.75 | 0 |
| 0x26 | ohne Bedeutung | - | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x27 | Weckleitung | - | -- | unsigned char | - | - | - | - |
| 0x28 | Klemme15 | - | -- | unsigned char | - | - | - | - |
| 0x29 | SG-Stati | - | -- | unsigned char | - | - | - | - |
| 0x2A | Sperrenstatus | - | -- | unsigned char | - | - | - | - |
| 0x30 | Ersatzmassnahmen | Hex | high | signed long | -- | - | - | - |
| 0x40 | DTC spezifisch | Hex | high | unsigned int | -- | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxx00 | 100 | Allgemeiner Fehler |
| xxxxxx01 | 101 | NEC Fehlerspeicher uebergelaufen |
| xxxxxx10 | 110 | MPC Fehlerspeicher uebergelaufen |
| xxxxxx11 | 111 | Ueberlauf ungueltig |
| xxxx00xx | 200 | Allgemeiner Fehler |
| xxxx01xx | 201 | AFS ausgefallen |
| xxxx10xx | 210 | AFS gestoert |
| xxxx11xx | 211 | Status ungueltig |

### LOWLEVEL

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x01 | 0x02 |

### SYSTEMSTATE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B |

### ERRORSTATE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR | UW29_NR | UW30_NR | UW31_NR | UW32_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 32 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x1A | 0x1B | 0x1C | 0x1D | 0x1E | 0x1F | 0x20 | 0x21 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 | 0x27 | 0x28 | 0x29 | 0x2A | 0x2B | 0x2C | 0x2D | 0x2E | 0x2F |

### DPSI

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 | 0x37 | 0x38 | 0x39 | 0x3A | 0x3B | 0x3C | 0x3D | 0x3E | 0x3F |

### DEH

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x40 | 0x41 | 0x42 | 0x43 | 0x44 | 0x45 | 0x46 | 0x47 | 0x48 | 0x49 | 0x4A | 0x4B | 0x4C | 0x4D | 0x4E | 0x4F |

### LWS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x50 | 0x51 | 0x52 | 0x53 | 0x54 | 0x55 | 0x56 | 0x57 | 0x58 | 0x59 | 0x5A | 0x5B | 0x5C | 0x5D | 0x5E | 0x5F |

### MDYN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x60 | 0x61 | 0x62 | 0x63 | 0x64 | 0x65 | 0x66 | 0x67 | 0x68 | 0x69 | 0x6A | 0x6B | 0x6C | 0x6D | 0x6E | 0x6D |

### PROZESSORSTATI

| PROZ_STATI_NR | PROZ_STATI_TEXT |
| --- | --- |
| 0x00 | POWER_OFF |
| 0x01 | PRE_INITIALISATION |
| 0x02 | INITIALISATION |
| 0x03 | PRE_DRIVE |
| 0x04 | NORMAL_MODE |
| 0x05 | POST_RUN_MODE |
| 0x06 | ERROR_MODE |
| 0xFF | unbekannter Prozessorstatus |

### CURRENTOPMODESTATI

| COPM_STATI_NR | COPM_STATI_TEXT |
| --- | --- |
| 0x01 | SetOMInitialisation |
| 0x02 | SetOMStandBy |
| 0x03 | SetOMDrive |
| 0x04 | SetOMLimpHome |
| 0xFF | unbekannter Betriebssystemstatus |

### DPRAMSTATI

| DPRAM_STATI_NR | DPRAM_STATI_TEXT |
| --- | --- |
| 0x00 | n.d. |
| 0x01 | i.O. |
| 0x02 | n.i.O. |
| 0xFF | unbekannter DPRAM Status |

### EINAUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0xFF | unbekannter Status |

### GUEROTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT gueltig |
| 0x01 | gueltig |
| 0x02 | nicht definiert |
| 0xFF | unbekannter Status |

### BITFKTAFS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| BIT0_EIN | 0 | 0x01 | 0x01 |
| BIT0_AUS | 0 | 0x01 | 0x00 |
| BIT1_EIN | 0 | 0x02 | 0x02 |
| BIT1_AUS | 0 | 0x02 | 0x00 |
| BIT2_EIN | 0 | 0x04 | 0x04 |
| BIT2_AUS | 0 | 0x04 | 0x00 |
| BIT3_EIN | 0 | 0x08 | 0x08 |
| BIT3_AUS | 0 | 0x08 | 0x00 |

### STATUSCANFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nachricht i.O. |
| 0x02 | Nachricht init |
| 0x04 | Nachricht timeout |
| 0x08 | Nachricht Inhalt ungueltig |
| 0x10 | Nachrichten Ueberpruefung fehlerhaft |
| 0x20 | Nachricht Sampling |
| 0xFF | unbekannter CAN Fehler Status |

### GUELWS

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT gueltig |
| 0x01 | gueltig |
| 0xFF | unbekannter Status |

### GUELWD

| WERT | TEXT |
| --- | --- |
| 0x00 | gueltig |
| 0x01 | NICHT gueltig |
| 0x02 | Fehler |
| 0xFF | unbekannter Status |

### MOTORDYN

| WERT | TEXT |
| --- | --- |
| 0x00 | i.O., volle Dynamik |
| 0x03 | Abschaltung AFS |
| 0xFF | unbekannter Status |

### GUEDSC

| WERT | TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | passiv |
| 0x02 | defekt |
| 0x04 | Traktionsmodus |
| 0x06 | Unterspannung DSC |
| 0x07 | Signal ungueltig |
| 0xFF | unbekannter Status |

### REGELDSC

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Regelung |
| 0x01 | ABS Regelung |
| 0x02 | ASC Regelung |
| 0x04 | DSC Regelung |
| 0x08 | HBA Regelung |
| 0x10 | MSR Regelung |
| 0x20 | EBV Regelung |
| 0xFF | Signal ungueltig |

### NECFLASH

| WERT | TEXT |
| --- | --- |
| 0x00 | FLASH_BOOT |
| 0x01 | FLASH_DRIVE |
| 0x02 | FLASH_BBIND |
| 0x03 | FLASH_NOT |
| 0x04 | FLASH_UNDEF |
| 0xFF | FLASH ungueltig |

### STATUSWORTPRUEFBEDINGUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Pruefbedingung nicht erreicht |
| 0x0001 | Pruefbedingung erreicht |
| 0xFFFF | unbekannter Fehler |

### STATUSWORTFEHLER

| WERT | TEXT |
| --- | --- |
| 0x0000 | Fehler nicht vorhanden |
| 0x0002 | Fehler vorhanden |
| 0xFFFF | unbekannter Fehler |

### STATUSWORTSWZYKLUS

| WERT | TEXT |
| --- | --- |
| 0x0000 | Fehler im aktu. SW-Zyklus nicht erkannt |
| 0x0004 | Fehler im aktu. SW-Zyklus erkannt |
| 0xFFFF | unbekannter Fehler |

### STATUSWORTFILTERUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Fehler nach Filterung nicht vorhanden |
| 0x0008 | Fehler nach Filterung vorhanden |
| 0xFFFF | unbekannter Fehler |

### STATUSWORTERSATZFKT

| WERT | TEXT |
| --- | --- |
| 0x0000 | Ersatzfunktion nicht aktiv |
| 0x0010 | Ersatzfunktion aktiv |
| 0xFFFF | unbekannter Fehler |

### STATUSWORTFEHLERS

| WERT | TEXT |
| --- | --- |
| 0x0000 | statischer Fehler |
| 0x0020 | sporadischer Fehler |
| 0xFFFF | unbekannter Fehler |

### STATUSWORTSCHATTEN

| WERT | TEXT |
| --- | --- |
| 0x0000 | Fehler nicht im Shadow |
| 0x0040 | Fehler im Shadow |
| 0xFFFF | unbekannter Fehler |

### MPCFEHLERCODE

| WERT | CODE | TEXT |
| --- | --- | --- |
| 0x0001 | KFC_NEC_ERR_1 | Error from NEC |
| 0x0002 | KFC_NEC_ERR_2 | Error from NEC |
| 0x0003 | KFC_NEC_ERR_3 | Error from NEC |
| 0x0004 | KFC_NEC_ERR_4 | Error from NEC |
| 0x0005 | KFC_NEC_ERR_5 | Error from NEC |
| 0x0006 | KFC_NEC_ERR_6 | Error from NEC |
| 0x0007 | KFC_NEC_ERR_7 | Error from NEC |
| 0x0008 | KFC_NEC_ERR_8 | Error from NEC |
| 0x0009 | KFC_PROG | Program error |
| 0x000A | KFC_COMM | Communication error |
| 0x000B | KFC_EEPROMNR | EEPROM No Risk |
| 0x000C | KFC_EEPROMHR | EEPROM High Risk |
| 0x000D | KFC_KLD | KLD Position/Speed |
| 0x000E | KFC_ROM | ROM-Test |
| 0x000F | KFC_TBD15 | TBD15 |
| 0x0010 | KFC_CORE | Core-Test |
| 0x0011 | KFC_TBD17 | TBD17 |
| 0x0012 | KFC_OS | ERCOSEK Fehler |
| 0x0013 | KFC_MLW_INVALID | Motorlagewinkel ungueltig |
| 0x0014 | KFC_VX_REF | Geschwindigkeit unklar |
| 0x0015 | KFC_DPSI1 | Gierratensensor 1 |
| 0x0016 | KFC_TBD22 | TBD22 |
| 0x0017 | KFC_DPSI2 | Gierratensensor 2 |
| 0x0018 | KFC_TBD24 | TBD24 |
| 0x0019 | KFC_AY1 | Querbeschleunigungssensor 1 |
| 0x001A | KFC_TBD26 | TBD26 |
| 0x001B | KFC_AY2 | Querbeschleunigungssensor 2 |
| 0x001C | KFC_TBD28 | TBD28 |
| 0x001D | KFC_DEH | Lenkwinkelueberwachung |
| 0x001E | KFC_TBD30 | TBD30 |
| 0x001F | KFC_TBD31 | TBD31 |
| 0x0020 | KFC_LWS | Redundanzueberwachung Lenkradwinkel oben |
| 0x0021 | KFC_MPC_POSCTRL_ERR | Motordynamikueberwachung |
| 0x0022 | KFC_VINCOMP | Fahrgestellnummernvergleich |
| 0x0023 | KFC_CONFIG | Codierdatenfehler |
| 0x0024 | KFC_MPC_BOOT_FLASH | SG haengt im Bootblock oder Flashdatenfehler |
| 0x0025 | KFC_NEC_UPDATE | NEC Prozessor macht gerade einen Update oder haengt im Update |
| 0x0026 | KFC_MPC_SCI_ERR | kein 2 Prozessor SZL |
| 0x0027 | KFC_INV_SER_SLZ | ungueltige Seriennummer vom SZL |
| 0x0028 | KFC_GEST_1 | AFS gestoert 1 |
| 0x0029 | KFC_GEST_2 | AFS gestoert 2 |
| 0x002A | KFC_GEST_3 | AFS gestoert 3 |
| 0x002B | KFC_LOW_VOLTAGE | Unterspannung, kein Abschalten |
| 0x002C | KFC_LWS_FS | Fehler Summenlenkwinkelbeziehung |
| 0x002D | KFC_LWS_FS_OFF | keine Ueberwachung der Winkelsummenbeziehung |
| 0x002E | KFC_SENSOR_DRIVE | positive Identifikation des Fahrdynamiksensors |
| 0x002F | KFC_CANA | Error of CANA controller (F-CAN) |
| 0x0030 | KFC_CANB | Error of CANB controller (PT-CAN) |
| 0x0031 | KFC_CANA_Y1 | Error ID Gierrate Antwort 1 |
| 0x0032 | KFC_CANA_Y2 | Error ID Gierrate Antwort 2 |
| 0x0033 | KFC_CANA_DSC_VWHL | Error ID Radgeschwindigkeit |
| 0x0034 | KFC_CANA_LWSRAD | Error ID Summenlenkwinkel |
| 0x0035 | KFC_CANA_DSC_REGULATION | Error ID Regeleingriffe DSC AFS |
| 0x0036 | KFC_CANB_SZL_LWDS | Error ID Lenkradwinkel oben |
| 0x0037 | KFC_TBD55 | TBD55 |
| 0x0038 | KFC_TBD56 | TBD56 |
| 0x0039 | KFC_CANB_DSC_STAT | Error ID Status DSC |
| 0x003A | KFC_CANB_DME_TORQ1 | Error ID DME Bremslichtschalter |
| 0x003B | KFC_CANB_DME_TORQ3 | Error ID DME Motormoment |
| 0x003C | KFC_CANB_DME_MOTORDAT | Error ID DME Motordaten |
| 0x003D | KFC_GMK | GMK Fehler |
| 0x003E | KFC_CANB_CAS_KLEMMEN | Error ID CAS Klemmenstatus |
| 0x003F | KFC_TBD63 | TBD63 |
| 0x0040 | KFC_CANB_KI_KM | Error ID Kombianzeige Kilometerstand |
| 0x0041 | KFC_TBD65 | TBD65 |
| 0x0042 | KFC_CANA_SZL_LWDS_INIT | Error ID SZL Init Phase |
| 0x0043 | KFC_RSCAN | DPRAM Fehler in der Aufstartphase |
| 0x0044 | KFC_TBD68 | TBD68 |
| 0xFFFF | ------------ | unbekannte MPC Fehlernummer |

### NECFEHLERCODE

| WERT | CODE | TEXT |
| --- | --- | --- |
| 0x0000 | NKFC_OK | kein Fehler eingetragen |
| 0x0001 | NKFC_CAN | CAN |
| 0x0002 | NKFC_CCU | outputstage temperature |
| 0x0003 | NKFC_EEPROMNR | EEPROM: no security risk |
| 0x0004 | NKFC_US | sensor supply voltage |
| 0x0005 | NKFC_EPROM | ROM checksum |
| 0x0006 | NKFC_IWD | intelligent watchdog |
| 0x0007 | NKFC_COMP | diversitaeres Rechnen |
| 0x0008 | NKFC_RAM | RAM |
| 0x0009 | NKFC_RELAIS | relais |
| 0x000A | NKFC_SMCURR | servomotor current |
| 0x000B | NKFC_SMPOS | servomotor positionsensor |
| 0x000C | NKFC_SMVOLT | servomotor phase voltage |
| 0x000D | NKFC_PROG | program error |
| 0x000E | NKFC_EEPROMHR | EEPROM: high security risk |
| 0x000F | NKFC_MOD_MC | module MC, program error |
| 0x0010 | NKFC_BRAKE | locking pin |
| 0x0011 | NKFC_COMM | intercommunication error with MPC |
| 0x0012 | NKFC_MTEMP | temp. of motorsensor |
| 0x0013 | NKFC_LWSSUPP | supply for LWS |
| 0x0014 | NKFC_DPOS | desired position |
| 0x0015 | NKFC_MPC | NEC detected MPC error(Core;Mode) |
| 0x0016 | NKFC_MPC_SUBS_1 | Error from MPC |
| 0x0017 | NKFC_MPC_SUBS_2 | Error from MPC |
| 0x0018 | NKFC_MPC_SUBS_3 | Error from MPC |
| 0x0019 | NKFC_MPC_SUBS_4 | Error from MPC |
| 0x001A | NKFC_MPC_SUBS_5 | Error from MPC |
| 0x001B | NKFC_MPC_SUBS_6 | Error from MPC |
| 0x001C | NKFC_MPC_SUBS_7 | Error from MPC |
| 0x001D | NKFC_MPC_SUBS_8 | Error from MPC |
| 0x001E | NKFC_MPC_SUBS_9 | Error from MPC |
| 0x001F | NKFC_MTEMP_SENS | motortemp. sensor failed |
| 0x0020 | NKFC_EN_CHOKE | supply for driver to low |
| 0x0021 | NKFC_ST | SERVO Ventil Error |
| 0x0022 | NKFC_ECO | ECO Ventil Error |
| 0x0023 | NKFC_COMP_CAN | AFS Teilsollwerte F-CAN |
| 0x0024 | NKFC_DEBUG_ACTIVE | NEC Debug Botschaften aktiv |
| 0x0025 | NKFC_SELFLOCK | Selbsthemmungsueberwachung |
| 0x0026 | NKFC_CANA_WHEELSPEED | Botschaft Radgeschwindigkeiten |
| 0x0027 | NKFC_LOWVOLT | Versorgungsspannung Kl. 30 (< 7.5 Volt) |
| 0xFFFF | ------------ | unbekannte NEC Fehlernummer |

### NECFEHLERTYP

| WERT | TYPE | TEXT |
| --- | --- | --- |
| 0x0000 | KFA_GEN | general fault type(no further fault type info) |
| 0x0001 | KFA_SCP | short circuit to plus |
| 0x0002 | KFA_SCM | short circuit to ground |
| 0x0003 | KFA_OC | open circuit |
| 0x0004 | KFA_SCPOC | short circuit to plus or open circuit |
| 0x0005 | KFA_SCMOC | short circuit to ground or open circuit |
| 0x0006 | KFA_THI | too high |
| 0x0007 | KFA_TLOW | too low |
| 0x0008 | KFA_NCHA | no change |
| 0x0009 | KFA_TMCHA | too much change |
| 0x000A | KFA_WREL | wrong relationship |
| 0x000B | KFA_WCOMB | wrong combination |
| 0x000C | KFA_WCKSM | wrong checksum |
| 0x000D | KFA_MCURR | motor current |
| 0x000E | KFA_CI_1 | interpolate characteristics program error 1 |
| 0x000F | KFA_CI_2 | interpolate characteristics program error 2 |
| 0x0010 | KFA_CC | central process program error |
| 0x0011 | KFA_TC | max torque control program error |
| 0x0012 | KFA_CMP_1 | compare error 1 ms task |
| 0x0013 | KFA_CMP_10 | compare error 10 ms task |
| 0x0014 | KFA_CMP_100 | compare error 100 ms task |
| 0x0015 | KFA_WD | watchdog error |
| 0x0016 | KFA_SPI | watchdog SPI(seriell parallel interface) error |
| 0x0017 | KFA_CNT | watchdog error counter |
| 0x0018 | KFA_STTOHI | steering torque to high |
| 0x0019 | KFA_STTOLO | steering torque to low |
| 0x001A | KFA_SC | steering controller program error |
| 0x001B | KFA_OFFSET | offset |
| 0x001C | KFA_EE_UD_I | EEPROM user data I error |
| 0x001D | KFA_EE_UD_II | EEPROM user data II error |
| 0x001E | KFA_EE_FAC | EEPROM factory data error |
| 0x001F | KFA_EE_CAL | EEPROM calibration data error |
| 0x0020 | KFA_RA_MC | range error in module MC Volt |
| 0x0021 | KFA_RA_PWM | range error in module MC PWM |
| 0x0022 | KFA_PROGSEQ | program sequence |
| 0x0023 | KFA_SYSMOD | check system mode and operating system |
| 0x0024 | KFA_ERRORHANDLER | error handler cannot filter error; MPC is in error mode |
| 0x0025 | KFA_CORE | core error |
| 0x0026 | KFA_DRIVER | output stage driver error |
| 0x0027 | KFA_WR_ER | write error |
| 0x0028 | KFA_RD_ER | read error |
| 0x0029 | KFA_CAN_C | controller state |
| 0x002A | KFA_CAN_M | message state |
| 0x002B | KFA_CAN_T | timeout |
| 0x002C | KFA_ERFLAG | error flag from CAN |
| 0x002D | KFA_WD_REL | watchdog shut off; error relay |
| 0x002E | KFA_WD_OUT | watchdog shut off; error output stage |
| 0x002F | KFA_WD_RESP | incorrect response time |
| 0x0030 | KFA_ADFROZEN | frozen AD converter |
| 0x0031 | KFA_DISCHARGE | tbd |
| 0x0032 | KFA_LKMPC | MPC can t switch off; relais SC plus |
| 0x0033 | KFA_LKNEC | NEC can t switch off |
| 0x0034 | KFA_LKWD | Module MC, program error |
| 0x0035 | KFA_I3_NOT_VALID | CG 120 can t switch off |
| 0x0036 | KFA_OCTMP | open circuit temp. sensor |
| 0x0037 | KFA_SCTMP | short circuit temp. sensor |
| 0x0038 | KFA_DXSERVER | DX Dualport RAM |
| 0x0039 | KFA_STACK | mpu Stack |
| 0x003A | KFA_GEN_1 | frozen AD converter |
| 0x003B | KFA_GEN_2 | tbd |
| 0x003C | KFA_GEN_3 | MPC can t switch off; relais SC plus |
| 0x003D | KFA_GEN_4 | NEC can t switch off |
| 0x003E | KFA_GEN_5 | Module MC, program error |
| 0x003F | KFA_GEN_6 | CG 120 can t switch off |
| 0x0040 | KFA_GEN_7 | tbd |
| 0x0041 | KFA_GEN_8 | tbd |
| 0x0042 | KFA_GEN_9 | tbd |
| 0x0043 | KFA_GEN_10 | tbd |
| 0x0044 | KFA_POS_ERR | motorposition |
| 0x0045 | KFA_SPEED_ERR | motorspeed |
| 0x0046 | KFA_TIMEOUT | Timeout |
| 0x0047 | KFA_SIGN_CH0 | Sign change |
| 0x0048 | KFA_CL | Client |
| 0x0049 | KFA_EE_AD | EEprom Adaptive Data |
| 0x004A | KFA_PLAUS | General plausi error |
| 0x004B | KFA_CAN_ERROR_PASSIVE | CAN Bus driver passive |
| 0x004C | KFA_CAN_BUS_OFF | CAN Bus driver off |
| 0x004D | KFA_CAN_TIMEOUT | CAN Timeout |
| 0x004E | KFA_CAN_SIG_ERROR | CAN value error |
| 0x004F | KFA_VOTER_0 | calculation error |
| 0x0050 | KFA_VOTER_1 | velocitiy error |
| 0x0051 | KFA_VOTER_2 | sequence error |
| 0x0052 | KFA_VOTER_3 | synchronisation error |
| 0x0053 | KFA_VERIFY | tbd |
| 0x0054 | KFA_DRV_LV | Driver Low Voltage |
| 0x0055 | KFA_DRV_SC | Driver Shortcut |
| 0x0056 | KFA_DRV_OT | Driver over temp |
| 0x0057 | KFA_SHORTCUT_LOAD_IN | Masseschluss Zuleitung SERVO oder ECO |
| 0x0058 | KFA_LOAD_BRACKE_OR_SHORTCUT_OUT | Lastabriss oder Masseschluss Rueckleitung oder Uebertemperatur |
| 0x0059 | KFA_CAN_HW | CAN Hardwaredefekt |
| 0xFFFF | ---------------- | unbekannter NEC Fehlertyp bzw Art |

### AUSEIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Ein |
| 0x01 | Aus |
| 0xFF | unbekannter Status |

### SPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sperre geschlossen |
| 0x01 | Sperre oeffnen: starten |
| 0x02 | Sperre oeffnet |
| 0x03 | Sperre geoeffnet |
| 0x04 | Wartezeit Motorauslauf: starten |
| 0x05 | Warten bis Motor steht |
| 0xFF | unbekannter Sperrenstatus |

### MPCREV

| WERT | TEXT |
| --- | --- |
| 0x3620 | rev B 0L08N |
| 0xFFFF | unbekannte MPC Maske |

### BITGMKAFS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine GMK-Lenkanforderung aber GMK-Funktion |
| 0x01 | GMK-Lenkanforderung |
| 0x02 | GMK-reversibel deaktiviert |
| 0x03 | GMK-irreversibel deaktiviert |
| 0xFF | unbekannter Status |

### GMKQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | GMK-Anforderung DSC |
| 0x01 | keine GMK-Anforderung DSC |
| 0xFF | unbekannter Status |

### GMKQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | nicht-zuruecknehmen der Gierratenregelung |
| 0x01 | zuruecknehmen der Gierratenregelung |
| 0xFF | unbekannter Status |

### GMKQUALBIT2

| BIT2_NR | BIT2_TEXT |
| --- | --- |
| 0x00 | kein temporaerer Fehler DSC |
| 0x01 | temporaerer Fehler DSC |
| 0xFF | unbekannter Status |

### GMKQUALBIT3

| BIT3_NR | BIT3_TEXT |
| --- | --- |
| 0x00 | kein Fehler DSC |
| 0x01 | Fehler DSC |
| 0xFF | unbekannter Status |

### GMKQUALBIT4

| BIT4_NR | BIT4_TEXT |
| --- | --- |
| 0x00 | kein temporaerer Fehler AFS |
| 0x01 | temporaerer Fehler AFS |
| 0xFF | unbekannter Status |

### GMKQUALBIT5

| BIT5_NR | BIT5_TEXT |
| --- | --- |
| 0x00 | kein Fehler AFS |
| 0x01 | Fehler AFS |
| 0xFF | unbekannter Status |

### LWGQUADRANT

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | Quadrant gueltig |
| 0x01 | Quadrant nicht gueltig |
| 0xFF | unbekannter Status |

### SZLPROZINFO

| SZL_PROZ_NR | SZL_PROZ_TEXT |
| --- | --- |
| 0x00 | SZL Ein-Prozessor ; kein AFS |
| 0xA0 | SZL Zwei-Prozessor ; AFS |
| 0xFF | unbekannter Status |

### GMK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x70 | 0x71 | 0x72 | 0x73 | 0x74 | 0x75 | 0x76 | 0x77 | 0x78 | 0x79 | 0x7A | 0x7B | 0x7C | 0x7D | 0x7E | 0x7F |

### GMKQUALBIT6

| BIT6_NR | BIT6_TEXT |
| --- | --- |
| 0x00 | keine Ueberschreitung Betrag |
| 0x01 | Ueberschreitung Betrag |
| 0xFF | unbekannter Status |

### GMKQUALBIT7

| BIT7_NR | BIT7_TEXT |
| --- | --- |
| 0x00 | keine Ueberschreitung Zeit |
| 0x01 | Ueberschreitung Zeit |
| 0xFF | unbekannter Status |

### INFO_A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x01 | 0x02 | 0x10 | 0x11 | 0x12 |

### INFO_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x20 | 0x21 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 | 0x27 | 0x28 | 0x29 | 0x2A |

### INFO_C

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x30 |

### INFO_D

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x40 |

### MDYQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | untere Schwelle 1 |
| 0xFF | unbekannter Status |

### MDYQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | obere Schwelle 2 |
| 0xFF | unbekannter Status |

### LWDSQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | Nutzsignale vorhanden |
| 0x01 | keine Nutzsignale vorhanden |
| 0xFF | unbekannter Status |

### LWDSQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | kein Fehlerverdacht |
| 0x01 | Fehlerverdacht |
| 0xFF | unbekannter Status |

### LWDSQUALBIT2

| BIT2_NR | BIT2_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler (im aktiven Zuendungszyklus irreversiber Fehler) |
| 0xFF | unbekannter Status |

### LWDSQUALBIT3

| BIT3_NR | BIT3_TEXT |
| --- | --- |
| 0x00 | Ersatzsignal nicht vorhanden |
| 0x01 | Ersatzsignal wird gesendet (irreversiber Zustand im aktuellen Zuendungszyklus) |
| 0xFF | unbekannter Status |

### LWDSQUALBIT4

| BIT4_NR | BIT4_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler im Status Summenlenkwinkel oder Motorlagewinkel gesetzt |
| 0xFF | unbekannter Status |

### LWGQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | Nutzsignale vorhanden |
| 0x01 | keine Nutzsignale vorhanden |
| 0xFF | unbekannter Status |

### LWGQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | kein Fehlerverdacht |
| 0x01 | Fehlerverdacht |
| 0xFF | unbekannter Status |

### LWGQUALBIT2

| BIT2_NR | BIT2_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler (im aktiven Zuendungszyklus irreversibler Fehler) |
| 0xFF | unbekannter Status |

### LWGQUALBIT3

| BIT3_NR | BIT3_TEXT |
| --- | --- |
| 0x00 | Ersatzsignal nicht vorhanden |
| 0x01 | Ersatzsignal vorhanden |
| 0xFF | unbekannter Status |

### LWGQUALBIT4

| BIT4_NR | BIT4_TEXT |
| --- | --- |
| 0x00 | kein Fehler Ersatzsignal |
| 0x01 | Fehler Ersatzsignal (Fahrerlenk/Motorlage-winkel) |
| 0xFF | unbekannter Status |

### LWGQUALBIT5

| BIT5_NR | BIT5_TEXT |
| --- | --- |
| 0x00 | Sektor (Quadrant) bestimmt |
| 0x01 | Sektor (Quadrant) nicht bestimmt |
| 0xFF | unbekannter Status |

### LWGQUALBIT6

| BIT6_NR | BIT6_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler WSG |
| 0xFF | unbekannter Status |

### REFVXQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | Nutzsignal vorhanden |
| 0x01 | kein Nutzsignal vorhanden |
| 0xFF | unbekannter Status |

### REFVXQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | Nutzsignal sicher |
| 0x01 | Nutzsignal unsicher |
| 0xFF | unbekannter Status |

### REFVXQUALBIT2

| BIT2_NR | BIT2_TEXT |
| --- | --- |
| 0x00 | Fahrtrichtung sicher |
| 0x01 | Nutzsignal unsicher |
| 0xFF | unbekannter Status |

### REFVXQUALBIT3

| BIT3_NR | BIT3_TEXT |
| --- | --- |
| 0x00 | kein DF-Fehler |
| 0x01 | mindestens 1 DF-Fehler |
| 0xFF | unbekannter Status |

### AYQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | Nutzsignal vorhanden |
| 0x01 | kein Nutzsignal vorhanden |
| 0xFF | unbekannter Status |

### AYQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | Nutzsignal ueberwachbar |
| 0x01 | Nutzsignal nicht ueberwachbar, oder kein Abgleichwert von beiden Signalen |
| 0xFF | unbekannter Status |

### AYQUALBIT2

| BIT2_NR | BIT2_TEXT |
| --- | --- |
| 0x00 | Offsetabgleich vorhanden |
| 0x01 | kein Offsetabgleich vorhanden (auch kein EEPROM) |
| 0xFF | unbekannter Status |

### AYQUALBIT4

| BIT4_NR | BIT4_TEXT |
| --- | --- |
| 0x00 | kein Fehlerverdacht |
| 0x01 | Fehlerverdacht oder temporaerer Fehler |
| 0xFF | unbekannter Status |

### AYQUALBIT5

| BIT5_NR | BIT5_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler (im aktuellen Zuendungszyklus irreversibler Fehler) |
| 0xFF | unbekannter Status |

### RRQUALBIT0

| BIT0_NR | BIT0_TEXT |
| --- | --- |
| 0x00 | Nutzsignal vorhanden |
| 0x01 | kein Nutzsignal vorhanden |
| 0xFF | unbekannter Status |

### RRQUALBIT1

| BIT1_NR | BIT1_TEXT |
| --- | --- |
| 0x00 | Nutzsignal ueberwachbar |
| 0x01 | Nutzsignal nicht ueberwachbar, oder kein Abgleichwert von beiden Signalen |
| 0xFF | unbekannter Status |

### RRQUALBIT2

| BIT2_NR | BIT2_TEXT |
| --- | --- |
| 0x00 | Offsetabgleich vorhanden |
| 0x01 | kein Offsetabgleich vorhanden (auch kein EEPROM) |
| 0xFF | unbekannter Status |

### RRQUALBIT3

| BIT3_NR | BIT3_TEXT |
| --- | --- |
| 0x00 | Empfindlichkeitsabgleich vorhanden |
| 0x01 | Empfindlichkeitfehler oder kein Empfindlichkeitsabgleich vorhanden (auch kein EEPROM) |
| 0xFF | unbekannter Status |

### RRQUALBIT4

| BIT4_NR | BIT4_TEXT |
| --- | --- |
| 0x00 | kein Fehlerverdacht |
| 0x01 | Fehlerverdacht oder temporaerer Fehler |
| 0xFF | unbekannter Status |

### RRQUALBIT5

| BIT5_NR | BIT5_TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Fehler (im aktuellen Zuendungszyklus irreversibler Fehler) |
| 0xFF | unbekannter Status |

### BMWMODE

| WERT | TEXT |
| --- | --- |
| 0x01 | DES_MASTER_INITIALISATION |
| 0x02 | DES_MASTER_PRE_DRIVE |
| 0x04 | DES_MASTER_NORMAL_MODE |
| 0x08 | DES_MASTER_POST_RUN |
| 0x10 | DES_MASTER_POWER_OFF |
| 0x20 | DES_MASTER_ERROR_MODE |
| 0xFF | unbekannter Status |

### FERTIG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht fertig |
| 0x01 | fertig |
| 0xFF | unbekannter Status |

### DXJOB

| WERT | TEXT |
| --- | --- |
| 0x01 | DX_NOTHING |
| 0x02 | DX_WR_EEPROM |
| 0x03 | DX_RD_EEPROM |
| 0x04 | DX_WR_RAM |
| 0x05 | DX_RD_RAM_ROM |
| 0x06 | DX_STATUS |
| 0x07 | DX_STOP |
| 0x08 | DX_OK |
| 0x09 | DX_FSP_CLEAR_NEC |
| 0x0A | DX_FSP_SAVE_MPC |
| 0x0B | DX_FSP_RESTORE_MPC |
| 0x0C | DX_RD_NEC_FSP |
| 0x0D | DX_SWITCH_TO_BOOT |
| 0x0E | DX_CLR_FLASH_NEC |
| 0x0F | DX_FL_PROG |
| 0x10 | DX_VERI_NEC |
| 0x11 | DX_CHKSM |
| 0x12 | DX_RD_NEC_ID |
| 0x13 | DX_RESET_ALL |
| 0x14 | DX_AMBIENT_COND |
| 0x15 | DX_INIT_PARAMS |
| 0x16 | DX_INIT_RSCAN |
| 0xFF | unbekannter Status |

### DXSTATUS

| WERT | TEXT |
| --- | --- |
| 0xFE01 | DX_IDLE |
| 0xFD02 | DX_STARTING |
| 0xFC03 | DX_STARTING_READY |
| 0xFB04 | DX_MPC_WR_CHKSM |
| 0xFA05 | DX_MPC_WR_DPR |
| 0xF906 | DX_MPC_WR_READY |
| 0xF807 | DX_NEC_RD_PARA |
| 0xF708 | DX_NEC_RD_CHKSM |
| 0xF609 | DX_NEC_RD_DPR |
| 0xF50A | DX_NEC_DO_JOB |
| 0xF40B | DX_NEC_WR_CHKSM |
| 0xF30C | DX_NEC_WR_DPR |
| 0xF20D | DX_NEC_WR_READY |
| 0xF10E | DX_MPC_RD_PARA |
| 0xF00F | DX_MPC_RD_CHKSM |
| 0xEF10 | DX_MPC_RD_DPR |
| 0xEE11 | DX_BREAK |
| 0xED12 | DX_FINISH |
| 0xEC13 | DX_FAILED |
| 0xFFFF | unbekannter Status |

### STATUSLWGBIT0

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensorwert NICHT gueltig (LWS fehlerhaft) |
| 0x01 | Sensorwert gueltig |
| 0xFF | unbekannter Status |

### STATUSLWGBIT1

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor ist NICHT kalibriert |
| 0x01 | Sensor ist kalibriert |
| 0xFF | unbekannter Status |
