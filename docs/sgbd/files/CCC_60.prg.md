# CCC_60.prg

## General

|  |  |
| --- | --- |
| File | CCC_60.prg |
| Type | PRG |
| Jobs | 80 |
| Tables | 45 |
| Origin | BMW EE-40 Dieter Vollmerhaus |
| Revision | 2.06 |
| Author | BMW EE-40 Dieter Vollmerhaus, Siemens VDO Automotive AG CC80SD-AD Joerg Keller, Siemens VDO Automotive AG CC80SD-AD Lothar Weitzel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CCC_60 fuer E60 |  |  |
| ORIGIN | string | BMW EE-40 Dieter Vollmerhaus |  |  |
| REVISION | string | 2.06 |  |  |
| AUTHOR | string | BMW EE-40 Dieter Vollmerhaus, Siemens VDO Automotive AG CC80SD-AD Joerg Keller, Siemens VDO Automotive AG CC80SD-AD Lothar Weitzel |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers KWP2000: $85 ControlDTCSetting Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

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

### SELBSTTEST_STARTEN

Starten des Selbsttests KWP2000: $31 StartRoutineByLocalIdentifier $04 Selftest

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | int | gewaehltes Testscript 0 - standard tests, > 0 nur für Entwicklung |

### SELBSTTEST_STOPPEN

Abbrechen des Selbsttests KWP2000: $32 StopRoutineByLocalIdentifier $04 Selftest

_No arguments._

### SELBSTTEST_ABFRAGEN

Abfragen des Systemtests KWP2000: $33 RequestRoutineResultsByLocalIdentifier $04 Selftest

_No arguments._

### SYSTEMTEST_STARTEN

Starten des Systemtests KWP2000: $31 StartRoutineByLocalIdentifier $FA OEM-spezifisch: Systemtest

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | unsigned int | gewaehltes Testscript 0 - standard tests, > 0 nur für Entwicklung |

### SYSTEMTEST_STOPPEN

Abbrechen des Systemtests KWP2000: $32 StopRoutineByLocalIdentifier $FA OEM-spezifisch: Systemtest

_No arguments._

### SYSTEMTEST_ABFRAGEN

Abfragen des Systemtests KWP2000: $33 RequestRoutineResultsByLocalIdentifier $FA OEM-spezifisch: Systemtest

_No arguments._

### READ_LOGISTIC_NR

Auslesen der Logistiknummer KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### READ_WA_CODE

WA-Code auslesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### SET_ENDE_CODIERUNG

Codierdaten flashen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

_No arguments._

### SET_LOGISTIC_NR

Modify Logistic Nr KWP2000: $2E WriteDataByCommonIdentifier Dieser job schickt zusaetzlich ein set_ende_codierung Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LOGISTIC_NO | string | BMW Logistic Nummer (12 digits) |

### SER_NR_DOM_LESEN

Seriennummer 14-stellig lesen KWP2000: $21 ReadDataByLocalIdentifier $E0 Local ID SER_NR_DOM Modus  : Default

_No arguments._

### SCHREIBEN_BLOCKLAENGE

max. Blocklaenge zum SW-Laden KWP2000: $2e WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PROTOKOLL_VERSION | string | Protokol Version: XXL oder Standard table ProtVersionTABLE Prot_Version |

### READ_CURRENT_UIF

currentUIFDataTable KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### READ_BMW_SACH_NR

SystemSupplierECUHardwareNumber KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### READ_BMW_HW_VERSION

vehicleManufactureECUHardwareVersionNumber KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### PROGRAM_REFERENZ_LESEN

vehicleManufECUSoftwareLayerVersionNumber KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### STATUS_DISPLAY

Info ueber die aktuell verwendeten Displays KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_MEMORY_USAGE

Aktueller Verbrauch der System Recourcen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_MEMORY_AVAILABLE

Groesse der verfuegbaren System Recourcen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DVD_TEMPERATURE

Status der Temperatur des DVD Laufwerks KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DRIVE_DVD

Status des DVD-Laufwerks wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DRIVE_CD

Status des CD-Laufwerks wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_TASTER

Status aller Taster wird ausgegeben Die Daten koennen nur dann zurueckgeben werden, wenn der CCC in Zustand 'FIB ist aktuell' ist (s. JOB status_fib_create) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DREHKNOPF

Der aktuelle Status des Drehknopfs wird ausgegeben Die Daten können nur dann zurueckgeben werden, wenn der CCC in Zustand 'FIB ist aktuell' ist (s. JOB status_fib_create) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_CD_SWL

Der aktuelle SWL-Status bei SWL von CD wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### SET_END_SWL

Schließe Most-Lade-Prozedur ab KWP2000: $31 StartFunctionByLocalId Modus  : Default

_No arguments._

### GENERATE_FIB

Erstelle neues FastBootImage KWP2000: $31 StartFunctionByLocalId Modus  : Default

_No arguments._

### STATUS_FIB_CREATE

aktueller Zustand des FastBootImage KWP2000: $33 GetRoutineResultByLocalId Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FIBTESTZEIT | int | Zeit in Sekunden |

### STEUERN_EJECT_CD

Falls eine CD im Laufwerk ist, wird sie ausgeworfen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_EJECT_DVD

Falls ein Medium im DVD Laufwerk ist, wird es ausgeworfen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_LESEN_LAUFWERK

Auslesen des codierten Laufwerks (CD Laufwerk oder MD Laufwerk) KWP2000: $22 ReadDataByCommonIdentifier

_No arguments._

### STEUERN_INTERNAL_RESET

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $FA RequestInternalReset Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig 

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xE1CC | Ein Device hat eine Monitor Nachricht nicht bekommen oder beantwortet (Error_Monitoring). |
| 0xE1CD | Gesamtring konnte nicht aufgestartet werden (Error_WakeUp_Failed). |
| 0xE1CE | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE1CF | Die zentrale Registry ist fehlerhaft (Error_Registry_New). |
| 0xE1D0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE1D1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE1D2 | Shutdown wegen Uebertemperatur (Error_Tempshutdown). |
| 0xA3CE | CD Services nicht Verfuegbar |
| 0xA3CF | CD Laufwerk steht im Reset |
| 0xA3D0 | CD Laufwerk Kommunikationsfehler |
| 0xA3D1 | Keine Verbindung zwischen Companion Chip und CAN-Transceiver |
| 0xA3D2 | Keine Verbindung zwischen Companion Chip und I/O-Expander |
| 0xA3D3 | Keine Verbindung zwischen Companion Chip und MOST |
| 0xA3D4 | Keine CAN Verbindung zum Tuner |
| 0xA3D5 | Keine CAN Verbindung zum ASK |
| 0xA3D6 | Keine CAN Verbindung zum LVDS |
| 0xA3D7 | Keine UART Verbindung zum Nav |
| 0xA3D8 | Keine CAN Verbindung zum hinteren LVDS |
| 0xA3D9 | DVD Services nicht Verfuegbar |
| 0xA3DA | DVD Laufwerk steht im Reset |
| 0xA3DB | DVD Laufwerk Kommunikationsfehler |
| 0xA3DC | Ungueltige FIB Checksumme |
| 0xA3DD | Keine Verbindung I2S Speech Out - DSP (ASK) -Speech In |
| 0xA3DE | Video In defect (obsolete) |
| 0xA3DF | Abweichung zwischen SH4-Clock und RealTime-Clock |
| 0xA3E0 | Abweichung zwischen PCI-Clock und RealTime-Clock |
| 0xA3E1 | Defekte im SDRAM |
| 0xA3E2 | Defekte im externen SDRAM |
| 0xA3E3 | Defekte im NAND-Flash |
| 0xA3E4 | FlashFileSystem konnte nicht gestartet werden |
| 0xA3E5 | Keine IPC-Verbindung zum Gateway |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00000000 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xE1CC | 0x20 | 0x21 | 0x05 | - |
| 0xE1CD | 0x20 | 0x21 | - | - |
| 0xE1CE | 0x20 | 0x21 | - | - |
| 0xE1CF | 0x20 | 0x21 | 0x05 | - |
| 0xE1D0 | 0x20 | 0x21 | 0x06 | - |
| 0xE1D1 | 0x20 | 0x21 | - | - |
| 0xE1D2 | 0x20 | 0x21 | - | - |
| 0xA3CE | 0x20 | 0x21 | - | - |
| 0xA3CF | 0x20 | 0x21 | - | - |
| 0xA3D0 | 0x20 | 0x21 | - | - |
| 0xA3D4 | 0x20 | 0x21 | - | - |
| 0xA3D5 | 0x20 | 0x21 | - | - |
| 0xA3D6 | 0x20 | 0x21 | - | - |
| 0xA3D7 | 0x20 | 0x21 | - | - |
| 0xA3D8 | 0x20 | 0x21 | - | - |
| 0xA3D9 | 0x20 | 0x21 | - | - |
| 0xA3DA | 0x20 | 0x21 | - | - |
| 0xA3DB | 0x20 | 0x21 | - | - |
| 0xA3DC | 0x20 | 0x21 | - | - |
| 0xA3DD | 0x20 | 0x21 | - | - |
| 0xA3DE | 0x20 | 0x21 | - | - |
| default | 0x20 | 0x21 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x05 | Diagnoseadresse | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x06 | NPR | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Uebertemperatur | Grad C | - | unsigned long | - | 1 | 1 | 0 |
| 0x10 | Logische-Knotenadresse | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x11 | FBlockID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | InstID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | FktID | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x20 | VDOError | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 0x21 | Datenlaenge | Hex | - | unsigned char | - | 1 | 1 | 0 |

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
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9408 | Abweichung SH4 clock von der real time clock. |
| 0x9409 | Abweichung PCI clock von der real time clock. |
| 0x940A | Defekte im internen SDRAM. |
| 0x940B | Defekte im externen SDRAM. |
| 0x940C | Defekte im NAND flash. |
| 0x940D | Video In defekt (Chip 7118 antwortet nicht). |
| 0xA3C8 | Checksum Error |
| 0xA3C9 | Illegaler Speicher Zugriff |
| 0xA3CA | Illegaler Resourcen Zugriff |
| 0xA3CB | Timelimit Exeeded |
| 0xA3CC | Detected Software Exception |
| 0xA3CD | OS-Fehler |
| 0xA3CE | CD/MD Drive errors (obsolete) |
| 0xA3CF | DVD Drive errors (obsolete) |
| 0xA3D0 | No CAN connection to Tuner (obsolete) |
| 0xA3D1 | No CAN connection to ASK (obsolete) |
| 0xA3D2 | No CAN Connection to LVDS (obsolete) |
| 0xA3D3 | No connection UART to Nav (obsolete) |
| 0xA3D4 | No CAN Connection to Rear Seat LVDS (obsolete) |
| 0xA3D5 | No connection between companion chip and CAN transceiver (obsolete) |
| 0xA3D6 | No connection between companion chip and I/O expander (obsolete) |
| 0xA3D7 | No connection companion chip to Video Out (obsolete) |
| 0xA3DD | Wrong FIB checksum (obsolete) |
| 0xA3DF | No Connection I2S Speech Out - DSP (ASK) -Speech In (obsolete) |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 10000000 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9308 | 0x20 | 0x21 | - | - |
| 0x9309 | 0x20 | 0x21 | - | - |
| 0x930A | 0x20 | 0x21 | - | - |
| 0x930B | 0x20 | 0x21 | iAddresse | - |
| 0x930C | 0x20 | 0x21 | - | - |
| 0x930D | 0x20 | 0x21 | - | - |
| 0x930F | 0x20 | 0x21 | 0x05 | - |
| 0x9310 | 0x20 | 0x21 | iAddresse | - |
| 0x9408 | 0x20 | 0x21 | iAddresse | - |
| 0x9409 | 0x20 | 0x21 | iAddresse | - |
| 0x940A | 0x20 | 0x21 | iAddresse | - |
| 0x940B | 0x20 | 0x21 | iAddresse | - |
| 0x940C | 0x20 | 0x21 | iAddresse | - |
| 0x940D | 0x20 | 0x21 | iAddresse | - |
| 0xA3C8 | 0x20 | 0x21 | - | - |
| 0xA3C9 | 0x20 | 0x21 | - | - |
| 0xA3CA | 0x20 | 0x21 | - | - |
| 0xA3CB | 0x20 | 0x21 | - | - |
| 0xA3CC | 0x20 | 0x21 | - | - |
| 0xA3CD | 0x20 | 0x21 | - | - |
| 0xA3CE | 0x20 | 0x21 | - | - |
| 0xA3CF | 0x20 | 0x21 | - | - |
| 0xA3D0 | 0x20 | 0x21 | - | - |
| 0xA3D1 | 0x20 | 0x21 | - | - |
| 0xA3D2 | 0x20 | 0x21 | - | - |
| 0xA3D3 | 0x20 | 0x21 | - | - |
| 0xA3D4 | 0x20 | 0x21 | - | - |
| 0xA3D5 | 0x20 | 0x21 | - | - |
| 0xA3D6 | 0x20 | 0x21 | - | - |
| 0xA3D7 | 0x20 | 0x21 | - | - |
| 0xA3D8 | 0x20 | 0x21 | - | - |
| 0xA3D9 | 0x20 | 0x21 | - | - |
| 0xA3DA | 0x20 | 0x21 | - | - |
| 0xA3DB | 0x20 | 0x21 | - | - |
| 0xA3DC | 0x20 | 0x21 | - | - |
| 0xA3DD | 0x20 | 0x21 | - | - |
| 0xA3DF | 0x20 | 0x21 | - | - |
| default | 0x20 | 0x21 | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | - | 1 | 1 | 0 |
| 0x04 | TaskId | Hex | - | signed char | - | 1 | 1 | 0 |
| 0x05 | Diagnoseadresse | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x10 | Logische-Knotenadresse | Hex | - | unsigned int | - | 1 | 1 | 0 |
| 0x11 | FBlockID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | InstID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | FktID | Hex | - | unsigned int | - | 1 | 1 | 0 |
| 0x20 | VDOError | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 0x21 | DatenLaenge | Hex | - | unsigned char | - | 1 | 1 | 0 |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 0xxxxxxx | 00 | unused |
| 1xxxxxxx | 01 | unused |
| xxxxxxxx | 1 | unused |

### FWINERROR

| UW_ANZ | UW_1 | UW_2 |
| --- | --- | --- |
| 2 | 20 | 21 |

### IADDRESSE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x10 | 0x11 | 0x12 | 0x13 |

### TESTERGEBNISSE

| TESTERG_NR | TESTERG_TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft - Nummer  |
| 0x7F | Test abgebrochen |
| 0x81 | Test beendet mit Fehler  |
| 0xFF | Test beendet |

### HOSTSTATETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Status OK |
| 0x01 | Could not retrieve data |
| 0x02 | Ausgabe Puffer zu klein! |
| 0x03 | Daten noch nicht verfuegbar! |
| 0xXY | nicht definiert |

### DISPLAYFLAGS

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x01 | True color system |
| 0x02 | Indexed color system |
| 0x04 | Monochrome mode |
| 0x08 | Gray scale mode |

### SWLSTATUSTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | ECU_DOWNLOAD_IN_PROGRESS |
| 0x01 | ECU_DONE |
| 0x02 | ECU_TO_BE_UPDATED |
| 0xD6 | ECU_ERROR_TFFS_EXTRACTION |
| 0xD7 | ECU_ERROR_TFFS_CREATION |
| 0xD8 | ECU_ERROR_RAMDISK_CREATION |
| 0xD9 | ECU_ERROR_UNKNOWN_OVERALL_STATUS |
| 0xDA | ECU_ERROR_CD_VERSION_TOO_BIG |
| 0xDB | ECU_ERROR_VERSION_CHECKSUM_MISMATCH |
| 0xDC | ECU_ERROR_NO_PROJMAPPING |
| 0xDD | ECU_ERROR_NO_HWMAPPING |
| 0xDE | ECU_ERROR_INVALID_FAST_IMAGE |
| 0xDF | ECU_ERROR_NO_ECU_RESPONSE |
| 0xE0 | ECU_ERROR_ILLEGAL_PROG_TYPE |
| 0xE1 | ECU_ERROR_READING_HIP_VERS |
| 0xE2 | ECU_ERROR_CHECKSUM_MISMATCH |
| 0xE3 | ECU_ERROR_INVALID_IMAGE_HEADER |
| 0xE4 | ECU_ERROR_PROCESSING_VERSION_FILE |
| 0xE5 | ECU_WARNING_LINE_NOT_OF_INTEREST |
| 0xE6 | ECU_WARNING_COULD_NOT_UPDATE_AIF |
| 0xE7 | ECU_ERROR_NO_ECUS |
| 0xE8 | ECU_ERROR_DISC_CHANGE |
| 0xE9 | ECU_ERROR_LABEL_NOT_FOUND |
| 0xEA | ECU_ERROR_SECTION_DATA |
| 0xEB | ECU_ERROR_SECTION_PROG |
| 0xEC | ECU_ERROR_CANT_OPEN_FILE |
| 0xED | ECU_ERROR_IMAGEIO |
| 0xEE | ECU_ERROR_WRONG_SOURCE |
| 0xEF | ECU_ERROR_WRITING_FILE |
| 0xF0 | ECU_ERROR_READING_FILE |
| 0xF1 | ECU_WARNING_UNKNOWN_COMMAND |
| 0xF2 | ECU_ERROR_UNKNOWN_SCRIPT |
| 0xF3 | ECU_ERROR_READING_KWP |
| 0xF4 | ECU_ERROR_SRIPT_PARSING |
| 0xF5 | ECU_ERROR_INFOLOG_READ |
| 0xF6 | ECU_ERROR_UNKNOWN_BOOTMODE |
| 0xF7 | ECU_ERROR_FILESIZE_MISMATCH |
| 0xF8 | ECU_ERROR_TOO_MANY_ECUS |
| 0xF9 | ECU_ERROR_DISC_INSERTED |
| 0xFA | ECU_ERROR_DISC_EJECTED |
| 0xFB | ECU_ERROR_PROCESSING_SCRIPT |
| 0xFC | ECU_ERROR_NOT_ENOUGH_MEMORY  |
| 0xFD | ECU_ERROR_IMAGE_NOT_FOUND |
| 0xFE | ECU_ERROR_SCRIPT_NOT_FOUND  |
| 0xff | unknown status |

### SWLSTATUSALLTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | CCC SW-Laden aktiv |
| 0x01 | CCC SW-Laden abgeschlossen oder nicht gestartet |
| 0x02 | Fehler |
| 0x03 | Erfolgreich und CD noch im Laufwerk |
| 0xff | unknown status |

### FIBSTATUSTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x1E | FIB wird erstellt |
| 0x1F | FIB ist aktuell |
| 0x12 | FIB ist nicht aktuell |
| 0xff | unknown status |

### INFOLOGFILETABLE

| WERT | FILE_NAME |
| --- | --- |
| 0x01 | ProdStamp |
| 0x02 | PlatDef |
| 0x03 | DebugMessage |
| 0x04 | TSW_ErrorArray |
| 0x08 | Most |
| 0x09 | PortParameter |
| 0x10 | BootMode |
| 0x11 | TswMode |
| 0x12 | Trm |
| 0x20 | SWload |
| 0x21 | SwConfig |
| 0x22 | SWLDiag |
| 0x25 | BWMSachNrHist |
| 0x30 | ResetData |
| 0x31 | SWLFragment |
| 0x32 | SWLStatus |
| 0x40 | Diagnosis |
| 0x41 | DiagTestArray |
| 0x60 | Host_EcuData |
| 0x61 | Appl_EcuData |
| 0x62 | Host_DataErrLog |
| 0x63 | Appl_DataErrLog |
| 0x64 | CfgErrLog |
| 0x65 | CfgDServ |
| 0x80 | CD_Data |
| 0x90 | Display_Setup |
| 0x91 | DownloadProcessInfo |
| 0x92 | DownloadStatusInfo |
| 0x93 | Dvd_Video_Service_Data |
| 0x100 | TSW |
| 0x102 | TestArray |
| 0x200 | ADC |
| 0x201 | TrimediaTst |
| 0x220 | BrowserCodierdaten |
| 0xFFFF | all |

### CDSTATUSTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | no SWL CD in drive |
| 0x01 | SWL CD in drive |

### ECUIDTABLE

| WERT | ECU_TEXT |
| --- | --- |
| 0x3F | Enhanced Audio |
| 0x47 | Tuner |
| 0x62 | Gateway |
| 0x63 | Host |
| 0xA0 | Application |
| 0xXY | unknown |

### DRIVEMODETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Kein Medium im Laufwerk erfolgreich analysiert |
| 0x01 | Player im Stop Mode |
| 0x02 | Player spielt Musik |
| 0x03 | Player im Pause Mode |
| 0x04 | Player schneller Vorlauf |
| 0x05 | Player schneller Ruecklauf |
| 0xXY | unknown |

### DRIVEMODECOMMENTTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Laufwerk ist READY |
| 0x01 | Ergebnis eines Benutzerkommandos |
| 0x02 | Neues Medium eingelegt |
| 0x03 | Ende des Mediums |
| 0x04 | Start des Mediums |
| 0x05 | Ende der Spur |
| 0x10 | Laufwerk ist nicht READY |
| 0x11 | Laufwerk ist tot |
| 0x12 | Medium konnte nicht erkannt werden |
| 0x13 | Laufwerks Temperatur zu hoch |
| 0x14 | Laufwerk hat keine externe Clock |
| 0x15 | Inst. Ext. clock recovery fehlgeschlagen |
| 0x16 | Externe Clock verfuegbar |
| 0x17 | Neues Medium, aber keine externe Clock |
| 0x18 | Medium wird analysiert |
| 0xXY | unknown |

### DRIVELOADINGSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Kein Medium im Laufwerk |
| 0x01 | Disc wird eingelegt |
| 0x02 | Disc wird ausgeworfen |
| 0x03 | Disc ist ausgeworfen |
| 0x04 | Disc ist im Laufwerk |
| 0x05 | Unbekannte Disc Position |
| 0xXY | unknown |

### DRIVELOADINGCOMMENTTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | kein Kommentar |
| 0x01 | Ladezustand auf Aufforderung geaendert |
| 0x11 | Laufwerk ist tot |
| 0xXY | unknown |

### DRIVEMEDIUMTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Medium Typ unbekannt |
| 0x01 | Medium im Laufwerk ist eine CD |
| 0x02 | Medium im Laufwerk ist eine DVD  |
| 0xXY | unknown |

### DRIVEMEDIUMSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Medium unbekannt |
| 0x01 | Daten detektiert, ISO 9660 Filesystem verfuegbar |
| 0x02 | CDDA detektiert |
| 0x03 | SuperAudio CD detektiert |
| 0x04 | Video CD |
| 0x05 | Super Video CD |
| 0x06 | DVD video |
| 0x07 | DVD audio |
| 0x08 | DVD daten & video mixed mode Medium |
| 0xXY | unknown |

### DRIVEEJECTSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Software blockiert Eject Button nicht |
| 0x01 | Software blockiert Eject Button |
| 0xXY | unknown |

### DRIVETHERMALSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Temperatur zu niedrig (FATAL) |
| 0x01 | Temperatur zu niedrig (CRITICAL) |
| 0x02 | Temperatur niedrig |
| 0x03 | Temperatur normal |
| 0x04 | Temperatur hoch |
| 0x05 | Temperatur zu hoch (CRITICAL) |
| 0x06 | Temperatur zu hoch (FATAL) |
| 0xFF | Temperatur nicht definiert |
| 0xXY | unknown |

### DRIVEPOWERSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Spannung nicht OK (FATAL) |
| 0x01 | Spannung sehr niedrig (CRITICAL) |
| 0x02 | Spannung niedrig |
| 0x03 | Spannung normal |
| 0x04 | Spannung hoch |
| 0x05 | Spannung sehr hoch (CRITICAL) |
| 0x06 | Spannung zu hoch (FATAL) |
| 0xFF | Spannung noch nicht verfuegbar |
| 0xXY | unknown |

### DRIVEERRORTABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Keine weiteren Fehlerfaelle |
| 0x01 | Disc wurde analysiert, ist aber nicht lesbar |
| 0x02 | Temperatur Problem |
| 0x04 | Spannungsversorgung nicht OK |
| 0x08 | External Clock Fehler |
| 0x10 | Keine Kommunikation mit dem Laufwerk moeglich |
| 0xXY | unknown |

### BUTTONSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x01 | released |
| 0x00 | pressed |
| 0xXY | unknown |

### PROTVERSIONTABLE

| WERT | PROT_VERSION |
| --- | --- |
| 0x00FA | Standard |
| 0x037A | XXL |
| 0xXY | unknown |

### DRIVETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x04 | CD_LAUFWERK |
| 0x05 | MD_LAUFWERK |
| 0xXY | unknown |
