# JBBF87.prg

## General

|  |  |
| --- | --- |
| File | JBBF87.prg |
| Type | PRG |
| Jobs | 91 |
| Tables | 33 |
| Origin | BMW EI-61 Sefik Uzun |
| Revision | 9.000 |
| Author | Lear Entwicklung Arseni Martínez, Lear Entwicklung Carme Tàpias, Lear Entwicklung Israel Revert |
| ECU Comment | SGBD of JBBFE for E8x E9x (C-Sample) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | JBBF |  |  |
| ORIGIN | string | BMW EI-61 Sefik Uzun |  |  |
| REVISION | string | 9.000 |  |  |
| AUTHOR | string | Lear Entwicklung Arseni Martínez, Lear Entwicklung Carme Tàpias, Lear Entwicklung Israel Revert |  |  |
| COMMENT | string | SGBD of JBBFE for E8x E9x (C-Sample) |  |  |
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

### READ_ADDRCODINGDEFAULT

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $21 ReadDataByLocalIdentifier $7D RecordLocalId

_No arguments._

### CLEAR_ADDRCODINGDEFAULT

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $3B WriteDataByLocalIdentifier $7D RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | soll 0 sein |

### CLEAR_DTC_MEMORY

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $3B WriteDataByLocalIdentifier $7E RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | soll 0 sein |

### AIF_LESEN_READECU

Auslesen des Anwender Informations Feldes KWP2000: $1A ReadECUIdentification $86 CurrentUIFDataTable Modus  : Default

_No arguments._

### READ_ENERGY_SAVING_MODE

Energy-Saving-Mode auslesen KWP 2000: $22 ReadDataByCommonIdentifier KWP 2000: $100A EnergySavingMode

_No arguments._

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

### STATUS_SENSE_INPUTS

Auslesen der Stati von den analogen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Sense Inputs $01 ReportCurrentState

_No arguments._

### STATUS_INTERNAL_VARIABLES

Auslesen der Stati von den Internen Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables $01 ReportCurrentState

_No arguments._

### STEUERN_DIGITAL_INPUT

Digitale Input direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Input $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table DigitalInputNrTexte DINNR TEXT |
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
| ART_WERT | string | "nein"-> ADC register Wert "ja"  -> (PH) Wert table DigitalArgument TEXT |

### STEUERN_ANALOG_OUTPUT

Analoge Output direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $04 Analoge Output $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table AnalogOutputNrTexte AOUTNR NAME |
| WERT | string | table AnalogOutputNrTexte WERT |

### STEUERN_SENSE_INPUT

Diagnostic Input direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $05 Digitale Input $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table SenseInputNrTexte SINNR NAME |
| WERT | string | table SenseInputNrTexte WERT |

### STEUERN_BEENDEN

Kontrolle an JBBFE zurueckgeben KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Input $02 Digitale Output $03 Analoge Input $04 Analoge Output $05 Sense Input $00 ReturnControToECU

_No arguments._

### _FS_LESEN_LEAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |
| F_TYPE | char | gewaehlter Option |

### KOMPRESSOR_PARAMETERS_WRITE

Schreiben die kompressor parameters KWP2000: $3B WriteDataByLocalIdentifier $7C RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| KOMP_GROSS_ANF_MIN | char |  |
| KOMP_GROSS_ANF_MAX | char |  |
| KOMP_GROSS_STR_MIN | char |  |
| KOMP_GROSS_STR_MAX | char |  |
| KOMP_KLEIN_ANF_MIN | char |  |
| KOMP_KLEIN_ANF_MAX | char |  |
| KOMP_KLEIN_STR_MIN | char |  |
| KOMP_KLEIN_STR_MAX | char |  |

### KOMPRESSOR_PARAMETERS_READ

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $21 ReadDataByLocalIdentifier $7C RecordLocalId

_No arguments._

### FUELTANK_PARAMETERS_RESET

Schreiben die fullstand parameters KWP2000: $3B WriteDataByLocalIdentifier $7B RecordLocalId

_No arguments._

### FUELTANK_PARAMETERS_READ

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $21 ReadDataByLocalIdentifier $7B RecordLocalId

_No arguments._

### READ_L4969_REGISTERS

Schreiben die fullstand parameters KWP2000: $21 ReadDataByLocalIdentifier $7A RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | ON or OFF |

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_1

EnergieDatenSpeicher Teil 1 -Einschlafverhinderer- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE1 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_2

EnergieDatenSpeicher Teil 2 -Wecker- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE2 commonProjectSpecific

_No arguments._

### STEUERN_HISTORIENSPEICHER_LOESCHEN

EnergieDatenSpeicher Teil 1 und TEIL 2 loeschen KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE0 commonProjectSpecific

_No arguments._

### STATUS_VERSION_GATEWAYMODULES

Lesen der Versionsnummer der Gateway software, gateway tabelle, software version KWP2000: $21 ReadDataByLocalIdentifier $6F RecordLocalId Modus  : Default

_No arguments._

### SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

### STEUERN_FENSTERHEBER_EINLERNEN

Init apinch through diagnosis KWP2000: $22   ReadDataByCommonIdentifier $0001 project specific. Init apinch

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | 0, 1 oder 2. FAH, BFH oder beide table InitApinch AUSWAHL_FH MODE_TEXT |

### STATUS_FENSTERHEBER

Init apinch through diagnosis KWP2000: $22   ReadDataByCommonIdentifier $0004 project specific. Status apinch

_No arguments._

### STEUERN_FENSTERHEBER_DENORMIEREN

Init apinch through diagnosis KWP2000: $22   ReadDataByCommonIdentifier $0005 project specific. Init apinch

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | 0, 1 oder 2. FAH, BFH oder beide table UnnormApinch AUSWAHL_FH MODE_TEXT |

### STEUERN_FENSTERHEBER_HINTEN

Rear windows direkte ansteuern Ohne EKS, direkte Ausgang Steuerung Mit EKS, Steuerung ändernde Eingang und durch Application KWP2000: $30 InputOutputControlByLocalIdentifier $02 Digitale Ouput $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL_FH | string | 0: BFH, 1: FAH, 2: Beide Beide  Default table SteuernRearWindows AUSWAHL_FH |
| WERT | string | 0: Aus, 1: Auf, 2: Zu Aus Default table SteuernRearWindows WERT |

### READ_VARIANT

Lesen der Versionsnummer der Gateway software, gateway tabelle, software version KWP2000: $21 ReadDataByLocalIdentifier $6E RecordLocalId Modus  : Default

_No arguments._

### _JBBFE_CONFIGURATION

Schreiben der SystemSupplierECUHardwareVersionNumber KWP2000: $3B WriteDataByLocalIdentifier $7A RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| VARIANT_BYTE | string | Variant 0 = Low 1 1 = Low 2 2 = High 1 3 = High 2 4 = High 3 5 = High 4 |
| AIF_DATUM | string | Datum der SG-Programmierung in der Form TTMMJJ |
| AIF_ZB_NR | string | BMW/Rover Zusammenbaunummer |
| SERIENUMMER | string | serial number |

### STATUS_FH_LOG

Ursachen der letzten Unnormalisierung des Fensters KWP2000: $22   ReadDataByCommonIdentifier $0008 project specific. Status Fensters

_No arguments._

### _CHECK_DTC_MEMO

Lesen der Versionsnummer der Gateway software, gateway tabelle, software version KWP2000: $21 ReadDataByLocalIdentifier $6D RecordLocalId Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| POSITION | char | Variant Position in EE_Failures array Byte 0 Code Byte 1 Counter Byte 2 Symptom, Readiness, Memory, Active and Warning Byte 3 Logistic Counter Bytes 4 & 5 Milage Bytes 6 & 7 Geschwindigkeit Byte 8 & 9 Batteryspannung |

### FS_LOESCHEN_SELEKTIV

Fehlerspeicher loeschen Selektiv KWP2000: $14 ClearDiagnosticInformation Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WERT | string | Fehlerspeicher zu loeschen z.b. 0xAAAA |

### _LEAR_SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $FA LearPowerDown Modus  : Default

_No arguments._

### STEUERN_WASCHDUESE_AUSSENSPIEGEL

Schreiben die Waschduese und Aussenspiegel parameter KWP2000: $3B WriteDataByLocalIdentifier $79 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTRO_JWH_TIMER | unsigned int | Control the Jet Washer and Mirror Heater for the time: CONTRO_JWH_TIMER * 10ms. |

### STATUS_FH_POSITION

Lesen der FH position KWP2000: $21 ReadDataByLocalIdentifier $79 RecordLocalId

_No arguments._

### STEUERN_WASSERVENTIL

Schreiben die Waschduese und Aussenspiegel parameter KWP2000: $3B WriteDataByLocalIdentifier $78 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_WV_TIMER | unsigned int | Control the WasserVentil for the time: CONTROL_WV_TIMER * 10ms. |

### STEUERN_ZWP

Schreiben die Waschduese und Aussenspiegel parameter KWP2000: $3B WriteDataByLocalIdentifier $77 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_ZWP_TIMER | unsigned int | Control the Additional Water Pump (ZWP) for the time: CONTROL_ZWP_TIMER * 10ms. |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR_MISSING_BYTE1 |
| 0x02 | ERROR_VARIANT_NOT_KNOWN |
| 0x03 | ERROR_MISSING_VARIANT_BYTE |
| 0x04 | ERROR_PROGRAMMING_DATE_LENGTH |
| 0x05 | ERROR_MISSING_PROGRAMMING_DATE |
| 0x06 | ERROR_ZB_NR_LENGTH |
| 0x07 | ERROR_MISSING_ZB_NR |
| 0x08 | ERROR_MISSING_L4969_REGISTER |
| 0x09 | ERROR_MISSING_DESIRED_WINDOW |
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
| 0x9C5E | DRUCK SENSOR |
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
| 0xA6D2 | WASSERVENTIL |
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
| 0xA6DD | SONNENROLLO_LADERAUM |
| 0xA6DE | AUSSENSPIEGEL_HEIZUNG_LINKS |
| 0xA6DF | AUSSENSPIEGEL_HEIZUNG_RECHTS |
| 0xA6E0 | SITZHEIZUNG_FAHRER |
| 0xA6E1 | SITZHEIZUNG_BEIFAHRER |
| 0xA6E2 | ZV_ANTRIEB_HECKKLAPPE |
| 0xA6E3 | ZV_ANTRIEB_HECKSCHEIBE |
| 0xA6E4 | SENSOR_TANK_LINKS |
| 0xA6E5 | SENSOR_TANK_RECHTS |
| 0xA6E6 | SCHALTER_FH_BEIFAHRER_VORNE |
| 0xA6E7 | Energiesparmode aktiv |
| 0xA728 | SCHALTER_FH_BEIFAHRER_HINTEN |
| 0xA729 | SCHALTER_FH_FAHRER_HINTEN |
| 0xA72A | HALLSENSOR1_FH_FA_HINTEN |
| 0xA72B | HALLSENSOR2_FH_FA_HINTEN |
| 0xA72C | HALLSENSOR1_FH_BF_HINTEN |
| 0xA72D | HALLSENSOR2_FH_BF_HINTEN |
| 0xC904 | K_CAN_LOW_LEITUNG |
| 0xC905 | K_CAN_HIGH_LEITUNG |
| 0xC907 | K_CAN_KOMMUNIKATION |
| 0xC90B | PT_CAN_KOMMUNIKATION |
| 0xC910 | K_CAN_ID246_STATUSKLIMA_TIMEOUT |
| 0xC911 | K_CAN_ID246_KOMPRESSORVENTIL_UNGUELT |
| 0xC912 | K_CAN_ID246_HECKSCHHEIZUNG_UNGUELT |
| 0xC913 | K_CAN_ID246_ZUSWASSERPUMP_UNGUELT |
| 0xC914 | PT_CAN_ID2A6_BEDIENUNG_WISCHER_TIMEOUT |
| 0xC915 | PT_CAN_ID1B6_WASSERVENTIL_TIMEOUT |
| 0xC916 | PT_CAN_ID1B6_WASSERV_UNGUELT |
| 0xC918 | K_CAN_ID1E7_SITZHEIZUNG_FA_UNGUELT |
| 0xC91A | K_CAN_ID1E7_SITZHEIZUNG_BF_UNGUELT |
| 0xC91B | PT_CAN_IDB5_DREHMOMENT_EGS_TIMEOUT |
| 0xA731 | BI-Stabiles Relais |
| 0xA6E8 | ZV_WIEDERHOLSPERRE |
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
| 0x01 | Geschwindigkeit | km/h | - | unsigned int | - | 1 | 10 | 0 |
| 0x02 | BatterieSpannung | volt | - | unsigned int | - | 6675 | 240640 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC801 | ERR_SWITCH_OFF_SVAUS |
| 0xC802 | ERR_SWITCH_OFF_WAKEUP |
| 0xC803 | ERR_SWITCH_OFF_NOT_SLEEP |
| 0xC804 | ERR_MODULE_RESET |
| 0xC805 | ERR_KL30GF_POWERDOWN |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xC805 | 0x04 | 0x03 | - | - |
| default | 0x01 | 0x02 | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Geschwindigkeit | km/h | - | unsigned int | - | 1 | 10 | 0 |
| 0x02 | BatterieSpannung | volt | - | unsigned int | - | 6675 | 240640 | 0 |
| 0x03 | NM-Address | nm_id | - | unsigned char | - | 1 | 1 | 0 |
| 0x04 | RelativeZeit | s | - | signed long | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### ENERGYSAVING

| E_MODE | NAME | TEXT |
| --- | --- | --- |
| 0x00 | ENERGY_MODE_AUS | Energysparmode aus |
| 0x01 | ENERGY_MODE_PRODUCTION | Produktionsmode ein |
| 0x02 | ENERGY_MODE_SHIPMENT | Transportmode ein |
| 0x04 | ENERGY_MODE_REPAIR_SHOP | Werkstattmode ein |
| 0x08 | ERROR | falscher Eingabewert |

### DIGITALINPUTNRTEXTE

| DINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | HECKKLAPPE_TASTER | Schalter Heckklappe aussen   .PIN 60, PORT P2.11 | Keine Betätigung: 0, Taster Gedrückt: 1 |
| 0x01 | HECKSCHEIBE_TASTER | schalter Hesckscheibe aussen .PIN 61, PORT P2.12 | Keine Betätigung: 0, Taster Gedrückt: 1 |
| 0x02 | HECKKLAPPE_KONTAKT | Kontakt Heckklappe           .PIN 62, PORT P2.13 | Geschlossen: 0, Offen: 1 |
| 0x03 | HECKSCHEIBE_KONTAKT | Kontakt Heckscheibe         .PIN 63, PORT P2.14 | Geschlossen: 0, Offen: 1 |
| 0x04 | FRONTWISCHER_RSK | Parkposition Frontwischer  .ShiftRegisterSwitch.1 | FrontWischer nicht im RSK: 0, FrontWischer im RSK: 1 |
| 0x05 | HECKWISCHER_RSK | Parkposition Heckwischer   .ShiftRegisterSwitch.2 | HeckWischer nicht im RSK: 0, HeckWischer im RSK: 1 |
| 0x06 | DSC_BEFEHL | Sensor DSC schalter          .ShiftRegisterSwitch.3 | Taster Gedrückt: 0,Keine Betätigung: 1 |
| 0x07 | KUEHLMITTELSTAND | Sensor Kuehlmittelstand       .ShiftRegisterSwitch.5 | Zu niedrigem Füllstand: 0, Normales Füllstand: 1 |
| 0x08 | WASCHWASSERSTAND | Sensor Waschwasser         .ShiftRegisterSwitch.6 | Zu niedrigem Füllstand: 0, Normales Füllstand: 1 |
| 0x09 | HANDBREMSE_KONTAKT | Eingang Schalter Handbremse     .ShiftRegisterSwitch.7 | Gelöst: 0, Angezogen: 1 |
| 0xFF | UNKNOWN | unbekannte Digital Input |  |

### DIGITALOUTPUTNRTEXTE

| DOUTNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | AUCSENSOR_ENABLE | AUC Sensor aktiv                    .PIN 1,PORT P6.0 | DISABLE: 0, ENABLE: 1 |
| 0x01 | EEPROM_ENABLE | EEprom freigegeben                        .PIN 2,PORT P6.1 | ENABLE: 0, DISABLE: 1 |
| 0x02 | KL30SW_ENABLE | KL30SW freigegeben                        .PIN 3,PORT P6.2 | DISABLE: 0, ENABLE: 1 |
| 0x03 | 5V_SENSOR_ENABLE | 5V SENSOR freigegeben                     .PIN 4,PORT P6.3 | DISABLE: 0, ENABLE: 1 |
| 0x04 | SHIFTREGISTER_CONTROL | Shift Register Control               .PIN 5,PORT P6.4 | OFF: 0, ON: 1 |
| 0x05 | SHIFTREGISTER_CLOCK | Shift Register Clock                 .PIN 6,PORT P6.5 | LOW: 0, HIGH: 1 |
| 0x06 | FRONTWASCHERPUMPE | Waschpumpe vorne                    .PIN 10,PORT P8.1 | AUS: 0, EIN: 1 |
| 0x07 | HECKWASCHERPUMPE | Waschpumpe hinten                     .PIN 12,PORT P8.3 | AUS: 0, EIN: 1 |
| 0x08 | SONNENROLLO_AUSGANG | Ausgang Sonnenrollo | AUS: 0, Von EIN zu AUS: 5, NACH OBEN: 6, HERUNTER: 9 |
| 0x09 | SONNENROLLO_LOWTREIBER1 | Sonnenrollo Mosfet LowSide  1           .PIN 13,PORT P8.4 | OFF: 0, ON: 1 |
| 0x0A | SONNENROLLO_HIGHTREIBER1 | Sonnenrollo Mosfet HighSide 1           .PIN 14,PORT P8.5 | OFF: 0, ON: 1 |
| 0x0B | SONNENROLLO_LOWTREIBER2 | Sonnenrollo Mosfet LowSide  2           .PIN 15,PORT P8.6 | OFF: 0, ON: 1 |
| 0x0C | SONNENROLLO_HIGHTREIBER2 | Sonnenrollo Mosfet HigSide  2           .PIN 16,PORT P8.7 | OFF: 0, ON: 1 |
| 0x0D | TANKSENSOREN_ENABLE | Tank                            .PIN 24,PORT P7.5 | DISABLE: 0, ENABLE: 1 |
| 0x0E | SERIALCOM_VR_OUT | Datenausgang zu Spannungsregler        .PIN 52,PORT P2.5 | OFF: 0, ON: 1 |
| 0x0F | SERIALCOM_VR_CLOCK | Ausgang Clock Spannungsregler       .PIN 53,PORT P2.6 | LOW: 0, HIGH: 1 |
| 0x10 | CONTACTWAKE_IN_ENABLE | WakeUp-Kontakt freigegeben                 .PIN 57,PORT P2.8 | DISABLE: 0, ENABLE: 1 |
| 0x11 | WASCHDUESENHEIZUNG_AUßENSPIEGEL_AUSGANG | Ausgang Waschduesenheizung | AUS: 0, Rechts EIN: 1, Links EIN: 2, Beides EIN: 3 |
| 0x12 | WASCHDUESENHEIZUNG_AUßENSPIEGEL_RECHTS | Waschduesenheizung rechts              .PIN 70,PORT P3.5 | OFF: 0, ON: 1 |
| 0x13 | WASCHDUESENHEIZUNG_AUßENSPIEGEL_LINKS | Waschduesenheizung links               .PIN 73,PORT P3.6 | OFF: 0, ON: 1 |
| 0x14 | PTWAKE_OUT | PT CAN Wake UP                       .PIN 74,PORT P3.7 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x15 | SPI_OUTPUT | SPI Data Out                         .PIN 76,PORT P3.9 | LOW: 0, HIGH: 1 |
| 0x16 | TX_DIAG | Diagnostic TX                        .PIN 77,PORT P3.10 | LOW: 0, HIGH: 1 |
| 0x17 | SPI_CLOCK | SPI Data Clock                       .PIN 80,PORT P3.13 | LOW: 0, HIGH: 1 |
| 0x18 | ZUSATZWASSERPUMPE | Zusatzwasserpumpe                .PIN 86,PORT P4.1 | AUS: 0, EIN: 1 |
| 0x19 | FH_CHIPSELECT | el. Fensterheber Chip Select              .PIN 87,PORT P4.2 | DISABLE: 0, ENABLE: 1 |
| 0x1A | HIGHSPEEDCAN_ENABLE | High Speed CAN Enable                .PIN 88,PORT P4.3 | ENABLE: 0, DISABLE: 1 |
| 0x1B | HIGHSPEEDCAN_TX | High Speed CAN TX                    .PIN 91,PORT P4.6 | LOW: 0, HIGH: 1 |
| 0x1C | LOWSPEEDCAN_TX | Low Speed CAN TX                     .PIN 92,PORT P4.7 | LOW: 0, HIGH: 1 |
| 0x1D | FH_BFTH_AUSGANG | Ausgang el. Fensterheber Beifahrer hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x1E | FH_BFTH_AUF | OPENRELAIS el. Fensterheber Beifahrer hinten  .PIN 118,PORT P1L.0 | OFF: 0, ON: 1 |
| 0x1F | FH_BFTH_ZU | CLOSERELAIS el. Fensterheber Beifahrer hinten .PIN 119,PORT P1L.1 | OFF: 0, ON: 1 |
| 0x20 | FH_FATH_AUSGANG | Ausgang el. Fensterheber Fahrer hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x21 | FH_FATH_AUF | OPENRELAIS el. Fensterheber Fahrer hinten     .PIN 120,PORT P1L.2 | OFF: 0, ON: 1 |
| 0x22 | FH_FATH_ZU | CLOSERELAIS el. Fensterheber Fahrer hinten    .PIN 121,PORT P1L.3 | OFF: 0, ON: 1 |
| 0x23 | FH_BFTH_AUSGANG & FH_FATH_AUSGANG | Ausgang el. Fensterheber Fahrer und Beifahrer hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x24 | HECKWISCHER | Relais Heckwischer                      .PIN 122,PORT P1L.4 | AUS: 0, EIN: 1 |
| 0x25 | FRONTWISCHER_AUSGANG | Ausgang Frontwischer | AUS: 0, Stufe1: 1,Stufe2: 3 |
| 0x26 | FRONTWISCHER | Relais Frontwischer                     .PIN 123,PORT P1L.5 | OFF: 0, ON: 1 |
| 0x27 | FRONTWISCHER_GESCHW | Speed-Relais Frontwischer               .PIN 124,PORT P1L.6 | OFF: 0, ON: 1 |
| 0x28 | SRA | Relais ScheinwerferReinigungsAnlage (SRA)                .PIN 125,PORT P1L.7 | OFF: 0, ON: 1 |
| 0x29 | ZV_AUSGANG | Ausgang Zentralverriegelung | Aus: 0, Entriegeln: 2, Selektiv Entriegeln: 6, Verriegeln: 12, Sichern: 13, Entsichern: 14 |
| 0x2A | ZV_SICHERN_RELAIS | Relais Sicherung Zentralverriegelung           .PIN 128,PORT P1H.0 | OFF: 0, ON: 1 |
| 0x2B | ZV_ENTRIEGELN_RELAIS | Relais Entriegelung Zentralverriegelung           .PIN 129,PORT P1H.1 | OFF: 0, ON: 1 |
| 0x2C | ZV_VERRIEGELN_RELAIS | Relais Verriegelung Zentralverriegelung             .PIN 130,PORT P1H.2 | OFF: 0, ON: 1 |
| 0x2D | ZV_SELEKTIV_VERRIEGELN_RELAIS | Relais Verriegelung Fahrer Zentralverriegelung       .PIN 131,PORT P1H.3 | OFF: 0, ON: 1 |
| 0x2E | HECKKLAPPE | Relais Heckklappe                       .PIN 132,PORT P1H.4 | AUS: 0, EIN: 1 |
| 0x2F | HECKSCHEIBE | Relais Heckscheibe                     .PIN 133,PORT P1H.5 | AUS: 0, EIN: 1 |
| 0x30 | HECKSCHEIBENHEIZUNG | Relais Heckscheibenheizung              .PIN 134,PORT P1H.6 | AUS: 0, EIN: 1 |
| 0x31 | BISTABILRELAIS_ON | BI-Stabiles Relais an                   .PIN 135,PORT P1H.7 | AUS: 0, EIN: 1 |
| 0x32 | BISTABILRELAIS_OFF | BI-Stabiles Relais aus                  .PIN 85 ,PORT P4.0 | AUS: 0, EIN: 1 |
| 0xFF | UNKNOWN | unbekannte Digital Output |   |

### ANALOGINPUTNRTEXTE

| AINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | KOMPRESSORVENTIL_STROM | StromSensor Kompressor          .PIN 27,PORT P5.0 | 0...0x3FF(1023) |
| 0x01 | DRUCKSENSOR | Drucksensor                    .PIN 28,PORT P5.1 | Gültig:0x052(82)(0 Bar)...0x3AD(941)(35 Bar): (PH)=(((HEX)-0.4*(1023/5))*35)/859  [bar] |
| 0x02 | FH_BFT_SCHALTER | Taster el. Fensterheber Beifahrer       .PIN 29,PORT P5.2 | 143(0x08F)......346(0x15A) : DOWNAUTO(2), 347(0x15B)....571(0x23B) : DOWNMANUAL(1), 572(0x23C)....756(0x2F4) : UPAUTO(4), 757(0x2F5)....951(0x3B7) : UPMANUAL(3), 952(0x3B8)....1023(0x3FF): OFF(0) |
| 0x03 | FH_FATH_SCHALTER | Taster el. Fensterheber Fahrer hinten     .PIN 30,PORT P5.3 | 143(0x08F)......346(0x15A) : DOWNAUTO(2), 347(0x15B)....571(0x23B) : DOWNMANUAL(1), 572(0x23C)....756(0x2F4) : UPAUTO(4), 757(0x2F5)....951(0x3B7) : UPMANUAL(3), 952(0x3B8)....1023(0x3FF): OFF(0) |
| 0x04 | FH_BFTH_SCHALTER | Taster el. Fensterheber Beifahrer hinten  .PIN 31,PORT P5.4 | 143(0x08F)......346(0x15A) : DOWNAUTO(2), 347(0x15B)....571(0x23B) : DOWNMANUAL(1), 572(0x23C)....756(0x2F4) : UPAUTO(4), 757(0x2F5)....951(0x3B7) : UPMANUAL(3), 952(0x3B8)....1023(0x3FF): OFF(0) |
| 0x05 | TANK_FA_FUELLSTAND | Tankgeber links                   .PIN 32,PORT P5.5 | 0...0x3FF(1023) |
| 0x06 | TANK_BF_FUELLSTAND | Tankgeber rechts                .PIN 33,PORT P5.6 | 0...0x3FF(1023) |
| 0x07 | FH_BFTH_STROM | Strom el. Fensterheber Beifahrer hinten .PIN 34,PORT P5.7 | 0(0 A)...0x3FF(1023)(39 A): (PH)=((HEX)*39)/1024  [A] |
| 0x08 | FH_FATH_STROM | Strom el. Fensterheber Fahrer hinten    .PIN 35,PORT P5.8 | 0(0 A)...0x3FF(1023)(39 A): (PH)=((HEX)*39)/1024  [A] |
| 0x09 | FONDSCHICHTUNGSENSOR | Fondschichtungssensor aktivieren       .PIN 36,PORT P5.9 | Gültig:0x133(307)(0 %)...0x2B8(696)(100 %): (PH)=(((HEX)-1.5*(1023/5))*100)/389  [%] |
| 0x0A | SONNENROLLO_STROM | Sonnenrollo Strom Sensor           .PIN 39,PORT P5.10 | 0...0x3FF(1023) |
| 0x0B | BATTERIE_SPANNUNG | Batteriespannung                    .PIN 40,PORT P5.11 | 0(0 V)...0x3FF(1023)(28.40 V) (HEX);Vbat=(HEX)*100/3605  [V] |
| 0xFF | UNKNOWN | unbekannte Analog Output |  |

### ANALOGOUTPUTNRTEXTE

| AOUTNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | KOMPRESSORVENTIL_PWM | Spannung Kompressorventil (PWM) | 0(0 %)...0x061B(1563)(100 %) |
| 0x01 | WASSERVENTIL | Wasserventil                        .PIN 20,PORT P7.1 | OFF: 0, ON: 1 |
| 0x02 | WASSERVENTIL_PWM | Spannung Wasserventil (PWM). Voraussetzungen muessen erfuellt sein | 0(0 %)...0x0168(360)(100 %) |
| 0x03 | SITZHEIZUNG_FA_PWM | Spannung Sitzheizung Fahrer (PWM) | OFF: 25000, STATE1: 20000, STATE2: 12500, STATE3: 7500 |
| 0x04 | SITZHEIZUNG_BF_PWM | Spannung Sitzheizung Beifahrer (PWM) | OFF: 25000, STATE1: 20000, STATE2: 12500, STATE3: 7500 |
| 0xFF | UNKNOWN | unbekannte Analog Output |  |

### SENSEINPUTNRTEXTE

| SINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | FIVEVOLTS_SENSOR_DIAG | Diag 5V-Sensor                  .PIN 41,PORT P5.12 | 0...0x3FF(1023) |
| 0x01 | WASCHDUSENHEIZUNG_AUßENSPIEGEL_DIAG | Diag Waschduesenheizung Analog           .PIN 42,PORT P5.13 | 0...0x3FF(1023) |
| 0x02 | WASCHERPUMPE_DIAG | Diag Wasserpumpe Analog                 .PIN 43,PORT P5.14 | 0...0x3FF(1023) |
| 0x03 | WASSERVENTIL_DIAG | Diag Wasserventil Analog       .PIN 44,PORT P5.15 | 0...0x3FF(1023) |
| 0x04 | ZUSATZWASSERPUMPE_DIAG | Diag Zusatzwasserpumpe             .ShiftReg1Diagnostic.0 | Fehler: 0, In Ordnung: 1 |
| 0x05 | FRONTWISCHER_DIAG | Diag Schalter Frontwischer                .ShiftReg1Diagnostic.2 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x06 | FRONTWISCHER_GESCHW_DIAG | Diag Raendelrad Frontwischer          .ShiftReg1Diagnostic.3 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x07 | FH_FATH_AUF_DIAG | Diag el. Fensterheber Fahrer hinten OFFEN      .ShiftReg1Diagnostic.4 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x08 | FH_FATH_ZU_DIAG | Diag el. Fensterheber Fahrer hinten GESCHLOSSEN     .ShiftReg1Diagnostic.5 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x09 | FH_BFTH_AUF_DIAG | Diag el. Fensterheber Beifahrer hinten OFFEN   .ShiftReg1Diagnostic.6 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x0A | FH_BFTH_ZU_DIAG | Diag el. Fensterheber Beifahrer hinten GESCHLOSSEN  .ShiftReg1Diagnostic.7 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x0B | HECKWISCHER_DIAG | Diag Heckwischer                        .ShiftReg2Diagnostic.0 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x0C | SRA_DIAG | Diag ScheinwerferReinigungsAnlage                   .ShiftReg2Diagnostic.1 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x0D | ZV_VERRIEGELN_RELAIS_DIAG | Diag Relais Zentralveriegelung verriegeln        .ShiftReg2Diagnostic.2 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x0E | ZV_ENTRIEGELN_RELAIS_DIAG | Diag Relais Zentralveriegelung entriegeln      .ShiftReg2Diagnostic.3 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x0F | ZV_SICHERN_RELAIS_DIAG | Diag Relais Zentralveriegelung sichern      .ShiftReg2Diagnostic.4 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x10 | HECKSCHEIBENHEIZUNG_DIAG | Diag Heckscheibenheizung                 .ShiftReg2Diagnostic.5 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x11 | ZV_SELEKTIV_ENTRIEGELN_RELAY_DIAG | Diag Relais Zentralveriegelung verriegeln Fahrer  .ShiftReg2Diagnostic.6 | Relais Abgeschaltet: 0, Relais Eingeschaltet: 1 |
| 0x12 | SITZHEIZUNG_BF_DIAG | Diag Sitzheizung Beifahrer            .PIN 47,PORT P2.0 | Ausgang Nicht Aktiv: 0, Ausgang Aktiv: 1 |
| 0x13 | SITZHEIZUNG_FA_DIAG | Diag Sitzheizung Fahrer               .PIN 59,PORT P2.10 | Ausgang Nicht Aktiv: 0, Ausgang Aktiv: 1 |
| 0x14 | HECKKLAPPE_DIAG | Diag Heckklappe                         .PIN 65,PORT P3.0 | In Ordnung: 0, Fehler: 1 |
| 0x15 | HECKSCHEIBE_DIAG | Diag Heckscheibe                       .PIN 66,PORT P3.1 | In Ordnung: 0, Fehler: 1 |
| 0xFF | UNKNOWN | unbekannte Sense Input |  |

### FUNKTIONALEADRESSE

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xE9 | K-CAN | Karosserie-CAN Steuergeräte |
| 0xEA | PT-CAN | Powertrain-CAN Steuergeräte |
| 0xEB | SI | Sicherheits-BUS Steuergeräte |
| 0xEC | MOST | MOST-BUS Steuergeräte |
| 0xED | BOS | Bedarfsorientierter Service |
| 0xED | CBS | Bedarfsorientierter Service |
| 0xEE | PERSONAL | Personalisierung |
| 0xEF | ALL | alle Steuergeräte |

### INITAPINCH

| NR | AUSWAHL_FH | MODE_TEXT |
| --- | --- | --- |
| 0x01 | FAH | FahrerTür Hinten |
| 0x02 | BFH | BeifahrerTür Hinten |
| 0x03 | BEIDE | Beide |
| 0x01 | 0 | FahrerTür Hinten |
| 0x02 | 1 | BeifahrerTür Hinten |
| 0x03 | 2 | Beide |
| 0xXY | -- | unbekannter Diagnose-Mode |

### LEARNINGRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | JA |
| 0x00 | NEIN |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### UNNORMAPINCH

| NR | AUSWAHL_FH | MODE_TEXT |
| --- | --- | --- |
| 0x05 | FAH | FahrerTür Hinten |
| 0x06 | BFH | BeifahrerTür Hinten |
| 0x07 | BEIDE | Beide |
| 0x05 | 0 | FahrerTür Hinten |
| 0x06 | 1 | BeifahrerTür Hinten |
| 0x07 | 2 | Beide |
| 0xXY | -- | unbekannter Diagnose-Mode |

### STEUERNREARWINDOWS

| SRWNR | AUSWAHL_FH | MODE_TEXT | WERT |
| --- | --- | --- | --- |
| 0x1D | BFH | BeifahrerTür Hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x20 | FAH | FahrerTür Hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x23 | BEIDE | Beide | AUS: 0, AUF: 1, ZU: 2 |
| 0x1D | 0 | BeifahrerTür Hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x20 | 1 | FahrerTür Hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x23 | 2 | Beide | AUS: 0, AUF: 1, ZU: 2 |
| 0x1D | 0x00 | BeifahrerTür Hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x20 | 0x01 | FahrerTür Hinten | AUS: 0, AUF: 1, ZU: 2 |
| 0x23 | 0x02 | Beide | AUS: 0, AUF: 1, ZU: 2 |
| 0xFF | -- | unbekannter Diagnose-Mode |  |

### VARIANT_TABLE

| VARIANT_NUMBER | VARIANT_BYTE | VARIANT_NAME |
| --- | --- | --- |
| 0x00 | LOW1 | LOW1   ohne WI/WA Heck, ohne FH, ohne Sonnenrollo |
| 0x01 | LOW2 | LOW2   mit WI/WA Heck, ohne FH, ohne Sonnenrollo |
| 0x02 | HIGH1 | HIGH1  ohne WI/WA Heck, mit FH, ohne Sonnenrollo |
| 0x03 | HIGH2 | HIGH2  mit WI/WA Heck, mit FH, ohne Sonnenrollo |
| 0x04 | HIGH3 | HIGH3  ohne WI/WA Heck, mit FH, mit Sonnenrollo |
| 0x05 | HIGH4 | HIGH4  mit WI/WA Heck, mit FH, mit Sonnenrollo/Laderaumabdeckung |
| 0xXY | -- | -- |
