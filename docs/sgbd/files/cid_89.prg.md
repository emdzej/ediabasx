# cid_89.prg

## General

|  |  |
| --- | --- |
| File | cid_89.prg |
| Type | PRG |
| Jobs | 65 |
| Tables | 26 |
| Origin | BMW EI-42 Thomas Trampler |
| Revision | 3.000 |
| Author | AlpineElectronics AOGE-MN G.Grieser |
| ECU Comment | E89 CID gueltig ab I410 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CID_89 Zentrales Info Display |  |  |
| ORIGIN | string | BMW EI-42 Thomas Trampler |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | AlpineElectronics AOGE-MN G.Grieser |  |  |
| COMMENT | string | E89 CID gueltig ab I410 |  |  |
| PACKAGE | string | 1.43 |  |  |
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

### STATUS_ADC

Read out of ADC values Only those results that are identical with CID_60 --> specified in SGBD_Spec030811.doc KWP2000: $30 01 inputOutputControlByLocalIdentifier E9X CID Display Read CID Status

_No arguments._

### STEUERN_MOTOR_FLAP

KWP2000: $30070A inputOutputControlByLocalIdentifier E89 CID will change flap position

| Name | Type | Description |
| --- | --- | --- |
| MOVEMENT_MODE | int | Range 0 - 4(DEC) 0 OPEN 1 CLOSE 2 OPEN until ANGLE 3 CLOSE until ANGLE |
| ANGLE | int | Range 0 - 85(DEG) If MOVEMENT_MODE 2 or 3 |

### STEUERN_HELLIGKEIT_AUTORUN_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $01 brightness autorun

| Name | Type | Description |
| --- | --- | --- |
| PWM_VALUE | int | Range 0 - 20000(DEC) |

### STATUS_TEMP_HISTORIE_LESEN

KWP2000: $23 ReadMemoryByAddress CID HR transmits temperature history to tester

_No arguments._

### STEUERN_WINKEL_MAX

KWP2000: $3B WriteDataByLocalIdentifier $09 flap angle $00 minimum amplitude

| Name | Type | Description |
| --- | --- | --- |
| ANGLE_VALUE | int | Range 66 to 226 (0x42 to 0xE2 - AD Value) |

### STEUERN_WINKEL_MIN

KWP2000: $3B WriteDataByLocalIdentifier $09 flap angle $01 maximum amplitude

| Name | Type | Description |
| --- | --- | --- |
| ANGLE_VALUE | int | Range 816 to 976 (0x330 to 0x3D0 - AD Value) |

### STATUS_WINKEL_MAX

KWP2000: $21 WriteDataByLocalIdentifier $09 flap angle $00 minimum amplitude

_No arguments._

### STATUS_WINKEL_MIN

KWP2000: $21 WriteDataByLocalIdentifier $09 flap angle $01 maximum amplitude

_No arguments._

### STEUERN_TESTBILD

KWP2000: $300705 inputOutputControlByLocalIdentifier CID HR Display will switch from LVDS output to test picture output

| Name | Type | Description |
| --- | --- | --- |
| PICTURE_ID | int | Range 0 - 33(DEC) |

### STEUERN_KALIBRATION

KWP2000: $30070B inputOutputControlByLocalIdentifier CID E89 FLAP Display will switch to calibration mode

_No arguments._

### STATUS_KALIBRATION

KWP2000: $30070C inputOutputControlByLocalIdentifier CID E89 FLAP Display will switch to calibration mode

_No arguments._

### STEUERN_NO_SIGNAL_PICTURE

KWP2000: $300707 inputOutputControlByLocalIdentifier CID HR Display will switch from LVDS output to no signal picture output

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
| 0xA47E | Flap Fehler: Blockade |
| 0xA47F | Flap Fehler: Zeitüberschreitung |
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
| 0x07 | Exterior Temperature | Grad C | high | unsigned char | - | 1 | 2 | -40 |
| 0x08 | Current LCD Temperature | Grad C | high | unsigned int | - | 1 | 10 | 0 |
| 0x09 | Max LCD Temperature | Grad C | high | unsigned int | - | 1 | 10 | 0 |
| 0x10 | Current LCD lighting time operation counter | Sekunden | high | signed long | - | 1 | 1 | 0 |
| 0xff | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

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
| 0x9386 | FLAP angle sensor error |
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
| 0x9386 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0x9385 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0x9387 | 0x07 | 0x08 | 0x09 | 0x10 |
| 0xFFFF | 0x07 | 0x08 | 0x09 | 0x10 |

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
| 241 | F1 | 6,0000 |
| 242 | F2 | 6,0228 |
| 243 | F3 | 6,0456 |
| 244 | F4 | 6,0684 |
| 245 | F5 | 6,0912 |
| 246 | F6 | 6,1140 |
| 247 | F7 | 6,1368 |
| 248 | F8 | 6,1595 |
| 249 | F9 | 6,1823 |
| 250 | FA | 6,2051 |
| 251 | FB | 6,2279 |
| 252 | FC | 6,2507 |
| 253 | FD | 6,2735 |
| 254 | FE | 6,2963 |
| 255 | FF | 6,3191 |
| 256 | 100 | 6,3419 |
| 257 | 101 | 6,3647 |
| 258 | 102 | 6,3875 |
| 259 | 103 | 6,4103 |
| 260 | 104 | 6,4331 |
| 261 | 105 | 6,4558 |
| 262 | 106 | 6,4786 |
| 263 | 107 | 6,5014 |
| 264 | 108 | 6,5242 |
| 265 | 109 | 6,5470 |
| 266 | 10A | 6,5698 |
| 267 | 10B | 6,5926 |
| 268 | 10C | 6,6154 |
| 269 | 10D | 6,6382 |
| 270 | 10E | 6,6610 |
| 271 | 10F | 6,6838 |
| 272 | 110 | 6,7066 |
| 273 | 111 | 6,7294 |
| 274 | 112 | 6,7521 |
| 275 | 113 | 6,7749 |
| 276 | 114 | 6,7977 |
| 277 | 115 | 6,8205 |
| 278 | 116 | 6,8433 |
| 279 | 117 | 6,8661 |
| 280 | 118 | 6,8889 |
| 281 | 119 | 6,9117 |
| 282 | 11A | 6,9345 |
| 283 | 11B | 6,9573 |
| 284 | 11C | 6,9801 |
| 285 | 11D | 7,0029 |
| 286 | 11E | 7,0256 |
| 287 | 11F | 7,0484 |
| 288 | 120 | 7,0712 |
| 289 | 121 | 7,0940 |
| 290 | 122 | 7,1168 |
| 291 | 123 | 7,1396 |
| 292 | 124 | 7,1624 |
| 293 | 125 | 7,1852 |
| 294 | 126 | 7,2080 |
| 295 | 127 | 7,2308 |
| 296 | 128 | 7,2536 |
| 297 | 129 | 7,2764 |
| 298 | 12A | 7,2992 |
| 299 | 12B | 7,3219 |
| 300 | 12C | 7,3447 |
| 301 | 12D | 7,3675 |
| 302 | 12E | 7,3903 |
| 303 | 12F | 7,4131 |
| 304 | 130 | 7,4359 |
| 305 | 131 | 7,4587 |
| 306 | 132 | 7,4815 |
| 307 | 133 | 7,5043 |
| 308 | 134 | 7,5271 |
| 309 | 135 | 7,5499 |
| 310 | 136 | 7,5727 |
| 311 | 137 | 7,5955 |
| 312 | 138 | 7,6182 |
| 313 | 139 | 7,6410 |
| 314 | 13A | 7,6638 |
| 315 | 13B | 7,6866 |
| 316 | 13C | 7,7094 |
| 317 | 13D | 7,7322 |
| 318 | 13E | 7,7550 |
| 319 | 13F | 7,7778 |
| 320 | 140 | 7,8006 |
| 321 | 141 | 7,8235 |
| 322 | 142 | 7,8463 |
| 323 | 143 | 7,8691 |
| 324 | 144 | 7,8919 |
| 325 | 145 | 7,9147 |
| 326 | 146 | 7,9375 |
| 327 | 147 | 7,9604 |
| 328 | 148 | 7,9832 |
| 329 | 149 | 8,0060 |
| 330 | 14A | 8,0295 |
| 331 | 14B | 8,0530 |
| 332 | 14C | 8,0765 |
| 333 | 14D | 8,1000 |
| 334 | 14E | 8,1235 |
| 335 | 14F | 8,1470 |
| 336 | 150 | 8,1705 |
| 337 | 151 | 8,1940 |
| 338 | 152 | 8,2175 |
| 339 | 153 | 8,2410 |
| 340 | 154 | 8,2645 |
| 341 | 155 | 8,2880 |
| 342 | 156 | 8,3115 |
| 343 | 157 | 8,3350 |
| 344 | 158 | 8,3596 |
| 345 | 159 | 8,3841 |
| 346 | 15A | 8,4087 |
| 347 | 15B | 8,4332 |
| 348 | 15C | 8,4578 |
| 349 | 15D | 8,4823 |
| 350 | 15E | 8,5069 |
| 351 | 15F | 8,5314 |
| 352 | 160 | 8,5560 |
| 353 | 161 | 8,5806 |
| 354 | 162 | 8,6051 |
| 355 | 163 | 8,6297 |
| 356 | 164 | 8,6542 |
| 357 | 165 | 8,6788 |
| 358 | 166 | 8,7033 |
| 359 | 167 | 8,7279 |
| 360 | 168 | 8,7524 |
| 361 | 169 | 8,7770 |
| 362 | 16A | 8,8015 |
| 363 | 16B | 8,8259 |
| 364 | 16C | 8,8504 |
| 365 | 16D | 8,8748 |
| 366 | 16E | 8,8993 |
| 367 | 16F | 8,9237 |
| 368 | 170 | 8,9482 |
| 369 | 171 | 8,9726 |
| 370 | 172 | 8,9971 |
| 371 | 173 | 9,0215 |
| 372 | 174 | 9,0460 |
| 373 | 175 | 9,0683 |
| 374 | 176 | 9,0906 |
| 375 | 177 | 9,1129 |
| 376 | 178 | 9,1352 |
| 377 | 179 | 9,1575 |
| 378 | 17A | 9,1798 |
| 379 | 17B | 9,2021 |
| 380 | 17C | 9,2244 |
| 381 | 17D | 9,2467 |
| 382 | 17E | 9,2690 |
| 383 | 17F | 9,2913 |
| 384 | 180 | 9,3136 |
| 385 | 181 | 9,3359 |
| 386 | 182 | 9,3582 |
| 387 | 183 | 9,3805 |
| 388 | 184 | 9,4028 |
| 389 | 185 | 9,4251 |
| 390 | 186 | 9,4474 |
| 391 | 187 | 9,4697 |
| 392 | 188 | 9,4920 |
| 393 | 189 | 9,5164 |
| 394 | 18A | 9,5409 |
| 395 | 18B | 9,5653 |
| 396 | 18C | 9,5898 |
| 397 | 18D | 9,6142 |
| 398 | 18E | 9,6387 |
| 399 | 18F | 9,6631 |
| 400 | 190 | 9,6876 |
| 401 | 191 | 9,7120 |
| 402 | 192 | 9,7364 |
| 403 | 193 | 9,7609 |
| 404 | 194 | 9,7853 |
| 405 | 195 | 9,8098 |
| 406 | 196 | 9,8342 |
| 407 | 197 | 9,8587 |
| 408 | 198 | 9,8831 |
| 409 | 199 | 9,9076 |
| 410 | 19A | 9,9320 |
| 411 | 19B | 9,9570 |
| 412 | 19C | 9,9820 |
| 413 | 19D | 10,0070 |
| 414 | 19E | 10,0320 |
| 415 | 19F | 10,0570 |
| 416 | 1A0 | 10,0820 |
| 417 | 1A1 | 10,1070 |
| 418 | 1A2 | 10,1320 |
| 419 | 1A3 | 10,1570 |
| 420 | 1A4 | 10,1820 |
| 421 | 1A5 | 10,2070 |
| 422 | 1A6 | 10,2320 |
| 423 | 1A7 | 10,2570 |
| 424 | 1A8 | 10,2820 |
| 425 | 1A9 | 10,3070 |
| 426 | 1AA | 10,3320 |
| 427 | 1AB | 10,3553 |
| 428 | 1AC | 10,3785 |
| 429 | 1AD | 10,4018 |
| 430 | 1AE | 10,4251 |
| 431 | 1AF | 10,4483 |
| 432 | 1B0 | 10,4716 |
| 433 | 1B1 | 10,4949 |
| 434 | 1B2 | 10,5181 |
| 435 | 1B3 | 10,5414 |
| 436 | 1B4 | 10,5647 |
| 437 | 1B5 | 10,5879 |
| 438 | 1B6 | 10,6112 |
| 439 | 1B7 | 10,6345 |
| 440 | 1B8 | 10,6577 |
| 441 | 1B9 | 10,6810 |
| 442 | 1BA | 10,7044 |
| 443 | 1BB | 10,7278 |
| 444 | 1BC | 10,7512 |
| 445 | 1BD | 10,7746 |
| 446 | 1BE | 10,7980 |
| 447 | 1BF | 10,8214 |
| 448 | 1C0 | 10,8448 |
| 449 | 1C1 | 10,8682 |
| 450 | 1C2 | 10,8916 |
| 451 | 1C3 | 10,9150 |
| 452 | 1C4 | 10,9384 |
| 453 | 1C5 | 10,9618 |
| 454 | 1C6 | 10,9852 |
| 455 | 1C7 | 11,0086 |
| 456 | 1C8 | 11,0320 |
| 457 | 1C9 | 11,0559 |
| 458 | 1CA | 11,0798 |
| 459 | 1CB | 11,1037 |
| 460 | 1CC | 11,1276 |
| 461 | 1CD | 11,1515 |
| 462 | 1CE | 11,1755 |
| 463 | 1CF | 11,1994 |
| 464 | 1D0 | 11,2233 |
| 465 | 1D1 | 11,2472 |
| 466 | 1D2 | 11,2711 |
| 467 | 1D3 | 11,2950 |
| 468 | 1D4 | 11,3213 |
| 469 | 1D5 | 11,3475 |
| 470 | 1D6 | 11,3738 |
| 471 | 1D7 | 11,4000 |
| 472 | 1D8 | 11,4263 |
| 473 | 1D9 | 11,4525 |
| 474 | 1DA | 11,4788 |
| 475 | 1DB | 11,5050 |
| 476 | 1DC | 11,5280 |
| 477 | 1DD | 11,5510 |
| 478 | 1DE | 11,5740 |
| 479 | 1DF | 11,5970 |
| 480 | 1E0 | 11,6200 |
| 481 | 1E1 | 11,6430 |
| 482 | 1E2 | 11,6660 |
| 483 | 1E3 | 11,6890 |
| 484 | 1E4 | 11,7120 |
| 485 | 1E5 | 11,7350 |
| 486 | 1E6 | 11,7580 |
| 487 | 1E7 | 11,7810 |
| 488 | 1E8 | 11,8040 |
| 489 | 1E9 | 11,8270 |
| 490 | 1EA | 11,8500 |
| 491 | 1EB | 11,8730 |
| 492 | 1EC | 11,8960 |
| 493 | 1ED | 11,9208 |
| 494 | 1EE | 11,9457 |
| 495 | 1EF | 11,9705 |
| 496 | 1F0 | 11,9953 |
| 497 | 1F1 | 12,0202 |
| 498 | 1F2 | 12,0450 |
| 499 | 1F3 | 12,0698 |
| 500 | 1F4 | 12,0947 |
| 501 | 1F5 | 12,1195 |
| 502 | 1F6 | 12,1443 |
| 503 | 1F7 | 12,1692 |
| 504 | 1F8 | 12,1940 |
| 505 | 1F9 | 12,2174 |
| 506 | 1FA | 12,2407 |
| 507 | 1FB | 12,2641 |
| 508 | 1FC | 12,2874 |
| 509 | 1FD | 12,3108 |
| 510 | 1FE | 12,3341 |
| 511 | 1FF | 12,3575 |
| 512 | 200 | 12,3808 |
| 513 | 201 | 12,4042 |
| 514 | 202 | 12,4275 |
| 515 | 203 | 12,4509 |
| 516 | 204 | 12,4742 |
| 517 | 205 | 12,4976 |
| 518 | 206 | 12,5209 |
| 519 | 207 | 12,5443 |
| 520 | 208 | 12,5676 |
| 521 | 209 | 12,5910 |
| 522 | 20A | 12,6148 |
| 523 | 20B | 12,6386 |
| 524 | 20C | 12,6624 |
| 525 | 20D | 12,6862 |
| 526 | 20E | 12,7099 |
| 527 | 20F | 12,7337 |
| 528 | 210 | 12,7575 |
| 529 | 211 | 12,7813 |
| 530 | 212 | 12,8051 |
| 531 | 213 | 12,8289 |
| 532 | 214 | 12,8527 |
| 533 | 215 | 12,8765 |
| 534 | 216 | 12,9003 |
| 535 | 217 | 12,9241 |
| 536 | 218 | 12,9478 |
| 537 | 219 | 12,9716 |
| 538 | 21A | 12,9954 |
| 539 | 21B | 13,0192 |
| 540 | 21C | 13,0430 |
| 541 | 21D | 13,0684 |
| 542 | 21E | 13,0938 |
| 543 | 21F | 13,1191 |
| 544 | 220 | 13,1445 |
| 545 | 221 | 13,1699 |
| 546 | 222 | 13,1953 |
| 547 | 223 | 13,2206 |
| 548 | 224 | 13,2460 |
| 549 | 225 | 13,2714 |
| 550 | 226 | 13,2968 |
| 551 | 227 | 13,3221 |
| 552 | 228 | 13,3475 |
| 553 | 229 | 13,3729 |
| 554 | 22A | 13,3983 |
| 555 | 22B | 13,4236 |
| 556 | 22C | 13,4490 |
| 557 | 22D | 13,4718 |
| 558 | 22E | 13,4945 |
| 559 | 22F | 13,5173 |
| 560 | 230 | 13,5401 |
| 561 | 231 | 13,5628 |
| 562 | 232 | 13,5856 |
| 563 | 233 | 13,6084 |
| 564 | 234 | 13,6312 |
| 565 | 235 | 13,6539 |
| 566 | 236 | 13,6767 |
| 567 | 237 | 13,6995 |
| 568 | 238 | 13,7222 |
| 569 | 239 | 13,7450 |
| 570 | 23A | 13,7687 |
| 571 | 23B | 13,7924 |
| 572 | 23C | 13,8161 |
| 573 | 23D | 13,8398 |
| 574 | 23E | 13,8635 |
| 575 | 23F | 13,8872 |
| 576 | 240 | 13,9109 |
| 577 | 241 | 13,9346 |
| 578 | 242 | 13,9583 |
| 579 | 243 | 13,9820 |
| 580 | 244 | 14,0059 |
| 581 | 245 | 14,0299 |
| 582 | 246 | 14,0538 |
| 583 | 247 | 14,0778 |
| 584 | 248 | 14,1017 |
| 585 | 249 | 14,1256 |
| 586 | 24A | 14,1496 |
| 587 | 24B | 14,1735 |
| 588 | 24C | 14,1975 |
| 589 | 24D | 14,2214 |
| 590 | 24E | 14,2454 |
| 591 | 24F | 14,2693 |
| 592 | 250 | 14,2932 |
| 593 | 251 | 14,3172 |
| 594 | 252 | 14,3411 |
| 595 | 253 | 14,3651 |
| 596 | 254 | 14,3890 |
| 597 | 255 | 14,4133 |
| 598 | 256 | 14,4377 |
| 599 | 257 | 14,4620 |
| 600 | 258 | 14,4863 |
| 601 | 259 | 14,5107 |
| 602 | 25A | 14,5350 |
| 603 | 25B | 14,5593 |
| 604 | 25C | 14,5837 |
| 605 | 25D | 14,6080 |
| 606 | 25E | 14,6323 |
| 607 | 25F | 14,6567 |
| 608 | 260 | 14,6810 |
| 609 | 261 | 14,7053 |
| 610 | 262 | 14,7297 |
| 611 | 263 | 14,7540 |
| 612 | 264 | 14,7777 |
| 613 | 265 | 14,8013 |
| 614 | 266 | 14,8250 |
| 615 | 267 | 14,8486 |
| 616 | 268 | 14,8723 |
| 617 | 269 | 14,8959 |
| 618 | 26A | 14,9196 |
| 619 | 26B | 14,9432 |
| 620 | 26C | 14,9669 |
| 621 | 26D | 14,9905 |
| 622 | 26E | 15,0142 |
| 623 | 26F | 15,0378 |
| 624 | 270 | 15,0615 |
| 625 | 271 | 15,0851 |
| 626 | 272 | 15,1088 |
| 627 | 273 | 15,1324 |
| 628 | 274 | 15,1561 |
| 629 | 275 | 15,1797 |
| 630 | 276 | 15,2034 |
| 631 | 277 | 15,2270 |
| 632 | 278 | 15,2511 |
| 633 | 279 | 15,2751 |
| 634 | 27A | 15,2992 |
| 635 | 27B | 15,3232 |
| 636 | 27C | 15,3473 |
| 637 | 27D | 15,3713 |
| 638 | 27E | 15,3954 |
| 639 | 27F | 15,4194 |
| 640 | 280 | 15,4435 |
| 641 | 281 | 15,4675 |
| 642 | 282 | 15,4916 |
| 643 | 283 | 15,5156 |
| 644 | 284 | 15,5397 |
| 645 | 285 | 15,5637 |
| 646 | 286 | 15,5878 |
| 647 | 287 | 15,6118 |
| 648 | 288 | 15,6359 |
| 649 | 289 | 15,6599 |
| 650 | 28A | 15,6840 |
| 651 | 28B | 15,7083 |
| 652 | 28C | 15,7325 |
| 653 | 28D | 15,7568 |
| 654 | 28E | 15,7810 |
| 655 | 28F | 15,8053 |
| 656 | 290 | 15,8295 |
| 657 | 291 | 15,8538 |
| 658 | 292 | 15,8780 |
| 659 | 293 | 15,9023 |
| 660 | 294 | 15,9265 |
| 661 | 295 | 15,9508 |
| 662 | 296 | 15,9750 |
| 663 | 297 | 15,9993 |
| 664 | 298 | 16,0235 |
| 665 | 299 | 16,0478 |
| 666 | 29A | 16,0720 |
| 667 | 29B | 16,0959 |
| 668 | 29C | 16,1198 |
| 669 | 29D | 16,1437 |
| 670 | 29E | 16,1676 |
| 671 | 29F | 16,1915 |
| 672 | 2A0 | 16,2155 |
| 673 | 2A1 | 16,2394 |
| 674 | 2A2 | 16,2633 |
| 675 | 2A3 | 16,2872 |
| 676 | 2A4 | 16,3111 |
| 677 | 2A5 | 16,3350 |
| 678 | 2A6 | 16,3597 |
| 679 | 2A7 | 16,3843 |
| 680 | 2A8 | 16,4090 |
| 681 | 2A9 | 16,4337 |
| 682 | 2AA | 16,4583 |
| 683 | 2AB | 16,4830 |
| 684 | 2AC | 16,5077 |
| 685 | 2AD | 16,5323 |
| 686 | 2AE | 16,5570 |
| 687 | 2AF | 16,5817 |
| 688 | 2B0 | 16,6063 |
| 689 | 2B1 | 16,6310 |
| 690 | 2B2 | 16,6557 |
| 691 | 2B3 | 16,6803 |
| 692 | 2B4 | 16,7050 |
| 693 | 2B5 | 16,7297 |
| 694 | 2B6 | 16,7543 |
| 695 | 2B7 | 16,7790 |
| 696 | 2B8 | 16,8037 |
| 697 | 2B9 | 16,8283 |
| 698 | 2BA | 16,8530 |
| 699 | 2BB | 16,8777 |
| 700 | 2BC | 16,9023 |
| 701 | 2BD | 16,9270 |
| 702 | 2BE | 16,9517 |
| 703 | 2BF | 16,9763 |
| 704 | 2C0 | 17,0010 |
| 705 | 2C1 | 17,0257 |
| 706 | 2C2 | 17,0503 |
| 707 | 2C3 | 17,0750 |
| 708 | 2C4 | 17,0997 |
| 709 | 2C5 | 17,1243 |
| 710 | 2C6 | 17,1490 |
| 711 | 2C7 | 17,1737 |
| 712 | 2C8 | 17,1983 |
| 713 | 2C9 | 17,2230 |
| 714 | 2CA | 17,2477 |
| 715 | 2CB | 17,2723 |
| 716 | 2CC | 17,2970 |
| 717 | 2CD | 17,3217 |
| 718 | 2CE | 17,3463 |
| 719 | 2CF | 17,3710 |
| 720 | 2D0 | 17,3957 |
| 721 | 2D1 | 17,4203 |
| 722 | 2D2 | 17,4450 |
| 723 | 2D3 | 17,4697 |
| 724 | 2D4 | 17,4943 |
| 725 | 2D5 | 17,5190 |
| 726 | 2D6 | 17,5437 |
| 727 | 2D7 | 17,5683 |
| 728 | 2D8 | 17,5930 |
| 729 | 2D9 | 17,6177 |
| 730 | 2DA | 17,6423 |
| 731 | 2DB | 17,6670 |
| 732 | 2DC | 17,6917 |
| 733 | 2DD | 17,7163 |
| 734 | 2DE | 17,7410 |
| 735 | 2DF | 17,7657 |
| 736 | 2E0 | 17,7903 |
| 737 | 2E1 | 17,8150 |
| 738 | 2E2 | 17,8397 |
| 739 | 2E3 | 17,8643 |
| 740 | 2E4 | 17,8890 |
| 741 | 2E5 | 17,9137 |
| 742 | 2E6 | 17,9383 |
| 743 | 2E7 | 17,9630 |
| 744 | 2E8 | 17,9877 |
| 745 | 2E9 | 18,0000 |

### TEMPERATURE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x08 | 0x09 |
