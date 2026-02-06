# JBBF70.prg

## General

|  |  |
| --- | --- |
| File | JBBF70.prg |
| Type | PRG |
| Jobs | 136 |
| Tables | 47 |
| Origin | BMW EI-61 Philipp Neumeyer |
| Revision | 1.001 |
| Author | Lear Corporation Entwicklung Arseni Martínez, Lear Corporation Entwicklung Carme Tàpias, Lear Corporation Entwicklung Israel Revert, Lear Corporation Entwicklung Sergi Garriga |
| ECU Comment | SGBD of JBBFE2 for E70 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | JBBF2 |  |  |
| ORIGIN | string | BMW EI-61 Philipp Neumeyer |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | Lear Corporation Entwicklung Arseni Martínez, Lear Corporation Entwicklung Carme Tàpias, Lear Corporation Entwicklung Israel Revert, Lear Corporation Entwicklung Sergi Garriga |  |  |
| COMMENT | string | SGBD of JBBFE2 for E70 |  |  |
| PACKAGE | string | 1.31 |  |  |
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

### STEUERN_MEMORIES_LOESCHEN

Delete FZM memories (SOLL, IST, secondary, primary) KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE2 commonProjectSpecific

_No arguments._

### STEUERN_WECKRINGSPEICHER_LOESCHEN

Delete waking registration memory KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE8 commonProjectSpecific

_No arguments._

### STATUS_WECKRINGSPEICHER_LESEN

Reads waking registration memory KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE9 commonProjectSpecific

_No arguments._

### STATUS_PRIMAERSPEICHER_FZM_LESEN

Reads primary control memory KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE6 commonProjectSpecific

_No arguments._

### STATUS_SEKUNDAERSPEICHER_FZM_LESEN

Read secondary control memory KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE7 commonProjectSpecific

_No arguments._

### STATUS_SOLLSTAND_FZM_LESEN

Reads ISTDATEN memory KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE5 commonProjectSpecific

_No arguments._

### STATUS_ISTSTAND_FZM_LESEN

Reads ISTDATEN memory KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE4 commonProjectSpecific

_No arguments._

### READ_ENERGY_SAVING_MODE

Energy-Saving-Mode auslesen KWP 2000: $22 ReadDataByCommonIdentifier KWP 2000: $100A EnergySavingMode

_No arguments._

### _READ_MEMORY_BY_ADDRESS

Selected MEMORY reading by Address KWP 2000: $23  ReadMemoryByAddress KWP 2000: $02  External EEPROM KWP 2000: $04  Internal RAM

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Type of Memory to read out 2->External EEPROM 4->Internal RAM |
| MEMORY_ADDRESS | long | Address Offset to start reading out Maximum 3 bytes Base Address: e2prom   ->0x00 Ram(ST30)->0xA0000000 |
| MEMORY_SIZE | int | Number of bytes to be read Max: DiagBufferDataLength-1 |

### _WRITE_MEMORY_BY_ADDRESS

Selected MEMORY writing by Address KWP 2000: $3D  WriteMemoryByAddress KWP 2000: $02  External EEPROM KWP 2000: $04  Internal RAM

| Name | Type | Description |
| --- | --- | --- |
| BINARY_BUFFER | binary | Binary Buffer Alle Daten in HEX Byte 0	: High Byte Memory Address to write in Byte 1	: Middle Byte Memory Address to write in Byte 2	: Low Byte Memory Address to write in Byte 3	: Type of Memory 2->External EEPROM 4->Internal RAM Byte 4	: Number of Data to record Byte 5+ N of Data: Record Values Max. BINARY_BUFFER Size -> DiagBufferDataLength |

### _READ_DISP_EE

Read EEPROM EE Struct and Disp Flags KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C000 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0->default 1->DISP1_ADR,DISP2_ADR 2->UIF_EEPROM.Aktuelles UserInfoField 3->PRGREFB.   ProgrammReferenz Backup 4->VMECUHNB.  VehicleManufacturerECUHardware*Number Backup 5->PROGS.     Programmierstatus 6->RANDOM.    Initialisierung des Rauschgenerators |

### _WRITE_DISP_EE

Write EEPROM EE Struct and Disp Flags KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFFF commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0->default 1->DISP1_ADR 2->DISP2_ADR 3->PROGS |
| WERT | int |  |

### _READ_BRIF

Lear specific Job for reading BRIF from RAM KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C001 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0-> default 1-> HWREF.    HardwareReferenz 2-> PECUHN.   physicalECUHardwareNumber 3-> DOECUM.   DateOfECUManufacturing 4-> SSI.      SystemSupplierIndex 5-> SSECUSN.  SystemSupplierECUSerialNumber 6-> ERT.      eraseTime 7-> SIGT.     signTime 8-> RST.      resetTime 9-> MXBL.     maximaleBlockLaenge 10->VMECUHVN. VehicleManufacturerECUHWVersionNumber 11->UIF.      UserInfoField Ersteintrag |

### _READ_ZIF

Lear specific Job for reading ZIF from RAM KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C002 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0->default 1->PRGREF.    ProgrammReferenz 2->VMECUHN.   VehicleManufacturerECUHardware*Number 3->VMECUSLVN. VehicleManufacturerECUSoftwareLayerVersionNumber 4->VMCI.      VehicleManufacturerCodingIndex 5->VMDI.      VehicleManufacturerDiagnosticIndex 6->TO_FILL.   damit signatur bei 0x10050 liegt 7->SIGNATUR |

### _READ_LENGTH_DIAG_BUFFER

Read Diag Buffer Lenth KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C003 commonProjectSpecific

_No arguments._

### STATUS_VERSION_GATEWAYMODULES

Lesen der Versionsnummer der Gateway software, gateway tabelle, software version KWP2000: $21 ReadDataByLocalIdentifier $6F RecordLocalId Modus  : Default

_No arguments._

### _STATUS_VERSION_GATEWAY_FILES

Lesen der Versionsnummer der Gateway software Dateien KWP2000: $21 ReadDataByLocalIdentifier $6A RecordLocalId Modus  : Default

_No arguments._

### STEUERN_FENSTERHEBER_DENORMIEREN

Denormiert gewählten Fensterheber Denormalize selected Window KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $00 FH denormieren

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection Auswahl des Fensterhebers, der denormiert werden soll: 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STEUERN_FENSTERHEBER_EINLERNEN_OHNE_EKS

Normiert gewählten Fensterheber (ohne EKS) Normalize selected Window (without Apinch) Dauer max. 5 sec KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $01 Einlernen der Fensterheber

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection Auswahl des Fensters, dass eingelernt werden soll: 0x00: Vorgang abbrechen 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STEUERN_FENSTERHEBER_EINLERNEN

Einlernen der Fensterheber Normiert gewaehlten Fensterheber (mit EKS) Normalize selected Window (with Apinch) Einlernvorgang per Diagnose muss ohne Randbedingungen ausgefuehrt werden koennen Ob Einlernvorgang noch laeuft ist ueber: Job: STATUS_TUER Result: STAT_FH_*_EINLERNENVORGANG_AKTIV abrufbar. Ob ein Fenster eingelernt ist ueber: Result: STAT_FH_*_EINGELERNT KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH EKS JOBS $07 ShortTermAdjustment $02 Hublaenge zum Einlernen aus Codierdaten lesen und Einlernen starten

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STATUS_FENSTERHEBER_HINTEN

Gibt aktuellen Zustand Fensterheber wieder Status Rear Windows (z.B. Position, Normierung, Verfahrrichtung, etc) KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $03 Stati der Fensterheber fuer JBBFE2

_No arguments._

### STEUERN_FENSTERHEBER_HINTEN

Verfaehrt gewaehlten Fensterheber gemaeß Control Rear Windows angegebener Richtung und Zeit (ms) KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $04 Ansteuern FH

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG_FH_FAH | string | table FH_RICHTUNG AUSWAHL_RICHTUNG TEXT Driving direction Rear Driver Window Auswahl der Richtung, in der das Fahrertuerfenster verfahren soll: AUS(0), AUF(1), ZU(2) |
| ANSTEUER_ZEIT_FAH | int | Driving Time Rear Driver Door, in steps of 100 ms Zeit in 100ms, die der FH angesteuert werden soll, d.h. 1 = 100ms 15 sek. max. (150) 0: kein FATH Steuern |
| RICHTUNG_FH_BFH | string | table FH_RICHTUNG AUSWAHL_RICHTUNG TEXT Driving direction Rear Passenger Window Auswahl der Richtung, in der das Beiahrertuerfenster verfahren soll: AUS(0), AUF(1), ZU(2) |
| ANSTEUER_ZEIT_BFH | int | Driving Time Rear Driver Door, in steps of 100 ms Zeit in 100ms, die der FH angesteuert werden soll, d.h. 1 = 100ms 15 sek. max. (150) 0: kein BFTH Steuern |
| IM_PANIK_MODUS | int | Control Window in Panic Mode Step 1 Ansteuern den FH im Panikmodus Stufe 1 NORMAL MODUS(0), PANIK MODUS(1) default: NORMAL MODUS |

### STATUS_FH_LOGGER_DENORMIERER

Fensterheber Denormierungslogger auslesen Lesen von EE_FH_LOG_DATA KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $05 EE_FH_LOG_DATA Status

_No arguments._

### _STATUS_FH_LOGGER_DENORMIERER_LEAR

Fensterheber Denormierungslogger auslesen Lesen von EE_FH_LOG_DATA KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $05 EE_FH_LOG_DATA Status

_No arguments._

### STEUERN_FH_LOGGER_DENORMIERER

Denormierungslogger löschen Loeschen von EE_FH_LOG_DATA des jbbfe2 KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $05 EE_FH_LOG_DATA Loeschen

_No arguments._

### STATUS_FH_LOGGER_REVERSIERER

Fensterheber Reversierlogger auslesen Lesen von EE_FH_REV_DATA KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $08 EE_FH_REV_DATA Status

_No arguments._

### _STATUS_FH_LOGGER_REVERSIERER_LEAR

Fensterheber Reversierlogger auslesen Lesen von EE_FH_REV_DATA KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $08 EE_FH_REV_DATA Status

_No arguments._

### STEUERN_FH_LOGGER_REVERSIERER

Reversierungslogger löschen Loeschen von EE_FH_REV_DATA des jbbfe2 KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH BROSE JOBS $07 ShortTermAdjustment $08 EE_FH_REV_DATA Loeschen

_No arguments._

### STEUERN_FENSTERHEBER_MESSDATEN_AKTIVIEREN

Messdatenausgabe fuer FH starten KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $06 MESSDATEN_AKTIVIEREN

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FENSTER | int | Auswahl des Fensterhebers (ARGUMENT aus table AUSWAHL_FENSTER ARGUMENT BESCHREIBUNG) Window Selection 0x00: Vorgang abbrechen 0x13: Fahrerseite hinten 0x14: Beifahrerseite hinten 0x22: Fahrerseite und Beifahrerseite hinten 0x40: Alle |

### STATUS_QUALITAET_FENSTERHEBERLAUF

Qualitaetsbewertung Fensterheber Fensterheber muss eingelernt sein und mind. einmalig mit Panikoption = 1 verfahren worden sein KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $XX XX

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_BAUREIHE | string | Auswahl der Baureihe (ARGUMENT aus table FH_AUSWAHL_BAUREIHE) Default -> E70 E70: E70 E87: E87 E90: E90 E91: E91 E92: E92 E93: E93 |

### _STATUS_FH_ADAPTIONSSPEICHER_LESEN

Adaptionsdaten Fensterheber KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $07 ECHT_ZEIT_DATEN

_No arguments._

### STEUERN_FH_ADAPTIONSSPEICHER_LOESCHEN

Adaptionsdaten Fensterheber Loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $0E ECHT_ZEIT_DATEN ZONE 4 Loeschen

_No arguments._

### _ECHTZEITDATEN_BROSE_LESEN

Echtzeitdaten vom Brose auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $01 ReportCurrentState $07 ECHT_ZEIT_DATEN

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_ZONE | int | Auswahl der Zone auszulesen 1 -> zone_4_1_fat [0]..[84] 2 -> zone_4_2_fat [85]..[169] 3 -> zone_4_3_fat [170]..[254] 4 -> zone_4_4_fat [255]..[283] 5 -> zone_5_fat 6 -> zone_6_fat 7 -> zone_7_fat 8 -> zone_4_1_bft [0]..[84] 9 -> zone_4_2_bft [85]..[169] 10 -> zone_4_3_bft [170]..[254] 11 -> zone_4_4_bft [255]..[283] 12 -> zone_5_bft 13 -> zone_6_bft 14 -> zone_7_bft |

### _STEUERN_DIAGNOSE_BROSE_FH_1

Status von JBBFE2 schreiben KWP2000: $30 InputOutputControlByLocalIdentifier $07 FH WOUT Logik JOBS $07 ShortTermAdjustment $09 Diagnose fuer BROSE-FH

| Name | Type | Description |
| --- | --- | --- |
| BROSE_DATEN_1 | string | Diagnosedaten |

### _STATUS_FH_EKS_CODDATA

Coding EKS BROSE reading from RAM KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $3500-0x350F commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| EKS_AUSWAHL | int | Select EKS(Apinch) Supplier 1: BROSE 2: KOSTAL |
| BLOCK | int | Coding Block to read out: BROSE:  0-15 KOSTAL: 0-3 |

### _STEUERN_FH_EKS_CODDATA

Coding EKS BROSE writing to EEPROM and RAM KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $3500-0x350F commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| BINARY_BUFFER | binary | Binary Buffer Alle Daten in HEX EKS Hersteller Auswahl Byte 0	: EKS(Apinch) Supplier (1: BROSE, 2: KOSTAL) Byte 1	: Coding Block to write in (0-15) Byte 2 + 15: Data to record (16 Bytes) |

### _SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse_LEAR F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

### _SLEEP_MODE_LEAR

Send ECU to Sleep Mode without waiting the busses to stop KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $02 Specific Lear Modus  : Default

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_1

EnergieDatenSpeicher Teil 1 -Einschlafverhinderer- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE1 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_2

EnergieDatenSpeicher Teil 2 -Wecker- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE2 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_3

EnergieDatenSpeicher Teil e -Wecker IDs- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE3 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_DETAIL_BLOCK_3

EnergieDatenSpeicher Teil e -Wecker IDs- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE3 commonProjectSpecific

_No arguments._

### STEUERN_HISTORIENSPEICHER_LOESCHEN

EnergieDatenSpeicher Teil 1 TEIL 2 und Teil 3 loeschen KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE0 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_MEM | string | Use 1 for Block 1, 2 for Block 2, 3 for Block 3 If "no parameter" all blocks will be deleted  |

### STATUS_DIGITAL_INPUTS

Auslesen der Stati von den digitalen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Inputs $01 ReportCurrentState

_No arguments._

### STATUS_DIGITAL_OUTPUTS

Auslesen der Stati von den digitalen Ausgaengen KWP2000: $30 InputOutputControlByLocalIdentifier $02 Digitale Outputs $01 ReportCurrentState

_No arguments._

### STATUS_ANALOG_INPUTS

Auslesen der Stati von den analogen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $03 Analoge Inputs $01 ReportCurrentState

_No arguments._

### STATUS_ANALOG_OUTPUTS

Auslesen der Stati von den analogen Ausgaengen KWP2000: $30 InputOutputControlByLocalIdentifier $04 Analoge Outputs $01 ReportCurrentState

_No arguments._

### STEUERN_DIGITAL_INPUT

Digitale Input direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Input $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table DigitalInputNrTexte DINNR NAME |
| WERT | string | table DigitalInputNrTexte WERT |

### STEUERN_DIGITAL_OUTPUT

Digitale Output direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $02 Digitale Ouput $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table DigitalOutputNrTexte DOUTNR NAME |
| WERT | string | table DigitalOutputNrTexte WERT |

### STEUERN_ANALOG_INPUT

Analoge Input direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $03 Analoge Input $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table AnalogInputNrTexte AINNR NAME |
| WERT | string | table AnalogInputNrTexte WERT |
| WERT2 | string | table AnalogInputNrTexte WERT nützlich nur fuer AUCSENSOR Tastverhältnis valid only for AUCSENSOR Duty-Cycle |
| ART_WERT | string | "nein"-> ADC register Wert "ja"  -> (PH) Wert default "nein" table DigitalArgument TEXT |

### STEUERN_ANALOG_OUTPUT

Analoge Output direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $04 Analoge Output $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table AnalogOutputNrTexte AOUTNR NAME |
| WERT | string | table AnalogOutputNrTexte WERT |

### STEUERN_BEENDEN

Kontrolle an JBBFE zurueckgeben KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Input $02 Digitale Output $03 Analoge Input $04 Analoge Output $00 ReturnControToECU

_No arguments._

### _STATUS_VAR_IAP_WWS_ASCET_INPUT

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $00 Wiper/Washer System Ascet Model $00 Input Variables

_No arguments._

### _STATUS_VAR_IAP_WWS_ASCET_OUTPUT

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $00 Wiper/Washer System Ascet Model $01 Output Variables

_No arguments._

### _STATUS_VAR_IAP_WWS_ASCET_COD

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $00 Wiper/Washer System Ascet Model $02 Coding Variables

_No arguments._

### _STATUS_VAR_IAP_PWR_ASCET_INPUT

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $01 Power Window Ascet Model $00 Input Variables

_No arguments._

### _STATUS_VAR_IAP_PWR_ASCET_OUTPUT

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $01 Power Window Ascet Model $01 Output Variables

_No arguments._

### _STATUS_VAR_IAP_PWR_ASCET_COD

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $01 Power Window Ascet Model $02 Coding Variables

_No arguments._

### _STATUS_VAR_CAN_PWR

Auslesen der Stati von den Fensterheber CAN Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 CAN Variables $01 ReportCurrentState $08 PWR

_No arguments._

### _STATUS_VAR_IAP_PWR

Auslesen der Stati von den Fnesterheber Internal Varablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $08 PWR

_No arguments._

### _STATUS_VAR_IAP_FZM

Auslesen der Stati von den analogen Ausgaengen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $09 FZM

_No arguments._

### _STATUS_VAR_IAP_ATMEL

Auslesen der Stati von den analogen Ausgaengen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState $0A Atmel

_No arguments._

### _FLASH_COMICRO

Internen Flashvorgang des Co-Prozessors anstossen KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE4 commonProjectSpecific

_No arguments._

### _STATUS_COMICRO

KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C200 commonProjectSpecific

_No arguments._

### _LEAR_PLx_EOL_CONFIGURATION

Configuration for the LEAR End of Line KWP2000: $3B WriteDataByLocalIdentifier $7A RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| VARIANT_BYTE | string | Variant table Variant_table VARIANT_BYTE |
| SERIENNUMMER | string | serial number 9-stellig |
| AIF_FG_NR | string | Fahrgestellnummer 7-stellig |
| AIF_DATUM | string | Datum der SG-Programmierung in der Form TTMMJJ |
| AIF_ZB_NR | string | Zusammenbaunummer 7-stellig |

### READ_VARIANT

Lesen der Variante der Plattine KWP2000: $21 ReadDataByLocalIdentifier $6E RecordLocalId Modus  : Default

_No arguments._

### STEUERN_WASCHDUESE_AUSSENSPIEGEL

Schreiben die Waschduese und Aussenspiegel parameter KWP2000: $3B WriteDataByLocalIdentifier $79 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_JWH_TIMER | unsigned int | Control the Jet Washer and Mirror Heater for the time passed in this parameter. Unit: Steps of 10 ms (milliseconds) Steuern der Waschduesen/Aussenspiegelheizung während die in diesem Parameter eingefuehrte Zeit Einheit: Stufen von 10 ms (MILLISEKUNDEN) |

### _EEPROM_INIT

Initialise the EEPROM KWP2000: $3B WriteDataByLocalIdentifier $7E RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| ACTION | string | Action to do with the EEPROM table Eeprom_Init_table ACTION_BYTE |

### AIF_LESEN_READECU

Auslesen des Anwender Informations Feldes KWP2000: $1A ReadECUIdentification $86 CurrentUIFDataTable Modus  : Default

_No arguments._

### _DTC_ENABLE_GET

KWP2000: $21 ReadDataByLocalIdentifier $70 RecordLocalId Returns the status of DTC_enable Cache14 2 bit / DTC 1st ..... Enabled/ Disabled 2nd ..... Protect / Unprotect Load

_No arguments._

### _DTC_ENABLE_SET

Modifies EEpromCache14 (DTC enable/disable) KWP2000: $3B WriteDataByLocalIdentifier $70 RecordLocalId 2 bit / DTC 1st ..... Enabled/ Disabled 2nd ..... Protect / Unprotect Load

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Byte-number where the DTC is included |
| WERT | string | Value to be stored |

### _DTC_ENABLE_ALL

Modifies EEpromCache14 (DTC enable/disable) KWP2000: $3B WriteDataByLocalIdentifier $71 RecordLocalId Sets all DTCs for Protection

_No arguments._

### _DTC_DISABLE_ALL

Modifies EEpromCache14 (DTC enable/disable) KWP2000: $3B WriteDataByLocalIdentifier $72 RecordLocalId Sets all DTCs for Protection

_No arguments._

### STATUS_SCHALTERBLOCK_TUER

Abfragen der Stati der angeschlossenen Schalterbloecke KWP2000: $30 InputOutputControlByLocalIdentifier $08 BAUSTEIN_TUER $01 ReportCurrentState $00 SCHALTERBLOCK_TUER

_No arguments._

### STATUS_TUER

Status-Abfragen Tuer Beinhaltet Fenster, Fensterheber, Spiegel und Zentralverriegelung KWP2000: $30 InputOutputControlByLocalIdentifier $08 BAUSTEIN_TUER $01 ReportCurrentState $01 STATUS_TUER

_No arguments._

### STEUERN_DIGITAL_TUER

Ansteuerung der digitalen Eingaenge KWP2000: $30 InputOutputControlByLocalIdentifier $08 BAUSTEIN_TUER $07 ShortTermAdjustment $02 STEUERN_TUER

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | int | Auswahl des Elements (ARGUMENT aus table STEUERN_DIGITAL_VERFAHREN) |
| AKTION | int | Aktion die durchgefuehrt werden soll Bei digitalen Ansteuerungen entweder 0 oder 1 Bei Ansteuerungen per Zeitangabe wird die Zeit in ms-Schritten angegeben Max.7000 (7 sek.) |

### STEUERN_SPIEGEL_HEIZUNG

Ein bzw. Ausschalten der Spiegelheizung per Diagnose

| Name | Type | Description |
| --- | --- | --- |
| SPIEGEL_HEIZUNG | int | 0: Spiegelheizung ausschalten 1: Spiegelheizung einschalten |

### STEUERN_ZWP

Schreiben die Zussatzwasserpumpe parameter KWP2000: $3B WriteDataByLocalIdentifier $77 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_ZWP_TIMER | unsigned int | Control the Additional water pump for the time passed in this parameter. Unit: Steps of 10 ms (milliseconds) Steuern der Zussatzwasserpumpen während die in diesem Parameter eingefuehrte Zeit Einheit: Stufen von 10 ms (MILLISEKUNDEN) |

### STEUERN_WASSERVENTIL_FAHRER

Schreiben die Wasserventil parameter KWP2000: $3B WriteDataByLocalIdentifier $78 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_WV_TIMER | unsigned int | Control the  water valve 1 (fahrer)  for the time passed in this parameter. Unit: Steps of 10 ms (milliseconds) Steuern der wasserventil während die in diesem Parameter eingefuehrte Zeit Einheit: Stufen von 10 ms (MILLISEKUNDEN) |

### STEUERN_WASSERVENTIL_BEIFAHRER

Schreiben die Wasserventil parameter KWP2000: $3B WriteDataByLocalIdentifier $76 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_WV_TIMER | unsigned int | Control the  water valve 2 (beifahrer) for the time passed in this parameter. Unit: Steps of 10 ms (milliseconds) Steuern der wasserventil während die in diesem Parameter eingefuehrte Zeit Einheit: Stufen von 10 ms (MILLISEKUNDEN) |

### STATUS_CODIERBITS

Einige Codierdaten lesen KWP2000: $22   ReadDataByCommonIdentifier $3000 CodingDataSet

_No arguments._

### _SAVE_LEAR_EOL_DATA

Data available for the LEAR End of Line KWP2000: $3B WriteDataByLocalIdentifier $7B RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| LEAR_PART_NUMBER | string | Lear part number 9-digits |
| YEAR | string | Year 20xx 2-digits |
| DAY_OF_THE_YEAR | string | Day of the year 3-digits |
| SERIAL_NUMBER | string | Serial Number 3-digits |
| BOARD_IDENTIFIER | string | Board identifier 1-digit |

### _READ_LEAR_EOL_DATA

KWP 2000: $21   ReadDataByCommonIdentifier KWP 2000: $75   ProjectSpecific

_No arguments._

### _PERFORMANCE_ANALYSIS

Reading the Performing Analysis KWP2000: $21 ReadDataByLocalIdentifier $6C RecordLocalId Modus  : Default

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
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
| 0x9C5E | DRUCK_SENSOR |
| 0x9C69 | FONDSCHICHTUNGSPOTI |
| 0xA6C8 | HECKSCHEIBENHEIZUNG_RELAIS |
| 0xA6C9 | WISCHER_FRONT_BLOCKIERT |
| 0xA6CA | WISCHER_STUFE_1_RELAIS |
| 0xA6CB | WISCHER_STUFE_2_RELAIS |
| 0xA6CC | SRA_RELAIS |
| 0xA6CD | WISCHER_HECK_BLOCKIERT |
| 0xA6CE | WISCHER_HECK_RELAIS |
| 0xA6CF | AUC_SENSOR |
| 0xA6D0 | KOMPRESSORVENTIL |
| 0xA6D1 | ZUSATZWASSERPUMPE |
| 0xA6D2 | WASSERVENTIL_1 |
| 0xA6D3 | WASCHEN_FRONT |
| 0xA6D4 | ZV_ENTRIEGELN_RELAIS |
| 0xA6D5 | ZV_VERRIEGELN_RELAIS |
| 0xA6D6 | ZV_SICHERN_RELAIS |
| 0xA6D7 | ZV_VERRIEGELN_FT_RELAIS |
| 0xA6D8 | FH_BEIFAHRER_HINTEN_ZU_RELAIS |
| 0xA6D9 | FH_BEIFAHRER_HINTEN_AUF_RELAIS |
| 0xA6DA | FH_FAHRER_HINTEN_ZU_RELAIS |
| 0xA6DB | FH_FAHRER_HINTEN_AUF_RELAIS |
| 0xA6DC | WASCHEN_HECK |
| 0xA6DD | SONNENROLLO_LADERAUMABDECKUNG |
| 0xA6DE | AUSSENSPIEGEL_HEIZUNG |
| 0xA6E0 | SITZHEIZUNG_FAHRER |
| 0xA6E1 | SITZHEIZUNG_BEIFAHRER |
| 0xA6E2 | SCA_RELAIS |
| 0xA6E3 | HECKKLAPPE_OBEN |
| 0xA6E4 | SENSOR_TANK_LINKS |
| 0xA6E5 | SENSOR_TANK_RECHTS |
| 0xA6E6 | SCHALTER_FH_BEIFAHRER_VORNE |
| 0xA6E7 | Energiesparmode aktiv |
| 0xA6E8 | ZV_WIEDERHOLSPERRE |
| 0xA6E9 | VERDECKKASTENSCHLOSS |
| 0xA728 | SCHALTER_FH_BEIFAHRER_HINTEN |
| 0xA729 | SCHALTER_FH_FAHRER_HINTEN |
| 0xA72A | HALLSENSOR1_FH_FA_HINTEN |
| 0xA72B | HALLSENSOR2_FH_FA_HINTEN |
| 0xA72C | HALLSENSOR1_FH_BF_HINTEN |
| 0xA72D | HALLSENSOR2_FH_BF_HINTEN |
| 0xA72E | WASSERVENTIL_2 |
| 0xA72F | KOMPRESSOR_KUPPLUNG |
| 0xA730 | BISTABILES_RELAIS_1 |
| 0xA731 | BISTABILES_RELAIS_2 |
| 0xA732 | PT_WAKEUP_LEITUNG |
| 0xA733 | DC_DC_WANDLER |
| 0xA734 | EVV_VENTIL_ABSCHALTURSACHE |
| 0xA735 | EVV_VENTIL_ANSTEURPFAD_1 |
| 0xA736 | EVV_VENTIL_ANSTEURPFAD_2 |
| 0xA737 | K_CAN_ID2BF_PL4_WASSERVENTIL_TIMEOUT |
| 0xC907 | K_CAN_KOMMUNIKATION |
| 0xC908 | K_CAN_EINTRAHT_BETRIEB |
| 0xC90B | PT_CAN_KOMMUNIKATION |
| 0xC914 | K_CAN_ID246_STATUSKLIMA_TIMEOUT |
| 0xC915 | K_CAN_ID246_KOMPRESSORVENTIL_UNGUELT |
| 0xC916 | K_CAN_ID246_HECKSCHHEIZUNG_UNGUELT |
| 0xC917 | K_CAN_ID246_ZUSWASSERPUMP_UNGUELT |
| 0xC918 | PT_CAN_ID2A6_BEDIENUNG_WISCHER_TIMEOUT |
| 0xC919 | PT_CAN_ID1B6_TIMEOUT |
| 0xC91A | PT_CAN_ID1B6_WASSERV_UNGUELT |
| 0xC91B | K_CAN_ID1E7_SITZHEIZUNG_FA_UNGUELT |
| 0xC91C | K_CAN_ID1E8_SITZHEIZUNG_BF_UNGUELT |
| 0xC91D | K_CAN_ID246_KOMPRESSOR_KUPPLUNG_UNGUELT |
| 0xC91E | K_CAN_ID_130_KLEMMENSTATUS |
| 0xC91F | K_CAN_ID_330_KILOMETERSTAND_REICHWEITE_TIMEOUT |
| 0xC920 | PT_CAN_ID_1A0_GESCHWINDIGKEIT |
| 0xC921 | PT_CAN_ID_AA_TORQUE_3 |
| 0xC922 | PT_CAN_ID_C4_LENKRADWINKEL |
| 0xC923 | PT_CAN_ID_B5_DREHMOMENT_ANF_EGS_UNGUELT |
| 0xC924 | PT_CAN_ID_B5_DREHMOMENT_ANF_EGS_TIMEOUT |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Geschwindigkeit | km/h | high | unsigned int | - | 1 | 10 | 0 |
| 0x02 | BatterieSpannung | volt | high | unsigned int | - | 6675 | 240640 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

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
| 0xC801 | ERR_SWITCH_RESET_SVAUS |
| 0xC802 | ERR_SWITCH_RESET_WAKEUP |
| 0xC803 | ERR_SWITCH_RESET_NOT_SLEEP |
| 0xC804 | ERR_SWITCH_OFF_STROMZWEIG |
| 0xC805 | ERR_SWITCH_OFF_WAKEUP |
| 0xC806 | ERR_SWITCH_OFF_NOT_SLEEP |
| 0xC807 | ERR_SWITCH_OFF_TRANSPORT |
| 0xC808 | DIAG_PWRDWN_BEI_NICHT_EINSCHLAFEN |
| 0xC809 | DIAG_PWRDWN_BEI_WECKER |
| 0xC80A | DIAG_RESET_BEI_NICHT_EINSCHLAFEN |
| 0xC80B | DAUER_EIN_KL15_KLR |
| 0xC80C | ERR_DIAG_CAN_KOMMUNIKATION |
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
| 0xC801 | Table_C801 | - | - | - |
| 0xC802 | Table_C802 | - | - | - |
| 0xC803 | Table_C803 | - | - | - |
| 0xC804 | Table_C804 | - | - | - |
| 0xC805 | Table_C805 | - | - | - |
| 0xC806 | Table_C806 | - | - | - |
| 0xC807 | Table07_08_09_0A_0C | - | - | - |
| 0xC808 | Table07_08_09_0A_0C | - | - | - |
| 0xC809 | Table07_08_09_0A_0C | - | - | - |
| 0xC80A | Table07_08_09_0A_0C | - | - | - |
| 0xC80B | Table_C80B | - | - | - |
| 0xC80C | Table07_08_09_0A_0C | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x02 | AUSSEN_TEMP | Grad C | low | unsigned char | - | 0.5 | 1 | -40 |
| 0x03 | VBAT_WHEN_KL15 | Volt | low | unsigned int | - | 1335 | 48128 | 0 |
| 0x04 | CURRENT_VBAT | Volt | low | unsigned int | - | 1335 | 48128 | 0 |
| 0x06 | STAT_RELATIVZEIT_WERT | s | low | signed long | - | 1 | 1 | 0 |
| 0x07 | STAT_WECKER_CAN_ID_1 | Hex | low | unsigned int | - | 1 | 1 | 0 |
| 0x08 | STAT_WECKER_CAN_ID_1 | Hex | low | unsigned int | - | 1 | 1 | 0 |
| 0x09 | STAT_WECKER_CAN_ID_1 | Hex | low | unsigned int | - | 1 | 1 | 0 |
| 0x0A | STAT_WECKER_CAN_ID_1 | Hex | low | unsigned int | - | 1 | 1 | 0 |
| 0x0B | WECKER_CAN_ANZ_1 | 1-n | low | unsigned char | - | 1 | 1 | 0 |
| 0x0C | WECKER_CAN_ANZ_2 | 1-n | low | unsigned char | - | 1 | 1 | 0 |
| 0x0D | WECKER_CAN_ANZ_3 | 1-n | low | unsigned char | - | 1 | 1 | 0 |
| 0x0E | WECKER_CAN_ANZ_4 | 1-n | low | unsigned char | - | 1 | 1 | 0 |
| 0x0F | DELTA_T_TIMER | s | low | signed long | - | 1 | 1 | 0 |
| 0x11 | DURATION_TIMER | s | low | unsigned int | - | 1 | 1 | 0 |
| 0x12 | WAKE_LINE | 1/0 | low | unsigned char | - | 1 | 1 | 0 |
| 0x13 | STAT_VERURSACHER_1 | Hex | low | unsigned char | - | 1 | 1 | 0 |
| 0x14 | STAT_VERURSACHER_2 | Hex | low | unsigned char | - | 1 | 1 | 0 |
| 0x15 | STAT_VERURSACHER_3 | Hex | low | unsigned char | - | 1 | 1 | 0 |
| 0x16 | STAT_VERURSACHER_4 | Hex | low | unsigned char | - | 1 | 1 | 0 |
| 0x17 | BIT_FÜR_CC-MELDUNG | 1/0 | low | unsigned char | - | 1 | 1 | 0 |
| 0x18 | KL15_ANTEIL | 1-n | low | unsigned char | - | 1 | 1 | 0 |
| 0x19 | KL0_ANTEIL | 1-n | low | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### TABLE_C801

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x02 | 0x03 | 0x04 | 0x06 | 0x0F |

### TABLE_C802

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x02 | 0x03 | 0x04 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F |

### TABLE_C803

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x02 | 0x03 | 0x04 | 0x06 | 0x13 | 0x14 | 0x15 | 0x16 | 0x11 | 0x12 |

### TABLE_C804

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x02 | 0x03 | 0x04 | 0x06 | 0x0F |

### TABLE_C805

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x02 | 0x03 | 0x04 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F |

### TABLE_C806

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x02 | 0x03 | 0x04 | 0x06 | 0x13 | 0x14 | 0x15 | 0x16 | 0x11 | 0x12 |

### TABLE07_08_09_0A_0C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x02 | 0x03 | 0x04 | 0x06 |

### TABLE_C80B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x02 | 0x03 | 0x04 | 0x06 | 0x11 | 0x17 | 0x18 | 0x19 |

### ENERGYSAVING

| E_MODE | NAME | TEXT |
| --- | --- | --- |
| 0x00 | ENERGY_MODE_AUS | Kein Energiesparmode |
| 0x01 | ENERGY_MODE_PRODUCTION | Produktionsmode |
| 0x02 | ENERGY_MODE_SHIPMENT | Transportmode |
| 0x04 | ENERGY_MODE_REPAIR_SHOP | Werkstattmode |
| 0x08 | ERROR | falscher Eingabewert |

### EEPROM_INIT_TABLE

| ACTION_NUMBER | ACTION_BYTE | ACTION_NAME |
| --- | --- | --- |
| 0x00 | CODING | default Codierung |
| 0x01 | DTC | Fehlerspeicher loeschen |
| 0x02 | ALL | EEPROM komplett loeschen |
| 0xXY | -- | -- |

### VARIANT_TABLE

| VARIANT_NUMBER | VARIANT_BYTE | VARIANT_NAME |
| --- | --- | --- |
| 0x00 | LOW | LOW Variante |
| 0x01 | HIGH | HIGH Variante |
| 0xXY | -- | -- |

### AUSWAHL_FENSTER

| ARGUMENT | BESCHREIBUNG |
| --- | --- |
| 0x00 | Vorgang abbrechen |
| 0x13 | Fahrerseite Hinten |
| 0x14 | Beifahrerseite Hinten |
| 0x22 | Fahrerseite und Beifahrerseite hinten |
| 0x40 | Alle |
| -- | unbekannter Diagnose-Mode |

### FH_RICHTUNG

| TEXT | AUSWAHL_RICHTUNG | MODE_TEXT |
| --- | --- | --- |
| 0 | 0 | Fensterheber verfährt NICHT |
| 1 | 1 | Fensterheber verfährt AUF |
| 2 | 2 | Fensterheber verfährt ZU |
| 0x00 | 0 | Fensterheber verfährt NICHT |
| 0x01 | 1 | Fensterheber verfährt AUFn |
| 0x02 | 2 | Fensterheber verfährt ZU |
| AUS | 0 | Fensterheber verfährt NICHT |
| AUF | 1 | Fensterheber verfährt AUF |
| ZU | 2 | Fensterheber verfährt ZU |
| -- | 0xXY | unbekannter Diagnose-Mode |

### FH_EINLERNEN

| CODE | BESCHREIBUNG |
| --- | --- |
| 0x00 | NO INIT STARTED |
| 0x01 | Initialisierung laeuft |
| 0x02 | Initialisierung abgeschlossen |
| 0x03 | FEHLER: Busy |
| 0x04 | FEHLER: Abbruch durch Anwender |
| 0x05 | FEHLER: Reversierer |
| 0x06 | FEHLER: Init |
| 0xXY | undefiniert |

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
| 2 | FAHRERSEITE - REVERS_BLOCK |
| 3 | FAHRERSEITE - REVERS_ISRDIAG |
| 101 | BEIFAHRERSEITE - REVERS_ISR |
| 102 | BEIFAHRERSEITE - REVERS_BLOCK |
| 103 | BEIFAHRERSEITE - REVERS_ISRDIAG |
| 0xXY | undefiniert |

### FH_AUSWAHL_BAUREIHE

| WERT | ARGUMENT | BESCHREIBUNG |
| --- | --- | --- |
| 0 | E70 | E70 |
| 0xXY | undefiniert | undefiniert |

### FUNKTIONALEADRESSE_LEAR

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xE9 | K-CAN | Karosserie-CAN Steuergeräte |
| 0xEA | PT-CAN | Powertrain-CAN Steuergeräte |
| 0xEB | SI | Sicherheits-BUS Steuergeräte |
| 0xEC | MOST | MOST-BUS Steuergeräte |
| 0xED | BOS oder CBS | Bedarfsorientierter Service |
| 0xEE | PERSONAL | Personalisierung |
| 0xEF | ALL | alle Steuergeräte |

### DIGITALINPUTNRTEXTE

| DINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | HECKKLAPPE_TASTER | Heckklappentaster (TOEHK)				  	 	 .CO_MICRO PIN 7,PORT B.6 | Keine Betätigung: 0, Taster Gedrückt: 1 |
| 0x01 | HECKSCHEIBE_TASTER | PL4 (E70):Taster Handschuhkasten/PL2-RED:Taster Heckscheibe(TOEHS) .CO_MICRO PIN 10,PORT D.6 | Keine Betätigung: 0, Taster Gedrückt: 1 |
| 0x02 | HECKKLAPPE_KONTAKT | Heckklappenkontakt (HKK)				  	 		 .CO_MICRO PIN  12,PORT B.0 | Geschlossen: 0, Offen: 1 |
| 0x03 | HECKSCHEIBE_KONTAKT | Heckscheibenkontakt (HSK)				  	 	 .CO_MICRO PIN  13,PORT B.1 | Geschlossen: 0, Offen: 1 |
| 0x04 | FRONTWISCHER_RSK | Frontwischer in Parkposition		  	 		 .PIN 134,PORT P6.5 | AUS RSK: 0, EIN RSK: 1 |
| 0x05 | HECKWISCHER_RSK | Heckwischer in Parkposition		  	 		 .PIN 121,PORT P5.11 | AUS RSK: 0, EIN RSK: 1 |
| 0x06 | DSC_BEFEHL | Sensor DSC-Taster  	 .PIN 94,PORT P4.0 | Keine Betätigung: 0, Taster Gedrückt: 1 |
| 0x07 | KUEHLMITTELSTAND | Sensor Kuehlmittelstand			  	 	 .PIN 124,PORT P5.14 | Zu niedrigem Füllstand: 0, Normales Füllstand: 1 |
| 0x08 | WASCHWASSERSTAND | Sensor Waschwasserstand					  	 		 .PIN 139,PORT P6.10 | Zu niedrigem Füllstand: 0, Normales Füllstand: 1 |
| 0x09 | HANDBREMSE_KONTAKT | Kontakt Handbremse						  	 	 .PIN 132,PORT P6.3 | Gelöst: 0, Angezogen: 1 |
| 0x0A | HECKWISCHER_DIAG | Relais Heckwischer (Diagnose)  					 .PIN 2,PORT P0.1 | AUS: 0, EIN: 1 |
| 0x0B | FRONTWISCHER_DIAG | Relais Frontwischer (Diagnose)       			  	 .PIN 57, PORT P2.10 | AUS: 0, EIN: 1 |
| 0x0C | FRONTWISCHER_GESCHW_DIAG | Geschwindigkeits-Relais Frontwischer (Diagnose)    			 .PIN 58, PORT P2.11 | AUS: 0, EIN: 1 |
| 0x0D | SRA_WASCHPUMPE | Scheinwerferreinigungsanlage (Diagnose)  	 		    		 .PIN 18,PORT P0.3 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x0E | HANDSCHUHKASTEN_DIAG | Handschuhkasten (Diagnose)          		  	 		 .PIN 136,PORT P6.7 | AUS: 0, EIN: 1 |
| 0x0F | HECKSCHEIBENHEIZUNG_DIAG | Heckscheibenheizung (Diagnose)          		  	 .PIN 131,PORT P6.2 | AUS: 0, EIN: 1 |
| 0x10 | HECKSCHEIBE_DIAG | Heckscheibenkontakt (Diagnose)          		  	 .CO_MICRO PIN 2,PORT D.4 | AUS: 0, EIN: 1 |
| 0x11 | HECKKLAPPE_DIAG | Heckklappenkontakt (Diagnose)          		  	 .CO_MICRO PIN 9,PORT D.5 | AUS: 0, EIN: 1 |
| 0x12 | ZV_VERRIEGELN_RELAIS_DIAG | Zentralverriegelung: Relais LOCK (Diagnose)     	  	 .PIN 12,PORT P0.9 | AUS: 0, EIN: 1 |
| 0x13 | ZV_ENTRIEGELN_RELAIS_DIAG | Zentralverriegelung: Relais UNLOCK (Diagnose)        	 .PIN 13,PORT P0.10 | AUS: 0, EIN: 1 |
| 0x14 | ZV_SICHERN_RELAIS_DIAG | Zentralverriegelung: Relais SECURE (Diagnose)        	 .PIN 14,PORT P0.11 | AUS: 0, EIN: 1 |
| 0x15 | ZV_SELEKTIV_ENTRIEGELN_RELAIS_DIAG | Zentralverriegelung: Relais UNLOCK Fahrerseite (Diagnose) 	 .PIN 36,PORT P1.13 | AUS: 0, EIN: 1 |
| 0x16 | FH_FATH_AUF_DIAG | Fensterheber: Relais OEFFNEN Fahrersite hinten (Diagnose) 	 .PIN 96,PORT P4.2 | AUS: 0, EIN: 1 |
| 0x17 | FH_FATH_ZU_DIAG | Fensterheber: Relais SCHLIESSEN Fahrersite hinten (Diagnose)	 .PIN 119,PORT P5.9 | AUS: 0, EIN: 1 |
| 0x18 | FH_BFTH_AUF_DIAG | Fensterheber: Relais OEFFNEN Beifahrersite hinten (Diagnose)  .PIN 110,PORT P5.0 | AUS: 0, EIN: 1 |
| 0x19 | FH_BFTH_ZU_DIAG | Fensterheber: Relais SCHLIESSEN Beifahrersite hinten (Diagnose) .PIN 112,PORT P5.2 | AUS: 0, EIN: 1 |
| 0x1A | TSR_IN | PL4 (E70):Dritte Sitzreihe/PL2-Red:MSA/PL2-Red (E90):EDC-Taster .PIN 3,PORT 0.2 | NICHT AKTIV: 1, AKTIV: 0 |
| 0x1B | KCAN_ERR | K-Can error indicator                 			 .PIN 11,PORT P0.8 | NICHT AKTIV: 1, AKTIV: 0 |
| 0x1C | EVV_HS_DIAG | Servotronik (EVV) High Side FET (Diagnose)       .PIN 34, PORT P1.11 | Überlastung oder Übertemperatur: 0, Normalbetrieb: 1 |
| 0x1D | EVV_LS_DIAG | Servotronik (EVV) Low Side FET (Diagnose)   	 .PIN 106,PORT P4.12 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x1E | 5V_SW_DIAG | Atmel 5V_SW Activation Diagnosis  				 .PIN 130, PORT P6.1 | AUS: 0, EIN: 1 |
| 0x1F | PTWAKE_IN | PT CAN Wake-Up Input line						 .CO_MICRO PIN 11,PORT D.7 | NICHT AKTIV: 0, AKTIV: 1 |
| 0xFF | UNKNOWN | unbekannte Digitaler Eingang |  |

### DIGITALOUTPUTNRTEXTE

| DOUTNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x01 | KOMPRESSOR_KUPPLUNG | Magnet-Kupplung                     		.PIN 111,PORT P5.1 | AUS: 0, EIN: 1 |
| 0x03 | 5V_SENSOR_ENABLE | 5V Sensor aktiv            			 	.PIN 129,PORT P6.0 | DISABLE: 0, ENABLE: 1 |
| 0x04 | WASSERVENTIL_FAHRER | Wasserventil 1 (Fahrerseite) 						.PIN 120,PORT P5.10 | CLOSED: 0, OPEN: 1  |
| 0x05 | WASSERVENTIL_BEIFAHRER | PL4 (E70):Wasserventil 2 (Beifahrer)/PL2-RED(E90_M3):EDC-LED 2.PIN 102,PORT P4.8 |  CLOSED: 0, OPEN: 1 |
| 0x06 | FRONTWASCHERPUMPE | Waschwasserpumpe vorne                      		.PIN 100,PORT P4.6 | AUS: 0, EIN: 1 |
| 0x07 | HECKWASCHERPUMPE | Waschwasserpumpe hinten                       		.PIN 101,PORT P4.7 | AUS: 0, EIN: 1 |
| 0x08 | SONNENROLLO_AUSGANG | PL2-Redesign (E90,E92): Ausgang Sonnenrollo | AUS: 0, Von EIN zu AUS: 5, NACH OBEN: 6, HERUNTER: 9 |
| 0x09 | SONNENROLLO_LOWTREIBER1 | PL2-Redesign (E90,E92): Sonnenrollo Mosfet Low Side 1.PIN 42,PORT P2.3 | AUS: 0, EIN: 1 |
| 0x0A | SONNENROLLO_HIGHTREIBER1 | PL2-RED (E90,E92):Sonnenrollo Mosfet High Side1/PL4 (E70):Handschuhkasten oeffnen.PIN 125,PORT P5.15 | AUS: 0, EIN: 1 |
| 0x0B | SONNENROLLO_LOWTREIBER2 | PL2-RED (E90,E92):Sonnenrollo Mosfet Low Side 2/PL2-RED (E91):Laderaumabdeckung/PL4 (E70):Handschuhkasten oeffnen.PIN 42,PORT P2.15 | AUS: 0, EIN: 1 |
| 0x0C | SONNENROLLO_HIGHTREIBER2 | PL2-RED (E90,E92):Sonnenrollo Mosfet High Side2/PL2-RED (E91):Laderaumabdeckung/PL4 (E70):Handschuhkasten oeffnen.PIN 28,PORT P1.5 | AUS: 0, EIN: 1 |
| 0x11 | WASCHDUESENHEIZUNG_AUßENSPIEGEL_AUSGANG | Aussenspiegel- und Waschduesenheizung        .PIN 138,PORT P6.9 | AUS: 0, EIN: 3 |
| 0x12 | EVV_LS | Servotronik (EVV) Low Side FET     		.PIN 135,PORT P6.6 | AUS: 0, EIN: 1 |
| 0x13 | 5V_SW_ON | 5V_SW_ON nicht erlaubt                    	.PIN 62,PORT P2.15 | AUS: 0, EIN: 1 |
| 0x14 | PT_WAKE_OUT | PT-CAN Wake Up signal                      .PIN 118,PORT P5.8 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x18 | ZUSATZWASSERPUMPE | Zusatzwasserpumpe                   	.PIN 105,PORT P4.11 | AUS 0, EIN 1 |
| 0x24 | HECKWISCHER | PL4 (E70): Relais Heckwischer/PL2-RED(E88): Manuelles Cabrio-Dach.PIN 1,PORT P0.0 | AUS: 0, EIN: 1 |
| 0x25 | FRONTWISCHER_AUSGANG | Ausgang Frontwischer | AUS: 0, Stufe1: 1, Stufe2: 3 |
| 0x26 | FRONTWISCHER | Relais Frontwischer (Low Speed)               .PIN 137,PORT P6.8 | AUS: 0, EIN: 1 |
| 0x27 | FRONTWISCHER_GESCHW | Geschwindigkeits-Relais Frontwischer  (High Speed)        .PIN 4,PORT P0.3 | AUS: 0, EIN: 1 |
| 0x28 | SRA | Relais Scheinwerferreinigungsanlage (SRA)                   	.PIN 7,PORT P0.4 | AUS: 0, EIN: 1 |
| 0x29 | ZV_AUSGANG | Ausgang Zentralverriegelung | Aus: 0, Entriegeln: 2, Selektiv Entriegeln: 6, Verriegeln: 12, Sichern: 13, Entsichern: 14 |
| 0x2A | ZV_SICHERN_RELAIS | Zentralverriegelung: Relais SECURE           	.PIN 22,PORT P1.1 | AUS: 0, EIN: 1 |
| 0x2B | ZV_ENTRIEGELN_RELAIS | Zentralverriegelung: Relais UNLOCK             	.PIN 8,PORT P0.5 | AUS: 0, EIN: 1 |
| 0x2C | ZV_VERRIEGELN_RELAIS | Zentralverriegelung: Relais LOCK      		 	.PIN 32,PORT P1.9 | AUS: 0, EIN: 1 |
| 0x2D | ZV_SELEKTIV_VERRIEGELN_RELAIS | Zentralverriegelung: Relais UNLOCK Fahrerseite		.PIN 31,PORT P1.8 | AUS: 0, EIN: 1 |
| 0x2E | HECKLAPPE_ENTRIEGELN_SCA | Relais Heckklappe / SofCloseAutomatik (SCA)                 	 	.PIN 107,PORT P4.13 | AUS: 0, EIN: 1 |
| 0x2F | HECKSCHEIBE | Relais Heckscheibe oeffnen                   .PIN 109,PORT P4.15 | AUS: 0, EIN: 1 |
| 0x30 | HECKSCHEIBENHEIZUNG | Relais Heckscheibenheizung               		.PIN 10,PORT P0.7 | AUS: 0, EIN: 1 |
| 0x31 | BISTABILRELAIS_ON. 100 ms max. Activation Time | Bistabiles-Relais ON      .PIN 9,PORT P0.6 | AUS: 0, EIN: 1 |
| 0x32 | BISTABILRELAIS_OFF. 100 ms max. Activation Time | Bistabiles-Relais OFF     .PIN 61,PORT P2.14 | AUS: 0, EIN: 1 |
| 0x33 | HECKBISTABILRELAIS_ON. 100 ms max. Activation Time | Heck-Bistabiles-Relais ON       .PIN 108,PORT P4.14 | AUS: 0, EIN: 1 |
| 0x34 | HECKBISTABILRELAIS_OFF. 100 ms max. Activation Time | Heck-Bistabiles-Relais OFF      .PIN 113,PORT P5.3 | AUS: 0, EIN: 1 |
| 0x35 | LADERRAUMABDECKUNG | Heckscheibe (PL2-Red E91). 2 Sekunden Aktivierungszeit bis vollstaendig geoeffnet | AUS: 0, EIN: 1 |
| 0xFF | UNKNOWN | unbekannter Digitaler Ausgang |  |

### ANALOGINPUTNRTEXTE

| AINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | AC_KOMPRESSOR_DIAG | Klima-Kompressor (Diagnose)      	  .PIN 80,PORT P3.11 | MIN:0x029(0.2 V)..MAX:0x333(4 V) |
| 0x01 | DRUCKSENSOR | Drucksensor			   		  .PIN 74,PORT P3.7 | MIN:0x029(0.2 V)..MAX:0x333(4 V) |
| 0x02 | FH_BFT_SCHALTER | Taster Fensterheber Beifahrerseite	  .PIN 73,PORT P3.6 | 137(0x089)..373(0x175): DOWNAUTO(2), 374(0x176)..603(0x25B): DOWNMANUAL(1), 604(0x25C)..787(0x313): UPAUTO(4), 788(0x314)..945(0x3B1): UPMANUAL(3), 946(0x3B2)..1023(0x3FF): OFF(0) |
| 0x03 | FH_FATH_SCHALTER | Taster Fensterheber Fahrerseite hinten    .PIN 69,PORT P3.2 | 137(0x089)..373(0x175): DOWNAUTO(2), 374(0x176)..603(0x25B): DOWNMANUAL(1), 604(0x25C)..787(0x313): UPAUTO(4), 788(0x314)..945(0x3B1): UPMANUAL(3), 946(0x3B2)..1023(0x3FF): OFF(0) |
| 0x04 | FH_BFTH_SCHALTER | Taster Fensterheber Beiahrerseite hinten .PIN 68,PORT P3.1 | 137(0x089)..373(0x175): DOWNAUTO(2), 374(0x176)..603(0x25B): DOWNMANUAL(1), 604(0x25C)..787(0x313): UPAUTO(4), 788(0x314)..945(0x3B1): UPMANUAL(3), 946(0x3B2)..1023(0x3FF): OFF(0) |
| 0x05 | TANK_LI_WIDERSTAND | Tanksensor links 	  .PIN 70,PORT P3.3 | MIN:0x032(0.244 V)..MAX:0x350(4.145 V) |
| 0x06 | TANK_RE_WIDERSTAND | Tanksensor rechts	  .PIN 71,PORT P3.4 | MIN:0x032(0.244 V)..MAX:0x350(4.145 V) |
| 0x07 | EVV_SENSE | Sensor Ausgangsstrom Servotronik .PIN 72,PORT P3.5 | 0...0x3FF(1023) |
| 0x08 | KOMPRESSOR_KUPPLUNG_DIAG | Magnet-Kupplung (Diagnose)         .PIN 82,PORT P3.13 | MIN:0x029(0.2 V)..MAX:0x383(4,5 V) |
| 0x09 | FONDSCHICHTUNGSENSOR | Sensor Luftstrom hinten		   	  .PIN 83,PORT P3.14 | MIN:0x029(0.2 V)..MAX:0x333(4 V) |
| 0x0A | SONNENROLLO_STROM | Sensor Strom Sonnenrollo          .PIN 81,PORT P3.12 | MIN:0x029(0.2 V)..MAX:0x333(4 V) |
| 0x0B | BATTERIE_SPANNUNG | Batteriespannung             	  .PIN 67,PORT P3.0 | 0(0 V)...0x3FF(1023)(28.40 V) (HEX);Vbat=(HEX)*100/3605  [V] |
| 0x0C | 5V_SENSOR | 5V SENSOR                   	  .PIN 84,PORT P3.15 | MIN:0x00 (0 V)..MAX:0x3FF(5 V) |
| 0x0D | WASCHERPUMPE_DIAG | Waschwasserpumpe (Diagnose)              .PIN 77,PORT P3.8 | MIN:0x029(0.2 V)..MAX:0x383(4,5 V) |
| 0x0E | ZUSATZWASSERPUMPE_DIAG | Zusatzwasserpumpe (Diagnose)   .CO_MICRO PIN 26,PORT PC.3 | MIN:0x029(0.2 V)..MAX:0x333(4 V) |
| 0x0F | WASSERVENTIL_FAHRER_DIAG | Wasserventil 1 Fahrerseite (Diagnose)            .CO_MICRO PIN 25,PORT PC.2 | MIN:0x029(0.2 V)..MAX:0x383(4,5 V) |
| 0x10 | WASSERVENTIL_BEIFAHRER_DIAG | Wasserventil 2 Beifahrerseite (Diagnose)           .CO_MICRO PIN 27,PORT PC.4 | MIN:0x029(0.2 V)..MAX:0x383(4,5 V) |
| 0x11 | WASCHDUESENHEIZUNG_DIAG | Aussenspiegel- und Waschduesenheizung (Diagnose)         .CO_MICRO PIN 19,PORT ADC6 | MIN:0x029(0.2 V)..MAX:0x383(4,5 V) |
| 0x12 | KL30_FH_HI_LI_SENSE | PL4 (E70):Power Window RearDriver Motor Voltage Sense   .PIN 78,PORT P3.9 | PL4 (E70):0(0 V)...0x3FF(1023)(28.40 V) (HEX);Vbat=(HEX)*100/3605 [V] |
| 0x13 | KL30_FH_HI_RE_SENSE | PL4 (E70):Power Window RearPassenger Motor Voltage Sense.PIN 79,PORT P3.10 | PL4 (E70):0(0 V)...0x3FF(1023)(28.40 V) (HEX);Vbat=(HEX)*100/3605 [V] |
| 0x14 | FH_FATH_MFFHA_STROM_SENSE | PL2-RED (E93):Power Window RearDriver Current Sense 1(O_MFFHA) .CO_MICRO PIN 28,PORT PC.5 | 0...0x3FF(1023) |
| 0x15 | FH_FATH_MFFHZ_STROM_SENSE | PL2-RED (E93):Power Window RearDriver Current Sense 2(O_MFFHZ) .CO_MICRO PIN 23,PORT PC.0 | 0...0x3FF(1023) |
| 0x16 | FH_BFTH_MFBHA_STROM_SENSE | PL2-RED (E93):Power Window RearPassenger Current Sense 3(O_MFBHA) .CO_MICRO PIN 22,PORT ADC7 | 0...0x3FF(1023) |
| 0x17 | FH_BFTH_MFBHZ_STROM_SENSE | PL2-RED (E93):Power Window RearPassenger Current Sense 4(O_MFBHZ) .CO_MICRO PIN 24,PORT PC.1 | 0...0x3FF(1023) |
| 0x18 | AUCSENSOR | AUC Sensor PWM                    .PIN 17, PORT P0.12 | AUCSENSOR_PERIOD: 0..131 ms, AUCSENSOR_DUTY_CYCLE: 0..100 %; NORMAL: Period=20 ms (50 Hz) Duty-cycle=5%-95%, SHORT-GND: Period=0 Duty-cycle=0, OPEN-LOAD: Duty-cycle=0xFFFF |
| 0x19 | SITZHEIZUNG_FA_DIAG | Sitzheizung Fahrerseite (Diagnose)     .PIN 30, PORT P1.7 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x1A | SITZHEIZUNG_BF_DIAG | Sitzheizung Beifahrerseite (Diagnose)  .PIN 19, PORT P0.14 | NICHT AKTIV: 0, AKTIV: 1 |
| 0xFF | UNKNOWN | unbekannter Analoger Ausgang |  |

### ANALOGOUTPUTNRTEXTE

| AOUTNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | KOMPRESSORVENTIL_PWM | PWM-Tastverhaeltnis Klima-Kompressor-Ventil  	.PIN 39,PORT P2.0 | 0...100 [%] |
| 0x03 | SITZHEIZUNG_FA_PWM | PWM-Tastverhaeltnis Sitzheizung Fahrer      .PIN 45,PORT P2.6 | OFF: 0 (40ms ON), STATE1: 1 (32ms ON, 8ms OFF), STATE2: 2 (20ms ON, 20ms OFF), STATE3: 3 (12ms ON, 28ms OFF) |
| 0x04 | SITZHEIZUNG_BF_PWM | PWM-Tastverhaeltnis Sitzheizung Beifahrer   .PIN 46,PORT P2.7 | OFF: 0 (40ms ON), STATE1: 1 (32ms ON, 8ms OFF), STATE2: 2 (20ms ON, 20ms OFF), STATE3: 3 (12ms ON, 28ms OFF) |
| 0x05 | EVV_HS_PWM | PWM-Tastverhaeltnis Servotronik (EVV) High Side FET .PIN 43,PORT P2.4 | 0...100 [%] |
| 0xFF | UNKNOWN | unbekannter Analoger Ausgang |  |

### STEUERN_DIGITAL_VERFAHREN

| ARGUMENT | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | Vorgang Abbrechen | Vorgang Abbrechen |
| 0x05 | FH_BF_MAUT_AUF | Fensterheber Beifahrerseite Maut oeffnen |
| 0x06 | FH_BF_AUF | Fensterheber Beifahrerseite oeffnen |
| 0x07 | FH_BF_MAUT_ZU | Fensterheber Beifahrerseite Maut schliessen |
| 0x08 | FH_BF_ZU | Fensterheber Beifahrerseite schliessen |
| 0x09 | FH_FAH_MAUT_AUF | Fensterheber Fahrerseite hinten Maut oeffnen |
| 0x0A | FH_FAH_AUF | Fensterheber Fahrerseite hinten oeffnen |
| 0x0B | FH_FAH_MAUT_ZU | Fensterheber Fahrerseite hinten Maut schliessen |
| 0x0C | FH_FAH_ZU | Fensterheber Fahrerseite hinten schliessen |
| 0x0D | FH_BFH_MAUT_AUF | Fensterheber Beifahrerseite hinten Maut oeffnen |
| 0x0E | FH_BFH_AUF | Fensterheber Beifahrerseite hinten oeffnen |
| 0x0F | FH_BFH_MAUT_ZU | Fensterheber Beifahrerseite hinten Maut schliessen |
| 0x10 | FH_BFH_ZU | Fensterheber Beifahrerseite hinten schliessen |
| 0x15 | FH_FAH_BFH_MAUT_AUF | Fensterheber Fahrerseite hinten und Beifahrerseite hinten Maut oeffnen |
| 0x16 | FH_FAH_BFH_AUF | Fensterheber Fahrerseite hinten Beifahrerseite hinten oeffnen |
| 0x17 | FH_FAH_BFH_MAUT_ZU | Fensterheber Fahrerseite hinten und Beifahrerseite hinten Maut schliessen |
| 0x18 | FH_FAH_BFH_ZU | Fensterheber Fahrerseite hinten Beifahrerseite hinten schliessen |
| 0x32 | SPIEGEL_HEIZUNG_EIN | Spiegelheizung |
| 0x40 | ZV_FA_ENTRIEGELT | Zentralverriegelung Fahrerseite entriegelt |
| 0x41 | ZV_BF_ENTRIEGELT | Zentralverriegelung Beifahrerseite entriegelt |
| 0x42 | ZV_FAH_ENTRIEGELT | Zentralverriegelung Fahrerseite hinten entriegelt |
| 0x43 | ZV_BFH_ENTRIEGELT | Zentralverriegelung Beifahrerseite hinten entriegelt |
| 0x44 | ZV_FA_VERRIEGELT | Zentralverriegelung Fahrerseite verriegelt |
| 0x45 | ZV_BF_VERRIEGELT | Zentralverriegelung Beifahrerseite verriegelt |
| 0x46 | ZV_FAH_VERRIEGELT | Zentralverriegelung Fahrerseite hinten verriegelt |
| 0x47 | ZV_BFH_VERRIEGELT | Zentralverriegelung Beifahrerseite hinten verriegelt |
| 0x48 | SOFTCLOSE_ZU | Zentralverriegelung Beifahrerseite hinten verriegelt |
| 0x94 | ROLLO_HECK_BLOCK | Sonnenrollo Heck |

### ZUORDNUNG_CAN_ID_SG

| INDEX | CAN_ID_DEZ | CAN_ID_HEX | CAN_ID_NAME | DIAG_ID_DEZ | DIAG_ID_HEX | SG_NAME |
| --- | --- | --- | --- | --- | --- | --- |
| 002 | 981 | 0x3D5 | Status Zentralverriegelung CKM [4] | 64 | 0x40 | CAS |
| 003 | 253 | 0xFD | Steuerung Fensterheber BFTH [5] | 0 | 0x0 | JBBF |
| 004 | 957 | 0x3BD | Status Verbraucherabschaltung [2] | 114 | 0x72 | FRMFA |
| 005 | 1152 | 0x480 | Netzwerkmanagement | 0 | 0x0 | JBBF |
| 006 | 128 | 0x80 | SYNC [6] | 41 | 0x29 | EHB3 |
| 007 | 133 | 0x85 | Synchronisation SC VDA (4) | 41 | 0x29 | EHB3 |
| 008 | 168 | 0xA8 | Drehmoment 1 K-CAN (11) | 18 | 0x12 | DME1/DDE1 |
| 009 | 169 | 0xA9 | Drehmoment 2 [10] | 18 | 0x12 | DME1/DDE1 |
| 010 | 170 | 0xAA | Drehmoment 3 K-CAN [10] | 18 | 0x12 | DME1/DDE1 |
| 011 | 172 | 0xAC | Radmoment Antriebsstrang 2 (6) | 18 | 0x12 | DME1/DDE1 |
| 012 | 177 | 0xB1 | Drehmomentanforderung Lenkung [1] | 41 | 0x29 | EHB3 |
| 013 | 180 | 0xB4 | Radmoment Antriebsstrang 1 (5) | 18 | 0x12 | DME1/DDE1 |
| 014 | 181 | 0xB5 | Drehmomentanforderung EGS [9] | 24 | 0x18 | EGS_EL |
| 015 | 182 | 0xB6 | Drehmomentanforderung DSC [7] | 41 | 0x29 | EHB3 |
| 016 | 186 | 0xBA | Getriebedaten (22) | 24 | 0x18 | EGS_EL |
| 017 | 187 | 0xBB | Sollmomentanforderung [8] | 41 | 0x29 | EHB3 |
| 018 | 188 | 0xBC | Status Sollmomentumsetzung [7] | 25 | 0x19 | VGSG |
| 019 | 190 | 0xBE | Alive Zähler [12] | 35 | 0x23 | ARS_Modul |
| 020 | 191 | 0xBF | Anforderung Radmoment Antriebsstrang [6] | 41 | 0x29 | EHB3 |
| 021 | 192 | 0xC0 | Alive Zentrales Gateway [1] | 0 | 0x0 | JBBF |
| 022 | 193 | 0xC1 | Alive Zähler Telefon [3] | 54 | 0x36 | TEL_JAP/TEL_BPI |
| 023 | 193 | 0xC1 | Alive Zähler Telefon [3] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 024 | 196 | 0xC4 | Lenkradwinkel K-CAN [13] | 41 | 0x29 | EHB3 |
| 025 | 200 | 0xC8 | Lenkradwinkel Oben F-CAN [10] | 2 | 0x2 | SZL_LWS/SZL_LWS |
| 026 | 201 | 0xC9 | Lenkradwinkel Oben 2 F-CAN [4] | 2 | 0x2 | SZL_LWS |
| 027 | 206 | 0xCE | Radgeschwindigkeit F-CAN [6] | 41 | 0x29 | EHB3/EHB3 |
| 028 | 213 | 0xD5 | Anforderung Radmoment Bremse (7) | 41 | 0x29 | EHB3 |
| 029 | 215 | 0xD7 | Alive Zähler Sicherheit [2] | 1 | 0x1 | ACSM |
| 030 | 216 | 0xD8 | CLU1 VDA (4) | 37 | 0x25 | SC_VDA/RSC_VDA |
| 031 | 225 | 0xE1 | Radmoment Bremse (4) | 41 | 0x29 | EHB3 |
| 032 | 226 | 0xE2 | Status Zentralverriegelung BFT [11] | 0 | 0x0 | JBBF |
| 033 | 227 | 0xE3 | CLU2 VDA (4) | 37 | 0x25 | SC_VDA/RSC_VDA |
| 034 | 230 | 0xE6 | Status Zentralverriegelung BFTH [11] | 0 | 0x0 | JBBF |
| 035 | 234 | 0xEA | Status Zentralverriegelung FAT [11] | 0 | 0x0 | JBBF |
| 036 | 238 | 0xEE | Status Zentralverriegelung FATH [11] | 0 | 0x0 | JBBF |
| 037 | 242 | 0xF2 | Status Zentralverriegelung HK [13] | 0 | 0x0 | JBBF |
| 038 | 244 | 0xF4 | CLU3 VDA (3) | 37 | 0x25 | RSC_VDA |
| 039 | 247 | 0xF7 | Querdynamik ARS VDM [3] | 35 | 0x23 | ARS_Modul |
| 040 | 249 | 0xF9 | Vertikaldynamik VDM ARS [3] | 57 | 0x39 | VDM |
| 041 | 250 | 0xFA | Steuerung Fensterheber FAT [10] | 114 | 0x72 | FRMFA |
| 042 | 251 | 0xFB | Steuerung Fensterheber BFT [5] | 0 | 0x0 | JBBF |
| 043 | 252 | 0xFC | Steuerung Fensterheber FATH [5] | 0 | 0x0 | JBBF |
| 044 | 254 | 0xFE | Spannungen Höhenstandssensoren [3] | 57 | 0x39 | VDM |
| 045 | 280 | 0x118 | Austausch AFS DSC [10] | 22 | 0x16 | AFS |
| 046 | 286 | 0x11E | Regeleingriffe DSC_AFS [6] | 41 | 0x29 | EHB3 |
| 047 | 288 | 0x120 | Status Teilsollwerte AFS DSC 2 [2] | 22 | 0x16 | AFS |
| 048 | 298 | 0x12A | Sensor Daten ROSE [2] | 1 | 0x1 | ACSM_ROSE |
| 049 | 300 | 0x12C | Eingangsdaten ROSE [4] | 41 | 0x29 | EHB3 |
| 050 | 304 | 0x130 | Klemmenstatus [19] | 64 | 0x40 | CAS/CAS |
| 051 | 309 | 0x135 | Steuerung Crashabschaltung EKP [1] | 1 | 0x1 | ACSM |
| 052 | 357 | 0x165 | CLU Status VDA (4) | 37 | 0x25 | SC_VDA/RSC_VDA |
| 053 | 370 | 0x172 | Quittierung Anforderung Kombi [1] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 054 | 403 | 0x193 | Anzeige ACC DCC (5) | 41 | 0x29 | EHB3 |
| 055 | 404 | 0x194 | Bedienung Tempomat/ACC [13] | 2 | 0x2 | SZL_LWS |
| 056 | 408 | 0x198 | Bedienung Getriebewahlschalter 2 [3] | 94 | 0x5E | GWS |
| 057 | 414 | 0x19E | Status DSC K-CAN [19] | 41 | 0x29 | EHB3 |
| 058 | 416 | 0x1A0 | Geschwindigkeit K-CAN [14] | 41 | 0x29 | EHB3 |
| 059 | 418 | 0x1A2 | Getriebedaten 2 [6] | 24 | 0x18 | EGS_EL |
| 060 | 422 | 0x1A6 | Wegstrecke [6] | 41 | 0x29 | EHB3 |
| 061 | 423 | 0x1A7 | Stellanforderung EMF [4] | 41 | 0x29 | EHB3 |
| 062 | 426 | 0x1AA | Effekt ErgoCommander [10] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 063 | 428 | 0x1AC | Status ARS-Modul [13] | 35 | 0x23 | ARS_Modul |
| 064 | 436 | 0x1B4 | Status Kombi (15) | 96 | 0x60 | Kombi |
| 065 | 437 | 0x1B5 | Wärmestrom/Lastmoment Klima [14] | 120 | 0x78 | IHKA |
| 066 | 438 | 0x1B6 | Wärmestrom Motor [11] | 18 | 0x12 | DME1/DDE1 |
| 067 | 440 | 0x1B8 | Bedienung ErgoCommander [6] | 103 | 0x67 | ZBE |
| 068 | 450 | 0x1C2 | Abstandsmeldung PDC [5] | 100 | 0x64 | PDC |
| 069 | 451 | 0x1C3 | Abstandsmeldung 2 PDC [3] | 100 | 0x64 | PDC |
| 070 | 454 | 0x1C6 | Akustikmeldung PDC [5] | 100 | 0x64 | PDC |
| 071 | 464 | 0x1D0 | Motordaten [13] | 18 | 0x12 | DME1/DDE1 |
| 072 | 466 | 0x1D2 | Anzeige Getriebedaten [22] | 24 | 0x18 | EGS_EL |
| 073 | 470 | 0x1D6 | Bedienung Taster Audio/Telefon [12] | 2 | 0x2 | SZL_LWS/SZL_LWS |
| 074 | 472 | 0x1D8 | Bedienung Klima Luftverteilung FA [13] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 075 | 473 | 0x1D9 | Bedienung Taster M-Drive [2] | 2 | 0x2 | SZL_LWS/SZL_LWS |
| 076 | 474 | 0x1DA | Bedienung Klima Fernwirken [5] | 64 | 0x40 | CAS |
| 077 | 476 | 0x1DC | Bedienung Schichtung Sitzheizung [1] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 078 | 478 | 0x1DE | Bedienung Klima Fond [8] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 079 | 480 | 0x1E0 | Bedienung Klima Luftverteilung BF [7] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 080 | 482 | 0x1E2 | Bedienung Klima Front [11] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 081 | 483 | 0x1E3 | Bedienung Taster Innenbeleuchtung [2] | 86 | 0x56 | FZD |
| 082 | 487 | 0x1E7 | Bedienung Sitzheizung/Sitzklima FA [7] | 120 | 0x78 | IHKA |
| 083 | 488 | 0x1E8 | Bedienung Sitzheizung/Sitzklima BF [7] | 120 | 0x78 | IHKA |
| 084 | 490 | 0x1EA | Bedienung Lenksäulenverstellung [5] | 120 | 0x78 | IHKA |
| 085 | 491 | 0x1EB | Bedienung Aktivsitz FA [4] | 120 | 0x78 | IHKA |
| 086 | 492 | 0x1EC | Bedienung Aktivsitz BF [4] | 120 | 0x78 | IHKA |
| 087 | 494 | 0x1EE | Bedienung Lenkstockstaster [6] | 114 | 0x72 | FRMFA |
| 088 | 499 | 0x1F3 | Bedienung Sitzmemory FA [4] | 255 | 0xFF | Sender unbekannt |
| 089 | 502 | 0x1F6 | Blinken [6] | 114 | 0x72 | FRMFA |
| 090 | 504 | 0x1F8 | Bedienung SHD/MDS [1] | 86 | 0x56 | FZD |
| 091 | 508 | 0x1FC | Status AFS [4] | 22 | 0x16 | AFS |
| 092 | 510 | 0x1FE | Crash [12] | 1 | 0x1 | ACSM |
| 093 | 512 | 0x200 | Regelgeschwindigkeit Stufentempomat (8) | 18 | 0x12 | DME1/DDE1 |
| 094 | 513 | 0x201 | Status EMF K-CAN [2] | 42 | 0x2A | EMF |
| 095 | 514 | 0x202 | Dimmung [10] | 114 | 0x72 | FRMFA |
| 096 | 517 | 0x205 | Akustikanforderung Kombi [3] | 96 | 0x60 | Kombi |
| 097 | 518 | 0x206 | Steuerung Anzeige Shiftlights [1] | 18 | 0x12 | DME1 |
| 098 | 523 | 0x20B | Memoryverstellung [6] | 109 | 0x6D | SM_FA |
| 099 | 524 | 0x20C | Steuerung Lenksäule [4] | 109 | 0x6D | SM_FA |
| 100 | 525 | 0x20D | Position Lenksäule [5] | 120 | 0x78 | IHKA |
| 101 | 528 | 0x210 | Bedienung HUD [7] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 102 | 529 | 0x211 | Status HUD [7] | 61 | 0x3D | HUD |
| 103 | 530 | 0x212 | Höhenstände Luftfeder [8] | 56 | 0x38 | EHC |
| 104 | 538 | 0x21A | Lampenzustand [13] | 114 | 0x72 | FRMFA |
| 105 | 540 | 0x21C | Bedienung Night-Vision [2] | 98 | 0x62 | CCC_GW |
| 106 | 542 | 0x21E | Status Night-Vision [2] | 87 | 0x57 | NVC |
| 107 | 548 | 0x224 | Bedienung Taster NSW [2] | 114 | 0x72 | FRMFA |
| 108 | 550 | 0x226 | Regensensor-Wischergeschwindigkeit [8] | 86 | 0x56 | FZD |
| 109 | 552 | 0x228 | Bedienung Sonderfunktion [8] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 110 | 554 | 0x22A | Status BFS [10] | 110 | 0x6E | SM_BF |
| 111 | 554 | 0x22A | Status BFS [10] | 0 | 0x0 | JBBF |
| 112 | 556 | 0x22C | Bedienung Taster NSL [2] | 114 | 0x72 | FRMFA |
| 113 | 558 | 0x22E | Status BFSH [7] | 255 | 0xFF | Sender unbekannt |
| 114 | 562 | 0x232 | Status FAS [10] | 109 | 0x6D | SM_FA |
| 115 | 562 | 0x232 | Status FAS [10] | 0 | 0x0 | JBBF |
| 116 | 566 | 0x236 | Status FASH [7] | 255 | 0xFF | Sender unbekannt |
| 117 | 570 | 0x23A | Status Funkschlüssel [13] | 64 | 0x40 | CAS |
| 118 | 571 | 0x23B | Status Klima Front Erweitert [1] | 120 | 0x78 | IHKA |
| 119 | 573 | 0x23D | Anforderung Anzeige Klima [2] | 120 | 0x78 | IHKA |
| 120 | 574 | 0x23E | Status Klima Fond [11] | 121 | 0x79 | FKA |
| 121 | 578 | 0x242 | Status Klima Front [11] | 120 | 0x78 | IHKA |
| 122 | 582 | 0x246 | Status Klima Front Bedienteil [11] | 120 | 0x78 | IHKA |
| 123 | 584 | 0x248 | Status Rückfahrkamera [2] | 119 | 0x77 | RFK |
| 124 | 585 | 0x249 | Steuerung Rückfahrkamera [1] | 98 | 0x62 | CCC_GW |
| 125 | 586 | 0x24A | Status PDC [6] | 100 | 0x64 | PDC |
| 126 | 587 | 0x24B | Status Türsensoren [5] | 114 | 0x72 | FRMFA |
| 127 | 594 | 0x252 | Wischerstatus [8] | 0 | 0x0 | JBBF |
| 128 | 598 | 0x256 | Challenge Passive Access [10] | 64 | 0x40 | CAS |
| 129 | 600 | 0x258 | Status Transmission Passive Access [4] | 39 | 0x27 | PGS |
| 130 | 604 | 0x25C | Bedienung Klima Zusatzprogramme [2] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 131 | 622 | 0x26E | Steuerung FH/SHD Zentrale (Komfort) [10] | 64 | 0x40 | CAS |
| 132 | 638 | 0x27E | Status Verdeck Cabrio [7] | 255 | 0xFF | Sender unbekannt |
| 133 | 642 | 0x282 | Steuerung Sicherheitsfahrzeug 2 [6] | 255 | 0xFF | Sender unbekannt |
| 134 | 644 | 0x284 | Steuerung Fernstart Sicherheitsfahrzeug [8] | 64 | 0x40 | CAS |
| 135 | 646 | 0x286 | Steuerung Elektrochrom Abblenden [1] | 86 | 0x56 | FZD |
| 136 | 652 | 0x28C | Bedienung Taster Vertikaldynamik [2] | 94 | 0x5E | GWS |
| 137 | 656 | 0x290 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] | 255 | 0xFF | Sender unbekannt |
| 138 | 658 | 0x292 | Steuerung Fernlicht-Assistent (3) | 95 | 0x5F | FLA |
| 139 | 670 | 0x29E | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4] | 255 | 0xFF | Sender unbekannt |
| 140 | 671 | 0x29F | Fernbedienung FondCommander [5] | 64 | 0x40 | CAS |
| 141 | 672 | 0x2A0 | Steuerung Zentralverriegelung [10] | 64 | 0x40 | CAS |
| 142 | 674 | 0x2A2 | Bedienung Klima Standfunktionen [5] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 143 | 676 | 0x2A4 | Bedienung Personalisierung [8] | 96 | 0x60 | Kombi |
| 144 | 678 | 0x2A6 | Bedienung Wischertaster [12] | 2 | 0x2 | SZL_LWS/SZL_LWS |
| 145 | 690 | 0x2B2 | Raddrücke K-CAN [1] | 41 | 0x29 | EHB3 |
| 146 | 691 | 0x2B3 | Beschleunigungsdaten [3] | 41 | 0x29 | EHB3 |
| 147 | 692 | 0x2B4 | DWA-Alarm [4] | 86 | 0x56 | FZD |
| 148 | 694 | 0x2B6 | Steuerung Hupe DWA [3] | 86 | 0x56 | FZD |
| 149 | 696 | 0x2B8 | Bedienung Bordcomputer [3] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 150 | 697 | 0x2B9 | Bedienung RSE [1] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 151 | 698 | 0x2BA | Stoppuhr [3] | 96 | 0x60 | Kombi |
| 152 | 701 | 0x2BD | Anforderung Umschalten Anzeige [2] | 98 | 0x62 | CCC_GW |
| 153 | 702 | 0x2BE | Status Umschalten Anzeige [2] | 72 | 0x48 | VSW |
| 154 | 703 | 0x2BF | Steuerung Wasserventile [2] | 120 | 0x78 | IHKA |
| 155 | 704 | 0x2C0 | LCD-Leuchtdichte [7] | 96 | 0x60 | Kombi |
| 156 | 706 | 0x2C2 | Temperatur Ist Fond [2] | 121 | 0x79 | FKA |
| 157 | 714 | 0x2CA | Außentemperatur [9] | 96 | 0x60 | Kombi |
| 158 | 716 | 0x2CC | Steuerung Monitor Fond [2] | 38 | 0x26 | RSE |
| 159 | 718 | 0x2CE | Steuerung Monitor [4] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 160 | 719 | 0x2CF | Status Zusatzwasserpumpe [4] | 0 | 0x0 | JBBF |
| 161 | 720 | 0x2D0 | Status Sensor AUC [4] | 0 | 0x0 | JBBF |
| 162 | 721 | 0x2D1 | Status Beschlag Scheibe V [5] | 86 | 0x56 | FZD |
| 163 | 722 | 0x2D2 | Status Druck Kältekreislauf [5] | 0 | 0x0 | JBBF |
| 164 | 723 | 0x2D3 | Status Schichtung Fond [6] | 0 | 0x0 | JBBF |
| 165 | 725 | 0x2D5 | Status Heizung Heckscheibe [1] | 0 | 0x0 | JBBF |
| 166 | 726 | 0x2D6 | Status Ventil Klimakompressor [3] | 0 | 0x0 | JBBF |
| 167 | 730 | 0x2DA | Status Heckklappenlift [2] | 107 | 0x6B | HKL |
| 168 | 734 | 0x2DE | Steuerung Umschalten Anzeige [1] | 72 | 0x48 | VSW |
| 169 | 738 | 0x2E2 | Status Einstellung Video Night-Vision [1] | 87 | 0x57 | NVC |
| 170 | 739 | 0x2E3 | Status Einstellung Video Rückfahrkamera [1] | 119 | 0x77 | RFK |
| 171 | 740 | 0x2E4 | Status Anhänger [8] | 113 | 0x71 | AHM |
| 172 | 742 | 0x2E6 | Status Klima Luftverteilung FA [13] | 120 | 0x78 | IHKA |
| 173 | 746 | 0x2EA | Status Klima Luftverteilung BF [9] | 120 | 0x78 | IHKA |
| 174 | 752 | 0x2F0 | Status Klima Standfunktionen [12] | 120 | 0x78 | IHKA |
| 175 | 758 | 0x2F6 | Steuerung Licht [7] | 114 | 0x72 | FRMFA |
| 176 | 759 | 0x2F7 | Einheiten [10] | 96 | 0x60 | Kombi |
| 177 | 760 | 0x2F8 | Uhrzeit/Datum [12] | 96 | 0x60 | Kombi |
| 178 | 762 | 0x2FA | Sitzbelegung Gurtkontakte (15) | 1 | 0x1 | ACSM |
| 179 | 764 | 0x2FC | ZV und Klappenzustand [11] | 64 | 0x40 | CAS |
| 180 | 768 | 0x300 | Status RSE [1] | 38 | 0x26 | RSE |
| 181 | 772 | 0x304 | Status Gang [13] | 24 | 0x18 | EGS_EL |
| 182 | 774 | 0x306 | Fahrzeugneigung [2] | 114 | 0x72 | FRMFA |
| 183 | 776 | 0x308 | Status MSA [2] | 18 | 0x12 | DME1/DDE1 |
| 184 | 784 | 0x310 | Außentemperatur/Relativzeit [10] | 96 | 0x60 | Kombi |
| 185 | 785 | 0x311 | Nachtankmenge [3] | 96 | 0x60 | Kombi |
| 186 | 786 | 0x312 | Service Call Teleservice [2] | 96 | 0x60 | Kombi |
| 187 | 787 | 0x313 | Status Service Call Teleservice [3] | 54 | 0x36 | TEL_BPI |
| 188 | 787 | 0x313 | Status Service Call Teleservice [3] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 189 | 788 | 0x314 | Status Fahrlicht [9] | 86 | 0x56 | FZD |
| 190 | 790 | 0x316 | Bedienung Taster DSC [4] | 120 | 0x78 | IHKA |
| 191 | 791 | 0x317 | Bedienung Taster Einparkhilfen [2] | 120 | 0x78 | IHKA |
| 192 | 792 | 0x318 | Status Antennen Passive Access [7] | 39 | 0x27 | PGS |
| 193 | 793 | 0x319 | Bedienung Taster RDC (5) | 96 | 0x60 | Kombi |
| 194 | 794 | 0x31A | Bedienung Taster HDC [2] | 120 | 0x78 | IHKA |
| 195 | 795 | 0x31B | Bedienung Taster Heckklappe Innen [2] | 120 | 0x78 | IHKA |
| 196 | 796 | 0x31C | Status Reifendruck [6] | 32 | 0x20 | RDC |
| 197 | 797 | 0x31D | Status Reifenpannenanzeige [6] | 41 | 0x29 | EHB3 |
| 198 | 801 | 0x321 | Bedienung Taster Kamera BF [2] | 120 | 0x78 | IHKA |
| 199 | 806 | 0x326 | Status Dämpferprogramm [9] | 57 | 0x39 | VDM |
| 200 | 808 | 0x328 | Relativzeit [9] | 96 | 0x60 | Kombi |
| 201 | 813 | 0x32D | Anzeige HDC [3] | 41 | 0x29 | EHB3 |
| 202 | 814 | 0x32E | Status Klima Interne Regelinfo [6] | 120 | 0x78 | IHKA |
| 203 | 816 | 0x330 | Kilometerstand/Reichweite [5] | 96 | 0x60 | Kombi |
| 204 | 817 | 0x331 | Programmierung Stufentempomat [2] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 205 | 818 | 0x332 | Fahreranzeige Drehzahlbereich [4] | 18 | 0x12 | DME1/DDE1 |
| 206 | 821 | 0x335 | Status Elektrische Kraftstoffpumpe [3] | 23 | 0x17 | EKP |
| 207 | 822 | 0x336 | Anzeige Checkcontrol-Meldung (Rolle) [3] | 96 | 0x60 | Kombi |
| 208 | 823 | 0x337 | Status Kraftstoffregelung DME [1] | 18 | 0x12 | DME1 |
| 209 | 824 | 0x338 | Steuerung Anzeige Checkcontrol-Meldung [7] | 96 | 0x60 | Kombi |
| 210 | 825 | 0x339 | Status Anzeige Klima [2] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 211 | 826 | 0x33A | Status Monitor Front [3] | 115 | 0x73 | CID_C_H/CID_C |
| 212 | 828 | 0x33C | Status Monitor Fond 1 [3] | 116 | 0x74 | CID_C_R |
| 213 | 830 | 0x33E | Status Monitor Fond 2 [3] | 117 | 0x75 | CID_C_R_2 |
| 214 | 841 | 0x349 | Rohdaten Füllstand Tank (5) | 0 | 0x0 | JBBF |
| 215 | 843 | 0x34B | Status Sitzlehnenverriegelung FA [4] | 109 | 0x6D | SM_FA |
| 216 | 845 | 0x34D | Status Sitzlehnenverriegelung BF [2] | 110 | 0x6E | SM_BF |
| 217 | 847 | 0x34F | Status Kontakt Handbremse [4] | 255 | 0xFF | Sender unbekannt |
| 218 | 858 | 0x35A | Termin Condition Based Service [2] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 219 | 860 | 0x35C | Status Bordcomputer [5] | 96 | 0x60 | Kombi |
| 220 | 862 | 0x35E | Daten Bordcomputer (Reisedaten) [5] | 96 | 0x60 | Kombi |
| 221 | 864 | 0x360 | Daten Bordcomputer (Fahrtbeginn) [2] | 96 | 0x60 | Kombi |
| 222 | 866 | 0x362 | Daten Bordcomputer (Durchschnittswerte) [4] | 96 | 0x60 | Kombi |
| 223 | 868 | 0x364 | Daten Bordcomputer (Ankunft) [2] | 96 | 0x60 | Kombi |
| 224 | 870 | 0x366 | Anzeige Kombi/Externe Anzeige [3] | 96 | 0x60 | Kombi |
| 225 | 871 | 0x367 | Steuerung Anzeige Bedarfsorientierter Service [7] | 96 | 0x60 | Kombi |
| 226 | 884 | 0x374 | Radtoleranzabgleich [7] | 41 | 0x29 | EHB3 |
| 227 | 886 | 0x376 | Status Verschleiß Lamelle [3] | 25 | 0x19 | VGSG |
| 228 | 896 | 0x380 | Fahrgestellnummer [5] | 64 | 0x40 | CAS |
| 229 | 897 | 0x381 | Elektronischer Motorölmessstab [10] | 18 | 0x12 | DME1/DDE1 |
| 230 | 898 | 0x382 | Elektronischer Motorölmessstab M [1] | 18 | 0x12 | DME1/DDE1 |
| 231 | 904 | 0x388 | Fahrzeugtyp [14] | 64 | 0x40 | CAS |
| 232 | 907 | 0x38B | Status Batterie [1] | 18 | 0x12 | DME1/DDE1 |
| 233 | 910 | 0x38E | Startdrehzahl [1] | 18 | 0x12 | DME1/DDE1 |
| 234 | 914 | 0x392 | Status System AFS [3] | 22 | 0x16 | AFS |
| 235 | 916 | 0x394 | RDA Anfrage/Datenablage [5] | 96 | 0x60 | Kombi |
| 236 | 917 | 0x395 | Codierung Powermanagement [2] | 64 | 0x40 | CAS |
| 237 | 920 | 0x398 | Bedienung Fahrwerk [14] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 238 | 921 | 0x399 | Status M-Drive (3) | 18 | 0x12 | DME1 |
| 239 | 926 | 0x39E | Bedienung Uhrzeit/Datum [1] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 240 | 928 | 0x3A0 | Fahrzeugzustand [4] | 0 | 0x0 | JBBF |
| 241 | 931 | 0x3A3 | Anforderung Remote Services [2] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 242 | 940 | 0x3AC | Nachlaufzeit Klemme 30 fehlergesteuert [2] | 0 | 0x0 | JBBF |
| 243 | 944 | 0x3B0 | Status Gang Rückwärts [2] | 114 | 0x72 | FRMFA |
| 244 | 947 | 0x3B3 | Powermanagement Verbrauchersteuerung [9] | 18 | 0x12 | DME1/DDE1 |
| 245 | 948 | 0x3B4 | Powermanagement Batteriespannung [11] | 18 | 0x12 | DME1/DDE1 |
| 246 | 949 | 0x3B5 | Status Wasserventil [6] | 0 | 0x0 | JBBF |
| 247 | 950 | 0x3B6 | Position Fensterheber FAT [6] | 114 | 0x72 | FRMFA |
| 248 | 951 | 0x3B7 | Position Fensterheber FATH [5] | 0 | 0x0 | JBBF |
| 249 | 952 | 0x3B8 | Position Fensterheber BFT [6] | 114 | 0x72 | FRMFA |
| 250 | 953 | 0x3B9 | Position Fensterheber BFTH [5] | 0 | 0x0 | JBBF |
| 251 | 954 | 0x3BA | Position SHD [10] | 86 | 0x56 | FZD |
| 252 | 956 | 0x3BC | Position Fensterheber Sicherheitsfahrzeug [2] | 255 | 0xFF | Sender unbekannt |
| 253 | 958 | 0x3BE | Nachlaufzeit Stromversorgung [5] | 64 | 0x40 | CAS |
| 254 | 960 | 0x3C0 | Konfiguration FAS [3] | 109 | 0x6D | SM_FA |
| 255 | 961 | 0x3C1 | Konfiguration BFS [3] | 110 | 0x6E | SM_BF |
| 256 | 979 | 0x3D3 | Status Solarsensor [1] | 86 | 0x56 | FZD |
| 257 | 980 | 0x3D4 | Konfiguration Zentralverriegelung CKM [3] | 96 | 0x60 | Kombi |
| 258 | 982 | 0x3D6 | Konfiguration DWA CKM [1] | 96 | 0x60 | Kombi |
| 259 | 983 | 0x3D7 | Status DWA CKM [2] | 86 | 0x56 | FZD |
| 260 | 984 | 0x3D8 | Konfiguration RLS CKM [3] | 96 | 0x60 | Kombi |
| 261 | 985 | 0x3D9 | Status RLS CKM [4] | 86 | 0x56 | FZD |
| 262 | 986 | 0x3DA | Konfiguration Memorypositionen CKM [1] | 96 | 0x60 | Kombi |
| 263 | 987 | 0x3DB | Status Memorypositionen CKM [3] | 109 | 0x6D | SM_FA |
| 264 | 988 | 0x3DC | Konfiguration Licht CKM [3] | 96 | 0x60 | Kombi |
| 265 | 989 | 0x3DD | Status Licht CKM [4] | 114 | 0x72 | FRMFA |
| 266 | 990 | 0x3DE | Konfiguration Klima CKM [5] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 267 | 991 | 0x3DF | Status Klima CKM [6] | 120 | 0x78 | IHKA |
| 268 | 994 | 0x3E2 | Konfiguration Heckklappe CKM [1] | 98 | 0x62 | CHAMP_M_ASK2/CCC_GW |
| 269 | 995 | 0x3E3 | Status Heckklappe CKM [1] | 107 | 0x6B | HKL |
| 270 | 996 | 0x3E4 | Konfiguration Rückfahrkamera CKM [2] | 98 | 0x62 | CCC_GW |
| 271 | 997 | 0x3E5 | Status Rückfahrkamera CKM [2] | 119 | 0x77 | RFK |
| 272 | 1001 | 0x3E9 | Marker 1 [1] | 255 | 0xFF | Sender unbekannt |
| 273 | 1002 | 0x3EA | Marker 2 [3] | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 274 | 1003 | 0x3EB | Marker 3 [1] | 125 | 0x7D | Diagnosetool_PT_CAN |
| 275 | 1007 | 0x3EF | OBD Daten Motor [3] | 18 | 0x12 | DME1/DDE1 |
| 276 | 1008 | 0x3F0 | Konfiguration Licht Erweitert CKM [1] | 96 | 0x60 | Kombi |
| 277 | 1009 | 0x3F1 | Status Licht Erweitert CKM [1] | 114 | 0x72 | FRMFA |
| 278 | 1016 | 0x3F8 | Steuerung Klima Fond [3] | 120 | 0x78 | IHKA |
| 279 | 1018 | 0x3FA | Status Soll Klima Fond [1] | 121 | 0x79 | FKA |
| 280 | 1022 | 0x3FE | Anforderung CAN_Testtool SI-Bus [5] | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 281 | 1023 | 0x3FF | Übertragung Daten SI-Bus CAN_Testtool [5] | 255 | 0xFF | Sender unbekannt |
| 282 | 1153 | 0x481 | Netzwerkmanagement | 1 | 0x1 | ACSM |
| 283 | 1153 | 0x481 | Netzwerkmanagement | 1 | 0x1 | ACSM_ROSE |
| 284 | 1154 | 0x482 | Netzwerkmanagement | 2 | 0x2 | SZL_LWS |
| 285 | 1170 | 0x492 | Netzwerkmanagement | 18 | 0x12 | DDE1 |
| 286 | 1170 | 0x492 | Netzwerkmanagement | 18 | 0x12 | DME1 |
| 287 | 1174 | 0x496 | Netzwerkmanagement | 22 | 0x16 | AFS |
| 288 | 1175 | 0x497 | Netzwerkmanagement | 23 | 0x17 | EKP |
| 289 | 1176 | 0x498 | Netzwerkmanagement | 24 | 0x18 | EGS_EL |
| 290 | 1177 | 0x499 | Netzwerkmanagement | 25 | 0x19 | VGSG |
| 291 | 1179 | 0x49B | Netzwerkmanagement | 27 | 0x1B | VVT1 |
| 292 | 1182 | 0x49E | Netzwerkmanagement | 30 | 0x1E | VVT2 |
| 293 | 1184 | 0x4A0 | Netzwerkmanagement | 32 | 0x20 | RDC |
| 294 | 1187 | 0x4A3 | Netzwerkmanagement | 35 | 0x23 | ARS_Modul |
| 295 | 1189 | 0x4A5 | Netzwerkmanagement | 37 | 0x25 | RSC_VDA/SC_VDA |
| 296 | 1190 | 0x4A6 | Netzwerkmanagement | 38 | 0x26 | RSE |
| 297 | 1191 | 0x4A7 | Netzwerkmanagement | 39 | 0x27 | PGS |
| 298 | 1193 | 0x4A9 | Netzwerkmanagement | 41 | 0x29 | EHB3 |
| 299 | 1194 | 0x4AA | Netzwerkmanagement | 42 | 0x2A | EMF |
| 300 | 1201 | 0x4B1 | Netzwerkmanagement | 49 | 0x31 | MMC |
| 301 | 1206 | 0x4B6 | Netzwerkmanagement | 54 | 0x36 | TEL_BPI/TEL_JAP/TEL_MULF |
| 302 | 1207 | 0x4B7 | Netzwerkmanagement | 55 | 0x37 | AMP_HIFI/AMP_TOP |
| 303 | 1208 | 0x4B8 | Netzwerkmanagement | 56 | 0x38 | EHC |
| 304 | 1209 | 0x4B9 | Netzwerkmanagement | 57 | 0x39 | VDM |
| 305 | 1210 | 0x4BA | Netzwerkmanagement | 58 | 0x3A | KHM |
| 306 | 1211 | 0x4BB | Netzwerkmanagement | 59 | 0x3B | JNAV |
| 307 | 1212 | 0x4BC | Netzwerkmanagement | 60 | 0x3C | CDC |
| 308 | 1213 | 0x4BD | Netzwerkmanagement | 61 | 0x3D | HUD |
| 309 | 1216 | 0x4C0 | Netzwerkmanagement | 64 | 0x40 | CAS |
| 310 | 1221 | 0x4C5 | Netzwerkmanagement | 69 | 0x45 | RLS |
| 311 | 1224 | 0x4C8 | Netzwerkmanagement | 72 | 0x48 | VSW |
| 312 | 1227 | 0x4CB | Netzwerkmanagement | 75 | 0x4B | VM |
| 313 | 1232 | 0x4D0 | Netzwerkmanagement | 80 | 0x50 | Notstrom-Sirene |
| 314 | 1235 | 0x4D3 | Netzwerkmanagement | 83 | 0x53 | IBOC |
| 315 | 1236 | 0x4D4 | Netzwerkmanagement | 84 | 0x54 | SDARS |
| 316 | 1237 | 0x4D5 | Netzwerkmanagement | 85 | 0x55 | ISpeechBox |
| 317 | 1238 | 0x4D6 | Netzwerkmanagement | 86 | 0x56 | FZD |
| 318 | 1239 | 0x4D7 | Netzwerkmanagement | 87 | 0x57 | NVC |
| 319 | 1243 | 0x4DB | Netzwerkmanagement | 91 | 0x5B | DAB |
| 320 | 1246 | 0x4DE | Netzwerkmanagement | 94 | 0x5E | GWS |
| 321 | 1247 | 0x4DF | Netzwerkmanagement | 95 | 0x5F | FLA |
| 322 | 1248 | 0x4E0 | Netzwerkmanagement | 96 | 0x60 | Kombi |
| 323 | 1250 | 0x4E2 | Netzwerkmanagement | 98 | 0x62 | CCC_GW/CHAMP_M_ASK2 |
| 324 | 1251 | 0x4E3 | Netzwerkmanagement | 99 | 0x63 | CCC_MM |
| 325 | 1252 | 0x4E4 | Netzwerkmanagement | 100 | 0x64 | PDC |
| 326 | 1255 | 0x4E7 | Netzwerkmanagement | 103 | 0x67 | ZBE |
| 327 | 1259 | 0x4EB | Netzwerkmanagement | 107 | 0x6B | HKL |
| 328 | 1261 | 0x4ED | Netzwerkmanagement | 109 | 0x6D | SM_FA |
| 329 | 1262 | 0x4EE | Netzwerkmanagement | 110 | 0x6E | SM_BF |
| 330 | 1265 | 0x4F1 | Netzwerkmanagement | 113 | 0x71 | AHM |
| 331 | 1266 | 0x4F2 | Netzwerkmanagement | 114 | 0x72 | FRMFA/FRMFA_ALC |
| 332 | 1267 | 0x4F3 | Netzwerkmanagement | 115 | 0x73 | CID_C/CID_C_H |
| 333 | 1268 | 0x4F4 | Netzwerkmanagement | 116 | 0x74 | CID_C_R |
| 334 | 1269 | 0x4F5 | Netzwerkmanagement | 117 | 0x75 | CID_C_R_2 |
| 335 | 1271 | 0x4F7 | Netzwerkmanagement | 119 | 0x77 | RFK |
| 336 | 1272 | 0x4F8 | Netzwerkmanagement | 120 | 0x78 | IHKA |
| 337 | 1273 | 0x4F9 | Netzwerkmanagement | 121 | 0x79 | FKA |
| 338 | 1277 | 0x4FD | Netzwerkmanagement | 125 | 0x7D | Diagnosetool_PT_CAN |
| 339 | 1278 | 0x4FE | Netzwerkmanagement | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 340 | 1280 | 0x500 | Datentransfer [1] | 255 | 0xFF | Sender unbekannt |
| 341 | 1289 | 0x509 | Netzwerkmanagement | 137 | 0x89 | XE_HDLI_LH_ALC |
| 342 | 1290 | 0x50A | Netzwerkmanagement | 138 | 0x8A | XE_HDLI_RH_ALC |
| 343 | 1291 | 0x50B | Netzwerkmanagement | 139 | 0x8B | CNV |
| 344 | 1317 | 0x525 | Netzwerkmanagement | 165 | 0xA5 | EDCS_VL |
| 345 | 1318 | 0x526 | Netzwerkmanagement | 166 | 0xA6 | EDCS_VR |
| 346 | 1319 | 0x527 | Netzwerkmanagement | 167 | 0xA7 | EDCS_HL |
| 347 | 1320 | 0x528 | Netzwerkmanagement | 168 | 0xA8 | EDCS_HR |
| 348 | 1393 | 0x571 | Netzwerkmanagement | 241 | 0xF1 | Diagnosedose/D_CAN_Tester |
| 349 | 1408 | 0x580 | Dienste | 0 | 0x0 | JBBF |
| 350 | 1409 | 0x581 | Dienste | 1 | 0x1 | ACSM/ACSM_ROSE |
| 351 | 1410 | 0x582 | Dienste | 2 | 0x2 | SZL_LWS |
| 352 | 1426 | 0x592 | Dienste | 18 | 0x12 | DDE1/DME1 |
| 353 | 1430 | 0x596 | Dienste | 22 | 0x16 | AFS |
| 354 | 1431 | 0x597 | Dienste | 23 | 0x17 | EKP |
| 355 | 1432 | 0x598 | Dienste | 24 | 0x18 | EGS_EL |
| 356 | 1433 | 0x599 | Dienste | 25 | 0x19 | VGSG |
| 357 | 1435 | 0x59B | Dienste | 27 | 0x1B | VVT1 |
| 358 | 1438 | 0x59E | Dienste | 30 | 0x1E | VVT2 |
| 359 | 1440 | 0x5A0 | Dienste | 32 | 0x20 | RDC |
| 360 | 1443 | 0x5A3 | Dienste | 35 | 0x23 | ARS_Modul |
| 361 | 1445 | 0x5A5 | Dienste | 37 | 0x25 | RSC_VDA/SC_VDA |
| 362 | 1446 | 0x5A6 | Dienste | 38 | 0x26 | RSE |
| 363 | 1447 | 0x5A7 | Dienste | 39 | 0x27 | PGS |
| 364 | 1449 | 0x5A9 | Dienste | 41 | 0x29 | EHB3 |
| 365 | 1450 | 0x5AA | Dienste | 42 | 0x2A | EMF |
| 366 | 1457 | 0x5B1 | Dienste | 49 | 0x31 | MMC |
| 367 | 1462 | 0x5B6 | Dienste | 54 | 0x36 | TEL_BPI/TEL_JAP/TEL_MULF |
| 368 | 1463 | 0x5B7 | Dienste | 55 | 0x37 | AMP_HIFI/AMP_TOP |
| 369 | 1464 | 0x5B8 | Dienste | 56 | 0x38 | EHC |
| 370 | 1465 | 0x5B9 | Dienste | 57 | 0x39 | VDM |
| 371 | 1466 | 0x5BA | Dienste | 58 | 0x3A | KHM |
| 372 | 1467 | 0x5BB | Dienste | 59 | 0x3B | JNAV |
| 373 | 1468 | 0x5BC | Dienste | 60 | 0x3C | CDC |
| 374 | 1469 | 0x5BD | Dienste | 61 | 0x3D | HUD |
| 375 | 1472 | 0x5C0 | Dienste | 64 | 0x40 | CAS |
| 376 | 1477 | 0x5C5 | Dienste | 69 | 0x45 | RLS |
| 377 | 1480 | 0x5C8 | Dienste | 72 | 0x48 | VSW |
| 378 | 1483 | 0x5CB | Dienste | 75 | 0x4B | VM |
| 379 | 1488 | 0x5D0 | Dienste | 80 | 0x50 | Notstrom-Sirene |
| 380 | 1491 | 0x5D3 | Dienste | 83 | 0x53 | IBOC |
| 381 | 1492 | 0x5D4 | Dienste | 84 | 0x54 | SDARS |
| 382 | 1493 | 0x5D5 | Dienste | 85 | 0x55 | ISpeechBox |
| 383 | 1494 | 0x5D6 | Dienste | 86 | 0x56 | FZD |
| 384 | 1495 | 0x5D7 | Dienste | 87 | 0x57 | NVC |
| 385 | 1499 | 0x5DB | Dienste | 91 | 0x5B | DAB |
| 386 | 1502 | 0x5DE | Dienste | 94 | 0x5E | GWS |
| 387 | 1503 | 0x5DF | Dienste | 95 | 0x5F | FLA |
| 388 | 1504 | 0x5E0 | Dienste | 96 | 0x60 | Kombi |
| 389 | 1506 | 0x5E2 | Dienste | 98 | 0x62 | CCC_GW/CHAMP_M_ASK2 |
| 390 | 1507 | 0x5E3 | Dienste | 99 | 0x63 | CCC_MM |
| 391 | 1508 | 0x5E4 | Dienste | 100 | 0x64 | PDC |
| 392 | 1511 | 0x5E7 | Dienste | 103 | 0x67 | ZBE |
| 393 | 1515 | 0x5EB | Dienste | 107 | 0x6B | HKL |
| 394 | 1517 | 0x5ED | Dienste | 109 | 0x6D | SM_FA |
| 395 | 1518 | 0x5EE | Dienste | 110 | 0x6E | SM_BF |
| 396 | 1521 | 0x5F1 | Dienste | 113 | 0x71 | AHM |
| 397 | 1522 | 0x5F2 | Dienste | 114 | 0x72 | FRMFA/FRMFA_ALC |
| 398 | 1523 | 0x5F3 | Dienste | 115 | 0x73 | CID_C/CID_C_H |
| 399 | 1524 | 0x5F4 | Dienste | 116 | 0x74 | CID_C_R |
| 400 | 1525 | 0x5F5 | Dienste | 117 | 0x75 | CID_C_R_2 |
| 401 | 1527 | 0x5F7 | Dienste | 119 | 0x77 | RFK |
| 402 | 1528 | 0x5F8 | Dienste | 120 | 0x78 | IHKA |
| 403 | 1529 | 0x5F9 | Dienste | 121 | 0x79 | FKA |
| 404 | 1533 | 0x5FD | Dienste | 125 | 0x7D | Diagnosetool_PT_CAN |
| 405 | 1534 | 0x5FE | Dienste | 126 | 0x7E | Diagnosetool_K_CAN_System |
| 406 | 1545 | 0x609 | Dienste | 137 | 0x89 | XE_HDLI_LH_ALC |
| 407 | 1546 | 0x60A | Dienste | 138 | 0x8A | XE_HDLI_RH_ALC |
| 408 | 1547 | 0x60B | Dienste | 139 | 0x8B | CNV |
| 409 | 1573 | 0x625 | Dienste | 165 | 0xA5 | EDCS_VL |
| 410 | 1574 | 0x626 | Dienste | 166 | 0xA6 | EDCS_VR |
