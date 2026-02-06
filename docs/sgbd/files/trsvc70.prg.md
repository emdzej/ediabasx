# trsvc70.prg

## General

|  |  |
| --- | --- |
| File | trsvc70.prg |
| Type | PRG |
| Jobs | 298 |
| Tables | 19 |
| Origin | BMW EI-612 Zeller Armin |
| Revision | 7.000 |
| Author | IAV EF-F6 Jevgeni.Boyko.JB, ASL RD Vaclav.Mocek, ASL RD Ravi.Up |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TRSVC  |  |  |
| ORIGIN | string | BMW EI-612 Zeller Armin |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | IAV EF-F6 Jevgeni.Boyko.JB, ASL RD Vaclav.Mocek, ASL RD Ravi.Up |  |  |
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

### ENABLE_FS_REAR_VIEW_MODE

Enable Full Screen Rear View KWP2000: $31 RoutineControl $49 $00 Modus  : Default

_No arguments._

### DISABLE_REAR_VIEW_MODE

Disable Full Screen Rear View KWP2000: $32 RoutineControl $49 $00 Modus  : Default

_No arguments._

### ENABLE_TOP_VIEW_MODE

Enable Top View KWP2000: $31 RoutineControl $47 $00 Modus  : Default

_No arguments._

### DISABLE_TOP_VIEW_MODE

Disable Top View KWP2000: $32 RoutineControl $47 $00 Modus  : Default

_No arguments._

### ENABLE_SIDE_VIEW_MODE

Enable Side View KWP2000: $31 RoutineControl $48 $00 Modus  : Default

_No arguments._

### DISABLE_SIDE_VIEW_MODE

Disable Side View KWP2000: $32 RoutineControl $48 $00 Modus  : Default

_No arguments._

### ENABLE_FS_TOP_VIEW_LEFT_OVERLAY_CEL

Enable Full Screen TVL Overlay CEL Manf KWP2000: $31 RoutineControl $4B $00 $00 Modus  : Default

_No arguments._

### ENABLE_FS_TOP_VIEW_RIGHT_CEL

Enable Full Screen TVR CEL Manf KWP2000: $31 RoutineControl $4A $00 $01 Modus  : Default

_No arguments._

### START_AUTOADR_KAM

New camera learning KWP2000: $31 RoutineControl $21 $00 $00 Modus  : Default

_No arguments._

### STOP_AUTOADR_KAM

Stop new camera learning KWP2000: $32 RoutineControl $21 $00 $00 Modus  : Default

_No arguments._

### STATUS_AUTOADR_KAM

Status of camera learning KWP2000: $33 RoutineControl $21 $00 $00 Modus  : Default

_No arguments._

### ABWEICHUNG_TVL_KAM

Deviation in mm of mounting position on the vehicle KWP2000: $22 RoutineControl $d3 $7a Modus  : Default

_No arguments._

### ABWEICHUNG_TVR_KAM

Deviation in mm of the mounting position on the vehicle KWP2000: $22 RoutineControl $d3 $7b Modus  : Default

_No arguments._

### ABWEICHUNG_RV_KAM

Deviation in mm of mounting position on the vehicle KWP2000: $22 RoutineControl $d3 $7D Modus  : Default

_No arguments._

### SET_TV_RIGHT_CAM_POS

Set Top view right camera positions KWP2000: $2E $C1 $60 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_POS_DATA | binary | default E70M Cam positions 1byte lsb(rot_x1_deg_64) 2byte msb(rot_x1_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### SET_TV_LEFT_CAM_POS

Set Top view left camera positions KWP2000: $2E $C1 $61 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_POS_DATA | binary | 1byte lsb(rot_x1_deg_64) 2byte msb(rot_x1_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### STATUS_TV_RIGHT_CAM_POS

Set Top view right camera positions KWP2000: $22 $C1 $60 Modus  : Default

_No arguments._

### STATUS_RV_CAM_POS

Set Rear view cam positions KWP2000: $22 $C1 $62 Modus  : Default

_No arguments._

### STATUS_TV_LEFT_CAM_POS

Set Top view left camera positions KWP2000: $22 $C1 $61 Modus  : Default

_No arguments._

### SET_RV_CAM_POS

Set Rear view camera positions KWP2000: $2E $C1 $62 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_POS_DATA | binary | 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_y_deg_64) 4byte msb(rot_y_deg_64) 5byte lsb(rot_z_deg_64) 6byte msb(rot_z_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### ENABLE_OUTPUT_VIDEO_TST_PATRN_NTSC

Enable NTSC Encoder Colour bar KWP2000: $31 RoutineControl $45 $00 $06 $00 $00 $00 $00 $00 $00 $00 Modus  : Default

_No arguments._

### ENABLE_OUTPUT_VIDEO_TST_PATRN_DSP

Enable DSP Encoder Colour bar KWP2000: $31 RoutineControl $45 $00 $00 $00 $00 $00 $00 $00 $00 $00 Modus  : Default

_No arguments._

### ENABLE_POWER_TO_DSP_CAM

Enbale POWER for DSP and Cameras KWP2000: $31 RoutineControl $46 $00 $01 Modus  : Default

_No arguments._

### DISABLE_POWER_TO_DSP_CAM

Disbale POWER for DSP and Cameras KWP2000: $31 RoutineControl $46 $00 $00 Modus  : Default

_No arguments._

### ENABLE_FS_TOP_VIEW_RIGHT_OVERLAY_CEL

Enable Full Screen TVR Overlay CEL Manf KWP2000: $31 RoutineControl $4A $00 $00 Modus  : Default

_No arguments._

### DISABLE_OUTPUT_TEST_PATTERN

Disable Colour bar KWP2000: $32 RoutineControl $45 $00 Modus  : Default

_No arguments._

### DISABLE_FS_TOP_VIEW_LEFT_CEL

Disable Full Screen TVL CEL Manf KWP2000: $32 RoutineControl $4B $00 Modus  : Default

_No arguments._

### DISABLE_FS_TOP_VIEW_RIGHT_CEL

Diable Full Screen TVR CEL Manf KWP2000: $32 RoutineControl $4A $00 Modus  : Default

_No arguments._

### ENABLE_FS_TOP_VIEW_LEFT_CEL

Enable Full Screen TVL CEL Manf KWP2000: $31 RoutineControl $4B $00 $01 Modus  : Default

_No arguments._

### DSP_APP_SUPPLIER_VER

DSP Application Version KWP2000: $22 ReadDataByCommonIdentifier $c1 $02 Modus  : Default

_No arguments._

### DSP_PBL_A_SUPPLIER_VER

DSP PBL A Version KWP2000: $22 ReadDataByCommonIdentifier $c1 $03 Modus  : Default

_No arguments._

### DSP_PBL_B_SUPPLIER_VER

DSP PBL B Version KWP2000: $22 ReadDataByCommonIdentifier $c1 $04 Modus  : Default

_No arguments._

### DSP_PRE_PBL_SUPPLIER_VER

DSP Pre PBL Version KWP2000: $22 ReadDataByCommonIdentifier $c1 $05 Modus  : Default

_No arguments._

### WINKELVERDREHUNG_TVR_KAM

Deviation of the mounting position on the vehicle KWP2000: $22 RoutineControl $d3 $78 Modus  : Default

_No arguments._

### WINKELVERDREHUNG_RV_KAM

Deviation of the mounting position on the vehicle KWP2000: $22 RoutineControl $d3 $70 Modus  : Default

_No arguments._

### WINKELVERDREHUNG_TVL_KAM

Deviation of the mounting position on the vehicle KWP2000: $22 RoutineControl $d3 $79 Modus  : Default

_No arguments._

### HOST_APP_SUPPLIER_VER

HOST Application Version KWP2000: $22 ReadDataByCommonIdentifier $c1 $01 Modus  : Default

_No arguments._

### READ_ECU_VAR

ECU variant KWP2000: $22 ReadDataByCommonIdentifier $c1 $00 Modus  : Default

_No arguments._

### SET_STEUERN_TVC_KALIB_ABWEICH

Set service calibration deviation KWP2000: $2E $D3 $B2 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KAMERA | unsigned int | camera (0=TV_L 1=TV_R 2=RV) |
| REFERENZBILD | unsigned int | 0=Kalibrieren abbrechen ohne Wertspeicherung 1=Kalibrieren starten 2=Kalibrieren beenden und Werte speichern |
| ABWEICHUNG_X | int | abweichung von der X-Achse |
| ABWEICHUNG_Y | int | abweichung von der Y-Achse |
| ABWEICHUNG_Z | int | abweichung von der Z-Achse |

### SET_STEUERN_TVC_KALIB_VER

Set service calibration rotation KWP2000: $2E $D3 $B3 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KAMERA | unsigned int | camera (0=TV_L 1=TV_R 2=RV) |
| REFERENZBILD | unsigned int | 0=Kalibrieren abbrechen ohne Wertspeicherung 1=Kalibrieren starten 2=Kalibrieren beenden und Werte speichern |
| ROTATION_X | int | Rotation of the X-axis |
| ROTATION_Y | int | Rotation of the Y-axis |
| ROTATION_Z | int | Rotation of the Z-axis |

### STATUS_SRV_RV_VIRT_CAM

Set Rear view right cam positions KWP2000: $22 $C1 $81 Modus  : Default

_No arguments._

### STATUS_SRV_TVR_VIRT_CAM

Set Rear view right cam positions KWP2000: $22 $C1 $7F Modus  : Default

_No arguments._

### STATUS_SRV_TVL_VIRT_CAM

Set Rear view right cam positions KWP2000: $22 $C1 $80 Modus  : Default

_No arguments._

### SET_SRV_CALIB_RV_VIRT_CAM

Set service calibration TVL virtual camera KWP2000: $2E $C1 $81 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_VIRT_DATA | binary | default values == 0x00 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(hfov_deg_64) 8byte msb(hfov_deg_64) 9byte lsb(disp_aspect) 10byte msb(disp_aspect) 11byte (flipx) 12byte (flipy) 13byte (antialias) 14byte (auto_bright) |

### SET_SRV_CALIB_TVR_VIRT_CAM

Set service calibration TVR virtual camera KWP2000: $2E $C1 $7F Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_VIRT_DATA | binary | default values == 0x00 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(hfov_deg_64) 8byte msb(hfov_deg_64) 9byte lsb(disp_aspect) 10byte msb(disp_aspect) 11byte (flipx) 12byte (flipy) 13byte (antialias) 14byte (auto_bright) |

### SET_SRV_CALIB_TVL_VIRT_CAM

Set service calibration TVL virtual camera KWP2000: $2E $C1 $80 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_VIRT_DATA | binary | default values == 0x00 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(hfov_deg_64) 8byte msb(hfov_deg_64) 9byte lsb(disp_aspect) 10byte msb(disp_aspect) 11byte (flipx) 12byte (flipy) 13byte (antialias) 14byte (auto_bright) |

### START_KALIB_MONTAGE

Start calibration with selected target KWP2000: $31 RoutineControl $20 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TARGET_TYPE | unsigned char | 0x0 : Valeo RV calibration 0x1 : Magna RV calibration |
| CAMERA_CHOICE | unsigned char | 0x0 : ALL cameras sequentially 0x1 : Left Top View Camera 0x2 : Right Top View Camera 0x3 : Rear View Camera |

### STOP_KALIB_MONTAGE

Stop calibration with selected target KWP2000: $32 RoutineControl $20 $00 $00 Modus  : Default

_No arguments._

### STATUS_KALIB_MONTAGE

Status of calibration KWP2000: $33 RoutineControl $20 $00 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TARGET_TYPE | char | 0x0 : Valeo RV calibration 0x1 : Magna RV calibration |

### ECU_TEMP

ECU temerature KWP2000: $22 ReadDataByCommonIdentifier $c1 $06 Modus  : Default

_No arguments._

### TVR_CAM_INFO

TV right camera information KWP2000: $22 ReadDataByCommonIdentifier $c1 $07 Modus  : Default

_No arguments._

### TVL_CAM_INFO

TV left camera information KWP2000: $22 ReadDataByCommonIdentifier $c1 $08 Modus  : Default

_No arguments._

### SVR_CAM_INFO

SV right camera information KWP2000: $22 ReadDataByCommonIdentifier $c1 $09 Modus  : Default

_No arguments._

### SVL_CAM_INFO

SV left camera information KWP2000: $22 ReadDataByCommonIdentifier $c1 $0a Modus  : Default

_No arguments._

### RV_CAM_INFO

Rear view camera information KWP2000: $22 ReadDataByCommonIdentifier $c1 $07 Modus  : Default

_No arguments._

### STATUS_TVR_CAM

TVR cam status KWP2000: $22 ReadDataByCommonIdentifier $c1 $0c Modus  : Default

_No arguments._

### STATUS_TVL_CAM

TVL cam status KWP2000: $22 ReadDataByCommonIdentifier $c1 $0D Modus  : Default

_No arguments._

### STATUS_SVR_CAM

SVR cam status KWP2000: $22 ReadDataByCommonIdentifier $c1 $0e Modus  : Default

_No arguments._

### STATUS_SVL_CAM

SVL cam status KWP2000: $22 ReadDataByCommonIdentifier $c1 $0f Modus  : Default

_No arguments._

### STATUS_RV_CAM

RV cam status KWP2000: $22 ReadDataByCommonIdentifier $c1 $10 Modus  : Default

_No arguments._

### STATUS_TVR_DISP_CALIB

Status TV Right display calibration KWP2000: $22 $C1 $28 Modus  : Default

_No arguments._

### STATUS_TVL_DISP_CALIB

Status TV left display calibration KWP2000: $22 $C1 $29 Modus  : Default

_No arguments._

### STATUS_UV_REAR_DISP_CALIB

Status U view Rear display calibration KWP2000: $22 $C1 $2a Modus  : Default

_No arguments._

### STATUS_FS_REAR_DISP_CALIB

Status FS rear display calibration KWP2000: $22 $C1 $2B Modus  : Default

_No arguments._

### STATUS_BMW_FSR_DISP_CALIB

Status BMW production calibration FS rear display calibration KWP2000: $22 $C1 $2C Modus  : Default

_No arguments._

### STATUS_TVR_CAM_CAL_DATA

Read TV right camera clibration data KWP2000: $22 ReadDataByCommonIdentifier $c1 $16 Modus  : Default

_No arguments._

### STATUS_TVL_CAM_CAL_DATA

Read TV left camera clibration data KWP2000: $22 ReadDataByCommonIdentifier $c1 $17 Modus  : Default

_No arguments._

### STATUS_RV_CAM_CAL_DATA

Read RV camera clibration data KWP2000: $22 ReadDataByCommonIdentifier $c1 $18 Modus  : Default

_No arguments._

### STATUS_CALIB_OVL_GRID

Status of calibration overlay gris data KWP2000: $22 ReadDataByCommonIdentifier $c1 $2E Modus  : Default

_No arguments._

### STATUS_BMW_FSR_GRID_LAYOUT

Status of BMW assembly calibration FS rear grid layout KWP2000: $22 ReadDataByCommonIdentifier $c1 $68 Modus  : Default

_No arguments._

### STATUS_RV_CAL_TARGET_POS

Read RV calibration target position KWP2000: $22 $C1 $71 Modus  : Default

_No arguments._

### STATUS_TVR_CAL_TARGET_POS

Read TV Right calibration target position KWP2000: $22 $C1 $69 Modus  : Default

_No arguments._

### STATUS_TVL_CAL_TARGET_POS

Read TV Left calibration target position KWP2000: $22 $C1 $70 Modus  : Default

_No arguments._

### STATUS_BMW_RV_CAL_SOLV_PARAMS

Read BMW RV assembly calibration solver parameters KWP2000: $22 $C1 $76 Modus  : Default

_No arguments._

### STATUS_MAXIMALEBLOCKLAENGE

Status Maximum block length KWP2000: $22 $25 $06 Modus  : Default

_No arguments._

### STATUS_PROGRAMMING_STATE

Read programming state KWP2000: $31 $0a Modus  : Default

_No arguments._

### STATUS_BUS_NACHRICHTEN

Status of CAN Speed KWP2000: $22 $D2 $40 Modus  : Default

_No arguments._

### STATUS_BUS_IN_SV_EIN

Status of Side view camera active or not KWP2000: $22 $D3 $B5 Modus  : Default

_No arguments._

### STATUS_HECKKLAPPE

Read Boot status KWP2000: $22 $D3 $7c Modus  : Default

_No arguments._

### STATUS_AUSSTATTUNG

Status of RV, TV, SV modes avalibale KWP2000: $22 $D3 $7F Modus  : Default

_No arguments._

### STATUS_STROMAUFNAHME_KAMERA_TSV

Status of current consumption of TV and SV KWP2000: $22 $D3 $80 Modus  : Default

_No arguments._

### STATUS_INITIALISIERUNG_TV

Status of TVL, TVR camera init KWP2000: $22 $D3 $81 Modus  : Default

_No arguments._

### STATUS_BUS_VORDERTUEREN

Status of front doors KWP2000: $22 $D3 $83 Modus  : Default

_No arguments._

### STATUS_BUS_NACHRICHTEN_D392

Status information about CAN Signal TV, RV requested KWP2000: $22 $D3 $92 Modus  : Default

_No arguments._

### STATUS_BUS_NACHRICHTEN_D395

Status CAN Signals regarding the mirror fold-/unfold status KWP2000: $22 $D3 $95 Modus  : Default

_No arguments._

### STATUS_KALIBRIERUNG_TV

Top view calibration status KWP2000: $22 $D3 $9C Modus  : Default

_No arguments._

### STATUS_KALIBRIERUNG_RV

Top view calibration status KWP2000: $22 $D3 $9D Modus  : Default

_No arguments._

### STATUS_STROMAUFNAHME_KAMERA_RV

Rear view camera current consumption KWP2000: $22 $D3 $9E Modus  : Default

_No arguments._

### STATUS_INITIALISIERUNG_RV

Status of RV camera init KWP2000: $22 $D3 $9F Modus  : Default

_No arguments._

### STATUS_KLEMMEN_15N_WERT_DAD2

Status_klemmen (15N wert) KWP2000: $22 $DA $D2 Modus  : Default

_No arguments._

### STATUS_KLEMMEN_15N_EIN

Status of KL15N KWP2000: $22 $DA $FE Modus  : Default

_No arguments._

### STATUS_KLEMMEN_15N_WERT_DB2D

CAN signal b_ST_KL_15_b KWP2000: $22 $DB $2D Modus  : Default

_No arguments._

### STATUS_CODING_DATA

Read the coding data block KWP2000: $22 RoutineControl $30 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_ID_MSB | char | 0x30 is valid block_id_msb |
| BLOCK_ID_LSB | char | 0x00,0x01,0x05,0x06,0x07,0x08,0x09 are valid block_id_lsb |

### SET_BUS_IN_SV_EIN

Enable the SV play mode KWP2000: $2E $D3 $B5 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PLAY_MODE_ACTIVATE | unsigned char | 0x0 : Inactive 0x1 : Activate |

### SET_STEUERN_TESTBILD_KAMERA

Set KWP2000: $2E $D3 $B4 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECT | char | Camera selection, TV, SV, RV 0 - TVL 1 - TVR 2 - RV 3 - SVL 4 - SVR |
| OVL_REQUEST | char | 1 - OVL active request 0 - OVL disabled |
| TIME_OUT_OPTION | char | 0x00 - Option OFF, Inactive play mode 0xFF - ON, with out timer |

### STATUS_CAMERA_SOILING

Status of TV,SV,RV camera soiling KWP2000: $22 ReadDataByCommonIdentifier $c1 $30 Modus  : Default

_No arguments._

### STATUS_BMW_TV_CAL_SOLV_PARAMS

Read BMW TV assembly calibration solver parameters KWP2000: $22 $C1 $53 Modus  : Default

_No arguments._

### STATUS_BMW_TVL_GRID_LAYOUT

Status of BMW assembly calibration Top view left grid layout KWP2000: $22 ReadDataByCommonIdentifier $c1 $55 Modus  : Default

_No arguments._

### STATUS_BMW_TVR_GRID_LAYOUT

Status of BMW assembly calibration Top view right grid layout KWP2000: $22 ReadDataByCommonIdentifier $c1 $57 Modus  : Default

_No arguments._

### STATUS_CALIBRATION_PERFORMED

Status of calibration performed or not KWP2000: $22 ReadDataByCommonIdentifier $c1 $59 Modus  : Default

_No arguments._

### STATUS_VIDEO_FREEZ_WDT

Video freez watchdog status KWP2000: $22 ReadDataByCommonIdentifier $c1 $67 Modus  : Default

_No arguments._

### START_STEUREN_SIGNALAUSGABE

Start test picture and colour bar with time out KWP2000: $31 RoutineControl $22 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_DATA | binary | 1st BYTE - Signal type 0x01 - Real picture 0x02 - Test picture 0x03 - End output 0x04  to 0x09 - Activate Colour bar 2nd BYTE - output_lsb 0x0 3rd BYTE - output_msb 0x00 or 0x01 4th BYTE - time_out less than 0x1E |

### STOP_STEUREN_SIGNALAUSGABE

Stop test picture and colour bar KWP2000: $32 RoutineControl $22 $00 Modus  : Default

_No arguments._

### START_TEST_VIDEOAUSGANG

Start KWP2000: $31 RoutineControl $23 $00 Modus  : Default

_No arguments._

### STOP_TEST_VIDEOAUSGANG

Stop KWP2000: $32 RoutineControl $23 $00 Modus  : Default

_No arguments._

### STATUS_TEST_VIDEOAUSGANG

Status KWP2000: $33 RoutineControl $23 $00 Modus  : Default

_No arguments._

### SET_TVR_CAM_CAL_DATA

Set TV right camera clibration data KWP2000: $2E ReadDataByCommonIdentifier $c1 $16 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1 byte: fisheyeAmt 2 byte: cxoffs_pix_3rds 3 byte: cyoffs_pix_3rds 4 byte: cam_aspect_offs 5 byte: lsb(hfov_deg_64ths) 6 byte: msb(hfov_deg_64ths) 7 byte: opt_axis_x_offs_pix_3rds 8 byte: opt_axis_y_offs_pix_3rds 9 byte: opt_axis_z_rot_deg_64ths |

### SET_TVL_CAM_CAL_DATA

Set TV left camera clibration data KWP2000: $2E ReadDataByCommonIdentifier $c1 $17 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1 byte: fisheyeAmt 2 byte: cxoffs_pix_3rds 3 byte: cyoffs_pix_3rds 4 byte: cam_aspect_offs 5 byte: lsb(hfov_deg_64ths) 6 byte: msb(hfov_deg_64ths) 7 byte: opt_axis_x_offs_pix_3rds 8 byte: opt_axis_y_offs_pix_3rds 9 byte: opt_axis_z_rot_deg_64ths |

### SET_RV_CAM_CAL_DATA

Set Rear View camera clibration data KWP2000: $2E ReadDataByCommonIdentifier $c1 $18 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1 byte: fisheyeAmt 2 byte: cxoffs_pix_3rds 3 byte: cyoffs_pix_3rds 4 byte: cam_aspect_offs 5 byte: lsb(hfov_deg_64ths) 6 byte: msb(hfov_deg_64ths) 7 byte: opt_axis_x_offs_pix_3rds 8 byte: opt_axis_y_offs_pix_3rds 9 byte: opt_axis_z_rot_deg_64ths |

### SET_TVR_DISP_CALIB

Set TV Right display calibration KWP2000: $2E $C1 $28 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### SET_TVL_DISP_CALIB

Set TV left display calibration KWP2000: $2E $C1 $29 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### SET_UV_REAR_DISP_CALIB

Set U-view rear display calibration KWP2000: $2E $C1 $2a Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### SET_FSR_DISP_CALIB

Status Full screen rear display calibration KWP2000: $2E $C1 $2b Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### SET_BMW_FSR_DISP_CALIB

Status BMW production calibration Full Screen Rear display calibration KWP2000: $2E $C1 $2c Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### STATUS_ENERGIESPARMODU

Status of energy saving mode KWP2000: $22 ReadDataByCommonIdentifier $10 $0A Modus  : Default

_No arguments._

### SET_BUS_NACHRICHTEN_D392

Set CAN Signal TV, RV request KWP2000: $2E $D3 $92 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIG_TV_REQUEST | unsigned char | 0 - OFF 1 - ON |
| SIG_RV_REQUEST | unsigned char | 0 - OFF 1 - ON |

### STATUS_HEIZUNG_RFK

status of heating element rv cam KWP2000: $22 $D3 $A0 Modus  : Default

_No arguments._

### SET_HEIZUNG_RFK

set of heating element rv cam KWP2000: $2E $D3 $A0 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RVH_REQUEST | char | 0 - Off request 1 - ON request |

### STATUS_NUM_SUB_BUS_MEMBERS

status of Number of SubbusMembers and serial numbers KWP2000: $22 $16 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ID | unsigned char | 0x00 : Number of sub bus members 0x01 : Serial number of Rear view camera 0x02 : Serial number of Top view left camera 0x03 : Serial number of Top view right camera 0x04 : Serial number of Side view left camera 0x05 : Serial number of Side view right camera |

### SET_CAMERA_SOILING

Status of TV,SV,RV camera soiling KWP2000: $2E ReadDataByCommonIdentifier $c1 $30 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_PARMERTERS | binary | 1 byte: tvl_percent_soiling 2 byte: tvr_percent_soiling 3 byte: svl_percent_soiling 4 byte: svr_percent_soiling 5 byte: rv_percent_soiling |

### STATUS_ECU_DSP_PERFORMNCE

status of ECU DSP processor performance KWP2000: $22 $C1 $32 Modus  : Default

_No arguments._

### STATUS_CEL_SERIAL_NUM

Read CEL serial number KWP2000: $22 $C1 $33 Modus  : Default

_No arguments._

### SET_CEL_SERIAL_NUM

Set CEL serial number KWP2000: $2E $C1 $33 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CEL_SN_NUMBER | binary | OKAY |

### STATUS_TEST_PT_LED

Read Test point LED KWP2000: $22 $C1 $38 Modus  : Default

_No arguments._

### STATUS_LIN_VSYNC

Read Lin Vsync KWP2000: $22 $C1 $40 Modus  : Default

_No arguments._

### SET_LIN_VSYNC

Set Lin Vsync KWP2000: $2E $C1 $40 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LIN_VSYNC | char | lin Vsync |

### SET_BMW_TV_CAL_SOLV_PARAMS

Set BMW TV assembly calibration solver parameters KWP2000: $2E $C1 $53 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_SOLVER_PARAMS structure(47 bytes) If no input, then it will write default values |

### SET_BMW_TVL_GRID_LAYOUT

Set BMW assembly calibration Top view left grid layout KWP2000: $2e ReadDataByCommonIdentifier $c1 $55 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_GRID_DETAILS structure(10 bytes) 1 byte: line_width 1 byte: num_hlines 1 byte: num_vlines 1 byte: detect_split_num_cols 1 byte: detect_split_num_rows 1 byte: left_margin 1 byte: right_margin 1 byte: top_margin 1 byte: bot_margin 1 byte: grid_colour |

### SET_BMW_TVR_GRID_LAYOUT

Set BMW assembly calibration Top view right grid layout KWP2000: $2e ReadDataByCommonIdentifier $c1 $57 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_GRID_DETAILS structure(10 bytes) 1 byte: line_width 1 byte: num_hlines 1 byte: num_vlines 1 byte: detect_split_num_cols 1 byte: detect_split_num_rows 1 byte: left_margin 1 byte: right_margin 1 byte: top_margin 1 byte: bot_margin 1 byte: grid_colour |

### SET_BMW_FSR_GRID_LAYOUT

Set BMW assembly calibration Full screen rear grid layout KWP2000: $2e ReadDataByCommonIdentifier $c1 $68 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_GRID_DETAILS structure(10 bytes) 1 byte: line_width 1 byte: num_hlines 1 byte: num_vlines 1 byte: detect_split_num_cols 1 byte: detect_split_num_rows 1 byte: left_margin 1 byte: right_margin 1 byte: top_margin 1 byte: bot_margin 1 byte: grid_colour |

### SET_CALIBRATION_PERFORMED

Set of calibration performed KWP2000: $2E ReadDataByCommonIdentifier $c1 $59 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CALIB_PERFMED | unsigned char | set |

### STATUS_NVM_CFG_INF

Read NVM CFG information KWP2000: $22 $C1 $5a Modus  : Default

_No arguments._

### STATUS_CRC_CNT_CHECK

Read CRC & Alive Counter Check on CAN KWP2000: $22 $C1 $66 Modus  : Default

_No arguments._

### SET_CRC_CNT_CHECK

SET CRC & Alive Counter Check on CAN KWP2000: $2E $C1 $66 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COUNTER_VAL | char | OKAY |

### SET_TVR_CAL_TRGT_POS

Set TV right calibration target position KWP2000: $2E $C1 $69 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | default E70M Cam positions 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### SET_TVL_CAL_TRGT_POS

Set TV left calibration target position KWP2000: $2E $C1 $70 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### SET_REAR_CAL_TRGT_POS

Set Rear calibration target position KWP2000: $2E $C1 $71 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### STATUS_CAL_ERR_POWER

Read calibration error power KWP2000: $22 $C1 $77 Modus  : Default

_No arguments._

### SET_CAL_ERR_POWER

SET calibration error power KWP2000: $2E $C1 $77 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CALIB_ERR_PWR | unsigned char | calib error power |

### SET_BMW_REAR_CAL_SOLV_PARAMS

Set BMW Rear assembly calibration solver parameters KWP2000: $2E $C1 $76 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_SOLVER_PARAMS structure(47 bytes) If no input, then it will write default values |

### STATUS_VEH_WEEL_ARCH_HEIGHT

Read Vehicle wheel arch heights KWP2000: $22 $C1 $78 Modus  : Default

_No arguments._

### SET_VEH_WEEL_ARCH_HEIGHT

Set Vehicle wheel arch heights KWP2000: $2E $C1 $78 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1byte lsb(front_right_mm) 2byte msb(front_right_mm) 3byte lsb(front_left_mm) 4byte msb(front_left_mm) 5byte lsb(rear_right_mm) 6byte msb(rear_right_mm) 7byte lsb(rear_left_mm) 8byte msb(rear_left_mm) |

### STATUS_DRT_DET_VEH_SPD_THLD

Read Dirt detection vehicle speed thresholds KWP2000: $22 $C1 $7a Modus  : Default

_No arguments._

### SET_DRT_DET_VEH_SPD_THLD

Set Dirt detection vehicle speed thresholds KWP2000: $2E $C1 $7a Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1byte lower_thresh_kmph 2byte upper_thresh_kmph |

### STATUS_CAM_FAILED_PXL_PRCNT

Status of TV,SV,RV Camera failed pixels percentage KWP2000: $22 $c1 $82 Modus  : Default

_No arguments._

### SET_CAM_FAILED_PXL_PRCNT

Set of TV,SV,RV Camera failed pixels percentage KWP2000: $2E $c1 $82 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_PARMERTERS | binary | 1 byte: tvl_percent_pixelf 2 byte: tvr_percent_pixelf 3 byte: svl_percent_pixelf 4 byte: svr_percent_pixelf 5 byte: rv_percent_pixelf |

### STATUS_FAIL_PXL_THRESHLD

Read Camera failed pixels threshold KWP2000: $22 $C1 $83 Modus  : Default

_No arguments._

### SET_FAIL_PXL_THRESHLD

Set Camera failed pixels threshold KWP2000: $2E $C1 $83 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAIL_PXL_TRSHLD | char | Failed pixel threshold |

### STATUS_IDLE_VDIEO_OP_ENABLE

Read Idle mode video output enable KWP2000: $22 $C1 $84 Modus  : Default

_No arguments._

### SET_IDLE_VDIEO_OP_ENABLE

Set Idle mode video output enable KWP2000: $2E $C1 $84 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VIDEO_OP_ENABLE | char | 0 - Disable 1 - Enable |

### STATUS_SUB_VARIANT_ID

Read Sub variant ID KWP2000: $22 $C1 $85 Modus  : Default

_No arguments._

### STATUS_UV_RIGHT_DISP_CALIB

Status U-View Right display calibration KWP2000: $22 $C1 $86 Modus  : Default

_No arguments._

### SET_UV_RIGHT_DISP_CALIB

Set U-View Right display calibration KWP2000: $2E $C1 $86 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### STATUS_UV_LEFT_DISP_CALIB

Status U-View Left display calibration KWP2000: $22 $C1 $87 Modus  : Default

_No arguments._

### SET_UV_LEFT_DISP_CALIB

Set U-View Left display calibration KWP2000: $2E $C1 $87 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### STATUS_TOW_HITCH_DISP_CALIB

Status Tow Hitch display calibration KWP2000: $22 $C1 $88 Modus  : Default

_No arguments._

### SET_TOW_HITCH_DISP_CALIB

Set Tow Hitch Left display calibration KWP2000: $2E $C1 $88 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### STATUS_FRM_RATE_REDUC_CNTRL

Read Frame Rate Reduction control KWP2000: $22 $C1 $89 Modus  : Default

_No arguments._

### SET_FRM_RATE_REDUC_CNTRL

Set Frame Rate Reduction control KWP2000: $2E $C1 $89 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FRAMERATE_REDUCTION | char | Frame Rate Reduction control |

### SET_FRMRT_RED_MSTR_CNTRL

Set Framerate Reduction Masterframe KWP2000: $2E $C1 $90 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FRAMERATE_RED_DATA | binary | 1 byte Frame Rate Reduction TVL 2 byte Frame Rate Reduction TVR 3 byte Frame Rate Reduction SVL 4 byte Frame Rate Reduction SVR 5 byte Frame Rate Reduction RV |

### STATUS_FRMRATE_SLAVE_RESP

Read Framerate Reduction Slave responses KWP2000: $22 $C1 $91 Modus  : Default

_No arguments._

### STATUS_OD_TRSHOLDS

Read Object detection thresholds KWP2000: $22 $C1 $96 Modus  : Default

_No arguments._

### STATUS_OD_PARAMS

Read Object detection parameters KWP2000: $22 $C1 $97 Modus  : Default

_No arguments._

### STATUS_ONL_CALIB_CNTRL

Read Online calibration control KWP2000: $22 $C1 $98 Modus  : Default

_No arguments._

### SET_OD_TRSHOLDS

Set Object detection thresholds KWP2000: $2E $C1 $96 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_ODT_THRESH_TYPE structure(12 bytes) 1 byte: lsb(tv_new_target_peak_thresh) 2 byte: msb(tv_new_target_peak_thresh) 3 byte: lsb(tv_corr_peak_thresh) 4 byte: msb(tv_corr_peak_thresh) 5 byte: tv_new_target_pce_thresh 6 byte: tv_new_target_pce_thresh 7 byte: lsb(rv_new_target_peak_thresh) 8 byte: msb(rv_new_target_peak_thresh) 9 byte: lsb(rv_corr_peak_thresh) 10 byte: msb(rv_corr_peak_thresh) 11 byte: rv_new_target_pce_thresh 12 byte: rv_new_target_pce_thresh |

### SET_OD_PARMS

Set Object detection parameters KWP2000: $2E $C1 $97 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_ODT_PARAM_TYPE structure(22 bytes) 1 byte: lsb(min_speed_mm_per_s) 2 byte: msb(min_speed_mm_per_s) 3 byte: lsb(max_speed_mm_per_s) 4 byte: msb(max_speed_mm_per_s) 5 byte: lsb(max_speed_delta_mm_per_s) 6 byte: msb(max_speed_delta_mm_per_s) 7 byte: lsb(max_steer_delta_deg_64ths) 8 byte: msb(max_steer_delta_deg_64ths) 9 byte: lsb(min_track_distance_mm) 10 byte: msb(min_track_distance_mm) 11 byte: rv_num_regions 12 byte: tv_num_regions 13 byte: max_lost_count 14 byte: min_track_count 15 byte: max_track_count 16 byte: num_odt_regions 17 byte: restrict_fil 18 byte: overlay_enabled 19 byte: update_time_constant 20 byte: min_on_ground_percent 21 byte: min_turning_percent 22 byte: turning_angle_threshold_degrees |

### SET_ONL_CALIB_CNTRL

Set Online calibration control KWP2000: $2E $C1 $98 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_ONL_CONTROL_TYPE structure(23 bytes) 1 byte: onl_enable 2 byte: pass1 3 byte: pass2 4 byte: height_detect 5 byte: max_solves 6 byte: worst_results_count_less 7 byte: worst_less0_amount 8 byte: worst_less1_amount 9 byte: worst_less2_amount 10 byte: worst_amount1_tenths 11 byte: worst_amount2_tenths 12 byte: compensate_steering_mult 13 byte: compensate_steering_offs 14 byte: compensate_speed_mult 15 byte: weight_mean_pos_to_vert 16 byte: new_height_method 17 byte: speedo_method 18 byte: min_multiplier_128ths 19 byte: max_multiplier_128ths 20 byte: speed_multiplier_100ths 21 byte: max_steer_offs_deg_10ths 22 byte: steer_offset_multiplier 23 byte: steer_multiplier_100ths |

### SET_ONL_CALIB_CNTRL_DISABLED

Set Online calibration control to be disabled KWP2000: $2E $C1 $98 Modus  : Default

_No arguments._

### STATUS_RV_WRAP_PARAMS

Read Rear view warping parameters KWP2000: $22 $C1 $9b Modus  : Default

_No arguments._

### SET_RV_WRAP_PARAMS

Set Rear view warping parameters KWP2000: $2E $C1 $9B Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_ODT_PARAM_TYPE structure(13 active bytes) 1 byte: lsb(centre_pos_x_px) 2 byte: msb(centre_pos_x_px) 3 byte: lsb(centre_pos_y_px) 4 byte: msb(centre_pos_y_px) 5 byte: lsb(a) 6 byte: msb(a) 7 byte: lsb(b) 8 byte: msb(b) 9 byte: lsb(c) 10 byte: msb(c) 11 byte: lsb(d) 12 byte: msb(d) 13 byte: control |

### STATUS_CALIBRATION_ENABLE

Read development use only - enable / disable calibration KWP2000: $22 $C1 $9c Modus  : Default

_No arguments._

### SET_CALIBRATION_ENABLE

Set development use only - enable / disable calibration KWP2000: $2E $C1 $9c Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CALIB_ENABLE | char | enable / disable calibration |

### STATUS_TOP_VIEW_VEHICLE_POS

Status Enable/disable the Top View Vehicle Position KWP2000: $22 $c1 $9d Modus  : Default

_No arguments._

### SET_TOP_VIEW_VEHICLE_POS

Set Enable/disable the Top View Vehicle Position KWP2000: $2e $c1 $9d Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT | char | 0x0 : OFF 0x1 : ON |

### STATUS_UV_ACTIVE_FLAG

Status U - View Activation Flag KWP2000: $22 $c1 $9e Modus  : Default

_No arguments._

### SET_UV_ACTIVE_FLAG

Set U - View Activation Flag KWP2000: $2e $c1 $9E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT | char | 0x0 : OFF 0x1 : ON |

### STATUS_IDLEMOD_VID_TEST

Status Idle mode video test index KWP2000: $22 $c1 $9F Modus  : Default

_No arguments._

### STATUS_TV_TEMPORAL_FILT

Status Topview temporal filtering KWP2000: $22 $c1 $a0 Modus  : Default

_No arguments._

### SET_TV_TEMPORAL_FILT

Set Topview temporal filtering KWP2000: $2e $c1 $a0 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT | binary | 1 byte: enable_bitfield 2 byte: threshold_y 3 byte: threshold_cr 4 byte: threshold_cb |

### STATUS_SV_TEMPORAL_FILT

Status Sideview temporal filtering KWP2000: $22 $c1 $a1 Modus  : Default

_No arguments._

### SET_SV_TEMPORAL_FILT

Set Sideview temporal filtering KWP2000: $2e $c1 $a1 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT | binary | 1 byte: enable_bitfield 2 byte: threshold_y 3 byte: threshold_cr 4 byte: threshold_cb |

### STATUS_RV_TEMPORAL_FILT

Status Rearview temporal filtering KWP2000: $22 $c1 $a2 Modus  : Default

_No arguments._

### SET_RV_TEMPORAL_FILT

Set Rearview temporal filtering KWP2000: $2e $c1 $a2 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT | binary | 1 byte: enable_bitfield 2 byte: threshold_y 3 byte: threshold_cr 4 byte: threshold_cb |

### STATUS_INHIBT_ONL_CAL_RES_UPDT

Read Inhibit Online calibration results update KWP2000: $22 $C1 $A4 Modus  : Default

_No arguments._

### SET_INHIBT_ONL_CAL_RES_UPDT

Set Inhibit Online calibration results update KWP2000: $2E $C1 $a4 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INHIBT_ONL_RESLT | char | online_cal_results_inhibit |

### STATUS_SERVICE_RV_HEATER

Read Service Rear View Heater Status KWP2000: $22 $C1 $A5 Modus  : Default

_No arguments._

### SET_SERVICE_RV_HEATER

Set Service Rear View Heater Status KWP2000: $2E $C1 $a5 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RV_HEATER | char | 0 - OFF 1 - ON |

### STATUS_ONL_CAL_DTC_PRESCLRS

Read Online calibration DTC thresholds KWP2000: $22 $C1 $AB Modus  : Default

_No arguments._

### STATUS_TV_INHIBIT

Read Inhibit TV status KWP2000: $22 $C1 $A3 Modus  : Default

_No arguments._

### SET_TV_INHIBIT

Set Inhibit Top view KWP2000: $2E $C1 $a3 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TV_INHIBIT | char |  |

### STATUS_ONL_CAL_RECORD

Read the online calibration record data KWP2000: $22 $C1 $AC Modus  : Default

_No arguments._

### STATUS_LIN_NOT_ALIVE

Read LIN not alive status KWP2000: $22 $C1 $AD Modus  : Default

_No arguments._

### STATUS_BSDF_ENABLE

Read Image quality control parameters KWP2000: $22 $C1 $AE Modus  : Default

_No arguments._

### SET_BSDF_ENABLE

Set Image quality control parameters KWP2000: $2E $C1 $ae Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BSDF_ENABLE | binary | 1byte: IQ_CONTROL_TVL 2byte: IQ_CONTROL_TVR 3byte: IQ_CONTROL_SVL 4byte: IQ_CONTROL_SVR 5byte: IQ_CONTROL_RV 6byte: IQ_CONTROL_Overlay_en 7byte: Unused 8byte: Unused |

### STATUS_CAM_LEARN

Read different camera learn status KWP2000: $22 $D3 $A1 Modus  : Default

_No arguments._

### ENABLE_FS_SV_RIGHT_CEL

Enable Full Screen Side view right KWP2000: $31 RoutineControl $58 $00 $00 Modus  : Default

_No arguments._

### DISABLE_FS_SV_RIGHT_CEL

Diaable Full Screen Side view right KWP2000: $32 RoutineControl $58 $00 Modus  : Default

_No arguments._

### ENABLE_FS_SV_LEFT_CEL

Enable Full Screen Side view left KWP2000: $31 RoutineControl $59 $00 $00 Modus  : Default

_No arguments._

### DISABLE_FS_SV_LEFT_CEL

Diable Full Screen Side view  Left KWP2000: $32 RoutineControl $59 $00 Modus  : Default

_No arguments._

### START_BMW_SRV_CAM_LEARN

Start BMW Service Camera Learn KWP2000: $31 RoutineControl $5C $00 Modus  : Default

_No arguments._

### START_LIN_DISABLE_ALL

Start LIN disable all schedules KWP2000: $31 RoutineControl $5D $00 Modus  : Default

_No arguments._

### STOP_LIN_DISABLE_ALL

Stop LIN disable all schedules KWP2000: $32 RoutineControl $5D $00 Modus  : Default

_No arguments._

### START_LVDS_IMAGER

Start LVDS and Imager state to selectecd input states KWP2000: $31 RoutineControl $5F $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LVDS_STATE | char | camera LVDS state |
| IMAGER_STATE | char | camera Imager state |

### STOP_LVDS_IMAGER

Set LVDS and Imager state to Default state KWP2000: $32 RoutineControl $5F $00 Modus  : Default

_No arguments._

### START_CLR_CAM_DTC

Claer camera DTC KWP2000: $31 RoutineControl $60 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_VARIANT | char | camera selected |

### START_LIN_HDR

Enable the HDR functionality KWP2000: $31 RoutineControl $61 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | camera selected |

### STOP_LIN_HDR

Disable the HDR functionality KWP2000: $32 RoutineControl $61 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | camera selected |

### START_CAM_ERROR_LOG

Read Camera Error Log KWP2000: $31 RoutineControl $62 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV  camera selected |

### STATUS_CAM_ERROR_LOG

Read results Camera Error Log KWP2000: $33 RoutineControl $62 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | camera selected |

### START_VIDEO_FRZ_WATCHDOG

Start Video freeze watchdog KWP2000: $31 RoutineControl $64 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 16bytes input data |

### STOP_VIDEO_FRZ_WATCHDOG

Stop Video freeze watchdog KWP2000: $32 RoutineControl $64 $00 Modus  : Default

_No arguments._

### START_CFG_SUPPLIER_DEFAULTS

Set the CFG keep and rebuild structs to default values KWP2000: $31 RoutineControl $65 $00 Modus  : Default

_No arguments._

### START_CAF_DEFAULT_DIDS

Set all DIDs to defaults from coding file KWP2000: $31 RoutineControl $66 $00 Modus  : Default

_No arguments._

### START_UPDT_FLASHMEM_CAM

Start Trigger Flashmemory Update for cameras KWP2000: $31 RoutineControl $67 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV camera selected 0x1F - All cameras selected |

### START_UPDT_FLASH_CAM_BL_MODES

Start Trigger Flashmemory Update for cameras from bootloader modes with identical variants KWP2000: $31 RoutineControl $68 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV  camera selected 0x1F - All cameras selected |

### START_CAM_ADC_READINGS

Read camera ADC readings KWP2000: $31 RoutineControl $5E $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV  camera selected 0x1F - All cameras selected |

### STOP_CAM_ADC_READINGS

Stop Reading  camera ADC readings KWP2000: $32 RoutineControl $5E $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV  camera selected 0x1F - All cameras selected |

### START_TST_POINT_LEDS

start Test Points & LEDs KWP2000: $31 RoutineControl $4E $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: host_data_byte 2 byte: dsp_data_byte 3 byte: host_mask_byte 3 byte: DSP_mask_byte |

### START_CAM_POWER

start Camera Power KWP2000: $31 RoutineControl $52 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: data_byte 2 byte: mask_byte |

### STOP_CAM_POWER

stop Camera Power KWP2000: $32 RoutineControl $52 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: data_byte 2 byte: mask_byte |

### START_READ_CAM_REG

Read Camera Register KWP2000: $31 RoutineControl $40 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: camera selected 2 byte: Register address |

### STATUS_READ_CAM_REG

Stop Read Camera Register KWP2000: $33 RoutineControl $40 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: camera selected 2 byte: Register address |

### START_WRITE_CAM_REG

Start write Camera Register KWP2000: $31 RoutineControl $41 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: camera selected 2 byte: Register address 2 byte: Register data |

### START_READ_CAM_DATA

Start Read Camera Data (EEPROM) KWP2000: $31 RoutineControl $42 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: camera selected 2 byte: lsb Register address 3 byte: msb Register address 4 byte: data type size |

### STATUS_READ_CAM_DATA

Status Read Camera Data (EEPROM) KWP2000: $33 RoutineControl $42 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: camera selected 2 byte: lsb Register address 3 byte: msb Register address 4 byte: data type size |

### START_WRITE_CAM_DATA

Status Write Camera Data (EEPROM) KWP2000: $31 RoutineControl $43 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte    : camera selected 2 byte    : lsb Register address 3 byte    : msb Register address 4 byte	  : data type size 5 -12 byte: data(8 bytes) |

### START_CALIB_BMW_ASSEM

Calibration  for BMW assembly KWP2000: $31 RoutineControl $4C $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1 byte: Camera selected 2 byte: Calibration active 3 byte: Ttarget type |

### STATUS_CALIB_RV_MAGNA_SOLV_PARAMS

Calibration Rear view Magna target Solver parameters KWP2000: $22 ReadDataByCommonIdentifier $c1 $A6 Modus  : Default

_No arguments._

### SET_CAL_MAGNA_REAR_SOLV_PARAMS

Set Calibration Rear view Magna target Solver parameters KWP2000: $2E $C1 $A6 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_SOLVER_PARAMS structure(48 bytes) |

### STATUS_CAL_MAGNA_REAR_GRID_DETAILS

Status of Calibration magna Rear grid details KWP2000: $22 ReadDataByCommonIdentifier $c1 $a9 Modus  : Default

_No arguments._

### SET_CAL_MAGNA_REAR_GRID_DETAILS

Set Calibration magna Rear grid details KWP2000: $2e ReadDataByCommonIdentifier $c1 $a9 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | CFG_CALIB_GRID_DETAILS structure(10 bytes) 1 byte: line_width 1 byte: num_hlines 1 byte: num_vlines 1 byte: detect_split_num_cols 1 byte: detect_split_num_rows 1 byte: left_margin 1 byte: right_margin 1 byte: top_margin 1 byte: bot_margin 1 byte: grid_colour |

### STATUS_CAL_MAGNA_REAR_DISP

Status Calibration Magana Rear view display KWP2000: $22 $C1 $a7 Modus  : Default

_No arguments._

### SET_CAL_MAGNA_REAR_DISP

Set Calibration Magana Rear view display KWP2000: $2E $C1 $a7 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INP_PARAMETERS | binary | 1  byte - lsb(disp_area_rot__x_deg_64ths) 2  byte - msb(disp_area_rot__x_deg_64ths) 3  byte - lsb(disp_area_rot_z1_deg_64ths) 4  byte - msb(disp_area_rot_z1_deg_64ths) 5  byte - lsb(disp_area_rot_z2_deg_64ths) 6  byte - msb(disp_area_rot_z2_deg_64ths) 7  byte - lsb(disp_area_centre_pointx_mm) 8  byte - msb(disp_area_centre_pointx_mm) 9  byte - lsb(disp_area_centre_pointy_mm) 10  byte - msb(disp_area_centre_pointy_mm) 11  byte - lsb(disp_area_centre_pointz_mm) 12  byte - msb(disp_area_centre_pointz_mm) 13 byte - lsb(disp_area_width_mm) 14 byte - msb(disp_area_width_mm) 15 byte - lsb(disp_aspect) 16 byte - msb(disp_aspect) 17 byte - flipx 18 byte - flipy 19 byte - antialias 20 byte - auto_bright |

### STATUS_CAL_MAGNA_REAR_GRID_POS

Read Calibration Magna Rear grid positions KWP2000: $22 $C1 $a8 Modus  : Default

_No arguments._

### SET_CAL_MAGNA_REAR_GRID_POS

Set Calibration Magna Rear grid positions KWP2000: $2E $C1 $A8 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GRID_POS_DATA | binary | 1byte lsb(rot_x_deg_64) 2byte msb(rot_x_deg_64) 3byte lsb(rot_z1_deg_64) 4byte msb(rot_z1_deg_64) 5byte lsb(rot_z2_deg_64) 6byte msb(rot_z2_deg_64) 7byte lsb(point_x_mm) 8byte msb(point_x_mm) 9byte lsb(point_y_mm) 10byte msb(point_y_mm) 11byte lsb(point_z_mm) 12byte msb(point_z_mm) |

### READ_DTC_STAT

Read DTC status KWP2000: $17 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DTC_ERROR_CODE | int | error code |

### STATUS_USER_BRIGHTNESS

Status of current user brightness(PIA) KWP2000: $22 $C1 $44 Modus  : Default

_No arguments._

### SET_USER_BRIGHTNESS

Set the current user brightness(PIA) KWP2000: $2E $c1 $44 Modus  : Default Set default 0x"D for all cameras 1st byte : Top View brightness 2nd byte : Side View brightness 3rd byte : Rear View brightness

_No arguments._

### STATUS_USER_CONTRAST

Status of current user contrast(PIA) KWP2000: $22 $C1 $45 Modus  : Default

_No arguments._

### SET_USER_CONTRAST

Set the current user contrast(PIA) KWP2000: $2E $c1 $45 Modus  : Default Default set to 0x4B for all cameras 1st byte : Top View contrast 2nd byte : Side View contrast 3rd byte : Rear View contrast

_No arguments._

### STATUS_USER_OVERLAYS

Status of current user overlays enable(PIA) KWP2000: $22 $C1 $65 Modus  : Default

_No arguments._

### SET_USER_OVERLAYS

Set the current user overlays enable(PIA) KWP2000: $2E $c1 $65 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| INPUT_DATA | binary | 1st byte : Top View Overlay 2nd byte : Side View Overlay 3rd byte : Rear View Overlay |

### STEUREN_KALIB_RESET

Reset the calibration data of the selected camera KWP2000: $2E $D3 $8E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SLECTED | unsigned char | 0x0 : Top view left camera(DEFAULT) 0x1 : Top view right camera 0x2 : Rear view camera |

### STATUS_RV_CAM_HEATING_ENABLE

Read statu sof Rear view camera heating enable KWP2000: $22 $C1 $AF Modus  : Default

_No arguments._

### SET_RV_CAM_HEATING_ENABLE

Set Rear view camera heating enable KWP2000: $2E $C1 $AF Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RV_HEATING_ENABLE | char | 0x0 : Disable 0x1 : Enable |

### STATUS_UPDT_FLASHMEM_CAM

Status Trigger Flashmemory Update for cameras KWP2000: $33 RoutineControl $67 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV  camera selected 0x1F - All cameras selected |

### STATUS_UPDT_FLASH_CAM_BL_MODES

Status Trigger Flashmemory Update for cameras from bootloader modes with identical variants KWP2000: $33 RoutineControl $68 $00 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | char | 0x01 - TVL camera selected 0x02 - TVR camera selected 0x04 - SVL camera selected 0x08 - SVR camera selected 0x10 - RV  camera selected 0x1F - All cameras selected |

### RESET_CALIBRATION_VALUES

Reset calibration values d38e, CCQ, onl cal record KWP2000: $2E D3 8E $2E C1 A8 $2E C1 Cx Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAM_SELECTED | unsigned char | 0x00: TVL camera 0x01: TVR camera 0x02: RV camera |

### SET_CALIBRATION_DEBUG_OVERLAYS

Set development use only - enable / disable calibration overalys KWP2000: $2E $C1 $DB Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| OVRLY_ENABLE | char | 1 - Enable  calibration debug overlay 0 - Disable calibration debug overlay |

### STATUS_ONL_CALIB

Status of online calibration quality KWP2000: $22 $D3 $CC Modus  : Default

_No arguments._

### STATUS_ONL_CALIB_QUALITY

Status of online calibration quality KWP2000: $22 $D3 $CE Modus  : Default

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
| 0xAB71 | Energiesparmode aktiv |
| 0xAB85 | Uebertemperatur TV_R CAM |
| 0xAB84 | Uebertemperatur TV_L CAM |
| 0xAB87 | Uebertemperatur SV_R CAM |
| 0xAB86 | Uebertemperatur SV_L CAM |
| 0xAB88 | Uebertemperatur RV CAM |
| 0xAB97 | Top View rechts Kamera verschmutzt |
| 0xAB98 | Top View links Kamera verschmutzt |
| 0xAB9C | TV_R Kamera nicht angelernt |
| 0xAB9D | TV_L Kamera nicht angelernt |
| 0xAB99 | Side View rechts Kamera verschmutzt |
| 0xAB9A | Side View links Kamera verschmutzt |
| 0xAB7A | Sensor Pixel Fehler, TV_r |
| 0xAB7B | Sensor Pixel Fehler, TV_l |
| 0xAB7C | Sensor Pixel Fehler, SV_r |
| 0xAB7D | Sensor Pixel Fehler, SV_l |
| 0xAB7E | Sensor Pixel Fehler RV |
| 0xAB9B | Rear View Kamera verschmutzt |
| 0xAB72 | Nicht justierte TV_r |
| 0xAB73 | Nicht justierte TV_l |
| 0xAB74 | Nicht justierte RV Cam |
| 0xAB7F | Strom Fehler,TV_r |
| 0xAB80 | Strom Fehler,TV_l |
| 0xAB81 | Strom Fehler,SV_r |
| 0xAB82 | Strom Fehler,SV_l |
| 0xAB83 | Strom Fehler,RV |
| 0xCA94 | Lin-Bus Fehler, TV_r |
| 0xCA95 | Lin-Bus Fehler, TV_L |
| 0xCA96 | Lin-Bus Fehler, SV_r |
| 0xCA97 | Lin-Bus Fehler, SV_l |
| 0xCA98 | Lin-Bus Fehler, RV |
| 0xAB75 | LVDS- Uebertragung TV_r |
| 0xAB76 | LVDS- Uebertragung TV_l |
| 0xAB77 | LVDS- Uebertragung SV_r |
| 0xAB78 | LVDS- Uebertragung SV_l |
| 0xAB79 | LVDS- Uebertragung RV |
| 0xAB92 | Kamera Fehler, TV_R |
| 0xAB93 | Kamera Fehler, TV_L |
| 0xAB94 | Kamera Fehler, SV_R |
| 0xAB95 | Kamera Fehler, SV_L |
| 0xAB96 | Kamera Fehler, RV |
| 0xCAAD | K-Can ID 3B0h Status Gang Rueckwaerts |
| 0xCAAA | K-Can ID 306h Fahrzeugneigung  |
| 0xCAA0 | K-CAN ID C4h (Lenkwinkel K-CAN )  |
| 0xCAA9 | K-CAN ID 3B4h Bordnetz Spannungswert |
| 0xCAAB | K-CAN ID 3AFh Status Aktivierung Funktion Parken |
| 0xCA9D | K-CAN ID 3A0h (Fahrzeugzustand)  |
| 0xCA9F | K-CAN ID 387h (Bedienung Taster SideView) |
| 0xCAAC | K-CAN ID 377h Status Funktion PDC |
| 0xCAA7 | K-CAN ID 36Dh Abstandsmessung PDC |
| 0xCA9B | K-CAN ID 330h (Kilometerstand/Reichweite) |
| 0xCAA3 | K-CAN ID 314h (Status Fahrlicht)  |
| 0xCAA4 | K-CAN ID 304h (Status Gang) |
| 0xCAA6 | K-CAN ID 2FCh (ZV und Klappenzustand) |
| 0xCAA2 | K-CAN ID 2E4h (Status Anhaenger) |
| 0xCAA8 | K-CAN ID 2CAh Aussentemperatur |
| 0xCA9E | K-CAN ID 21Ah (Lampenzustand) |
| 0xCAA5 | K-CAN ID 1A6h (Wegstrecke Fahrzeug) |
| 0xCA9C | K-CAN ID 1A0h (Geschwindigkeit Fahrzeug) |
| 0xCAA1 | K-CAN ID 130h (Klemmen) |
| 0xCA9A | K-CAN ID  328h (Relativzeit) |
| 0xAB89 | TV_R nicht kalibriert |
| 0xAB8A | TV_L nicht kalibriert |
| 0xAB8B | RV nicht kalibriert |
| 0xAB70 | Heizung Rueckfahrkamera |
| 0xAB68 | FBAS-Ausgang Kurzschluss oder offene Leitung |
| 0xAB69 | ECU Spannungsversorgung fehlerhaft |
| 0xAB8E | ECU: Flash Module DSP  passen nicht zusammen |
| 0xAB8C | ECU: DSP SDRAM Defekt |
| 0xAB8D | ECU: DSP Programmierfehler |
| 0xAB90 | ECU Interner Spannung Fehler |
| 0xAB91 | ECU Host Ram Defekt |
| 0xAB8F | ECU  Uebertemperatur |
| 0xCA84 | CAN-Bus Leitungsfehler |
| 0xCA87 | CAN-Bus Kommunikationsfehler |
| 0xAB9E | SV_R Kamera nicht angelernt |
| 0xAB9F | SV_L Kamera nicht angelernt |
| 0xABA0 | RV Kamera nicht angelernt |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xAB71 | 1 | 2 | 3 | - |
| 0xAB72 | 1 | 2 | 3 | - |
| 0xAB73 | 1 | 2 | 3 | - |
| 0xAB74 | 1 | 2 | 3 | - |
| 0xAB75 | 1 | 2 | 3 | - |
| 0xAB76 | 1 | 2 | 3 | - |
| 0xAB77 | 1 | 2 | 3 | - |
| 0xAB78 | 1 | 2 | 3 | - |
| 0xAB79 | 1 | 2 | 3 | - |
| 0xAB7A | 1 | 2 | 3 | - |
| 0xAB7B | 1 | 2 | 3 | - |
| 0xAB7C | 1 | 2 | 3 | - |
| 0xAB7D | 1 | 2 | 3 | - |
| 0xAB7E | 1 | 2 | 3 | - |
| 0xAB7F | 1 | 2 | 3 | - |
| 0xAB80 | 1 | 2 | 3 | - |
| 0xAB81 | 1 | 2 | 3 | - |
| 0xAB82 | 1 | 2 | 3 | - |
| 0xAB83 | 1 | 2 | 3 | - |
| 0xAB84 | 1 | 2 | 3 | - |
| 0xAB85 | 1 | 2 | 3 | - |
| 0xAB86 | 1 | 2 | 3 | - |
| 0xAB87 | 1 | 2 | 3 | - |
| 0xAB88 | 1 | 2 | 3 | - |
| 0xAB89 | 1 | 2 | 3 | - |
| 0xAB8A | 1 | 2 | 3 | - |
| 0xAB8B | 1 | 2 | 3 | - |
| 0xAB69 | 1 | 2 | 3 | - |
| 0xAB8C | 1 | 2 | 3 | - |
| 0xAB8D | 1 | 2 | 3 | - |
| 0xAB8E | 1 | 2 | 3 | - |
| 0xAB8F | 1 | 2 | 3 | - |
| 0xAB90 | 1 | 2 | 3 | - |
| 0xAB91 | 1 | 2 | 3 | - |
| 0xAB92 | 1 | 2 | 3 | - |
| 0xAB93 | 1 | 2 | 3 | - |
| 0xAB94 | 1 | 2 | 3 | - |
| 0xAB95 | 1 | 2 | 3 | - |
| 0xAB96 | 1 | 2 | 3 | - |
| 0xAB68 | 1 | 2 | 3 | - |
| 0xAB97 | 1 | 2 | 3 | - |
| 0xAB98 | 1 | 2 | 3 | - |
| 0xAB99 | 1 | 2 | 3 | - |
| 0xAB9A | 1 | 2 | 3 | - |
| 0xAB9B | 1 | 2 | 3 | - |
| 0xAB70 | 1 | 2 | 3 | - |
| 0xCA84 | 1 | 2 | 3 | - |
| 0xCA87 | 1 | 2 | 3 | - |
| 0xCA94 | 1 | 2 | 3 | - |
| 0xCA95 | 1 | 2 | 3 | - |
| 0xCA96 | 1 | 2 | 3 | - |
| 0xCA97 | 1 | 2 | 3 | - |
| 0xCA98 | 1 | 2 | 3 | - |
| 0xCA9A | 1 | 2 | 3 | - |
| 0xCA9B | 1 | 2 | 3 | - |
| 0xCA9C | 1 | 2 | 3 | - |
| 0xCA9D | 1 | 2 | 3 | - |
| 0xCA9E | 1 | 2 | 3 | - |
| 0xCA9F | 1 | 2 | 3 | - |
| 0xCAA0 | 1 | 2 | 3 | - |
| 0xCAA1 | 1 | 2 | 3 | - |
| 0xCAA2 | 1 | 2 | 3 | - |
| 0xCAA3 | 1 | 2 | 3 | - |
| 0xCAA4 | 1 | 2 | 3 | - |
| 0xCAA5 | 1 | 2 | 3 | - |
| 0xCAA6 | 1 | 2 | 3 | - |
| 0xCAA7 | 1 | 2 | 3 | - |
| 0xCAA8 | 1 | 2 | 3 | - |
| 0xCAA9 | 1 | 2 | 3 | - |
| 0xCAAA | 1 | 2 | 3 | - |
| 0xCAAB | 1 | 2 | 3 | - |
| 0xCAAC | 1 | 2 | 3 | - |
| 0xCAAD | 1 | 2 | 3 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Ubatt | Volts | - | unsigned char | - | 50 | 1000 | 8 |
| 2 | Temperature | Degrees Celcius | - | signed char | - | 1 | 1 | 0 |
| 3 | Additional Infomation | hex | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | ja |
| F_PCODE7 | ja |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |
