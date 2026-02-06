# ihkr89.prg

## General

|  |  |
| --- | --- |
| File | ihkr89.prg |
| Type | PRG |
| Jobs | 107 |
| Tables | 35 |
| Origin | BMW EI-541 Linnemann Torsten |
| Revision | 6.110 |
| Author | Valeo CPD Schmidt, Valeo CPD Trebes, Valeo CPD Brau |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Control Panel IHKR E89 |  |  |
| ORIGIN | string | BMW EI-541 Linnemann Torsten |  |  |
| REVISION | string | 6.110 |  |  |
| AUTHOR | string | Valeo CPD Schmidt, Valeo CPD Trebes, Valeo CPD Brau |  |  |
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

### STATUS_IHX_WERTE

lesen von IHx relevanten Daten mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TIMER_EINLAUFSCHUTZ

lesen der verbleibenden Zeit für Kompressoreinlaufschutz mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

lesen von Soll- und Ist-Klappenpositionen mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_KLIMASYSTEM

lesen Status Klimasystem und alller Adressen der LIN-Bus-Motoren mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_MOTOR_EICHLAUF

lesen Status Motoren-Eichlauf mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_KLAPPEN_VERSTELLBEREICH

Lesen des aktuellen Status der Verstellbereiche alle Motoren ermittelt über den Eichlauf mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SENSOREN_ANALOG_PORT

Auslesen Rohwerte Sensoren mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SPANNUNGEN_ANALOG_PORT

Auslesen Rohwert Batteriespannung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_POTI_ANALOG_PORT

Auslesen Rohwerte Potentiometer mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SZM_ANALOG_PORT

Auslesen der Rohwerte SZM-Analogeingänge mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_DIGITAL_PORT

lesen der Digitaleingänge mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SZM_VARIANTE

Auslesen der SZM-Variante mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CAN_DRUCKSENSORSENSOR

Auslesen des aktuellen Wertes des Drucksensors mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TASTEN

aktueller Tasten-Status mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_FUNKTIONSBELEUCHTUNG

aktueller Status der Funktions-LEDs mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SZM_TASTEN

aktueller Tasten-Status SZM mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SZM_FUNKTIONSBELEUCHTUNG

aktueller Status der SZM Funktions-LEDs mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_PWM_FUNKTIONSBELEUCHTUNG

aktueller Status Helligkeit (PWM) der Funktionsbeleuchtung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BELEUCHTUNG

aktueller Status Helligkeit (PWM) der Hintergrundbeleuchtung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_DIAGNOSETESTBETRIEB_PERMANENT

Auslesen Status Diagnose Test Mode permanent mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_AUTOADRESIERUNG

Auslesen autoadresierung status von motoren mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_EINZELADRESIERUNG

Auslesen adresierung status von letzte adressierte motor mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION_INKREMENT

lesen Inkrement von Soll- und Ist-Klappenpositionen mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_MOTOR_IDENT

Liefert die Identdaten des jeweiligen LIN-Bus-Schrittmotors (reportCurrentState) KWP2000: $21 ReadDataByLocalIdentifier $xx InputOutputLocalIdetifier LIN-Bus-Teilnehmer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LIN_DEVICE_ARGUMENT | unsigned char | LIN-Bus-Teilnehmer table LinMotorTab  LinMotornumber,LinMotorname Wenn keine Eingabe: default = 0x21 |

### STEUERN_KOMPRESSOR_EINLAUFSCHUTZ

Setzen/Löschen des Kompressor Einlaufschutzes KWP2000: $3B WriteDataByLocalIdentifier $02 Kompressor Einlaufschutz (recordLocalIdentifier) $0x Ein/Aus (recordValue#1) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| EIN_AUS | string | "ein" -> Kompressoreinlaufschutz ein "aus" -> Kompressoreinlaufschutz aus table DigitalArgument TEXT Wenn keine Eingabe: Default = "aus" |

### STEUERN_TASTEN

Ansteuern Tasten KWP2000: $30 InputOutputControlByLocalIdentifier $01 InputOutputLocalIdetifier: Tasten $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AC | string | "ein" -> Taste AC ein "aus" -> Taste AC aus table DigitalArgument TEXT default: "aus" |
| UML | string | "ein" -> Taste UML ein "aus" -> Taste UML aus table DigitalArgument TEXT default: "aus" |
| HHS | string | "ein" -> Taste HHS ein "aus" -> Taste HHS aus table DigitalArgument TEXT default: "aus" |
| GBL_PLUS | string | "ein" -> Taste GEBLÄSE PLUS ein "aus" -> Taste GEBLÄSE PLUS aus table DigitalArgument TEXT default: "aus" |
| GBL_MINUS | string | "ein" -> Taste GEBLÄSE MINUS ein "aus" -> Taste GEBLÄSE MINUS aus table DigitalArgument TEXT default: "aus" |

### STEUERN_FUNKTIONSBELEUCHTUNG

Ansteuern Funktionsbeleuchtungs-LEDs KWP2000: $30 InputOutputControlByLocalIdentifier $02 LED $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| LED_AC | string | "ein" -> LED AC ein "aus" -> LED AC aus table DigitalArgument TEXT default: "aus" |
| LED_UML | string | "ein" -> LED Umluft ein "aus" -> LED Umluft aus table DigitalArgument TEXT default: "aus" |
| LED_HHS | string | "ein" -> LED HHS ein "aus" -> LED HHS aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_1 | string | "ein" -> LED Gebläse 1 ein "aus" -> LED Gebläse 1 aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_2 | string | "ein" -> LED Gebläse 2 ein "aus" -> LED Gebläse 2 aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_3 | string | "ein" -> LED Gebläse 3 ein "aus" -> LED Gebläse 3 aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_4 | string | "ein" -> LED Gebläse 4 ein "aus" -> LED Gebläse 4 aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_5 | string | "ein" -> LED Gebläse 5 ein "aus" -> LED Gebläse 5 aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_6 | string | "ein" -> LED Gebläse 6 ein "aus" -> LED Gebläse 6 aus table DigitalArgument TEXT default: "aus" |
| LED_GEBL_7 | string | "ein" -> LED Gebläse 7 ein "aus" -> LED Gebläse 7 aus table DigitalArgument TEXT default: "aus" |

### STEUERN_SZM_TASTEN

Ansteuern Tasten SZM KWP2000: $30 InputOutputControlByLocalIdentifier $03 Tasten SZM $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| SHL | string | "ein" -> BUTTON SHL ein "aus" -> BUTTON SHL aus table DigitalArgument TEXT default: "aus" |
| SKL | string | "ein" -> BUTTON SVL ein "aus" -> BUTTON SVL aus table DigitalArgument TEXT default: "aus" |
| PDC | string | "ein" -> BUTTON PDC ein "aus" -> BUTTON PDC aus table DigitalArgument TEXT default: "aus" |
| SKR | string | "ein" -> BUTTON SVR ein "aus" -> BUTTON SVR aus table DigitalArgument TEXT default: "aus" |
| SHR | string | "ein" -> BUTTON SHR ein "aus" -> BUTTON SHR aus table DigitalArgument TEXT default: "aus" |
| MSA | string | "ein" -> BUTTON MSA ein "aus" -> BUTTON MSA aus table DigitalArgument TEXT default: "aus" |

### STEUERN_SZM_FUNKTIONSBELEUCHTUNG

Ansteuern SZM Funktionsbeleuchtungs-LEDs KWP2000: $30 InputOutputControlByLocalIdentifier $04 LED SZM $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| LED_SHL_1 | string | "ein" -> LED SHL ein "aus" -> LED SHL aus table DigitalArgument TEXT default: "aus" |
| LED_SHL_2 | string | "ein" -> LED SHL 2 ein "aus" -> LED SHL 2 aus table DigitalArgument TEXT default: "aus" |
| LED_SHL_3 | string | "ein" -> LED SHL 3 ein "aus" -> LED SHL 3 aus table DigitalArgument TEXT default: "aus" |
| LED_SKL_1 | string | "ein" -> LED SKL ein "aus" -> LED SKL aus table DigitalArgument TEXT default: "aus" |
| LED_SKL_2 | string | "ein" -> LED SKL 2 ein "aus" -> LED SKL 2 aus table DigitalArgument TEXT default: "aus" |
| LED_SKL_3 | string | "ein" -> LED SKL 3 ein "aus" -> LED SKL 3 aus table DigitalArgument TEXT default: "aus" |
| LED_PDC | string | "ein" -> LED PDC ein "aus" -> LED PDC aus table DigitalArgument TEXT default: "aus" |
| LED_VDA | string | "ein" -> LED HT OPEN ein "aus" -> LED HT OPEN aus table DigitalArgument TEXT default: "aus" |
| LED_VDZ | string | "ein" -> LED HT CLOSE ein "aus" -> LED HT CLOSE aus table DigitalArgument TEXT default: "aus" |
| LED_SKR_1 | string | "ein" -> LED SKR 1 ein "aus" -> LED SKR 1 aus table DigitalArgument TEXT default: "aus" |
| LED_SKR_2 | string | "ein" -> LED SKR 2 ein "aus" -> LED SKR 2 aus table DigitalArgument TEXT default: "aus" |
| LED_SKR_3 | string | "ein" -> LED SKR 3 ein "aus" -> LED SKR 3 aus table DigitalArgument TEXT default: "aus" |
| LED_SHR_1 | string | "ein" -> LED SHL ein "aus" -> LED SHL aus table DigitalArgument TEXT default: "aus" |
| LED_SHR_2 | string | "ein" -> LED SHL 2 ein "aus" -> LED SHL 2 aus table DigitalArgument TEXT default: "aus" |
| LED_SHR_3 | string | "ein" -> LED SHL 3 ein "aus" -> LED SHL 3 aus table DigitalArgument TEXT default: "aus" |
| LED_MSA | string | "ein" -> LED MSA ein "aus" -> LED MSA aus table DigitalArgument TEXT default: "aus" |

### STEUERN_PWM_FUNKTIONSBELEUCHTUNG

Setzen der Helligkeit (PWM) der Funtionsbeleuchtung KWP2000: $30 InputOutputControlByLocalIdentifier $05 PWM LEDs $01 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| LED_GREEN | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |
| LED_ORANGE | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |
| LED_BLUE_SZM | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |
| LED_RED_SZM | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |

### STEUERN_BELEUCHTUNG

Ansteuern Hintergrundbeleuchtung KWP2000: $30 InputOutputControlByLocalIdentifier $06 LEDs $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| LED_ORANGE | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |
| LED_BLUE | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |
| LED_RED | int | gewuenschte PWM-Ansteuerung Bereich: 0 bis 100 % default = 0 |

### STEUERN_12V_AUSGANG

Ansteuern 12V Ausgang (Schrittmotorversorgung) KWP2000: $30 InputOutputControlByLocalIdentifier $07 12V-Ausgang $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| PORT_STATUS | int | "ein" -> 12V Ausgang ein "aus" -> 12V Ausgang aus table DigitalArgument TEXT default: "aus" |

### STEUERN_GEBLAESE

Ansteuern Geblaese KWP2000: $30 InputOutputControlByLocalIdentifier $08 Geblaese $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| SET_PWM_VALUE | int | gewuenschte PWM-Ansteuerung Bereich: 0 aus, min. Gebläseleistung 10% - 20%, linear 20 - 80%, max. Gebläseleistung 80 - 95%, Notlauf > 95% default = 0 |

### STEUERN_KLAPPE_ZENTRALANTRIEB

Setzen von Ausgangsports (shortTermAdjustment) KWP2000: $30 InputOutputControlByLocalIdentifier $21 InputOutputLocalIdetifier (Zentralantrieb) $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SET_PORT_VALUE | unsigned char | Klappenstellung 0%-100% in 1% Schritten |

### STEUERN_KLAPPE_UMLUFT

Setzen von Ausgangsports (shortTermAdjustment) KWP2000: $30 InputOutputControlByLocalIdentifier $22 InputOutputLocalIdetifier (Umluft) $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SET_PORT_VALUE | unsigned char | Klappenstellung 0%-100% in 1% Schritten |

### STEUERN_KLAPPE_MISCHLUFT

Setzen von Ausgangsports (shortTermAdjustment) KWP2000: $30 InputOutputControlByLocalIdentifier $23 InputOutputLocalIdetifier (Mischluft) $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SET_PORT_VALUE | unsigned char | Klappenstellung 0%-100% in 1% Schritten |

### STEUERN_CAN_HEIZBARE_HECKSCHEIBE

Ansteuern Zusatzwasserpumpe ueber CAN KWP2000: $30 InputOutputControlByLocalIdentifier $09 heizbare Heckscheibe $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| HHS_EIN_AUS | string | "ein" -> HHS ein "aus" -> HHS aus table DigitalArgument TEXT default: "aus" |

### STEUERN_CAN_KOMPRESSOR_VENTIL

Ansteuern Kompressorventil ueber CAN KWP2000: $30 InputOutputControlByLocalIdentifier $0A Kompressorventil $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| WERT | unsigned char | Ansteuerung Kompressor 0%-100% in 1% Schritten |

### STEUERN_CAN_KOMPRESSOR_KUPPLUNG

Ansteuern Zusatzwasserpumpe ueber CAN KWP2000: $30 InputOutputControlByLocalIdentifier $0B Kompressorkupplung $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| KUPPLUNG_EIN_AUS | string | "ein" -> Kompressorkupplung ein "aus" -> Kompressorkupplung aus table DigitalArgument TEXT default: "aus" |

### STEUERN_CAN_ZUSATZWASSERPUMPE

Ansteuern Zusatzwasserpumpe ueber CAN KWP2000: $30 InputOutputControlByLocalIdentifier $0C Zusatzwasserpumpe $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZWASSERPUMPE_EIN_AUS | string | "ein" -> ZUSATZWASSERPUMPE ein "aus" -> ZUSATZWASSERPUMPE aus table DigitalArgument TEXT default: "aus" |

### STEUERN_CAN_ELEKTRISCHE_WASSERPUMPE

Ansteuern elektrische Wasserpumpe ueber CAN KWP2000: $30 InputOutputControlByLocalIdentifier $0D Kompressorventil $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| WERT | unsigned char | Ansteuerung elektrische Wasserpumpe 0%-100% in 1% Schritten |

### STEUERN_DIAGNOSETESTBETRIEB_PERMANENT

Diagnose Test Mode mit/ohne Timeout-Ueberwachung KWP2000: $30 InputOutputControlByLocalIdentifier $0E DIAG_PERMANENT $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| EIN_AUS | string | "ein" -> Diagnose Test Mode permanent aktiviert "aus" -> Diagnose Test Mode permanent deaktiviert table DigitalArgument TEXT default: "aus" |

### STEUERN_RETURN_ECU_CONTROL

Ruecksetzen Diagnose Test Mode KWP2000: $30 InputOutputControlByLocalIdentifier $00 ReturnControlToECU

_No arguments._

### STEUERN_MOTOREN_EICHLAUF

Löst Klappeneichlauf aus und kalibriert die Schrittzahlen neu KWP2000: $31 StartRoutineByLocalIdetifier $20 routineLocalIdentifier Klappenmotoreneichlauf Modus  : Default

_No arguments._

### STEUERN_AUTOADRESSIERUNG

Startet die LIN-Bus Autoadressierung KWP2000: $31 StartRoutineByLocalIdetifier $22 routineLocalIdentifier LIN-Bus Autoadressierung Modus  : Default

_No arguments._

### STEUERN_EINZELADRESSIERUNG

Startet die LIN-Bus Einzeladressierung KWP2000: $31 StartRoutineByLocalIdetifier $23 routineLocalIdentifier LIN-Bus Einzeladressierung Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CURRENT_STEPPER_ADDESS | unsigned char | Aktuelle Adresse des zu programmierenden Motors |
| NEW_STEPPER_ADDRESS | unsigned char | Neue Adresse des zu programmierenden Motors |
| DIRECTION | unsigned char | Laufrichtung des zu programmierenden Motors 0x00=Laufrichtung im Uhrzeigersinn für steigende Schrittzahlen 0x01=Laufrichtung gegen den Uhrzeigersinn für steigende Schrittzahlen 0xFF=Laufrichtung wie aktuelle Motorprogrammierung |
| SAFETY_ENABLE | unsigned char | Notlaufaktivierung des zu programmierenden Motors 0x00=Notauf aktiviert 0x01=Notauf deaktiviert 0xFF=Notauf wie aktuelle Motorprogrammierung |
| SAFETY_DIRECTION | unsigned char | Notlaufendposition des zu programmierenden Motors 0x00=Zu niedrigen Schrittzahlen 0x01=Zu hohen Schrittzahlen 0xFF=Notlaufendposition wie aktuelle Motorprogrammierung |

### STEUERN_SETZEN_DEFAULT_WERTE_ALLE_SCHLUESSEL

Setzt alle Schlüssel auf Default-Werte KWP2000: $31 StartRoutineByLocalIdetifier $26 routineLocalIdentifier LIN-Bus Autoadressierung Modus  : Default

_No arguments._

### STEUERN_DIAGNOSEBIT_LOESCHEN

Rücksetzen der I/O-Port-Diagnosebits (returnControlToECU) KWP2000: $30 InputOutputControlByLocalIdentifier $xx InputOutputLocalIdetifier (I_O_PORT_ARGUMENT) $00 returnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| I_O_PORT_ARGUMENT | unsigned char | Nummer des I/O-Ports table IOPortTab Portnumber,Portname Wenn keine Eingabe: default = 0x01 |

### STEUERN_SECURITY_ACCESS_AUFTRAG

Zugang mit Security Access 

| Name | Type | Description |
| --- | --- | --- |
| KEY_NR | string | Schluessel (8-stellig) |

### STEUERN_POTI_KALIBRIERUNG_LINKS_FUSS

Kalibierung Drehsteller links fuss. KWP2000: $31 StartRoutineByLocalIdetifier $11 routineLocalIdentifier Potentiometer links fuss. Modus  : Default

_No arguments._

### STEUERN_POTI_KALIBRIERUNG_LINKS_DEF

Kalibierung Drehsteller links defrost. KWP2000: $31 StartRoutineByLocalIdetifier $15 routineLocalIdentifier Potentiometer links defrost. Modus  : Default

_No arguments._

### STEUERN_POTI_KALIBRIERUNG_LINKS_BEL

Kalibierung Drehsteller links beluftung. KWP2000: $31 StartRoutineByLocalIdetifier $12 routineLocalIdentifier Potentiometer links beluftung. Modus  : Default

_No arguments._

### STEUERN_POTI_KALIBRIERUNG_RECHTS_MIN

Kalibierung Drehsteller rechts min. KWP2000: $31 StartRoutineByLocalIdetifier $13 routineLocalIdentifier Potentiometer rechts min. Modus  : Default

_No arguments._

### STEUERN_POTI_KALIBRIERUNG_RECHTS_MAX

Kalibierung Drehsteller rechts max. KWP2000: $31 StartRoutineByLocalIdetifier $14 routineLocalIdentifier Potentiometer rechts max. Modus  : Default

_No arguments._

### STEUERN_EEPROM_RESET

Startet RESET des EEPROM-Inhalts KWP2000: $31 StartRoutineByLocalIdetifier $25 routineLocalIdentifier EEPROM reset Modus  : Default

_No arguments._

### STATUS_GEBLAESE

aktuelle Ansteuerung Gebläse mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_FASTA_BLOCK

Aktueller Wert des FASTA-Blocks (je 16 Bit) KWP2000: $23 recordCommonIdentifier (High-Byte) $xx recordCommonIdentifier (Low-Byte) (FASTA-Block) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FASTA_BLOCK_ARGUMENT | unsigned char | Nummer des FASTA-Blocks (0-FF) table FastaBlockTab Blocknumber,Blockname Wenn keine Eingabe: default = 0x00 |

### STATUS_BEDIENGERAET

Fertigungdaten KWP2000: $21 ReadDataByLocalIdentifier $30 LocalIdentifier Modus  : Default

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
| 0x9C48 | Mischluftklappe (LIN) |
| 0x9C4A | Frischluft/Umluftklappe (LIN) |
| 0x9C4D | Zentralantrieb Kulissenscheibe (LIN) |
| 0x9C54 | Autoadressierung (LIN) |
| 0x9C56 | Temperaturfühler Fußraum |
| 0x9C58 | Temperaturfühler Innenraum |
| 0x9C5F | Temperaturfühler Belüftung |
| 0x9C61 | 5V-Versorgung Peripherie |
| 0x9C62 | Temperaturfühler Verdampfer |
| 0x9C63 | Referenzschalter Kulissenscheibe |
| 0x9C6C | 12V-Versorgung Peripherie |
| 0x9C75 | Unter/Überspannung |
| 0x9C90 | Steuergeraet defekt |
| 0x9CA7 | Energiesparmode aktiv |
| 0xE704 | CAN Bus physikalischer Busfehler |
| 0xE707 | CAN Bus OFF |
| 0xE714 | CAN Botschaft Klemmenstatus |
| 0xE715 | CAN Botschaft Aussentemperatur |
| 0xE716 | CAN Botschaft Dimmung |
| 0xE717 | CAN Botschaft Motordaten |
| 0xE718 | CAN Botschaft Status Druck Kältekreislauf |
| 0xE719 | CAN Botschaft Kilometer/Reichweite |
| 0xE71A | CAN Botschaft Drehmoment 3 |
| 0xE71B | CAN Botschaft Waermestrom Motor |
| 0xE71C | CAN Botschaft Geschwindigkeit |
| 0xE71D | CAN Botschaft Status PDC |
| 0xE71E | CAN Botschaft Status BFS |
| 0xE71F | CAN Botschaft Status FAS |
| 0xE720 | CAN Botschaft Powermanagement Verbrauchersteuerung |
| 0xE721 | CAN Botschaft Status Sensor AUC |
| 0xE722 | CAN Botschaft Status Funkschlüssel |
| 0xE725 | CAN Botschaft Fahrgestellnummer |
| 0xE728 | CAN Botschaft Relativzeit |
| 0xE72A | CAN Botschaft Status Wasserventil |
| 0xE72B | CAN Botschaft Status Zusatzwasserpumpe |
| 0xE72D | CAN Botschaft Status Ventil Klimakompressor |
| 0xE72E | CAN Botschaft Status MSA |
| 0xE72F | CAN Botschaft Status Fahrlicht |
| 0xE730 | CAN Botschaft Status HHS |
| 0xE733 | CAN Botschaft Fahrzeugtyp |
| 0xE737 | CAN Botschaft Nachlaufzeit Stromversorgung |
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
| 0x9C48 | 0x01 | 0x02 | 0x03 | - |
| 0x9C4A | 0x01 | 0x02 | 0x03 | - |
| 0x9C4D | 0x01 | 0x02 | 0x03 | - |
| 0x9C54 | 0x01 | 0x02 | 0x03 | - |
| 0x9C56 | 0x01 | 0x02 | 0x03 | - |
| 0x9C58 | 0x01 | 0x02 | 0x03 | - |
| 0x9C5F | 0x01 | 0x02 | 0x03 | - |
| 0x9C61 | 0x01 | 0x02 | 0x03 | - |
| 0x9C62 | 0x01 | 0x02 | 0x03 | - |
| 0x9C63 | 0x01 | 0x02 | 0x03 | - |
| 0x9C6C | 0x01 | 0x02 | 0x03 | - |
| 0x9C75 | 0x01 | 0x02 | 0x03 | - |
| 0x9C8F | 0x01 | 0x02 | 0x03 | - |
| 0x9C90 | 0x01 | 0x02 | 0x03 | - |
| 0x9CA7 | 0x01 | 0x02 | 0x03 | - |
| 0xE704 | 0x01 | 0x02 | 0x03 | - |
| 0xE707 | 0x01 | 0x02 | 0x03 | - |
| 0xE714 | 0x01 | 0x02 | 0x03 | - |
| 0xE715 | 0x01 | 0x02 | 0x03 | - |
| 0xE716 | 0x01 | 0x02 | 0x03 | - |
| 0xE717 | 0x01 | 0x02 | 0x03 | - |
| 0xE718 | 0x01 | 0x02 | 0x03 | - |
| 0xE719 | 0x01 | 0x02 | 0x03 | - |
| 0xE71A | 0x01 | 0x02 | 0x03 | - |
| 0xE71B | 0x01 | 0x02 | 0x03 | - |
| 0xE71C | 0x01 | 0x02 | 0x03 | - |
| 0xE71D | 0x01 | 0x02 | 0x03 | - |
| 0xE71E | 0x01 | 0x02 | 0x03 | - |
| 0xE71F | 0x01 | 0x02 | 0x03 | - |
| 0xE720 | 0x01 | 0x02 | 0x03 | - |
| 0xE721 | 0x01 | 0x02 | 0x03 | - |
| 0xE722 | 0x01 | 0x02 | 0x03 | - |
| 0xE725 | 0x01 | 0x02 | 0x03 | - |
| 0xE726 | 0x01 | 0x02 | 0x03 | - |
| 0xE728 | 0x01 | 0x02 | 0x03 | - |
| 0xE72A | 0x01 | 0x02 | 0x03 | - |
| 0xE72B | 0x01 | 0x02 | 0x03 | - |
| 0xE72D | 0x01 | 0x02 | 0x03 | - |
| 0xE72E | 0x01 | 0x02 | 0x03 | - |
| 0xE72F | 0x01 | 0x02 | 0x03 | - |
| 0xE730 | 0x01 | 0x02 | 0x03 | - |
| 0xE733 | 0x01 | 0x02 | 0x03 | - |
| 0xE737 | 0x01 | 0x02 | 0x03 | - |
| 0xFFFF | 0x01 | 0x02 | 0x03 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Aussentemperatur | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x02 | Kuehlmitteltemperatur | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x03 | Batteriespannung | V | - | unsigned char | - | 1 | 10 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x9C48 | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x9C4A | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x9C4D | 0x000C | 0x000B | 0x000A | 0x0009 |
| 0x9C54 | 0x0012 | 0x0012 | 0x0012 | 0x000D |
| 0x9C56 | 0x0012 | 0x0012 | 0x000F | 0x000E |
| 0x9C58 | 0x0012 | 0x0012 | 0x000F | 0x000E |
| 0x9C5F | 0x0012 | 0x0012 | 0x000F | 0x000E |
| 0x9C61 | 0x0012 | 0x0012 | 0x0012 | 0x0013 |
| 0x9C62 | 0x0012 | 0x0012 | 0x000F | 0x000E |
| 0x9C63 | 0x0012 | 0x0012 | 0x0020 | 0x0021 |
| 0x9C6C | 0x0012 | 0x0012 | 0x0020 | 0x0021 |
| 0x9C75 | 0x0012 | 0x0012 | 0x001D | 0x001E |
| 0x9C90 | 0x0016 | 0x0012 | 0x0012 | 0x0012 |
| 0x9CA7 | 0x0012 | 0x0012 | 0x0012 | 0x0017 |
| 0xE704 | 0x0012 | 0x0012 | 0x0012 | 0x0018 |
| 0xE707 | 0x001A | 0x0019 | 0x0012 | 0x0012 |
| 0xE714 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE715 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE716 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE717 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE718 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE719 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE71A | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE71B | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE71C | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE71D | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE71E | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE71F | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE720 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE721 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE722 | 0x001C | 0x0012 | 0x0012 | 0x0012 |
| 0xE725 | 0x001C | 0x0012 | 0x0012 | 0x0012 |
| 0xE728 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE72A | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE72B | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE72D | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE72E | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE72F | 0x001C | 0x0012 | 0x0012 | 0x0012 |
| 0xE730 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xE733 | 0x001C | 0x0012 | 0x0012 | 0x0012 |
| 0xE737 | 0x001C | 0x001B | 0x0012 | 0x0012 |
| 0xFFFF | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0009 | interner Fehler Stellmotor |
| 0x000A | Blockierung |
| 0x000B | Motor antwortet nicht |
| 0x000C | falsche Schrittweite |
| 0x000D | keine Autoadressierung |
| 0x000E | Kurzschluß gegen Ubatt oder Leitungsunterbrechung |
| 0x000F | Kurzschluß gegen Masse |
| 0x0010 | Kurzschluss gegen Ubatt |
| 0x0011 | Kurzschluss gegen Masse oder Leitungsunterbrechung |
| 0x0012 | nicht verwendet |
| 0x0013 | Überstrom |
| 0x0014 | Blockierung |
| 0x0015 | Powermanagement Eingriff |
| 0x0016 | Steuergerät defekt |
| 0x0017 | Energiesparmode aktiv |
| 0x0018 | Eindrahtbetrieb |
| 0x0019 | Bus Off |
| 0x001A | Error Passiv |
| 0x001B | Timeout |
| 0x001C | ungültige Daten |
| 0x001D | Unterspannung |
| 0x001E | Überspannung |
| 0x001F | unbekannte Fehlerort |
| 0x0020 | Kurzschluß gegen Masse LIN-Versorgung |
| 0x0021 | Kurzschluß gegen Masse SZM-Versorgung |
| 0xFFFF | unbekannte Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### KLIMAGERAETTYPTAB

| WERT | TEXT |
| --- | --- |
| 0 | unbekannt |
| 1 | Heizklimagerät IHKR |
| 2 | Heizklimagerät IHKA |
| 3 | ungültige Antwort |

### KLIMABEDIENTEILTYPTAB

| WERT | TEXT |
| --- | --- |
| 0 | unbekannt |
| 1 | Heizklimabedienteil IHKR |
| 2 | Heizklimabedienteil IHKA |
| 3 | ungültige Antwort |

### KLIMASYSTEMFEHLERTAB

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 2 | falsch codiert |
| 3 | falscher Klimakasten |
| 0xFF | ungültige Antwort |

### STATUSEICHLAUFALLGEMEINTAB

| WERT | TEXT |
| --- | --- |
| 0 | in diesem Klemmenzyklus (auch Klemme 30 Reset) noch nicht gestartet |
| 1 | Eichlauf läuft gerade |
| 2 | Eichlauf abgeschlossen IO |
| 3 | Eichlauf abgeschlossen NIO |
| 4 | ungültige Antwort |

### STATUSEICHLAUFHISTORYTAB

| WERT | TEXT |
| --- | --- |
| 0 | keine gültigen Schrittweiten / keine History vorhanden |
| 16 | gültige Schrittweiten vorhanden |
| 32 | ungültige Antwort |

### STATUSEICHLAUFMOTORTAB

| WERT | TEXT |
| --- | --- |
| 0 | NIO |
| 1 | IO |
| 2 | Klappe nicht verbaut / nicht relevant |
| 3 | ungültige Antwort |

### STATUSVERSTELLBEREICHTAB

| WERT | TEXT |
| --- | --- |
| 0 | Verstellbereiche ungültig - Verwendung von Defaultwerten |
| 1 | Verstellbereiche gültig |
| 2 | ungültige Antwort |

### LINMOTORTAB

| WERT | TEXT |
| --- | --- |
| 0x21 | Motor Zentralgetriebe |
| 0x22 | Frischluft-Umluft-Motor |
| 0x28 | Mischluftmotor |

### IOPORTTAB

| WERT | TEXT |
| --- | --- |
| 0x01 | Tasten |
| 0x02 | Funktionsbeleuchtung |
| 0x03 | Tasten SZM |
| 0x04 | Funktionsbeleuchtung SZM |
| 0x05 | PWM Funktionsbeleuchtung |
| 0x06 | PWM Hintergrundbeleuchtung |
| 0x07 | 12V Ausgang |
| 0x08 | Gebläse |
| 0x09 | heizbare Heckscheibe (CAN) |
| 0x0A | Kompressorventil (CAN) |
| 0x0B | Kompressorkupplung |
| 0x0C | Zusatzwasserpumpe (CAN) |
| 0x0D | elektrische Wasserpumpe (CAN) |
| 0x0E | Diagnosetestbetrieb  permanent |
| 0x21 | Klappe Zentralantrieb |
| 0x22 | Klappe Frischluft/Umluft |
| 0x23 | Mischluftklappe |

### ANALOGPORTTAB

| WERT | TEXT |
| --- | --- |
| 0x0B | SZM-Variante |
| 0x11 | Sensoren |
| 0x12 | Analog Spannungen |
| 0x13 | Drehsteller Sollwerte |
| 0x14 | Ausgänge SZM |

### FASTABLOCKTAB

| BLOCKNUMBER | BLOCKNAME |
| --- | --- |
| 0x00 | Gesamtbetriebsstunden |
| 0x01 | Anzahl der Resets |
| 0x02 | Richtungswechsel Mischluft |
| 0x03 | Richtungswechsel Frischluft/Umluft |
| 0x04 | Richtungswechsel Zentralgetriebe |
| 0x05 | Blockierungen Mischluft |
| 0x06 | Blockierungen Frischluft/Umluft |
| 0x07 | Aktivierungen Mikroschalter |
| 0x08 | Betriebsstunden Klimabetrieb |
| 0x09 | Betriebsstunden OFF-Funktion |
| 0x0A | Aktivierungen der OFF-Funktion |
| 0x19 | Zähler PCB temperature übersteigt 85°C |
| 0x1A | Zähler PCB temperature übersteigt 95°C |
| 0x1B | Zähler PCB temperature übersteigt 105°C |
| 0x1C | Anzahl der Power Management limitierung an die Heckscheibe Heizung |
| 0x1D | Anzahl der Power Management limitierung an die Gebläse |
| 0x1E | Anzahl der Motor Eichlauf |

### STATUSSTEPPERADDRPROG

| WERT | TEXT |
| --- | --- |
| 0 | NOK |
| 1 | OK |

### STATUSSTEPPERROUTINESTATUS

| WERT | TEXT |
| --- | --- |
| 0 | inaktiv |
| 1 | aktiv |

### STATUSSTEPPERROUTINERESULT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht erfolgreich |
| 1 | Erfolgreich |

### STATUSEICHLAUFIOTAB

| WERT | TEXT |
| --- | --- |
| 0 | Eichlauf NIO |
| 32 | Eichlauf IO |
| 64 | ungültige Antwort |
