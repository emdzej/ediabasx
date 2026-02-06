# SIM85.prg

## General

|  |  |
| --- | --- |
| File | SIM85.prg |
| Type | PRG |
| Jobs | 66 |
| Tables | 21 |
| Origin | BMW EE-53 Christian Marschner |
| Revision | 3.01 |
| Author | BMW EE-53 Robert Schmidt, BMW TI-430 Ruediger Gall, BMW EE-53 Thomas Theenhaus, BMW EE-52 Arne Thieme |
| ECU Comment | 7.Version E85 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sicherheits Informations Modul |  |  |
| ORIGIN | string | BMW EE-53 Christian Marschner |  |  |
| REVISION | string | 3.01 |  |  |
| AUTHOR | string | BMW EE-53 Robert Schmidt, BMW TI-430 Ruediger Gall, BMW EE-53 Thomas Theenhaus, BMW EE-52 Arne Thieme |  |  |
| COMMENT | string | 7.Version E85 |  |  |
| PACKAGE | string | 1.14 |  |  |
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

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten KWP2000: $3E TesterPresent Modus  : Default

_No arguments._

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus $04 requestIdentifiedShadowMemoryDTCAndStatus

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### HERSTELLERDATEN_LESEN

Herstellerdaten lesen KWP2000: $22 SG spezifische Daten lesen $00 Herstellerdaten lesen $04 Modus  : Default

_No arguments._

### LSG_NR_U_HERSTELLDATUM_U_X_SCHREIBEN

Laufende Steuergeraetenummer und Herstelldatum und kleines x von HWREF ZZZPPPx schreiben KWP2000: $2E SG spezifische Daten schreiben $00 LSG Nummer und Herstelldatum und x schreiben $05 0x FF FF FF FF ist keine gueltige SG Nummer 0x FF FF FF FF ist kein gueltiges Herstelldatum YY YY MM DD ist BCD-Format des Herstelldatum kleines x sollte Charakter sein Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LAUFENDE_SG_NR | unsigned long | Laufende Steuergeraetenummer 4 Bytes 0x0 - 0xFF FF FF FF |
| HERSTELLDATUM | unsigned long | Herstelldatum 4 Bytes BCD 0xYYYYMMDD |
| KLEINES_X | string | kleines x muss Charakter sein 0-9 oder A-Z damit er im PAF-Filenamen erscheinen kann |

### SYSTEMZEIT_LESEN

Systemzeit lesen KWP2000: $22 SG spezifische Daten lesen $00 Systemzeit lesen $02 Byte 1: Systemzeit gestartet: = 00 gestartet <> 00 nicht gestartet 0x FF FF FF FF FF ist keine gueltige Systemzeit Der Job liest nach Start aus dem RAM die aktuelle, sich aendernde Zeit aus Vor Systemzeitstart liest der Job aus EEPROM-Zellen (mit F...Fh gefuellt) Modus  : Default

_No arguments._

### SYSTEMZEIT_STARTEN

Systemzeit starten KWP2000: $31 SG spezifische Routine starten $50 Systemzeit starten !!! ACHTUNG !!! Beim Start der Systemzeit werden die Airbags scharfgeschaltet und versch. Daten irreversibel verriegelt bis zum naechsten Flash-Update (Fahrgestellnummer, etc.) Das Starten der Systemzeit funktioniert nur, wenn eine Fahrgestellnummer eingetragen wurde!!!

| Name | Type | Description |
| --- | --- | --- |
| JOB_INFO_GELESEN | string | Dient nur zur Sicherheit, wird nicht im Telegramm verwendet "ja" -> Job ausfuehren "1"  -> Job ausfuehren table DigitalArgument TEXT |

### STEUERN_ZURUECKNEHMEN_STEUERGERAETESTATUS

Statusvorgaben zuruecknehmen KWP2000: $31 Steuergeraetespezifische Routine starten $20 Statusvorgaben zuruecknehmen $yz Status $yz zuruecknehmen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STATUS_ID | unsigned int | ID des zurueck zu nehmenden Status $00 = alle Stati zuruecknehmen |

### STEUERN_KOMMUNIKATIONSTEST_SENDE_EMPFANG_ANSTOSSEN

Statusvorgabe: Kommunikationstest Sende Empfang anstossen KWP2000: $31 Steuergeraetespezifische Routine starten $27 Kommunikationstest Sende Empfang anstossen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATENBYTE_1 | unsigned int | Frei waehlbares Datenbyte 1 |
| DATENBYTE_2 | unsigned int | Frei waehlbares Datenbyte 2 |
| DATENBYTE_3 | unsigned int | Frei waehlbares Datenbyte 3 |
| DATENBYTE_4 | unsigned int | Frei waehlbares Datenbyte 4 |

### STEUERN_SI_BUS_STATUS_LESEN_ANSTOSSEN

Statusvorgabe: SI-Bus-Status lesen anstossen KWP2000: $31 Steuergeraetespezifische Routine starten $29 SI-Bus-Status lesen anstossen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SI_BUS_ID | unsigned int | Zu lesende SI-Bus-ID |

### SYSTEMZEIT_SCHREIBEN

Systemzeit schreiben KWP2000: $2E SG spezifische Daten schreiben $00 Systemzeit schreiben $02 0x FF FF FF FF FF ist keine gueltige Systemzeit Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SZ_BYTE_1 | unsigned int | Systemzeit Byte 1 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_2 | unsigned int | Systemzeit Byte 2 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_3 | unsigned int | Systemzeit Byte 3 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_4 | unsigned int | Systemzeit Byte 4 0x0 - 0xFF bzw. 0 - 255 |
| SZ_BYTE_5 | unsigned int | Systemzeit Byte 5 0x0 - 0xFF bzw. 0 - 255 |

### STATUS_PREDRIVECHECK_ABRUFEN

Status Predrivecheck abrufen KWP2000: $22 Steuergeraetespezifische Daten lesen $00 $10 Predrivecheck Status abrufen Modus  : Default

_No arguments._

### STEUERN_PREDRIVECHECK_STARTEN

Steuern: Predrivecheck starten KWP2000: $31 Steuergeraetespezifische Routine starten $2A Predrivecheck anstossen Modus  : Default

_No arguments._

### STEUERN_STROMVERTEILER

Steuerung der Stromverteiler KWP2000: $31 Steuergeraetespezifische Routine starten $32 Steuerung der Stromverteiler Nur bei Kl R aus! Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT_ACTIVE | unsigned int | 0 = Timeout inactive, d.h. Ruecknahme explizit ueber Dienst oder nach Klemmenwechsel 1 = Timeout active, d.h. Ruecknahme explizit ueber Dienst oder nach Diagnosetimeout von 4s |
| STROMVERTEILER_NR | unsigned int | Nummer des anzusprechenden Stromverteilers $00 bis $01 |
| AUSGANG_NR_MODE | unsigned int | Alle Bitkombinationen moeglich! Bit0: Ausgang 1 ein Bit1: Ausgang 2 ein Bit2: Ausgang 3 ein Bit3: Ausgang 4 ein Bit4: Ausgang 1 Hochstrommode Bit5: Ausgang 2 Hochstrommode Bit6: Ausgang 3 Hochstrommode Bit7: Ausgang 4 Hochstrommode AB DER VERSION 0.52 DUERFEN ALLE AUSGAENGE IN DEN HOCHSTROMMODE GEHEN! |

### STEUERN_STERNKOPPLER

Steuerung des Sternkopplers KWP2000: $31 Steuergeraetespezifische Routine starten $33 Steuerung des Sternkopplers Nur bei Kl R aus! Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT_ACTIVE | unsigned int | 0 = Timeout inactive, d.h. Ruecknahme explizit ueber Dienst oder nach Klemmenwechsel 1 = Timeout active, d.h. Ruecknahme explizit ueber Dienst oder nach Diagnosetimeout von 4s |
| SK_AUSGANG_NR_1_8 | unsigned int | Alle Bitkombinationen moeglich! Nummer des anzusprechenden Sternkoppler Ausgangs Bit0: Ausgang 1 ein (SIM)  SG intern Bit1: Ausgang 2 ein (SBSL) Bit2: Ausgang 3 ein (SBSR) Bit3: Ausgang 4 ein Bit4: Ausgang 5 ein Bit5: Ausgang 6 ein Bit6: Ausgang 7 ein Bit7: Ausgang 8 ein |
| SK_AUSGANG_NR_9_16 | unsigned int | Alle Bitkombinationen moeglich! Nummer des anzusprechenden Sternkoppler Ausgangs Bit0: Ausgang 9  ein Bit1: Ausgang 10 ein Bit2: Ausgang 11 ein Bit3: Ausgang 12 ein Bit4: Ausgang 13 ein Bit5: Ausgang 14 ein Bit6: Ausgang 15 ein Bit7: Ausgang 16 ein |
| SK_AUSGANG_NR_17_18 | unsigned int | Alle Bitkombinationen moeglich! Nummer des anzusprechenden Sternkoppler Ausgangs Bit0: Ausgang 17 ein Bit1: frei Bit2: frei Bit3: frei Bit4: frei Bit5: frei Bit6: frei Bit7: frei |
| SK_EINGANG_NR_1_8 | unsigned int | Alle Bitkombinationen moeglich! Nummer des anzusprechenden Sternkoppler Eingangs Bit0: Eingang 1 ein (SIM)  SG intern Bit1: Eingang 2 ein (SBSL) Bit2: Eingang 3 ein (SBSR) Bit3: Eingang 4 ein Bit4: Eingang 5 ein Bit5: Eingang 6 ein Bit6: Eingang 7 ein Bit7: Eingang 8 ein |
| SK_EINGANG_NR_9_16 | unsigned int | Alle Bitkombinationen moeglich! Nummer des anzusprechenden Sternkoppler Eingangs Bit0: Eingang 9  ein Bit1: Eingang 10 ein Bit2: Eingang 11 ein Bit3: Eingang 12 ein Bit4: Eingang 13 ein Bit5: Eingang 14 ein Bit6: Eingang 15 ein Bit7: Eingang 16 ein |
| SK_EINGANG_NR_17_18 | unsigned int | Alle Bitkombinationen moeglich! Nummer des anzusprechenden Sternkoppler Eingangs Bit0: Eingang 17 ein Bit1: frei Bit2: frei Bit3: frei Bit4: frei Bit5: frei Bit6: frei Bit7: frei |

### STEUERN_UPFRONT_INITIALISIERUNG

Steuern: UpFront Initialisierung starten KWP2000: $31 Steuergeraetespezifische Routine starten $3E UpFront Initialisierung starten Modus  : Default Ab SIM-Software-Version 3.2.1 !  HINWEIS: siehe: STATUS_UPFRONT_LESEN

_No arguments._

### STATUS_UPFRONT_LESEN

UpFront-Interface Status lesen KWP2000: $22 SG spezifische Daten lesen $00 Steuergeraete Status lesen $16 UpFront-Status Modus  : Default Ab SIM-Software-Version 3.2.1 !  HINWEIS: Daten werden nur aktualisiert, wenn zuvor STEUERN_UPFRONT_INITIALISIERUNG ausgefuehrt wurde!

_No arguments._

### STATUS_STVX_CODIERT

Statusausgabe, ob STVL und STVR verbaut sein sollen bzw. codiert sind. Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

_No arguments._

### STATUS_LESEN

Steuergeraete Status lesen KWP2000: $22 SG spezifische Daten lesen $98 Steuergeraete Status lesen $00 Modus  : Default

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0D | KWP2000* |
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

### IARTTEXTE

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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 12300000 |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 1xxxxxxx | 11 | Fehlerklassifikation  t > 1min |
| x1xxxxxx | 21 | Fehlerklassifikation 1s < t < 1min |
| xx1xxxxx | 31 | Fehlerklassifikation 0 < t < 1s |
| xxxxxxxx | 0 | -- |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 12300000 |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 1xxxxxxx | 11 | Fehlerklassifikation  t > 1min |
| x1xxxxxx | 21 | Fehlerklassifikation 1s < t < 1min |
| xx1xxxxx | 31 | Fehlerklassifikation 0 < t < 1s |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | - | - |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Systemzeit Fehlerbeginn | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0x02 | Systemzeit Fehlerende | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Systemzeit Fehlerbeginn | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0x02 | Systemzeit Fehlerende | Stunden | high | signed long | - | 16384 | 3600000 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x93a8 | Watchdog-Reset uP |
| 0x93a9 | Clock-Monitor-Reset uP |
| 0x93aa | Illegal Opcode uP |
| 0x93ab | Falsche Fahrgestellnummer |
| 0x93ac | Systemzeitfehler |
| 0x93ad | Timeout ID 01H (STVL) |
| 0x93ae | Timeout ID 02H (Reserve) |
| 0x93af | Timeout ID 03H (STVR) |
| 0x93b0 | Timeout ID 04H (Reserve) |
| 0x93b1 | Timeout ID 05H (SBSL y) |
| 0x93b2 | Timeout ID 06H (Reserve) |
| 0x93b3 | Timeout ID 07H (SBSR y) |
| 0x93b4 | Timeout ID 08H (Reserve) |
| 0x93b5 | Timeout ID 09H (SIM y) |
| 0x93b6 | Timeout ID 0AH (SIM UpFront) |
| 0x93b7 | Timeout ID 0BH (SBSL x) |
| 0x93b8 | Timeout ID 0CH (SBSR x) |
| 0x93b9 | Timeout ID 0DH (SIM x) |
| 0x93ba | Timeout ID 11H (SBSR Batterieleitung) |
| 0x93bb | Timeout ID 12H (SBSL Batterieleitung) |
| 0x93bc | Timeout ID 20H (SBSL Sitzbelegungserkennung) |
| 0x93bd | Timeout ID 21H (SBSR Sitzbelegungserkennung) |
| 0x93be | Timeout ID 22H (Reserve) |
| 0x93bf | Timeout ID 43H (Reserve) |
| 0x93c0 | Codierdatenchecksumme falsch |
| 0x93c1 | Codierdaten falsch |
| 0x93c2 | PDC_3 : zu wenig Telegramme |
| 0x93c3 | PDC_3 : Datenfehler in Telegramm |
| 0x93c4 | PDC_3 : Uebertragungsfehler |
| 0x93c5 | unplausible Crash-Schwere |
| 0x93c6 | Fehler im Alarmpfad |
| 0x93c7 | Abschalten von Modul 1  (SBSL) |
| 0x93c8 | Abschalten von Modul 2  (SBSR) |
| 0x93c9 | Abschalten von Modul 3  (STVL) |
| 0x93ca | Abschalten von Modul 4  (STVR) |
| 0x93cb | Abschalten von Modul 5  (frei) |
| 0x93cc | Abschalten von Modul 6  (frei) |
| 0x93cd | Reserve |
| 0x93ce | Reserve |
| 0x93cf | Reserve |
| 0x93d0 | Reserve |
| 0x93d1 | Reserve |
| 0x93d2 | Reserve |
| 0x93d3 | Reserve |
| 0x93d4 | Reserve |
| 0x93d5 | Reserve |
| 0x93d6 | Reserve |
| 0x93d7 | Reserve |
| 0x93d8 | Reserve |
| 0x93d9 | PLL-Fehler |
| 0x93db | Step up Converter defekt |
| 0x93dc | Algorithmus-Parameter inkonsistent |
| 0x93dd | EAM-Parameter inkonsistent |
| 0x93de | Zuendversuch erfolgt |
| 0x93df | Fehler Beschleunigungssensor x: Offset zu gross |
| 0x93e0 | Fehler Beschleunigungssensor x: Selbsttestwert zu gross |
| 0x93e1 | Fehler Beschleunigungssensor x: Selbsttestwert zu klein |
| 0x93e2 | Hallschalter Kurzschluss |
| 0x93e3 | Hallschalter unplausibler Messwert |
| 0x93e4 | Hallschalter Unterbrechung |
| 0x93e5 | HWL Kurzschluss nach Masse |
| 0x93e6 | HWL Unterbrechung |
| 0x93e7 | Unterspannung erkannt |
| 0x93e8 | COP-Watchdog fehlerhaft |
| 0x93e9 | Kl30 Ueberspannung |
| 0x93ea | HWL Kurzschluss nach Plus |
| 0x93eb | UpFront-Parameter inkonsistent |
| 0x93ec | Beschleunigungssensor y Offset zu gross |
| 0x93ed | Beschleunigungssensor y Selbsttestwert zu gross |
| 0x93ee | Beschleunigungssensor y Selbsttestwert zu klein |
| 0x93ef | Status Beifahrerairbag Kommunikation unplausibel |
| 0x93f0 | Fehler bei BF-Airbag-Abschaltung |
| 0x93f1 | Status Beifahrerairbag Rueckmeldung Fahrerseite (Inkonsistenz RL/LL) |
| 0x93f2 | Schluesselschalter Statusaenderung waehrend der Fahrt |
| 0x93f3 | Codierdaten Schluesselschalter falsch |
| 0x93f4 | Stack Overflow |
| 0x93f5 | Codierung unvollstaendig |
| 0x93ff | UpFront-Sensor links: falsche Identifikation |
| 0x9400 | UpFront-Sensor rechts: falsche Identifikation |
| 0x9401 | PAS-Interface defekt |
| 0x9402 | UpFront-Sensor links defekt |
| 0x9403 | UpFront-Sensor rechts defekt |
| 0x???? | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9404 | Power-On-Reset uP |
| 0x9405 | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9406 | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9407 | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9408 | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9409 | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x940a | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x940b | Pre-Drive-Check n.i.O. wegen Modul 1 (SBSL) |
| 0x940c | Pre-Drive-Check n.i.O. wegen Modul 2 (SBSR) |
| 0x940d | Pre-Drive-Check n.i.O. wegen Modul 3 (STVL) |
| 0x940e | Pre-Drive-Check n.i.O. wegen Modul 4 (STVR) |
| 0x940f | Pre-Drive-Check n.i.O. wegen Modul 5 (frei) |
| 0x9410 | Pre-Drive-Check n.i.O. wegen Modul 6 (frei) |
| 0x9411 | Reserve |
| 0x9412 | Reserve |
| 0x9413 | Reserve |
| 0x9414 | Reserve |
| 0x9415 | Reserve |
| 0x9416 | Reserve |
| 0x9417 | Reserve |
| 0x9418 | Reserve |
| 0x9419 | Reserve |
| 0x941a | Reserve |
| 0x941b | Reserve |
| 0x941c | Reserve |
| 0x941d | Statusmeldung fehlt Modul 1 (SBSL) |
| 0x941e | Statusmeldung fehlt Modul 2 (SBSR) |
| 0x941f | Statusmeldung fehlt Modul 3 (STVL) |
| 0x9420 | Statusmeldung fehlt Modul 4 (STVR) |
| 0x9421 | Statusmeldung fehlt Modul 5 (frei) |
| 0x9422 | Statusmeldung fehlt Modul 6 (frei) |
| 0x9423 | Reserve |
| 0x9424 | Reserve |
| 0x9425 | Reserve |
| 0x9426 | Reserve |
| 0x9427 | Reserve |
| 0x9428 | Reserve |
| 0x9429 | Reserve |
| 0x942a | Reserve |
| 0x942b | Reserve |
| 0x942c | Reserve |
| 0x942d | Reserve |
| 0x942e | Reserve |
| 0x942f | Uebertemperatur Stromverteiler A |
| 0x9430 | Uebertemperatur Stromverteiler B |
| 0x9431 | Info: Stack an DiagBuffergrenze |
| 0x9432 | Reserve |
| 0x9433 | Reserve |
| 0x9434 | Temperaturabschaltung Stromverteiler A |
| 0x9435 | Temperaturabschaltung Stromverteiler B |
| 0x9436 | Reserve |
| 0x9437 | Reserve |
| 0x9438 | Reserve |
| 0x9439 | Ueberstrom Ausgang A1 (SBSL) |
| 0x943a | Ueberstrom Ausgang A2 (SBSR) |
| 0x943b | Ueberstrom Ausgang A3 (SBSL) |
| 0x943c | Ueberstrom Ausgang A4 (SBSR) |
| 0x943d | Ueberstrom Ausgang B1 (frei) |
| 0x943e | Ueberstrom Ausgang B2 (STVL) |
| 0x943f | Ueberstrom Ausgang B3 (STVR) |
| 0x9440 | Reserve |
| 0x9441 | Reserve |
| 0x9442 | Reserve |
| 0x9443 | Reserve |
| 0x9444 | Reserve |
| 0x9445 | Reserve |
| 0x9446 | Reserve |
| 0x9447 | Reserve |
| 0x9448 | Reserve |
| 0x9449 | Reserve |
| 0x944a | Reserve |
| 0x944b | Reserve |
| 0x944c | Reserve |
| 0x944d | Ueberspannung Ausgang A1 (SBSL) |
| 0x944e | Ueberspannung Ausgang A2 (SBSR) |
| 0x944f | Ueberspannung Ausgang A3 (SBSL) |
| 0x9450 | Ueberspannung Ausgang A4 (SBSR) |
| 0x9451 | Ueberspannung Ausgang B1 (frei) |
| 0x9452 | Ueberspannung Ausgang B2 (STVL) |
| 0x9453 | Ueberspannung Ausgang B3 (STVR) |
| 0x9454 | Reserve |
| 0x9455 | Reserve |
| 0x9456 | Reserve |
| 0x9457 | Reserve |
| 0x9458 | Reserve |
| 0x9459 | Reserve |
| 0x945a | Reserve |
| 0x945b | Reserve |
| 0x945c | Reserve |
| 0x945d | Reserve |
| 0x945e | Reserve |
| 0x945f | Reserve |
| 0x9460 | Reserve |
| 0x9461 | Uebertragungsfehler Modul 1 (SBSL) |
| 0x9462 | Uebertragungsfehler Modul 2 (SBSR) |
| 0x9463 | Uebertragungsfehler Modul 3 (STVL) |
| 0x9464 | Uebertragungsfehler Modul 4 (STVR) |
| 0x9465 | Uebertragungsfehler Modul 5 (frei) |
| 0x9466 | Uebertragungsfehler Modul 6 (frei) |
| 0x9467 | Reserve |
| 0x9468 | Reserve |
| 0x9469 | Reserve |
| 0x946a | Reserve |
| 0x946b | Reserve |
| 0x946c | Reserve |
| 0x946d | Reserve |
| 0x946e | Reserve |
| 0x946f | Reserve |
| 0x9470 | Reserve |
| 0x9471 | Reserve |
| 0x9472 | Reserve |
| 0x9473 | S/E-Diagnose Lichtleistung Modul 1 (SBSL) |
| 0x9474 | S/E-Diagnose Lichtleistung Modul 2 (SBSR) |
| 0x9475 | S/E-Diagnose Lichtleistung Modul 3 (STVL) |
| 0x9476 | S/E-Diagnose Lichtleistung Modul 4 (STVR) |
| 0x9477 | S/E-Diagnose Lichtleistung Modul 5 (frei) |
| 0x9478 | S/E-Diagnose Lichtleistung Modul 6 (frei) |
| 0x9479 | Reserve |
| 0x947a | Reserve |
| 0x947b | Reserve |
| 0x947c | Reserve |
| 0x947d | Reserve |
| 0x947e | Reserve |
| 0x947f | Reserve |
| 0x9480 | Reserve |
| 0x9481 | Reserve |
| 0x9482 | Reserve |
| 0x9483 | Reserve |
| 0x9484 | Reserve |
| 0x9485 | Klemme R Signal inkonsistent |
| 0x9486 | Step-down-Converter defekt |
| 0x9487 | K-Bus Stoerung |
| 0x???? | unbekannter Fehlerort |
