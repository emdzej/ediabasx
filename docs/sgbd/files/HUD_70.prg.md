# HUD_70.prg

## General

|  |  |
| --- | --- |
| File | HUD_70.prg |
| Type | PRG |
| Jobs | 99 |
| Tables | 46 |
| Origin | BMW EI-42 Pilkington |
| Revision | 1.000 |
| Author | ESG AB-K Steiner |
| ECU Comment | SGBD fuer HUD E70 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Head-Up-Display |  |  |
| ORIGIN | string | BMW EI-42 Pilkington |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | ESG AB-K Steiner |  |  |
| COMMENT | string | SGBD fuer HUD E70 |  |  |
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

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### STEUERN_TESTBILD

Testbitmaps anzeigen Zustand wird durch Klemmenwechsel beendet oder durch den Job "STEUERN_TESTBILD_STOP" KWP2000: $30 InputOutputControlByLocalIdentifier $FD $06

| Name | Type | Description |
| --- | --- | --- |
| BILD_ID | int | Testbildnummer (0x00 .. 0x0D) |

### STEUERN_TESTBILD_STOP

Testbitmapanzeige beenden KWP2000: $30 InputOutputControlByLocalIdentifier $FD $00

_No arguments._

### STATUS_BORDNETZSPANNUNG

Bordnetzspannung über AD-Kanal 1 (AN0) der CPU auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $01

_No arguments._

### STATUS_ARRAY_TEMPERATUR

Temperatur des LED Arrays auslesen

_No arguments._

### STATUS_DISPLAY_TEMPERATUR

Temperatur des Displays auslesen

_No arguments._

### _STATUS_FOT_TEMPERATUR

Temperatur der FOT Unit auslesen

_No arguments._

### STATUS_HELLIGKEIT

PWM-Port des Dimmungswerts auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $01 01h PWM Schritte von 0 bis 10000(100%) PWM in Prozent

_No arguments._

### STEUERN_HELLIGKEIT

PWM-Port des Dimmungswerts setzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $01 $hh $ll Durchführung $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| PWM_LEVEL | int | PWM-Signal (Dezimalwert) in Prozent 0 - 10000 (10000 = 100.00% PWM) |

### STEUERN_HELLIGKEIT_STOP

PWM-Port zurücksetzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $00 Beenden des Dienstes

_No arguments._

### STATUS_IMAGE_POSITION

Spiegelposition auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $21 01h Position in Prozent (100.00% = Anschlag oben)

_No arguments._

### STATUS_IMAGE_POSITION_STEPS

Position der Hoehenverstellung auslesen

_No arguments._

### STEUERN_IMAGE_POSITION

Schrittmotor um vorgegebene Schrittzahl bewegen KWP2000: $30 InputOutputControlByLocalIdentifier $20 $07 Anforderung $20 $06 $01 $xx $hh $$ll Durchführung $xx: Direction: 01=UP, 02=DOWN $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| SCHRITTANZAHL | real | Anzahl der Mikroschritte für Schrittmotor (max 2000) (ca. 1010 Schritte für vollen Hub) |
| DREHRICHTUNG | real | 01 = RAUF 02 = RUNTER |

### STEUERN_IMAGE_POSITION_ABSOLUT

Spiegel in Zielposition bewegen KWP2000: $30 InputOutputControlByLocalIdentifier $21 $07 Anforderung $21 $06 $hh $ll Durchführung $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| POSITION | int | Position des Bildes (Dezimalwert) in Prozent 0 - 10000 (10000 = 100.00% Anschlag oben) |

### STEUERN_IMAGE_ROTATION

Schrittmotor um vorgegebene Schrittzahl bewegen KWP2000: $30 InputOutputControlByLocalIdentifier $20 $07 Anforderung $20 $06 $01 $xx $hh $$ll Durchführung $xx: Richtung: 01=uhrzeiger, 02=gegenuhrzeigersinn $hh: High Byte $ll: Low Byte

| Name | Type | Description |
| --- | --- | --- |
| SCHRITTANZAHL | real | Anzahl der Mikroschritte für Schrittmotor (Anschlag links bis Anschlag rechts) 0 - 460 |
| DREHRICHTUNG | real | 01 = UHRZEIGERSINN 02 = GEGENUHRZEIGERSINN |

### STEUERN_IMAGE_STOP

Diagnose Schrittmotorsteuerung beenden KWP2000: $30 InputOutputControlByLocalIdentifier $20 $00 Keine Argumente erforderlich

_No arguments._

### STEUERN_IMAGE_POSITION_ABSOLUT_STOP

Job STEUERN_IMAGE_POSITION_ABSOLUT beenden KWP2000: $30 InputOutputControlByLocalIdentifier $21 $00 Beenden des Dienstes

_No arguments._

### STATUS_TASTER

ADC-Kanal Nr.0 des µC auslesen 0.0V - 0.8V (0-44)    Short to GND 0.9V - 1.2V (45-65)   invalid 1.3V - 2.2V (66-115)  Switch ON 2.3V - 2.8V (116-145) invalid 2.9V - 4.5V (146-229) Switch OFF 5,0V        (230-255) Switch disconnected KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $02

_No arguments._

### _STEUERN_TASTER

ADC-Kanal 02 des µC setzen Tasterbetätigung wird simuliert KWP2000: $30 InputOutputControlByLocalIdentifier $91 $07 Anforderung $91 $06 $02 $00 $xx Durchführung $xx: Wert

_No arguments._

### _STEUERN_TASTER_STOP

ADC-Kanal 02 des µC beenden Tasterbetätigung wird beendet KWP2000: $30 InputOutputControlByLocalIdentifier $91 $07 $00 Durchführung

_No arguments._

### STATUS_HUD

Status HUD auslesen Prüft, ob Display EIN oder AUS ist

_No arguments._

### STATUS_KLEMMEN

Klemmenstatus auslesen

_No arguments._

### STATUS_ENERGIESPARMODUS

Aktivierten Energiesparmodus auslesen

_No arguments._

### _STEUERN_COLOR_PALETTE

RGB Werte der einzelnen Farbpaletten einstellen KWP2000: $30 InputOutputControlByLocalIdentifier $FC $07 Anforderung $FC $06 $yy $xx $hh $$ll Durchführung $yy: Palette (0h:Schwarz, 1h:Gruen, 2h:Gelb, 3h:Rot 4h:Orange, 5h:Orange2, 6h:Rot2, 7h:Rot3, 8h:Cyan 9h:Weiss,   Ah:Grau 25%, Bh:Grau 12.5%) $rr: ROT $gg: GRUEN $rr: ROT

| Name | Type | Description |
| --- | --- | --- |
| PALETTE | int | Nummer der Palette 0 - 11 |
| ROT1 | int | 255 = voll durchgesteuert 00 = ausgeschaltet |
| GRUEN | int | 255 = voll durchgesteuert 00 = ausgeschaltet |
| ROT2 | int | 255 = voll durchgesteuert 00 = ausgeschaltet |

### _STEUERN_COLOR_PALETTE_STOP

KWP2000: $30 InputOutputControlByLocalIdentifier $FC $00 Dienst beenden

_No arguments._

### _STATUS_AD_PORT

AD-Kanäle des µC auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $91 $01 $xx xx: Kanalnummer

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer Port 1: Supply Voltage Kl. 30g Port 2: ON/OFF Switch Port 3: Ring Break Diagnostic Port 4: LED Temp Sensor Port 5: ITO Temp Sensor Port 6: ITO Heater malfunction Port 7: FOT Temp Sensor |

### _STEUERN_AD_PORT

AD-Kanäle des µC setzen KWP2000: $30 InputOutputControlByLocalIdentifier $90 $07 Anforderung $90 $06 $kk $00 $xx Durchführung $pp: Kanalnummer $xx: Byte

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer 0x01: Supply Voltage Kl. 30g 0x02: HUD ON/OFF switch 0x03: Ring Break Diagnostic 0x04: LED Temperature 0x05: ITO Heater Temperature 0x06: Heater malfunction 0x07: FOT Temperature |
| SPANNUNG | real | Spannungswert in Volt |

### _STEUERN_AD_PORT_STOP

Zugriff auf die AD-Kanäle des µC beenden KWP2000: $30 InputOutputControlByLocalIdentifier $91 $00 Keine Argumente erforderlich

_No arguments._

### _STATUS_IO_PORT

IO-Kanäle des µC auslesen KWP2000: $30 InputOutputControlByLocalIdentifier $93 $01 $xx xx: Kanalnummer

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer Port 1: UP/DOWN motor reset switch input Port 2: MOST SRC FLOW input Port 3: MOST frame sync I/O input Port 4: MOST recovered master clock Port 5: MOST error Port 6: CAN error Port 7: MOST CP flow Port 8: Battery switch signal Port 9: Backlight compulsory off signal Port10: Change LED current supply Port11: MOST reset Port12: GDC_RST Port13: MOST RGAIN -3db Port14: CAN STB Port15: CAN EN |

### _STEUERN_IO_PORT

IO-Kanäle des µC setzen KWP2000: $30 InputOutputControlByLocalIdentifier $93 $07 Anforderung $93 $06 $kk $00 $xx Durchführung $pp: Kanalnummer $xx: Byte

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Kanalnummer 0x01, 0x09 and 0x0C: IO Ports |
| INPUT | int | 0 or 1 |

### _STEUERN_IO_PORT_STOP

Zugriff auf die IO-Kanäle des µC beenden KWP2000: $30 InputOutputControlByLocalIdentifier $93 $00 Keine Argumente erforderlich

_No arguments._

### _STATUS_DISPLAYLISTE

Gibt Parameterliste und Displayliste zur?ck mit denen aktuell das Bild gewarpt wird KWP2000: $30 InputOutputControlByLocalIdentifier $FA $01

_No arguments._

### _STEUERN_DISPLAYLISTE

Displaylisten „ndern Zustand wird durch Klemmenwechsel beendet oder durch den Job "_STEUERN_DISPLAYLISTE_STOP" KWP2000: $30 InputOutputControlByLocalIdentifier $FA $06

| Name | Type | Description |
| --- | --- | --- |
| PARAMETERLISTE_ID | int | 00h     : Liste im EEPROM 01h-FEh : Liste im FLASH |
| DISPLAYLISTE_ID | int | Liste Nummer (0 bis 0xFFFF) |

### _STEUERN_DISPLAYLISTE_STOP

Beendet den Dienst _STEUERN_DISPLAYLISTE KWP2000: $30 InputOutputControlByLocalIdentifier $FA $00

_No arguments._

### _STEUERN_DISPLAY

Ansteuern ausgew„hlter Displaybereiche KWP2000: $30 InputOutputControlByLocalIdentifier $FE $07 Anforderung $FE $06 $sxh $sxl $syh $syl $exh $exl $eyh $eyl $fp Durchführung $sxhl: Startpunkt x (high low byte) $syhl: Startpunkt y (high low byte) $exhl: Endpunkt x (high low byte) $eyhl: Endpunkt y (high low byte) $fp: Palette (0h:Schwarz, 1h:Gruen, 2h:Gelb, 3h:Rot 4h:Orange, 5h:Orange2, 6h:Rot2, 7h:Rot3, 8h:Cyan 9h:Weiss,   Ah:Grau 25%, Bh:Grau 12.5%)

| Name | Type | Description |
| --- | --- | --- |
| STARTPUNKTX | int | 0-479 |
| STARTPUNKTY | int | 0-239 |
| ENDPUNKTX | int | 0-479 |
| ENDPUNKTY | int | 0-239 |
| PALETTE | int | 0-255 |

### STEUERN_WARPING_START

Warping Service Solution aktivieren Zustand wird durch Klemmenwechsel beendet oder durch den Job "STEUERN_WARPING_STOP" KWP2000: $30 InputOutputControlByLocalIdentifier $22 $07

_No arguments._

### STEUERN_WARPING

Art, Richtung und Delta der Bildkorrektur w„hlen Zustand wird durch Klemmenwechsel beendet KWP2000: $30 InputOutputControlByLocalIdentifier $23

| Name | Type | Description |
| --- | --- | --- |
| TRANSFORMATION_MODE | int | 01h : Trapez 02h : Rhombus 03h : Smile 1 04h : Smile 2 |
| RICHTUNG | int | 01h : hoch 02h : runter 03h : links 04h : rechts |
| DELTA | int | 00h - FFh |

### STEUERN_PARAMETERSATZ_GENERIEREN

Warping Parametersatz berechnen KWP2000: $30 InputOutputControlByLocalIdentifier $24

| Name | Type | Description |
| --- | --- | --- |
| LISTE_NUMMER | int | Parameter Liste |
| SATZ_NUMMER | int | Parameter Satz |

### STEUERN_PARAMETERSATZ_RUECKSETZEN

Ruecksetzen aller Verzeichnungswerte auf die Default Werte KWP2000: $30 InputOutputControlByLocalIdentifier $25 Durchführung

_No arguments._

### STEUERN_WARPING_SATZLESEN

Warping Parametersatz anwenden KWP2000: $30 InputOutputControlByLocalIdentifier $26 $xx $xx $xx $xx

| Name | Type | Description |
| --- | --- | --- |
| LISTE_NUMMER | int | Parameter Liste |
| SATZ_NUMMER | int | Parameter Satz |

### STEUERN_WARPING_STOP

Beendet den Dienst STEUERN_WARPING_START KWP2000: $30 InputOutputControlByLocalIdentifier $22 $00

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA4E8 | Taster (ein/aus) |
| 0xA4EA | Backlight LED |
| 0xA4EB | Bordnetzspannung |
| 0xA4EC | Temperaturfühler LED |
| 0xA4ED | Schrittmotor Höhenverstellung defekt |
| 0xA4EF | EEPROM - Kodierdatenfehler Lieferantenbereich |
| 0xA4F0 | EEPROM - Kodierdatenfehler BMW |
| 0xA4F2 | CAN: Ausfal/Fehler Telegramm Klemmenstatus |
| 0xA4F3 | CAN: Ausfall/Fehler Telegramm Anzeige ACC DCC |
| 0xA4F4 | CAN: Ausfall/Fehler Telegramm Geschwindigkeit |
| 0xA4F5 | CAN: Ausfall/Fehler Telegramm Status Kombi |
| 0xA4F7 | CAN: Ausfall/Fehler Telegramm LCD Leuchtdichte |
| 0xA4F8 | CAN: Ausfall/Fehler Telegramm Dimmung LM |
| 0xA4F9 | CAN: Ausfall/Fehler Telegramm Status Fahrlicht |
| 0xA4FA | CAN: Ausfall/Fehler Telegramm Kilometer/Reichweite |
| 0xA4FB | CAN: Ausfall/Fehler Telegramm Anzeigesteuerung CC-Meldung |
| 0xA4FC | CAN: ITO Heizung defekt |
| 0xA4FD | CAN: ITO Heizung: Temp. Sensor defekt  |
| 0xA500 | CAN: ID 480h: kein Acknowledge |
| 0xA502 | CAN: ID 480h: Signal ungültig |
| 0xA503 | CAN: Ausfall Telegramm Status Funkschlüssel |
| 0xA504 | Warping |
| 0xA505 | CAN: No Answer to Request (580h+3Dh) |
| 0xA506 | Energiesparmode aktiv |
| 0xD844 | CAN: Low |
| 0xD847 | CAN: Bus off oder dual ported RAM |
| 0xD84E | MOST Error_Light_Not_Off |
| 0xD850 | MOST Error_Ring_Diagnose |
| 0xD851 | MOST Error_Unlock_Long |
| 0xD852 | MOST Error_Temp_Shutdown) |
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
| 0xA4E8 | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4EA | 0x02 | 0x0B | 0x01 | 0x03 |
| 0xA4EB | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4EC | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4ED | 0x02 | 0x0B | 0x01 | 0x15 |
| 0xA4EF | 0x02 | 0x01 | 0x04 | LeerUW_2 |
| 0xA4F0 | 0x02 | 0x01 | 0x04 | LeerUW_2 |
| 0xA4F2 | 0x01 | 0x17 | LeerUW_4 | - |
| 0xA4F3 | 0x01 | 0x13 | LeerUW_4 | - |
| 0xA4F4 | 0x01 | 0x17 | LeerUW_4 | - |
| 0xA4F5 | 0x01 | 0x12 | LeerUW_4 | - |
| 0xA4F7 | 0x01 | 0x17 | LeerUW_4 | - |
| 0xA4F8 | 0x01 | 0x17 | LeerUW_4 | - |
| 0xA4F9 | 0x01 | 0x17 | LeerUW_4 | - |
| 0xA4FA | 0x01 | 0x17 | LeerUW_4 | - |
| 0xA4FB | 0x01 | 0x14 | LeerUW_4 | - |
| 0xA4FC | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA4FD | 0x02 | 0x0B | 0x01 | 0xAA |
| 0xA500 | 0x01 | 0x0F | LeerUW_4 | - |
| 0xA502 | 0x01 | 0x11 | LeerUW_4 | - |
| 0xA503 | 0x01 | LeerUW_5 | - | - |
| 0xA504 | 0x01 | LeerUW_2 | 0x16 | LeerUW_2 |
| 0xA505 | 0x0C | LeerUW_4 | - | - |
| 0xA506 | LeerUW_3 | LeerUW_3 | - | - |
| 0xD844 | 0x01 | LeerUW_7 | - | - |
| 0xD847 | 0x01 | LeerUW_7 | - | - |
| 0xD84E | 0x01 | LeerUW_7 | - | - |
| 0xD850 | 0x01 | 0xAA | 0x09 | LeerUW_4 |
| 0xD851 | 0x01 | LeerUW_7 | - | - |
| 0xD852 | 0x01 | LeerUW_7 | - | - |
| default | 0x01 | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordnetzspannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x02 | Betriebsdauer | Stunden | high | unsigned int | - | 1 | 1 | 0 |
| 0x03 | LED Kette | 0-n | - | 0xFF | LEDFarbe | 1 | 1 | 0 |
| 0x04 | Codierdatenfehler | 0-n | - | 0xFF | CDBError | 1 | 1 | 0 |
| 0x05 | Geräteadresse NAK | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x06 | Funktionsblock | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Instanz ID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x08 | Funktions ID | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x09 | Node Position Register | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0A | Geräteadresse | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0B | Temperatur LED Array | Grad C | high | signed int | - | 1 | 1 | 0 |
| 0x0C | Anfrage ID | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x0D | Physikalischer Fehler | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x0E | Senden misslungen | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x0F | Kein Acknowledge | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x10 | Bus off | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x11 | Signal ungültig | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | Status Kombi | 0-n | - | 0xFF | StatusKombi | 1 | 1 | 0 |
| 0x13 | Anzeige ACC DCC | 0-n | - | 0xFF | AnzeigeACC | 1 | 1 | 0 |
| 0x14 | CC Meldung | 0-n | - | 0xFF | CCMeldung | 1 | 1 | 0 |
| 0x15 | Schrittmotor Hoehenverstellung | 0-n | - | 0xFF | Hoehenverstellung | 1 | 1 | 0 |
| 0x16 | Warping Datenfehler | 0-n | - | 0xFF | Warping | 1 | 1 | 0 |
| 0x17 | CAN Telegrammfehler | 0-n | - | 0xFF | CAN_DTCs | 1 | 1 | 0 |
| 0xAA | ohne Bedeutung | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | MOST Error_Reset |
| 0x930A | MOST Error_Sudden_light_off |
| 0x930B | MOST Error_Device_No_Answer |
| 0x930C | MOST Error_Unlock_Short |
| 0x930D | MOST Error_t_CfgStatus |
| 0x9310 | MOST Error_NAK |
| 0x9401 | Helligkeitsreduzierung aufgrund zu hoher LED Array Temperatur |
| 0x9402 | Helligkeitsreduzierung aufgrund zu hoher FOT Temperatur |
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
| 0x9308 | 0x01 | 0x02 | LeerUW_6 | - |
| 0x930A | 0x01 | LeerUW_7 | - | - |
| 0x930B | 0x01 | 0xAA | 0x08 | MOST_UW |
| 0x930C | 0x01 | LeerUW_7 | - | - |
| 0x930D | 0x01 | LeerUW_7 | - | - |
| 0x9310 | 0x01 | 0xAA | 0x03 | MOST_UW |
| 0x9401 | 0x09 | 0x0A | 0x01 | LeerUW_3 |
| 0x9402 | 0x09 | 0x0A | 0x01 | LeerUW_3 |
| default | 0x01 | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordnetzspannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x02 | Reset mit | 0-n | - | 0xFF | RAMStatus | 1 | 1 | 0 |
| 0x03 | Geräteadresse NAK | Hex | H | unsigned int | - | 1 | 1 | 0 |
| 0x04 | Funktionsblock | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x05 | Instanz ID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x06 | Funktions ID | Hex | H | unsigned int | - | 1 | 1 | 0 |
| 0x07 | Position Node Register | Hex | H | unsigned int | - | 1 | 1 | 0 |
| 0x08 | Geräteadresse | Hex | H | unsigned int | - | 1 | 1 | 0 |
| 0x09 | Betriebsdauer | Stunden | H | unsigned int | - | 1 | 1 | 0 |
| 0x0A | Temperatur LED Array | Grad C | H | signed int | - | 1 | 1 | 0 |
| 0xAA | ohne Bedeutung | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | -- | 1 | 1 | 0 |

### LEERUW_7

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_5

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0xAA | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_4

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0xAA | 0xAA | 0xAA | 0xAA |

### LEERUW_3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0xAA | 0xAA | 0xAA |

### LEERUW_2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0xAA | 0xAA |

### LEDFARBE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | rot |
| 0x02 | gruen |
| 0x03 | rot und gruen |
| XY | Farbe unplausibel |

### CDBERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Unkritisch |
| 0x01 | Kritisch |
| XY | Kritikalität unplausibel |

### STATUSKOMBI

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Checksum |
| 0x03 | Timeout und Checksum |
| 0x04 | Alivecounter |
| 0x05 | Timeout und Alivecounter |
| 0x06 | Checksum und Alivecounter |
| 0x07 | Timeout, Checksum und Alivecounter |
| 0x08 | Schnittstelle ACC/Kombi |
| 0x09 | Timeout und Schnittstelle ACC/Kombi |
| 0x0A | Checksum und Schnittstelle ACC/Kombi |
| 0x0B | Timeout, Checksum und Schnittstelle ACC/Kombi |
| 0x0C | Alivecounter und Schnittstelle ACC/Kombi |
| 0x0D | Timeout, Alivecounter und Schnittstelle ACC/Kombi |
| 0x0E | Checksum, Alivecounter und Schnittstelle ACC/Kombi |
| 0x0F | Timeout, Checksum, Alivecounter und Schnittstelle ACC/Kombi |
| 0x10 | ungültige Geschwindigkeit |
| 0x11 | Timeout und ungültige Geschwindigkeit |
| 0x12 | Checksum und ungültige Geschwindigkeit |
| 0x13 | Timeout, Checksum und ungültige Geschwindigkeit |
| 0x14 | Alivecounter und ungültige Geschwindigkeit |
| 0x15 | Timeout, Alivecounter und ungültige Geschwindigkeit |
| 0x16 | Checksum, Alivecounter und ungültige Geschwindigkeit |
| 0x17 | Timeout, Checksum, Alivecounter und ungültige Geschwindigkeit |
| 0x18 | ungültige Geschwindigkeit und Schnittstelle ACC/Kombi |
| 0x19 | Timeout, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| 0x1A | Checksum, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| 0x1B | Timeout, Checksum, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| 0x1C | Alivecounter, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| 0x1D | Timeout, Alivecounter, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| 0x1E | Checksum, Alivecounter, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| 0x1F | Timeout, Checksum, Alivecounter, Schnittstelle ACC/Kombi und ungültige Geschwindigkeit |
| XY | Status Kombi unplausibel |

### ANZEIGEACC

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Checksum |
| 0x03 | Timeout und Checksum |
| 0x04 | Alivecounter |
| 0x05 | Timeout und Alivecounter |
| 0x06 | Checksum und Alivecounter |
| 0x07 | Timeout, Checksum und Alivecounter |
| 0x08 | ungueltiger/Reserve Wert |
| 0x09 | Timeout und ungueltiger/Reserve Wert |
| 0x0A | Checksum und ungueltiger/Reserve Wert |
| 0x0B | Timeout, Checksum und ungueltiger/Reserve Wert |
| 0x0C | Alivecounter und ungueltiger/Reserve Wert |
| 0x0D | Timeout, Alivecounter und ungültiger/Reserve Wert |
| 0x0E | Checksum, Alivecounter und ungueltiger/Reserve Wert |
| 0x0F | Timeout, Checksum, Alivecounter und ungültiger/Reserve Wert |
| XY | Anzeige ACC_DCC unplausibel |

### CCMELDUNG

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Textupdate ungueltig |
| 0x03 | Timeout und Textupdate ungueltig |
| 0x04 | ungueltige ID |
| XY | CC Meldung unplausibel |

### MOST_UW

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x04 | 0x05 | 0x06 |

### RAMSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | RAM Verlust |
| 0x01 | RAM Erhalt |
| XY | unplausibler RAM Status |

### TEMPVOLTAGEITO

| SPANNUNG | TEMPERATUR |
| --- | --- |
| 0 | Sensor defekt |
| 1 | Sensor defekt |
| 2 | Sensor defekt |
| 3 | Sensor defekt |
| 4 | Sensor defekt |
| 5 | Sensor defekt |
| 6 | Sensor defekt |
| 7 | Sensor defekt |
| 8 | 131 |
| 9 | 126 |
| 10 | 122 |
| 11 | 118 |
| 12 | 114 |
| 13 | 111 |
| 14 | 108 |
| 15 | 105 |
| 16 | 103 |
| 17 | 101 |
| 18 | 98 |
| 19 | 96 |
| 20 | 94 |
| 21 | 93 |
| 22 | 91 |
| 23 | 89 |
| 24 | 88 |
| 25 | 86 |
| 26 | 85 |
| 27 | 83 |
| 28 | 82 |
| 29 | 81 |
| 30 | 79 |
| 31 | 78 |
| 32 | 77 |
| 33 | 76 |
| 34 | 75 |
| 35 | 74 |
| 36 | 73 |
| 37 | 72 |
| 38 | 71 |
| 39 | 70 |
| 40 | 69 |
| 41 | 68 |
| 42 | 67 |
| 43 | 67 |
| 44 | 66 |
| 45 | 65 |
| 46 | 64 |
| 47 | 63 |
| 48 | 63 |
| 49 | 62 |
| 50 | 61 |
| 51 | 60 |
| 52 | 60 |
| 53 | 59 |
| 54 | 58 |
| 55 | 58 |
| 56 | 57 |
| 57 | 57 |
| 58 | 56 |
| 59 | 55 |
| 60 | 55 |
| 61 | 54 |
| 62 | 53 |
| 63 | 53 |
| 64 | 52 |
| 65 | 52 |
| 66 | 51 |
| 67 | 51 |
| 68 | 50 |
| 69 | 50 |
| 70 | 49 |
| 71 | 49 |
| 72 | 48 |
| 73 | 48 |
| 74 | 47 |
| 75 | 47 |
| 76 | 46 |
| 77 | 46 |
| 78 | 45 |
| 79 | 45 |
| 80 | 44 |
| 81 | 44 |
| 82 | 43 |
| 83 | 43 |
| 84 | 42 |
| 85 | 42 |
| 86 | 41 |
| 87 | 41 |
| 88 | 41 |
| 89 | 40 |
| 90 | 40 |
| 91 | 39 |
| 92 | 39 |
| 93 | 38 |
| 94 | 38 |
| 95 | 38 |
| 96 | 37 |
| 97 | 37 |
| 98 | 36 |
| 99 | 36 |
| 100 | 35 |
| 101 | 35 |
| 102 | 35 |
| 103 | 34 |
| 104 | 34 |
| 105 | 34 |
| 106 | 33 |
| 107 | 33 |
| 108 | 32 |
| 109 | 32 |
| 110 | 32 |
| 111 | 31 |
| 112 | 31 |
| 113 | 30 |
| 114 | 30 |
| 115 | 30 |
| 116 | 29 |
| 117 | 29 |
| 118 | 29 |
| 119 | 28 |
| 120 | 28 |
| 121 | 28 |
| 122 | 27 |
| 123 | 27 |
| 124 | 26 |
| 125 | 26 |
| 126 | 26 |
| 127 | 25 |
| 128 | 25 |
| 129 | 25 |
| 130 | 24 |
| 131 | 24 |
| 132 | 24 |
| 133 | 23 |
| 134 | 23 |
| 135 | 23 |
| 136 | 22 |
| 137 | 22 |
| 138 | 21 |
| 139 | 21 |
| 140 | 21 |
| 141 | 20 |
| 142 | 20 |
| 143 | 20 |
| 144 | 19 |
| 145 | 19 |
| 146 | 19 |
| 147 | 18 |
| 148 | 18 |
| 149 | 18 |
| 150 | 17 |
| 151 | 17 |
| 152 | 17 |
| 153 | 16 |
| 154 | 16 |
| 155 | 16 |
| 156 | 15 |
| 157 | 15 |
| 158 | 14 |
| 159 | 14 |
| 160 | 14 |
| 161 | 13 |
| 162 | 13 |
| 163 | 13 |
| 164 | 12 |
| 165 | 12 |
| 166 | 12 |
| 167 | 11 |
| 168 | 11 |
| 169 | 11 |
| 170 | 10 |
| 171 | 10 |
| 172 | 10 |
| 173 | 9 |
| 174 | 9 |
| 175 | 8 |
| 176 | 8 |
| 177 | 8 |
| 178 | 7 |
| 179 | 7 |
| 180 | 7 |
| 181 | 6 |
| 182 | 6 |
| 183 | 5 |
| 184 | 5 |
| 185 | 5 |
| 186 | 4 |
| 187 | 4 |
| 188 | 3 |
| 189 | 3 |
| 190 | 3 |
| 191 | 2 |
| 192 | 2 |
| 193 | 1 |
| 194 | 1 |
| 195 | 1 |
| 196 | 0 |
| 197 | 0 |
| 198 | -1 |
| 199 | -1 |
| 200 | -1 |
| 201 | -2 |
| 202 | -2 |
| 203 | -3 |
| 204 | -3 |
| 205 | -4 |
| 206 | -4 |
| 207 | -5 |
| 208 | -5 |
| 209 | -6 |
| 210 | -6 |
| 211 | -6 |
| 212 | -7 |
| 213 | -7 |
| 214 | -8 |
| 215 | -9 |
| 216 | -9 |
| 217 | -10 |
| 218 | -10 |
| 219 | -11 |
| 220 | -11 |
| 221 | -12 |
| 222 | -12 |
| 223 | -13 |
| 224 | -14 |
| 225 | -14 |
| 226 | -15 |
| 227 | -16 |
| 228 | -16 |
| 229 | -17 |
| 230 | -18 |
| 231 | -18 |
| 232 | -19 |
| 233 | -20 |
| 234 | -21 |
| 235 | -21 |
| 236 | -22 |
| 237 | -23 |
| 238 | -24 |
| 239 | -25 |
| 240 | -26 |
| 241 | -27 |
| 242 | -28 |
| 243 | -30 |
| 244 | -31 |
| 245 | -32 |
| 246 | -34 |
| 247 | -35 |
| 248 | -37 |
| 249 | -39 |
| 250 | -41 |
| 251 | -44 |
| 252 | Sensor defekt |
| 253 | Sensor defekt |
| 254 | Sensor defekt |
| 255 | Sensor defekt |
| XY | unplausibler Wert |

### KLEMMENSTATUS

| WERT | STATUS |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xXY | unbekannter Klemmenstatus |

### DISPLAYSTATUS

| WERT | STATUS |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xXY | unbekannter Displaystatus |

### ENERGYSAVEMODE

| WERT | MODE |
| --- | --- |
| 0x00 | Kein Energiesparmodus aktiv |
| 0x01 | Fertigungsmodus aktiv |
| 0x02 | Transportmodus aktiv |
| 0x04 | Werkstattmodus aktiv |
| 0xXY | unbekannter Energiesparmodus |

### HOEHENVERSTELLUNG

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Spannungswerte ausserhalb des Bereiches |
| 0x02 | keine Reset Position feststellbar |
| XY | unplausibler Wert |

### WARPING

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Daten nicht übertragen |
| 0x02 | Checksum |
| 0x04 | Parameterliste |
| 0x08 | Parameterset Länge |
| 0x10 | Displayliste Generierung |
| 0x20 | Displayliste Transfer |
| XY | unplausibler Wert |

### TEMPVOLTAGELED

| SPANNUNG | TEMPERATUR |
| --- | --- |
| 0 | Sensor defekt |
| 1 | Sensor defekt |
| 2 | Sensor defekt |
| 3 | Sensor defekt |
| 4 | Sensor defekt |
| 5 | Sensor defekt |
| 6 | Sensor defekt |
| 7 | Sensor defekt |
| 8 | 137 |
| 9 | 134 |
| 10 | 131 |
| 11 | 128 |
| 12 | 126 |
| 13 | 123 |
| 14 | 120 |
| 15 | 118 |
| 16 | 115 |
| 17 | 113 |
| 18 | 111 |
| 19 | 108 |
| 20 | 106 |
| 21 | 104 |
| 22 | 102 |
| 23 | 100 |
| 24 | 98 |
| 25 | 97 |
| 26 | 95 |
| 27 | 93 |
| 28 | 92 |
| 29 | 90 |
| 30 | 89 |
| 31 | 87 |
| 32 | 86 |
| 33 | 84 |
| 34 | 83 |
| 35 | 82 |
| 36 | 80 |
| 37 | 79 |
| 38 | 78 |
| 39 | 77 |
| 40 | 76 |
| 41 | 75 |
| 42 | 74 |
| 43 | 73 |
| 44 | 72 |
| 45 | 71 |
| 46 | 70 |
| 47 | 69 |
| 48 | 68 |
| 49 | 67 |
| 50 | 66 |
| 51 | 66 |
| 52 | 65 |
| 53 | 64 |
| 54 | 63 |
| 55 | 63 |
| 56 | 62 |
| 57 | 61 |
| 58 | 60 |
| 59 | 60 |
| 60 | 59 |
| 61 | 59 |
| 62 | 58 |
| 63 | 57 |
| 64 | 57 |
| 65 | 56 |
| 66 | 55 |
| 67 | 55 |
| 68 | 54 |
| 69 | 54 |
| 70 | 53 |
| 71 | 53 |
| 72 | 52 |
| 73 | 51 |
| 74 | 51 |
| 75 | 50 |
| 76 | 50 |
| 77 | 49 |
| 78 | 49 |
| 79 | 48 |
| 80 | 48 |
| 81 | 47 |
| 82 | 47 |
| 83 | 46 |
| 84 | 46 |
| 85 | 45 |
| 86 | 45 |
| 87 | 44 |
| 88 | 44 |
| 89 | 43 |
| 90 | 43 |
| 91 | 42 |
| 92 | 42 |
| 93 | 41 |
| 94 | 41 |
| 95 | 40 |
| 96 | 40 |
| 97 | 39 |
| 98 | 39 |
| 99 | 38 |
| 100 | 38 |
| 101 | 37 |
| 102 | 37 |
| 103 | 36 |
| 104 | 36 |
| 105 | 35 |
| 106 | 35 |
| 107 | 34 |
| 108 | 34 |
| 109 | 33 |
| 110 | 33 |
| 111 | 33 |
| 112 | 32 |
| 113 | 32 |
| 114 | 31 |
| 115 | 31 |
| 116 | 30 |
| 117 | 30 |
| 118 | 29 |
| 119 | 29 |
| 120 | 28 |
| 121 | 28 |
| 122 | 27 |
| 123 | 27 |
| 124 | 27 |
| 125 | 26 |
| 126 | 26 |
| 127 | 25 |
| 128 | 25 |
| 129 | 24 |
| 130 | 24 |
| 131 | 23 |
| 132 | 23 |
| 133 | 22 |
| 134 | 22 |
| 135 | 22 |
| 136 | 21 |
| 137 | 21 |
| 138 | 20 |
| 139 | 20 |
| 140 | 19 |
| 141 | 19 |
| 142 | 19 |
| 143 | 18 |
| 144 | 18 |
| 145 | 17 |
| 146 | 17 |
| 147 | 17 |
| 148 | 16 |
| 149 | 16 |
| 150 | 15 |
| 151 | 15 |
| 152 | 15 |
| 153 | 14 |
| 154 | 14 |
| 155 | 13 |
| 156 | 13 |
| 157 | 13 |
| 158 | 12 |
| 159 | 12 |
| 160 | 11 |
| 161 | 11 |
| 162 | 11 |
| 163 | 10 |
| 164 | 10 |
| 165 | 9 |
| 166 | 8 |
| 167 | 8 |
| 168 | 8 |
| 169 | 7 |
| 170 | 7 |
| 171 | 6 |
| 172 | 6 |
| 173 | 6 |
| 174 | 5 |
| 175 | 5 |
| 176 | 4 |
| 177 | 4 |
| 178 | 4 |
| 179 | 3 |
| 180 | 3 |
| 181 | 2 |
| 182 | 2 |
| 183 | 2 |
| 184 | 1 |
| 185 | 1 |
| 186 | 0 |
| 187 | 0 |
| 188 | 0 |
| 189 | -1 |
| 190 | -1 |
| 191 | -1 |
| 192 | -2 |
| 193 | -2 |
| 194 | -3 |
| 195 | -3 |
| 196 | -4 |
| 197 | -4 |
| 198 | -5 |
| 199 | -5 |
| 200 | -6 |
| 201 | -6 |
| 202 | -7 |
| 203 | -7 |
| 204 | -8 |
| 205 | -9 |
| 206 | -9 |
| 207 | -10 |
| 208 | -10 |
| 209 | -11 |
| 210 | -11 |
| 211 | -12 |
| 212 | -13 |
| 213 | -13 |
| 214 | -14 |
| 215 | -15 |
| 216 | -15 |
| 217 | -16 |
| 218 | -17 |
| 219 | -17 |
| 220 | -18 |
| 221 | -19 |
| 222 | -20 |
| 223 | -20 |
| 224 | -21 |
| 225 | -22 |
| 226 | -23 |
| 227 | -24 |
| 228 | -24 |
| 229 | -25 |
| 230 | -26 |
| 231 | -27 |
| 232 | -28 |
| 233 | -29 |
| 234 | -30 |
| 235 | -31 |
| 236 | -32 |
| 237 | -33 |
| 238 | -34 |
| 239 | -35 |
| 240 | -36 |
| 241 | -37 |
| 242 | -38 |
| 243 | -39 |
| 244 | -40 |
| 245 | -41 |
| 246 | -42 |
| 247 | -43 |
| 248 | -44 |
| 249 | -45 |
| 250 | -46 |
| 251 | -48 |
| 252 | Sensor defekt |
| 253 | Sensor defekt |
| 254 | Sensor defekt |
| 255 | Sensor defekt |
| XY | unplausibler Wert |

### CAN_DTCS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x08 | ungueltiges Signal |
| XY | unplausibler Wert |
