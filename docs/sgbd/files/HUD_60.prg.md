# HUD_60.prg

## General

|  |  |
| --- | --- |
| File | HUD_60.prg |
| Type | PRG |
| Jobs | 99 |
| Tables | 40 |
| Origin | BMW EE-42 Mangold |
| Revision | 1.01 |
| Author | BMW EE-42 Mangold, ESG TM-K Philipp, ESG AB-K Steiner |
| ECU Comment | SGBD fuer HUD E60 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Head-Up-Display |  |  |
| ORIGIN | string | BMW EE-42 Mangold |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | BMW EE-42 Mangold, ESG TM-K Philipp, ESG AB-K Steiner |  |  |
| COMMENT | string | SGBD fuer HUD E60 |  |  |
| PACKAGE | string | 1.32 |  |  |
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

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

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

### MOST_VERSION_LESEN

Auslesen von Most Version KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $A0 MOSTVersion MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_MOST_3DB

Auslesen des Status der Lichtleistungsabsenkung KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_MOST_3DB

Lichtleistungsabsenkung einschalten KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch $00 S1 geoeffnet = 3dB Absenkung MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_WAKE_UP_STATUS

Auslesen des Status WakeupStatus KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_ABILITY_TO_WAKE

Auslesen des Status AbilityToWake KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_ABILITY_TO_WAKE

AbilityToWake einstellen KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD AbilityToWake $00 of, $01 on, $02 critical MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter AbilityToWake Modus table  AbilityToWake Status Defaultwert: DEFAULT 00 |

### _STATUS_MPC_PWM

PWM-Ports des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $01 xxh xx: Portnummer

_No arguments._

### _STATUS_MPC_ADC

ADC-Kanäle des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $xx xx: Kanalnummer

_No arguments._

### _STATUS_MPC_MDASM

MDASM-Kanäle des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $92 $01 $xx xx: Portnummer

_No arguments._

### _STATUS_MPC_IO

I/O-Ports des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $93 $01 $xx xx: Portnummer

_No arguments._

### _STATUS_ASSP_ADC

ADC-Kanäle des ASSP 3 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $25 $01 $xx 

_No arguments._

### _STATUS_ASSP_IO

I/O-Ports des ASSP 3 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $27 $01 $xx xx: Portnummer

_No arguments._

### _STEUERN_MPC_PWM

PWM-Ports des MPC 555 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $pp $hh $ll Durchführung $pp: Portnummer $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| PORT | int | Portnummer 0x00: Iref Blau 0x01: Iref Grün 0x02: Lüfter 0x03: Dimmung Grün 0x10: Comlevel Adjust (z.Zt. nicht aktiv) 0x11: Dimmung Blau 0x12: Iref Rot 0x13: Dimmung Rot |
| PWM_LEVEL | real | PWM-Signal (Dezimalwert) in Prozent 0.00 - 100.00 |

### STEUERN_HELLIGKEIT

PWM-Ports der Dimmungswerte des MPC 555 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $pp $hh $ll Durchführung $pp: 0x03, 0x11 und 0x13 $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| PWM_LEVEL1 | real | PWM-Signal Grün (Dezimalwert) in Prozent 0.00 - 100.00 |
| PWM_LEVEL2 | real | PWM-Signal Rot (Dezimalwert) in Prozent 0.00 - 100.00 |
| PWM_LEVEL3 | real | PWM-Signal Blau (Dezimalwert) in Prozent 0.00 - 100.00 |

### STATUS_HELLIGKEIT

PWM-Ports der Dimmungswerte des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $01 xxh xx: Portnummer

_No arguments._

### STEUERN_STROMWERTE

PWM-Ports der Referenzstromwerte des MPC 555 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $pp $hh $ll Durchführung $pp: 0x00, 0x01 und 0x12 $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| PWM_LEVEL1 | real | Strom Grün (Dezimalwert) in Prozent 0.00 - 100.00 |
| PWM_LEVEL2 | real | Strom Rot (Dezimalwert) in Prozent 0.00 - 100.00 |
| PWM_LEVEL3 | real | Strom Blau (Dezimalwert) in Prozent 0.00 - 100.00 |

### STATUS_STROMWERTE

PWM-Ports der Referenzstromwerte des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $01 xxh xx: Portnummer

_No arguments._

### _STEUERN_TASTER

ADC-Kanal 00 des MPC 555 setzen Tasterbetätigung wird simuliert KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $kk $hh $ll Durchführung $pp: Kanalnummer $hh: High Byte $ll: Low Byte

_No arguments._

### _STEUERN_TASTER_STOP

ADC-Kanal 00 des MPC 555 setzen Tastersimulation wird beendet KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $kk $hh $ll Durchführung $pp: Kanalnummer $hh: High Byte $ll: Low Byte

_No arguments._

### STATUS_TASTER

ADC-Kanal Nr.0 des MPC 555 auslesen 3,3V Taster betätigt 4,2V Taster nicht betätigt 5,0V Taster nicht angeschlossen KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $xx xx: Kanalnummer

_No arguments._

### STATUS_BACKLIGHT_ENABLE

ADC-Kanal Nr.3 des MPC 555 auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $xx xx: Kanalnummer

_No arguments._

### _STEUERN_MPC_PWM_STOP

Zugriff auf die PWM-Ports des MPC 555 beenden KWP2000: $30 InputOutputControlByLocalIdentifier $90 $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_MPC_ADC

ADC-Kanäle des MPC 555 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $kk $hh $ll Durchführung $pp: Kanalnummer $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer 0x00: Taster Wert < 0,5V : Fehler 0,5V < Wert < 3,0V : betätigt 3,0V < Wert < 4,5V : nicht betätigt 0x01: 0x02: Temperatur LED Array 0x03: Auslesen Enable Backlight Wert <  1,0V : disable Wert >= 4,5V : enable Setzen nur für Entwicklung 0x04: Versorgungsspannung Kl.30g 0x05: Auslesen LED-Ketten rot Wert <  1,0V : Fehler Wert >= 1,0V : i.O. Setzen nur für Entwicklung 0x06: Auslesen LED-Ketten gruen Wert <  1,0V : Fehler Wert >= 1,0V : i.O. Setzen nur für Entwicklung 0x07: 0x08: 0x09: 0x0A: 0x0B: 0x0C: 0x0D: 0x0E: Comlevel (z.Zt. nicht aktiv) |
| SPANNUNG | real | Spannungswert in Volt |

### _STEUERN_MPC_ADC_STOP

Zugriff auf die ADC-Kanäle des MPC 555 beenden KWP2000: $30 InputOutputControlByLocalIdentifier $91 $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_MPC_MDASM

MDASM-Kanäle des MPC 555 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $92 $07 Anforderung $92 $06 $kk $ww Durchführung $kk: Kanalnummer $ww: Wert

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer 0x0C: MOST Sendeleistung 0x0D: Enable VCC Display 0x0E: CS LC12018 0x0F: MOST Reset 0x1B: Enable Backlight |
| WERT | int | Wert, 0 oder 1 |

### _STEUERN_MPC_MDASM_STOP

Zugriff auf die MDASM des MPC 555 beenden KWP2000: $30 InputOutputControlByLocalIdentifier $92 $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_MPC_IO

I/O-Ports des MPC 555 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $93 $07 Anforderung $93 $06 $kk $ww Durchführung $kk: Kanalnummer $ww: Wert

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer 0x00: --- vom Debugger genutzt 0x04: --- vom Debugger genutzt 0x05: OUT CAN Transceiver 0x06: OUT CAN Transceiver 0x07: IN 0x08: OUT Programmierspannung internes Flash 0x09: OUT Selbsthaltung MPC555 0x0A: OUT Reset ASSP3 0x0B: OUT Programmierspannung ASSP3 0x0C: IN  Transfer Acknowledge (Flash EEPROM) 0x0D: OUT SDATA DISP Timing (z.Zt. nicht genutzt) 0x0E: OUT Enable DAC (z.Zt. nicht genutzt) 0x0F: IN  SCLK DIPS  (z.Zt. nicht genutzt) |
| WERT | int | Wert, 0 oder 1 |

### _STEUERN_MPC_IO_STOP

Zugriff auf die I/O-Ports des MPC 555 beenden KWP2000: $30 InputOutputControlByLocalIdentifier $93 $00 Keine Argumente erforderlich

_No arguments._

### STEUERN_TESTBILD

Testbilder anzeigen Zustand ist erst durch Sleep Modus beendet KWP2000: $30 InputOutputControlByLocalIdentifier $FD $06

| Name | Type | Description |
| --- | --- | --- |
| BILD_ID | int | Testbildnummer (0x00 .. 0x0D) |

### _STEUERN_DISPLAYBEREICH

Ausgewählte Displaybereiche ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $FEh 07 Anforderung $FEh 06 $aN $eN $gg $aN: Anfangsadresse $eN: Endadresse $gg: Grauwert

| Name | Type | Description |
| --- | --- | --- |
| ANFANGSADRESSE | string | Anfangsadresse s. Graphik Bildspeicher 8200000 - 82FF800 Anfangsadresse < Endeadresse |
| ENDEADRESSE | string | Endadresse s. Graphik Bildspeicher 8200000 - 82FF800 Anfangsadresse < Endeadresse |
| GRAUSTUFE | int | Graustufe zulässig 0x00 - 0x0F |

### STEUERN_SELBSTTEST_EIN

Selbsttestfunktion des Steuergeräts aktvieren KWP2000: $30 InputOutputControlByLocalIdentifier $26 $06 Keine Argumente erforderlich

_No arguments._

### STEUERN_SELBSTTEST_AUS

Selbsttest des ASSP3 deaktivieren KWP2000: $30 InputOutputControlByLocalIdentifier $26 $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_ASSP_IO

I/O-Ports des ASSP 3 setzen KWP2000: $30 InputOutputControlByLocalIdentifier $27 $07 Anforderung $27 $06 $kk $ww Durchführung $kk: Kanalnummer $ww: Wert

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer 0x00: Bidirektonal 0x01: In 0x02: Out 0x03: Bidirektonal 0x04: Bidirektonal 0x05: Out 0x06: Bidirektonal 0x08: Bidirektonal 0x09: Bidirektonal |
| WERT | int | Wert, 0 oder 1 |

### _STEUERN_ASSP_IO_STOP

Zugriff auf die I/O-Ports des ASSP 3 beenden KWP2000: $30 InputOutputControlByLocalIdentifier $27 $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_VOLLSCHRITT

Vollschritt-Test aktivieren KWP2000: $30 InputOutputControlByLocalIdentifier $FB $07 Anforderung $FB $06 $m1 $m2 $m3 $m4 Durchführung $m1: Schrittmotor 1 $m2: Schrittmotor 2 $m3: Schrittmotor 3 $m4: Schrittmotor 4

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG | int | Drehrichtung für Schrittmotor 0: vorwärts 1: rückwärts |
| PWM_LEVEL | real | PMW-Signal für Schrittmotor Angabe in % 0.0 - 100.0 |

### STEUERN_SHUTTER

Shutter auf oder zu fahren KWP2000: $30 InputOutputControlByLocalIdentifier $FB $07 Anforderung $FB $06 $m1 $m2 $m3 $m4 Durchführung $m1: Schrittmotor 1 $m2: Schrittmotor 2 $m3: Schrittmotor 3 $m4: Schrittmotor 4

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG | int | Drehrichtung für Schrittmotor 0: Shutter zu 1: Shutter auf |

### _STEUERN_VOLLSCHRITT_STOP

Vollschritt-Test beenden KWP2000: $30 InputOutputControlByLocalIdentifier $FB $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_MIKROSCHRITT_STOP

Schrittmotor in Ausgangsposition zurückstellen KWP2000: $30 InputOutputControlByLocalIdentifier $20 $00 Keine Argumente erforderlich

_No arguments._

### _STEUERN_MIKROSCHRITT

Schrittmotor um vorgegebenen Winkel vorwärts bewegen. KWP2000: $30 InputOutputControlByLocalIdentifier $20 $07 Anforderung $20 $06 $hh $$ll Durchführung $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| SCHRITTANZAHL | real | Anzahl der Mikroschritte für Schrittmotor 100 - 65535 |

### STATUS_ARRAY_TEMPERATUR

Temperatur des LED Arrays auslesen

_No arguments._

### STATUS_KLEMMEN

Klemmenstatus auslesen

_No arguments._

### STATUS_BORDNETZSPANNUNG

Bordnetzspannung über AD-Kanal 4 des MPC auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $04

_No arguments._

### STATUS_ENERGIESPARMODUS

Aktivierten Energiesparmodus auslesen

_No arguments._

### _STATUS_SHACKHARTMANN_TESTER

Auslesen des Steuergeraete-Speichers KWP 2000: $23 ReadMemoryByAddress Modus   : Default

_No arguments._

### STEUERN_STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### _STATUS_HUD

Status HUD auslesen Prüft, ob Display EIN oder AUS ist

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA4E8 | Schalter (ein/aus), Überspannung oder Unterspannung |
| 0xA4E9 | Schaltregler NT LED Array |
| 0xA4EA | Backlight LED |
| 0xA4EB | Bordnetzspannung, Überspannung oder Unterspannung |
| 0xA4EC | Temperaturfühler LED |
| 0xA4ED | Interner Fotosensor |
| 0xA4EE | Kommunikation Master - Slave gestört |
| 0xA4EF | EEPROM - Kodierdatenfehler VDO |
| 0xA4F0 | EEPROM - Kodierdatenfehler BMW |
| 0xA4F1 | CAN: No ID |
| 0xA4F2 | CAN: Ausfall Telegramm Klemmenstatus |
| 0xA4F3 | CAN: Ausfall/Fehler Telegramm Anzeige ACC |
| 0xA4F4 | CAN: Ausfall Telegramm Geschwindigkeit |
| 0xA4F5 | CAN: Ausfall/Fehler Telegramm Status Kombi |
| 0xA4F6 | CAN: Ausfall Telegramm Regelgeschwindigkeit Stufentempomat |
| 0xA4F7 | CAN: Ausfall Telegramm LCD Leuchtdichte |
| 0xA4F8 | CAN: Ausfall Telegramm Einheiten |
| 0xA4F9 | CAN: Ausfall Telegramm Status Fahrlicht |
| 0xA4FA | CAN: Ausfall Telegramm Kilometer/Reichweite |
| 0xA4FB | CAN: Ausfall/Fehler Telegramm Anzeigesteuerung CC-Meldung |
| 0xA4FC | CAN: Ausfall Telegramm Status Bordcomputer |
| 0xA4FD | CAN: Ausfall Telegramm Anzeige Kombi/Externe Anzeige |
| 0xA4FE | CAN: physikalischer Fehler EIN |
| 0xA4FF | CAN: Senden misslungen |
| 0xA500 | CAN: kein Acknowledge |
| 0xA501 | CAN: Bus off |
| 0xA502 | CAN: Signal ungültig |
| 0xA503 | CAN: Ausfall Telegramm Personalisierung Erweitert |
| 0xA504 | CAN: Ausfall Telegramm Personalisierung Standard |
| 0xA505 | CAN: No Answer to Request (580h+3Dh) |
| 0xA506 | Energiesparmode aktiv |
| 0xD844 | CAN: Low |
| 0xD847 | CAN: Bus off oder dual ported RAM |
| 0xD84D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD84E | Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD850 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD851 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD852 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxx00xx | 20 | Text a |
| xxxx01xx | 21 | Text b |
| xxxx10xx | 22 | Text c |
| xxxx11xx | 23 | Text d |
| xxxxxx01 | 11 | Text x |
| xxxxxx10 | 12 | Text y |
| xxxxxxxx | 0 | -- |

### LEERUW_7

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_5

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_4

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0xAA | 0xAA | 0xAA |

### LEERUW_2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0xAA | 0xAA |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA4E8 | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4E9 | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4EA | 0x02 | 0x0B | 0x01 | 0x03 |
| 0xA4EB | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4EC | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4ED | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4EE | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4EF | 0x02 | 0x01 | 0x04 | LeerUW_2 |
| 0xA4F0 | 0x02 | 0x01 | 0x04 | LeerUW_2 |
| 0xA4F1 | 0x01 | LeerUW_5 | - | - |
| 0xA4F2 | 0x01 | LeerUW_5 | - | - |
| 0xA4F3 | 0x01 | 0x13 | LeerUW_4 | - |
| 0xA4F4 | 0x01 | LeerUW_5 | - | - |
| 0xA4F5 | 0x01 | 0x12 | LeerUW_4 | - |
| 0xA4F6 | 0x01 | LeerUW_5 | - | - |
| 0xA4F7 | 0x01 | LeerUW_5 | - | - |
| 0xA4F8 | 0x01 | LeerUW_5 | - | - |
| 0xA4F9 | 0x01 | LeerUW_5 | - | - |
| 0xA4FA | 0x01 | LeerUW_5 | - | - |
| 0xA4FB | 0x01 | 0x14 | LeerUW_4 | - |
| 0xA4FC | 0x01 | LeerUW_5 | - | - |
| 0xA4FD | 0x01 | LeerUW_5 | - | - |
| 0xA4FE | 0x01 | 0x0D | LeerUW_4 | - |
| 0xA4FF | 0x01 | 0x0E | LeerUW_4 | - |
| 0xA500 | 0x01 | 0x0F | LeerUW_4 | - |
| 0xA501 | 0x01 | 0x10 | LeerUW_4 | - |
| 0xA502 | 0x01 | 0x11 | LeerUW_4 | - |
| 0xA503 | 0x01 | LeerUW_5 | - | - |
| 0xA504 | 0x01 | LeerUW_5 | - | - |
| 0xA505 | 0x0C | LeerUW_5 | - | - |
| 0xA506 | LeerUW_3 | LeerUW_3 | - | - |
| 0xD844 | 0x01 | LeerUW_7 | - | - |
| 0xD847 | 0x01 | LeerUW_7 | - | - |
| 0xD84D | 0x01 | LeerUW_7 | - | - |
| 0xD84E | 0x01 | LeerUW_7 | - | - |
| 0xD850 | 0x01 | 0xAA | 0x09 | LeerUW_4 |
| 0xD851 | 0x01 | LeerUW_7 | - | - |
| 0xD852 | 0x01 | LeerUW_7 | - | - |
| default | 0x01 | - | - | - |

### LEDFARBE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | rot |
| 0x02 | gruen |
| 0x03 | blau |
| XY | Farbe unplausibel |

### CDBERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Unkritisch |
| 0x01 | Kritisch |
| XY | Kritikalität unplausibel |

### STATUSKOMBI

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Checksum |
| 0x03 | Timeout und Checksum |
| 0x04 | Fehler Alive-Zähler |
| 0x05 | Timeout und Alive-Zähler |
| 0x06 | Checksum und Alive-Zähler |
| 0x07 | Timeout, Checksum und Alive-Zähler |
| 0x08 | Fehler Schnittstelle ACC/Kombi |
| 0x09 | Timeout und Schnittstelle ACC/Kombi |
| 0x0A | Checksum und Schnittstelle ACC/Kombi |
| 0x0B | Timeout, Checksum, Schnittstelle ACC/Kombi |
| 0x0C | Alive-Zähler und Schnittstelle ACC/Kombi |
| 0x0D | Timeout, Alive-Zähler, Schnittstelle ACC/Kombi |
| 0x0E | Checksum, Alive-Zähler, Schnittstelle ACC/Kombi |
| 0x0F | Timeout, Checksum, Alive-Zähler, Schnittstelle ACC/Kombi |
| 0x10 | ungültige Geschwindigkeit |
| 0x11 | Timeout, ungültige Geschwindigkeit |
| 0x12 | Checksum, ungültige Geschwindigkeit |
| 0x13 | Timeout, Checksum und ungültige Geschwindigkeit |
| 0x14 | Fehler Alive-Zähler und Ungült.Geschwindigkeit |
| 0x15 | Timeout, Alive-Zähler, Ungült.Geschwindigkeit |
| 0x16 | Checksum, Alive-Zähler, Ungült.Geschwindigkeit |
| 0x17 | Timeout, Checksum, Alive, Ungült.Geschwindigkeit |
| 0x18 | Fehler Schnittstelle ACC/Kombi, Ungült.Geschwindigkeit |
| 0x19 | Timeout, Schnittstelle ACC/Kombi, Ungült.Geschwindigkeit |
| 0x1A | Checksum, Schnittstelle ACC/Kombi, Ungült.Geschwindigkeit |
| 0x1B | Timeout, Checksum, Schnittst. ACC/KI, ungült.Geschwindigkeit |
| 0x1C | Alive, Schnittst. ACC/Kombi, ungült.Geschwindigkeit |
| 0x1D | Timeout, Alive, Schnittst. ACC/KI, ungült.Geschwindigkeit |
| 0x1E | Checksum, Alive, Schnittst. ACC/KI,ungült.Geschwindigkeit |
| 0x1F | Timeout,Checksum,Alive,Schnittst. ACC/KI,ungül.Geschwindigkeit |
| XY | Status Kombi unplaubsibel |

### ANZEIGEACC

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Checksum |
| 0x03 | Timeout und Checksum |
| 0x04 | Fehler im Alive-Zähler |
| 0x05 | Timeout und Alive-Zähler |
| 0x06 | Checksum und Alive-Zähler |
| 0x07 | Timeout, Checksum und Alive-Zähler |
| 0x08 | Ungueltiger oder Reserve-Wert |
| 0x09 | Timeout und ungueltiger/Reserve-Wert |
| 0x0A | Checksum und ungueltiger/Reserve-Wert |
| 0x0B | Timeout, Checksum und unguelt./Reserve-Wert |
| 0x0C | Alive-Zähler und ungueltiger/Reserve-Wert |
| 0x0D | Timeout,Alive-Zähler und ungül./Reserve-Wert |
| 0x0E | Checksum, Alive-Zähler, unguelt./Reserve-Wert |
| 0x0F | Timeout,Checksum, Alive, ungül./Reserve-Wert |
| XY | Anzeige ACC unplaubsibel |

### CCMELDUNG

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Textupdate ungueltig |
| 0x03 | Timeout und Textupdate ungueltig |
| XY | CC Meldung unplaubsibel |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordnetzspannung | Volt | -- | unsigned char | -- | 1 | 10 | 0 |
| 0x02 | Betriebsdauer | Stunden | H | unsigned int | -- | 1 | 1 | 0 |
| 0x03 | LED Kette | 0-n | -- | 0xFF | LEDFarbe | 1 | 1 | 0 |
| 0x04 | Codierdatenfehler | 0-n | -- | 0xFF | CDBError | 1 | 1 | 0 |
| 0x05 | Geräteadresse NAK | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x06 | Funktionsblock | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x07 | Instanz ID | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x08 | Funktions ID | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x09 | Position Node Register | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x0A | Geräteadresse | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x0B | Temperatur LED Array | Grad C | H | signed int | -- | 1 | 1 | 0 |
| 0x0C | Anfrage ID | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x0D | Physikalischer Fehler | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x0E | Senden misslungen | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x0F | Kein Acknowledge | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x10 | Bus off | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x11 | Signal ungültig | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x12 | Status Kombi | 0-n | -- | 0xFF | StatusKombi | 1 | 1 | 0 |
| 0x13 | Anzeige ACC | 0-n | -- | 0xFF | AnzeigeACC | 1 | 1 | 0 |
| 0x14 | CC Meldung | 0-n | -- | 0xFF | CCMeldung | 1 | 1 | 0 |
| 0xAA | ohne Bedeutung | Hex | -- | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9400 | Helligkeitsreduzierung aufgrund zu niedriger Bordnetzspannung |
| 0x9401 | Helligkeitsreduzierung aufgrund zu hoher LED Array Temperatur |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### MOST_UW

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x04 | 0x05 | 0x06 |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9308 | 0x01 | 0x02 | LeerUW_6 | - |
| 0x930A | 0x01 | LeerUW_7 | - | - |
| 0x930B | 0x01 | 0xAA | 0x08 | MOST_UW |
| 0x930C | 0x01 | LeerUW_7 | - | - |
| 0x930D | 0x01 | LeerUW_7 | - | - |
| 0x9310 | 0x01 | 0xAA | 0x03 | MOST_UW |
| 0x9400 | 0x09 | 0x0A | 0x01 | LeerUW_3 |
| 0x9401 | 0x09 | 0x0A | 0x01 | LeerUW_3 |
| default | 0x01 | - | - | - |

### RAMSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | RAM Verlust |
| 0x01 | RAM Erhalt |
| YX | unplausibler RAM Status |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordnetzspannung | Volt | -- | unsigned char | -- | 1 | 10 | 0 |
| 0x02 | Reset mit | 0-n | -- | 0xFF | RAMStatus | 1 | 1 | 0 |
| 0x03 | Geräteadresse NAK | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x04 | Funktionsblock | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x05 | Instanz ID | Hex | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x06 | Funktions ID | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x07 | Position Node Register | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x08 | Geräteadresse | Hex | H | unsigned int | -- | 1 | 1 | 0 |
| 0x09 | Betriebsdauer | Stunden | H | unsigned int | -- | 1 | 1 | 0 |
| 0x0A | Temperatur LED Array | Grad C | H | signed int | -- | 1 | 1 | 0 |
| 0xAA | ohne Bedeutung | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### ABILITY_TO_WAKE

| ABILITY_TO_WAKE_NR | ABILITY_TO_WAKE_MODE |
| --- | --- |
| 0x00 | off |
| 0x01 | on |
| 0x02 | critical |
| 0xXY | unbekannter Mode |

### MOST_3DB

| MOST_3DB_NR | MOST_3DB_MODE |
| --- | --- |
| 0x00 | Lichtleistung abgesenkt |
| 0x01 | Volle Lichtleistung |
| 0xXY | unbekannter Mode |

### WAKE_UP_STATUS

| WAKE_UP_STATUS_NR | WAKE_UP_STATUS_MODE |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | SG hat geweckt |
| 0x02 | SG wurde geweckt |
| 0xXY | unbekannter Mode |

### TEMPLEDARRAY

| SPANNUNG | TEMPERATUR |
| --- | --- |
| 50 | -39 |
| 49 | -39 |
| 48 | -32 |
| 47 | -25 |
| 46 | -22 |
| 45 | -18 |
| 44 | -15 |
| 43 | -11 |
| 42 | -9 |
| 41 | -4 |
| 40 | -1 |
| 39 | 1 |
| 38 | 2 |
| 37 | 4 |
| 36 | 6 |
| 35 | 8 |
| 34 | 10 |
| 33 | 12 |
| 32 | 14 |
| 31 | 16 |
| 30 | 18 |
| 29 | 20 |
| 28 | 22 |
| 27 | 23 |
| 26 | 24 |
| 25 | 25 |
| 24 | 27 |
| 23 | 30 |
| 22 | 32 |
| 21 | 35 |
| 20 | 37 |
| 19 | 40 |
| 18 | 42 |
| 17 | 45 |
| 16 | 47 |
| 15 | 50 |
| 14 | 52 |
| 13 | 55 |
| 12 | 57 |
| 11 | 60 |
| 10 | 62 |
| 9 | 65 |
| 8 | 67 |
| 7 | 69 |
| 6 | 71 |
| 5 | 78 |
| 4 | 85 |
| 3 | 95 |
| 2 | 101 |
| 1 | 115 |
| 0 | 115 |
| 0xXY | unbekannte Temperatur |

### KLEMMENSTATUS

| WERT | STATUS |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xXY | unbekannter Klemmenstatus |

### DISPLAYSTATUS

| WERT | STATUS |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xXY | unbekannter Displaystatus |

### ENERGYSAVEMODE

| WERT | MODE |
| --- | --- |
| 0x00 | Kein Energiesparmodus aktiv |
| 0x01 | Fertigungsmodus aktiv |
| 0x02 | Transportmodus aktiv |
| 0x04 | Werkstattmodus aktiv |
| 0xXY | unbekannter Energiesparmodus |
