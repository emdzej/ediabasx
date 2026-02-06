# MASK2.prg

## General

|  |  |
| --- | --- |
| File | MASK2.prg |
| Type | PRG |
| Jobs | 103 |
| Tables | 50 |
| Origin | BMW EI-44 Toedtmann |
| Revision | 1.001 |
| Author | HaysAG EI-44 Hr.Bubb |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MASK2 MMI / Tuner / ASK  |  |  |
| ORIGIN | string | BMW EI-44 Toedtmann |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | HaysAG EI-44 Hr.Bubb |  |  |
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

### LESEN_INDIVIDUALDATA_LISTE

Lesen eines Listeneintrags der Individualisierungsdaten KWP2000: $21 ReadDataByLocalIdentifier $01 recordLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARG_LISTENTRY | unsigned int | Nummer des angeforderten Listenelements (0,1,2,...) 0x0000 = Anforderung, das 1. Listelement zu senden 0x0001 = Anforderung, das 2. Listelement zu senden |

### LESE_INDIVIDUALDATA

Lesen von Individualisierungsdaten KWP2000: $21 ReadDataByLocalIdentifier $02 recordLocalIdentifier Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der RET_DATA zugeordnet ist 0xFF	   Aktuell gesteckter Schlüssel ist RET_DATA zugeordnet |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Individualdaten können via CAN oder MOST oder XY erreicht werden 0x00	via CAN 0x01	via MOST 0x02    via CAN-PIADiensteanfrage 0x03    via Naviadressbuchanfrage ...	via XY... |
| ARG_INQY_LEN | unsigned char | Länge des folgenden Anfragedatenstreams z.B. 0x02 für 2 Byte |
| ARG_INQY_DATA | string | ASCII-codiert Anfrage Individualdatenstream z.B via MOST 2000022201 für MOST AudioMaster_MASK.AMBass.Get Format: FBlock    1 Byte InstID    1 Byte FktID     2 Byte rechtsbündig OpType    1 Byte Parameter x Bytes |
| ARG_RESP_LEN | unsigned char | Länge der folgenden Information wie die Antwort erhalten wird. Also ein Antwortfilter bzw. -hinweis z.B. 0x04 für 4 Byte |
| ARG_RESP_DATA | string | ASCII-codiert Information wie die Antwort erhalten wird: Also ein Antwortfilter bzw. -hinweis z.B via MOST 71000400 für MOST Climate.ConfigIHKA Format: FBlock    1 Byte InstID    1 Byte FktID     2 Byte rechtsbündig Parameter x Bytes |

### SCHREIBEN_INDIVIDUALDATA

Schreiben von Individualisierungsdaten KWP2000: $3B WriteDataByLocalIdentifier $02 recordLocalIdentifier Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der ARG_DATA zugeordnet ist 0xFF	   Aktuell gesteckter Schlüssel ist ARG_DATA zugeordnet |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Individualdaten können via CAN oder MOST oder XY geschrieben werden 0x00	via CAN 0x01	via MOST 0x02    via CAN-PIADiensteanfrage 0x03    via Naviadressbuchanfrage ...	via XY |
| ARG_STATUS | unsigned char | 0xFF letztes oder einziges element des Datenstreams 0x00 es folgen weitere Datenstreamstücke |
| ARG_WRITE_LEN | unsigned char | Länge des folgenden Schreibauftrags z.B. 0x02 für 2 Byte |
| ARG_WRITE_DATA | string | ASCII-codiert Schreibauftrag für Individualdatenstream Format for MOST FBlock    1 Byte InstID    1 Byte FktID     2 Byte rechtsbündig OpType    1 Byte Parameter x Bytes |
| ARG_W_RESP_LEN | unsigned char | Optional, Laenge des folgenden Antwortfilters z.B. 0x02 für 2 Byte |
| ARG_W_RESP_DATA | string | ASCII-codiert, Optional, Antwortfilter des Schreibauftrags Format: FBlock    1 Byte InstID    1 Byte FktID     2 Byte rechtsbündig OpType    1 Byte Parameter x Bytes |
| ARG_LEN | int | Länge des Individualisierungs Datenstream oder -streamstücks |
| ARG_DATA | string | ASCII-codiert Datenstream |

### LESEN_ADRESSBUCH

Lesen eines Datensatzes des NAVI-Adressbuchs KWP2000: $21 ReadDataByLocalIdentifier $06 recordLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARG_FORMAT_OR_DATA | unsigned char | Format oder Datenanfrage 0x01	Formatanfrage 0x02	Datenanfrage |
| ARG_LISTE | unsigned char | Welche der verschiedenen Adressbuchlisten soll übertragen werden? |
| ARG_DEBUG | unsigned char | For Debug use |

### SCHREIBEN_ADRESSBUCH

Schreiben eines Datensatzes des NAVI-Adressbuchs KWP2000: $3B writeDataByLocalIdentifier $06 recordLocalIdentifier Die persistente Abspeicherung erfolgt erst nach einem Reset

| Name | Type | Description |
| --- | --- | --- |
| ARG_PREPARE_OR_DATA | unsigned char | Vorbereitung oder Daten 0x01	Vorbereitung 0x02	Daten |
| ARG_LISTE | unsigned char | Welche der verschiedenen Adressbuchlisten soll übertragen werden? |
| ARG_ISLAST | unsigned char | Information ob aktueller Datensatz der Letzte ist 0x00 	Es folgen noch Datensätze 0x01	Letzter Datensatz |
| ARG_DATA | string | Unicode-Datensatz mit Steuerzeichen maximal 1 kByte Daten sind als Hex-Array abgelegt |

### LESEN_TELEFONNUMMERN

Auslesen der im CHAMP gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline KWP2000: $21 readDataByLocalIdentifier $A2 recordLocalIdentifier Modus  : Default

_No arguments._

### SCHREIBEN_TELEFONNUMMERN

Schreiben der Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline KWP2000: $3B writeDataByLocalIdentifier $A2 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_BEREITSCHAFTSDIENST | string | Nummer des Bereitschaftsdienstes Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_HEIMATHAENDLER | string | Nummer des Heimathändlers Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_PASSO | string | Nummer Passo Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_HOTLINE | string | Nummer der Hotline Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |

### LESEN_TELEFONNUMMER_SDARS

Auslesen der im MASK gespeicherten Telefonnummer für - SDARS KWP2000: $21 readDataByLocalIdentifier $A3 recordLocalIdentifier Modus  : Default

_No arguments._

### SCHREIBEN_TELEFONNUMMER_SDARS

Schreiben der Telefonnummer für SDARS KWP2000: $3B writeDataByLocalIdentifier $A3 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_SDARS | string | Nummer des Bereitschaftsdienstes Stringlänge max. 35 Zeichen (ohne Endezeichen \0) |

### SER_NR_DOM_LESEN

Seriennummer 14-stellig lesen Neu für Entertainment-Komponenten ab 2003 KWP2000: $21 ReadDatabyLocalIdentifier $E0 Local ID SER_NR_DOM Modus  : Default

_No arguments._

### LESEN_NAVDVDPIN

Lesen des 4 stelligen PIN-Codes zum Entsperren der NAVI-DVD KWP2000: $21 ReadDataByLocalIdentifier $03 recordLocalIdentifier Modus  : Default

_No arguments._

### SCHREIBEN_NAVDVDPIN

Schreiben des 4 stelligen PIN-Codes zum Entsperren der NAVI-DVD KWP2000: $3B ReadDataByLocalIdentifier $03 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_NAVDVDPIN | string | 4 stelliger PIN Code zum entsperren der NAVI-DVD |

### STATUS_AKTIVE_GAL_KURVE

Reads the active coded speed dependent volume control curve  KWP2000: $21 ReadDataByLocalIdentifier $B9 RecordLocalIdentifier

_No arguments._

### STATUS_ANT_DC

Auslesen ob Ri der Diversity im Toleranzband liegt KWP2000: $30 InputOutputControlByLocalIdentifier $15 inputOutputLocalIdentifier  - get Antenna DC State $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_ANT_EIGEN_DIAG

Lesen Status Antennendiagnose KWP2000: $30 InputOutputControlByLocalIdentifier $17 inputOutputLocalIdentifier  - get Antenna Diagnosis State $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_ANT_QFS

Auslesen des Status Quality Fieldstrength KWP2000: $30 InputOutputControlByLocalIdentifier $12 inputOutputLocalIdentifier  - status QFS $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_CPU_AUSLASTUNG

Lesen der CPU Auslastung in % KWP2000: $21 ReadDataByLocalIdentifier $BB Modus  : Default

_No arguments._

### STATUS_FLOTTENMODUS

Abfrage des aktuell zu aktivierenden Flottenmodus. (Art der NAVI-DVD Sperrung.) KWP2000: $30 InputOutputControlByLocalIdentifier $1B inputOutputLocalIdentifier $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_FREQUENZ

aktuelle Tunerfrequenz abfragen KWP2000: $30 InputOutputControlByLocalIdentifier $0F inputOutputLocalIdentifier  - get frequency $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_LESEN_CONNTABLE

Auslesen der aktuellen Connectiontable KWP2000: $21 ReadDataByLocalIdentifier $B4 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_LESEN_CONNTABLE_DETAIL

Genaue Information zur abgefragten Connection ausgeben KWP2000: $21 ReadDataByLocalIdentifier $B5 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CONNECTION | unsigned char | Nummer der gewaehlten Connection |

### STATUS_LESEN_LAUFWERK

Auslesen des im MASK verbauten Laufwerkes KWP2000: $21 ReadDataByLocalIdentifier $B3 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_LESEN_SYSTEM_AUDIO

Auslesen des verbauten Audiosystemes KWP2000: $21 ReadDataByLocalIdentifier $B2 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_RDS

Lesen Status AF-Verfolgung und TP KWP2000: $30 InputOutputControlByLocalIdentifier $0C inputOutputLocalIdentifier  - get RDS $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_TUNER_CODIERUNG

Auslesen der Tuner Codierdaten KWP2000: $21 ReadDataByLocalIdentifier $B7 recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_ANT_EIGEN_DIAG

Antennen-Eigendiagnose starten KWP2000: $30 InputOutputControlByLocalIdentifier $16 inputOutputLocalIdentifier $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_ANT_SCAN

FM-Antennen weiterschalten KWP2000: $30 InputOutputControlByLocalIdentifier $11 inputOutputLocalIdentifier  - Antenna scan $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ANT_SCAN | int | 0 = auf AM Betrieb/Verstärker schalten 1 = auf nächste FM Antenne weiterschalten |

### STEUERN_AUDIOKANAELE

Ansteuern eines AudioKanals KWP2000: $30 InputOutputControlByLocalIdentifier $01 inputOutputLocalIdentifier  - audio channel $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AUDIOKANAL | string | NF Ausgabe nur auf dem gewaehlten Kanal  table TAudioKanal NAME |

### STEUERN_CLEAR_CKMDATA

Löschen der CKM Daten für Schlüssel X KWP2000: $30 InputOutputControlByLocalIdentifier $18 inputOutputLocalIdentifier  - clear CKM for Key X $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_KEY | string | Schlüsselnummer oder all bzw. alle Werte siehe table TKeyNr NAME |

### STEUERN_COPY_CKMDATA

Kopieren der CKM Daten von Schlüssel X nach Schlüssel Y KWP2000: $30 InputOutputControlByLocalIdentifier $19 inputOutputLocalIdentifier  - copy CKM from Key X to Key Y $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_KEY_SOURCE | string | Quell-Schlüsselnummer (OHNE all bzw. alle) Werte siehe table TKeyNr NAME |
| NR_KEY_DEST | string | Ziel-Schlüsselnummer (auch all bzw. alle) Werte siehe table TKeyNr NAME |

### STEUERN_EJECT

Simulation Tastendruck EJECT-Taste KWP2000: $30 InputOutputControlByLocalIdentifier $0B inputOutputLocalIdentifier  - eject $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_FLOTTENMODUS

Steuern des aktuell zu aktivierenden Flottenmodus. (Art der NAVI-DVD Sperrung.) KWP2000: $30 InputOutputControlByLocalIdentifier $1B inputOutputLocalIdentifier $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_MODUS | string | Zu aktivierender Flottenmodus 0  ( Keine NAVI-DVD Sperrung ) 1  ( NAVI-DVD ist mit PIN-Code gesperrt ) 2  ( NAVI-DVD ist immer gesperrt. ) |

### STEUERN_FREQUENZ

Tunerfrequenz einstellen KWP2000: $30 InputOutputControlByLocalIdentifier $10 inputOutputLocalIdentifier  - set frequency $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ | long | Bereich: 150 - 108000 [kHz] |

### STEUERN_KLANGZEICHEN

Ausloesen eines Klangzeichens KWP2000: $30 InputOutputControlByLocalIdentifier $02 inputOutputLocalIdentifier  - accoustic sign $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLANGZEICHEN | string | Ausloesen des gewaehlten Klangzeichens table TKlangZeichen NAME |

### STEUERN_LINEAR

Alle Toneinstellungen auf Defaultwerte setzten KWP2000: $30 InputOutputControlByLocalIdentifier $05 inputOutputLocalIdentifier  - device sound linear $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_NEXT_ENTSOURCE

Weiterschaltung der Entertainment-Quelle per Diagnose KWP2000: $30 InputOutputControlByLocalIdentifier $1C inputOutputLocalIdentifier $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_ENTSOURCE | string | Einzustellende Entertainmentquelle Werte aus table TEntSource Wenn weggelassen, dann weiterschalten |

### STEUERN_RADIO_SCHALTEN

Simulation Tastendruck ENTERTAINMENT-Taste KWP2000: $30 InputOutputControlByLocalIdentifier $0A inputOutputLocalIdentifier  - switch radio on or off $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHALTMODUS | string | EIN/AUS-Schalten des Radios table TSchaltmodi NAME |

### STEUERN_RDS

Steuern AF-Verfolgung und TP KWP2000: $30 InputOutputControlByLocalIdentifier $14 inputOutputLocalIdentifier  - set RDS $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RDS | string | Steuern AF-Verfolgung und TP Werte siehe table TTunerRDS NAME |

### STEUERN_SELBSTTEST

Ansteuerung des Selbsttests im MASK - Speichertests FLASH_ROM, RAM, Video-RAM, EEPROM Bei Erkennung eines Fehlverhaltens erfolgt ein Eintrag im Primaer- und Shadowfehlerspeicher. KWP2000: $31 startRoutineByLocalIdentifier $04 routineLocalIdentifier (selfTest) Modus  : Default

_No arguments._

### STEUERN_SINUSGENERATOR_AUS

Ausschalten des Sinusgenerators  KWP2000: $32 StopRoutineByLocalIdentifier $B8 routineLocalIdentifier

_No arguments._

### STEUERN_TESTBILD

Ausgabe eines Testbildes KWP2000: $31 startRoutineByLocalIdentifier $A0 routineLocalIdentifier $XX Musterlänge $XX Farbe1 $XX Farbe2 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LAENGE | int | Laenge des Testmusters Bei Laenge 0 wird in den Normalmodus geschaltet Bereich: 0-1023 oder 0x00-0x3FF |
| FARBE_1 | int | Farbe 1 des Testbildes Bereich: 0-255 oder 0x00-0xFF |
| FARBE_2 | int | Farbe 2 des Testbildes Bereich: 0-255 oder 0x00-0xFF |

### STEUERN_TUNER_SUCHLAUF

Sendersuchlauf des AM/FM-Tuner starten KWP2000: $30 InputOutputControlByLocalIdentifier $13 inputOutputLocalIdentifier  - Tuner_Suchlauf $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TUNER_SUCHLAUF | string | Steuern des Suchlaufs (INC/DEC/STOP) table TTunerSuchlauf NAME |

### STEUERN_VOLUMEAUDIO

Einstellen der Audio-Lautstaerke KWP2000: $30 InputOutputControlByLocalIdentifier $03 inputOutputLocalIdentifier  - set volume $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VOLUME | string | Ausgewaehlte Audio-Lautstaerke  table TAudioVolume MASKE |

### LLDATENRETTUNG

LowLevel MOST Datenrettungsschnittstelle KWP2000: $21 ReadDataByLocalIdentifier $02 LocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_SEQUENCE | string | Abfolgestring zum Lesen/Schreiben der Indivdata via MOST |

### STATUS_LAST_CONNECTION

URL der letzen Verbindung wird ausgegeben KWP2000: $21 ReadDataByLocalIdentifier KWP2000: $17 LocalIdentifier Modus  : Default

_No arguments._

### STEUERN_SINUSGENERATOR_EIN

Aktivieren des Sinusgenerators und Ausgabe auf allen ausgewählten Lautsprechern SELECT_SPEAKER X  KWP2000: $31 StartRoutineByLocalIdentifier $B8 routineLocalIdentifier $xx Lautsprecherkanal Byte high $xx Lautsprecherkanal Byte low - $0001   Kanal links vorne - $0002   Kanal rechts vorne - (nur via AMP_60 -SGBD-> $0004   Kanal Center) - (nur via AMP_60 -SGBD-> $0008   Kanal Surround links) - (nur via AMP_60 -SGBD-> $0010   Kanal Surround rechts) - $0020   Kanal links hinten - $0040   Kanal rechts hinten - $0080   Kanal Subwoofer links - $0100   Kanal Subwoofer rechts $xx Frequenz Byte high $xx Frequenz Byte low $xx Level

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ | int | Frequenz Werte aus table TFrequSinusgenerator in Hz |
| LEVEL | int | Inkrementwert (Wird automatisch auf codierten Maximalwert begrenzt)) 0 - 255 |
| SELECT_SPEAKER1 | int | 1   Kanal links vorne 2   Kanal rechts vorne 32   Kanal links hinten 64  Kanal rechts hinten 128 Kanal Subwoofer links 256 Kanal Subwoofer rechts Nummer eines ausgewählten Lautsprechers der aktiv sein soll |
| SELECT_SPEAKER2 | int | Nummer eines ausgewählten Lautsprechers der aktiv sein soll (siehe SELECT_SPEAKER1) |
| SELECT_SPEAKER3 | int | Nummer eines ausgewählten Lautsprechers der aktiv sein soll (siehe SELECT_SPEAKER1) |
| SELECT_SPEAKER4 | int | Nummer eines ausgewählten Lautsprechers der aktiv sein soll (siehe SELECT_SPEAKER1) |
| SELECT_SPEAKER5 | int | Nummer eines ausgewählten Lautsprechers der aktiv sein soll (siehe SELECT_SPEAKER1) |
| SELECT_SPEAKER6 | int | Nummer eines ausgewählten Lautsprechers der aktiv sein soll (siehe SELECT_SPEAKER1) |

### LESEN_DAR

Lesen eines DAR Datensatzes KWP2000: $31 StartRoutineByLocalId	$23 $33 RequestRoutineResults	$23 $21 ReadDataByLocalIdentifier	$1A

| Name | Type | Description |
| --- | --- | --- |
| ARG_DAR | unsigned char | Requested DAR Index from 0 on |

### SCHREIBEN_DAR

Schreiben eines DAR Datensatzes KWP2000: $31 StartRoutineByLocalId	$25,$26 $33 RequestRoutineResults	$26 $3B WriteDataByLocalIdentifier	$A4

| Name | Type | Description |
| --- | --- | --- |
| ARG_DAR | unsigned char | Requested DAR Index from 0 on |
| ARG_FILE | string | DAR read from file to be written |
| ARG_STREAM | string | DAR read from STREAM to be written |

### LESEN_ONLINE_LOGGING

Lesen einer Zeile Onlinelogging KWP2000: $31 StartRoutineByLocalId	$27 $33 RequestRoutineResults	$27 $21 ReadDataByLocalIdentifier	$1C

| Name | Type | Description |
| --- | --- | --- |
| ARG_LINE | int | Requested LINE Index from 0 on 0xffff (-1) for request maxlines |

### LESEN_BROWSER_HISTORY

Lesen einer Zeile der Browser History KWP2000: $31 StartRoutineByLocalId	$29 $33 RequestRoutineResults	$29 $21 ReadDataByLocalIdentifier	$1E

| Name | Type | Description |
| --- | --- | --- |
| ARG_LINE | int | Requested LINE Index from 0 on 0xffff (-1) for request maxlines |

### LESEN_BROWSER_ERRORS

Lesen einer Zeile des Browsererrorlogs KWP2000: $31 StartRoutineByLocalId	$28 $33 RequestRoutineResults	$28 $21 ReadDataByLocalIdentifier	$1D

| Name | Type | Description |
| --- | --- | --- |
| ARG_LINE | int | Requested LINE Index from 0 on 0xffff (-1) for request maxlines |

### LESEN_ACCESS_RECORDS

Lesen eines AR Datensatzes KWP2000: $31 StartRoutineByLocalId	$24 $33 RequestRoutineResults  $24 $21 ReadDataByLocalIdentifier  $1B

| Name | Type | Description |
| --- | --- | --- |
| ARG_AR | int | Requested AR Index from 0 on 0xffff (-1) for request maxlines |

### STATUS_DAR_INDEX

Reading of the actually coded DAR-Index KWP2000: $21 ReadDataByLocalID $18 localID Modus  : Default

_No arguments._

### STATUS_BROWSER_APPL

Check if application coded and check POPUP KWP2000: $21 ReadDataByLocalID $19 localID Modus  : Default

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
| 0x00 | ERROR_ARGUMENT_NOT_IN_TABLE |
| 0x01 | ERROR_INVALID_ARGUMENT |
| 0x02 | ERROR_MISSING_ARGUMENT |
| 0x03 | ERROR_EXECUTION_LOCALROUTINE |
| 0x04 | ERROR_ARGUMENT_TOO_LONG |
| 0x05 | ERROR_INVALID_RESULT |
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
| 0xABC8 | 0xABC8: Fehler Speichertest MASK |
| 0xABC9 | 0xABC9: Laufwerk defekt |
| 0xABCA | 0xABCA: Antenne offen oder Kurzschluss |
| 0xABCB | 0xABCB: Fehler in der Antennen-Stromversorgung |
| 0xABCC | 0xABCC: Error Communication TopHiFi |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xABC8 | 0x01 | 0x02 | -- | -- |
| 0xABC9 | 0x01 | 0x03 | -- | -- |
| 0xABCA | 0x01 | 0x04 | -- | -- |
| 0xABCB | 0x01 | 0xFF | -- | -- |
| 0xABCC | 0x01 | 0xFF | - | - |
| default | - | - | -- | -- |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Temperatur MMI-Rechner | Grad C | H | s int | -- | 1 | 1 | 0 |
| 0x02 | Shadow DTC | 0-n | -- | 0xFFFF | ShadowDTC | -- | -- | -- |
| 0x03 | Laufwerksfehler | 0-n | - | 0xFFFF | LWReason | - | - | - |
| 0x04 | Antennenfehler | 0-n | - | 0xFFFF | ANTReason | - | - | - |
| 0xFF | Dummy | 1 | high | signed int | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | u int | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xABD8 | 0xABD8: Fehler FLASH-ROM |
| 0xABD9 | 0xABD9: Fehler RAM |
| 0xABDA | 0xABDA: Laufwerk Temperatur |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xABD8 | 0x01 | -- | -- | -- |
| 0xABD9 | 0x01 | - | - | - |
| 0xABDA | 0x01 | 0x02 | -- | -- |
| default | -- | -- | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Temperatur MMI-Rechner | Grad C | H | s int | -- | 1 | 1 | 0 |
| 0x02 | Temperatur Laufwerk | Grad C | high | signed int | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | u int | -- | 1 | 1 | 0 |

### SHADOWDTC

| WERT | UWTEXT |
| --- | --- |
| 0xABD8 | 0xABD8: Fehler FLASH-ROM |
| 0xABD9 | 0xABD9: Fehler RAM |
| 0xABDA | 0xABDA: Laufwerk Temperatur |
| 0xFFFF | unbekannter Fehlerort |

### TAUDIOKANAL

| NAME | MASKE | TEXT |
| --- | --- | --- |
| VL | 0x01 | Lautsprecher Vorne Links |
| VR | 0x02 | Lautsprecher Vorne Rechts |
| HHL | 0x03 | Lautsprecher Hutablage Hinten Links |
| HHR | 0x04 | Lautsprecher Hutablage Hinten Rechts |
| ZBL | 0x05 | Lautsprecher Zentral Bass Links |
| ZBR | 0x06 | Lautsprecher Zentral Bass Rechts |
| SHL | 0x07 | Lautsprecher Surround Hinten Links |
| SHR | 0x08 | Lautsprecher Surround Hinten Rechts |
| CS | 0x09 | Lautsprecher Centerspeaker |
| ALLE | 0x0A | Alle Lautsprecher |
| XY | 0xXY | Nicht definiert |

### TAUDIOVOLUME

| MASKE | TEXT |
| --- | --- |
| 0x00 | Mute |
| 0x0F | Inkrement 15 |
| 0x10 | Inkrement 16 |
| 0x11 | Inkrement 17 |
| 0x12 | Inkrement 18 |
| 0x13 | Inkrement 19 |
| 0x14 | Inkrement 20 |
| 0x16 | Inkrement 22 |
| 0x18 | Inkrement 24 |
| 0x1A | Inkrement 26 |
| 0x1C | Inkrement 28 |
| 0x1E | Inkrement 30 |
| 0x20 | Inkrement 32 |
| 0x22 | Inkrement 34 |
| 0x24 | Inkrement 36 |
| 0x26 | Inkrement 38 |
| 0x28 | Inkrement 40 |
| 0x2A | Inkrement 42 |
| 0x2C | Inkrement 44 |
| 0x2E | Inkrement 46 |
| 0x30 | Inkrement 48 |
| 0x32 | Inkrement 50 |
| 0x34 | Inkrement 52 |
| 0x36 | Inkrement 54 |
| 0x38 | Inkrement 56 |
| 0x3A | Inkrement 58 |
| 0x3C | Inkrement 60 |
| 0x3E | Inkrement 62 |
| 0x3F | Maximal |
| 0xXY | Nicht definiert |

### TFBLOCKIDTEXTE

| FBLOCKID | NAME |
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
| 0x26 | MicrophoneInput=0x26 |
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
| 0xXY | Unbekannter FBlock |

### TANTENNADIAG

| WERT | TEXT | VALUE |
| --- | --- | --- |
| 0x00 | Antenna Diag not Ok | 1 |
| 0x01 | Antenna Diag Ok | 0 |

### TTUNERRI

| WERT | TEXT |
| --- | --- |
| 0x00 | Ri not Ok |
| 0x01 | Ri Ok |
| 0xXY | Fehler |

### TTUNERRDS

| NAME | MASKE | TEXT |
| --- | --- | --- |
| 0 | 0x00 | AF aus / TP aus |
| 1 | 0x01 | AF aus / TP ein |
| 2 | 0x02 | AF ein / TP aus |
| 3 | 0x03 | AF ein / TP ein |
| Fehler | 0xXY | Nicht definiert |

### TTUNERSUCHLAUF

| NAME | MASKE |
| --- | --- |
| STOP | 0x00 |
| INC | 0x01 |
| DEC | 0x07 |
| Fehler | 0xXY |

### TSCHALTMODI

| NAME | MASKE | TEXT |
| --- | --- | --- |
| aus | 0x00 | Radio aus |
| ein | 0x01 | Radio ein |
| off | 0x00 | Radio aus |
| on | 0x01 | Radio ein |
| Fehler | 0xXY | Nicht definiert |

### LOOKCONNTABLE

| NAME | MASKE |
| --- | --- |
| Tuner/LS = 0x01 | 0x01 |
| Tuner/KHL = 0x02 | 0x02 |
| Tuner/KHR = 0x03 | 0x03 |
| Null-Device/LS = 0x08 | 0x08 |
| Null-Device/KHL = 0x09 | 0x09 |
| Null-Device/KHR = 0x0A | 0x0A |
| Audio-TP/LS = 0x10 | 0x10 |
| Audio-TP/KHL = 0x11 | 0x11 |
| Audio-TP/KHR = 0x12 | 0x12 |
| Audio-DP.01.01/LS = 0x18 | 0x18 |
| Audio-DP.01.01/KHL = 0x19 | 0x19 |
| Audio-DP.01.01/KHR = 0x1A | 0x1A |
| Audio-DP.02.01/LS = 0x20 | 0x20 |
| Audio-DP.02.01/KHL = 0x21 | 0x21 |
| Audio-DP.02.01/KHR = 0x22 | 0x22 |
| Audio-MMP/LS = 0x28 | 0x28 |
| Audio-MMP/KHL = 0x29 | 0x29 |
| Audio-MMP/KHR = 0x2A | 0x2A |
| SES.00.01/LS = 0x30 | 0x30 |
| SES-MISCHEN/LS = 0x31 | 0x31 |
| Microphone.00.01/SES.00.11 = 0x32 | 0x32 |
| TelephoneFix.00.01/LS = 0x40 | 0x40 |
| Telephone-Mix/LS = 0x41 | 0x41 |
| Telephone-Menue/LS = 0x42 | 0x42 |
| Microphone.00.01/Telefon.00.11 = 0x40/41 | 0x40/0x41 |
| Microphone.00.01/SES.00.11 = 0x30/31/32 | 0x30/0x31/0x32 |
| Microphone.00.01/SecurityFunk1 = 0x68 | 0x68 |
| Microphone.00.01/SecurityFunk2 = 0x69 | 0x69 |
| Microphone.00.01/SecurityWSA = 0x6A | 0x6A |
| TVTuner.00.01/LS = 0x50 | 0x50 |
| TVTuner.00.01/KHL = 0x51 | 0x51 |
| TVTuner.00.01/KHR = 0x52 | 0x52 |
| Navigation.00.01-Mix/LS = 0x58 | 0x58 |
| Browser/LS = 0x70 | 0x70 |
| Browser/KHL = 0x71 | 0x71 |
| Browser/KHR = 0x72 | 0x72 |
| TM-Meldung/LS = 0x38 | 0x38 |
| PTY-Meldung/LS = 0x48 | 0x48 |
| AMFM-TapePlayer/LS = 0x60 | 0x60 |
| AMFM-TapePlayer/KHL = 0x61 | 0x61 |
| AMFM-TapePlayer/KHR = 0x62 | 0x62 |
| SecurityFunk_1/LS = 0x68 | 0x68 |
| SecurityFunk_2/LS = 0x69 | 0x69 |
| SecurityWSA/LS = 0x6A | 0x6A |
| SDARS/LS = 0x6b | 0x6B |
| SDARS/KHL = 0x6C | 0x6C |
| SDARS/KHR = 0x6D | 0x6D |
| DAB/LS = 0x90 | 0x90 |
| DAB/KHL = 0x91 | 0x91 |
| DAB/KHR = 0x92 | 0x92 |
| ISDBT/LS = 0xA0 | 0xA0 |
| ISDBT/KHL = 0xA1 | 0xA1 |
| ISDBT/KHR = 0xA2 | 0xA2 |
| MSB/LS = 0x74 | 0x74 |
| MSB/KHL = 0x75 | 0x75 |
| MSB/KHR = 0x76 | 0x76 |
| AUXonMOST/LS = 0x77 | 0x77 |
| AUXonMOST/KHL = 0x78 | 0x78 |
| AUXonMOST/KHR = 0x79 | 0x79 |
| AUX analog/LS = 0x80 | 0x80 |
| AUX analog/KHL = 0x81 | 0x81 |
| AUX analog/KHR = 0x82 | 0x82 |
| Telefon_analog_fix/LS = 0x83 | 0x83 |
| PDC/LS = 0x84 | 0x84 |
| Gong/LS = 0x85 | 0x85 |
| Fehler = 0xXY | 0xXY |

### LOOKCONNTABLEDETAIL

| NAME | MASKE |
| --- | --- |
| Muted | 0x00 |
| Demuted | 0x01 |
| IN_MEMORY | 0x02 |
| NOT_CONNECTED | 0x03 |
| CONNECTED | 0x04 |
| Error | 0xXY |

### TKLANGZEICHEN

| NAME | MASKE | TEXT |
| --- | --- | --- |
| off | 0x00 | Off |
| ACC | 0x01 | ACC-Signal |
| CCG | 0x02 | CCG-Signal |
| DG | 0x03 | DG-Signal |
| Std-Signal | 0x04 | Stunden-Signal |
| IMG_Start | 0x05 | Intermetierendes Signal |
| IMG_Stop | 0x06 | Intermetierendes Signal beenden |
| tlc-left | 0x0D | TLC-Left |
| tlc-right | 0x0E | TLC-Right |
| tlc-stop | 0x0F | TLC-Stop |
| XY | 0xXY | Nicht definiert |

### TLAENDERVARIANTETUNER

| WERT | TEXT |
| --- | --- |
| 0x00 | ECE |
| 0x01 | US |
| 0x02 | Japan |
| 0x03 | Oceanien |
| 0x07 | No Area |
| 0xXY | nicht definiert |

### TTPFUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | TP nicht aktiv |
| 0x01 | TP aktiv |
| 0xXY | nicht definiert |

### TRDSAFFUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | RDS ein; AF aus |
| 0x01 | RDS ein; AF manuell |
| 0x02 | RDS ein; AF automatisch |
| 0x03 | RDS aus |
| 0x07 | Nicht definiert |
| 0xXY | nicht definiert |

### TPTYTABELLE

| WERT | TEXT |
| --- | --- |
| 0x00 | PTY ECE |
| 0x01 | PTY US |
| 0xXY | nicht definiert |

### TREGIONALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x01 | Wert 1 |
| 0x02 | Wert 2 |
| 0xXY | nicht definiert |

### THIGHCUT

| WERT | TEXT |
| --- | --- |
| 0x00 | High |
| 0x01 | Low |
| 0x02 | Auto |
| 0x03 | Notch |
| 0xXY | nicht definiert |

### TSENDERTAB

| WERT | TEXT |
| --- | --- |
| 0x00 | HGL |
| 0x01 | FMD |
| 0xXY | nicht definiert |

### TKEYNR

| NAME | KEYNR |
| --- | --- |
| 0 | 0x00 |
| 1 | 0x01 |
| 2 | 0x02 |
| 3 | 0x03 |
| 15 | 0x0F |
| all | 0xFF |
| alle | 0xFF |
| default | 0xEE |

### TFLOTTENMODUS

| MASKE | TEXT |
| --- | --- |
| 0x00 | Keine NAVI-DVD Sperrung |
| 0x01 | NAVI-DVD ist mit PIN-Code gesperrt |
| 0x02 | NAVI-DVD ist immer gesperrt |

### TENTSOURCE

| MASKE | TEXT |
| --- | --- |
| 0x00 | next |
| 0x01 | FM |
| 0x02 | AM |
| 0x03 | SCD |
| 0x04 | CDC |
| 0x05 | MD |
| 0x06 | WB |
| 0x07 | SDARS |
| 0x08 | IBOC |
| 0x09 | AUX |
| 0x0A | DVD |
| 0x0B | TV |
| 0x0C | VIDEOTXT |
| 0x0D | AV-AUX |
| 0x0E | DAB |
| 0xFF | Entertainmentsource not available |

### THWVARIANTE

| NAME | MASKE | WERT |
| --- | --- | --- |
| STEREO | 0x11 | 0 |
| HIFI | 0x01 | 1 |
| TOP-HIFI | 0x02 | 2 |
| Fehler | 0xXY | -1 |

### TLAUFWERKSVARIANTE

| NAME | MASKE | WERT |
| --- | --- | --- |
| CDROM-Laufwerk | 0x01 | 1 |
| CDAudio-Laufwerk | 0x02 | 2 |
| DVD-Laufwerk | 0x03 | 3 |
| MD-Laufwerk | 0x04 | 4 |
| Unbekannt | 0xXY | -1 |

### TFREQUSINUSGENERATOR

| WERT |
| --- |
| 20000 |
| 18000 |
| 16000 |
| 15000 |
| 14000 |
| 12500 |
| 10000 |
| 8900 |
| 4450 |
| 3550 |
| 2800 |
| 2200 |
| 1800 |
| 1400 |
| 1000 |
| 700 |
| 300 |
| 200 |
| 100 |
| 89 |
| 63 |
| 50 |
| 40 |
| 28 |
| 20 |

### LWREASON

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Mechanikfehler |
| 0x02 | Kommunikationsfehler |
| 0x03 | Flash Programmierfehler |
| 0xFFFF | unbekannter Grund |

### ANTREASON

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Offen oder Kurz gegen Vcc |
| 0x02 | Kurz gegen Masse |
| 0xFFFF | unbekannter Grund |

### ONLINESTATETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Online-Status OK |
| 0x01 | Daten nicht abrufbar |
| 0xXY | nicht definiert |

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000020001 | 04 | 20000200 | 05 | 2000020000 | 00 |  | AudioMaster.VolumeActual |
| 0x0001 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000022001 | 04 | 20000220 | 05 | 2000022000 | 00 |  | AudioMaster.Balance |
| 0x0002 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000022101 | 04 | 20000221 | 05 | 2000022100 | 00 |  | AudioMaster.Fader |
| 0x0003 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000022201 | 04 | 20000222 | 05 | 2000022200 | 00 |  | AudioMaster.Bass |
| 0x0004 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000022301 | 04 | 20000223 | 05 | 2000022300 | 00 |  | AudioMaster.Treble |
| 0x0005 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000026001 | 04 | 20000260 | 05 | 2000026000 | 00 |  | AudioMaster.AMSDVolumeTable(GAL) |
| 0x0006 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 2000027101 | 04 | 20000271 | 05 | 2000027100 | 00 |  | AudioMaster.AMReverbRoomSize(LOG7) |
| 0x0007 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 2202046301020000 | 04 | 22020463 | 05 | 2202046300 | 00 |  | GraphEqualizerStd(nur an TOPHIFI!!!) |
| 0x0008 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020104 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos1 |
| 0x0009 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0301 | 00 |  | FMPresetSave.Pos1 |
| 0x000A | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020204 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos2 |
| 0x000B | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0302 | 00 |  | FMPresetSave.Pos2 |
| 0x000C | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020304 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos3 |
| 0x000D | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0303 | 00 |  | FMPresetSave.Pos3 |
| 0x000E | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020404 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos4 |
| 0x000F | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0304 | 00 |  | FMPresetSave.Pos4 |
| 0x0010 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020504 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos5 |
| 0x0011 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0305 | 00 |  | FMPresetSave.Pos5 |
| 0x0012 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020604 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos6 |
| 0x0013 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0306 | 00 |  | FMPresetSave.Pos6 |
| 0x0014 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020704 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos7 |
| 0x0015 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0307 | 00 |  | FMPresetSave.Pos7 |
| 0x0016 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020804 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos8 |
| 0x0017 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0308 | 00 |  | FMPresetSave.Pos8 |
| 0x0018 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020904 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos9 |
| 0x0019 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C0309 | 00 |  | FMPresetSave.Pos9 |
| 0x001A | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020A04 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos10 |
| 0x001B | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C030A | 00 |  | FMPresetSave.Pos10 |
| 0x001C | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020B04 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos11 |
| 0x001D | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C030B | 00 |  | FMPresetSave.Pos11 |
| 0x001E | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 08 | 40000C0301020C04 | 04 | 40000C03 | 05 | 4000020600 | 00 |  | FMPresetList.Pos12 |
| 0x001F | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 09 | 4000040000030C030C | 00 |  | FMPresetSave.Pos12 |
| 0x0020 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 1001020201 | 04 | 10010202 | 05 | 1001020200 | 00 |  | MMI.CurrentUnits |
| 0x0021 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 1001020001 | 04 | 10010200 | 05 | 1001020000 | 00 |  | MMI.CurrentLanguage |
| 0x0022 | 0x00 | 01 | 63 | 02 | 000F | 01 | 00 | 05 | 1001025301 | 04 | 10010253 | 05 | 1001025300 | 00 |  | MMI.ActionSpecialFunctionButtonMFL |
| 0x0023 | 0x00 | 03 | 63 | 02 | 000F | 01 | 00 | 01 | 01 | 00 |  | 01 | 01 | 00 |  | NaviAdressbook.Liste1 |
| 0x0024 | 0x00 | 03 | 63 | 02 | 000F | 01 | 00 | 01 | 02 | 00 |  | 01 | 02 | 00 |  | NaviAdressbook.Liste2(Home) |
| 0x0025 | 0xFF | 03 | 63 | 02 | 000F | 01 | 00 | 01 | 03 | 00 |  | 01 | 03 | 00 |  | NaviAdressbook.Liste3(Last) |
