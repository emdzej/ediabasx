# FRM_87.prg

## General

|  |  |
| --- | --- |
| File | FRM_87.prg |
| Type | PRG |
| Jobs | 208 |
| Tables | 33 |
| Origin | BMW EI-63 Kober |
| Revision | 3.09 |
| Author | Lear Entwicklung Ahrens, Brose Gerstner |
| ECU Comment | SGBD fuer FRMFA-E87 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | FRM_87 |  |  |
| ORIGIN | string | BMW EI-63 Kober |  |  |
| REVISION | string | 3.09 |  |  |
| AUTHOR | string | Lear Entwicklung Ahrens, Brose Gerstner |  |  |
| COMMENT | string | SGBD fuer FRMFA-E87 |  |  |
| PACKAGE | string | 1.33 |  |  |
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

### I_STUFE_LESEN

Auslesen der I-Stufe KWP2000: $22 ReadDataByCommonIdentifier $100B I-Step Modus  : Default

_No arguments._

### I_STUFE_SCHREIBEN

Beschreiben der I-Stufe Es muessen immer alle drei Argumente im Bereich von 0-65535 bzw. 0x0000-0xFFFF uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $100B I-Step Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| I_STEP_1 | unsigned int | Bereich: 0-65535 bzw. 0x0000-0xFFFF |
| I_STEP_2 | unsigned int | Bereich: 0-65535 bzw. 0x0000-0xFFFF |
| I_STEP_3 | unsigned int | Bereich: 0-65535 bzw. 0x0000-0xFFFF |

### READ_CODIER_INDEX

KWP 2000: $21 ReadDataByLocalIdentifier $05 READ_CODING_INDEX Modus   : Default Auslesen der drei Codierindexe: AHL, FH, FRMFA Funktioniert nur bis FSV 4.4.1

_No arguments._

### READ_VARIANTE

KWP 2000: $21 ReadDataByLocalIdentifier $06 VARIANTE Modus   : Default Auslesen der Variante des Steuergeraetes

_No arguments._

### STATUS_BETR_H_FRMFA

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $03 Betriebsstunden fuer FRMFA Status von PL2-FRMFA lesen Betriebsstunden des FRMFA lesen

_No arguments._

### STEUERN_BETR_H_FRMFA_LOESCHEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $03 Betriebsstunden fuer FRMFA Status von FRMFA schreiben Loeschen der Betriebsstunden des FRMFA

_No arguments._

### STATUS_BETR_H_FUNKTIONEN

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $04 Betriebsstunden fuer alle Funktionen Status von FRMFA lesen Lesen der Betriebsstunden der einzelnen Lampenfunktionen des FRMFA

_No arguments._

### STEUERN_BETR_H_FUNKTIONEN_LOESCHEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $04 Betriebsstunden fuer alle Funktionen Status von FRMFA schreiben Loeschen der Betriebsstunden aller Lampenfunktionen des FRMFA

_No arguments._

### STATUS_BETR_H_AMPERE

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $08 Betriebsstunden mit Ampereunterteilung Status von FRMFA lesen Lesen der bisherigen Stromverteilung des FRMFA

_No arguments._

### STEUERN_BETR_H_AMPERE

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $08 Betriebsstunden mit Ampereunterteilung Status von FRMFA schreiben Loeschen der bisherigen Stromverteilung des FRMFA

_No arguments._

### STATUS_DIGITAL_INPUTS

Auslesen der Stati von den digitalen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $06 Digitale Inputs

_No arguments._

### STATUS_ANALOG_INPUTS

Auslesen der Stati von den analogen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $07 Analoge Inputs

_No arguments._

### STATUS_LAMPEN_DIGITAL

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $02 alle Dimmwerte an PWM-Ports Status von FRMFA lesen Auslesen der digitalen Stati (EIN/AUS) aller Lampen des FRMFA

_No arguments._

### STATUS_SCHLOSSNUESSE

Auslesen der Stati von den Schlossnuessen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $23 Schlossnuesse

_No arguments._

### STATUS_LWR_POSITION

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $25 STATUS_LWR_POSITION

_No arguments._

### STEUERN_LAMPEN_DIGITAL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $01 Dimmwert an PWM-Port Status von FRMFA schreiben Ausgewaehlte Lampe voll ein bzw. ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Lampe aus Tabelle auswaehlen |
| AUSGANG_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### STEUERN_LAMPEN_PWM

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $01 Dimmwert an PWM-Port Status von FRMFA schreiben Lampe mit PWM- bzw. Spannungswert ein- bzw. ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Lampe aus Tabelle auswaehlen |
| PWM_WERT | int | je nach Auswahl mit 0x 0000 UUUU UUUU UUUU = Spannungsnachregelung 0001 PPPP PPPP PPPP = Prozent Einschaltdauer |

### STATUS_DIMMWERT

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $02 alle Dimmwerte an PWM-Ports Status von FRMFA lesen Dimmwerte aller Lampen auslesen

_No arguments._

### STATUS_SENSE_INPUTS

Auslesen der Sensewerte der einzelnen Lampen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $05 Sense Inputs

_No arguments._

### STATUS_FENSTERHEBER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $0E Stati der Fensterheber fuer FRMFA Status von PL2-FRMFA lesen Stati der einzelnen FH-Funktionen auslesen

_No arguments._

### STEUERN_FENSTERHEBER

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0E Ansteuern FH Status von FRMFA schreiben Verfahren der Fensterheber, Fahrer, Beifahrer, beide

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG_FH_FAT | string | table FH_Richtung NAME TEXT Auswahl der Richtung, in der das Fahrertuerfenster verfahren soll |
| ANSTEUER_ZEIT_FAT | int | Zeit in 100ms, die der FH angesteuert werden soll, d.h. 1 = 100ms |
| RICHTUNG_FH_BFT | string | table FH_Richtung NAME TEXT Auswahl der Richtung, in der das Beiahrertuerfenster verfahren soll |
| ANSTEUER_ZEIT_BFT | int | Zeit in 100ms, die der FH angesteuert werden soll, d.h. 1 = 100ms |

### STEUERN_FENSTERHEBER_EINLERNEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0E Ansteuern FH Status von FRMFA schreiben Dauer max. 7sec Einlernen der Fensterheber

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | table Auswahl_Fenster NAME TEXT Auswahl des Fensters, dass eingelernt werden soll, Fahrer, Beifahrer, beide |

### STEUERN_FENSTERHEBER_MIT_EKS_EINLERNEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1F Hublaenge zum Einlernen uebergeben und Einlernen starten Status von FRMFA schreiben Dauer ca. 14 sec Einlernen der Fensterheber

| Name | Type | Description |
| --- | --- | --- |
| HUBLAENGE_FH_FAT | unsigned int | Hublaenge zum Einlernen der FH-Fahrertuer bei 0 wird der FH nicht eingelernt |
| HUBLAENGE_FH_BFT | unsigned int | Hublaenge zum Einlernen der FH-Beifahrertuer bei 0 wird der FH nicht eingelernt |

### STEUERN_FENSTERHEBER_EINLERNEN_AUS_CODIERUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1F Hublaenge zum Einlernen aus Codierdaten lesen und Einlernen starten Status von FRMFA schreiben Dauer ca. 14 sec Einlernen der Fensterheber

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | table Auswahl_Fenster NAME TEXT Auswahl des Fensterhebers, der eingelernt werden soll, Fahrer, Beifahrer, beide |

### STEUERN_FENSTERHEBER_DENORMIEREN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $12 FH denormieren Status von FRMFA schreiben Denormieren der Fensterheber, ja nach Auswahl, Fahrer, Beifahrer, beide

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | table Auswahl_Fenster NAME TEXT Auswahl des Fensterhebers, der denormiert werden soll, Fahrer, Beifahrer, beide |

### STATUS_WIEDERHOLZAEHLER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $20 Wiederholzaehler fuer FRMFA Status von PL2-FRMFA lesen Wiederholzaehler des FRMFA lesen

_No arguments._

### STEUERN_AL_EINSCHALTEN

Abblendlicht ueber Diagnose ein- bzw. ausschalten KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $22 Abblendlicht ein- bzw. ausschalten Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| AL_EIN_AUS | string | Werte: ein, aus table DigitalArgument TEXT |

### STATUS_VERBAU_SPIEGEL

KWP2000: $22 ReadDataByCommonIdentifier $3414 GM-Kodierdatenblock Kodierdaten von FRMFA lesen

_No arguments._

### STATUS_POSITION_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $10 Position Spiegel fuer FRMFA Status von PL2-FRMFA lesen Abfrage der Position der beiden Aussenspiegel

_No arguments._

### STATUS_MEMORY_POSITION_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $1E Position Spiegel fuer FRMFA Status von PL2-FRMFA lesen Abfrage der MemoryPosition der beiden Aussenspiegel

| Name | Type | Description |
| --- | --- | --- |
| KEY | int | 0 bis 3 und 255 welcher Schluessel |
| MEM_POS_SLOT | int | 0 bis 3 welche Memoryposition |

### STEUERN_MEMORY_POSITION_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $1E Position Spiegel fuer FRMFA Status von PL2-FRMFA schreiben Schreiben der MemoryPosition der beiden Aussenspiegel

| Name | Type | Description |
| --- | --- | --- |
| KEY | int | 0 bis 3 und 255 welcher Schluessel |
| MEM_POS_SLOT | int | 0 bis 3 welche Memoryposition |
| MEM_POS_SPIEGEL_FAHRER_HOR_WERT | int | Position Fahrerspiegel horizontal |
| MEM_POS_SPIEGEL_BEIFAHRER_HOR_WERT | int | Position Beifahrerspiegel horizontal |
| MEM_POS_SPIEGEL_FAHRER_VER_WERT | int | Position Fahrerspiegel vertikal |
| MEM_POS_SPIEGEL_BEIFAHRER_VER_WERT | int | Position Beifahrerspiegel vertikal |

### STATUS_SPIEGEL_TASTER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $0F Spiegelschalter fuer FRMFA Status von PL2-FRMFA lesen Auslesen der einzelnen Tasten der Spiegelschalters

_No arguments._

### STEUERN_POSITION_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $10 Position Spiegel fuer FRMFA Status von FRMFA schreiben ausgewaehlten Spiegel in angegebene Position fahren

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_SPIEGEL | string | table Auswahl_Spiegel NAME TEXT Spiegel auswaehlen |
| RICHTUNG_SPIEGEL | string | table Richtung_Spiegel NAME TEXT Auswahl der Richtung in die der Spiegel verfahren werden soll |
| ANSTEUER_ZEIT_SPIEGEL | int | Zeit in 100ms, die der Spiegel angesteuert werden soll, d.h. 1 = 100ms |

### STEUERN_POSITION_DIREKT_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1D Position Spiegel fuer FRMFA Status von FRMFA schreiben ausgewaehlten Spiegel in angegebene Position fahren

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_SPIEGEL | string | table Auswahl_Spiegel NAME TEXT Spiegel auswaehlen |
| RICHTUNG_SPIEGEL_HORIZONTAL | int |  |
| RICHTUNG_SPIEGEL_VERTIKAL | int |  |

### STATUS_GURTBRINGER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $27 Stati von Gurtbringer fuer FRMFA Status von PL2-FRMFA lesen

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_GURTBRINGER | int | Auswahl des Gurtbringer 1 Fahrer, 2 Beifahrer, 3 oder nichts beide |

### STEUERN_GURTBRINGER_INITIALISIERUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $27 Stati von Gurtbringer fuer FRMFA Status von PL2-FRMFA schreiben

_No arguments._

### STEUERN_GURTBRINGER_POSITION

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $27 Stati von Gurtbringer fuer FRMFA Status von PL2-FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| POSITION_GURTBRINGER_FAHRER | int | Position fuer Gurtbringer Fahrerseite |
| POSITION_GURTBRINGER_BEIFAHRER | int | Position fuer Gurtbringer Beifahrerseite |

### STEUERN_GURTBRINGER_RICHTUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $27 Stati von Gurtbringer fuer FRMFA Status von PL2-FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG_GURTBRINGER_FAHRER | int | Richtung fuer Gurtbringer Fahrerseite stop 0x00, rausfahren 0x01, reinfahren 0x02 |
| RICHTUNG_GURTBRINGER_BEIFAHRER | int | Richtung fuer Gurtbringer Beifahrerseite stop 0x00, rausfahren 0x01, reinfahren 0x02 |

### STATUS_WARNBLINKEN

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $13 Warnblinken Status von PL2-FRMFA lesen Status ob Warnblinken aktiv ist auslesen

_No arguments._

### STATUS_KINDERSICHERUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $13 Kindersicherung Status von PL2-FRMFA lesen Status der Kindersicherung auslesen

_No arguments._

### STEUERN_KINDERSICHERUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $13 Kindersicherung Status von FRMFA schreiben Betaetigung des Kindersicherungstasters simulieren

| Name | Type | Description |
| --- | --- | --- |
| TASTER_KINDERSICHERUNG | string | Werte: ein, aus table DigitalArgument TEXT |

### STATUS_SPIEGELHEIZUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $19 Spiegelheizung Status von PL2-FRMFA lesen Wert der Spiegelheizung auslesen

_No arguments._

### STEUERN_SPIEGELHEIZUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $19 Spiegelheizung Status von FRMFA schreiben Spiegelheizung mit speziellen Werten eischalten

| Name | Type | Description |
| --- | --- | --- |
| SPIEGELHEIZUNG_WERT | string | Wert fuer Spiegelheizung |

### STATUS_SPIEGEL_ABBLENDEN

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $1A SPIEGEL_ABBLENDEN Status von PL2-FRMFA lesen Auslesen des Wertes, wie der Spiegel abgeblendet ist

_No arguments._

### STEUERN_SPIEGEL_ABBLENDEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1A SPIEGEL_ABBLENDEN Status von FRMFA schreiben Abblenden der Aussenspiegel

| Name | Type | Description |
| --- | --- | --- |
| SPIEGEL_ABBLENDEN_WERT | int | Wert wie Aussenspiegel abgeblendet werden soll |

### STATUS_XENON_AL_EINSCHALTVERSUCHE

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $1B Xenon-AL-Einschaltversuche Auslesen wie oft das Abblendlicht eingeschaltet wurde

_No arguments._

### STEUERN_XENON_AL_EINSCHALTVERSUCHE_LOESCHEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1B Xenon-AL-Einschaltversuche Loeschen der AL-Einschaltversuche

_No arguments._

### STATUS_INNENBELEUCHTUNG_DAUERAUS

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $26 Xenon-AL-Einschaltversuche Auslesen, ob Innenlicht daueraus geschaltet wurde

_No arguments._

### STEUERN_INNENBELEUCHTUNG_DAUERAUS

KWP2000: $30 InputOutputControlByLocalIdentifier $08 LongTermAdjustment $26 Innenbeleuchtung Dauerausschalten Innenbeleuchtung Dauerausschalten

| Name | Type | Description |
| --- | --- | --- |
| INNENBELEUCHTUNG_DAUERAUS_EIN | string | Werte: ein, aus table DigitalArgument TEXT Innenbeleuchtung Dauerausschalten |

### STATUS_SENSE_LESEN

Senseausgang fuer ausgewaehlte Lampe lesen, FRMFA KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $1C Senseausgang lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Auswahl, welche Lampe geprueft werden soll |

### STATUS_FH_SCHALTER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $24 FH-Schalter fuer FRMFA Status von PL2-FRMFA lesen Auslesen der einzelnen Tasten der FH

_No arguments._

### STATUS_EE_FH_LOG_DATA

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $21 EE_FH_LOG_DATA Lesen von EE_FH_LOG_DATA

_No arguments._

### STEUERN_EE_FH_LOG_DATA

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $03 EE_FH_LOG_DATA Status von FRMFA schreiben Loeschen von EE_FH_LOG_DATA des FRMFA

_No arguments._

### _CODIERDATEN_BLOCK_LESEN_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Bereich: 0x30xx bis 0x35xx |

### _CODIERDATEN_BLOCK_SCHREIBEN_LEAR

Beschreiben der Codierdaten je nach Block KWP2000: $2E WriteDataByCommonIdentifier $xxxx Codierdaten Modus  : Codieren je nach Block

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN | string | Block+Codierdaten |

### _CODIERDATEN_3000_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3000-Bereich Auslesen der ALC-Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3400_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3400-Bereich Auslesen der FRMFA-Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3100_LESEN_KOMPLETT_LESEN_LEAR

Auslesen der kompletten Codierdaten im 3100-Bereich KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3500_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3500-Bereich (FH) KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3400_SCHREIBEN_AUS_DATEI_LEAR

Beschreiben der Default-Codierdaten Beschreiben der FRMFA-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $34xx Codierdaten, Default Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten fuer 3400-Bereich Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _CODIERDATEN_3000_SCHREIBEN_AUS_DATEI_LEAR

Beschreiben der Default-Codierdaten Beschreiben der ALC-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $30xx Codierdaten, Default Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten fuer 3000-Bereich Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _CODIERDATEN_3100_SCHREIBEN_AUS_DATEI_LEAR

Beschreiben der Default-Codierdaten fuer 3100-Bereich KWP2000: $2E WriteDataByCommonIdentifier $31xx Code in EEPROM Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit generiertem Code Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.cod codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _CODIERDATEN_KOMPLETT_SCHREIBEN_LEAR

Beschreiben der Default-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $30xx Codierdaten ALC schreiben $31xx Code in EEPROM schreiben $34xx Codierdaten FRMFA schreiben $35xx Codierdaten FH schreiben Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _READ_IDENT_94_SSECUSON_LEAR

SystemSupplierECUSoftwareNumber KWP2000: $1A ReadECUIdentification Modus  : $94 SystemSupplierECUSoftwareNumber

_No arguments._

### _WRITE_CI_AHL_FH_LEAR

Beschreiben der CI fuer AHL und FH KWP2000: $2E WriteDataByLocalIdentifier $05 CI Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CI_AHL | unsigned char | Bereich: 0-99 |
| CI_FH | unsigned char | Bereich: 0-99 |

### READ_IDENT_PARAM

Identdaten KWP2000: $1A ReadECUIdentification Modus  : mit Angabe der ID_OPTION zum spezifischen ID_LESEN

| Name | Type | Description |
| --- | --- | --- |
| ID_OPT | int | Bereich: 0x86-0x9F |

### WRITE_IDENT_93_SSECUHVN

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $3B WriteDataByLocalIdentifier $93 SystemSupplierECUHardwareVersionNumber Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### READ_FVIN

liest die lange Fahrgestellnummer KWP 2000: $22 ReadDataByCommonIdentifier $1010 FVIN

_No arguments._

### WRITE_FVIN

schreibt die lange Fahrgestellnummer KWP 2000: $2E WriteDataByCommonIdentifier $1010 FVIN

| Name | Type | Description |
| --- | --- | --- |
| FVIN | string | lange Fahrgestellnummer |

### FVIN_AUFTRAG

lange Fahrgestellnummer schreiben und ruecklesen KWP 2000: $2E WriteDataByCommonIdentifier $1010 FVIN KWP 2000: $22 ReadDataByCommonIdentifier $1010 FVIN

| Name | Type | Description |
| --- | --- | --- |
| FVIN | string | lange Fahrgestellnummer |

### STATUS_LWR_LESEN

Lesen eines Codierdatensatzes zur Unterscheidung zwischen dynamischer, automatischer und manueller LWR KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet

_No arguments._

### READ_ENERGY_SAVING_MODE

Energy-Saving-Mode auslesen KWP 2000: $22 ReadDataByCommonIdentifier KWP 2000: $100A EnergySavingMode

_No arguments._

### _HERSTELLER_DATEN_LESEN_LEAR

Auslesen der Herstellerdaten KWP2000: $22 ReadDataByCommonIdentifier $0004 Herstellerdaten

_No arguments._

### CBD_ZEICHN_INDEX_LESEN_LEAR

Auslesen des Aenderungsindex aus den Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier $3404 Aenderungs-Index Modus  : Default

_No arguments._

### _HERSTELLER_DATEN_SCHREIBEN_LEAR

Beschreiben der Codierdaten je nach Block KWP2000: $2E WriteDataByCommonIdentifier $0004 Herstellerdaten

| Name | Type | Description |
| --- | --- | --- |
| HERSTELLERDATEN | string | Block+Codierdaten |

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F13 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F13 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### _FLASH_PROG_STATUS_SCHREIBEN_LEAR

Fahrgestellnummer schreiben Standard Codierjob KWP2000: $3B WriteDataByLocalIdentifier $02 FlashProgrammierstatus auf 1 setzen Modus  : Default

_No arguments._

### _STEUERN_DIAGNOSE_BROSE_FH_1

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $09 Diagnose job 1 fuer BROSE-FH Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE_1 | unsigned char |  |
| BYTE_2 | unsigned char |  |
| BYTE_3 | unsigned char |  |
| BYTE_4 | unsigned char |  |
| BYTE_5 | unsigned char |  |

### _STEUERN_DIAGNOSE_BROSE_FH_2

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0A Diagnose job 2 fuer BROSE-FH Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE_1 | unsigned char |  |
| BYTE_2 | unsigned char |  |
| BYTE_3 | unsigned char |  |
| BYTE_4 | unsigned char |  |
| BYTE_5 | unsigned char |  |

### _STEUERN_DIAGNOSE_BROSE_FH_3

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0B Diagnose job 3 fuer BROSE-FH Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE_1 | unsigned char |  |
| BYTE_2 | unsigned char |  |
| BYTE_3 | unsigned char |  |
| BYTE_4 | unsigned char |  |
| BYTE_5 | unsigned char |  |

### _STEUERN_DIAGNOSE_BROSE_FH_4

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0C Diagnose job 4 fuer BROSE-FH Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE_1 | unsigned char |  |
| BYTE_2 | unsigned char |  |
| BYTE_3 | unsigned char |  |
| BYTE_4 | unsigned char |  |
| BYTE_5 | unsigned char |  |

### _STEUERN_DIAGNOSE_BROSE_FH_5

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0D Diagnose job 5 fuer BROSE-FH Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE_1 | unsigned char |  |
| BYTE_2 | unsigned char |  |
| BYTE_3 | unsigned char |  |
| BYTE_4 | unsigned char |  |
| BYTE_5 | unsigned char |  |

### _READ_CAN_BUS_ERROR_LEAR

KWP 2000: $21 ReadDataByLocalIdentifier $03 CAN_BUS_ERROR Modus   : Default

_No arguments._

### _CLR_CAN_BUS_ERROR_LEAR

KWP2000: $3B WriteDataByLocalIdentifier $03 CAN_BUS_ERROR Modus  : Default

_No arguments._

### _READ_REGISTER_U435_LEAR

KWP 2000: $21 ReadDataByLocalIdentifier $03 READ_REGISTER_U435 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| REGISTER_U435_ADR | unsigned int |  |

### _WRITE_REGISTER_U435_LEAR

KWP2000: $3B WriteDataByLocalIdentifier $03 WRITE_REGISTER_U435 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REGISTER_U435 | unsigned int |  |
| WERT_REGISTER_U435 | unsigned char |  |

### _RESET_KURZSCHLUSS_SPERRE

Kurzschlusssperre ueber Diagnose ausschalten KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $18 Kurzschlusssperre ausschalten Status von FRMFA schreiben

| Name | Type | Description |
| --- | --- | --- |
| LAMP_NR | unsigned int |  |

### STATUS_LAMPEN_KURZSCHLUSS

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $14 Lampenkurzschluss auslesen Status Lampenkurzschluesse (explizit) von FRMFA lesen

_No arguments._

### STATUS_LAMPEN_KURZSCHLUSS_WIEDERHOL_COUNTER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $15 Lampenkurzschluss Wiederholzaehler auslesen Status Lampenkurzschlusswiederholzaehler (explizit) von FRMFA lesen

_No arguments._

### STATUS_LAMPEN_KURZSCHLUSS_COUNTER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $16 Lampenkurzschluss Zaehler auslesen Status Lampenkurzschlusszaehler (explizit) von FRMFA lesen

_No arguments._

### STATUS_LAMPEN_KURZSCHLUSS_COUNTER_MAX

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $17 Lampenkurzschluss Zaehler Maxwert auslesen Status des max. Wertes des Lampenkurzschlusszaehlers (explizit) von FRMFA lesen

_No arguments._

### STEUERN_SMC_BESTROMEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $11 SMC bestromen Status von FRMFA schreiben Bestromung der SMCs einschalten

| Name | Type | Description |
| --- | --- | --- |
| BESTROMEN_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### STEUERN_REFERENZLAUF_ALC_SYSTEM

Referenzlauf der SMCs starten KWP2000: $A6 LINGateway $30 InputOutputByLocalIdentifier $42 Referenzlauf starten

| Name | Type | Description |
| --- | --- | --- |
| REFERENZLAUF | string | Referenzlauf fuer Kurvenlicht auswaehlen falls keiner ausgewaehlt dann wird mit Sensor ausgewaehlt |

### STATUS_REFERENZLAUF_ALC_SYSTEM

Pruefung, ob ALC-System referenziert ist KWP2000: $A6 LINGateway $30 InputOutputByLocalIdentifier $40 Pos Kurvenlicht $41 Pos LWR

_No arguments._

### _CODIERDATEN_SMC_BLOCK_SCHREIBEN_LEAR

Beschreiben der Codierdaten je nach Block KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier $xxxx Codierdaten schreiben Modus  : Codieren je nach Block

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN | string | Block+Codierdaten |

### _CODIERDATEN_SMC_SCHREIBEN_LEAR

Beschreiben der Default-Codierdaten KWP 2000:$A6 LINGateway $2E WriteDataByCommonIdentifier $32xx Codierdaten SMC links schreiben $33xx Codierdaten SMC rechts schreiben Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |

### _CODIERDATEN_SMC_BLOCK_LESEN_LEAR

Auslesen der Codierdaten fuer einen Block KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $0x32xx Codierdaten SMC links schreiben $0x33xx Codierdaten SMC rechts schreiben Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Bereich: 30xx und 31xx |

### _CODIERDATEN_SMC_LINKS_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $32xx Codierdaten SMC links lesen Modus  : Default

_No arguments._

### _CODIERDATEN_SMC_RECHTS_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $33xx Codierdaten SMC rechts lesen Modus  : Default

_No arguments._

### VIN_SMC_LINKS_SCHREIBEN_LEAR

Schreiben der VIN in die linke SMC KWP2000: $A6 LINGateway $3B WriteDataByLocalIdentifier $90 VIN Schreiben der Fahrgestellnummer in die linke SMC

| Name | Type | Description |
| --- | --- | --- |
| VINDATEN | string | 7stellige Fahrgestellnummern |

### VIN_SMC_RECHTS_SCHREIBEN_LEAR

Schreiben der VIN in die rechte SMC KWP2000: $A6 LINGateway $3B WriteDataByLocalIdentifier $90 VIN Schreiben der Fahrgestellnummer in die rechte SMC

| Name | Type | Description |
| --- | --- | --- |
| VINDATEN | string | 7stellige Fahrgestellnummern |

### VIN_SMC_LESEN

Fahrgestellnummer fuer SMC links und rechts lesen Standard Codierjob KWP2000: $A6 LINGateway $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

_No arguments._

### ID_SMC_LESEN

ID-SMC lesen Standard Codierjob KWP2000: $A6 LINGateway $1A ReadECUIdentification $8A ID-SMC Modus  : Default Auslesen der Identdaten der SMCs

_No arguments._

### STEUERN_REFERENZLAUF_SMC

Referenzlauf der SMC starten KWP2000: $A6 LINGateway $30 InputOutputByLocalIdentifier $42 Referenzlauf starten

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| REFERENZLAUF | string | Referenzlauf auswaehlen |

### STATUS_POSITION_SMC

IST-Position der SMC auslesen KWP2000: $A6 LINGateway $30 InputOutputByLocalIdentifier $40 Pos Kurvenlicht $41 Pos LWR

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STEUERN_POSITION_SMC

bestimmte Position der SMC anfahren KWP2000: $A6 LINGateway $30 InputOutputByLocalIdentifier $40 Pos Kurvenlicht starten $41 Pos LWR starten

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| POS_KURVENLICHT | long | Winkel fuer Kurvenlicht je nach Scheinwerfer max. von -170 bis 170 entspricht -17Grad bis 17Grad |
| GESCHW_KURVENLICHT | unsigned char | Geschwindigkeit fuer Kurvenlicht je nach Scheinwerfer max. von 0 bis 31 |
| POS_LWR | long | Winkel fuer LWR je nach Scheinwerfer max. von 0 bis 1000 entspricht 0Grad bis 10Grad |
| GESCHW_LWR | unsigned char | Geschwindigkeit fuer LWR je nach Scheinwerfer max. von 0 bis 7 |

### SMC_SPEICHER_LESEN_LEAR

Speicher lesen KWP 2000: $A6 LINGateway $23 ReadMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| ADRESSE | long | zu lesende Adresse |

### SMC_SPEICHER_SCHREIBEN_LEAR

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse Datenbyte KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| DATEN | string | zu schreibende Daten (immer 1 Byte) z.B. 1 |

### _HERSTELLERDATEN_SMC_LEAR_SCHREIBEN

Beschreiben der LEAR-Herstellerdaten KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| HERSTELLERDATEN | string | Herstellerdaten |

### _HERSTELLERDATEN_SMC_LEAR_LESEN

Auslesen der LEAR-Herstellerdaten KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $0x3280 Herstellerdaten SMC links lesen $0x3380 HErstellerdaten SMC rechts lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### HERSTELLERDATEN_SMC_SCHEINWERFER_SCHREIBEN

Beschreiben der Scheinwerfer-Herstellerdaten KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| HERSTELLERDATEN | string | Herstellerdaten |

### HERSTELLERDATEN_SMC_SCHEINWERFER_LESEN

Auslesen der Scheinwerfer-Herstellerdaten KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $0x3281 Herstellerdaten SMC links lesen $0x3381 HErstellerdaten SMC rechts lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### IS_LESEN_SMC_L_LEAR

Infospeicher von SMC links lesen (alle Info-Meldungen / Ort und Art) KWP2000: $A6 LINGateway KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_SMC_R_LEAR

Infospeicher von SMC rechts lesen (alle Info-Meldungen / Ort und Art) KWP2000: $A6 LINGateway KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_DETAIL_SMC_L_LEAR

Infospeicher Details von SMC links lesen (alle Info-Meldungen / Ort und Art) KWP2000: $A6 LINGateway KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LESEN_DETAIL_SMC_R_LEAR

Infospeicher Details von SMC rechts lesen (alle Info-Meldungen / Ort und Art) KWP2000: $A6 LINGateway KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LOESCHEN_SMC_L_LEAR

Infospeicher der SMC links loeschen KWP2000: $A6 LINGateway KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### IS_LOESCHEN_SMC_R_LEAR

Infospeicher der SMC rechts loeschen KWP2000: $A6 LINGateway KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### STATUS_BETR_H_SMC

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $51 Betriebsstunden Betriebsstunden von ausgewaehlter SMC lesen

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STEUERN_BETR_H_SMC_LOESCHEN

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $51 Betriebsstunden alle Betriebszeiten der ausgewaehlten SMC loeschen

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_VERTEILUNG_WINKEL_ANSTEUERUNG_SMC

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $50 Verteilung der Winkelansteuerung Verteilung der Winkelansteuerung von ausgewaehlter SMC lesen

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STEUERN_VERTEILUNG_WINKEL_ANSTEUERUNG_SMC_LOESCHEN

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $50 Verteilung der Winkelansteuerung Loeschen der Verteilung der Winkelansteuerung der ausgewaehlten SMC

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_TEMPERATURVERTEILUNG_SMC

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $52 Temperaturverteilung Temperaturverteilung von der ausgewaehlten SMC lesen

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STEUERN_TEMPERATURVERTEILUNG_SMC_LOESCHEN

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $52 Temperaturverteilung Loeschen der Temperaturverteilung der ausgewaehlten SMC

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_SCHRITTVERLUSTE_SMC

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $53 Schrittverluste Schrittverluste von der ausgewaehlten SMC lesen

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STEUERN_SCHRITTVERLUSTE_SMC_LOESCHEN

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $53 Schrittverluste Loeschen der Schrittverluste der ausgewaehlten SMC

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_HW_EINGANGE_SMC

KWP2000: $A6 LINGateway KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $54 HW_Eingaenge HW_Eingaenge von der ausgewaehlten SMC lesen

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### _HERSTELLERTEST_SMC_LEAR

Herstellertest KWP2000: $A6 LINGateway KWP2000: $31 StartRoutineByLocalIdentifier $04 Herstellertest Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| UBAT_HIGH | unsigned char | Grenzwert Batteriespannung Highwert |
| UBAT_LOW | unsigned char | Grenzwert Batteriespannung Lowwert |
| USEN_HIGH | unsigned char | Grenzwert Sensespannung Highwert |
| USEN_LOW | unsigned char | Grenzwert Sensespannung Lowwert |
| DIGITAL_MASK_1 | unsigned char | Musterbyte fuer Digitalstatus 1 |
| DIGITAL_MASK_2 | unsigned char | Musterbyte fuer Digitalstatus 2 |
| DIGITAL_MASK_3 | unsigned char | Musterbyte fuer Digitalstatus 3 |

### SCHEINWERFERHERSTELLERDATEN_SCHREIBEN

Beschreiben der Scheinwerfer-Herstellerdaten KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| SCHEINWERFER_HERSTELLERDATEN | string | Herstellerdaten |

### SCHEINWERFERHERSTELLERDATEN_LESEN

Auslesen der Scheinwerfer-Herstellerdaten KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $0x3281 Herstellerdaten SMC links lesen $0x3381 HErstellerdaten SMC rechts lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### PRUEFSTEMPEL_SCHEINWERFER_SCHREIBEN

Beschreiben des Scheinwerfer-Pruefstempel KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| SCHEINWERFER_PRUEFSTEMPEL | string | Scheinwerfer-Pruefstempel |

### PRUEFSTEMPEL_SCHEINWERFER_LESEN

Auslesen der Scheinwerfer-Pruefstempel KWP 2000: $A6 LINGateway $22 ReadDataByCommonIdentifier $0x3281 Scheinwerfer-Pruefstempel SMC links lesen $0x3381 Scheinwerfer-Pruefstempel SMC rechts lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### _WARTEZEIT_LEAR

Wartezeit

| Name | Type | Description |
| --- | --- | --- |
| WARTEZEIT | unsigned char | Wartezeit in Sekunden |

### STATUS_LAMPENAUSGANG_ENTPRELLT_LESEN

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $02 alle Dimmwerte an PWM-Ports Status von FRMFA lesen entprellte Dimmwerte aller Lampen auslesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Auswahl, welche Lampe geprueft werden soll |

### FG_NR_SMC_DEFAULT

Beschreiben der VIN mit 0xff KWP2000: $A6 LINGateway $3B WriteDataByLocalIdentifier $90 VIN Beschreiben der Fahrgestellnummer in beide SMC mit 0xff

_No arguments._

### READ_GURTBRINGER_FA_IDENT

ident lesen des LIN-Slave GURTBRINGER_FA Standard Codierjob KWP2000: $A6 LINGateway $1A ReadECUIdentification $8A ID-GURTBRINGER Modus  : Default Auslesen der Identdaten der GURTBRINGER_FA

_No arguments._

### READ_GURTBRINGER_BF_IDENT

ident lesen des LIN-Slave GURTBRINGER_BF Standard Codierjob KWP2000: $A6 LINGateway $1A ReadECUIdentification $8A ID-GURTBRINGER Modus  : Default Auslesen der Identdaten der GURTBRINGER_BF

_No arguments._

### C_FG_SCHREIBEN_GURTBRINGER_FA

Schreiben der FG-Nr. in den GURTBRINGER_FA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FG_NR_GURTBRINGER | string | Fahrgestellnummer GURTBRINGER (18-stellig) |

### C_FG_LESEN_GURTBRINGER_FA

Lesen der FG-Nr. aus dem GURTBRINGER_FA KWP2000: $A6 LINGateway $22 ReadDataByCommonIdentifier

_No arguments._

### C_FG_AUFTRAG_GURTBRINGER_FA

Schreiben und Lesen der FG-Nr. GURTBRINGER_FA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FG_NR_GURTBRINGER | string | Fahrgestellnummer GURTBRINGER (18-stellig) |

### C_FG_SCHREIBEN_GURTBRINGER_BF

Schreiben der FG-Nr. in den GURTBRINGER_BF KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FG_NR_GURTBRINGER | string | Fahrgestellnummer GURTBRINGER (18-stellig) |

### C_FG_LESEN_GURTBRINGER_BF

Lesen der FG-Nr. aus dem GURTBRINGER_BF KWP2000: $A6 LINGateway $22 ReadDataByCommonIdentifier

_No arguments._

### C_FG_AUFTRAG_GURTBRINGER_BF

Schreiben und Lesen der FG-Nr. GURTBRINGER_BF KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FG_NR_GURTBRINGER | string | Fahrgestellnummer GURTBRINGER (18-stellig) |

### C_AEI_SCHREIBEN_GURTBRINGER_FA

Schreiben des Aenderungsindex in den GURTBRINGER_FA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| AEI_GURTBRINGER | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_LESEN_GURTBRINGER_FA

Lesen des Aenderungsindex aus dem GURTBRINGER_FA KWP2000: $A6 LINGateway $22 ReadDataByCommonIdentifier

_No arguments._

### C_AEI_AUFTRAG_GURTBRINGER_FA

Schreiben und Lesen des Aenderungsindex GURTBRINGER_FA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| AEI_GURTBRINGER | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_SCHREIBEN_GURTBRINGER_BF

Schreiben des Aenderungsindex in den GURTBRINGER_BF KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| AEI_GURTBRINGER | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_LESEN_GURTBRINGER_BF

Lesen des Aenderungsindex aus dem GURTBRINGER_BF KWP2000: $A6 LINGateway $22 ReadDataByCommonIdentifier

_No arguments._

### C_AEI_AUFTRAG_GURTBRINGER_BF

Schreiben und Lesen des Aenderungsindex GURTBRINGER_BF KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| AEI_GURTBRINGER | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### RESET_GURTBRINGER_FA

Reset GURTBRINGER_FA KWP2000: $A6 LINGateway $11 Reset

_No arguments._

### RESET_GURTBRINGER_BF

Reset GURTBRINGER_BF KWP2000: $A6 LINGateway $11 Reset

_No arguments._

### STEUERN_KURZHUB_DEAKTIVIEREN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $28 Kurzhub Deaktivieren

| Name | Type | Description |
| --- | --- | --- |
| AKTIV | int | EIN: Kurzhub deaktivieren AUS: Kurzhub reaktivieren |

### STATUS_QUALITAET_FENSTERHEBERLAUF

Qualitaetsbewertung Fensterheber

| Name | Type | Description |
| --- | --- | --- |
| GRENZWERT_1 | int | Optional abweichender Grenzwert 1 |
| GRENZWERT_2 | int | Optional abweichender Grenzwert 2 |
| GRENZWERT_3 | int | Optional abweichender Grenzwert 3 |
| GRENZWERT_4 | int | Optional abweichender Grenzwert 4 |
| GRENZWERT_5 | int | Optional abweichender Grenzwert 5 |
| GRENZWERT_6 | int | Optional abweichender Grenzwert 6 |
| GRENZWERT_7 | int | Optional abweichender Grenzwert 7 |
| GRENZWERT_8 | int | Optional abweichender Grenzwert 8 |
| GRENZWERT_9 | int | Optional abweichender Grenzwert 9 |

### _STATUS_FH_ADAPTIONSSPEICHER_LESEN

Adaptionsdaten Fensterheber KWP2000: $30 InputOutputControlByLocalIdentifier $18 ECHTZEITDATEN_BROSE_LESEN $01 ReportCurrentState

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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9CA8 | interner Fehler |
| 0x9CA9 | Klemme 30A Anschluss fehlerhaft |
| 0x9CAA | Klemme 30B Anschluss fehlerhaft |
| 0x9CAB | eine Klemme 15 fehlt |
| 0x9CAC | Bremslichtschalter defekt |
| 0x9CAD | AHM-Kommunikation gestoert |
| 0x9CAE | Bedienteilfehler |
| 0x9CAF | Lichtschalterstellung 1 defekt |
| 0x9CB0 | Lichtschalterstellung 2 defekt |
| 0x9CB1 | Dimmer-Poti defekt |
| 0x9CB2 | LWR-Poti defekt |
| 0x9CB3 | Sensor Hoehenstand vorne defekt |
| 0x9CB4 | Sensor Hoehenstand hinten defekt |
| 0x9CB5 | Energiesparmode aktiv |
| 0x9CB6 | LWR-Spulenabriss |
| 0x9CB7 | LWR-Treiberfehler |
| 0x9CB8 | SPI (EEPROM, LWR) gestoert |
| 0x9CB9 | Kurzschlussfehler 4 |
| 0x9CBA | Kurzschlussfehler 3 |
| 0x9CBB | Kurzschlussfehler 2 |
| 0x9CBC | Kurzschlussfehler 1 |
| 0x9CBD | Kommunikation mit StepperMotorBox links gestoert |
| 0x9CBE | Kommunikation mit StepperMotorBox rechts gestoert |
| 0x9CBF | SMC links defekt |
| 0x9CC0 | SMC rechts defekt |
| 0x9CC1 | Kommunikation mit Spiegel Fahrerseite gestoert |
| 0x9CC2 | Kommunikation mit Spiegel Beifahrerseite gestoert |
| 0x9CC3 | Spiegelheizung Fahrerseite defekt |
| 0x9CC4 | Spiegelheizung Beifahrerseite defekt |
| 0x9CC5 | Hallsensor FH-Fahrertuer defekt |
| 0x9CC6 | Hallsensor FH-Beifahrertuer defekt |
| 0x9CC7 | Zeitfenster FH-Fahrertuer gestoert |
| 0x9CC8 | Zeitfenster FH-Beifahrertuer gestoert |
| 0x9CC9 | FH-EEPROM gestoert |
| 0x9CCA | Relais FH-Fahrertuer defekt |
| 0x9CCB | Relais FH-Beifahrertuer defekt |
| 0x9CCC | Tiefentladungsschutz der Batterie: Abschaltung Standlicht |
| 0x9CCD | Tiefentladungsschutz der Batterie: Abschaltung Parklicht |
| 0x9CCE | Batterie tiefentladen |
| 0x9CCF | Kommunikation mit LIN-Bedienteil gestoert |
| 0x9CD0 | Antrieb Spiegel Fahrerseite defekt |
| 0x9CD1 | Antrieb Spiegel Beifahrerseite defekt |
| 0x9CD2 | Antrieb Beiklappen Spiegel Fahrerseite defekt |
| 0x9CD3 | Antrieb Beiklappen Spiegel Beifahrerseite defekt |
| 0x9CD4 | Kommunikation mit Gurtbringer Fahrerseite gestoert |
| 0x9CD5 | Kommunikation mit Gurtbringer Beifahrerseite gestoert |
| 0x9CD6 | Motor Gurtbringer Fahrerseite defekt |
| 0x9CD7 | Motor Gurtbringer Beifahrerseite defekt |
| 0x9CD8 | Spannungsversorgung Gurtbringer Fahrerseite defekt |
| 0x9CD9 | Spannungsversorgung Gurtbringer Beifahrerseite defekt |
| 0xE584 | CAN-Low, physikalischer Fehler |
| 0xE585 | CAN-High, Kurzschluss VB |
| 0xE586 | Ground Shift, zu hoch |
| 0xE587 | Controller K-CAN, Bus Off |
| 0xE588 | Controller PT-CAN, Bus Off |
| 0xE58B | Controller PT-CAN, Bus Off |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9CB9 | 0x01 | - | - | - |
| 0x9CBA | 0x01 | - | - | - |
| 0x9CBB | 0x01 | - | - | - |
| 0x9CBC | 0x01 | - | - | - |
| 0x9CCE | TIEFENTL | - | - | - |
| default | - | - | - | - |

### TIEFENTL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | ERR_LAMPE | 0-n | - | 0x7F | Err_Lampe | 1 | 1 | 0 |
| 0x10 | Klemme 15 | 0/1 | high | 0x80 | - | - | - | - |
| 0x11 | Klemme R | 0/1 | high | 0x40 | - | - | - | - |
| 0x12 | Standlicht | 0/1 | high | 0x20 | - | - | - | - |
| 0x13 | Parklicht links | 0/1 | high | 0x10 | - | - | - | - |
| 0x14 | Parklicht rechts | 0/1 | high | 0x08 | - | - | - | - |
| 0x15 | Warnblinklicht | 0/1 | high | 0x04 | - | - | - | - |
| 0x16 | Follow me home | 0/1 | high | 0x02 | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### ERR_LAMPE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Fernlicht links, E92/E93: Abbiegelicht links |
| 0x01 | Fernlicht rechts, E92/E93: Abbiegelicht rechts |
| 0x02 | Abblendlicht links |
| 0x03 | Abblendlicht rechts |
| 0x04 | Begrenzungslicht links |
| 0x05 | Begrenzungslicht rechts |
| 0x06 | Nebelscheinwerfer links |
| 0x07 | Nebelscheinwerfer rechts |
| 0x08 | Fahrtrichtungsanzeiger links vorne 1 |
| 0x09 | Fahrtrichtungsanzeiger rechts vorne 1 |
| 0x0A | Fahrtrichtungsanzeiger links hinten |
| 0x0B | Fahrtrichtungsanzeiger rechts hinten |
| 0x0C | unbekannte Lampe 1 |
| 0x0D | Beleuchtung WBL-Taster |
| 0x0E | Bremslicht links |
| 0x0F | Bremslicht rechts |
| 0x10 | Bremslicht mitte |
| 0x11 | Schlusslicht links 1, E92/E93: Tagfahrlicht links |
| 0x12 | Schlusslicht rechts 1, E92/E93: Tagfahrlicht rechts |
| 0x13 | Schlusslicht links 2 |
| 0x14 | Schlusslicht rechts 2 |
| 0x15 | Kennzeichenlicht |
| 0x16 | Innenbeleuchtung |
| 0x17 | Nebelschlusslicht links |
| 0x18 | Nebelschlusslicht rechts |
| 0x19 | Rueckfahrlicht links |
| 0x1A | Rueckfahrlicht rechts |
| 0x1B | Break-Force-Display links |
| 0x1C | Break-Force-Display rechts |
| 0x1D | Klemme 58g |
| 0x1E | LED Fahrtlichtkontrolle |
| 0x1F | LED Vorfeldbeleuchtung |
| 0x20 | unbekannte Lampe 2 |
| 0x21 | unbekannte Lampe 3 |
| 0x22 | unbekannte Lampe 4 |
| 0xFFFF | unbekannte Lampe |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Fernlicht links, E92/E93: Abbiegelicht links defekt |
| 0x9309 | Fernlicht rechts, E92/E93: Abbiegelicht rechts defekt |
| 0x930A | Abblendlicht links defekt |
| 0x930B | Abblendlicht rechts defekt |
| 0x930C | Begrenzungslicht links defekt |
| 0x930D | Begrenzungslicht rechts defekt |
| 0x930E | Nebelscheinwerfer links defekt |
| 0x930F | Nebelscheinwerfer rechts defekt |
| 0x9310 | Fahrtrichtungsanzeiger links vorne defekt |
| 0x9311 | Fahrtrichtungsanzeiger rechts vorne defekt |
| 0x9312 | Fahrtrichtungsanzeiger links hinten defekt |
| 0x9313 | Fahrtrichtungsanzeiger rechts hinten defekt |
| 0x9314 | unbekannte Lampe 1 defekt |
| 0x9315 | Beleuchtung WBL-Taster defekt |
| 0x9316 | Bremslicht links defekt |
| 0x9317 | Bremslicht rechts defekt |
| 0x9318 | Bremslicht mitte defekt |
| 0x9319 | Schlusslicht links 1, E92/E93: Tagfahrlicht links defekt |
| 0x931A | Schlusslicht rechts 1, E92/E93: Tagfahrlicht rechts defekt |
| 0x931B | Schlusslicht links 2 defekt |
| 0x931C | Schlusslicht rechts 2 defekt |
| 0x931D | Kennzeichenlicht defekt |
| 0x931E | Innenbeleuchtung defekt |
| 0x931F | Nebelschlusslicht links defekt |
| 0x9320 | Nebelschlusslicht rechts defekt |
| 0x9321 | Rueckfahrlicht links defekt |
| 0x9322 | Rueckfahrlicht rechts defekt |
| 0x9323 | Break-Force-Display links defekt |
| 0x9324 | Break-Force-Display rechts defekt |
| 0x9325 | Klemme 58g defekt |
| 0x9326 | LED Fahrtlichtkontrolle defekt |
| 0x9327 | LED Vorfeldbeleuchtung defekt |
| 0x9328 | LoadDump aktiviert |
| 0x9329 | Bedienteil abgerissen |
| 0x932A | Lichtnotlauf mit Kl.15 aktiv |
| 0x932B | Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x932C | ALC-System defekt |
| 0x932D | ALC-System: AL links abgeschaltet |
| 0x932E | ALC-System: AL rechts abgeschaltet |
| 0x932F | Signal vom Regenlichtsensor unplausibel |
| 0x9330 | Telegramm Geschwindigkeit ungueltig |
| 0x9331 | Telegramm Gierrate Timeout oder ungueltig |
| 0x9332 | Telegramm Lenkwinkel Timeout oder ungueltig |
| 0x9333 | Telegramm Klemmenstatus Timeout oder ungueltig |
| 0x9334 | Telegramm Status-AHM Timeout |
| 0x9335 | Telegramm Status DSC Timeout |
| 0x9336 | Telegramm Status Fahrlicht Timeout |
| 0x9337 | Uebertemperatur FH-Fahrertuer |
| 0x9338 | Uebertemperatur FH-Beifahrertuer |
| 0x9339 | Schliesszylinder defekt |
| 0x933A | Telegramm Fernlichtassistent Timeout |
| 0x933B | Analog-Schalter FH-Fahrertuer defekt |
| 0x933C | Analog-Schalter FH-Beifahrertuer defekt |
| 0x933D | LIN-Schalterblock FH-Fahrertuer defekt |
| 0x933E | LIN-Schalterblock FH-Beifahrertuer defekt |
| 0x933F | LIN-Schalterblock FH-Fahrertuer hinten defekt |
| 0x9340 | LIN-Schalterblock FH-Beifahrertuer hinten defekt |
| 0x9341 | LIN-Schalterblock zentraler FH-Schalter defekt |
| 0x9342 | LIN-Schalterblock Spiegelverstellung horizontal defekt |
| 0x9343 | LIN-Schalterblock Spiegelverstellung vertikal defekt |
| 0x9344 | LIN-Schalterblock Spiegelverstellung beiklappen defekt |
| 0x9345 | LIN-Schalterblock Funktionsschalter 1 defekt |
| 0x9400 | EEPROM SMC links defekt |
| 0x9401 | Motor Kurvenlicht SMC links defekt |
| 0x9402 | Motor LWR SMC links defekt |
| 0x9403 | Treiber Kurvenlicht SMC links defekt |
| 0x9404 | Spannungsversorgung Sensor SMC links defekt |
| 0x9405 | Signal Sensor SMC links defekt |
| 0x9406 | Flanke Sensor SMC links defekt |
| 0x9407 | LIN SMC links defekt |
| 0x9408 | Schrittverlust Grenze 1 SMC links |
| 0x9409 | Schrittverlust Grenze 2 SMC links |
| 0x940A | Schrittverlust Grenze 3 SMC links |
| 0x940B | Schrittverlust Grenze 4 SMC links |
| 0x940C | Schrittverlust Grenze 5 SMC links |
| 0x940D | Schrittverlust Grenze 6 SMC links |
| 0x940E | Spike auf Sensor SMS links |
| 0x940F | Notlauf aktiv SMC links |
| 0x9410 | unbekannter Fehler 2 SMC links |
| 0x9411 | unbekannter Fehler 3 SMC links |
| 0x9412 | unbekannter Fehler 4 SMC links |
| 0x9413 | unbekannter Fehler 5 SMC links |
| 0x9420 | EEPROM SMC rechts defekt |
| 0x9421 | Motor Kurvenlicht SMC rechts defekt |
| 0x9422 | Motor LWR SMC rechts defekt |
| 0x9423 | Treiber Kurvenlicht SMC rechts defekt |
| 0x9424 | Spannungsversorgung Sensor SMC rechts defekt |
| 0x9425 | Signal Sensor SMC rechts defekt |
| 0x9426 | Flanke Sensor SMC rechts defekt |
| 0x9427 | LIN SMC rechts defekt |
| 0x9428 | Schrittverlust Grenze 1 SMC rechts |
| 0x9429 | Schrittverlust Grenze 2 SMC rechts |
| 0x942A | Schrittverlust Grenze 3 SMC rechts |
| 0x942B | Schrittverlust Grenze 4 SMC rechts |
| 0x942C | Schrittverlust Grenze 5 SMC rechts |
| 0x942D | Schrittverlust Grenze 6 SMC rechts |
| 0x942E | Spike auf Sensor SMS rechts |
| 0x942F | Notlauf aktiv SMC rechts |
| 0x9430 | unbekannter Fehler 2 SMC rechts |
| 0x9431 | unbekannter Fehler 3 SMC rechts |
| 0x9432 | unbekannter Fehler 4 SMC rechts |
| 0x9433 | unbekannter Fehler 5 SMC rechts |
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
| 0x9308 | 0x01 | 0x02 | -- | -- |
| 0x9309 | 0x01 | 0x02 | -- | -- |
| 0x930A | 0x01 | 0x02 | -- | -- |
| 0x930B | 0x01 | 0x02 | -- | -- |
| 0x930C | 0x01 | 0x02 | -- | -- |
| 0x930D | 0x01 | 0x02 | -- | -- |
| 0x930E | 0x01 | 0x02 | -- | -- |
| 0x930F | 0x01 | 0x02 | -- | -- |
| 0x9310 | 0x01 | 0x02 | -- | -- |
| 0x9311 | 0x01 | 0x02 | -- | -- |
| 0x9312 | 0x01 | 0x02 | -- | -- |
| 0x9313 | 0x01 | 0x02 | -- | -- |
| 0x9314 | 0x01 | 0x02 | -- | -- |
| 0x9315 | 0x01 | 0x02 | -- | -- |
| 0x9316 | 0x01 | 0x02 | -- | -- |
| 0x9317 | 0x01 | 0x02 | -- | -- |
| 0x9318 | 0x01 | 0x02 | -- | -- |
| 0x9319 | 0x01 | 0x02 | -- | -- |
| 0x931A | 0x01 | 0x02 | -- | -- |
| 0x931B | 0x01 | 0x02 | -- | -- |
| 0x931C | 0x01 | 0x02 | -- | -- |
| 0x931D | 0x01 | 0x02 | -- | -- |
| 0x931E | 0x01 | 0x02 | -- | -- |
| 0x931F | 0x01 | 0x02 | -- | -- |
| 0x9320 | 0x01 | 0x02 | -- | -- |
| 0x9321 | 0x01 | 0x02 | -- | -- |
| 0x9322 | 0x01 | 0x02 | -- | -- |
| 0x9323 | 0x01 | 0x02 | -- | -- |
| 0x9324 | 0x01 | 0x02 | -- | -- |
| 0x9325 | 0x01 | 0x02 | -- | -- |
| 0x9326 | 0x01 | 0x02 | -- | -- |
| 0x9327 | 0x01 | 0x02 | -- | -- |
| 0x9328 | 0x01 | -- | -- | -- |
| 0x9329 | 0x01 | -- | -- | -- |
| 0x932A | 0x01 | -- | -- | -- |
| 0x932B | 0x01 | -- | -- | -- |
| 0x932C | 0x01 | -- | -- | -- |
| 0x932D | 0x01 | -- | -- | -- |
| 0x932E | 0x01 | -- | -- | -- |
| 0x932F | 0x01 | -- | -- | -- |
| 0x9330 | 0x01 | -- | -- | -- |
| 0x9331 | 0x05 | -- | -- | -- |
| 0x9332 | 0x05 | -- | -- | -- |
| 0x9333 | 0x05 | -- | -- | -- |
| 0x9334 | 0x05 | -- | -- | -- |
| 0x9335 | 0x05 | -- | -- | -- |
| 0x9336 | 0x05 | -- | -- | -- |
| 0x9337 | 0x01 | -- | -- | -- |
| 0x9338 | 0x01 | -- | -- | -- |
| 0x9339 | 0x01 | -- | -- | -- |
| 0x933A | 0x01 | -- | -- | -- |
| 0x9400 | 0x04 | -- | -- | -- |
| 0x9401 | 0x01 | -- | -- | -- |
| 0x9402 | 0x01 | -- | -- | -- |
| 0x9403 | 0x01 | -- | -- | -- |
| 0x9404 | 0x03 | -- | -- | -- |
| 0x9405 | 0x01 | -- | -- | -- |
| 0x9406 | 0x01 | -- | -- | -- |
| 0x9407 | 0x01 | -- | -- | -- |
| 0x9408 | 0x01 | -- | -- | -- |
| 0x9409 | 0x01 | -- | -- | -- |
| 0x940A | 0x01 | -- | -- | -- |
| 0x940B | 0x01 | -- | -- | -- |
| 0x940C | 0x01 | -- | -- | -- |
| 0x940D | 0x01 | -- | -- | -- |
| 0x940E | 0x03 | -- | -- | -- |
| 0x940F | NOTL | -- | -- | -- |
| 0x9410 | -- | -- | -- | -- |
| 0x9411 | -- | -- | -- | -- |
| 0x9412 | -- | -- | -- | -- |
| 0x9413 | -- | -- | -- | -- |
| 0x9420 | 0x04 | -- | -- | -- |
| 0x9421 | 0x01 | -- | -- | -- |
| 0x9422 | 0x01 | -- | -- | -- |
| 0x9423 | 0x01 | -- | -- | -- |
| 0x9424 | 0x03 | -- | -- | -- |
| 0x9425 | 0x01 | -- | -- | -- |
| 0x9426 | 0x01 | -- | -- | -- |
| 0x9427 | 0x01 | -- | -- | -- |
| 0x9428 | 0x01 | -- | -- | -- |
| 0x9429 | 0x01 | -- | -- | -- |
| 0x942A | 0x01 | -- | -- | -- |
| 0x942B | 0x01 | -- | -- | -- |
| 0x942C | 0x01 | -- | -- | -- |
| 0x942D | 0x01 | -- | -- | -- |
| 0x942E | 0x03 | -- | -- | -- |
| 0x942F | NOTL | -- | -- | -- |
| 0x9430 | -- | -- | -- | -- |
| 0x9431 | -- | -- | -- | -- |
| 0x9432 | -- | -- | -- | -- |
| 0x9433 | -- | -- | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | unsigned char | -- |  18 | 255 | 0 |
| 0x02 | Betriebsstunden | min | -- | unsigned int | -- | 3 | 1 | 0 |
| 0x03 | Sensorspannung | Volt | -- | unsigned char | -- |  5 | 255 | 0 |
| 0x04 | Motortemperatur | °C | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x05 | Bordnetzspannung | Volt | -- | unsigned char | -- |  18 | 255 | 0 |
| 0x10 | NOT_SENS_DEFEKT | 0/1 | high | 0x01 | - | - | - | - |
| 0x11 | NOT_SENS_NOK | 0/1 | high | 0x02 | - | - | - | - |
| 0x12 | NOT_SCHR_VER_NOK | 0/1 | high | 0x04 | - | - | - | - |
| 0x13 | NOT_USENS_NOK | 0/1 | high | 0x08 | - | - | - | - |
| 0x14 | NOT_MOTOR_DEF | 0/1 | high | 0x10 | - | - | - | - |
| 0x15 | NOT_MOTOR_LWR_DEF | 0/1 | high | 0x20 | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### NOTL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 |

### LAMPNRTEXTE

| LAMPNR | NAME | TEXT |
| --- | --- | --- |
| 0x00 | AUSGANG_FL_LINKS | Fernlicht links, E92/E93: Abbiegelicht links |
| 0x01 | AUSGANG_FL_RECHTS | Fernlicht rechts, E92/E93: Abbiegelicht rechts |
| 0x02 | AUSGANG_AL_LINKS | Abblendlicht links |
| 0x03 | AUSGANG_AL_RECHTS | Abblendlicht rechts |
| 0x04 | AUSGANG_BEGRL_LINKS | Begrenzungslicht links |
| 0x05 | AUSGANG_BEGRL_RECHTS | Begrenzungslicht rechts |
| 0x06 | AUSGANG_NSW_LINKS | Nebelscheinwerfer links |
| 0x07 | AUSGANG_NSW_RECHTS | Nebelscheinwerfer rechts |
| 0x08 | AUSGANG_FRA_LINKS_VORN | Fahrtrichtungsanzeiger links vorne |
| 0x09 | AUSGANG_FRA_RECHTS_VORN | Fahrtrichtungsanzeiger rechts vorne |
| 0x0A | AUSGANG_FRA_LINKS_HINTEN | Fahrtrichtungsanzeiger links hinten |
| 0x0B | AUSGANG_FRA_RECHTS_HINTEN | Fahrtrichtungsanzeiger rechts hinten |
| 0x0C | UNBELEGT_1 | unbelegt 1 |
| 0x0D | AUSGANG_BEL_WBL_TASTE | Beleuchtung WBL-Taster |
| 0x0E | AUSGANG_BREMSLICHT_LINKS | Bremslicht links |
| 0x0F | AUSGANG_BREMSLICHT_RECHTS | Bremslicht rechts |
| 0x10 | AUSGANG_BREMSLICHT_MITTE | Bremslicht mitte |
| 0x11 | AUSGANG_SL_BL_LINKS_1 | Schlusslicht/Bremslicht links 1, E92/E93: Tagfahrlicht links |
| 0x12 | AUSGANG_SL_BL_RECHTS_1 | Schlusslicht/Bremslicht rechts 1, E92/E93: Tagfahrlicht rechts |
| 0x13 | AUSGANG_SL_BL_LINKS_2 | Schlusslicht/Bremslicht links 2 |
| 0x14 | AUSGANG_SL_BL_RECHTS_2 | Schlusslicht/Bremslicht rechts 2 |
| 0x15 | AUSGANG_KZL | Kennzeichenlicht |
| 0x16 | AUSGANG_INNENBELEUCHTUNG | Innenbeleuchtung |
| 0x17 | AUSGANG_NSL_LINKS | Nebelschlusslicht links |
| 0x18 | AUSGANG_NSL_RECHTS | Nebelschlusslicht rechts |
| 0x19 | AUSGANG_RFL_LINKS | Rueckfahrlicht links |
| 0x1A | AUSGANG_RFL_RECHTS | Rueckfahrlicht rechts |
| 0x1B | AUSGANG_BFD_LINKS | Break-Force-Display links |
| 0x1C | AUSGANG_BFD_RECHTS | Break-Force-Display rechts |
| 0x1D | AUSGANG_KL_58G | Klemme 58g |
| 0x1E | AUSGANG_FLC_LED | LED Fahrtlichtkontrolle |
| 0x1F | AUSGANG_VORFELD_BEL | LED Vorfeldbeleuchtung |
| 0xFF | UNKNOWN | unbekannte Lampe |

### FUNKTIONNRTEXTE

| FKTNR | NAME | TEXT |
| --- | --- | --- |
| 0x00 | FKT_FL | Fernlicht, E92/E93: Abbiegelicht |
| 0x01 | FKT_AL | Abblendlicht |
| 0x02 | FKT_SL | Standlicht |
| 0x03 | FKT_NSW | Nebelscheinwerfer |
| 0x04 | FKT_FRA_L | Fahrtrichtungsanzeiger links |
| 0x05 | FKT_FRA_R | Fahrtrichtungsanzeiger rechts |
| 0x06 | FKT_BL_STUFE1 | Bremslichtstufe 1 |
| 0x07 | FKT_BL_STUFE2 | Bremslichtstufe 2 |
| 0x08 | FKT_NSL | Nebelschlusslicht |
| 0x09 | FKT_RFS | Rueckfahrlicht |
| 0x0A | UNKNOWN | unbekannte Funktion |
| 0x0B | UNKNOWN | unbekannte Funktion |
| 0x0C | UNKNOWN | unbekannte Funktion |

### ZUSATZOUT

| OUTNR | NAME | TEXT |
| --- | --- | --- |
| 0x00 | UNKNOWN | unbekannter Ausgang |
| 0x00 | UNKNOWN | unbekannter Ausgang |
| 0x00 | UNKNOWN | unbekannter Ausgang |

### ENERGYSAVING

| E_MODE | NAME | TEXT |
| --- | --- | --- |
| 0x00 | ENERGY_MODE_AUS | Energysaving aus |
| 0x01 | ENERGY_MODE_PRODUCTION | Energysaving Produktion |
| 0x02 | ENERGY_MODE_SHIPMENT | Energysaving Shipment |
| 0x04 | ENERGY_MODE_REPAIR_SHOP | Energysaving Repair-Shop |
| 0x08 | ERROR | falscher Eingabewert |

### SMCS

| SMC | NAME | TEXT |
| --- | --- | --- |
| 0x89 | SMC_L | SMC links |
| 0x8A | SMC_R | SMC rechts |
| 0xFF | ERROR | falscher Eingabewert |

### REF_SMCS

| REF | NAME | TEXT |
| --- | --- | --- |
| 0x00 | REF_ALC_MIT | Referenzlauf Kurvenlicht mit Sensor |
| 0x01 | REF_ALC_OHNE | Referenzlauf Kurvenlicht ohne Sensor |
| 0x02 | REF_LWR | Referenzlauf LWR |
| 0xFF | ERROR | falscher Eingabewert |

### FH_RICHTUNG

| FH_R | NAME | TEXT |
| --- | --- | --- |
| 0x00 | NEUTRAL | Fenster nicht bewegen |
| 0x01 | OEFFNEN | Fenster oeffnen |
| 0x03 | SCHLIESSEN | Fenster schliessen |
| 0xFF | ERROR | falscher Eingabewert |

### AUSWAHL_FENSTER

| FH | NAME | TEXT |
| --- | --- | --- |
| 0x01 | 0 | Fensterheber Fahrertuer auswaehlen |
| 0x02 | 1 | Fensterheber Beifahrertuer auswaehlen |
| 0x03 | 2 | beide Fensterheber auswaehlen |
| 0x01 | FH_FAT | Fensterheber Fahrertuer auswaehlen |
| 0x02 | FH_BFT | Fensterheber Beifahrertuer auswaehlen |
| 0x03 | BEIDE_FH | beide Fensterheber auswaehlen |
| 0xFF | ERROR | falscher Eingabewert |

### AUSWAHL_SPIEGEL

| SPIEGEL | NAME | TEXT |
| --- | --- | --- |
| 0x01 | SPIEGEL_FAT | Spiegel Fahrertuer auswaehlen |
| 0x02 | SPIEGEL_BFT | Spiegel Beifahrertuer auswaehlen |
| 0xFF | ERROR | falscher Eingabewert |

### RICHTUNG_SPIEGEL

| SPIEGEL_R | NAME | TEXT |
| --- | --- | --- |
| 0x00 | NEUTRAL | Spiegel nicht bewegen |
| 0x01 | OBEN | Spiegel nach oben fahren |
| 0x02 | UNTEN | Spiegel nach unten fahren |
| 0x03 | LINKS | Spiegel nach links fahren |
| 0x04 | RECHTS | Spiegel nach rechts fahren |
| 0x05 | BEIKLAPPEN | Spiegel beiklappen |
| 0xFF | ERROR | falscher Eingabewert |

### SPIEGEL_HEIZUNG

| HEIZUNG | NAME | TEXT |
| --- | --- | --- |
| 0x00 | 0 | Spiegelheizung aus |
| 0x01 | 25 | Spiegelheizung 25% ein |
| 0x02 | 50 | Spiegelheizung 50% ein |
| 0x03 | 75 | Spiegelheizung 75% ein |
| 0x04 | 100 | Spiegelheizung 100% ein |
| 0x05 | 125 | Spiegelheizung 125% ein |
| 0x06 | UNBEGRENZT | Spiegelheizung unbegrenzt ein |
| 0x07 | UNGUELTIG | ungueltig |
| 0xFF | ERROR | falscher Eingabewert |
