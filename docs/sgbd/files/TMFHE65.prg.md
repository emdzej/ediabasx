# TMFHE65.prg

## General

|  |  |
| --- | --- |
| File | TMFHE65.prg |
| Type | PRG |
| Jobs | 74 |
| Tables | 22 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 3.010 |
| Author | LEAR EE K. Fuchs, BMW TI-430 R. Gall, LEAR EE C. Stagl, LEAR EE S. C. Schmidt |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Tuermodul Fahrertuer hinten E65 |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 3.010 |  |  |
| AUTHOR | string | LEAR EE K. Fuchs, BMW TI-430 R. Gall, LEAR EE C. Stagl, LEAR EE S. C. Schmidt |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.26 |  |  |
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

_No arguments._

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

### C_C_PROG

Codierdaten schreiben fuer TM KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### READ_SHADOW

Lese kompletten Shadow-Speicher aus KWP2000: $22    ReadDataByCommonIdentifier $2000  dtcShadowMemory Modus  : Default

_No arguments._

### CODIERDATEN_MODUL_LESEN

Auslesen der Codierdaten Modul !!! nur fuer Tuermodule !!! KWP2000: $22 ReadDataByCommonIdentifier $3100 Codierdaten Modul Modus  : Default

_No arguments._

### STATUS_INPUTS

Auslesen der Stati aller Hall-Eingaenge KWP2000: $30 InputOutputControlByLocalIdentifier $07 all digital inputs $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIAG

Auslesen der Stati aller Diagnose Eingaenge (Treiber zu Prozessor) KWP2000: $30 InputOutputControlByLocalIdentifier $02 all diagnostic inputs $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_OUTPUT

Auslesen der Stati aller Ausgaenge (Prozessor zu Treiber) KWP2000: $30 InputOutputControlByLocalIdentifier $03 all outputs $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_SWITCH_BLOCK

Auslesen der Stati aller Schalterblock Signale (K-Bus) KWP2000: $30 InputOutputControlByLocalIdentifier $05 all K-Bus inputs $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_FLAGS

Auslesen der internen Software-Flags KWP2000: $30 InputOutputControlByLocalIdentifier $06 all internal flags $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DIGITAL

Auslesen der Stati aller digitaler Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 all digital signals $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_DIGITAL

Ansteuern von jedem digitalen Signal KWP2000: $30 InputOutputControlByLocalIdentifier $01 digital signals $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL_NAME | string | Werte: Alle Namen aus Signaltabelle E65  : table DigitalIOSignal E65rd: table DigitalIOSignalRd table DigitalIOSignal__ TEXT |
| DIGITALWERT | string | logical value Werte: true, false table DigitalArgument TEXT |

### STEUERN_ANALOG

Ansteuern von jedem digitalen Signal KWP2000: $30 InputOutputControlByLocalIdentifier $10 digital signals $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL_NAME | string | Werte: Alle Namen aus Analogtabelle table AnalogSignal TEXT |
| ANALOGWERT | int | Werte: 0...255 |

### STEUERN_ENDE

Ansteuern von jedem digitalen Signal KWP2000: $30 InputOutputControlByLocalIdentifier $01 digital signals $00 returnControlToECU Modus  : Default

_No arguments._

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### STATUS_CFL

Auslesen der Stati von CFL KWP2000: $31 startRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | gewuenschte Funktion table Funktion_CFL CFL_FUNKTION TEXT |

### STEUERN_CFL

Steuern der CFL-modul KWP2000: $31 startRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | gewuenschte Funktion table Funktion_CFL CFL_FUNKTION TEXT |
| WERT | string | Funktionswert Werte in dezimal |

### STEUERN_ER

Tuermodul ZV Entriegeln !!! ab i6.121 !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $21 DiagZVER Modus  : Default

_No arguments._

### STEUERN_VR

Tuermodul ZV Verriegeln !!! ab i6.121 !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $22 DiagZVVR Modus  : Default

_No arguments._

### STEUERN_ZS

Tuermodul ZV Sichern !!! ab i6.121 !!! Achtung: bei Diagnose-Ende nach Timeout bleibt TM gesichert!! Diagnose ist dann nicht mehr möglich (Security-Access denied) Diagnose muß bis Entriegeln aufrechterhalten werden!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $23 DiagZVZS Modus  : Default

_No arguments._

### STATUS_ANALOG

Auslesen aller analoge Werte KWP2000: $30 InputOutputControlByLocalIdentifier $10 all analog values $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_COSI_EIN

Coach-Door Sicherung einlegen !!! ab i6.121 mit Rolls Royce Kodierung !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $01 DiagCoSiOn Modus  : Default

_No arguments._

### STEUERN_COSI_AUS

Coach-Door Sicherung auslegen !!! ab i6.121 mit Rolls Royce Kodierung !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $02 DiagCoSiOff Modus  : Default

_No arguments._

### STEUERN_EMF

Steuern der EMF Ausgaenge fuer ZEIT mal 10ms !!! ab i6.121 mit Rolls Royce Kodierung !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $03 DiagEMF $xx EMF Aktivierung fuer $xx * 10ms Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Aktivierung Werte: 0...255 Werte: 0  = EMF ausschalten Werte: >0 = EMF 0,01s - 2,55s ein |

### STEUERN_SR1_UP

Sonnenrollo 1 rauf fuer ZEIT mal 10ms oder bis Anschlag !!! ab i6.121 !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $11 DiagSR1Up $xx SR1 Aktivierung fuer $xx * 10ms Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Aktivierung Werte: 0...255 Werte: 0  = Fahrt bis Block Werte: >0 = 0,01s - 2,55s Fahrt nach oben und Stop |

### STEUERN_SR1_DOWN

Sonnenrollo 1 runter fuer ZEIT mal 10ms oder bis Anschlag !!! ab i6.121 !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $12 DiagSR1Down $xx SR1 Aktivierung fuer $xx * 10ms Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Aktivierung Werte: 0...255 Werte: 0  = Fahrt bis Block Werte: >0 = 0,01s - 2,55s Fahrt nach unten und Stop |

### STEUERN_SR2_UP

Sonnenrollo 2 rauf fuer ZEIT mal 10ms oder bis Anschlag !!! ab i6.121 !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $13 DiagSR2Up $xx SR2 Aktivierung fuer $xx * 10ms Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Aktivierung Werte: 0...255 Werte: 0  = Fahrt bis Block Werte: >0 = 0,01s - 2,55s Fahrt nach oben und Stop |

### STEUERN_SR2_DOWN

Sonnenrollo 1 runter fuer ZEIT mal 10ms oder bis Anschlag !!! ab i6.121 !!! KWP2000: $31 StartRoutineByLocalIdentifier $FC Application diagnostics routines $14 DiagSR2Down $xx SR2 Aktivierung fuer $xx * 10ms Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Aktivierung Werte: 0...255 Werte: 0  = Fahrt bis Block Werte: >0 = 0,01s - 2,55s Fahrt nach unten und Stop |

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
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
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
| 0x03 | Speicher geloescht |
| 0x04 | nicht benutzt |
| 0x05 | Signaturpruefung PAF nicht durchgefuehrt |
| 0x06 | Signaturpruefung DAF nicht durchgefuehrt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vorhanden oder nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vorhanden oder nicht vollstaendig |
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
| 0xDC84 | CAN_Low, Physikalischer Fehler |
| 0xDC87 | Controller, Bus Off |
| 0x9BC8 | Prozessor defekt |
| 0x9BC9 | Schalterblock defekt |
| 0x9BCA | Dauerhafte Unterspannung |
| 0x9BCB | Energiesparmode aktiv |
| 0x9BCE | CAN_Low, Physikalischer Fehler |
| 0x9BCF | Controller, Bus Off |
| 0x9BD0 | ZV Motor ER defekt |
| 0x9BD1 | ZV Motor COM defekt |
| 0x9BD2 | ZV Motor VR/ZS defekt |
| 0x9BD3 | Elektrisch Oeffnen Motor defekt |
| 0x9BD4 | SCA Motor defekt |
| 0x9BD5 | KISI Sensor defekt |
| 0x9BD6 | ZV ER Sensor defekt |
| 0x9BD7 | SCA Sensor defekt |
| 0x9BD8 | Elektrisch Oeffnen Sensor defekt |
| 0x9BD9 | Elektrisch Oeffnen Freigabe ohne TAG |
| 0x9BDA | Fussraumleuchte defekt |
| 0x9BDB | Tuerwarnleuchte defekt |
| 0x9BDC | Ambiente Beleuchtung defekt |
| 0x9BDD | Vorfeldbeleuchtung defekt |
| 0x9BE0 | FH Defekt vorgehalten |
| 0x9BE1 | FH Defekt vorgehalten |
| 0x9BE2 | Fensterhebermechanik schwergaengig |
| 0x9BE3 | Hallsensor defekt |
| 0x9BE4 | Transistorbruecke defekt |
| 0x9BE5 | Motorklemmenspannung unplausibel |
| 0x9BE6 | Fensterposition ungueltig |
| 0x9BE7 | Kennlinie ungueltig |
| 0x9BE8 | Temperaturwert unplausibel |
| 0x9BE9 | Magnetrad Polbreiten ungueltig |
| 0x9BEF | Einklemmschutz defekt |
| 0x9BF0 | Spiegel Motor Horizontal defekt |
| 0x9BF1 | Spiegel Motor Vertikal defekt |
| 0x9BF2 | Beiklappmotor defekt |
| 0x9BF3 | Spiegelheizung defekt |
| 0x9BF4 | Spiegelheizung Kurzschluss |
| 0x9BF5 | Spiegelposition Potentiometer vertikal defekt |
| 0x9BF6 | Spiegelposition Potentiometer horizontal defekt |
| 0x???? | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### DIGITALIOSIGNALRD

| TEXT | NR |
| --- | --- |
| S_SZ_VR | 0 |
| S_COSI_VR | 0 |
| S_ZV_ER | 1 |
| S_SZ_ER | 2 |
| S_COSI_TK | 2 |
| S_ZV_TK | 3 |
| S_SCA_SPK | 4 |
| S_ZV_TAG | 5 |
| S_ZV_TIG | 5 |
| S_FH_ZU | 6 |
| S_FH_AUF | 7 |
| S_SPARE_1 | 8 |
| S_PE_BEREIT | 9 |
| S_SCA_BEREIT | 10 |
| S_ZV_KISI | 11 |
| S_ASP_RAST | 12 |
| S_ZV_TAG2 | 13 |
| S_KS_AUF | 14 |
| S_KS_AB | 15 |
| DIAG_MFOLDSTS | 16 |
| RESERVED_1 | 17 |
| DIAG_SCASTS | 18 |
| DIAG_ASP_COMLO | 19 |
| DIAG_ASP_COMHI | 20 |
| DIAG_ASP_POWER | 21 |
| DIAG_CMNSTS | 22 |
| DIAG_LOCKSTS | 23 |
| DIAG_PETOSTS | 24 |
| RESERVED_2 | 25 |
| S_FH_HALL2 | 26 |
| S_FH_HALL1 | 27 |
| DIAG_PEST | 28 |
| DIAG_ASP_OVERLOAD | 29 |
| DIAG_ASP_OPENLOAD | 30 |
| DIAG_VFSTS | 31 |
| DIAG_LTSTS2 | 32 |
| RESERVED_3 | 33 |
| DIAG_LTSTS1 | 34 |
| RESERVED_4 | 35 |
| DIAG_ASP_HORLO | 36 |
| DIAG_ASP_HORHI | 37 |
| DIAG_ASP_VERLO | 38 |
| DIAG_ASP_VERHI | 39 |
| OUT_SB_KL30DISC | 40 |
| OUT_ASP_MOTBKLPAUSHIDISC | 41 |
| OUT_ASP_ISENSE | 42 |
| OUT_ASP_MOTBKLPEINHIDISC | 43 |
| OUT_ASP_MOT_INH | 44 |
| OUT_ASP_MOT_CS | 45 |
| OUT_ASP_MOTBKLPAUSLODISC | 46 |
| OUT_ASP_MOTBKLPEINLODISC | 47 |
| OUT_SBR_KL30DISC | 48 |
| OUT_SR2_MOTZULODISC | 49 |
| OUT_SR2_MOTAUFLODISC | 50 |
| OUT_SR2_MOTAUFHIDISC | 51 |
| OUT_SR1_MOTAUFLODISC | 52 |
| OUT_SR1_MOTZUHIDISC | 53 |
| OUT_SR1_MOTZULODISC | 54 |
| OUT_SR1_MOTAUFHIDISC | 55 |
| OUT_ASP_MOTHORLODISC | 56 |
| OUT_ASP_MOTHORHIDISC | 57 |
| OUT_ASP_MOTVERLODISC | 58 |
| OUT_ASP_MOTVERHIDISC | 59 |
| OUT_ZV_VRLODISC | 60 |
| OUT_ZV_ZSLODISC | 61 |
| OUT_ZV_VRHIDISC | 62 |
| OUT_ZV_ZSHIDISC | 63 |
| OUT_EN1 | 64 |
| OUT_EN2 | 65 |
| OUT_ZV_KISILODISC | 66 |
| OUT_ZV_MOTCOMLODISC | 67 |
| OUT_ZV_KISIHIDISC | 68 |
| OUT_ASP_5VPOT | 69 |
| RESERVED_5 | 70 |
| OUT_ZV_MOTCOMHIDISC | 71 |
| OUT_SR2_MOTZUHIDISC | 72 |
| RESERVED_6 | 73 |
| OUT_LMP_FRDISC | 74 |
| OUT_ASP_HZGDISC | 75 |
| RESERVED_7 | 76 |
| OUT_SCA_MOTDISC | 77 |
| OUT_FH_EN | 78 |
| RESERVED_8 | 79 |
| RESERVED_9 | 80 |
| RESERVED_10 | 81 |
| RESERVE_11 | 82 |
| OUT_ASP_MOTCOMLODISC | 83 |
| OUT_ASP_MOTCOMHIDISC | 84 |
| OUT_PE_MOTURZUBRKDISC | 85 |
| OUT_SCA_MOTBRKDISC | 86 |
| OUT_PE_MOTURZUDISC | 87 |
| S_KLR_CBOT | 88 |
| S_KL15_CBOT | 89 |
| S_KL50_CBOT | 90 |
| S_TRAILER_CBOT | 91 |
| S_RFS_CBOT | 92 |
| CTR_DIM_PFIECBOT | 93 |
| CTR_PFIE_CBOT | 94 |
| S_FH_PANICCBOT | 95 |
| S_EO_CBOT | 96 |
| S_ER_CBOT | 97 |
| S_VR_CBOT | 98 |
| S_SICHERN_CBOT | 99 |
| S_ZV_PEER | 100 |
| Z_CRASH_CBOT | 101 |
| S_ZV_ZSINHIBIT | 102 |
| S_ZV_WDHSPERRE | 103 |
| S_FH_AUFCBOT | 104 |
| S_FH_ZUCBOT | 105 |
| S_FH_TCBOT | 106 |
| S_FH_FZGSTEHTCBOT | 107 |
| S_FHCAS_AUFCBOT | 108 |
| S_FHCAS_ZUCBOT | 109 |
| S_FHCAS_TCBOT | 110 |
| S_FHCAS_ENBCBOT | 111 |
| S_MEM_ABRUFCBOT | 112 |
| S_MEM_SPEICHCBOT | 113 |
| S_SR1_CBOT | 114 |
| S_SR2_CBOT | 115 |
| S_SR_UPCBOT | 116 |
| S_SR_DOWNCBOT | 117 |
| S_COMFORT_AUFCBOT | 118 |
| S_COMFORT_ZUCBOT | 119 |
| CAN_COSI_SAFE | 120 |
| CAN_COSI_ALWD | 121 |
| CAN_COSI_EMF | 122 |
| CAN_COSI_SEND | 123 |
| RESERVED_12 | 124 |
| RESERVED_13 | 125 |
| RESERVED_14 | 126 |
| RESERVED_15 | 127 |
| RESERVED_16 | 128 |
| RESERVED_17 | 129 |
| RESERVED_18 | 130 |
| RESERVED_19 | 131 |
| S_POWER_VACBOT | 132 |
| S_POWER_DOWNCBOT | 133 |
| S_WISCHER_STSCBOT | 134 |
| S_SH_EINCBOT | 135 |
| S_FH_SBFTAUFDISC | 136 |
| S_FH_SBFTZUDISC | 137 |
| S_FH_SBFTTAUFDISC | 138 |
| S_FH_SBFTTZUDISC | 139 |
| S_FH_SBFTHAUFDISC | 140 |
| S_FH_SBFTHZUDISC | 141 |
| S_FH_SBFTHTAUFDISC | 142 |
| S_FH_SBFTHTZUDISC | 143 |
| S_FH_SBBFTAUFDISC | 144 |
| S_FH_SBBFTZUDISC | 145 |
| S_FH_SBBFTTAUFDISC | 146 |
| S_FH_SBBFTTZUDISC | 147 |
| S_FH_SBBFTHAUFDISC | 148 |
| S_FH_SBBFTHZUDISC | 149 |
| S_FH_SBBFTHTAUFDISC | 150 |
| S_FH_SBBFTHTZUDISC | 151 |
| S_ASP_RECHTSDISC | 152 |
| S_ASP_LINKSDISC | 153 |
| S_ASP_OBENDISC | 154 |
| S_ASP_UNTENDISC | 155 |
| S_ASP_FTBFTDISC | 156 |
| S_ASP_BKLPDISC | 157 |
| S_KISI_DISC | 158 |
| S_SRR_SBDISC | 159 |
| S_FH_SBLOCAUFDISC | 160 |
| S_FH_SBLOCZUDISC | 161 |
| S_FH_SBLOCTAUFDISC | 162 |
| S_FH_SBLOCTZUDISC | 163 |
| S_SR1_DISC | 164 |
| S_SR2_DISC | 165 |
| S_SRR_DISC | 166 |
| S_SR_RLDISC | 167 |
| Z_ZV_RUN | 168 |
| Z_ZV_ER | 169 |
| Z_ZV_VR | 170 |
| Z_ZV_ZS | 171 |
| Z_ZV_KISI | 172 |
| Z_ZV_CRASH | 173 |
| Z_ZV_WDHSPERRE | 174 |
| Z_ZV_ZSDELAY | 175 |
| Z_EO_RUN | 176 |
| Z_EO_BREAK | 177 |
| Z_EO_UNDEF | 178 |
| Z_EO_RETURN | 179 |
| Z_SZ_VR | 180 |
| Z_SZ_ER | 181 |
| Z_SZ_VRVALID | 182 |
| Z_SZ_ERVALID | 183 |
| Z_SCA_READY | 184 |
| Z_SCA_CATCH | 185 |
| Z_SCA_ZU | 186 |
| Z_SCA_UNDEF | 187 |
| Z_PEER | 188 |
| Z_ZV_TKALT | 189 |
| Z_KISI | 190 |
| RESERVED_20 | 191 |
| Z_ASP_PAUSE | 192 |
| Z_MEMAKT | 193 |
| Z_MEM_VER | 194 |
| Z_MEM_HOR | 195 |
| Z_ASP_USPG | 196 |
| Z_SPGKLAPP | 197 |
| Z_ASP_KERB | 198 |
| Z_ASP_SPERRE | 199 |
| Z_ASP_DRIVE | 200 |
| Z_ASP_DELAY | 201 |
| Z_ASP_BSDELAY | 202 |
| Z_ASP_VLOW | 203 |
| RESERVED_21 | 204 |
| RESERVED_22 | 205 |
| RESERVED_23 | 206 |
| RESERVED_24 | 207 |
| Z_SR1_BLOCK | 208 |
| Z_SR2_BLOCK | 209 |
| Z_SR1_REVERSE | 210 |
| Z_SR2_REVERSE | 211 |
| Z_SR1_DELAY | 212 |
| Z_SR2_DELAY | 213 |
| Z_SR_VLOW | 214 |
| Z_SR1_ERROR | 215 |
| Z_SR1_DRIVE | 216 |
| Z_SR2_DRIVE | 217 |
| Z_SR1_UP | 218 |
| Z_SR2_UP | 219 |
| Z_SRR_LONG | 220 |
| RESERVED_25 | 221 |
| Z_SR1_REPEAT | 222 |
| Z_SR2_REPEAT | 223 |
| Z_FH_SEND | 224 |
| Z_FH_OPEN | 225 |
| Z_FH_OPENED | 226 |
| Z_LOW_VOLTAGE | 227 |
| Z_OVR_VOLTAGE | 228 |
| Z_KBUS_ACTIVE | 229 |
| Z_RHD | 230 |
| Z_LOWVOLT_LOG | 231 |
| DIAG_ASP_TEMP | 999 |
| DIAG_FHENOUTPUT | 999 |
| OUT_FLASHEN | 999 |
| OUT_PE_KL30DISC | 999 |
| OUT_WKUP_TIMER | 999 |
| S_FH_SBHAUFCBOT | 999 |
| S_FH_SBHTCBOT | 999 |
| S_FH_SBHZUCBOT | 999 |
| S_KISI_CBOT | 999 |
| Z_EBA_MODE | 999 |
| Z_ZV_INIT | 999 |
| Z_ZV_MOTORKURZ | 999 |

### DIGITALIOSIGNAL

| TEXT | NR |
| --- | --- |
| S_SZ_VR | 0 |
| S_ZV_ER | 1 |
| S_SZ_ER | 2 |
| S_ZV_TK | 3 |
| S_SCA_SPK | 4 |
| S_ZV_TAG | 5 |
| S_FH_ZU | 6 |
| S_FH_AUF | 7 |
| S_SPARE_1 | 8 |
| S_PE_BEREIT | 9 |
| S_SCA_BEREIT | 10 |
| S_ZV_KISI | 11 |
| S_ASP_RAST | 12 |
| S_ZV_TAG2 | 13 |
| S_KS_AUF | 14 |
| S_KS_AB | 15 |
| RESERVED_1 | 16 |
| DIAG_SCASTS | 17 |
| DIAG_PETOSTS | 18 |
| DIAG_MFOLDSTS | 19 |
| DIAG_VFSTS | 20 |
| DIAG_CMNSTS | 21 |
| DIAG_LOCKSTS | 22 |
| RESERVED_2 | 23 |
| DIAG_ASP_COMLO | 24 |
| DIAG_ASP_COMHI | 25 |
| DIAG_LTSTS1 | 26 |
| DIAG_FHENOUTPUT | 27 |
| DIAG_ASP_OVERLOAD | 28 |
| DIAG_ASP_OPENLOAD | 29 |
| DIAG_ASP_POWER | 30 |
| DIAG_LTSTS2 | 31 |
| DIAG_PEST | 32 |
| S_FH_HALL1 | 33 |
| S_FH_HALL2 | 34 |
| DIAG_ASP_TEMP | 35 |
| DIAG_ASP_HORLO | 36 |
| DIAG_ASP_HORHI | 37 |
| DIAG_ASP_VERLO | 38 |
| DIAG_ASP_VERHI | 39 |
| RESERVED_3 | 40 |
| RESERVED_4 | 41 |
| OUT_ZV_KISILODISC | 42 |
| OUT_ZV_MOTCOMLODISC | 43 |
| OUT_ZV_KISIHIDISC | 44 |
| OUT_ASP_5VPOT | 45 |
| OUT_FLASHEN | 46 |
| OUT_ZV_MOTCOMHIDISC | 47 |
| OUT_SB_KL30DISC | 48 |
| OUT_WKUP_TIMER | 49 |
| OUT_PE_KL30DISC | 50 |
| OUT_SR2_MOTAUFHIDISC | 51 |
| OUT_ASP_MOTBKLPAUSHIDISC | 51 |
| OUT_SR1_MOTZULODISC | 52 |
| OUT_ASP_MOT_INH | 52 |
| OUT_SR1_MOTZUHIDISC | 53 |
| OUT_ASP_MOT_CS | 53 |
| OUT_SR1_MOTAUFLODISC | 54 |
| OUT_ASP_MOTBKLPAUSLODISC | 54 |
| OUT_SR1_MOTAUFHIDISC | 55 |
| OUT_ASP_MOTBKLPEINLODISC | 55 |
| OUT_ASP_MOTHORLODISC | 56 |
| OUT_ASP_MOTHORHIDISC | 57 |
| OUT_LMP_FRDISC | 58 |
| OUT_ASP_HZGDISC | 59 |
| RESERVED_5 | 60 |
| RESERVED_6 | 61 |
| OUT_FH_EN | 62 |
| OUT_SR2_MOTZULODISC | 63 |
| OUT_ASP_MOTBKLPEINHIDISC | 63 |
| RESERVED_7 | 64 |
| OUT_SR2_MOTAUFLODISC | 65 |
| RESERVED_8 | 66 |
| OUT_SCA_MOTDISC | 67 |
| OUT_PE_MOTURZUDISC | 68 |
| OUT_SCA_MOTBRKDISC | 69 |
| OUT_PE_MOTURZUBRKDISC | 70 |
| OUT_SR2_MOTZUHIDISC | 71 |
| OUT_ASP_MOTVERLODISC | 72 |
| OUT_ASP_MOTVERHIDISC | 73 |
| OUT_ASP_MOTCOMLODISC | 74 |
| OUT_ASP_MOTCOMHIDISC | 75 |
| OUT_ZV_VRLODISC | 76 |
| OUT_ZV_ZSLODISC | 77 |
| OUT_ZV_VRHIDISC | 78 |
| OUT_ZV_ZSHIDISC | 79 |
| S_KLR_CBOT | 80 |
| S_KL15_CBOT | 81 |
| S_KL50_CBOT | 82 |
| S_TRAILER_CBOT | 83 |
| S_RFS_CBOT | 84 |
| CTR_DIM_PFIECBOT | 85 |
| CTR_PFIE_CBOT | 86 |
| Z_CRASH_CBOT | 87 |
| S_EO_CBOT | 88 |
| S_ER_CBOT | 89 |
| S_VR_CBOT | 90 |
| S_SICHERN_CBOT | 91 |
| S_KISI_CBOT | 92 |
| RESERVED_10 | 93 |
| S_ZV_ZSINHIBIT | 94 |
| S_ZV_WDHSPERRE | 95 |
| S_FH_AUFCBOT | 96 |
| S_FH_ZUCBOT | 97 |
| S_FH_TCBOT | 98 |
| S_FH_FZGSTEHTCBOT | 99 |
| S_FHCAS_AUFCBOT | 100 |
| S_FHCAS_ZUCBOT | 101 |
| S_FHCAS_TCBOT | 102 |
| S_FHCAS_ENBCBOT | 103 |
| S_MEM_ABRUFCBOT | 104 |
| S_MEM_SPEICHCBOT | 105 |
| S_SR1_CBOT | 106 |
| S_SR2_CBOT | 107 |
| S_SR_UPCBOT | 108 |
| S_SR_DOWNCBOT | 109 |
| S_COMFORT_AUFCBOT | 110 |
| S_COMFORT_ZUCBOT | 111 |
| S_FH_SBHAUFCBOT | 112 |
| S_FH_SBHZUCBOT | 113 |
| S_FH_SBHTCBOT | 114 |
| S_FH_PANICCBOT | 115 |
| S_POWER_VACBOT | 116 |
| S_POWER_DOWNCBOT | 117 |
| S_WISCHER_STSCBOT | 118 |
| S_SH_EINCBOT | 119 |
| S_FH_SBFTAUFDISC | 120 |
| S_FH_SBFTZUDISC | 121 |
| S_FH_SBFTTAUFDISC | 122 |
| S_FH_SBFTTZUDISC | 123 |
| S_FH_SBFTHAUFDISC | 124 |
| S_FH_SBFTHZUDISC | 125 |
| S_FH_SBFTHTAUFDISC | 126 |
| S_FH_SBFTHTZUDISC | 127 |
| S_FH_SBBFTAUFDISC | 128 |
| S_FH_SBBFTZUDISC | 129 |
| S_FH_SBBFTTAUFDISC | 130 |
| S_FH_SBBFTTZUDISC | 131 |
| S_FH_SBBFTHAUFDISC | 132 |
| S_FH_SBBFTHZUDISC | 133 |
| S_FH_SBBFTHTAUFDISC | 134 |
| S_FH_SBBFTHTZUDISC | 135 |
| S_ASP_RECHTSDISC | 136 |
| S_ASP_LINKSDISC | 137 |
| S_ASP_OBENDISC | 138 |
| S_ASP_UNTENDISC | 139 |
| S_ASP_FTBFTDISC | 140 |
| S_ASP_BKLPDISC | 141 |
| S_KISI_DISC | 142 |
| S_SRR_SBDISC | 143 |
| S_FH_SBLOCAUFDISC | 144 |
| S_FH_SBLOCZUDISC | 145 |
| S_FH_SBLOCTAUFDISC | 146 |
| S_FH_SBLOCTZUDISC | 147 |
| S_SR1_DISC | 148 |
| S_SR2_DISC | 149 |
| S_SRR_DISC | 150 |
| S_SR_RLDISC | 151 |
| Z_ZV_RUN | 152 |
| Z_ZV_ER | 153 |
| Z_ZV_VR | 154 |
| Z_ZV_KISI | 155 |
| Z_ZV_ZS | 156 |
| Z_ZV_INIT | 157 |
| Z_SCA_CATCH | 158 |
| Z_ZV_ZSDELAY | 159 |
| Z_ZV_CRASH | 160 |
| Z_ZV_MOTORKURZ | 161 |
| Z_SCA_READY | 162 |
| Z_SZ_VR | 163 |
| Z_SZ_ER | 164 |
| Z_SZ_VRVALID | 165 |
| Z_SZ_ERVALID | 166 |
| Z_ZV_WDHSPERRE | 167 |
| Z_ZV_TKALT | 168 |
| Z_EO_BREAK | 169 |
| RESERVE_11 | 170 |
| S_ZV_PEER | 171 |
| Z_EBA_MODE | 172 |
| Z_SCA_ZU | 173 |
| Z_KISI | 174 |
| Z_SCA_UNDEF | 175 |
| Z_ASP_PAUSE | 176 |
| Z_MEMAKT | 177 |
| Z_MEM_VER | 178 |
| Z_MEM_HOR | 179 |
| Z_ASP_USPG | 180 |
| Z_SPGKLAPP | 181 |
| Z_ASP_KERB | 182 |
| Z_ASP_SPERRE | 183 |
| Z_SR1_BLOCK | 176 |
| Z_SR2_BLOCK | 177 |
| Z_SR1_REVERSE | 178 |
| Z_SR2_REVERSE | 179 |
| Z_SR1_DELAY | 180 |
| Z_SR2_DELAY | 181 |
| Z_SR_VLOW | 182 |
| Z_SR1_ERROR | 183 |
| Z_ASP_DRIVE | 184 |
| Z_ASP_DELAY | 185 |
| Z_ASP_BSDELAY | 186 |
| Z_ASP_VLOW | 187 |
| Z_SRR_LONG | 188 |
| Z_SR1_DRIVE | 184 |
| Z_SR2_DRIVE | 185 |
| Z_SR1_UP | 186 |
| Z_SR2_UP | 187 |
| Z_FH_SEND | 192 |
| Z_FH_OPEN | 193 |
| Z_FH_OPENED | 194 |
| Z_LOW_VOLTAGE | 195 |
| Z_OVR_VOLTAGE | 196 |
| Z_KBUS_ACTIVE | 197 |
| Z_RHD | 198 |
| Z_LOWVOLT_LOG | 199 |

### ANALOGSIGNAL

| TEXT | NR |
| --- | --- |
| U_BATT_DISC | 0 |
| S8_ASP_POTI_VOLTAGE | 1 |
| S8_ASP_POSVERTDISC | 2 |
| S8_ASP_POSHORDIC | 3 |
| S8_SR1_CURRENT_SENSE | 4 |
| S8_SR2_CURRENT_SENSE | 5 |
| S8_FH_VMOT1 | 6 |
| S8_FH_VMOT2 | 7 |
| OUT_LCHT_SBLED | 8 |
| S8_SR1_CURRENT_MAX | 9 |
| S8_SR2_CURRENT_MAX | 10 |
| S8_LMP_VFBDISC | 11 |
| S8_LMP_AMBDISC | 12 |
| S8_FH_PWM1 | 13 |
| S8_FH_PWM2 | 14 |
| S8_FH_POSCBOT | 15 |
| S8_MEM_POSCBOT | 16 |
| TEMP_FZG_AUSSENCBOT | 17 |
| CTR_ILMUMN_SWCBOT | 18 |
| V_FZG_CBOT | 19 |
| TEMP_INTERNCBOT | 20 |
| TEMP_BOARD | 21 |

### GERAET

| IOLI | NAME_GERAET | TEXT |
| --- | --- | --- |
| 0xFA | ECU | Steuergeraet |
| 0xFB | TSG | Fensterheber |

### STOP_REASON

| STOP_REASON_NR | STOP_REASON_TEXT | TEXT |
| --- | --- | --- |
| 0 | NOT_STOPPED | Motor laeuft |
| 1 | POSITION_REACHED | Position erreicht |
| 2 | STOP_MOVE | Bewegung abgebrochen |
| 3 | STOP_MOVE_INSTANTLY | Bewegung abgebrochen |
| 4 | NORM | Normiert |
| 5 | RENORM | Renormiert |
| 6 | PINCHING | Einklemmen erkannt |
| 7 | BLOCKING | Blockieren erkannt |
| 8 | DOUBLE_BLOCK | doppeltes Blockieren erkannt |
| 9 | NO_MOVE | keine Bewegung |
| 10 | EXCEPTION | Ausnahme |
| 11 | SAFETY_TIMER | Sicherheitszeitueberlauf |
| 12 | OPPOSITE_DIRECTION | verkehrte Drehrichtung |
| 13 | INVALID_TARGET_POS | falsche Zielposition |
| 14 | INVALID_ACTUAL_POS_LOW | falsche Zielposition (zu niedrig) |
| 15 | INVALID_ACTUAL_POS_HIGH | falsche Zielposition (zu hoch) |
| 16 | WRONG_DIR_LIMPHOME | falsche Drehrichtung fuer Notlauf |
| 17 | WRONG_NR_VALUES | flasche Anzahl Elemente |
| 18 | FINALIZE_CANT_WRITE | Schreibzugriff verweigert |
| 19 | FIFO_OVERRUN | FIFO Ueberlauf |
| 20 | CFL_NUMERICAL_OV | Numerischer Ueberlauf |
| 21 | CANT_TILT | ungueltige Hebenaufforderung |
| 22 | POS_OPEN_LEARNED | Fensterlaenge gelernt |
| 23 | STOP_MOVE_HIGH_TEMP | Motorabschaltung durch Thermomonitor |
| 24 | DRIVER_BAD | Motoransteuerung defekt |
| 25 | MOTOR_SHORT | Motorkurzschluss erkannt |
| 26 | STARTUP_FAILED | Bewegungsstart abgebrochen |
| 27 | RESET | State Machine Initialisierung |
| 28 | UNEXPECTED_STOP | unerwarteter Motorstop |
| 29 | HARDWARE_DOWN | Motoransteuerung inaktiv |
| 30 | RE_INIT | Re-Initialisierung |

### FUNKTION_CFL

| IOLI | CFL_FUNKTION | TEXT                                                                                    |
| --- | --- | --- |
|  |  | status_cfl                                             / steuern_cfl                    |
|  |  | DIAGNOSE-CMD's ECU                                                                      |
| 0x0000 | AUTOINIT_VORMONTAGE | Autoinit Vormontage starten (starten mit 0)                                             |
| 0x0001 | AUTOINIT_ENDMONTAGE | Autoinit Endmontage starten (starten mit 0), alle vier Fenster werden initialisiert     |
| 0x0002 | AUTOINIT_NACHBEARB. | Autoinit Nachbearbeitung starten (starten mit 0)                                        |
| 0x01FF | ECU_RESET | ECU Reset                                                                               |
|  |  | DIAGNOSE-CMD's TSG                                                                      |
| 0x01FE | CLEAR_EEPROM | EEPROM loeschen                                                                         |
| 0x0202 | NORMED | Status Normierung abfragen                             / Normierung loeschen            |
| 0x0203 | RF_VALID | Status Kennlinie abfragen                              / Kennlinie loeschen             |
| 0x0205 | STOP_REASON | Abbruchkriterium abfragen                                                               |
| 0x0206 | CFL_AVAILABLE | Status CFL verfuegbar abfragen                                                          |
| 0x0301 | POS_OPEN | Position Offen abfragen                                / setzen                         |
| 0x0304 | POS_XMM | Reversierweg abfragen                                  / setzen                         |
| 0x0307 | QUARTER_TURN | Reversierweg bei Emergency Close abfragen              / setzen                         |
| 0x0308 | TOLERANCE | Mechanisches Spiel abfragen                            / setzen                         |
| 0x0309 | CATCH_RANGE_CI | Fangfenster oben/innen abfragen                        / setzen                         |
| 0x030B | SPEED_SEAL | Geschwindigkeit im Dichtungsbereich abfragen           / setzen                         |
| 0x030D | SOFT_STOP_OFFSET | SoftStop Offset (Beginn der Bremsrampe) abfragen       / setzen                         |
| 0x030E | POS_SEAL | Beginn des Dichtungsbereiches abfragen                 / setzen                         |
| 0x030F | ENDMONTAGE_OK | Status Endmontage abfragen                                                              |
| 0x0311 | RF_DISTANCE | Abstand der Kennlinie von Position 0 abfragen          / setzen                         |
| 0x0313 | RF_LENGTH | Laenge der Kennlinie abfragen                          / setzen                         |
| 0x0314 | RF_LENGTH_65N | Kennlinie65N-Laenge abfragen                           / setzen                         |
| 0x0316 | SPEED_20N | Geschwindigkeit im 20N-Bereich abfragen                / setzen                         |
| 0x0317 | SPEED_65N | Geschwindigkeit im 65N-Bereich abfragen                / setzen                         |
| 0x0318 | FORCE_OFFSET_START | zusaetzlicher Ausloese-Offset beim Startvorgang(aus gleicher Richtung) abf. / setzen    |
| 0x0319 | FORCE_OFFSET_RESTART | zusaetzlicher Ausloese-Offset beim Startvorgang abf.   / setzen                         |
| 0x031A | FORCE_THRESH | Ausloese-Offset abfragen                               / setzen                         |
| 0x031D | TRACK_LIMIT | Startwert Tracking abfragen                            / setzen                         |
| 0x031E | TRACK_LIMIT_MIN | Endwert Tracking abfragen                              / setzen                         |
| 0x0331 | ACTPOS | aktuelle Position auslesen                             / setzen                         |
| 0x0332 | AMBIENT_TEMP | Umgebungstemperatur abfragen                                                            |
| 0x0333 | CAS_ALLOWED | Status CAS Freigabe abfragen                           / setzen                         |
| 0x0339 | SHOCK_OFFSET_MAX | Max. Ausloese-Offset bei RRD abfragen                  / setzen                         |
| 0x033A | CAL_VOLT | Kalibrierwert der Batteriespannung abfragen            / setzen                         |
| 0x033D | SOFT_START_RISE | SoftStart Rampe abfragen                               / setzen                         |
| 0x0340 | VBAT | Batteriespannung abfragen                                                               |
| 0x0348 | CAL_TEMP | Kalibrierwert der Umgebungstemperatur abfragen         / setzen                         |
| 0x034D | SPEED_OPEN | Geschwindigkeit beim Oeffnen abfragen                  / setzen                         |
| 0x034E | SEG_CAL_CLOSE_VALID | Status Polbreiten gelernt abfragen                     / setzen                         |
| 0x0351 | FORCE_EXT_MAX_DEC | RRD: Max. Kraft Dekrement abfragen                     / setzen                         |
| 0x0352 | FORCE_EXT_MIN_DEC | RRD: Min. Kraft Dekrement abfragen                     / setzen                         |
| 0x0354 | CATCH_RANGE_OI | Fangfenster unten/innen abfragen                       / setzen                         |
| 0x0355 | CATCH_RANGE_OO | Fangfenster unten/aussen abfragen                      / setzen                         |
| 0x0357 | CATCH_RANGE_CO | Fangfenster oben/aussen abfragen                       / setzen                         |
| 0x035D | FORCE_THRESH_20N | Ausloese-Offset im 20N-Bereich abfragen                / setzen                         |
| 0x035E | FORCE_THRESH_65N | Ausloese-Offset im 65N-Bereich abfragen                / setzen                         |
| 0x035F | FORCE_THRESH_SEAL | zusaetzlicher Ausloese-Offset im Dichtungsbereich abfragen                  / setzen    |
| 0x036C | VMAX_PRESS_POSOPEN | Max. Spannung beim Nachdruecken im unteren mechan. Anschlag abfragen        / setzen    |
| 0x0378 | TEMP_COIL | Motorwicklungstemperatur abfragen                      / setzen                         |
| 0x03CA | PosOpen150N | Offen Position fuer PseudoNorm                         / setzen                         |
| 0x03CB | Pos150Nstart | Position bei der 150N beginnt                          / setzen                         |
| 0x03CC | Pos150Nend | Position bei der 150N endet                            / setzen                         |
| 0x03CD | TRACK_LIMIT_150N | 150N Bereich Tracking abfragen                         / setzen                         |
| 0x03CE | FORCE_THRESH_150N | Ausloese-Offset im 150N-Bereich abfragen               / setzen                         |
| 0x03CF | Pos150Nneeded | Position ab der 150N benoetigt wird                    / setzen                         |
| 0x0501 | ACTU_ALLOWED | Kennlinie aktualisieren erlaubt abfragen               / setzen                         |
| 0x0503 | RRD_ALLOWED | Ruettelerkennung erlaubt abfragen                      / setzen                         |
| 0x050A | CFL150N_ALLOWED | cfl 150N waehrend autoinit erlaubt                     / setzen                         |
| 0x050C | LEARN_POS_OPEN_ALLOWED | Lernen des Fensterweges erlaubt abfragen               / setzen                         |
