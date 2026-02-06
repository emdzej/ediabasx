# ars_60.prg

## General

|  |  |
| --- | --- |
| File | ars_60.prg |
| Type | PRG |
| Jobs | 112 |
| Tables | 80 |
| Origin | BMW EF-63 Bernhard Schmidt, BMW TI-432 Helmich |
| Revision | 4.001 |
| Author | ContiTemic CCElektronik Schoberth |
| ECU Comment | Integrationsstufe 05-09-500 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Aktive Rollstabilisierung E60  |  |  |
| ORIGIN | string | BMW EF-63 Bernhard Schmidt, BMW TI-432 Helmich |  |  |
| REVISION | string | 4.001 |  |  |
| AUTHOR | string | ContiTemic CCElektronik Schoberth |  |  |
| COMMENT | string | Integrationsstufe 05-09-500  |  |  |
| PACKAGE | string | 1.31 |  |  |
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

### STATUS_VERSORGUNGEN

Auslesen der Stati von Spanungspegel KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $F020 Entry Status Modus  : Default

_No arguments._

### STATUS_ARS_SENSOREN

Auslesen der Stati von ARS Sensoren KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $0F C0 00 00 00 FF 80 Entry Status Modus  : Default

_No arguments._

### STATUS_PROPORTIONAL_VENTILE

Auslesen der Stati von Proportional Ventilen KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 0C 0C CC Entry Status Modus  : Default

_No arguments._

### STATUS_SCHALTVENTILE

Auslesen der Stati von Schaltventilen KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 03 03 33 Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_SIGNALE_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 00 00 F0 30 Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_GESCHWINDIGKEIT_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 00 C0 Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_DREHZAHL_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 0F Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_BESCHLEUNIGUNG_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 00 3C Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_TEMP_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 30 00 00 C0 Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_DIVERSES_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 00 03 0F 00 Entry Status Modus  : Default

_No arguments._

### STATUS_CAN_ALIVE_ARS

Auslesen der Stati von CAN-Signale-ARS KWP2000: $30 InputOutputControlByLocalIdentifier $01 IOLI $01 IOCP $00 00 00 00 00 00 00 00 C0 Entry Status Modus  : Default

_No arguments._

### START_INBETRIEBNAHME

alle 4 Radgeschwindigkeiten kleiner 4 km/h DSC Status ungleich 0x00 und 0xFF KWP2000: $31 StartRoutineByLocalIdentifier $30 Inbetriebnahme starten Modus  : Default

_No arguments._

### START_DRUCKRAMPE

alle 4 Radgeschwindigkeiten kleiner 4 km/h DSC Status ungleich 0x00 und 0xFF KWP2000: $31 StartRoutineByLocalIdentifier $35 Rampe Strom Druck lernen Modus  : Default

_No arguments._

### START_OFFSET_WERTE_VA

alle 4 Radgeschwindigkeiten kleiner 4 km/h DSC Status ungleich 0x00 und 0xFF KWP2000: $31 StartRoutineByLocalIdentifier $36 Nullpunkt Druck VA lernen Modus  : Default

_No arguments._

### START_OFFSET_WERTE_HA

alle 4 Radgeschwindigkeiten kleiner 4 km/h DSC Status ungleich 0x00 und 0xFF KWP2000: $31 StartRoutineByLocalIdentifier $37 Nullpunkt Druck HA lernen Modus  : Default

_No arguments._

### START_OFFSET_QUERBESCH

alle 4 Radgeschwindigkeiten kleiner 4 km/h DSC Status ungleich 0x00 und 0xFF KWP2000: $31 StartRoutineByLocalIdentifier $38 Nullpunkt Druck HA lernen Modus  : Default

_No arguments._

### START_LERNEN_NEUE_SENSOR_WERTE_VA

KWP2000: $31 StartRoutineByLocalIdentifier $40 Sensor Paramenter fuer neuen Drucksensor VA lernen. Parameter laut Sensordatenblatt Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NULLPKT_VA | int | SensorNullpunkt in [mV] |
| SENSOR_STEIGUNG_VA | int | Steigung in [mue Volt/bar] |

### START_LERNEN_NEUE_SENSOR_WERTE_HA

KWP2000: $31 StartRoutineByLocalIdentifier $41 Sensor Paramenter fuer neuen Drucksensor HA lernen. Parameter laut Sensordatenblatt Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NULLPKT_HA | int | SensorNullpunkt in [mV] |
| SENSOR_STEIGUNG_HA | int | Steigung in [mue Volt/bar] |

### START_LERNEN_NEUE_WERTE_QUERBESCH

KWP2000: $31 StartRoutineByLocalIdentifier $42 Sensor Paramenter fuer neuen A Quer Sensor lernen. Parameter laut Sensordatenblatt Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NULLPKT_AQUER | int | SensorNullpunkt in [mV] |
| SENSOR_STEIGUNG_AQUER | int | Steigung in [mVolt/g] |

### START_LOESCHEN_LEWI

alle 4 Radgeschwindigkeiten kleiner 4 km/h DSC Status ungleich 0x00 und 0xFF KWP2000: $31 StartRoutineByLocalIdentifier $50 Zuruecksetzen des gelernten Lenkwinkeloffsets Modus  : Default

_No arguments._

### STOP_INBETRIEBNAHME

KWP2000: $32 StopRoutineByLocalIdentifier $30 Inbetriebnahme stoppen Modus  : Default

_No arguments._

### STOP_DRUCKRAMPE

KWP2000: $32 StopRoutineByLocalIdentifier $35 Nullpunkt Druck HA lernen Modus  : Default

_No arguments._

### STATUS_INBETRIEBNAHME_ABFRAGEN

KWP2000: $33 RequestRoutineResultsByLocalIdentifier $30 Inbetriebnahme Resultat abfragen Modus  : Default

_No arguments._

### STATUS_DRUCKRAMPE_ABFRAGEN

KWP2000: $33 RequestRoutineResultsByLocalIdentifier $35 Rampe Strom Druck lernen Resultat abfragen Modus  : Default

_No arguments._

### STATUS_OFFSET_WERTE_VA

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $36 Nullpunkt Druck VA gelernter Offset holen Modus  : Default

_No arguments._

### STATUS_OFFSET_WERTE_HA

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $37 Nullpunkt Druck HA gelernter Offset holen Modus  : Default

_No arguments._

### STATUS_OFFSET_QUERBESCH

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $38 Nullpunkt BeschleunigungsSensor Offset holen Modus  : Default

_No arguments._

### STATUS_NEUE_SENSOR_WERTE_VA

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $40 Sensor Paramenter fuer neuen Drucksensor VA auslesen. Parameter laut Sensordatenblatt Modus  : Default

_No arguments._

### STATUS_NEUE_SENSOR_WERTE_HA

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $41 Sensor Paramenter fuer neuen Drucksensor HA auslesen. Parameter laut Sensordatenblatt Modus  : Default

_No arguments._

### STATUS_NEUE_WERTE_QUERBESCH

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $42 Sensor Paramenter fuer neuen Querbesch.sensor auslesen. Parameter laut Sensordatenblatt Modus  : Default

_No arguments._

### STATUS_OFFSET_LENKWINKEL

KWP2000: $33 RequestRoutineresultsByLocalIdentifier $50 Lenkwinkel Offset holen Modus  : Default

_No arguments._

### STEUERN_SV_PWM_MIT_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $31 Sicherheitsventil Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe mit Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_SV | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_SV_PWM_OHNE_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $31 Sicherheitsventil Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe ohne Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_SV | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_SV_HOCHLAUFPRUEFUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $31 Sicherheitsventil Modus  : $07 IOCP Nummer Modus  : Hochlaufpruefung (Pruefimpuls)

_No arguments._

### STEUERN_SV_PUSHHOLD

KWP2000: $30 InputOutputControlByLocalIdentifier $31 Sicherheitsventil Modus  : $07 IOCP Nummer Modus  : Push Hold Ansteuerung

_No arguments._

### STEUERN_RV_PWM_MIT_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $32 Richtungsventil Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe mit Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_RV | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_RV_PWM_OHNE_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $32 Richtungsventil Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe ohne Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_RV | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_RV_HOCHLAUFPRUEFUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $32 Richtungsventil Modus  : $07 IOCP Nummer Modus  : Hochlaufpruefung (Pruefimpuls)

_No arguments._

### STEUERN_RV_PUSHHOLD

KWP2000: $30 InputOutputControlByLocalIdentifier $32 Richtungsventil Modus  : $07 IOCP Nummer Modus  : Push Hold Ansteuerung

_No arguments._

### STEUERN_PVVA_PWM_MIT_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $33 Proportionalventil VA Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe mit Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_PVVA | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_PVVA_PWM_OHNE_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $33 Proportionalventil VA Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe ohne Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_PVVA | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_PVVA_HOCHLAUFPRUEFUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $33 Proportionalventil VA Modus  : $07 IOCP Nummer Modus  : Hochlaufpruefung (Pruefimpuls)

_No arguments._

### STEUERN_PVHA_PWM_MIT_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $34 Proportionalventil HA Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe mit Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_PVHA | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_PVHA_PWM_OHNE_FP

KWP2000: $30 InputOutputControlByLocalIdentifier $34 Proportionalventil HA Modus  : $07 IOCP Nummer Modus  : PWM Ausgabe ohne Fehlerpruefung

| Name | Type | Description |
| --- | --- | --- |
| STROM_MA_PVHA | int | Quantisierung 0,001A Bereich 0 mA - 3000 mA Strom in mA |

### STEUERN_PVHA_HOCHLAUFPRUEFUNG

KWP2000: $30 InputOutputControlByLocalIdentifier $34 Proportionalventil HA Modus  : $07 IOCP Nummer Modus  : Hochlaufpruefung (Pruefimpuls)

_No arguments._

### STEUERN_ARS_CHECKCONTROL

KWP2000: $30 InputOutputControlByLocalIdentifier $35 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| UNTERSERVICE | int | Hex-Auftrag an SG |

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### COD_C_LESEN

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_C_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_N_LESEN

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_N_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_LESEN

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### COD_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### DATENSATZ_COD_DATUM

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

_No arguments._

### IDENT_PD_LESEN

letztes Programmierdatum lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $99 ProgrammingDate Modus  : Default

_No arguments._

### IDENT_HWNR_PHYS_LESEN

Physikalische Hardware Nummer lesen, PECUHN Standard Codierjob KWP2000: $1A ReadECUIdentification $87 PECUHN Index Modus  : Default

_No arguments._

### IDENT_VMECUHVN_LESEN

HardwareNummer lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $9A vehicleManufacturerECUHardwareVersionNumber Modus  : Default

_No arguments._

### PROGRAMM_REFERENZ_LESEN

Auslesen der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz Modus  : Default

_No arguments._

### AIF_AKTUELL_LESEN

CUIFDT Standard Codierjob KWP2000: $1A ReadECUIdentification $86 CurrentUIFDataTable Modus  : Default

_No arguments._

### AIF_TABELLE_LESEN

AIF/UIF Datenblock auslesen KWP2000: $23   ReadMemoryByAddress $AdrHigh AdrMid AdrLow UIFM UIFBlockLaenge $00      00     00     07   40 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NR | int | == 0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF AIF Blocknummer |

### HARDWARE_REFERENZ_LESEN_PAF_DAF

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier $2502 HardwareReferenz Modus  : Default

_No arguments._

### PROGRAMM_REFERENZ_LESEN_PAF_DAF

Auslesen der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN_PAF_DAF

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DatenReferenz Modus  : Default

_No arguments._

### IS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

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
| 0x76 | CEL |
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
| 0x00 | ERROR_... |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D4C | Sicherheitsventil |
| 0x5D4D | Richtungsventil |
| 0x5D4E | Proportionalventil VA |
| 0x5D4F | Proportionalventil HA |
| 0x5D50 | Versorgung Drucksensor VA |
| 0x5D51 | Versorgung Drucksensor HA |
| 0x5D52 | Versorgung Schaltstellungssensor |
| 0x5D53 | Versorgung Querbeschleunigungssensor |
| 0x5D54 | Lernen Drucksensor VA |
| 0x5D55 | Lernen Drucksensor HA |
| 0x5D57 | Lernen Querbeschleunigungssensor |
| 0x5D58 | Gradient Drucksensor VA |
| 0x5D59 | Gradient Drucksensor HA |
| 0x5D5A | Konsistenz LWL |
| 0x5D5B | Konsistenz Druck VA |
| 0x5D5C | Konsistenz Druck HA |
| 0x5D5D | Konsistenz Querbeschleunigungssensor |
| 0x5D5E | Konsistenz Strommessung Propventile |
| 0x5D5F | Konsistenz Strommessung Schaltventile |
| 0x5D60 | Oelstandsensor |
| 0x5D61 | KL30 ARS-SG |
| 0x5D62 | ECU intern |
| 0x5D63 | Inbetriebnahme |
| 0x5D64 | Codierdatenfehler |
| 0x5D65 | Status Richtungsventil |
| 0x5D66 | Predrive Check |
| 0x5D67 | Konsistenz Fahrgestellnummer |
| 0x5D68 | Kalibrierung Sensoren |
| 0x5D69 | Fehlerspeicher defekt |
| 0x5D6C | Inbetriebnahme: RV bestromt |
| 0x5D6D | Inbetriebnahme: RV unbestromt |
| 0x5D6E | Inbetriebnahme: FS und VA-Ventil unbestr. zu od. Sensor p_VA defekt |
| 0x5D6F | Inbetriebnahme: Sensor p_HA defekt |
| 0x5D70 | Inbetriebnahme: Tankruecklauf zu oder (FS und HA-Ventil unbestromt zu) |
| 0x5D71 | Inbetriebnahme: FS unbestr. zu u. (Ventilblock dicht od. Tankrueckl. zu od. HA unbestr. zu) |
| 0x5D72 | Inbetriebnahme: FS unbestr. zu |
| 0x5D73 | Inbetriebnahme: FS u. VA-Ventil unbestr. zu |
| 0x5D74 | Inbetriebnahme: Schwenkmotor VA fest |
| 0x5D75 | Inbetriebnahme: FS-Ventil od. FS-Drossel oder VA-Ventil haengt offen od. beide DS od. Rueckschl.-ventil links defekt |
| 0x5D76 | Inbetriebnahme: Drucksensoren vertauscht |
| 0x5D77 | Inbetriebnahme: Druckaufbau_VA zu langsam oder Kennlinie VA pVA(l) (VBL Problem) od. Sensor pVA defekt |
| 0x5D78 | Inbetriebnahme: VA-Ventil haengt geschlossen |
| 0x5D79 | Inbetriebnahme: Summen Leck VA oder Sensor pVA defekt |
| 0x5D7A | Inbetriebnahme: Kennline VA oder Sensor pVA defekt |
| 0x5D7D | Inbetriebnahme: Schwenkmotor HA fest |
| 0x5D7E | Inbetriebnahme: Sensor pVA oder Sensor pHA defekt |
| 0x5D7F | Inbetriebnahme: HA_Ventil haengt geschlossen |
| 0x5D80 | Inbetriebnahme: Druckaufbau_HA zu langsam oder Kennlinie HA pHA(l) (VBL Problem) |
| 0x5D81 | Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil links defekt |
| 0x5D82 | Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil rechts defekt |
| 0x5D83 | Inbetriebnahme: Dynamikfehler HA/VA |
| 0x5D84 | Inbetriebnahme: Druckaufbau (VA und HA) zu langsam |
| 0x5D85 | Inbetriebnahme: Kennline HA |
| 0x5D8A | Inbetriebnahme: Kennlinienfehler VA |
| 0x5D8B | Inbetriebnahme: Kennlinienfehler HA |
| 0x626C | Konsistenz Querbeschleunigung Can Signal |
| 0x626D | Konsistenz Querbeschleunigung ARS Sensor |
| 0x6271 | Predrive Check: FS und VA-Ventil unbestromt zu  oder Sensor P_VA defekt |
| 0x6272 | Predrive Check: FS und HA-Ventil unbestromt zu |
| 0x6273 | Predrive Check: FS Okay, VA- und HA-Ventil bestromt offen |
| 0x6274 | Predrive Check: FS unbestromt zu und VA Okay |
| 0x6275 | Predrive Check: FS unbestromt zu und VA-Ventil offen, HA-Ventil Okay |
| 0x6276 | Predrive Check: VA-Ventil bestromt offen |
| 0x6277 | Predrive Check: FS oder HA oder VA-Ventilstrom zu hoch |
| 0x6278 | Predrive Check: Umlaufdruck temporaer zu hoch (evtl. Oel zu kalt) |
| 0x6279 | Predrive Check: Umlaufdruck dauerhaft zu hoch |
| 0x627A | Predrive Check: Motor in Fahrt gestoppt |
| 0x627B | Predrive Check: Zuschalten nach Reset waehrend der Fahrt |
| 0x6288 | Inbetriebnahme: aQuer Analogsensor defekt |
| 0x6289 | Inbetriebnahme: aQuer Analogsensor Vorzeichenfehler |
| 0x628A | Inbetriebnahme: LL Fehler oder Predrive Fehler verhindert Inbetriebnahme starten |
| 0x628B | Inbetriebnahme: Inbetriebnahme abgebrochen |
| 0xD1C7 | CAN Bus Off |
| 0xD1DC | CAN Status Quittierung Motor ARS |
| 0xD1DD | CAN Beschleunigung Fahrzeug Quer DSC |
| 0xD1DE | CAN Winkelgeschwindigkeit Gier DSC |
| 0xD1DF | CAN Geschwindigkeit Fahrzeug |
| 0xD1E0 | CAN Aussentemperatur |
| 0xD1E1 | CAN Temperatur Motor Kuehlwasser |
| 0xD1E2 | CAN Status Klemme 15 |
| 0xD1E3 | CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xD1E4 | CAN Lenkradwinkel |
| 0xD1E5 | CAN Drehzahl Motor |
| 0xD1E6 | CAN Geschwindigkeit Rad VL oder Rad VR |
| 0xD1E7 | Status EDCK Programm Komfort/ Sport |
| 0xD1E8 | CAN Gradient Lenkradwinkel |
| 0xD1E9 | CAN Fahrgestellnummer |
| 0xD1EA | Bedienung EDCK Programm Komfort/ Sport |
| 0xD1EB | CAN Kilometerstand |
| 0xD1EC | CAN Status ARS |
| 0xD1ED | CAN Status DSC |
| 0xD1F1 | CAN Botschaft Geschwindigkeit |
| 0xD1F2 | CAN Botschaft Klemmenstatus |
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
| 0x5D5A | 0x01 | - | - | - |
| 0x5D5B | 0x01 | 0x02 | - | - |
| 0x5D5C | 0x01 | 0x02 | - | - |
| 0x5D5D | 0x03 | 0x04 | 0x0F | - |
| 0x5D62 | EE_ECU | - | - | - |
| 0x5D63 | DIGITAL | - | - | - |
| 0x5D65 | 0x02 | - | - | - |
| 0x5D66 | 0x0F | - | - | - |
| 0x5D69 | EE_DATEN | - | - | - |
| 0x5D6C | 0x63 | DIGITAL | - | - |
| 0x5D6D | 0x63 | DIGITAL | - | - |
| 0x5D6E | 0x63 | DIGITAL | - | - |
| 0x5D6F | 0x63 | DIGITAL | - | - |
| 0x5D70 | 0x63 | DIGITAL | - | - |
| 0x5D71 | 0x63 | DIGITAL | - | - |
| 0x5D72 | 0x63 | DIGITAL | - | - |
| 0x5D73 | 0x63 | DIGITAL | - | - |
| 0x5D74 | 0x63 | DIGITAL | - | - |
| 0x5D75 | 0x63 | DIGITAL | - | - |
| 0x5D76 | 0x63 | DIGITAL | - | - |
| 0x5D77 | 0x63 | DIGITAL | - | - |
| 0x5D78 | 0x63 | DIGITAL | - | - |
| 0x5D79 | 0x63 | DIGITAL | - | - |
| 0x5D7A | 0x63 | DIGITAL | - | - |
| 0x5D7D | 0x63 | DIGITAL | - | - |
| 0x5D7E | 0x63 | DIGITAL | - | - |
| 0x5D7F | 0x63 | DIGITAL | - | - |
| 0x5D80 | 0x63 | DIGITAL | - | - |
| 0x5D81 | 0x63 | DIGITAL | - | - |
| 0x5D82 | 0x63 | DIGITAL | - | - |
| 0x5D83 | 0x63 | DIGITAL | - | - |
| 0x5D84 | 0x63 | DIGITAL | - | - |
| 0x5D85 | 0x63 | DIGITAL | - | - |
| 0x5D8A | 0x63 | DIGITAL | - | - |
| 0x5D8B | 0x63 | DIGITAL | - | - |
| 0x626C | 0x03 | 0x04 | - | - |
| 0x626D | 0x03 | 0x04 | - | - |
| 0x6288 | 0x63 | DIGITAL | - | - |
| 0x6289 | 0x63 | DIGITAL | - | - |
| 0x628A | 0x63 | DIGITAL | - | - |
| 0x628B | 0x63 | DIGITAL | - | - |
| 0xD1E4 | 0x0E | - | - | - |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Drehzahl | 1/min | - | unsigned int | - | 1 | 1 | 0 |
| 0x02 | Aussentemperatur | Grad C | high | signed int | - | 1 | 100 | 0 |
| 0x03 | Geschwindigkeit | km/s | high | unsigned int | - | 1 | 10 | 0 |
| 0x04 | Lenkwinkel | Grad | high | signed int | - | 1 | 10 | 0 |
| 0x0E | ohne Information |   | high | unsigned int | - | 1 | 1 | 0 |
| 0x0F | Hexwert Bits |   | high | unsigned int | - | 1 | 1 | 0 |
| 0xC0 | Inbetriebnahme Warnung | 0-n | - | 0xC0 | InWa | - | - | - |
| 0x3F | Inbetriebnahme Fehler | 0-n | - | 0x3F | InFh | - | - | - |
| 0x63 | nicht verwendete Zusatzbedingung;high Byte | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x70 | EEProm Daten | 0-n | high | 0x0001 | EEDAT | - | - | - |
| 0x71 | EEProm Daten | 0-n | high | 0x0002 | EEDAT | - | - | - |
| 0x72 | EEProm Daten | 0-n | high | 0x0004 | EEDAT | - | - | - |
| 0x73 | EEProm Daten | 0-n | high | 0x0008 | EEDAT | - | - | - |
| 0x74 | EEProm Daten | 0-n | high | 0x0010 | EEDAT | - | - | - |
| 0x75 | EEProm Daten | 0-n | high | 0x0020 | EEDAT | - | - | - |
| 0x76 | EEProm Daten | 0-n | high | 0x0040 | EEDAT | - | - | - |
| 0x77 | EEProm Daten | 0-n | high | 0x0080 | EEDAT | - | - | - |
| 0x78 | EEProm Daten | 0-n | high | 0x0100 | EEDAT | - | - | - |
| 0x79 | EEProm Daten | 0-n | high | 0x0200 | EEDAT | - | - | - |
| 0x7A | EEProm Daten | 0-n | high | 0x0400 | EEDAT | - | - | - |
| 0x7B | EEProm Daten | 0-n | high | 0x0800 | EEDAT | - | - | - |
| 0x7C | EEProm Daten | 0-n | high | 0x1000 | EEDAT | - | - | - |
| 0x7D | EEProm Daten | 0-n | high | 0x2000 | EEDAT | - | - | - |
| 0x7E | EEProm Daten | 0-n | high | 0x4000 | EEDAT | - | - | - |
| 0x7F | EEProm Daten | 0-n | high | 0x8000 | EEDAT | - | - | - |
| 0x80 | EEProm ECU | 0-n | high | 0x0001 | EEECU_1 | - | - | - |
| 0x81 | EEProm ECU | 0-n | high | 0x0002 | EEECU_2 | - | - | - |
| 0x82 | EEProm ECU | 0-n | high | 0x0004 | EEECU_3 | - | - | - |
| 0x83 | EEProm ECU | 0-n | high | 0x0008 | EEECU_4 | - | - | - |
| 0x84 | EEProm ECU | 0-n | high | 0x0010 | EEECU_5 | - | - | - |
| 0x85 | EEProm ECU | 0-n | high | 0x0020 | EEECU_6 | - | - | - |
| 0x86 | EEProm ECU | 0-n | high | 0x0040 | EEECU_7 | - | - | - |
| 0x87 | EEProm ECU | 0-n | high | 0x0080 | EEECU_8 | - | - | - |
| 0x88 | EEProm ECU | 0-n | high | 0x0100 | EEECU_9 | - | - | - |
| 0x89 | EEProm ECU | 0-n | high | 0x0200 | EEECU_A | - | - | - |
| 0x8A | EEProm ECU | 0-n | high | 0x0400 | EEECU_B | - | - | - |
| 0x8B | EEProm ECU | 0-n | high | 0x0800 | EEECU_C | - | - | - |
| 0x8C | EEProm ECU | 0-n | high | 0x1000 | EEECU_D | - | - | - |
| 0x8D | EEProm ECU | 0-n | high | 0x2000 | EEECU_E | - | - | - |
| 0x8E | EEProm ECU | 0-n | high | 0x4000 | EEECU_F | - | - | - |
| 0x8F | EEProm ECU | 0-n | high | 0x8000 | EEECU_10 | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

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

### HARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| default | - | - | - | - |

### HARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00XY | mehrere Symptome oder Fehlerursache unbekannt |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x7D50 | Versorgung Drucksensor VA |
| 0x7D51 | Versorgung Drucksensor HA |
| 0x7D52 | Versorgung Schaltstellungssensor |
| 0x7D53 | Versorgung Querbeschleunigungssensor |
| 0x7D5A | Konsistenz LWL |
| 0x7D67 | Konsistenz Fahrgestellnummer |
| 0x7D69 | Fehlerspeicher defekt |
| 0x826C | Konsistenz Querbeschleunigung Can Signal |
| 0x8278 | Predrive Check: Umlaufdruck temporaer zu hoch (evtl. Oel zu kalt) |
| 0x827A | Predrive Check: Motor in Fahrt gestoppt |
| 0x827B | Predrive Check: Zuschalten nach Reset waehrend der Fahrt |
| 0xF1DD | CAN Beschleunigung Fahrzeug Quer DSC |
| 0xF1DE | CAN Winkelgeschwindigkeit Gier DSC |
| 0xF1DF | CAN Geschwindigkeit Fahrzeug |
| 0xF1E0 | CAN Aussentemperatur |
| 0xF1E1 | CAN Temperatur Motor Kuehlwasser |
| 0xF1E2 | CAN Status Klemme 15 |
| 0xF1E3 | CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xF1E4 | CAN Lenkradwinkel |
| 0xF1E5 | CAN Drehzahl Motor |
| 0xF1E8 | CAN Gradient Lenkradwinkel |
| 0xF1EB | CAN Kilometerstand |
| 0xF1ED | CAN Status DSC |
| 0xF1F1 | CAN Botschaft Geschwindigkeit |
| 0xF1F2 | CAN Botschaft Klemmenstatus |
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
| 0x7D5A | 0x01 | - | - | - |
| 0x7D69 | 0x0F | - | - | - |
| 0x826C | 0x03 | 0x04 | - | - |
| 0xF1E4 | 0x0E | - | - | - |
| default | - | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Drehzahl | 1/min | - | unsigned int | - | 1 | 1 | 0 |
| 0x02 | Aussentemperatur | Grad C | high | signed int | - | 1 | 100 | 0 |
| 0x03 | Geschwindigkeit | km/s | high | unsigned int | - | 1 | 10 | 0 |
| 0x04 | Lenkwinkel | Grad | high | signed int | - | 1 | 10 | 0 |
| 0x05 | Sensorversorgungsspannung | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x08 | aQ-Sensor | m/s^2 | high | signed int | - | 1 | 100 | 0 |
| 0x0B | Spannung KL30 | mV | high | unsigned int | - | 1 | 1 | 0 |
| 0x0E | ohne Information |   | high | unsigned int | - | 1 | 1 | 0 |
| 0x0F | Hexwert Bits |   | high | unsigned int | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x7D50 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |
| 0x7D51 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |
| 0x7D52 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |
| 0x7D53 | 0x0005 | 0x0006 | 0x0007 | 0x0008 |
| 0x7D5A | 0x0012 | - | - | - |
| 0x7D67 | 0x0033 | - | 0x0034 | - |
| 0x7D69 | 0x0035 | - | - | 0x0044 |
| 0x826C | 0x0033 | - | - | - |
| 0x8278 | 0x0033 | - | - | - |
| 0x827A | 0x0033 | - | - | - |
| 0x827B | 0x0033 | - | - | - |
| 0xF1DD | 0x003F | - | - | - |
| 0xF1DE | 0x003F | - | - | - |
| 0xF1DF | 0x003F | - | - | - |
| 0xF1E0 | 0x0040 | 0x0041 | 0x0034 | - |
| 0xF1E1 | 0x0040 | 0x0041 | 0x0034 | - |
| 0xF1E2 | 0x0040 | - | - | - |
| 0xF1E3 | 0x0040 | - | - | - |
| 0xF1E4 | 0x0040 | 0x0041 | 0x0034 | 0x0039 |
| 0xF1E5 | 0x0040 | 0x0041 | 0x0034 | - |
| 0xF1E8 | - | - | - | 0x0043 |
| 0xF1EB | 0x0040 | 0x0041 | 0x0034 | - |
| 0xF1ED | 0x0040 | 0x0041 | 0x0034 | - |
| 0xF1F1 | - | 0x003E | 0x0034 | - |
| 0xF1F2 | - | 0x0041 | 0x0034 | - |
| default | - | - | - | - |

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0005 | Abriss Sensorground |
| 0x0006 | Abriss Sensorversorgung |
| 0x0007 | Unterspannung Sensorversorgung |
| 0x0008 | Ueberspannung Sensorversorgung |
| 0x0012 | Lenkwinkel unplausibel |
| 0x0033 | unplausibles Signal |
| 0x0034 | Init |
| 0x0035 | unplausible Daten |
| 0x0036 | Inbetriebnahme Fehler |
| 0x0039 | Lenkwinkel Verifizierungsfehler |
| 0x003E | Timeout oder Alive |
| 0x003F | Wert oder Checksum ungültig |
| 0x0040 | Wert ungueltig |
| 0x0041 | Timeout |
| 0x0042 | Msg error |
| 0x0043 | Gradientenfehler |
| 0x0044 | CC-Meldung ohne FSP |
| 0x00XY | mehrere Symptome oder Fehlerursache unbekannt |

### BUS_TYPEN

| BUS_NR | BUS_TEXT |
| --- | --- |
| 0x00 | PT-CAN |
| 0x01 | I/K-Bus |
| 0x02 | K-CAN System |
| 0x03 | K-CAN Peripherie |
| 0x04 | SI-Bus |
| 0x05 | MOST-Bus |
| 0xFF | unbekannter Bus |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0xC0 | 0x3F |

### EE_ECU

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x80 | 0x81 | 0x82 | 0x83 | 0x84 | 0x85 | 0x86 | 0x87 | 0x88 | 0x89 | 0x8A | 0x8B | 0x8C | 0x8D | 0x8E | 0x8F |

### EE_DATEN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x70 | 0x71 | 0x72 | 0x73 | 0x74 | 0x75 | 0x76 | 0x77 | 0x78 | 0x79 | 0x7A | 0x7B | 0x7C | 0x7D | 0x7E | 0x7F |

### EEECU_10

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x8000 | FPU Check sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_F

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x4000 | ALU Check sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_E

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x2000 | RAM Check sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_D

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x1000 | ROM Check sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_C

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0800 | frei |
| 0xFFFF | unbekannter Fehler |

### EEECU_B

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0400 | Shutdown Timeout error |
| 0xFFFF | unbekannter Fehler |

### EEECU_A

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0200 | Watchdog sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_9

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0100 | VCCL 2V6 sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_8

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0080 | Task sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_7

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0040 | Stack Check sys error |
| 0xFFFF | unbekannter Fehler |

### EEECU_6

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0020 | frei |
| 0xFFFF | unbekannter Fehler |

### EEECU_5

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0010 | AQuer ParaTab error |
| 0xFFFF | unbekannter Fehler |

### EEECU_4

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0008 | Ventil ParaTab error |
| 0xFFFF | unbekannter Fehler |

### EEECU_3

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0004 | LW Para Tab error |
| 0xFFFF | unbekannter Fehler |

### EEECU_2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0002 | ECU-ID Tab error |
| 0xFFFF | unbekannter Fehler |

### EEECU_1

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0001 | Drucks. ParaTab error |
| 0xFFFF | unbekannter Fehler |

### EEDAT

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO EE Daten |
| 0x0001 | FSP Ventilfehler |
| 0x0002 | FSP VCC Sensor |
| 0x0004 | FSP Learn Sensor Signal |
| 0x0008 | FSP Sens.Signal Konsistenz |
| 0x0010 | FSP Strommessung |
| 0x0020 | FSP Oelstand Kl30 |
| 0x0040 | FSP ECU intern |
| 0x0080 | FSP Inbetriebnahme |
| 0x0100 | EEProm FSP Codierdaten |
| 0x0200 | FSP Status RV |
| 0x0400 | FSP PreDrive Check |
| 0x0800 | FSP Konsistenz Fahrgestellnummer |
| 0x1000 | FSP Kalibrierung Sensoren |
| 0x2000 | FSP FSP defekt |
| 0x4000 | FSP CAN Bus |
| 0x8000 | FSP Ausgabeliste |
| 0xFFFF | FSP unbekannter Fehler |

### INWA

| WERT | UWTEXT |
| --- | --- |
| 0x00 | keine Warnung |
| 0x40 | Luft im VA-System |
| 0x80 | Dynamikproblem VA Luft |
| 0xC0 | Dynamikproblem HA/VA Luft |
| 0xFF | unbekannte Warnung |

### INFH

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | RV bestromt |
| 0x02 | RV unbestromt |
| 0x03 | FS und VA-Ventil unbestromt zu oder Sensor p_VA defekt |
| 0x04 | Sensor p_HA defekt |
| 0x05 | Tankruecklauf zu oder (FS und HA-Ventil unbestromt zu) |
| 0x06 | FS unbestromt zu und (Ventilblock dicht od. Tankrueckl. zu od. HA unbestr. zu) |
| 0x07 | FS unbestromt zu |
| 0x08 | FS u. VA-Ventil unbestromt zu |
| 0x09 | Schwenkmotor VA fest |
| 0x0A | FS-Ventil od. FS-Drossel oder VA-Ventil haengt offen od. beide DS od. Rueckschl.-ventil links defekt |
| 0x0B | Drucksensoren vertauscht |
| 0x0C | Druckaufbau_VA zu langsam oder Kennlinie VA pVA(l) (VBL Problem) od. Sensor pVA defekt |
| 0x0D | VA-Ventil haengt geschlossen |
| 0x0E | Summen Leck VA oder Sensor pVA defekt |
| 0x0F | Kennline VA oder Sensor pVA defekt |
| 0x10 | frei |
| 0x11 | frei |
| 0x12 | Schwenkmotor HA fest |
| 0x13 | Sensor pVA oder Sensor pHA defekt |
| 0x14 | HA_Ventil haengt geschlossen |
| 0x15 | Druckaufbau_HA zu langsam oder Kennlinie HA pHA(l) (VBL Problem) |
| 0x16 | HA-Ventil haengt offen od. Rueckschl.-ventil links defekt |
| 0x17 | HA-Ventil haengt offen od. Rueckschl.-ventil rechts defekt |
| 0x18 | Dynamikfehler HA/VA |
| 0x19 | Druckaufbau (VA und HA) zu langsam |
| 0x1A | Kennline HA |
| 0x1B | frei |
| 0x1C | frei |
| 0x1D | frei |
| 0x1E | frei |
| 0x1F | Kennlinienfehler VA |
| 0x20 | Kennlinienfehler HA |
| 0x3C | aQuer Analogsensor defekt |
| 0x3D | aQuer Analogsensor Vorzeichenfehler |
| 0x3E | LL Fehler oder Predrive Fehler verhindert Inbetriebnahme starten |
| 0x3F | Inbetriebnahme abgebrochen |
| 0xFF | unbekannter Fehler |

### INFH_ERW

| WERT | UWTEXT |
| --- | --- |
| 0x00 | keine Zusatzinfo bei Inbetriebnahme |
| 0x01 | Zusatzinfo: Motordrehzahl oberhalb Schwelle |
| 0x02 | Zusatzinfo: Motordrehzahl unterhalb Schwelle |
| 0x08 | Zusatzinfo: Plausibilitaet |
| 0xFF | unbekannte Zusatzinfo bei Inbetriebnahme |

### STATKL15

| KL15NR | KL15TEXT |
| --- | --- |
| 0x00 | Klemme 15 AUS |
| 0x01 | Klemme 15 EIN |
| 0x03 | Signal ungueltig |
| 0x?? | unbekannt |

### STATKL50

| KL50NR | KL50TEXT |
| --- | --- |
| 0x00 | Klemme 50 AUS |
| 0x01 | Klemme 50 EIN |
| 0x03 | Signal ungueltig |
| 0x?? | unbekannt |

### STATLENKWINKF

| LENKWINKF_NR | LENKWINKF_TEXT |
| --- | --- |
| 0x00 | Lenkradwinkelsignal absolut und verifiziert |
| 0x01 | Lenkradwinkelsignal absolut |
| 0x02 | Lenkradwinkelsignal relativ |
| 0x03 | Lenkradwinkelsignal waehrend Diagnose |
| 0x04 | Lenkradwinkelsignal aus Radgeschwindigkeiten |
| 0x05 | Sensorfehler-> kein Lenkradwinkelsignal |
| 0x06 | Elektronikfehler-> kein Lenkradwinkelsignal |
| 0x07 | Signal Lenkradwinkel_Fehler fehlerhaft |
| 0x?? | unbekannt |

### STATLENKWINKT

| LENKWINKT_NR | LENKWINKT_TEXT |
| --- | --- |
| 0x01 | Lenkradwinkelsignal waehrend Fehlertoleranzphase |
| 0x03 | Signal Lenkradwinkel_Toleranzphase fehlerhaft |
| 0x00 | Lenkradwinkelsignal ausserhalb Fehlertoleranzphase |
| 0x?? | unbekannt |

### STATZAEHLER

| STATZAEHLERNR | STATZAEHLERTEXT |
| --- | --- |
| 0x00 | Zaehlerstand 0 |
| 0x01 | Zaehlerstand 1 |
| 0x02 | Zaehlerstand 2 |
| 0x03 | Zaehlerstand 3 |
| 0x04 | Zaehlerstand 4 |
| 0x05 | Zaehlerstand 5 |
| 0x06 | Zaehlerstand 6 |
| 0x07 | Zaehlerstand 7 |
| 0x08 | Zaehlerstand 8 |
| 0x09 | Zaehlerstand 9 |
| 0x0A | Zaehlerstand 10 |
| 0x0B | Zaehlerstand 11 |
| 0x0C | Zaehlerstand 12 |
| 0x0D | Zaehlerstand 13 |
| 0x0E | Zaehlerstand 14 |
| 0x0F | Signal ungueltig |

### STATMOTORDREH

| DREHZAHL_MOTOR_NR | DREHZAHL_MOTOR_TEXT |
| --- | --- |
| 0x00 | Signal Drehzahl_Motor ist in Ordnung |
| 0x01 | Drehzahlgeber defekt |
| 0x03 | Signal Drehzahl Motor Fehler fehlerhaft |
| 0x?? | unbekannt |

### CHECKCONRTOL

| CHKCRTL_WERT | CHKCRTL_TEXT |
| --- | --- |
| 0x01 | Ueberwachung eingeschraenkt |
| 0x02 | eingeschraenkter Regelkomfort |
| 0x03 | Fail Safe |
| 0x04 | Oelverlust |
| 0x05 | Fail Safe temporaer |
| 0xFF | unbekannte Anfrage |

### STATUSSCHALTVENTILE

| STATUS_SCHALT_VENTILE_WERT | STATUS_SCHALT_VENTILE_TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x8001 | Kurzschluss nach Plus |
| 0x8002 | Kurzschluss nach Masse |
| 0x8004 | Leitungsunterbrechung |
| 0x8008 | Ventilkurzschluss |
| 0x8010 | keine Endstufen freigabe ueber Watchdog |
| 0x8020 | Ventilendstufe nicht kalibiriert |
| 0x8040 | Maximale Soll-Stromgrenze durch Ansteuer Fehler ueberschritten |
| 0x8080 | Strommesswert unplausibel |
| 0xFFFF | unbekannter Schaltventilfehler |

### STATUSPROPVENTILE

| STATUS_PROP_VENTILE_WERT | STATUS_PROP_VENTILE_TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x8001 | Kurzschluss nach Plus |
| 0x8002 | Kurzschluss nach Masse |
| 0x8004 | Leitungsunterbrechung |
| 0x8008 | Ventilkurzschluss |
| 0x8010 | keine Endstufen freigabe ueber Watchdog |
| 0x8020 | Ventilendstufe nicht kalibiriert |
| 0x8040 | Maximale Soll-Stromgrenze durch Ansteuer Fehler ueberschritten |
| 0x8080 | Strommesswert unplausibel |
| 0xFFFF | unbekannter Propventilfehler |

### STATUSDRUCKSENS

| STAT_DR_SENS_WERT | STAT_DR_SENS_TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x8001 | Versorungsspannung zu hoch |
| 0x8002 | Versorgungsspannung zu tief oder ausgeschaltet |
| 0x8004 | Leitungsbruch bei Versorgung oder Abgriff |
| 0x8008 | Leitungsbruch Sensormasse |
| 0xFFFF | unbekannter Sensorfehler |

### STATUSSCHALTSENS

| STAT_SCHALT_SENS_WERT | STAT_SCHALT_SENS_TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x8001 | Versorungsspannung zu hoch |
| 0x8002 | Versorgungsspannung zu tief |
| 0x8004 | Leitungsbruch bei Versorgung oder Abgriff |
| 0x8008 | Leitungsbruch Sensormasse |
| 0xFFFF | unbekannter Sensorfehler |

### STATUSQUERSENS

| STAT_QUER_SENS_WERT | STAT_QUER_SENS_TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x8001 | Versorungsspannung zu hoch |
| 0x8002 | Versorgungsspannung zu tief |
| 0x8004 | Leitungsbruch bei Versorgung oder Abgriff |
| 0x8008 | Leitungsbruch Sensormasse |
| 0xFFFF | unbekannter Sensorfehler |

### STATUSWECKSENS

| STAT_WECK_SENS_WERT | STAT_WECK_SENS_TEXT |
| --- | --- |
| 0x0000 | Weckleitung ist aus |
| 0x0001 | Weckleitung ist ein |
| 0xFFFF | Weckleitungszustand unbekannt |

### STATUSOELSTANDSENS

| STAT_OELSTAND_SENS_WERT | STAT_OELSTAND_SENS_TEXT |
| --- | --- |
| 0x0000 | Oelstandsschalter aus |
| 0x0001 | Oelstandsschalter ein |
| 0xFFFF | Oelstandsschalter unbekannt |

### PTCANSIGNALE

| PTCAN_FEHLER_WERT | PTCAN_FEHLER_TEXT |
| --- | --- |
| 0x0000 | kein Fehler |
| 0x8002 | Init Fehler |
| 0x8004 | Timeout Fehler |
| 0x8008 | Fehlerwert |
| 0xFFFF | unbekannter CAN Fehler |

### STATUSDSC

| STATUS_PTCAN_DSC_WERT | STATUS_PTCAN_DSC_TEXT |
| --- | --- |
| 0x00 | in Ordnung |
| 0x01 | passiv |
| 0x02 | defekt |
| 0x04 | Traktionsmodus |
| 0x07 | Signal ungueltig |
| 0xFF | unbekannter Status |

### PRE_DRIVE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x90 | 0x91 | 0x92 | 0x93 |

### PRE_DRIVE_1

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0001 | Umlaufdruck temp. zu hoch o. Oel zu kalt |
| 0xFFFF | unbekannter Fehler |

### PRE_DRIVE_2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0002 | Umlaufdruck dauerhaft zu hoch |
| 0xFFFF | unbekannter Fehler |

### PRE_DRIVE_3

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0004 | Motor in Fahrt gestoppt |
| 0xFFFF | unbekannter Fehler |

### PRE_DRIVE_4

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0008 | Zuschalten nach Reset waehrend Fahrt |
| 0xFFFF | unbekannter Fehler |

### INBETR

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0xA0 | 0xA1 | 0xA2 | 0xA3 | 0xA4 | 0xA5 | 0xA6 |

### INBETR_1

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0001 | LowLevel oder PreDrive Fehler |
| 0xFFFF | unbekannter Fehler |

### INBETR_2

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0002 | Abbruch durch Tester |
| 0xFFFF | unbekannter Fehler |

### INBETR_3

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0004 | Motordrehzahl zu hoch |
| 0xFFFF | unbekannter Fehler |

### INBETR_4

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0008 | Motordrehzahl zu niedrig |
| 0xFFFF | unbekannter Fehler |

### INBETR_5

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0010 | Warnung Luft VA |
| 0xFFFF | unbekannter Fehler |

### INBETR_6

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0020 | Dynamik Fehler VA |
| 0xFFFF | unbekannter Fehler |

### INBETR_7

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | IO |
| 0x0040 | Dynamik Fehler VA/HA |
| 0xFFFF | unbekannter Fehler |

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
