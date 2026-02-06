# bfh_e65.prg

## General

|  |  |
| --- | --- |
| File | bfh_e65.prg |
| Type | PRG |
| Jobs | 84 |
| Tables | 21 |
| Origin | BMW EI-61 Jasny |
| Revision | 1.00 |
| Author | TEMIC L/B2/ES Ahle |
| ECU Comment | SGBD fuer Sitzsteuergeraet Hecksitz Beifahrer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sitzsteuergeraet Hecksitz Beifahrer E65 |  |  |
| ORIGIN | string | BMW EI-61 Jasny |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | TEMIC L/B2/ES Ahle |  |  |
| COMMENT | string | SGBD fuer Sitzsteuergeraet Hecksitz Beifahrer |  |  |
| PACKAGE | string | 1.25 |  |  |
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

### FS_LOESCHEN_EINZELN

Fehlerspeicher loeschen, einzelner Fehler KWP2000: $14 ClearDiagnosticInformation $xxxx DTC (SM-spezifisch) SM-spezifischer Job Beispielargument: "0x9E48" siehe auch unter Befehl fs_lesen, Result F_ORT_NR

| Name | Type | Description |
| --- | --- | --- |
| NR_OF_DTC | int | einzelner zu loeschender Fehler speziell fuer Shadow-Speicher |

### READ_ENERGY_SAVING_STATE

Aktuellen FETRAWE-Mode des SG auslesen FETRAWE-Mode: Fertigungs-, Transport- und Werkstatt- Mode KWP2000: $22 ReadDataByCommonIdentifier $100A EnergySavingState

_No arguments._

### START_COMMUNICATION

Kommunikation mit Standard KWP2000 starten KWP2000: $81 StartCommunication

_No arguments._

### STOP_COMMUNICATION

Kommunikation mit Standard KWP2000 beenden KWP2000: $82 StopCommunication

_No arguments._

### IDENT_BMW_NR

Auslesen BMW-Teilenummer KWP2000: $1A ReadECUIdentification IO     : 91

_No arguments._

### IDENT_BOOTLOADER_SW_NR

Auslesen der Bootloader SW Versionsnummer KWP2000: $1A ReadECUIdentification IO     : 8A

_No arguments._

### IDENT_CHANGE_INDEX

Auslesen BMW-Teilenummer KWP2000: $1A ReadECUIdentification IO     : 88

_No arguments._

### IDENT_READ_CURRENT_UIF_TABLE

Aktuelles UIF mit $1A $86 auslesen KWP2000: $1A ReadECUIdentification IO     : $86 Read Current ECU-UIF-Table

_No arguments._

### IDENT_TEMIC_HW_NR

Auslesen TEMIC-Teilenummer KWP2000: $1A ReadECUIdentification IO: 92

_No arguments._

### IDENT_TEMIC_HW_VERS_NR

Auslesen TEMIC-HW-Versions-Nummern KWP2000: $1A ReadECUIdentification IO: 93

_No arguments._

### STATUS_FEH_SCHALTER_GET

Auslesen des Portzustandes für Erkennung Fond-Einstiegshilfe Vor/zurueck KWP2000: $30 InputOutputControlByLocalIdentifier IOLI = 0x04 0x04 inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_HALL_AD_GET

AD-Werte der Hallsensoren auslesen KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x18 0x0A inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_HALL_COUNTER_GET

alle Hallzählerstände auslesen KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x18 0x0E inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_HEIZ_GET

Auslesen von Heizungs-Temperatur-Werten KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x20 0x02 inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_LP_TEMP_GET

Auslesen intern gemessenener Leiterplattentemperatur KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x04 0x01 inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_LVK_GET

Auslesen des Sitz-Lehne-Verriegelungswertes KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x04 0x02 inputOutputControlParameter: 0x01 (reportCurrentState) +---------+----------------+ | AD-Wert |  LVK Status    | +---------+----------------+ |   0- 26 | MasseSchluss   | |  27-126 | ungueltig      | | 127-153 | entriegelt     | | 154-210 | ungueltig      | | 211-237 | verriegelt     | | 238-255 | nicht gesteckt | +---------+----------------+

_No arguments._

### STATUS_SITZPOS_GET

Auslesen des Portzustandes für Erkennung Sitz vorne/hinten und Fahrer/Beifahrer KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x04 0x00 inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_SPANNUNG_GET

Auslesen interner gemessener Spannungswerte bzw. Zustand KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x08 0x03 inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### STATUS_SVS_GET

Auslesen des Sitz-Verstell-Schalter Wertes KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x04 0x03 inputOutputControlParameter: 0x01 (reportCurrentState) +---------+-------------+-------------+-------------------------+ | AD-Wert |  Kanal A    |  Kanal B    |  Kanal C                | +---------+-------------+-------------+-------------------------+ |   0- 26 | MasseSchluss| MasseSchluss| MasseSchluss            | |  27- 61 | SLVvor      | LNVvor      | SNVtief                 | |  62- 97 | SLVzurueck  | LNVzurueck  | SNVhoch                 | |  98-133 | SHVtief     | KHVtief     | Memorytaste             | | 134-171 | SHVhoch     | KHVhoch     | -----------             | | 172-214 | MemoryPos1  | MemoryPos2  | Sitzmodul gesteckt      | | 215-255 | kein Taster | kein Taster | Sitzmodul nicht gesteckt| +---------+-------------+-------------+-------------------------+

_No arguments._

### STEUERN_HALL_COUNTER_RESET

Reset der Hallzähler durchführen KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x18 0x09 inputOutputControlParameter: 0x06 (executeControlOption)

_No arguments._

### STEUERN_HALL_TEST

Testroutine für Hallzähler starten/stoppen KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x18 0xXX (XX = 00..08, Wert zu Argument 1 = Motor-Bezeichnung) inputOutputControlParameter: 0x06 (executeControlOption) controlState (Argument 2): 0x01, 0x00  Timeoutzeit: 10s

| Name | Type | Description |
| --- | --- | --- |
| NAME | string | Motor-Bezeichnung: "SLV", "SHV", "LNV", "SNV", "KHV" table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert: "SLV" = 0x00 |
| AKTION | string | "start" oder "stop" table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: "STOP" = 0 |

### STEUERN_HEIZ

Ansteuerung der Heizungstreiber über I/O-Control KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x20 IOLI = 0x20 0x00 inputOutputControlParameter: 0x06 (executeControlOption) controlState (Argument): 0x01, 0x00  Timeoutzeit: 10s

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | "an" oder "aus" table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: AUS = 0 |

### STEUERN_HEIZ_TAKT

Getaktete Ansteuerung des Heizungstreibers über I/O-Control KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x20 IOLI = 0x20 0x01 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1:  Heizungsstufe Argument 2:  Taktverhältnis  PWM in %  Funktionsbedingungen für Stufe1, Stufe2 und Stufe3: Klemme R und Klemme 15 an  Timeoutzeit: 250s

| Name | Type | Description |
| --- | --- | --- |
| STUFE | string | Heizungsstufe: "Stufe0", "Stufe1", "Stufe2", "Stufe3", "Stufe255" table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: "STUFE0" = 0x00 |
| TAKT | unsigned char | Taktverhältnis von 0 bis 100 (%) Defaultwert: 0 |

### STEUERN_MOTOR

Ansteuerung der Verstellmotoren über I/O-Control KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x10 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Motor-Bezeichnung --> 0x00..0x05 controlState (Argument 2): 0x01, 0x02, 0x00 Argument 3: Takt für PWM-Ansteuerung --> 0..100 (%) oder 200 (Normierlauf)  Timeoutzeit: 3s

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | string | Motor-Bezeichnung ("SLV", "FEH", "SHV", "LNV", "SNV", "KHV" table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert: SLV = 0 |
| AKTION | string | Bewegungsrichtung bzw. Stop: "hoch", "vor", "breit"  --> cS=0x01 "tief", "zur", "schmal" --> cS=0x02 "stop"                  --> cS=0x00 table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: "STOP" = 0x00 |

### STEUERN_SPANNUNG

Ein/Ausschalten von internen Betriebsspannungen KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x08 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Name d. Spg. --> 0x00..0x02 controlState (Argument 2): 0x01, 0x00  Timeoutzeit: 60s

| Name | Type | Description |
| --- | --- | --- |
| SPANNUNG | string | Name der internen Spannung ("U12S", "Kl30S", "KL30V") table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert: "U12S" = 0x00 |
| AKTION | string | "an" oder "aus" table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: AUS = 0 |

### STEUERN_SVS_LED

Ein/Ausschalten von Sitz-Verstell-Schalter LED KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x06 (executeControlOption) controlState (Argument 1): 0x01, 0x00  Timeoutzeit: 60s

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | "an" oder "aus" table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: AUS = 0 |

### _CD_LESEN

Codierdaten lesen KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CD_ADRESS | unsigned int | im Bereich 0x3000 bis 0x3FFF |

### _CD_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CD_ADRESS | unsigned int | im Bereich 0x3000 bis 0x3FFF |
| CD_ANZAHL | int | 1 - n ( max. 249 ) |
| CD_DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### _STATUS_SONDERAUSSTATTUNG

Status einer SA-Ansteuerung ueber Schalter KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### _STATUS_VERSTELLUNG

alle Hallzählerstände auslesen Job ist identisch zu STATUS_HALL_COUNTER_GET KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (LocalIdentifier): IOLI = 0x18 0x0E inputOutputControlParameter: 0x01 (reportCurrentState)

_No arguments._

### _STEUERN_FEH

Simulation der FEH-Ansteuerung ueber Schalter KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x11 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Richtung. --> 0x00..0x02  Timeoutzeit: 3s

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Name ("unbetaetigt", "vor", "zur") Wert ( 0           ,  1   ,  2   ) table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert = unbetaetigt |

### _STEUERN_KLEMMEN_STATUS

Simulation des KEMMENSTATUS KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Klemmenstatus ueber Bus oder Diagnose 0..1 Argument 2: KLR  --> 0x00..1 Argument 3: KL15 --> 0x00..1 Argument 4: KL50 --> 0x00..1 

| Name | Type | Description |
| --- | --- | --- |
| BUS | string | "ein" -> Klemmenstatus ueber CAN BUS aktiv "aus" -> Klemmenstatus ueber CAN BUS deaktiviert table DigitalArgument TEXT Default: "aus" |
| KLR | string | "ein" -> KLR ein "aus" -> KLR aus table DigitalArgument TEXT Default: "aus" |
| KL15 | string | "ein" -> KL15 ein "aus" -> KL15 aus table DigitalArgument TEXT Default: "aus" |
| KL50 | string | "ein" -> KL50 ein "aus" -> KL50 aus table DigitalArgument TEXT Default: "aus" |

### _STEUERN_MEMORY

Simulation einer Memoryansteuerung ueber Schalter KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Taste. --> 0x00..0x02 Argument 2: AKTION --> 0x00..1  Timeoutzeit: 3s

| Name | Type | Description |
| --- | --- | --- |
| TASTE | string | Tasten-Bezeichnung ("MEM", "M1", "M2") Tasten-Werte       (   0,    1,    2 ) table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert = "MEM" |
| AKTION | string | Taste "an", "aus" table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert = "aus" |

### _STEUERN_NORMIERLAUF

Anstossen des Normierlaufs fuer SLV und KHV KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x06 (executeControlOption) 

_No arguments._

### _STEUERN_PERSONALISIERUNG_MMI

Simulation der CKM-Ansteuerung KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Schluesselnummer. --> 0xFF..0x03 

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL | unsigned char | Schluessel (15, 0 .. 3) 15 ist ungueltiger Schluessel Defaultwert ist Schluessel 0 |

### _STEUERN_SONDERAUSSTATTUNG

Simulation einer SA-Ansteuerung ueber Schalter KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x04 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Name d. SA. --> 0x00 Argument 2: AKTION --> 0x00..1  Timeoutzeit: 3s

| Name | Type | Description |
| --- | --- | --- |
| SA | string | SA-Bezeichnung ("HEIZUNG") table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert: HEIZUNG = 0 |
| TASTENDRUCKDAUER | string | Bei SA Heizung Tastendruckdauer "kurz" oder  "lang" 0     oder   1 table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: "kurz" = 0x00 |

### _STEUERN_VERSTELLUNG

Motoransteuerung wie ueber CAN BEDIENUNG_SITZ_... KWP2000: $30 InputOutputControlByLocalIdentifier Jobnummer (Identifier): 0x12 inputOutputControlParameter: 0x06 (executeControlOption) Argument 1: Motor-Bezeichnung --> 0x00..0x05 Argument 2: Motor-Aktion --> 0x01, 0x02, 0x00  Timeoutzeit: 3s

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | string | Motor-Bezeichnung "SLV", "SHV", "LNV", "SNV", "KHV" 0   ,  1   ,  2   ,  3   ,  4 table IOCTRL_Arg   ARG_TEXT ARG_WERT Defaultwert: SLV = 0 |
| AKTION | string | Bewegungsrichtung bzw. Stop: "hoch", "vor", "breit"  --> cS=0x01 "tief", "zur", "schmal" --> cS=0x02 "stop"                  --> cS=0x00 table IOCTRL_Arg ARG_TEXT ARG_WERT Defaultwert: "STOP" = 0x00 |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_INVALID_ARGUMENT |
| 0x01 | ERROR_INVALID_RESULT_VALUE |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | SMFA keine Hallimpulse SLV  |
| 0x9E49 | SMFA keine Hallimpulse SHV  |
| 0x9E4A | SMFA keine Hallimpulse LNV  |
| 0x9E4B | SMFA keine Hallimpulse SNV  |
| 0x9E4C | SMFA keine Hallimpulse KHV  |
| 0x9E4D | SMFA keine Hallimpulse FEH  |
| 0x9E4E | SMFA Fehler Motor SLV  |
| 0x9E4F | SMFA Fehler Motor SHV  |
| 0x9E50 | SMFA Fehler Motor LNV  |
| 0x9E51 | SMFA Fehler Motor SNV  |
| 0x9E52 | SMFA Fehler Motor KHV  |
| 0x9E53 | SMFA Fehler Motor FEH  |
| 0x9E54 | SMFA Fehler Heizfeld NTC  |
| 0x9E55 | SMFA Fehler Heizfeld Kissen  |
| 0x9E56 | SMFA Fehler Heizfeld Lehne  |
| 0x9E57 | SMFA Interner Fehler Versorgungsspannung U12s  |
| 0x9E58 | SMFA Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E59 | SMFA Interner Fehler EEPROM  |
| 0x9E5A | SMFA Energiesparmode aktiv  |
| 0x9E5B | SMFA Fehler Schalter SVS  |
| 0x9E5C | SMFA Fehler Schalter FEH  |
| 0x9E5D | SMFA Fehler Schalter LVK  |
| 0xE444 | CAN-Low, Physikalischer Busfehler  |
| 0xE447 | Controller, Bus off  |
| 0x9EA8 | SMBF keine Hallimpulse SLV  |
| 0x9EA9 | SMBF keine Hallimpulse SHV  |
| 0x9EAA | SMBF keine Hallimpulse LNV  |
| 0x9EAB | SMBF keine Hallimpulse SNV  |
| 0x9EAC | SMBF keine Hallimpulse KHV  |
| 0x9EAD | SMBF keine Hallimpulse FEH  |
| 0x9EAE | SMBF Fehler Motor SLV  |
| 0x9EAF | SMBF Fehler Motor SHV  |
| 0x9EB0 | SMBF Fehler Motor LNV  |
| 0x9EB1 | SMBF Fehler Motor SNV  |
| 0x9EB2 | SMBF Fehler Motor KHV  |
| 0x9EB3 | SMBF Fehler Motor FEH  |
| 0x9EB4 | SMBF Fehler Heizfeld NTC  |
| 0x9E55 | SMFA Fehler Heizfeld Kissen  |
| 0x9E56 | SMFA Fehler Heizfeld Lehne  |
| 0x9EB7 | SMBF Interner Fehler Versorgungsspannung U12s  |
| 0x9EB8 | SMBF Interner Fehler Versorgungsspannung Kl30s  |
| 0x9EB9 | SMBF Interner Fehler EEPROM  |
| 0x9EBA | SMBF Energiesparmode aktiv  |
| 0x9EBB | SMBF Fehler Schalter SVS  |
| 0x9EBC | SMBF Fehler Schalter FEH  |
| 0x9EBD | SMBF Fehler Schalter LVK  |
| 0xE484 | CAN-Low, Physikalischer Busfehler  |
| 0xE487 | Controller, Bus off  |
| 0x9F08 | SMFAH keine Hallimpulse SLV  |
| 0x9F09 | SMFAH keine Hallimpulse SHV  |
| 0x9F0A | SMFAH keine Hallimpulse LNV  |
| 0x9F0B | SMFAH keine Hallimpulse SNV  |
| 0x9F0C | SMFAH keine Hallimpulse KHV  |
| 0x9F0D | SMFAH keine Hallimpulse FEH  |
| 0x9F0E | SMFAH Fehler Motor SLV  |
| 0x9F0F | SMFAH Fehler Motor SHV  |
| 0x9F10 | SMFAH Fehler Motor LNV  |
| 0x9F11 | SMFAH Fehler Motor SNV  |
| 0x9F12 | SMFAH Fehler Motor KHV  |
| 0x9F13 | SMFAH Fehler Motor FEH  |
| 0x9F14 | SMFAH Fehler Heizfeld NTC  |
| 0x9F15 | SMFAH Fehler Heizfeld Kissen  |
| 0x9F16 | SMFAH Fehler Heizfeld Lehne  |
| 0x9F17 | SMFAH Interner Fehler Versorgungsspannung U12s  |
| 0x9F18 | SMFAH Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F19 | SMFAH Interner Fehler EEPROM  |
| 0x9F1A | SMFAH Energiesparmode aktiv  |
| 0x9F1B | SMFAH Fehler Schalter SVS  |
| 0x9F1C | SMFAH Fehler Schalter FEH  |
| 0x9F1D | SMFAH Fehler Schalter LVK  |
| 0xE344 | CAN-Low, Physikalischer Busfehler  |
| 0xE347 | Controller, Bus off  |
| 0x9F68 | SMBFH keine Hallimpulse SLV  |
| 0x9F69 | SMBFH keine Hallimpulse SHV  |
| 0x9F6A | SMFAH keine Hallimpulse LNV  |
| 0x9F6B | SMFAH keine Hallimpulse SNV  |
| 0x9F6C | SMFAH keine Hallimpulse KHV  |
| 0x9F6D | SMFAH keine Hallimpulse FEH  |
| 0x9F6E | SMFAH Fehler Motor SLV  |
| 0x9F6F | SMFAH Fehler Motor SHV  |
| 0x9F70 | SMFAH Fehler Motor LNV  |
| 0x9F71 | SMFAH Fehler Motor SNV  |
| 0x9F72 | SMFAH Fehler Motor KHV  |
| 0x9F73 | SMFAH Fehler Motor FEH  |
| 0x9F74 | SMFAH Fehler Heizfeld NTC  |
| 0x9F15 | SMFAH Fehler Heizfeld Kissen  |
| 0x9F16 | SMFAH Fehler Heizfeld Lehne  |
| 0x9F77 | SMFAH Interner Fehler Versorgungsspannung U12s  |
| 0x9F78 | SMFAH Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F79 | SMFAH Interner Fehler EEPROM  |
| 0x9F7A | SMFAH Energiesparmode aktiv  |
| 0x9F7B | SMFAH Fehler Schalter SVS  |
| 0x9F7C | SMFAH Fehler Schalter FEH  |
| 0x9F7D | SMFAH Fehler Schalter LVK  |
| 0xE384 | CAN-Low, Physikalischer Busfehler  |
| 0xE387 | Controller, Bus off  |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | -- | -- | -- |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Aussentemperatur | Grad C | -- | unsigned char | -- | 1 | 2 | -40 |
| 0x02 | Batteriespannung | Volt | -- | unsigned char | -- | 25 | 255 | 0 |
| 0x03 | Motordrehzahl | 1/min | low | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9EA6 | SMFA Fehler Steuergerätetemperatur  |
| 0x9EA7 | SMFA Versorgungsspannungsfehler  |
| 0x9F06 | SMBF Fehler Steuergerätetemperatur  |
| 0x9F07 | SMBF Versorgungsspannungsfehler  |
| 0x9F66 | SMFAH Fehler Steuergerätetemperatur  |
| 0x9F67 | SMFAH Versorgungsspannungsfehler  |
| 0x9FC6 | SMBFH Fehler Steuergerätetemperatur  |
| 0x9FC7 | SMBFH Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | -- | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Aussentemperatur | Grad C | -- | unsigned char | -- | 1 | 2 | -40 |
| 0x02 | Batteriespannung | Volt | -- | unsigned char | -- | 25 | 255 | 0 |
| 0x03 | Motordrehzahl | 1/min | low | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### IOCTRL_ARG

| ARG_TEXT | ARG_WERT |
| --- | --- |
| VOR | 1 |
| ZUR | 2 |
| STOP | 0 |
| HOCH | 1 |
| TIEF | 2 |
| BREIT | 1 |
| SCHMAL | 2 |
| VOLL | 1 |
| LEER | 2 |
| AN | 1 |
| AUS | 0 |
| START | 1 |
| STOP | 0 |
| SLV | 0 |
| SHV | 1 |
| LNV | 2 |
| SNV | 3 |
| KHV | 4 |
| FEH | 5 |
| U12S | 0 |
| Kl30S | 1 |
| Kl30V | 2 |
| STUFE0 | 0 |
| STUFE1 | 1 |
| STUFE2 | 2 |
| STUFE3 | 3 |
| STUFE255 | 255 |

### IOCTRL_LP_TEMP

| DIGIT_TXT | GRAD_WERT |
| --- | --- |
| 1 |  350.3 |
| 2 |  282.3 |
| 3 |  248.8 |
| 4 |  227.3 |
| 5 |  211.8 |
| 6 |  199.7 |
| 7 |  190.0 |
| 8 |  181.8 |
| 9 |  174.8 |
| 10 |  168.7 |
| 11 |  163.3 |
| 12 |  158.4 |
| 13 |  154.0 |
| 14 |  150.1 |
| 15 |  146.4 |
| 16 |  143.0 |
| 17 |  139.8 |
| 18 |  136.9 |
| 19 |  134.2 |
| 20 |  131.6 |
| 21 |  129.1 |
| 22 |  126.8 |
| 23 |  124.6 |
| 24 |  122.5 |
| 25 |  120.5 |
| 26 |  118.6 |
| 27 |  116.8 |
| 28 |  115.1 |
| 29 |  113.4 |
| 30 |  111.8 |
| 31 |  110.2 |
| 32 |  108.7 |
| 33 |  107.2 |
| 34 |  105.8 |
| 35 |  104.5 |
| 36 |  103.2 |
| 37 |  101.9 |
| 38 |  100.6 |
| 39 |   99.4 |
| 40 |   98.2 |
| 41 |   97.1 |
| 42 |   96.0 |
| 43 |   94.9 |
| 44 |   93.8 |
| 45 |   92.8 |
| 46 |   91.8 |
| 47 |   90.8 |
| 48 |   89.8 |
| 49 |   88.8 |
| 50 |   87.9 |
| 51 |   87.0 |
| 52 |   86.1 |
| 53 |   85.2 |
| 54 |   84.4 |
| 55 |   83.5 |
| 56 |   82.7 |
| 57 |   81.9 |
| 58 |   81.0 |
| 59 |   80.3 |
| 60 |   79.5 |
| 61 |   78.7 |
| 62 |   77.9 |
| 63 |   77.2 |
| 64 |   76.5 |
| 65 |   75.7 |
| 66 |   75.0 |
| 67 |   74.3 |
| 68 |   73.6 |
| 69 |   72.9 |
| 70 |   72.3 |
| 71 |   71.6 |
| 72 |   70.9 |
| 73 |   70.3 |
| 74 |   69.6 |
| 75 |   69.0 |
| 76 |   68.4 |
| 77 |   67.7 |
| 78 |   67.1 |
| 79 |   66.5 |
| 80 |   65.9 |
| 81 |   65.3 |
| 82 |   64.7 |
| 83 |   64.1 |
| 84 |   63.5 |
| 85 |   63.0 |
| 86 |   62.4 |
| 87 |   61.8 |
| 88 |   61.3 |
| 89 |   60.7 |
| 90 |   60.1 |
| 91 |   59.6 |
| 92 |   59.0 |
| 93 |   58.5 |
| 94 |   58.0 |
| 95 |   57.4 |
| 96 |   56.9 |
| 97 |   56.4 |
| 98 |   55.9 |
| 99 |   55.3 |
| 100 |   54.8 |
| 101 |   54.3 |
| 102 |   53.8 |
| 103 |   53.3 |
| 104 |   52.8 |
| 105 |   52.3 |
| 106 |   51.8 |
| 107 |   51.3 |
| 108 |   50.8 |
| 109 |   50.3 |
| 110 |   49.8 |
| 111 |   49.3 |
| 112 |   48.9 |
| 113 |   48.4 |
| 114 |   47.9 |
| 115 |   47.4 |
| 116 |   46.9 |
| 117 |   46.5 |
| 118 |   46.0 |
| 119 |   45.5 |
| 120 |   45.1 |
| 121 |   44.6 |
| 122 |   44.1 |
| 123 |   43.7 |
| 124 |   43.2 |
| 125 |   42.7 |
| 126 |   42.3 |
| 127 |   41.8 |
| 128 |   41.3 |
| 129 |   40.9 |
| 130 |   40.4 |
| 131 |   40.0 |
| 132 |   39.5 |
| 133 |   39.1 |
| 134 |   38.6 |
| 135 |   38.2 |
| 136 |   37.7 |
| 137 |   37.2 |
| 138 |   36.8 |
| 139 |   36.3 |
| 140 |   35.9 |
| 141 |   35.4 |
| 142 |   35.0 |
| 143 |   34.5 |
| 144 |   34.1 |
| 145 |   33.6 |
| 146 |   33.2 |
| 147 |   32.7 |
| 148 |   32.3 |
| 149 |   31.8 |
| 150 |   31.4 |
| 151 |   30.9 |
| 152 |   30.5 |
| 153 |   30.0 |
| 154 |   29.6 |
| 155 |   29.1 |
| 156 |   28.6 |
| 157 |   28.2 |
| 158 |   27.7 |
| 159 |   27.3 |
| 160 |   26.8 |
| 161 |   26.3 |
| 162 |   25.9 |
| 163 |   25.4 |
| 164 |   24.9 |
| 165 |   24.5 |
| 166 |   24.0 |
| 167 |   23.5 |
| 168 |   23.1 |
| 169 |   22.6 |
| 170 |   22.1 |
| 171 |   21.6 |
| 172 |   21.1 |
| 173 |   20.7 |
| 174 |   20.2 |
| 175 |   19.7 |
| 176 |   19.2 |
| 177 |   18.7 |
| 178 |   18.2 |
| 179 |   17.7 |
| 180 |   17.2 |
| 181 |   16.7 |
| 182 |   16.2 |
| 183 |   15.7 |
| 184 |   15.1 |
| 185 |   14.6 |
| 186 |   14.1 |
| 187 |   13.6 |
| 188 |   13.0 |
| 189 |   12.5 |
| 190 |   11.9 |
| 191 |   11.4 |
| 192 |   10.8 |
| 193 |   10.3 |
| 194 |    9.7 |
| 195 |    9.1 |
| 196 |    8.6 |
| 197 |    8.0 |
| 198 |    7.4 |
| 199 |    6.8 |
| 200 |    6.2 |
| 201 |    5.5 |
| 202 |    4.9 |
| 203 |    4.3 |
| 204 |    3.6 |
| 205 |    3.0 |
| 206 |    2.3 |
| 207 |    1.6 |
| 208 |    0.9 |
| 209 |    0.2 |
| 210 |   -0.5 |
| 211 |   -1.2 |
| 212 |   -2.0 |
| 213 |   -2.7 |
| 214 |   -3.5 |
| 215 |   -4.3 |
| 216 |   -5.1 |
| 217 |   -6.0 |
| 218 |   -6.8 |
| 219 |   -7.7 |
| 220 |   -8.6 |
| 221 |   -9.6 |
| 222 |  -10.5 |
| 223 |  -11.5 |
| 224 |  -12.6 |
| 225 |  -13.7 |
| 226 |  -14.8 |
| 227 |  -16.0 |
| 228 |  -17.2 |
| 229 |  -18.5 |
| 230 |  -19.9 |
| 231 |  -21.3 |
| 232 |  -22.9 |
| 233 |  -24.6 |
| 234 |  -26.3 |
| 235 |  -28.3 |
| 236 |  -30.5 |
| 237 |  -32.9 |
| 238 |  -35.6 |
| 239 |  -38.8 |
| 240 |  -42.6 |
| 241 |  -47.5 |
| 242 |  -54.5 |
| 243 |  -67.6 |
| 244 |  -76.5 |
| 245 |  -63.4 |
| 246 |  -57.0 |
| 247 |  -52.6 |
| 248 |  -49.3 |
| 249 |  -46.5 |
| 250 |  -44.2 |
| 251 |  -42.2 |
| 252 |  -40.5 |
| 253 |  -38.9 |
| 254 |  -37.5 |
| 255 |  -36.2 |
