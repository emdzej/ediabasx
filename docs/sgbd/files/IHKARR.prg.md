# IHKARR.prg

## General

|  |  |
| --- | --- |
| File | IHKARR.prg |
| Type | PRG |
| Jobs | 168 |
| Tables | 17 |
| Origin | BMW L5-W-3 Holzner |
| Revision | 3.00 |
| Author | Preh 1713 Fuchs, Voll |
| ECU Comment | SGBD IHKA RR Stand KW47/05 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Klimasteuergeraet IHKA RR |  |  |
| ORIGIN | string | BMW L5-W-3 Holzner |  |  |
| REVISION | string | 3.00 |  |  |
| AUTHOR | string | Preh 1713 Fuchs, Voll |  |  |
| COMMENT | string | SGBD IHKA RR Stand KW47/05 |  |  |
| PACKAGE | string | 1.32 |  |  |
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

### CBS_INFO

Ausgabe der CBS-Version

_No arguments._

### CBS_DATEN_LESEN

CBS Daten auslesen (fuer CBS Version 1-3) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS Version 1-3) KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BOS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| BOS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, keine Aenderung: 31 Defaultwert: 31 |
| BOS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter fuer Monat, keine Aenderung: 255 Defaultwert: 255 |
| BOS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine Aenderung: 255 Defaultwert: 255 |

### STATUS_ANALOGEINGAENGE

Auslesen der 44 A/D-Werte + 2 CAN-Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_REGLERGROESSEN

Auslesen der 28 Byte Reglerinformationene KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BEDIENTEIL

Auslesen der 8 Ports KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_IO

Auslesen der Controller-Ports KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

Auslesen der 14 (mit Fondklima: 18) Klappenpositionen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_TRANSPORTMODE

Auslesen der 2 Bytes Transportmode KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_FZE

Auslesen der Stati der Filterzustandserkennung(FZE) KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_SICHERHEITSFAHRZEUG

Auslesen des Stauts Sicherheitsfahrzeug KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_ZUSATZLUEFTER_STUFE

Auslesen der Stufe des Zusatzluefters KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BOOT_SW_VERSION

Auslesen der Boot-SW-Version KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_AUC_SENSOR

Auslesen der AUC-Sensor-Version KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_MOTOR_FEHLER

Auslesen der Schrittmotoren-Fehler KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_CAR_GEBL_OFFSET

Auslesen des Geblaese-Offsets Car-Memory KWP2000: $21 ReadDataByLocalIdentifier $02 Status Geblaese-Offset Modus  : Default

_No arguments._

### STEUERN_CAR_GEBLAESE_OFFSET

Setzen des Geblaese-Offsets KWP2000: $3B WriteDataByLocalIdentifier $02 Geblaese-Offset Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STAT_GEBLAESE_OFFSET_WERT | int | Geblaese-Offset: 0 = Kein Offset, 1 = +10 % Offset, 3 = -10% Offset |

### STATUS_CAR_TEMP_OFFSET

Auslesen des Temperatur-Offsets Car-Memory KWP2000: $21 ReadDataByLocalIdentifier $03 Status Temperatur-Offset Modus  : Default

_No arguments._

### STEUERN_CAR_TEMPERATUR_OFFSET

Setzen des Temperatur-Offsets KWP2000: $3B WriteDataByLocalIdentifier $03 Temperatur-Offset Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STAT_TEMPERATUR_OFFSET_WERT | int | Temperatur-Offset: 0 = Kein Offset Temperatur-Offset: 1 = Plus 1 Kelvin, 2 = Plus 2 Kelvin, 3 = Plus 3 Kelvin Temperatur-Offset: 5 = Minus 1 Kelvin, 6 = Minus 2 Kelvin, 7 = Minus 3 Kelvin |

### STATUS_CAR_DEFAULT_KEY

Auslesen, ob der Default-Key gesetzt ist KWP2000: $21 InputOutputControlByLocalIdentifier $04 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_CAR_DEFAULT_KEY

KWP2000: $3B WriteDataByLocalIdentifier $04 Default-Key setzen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT_KEY | string | 'EIN','AUS' table DigitalArgument TEXT |

### STATUS_KEY_FAHRER

Auslesen des Fahrers Key-Memory KWP2000: $21 ReadDataByLocalIdentifier $01 Aktuell eingestellten Fahrer auslesen Modus  : Default

_No arguments._

### STATUS_KEY_AUTO_NEUSTART

Auslesen, ob Auto-Funktion immer EIN nach Reset KWP2000: $22 ReadDataByCommonIdentifier $24 + Argument Fahrer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STAT_KEY_FAHRER | int | Fahrerwahl 0x00 = Fahrer 1, 0x10 = Fahrer 2, 0x20 = Fahrer 3, 0x40 = Fahrer 4 |

### STEUERN_KEY_AUTO_NEUSTART

KWP2000: $2E WriteDataByCommonIdentifier $24 + Argument Fahrer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AUTO_KEY | string | 'EIN','AUS' table DigitalArgument TEXT |
| FAHRER | int | Fahrerwahl 0x00 = Fahrer 1, 0x10 = Fahrer 2, 0x20 = Fahrer 3, 0x40 = Fahrer 4 |

### STATUS_KEY_KLIMA_NEUSTART

Auslesen, ob Klima-Funktion immer EIN nach Reset KWP2000: $22 ReadDataByCommonIdentifier $24 + Argument Fahrer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STAT_KEY_FAHRER | int | Fahrerwahl 0x00 = Fahrer 1, 0x10 = Fahrer 2, 0x20 = Fahrer 3, 0x40 = Fahrer 4 |

### STEUERN_KEY_KLIMA_NEUSTART

KWP2000: $2E WriteDataByCommonIdentifier $24 + Argument Fahrer Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLIMA_KEY | string | 'EIN','AUS' table DigitalArgument TEXT |
| FAHRER | int | Fahrerwahl 0x00 = Fahrer 1, 0x10 = Fahrer 2, 0x20 = Fahrer 3, 0x40 = Fahrer 4 |

### DIAGNOSE_TESTBIT

Ansteuern des Diagnosetest-Bits Das Bit kann ein- bzw. ausgeschaltet werden.

| Name | Type | Description |
| --- | --- | --- |
| TESTBIT | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_WASSERPUMPE

Ansteuern der Wasserpumpe im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZWASSERPUMPE | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_WISCHERABLAGENHEIZUNG

Ansteuern der Wischerablagenheizung im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WISCHERABLAGE | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_WASSERVENTIL_LINKS

Ansteuern des linken Wasserventils im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL_LINKS | int | Einschaltdauer in Prozentschritten 0-100 % |

### STEUERN_WASSERVENTIL_RECHTS

Ansteuern des rechten Wasserventils im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL_RECHTS | int | Einschaltdauer in Prozentschritten 0-100 % |

### STEUERN_KAELTEMITTELVERDICHTER

Ansteuern des Kaeltemittelverdichters im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KAELTEMITTELVERDICHTER | int | Ansteuerung KMV in Prozentschritten 0-100 % |

### STEUERN_GEBLAESE

Ansteuern des Geblaeses im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GEBLAESE | int | Geblaese-Ansteuerung in Prozentschritten 0-100 % |

### STEUERN_ZUSATZLUEFTER

Ansteuern des Zusatzluefters im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZLUEFTER | int | Zusatzluefter-Ansteuerung in Stufen 0-14 |

### STEUERN_KLAPPE_WARMLUFT_LINKS

Ansteuern der Warmluftklappe links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_WARMLUFT_LINKS | int | Klappenansteuerung KLAPPE_WARMLUFT_LINKS in Prozentschritten 0-100 % Motoradresse 0x11 |

### STEUERN_KLAPPE_WARMLUFT_RECHTS

Ansteuern der Warmluftklappe rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_WARMLUFT_RECHTS | int | Klappenansteuerung KLAPPE_WARMLUFT_RECHTS in Prozentschritten 0-100 % Motoradresse 0x12 |

### STEUERN_KLAPPE_UMLUFT

Ansteuern der Umluftklappe im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_UMLUFT | int | Klappenansteuerung KLAPPE_UMLUFT in Prozentschritten 0-100 % Motoradresse 0x13 |

### STEUERN_KLAPPE_ENTFROSTUNG

Ansteuern der Entfrostungsklappe im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_ENTFROSTUNG | int | Klappenansteuerung KLAPPE_ENTFROSTUNG in Prozentschritten 0-100 % Motoradresse 0x14 |

### STEUERN_KLAPPE_FUSSRAUM_LINKS

Ansteuern der Fussraumklappe links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FUSSRAUM_LINKS | int | Klappenansteuerung KLAPPE_FUSSRAUM_LINKS in Prozentschritten 0-100 % Motoradresse 0x15 |

### STEUERN_KLAPPE_FUSSRAUM_RECHTS

Ansteuern der Fussraumklappe rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FUSSRAUM_RECHTS | int | Klappenansteuerung KLAPPE_FUSSRAUM_RECHTS in Prozentschritten 0-100 % Motoradresse 0x16 |

### STEUERN_KLAPPE_KALTLUFT_LINKS

Ansteuern der Kaltluftklappe links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KALTLUFT_LINKS | int | Klappenansteuerung KLAPPE_KALTLUFT_LINKS in Prozentschritten 0-100 % Motoradresse 0x17 |

### STEUERN_KLAPPE_KALTLUFT_RECHTS

Ansteuern der Kaltluftklappe rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KALTLUFT_RECHTS | int | Klappenansteuerung KLAPPE_KALTLUFT_RECHTS in Prozentschritten 0-100 % Motoradresse 0x18 |

### STEUERN_KLAPPE_FONDRAUM_LINKS

Ansteuern der Fondraumklappe links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FONDRAUM_LINKS | int | Klappenansteuerung KLAPPE_FONDRAUM_LINKS in Prozentschritten 0-100 % Motoradresse 0x19 |

### STEUERN_KLAPPE_FONDRAUM_RECHTS

Ansteuern der Fondraumklappe rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FONDRAUM_RECHTS | int | Klappenansteuerung KLAPPE_FONDRAUM_RECHTS in Prozentschritten 0-100 % Motoradresse 0x1A |

### STEUERN_KLAPPE_FRISCHLUFT

Ansteuern der Frischluftklappe im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FRISCHLUFT | int | Klappenansteuerung KLAPPE_FRISCHLUFT in Prozentschritten 0-100 % |

### STEUERN_REGLERGROESSE_Y_LINKS

Steuern der Reglergroesse links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REGLERGROESSE_Y_LINKS | int | Reglergroesse Ylinks -200 - +311 in Prozent |

### STEUERN_REGLERGROESSE_Y_RECHTS

Steuern der Reglergroesse rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REGLERGROESSE_Y_RECHTS | int | Reglergroesse Yrechts -200 - +311 in Prozent |

### STEUERN_KOMPRESSOR_EINLAUFSCHUTZ

Steuern des Kompressoreinlaufschutzes KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KOMPRESSOR_EINLAUFSCHUTZ | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_TRANSPORTMODE

Steuern des Transportmodes im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STEUERN_MOTOREN_EICHLAUF

Motoren-Eichlauf aktivieren KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STATUS_HKZ_AGGREGATE_ABSCHALTUNG_PM

Auslesen der Zaehler fuer Abschaltung HHS, WABL, Geblaese wg. Priostufe KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HKZ_MOTOR_ANTWORTET_NICHT

Auslesen des Haefigkeitszaehlers Motor antwortet nicht KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HKZ_MOTOR_BLOCKIERUNG

Auslesen des Haefigkeitszaehlers Motor-Blockierung KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HKZ_MOTOR_INTERNER_FEHLER

Auslesen des Haefigkeitszaehlers Motor-Blockierung KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_HKZ_GEBLAESE_ANTWORTET_NICHT

Auslesen des Haefigkeitszaehlers Motor antwortet nicht KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_USPG_STANDHEIZEN_ZAEHLER

Auslesen des Unterspannungszaehlers SH KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_MOTOR_SUMME_SCHRITTANZAHL

Auslesen der kumulierten Motor-Schrittzahlen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BS_TEMPERATUR_SENSOREN

Auslesen der Betriebsstunden Temperatursensoren KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_WASSERVENTILE_LASTWECHSEL

Auslesen der Zaehler fuer Wasserventil-Lastwechsel KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BS_WASSERPUMPE

Auslesen der Betriebsstunden Wasserpumpe KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BS_KOMPRESSORVENTIL

Auslesen der Betriebsstunden Kompressorventil KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BS_GEBLREGLER_LASTPROFIL

Auslesen der Status Geblaeseregler-Lastprofil KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BS_DRUCKSENSOR

Auslesen der Status Betriebsstunden Drucksensor KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_TINNEN_LUEFTER

Auslesen der Status Innentemperatursensor Luefter KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_DRUCKSENSOR_MAX

Auslesen der Status Drucksensor Max-Druck KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_BS_PRIOSTUFEN

Auslesen der Status Stundenzaehler Priostufen KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_INDIVIDUALISIERUNG

Auslesen der Status Individualisierung KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_MOTOR_ANTWORTET_NICHT_LOESCHEN

Zaehler fuer Motor antwortet nicht loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_MOTOR_BLOCKIERUNG_LOESCHEN

Zaehler fuer Motor-Blockierung loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | int | Motorangabe 0=WL-LI,1=WL-RE,2=UL,3=DFR,4=FUSS_LI,5=FUSS_RE,6=KL-LI,7=KL-RE,8=FOND-LI,9=FOND-RE 10=FOKL-B-LI,11=FOKL-MI-LI, 15=KUG-LI-AU,16=KUG-LI-MI,17=KNIE-LI,18=INDIR-LI,19=KUG-RE-MI 20=KUG-RE-AU,21=KNIE-RE,22=INDIR-RE,23=A-SAEU-LI,24=A-SAEU-RE,25=B-SAEU-LI 26=MITKON-LI,27=B-SAEU-RE,28=MITKON-RE,29=FOKL-B-RE,30=FOKL-MI-RE |

### STEUERN_MOTOR_INTERNER_FEHLER_LOESCHEN

Zaehler fuer interne Motorfehler loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_GEBLAESE_ANTWORTET_NICHT_LOESCHEN

Zaehler fuer Geblaese antwortet nicht loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_USPG_STANDHEIZEN_ZAEHLER_LOESCHEN

Zaehler fuer Uspg Standheizen loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_MOTOR_SUMME_SCHRITTZAHLEN_LOESCHEN

Zaehler fuer kumulierte Motorschrittzahlen loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | int | Motorangabe 0=WL-LI,1=WL-RE,2=KL-LI,3=KL-RE,4=FL |

### STEUERN_BS_TEMPERATUR_SENSOREN_LOESCHEN

BS Temperatursensoren loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR | int | Sensorangabe 0=WAERMETAUSCHER-LI,1=WAERMETAUSCHER-RE,2=VERDAMPFER |

### STEUERN_WASSERVENTILE_LASTWECHSEL_LOESCHEN

Zaehler fuer WV-Lastwechsel loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL | int | Wasserventil 0=LINKS,1=RECHTS |

### STEUERN_BS_WASSERPUMPE_LOESCHEN

Zaehler fuer Wasserpumpe loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_BS_KOMPRESSORVENTIL_LOESCHEN

Zaehler fuer Kompressorventil loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_GEBLREGLER_LASTPROFIL_LOESCHEN

Zaehler fuer Geblaeseregler-Lastprofil loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_BS_DRUCKSENSOR_LOESCHEN

Zaehler fuer Drucksensor loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_TINNEN_LUEFTER_LOESCHEN

Zaehler fuer Innenfuehlerluefter loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_DRUCKSENSOR_MAX_LOESCHEN

Zaehler fuer max. Drucksensorwert loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_BS_PRIOSTUFEN_LOESCHEN

Zaehler fuer Priostufen (PowerModul) loeschen KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_MUX4_KOMMUNIKATION

Sperren der MUX4-Kommunikation Die Sperre kann aktiviert( EIN )bzw. deaktiviert (AUS) werden

| Name | Type | Description |
| --- | --- | --- |
| SPERRE | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_MOTOR_PROGRAMMIEREN

Programmieren von Schrittmotoren KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_SCHRITTMOTOREN | int | Schrittmotoradresse im Bereich von 0x11..0x1C und 0x20..0x2F zulaessig |

### STEUERN_BEDIENTEIL_TASTEN

Simulieren von Tastenbetaetigungen am Bedienteil KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TASTEN_NUMMER | int | Tastennummern im Bereich von 0 bis 2 zulaessig 0 = HHS, 1 = UML, 2 = AC_OFF |

### ZWP_AKTIVIEREN

Aktivieren der Zusatzwasserpumpe (Setzen des Codierbits) KWP 2000: $23 ReadMemoryByAddress KWP 2000: $31 StartRoutineByLocalIdentifier KWP 2000: $23 ReadMemoryByAddress Modus   : Default

_No arguments._

### ZWP_DEAKTIVIEREN

Deaktivieren der Zusatzwasserpumpe (Loeschen des Codierbits) KWP 2000: $23 ReadMemoryByAddress KWP 2000: $31 StartRoutineByLocalIdentifier KWP 2000: $23 ReadMemoryByAddress Modus   : Default

_No arguments._

### BOS_DATEN_LESEN

BOS Daten auslesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### BOS_RESET

BOS Daten Zurücksetzen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| STAT_BOS_KENNUNG_WERT | string | gewünschte BOS-Kennung table BosKennung BOS_K BOS_K_TEXT Werte: Oel, Br_v, Brfl, Filt, Batt, Br_h, ZKrz, Sic, Kfl, TUV, AU Defaultwert: Oel |
| STAT_BOS_VERFUEGBARKEIT_WERT | string | gewünschte Verfügbarkeit in Prozent: 0-200 Schalter, kein Rückstellen: 255 Defaultwert: 100 |
| STAT_BOS_ANZAHL_SERVICE_WERT | string | Anzahl der durchgeführten Services: 0-30 Schalter, keine Änderung: 31 Defaultwert: 31 |
| STAT_BOS_ZIEL_MONAT_WERT | string | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter für Monat und Jahr, keine Änderung: 255 Defaultwert: 255 |
| STAT_BOS_ZIEL_JAHR_WERT | string | Ziel-Jahr (HU/AU) 2000-2239: 0-239 d.c.: 255 Defaultwert: 255 |

### STEUERN_POTI_KALIBRIERUNG_RR

Starten der Kalibrierung fuer die 6 bei RR einzulernenden Potentiometer Vorgehen: 1. Kalibrierung starten (durch Aufruf dieses Jobs) (die 3 Funktions-LEDs beginnen zu blinken) 2. IHKA Geblaesesteller und alle Bedienelemente des Heckbedienteiles auf MIN stellen 3. UMLUFT-Taste der IHKA (linke Taste) druecken (die linke LED hoert auf zu blinken, wenn Linksanschlaege erfolgreich gelernt wurden) 4. IHKA Geblaesesteller und alle Bedienelemente des Heckbedienteiles auf MAX stellen 5. AC_OFF-Taste der IHKA (rechte Taste) betaetigen - FERTIG (die beiden rechten LEDs hoeren bei Erfolg nun auch auf zu blinken) gab es ein Problem beim Lernen, blinken die LEDs weiter 60sec nach Aktivierung des Jobs bzw. nach dem ersten Tastendruck wird das Lernen abgebrochen, wenn bis dahin nicht erfolgreich gelernt wurde. KWP2000: $30 InputOutputControlByLocalIdentifier $01 Modus  : Default Dieser Job lernt folgende Potis ein: (Namen aus dem Job STATUS_ANALOGAEINGAENGE) STAT_POTI_GEBL_LI_WERT         Geblaesedrehsteller vorne links STAT_POTI_GEBL_RE_WERT         Geblaesedrehsteller vorne rechts STAT_POTI_GEBL_FOND_LI_WERT    Geblaesedrehsteller hinten links STAT_POTI_GEBL_FOND_RE_WERT    Geblaesedrehsteller hinten rechts STAT_POTI_TEMP_FOND_LI_WERT    Temperaturraendel hinten links STAT_POTI_TEMP_FOND_RE_WERT    Temperaturraendel hinten rechts

_No arguments._

### STEUERN_POTI_KALIBRIERUNG_PREH

Starten der Kalibrierung fuer die 5 IHKA Raendelraeder (Temp. und GBL Frontscheibe) Vorgehen: 1. Kalibrierung starten (mit diesem Job) (die drei Funktions-LEDs am Bedienteil beginnen zu blinken) 2. IHKA Raendelraeder in den Linksanschlag drehen 3. UMLUFT-Taste der IHKA betaetigen (linke Taste) (die linke LED hoert auf zu blinken, wenn die Linksanschlaege erfolgreich gelernt wurden.) 4. IHKA Raendelraeder in den Rechtsanschlag drehen 5. AC_OFF-Taste (auf der rechten Seite) betaetigen - FERTIG (die beiden rechten LEDs hoeren bei Erfolg nun auch auf zu blinken) gab es ein Problem beim Lernen, blinken die LEDs weiter 60sec nach Aktivierung des Jobs bzw. nach dem ersten Tastendruck wird das Lernen abgebrochen, wenn bis dahin nicht erfolgreich gelernt wurde. KWP2000: $30 InputOutputControlByLocalIdentifier $01 Modus  : Default Dieser Job lernt folgende Potis ein: (Namen aus dem Job STATUS_ANALOGAEINGAENGE) STAT_POTI_TEMP_LI_OBEN_WERT      Temperaturraendel links oben STAT_POTI_TEMP_LI_UNTEN_WERT     Temperaturraendel links unten STAT_POTI_SCHEIBENLUFT_WERT      Frontscheibenluftraendel STAT_POTI_TEMP_RE_OBEN_WERT      Temperaturraendel rechts oben STAT_POTI_TEMP_RE_UNTEN_WERT     Temperaturraendel rechts unten

_No arguments._

### STATUS_POTI_KALIBRIERUNG_RR

Auslesen des Status der Kalibrierung der bei RR zu lernenden Potis Gibt nur beim ersten Lesen nach erfolgter Kalibrierung den Status zurueck, sonst Null KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_POTI_KALIBRIERUNG_PREH

Auslesen des Status der Kalibrierung der bei Preh einzulernenden Potis Gibt nur beim ersten Lesen nach erfolgter Kalibrierung den Status zurueck, sonst Null KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_KLAPPE_KUGELAUS_LINKS_AUSSEN

Ansteuern des Kugelausstroemers links aussen im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KUGELAUS_LINKS_AUSSEN | int | Klappenansteuerung KLAPPE_KUGELAUS_LINKS_AUSSEN in Prozentschritten 0-100 % Motoradresse 0x20 |

### STEUERN_KLAPPE_KUGELAUS_LINKS_MITTE

Ansteuern des Kugelausstroemers links mitte im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KUGELAUS_LINKS_MITTE | int | Klappenansteuerung KLAPPE_KUGELAUS_LINKS_MITTE in Prozentschritten 0-100 % Motoradresse 0x21 |

### STEUERN_KLAPPE_KNIEAUS_LINKS

Ansteuern des Knieausstroemers links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KNIEAUS_LINKS | int | Klappenansteuerung KLAPPE_KNIEAUS_LINKS in Prozentschritten 0-100 % Motoradresse 0x22 |

### STEUERN_KLAPPE_INDIREKTERAUS_LINKS

Ansteuern des indirekten Ausstroemers links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_INDIREKTERAUS_LINKS | int | Klappenansteuerung KLAPPE_INDIREKTERAUS_LINKS in Prozentschritten 0-100 % Motoradresse 0x23 |

### STEUERN_KLAPPE_KUGELAUS_RECHTS_MITTE

Ansteuern des Kugelausstroemers rechts mitte im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KUGELAUS_RECHTS_MITTE | int | Klappenansteuerung KLAPPE_KUGELAUS_RECHTS_MITTE in Prozentschritten 0-100 % Motoradresse 0x24 |

### STEUERN_KLAPPE_KUGELAUS_RECHTS_AUSSEN

Ansteuern des Kugelausstroemers rechts aussen im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KUGELAUS_RECHTS_AUSSEN | int | Klappenansteuerung KLAPPE_KUGELAUS_RECHTS_AUSSEN in Prozentschritten 0-100 % Motoradresse 0x25 |

### STEUERN_KLAPPE_KNIEAUS_RECHTS

Ansteuern des Knieausstroemers rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_KNIEAUS_RECHTS | int | Klappenansteuerung KLAPPE_KNIEAUS_RECHTS in Prozentschritten 0-100 % Motoradresse 0x26 |

### STEUERN_KLAPPE_INDIREKTERAUS_RECHTS

Ansteuern des indirekten Ausstroemers rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_INDIREKTERAUS_RECHTS | int | Klappenansteuerung KLAPPE_INDIREKTERAUS_RECHTS in Prozentschritten 0-100 % Motoradresse 0x27 |

### STEUERN_KLAPPE_A_SAEULE_LINKS

Ansteuern des Ausstroemers an der A-Saeule links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_A_SAEULE_LINKS | int | Klappenansteuerung KLAPPE_A_SAEULE_LINKS in Prozentschritten 0-100 % Motoradresse 0x28 |

### STEUERN_KLAPPE_A_SAEULE_RECHTS

Ansteuern des Ausstroemers an der A-Saeule rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_A_SAEULE_RECHTS | int | Klappenansteuerung KLAPPE_A_SAEULE_RECHTS in Prozentschritten 0-100 % Motoradresse 0x29 |

### STEUERN_KLAPPE_B_SAEULE_LINKS

Ansteuern des Ausstroemers an der B-Saeule links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_B_SAEULE_LINKS | int | Klappenansteuerung KLAPPE_B_SAEULE_LINKS in Prozentschritten 0-100 % Motoradresse 0x2A |

### STEUERN_KLAPPE_MITTELKON_LINKS

Ansteuern des Ausstroemers an der Mittelkonsole links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_MITTELKON_LINKS | int | Klappenansteuerung KLAPPE_MITTELKON_LINKS in Prozentschritten 0-100 % Motoradresse 0x2B |

### STEUERN_KLAPPE_B_SAEULE_RECHTS

Ansteuern des Ausstroemers an der B-Saeule rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_B_SAEULE_RECHTS | int | Klappenansteuerung KLAPPE_B_SAEULE_RECHTS in Prozentschritten 0-100 % Motoradresse 0x2C |

### STEUERN_KLAPPE_MITTELKON_RECHTS

Ansteuern des Ausstroemers an der Mittelkonsole rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_MITTELKON_RECHTS | int | Klappenansteuerung KLAPPE_MITTELKON_RECHTS in Prozentschritten 0-100 % Motoradresse 0x2D |

### STEUERN_FONDGEBLAESE_LINKS

Ansteuern des Fondgeblaese links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FONDGEBLAESE_LINKS | int | Ansteuerung FONDGEBLAESE_LINKS in Prozentschritten 0-100 % |

### STEUERN_FONDGEBLAESE_RECHTS

Ansteuern des Fondgeblaese rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FONDGEBLAESE_RECHTS | int | Ansteuerung FONDGEBLAESE_LINKS in Prozentschritten 0-100 % |

### STEUERN_SEITENSCHEIBENHEIZUNG

Ansteuern der Seitenscheibenheizung im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEITENSCHEIBENHEIZUNG | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_KLAPPE_FOKL_B_LI

Ansteuern des Fondklima Klappenmoduls B-Saeule links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FOKL_B_LI | int | Klappenansteuerung KLAPPE_FOKL_B_LI in Prozentschritten 0-100 % Motoradresse 0x1B |

### STEUERN_KLAPPE_FOKL_MI_LI

Ansteuern des Fondklima Klappenmoduls Mittelkonsole links im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FOKL_MI_LI | int | Klappenansteuerung KLAPPE_FOKL_MI_LI in Prozentschritten 0-100 % Motoradresse 0x1C |

### STEUERN_KLAPPE_FOKL_B_RE

Ansteuern des Fondklima Klappenmoduls B-Saeule rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FOKL_B_RE | int | Klappenansteuerung KLAPPE_FOKL_B_RE in Prozentschritten 0-100 % Motoradresse 0x2E |

### STEUERN_KLAPPE_FOKL_MI_RE

Ansteuern des Fondklima Klappenmoduls Mittelkonsole rechts im Diagnosemode KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KLAPPE_FOKL_MI_RE | int | Klappenansteuerung KLAPPE_FOKL_MI_RE in Prozentschritten 0-100 % Motoradresse 0x2F |

### STEUERN_FONDKLIMA_LI

Ansteuern des Fondklimaausganges Links im Diagnosemode (Nur erlaubt, wenn Fondgeblaese nicht auf 0!) KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FONDKLIMA_LI | string | 'EIN','AUS' table DigitalArgument TEXT |

### STEUERN_FONDKLIMA_RE

Ansteuern des Fondklimaausganges Rechts im Diagnosemode (Nur erlaubt, wenn Fondgeblaese nicht auf 0!) KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FONDKLIMA_RE | string | 'EIN','AUS' table DigitalArgument TEXT |

### STATUS_BESCHLAG_SENSOR

Auslesen des Status des Beschlagsensors KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_GERUCHSSTARTVERRIEGELUNG

Auslesen der Geruchsstartverriegelungsparameter KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_GERUCHSSTARTVERRIEGELUNG

Parameter der Geruchsstartverriegelung setzen KWP2000: $30 InputOutputControlByLocalIdentifier $08 LongTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AUSSENTEMP_WERT | int | Aussentemperaturschwelle in Grad |
| GEBLAESELEISTUNG_WERT | int | Geblaeseleistung in % |
| VERZOEGERUNGSZEIT_WERT | int | Codierung der Verzoegerungszeit 0 ==>  0 Sek --> GSV AUS 1 ==>  8 Sek 2 ==> 10 Sek 3 ==> 12 Sek 4 ==> 15 Sek |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR_SOFTWARENUMMER |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9C48 | Warmluftklappenmotor links Motoradresse 11hex |
| 0x9C49 | Warmluftklappenmotor rechts Motoradresse 12hex |
| 0x9C4A | Umluftklappenmotor Motoradresse 13hex |
| 0x9C4B | Entfrostungsklappenmotor Motoradresse 14hex |
| 0x9C4C | Fussraumklappenmotor links Fond Motoradresse 15hex |
| 0x9C4D | Fussraumklappenmotor rechts Fond Motoradresse 16hex |
| 0x9C4E | Kaltluftklappenmotor links Motoradresse 17hex |
| 0x9C4F | Kaltluftklappenmotor rechts Motoradresse 18hex |
| 0x9C50 | Fondbelueftungsklappenmotor links Motoradresse 19hex |
| 0x9C51 | Fondbelueftungsklappenmotor rechts Motoradresse 1Ahex |
| 0x9C52 | Fondklimaklappenmotor B-Saeule links Motoradresse 1Bhex |
| 0x9C53 | Fondklimaklappenmotor Mittelkonsole links Motoradresse 1Chex |
| 0x9C54 | Reserve 1 |
| 0x9C55 | Frischluftklappenmotor |
| 0x9C56 | Umluft als Schnelllaeufer (vorgehalten) |
| 0x9C57 | Kugelausstroemer Stellmotor links Aussen Motoradresse 20hex |
| 0x9C58 | Kugelausstroemer Stellmotor links Mitte Motoradresse 21hex |
| 0x9C59 | Knieausstroemer Stellmotor links Motoradresse 22hex |
| 0x9C5A | Ausstroemer Stellmotor Indirekt links Motoradresse 23hex |
| 0x9C5B | Kugelausstroemer Stellmotor rechts Mitte Motoradresse 24hex |
| 0x9C5C | Kugelausstroemer Stellmotor rechts Aussen Motoradresse 25hex |
| 0x9C5D | Knieausstroemer Stellmotor rechts Motoradresse 26hex |
| 0x9C5E | Ausstroemer Stellmotor Indirekt rechts Motoradresse 27hex |
| 0x9C5F | Mischklappenmotor A-Saeule links Motoradresse 28hex |
| 0x9C60 | Mischklappenmotor A-Saeule rechts Motoradresse 29hex |
| 0x9C61 | Kugelausstroemer Stellmotor B-Saeule links Motoradresse 2Ahex |
| 0x9C62 | Kugelausstroemer Stellmotor Mittelkonsole links Motoradresse 2Bhex |
| 0x9C63 | Kugelausstroemer Stellmotor B-Saeule rechts Motoradresse 2Chex |
| 0x9C64 | Kugelausstroemer Stellmotor Mittelkonsole rechts Motoradresse 2Dhex |
| 0x9C65 | Fondklimaklappenmotor B-Saeule rechts Motoradresse 2Ehex |
| 0x9C66 | Fondklimaklappenmotor Mittelkonsole rechts Motoradresse 2Fhex |
| 0x9C67 | Geblaeseendstufe IHKA |
| 0x9C68 | Innenraumtemperaturfuehler |
| 0x9C69 | Stromsense fuer Kaeltemittelverdichter |
| 0x9C6A | Stromsense fuer Zusatzwasserpumpe |
| 0x9C6B | Monitor Drucksensor Versorgung |
| 0x9C6C | Stromsense fuer AUC Versorgung/Heizung |
| 0x9C6D | Stromsense fuer Treiberversorgung |
| 0x9C6E | Temperatur Sensor Fond links |
| 0x9C6F | Potentiometer Nr. 5 fuer Kugelausstroemer Stellmotor B-Saeule links |
| 0x9C70 | Temperatur Sensor Fond rechts |
| 0x9C71 | Potentiometer Nr. 6 fuer Kugelausstroemer Stellmotor Mittelkonsole links |
| 0x9C72 | Hall-Sensor Nr. 1 fuer Knieausstroemer Stellmotor links |
| 0x9C73 | Hall-Sensor Nr. 2 fuer Knieausstroemer Stellmotor rechts |
| 0x9C74 | Potentiometer Nr. 3 fuer Kugelausstroemer Stellmotor rechts Mitte |
| 0x9C75 | Potentiometer Nr. 4 fuer Kugelausstroemer Stellmotor rechts Aussen |
| 0x9C76 | Temperatur Sensor Waermetauscher rechts |
| 0x9C77 | Temperatur Sensor Waermetauscher links |
| 0x9C78 | Potentiometer Nr. 8 fuer Kugelausstroemer Stellmotor Mittelkonsole rechts |
| 0x9C79 | Verdampfertemperaturfuehler |
| 0x9C7A | Belueftungstemperaturfuehler links |
| 0x9C7B | AUC-Sensor |
| 0x9C7C | Belueftungstemperaturfuehler rechts |
| 0x9C7D | 5V Sammelversorgung: Sonnen-/Beschlagsensor, Ausstroemer-, Fond-, Geblaese-Potis |
| 0x9C7E | Potentiometer Temperatur links unten |
| 0x9C7F | Potentiometer Temperatur links oben |
| 0x9C80 | Potentiometer Geblaese IHKA links |
| 0x9C81 | Potentiometer Geblaese IHKA rechts |
| 0x9C82 | Monitor AUC Versorgung/Heizung |
| 0x9C83 | Leiterplatten-Code |
| 0x9C84 | Monitor 12V Versorgung Fond |
| 0x9C85 | Potentiometer Temperatur rechts unten |
| 0x9C86 | Potentiometer Nr. 7 fuer Kugelausstroemer Stellmotor B-Saeule rechts |
| 0x9C87 | Monitor Steuerspannung Fondgeblaese links |
| 0x9C88 | Potentiometer Temperatur rechts oben |
| 0x9C89 | Monitor Steuerspannung Fondgeblaese rechts |
| 0x9C8A | Potentiometer Frontscheibenluft |
| 0x9C8B | Drucksensor |
| 0x9C8C | Potentiometer Nr. 2 fuer Kugelausstroemer Stellmotor links Mitte |
| 0x9C8D | Solarsensor links |
| 0x9C8E | Potentiometer Nr. 1 fuer Kugelausstroemer Stellmotor links Aussen |
| 0x9C8F | Solarsensor rechts |
| 0x9C90 | Potentiometer Fondgeblaese links |
| 0x9C91 | Potentiometer Fond Temperatur links |
| 0x9C92 | Potentiometer Fondgeblaese rechts |
| 0x9C93 | Potentiometer Fond Temperatur rechts |
| 0x9C94 | Zusatzwasserpumpe |
| 0x9C95 | Kaeltemittelverdichter |
| 0x9C96 | Wischerablagenheizung |
| 0x9C97 | Wasserventil links |
| 0x9C98 | Wasserventil rechts |
| 0x9C99 | Innenfuehlergeblaese |
| 0x9C9A | Kaeltemittelverdichter Sperrventil |
| 0x9C9B | Seitenscheibenheizung |
| 0x9C9C | Beschlagsensor |
| 0x9C9D | Treiber Reserve 1 |
| 0x9C9E | Treiber Reserve 2 |
| 0x9C9F | KCAN: Waermestrom Motor ( DME1 ) |
| 0x9CA0 | Fondgeblaese links |
| 0x9CA1 | Fondgeblaese rechts |
| 0x9CA2 | 12V Versorgung MUX4-Bus Blau |
| 0x9CA3 | 12V Versorgung MUX4-Bus Weiss |
| 0x9CA4 | SH/SK nicht EIN wegen Reichweite |
| 0x9CA5 | Checksumme EEPROM |
| 0x9CA6 | KCAN: Kilometerstand ( KOMBI ) |
| 0x9CA7 | KCAN: Klemmenstatus ( CAS ) |
| 0xA608 | Heizbare Heckscheibe |
| 0xA609 | Zusatzluefter |
| 0xA60A | KCAN: Relativzeit ( KOMBI ) |
| 0xA612 | KCAN: Motor laeuft ( DME1 ) |
| 0xA614 | KCAN: Aussentemperatur ( KOMBI ) |
| 0xA615 | KCAN: Fahrzeuggeschwindigkeit ( DSC ) |
| 0xA616 | KCAN: Kuehlmitteltemperatur ( DME1 ) |
| 0xA617 | KCAN: Motordrehzahl ( DME1 ) |
| 0xA618 | KCAN: Dimmung ( LSZ ) |
| 0xA619 | KCAN: Powermanagement Batteriespannung ( PM ) |
| 0xA61A | KCAN: Stand/Zuheizer ( SH/ZH ) |
| 0xA647 | Energiesparmode aktiv |
| 0xE704 | CAN-Low, Physikalischer Busfehler |
| 0xE705 | Netzwerkmanagementfehler |
| 0xE706 | MUX4-Bus Fehler |
| 0xE707 | Controller, Bus Off |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | ja |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | 0x03 | 0x04 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Aussentemperatur | Grad C | - | unsigned char | - | 1 | 2 | -40 |
| 0x02 | Kuehlmitteltemperatur | Grad C | - | unsigned char | - | 1 | 1 | -48 |
| 0x03 | Batteriespannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x04 | Relativzeit | s | high | signed long | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### BOSKENNUNG

| NR | BOS_K | BOS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Ölqualität |
| 0x02 | Br_v | Bremsbelagverschleiss vorne |
| 0x03 | Brfl | Bremsflüssigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x05 | Batt | Batteriezustand |
| 0x06 | Br_h | Bremsbelagverschleiss hinten |
| 0x10 | ZKrz | Zündkerzen |
| 0x11 | Sic | Sichtprüfung |
| 0x12 | Kfl | Kühlflüssigkeit |
| 0x20 | TUV | TÜV |
| 0x21 | AU | AU |

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelag vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x06 | Br_h | Bremsbelag hinten |
| 0x07 | CSF | Dieselpartikelfilter |
| 0x08 | Batt | Batterie |
| 0x09 | VTG | Verteilergetriebeoel |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x13 | H2 | H2-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x16 | DAD | Additiv fuer Partikelfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
