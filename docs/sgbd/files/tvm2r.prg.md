# tvm2r.prg

## General

|  |  |
| --- | --- |
| File | tvm2r.prg |
| Type | PRG |
| Jobs | 85 |
| Tables | 35 |
| Origin | BMW EI-41 JohannesHafner |
| Revision | 2.000 |
| Author | Delphi Delphi-Muenchen Leimbach_Stefan, Delphi Delphi-Muenchen |
| ECU Comment | TVM [16] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TVTuner |  |  |
| ORIGIN | string | BMW EI-41 JohannesHafner |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | Delphi Delphi-Muenchen Leimbach_Stefan, Delphi Delphi-Muenchen  |  |  |
| COMMENT | string | TVM [16] |  |  |
| PACKAGE | string | 1.61 |  |  |
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

### STEUERN_TEST_ANTENNE

Start des Antennentests KWP2000: $31 StartRoutineByLocalIdentifier $25 Test Antenna Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned long | table TAntenne WERT |

### STATUS_TEST_ANTENNE

Ergebnis des Antennentests KWP2000: $33 StartRoutineByLocalIdentifier $25 Test Antenna Modus  : Default

_No arguments._

### STATUS_ANALOG_TEMPERATUR

Abfrage der Temperaturen des Steuergerätes.

_No arguments._

### STATUS_TVSETREGION

Abfrage der Temperaturen des Steuergerätes.

_No arguments._

### STEUERN_TVSETREGION

Abfrage der Temperaturen des Steuergerätes.

| Name | Type | Description |
| --- | --- | --- |
| ARG_REGION | unsigned char | EEinstellung der Region. table TTvRegion |

### STEUERN_TVSETCHANNEL

Stellt einen bestimmten TV-Kanal ein. Zeit in Sekunden

| Name | Type | Description |
| --- | --- | --- |
| ARG_CHANNEL | unsigned int | Einstellung des TV-Kanals. |
| ARG_BOUQET | unsigned int | Einstellung des digitalen Bouqets Default: 0 0: analog Mögliche Werte für digital: 1 bis 64 |

### STATUS_TVSETCHANNEL

Stellt einen bestimmten TV-Kanal ein. Zeit in Sekunden

_No arguments._

### STEUERN_SIGNALAUSGABE

Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SIGNALART | unsigned char | Art der Signalausgabe. table TSignalArt |
| ARG_AUSGANG | unsigned int | Default: 0 In den Kommentaren des Jobs muss eine eindeutige Zuweisung des Ausgangs möglich sein. Beispiele: -Headunit: LVDS Leitung zum RSE -Videoswitch: Ausgang1 (PINs X,Y) Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. table TVideoAusang |
| ARG_TIMEOUT | unsigned char | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis -	der Job erneut mit Parameter 0 aufgeru-fen wird -	das Steuergerät neu startet (Aufwachen, Reset, &) |

### STEUERN_SELBSTTEST

Selbsttest starten.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | unsigned long | Routinen, die getestet werden sollen. Die Tabelle  TSelbsttestRoutine wird in der SGBD von der Entwicklung gepflegt. |

### STATUS_SELBSTTEST

Selbsttest starten.

_No arguments._

### STEUERN_TEST_VIDEOAUSGANG

Startet den Test der Videoausgänge. KWP2000: $31 StartRoutineByLocalIdentifier $27 Test Videoausgang Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_AUSGANG | unsigned int | table TVideoAusgang WERT |

### STATUS_TEST_VIDEOAUSGANG

Wertet den Test der Videoausgänge aus.

_No arguments._

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit, oder von TV/Video-Steuergeräten.

_No arguments._

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STEUERN_ANTENNEN_SIGNAL_DIGITAL

Liest die aktuelle Feldstärke auf der angegebenen Antenne aus.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned int | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STEUERN_SIGNALAUSGABE_AUS

Beendet die mit STEUERN_SIGNALAUSGABE erzwungene Signalausgabe und schaltet auf den Regulärbetrieb.

| Name | Type | Description |
| --- | --- | --- |
| ARG_AUSGANG | unsigned int | Default: 0 In den Kommentaren des Jobs muss eine eindeutige Zuweisung des Ausgangs möglich sein. Beispiele: -Headunit: LVDS Leitung zum RSE -Videoswitch: Ausgang1 (PINs X,Y) Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. table TVideoAusang |

### STATUS_KARTENNUMMER_LESEN

Liest die Kartennummer und den entsprechenden Typ der Karte sofern ein Kartenleser verbaut ist

_No arguments._

### STEUERN_PHANTOM_POWER_SUPPLY

Schaltet die Phantom-Spannung der Antennen per Diagnose an oder aus Bei jedem Life-Cycle wird die Pantom-Spannung grundsätzlich eingeschaltest unabhängig vom vorher ausgeführten Diagnosejob

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned char | Nummer der Antennefür die zu schaltende Phantomspannung |
| ARG_ON_OFF | unsigned char | 0 = OFF 1 = ON |

### STATUS_FIRMWARE_VERSION_LESEN

liest die Firmware vesion von diversen Komponenten aus

_No arguments._

### _STEUERN_SAVE_RAM_DATA

Speichert die im Speicher liegendenen Daten anaolg eines shut-down Events ohne das Modul herunterfahren zu müssen

_No arguments._

### _STATUS_SAVE_RAM_DATA

ermittelt on die Daten des mit _STEUERN_SAVE_RAM_DATA gespeicherten Daten korrekt gespeichert wurden

_No arguments._

### STEUERN_FACTORY_DEFAULTS

Löscht alle Benutzerdaten, z.B. zuletzt gesehener Sender, Senderlisten, FBM, Regionen für alle PIA-Profile

_No arguments._

### STATUS_TVM_USB_INTERFACE_TEST

ermittelt ob ein CI-Interface angeschlossen ist 

_No arguments._

### STATUS_PHANTOM_SUPPLY

Gibt den Status der Phantomspannung zurück --

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
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive World Headquarters |
| 0xB6 | Hans Widmaier |
| 0xB7 | SB LiMotive Germany GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
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
| 0xAA88 | Dummmy Application DTC |
| 0xAA89 | Überspannung erkannt |
| 0xAA8A | Steuergeraet nicht codiert  |
| 0xAA8B | Codierdaten-Transaktion fehlgeschlagen |
| 0xAA8C | Signatur über Nettocodierdaten ungueltig  |
| 0xAA8D | Steuergeraet falsch codiert |
| 0xAA8E | Codierdaten-Transaktion mit ungueltigen Daten |
| 0xAA8F | Energiesparmode aktiv |
| 0xAA90 | Host hat bei fatalem Fehler vom INIC einen Reset ausgelöst |
| 0xAA9A | Interner Steuergerätefehler Hardware |
| 0xAA9B | Interner Steuergerätefehler Software |
| 0xAA9D | FBAS-Ausgang 1: Kurzschluss |
| 0xAA9E | FBAS-Ausgang 1: Unterbrechung oder fehlerhafte Senke |
| 0xAA9F | Kurzschluss Antenne 1 |
| 0xAAA0 | Antenne 1 nicht verbunden, hohe Impedanz |
| 0xAAA1 | Kurzschluss Antenne 2 |
| 0xAAA2 | Antenne 2 nicht verbunden, hohe Impedanz |
| 0xAAA3 | Kurzschluss Antenne 3 |
| 0xAAA4 | Antenne 3 nicht verbunden, hohe Impedanz |
| 0xAAA5 | FBAS-Ausgang 2: Unterbrechung oder fehlerhafte Senke |
| 0xAAA6 | FBAS-Ausgang 2: Kurzschluss |
| 0xDBD0 | MOST_RING_DIAGNOSIS |
| 0xDBD2 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle |
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
| F_UWB_ERW | nein |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | RESET |
| 0x930A | MOST: Licht geht unerwartet aus |
| 0x930C | MOST_UNLOCKSHORT |
| 0x930D | Systemzustand Ok nicht fristgerecht erkannt |
| 0x9310 | Empfängerknoten: hat Nachricht nicht abgenommen; Puffer voll |
| 0x9311 | MOST: Synchronisation (PLL) arbeitet nicht korrekt |
| 0x9320 | COM Flash Error |
| 0x9321 | COM EEPROM Error |
| 0x9340 | Timing-Master: kann Audiokanal nicht reservieren; beschäftigt |
| 0x9341 | Timing-Master: kann Kanal nicht freigeben; beschäftigt |
| 0x9342 | Timing-Master: kann Kanal nicht freigeben; falsches Label |
| 0x9343 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht |
| 0x9344 | Empfängerknoten: hat Nachricht nicht abgenommen; fehlerhafte Check- Summe am Empfänger erkannt |
| 0x9345 | Übertragungsfehler im Hardware Abstraction Layer |
| 0x934A | Empfängerknoten: Kommandointerpreter kennt Nachricht nicht |
| 0x934B | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen |
| 0x934D | Senderknoten: adressierter Funktionsblock existiert nicht |
| 0x934E | Senderknoten: falsche Parameter in der Nachricht |
| 0x934F | Senderknoten: Fehler in adressierter Funktion |
| 0x9350 | Senderknoten: Fehler in Segmentierung |
| 0x9351 | Funktionsblock: sendet keine Werte trotz Notifizierung |
| 0x9352 | Funktionsblock: Notifizierung abgelehnt; Spalte der Notifizierungstabelle voll |
| 0x9353 | Funktionsblock: Notifizierung abgelehnt; keine freien Zeilen in Notifizierungstabelle |
| 0x9354 | Funktionsblock: Notifizierung abgelehnt; gewünschte Funktion existiert nicht |
| 0x9355 | Funktionsblock: Notifizierung abgelehnt; Grund unbekannt |
| 0x9356 | Funktionsblock: Notifizierung abgelehnt; Funktionswert momentan nicht vorhanden |
| 0x9360 | Versorgungsspannung: Mindestwert unterschritten |
| 0xDBD0 | MOST: Ringbruch |
| 0x9375 | Timing-Master: kann Kanal nicht reservieren; Ergebnistabelle (RAT) voll |
| 0x9376 | Diagnose-Master-Client: Datenzwischenablage im Active Response Handler übergelaufen |
| 0x9377 | DM_Queue_DELETED?? |
| 0x9378 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 |
| 0x9379 | Funktionsblock (Methode mit Handle): Lebenszeichen kommt nicht fristgerecht |
| 0x937A | Funktionsblock (Methode): Lebenszeichen kommt nicht fristgerecht |
| 0x937B | MOST: Ring unerlaubt geweckt |
| 0x937C | DTC zum Ausfall Botschaft |
| 0x9361 | SW Error - MPEG APPL FRONTEND: Frontend: could not be started |
| 0x9362 | SW Error - MPEG APPL STI: STI-Manager: could not started |
| 0x9363 | SW Error - MPEG APPL BWL: BrowserList: could not be started |
| 0x9364 | SW Error - MPEG APPL TVAPI: TV-API: re-started |
| 0x9365 | SW Error - MPEG APPL HMI: HMI Manager: could not be started |
| 0x9366 | SW Error - MPEG APPL TELETEXT: Teletext: could not be started |
| 0x9367 | SW Error - MPEG APPL DATAPOOL: DataPool: could not be started |
| 0x9368 | SW Error - MPEG APPL BML: ISDBT only: BML could not be started |
| 0x9369 | HW Error - FPGA CONFIG: FPGA configuration failed |
| 0x936A | HW Error - ATTACH INIC: attach INIC failed |
| 0x936B | SW Error - WATCHDOG RESET ST STARTUP: watchdog reset ST startup |
| 0x936C | HW Error - MPEG I2C ST: ISDBT only: I2C ST failed |
| 0x936D | HW Error - USB OVERCURRENT: USB overcurrent |
| 0x936F | SW Error - WATCHDOG RESET ST PERIODIC: watchdog reset ST periodic |
| 0x9370 | HW Error - NEC SHARED RAM: NEC access to shared RAM failed |
| 0x9372 | HW Error - NEC EXTERNAL FLASH: NEC access to external RAM failed |
| 0x937D | MPEG_DIBCOM_RESET |
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
| F_UWB_ERW | nein |

### TANTENNE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | AM/FM Antenne |
| 0x00000002 | GPS Antenne |
| 0x00000003 | AM/FM Antenne und GPS Antenne |
| 0x00000004 | DAB L-BAND Antenne |
| 0x00000005 | AM/FM Antenne und DAB L-BAND Antenne |
| 0x00000006 | GPS Antenne und DAB L-BAND Antenne |
| 0x00000007 | AM/FM Antenne, GPS Antenne und DAB L-BAND Antenne |
| 0x00000008 | DAB BAND III Antenne |
| 0x00000009 | AM/FM Antenne und DAB BAND III Antenne |
| 0x0000000A | GPS Antenne und DAB BAND III Antenne |
| 0x0000000B | AM/FM Antenne, GPS Antenne und DAB BAND III Antenne |
| 0x0000000C | DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x0000000D | AM/FM Antenne, DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x0000000E | GPS Antenne, DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x0000000F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x00000010 | VICS FM Antenne |
| 0x00000011 | AM/FM Antenne und VICS FM Antenne |
| 0x00000012 | GPS Antenne und VICS FM Antenne |
| 0x00000013 | AM/FM Antenne, GPS Antenne und VICS FM Antenne |
| 0x00000014 | DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000015 | AM/FM Antenne, DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000016 | GPS Antenne, DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000017 | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000018 | DAB BAND III Antenne und VICS FM Antenne |
| 0x00000019 | AM/FM Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001A | GPS Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001B | AM/FM Antenne, GPS Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001C | DAB L-BAND Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001D | AM/FM Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001E | GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und |
| 0x00000020 | VICS Beacon Antenne |
| 0x00000021 | AM/FM Antenne und VICS Beacon Antenne |
| 0x00000022 | GPS Antenne und VICS Beacon Antenne |
| 0x00000023 | AM/FM Antenne, GPS Antenne und VICS Beacon Antenne |
| 0x00000024 | DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000025 | AM/FM Antenne, DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000026 | GPS Antenne, DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000027 | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000028 | DAB BAND III Antenne und VICS Beacon Antenne |
| 0x00000029 | AM/FM Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002A | GPS Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002B | AM/FM Antenne, GPS Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002C | DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002D | AM/FM Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002E | GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x00000030 | VICS FM Antenne und VICS Beacon Antenne |
| 0x00000031 | AM/FM Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000032 | GPS Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000033 | AM/FM Antenne, GPS Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000034 | DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000035 | AM/FM Antenne, DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000036 | GPS Antenne, DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000037 | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000038 | DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000039 | AM/FM Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003A | GPS Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003B | AM/FM Antenne, GPS Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003C | DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003D | AM/FM Antenne, DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003E | GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000040 | TV1 Antenne |
| 0x00000080 | TV2 Antenne |
| 0x000000C0 | TV1 und TV2 Antenne |
| 0x00000100 | TV3 Antenne |
| 0x00000140 | TV1 und TV3 Antenne |
| 0x00000180 | TV2 und TV3 Antenne |
| 0x000001C0 | TV1, TV2 und TV3 Antenne |
| 0x00000200 | SDARS Antenne |
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
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

### TTVREGION

| WERT | TEXT |
| --- | --- |
| 0x01 | Nordamerika |
| 0x02 | Mittelamerika |
| 0x03 | Südamerika |
| 0x04 | Karibik |
| 0x05 | Europa/Mitteleuropa |
| 0x06 | Frankreich |
| 0x07 | Russland |
| 0x08 | Afrika/Nordafrika |
| 0x09 | Naher Osten |
| 0x0A | Asien |
| 0x0B | Pazifik |
| 0x0C | Ozeanien/Australien |
| 0x0D | China |
| 0x0E | Hong Kong |
| 0x0F | Taiwan |
| 0x10 | Westeuropa |
| 0x11 | Osteuropa |
| 0x12 | Nordosteuropa |
| 0x13 | Türkei |
| 0x14 | Griechenland |
| 0x15 | Israel |
| 0x16 | Mittel-/Südafrika |
| 0xFF | Nicht definiert |

### TVIDEOAUSGANG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Ausgänge |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0003 | Ausgang 1 und 2 |
| 0x0004 | Ausgang 3 |
| 0x0005 | Ausgang 1 und 3 |
| 0x0006 | Ausgang 2 und 3 |
| 0x0007 | Ausgang 1, 2 und 3 |
| 0x0008 | Ausgang 4 |
| 0x0009 | Ausgang 1 und 4 |
| 0x000A | Ausgang 2 und 4 |
| 0x000B | Ausgang 1, 2 und 4 |
| 0x000C | Ausgang 3 und 4 |
| 0x000D | Ausgang 1, 2 und 4 |
| 0x000E | Ausgang 2, 3 und 4 |
| 0x000F | Ausgang 1, 2, 3 und 4 |
| 0x0010 | Ausgang 5 |
| 0x0011 | Ausgang 1 und 5 |
| 0x0012 | Ausgang 2 und 5 |
| 0x0013 | Ausgang 1,2 und 5 |
| 0x0014 | Ausgang 3 und 5 |
| 0x0015 | Ausgang 1,3 und 5 |
| 0x0016 | Ausgang 2,3 und 5 |
| 0x0017 | Ausgang 1, 2 und 3 und 5 |
| 0x0018 | Ausgang 4 und 5 |
| 0x0019 | Ausgang 1, 4 und 5 |
| 0x001A | Ausgang 2, 4 und 5 |
| 0x001B | Ausgang 1, 2, 4 und 5 |
| 0x001C | Ausgang 3, 4 und 5 |
| 0x001D | Ausgang 1, 2, 4 und 5 |
| 0x001E | Ausgang 2, 3, 4 und 5 |
| 0x001F | Ausgang 1, 2, 3, 4 und 5 |
| 0xFFFF | Nicht definiert |

### TSIGNALART

| WERT | TEXT |
| --- | --- |
| 0x01 | Realbild |
| 0x02 | Testbild |
| 0x03 | Signal abschalten |
| 0x04 | Testbild mit Alive Counter (ACNT) |
| 0x05 | Testbild mit stehendem ACNT |
| 0x06 | Testbild mit leicht gestörtem ACNT |
| 0x07 | Testbild mit stark gestörtem ACNT |
| 0x08 | Testbild mit leicht springendem ACNT |
| 0x09 | Testbild mit stark springendem ACNT |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | alle Routinen |
| 0x00000001 | Internal Supply Voltages |
| 0x00000002 | FOT Temperature |
| 0x00000004 | Board Temperature |
| 0x00000008 | NEC-Flash Checksum |
| 0x00000010 | EEPROM Checksum |
| 0x00000020 | TOSHIBA-Flash Checksum |
| 0x00000040 | TOSHIBA-RAM Integrity |
| 0x00000080 | UART-Interface Communication: NEC / TOSHIBA |
| 0x00000100 | Host-interface Communication: FPGA / TOSHIBA |
| 0x00000200 | SPI-interface Communication: FPGA / NEC |
| 0x00000400 | not used |
| 0x00000800 | Internal PLL lock of Tuner-IC´s |
| 0x00001000 | Internal PLL lock of FPGA |
| 0x00002000 | I2C Device Status |
| 0x00004000 | Antenna Input |
| 0x00008000 | Video Output |
| 0x00010000 | Fan Rotation |
| 0x00020000 | Verify the application status |
| 0xFFFFFFFF | Nicht definiert |

### TLEITUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### TAB_HW_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00000020 | TV-Modul2 ECE Standard |
| 0x00000040 | TV-Modul2 ECE RSE |
| 0x00000080 | TV-Modul2 Japan Standard |
| 0x00000100 | TV-Modul2 Japan RSE |
| 0x00000200 | TV-Modul2 China Standard |
| 0x00000400 | TV-Modul2 China RSE |
| 0xFFFFFFFF | nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Harman Becker |
| 0x01 | Siemens VDO |
| 0x02 | Visteon |
| 0x03 | Alpine |
| 0x04 | Lear |
| 0x05 | Fuba |
| 0x06 | Hirschmann Car Communication |
| 0xFF | Nicht definiert |

### TAB_PHANTOM_POWER_SUPPLY_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Phantomspannung nicht aktiviert |
| 0x01 | Phantomspannung aktiv |
| 0x02 | Phantomspannung konnte nicht aktiviert werden |
| 0x03 | Phantomspannung konnte nicht deaktiviert werden |
| 0xFF | Ungültiger Wert |

### TAB_SAVE_RAM_DATA

| WERT | TEXT |
| --- | --- |
| 0x00 | Datensicherung nicht gestartet |
| 0x01 | Datensicherung läuft |
| 0x02 | Datensicherung beendet ohne Fehler |
| 0x03 | Datensicherung beendet mit Fehlern |
| 0x04 | Datensicherung unterbrochen |
| 0xFF | Ungültig |

### TAB_USB_INTERFACE_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | kein USB Interface angeschlossen |
| 0x01 | USB Interface angeschlossen |
| 0xFF | Ungültig |

### TAB_TVM_KARTENTYP

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Kartenleser vorhanden |
| 0x01 | keine Karte gesteckt |
| 0x02 | MediaFlo-Card |
| 0x03 | CMMB-Card |
| 0x04 | ISBD-T-Card (BCAS) |
| 0xFF | Ungültiger Wert |
