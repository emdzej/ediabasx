# cmediar.prg

## General

|  |  |
| --- | --- |
| File | cmediar.prg |
| Type | PRG |
| Jobs | 109 |
| Tables | 40 |
| Origin | BMW EI-44 Hr.Mallinson |
| Revision | 5.020 |
| Author | Harman/Becker EDSB1 GRichter, HaysAG EI44 Hr.Bubb |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Combox |  |  |
| ORIGIN | string | BMW EI-44 Hr.Mallinson |  |  |
| REVISION | string | 5.020 |  |  |
| AUTHOR | string | Harman/Becker EDSB1 GRichter, HaysAG EI44 Hr.Bubb |  |  |
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

### MOST_VERSION_LESEN

Auslesen von Most Version KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $A0 MOSTVersion MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_MOST_3DB

Auslesen des Status der Lichtleistungsabsenkung KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_MOST_3DB

Lichtleistungsabsenkung einschalten KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch $00 S1 geoeffnet = 3dB Absenkung MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_WAKE_UP_STATUS

Auslesen des Status WakeupStatus KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_ABILITY_TO_WAKE

Auslesen des Status AbilityToWake KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_ABILITY_TO_WAKE

AbilityToWake einstellen KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD AbilityToWake $00 of, $01 on, $02 critical MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter AbilityToWake Modus table  AbilityToWake Status Defaultwert: DEFAULT 00 |

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

### STEUERN_BT

KWP2000: $31   StartRoutineByLocalIdentifier $72   STEUERN_BT

| Name | Type | Description |
| --- | --- | --- |
| ARG_BT | char | 0x00 BT not activated 0x01 BT activated |

### STATUS_BT

KWP2000: $33   RoutineResultsByLocalIdentifier $72   STATUS_BT

_No arguments._

### STEUERN_BT_ERKENNUNGSMODUS

KWP2000: $31   StartRoutineByLocalIdentifier $73   STEUERN_BT_ERKENNUNGSMODUS

| Name | Type | Description |
| --- | --- | --- |
| ARG_BT_ERKENNUNGSMODUS | char | 0x00 BT Discovery Mode off 0x01 BT Discovery Mode on |

### STATUS_BT_ERKENNUNGSMODUS

KWP2000: $33   RoutineResultsByLocalIdentifier $73   STATUS_BT_ERKENNUNGSMODUS

_No arguments._

### STEUERN_BT_GERAETEADRESSE

KWP2000: $3B   WriteDataByLocalIdentifier $79   STEUERN_BT_GERAETEADRESSE

| Name | Type | Description |
| --- | --- | --- |
| ARG_BT_GERAETEADRESSE | string | Bereich: 0-255 bzw 0-0xFF 6 Byte BT Adresse |

### STATUS_BT_GERAETEADRESSE

KWP2000: $21		ReadDataByLocalIdentifier $79		STATUS_BT_GERAETEADRESSE

_No arguments._

### STEUERN_BT_PASSKEY

KWP2000: $3B   WriteDataByLocalIdentifier $7A   STEUERN_BT_PASSKEY

| Name | Type | Description |
| --- | --- | --- |
| ARG_BT_PASSKEY | string | Bereich: 0-255 bzw 0-0xFF nullterminierter ASCIIstring_a : Passkey max. 16 digits coded in UTF-8 (max.16bytes) |

### STATUS_BT_PASSKEY

KWP2000: $21		ReadDataByLocalIdentifier $7A		STATUS_BT_GERAETEADRESSE

_No arguments._

### STEUERN_BT_GERAETENAME

KWP2000: $3B   WriteDataByLocalIdentifier $7B   STEUERN_BT_GERAETENAME write BT Device Name

| Name | Type | Description |
| --- | --- | --- |
| ARG_BT_GERAETENAME | string | BT User Friendly Name String up to 18 Bytes nullterminiert |

### STATUS_BT_GERAETENAME

KWP2000: $21   ReadDataByLocalIdentifier $7B   STATUS_BT_GERAETENAME read BT Device Name

_No arguments._

### STATUS_BT_READ_PHONE_ID

Returns information about the phone selected as argument

| Name | Type | Description |
| --- | --- | --- |
| ARG_EINTRAG_NR | unsigned char | Phone from which the information must be read out (possible values: 1, 2, 3 and 4) |

### STEUERN_BT_DELETE_ALL_PHONE_ID

KWP2000: $31   StartRoutineByLocalIdentifier $74   Delete all Phone ID Delete all Mobile Information stored

_No arguments._

### STEUERN_RESET_TO_BASIC_STATE

KWP2000:$31   StartRoutineByLocalIdentifier $75   STEUERN_RESET_TO_BASIC_STATE Delete Personal information

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATA_TO_RESET | unsigned long | delete Personal Information as specified 0x00000000 alle 0x00000001 - list of paired devices call lists voice tags (inclusive phonebooks) 0x00000002 - Emails 0x00000004 - SMS 0x00000008 - Music lists 0x00000010 - PIM 0x00000020- …XX (FOR future use) |

### STATUS_RESET_TO_BASIC_STATE

KWP2000:$33     RoutineResultsByLocalIdentifier $75     STATUS_RESET_TO_BASIC_STATE each byte has to say: 0x00 OK 0x01 Error occured (could not be deleted completelely) 0x02 Not Requested 0x03 Running

_No arguments._

### STATUS_VERSION_ID_LESEN

KWP2000: $21   ReadDataByLocalIdentifier $78   Status_Version_ID_Lesen

_No arguments._

### STATUS_SVK_LESEN

KWP2000: $21   ReadDataByLocalIdentifier $FB   SVK_Lesen

_No arguments._

### STATUS_USB_HUB_TEST

KWP:     $21   ReadDataByLocalIdentifier $7E   STATUS_USB_HUB_TEST test if a hub is present on the first and second USB ports

_No arguments._

### STATUS_USB_TEST_TEL

KWP2000: $31   StartRoutineByLocalIdentifier $FB   systemSupplierSpecific $03   Layer03 $A06A Status USB Test

_No arguments._

### STEUERN_USB_TEST_TEL

KWP2000: $31   StartRoutineByLocalIdentifier $FB   systemSupplierSpecific $01   Layer01 $A06A Steuern USB Test

| Name | Type | Description |
| --- | --- | --- |
| ARG_VENDOR_ID_KDZ | string | Vendor ID des USB Device am Kundenzugang z.B. F2E3 |
| ARG_PRODUCT_ID_KDZ | string | Prudukt ID des USB Device am Kundenzugang z.B. A1AB |
| ARG_VENDOR_ID_SIA | string | Vendor ID des USB Device am Snap-In Adapter z.B. F2E3 |
| ARG_PRODUCT_ID_SIA | string | Produkt ID des USB Device am Snap-In Adapter z.B. A1AB |

### STEUERN_TEST_AUXVERBINDUNG

KWP2000: $31 StartRoutineByLocalIdentifier $48 STEUERN_TEST_AUXVERBINDUNG

| Name | Type | Description |
| --- | --- | --- |
| ARG_VERBINDUNG | unsigned int | number of connection |

### STEUERN_TEST_VERBAU_TEL

KWP2000: $31 StartRoutineByLocalIdentifier $FB SYSTEM_SUPPLIER_SPECIFIC $01A050 STEUERN_TEST_VERBAU_TEL

| Name | Type | Description |
| --- | --- | --- |
| ARG_VERBAU_ROUTINE | unsigned long | tested device number |

### STATUS_TEST_VERBAU_TEL

KWP2000: $31     StartRoutineByLocalIdentifier $FB     SYSTEM_SUPPLIER_SPECIFIC $03A050 STATUS_TEST_VERBAU_TEL

_No arguments._

### STATUS_SELBSTTEST

KWP2000: $33   RoutineResultsByLocalIdentifie $04   STATUS_SELBSTTEST

_No arguments._

### STEUERN_SELBSTTEST

KWP2000: $31   StartRoutineByLocalIdentifier $04   STATUS_SELBSTTEST

| Name | Type | Description |
| --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | unsigned long | Testroutin wich will be started 0x00000000 alle Selbstestroutinen 0x00000001 Flash Checksummenpruefung 0x00000002 INIC BuildIn-Test 0x00000004 USB 0x00000008 FPGA 0x00000010 Bluetooth Chip 0x00000020 DRM Chip |

### LESEN_DAS

KWP2000: $31       readDataByIdentifier $FB034000 LESEN_DAS Auslesen des Default Access Set (DAS)

| Name | Type | Description |
| --- | --- | --- |
| ARG_SMNC | string | Mobile Network Code von der SIM Karte, z.B: T-Online hat den Code 001 |
| ARG_SMCC | string | Mobile Country Code von der SIM Karte, z.B: Deutschland hat den Code 262 |
| ARG_NMNC | string | Mobile Network Code vom Netz, z.B: T-Online hat den Code 001 |
| ARG_NMCC | string | Mobile Country Code vom Netz, z.B: Deutschland hat den Code 262 |

### STEUERN_LAST_CONNECTION_TEL

KWP2000: $3B   readDataByLocalIdentifier $FD   STEUERN_LAST_CONNECTION_TEL Auslesen des Status (SIM Status und IP Adresse) der letzte Verbindung

| Name | Type | Description |
| --- | --- | --- |
| ARG_DEVICE | string | beschreibt welches Gerät für das die letze Verbindung abgefragt wird. 1: Bluetooth Telefon 2: interne NAD Modul |

### STATUS_LAST_CONNECTION_TEL

KWP2000: $21   readDataByLocalIdentifier $FD   Status_Last_Connection_Tel beschreibt Status der SIM Karte

_No arguments._

### STEUERN_PROVISIONING_TEL

KWP2000: $31   StartRoutineByLocalIdentifier $39   STEUERN_PROVISIONING_TEL startet einen provisioning request

_No arguments._

### STATUS_PROVISIONING_TEL

KWP2000: $33   RoutineResultsByLocalIdentifier $FA   STATUS_PROVISIONING_TEL Status des Provisionierungsprozess und Version von den Provisionierungsdaten

_No arguments._

### LESEN_CONFIG_INIT_VALUES

KWP2000: $31       readDataByIdentifier $FB034002 LESEN_CONFIG_INIT_VALUES

_No arguments._

### LESEN_DASVP

KWP2000: $31                    readDataByIdentifier $FB034003      LESEN_DASVP Auslesen des Default Configuration Vehicle Profile

_No arguments._

### LESEN_CONTROL_LIST_MAINBOARD

KWP2000: $22   readDataByIdentifier $F001 LESEN_CONTROL_LIST_MAINBOARD

_No arguments._

### SCHREIBEN_OTA

UDS:     $31   RoutineControl $FB   StatusRoutine $01   StartRoutine $4001 SCHREIBEN_OTA Dieser Job schreibt ein Over The Air (OTA) Datensatz

| Name | Type | Description |
| --- | --- | --- |
| ARG_PFAD | string | Pfad |

### LESEN_OTA

KWP2000: $31       readDataByIdentifier $FB034001 LESEN_OTA Auslesen vom Over The Air (OTA) Datensatz

_No arguments._

### LESEN_DPAS

KWP2000: $31       readDataByIdentifier $FB034004 LESEN_DPAS Der Job s liest eine Default Provisioning Access Configuration mit einem spezifizierten Index und schreibt das herunterladene XML File in dem eingegebene Pfad.

_No arguments._

### STEUERN_RESET_TO_DEFAULT_CONFIG

KWP:     $31   RoutineControl $FB   UserDefined $01   StartRoutine $A052 STEUERN_RESET_TO_DEFAULT_CONFIG Setzt die standard Telematik Konfigurationswerte zurück und löscht die OTA (Over The Air) Daten

_No arguments._

### STATUS_RESET_TO_DEFAULT_CONFIG

KWP:     $31   RoutineControl $FB   UserDefined $03   ResultRoutine $A052 STEUERN_RESET_TO_DEFAULT_CONFIG Setzt die standard Telematik Konfigurationswerte zurück

_No arguments._

### SCHREIBEN_BMW_ZERTIFIKATE

KWP:     $31   RoutineControl $FB   SystemSupplierSpecific $01   StatusRoutine $A053 SCHREIBEN_BMW_ZERTIFIKATE

| Name | Type | Description |
| --- | --- | --- |
| ARG_PFAD | string | Pfad |

### SCHREIBEN_BROWSER_ZERTIFIKATE

KWP:     $31   RoutineControl $FB   SystemSupplierSpecific $01   StatusRoutine $A054 SCHREIBEN_BROWSER_ZERTIFIKATE

| Name | Type | Description |
| --- | --- | --- |
| ARG_PFAD | string | Pfad |

### STEUERN_REMOVE_CUSTOMER_UPDATES

KWP2000: $31   StartRoutineByLocalIdentifier $78   STEUERN_REMOVE_CUSTOMER_UPDATES

_No arguments._

### STATUS_SWUP_INSTALLED

KWP2000: $21   	ReadDataByLocalIdentifier $76 		STATUS_SWUP_INSTALLED Auslesen des installierten Software Updates. Für jeden Eintrag werden Programmierdatum, Kilometerstand, Werte und Text der Prozessklasse des installierten Updates, SGBM ID und Version und Status des installierten Updates werden gespeichert.

_No arguments._

### STATUS_SWUP_INSTALLATION_HISTORY

KWP2000: $21 	ReadDataByLocalIdentifier $77 	STATUS_SWUP_INSTALLATION_HISTORY Auslesen der letzten Software Update Installationen. Für jeden Eintrag werden Zeit, Operationtype, SWIP ID, ECU SW VID und Operationcode gespeichert.

_No arguments._

### STATUS_USB_STACK_INFO_FOR_DEVICE

Reads out logistical information about the four last connected USB devices four last connected IPOD Players, four last connected MTP Players and four last unrecognized USB devices

| Name | Type | Description |
| --- | --- | --- |
| ARG_TYPE | unsigned char | UMS-type of requested Info 0x01 USB Stick 0x02 IPOD 0x03 MTP Player 0x04 UNKNOWN |

### STATUS_TEST_AUXVERBINDUNG

Returns the results of the impedance measurement performed with steuern_test_aux_verbindung

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### STATUS_REMOTE_SERVICES_LOG

STATUS_REMOTE_SERVICES_LOG KWP2000: $21 ReadDataByLocalIdentifier $75 recordLocalIdentifier Modus   : Default

_No arguments._

### STATUS_POWERMANAGEMENT_SH4

Auslesen der gespeicherten internen Powermanagement Transitionen 

| Name | Type | Description |
| --- | --- | --- |
| ARG_DATASET | unsigned char | Dataset number requested Index starts with 0x01 |

### STATUS_BT_GEKOPPELTE_GERAETE_LESEN

Returns the Bluetooth address of the four last connected devices

_No arguments._

### STATUS_TDA_AKTIVIERUNG

Reads out the actual Baureihe of the Gateway table

_No arguments._

### STATUS_USB_STECKZYKLEN

Returns how many times a USB device has been plugged in the USB interface or in the snap in adapter

_No arguments._

### STEUERN_DELETE_A4A_STRING

Reads out the actual Baureihe of the Gateway table

_No arguments._

### STATUS_DELETE_A4A_STRING

This job shall return if the Protocol String com.bmw.a4a is present

_No arguments._

### STEUERN_TEST_ANTENNE_TEL

Performs an impedance measurement of one, some or all antennas

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned long | Bitcombination of antennas to be tested values from table TAntenneCMEDIA |

### STATUS_TEST_ANTENNE_TEL

Returns the results of the impedance measurements performed with steuern_test_antenne_tel

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

### ABILITY_TO_WAKE

| ABILITY_TO_WAKE_NR | ABILITY_TO_WAKE_MODE |
| --- | --- |
| 0x00 | off |
| 0x01 | on |
| 0x02 | critical |
| 0xXY | unbekannter Mode |

### MOST_3DB

| MOST_3DB_NR | MOST_3DB_MODE |
| --- | --- |
| 0x00 | Lichtleistung abgesenkt |
| 0x01 | Volle Lichtleistung |
| 0xXY | unbekannter Mode |

### WAKE_UP_STATUS

| WAKE_UP_STATUS_NR | WAKE_UP_STATUS_MODE |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | SG hat geweckt |
| 0x02 | SG wurde geweckt |
| 0xXY | unbekannter Mode |

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
| 0xD690 | 0x06 | - | - | - |
| 0xA8FA | 0x170C | - | - | - |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Logische-Knotenadresse | Hex | high | unsigned int | - | - | - | - |
| 0x02 | FBlockID | Hex | -- | unsigned char | - | - | - | - |
| 0x03 | InstID | Hex | -- | unsigned char | - | - | - | - |
| 0x04 | FktID | Hex | high | unsigned int | - | - | - | - |
| 0x05 | Diagnoseadresse | Hex | -- | unsigned char | - | - | - | - |
| 0x06 | NPR | Hex | -- | unsigned char | - | - | - | - |
| 0x170C | Versorgungsspannung am Eingang des SG | mV | high | unsigned int | - | - | - | - |
| 0xFF | unbekannte Umweltbedingung | 1 | -- | unsigned char | - | - | - | - |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
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
| 0xA8EA | 0x05 | - | - | - |
| 0xA8FC | 0x06 | - | - | - |
| 0xA8FD | 0x06 | - | - | - |
| 0xA8FF | 0x06 | - | - | - |
| 0x9312 | 0x170C | - | - | - |
| 0x930B | 0x1709 | - | - | - |
| 0xA80D | 0xF003 | - | - | - |
| 0xA80E | 0xF003 | - | - | - |
| 0xA80F | 0xF003 | - | - | - |
| default | - | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Zieladresse | Hex | high | unsigned int | - | - | - | - |
| 0x02 | FBlockID | Hex | -- | unsigned char | - | - | - | - |
| 0x03 | InstID | Hex | -- | unsigned char | - | - | - | - |
| 0x04 | FktID | Hex | high | unsigned int | - | - | - | - |
| 0x05 | Speicheradresse  | Hex | high | signed long | - | - | - | - |
| 0x06 | BT Adresse | text | - | 6 | - | - | - | - |
| 0x170C | Versorgungsspannung am Eingang des SG | mV | high | unsigned int | - | - | - | - |
| 0x1709 | MOST Message Header | text | - | 6 | - | - | - | - |
| 0xF003 | Spannung am Eingang des Mikrophons | mV | high | unsigned int | - | - | - | - |
| 0xFF | unbekannte Umweltbedingung | 1 | -- | unsigned char | - | - | - | - |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0236 | Energiesparmode aktiv |
| 0xA369 | Flash Speicher Fehler |
| 0xA36A | INIC PCode Fehler |
| 0xA36B | DRM Chip Fehler |
| 0xA36C | USB Chip Fehler |
| 0xA36D | Ethernet Chip Fehler |
| 0xA36E | FPGA Fehler |
| 0xA36F | BlueCore Chip Fehler |
| 0xACC8 | KISU: Speicher oder Filesystem defekt |
| 0xACC9 | KISU: Inkonsistenter System Status |
| 0xACD7 | Unspezifierter Systemdefekt oder inkonsistenter Systemstatus |
| 0xD68E | Obwohl Shutdown (Execute) geschickt wurde, ging das Licht nicht aus |
| 0xD690 | MOST: Ringbruch |
| 0xD691 | Lange und/oder häufige Unlocks |
| 0xD692 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle |
| 0xA8F9 | Software Reset: Überwachungsschaltung hat Reset ausgelöst |
| 0xA8EE | Mikrofon 1: Kurzschluss nach Masse |
| 0xA8F6 | AUX-Verbindung rechts: Kurzschluss nach Masse |
| 0xA8F8 | AUX-Verbindung links: Kurzschluss nach Masse |
| 0xA8F7 | AUX-Verbindung links: Kurzschluss nach Plus |
| 0xA8F5 | AUX-Verbindung rechts: Kurzschluss nach Plus |
| 0xA8F3 | Bluetooth-Antenne: Kurzschluss nach Plus |
| 0xA8ED | Mikrofon 1: Kurzschluss nach Plus |
| 0xA8EC | Hardware Reset |
| 0xA8F4 | Bluetooth-Antenne: Unterbrechung |
| 0xA371 | KISU: Deinstallation nach mehrfachem Reset |
| 0xA8EF | Mikrofon 1: Unterbrechung |
| 0xA8FA | Überspannung |
| 0xA8FB | ungültige Bluetoothadresse |
| 0xA900 | USB-Anschluss: Abschaltung wegen Überlastung |
| 0xA901 | Snap-in-Adapter (USB-Anschluss): Abschaltung wegen Überlastung |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA8E8 | INIC Memory Error |
| 0xA8E9 | Passwort Fehler: Passwort wurde drei mal falsch eingegeben |
| 0xA8EA | HBHK Daten wurden wieder hergestellt |
| 0xA8EB | Filesystem Fehler: Filesystem wurde wieder hergestellt |
| 0xABE9 | Fahrzeug steht nicht |
| 0xABEA | Update Abbruch |
| 0xABEB | MOST Kommunikationsfehler |
| 0xABEC | SWUP Zielplattform antwortet nicht |
| 0xABED | Gerät ausgelastet |
| 0xABF7 | Unspezifizierter Umwelt-Fehler |
| 0xABF8 | Neueste Version schon installiert |
| 0xABF9 | SWUP Package Container veraltet |
| 0xAC07 | Unspezifizierter Versions-Fehler |
| 0xAC08 | Neue I-Stufe nötig |
| 0xAC09 | SWUP - Zielgerät nicht verfügbar |
| 0xAC0A | Abhängigkeiten nicht erfüllt |
| 0xAC0B | Betroffene SWE nicht gefunden |
| 0xAC0C | Pre-Installation Skripte Fehler |
| 0xAC0D | Post-Installation Skripte Fehler |
| 0xAC0E | Fahrgestellnummer stimmt nicht |
| 0xAC17 | Unspezifizierbarer Fehler: Updatekompatibiliät |
| 0xAC18 | SWUP Weiterleitung nicht unterstützt |
| 0xAC19 | Nicht genug RAM |
| 0xAC1A | Nicht genug Flashspeicher |
| 0xAC1B | System überlastet |
| 0xAC1C | SWUP-Paket zu groß |
| 0xAC27 | Unspezifizierbarer Fehler: Ressourcebeschränkungen |
| 0xAC28 | SWIP Signaturverifikation fehlgeschlagen |
| 0xAC29 | SWIP XML-Datei korrupt |
| 0xAC2A | SWUP Hash Value stimmt nicht |
| 0xAC2B | SGBM korrupt oder unerwartetes Format |
| 0xAC2C | SWUP Signaturverifikation fehlgeschlagen |
| 0xAC37 | Unspezifizierter Fehler: Integrität oder Authentisierung |
| 0xAC38 | SWUP Download abgebrochen |
| 0xAC47 | Unspezifizierter Over-The-Air-Fehler |
| 0xAC48 | Keine Deinstallationinformationen verfügbar |
| 0xAC49 | Pre-Deinstallation Skripte Fehler |
| 0xAC4A | Post-Deinstallation Skripte Fehler |
| 0xAC57 | Unspezifierter Deinstallationfehler |
| 0xAC58 | Keine Update-Datei verfügbar |
| 0xAC59 | Update läuft |
| 0xAC5A | USB Gerät nicht angeschlossen |
| 0xAC67 | Unspezifierter Betriebsystemfehler |
| 0xACE7 | Unspezifizierter Fehler |
| 0x930A | MOST: Licht geht unerwartet aus |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist |
| 0x930C | Kurze Unlocks |
| 0x930D | Systemzustand Ok nicht fristgerecht erkannt |
| 0x9310 | Empfängerknoten: hat Nachricht nicht abgenommen; Puffer voll |
| 0x9311 | Keine Fahrzeug VIN vom Bus erhalten |
| 0x9312 | Versorgungsspannung: Mindestwert unterschritten |
| 0xA8FC | BT Linkloss |
| 0xA8FD | DisconnectByDeviceDriver |
| 0xA8FE | InvalidBTAddressOfConnectedDevice |
| 0xA8FF | IdleCatching |
| 0xA80D | Mikrofon 1: Kurzschluss nach Plus |
| 0xA80E | Mikrofon 1: Kurzschluss nach Masse |
| 0xA80F | Mikrofon 1: Unterbrechung |
| 0xAC1D | KISU SWUP Paket oder SWIP Datei Weiterleitung fehlgeschlagen. |
| 0xAC1E | KISU Angefordertes SWUP Paket nicht verfügbar. |
| 0xAC39 | KISU Keine Verbindung für Over-The-Air Update. |
| 0xAC68 | KISU Angefordertes SWUP Paket via Teleservice Update nicht verfügbar. |
| 0xAC69 | KISU SWUP Paket oder SWIP Datei zu groß für die Übertragung via Teleservice Update. |
| 0xAC77 | KISU Unspezifizierter Teleservice Fehler. |
| 0xFFFF | unbekannter Fehlerort |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TVERBAUROUTINETEL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0x00000001 | Bluetooth |
| 0x00000008 | Ethernet |
| 0x00000010 | AuxIn |
| 0x00000020 | Microphone1 |
| 0x00000040 | Microphone2 |
| 0xFFFFFFFF | Nicht definiert |

### TAUXVERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Aux Verbindungen |
| 0x0001 | Aux In Audio |
| 0x0100 | Aux In RSE links |
| 0x0200 | Aux In RSE rechts |
| 0x0300 | Aux In RSE links und rechts |
| 0x0400 | Aux In RSE BMW Individual |
| 0x0500 | Aux In RSE links und BMW Individual |
| 0x0600 | Aux In RSE rechts und BMW Individual |
| 0x0700 | Aux In RSE links, rechts und BMW Individual |
| 0xFFFF | Nicht definiert |

### TANTENNECMEDIA

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | Bluetooth Antenne |
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfu&#223; oder Diversity |
| 0xFF | Nicht definiert |

### TVERBINDUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TREMOTESERVICES

| WERT | TEXT |
| --- | --- |
| 0x00 | Remote Door (Lock or Unlock) |
| 0x01 | Remote Climate Control |
| 0x02 | Vehicle Finder (incl. Flash Light and / or Horn Blow) |
| 0xFF | Nicht definiert |

### TDOORSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | at least one door is not locked |
| 0x01 | all doors inclusive tailgate |
| 0xFF | Nicht definiert |

### TBLUETOOTHACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | not activated |
| 0x01 | activated |
| 0xFF | Nicht definiert |

### TBTDISCOVERYMODEACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | discovery mode off |
| 0x01 | discovery mode on |
| 0xFF | Nicht definiert |

### TPERSONALPHONEDATA

| WERT | TEXT |
| --- | --- |
| 0x00000000 | alle |
| 0x00000001 | list of paired devices (including call lists & voice tags) |
| 0x00000002 | Emails |
| 0x00000004 | SMS |
| 0x00000008 | Music lists (that were built by USB/MTP/iPod audio players) |
| 0xFFFFFFFF | Nicht definiert |

### THUBCONNECTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | HUB connected |
| 0x01 | HUB not connected |
| 0x04 | HUB not coded |
| 0xFF | Nicht definiert |

### TDAACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x01 | idle, not active yet |
| 0x02 | activation in progress |
| 0x03 | activation failed |
| 0x04 | activation successful |
| 0xFF | Nicht definiert |

### TA4ASTRINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | String present |
| 0x01 | String not present |
| 0xFF | Nicht definiert |

### TPOWERSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Default; This state should never be logged |
| 0x01 | Sleepmode |
| 0x02 | Bus Active (Normal Operation, light on) |
| 0x03 | Local Active (Normal Operation, light off) |
| 0x04 | Shut-Down |
| 0x05 | Start-Up |
| 0xFF | Nicht definiert |

### TPOWEREVENT

| WERT | TEXT |
| --- | --- |
| 0x00 | No change |
| 0x01 | Most Light on |
| 0x02 | Most Light off |
| 0x03 | RST received |
| 0x04 | Sleepmode command received |
| 0x07 | Start-Up OK (First-Switch-To-Power) |
| 0x08 | Timeout |
| 0x09 | Temperature Shut-Down (Over Temperature detected) |
| 0x0A | Under voltage detected |
| 0x0B | Shutdown.Query Received |
| 0x0C | Clamp Off |
| 0x14 | SW Reset |
| 0x15 | Request by Coding (Diagnostic reset) |
| 0x16 | Watchdog Reset |
| 0x28 | Request Subnetwork |
| 0x29 | Telematic active |
| 0x2A | Telematic inactive |
| 0x2B | Phone Call active |
| 0x2C | Phone Call inactive |
| 0x3C | Shut-Down Reclaiming started |
| 0x3D | Shut-Down Reclaiming stopped |
| 0x3E | Shut-Down interrupted (Light On during Shut-Down) |
| 0xFF | Nicht definiert |
