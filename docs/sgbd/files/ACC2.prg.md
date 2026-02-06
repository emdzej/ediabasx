# ACC2.prg

## General

|  |  |
| --- | --- |
| File | ACC2.prg |
| Type | PRG |
| Jobs | 69 |
| Tables | 23 |
| Origin | BMW EF-62 Freistadt |
| Revision | 2.03 |
| Author | BERTRANDT Florian Postl, BMW TI-431 Helmich |
| ECU Comment | Prototyp fuer E60 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Active Cruise Control 2.Gen E6x |  |  |
| ORIGIN | string | BMW EF-62 Freistadt |  |  |
| REVISION | string | 2.03 |  |  |
| AUTHOR | string | BERTRANDT Florian Postl, BMW TI-431 Helmich |  |  |
| COMMENT | string | Prototyp fuer E60 |  |  |
| PACKAGE | string | 1.30 |  |  |
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

### CODIERDATEN_LESEN

Lesen der Codierdaten

_No arguments._

### STEUERN_EOL_EIN

Sonderfunktionen fuer Bandende aktivieren Modi: Default

_No arguments._

### STEUERN_EOL_AUS

Sonderfunktionen fuer Rollenpruefstand deaktivieren Modi: Default

_No arguments._

### STATUS_EOL_KONFIGURATION_LESEN

Lesen der Bandende-Konfiguration Modi: Default

_No arguments._

### LENKWINKELOFFSET_RESET

Den automatisch erkannten Offset des Lenkradwinkels auf Null setzen Modi: Default

_No arguments._

### STATUS_DYNAMISCHE_DATEN_LESEN

Dynamische RPU-Daten lesen

_No arguments._

### READ_NAVI_DATA

Navigations Daten lesen

_No arguments._

### STATUS_RADARZIEL

Radarziel auslesen Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| D_MIN | int | 0...150 m |
| D_MAX | int | 0...150 m |
| V_MIN | int | -60 m/s ... 60 m/s |
| V_MAX | int | -60 m/s ... 60 m/s |

### STATUS_RADARZIEL_ONLINE

Radarziel waehrend der Fahrt auslesen Modus: Default

_No arguments._

### STATUS_AMPLITUDEN

Amplitudenwerte lesen, Argument: 0x00 Messmodus, 0x01 Messung, 0x02 Fahrmodus Modus: BMW-Default

| Name | Type | Description |
| --- | --- | --- |
| MODUS | int | 0x00 Messmodus, 0x01 Messung, 0x02 Fahrmodus |
| DISTANZ | int | Erlaubter Bereich: 50..255cm |

### STATUS_DYN_DATEN_DEJU_LESEN

Lesen von Dejustage und Verschmutzungsinformationen

_No arguments._

### STEUERN_DYN_DATEN_DEJU_RESET

Reset der Dynamischen Daten SPU Modi: Default

_No arguments._

### STEUERN_DYN_DATEN_DEJU_SCHREIBEN

Schreiben der dynamischen Dejustagedaten KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default - Offline

| Name | Type | Description |
| --- | --- | --- |
| DEJUST_ANGLE | real | Dejustagewinkel in Grad Bereich: -57 bis +57 [Grad] |
| DEJUST_PLAUSIBILITY | real | Plausibilitaet des Dejustagewinkels Bereich: 0 bis 1 [-] |
| BLINDNESS_COUNTER | real | Blindheitszaehler Bereich: 0 bis 32768 [-] |

### TESTCHECKSUMCODIERDATEN

Test der Checksumme der Codierdaten Modi: Default

_No arguments._

### JUSTAGEKENNLINIE_LESEN

Auslesen der Steilheiten der vertikalen und horizontalen Justagekennlinien im linearen Bereich Modus: Default

_No arguments._

### C_CHECKSUM

Berechnung und Rueckgabe der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_CHECKSUM_BYTE

Berechnung und Rueckgabe der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### FAHRZEUGTYP_LESEN

Einlesen des Fahrzeug Typs ab Codierindex >= 34

_No arguments._

### LESE_AKTUELLES_AIF

Aktuelle AIF Felder auslesen

_No arguments._

### HISTORY_LESEN

Historyspeicher ausgeben

_No arguments._

### HISTORY_LOESCHEN

Historyspeicher loeschen

_No arguments._

### EEPROM_LESEN

Lesen des EEPROMs

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_ID | int | Nummer des EEPROM-Blockes |
| ZAHL_BYTES | int | Anzahl der auszulesenden Bytes |

### FESTUS_MODE_LESEN

Lesen der Freigabemaske CAN Botschaften KWP2000: $21 ReadDataByLocalIdentifier Modus  : Developer  Bit Maske xxyyzzzzb Messung CAN Botschaften

_No arguments._

### FESTUS_MODE_SCHREIBEN

Schreiben der Freigabemaske CAN Botschaften KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default  Bit Maske xxyyzzzzb Messung CAN Botschaften 3 Argumente (4 mit RESERVED_... ) jeweils als Hex oder Integer Wert

| Name | Type | Description |
| --- | --- | --- |
| EOCANM_B0_3 | int | zzzzb Ausgabe von ACC_Sx Botschaften auf CAN (Wertebereich 0-3) 0     ACC2 Messbotschaften ausgeschaltet (Serie) 1     8 RPU ACC2 Messbotschaften eingeschaltet (Standard 1) 2     5 RPU und 3 LRR ACC2 Messbotschaften eingeschaltet (Standard 2) 3     Standard 3 4     tbd ... 15    tbd |
| EOCANM_B4_5 | int | yyb   Ausgabe von CCP Botschaften auf CAN (Wertebereich 0-1) 0     Ausgabe von CCP Botschaften auf CAN2: Aus 1     Ausgabe von CCP Botschaften auf CAN2: Ein 2     tbd 3     tbd |
| EOCANM_B6_7 | int | xxb   Ausgabe von Radar Info Botschaften auf CAN (Wertebereich 0-1) 0     Ausgabe von Radar Info Botschaften auf CAN2: Aus 1     Ausgabe von Radar Info Botschaften auf CAN2: Ein 2     tbd 3     tbd |
| RESERVED_FOR_FUTURE_USE | int | Reserviert fuer zukuenftige Argumente |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | Steuergeraetefehler |
| 0x5D0E | Betriebsspannung |
| 0x5D0F | Fehler Linsenheizung |
| 0x5D10 | Codierdaten fehlerhaft |
| 0x5D14 | Sensor dejustiert |
| 0x5D25 | Temperaturabschaltung SCU |
| 0xD147 | Fehler CAN-Controller |
| 0xD17C | Fehlerwert erhalten |
| 0xD17D | unplausibles Signal empfangen |
| 0xD17E | CAN-Timeout beim Empfang |
| 0xD181 | unplausibles Signal gesendet |
| 0xCD35 | ACC Sicherheitsabschaltung Bremsueberhitzung |
| 0xCD36 | Fehler Umsetzung ACC-Sollwert durch Motor und Getriebe |
| 0xCD37 | Fehler Umsetzung Beschleunigungssollwert im Bremsfall |
| 0xCD38 | ACC von Partnersteuergeraet nicht erkannt |
| 0xCD39 | ACC temporär nicht verfügbar wegen DSC Initialisierung oder Unterspannung |
| 0xCD3A | Zeitüberschreitung Navi-Modul im ACC |
| 0xCD40 | Hinweis: Fehler im LDM |
| 0xCD41 | Kein LDM erkannt |
| 0xCD42 | Hinweis: Bordnetzspannung < 11 Volt |
| 0xXY | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 0xCD38 | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0xCD39 | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0xD17C | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0xD17D | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0xD17E | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0xD181 | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0xD182 | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| 0x5D0F | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |
| default | ANALOG | DIGITAL | ZUSAETZE1 | ZUSAETZE2 | - |

### ANALOG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x01 | 0x02 | 0x03 | 0x04 |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x05 | 0x06 | 0x07 | 0x08 |

### ZUSAETZE1

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x09 |

### ZUSAETZE2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0A | 0x0B |

### DEGRAD

| WERT | UWTEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | wenig |
| 0x02 | mittel |
| 0x03 | stark |
| 0xXY | unplausibel |

### NAVISTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0 | werden ignoriert |
| 0x1 | werden betrachtet |
| 0x10 | werden betrachtet |
| 0xX | unplausibel |

### LENSSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0 | sauber |
| 0x1 | verschmutzt |
| 0x8 | verschmutzt |
| 0xX | unplausibel |

### LENSHEATING

| WERT | UWTEXT |
| --- | --- |
| 0x0 | nicht aktiv |
| 0x1 | aktiv |
| 0x4 | aktiv |
| 0xX | unplausibel |

### CANID

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | 0 (0x0000) - keine Information vorhanden |
| 0x00A8 | 168 (0x00A8) - Drehmoment_1 (DDE,DME) |
| 0x00A9 | 169 (0x00A9) - Drehmoment_2 (DDE,DME) |
| 0x00AA | 170 (0x00AA) - Drehmoment_3 (DDE,DME) |
| 0x00AD | 173 (0x00AD) - Verzoegerungsanforderung_ACC (ACC) |
| 0x00AE | 174 (0x00AE) - Verzoegerungsanforderung_EMF (EMF) |
| 0x00B7 | 183 (0x00B7) - Drehmomentanforderung_ACC (ACC) |
| 0x00BA | 186 (0x00BA) - Getriebedaten (DKG,EGS,SMG) |
| 0x00BB | 187 (0x00BB) - Sollmomentanforderung (DXC) |
| 0x00C4 | 196 (0x00C4) - Lenkradwinkel (DSC,DXC) |
| 0x00CE | 206 (0x00CE) - Radgeschwindigkeit (DSC,DXC) |
| 0x0130 | 304 (0x0130) - Klemmenstatus (CAS) |
| 0x0150 | 336 (0x0150) - Anforderung_1_ACC (LDM) |
| 0x0153 | 339 (0x0153) - Anforderung_2_ACC (LDM) |
| 0x0159 | 345 (0x0159) - Objektdaten_ACC (ACC) |
| 0x015C | 348 (0x015C) - Status_ACC (ACC) |
| 0x0190 | 400 (0x0190) - Anzeige_ACC (ACC) |
| 0x0194 | 404 (0x0194) - Bedienung_Tempomat/ACC (SZL) |
| 0x019E | 414 (0x019E) - Status_DSC (DSC,DXC) |
| 0x01A0 | 416 (0x01A0) - Geschwindigkeit (DSC,DXC) |
| 0x01B4 | 436 (0x01B4) - Status_Kombi (Kombi) |
| 0x01D0 | 464 (0x01D0) - Motordaten (DDE,DME) |
| 0x01D2 | 466 (0x01D2) - Anzeige_Getriebedaten (DKG,EGS,SMG) |
| 0x01F6 | 502 (0x01F6) - Blinken (LM) |
| 0x021A | 538 (0x021A) - Lampenzustand (LM) |
| 0x0226 | 550 (0x0226) - Regensensor-Wischergeschwindigkeit (RLS) |
| 0x024A | 586 (0x024A) - Status_PDC (PDC) |
| 0x0278 | 632 (0x0278) - Navigationsgraph (CCC) |
| 0x027A | 634 (0x027A) - Synchronisation_Navigationsgraph (CCC) |
| 0x02B2 | 690 (0x02B2) - Raddruecke (DSC,DXC) |
| 0x02E4 | 740 (0x02E4) - Status_Anhaenger (AHM) |
| 0x02F8 | 760 (0x02F8) - Uhrzeit/Datum (Kombi) |
| 0x02FA | 762 (0x02FA) - Sitzbelegung_Gurtkontakte (SBSL,SBSR) |
| 0x0310 | 784 (0x0310) - Aussentemperatur/Relativzeit (Kombi) |
| 0x0330 | 816 (0x0330) - Kilometerstand/Reichweite (Kombi) |
| 0x0332 | 818 (0x0332) - Fahreranzeige_Drehzahlbereich (DDE,DME) |
| 0x0348 | 840 (0x0348) - Uebereinstimmung_Navigationsgraph (CCC) |
| 0x034A | 842 (0x034A) - Navigation_GPS_1 (CCC) |
| 0x034C | 844 (0x034C) - Navigation_GPS_2 (CCC) |
| 0x034E | 846 (0x034E) - Navigation_System_Information (CCC) |
| 0x0374 | 884 (0x0374) - Radtoleranzabgleich (DSC,DXC) |
| 0x0388 | 904 (0x0388) - Fahrzeugtyp (CAS) |
| 0x0398 | 920 (0x0398) - Bedienung_Fahrwerk (CCC,M_ASK) |
| 0x03B0 | 944 (0x03B0) - Status_Gang_Rueckwaerts (LM) |
| 0x0480 | 1152 (0x0480) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0481 | 1153 (0x0481) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0482 | 1154 (0x0482) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0483 | 1155 (0x0483) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0484 | 1156 (0x0484) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0485 | 1157 (0x0485) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0486 | 1158 (0x0486) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0487 | 1159 (0x0487) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0488 | 1160 (0x0488) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0489 | 1161 (0x0489) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x048A | 1162 (0x048A) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x048B | 1163 (0x048B) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x048C | 1164 (0x048C) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x048D | 1165 (0x048D) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x048E | 1166 (0x048E) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x048F | 1167 (0x048F) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0490 | 1168 (0x0490) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0491 | 1169 (0x0491) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0492 | 1170 (0x0492) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0493 | 1171 (0x0493) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0494 | 1172 (0x0494) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0495 | 1173 (0x0495) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0496 | 1174 (0x0496) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0497 | 1175 (0x0497) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0498 | 1176 (0x0498) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0499 | 1177 (0x0499) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x049A | 1178 (0x049A) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x049B | 1179 (0x049B) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x049C | 1180 (0x049C) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x049D | 1181 (0x049D) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x049E | 1182 (0x049E) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x049F | 1183 (0x049F) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A0 | 1184 (0x04A0) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A1 | 1185 (0x04A1) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A2 | 1186 (0x04A2) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A3 | 1187 (0x04A3) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A4 | 1188 (0x04A4) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A5 | 1189 (0x04A5) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A6 | 1190 (0x04A6) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A7 | 1191 (0x04A7) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A8 | 1192 (0x04A8) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04A9 | 1193 (0x04A9) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04AA | 1194 (0x04AA) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04AB | 1195 (0x04AB) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04AC | 1196 (0x04AC) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04AD | 1197 (0x04AD) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04AE | 1198 (0x04AE) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04AF | 1199 (0x04AF) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B0 | 1200 (0x04B0) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B1 | 1201 (0x04B1) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B2 | 1202 (0x04B2) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B3 | 1203 (0x04B3) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B4 | 1204 (0x04B4) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B5 | 1205 (0x04B5) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B6 | 1206 (0x04B6) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B7 | 1207 (0x04B7) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B8 | 1208 (0x04B8) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04B9 | 1209 (0x04B9) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04BA | 1210 (0x04BA) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04BB | 1211 (0x04BB) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04BC | 1212 (0x04BC) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04BD | 1213 (0x04BD) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04BE | 1214 (0x04BE) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04BF | 1215 (0x04BF) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C0 | 1216 (0x04C0) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C1 | 1217 (0x04C1) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C2 | 1218 (0x04C2) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C3 | 1219 (0x04C3) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C4 | 1220 (0x04C4) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C5 | 1221 (0x04C5) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C6 | 1222 (0x04C6) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C7 | 1223 (0x04C7) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C8 | 1224 (0x04C8) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04C9 | 1225 (0x04C9) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04CA | 1226 (0x04CA) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04CB | 1227 (0x04CB) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04CC | 1228 (0x04CC) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04CD | 1229 (0x04CD) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04CE | 1230 (0x04CE) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04CF | 1231 (0x04CF) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D0 | 1232 (0x04D0) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D1 | 1233 (0x04D1) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D2 | 1234 (0x04D2) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D3 | 1235 (0x04D3) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D4 | 1236 (0x04D4) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D5 | 1237 (0x04D5) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D6 | 1238 (0x04D6) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D7 | 1239 (0x04D7) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D8 | 1240 (0x04D8) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04D9 | 1241 (0x04D9) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04DA | 1242 (0x04DA) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04DB | 1243 (0x04DB) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04DC | 1244 (0x04DC) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04DD | 1245 (0x04DD) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04DE | 1246 (0x04DE) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04DF | 1247 (0x04DF) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E0 | 1248 (0x04E0) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E1 | 1249 (0x04E1) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E2 | 1250 (0x04E2) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E3 | 1251 (0x04E3) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E4 | 1252 (0x04E4) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E5 | 1253 (0x04E5) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E6 | 1254 (0x04E6) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E7 | 1255 (0x04E7) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E8 | 1256 (0x04E8) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04E9 | 1257 (0x04E9) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04EA | 1258 (0x04EA) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04EB | 1259 (0x04EB) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04EC | 1260 (0x04EC) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04ED | 1261 (0x04ED) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04EE | 1262 (0x04EE) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04EF | 1263 (0x04EF) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F0 | 1264 (0x04F0) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F1 | 1265 (0x04F1) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F2 | 1266 (0x04F2) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F3 | 1267 (0x04F3) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F4 | 1268 (0x04F4) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F5 | 1269 (0x04F5) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F6 | 1270 (0x04F6) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F7 | 1271 (0x04F7) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F8 | 1272 (0x04F8) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04F9 | 1273 (0x04F9) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04FA | 1274 (0x04FA) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04FB | 1275 (0x04FB) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04FC | 1276 (0x04FC) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04FD | 1277 (0x04FD) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04FE | 1278 (0x04FE) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x04FF | 1279 (0x04FF) - Netzwerkmanagement PT-CAN (Diverse Sender) |
| 0x0580 | 1408 (0x0580) - Dienste (Diverse Sender) |
| 0x0581 | 1409 (0x0581) - Dienste (Diverse Sender) |
| 0x0582 | 1410 (0x0582) - Dienste (Diverse Sender) |
| 0x0583 | 1411 (0x0583) - Dienste (Diverse Sender) |
| 0x0584 | 1412 (0x0584) - Dienste (Diverse Sender) |
| 0x0585 | 1413 (0x0585) - Dienste (Diverse Sender) |
| 0x0586 | 1414 (0x0586) - Dienste (Diverse Sender) |
| 0x0587 | 1415 (0x0587) - Dienste (Diverse Sender) |
| 0x0588 | 1416 (0x0588) - Dienste (Diverse Sender) |
| 0x0589 | 1417 (0x0589) - Dienste (Diverse Sender) |
| 0x058A | 1418 (0x058A) - Dienste (Diverse Sender) |
| 0x058B | 1419 (0x058B) - Dienste (Diverse Sender) |
| 0x058C | 1420 (0x058C) - Dienste (Diverse Sender) |
| 0x058D | 1421 (0x058D) - Dienste (Diverse Sender) |
| 0x058E | 1422 (0x058E) - Dienste (Diverse Sender) |
| 0x058F | 1423 (0x058F) - Dienste (Diverse Sender) |
| 0x0590 | 1424 (0x0590) - Dienste (Diverse Sender) |
| 0x0591 | 1425 (0x0591) - Dienste (Diverse Sender) |
| 0x0592 | 1426 (0x0592) - Dienste (Diverse Sender) |
| 0x0593 | 1427 (0x0593) - Dienste (Diverse Sender) |
| 0x0594 | 1428 (0x0594) - Dienste (Diverse Sender) |
| 0x0595 | 1429 (0x0595) - Dienste (Diverse Sender) |
| 0x0596 | 1430 (0x0596) - Dienste (Diverse Sender) |
| 0x0597 | 1431 (0x0597) - Dienste (Diverse Sender) |
| 0x0598 | 1432 (0x0598) - Dienste (Diverse Sender) |
| 0x0599 | 1433 (0x0599) - Dienste (Diverse Sender) |
| 0x059A | 1434 (0x059A) - Dienste (Diverse Sender) |
| 0x059B | 1435 (0x059B) - Dienste (Diverse Sender) |
| 0x059C | 1436 (0x059C) - Dienste (Diverse Sender) |
| 0x059D | 1437 (0x059D) - Dienste (Diverse Sender) |
| 0x059E | 1438 (0x059E) - Dienste (Diverse Sender) |
| 0x059F | 1439 (0x059F) - Dienste (Diverse Sender) |
| 0x05A0 | 1440 (0x05A0) - Dienste (Diverse Sender) |
| 0x05A1 | 1441 (0x05A1) - Dienste (Diverse Sender) |
| 0x05A2 | 1442 (0x05A2) - Dienste (Diverse Sender) |
| 0x05A3 | 1443 (0x05A3) - Dienste (Diverse Sender) |
| 0x05A4 | 1444 (0x05A4) - Dienste (Diverse Sender) |
| 0x05A5 | 1445 (0x05A5) - Dienste (Diverse Sender) |
| 0x05A6 | 1446 (0x05A6) - Dienste (Diverse Sender) |
| 0x05A7 | 1447 (0x05A7) - Dienste (Diverse Sender) |
| 0x05A8 | 1448 (0x05A8) - Dienste (Diverse Sender) |
| 0x05A9 | 1449 (0x05A9) - Dienste (Diverse Sender) |
| 0x05AA | 1450 (0x05AA) - Dienste (Diverse Sender) |
| 0x05AB | 1451 (0x05AB) - Dienste (Diverse Sender) |
| 0x05AC | 1452 (0x05AC) - Dienste (Diverse Sender) |
| 0x05AD | 1453 (0x05AD) - Dienste (Diverse Sender) |
| 0x05AE | 1454 (0x05AE) - Dienste (Diverse Sender) |
| 0x05AF | 1455 (0x05AF) - Dienste (Diverse Sender) |
| 0x05B0 | 1456 (0x05B0) - Dienste (Diverse Sender) |
| 0x05B1 | 1457 (0x05B1) - Dienste (Diverse Sender) |
| 0x05B2 | 1458 (0x05B2) - Dienste (Diverse Sender) |
| 0x05B3 | 1459 (0x05B3) - Dienste (Diverse Sender) |
| 0x05B4 | 1460 (0x05B4) - Dienste (Diverse Sender) |
| 0x05B5 | 1461 (0x05B5) - Dienste (Diverse Sender) |
| 0x05B6 | 1462 (0x05B6) - Dienste (Diverse Sender) |
| 0x05B7 | 1463 (0x05B7) - Dienste (Diverse Sender) |
| 0x05B8 | 1464 (0x05B8) - Dienste (Diverse Sender) |
| 0x05B9 | 1465 (0x05B9) - Dienste (Diverse Sender) |
| 0x05BA | 1466 (0x05BA) - Dienste (Diverse Sender) |
| 0x05BB | 1467 (0x05BB) - Dienste (Diverse Sender) |
| 0x05BC | 1468 (0x05BC) - Dienste (Diverse Sender) |
| 0x05BD | 1469 (0x05BD) - Dienste (Diverse Sender) |
| 0x05BE | 1470 (0x05BE) - Dienste (Diverse Sender) |
| 0x05BF | 1471 (0x05BF) - Dienste (Diverse Sender) |
| 0x05C0 | 1472 (0x05C0) - Dienste (Diverse Sender) |
| 0x05C1 | 1473 (0x05C1) - Dienste (Diverse Sender) |
| 0x05C2 | 1474 (0x05C2) - Dienste (Diverse Sender) |
| 0x05C3 | 1475 (0x05C3) - Dienste (Diverse Sender) |
| 0x05C4 | 1476 (0x05C4) - Dienste (Diverse Sender) |
| 0x05C5 | 1477 (0x05C5) - Dienste (Diverse Sender) |
| 0x05C6 | 1478 (0x05C6) - Dienste (Diverse Sender) |
| 0x05C7 | 1479 (0x05C7) - Dienste (Diverse Sender) |
| 0x05C8 | 1480 (0x05C8) - Dienste (Diverse Sender) |
| 0x05C9 | 1481 (0x05C9) - Dienste (Diverse Sender) |
| 0x05CA | 1482 (0x05CA) - Dienste (Diverse Sender) |
| 0x05CB | 1483 (0x05CB) - Dienste (Diverse Sender) |
| 0x05CC | 1484 (0x05CC) - Dienste (Diverse Sender) |
| 0x05CD | 1485 (0x05CD) - Dienste (Diverse Sender) |
| 0x05CE | 1486 (0x05CE) - Dienste (Diverse Sender) |
| 0x05CF | 1487 (0x05CF) - Dienste (Diverse Sender) |
| 0x05D0 | 1488 (0x05D0) - Dienste (Diverse Sender) |
| 0x05D1 | 1489 (0x05D1) - Dienste (Diverse Sender) |
| 0x05D2 | 1490 (0x05D2) - Dienste (Diverse Sender) |
| 0x05D3 | 1491 (0x05D3) - Dienste (Diverse Sender) |
| 0x05D4 | 1492 (0x05D4) - Dienste (Diverse Sender) |
| 0x05D5 | 1493 (0x05D5) - Dienste (Diverse Sender) |
| 0x05D6 | 1494 (0x05D6) - Dienste (Diverse Sender) |
| 0x05D7 | 1495 (0x05D7) - Dienste (Diverse Sender) |
| 0x05D8 | 1496 (0x05D8) - Dienste (Diverse Sender) |
| 0x05D9 | 1497 (0x05D9) - Dienste (Diverse Sender) |
| 0x05DA | 1498 (0x05DA) - Dienste (Diverse Sender) |
| 0x05DB | 1499 (0x05DB) - Dienste (Diverse Sender) |
| 0x05DC | 1500 (0x05DC) - Dienste (Diverse Sender) |
| 0x05DD | 1501 (0x05DD) - Dienste (Diverse Sender) |
| 0x05DE | 1502 (0x05DE) - Dienste (Diverse Sender) |
| 0x05DF | 1503 (0x05DF) - Dienste (Diverse Sender) |
| 0x05E0 | 1504 (0x05E0) - Dienste (Diverse Sender) |
| 0x05E1 | 1505 (0x05E1) - Dienste (Diverse Sender) |
| 0x05E2 | 1506 (0x05E2) - Dienste (Diverse Sender) |
| 0x05E3 | 1507 (0x05E3) - Dienste (Diverse Sender) |
| 0x05E4 | 1508 (0x05E4) - Dienste (Diverse Sender) |
| 0x05E5 | 1509 (0x05E5) - Dienste (Diverse Sender) |
| 0x05E6 | 1510 (0x05E6) - Dienste (Diverse Sender) |
| 0x05E7 | 1511 (0x05E7) - Dienste (Diverse Sender) |
| 0x05E8 | 1512 (0x05E8) - Dienste (Diverse Sender) |
| 0x05E9 | 1513 (0x05E9) - Dienste (Diverse Sender) |
| 0x05EA | 1514 (0x05EA) - Dienste (Diverse Sender) |
| 0x05EB | 1515 (0x05EB) - Dienste (Diverse Sender) |
| 0x05EC | 1516 (0x05EC) - Dienste (Diverse Sender) |
| 0x05ED | 1517 (0x05ED) - Dienste (Diverse Sender) |
| 0x05EE | 1518 (0x05EE) - Dienste (Diverse Sender) |
| 0x05EF | 1519 (0x05EF) - Dienste (Diverse Sender) |
| 0x05F0 | 1520 (0x05F0) - Dienste (Diverse Sender) |
| 0x05F1 | 1521 (0x05F1) - Dienste (Diverse Sender) |
| 0x05F2 | 1522 (0x05F2) - Dienste (Diverse Sender) |
| 0x05F3 | 1523 (0x05F3) - Dienste (Diverse Sender) |
| 0x05F4 | 1524 (0x05F4) - Dienste (Diverse Sender) |
| 0x05F5 | 1525 (0x05F5) - Dienste (Diverse Sender) |
| 0x05F6 | 1526 (0x05F6) - Dienste (Diverse Sender) |
| 0x05F7 | 1527 (0x05F7) - Dienste (Diverse Sender) |
| 0x05F8 | 1528 (0x05F8) - Dienste (Diverse Sender) |
| 0x05F9 | 1529 (0x05F9) - Dienste (Diverse Sender) |
| 0x05FA | 1530 (0x05FA) - Dienste (Diverse Sender) |
| 0x05FB | 1531 (0x05FB) - Dienste (Diverse Sender) |
| 0x05FC | 1532 (0x05FC) - Dienste (Diverse Sender) |
| 0x05FD | 1533 (0x05FD) - Dienste (Diverse Sender) |
| 0x05FE | 1534 (0x05FE) - Dienste (Diverse Sender) |
| 0x05FF | 1535 (0x05FF) - Dienste (Diverse Sender) |
| 0xXYZZ | ???? (0x????) - Unbekannte Id. |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Betriebsstundenzaehler | Stunden | - | unsigned int | - | 1 | 8 | 0 |
| 0x02 | Aussentemperatur | Grad C | - | signed char | - | 1 | 1 | 0 |
| 0x03 | SCU-Innentemperatur | Grad C | - | signed char | - | 1 | 1 | 0 |
| 0x04 | Betriebsspannung | Volt | - | unsigned char | - | 10000 | 78125 | 0 |
| 0x05 | Dejustagegrad des Sensors | 0-n | - | 0x03 | DeGrad | - | - | - |
| 0x06 | Linsenheizung | 0-n | - | 0x04 | LensHeating | - | - | - |
| 0x07 | Verschmutzung der Linse | 0-n | - | 0x08 | LensStatus | - | - | - |
| 0x08 | NAVI Daten | 0-n | - | 0x10 | NaviStatus | - | - | - |
| 0x09 | CAN-Id.: | 0-n | - | 0xFFFF | CANId | - | - | - |
| 0x0A | Fehlerobjekt: | Hex | - | unsigned int | - | - | - | - |
| 0x0B | Fehlernummer: | Hex | - | unsigned char | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

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
