# cid_90.prg

## General

|  |  |
| --- | --- |
| File | cid_90.prg |
| Type | PRG |
| Jobs | 59 |
| Tables | 26 |
| Origin | BMW EI-42 Mark Pilkington |
| Revision | 3.000 |
| Author | AlpineElectronics AOGE-MN G.Grieser |
| ECU Comment | E9x/E6x CID gueltig ab I4.50 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CID_90 Zentrales Info Display |  |  |
| ORIGIN | string | BMW EI-42 Mark Pilkington |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | AlpineElectronics AOGE-MN G.Grieser |  |  |
| COMMENT | string | E9x/E6x CID gueltig ab I4.50 |  |  |
| PACKAGE | string | 1.42 |  |  |
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

### STATUS_ADC

Read out of ADC values Only those results that are identical with CID_60 --> specified in SGBD_Spec030811.doc KWP2000: $30 01 inputOutputControlByLocalIdentifier E9X CID Display Read CID Status

_No arguments._

### STATUS_DISPLAY

Read out of ADC values Only those results that are NOT identical with CID_60 --> specified in SGBD_Spec030717.doc KWP2000: $30 01 inputOutputControlByLocalIdentifier

_No arguments._

### STATUS_KLEMME_R

Read out of status of Clamp R --> specified in SGBD_Spec030717.doc KWP2000: $30 01 inputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_HELLIGKEIT

KWP2000: $300702 inputOutputControlByLocalIdentifier E9X CID Display Direct setting of output PWM value

| Name | Type | Description |
| --- | --- | --- |
| PWM_VALUE | int | Range 0 - 20000(DEC) |

### STEUERN_LCD_POWER

KWP2000: $300704 inputOutputControlByLocalIdentifier E9X CID Display LCD Power supply

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | string | SELECT OFF,ON |

### STEUERN_HELLIGKEIT_AUTORUN_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $01 brightness autorun

| Name | Type | Description |
| --- | --- | --- |
| PWM_VALUE | int | Range 0 - 20000(DEC) |

### RESET_RETRY_COUNTER

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Wenn PECUHN 6948395 oder 6948396 Dann Überschreiben des Retry Counters auf 0xFF KWP2000: $3D WriteMemoryByAddress Modus  : Default

_No arguments._

### STATUS_TEMP_HISTORIE_LESEN

KWP2000: $23 ReadMemoryByAddress CID HR transmits temperature history to tester

_No arguments._

### STEUERN_NO_SIGNAL_PICTURE

KWP2000: $300707 inputOutputControlByLocalIdentifier CID HR Display will switch from LVDS output to no signal picture output

_No arguments._

### STEUERN_TESTBILD

KWP2000: $300705 inputOutputControlByLocalIdentifier CID HR Display will switch from LVDS output to test picture output

| Name | Type | Description |
| --- | --- | --- |
| PICTURE_ID | int | Range 0 - 33(DEC) |

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
| 0xA2 |  |
| 0xA3 | CONTI VDO |
| 0xA2 | Lighting Reutlingen GmbH |
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
| 2 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA468 | Fehler im Videosignal |
| 0xA469 | Elektronikausfall intern |
| 0xA46A | Uebertemperatur Abschaltung (kein Defekt) |
| 0xA46B | Ueberspannung erkannt |
| 0xA46C | Energiesparmode aktiv |
| 0xA46D | Funktionsstoerung CID durch Reset der Headunit |
| 0xE5C4 | K-CAN Fehler |
| 0xE5C7 | K-CAN Fehler, Bus fehlt |
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
| 0xA468 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xA469 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xA46A | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xA46B | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xA46C | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xA46D | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xE5C4 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xE5C7 | 0x07 | 0x08 | 0x09 | 0x10 |
| default | 0x07 | 0x08 | 0x09 | 0x10 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x06 | Current Relative Time | Sekunden | high | signed long | - | 1 | 1 | 0 |
| 0x07 | Exterior Temperature | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x08 | Current LCD Temperature | Grad C | high | unsigned int | - | 1 | 10 | 0 |
| 0x09 | Max LCD Temperature | Grad C | high | unsigned int | - | 1 | 10 | 0 |
| 0x10 | Current LCD lighting time operation counter | Sekunden | high | signed long | - | 1 | 1 | 0 |
| 0xFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

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
| 0x9380 | Temperatursensor im LCD fehlerhaft |
| 0x9381 | Temperatursensor auf der Platine fehlerhaft |
| 0x9382 | EEPROM Checksum-Fehler |
| 0x9383 | LED-Backlight defekt |
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
| 0x9380 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0x9381 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0x9382 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0x9383 | 0x07 | 0x08 | 0x09 | 0x10 |
| default | 0x07 | 0x08 | 0x09 | 0x10 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x06 | Current Relative Time | Sekunden | high | signed long | - | 1 | 1 | 0 |
| 0x07 | Exterior Temperature | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x08 | Current LCD Temperature | Grad C | high | unsigned int | - | 1 | 10 | 0 |
| 0x09 | Max LCD Temperature | Grad C | high | unsigned int | - | 1 | 10 | 0 |
| 0x10 | Current LCD lighting time operation counter | Sekunden | high | signed long | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### ADJUSTTYPE

| ADJUST_CODE | ADJUST_TYPE |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON |

### VOLTAGE

| AD | VOLT_HEX | VOLT_DEC |
| --- | --- | --- |
| 241 | F1 | 6 |
| 242 | F2 | 6,023809524 |
| 243 | F3 | 6,047619048 |
| 244 | F4 | 6,071428571 |
| 245 | F5 | 6,095238095 |
| 246 | F6 | 6,119047619 |
| 247 | F7 | 6,142857143 |
| 248 | F8 | 6,166666667 |
| 249 | F9 | 6,19047619 |
| 250 | FA | 6,214285714 |
| 251 | FB | 6,238095238 |
| 252 | FC | 6,261904762 |
| 253 | FD | 6,285714286 |
| 254 | FE | 6,30952381 |
| 255 | FF | 6,333333333 |
| 256 | 100 | 6,357142857 |
| 257 | 101 | 6,380952381 |
| 258 | 102 | 6,404761905 |
| 259 | 103 | 6,428571429 |
| 260 | 104 | 6,452380952 |
| 261 | 105 | 6,476190476 |
| 262 | 106 | 6,5 |
| 263 | 107 | 6,525 |
| 264 | 108 | 6,55 |
| 265 | 109 | 6,575 |
| 266 | 10A | 6,6 |
| 267 | 10B | 6,625 |
| 268 | 10C | 6,65 |
| 269 | 10D | 6,675 |
| 270 | 10E | 6,7 |
| 271 | 10F | 6,725 |
| 272 | 110 | 6,75 |
| 273 | 111 | 6,775 |
| 274 | 112 | 6,8 |
| 275 | 113 | 6,825 |
| 276 | 114 | 6,85 |
| 277 | 115 | 6,875 |
| 278 | 116 | 6,9 |
| 279 | 117 | 6,925 |
| 280 | 118 | 6,95 |
| 281 | 119 | 6,975 |
| 282 | 11A | 7 |
| 283 | 11B | 7,023809524 |
| 284 | 11C | 7,047619048 |
| 285 | 11D | 7,071428571 |
| 286 | 11E | 7,095238095 |
| 287 | 11F | 7,119047619 |
| 288 | 120 | 7,142857143 |
| 289 | 121 | 7,166666667 |
| 290 | 122 | 7,19047619 |
| 291 | 123 | 7,214285714 |
| 292 | 124 | 7,238095238 |
| 293 | 125 | 7,261904762 |
| 294 | 126 | 7,285714286 |
| 295 | 127 | 7,30952381 |
| 296 | 128 | 7,333333333 |
| 297 | 129 | 7,357142857 |
| 298 | 12A | 7,380952381 |
| 299 | 12B | 7,404761905 |
| 300 | 12C | 7,428571429 |
| 301 | 12D | 7,452380952 |
| 302 | 12E | 7,476190476 |
| 303 | 12F | 7,5 |
| 304 | 130 | 7,525 |
| 305 | 131 | 7,55 |
| 306 | 132 | 7,575 |
| 307 | 133 | 7,6 |
| 308 | 134 | 7,625 |
| 309 | 135 | 7,65 |
| 310 | 136 | 7,675 |
| 311 | 137 | 7,7 |
| 312 | 138 | 7,725 |
| 313 | 139 | 7,75 |
| 314 | 13A | 7,775 |
| 315 | 13B | 7,8 |
| 316 | 13C | 7,825 |
| 317 | 13D | 7,85 |
| 318 | 13E | 7,875 |
| 319 | 13F | 7,9 |
| 320 | 140 | 7,925 |
| 321 | 141 | 7,95 |
| 322 | 142 | 7,975 |
| 323 | 143 | 8 |
| 324 | 144 | 8,023809524 |
| 325 | 145 | 8,047619048 |
| 326 | 146 | 8,071428571 |
| 327 | 147 | 8,095238095 |
| 328 | 148 | 8,119047619 |
| 329 | 149 | 8,142857143 |
| 330 | 14A | 8,166666667 |
| 331 | 14B | 8,19047619 |
| 332 | 14C | 8,214285714 |
| 333 | 14D | 8,238095238 |
| 334 | 14E | 8,261904762 |
| 335 | 14F | 8,285714286 |
| 336 | 150 | 8,30952381 |
| 337 | 151 | 8,333333333 |
| 338 | 152 | 8,357142857 |
| 339 | 153 | 8,380952381 |
| 340 | 154 | 8,404761905 |
| 341 | 155 | 8,428571429 |
| 342 | 156 | 8,452380952 |
| 343 | 157 | 8,476190476 |
| 344 | 158 | 8,5 |
| 345 | 159 | 8,525 |
| 346 | 15A | 8,55 |
| 347 | 15B | 8,575 |
| 348 | 15C | 8,6 |
| 349 | 15D | 8,625 |
| 350 | 15E | 8,65 |
| 351 | 15F | 8,675 |
| 352 | 160 | 8,7 |
| 353 | 161 | 8,725 |
| 354 | 162 | 8,75 |
| 355 | 163 | 8,775 |
| 356 | 164 | 8,8 |
| 357 | 165 | 8,825 |
| 358 | 166 | 8,85 |
| 359 | 167 | 8,875 |
| 360 | 168 | 8,9 |
| 361 | 169 | 8,925 |
| 362 | 16A | 8,95 |
| 363 | 16B | 8,975 |
| 364 | 16C | 9 |
| 365 | 16D | 9,023809524 |
| 366 | 16E | 9,047619048 |
| 367 | 16F | 9,071428571 |
| 368 | 170 | 9,095238095 |
| 369 | 171 | 9,119047619 |
| 370 | 172 | 9,142857143 |
| 371 | 173 | 9,166666667 |
| 372 | 174 | 9,19047619 |
| 373 | 175 | 9,214285714 |
| 374 | 176 | 9,238095238 |
| 375 | 177 | 9,261904762 |
| 376 | 178 | 9,285714286 |
| 377 | 179 | 9,30952381 |
| 378 | 17A | 9,333333333 |
| 379 | 17B | 9,357142857 |
| 380 | 17C | 9,380952381 |
| 381 | 17D | 9,404761905 |
| 382 | 17E | 9,428571429 |
| 383 | 17F | 9,452380952 |
| 384 | 180 | 9,476190476 |
| 385 | 181 | 9,5 |
| 386 | 182 | 9,523809524 |
| 387 | 183 | 9,547619048 |
| 388 | 184 | 9,571428571 |
| 389 | 185 | 9,595238095 |
| 390 | 186 | 9,619047619 |
| 391 | 187 | 9,642857143 |
| 392 | 188 | 9,666666667 |
| 393 | 189 | 9,69047619 |
| 394 | 18A | 9,714285714 |
| 395 | 18B | 9,738095238 |
| 396 | 18C | 9,761904762 |
| 397 | 18D | 9,785714286 |
| 398 | 18E | 9,80952381 |
| 399 | 18F | 9,833333333 |
| 400 | 190 | 9,857142857 |
| 401 | 191 | 9,880952381 |
| 402 | 192 | 9,904761905 |
| 403 | 193 | 9,928571429 |
| 404 | 194 | 9,952380952 |
| 405 | 195 | 9,976190476 |
| 406 | 196 | 10 |
| 407 | 197 | 10,025 |
| 408 | 198 | 10,05 |
| 409 | 199 | 10,075 |
| 410 | 19A | 10,1 |
| 411 | 19B | 10,125 |
| 412 | 19C | 10,15 |
| 413 | 19D | 10,175 |
| 414 | 19E | 10,2 |
| 415 | 19F | 10,225 |
| 416 | 1A0 | 10,25 |
| 417 | 1A1 | 10,275 |
| 418 | 1A2 | 10,3 |
| 419 | 1A3 | 10,325 |
| 420 | 1A4 | 10,35 |
| 421 | 1A5 | 10,375 |
| 422 | 1A6 | 10,4 |
| 423 | 1A7 | 10,425 |
| 424 | 1A8 | 10,45 |
| 425 | 1A9 | 10,475 |
| 426 | 1AA | 10,5 |
| 427 | 1AB | 10,52380952 |
| 428 | 1AC | 10,54761905 |
| 429 | 1AD | 10,57142857 |
| 430 | 1AE | 10,5952381 |
| 431 | 1AF | 10,61904762 |
| 432 | 1B0 | 10,64285714 |
| 433 | 1B1 | 10,66666667 |
| 434 | 1B2 | 10,69047619 |
| 435 | 1B3 | 10,71428571 |
| 436 | 1B4 | 10,73809524 |
| 437 | 1B5 | 10,76190476 |
| 438 | 1B6 | 10,78571429 |
| 439 | 1B7 | 10,80952381 |
| 440 | 1B8 | 10,83333333 |
| 441 | 1B9 | 10,85714286 |
| 442 | 1BA | 10,88095238 |
| 443 | 1BB | 10,9047619 |
| 444 | 1BC | 10,92857143 |
| 445 | 1BD | 10,95238095 |
| 446 | 1BE | 10,97619048 |
| 447 | 1BF | 11 |
| 448 | 1C0 | 11,025 |
| 449 | 1C1 | 11,05 |
| 450 | 1C2 | 11,075 |
| 451 | 1C3 | 11,1 |
| 452 | 1C4 | 11,125 |
| 453 | 1C5 | 11,15 |
| 454 | 1C6 | 11,175 |
| 455 | 1C7 | 11,2 |
| 456 | 1C8 | 11,225 |
| 457 | 1C9 | 11,25 |
| 458 | 1CA | 11,275 |
| 459 | 1CB | 11,3 |
| 460 | 1CC | 11,325 |
| 461 | 1CD | 11,35 |
| 462 | 1CE | 11,375 |
| 463 | 1CF | 11,4 |
| 464 | 1D0 | 11,425 |
| 465 | 1D1 | 11,45 |
| 466 | 1D2 | 11,475 |
| 467 | 1D3 | 11,5 |
| 468 | 1D4 | 11,52380952 |
| 469 | 1D5 | 11,54761905 |
| 470 | 1D6 | 11,57142857 |
| 471 | 1D7 | 11,5952381 |
| 472 | 1D8 | 11,61904762 |
| 473 | 1D9 | 11,64285714 |
| 474 | 1DA | 11,66666667 |
| 475 | 1DB | 11,69047619 |
| 476 | 1DC | 11,71428571 |
| 477 | 1DD | 11,73809524 |
| 478 | 1DE | 11,76190476 |
| 479 | 1DF | 11,78571429 |
| 480 | 1E0 | 11,80952381 |
| 481 | 1E1 | 11,83333333 |
| 482 | 1E2 | 11,85714286 |
| 483 | 1E3 | 11,88095238 |
| 484 | 1E4 | 11,9047619 |
| 485 | 1E5 | 11,92857143 |
| 486 | 1E6 | 11,95238095 |
| 487 | 1E7 | 11,97619048 |
| 488 | 1E8 | 12 |
| 489 | 1E9 | 12,025 |
| 490 | 1EA | 12,05 |
| 491 | 1EB | 12,075 |
| 492 | 1EC | 12,1 |
| 493 | 1ED | 12,125 |
| 494 | 1EE | 12,15 |
| 495 | 1EF | 12,175 |
| 496 | 1F0 | 12,2 |
| 497 | 1F1 | 12,225 |
| 498 | 1F2 | 12,25 |
| 499 | 1F3 | 12,275 |
| 500 | 1F4 | 12,3 |
| 501 | 1F5 | 12,325 |
| 502 | 1F6 | 12,35 |
| 503 | 1F7 | 12,375 |
| 504 | 1F8 | 12,4 |
| 505 | 1F9 | 12,425 |
| 506 | 1FA | 12,45 |
| 507 | 1FB | 12,475 |
| 508 | 1FC | 12,5 |
| 509 | 1FD | 12,52380952 |
| 510 | 1FE | 12,54761905 |
| 511 | 1FF | 12,57142857 |
| 512 | 200 | 12,5952381 |
| 513 | 201 | 12,61904762 |
| 514 | 202 | 12,64285714 |
| 515 | 203 | 12,66666667 |
| 516 | 204 | 12,69047619 |
| 517 | 205 | 12,71428571 |
| 518 | 206 | 12,73809524 |
| 519 | 207 | 12,76190476 |
| 520 | 208 | 12,78571429 |
| 521 | 209 | 12,80952381 |
| 522 | 20A | 12,83333333 |
| 523 | 20B | 12,85714286 |
| 524 | 20C | 12,88095238 |
| 525 | 20D | 12,9047619 |
| 526 | 20E | 12,92857143 |
| 527 | 20F | 12,95238095 |
| 528 | 210 | 12,97619048 |
| 529 | 211 | 13 |
| 530 | 212 | 13,025 |
| 531 | 213 | 13,05 |
| 532 | 214 | 13,075 |
| 533 | 215 | 13,1 |
| 534 | 216 | 13,125 |
| 535 | 217 | 13,15 |
| 536 | 218 | 13,175 |
| 537 | 219 | 13,2 |
| 538 | 21A | 13,225 |
| 539 | 21B | 13,25 |
| 540 | 21C | 13,275 |
| 541 | 21D | 13,3 |
| 542 | 21E | 13,325 |
| 543 | 21F | 13,35 |
| 544 | 220 | 13,375 |
| 545 | 221 | 13,4 |
| 546 | 222 | 13,425 |
| 547 | 223 | 13,45 |
| 548 | 224 | 13,475 |
| 549 | 225 | 13,5 |
| 550 | 226 | 13,52380952 |
| 551 | 227 | 13,54761905 |
| 552 | 228 | 13,57142857 |
| 553 | 229 | 13,5952381 |
| 554 | 22A | 13,61904762 |
| 555 | 22B | 13,64285714 |
| 556 | 22C | 13,66666667 |
| 557 | 22D | 13,69047619 |
| 558 | 22E | 13,71428571 |
| 559 | 22F | 13,73809524 |
| 560 | 230 | 13,76190476 |
| 561 | 231 | 13,78571429 |
| 562 | 232 | 13,80952381 |
| 563 | 233 | 13,83333333 |
| 564 | 234 | 13,85714286 |
| 565 | 235 | 13,88095238 |
| 566 | 236 | 13,9047619 |
| 567 | 237 | 13,92857143 |
| 568 | 238 | 13,95238095 |
| 569 | 239 | 13,97619048 |
| 570 | 23A | 14 |
| 571 | 23B | 14,025 |
| 572 | 23C | 14,05 |
| 573 | 23D | 14,075 |
| 574 | 23E | 14,1 |
| 575 | 23F | 14,125 |
| 576 | 240 | 14,15 |
| 577 | 241 | 14,175 |
| 578 | 242 | 14,2 |
| 579 | 243 | 14,225 |
| 580 | 244 | 14,25 |
| 581 | 245 | 14,275 |
| 582 | 246 | 14,3 |
| 583 | 247 | 14,325 |
| 584 | 248 | 14,35 |
| 585 | 249 | 14,375 |
| 586 | 24A | 14,4 |
| 587 | 24B | 14,425 |
| 588 | 24C | 14,45 |
| 589 | 24D | 14,475 |
| 590 | 24E | 14,5 |
| 591 | 24F | 14,52380952 |
| 592 | 250 | 14,54761905 |
| 593 | 251 | 14,57142857 |
| 594 | 252 | 14,5952381 |
| 595 | 253 | 14,61904762 |
| 596 | 254 | 14,64285714 |
| 597 | 255 | 14,66666667 |
| 598 | 256 | 14,69047619 |
| 599 | 257 | 14,71428571 |
| 600 | 258 | 14,73809524 |
| 601 | 259 | 14,76190476 |
| 602 | 25A | 14,78571429 |
| 603 | 25B | 14,80952381 |
| 604 | 25C | 14,83333333 |
| 605 | 25D | 14,85714286 |
| 606 | 25E | 14,88095238 |
| 607 | 25F | 14,9047619 |
| 608 | 260 | 14,92857143 |
| 609 | 261 | 14,95238095 |
| 610 | 262 | 14,97619048 |
| 611 | 263 | 15 |
| 612 | 264 | 15,02380952 |
| 613 | 265 | 15,04761905 |
| 614 | 266 | 15,07142857 |
| 615 | 267 | 15,0952381 |
| 616 | 268 | 15,11904762 |
| 617 | 269 | 15,14285714 |
| 618 | 26A | 15,16666667 |
| 619 | 26B | 15,19047619 |
| 620 | 26C | 15,21428571 |
| 621 | 26D | 15,23809524 |
| 622 | 26E | 15,26190476 |
| 623 | 26F | 15,28571429 |
| 624 | 270 | 15,30952381 |
| 625 | 271 | 15,33333333 |
| 626 | 272 | 15,35714286 |
| 627 | 273 | 15,38095238 |
| 628 | 274 | 15,4047619 |
| 629 | 275 | 15,42857143 |
| 630 | 276 | 15,45238095 |
| 631 | 277 | 15,47619048 |
| 632 | 278 | 15,5 |
| 633 | 279 | 15,525 |
| 634 | 27A | 15,55 |
| 635 | 27B | 15,575 |
| 636 | 27C | 15,6 |
| 637 | 27D | 15,625 |
| 638 | 27E | 15,65 |
| 639 | 27F | 15,675 |
| 640 | 280 | 15,7 |
| 641 | 281 | 15,725 |
| 642 | 282 | 15,75 |
| 643 | 283 | 15,775 |
| 644 | 284 | 15,8 |
| 645 | 285 | 15,825 |
| 646 | 286 | 15,85 |
| 647 | 287 | 15,875 |
| 648 | 288 | 15,9 |
| 649 | 289 | 15,925 |
| 650 | 28A | 15,95 |
| 651 | 28B | 15,975 |
| 652 | 28C | 16 |
| 653 | 28D | 16,02380952 |
| 654 | 28E | 16,04761905 |
| 655 | 28F | 16,07142857 |
| 656 | 290 | 16,0952381 |
| 657 | 291 | 16,11904762 |
| 658 | 292 | 16,14285714 |
| 659 | 293 | 16,16666667 |
| 660 | 294 | 16,19047619 |
| 661 | 295 | 16,21428571 |
| 662 | 296 | 16,23809524 |
| 663 | 297 | 16,26190476 |
| 664 | 298 | 16,28571429 |
| 665 | 299 | 16,30952381 |
| 666 | 29A | 16,33333333 |
| 667 | 29B | 16,35714286 |
| 668 | 29C | 16,38095238 |
| 669 | 29D | 16,4047619 |
| 670 | 29E | 16,42857143 |
| 671 | 29F | 16,45238095 |
| 672 | 2A0 | 16,47619048 |
| 673 | 2A1 | 16,5 |
| 674 | 2A2 | 16,525 |
| 675 | 2A3 | 16,55 |
| 676 | 2A4 | 16,575 |
| 677 | 2A5 | 16,6 |
| 678 | 2A6 | 16,625 |
| 679 | 2A7 | 16,65 |
| 680 | 2A8 | 16,675 |
| 681 | 2A9 | 16,7 |
| 682 | 2AA | 16,725 |
| 683 | 2AB | 16,75 |
| 684 | 2AC | 16,775 |
| 685 | 2AD | 16,8 |
| 686 | 2AE | 16,825 |
| 687 | 2AF | 16,85 |
| 688 | 2B0 | 16,875 |
| 689 | 2B1 | 16,9 |
| 690 | 2B2 | 16,925 |
| 691 | 2B3 | 16,95 |
| 692 | 2B4 | 16,975 |
| 693 | 2B5 | 17 |
| 694 | 2B6 | 17,02380952 |
| 695 | 2B7 | 17,04761905 |
| 696 | 2B8 | 17,07142857 |
| 697 | 2B9 | 17,0952381 |
| 698 | 2BA | 17,11904762 |
| 699 | 2BB | 17,14285714 |
| 700 | 2BC | 17,16666667 |
| 701 | 2BD | 17,19047619 |
| 702 | 2BE | 17,21428571 |
| 703 | 2BF | 17,23809524 |
| 704 | 2C0 | 17,26190476 |
| 705 | 2C1 | 17,28571429 |
| 706 | 2C2 | 17,30952381 |
| 707 | 2C3 | 17,33333333 |
| 708 | 2C4 | 17,35714286 |
| 709 | 2C5 | 17,38095238 |
| 710 | 2C6 | 17,4047619 |
| 711 | 2C7 | 17,42857143 |
| 712 | 2C8 | 17,45238095 |
| 713 | 2C9 | 17,47619048 |
| 714 | 2CA | 17,5 |
| 715 | 2CB | 17,525 |
| 716 | 2CC | 17,55 |
| 717 | 2CD | 17,575 |
| 718 | 2CE | 17,6 |
| 719 | 2CF | 17,625 |
| 720 | 2D0 | 17,65 |
| 721 | 2D1 | 17,675 |
| 722 | 2D2 | 17,7 |
| 723 | 2D3 | 17,725 |
| 724 | 2D4 | 17,75 |
| 725 | 2D5 | 17,775 |
| 726 | 2D6 | 17,8 |
| 727 | 2D7 | 17,825 |
| 728 | 2D8 | 17,85 |
| 729 | 2D9 | 17,875 |
| 730 | 2DA | 17,9 |
| 731 | 2DB | 17,925 |
| 732 | 2DC | 17,95 |
| 733 | 2DD | 17,975 |
| 734 | 2DE | 18 |

### TEMPERATURE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x08 | 0x09 |
