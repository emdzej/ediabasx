# tlc_60.prg

## General

|  |  |
| --- | --- |
| File | tlc_60.prg |
| Type | PRG |
| Jobs | 99 |
| Tables | 53 |
| Origin | BMW EI-42 Ramboeck Josef |
| Revision | 6.000 |
| Author | BMW EI-42 Ramboeck, BMW EI-42 Ender, SAGÖ PSEPROSRT4 Kloiber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Spurverlassenswarnsystem |  |  |
| ORIGIN | string | BMW EI-42 Ramboeck Josef |  |  |
| REVISION | string | 6.000 |  |  |
| AUTHOR | string | BMW EI-42 Ramboeck, BMW EI-42 Ender, SAGÖ PSEPROSRT4 Kloiber |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.36 |  |  |
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

### _READ_UIF_DATA_TABLE

reads the user info field KWP2000: $1A ReadECUIdentification .        $86 CurrentUIFDataTable

_No arguments._

### _READ_SYS_NAME

reads the system name KWP2000: $1A ReadECUIdentification .        $97 SystemName

_No arguments._

### _READ_VMECUHWVNM

reads the VehicleManufacturerECUHWVersionNumber KWP2000: $1A ReadECUIdentification .        $9A HW Index

_No arguments._

### _READ_VM_DIAG_INDEX

read diagnostic index KWP2000: $1A ReadECUIdentification .        $9C VMDiagnosticIndex

_No arguments._

### _READ_DATE_ECU_MANUFACTURING

read date of ECU manufacturing KWP2000: $1A ReadECUIdentification .        $9D DateOfECUManufacturing

_No arguments._

### _READ_SYS_SUPP_INDEX

read system supplier index KWP2000: $1A ReadECUIdentification .        $9E SupplierIndex

_No arguments._

### _READ_VM_ECU_SWLAYER_VNR

read MCV-nr, SW-nr, SC-nr KWP2000: $1A ReadECUIdentification .        $9F VMECUSoftwareLayerVersionNumber

_No arguments._

### READ_DATE_LAST_CODING

read date of the last coding KWP2000: $21 ReadDataByLocalIdentifier .        $08 date of the last coding

_No arguments._

### STATUS_KAMERA_VERSORGUNG

reports the status of the camera supply KWP2000: $21 ReadDataByLocalIdentifier .        $22 status of camera supply

_No arguments._

### STATUS_FPN

reports status of the fixes pattern noise evaluation KWP2000: $21 ReadDataByLocalIdentifier .        $24 status of fixes pattern noise evaluation

_No arguments._

### STATUS_KAMERA_EEPROM

reports communication status with the camera eeprom KWP2000: $21 ReadDataByLocalIdentifier .        $26 status of camera eeprom communication

_No arguments._

### STATUS_KAMERASERIENNUMMER

reads camera serial number from eeprom KWP2000: $21 ReadDataByLocalIdentifier .        $28 camera serial number

_No arguments._

### STATUS_BORDNETZ_SPANNUNG

reports status of the voltage of the vehicle electrical system KWP2000: $21 ReadDataByLocalIdentifier .        $30 status of vehicle electrical system

_No arguments._

### STATUS_TEMPERATUR

reports status of the ECU temperature KWP2000: $21 ReadDataByLocalIdentifier .        $31 status of ecu temperature

_No arguments._

### STATUS_WECKLEITUNG

reports status of wake line KWP2000: $21 ReadDataByLocalIdentifier .        $32 status of wake line

_No arguments._

### STATUS_ECU_SPANNUNGEN

reports status of the voltages of the ECU power supply units KWP2000: $21 ReadDataByLocalIdentifier .        $33 status of power supply units

_No arguments._

### STATUS_PPC

reports status of the power PC KWP2000: $21 ReadDataByLocalIdentifier .        $34 status of power pc

_No arguments._

### STATUS_AKTUATOR

reports status of the vibration actuators current consumption KWP2000: $21 ReadDataByLocalIdentifier .        $35 status of vibration actuator

_No arguments._

### STATUS_FETRAWE_MODE

reports status of the FeTraWe-Mode KWP2000: $22 ReadDataByCommonIdentifier .        $10 read fetrawe mode .        $0A

_No arguments._

### _READ_EEPROM_BLOCK

reports status of the FeTraWe-Mode KWP2000: $22 ReadDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | EEPROM-Block e.g. 0x3000 - 0x3E09 |

### _SET_EEPROM_STATE_OF_DELIVERY

write and read the  EEPROM state of delivery KWP2000: $2E WriteDataByCommonIdentifier .        $22 ReadDataByCommonIdentifier

_No arguments._

### STEUERN_PPC

de/activation of ppc KWP2000: $30 InputOutputControlByLocalIdentifier .        $95 activate .        $96 deactivate

| Name | Type | Description |
| --- | --- | --- |
| STATUS_PPC | string | "ein/1" - activate "aus/0" - deactivate |

### STEUERN_AKTUATOR_PWM

activation of actuator with certain duty cycle and time period KWP2000: $30 InputOutputControlByLocalIdentifier .        $90 pwm-output for actuator

| Name | Type | Description |
| --- | --- | --- |
| PWM_PROZENT | int | PWM in %, range of values to max. 100% (100 = 100%) |
| PWM_TIME | int | PWM output time in 100ms steps (max. 10 sec) -> e.g. 1 = 100 ms |

### STEUERN_CHECK_CONTROL

activates display of check-contol message KWP2000: $30 InputOutputControlByLocalIdentifier .        $93 activate display of check-control message

_No arguments._

### STEUERN_AKTUATOR

motor activation when linear regulator mouted in steering wheel de/activate voltage when warning KWP2000: $30 InputOutputControlByLocalIdentifier .        $94 de/activate voltage when warning

| Name | Type | Description |
| --- | --- | --- |
| WARNING_TIME | int | time duration of warning output in 100 ms steps (max 10 sec.) 0 = warning output off |

### WRITE_DATE_LAST_CODING

write date of the last coding KWP2000: $3B WriteDataByLocalIdentifier .        $08 write date of the last coding

| Name | Type | Description |
| --- | --- | --- |
| DAY | int | day of last coding - DD bcd coded |
| MONTH | int | month of last coding - MM bcd coded |
| YEAR | int | year of last coding - YY bcd coded |

### _SET_CAMINTRINSIC

setting of intrinsic camera parameters and camera serial number KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| SERIAL | string | camera serial number written to 0x3E0900 - max. 8 digits |
| K1 | real | written to 0x3E0204 |
| K2 | real | written to 0x3E0208 |
| OPTIK_VERSATZ_X | long | written to 0x3E020C |
| OPTIK_VERSATZ_Y | long | written to 0x3E0210 |
| FOCAL_LENGTH | long | camera's focal length written to 0x3E0214 |

### _SET_CAMCALIBRATION

setting of calibration results and camera VIN KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| VIN_CAM | string | camera VehicleIdentificationNunmber written to 0x3E0601 - 7 digits |
| ORIGINAL_YAW_CAMERA | long | yaw angle(vertical axis) written to 0x3E0801 |
| ORIGINAL_ROLL_CAMERA | real | roll angle(longitudinal axis) written to 0x3E0805 |
| ORIGINAL_PITCH_CAMERA | long | pitch angle (horizontal axis) written to 0x3E0809 |
| ORIGINAL_HEIGHT_CAMERA | real | camera height written to 0x3E080D |

### _SET_VEHICLEGEOMETRY

setting of extrinsic camera parameters , the coding valid bit and ECU VIN KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| VIN_ECU | string | ECU VehicleIdentificationNunmber written to 0x3800 - 7 digits |
| INITIAL_HEIGHT | real | written to 0x320001 |
| Y_DISTANCE_LEFT | real | written to 0x320005 |
| Y_DISTANCE_RIGHT | real | written to 0x320009 |
| X_DIST_CAM_TO_FRONT_AXLE | real | written to 0x32000D |

### _COPY_CAMERAMIRROR

copy of camera parameters to ECU KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

_No arguments._

### _SET_DBGMSG

de/activates debug messages KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| DBGMSG | string | "on" - activates debug message "off" - deactivates debug message |

### _MEMORY_WRITE_FLOAT

writes a real value to EEPROM KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| ADR | unsigned long | address to be written e.g. "0x320002" |
| PARAMETER | real | parameter to be written |

### _MEMORY_WRITE_LONG

writes a long value to EEPROM KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| ADR | unsigned long | address to be read from e.g. "0x320002" |
| PARAMETER | long | parameter to be written |

### _SET_SPEED_TABLE

coding values for pwm settings of vibration KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | mode of operation: default-mode, 100%-mode "default" - sets speed table to 60\|65\|70\|80\|85\|90\|95\|98 "100%" - sets speed table to 100\|100\|100\|100\|100\|100\|100\|100 |

### _FPNR_COUNTER_CLEAR

sets the FPNR counter to 0xFF KWP2000: $3D WriteMemoryByAddress KWP2000: $23 ReadMemoryByAddress

_No arguments._

### _FPNR_COUNTER_READ

reads the FPNR counter KWP2000: $23 ReadMemoryByAddress

_No arguments._

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte  21+Anzahl Daten: ETX (0x03) |

### STEUERN_KALIBRIERUNG_LINKS

TAC (target auto calibration), if target is in left position (driver's view) KWP2000: $31 StartRoutineByLocalIdentifier .        $20 StartCalibrationLeft

| Name | Type | Description |
| --- | --- | --- |
| ENTF_X | int | distance between front axle (vehicle) and gantry range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Y | int | distance between the vehicle's middle axle and the fictional middle axle between the 2 target positions a shift to the right means a positive value range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Z_O | int | distance between the ground and the middle of the upper target range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Z_U | int | distance between the ground and the middle of the lower target range: -32768 -> 32767 resolution: 1 mm |
| KAMERA_HOEHE | int | mounting height of the camera range: -32768 -> 32767 resolution: 1 mm |
| TARGET_POS_ENTF | int | distance between the outer left edge of the left target to the outer left edge of the right target range: -32768 -> 32767 resolution: 1 mm |
| QUADRAT_GROESSE | int | size of the checker's squares (Schachbrettmuster) of the targets range: -32768 -> 32767 resolution: 1 mm |

### STEUERN_KALIBRIERUNG_RECHTS

TAC (target auto calibration), if target is in right position (driver's view) KWP2000: $31 StartRoutineByLocalIdentifier .        $21 StartCalibrationRight

| Name | Type | Description |
| --- | --- | --- |
| ENTF_X | int | distance between front axle (vehicle) and gantry range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Y | int | distance between the vehicle's middle axle and the fictional middle axle between the 2 target positions a shift to the right means a positive value range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Z_O | int | distance between the ground and the middle of the upper target range: -32768 -> 32767 resolution: 1 mm |
| ENTF_Z_U | int | distance between the ground and the middle of the lower target range: -32768 -> 32767 resolution: 1 mm |
| KAMERA_HOEHE | int | mounting height of the camera range: -32768 -> 32767 resolution: 1 mm |
| TARGET_POS_ENTF | int | distance between the outer left edge of the left target to the outer left edge of the right target range: -32768 -> 32767 resolution: 1 mm |
| QUADRAT_GROESSE | int | size of the checker's squares (Schachbrettmuster) of the targets range: -32768 -> 32767 resolution: 1 mm |

### STEUERN_KALIBRIERUNG_HO

start SPC (service point calibration) KWP2000: $31 StartRoutineByLocalIdentifier .        $22 StartCalibrationInService

_No arguments._

### STEUERN_STOP_KALIBRIERUNG_HO

stop SPC (service point calibration) KWP2000: $31 StartRoutineByLocalIdentifier .        $23 StopCalibrationInService

_No arguments._

### STATUS_KALIBRIERMODUS_HO

status of SPC (service point calibration) KWP2000: $31 StartRoutineByLocalIdentifier .        $24 StatusCalibrationInService

_No arguments._

### _GET_CAMINTRINSIC

reads intrinsic camera parameters and camera serial number KWP2000: $23 ReadMemoryByAddress

_No arguments._

### _GET_CAMCALIBRATION

reads calibration results and camera VIN KWP2000: $23 ReadMemoryByAddress

_No arguments._

### _GET_VEHICLEGEOMETRY

reads extrinsic camera parameters , the coding valid bit and ECU VIN KWP2000: $23 ReadMemoryByAddress

_No arguments._

### _MEMORY_READ_FLOAT

reads a real value from EEPROM KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| ADR | unsigned long | address to be read from e.g. "0x320002" |

### _MEMORY_READ_LONG

reads a long value from EEPROM KWP2000: $23 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| ADR | unsigned long | address to be read from e.g. "0x320002" |

### STATUS_LVDS

reports status of the LVDS data stream KWP2000: $21 ReadDataByLocalIdentifier .        $23 status of LVDS data stream

_No arguments._

### _READ_VNR

read original and current SW versionnumbers KWP2000: $21 ReadDataByLocalIdentifier .        $36 versionnumbers

_No arguments._

### _STEUERN_TEST_FUNKTIONAL_TLC

activates extended TLC-Check at FAS KWP2000: $31 StartRoutineByLocalIdentifier .        $26 extended TLC-Check

| Name | Type | Description |
| --- | --- | --- |
| ACTIVATION | unsigned int | de/activates the extended TLC-Check 0 - deactivation 1 - activation |
| SPEED | real | vehicle speed range: 0.0 -> 400.0 resolution: 1 kmh |
| YAW | real | yaw angle range: -100.0 -> 100.0 resolution: 1 °/s |

### _UNIVERSAL_JOB

transmits an individual diagnostic request to the ECU

| Name | Type | Description |
| --- | --- | --- |
| REQUEST | string | holds the testers request in hex, e.g. speicher_lesen e.g. SID = 23 - ReadMemoryByAddress e.g. address_high = 30 e.g. address_middle = 01 e.g. address_low = 01 e.g. segement = 03 - NVRAM e.g. amount = 30 - 48 databytes input is the 233001010330 |

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
| 0xA928 | Spannungsversorgung Kamera |
| 0xA929 | Power PC Watchdog |
| 0xA92A | Verbindung Imager-ECU unterbrochen |
| 0xA92B | Kamera-Kalibrierung |
| 0xA92C | Kalibrierung Out of Range |
| 0xA92E | EEPROM Kommunikation |
| 0xA92F | Spannungsversorgung (Klemme 30) |
| 0xA930 | interne Spannungsversorgung (Netzteil 1-3) |
| 0xA931 | Aktuator |
| 0xA932 | Timeout CAN ID 1A0h (Geschwindigkeit) |
| 0xA933 | Timeot CAN ID C8h (Lenkradwinkel oben) |
| 0xA934 | Timeout CAN ID C4h (Lenkradwinkel unten) |
| 0xA935 | Timeout CAN ID 21Ah (Lampenzustand) |
| 0xA936 | Timeout CAN ID 314h (Status Fahrlicht) |
| 0xA937 | Timeout CAN ID 2A6h (Bedienung Wischer) |
| 0xA938 | Timeout CAN ID 226h (Wischergeschwindigkeit) |
| 0xA939 | PPC nicht funktionsfähig |
| 0xA93A | Timeout  CAN ID 1B4h (Status Kombi) |
| 0xA93B | Timeout CAN ID 1EEh (operation steering rod) |
| 0xA93D | Timeout CAN ID 130h (Klemmenstatus) |
| 0xA941 | Timeout CAN ID 330h (Kilometerstand) |
| 0xA942 | Timeout CAN ID 1D6h (Bedienung Audio Telefon) |
| 0xA943 | Timeout CAN ID 19Eh (STAT_DSC) |
| 0xA944 | Timeout CAN ID 1D0h (Engine_1, Status Motor) |
| 0xA946 | Checksummenfehler ECU EEPROM |
| 0xA947 | Checksummenfehler Kamera EEPROM |
| 0xA948 | ECU nicht korrekt kodiert |
| 0xA949 | Algorithm parameter out of range |
| 0xA94A | CPLD error |
| 0xA94B | EEPROM communication ECU |
| 0xE047 | Bus Off, Fehler Nr. 3h |
| 0xA92D | Energiesparmode aktiv |
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
| 0xA928 | 0x01 | 0x0A | - | - |
| 0xA929 | 0x01 | 0x0A | - | - |
| 0xA92A | 0x01 | 0x0A | - | - |
| 0xA92B | 0x01 | 0x0A | - | - |
| 0xA92C | 0x01 | 0x0A | - | - |
| 0xA92D | 0x01 | 0x0A | - | - |
| 0xA92E | 0x01 | 0x0A | - | - |
| 0xA92F | 0x01 | 0x0A | - | - |
| 0xA930 | 0x01 | 0x0A | - | - |
| 0xA931 | 0x01 | 0x0A | - | - |
| 0xA932 | 0x01 | 0x0A | - | - |
| 0xA933 | 0x01 | 0x0A | - | - |
| 0xA934 | 0x01 | 0x0A | - | - |
| 0xA935 | 0x01 | 0x0A | - | - |
| 0xA936 | 0x01 | 0x0A | - | - |
| 0xA937 | 0x01 | 0x0A | - | - |
| 0xA938 | 0x01 | 0x0A | - | - |
| 0xA939 | 0x01 | 0x0A | - | - |
| 0xA93A | 0x01 | 0x0A | - | - |
| 0xA93C | 0x01 | 0x0A | - | - |
| 0xA93D | 0x01 | 0x0A | - | - |
| 0xA941 | 0x01 | 0x0A | - | - |
| 0xA942 | 0x01 | 0x0A | - | - |
| 0xA943 | 0x01 | 0x0A | - | - |
| 0xA944 | 0x01 | 0x0A | - | - |
| 0xA946 | 0x01 | 0x0A | - | - |
| 0xA947 | 0x01 | 0x0A | - | - |
| 0xA948 | 0x01 | 0x0A | - | - |
| 0xE047 | 0x01 | 0x0A | - | - |
| 0xFFFF | 0x01 | 0x0A | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordspannung | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x0A | Botschaftenfehler | 0-n | - | 0xFF | ERRORTYPE | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ERRORTYPE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | Alive |
| 0x04 | Checksum |
| 0x08 | Application |
| xy | unplausibler Wert |

### LIMIT_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | unterhalb des Limits |
| 0x02 | innerhalb der Limits |
| 0x03 | überhalb der Limits |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### CAMCONN_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | nein |
| 0x01 | ja |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### LVDS_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | Datenstrom ok |
| 0x02 | Datenstrom fehlerhaft |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### FPN_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | nein |
| 0x01 | ja |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### EEPROM_COMM_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | keine Kommunikation |
| 0x01 | Kommunikation möglich |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### VIDEO_DATA_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Videodaten in Ordnung |
| 0x01 | Videodaten nicht in Ordnung |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### WAKE_LINE_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | Weckleitung aktiv |
| 0x02 | Weckleitung nicht aktiv |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### MEM_CONSISTENT_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Speichertyp konsistent |
| 0x01 | Speichertyp nicht konsistent |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### PPC_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | PowerPC nicht aktiv |
| 0x01 | PowerPC aktiv |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### FETRAWE_MODE_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Fetrawe-Modus aktiv |
| 0x01 | Fetrawe-Modus nicht aktiv |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### EEPROM_BLOCK_3000

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 01 |
| 0x02 | 01 |
| 0x03 | 00 |
| 0x04 | 46 |
| 0x05 | 41 |
| 0x06 | 01 |
| 0x07 | 03 |
| 0x08 | 96 |
| 0x09 | 14 |
| 0x0A | 01 |
| 0x0B | FF |
| 0x0C | FF |
| 0x0D | FF |
| 0x0E | FF |
| 0x0F | FF |
| 0x10 | FF |
| 0x11 | FF |
| 0x12 | FF |
| 0x13 | FF |
| 0x14 | FF |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### EEPROM_BLOCK_3001

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 01 |
| 0x02 | 04 |
| 0x03 | 05 |
| 0x04 | 7D |
| 0x05 | 09 |
| 0x06 | 09 |
| 0x07 | 8C |
| 0x08 | 1E |
| 0x09 | 28 |
| 0x0A | 32 |
| 0x0B | 3C |
| 0x0C | 46 |
| 0x0D | 50 |
| 0x0E | 5A |
| 0x0F | 64 |
| 0x10 | 3C |
| 0x11 | 41 |
| 0x12 | 46 |
| 0x13 | 4B |
| 0x14 | 50 |
| 0x15 | 55 |
| 0x16 | 5F |
| 0x17 | 62 |
| 0x18 | 7D |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | 01 |
| 0x1E | 05 |
| 0x1F | 19 |

### EEPROM_BLOCK_3002

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 04 |
| 0x03 | 00 |
| 0x04 | 18 |
| 0x05 | 00 |
| 0x06 | C8 |
| 0x07 | 00 |
| 0x08 | 18 |
| 0x09 | 19 |
| 0x0A | 0F |
| 0x0B | 01 |
| 0x0C | FF |
| 0x0D | FF |
| 0x0E | FF |
| 0x0F | FF |
| 0x10 | FF |

### EEPROM_BLOCK_3203

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | FF |
| 0x02 | FF |
| 0x03 | FF |
| 0x04 | FF |
| 0x05 | FF |
| 0x06 | FF |
| 0x07 | FF |
| 0x08 | FF |
| 0x09 | FF |
| 0x0A | FF |

### EEPROM_BLOCK_3400

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 05 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 00 |

### EEPROM_BLOCK_3500

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 00 |
| 0x05 | 00 |
| 0x06 | 00 |
| 0x07 | 00 |
| 0x08 | 00 |
| 0x09 | 00 |
| 0x0A | 00 |
| 0x0B | 00 |
| 0x0C | 00 |
| 0x0D | 00 |
| 0x0E | 00 |
| 0x0F | 00 |
| 0x10 | 00 |
| 0x11 | 00 |
| 0x12 | 00 |
| 0x13 | 00 |
| 0x14 | 00 |
| 0x15 | 00 |
| 0x16 | 00 |
| 0x17 | 00 |
| 0x18 | 00 |
| 0x19 | 00 |
| 0x1A | 00 |
| 0x1B | 00 |
| 0x1C | 00 |
| 0x1D | 00 |
| 0x1E | 00 |
| 0x1F | 00 |
| 0x20 | 00 |
| 0x21 | 00 |
| 0x22 | 00 |
| 0x23 | 00 |
| 0x24 | 00 |
| 0x25 | 00 |
| 0x26 | 00 |
| 0x27 | 00 |
| 0x28 | 00 |
| 0x29 | 00 |
| 0x2A | 00 |
| 0x2B | 00 |
| 0x2C | 00 |
| 0x2D | 00 |
| 0x2E | 00 |
| 0x2F | 00 |
| 0x30 | 00 |
| 0x31 | 00 |
| 0x32 | 00 |
| 0x33 | 00 |
| 0x34 | 00 |
| 0x35 | 00 |
| 0x36 | 00 |
| 0x37 | 00 |
| 0x38 | 00 |
| 0x39 | 00 |
| 0x3A | 00 |
| 0x3B | 00 |
| 0x3C | 00 |
| 0x3D | 00 |
| 0x3E | 00 |
| 0x3F | 00 |
| 0x40 | 00 |
| 0x41 | 00 |
| 0x42 | 00 |
| 0x43 | 00 |
| 0x44 | 00 |
| 0x45 | 00 |
| 0x46 | 00 |
| 0x47 | 00 |
| 0x48 | 00 |
| 0x49 | 00 |
| 0x4A | 00 |
| 0x4B | 00 |
| 0x4C | 00 |
| 0x4D | 00 |
| 0x4E | 00 |
| 0x4F | 00 |
| 0x50 | 00 |
| 0x51 | 00 |
| 0x52 | 00 |
| 0x53 | 00 |
| 0x54 | 00 |
| 0x55 | 00 |
| 0x56 | 00 |
| 0x57 | 00 |
| 0x58 | 00 |
| 0x59 | 00 |
| 0x5A | 00 |
| 0x5B | 00 |
| 0x5C | 00 |
| 0x5D | 00 |
| 0x5E | 00 |
| 0x5F | 00 |
| 0x60 | 00 |
| 0x61 | FF |
| 0x62 | FF |
| 0x63 | FF |
| 0x64 | FF |
| 0x65 | FF |
| 0x66 | FF |
| 0x67 | FF |
| 0x68 | FF |
| 0x69 | FF |
| 0x6A | FF |
| 0x6B | FF |
| 0x6C | FF |
| 0x6D | FF |
| 0x6E | FF |
| 0x6F | FF |
| 0x70 | FF |
| 0x71 | FF |
| 0x72 | FF |
| 0x73 | FF |
| 0x74 | FF |
| 0x75 | FF |
| 0x76 | FF |
| 0x77 | FF |
| 0x78 | FF |
| 0x79 | FF |
| 0x7A | FF |
| 0x7B | FF |
| 0x7C | FF |
| 0x7D | FF |
| 0x7E | FF |
| 0x7F | FF |

### EEPROM_BLOCK_3501

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 00 |
| 0x05 | 00 |
| 0x06 | 00 |
| 0x07 | 00 |
| 0x08 | 00 |
| 0x09 | 00 |
| 0x0A | 00 |
| 0x0B | 00 |
| 0x0C | 00 |
| 0x0D | 00 |
| 0x0E | 00 |
| 0x0F | 00 |

### EEPROM_BLOCK_3600

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 01 |
| 0x02 | FF |

### EEPROM_BLOCK_3601

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | FF |
| 0x01 | FF |
| 0x02 | FF |
| 0x03 | FF |

### EEPROM_BLOCK_3700

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | FF |
| 0x02 | FF |
| 0x03 | FF |
| 0x04 | FF |

### EEPROM_BLOCK_3701

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |

### EEPROM_BLOCK_3800

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | FF |
| 0x02 | FF |
| 0x03 | FF |
| 0x04 | FF |
| 0x05 | FF |
| 0x06 | FF |
| 0x07 | FF |
| 0x08 | FF |
| 0x09 | FF |
| 0x0A | FF |
| 0x0B | FF |
| 0x0C | FF |
| 0x0D | FF |
| 0x0E | FF |
| 0x0F | FF |
| 0x10 | FF |
| 0x11 | FF |
| 0x12 | FF |
| 0x13 | FF |
| 0x14 | FF |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### EEPROM_BLOCK_3802

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | FF |
| 0x01 | FF |
| 0x02 | FF |
| 0x03 | FF |

### EEPROM_BLOCK_3B02

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | FF |
| 0x01 | FF |
| 0x02 | FF |
| 0x03 | FF |
| 0x04 | FF |
| 0x05 | FF |
| 0x06 | FF |
| 0x07 | FF |
| 0x08 | FF |
| 0x09 | FF |
| 0x0A | FF |
| 0x0B | FF |
| 0x0C | FF |
| 0x0D | FF |
| 0x0E | FF |
| 0x0F | FF |
| 0x10 | FF |
| 0x11 | FF |
| 0x12 | FF |
| 0x13 | FF |
| 0x14 | FF |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |
| 0x20 | FF |
| 0x21 | FF |
| 0x22 | FF |
| 0x23 | FF |
| 0x24 | FF |
| 0x25 | FF |
| 0x26 | FF |
| 0x27 | FF |
| 0x28 | FF |
| 0x29 | FF |
| 0x2A | FF |
| 0x2B | FF |
| 0x2C | FF |
| 0x2D | FF |
| 0x2E | FF |
| 0x2F | FF |
| 0x30 | FF |
| 0x31 | FF |
| 0x32 | FF |
| 0x33 | FF |
| 0x34 | FF |
| 0x35 | FF |
| 0x36 | FF |
| 0x37 | FF |
| 0x38 | FF |
| 0x39 | FF |
| 0x3A | FF |
| 0x3B | FF |
| 0x3C | FF |
| 0x3D | FF |
| 0x3E | FF |
| 0x3F | FF |
| 0x40 | FF |
| 0x41 | FF |
| 0x42 | FF |
| 0x43 | FF |
| 0x44 | FF |
| 0x45 | FF |
| 0x46 | FF |
| 0x47 | FF |
| 0x48 | FF |
| 0x49 | FF |
| 0x4A | FF |
| 0x4B | FF |
| 0x4C | FF |
| 0x4D | FF |
| 0x4E | FF |
| 0x4F | FF |
| 0x50 | FF |
| 0x51 | FF |
| 0x52 | FF |
| 0x53 | FF |
| 0x54 | FF |
| 0x55 | FF |
| 0x56 | FF |
| 0x57 | FF |
| 0x58 | FF |
| 0x59 | FF |
| 0x5A | FF |
| 0x5B | FF |
| 0x5C | FF |
| 0x5D | FF |
| 0x5E | FF |
| 0x5F | FF |

### EEPROM_BLOCK_3B03

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | FF |
| 0x01 | 5F |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 00 |
| 0x05 | F1 |
| 0x06 | FF |
| 0x07 | FF |
| 0x08 | FF |
| 0x09 | 73 |
| 0x0A | 00 |
| 0x0B | 00 |
| 0x0C | 00 |
| 0x0D | 39 |
| 0x0E | B4 |
| 0x0F | 48 |
| 0x10 | 3D |
| 0x11 | 1E |
| 0x12 | 00 |
| 0x13 | 00 |
| 0x14 | 00 |
| 0x15 | 14 |
| 0x16 | 00 |
| 0x17 | 00 |
| 0x18 | 00 |

### EEPROM_BLOCK_3B04

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | FF |
| 0x01 | 00 |
| 0x02 | FF |
| 0x03 | 82 |
| 0x04 | 1A |
| 0x05 | FF |
| 0x06 | FF |

### EEPROM_BLOCK_3B06

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 00 |
| 0x05 | 33 |
| 0x06 | 33 |
| 0x07 | 33 |
| 0x08 | 3F |
| 0x09 | 9A |
| 0x0A | 99 |
| 0x0B | 99 |
| 0x0C | 3E |
| 0x0D | 33 |
| 0x0E | 33 |
| 0x0F | 33 |
| 0x10 | 3F |
| 0x11 | CD |
| 0x12 | CC |
| 0x13 | CC |
| 0x14 | 3D |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### EEPROM_BLOCK_3B07

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 0A |
| 0x02 | D7 |
| 0x03 | A3 |
| 0x04 | 3C |
| 0x05 | CD |
| 0x06 | CC |
| 0x07 | CC |
| 0x08 | 3D |
| 0x09 | 00 |
| 0x0A | 00 |
| 0x0B | 00 |
| 0x0C | 00 |
| 0x0D | 00 |
| 0x0E | 00 |
| 0x0F | 20 |
| 0x10 | 40 |
| 0x11 | 00 |
| 0x12 | 00 |
| 0x13 | 40 |
| 0x14 | 40 |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### EEPROM_BLOCK_3B08

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 00 |
| 0x05 | CD |
| 0x06 | CC |
| 0x07 | 4C |
| 0x08 | 3E |
| 0x09 | 6F |
| 0x0A | 12 |
| 0x0B | 03 |
| 0x0C | 3A |
| 0x0D | 9A |
| 0x0E | 99 |
| 0x0F | 99 |
| 0x10 | 3E |
| 0x11 | 00 |
| 0x12 | 00 |
| 0x13 | 00 |
| 0x14 | 40 |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### EEPROM_BLOCK_3B09

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | 00 |
| 0x02 | 00 |
| 0x03 | 00 |
| 0x04 | 3F |
| 0x05 | 00 |
| 0x06 | 00 |
| 0x07 | 80 |
| 0x08 | 3F |
| 0x09 | 00 |
| 0x0A | 24 |
| 0x0B | F4 |
| 0x0C | 49 |
| 0x0D | 00 |
| 0x0E | 00 |
| 0x0F | 80 |
| 0x10 | 40 |
| 0x11 | 39 |
| 0x12 | 8E |
| 0x13 | 9B |
| 0x14 | 41 |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### EEPROM_BLOCK_3B0A

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | 00 |
| 0x01 | C7 |
| 0x02 | 71 |
| 0x03 | 90 |
| 0x04 | 41 |
| 0x05 | 00 |
| 0x06 | 00 |
| 0x07 | 20 |
| 0x08 | 40 |
| 0x09 | 0A |
| 0x0A | D7 |
| 0x0B | 23 |
| 0x0C | 3B |
| 0x0D | 00 |
| 0x0E | 00 |
| 0x0F | 40 |
| 0x10 | 40 |
| 0x11 | FF |
| 0x12 | FF |
| 0x13 | FF |
| 0x14 | FF |
| 0x15 | FF |
| 0x16 | FF |
| 0x17 | FF |
| 0x18 | FF |
| 0x19 | FF |
| 0x1A | FF |
| 0x1B | FF |
| 0x1C | FF |
| 0x1D | FF |
| 0x1E | FF |
| 0x1F | FF |

### CALIBRATION_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | TAC_COMPLETE_OK |
| 0x02 | TAC_OK |
| 0x03 | TAC_IMAGE |
| 0x04 | TAC_NO_TARGET |
| 0x05 | TAC_TARGET_OOR |
| 0x06 | TAC_INCONSISTENCY |
| 0x07 | TAC_PARAM_LIMIT |
| 0x08 | TAC_INTERNAL_ERROR |
| 0x09 | TAC_FINISH_OK |
| 0x0A | TAC_FINISH_ONGOING |
| 0x0B | TAC_FINISH_ERROR |
| 0x0C | TAC_INPUT_IMAGE_POINTER_IS_NULL |
| 0x0D | TAC_INPUT_FPNI_POINTER_IS_NULL |
| 0x0E | TAC_INPUT_FPNI_LOOKUP_TABLE_IS_NULL |
| 0x0F | TAC_INPUT_DISTANCE_VEHICLE_CENTER_LINE_OUT_OF_RANGE |
| 0x11 | TAC_INPUT_TARGET_WIDTH_OUT_OF_RANGE |
| 0x12 | TAC_INPUT_TARGET_FRONT_AXE_OUT_OF_RANGE |
| 0x13 | TAC_INPUT_UPPER_TARGETS_HEIGHT_OUT_OF_RANGE |
| 0x14 | TAC_INPUT_LOWER_TARGETS_HEIGHT_OUT_OF_RANGE |
| 0x15 | TAC_INPUT_SQUARE_SIZE_OUT_OF_RANGE |
| 0x16 | TAC_INPUT_DISTANCE_CAMERA_TO_TARGET_OUT_OF_RANGE |
| 0x17 | TAC_INPUT_CAMERA_CENTERLINE_OUT_OF_RANGE |
| 0x18 | TAC_RUN_ILLEGAL_CALL_SEQUENCE |
| 0x19 | TAC_RUN_RESULT_ROLL_ANGLE_TOO_LARGE |
| 0x1A | TAC_RUN_WRONG_DISTANCE |
| 0x1B | TAC_RUN_WRONG_HORIZONTAL_BOTTOM_TARGET_LOCATION |
| 0x1C | TAC_RUN_WRONG_VERTICAL_BOTTOM_TARGET_LOCATION |
| 0x1D | TAC_RUN_ROLL_ANGLE_DIFFERENTIAL_BETWEEN_FRAMES_TOO_LARGE |
| 0x1E | TAC_RUN_DISTANCE_OF_BOTTOM_IMAGES_DIFFERENT_THAN_DISTANCE_OF_TOP_IMAGES |
| 0x1F | TAC_RUN_RESULT_YAW_ANGLE_TOO_LARGE |
| 0x21 | TAC_RUN_RESULT_HORIZON_ANGLE_TOO_LARGE |
| 0x22 | TAC_PARAM_CAMERA_LEFT_WHEEL_DISTANCE_NOT_IN_RANGE |
| 0x23 | TAC_PARAM_CAMERA_RIGHT_WHEEL_DISTANCE_NOT_IN_RANGE |
| 0x24 | TAC_PARAM_CAMERA_HEIGHT_NOT_IN_RANGE |
| 0x25 | TAC_PARAM_CAMERA_CAR_FRONT_DISTANCE_NOT_IN_RANGE |
| 0x26 | TAC_PARAM_CAMERA_FOCAL_LENGTH_NOT_IN_RANGE |
| 0x27 | TAC_PARAM_WIDTH_CAMERA_IMAGE_ORIGINAL_NOT_IN_RANGE |
| 0x28 | TAC_PARAM_HEIGHT_CAMERA_IMAGE_ORIGINAL_NOT_IN_RANGE |
| 0x29 | TAC_PARAM_MAX_YAW_CALIBRATION_OUT_OF_RANGE |
| 0x2A | TAC_PARAM_MIN_HORIZON_CALIBRATION_OUT_OF_RANGE |
| 0x2B | TAC_PARAM_MAX_HORIZON_CALIBRATION_OUT_OF_RANGE |
| 0x2C | TAC_PARAM_MAX_ROLL_CALIBRATION_OUT_OF_RANGE |
| 0x2D | TAC_PARAM_FPNI_HEIGHT_NOT_IN_RANGE |
| 0x2E | TAC_PARAM_FPNI_WIDTH_NOT_IN_RANGE |
| 0x2F | TAC_PARAM_K1_DISTORTION_NOT_IN_RANGE |
| 0x31 | TAC_PARAM_K2_DISTORTION_NOT_IN_RANGE |
| 0x32 | TAC_PARAM_MAIN_POINT_X_DEVIATION_NOT_IN_RANGE |
| 0x33 | TAC_PARAM_MAIN_POINT_Y_DEVIATION_NOT_IN_RANGE |
| 0x34 | TAC_INIT_ILLEGAL_CALL_SEQUENCE |
| 0xE1 | TAC_NOT_AVAILABLE_(NOT INITIALIZED) |
| 0xE2 | ECU_NOT_CODED |
| 0xE3 | TAC_BUSY_(ALREADY_RUNNING) |
| 0xE4 | SPC_RUNNING |
| 0xE5 | EEPROM_ACCESS_FAILED |
| 0xE6 | uC_COMMUNICATION_FAILURE |
| xy | unplausibler Wert |

### STAT_CAL_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Blockagetest nicht gestartet, SPC(Service Point Calibration) nicht gestartet |
| 0x01 | Blockagetest aktiv, SPC nicht gestartet |
| 0x02 | Blockagetest erfolgreich beendet, SPC aktiv |
| 0x03 | Blockagetest erfolgreich beendet, SPC erfolgreich abgeschlossen |
| 0xFF | ungültig |
| xy | unplausibler Wert |

### VNR_DESCRIPTION

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | B0 |
| 0x01 | C1 |
| 0x02 | C2 |
| 0x03 | C2_1 |
| 0x04 | C3 Labor |
| 0x06 | C3 default |
| 0x0A | C3 BMW |
| 0x0B | C4 BMW |
| xy | unplausibler Wert |
