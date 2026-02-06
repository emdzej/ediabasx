# VDM_70.prg

## General

|  |  |
| --- | --- |
| File | VDM_70.prg |
| Type | PRG |
| Jobs | 83 |
| Tables | 35 |
| Origin | BMW EF-63 Tobias Schmid |
| Revision | 4.020 |
| Author | Conti-Temic CC-Elektronik Braun, Conti-Temic CC-Elektronik Schwarz, Conti-Temic CC-Elektronik Geweniger, Conti-Temic PC-FES Schuster |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Vertikal Dynamik Management |  |  |
| ORIGIN | string | BMW EF-63 Tobias Schmid |  |  |
| REVISION | string | 4.020 |  |  |
| AUTHOR | string | Conti-Temic CC-Elektronik Braun, Conti-Temic CC-Elektronik Schwarz, Conti-Temic CC-Elektronik Geweniger, Conti-Temic PC-FES Schuster |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.31 |  |  |
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

### STATUS_VDM

Liest den aktuellen Status des VDM-SG's KWP 2000: $21 ReadDataByLocalIdentifier $23 Status VDM lesen

_No arguments._

### STATUS_PIA

Liest die im VDM gespeicherten PIA-Daten aller Schlüssel KWP 2000: $21 ReadDataByLocalIdentifier $24 PIA-Daten auslesen

_No arguments._

### STEUERN_PIA

Schreibt die Einstellungen für alle Schlüssel KWP 2000: $3B WriteDataByLocalIdentifier $24 PIA-Daten schreiben

| Name | Type | Description |
| --- | --- | --- |
| VALUE_KEY_1 | unsigned int | Einstellung Schlüssel 1 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_KEY_2 | unsigned int | Einstellung Schlüssel 2 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_KEY_3 | unsigned int | Einstellung Schlüssel 3 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_KEY_4 | unsigned int | Einstellung Schlüssel 4 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_KEY_5 | unsigned int | Einstellung Schlüssel 5 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_LAST_FUNCTION | unsigned int | zuletzt verwendete Einstellung 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_DEFAULT | unsigned int | Default-Einstellung 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |
| VALUE_UNPERSONALISED | unsigned int | Einstellung Unpersonalisert / Werkstattmode 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |

### STEUERN_PIA_KEY

Schreibt die Einstellungen für einen Schlüssel KWP 2000: $3B WriteDataByLocalIdentifier $25 PIA-Daten schreiben

| Name | Type | Description |
| --- | --- | --- |
| NO_KEY | unsigned char | Nummer des Schlüssels, der gespeichert werden soll 0 -> Schlüssel 1 1 -> Schlüssel 2 2 -> Schlüssel 3 3 -> Schlüssel 4 4 -> Schlüssel 5 5 -> Default 6 -> Default 7 -> Default 8 -> Default 9 -> Default 10-> Unpersonalisiert / Werkstattmode 11-> Default 12-> Default 13-> Default 14-> Default 15-> Unpersonalisiert / Werkstattmode 16-> Last Function |
| VALUE_KEY | unsigned int | Einstellung Schlüssel 1 0 -> Komfort 1 -> Sport 2 -> Komfort mit Ersatzwerten 3 -> Sport mit Ersatzwerten 4 -> Festbestromung 5 -> Nullbestromung |

### STATUS_ANALOG_EINGAENGE

Lesen der Abgleichdaten für den Höhenstand KWP 2000: $21 ReadDataByLocalIdentifier $22 Analoge Eingaenge lesen

_No arguments._

### STEUERN_ABGLEICH_HOEHENSTAND

Schreiben der Abgleichdaten für den Höhenstand KWP 2000: $3B WriteDataByLocalIdentifier $21 HS-Abgleich

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_VL | char | Abweichung der Fahrzeughöhe vorne links vom Sollnullpunkt in mm (-125..125) |
| DELTA_HOEHE_VR | char | Abweichung der Fahrzeughöhe vorne rechts vom Sollnullpunkt in mm (-125..125) |
| DELTA_HOEHE_HL | char | Abweichung der Fahrzeughöhe hinten links vom Sollnullpunkt in mm (-125..125) |
| DELTA_HOEHE_HR | char | Abweichung der Fahrzeughöhe hinten rechts vom Sollnullpunkt in mm (-125..125) |

### STATUS_ABGLEICH_HOEHENSTAND

Lesen der Abgleichdaten für den Höhenstand KWP 2000: $21 ReadDataByLocalIdentifier $21 HS-Abgleich

_No arguments._

### STATUS_FAHRZEUGHOEHE

Lesen der Abgleichdaten für den Höhenstand KWP 2000: $21 ReadDataByLocalIdentifier $21 HS-Abgleich

_No arguments._

### STATUS_BUS_DIAGNOSE_MODUL

Liest die Bus-Diagnose-Daten des FlexRays KWP 2000: $21 ReadDataByLocalIdentifier $31 FR-Status auslesen

_No arguments._

### STEUERN_RESET_BUS_DIAGNOSE_MODUL

Setzt die Daten des FlexRay Busstatusmodul zurück KWP 2000: $3B ReadDataByLocalIdentifier $31 FR-Status schreiben

_No arguments._

### STATUS_WCET_LESEN

Liest die im VDM gespeicherten max. Laufzeiten aller Tasks KWP 2000: $21 ReadDataByLocalIdentifier $51 WCET auslesen

_No arguments._

### STEUERN_RESET_WCET

Setzt die maximal erkannten Tasklaufzeiten zurück KWP 2000: $3B ReadDataByLocalIdentifier $51 WCET zurücksetzen

_No arguments._

### STATUS_COMPILER_BOOTLOADER

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des MPC-Bootloader KWP 2000: $21 ReadDataByLocalIdentifier $A0 status_compiler_bootloader

_No arguments._

### STATUS_COMPILER_APPLIKATION

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung der Applikation KWP 2000: $21 ReadDataByLocalIdentifier $A1 status_compiler_applikation

_No arguments._

### STATUS_COMPILER_DAF

Auslesen der Compilerdaten des SW-Standes Infos über die Erstellung des DAF KWP 2000: $21 ReadDataByLocalIdentifier $A3 status_compiler_daf

_No arguments._

### _STATUS_READ_LL_ERROR

Liest die momentanen Stati der LL-Fehlerpruefung KWP 2000: $21 ReadDataByLocalIdentifier $20 interne Fehlerstati lesen interner TEMIC-Job

_No arguments._

### _STEUERN_LENKWINKEL_RESET

Setzt die Lernwerte für den Lenkwinkel zurück KWP 2000: $3B ReadDataByLocalIdentifier $40 Lenkwinkel zurücksetzen

_No arguments._

### _STATUS_TJA

Liest die Busstatistik des FlexRays KWP 2000: $31 ReadDataByLocalIdentifier $AF TJA-Status auslesen

_No arguments._

### _STEUERN_ERROR_INJEKTION

Zur Vorgabe von Fehlern KWP2000: $3B WriteDataByLocalIdentifier $30 Fehlerinjektion interner TEMIC-Job Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNUMMER | unsigned char | Dieser Fehler wird vorgegeben Auswahl über VDM-LH Teil 3 |
| RESET_ZAEHLER | unsigned char | So viele Zyklen wird der Fehler vorgegeben |
| PARAMETER | unsigned int | dieser Parameter wird job-spezifisch verwendet siehe VDM-LH Teil 3 |

### _STATUS_ERRCODE

Gibt den Errorcode und die Umwelt- bedingungen eines kritischen Fehlers zurück KWP 2000: $21 ReadDataByLocalIdentifier $35 Errorcode auslesen

_No arguments._

### _STEUERN_RESET_ERRCODE

Setzt den Errorcode und die Umweltbedingungen zurück KWP 2000: $3B ReadDataByLocalIdentifier $35 Errorcode und UBs schreiben

_No arguments._

### _STATUS_ANALOG_EINGAENGE

Lesen der Abgleichdaten für den Höhenstand KWP 2000: $21 ReadDataByLocalIdentifier $22 Analoge Eingaenge lesen

_No arguments._

### _STEUERN_XCP_FR

Freigabe oder Sperren der XCP-Schnittstelle über FlexRay KWP 2000: $3B WriteDataByLocalIdentifier $26 XCP freigeben/sperren

| Name | Type | Description |
| --- | --- | --- |
| XCP | char | Freigabewert für die XCP-Schnittstelle 0x01: Freigabe (Authentisierung erforderlich) 0x00: Sperren  (keine Authentiserung erforderlich) sonstige Werte: ebenfalls sperren |

### _STATUS_XCP_FR

Liest den aktuellen Freigabestatus der XCP-Schnittstelle aus KWP 2000: $21 ReadDataByLocalIdentifier $26 Status XCP-Schnittstelle interner TEMIC-Job

_No arguments._

### _STATUS_TRACENUMMER

Liest die Temic Tracenummer KWP 2000: $21 ReadDataByLocalIdentifier $70 Temic Tracenummer lesen interner TEMIC-Job

_No arguments._

### _STATUS_AD_REF

Liest die AD-Referenzspannung zurück KWP 2000: $21 ReadDataByLocalIdentifier $72 Temic AD-Referenzspannung lesen interner TEMIC-Job

_No arguments._

### _STATUS_ENDTEST_INTERN

Gibt den Status vom ROM-, RAM-, ALU- und ADC-Check sowie die Reset-Zeit bei einem vorangegangenen Watchdog-Fehler zurück KWP 2000: $21 ReadDataByLocalIdentifier $34 interner Status

_No arguments._

### _STATUS_ENDTEST_FR

Gibt den Bus- und Nachrichtentransfer- Status auf dem FlexRay zurück Meßdauer 1 Sekunde KWP 2000: $21 ReadDataByLocalIdentifier $33 FR-Status auslesen

_No arguments._

### _STATUS_ENDTEST_ANALOGWERTE

Liest die Minimal- und Maximalwerte aller Analogeingänge über die Meßdauer von 1 Sekunde KWP 2000: $21 ReadDataByLocalIdentifier $32 analoge Min-/Maxwerte auslesen

_No arguments._

### _STEUERN_ENDTEST

Einstellungen für den Endtest KWP 2000: $3B ReadDataByLocalIdentifier $32 Einstellungen für den Endtest schreiben

| Name | Type | Description |
| --- | --- | --- |
| KOMP | unsigned char | Komponente Zur Unterscheidung der unterschiedlichen Komponenten, die verändert werden sollen 0x00 Voltage Tracker 0x01 EDCS-Leitungen 0x02 Fensterwatchdog im Spannungsregler TLE6368 0x03 Externer Watchdog 0x04 EEPROM-Check |
| PARAM | unsigned char | Parameter Parameter zur Einstellung der ausgewählten Komponente Komponente: Voltage Tracker 0x00 alle Tracker (VL, VR, HL, HR) OFF Bit 0: VL ON Bit 1: VR ON Bit 2: HL ON Bit 3: HR ON Komponente: EDCS-Leitungen 0x00 EDCS_R und EDCS_L disable 0x01 EDCS_L enable 0x02 EDCS_R enable 0x03 EDCS_L und EDCS_R enable Komponente: Fensterwatchdoch kein weiterer Parameter nötig Komponente: externer Watchdog 0x00 korrekte Triggerung des Watchdogs 0x01 Fehltriggerung durch /C_LOW_TRIG 0x02 Fehltriggerung durch C_HIGH_TRIG 0x03 Fehltriggerung durch /C_LOW_TRIG und C_HIGH_TRIG |

### _DUMMY

Zur Definition eines beliebigen Jobs Freie Auswahl eines Single Frames interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| JOB_LAENGE | char | soll: Anzahl der Parameter + 1 kann frei gewählt werden (0...21) |
| SG_ADRESSE | char | soll: Adresse des Ziel-SG (VDM: 0x39) |
| TESTER_ADRESSE | char | soll: Adresse des Testers (normal: 0xF1) |
| JOB_NR | char | soll: Job nach KWP2000 |
| PARAMETER_1 | char | Freie Wahl |
| PARAMETER_2 | char | Freie Wahl |
| PARAMETER_3 | char | Freie Wahl |
| PARAMETER_4 | char | Freie Wahl |
| PARAMETER_5 | char | Freie Wahl |
| PARAMETER_6 | char | Freie Wahl |
| PARAMETER_7 | char | Freie Wahl |
| PARAMETER_8 | char | Freie Wahl |
| PARAMETER_9 | char | Freie Wahl |
| PARAMETER_10 | char | Freie Wahl |
| PARAMETER_11 | char | Freie Wahl |
| PARAMETER_12 | char | Freie Wahl |
| PARAMETER_13 | char | Freie Wahl |
| PARAMETER_14 | char | Freie Wahl |
| PARAMETER_15 | char | Freie Wahl |
| PARAMETER_16 | char | Freie Wahl |
| PARAMETER_17 | char | Freie Wahl |
| PARAMETER_18 | char | Freie Wahl |
| PARAMETER_19 | char | Freie Wahl |
| PARAMETER_20 | char | Freie Wahl |

### _DUMMY_LONG

Zur Definition eines beliebigen Jobs interner TEMIC-Job

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Job-Länge (SID + Daten) Byte 1              : SG-Adresse Byte 2              : Tester-Adresse Byte 3              : SID Byte 4..Byte x      : Daten |

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
| 0x76 | CEL |
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
| 0x630C | Steuergerät interner Fehler |
| 0x630D | Steuergerät nicht codiert |
| 0x630E | Steuergerät nicht abgeglichen |
| 0x630F | HSensor Signal VL |
| 0x6310 | HSensor Signal VR |
| 0x6311 | HSensor Signal HL |
| 0x6312 | HSensor Signal HR |
| 0x6313 | HSensor Versorgung VL |
| 0x6314 | HSensor Versorgung VR |
| 0x6315 | HSensor Versorgung HL |
| 0x6316 | HSensor Versorgung HR |
| 0x6317 | Verschränkungsplausibilität |
| 0x6318 | Enable Links |
| 0x6319 | Enable Rechts |
| 0x631A | Fehler Satellit VL |
| 0x631B | Fehler Satellit VR |
| 0x631C | Fehler Satellit HL |
| 0x631D | Fehler Satellit HR |
| 0x631E | Spannungsversorgung |
| 0xD747 | PT-CAN Kommunikationsfehler |
| 0xD74B | F-CAN Kommunikationsfehler |
| 0xD74C | FlexRay Bus Error Transceiver |
| 0xD74F | FlexRay Synchronisation (Controller) |
| 0xD754 | Botschaft (Kilometerstand/Reichweite, 0x330) |
| 0xD755 | Botschaft (Außentemperatur/Relativzeit, 0x310) |
| 0xD756 | Botschaft (Geschwindigkeit PT-CAN, 0x1A0) |
| 0xD757 | Botschaft (Status DSC PT-CAN, 0x19E) |
| 0xD758 | Botschaft (Bedienung Taster Vertikaldynamik, 0x28C) |
| 0xD759 | Botschaft (Motordaten, 0x1D0) |
| 0xD75A | Botschaft (Klemmenstatus, 0x130) |
| 0xD75B | Botschaft (Drehmoment 3 PT-CAN, 0x0AA) |
| 0xD75C | Botschaft (Getriebedaten, 0x0BA) |
| 0xD75D | Botschaft (Status ARS-Modul, 0x1AC) |
| 0xD75E | Botschaft (Status Funkschlüssel, 0x23A) |
| 0xD75F | Botschaft (Netzwerkmanagement PT-CAN, 0x4B9) |
| 0xD760 | Botschaft (Lenkradwinkel oben 2 F-CAN, 0x0C9) |
| 0xD761 | Botschaft (Querdynamik ARS VDM, 0x0F7) |
| 0xD762 | Botschaft (Austausch AFS DSC, 0x118) |
| 0xD763 | Botschaft (Lenkradwinkel oben F-CAN, 0x0C8) |
| 0xD764 | Botschaft (Radgeschwindigkeit F-CAN, 0x0CE) |
| 0xD765 | Botschaft (CLU Status VDA, 0x165) |
| 0xD766 | Botschaft (CLU1 VDA, 0x0D8) |
| 0xD767 | Botschaft (CLU2 VDA, 0x0E3) |
| 0xD768 | Botschaft (Status EDCS VL) |
| 0xD769 | Botschaft (Status EDCS VR) |
| 0xD76A | Botschaft (Status EDCS HL) |
| 0xD76B | Botschaft (Status EDCS HR) |
| 0xD76C | Botschaft (Netzwerkmanagement FlexRay) |
| 0xD76D | Botschaft (Sensor Daten ROSE, 0x12A) |
| 0xD76E | Botschaft (Lenkradwinkel Oben 2 F-CAN, 0x0C9) |
| 0xD76F | Botschaft (Geschwindigkeit PT-CAN, 0x1A0) |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x630C | 0x02 | 0x01 | 0x13 | 0x06 |
| 0x630D | Umwelt_allg | 0x05 | 0x14 | - |
| 0x630E | Umwelt_allg | 0x05 | 0x14 | - |
| 0x630F | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6310 | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6311 | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6312 | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6313 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6314 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6315 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6316 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6317 | 0x01 | 0x04 | 0x03 | Umwelt_Verschraenkung |
| 0x6318 | Umwelt_allg | 0x0e | 0x14 | - |
| 0x6319 | Umwelt_allg | 0x0e | 0x14 | - |
| 0x631A | Umwelt_allg | 0x0f | 0x14 | - |
| 0x631B | Umwelt_allg | 0x10 | 0x14 | - |
| 0x631C | Umwelt_allg | 0x11 | 0x14 | - |
| 0x631D | Umwelt_allg | 0x12 | 0x14 | - |
| 0x631E | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD747 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD74B | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD74C | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD74F | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD754 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD755 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD756 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD757 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD758 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD759 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75A | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75B | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75C | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75D | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75E | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75F | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD760 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD761 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD762 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD763 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD764 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD765 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD766 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD767 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD768 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD769 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76A | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76B | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76C | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76D | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76E | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76F | Umwelt_allg | 0x05 | 0x14 | - |
| 0xFFFF | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | uKL30g | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x02 | Relativzeit | - | high | signed long | - | 1 | 1 | - |
| 0x03 | Aussentemperatur | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | - |
| 0x05 | Motorstatus | - | - | unsigned char | - | 1 | 1 | - |
| 0x06 | Fehlerdetail | - | high | signed long | - | 1 | 1 | - |
| 0x07 | Sensorsignal | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x08 | Sensorspannung | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x09 | Lenkradwinkel | - | - | unsigned char | - | 1 | 1 | - |
| 0x0a | Sensorsignal_VL | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0b | Sensorsignal_VR | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0c | Sensorsignal_HL | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0d | Sensorsignal_HR | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0e | Spannung_Enable | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x0f | FehlerEDCS_VL | - | - | unsigned char | - | 1 | 1 | - |
| 0x10 | FehlerEDCS_VR | - | - | unsigned char | - | 1 | 1 | - |
| 0x11 | FehlerEDCS_HL | - | - | unsigned char | - | 1 | 1 | - |
| 0x12 | FehlerEDCS_HR | - | - | unsigned char | - | 1 | 1 | - |
| 0x13 | unused_byte | - | - | unsigned char | - | 1 | 1 | - |
| 0x14 | unused_word | - | high | unsigned int | - | 1 | 1 | - |
| 0xFF | unbekannte Umweltbedingung | - | - | unsigned char | - | 1 | 1 | - |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x630C | 0xFFFF | 0xFFFF | 0x0011 | 0x0012 |
| 0x630D | 0x0008 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x630E | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6318 | 0x0008 | 0xFFFF | 0x0002 | 0x0001 |
| 0x6319 | 0x0008 | 0xFFFF | 0x0002 | 0x0001 |
| 0x631A | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0x631B | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0x631C | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0x631D | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0xD747 | 0xFFFF | 0x0004 | 0xFFFF | 0xFFFF |
| 0xD74B | 0xFFFF | 0x0004 | 0xFFFF | 0xFFFF |
| 0xD74C | 0xFFFF | 0xFFFF | 0x001A | 0x0019 |
| 0xD74F | 0xFFFF | 0x001B | 0xFFFF | 0xFFFF |
| 0xD754 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD755 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD756 | 0x0018 | 0x0017 | 0x0016 | 0xFFFF |
| 0xD757 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD758 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD759 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75A | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75B | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75C | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75D | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75E | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75F | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD760 | 0x0018 | 0x0017 | 0x0016 | 0xFFFF |
| 0xD761 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD762 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD763 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD764 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD765 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD766 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD767 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD768 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD769 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76A | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76B | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76C | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76D | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76E | 0xFFFF | 0xFFFF | 0xFFFF | 0x0015 |
| 0xD76F | 0xFFFF | 0xFFFF | 0xFFFF | 0x0015 |
| default | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal |
| 0x0011 | kritischer Fehler |
| 0x0012 | EEPROM |
| 0x0014 | Störung Satellit |
| 0x0015 | Signal oder Wert nicht belegt |
| 0x0016 | Fehler Alive Zähler |
| 0x0017 | Timeout |
| 0x0018 | Checksummenfehler |
| 0x0019 | Transceiver links |
| 0x001A | Transceiver rechts |
| 0x001B | rot |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x630C | Steuergerät interner Fehler |
| 0x630D | Steuergerät nicht codiert |
| 0x630E | Steuergerät nicht abgeglichen |
| 0x630F | HSensor Signal VL |
| 0x6310 | HSensor Signal VR |
| 0x6311 | HSensor Signal HL |
| 0x6312 | HSensor Signal HR |
| 0x6313 | HSensor Versorgung VL |
| 0x6314 | HSensor Versorgung VR |
| 0x6315 | HSensor Versorgung HL |
| 0x6316 | HSensor Versorgung HR |
| 0x6317 | Verschränkungsplausibilität |
| 0x6318 | Enable Links |
| 0x6319 | Enable Rechts |
| 0x631A | Fehler Satellit VL |
| 0x631B | Fehler Satellit VR |
| 0x631C | Fehler Satellit HL |
| 0x631D | Fehler Satellit HR |
| 0x631E | Spannungsversorgung |
| 0xD747 | PT-CAN Kommunikationsfehler |
| 0xD74B | F-CAN Kommunikationsfehler |
| 0xD74C | FlexRay Bus Error Transceiver |
| 0xD74F | FlexRay Synchronisation (Controller) |
| 0xD754 | Botschaft (Kilometerstand/Reichweite, 0x330) |
| 0xD755 | Botschaft (Außentemperatur/Relativzeit, 0x310) |
| 0xD756 | Botschaft (Geschwindigkeit PT-CAN, 0x1A0) |
| 0xD757 | Botschaft (Status DSC PT-CAN, 0x19E) |
| 0xD758 | Botschaft (Bedienung Taster Vertikaldynamik, 0x28C) |
| 0xD759 | Botschaft (Motordaten, 0x1D0) |
| 0xD75A | Botschaft (Klemmenstatus, 0x130) |
| 0xD75B | Botschaft (Drehmoment 3 PT-CAN, 0x0AA) |
| 0xD75C | Botschaft (Getriebedaten, 0x0BA) |
| 0xD75D | Botschaft (Status ARS-Modul, 0x1AC) |
| 0xD75E | Botschaft (Status Funkschlüssel, 0x23A) |
| 0xD75F | Botschaft (Netzwerkmanagement PT-CAN, 0x4B9) |
| 0xD760 | Botschaft (Lenkradwinkel oben 2 F-CAN, 0x0C9) |
| 0xD761 | Botschaft (Querdynamik ARS VDM, 0x0F7) |
| 0xD762 | Botschaft (Austausch AFS DSC, 0x118) |
| 0xD763 | Botschaft (Lenkradwinkel oben F-CAN, 0x0C8) |
| 0xD764 | Botschaft (Radgeschwindigkeit F-CAN, 0x0CE) |
| 0xD765 | Botschaft (CLU Status VDA, 0x165) |
| 0xD766 | Botschaft (CLU1 VDA, 0x0D8) |
| 0xD767 | Botschaft (CLU2 VDA, 0x0E3) |
| 0xD768 | Botschaft (Status EDCS VL) |
| 0xD769 | Botschaft (Status EDCS VR) |
| 0xD76A | Botschaft (Status EDCS HL) |
| 0xD76B | Botschaft (Status EDCS HR) |
| 0xD76C | Botschaft (Netzwerkmanagement FlexRay) |
| 0xD76D | Botschaft (Sensor Daten ROSE, 0x12A) |
| 0xD76E | Botschaft (Lenkradwinkel Oben 2 F-CAN, 0x0C9) |
| 0xD76F | Botschaft (Geschwindigkeit PT-CAN, 0x1A0) |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x630C | 0x02 | 0x01 | 0x13 | 0x06 |
| 0x630D | Umwelt_allg | 0x05 | 0x14 | - |
| 0x630E | Umwelt_allg | 0x05 | 0x14 | - |
| 0x630F | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6310 | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6311 | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6312 | Umwelt_allg | 0x07 | 0x14 | - |
| 0x6313 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6314 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6315 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6316 | Umwelt_allg | 0x08 | 0x14 | - |
| 0x6317 | 0x01 | 0x04 | 0x03 | Umwelt_Verschraenkung |
| 0x6318 | Umwelt_allg | 0x0e | 0x14 | - |
| 0x6319 | Umwelt_allg | 0x0e | 0x14 | - |
| 0x631A | Umwelt_allg | 0x0f | 0x14 | - |
| 0x631B | Umwelt_allg | 0x10 | 0x14 | - |
| 0x631C | Umwelt_allg | 0x11 | 0x14 | - |
| 0x631D | Umwelt_allg | 0x12 | 0x14 | - |
| 0x631E | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD747 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD74B | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD74C | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD74F | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD754 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD755 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD756 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD757 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD758 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD759 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75A | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75B | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75C | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75D | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75E | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD75F | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD760 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD761 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD762 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD763 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD764 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD765 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD766 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD767 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD768 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD769 | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76A | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76B | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76C | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76D | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76E | Umwelt_allg | 0x05 | 0x14 | - |
| 0xD76F | Umwelt_allg | 0x05 | 0x14 | - |
| 0xFFFF | - | - | - | - |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | uKL30g | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x02 | Relativzeit | - | high | signed long | - | 1 | 1 | - |
| 0x03 | Aussentemperatur | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | - |
| 0x05 | Motorstatus | - | - | unsigned char | - | 1 | 1 | - |
| 0x06 | Fehlerdetail | - | high | signed long | - | 1 | 1 | - |
| 0x07 | Sensorsignal | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x08 | Sensorspannung | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x09 | Lenkradwinkel | - | - | unsigned char | - | 1 | 1 | - |
| 0x0a | Sensorsignal_VL | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0b | Sensorsignal_VR | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0c | Sensorsignal_HL | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0d | Sensorsignal_HR | mm/s | - | unsigned char | - | 2 | 1 | -256 |
| 0x0e | Spannung_Enable | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x0f | FehlerEDCS_VL | - | - | unsigned char | - | 1 | 1 | - |
| 0x10 | FehlerEDCS_VR | - | - | unsigned char | - | 1 | 1 | - |
| 0x11 | FehlerEDCS_HL | - | - | unsigned char | - | 1 | 1 | - |
| 0x12 | FehlerEDCS_HR | - | - | unsigned char | - | 1 | 1 | - |
| 0x13 | unused_byte | - | - | unsigned char | - | 1 | 1 | - |
| 0x14 | unused_word | - | high | unsigned int | - | 1 | 1 | - |
| 0xFF | unbekannte Umweltbedingung | - | - | unsigned char | - | 1 | 1 | - |

### HARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x630C | 0xFFFF | 0xFFFF | 0x0011 | 0x0012 |
| 0x630D | 0x0008 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x630E | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6318 | 0x0008 | 0xFFFF | 0x0002 | 0x0001 |
| 0x6319 | 0x0008 | 0xFFFF | 0x0002 | 0x0001 |
| 0x631A | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0x631B | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0x631C | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0x631D | 0x0008 | 0x0004 | 0x0014 | 0xFFFF |
| 0xD747 | 0xFFFF | 0x0004 | 0xFFFF | 0xFFFF |
| 0xD74B | 0xFFFF | 0x0004 | 0xFFFF | 0xFFFF |
| 0xD74C | 0xFFFF | 0xFFFF | 0x001A | 0x0019 |
| 0xD74F | 0xFFFF | 0x001B | 0xFFFF | 0xFFFF |
| 0xD754 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD755 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD756 | 0x0018 | 0x0017 | 0x0016 | 0xFFFF |
| 0xD757 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD758 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD759 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75A | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75B | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75C | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75D | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75E | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD75F | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD760 | 0x0018 | 0x0017 | 0x0016 | 0xFFFF |
| 0xD761 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD762 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD763 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD764 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD765 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD766 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD767 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD768 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD769 | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76A | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76B | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76C | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76D | 0x0018 | 0x0017 | 0x0016 | 0x0015 |
| 0xD76E | 0xFFFF | 0xFFFF | 0xFFFF | 0x0015 |
| 0xD76F | 0xFFFF | 0xFFFF | 0xFFFF | 0x0015 |
| default | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### HARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal |
| 0x0011 | kritischer Fehler |
| 0x0012 | EEPROM |
| 0x0014 | Störung Satellit |
| 0x0015 | Signal oder Wert nicht belegt |
| 0x0016 | Fehler Alive Zähler |
| 0x0017 | Timeout |
| 0x0018 | Checksummenfehler |
| 0x0019 | Transceiver links |
| 0x001A | Transceiver rechts |
| 0x001B | rot |
| 0xFFFF | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | Unterspannung / Überspannung |
| 0x5D0D | interner Fehler |
| 0x5D0E | FlexRay Controller |
| 0x5D0F | FlexRay |
| 0x5D10 | EEPROM |
| 0x5D11 | PT-CAN Geschwindigkeit |
| 0x5D12 | PT-CAN Drehmoment 3 |
| 0x5D13 | PT-CAN Getriebedaten |
| 0x5D14 | PT-CAN Status DSC |
| 0x5D15 | F-CAN Austausch AFS DSC |
| 0x5D16 | F-CAN Lenkradwinkel oben 2 |
| 0x5D17 | F-CAN CLU1 VDA |
| 0x5D18 | F-CAN CLU2 VDA |
| 0x5D19 | F-CAN Querdynamik ARS VDM |
| 0x5D1A | F-CAN Sensor Daten ROSE |
| 0x5D20 | Eckplausibilisierung VL |
| 0x5D21 | Eckplausibilisierung VR |
| 0x5D22 | Eckplausibilisierung HL |
| 0x5D23 | Eckplausibilisierung HR |
| 0x5D24 | Achsplausi. Höhenstand links |
| 0x5D25 | Achsplausi. Höhenstand rechts |
| 0x5D26 | Achsplausi. Radbeschl. links |
| 0x5D27 | Achsplausi. Radbeschl. rechts |
| 0x5D28 | CLU Status VDA |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5D0C | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D0D | 0x02 | 0x01 | 0x07 | 0x06 |
| 0x5D0E | 0x02 | 0x01 | 0x07 | 0x06 |
| 0x5D0F | 0x02 | 0x01 | 0x07 | 0x06 |
| 0x5D10 | 0x02 | 0x01 | 0x07 | 0x06 |
| 0x5D11 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D12 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D13 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D14 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D15 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D16 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D17 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D18 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D19 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D1A | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D20 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D21 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D22 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D23 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D24 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D25 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D26 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D27 | Umwelt_allg | 0x05 | 0x08 | - |
| 0x5D28 | Umwelt_allg | 0x05 | 0x08 | - |
| 0xFFFF | - | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | uKL30g | V | - | unsigned char | - | 0.1 | 1 | - |
| 0x02 | Relativzeit | - | high | signed long | - | 1 | 1 | - |
| 0x03 | Aussentemperatur | °C | - | unsigned char | - | 0.5 | 1 | -40 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | - |
| 0x05 | Motorstatus | - | - | unsigned char | - | 1 | 1 | - |
| 0x06 | Fehlerdetail | - | high | signed long | - | 1 | 1 | - |
| 0x07 | unused_byte | - | - | unsigned char | - | 1 | 1 | - |
| 0x08 | unused_word | - | high | unsigned int | - | 1 | 1 | - |
| 0xff | unbekannte Umwelt | - | - | unsigned char | - | 1 | 1 | - |

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x5D0C | 0xFFFF | 0xFFFF | 0x0006 | 0x0005 |
| 0x5D0D | 0xFFFF | 0xFFFF | 0xFFFF | 0x0007 |
| 0x5D0E | 0xFFFF | 0xFFFF | 0xFFFF | 0x0008 |
| 0x5D0F | 0xFFFF | 0xFFFF | 0xFFFF | 0x0007 |
| 0x5D10 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0007 |
| 0x5D11 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D12 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D13 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D14 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D15 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D16 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D17 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D18 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D19 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D1A | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x5D20 | 0x0004 | 0xFFFF | 0x000E | 0x000D |
| 0x5D21 | 0x0004 | 0xFFFF | 0x000E | 0x000D |
| 0x5D22 | 0x0004 | 0xFFFF | 0x000E | 0x000D |
| 0x5D23 | 0x0004 | 0xFFFF | 0x000E | 0x000D |
| 0x5D24 | 0x0004 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5D25 | 0x0004 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5D26 | 0x0004 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5D27 | 0x0004 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5D28 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF |

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0003 | kein Signal oder Wert |
| 0x0004 | unplausibles Signal |
| 0x0005 | Überspannung |
| 0x0006 | Unterspannung |
| 0x0007 | Fehler |
| 0x0008 | gelb |
| 0x0009 | Signal oder Wert nicht belegt |
| 0x000A | Fehler Alive Zähler |
| 0x000B | Timeout |
| 0x000C | Checksummenfehler |
| 0x000D | Schwelle PhiP |
| 0x000E | Schwelle Plausibilität |
| 0xFFFF | unbekannte Fehlerart |

### UMWELT_ALLG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x02 | 0x01 | 0x04 | 0x03 |

### UMWELT_VERSCHRAENKUNG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x09 | 0x0a | 0x0b | 0x0c | 0x0d | 0x14 |

### ABGLEICH_HOEHENSTAND

| BIT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Kurzschluss KL30 |
| 0x02 | Kurzschluss KL31 / offene Leitung |
| 0x10 | Spannung Sensorversorgung zu hoch |
| 0x20 | Spannung Sensorversorgung zu niedrig |
| 0xXY | unbekannter Fehler |

### DAEMPFERPROGRAMM

| BIT | TEXT |
| --- | --- |
| 0x00 | Komfort |
| 0x01 | Sport |
| 0x02 | Komfort mit Ersatzwerten |
| 0x03 | Sport mit Ersatzwerten |
| 0x04 | Festbestromung |
| 0x05 | Nullbestromung |
| 0xXY | unbekanntes Dämpferprogramm |
