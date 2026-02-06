# KGM_60.prg

## General

|  |  |
| --- | --- |
| File | KGM_60.prg |
| Type | PRG |
| Jobs | 123 |
| Tables | 35 |
| Origin | BMW EI-61 Herter |
| Revision | 3.005 |
| Author | LEAR DCS Ahrens, LEAR DCS Scheler, LEAR DCS Schmidt |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KGM_60 |  |  |
| ORIGIN | string | BMW EI-61 Herter |  |  |
| REVISION | string | 3.005 |  |  |
| AUTHOR | string | LEAR DCS Ahrens, LEAR DCS Scheler, LEAR DCS Schmidt |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.29 |  |  |
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

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### _CODIERDATEN_BLOCK_LESEN_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Bereich: 0x30xx bis 0x3Dxx |

### _CODIERDATEN_BLOCK_SCHREIBEN_LEAR

Beschreiben der Codierdaten je nach Block KWP2000: $2E WriteDataByCommonIdentifier $xxxx Codierdaten Modus  : Codieren je nach Block

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN | string | Block+Codierdaten |

### _CODIERDATEN_3900_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3900-Bereich Auslesen der KGM-Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3900_SCHREIBEN_AUS_DATEI_LEAR

Beschreiben der Default-Codierdaten Beschreiben der KGM-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $39xx Codierdaten, Default Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten fuer 3900-Bereich Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _CODIERDATEN_3800_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3800-Bereich Auslesen der KGM-Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3800_SCHREIBEN_AUS_DATEI_LEAR

Beschreiben der Default-Codierdaten Beschreiben der KGM-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $38xx Codierdaten, Default Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten fuer 3800-Bereich Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _FEHLERSPEICHER_EEPROM_LOESCHEN_LEAR

KWP2000: $2E WriteDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

_No arguments._

### STATUS_MICROPOWERMODULE

Auslesen der Zustände und Funktions-Variablen vom Modul MPM Das MPM-Relais schaltet die Klemme 30g_f KWP2000: $30 InputOutputControlByLocalIdentifier $20 MPM_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_DIGITAL_INPUTS

Auslesen der Stati von den digitalen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Inputs $01 ReportCurrentState

_No arguments._

### STATUS_ANALOG_INPUTS

Auslesen der Stati von den analogen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $02 Analoge Inputs $01 ReportCurrentState

_No arguments._

### STATUS_LICHT

Auslesen der Zustände und Variablen vom Modul ASL/VFB (Ausstiegsleuchte/Vorfeldbeleuchtung) KWP2000: $30 InputOutputControlByLocalIdentifier $21 ESL_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_SCHALTERBLOCK_TUER

Auslesen der Variablen vom Modul LSB (LIN-Schalterblock) KWP2000: $30 InputOutputControlByLocalIdentifier $22 LSB_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_SERVOTRONIC

Auslesen der Zustände und Variablen vom Funktions-Modul SVT (Servotronic) KWP2000: $30 InputOutputControlByLocalIdentifier $23 SVT_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_MEMORY_POSITION_SPIEGEL

Abfrage der MemoryPosition der beiden Aussenspiegel KWP2000: $30 InputOutputControlByLocalIdentifier $0A Position Spiegel $01 ReportCurrentState

| Name | Type | Description |
| --- | --- | --- |
| MEM_POS | int | 1 bis 254 welche Memoryposition |

### _STATUS_READ_VARS_COMICRO

Auslesen der Variablen vom Funktions-Modul Co-Microprozessor KWP2000: $30 InputOutputControlByLocalIdentifier $26 COMICRO_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_ZENTRALVERRIEGELUNG

Auslesen der Variablen vom Funktions-Modul Zentralverriegelung KWP2000: $30 InputOutputControlByLocalIdentifier $27 ZV__VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_SCHLOSSNUESSE

Auslesen der Variablen vom Funktions-Modul Schaltnuss KWP2000: $30 InputOutputControlByLocalIdentifier $28 SNU_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_BUSLAST

Daten zur Buslast KWP2000: $30 InputOutputControlByLocalIdentifier $2A ESL_VAR_READ $01 ReportCurrentState

_No arguments._

### _STATUS_BIOS_VIRT_SIG

Auslesen der Bussignale KWP2000: $30 InputOutputControlByLocalIdentifier $2B BIOS_VAR_READ $01 ReportCurrentState

_No arguments._

### STATUS_SPIEGEL

Auslesen der Zustände und Variablen vom Modul LIN-Spiegel (Außenspiegel FA/BF) KWP2000: $30 InputOutputControlByLocalIdentifier $24 ASP_VAR_READ $01 ReportCurrentState

_No arguments._

### STEUERN_MICROPOWERMODULE

Vorgabe der Relaiszustaende des MicroPowerModuls KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTimeAccess $03 MPM Outputs

| Name | Type | Description |
| --- | --- | --- |
| MPM_RELAIS_SCHALTEN | string | Relais ein/aus-schalten,siehe Tabelle STEUERN_MPM Standverbraucher zeitkodiert ausschalten, siehe Tabelle STEUERN_MPM |

### STEUERN_LICHT

Vorgabe der Schaltzustaende der Ausstiegsleuchte ASL, Vorfeldbeleuchtung VFB Und LED´s des Schalterblocks KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTimeAccess $04 ESL Outputs

| Name | Type | Description |
| --- | --- | --- |
| LICHT_SCHALTEN | string | siehe Tabelle STEUERN_LICHT |

### STEUERN_POSITION_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $06 Steuern Spiegel

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_SPIEGEL | string | table Auswahl_Spiegel NAME TEXT |
| RICHTUNG_SPIEGEL | string | table Richtung_Spiegel NAME TEXT |
| ANSTEUER_ZEIT_SPIEGEL | int | Zeit in 100ms, die der Spiegel angesteuert werden soll, d.h. 1 = 100ms |

### STEUERN_SPIEGEL_ABBLENDEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $06 Steuern Spiegel Abblenden der Aussenspiegel

| Name | Type | Description |
| --- | --- | --- |
| SPIEGEL_ABBLENDEN_WERT | int | Wert 0 -100%, wie Aussenspiegel abgeblendet werden soll, zb. 40 = 40% Abblendgrad |

### STEUERN_SPIEGELHEIZUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $06 Steuern Spiegel Spiegelheizung mit speziellen Werten eischalten

| Name | Type | Description |
| --- | --- | --- |
| SPIEGELHEIZUNG_WERT | string | Wert fuer Spiegelheizung, siehe Tabelle "Spiegel_Heizung" |

### STEUERN_MEMORY_POSITION_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $06 Steuern Spiegel Memory Schreiben der MemoryPosition der beiden Aussenspiegel

| Name | Type | Description |
| --- | --- | --- |
| MEM_POS | int | 1 bis 254 welche Memoryposition |
| MEM_POS_SPIEGEL_FAHRER_VER_WERT | int | Inkrement, Position Fahrerspiegel vertikal |
| MEM_POS_SPIEGEL_FAHRER_HOR_WERT | int | Inkrement, Position Fahrerspiegel horizontal |
| MEM_POS_SPIEGEL_BEIFAHRER_VER_WERT | int | Inkrement, Position Beifahrerspiegel vertikal |
| MEM_POS_SPIEGEL_BEIFAHRER_HOR_WERT | int | Inkrement, Position Beifahrerspiegel horizontal |

### STEUERN_POSITION_DIREKT_SPIEGEL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $06 Steuern Spiegel ausgewaehlten Spiegel in angegebene Position fahren

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_SPIEGEL | string | table Auswahl_Spiegel NAME TEXT Spiegel auswaehlen |
| RICHTUNG_SPIEGEL_HORIZONTAL | int | Inkrement 0 - 254, Absolutwert horizontale Position |
| RICHTUNG_SPIEGEL_VERTIKAL | int | Inkrement 0 - 254, Absolutwert vertikale Position |

### STEUERN_SERVOTRONIC

Steuerung des Stromwandlers KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTimeAccess $05 SVT Outputs

| Name | Type | Description |
| --- | --- | --- |
| VORGABE_ART_SERVO_WANDLER | string | "STROM", Steuerung Servo-Wandler über Strom-Vorgabe (in mA, siehe Argument 2) "PWM", Steuerung Servo-Wandler über PWM-Vorgabe (in %, siehe Argument 2) |
| VORGABE_WERT_SERVO_WANDLER | unsigned int | 0-1000 mA bei Strom-Vorgabe 0-100 % bei PWM-Vorgabe |

### STEUERN_ZENTRALVERRIEGELUNG

Vorgabe der Schaltzustaende der Zentralverriegelung KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTimeAccess $08 ZV__OUTPUTS

| Name | Type | Description |
| --- | --- | --- |
| ZV_SCHALTEN | string | Beide Schlösser entriegeln, verriegeln und sichern Argument siehe Tabelle "STEUERN_ZV" |

### STEUERN_SITZHEIZUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0D Steuern Sitzheizung

| Name | Type | Description |
| --- | --- | --- |
| LINDATEN_SEAT_HEAT | string | 4 Byte Daten fuer Sitzheizung, werden einfach durchgereicht |

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_1

EnergieDatenSpeicher Teil 1 -Einschlafverhinderer- auslesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE0 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_2

EnergieDatenSpeicher Teil 2 -Wecker- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE1 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_3

EnergieDatenSpeicher Teil 3 - Wecker-ID - auslesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE2 commonProjectSpecific

_No arguments._

### STEUERN_HISTORIENSPEICHER_LOESCHEN

EnergieDatenSpeicher loeschen KWP 2000: $22   WriteDataByCommonIdentifier KWP 2000: $EFE3 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| FDM_BLOCK | int | " 1 " , um Datensatz Teil 1 "Einschlafverhinderer" zu löschen " 2 " , um Datensatz Teil 2 "Wecker" zu löschen " 3 " , um Datensatz Teil 3 "Wecker-ID" zu löschen ohne Argument, um alle Datensätze zu löschen |

### _FLASH_COMICRO

Internen Flashvorgang des Co-Prozessors anstossen KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE4 commonProjectSpecific

_No arguments._

### _BRIF_SCHREIBEN_LEAR

Beschreiben der BRIF-Inhalte KWP 2000: $3B ApplDiagWriteDataByLocalIdentifier Modus   : 0x70 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BRIF_DATEI | string | Dateiname mit Default-Codierdaten fuer 3900-Bereich Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |

### _LEAR_PROD_DATEN_SCHREIBEN

Beschreiben von Teilen des BRIF, laufenden SG-Nur., Produktionsdatum Es muessen immer alle Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. KWP2000: $3B WriteDataByCommonIdentifier $70 BRIF schreiben Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SSECUSN_BYTE_1 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_2 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_3 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_4 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_5 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_6 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_7 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_8 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| SSECUSN_BYTE_9 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| DOECUM_BYTE_1 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| DOECUM_BYTE_2 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| DOECUM_BYTE_3 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| DOECUM_BYTE_4 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| HW_INDEX_X | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |

### _HERSTELLERDATEN_LESEN

Auslesen der Herstellerdaten KWP2000: $21 ReadDataByLocalIdentifier $72 Herstellerdaten Modus  : Default

_No arguments._

### _HERSTELLERDATEN_SCHREIBEN

Beschreiben der Herstellerdaten Es muessen immer alle Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. KWP2000: $3B WriteDataByCommonIdentifier $71 Herstellerdaten Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE_1 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_2 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_3 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_4 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_5 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_6 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_7 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_8 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_9 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE_10 | unsigned char | Bereich: 0-255 bzw. 0x00-0xFF |

### _LINKINFO_GWVERSION_LESEN

Auslesen der Herstellerdaten KWP2000: $21 ReadDataByLocalIdentifier $73 LinkInfo Modus  : Default

_No arguments._

### _KGM_SEND_MESSAGE

Auslesen der Stati von den digitalen Eingaengen KWP2000: $31 StartRoutineByLocalIdentifier $11 CommonSwitch

| Name | Type | Description |
| --- | --- | --- |
| CAN_SELECTION | unsigned int | "1" fuer K_CAN, oder "2" fuer PT_CAN |
| ECU_ADRESS | unsigned int | SG-Adresse, zB. 0x0600 für KGM |
| MESSAGE_DLC | unsigned int | Telegramm-Länge |
| DATABYTE_1 | unsigned int |  |
| DATABYTE_2 | unsigned int |  |
| DATABYTE_3 | unsigned int |  |
| DATABYTE_4 | unsigned int |  |
| DATABYTE_5 | unsigned int |  |
| DATABYTE_6 | unsigned int |  |
| DATABYTE_7 | unsigned int |  |
| DATABYTE_8 | unsigned int |  |

### STATUS_FENSTERHEBER

Stati der einzelnen FH-Funktionen auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $25 FH__VAR_READ $01 ReportCurrentState

_No arguments._

### _STATUS_FH_ADAPTIONSWERTE

Die Adaptionswerte sind ein Maß der mechanischen Güte des FH-Antriebs Auswertung grafisch linear (f->f(x), x = Byteposition, f = Bytewert) Modus  : Default KWP2000: $22 ReadDataByCommonIdentifier $37xx Speicherdaten je nach FH-Seite

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | table Auswahl_Fenster NAME TEXT Auswahl des Fensterhebers, dessen Adaptionswerte ausgelesen werden soll: "FH_FA" für Fahrer, "FH_BF" für Beifahrer |

### STATUS_FH_DENORM_LOGGER_LOESCHEN

Denormierungslogger löschen KWP2000: $30 InputOutputControlByLocalIdentifier $25 FH__VAR_READ $07 ShortTimeAccess

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_LOGGER | unsigned char | "1" fuer Denormierungslogger "2" fuer Reversierungslogger |

### STATUS_FH_LOGGER_DENORMIERER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $13 EE_FH_LOG_DATA Lesen der letzten drei Einträge von EE_FH_LOG_DATA

_No arguments._

### _STATUS_FH_DENORMIERUNGS_LOGGER_LESEN

Fensterheber Denorierungslogger auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $25 FH__VAR_READ $01 ReadCurrentState $14 SUBSWITCH

_No arguments._

### STATUS_FH_LOGGER_REVERSIERER

Fensterheber Reversierlogger auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $25 FH__VAR_READ $01 ReadCurrentState $16 SUBSWITCH

_No arguments._

### _STATUS_FH_REVERSIERUNGS_LOGGER_LESEN

Fensterheber Reversierlogger auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $25 FH__VAR_READ $01 ReadCurrentState $16 SUBSWITCH

_No arguments._

### _STEUERN_FENSTERHEBER_DIAGNOSE_BROSE

KWP2000: $30 InputOutputControlByLocalIdentifier $07 Diagnose Jobs 1-5 fuer BROSE-FH $07 ShortTermAdjustment Status von KGM schreiben

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_JOB | unsigned char | "1" fuer Job 1,..., "5" fuer Job 5 |
| BYTE_1 | unsigned char |  |
| BYTE_2 | unsigned char |  |
| BYTE_3 | unsigned char |  |
| BYTE_4 | unsigned char |  |
| BYTE_5 | unsigned char |  |

### STEUERN_FENSTERHEBER_MIT_EKS_EINLERNEN

Einlernen der Fensterheber mit Einklemmschutz (EKS) KWP2000: $30 InputOutputControlByLocalIdentifier $07 Ansteuern FH $07 ShortTermAdjustment Dauer max. 14sec

| Name | Type | Description |
| --- | --- | --- |
| HUBLAENGE_FH_FAT | unsigned int | Hublaenge über den kompl. Verfahrweg des FH-Fahrertuer bei 0 wird der FH nicht eingelernt Weginkrement, Bereich von 1100 - 1300 wird kein Argument angegeben so wird die codierte Hublaenge verwendet |
| HUBLAENGE_FH_BFT | unsigned int | Hublaenge über den kompl. Verfahrweg des FH-Beifahrertuer bei 0 wird der FH nicht eingelernt Weginkrement, Bereich von 1100 - 1300 wird kein Argument angegeben so wird die codierte Hublaenge verwendet |

### STEUERN_FENSTERHEBER_DENORMIEREN

Denormieren der Fensterheber, je nach Auswahl Fahrer, Beifahrer, beide KWP2000: $30 InputOutputControlByLocalIdentifier $07 Ansteuern FH $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | table Auswahl_Fenster NAME TEXT Auswahl des Fensterhebers, der denormiert werden soll: FH_FA für Fahrer, FH_BF für Beifahrer, BEIDE_FH für beide |

### STEUERN_FENSTERHEBER

Ansteuerung des Fensterhebers an der Fahrertuer (FA) und/oder der Beifahrertuer (BF) KWP2000: $30 InputOutputControlByLocalIdentifier $07 Steuern Fensterheber $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | int | Gibt die Art der Ansteuerung für die Fensterheber an = Zahlenwert der Spalte ARGUMENT aus Tabelle STEUERN_FH_FAT_BFT: Die Bedeutung von ELEMENT steht in Spalte NAME und BESCHREIBUNG |
| AKTION | int | Ansteuerzeit für die Fensterheber-Motoren: 0 - 100 Zeitangabe in 100ms-Schritten = 0 - 10s Ansteuerzeit |

### _STEUERN_FENSTERHEBER_OHNE_EKS

Ansteuerung des Fensterhebers an beiden Tueren ACHTUNG: Einklemmschutz ABGESCHALTET, keine Normierung erforderlich KWP2000: $30 InputOutputControlByLocalIdentifier $07 Steuern Fensterheber $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| LAUFZEIT_FAT | int | Ansteuerzeit für den Fensterheber Fahrertuer: (-100) - (+100) Zeitangabe in 100ms-Schritten = 0 - 10s Ansteuerzeit Richtung über Vorzeichen: positiv=oeffnen, negativ=schliessen |
| LAUFZEIT_BFT | int | Ansteuerzeit für den Fensterheber Beifahrertuer: (-100) - (+100) Zeitangabe in 100ms-Schritten = 0 - 10s Ansteuerzeit Richtung über Vorzeichen: positiv=oeffnen, negativ=schliessen |

### _FH_FAT_KURZHUB_INIT_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

_No arguments._

### _FH_BFT_KURZHUB_INIT_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

_No arguments._

### _STEUERN_FH_INIT_DICHTUNG_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INIT_FAT_DICHTUNG | int | von 0 - 254 Anzahl von FH-Hub ohne Softclose |
| INIT_BFT_DICHTUNG | int | von 0 - 254 Anzahl von FH-Hub ohne Softclose |

### _STATUS_FH_INIT_DICHTUNG_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $3930 Codierdaten aus Info-Block Modus  : Default

_No arguments._

### STATUS_LADERAUMABDECKUNG

Status der Laderaumabdeckung (Lara CRoFt) KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $2C LARA_VAR_READ

_No arguments._

### STEUERN_LADERAUMABDECKUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0C Steuern Laderaumabdeckung

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_STELLUNG | string | Ziel als String aus Tabelle Steuern_LARA_POS Spalte NAME oder numerischer Wert für Zielposition nach unten |

### _STEUERN_LARA_LEAR

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0C Steuern Laderaumabdeckung

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_RICHTUNG | int | "1" für nach unten, "2" für nach oben |
| AUSWAHL_MODE | int | "2" für Laderaum-LCPA, andere Modi zulässig (1-6) |
| AUSWAHL_ENDANSCHLAG | int | "1" für Endanschlagerkennung LCPA, andere Einstellungen zulässig (0-2) |
| POSITION_LADERAUMABDECKUNG | unsigned int | Zielposition 0-5000, sinnvoll für Lara: 0 (=oben) bis 454 (=unten) |
| LINDATEN_LARA | string | 4 Byte Daten fuer Lara, werden einfach durchgereicht LINDATEN überschreiben die vorherigen Werte |

### _LARA_COUNTER_RESET

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default KWP2000: $2E WriteDataByCommonIdentifier Kodierblock lesen, verändern, zurückschreiben

| Name | Type | Description |
| --- | --- | --- |
| LARA_COUNTER | string | Welche(r) Block soll gelöscht werden "BLOCKS","REVERSES","NORMS","ALL" |

### _CODIEREN_LCPA

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0e CODIEREN LCPA

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_LCPA | string | 4 Byte Daten fuer Kodierung, werden einfach durchgereicht |

### _CKS_LCPA

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0e CKS LCPA

| Name | Type | Description |
| --- | --- | --- |
| CKS_DATEN_LCPA | string | 4 Byte Daten fuer CKS, werden einfach durchgereicht |

### READ_LCPA_IDENT

ident lesen des LIN-Slave CPA Standard Codierjob KWP2000: $A6 LINGateway $1A ReadECUIdentification $8A ID-LCPA Modus  : Default Auslesen der Identdaten der LCPA

| Name | Type | Description |
| --- | --- | --- |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### C_FG_SCHREIBEN_LCPA

Schreiben der FG-Nr. in den LCPA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FG_NR_LCPA | string | Fahrgestellnummer LCPA (18-stellig) |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### C_FG_LESEN_LCPA

Lesen der FG-Nr. aus dem LCPA KWP2000: $A6 LINGateway $22 ReadDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### C_FG_AUFTRAG_LCPA

Schreiben und Lesen der FG-Nr. LCPA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FG_NR_LCPA | string | Fahrgestellnummer LCPA (18-stellig) |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### C_AEI_SCHREIBEN_LCPA

Schreiben des Aenderungsindex in den LCPA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| AEI_LCPA | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### C_AEI_LESEN_LCPA

Lesen des Aenderungsindex aus dem LCPA KWP2000: $A6 LINGateway $22 ReadDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### C_AEI_AUFTRAG_LCPA

Schreiben und Lesen des Aenderungsindex LCPA KWP2000: $A6 LINGateway $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| AEI_LCPA | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers |

### RESET_LCPA

Reset LCPA KWP2000: $A6 LINGateway $11 Reset

| Name | Type | Description |
| --- | --- | --- |
| NAD | int | NAD des gewuenschten LIN-Teilnehmers Wenn nicht angegeben, wird 0xCA für das LCPA angenommen |

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
| 0xC904 | CAN-Low, Physikalischer Fehler |
| 0xC905 | CAN-High, Kurzschluss VB |
| 0xC906 | Ground Shift, zu hoch |
| 0xC907 | Controller K-CAN, Bus Off |
| 0xC908 | Controller PT-CAN, Bus Off |
| 0x93A8 | interner Fehler |
| 0x93A9 | Klemme 30A Anschluss fehlerhaft |
| 0x93AA | Klemme 30B Anschluss fehlerhaft |
| 0x93AB | Relaiskleber MPM-Relais ein |
| 0x93AC | Relaiskleber MPM-Relais aus |
| 0x93AD | MPM kein SVIN |
| 0x93AE | Hallsensor FH-Fahrertuer defekt |
| 0x93AF | Hallsensor FH-Beifahrertuer defekt |
| 0x93B0 | Relais FH-Fahrertuer defekt |
| 0x93B1 | Relais FH-Beifahrertuer defekt |
| 0x93B2 | Spiegelheizung Fahrerseite defekt |
| 0x93B3 | Antrieb Spiegel Fahrerseite defekt |
| 0x93B4 | Antrieb Beiklappen Spiegel Fahrerseite defekt |
| 0x93B5 | Spiegelheizung Beifahrerseite defekt |
| 0x93B6 | Antrieb Spiegel Beifahrerseite defekt |
| 0x93B7 | Antrieb Beiklappen Spiegel Beifahrerseite defekt |
| 0x93B8 | Servotronik: Timeout Klemmentelegramm |
| 0x93B9 | Servotronik: Klemme 15 ungueltig |
| 0x93BA | Servotronik: Motortimeout |
| 0x93BB | Servotronik: Motorstatus ungueltig |
| 0x93BC | Servotronik: DSC Telegrammtimeout |
| 0x93BD | Servotronik: Geschwindigkeit ungueltig |
| 0x93BE | Servotronik: Klemme 30A fehlt |
| 0x93BF | Servotronik: FDC Timeout |
| 0x93C0 | Servotronik: FDC-Modus ungueltig |
| 0x93C1 | Servotronik: Hardware defekt |
| 0x93C2 | Schaltnuss: Kontakt defekt |
| 0x93C3 | Zentralverriegelung: Kurzschluss Leitung ZV_MER |
| 0x93C4 | Zentralverriegelung: Kurzschluss Leitung ZV_MVFRT |
| 0x93C5 | Zentralverriegelung: Kurzschluss Leitung ZV_MVR |
| 0x93C6 | Zentralverriegelung: Kurzschluss Leitung ZV_MZS |
| 0x93C7 | Klemme 30 Anschluss fehlerhaft |
| 0x93C8 | LCPA Fehler Motorsensor |
| 0x93C9 | keine LIN-Kommunikation zum Spiegel Fahrerseite |
| 0x93CA | keine LIN-Kommunikation zum Spiegel Beifahrerseite |
| 0x93CB | keine LIN-Kommunikation zum Schalterblock |
| 0x93CC | keine LIN-Kommunikation zum LCPA |
| 0x93CD | keine LIN-Kommunikation zur Sitzheizung Fahrerseite |
| 0x93CE | keine LIN-Kommunikation zur Sitzheizung Beifahrerseite |
| 0x93E7 | Energiesparmode aktiv |
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
| 0x93A8 | 0x01 | 0x05 | - | - |
| 0x93A9 | 0x01 | 0x03 | - | - |
| 0x93AA | 0x01 | 0x03 | - | - |
| 0x93B2 | 0x05 | 0x03 | - | - |
| 0x93B3 | 0x05 | 0x03 | - | - |
| 0x93B4 | 0x05 | 0x03 | - | - |
| 0x93B5 | 0x05 | 0x03 | - | - |
| 0x93B6 | 0x05 | 0x03 | - | - |
| 0x93B7 | 0x05 | 0x03 | - | - |
| 0x93C2 | 0x01 | 0x03 | - | - |
| 0x93C3 | 0x08 | 0x08 | - | - |
| 0x93C4 | 0x08 | 0x08 | - | - |
| 0x93C5 | 0x08 | 0x08 | - | - |
| 0x93C6 | 0x08 | 0x08 | - | - |
| 0x93C7 | 0x01 | 0x03 | - | - |
| 0x93C8 | 0x05 | 0x01 | - | - |
| 0x93C9 | 0x01 | 0x03 | - | - |
| 0x93CA | 0x01 | 0x03 | - | - |
| 0x93CB | 0x01 | 0x03 | - | - |
| 0x93CC | 0x01 | 0x03 | - | - |
| 0x93CD | 0x01 | 0x03 | - | - |
| 0x93CE | 0x01 | 0x03 | - | - |
| default | 0x03 | 0x03 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | - | 18 | 255 | 0 |
| 0x02 | Sensorspannung | Volt | - | unsigned char | - | 5 | 255 | 0 |
| 0x03 | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x04 | Geschwindigkeit | km/h | - | unsigned char | - | 10 | 1 | 0 |
| 0x05 | Fehler zusatzinfo | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x06 | Zeit 1 | sec | - | unsigned char | - | 256 | 1 | 0 |
| 0x07 | Zeit 2 | sec | - | unsigned char | - | 1 | 1 | 0 |
| 0x08 | Sensorspannung | 1 | - | unsigned char | - | 18 | 255 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x943D | Übertemperatur FH-Fahrertuer |
| 0x943E | Übertemperatur FH-Beifahrertuer |
| 0x943F | LIN-Kommunikation defekt |
| 0x9440 | Einstiegsleuchte defekt |
| 0x9441 | CAN-Overrun |
| 0x9442 | Schaltnuss defekt |
| 0x9443 | Tuerkontakt defekt |
| 0x9444 | Schaltnuss Timeout |
| 0x9445 | MPM RES SVA |
| 0x9446 | MPM RES KLR |
| 0x9447 | MPM RES WECK |
| 0x9448 | MPM AUS CTR_CBR |
| 0x9449 | MPM AUS KLR |
| 0x944A | MPM AUS WECK |
| 0x944B | Unterspannung <8V an Kl.30A oder 30B |
| 0x944C | Unterspannung <7V an Kl.30A oder 30B |
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
| 0x9442 | 0x01 | 0x03 | - | - |
| 0x9444 | 0x01 | 0x03 | - | - |
| 0x9445 | 0x04 | 0x05 | - | - |
| 0x9446 | 0x04 | 0x05 | - | - |
| 0x9447 | 0x04 | 0x05 | - | - |
| 0x9448 | 0x04 | 0x05 | - | - |
| 0x9449 | 0x04 | 0x05 | - | - |
| 0x944A | 0x04 | 0x05 | - | - |
| 0x944B | 0x06 | 0x04 | - | - |
| 0x944C | 0x06 | 0x04 | - | - |
| default | 0x03 | 0x03 | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | - | 18 | 255 | 0 |
| 0x02 | Sensorspannung | Volt | - | unsigned char | - | 5 | 255 | 0 |
| 0x03 | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x04 | Zeit 2 | sec | - | unsigned char | - | 65536 | 1 | 0 |
| 0x05 | Zeit 1 | sec | - | unsigned char | - | 524288 | 1 | 0 |
| 0x06 | Geschwindigkeit | km/h | - | unsigned char | - | 10 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### AUSWAHL_SPIEGEL

| SPIEGEL | NAME | TEXT |
| --- | --- | --- |
| 0x01 | SPIEGEL_FA | Spiegel Fahrertuer auswaehlen |
| 0x02 | SPIEGEL_BF | Spiegel Beifahrertuer auswaehlen |
| 0xFF | ERROR | falscher Eingabewert |

### RICHTUNG_SPIEGEL

| SPIEGEL_R | NAME | TEXT |
| --- | --- | --- |
| 0x00 | NEUTRAL | Spiegel nicht bewegen |
| 0x01 | OBEN | Spiegel nach oben fahren |
| 0x02 | UNTEN | Spiegel nach unten fahren |
| 0x03 | LINKS | Spiegel nach links fahren |
| 0x04 | RECHTS | Spiegel nach rechts fahren |
| 0x05 | BEI/AUSKLAPPEN | Spiegel beiklappen/ausklappen |
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
| 0x08 | ECCOS_EIN | Spiegelheizung wird fuer ECCOS-Messung ausgeschalten |
| 0x09 | ECCOS_AUS | ECCOS-Messung beendet, Spiegelheizung wieder einschalten |
| 0xFF | ERROR | falscher Eingabewert |

### STEUERN_SERVOTRONIC

| VORGABEART | NAME | TEXT |
| --- | --- | --- |
| 0x01 | STROM | Servowandler ueber Strom steuern |
| 0x02 | PWM | Servowandler ueber PWM steuern |
| 0xFF | ERROR | falscher Eingabewert |

### AUSWAHL_FENSTER

| FH | NAME | TEXT |
| --- | --- | --- |
| 0x01 | FH_FA | Fensterheber Fahrertuer auswaehlen |
| 0x02 | FH_BF | Fensterheber Beifahrertuer auswaehlen |
| 0x03 | BEIDE_FH | beide Fensterheber auswaehlen |
| 0xFF | ERROR | falscher Eingabewert |

### STEUERN_MPM

| MPM | NAME | TEXT |
| --- | --- | --- |
| 0x10 | MPM_EIN | MPM-Relais einschalten |
| 0x20 | MPM_AUS | MPM-Relais ausschalten |
| 0x30 | SV_AUS | Standverbraucher zeitkodiert ausschalten |
| 0xFF | ERROR | falscher Eingabewert |

### STEUERN_LICHT

| LI_STE | NAME | TEXT |
| --- | --- | --- |
| 0x01 | ESL | Schaltet die Ausstiegsleuchte hart ein |
| 0x02 | ESL_DIM_EIN | Dimmt die Ausstiegsleuchte auf maximale Helligkeit |
| 0x03 | ESL_DIM_AUS | Dimmt die Ausstiegsleuchte ab |
| 0x04 | VFB | Schaltet die Vorfeldbeleuchtung hart ein |
| 0x05 | VFB_DIM_EIN | Dimmt die Vorfeldleuchte auf maximale Helligkeit |
| 0x06 | VFB_DIM_AUS | Dimmt die Vorfeldleuchte ab |
| 0x07 | LED1 | Schaltet die Beleuchtung der Funktionstaste 1 hart ein |
| 0x08 | LED2 | Schaltet die Beleuchtung der Funktionstaste 2 hart ein |
| 0xFF | ERROR | falscher Eingabewert |

### STEUERN_ZV

| ZVZ | NAME | TEXT |
| --- | --- | --- |
| 0x01 | ER | beide Schlösser entriegeln |
| 0x02 | ES | beide Schlösser entsichern |
| 0x03 | VR | beide Schlösser verriegeln |
| 0x04 | ZS | beide Schlösser sichern |
| 0xFF | ERROR | falscher Eingabewert |

### STEUERN_LARA_POS

| NAME | DIR | MOD | EE | POS | REMARK |
| --- | --- | --- | --- | --- | --- |
| VERBAU1 | 0x01 | 2 | 1 | 0x000F | ca. 4mm (aus oberem Anschlag) |
| VERBAU2 | 0x01 | 2 | 1 | 0x0014 | ca. 6mm (aus oberem Anschlag) |
| VERBAU3 | 0x01 | 2 | 1 | 0x0019 | ca. 8mm (aus oberem Anschlag) |
| UNTEN | 0x01 | 2 | 1 | 0x0200 | unterer Anschlag |
| OBEN | 0x02 | 2 | 1 | 0x0000 | oberer Anschlag |
| DENORM | 0x00 | 2 | 0 | 0x0000 | denormiert das LCPA, keie Fahrt nach unten mehr moeglich |
| ERROR | 0x03 | 2 | 0 | 0 | ungültiges Argument |

### STEUERN_FH_FAT_BFT

| ARGUMENT | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x01 | FH_FA_MAUT_AUF | Fensterheber Fahrerseite Maut oeffnen |
| 0x02 | FH_FA_AUF | Fensterheber Fahrerseite oeffnen |
| 0x03 | FH_FA_MAUT_ZU | Fensterheber Fahrerseite Maut schliessen |
| 0x04 | FH_FA_ZU | Fensterheber Fahrerseite schliessen |
| 0x05 | FH_BF_MAUT_AUF | Fensterheber Beifahrerseite Maut oeffnen |
| 0x06 | FH_BF_AUF | Fensterheber Beifahrerseite oeffnen |
| 0x07 | FH_BF_MAUT_ZU | Fensterheber Beifahrerseite Maut schliessen |
| 0x08 | FH_BF_ZU | Fensterheber Beifahrerseite schliessen |
| 0x11 | FH_FA_BF_MAUT_AUF | Fensterheber Fahrerseite und Beifahrerseite Maut oeffnen |
| 0x12 | FH_FA_BF_AUF | Fensterheber Fahrerseite Beifahrerseite oeffnen |
| 0x13 | FH_FA_BF_MAUT_ZU | Fensterheber Fahrerseite und Beifahrerseite Maut schliessen |
| 0x14 | FH_FA_BF_ZU | Fensterheber Fahrerseite Beifahrerseite schliessen |
| 0xXY | ERROR_ARGUMENT | fehlerhaftes Argument |

### FH_DENORM_FEHLERTEXTE

| NUMMER | TEXT |
| --- | --- |
| 0 | KEIN FEHLEREINTRAG |
| 1 | FAHRERSEITE - EEPROMFEHLER BEIM STARTUP |
| 2 | FAHRERSEITE - INTERFACE WURDE BEIM STARTUP NICHT BEDIENT |
| 3 | FAHRERSEITE - ÜBERFAHREN DER POSITION AF |
| 4 | FAHRERSEITE - ÜBERFAHREN DER POSITION GF |
| 5 | FAHRERSEITE - NICHT PLAUSIBLER ZUSTAND |
| 6 | FAHRERSEITE - DEFIZITCOUNTER ÜBERSCHRITTEN |
| 7 | FAHRERSEITE - RELAISKLEBER_1 |
| 8 | FAHRERSEITE - RELAISKLEBER_2 |
| 9 | FAHRERSEITE - HALLFEHLER |
| 10 | FAHRERSEITE - EXPLIZITES DENORMIEREN |
| 11 | FAHRERSEITE - TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN |
| 12 | FAHRERSEITE - HALLUNTERABTASTUNG |
| 101 | BEIFAHRERSEITE - EEPROMFEHLER BEIM STARTUP |
| 102 | BEIFAHRERSEITE - INTERFACE WURDE BEIM STARTUP NICHT BEDIENT |
| 103 | BEIFAHRERSEITE - ÜBERFAHREN DER POSITION AF |
| 104 | BEIFAHRERSEITE - ÜBERFAHREN DER POSITION GF |
| 105 | BEIFAHRERSEITE - NICHT PLAUSIBLER ZUSTAND |
| 106 | BEIFAHRERSEITE - DEFIZITCOUNTER ÜBERSCHRITTEN |
| 107 | BEIFAHRERSEITE - RELAISKLEBER_1 |
| 108 | BEIFAHRERSEITE - RELAISKLEBER_2 |
| 109 | BEIFAHRERSEITE - HALLFEHLER |
| 110 | BEIFAHRERSEITE - EXPLIZITES DENORMIEREN |
| 111 | BEIFAHRERSEITE - TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN |
| 112 | BEIFAHRERSEITE - HALLUNTERABTASTUNG |
| 0xXY | undefiniert |

### FH_REVERSIER_FEHLERTEXTE

| NUMMER | TEXT |
| --- | --- |
| 0 | KEIN FEHLEREINTRAG |
| 1 | FAHRERSEITE - REVERS_ISR |
| 2 | FAHRERSEITE - REVERS_ISRDIAG |
| 3 | FAHRERSEITE - REVERS_BLOCK |
| 101 | BEIFAHRERSEITE - REVERS_ISR |
| 102 | BEIFAHRERSEITE - REVERS_ISRDIAG |
| 103 | BEIFAHRERSEITE - REVERS_BLOCK |
| 0xXY | undefiniert |

### ZUORDNUNG_CAN_ID_SG

| CAN_ID_DEZ | CAN_ID_HEX | CAN_ID_NAME | DIAG_ID_DEZ | DIAG_ID_HEX | SG_NAME |
| --- | --- | --- | --- | --- | --- |
| 0 | 0x00 | unbekannt | 0 | 0x00 | Sender unbekannt |
| 949 | 0x3B5 | Status Wasserventil [6] | 120 | 0x78 | IHKA |
| 957 | 0x3BD | Status Verbraucherabschaltung [2] | 114 | 0x72 | KBM |
| 250 | 0xFA | Steuerung Fensterheber FAT [10] | 0 | 0x0 | KGM |
| 251 | 0xFB | Steuerung Fensterheber BFT [5] | 0 | 0x0 | KGM |
| 252 | 0xFC | Steuerung Fensterheber FATH [5] | 114 | 0x72 | KBM |
| 253 | 0xFD | Steuerung Fensterheber BFTH [5] | 114 | 0x72 | KBM |
| 168 | 0xA8 | Drehmoment 1 K-CAN [10] | 18 | 0x12 | DME1/DDE1 |
| 169 | 0xA9 | Drehmoment 2 (10) | 18 | 0x12 | DME1/DDE1 |
| 170 | 0xAA | Drehmoment 3 K-CAN [10] | 18 | 0x12 | DME1/DDE1 |
| 172 | 0xAC | Radmoment Antriebsstrang 2 [5] | 18 | 0x12 | DME1/DDE1 |
| 173 | 0xAD | Verzögerungsanforderung ACC [9] | 28 | 0x1C | LDM |
| 173 | 0xAD | Verzögerungsanforderung ACC [9] | 33 | 0x21 | ACC_Modul/ACC+NAVI |
| 179 | 0xB3 | Steuerung Lenkunterstützung [2] | 22 | 0x16 | AFS |
| 180 | 0xB4 | Radmoment Antriebsstrang 1 [4] | 18 | 0x12 | DME1/DDE1 |
| 181 | 0xB5 | Drehmomentanforderung EGS [9] | 24 | 0x18 | EGS_MECH+NAVI/EGS_MECH |
| 182 | 0xB6 | Drehmomentanforderung DSC [7] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 183 | 0xB7 | Drehmomentanforderung ACC [10] | 28 | 0x1C | LDM |
| 183 | 0xB7 | Drehmomentanforderung ACC [10] | 33 | 0x21 | ACC_Modul/ACC+NAVI |
| 184 | 0xB8 | Drehmomentanforderung DKG [2] | 24 | 0x18 | DKG |
| 185 | 0xB9 | Drehmomentanforderung AFS [3] | 22 | 0x16 | AFS |
| 186 | 0xBA | Getriebedaten [20] | 24 | 0x18 | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG |
| 187 | 0xBB | Sollmomentanforderung [7] | 41 | 0x29 | DXC_RB |
| 188 | 0xBC | Status Sollmomentumsetzung [7] | 25 | 0x19 | VGSG |
| 189 | 0xBD | Drehmomentanforderung SSG [6] | 24 | 0x18 | SMG_M/SMG |
| 190 | 0xBE | Alive Zähler [12] | 35 | 0x23 | ARS_Modul |
| 191 | 0xBF | Anforderung Radmoment Antriebsstrang [6] | 28 | 0x1C | LDM |
| 192 | 0xC0 | Alive Zentrales Gateway [1] | 0 | 0x0 | KGM |
| 193 | 0xC1 | Alive Zähler Telefon [3] | 54 | 0x36 | TEL_JAP/TEL_BPI |
| 196 | 0xC4 | Lenkradwinkel K-CAN [13] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 200 | 0xC8 | Lenkradwinkel Oben K-CAN [6] | 2 | 0x2 | SZL_LWS |
| 206 | 0xCE | Radgeschwindigkeit K-CAN [4] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 210 | 0xD2 | Bedienung Sitzverstellung BF [6] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 213 | 0xD5 | Anforderung Radmoment Bremse [6] | 28 | 0x1C | LDM |
| 215 | 0xD7 | Alive Zähler Sicherheit [2] | 1 | 0x1 | ACSM |
| 218 | 0xDA | Bedienung Sitzverstellung FA [6] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 225 | 0xE1 | Radmoment Bremse [3] | 41 | 0x29 | DXC_RB/DSC_RB |
| 226 | 0xE2 | Status Zentralverriegelung BFT [11] | 0 | 0x0 | KGM |
| 230 | 0xE6 | Status Zentralverriegelung BFTH [11] | 114 | 0x72 | KBM |
| 234 | 0xEA | Status Zentralverriegelung FAT [11] | 0 | 0x0 | KGM |
| 238 | 0xEE | Status Zentralverriegelung FATH [11] | 114 | 0x72 | KBM |
| 242 | 0xF2 | Status Zentralverriegelung HK [13] | 114 | 0x72 | KBM |
| 246 | 0xF6 | Steuerung Außenspiegel [9] | 0 | 0x0 | KGM |
| 304 | 0x130 | Klemmenstatus [19] | 64 | 0x40 | CAS |
| 309 | 0x135 | Steuerung Crashabschaltung EKP [1] | 1 | 0x1 | ACSM |
| 351 | 0x15F | Anforderung Winkel FFP [6] | 28 | 0x1C | LDM |
| 370 | 0x172 | Quittierung Anforderung Kombi [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 400 | 0x190 | Anzeige ACC [13] | 28 | 0x1C | LDM |
| 400 | 0x190 | Anzeige ACC [13] | 33 | 0x21 | ACC_Modul/ACC+NAVI |
| 402 | 0x192 | Bedienung Getriebewahlschalter [16] | 2 | 0x2 | SZL_LWS |
| 403 | 0x193 | Anzeige ACC DCC [4] | 28 | 0x1C | LDM |
| 404 | 0x194 | Bedienung Tempomat/ACC [13] | 2 | 0x2 | SZL_LWS |
| 408 | 0x198 | Bedienung Getriebewahlschalter 2 [2] | 94 | 0x5E | GWS |
| 414 | 0x19E | Status DSC K-CAN [19] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 416 | 0x1A0 | Geschwindigkeit K-CAN [14] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 418 | 0x1A2 | Getriebedaten 2 [6] | 24 | 0x18 | EGS_MECH+NAVI/EGS_MECH/DKG |
| 419 | 0x1A3 | Rohdaten Längsbeschleunigung [3] | 24 | 0x18 | SMG_M |
| 422 | 0x1A6 | Wegstrecke [6] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 426 | 0x1AA | Effekt ErgoCommander [10] | 98 | 0x62 | M_ASK/CCC_GW |
| 428 | 0x1AC | Status ARS-Modul [13] | 35 | 0x23 | ARS_Modul |
| 436 | 0x1B4 | Status Kombi [14] | 96 | 0x60 | Kombi |
| 437 | 0x1B5 | Wärmestrom/Lastmoment Klima [14] | 120 | 0x78 | IHKA |
| 438 | 0x1B6 | Wärmestrom Motor [11] | 18 | 0x12 | DME1/DDE1 |
| 440 | 0x1B8 | Bedienung ErgoCommander [6] | 103 | 0x67 | ZBE_LO/ZBE |
| 450 | 0x1C2 | Abstandsmeldung PDC [5] | 100 | 0x64 | PDC |
| 451 | 0x1C3 | Abstandsmeldung 2 PDC [3] | 100 | 0x64 | PDC |
| 454 | 0x1C6 | Akustikmeldung PDC [5] | 100 | 0x64 | PDC |
| 464 | 0x1D0 | Motordaten [13] | 18 | 0x12 | DME1/DDE1 |
| 466 | 0x1D2 | Anzeige Getriebedaten [22] | 24 | 0x18 | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG |
| 470 | 0x1D6 | Bedienung Taster Audio/Telefon [12] | 2 | 0x2 | SZL_LWS |
| 472 | 0x1D8 | Bedienung Klima Luftverteilung FA [13] | 98 | 0x62 | M_ASK/CCC_GW |
| 473 | 0x1D9 | Bedienung Taster M-Drive [2] | 2 | 0x2 | SZL_LWS |
| 474 | 0x1DA | Bedienung Klima Fernwirken [5] | 64 | 0x40 | CAS |
| 476 | 0x1DC | Bedienung Schichtung Sitzheizung [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 480 | 0x1E0 | Bedienung Klima Luftverteilung BF [7] | 98 | 0x62 | M_ASK/CCC_GW |
| 482 | 0x1E2 | Bedienung Klima Front [11] | 98 | 0x62 | M_ASK/CCC_GW |
| 487 | 0x1E7 | Bedienung Sitzheizung/Sitzklima FA [7] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 488 | 0x1E8 | Bedienung Sitzheizung/Sitzklima BF [7] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 490 | 0x1EA | Bedienung Lenksäulenverstellung [5] | 2 | 0x2 | SZL_LWS |
| 491 | 0x1EB | Bedienung Aktivsitz FA [3] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 492 | 0x1EC | Bedienung Aktivsitz BF [3] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 493 | 0x1ED | Bedienung Lehnenbreitenverstellung Aktiv FA [2] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 494 | 0x1EE | Bedienung Lenkstockstaster [6] | 2 | 0x2 | SZL_LWS |
| 495 | 0x1EF | Bedienung Lehnenbreitenverstellung Aktiv BF [2] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 498 | 0x1F2 | Bedienung Sitzmemory BF [3] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 499 | 0x1F3 | Bedienung Sitzmemory FA [4] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 500 | 0x1F4 | Fernbedienung Sitzmemory BF [2] | 255 | 0xFF | unbekannt |
| 502 | 0x1F6 | Blinken [6] | 112 | 0x70 | LM |
| 508 | 0x1FC | Status AFS [4] | 22 | 0x16 | AFS |
| 510 | 0x1FE | Crash [12] | 1 | 0x1 | ACSM |
| 512 | 0x200 | Regelgeschwindigkeit Stufentempomat [7] | 18 | 0x12 | DME1/DDE1 |
| 514 | 0x202 | Dimmung [10] | 112 | 0x70 | LM |
| 517 | 0x205 | Akustikanforderung Kombi [3] | 96 | 0x60 | Kombi |
| 518 | 0x206 | Steuerung Anzeige Shiftlights [1] | 18 | 0x12 | DME1 |
| 523 | 0x20B | Memoryverstellung [6] | 101 | 0x65 | SZM_MIT_KBUS |
| 523 | 0x20B | Memoryverstellung [6] | 109 | 0x6D | SM_FA |
| 524 | 0x20C | Steuerung Lenksäule (4) | 109 | 0x6D | SM_FA |
| 525 | 0x20D | Position Lenksäule (5) | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 528 | 0x210 | Bedienung HUD [7] | 98 | 0x62 | M_ASK/CCC_GW |
| 529 | 0x211 | Status HUD [7] | 61 | 0x3D | HUD |
| 530 | 0x212 | Höhenstände Luftfeder [8] | 56 | 0x38 | EHC |
| 538 | 0x21A | Lampenzustand [13] | 112 | 0x70 | LM |
| 540 | 0x21C | Bedienung Night-Vision [2] | 98 | 0x62 | CCC_GW |
| 542 | 0x21E | Status Night-Vision [2] | 87 | 0x57 | NVC |
| 550 | 0x226 | Regensensor-Wischergeschwindigkeit [8] | 69 | 0x45 | RLS |
| 550 | 0x226 | Regensensor-Wischergeschwindigkeit [8] | 112 | 0x70 | LM |
| 552 | 0x228 | Bedienung Sonderfunktion [8] | 98 | 0x62 | M_ASK/CCC_GW |
| 552 | 0x228 | Bedienung Sonderfunktion [8] | 99 | 0x63 | CCC_MM |
| 554 | 0x22A | Status BFS [10] | 110 | 0x6E | SM_BF |
| 558 | 0x22E | Status BFSH [7] | 255 | 0xFF | unbekannt |
| 562 | 0x232 | Status FAS [10] | 109 | 0x6D | SM_FA |
| 566 | 0x236 | Status FASH [7] | 255 | 0xFF | unbekannt |
| 567 | 0x237 | Status Lehnenbreitenverstellung Aktiv BF [3] | 90 | 0x5A | aLBV_BF |
| 569 | 0x239 | Status Lehnenbreitenverstellung Aktiv FA [3] | 89 | 0x59 | aLBV_FA |
| 570 | 0x23A | Status Funkschlüssel [13] | 64 | 0x40 | CAS |
| 571 | 0x23B | Status Klima Front Erweitert [1] | 120 | 0x78 | IHKA |
| 572 | 0x23C | Status Bedienung Sitzkomfort FA [1] | 109 | 0x6D | SM_FA |
| 575 | 0x23F | Status Bedienung Sitzkomfort BF [1] | 110 | 0x6E | SM_BF |
| 578 | 0x242 | Status Klima Front [11] | 120 | 0x78 | IHKA |
| 586 | 0x24A | Status PDC [6] | 100 | 0x64 | PDC |
| 594 | 0x252 | Wischerstatus [8] | 114 | 0x72 | KBM |
| 598 | 0x256 | Challenge Passive Access [10] | 64 | 0x40 | CAS |
| 600 | 0x258 | Status Transmission Passive Access [4] | 39 | 0x27 | PGS |
| 604 | 0x25C | Bedienung Klima Zusatzprogramme [2] | 98 | 0x62 | M_ASK/CCC_GW |
| 619 | 0x26B | Bedienung Rollos BF [2] | 255 | 0xFF | unbekannt |
| 620 | 0x26C | Bedienung Rollos FA [2] | 0 | 0x0 | KGM |
| 621 | 0x26D | Bedienung Rollos MK [1] | 255 | 0xFF | unbekannt |
| 622 | 0x26E | Steuerung FH/SHD Zentrale (Komfort) [10] | 64 | 0x40 | CAS |
| 623 | 0x26F | Bedienung Rollos BFH [2] | 255 | 0xFF | unbekannt |
| 624 | 0x270 | Bedienung Rollos FAH [2] | 255 | 0xFF | unbekannt |
| 632 | 0x278 | Navigationsgraph [3] | 98 | 0x62 | CCC_GW |
| 634 | 0x27A | Synchronisation Navigationsgraph [4] | 98 | 0x62 | CCC_GW |
| 638 | 0x27E | Status Verdeck Cabrio [7] | 36 | 0x24 | CVM_V |
| 644 | 0x284 | Steuerung Fernstart Sicherheitsfahrzeug [8] | 64 | 0x40 | CAS |
| 645 | 0x285 | Steuerung Rollos [3] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 652 | 0x28C | Bedienung Taster Vertikaldynamik [2] | 94 | 0x5E | GWS |
| 656 | 0x290 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] | 255 | 0xFF | unbekannt |
| 658 | 0x292 | Steuerung Fernlicht-Assistent [2] | 95 | 0x5F | FLA |
| 671 | 0x29F | Fernbedienung FondCommander [5] | 64 | 0x40 | CAS |
| 672 | 0x2A0 | Steuerung Zentralverriegelung [10] | 64 | 0x40 | CAS |
| 674 | 0x2A2 | Bedienung Klima Standfunktionen [5] | 98 | 0x62 | M_ASK/CCC_GW |
| 676 | 0x2A4 | Bedienung Personalisierung [8] | 98 | 0x62 | M_ASK/CCC_GW |
| 678 | 0x2A6 | Bedienung Wischertaster [12] | 2 | 0x2 | SZL_LWS |
| 690 | 0x2B2 | Raddrücke K-CAN [1] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 691 | 0x2B3 | Beschleunigungsdaten [2] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 692 | 0x2B4 | DWA-Alarm [4] | 65 | 0x41 | DWA |
| 694 | 0x2B6 | Steuerung Hupe DWA [3] | 65 | 0x41 | DWA |
| 696 | 0x2B8 | Bedienung Bordcomputer [3] | 98 | 0x62 | M_ASK/CCC_GW |
| 698 | 0x2BA | Stoppuhr (3) | 96 | 0x60 | Kombi |
| 704 | 0x2C0 | LCD-Leuchtdichte [7] | 96 | 0x60 | Kombi |
| 714 | 0x2CA | Außentemperatur [9] | 96 | 0x60 | Kombi |
| 718 | 0x2CE | Steuerung Monitor [4] | 98 | 0x62 | M_ASK/CCC_GW |
| 725 | 0x2D5 | Status Heizung Heckscheibe [1] | 120 | 0x78 | IHKA |
| 730 | 0x2DA | Status Heckklappenlift [2] | 107 | 0x6B | HKL |
| 738 | 0x2E2 | Status Einstellung Video Night-Vision [1] | 87 | 0x57 | NVC |
| 740 | 0x2E4 | Status Anhänger (8) | 113 | 0x71 | AHM |
| 742 | 0x2E6 | Status Klima Luftverteilung FA [13] | 120 | 0x78 | IHKA |
| 746 | 0x2EA | Status Klima Luftverteilung BF [9] | 120 | 0x78 | IHKA |
| 748 | 0x2EC | Status Klima SH/ZH Zusatzwasserpumpe [14] | 122 | 0x7A | SH_ZH |
| 750 | 0x2EE | Status Klima Zusatzprogramme [2] | 120 | 0x78 | IHKA |
| 752 | 0x2F0 | Status Klima Standfunktionen [12] | 120 | 0x78 | IHKA |
| 756 | 0x2F4 | Steuerung Klima SH/ZH Zusatzwasserpumpe [13] | 120 | 0x78 | IHKA |
| 758 | 0x2F6 | Steuerung Licht [7] | 114 | 0x72 | KBM |
| 759 | 0x2F7 | Einheiten [10] | 98 | 0x62 | M_ASK/CCC_GW |
| 759 | 0x2F7 | Einheiten [10] | 99 | 0x63 | CCC_MM |
| 760 | 0x2F8 | Uhrzeit/Datum [12] | 96 | 0x60 | Kombi |
| 762 | 0x2FA | Sitzbelegung Gurtkontakte (14) | 1 | 0x1 | ACSM |
| 764 | 0x2FC | ZV und Klappenzustand [11] | 64 | 0x40 | CAS |
| 772 | 0x304 | Status Gang [13] | 24 | 0x18 | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG |
| 774 | 0x306 | Fahrzeugneigung [2] | 112 | 0x70 | LM |
| 776 | 0x308 | Status MSA [2] | 18 | 0x12 | DME1/DDE1 |
| 784 | 0x310 | Außentemperatur/Relativzeit [10] | 96 | 0x60 | Kombi |
| 785 | 0x311 | Nachtankmenge [3] | 96 | 0x60 | Kombi |
| 786 | 0x312 | Service Call Teleservice [2] | 96 | 0x60 | Kombi |
| 787 | 0x313 | Status Service Call Teleservice [3] | 54 | 0x36 | TEL_BPI |
| 787 | 0x313 | Status Service Call Teleservice [3] | 98 | 0x62 | M_ASK/CCC_GW |
| 788 | 0x314 | Status Fahrlicht [9] | 69 | 0x45 | RLS |
| 788 | 0x314 | Status Fahrlicht [9] | 112 | 0x70 | LM |
| 789 | 0x315 | Fahrzeugmodus [7] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 791 | 0x317 | Bedienung Taster PDC [1] | 101 | 0x65 | SZM_MIT_KBUS/SZM |
| 792 | 0x318 | Status Antennen Passive Access [7] | 39 | 0x27 | PGS |
| 793 | 0x319 | Bedienung Taster RDC [4] | 101 | 0x65 | SZM |
| 796 | 0x31C | Status Reifendruck [6] | 32 | 0x20 | RDC |
| 797 | 0x31D | Status Reifenpannenanzeige [6] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 802 | 0x322 | Dämpferstrom [2] | 57 | 0x39 | EDCK_Modul |
| 806 | 0x326 | Status Dämpferprogramm [9] | 57 | 0x39 | EDCK_Modul |
| 808 | 0x328 | Relativzeit [9] | 96 | 0x60 | Kombi |
| 810 | 0x32A | Steuerung ALC [2] | 112 | 0x70 | LM |
| 813 | 0x32D | Anzeige HDC [3] | 41 | 0x29 | DXC_RB |
| 814 | 0x32E | Status Klima Interne Regelinfo [6] | 120 | 0x78 | IHKA |
| 816 | 0x330 | Kilometerstand/Reichweite [5] | 96 | 0x60 | Kombi |
| 817 | 0x331 | Programmierung Stufentempomat [2] | 98 | 0x62 | M_ASK/CCC_GW |
| 818 | 0x332 | Fahreranzeige Drehzahlbereich [4] | 18 | 0x12 | DME1/DDE1 |
| 821 | 0x335 | Status Elektrische Kraftstoffpumpe [3] | 23 | 0x17 | EKP |
| 822 | 0x336 | Anzeige Checkcontrol-Meldung (Rolle) [3] | 96 | 0x60 | Kombi |
| 823 | 0x337 | Status Kraftstoffregelung DME [1] | 18 | 0x12 | DME1 |
| 824 | 0x338 | Steuerung Anzeige Checkcontrol-Meldung [7] | 96 | 0x60 | Kombi |
| 825 | 0x339 | Status Anzeige Funktionen Extern [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 826 | 0x33A | Status Monitor Front [3] | 115 | 0x73 | CID_C_H/CID_C |
| 840 | 0x348 | Übereinstimmung Navigationsgraph [4] | 98 | 0x62 | CCC_GW |
| 842 | 0x34A | Navigation GPS 1 [5] | 98 | 0x62 | CCC_GW |
| 843 | 0x34B | Status Sitzlehnenverriegelung FA (3) | 101 | 0x65 | SZM_MIT_KBUS |
| 843 | 0x34B | Status Sitzlehnenverriegelung FA (3) | 109 | 0x6D | SM_FA |
| 844 | 0x34C | Navigation GPS 2 [5] | 98 | 0x62 | CCC_GW |
| 845 | 0x34D | Status Sitzlehnenverriegelung BF [2] | 101 | 0x65 | SZM_MIT_KBUS |
| 845 | 0x34D | Status Sitzlehnenverriegelung BF [2] | 110 | 0x6E | SM_BF |
| 846 | 0x34E | Navigation System Information [6] | 98 | 0x62 | CCC_GW |
| 858 | 0x35A | Termin Condition Based Service [2] | 98 | 0x62 | M_ASK/CCC_GW |
| 860 | 0x35C | Status Bordcomputer [5] | 96 | 0x60 | Kombi |
| 862 | 0x35E | Daten Bordcomputer (Reisedaten) [5] | 96 | 0x60 | Kombi |
| 864 | 0x360 | Daten Bordcomputer (Fahrtbeginn) [2] | 96 | 0x60 | Kombi |
| 866 | 0x362 | Daten Bordcomputer (Durchschnittswerte) [4] | 96 | 0x60 | Kombi |
| 868 | 0x364 | Daten Bordcomputer (Ankunft) [2] | 96 | 0x60 | Kombi |
| 870 | 0x366 | Anzeige Kombi/Externe Anzeige [3] | 96 | 0x60 | Kombi |
| 871 | 0x367 | Steuerung Anzeige Bedarfsorientierter Service [6] | 96 | 0x60 | Kombi |
| 884 | 0x374 | Radtoleranzabgleich [7] | 41 | 0x29 | DXC_RB/DSC_RB/DSC_CT |
| 886 | 0x376 | Status Verschleiß Lamelle [3] | 25 | 0x19 | VGSG |
| 896 | 0x380 | Fahrgestellnummer [5] | 64 | 0x40 | CAS |
| 897 | 0x381 | Elektronischer Motorölmessstab [10] | 18 | 0x12 | DME1/DDE1 |
| 898 | 0x382 | Elektronischer Motorölmessstab M [1] | 18 | 0x12 | DME1/DDE1 |
| 904 | 0x388 | Fahrzeugtyp [13] | 64 | 0x40 | CAS |
| 910 | 0x38E | Startdrehzahl [1] | 18 | 0x12 | DME1/DDE1 |
| 916 | 0x394 | RDA Anfrage/Datenablage [5] | 96 | 0x60 | Kombi |
| 917 | 0x395 | Codierung Powermanagement [2] | 64 | 0x40 | CAS |
| 920 | 0x398 | Bedienung Fahrwerk [14] | 98 | 0x62 | M_ASK/CCC_GW |
| 921 | 0x399 | Status M-Drive [2] | 18 | 0x12 | DME1 |
| 924 | 0x39C | EBA Datenanforderung [5] | 255 | 0xFF | unbekannt |
| 926 | 0x39E | Bedienung Uhrzeit/Datum [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 928 | 0x3A0 | Fahrzeugzustand [4] | 0 | 0x0 | KGM |
| 931 | 0x3A3 | Anforderung Remote Services [2] | 98 | 0x62 | M_ASK/CCC_GW |
| 940 | 0x3AC | Nachlaufzeit Klemme 30 fehlergesteuert [2] | 0 | 0x0 | KGM |
| 944 | 0x3B0 | Status Gang Rückwärts [2] | 112 | 0x70 | LM |
| 945 | 0x3B1 | Getriebedaten 3 [2] | 24 | 0x18 | EGS_MECH/DKG |
| 947 | 0x3B3 | Powermanagement Verbrauchersteuerung [8] | 18 | 0x12 | DME1/DDE1 |
| 948 | 0x3B4 | Powermanagement Batteriespannung [11] | 18 | 0x12 | DME1/DDE1 |
| 950 | 0x3B6 | Position Fensterheber FAT [6] | 0 | 0x0 | KGM |
| 951 | 0x3B7 | Position Fensterheber FATH [5] | 114 | 0x72 | KBM |
| 952 | 0x3B8 | Position Fensterheber BFT [6] | 0 | 0x0 | KGM |
| 953 | 0x3B9 | Position Fensterheber BFTH [5] | 114 | 0x72 | KBM |
| 954 | 0x3BA | Position SHD [10] | 68 | 0x44 | SHD/MDS |
| 958 | 0x3BE | Nachlaufzeit Stromversorgung [5] | 64 | 0x40 | CAS |
| 959 | 0x3BF | Position Fensterheber Heckscheibe [1] | 36 | 0x24 | CVM_V |
| 960 | 0x3C0 | Konfiguration FAS [3] | 109 | 0x6D | SM_FA |
| 961 | 0x3C1 | Konfiguration BFS [3] | 110 | 0x6E | SM_BF |
| 970 | 0x3CA | Konfiguration M-Drive [2] | 98 | 0x62 | M_ASK/CCC_GW |
| 979 | 0x3D3 | Status Solarsensor [1] | 112 | 0x70 | LM |
| 980 | 0x3D4 | Konfiguration Zentralverriegelung CKM [3] | 98 | 0x62 | M_ASK/CCC_GW |
| 981 | 0x3D5 | Status Zentralverriegelung CKM [4] | 64 | 0x40 | CAS |
| 982 | 0x3D6 | Konfiguration DWA CKM [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 983 | 0x3D7 | Status DWA CKM [2] | 65 | 0x41 | DWA |
| 984 | 0x3D8 | Konfiguration RLS CKM [3] | 98 | 0x62 | M_ASK/CCC_GW |
| 985 | 0x3D9 | Status RLS CKM [4] | 69 | 0x45 | RLS |
| 985 | 0x3D9 | Status RLS CKM [4] | 112 | 0x70 | LM |
| 986 | 0x3DA | Konfiguration Memorypositionen CKM [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 987 | 0x3DB | Status Memorypositionen CKM [3] | 101 | 0x65 | SZM_MIT_KBUS |
| 987 | 0x3DB | Status Memorypositionen CKM [3] | 109 | 0x6D | SM_FA |
| 988 | 0x3DC | Konfiguration Licht CKM [3] | 98 | 0x62 | M_ASK/CCC_GW |
| 989 | 0x3DD | Status Licht CKM [4] | 112 | 0x70 | LM |
| 990 | 0x3DE | Konfiguration Klima CKM [5] | 98 | 0x62 | M_ASK/CCC_GW |
| 991 | 0x3DF | Status Klima CKM [6] | 120 | 0x78 | IHKA |
| 992 | 0x3E0 | Konfiguration ALC CKM [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 993 | 0x3E1 | Status ALC CKM [1] | 112 | 0x70 | LM |
| 994 | 0x3E2 | Konfiguration Heckklappe CKM [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 995 | 0x3E3 | Status Heckklappe CKM [1] | 107 | 0x6B | HKL |
| 1001 | 0x3E9 | Marker 1 [1] | 255 | 0xFF | unbekannt |
| 1002 | 0x3EA | Marker 2 [3] | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 1003 | 0x3EB | Marker 3 [1] | 125 | 0x7D | Diagnosetool_PT_CAN |
| 1006 | 0x3EE | Anforderung Fehlermeldung [1] | 255 | 0xFF | unbekannt |
| 1007 | 0x3EF | OBD Daten Motor (3) | 18 | 0x12 | DME1/DDE1 |
| 1008 | 0x3F0 | Konfiguration Licht Erweitert CKM [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 1009 | 0x3F1 | Status Licht Erweitert CKM [1] | 112 | 0x70 | LM |
| 1012 | 0x3F4 | Konfiguration Laderaumabdeckung CKM [1] | 98 | 0x62 | M_ASK/CCC_GW |
| 1013 | 0x3F5 | Status Laderaumabdeckung CKM [1] | 114 | 0x72 | KBM |
| 1022 | 0x3FE | Anforderung CAN_Testtool SI-Bus [5] | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 1280 | 0x500 | Datentransfer [1] | 112 | 0x70 | LM |
| 1280 | 0x500 | Datentransfer [1] | 120 | 0x78 | IHKA |
| 1984 | 0x7C0 | CAS Programmierung Bandende 1 (3) | 64 | 0x40 | CAS |
| 1985 | 0x7C1 | CAS Programmierung Bandende 2 (3) | 255 | 0xFF | TOOL_BANDENDE_CAS |
| 1986 | 0x7C2 | CAS Applikationsnachricht 1 (3) | 64 | 0x40 | CAS |
| 1987 | 0x7C3 | CAS Applikationsnachricht 2 (3) | 255 | 0xFF | TOOL_BANDENDE_CAS |
| 1152 | 0x480 | Netzwerkmanagement | 0 | 0x0 | KGM |
| 1153 | 0x481 | Netzwerkmanagement | 1 | 0x1 | ACSM |
| 1154 | 0x482 | Netzwerkmanagement | 2 | 0x2 | SZL_LWS |
| 1170 | 0x492 | Netzwerkmanagement | 18 | 0x12 | DDE1/DME1 |
| 1174 | 0x496 | Netzwerkmanagement | 22 | 0x16 | AFS |
| 1175 | 0x497 | Netzwerkmanagement | 23 | 0x17 | EKP |
| 1176 | 0x498 | Netzwerkmanagement | 24 | 0x18 | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M |
| 1177 | 0x499 | Netzwerkmanagement | 25 | 0x19 | VGSG |
| 1179 | 0x49B | Netzwerkmanagement | 27 | 0x1B | VVT1 |
| 1180 | 0x49C | Netzwerkmanagement | 28 | 0x1C | LDM |
| 1182 | 0x49E | Netzwerkmanagement | 30 | 0x1E | VVT2 |
| 1184 | 0x4A0 | Netzwerkmanagement | 32 | 0x20 | RDC |
| 1185 | 0x4A1 | Netzwerkmanagement | 33 | 0x21 | ACC+NAVI/ACC_Modul |
| 1187 | 0x4A3 | Netzwerkmanagement | 35 | 0x23 | ARS_Modul |
| 1188 | 0x4A4 | Netzwerkmanagement | 36 | 0x24 | CVM_V |
| 1189 | 0x4A5 | Netzwerkmanagement | 37 | 0x25 | RSC_VDA/SC_CT/SC_VDA |
| 1191 | 0x4A7 | Netzwerkmanagement | 39 | 0x27 | PGS |
| 1193 | 0x4A9 | Netzwerkmanagement | 41 | 0x29 | DSC_CT/DSC_RB/DXC_RB |
| 1206 | 0x4B6 | Netzwerkmanagement | 54 | 0x36 | TEL_BPI/TEL_JAP/TEL_MULF |
| 1207 | 0x4B7 | Netzwerkmanagement | 55 | 0x37 | AMP_TOP |
| 1208 | 0x4B8 | Netzwerkmanagement | 56 | 0x38 | EHC |
| 1209 | 0x4B9 | Netzwerkmanagement | 57 | 0x39 | EDCK_Modul |
| 1210 | 0x4BA | Netzwerkmanagement | 58 | 0x3A | KHM |
| 1211 | 0x4BB | Netzwerkmanagement | 59 | 0x3B | JNAV |
| 1212 | 0x4BC | Netzwerkmanagement | 60 | 0x3C | CDC |
| 1213 | 0x4BD | Netzwerkmanagement | 61 | 0x3D | HUD |
| 1216 | 0x4C0 | Netzwerkmanagement | 64 | 0x40 | CAS |
| 1217 | 0x4C1 | Netzwerkmanagement | 65 | 0x41 | DWA |
| 1220 | 0x4C4 | Netzwerkmanagement | 68 | 0x44 | MDS/SHD |
| 1221 | 0x4C5 | Netzwerkmanagement | 69 | 0x45 | RLS/RLS |
| 1227 | 0x4CB | Netzwerkmanagement | 75 | 0x4B | VM |
| 1232 | 0x4D0 | Netzwerkmanagement | 80 | 0x50 | Notstrom-Sirene |
| 1235 | 0x4D3 | Netzwerkmanagement | 83 | 0x53 | IBOC |
| 1236 | 0x4D4 | Netzwerkmanagement | 84 | 0x54 | SDARS |
| 1237 | 0x4D5 | Netzwerkmanagement | 85 | 0x55 | ISpeechBox |
| 1239 | 0x4D7 | Netzwerkmanagement | 87 | 0x57 | NVC |
| 1241 | 0x4D9 | Netzwerkmanagement | 89 | 0x59 | aLBV_FA |
| 1242 | 0x4DA | Netzwerkmanagement | 90 | 0x5A | aLBV_BF |
| 1243 | 0x4DB | Netzwerkmanagement | 91 | 0x5B | DAB |
| 1244 | 0x4DC | Netzwerkmanagement | 92 | 0x5C | Behoerde |
| 1245 | 0x4DD | Netzwerkmanagement | 93 | 0x5D | TLC |
| 1246 | 0x4DE | Netzwerkmanagement | 94 | 0x5E | GWS |
| 1247 | 0x4DF | Netzwerkmanagement | 95 | 0x5F | FLA |
| 1248 | 0x4E0 | Netzwerkmanagement | 96 | 0x60 | Kombi |
| 1250 | 0x4E2 | Netzwerkmanagement | 98 | 0x62 | CCC_GW/M_ASK |
| 1251 | 0x4E3 | Netzwerkmanagement | 99 | 0x63 | CCC_MM |
| 1252 | 0x4E4 | Netzwerkmanagement | 100 | 0x64 | PDC |
| 1253 | 0x4E5 | Netzwerkmanagement | 101 | 0x65 | SZM/SZM_MIT_KBUS |
| 1255 | 0x4E7 | Netzwerkmanagement | 103 | 0x67 | ZBE/ZBE_LO |
| 1259 | 0x4EB | Netzwerkmanagement | 107 | 0x6B | HKL |
| 1261 | 0x4ED | Netzwerkmanagement | 109 | 0x6D | SM_FA/SM_FA_KBUS |
| 1262 | 0x4EE | Netzwerkmanagement | 110 | 0x6E | SM_BF/SM_BF_KBUS |
| 1264 | 0x4F0 | Netzwerkmanagement | 112 | 0x70 | LM/LM_ALC |
| 1265 | 0x4F1 | Netzwerkmanagement | 113 | 0x71 | AHM |
| 1266 | 0x4F2 | Netzwerkmanagement | 114 | 0x72 | KBM |
| 1267 | 0x4F3 | Netzwerkmanagement | 115 | 0x73 | CID_C/CID_C_H |
| 1272 | 0x4F8 | Netzwerkmanagement | 120 | 0x78 | IHKA |
| 1274 | 0x4FA | Netzwerkmanagement | 122 | 0x7A | SH_ZH |
| 1277 | 0x4FD | Netzwerkmanagement | 125 | 0x7D | Diagnosetool_PT_CAN |
| 1278 | 0x4FE | Netzwerkmanagement | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 1289 | 0x509 | Netzwerkmanagement | 137 | 0x89 | Xenon_Scheinwerfer_Links_ALC |
| 1290 | 0x50A | Netzwerkmanagement | 138 | 0x8A | Xenon_Scheinwerfer_Rechts_ALC |
| 1291 | 0x50B | Netzwerkmanagement | 139 | 0x8B | CNV |
| 1393 | 0x571 | Netzwerkmanagement | 241 | 0xF1 | Diagnosedose |
| 1408 | 0x580 | Dienste | 0 | 0x0 | KGM |
| 1409 | 0x581 | Dienste | 1 | 0x1 | ACSM |
| 1410 | 0x582 | Dienste | 2 | 0x2 | SZL_LWS |
| 1426 | 0x592 | Dienste | 18 | 0x12 | DDE1/DME1 |
| 1430 | 0x596 | Dienste | 22 | 0x16 | AFS |
| 1431 | 0x597 | Dienste | 23 | 0x17 | EKP |
| 1432 | 0x598 | Dienste | 24 | 0x18 | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M |
| 1433 | 0x599 | Dienste | 25 | 0x19 | VGSG |
| 1435 | 0x59B | Dienste | 27 | 0x1B | VVT1 |
| 1436 | 0x59C | Dienste | 28 | 0x1C | LDM |
| 1438 | 0x59E | Dienste | 30 | 0x1E | VVT2 |
| 1440 | 0x5A0 | Dienste | 32 | 0x20 | RDC |
| 1441 | 0x5A1 | Dienste | 33 | 0x21 | ACC+NAVI/ACC_Modul |
| 1443 | 0x5A3 | Dienste | 35 | 0x23 | ARS_Modul |
| 1444 | 0x5A4 | Dienste | 36 | 0x24 | CVM_V |
| 1445 | 0x5A5 | Dienste | 37 | 0x25 | RSC_VDA/SC_CT/SC_VDA |
| 1447 | 0x5A7 | Dienste | 39 | 0x27 | PGS |
| 1449 | 0x5A9 | Dienste | 41 | 0x29 | DSC_CT/DSC_RB/DXC_RB |
| 1462 | 0x5B6 | Dienste | 54 | 0x36 | TEL_BPI/TEL_JAP/TEL_MULF |
| 1463 | 0x5B7 | Dienste | 55 | 0x37 | AMP_TOP |
| 1464 | 0x5B8 | Dienste | 56 | 0x38 | EHC |
| 1465 | 0x5B9 | Dienste | 57 | 0x39 | EDCK_Modul |
| 1466 | 0x5BA | Dienste | 58 | 0x3A | KHM |
| 1467 | 0x5BB | Dienste | 59 | 0x3B | JNAV |
| 1468 | 0x5BC | Dienste | 60 | 0x3C | CDC |
| 1469 | 0x5BD | Dienste | 61 | 0x3D | HUD |
| 1472 | 0x5C0 | Dienste | 64 | 0x40 | CAS |
| 1473 | 0x5C1 | Dienste | 65 | 0x41 | DWA |
| 1476 | 0x5C4 | Dienste | 68 | 0x44 | MDS/SHD |
| 1477 | 0x5C5 | Dienste | 69 | 0x45 | RLS/RLS |
| 1483 | 0x5CB | Dienste | 75 | 0x4B | VM |
| 1488 | 0x5D0 | Dienste | 80 | 0x50 | Notstrom-Sirene |
| 1491 | 0x5D3 | Dienste | 83 | 0x53 | IBOC |
| 1492 | 0x5D4 | Dienste | 84 | 0x54 | SDARS |
| 1493 | 0x5D5 | Dienste | 85 | 0x55 | ISpeechBox |
| 1495 | 0x5D7 | Dienste | 87 | 0x57 | NVC |
| 1497 | 0x5D9 | Dienste | 89 | 0x59 | aLBV_FA |
| 1498 | 0x5DA | Dienste | 90 | 0x5A | aLBV_BF |
| 1499 | 0x5DB | Dienste | 91 | 0x5B | DAB |
| 1500 | 0x5DC | Dienste | 92 | 0x5C | Behoerde |
| 1501 | 0x5DD | Dienste | 93 | 0x5D | TLC |
| 1502 | 0x5DE | Dienste | 94 | 0x5E | GWS |
| 1503 | 0x5DF | Dienste | 95 | 0x5F | FLA |
| 1504 | 0x5E0 | Dienste | 96 | 0x60 | Kombi |
| 1506 | 0x5E2 | Dienste | 98 | 0x62 | CCC_GW/M_ASK |
| 1507 | 0x5E3 | Dienste | 99 | 0x63 | CCC_MM |
| 1508 | 0x5E4 | Dienste | 100 | 0x64 | PDC |
| 1509 | 0x5E5 | Dienste | 101 | 0x65 | SZM/SZM_MIT_KBUS |
| 1511 | 0x5E7 | Dienste | 103 | 0x67 | ZBE/ZBE_LO |
| 1515 | 0x5EB | Dienste | 107 | 0x6B | HKL |
| 1517 | 0x5ED | Dienste | 109 | 0x6D | SM_FA/SM_FA_KBUS |
| 1518 | 0x5EE | Dienste | 110 | 0x6E | SM_BF/SM_BF_KBUS |
| 1520 | 0x5F0 | Dienste | 112 | 0x70 | LM/LM_ALC |
| 1521 | 0x5F1 | Dienste | 113 | 0x71 | AHM |
| 1522 | 0x5F2 | Dienste | 114 | 0x72 | KBM |
| 1523 | 0x5F3 | Dienste | 115 | 0x73 | CID_C/CID_C_H |
| 1528 | 0x5F8 | Dienste | 120 | 0x78 | IHKA |
| 1530 | 0x5FA | Dienste | 122 | 0x7A | SH_ZH |
| 1533 | 0x5FD | Dienste | 125 | 0x7D | Diagnosetool_PT_CAN |
| 1534 | 0x5FE | Dienste | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 1545 | 0x609 | Dienste | 137 | 0x89 | Xenon_Scheinwerfer_Links_ALC |
| 1546 | 0x60A | Dienste | 138 | 0x8A | Xenon_Scheinwerfer_Rechts_ALC |
| 1547 | 0x60B | Dienste | 139 | 0x8B | CNV |
| 1649 | 0x671 | Dienste | 241 | 0xF1 | Diagnosedose |
| 4095 | 0xFFF | unbekannt | 255 | 0xFF | Sender unbekannt |
