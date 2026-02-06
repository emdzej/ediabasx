# MRKMB181.prg

## General

|  |  |
| --- | --- |
| File | MRKMB181.prg |
| Type | PRG |
| Jobs | 102 |
| Tables | 36 |
| Origin | BMW_Motorrad UX_EE_2 Reiner_Pfeifer |
| Revision | 1.000 |
| Author | MTA Research_and_Development Ferrigno_Roberto, BMW UX-EE-1 Stef |
| ECU Comment | Only for Giobert locks with internal key bit |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Instrument cluster K18-K19 |  |  |
| ORIGIN | string | BMW_Motorrad UX_EE_2 Reiner_Pfeifer |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | MTA Research_and_Development Ferrigno_Roberto, BMW UX-EE-1 Stef |  |  |
| COMMENT | string | Only for Giobert locks with internal key bit |  |  |
| PACKAGE | string | 1.66 |  |  |
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

### DIAGNOSE_MODE_GATEWAY

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |
| BAUDRATE | string | optionaler Parameter fuer die gewuenschte Baudrate table BaudRate BAUD |
| SPEZIFISCHE_BAUDRATE_WERT | long | Parameter nur fuer BAUDRATE = 'SB' ( spezifische Baudrate ) |

### BAUDRATE_115200_GATEWAY

Umschaltung auf 115200 Baud (und BMW-FAST wg. Fast-Initialisation)

_No arguments._

### FLASH_SCHREIBEN_XXL

Flash Daten schreiben XXL-Format Standard Flashjob KWP2000: $36 TransferData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### NG_FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden (Byteparameter 1) Byte 5,6            : Loeschzeit in Sekunden (WordParameter 1 (low/high)) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### STEUERN_EWS4

"EWS4-data" schreiben KWP 2000: $2E WriteDataByCommonIdentifier CommonIdentifier=0xC001

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | table Steuern_EWS4_Mode WRITE_DMEDDE_SK LOCK_DMEDDE_SK WRITE_TRSP_SK LOCK_TRSP_SK LOCK_EWS4 UNLOCK_DMEDDE_SK UNLOCK_TRSP_SK UNLOCK_DEL_DMEDDE_SK UNLOCK_DEL_TRSP_SK |
| DATA | string | Byte1...16 16 Byte Data (SecretKey or Authentication Key) MODE = WRITE_DMEDDE_SK/WRITE_TRSP_SK/UNLOCK_DMEDDE_SK/UNLOCK_TRSP_SK/UNLOCK_DEL_DMEDDE_SK/UNLOCK_DEL_TRSP_SK, "0x01,0x02,.." MODE = LOCK_TRSP_SK/LOCK_DMEDDE_SK/LOCK_EWS4 |

### STATUS_DIGITAL

Read the status of the digital inputs KWP2000: 	$31 StartRoutineByLocalIdentifier $FB Read Status (System Supplier Specific) $0F Digital Port(s)

_No arguments._

### STEUERN_LED_CONTROL

LEDs individuell ansteuern KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED

| Name | Type | Description |
| --- | --- | --- |
| LED_TYPE | string | table Steuern_Led_Type 0x01 Left_Blinker 0x02 Right_Blinker 0x03 ABS 0x04 General Warning (RED) 0x05 High_Beam 0x06 DRL 0x07 Fuel_Reserve 0x08 MIL 0x09 DWA 0x0A General Warning (YELLOW) 0x0B All_Leds |
| LED_OPTION | string | table Steuern_Led_Option 0x00 led_off 0x01 led_on 0x02 led_flashing (1 Hz) |

### WRITE_EE_DATA

Write the data in EEPROM KWP2000: $2E	WriteDataByCommonIdentifier $AAAA	Write data in EEPROM

| Name | Type | Description |
| --- | --- | --- |
| START_ADDRESS | string | Initial EE address (16 bit) |
| NUM_BYTES | string | Number of bytes to write (max 16) |
| DATA_BYTES | string | Data to write |

### NG_SIGNATUR_PRUEFEN

Flash Signatur pruefen KWP2000: $31 StartRoutineByLocalIdentifier $09 CheckSignature Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' 'Daten' |

### NG_AUTHENTISIERUNG_START

Authentisierung pruefen KWP2000: $31 StartRoutineByLocalIdentifier $08 ReleaseAuthentication Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Authentisierungszeit in Sekunden Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Schluesseldaten Byte 21+Anzahl Daten: ETX (0x03) |

### STATUS_EWS4_SK

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier = 0xC002 Lesen des SecretKey des Server sowie Client für EWS4

_No arguments._

### READ_EE_DATA

Read the data in EEPROM KWP2000: $22 ReadDataByCommonIdentifier $BBBB	Read data in EEPROM

| Name | Type | Description |
| --- | --- | --- |
| START_ADDRESS | string | Initial EE address (16 bit) |
| NUM_BYTES | string | Number of bytes to read (max 16) |

### STATUS_EWS

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier = 0xC000 Read the current status of the EWS SecretKeys

_No arguments._

### STATUS_SCHLUESSELDATEN

Read the transponder table key data Service 	$31 	(Service routine control) Sub-ID 	$01 	(Start routine) RID 		0xAC5A 	(For reading out the key data from the transponder table)

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Position of the key data to read Setting performed according to the table TAB_CAS_SCHLUESSEL_POSITION |

### STEUERN_SCHLUESSELDATEN

Writing in the KOMBI of the KEY_IDs only if the EWS4_TRSP_SK is unlocked Service: $2E WriteDataByIdentifier SubService: 0xDC80 STEUERN_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Position of the key in the transponder table Setting performed according to the table TAB_CAS_SCHLUESSEL_POSITION |
| KEY_ID | string | Identifier of the key to write (4 Byte hex value) All values are accepted, except 'FF FF FF FF' Format: '01 23 45 67' or '0x01,0x23,0x45,0x67' |
| KEY_TYPE | unsigned char | Type of the key to write Setting performed according to the table TAB_CAS_KEYTYPE |
| KEY_DISABLED | unsigned char | Key enabled/disabled Setting performed according to the table TAB_CAS_SCHLUESSELSPERRE Only the values 0 and 1 are allowed |

### STEUERN_FAHRGESTELLNUMMER

Writing of VIN JobHeaderFormat Service $2E: WiteDataByIdentifier SubService $F190: DID for writing the VIN (17 digits)

| Name | Type | Description |
| --- | --- | --- |
| FGNR17 | string | VIN (17 digits) Only the values '0..9' and 'A..Z' are valid If the argument is set to '00000000000000000', it is converted in the SGBD to '0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF' before sending to the KOMBI |

### STATUS_FAHRGESTELLNUMMER

Read the Vehicle Identification Number JobHeaderFormat Service: $22 -> ReadDataByIdentifier SubService: $F190 -> DID to read the VIN (17 digits)

_No arguments._

### STEUERN_CAS_INIT_LOC_DATE

Write the key init data in the KOMBI JobHeaderFormat Service: $2E (WriteDataByIdentifier) SubService: $DC7B (DID for writing the time stamp, location and station data of the key init in the KOMBI)

| Name | Type | Description |
| --- | --- | --- |
| INIT_DAY | unsigned char | Day of the key initialization Valid range [1..31] |
| INIT_MONTH | unsigned char | Month of the key initialization Valid range [1..12] |
| INIT_YEAR | unsigned int | Year of the key initialization Valid range [2000..9999] |
| INIT_LOCATION | string | Location of the key initialization Format -> 4 ASCII characters |
| INIT_STATION | string | BMW specific designation of the learning station Format -> 4 ASCII characters Examples DC22, DA21, DN01, ... |

### STATUS_CAS_INIT_LOC_DATE

Read the key init data stored in the KOMBI JobHeaderFormat Service $22 (ReadDataByIdentifier) SubService $DC7B (DID for reading out the time stamp, location and station data of the key init in the KOMBI)

_No arguments._

### STEUERN_CAS_ANLIEFERZUSTAND

Put the KOMBI in delivery condition If the conditions to put the KOMBI in delivery status are wrong, return 'ERROR_ECU_CONDITIONS_NOT_CORRECT' After the data reset, all the lock flags shall be also reset JobHeaderFormat Service $31 -> Service routine control SubID $01 -> Sub-ID for start routine RID $AC50 -> RID for resetting the KOMBI into delivery condition

| Name | Type | Description |
| --- | --- | --- |
| EWS4_TRSP_SK | string | If the TRSP_SK in the KOMBI isn't locked, this parameter isn't needed 16-Byte hex in the format '0x01,0x02,0x03' or '01 02 03' or '0x01 0x02 0x03' or '01,02,03' |

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F0A Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F0A Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### STEUERN_SCHLUESSEL_INIT

Start key initialisation. Service: $31 StartRoutineByLocalIdentifier Sub-ID: 0x01 for start routine RID: 0xAC52 for starting the key

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Position of the key in the transponder table Setting performed according to the table TAB_CAS_SCHLUESSEL_POSITION |
| KEY_ID | string | Identifier of the key to write (4 Byte hex value) All values are accepted, except 'FF FF FF FF' Format: '01 23 45 67' or '0x01,0x23,0x45,0x67' |
| KEY_TYPE | unsigned char | Type of the key to write Setting performed according to the table TAB_CAS_KEYTYPE |
| INIT_MODE | unsigned char | Learning Mode (optional) Only the values 0 and 1 are allowed 0 = Key isn't locked 1 = Learn Normally and lock transponder memory (default) |

### STATUS_SCHLUESSEL_TRSP

Read the status of the last transponder found Service 	$22 	(Read data) DID 		0xDC7E 	(For reading out the key status)

_No arguments._

### STATUS_CAS_ANLIEFERZUSTAND

Indicate the current progress of the reset after STEUERN_CAS_ANLIEFERZUSTAND JobHeaderFormat Service $22 (ReadDataByIdentifier) SubService 0xDC7D (DID for return the progress of the EWS4 parameter reset)

_No arguments._

### STEUERN

Write the HO INFO in the KOMBI JobHeaderFormat Service $2E: WiteDataByIdentifier SubService $DC54: DID for write the HO INFO (9 bytes)

| Name | Type | Description |
| --- | --- | --- |
| PARAM | string | Should be "ARG" |
| PARAM_NAME | string | Should be "HO_INFO" |
| DEALER_NR | string | Dealer number (5 digits) Numeric code '0..9' |
| REG_DAY | unsigned char | Day of the registration Valid range [1..31] |
| REG_MONTH | unsigned char | Month of the registration Valid range [1..12] |
| REG_YEAR | unsigned int | Year of the registration Valid range [2000..9999] |

### STEUERN_PRODUCTION_MODE

Set or reset the Production Mode coding flag in the KOMBI JobHeaderFormat $2E: WiteDataByIdentifier $DC55: DID for write the Production Mode coding flag (1 bit)

| Name | Type | Description |
| --- | --- | --- |
| PRODUCTION_MODE | unsigned char | 1 -> ON 0 -> OFF |

### STATUS_GWSZ_ANZEIGE

Kilometers reading KWP2000: $21 ReadDataByLocalIdentifier $01 SubService ID to read the Odometer value KWP2000: $22 ReadDataByCommonIdentifier $3007 SubService ID to read the Odometer unit (Miles or KM)

_No arguments._

### STEUERN_GWSZ_ANZEIGE_SCHREIBEN

Odometer writing KWP2000: $3B WriteDataByLocalIdentifier $01 SubService ID to write the Odometer value

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_WERT | real | Odometer (KM or Miles) Valid range: 0 to 999999 In order to display the new value, trigger the Reset!! |
| GWSZ_ANZEIGE_EINH | string | km or miles |

### STEUERN_START_KALIBRIERUNG_WINDSCHILD

Start der Kalibrierung des Windschildes KWP2000: $31 StartRoutineByLocalId $21 Windshield $01 Start Reference Run

_No arguments._

### STATUS_KALIBRIERUNG_WINDSCHILD

Status Kalibrierung Windschild KWP2000: $31 StartRoutineByLocalId $21 Windshield $03 Status of Reference Run

_No arguments._

### STATUS_SERVICE_DATE

Job to read the Service Date KWP2000: $21 ApplDiagReadDataByLocalIdentifier $11 Read Service_Date

_No arguments._

### STEUERN_SERVICE_DATE

Service Date writing KWP2000: $3B ApplDiagWriteDataByLocalIdentifier $11 Set Service_Date

| Name | Type | Description |
| --- | --- | --- |
| SERV_DATE_DD | int | Service Date -> day (DD = 1..28,29,30,31) |
| SERV_DATE_MM | int | Service Date -> month (MM = 1..12) |
| SERV_DATE_YYYY | int | Service Date -> Year (YYYY = 2011..2099) |

### STATUS_SERVICE_RESTWEG

Remaining service distance reading KWP2000:  $22 ApplDiagReadDataByCommonIdentifier $3007 Coding block for odometer unit setting $21 ApplDiagReadDataByLocalIdentifier $12 Read Actual_Service_Mileage_Range in [km]

_No arguments._

### STEUERN_SERVICE_RESTWEG

Service distance interval writing KWP2000: $3B ApplDiagWriteDataByLocalIdentifier $12 Set actual service mileage range in [km]

| Name | Type | Description |
| --- | --- | --- |
| SERV_WEG_WERT | real | new value of service distance interval in km or miles max value <= 65535 |
| SERV_WEG_EINHEIT | string | km or miles |

### STEUERN_SELF_TEST_ON

Kombi Selbsttest KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $18 self test

_No arguments._

### STEUERN_SELF_TEST_OFF

Kombi Self Test KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $18 self test

_No arguments._

### STATUS_WINDSCHILD

Status des Windschilds KWP2000: $30 InputOutputByLocalId $05 Windshield $01 Status

_No arguments._

### STEUERN_WINDSCHILD

Windschild ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $05 Windshield $07 ShortTermAdjustment $XX Windshield Parameter

| Name | Type | Description |
| --- | --- | --- |
| WS_OPTION | string | Windschild ansteuern Werte: table Steuern_Windshield_Arg WINDSHIELD_TEXT |

### STEUERN_BLINKER_RECHTS

Control the Right Blinkers directly KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Turn ON/OFF the right blinkers Values: 0, 1 table DigitalArgument TEXT |

### STEUERN_BLINKER_LINKS

Control the Left Blinkers directly KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Turn ON/OFF the left blinkers Values: 0, 1 table DigitalArgument TEXT |

### STEUERN_STANDLICHT

Position lights controlled directly Pre-requirement: Execution of the Job STEUERN_VORBEREITEN KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED $10 Position Light

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Turn ON/OFF the position lights Values: 0, 1 table DigitalArgument TEXT |

### STEUERN_ABBLENDLICHT

Control the Low Beam directly KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Turn ON/OFF the Low Beam Values: 0, 1 table DigitalArgument TEXT |

### STEUERN_RUECKLICHT

Control the Tail lights Pre-requirement: execute the job STEUERN_VORBEREITEN KWP2000: $31 InputOutputControlByLocalIdentifier $FA System Supplier Specific $15 pwm output $01 Tail Light

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | int | Tail light PWM value Range from 0 to 100 [%] |

### STATUS_RUECKLICHT

Read the tail light pwm value Pre-requirement: execute the job STEUERN_VORBEREITEN KWP2000: $31 StartRoutineByLocalIdentifier $FB Read Status (System Supplier Specific) $15 pwm output $01 Tail Light

_No arguments._

### STATUS_ANALOG_BLINKER

Read the Blinkers analog values KWP2000: $31 StartRoutineByLocalIdentifier $FB Read Status (system supplier specific) $1A read ADC inputs

_No arguments._

### STEUERN_PWM_CONTROL

Control the PWM outputs KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $15 PWM control

| Name | Type | Description |
| --- | --- | --- |
| PWM | string | table pwm PWM_TEXT |
| VALUE | int | PWM value Range from 0 to 100 [%] |

### STATUS_PWM_CONTROL

Read the PWM output values KWP2000: $31 StartRoutineByLocalIdentifier $FB Read Status (system supplier specific) $15 pwm output

_No arguments._

### STATUS_ANALOG_EINGANG

Read the input analog values KWP2000: $31 StartRoutineByLocalIdentifier $FB system supplier specific $1A read ADC $01 read ADC inputs

_No arguments._

### STEUERN_LCD_CONTROL

Control the LCD KWP2000: $31 StartRoutineByLocalIdentifier $FA System supplier specific $17 control LCD

| Name | Type | Description |
| --- | --- | --- |
| LCD_OPTION | string | table lcd_option LCD_OPTION 1 lcd_positive 2 lcd_negative |

### STEUERN_DATE_TIME

Set the clock date and time KWP2000: $3B ApplDiagWriteDataByLocalIdentifier $10 Set Date/Time

| Name | Type | Description |
| --- | --- | --- |
| TIME_HH | unsigned int | Time -> Hour (HH) = 0..23 No argument (computer time) |
| TIME_MM | unsigned int | Time -> Minutes (MM) = 0..59 No argument (computer time) |
| TIME_SS | unsigned int | Time -> Seconds (SS) = 0..59 No argument (computer time) |
| DATE_DD | unsigned int | Date -> Day (DD) = 1..28,29,30,31 No argument (computer date) |
| DATE_MM | unsigned int | Date -> Month (MM) = 1..12 No argument (computer date) |
| DATE_YYYY | unsigned int | Date -> Year (YYYY) = 2011..2099 No argument (computer date) |

### STATUS_DATE_TIME

Read the clock date and time KWP2000: $21 ApplDiagReadDataByLocalIdentifier $10 Read Date/Time

_No arguments._

### STATUS_ANALOG_AUSGANG

Read the current sense values KWP2000: $31 StartRoutineByLocalIdentifier $FB system supplier specific $1A read ADC inputs $02 read ADC current sense

_No arguments._

### STEUERN_ZEIGERINSTRUMENT

Control the pointer of the speedometer gauge KWP2000: $31 StartRoutineByLocalIdentifier $FA Set Status $0D Gauge Position

| Name | Type | Description |
| --- | --- | --- |
| SPEEDO_VALUE | string | Speedometer control value [km/h] Range from 0 to 180 |

### STEUERN_FERNLICHT

Control the High Beam directly KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED $12 High Beam

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Turn ON/OFF the High Beam Values: 0, 1 table DigitalArgument TEXT |

### STEUERN_SCHLUESSEL_SPERRE

Job used to enable or disable a key The job works only if a valid key is currently in the transponder coil The key in the transponder coil cannot be disabled or enabled 0x2E WriteDataByIndentifier 0xDC73 STEUERN_SCHLUESSEL_SPERRE

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Key selection in the transponder table See the table TAB_CAS_SCHLUESSEL_POSITION Valid values 0-9 |
| SCHL_SPERRE | unsigned char | Enable or disable a key See the table TAB_CAS_SCHLUESSELSPERRE Valid values 0 or 1 |

### STEUERN_HUPE

Control the horn directly KWP2000: $31 StartRoutineByLocalIdentifier $FA system supplier specific $13 control LED $13 Horn

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Turn ON/OFF the Horn Values: 0, 1 table DigitalArgument TEXT |

### STEUERN_GWSZ_OFFSET

Job to wtite the odometer offset KWP2000: $22 ReadDataByCommonIdentifier $D10D SubService ID to read the absolute odometer value KWP2000: $2E WriteDataByCommonIdentifier $D114 SubService ID to write the odometer offset value

_No arguments._

### STATUS_GWSZ_OFFSET_LESEN

Job to read the odometer offset [km] KWP2000: $22 ReadDataByCommonIdentifier $D114 SubService ID to read the odometer offset value

_No arguments._

### STATUS_GWSZ_ABSOLUT

Job to read the absolute odometer value [km] KWP2000: $22 ReadDataByCommonIdentifier $D10D SubService ID to read the absolute odometer value

_No arguments._

## Tables

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | No answare from the transponder |
| 0x9309 | Unknown key |
| 0x930A | Key disabled |
| 0x930B | Invalid Key |
| 0x930C | EWS4 Fault |
| 0x930D | High Beam open load or short circuit to UBatt |
| 0x930E | High Beam cc to GND |
| 0x930F | Low Beam open load or short circuit to UBatt |
| 0x9310 | Low Beam cc to GND |
| 0x9311 | Tail Light open load or short circuit to UBatt |
| 0x9312 | Tail Light cc to GND |
| 0x9313 | Position Light / DRL open load or short circuit to UBatt |
| 0x9314 | Position Light / DRL cc to GND |
| 0x9315 | Left Blink failure: one or two lamps open load or short circuit to Ubatt |
| 0x9316 | Left Blink cc to GND |
| 0x9317 | Right Blink failure: one or two lamps open load or short circuit to Ubatt |
| 0x9318 | Right Blink cc to GND |
| 0x9319 | Brake Light open load or short circuit to UBatt |
| 0x931A | Brake Light cc to GND |
| 0x931B | Windshield overcurrent |
| 0x931C | Windshield eeprom error |
| 0x931D | Windshield encoder fault |
| 0x931E | Fuel Sensor open load or short circuit to UBatt |
| 0x931F | Fuel Sensor cc GND |
| 0x9320 | Temp Sensor open load or short circuit to UBatt |
| 0x9321 | Temp Sensor cc GND |
| 0x9322 | Hardware error |
| 0x9323 | PCB High voltage |
| 0x9324 | PCB Low voltage |
| 0x9325 | Heated Seat Rider open load or short circuit to UBatt |
| 0x9326 | Heated Seat Rider cc GND |
| 0x9327 | Heated Seat Passenger open load or short circuit to UBatt |
| 0x9328 | Heated Seat Passenger cc GND |
| 0x9329 | Heated Grip open load or short circuit to UBatt |
| 0x932A | Heated Grip cc GND |
| 0x932B | HORN open load or short circuit to UBatt |
| 0x932C | HORN cc GND |
| 0x932D | SPARE HSD open load or short circuit to UBatt |
| 0x932E | SPARE HSD cc GND |
| 0x932F | INFO Button cc GND |
| 0x9330 | TRIP Button cc GND |
| 0x9331 | DRL Button cc GND |
| 0x9332 | RESET BLINKER Button cc GND |
| 0x9333 | LEFT BLINKER Button cc GND |
| 0x9334 | RIGHT BLINKER Button cc GND |
| 0x9335 | Left and Right Blinker buttons closed together |
| 0x9336 | HAZARD Button cc GND |
| 0x9337 | WINDSHIELD UP Button cc GND |
| 0x9338 | WINDSHIELD DOWN Button cc GND |
| 0x9339 | WindShield UP and DOWN buttons closed together |
| 0x933A | Heated Seat Rider Button cc GND |
| 0x933B | Heated Grip Button cc GND |
| 0x933C | Heated Seat Passenger 1 and 2 buttons closed together |
| 0x933D | Wake up line cc GND |
| 0x933E | Wake up line short circuit to UBatt |
| 0x933F | WindShield Overtemperature |
| 0x9340 | Production Mode active |
| 0x9341 | Odometer Compare Failure |
| 0x9342 | Error DMEDDE_SK |
| 0x9343 | Error TRSP_SK |
| 0x9344 | Odometer Fault |
| 0xE504 | ABS_1_MOTBK message missing |
| 0xE505 | SPEED_MOTBK message missing |
| 0xE506 | ENGINE_1_MOTBK message missing |
| 0xE507 | ENGINE_2_MOTBK message missing |
| 0xE508 | MILEAGE_REDUNDANT_MOTBK message missing |
| 0xE509 | ZFE_2_MOTBK message missing |
| 0xE50A | DWA_MOTBK message missing |
| 0xE50B | RDC_MOTBK message missing |
| 0xE50C | CAN Bus OFF |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xFFFF | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Time second counter | sec | high | signed long | - | 1 | 1 | 0 |
| 0x02 | Battery Voltage | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

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
| 0xFFFF | unbekannter Fehlerort |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| 2 | D-CAN |

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
| 0xAC | SMR Automotive Mirrors |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA |
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive World Headquarters |
| 0xB6 | Hans Widmaier |
| 0xB7 | Robert Bosch Battery Systems GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
| 0xBA | BorgWarner |
| 0xBB | BMW - Fahrzeugsimulator |
| 0xBC | Benteler Duncan Plant |
| 0xBD | U-Shin |
| 0xBE | Schaeffler Technologies |
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

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

### STEUERN_EWS4_MODE

| NR | MODE | MODE_TEXT |
| --- | --- | --- |
| 0x02 | WRITE_DMEDDE_SK | Server_SK_Written |
| 0x04 | LOCK_DMEDDE_SK | Server_SK_Locked |
| 0x03 | WRITE_TRSP_SK | Client_SK_Written |
| 0x05 | LOCK_TRSP_SK | Client_SK_Locked |
| 0x01 | LOCK_EWS4 | ClientServer_SK_Locked |
| 0x06 | UNLOCK_DMEDDE_SK | Server_SK_Unlocked |
| 0x07 | UNLOCK_TRSP_SK | Client_SK_Unlocked |
| 0x10 | UNLOCK_DEL_DMEDDE_SK | Server_SK_Unlocked_and_Deleted |
| 0x11 | UNLOCK_DEL_TRSP_SK | Client_SK_Unlocked_and_Deleted |

### STEUERN_LED_TYPE

| NR | LED_TYPE | LED_TYPE_TEXT |
| --- | --- | --- |
| 0x01 | LEFT_BLINK | Left Blinker |
| 0x02 | RIGHT_BLINK | Right Blinker |
| 0x03 | ABS | ABS |
| 0x04 | RED ALARM | RED General Warning |
| 0x05 | HBEAM | High Beam |
| 0x06 | DRL | DRL |
| 0x07 | RESERVE | Fuel Reserve |
| 0x08 | MIL | MIL |
| 0x09 | DWA | DWA |
| 0x0A | YELLOW ALARM | YELLOW General Warning |
| 0x0B | ALL | All LED |

### STEUERN_LED_OPTION

| NR | LED_OPTION | LED_OPTION_TEXT |
| --- | --- | --- |
| 0x00 | LED_OFF | Led_turned_OFF |
| 0x01 | LED_ON | Led_turned_ON |
| 0x02 | LED_FLASHING | Led_flashing_1_HZ |

### TAB_CAS_SCHLUESSEL_POSITION

| VALUE | TEXT |
| --- | --- |
| 0 | KEY 0 |
| 1 | KEY 1 |
| 2 | KEY 2 |
| 3 | KEY 3 |
| 4 | KEY 4 |
| 5 | KEY 5 |
| 6 | KEY 6 |
| 7 | KEY 7 |
| 8 | KEY 8 |
| 9 | KEY 9 |
| 252 | EMC test mode, LF ON |
| 253 | EMC test mode, LF OFF |
| 254 | Avoid ECU sleep |
| 255 | Invalid/Unknown |

### TAB_CAS_KEYTYPE

| VALUE | TEXT |
| --- | --- |
| 0 | Circulating key |
| 2 | Wallet key |
| 3 | Driver's key |
| 4 | Remote key |
| 5 | Transmitter ID |
| 15 | Future Spare key |
| 255 | Invalid/Unknown |

### TAB_CAS_SCHLUESSELSPERRE

| VALUE | TEXT |
| --- | --- |
| 0 | Key enabled |
| 1 | Key disabled |

### TAB_CAS_TRSP_INITSTATUS

| VALUE | TEXT |
| --- | --- |
| 0 | Invalid status |
| 1 | Key valid |
| 2 | KEY_TYPE written, KEY_DISABLED has to be written |
| 3 | KEY_ID written, KEY_TYPE has to be written |
| 4 | KEY_ID has to be written |
| 255 | Free key position |

### TAB_CAS_FBD_BATTERIEZUSTAND

| VALUE | TEXT |
| --- | --- |
| 0x00 | Very bad |
| 0x01 | Bad |
| 0x02 | Bad to fair |
| 0x03 | Fair |
| 0x04 | Fair to good |
| 0x05 | Good |
| 0x06 | Very good |
| 0x0A | Battery status weak |
| 0x0B | Battery status Good |
| 0xFF | Invalid or irrilevant |

### TAB_CAS_FREQ

| VALUE | TEXT |
| --- | --- |
| 0x00 | UNKNOWN |
| 0x03 | 315 MHZ Low Power (Japan/Korea) |
| 0x04 | 315 MHZ |
| 0x05 | 433 MHZ |
| 0x06 | 868 MHZ |
| 0xFF | INVALID |

### TAB_CAS_TRSP_ERROR

| VALUE | TEXT |
| --- | --- |
| 0xFF | Unknown error |

### TAB_CAS_TRSP_INITSTATUS2

| VALUE | TEXT |
| --- | --- |
| 0x00 | Invalid status |
| 0x01 | Key completely learned |
| 0x14 | Verify seg. 5, block 0, page 0 |
| 0x18 | Write CAS-Init = 1 to the key (seg. 5,block 0, page 0 |
| 0x1C | Key authentication with the new crypto-data |
| 0x28 | Key isn't correctly configured, transponder reset |
| 0x2C | Verify key configuration |
| 0x30 | Read key configuration from transponder |
| 0x34 | Check the key configuration (locked and configured ?) |
| 0x38 | Write and lock the new configuration |
| 0x3C | Check the key configuration |
| 0x40 | Restart in the event of CFG writing cancellation |
| 0x54 | Verify Secret Key |
| 0x58 | Generation and writing of Secret Key |
| 0x5C | Select segment 0 |
| 0x70 | Generation and writing of password (page 3) to the key |
| 0x74 | Generation and writing of secret key high to the key |
| 0x78 | Generation and writing of secret key low to the key |
| 0x7C | Authentication with default SecretKeys |
| 0x88 | Initialisation of driving cycle counter |
| 0x8C | Initialisation of FBD and CA sequence counter |
| 0x9C | Initialisation of FBD data in the key |
| 0xD8 | Writing of BMW EOL data, block 1 to the key |
| 0xDC | Writing of BMW EOL data , block 0 to the key |
| 0xF0 | Key data are prepared, transponder reset |
| 0xF4 | Preparation of initialised position in the CAS: Deletion of CAM No,PIA No,BLOCKED |
| 0xF8 | Check the key data: frequency,type |
| 0xFC | Check the key configuration |
| 0xFF | Default value or wallet key |

### TAB_CAS_TRSP_VERRIEGELUNGSSTATUS

| VALUE | TEXT |
| --- | --- |
| 0x00 | Key not yet locked |
| 0x01 | Key completely locked |
| 0x03 | Erroneous configuration;initialisation impossible |
| 0xFF | Unknown transponder type |

### TAB_CAS_TRSP_TYPE

| VALUE | TEXT |
| --- | --- |
| 0x01 | Hitag2,old L2 |
| 0x02 | HitagPro,new L6 |
| 0x03 | TI DST80 |
| 0x04 | TI CRAID |
| 0xFF | UNKNOWN |

### TAB_KALIBRIERUNG_WINDSCHILD

| STATUS_ID | STATUS_NUMMER | STATUS_TEXT |
| --- | --- | --- |
| 0xFD | 1 | Calibrating Bottom position |
| 0xFE | 2 | Calibrating Top position |
| 0x00 | 3 | Calibration performed with success |
| 0xFF | 4 | Calibration error |
| 0x07 | 5 | Calibration cannot be performed |
| 0x01 | 6 | Calibration started |
| 0x02 | 7 | Calibration already performed |
| 0x03 | 8 | Calibration not performed |

### STEUERN_WINDSHIELD_ARG

| WINDSHIELD_TEXT | WINDSHIELD_WERT |
| --- | --- |
| auf | 0x01 |
| ab | 0x02 |
| stopp | 0x00 |
| up | 0x01 |
| down | 0x02 |
| stop | 0x00 |
| 1 | 0x01 |
| 2 | 0x02 |
| 0 | 0x00 |

### PWM

| PWM | PWM_TEXT |
| --- | --- |
| 0x01 | TAIL_LIGHTS |
| 0x02 | POSITION_LIGHTS |
| 0x03 | BRAKE_LIGHTS |
| 0x04 | HEATED_GRIPS |
| 0x05 | HSEAT_RIDER |
| 0x06 | HSEAT_PILLOW |

### LCD_OPTION

| LCD_OPT_NUMBER | LCD_OPTION |
| --- | --- |
| 0x01 | lcd_positive |
| 0x02 | lcd_negative |
