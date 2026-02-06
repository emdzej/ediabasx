# EMF_70.prg

## General

|  |  |
| --- | --- |
| File | EMF_70.prg |
| Type | PRG |
| Jobs | 74 |
| Tables | 41 |
| Origin | BMW EE-24 Mark |
| Revision | 1.004 |
| Author | Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Peter, Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Erras, Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Thomas |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EMF_70 |  |  |
| ORIGIN | string | BMW EE-24 Mark |  |  |
| REVISION | string | 1.004 |  |  |
| AUTHOR | string | Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Peter, Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Erras, Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Thomas |  |  |
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

### STATUS_FESTELLKRAFT_LESEN

Auslesen der erreichten Festellkraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0001 F_ERREICHT Modus  : Default

_No arguments._

### STATUS_PROGRAMM_DATE

Ausgabe des Programming Date aus UIF KWP2000: $1A  ReadECUIdentification $99  PD Modus  : Default

_No arguments._

### STATUS_BMW_DIAG_INDEX

Auslesen des BMW Diagnoseindex aus ZIF KWP2000: $1A  ReadECUIdentification $9C  VDCI Modus  : Default

_No arguments._

### STATUS_LETZTE_LOESEKRAFT

Auslesen der letzten Loesekraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0014 F_LOESE Modus  : Default

_No arguments._

### STATUS_LETZTE_ANZUGSKRAFT

Auslesen der letzten Anzugskraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0015 F_ANZ Modus  : Default

_No arguments._

### STATUS_AKTUELLE_ISTKRAFT

Auslesen der aktuellen Istkraft(N) KWP2000: $22 ReadDataByCommonIdentifier $0016 F_IST Modus  : Default

_No arguments._

### STATUS_BETAETIGUNGSZAEHLER_ANZ

Lesen des Betaetigungszaehlers Taster Richtung Anziehen KWP2000: $22 ReadDataByCommonIdentifier $0017 BETAET_ZAEHLER_ANZ Modus  : Default

_No arguments._

### STATUS_BETAETIGUNGSZAEHLER_LOES

Betaetigungszaehler Taster Richtung Loesen KWP2000: $22 ReadDataByCommonIdentifier $0018 BETAET_ZAEHLER_LOES Modus  : Default

_No arguments._

### STATUS_ANZAHL_FESTSTELLVORGAENGE

Anzahl der Feststellvorgaenge KWP2000: $22 ReadDataByCommonIdentifier $0019 ANZ_FESTSTELL_VORG Modus  : Default

_No arguments._

### STATUS_ANZAHL_NOTENTRIEGELUNGEN

Anzahl der Notentriegelungen KWP2000: $22 ReadDataByCommonIdentifier $0020 ANZ_NOTENTRIEG Modus  : Default

_No arguments._

### STATUS_ANZAHL_DEGRADED_MODI

Anzahl der Degraded Modi KWP2000: $22 ReadDataByCommonIdentifier $0021 ANZ_DEGRADED_MODE Modus  : Default

_No arguments._

### STATUS_EMF_BUTTON

Auslesen des Status der EMF-Taste KWP2000: $30 InputOutputControlByLocalIdentifier $30 STATUS_EMF_BUTTON Modus  : Default

_No arguments._

### STEUERN_MONTAGE_MODE

Montagemodus ein/ausschalten KWP2000: $31 StartRoutineByLocalIdentifier $21 MONTAGE_MODE Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MONTAGEMODUS | int | Bereich: 0-1, 1 = Montagemode_ein |

### STEUERN_MONTAGE_POS

EMF in Montageposition fahren KWP2000: $31 StartRoutineByLocalIdentifier $20 MONTAGE_POS Modus  : Default

_No arguments._

### STATUS_KRAFTSENSOR

Auslesen des Kraftsensors KWP2000: $30 InputOutputControlByLocalIdentifier $1901 FORCE Modus  : Default

_No arguments._

### STATUS_AD_MOTOR

Auslesen der AD-Werte des Motors KWP2000: $30 InputOutputControlByLocalIdentifier $2001 AD_MOT Modus  : Default

_No arguments._

### STATUS_AD_KLEMME_30_15

Auslesen der AD-Werte von KL30E, KL30P und KL15 KWP2000: $30 InputOutputControlByLocalIdentifier $2101 AD_KL Modus  : Default

_No arguments._

### STATUS_AD_S1_BIS_S4

Auslesen der AD-Werte der Tastereingänge S1 bis S4 KWP2000: $30 InputOutputControlByLocalIdentifier $2201 AD_S Modus  : Default

_No arguments._

### STATUS_AD_TEMP

Auslesen der AD-Werte des PCB Temperatursensors KWP2000: $30 InputOutputControlByLocalIdentifier $2301 AD_TEMP Modus  : Default

_No arguments._

### STATUS_MOTORSTROM

Auslesen Motorstrom KWP2000: $30 InputOutputControlByLocalIdentifier $31 I_MOT $01 RCS Modus  : Default

_No arguments._

### STATUS_BMW_TEILE_NR

Auslesen der BMW_Teilenummer KWP2000: $1A  ReadECUIdentification $91  VMECUHN Modus  : Default

_No arguments._

### STEUERN_NAECHSTE_FESTSTELLKRAFT

Feststellkraft fuer naechsten Anziehvorgang KWP2000: $3B WriteDataByLocalIdentifier $FA RLI = F_FESTSTELLEN Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FESTSTELLKRAFT | int | Bereich: 0-65535 |

### STATUS_ANZAHL_NACHZIEHEN_SOLL_IST

Anzahl Nachziehvorgaenge mit Soll Ist Vergleich KWP2000: $22 ReadDataByCommonIdentifier $0022 NB_TIGHTENING_CMP Modus  : Default

_No arguments._

### STATUS_ANZAHL_NACHZIEHEN_BOOST_LESEN

Auslesen Anzahl Boost KWP2000: $22 ReadDataByCommonIdentifier $0023 F_ERREICHT Modus  : Default

_No arguments._

### STATUS_SW_VERSION_BOOT_LESEN

Auslesen Software Version BOOT KWP2000: $31 ReadDataByCommonIdentifier $FB F_ERREICHT Modus  : Default

_No arguments._

### STATUS_SW_VERSION_SLAVE_LESEN

Auslesen Software Version SLAVE KWP2000: $31 ReadDataByCommonIdentifier $FB F_ERREICHT Modus  : Default

_No arguments._

### STATUS_GESCHWINDIGKEIT_RDZ

Auslesen Radgeschwindigkeit KWP2000: $30 InputOutputControlByLocalIdentifier $1001 WS Modus  : Default

_No arguments._

### STATUS_DIGITALEINGAENGE_BUTTON

Auslesen der Digitaleingänge KWP2000: $30 InputOutputControlByLocalIdentifier $1801 DIGIN Modus  : Default

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
| 0x600B | ECU_EEPROM_SOFT |
| 0x600C | PER_BUTTON_RAW |
| 0x600D | ECU_EEPROM_DATA |
| 0x600E | ECU_RELAY_MOSFET |
| 0x600F | ECU_TEMP_SENSOR |
| 0x6010 | ECU_SCS |
| 0x6011 | ECU_MOTOR_CIRCUIT |
| 0x6012 | ECU_FORCE |
| 0x6013 | ECU_TEMPERATURE |
| 0x6014 | ECU_MASTER |
| 0x6015 | ECU_SLAVE |
| 0x6016 | ECU_SLAVE_FLASH |
| 0x6017 | ECU_SPI |
| 0x6018 | ECU_SECURITY_ACCESS |
| 0x6019 | PER_BUTTON_APPLY |
| 0x601A | ECU_SLAVE_CAN |
| 0x601B | CAN_RX_SIGNAL_GESCHWINDIGKEIT |
| 0x601C | CAN_RX_SIGNAL_GETRIEBEDATEN |
| 0x601D | CAN_RX_SIGNAL_STAT_DSC |
| 0x601E | CAN_RX_SIGNAL_STELLANF |
| 0x6020 | PER_BUTTON_RELEASE |
| 0x6021 | PER_IGN_WAKE |
| 0x6022 | PER_WHEEL_SPEED |
| 0x6023 | PER_POWER_ SUPPLY |
| 0x6024 | ECU_CODING |
| 0x6025 | ECU_WRONG_REQUEST |
| 0x6031 | MECH_MANUAL_MOVED |
| 0x6032 | MECH_FORCE |
| 0x6034 | MECH_MOTION_TIMEOUT |
| 0x6040 | ESP_DEFECT |
| 0x6041 | ESP_CAN_FAULT |
| 0x6042 | ESP_NACHZIEHEN |
| 0x6043 | ESP_SIGNAL |
| 0x6044 | KLEMME30G |
| 0x6045 | ESP_STAT_DSC_SOFT |
| 0xD387 | CAN_BUS |
| 0xD394 | CAN_GESCHWINDIGKEIT_416 |
| 0xD395 | CAN_GETRIEBEDATEN_186 |
| 0xD397 | CAN_KLEMMENSTATUS_304 |
| 0xD398 | CAN_STAT_ DSC_414 |
| 0xD399 | CAN_STELLANF_EMF_423 |
| 0xD39A | CAN_NACHLAUFZEIT_STROMVERSORGUNG_958 |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | Umweltbedingung_D_1 | Umweltbedingung_A_1 | Umweltbedingung_D_2 | Umweltbedingung_D_3 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x03 | nicht benutzt | 0/1 | - | 0x04 | - | - | - | - |
| 0x0C | nicht benutzt | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x0D | nicht benutzt | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x0E | nicht benutzt | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x0F | nicht benutzt | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x14 | nicht benutzt | 0/1 | low | 0x00000010 | - | - | - | - |
| 0x15 | nicht benutzt | 0/1 | low | 0x00000020 | - | - | - | - |
| 0x16 | nicht benutzt | 0/1 | low | 0x00000040 | - | - | - | - |
| 0x17 | nicht benutzt | 0/1 | low | 0x00000080 | - | - | - | - |
| 0x1C | Position Handverstellung | 0/1 | low | 0x00004000 | - | - | - | - |
| 0x1D | Nullposition kalibriert | 0/1 | low | 0x00008000 | - | - | - | - |
| 0x1E | nicht benutzt | 0/1 | low | 0x00010000 | - | - | - | - |
| 0x1F | nicht benutzt | 0/1 | low | 0x00020000 | - | - | - | - |
| 0x20 | nicht benutzt | 0/1 | low | 0x00040000 | - | - | - | - |
| 0x21 | nicht benutzt | 0/1 | low | 0x00080000 | - | - | - | - |
| 0x22 | nicht benutzt | 0/1 | low | 0x00100000 | - | - | - | - |
| 0x23 | nicht benutzt | 0/1 | low | 0x00200000 | - | - | - | - |
| 0x24 | nicht benutzt | 0/1 | low | 0x00400000 | - | - | - | - |
| 0x25 | nicht benutzt | 0/1 | low | 0x00800000 | - | - | - | - |
| 0x26 | Stilllegungsstufen | 0-n | low | 0x07000000 | Activity_Mode | - | - | - |
| 0x3A | EE_Block_0 | 0/1 | low | 0x00000001 | - | - | - | - |
| 0x3B | EE_Block_1 | 0/1 | low | 0x00000002 | - | - | - | - |
| 0x3C | EE_Block_2 | 0/1 | low | 0x00000004 | - | - | - | - |
| 0x3D | EE_Block_3 | 0/1 | low | 0x00000008 | - | - | - | - |
| 0x3E | EE_Block_4 | 0/1 | low | 0x00000010 | - | - | - | - |
| 0x3F | EE_Block_5 | 0/1 | low | 0x00000020 | - | - | - | - |
| 0x40 | EE_Block_6 | 0/1 | low | 0x00000040 | - | - | - | - |
| 0x41 | EE_Block_7 | 0/1 | low | 0x00000080 | - | - | - | - |
| 0x42 | EE_Block_8 | 0/1 | low | 0x00000100 | - | - | - | - |
| 0x43 | EE_Block_9 | 0/1 | low | 0x00000200 | - | - | - | - |
| 0x44 | EE_Block_10 | 0/1 | low | 0x00000400 | - | - | - | - |
| 0x45 | EE_Block_11 | 0/1 | low | 0x00000800 | - | - | - | - |
| 0x46 | EE_Block_12 | 0/1 | low | 0x00001000 | - | - | - | - |
| 0x47 | EE_Block_13 | 0/1 | low | 0x00002000 | - | - | - | - |
| 0x48 | EE_Block_14 | 0/1 | low | 0x00004000 | - | - | - | - |
| 0x49 | EE_Block_15 | 0/1 | low | 0x00008000 | - | - | - | - |
| 0x4A | EE_Block_16 | 0/1 | low | 0x00010000 | - | - | - | - |
| 0x4B | EE_Block_17 | 0/1 | low | 0x00020000 | - | - | - | - |
| 0x4C | EE_Block_18 | 0/1 | low | 0x00040000 | - | - | - | - |
| 0x4D | EE_Block_19 | 0/1 | low | 0x00080000 | - | - | - | - |
| 0x4E | EE_Block_20 | 0/1 | low | 0x00100000 | - | - | - | - |
| 0x4F | EE_Block_21 | 0/1 | low | 0x00200000 | - | - | - | - |
| 0x50 | EE_Block_22 | 0/1 | low | 0x00400000 | - | - | - | - |
| 0x51 | EE_Block_23 | 0/1 | low | 0x00800000 | - | - | - | - |
| 0x52 | EE_Block_24 | 0/1 | low | 0x01000000 | - | - | - | - |
| 0x53 | EE_Block_25 | 0/1 | low | 0x02000000 | - | - | - | - |
| 0x54 | EE_Block_26 | 0/1 | low | 0x04000000 | - | - | - | - |
| 0x55 | EE_Block_27 | 0/1 | low | 0x08000000 | - | - | - | - |
| 0x56 | EE_Block_28 | 0/1 | low | 0x10000000 | - | - | - | - |
| 0x57 | EE_Block_29 | 0/1 | low | 0x20000000 | - | - | - | - |
| 0x58 | EE_Block_30 | 0/1 | low | 0x40000000 | - | - | - | - |
| 0x59 | EE_Block_31 | 0/1 | low | 0x80000000 | - | - | - | - |
| 0x5A | BRP 1 entspricht ungueltig | 0/1 | low | 0x00010000 | - | - | - | - |
| 0x5B | ST_GR_GRB 1 entspricht ungueltig | 0/1 | low | 0x00020000 | - | - | - | - |
| 0x5C | FLLUPT_GPWSUP 1 entspricht ungueltig | 0/1 | low | 0x00040000 | - | - | - | - |
| 0x5D | T_SEC_COU_REL 1 entspricht ungueltig | 0/1 | low | 0x00080000 | - | - | - | - |
| 0x5E | nicht benutzt | 0/1 | low | 0x00100000 | - | - | - | - |
| 0x5F | nicht benutzt | 0/1 | low | 0x00200000 | - | - | - | - |
| 0x60 | nicht benutzt | 0/1 | low | 0x00400000 | - | - | - | - |
| 0x61 | nicht benutzt | 0/1 | low | 0x00800000 | - | - | - | - |
| 0x62 | nicht benutzt | 0/1 | low | 0x01000000 | - | - | - | - |
| 0x63 | nicht benutzt | 0/1 | low | 0x02000000 | - | - | - | - |
| 0x64 | nicht benutzt | 0/1 | low | 0x04000000 | - | - | - | - |
| 0x65 | nicht benutzt | 0/1 | low | 0x08000000 | - | - | - | - |
| 0x66 | nicht benutzt | 0/1 | low | 0x10000000 | - | - | - | - |
| 0x67 | nicht benutzt | 0/1 | low | 0x20000000 | - | - | - | - |
| 0x68 | nicht benutzt | 0/1 | low | 0x40000000 | - | - | - | - |
| 0x69 | nicht benutzt | 0/1 | low | 0x80000000 | - | - | - | - |
| 0x6A | Relativzeit | Sek | - | unsigned int | - | 1 | 1 | 0 |
| 0x80 | Testfall Fehler Master | 0-n | low | 0x000000FF | TestCaseMasterFailed | - | - | - |
| 0x81 | Testfall Fehler Slave | 0-n | low | 0x0000FF00 | TestCaseSlaveFailed | - | - | - |
| 0x82 | Block number Data Error | 0-n | low | 0x00FF0000 | BlockNumberDataError | - | - | - |
| 0x83 | Block number Soft Error | 0-n | low | 0xFF000000 | BlockNumberSoftError | - | - | - |
| 0x85 | Relativzeit | Sek | - | unsigned int | - | 1 | 1 | 0 |
| 0x86 | Klemme 30 Motor Spannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x87 | Zuendung Spannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x88 | RDZ | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x89 | Leiterplatten Temperatur | Grad Celsius | - | unsigned char | - | 10 | 1 | 0 |
| 0x8A | Motor Ueberwachung Spannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x90 | Taste Zustand digital S1 | 0-n | low | 0x00000003 | S1 | - | - | - |
| 0x91 | Taste Zustand digital S2 | 0-n | low | 0x0000000C | S2 | - | - | - |
| 0x92 | Taste Zustand digital S3 | 0-n | low | 0x00000030 | S3 | - | - | - |
| 0x93 | Taste Zustand digital S4 | 0-n | low | 0x000000C0 | S4 | - | - | - |
| 0x94 | Motor Zustand | 0-n | low | 0x00000700 | Motor_States | - | - | - |
| 0x95 | Motor blockiert | 0/1 | low | 0x00000800 | - | - | - | - |
| 0x96 | Motor Unterspannung | 0/1 | low | 0x00001000 | - | - | - | - |
| 0x97 | Motor Strom | 0/1 | low | 0x00002000 | - | - | - | - |
| 0x98 | Position Handverstellung | 0/1 | low | 0x00004000 | - | - | - | - |
| 0x99 | Nullposition kalibriert | 0/1 | low | 0x00008000 | - | - | - | - |
| 0x9A | Anziehen Taste gedrueckt | 0/1 | low | 0x00010000 | - | - | - | - |
| 0x9B | Loesen Taste gedrueckt | 0/1 | low | 0x00020000 | - | - | - | - |
| 0x9C | SCS active | 0/1 | low | 0x00040000 | - | - | - | - |
| 0x9D | Zuendung | 0/1 | low | 0x00080000 | - | - | - | - |
| 0x9E | Unterspannung | 0/1 | low | 0x00100000 | - | - | - | - |
| 0x9F | Aktuator Zustand | 0-n | low | 0x00E00000 | Actuator_States | - | - | - |
| 0xA0 | Stilllegungsstufen | 0-n | low | 0x07000000 | Activity_Mode | - | - | - |
| 0xA1 | LOFO_EMF | 0-n | low | 0x18000000 | LOFO_EMF | - | - | - |
| 0xA2 | ENB_STG_ACT | 0-n | low | 0x60000000 | ENB_STG_ACT | - | - | - |
| 0xA3 | HW Freigabe Anziehen | 0-n | low | 0x80000000 | Apply_Permission | - | - | - |
| 0xA5 | MILE_KM ungueltig | 0/1 | low | 0x00000001 | - | - | - | - |
| 0xA6 | ENB_STG_ACT 1 entspricht ungueltig | 0/1 | low | 0x00000002 | - | - | - | - |
| 0xA7 | LOFO_EMF 1 entspricht ungueltig | 0/1 | low | 0x00000004 | - | - | - | - |
| 0xA8 | ST_BRG_DYN_2 1 entspricht ungueltig | 0/1 | low | 0x00000008 | - | - | - | - |
| 0xA9 | ST_CFFU_EMF_2 1 entspricht ungueltig | 0/1 | low | 0x00000010 | - | - | - | - |
| 0xAA | ST_HYD_RETA_2 1 entspricht ungueltig | 0/1 | low | 0x00000020 | - | - | - | - |
| 0xAB | RQ_PPOS_GRB_2 1 entspricht ungueltig | 0/1 | low | 0x00000040 | - | - | - | - |
| 0xAC | ST_VEH_DVCO 1 entspricht ungueltig | 0/1 | low | 0x00000080 | - | - | - | - |
| 0xAD | V_VEH 1 entspricht ungueltig | 0/1 | low | 0x00000100 | - | - | - | - |
| 0xAE | ST_INTF_DSC_EMF 1 entspricht ungueltig | 0/1 | low | 0x00000200 | - | - | - | - |
| 0xAF | ST_KEY_PLGD 1 entspricht ungueltig | 0/1 | low | 0x00000400 | - | - | - | - |
| 0xB0 | ST_KL_15 1 entspricht ungueltig | 0/1 | low | 0x00000800 | - | - | - | - |
| 0xB1 | ST_KL_R 1 entspricht ungueltig | 0/1 | low | 0x00001000 | - | - | - | - |
| 0xB2 | RPM_GRB_NEGL 1 entspricht ungueltig | 0/1 | low | 0x00002000 | - | - | - | - |
| 0xB3 | ST_KL_50 1 entspricht ungueltig | 0/1 | low | 0x00004000 | - | - | - | - |
| 0xB4 | ST_CT_BRPD 1 entspricht ungueltig | 0/1 | low | 0x00008000 | - | - | - | - |
| 0xB5 | BRP1 entspricht ungueltig | 0/1 | low | 0x00010000 | - | - | - | - |
| 0xB6 | ST_GR_GRB 1 entspricht ungueltig | 0/1 | low | 0x00020000 | - | - | - | - |
| 0xB7 | FLLUPT_GPWSUP1 entspricht ungueltig | 0/1 | low | 0x00040000 | - | - | - | - |
| 0xB8 | T_SEC_COU_REL1 entspricht ungueltig | 0/1 | low | 0x00080000 | - | - | - | - |
| 0xB9 | nicht benutzt | 0/1 | low | 0x00100000 | - | - | - | - |
| 0xBA | nicht benutzt | 0/1 | low | 0x00200000 | - | - | - | - |
| 0xBB | nicht benutzt | 0/1 | low | 0x00400000 | - | - | - | - |
| 0xBC | nicht benutzt | 0/1 | low | 0x00800000 | - | - | - | - |
| 0xBD | SlaveGeschwindigkeit | 0-n | low | 0x03000000 | Slave_Geschwindigkeit | - | - | - |
| 0xBE | SlaveStellanforderung | 0-n | low | 0x0C000000 | Slave_Stellanforderung | - | - | - |
| 0xBF | SlaveGetriebedaten | 0-n | low | 0x30000000 | Slave_Getriebedaten | - | - | - |
| 0xC0 | SlaveKlemmenstatus | 0-n | low | 0xC0000000 | Slave_Klemmenstatus | - | - | - |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x600B | 0x0073 | 0x0072 | 0x0071 | 0x0070 |
| 0x600C | 0x0014 | 0x0013 | 0x0012 | 0x0011 |
| 0x600D | 0x0073 | 0x0072 | 0x0071 | 0x0070 |
| 0x600E | 0x007C | 0x007B | 0x007A | 0x0079 |
| 0x600F | 0xFFFF | 0xFFFF | 0x001C | 0x001B |
| 0x6010 | 0x0017 | 0xFFFF | 0x007E | 0x007D |
| 0x6011 | 0xFFFF | 0x0018 | 0x0019 | 0x001A |
| 0x6012 | 0xFFFF | 0xFFFF | 0x001C | 0x001B |
| 0x6013 | 0x001F | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6014 | 0x0082 | 0x0081 | 0x0080 | 0x007F |
| 0x6015 | 0xFFFF | 0x0081 | 0x0080 | 0x007F |
| 0x6016 | 0xFFFF | 0xFFFF | 0x0028 | 0x0027 |
| 0x6017 | 0xFFFF | 0x0032 | 0x0031 | 0x0030 |
| 0x6018 | 0xFFFF | 0xFFFF | 0x0022 | 0x0020 |
| 0x6019 | 0x0010 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x601A | 0x0078 | 0x0077 | 0x0076 | 0x0075 |
| 0x601B | 0x0010 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x601C | 0x0010 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x601D | 0x0010 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x601E | 0x0010 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6020 | 0x0010 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6021 | 0x0015 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6022 | 0xFFFF | 0x0004 | 0xFFFF | 0x0001 |
| 0x6023 | 0x0043 | 0x0042 | 0x0041 | 0x0040 |
| 0x6024 | 0x0074 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x6025 | 0x0017 | 0x0085 | 0x0084 | 0x0083 |
| 0x6031 | 0xFFFF | 0x0050 | 0xFFFF | 0xFFFF |
| 0x6032 | 0x0053 | 0x0052 | 0xFFFF | 0x0051 |
| 0x6034 | 0x0057 | 0x0056 | 0x0055 | 0x0054 |
| 0x6040 | 0xFFFF | 0x0062 | 0xFFFF | 0xFFFF |
| 0x6041 | 0xFFFF | 0x0060 | 0xFFFF | 0xFFFF |
| 0x6042 | 0xFFFF | 0xFFFF | 0x0063 | 0xFFFF |
| 0x6043 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0061 |
| 0x6044 | 0xFFFF | 0x0069 | 0xFFFF | 0xFFFF |
| 0x6045 | 0xFFFF | 0x0010 | 0xFFFF | 0xFFFF |
| 0xD387 | 0xFFFF | 0x0066 | 0x0065 | 0xFFFF |
| 0xD394 | 0x001E | 0x0069 | 0x0068 | 0xFFFF |
| 0xD395 | 0x001E | 0x0069 | 0x0068 | 0xFFFF |
| 0xD397 | 0x001E | 0x0069 | 0x0068 | 0xFFFF |
| 0xD398 | 0x001E | 0x0069 | 0x0068 | 0xFFFF |
| 0xD399 | 0x001E | 0x0069 | 0x0068 | 0xFFFF |
| 0xD39A | 0xFFFF | 0x0069 | 0xFFFF | 0xFFFF |
| default | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0010 | unplausibles Signal |
| 0x0011 | Kurzschluss nach Ubat (S1...S4) |
| 0x0012 | Kurzschluss nach GND (S1...S4) |
| 0x0013 | Leitungsbruch (S1...S4) |
| 0x0014 | Kommunikationsfehler Slave |
| 0x0015 | unplausibel |
| 0x0016 | 2 aus 3 Entscheidung |
| 0x0017 | SCS Leitung unplausibel |
| 0x0018 | Motor getrennt |
| 0x0019 | Motor Ueberstrom |
| 0x001A | Motor Ruhestrom |
| 0x001B | Kurzschluss nach Ubat |
| 0x001C | Kurzschluss nach Masse |
| 0x001D | EEPROM Datenfehler |
| 0x001E | Pruefsummenfehler |
| 0x001F | Uebertemperatur Leiterplatte |
| 0x0020 | SV |
| 0x0021 | OEM |
| 0x0022 | AM |
| 0x0023 | Relais A defekt |
| 0x0024 | Relais B defekt |
| 0x0025 | MOSFET getrennt |
| 0x0026 | MOSFET kurzgeschlossen |
| 0x0027 | Fehler bei Slave-Programmierung |
| 0x0028 | Master-Slave SW-Versions-Widerspruch |
| 0x0030 | Treiberfehler |
| 0x0031 | Protokollfehler |
| 0x0032 | Softwarefehler |
| 0x0040 | Ueberspannung |
| 0x0041 | Unterspannung |
| 0x0042 | KL30 Motor Versorgung fehlt |
| 0x0043 | KL30 Motor Versorgung ungueltig |
| 0x0050 | Notentriegelung festgestellt |
| 0x0051 | fehlerhaftes Signal |
| 0x0052 | physikalisch unplausibel |
| 0x0053 | Kalibrierung unplausibel |
| 0x0054 | Release_Timeout_Ziel |
| 0x0055 | Release_Timeout_Montageposition |
| 0x0056 | Apply_Timeout_Montageposition |
| 0x0057 | Apply_Timeout_Ziel |
| 0x0060 | CAN EHB nicht verfügbar |
| 0x0061 | EHB Anforderung nicht möglich |
| 0x0062 | EHB nicht verfügbar |
| 0x0063 | EHB Nachzieh-Anforderung |
| 0x0064 | Passiv-Fehler (TEC/REC) |
| 0x0065 | Status Bus ausgeschaltet |
| 0x0066 | keine CAN-Nachrichten |
| 0x0067 | ungueltiges CAN-Signal |
| 0x0068 | Alive-Zaehler falsch |
| 0x0069 | Timeout |
| 0x0070 | Kommunikationsfehler mit EEPROM |
| 0x0071 | Programmfehler |
| 0x0072 | Datenfehler |
| 0x0073 | Interfacefehler |
| 0x0074 | Datum außerhalb gültigen Bereich |
| 0x0075 | CanGetriebadaten186 Fehler |
| 0x0076 | CanKlemmenstatus304 Fehler |
| 0x0077 | CanStellanfEmf423 Fehler |
| 0x0078 | CanGeschwindigkeit416 Fehler |
| 0x0079 | Relais defekt |
| 0x007A | Motor Kurzschluss / Masseschluss |
| 0x007B | Mosfet defekt |
| 0x007C | Kommunikationsproblem mit Slave(SCS Leitung) |
| 0x007D | statischer SCS Test |
| 0x007E | dynamischer SCS Test |
| 0x007F | ROM Test / RAM Test |
| 0x0080 | Stack Test |
| 0x0081 | PFM Test |
| 0x0082 | OsekTask Test |
| 0x0083 | SPI Protokoll neg. Resp. |
| 0x0084 | falsche Antwort vom Slave |
| 0x0085 | Timeout Antwort vom Slave |
| 0xFFFF | unbekannte Fehlerart |

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

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### ACTUATOR_STATES

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | undefiniert |
| 0x00200000 | Geloest |
| 0x00400000 | Angezogen |
| 0x00600000 | waehrend Loesen |
| 0x00800000 | waehrend Anziehen |
| 0x00A00000 | Montage Position |
| 0x00C00000 | tbd |
| 0x00E00000 | unbekannter Fehler |

### MOTOR_STATES

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | Initialisierung |
| 0x00000100 | unbeschaeftigt |
| 0x00000200 | Anziehen_warten auf_Relais |
| 0x00000300 | Anziehen |
| 0x00000400 | Loesen_warten auf_Relais |
| 0x00000500 | Loesen |
| 0x00000600 | warten auf_Motor_Stopp |
| 0x00000700 | Kalibrierung |
| 0xFFFFFFFF | unbekannter Fehler |

### UMWELTBEDINGUNG_D_1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x80 | 0x81 | 0x82 | 0x83 |

### UMWELTBEDINGUNG_A_1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x85 | 0x86 | 0x87 | 0x88 | 0x89 | 0x8A |

### UMWELTBEDINGUNG_D_2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | 0x90 | 0x91 | 0x92 | 0x93 | 0x94 | 0x95 | 0x96 | 0x97 | 0x98 | 0x99 | 0x9A | 0x9B | 0x9C | 0x9D | 0x9E | 0x9F | 0xA0 | 0xA1 | 0xA2 | 0xA3 |

### ACTIVITY_MODE

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | Initialisierung |
| 0x01000000 | Normaler Modus |
| 0x02000000 | Eingeschraenkter Modus |
| 0x03000000 | Normaler inaktiver Modus |
| 0x04000000 | Eingeschraenkter inaktiver Modus |
| 0xFFFFFFFF | unbekannter Fehler |

### LOFO_EMF

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | keine Anforderung |
| 0x08000000 | Loesen Anforderung |
| 0x10000000 | Anziehen Anforderung |
| 0x18000000 | Signal ungueltig |
| 0xFFFFFFFF | unbekannter Fehler |

### ENB_STG_ACT

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | Freigabe Nachziehen |
| 0x20000000 | Stellvorgang sperren |
| 0x40000000 | Stellvorgang erlauben |
| 0x60000000 | Signal ungueltig |
| 0xFFFFFFFF | unbekannter Fehler |

### APPLY_PERMISSION

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | V > V_Anziehen_erlaubt |
| 0x80000000 | V < V_Anziehen_erlaubt |
| 0xFFFFFFFF | unbekannter Fehler |

### UMWELTBEDINGUNG_D_3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 28 | 0xA5 | 0xA6 | 0xA7 | 0xA8 | 0xA9 | 0xAA | 0xAB | 0xAC | 0xAD | 0xAE | 0xAF | 0xB0 | 0xB1 | 0xB2 | 0xB3 | 0xB4 | 0xB5 | 0xB6 | 0xB7 | 0xB8 | 0xB9 | 0xBA | 0xBB | 0xBC | 0xBD | 0xBE | 0xBF | 0xC0 |

### TESTCASEMASTERFAILED

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | alle Test ok |
| 0x00000001 | RAMTest |
| 0x00000002 | ROM Test Applikation |
| 0x00000003 | ROM Test Bootloader |
| 0x00000004 | Stack Test |
| 0x00000005 | Program Counter |
| 0x00000006 | Trap |
| 0x00000007 | Program Flow Monitoring |
| 0x00000008 | Instruction Test |
| 0x00000009 | Shutdown Label |
| 0x0000000A | OS Task Stack |
| 0xFFFFFFFF | unbekannter Fehler |

### TESTCASESLAVEFAILED

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | alle Test ok |
| 0x00000100 | RAMTest |
| 0x00000200 | ROM Test |
| 0x00000300 | unused |
| 0x00000400 | Stack Test |
| 0x00000500 | Program Counter |
| 0x00000600 | unused |
| 0x00000700 | Program Flow Monitoring |
| 0x00000800 | Instruction Test |
| 0xFFFFFFFF | unbekannter Fehler |

### SLAVE_GESCHWINDIGKEIT

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | ok |
| 0x01000000 | alive checksum |
| 0x02000000 | signal |
| 0x03000000 | timeout |
| 0xFFFFFFFF | unbekannter Fehler |

### SLAVE_STELLANFORDERUNG

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | ok |
| 0x04000000 | alive checksum |
| 0x08000000 | signal |
| 0x0C000000 | timeout |
| 0xFFFFFFFF | unbekannter Fehler |

### SLAVE_GETRIEBEDATEN

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | ok |
| 0x10000000 | alive checksum |
| 0x20000000 | signal |
| 0x30000000 | timeout |
| 0xFFFFFFFF | unbekannter Fehler |

### SLAVE_KLEMMENSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | ok |
| 0x40000000 | alive checksum |
| 0x80000000 | signal |
| 0xC0000000 | timeout |
| 0xFFFFFFFF | unbekannter Fehler |

### BLOCKNUMBERDATAERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | 0 |
| 0x00010000 | 1 |
| 0x00020000 | 2 |
| 0x00030000 | 3 |
| 0x00040000 | 4 |
| 0x00050000 | 5 |
| 0x00060000 | 6 |
| 0x00070000 | 7 |
| 0x00080000 | 8 |
| 0x00090000 | 9 |
| 0x000A0000 | 10 |
| 0x000B0000 | 11 |
| 0x000C0000 | 12 |
| 0x000D0000 | 13 |
| 0x000E0000 | 14 |
| 0x000F0000 | 15 |
| 0x00100000 | 16 |
| 0x00110000 | 17 |
| 0x00120000 | 18 |
| 0x00130000 | 19 |
| 0x00140000 | 20 |
| 0x00150000 | 21 |
| 0x00160000 | 22 |
| 0x00170000 | 23 |
| 0x00180000 | 24 |
| 0x00190000 | 25 |
| 0x001A0000 | 26 |
| 0x001B0000 | 27 |
| 0x001C0000 | 28 |
| 0x001D0000 | 29 |
| 0x001E0000 | 30 |
| 0x001F0000 | 31 |
| 0x00200000 | 32 |
| 0x00210000 | 33 |
| 0x00220000 | 34 |
| 0xFFFFFFFF | unbekannter Fehler |

### BLOCKNUMBERSOFTERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | 0 |
| 0x01000000 | 1 |
| 0x02000000 | 2 |
| 0x03000000 | 3 |
| 0x04000000 | 4 |
| 0x05000000 | 5 |
| 0x06000000 | 6 |
| 0x07000000 | 7 |
| 0x08000000 | 8 |
| 0x09000000 | 9 |
| 0x0A000000 | 10 |
| 0x0B000000 | 11 |
| 0x0C000000 | 12 |
| 0x0D000000 | 13 |
| 0x0E000000 | 14 |
| 0x0F000000 | 15 |
| 0x10000000 | 16 |
| 0x11000000 | 17 |
| 0x12000000 | 18 |
| 0x13000000 | 19 |
| 0x14000000 | 20 |
| 0x15000000 | 21 |
| 0x16000000 | 22 |
| 0x17000000 | 23 |
| 0x18000000 | 24 |
| 0x19000000 | 25 |
| 0x1A000000 | 26 |
| 0x1B000000 | 27 |
| 0x1C000000 | 28 |
| 0x1D000000 | 29 |
| 0x1E000000 | 30 |
| 0x1F000000 | 31 |
| 0x20000000 | 32 |
| 0x21000000 | 33 |
| 0x22000000 | 34 |
| 0xFFFFFFFF | unbekannter Fehler |

### S1

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | open and no failure |
| 0x00000001 | closed and no failure |
| 0x00000002 | short circuit to GND or broken wire |
| 0x00000003 | short circuit to Ubat |

### S2

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | open and no failure |
| 0x00000004 | closed and no failure |
| 0x00000008 | short circuit to GND |
| 0x0000000C | broken wire or short circuit to Ubat |

### S3

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | open and no failure |
| 0x00000010 | closed and no failure |
| 0x00000020 | short circuit to GND |
| 0x00000030 | broken wire or short circuit to Ubat |

### S4

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | open and no failure |
| 0x00000040 | closed and no failure |
| 0x00000080 | short circuit to GND |
| 0x000000C0 | broken wire or short circuit to Ubat |
