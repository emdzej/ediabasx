# EMF_E65.prg

## General

|  |  |
| --- | --- |
| File | EMF_E65.prg |
| Type | PRG |
| Jobs | 98 |
| Tables | 60 |
| Origin | BMW EE-23, Hoedl, TI-431 Helmich |
| Revision | 1.02 |
| Author | SiemensVDO SE CS 41 BRANDL, Funk |
| ECU Comment | Elektromechanische Feststellbremse |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EMF_E65 |  |  |
| ORIGIN | string | BMW EE-23, Hoedl, TI-431 Helmich |  |  |
| REVISION | string | 1.02 |  |  |
| AUTHOR | string | SiemensVDO SE CS 41 BRANDL, Funk |  |  |
| COMMENT | string | Elektromechanische Feststellbremse |  |  |
| PACKAGE | string | 1.17 |  |  |
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
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

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

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

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

### STEUERN_SWITCH_TO_APPL_MODE

Umschalten vom Bootmodus in Applikationmode KWP2000: $31 StartToutineByLocalIdentifier $FD ApllMode Modus  : Default

_No arguments._

### STEUERN_AUSGANG_MAINRELAIS

Ansteuern von AUSGANG_MAINRELAIS KWP2000: $30 InputOutputControlByLocalIdentifier KWP2000: $FD MOTOR $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MAINRELAIS_FUNKTION | int | AUS, EIN Werte: 0 = AUS, 1 = EIN |

### STEUERN_EINBREMSEN

Feststellbremse fuer Werkstatteinbremsen, kontinuierliches Einbremsen KWP2000: $30 InputOutputControlByLocalIdentifier KWP2000: $01 IOLI = BREMSE $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BREMSFUNKTION | int | AUS, Werkstatt, Kontinuierlich Werte: 0 = AUS, 1 = Werkstatt, 2 = Kontinuierlich |

### STEUERN_AUSGANG_MOTORENDSTUFE

Ansteuern von AUSGANG_MOTORENDSTUFE KWP2000: $30 InputOutputControlByLocalIdentifier KWP2000: $FA MOTOR $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MOTOR_FUNKTION | int | AUS, Anziehen, Loesen Werte: 0= AUS,1=anziehen,2=loesen |
| MOTOR_DUTY | int | TASTVERHAELTNISS in % |

### STEUERN_ECU_RESET

Ansteuern von ECU_RESET KWP2000: $30 InputOutputControlByLocalIdentifier $00 RCTECU Modus  : Default

_No arguments._

### STATUS_DIGITALEINGAENGE

Auslesen der DIGITALEINGAENGE KWP2000: $30 InputOutputControlByLocalIdentifier $18 liefert Digitaleingaenge $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DREHZAHL_EMF_MOTOR

Auslesen der DREHZAHL_EMF_MOTOR KWP2000: $30 InputOutputControlByLocalIdentifier $11 liefert Drehzahl und Richtung $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AD_WERTE_TEMPERATUR

Auslesen des AD-Wertes der Temperatur KWP2000: $30 InputOutputControlByLocalIdentifier $23 liefert AD_Wert Temperatur $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AD_WERTE_MOTOR

Auslesen der AD-Werte vom MOTOR KWP2000: $30 InputOutputControlByLocalIdentifier $20 liefert ungefilterte Motorspannungen $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AD_WERTE_TASTER

Auslesen der AD-Werte Tastereingaenge KWP2000: $30 InputOutputControlByLocalIdentifier $22 liefert Tasterspannungen $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AD_Werte_Kl30_KL15W

Auslesen der AD-Werte Kl30/KL15W KWP2000: $30 InputOutputControlByLocalIdentifier $21 liefert Klemmenspannung $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_GESCHWINDIGKEIT

Auslesen der Stati von Geschwindigkeit KWP2000: $30 InputOutputControlByLocalIdentifier $10 liefert Rad Geschwindigkeit $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_KODIERDATEN

Auslesen der Kodierdaten vom EMF KWP2000: $22 ReadDataByComonIdentifier $3000 CodingDataSet EMF1 Modus  : Default

_No arguments._

### STATUS_PHY_ECU_HW_NR

Auslesen physikalischen ECU HW Nummer KWP2000: $1A  ReadECUIdentification $87  PECUHN Modus  : Default

_No arguments._

### STATUS_BMW_TEILE_NR

Auslesen der BMW_Teilenummer KWP2000: $1A  ReadECUIdentification $91  VMECUHN Modus  : Default

_No arguments._

### STATUS_BMW_CODIER_INDEX

Auslesen des BMW Codierindex aus ZIF KWP2000: $1A  ReadECUIdentification $9B  VMCI Modus  : Default

_No arguments._

### STATUS_BMW_DIAG_INDEX

Auslesen des BMW Diagnoseindex aus ZIF KWP2000: $1A  ReadECUIdentification $9C  VDCI Modus  : Default

_No arguments._

### STATUS_PROGRAMM_DATE

Ausgabe des Programming Date aus UIF KWP2000: $1A  ReadECUIdentification $99  PD Modus  : Default

_No arguments._

### STATUS_AIF_LESEN

Auslesen des Anwender Informations Feldes $1A ReadECUIdentification KWP 2000: $86 CUIFDT Modus   : Default

_No arguments._

### STATUS_ER_FESTELLKRAFT_LESEN

Auslesen der erreichten Festellkraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0001 F_ERREICHT Modus  : Default

_No arguments._

### STATUS_AKT_ISTPOSITION_LESEN

Aktuelle Istposition Stelleinheit [1/4 U] KWP2000: $22 ReadDataByCommonIdentifier $000_2 STAT_AKT_ISTPOS Modus  : Default

_No arguments._

### STATUS_LETZTE_LOESEPOS_LESEN

Letzte Loeseposition [1/4 U] KWP2000: $22 ReadDataByCommonIdentifier $0003 STAT_LET_LOESPOS Modus  : Default

_No arguments._

### STATUS_LETZTE_ANZUGSPOS_LESEN

Letzte Anzugsposition [1/4 U] KWP2000: $22 ReadDataByCommonIdentifier $0004 STAT_LET_ANZUGSPOS Modus  : Default

_No arguments._

### STATUS_LETZTEN_KRAFTEIN_LESEN

Letzter Krafteinsatzpunkt [1/4 U] KWP2000: $22 ReadDataByCommonIdentifier $0005 STAT_LET_KRAFTEIN Modus  : Default

_No arguments._

### STATUS_BETAETIGUNGSZAEHLER_LESEN

Betaetigungszaehler (Anzahl Stellvorgaenge) KWP2000: $22 ReadDataByCommonIdentifier $0006 STAT_BET_ZAEHLER Modus  : Default

_No arguments._

### STATUS_EINBREMS_ZAEHLER_LESEN

Einbremszaehler (Anzahl Einbremsvorgaenge) KWP2000: $22 ReadDataByCommonIdentifier $0007 STAT_ EINBREMS_ZAEH Modus  : Default

_No arguments._

### STATUS_EINBREMS_STRECKE_LESEN

Einbremsstrecke [m] KWP2000: $22 ReadDataByCommonIdentifier $0008 STAT_ EINBREMS_STRE Modus  : Default

_No arguments._

### STATUS_SPEZIALMODI

SPEzialmodi_lesen KWP2000: $22 ReadDataByCommonIdentifier $0012 STAT_ EINBREMS_STRE Modus  : Default

_No arguments._

### STEUERN_KRAFTEINSATZ_SETZEN

Stelleinheit Krafteinsatzpunkt setzen KWP2000: $2E WriteDataByCommonIdentifier $0010 RCI = SSS.KEP_SET Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KRAFT_EINS | int | Bereich: 0-65535 |

### STEUERN_KRAFTEINSATZ_UEBERNEHMEN

Stelleinheit aktuellen Krafteinsatzpunkt uebernehmen KWP2000: $2E WriteDataByCommonIdentifier $0011 RCI = SSS.KEP_TAKE Modus  : Default

_No arguments._

### STEUERN_SPEZIALMODI

Spezialmodi_einstellen KWP2000: $2E WriteDataByCommonIdentifier $0012 RCI = SPEZIAL_MODIS Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPEZIALMODUS | int | Bereich: 0-1, 1 = Montagemode_ein |

### STEUERN_FESTSTELLEN

Feststellkraft nur fuer naechsten Anziehvorgang KWP2000: $3B WriteDataByCommonIdentifier $01 RLI = F_Feststellen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KRAFT | int | Bereich: 0-65535 |

### STEUERN_PERSONALISIERUNG

Feststellkraft nur fuer naechsten Anziehvorgang KWP2000: $3B WriteDataByCommonIdentifier $02 RLI = PERSONALISIERUNG Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KOMFORTMODUS | int | Bereich: 0-255 |

### STEUERN_KOMFORTFUNKTION

Feststellkraft nur fuer naechsten Anziehvorgang KWP2000: $3B WriteDataByCommonIdentifier $03 RLI = KOMFORTFUNKTION Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHALTER | int | als Eingabe nur 1 fuer EIN und 0 fuer AUS moeglich |

### STATUS_SLOG1_LESEN

Slog_Parameter_Block1 KWP2000: $22 ReadDataByCommonIdentifier $3001 STAT_SLOG1 Modus  : Default

_No arguments._

### STATUS_SLOG2_LESEN

Slog_Parameter_Block1 KWP2000: $22 ReadDataByCommonIdentifier $3002 STAT_SLOG2 Modus  : Default

_No arguments._

### STATUS_SLOG3_LESEN

Slog_Parameter_Block1 KWP2000: $22 ReadDataByCommonIdentifier $3003 STAT_SLOG3 Modus  : Default

_No arguments._

### STATUS_SEDEC

Sedec-Status auslesen KWP2000: $22 ReadDataByCommonIdentifier $F1 RCI=SSS.SEDEC_STATUS Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEKTOR | int | Bereich: 0-9, keine Eingabe:alle Sektoren werden gelesen |

### STEUERN_SLOG1_SCHREIBEN

SLOG-Parameter-Block1 KWP2000: $2E WriteDataByCommonIdentifier $3001 RCI = SLOG_PARA1 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ST_V1_APP | real | Bereich: 0-5 km/h |
| ST_V2_APP | real | Bereich: 6-14 km/h |
| V_VEH_OFFSET | real | Bereich: 0-5 km/h |
| ST_BSD_APP | real | Bereich: 2000-4500 N |
| LOESEWEG | int | Bereich: 200-400 U |
| V_BKLL_APP | real | Bereich: 0-10 km/h |
| T_ANF_RUECK_APP | real | Bereich: 0-5 s |
| ANG_ACPD_APP | real | Bereich: 0-20 % |
| BRP_FAKTOR | real | Bereich: 1.0-2.0 |
| BRP_MIN_APP | int | Bereich: 0-40 bar |
| version | int | 255 |

### STEUERN_SLOG2_SCHREIBEN

SLOG-Parameter-Block2 KWP2000: $2E WriteDataByCommonIdentifier $3002 RCI = SLOG_PARA2 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DCRN_BRP_TAR_EMF_P | int | Bereich: 0-40 bar |
| DCRN_BRP_TAR_EMF_APP | int | Bereich: 10-50 bar |
| ST_CFFU_EMF_Byte1 | int | hex eingeben |
| ST_CFFU_EMF_Byte2 | int | hex eingeben |
| T_SEC_COU_REL_APP | int | Bereich: 27-2500 h |
| MILE_KM_APP | int | Bereich: 100-10000 km |
| ST_IBR_BRP_APP | real | Bereich: 100-1000 N |
| V_IBR_CONT_APP | real | Bereich: 5-25 km/h |
| T_IBR_APP | int | Bereich: 0-60 s |
| version | int | 255 |

### STEUERN_SLOG3_SCHREIBEN

SLOG-Parameter-Block2 KWP2000: $2E WriteDataByCommonIdentifier $3003 RCI = SLOG_PARA3 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DCRN_DYN_BRP_APP_ENDTI | real | Bereich: 0 - 20 sec |
| DCRN_DYN_BRP_APP_FITI | real | Bereich: 0 - 10 sec |
| DCRN_DYN_BRP_APP_FI | real | Bereich: 1.5 - 6 m*m/sec |
| DCRN_DYN_BRP_APP_END | real | Bereich: 1.5 - 6 m*m/sec |
| V_DYN_APP | real | Bereich: 0 -5 km/h |
| KEP_AENDERUNG | real | Bereich: 0 - 1400 1/4 U |
| V_IBR_DIAG_APP | real | Bereich: 30 - 60 km/h |
| AZP_AENDERUNG | real | Bereich: 0 - 1400 1/4 U |
| version | int | 255 |

### FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### STATUS_HISTORY_FS

History-Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $22 RDBCI.DTCHM Modus  : Default

_No arguments._

### STEUERN_HISTORY_FS_LOESCHEN

History-Fehlerspeicher loeschen KWP2000: $31 STRBLI.CHM Modus  : Default

_No arguments._

### STEUERN_HISTORY_FS_LOESCHEN_DETAIL

History-Fehlerspeicher loeschen KWP2000: $31 STRBLI.CHM Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| POSITION | int | gewaehlte Position |

### STATUS_HISTORY_FS_DETAIL

History-Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $22 RDBCI.DTCHM Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| POSITION | int | gewaehlte Position |

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
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x600D | ECU EEPROM |
| 0x600E | ECU EEPROM DATEN |
| 0x600F | ECU HW VERRIEGELUNG |
| 0x6010 | ECU ANZIEHEN DEFEKT |
| 0x6011 | ECU HALL |
| 0x6012 | ECU LOESEN DEFEKT |
| 0x6013 | ECU MOT KREIS |
| 0x6014 | ECU MOT ABBRUCH |
| 0x6015 | ECU ANSTEUER VERGLEICH |
| 0x601F | ECU TEMPERATUR |
| 0x6020 | PER EMF TASTE |
| 0x6022 | PER FREIGABE TG |
| 0x6023 | PER RDZ |
| 0x6025 | PER KL30 |
| 0x6026 | PER WAKE |
| 0x6030 | MECH STELLWEG |
| 0x6031 | MECH BLOCKIERT |
| 0x6032 | MECH ROLLERKENNUNG |
| 0x6033 | MECH KEP AZP |
| 0x6034 | MECH UEBERTEMPERATUR |
| 0x6040 | DSC INTF EMF S1 |
| 0x6041 | DSC EMF QUIT |
| 0x6042 | DSC HYDRAULIK |
| 0x6043 | DSC FREIGABE ABBRUCH |
| 0x6044 | DSC INTF EMF S2 |
| 0x6045 | DSC KEINE GESCHW. |
| 0x6046 | DSC FREIGABE |
| 0xD387 | CAN GENERAL |
| 0xD3bd | CAN RX SIGNAL |
| 0xd3be | CAN RX |
| 0xd3c2 | CAN TX |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxx0000 | 01 | kein passendes Fehlersymptom |
| xxxx0001 | 02 | Signal oder Wert oberhalb Schwelle |
| xxxx0010 | 03 | Signal oder Wert unterhalb Schwelle |
| xxxx0100 | 04 | kein Signal oder Wert  |
| xxxx1000 | 05 | unplausibles Signal oder Wert  |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x600D | INPUT_STATIS | KL30_SPANNUNG | EEPROM_FEHLER1 | EEPROM_FEHLER2 |
| 0x600E | INPUT_STATIS | KL30_SPANNUNG | EEPROM_FEHLER1 | EEPROM_FEHLER2 |
| 0x600F | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_ANALOG | FAILSAVE_FEHLER_BITS |
| 0x6010 | INPUT_STATIS | MOTOR_STATIS | INPUT_MOTOR_SPANNUNGEN | OUTPUT_FEHLER_BITS |
| 0x6012 | INPUT_STATIS | MOTOR_STATIS | INPUT_MOTOR_SPANNUNGEN | OUTPUT_FEHLER_BITS |
| 0x6013 | INPUT_STATIS | MOTOR_STATIS | INPUT_MOTOR_SPANNUNGEN | OUTPUT_FEHLER_BITS |
| 0x6011 | INPUT_STATIS | 0xFF | INPUT_N_HALL | INPUT_MOTOR_POS |
| 0x601F | INPUT_STATIS | FAILSAVE_STATIS | INPUT_KLEMMEN_SPANNUNGEN | MOTOR_TEMPERATUREN |
| 0x6020 | INPUT_STATIS | FAILSAVE_STATIS | INPUT_TASTER_SPANNUNGEN | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6022 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_ANALOG | SLOG_STATIS |
| 0x6043 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_ANALOG | SLOG_STATIS |
| 0x6046 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_ANALOG | SLOG_STATIS |
| 0x6023 | INPUT_STATIS | FAILSAVE_STATIS | INPUT_KLEMMEN_SPANNUNGEN | RDZ_w |
| 0x6025 | INPUT_STATIS | FAILSAVE_STATIS | INPUT_KLEMMEN_SPANNUNGEN | 0xFE |
| 0x6026 | INPUT_STATIS | FAILSAVE_STATIS | INPUT_KLEMMEN_SPANNUNGEN | 0xFE |
| 0x6030 | INPUT_STATIS | MOTOR_STATIS | INPUT_KLEMMEN_SPANNUNGEN | MOTOR_POS_ST |
| 0x6031 | INPUT_STATIS | MOTOR_STATIS | INPUT_KLEMMEN_SPANNUNGEN | MOTOR_POS_ST |
| 0x6032 | INPUT_STATIS | MOTOR_STATIS | INPUT_KLEMMEN_SPANNUNGEN | MOTOR_POS_ST |
| 0x6033 | INPUT_STATIS | MOTOR_STATIS | INPUT_KLEMMEN_SPANNUNGEN | MOTOR_POS_ST |
| 0xD387 | INPUT_STATIS | FAILSAVE_STATIS | COM_CAN_FEHLER_BITS_w | INPUT_KLEMMEN_SPANNUNGEN |
| 0xD3C2 | INPUT_STATIS | FAILSAVE_STATIS | COM_CAN_FEHLER_BITS_w | INPUT_KLEMMEN_SPANNUNGEN |
| 0xD3BD | INPUT_STATIS | COM_CAN_FEHLER_BITS | COM_CAN_SIGNAL_FEHLER | - |
| 0xD3BE | INPUT_STATIS | COM_CAN_FEHLER_BITS | COM_CAN_TIMEOUT_FEHLER | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6040 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_CAN_STATUS_DSC | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6044 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_CAN_STATUS_DSC | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6041 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_CAN_STATUS_DSC | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6042 | INPUT_STATIS | FAILSAVE_STATIS | FAILSAVE_CAN_STATUS_DSC | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6045 | INPUT_STATIS | RDZ | CAN_RPM_GRB_NEGL | CAN_V_VEH |
| 0x6014 | INPUT_STATIS | FAILSAVE_STATIS | MOTOR_STATIS_w | INPUT_KLEMMEN_SPANNUNGEN |
| 0x6015 | INPUT_STATIS | FAILSAVE_STATIS | MOTOR_STATIS_w | SLOG_STATIS |
| 0x6034 | INPUT_STATIS | CAN_T_SEC_COU_REL | MOTOR_STATIS_w | MOTOR_TEMPERATUREN |
| default | 0xFF | 0xFF | 0xFF | 0xFF |

### INPUT_STATIS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 |

### KL30_SPANNUNG

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x08 |

### EEPROM_FEHLER1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 |

### EEPROM_FEHLER2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | 0x16 | 0x17 | 0x18 | 0x19 | 0x1A | 0x1B | 0x1C | 0x1D | 0x1E | 0x1F | 0x20 | 0x21 | 0x22 | 0x23 |

### FAILSAVE_STATIS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x24 | 0x25 | 0x26 | 0x27 | 0x28 | 0x29 | 0x2A |

### FAILSAVE_ANALOG

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x2B | 0x2C |

### FAILSAVE_FEHLER_BITS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x2D | 0x2E | 0x2F | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 | 0x37 | 0x38 | 0x39 |

### MOTOR_STATIS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x3A | 0x3B | 0x3C | 0x3D | 0x3E | 0x3F |

### INPUT_MOTOR_SPANNUNGEN

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x40 | 0x41 |

### OUTPUT_FEHLER_BITS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x42 | 0x43 | 0x44 | 0x45 | 0x46 | 0x47 |

### INPUT_N_HALL

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x48 | 0x49 |

### INPUT_MOTOR_POS

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x4A | 0x4B |

### INPUT_KLEMMEN_SPANNUNGEN

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x4C | 0x4D |

### MOTOR_TEMPERATUREN

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x4E | 0x4F |

### SLOG_STATIS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x50 | 0x51 | 0x52 | 0x53 | 0x54 | 0x55 |

### RDZ_W

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x56 |

### MOTOR_POS_ST

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x57 |

### COM_CAN_FEHLER_BITS_W

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x58 | 0x59 | 0x5A | 0x5B | 0x5C | 0x5D | 0x5E | 0xB2 |

### COM_CAN_FEHLER_BITS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x5F | 0x60 | 0x61 | 0x62 | 0x63 | 0x64 | 0x65 | 0xB3 |

### COM_CAN_SIGNAL_FEHLER

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 26 | 0x66 | 0x67 | 0x68 | 0x69 | 0x6A | 0x6B | 0x6C | 0x6D | 0x6E | 0x6F | 0x70 | 0x71 | 0x72 | 0x73 | 0x74 | 0x75 | 0x76 | 0x77 | 0x78 | 0x79 | 0x7A | 0x7B | 0x9C | 0x9D | 0xA2 | 0xA3 |

### COM_CAN_TIMEOUT_FEHLER

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x7C | 0x7D | 0x7E | 0x7F | 0x80 | 0x81 | 0x82 | 0x83 | 0x84 | 0x85 | 0x86 | 0x87 | 0x9E | 0x9F | 0xA0 | 0xA1 |

### FAILSAVE_CAN_STATUS_DSC

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x88 | 0x89 | 0x8A | 0x8B | 0x8C | 0x8D | 0x8E | 0x8F |

### RDZ

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x90 |

### CAN_RPM_GRB_NEGL

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x91 |

### CAN_V_VEH

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x92 |

### MOTOR_STATIS_W

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x93 | 0x94 | 0x95 | 0x96 | 0x97 | 0x98 |

### CAN_T_SEC_COU_REL

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x99 |

### INPUT_TASTER_SPANNUNGEN

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x9A | 0x9B |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | EMF Taste gedrueckt | 0/1 | - | 0x01 | - | - | - | - |
| 0x02 | HW Freigabe loesen | 0/1 | - | 0x02 | - | - | - | - |
| 0x03 | HW Freigabe anziehen | 0/1 | - | 0x04 | - | - | - | - |
| 0x04 | DSC P anziehen | 0/1 | - | 0x08 | - | - | - | - |
| 0x05 | KLEMME 15 EIN | 0/1 | - | 0x10 | - | - | - | - |
| 0x06 | EMF Unterspannung | 0/1 | - | 0x20 | - | - | - | - |
| 0x07 | Motordrehrichtung | 0-n | - | 0xC0 | ub_A | - | - | - |
| 0x08 | KLEMME 30 Spannung | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x09 | EE BLOCK IDENT EEPROM | 0/1 | low | 0x0001 | - | - | - | - |
| 0x0A | EE ERROR BLOCK KODIER 1 | 0/1 | low | 0x0002 | - | - | - | - |
| 0x0B | EE BLOCK MOTOR PARAMETER | 0/1 | low | 0x0008 | - | - | - | - |
| 0x0C | EE BLOCK MOTOR STATUS | 0/1 | low | 0x0010 | - | - | - | - |
| 0x0D | EE BLOCK SLOG STATUS | 0/1 | low | 0x0020 | - | - | - | - |
| 0x0E | EE BLOCK ABGLEICH PARAMETER | 0/1 | low | 0x0080 | - | - | - | - |
| 0x0F | EE BLOCK MOTOR STATUS 2 | 0/1 | low | 0x0100 | - | - | - | - |
| 0x10 | EE BLOCK FSP 1 | 0/1 | low | 0x0400 | - | - | - | - |
| 0x11 | EE BLOCK FSP 2 | 0/1 | low | 0x0800 | - | - | - | - |
| 0x12 | EE BLOCK FSP 3 | 0/1 | low | 0x1000 | - | - | - | - |
| 0x13 | EE BLOCK FSP 4 | 0/1 | low | 0x2000 | - | - | - | - |
| 0x14 | EE BLOCK FSP 5 | 0/1 | low | 0x4000 | - | - | - | - |
| 0x15 | EE BLOCK FSP 6 | 0/1 | low | 0x8000 | - | - | - | - |
| 0x16 | EE BLOCK FSP 7 | 0/1 | low | 0x0001 | - | - | - | - |
| 0x17 | EE BLOCK FSP 8 | 0/1 | low | 0x0002 | - | - | - | - |
| 0x18 | EE BLOCK FSP 9 | 0/1 | low | 0x0004 | - | - | - | - |
| 0x19 | EE BLOCK FSP 10 | 0/1 | low | 0x0008 | - | - | - | - |
| 0x1A | EE BLOCK FSP 11 | 0/1 | low | 0x0010 | - | - | - | - |
| 0x1B | EE BLOCK FSP 12 | 0/1 | low | 0x0020 | - | - | - | - |
| 0x1C | EE BLOCK FSP 13 | 0/1 | low | 0x0040 | - | - | - | - |
| 0x1D | EE BLOCK FSP 14 | 0/1 | low | 0x0080 | - | - | - | - |
| 0x1E | EE BLOCK FSP 15 | 0/1 | low | 0x0100 | - | - | - | - |
| 0x1F | EE BLOCK SLOG PARAMETER 1 | 0/1 | low | 0x0200 | - | - | - | - |
| 0x20 | EE BLOCK SLOG PARAMETER 2 | 0/1 | low | 0x0400 | - | - | - | - |
| 0x21 | EE BLOCK SLOG PARAMETER 3 | 0/1 | low | 0x0800 | - | - | - | - |
| 0x22 | EE BLOCK ERROR PARAMETER | 0/1 | low | 0x4000 | - | - | - | - |
| 0x23 | EE BLOCK SICHER | 0/1 | low | 0x8000 | - | - | - | - |
| 0x24 | EMF Taste S1 ein | 0/1 | - | 0x01 | - | - | - | - |
| 0x25 | EMF TASTE WURDE GEDRUECKT | 0/1 | - | 0x02 | - | - | - | - |
| 0x26 | V kommt von oben | 0/1 | - | 0x04 | - | - | - | - |
| 0x27 | Anfahren | 0/1 | - | 0x08 | - | - | - | - |
| 0x28 | KL30 Einbruch erkannt | 0/1 | - | 0x10 | - | - | - | - |
| 0x29 | Anfahren erkannt | 0/1 | - | 0x20 | - | - | - | - |
| 0x2A | CAN_ST_WR_RLS | 0-n | - | 0xC0 | ub_B | - | - | - |
| 0x2B | RDZ | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x2C | Timer Loese Fenster | s | - | unsigned char | - | 1 | 100 | 0 |
| 0x2D | Freigabe Anziehen, obwohl v > 13 km/h | 0/1 | low | 0x0001 | - | - | - | - |
| 0x2E | Keine Freigabe Loesen obwohl DSC_P = loesen | 0/1 | low | 0x0002 | - | - | - | - |
| 0x2F | Freigabe Anziehen, obwohl v < 13 km/h, gueltig und keine Taste | 0/1 | low | 0x0004 | - | - | - | - |
| 0x30 | Keine Freigabe Anziehen, obwohl  v < 7 km/h, gueltig und Taste | 0/1 | low | 0x0008 | - | - | - | - |
| 0x31 | Keine Freigabe Anziehen obwohl Taste | 0/1 | low | 0x0010 | - | - | - | - |
| 0x32 | Freigabe Loesen obwohl keine Taste | 0/1 | low | 0x0020 | - | - | - | - |
| 0x33 | Keine Freigabe Loesen trotz Taste | 0/1 | low | 0x0040 | - | - | - | - |
| 0x34 | Keine Freigabe Anziehen obwohl v < 7 km/h | 0/1 | low | 0x0080 | - | - | - | - |
| 0x35 | Freigabe Anziehen obwohl keine Taste und Geschw. ungueltig | 0/1 | low | 0x0100 | - | - | - | - |
| 0x36 | Keine Freigabe Loesen obwohl Taste, Geschw. ungueltig | 0/1 | low | 0x0200 | - | - | - | - |
| 0x37 | Freigabe Loesen, obwohl keine Taste und Geschw. ungueltig | 0/1 | low | 0x0400 | - | - | - | - |
| 0x38 | Keine Freigabe Loesen, keine Taste und Geschw. ungueltig | 0/1 | low | 0x0800 | - | - | - | - |
| 0x39 | Freigabe Anziehen obwohl keine Taste und keine defekt Geschw. | 0/1 | low | 0x1000 | - | - | - | - |
| 0x3A | MotorState | 0-n | - | 0x07 | ub_D1 | - | - | - |
| 0x3B | Motor blockiert | 0/1 | - | 0x08 | - | - | - | - |
| 0x3C | Motor Spannungs Einbruch | 0/1 | - | 0x10 | - | - | - | - |
| 0x3D | KEP bestimmen | 0/1 | - | 0x20 | - | - | - | - |
| 0x3E | Hand Verstellung | 0/1 | - | 0x40 | - | - | - | - |
| 0x3F | Kalibriert | 0/1 | - | 0x80 | - | - | - | - |
| 0x40 | Motor Spannung 1 | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x41 | Motor Spannung 2 | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x42 | U Motor kreis defekt, mot kreis defekt | 0/1 | low | 0x0001 | - | - | - | - |
| 0x43 | U Motor bhs oder ahs 0V defekt | 0/1 | low | 0x0004 | - | - | - | - |
| 0x44 | U Motor ahs 12V defekt, loesen defekt | 0/1 | low | 0x0010 | - | - | - | - |
| 0x45 | U Motor ahs 5V defekt, loesen defekt | 0/1 | low | 0x0020 | - | - | - | - |
| 0x46 | U Motor bhs 12V defekt, anziehen defekt | 0/1 | low | 0x0400 | - | - | - | - |
| 0x47 | U Motor bhs 5V defekt, anziehen defekt | 0/1 | low | 0x0800 | - | - | - | - |
| 0x48 | N HALL Sensor 1 Flanken | Impulse | - | unsigned char | - | 1 | 1 | 0 |
| 0x49 | N HALL Sensor 2 Flanken |  Impulse | - | unsigned char | - | 1 | 1 | 0 |
| 0x4A | N HALL Sensor | 1/min | - | unsigned char | - | 64 | 1 | 0 |
| 0x4B | Position | 2 Umdrehungen | - | unsigned char | - | 4 | 1 | 0 |
| 0x4C | KL30 Spannung | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x4D | KL15 Spannung | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x4E | Motor Temperatur | Grad Celsius | - | unsigned char | - | 1 | 1 | 0 |
| 0x4F | Temperatursensor | Grad Celsius | - | unsigned char | - | 1 | 1 | 0 |
| 0x50 | ST EMF LOCA | 0-n | low | 0x0003 | ub_E1 | - | - | - |
| 0x51 | MOTOR ANGEZOGEN | 0/1 | low | 0x0004 | - | - | - | - |
| 0x52 | MOTOR GELOEST | 0/1 | low | 0x0008 | - | - | - | - |
| 0x53 | ST HYD RETA | 0-n | low | 0x0030 | ub_E2 | - | - | - |
| 0x54 | Funktionsmodell, Stillegungsstufen | 0-n | low | 0x01C0 | ub_E3 | - | - | - |
| 0x55 | SLOG_V | 0-n | low | 0x0600 | ub_E4 | - | - | - |
| 0x56 | RDZ | km/h | low | unsigned int | - | 1 | 1 | 0 |
| 0x57 | MOTOR POS STELLEINH | 1/4 Umdrehung | low | unsigned int | - | 1 | 1 | 0 |
| 0x58 | ERROR_NM_BUS_OFF | 0/1 | low | 0x0001 | - | - | - | - |
| 0x59 | ERROR_RX_OVERFLOW | 0/1 | low | 0x0002 | - | - | - | - |
| 0x5A | KL15_W | 0/1 | low | 0x0004 | - | - | - | - |
| 0x5B | Motor Startvorgang | 0/1 | low | 0x0008 | - | - | - | - |
| 0x5C | EMF NM in Normalbetrieb | 0/1 | low | 0x0010 | - | - | - | - |
| 0x5D | ERROR_TRANCEIVER_OFF | 0/1 | low | 0x0040 | - | - | - | - |
| 0x5E | ERROR_DIAG_BUFFER | 0/1 | low | 0x0080 | - | - | - | - |
| 0xB2 | EMF NM zuletzt WaitBussleep | 0/1 | low | 0x0020 | - | - | - | - |
| 0x5F | ERROR_NM_BUS_OFF | 0/1 | - | 0x01 | - | - | - | - |
| 0x60 | ERROR_RX_OVERFLOW | 0/1 | - | 0x02 | - | - | - | - |
| 0x61 | KL15_W | 0/1 | - | 0x04 | - | - | - | - |
| 0x62 | Motor Startvorgang | 0/1 | - | 0x08 | - | - | - | - |
| 0x63 | EMF NM in Normalbetrieb | 0/1 | - | 0x10 | - | - | - | - |
| 0x64 | ERROR_TRANCEIVER_OFF | 0/1 | - | 0x40 | - | - | - | - |
| 0x65 | ERROR_DIAG_BUFFER | 0/1 | - | 0x80 | - | - | - | - |
| 0xB3 | EMF NM zuletzt WaitBussleep | 0/1 | - | 0x20 | - | - | - | - |
| 0x66 | ERROR_T_SEC_COU_REL | 0/1 | low | 0x00000001 | - | - | - | - |
| 0x67 | ERROR_MILE_KM | 0/1 | low | 0x00000002 | - | - | - | - |
| 0x68 | ERROR_ST_CT_BON | 0/1 | low | 0x00000004 | - | - | - | - |
| 0x69 | ERROR_CLAS_WGH_SEAT_DR | 0/1 | low | 0x00000008 | - | - | - | - |
| 0x6A | ERROR_V_VEH | 0/1 | low | 0x00000010 | - | - | - | - |
| 0x6B | ERROR_ST_VEH_DVCO | 0/1 | low | 0x00000020 | - | - | - | - |
| 0x6C | ERROR_ST_CLCTR | 0/1 | low | 0x00000040 | - | - | - | - |
| 0x6D | ERROR_ST_INTF_DSC_EMF | 0/1 | low | 0x00000080 | - | - | - | - |
| 0x6E | ERROR_ST_SHFT_RQ_BRG | 0/1 | low | 0x00000100 | - | - | - | - |
| 0x6F | ERROR_ST_DEAC_CFFU | 0/1 | low | 0x00000200 | - | - | - | - |
| 0x70 | ERROR_ST_DCRN_AVL | 0/1 | low | 0x00000400 | - | - | - | - |
| 0x71 | ERROR_ST_RCPT_DSC_EMF | 0/1 | low | 0x00000800 | - | - | - | - |
| 0x72 | ERROR_ST_CT_BRPD | 0/1 | low | 0x00001000 | - | - | - | - |
| 0x73 | ERROR_BRP | 0/1 | low | 0x00002000 | - | - | - | - |
| 0x74 | ERROR_ST_KL_15 | 0/1 | low | 0x00004000 | - | - | - | - |
| 0x75 | ERROR_ST_KEY_PLGD | 0/1 | low | 0x00008000 | - | - | - | - |
| 0x76 | ERROR_ST_GR_GRB | 0/1 | low | 0x00010000 | - | - | - | - |
| 0x77 | ERROR_CTR_EMF_LOCA | 0/1 | low | 0x00020000 | - | - | - | - |
| 0x78 | ERROR_RPM_GRB_NEGL | 0/1 | low | 0x00040000 | - | - | - | - |
| 0x79 | ERROR_NO_KEY_PRSL_IMME | 0/1 | low | 0x00080000 | - | - | - | - |
| 0x7A | ERROR_ST_ENG_RUN | 0/1 | low | 0x00100000 | - | - | - | - |
| 0x7B | ERROR_ANG_ACPD | 0/1 | low | 0x00200000 | - | - | - | - |
| 0x7C | TIMEOUT_GESCHWINDIGKEIT | 0/1 | low | 0x0004 | - | - | - | - |
| 0x7D | TIMEOUT_GETRIEBEDATEN | 0/1 | low | 0x0008 | - | - | - | - |
| 0x7E | TIMEOUT_KILOMETERSTAND | 0/1 | low | 0x0010 | - | - | - | - |
| 0x7F | TIMEOUT_KLEMMENSTATUS | 0/1 | low | 0x0020 | - | - | - | - |
| 0x80 | TIMEOUT_STAT_DSC | 0/1 | low | 0x0040 | - | - | - | - |
| 0x81 | TIMEOUT_STAT_ZV_KLAPPEN | 0/1 | low | 0x0080 | - | - | - | - |
| 0x82 | TIMEOUT_GESCHWINDIGKEIT_RAD | 0/1 | low | 0x0100 | - | - | - | - |
| 0x83 | TIMEOUT_BEDIENUNG_FAHRWERK | 0/1 | low | 0x0800 | - | - | - | - |
| 0x84 | TIMEOUT_ENGINE_1 | 0/1 | low | 0x1000 | - | - | - | - |
| 0x85 | TIMEOUT_STAT_SITZBELEGUNG_GURT | 0/1 | low | 0x2000 | - | - | - | - |
| 0x86 | TIMEOUT_TORQUE_3 | 0/1 | low | 0x4000 | - | - | - | - |
| 0x87 | TIMEOUT_A_TEMP_RELATIVZEIT | 0/1 | low | 0x8000 | - | - | - | - |
| 0x88 | DSC_ST_INTF_DSC_EMF | 0-n | low | 0x0003 | ub_C1 | - | - | - |
| 0x89 | DSC_ST_RCPT_DSC_EMF | 0-n | low | 0x000C | ub_C2 | - | - | - |
| 0x8A | DSC_ST_SHFT_RQ_BRG | 0-n | low | 0x0030 | ub_C3 | - | - | - |
| 0x8B | EMF_ST_DCRN_BRP_TAR_EMF | 0-n | low | 0x00C0 | ub_C4 | - | - | - |
| 0x8C | DSC_ST_ABS | 0-n | low | 0x0300 | ub_C5 | - | - | - |
| 0x8D | DSC_ST_DEAC_CFFU | 0-n | low | 0x0C00 | ub_C6 | - | - | - |
| 0x8E | DSC_ST_WR_RLS | 0-n | low | 0x3000 | ub_C7 | - | - | - |
| 0x8F | DSC_ST_DCRN_AVL | 0-n | low | 0xC000 | ub_C8 | - | - | - |
| 0x90 | RDZ | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x91 | CAN_RPM_GRB_NEGL | 1/min | low | unsigned int | - | 1 | 8 | 0 |
| 0x92 | CAN_V_VEH | km/h | low | unsigned int | - | 1 | 10 | 0 |
| 0x93 | MotorState | 0-n | low | 0x0007 | ub_D2 | - | - | - |
| 0x94 | Motor blockiert | 0/1 | low | 0x0008 | - | - | - | - |
| 0x95 | Motor Spannungs Einbruch | 0/1 | low | 0x0010 | - | - | - | - |
| 0x96 | KEP bestimmen | 0/1 | low | 0x0020 | - | - | - | - |
| 0x97 | Hand Verstellung | 0/1 | low | 0x0040 | - | - | - | - |
| 0x98 | Kalibriert | 0/1 | low | 0x0080 | - | - | - | - |
| 0x99 | CAN_T_SEC_COU_EREL_ungueltig | 0/1 | - | 0x01 | - | - | - | - |
| 0x9A | Taste S1 Spannung | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x9B | Taste S2 Spannung | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x9C | ERROR_ST_CT_BTL | 0/1 | low | 0x00400000 | - | - | - | - |
| 0x9D | ERROR_ST_KL_R | 0/1 | low | 0x00800000 | - | - | - | - |
| 0x9E | CHECKSUM_ALIVE_STAT_DSC | 0/1 | low | 0x0001 | - | - | - | - |
| 0x9F | CHECKSUM_ALIVE_GETRIEBEDATEN | 0/1 | low | 0x0002 | - | - | - | - |
| 0xA0 | CHECKSUM_ALIVE_GESCHWINDIGKEIT | 0/1 | low | 0x0200 | - | - | - | - |
| 0xA1 | CHECKSUM_ALIVE_TORQUE_3 | 0/1 | low | 0x0400 | - | - | - | - |
| 0xA2 | ER_SIGNAL_ERROR_V_WHL_RLH | 0/1 | low | 0x01000000 | - | - | - | - |
| 0xA3 | ER_SIGNAL_ERROR_V_WHL_RRH | 0/1 | low | 0x02000000 | - | - | - | - |
| 0xFE | ohne Bedeutung | - | low | unsigned int | - | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | - | - | unsigned char | - | 1 | 1 | 0 |

### UB_A

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ANZIEHEN |
| 0x40 | LOESEN |
| 0x80 | STEHT |
| 0xC0 | ungueltig |
| 0xFF | unbekannter Fehler |

### UB_B

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Anziehen erlaubt |
| 0x40 | Loesen erlaubt |
| 0x80 | falsch |
| 0xC0 | ungueltig |
| 0xFF | unbekannter Fehler |

### UB_C1

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | In Ordnung |
| 0x0001 | Keine Komfortfuntion moeglich |
| 0x0002 | defekt |
| 0x0003 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | In Ordnung |
| 0x0004 | Plausibilitaetsfehler, Aktivitaetsfehler |
| 0x0008 | Timeoutfehler |
| 0x000C | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C3

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Keine_Bremsdruckanforderung |
| 0x0010 | Plausibilitaetsfehler, Aktivitaetsfehler |
| 0x0030 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C4

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Keine Anforderung |
| 0x0040 | Druck oder Verzoegerungsanforderung |
| 0x00C0 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C5

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | In Ordnung |
| 0x0100 | Rueckfallebene |
| 0x0200 | defekt |
| 0x0300 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C6

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Komfortfunktion durchfuehrbar |
| 0x0400 | Komfortfunktion deaktivieren |
| 0x0C00 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C7

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Anziehen erlaubt Loesen gesperrt |
| 0x1000 | Loesen erlaubt Anziehen gesperrt |
| 0x3000 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_C8

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | keine Anforderung |
| 0x4000 | Anforderung ACC akzeptiert |
| 0x8000 | Anforderung EMF akzeptiert |
| 0xC000 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_D1

| WERT | UWTEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | WARTE STILLSTAND |
| 0x02 | IDLE |
| 0x03 | ANZIEHEN |
| 0x04 | LOESEN |
| 0x05 | NORMIEREN |
| 0xFF | unbekannter Fehler |

### UB_D2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | INIT |
| 0x0001 | WARTE STILLSTAND |
| 0x0002 | IDLE |
| 0x0003 | ANZIEHEN |
| 0x0004 | LOESEN |
| 0x0005 | NORMIEREN |
| 0xFFFF | unbekannter Fehler |

### UB_E1

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Zustand unbekannt |
| 0x0001 | Geloest |
| 0x0002 | Halten |
| 0x0003 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_E2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Zustand unbekannt |
| 0x0010 | Geloest |
| 0x0020 | Halten |
| 0x0030 | ungueltig |
| 0xFFFF | unbekannter Fehler |

### UB_E3

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Start |
| 0x0040 | Normale Funktion |
| 0x0080 | Kein Komfortmodus |
| 0x00C0 | Manueller Notmodus, keine dynamische Abbremsung |
| 0x0100 | Manueller Notmodus, nur dynamische Abbremsung |
| 0x0140 | Gesamtstillegung |
| 0x0180 | Stop |
| 0xFFFF | unbekannter Fehler |

### UB_E4

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | V 0-3 km/h |
| 0x0200 | V 3-1 0km/h |
| 0x0400 | V 10-250 km/h |
| 0x0600 | V ungueltig |
| 0xFFFF | unbekannter Fehler |
