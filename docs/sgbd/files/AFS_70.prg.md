# AFS_70.prg

## General

|  |  |
| --- | --- |
| File | AFS_70.prg |
| Type | PRG |
| Jobs | 90 |
| Tables | 47 |
| Origin | BMW EF-61 Manuel Singer |
| Revision | 3.000 |
| Author | BMW EF-61 Manuel Singer, Software & Systems EF-61 Joachim Schindlbeck |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Active Front Steering für E70 |  |  |
| ORIGIN | string | BMW EF-61 Manuel Singer |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW EF-61 Manuel Singer, Software & Systems EF-61 Joachim Schindlbeck |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.30 |  |  |
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

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0 : Datentyp (1: Daten, 2: Maskendaten) Byte 1 : (unbenutzt) Wortbreite (1: Byte, 2: Word, 3: DWord) Byte 2 : (unbenutzt) Byteordnung (0: LSB zuerst, 1 MSB zuerst) Byte 3 : Adressierung (0: freie Adressierung, 1: Blockadressierung) Byte 4 : (unbenutzt) Byteparameter 1 Byte 5, 6 : (unbenutzt) WordParameter 1 (low / high) Byte 7, 8 : (unbenutzt) WordParameter 2 (low / high) Byte 9, 10, 11, 12 : (unbenutzt) Maske (linksbuendig) Byte 13, 14 : Anzahl Bytedaten (low / high) Byte 15, 16 : (unbenutzt) Anzahl Wortdaten (low / high) Byte 17, 18, 19, 20 : Wortadresse (low / highbyte, low / highword) Byte 21, .... : Codierdaten Byte 21 + Anzahl Daten: ETX (0x03) |

### STATUS_VERSORGUNGEN

Auslesen der aktuellen Spanungspegel KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $01 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_AFS_OS

Auslesen verschiedener Betriebssystem (OS, SG) Stati KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $02 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_PHASENSTROEME

Auslesen der Phasenstrome I1,I2,I3 am Stellmotor, Stator KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $04 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_TEMPERATUREN

Auslesen der Steuergeraetetemperatur KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $05 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SZL

Auslesen verschiedener vom SZL gesendeter Werte ueber F-CAN KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $06 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SENSORCLUSTER

Auslesen verschiedener Stati des Sensorclsuter ueber F-CAN KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $07 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SUMMENLENKWINKEL

Auslesen des im SG errechneten Summenlenkwinkels KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $08 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_MOTORLAGEWINKEL

Auslesen verschiedener Motorlagewinkel KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $09 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_FAHRERLENKWINKEL

Auslesen des Fahrerlenkwinkels vom SZL KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0A InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_GESCHWINDIGKEITEN

Auslesen verschiedener Geschwindigkeiten KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0B InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_BESCHLEUNIGUNG

Auslesen der Quer- und Laengsbeschleunigungswerte KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0C InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_GIERRATEN

Auslesen der Gierratenwerte KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0D InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_DSC_INFO

Auslesen aktueller DSC Stati ueber PT-CAN KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0E InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_WINKELWERTE

Auslesen verschiedener Winkelwerte, wie Fahrerlenkwinkel, Summenlenkwinkel, Motorlagewinkel KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $0F InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_PHASENSPANNUNGEN

Auslesen der Phasenspanngen U1,U2,U3 am Stellmotor, Stator KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $10 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_ALIVE_INFO

Auslesen verschiedener ALIVE Zaehler KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $13 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SENSORCLUSTER_INFO

Status und Diagnoseinfos ueber den Sensorclsuter KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $15 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_CAS_INFO

Auslesen der vom CAS gesendeten Fahrgestellnummer ueber PT-CAN KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $16 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus : Default

_No arguments._

### STATUS_ECO_SERVO

Auslesen des aktuell anliegenden Stromes am ECO Ventil und dessen Status KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $17 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_ECO_VENTIL

Auslesen des aktuell anliegenden Stromes am ECO Ventil und dessen Status KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $18 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_SERVO_VENTIL

Auslesen des aktuell anliegenden Stromes am SERVO Ventil und dessen Status KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $19 InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_PTCAN_SIGNAL_FEHLER

diverse vom AFS eingelesene PTCAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $1B InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_FCAN_SIGNAL_FEHLER

diverse vom AFS eingelesene FCAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $1C InputOutputLocalIdentifier(IOLI) SubID  : $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### START_LWM_RUECKSETZEN

Motorlagewinkel wird ungueltig gesetzt KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $21 Motorlagewinkel ungueltig setzen,ueber ZFLS Fkt mit anschl. SG-RESET Modus  : Default KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $50 Gueltigkeit Motorlagewinkel abfragen Modus  : Default

_No arguments._

### START_LWM_INIT

KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $22 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### START_ADAPTIVDATEN_ABGLEICH

KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $51 Abgleich der Adaptivdaten wird gestartet Modus  : Default

_No arguments._

### START_ADAPTIVDATEN_RUECKSETZEN

KWP2000: $31 StartRoutineByLocalIdentifier SubID  : $53 Adaptivdaten im EEPROM werden DEFAULT werten beschrieben Modus  : Default

_No arguments._

### STATUS_LWM_INIT

Gueltigkeit des Motorlagewinkels auslesen KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $50 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_ABGLEICH

aktueller Zustand des Adaptivdatenabgleichs KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $51 alle aktuelle Abgleichstati abfragen Modus  : Default

_No arguments._

### STATUS_ADAPTIVDATEN_RUECKSETZEN

aktueller Zustand des Ruecksetzens der Adaptivdaten KWP2000: $33 RequestRoutineResultsByLocalIdentifier SubID  : $53 Adaptivdaten werden mit DEFAULT Werten belegt Modus  : Default

_No arguments._

### STEUERN_MOTORLAGEWINKEL_OFFSET

Schreiben des Motorlagewinkeloffsets ins EEPROM KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $22 InputOutputLocalIdentifier(IOLI) SubID  : $07 InputOutputControlParameter(IOCP) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MOTORLAGEWINKEL_OFFSET_SOLL_WERT | real | Motorlagewinkeloffset ins EEPROM für Lenkradkorrektur, erlaubt im PREDRIVE/DRIVE Skalierungsfaktor: ( 100 ) Wertebereich: ( -10..+10 ) Einheit: ( Grad Fahrerlenkwinkel ) Telegrammlaenge KWP: ( 2 Byte ) |

### STATUS_EEPROM_SERIENNUMMER_SZL

Auslesen der im AFS EEPROM abgelegten Seriennummer des SZL AFS wird / bleibt inaktiv falls SZL getauscht wird KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $01 InputOutputLocalIdentifier(IOLI) SubID  : $08 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_EEPROM_OFFSET_SZL

Auslesen des im AFS EEPROM abgelegten Fahrerlenkwinkeloffsets vom SZL KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $02 InputOutputLocalIdentifier(IOLI) SubID  : $08 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_MOTORLAGEWINKEL_OFFSET

Auslesen des Motorlagewinkeloffsets aus dem EEPROM und des Maximalwerts KWP2000: $30 InputOutputControlByLocalIdentifier SubID  : $03 InputOutputLocalIdentifier(IOLI) SubID  : $08 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### ZF_FACTORY_DATEN_LESEN

hier werden 12 Byte aus dem EEPROM Werksdatenbereich ausgelesen, ab Adresse 0x0FCA KWP2000: $23 readMemoryByAddress SubID  : $02 MemoryTypeIdentifier (ROMX), MT = 2 Modus  : Default

_No arguments._

### IDENT_AIF_LESEN

aktuelles AIF Feld auslesen KWP2000: $1A ReadECUIdentification SubID  : $86 CurrentUIFDataTable Modus  : Default

_No arguments._

### IDENT_ISTUFE_LESEN

Auslesen der aktuellen Integrationsstufe KWP2000: $1A ReadECUIdentification SubID  : $82 reserved by Document Modus  : Default

_No arguments._

### IDENT_DIVCALC_LESEN

Auslesen der aktuellen Kennung des diversitaeren Rechnens auf dem NEC, SG darf NICHT im DRIVE Modus sein KWP2000: $1A ReadECUIdentification SubID  : $83 reserved by Document Modus  : Default

_No arguments._

### IDENT_DCM_LESEN

Auslesen der aktuellen Kennung des DCM Datenstandes KWP2000: $1A ReadECUIdentification SubID  : $84 reserved by Document Modus  : Default

_No arguments._

### IDENT_SSECUSON_LESEN

ZFLD Softwarenummern auf MPC Seite KWP2000: $1A ReadECUIdentification SubID  : $94 systemSupplierECUSoftwareNumber Modus  : Default

_No arguments._

### IDENT_SSECUSVN_LESEN

Auslesen der NEC Logistik, PAF-DAF und Bootblockkennung, SG darf NICHT im DRIVE Modus sein KWP2000: $1A ReadECUIdentification SubID  : $95 SystemSupplierECUSoftwareVersionNumber Modus  : Default

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
| 0x612D | Gierratenregelung Plus |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder fehler NEC |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6135 | SZL neu verbaut oder AFS neu abgleichen |
| 0x6137 | Motorlagesensorversorgung,-position,-kommunikation |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Unterspannung Klemme. 30 (< 9 Volt) |
| 0x613D | elektrischer Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x6140 | Fahrerlenkwinkelplausibilitaet |
| 0x6142 | ECO-Ventil |
| 0x6143 | SERVO-Ventil |
| 0x6144 | Selbsthemmungsueberwachung |
| 0x6145 | diversitaeres Rechnen |
| 0x6146 | Steuergeraet kann nicht in den aktiven Modus wechseln |
| 0x6147 | Motorblockade |
| 0x6148 | Ueberspannung Klemme 30 (> 17 Volt) |
| 0x6149 | kombinierte Lage- Drehzahlueberwachung |
| 0x614A | Motorlagewinkel nicht initialisiert |
| 0x614B | Betriebssystem |
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
| 0xCE92 | Botschaft (Sensorcluster 3, ID=0F4) von F-CAN |
| 0xCE93 | Botschaft (Lenkradwinkel oben, ID=0C9) Initialisierungsphase |
| 0xCE94 | Botschaft (Sensorcluster 1, ID=0D8) von F-CAN |
| 0xCE95 | Botschaft (Sensorcluster 2, ID=0E3) von F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) von DSC F-CAN |
| 0xCE97 | Botschaft (Sensorcluster Status, ID=165) von F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC, ID=11E) von DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C9) von SZL F-CAN |
| 0xCE9A | Botschaft (Anhaengerdaten, ID=2E4) von PT-CAN |
| 0xCE9B | Botschaft (Status DXC Kupplung, ID=BC) von PT-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) von DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) von DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) von DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xCEA0 | Botschaft (Getriebedaten 1, ID=BA) von EGS PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | Botschaft (Status ARS, ID=1AC) von ARS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
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
| default | 0x01 | ZfFehlerCodeUndArt | 0x08 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Anzahl der zu diesem Fehler gefundenen KFCs | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x02 | ZFLS Fehlercode | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x03 | ZFLS Fehlerart | -- | high | unsigned int | -- | 1 | 1 | 0 |
| 0x04 | ZFLS Fehlercode 1 | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x05 | ZFLS Fehlerart 1 | -- | high | unsigned int | -- | 1 | 1 | 0 |
| 0x06 | ZFLS Fehlercode 2 | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x07 | ZFLS Fehlerart 2 | -- | high | unsigned int | -- | 1 | 1 | 0 |
| 0x08 | FSV Nummer | -- | - | signed long | -- | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

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
| 0x7001 | KFC_NEC_ERR_1 |
| 0x7002 | KFC_NEC_ERR_2 |
| 0x7003 | KFC_NEC_ERR_3 |
| 0x7004 | KFC_NEC_ERR_4 |
| 0x7005 | KFC_NEC_ERR_5 |
| 0x7006 | KFC_NEC_ERR_6 |
| 0x7007 | KFC_NEC_ERR_7 |
| 0x7008 | KFC_NEC_ERR_8 |
| 0x7009 | KFC_PROG |
| 0x700A | KFC_COMM |
| 0x700B | KFC_EEPROMNR |
| 0x700C | KFC_EEPROMHR |
| 0x700D | KFC_KLD |
| 0x700E | KFC_ROM |
| 0x700F | KFC_RAM |
| 0x7010 | KFC_CORE |
| 0x7011 | KFC_RESERVED17 |
| 0x7012 | KFC_OS |
| 0x7013 | KFC_MLW_INVALID |
| 0x7014 | KFC_VX_REF |
| 0x7015 | KFC_DPSI1 |
| 0x7016 | KFC_RESERVED22 |
| 0x7017 | KFC_DPSI2 |
| 0x7018 | KFC_RESERVED24 |
| 0x7019 | KFC_AY1 |
| 0x701A | KFC_RESERVED26 |
| 0x701B | KFC_AY2 |
| 0x701C | KFC_RESERVED28 |
| 0x701D | KFC_DEH |
| 0x701E | KFC_RESERVED30 |
| 0x701F | KFC_RESERVED31 |
| 0x7020 | KFC_LWS |
| 0x7021 | KFC_MPC_POSCTRL_ERR |
| 0x7022 | KFC_VINCOMP |
| 0x7023 | KFC_CONFIG |
| 0x7024 | KFC_MPC_BOOT_FLASH |
| 0x7025 | KFC_NEC_UPDATE |
| 0x7026 | KFC_RESERVED38 |
| 0x7027 | KFC_INV_SER_SLZ |
| 0x7028 | KFC_GEST_REDUNDANT |
| 0x7029 | KFC_RESERVED41 |
| 0x702A | KFC_RESERVED42 |
| 0x702B | KFC_LOW_VOLTAGE |
| 0x702C | KFC_RESERVED44 |
| 0x702D | KFC_RESERVED45 |
| 0x702E | KFC_SENSOR_DRIVE |
| 0x702F | KFC_CANA |
| 0x7030 | KFC_CANB |
| 0x7031 | KFC_CANA_Y1 |
| 0x7032 | KFC_CANA_Y2 |
| 0x7033 | KFC_CANA_DSC_VWHL |
| 0x7034 | KFC_RESERVED52 |
| 0x7035 | KFC_CANA_DSC_REGULATION |
| 0x7036 | KFC_CANA_SZL_LWDS |
| 0x7037 | KFC_RESERVED55 |
| 0x7038 | KFC_RESERVED56 |
| 0x7039 | KFC_CANB_DSC_STAT |
| 0x703A | KFC_CANB_DME_TORQ1 |
| 0x703B | KFC_CANB_DME_TORQ3 |
| 0x703C | KFC_CANB_DME_MOTORDAT |
| 0x703D | KFC_GMK |
| 0x703E | KFC_CANB_CAS_KLEMMEN |
| 0x703F | KFC_RESERVED63 |
| 0x7040 | KFC_CANB_KI_KM |
| 0x7041 | KFC_RESERVED65 |
| 0x7042 | KFC_CANA_SZL_LWDS_INIT |
| 0x7043 | KFC_RSCAN |
| 0x7044 | KFC_RESERVED68 |
| 0x7045 | KFC_RESERVED69 |
| 0x7046 | KFC_DIV_CALC_MPC |
| 0x7047 | KFC_SPI |
| 0x7048 | KFC_CANA_AX |
| 0x7049 | KFC_CANB_EGS_GETRIEBEDATEN_1 |
| 0x704A | KFC_TBD74 |
| 0x704B | KFC_SMCOM |
| 0x704C | KFC_US |
| 0x704D | KFC_HIGH_VOLTAGE |
| 0x704E | KFC_GESTOERT_LWSYNC |
| 0x704F | KFC_GESTOERT_ABWUERG |
| 0x7050 | KFC_GESTOERT_ROLLEN |
| 0x7051 | KFC_CANA_CLU_STATUS |
| 0x7052 | KFC_AX |
| 0x7053 | KFC_LWMOTOR_MAX |
| 0x7054 | KFC_CANB_DXC_KUPPLUNG |
| 0x7055 | KFC_CANB_ANHAENGER |
| 0x7056 | KFC_ALIVE_MONITOR |
| 0x7057 | KFC_MOTORBLOCKADE |
| 0x7058 | KFC_CANB_STAT_ARS |
| 0x7059 | KFC_NECQUAL |
| 0x705A | KFC_DRIVE_TRANSITION |
| 0x705B | KFC_TBD91 |
| 0x705C | KFC_TBD92 |
| 0x705D | KFC_TBD93 |
| 0x705E | KFC_TBD94 |
| 0x705F | KFC_TBD95 |
| 0x7060 | KFC_TBD96 |
| 0x7061 | KFC_TBD97 |
| 0x7062 | KFC_TBD98 |
| 0x7101 | NKFC_CAN |
| 0x7102 | NKFC_CCU |
| 0x7103 | NKFC_EEPROMNR |
| 0x7104 | NKFC_US |
| 0x7105 | NKFC_EPROM |
| 0x7106 | NKFC_IWD |
| 0x7107 | NKFC_COMP |
| 0x7108 | NKFC_RAM |
| 0x7109 | NKFC_RELAIS |
| 0x710A | NKFC_SMCURR |
| 0x710B | NKFC_SMPOS |
| 0x710C | NKFC_SMVOLT |
| 0x710D | NKFC_PROG |
| 0x710E | NKFC_EEPROMHR |
| 0x710F | NKFC_MOD_MC |
| 0x7110 | NKFC_BRAKE |
| 0x7111 | NKFC_COMM |
| 0x7113 | NKFC_LWSSUPP |
| 0x7114 | NKFC_DPOS |
| 0x7115 | NKFC_MPC |
| 0x7116 | NKFC_MPC_SUBS_1 |
| 0x7117 | NKFC_MPC_SUBS_2 |
| 0x7118 | NKFC_MPC_SUBS_3 |
| 0x7119 | NKFC_MPC_SUBS_4 |
| 0x711A | NKFC_MPC_SUBS_5 |
| 0x711B | NKFC_MPC_SUBS_6 |
| 0x711C | NKFC_MPC_SUBS_7 |
| 0x711D | NKFC_MPC_SUBS_8 |
| 0x711E | NKFC_MPC_SUBS_9 |
| 0x7120 | NKFC_EN_CHOKE |
| 0x7121 | NKFC_ST |
| 0x7122 | NKFC_ECO |
| 0x7123 | NKFC_COMP_CAN |
| 0x7124 | NKFC_RESERVED36 |
| 0x7125 | NKFC_RESERVED37 |
| 0x7126 | NKFC_CANA_WHEELSPEED |
| 0x7127 | NKFC_LOWVOLT |
| 0x7128 | NKFC_ADC |
| 0x7129 | NKFC_SMCOM |
| 0x712A | NKFC_SPI |
| 0x712B | NKFC_OS |
| 0x712C | NKFC_ALIVE_MONITOR |
| 0x712D | NKFC_SAS_TRIALS |
| 0x712E | NKFC_SAS_FAILS |
| 0x712F | NKFC_SELFLOCK |
| 0x7130 | NKFC_HIGHVOLT |
| 0x7131 | NKFC_TBD49 |
| 0x7132 | NKFC_TBD50 |
| 0x7133 | NKFC_TBD51 |
| 0x7134 | NKFC_TBD52 |
| 0x7135 | NKFC_TBD53 |
| 0x7136 | NKFC_TBD54 |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00000011 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | InfoAllgemein | InfoFahrzeugStati | InfoUmweltBMW | InfoUmweltZF |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | FSV Nummer | -- | - | signed long | -- | 1 | 1 | 0 |
| 0x02 | ZFLS Fehlercode | -- | high | unsigned int | -- | 1 | 1 | 0 |
| 0x03 | ZFLS Fehlerart | -- | high | unsigned int | -- | 1 | 1 | 0 |
| 0x04 | ZFLS Statuswort | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x10 | Fahrzeuggeschwindigkeit | km/h | -- | signed char | -- | 1.8 | 1 | 0 |
| 0x11 | Querbeschleunigung | m/(s*s) | -- | signed char | -- | 1 | 7 | 0 |
| 0x12 | Gierrate | rad/s | -- | signed char | -- | 1 | 70 | 0 |
| 0x13 | Summenlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x14 | Fahrerlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x15 | Versorgungsspannung | Volt | -- | unsigned char | -- | 1 | 12.75 | 0 |
| 0x20 | OS Status | -- | high | unsigned int | -- | 1 | 1 | 0 |
| 0x21 | Ersatzmassnahme | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x22 | Qualifier | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x30 | Gewichtung charakteristische Geschwindigkeit | -- | -- | unsigned char | -- | 1 | 64 | 0 |
| 0x31 | charakteristische Geschwindigkeit | m/s | high | unsigned int | -- | 20 | 1024 | 20 |
| 0x32 | Zeitstempel Zuendungszyklus Zaehler | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x33 | Zeitstempel des sychronen 10 ms Zaehler | -- | - | signed long | -- | 1 | 1 | 0 |
| 0x34 | SG Temperatur | -- | -- | signed char | -- | 1 | 1 | -70 |
| 0x35 | Weckleitung | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x36 | SG-Stati | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x37 | Sperrenstatus | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxx00 | 100 | Allgemeiner Fehler |
| xxxxxx01 | 101 | AFS ausgefallen |
| xxxxxx10 | 110 | AFS gestoert |
| xxxxxx11 | 111 | Allgemeiner Fehler |

### ZFFEHLERCODEUNDART

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 |

### ERCOSEKMODI

| COPM_STATI_NR | COPM_STATI_TEXT |
| --- | --- |
| 0x00 | OPM_OFF |
| 0x01 | OPM_PREDRIVE |
| 0x02 | OPM_POSTRUN |
| 0x03 | OPM_DRIVE |
| 0x04 | OPM_ERROR |
| 0x05 | OPM_INIT |
| 0xFF | unbekannter Betriebssystemstatus |

### GUEROTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT gueltig |
| 0x01 | gueltig |
| 0x02 | nicht definiert |
| 0xFF | unbekannter Status |

### STATUSCANFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Botschaft i.O. |
| 0x02 | Botschaft wurde nie empfangen |
| 0x04 | Mehrere Botschaften pro Abtastzyklus |
| 0x08 | Timeout - Botschaft faellt fuer 1 Abtastzyklus Zyklus aus |
| 0x10 | Fehlerwert laut Nachrichtenkatalog |
| 0x20 | Alive-Fehler |
| 0x40 | Checksummen-Fehler |
| 0x80 | Fehler von CRC Alive Fehlerwert Botschaft nie empfangen |
| 0xFF | unbekannter CAN Fehler Status |

### GUELWD

| WERT | TEXT |
| --- | --- |
| 0x00 | gueltig |
| 0x01 | NICHT gueltig |
| 0x02 | Fehler |
| 0xFF | unbekannter Status |

### GUEDSC

| WERT | TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | passiv |
| 0x02 | defekt |
| 0x03 | LW Verifizierung aktiv |
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
| 0x40 | FLR Regelung |
| 0xFF | Signal ungueltig |

### SZLPROZINFO

| SZL_PROZ_NR | SZL_PROZ_TEXT |
| --- | --- |
| 0x00 | SZL Ein-Prozessor; kein AFS |
| 0xA0 | SZL Zwei-Prozessor; AFS |
| 0xFF | unbekannter Status |

### STATUSMASCHINEEINGAENGE

| NR | TEXT |
| --- | --- |
| 0x00 | HL_OFF |
| 0x01 | HL_INIT |
| 0x02 | HL_ANGLE_INIT |
| 0x03 | HL_READY |
| 0x04 | HL_DRIVE |
| 0x05 | HL_DOWN |
| 0x06 | HL_ERROR |
| 0x07 | HL_PAUSE |
| 0xFF | unbekannt |

### STATUSMASCHINEZUSTAENDE

| NR | TEXT |
| --- | --- |
| 0x00 | ccNOSTATE |
| 0x01 | unbekannt 1 |
| 0x02 | unbekannt 2 |
| 0x03 | unbekannt 3 |
| 0x04 | unbekannt 4 |
| 0x05 | unbekannt 5 |
| 0x06 | unbekannt 6 |
| 0x07 | unbekannt 7 |
| 0x08 | ccMSGREST |
| 0x09 | ccPREINIT |
| 0x0A | ccHWINIT |
| 0x0B | ccSWINIT |
| 0x0C | ccANGLEINIT |
| 0x0D | ccDRIVEREADY |
| 0x0E | ccDRIVEUP |
| 0x0F | ccDRIVE |
| 0x10 | ccDRIVEDOWN |
| 0x11 | ccPOWERDOWN |
| 0x12 | ccSLEEPIND |
| 0x13 | ccOFF |
| 0x14 | ccRESTART |
| 0x15 | ccGOPAUSE |
| 0x16 | ccPAUSE |
| 0x17 | ccGODRIVE |
| 0x18 | unbekannt 24 |
| 0x19 | unbekannt 25 |
| 0x1A | unbekannt 26 |
| 0x1B | unbekannt 27 |
| 0x1C | unbekannt 28 |
| 0x1D | unbekannt 29 |
| 0x1E | unbekannt 30 |
| 0x1F | ccERROR |
| 0xFF | unbekannt |

### INFOUMWELTZF

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 | 0x37 |

### INFOUMWELTBMW

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x20 | 0x21 | 0x22 |

### INFOFAHRZEUGSTATI

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 |

### INFOALLGEMEIN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x01 | 0x02 | 0x03 | 0x04 |

### ECOSERVO

| WERT | TEXT |
| --- | --- |
| 0x00 | i.O., Ventile regeln den Strom korrekt ein |
| 0x01 | Kurzschluss einer Ventilleitung nach U Bat |
| 0x02 | Kurzschluss einer Ventilleitung nach GND |
| 0x03 | offene Leitung / Unterbrechung eines Stromkreises |
| 0x05 | Kurzschluss nach GND oder Unterbrechung der Leitung |
| 0x07 | Strom kann nicht eingestellt werden; Ventilstrom zu niedrig |
| 0x1A | Kurzschluss zwischen den Ventilleitungen |
| 0x57 | Uebertemperatur Endstufe CG207 |
| 0xFF | unbekannter Fehler |

### SENSORCLUSTERTYP

| SCTYP_WERT | SCTYP_TEXT |
| --- | --- |
| 0x00 | Sensorcluster 3.6 |
| 0x01 | Sensorcluster 3.7 |
| 0x02 | Sensorcluster 3.8 |
| 0x03 | Sensorcluster 3.9 |
| 0x04 | Sensorcluster 3.10 |
| 0x05 | Sensorcluster 3.11 |
| 0x08 | Sensorcluster 3.0 |
| 0x09 | Sensorcluster 3.1 |
| 0x0A | Sensorcluster 3.2 |
| 0x0B | Sensorcluster 3.3 |
| 0x0D | TRW_YAW/LAT; |
| 0x0E | TRW_YAW/LAT/LONG |
| 0xFF | Signal ungueltig |

### SENSORCLUSTERSTATUS1

| SCSTATUS1_WERT | SCSTATUS1_TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | CRC Fehler |
| 0x02 | Ueberspannnung |
| 0x04 | Unterspannung |
| 0x08 | Sensor-interner Fehler |
| 0x10 | Synchronisationsfehler |
| 0x20 | Synchronisation Underflow |
| 0x40 | Synchronisation Overflow |
| 0x80 | Bus-Off Fehler |
| 0xFF | unbekannter Status |

### CANSIGNALFEHLER

| CANFEHLER_WERT | CANFEHLER_TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | Checksumme Falsch |
| 0x02 | Alive-Zähler der Nachricht wurde mehr als um 1 erhöht |
| 0x04 | Alive-Zähler der Nachricht wurde nicht erhöht |
| 0x08 | Alive-Zähler der Nachricht stimmt nicht |
| 0x10 | Die Nachricht selbst ist nicht korrekt |
| 0x20 | Es ist ein Fehler in mindestens einen der Signale innerhalb einer Nachricht aufgetreten |
| 0x40 | Das System erwartet eine Nachricht innerhalb einer bestimmten Zeit. Diese ist aber nicht empfangen worden |
| 0x80 | Eine Nachricht ist mehr als einmal vom System empfangen worden |
| 0xFF | unbeaknnter Signal Fehler |

### SENSORCLUSTERSTATUS2

| SCSTATUS2_WERT | SCSTATUS2_TEXT |
| --- | --- |
| 0x00 | i.O. |
| 0x01 | Fehler Gierrate 1 |
| 0x02 | Fehler Querbeschleunigung 1 |
| 0x04 | Fehler Gierbeschleunigung |
| 0x08 | Fehler Laengsbeschleunigung |
| 0x10 | Fehler Gierrate |
| 0x20 | Fehler Querbeschleunigung 2 |
| 0x40 | reserviert |
| 0x80 | reserviert |
| 0xFF | unbekannter Status |

### SENSCLUSTERSIGNALSTATUS

| SCSIGNALSTATUS_WERT | SCSIGNALSTATUS_TEXT |
| --- | --- |
| 0x00 | Signal wie spezifiziert |
| 0x01 | Sensor nicht verfuegbar |
| 0x10 | Signalfehler |
| 0x21 | Initialisierung laeuft |
| 0x20 | Initialisierung beendet |
| 0xFF | unbekannter Status |

### ABGLEICHAKTIV

| ABGLEICHAKTIV_WERT | ABGLEICHAKTIV_TEXT |
| --- | --- |
| 0x00 | Abgleich aktiv |
| 0x01 | Abgleich NICHT aktiv |
| 0xFF | unbekannter Status |

### BASISAKTIV

| BASISAKTIV_WERT | BASISAKTIV_TEXT |
| --- | --- |
| 0x00 | Basiswert uebernehmen |
| 0x01 | Basiswert NICHT uebernehmen |
| 0xFF | unbekannter Status |

### LANGZEITABGLEICH

| LANGZEITABGLEICH_WERT | LANGZEITABGLEICH_TEXT |
| --- | --- |
| 0x00 | Langzeitabgleich NICHT aktiv |
| 0x01 | Langzeitabgleich aktiv |
| 0xFF | unbekannter Status |
