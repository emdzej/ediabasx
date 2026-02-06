# icm_71.prg

## General

|  |  |
| --- | --- |
| File | icm_71.prg |
| Type | PRG |
| Jobs | 99 |
| Tables | 73 |
| Origin | BMW EF-610 Rüdiger Magdon |
| Revision | 5.034 |
| Author | BMW EF-610 Rüdiger_Magdon, GTImbH EF-610 Peter_Gross-Grueber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrated Chassis Management für E71 |  |  |
| ORIGIN | string | BMW EF-610 Rüdiger Magdon |  |  |
| REVISION | string | 5.034 |  |  |
| AUTHOR | string | BMW EF-610 Rüdiger_Magdon, GTImbH EF-610 Peter_Gross-Grueber |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.43 |  |  |
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

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0 : Datentyp (1: Daten, 2: Maskendaten) Byte 1 : (unbenutzt) Wortbreite (1: Byte, 2: Word, 3: DWord) Byte 2 : (unbenutzt) Byteordnung (0: LSB zuerst, 1 MSB zuerst) Byte 3 : Adressierung (0: freie Adressierung, 1: Blockadressierung) Byte 4 : (unbenutzt) Byteparameter 1 Byte 5, 6 : (unbenutzt) WordParameter 1 (low / high) Byte 7, 8 : (unbenutzt) WordParameter 2 (low / high) Byte 9, 10, 11, 12 : (unbenutzt) Maske (linksbuendig) Byte 13, 14 : Anzahl Bytedaten (low / high) Byte 15, 16 : (unbenutzt) Anzahl Wortdaten (low / high) Byte 17, 18, 19, 20 : Wortadresse (low / highbyte, low / highword) Byte 21, .... : Codierdaten Byte 21 + Anzahl Daten: ETX (0x03) |

### STATUS_SZL

Auslesen verschiedener vom SZL gesendeter Werte ueber F-CAN KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $06 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SUMMENLENKWINKEL

Auslesen des im SG errechneten Summenlenkwinkelsrohwertes KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $23 Zustand des Werksmodus KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $08 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_FAHRERLENKWINKEL

Auslesen des Fahrerlenkwinkels vom SZL KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0A InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_SG_STATE

ICM_lt Steuergeraetestatus (diverse Zustandsgroessen) KWP2000: $22 ReadDataByCommonIdentifier SubID  : $0F recordCommonIdentifier(RCI_) SubID  : $FF recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_SG_WERK

ICM_lt Werksstatus KWP2000: $22 ReadDataByCommonIdentifier SubID  : $0F recordCommonIdentifier(RCI_) SubID  : $FF recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_QMVH_ZFM_FS_I

Kommunikation QSG ICM KWP2000: $22 ReadDataByCommonIdentifier SubID  : $02 recordCommonIdentifier(RCI_) SubID  : $01 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_QMVH_ZFM_ANTEUERUNG

QSG Ansteuerung KWP2000: $22 ReadDataByCommonIdentifier SubID  : $02 recordCommonIdentifier(RCI_) SubID  : $02 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_QMVH_ZFM_ZAKT

Zustände Aktuatoren KWP2000: $22 ReadDataByCommonIdentifier SubID  : $02 recordCommonIdentifier(RCI_) SubID  : $03 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_QMVH_ZFM_SOLL_IST_MOMENT

Soll Ist Moment KWP2000: $22 ReadDataByCommonIdentifier SubID  : $02 recordCommonIdentifier(RCI_) SubID  : $04 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_QES_FS_I

Qualität Eingangssignale ZFM KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $01 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_QES_AB_QMV

Qualität Eingangssignale ZFM KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $02 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZAKT_ABLEN

Zustände Aktuatoren KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $03 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZEF_FS

Zustände Externe Funktionen KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $04 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZIF_DK_VQ

Zustände Interne Funktionalität KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $05 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZIF_DK_FQ

Zustände Interne Funktionalität KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $06 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZIF_DK_RL

Zustände Interne Funktionalität, Regelung-Laengs KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $07 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZIF_DK_SQ

Zustände Interne Funktionalität KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $08 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_ZIF_DK_RQ

Zustände Interne Funktionalität KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $09 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_QIS_DK_VQ

Qualität Interne Signale KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $0A recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_QIS_DK_FQ

Qualität Interne Signale KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $0B recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_QIS_DK_SQ

Qualität Interne Signale KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $0C recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ZFM_QIS_DK_RQ

Qualität Interne Signale KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $0D recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### START_AL_LW_CODIERUNG_INIT

AL Codierueberwachung zuruecksetzen [STEUERN_ADAPTIVDATEN_SETZEN(31,0)] KWP2000: $2E WriteDataByLocalIdentifer SubID  : $00 SubID  : $04 KWP2000: $11 ECUReset SubID  : $01 PowerOn Modus  : Default

_No arguments._

### START_ADAPTIVDATEN_ABGLEICH

Aktiviert für einen Klemmenzyklus die Sensorabgleiche falls sie auskodiert sind KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $51 Abgleich der Adaptivdaten wird gestartet Modus  : Default

_No arguments._

### START_ADAPTIVDATEN_WERKSMODUS

Adaptivdaten im Werk vorbelegen KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $52 Toleranzbaender,Empfindlichleiten in den Adaptivdaten werden gesetzt Modus  : Default

_No arguments._

### START_ADAPTIVDATEN_RUECKSETZEN

Adaptivdaten werden auf DEFAULT Werte gesetzt, aus EEPROM oder ROM KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $53 Adaptivdaten im EEPROM werden auf DEFAULT Werte gesetzt Modus  : Default

_No arguments._

### START_ADAPTIVDATEN_OFFSET_LERNEN

Schnellabgleich der Ax und Ay Werte Randbedingungen, Fahrzeugstillstand auf ebener Fläche KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $24 Lernen der Offsetwerte KWP2000: $11 ECUReset SubID  : $01 PowerOn Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_ABGLEICH

aktueller Zustand des Adaptivdatenabgleichs Aktiviert für einen Klemmenzyklus die Sensorabgleiche falls sie auskodiert sind KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $51 alle aktuelle Abgleichstati abfragen Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_WERKSMODUS

aktueller Zustand des Ruecksetzens der Adaptivdaten KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $52 Toleranzbaender,Empfindlichleiten in den Adaptivdaten werden gesetzt Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_RUECKSETZEN

aktueller Zustand des Ruecksetzens der Adaptivdaten KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $53 Adaptivdaten werden mit DEFAULT Werten belegt Modus  : Default

_No arguments._

### STEUERN_ADAPTIVDATEN_SETZEN

Adaptivdaten setzen KWP2000: $2E WriteDataByLocalIdentifer SubID  : $00 SubID  : $04 KWP2000: $11 ECUReset SubID  : $01 PowerOn Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ADAPTIV_INDEX_WERT | int | Wertebereich: ( 0...65565 ) moegliche Zustaende: (  0 -- > VCH Lernwerttoleranz (beide Kurven) ) moegliche Zustaende: (  1 -- > VCH Lernwerttoleranz (links Kurven) ) moegliche Zustaende: (  2 -- > VCH Lernwerttoleranz (rechts Kurven) ) moegliche Zustaende: (  3 -- > VCH Lernwert (beide Kurven) ) moegliche Zustaende: (  4 -- > VCH Lernwert (links Kurven) ) moegliche Zustaende: (  5 -- > VCH Lernwert (rechts Kurven) ) moegliche Zustaende: (  6 -- > Korrekturfaktor für die Rollrate zur Kompensation des Gierratenübersprechens ) moegliche Zustaende: (  7 -- > Offsetwert des Längsbeschleunigungssensors 1 ) moegliche Zustaende: (  8 -- > Signaltoleranz des Längsbeschleunigungsnutzsignals 1 ) moegliche Zustaende: (  9 -- > Offsetwert des Querbeschleunigungssensors 1 ) moegliche Zustaende: ( 10 -- > Signaltoleranz des Querbeschleunigungsnutzsignals 1 ) moegliche Zustaende: ( 11 -- > Offsetwert des Querbeschleunigungssensors 2 ) moegliche Zustaende: ( 12 -- > Signaltoleranz des Querbeschleunigungsnutzsignals 2 ) moegliche Zustaende: ( 13 -- > Offsetwert des Ritzelwinkels ) moegliche Zustaende: ( 14 -- > Signaltoleranz des Ritzelwinkelnutzsignals ) moegliche Zustaende: ( 15 -- > Offsetwert des Rollratensensors 1 ) moegliche Zustaende: ( 16 -- > Signaltoleranz des Rollratennutzsignals 1 ) moegliche Zustaende: ( 17 -- > Offsetwert des Gierratensensors 1 aus Fahrtabgleich ) moegliche Zustaende: ( 18 -- > Offsetwert des Gierratensensors 1 aus Stillstandsabgleich ) moegliche Zustaende: ( 19 -- > Signaltoleranz des Gierratennutzsignals 1 ) moegliche Zustaende: ( 20 -- > Offsetwert des Gierratensensors 2 aus Fahrtabgleich ) moegliche Zustaende: ( 21 -- > Offsetwert des Gierratensensors 2 aus Stillstandsabgleich ) moegliche Zustaende: ( 22 -- > Signaltoleranz des Gierratennutzsignals 2 ) moegliche Zustaende: ( 23 -- > Empfindlichkeit des Längsbeschleunigungssensors 1 ) moegliche Zustaende: ( 24 -- > Radtoleranz hinten links ) moegliche Zustaende: ( 25 -- > Radtoleranz hinten rechts ) moegliche Zustaende: ( 26 -- > Radtoleranz vorne links ) moegliche Zustaende: ( 27 -- > Radtoleranz vorne rechts ) moegliche Zustaende: ( 28 -- > Empfindlichkeit Rollratensensor 1 ) moegliche Zustaende: ( 29 -- > Empfindlichkeit Gierratensensor 1 ) moegliche Zustaende: ( 30 -- > Empfindlichkeit Gierratensensor 2 ) moegliche Zustaende: ( 31 -- > Lernwert für die Lenkwinkelkodierüberwachung ) moegliche Zustaende: ( 32 -- > Lernwert für die Vorzeichenüberwachung Querbeschleunigung 1 ) moegliche Zustaende: ( 33 -- > Lernwert für die Vorzeichenüberwachung Querbeschleunigung 2 ) moegliche Zustaende: ( 34 -- > Lernwert für die Vorzeichenüberwachung Gierrate 1 ) moegliche Zustaende: ( 35 -- > Lernwert für die Vorzeichenüberwachung Gierrate 2 ) moegliche Zustaende: ( 36 -- > Lernwert für die Vorzeichenüberwachung Gierrate aus Radgeschwindigkeiten ) moegliche Zustaende: ( 37 -- > Lernwert für Offset des Lernwerts ax aus Antriebsmoment ) moegliche Zustaende: ( 38 -- > Lernwert für Offset des Lernwerts ofs_deYR ) Telegrammlaenge KWP: ( 4 Byte ) |
| ADAPTIV_WERT | real | zu schreibender Adaptivwert Wertebereich: ( 0...????? ) Telegrammlaenge KWP: ( 4 Byte ) |

### STATUS_ADAPTIVDATEN_LESEN

Adaptivdaten lesen KWP2000: $22 ReadDataByCommonIdentifier SubID  : $00 recordCommonIdentifier(RCI_) SubID  : $03 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_PU_LESEN

Adaptivdaten lesen KWP2000: $22 ReadDataByCommonIdentifier SubID  : $00 recordCommonIdentifier(RCI_) SubID  : $05 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STEUERN_ECO_VENTIL

Bestromumg des ECO Ventils KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $20 InputOutputLocalIdentifier(IOLI) SubID  : $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ECO_VENTIL_STROM_SOLL_WERT | real | zu stellender Strom fuer das Servo Ventil Wertebereich: ( 0...1000 mA ) Telegrammlaenge KWP: ( 4 Byte ) |

### STEUERN_SERVO_VENTIL

Bestromumg des SERVO Ventils KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $21 InputOutputLocalIdentifier(IOLI) SubID  : $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SERVO_VENTIL_STROM_SOLL_WERT | real | zu stellender Strom fuer das Servo Ventil Wertebereich: ( 0...1000 mA ) Telegrammlaenge KWP: ( 4 Byte ) |

### STATUS_ECO_VENTIL

aktueller Zustand und Bestromung des ECO Ventils KWP2000: $22 ReadDataByCommonIdentifier SubID  : $02 recordCommonIdentifier SubID  : $05 recordCommonIdentifier Modus  : Default

_No arguments._

### STATUS_SERVO_VENTIL

aktueller Zustand und Bestromung des SERVO Ventils KWP2000: $22 ReadDataByCommonIdentifier SubID  : $02 recordCommonIdentifier SubID  : $06 recordCommonIdentifier Modus  : Default

_No arguments._

### STATUS_AL_WINKELWERTE

Auslesen verschiedener Winkelwerte, wie Fahrerlenkwinkel, Summenlenkwinkel, Motorlagewinkel KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $23 Zustand des Werksmodus KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0F InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### START_AL_MLW_RUECKSETZEN

Motorlagewinkel wird ungueltig gesetzt KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $21 Motorlagewinkel ungueltig setzen Modus  : Default

_No arguments._

### START_AL_MLWOFFSET_SETZEN

intern berechneter Motorlagewinkeloffset wird gesepeichert KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $22 Speicherung des Motorlagewinkeloffset Modus  : Default

_No arguments._

### STEUERN_AL_INITMODE

AktivLenkung wird in den Werksmodus versetzt KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $23 Speicherung des Motorlagewinkeloffset Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AL_INITMODE_WERT | int | zu setzender Werksmodus moegliche Zustaende: ( 0 -- > Werksmodus AL aus ) moegliche Zustaende: ( 1 -- > Werksmodus AL ein ) Wertebereich: ( 0..1 ) Telegrammlaenge KWP: ( 1 Byte ) |

### STATUS_AL_INITMODE

aktueller Zustand ob AL im Werksmodus ist KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $23 Zustand des Werksmodus Modus  : Default

_No arguments._

### STATUS_AL_MLW_INIT

Gueltigkeit des Motorlagewinkels AL auslesen KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $20 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### STATUS_AL_MLWOFFSET_SETZEN

Status AL MLW Offset KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $22 Gueltigkeit AL Motorlagewinkeloffset Modus  : Default

_No arguments._

### STATUS_AL_ICM_VERBUND

Status AktivLenkung beim ICM KWP2000: $22 ReadDataByCommonIdentifier SubID  : $00 recordCommonIdentifier(RCI_) SubID  : $01 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STATUS_AL_CHECKCONTROL

Checkcontrol Meldungen der Aktivlenkung KWP2000: $22 ReadDataByCommonIdentifier SubID  : $01 recordCommonIdentifier(RCI_) SubID  : $11 recordCommonIdentifier(RCI_) Modus  : Default

_No arguments._

### STEUERN_AL_SPANNUNGSVERSORGUNG

AL Spannungsversorgung ein/ausschalten KWP2000: $2E WriteDataByCommonIdentifier SubID  : $F0 recordCommonIdentifier SubID  : $15 recordCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AL_SPANNUNGSVERSORGUNG_WERT | int | Wertebereich: ( 0..1 ) moegliche Zustaende: (  0 -- > aus ) moegliche Zustaende: (  1 -- > ein ) |

### STATUS_FN_AL

STATUS_FN_AL KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $56 Funktion AL analysieren Modus  : Default

_No arguments._

### START_MODUS_ROLLENPRUEFSTAND

versetzt das ICM Steuergerät in einen Rollenprüfstandsmodus Geschwindigkeit entspricht HA-Geschwindigkeit, Regler passiv KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $54 routineLocalIdentifier Modus  : Default

_No arguments._

### STOP_MODUS_ROLLENPRUEFSTAND

dieser Job beendet den Rollenpruefstandsmodus des ICM-Steuergeraets KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $55 routineLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ROLLENPRUEFSTAND

dieser Job liefert den Status des Rollenprüfstandsmodus KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $54 routineLocalIdentifier Modus  : Default

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
| 0x640C | allgemeiner Steuergeräte Hardware Fehler |
| 0x640D | Fahrgestellnummer Vergleich |
| 0x640E | Codierdaten Fehler |
| 0x640F | Boot oder Flash Fehler |
| 0x6410 | Leitung AL Kurzschluss oder Unterbrechung |
| 0x6411 | Sicherheitsabschaltung Diversitaeres Rechnen |
| 0x6412 | Betriebssystem Eigen-Diagnose |
| 0x6413 | EVV sporadischer Fehler |
| 0x6414 | Servo sporadischer Fehler |
| 0x6415 | Werksmodus AL ist aktiv |
| 0x6416 | allgemeiner Steuergeräte Softwareware Fehler |
| 0x6417 | Modus fuer Rollenprüfstand aktiv |
| 0x641A | Unterspannung Klemme 30 (< 9 Volt) |
| 0x641B | Ueberspannung Klemme 30 (>16 Volt) |
| 0x641C | Diversitaeres Rechnen CRC-Fehler |
| 0x641D | Sensor-Abgleiche nicht durchgeführt |
| 0x6421 | Signalsammelfehler Sender AL |
| 0x6422 | Signalfehler in der Botschaft (ST_LTRQD_BAX_ACT, ID=13E) von QSG ICM-CAN |
| 0x6423 | Signalsammelfehler Sensorcluster |
| 0x6424 | Signalfehler in der Botschaft (Lenkradwinkel Oben 2, ID=C9) von SZL F-CAN |
| 0x6425 | Signalsammelfehler Sender DME |
| 0x6426 | Signalfehler in der Botschaft (Status Anhaenger, ID=2E4) von AHM PT-CAN |
| 0x6427 | Signalsammelfehler Sender CAS |
| 0x6428 | Signalfehler in der Botschaft (Status Sollmomentumsetzung, ID=BC) von VGSG PT-CAN |
| 0x6429 | Signalfehler in der Botschaft (Drehmoment 1, ID=0A8) von DME PT-CAN |
| 0x642A | Signalfehler in der Botschaft (Drehmoment 3, ID=0AA) von DME PT-CAN |
| 0x642B | Signalfehler in der Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0x642C | Signalfehler in der Botschaft (Status DSC PT-CAN, ID=19E) von EHB3 PT-CAN |
| 0x642D | Signalfehler in der Botschaft (Raddruecke PT-CAN, ID=2B2) von EHB3 PT-CAN |
| 0x642E | Signalfehler in der Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0x642F | Sensorcluster Typ unbekannt |
| 0x6430 | Signalfehler in der Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0x6431 | Signalfehler in der Botschaft (Status Lenkung Vorderachse Stellglied, ID=13D) von ASA ICM-CAN |
| 0x6432 | Signalfehler in der Botschaft (Status Lenkung Vorderachse Stellglied Erweitert, ID=13F) von ASA ICM-CAN |
| 0x6433 | Signalfehler in der Botschaft (Radgeschwindigkeiten, ID=0CE) von EHB3 F-CAN |
| 0x6434 | Signalfehler in der Botschaft (Regeleingriffe DSC, ID=11E) von EHB3 F-CAN |
| 0x6435 | Signalfehler in der Botschaft (Austausch DSC, ID=12D) von EHB3 F-CAN |
| 0x6436 | Signalfehler in der Botschaft (CLU1 VDA, ID=0D8) von SC_VDA F-CAN |
| 0x6437 | Signalfehler in der Botschaft (CLU2 VDA, ID=0E3) von SC_VDA F-CAN |
| 0x6438 | Signalfehler in der Botschaft (CLU3 VDA, ID=0F4) von SC_VDA F-CAN |
| 0x6439 | Signalfehler in der Botschaft (CLU Status VDA, ID=165) von SC_VDA F-CAN |
| 0x643A | Signalfehler in der Botschaft (Status ARS Modul, ID=1AC) von ARS PT-CAN |
| 0x643B | EVV Unterbrechung Schaltkreis |
| 0x643C | EVV Kurzschluss Masse gegen Low Side |
| 0x643D | EVV Kurzschluss Klemme 30 gegen Low Side |
| 0x643E | EVV Kurzschluss Masse gegen High Side |
| 0x6440 | EVV Kurzschluss Klemme 30 gegen High Side |
| 0x6441 | EVV Kurzschluss Spulenwindung |
| 0x6442 | EVV nicht lokalisierbarer Kurzschluss gegen Masse |
| 0x6443 | EVV nicht lokalisierbarer Kurzschluss gegen Klemme 30 |
| 0x6444 | Servo Unterbrechung Schaltkreis |
| 0x6445 | Servo Kurzschluss Masse gegen Low Side |
| 0x6446 | Servo Kurzschluss Klemme 30 gegen Low Side |
| 0x6447 | Servo Kurzschluss Masse gegen High Side |
| 0x6448 | Servo Kurzschluss Klemme 30 gegen High Side |
| 0x6449 | Servo Kurzschluss Spulenwindung |
| 0x644A | Servo nicht lokalisierbarer Kurzschluss gegen Masse |
| 0x644B | Servo nicht lokalisierbarer Kurzschluss gegen Klemme 30 |
| 0x644C | Motorlagewinkel AL ungueltig |
| 0x644D | AL inaktiv und Fahrzeug rollt |
| 0x644E | AL im Pausemodus und Fahrzeug rollt (Motor abgewuergt, Unterspannung, …) |
| 0x644F | AL im Errormodus |
| 0x6450 | AL im undefinierten Statemaschine Zustand (haengt im Init, Postrun fest) |
| 0x6451 | AL im Werksmodus |
| 0x6452 | SZL neu abgeglichen |
| 0x6453 | SZL neu verbaut |
| 0x6454 | AL gestoert: schnelle Lenkwinkelsynchronisation |
| 0x6455 | AL gestoert: langsame Lenkwinkelsynchronisation |
| 0x6456 | AL gestoert: AGB (verfuegbare Dynamik zu gering, Fehleramplitude zu gross) |
| 0x6457 | Signal ZfmFs_r_vx nicht nutzbar (fsqual nicht in Ordnung) |
| 0x6458 | Signal ZfmFs_i_engine_run nicht nutzbar (fsqual nicht in Ordnung) |
| 0x6459 | Signal ZfmFs_i_ASA_sq nicht nutzbar (fsqual nicht in Ordnung) |
| 0x645A | Signal ZfmFs_r_lwVA_akt_max_dyn nicht nutzbar (fsqual nicht in Ordnung) |
| 0x645B | AL kann nicht in aktiven Modus wechseln |
| 0x645C | Signalfehler in der Botschaft (Sensor Daten ROSE, ID=12A) von ACSM_ROSE F-CAN |
| 0x645D | Codierdaten Checksummenfehler |
| 0x645E | falsch codierte AL |
| 0x645F | AL Grenze fuer Lenkwinkelendanschlag ueberschritten |
| 0x6460 | SZL in Initialisierungsphase |
| 0x6461 | Signalueberwachung der Sensorclustersignale hat angeschlagen |
| 0x6462 | Signalueberwachung der Lenkwinkelsignale hat angeschlagen |
| 0x6463 | Fehler in Codierdaten. System im Errormode |
| 0x6464 | AY-Check Threshold war oder ist aktiv |
| 0xD007 | F-CAN Kommunikationsfehler |
| 0xD008 | F-CAN physikalisch gestoert |
| 0xD00B | PT-CAN Kommunikationsfehler |
| 0xD00C | PT-CAN physikalisch gestoert |
| 0xD00E | ICM-CAN physikalisch gestoert |
| 0xD00F | ICM-CAN Kommunikationsfehler |
| 0xD010 | Botschaft (Lenkradwinkel oben, ID=0C9) von SZL F-CAN |
| 0xD011 | Botschaft (Radgeschwindigkeiten, ID=0CE) von EHB3 F-CAN |
| 0xD012 | Botschaft (CLU1 VDA, ID=0D8) von SC_VDA F-CAN |
| 0xD013 | Botschaft (CLU2 VDA, ID=0E3) von SC_VDA F-CAN |
| 0xD014 | Botschaft (CLU3 VDA, ID=0F4) von SC_VDA F-CAN |
| 0xD015 | Botschaft (Regeleingriffe DSC AFS, ID=11E) von EHB3 F-CAN |
| 0xD016 | Botschaft (Austausch DSC ICM, ID=12D) von EHB3 F-CAN |
| 0xD017 | Botschaft (Klemmenstatus, ID=130) von CAS F-CAN |
| 0xD018 | Botschaft (CLU Status VDA, ID=165) von SC_VDA F-CAN |
| 0xD019 | Botschaft (Sensor Daten ROSE, ID=12A) von ACSM_ROSE F-CAN |
| 0xD020 | Botschaft (Drehmoment 1, ID=0A8) von DME PT-CAN |
| 0xD021 | Botschaft (Drehmoment 3, ID=0AA) von DME PT-CAN |
| 0xD022 | Botschaft (Getriebedaten, ID=0BA) von EGS_EL PT-CAN |
| 0xD023 | Botschaft (Status Sollmomentumsetzung, ID=0BC) von VGSG PT-CAN |
| 0xD024 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xD025 | Botschaft (Status DSC PT-CAN, ID=19E) von EHB3 PT-CAN |
| 0xD026 | Botschaft (Status ARS Modul ID=1AC) von ARS PT-CAN |
| 0xD027 | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xD028 | Botschaft (Raddruecke PT-CAN, ID=2B2) von EHB3 PT-CAN |
| 0xD029 | Botschaft (Status Anhaenger, ID=2E4) von AHM PT-CAN |
| 0xD02A | Botschaft (Kilometerstand, ID=330) von Kombi PT-CAN |
| 0xD02B | Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0xD030 | Botschaft (Status Lenkung Vorderachse Stellglied, ID=13D) von ASA ICM-CAN |
| 0xD031 | Botschaft (Status Quermomentenverteilung Hinterachse Stellglied, ID=13E) von QSG PT-CAN |
| 0xD032 | Botschaft (Status Lenkung Vorderachse Stellglied Erweitert, ID=13F) von ASA PT-CAN |
| 0xD033 | Botschaft (Entwicklungsdaten ID=7C8) von QSG ICM-CAN |
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
| 0x640C | UWB_C | - | - | - |
| 0x640D | UWB_B | - | - | - |
| 0x640E | UWB_B | - | - | - |
| 0x640F | UWB_C | - | - | - |
| 0x6410 | UWB_B | - | - | - |
| 0x6411 | UWB_C | - | - | - |
| 0x6412 | UWB_D | - | - | - |
| 0x6413 | UWB_B | - | - | - |
| 0x6414 | UWB_B | - | - | - |
| 0x6416 | UWB_C | - | - | - |
| 0x641A | UWB_B | - | - | - |
| 0x641B | UWB_B | - | - | - |
| 0x641C | UWB_B | - | - | - |
| 0x641D | UWB_B | - | - | - |
| 0x642F | UWB_B | - | - | - |
| 0x643B | UWB_B | - | - | - |
| 0x643C | UWB_B | - | - | - |
| 0x643D | UWB_B | - | - | - |
| 0x643E | UWB_B | - | - | - |
| 0x6440 | UWB_B | - | - | - |
| 0x6441 | UWB_B | - | - | - |
| 0x6442 | UWB_B | - | - | - |
| 0x6443 | UWB_B | - | - | - |
| 0x6444 | UWB_B | - | - | - |
| 0x6445 | UWB_B | - | - | - |
| 0x6446 | UWB_B | - | - | - |
| 0x6447 | UWB_B | - | - | - |
| 0x6448 | UWB_B | - | - | - |
| 0x6449 | UWB_B | - | - | - |
| 0x644A | UWB_B | - | - | - |
| 0x644B | UWB_B | - | - | - |
| 0x645D | UWB_B | - | - | - |
| 0x645E | UWB_B | - | - | - |
| 0x645F | UWB_B | - | - | - |
| 0x6460 | UWB_B | - | - | - |
| 0x6463 | UWB_B | - | - | - |
| 0x6464 | UWB_B | - | - | - |
| default | UWB_A | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Zeitstempel, absolute Zeit in ms | ms | - | signed long | - | 10 | 1 | 0 |
| 0x02 | Fehler Detail, zuletzt gemeldet | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x03 | Abschaltvektor ZFM 1 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x04 | Abschaltvektor ZFM 2 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x05 | Abschaltvektor DSC | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x06 | Abschaltvektor QMV | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Abschaltvektor AL | hex | high | signed long | - | 1 | 1 | 0 |
| 0x08 | Abschaltvektor MRAD | hex | high | signed long | - | 1 | 1 | 0 |
| 0x09 | Abschaltvektor ERRMGR | hex | high | signed long | - | 1 | 1 | 0 |
| 0x0A | Abschaltvektor SBS_FS_AX | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0B | Abschaltvektor SBS_FS_AY | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0C | Abschaltvektor SBS_FS_PSIP | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0D | Abschaltvektor SBS_LW_VA effektiv | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0E | Abschaltvektor SBS_LW_VA aktuell | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0F | Abschaltvektor SBS_LW Fahrer | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x10 | Versorgungsspannung | Volt | - | unsigned char | - | 0.125 | 1 | 0 |
| 0x11 | Service Qualifier Aktivlenkung | hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | Fahrzeuggeschwindigkeit | m/s | - | unsigned char | - | 0.5 | 1 | -14 |
| 0x21 | Querbeschleunigung | m/s² | - | signed char | - | 0.12 | 1 | 0 |
| 0x22 | Gierrate | rad/s | - | signed char | - | 0.01375 | 1 | 0 |
| 0x23 | Summenlenkwinkel Rohwert | rad | - | signed int | - | 0.0175 | 1 | 0 |
| 0x24 | Fahrerlenkwinkel rad | rad | - | signed int | - | 0.0175 | 1 | 0 |
| 0x25 | Laengsbeschleunigung | m/s² | - | signed char | - | 0.08 | 1 | 0 |
| 0x26 | Lenkwinkel VA effektiv | rad | - | signed char | - | 0.006 | 1 | 0 |
| 0x27 | Fahrerlenkwinkel rad | rad | - | signed char | - | 0.08 | 1 | 0 |
| 0x28 | generische Geschwindigkeit | m/s | - | signed char | - | 0.5 | 1 | -23 |
| 0x29 | Fehleramplitude SBS AX | m/s | - | signed char | - | 0.05 | 1 | -1.2 |
| 0x2A | Fehleramplitude SBS AY | m/s | - | signed char | - | 0.05 | 1 | -1.2 |
| 0x2B | Fehleramplitude SBS PSIP | rad/s | - | signed char | - | 0.009 | 1 | -0.2 |
| 0x2C | Fehleramplitude SBS Lenkwinkel | rad | - | signed char | - | 0.005 | 1 | -0.15 |
| 0x40 | Access Violation | hex | high | signed long | - | 1 | 1 | 0 |
| 0x41 | Code Failure | hex | high | signed long | - | 1 | 1 | 0 |
| 0x42 | SPEFSCR Saved | hex | high | signed long | - | 1 | 1 | 0 |
| 0x50 | CPU 1 Block Status | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x51 | Laufzeit TASK Nr. 1 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x52 | Laufzeit TASK Nr. 2 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x53 | Laufzeit TASK Nr. 3 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x54 | Laufzeit TASK Nr. 4 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x55 | Laufzeit TASK Nr. 5 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x56 | Laufzeit TASK Nr. 6 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x57 | Laufzeit TASK Nr. 7 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x58 | Laufzeit TASK Nr. 8 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x60 | CPU1_H_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x61 | CPU1_L_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x62 | CPU2_H_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x63 | CPU2_L_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x70 | CPU1_0x13B high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x71 | CPU1_0x13B low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x72 | CPU2_0x13B high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x73 | CPU2_0x13B low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x74 | CPU1_0x13C high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x75 | CPU1_0x13C low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x76 | CPU2_0x13C high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x77 | CPU2_0x13C low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x78 | CPU1_0x136 high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x79 | CPU1_0x136 low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7A | CPU2_0x136 high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7B | CPU2_0x136 low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7C | CPU1_0x12E high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7D | CPU1_0x12E low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7E | CPU2_0x12E_high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7F | CPU2_0x12E low | hex | high | signed long | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
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
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x7000 | Diversitaeres Rechnen ODM-Analysedaten |
| 0x7001 | Diversitaeres Rechnen Fehler High Level Software |
| 0x7002 | Diversitaeres Rechnen 13B |
| 0x7003 | Diversitaeres Rechnen 13C |
| 0x7004 | Diversitaeres Rechnen 136 |
| 0x7005 | Diversitaeres Rechnen 12E |
| 0x7006 | temperaturbedingte Verfuegbarkeit QMVH unter Schwellwert |
| 0x7007 | Steuergeräte Reset |
| 0x7008 | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal ax |
| 0x7009 | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal ay |
| 0x700A | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal psiP |
| 0x700B | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal Istlenkwinkel Vorderachse lwVA_ist |
| 0x7010 | Signalueberwachung Laengsbeschleunigung ax1 hat zugeschlagen |
| 0x7011 | Signalueberwachung Querbeschleunigung ay1 hat zugeschlagen |
| 0x7012 | Signalueberwachung Querbeschleunigung ay2 hat zugeschlagen |
| 0x7013 | Signalueberwachung Gierrate psiP1 Fehler hat zugeschlagen |
| 0x7014 | Signalueberwachung Gierrate psiP2 Fehler hat zugeschlagen |
| 0x7015 | Signalueberwachung des Lenkwinkels der Aktivlenkung hat zugeschlagen |
| 0x7016 | Signalueberwachung des Fahrerlenkwinkels hat zugeschlagen |
| 0x701A | Ackermanngierrate ungueltig weil Fahrgeschwindigkeit ungueltig |
| 0x701B | Ackermanngierrate ungueltig weil Fahrgeschwindigkeit unzureichende Guete |
| 0x701C | Ackermanngierrate ungueltig weil Fahrerlenkwinkel ungueltig |
| 0x701D | Ackermanngierrate ungueltig weil Fahrzeug IST-Lenkwinkel unzureichende Guete |
| 0x7020 | CCM  Aktivlenkung gestoert  angefordert (ID 321) |
| 0x7021 | CCM  Aktivlenkung ausgefallen  angefordert (ID 273) |
| 0x7022 | CCM  QMV nicht verfuegbar erste ID  angefordert (ID 707) |
| 0x7023 | CCM  QMV nicht verfuegbar zweite ID  angefordert (ID 707) |
| 0x7024 | CCM  Servotronic ausgefallen  angefordert (ID 70) |
| 0x7422 | Signalfehler in der Botschaft (ST_LTRQD_BAX_ACT, ID=13E) von QSG ICM-CAN |
| 0x7424 | Signalfehler in der Botschaft (Lenkradwinkel Oben 2, ID=C9) von SZL F-CAN |
| 0x7426 | Signalfehler in der Botschaft (Status Anhaenger, ID=2E4) von AHM PT-CAN |
| 0x7428 | Signalfehler in der Botschaft (Status Sollmomentumsetzung, ID=BC) von VGSG PT-CAN |
| 0x7429 | Signalfehler in der Botschaft (Drehmoment 1, ID=0A8) von DME PT-CAN |
| 0x742A | Signalfehler in der Botschaft (Drehmoment 3, ID=0AA) von DME PT-CAN |
| 0x742B | Signalfehler in der Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0x742C | Signalfehler in der Botschaft (Status DSC PT-CAN, ID=19E) von EHB3 PT-CAN |
| 0x742D | Signalfehler in der Botschaft (Raddruecke PT-CAN, ID=2B2) von EHB3 PT-CAN |
| 0x742E | Signalfehler in der Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0x7430 | Signalfehler in der Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0x7431 | Signalfehler in der Botschaft (Status Lenkung Vorderachse Stellglied, ID=13D) von ASA ICM-CAN |
| 0x7432 | Signalfehler in der Botschaft (Status Lenkung Vorderachse Stellglied Erweitert, ID=13F) von ASA ICM-CAN |
| 0x7433 | Signalfehler in der Botschaft (Radgeschwindigkeiten, ID=0CE) von EHB3 F-CAN |
| 0x7434 | Signalfehler in der Botschaft (Regeleingriffe DSC, ID=11E) von EHB3 F-CAN |
| 0x7435 | Signalfehler in der Botschaft (Austausch DSC, ID=12D) von EHB3 F-CAN |
| 0x7436 | Signalfehler in der Botschaft (CLU1_VDA, ID=0D8) von SC_VDA F-CAN |
| 0x7437 | Signalfehler in der Botschaft (CLU2_VDA, ID=0E3) von SC_VDA F-CAN |
| 0x7438 | Signalfehler in der Botschaft (CLU3_VDA, ID=0F4) von SC_VDA F-CAN |
| 0x7439 | Signalfehler in der Botschaft (CLU Status VDA, ID=165) von SC_VDA F-CAN |
| 0x743A | Signalfehler in der Botschaft (Status ARS Modul ID=1AC) von ARS PT-CAN |
| 0x745C | Signalfehler in der Botschaft (Sensor Daten ROSE, ID=12A) von ACSM_ROSE F-CAN |
| 0x8010 | Botschaft (Lenkradwinkel oben, ID=0C9) von SZL F-CAN |
| 0x8011 | Botschaft (Radgeschwindigkeiten, ID=0CE) von EHB3 F-CAN |
| 0x8012 | Botschaft (CLU1_VDA, ID=0D8) von SC_VDA F-CAN |
| 0x8013 | Botschaft (CLU2_VDA, ID=0E3) von SC_VDA F-CAN |
| 0x8014 | Botschaft (CLU3_VDA, ID=0F4) von SC_VDA F-CAN |
| 0x8015 | Botschaft (Regeleingriffe DSC, ID=11E)  von EHB3 F-CAN |
| 0x8016 | Botschaft (Austausch DSC, ID=12D)  von EHB3 F-CAN |
| 0x8017 | Botschaft (Klemmenstatus, ID=130) von CAS F-CAN |
| 0x8018 | Botschaft (Status DSC-Sensor, ID=165) von EHB3 F-CAN |
| 0x8019 | Botschaft (Sensor Daten ROSE, ID=12A) von ACSM_ROSE F-CAN |
| 0x8020 | Botschaft (Drehmoment 1, ID=0A8) von DME PT-CAN |
| 0x8021 | Botschaft (Drehmoment 3, ID=0AA) von DME PT-CAN |
| 0x8022 | Botschaft (Getriebedaten, ID=0BA) von EGS_EL PT-CAN |
| 0x8023 | Botschaft (Status Sollmomentumsetzung, ID=0BC) von VGSG PT-CAN |
| 0x8024 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0x8025 | Botschaft (Status DSC PT-CAN, ID=19E) von EHB3 PT-CAN |
| 0x8026 | Botschaft (Status ARS Modul ID=1AC) von ARS PT-CAN |
| 0x8027 | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0x8028 | Botschaft (Raddruecke PT-CAN, ID=2B2) von EHB3 PT-CAN |
| 0x8029 | Botschaft (Anhaengerdaten, ID=2E4) von AHM PT-CAN |
| 0x802A | Botschaft (Kilometerstand, ID=330) von Kombi PT-CAN |
| 0x802B | Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0x8030 | Botschaft (Status Lenkung Vorderachse Stellglied, ID=13D) von ASA ICM-CAN |
| 0x8031 | Botschaft (Status Quermomentenverteilung Hinterachse Stellglied, ID=13E) von QSG ICM-CAN |
| 0x8032 | Botschaft (Status Lenkung Vorderachse Stellglied Erweitert, ID=13F) von ASA ICM-CAN |
| 0x8033 | Botschaft (Entwicklungsdaten, ID=7C8) von QSG ICM-CAN |
| 0x9008 | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal ax |
| 0x9009 | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal ay |
| 0x900A | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal psiP |
| 0x900B | Funktionsabschaltung aufgrund von Fehlertoleranz auf dem Signal Ist-Lenkwinkel-Vorderachse lwVA_ist |
| 0x9010 | Signalueberwachung Laengsbeschleunigung ax1 hat zugeschlagen |
| 0x9011 | Signalueberwachung Querbeschleunigung ay1 hat zugeschlagen |
| 0x9012 | Signalueberwachung Querbeschleunigung ay2 hat zugeschlagen |
| 0x9013 | Signalueberwachung Gierrate psiP1 Fehler hat zugeschlagen |
| 0x9014 | Signalueberwachung Gierrate psiP2 Fehler hat zugeschlagen |
| 0x9015 | Signalueberwachung des Lenkwinkels der Aktivlenkung hat zugeschlagen |
| 0x9016 | Signalueberwachung des Fahrerlenkwinkels hat zugeschlagen |
| 0x941D | Sensor-Abgleiche nicht durchgeführt |
| 0x9422 | Signalfehler in der Botschaft (ST_LTRQD_BAX_ACT, ID=13E) von QSG ICM-CAN |
| 0x9424 | Signalfehler in der Botschaft (Lenkradwinkel Oben 2, ID=C9) von SZL F-CAN |
| 0x9429 | Signalfehler in der Botschaft (Drehmoment 1, ID=0A8) von DME PT-CAN |
| 0x942A | Signalfehler in der Botschaft (Drehmoment 3, ID=0AA) von DME PT-CAN |
| 0x942D | Signalfehler in der Botschaft (Raddruecke PT-CAN, ID=2B2) von EHB3 PT-CAN |
| 0x9430 | Signalfehler in der Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0x9431 | Signalfehler in der Botschaft (Status Lenkung Vorderachse Stellglied, ID=13D) von ASA ICM-CAN |
| 0x9432 | Signalfehler in der Botschaft (Status Lenkung Vorderachse Stellglied Erweitert, ID=13F) von ASA ICM-CAN |
| 0x9433 | Signalfehler in der Botschaft (Radgeschwindigkeiten, ID=0CE) von EHB3 F-CAN |
| 0x9435 | Signalfehler in der Botschaft (Austausch DSC, ID=12D) von EHB3 F-CAN |
| 0x9436 | Signalfehler in der Botschaft (CLU1_VDA, ID=0D8) von SC_VDA F-CAN |
| 0x9437 | Signalfehler in der Botschaft (CLU2_VDA, ID=0E3) von SC_VDA F-CAN |
| 0x9438 | Signalfehler in der Botschaft (CLU3_VDA, ID=0F4) von SC_VDA F-CAN |
| 0x9439 | Signalfehler in der Botschaft (CLU Status VDA, ID=165) von SC_VDA F-CAN |
| 0x944C | Motorlagewinkel AL ungueltig |
| 0x944D | AL inaktiv und Fahrzeug rollt |
| 0x944E | AL im Pausemodus und Fahrzeug rollt (Motor abgewuergt, Untersannung) |
| 0x944F | AL im Errormodus |
| 0x9450 | AL in undefinitrtem Statemaschine Zustand (haengt im Intit, Postrun) |
| 0x9452 | SZL neu abgeglichen |
| 0x9453 | SZL neu verbaut |
| 0x9454 | AL gestoert: schnelle Lenkwinkelsynchronisation |
| 0x9455 | AL gestoert: langsame Lenkwinkelsynchronisation |
| 0x9456 | AL gestoert: AGB (verfuegbare Dynamik zu gering, Fehleramplitude zu gross) |
| 0x945B | AL kann nicht in aktiven Modus wechseln |
| 0x9461 | Signalüberwachung der Sensorclustersignale hat angeschlagen |
| 0x9462 | Signalüberwachung der Lenkwinkelsignale hat angeschlagen |
| 0xA010 | Botschaft (Lenkradwinkel oben, ID=0C9) von SZL F-CAN |
| 0xA011 | Botschaft (Radgeschwindigkeiten, ID=0CE) von EHB3 F-CAN |
| 0xA012 | Botschaft (CLU1_VDA, ID=0D8) von SC_VDA F-CAN |
| 0xA013 | Botschaft (CLU2_VDA, ID=0E3) von SC_VDA F-CAN |
| 0xA014 | Botschaft (CLU3_VDA, ID=0F4) von SC_VDA F-CAN |
| 0xA016 | Botschaft (Austausch DSC, ID=12D)  von EHB3 F-CAN |
| 0xA018 | Botschaft (Status DSC-Sensor, ID=165) von EHB3 F-CAN |
| 0xA020 | Botschaft (Drehmoment 1, ID=0A8) von DME PT-CAN |
| 0xA021 | Botschaft (Drehmoment 3, ID=0AA) von DME PT-CAN |
| 0xA028 | Botschaft (Raddruecke PT-CAN, ID=2B2) von DXC PT-CAN |
| 0xA030 | Botschaft (Status Lenkung Vorderachse Stellglied, ID=13D) von ASA ICM-CAN |
| 0xA031 | Botschaft (Status Quermomentenverteilung Hinterachse Stellglied, ID=13E) von QSG ICM-CAN |
| 0xA032 | Botschaft (Status Lenkung Vorderachse Stellglied Erweitert, ID=13F) von ASA ICM-CAN |
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
| 0x7000 | UWB_D | - | - | - |
| 0x7001 | UWB_A | - | - | - |
| 0x7002 | UWB_E | - | - | - |
| 0x7003 | UWB_F | - | - | - |
| 0x7004 | UWB_G | - | - | - |
| 0x7005 | UWB_H | - | - | - |
| 0x7006 | UWB_A | - | - | - |
| 0x7007 | UWB_D | - | - | - |
| 0x7008 | UWB_A | - | - | - |
| 0x7009 | UWB_A | - | - | - |
| 0x700A | UWB_A | - | - | - |
| 0x700B | UWB_A | - | - | - |
| 0x7010 | UWB_B | - | - | - |
| 0x7011 | UWB_B | - | - | - |
| 0x7012 | UWB_B | - | - | - |
| 0x7013 | UWB_B | - | - | - |
| 0x7014 | UWB_B | - | - | - |
| 0x7015 | UWB_B | - | - | - |
| 0x7016 | UWB_B | - | - | - |
| 0x701A | UWB_B | - | - | - |
| 0x701B | UWB_B | - | - | - |
| 0x701C | UWB_B | - | - | - |
| 0x701D | UWB_B | - | - | - |
| 0x7020 | UWB_B | - | - | - |
| 0x7021 | UWB_B | - | - | - |
| 0x7022 | UWB_B | - | - | - |
| 0x7023 | UWB_B | - | - | - |
| 0x7024 | UWB_B | - | - | - |
| 0x9008 | UWB_M | - | - | - |
| 0x9009 | UWB_M | - | - | - |
| 0x900A | UWB_M | - | - | - |
| 0x900B | UWB_N | - | - | - |
| 0x9010 | UWB_M | - | - | - |
| 0x9011 | UWB_M | - | - | - |
| 0x9012 | UWB_M | - | - | - |
| 0x9013 | UWB_M | - | - | - |
| 0x9014 | UWB_M | - | - | - |
| 0x9015 | UWB_N | - | - | - |
| 0x9016 | UWB_N | - | - | - |
| 0x941D | UWB_M | - | - | - |
| 0x9422 | UWB_J | - | - | - |
| 0x9424 | UWB_K | - | - | - |
| 0x9429 | UWB_L | - | - | - |
| 0x942A | UWB_L | - | - | - |
| 0x9431 | UWB_K | - | - | - |
| 0x9432 | UWB_K | - | - | - |
| 0x9433 | UWB_J | - | - | - |
| 0x9435 | UWB_J | - | - | - |
| 0x9436 | UWB_J | - | - | - |
| 0x9437 | UWB_J | - | - | - |
| 0x9438 | UWB_J | - | - | - |
| 0x9439 | UWB_J | - | - | - |
| 0x944C | UWB_K | - | - | - |
| 0x944D | UWB_K | - | - | - |
| 0x944E | UWB_K | - | - | - |
| 0x944F | UWB_K | - | - | - |
| 0x9450 | UWB_K | - | - | - |
| 0x9452 | UWB_K | - | - | - |
| 0x9453 | UWB_K | - | - | - |
| 0x9454 | UWB_K | - | - | - |
| 0x9455 | UWB_K | - | - | - |
| 0x9456 | UWB_K | - | - | - |
| 0x945B | UWB_K | - | - | - |
| 0x9461 | UWB_M | - | - | - |
| 0x9462 | UWB_N | - | - | - |
| 0xA010 | UWB_K | - | - | - |
| 0xA011 | UWB_J | - | - | - |
| 0xA012 | UWB_J | - | - | - |
| 0xA013 | UWB_J | - | - | - |
| 0xA014 | UWB_J | - | - | - |
| 0xA016 | UWB_J | - | - | - |
| 0xA018 | UWB_J | - | - | - |
| 0xA020 | UWB_L | - | - | - |
| 0xA021 | UWB_L | - | - | - |
| 0xA030 | UWB_K | - | - | - |
| 0xA031 | UWB_J | - | - | - |
| 0xA032 | UWB_K | - | - | - |
| default | UWB_I | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Zeitstempel, absolute Zeit in ms | ms | - | signed long | - | 10 | 1 | 0 |
| 0x02 | Fehler Detail, zuletzt gemeldet | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x03 | Abschaltvektor ZFM 1 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x04 | Abschaltvektor ZFM 2 | hex | high | signed long | - | 1 | 1 | 0 |
| 0x05 | Abschaltvektor DSC | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x06 | Abschaltvektor QMV | hex | high | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Abschaltvektor AL | hex | high | signed long | - | 1 | 1 | 0 |
| 0x08 | Abschaltvektor MRAD | hex | high | signed long | - | 1 | 1 | 0 |
| 0x09 | Abschaltvektor ERRMGR | hex | high | signed long | - | 1 | 1 | 0 |
| 0x0A | Abschaltvektor SBS_FS_AX | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0B | Abschaltvektor SBS_FS_AY | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0C | Abschaltvektor SBS_FS_PSIP | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0D | Abschaltvektor SBS_LW_VA effektiv | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0E | Abschaltvektor SBS_LW_VA aktuell | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0F | Abschaltvektor SBS_LW Fahrer | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x10 | Versorgungsspannung | Volt | - | unsigned char | - | 0.125 | 1 | 0 |
| 0x11 | Service Qualifier Aktivlenkung | hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | Fahrzeuggeschwindigkeit | m/s | - | unsigned char | - | 0.5 | 1 | -14 |
| 0x21 | Querbeschleunigung | m/s² | - | signed char | - | 0.12 | 1 | 0 |
| 0x22 | Gierrate | rad/s | - | signed char | - | 0.01375 | 1 | 0 |
| 0x23 | Summenlenkwinkel Rohwert | rad | - | signed int | - | 0.0175 | 1 | 0 |
| 0x24 | Fahrerlenkwinkel rad | rad | - | signed int | - | 0.0175 | 1 | 0 |
| 0x25 | Laengsbeschleunigung | m/s² | - | signed char | - | 0.08 | 1 | 0 |
| 0x26 | Lenkwinkel VA effektiv | rad | - | signed char | - | 0.006 | 1 | 0 |
| 0x27 | Fahrerlenkwinkel rad | rad | - | signed char | - | 0.08 | 1 | 0 |
| 0x28 | generische Geschwindigkeit | m/s | - | signed char | - | 0.5 | 1 | -23 |
| 0x29 | Fehleramplitude SBS AX | m/s | - | signed char | - | 0.05 | 1 | -1.2 |
| 0x2A | Fehleramplitude SBS AY | m/s | - | signed char | - | 0.05 | 1 | -1.2 |
| 0x2B | Fehleramplitude SBS PSIP | rad/s | - | signed char | - | 0.009 | 1 | -0.2 |
| 0x2C | Fehleramplitude SBS Lenkwinkel | rad | - | signed char | - | 0.005 | 1 | -0.15 |
| 0x40 | Access Violation | hex | high | signed long | - | 1 | 1 | 0 |
| 0x41 | Code Failure | hex | high | signed long | - | 1 | 1 | 0 |
| 0x42 | SPEFSCR Saved | hex | high | signed long | - | 1 | 1 | 0 |
| 0x50 | CPU 1 Block Status | hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x51 | Laufzeit TASK Nr. 1 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x52 | Laufzeit TASK Nr. 2 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x53 | Laufzeit TASK Nr. 3 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x54 | Laufzeit TASK Nr. 4 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x55 | Laufzeit TASK Nr. 5 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x56 | Laufzeit TASK Nr. 6 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x57 | Laufzeit TASK Nr. 7 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x58 | Laufzeit TASK Nr. 8 | µs | - | unsigned int | - | 1 | 1 | 0 |
| 0x60 | CPU1_H_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x61 | CPU1_L_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x62 | CPU2_H_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x63 | CPU2_L_xxx | hex | high | signed long | - | 1 | 1 | 0 |
| 0x70 | CPU1_0x13B high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x71 | CPU1_0x13B low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x72 | CPU2_0x13B high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x73 | CPU2_0x13B low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x74 | CPU1_0x13C high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x75 | CPU1_0x13C low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x76 | CPU2_0x13C high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x77 | CPU2_0x13C low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x78 | CPU1_0x136 high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x79 | CPU1_0x136 low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7A | CPU2_0x136 high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7B | CPU2_0x136 low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7C | CPU1_0x12E high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7D | CPU1_0x12E low | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7E | CPU2_0x12E_high | hex | high | signed long | - | 1 | 1 | 0 |
| 0x7F | CPU2_0x12E low | hex | high | signed long | - | 1 | 1 | 0 |

### GUEALMLW

| WERT | TEXT |
| --- | --- |
| 0x00 | MLW AL gueltig |
| 0x01 | MLW AL nicht gueltig |
| 0xFF | unbekannter Status |

### SZLPROZINFO

| SZL_PROZ_NR | SZL_PROZ_TEXT |
| --- | --- |
| 0x00 | SZL Ein-Prozessor; kein AFS |
| 0xA0 | SZL Zwei-Prozessor; AFS |
| 0xFF | unbekannter Status |

### SZLABGLEICHINFO

| SZL_ABGLEICH_NR | SZL_ABGLEICH_TEXT |
| --- | --- |
| 0x00 | kein Abgleich |
| 0x01 | Abgleich laeuft |
| 0x02 | Coding |
| 0x03 | Signal ungueltig |
| 0xFF | unbekannter Status |

### GUEFLW

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Signalwert ist gueltig und abgesichert |
| 0x02 | Signal ist gueltig |
| 0x03 | Signal ist nicht vertrauenswuerdig |
| 0x04 | Ersatzwert ist im Nutzsignal gesetzt |
| 0x05 | nicht definiert |
| 0x06 | Signalwert ist ungueltig |
| 0x07 | Sensor nicht vorhanden oder Signal ungueltig |
| 0xFF | unbekannter Status |

### GUEALISTMLW

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | gueltig |
| 0x05 | Timeout |
| 0x06 | ungueltig |
| 0xFF | unbekannter Status |

### GUEALSOLLMLW

| WERT | TEXT |
| --- | --- |
| 0x20 | Sollwert umsetzen |
| 0xE0 | Sollwert nicht umsetzen |
| 0xE1 | Rotorlage im ASA gueltig setzen |
| 0xE2 | Rotorlage im ASA ungueltig setzen |
| 0xFF | unbekannter Status |

### GUESLWROH

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Signalwert ist gueltig und abgesichert |
| 0x02 | Signal ist gueltig |
| 0x03 | Signal ist nicht vertrauenswuerdig |
| 0x04 | Ersatzwert ist im Nutzsignal gesetzt |
| 0x05 | nicht definiert |
| 0x06 | Signalwert ist ungueltig |
| 0x07 | Sensor nicht vorhanden oder Signal ungueltig |
| 0xFF | unbekannter Status |

### GUEALMLWZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | gueltig |
| 0x05 | Timeout |
| 0x06 | ungueltig |
| 0xFF | unbekannter Status |

### GUEALMLWINIT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gelernt |
| 0x01 | gelernt |
| 0xFF | unbekannter Status |

### ZFM_QES_FSQUAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Gueltig und abgesichert |
| 0x02 | Gueltig |
| 0x03 | Nicht vertrauenswuerdig |
| 0x04 | Ersatzwert |
| 0x05 | Kommunikationsfehler |
| 0x06 | Ungueltig |
| 0x07 | Ungueltig |
| 0xFF | unbekannter Status |

### ZFM_QIS_NSQ

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Gueltig und abgesichert |
| 0x02 | Gueltig |
| 0x03 | Nicht vertrauenswuerdig |
| 0x04 | Ersatzwert |
| 0x05 | Kommunikationsfehler |
| 0x06 | Ungueltig |
| 0x07 | Ungueltig |
| 0xFF | unbekannter Status |

### ZFM_ZEF_ZST

| WERT | TEXT |
| --- | --- |
| 0x00 | passiv |
| 0x01 | bereit |
| 0x02 | aktiv |
| 0x03 | fehler |
| 0x04 | in abschaltung |
| 0xFF | unbekannter Status |

### ZFM_ZIF_ZS

| WERT | TEXT |
| --- | --- |
| 0x00 | passiv |
| 0x01 | bereit passiv |
| 0x02 | bereit aktiv |
| 0x03 | aktiv |
| 0xFF | unbekannter Status |

### ZFM_AKT_ZST

| WERT | TEXT |
| --- | --- |
| 0x01 | Aktuator Fehler |
| 0x02 | Aktuator nicht verbaut |
| 0x04 | Aktuator eingeschraenkt verfuegbar |
| 0x08 | Aktuator nicht verfuegbar |
| 0x10 | Aktuator will Sollwert |
| 0xFF | unbekannter Status |

### STATUSECOVENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Vx kleiner/gleich als 3 m/s |
| 0x01 | Vx groesser als 3 m/s |
| 0x10 | Qualifier gueltig |
| 0x11 | Qualifier ungueltig |
| 0x20 | Motor an |
| 0x21 | Motor aus |
| 0x30 | ECO in Ordnung |
| 0x31 | ECO im Selbsttest oder defekt |
| 0xFF | unbekannter Status |

### STATUSSERVOVENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Vx kleiner/gleich als 3 m/s |
| 0x01 | Vx groesser als 3 m/s |
| 0x10 | Qualifier gueltig |
| 0x11 | Qualifier ungueltig |
| 0x20 | Motor an |
| 0x21 | Motor aus |
| 0x30 | SVT in Ordnung |
| 0x31 | SVT im Selbsttest oder defekt |
| 0xFF | unbekannter Status |

### ALMLWISTQUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Signalwert ist gueltig und abgesichert |
| 0x02 | Signal ist gueltig |
| 0x03 | Signal ist nicht vertrauenswuerdig |
| 0x04 | Ersatzwert ist im Nutzsignal gesetzt |
| 0x05 | Signal zu oft entprellt |
| 0x06 | Signalwert ist ungueltig |
| 0x07 | Sensor nicht vorhanden oder Signal ungueltig |
| 0xFF | unbekannter Status |

### ALMLWSERVICEQUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x80 | Initialisierung |
| 0x21 | Drive Standby |
| 0x22 | Drive |
| 0x31 | Drive Standby, USW1 |
| 0x35 | Drive Standby, USW2 |
| 0x39 | Drive Standby, USW3 |
| 0x36 | Drive, USW1 |
| 0x32 | Drive, USW2 |
| 0x3A | Drive, USW3 |
| 0xE0 | Postrun |
| 0xE1 | ReadyforDrive |
| 0xE3 | Drive_RampZero |
| 0xE4 | WaitForRLWSet |
| 0xE9 | ReadyForDrive Unterspannung |
| 0xEB | Drive_RampZero Unterspannung |
| 0x68 | Error |
| 0xFF | Invalid |

### ALMLWSOLLQUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x80 | Initialisierung |
| 0x20 | Sollwert umsetzen |
| 0xE0 | Sollwert nicht umsetzen |
| 0xE1 | Set RLW valid |
| 0xE2 | Set RLW invalid |
| 0x60 | Fehler |
| 0x70 | Sollwert nicht vorhanden |
| 0xFF | Signal ungueltig |

### SGSTATI

| WERT | TEXT |
| --- | --- |
| 0x00 | SG_STATE_BOOT_INIT |
| 0x11 | SG_STATE_BOOT_ACTIVE |
| 0x22 | SG_STATE_BOOT_ERROR |
| 0x33 | SG_STATE_BOOT_SAVE |
| 0x44 | SG_STATE_APPL_INIT |
| 0x55 | SG_STATE_APPL_ACTIVE |
| 0x66 | SG_STATE_APPL_ERROR |
| 0x77 | SG_STATE_APPL_SAVE |
| 0x88 | SG_STATE_APPL_ERROR_2 |
| 0xFF | unbekannter Status |

### GUEALMLWOFFSET

| WERT | TEXT |
| --- | --- |
| 0x00 | im Werksmode |
| 0x01 | nicht im Werksmode |
| 0x10 | MLW AL nicht gueltig |
| 0x11 | MLW AL gueltig |
| 0xFF | unbekannter Status |

### JOBINTERPRETATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Jobergebnis fehlerhaft |
| 0x01 | Job noch nicht gelaufen oder nicht abgeschlossen |
| 0x02 | Jobergebnis i.O. |
| 0xFF | unbekannter Status |

### SGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Steuergeraet n.i.O. |
| 0x01 | Steuergeraet i.O. |
| 0xFF | unbekannter Status |

### FAHRGESTELLNRSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrgestellnummner unterschiedlich |
| 0x01 | Fahrgestellnummner gueltig |
| 0x02 | Fahrgestellnummner nicht empfangen bzw ungueltig |
| 0xFF | unbekannter Status |

### DIVCALCSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | diversitaeres Rechnen n.i.O. |
| 0x01 | diversitaeres Rechnen i.O. |
| 0xFF | unbekannter Status |

### STATUSECOVENTIL_BIT0

| WERT | TEXT |
| --- | --- |
| 0x00 | ECO Ventil i.O. |
| 0x01 | ECO Ventil nicht i.O. |
| 0xFF | unbekannter Status |

### STATUSECOVENTIL_BIT1

| WERT | TEXT |
| --- | --- |
| 0x00 | ECO Ventil verbaut |
| 0x01 | ECO Ventil nicht verbaut |
| 0xFF | unbekannter Status |

### STATUSECOVENTIL_BIT3

| WERT | TEXT |
| --- | --- |
| 0x00 | ECO Ventil verfuegbar |
| 0x01 | ECO Ventil nicht verfuegbar |
| 0xFF | unbekannter Status |

### STATUSSERVOVENTIL_BIT0

| WERT | TEXT |
| --- | --- |
| 0x00 | SERVO Ventil i.O. |
| 0x01 | SERVO Ventil nicht i.O. |
| 0xFF | unbekannter Status |

### STATUSSERVOVENTIL_BIT1

| WERT | TEXT |
| --- | --- |
| 0x00 | SERVO Ventil verbaut |
| 0x01 | SERVO Ventil nicht verbaut |
| 0xFF | unbekannter Status |

### STATUSSERVOVENTIL_BIT3

| WERT | TEXT |
| --- | --- |
| 0x00 | SERVO Ventil verfuegbar |
| 0x01 | SERVO Ventil nicht verfuegbar |
| 0xFF | unbekannter Status |

### ALCCMELDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine CC-Meldung |
| 0x01 | Aktivlenkung ausgefallen |
| 0x02 | Aktivlenkung gestoert |
| 0xFF | unbekannter Status |

### SZLGUEFLWROH

| WERT | TEXT |
| --- | --- |
| 0x00 | absolut |
| 0x01 | relativ |
| 0x02 | Fehler |
| 0x03 | Signal ungueltig |
| 0xFF | unbekannter Status |

### ALVSTDYN

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorsteuerwert wird nicht umgesetzt |
| 0x01 | Vorsteuerwert wird umgesetzt |
| 0xFF | unbekannter Wert |

### ALVSTSTAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorsteuerung ist passiv |
| 0x01 | Vorsteuerung ist bereit passiv |
| 0x02 | Vorsteuerung ist bereit aktiv |
| 0x03 | Vorsteuerung ist aktiv |
| 0xFF | ungueltiger Wert |

### ALREGLERSTAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Regler ASA ist passiv |
| 0x01 | Regler ASA ist bereit-passiv |
| 0x02 | Regler ASA ist bereit-aktiv |
| 0x023 | Regler ASA ist aktiv |
| 0xFF | ungueltiger Wert |

### ALREGLERGRRPLUSSTAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Regler ASA GRRplus ist passiv |
| 0x01 | Regler ASA GRRplus ist bereit-passiv |
| 0x02 | Regler ASA GRRplus ist bereit-aktiv |
| 0x03 | Regler ASA GRRplus ist aktiv |
| 0xFF | ungueltiger Wert |

### UWB_A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x01 | 0x02 | 0x10 | 0x20 | 0x21 | 0x22 | 0x23 | 0x24 |

### UWB_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x01 | 0x02 | 0x10 |

### UWB_C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x10 | 0x40 | 0x41 | 0x42 |

### UWB_D

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x01 | 0x02 | 0x50 | 0x51 | 0x52 | 0x53 | 0x54 | 0x55 | 0x56 | 0x57 | 0x58 |

### UWB_E

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x70 | 0x71 | 0x72 | 0x73 |

### UWB_F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x74 | 0x75 | 0x76 | 0x77 |

### UWB_G

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x78 | 0x79 | 0x7A | 0x7B |

### UWB_H

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x7C | 0x7D | 0x7E | 0x7F |

### UWB_I

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x01 | 0x02 | 0x03 | 0x04 |

### UWB_J

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 |

### UWB_K

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x01 | 0x02 | 0x03 | 0x04 | 0x07 | 0x11 |

### UWB_L

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x01 | 0x02 | 0x03 | 0x04 | 0x08 |

### UWB_M

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x01 | 0x02 | 0x09 | 0x0A | 0x0B | 0x0C | 0x21 | 0x22 | 0x25 | 0x29 | 0x2A | 0x2B |

### UWB_N

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x01 | 0x02 | 0x09 | 0x0D | 0x0E | 0x0F | 0x11 | 0x23 | 0x24 | 0x26 | 0x27 | 0x2C |
