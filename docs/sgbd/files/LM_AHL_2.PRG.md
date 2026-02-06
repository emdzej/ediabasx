# LM_AHL_2.PRG

## General

|  |  |
| --- | --- |
| File | LM_AHL_2.PRG |
| Type | PRG |
| Jobs | 150 |
| Tables | 35 |
| Origin | BMW EI-63 Tom Willmann |
| Revision | 1.000 |
| Author | LEAR DCS Ahrens |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | LM-AHL 2 |  |  |
| ORIGIN | string | BMW EI-63 Tom Willmann |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | LEAR DCS Ahrens |  |  |
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

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

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

### STATUS_DIGITAL_INPUTS

Auslesen der Stati von den digitalen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $01 Digitale Inputs

_No arguments._

### STATUS_ANALOG_INPUTS

Auslesen der Stati von den analogen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $02 Analoge Inputs

_No arguments._

### STATUS_DIMMWERT

KWP2000: $30->IOCBLI $08->Auslesen der analogen Stati (%) aller Lampen $01->RCS

_No arguments._

### STATUS_LAMPEN_DIGITAL

KWP2000: $30->IOCBLI $08->Auslesen der digitalen Stati (EIN/AUS) aller Lampen $01->RCS

_No arguments._

### STATUS_SENSE_LESEN

Senseausgang fuer ausgewaehlte Lampe lesen, FRMFA KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $17 Sensewerte lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Auswahl, welche Lampe geprueft werden soll |

### STATUS_LAMPEN_DEFEKTE

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $27 Lampenfehler auslesen Status Defektbits (explizit) von LM-II lesen

_No arguments._

### STATUS_FLC_FLA_AHL

Auslesen spezieller Stati KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $28 Stati fuer FLC, FLA und AHL

_No arguments._

### STATUS_FAHRZEUGNEIGUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $2A STATUS_FAHRZEUGNEIGUNG

_No arguments._

### _STATUS_LAMPE_EIN_SENSE_LESEN_LEAR

Senseausgang fuer ausgewaehlte Lampe lesen, FRMFA KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $2D Lampe ein Sensewerte lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Auswahl, welche Lampe geprueft werden soll |

### STEUERN_LAMPEN_DIGITAL

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $03 Dimmwert an PWM-Port Status von LM-II schreiben Ausgewaehlte Lampe voll ein bzw. ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Lampe aus Tabelle auswaehlen |
| AUSGANG_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### STEUERN_LAMPEN_PWM

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $03 Dimmwert an PWM-Port Status von LM-II schreiben Lampe mit Prozentwert ein- bzw. ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table LampNrTexte NAME TEXT Lampe aus Tabelle auswaehlen |
| PWM_WERT | int | 0 bis 100 Prozent Einschaltdauer |

### STEUERN_AL_EINSCHALTEN

Abblendlicht ueber Diagnose ein- bzw. ausschalten KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $0F Abblendlicht ein- bzw. ausschalten Status von LM-II schreiben

| Name | Type | Description |
| --- | --- | --- |
| AL_EIN_AUS | string | Werte: ein, aus table DigitalArgument TEXT |
| AL_ZEIT | int | Werte: 0 bis 254 Einheit: secons Optional argument, by default is 15 sec. |

### STEUERN_LAMPEN_FUNKTIONEN_EINSCHALTEN

Lampenfunktionen ueber Diagnose ein- bzw. ausschalten KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $29 Lampenfunktionen ein- bzw. ausschalten Status von LM-II schreiben

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_LAMPEN_FUNKTION | string | Werte: ein, aus table Lampenfunktion TEXT |
| LAMPEN_EIN_AUS | string | Werte: ein, aus table DigitalArgument TEXT |
| EINSCHALT_ZEIT | int | Werte: 0 bis 254 Einheit: secons Optional argument, by default is 15 sec. |

### STEUERN_BFD_STUFE

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $24 BFD-Stufe ein-/ausschalten Status von LM II schreiben Ausgewaehlte BFD-Stufe ein bzw. ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table BFDStufeTexte NAME TEXT BFD-Stufe aus Tabelle auswaehlen |
| AUSGANG_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### STEUERN_POSITION_LWR

bestimmte Position der LWR anfahren KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $09 Position der LWR anfahren Status von LM II schreiben

| Name | Type | Description |
| --- | --- | --- |
| POS_LWR | long | Winkel fuer LWR Einstellung in 1/100 Grad max. bzw. min. kann mit STATUS_LWR_LESEN ausgelesen werden |
| AUSGANG_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### START_LAMPEN_PRE_DRIVE_CHECK

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $2B Start des Pre-Drive-Checks der Lampen Status von LM2 schreiben

_No arguments._

### _STEUERN_SLEEPMODE_FERTIGUNG_LEAR

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $2C Sleepmode Fertigung Status von LM-II schreiben sofortiger Sleepmode

_No arguments._

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F13 Fahrzeugauftrag Modus  : Default

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

### _CODIERDATEN_BLOCK_LESEN_LEAR

KWP2000: $22 ReadDataByCommonIdentifier $xxxx Codierdaten je nach Block Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | string | Bereich: 0x30xx bis 0x34xx |

### _CODIERDATEN_BLOCK_SCHREIBEN_LEAR

Beschreiben der Codierdaten je nach Block KWP2000: $2E WriteDataByCommonIdentifier $xxxx Codierdaten Modus  : Codieren je nach Block

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN | string | Block+Codierdaten |

### _CODIERDATEN_3400_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3400-Bereich Auslesen der LM2-Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3000_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten im 3000-Bereich Auslesen der ALC-Codierdaten KWP 2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### _CODIERDATEN_3400_SCHREIBEN_AUS_DATEI_LEAR

Beschreiben der Default-Codierdaten Beschreiben der LM2-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $34xx Codierdaten, Default Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten fuer 3400-Bereich Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _CODIERDATEN_KOMPLETT_SCHREIBEN_LEAR

Beschreiben der Default-Codierdaten KWP2000: $2E WriteDataByCommonIdentifier $30xx Codierdaten AHL schreiben $31xx Codierdaten Code schreiben $32xx Codierdaten SMC_L schreiben $33xx Codierdaten SMC_R schreiben $34xx Codierdaten LM2 schreiben Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN_DATEI | string | Dateiname mit Default-Codierdaten Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |
| WARTEZEIT_EIN | string | Werte: ein, aus table DigitalArgument TEXT |

### _READ_LINK_DATE_TIME_LEAR

Auslesen der Linkdate und -time KWP2000: $21 ReadDataByLocalIdentifier $01 Linkdate und -time

_No arguments._

### _READ_EMERGENCY_FALLBACK_COUNTER_LEAR

Auslesen der Fallback Counter KWP2000: $21 ReadDataByLocalIdentifier $02 Fallback Counter

_No arguments._

### _CLR_EMERGENCY_FALLBACK_COUNTER_LEAR

KWP2000: $3B WriteDataByLocalIdentifier $02 NOTLAUF_FALLBACK_COUNTER Modus  : Default

_No arguments._

### _READ_ABS_TIMER_LEAR

Auslesen der Fallback Counter KWP2000: $21 ReadDataByLocalIdentifier $09 ABS_TIMER

_No arguments._

### _CLR_ABS_TIMER_LEAR

KWP2000: $3B WriteDataByLocalIdentifier $09 ABS_TIMER Modus  : Default

_No arguments._

### _HERSTELLER_DATEN_LESEN_LEAR

Auslesen der Herstellerdaten KWP2000: $21 ReadDataByLocalIdentifier $04 Herstellerdaten

_No arguments._

### _HERSTELLER_DATEN_SCHREIBEN_LEAR

Beschreiben der Codierdaten je nach Block KWP2000: $3B WriteDataByLocalIdentifier $04 Herstellerdaten

| Name | Type | Description |
| --- | --- | --- |
| HERSTELLERDATEN | string | Herstellerdaten |

### STATUS_LWR_LESEN

Unterscheidung zwischen dynamischer, automatischer und manueller LWR KWP2000: $21 ReadDataByLocalIdentifier $05 LWR lesen

_No arguments._

### _READ_ENERGY_SAVING_MODE_LEAR

Energy-Saving-Mode auslesen KWP 2000: $22 ReadDataByCommonIdentifier KWP 2000: $100A EnergySavingMode

_No arguments._

### _CBD_ZEICHN_INDEX_LESEN_LEAR

Auslesen des Aenderungsindex aus den Codierdaten KWP2000: $21 ReadDataByLocalIdentifier $06 CBD_ZEICHN_INDEX lesen

_No arguments._

### STATUS_SENSE_INPUTS

Auslesen der Sensewerte der einzelnen Lampen KWP2000: $21 ReadDataByLocalIdentifier $08 Sensewerte lesen

_No arguments._

### STATUS_PIA_DATEN

Auslesen der momentan aktuellen Piadaten KWP2000: $21 ReadDataByLocalIdentifier $0A Piadaten

_No arguments._

### _BRIF_SCHREIBEN_LEAR

Writting the BRIF in EEPROM All the arguments should be supplied KWP2000: $2E WriteDataByCommonIdentifier $34Fx BRIF Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| HWREF | string | Hardware Reference Length is 7 Default value is '009FRM0' |
| PECUHN | string | Physical ECU Hardware Number Format is XX XX XX XX XX XX (6 bytes length) Default value is '00 00 01 23 45 67' |
| DOECUM | string | Date of ECU Manufacturing Format either DD.MM.YYYY or YYMMDD Default value is 15.10.2004 |
| SSI | unsigned char | System Supplier Index Range is 0x00-0xFE Default value is 09 |
| SSECUSN | string | System Supplier ECU Serial Number Length is 9 Default value is '000000001' |
| ERT | unsigned char | Erase Time Range is 0x00-0xFE Default value is 0x10 |
| SIGT | unsigned char | Signature Time Range is 0x00-0xFE Default value is 0x20 |
| RST | unsigned char | Reset Time Range is 0x00-0xFE Default value is 0x02 |
| MXBL | unsigned char | Max block length Range is 0x00-0xFE Default value is 0xF1 |
| VMECUHVN | unsigned char | Vehicle Manufacturer ECU Version Number Range is 0x00-0xFE Default value is 0x01 |
| SNOET | string | System Name Or Engine Type Format is XX XX Default value is '41 4F' |
| ZB_NR | string | ZusBau Number Format is XX XX XX XX XX XX (6 bytes length) Default value is '00 00 01 23 45 67' |
| VAR_NR | unsigned char | Variant Number Range is 0x00-0xFE Default value is 0x01 |

### _BRIF_FILE_LEAR

Writting the BRIF in EEPROM All the arguments should be supplied KWP2000: $2E WriteDataByCommonIdentifier $34Fx BRIF Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FILE_TEXT | string | Format: [Drive]:[Path]\[File].[Ext] |

### STATUS_BETR_H_FUNKTIONEN

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $06 Betriebsstunden fuer alle Funktionen Status von LM2 lesen Lesen der Betriebsstunden der einzelnen Lampenfunktionen des LM2

_No arguments._

### STEUERN_BETR_H_LM2_LOESCHEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $06 Betriebsstunden Status von LM2 schreiben Loeschen aller Betriebsstunden des FRM2

_No arguments._

### STATUS_LWR_POSITION

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $09 STATUS_LWR_POSITION

_No arguments._

### STATUS_XENON_AL_EINSCHALTVERSUCHE

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $14 Xenon-AL-Einschaltversuche Auslesen wie oft das Abblendlicht eingeschaltet wurde

_No arguments._

### STEUERN_XENON_AL_EINSCHALTVERSUCHE_LOESCHEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $14 Xenon-AL-Einschaltversuche Loeschen der AL-Einschaltversuche

_No arguments._

### _WARTEZEIT_LEAR

Wartezeit

| Name | Type | Description |
| --- | --- | --- |
| WARTEZEIT | unsigned char | Wartezeit in Sekunden |

### _RESET_KURZSCHLUSS_SPERRE

Kurzschlusssperre ueber Diagnose ausschalten KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1F Kurzschlusssperre ausschalten Status von LM2 schreiben

| Name | Type | Description |
| --- | --- | --- |
| LAMP_NR | unsigned int |  |

### STATUS_LAMPEN_KURZSCHLUSS

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $20 Lampenkurzschluss auslesen Status Lampenkurzschluesse (explizit) vom LM2 lesen

_No arguments._

### STATUS_LAMPEN_KURZSCHLUSS_WIEDERHOL_COUNTER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $21 Lampenkurzschluss Wiederholzaehler auslesen Status Lampenkurzschlusswiederholzaehler (explizit) vom LM2 lesen

_No arguments._

### STATUS_LAMPEN_KURZSCHLUSS_COUNTER

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $22 Lampenkurzschluss Zaehler auslesen Status Lampenkurzschlusszaehler (explizit) von LM lesen

_No arguments._

### STATUS_LAMPEN_KURZSCHLUSS_COUNTER_MAX

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState $23 Lampenkurzschluss Zaehler Maxwert auslesen Status des max. Wertes des Lampenkurzschlusszaehlers (explizit) vom LM2 lesen

_No arguments._

### STEUERN_SMC_BESTROMEN

KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment $1A SMC bestromen Status von LM-II schreiben Bestromung der SMCs einschalten

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

### _READ_DIAG_RINGSPEICHER_LEAR

KWP 2000: $21 ReadDataByLocalIdentifier $0B DIAG_RINGSPEICHER Modus   : Default

_No arguments._

### _CLR_DIAG_RINGSPEICHER_LEAR

KWP2000: $3B WriteDataByLocalIdentifier $0B DIAG_RINGSPEICHER Modus  : Default

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

### HARTTEXTE

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
| 0x9CA8 | interner Fehler LM-II |
| 0x9CA9 | Klemme 30A Anschluss fehlerhaft |
| 0x9CAA | Klemme 30B Anschluss fehlerhaft |
| 0x9CAB | eine Klemme 15 fehlt |
| 0x9CAC | Bremslichtschalter defekt |
| 0x9CAD | LWR-Poti defekt |
| 0x9CAE | Bedienteilfehler |
| 0x9CAF | Lichtschalterstellung 1 defekt |
| 0x9CB0 | Lichtschalterstellung 2 defekt |
| 0x9CB1 | Dimmer-Poti defekt |
| 0x9CB2 | Sensor Hoehenstand vorne defekt |
| 0x9CB3 | Sensor Hoehenstand hinten defekt |
| 0x9CB4 | Energiesparmode aktiv |
| 0x9CB5 | Unkonsistenz: Softwareversion und Codierindex |
| 0x9CB6 | LWR-Spulenabriss |
| 0x9CB7 | LWR-Treiberfehler |
| 0x9CB8 | Kurzschlussfehler |
| 0x9CB9 | Batterie tiefentladen |
| 0x9CBA | Tiefentladungsschutz der Batterie: Abschaltung Standlicht |
| 0x9CBB | Tiefentladungsschutz der Batterie: Abschaltung Parklicht |
| 0x9CBC | Kommunikation mit StepperMoterBox links gestoert |
| 0x9CBD | Kommunikation mit StepperMoterBox rechts gestoert |
| 0x9CBE | Achtung: Elektronik am linken Scheinwerfer (SMC) meldet Fehler |
| 0x9CBF | Achtung: Elektronik am rechten Scheinwerfer (SMC) meldet Fehler |
| 0x9CC0 | Vergleich Fahrgestellnummer ALC mit SMC links unterschiedlich |
| 0x9CC1 | Vergleich Fahrgestellnummer ALC mit SMC rechts unterschiedlich |
| 0x9CC2 | Hardwareleitung zu SZL fehlt |
| 0x9CC3 | RLS: LinPhysicalBusError |
| 0x9CC4 | RLS: LinProtocolError |
| 0x9CC5 | RLS: NoResponse |
| 0xA8A8 | Fernlicht links defekt |
| 0xA8A9 | Fernlicht rechts defekt |
| 0xA8AA | Abblendlicht links defekt |
| 0xA8AB | Abblendlicht rechts defekt |
| 0xA8AC | Begrenzungslicht links (E60, E65), aussen (E60-Halogen), Zusatzfahrtrichtungsanzeiger links (E63, E64 ab 09/07) defekt |
| 0xA8AD | Begrenzungslicht rechts (E60, E65), aussen (E60-Halogen), Zusatzfahrtrichtungsanzeiger rechts (E63, E64 ab 09/07) defekt |
| 0xA8AE | Nebelscheinwerfer links defekt |
| 0xA8AF | Nebelscheinwerfer rechts defekt |
| 0xA8B0 | Fahrtrichtungsanzeiger links vorne 1 defekt |
| 0xA8B1 | Fahrtrichtungsanzeiger rechts vorne 1 defekt |
| 0xA8B2 | Fahrtrichtungsanzeiger links hinten defekt |
| 0xA8B3 | Fahrtrichtungsanzeiger rechts hinten defekt |
| 0xA8B4 | Seitenmarkierungslicht defekt |
| 0xA8B5 | Bremslicht links defekt |
| 0xA8B6 | Bremslicht rechts defekt |
| 0xA8B7 | Bremslicht mitte defekt |
| 0xA8B8 | Schlusslicht/Bremslicht links defekt |
| 0xA8B9 | Schlusslicht/Bremslicht rechts defekt |
| 0xA8BA | Schlusslicht (E65), Begrenzungslicht (E60-Halogen), links innen defekt |
| 0xA8BB | Schlusslicht (E65), Begrenzungslicht (E60-Halogen), rechts innen defekt |
| 0xA8BC | Kennzeichenlicht links defekt |
| 0xA8BD | Kennzeichenlicht rechts defekt |
| 0xA8BE | Nebelschlusslicht links defekt |
| 0xA8BF | Nebelschlusslicht rechts defekt |
| 0xA8C0 | Rueckfahrlicht links defekt |
| 0xA8C1 | Rueckfahrlicht rechts defekt |
| 0xA8C2 | Fahrtrichtungsanzeiger links vorne 2, Schlusslicht/Bremslicht links 2 (E60, E61 ab 03/07, E63, E64 ab 09/07) defekt |
| 0xA8C3 | Fahrtrichtungsanzeiger rechts vorne 2, Schlusslicht/Bremslicht rechts 2 (E60, E61 ab 03/07, E63, E64 ab 09/07) defekt |
| 0xA8C4 | Tagfahrlicht links defekt |
| 0xA8C5 | Tagfahrlicht rechts defekt |
| 0xA8C6 | Klemme 58g defekt |
| 0xA8C7 | Bi-Xenonklappe defekt |
| 0xE504 | Bus Leitungsfehler K-CAN |
| 0xE507 | Bus Kommunikationsfehler K-CAN |
| 0xE50B | Bus Kommunikationsfehler PT-CAN |
| 0xE514 | Telegramm Lenkwinkel Timeout |
| 0xE515 | Telegramm Status-AHM Timeout |
| 0xE516 | Telegramm Bedienung Lenkstock Timeout |
| 0xE517 | Telegramm Status DSC Timeout |
| 0xE518 | Telegramm Status Fahrlicht Timeout |
| 0xE519 | Telegramm Geschwindigkeit Timeout |
| 0xE51A | Telegramm Gierrate Timeout |
| 0xE51B | Telegramm Klemmenstatus Timeout |
| 0xE51C | Telegramm Fernlichtassistent Timeout |
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
| 0x9CA8 | 0x01 | 0x02 | - | - |
| 0x9CA9 | 0x01 | 0x02 | - | - |
| 0x9CAA | 0x01 | 0x02 | - | - |
| 0x9CAB | 0x01 | 0x02 | - | - |
| 0x9CAC | 0x01 | 0x02 | - | - |
| 0x9CAD | 0x01 | 0x02 | - | - |
| 0x9CAE | 0x01 | 0x02 | - | - |
| 0x9CAF | 0x01 | 0x02 | - | - |
| 0x9CB0 | 0x01 | 0x02 | - | - |
| 0x9CB1 | 0x01 | 0x02 | - | - |
| 0x9CB2 | 0x01 | 0x02 | - | - |
| 0x9CB3 | 0x01 | 0x02 | - | - |
| 0x9CB4 | 0x01 | 0x02 | - | - |
| 0x9CB5 | 0x01 | 0x02 | - | - |
| 0x9CB6 | 0x01 | 0x02 | - | - |
| 0x9CB7 | 0x20 | 0x21 | - | - |
| 0x9CB8 | 0x01 | 0x02 | - | - |
| 0x9CB9 | 0x01 | TIEFENTL | - | - |
| 0x9CBA | 0x01 | 0x02 | - | - |
| 0x9CBB | 0x01 | 0x02 | - | - |
| 0x9CBC | 0x01 | 0x02 | - | - |
| 0x9CBD | 0x01 | 0x02 | - | - |
| 0x9CBE | 0x01 | 0x02 | - | - |
| 0x9CBF | 0x01 | 0x02 | - | - |
| 0x9CC0 | 0x01 | 0x02 | - | - |
| 0x9CC1 | 0x01 | 0x02 | - | - |
| 0x9CC2 | 0x01 | 0x02 | - | - |
| 0x9CC3 | 0x01 | 0x02 | - | - |
| 0x9CC4 | 0x01 | 0x02 | - | - |
| 0x9CC5 | 0x01 | 0x02 | - | - |
| 0x9CC6 | 0x01 | 0x02 | - | - |
| 0x9CC7 | 0x01 | 0x02 | - | - |
| 0x9CC8 | 0x01 | 0x02 | - | - |
| 0x9CC9 | 0x01 | 0x02 | - | - |
| 0x9CCA | 0x01 | 0x02 | - | - |
| 0x9CCB | 0x01 | 0x02 | - | - |
| 0x9CCC | 0x01 | 0x02 | - | - |
| 0x9CCD | 0x01 | 0x02 | - | - |
| 0x9CCE | 0x01 | 0x02 | - | - |
| 0x9CCF | 0x01 | 0x02 | - | - |
| 0x9CD0 | 0x01 | 0x02 | - | - |
| 0x9CD1 | 0x01 | 0x02 | - | - |
| 0x9CD2 | 0x01 | 0x02 | - | - |
| 0xA8A8 | 0x01 | 0x03 | - | - |
| 0xA8A9 | 0x01 | 0x03 | - | - |
| 0xA8AA | 0x01 | 0x03 | - | - |
| 0xA8AB | 0x01 | 0x03 | - | - |
| 0xA8AC | 0x01 | 0x03 | - | - |
| 0xA8AD | 0x01 | 0x03 | - | - |
| 0xA8AE | 0x01 | 0x03 | - | - |
| 0xA8AF | 0x01 | 0x03 | - | - |
| 0xA8B0 | 0x01 | 0x03 | - | - |
| 0xA8B1 | 0x01 | 0x03 | - | - |
| 0xA8B2 | 0x01 | 0x03 | - | - |
| 0xA8B3 | 0x01 | 0x03 | - | - |
| 0xA8B4 | 0x01 | 0x03 | - | - |
| 0xA8B5 | 0x01 | 0x03 | - | - |
| 0xA8B6 | 0x01 | 0x03 | - | - |
| 0xA8B7 | 0x01 | 0x03 | - | - |
| 0xA8B8 | 0x01 | 0x03 | - | - |
| 0xA8B9 | 0x01 | 0x03 | - | - |
| 0xA8BA | 0x01 | 0x03 | - | - |
| 0xA8BB | 0x01 | 0x03 | - | - |
| 0xA8BC | 0x01 | 0x03 | - | - |
| 0xA8BD | 0x01 | 0x03 | - | - |
| 0xA8BE | 0x01 | 0x03 | - | - |
| 0xA8BF | 0x01 | 0x03 | - | - |
| 0xA8C0 | 0x01 | 0x03 | - | - |
| 0xA8C1 | 0x01 | 0x03 | - | - |
| 0xA8C2 | 0x01 | 0x03 | - | - |
| 0xA8C3 | 0x01 | 0x03 | - | - |
| 0xA8C4 | 0x01 | 0x03 | - | - |
| 0xA8C5 | 0x01 | 0x03 | - | - |
| 0xA8C6 | 0x01 | 0x03 | - | - |
| 0xA8C7 | 0x01 | 0x03 | - | - |
| 0xE504 | 0x01 | 0x02 | - | - |
| 0xE507 | 0x01 | 0x02 | - | - |
| 0xE50B | 0x01 | 0x02 | - | - |
| 0xE514 | 0x01 | 0x02 | - | - |
| 0xE515 | 0x01 | 0x02 | - | - |
| 0xE516 | 0x01 | 0x02 | - | - |
| 0xE517 | 0x01 | 0x02 | - | - |
| 0xE518 | 0x01 | 0x02 | - | - |
| 0xE519 | 0x01 | 0x02 | - | - |
| 0xE51A | 0x01 | 0x02 | - | - |
| 0xE51B | 0x01 | 0x02 | - | - |
| 0xE51C | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | - | 18 | 255 | 0 |
| 0x02 | Sensorspannung | Volt | - | unsigned char | - | 5 | 255 | 0 |
| 0x03 | Betriebsstunden | h | - | unsigned char | - | 2 | 1 | 0 |
| 0x10 | Klemme 15 | 0/1 | high | 0x80 | - | - | - | - |
| 0x11 | Klemme R | 0/1 | high | 0x40 | - | - | - | - |
| 0x12 | Standlicht | 0/1 | high | 0x20 | - | - | - | - |
| 0x13 | Parklicht links | 0/1 | high | 0x10 | - | - | - | - |
| 0x14 | Parklicht rechts | 0/1 | high | 0x08 | - | - | - | - |
| 0x15 | Warnblinklicht | 0/1 | high | 0x04 | - | - | - | - |
| 0x16 | Follow me home | 0/1 | high | 0x02 | - | - | - | - |
| 0x20 | LWR-Treiberfehlerbyte 1 | 1 | - | unsigned char | - | - | - | - |
| 0x21 | LWR-Treiberfehlerbyte 2 | 1 | - | unsigned char | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | EEPROM SMC links defekt |
| 0x9309 | Motor Kurvenlicht SMC links defekt |
| 0x930A | Motor LWR SMC links defekt |
| 0x930B | Treiber Kurvenlicht SMC links defekt |
| 0x930C | Spannungsversorgung Sensor SMC links defekt |
| 0x930D | Signal Sensor SMC links defekt |
| 0x930E | Flanke Sensor SMC links defekt |
| 0x930F | LIN SMC links defekt |
| 0x9310 | Schrittverlust Grenze 1 SMC links |
| 0x9311 | Schrittverlust Grenze 2 SMC links |
| 0x9312 | Schrittverlust Grenze 3 SMC links |
| 0x9313 | Schrittverlust Grenze 4 SMC links |
| 0x9314 | Schrittverlust Grenze 5 SMC links |
| 0x9315 | Schrittverlust Grenze 6 SMC links |
| 0x9316 | Spike auf Sensor SMS links |
| 0x9317 | Notlauf aktiv SMC links |
| 0x9318 | unbekannter Fehler 2 SMC links |
| 0x9319 | unbekannter Fehler 3 SMC links |
| 0x931A | unbekannter Fehler 4 SMC links |
| 0x931B | unbekannter Fehler 5 SMC links |
| 0x931C | EEPROM SMC rechts defekt |
| 0x931D | Motor Kurvenlicht SMC rechts defekt |
| 0x931E | Motor LWR SMC rechts defekt |
| 0x931F | Treiber Kurvenlicht SMC rechts defekt |
| 0x9320 | Spannungsversorgung Sensor SMC rechts defekt |
| 0x9321 | Signal Sensor SMC rechts defekt |
| 0x9322 | Flanke Sensor SMC rechts defekt |
| 0x9323 | LIN SMC rechts defekt |
| 0x9324 | Schrittverlust Grenze 1 SMC rechts |
| 0x9325 | Schrittverlust Grenze 2 SMC rechts |
| 0x9326 | Schrittverlust Grenze 3 SMC rechts |
| 0x9327 | Schrittverlust Grenze 4 SMC rechts |
| 0x9328 | Schrittverlust Grenze 5 SMC rechts |
| 0x9329 | Schrittverlust Grenze 6 SMC rechts |
| 0x932A | Spike auf Sensor SMS rechts |
| 0x932B | Notlauf aktiv SMC rechts |
| 0x932C | unbekannter Fehler 2 SMC rechts |
| 0x932D | unbekannter Fehler 3 SMC rechts |
| 0x932E | unbekannter Fehler 4 SMC rechts |
| 0x932F | unbekannter Fehler 5 SMC rechts |
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

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9308 | 0x04 | -- | -- | -- |
| 0x9309 | 0x01 | -- | -- | -- |
| 0x930A | 0x01 | -- | -- | -- |
| 0x930B | 0x01 | -- | -- | -- |
| 0x930C | 0x03 | -- | -- | -- |
| 0x930D | 0x01 | -- | -- | -- |
| 0x930E | 0x01 | -- | -- | -- |
| 0x930F | 0x01 | -- | -- | -- |
| 0x9310 | 0x01 | -- | -- | -- |
| 0x9311 | 0x01 | -- | -- | -- |
| 0x9312 | 0x01 | -- | -- | -- |
| 0x9313 | 0x01 | -- | -- | -- |
| 0x9314 | 0x01 | -- | -- | -- |
| 0x9315 | 0x01 | -- | -- | -- |
| 0x9316 | 0x03 | -- | -- | -- |
| 0x9317 | NOTL | -- | -- | -- |
| 0x9318 | -- | -- | -- | -- |
| 0x9319 | -- | -- | -- | -- |
| 0x931A | -- | -- | -- | -- |
| 0x931B | -- | -- | -- | -- |
| 0x931C | 0x04 | -- | -- | -- |
| 0x931D | 0x01 | -- | -- | -- |
| 0x931E | 0x01 | -- | -- | -- |
| 0x931F | 0x01 | -- | -- | -- |
| 0x9320 | 0x03 | -- | -- | -- |
| 0x9321 | 0x01 | -- | -- | -- |
| 0x9322 | 0x01 | -- | -- | -- |
| 0x9323 | 0x01 | -- | -- | -- |
| 0x9324 | 0x01 | -- | -- | -- |
| 0x9325 | 0x01 | -- | -- | -- |
| 0x9326 | 0x01 | -- | -- | -- |
| 0x9327 | 0x01 | -- | -- | -- |
| 0x9328 | 0x01 | -- | -- | -- |
| 0x9329 | 0x01 | -- | -- | -- |
| 0x932A | 0x03 | -- | -- | -- |
| 0x932B | NOTL | -- | -- | -- |
| 0x932C | -- | -- | -- | -- |
| 0x932D | -- | -- | -- | -- |
| 0x932E | -- | -- | -- | -- |
| 0x932F | -- | -- | -- | -- |
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

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | unsigned char | -- | 18 | 255 | 0 |
| 0x02 | Betriebsstunden | min | -- | unsigned int | -- | 3 | 1 | 0 |
| 0x03 | Sensorspannung | Volt | -- | unsigned char | -- | 5 | 255 | 0 |
| 0x04 | Motortemperatur | °C | -- | unsigned char | -- | 1 | 1 | 0 |
| 0x05 | Bordnetzspannung | Volt | -- | unsigned char | -- | 18 | 255 | 0 |
| 0x10 | NOT_SENS_DEFEKT | 0/1 | high | 0x01 | - | - | - | - |
| 0x11 | NOT_SENS_NOK | 0/1 | high | 0x02 | - | - | - | - |
| 0x12 | NOT_SCHR_VER_NOK | 0/1 | high | 0x04 | - | - | - | - |
| 0x13 | NOT_USENS_NOK | 0/1 | high | 0x08 | - | - | - | - |
| 0x14 | NOT_MOTOR_DEF | 0/1 | high | 0x10 | - | - | - | - |
| 0x15 | NOT_MOTOR_LWR_DEF | 0/1 | high | 0x20 | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | LoadDump aktiviert |
| 0x9309 | Signal vom Regenlichtsensor unplausibel |
| 0x930A | Lichtnotlauf mit Kl.15 aktiv |
| 0x930B | Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x930C | ALC-System defekt |
| 0x930D | ALC-System: AL links abgeschaltet |
| 0x930E | ALC-System: AL rechts abgeschaltet |
| 0x930F | RLS Grund: Dunkelheit aber Abblendlicht aus |
| 0x9310 | Taster Nebelscheinwerfer defekt |
| 0x9311 | Taster Nebelschlusslicht defekt |
| 0x9312 | Taster Warnblinklicht defekt |
| 0x9313 | Schalter Rueckfahrscheinwerfer defekt |
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
| default | 0x01 | 0x02 | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | - | 18 | 255 | 0 |
| 0x02 | Sensorspannung | Volt | - | unsigned char | - | 5 | 255 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### LAMPNRTEXTE

| LAMPNR | NAME | TEXT |
| --- | --- | --- |
| 0x00 | AUSGANG_FL_LINKS | Fernlicht links |
| 0x01 | AUSGANG_FL_RECHTS | Fernlicht rechts |
| 0x02 | AUSGANG_AL_LINKS | Abblendlicht links |
| 0x03 | AUSGANG_AL_RECHTS | Abblendlicht rechts |
| 0x04 | AUSGANG_BEGRL_LINKS | Begrenzungslicht links (E60, E65), aussen (E60-Halogen), Zusatzfahrtrichtungsanzeiger links (E63, E64 ab 09/07) |
| 0x05 | AUSGANG_BEGRL_RECHTS | Begrenzungslicht rechts (E60, E65), aussen (E60-Halogen), Zusatzfahrtrichtungsanzeiger rechts (E63, E64 ab 09/07) |
| 0x06 | AUSGANG_NSW_LINKS | Nebelscheinwerfer links |
| 0x07 | AUSGANG_NSW_RECHTS | Nebelscheinwerfer rechts |
| 0x08 | AUSGANG_FRA_LINKS_VORN | Fahrtrichtungsanzeiger links vorne |
| 0x09 | AUSGANG_FRA_RECHTS_VORN | Fahrtrichtungsanzeiger rechts vorne |
| 0x0A | AUSGANG_FRA_LINKS_HINTEN | Fahrtrichtungsanzeiger links hinten |
| 0x0B | AUSGANG_FRA_RECHTS_HINTEN | Fahrtrichtungsanzeiger rechts hinten |
| 0x0C | AUSGANG_SML | Seitenmarkierungsleuchte |
| 0x0D | AUSGANG_BREMSLICHT_LINKS | Bremslicht links |
| 0x0E | AUSGANG_BREMSLICHT_RECHTS | Bremslicht rechts |
| 0x0F | AUSGANG_BREMSLICHT_MITTE | Bremslicht mitte |
| 0x10 | AUSGANG_SL_BL_LINKS_1 | Schlusslicht/Bremslicht links 1 |
| 0x11 | AUSGANG_SL_BL_RECHTS_1 | Schlusslicht/Bremslicht rechts 1 |
| 0x12 | AUSGANG_SL_BL_LINKS_2 | Schlusslicht/Bremslicht links 2 |
| 0x13 | AUSGANG_SL_BL_RECHTS_2 | Schlusslicht/Bremslicht rechts 2 |
| 0x14 | AUSGANG_KZL_L | Kennzeichenlicht links |
| 0x15 | AUSGANG_KZL_R | Kennzeichenlicht rechts |
| 0x16 | AUSGANG_NSL_LINKS | Nebelschlusslicht links |
| 0x17 | AUSGANG_NSL_RECHTS | Nebelschlusslicht rechts |
| 0x18 | AUSGANG_RFL_LINKS | Rueckfahrlicht links |
| 0x19 | AUSGANG_RFL_RECHTS | Rueckfahrlicht rechts |
| 0x1A | AUSGANG_FRA_LINKS_VORN_2 | Fahrtrichtungsanzeiger links vorne 2, Schlusslicht/Bremslicht links 2 (E60, E61 ab 03/07, E63, E64 ab 09/07) |
| 0x1B | AUSGANG_FRA_RECHTS_VORN_2 | Fahrtrichtungsanzeiger rechts vorne 2, Schlusslicht/Bremslicht rechts 2 (E60, E61 ab 03/07, E63, E64 ab 09/07) |
| 0x1C | AUSGANG_DRL_LINKS | Tagfahrlicht links |
| 0x1D | AUSGANG_DRL_RECHTS | Tagfahrlicht rechts |
| 0x1E | AUSGANG_KL_58G | Klemme 58g |
| 0x1F | AUSGANG_BIX | Bixenon-Klappe |
| 0x20 | AUSGANG_FLC_LED | FLC-LED |
| 0x21 | AUSGANG_WBL | Warnblinktasterbeleuchtung |
| 0xFF | UNKNOWN | unbekannte Lampe |

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

### BFDSTUFETEXTE

| BFD_STUFE | NAME | TEXT |
| --- | --- | --- |
| 0x00 | KEINE_BFD | keine BFD-Stufe |
| 0x01 | BFD_0 | Bremslicht |
| 0x02 | BFD_1 | BFD-Stufe 1 |
| 0x04 | BFD_2 | BFD-Stufe 2 |
| 0x03 | BFD_0_1 | Bremslicht und BFD-Stufe 1 |
| 0x05 | BFD_0_2 | Bremslicht und BFD-Stufe 2 |
| 0x06 | BFD_1_2 | BFD-Stufe 1 und BFD-Stufe 2 |
| 0x07 | BFD_0_1_2 | Bremslicht und BFD-Stufe 1 und BFD-Stufe 2 |
| 0xff | ERROR | falsche Eingabe |

### STAT_LAMPEN_DEFEKTE

| WERT | VSWERT | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | 2 | Nicht Ueberwacht |
| 0x01 | 1 | Fehler |
| 0x02 | 0 | Ok |
| 0x03 | 1 | Fehler |

### LAMPFUNKTEXTE

| LAMPFUNK | NAME | TEXT |
| --- | --- | --- |
| 0x01 | AL | Abblendlicht |
| 0x02 | NSW | Nebelscheinwerfer |
| 0x03 | FL | Fernlicht |
| 0x04 | FRA | Fahrtrichtungsanzeiger |
| 0x05 | BL | Bremslicht |
| 0x06 | BFD_1 | BFD Stufe 1 |
| 0x07 | BFD_2 | BFD Stufe 2 |
| 0x08 | RFL | Rueckfahrlicht |
| 0x09 | TFL | Tagfahrlicht |
| 0x0A | NSL | Nebelschlusslicht |

### NOTL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 |

### ENERGYSAVING

| E_MODE | NAME | TEXT |
| --- | --- | --- |
| 0x00 | ENERGY_MODE_AUS | Energysaving aus |
| 0x01 | ENERGY_MODE_PRODUCTION | Energysaving Produktion |
| 0x02 | ENERGY_MODE_SHIPMENT | Energysaving Shipment |
| 0x04 | ENERGY_MODE_REPAIR_SHOP | Energysaving Repair-Shop |
| 0x08 | ERROR | falscher Eingabewert |

### TIEFENTL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 |
