# KOMBRR.prg

## General

|  |  |
| --- | --- |
| File | KOMBRR.prg |
| Type | PRG |
| Jobs | 115 |
| Tables | 31 |
| Origin | BMW UR-E-6 Dr. Dust |
| Revision | 1.00 |
| Author | Telemotive AG Bernd Dietrich (BD), Siemens Alisch, BMW UR-E-6 Ruf, BMW TI-431 Lothar Dennnert, BMW TI-431 Michael Nau |
| ECU Comment | SGBD in KWP2000-format |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI RR |  |  |
| ORIGIN | string | BMW UR-E-6 Dr. Dust |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | Telemotive AG Bernd Dietrich (BD), Siemens Alisch, BMW UR-E-6 Ruf, BMW TI-431 Lothar Dennnert, BMW TI-431 Michael Nau |  |  |
| COMMENT | string | SGBD in KWP2000-format |  |  |
| PACKAGE | string | 1.23 |  |  |
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

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

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
| BOS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| BOS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, keine Aenderung: 31 Defaultwert: 31 |
| BOS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter fuer Monat, keine Aenderung: 255 Defaultwert: 255 |
| BOS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine Aenderung: 255 Defaultwert: 255 |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### MOST_VERSION_LESEN

Auslesen von Most Version KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $A0 MOSTVersion MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_MOST_3DB

Auslesen des Status der Lichtleistungsabsenkung KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_MOST_3DB

Lichtleistungsabsenkung einschalten KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch $00 S1 geoeffnet = 3dB Absenkung MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_WAKE_UP_STATUS

Auslesen des Status WakeupStatus KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_ABILITY_TO_WAKE

Auslesen des Status AbilityToWake KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_ABILITY_TO_WAKE

AbilityToWake einstellen KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD AbilityToWake $00 of, $01 on, $02 critical MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter AbilityToWake Modus table  AbilityToWake Status Defaultwert: DEFAULT 00 |

### SG_RESET_OHNE_UHR_DATUM

Steuergeraete Reset ausloesen Uhrzeit und Datum bleibt dabei im Kombi erhalten KWP2000: $31, $20

_No arguments._

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte  21+Anzahl Daten: ETX (0x03) |

### STEUERN_LEUCHTE

Kontrolleuchten einzeln ansteuern Fuer Service-und Testzwecke Es muessen immer sieben Argumente im Bereich von 0x00-0xFF uebergeben werden.  Im Kombi LH Teil 3.1 Kapitel "Diagnose" sind die Übergabeparameter des Diagnosebefehls $30 $07 ausführlich dokumentiert  KWP2000: $30 $23 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | kann beliebig verwendet werden |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |
| BYTE5 | int | kann beliebig verwendet werden |
| BYTE6 | int | kann beliebig verwendet werden |
| BYTE7 | int | kann beliebig verwendet werden |

### STEUERN_LEUCHTE_AUS

Wenn vorher der Job STEUERN_LEUCHTE aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_LEUCHTE_AUS gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $23, $00

_No arguments._

### STEUERN_BLINKER

Blinker, zentrales Warnfeld, Ganganzeigenbeeleuchtung, Fernlicht ansteuern Fuer Service-und Testzwecke Es muessen immer alle zwei Argumente übergeben werden Nach Aufruf dieses Jobs muss der Vorgabemodus durch STEUERN_BLINKER_AUS beendet werden KWP2000: $30 $24  Beschreibung der Arumente: -------------------------- BYTE 0: High Nibble: 0 = beide Blinkkontrolleuchten aus 1 = Blinker links 2 = Blinker rechts 3 = Blinker rechts und links LOW Nibble:  1 = normales Blinken 2 = Blinker defekt (doppelte Blinkgeschwindigkeit) 3 = Doppelblinkimpuls Warnblinken Beispiel: BYTE 1= 0x12h bedeutet: Blinker links blinkt mit doppelter Geschwindigkeit  BYTE 1: 04h = Fernlicht ein 10h = zentr. Warnfeld rot ein 20h = zentr. Warnfeld gelb ein 40h = Beleuchtung Ganganzeigenfeld 80h = zentr. Warnfeld orange ein 00h = Fernlicht aus, zentr. Warnfeld aus, Beleuchtung Ganganzeigenfeld aus

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int |  |
| BYTE1 | int | kann beliebig verwendet werden |

### STEUERN_BLINKER_AUS

Wenn vorher der Job STEUERN_BLINKER aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_BLINKER_AUS gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $24, $00

_No arguments._

### STEUERN_PPC_IO_SCHREIBEN

I/O Ports des MPC555 schreiben Fuer Service-und Testzwecke Es muessen immer alle drei Argumente im Bereich von 0x00-0xFF uebergeben werden. KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Angabe des Ports (0..F) |
| BYTE1 | int | Wert der in das Port geschrieben werden kann |

### STATUS_PPC_IO_LESEN

I/O Ports des MPC555 lesen Fuer Service-und Testzwecke  KWP2000: $30,$93,$01, $XX -> InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_PPC_IO_SCHREIBEN_AUS

Wenn vorher der Job PPC_IO_SCHREIBEN aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_LEUCHTE_AUS gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $23, $00

_No arguments._

### STEUERN_SELBSTTEST_EIN

Schaltet den Selbsttest ein KWP2000: $30, $26, $06

_No arguments._

### STEUERN_SELBSTTEST_AUS

Schaltet den Selbsttest wieder aus KWP2000: $30, $26, $00

_No arguments._

### STEUERN_TESTBITMAP_ANZEIGEN

Anzeige des Testbitmaps im Kombi Zustand ist erst durch Sleep Modus beendet KWP2000: $30, $FD, $06

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Nummer des Testbitmaps anzeigen (0..0xFE) |

### STEUERN_TACHO

Tacho auf einen bel winkel zwischen 0..300 Grad setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Winkelvorgabe in Grad (0..300 Grad) |

### STEUERN_TACHO_AUS

Schaltet den Tacho-Vorgabemodus wieder aus KWP2000: $30, $20, $00

_No arguments._

### STATUS_TACHO_LESEN

gibt die Anzeigegeschwindigkeit aus (Einheit km/h) KWP2000: $21, $05

_No arguments._

### STEUERN_POWER_GAUGE

PowerGauge auf einen bel winkel zwischen 0..300 Grad setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Winkelvorgabe in Grad (0..300 Grad) |

### STEUERN_POWER_GAUGE_AUS

Schaltet den PowerGauge-Vorgabemodus wieder aus KWP2000: $30, $28, $00

_No arguments._

### STATUS_POWER_GAUGE_LESEN

gibt den Anzeigenwert PowerGauge aus (Einheit %) !!! DREHZAHL WIRD AUSGEGEBEN !!! KWP2000: $21, $06

_No arguments._

### STEUERN_TANK

TANKANZEIGE auf einen bel Winkel zwischen 0..300 Grad setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Winkelvorgabe: z.B. 180 Grad -> 180 * 17.77=0xC7E |

### STEUERN_TANK_AUS

Schaltet den TANKANZEIGEN-Vorgabemodus wieder aus KWP2000: $30, $21, $00

_No arguments._

### STATUS_TANK_LESEN

Literwerte der Tank Hebelgeber 1+2, Summerwert ungedämpft und gedämpft KWP2000: $21, $0A

_No arguments._

### STEUERN_KUEHLMITTEL_TEMP

Kuehhlmitteltemperaturanzeige auf einen bel winkel zwischen 0..90 Grad setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Winkelvorgabe in Grad (0..90 Grad) |

### STEUERN_KUEHLMITTEL_TEMP_AUS

Schaltet den Kuehlmitteltemperatur-Vorgabemodus wieder aus KWP2000: $30, $29, $00

_No arguments._

### STATUS_LENKSTOCK_LESEN

gibt den Status des Lenkstockschalters aus KWP2000: $21, $07 

_No arguments._

### STATUS_CHECKCONTROL_LESEN

gibt die ID Nummern der momentan aktiven CC-Meldungen aus KWP2000: $21, $09 Es bedeudet Rückgabewert ANZAHL     = Anzahl der aktiven Meldungen CC_Nummern = CC-Meldungen als Datenarray (pro Zahl 2 Byte)

_No arguments._

### STATUS_DATE_LAST_CODING_SESSION

Datum, gibt an, wann das Kombi zum letzten mal codiert wurde (bei BMW) KWP2000: $21, $08

_No arguments._

### STATUS_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset auslesen KWP2000: $21, $0C

_No arguments._

### STEUERN_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset schreiben KWP2000: $3B, $0C

| Name | Type | Description |
| --- | --- | --- |
| STAT_KL30_H_OFFSET_WERT | long | ZAHLENWERT von KL30 Stundenzaehler Offset |

### CALC_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset ab dem momentanen Datum berechnen Dieser Job wird nur in der BMW-Fertigung im Rahmen der Codierung aufgerufen

_No arguments._

### SET_KL30_OFFSET2AKT_DATE

Berechnet den Klemme 30 Stundenzaehler Offset ab dem momentanen Datum und schreibt diesen in das EEPROM des KOMBI BOS funtioniert nur richtig, wenn der KL30_H_OFFSET richtig gesetzt ist. Daher sollte der Job immer aufgerufen werden wenn das Fahrzeug an den Taster angeschlossen wird KWP2000: $3B, $0C

_No arguments._

### UHRZEIT_DATUM_STELLEN

Uhrzeit auf das aktuelle Datum stellen KWP2000: $3B, $0E

_No arguments._

### STATUS_KL30_H_ZAEHLER

Klemme 30 Stundenzaehler auslesen KWP2000: $21, $0D

_No arguments._

### STATUS_BETRIEBSDATEN_LESEN

liest ausgewählte Daten aus BOS Betriebsdaten aus KWP2000 $21 $A1 bis $BF

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | BOS ID 1..30h |

### STATUS_BETRIEBSDATEN_HEADER

gibt den KM Stand aus BOS Betriebsdaten Header aus KWP2000 $21 $A0

_No arguments._

### STATUS_ZEITSTRAHL

gibt BOS Daten für den Annahmerechner in der Reihenfolge Header BOS Umpfänge, CC Umpfänge KWP2000 $21 $C0 Für die exakte Beschreiung der BOS Zeitstrahldaten siehe LH Teil 3 Kapitel Diagnose, Beschreibung zu $21

_No arguments._

### STEUERN_PPC_ADC_SCHREIBEN

AD Kanaele des MPC555 schreiben Fuer Service-und Testzwecke  Es muessen immer alle Argumente im Bereich von 0x00-0xFF uebergeben werden.  Eine exakte Dokumentation der möglichen Argumente kann LH Kombi E65 Teil 3.1 Kapitel "Diagnose" unter Befehl $30 "Lesen/Schreiben der AD Kanäle des MPC555" entnommen werden  KWP2000: $30 $91 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Angabe des ADC Ports (0..E) |
| MSB | int | MSB-Wert der in den KANAL geschrieben werden kann |
| LSB | int | LSB-Wert der in den KANAL geschrieben werden kann |

### STATUS_PPC_ADC_LESEN

AD Kanaele des MPC555 auslesen Fuer Service-und Testzwecke  Dieser Service liefert die Rohwerte am ADC Converter Die Inkremente gehen dabei von 0 bis 1023 (dies entspricht 0..5V die am ADC anliegen)  KWP2000: $30,$91 -> InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_PPC_ADC_SCHREIBEN_AUS

Wenn vorher der Job ADC_SCHREIBEN aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_PPC_ADC_SCHEREIBEN_AUS gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $91, $00

_No arguments._

### STATUS_WASCHWASSER

AD Kanal mit Schalterfunktion des MPC555 lesen (Waschwasser) Fuer Service-und Testzwecke KWP2000: $30,$94,$01, $0D -> InputOutputControlByLocalIdentifier

_No arguments._

### STATUS_KUEHLMITTELSTAND

AD Kanal mit Schalterfunktion des MPC555 lesen (Kueehlmittelstand) Fuer Service-und Testzwecke KWP2000: $30,$94,$01, $03 -> InputOutputControlByLocalIdentifier

_No arguments._

### GWSZ_RESET

GWSZ Korrektur-Offset aendern 

_No arguments._

### STATUS_ANGEZEIGTER_GWSZ

liefert den angezeigten GWSZ 

_No arguments._

### STATUS_ABSOLUTER_GWSZ

liefert den absoluten GWSZ 

_No arguments._

### STEUERN_BOS_CODIERUNG

BOS Codierung für alle einzelnen BOS Grössen 

| Name | Type | Description |
| --- | --- | --- |
| BOS_ID | int | BOS ID 1..30h |
| BOS_CODIERUNG | int | Codierung passend zu BOS_ID, 0=Anzeige, 1=Sperre, 2=Erprobung |

### CODIERDATEN_LESEN

GWSZ Korrektur-Offset aendern 

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | int |  |

### BOS_DATEN_LESEN

BOS Daten auslesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### BOS_RESET

BOS Daten Zuruecksetzen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BOS_KENNUNG | string | gewuenschte BOS-Kennung table BosKennung BOS_K BOS_K_TEXT Werte: Oel, Br_v, Brfl, Filt, Batt, Br_h, ZKrz, Sic, Kfl, TUV, AU Defaultwert: Oel |
| BOS_VERFUEGBARKEIT | string | gewuenschte Verfuegbarkeit in Prozent: 0-200 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | string | Anzahl der durchgefuehrten Services: 0-30 Schalter, keine Aenderung: 31 Defaultwert: 31 |
| BOS_ZIEL_MONAT | string | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter fuer Monat, keine AEnderung: 255 Defaultwert: 255 |
| BOS_ZIEL_JAHR | string | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine AEnderung: 255 Defaultwert: 255 |

### STATUS_KLEMMEN

Klemmenstati auslesen KWP2000: $21, $0E

_No arguments._

### STEUERN_PWM_PORT_SCHREIBEN

PWM Ports des MPC555 schreiben Fuer Service-und Testzwecke Es muessen immer alle drei Argumente im Bereich von 0x00-0xFF uebergeben werden. KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Angabe des Ports (0..F) |
| BYTE1 | int | MSB, das in den Port geschrieben werden kann |
| BYTE2 | int | LSB, das in den Port geschrieben werden kann |

### STATUS_PWM_PORT_LESEN

PWM Ports des MPC555 lesen Fuer Service-und Testzwecke  KWP2000: $30,$90,$01, $XX -> InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_PWM_PORT_SCHREIBEN_AUS

Wenn vorher der Job ADC_SCHREIBEN aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_PWM_PORT_SCHREIBEN_AUS gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $90, $00

_No arguments._

### STEUERN_MDASM_KANAELE_SCHREIBEN

MDASM Kanäle des MPC555 schreiben Fuer Service-und Testzwecke Es muessen immer zwei Argumente im Bereich von 0x00-0xFF uebergeben werden. KWP2000: $30 InputOutputControlByLocalIdentifier, $92 SID, $07 Start, $06 Ausführen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Angabe des Ports (0..FF) |
| BYTE1 | int | Wert der in das Port geschrieben werden kann |

### STATUS_MDASM_KANAELE_LESEN

MDASM_Kanäle des MPC555 lesen Fuer Service-und Testzwecke  KWP2000: $30,SID $92,$ Lesen $01, $XX -> InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_MDASM_KANAELE_SCHREIBEN_AUS

Wenn vorher der Job STEUERN_MDASM-KANAELE_SCHREIBEN aufgerufen wurde Wird die Ansteuerung der Ports durch Diagnose vorgegeben STEUERN_MDASM_PORT_SCHREIBEN_AUS gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, AUS $00

_No arguments._

### STATUS_KLEMMENSPANNUNG

KWP2000: $21, $8F

_No arguments._

### STEUERGERAETE_RESET_DELAY

Seuergeraete reset mit Delay ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| DELAY | long | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine AEnderung: 255 Defaultwert: 255 |

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

### ABILITY_TO_WAKE

| ABILITY_TO_WAKE_NR | ABILITY_TO_WAKE_MODE |
| --- | --- |
| 0x00 | off |
| 0x01 | on |
| 0x02 | critical |
| 0xXY | unbekannter Mode |

### MOST_3DB

| MOST_3DB_NR | MOST_3DB_MODE |
| --- | --- |
| 0x00 | Lichtleistung abgesenkt |
| 0x01 | Volle Lichtleistung |
| 0xXY | unbekannter Mode |

### WAKE_UP_STATUS

| WAKE_UP_STATUS_NR | WAKE_UP_STATUS_MODE |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | SG hat geweckt |
| 0x02 | SG wurde geweckt |
| 0xXY | unbekannter Mode |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x930E | GANGANZEIGE_P |
| 0x930F | GANGANZEIGE_N |
| 0x9310 | GANGANZEIGE_D |
| 0x9311 | GANGANZEIGE_R |
| 0x9313 | TEMPERATURFÜHLER_LCD |
| 0x9315 | GWSZ_FEHLER_CAS_ODER_KOMBI |
| 0x9316 | GWSZ_FEHLER_EEPROM_KOMBI |
| 0x9317 | EEPROM: CHECKSUM ERROR CODING DATA BMW |
| 0x9318 | VMC_COMMUNICATION_ERROR |
| 0x9319 | HEBELGEBER1 |
| 0x931A | HEBELGEBER2 |
| 0x931B | AUSSENTEMPERATUR |
| 0x931C | KURZSCHUSS_DISPLAYHEIZUNG |
| 0x931D | BORDNETZSPANNUNG, UEBERSPANNUNG ODER UNTERSPANNUNG |
| 0x931E | EEPROM: CHECKSUM ERROR CODING DATA VDO |
| 0x931F | Temperaturfühler_LCD2 |
| 0x9327 | ZGM_ALIVE_ERROR |
| 0xA3A8 | CAN_NO_ID_ERROR |
| 0xA3A9 | CAN_ID_1EE_ERROR_Ausfall_Botschaft_LSS |
| 0xA3AA | CAN_ID_1D2_ERROR_Ausfall_Botschaft_Getriebedaten |
| 0xA3AB | CAN_ID_190_ERROR_Ausfall_Botschaft_Anzeige_ACC |
| 0xA3AC | CAN_ID_1A6_ERROR_Ausfall_Botschaft_Wegstrecke |
| 0xA3AD | CAN_ID_1D0_ERROR_Ausfall_Botschaft_Motordaten |
| 0xA3AE | CAN_ID_0AA_ERROR_Ausfall_Botschaft_Drehmoment3 |
| 0xA3AF | CAN_ID_200_ERROR_Ausfall_Botschaft_Regelgeschw_Stufentempomat |
| 0xA3B0 | CAN_ID_202_ERROR_Ausfall_Botschaft_Dimmung |
| 0xA3B1 | CAN_ID_1F6_ERROR_Ausfall_Botschaft_Blinken |
| 0xA3B2 | CAN_ID_130_ERROR_Ausfall_Botschaft_Klemmenstatus |
| 0xA3B3 | CAN_ID_0BE_ERROR_Ausfall_Botschaft_ARS_SSY_Alive_Zaehler |
| 0xA3B4 | CAN_ID_21A_ERROR_Ausfall_Botschaft_Lampenzustand |
| 0xA3B5 | CAN_ID_3B4_ERROR_Ausfall_Botschaft_Powermanagement |
| 0xA3B6 | CAN_ID_394_ERROR_Ausfall_Botschaft_RDA_Anfrage_Datenablage |
| 0xA3B7 | CAN_ID_2E4_ERROR_Ausfall_Botschaft_Status_Anhaenger |
| 0xA3B8 | CAN_ID_326_ERROR_Ausfall_Botschaft_Status_Daempferprogramm |
| 0xA3B9 | CAN_ID_19E_ERROR_Ausfall_Botschaft_Status_DSC |
| 0xA3BA | CAN_ID_0AE_ERROR_Ausfall_Botschaft_Alive_EMF |
| 0xA3BB | CAN_ID_2FC_ERROR_Ausfall_Botschaft_ZV_Klappenzustand |
| 0xA3BC | NO_ANSWER_TO_REQUEST (580h+60h) |
| 0xA3BD | CAN_ID_0C0_ERROR_Ausfall_Botschaft_Alive_ZGM |
| 0xA54B | CAN_ID_0A8_ERROR_Ausfall_Botschaft_Drehmoment1 |
| 0xA3BE | CAS_ALIVE_ERROR |
| 0xA3BF | CIM_ALIVE_ERROR |
| 0xA3C0 | AHM_ALIVE_ERROR |
| 0xA3C1 | LSZ_ALIVE_ERROR |
| 0xA3C2 | POWERMODUL_ALIVE_ERROR |
| 0xA3C3 | RDC_ALIVE_ERROR |
| 0xA3C4 | SECURITY1_ALIVE_ERROR |
| 0xA3C5 | SECURITY2_ALIVE_ERROR |
| 0xA3C6 | WISCHERMODUL_ALIVE_ERROR |
| 0xA3C7 | LUFTFEDER_ALIVE_ERROR |
| 0xE104 | CAN LOW ERROR |
| 0xE105 | CAN HIGH ERROR |
| 0xE106 | GROUND SHIFT ERROR |
| 0xE107 | CAN BUS OFF |
| 0xE10C | MOST: Empfänger hat eine Nachricht nicht abgenommen (Error_NAK) |
| 0xE110 | MOST: Ringbruchdiagnose wurde durchgeführt (Error_Ring_Diagnose) |
| 0xE111 | MOST: Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xFFFF | UNKNOWN ERROR |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### RDA

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 |

### MOST_NAK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x03 | 0x04 | 0x05 | 0x06 |

### MOST_NO_ANSWER

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x08 | 0x04 | 0x05 | 0x06 |

### ID_ALIVE_CC

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0A | 0x0B | 0x0C |

### ID_ALIVE_KOMPL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0A | 0x0B | 0x0D |

### ID_ARS_SFY

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0A | 0x0B | 0x0E | 0x0F |

### ID_ALIVE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0A | 0x0B |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x931E | 0x01 | 0x02 | - | - |
| 0x9317 | 0x01 | 0x02 | - | - |
| 0xE10C | 0x01 | 0xFE | MOST_NAK | - |
| 0xE110 | 0x01 | 0xFE | 0x07 | 0xFF |
| 0xE111 | 0x01 | 0xFE | 0xFF | 0xFD |
| 0xA3AA | 0x01 | ID_ALIVE_KOMPL | - | - |
| 0xA3AB | 0x01 | ID_ALIVE_CC | - | - |
| 0xA3AC | 0x01 | ID_ALIVE | - | - |
| 0xA3AD | 0x01 | ID_ALIVE | - | - |
| 0xA3B3 | 0x01 | ID_ARS_SFY | - | - |
| 0xA3B6 | RDA | - | - | - |
| 0xA3B8 | 0x01 | ID_ALIVE | - | - |
| 0xA3B9 | 0x01 | ID_ALIVE | - | - |
| 0xA3BA | 0x01 | ID_ALIVE | - | - |
| 0xA3BC | 0x1A | - | - | - |
| 0xA3BD | 0x01 | ID_ALIVE | - | - |
| default | 0x01 | 0xFE | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | BORDNETZSPANNUNG | VOLT | - | u c | - | 1 | 10 | 0 |
| 0x02 | Tachometerfunktion betroffen | 0/1 | - | 0x01 | - | - | - | - |
| 0x03 | DEVICE ADRESSE NAK | HEX | - | u i | - | 1 | 1 | 0 |
| 0x04 | FUNCTION BLOCK | HEX | - | u c | - | 1 | 1 | 0 |
| 0x05 | INSTANCE ID | HEX | - | u c | - | 1 | 1 | 0 |
| 0x06 | FUNCTION ID | HEX | - | u i | - | 1 | 1 | 0 |
| 0x07 | POSITION NODE REGISTER | HEX | - | u i | - | 1 | 1 | 0 |
| 0x08 | DEVICE   ADRESSE | HEX | - | u i | - | 1 | 1 | 0 |
| 0x09 | RESET MIT RAM ERHALT | 0/1 | - | 0x01 | - | - | - | - |
| 0x0A | NO ID | 0/1 | - | 0x01 | - | - | - | - |
| 0x0B | ALIVE ERROR | 0/1 | - | 0x02 | - | - | - | - |
| 0x0C | CHECKSUM ERROR | 0/1 | - | 0x04 | - | - | - | - |
| 0x0D | KOMPLEMENT FEHLER | 0/1 | - | 0x04 | - | - | - | - |
| 0x0E | ARS ALIVE ERROR | 0/1 | - | 0x10 | - | - | - | - |
| 0x0F | SFY ALIVE ERROR | 0/1 | - | 0x20 | - | - | - | - |
| 0x10 | 00h GWSZ | 0/1 | - | 0x0001 | - | - | - | - |
| 0x11 | 10h ZUENDKERZEN | 0/1 | - | 0x0002 | - | - | - | - |
| 0x12 | 11h SICHTPRÜFUNG | 0/1 | - | 0x0004 | - | - | - | - |
| 0x13 | 03h BREMSFLÜSSIGKEIT | 0/1 | - | 0x0008 | - | - | - | - |
| 0x14 | 12h KUEHLWASSER | 0/1 | - | 0x0010 | - | - | - | - |
| 0x15 | 20h HU | 0/1 | - | 0x0020 | - | - | - | - |
| 0x16 | 21h AU | 0/1 | - | 0x0040 | - | - | - | - |
| 0x17 | FAh INTERVALL VERKUERKUNG | 0/1 | - | 0x0080 | - | - | - | - |
| 0x18 | FBh INTERVALL VERKUERZUNG | 0/1 | - | 0x0100 | - | - | - | - |
| 0x19 | ALLE DATEN FEHLEN | 0/1 | - | 0x1000 | - | - | - | - |
| 0x1A | ANFRAGE ID | HEX | - | u i | - | 1 | 1 | 0 |
| 0xFE | OHNE BEDEUTUNG | 1 | - | u c | - | 1 | 1 | 0 |
| 0xFD | OHNE BEDEUTUNG | 1 | - | u i | - | 1 | 1 | 0 |
| 0xFF | OHNE BEDEUTUNG | 1 | - | s l | - | 1 | 1 | 0 |
| 0xXY | UNBEKANNTE UW | 1 | - | s l | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Device bekam Reset (Error_Reset) |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930B | Device antwortet nicht (Error_Device_No_Answer) |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930E | Weckendes Device hat erfolglos versucht das Netzwerk zu wecken (Error_WakeUp_Failed). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Error_Nack |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9308 | 0x01 | 0x02 | 0xFD | 0xFF |
| 0x930B | 0x01 | 0xFE | MOST_NO_ANSWER |  |
| 0x9310 | 0x01 | 0xFE | MOST_NO_ANSWER |  |
| default | 0x01 | 0xFE | 0xFD | 0xFF |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | BORDNETZSPANNUNG | VOLT | - | u c | - | 1 | 10 | 0 |
| 0x02 | RESET MIT RAM ERHALT | 0/1 | - | 0x01 | - | - | - | - |
| 0x08 | DEVICE   ADRESSE | HEX | - | u i | - | 1 | 1 | 0 |
| 0x04 | FUNCTION BLOCK | HEX | - | u c | - | 1 | 1 | 0 |
| 0x05 | INSTANCE ID | HEX | - | u c | - | 1 | 1 | 0 |
| 0x06 | FUNCTION ID | HEX | - | u i | - | 1 | 1 | 0 |
| 0xFF | OHNE BEDEUTUNG | 1 | - | s l | - | 1 | 1 | 0 |
| 0xFE | OHNE BEDEUTUNG | 1 | - | u c | - | 1 | 1 | 0 |
| 0xFD | OHNE BEDEUTUNG | 1 | - | u i | - | 1 | 1 | 0 |
| 0xXY | UNBEKANNTE UW | 1 | - | s l | - | 1 | 1 | 0 |

### BOSKENNUNG

| NR | BOS_K | BOS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Oelqualitaet |
| 0x02 | Br_v | Bremsbelagverschleiss vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x05 | Batt | Batteriezustand |
| 0x06 | Br_h | Bremsbelagverschleiss hinten |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x20 | TUV | TUEV |
| 0x21 | AU | AU |

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
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
