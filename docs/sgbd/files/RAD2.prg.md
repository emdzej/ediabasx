# RAD2.prg

## General

|  |  |
| --- | --- |
| File | RAD2.prg |
| Type | PRG |
| Jobs | 85 |
| Tables | 41 |
| Origin | BMW EE-48 Busch |
| Revision | 2.01 |
| Author | Telemotive AG/Busch |
| ECU Comment | Fuer die komplette Diagnose des MOST Radios ist die SGBD MCGWPL2 notwendig. |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MOST-Radio/Level 2 Radio |  |  |
| ORIGIN | string | BMW EE-48 Busch |  |  |
| REVISION | string | 2.01 |  |  |
| AUTHOR | string | Telemotive AG/Busch |  |  |
| COMMENT | string | Fuer die komplette Diagnose des MOST Radios ist die SGBD MCGWPL2 notwendig. |  |  |
| PACKAGE | string | 1.24 |  |  |
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

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

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

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $00 all ECU Modus  : Default

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### STEUERN_AUDIOKANAELE

Ansteuern eines AudioKanals KWP2000: $30 InputOutputControlByLocalIdentifier $01 inputOutputLocalIdentifier  - audio channel $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AUDIOKANAL | string | NF Ausgabe nur auf dem gewaehlten Kanal  table TAudioKanal NAME |

### STEUERN_RDS

Switch AF following und TP on/off KWP2000: $30 InputOutputControlByLocalIdentifier $02 inputOutputLocalIdentifier - RDS switch $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RDS_TP_KOMBI | string | RDS_TP  table TRDS_TSP_SET |

### STEUERN_VOLUMEAUDIO

Einstellen der Audio-Lautstaerke KWP2000: $30 InputOutputControlByLocalIdentifier $03 inputOutputLocalIdentifier - set volume $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VOLUME | string | Ausgewaehlte Audio-Lautstaerke  table TAudioVolume MASKE |

### STEUERN_LINEAR

Alle Toneinstellungen auf Defaultwerte setzten KWP2000: $30 InputOutputControlByLocalIdentifier $05 inputOutputLocalIdentifier - device sound linear $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_SELBSTTEST

Ansteuerung des Selbsttests im RAD X - Speichertests FLASH_ROM, RAM, EEPROM Bei Erkennung eines Fehlverhaltens erfolgt ein Eintrag im Primaer- und Shadowfehlerspeicher. KWP2000: $31 startRoutineByLocalIdentifier $04 routineLocalIdentifier (selfTest) Modus  : Default

_No arguments._

### STEUERN_FREQUENZ

Tunerfrequenz einstellen KWP2000: $30 InputOutputControlByLocalIdentifier $FA inputOutputLocalIdentifier - set frequency $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ | long | Bereich: 150 - 108000 [kHz] |

### STATUS_FREQUENZ

aktuelle Tunerfrequenz abfragen KWP2000: $30 InputOutputControlByLocalIdentifier $0F inputOutputLocalIdentifier  - get frequency $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### STATUS_ANT_QFS

Auslesen des Status Quality Fieldstrength KWP2000: $30 InputOutputControlByLocalIdentifier $FC inputOutputLocalIdentifier - status QFS $01 reportCurrentState

_No arguments._

### TEST_WATCHDOG

Watchdog testen KWP2000: $30 InputOutputControlByLocalIdentifier $?FD? inputOutputLocalIdentifier - watchdog test $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_TUNER_SUCHLAUF

Steuern des TUNER-Suchlaufs KWP2000: $30 InputOutputControlByLocalIdentifier $08 inputOutputLocalIdentifier - Tuner_Suchlauf $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TUNER_SUCHLAUF | string | Ausloesen des Suchlaufs table TTuner_Suchlauf |

### STEUERN_MODEWEITERSCHALTUNG

Radiomodus um eins weiterschalten (Nachstellung "Mode-Key") KWP2000: $30 InputOutputControlByLocalIdentifier $09 inputOutputLocalIdentifier - switching of radio mode $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_RADIO_SCHALTEN

Radio schalten KWP2000: $30 InputOutputControlByLocalIdentifier $0A inputOutputLocalIdentifier - state key radio $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHALTMODI | string | ON/OFF -Schalten des Radios  table TSchaltmodi NAME |

### STEUERN_AUTOSTORE

Autostore-Erstbelegung über alle Frequenzbänder hinweg KWP2000: $30 InputOutputControlByLocalIdentifier $0B inputOutputLocalIdentifier - autostore $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STATUS_GERAETE_TEMPERATUR

Auslesen der Temperatur im Radio Stufe 2 KWP2000: $30 InputOutputControlByLocalIdentifier $1A inputOutputLocalIdentifier -  device temperature $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_KLANGZEICHEN

Ausloesen eines Klangzeichens KWP2000: $30 InputOutputControlByLocalIdentifier $0C inputOutputLocalIdentifier - accoustic sign $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLANGZEICHEN | string | Ausloesen des gewaehlten Klangzeichens table TKlangZeichen NAME |

### STATUS_AKTIVE_GAL_KURVE

Auslesen der derzeit aktiven GAL-Kurve KWP2000: $21 ReadDataByLocalIdentifier $B3 recordLocalIdentifier - GAL-Kurve Modus  : Default

_No arguments._

### STATUS_LESEN_SYSTEM_AUDIO

Auslesen des verbauten Audiosystemes KWP2000: $21 ReadDataByLocalIdentifier $B2 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_LESEN_LAUFWERK

Auslesen des im RAD2 verbauten Laufwerkes KWP2000: $21 ReadDataByLocalIdentifier $B1 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_TASTE_GEDRUECKT

Auslesen, ob gerade eine Taste gedrueckt ist KWP2000: $21 ReadDataByLocalIdentifier $B4 recordLocalIdentifier - any key pressed Modus  : Default

_No arguments._

### STATUS_TEL_MUTE

Auslesen, ob Telefonmute "on" oder "off" ist KWP2000: $21 ReadDataByLocalIdentifier $B5 recordLocalIdentifier - telephonemute state Modus  : Default

_No arguments._

### STATUS_RDS

Auslesen, RDS STATUS KWP2000: $21 ReadDataByLocalIdentifier $B6 recordLocalIdentifier - RDS state Modus  : Default

_No arguments._

### STATUS_COUNTRY_CODE

Auslesen der Laendervariante KWP2000: $21 ReadDataByLocalIdentifier $B7 recordLocalIdentifier - Country Code Modus  : Default

_No arguments._

### STATUS_AUX

Auslesen, ob Telefonmute "on" oder "off" ist KWP2000: $21 ReadDataByLocalIdentifier $BC recordLocalIdentifier - telephonemute state Modus  : Default

_No arguments._

### STATUS_VOLUME_AUDIO

Auslesen, ob Telefonmute "on" oder "off" ist KWP2000: $21 ReadDataByLocalIdentifier $BD recordLocalIdentifier - Volume audio step Modus  : Default

_No arguments._

### STEUERN_EJECT

Nachstellung des Druckes auf den EJECT-Buttons KWP2000: $30 InputOutputControlByLocalIdentifier $0D inputOutputLocalIdentifier - Eject $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STATUS_BOOTLOADER_VERSION

Auslesen der Laendervariante KWP2000: $21 ReadDataByLocalIdentifier $B8 recordLocalIdentifier - Bootloader Version Modus  : Default

_No arguments._

### STEUERN_TEMPERATURABSCHALTWERTE

Setzen der Temperaturabschaltwerte Alle Werte sind in °C anzugeben KWP2000: $3B WriteDataByLocalIdentifier $FC localIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TEMP_RELEASE | unsigned char | Treshold which is in use for re-activating HMI and LCD |
| TEMP_WARM | unsigned char | hat derzeit keine Auswirkung / no influence yet |
| TEMP_HIGH | unsigned char | MMI und Display werden abgeschaltet / MMI + LCD switchoff |
| TEMP_CRIT | unsigned char | MOST wird abgeschaltet / MOST switchoff |

### STATUS_TEMPERATURABSCHALTWERTE

Lesen der Temperaturabschaltwerte KWP2000: $21 ReadDataByLocalIdentifier $FC recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_ANT_EIGEN_DIAG

Switch radio to antenna diagnosis (first antenna, 5V output) KWP2000: $30 InputOutputControlByLocalIdentifier $06 inputOutputLocalIdentifier - switching radio to diagnosis mode $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_ANT_SCAN

Control_antenna_switch KWP2000: $30 InputOutputControlByLocalIdentifier $04 inputOutputLocalIdentifier  - antenna switching $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ANTENNA_SWITCH | string | switch antenna  table TAudioKanal NAME |

### STATUS_ANT_EIGEN_DIAG

Auslesen des Antennendiagnosestatus KWP2000: $21 ReadDataByLocalIdentifier $B9 recordLocalIdentifier - antenna state Modus  : Default

_No arguments._

### STATUS_LESEN_CONNTABLE

Auslesen der aktuellen Connectiontable KWP2000: $21 ReadDataByLocalIdentifier $BA recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_LESEN_CONNTABLE_DETAIL

Genaue Information zur abgefragten Connection ausgeben KWP2000: $21 ReadDataByLocalIdentifier $BB recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CONNECTION | unsigned char | Nummer der gewaehlten Connection |

### SER_NR_DOM_LESEN

Seriennummer 14-stellig lesen Neu für Entertainment-Komponenten ab 2003 KWP2000: $21 ReadDatabyLocalIdentifier $E0 Local ID SER_NR_DOM Modus  : Default

_No arguments._

### SCHREIBEN_TELEFONNUMMER_SDARS

Schreiben der Telefonnummer für SDARS KWP2000: $3B writeDataByLocalIdentifier $A3 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_SDARS | string | Nummer des Bereitschaftsdienstes Stringlänge max. 35 Zeichen (ohne Endezeichen \0) |

### LESEN_TELEFONNUMMER_SDARS

Auslesen der im MASK gespeicherten Telefonnummer für - SDARS KWP2000: $21 readDataByLocalIdentifier $A3 recordLocalIdentifier Modus  : Default

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
| auf | 1 |
| ab | 0 |
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

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Anlieferzustand |
| 0x01 | Normalbetrieb |
| 0x02 | nicht benutzt |
| 0x03 | Speicher geloescht |
| 0x04 | nicht benutzt |
| 0x05 | Signaturpruefung PAF nicht durchgefuehrt |
| 0x06 | Signaturpruefung DAF nicht durchgefuehrt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vorhanden oder nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vorhanden oder nicht vollstaendig |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xABC8 | 0xABC8: Drive operation error |
| 0xABCA | 0xABCA: DSP error |
| 0xABCC | 0xABCC: RAD ON short circuit error |
| 0xABCD | 0xABCD: Error communication Top-Hifi |
| 0xABCE | 0xABCE: Error FLASHROM |
| 0xABCF | 0xABCF: Error EEPROM |
| 0xABD0 | 0xABD0: I2C bus error |
| 0xABD1 | 0xABD1: Error no antenna |
| 0xABD2 | 0xABD2: Error wrong antenna |
| 0xABD3 | 0xABD3: Error diversity module |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xABC8 | 0x01 | -- | -- | -- |
| 0xABCA | 0x01 | -- | -- | -- |
| 0xABCC | 0x01 | -- | -- | -- |
| 0xABCD | 0x01 | -- | -- | -- |
| 0xABCE | 0x01 | -- | -- | -- |
| 0xABCF | 0x01 | -- | -- | -- |
| 0xABD0 | 0x01 | -- | -- | -- |
| 0xABD1 | 0x01 | -- | -- | -- |
| 0xABD2 | 0x01 | -- | -- | -- |
| 0xABD3 | 0x01 | -- | -- | -- |
| default | -- | -- | -- | -- |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Exterior temperature | Grad C | H | unsigned char | -- | 1 | 1 | 0 |
| 0x02 | Shadow DTC | 0-n | -- | 0xFFFF | ShadowDTC | -- | -- | -- |
| 0x03 | Dummy Value | 1 | H | s int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | u int | -- | 1 | 1 | 0 |

### SHADOWDTC

| WERT | UWTEXT |
| --- | --- |
| 0xABD8 | 0xABD8: Error RAM |
| 0xABD9 | 0xABD9: Queue error IPC |
| 0xABDA | 0xABDA: Queue error |
| 0xABDB | 0xABDB: Overtemperature FOT |
| 0xABDC | 0xABDC: Watchdog Reset |
| 0xABDD | 0xABDD: Overtemperature CD-drive |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xABD8 | 0xABD8: Error RAM |
| 0xABD9 | 0xABD9: Queue error IPC |
| 0xABDA | 0xABDA: Queue error |
| 0xABDB | 0xABDB: Overtemperature FOT |
| 0xABDC | 0xABDC: Watchdog Reset |
| 0xABDD | 0xABDD: Overtemperature CD-drive |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xABD8 | 0x01 | -- | -- | -- |
| 0xABD9 | 0x01 | -- | -- | -- |
| 0xABDA | 0x01 | -- | -- | -- |
| 0xABDB | 0x01 | -- | -- | -- |
| 0xABDC | 0x01 | -- | -- | -- |
| 0xABDD | 0x01 | -- | -- | -- |
| default | -- | -- | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Exterior temperature | Grad C | H | unsigned char | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | u int | -- | 1 | 1 | 0 |

### TANTENNA_NUMBER

| NAME | MASKE |
| --- | --- |
| Antenna Auto | 0x00 |
| Antenna number 1 | 0x01 |
| Antenna number 2 | 0x02 |
| Antenna number 3 | 0x03 |
| Antenna number 4 | 0x04 |
| Antenna error | 0x05 |

### TFAULT_CODE

| NAME | MASKE |
| --- | --- |
| OKAY | 0x00 |
| ERROR OPEN CIRCUIT | 0x92 |
| ERROR WRONG ANTENNA FITTED | 0x93 |
| ERROR ANTENNA SELF TEST FAIL | 0x94 |
| ERROR COMMAND OUT OF SEQUENCE | 0x96 |
| Unknown | 0xXY |

### TSCAN_ANTENNA

| NAME | MASKE | TEXT |
| --- | --- | --- |
| 0 | 0x00 | End antenna diagnosis |
| 1 | 0x01 | Jump to next antenna |
| XY | 0xXY | Nicht definiert |

### TAUDIOKANAL

| NAME | MASKE | TEXT |
| --- | --- | --- |
| VL | 0x01 | Lautsprecher Vorne Links |
| VR | 0x02 | Lautsprecher Vorne Rechts |
| HHL | 0x03 | Hinten links |
| HHR | 0x04 | Hinten rechts |
| ALLE | 0x0A | Alle Lautsprecher |
| XY | 0xXY | Nicht definiert |

### TRDS_SET

| NAME | MASKE | TEXT |
| --- | --- | --- |
| 0 | 0x00 | RDS off, TP off |
| 1 | 0x01 | RDS off, TP on |
| 2 | 0x02 | RDS on, TP off |
| 3 | 0x03 | RDS on, TP on |
| XY | 0xXY | Nicht definiert |

### TKLANGZEICHEN

| NAME | MASKE | TEXT |
| --- | --- | --- |
| off | 0x00 | No output |
| ACC | 0x01 | ACC signal |
| PDC_f | 0x02 | PDC front |
| PDC_r | 0x03 | PDC rear |
| R | 0x04 | Reverse-Gong |
| XY | 0xXY | Nicht definiert |

### TSCHALTMODI

| NAME | MASKE | TEXT |
| --- | --- | --- |
| ON | 0x01 | Radio anschalten |
| OFF | 0x00 | Radio ausschalten |
| EIN | 0x01 | Radio anschalten |
| AUS | 0x00 | Radio ausschalten |
| XY | 0xXY | Nicht definiert |

### TAUDIOVOLUME

| MASKE | TEXT |
| --- | --- |
| 0x00 | Mute |
| 0x01 | Inkrement 01 |
| 0x02 | Inkrement 02 |
| 0x03 | Inkrement 03 |
| 0x04 | Inkrement 04 |
| 0x05 | Inkrement 05 |
| 0x06 | Inkrement 06 |
| 0x07 | Inkrement 07 |
| 0x08 | Inkrement 08 |
| 0x09 | Inkrement 09 |
| 0x0A | Inkrement 10 |
| 0x0B | Inkrement 11 |
| 0x0C | Inkrement 12 |
| 0x0D | Inkrement 13 |
| 0x0E | Inkrement 14 |
| 0x0F | Inkrement 15 |
| 0x10 | Inkrement 16 |
| 0x11 | Inkrement 17 |
| 0x12 | Inkrement 18 |
| 0x13 | Inkrement 19 |
| 0x14 | Inkrement 20 |
| 0x15 | Inkrement 21 |
| 0x16 | Inkrement 22 |
| 0x17 | Inkrement 23 |
| 0x18 | Inkrement 24 |
| 0x19 | Inkrement 25 |
| 0x1A | Inkrement 26 |
| 0x1B | Inkrement 27 |
| 0x1C | Inkrement 28 |
| 0x1D | Inkrement 29 |
| 0x1E | Inkrement 30 |
| 0x1F | Inkrement 31 |
| 0x20 | Inkrement 32 |
| 0x22 | Inkrement 34 |
| 0x23 | Inkrement 35 |
| 0x24 | Inkrement 36 |
| 0x25 | Inkrement 37 |
| 0x26 | Inkrement 38 |
| 0x27 | Inkrement 39 |
| 0x28 | Inkrement 40 |
| 0x29 | Inkrement 41 |
| 0x2A | Inkrement 42 |
| 0x2B | Inkrement 43 |
| 0x2C | Inkrement 44 |
| 0x2D | Inkrement 45 |
| 0x2E | Inkrement 46 |
| 0x2F | Inkrement 47 |
| 0x30 | Inkrement 48 |
| 0x31 | Inkrement 49 |
| 0x32 | Inkrement 50 |
| 0x33 | Inkrement 51 |
| 0x34 | Inkrement 52 |
| 0x35 | Inkrement 53 |
| 0x36 | Inkrement 54 |
| 0x37 | Inkrement 55 |
| 0x38 | Inkrement 56 |
| 0x39 | Inkrement 57 |
| 0x3A | Inkrement 58 |
| 0x3B | Inkrement 59 |
| 0x3C | Inkrement 60 |
| 0x3D | Inkrement 61 |
| 0x3E | Inkrement 62 |
| 0x3F | Inkrement 63 |
| 0x40 | Maximal |
| 0xXY | Nicht definiert |

### TTUNER_SUCHLAUF

| NAME | MASKE | TEXT |
| --- | --- | --- |
| Inc | 0x01 | Suchlauf aufwärts |
| Dec | 0x02 | Suchlauf abwärts |
| Stop | 0x03 | Suchlauf Stop |
| XY | 0xXY | Nicht definiert |

### TAUX_STATE

| NAME | MASKE |
| --- | --- |
| AUX off / Autoswitch to AUX by TelMute Pin off | 0x00 |
| AUX on / Autoswitch to AUX by TelMute Pin off | 0x01 |
| AUX on / Autoswitch to AUX by TelMute Pin on | 0x02 |
| Unknown | 0xXY |

### TVOL_INC

| MASKE | NAME |
| --- | --- |
| 0x00 | Mute |
| 0x01 | Inkrement 01 |
| 0x02 | Inkrement 02 |
| 0x03 | Inkrement 03 |
| 0x04 | Inkrement 04 |
| 0x05 | Inkrement 05 |
| 0x06 | Inkrement 06 |
| 0x07 | Inkrement 07 |
| 0x08 | Inkrement 08 |
| 0x09 | Inkrement 09 |
| 0x0A | Inkrement 10 |
| 0x0B | Inkrement 11 |
| 0x0C | Inkrement 12 |
| 0x0D | Inkrement 13 |
| 0x0E | Inkrement 14 |
| 0x0F | Inkrement 15 |
| 0x10 | Inkrement 16 |
| 0x11 | Inkrement 17 |
| 0x12 | Inkrement 18 |
| 0x13 | Inkrement 19 |
| 0x14 | Inkrement 20 |
| 0x15 | Inkrement 21 |
| 0x16 | Inkrement 22 |
| 0x17 | Inkrement 23 |
| 0x18 | Inkrement 24 |
| 0x19 | Inkrement 25 |
| 0x1A | Inkrement 26 |
| 0x1B | Inkrement 27 |
| 0x1C | Inkrement 28 |
| 0x1D | Inkrement 29 |
| 0x1E | Inkrement 30 |
| 0x1F | Inkrement 31 |
| 0x20 | Inkrement 32 |
| 0x21 | Inkrement 33 |
| 0x22 | Inkrement 34 |
| 0x23 | Inkrement 35 |
| 0x24 | Inkrement 36 |
| 0x25 | Inkrement 37 |
| 0x26 | Inkrement 38 |
| 0x27 | Inkrement 39 |
| 0x28 | Inkrement 40 |
| 0x29 | Inkrement 41 |
| 0x2A | Inkrement 42 |
| 0x2B | Inkrement 43 |
| 0x2C | Inkrement 44 |
| 0x2D | Inkrement 45 |
| 0x2E | Inkrement 46 |
| 0x2F | Inkrement 47 |
| 0x30 | Inkrement 48 |
| 0x31 | Inkrement 49 |
| 0x32 | Inkrement 50 |
| 0x33 | Inkrement 51 |
| 0x34 | Inkrement 52 |
| 0x35 | Inkrement 53 |
| 0x36 | Inkrement 54 |
| 0x37 | Inkrement 55 |
| 0x38 | Inkrement 56 |
| 0x39 | Inkrement 57 |
| 0x3A | Inkrement 58 |
| 0x3B | Inkrement 59 |
| 0x3C | Inkrement 60 |
| 0x3D | Inkrement 61 |
| 0x3E | Inkrement 62 |
| 0x3F | Inkrement 63 |
| 0x40 | Maximal |
| 0xXY | Nicht definiert |

### TGAL_KURVE

| NAME | MASKE |
| --- | --- |
| GAL-Kurve 1 | 0x01 |
| GAL-Kurve 2 | 0x02 |
| GAL-Kurve 3 | 0x03 |
| GAL-Kurve 4 | 0x04 |
| GAL-Kurve 5 | 0x05 |
| GAL-Kurve 6 | 0x06 |
| Unknown | 0xXY |

### THWVARIANTE

| NAME | MASKE |
| --- | --- |
| STEREO | 0x00 |
| HIFI | 0x01 |
| TOP-HIFI | 0x02 |
| Fehler | 0xXY |

### TLAUFWERKSVARIANTE

| NAME | MASKE |
| --- | --- |
| CD-ROM | 0x00 |
| MD | 0x01 |
| Fehler | 0xXY |

### TTASTE_GEDRUECKT

| NAME | MASKE |
| --- | --- |
| Es ist keine Taste gedrueckt/there is no key pressed! | 0x00 |
| Es ist eine Taste gedrueckt/there is any key pressed! | 0x01 |
| Unknown | 0xXY |

### TTELEPHONMUTE_STATE

| NAME | MASKE |
| --- | --- |
| Telephonemute off | 0x00 |
| Telephonemute on | 0x01 |
| Unknown | 0xXY |

### TRDS_STATE

| NAME | MASKE |
| --- | --- |
| RDS off / TP off | 0x00 |
| RDS off / TP on | 0x01 |
| RDS on / TP off | 0x02 |
| RDS on / TP on | 0x03 |
| Unknown | 0xXY |

### TCOUNTRY_CODE

| NAME | MASKE |
| --- | --- |
| ECE | 0x01 |
| US | 0x02 |
| OCE | 0x03 |
| JPN | 0x04 |
| Unknown | 0xXY |

### TFETRAWE

| NAME | MASKE |
| --- | --- |
| Deactivated | 0x00 |
| FETRAWE ON | 0x01 |
| FETRAWE ON | 0x02 |
| FETRAWE ON | 0x04 |
| Unknown | 0xXY |

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
| TelephoneFix.00.01/LS = 0x40 | 0x40 |
| Telephone-Mix/LS = 0x41 | 0x41 |
| Telephone-Menue/LS = 0x42 | 0x42 |
| Mikrophone.00.01/TelefonFix.00.11 = 0x40/41 | 0x40/0x41 |
| Mikrophone.00.01/SES.00.11 = 0x30/31/32 | 0x30/0x31/0x32 |
| Mikrophone.00.01/SecurityFunk1 = 0x68 | 0x68 |
| Mikrophone.00.01/SecurityFunk2 = 0x69 | 0x69 |
| Mikrophone.00.01/SecurityWSA = 0x6A | 0x6A |
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
