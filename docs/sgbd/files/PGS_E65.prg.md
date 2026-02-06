# PGS_E65.prg

## General

|  |  |
| --- | --- |
| File | PGS_E65.prg |
| Type | PRG |
| Jobs | 106 |
| Tables | 24 |
| Origin | BMW Wolfgang Schmidbauer EI-61 |
| Revision | 1.00 |
| Author | Mikhail Vaisman + Werner Hoffmann Siemens AT BE AS CS6 SW |
| ECU Comment | Keine Bemerkung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | PGS E_65 |  |  |
| ORIGIN | string | BMW Wolfgang Schmidbauer EI-61 |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | Mikhail Vaisman + Werner Hoffmann Siemens AT BE AS CS6 SW |  |  |
| COMMENT | string | Keine Bemerkung |  |  |
| PACKAGE | string | 1.26 |  |  |
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

### STATUS_DIGITAL_ERROR

Auslesen des Status des digitalen Signales Fehlermeldung Endstufe KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_K_BUS_WUP

Auslesen des Status des digitalen Signales K_BUS_WUP KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RX_K_BUS

Auslesen des Status des digitalen Signales RX_K_BUS KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_NERR

Auslesen des Status des digitalen Signales NERR KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL5

Auslesen des Status des digitalen Signales RL5 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_EN0

Auslesen des Status des digitalen Signales EN0 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_STB0

Auslesen des Status des digitalen Signales STB0 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_FLASH_SHDN

Auslesen des Status des digitalen Signales FLASH_SHDN KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_O_LF_TRANSMITTER_ON

Auslesen des Status des digitalen Signales O_LF_TRANSMITTER_ON KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_P_1

Auslesen des Status des digitalen Signales P_1 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_P_2

Auslesen des Status des digitalen Signales P_2 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_P_3

Auslesen des Status des digitalen Signales P_3 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL_0

Auslesen des Status des digitalen Signales RL_0 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL_1

Auslesen des Status des digitalen Signales RL_1 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL_2

Auslesen des Status des digitalen Signales RL_2 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL_3

Auslesen des Status des digitalen Signales RL_3 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL_4

Auslesen des Status des digitalen Signales RL_4 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_DATA

Auslesen des Status des digitalen Signales DATA KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_WUP

Auslesen des Status des digitalen Signales WUP KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_TX_K_BUS

Auslesen des Status des digitalen Signales TX_K_BUS KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_RL6

Auslesen des Status des digitalen Signales RL6 KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL_ON_SNT

Auslesen des Status des digitalen Signales ON_SNT KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ANALOG_VBAT

Auslesen des Status von analogem Signal VBAT KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ANALOG_TEMP

Auslesen des Status von analogem Signal TEMP KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ANALOG_I_SEC

Auslesen des Status von analogem Signal I_SEC KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_CAN_SIGNAL_MILE_KM

Auslesen des Status von CAN Signal MILE_KM KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_DIGITAL

Ansteuern von I/O DigitalSignal mit DIGITALWERT KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $07 ShortTermAdjustment Ohne DIGITALWERT->Return Control To ECU Parameter: $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerSchreiben NAME TEXT |
| DIGITALWERT | string | Werte: true, false, on, off,... table DigitalArgument TEXT Achtung: Fehlt das Argument DIGITALWERT so wird die Kontrolle ueber Input/Output der ECU zurueckgegeben! |

### STEUERN_CAN_SIGNAL_INT

Ansteuern von CAN Signale mit CAN_WERT KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $07 ShortTermAdjusttment Ohne CAN_WERT -> ReturnControlToECU Parameter: $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANSignaleInt NAME EINHEIT TEXT MIN MAX |
| CAN_WERT | long | sehe Einheit in CANSignaleInt Achtung: Ohne dem Argument CAN_WERT wird die Kontrolle ueber dieses CAN Signal der ECU zurueckgegeben! |

### STATUS_ANTENNENKONFIGURATION

Liest 3 Byte "Antennenkonfiguration" fuer Siemens Endtester  KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $50-67 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ANTENNEN_NUMMER | int | Werte: 1...24 |

### STEUERN_ANTENNENKONFIGURATION

Schreibt 3 Byte "Antennenkonfiguration" fuer Siemens Endtester  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $50-67 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ANTENNEN_NUMMER | int | Werte: 1...24 |
| RELAY_KONFIG | unsigned char | ====>Byte0 |
| ANT_LEISTUNG | unsigned char | ====>Byte1 |
| FUNCTIONCODE | unsigned char | ====>Byte2 |

### STATUS_PGS_WUP

Liest 3 Byte "Wake-Up-Pattern"  KWP2000: $21   ReadDataByLocalIdentifier $70   WakeUpPattern lesen

_No arguments._

### STEUERN_PGS_WUP

Schreibt 3 Byte "Wake-Up-Pattern"  KWP2000: $3B WriteDataByLocalIdentifier $70   WakeUpPattern schreiben

| Name | Type | Description |
| --- | --- | --- |
| WUP | string | "Daten": z.B. "0x01,0x23,0x45" ======> Byte0-2 |

### STATUS_TAGE_WUP

Liest 3 Byte "Wake-Up-Pattern" (TAGE x)  KWP2000: $21   ReadDataByLocalIdentifier $71   WakeUpPattern lesen (TAGE1) $72   WakeUpPattern lesen (TAGE2) $73   WakeUpPattern lesen (TAGE3) $74   WakeUpPattern lesen (TAGE4)  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR TAGE_INDX |

### STEUERN_TAGE_WUP

Schreibt 3 Byte "Wake-Up-Pattern" (TAGE x)  KWP2000: $3B WriteDataByLocalIdentifier $71   WakeUpPattern schreiben (TAGE1) $72   WakeUpPattern schreiben (TAGE2) $73   WakeUpPattern schreiben (TAGE3) $74   WakeUpPattern schreiben (TAGE4)  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR TAGE_INDX |
| WUP | string | "Daten": z.B. "0x01,0x23,0x45" ======> Byte0-2 |

### STATUS_TAGE_KBUSADRESSE

Liest 1 Byte "KBUS-Adresse" (TAGE x)  KWP2000: $21   ReadDataByLocalIdentifier $75   KBUS-Adresse lesen (TAGE1) $76   KBUS-Adresse lesen (TAGE2) $77   KBUS-Adresse lesen (TAGE3) $78   KBUS-Adresse lesen (TAGE4)  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR TAGE_INDX |

### INT_STATUS_PGS_SLEEPTIMEOUT

Liest 4 Byte "Sleep_Timeout"  KWP2000: $21   ReadDataByLocalIdentifier $79   SleepTimeout lesen

_No arguments._

### INT_STEUERN_PGS_SLEEPTIMEOUT

Schreibt 4 Byte "Sleep_Timeout" fuer Siemens Endtester  KWP2000: $3B WriteDataByLocalIdentifier $79   SleepTimeout schreiben

| Name | Type | Description |
| --- | --- | --- |
| SLEEPTIME | unsigned long | "Daten": z.B. "6000" ======> Byte0-3 |

### STATUS_TAGE_ECU_ID

Auslesen der ECU-ID der TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $20 ECU-Identification lesen  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### STEUERN_TAGE_ECU_ID

Beschreiben der ECU-ID der TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $21 ECU-Identification schreiben  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |
| LONG_BMW_NR_WITH_8_DIGITS | unsigned long | Bereich: 0-99999999 bzw. 0x00-0x?? |
| BYTE_HARDWARE_NR | int | Bereich: 0-255 bzw. 0x00-0xFF |
| CODIER_INDEX | int | Bereich: 0-255 bzw. 0x00-0xFF |
| DIAGNOSE_INDEX | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_BUS_INDEX | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_PRODUCTION_YEAR | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_PRODUCTION_WEEK | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_PRODUCING_COMPY | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_TAGE_HERSTELLER_DATEN

Auslesen der Hersteller-Daten des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $22 Hersteller-Daten lesen  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### STEUERN_TAGE_HERSTELLER_DATEN

Beschreiben der Hersteller-Daten des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $23 Hersteller-Daten schreiben  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |
| PROD_INFO_BYTE_0 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| PROD_INFO_BYTE_1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| PROD_INFO_BYTE_2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| PROD_INFO_BYTE_3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_TAGE_PRUEFSTEMPEL

Auslesen der Pruefstempel-Daten des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $24 Pruefstempel lesen  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### STEUERN_TAGE_PRUEFSTEMPEL

Beschreiben der Pruefstempel-Daten des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $25 Pruefstempel schreiben  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |
| CHECK_INFO_BYTE_0 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| CHECK_INFO_BYTE_1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| CHECK_INFO_BYTE_2 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### MODE_TAGE_DIAGNOSE_BEENDEN

Beenden des Diagnose-Mode fuer TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $26 Diagnose-Mode beenden  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### STATUS_TAGE_IO

Auslesen des I/O-Status des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $29 I/O-Status lesen  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### STEUERN_TAGE_IO

Beschreiben des I/O-Status des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $2A I/O-Status schreiben  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |
| IO_STATUS_ADR | int | Bereich: 0-9 bzw. 0x00-0x09 |
| IO_STATUS_DAT | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_ECU_SELBSTTEST

SW-Selbsttest der ECU des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $2B ECU-Selbsttest  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  KBUS_ADR TAGE_INDX NAME |
| SELFTEST_NR | int | Werte: 1...255 (0x33 ist gesperrt !!!) ====> Byte0 |

### STATUS_TAGE_UHRZEIT

Auslesen der Uhrzeit im TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $2C Uhrzeit lesen  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### STEUERN_TAGE_UHRZEIT

Beschreiben der Uhrzeit im TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $2D Uhrzeit schreiben  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |
| WORD_SEKUNDEN_MAL_50 | unsigned int | Bereich: 0-2999 bzw. 0x00-0x0??? |
| WORD_MINUTEN | unsigned int | Bereich: 0-65525 bzw. 0x00-0xFFFF |

### STATUS_TAGE_CODEDATA_CHECKSUM

CodierDaten-Checksumme der ECU lesen KWP2000: $31 StartRoutineByLocalIdentifier LID: $2E CodierDaten-Checksumme lesen  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  KBUS_ADR TAGE_INDX NAME |

### MODE_TAGE_ECU_RESET

SW-Reset der ECU des TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $2F ECU-Reset  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  KBUS_ADR TAGE_INDX NAME |

### STATUS_PGS_ANTENNEN_TEST

4 Byte "Antennen-Testergebnis" lesen PGs-Antennen testen KWP2000: $31 StartRoutineByLocalIdentifier LID: $30 Antennen testen  PGS-Applikation fuehrt den Test durch

_No arguments._

### MODE_TAGE_SLEEP_STARTEN

Starten des Sleep-Mode fuer TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $31 Sleep-Mode starten  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

### MODE_TAGE_DIAGNOSE_FORTFUEHREN

Fortfuehren des Diagnose-Mode fuer TAGE KWP2000: $31 StartRoutineByLocalIdentifier LID: $32 Diagnose-Mode fortfuehren  SG PGS wird als Gateway zu den TAGE benutzt

| Name | Type | Description |
| --- | --- | --- |
| TAGE_KBUS_ADR | string | 0x02=TAGE_FT / 0x04=TAGE_FTH / 0x08=TAGE_BFT / 0x10=TAGE_BFTH table TAGE_KBus_Adressen  NAME KBUS_ADR |

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
| 0xD2C4 | K_CAN_LOW |
| 0xD2C5 | K_CAN_HIGH |
| 0xD2C6 | GroundShift |
| 0xD2C7 | CAN_Controller |
| 0xD2FC | Fehlerwert_erhalten |
| 0xD2FD | Unplausibles_Signal |
| 0xD2FE | Telegramm_Timeout_beim_Emfang |
| 0xD2FF | Fehler_beim_Emfang_NM_Botschaft |
| 0xD300 | Fehlerwert_gesendet |
| 0xD301 | Unplausibles_Signal1 |
| 0xD302 | Telegramm_Timeout_beim_Senden |
| 0xD303 | Fehler_beim_Senden_NM_Botschaft |
| 0xA068 | PGS_Innenraumantennen_vorne_defekt |
| 0xA069 | Innenraumantennen_hinten_defekt |
| 0xA06A | Kofferraumantenne_defekt |
| 0xA06B | Stossfaengerantennen_defekt |
| 0xA072 | PGS_RelaisTrei_defekt |
| 0xA073 | PGS_PGS_WUP_geaendert |
| 0xA074 | PGS_Reserve_Fehler_20 |
| 0xA075 | PGS_Reserve_Fehler_19 |
| 0xA076 | PGS_Reserve_Fehler_18 |
| 0xA077 | PGS_Reserve_Fehler_17 |
| 0xA078 | PGS_Reserve_Fehler_16 |
| 0xA079 | PGS_Reserve_Fehler_15 |
| 0xA07A | PGS_Reserve_Fehler_14 |
| 0xA07B | PGS_Reserve_Fehler_13 |
| 0xA07C | PGS_Reserve_Fehler_12 |
| 0xA07D | PGS_Reserve_Fehler_11 |
| 0xA07E | PGS_Reserve_Fehler_10 |
| 0xA07F | PGS_Reserve_Fehler_09 |
| 0xA080 | PGS_Reserve_Fehler_08 |
| 0xA081 | PGS_Reserve_Fehler_07 |
| 0xA082 | PGS_Reserve_Fehler_06 |
| 0xA083 | PGS_Reserve_Fehler_05 |
| 0xA084 | PGS_Reserve_Fehler_04 |
| 0xA085 | PGS_Reserve_Fehler_03 |
| 0xA086 | PGS_Reserve_Fehler_02 |
| 0xA087 | PGS_Reserve_Fehler_01 |
| 0xA088 | TAGE1_Watchdog_Reset |
| 0xA089 | TAGE1_Watchdog_Timer |
| 0xA08A | TAGE1_Abic_reagiert_nicht |
| 0xA08B | TAGE1_Ubat_ausserhalb_ULF |
| 0xA08C | TAGE1_Antennen defekt |
| 0xA08D | TAGE1_Timeout_Kap_Sensor |
| 0xA08E | TAGE1_Timeout_Dru_Sensor |
| 0xA08F | TAGE1_Timeout_Zug_Sensor |
| 0xA090 | TAGE1_Spielschutz_aktiv |
| 0xA091 | TAGE1_Checksum_EEPROM |
| 0xA092 | TAGE1_Checksum_ROM |
| 0xA093 | TAGE1_Interrupt_unused |
| 0xA094 | TAGE1_ErrorCode_unknown |
| 0xA095 | TAGE1_Coding_TimeoutKBus |
| 0xA096 | TAGE1_WUP_falsche_Antwort |
| 0xA097 | TAGE1_WUP_keine_Antwort |
| 0xA098 | TAGE2_Watchdog_Reset |
| 0xA099 | TAGE2_Watchdog_Timer |
| 0xA09A | TAGE2_Abic_reagiert_nicht |
| 0xA09B | TAGE2_Ubat_ausserhalb_ULF |
| 0xA09C | TAGE2_Antennen defekt |
| 0xA09D | TAGE2_Timeout_Kap_Sensor |
| 0xA09E | TAGE2_Timeout_Dru_Sensor |
| 0xA09F | TAGE2_Timeout_Zug_Sensor |
| 0xA0A0 | TAGE2_Spielschutz_aktiv |
| 0xA0A1 | TAGE2_Checksum_EEPROM |
| 0xA0A2 | TAGE2_Checksum_ROM |
| 0xA0A3 | TAGE2_Interrupt_unused |
| 0xA0A4 | TAGE2_ErrorCode_unknown |
| 0xA0A5 | TAGE2_Coding_TimeoutKBus |
| 0xA0A6 | TAGE2_WUP_falsche_Antwort |
| 0xA0A7 | TAGE2_WUP_keine_Antwort |
| 0xA0A8 | TAGE3_Watchdog_Reset |
| 0xA0A9 | TAGE3_Watchdog_Timer |
| 0xA0AA | TAGE3_Abic_reagiert_nicht |
| 0xA0AB | TAGE3_Ubat_ausserhalb_ULF |
| 0xA0AC | TAGE3_Antennen defekt |
| 0xA0AD | TAGE3_Timeout_Kap_Sensor |
| 0xA0AE | TAGE3_Timeout_Dru_Sensor |
| 0xA0AF | TAGE3_Timeout_Zug_Sensor |
| 0xA0B0 | TAGE3_Spielschutz_aktiv |
| 0xA0B1 | TAGE3_Checksum_EEPROM |
| 0xA0B2 | TAGE3_Checksum_ROM |
| 0xA0B3 | TAGE3_Interrupt_unused |
| 0xA0B4 | TAGE3_ErrorCode_unknown |
| 0xA0B5 | TAGE3_Coding_TimeoutKBus |
| 0xA0B6 | TAGE3_WUP_falsche_Antwort |
| 0xA0B7 | TAGE3_WUP_keine_Antwort |
| 0xA0B8 | TAGE4_Watchdog_Reset |
| 0xA0B9 | TAGE4_Watchdog_Timer |
| 0xA0BA | TAGE4_Abic_reagiert_nicht |
| 0xA0BB | TAGE4_Ubat_ausserhalb_ULF |
| 0xA0BC | TAGE4_Antennen defekt |
| 0xA0BD | TAGE4_Timeout_Kap_Sensor |
| 0xA0BE | TAGE4_Timeout_Dru_Sensor |
| 0xA0BF | TAGE4_Timeout_Zug_Sensor |
| 0xA0C0 | TAGE4_Spielschutz_aktiv |
| 0xA0C1 | TAGE4_Checksum_EEPROM |
| 0xA0C2 | TAGE4_Checksum_ROM |
| 0xA0C3 | TAGE4_Interrupt_unused  |
| 0xA0C4 | TAGE4_ErrorCode_unknown |
| 0xA0C5 | TAGE4_Coding_TimeoutKBus |
| 0xA0C6 | TAGE4_WUP_falsche_Antwort |
| 0xA0C7 | TAGE4_WUP_keine_Antwort |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Km-Stand1 | km | - | unsigned int | - | 8 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | PGS_Uebertemperatur |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

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

### IODIGITALSIGNALEFUERSCHREIBEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x14 | K_BUS_WUP | Wake-Up-Signal vom K-Bus |
| 0x15 | RX_K_BUS | PA_SUB_BUS (RX) |
| 0x16 | NERR | CAN - Signale |
| 0x50 | RL5 | Relaisansteuerung Gepaeckraumantenne |
| 0x51 | EN0 | CAN - Signale |
| 0x52 | STB0 | CAN - Signale |
| 0x53 | FLASH_SHDN | int. Flashspannung (12V) einschalten |
| 0x55 | P_1 | Leistungseinstellung Endstufe Bit1 |
| 0x56 | P_2 | Leistungseinstellung Endstufe Bit2 |
| 0x57 | P_3 | Leistungseinstellung Endstufe Bit3 |
| 0x58 | RL0 | Relaisansteuerung Umpolung |
| 0x59 | RL1 | Relaisansteuerung Heck-Antenne 1 |
| 0x5A | RL2 | Relaisansteuerung Heck-Antenne 2 |
| 0x5B | RL3 | Relaisansteuerung Innenraum-Antenne 1 |
| 0x5C | RL4 | Relaisansteuerung Innenraum-Antenne 2 |
| 0x5D | DATA | Datenleitung fuer induktives Sendeprotokoll |
| 0x5E | WUP | Wake-Up-Signal fuer FBD-Empfaenger |
| 0x5F | TX_K_BUS | PA_SUB_BUS (TX) |
| 0x60 | RL6 | Relaisansteuerung Hutablage-Antenne |
| 0x61 | ON_SNT | Schaltnetzteil |

### ANALOGSIGNALEFUERLESEN

| IOLI | NAME | EINHEIT | MUL | DIV | ADD | TEXT |
| --- | --- | --- | --- | --- | --- | --- |
| 0xA0 | VBAT | Volt | 1416 | 44236.8 | 0 | Diagnoseleitung der KL30 (+12V) |
| 0xA1 | TEMP | Volt | 5 | 1024 | 0 | Temperatur der Endstufe |
| 0xA2 | I_SEC | Ampere | 3.546 | 15360 | 0.014184 | Strom des Antennnen-Ausgangs |

### CANSIGNALEINT

| IOLI | NAME | BYTE | EINHEIT | KF1 | KF2 | DIF | MIN | MAX | TEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xB0 | MILE_KM | 3 | Km | 1 | 1 | 0 | 0 | 16777214 | Wegstrecke_Kilometer |

### TAGE_KBUS_ADRESSEN

| KBUS_ADR | TAGE_INDX | NAME |
| --- | --- | --- |
| 0x02 | 0x00 | TAGE_FT |
| 0x04 | 0x01 | TAGE_FTH |
| 0x08 | 0x02 | TAGE_BFT |
| 0x10 | 0x03 | TAGE_BFTH |

### CODEDATA_BLOCK_ADRESSEN

| BLOCK_INDX | NAME |
| --- | --- |
| 0x00 | TAGE_INDEX |
| 0x01 | ZEIT_RUNIN |
| 0x02 | WUP |
