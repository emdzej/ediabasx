# N73ZGML0.PRG

## General

|  |  |
| --- | --- |
| File | N73ZGML0.PRG |
| Type | PRG |
| Jobs | 198 |
| Tables | 32 |
| Origin | BMW EA-33 Bayer |
| Revision | 0.26 |
| Author | GD Josef Greppmair |
| ECU Comment | SGBD fuer E65 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME9-13 fuer NG-Motoren |  |  |
| ORIGIN | string | BMW EA-33 Bayer |  |  |
| REVISION | string | 0.26 |  |  |
| AUTHOR | string | GD Josef Greppmair |  |  |
| COMMENT | string | SGBD fuer E65 |  |  |
| PACKAGE | string | 1.10 |  |  |
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

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $00 all ECU Modus  : Default

_No arguments._

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
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

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

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

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

### EWS_STARTWERT

EWS-Startwertinitialisierung

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

_No arguments._

### DATA_ID_LESEN

Data-ID des SG auslesen

_No arguments._

### STEUERN_VVT_ANSCHLAG

Lernen der VVT-Anschlaege

_No arguments._

### STATUS_VVT_ANSCHLAG

Status Lernen VVT-Anschlaege

_No arguments._

### ENDE_VVT_ANSCHLAG

Ende von Lernen der VVT-Anschlaege

_No arguments._

### FS_HEX_LESEN

Fehlerspeicher auslesen als Hex Dump

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers im Fehlerspeicher uebergeben |

### STEUERN_EV_1

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_2

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_3

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_4

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_5

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_6

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_1_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_2_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_3_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_4_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_5_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_6_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_E_LUEFTER

Stellgliedansteuerung E-Luefter

| Name | Type | Description |
| --- | --- | --- |
| TASTRATE | int | gibt an, welches EV angesteuert werden soll |

### STEUERN_E_LUEFTER_AUS

Stellgliedansteuerung E-Luefter

_No arguments._

### STEUERN_SLP

Stellgliedansteuerung SLP

_No arguments._

### STEUERN_SLP_AUS

Stellgliedansteuerung SLP

_No arguments._

### STEUERN_TEV

Stellgliedansteuerung TEV

_No arguments._

### STEUERN_TEV_AUS

Stellgliedansteuerung TEV

_No arguments._

### STEUERN_KFK

Stellgliedansteuerung KFK

_No arguments._

### STEUERN_KFK_AUS

Stellgliedansteuerung KFK

_No arguments._

### STEUERN_SLV

Stellgliedansteuerung SLV

_No arguments._

### STEUERN_SLV_AUS

Stellgliedansteuerung SLV

_No arguments._

### STEUERN_EKP

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_EKP_AUS

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_HLS1

Stellgliedansteuerung Lambdasondenheizung1

_No arguments._

### STEUERN_HLS1_AUS

Stellgliedansteuerung Lambdasondeheizung 1 aus

_No arguments._

### STEUERN_HLS2

Stellgliedansteuerung Lambdasondenheizung 2

_No arguments._

### STEUERN_HLS2_AUS

Stellgliedansteuerung Lambdasondeheizung 2 aus

_No arguments._

### STEUERN_STA

Stellgliedansteuerung Startrelais

_No arguments._

### STEUERN_STA_AUS

Stellgliedansteuerung Startrelais aus

_No arguments._

### STEUERN_KOE

Stellgliedansteuerung KOREL

_No arguments._

### STEUERN_KOE_AUS

Stellgliedansteuerung KOREL aus

_No arguments._

### STEUERN_EBL

Stellgliedansteuerung E-Box-Luefter

_No arguments._

### STEUERN_EBL_AUS

Stellgliedansteuerung E-Box-Luefter aus

_No arguments._

### STEUERN_AGK

Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_AGK_AUS

Stellgliedansteuerung Abgasklappe aus

_No arguments._

### STEUERN_DMTLP

Stellgliedansteuerung DM-TL Pumpe

_No arguments._

### STEUERN_DMTLP_AUS

Stellgliedansteuerung DM-TL Pumpe aus

_No arguments._

### STEUERN_DMTLV

Stellgliedansteuerung DM-TL Ventil

_No arguments._

### STEUERN_DMTLV_AUS

Stellgliedansteuerung DM-TL Ventil aus

_No arguments._

### RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | long | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### RAM_BACKUP

Loeschen der RAM-Backup-Werte

_No arguments._

### START_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | gesetzter LL-Sollwert |

### LESEN_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung Status lesen

_No arguments._

### ENDE_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung Status lesen

_No arguments._

### START_SYSTEMCHECK_TEV_FUNC

Systemtest von TEV

_No arguments._

### LESEN_SYSTEMCHECK_TEV_FUNC

Status Systemtest TEV

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Status Systemtest TEV

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

Beenden von TEV-Systemtest

_No arguments._

### START_SYSTEMCHECK_DMTL

Start Systemtest DMTL

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Status Systemtest DMTL

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Ende Systemtest DM-TL

_No arguments._

### STEUERN_VANOS_EINLASS

Stellgliedansteuerung Einlass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_EINLASS_AUS

Stellgliedansteuerung Einlass-VANOS freigeben

_No arguments._

### STEUERN_VANOS_AUSLASS

Stellgliedansteuerung Auslass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_AUSLASS_AUS

Stellgliedansteuerung Auslass-VANOS freigeben

_No arguments._

### STEUERN_EVAUSBL

Systemdiagnose Einspritzventile ausblenden

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STEUERN_EVAUSBL_AUS

Ende Systemtest DM-TL

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STATUS_MESSWERTE

Auslesen von Messwerten

_No arguments._

### STATUS_BATTERIEINTEGRATOR

Auslesen von Messwertenund Statusflags

_No arguments._

### STATUS_SCHALTERSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_FUNKTIONSSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_LAUFUNRUHE

Auslesen von Laufunruhewerten

_No arguments._

### STATUS_DKHFM

Auslesen von DK/HFM-Abgleichswerten

_No arguments._

### FS_LESEN_LANG

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers uebergeben |

### STEUERN_VVT

Stellgliedansteuerung VVT

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt einen absoluten Verstellwinkel an (0..180 Grd) |
| RAMPE | int | eine definierte Rampe wird automatisch abgefahren (VS-21 Funktion) |

### STEUERN_VVT_AUS

beenden Stellgliedansteuerung VVT

_No arguments._

### STATUS_CO_ABGLEICH

Auslesen des LL-CO-Wertes

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

LL-CO-Wert vorgeben

| Name | Type | Description |
| --- | --- | --- |
| CO_WERT | int | LL CO-Abgleichswert |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

LL-CO-WERT programmieren

| Name | Type | Description |
| --- | --- | --- |
| CO_FEST | int | LL CO-Abgleichswert |

### STATUS_GEMISCH

Auslesen von Gemischwerten

_No arguments._

### STATUS_AUSGAENGE

Auslesen von Ausgaengen

_No arguments._

### STATUS_NWGADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_VARIANTE

Auslesen der Variante

_No arguments._

### STEUERN_VARIANTE

Loeschen der Varianten

_No arguments._

### STATUS_KVA

Auslesen Faktor KVA

_No arguments._

### STEUERN_KVA

Faktor KVA Korrektur vorgeben

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Faktor KVA |

### STATUS_READINESS

Auslesen des Readinessbyte

_No arguments._

### STATUS_FGR

Auslesen des FGR-Statuses

_No arguments._

### STEUERN_LLABG

LL-Abgleichswerte werden vorgegeben

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne FS |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne FS |
| DNSLBV | int | Abgleichswert LL aus %LLRUB, niedriger UBatt |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit FS |
| DNFSMV | int | Abgleichswert LL mit FS |

### STEUERN_LLABG_PROG

LL-Abgleichswerte werden programmiert

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne FS |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne FS |
| DNSLBV | int | Abgleichswert LL aus %LLRUB, niedriger UBatt |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit FS |
| DNFSMV | int | Abgleichswert LL mit FS |

### STATUS_LLABG

LL-Abgleichswerte werden gelesen

_No arguments._

### IDENT_AIF

Identdaten mit KWP2000: $1A ReadECUIdentification Modus  : Default Auslesen des Anwender Informations Feldes mit KWP 2000: $23 ReadMemoryByAddress Standard Flashjob Modus   : Default

_No arguments._

### STATUS_VVT

Auslesen VVT-Messwerte

_No arguments._

### STATUS_FASTA1

Auslesen FASTA-Messwertblock 1

_No arguments._

### STATUS_FASTA2

Auslesen FASTA-Messwertblock 2

_No arguments._

### STATUS_FASTA3

Auslesen FASTA-Messwertblock 3

_No arguments._

### STATUS_FASTA4

Auslesen FASTA-Messwertblock 4

_No arguments._

### STATUS_FASTA5

Auslesen FASTA-Messwertblock 5

_No arguments._

### STATUS_FASTA6

Auslesen FASTA-Messwertblock 6

_No arguments._

### STATUS_FASTA7

Auslesen FASTA-Messwertblock 7

_No arguments._

### STATUS_ADC

Auslesen ADC-Werte

_No arguments._

### STEUERN_LL_ERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | gesetzter LL-Sollwert |

### START_SYSTEMCHECK_LSU

Systemdiagnose LSU

_No arguments._

### LESEN_SYSTEMCHECK_LSU

Status Systemdiagnose LSU

_No arguments._

### STATUS_SYSTEMCHECK_LSU

Status Systemdiagnose LSU

_No arguments._

### ENDE_SYSTEMCHECK_LSU

Ende Systemdiagnose LSU

_No arguments._

### STOP_SYSTEMCHECK_LSU

Ende Systemdiagnose LSU

_No arguments._

### START_SYSTEMCHECK_KAT

Systemdiagnose KAT

_No arguments._

### ENDE_SYSTEMCHECK_KAT

Ende Systemdiagnose KAT

_No arguments._

### START_SYSTEMCHECK_LSH

Systemdiagnose LSH

_No arguments._

### STATUS_SYSTEMCHECK_LSH

Status LSH-Diagnose auslesen

_No arguments._

### ENDE_SYSTEMCHECK_LSH

Ende Systemdiagnose LSH

_No arguments._

### STOP_SYSTEMCHECK_LSH

Ende Systemdiagnose LSH

_No arguments._

### START_SYSTEMCHECK_GRUNDADAPT

Systemdiagnose Grundadaptionenen

_No arguments._

### LESEN_SYSTEMCHECK_GRUNDADAPT

Status Systemdiagnose Grundadaptionen starten

_No arguments._

### ENDE_SYSTEMCHECK_GRUNDADAPT

Ende Systemdiagnose Grundadaptionen starten

_No arguments._

### START_SYSTEMCHECK_GEMISCHADAPT_SPERR

Systemdiagnose Gemischadaptionen sperren

_No arguments._

### ENDE_SYSTEMCHECK_GEMISCHADAPT_SPERR

Ende Systemdiagnose Gemischadaptionen sperren

_No arguments._

### START_SYSTEMCHECK_LAMBDA_AUS

Systemdiagnose Labdaregelung aus

_No arguments._

### LESEN_SYSTEMCHECK_LAMBDA_AUS

Status Systemdiagnose Lambdaregelung aus

_No arguments._

### ENDE_SYSTEMCHECK_LAMBDA_AUS

Ende Systemdiagnose Lambdaregelung aus

_No arguments._

### START_SYSTEMCHECK_KOMPRESSION

Systemdiagnose Kompressionstest

_No arguments._

### ENDE_SYSTEMCHECK_KOMPRESSION

Ende Systemdiagnose Kompressiostest

_No arguments._

### STEUERN_ZWANG_RAMBACKUP

Zwangssichern der RAM-Backup-Werte

_No arguments._

### STEUERN_POWER_DOWN

Anforderung Power Down Mode

_No arguments._

### START_SYSTEMCHECK_SEK_LUFT

Systemdiagnose SLS

_No arguments._

### LESEN_SYSTEMCHECK_SEK_LUFT

Status Systemdiagnose SLS

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LUFT

Status Systemdiagnose SLS

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

Ende Systemdiagnose SLS

_No arguments._

### STEUERN_ADAPTIONEN_LOESCHEN

Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | siehe LH 1 430 227, setzt REYO_01 bitweise |
| AUSWAHLBYTE_2 | int | siehe LH 1 430 227, setzt REYO_02 bitweise |

### STATUS_MINHUB

Auslesen des VVT-Minhubes

_No arguments._

### STEUERN_MINHUB

Vorgeben des VVT-Minhubes

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | Vorsteuerwert minhubvs_w in tausendstel Milimeter |

### STEUERN_MINHUB_PROGRAMM

Programmieren des VVT-Minhubes

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | zu programmierender Wert minhubvs_w in tausendstel Milimeter |

### STATUS_BETRIEBSSTUNDENZAEHLER

Status Betriebsstundenzaehler auslesen

_No arguments._

### STATUS_UBATT

Auslesen der Batteriespannung

_No arguments._

### STATUS_DIGITAL

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Auslesen des Pedalwertgebers

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Auslesen der Lufttemperatur

_No arguments._

### STATUS_LMM_MASSE

Auslesen der Luftmasse

_No arguments._

### STATUS_L_SONDE

Auslesen der Lambdasondenspannung vorne Bank 1

_No arguments._

### STATUS_L_SONDE_2

Auslesen der Lambdasondenspannung vorne Bank 2

_No arguments._

### STATUS_L_SONDE_H

Auslesen der Lambdasondenspannung hinten Bank 1

_No arguments._

### STATUS_L_SONDE_2_H

Auslesen der Lambdasondenspannung hinten Bank 2

_No arguments._

### STATUS_DKP_VOLT

Auslesen ADC-Werte

_No arguments._

### STATUS_MOTORLAUFUNRUHE

Auslesen von Laufunruhewerten

_No arguments._

### STATUS_INT

Auslesen der Lambdaregelung

_No arguments._

### STATUS_INT_2

Auslesen der Lambdaregelung Bank2

_No arguments._

### STATUS_ADD

Auslesen der additiven Lambdaregelung

_No arguments._

### STATUS_ADD_2

Auslesen der additiven Lambdaregelung Bank2

_No arguments._

### STATUS_MUL

Auslesen der multipikativen Lambdaregelung

_No arguments._

### STATUS_MUL_2

Auslesen der multipikativen Lambdaregelung Bank 2

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

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
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
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
| 0x18 | Teves |
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
| 0x55 | BHTC |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x27B4 | @CDKDSU - Drucksensor Umgebung@ |
| 0x2712 | @CDKDMMVE - Ansteuerung Magnetventil DM-TL@ |
| 0x2713 | @CDKLSVV - Vertauschte Lambdasonden oder Steckerzuordnung HDEV Steuergeraet vertauscht@ |
| 0x2716 | @CDKHSHE - Ansteuerung Heizung Sonde hinter Kat@ |
| 0x271A | @CDKLSV - Lambda-Sonde vor Kat@ |
| 0x271B | @CDKHSVE - Endstufe Heizung Sonde vor Katalysator@ |
| 0x271C | @CDKLSH - Lambda-Sonde hinter Kat@ |
| 0x271D | @CDKHSV - Lambdasonden-Heizung vor Kat@ |
| 0x271E | @CDKHSH - Lambdasonden-Heizung hinter Kat@ |
| 0x2721 | @CDKLASH - Lambda-Sondenalterung h. Kat@ |
| 0x2728 | @CDKFRAO - LR-Adaption multiplikativ Bereich2@ |
| 0x272A | @CDKFRAU - LR-Adaption multiplikativ Bereich1@ |
| 0x272C | @CDKRKAT - LR-Adaption additiv pro Zeit@ |
| 0x272E | @CDKRKAZ - LR-Adaption additiv pro Zuendung@ |
| 0x2731 | @CDKENWS - Nockenwellensteuerung Einlass@ |
| 0x2737 | @CDKWFS - EWS3.3-Manipulationsschutz@ |
| 0x2738 | @CDKKAT - Katalysator-Konvertierung@ |
| 0x2742 | @CDKMD00 - Aussetzererkennung Zyl.1@ |
| 0x2743 | @CDKMD01 - Aussetzererkennung Zyl.7@ |
| 0x2744 | @CDKMD02 - Aussetzererkennung Zyl.5@ |
| 0x2745 | @CDKMD03 - Aussetzererkennung Zyl.11@ |
| 0x2746 | @CDKMD04 - Aussetzererkennung Zyl.3@ |
| 0x2747 | @CDKMD05 - Aussetzererkennung Zyl.9@ |
| 0x2748 | @CDKMD06 - Aussetzererkennung Zyl.6@ |
| 0x2749 | @CDKMD07 - Aussetzererkennung Zyl.12@ |
| 0x274A | @CDKMD08 - Aussetzererkennung Zyl.2@ |
| 0x274B | @CDKMD09 - Aussetzererkennung Zyl.8@ |
| 0x274C | @CDKMD10 - Aussetzererkennung Zyl.4@ |
| 0x274D | @CDKMD11 - Aussetzererkennung Zyl.10@ |
| 0x274E | @CDKMD - Aussetzererkennung Summenfehler@ |
| 0x2753 | @CDKDZKU0 - Ueberwachung Zuender 1 @ |
| 0x2754 | @CDKDZKU1 - Ueberwachung  Zuender  5@ |
| 0x2755 | @CDKDZKU2 - Ueberwachung Zuender  3@ |
| 0x2756 | @CDKDZKU3 - Ueberwachung Zuender  6@ |
| 0x2757 | @CDKDZKU4 - Ueberwachung  Zuender  2@ |
| 0x2758 | @CDKDZKU5 - Ueberwachung  Zuender  4@ |
| 0x2759 | @CDKDZKU0 - Ueberwachung Zuender  7@ |
| 0x275A | @CDKDZKU1 - Ueberwachung Zuender  11@ |
| 0x275B | @CDKDZKU2 - Ueberwachung Zuender  9@ |
| 0x275C | @CDKDZKU3 - Ueberwachung Zuender  12@ |
| 0x275D | @CDKDZKU4 - Ueberwachung Zuender  8@ |
| 0x275E | @CDKDZKU5 - Ueberwachung Zuender 10@ |
| 0x2760 | @CDKSLS - Sekundaerluftsystem@ |
| 0x2762 | @CDKSLV - Sekudaerluftventil@ |
| 0x2764 | @CDKSLPE - Ansteuerung Relais Sekundaerluftpumpe@ |
| 0x2765 | @CDKSLVE - Ansteuerung Sekundaerluftventil@ |
| 0x2769 | @CDKDVEFO - Federpruefung DK-Steller oeffnende Feder@ |
| 0x276A | @CDKSGA - Steuergeraeteauswahl@ |
| 0x276D | @CDKTES - Tankentlueftung functional check@ |
| 0x2772 | @CDKTEVE - Ansteuerung Tankentlueftungsventil@ |
| 0x2775 | @CDKUFMV - Motormomentueberwachung Ebene 2@ |
| 0x2776 | @CDKMFL - Schnittstelle MFL@ |
| 0x2778 | @CDKKUPPL - Schalter Kupplung@ |
| 0x2779 | @CDKURRAM - SG Selbsttest RAM@ |
| 0x277A | @CDKBREMS - Schalter Bremse@ |
| 0x277B | @CDKURROM - SG Selbsttest ROM@ |
| 0x277C | @CDKURRST - SG Selbsttest RESET@ |
| 0x277D | @CDKUB - Batteriespannung@ |
| 0x277E | @CDKMDB - Momentenbegrenzung Ebene 1@ |
| 0x277F | @CDKN - Kurbelwellengeber@ |
| 0x2780 | @CDKBM - Bezugsmarkengeber@ |
| 0x2781 | @CDKPH - Nockenwellengeber Einlass@ |
| 0x2782 | @CDKPH2 - Nockenwellengeber Auslass@ |
| 0x2783 | @CDKLM - Heissfilmluftmassenmesser@ |
| 0x2785 | @CDKDK - DK-Potentiometer@ |
| 0x2786 | @CDKDK1P - Drosselklappenpoti 1@ |
| 0x2787 | @CDKDK2P - Drosselklappenpoti 2@ |
| 0x2788 | @CDKVFZ - Fahrzeuggeschwindigkeit@ |
| 0x2789 | @CDKSWE - Schlechtwegstreckenerkennung@ |
| 0x278A | @CDKTUM - Umgebungstemperatur@ |
| 0x278B | @CDKTM - Motortemperatur@ |
| 0x278C | @CDKTA - Ansauglufttemperatur@ |
| 0x278D | @CDKTKA - Temperaturfuehler Kuehleraustritt@ |
| 0x278E | @CDKDDSS - Differenzdrucksensor Saugrohr@ |
| 0x2791 | @CDKDVET - Tauscherkennung ohne Adaption@ |
| 0x2792 | @CDKDVEL - DK-Positionsueberwachung@ |
| 0x2793 | @CDKDVER -  DK-Steller Regelbereich@ |
| 0x2794 | @CDKDVEE - DK-Steller Ansteuerung@ |
| 0x2795 | @CDKDVEF - Federpruefung DK-Steller schliessende Feder@ |
| 0x2796 | @CDKDVEU - Pruefung unterer Anschlag@ |
| 0x2797 | @CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich@ |
| 0x2798 | @CDKDVEN - Pruefung Notluftpunkt@ |
| 0x2799 | @CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen@ |
| 0x279A | @CDKDVEUW - Abbruch bei UMA-Wiederlernen@ |
| 0x279B | @CDKTHS - Thermostat klemmt@ |
| 0x279C | @CDKETS - Ansteuerung Thermostat Kennfeldkuehlung@ |
| 0x279D | @CDKMLE - Ansteuerung Motorluefter@ |
| 0x279E | @CDKAKRE - Ansteuerung Abgasklappe@ |
| 0x279F | @CDKLUEA - Endstufe LuefterA@ |
| 0x27A0 | @CDKELS - Ansteuerung E-Box Luefter@ |
| 0x27A4 | @CDKDWA - EWS3.3 Schnittstelle EWS-DME@ |
| 0x27B3 | @CDKEGFE - Diagnose DK/HFM-Abgleich@ |
| 0x27B5 | @CDKENWSE - Ansteuerung Einlass-VANOS@ |
| 0x27B7 | @CDKKPE - Ansteuerung Kraftstoffpumpen-Relais@ |
| 0x27B8 | @CDKPDDSS - Plausibilitaet Differenzdrucksensor@ |
| 0x27BB | @CDKANWS - Nockenwellensteuerung Auslass-VANOS0@ |
| 0x27BD | @CDKANWSE - Ansteuerung Auslass-VANOS@ |
| 0x27C1 | @CDKPHM - Master Nockenwellengeber@ |
| 0x27C2 | @CDKKOSE - Ansteuerung Klimakompressorsteuerung@ |
| 0x27C9 | @CDKLDP -  LDP Modul@ |
| 0x27CA | @CDKDMPME - Ansteuerung DM-TL Pumpenmotor@ |
| 0x27CB | @CDKDMTKNM - DM-TL Feinstleck (0,5 mm) MIL aus@ |
| 0x27CC | @CDKDMTK - DM-TL Feinleck@ |
| 0x27CD | @CDKDMTL - DM-TL Modul@ |
| 0x27CE | @CDKUFRLIP - Lastsensorueberwachung@ |
| 0x27D5 | @CDKLLR - Leerlaufregelung fehlerhaft@ |
| 0x27D9 | @CDKDHDMTE - Ansteuerung DM-TL Heizung@ |
| 0x27DA | @CDKDGEN - Generatorfehler@ |
| 0x27DC | @CDKWCA - EWS3.3-Wechselcode-Abspeicherung@ |
| 0x27E1 | @CDKUFSPSC - Pedalwertgeberueberwachung@ |
| 0x27E2 | @CDKKS1 - Klopfsensor1@ |
| 0x27E3 | @CDKKS2 - Klopfsensor2@ |
| 0x27E4 | @CDKKS3 - Klopfsensor3@ |
| 0x27E5 | @CDKKS1 - Klopfsensor 1 Bank2 @ |
| 0x27E6 | @CDKKRNT - Klopfregelung Nulltest@ |
| 0x27E7 | @CDKKROF - Klopfregelung Offset@ |
| 0x27E8 | @CDKKRTP - Klopfregelung Testimpuls@ |
| 0x27E9 | @CDKKRNT2 - Klopfregelung Nulltest Bank2@ |
| 0x27EA | @CDKCHDEV - CAN-Timeout HDEV@ |
| 0x27EC | @CDKCGE - CAN-EGS Signalfehler@ |
| 0x27ED | @CDKCAS - CAN-ASC/DSC Signalfehler@ |
| 0x27EE | @CDKCINS - CAN-Instrumentenkombination Signalfehler@ |
| 0x27EF | @CDKCACC - CAN-Instrumentenkombination Signalfehler@ |
| 0x27F0 | @CDKAS - Plausibilitaet MSR-Eingriff@ |
| 0x27F2 | @CDKFST - Plausibilitaet Tankfuellstand@ |
| 0x27F3 | @CDKCVVT - CAN-Timeout VVT-Steuergeraet@ |
| 0x27F5 | @CDKCDM -  CAN-Timeout DME-Steuergeraet@ |
| 0x27F6 | @CDKFPP - Pedalwertgeber@ |
| 0x27F7 | @CDKFP1P - Pedalwertgeber Poti1@ |
| 0x27F8 | @CDKFP2P - Pedalwertgeber Poti2@ |
| 0x27F9 | @CDKSTAE - Startautomatik Ansteuerung@ |
| 0x27FA | @CDKSTS - Startautomatik Eingang@ |
| 0x27FD | @CDKSTA - Startautomatik@ |
| 0x27FE | @CDKKROF2 - Klopfregelung Offset Bank2@ |
| 0x27FF | @CDKKRTP2 - Klopfregelung Testimpuls Bank2@ |
| 0x280A | @CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle@ |
| 0x2811 | @CDKCANB - Local CAN Bus Off@ |
| 0x2813 | @CDKUFSGA - Steuergeraeteueberwachung Gruppe A@ |
| 0x2814 | @CDKUFSGB - Steuergeraeteueberwachung Gruppe B@ |
| 0x2815 | @CDKUFSGC - Steuergeraeteueberwachung Gruppe C@ |
| 0x2816 | @CDKUFNC - Motordrehzahlueberwachung@ |
| 0x2817 | @CDKDGEN2 - Generatorfehler 2@ |
| 0x2818 | @CDKULSU - Spannungsueberwachung Sonde an Luft (Sonde nicht verbaut aber angesteckt)@ |
| 0x2819 | @CDKC2SG - Time Out SG-Kopplung@ |
| 0x281E | @CDKSUE - Ansteuerung DISA@ |
| 0x2822 | @CDKMTOEL - Zwangsschaltung EGS@ |
| 0x2823 | @CDKHSVSA - Heizung Lambdasonde vor Kat (im Schub)@ |
| 0x2825 | @CDKLAVH - Lambda-Sondenalterung h. Kat@ |
| 0x2827 | @CDKHELSU - Heizereinkopplung auf Signalpfad@ |
| 0x2828 | @CDKCARS - CAN-ARS Signalfehler@ |
| 0x2829 | @CDKCCAS - CAN-CAS Signalfehler@ |
| 0x282A | @CDKCIHKA - ICAN-HKA Signalfehler@ |
| 0x282B | @CDKCPWML - CAN-PWML Signalfehler@ |
| 0x282C | @CDKCSZL - CAN-SZL Signalfehler@ |
| 0x282E | @CDKBWF - PWG-Bewegung@ |
| 0x283A | @CDKOEZS - Fehler Oelzustandssensor@ |
| 0x283D | @CDKCANA - PT CAN Bus Off@ |
| 0x283E | @CDKVVTE - VVT-Enable-Leitung Ansteuerung@ |
| 0x283F | @CDKPOELS - Plausibilitaet Oeldruckschalter@ |
| 0x2841 | @CDKLUVE - Luftumfasste Einspritzventile Ansteuerung@ |
| 0x2843 | @CDKPLLSU - Plausibilitaetsdiagnose LSU durch LSH Nachkat@ |
| 0x2844 | @CDKICLSU - Eigendiagnose CJ125 SPI Kommunikation@ |
| 0x2846 | @CDKANSKE - Ansteuerung Ansaugklappe@ |
| 0x2847 | @CDKDDSA - Druck-Schalter-Ansteuerung@ |
| 0x2848 | @CDKHDEVRE - Endstufe Relais HDEV SG@ |
| 0x2849 | @CDKLSUIP - Leitungsunterbrechung an Pumpstrom@ |
| 0x284A | @CDKLSUKS - Kurzschluss Sondenleitungen gegen Masse oder Ub@ |
| 0x284B | @CDKRAVE -  Ansteuerung Ruecklauf Absperrventil @ |
| 0x284C | @CDKDYLSU - LSU dynamisch zu langsam@ |
| 0x284D | @CDKSALSU - Schubabgleich LSU@ |
| 0x284F | @CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft @ |
| 0x2850 | @CDKDVFFS - VVT-Fuehrungssensor@ |
| 0x2851 | @CDKDVFFS2 -  VVT-Fuehrungssensor (Bank2)@ |
| 0x2852 | @CDKDVFRS - VVT-Referenzsensor@ |
| 0x2853 | @CDKDVFRS2 - VVT-Referenzsensor (Bank2)@ |
| 0x2854 | @CDKDVPLA - VVT-Sensorplausibilisierung@ |
| 0x2855 | @CDKDVPLA2 - VVT-Sensorplausibilisierung (Bank2)@ |
| 0x2856 | @CDKDVUSE - VVT-Versorgungsspannung Sensor@ |
| 0x2857 | @CDKDVUSE2 - VVT-Versorgungsspannung Sensor (Bank2)@ |
| 0x2858 | @CDKDVLRN - VVT-Lernfunktion Anschlag@ |
| 0x2859 | @CDKDVLRN2 - VVT-Lernfunktion Anschlag (Bank2)@ |
| 0x285A | @CDKDVSTE - VVT-Stellgliedueberwachung@ |
| 0x285B | @CDKDVSTE2 - VVT-Stellgliedueberwachung (Bank2)@ |
| 0x285C | @CDKDVCAN - VVT-CAN-Kommunikation@ |
| 0x285D | @CDKDVCAN2 - VVT-CAN-Kommunikation (Bank2)@ |
| 0x285E | @CDKDVFSG - VVT-Steuergeraet interner Fehler@ |
| 0x2860 | @CDKDVEST -  VVT-Endstufe@ |
| 0x2862 | @CDKDVULV -  VVT-Leistungsversorgung@ |
| 0x2864 | @CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler@ |
| 0x2865 | @CDKDVPMN - Leistungsbegrenzung VVT-Notlauf@ |
| 0x2866 | @CDKDVAN - VVT Anschlaege lernen notwendig@ |
| 0x2867 | @CDKDVOVL - VVT-Systemueberlast@ |
| 0x286D | @CDKEVLE3 - Endstufe HDEV9, Leitung 9@ |
| 0x286E | @CDKEVLE4 - Endstufe HDEV12, Leitung 12@ |
| 0x286F | @CDKEVLE5 - Endstufe HDEV8, Leitung 8@ |
| 0x2870 | @CDKEVLE6 - Endstufe HDEV10, Leitung 10@ |
| 0x2871 | @CDKHDEVH1 - Hochdruck-Einspritzventil Highside 7@ |
| 0x2872 | @CDKHDEVH2 - Hochdruck-Einspritzventil Highside 11@ |
| 0x2873 | @CDKHDEVH3 - Hochdruck-Einspritzventil Highside 9@ |
| 0x2874 | @CDKHDEVH4 - Hochdruck-Einspritzventil Highside 12@ |
| 0x2875 | @CDKHDEVH5 - Hochdruck-Einspritzventil Highside 8@ |
| 0x2876 | @CDKHDEVH6 - Hochdruck-Einspritzventil Highside 10@ |
| 0x2877 | @CDKHDEVL1 - Hochdruck-Einspritzventil Lowside 7@ |
| 0x2878 | @CDKHDEVL2 - Hochdruck-Einspritzventil Lowside 11@ |
| 0x287A | @CDKHDEVL3 - Hochdruck-Einspritzventil Lowside 9@ |
| 0x287C | @CDKDSS - Drucksensor Saugrohr@ |
| 0x287D | @CDKHDEVL4 - Hochdruck-Einspritzventil Lowside 12@ |
| 0x287E | @CDKHDEVL5 - Hochdruck-Einspritzventil Lowside 8@ |
| 0x287F | @CDKHDEVL6 - Hochdruck-Einspritzventil Lowside 10@ |
| 0x2881 | @CDKKS2 - Klopfsensor 2 Bank2 @ |
| 0x2883 | @CDKKS3 - Klopfsensor 3 Bank2 @ |
| 0x2889 | @CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup@ |
| 0x28C8 | @CDKFRST - LR-Abweichung@ |
| 0x28D6 | @CDKCOD - HO-Prozessfehler, Codierung fehlt@ |
| 0x28D7 | @CDKDGENBS - Generator Kommunikation@ |
| 0x28D8 | @CDKNVRBUP - RAM Backup-Fehler@ |
| 0x28DB | @CDKMINHUB - Minhubadaption Anschlag mehrfach@ |
| 0x2906 | @CDKAGRE - AGR Ventil Endstufe@ |
| 0x2907 | @CDKAGRF - AGR Ventil Ueberwachung@ |
| 0x290F | @CDKDSKV - Hochdrucksensortest (Signal Raildrucksensor)@ |
| 0x2913 | @CDKEVLE1 - Endstufe HDEV1, Leitung 1@ |
| 0x2914 | @CDKEVLE2 - Endstufe HDEV5  Leitung 5@ |
| 0x2915 | @CDKEVLE3 - Endstufe HDEV3, Leitung 3@ |
| 0x2916 | @CDKEVLE4 - Endstufe HDEV6, Leitung 6@ |
| 0x2917 | @CDKEVLE5 - Endstufe HDEV2, Leitung 2@ |
| 0x2918 | @CDKEVLE6 - Endstufe HDEV4, Leitung 4@ |
| 0x2919 | @CDKEVLE1 - Endstufe HDEV7, Leitung 7@ |
| 0x291A | @CDKEVLE2 - Endstufe HDEV11 Leitung 11@ |
| 0x291B | @CDKHDEVH1 - Hochdruck-Einspritzventil Highside 1@ |
| 0x291C | @CDKHDEVH2 - Hochdruck-Einspritzventil Highside 5@ |
| 0x291D | @CDKHDEVH3 - Hochdruck-Einspritzventil Highside 3@ |
| 0x291E | @CDKHDEVH4 - Hochdruck-Einspritzventil Highside 6@ |
| 0x291F | @CDKHDEVK - Hochdruck-Einspritzventil, Kommunikation@ |
| 0x2920 | @CDKHDEVL1 - Hochdruck-Einspritzventil Lowside 1@ |
| 0x2921 | @CDKHDEVL2 - Hochdruck-Einspritzventil Lowside 5@ |
| 0x2922 | @CDKHDEVL3 - Hochdruck-Einspritzventil Lowside 3@ |
| 0x2923 | @CDKHDEVL4 - Hochdruck-Einspritzventil Lowside 6@ |
| 0x2924 | @CDKHDR - Raildruckregelung@ |
| 0x292B | @CDKLSUIA - LSU Abgleichsleitung@ |
| 0x292D | @CDKLSUUN - LSU Nernst Zelle Unterbrechung@ |
| 0x2930 | @CDKLSUVM - LSU virtuelle Masse Unterbrechung@ |
| 0x2932 | @CDKMSVE - Endstufe Drucksteuerventil@ |
| 0x2936 | @CDKUFPR - Fktueberw: Kraftstoffdrucksensor-, Zuleitung- oder SG-Fehler@ |
| 0x2937 | @CDKUFRKC - Funktionsueberwachung: Lambda-Plausibilisierung@ |
| 0x2940 | @CDKHDEVH5 - Hochdruck-Einspritzventil Highside 2@ |
| 0x2941 | @CDKHDEVH6 - Hochdruck-Einspritzventil Highside 4@ |
| 0x2942 | @CDKHDEVL5 - Hochdruck-Einspritzventil Lowside 2@ |
| 0x2943 | @CDKHDEVL6 - Hochdruck-Einspritzventil Lowside 4@ |
| 0x2944 | @CDKUF2SG - DME Kopplungsbotschaften@ |
| 0x296C | @CDKCTXU - CAN-Timeout TXU@ |
| 0x296D | @CDKMBV - Motormoment Bankvergleich@ |
| 0x2971 | @CDKSGAPL - Programm- und Datenstands-Plausibilisierung von Master und Slave@ |
| 0xCD87 | @CDKCANA - PT CAN Bus Off@ |
| 0xCDC7 | @CDKCANB - Local CAN Bus Off@ |
| 0xFFFF | @CDKZZZ - ubekannter Fehlerort@ |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 00654321 |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | --                                                                    |
| xxxxxxx1 | 11 | @Diagnose aktiv @           |
| xxxxxx0x | 20 | --                                                                    |
| xxxxxx1x | 21 | @Diagnose gestoppt@         |
| xxxxx0xx | 30 | --                                                                    |
| xxxxx1xx | 31 | @Zyklus-Flag gesetzt@       |
| xxxx0xxx | 40 | --                                                                    |
| xxxx1xxx | 41 | @Error-Flag gesetzt@        |
| xxx0xxxx | 50 | --                                                                    |
| xxx1xxxx | 51 | @MIL ein@                   |
| xx0xxxxx | 60 | --                                                                    |
| xx1xxxxx | 61 | @Fehler in Entprellphase@   |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x27B4 | 0X0A | 0X0B | 0X24 | 0X75 |
| 0x2712 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2713 | 0X12 | 0X8C | 0X06 | 0X08 |
| 0x2716 | 0X7E | 0X2F | 0X2B | 0X33 |
| 0x271A | 0XA1 | 0XA8 | 0X29 | 0X17 |
| 0x271B | 0X2D | 0X8C | 0X14 | 0X44 |
| 0x271C | 0X2B | 0X8C | 0X33 | 0X17 |
| 0x271D | 0X2D | 0X8C | 0X29 | 0X44 |
| 0x271E | 0X7E | 0X0B | 0X2B | 0X33 |
| 0x2721 | 0X0A | 0X2B | 0X33 | 0X17 |
| 0x2728 | 0X0A | 0X1A | 0X13 | 0X3C |
| 0x272A | 0X0A | 0X1A | 0X13 | 0X3C |
| 0x272C | 0X0A | 0X1A | 0X3C | 0X05 |
| 0x272E | 0X0A | 0X1A | 0X3C | 0X05 |
| 0x2731 | 0X0A | 0X1A | 0X12 | 0XC7 |
| 0x2737 | 0X0A | 0X12 | 0X14 | 0X8C |
| 0x2738 | 0XA3 | 0X1A | 0XBF | 0XB2 |
| 0x2742 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2743 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2744 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2745 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2746 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2747 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2748 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2749 | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x274A | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x274B | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x274C | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x274D | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x274E | 0X0A | 0X1A | 0X12 | 0X3C |
| 0x2753 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2754 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2755 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2756 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2757 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2758 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2759 | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x275A | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x275B | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x275C | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x275D | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x275E | 0X0A | 0X12 | 0X03 | 0X14 |
| 0x2760 | 0X24 | 0X14 | 0X8B | 0X84 |
| 0x2762 | 0X0A | 0X11 | 0X14 | 0X05 |
| 0x2764 | 0X0A | 0X12 | 0X13 | 0X14 |
| 0x2765 | 0X0A | 0X12 | 0X13 | 0X14 |
| 0x2769 | 0X14 | 0X13 | 0X15 | 0X64 |
| 0x276A | 0X14 | 0X13 | 0X0A | 0X12 |
| 0x276D | 0X0A | 0X1A | 0X24 | 0X35 |
| 0x2772 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2775 | 0X0A | 0X1A | 0X20 | 0X21 |
| 0x2776 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2778 | 0X0A | 0X12 | 0X0B | 0X14 |
| 0x2779 | 0X0A | 0X1A | 0X1F | 0X22 |
| 0x277A | 0X0A | 0X12 | 0X0B | 0X14 |
| 0x277B | 0X0A | 0X1A | 0X1F | 0X22 |
| 0x277C | 0X0A | 0X1A | 0X1F | 0X22 |
| 0x277D | 0X0A | 0X14 | 0X24 | 0X12 |
| 0x277E | 0X0A | 0X23 | 0X1A | 0X12 |
| 0x277F | 0X0A | 0X12 | 0X24 | 0X14 |
| 0x2780 | 0X0A | 0X12 | 0X24 | 0X14 |
| 0x2781 | 0X0A | 0X12 | 0X24 | 0X14 |
| 0x2782 | 0X0A | 0X12 | 0X24 | 0X14 |
| 0x2783 | 0X0A | 0X13 | 0X15 | 0X71 |
| 0x2785 | 0X0A | 0X15 | 0X26 | 0X27 |
| 0x2786 | 0X0A | 0X28 | 0X24 | 0X27 |
| 0x2787 | 0X0A | 0X28 | 0X24 | 0X26 |
| 0x2788 | 0X0A | 0X1A | 0X70 | 0X14 |
| 0x2789 | 0X0A | 0X1A | 0X0B | 0X8C |
| 0x278A | 0X12 | 0X13 | 0X24 | 0X14 |
| 0x278B | 0X25 | 0X13 | 0X0A | 0X72 |
| 0x278C | 0X0A | 0X12 | 0X24 | 0X73 |
| 0x278D | 0X0A | 0X12 | 0X24 | 0X74 |
| 0x278E | 0X0A | 0X1A | 0X12 | 0X14 |
| 0x2791 | 0X14 | 0X26 | 0X64 | 0X76 |
| 0x2792 | 0X14 | 0X13 | 0X15 | 0X28 |
| 0x2793 | 0X14 | 0X13 | 0X15 | 0X28 |
| 0x2794 | 0X14 | 0X12 | 0X15 | 0X28 |
| 0x2795 | 0X14 | 0X13 | 0X15 | 0X64 |
| 0x2796 | 0X14 | 0X13 | 0X26 | 0X65 |
| 0x2797 | 0X14 | 0X13 | 0X26 | 0X65 |
| 0x2798 | 0X14 | 0X13 | 0X64 | 0X76 |
| 0x2799 | 0X0A | 0X14 | 0X13 | 0X23 |
| 0x279A | 0X0A | 0X14 | 0X13 | 0X23 |
| 0x279B | 0X0A | 0X12 | 0X13 | 0X74 |
| 0x279C | 0X0A | 0X12 | 0X13 | 0X14 |
| 0x279D | 0X0A | 0X12 | 0X14 | 0X6B |
| 0x279E | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x279F | 0X0A | 0X12 | 0X14 | 0X6B |
| 0x27A0 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27A4 | 0X0A | 0X12 | 0X14 | 0XBE |
| 0x27B3 | 0X11 | 0X15 | 0X13 | 0X35 |
| 0x27B5 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27B7 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27B8 | 0X0A | 0X1A | 0X12 | 0XC7 |
| 0x27BB | 0X0A | 0X1A | 0X12 | 0XC7 |
| 0x27BD | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27C1 | 0X0A | 0X12 | 0X24 | 0X14 |
| 0x27C2 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27C9 | 0X0A | 0X35 | 0X24 | 0X14 |
| 0x27CA | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27CB | 0X3C | 0X35 | 0X24 | 0X14 |
| 0x27CC | 0X3C | 0X35 | 0X24 | 0X14 |
| 0x27CD | 0X3C | 0X35 | 0X24 | 0X14 |
| 0x27CE | 0X0A | 0X1A | 0X43 | 0X40 |
| 0x27D5 | 0X0A | 0X1A | 0X14 | 0X15 |
| 0x27D9 | 0X0A | 0X14 | 0X24 | 0X0B |
| 0x27DA | 0X14 | 0XBA | 0X0A | 0XBB |
| 0x27DC | 0X0A | 0X12 | 0X14 | 0X8C |
| 0x27E1 | 0X1B | 0X1C | 0X23 | 0X1F |
| 0x27E2 | 0X0A | 0X1A | 0X8D | 0X94 |
| 0x27E3 | 0X0A | 0X1A | 0X92 | 0X8F |
| 0x27E4 | 0X0A | 0X1A | 0X8E | 0X91 |
| 0x27E5 | 0X0A | 0X1A | 0X8D | 0X94 |
| 0x27E6 | 0X0A | 0X1A | 0X14 | 0X80 |
| 0x27E7 | 0X0A | 0X1A | 0X14 | 0X81 |
| 0x27E8 | 0X0A | 0X1A | 0X77 | 0X81 |
| 0x27E9 | 0X0A | 0X1A | 0X14 | 0X80 |
| 0x27EA | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27EC | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27ED | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27EE | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27EF | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27F0 | 0X0A | 0X1A | 0X14 | 0X0B |
| 0x27F2 | 0X0A | 0X3C | 0X14 | 0X0B |
| 0x27F3 | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27F5 | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x27F6 | 0X0A | 0X23 | 0X1B | 0X1D |
| 0x27F7 | 0X0A | 0X23 | 0X1B | 0X1D |
| 0x27F8 | 0X0A | 0X23 | 0X1B | 0X1D |
| 0x27F9 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x27FA | 0X0A | 0X14 | 0X12 | 0X8C |
| 0x27FD | 0X0A | 0X1A | 0X14 | 0X0B |
| 0x27FE | 0X0A | 0X1A | 0X14 | 0X81 |
| 0x27FF | 0X0A | 0X1A | 0X77 | 0X81 |
| 0x280A | 0X0A | 0X12 | 0X1A | 0X00 |
| 0x2811 | 0X0A | 0X14 | 0X13 | 0X0B |
| 0x2813 | 0X14 | 0X13 | 0X0A | 0X12 |
| 0x2814 | 0X14 | 0X13 | 0X0A | 0X12 |
| 0x2815 | 0X14 | 0X13 | 0X0A | 0X12 |
| 0x2816 | 0X0A | 0X15 | 0X1F | 0X23 |
| 0x2817 | 0X14 | 0XBA | 0X0A | 0XBB |
| 0x2818 | 0X9D | 0XA8 | 0X17 | 0X85 |
| 0x2819 | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x281E | 0X0A | 0X12 | 0X13 | 0X23 |
| 0x2822 | 0X0A | 0X12 | 0X13 | 0X14 |
| 0x2823 | 0X2D | 0XA8 | 0X29 | 0X0B |
| 0x2825 | 0X82 | 0XB2 | 0X2B | 0X17 |
| 0x2827 | 0X82 | 0XA8 | 0X29 | 0X3C |
| 0x2828 | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x2829 | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x282A | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x282B | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x282C | 0X0A | 0X1A | 0X14 | 0X8C |
| 0x282E | 0X0A | 0X23 | 0X1B | 0X1D |
| 0x283A | 0X0A | 0X14 | 0X12 | 0X3C |
| 0x283D | 0X0A | 0X14 | 0X13 | 0X0B |
| 0x283E | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x283F | 0X0A | 0X12 | 0X1A | 0X8C |
| 0x2841 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2843 | 0X9D | 0XA8 | 0X17 | 0X85 |
| 0x2844 | 0X9F | 0X8C | 0X14 | 0XA8 |
| 0x2846 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2847 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2848 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2849 | 0XA8 | 0X82 | 0X29 | 0X9F |
| 0x284A | 0X14 | 0X2D | 0XA8 | 0X9F |
| 0x284B | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x284C | 0XAA | 0XB0 | 0XA8 | 0X85 |
| 0x284D | 0XA8 | 0X82 | 0X12 | 0X3C |
| 0x284F | 0X0A | 0X1A | 0X70 | 0X14 |
| 0x2850 | 0X0A | 0X14 | 0X12 | 0XC5 |
| 0x2851 | 0X0A | 0X14 | 0X12 | 0XC6 |
| 0x2852 | 0X0A | 0X14 | 0X12 | 0XC5 |
| 0x2853 | 0X0A | 0X14 | 0X12 | 0XC6 |
| 0x2854 | 0X0A | 0X14 | 0X12 | 0XC3 |
| 0x2855 | 0X0A | 0X14 | 0X12 | 0XC4 |
| 0x2856 | 0X0A | 0X14 | 0X12 | 0X24 |
| 0x2857 | 0X0A | 0X14 | 0X12 | 0X24 |
| 0x2858 | 0X0A | 0X14 | 0X12 | 0X24 |
| 0x2859 | 0X0A | 0X14 | 0X12 | 0X24 |
| 0x285A | 0X0A | 0X14 | 0X12 | 0XC5 |
| 0x285B | 0X0A | 0X14 | 0X12 | 0XC6 |
| 0x285C | 0X0A | 0X14 | 0X12 | 0X8C |
| 0x285D | 0X0A | 0X14 | 0X12 | 0X8C |
| 0x285E | 0X0A | 0X14 | 0X12 | 0X24 |
| 0x2860 | 0X0A | 0X14 | 0X12 | 0XC5 |
| 0x2862 | 0X0A | 0X14 | 0X12 | 0X24 |
| 0x2864 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2865 | 0X0A | 0X14 | 0X12 | 0XC5 |
| 0x2866 | 0X0A | 0X14 | 0X12 | 0XBE |
| 0x2867 | 0X0A | 0X8C | 0X12 | 0XC5 |
| 0x286D | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x286E | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x286F | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2870 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2871 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2872 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2873 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2874 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2875 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2876 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2877 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2878 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x287A | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x287C | 0X0A | 0X14 | 0X12 | 0X35 |
| 0x287D | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x287E | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x287F | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2881 | 0X0A | 0X1A | 0X92 | 0X8F |
| 0x2883 | 0X0A | 0X1A | 0X8E | 0X91 |
| 0x2889 | 0X14 | 0XBE | 0X12 | 0X24 |
| 0x28C8 | 0X0A | 0X14 | 0X12 | 0X8C |
| 0x28D6 | 0X14 | 0X0A | 0X8C | 0X00 |
| 0x28D7 | 0X0A | 0X14 | 0X13 | 0XBB |
| 0x28D8 | 0X0A | 0X14 | 0X12 | 0X00 |
| 0x28DB | 0X12 | 0XBE | 0X0A | 0X1A |
| 0x2906 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2907 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x290F | 0X0A | 0X12 | 0X14 | 0X3C |
| 0x2913 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2914 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2915 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2916 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2917 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2918 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2919 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x291A | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x291B | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x291C | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x291D | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x291E | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x291F | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2920 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2921 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2922 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2923 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2924 | 0X0A | 0X1A | 0X3C | 0X35 |
| 0x292B | 0XA8 | 0X82 | 0X29 | 0X8C |
| 0x292D | 0XA8 | 0X82 | 0X29 | 0X9F |
| 0x2930 | 0X14 | 0XA8 | 0X82 | 0X9F |
| 0x2932 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2936 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2937 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2940 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2941 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2942 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2943 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x2944 | 0X0A | 0X12 | 0X14 | 0X0B |
| 0x296C | 0X0A | 0X1A | 0X14 | 0X0B |
| 0x296D | 0X0A | 0X1A | 0X14 | 0X0B |
| 0x2971 | 0X0A | 0X1A | 0X14 | 0X0B |
| 0xCD87 | 0X0A | 0X14 | 0X13 | 0X0B |
| 0xCDC7 | 0X0A | 0X14 | 0X13 | 0X0B |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | ---                                    |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x01 | @Regelstatus Bank1@ (flglrs)           | 1 | 0-n | unsigned char | Regel | 1 | 1 | 0 |
| 0x02 | @Regelstatus Bank2@ (flglrs2)          | 1 | 0-n | unsigned char | Regel | 1 | 1 | 0 |
| 0x03 | @Berechnete Last@ (rml)                | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x04 | Motortemperatur  (tmot)              | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x05 | @Regelfaktor Bank1@ (fr_u)             | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x06 | @Adaptionsfaktor Bank1@ (fra_u)        | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x07 | @Regelfaktor Bank2@ (fr2_u)            | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x08 | @Adaptionsfaktor Bank2@ (fra_u2)       | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x09 | ---                                    | - | - | unsigned char | - | 0 | 0 | 0 |
| 0x0A | Motordrehzahl (nmot)                 | /min | - | unsigned char | - | 40 | 1 | 0 |
| 0x0B | Fahrzeuggeschwindigkeit (vfzg_u)     | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x0C | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0D | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0E | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0F | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x10 | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x11 | @Luftmassenfluss@ (ml)                 | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0x12 | Motortemperatur (tmot)               | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x13 | Ansauglufttemperatur (tans)          | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x14 | Versorgungsspannung (ub)             | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x15 | @Winkel DK bez. auf DK-Anschl.@ (wdkba) | % DK | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x16 | @Sondenspannung v. Kat Bank1@  (usvk)  | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x17 | @Sondenspannung h. Kat Bank1@  (ushk)  | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x18 | @Sondenspannung v. Kat Bank2@  (usvk2) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x19 | @Sondenspannung v. Kat Bank2@  (ushk2) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x1A | @relative Luftfuellung@ (rl)           | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x1B | @Spannung PWG Poti1@ (upwg1_u)         | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1C | @Spannung PWG Poti2@ (upwg2_u)         | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1D | @verdoppelte Spannung PWG Poti@2 (upwg2d_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1E | @skapfad@                              | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x1F | @eagspfad@                             | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | @mpfad@                                | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | @Istmoment bei M.-vergleich@ (mi_duf)  | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x22 | @rstpfad@                              | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | @normierter Fahrpedalwinkel@ (wped)    | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x24 | @Umgebungstemperatur@ (tumg)           | @Grd C@ | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x25 | @Motortemp.-Ersatzwert aus Modell@ (tmew) | @Grd C@ | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x26 | @Spannung DK-Poti@1 (udkp1_u)          | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x27 | @Spannung DK-Poti@2 (udkp2_u)          | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x28 | @Sollwert DK bez. auf unteren Anschl.@(wdks) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x29 | @Abgastemp. v. Kat aus Modell@ (tabgm) | @Grd C@ | - | unsigned char | - | 5 | 1 | -50 |
| 0x2A | @Abgastemp. v. Kat aus Modell Bank2@(tabgm2) | @Grd C@ | - | unsigned char | - | 5 | 1 | -50 |
| 0x2B | @Kat-Temperatur aus Modell@ (tkatm)    | @Grd C@ | - | unsigned char | - | 5 | 1 | -50 |
| 0x2C | @Kat-Temperatur aus Modell Bank2@(tkatm2) | @Grd C@ | - | unsigned char | - | 5 | 1 | -50 |
| 0x2D | @Spannung LS-Heizung v. Kat@ (uhsv)    | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2E | @Spannung LS-Heizung v. Kat Bank2@ (uhsv2) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2F | @Spannung LS-Heizung h. Kat@ (uhsh)    | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x30 | @Spannung LS-Heizung h. Kat Bank2@ (uhsh2) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x31 | @Innenwiderstand LS v. Kat@ (rinv)     | @Ohm@ | - | unsigned char | - | 64 | 1 | 0 |
| 0x32 | @Innenwiderstand LS v. Kat Bank2@ (rinv2) | @Ohm@ | - | unsigned char | - | 64 | 1 | 0 |
| 0x33 | @Innenwiderstand LS h. Kat@ (rinh)     | @Ohm@ | - | unsigned char | - | 64 | 1 | 0 |
| 0x34 | @Innenwiderstand LS v. Kat Bank2@ (rinh2) | @Ohm@ | - | unsigned char | - | 64 | 1 | 0 |
| 0x35 | @Umgebungdruck@ (pu)                   | hPa | - | unsigned char | - | 5 | 1 | 0 |
| 0x36 | @gef Periodendauer LS v. Kat@ (tpsvkmf) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x37 | @gef Periodendauer LS v. Kat B2@ (tpsvkmf2) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x38 | fr                                     |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x39 | fra                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3A | fr2                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3B | fra2                                   |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3C | @Tankfuellstand@ (tfst)                | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x3D | rl                                     | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x3E | @Motortemperatur linear.@ (tmotlin)    | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x3F | @Motortemp. Referenz aus Modell@ (tmrm) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x40 | @Ist-Moment der Fkt-ueberwachung@ (mi-um) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x41 | @Ist-Gang@ (gangi) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x42 | @zul. ind. Moment vor Filter@ (mizuvfil) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x43 | @ind. Sollmoment vor Begrenzung@ (mizsolv) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x64 | @Winkel DK in Notluftpunkt@ (wdknlp)   | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x65 | @Spannung Dk-Poti1 unt. Anschlag@ (udkp1a_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x66 | @Integratorgradient Offset KR@ (igokr_u) | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x67 | @ADC-Spannung LS v. Kat@ (uusvk_u)     | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x68 | @ADC-Spannung LS v. Kat Bank2@ (uusvk2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x69 | @ADC-Spannung LS h. Kat@ (uushk_u)     | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6A | @ADC-Spannung LS h. Kat Bank2@ (uushk2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6B | @Tastverhaelnis E-Luefter@ (taml)      | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6C | wnwi1_u                                | @Grad KW@ | - | signed char | - | 1 | 1 | 0 |
| 0x6D | wnwi2_u                                | @Grad KW@ | - | signed char | - | 1 | 1 | 0 |
| 0x6E | @adapt. Haltetastung NW@ (tanwrhf_0)   | @% TV@ | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6F | @adapt. Haltetastung NW Bank2@ (tanwrhf_1) | @% TV@ | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x70 | vfzg2                                  | km/h | - | unsigned char | - | 1.25 | 1 | 0 |
| 0x71 | ADC HFM (adhfm)                        | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x72 | ADC TM  (adtm)                         | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x73 | ADC TA  (adta)                         | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x74 | ADC TKA (adtka)                        | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x75 | ADC DSU (addsu)                        | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x76 | @Sollwert DK in NLP-Stellung@ (wdknlpr) | @% DK@ | - | unsigned char | - | 0.3921 | 1 | 0 |
| 0x77 | @Integratorw. KR Testimpuls@ (ikrmet)  | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x78 | @gef. Kat-Temperatur aus Modell@ (tkatm) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x79 | @gef. Kat-Temperatur aus Modell B2@(tkatm2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7A | @gef. Abgastemperatur aus Modell@ (tabgmf) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7B | @gef Abgastemperatur aus Modell B2@(tabgmf2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7C | phlsnv                                 |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7D | phlsnv2                                |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7E | @norm. Heizleistung LS h. Kat@ (phlsnh) |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7F | @norm. Heizleistung LS h. Kat B2@ (phlsnh2) |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x80 | @Integratorgradient Nulltest KR@ (igod) | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x81 | @Integratorwert KR Messanfang@ (ikrma) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x82 | @Lambda-Sollwert@ (lamsons)            |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x83 | @Lambda-Sollwert Bank2@ (lamsons2)     |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x84 | @Motorstarttemperatur@ (tmst)          | @Grd C@ | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x85 | @Mittelwert Lambdaregelfaktor@ (frm)    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x86 | @Mittelwert Lambdaregelfaktor Bank2@ (frm2) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x87 | @Mittelwert Sonde h. Kat@ (ahkat)      |   | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x88 | @Mittelwert Sonde h. Kat Bank2@(ahkat2)  |   | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x89 | I-@Anteil verz. Reglerumsch.@(tvlrhi)  | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8A | I-@Anteil verz. Reglerumsch.@(tvlrhi2)  | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8B | @Fakt. Luftdichte TANS Hoehe@ (frhol_u) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x8C | @Zeit nach Start@ (tnse_u)             | s | - | unsigned char | - | 25.6 | 1 | 0 |
| 0x8D | @norm. Referenzpegel KR SW-Zyl0@ (rkrn_u_0) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x8E | @norm. Referenzpegel KR SW-Zyl1@ (rkrn_u_1) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x8F | @norm. Referenzpegel KR SW-Zyl2@ (rkrn_u_2) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x90 | @norm. Referenzpegel KR SW-Zyl3@ (rkrn_u_3) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x91 | @norm. Referenzpegel KR SW-Zyl4@ (rkrn_u_4) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x92 | @norm. Referenzpegel KR SW-Zyl5@ (rkrn_u_5) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x93 | @norm. Referenzpegel KR SW-Zyl6@ (rkrn_u_6) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x94 | @norm. Referenzpegel KR SW-Zyl7@ (rkrn_u_7) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x95 | @Statusflag ti-Abschaltung@ (flgtiab)  |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x96 | @Fuellstand Kraftstofftank@ (fstt)     | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x97 | @Pumpenstrom Referenzleck@ (iptref)    | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x98 | @aktuelle Zeit Leckmessung@ (tdmlka)   | s | - | unsigned char | - | 1.6 | 1 | 0 |
| 0x99 | @Pumpenstrom DM-TL Ventilpruefung@ (iptumv) | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x9A | @Differenz Pumpenstrom@ (iptgh)        | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x9D | @I-Anteil der stetigen LRHK (dlahi_u)@ |   | - | signed char | - | 0.000488 | 1 | 0 |
| 0x9E | @I-Anteil der stetigen LRHK Bank2(dlahi2_u)@ |   | - | signed char | - | 0.000488 | 1 | 0 |
| 0x9F | @Korrekturfak. LSU-Spannung (kusvk_u)@ | V | - | signed char | - | 0.004883 | 1 | 0 |
| 0xA0 | @Korrekturfak. LSU-Spannung Bank2(kusvk2_u)@ | V | - | signed char | - | 0.004883 | 1 | 0 |
| 0xA1 | @StatusByte LSU unplausibel (lsunpstat)@ | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xA2 | @StatusByte LSU unplausibel B2(lsunpstat2)@ | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xA3 | @Abgasmassenfluss gefiltert (msabg)@ | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA4 | @Abgasmassenfluss gefiltert Bank2(msabg2)@ | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA5 | @Abstellzeit (tabst_u)@   | s | - | unsigned char | - | 256 | 1 | 0 |
| 0xA6 | @LSU-Spannung vKat korr. (usvkk_u)@ | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA7 | @LSU-Spannung vKat korr. Bank2(usvkk2_u)@ | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA8 | @LSU-Spannung vKat (ADC) (uulsuv_u)@ | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA9 | @LSU-Spannung vKat Bank2 (ADC)(uulsuv2_u)@ | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xAA | @Dynamikwert LSU-Sonde (dynlsu_u)@ |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xAB | @Dynamikwert LSU-Sonde Bank2(dynlsu2_u)@ |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xAC | @mult. Gemischadapt.fakt. unt.Ber.(frau_u)@ |   | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0xAD | @mult. Gemischadapt.fakt. u.Ber. B2(frau2_u)@ |   | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0xAE | @Regelabweichung Lambda (ladiff_u)@ |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xAF | @Regelabweichung Lambda Bank2(ladiff2_u)@ |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB0 | @Lambdaamplitude nach Filterung (lamsam_u)@ |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB1 | @Lambdaamplitude n. Filter. Bank2(lamsam2_u)@ |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB2 | @Lambda-Istwert vKat (lamsoni_u)@ |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xB3 | @Lambda-Istwert vKat Bank2(lamsoni2_u)@ |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xB4 | @Absolutdruck Abgassystem (palsu_u)@ | hPa | - | unsigned char | - | 10 | 1 | 0 |
| 0xB5 | @Absolutdruck Abgassystem Bank2(palsu2_u)@ | hPa | - | unsigned char | - | 10 | 1 | 0 |
| 0xB6 | @gefilt. Abgastemperatur aus Modell (talsuf)@ | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xB7 | @gef. Abgastemperatur aus Modell B2(talsuf2)@ | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xB8 | @gef. LSU-Spannung vKat (uulsuf_u)@ | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xB9 | @gef. LSU-Spannung vKat Bank2 (uulsuf2_u)@ | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xBA | @Generatorspannung (ugen)@ | V | - | unsigned char | - | 0.1 | 1 | 10.6 |
| 0xBB | @vom Generator empf. Lastsignal (dffgen)@ | % | - | unsigned char | - | 0.39215 | 1 | 0 |
| 0xBC | @Generatortemperatur (gentemp)@ | Grd C | - | unsigned char | - | 192.75 | 1 | -48 |
| 0xBD | @Beladung des Aktivkohlefilters (ftead_u)@ |   | - | signed char | - | 0.5 | 1 | 0 |
| 0xBE | @Betriebsstundenzaehler (top_u)@ |   | - | unsigned char | - | 1536 | 1 | 0 |
| 0xBF | @Abgastemperatur Kat. aus Modell (tikatm)@ | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xC0 | @Abgastemperatur Kat. aus Modell B2(tikatm2)@ | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xC1 | @Lambdasondenistwert korr.(lamzak)@ |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xC2 | @Lambdasondenistwert korr. Bank2(lamzak2)@ |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xC3 | @VVT-Sollwert (vvt_sw)@ | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC4 | @VVT-Sollwert Bank2(vvt_sw2)@ | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC5 | @VVT-Istwert (vvt_iw)@ | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC6 | @VVT-Istwert Bank2(vvt_iw2)@ | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### VVTSTATUSBG2_2

| STATI | TEXT |
| --- | --- |
| 0x00 | @Anschlaege werden gerade gelernt@ |
| 0x01 | @Lernanforderung durch VVT-SG zurueckgewiesen@ |
| 0x02 | @Lernen durch DME abgebrochen@ |
| 0x03 | @Lernen durch VVT abgebrochen@ |
| 0x05 | @Keine Anforderung zum Anschlaglernen@ |
| 0x06 | @Lernvorgang beendet@ |
| 0x07 | @Signal ungueltig@ |
| 0xXY | @Fehlerhafter Status@ |

### EWSSTART

| STATI | TEXT |
| --- | --- |
| 0x00 | @ME9.2 bereit, Startwert zu empfangen@ |
| 0x01 | @kein freier Startwert mit Freigabe vorhanden@ |
| 0x02 | @noch kein Startwert gespeichert@ |
| 0x03 | @Startwert nicht plausibel (wie im DS2-LH definiert)@ |
| 0xXY | @Fehlerhafter Status@ |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | @Startwertprogrammierung bzw. -ruecksetzen war erfolgreich@ |
| 0x01 | @falscher Startwert beim Ruecksetzen (EWS u. DME passen ni. zusammen)@  |
| 0x02 | @Telegramminhalt war kein Startwert (event. Wechselcode)@ |
| 0x03 | @Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout)@ |
| 0x04 | @Prozess laeuft@ |
| 0x05 | @Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt@ |
| 0x06 | @gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung@ |
| 0x07 | @noch kein Startwert programmiert@ |
| 0x10 | @Startwert nicht korrekt in Flash programmiert@ |
| 0x11 | @Wechselcode nicht korrekt in EEPROM-Spiegel programmiert@ |
| 0x12 | @Zufallszahl nicht korrekt in EEPROM-Spiegel programmiert@ |
| 0x20 | @Fehler bei Startwertprogrammierroutine@ |
| 0x21 | @2-aus-3-Startwertablage im Flash nicht in Ordnung@ |
| 0x22 | @Ablage im EEPROM-Spiegel nicht in Ordnung@ |
| 0xXY | @Fehlerhafter Status@ |

### REGEL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | --                                                                    |
| 0x01 | @Regelung AUS, Einschaltbedingung noch nicht erfuellt@ |
| 0x02 | @Regelung EIN@ |
| 0x04 | @Regelung AUS wegen Fahrbedingung@ |
| 0x08 | @Regelung AUS wegen erkanntem Fehler@ |
| 0x10 | @Regelung EIN mit Einschraenkung@ |
| 0xXY | ??                          |

### SLSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | @Systemtest SLS laeuft@ |
| 0x01 | @Systemtest kann nicht gestartet werden@ |
| 0x02 | @Funktionsanforderung vorhanden@ |
| 0x05 | @Systemtest ist nicht gestartet@ |
| 0x06 | @Systemtest SLS ist beendet@ |
| 0xXY | @Status Systemtest SLS kann nicht ausgegeben werden@ |

### TEVSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | @Systemtest TEV laeuft@ |
| 0x01 | @Systemtest kann nicht gestartet werden@ |
| 0x05 | @Systemtest ist nicht gestartet@ |
| 0x06 | @Systemtest TEV ist beendet@ |
| 0xXY | @Status Systemtest TEV kann nicht ausgegeben werden@ |

### STAGEDMTL

| STAGE | TEXT |
| --- | --- |
| 0x00 | @Funktion laeuft@ |
| 0x01 | @Referenzleckmessung laeuft@ |
| 0x02 | @Grobleckpruefung/verlaengerte Grobleckpruefung laeuft@ |
| 0x03 | @Feinstleckpruefung laeuft@ |
| 0x04 | @Referenzleckmessung 2 laeuft@ |
| 0x05 | @Funktion nicht aktiv@ |
| 0x06 | @Funktion beendet@ |
| 0x0A | @Funktion kann nicht gestartet werden@ |
| 0x0B | @Funktion nicht startbar@  --> @Ubatt ausserhalb Bereich@ |
| 0x0C | @Funktion nicht startbar@  --> @Schwankung Referenzstrom zu gross@ |
| 0x0D | @Funktion nicht startbar@  --> @Elektrische Fehler liegen vor@ |
| 0x0E | @Funktion nicht startbar@  --> @max. Diagnosedauer erreicht@ |
| 0x0F | @Funktion nicht startbar@  --> @keine Grobleckfreigabe@ |
| 0x14 | @Funktion wurde abgebrochen@ |
| 0x15 | @Abbruch  -->  Betankung erkannt@ |
| 0x16 | @Abbruch  -->  Tankdeckel geoeffnet@ |
| 0x17 | @Abbruch  -->  Ubatt-Schwankung zu gross@ |
| 0x18 | @Abbruch  -->  Bedingung Kl.15 AUS/EIN erkannt@ |
| 0xXY | @Stagepointer unbekannt@ |

### STAGEDMTLFREEZE

| STAGE | TEXT |
| --- | --- |
| 0x00 | @Funktion laeuft@ |
| 0x01 | @Referenzleckmessung@ |
| 0x02 | @Grobleckpruefung/verlaengerte Grobleckpruefung@ |
| 0x03 | @Feinstleckpruefung@ |
| 0x04 | @Referenzleckmessung 2@ |
| 0x0A | @Funktion kann nicht gestartet werden@ |
| 0x0B | @Funktion war nicht startbar@  --> @Ubatt ausserhalb Bereich@ |
| 0x0C | @Funktion war nicht startbar@  --> @Schwankung Referenzstrom zu gross@ |
| 0x0D | @Funktion war nicht startbar@  --> @Elektrische Fehler liegen vor@ |
| 0x0E | @Funktion war nicht startbar@  --> @max. Diagnosedauer erreicht@ |
| 0x0F | @Funktion war nicht startbar@  --> @keine Grobleckfreigabe@ |
| 0x14 | @Funktion wurde abgebrochen@ |
| 0x15 | @Abbruch  -->  Betankung erkannt@ |
| 0x16 | @Abbruch  -->  Tankdeckel geoeffnet@ |
| 0x17 | @Abbruch  -->  Ubatt-Schwankung zu gross@ |
| 0x18 | @Abbruch  -->  Bedingung Kl.15 AUS/EIN erkannt@ |
| 0x1E | @Funktion beendet, Dicht erkannt@ |
| 0x1F | @Funktion beendet, Feinleck erkannt@ |
| 0x20 | @Funktion beendet, Grobleck erkannt@ |
| 0x21 | @Funktion beendet, Modulfehler erkannt@ |
| 0x22 | @Funktion beendet, kein Grobleck erkannt@ |
| 0xFF | @DM-TL Diagnose noch nie durchlaufen@ |
| 0xXY | @Stagepointer unbekannt@ |

### LSUSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | @kein Fehler in Teilfunktion aufgetreten@ |
| 0x01 | @Abgleichleitung unterbrochen@ |
| 0x02 | @Sonde nicht eingebaut, aber angeschlossen@ |
| 0x04 | @HW-Fehler@ |
| 0x08 | @Mager-Fehler@ |
| 0x10 | @Fett-Fehler@ |
| 0x20 | @Unterbrechung@ |
| 0xXY | @Status LSU-Diagnose kann nicht ausgegeben werden@ |

### DISASTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | @nicht gelernt@ |
| 0x01 | @Lernschritt 1 (Naehe Unterer mech. Anschlag)@ |
| 0x02 | @Lernschritt 2 (Langsames Fahren gegen unteren mech. Anschlag)@ |
| 0x03 | @Lernen erfolgreich beendet@ |
| 0x04 | @Poti MIN- oder MAX-Fehler (Verlassen des Diagnosebereichs)@ |
| 0x05 | @Lagereglerfehler@ |
| 0x06 | @Temperaturwarnung@ |
| 0x07 | @Uebertemperatur Antriebseinheit@ |
| 0xXY | @Status DISA-Diagnose kann nicht ausgegeben werden@ |

### LAMBDASTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | @Steuerbetrieb, Startbedingungen noch nicht erfuellt@ |
| 0x01 | @Regelbetrieb mit zwei Sonden@ |
| 0x02 | @Steuerbetrieb durch Betriebsbedingungen@ |
| 0x04 | @Steuerbetrieb nach Systemfehler@ |
| 0x08 | @Regelung mit nur einer Sonde (vor Kat)@ |
| 0xXY | @Status LSU-Diagnose kann nicht ausgegeben werden@ |

### BETRIEBSSTUNDENSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Betriebsstundenzaehler verstanden und akzeptiert (top_w < 10h) |
| 0x01 | Betriebsstundenzaehler verstanden aber nicht akzeptiert (top_w > 10h) |
| 0x02 | Betriebsstundenzaehler nicht verstanden und nicht akzeptiert |
| 0xXY | Betriebsstundenzaehler kann nicht ausgegeben werden |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x2712 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2713 | 0x89 | 0x03 | 0x02 | 0x01 |
| 0x2714 | 0x7B | 0x22 | 0x07 | 0x08 |
| 0x2715 | 0x05 | 0x06 | 0x07 | 0x08 |
| 0x2716 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2717 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x271A | 0x04 | 0x09 | 0x0A | 0x0B |
| 0x271C | 0x88 | 0x22 | 0x02 | 0x08 |
| 0x271D | 0x05 | 0x06 | 0x07 | 0x08 |
| 0x271E | 0x7B | 0x22 | 0x07 | 0x08 |
| 0x2721 | 0x82 | 0x83 | 0x84 | 0x85 |
| 0x2722 | 0x04 | 0x09 | 0x0A | 0x0B |
| 0x2724 | 0x88 | 0x22 | 0x02 | 0x08 |
| 0x2727 | 0x82 | 0x83 | 0x84 | 0x85 |
| 0x2728 | 0x04 | 0x03 | 0x75 | 0x76 |
| 0x2729 | 0x04 | 0x03 | 0x75 | 0x76 |
| 0x272A | 0x04 | 0x03 | 0x75 | 0x76 |
| 0x272B | 0x04 | 0x03 | 0x75 | 0x76 |
| 0x272C | 0x04 | 0x03 | 0x96 | 0x97 |
| 0x272D | 0x04 | 0x03 | 0x96 | 0x97 |
| 0x2731 | 0x72 | 0x03 | 0x71 | 0x01 |
| 0x2732 | 0x72 | 0x03 | 0x71 | 0x01 |
| 0x2737 | 0x1B | 0x1C | 0x1D | 0x1E |
| 0x2738 | 0x7D | 0x03 | 0x02 | 0x01 |
| 0x2739 | 0x7D | 0x03 | 0x02 | 0x01 |
| 0x273A | 0x7D | 0x03 | 0x02 | 0x01 |
| 0x273D | 0x7D | 0x03 | 0x02 | 0x01 |
| 0x2742 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2743 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2744 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2745 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2746 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2747 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2748 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2749 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x274E | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2753 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2754 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2755 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2756 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2757 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2758 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2759 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x275A | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2760 | 0x04 | 0x03 | 0x98 | 0x01 |
| 0x2761 | 0x04 | 0x03 | 0x98 | 0x01 |
| 0x2764 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2765 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2769 | 0x04 | 0x03 | 0x5D | 0x5E |
| 0x276B | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x276D | 0x04 | 0x03 | 0xA1 | 0x01 |
| 0x2772 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2773 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2775 | 0xA4 | 0x03 | 0x02 | 0x01 |
| 0x2778 | 0x04 | 0x81 | 0x02 | 0x01 |
| 0x2779 | 0xB1 | 0x03 | 0x02 | 0x01 |
| 0x277A | 0x2E | 0x03 | 0x02 | 0x01 |
| 0x277B | 0xB2 | 0x03 | 0x02 | 0x01 |
| 0x277C | 0xB3 | 0x03 | 0x02 | 0x01 |
| 0x277D | 0xA3 | 0x03 | 0x51 | 0x50 |
| 0x277E | 0x8D | 0x03 | 0x02 | 0x01 |
| 0x277F | 0x04 | 0x22 | 0x02 | 0x01 |
| 0x2780 | 0x2D | 0x03 | 0x02 | 0x01 |
| 0x2781 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x2782 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x2783 | 0x04 | 0x03 | 0x39 | 0x38 |
| 0x2785 | 0x23 | 0x03 | 0x02 | 0x01 |
| 0x2786 | 0x26 | 0x03 | 0x25 | 0x24 |
| 0x2787 | 0x27 | 0x03 | 0x25 | 0x24 |
| 0x2788 | 0x04 | 0xB6 | 0x02 | 0x01 |
| 0x278A | 0xA2 | 0x03 | 0x02 | 0x01 |
| 0x278B | 0x9E | 0x9F | 0x9C | 0x9D |
| 0x278C | 0x04 | 0x03 | 0x9C | 0x9D |
| 0x278D | 0x04 | 0x03 | 0x9C | 0x9D |
| 0x278E | 0x04 | 0x03 | 0x39 | 0x38 |
| 0x2791 | 0x63 | 0x03 | 0x02 | 0x01 |
| 0x2792 | 0x5F | 0x03 | 0x02 | 0x01 |
| 0x2793 | 0x04 | 0x03 | 0x61 | 0x62 |
| 0x2794 | 0x5C | 0x03 | 0x02 | 0x01 |
| 0x2795 | 0x04 | 0x03 | 0x5A | 0x5B |
| 0x2796 | 0x64 | 0x03 | 0x02 | 0x01 |
| 0x2797 | 0x68 | 0x03 | 0x02 | 0x01 |
| 0x2798 | 0x60 | 0x03 | 0x02 | 0x01 |
| 0x2799 | 0x04 | 0x03 | 0x65 | 0x66 |
| 0x279A | 0x67 | 0x03 | 0x02 | 0x01 |
| 0x279B | 0x04 | 0x03 | 0xA0 | 0x01 |
| 0x279C | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x279D | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x279E | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x279F | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A0 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A4 | 0x18 | 0x19 | 0x1A | 0x01 |
| 0x27A6 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A7 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A8 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A9 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AA | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AB | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AC | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AD | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B3 | 0x04 | 0x03 | 0x6F | 0x70 |
| 0x27B4 | 0x3F | 0x03 | 0x39 | 0x38 |
| 0x27B5 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B6 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B7 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B8 | 0x04 | 0x03 | 0x90 | 0x91 |
| 0x27BA | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27BB | 0x2C | 0x03 | 0x2B | 0x2A |
| 0x27BC | 0x2C | 0x03 | 0x2B | 0x2A |
| 0x27BD | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27BE | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27BF | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x27C0 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x27C1 | 0x04 | 0x94 | 0x02 | 0x01 |
| 0x27C2 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27C3 | 0x15 | 0x16 | 0x17 | 0x01 |
| 0x27CA | 0x04 | 0x03 | 0x02 | 0x08 |
| 0x27CB | 0x04 | 0x03 | 0x3A | 0x01 |
| 0x27CC | 0x04 | 0x03 | 0x29 | 0x28 |
| 0x27CD | 0x3E | 0x3D | 0x3C | 0x3B |
| 0x27CE | 0xA6 | 0xA7 | 0xA8 | 0x01 |
| 0x27D5 | 0x04 | 0x03 | 0x86 | 0x87 |
| 0x27D9 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27DA | 0x0C | 0x0D | 0x02 | 0x0E |
| 0x27DC | 0x04 | 0x1F | 0x20 | 0x21 |
| 0x27E1 | 0xB0 | 0x03 | 0x02 | 0x01 |
| 0x27E2 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E3 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E4 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E5 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E6 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27E7 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27E8 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27E9 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27EC | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x27ED | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x27EE | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x27EF | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x27F2 | 0x77 | 0x78 | 0x79 | 0x7A |
| 0x27F5 | 0x37 | 0x2F | 0x02 | 0x01 |
| 0x27F6 | 0x74 | 0x03 | 0x02 | 0x01 |
| 0x27F7 | 0x73 | 0x03 | 0x51 | 0x50 |
| 0x27F8 | 0x04 | 0x03 | 0x51 | 0x50 |
| 0x27F9 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27FA | 0x04 | 0x9A | 0x02 | 0x01 |
| 0x27FB | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27FD | 0x04 | 0x99 | 0x02 | 0x01 |
| 0x27FE | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27FF | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x2811 | 0x35 | 0x03 | 0x34 | 0x33 |
| 0x2813 | 0xA9 | 0xAA | 0xAB | 0xAC |
| 0x2814 | 0xAD | 0xAE | 0x02 | 0x01 |
| 0x2815 | 0x04 | 0x03 | 0x02 | 0xAF |
| 0x2816 | 0xA5 | 0x03 | 0x02 | 0x01 |
| 0x281E | 0x9B | 0x03 | 0x02 | 0x01 |
| 0x2820 | 0xB8 | 0xB9 | 0xBA | 0xBB |
| 0x2821 | 0x04 | 0x03 | 0xBC | 0x01 |
| 0x2823 | 0x7C | 0x03 | 0x02 | 0x01 |
| 0x2824 | 0x7C | 0x03 | 0x02 | 0x01 |
| 0x2828 | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x2829 | 0x32 | 0x2F | 0x02 | 0x01 |
| 0x282A | 0x04 | 0x2F | 0x02 | 0x01 |
| 0x282B | 0x04 | 0x2F | 0x02 | 0x01 |
| 0x282C | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x283A | 0x11 | 0x12 | 0x13 | 0x14 |
| 0x283D | 0x35 | 0x03 | 0x34 | 0x33 |
| 0x283E | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x283F | 0x95 | 0x03 | 0x02 | 0x01 |
| 0x2841 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x284F | 0xB4 | 0x03 | 0x02 | 0xB5 |
| 0x2850 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2851 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2852 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2853 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2854 | 0x44 | 0x45 | 0x02 | 0x01 |
| 0x2855 | 0x44 | 0x45 | 0x02 | 0x01 |
| 0x2856 | 0x04 | 0x03 | 0x46 | 0x47 |
| 0x2857 | 0x04 | 0x03 | 0x46 | 0x47 |
| 0x2858 | 0x04 | 0x53 | 0x54 | 0x55 |
| 0x2859 | 0x04 | 0x53 | 0x54 | 0x55 |
| 0x285A | 0x56 | 0x57 | 0x58 | 0x01 |
| 0x285B | 0x56 | 0x57 | 0x58 | 0x01 |
| 0x285C | 0x32 | 0x48 | 0x02 | 0x49 |
| 0x285D | 0x32 | 0x48 | 0x02 | 0x49 |
| 0x285E | 0x4A | 0x4B | 0x4C | 0x4D |
| 0x285F | 0x4A | 0x4B | 0x4C | 0x4D |
| 0x2860 | 0x4E | 0x4F | 0x07 | 0x08 |
| 0x2861 | 0x4E | 0x4F | 0x07 | 0x08 |
| 0x2862 | 0x52 | 0x03 | 0x51 | 0x50 |
| 0x2863 | 0x52 | 0x03 | 0x51 | 0x50 |
| 0x2864 | 0x04 | 0x22 | 0x07 | 0x01 |
| 0x2865 | 0x04 | 0x69 | 0x6A | 0x6B |
| 0x2866 | 0x04 | 0x03 | 0x02 | 0x59 |
| 0x2867 | 0xC0 | 0xBF | 0xBE | 0xBD |
| 0x2868 | 0xC0 | 0xBF | 0xBE | 0xBD |
| 0x28D4 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x28D5 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x28D6 | 0x36 | 0x03 | 0x02 | 0x01 |
| 0x28D7 | 0x0F | 0x10 | 0x02 | 0x01 |
| 0x28D8 | 0x04 | 0x03 | 0x8E | 0x8F |
| 0x28DB | 0x04 | 0x03 | 0x02 | 0x01 |
| 0xFFFF | 0x04 | 0x03 | 0x02 | 0x01 |

### FARTTXT_ERW

| ARTNR | TEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x03 | kein Signal oder Wert |
| 0x04 | unplausibles Signal oder Wert |
| 0x05 | @mangelnde Signalbereitschaft@ |
| 0x06 | @Lastabfall@ |
| 0x07 | @Kurzschluss nach Minus@ |
| 0x08 | @Kurzschluss nach Plus@ |
| 0x09 | @Heizereinkopplung Signalpfad@ |
| 0x0A | @geringe Signaldynamik@ |
| 0x0B | @Signal-Offset@ |
| 0x0C | @Fehler mechanisch@ |
| 0x0D | @Fehler elektrisch@ |
| 0x0E | @Uebertemperatur@ |
| 0x0F | @Generatortyp unplausibel@ |
| 0x10 | @Kommunikationsverlust@ |
| 0x11 | @Messfehler Oelzustand@ |
| 0x12 | @Kommunikationsfehler BSD@ |
| 0x13 | @Messfehler Oelniveau@ |
| 0x14 | @Messfehler Oeltemperatur@ |
| 0x15 | @Signal unplausibel@ |
| 0x16 | @Signal abgefallen@ |
| 0x17 | @Warnschwelle Oelverlust ausgeloest@ |
| 0x18 | @Empfangsfehler serielle Schnittstelle (Paritybit > 3x)@ |
| 0x19 | @Timeout EWS-Telegramm (kein Signal innerhalb 10s nach Kl.15 ein)@ |
| 0x1A | @Empfangsfehler serielle Schnittstelle (Frame- oder Stopbit > 3x)@ |
| 0x1B | @WC passt nicht zum erwarteten WC (Fangbereichsueberschreitung)@ |
| 0x1C | @falscher Startwert vorhanden (Manipulation bei STW Progr./Ruecksetzen)@ |
| 0x1D | @noch kein Startwert programmiert@ |
| 0x1E | @Startwert nicht eindeutig erkennbar (Fehler in 2-aus-3-Auswahl)@ |
| 0x1F | @Schreibfehler EEPROM (3 Fehlversuche beim Schreiben ins EEPROM)@ |
| 0x20 | @WC-Ablage fehlerhaft im EXRAM (2-aus-3-Auswahl)@ |
| 0x21 | @Lesefehler EEPROM (3 Fehlversuche beim Lesen aus EEPROM)@ |
| 0x22 | Leitungsunterbrechung |
| 0x23 | @Fehler DK-Poti 1 oder DK-Poti 2@ |
| 0x24 | @Bereichsverletzung Poti nach oben@ |
| 0x25 | @Bereichsverletzung Poti nach unten@ |
| 0x26 | @Drosselklappenpotentiometer 1 unplausibel zur Luftmasse@ |
| 0x27 | @Drosselklappenpotentiometer 2 unplausibel zur Luftmasse@ |
| 0x28 | @Grobleck@ |
| 0x29 | @Feinleck@ |
| 0x2A | @VANOS hat Spaetposition nicht erreicht@ |
| 0x2B | @VANOS hat Fruehposition nicht erreicht@ |
| 0x2C | @VANOS hat unplausible Position@ |
| 0x2D | @Kurbelwellen-Zahnfehler oder Lueckenverlust@ |
| 0x2E | @Pruefresultat unplausibel@ |
| 0x2F | @Timeout abgelaufen@ |
| 0x30 | @Alive-Fehler@ |
| 0x31 | @Plausibilitaetfehler@ |
| 0x32 | @Alive oder Plausibilitaetfehler@ |
| 0x33 | @CAN Baustein im Zustand Passiv@ |
| 0x34 | @DPRAM von CAN Baustein defekt@ |
| 0x35 | @CAN Baustein Bus off oder Bus defekt@ |
| 0x36 | @DME noch nicht codiert@ |
| 0x37 | @fehlerhafte Botschaft@ |
| 0x38 | @Signal oberhalb Schwelle oder Kurzschluss nach Plus@ |
| 0x39 | @Signal unterhalb Schwelle oder Kurzschluss nach Minus@ |
| 0x3A | @Kleinstleck erkannt @ |
| 0x3B | @obere Schwelle Pumpenstrom bei Referenzmessung@ |
| 0x3C | @untere Schwelle Pumpenstrom bei Referenzmessung@ |
| 0x3D | @Abbruch wegen Stromschwankungen bei Feinleckpruefung@ |
| 0x3E | @Pumpenstromschwelle bei Ventilpruefung erreicht@ |
| 0x3F | @Sensorwert unplausibel@ |
| 0x40 | @Magnet loss@ |
| 0x41 | @Resetfehler@ |
| 0x42 | @Parityfehler@ |
| 0x43 | @Gradientenfehler@ |
| 0x44 | @Sensoren unplausibel@ |
| 0x45 | @Datenkonfirmitaet@ |
| 0x46 | @Sensorspannung zu gering@ |
| 0x47 | @Sensorspannung zu hoch@ |
| 0x48 | @Sollwertsbotschaften nicht empfangen@ |
| 0x49 | @VVT-Boschaften nicht empfangen@ |
| 0x4A | @ROM-Test Fehler@ |
| 0x4B | @Stack-Test Fehler@ |
| 0x4C | @RAM-Test Fehler@ |
| 0x4D | @EEPROM-Test Fehler@ |
| 0x4E | @Kurzschluss der Motorleitung@ |
| 0x4F | @Ansteuerungsfehler allgemein@ |
| 0x50 | @Spannung oberhalb Schwelle@ |
| 0x51 | @Spannung unterhalb Schwelle@ |
| 0x52 | @Relaisfehler@ |
| 0x53 | @keine Anschlaege gelernt@ |
| 0x54 | @Fehler unteres Lernfenster@ |
| 0x55 | @Verstellbereich fehlerhaft@ |
| 0x56 | @Drehrichtungserkennung@ |
| 0x57 | @Lagerreglerueberwachung@ |
| 0x58 | @Uebertemperatur@ |
| 0x59 | @Vergleich Abstell- zur Startposition fehlerhaft@ |
| 0x5A | @Fehler bei Pruefung der oeffnenden Feder@ |
| 0x5B | @Fehler bei Pruefung der Rueckstellfeder@ |
| 0x5C | @DKS Ansteuerungsfehler, Endstufe abgeschaltet@ |
| 0x5D | @Fehler Federpruefung oeffnende Feder@ |
| 0x5E | @Feder oeffnet nicht@ |
| 0x5F | @DKS Lageabweichung@ |
| 0x60 | @Fehler bei NLP-Pruefung und Lernen@ |
| 0x61 | @DKS klemmt kurzzeitig@ |
| 0x62 | @DKS klemmt anhaltend@ |
| 0x63 | @DKS-Tauscherkennung ohne Adaption Notluftpunkt@ |
| 0x64 | @Fehler in Urinitialisierung des unteren mech. Anschlags (UMA)@ |
| 0x65 | @Lernverbot unterer mech. Anschlag (UMA) wegen Unterspannung@ |
| 0x66 | @Lernverbot unterer mech. Anschlag (UMA) wegen Umweltbedinungen@ |
| 0x67 | @Fehler bei Wiederhollernen unterer mech. Anschlag (UMA)@ |
| 0x68 | @Fehler bei Verstaerkerabgleich @ |
| 0x69 | @Exzenterwinkel Ueberlast erkennt Fehler@ |
| 0x6A | @Exzenterwinkel faehrt nicht auf Vollhub@ |
| 0x6B | @Drehzahlfuellungsbegrenzung@ |
| 0x6C | @Uebertemperaturabschaltung@ |
| 0x6D | @Kurzschluss nach Minus@ |
| 0x6E | @Kurzschluss nach Plus oder niedere Impedanz @ |
| 0x6F | @Massenstromadaption zu klein@ |
| 0x70 | @Massenstromadaption zu gross@ |
| 0x71 | @Regelanschlag zu lange zu gross@ |
| 0x72 | @Anschlagadaption ausserhalb gueltigen Bereich@ |
| 0x73 | @Gleichlauffehler zwischen Poti1 und Poti2@ |
| 0x74 | @Poti1 oder Poti2 fehlerhaft oder ausserhalb der Toleranzen@ |
| 0x75 | @untere Plausibilitaetsschwelle unterschritten@ |
| 0x76 | @obere Plausibilitaetsschwelle ueberschritten@ |
| 0x77 | @Fuellstandssignalwert zum Verbrauchswert unplausibel@ |
| 0x78 | @CAN-Fehler Tankfuellstand@ |
| 0x79 | @Tankfuellstandssignal Tank2 fehlerhaft@ |
| 0x7A | @Tankfuellstandssignal Tank1 fehlerhaft@ |
| 0x7B | @Sondenheizung defekt (Innenwiderstand)@ |
| 0x7C | @zu geringe Schubsignalspannung@ |
| 0x7D | @Katalysatorwirkungsgrad unter Schwellwert@ |
| 0x7E | @Klopfbaustein defekt@ |
| 0x7F | @Motor mechanisch zu laut oder Klopfsensor ausserhalb Toleranz@ |
| 0x80 | @elektrischer Fehler Klopfsensor (Wackelkontakt o. Klopfsensor locker)@ |
| 0x81 | @Signal inaktiv@ |
| 0x82 | @Sonde dynamisch zu langsam@ |
| 0x83 | @Sondenspannung im Schub Schwelle nicht unterschritten@ |
| 0x84 | @Sondenspannung unterschreitet Schwellwert nicht@ |
| 0x85 | @Sondenspannung ueberschreitet Schwellwert nicht@ |
| 0x86 | @LL-Steller Oeffnung zu gross oder Leckluft@ |
| 0x87 | @LL-Steller Oeffnung zu gering@ |
| 0x88 | @Adernschluss oder vergiftete Referenzluft (CSD)@ |
| 0x89 | @vertauschte Lambdasonden@ |
| 0x8A | @Verbrennungsaussetzer mit Zylinderabschaltung@ |
| 0x8B | @Verbrennungsaussetzer im Warmlauf, emissionsverschlechternd@ |
| 0x8C | @Verbrennungsaussetzer betriebswarm, emissionsverschlechternd@ |
| 0x8D | @Momentenueberwachung, Regelgrenze ueberschritten@ |
| 0x8E | @Schreibfehler@ |
| 0x8F | @Lesefehler@ |
| 0x90 | @Differenzdruck zu klein@ |
| 0x91 | @Differenzdruck zu gross@ |
| 0x92 | @unplausible Phasenflankenanzahl@ |
| 0x93 | @Lage der Phasenflanken oder Einbaulage ausserhalb Toleranz@ |
| 0x94 | @keine Masternockenwelle vorhanden@ |
| 0x95 | @Schalter unplausibel@ |
| 0x96 | @Gemisch zu fett@ |
| 0x97 | @Gemisch zu mager@ |
| 0x98 | @Sekundaerluftdurchsatz zu gering@ |
| 0x99 | @keine Drehzahlimpulse erkannt@ |
| 0x9A | @Start in laufendem Motor@ |
| 0x9B | @Fehler Ansteuerung DISA (Kurzschluesse nach Plus oder Minus)@ |
| 0x9C | @Kurzschluss nach Plus oder Leitungsunterbrechung@ |
| 0x9D | @Kurzschluss nach Minus@ |
| 0x9E | @Kuehlwassertemperatur unplausibel gegenueber Modell@ |
| 0x9F | @Kuehlwassertemperatur fuer Lambdaregelungsfreigabe nicht erreicht@ |
| 0xA0 | @Thermostat klemmt@ |
| 0xA1 | @Funktionstest Tankentlueftung nicht in Ordnung@ |
| 0xA2 | @Umgebungstemperatur vom Kombi fehlerhaft@ |
| 0xA3 | @ADC Fehler@ |
| 0xA4 | @Funktionsueberwachung Momentenvergleich@ |
| 0xA5 | @Kurbelwellengeber-, Zuleitungs- oder Steuergeraetefehler@ |
| 0xA6 | @Lastsensor-, Zuleitungs- oder Steuergeraetefehler@ |
| 0xA7 | @VVT-Ventilplausibilisierung@ |
| 0xA8 | @Drucksensorplausibilisierung@ |
| 0xA9 | @Reaktionsueberwachung@ |
| 0xAA | @ADC-Ueberwachung@ |
| 0xAB | @Zuendwinkelueberwachung@ |
| 0xAC | @RL-Ueberwachung@ |
| 0xAD | @DKS-Anschlagueberwachung@ |
| 0xAE | @Variantencodierungsueberwachung@ |
| 0xAF | @TPU-Ueberwachung@ |
| 0xB0 | @Pedalwertgeber-, Zuleitungs- oder Steuergeraetefehler@ |
| 0xB1 | @RAM-Fehler@ |
| 0xB2 | @ROM-Fehler@ |
| 0xB3 | @Reset-Fehler@ |
| 0xB4 | @Geschwindigkeitssignal vom Kombi und DSC nicht kompatibel@ |
| 0xB5 | @Geschwindigkeitssignal vom Kombi fehlerhaft@ |
| 0xB6 | @fehlendes Geschwindigkeitssignal (Hardwaresignal)@ |
| 0xB7 | @Hochimpedanz@ |
| 0xB8 | @Lagerreglerabweichung zu gross@ |
| 0xB9 | @Uebertemperatur DISA-Stellmotor@ |
| 0xBA | @Potisignal unterhalb Diagnosebereich@ |
| 0xBB | @Potisignal oberhalb Diagnosebereich@ |
| 0xBC | @zu starke Erwaermung des Steller@ |
| 0xBD | @Strom E-Motor-Ansteuerung zu hoch@ |
| 0xBE | @Temperatur E-Motor zu hoch@ |
| 0xBF | @Steuergeraetetemperatur zu hoch@ |
| 0xC0 | @Ueberlastschutz VVT-System@ |
| 0xFF | unbekannte Fehlerart |

### N73_BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_FOFR1 | 19 | 0x01 | 0x01 |
| B_KL15 | 3 | 0x01 | 0x01 |
| B_ESTART | 3 | 0x02 | 0x02 |
| B_KUPPL | 3 | 0x04 | 0x04 |
| B_BL | 3 | 0x08 | 0x08 |
| B_BR | 3 | 0x10 | 0x10 |
| B_KO | 3 | 0x80 | 0x80 |
| B_LL | 3 | 0x01 | 0x01 |
| B_VL | 3 | 0x02 | 0x02 |
| B_SBBHK2 | 3 | 0x04 | 0x04 |
| B_SBBHK | 3 | 0x08 | 0x08 |
| B_SBBVK2 | 3 | 0x10 | 0x10 |
| B_SBBVK | 3 | 0x20 | 0x20 |
| B_LR2 | 3 | 0x40 | 0x40 |
| B_LR | 3 | 0x80 | 0x80 |
| B_KD | 4 | 0x04 | 0x04 |
| B_PN | 4 | 0x08 | 0x08 |
| B_ECULOCK | 4 | 0x10 | 0x10 |
| B_TEHB | 4 | 0x20 | 0x20 |
| B_SA | 4 | 0x40 | 0x40 |
| B_LRNRDY | 4 | 0x80 | 0x80 |
| B_NOKATFZ | 3 | 0x01 | 0x01 |
| B_AUTGET | 3 | 0x02 | 0x02 |
| B_ACC | 3 | 0x04 | 0x04 |
| B_ASCPKW | 3 | 0x08 | 0x08 |
| B_ARSVAR | 3 | 0x10 | 0x10 |
| B_TXUGET | 3 | 0x20 | 0x20 |
| B_KOGER | 3 | 0x40 | 0x40 |
| B_AGR | 3 | 0x80 | 0x80 |
| B_MFL | 4 | 0x01 | 0x01 |
| B_AKRFZ | 4 | 0x02 | 0x02 |
| B_KATFZ | 2 | 0x01 | 0x01 |
| B_CDTES | 2 | 0x04 | 0x04 |
| B_CDSLS | 2 | 0x08 | 0x08 |
| B_CDLSV | 2 | 0x20 | 0x20 |
| B_CDHSV | 2 | 0x40 | 0x40 |
| B_CDAGR | 2 | 0x80 | 0x80 |
| B_KATRDY | 3 | 0x01 | 0x01 |
| B_TESRDY | 3 | 0x04 | 0x04 |
| B_SLSRDY | 3 | 0x08 | 0x08 |
| B_LSRDY | 3 | 0x20 | 0x20 |
| B_HSRDY | 3 | 0x40 | 0x40 |
| B_AGRRDY | 3 | 0x80 | 0x80 |
| B_FGRAT | 2 | 0x01 | 0x01 |
| B_FGRHSA | 2 | 0x02 | 0x02 |
| B_FGRTBE | 2 | 0x04 | 0x04 |
| B_FGRTSE | 2 | 0x08 | 0x08 |
| B_FGRTVE | 2 | 0x10 | 0x10 |
| B_FGRTWA | 2 | 0x20 | 0x20 |
| L_FGR | 2 | 0x40 | 0x40 |
| B_ACC_FGR | 2 | 0x80 | 0x80 |
| B_SLV | 21 | 0x02 | 0x02 |
| B_SLP | 21 | 0x04 | 0x04 |
| B_KOE | 21 | 0x08 | 0x08 |
| B_HSVE2 | 21 | 0x10 | 0x10 |
| B_HSVE | 21 | 0x20 | 0x20 |
| B_HSHE2 | 21 | 0x40 | 0x40 |
| B_HSHE | 21 | 0x80 | 0x80 |
| B_AKR | 22 | 0x08 | 0x08 |
| B_EBL | 22 | 0x10 | 0x10 |
| B_EKP | 22 | 0x20 | 0x20 |
| B_ETR | 22 | 0x40 | 0x40 |
| B_STA | 22 | 0x80 | 0x80 |
| B_GAD | 2 | 0x01 | 0x01 |
| Z_LSH | 1 | 0x02 | 0x02 |
| Z_LSH2 | 1 | 0x02 | 0x02 |
| ENDE | 0 | 0x01 | 0x01 |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_KRDWS | 7 | 0x01 | 0x01 |
| B_MIL | 25 | 0x01 | 0x01 |
| B_FS | 10 | 0x01 | 0x01 |
| B_ECULOCK | 6 | 0x01 | 0x01 |
| B_LRNRDY | 7 | 0x01 | 0x01 |
| B_LLTD | 14 | 0x01 | 0x01 |
| B_LLK | 22 | 0x01 | 0x01 |
| B_TEAKT | 25 | 0x01 | 0x01 |
| B_VVTNOTL | 26 | 0x01 | 0x01 |
| B_ATMTPA | 6 | 0x01 | 0x01 |
| B_ATMTPK | 7 | 0x01 | 0x01 |
| B_KH | 16 | 0x01 | 0x01 |
| B_NSUB | 17 | 0x01 | 0x01 |
| B_TE | 18 | 0x01 | 0x01 |

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | MEAS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TSG | 8313F122400C | 0 | 0 | 0x00 | 6 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVAD | 8313F122400C | 0 | 0 | 0x00 | 8 | 7 | -- | 0.00305185 | 0 | 0 | 0 | % |
| DPS | 8313F122400C | 0 | 0 | 0x00 | 10 | 7 | -- | 0.03906247 | 0 | 0 | 0 | hPa |
| DPSRAUS | 8313F122400C | 0 | 0 | 0x00 | 12 | 5 | -- | 5.01945 | 0 | 0 | 0 | hPa |
| FKMSVVT | 8313F122400C | 0 | 0 | 0x00 | 14 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FPRSTEP | 8313F122400C | 0 | 0 | 0x00 | 16 | 2 | -- | 1 | 0 | 0 | 0 |   |
| LRNSTEP | 8313F122400C | 0 | 0 | 0x00 | 17 | 2 | -- | 1 | 0 | 0 | 0 |   |
| MSNVVTO | 8313F122400C | 0 | 0 | 0x00 | 18 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| NNW10 | 8313F122400C | 0 | 0 | 0x00 | 20 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW11 | 8313F122400C | 0 | 0 | 0x00 | 22 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW12 | 8313F122400C | 0 | 0 | 0x00 | 24 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW20 | 8313F122400C | 0 | 0 | 0x00 | 26 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW21 | 8313F122400C | 0 | 0 | 0x00 | 28 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW22 | 8313F122400C | 0 | 0 | 0x00 | 30 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NSOLFASTA | 8313F122400D | 0 | 0 | 0x00 | 6 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| RL | 8313F122400D | 0 | 0 | 0x00 | 8 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| RLSOL | 8313F122400D | 0 | 0 | 0x00 | 10 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| TE | 8313F122400D | 0 | 0 | 0x00 | 12 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| TE2 | 8313F122400D | 0 | 0 | 0x00 | 14 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| VVTSTATUS | 8313F122400D | 0 | 0 | 0x00 | 16 | 5 | -- | 1 | 0 | 0 | 0 |   |
| WDKBAFASTA | 8313F122400D | 0 | 0 | 0x00 | 18 | 7 | -- | 0.02441406 | 0 | 0 | 0 | %DK |
| WDKS | 8313F122400D | 0 | 0 | 0x00 | 20 | 5 | -- | 0.00152588 | 0 | 0 | 0 | % |
| WPED | 8313F122400D | 0 | 0 | 0x00 | 22 | 5 | -- | 0.0015259 | 0 | 0 | 0 | %PED |
| ZWIST | 8313F122400D | 0 | 0 | 0x00 | 24 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DMLLRI | 8313F122400D | 0 | 0 | 0x00 | 26 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| MIMIN | 8313F122400D | 0 | 0 | 0x00 | 28 | 5 | -- | 0.00152588 | 0 | 0 | 0 | % |
| MDGEN | 8313F122400E | 0 | 0 | 0x00 | 6 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| MDKO | 8313F122400E | 0 | 0 | 0x00 | 7 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| DMRLLR | 8313F122400E | 0 | 0 | 0x00 | 8 | 5 | -- | 0.097647 | 0 | 0 | 0 | % |
| MDWAN | 8313F122400E | 0 | 0 | 0x00 | 11 | 5 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DWKR | 8313F122400E | 0 | 0 | 0x00 | 13 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DZWS | 8313F122400E | 0 | 0 | 0x00 | 14 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DFFGEN | 8313F122400E | 0 | 0 | 0x00 | 15 | 2 | -- | 0.3921568 | 0 | 0 | 0 | % |
| TUMG | 8313F122400E | 0 | 0 | 0x00 | 16 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVADFS | 8313F122400E | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DMVADKO | 8313F122400E | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DLAHI | 8313F122400E | 0 | 0 | 0x00 | 21 | 7 | -- | 0.00030518 | 0 | 0 | 0 |   |
| DLAHI2 | 8313F122400E | 0 | 0 | 0x00 | 23 | 7 | -- | 0.00030518 | 0 | 0 | 0 |   |
| RINH | 8313F122400E | 0 | 0 | 0x00 | 25 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RINH2 | 8313F122400E | 0 | 0 | 0x00 | 27 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RKATS | 8313F122400E | 0 | 0 | 0x00 | 29 | 7 | -- | 0.0468749 | 0 | 0 | 0 | % |
| DPSSOL | 8313F122400E | 0 | 0 | 0x00 | 31 | 7 | -- | 0.03906247 | 0 | 0 | 0 | hPa |
| MINHUB | 8313F130A301 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| CO_POT | 8313F122400F | 0 | 0 | 0x00 | 8 | 7 | -- | 1 | 0 | 0 | 0 |   |
| UPWG | 8313F122400F | 0 | 0 | 0x00 | 10 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| MINHUB | 8313F122400F | 0 | 0 | 0x00 | 12 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| GVIST | 8313F122400F | 0 | 0 | 0x00 | 15 | 7 | -- | 0.00195314 | 0 | 0 | 0 |   |
| FTBR | 8313F122400F | 0 | 0 | 0x00 | 17 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| FHO | 8313F122400F | 0 | 0 | 0x00 | 19 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FTVDK | 8313F122400F | 0 | 0 | 0x00 | 21 | 2 | -- | 0.0078125 | 0 | 0 | 0 |   |
| MSNVVTOLL | 8313F122400F | 0 | 0 | 0x00 | 23 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| VSESPRS | 8313F122400F | 0 | 0 | 0x00 | 27 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSE2SPRS | 8313F122400F | 0 | 0 | 0x00 | 29 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSASPRS | 8313F122400F | 0 | 0 | 0x00 | 31 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSA2SPRS | 8313F122400F | 0 | 0 | 0x00 | 33 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| EVHUBI | 8313F1224010 | 0 | 0 | 0x00 | 8 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBI2 | 8313F1224010 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBS | 8313F1224010 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| OFWNKADBG | 8313F1224010 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| DFSERESZ | 8313F1224010 | 0 | 0 | 0x00 | 19 | 5 | -- | 1 | 0 | 0 | 0 |   |
| DMVADFK | 8313F1224010 | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| DMVADLL | 8313F1224010 | 0 | 0 | 0x00 | 23 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| EXWINKI | 8313F1224010 | 0 | 0 | 0x00 | 25 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKI2 | 8313F1224010 | 0 | 0 | 0x00 | 27 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKS | 8313F1224010 | 0 | 0 | 0x00 | 29 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| FKMSVVTA | 8313F1224011 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FOFRESZ | 8313F1224011 | 0 | 0 | 0x00 | 8 | 5 | -- | 1 | 0 | 0 | 0 |   |
| MSDIF | 8313F1224011 | 0 | 0 | 0x00 | 10 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| TABGM | 8313F1224011 | 0 | 0 | 0x00 | 12 | 2 | -- | 5 | -50 | 0 | 0 | Grad C |
| TNSE | 8313F1224011 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.1 | 0 | 0 | 0 | s |
| OZRWPERM | 8313F1224011 | 0 | 0 | 0x00 | 15 | 7 | -- | 10 | 0 | 0 | 0 |   |
| OZRWKVB | 8313F1224011 | 0 | 0 | 0x00 | 17 | 7 | -- | 10 | 0 | 0 | 0 |   |
| OZPERMLOW | 8313F1224011 | 0 | 0 | 0x00 | 27 | 5 | -- | 0.00009155 | 0 | 0 | 0 |   |
| OZPERMEX | 8313F1224011 | 0 | 0 | 0x00 | 29 | 5 | -- | 0.00009155 | 0 | 0 | 0 |   |
| OZPERMOFF | 8313F1224011 | 0 | 0 | 0x00 | 31 | 7 | -- | 0.00018311 | 0 | 0 | 0 |   |
| OZKVBOG | 8313F1224011 | 0 | 0 | 0x00 | 33 | 7 | -- | 1 | 0 | 0 | 0 |   |
| OZPERMBOG | 8313F1224011 | 0 | 0 | 0x00 | 35 | 7 | -- | 0.00009155 | 0 | 0 | 0 |   |
| NADMTLL | 8313F1224012 | 0 | 0 | 0x00 | 6 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NTGLM | 8313F1224012 | 0 | 0 | 0x00 | 8 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NTKLM | 8313F1224012 | 0 | 0 | 0x00 | 10 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NDIPFRO | 8313F1224012 | 0 | 0 | 0x00 | 12 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NKFL | 8313F1224012 | 0 | 0 | 0x00 | 14 | 2 | -- | 1 | 0 | 0 | 0 |   |
| UULSUV | 8313F1224003 | 0 | 0 | 0x00 | 23 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UULSUV2 | 8313F1224003 | 0 | 0 | 0x00 | 25 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK2 | 8313F1304501 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK | 8313F1304801 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| RKAT | 8313F1224004 | 0 | 0 | 0x00 | 6 | 7 | -- | 0.0468 | 0 | 0 | 0 | % |
| RKAT2 | 8313F1224004 | 0 | 0 | 0x00 | 8 | 7 | -- | 0.0468 | 0 | 0 | 0 | % |
| FRA | 8313F1224004 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| FRA2 | 8313F1224004 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| FR_W | 8313F1224000 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0000305 | 0 | 0 | 0 |   |
| FR2_W | 8313F1224000 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0000305 | 0 | 0 | 0 |   |
| ENDE |  |  |  |  | 1 | 1 | -- | 1 | 0 | 0 | 0 |   |

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
