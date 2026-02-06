# rad12r.prg

## General

|  |  |
| --- | --- |
| File | rad12r.prg |
| Type | PRG |
| Jobs | 106 |
| Tables | 70 |
| Origin | BMW EI-41 Heide Kuhrau |
| Revision | 6.000 |
| Author | BMW TI-431 Eckhart, Telemotive EI-42 Özcan, Telemotive EI-42 Go |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Radio 1.2 Rüko |  |  |
| ORIGIN | string | BMW EI-41 Heide Kuhrau |  |  |
| REVISION | string | 6.000 |  |  |
| AUTHOR | string | BMW TI-431 Eckhart, Telemotive EI-42 Özcan, Telemotive EI-42 Go |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

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

### STEUERN_ANT_EIGEN_DIAG

Starts antenna diagnostics cycle for the respective antenna specification

_No arguments._

### STATUS_ANT_EIGEN_DIAG

Result of the antenna diversity self-diagnosis.

_No arguments._

### STATUS_ANT_QFS

Reads the current quality and the field strength of the actual radio signal of the actual frequency.

_No arguments._

### STEUERN_ANT_SCAN

Creates an 8 Volt peek (if diversity diagnosis modus is active done by steuern_ant_eigen_diagnose) to switch through the FM antennas of the diversity or to switch back to normal operation mode into the AM band with the AM amplifier being active

| Name | Type | Description |
| --- | --- | --- |
| ARG_SCAN | unsigned char | Operation to be performed 0x00 switch to AM, 0x01 switch to next FM (create a peek) |

### STEUERN_TEST_ANTENNE

Performs an impedance measurement of one, some or all antennas

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned long | Bitcombination of antennas to be tested values from table TAntenne |

### STATUS_TEST_ANTENNE

Returns the results of the impedance measurements performed with steuern_test_antenne

_No arguments._

### STEUERN_AUDIOKANAELE

Ansteuern eines AudioKanals

| Name | Type | Description |
| --- | --- | --- |
| ARG_KANAL | long | is the desired  BIT combination of the following values from table TAudiokanal WERT |

### STATUS_AUDIOKANAELE

Returns the status of the Audiokanaele

_No arguments._

### STEUERN_FIND_BEST_STATION

Triggers the search in the current waveband of the best station (station with the best reception). When the best station has been detected, the head-unit switches to this best station.

_No arguments._

### STATUS_FIND_BEST_STATION

Returns the status of the searching process and the information data of the best station if the searching process has been ended successfully.

_No arguments._

### STEUERN_FREQUENZ

Set the tuner frequency.

| Name | Type | Description |
| --- | --- | --- |
| ARG_FREQUENZ | unsigned long | Frequency that must be set like: 94400 |

### STATUS_FREQUENZ

Get back the currently active tuner frequency

_No arguments._

### STEUERN_NEXT_ENTSOURCE

Enables to switch to the next or to a specified entertainment source.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ENTSOURCE | unsigned char | Entertainment source to be set Values from table TEntSource |

### STATUS_NEXT_ENTSOURCE

Gives back the status of actual entertainmentsource.

_No arguments._

### STEUERN_RADON

Sets the RADON control lead to logical High or Low. ONLY TO USE WITH RADIO 1.2 BY CONTINENTAL (from PU 09/10)

| Name | Type | Description |
| --- | --- | --- |
| ARG_RADON | unsigned char | Logical value of the RAD ON lead that must be set |

### STATUS_RADON

Reads out the status of the RADON control lead.

_No arguments._

### STEUERN_CLEAR_CKMDATA

Restores the delivery state (resets the PIA settings to their default settings) for the desired key/car.

| Name | Type | Description |
| --- | --- | --- |
| ARG_NR_KEY | unsigned char | Key number or car for which the delivery state must be restored |

### STATUS_CLEAR_CKMDATA

Status des Löschens der Car-Key-PIA Daten eines oder aller Schlüssel.

_No arguments._

### STEUERN_RDS

Enables to control the activation state of the RDS and of the TP functionalities.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TP | unsigned char | Activation state of TP 0 TP aus, 1 TP ein, 2 TP keine Änderung |
| ARG_RDS | unsigned char | Activation state of RDS 0 RDS aus, 1 RDS ein, 2 RDS keine Änderung |

### STATUS_RDS

Reads out the activation state of the TP, RDS and AF functionalities.

_No arguments._

### STEUERN_VOLUMEAUDIO

Adjusts the volume of a definite audio signal

| Name | Type | Description |
| --- | --- | --- |
| ARG_LEVEL | char | Desired Volumelevel (Range 0 to 63) or OffsetEntertainment (Range -11 to 11) |
| ARG_AUDIO_SIGNAL | unsigned char | Adjusts the volume (only 0x00, 0x0B, 0x0C) or OffsetEntertainment (only 0x01 .. 0x0A) of a definite audio signal from table TAudioSignal |

### STATUS_VOLUMEAUDIO

Abfragen der Audio-Lautstaerke

| Name | Type | Description |
| --- | --- | --- |
| ARG_AUDIO_SIGNAL | unsigned char | Adjusts the volume of a definite audio signal from table TAudioSignal Default, 0x00 Entertainment |

### STEUERN_VOLUMEAUDIO_DEFAULT

Set Volumeaudio default

_No arguments._

### STEUERN_TEST_VERBAU

Performs a test of one, some or all external interfaces ONLY TO USE WITH RADIO 1.2 BY CONTINENTAL (from PU 09/10)

| Name | Type | Description |
| --- | --- | --- |
| ARG_VERBAU_ROUTINE | long | Routine that must be tested values from table TVerbauRoutine |

### STATUS_TEST_VERBAU

Returns the result of the test of external interfaces performed with steuern_test_verbau ONLY TO USE WITH RADIO 1.2 BY CONTINENTAL (from PU 09/10)

_No arguments._

### STEUERN_LAUTSPRECHER_IMPEDANZMESSUNG

Enables to test a loudspeaker connection by performing an impedance measurement.

| Name | Type | Description |
| --- | --- | --- |
| ARG_FREQUENZ | unsigned int | Frequency used for the impedance measurement Range: 20 – 20000 Hz |
| ARG_LEVEL | unsigned char | Level of the signal used for the impedance measurement Increment value, expressed in hexadecimal |
| ARG_KANAL | long | Channel(s) on which the impedance measurement must be performed Integer values from table TAudioKanal |
| ARG_MESSDAUER | unsigned int | Duration of the measurement Range: 50 – 1000 ms |

### STATUS_LAUTSPRECHER_IMPEDANZMESSUNG

Returns the result of the test performed with steuern_lautsprecher_impedanzmessung.

_No arguments._

### STEUERN_RADIO_SCHALTEN

Controls the mute status of the current entertainment source.

| Name | Type | Description |
| --- | --- | --- |
| ARG_RADIO_SCHALTEN | unsigned char | Desired state of radio, 0x00 off, 0x01 on |

### STATUS_RADIO_SCHALTEN

Returns the mute status of the current entertainment source.

_No arguments._

### STEUERN_SELBSTTEST

Performs a test of internal functions and components.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | long | Routine that must be performed values from table TSelbsttestRoutine |

### STATUS_SELBSTTEST

Returns the mute status of the current entertainment source.

_No arguments._

### STEUERN_SINUSGENERATOR_EIN

Aktivieren des Sinusgenerators und Ausgabe auf allen ausgewählten Lautsprechern

| Name | Type | Description |
| --- | --- | --- |
| ARG_FREQUENZ | unsigned int | desired frequency in Hz |
| ARG_LEVEL | unsigned char | Volumelevel 0x00-0x3F |
| ARG_KANAL | long | Bit combination of desired speakers values from table TAudioKanal |

### STEUERN_SINUSGENERATOR_AUS

Ausschalten des Sinusgenerators

_No arguments._

### STATUS_ANALOG_TEMPERATUR

The temperature values on the FOT, in the module and at the amplifier and all other reasonable locations (e.g. drive) in degrees Celsius.

_No arguments._

### SER_NR_DOM_LESEN

Reads the serial number with 14 digits (DIN ISO 10486)

_No arguments._

### STEUERN_KLANGZEICHEN

Ausloesen eines Klangzeichens

| Name | Type | Description |
| --- | --- | --- |
| ARG_KLANGZEICHEN | unsigned char | Wert table TKlangzeichen WERT |

### STATUS_LESEN_SYSTEMAUDIO

This job reads which audio system is currently coded

_No arguments._

### STATUS_TEL_MUTE

Outputs whether the phone mute lead is active or inactive.

_No arguments._

### STATUS_LESEN_LAUFWERK

Reads out which drives the Head-Unit contains and the type and firmware of each drive.

_No arguments._

### STEUERN_TRACK_NUMBER

Sets the track number

| Name | Type | Description |
| --- | --- | --- |
| ARG_TRACK | int | Track number that must be set |

### STATUS_DRIVE_CD

Status of DVD Drive

_No arguments._

### STEUERN_EJECT

Ejects the media of the selected drives.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DRIVE | int | Drives from which the media must be ejected Integer values from table TLaufwerk |

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit

_No arguments._

### _STATUS_BOOTLOADER_VERSION

Umsetzung ab E89x-11-03-410 Auslesen der Laendervariante KWP2000: $21 ReadDataByLocalIdentifier $B8 recordLocalIdentifier - Bootloader Version Modus  : Default

_No arguments._

### STATUS_TASTE

Auslesen, ob gerade eine Taste gedrueckt ist

_No arguments._

### STATUS_DREHKNOPF

gibt die Position des Drehknopfes bezüglich des letzen Aufstartens wieder

_No arguments._

### STATUS_CD_MD_CDC

Reads out the disc identifier and the quality level of the digital playback

_No arguments._

### STEUERN_LINEAR

This job resets the tone controls such as bass treble, fader, balance, surround to the default values

_No arguments._

### ENERGIESPARMODE_LESEN

gfAuslesen des Energiesparmodes KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### SCHREIBEN_TELEFONNUMMERN

nur für CD 92 (zweizeiliges Display L3) ab PU 03/2011 Schreiben der Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline KWP2000: $3B writeDataByLocalIdentifier $A4 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_BEREITSCHAFTSDIENST | string | Nummer des Bereitschaftsdienstes Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_HEIMATHAENDLER | string | Nummer des Heimathändlers Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_PASSO | string | Nummer Passo Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_HOTLINE | string | Nummer der Hotline Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |

### LESEN_TELEFONNUMMERN

nur für CD 92 (zweizeiliges Display L3) ab PU 03/2011 Auslesen der im MASK gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline KWP2000: $21 readDataByLocalIdentifier $BE recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_XDEBUG

Enables to control the activation state of the XDEBUG Traces

| Name | Type | Description |
| --- | --- | --- |
| ARG_XDEBUG | unsigned char | Wert table TXDEBUG WERT in vollem Umfang gueltig ab SW-Version: B3.45.40 0x01:OFF, 0x02:ON, 0x03: only Most Channel activated |

### STATUS_XDEBUG

Reads out the activation state XDEBUG

_No arguments._

### LESEN_INDIVIDUALDATA_LISTE

Lesen eines Listeneintrags der Individualisierungsdaten KWP2000: $31 ReadDataByLocalIdentifier $80 recordLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARG_LISTENTRY | unsigned int | Nummer des angeforderten Listenelements (0,1,2,...) 0x0000 = Anforderung, das 1. Listelement zu senden 0x0001 = Anforderung, das 2. Listelement zu senden |

### LESE_INDIVIDUALDATA

Lesen von Individualisierungsdaten Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der RET_DATA zugeordnet ist 0xFF	   Aktuell gesteckter Schlüssel ist RET_DATA zugeordnet actual not used by RAD1.2-2Z |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) actual not used by RAD1.2-2Z |
| ARG_FROMWHERE | unsigned char | Strategie switch actual must be 1 |
| ARG_INQY_LEN | unsigned char | Länge des folgenden Anfragedatenstreams z.B. 0x02 für 2 Byte |
| ARG_INQY_DATA | string | ASCII-codiert Anfrage Individualdatenstream |
| ARG_RESP_LEN | unsigned char | Länge der folgenden Information wie die Antwort erhalten wird. |
| ARG_RESP_DATA | string | ASCII-codiert Information wie die Antwort erhalten wird: |

### SCHREIBEN_INDIVIDUALDATA

Schreiben von Individualisierungsdaten Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der ARG_DATA zugeordnet ist 0xFF	   Aktuell gesteckter Schlüssel ist ARG_DATA zugeordnet actual not used by RAD1.2-2Z |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Strategie switch actual must be 1 |
| ARG_STATUS | unsigned char | 0xFF letztes oder einziges element des Datenstreams 0x00 es folgen weitere Datenstreamstücke |
| ARG_WRITE_LEN | unsigned char | Länge des folgenden Schreibauftrags z.B. 0x02 für 2 Byte |
| ARG_WRITE_DATA | string | ASCII-codiert Schreibauftrag für Individualdatenstream |
| ARG_W_RESP_LEN | unsigned char | Optional, Laenge des folgenden Antwortfilters not used by RAD1.2-2Z |
| ARG_W_RESP_DATA | string | ASCII-codiert, Optional, Antwortfilter des Schreibauftrags not used by RAD1.2-2Z |
| ARG_LEN | int | Länge des Individualisierungs Datenstream oder -streamstücks |
| ARG_DATA | string | ASCII-codiert Datenstream |

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
| ?81? | ERROR_VEHICLE_IDENTIFICATION_NR |
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
| 0x72 | AISIN AW CO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | AKsys GmbH |
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
| 0x93 | TPO Display Corp. |
| 0x94 | KÜSTER Automotive Control |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental Automotive |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls |
| 0x9A | Takata- Petri |
| 0x9B | Mitsubishi Electric B.V. (Melco) |
| 0x9C | Autokabel |
| 0x9D | GKN-Driveline |
| 0x9E | Zollner Elektronik AG |
| 0x9F | PEIKER acustics GmbH |
| 0xA0 | Bosal-Oris |
| 0xA1 | Cobasys |
| 0xA2 | Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | ADC Automotive Distance Control Systems GmbH |
| 0xA5 | Funkwerk Dabendorf GmbH |
| 0xA6 | Lame |
| 0xA7 | Magna/Closures |
| 0xA8 | Wanyu |
| 0xA9 | Thyssen Krupp Presta |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
| 0xAC | SMR Automotive Mirrors |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA |
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
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
| 0xC508 | Verbindung Head-Unit zum Diversity: Leitungsunterbrechung |
| 0xC509 | Verbindung Head-Unit zum Diversity: Kurzschluss nach Plus |
| 0xC50A | Verbindung Head-Unit zum Diversity: Kurzschluss nach Masse |
| 0xC50B | Verbindung Head-Unit zum Diversity: falsche Antenne oder Diversity angeschlossen |
| 0xC50C | Verbindung Diversity zu den Antennen: Leitungsunterbrechung |
| 0xC540 | Lautsprecherausgangsleitungen vorne links: Leitungsunterbrechung |
| 0xC541 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Plus |
| 0xC542 | Lautsprecherausgangsleitungen vorne links: Kurzschluss nach Masse |
| 0xC543 | Lautsprecherausgangsleitungen vorne links: Kurzschluss zwischen den 2 Leitungen |
| 0xC544 | Lautsprecherausgangsleitungen vorne rechts: Leitungsunterbrechung |
| 0xC545 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Plus |
| 0xC546 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss nach Masse |
| 0xC547 | Lautsprecherausgangsleitungen vorne rechts: Kurzschluss zwischen den 2 Leitungen |
| 0xC548 | Lautsprecherausgangsleitungen hinten links: Leitungsunterbrechung |
| 0xC549 | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Plus |
| 0xC54A | Lautsprecherausgangsleitungen hinten links: Kurzschluss nach Masse |
| 0xC54B | Lautsprecherausgangsleitungen hinten links: Kurzschluss zwischen den 2 Leitungen |
| 0xC54C | Lautsprecherausgangsleitungen hinten rechts: Leitungsunterbrechung |
| 0xC54D | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Plus |
| 0xC54E | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss nach Masse |
| 0xC54F | Lautsprecherausgangsleitungen hinten rechts: Kurzschluss zwischen den 2 Leitungen |
| 0xC568 | RAD ON Leitung: Kurzschluss nach Plus |
| 0xC569 | RAD ON Leitung: Kurzschluss nach Masse |
| 0xC5B6 | CD Laufwerk Hardware Fehler |
| 0xC5B7 | Medium Fehler im CD Laufwerk |
| 0xC5B8 | ATC Test negativ: CD Laufwerk defekt |
| 0xA168 | Energiesparmode aktiv |
| 0xC589 | Externe Überspannung |
| 0xE1C4 | K-CAN Leitungsfehler |
| 0xE1C7 | K-CAN Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xC5B8 | 0x4400 | 0x06 | 0x06 | 0x06 |
| 0xC5B7 | 0x04 | 0x01 | 0x05 | 0x06 |
| 0xC508 | 0x06 | 0x06 | 0x05 | 0x06 |
| 0xC509 | 0x06 | 0x06 | 0x05 | 0x06 |
| 0xC50A | 0x06 | 0x06 | 0x05 | 0x06 |
| 0xC50B | 0x06 | 0x06 | 0x05 | 0x06 |
| 0xC50C | 0x06 | 0x06 | 0x05 | 0x06 |
| 0xC540 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC541 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC542 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC543 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC544 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC545 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC546 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC547 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC548 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC549 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC54A | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC54B | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC54C | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC54D | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC54E | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC54F | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC568 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC569 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC5B6 | 0x04 | 0x07 | 0x05 | 0x08 |
| 0xA168 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xC589 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xE1C4 | 0x06 | 0x06 | 0x06 | 0x06 |
| 0xE1C7 | 0x06 | 0x06 | 0x06 | 0x06 |
| default | -- | -- | -- | -- |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Device Temperature | Grad C | H | signed char | - | 1 | 1 | 0 |
| 0x02 | Shadow DTC | 0-n | -- | 0xFFFF | ShadowDTC | - | - | - |
| 0x03 | Dummy Value | 1 | H | signed int | - | 1 | 1 | 0 |
| 0x04 | Exterior temperature | Grad C | - | signed char | - | 1 | 1 | 0 |
| 0x05 | Battery voltage | Volt | - | unsigned char | - | 1 | 1 | 0 |
| 0x4400 | Qualität | hex | - | unsigned char | - | - | - | - |
| 0x4401 | EAN Code High | hex | high | signed long | - | - | - | - |
| 0x4402 | EAN code Low | hex | high | signed long | - | - | - | - |
| 0x06 | UW x existiert für diesen DTC nicht | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Drive Temperature in °C(below 60°C 0x00) | Grad C | high | signed char | - | 1 | 1 | 0 |
| 0x08 | error ID of M10 Drive: 0xD0 CD decoder Hardware error; 0xE0-EF Internal drive Error; 0xA0 Slege error/home switch not operating; 0xA2 Spindle (turn table) motor error; 0xC0-C1 Loader switch error; 0xC5 Loader eject error; 0xC3-C4 Loader insert error | Hex | - | unsigned char | - | - | - | - |
| 0xFF | unbekannte Umweltbedingung | 1 | -- | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x10A0 | Ursache V850 RAM Fehler |
| 0x10A1 | Ursache E2P Checksum Fehler |
| 0x10A3 | Ursache keine Kommunikation mit der Tuner Hardware |
| 0x10A5 | Ursache keine IPC Kommunikation möglich |
| 0x10C0 | Ursache FBlock NWM nicht vorhanden |
| 0x10D0 | PDC interner Fehler |
| 0x10E0 | Software Fehler, CoreDumps vorhanden |
| 0x1120 | Laufwerk Hardware Fehler erweitert |
| 0x10B0 | ERR_CD_OVERTEMP |
| 0x10B1 | APPL_QUEUE_FULL |
| 0x10B2 | ERR_WATCHDOG |
| 0x10B3 | ERR_DISP_EQ_INVALID |
| 0x10B4 | ERR_DSP_INIT |
| 0x10B5 | ERR_DSP_RESET |
| 0x10B6 | ERR_KEY_PRESSED |
| 0x10B7 | ERR_KEY_MFL |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x1120 | 0x04 | 0x07 | 0x05 | 0x08 |
| 0x10B1 | 0x10 | 0x09 | - | - |
| 0x10B2 | 0x10 | 0x09 | - | - |
| 0x10B4 | 0x04 | 0x12 | 0x05 | - |
| 0x10B5 | 0x09 | - | - | - |
| 0x10B6 | 0x10 | 0x09 | - | - |
| 0x10B7 | 0x11 | - | - | - |
| 0x10B3 | - | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Device Temperature | Grad C | high | signed int | - | 1 | 1 | 0 |
| 0x02 | Shadow DTC | 0-n | -- | 0xFFFF | ShadowDTC | - | - | - |
| 0x03 | Dummy Value | 1 | H | signed int | - | 1 | 1 | 0 |
| 0x04 | Exterior Temperature | Grad C | high | signed char | - | 1 | 1 | 0 |
| 0x05 | Battery Voltage | Volt | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Drive Temperature in °C (below 60°C 0x00) | Grad C | high | signed char | - | 1 | 1 | 0 |
| 0x08 | error ID of M10 Drive: 0xD0 CD decoder Hardware error; 0xE0-EF Internal drive Error; 0xA0 Slege error/home switch not operating; 0xA2 Spindle (turn table) motor error; 0xC0-C1 Loader switch error; 0xC5 Loader eject error; 0xC3-C4 Loader insert error | Hex | - | unsigned char | - | - | - | - |
| 0x09 | Cause Error ID | - | -- | unsigned char | - | - | - | - |
| 0x10 | Param Error ID | - | - | unsigned char | - | - | - | - |
| 0x11 | ID: MFL-Key | - | - | unsigned char | - | - | - | - |
| 0x12 | interior temperature in °C | Grad C | high | signed char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned int | - | 1 | 1 | 0 |

### TWAVEBAND

| WERT | TEXT |
| --- | --- |
| 0x00 | FM |
| 0x01 | LW |
| 0x02 | MW |
| 0x03 | KW |
| 0x04 | WB |
| 0x05 | TRF |
| 0x06 | Nicht definiert |

### TAUXVERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Aux Verbindungen |
| 0x0001 | Aux In Audio |
| 0x0100 | Aux In RSE links |
| 0x0200 | Aux In RSE rechts |
| 0x0400 | Aux In RSE BMW Individual |
| 0xFFFF | Nicht definiert |

### TVERBINDUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Stummschaltung ein |
| 0x01 | Stummschaltung aus |
| 0xFF | Nicht definiert |

### TDEMUTESOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht benutzt(Default in Headunit) |
| 0x01 | Kopfhörer links |
| 0x02 | Kopfhörer rechts |
| 0x03 | Beide Kopfhörer |
| 0xFF | Nicht definiert |

### TSOURCEDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Head-Unit aus |
| 0x01 | Head-Unit ein |
| 0x02 | RSE Kopfhörer links aus |
| 0x03 | RSE Kopfhörer links ein |
| 0x04 | RSE Kopfhörer rechts aus |
| 0x05 | RSE Kopfhörer rechts ein |
| 0xFF | Nicht definiert |

### TVERBAUROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0x00000001 | Verbindung Head-Unit zum Diversity |
| 0x00000002 | Verbindung Diversity zu den Antennen |
| 0x00000040 | Lautsprecherausgangsleitungen (Stereo System) |
| 0x00000100 | RAD ON Leitung |
| 0xFFFFFFFF | Nicht definiert |

### THWVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Headunit Stufe 1 (Radio Business) |
| 0x00000001 | Headunit Stufe 2 (Radio Professional) |
| 0x00000002 | Headunit Stufe 3 (Navigation Business) |
| 0x00000004 | Headunit Stufe 4 (Navigation Professional) |
| 0x00000008 | RearSeatEntertainment Mid |
| 0x00000010 | RearSeatEntertainment High |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x00000100 | VideoSwitch Mid |
| 0x00000200 | VideoSwitch High |
| 0x00010000 | mit Funktion IBOC |
| 0x00020000 | mit Funktion DAB |
| 0x00040000 | mit Funktion Video-in |
| 0x00080000 | mit Funktion SDARS |
| 0x00100000 | mit Funktion Telefon |
| 0x00200000 | mit Funktion I-Speech |
| 0x00400000 | (Headunit Stufe 1 (Radio Business)) mit Funktion CD-Laufwerk |
| 0x00800000 | mit Funktion MSA |
| 0xFFFFFFF1 | --- Bitkombinationen Headunit Stufe 1 (Radio Business) --- |
| 0x00410000 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC und CD-Laufwerk |
| 0x00420000 | Headunit Stufe 1 (Radio Business) mit Funktion DAB und CD-Laufwerk |
| 0x00480000 | Headunit Stufe 1 (Radio Business) mit Funktion SDARS und CD-Laufwerk |
| 0x00490000 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x00C00000 | Headunit Stufe 1 (Radio Business) mit Funktion MSA und CD-Laufwerk |
| 0x00C20000 | Headunit Stufe 1 (Radio Business) mit Funktion MSA, DAB und CD-Laufwerk |
| 0xFFFFFFF2 | --- Bitkombinationen Headunit Stufe 2 (Radio Professional) --- |
| 0x00400001 | Headunit Stufe 2 (Radio Professional) mit Funktion CD-Laufwerk |
| 0x00010001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC |
| 0x00410001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und CD-Laufwerk |
| 0x00110001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und Telefon |
| 0x00510001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, Telefon und CD-Laufwerk |
| 0x00090001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und SDARS |
| 0x00490001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x002D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In und I-Speech |
| 0x006D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, I-Speech und CD-Laufwerk |
| 0x00590001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Telefon und CD-Laufwerk |
| 0x00500001 | Headunit Stufe 2 (Radio Professional) mit Funktion Telefon und CD-Laufwerk |
| 0x00240001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In und I-Speech |
| 0x00640001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, I-Speech und CD-Laufwerk |
| 0x00520001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB Telefon und CD-Laufwerk |
| 0x00360001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon und I-Speech |
| 0x00760001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x00020001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon und I-Speech |
| 0x00420001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x00800001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA und CD-Laufwerk |
| 0x00D00001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA, Telefon und CD-Laufwerk |
| 0x00D20001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA, DAB, Telefon und CD-Laufwerk |
| 0xFFFFFFF3 | --- Bitkombinationen Headunit Stufe 3 (Navigation Business) --- |
| 0x00340002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon und I-Speech |
| 0x00740002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x00360002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon und I-Speech |
| 0x00760002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x00090002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC und SDARS |
| 0x00490002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x002D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS und I-Speech |
| 0x006D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS, I-Speech und CD-Laufwerk |
| 0xFFFFFFF4 | --- Bitkombinationen Headunit Stufe 4 (Navigation Professional) --- |
| 0x00040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in |
| 0x00050004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in |
| 0x00060004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in |
| 0x000D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in |
| 0x01040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als Japan-Variante |
| 0x02040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als China/Korea-Variante |
| 0x00140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon |
| 0x00150004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in und Telefon |
| 0x00160004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in und Telefon |
| 0x001D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in und Telefon |
| 0x01140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als Japan-Variante |
| 0x02140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als China/Korea-Variante |
| 0xFFFFFFF5 | --- Bitkombinationen RearSeatEntertainment Mid --- |
| 0x00040008 | RearSeatEntertainment Mid mit Funktion Video-in |
| 0x01000008 | RearSeatEntertainment Mid als Japan-Variante |
| 0x02000008 | RearSeatEntertainment Mid als China/Korea-Variante |
| 0x01040008 | RearSeatEntertainment Mid mit Funktion Video-in als Japan-Variante |
| 0x02040008 | RearSeatEntertainment Mid mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFF6 | --- Bitkombinationen RearSeatEntertainment High --- |
| 0x00040010 | RearSeatEntertainment High mit Funktion Video-in |
| 0x01000010 | RearSeatEntertainment High als Japan-Variante |
| 0x02000010 | RearSeatEntertainment High als China/Korea-Variante |
| 0x01040010 | RearSeatEntertainment High mit Funktion Video-in als Japan-Variante |
| 0x02040010 | RearSeatEntertainment High mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFFF | Nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Harman Becker |
| 0x01 | Continental |
| 0x02 | Visteon |
| 0x03 | Alpine |
| 0x04 | Lear |
| 0x05 | Fuba |
| 0xFF | Nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Einzeilendisplay |
| 0x00000002 | Zweizeilendisplay |
| 0xFF | Nicht definiert |

### TTUNERRI

| WERT | TEXT |
| --- | --- |
| 0x00 | Ri OK |
| 0x01 | Ri not OK |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TKANALFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Außerhalb Toleranz |
| 0xFF | Nicht definiert |

### TAPPLICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprachverarbeitung |
| 0x01 | Navi Applikation |
| 0x02 | Navi Karte |
| 0x03 | Online Browser |
| 0x04 | AudioPlayer |
| 0x05 | Telefon Applikation |
| 0x06 | SDARS |
| 0xFF | Nicht definiert |

### TAPPLICATIONRUNNINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation nicht gestartet |
| 0x01 | Applikation gestartet |
| 0xFF | Nicht definiert |

### TAPPLICATIONACTIVATIONSTATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Deaktiviert durch Codierung |
| 0x02 | Aktiviert durch Codierung |
| 0x04 | Deaktiviert durch SWT |
| 0x05 | Deaktiviert durch Codierung und  Deaktiviert durch SWT |
| 0x06 | Aktiviert durch Codierung und Deaktiviert durch SWT |
| 0x08 | Aktiviert durch SWT |
| 0x0A | Aktiviert durch Codierung und Aktiviert durch SWT |
| 0x10 | Teilweise Aktiviert durch SWT |
| 0x12 | Aktiviert durch Codierung und Teilweise Aktiviert durch SWT |
| 0x20 | SWT Freischaltcode eingespielt |
| 0x22 | Aktiviert durch Codierung und SWT Freischaltcode eingespielt |
| 0xFF | Nicht definiert |

### TINSERTEDMEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Medium eingelegt |
| 0x01 | Medium Erkennung wird durchgeführt |
| 0x02 | CD Medium ist eingelegt |
| 0x03 | DVD Medium ist eingelegt |
| 0x04 | Flashspeicher Medium ist eingelegt |
| 0xFF | Nicht definiert |

### TKLANGZEICHEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Stoppen des aktiven Klangzeichens |
| 0x01 | ACC |
| 0x02 | CCG |
| 0x03 | DG |
| 0x05 | IMG_ON |
| 0x11 | PDC_Sample |
| 0xFF | Nicht definiert |

### TRADONLEAD

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0xFF | Nicht definiert |

### TTASTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Taste gedrückt |
| 0x01 | Auswurf CD |
| 0x02 | Es ist eine Taste gedrueckt |
| 0x04 | Suchlauf abwärts - Skip links |
| 0x05 | Suchlauf aufwärts - Skip rechts |
| 0x13 | MODE-Taste |
| 0x14 | RDS |
| 0x15 | AM |
| 0x16 | FM |
| 0x17 | TP |
| 0x18 | SC |
| 0x19 | Manual |
| 0x1A | Clock |
| 0x1B | Tone |
| 0x1C | Plus |
| 0x30 | Preset 1 |
| 0x31 | Preset 2 |
| 0x32 | Preset 3 |
| 0x33 | Preset 4 |
| 0x34 | Preset 5 |
| 0x35 | Preset 6 |
| 0xFF | Nicht definiert |

### TAUDIOKANAL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Kanäle |
| 0x00000001 | Links vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000002 | Rechts vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000004 | Center vorne (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000008 | Seite links (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000010 | Seite rechts (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000020 | Links hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000040 | Rechts hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000080 | Links vorne Bass (Erweiterter Kanal) |
| 0x00000100 | Rechts vorne Bass (Erweiterter Kanal) |
| 0x00000200 | Links hinten Bass (Erweiterter Kanal) |
| 0x00000400 | Rechts hinten Bass (Erweiterter Kanal) |
| 0x00000800 | Center hinten (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00001000 | Linker Kopfhörer links |
| 0x00002000 | Linker Kopfhörer rechts |
| 0x00004000 | Rechter Kopfhörer links |
| 0x00008000 | Rechter Kopfhörer rechts |
| 0x00010000 | Links vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00020000 | Rechts vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00040000 | Center vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00080000 | Seite links (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00100000 | Seite rechts (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00200000 | Links hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00400000 | Rechts hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00800000 | Center hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0xFFFFFFFF | Nicht definiert |

### TTELMUTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Tel-Mute nicht aktiv |
| 0x01 | Tel-Mute aktiv |
| 0xFF | Nicht definiert |

### TTUNERSUCHLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Absteigend |
| 0x01 | Aufsteigend |
| 0x02 | Stopp |
| 0xFF | Nicht definiert |

### TANTENNADIAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Antennendiagnose IO |
| 0x01 | Antennendiagnose NIO |
| 0xFF | Nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TANTENNE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | AM/FM Antenne |
| 0x00000002 | GPS Antenne |
| 0x00000004 | DAB L-BAND Antenne |
| 0x00000008 | DAB BAND III Antenne |
| 0x00000010 | VICS FM Antenne |
| 0x00000020 | VICS Beacon Antenne |
| 0x00000040 | TV1 Antenne |
| 0x00000080 | TV2 Antenne |
| 0x00000100 | TV3 Antenne |
| 0x00000200 | SDARS Antenne |
| 0x00000400 | Bluetooth Antenne |
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0xFF | Nicht definiert |

### TAUDIOSYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | STEREO |
| 0x01 | HIFI |
| 0x02 | TOP-HIFI |
| 0x03 | M Individual Sound |
| 0xFF | Nicht definiert |

### TTP

| WERT | TEXT |
| --- | --- |
| 0x00 | TP aus |
| 0x01 | TP ein |
| 0x02 | TP keine Änderung |
| 0xFF | Nicht definiert |

### TAF

| WERT | TEXT |
| --- | --- |
| 0x00 | AF aus |
| 0x01 | AF ein |
| 0x02 | AF keine Änderung |
| 0xFF | Nicht definiert |

### TRDS

| WERT | TEXT |
| --- | --- |
| 0x00 | RDS aus |
| 0x01 | RDS ein |
| 0x02 | RDS keine Änderung |
| 0xFF | Nicht definiert |

### TKEYNR

| WERT | TEXT |
| --- | --- |
| 0x00 | Profil 1 |
| 0x01 | Profil 2 |
| 0xFE | Alle |
| 0xFF | Alle Schlüssel |

### TANTSCAN

| WERT | TEXT |
| --- | --- |
| 0 | Diagnosemodus des Diversitymoduls beenden |
| 1 | Auf nächste FM Antenne schalten |
| 255 | Nicht definiert |

### TINITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | NIO initialisiert |

### TLANGUAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | codierte Sprache |
| 0x01 | Deutsch |
| 0x02 | Englisch (UK) |
| 0x03 | Englisch (US) |
| 0x04 | Spanisch |
| 0x05 | Italienisch |
| 0x06 | Französisch |
| 0x07 | Flämisch |
| 0x08 | Niederländisch |
| 0x09 | Arabisch |
| 0x0A | Chinesisch Traditionell |
| 0x0B | Chinesisch Simpel |
| 0x0C | Koreanisch |
| 0x0D | Japanisch |
| 0x0E | Russisch |
| 0xFF | Nicht definiert |

### TLUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFE | Lüfter läuft mit unbekannter Drehzahl |
| 0xFF | Nicht definiert |

### TAUDIOSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Entertainment |
| 0x05 | PDC |
| 0x06 | Gong |
| 0xFF | Nicht definiert |

### TSEARCHINGPROCESS

| WERT | TEXT |
| --- | --- |
| 0x00 | Suche nicht gestartet |
| 0x01 | Suche läuft |
| 0x02 | Suche beendet und bester Sender gefunden |
| 0x03 | Suche beendet und kein bester Sender gefunden |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TLAUFWERK

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Kein Laufwerk |
| 0x00000001 | Kassette |
| 0x00000002 | CD |
| 0x00000004 | DVD |
| 0x00000008 | MD |
| 0x00000010 | HDD |
| 0x00000012 | CD und HDD |
| 0x00000014 | DVD und HDD |
| 0x00000020 | USB |
| 0x00000022 | CD und USB |
| 0x00000024 | DVD und USB |
| 0x00000032 | CD, HDD und USB |
| 0x00000034 | DVD, HDD und USB |
| 0x00000040 | Flash Speicher |
| 0x00000042 | CD und Flash Speicher |
| 0x00000044 | DVD und Flash Speicher |
| 0x00000062 | CD, USB und Flash Speicher |
| 0x00000064 | DVD, USB und Flash Speicher |
| 0xFFFFFFFF | Nicht definiert |

### TPDCSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorderes Tonsignal |
| 0x02 | Hinteres Tonsignal |
| 0x03 | AUS |
| 0xFF | Nicht definiert |

### TENTSOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | nächste |
| 0x01 | FM |
| 0x02 | AM |
| 0x03 | internes CD Laufwerk |
| 0x04 | CDC |
| 0x05 | internes MD Laufwerk |
| 0x06 | WB (Weatherband) |
| 0x07 | SDARS |
| 0x08 | unbenutzt (vorher IBOC) |
| 0x09 | AUX IN intern oder extern |
| 0x0A | internes DVD Laufwerk |
| 0x0B | TV |
| 0x0C | unbenutzt (vorher VIDEOTXT) |
| 0x0D | Reserviert für AV-AUX IN |
| 0x0E | DAB |
| 0x0F | TRF |
| 0x10 | RSE-DVD |
| 0x11 | RSE-AVIN-LEFT |
| 0x12 | RSE-AVIN-RIGHT |
| 0x13 | USB extern 1 (USB Audio der MULF2 High/ComBox) |
| 0x14 | USB extern 2 (USB Telefon der MULF2 High/ComBox) |
| 0x15 | RSE analog (Audio) |
| 0x16 | MMC |
| 0x17 | Mono analog IN |
| 0x18 | USB intern |
| 0x19 | Entertainment server |
| 0xFF | Entertainmentquelle nicht definiert |

### TENTSOURCESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entertainmentquelle war nicht verfügbar |
| 0x01 | Entertainmentquelle war verfügbar |
| 0x02 | Entertainmentquelle wird gesucht |
| 0xFF | Nicht definiert |

### TANTENNA_NUMBER

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_ARGUMENT_NOT_IN_TABLE |
| 0x01 | ERROR_INVALID_ARGUMENT |
| 0x02 | ERROR_MISSING_ARGUMENT |
| 0x03 | ERROR_EXECUTION_LOCALROUTINE |
| 0x04 | ERROR_ARGUMENT_TOO_LONG |
| 0x05 | ERROR_INVALID_RESULT |
| 0xXY | ERROR_UNKNOWN |

### TFAULT_CODE

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_ARGUMENT_NOT_IN_TABLE |
| 0x01 | ERROR_INVALID_ARGUMENT |
| 0x02 | ERROR_MISSING_ARGUMENT |
| 0x03 | ERROR_EXECUTION_LOCALROUTINE |
| 0x04 | ERROR_ARGUMENT_TOO_LONG |
| 0x05 | ERROR_INVALID_RESULT |
| 0xXY | ERROR_UNKNOWN |

### TSCHALTMODI

| NAME | MASKE | TEXT |
| --- | --- | --- |
| ON | 0x01 | Radio anschalten |
| OFF | 0x00 | Radio ausschalten |
| EIN | 0x01 | Radio anschalten |
| AUS | 0x00 | Radio ausschalten |
| XY | 0xXY | Nicht definiert |

### TPROCESSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Prozess nicht gestartet |
| 0x01 | Prozess läuft |
| 0x02 | Prozess beendet ohne Fehler |
| 0x03 | Prozess beendet mit Fehlern |
| 0x04 | Prozess unterbrochen |
| 0xFF | Nicht definiert |

### TRADIOEINAUSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Radio aus |
| 0x01 | Radio ein |
| 0xFF | Nicht definiert |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0xFFFFFFFF | Nicht definiert |

### TXDEBUG

| WERT | TEXT |
| --- | --- |
| 0xFF | nicht definiert |
| 0x01 | XDBG_OFF |
| 0x02 | XDBG_ON |
| 0x03 | XDBG_DEFAULT |

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0xFF | 01 | 63 | 02 | 000C | 01 | 00 | 01 | 01 | 00 |  | 01 | 01 | 00 |  | Telefonnummern |
