# afs_60.prg

## General

|  |  |
| --- | --- |
| File | afs_60.prg |
| Type | PRG |
| Jobs | 132 |
| Tables | 60 |
| Origin | BMW EE-21 Hans Sarnowski |
| Revision | 8.02 |
| Author | S&S Joachim Schindlbeck |
| ECU Comment | Aktive Front Steering fuer E60 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | AFS |  |  |
| ORIGIN | string | BMW EE-21 Hans Sarnowski |  |  |
| REVISION | string | 8.02 |  |  |
| AUTHOR | string | S&S Joachim Schindlbeck |  |  |
| COMMENT | string | Aktive Front Steering fuer E60 |  |  |
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

### HS_LESEN_DETAIL

Historypeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2101 - $21FF HistoryMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Historycode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

_No arguments._

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

Physikalische Hardware Nummer lesen, PECUHN KWP2000: $1A ReadECUIdentification SubID    $87 physicalECUHardwareNumber, PECUHN Modus  : Default

_No arguments._

### IDENT_SSECUSEN_LESEN

Seriennummer aus EEPROM lesen KWP2000: $1A ReadECUIdentification SubID    $89 systemSupplierECUSerialNumber Modus  : Default

_No arguments._

### IDENT_SSS_LESEN

Revisionsnummer des MPC555 KWP2000: $1A ReadECUIdentification SubID    $8A systemSupplierSpecific Modus  : Default

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

### STATUS_REDUNLWS_WINKELWERTE_ROH

Auslesen des redundanten Fahrerlenkwinkels, gesendet von SZL uebertragen ueber serielle SN KWP2000: $30 InputOutputControlByLocalIdentifier $06 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_LWG_WINKELWERTE_PHYSIKALISCH

Auslesen der Rohwerte vom Summenlenkwinkelsensor (singleturn Wert) ueber Botschaft (C3) LO-CAN, Fahrwerks-CAN, F-CAN, Private-CAN oder auch FW-CAN Wertebereich -90 <--> +90 Grad KWP2000: $30 InputOutputControlByLocalIdentifier $07 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

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

Auslesen verschiedener ALIVE Zaehler KWP2000: $30 InputOutputControlByLocalIdentifier $13InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

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

### STATUS_MPC_ERROR_INFO

Auslesen des MPC555 Fehlerspeichers KWP2000: $30 InputOutputControlByLocalIdentifier $30 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_NEC_ERROR_INFO

Auslesen des NEC Fehlerspeichers KWP2000: $30 InputOutputControlByLocalIdentifier $31 InputOutputLocalIdentifier(IOLI) $01 InputOutputControlParameter(IOCP) Modus  : Default

_No arguments._

### STATUS_MOTORLAGEWINKEL_OFFSET_LESEN

Auslesen des Motorlagewinkeloffsets KWP2000: $23 readMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 Anzahl der auszulesenden Bytes: 6 Speicher Adresse: 0x019E Modus  : Default

_No arguments._

### STEUERN_MOTORLAGEWINKEL_OFFSET_SCHREIBEN

Schreiben des Motorlagewinkeloffsets an eine feste Adresse im EEProm KWP2000: $3D WriteMemoryByAddress,(WMBA) MemoryTypeIdentifier,ROMX = 2 Anzahl der zu schreibenden Bytes: 6 Speicher Adresse: 0x019E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MOTORLAGEWINKEL_OFFSET_WERT | real | in Grad |
| PSW | string | Freischaltung zum Schreiben |

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

NUR Fehlerspeicher des MPC loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : $FF $00

_No arguments._

### FS_NEC_LOESCHEN

NUR Fehlerspeicher des NEC loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : $FF $01

_No arguments._

### START_LWG_INIT

Start der Summenlenkwinkelinitialisierung KWP2000: $31 StartRoutineByLocalIdentifier Modus  : $50

_No arguments._

### START_EEPROM_INIT_MPC

MPC EEPROM initialisieren KWP2000: $31 StartRoutineByLocalIdentifier Modus  : $51 RoutineLocalIdentifer

| Name | Type | Description |
| --- | --- | --- |
| START_WERT | int | Anzahl der zu initialisierenden EEPROM Bloecke |

### START_LWM_RUECKSETZEN

1 Telegramm Motorlagewinkels auf ungueltig setzen, durch SG RESET 2 Telegramm Status des Motorlagewinkels wird ausgelesen KWP2000: $31 RequestRoutineResultsByLocalIdentifier $54 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### LWM_INIT_ABFRAGEN

Gueltigkeit des Rotorlagewinkels auslesen KWP2000: $33 RequestRoutineResultsByLocalIdentifier $50 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### LWG_INIT_ABFRAGEN

Gueltigkeit des Summenlenkwinkels auslesen Quadrantenbestimmung KWP2000: $33 RequestRoutineResultsByLocalIdentifier $51 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### NEC_FLASH_PROGRAMMIER_STATUS_LESEN

Zustand des NEC beim bzw. nach dem Flashen KWP2000: $33 RequestRoutineResultsByLocalIdentifier $52 Inbetriebnahme Resultat abfragen Modus  : Default

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

### FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### ZF_FACTORY_DATEN_LESEN

MPC EEPROM Daten lesen fuer INPA Darstellung KWP2000: $23 readMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige MPC Speicher Adressen: 0x0200-0x0FFF EEPROM Speichergroesse 4096 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

_No arguments._

### STEUERN_DVR_TESTSTIM

Teststimuli fuer diversitaeres Rechnen setzen KWP2000: $3B WriteDataByLocalIdentifier setzt Testvektoren fuers diversi. Rechnen 2 Argumente 2,5678

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_DVR_TYP | int | Wertebereich[0....255] |
| STEUERN_DVR_TEST_VEKTOR | long | Wertebereich[0...2147483648] |

### STEUERN_DPRAM_TESTSTIM

Teststimuli DX Mechanismus setzen Erweitertes KWP2000 setzen, fuer DEBUG Zwecke KWP2000: $3B WriteDataByLocalIdentifier 2 Argumente 0,2

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_TYP | int | Wertebereich[0....255] |
| STEUERN_DPRAM_TEST_VEKTOR | int | Wertebereich[0..255] |

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

### HARTTEXTE

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
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x612C | Hardwarefehler Steuergeraet |
| 0x612D | Hydraulikoeltemperatur |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder -Fehler NEC |
| 0x6132 | redundanter Fahrerlenkwinkel oben |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6136 | Sensorversorgung Motorlage und -position |
| 0x6137 | Motorlagesensor |
| 0x6138 | Motor- Uebertemperatur |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Versorgungsspannung Kl. 30 ( < 7.5 Volt ) |
| 0x613B | Fahrdynamiksensoren |
| 0x613C | Winkelsummenbeziehung fehlerhaft |
| 0x613D | elektr. Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x613F | Plausibilitaet Lenkwinkel-Rad (Summenlenkwinkel) |
| 0x6140 | Redundanzvergleich Fahrerlenkwinkel oben |
| 0x6141 | Motordynamikueberwachung |
| 0x6142 | ECO-Ventil im SGM |
| 0x6143 | Servoventil im SGM |
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
| 0xCE93 | Botschaft (Lenkradwinkel oben, ID=0C8)Initialisierungsphase |
| 0xCE94 | Botschaft (Fahrdynamiksensor 2, ID=0C7) von F-CAN |
| 0xCE95 | Botschaft (Fahrdynamiksensor 1, ID=0CB) von F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) von DSC F-CAN |
| 0xCE97 | Botschaft (Lenkwinkel-Rad (Summenlenkwinkel), ID=0C3) von F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC, ID=11E) von DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C8) von SZL F-CAN |
| 0xCE9A | Botschaft (Radtoleranzabgleich, ID=374) von DSC PT-CAN |
| 0xCE9B | Botschaft (Fahrzeugzustand, ID=1A0) von DSC PT-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) von DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) von DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) von DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xCEA0 | Botschaft (Status Lenkunterstuetzung, ID=0E0) von SGM PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
| 0xFFFF | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x612C | Hardwarefehler Steuergeraet |
| 0x612D | Hydraulikoeltemperatur |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder -Fehler NEC |
| 0x6132 | redundanter Fahrerlenkwinkel oben |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6136 | Sensorversorgung Motorlage und -position |
| 0x6137 | Motorlagesensor |
| 0x6138 | Motor- Uebertemperatur |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Versorgungsspannung Kl. 30 ( < 7.5 Volt ) |
| 0x613B | Fahrdynamiksensoren |
| 0x613C | Winkelsummenbeziehung fehlerhaft |
| 0x613D | elektr. Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x613F | Plausibilitaet Lenkwinkel-Rad (Summenlenkwinkel) |
| 0x6140 | Redundanzvergleich Fahrerlenkwinkel oben |
| 0x6141 | Motordynamikueberwachung |
| 0x6142 | ECO-Ventil im SGM |
| 0x6143 | Servoventil im SGM |
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
| 0xCE93 | Botschaft (Lenkradwinkel oben, ID=0C8)Initialisierungsphase |
| 0xCE94 | Botschaft (Fahrdynamiksensor 2, ID=0C7) von F-CAN |
| 0xCE95 | Botschaft (Fahrdynamiksensor 1, ID=0CB) von F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) von DSC F-CAN |
| 0xCE97 | Botschaft (Lenkwinkel-Rad (Summenlenkwinkel), ID=0C3) von F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC, ID=11E) von DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C8) von SZL F-CAN |
| 0xCE9A | Botschaft (Radtoleranzabgleich, ID=374) von DSC PT-CAN |
| 0xCE9B | Botschaft (Fahrzeugzustand, ID=1A0) von DSC PT-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) von DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) von DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) von DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xCEA0 | Botschaft (Status Lenkunterstuetzung, ID=0E0) von SGM PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 11111111 |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 11111111 |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 00000000 | 000 | Allgemeiner Fehler |
| xxxxxx01 | 11 | Text x |
| xxxxxx10 | 12 | Text y |
| xxxxxxxx | 0 | -- |

### HARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 00000000 | 000 | Allgemeiner Fehler |
| xxxxxx01 | 11 | Text x |
| xxxxxx10 | 12 | Text y |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x613B | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DPSI |
| 0x613F | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DEH |
| 0x6140 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | LWS |
| 0x6141 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | MDYN |
| default | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | 0xFF |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x613B | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DPSI |
| 0x613F | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | DEH |
| 0x6140 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | LWS |
| 0x6141 | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | MDYN |
| default | LOWLEVEL | SYSTEMSTATE | ERRORSTATE | 0xFF |

### LOWLEVEL

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x01 |

### SYSTEMSTATE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C |

### ERRORSTATE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0D | 0x0E | 0x0F | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x1A | 0x1B | 0x1C |

### DPSI

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x1D | 0x1E | 0x1F | 0x20 | 0x21 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 | 0x27 | 0x28 | 0x29 | 0x2A | 0x2B | 0x2C |

### DEH

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x3D | 0x3E | 0x3F | 0x40 | 0x41 | 0x42 | 0x43 | 0x44 | 0x45 | 0x46 | 0x47 | 0x48 | 0x49 | 0x4A | 0x4B | 0x4C |

### LWS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x4D | 0x4E | 0x4F | 0x50 | 0x51 | 0x52 | 0x53 | 0x54 | 0x55 | 0x56 | 0x57 | 0x58 | 0x59 | 0x5A | 0x5B | 0x5C |

### MDYN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x5E | 0x5F | 0x60 | 0x61 | 0x62 | 0x63 | 0x64 | 0x65 | 0x66 | 0x67 | 0x68 | 0x69 | 0x6A | 0x6B | 0x6C | 0x6D |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | ZFLS Fehlercode | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x02 | ZFLS Fehlerart | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x03 | Fahrzeuggeschwindigkeit | km/h | -- | signed char | -- | 2 | 1 | 0 |
| 0x04 | Querbeschleunigung | m/(s*s) | -- | signed char | -- | 1 | 7 | 0 |
| 0x05 | Gierrate | rad/s | -- | signed char | -- | 1 | 70 | 0 |
| 0x06 | Summenlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x07 | Fahrerlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x08 | Versorgungsspannung | Volt | -- | unsigned char | -- | 1 | 12.75 | 0 |
| 0x09 | Motormoment | ? | -- | signed char | -- | 1 | 1 | 0 |
| 0x0A | diverse SG-Stati | digital | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x0B | Motortemperatur | Grad Celsius | -- | unsigned char | -- | 1 | 1 | -70 |
| 0x0C | Endstufentemperatur | Grad Celsius | -- | unsigned char | -- | 1 | 1 | -70 |
| 0x0D | Abschaltung der Aktivlenkung                                        bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x0E | Abschaltung der Gierratenregelung bis Klemmenwechsel                bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x0F | Ersatzwert Motordrehzahl fuer ECO-Funktionalitaet                   bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x10 | langsame Rueckstellung des Lenkradschiefstandes nach Abschaltung    bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x11 | temporaere Abschaltung der Gierratenregelung                        bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x12 | temporaere Abschaltung der Gierratenregelung                        bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x13 | Abschaltung der Aktivlenkung nach 100 sec                           bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x14 | geschwindigkeitsunabhaengige Lenkuebersetzung                       bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x15 | fahrtrichtungsunabhaengige Lenkuebersetzung                         bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x16 | Ersatzwert Gierrate fuer Servotronic-, DME-Funktionalitaet          bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x17 | Ersatzwert Querbesch. fuer Servotronic-, DME-Funktionalitaet        bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x18 | Ersatzwert Lenkwinkelgeschw. fuer Servotronic-, DME-Funktionalitaet bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x19 | Fehler des Fahrerlenkwinkels oder des Motorlagewinkels              bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x1A | konst. Ersatzwert fuer Summenlenkwinkel                             bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x1B | Fehler des Summenlenkwinkels oder des Motorlagewinkels              bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x1C | konst. Ersatzwert fuer Fahrerlenkwinkel                             bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x1D | Sensorfehler                           FDYS bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x1E | Gradient Fehlerverdacht              FDYS bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x1F | Gradient Fehler                      FDYS bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x20 | Signal Peak Fehler                     FDYS bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x21 | Offsetueberwachung Fehler              FDYS bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x22 | Empfindlichkeits Ueberwachung Fehler   FDYS bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x23 | Roh-Redundanz Fehlerverdacht           FDYS bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x24 | Roh-Redundanz Fehler                   FDYS bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x25 | unbenutzt                              FDYS bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x26 | Referenz Redundanz Fehlerverdacht    FDYS bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x27 | Referenz Redundanz Fehler            FDYS bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x28 | unbenutzt                              FDYS bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x29 | Fehler im Sensorcluster 2              FDYS bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x2A | Fehler im Sensorcluster 1              FDYS bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x2B | unbenutzt                              FDYS bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x2C | unbenutzt                              FDYS bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x3D | Lenkwinkelgradient Fehlerverdacht     LWS bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x3E | Lenkwinkelgradient Fehler             LWS bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x3F | Lenkwinkel Peak Fehler                  LWS bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x40 | unbenutzt                               LWS bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x41 | Lenkwinkeloffset Fehlerverdacht       LWS bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x42 | Lenkwinkeloffset Fehler               LWS bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x43 | Winkelsummengleichung Fehlerverdacht  LWS bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x44 | Winkelsummengleichung Fehler          LWS bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x45 | unbenutzt                               LWS bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x46 | unbenutzt                               LWS bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x47 | unbenutzt                               LWS bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x48 | unbenutzt                               LWS bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x49 | unbenutzt                               LWS bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x4A | unbenutzt                               LWS bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x4B | unbenutzt                               LWS bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x4C | unbenutzt                               LWS bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x4D | Signal Fehler Lenkradwinkel oben       LWS bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x4E | Signal Fehler redundanter Lenkr.oben   LWS bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x4F | Timeout Fehler Lenkradwinkel oben      LWS bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x50 | Timeout Fehler redundanter Lenkr.oben  LWS bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x51 | Timeout                                LWS bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x52 | Redundant Checksum Error               LWS bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x53 | Fehler Gradient Lenkradwinkel          LWS bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x54 | Redundanz Differenz Fehler             LWS bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x55 | Sum Differenz Fehler                   LWS bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x56 | Timeout Difference Fehler              LWS bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x57 | keine Lenkwinkeldaten                  LWS bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x58 | keine Lenkwinkeldaten oben             LWS bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x59 | keine redundanten Lenkwinkeldaten      LWS bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x5A | keine Lenkwinkeldaten aus FIFO         LWS bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x5B | Timeout im FIFO                        LWS bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x5C | unbenutzt                              LWS bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x5E | Fehler Integral 1                   MDYN Bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x5F | Fehler Integral 2                   MDYN Bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x60 | unbenutzt                             MDYN Bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x61 | unbenutzt                             MDYN Bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x62 | unbenutzt                             MDYN Bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x63 | unbenutzt                             MDYN Bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x64 | unbenutzt                             MDYN Bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x65 | unbenutzt                             MDYN Bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x66 | unbenutzt                             MDYN Bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x67 | unbenutzt                             MDYN Bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x68 | unbenutzt                             MDYN Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x69 | unbenutzt                             MDYN Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x6A | unbenutzt                             MDYN Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x6B | unbenutzt                             MDYN Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x6C | unbenutzt                             MDYN Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x6D | unbenutzt                             MDYN Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0xFF | ohne Bedeutung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte UW | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | ZFLS Fehlercode | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x02 | ZFLS Fehlerart | -- | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x03 | Fahrzeuggeschwindigkeit | km/h | -- | signed char | -- | 2 | 1 | 0 |
| 0x04 | Querbeschleunigung | m/(s*s) | -- | signed char | -- | 1 | 7 | 0 |
| 0x05 | Gierrate | rad/s | -- | signed char | -- | 1 | 70 | 0 |
| 0x06 | Summenlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x07 | Fahrerlenkwinkel | Grad | -- | signed char | -- | 12 | 1 | 0 |
| 0x08 | Versorgungsspannung | Volt | -- | unsigned char | -- | 1 | 12.75 | 0 |
| 0x09 | Motormoment | ? | -- | signed char | -- | 1 | 1 | 0 |
| 0x0A | diverse SG-Stati | digital | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x0B | Motortemperatur | Grad Celsius | -- | unsigned char | -- | 1 | 1 | -70 |
| 0x0C | Endstufentemperatur | Grad Celsius | -- | unsigned char | -- | 1 | 1 | -70 |
| 0x0D | Abschaltung der Aktivlenkung                                        bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x0E | Abschaltung der Gierratenregelung bis Klemmenwechsel                bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x0F | Ersatzwert Motordrehzahl fuer ECO-Funktionalitaet                   bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x10 | langsame Rueckstellung des Lenkradschiefstandes nach Abschaltung    bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x11 | temporaere Abschaltung der Gierratenregelung                        bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x12 | temporaere Abschaltung der Gierratenregelung                        bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x13 | Abschaltung der Aktivlenkung nach 100 sec                           bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x14 | geschwindigkeitsunabhaengige Lenkuebersetzung                       bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x15 | fahrtrichtungsunabhaengige Lenkuebersetzung                         bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x16 | Ersatzwert Gierrate fuer Servotronic-, DME-Funktionalitaet          bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x17 | Ersatzwert Querbesch. fuer Servotronic-, DME-Funktionalitaet        bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x18 | Ersatzwert Lenkwinkelgeschw. fuer Servotronic-, DME-Funktionalitaet bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x19 | Fehler des Fahrerlenkwinkels oder des Motorlagewinkels              bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x1A | konst. Ersatzwert fuer Summenlenkwinkel                             bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x1B | Fehler des Summenlenkwinkels oder des Motorlagewinkels              bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x1C | konst. Ersatzwert fuer Fahrerlenkwinkel                             bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x1D | Sensorfehler                           FDYS bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x1E | Gradient Fehlerverdacht              FDYS bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x1F | Gradient Fehler                      FDYS bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x20 | Signal Peak Fehler                     FDYS bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x21 | Offsetueberwachung Fehler            FDYS bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x22 | Empfindlichkeits Ueberwachung Fehler FDYS bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x23 | Roh-Redundanz Fehlerverdacht         FDYS bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x24 | Roh-Redundanz Fehler                 FDYS bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x25 | unbenutzt                              FDYS bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x26 | Referenz Redundanz Fehlerverdacht    FDYS bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x27 | Referenz Redundanz Fehler            FDYS bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x28 | unbenutzt                              FDYS bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x29 | Fehler im Sensorcluster 2            FDYS bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x2A | Fehler im Sensorcluster 1            FDYS bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x2B | unbenutzt                              FDYS bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x2C | unbenutzt                              FDYS bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x3D | Lenkwinkelgradient Fehlerverdacht    LWS bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x3E | Lenkwinkelgradient Fehler            LWS bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x3F | Lenkwinkel Peak Fehler               LWS bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x40 | unbenutzt                              LWS bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x41 | Lenkwinkeloffset Fehlerverdacht      LWS bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x42 | Lenkwinkeloffset Fehler              LWS bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x43 | Winkelsummengleichung Fehlerverdacht LWS bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x44 | Winkelsummengleichung Fehler         LWS bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x45 | unbenutzt                              LWS bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x46 | unbenutzt                              LWS bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x47 | unbenutzt                              LWS bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x48 | unbenutzt                              LWS bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x49 | unbenutzt                              LWS bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x4A | unbenutzt                              LWS bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x4B | unbenutzt                              LWS bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x4C | unbenutzt                              LWS bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x4D | Signal Fehler Lenkradwinkel oben       LWS bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x4E | Signal Fehler redundanter Lenkr.oben   LWS bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x4F | Timeout Fehler Lenkradwinkel oben      LWS bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x50 | Timeout Fehler redundanter Lenkr.oben      LWS bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x51 | Timeout                                      LWS bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x52 | Redundant Checksum Error                   LWS bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x53 | Fehler Gradient Lenkradwinkel            LWS bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x54 | Redundanz Differenz Fehler               LWS bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x55 | Sum Differenz Fehler                     LWS bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x56 | Timeout Difference Fehler                LWS bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x57 | keine Lenkwinkeldaten                      LWS bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x58 | keine Lenkwinkeldaten oben               LWS bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x59 | keine redundanten Lenkwinkeldaten        LWS bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x5A | keine Lenkwinkeldaten aus FIFO             LWS bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x5B | Timeout im FIFO                            LWS bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x5C | unbenutzt                                    LWS bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0x5E | Fehler Integral 1                    MDYN Bit  0 | 0/1 | -- | 0x0001 | -- | - | - | - |
| 0x5F | Fehler Integral 2                    MDYN Bit  1 | 0/1 | -- | 0x0002 | -- | - | - | - |
| 0x60 | unbenutzt                              MDYN Bit  2 | 0/1 | -- | 0x0004 | -- | - | - | - |
| 0x61 | unbenutzt                              MDYN Bit  3 | 0/1 | -- | 0x0008 | -- | - | - | - |
| 0x62 | unbenutzt                              MDYN Bit  4 | 0/1 | -- | 0x0010 | -- | - | - | - |
| 0x63 | unbenutzt                              MDYN Bit  5 | 0/1 | -- | 0x0020 | -- | - | - | - |
| 0x64 | unbenutzt                              MDYN Bit  6 | 0/1 | -- | 0x0040 | -- | - | - | - |
| 0x65 | unbenutzt                              MDYN Bit  7 | 0/1 | -- | 0x0080 | -- | - | - | - |
| 0x66 | unbenutzt                              MDYN Bit  8 | 0/1 | -- | 0x0100 | -- | - | - | - |
| 0x67 | unbenutzt                              MDYN Bit  9 | 0/1 | -- | 0x0200 | -- | - | - | - |
| 0x68 | unbenutzt                              MDYN Bit 10 | 0/1 | -- | 0x0400 | -- | - | - | - |
| 0x69 | unbenutzt                              MDYN Bit 11 | 0/1 | -- | 0x0800 | -- | - | - | - |
| 0x6A | unbenutzt                              MDYN Bit 12 | 0/1 | -- | 0x1000 | -- | - | - | - |
| 0x6B | unbenutzt                              MDYN Bit 13 | 0/1 | -- | 0x2000 | -- | - | - | - |
| 0x6C | unbenutzt                              MDYN Bit 14 | 0/1 | -- | 0x4000 | -- | - | - | - |
| 0x6D | unbenutzt                              MDYN Bit 15 | 0/1 | -- | 0x8000 | -- | - | - | - |
| 0xFF | ohne Bedeutung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte UW | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x1001 | Fehler a |
| 0x1002 | Fehler b |
| 0x1003 | Fehler c |
| 0x1004 | Fehler d |
| 0x1005 | Fehler e |
| 0x1006 | Fehler f |
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
| default | 0x01 | 0x02 | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | unsigned char | -- |  1 | 1 | 0 |
| 0x02 | Aussentemperatur | Grad C | -- | signed char | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

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
| 0x01 | i.o. |
| 0x02 | n.i.o. |
| 0xFF | unbekannter DPRAM Status |

### EINAUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus                |
| 0x01 | Ein                |
| 0xFF | unbekannter Status |

### AUSEIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Ein                |
| 0x01 | Aus                |
| 0xFF | unbekannter Status |

### GUEROTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | NICHT gueltig |
| 0x01 | gueltig |
| 0x02 | nicht definiert |
| 0xFF | unbekannter Status |

### SPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sperre geschlossen |
| 0x01 | Sperre oeffnen starten |
| 0x02 | Sperre oeffnet |
| 0x03 | Sperre geoeffnet |
| 0x04 | Wartezeit Motorauslauf, starten |
| 0x05 | Warten bis Motor steht |
| 0xFF | unbekannter Sperrenstatus |

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
| 0x00 | i.o. |
| 0x02 | init |
| 0x04 | timeout |
| 0x08 | plausibel |
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
| 0x00 | i.O. volle Dynamik |
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
| 0x00 | FLASH_BOOT      |
| 0x01 | FLASH_DRIVE     |
| 0x02 | FLASH_BBIND     |
| 0x03 | FLASH_NOT       |
| 0x04 | FLASH_UNDEF     |
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
| 0x000A | KFC_COM | Communication error |
| 0x000B | KFC_EEPROMNR | Eeprom No Risk |
| 0x000C | KFC_EEPROMHR | Eeprom High Risk |
| 0x000D | KFC_KLD | KLD Position/Speed |
| 0x000E | KFC_ROM | ROM-Test |
| 0x000F | KFC_RAM | RAM-Test |
| 0x0010 | KFC_CORE | Core-Test |
| 0x0011 | KFC_VOTER_TEST | div.Rechnen-Fehler |
| 0x0012 | KFC_OS | ERCOSEK Fehler |
| 0x0013 | KFC_MLW_INVALID | Motorlagewinkel ungueltig |
| 0x0014 | KFC_VX_REF | Geschwindigkeit unklar |
| 0x0015 | KFC_DPSI1 | Gierratensensor 2 |
| 0x0016 | KFC_DPSI1_SHADOW | Gierratensensor 1 oder 2 |
| 0x0017 | KFC_DPSI2 | Gierratensensor 1 |
| 0x0018 | KFC_DPSI2_SHADOW | Gierratensensor 1 und 2 |
| 0x0019 | KFC_AY1 | Querbeschleunigungssensor 2 |
| 0x001A | KFC_AY1_SHADOW | Querbeschleunigungssensor 1 oder 2 |
| 0x001B | KFC_AY2 | Querbeschleunigungssensor 1 |
| 0x001C | KFC_AY2_SHADOW | Querbeschleunigungssensor oder Gierraten  |
| 0x001D | KFC_DEH | Lenkwinkelueberwachung |
| 0x001E | KFC_DEH_SHADOW | Lenkwinkelueberwachung |
| 0x001F | KFC_BLS | Bremslichtschalterueberwachung |
| 0x0020 | KFC_LWS | Redundanzueberwachung Lenkradwinkel oben |
| 0x0021 | KFC_MPC_POSCTRL_ERR | Motordynamikueberwachung |
| 0x0022 | KFC_VINCOMP | Fahrgestellnummernvergleich |
| 0x0023 | KFC_CONFIG | Codierdatenfehler |
| 0x0024 | KFC_MPC_BOOT_FLASH | SG haengt im Bootblock oder Flashdatenfehler |
| 0x0025 | KFC_NEC_UPDATE | NEC Prozessor macht gerade einen Update oder haengt im Update |
| 0x0026 | KFC_MPC_SCI_ERR | Redundanzvergleich Fahrerlenkwinkel oben |
| 0x0027 | KFC_SGM_ECOVALVE | Fehler ECO Ventil im SGM |
| 0x0028 | KFC_SGM_SERVOVALVE | Fehler Servo Ventil im SGM |
| 0x0029 | KFC_INIT_MPOS | NEC konnte Motorinit nicht durchfuehren (kl30 Verlust bei Fahrt) oder ist das NEC Fehler? |
| 0x002A | KFC_VOLTAGE | Ueber- oder Unterspannungsfehler |
| 0x002B | KFC_LOW_VOLTAGE | Unterspannung |
| 0x002C | KFC_LWS_FS | Winkelsummenbeziehung Fehler |
| 0x002D | KFC_LWS_FS_OFF | keine Ueberwachung der Winkelsummenbeziehung |
| 0x002E | KFC_SENSOR_DRIVE | positive Identifikation des Fahrdynamiksensors |
| 0x002F | KFC_CANA | error of CANA controller F-CAN |
| 0x0030 | KFC_CANB | error of CANB controller PT-CAN |
| 0x0031 | KFC_CANA_Y1 | Error ID Gierrate Antwort 2 |
| 0x0032 | KFC_CANA_Y2 | Error ID Gierrate Antwort |
| 0x0033 | KFC_CANA_DSC_VWHL | Error ID Radgeschwindigkeit |
| 0x0034 | KFC_CANA_LWSRAD | Error ID Summenlenkwinkel |
| 0x0035 | KFC_CANA_DSC_REGULATION | Error ID Regeleingriffe DSC AFS |
| 0x0036 | KFC_CANB_SZL_LWDS | Error ID Lenkradwinkel oben |
| 0x0037 | KFC_CANB_DSC_VWHLTOL | Error ID Radtoleranzabgleich |
| 0x0038 | KFC_CANB_DSC_VEHCOND | Error ID Regeleingriffe DSC AFS |
| 0x0039 | KFC_CANB_DSC_STAT | Error ID Status DSC |
| 0x003A | KFC_CANB_DME_TORQ1 | Error ID DME Bremslichtschalter |
| 0x003B | KFC_CANB_DME_TORQ3 | Error ID DME Motormoment |
| 0x003C | KFC_CANB_DME_MOTORDAT | Error ID DME Motordaten |
| 0x003D | KFC_CANB_SGM_UNTERST | Error ID SGM Status Lenkunterstuetzung |
| 0x003E | KFC_CANB_CAS_KLEMMEN | Error ID CAS Klemmenstatus |
| 0x003F | KFC_CANB_CAS_VIN | Error ID CAS Fahrgestellnummer |
| 0x0040 | KFC_CANB_KI_KM | Error ID KI Kilometerstand |
| 0x0041 | KFC_OELTTEMP | Error ID Hydraulikoeltemperatur |
| 0x0042 | KFC_CANB_SZL_LWDS_INIT | Error ID SZL Init Phase |
| 0x0043 | KFC_TBD11 | Error code TBD11 |
| 0x0044 | KFC_TBD12 | Error code TBD12 |
| 0xFFFF | ----------------------- | unbekannte MPC Fehlernummer |

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
| 0x0007 | NKFC_COMP | compare |
| 0x0008 | NKFC_RAM | RAM |
| 0x0009 | NKFC_RELAIS | relais |
| 0x000A | NKFC_SMCURR | servomotor current |
| 0x000B | NKFC_SMPOS | servomotor positionsensor |
| 0x000C | NKFC_SMVOLT | servomotor phase voltage |
| 0x000D | NKFC_PROG | program error |
| 0x000E | NKFC_EEPROMHR | EEPROM: high security risk |
| 0x000F | NKFC_MOD_MC | module MC, program error |
| 0x0010 | NKFC_BRAKE | locking-pin |
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
| 0x001E | NKFC_MTEMP_SENS | motortemp. sensor failed |
| 0x001F | NKFC_SELFLOCK | Selbsthemmungsueberwachung |
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
| 0x0020 | KFA_RA_MC | range error in module MC volt |
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
| 0x0031 | KFA_DISCHARGE | tbd. |
| 0x0032 | KFA_LKMPC | MPC can't switch off; relais SC plus |
| 0x0033 | KFA_LKNEC | NEC can't switch off |
| 0x0034 | KFA_LKWD | Module MC, program error |
| 0x0035 | KFA_I3_NOT_VALID | CG 120 can't switch off |
| 0x0036 | KFA_OCTMP | open circuit temp. sensor |
| 0x0037 | KFA_SCTMP | short circuit temp. sensor |
| 0x0038 | KFA_DXSERVER | DX Dualport RAM |
| 0x0039 | KFA_STACK | mpu Stack |
| 0x003A | KFA_GEN_1 | frozen AD converter |
| 0x003B | KFA_GEN_2 | tbd. |
| 0x003C | KFA_GEN_3 | MPC can't switch off; relais SC plus |
| 0x003D | KFA_GEN_4 | NEC can't switch off |
| 0x003E | KFA_GEN_5D | Module MC, program error |
| 0x003F | KFA_GEN_6 | CG 120 can't switch off |
| 0x0040 | KFA_GEN_7 | tbd. |
| 0x0041 | KFA_GEN_8 | tbd. |
| 0x0042 | KFA_GEN_9 | tbd. |
| 0x0043 | KFA_GEN_10 | tbd. |
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
| 0xFFFF | ---------------- | unbekannter NEC Fehler-Typ bzw. Art |

### MPCREV

| WERT | TEXT |
| --- | --- |
| 0x3010 | RevE |
| 0x3010 | RevF |
| 0x3010 | RevG |
| 0x3020 | RevK |
| 0x3030 | RevK1 |
| 0x3031 | RevK2 |
| 0x3032 | RevK3 |
| 0x3021 | RevL |
| 0x3040 | RevM |
| 0xFFFF | unbekannte MPC Maske |

### AUTHENTISIERUNG

| AUTH_NR | AUTH_TEXT |
| --- | --- |
| 0x01 | Simple |
| 0x02 | Symetrisch |
| 0x03 | Asymetrisch |
| 0xFF | Keine |
