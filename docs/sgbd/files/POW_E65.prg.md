# POW_E65.prg

## General

|  |  |
| --- | --- |
| File | POW_E65.prg |
| Type | PRG |
| Jobs | 72 |
| Tables | 19 |
| Origin | BMW EE-10 Traub |
| Revision | 1.04 |
| Author | Hella KG EE-325 Lindhauer, BMW TI-431 Mellersh |
| ECU Comment | SGBD fuer Powermodul E65 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Powermodul E65 |  |  |
| ORIGIN | string | BMW EE-10 Traub |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | Hella KG EE-325 Lindhauer, BMW TI-431 Mellersh |  |  |
| COMMENT | string | SGBD fuer Powermodul E65 |  |  |
| PACKAGE | string | 1.21 |  |  |
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

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### STATUS_PM_SWNR_LESEN

Auslesen der Powermodulsoftware-Nr. KWP2000: $21 ReadDataByLocalIdentifier $28 RecordLocalIdentifier: Powermodulsoftware-Nr. (Identifier value defined by system designer)

_No arguments._

### STATUS_BATTERIELADUNGSZUSTAND

Auslesen des Batterieladungszustands KWP2000: $21 ReadDataByLocalIdentifier $23 RecordLocalIdentifier: Batterieladungszustand (Identifier value defined by system designer) unter Zuhilfenahme von $22   ReadDataByCommonIdentifier $3000 Codierdatengruppe Power_Modul Byte2: Batteriekapazitaet aus Codierdaten lesen

_No arguments._

### STATUS_BATTERIEKALIBRIERUNGSWERTE

Auslesen der Batteriekalibrierungswerte *********************************************************** *** Aufgrund einer geaenderten Batteriekalibriermethode *** ***          ist der Job nicht mehr gueltig !!!         *** *********************************************************** KWP2000: $21 ReadDataByLocalIdentifier $24 RecordLocalIdentifier (Identifier value defined by system designer)

_No arguments._

### STATUS_BATTERIE_STATISTIC

Batterie-Statistik KWP2000: $21 ReadDataByLocalIdentifier $26 RecordLocalIdentifier: Batterie-Statistik (Identifier value defined by system designer)

_No arguments._

### STATUS_BATTERIE_HISTORY

Batterie-History KWP2000: $21 ReadDataByLocalIdentifier $27 RecordLocalIdentifier: Batterie-History (Identifier value defined by system designer)

_No arguments._

### STATUS_POWERMANAGEMENT_INFO

Infos zur Ladezustandsberechnung KWP2000: $21 ReadDataByLocalIdentifier $12 RecordLocalIdentifier: Infos zur Ladezustandsberechnung (Identifier value defined by system designer)

_No arguments._

### STATUS_POWERMANAGEMENT_HISTORY

Powermanagement-History KWP2000: $21 ReadDataByLocalIdentifier $2B RecordLocalIdentifier: Powermanagement-History (Identifier value defined by system designer)

_No arguments._

### STATUS_BATTERIETRENNUNGSANZAHL

Anzahl der Batterietrennungen durch I_RUHE_ZU_GROSS (I_Ruhe > 80 mA), I_MAX_ZU_GROSS ("Vorgluehfehler"), STANDZEIT_UEBERSCHRITTEN oder STARTFAEHIGKEIT_GEFAEHRDET Folgende Batterietrenngruende werden nicht mitgezaehlt: DISTRIBUTIONSMODUS_AKTIVIERT, KURZSCHLUSS_ERKANNT und TRENNUNG_PER_DIAGNOSEBEFEHL KWP2000: $21 ReadDataByLocalIdentifier $29 RecordLocalIdentifier: Batterietrennungsanzahl (Identifier value defined by system designer)

_No arguments._

### STATUS_BATTERIETRENNGRUND

Lesen der Batterietrenngruende KWP2000: $21 ReadDataByLocalIdentifier $25 RecordLocalIdentifier: Batterietrenngruende (Identifier value defined by system designer)

_No arguments._

### STATUS_RUHESTROMWECKZAEHLER

Anzahl der Weckungen durch I_RUHE_ZU_GROSS (I_Ruhe > 80 mA) KWP2000: $21 ReadDataByLocalIdentifier $2C RecordLocalIdentifier: Ruhestromweckzaehler (Identifier value defined by system designer)

_No arguments._

### STATUS_VERBRAUCHERPRIORITAETEN

Auslesen der Verbraucherprioritaeten (Dieser Job wird unterstuetzt ab SW 0.35) KWP2000: $21 ReadDataByLocalIdentifier $2A RecordLocalIdentifier: Verbraucherprioritaeten (Identifier value defined by system designer)

_No arguments._

### STATUS_SPANNUNGSWERTE

Auslesen der Spannungswerte KWP2000: $21 ReadDataByLocalIdentifier $21 RecordLocalIdentifier (Identifier value defined by system designer)

_No arguments._

### STATUS_SPANNUNGSWERTE_MULTIFUSES

Auslesen der Spannungswerte der Multifuses KWP2000: $21 ReadDataByLocalIdentifier $2D RecordLocalIdentifier (Identifier value defined by system designer)

_No arguments._

### STATUS_TEMPERATUR

Auslesen der Hybrid- und Batterietemperatur KWP2000: $21 ReadDataByLocalIdentifier $22 RecordLocalIdentifier: Temperaturen (Identifier value defined by system designer)

_No arguments._

### STATUS_STROMWERTE

Auslesen saemtlicher zur Verfuegung stehender Stromwerte des Powermoduls KWP2000: $21 ReadDataByLocalIdentifier $20 RecordLocalIdentifier: Stroeme (Identifier value defined by system designer)

_No arguments._

### STATUS_DIGITAL

Lesen digitaler Stati des Powermoduls KWP2000: $30 InputOutputControlByLocalIdentifier $01 Alle digitalen Stati (InputOutputLocalIdentifier value defined by system designer) $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_AUSGANG_AUSSCHALTEN

Ausschalten der Powermodulausgaenge KL30, HHS, KL15, KLR, VAK, VAD oder LM ACHTUNG: Ausgang IB kann nur getoggelt werden, hierfuer bitte den Job STEUERN_AUSGANG_EINSCHALTEN_BZW_TOGGELN verwenden KWP2000: $30 InputOutputControlByLocalIdentifier $XX InputOutputLocalIdentifier des entsprechenden Ausgangs $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSGANG_NAME | string | InputOutputLocalIdentifier des entsprechenden Ausgangs Werte: "KL30", "HHS", "KL15", "KLR", "VAK", "VAD", "LM" table PowermodulAusgaenge TEXT |

### STEUERN_AUSGANG_EINSCHALTEN_BZW_TOGGELN

Einschalten der Powermodulausgaenge KL30, HHS, KL15, KLR, VAK, VAD, TKLM_E, TKLM_V, HKLM, SCAM_OT, SCAM_UT oder LM bzw. Toggeln des Ausgangs IB KWP2000: $30 InputOutputControlByLocalIdentifier $XX InputOutputLocalIdentifier des entsprechenden Ausgangs $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| AUSGANG_NAME | string | InputOutputLocalIdentifier des entsprechenden Ausgangs Werte: "KL30", "HHS", "KL15", "KLR", "VAK", "VAD", "IB", "TKLM_E", "TKLM_V", "HKLM", "SCAM_OT", "SCAM_UT", "LM" table PowermodulAusgaenge TEXT |

### STEUERN_AUSGANG_RETURN_CONTROL

Rueckgabe der Kontrolle ueber den Powermodulausgang KL30, HHS, KL15, KLR, VAK, VAD, IB, TKLM_E, TKLM_V, HKLM, SCAM_OT, SCAM_UT oder LM KWP2000: $30 InputOutputControlByLocalIdentifier $XX InputOutputLocalIdentifier des entsprechenden Ausgangs $00 ReturnControlToECU

| Name | Type | Description |
| --- | --- | --- |
| AUSGANG_NAME | string | InputOutputLocalIdentifier des entsprechenden Ausgangs Werte: "KL30", "HHS", "KL15", "KLR", "VAK", "VAD", "IB", "TKLM_E", "TKLM_V", "HKLM", "SCAM_OT", "SCAM_UT", "LM" table PowermodulAusgaenge TEXT |

### STEUERN_RUHESTROMUEBERWACHUNG

Ruhestromueberwachung aktivieren/deaktivieren KWP2000: $3B WriteDataByLocalIdentifier $01 recordLocalIdentifier (Ruhestromueberwachung) $XX ein oder aus

| Name | Type | Description |
| --- | --- | --- |
| RUHESTROMUEBERWACHUNG | string | Werte: ein, aus table DigitalArgument TEXT ein = Ruhestromueberwachung aktivieren (Normalzustand) aus = Ruhestromueberwachung deaktivieren (Modus zur Fehlersuche) |

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

Batterietausch registrieren KWP2000: $3B WriteDataByLocalIdentifier $02 recordLocalIdentifier (Batterie wurde getauscht)

_No arguments._

### STEUERN_MESSEMODE

Messemodus aktivieren/deaktivieren KWP2000: $3B WriteDataByLocalIdentifier $03 recordLocalIdentifier (Ruhestromueberwachung) $XX ein oder aus

| Name | Type | Description |
| --- | --- | --- |
| MESSEMODE | string | Werte: ein, aus table DigitalArgument TEXT |

### STATUS_RESETZAEHLER

Auslesen des Reset-Zaehlers (Adresse $0F00) KWP 2000: $23 ReadMemoryByAddress seg = 00 adr = 0xF00 anz = 1 Modus   : Default

_No arguments._

### CHECK_CODIERDATEN

Codierdaten anhand der Checksumme ueberprufen KWP2000: $22   ReadDataByCommonIdentifier $3000 Codierdaten Modus  : Default KWP2000: $23   ReadMemoryByAddress $0E41 Adresse der Checksumme der Codierdaten

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
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA148 | Fehler ECU intern |
| 0xA149 | Fehler Input Kl.15 |
| 0xA14A | Fehler Batterieschalter |
| 0xA14B | Fehler Exzenterkontakt |
| 0xA14C | Fehler Batterietemperatursensor |
| 0xA14D | Fehler Treiber Kl.30 |
| 0xA14E | Fehler Treiber HHS |
| 0xA14F | Fehler Treiber IB |
| 0xA150 | Fehler Treiber Kl.15 |
| 0xA151 | Fehler Treiber Kl.R |
| 0xA152 | Fehler Treiber VA-Karosserie |
| 0xA153 | Fehler Treiber VA-Dach |
| 0xA154 | Fehler Tankklappenmotor |
| 0xA155 | Fehler Heckklappenmotor |
| 0xA156 | Fehler Heckklappenkontakt |
| 0xA157 | Fehler SCA-Motor |
| 0xA158 | Fehler Batterietrennung (Ruhestrom) |
| 0xA159 | Fehler Batterietrennung (Imax) |
| 0xA15A | Fehler Batterietrennung (Kurzschluss) |
| 0xA15B | Fehler Treiber LM |
| 0xA15C | Energiesparmodus |
| 0xA15D | Fehler Batterie-Tiefentladung |
| 0xA15E | Fehler Lichtmodul |
| 0xA15F | Messemode |
| 0xA160 | Fehler Multifuses |
| 0xD9C4 | CAN-Low, Physikalischer Busfehler |
| 0xD9C7 | Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA148 | - | - | - | - |
| 0xA149 | - | - | - | - |
| 0xA14A | - | - | - | - |
| 0xA14B | - | - | - | - |
| 0xA14C | - | - | - | - |
| 0xA14D | - | - | - | - |
| 0xA14E | - | - | - | - |
| 0xA14F | - | - | - | - |
| 0xA150 | - | - | - | - |
| 0xA151 | - | - | - | - |
| 0xA152 | - | - | - | - |
| 0xA153 | - | - | - | - |
| 0xA154 | - | - | - | - |
| 0xA155 | - | - | - | - |
| 0xA156 | - | - | - | - |
| 0xA157 | - | - | - | - |
| 0xA158 | 0x01 | - | - | - |
| 0xA159 | 0x01 | - | - | - |
| 0xA15A | 0x01 | - | - | - |
| 0xA15B | - | - | - | - |
| 0xA15C | - | - | - | - |
| 0xA15D | UWB_B_Tief | - | - | - |
| 0xA15E | Ursache_LM | - | - | - |
| 0xA15F | - | - | - | - |
| 0xA160 | Multifuse | - | - | - |
| 0xD9C4 | - | - | - | - |
| 0xD9C7 | - | - | - | - |
| default | - | - | - | - |

### UWB_B_TIEF

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 |

### URSACHE_LM

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x20 | 0x21 | 0x22 |

### MULTIFUSE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x30 | 0x31 | 0x32 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Strom | Ampere | high | signed int | - | 1 | 100 | 0 |
| 0x10 | Kl.R | 0/1 | high | 0x0001 | - | - | - | - |
| 0x11 | Kl.15 | 0/1 | high | 0x0002 | - | - | - | - |
| 0x12 | gesetzliche Verbraucher | 0/1 | high | 0x0004 | - | - | - | - |
| 0x13 | Fehler Versorgung LM | 0/1 | high | 0x0008 | - | - | - | - |
| 0x14 | Fremdladungsermoeglichung ueber Zigarettenanzuender | 0/1 | high | 0x0010 | - | - | - | - |
| 0x15 | Kodierung ABSCHALTUNG_RUHE | 0/1 | high | 0x0020 | - | - | - | - |
| 0x16 | Kodierung ABSCHALTUNG_KL_R | 0/1 | high | 0x0040 | - | - | - | - |
| 0x20 | fehlende Antwort des LM | 0/1 | high | 0x0001 | - | - | - | - |
| 0x21 | Fehler Versorgung Kl.30 | 0/1 | high | 0x0002 | - | - | - | - |
| 0x22 | Fehler Versorgung LM | 0/1 | high | 0x0004 | - | - | - | - |
| 0x30 | Fehler Multifuse CAS | 0/1 | high | 0x0001 | - | - | - | - |
| 0x31 | Fehler Multifuse DWA/IR | 0/1 | high | 0x0002 | - | - | - | - |
| 0x32 | Fehler Multifuse DME | 0/1 | high | 0x0004 | - | - | - | - |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### POWERMODULAUSGAENGE

| TEXT | WERT |
| --- | --- |
| KL30 | 0x10 |
| 0x10 | 0x10 |
| HHS | 0x11 |
| 0x11 | 0x11 |
| KL15 | 0x12 |
| 0x12 | 0x12 |
| KLR | 0x13 |
| 0x13 | 0x13 |
| VAK | 0x14 |
| 0x14 | 0x14 |
| VAD | 0x15 |
| 0x15 | 0x15 |
| IB | 0x16 |
| 0x16 | 0x16 |
| TKLM_E | 0x17 |
| 0x17 | 0x17 |
| TKLM_V | 0x18 |
| 0x18 | 0x18 |
| HKLM | 0x19 |
| 0x19 | 0x19 |
| SCAM_OT | 0x1A |
| 0x1A | 0x1A |
| SCAM_UT | 0x1B |
| 0x1B | 0x1B |
| LM | 0x1C |
| 0x1C | 0x1C |

### HELLAFEHLERCODETEXTE

| NR | HELLA_FEHLERTEXT | BMW_NR | BMW_FEHLERTEXT |
| --- | --- | --- | --- |
| 0 | F_A/D-WANDLER | 0xA148 | Fehler ECU intern |
| 1 | F_U_OVER | 0xA148 | Fehler ECU intern |
| 2 | F_U_BELOW | 0xA148 | Fehler ECU intern |
| 3 | F_I_KL30_MESS | 0xA148 | Fehler ECU intern |
| 4 | F_TRB_KL30_BTS555 | 0xA148 | Fehler ECU intern |
| 5 | F_CHKSUM_TRB | 0xA148 | Fehler ECU intern |
| 6 | F_TIMER_5S | 0xA148 | Fehler ECU intern |
| 7 | F_unused_7 | 0xA148 | Fehler ECU intern |
| 8 | F_TMP_HYBR_KRZ_UB | 0xA148 | Fehler ECU intern |
| 9 | F_TMP_HYBR_KRZ_M | 0xA148 | Fehler ECU intern |
| 10 | F_CHKSUM_FS | 0xA148 | Fehler ECU intern |
| 11 | F_KL15_UNPLAUSI | 0xA149 | Fehler Input Kl.15 |
| 12 | F_SW12_UNPLAUSI | 0xA14A | Fehler Batterieschalter |
| 13 | F_EXZKT_KRZ_M | 0xA14B | Fehler Exzenterkontakt |
| 14 | F_EXZKT_KRZ_UB | 0xA14B | Fehler Exzenterkontakt |
| 15 | F_TMP_BATT_KRZ_M | 0xA14C | Fehler Batterietemperatursensor |
| 16 | F_TMP_BATT_KRZ_UB | 0xA14C | Fehler Batterietemperatursensor |
| 17 | F_TRB_KL30_KRZ_M | 0xA14D | Fehler Treiber Kl.30 |
| 18 | F_TRB_HHS_KRZ_M | 0xA14E | Fehler Treiber HHS |
| 19 | F_TRB_HHS_OPEN | 0xA14E | Fehler Treiber HHS |
| 20 | F_TRB_IB_KRZ_M | 0xA14F | Fehler Treiber IB |
| 21 | F_TRB_IB_OPEN | 0xA14F | Fehler Treiber IB |
| 22 | F_TRB_IB_KRZ_UB | 0xA14F | Fehler Treiber IB |
| 23 | F_TRB_KL15_KRZ_M | 0xA150 | Fehler Treiber Kl.15 |
| 24 | F_TRB_KL15_KRZ_UB | 0xA150 | Fehler Treiber Kl.15 |
| 25 | F_TRB_KLR_KRZ_M | 0xA151 | Fehler Treiber Kl.R |
| 26 | F_TRB_KLR_KRZ_UB | 0xA151 | Fehler Treiber Kl.R |
| 27 | F_TRB_VAK_KRZ_M | 0xA152 | Fehler Treiber VA-Karosserie |
| 28 | F_TRB_LM_KRZ_M | 0xA15B | Fehler Treiber LM |
| 29 | F_TRB_VAD_KRZ_M | 0xA153 | Fehler Treiber VA-Dach |
| 30 | F_ENERGIESPARMODUS | 0xA15C | Energiesparmodus |
| 31 | F_TKLM1_KRZ_M | 0xA154 | Fehler Tankklappenmotor |
| 32 | F_TKLM1_KRZ_UB | 0xA154 | Fehler Tankklappenmotor |
| 33 | F_TKLM1_OPEN | 0xA154 | Fehler Tankklappenmotor |
| 34 | F_TKLM2_KRZ_M | 0xA154 | Fehler Tankklappenmotor |
| 35 | F_TKLM2_KRZ_UB | 0xA154 | Fehler Tankklappenmotor |
| 36 | F_TKLM2_OPEN | 0xA154 | Fehler Tankklappenmotor |
| 37 | F_HKLM_KRZ_M | 0xA155 | Fehler Heckklappenmotor |
| 38 | F_HKLM_OPEN | 0xA155 | Fehler Heckklappenmotor |
| 39 | F_HKLKT_KRZ_M | 0xA156 | Fehler Heckklappenkontakt |
| 40 | F_SCAM_KRZ_M | 0xA157 | Fehler SCA-Motor |
| 41 | F_SCAM_OPEN | 0xA157 | Fehler SCA-Motor |
| 42 | F_BATTOPEN_IR | 0xA158 | Fehler Batterietrennung (Ruhestrom) |
| 43 | F_BATTOPEN_IVGL | 0xA159 | Fehler Batterietrennung (Imax) |
| 44 | F_BATTOPEN_IKRZ | 0xA15A | Fehler Batterietrennung (Kurzschluss) |
| 45 | F_CAN_PHYSICAL | 0xD9C4 | CAN-Low, Physikalischer Busfehler |
| 46 | F_CAN_LOGICAL | 0xD9C7 | Controller, Bus off |
| 47 | F_TIEFENTLADUNG | 0xA15D | Fehler Batterie-Tiefentladung |
| 48 | F_LM_RESPONSE | 0xA15E | Fehler Lichtmodul |
| 49 | F_MESSEMODUS | 0xA15F | Messemode |
| 50 | F_POLYSWITCH | 0xA160 | Fehler Multifuses |
| 255 | unbekannter Code | 0xFFFF | unbekannter Fehlerort |
