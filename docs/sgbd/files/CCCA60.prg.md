# CCCA60.prg

## General

|  |  |
| --- | --- |
| File | CCCA60.prg |
| Type | PRG |
| Jobs | 94 |
| Tables | 38 |
| Origin | BMW EE-40 Dieter Vollmerhaus |
| Revision | 4.020 |
| Author | BMW EE-40 Dieter Vollmerhaus, Siemens-VDO HEM-SWF Joerg Keller |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CCC Application |  |  |
| ORIGIN | string | BMW EE-40 Dieter Vollmerhaus |  |  |
| REVISION | string | 4.020 |  |  |
| AUTHOR | string | BMW EE-40 Dieter Vollmerhaus, Siemens-VDO HEM-SWF Joerg Keller |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.24 |  |  |
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

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry Modus: Default

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

### REQUEST_REMOTE_DATA_SOURCES

Anstossen der Programmiereung mit Daten von externer Datenquelle und Abfragen des Status Extended Flashjob KWP2000: $40 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_MEDIUM | string | Daten medium "CD-ROM", "DVD-ROM", "IP-SERVER" |
| DATA_LABEL | string | Label des Datenmediums |
| DATEI_NAME | string | Name der Datenquelle |

### REQUEST_REMOTE_DOWNLOAD

start der Programmierung mit Daten von externer Datenquelle und Abfragen des Status Extended Flashjob KWP2000: $41 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| DATEN_KOMPRESSION | unsigned char | Kennung fuer Datenkompression ung Verschluesselung |
| DATEN_MEDIUM | string | Daten medium "CD-ROM", "DVD-ROM", "IP-SERVER" |
| DATA_LABEL | string | Label des Datenmediums |
| DATEI_NAME | string | Erreichter Prozentsatz der Programmierung |

### REMOTE_TRANSFER_DATA

start der Programmierung mit Daten von externer Datenquelle und Abfragen des Status Extended Flashjob KWP2000: $42 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NUM_PROG_AKTIVE | unsigned char | Anzahl der zur Zeit aktiven Programmierprozesse |

### REQUEST_REMOTE_TRANSFER_EXIT

Beendigung oder Abbruch der Remote Programmierung Extended Flashjob KWP2000: $43 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DUMMY | string | wird eigentlich nichtbenoetigt |

### SET_ENDE_CODIERUNG

Codierdaten flashen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

_No arguments._

### SCHREIBEN_TELEFONNUMMER_SDARS

Schreiben der Telefonnummer für SDARS KWP2000: $3B writeDataByLocalIdentifier $A3 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_SDARS | string | Nummer des Bereitschaftsdienstes Stringlänge max. 35 Zeichen (ohne Endezeichen \0) |

### LESEN_TELEFONNUMMER_SDARS

Auslesen der im CCC gespeicherten Telefonnummer für - SDARS KWP2000: $21 readDataByLocalIdentifier $A3 recordLocalIdentifier Modus  : Default

_No arguments._

### LESEN_TELEFONNUMMERN

Auslesen der im CCC gespeicherten Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline KWP2000: $21 readDataByLocalIdentifier $A2 recordLocalIdentifier Modus  : Default

_No arguments._

### SCHREIBEN_TELEFONNUMMERN

Schreiben der Telefonnummern für - Bereitschaftsdienst - Heimathändler - Passo - Hotline KWP2000: $3B writeDataByLocalIdentifier $A2 recordLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NR_BEREITSCHAFTSDIENST | string | Nummer des Bereitschaftsdienstes Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_HEIMATHAENDLER | string | Nummer des Heimathändlers Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_PASSO | string | Nummer Passo Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |
| NR_HOTLINE | string | Nummer der Hotline Stringlänge max. 50 Zeichen + Stringende-Zeichen (\0) |

### STATUS_HIP_SW_VERSION

Aktuelle HIP SW-Version wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_HIP_HW_VERSION

Aktuelle HIP HW-Version wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GPS_TRACKING

Status des GPS wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GPS_ANTENNA

Status der GPS Antenne wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GPS_POSITION

GPS Position wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DR_POSITION

GPS Position abgeglichen mit speed, gyro wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GPS_DOP

GPS Auflösung wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GPS_TIME

GPS Datum und Uhrzeit wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GPS_SATINFO

GPS SatInfo wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DIR_SWITCH

Status der Gangwahl wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_TACHOPULSE

Status der Tachopulse wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_GYRO

Status der GYRO-Spannung wird ausgegeben (wird ab NAVI01-SW 6.3.0 unterstützt) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_HIP_SW_LOADING

Der aktuelle HIP SWL-Status wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### START_HIP_SW_LOADING

HIP Software Laden wird gestartet KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| HIP_SWL_SOURCE | string | Quelldatei inclusive Pfad Max. Laenge: 48 |

### STATUS_AUDIO

Detektiert den Status der Audio-Applikation KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_MIXER

Gibt die aktive Audio Ausgabe Einheit an KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_AKTIVE_APPLIKATION

Liefert den Namen der zur Zeit aktiven Applikation KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_START_TUNER

? KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_SPEECH_RECOG

Status der Spracherkennung KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_AUDIO_MGR

Status des universellen Sprachausgabe Managers KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_LAST_CONNECTION

URL der letzen Verbindung wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_TESTBILD_FARBFLAECHE

? KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ROT_WERT | long | OKAY, wenn fehlerfrei |
| GRUEN_WERT | long | OKAY, wenn fehlerfrei |
| BLAU_WERT | long | OKAY, wenn fehlerfrei |

### STEUERN_TESTBILD_SPEZIAL

? KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TESTBILD_ID | int | OKAY, wenn fehlerfrei |

### STATUS_LESEN_SYSTEM_AUDIO

Auslesen des codierten Audio-Systems KWP2000: $22 ReadDataByCommonIdentifier

_No arguments._

### STEUERN_INTERNAL_RESET

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $FA RequestInternalReset Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig 

_No arguments._

### STEUERN_VOLUMEAUDIO

Einstellen der Audio-Lautstaerke KWP2000: $22 WriteDataByCommonIdentifier - set volume Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VOLUME | string | Ausgewaehlte Audio-Lautstaerke  table TAudioVolume WERT |

### STEUERN_NEXT_ENTSOURCE

Weiterschaltung der Entertainment-Quelle per Diagnose KWP2000: $22 WriteDataByCommonIdentifier - set volume $F902 set naechste Entertainment Quelle

| Name | Type | Description |
| --- | --- | --- |
| ARG_ENTSOURCE | string | Einzustellende Entertainmentquelle table TEntSource TEXT Wenn weggelassen, dann weiterschalten |

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
| 0xA048 | Kein Zusaetzliches Memory verfuegbar |
| 0xA04A | Root Zertifikat im Browser ist ungueltig |
| 0xA04B | Das angeforderte Security Level ist beim WAP Gateway nicht verfuegbar |
| 0xA04C | Das OU-Feld des geladenen WAP Zertifikat ist ungueltig |
| 0xA04D | Das aktuelle Netz wird nicht unterstuetzt |
| 0xA04E | Gyro Ausgaben ausserhalb der Spezifikation |
| 0xA04F | Kein Tacho Signal waehrend GPS Bewegung erkennt |
| 0xA050 | Zu grosse Tachodaten |
| 0xA051 | Rueckwertsgang Signal in Widerspruch zu GPS |
| 0xA052 | Grosse oder haeufige Positionsspruenge (obsolete) |
| 0xA053 | Oszillatorwerte ausserhalb Grosse der Spezifikation |
| 0xA054 | Offener GPS-Antennenanschluss |
| 0xA055 | Kurzschluss des GPS-Antennenanschluss |
| 0xA056 | Keine Verbindung zu GPS DSP |
| 0xA057 | RealTimeClock inkonsistent mit GPS-Zeit |
| 0xA058 | Gyro Fehler bei Selbsttest |
| 0xA059 | Gyro AD-Wandler Fehler bei Selbsttest |
| 0xA05A | Gyro gibt permanent 3.3 V |
| 0xA05B | Generischer Gyro Fehler |
| 0xA05C | Nicht spezifizierter Gyro Fehler |
| 0xA05D | Nicht spezifizierter Tacho Fehler |
| 0xA05E | Unbekanntes Soft Event |
| 0xA05F | Illegale hardware-Interrupts |
| 0xA060 | HIP: RAM-Fehler bei Selbsttest |
| 0xA061 | HIP: Checksum Fehler bei ROM test |
| 0xA062 | Keine UART-Verbindung zum HIP Modul |
| 0xA063 | HIP: interner SW-Fehler |
| 0xA064 | HIP: Fehler bei der Freigabe einer Semaphore |
| 0xA065 | HIP: Fehler beim Loeschen einer Message Queue |
| 0xA066 | HIP: Fehler beim Loeschen einer Task |
| 0xA067 | HIP: Fehler beim Suspendieren einer Task |
| 0xA6E8 | HIP: Fehler beim Resume einer Task |
| 0xA6E9 | HIP: Fehler beim Erstellen einer Semaphore |
| 0xA6EA | HIP: Fehler beim Verbinden zu einer IO-Zelle |
| 0xA6EB | HIP: Fehler beim Erstellen einer Task |
| 0xA6EC | HIP: Fehler beim Speicher allocieren |
| 0xA6ED | HIP: eine Message Queue ist voll |
| 0xA6EE | HIP: Fehler beim Oeffnen des seriellen Ports |
| 0xA6EF | HIP: COCOM event, kein recovery |
| 0xA6F0 | HIP: Fehler in Navigations library |
| 0xA6F1 | HIP: Serieller Port nicht gefunden |
| 0xA6F2 | HIP: Fehler beim Zugriff auf den seriellen Port |
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
| xxxxxxxx | 0 | - |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA048 | 20 | 21 | - | - |
| 0xA04A | 20 | 21 | - | - |
| 0xA04B | 20 | 21 | - | - |
| 0xA04C | 20 | 21 | - | - |
| 0xA04D | 20 | 21 | - | - |
| 0xA04E | 20 | 21 | - | - |
| 0xA04F | 20 | 21 | - | - |
| 0xA050 | 20 | 21 | - | - |
| 0xA051 | 20 | 21 | - | - |
| 0xA052 | 20 | 21 | - | - |
| 0xA053 | 20 | 21 | - | - |
| 0xA054 | 20 | 21 | - | - |
| 0xA055 | 20 | 21 | - | - |
| 0xA056 | 20 | 21 | - | - |
| 0xA057 | 20 | 21 | - | - |
| 0xA058 | 20 | 21 | - | - |
| 0xA059 | 20 | 21 | - | - |
| 0xA05A | 20 | 21 | - | - |
| 0xA05B | 20 | 21 | - | - |
| 0xA05C | 20 | 21 | - | - |
| 0xA05D | 20 | 21 | - | - |
| 0xA05E | 20 | 21 | - | - |
| 0xA05F | 20 | 21 | - | - |
| 0xA060 | 20 | 21 | - | - |
| 0xA061 | 20 | 21 | - | - |
| 0xA062 | 20 | 21 | - | - |
| 0xA063 | 20 | 21 | - | - |
| 0xA064 | 20 | 21 | - | - |
| 0xA065 | 20 | 21 | - | - |
| 0xA066 | 20 | 21 | - | - |
| 0xA067 | 20 | 21 | - | - |
| 0xA6E8 | 20 | 21 | - | - |
| 0xA6E9 | 20 | 21 | - | - |
| 0xA6EA | 20 | 21 | - | - |
| 0xA6EB | 20 | 21 | - | - |
| 0xA6EC | 20 | 21 | - | - |
| 0xA6ED | 20 | 21 | - | - |
| 0xA6EE | 20 | 21 | - | - |
| 0xA6EF | 20 | 21 | - | - |
| 0xA6F0 | 20 | 21 | - | - |
| 0xA6F1 | 20 | 21 | - | - |
| 0xA6F2 | 20 | 21 | - | - |
| default | 20 | 21 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VDO-Error | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 21 | Datenlaenge | Hex | - | unsigned char | - | 1 | 1 | 0 |

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
| 0x9508 | Online: Browser kann nicht gestartet werden |
| 0x9509 | Online: Dateien koennen nicht geschrieben oder gelesen werden |
| 0x950A | Online: Initiale Timer koennen nicht gestartet werden |
| 0x950B | Online: Einwahl in RAS-Server konnte fehlgeschlagen |
| 0x950D | Online: Telefon nicht verfuegbar |
| 0x950E | Online: Kein zusaetzlicher Speicher verfuegbar |
| 0x9520 | Viva: Fehler in der Spracherkennungs-SW |
| 0x9521 | Viva: Audioverbindung konnte nicht aufgebaut werden |
| 0x9522 | Viva: MultiMedia Registry nicht verfuegbar |
| 0x9523 | Viva: Mikrophon Registry nicht verfuegbar |
| 0x9524 | Viva: Grammatik-Datei nicht verfuegbar |
| 0x9525 | Viva: nicht alle benoetigten Resourcen konnten allokiert werden |
| 0x9526 | Viva: SprachSynthesiser nicht verfuegbar |
| 0x9527 | Viva: Verbindung zum SprachSynthesiser nicht verfuegbar |
| 0x9528 | Viva: MPEG4 file player nicht verfuegbar |
| 0x9529 | Viva: Fehler bei der Spracherkennung |
| 0x952A | Viva: Fehler bei der Spracherzeugung |
| 0x952B | Viva: Fehler beim Erzeugen des SampleRate Converters |
| 0x952C | Viva: Fehler bei der Spracherverarbeitung |
| 0x952D | Viva: Fehler in der Synthesiser Engine |
| 0x952E | Viva: Fehler beim allocieren des Synthesisers |
| 0x952F | Viva: Fehler beim freigeben des Synthesisers |
| 0x9530 | Viva: Fehler mit Java MultiMedia Framework |
| 0x9531 | Viva: Fehler mit dem Sprach-Synthesiser |
| 0x9532 | Viva: Nativer MPEG4-Decoder kann nicht angesprochen werden |
| 0x9533 | Viva: Nativer MPEG4-Encoder kann nicht angesprochen werden |
| 0x9534 | Viva: Nativer MPEG4-AudioMultiplexer kann nicht angesprochen werden |
| 0x9535 | Viva: Nativer MPEG4-Coder kann keinen Speicher allocieren |
| 0x9536 | Viva: Nativer MPEG4-Coder hat Korrupte Eingabedaten empfangen |
| 0x9540 | Kein VoiceMemo service Recorder gefunden. |
| 0x9541 | Registry setting konnten nicht gelesen werden. |
| 0x9542 | Fehler 0x9542 |
| 0x9543 | Datenbank konnte nicht gespeichert werden |
| 0x9544 | Kein Speicher Service Verfuegbar |
| 0x9545 | Audio Manager Error |
| 0x9546 | Exception der AudioMgrFactory abgefangen |
| 0x9547 | Initialisierung des MPEG4-Encoders fehlgeschlagen |
| 0x9561 | SAM: Verbindung zur Sprachvorverarbeitung konnte nicht erstellt werden |
| 0x9562 | SAM: Generischer Dialog Manager konnte nicht geladen werden |
| 0x9563 | SAM: Das PrompterFile konnte nicht geleden werden |
| 0x9564 | SAM: keine Verbindung zum Adressbuch |
| 0x9565 | SAM: Verbindung zur Spracherkennung konnte nicht erstellt werden |
| 0x9566 | SAM: die Spracherkennung konnte nicht gestartet werden |
| 0x9567 | SAM: Verbindung zum SALSA Adressbuch konnte nicht erstellt werden |
| 0x9568 | SAM: Fehler Adressbuch Modul |
| 0x9569 | SAM: Daten koennen nicht im Flash gespeichert werden |
| 0x956A | SAM: Fehler in der Spracherkennung |
| 0x956B | SAM: Fehler im Prompter Modul |
| 0x956C | SAM: Fehler im Generischen Dialog Manager (GDM) |
| 0x956D | SAM: Der Sprach-Application Manager (SAM) konnte nicht gestartet werden |
| 0x956E | SAM: Der Sprachservice konnte nicht registriert werden |
| 0x956F | SAM: Verbindung zum MPEG4 Coder konnte nicht erstellt werden |
| 0x9570 | SAM: Fehler im der Texterkennung |
| 0x9580 | HIP: Beim Startup ungueliges BBRAM gefunden |
| 0x9581 | HIP: Checksum Fehler bei ROM test (obsolete) |
| 0x9582 | HIP: Fehler beim Senden einer Nachricht |
| 0x9583 | HIP: Fehler beim Empfang einer Nachricht |
| 0x9584 | HIP: unbekanntes Fatal Event Fehler empfangen |
| 0x9585 | HIP: unangeforderte Nachricht erhalten |
| 0x9586 | HIP: Programmier Fehler HIP-Treiber |
| 0x9587 | HIP: Grosse oder haeufige Positionsspruenge |
| 0x9588 | HIP: Ein Thread konte nicht gestartet werden |
| 0x9589 | Fehler 0x9589 |
| 0x958A | HIP Treiber: Fehler beim Zugriff auf den seriellen Port |
| 0x958B | HIP Treiber: Versuch zum Wiederaufbau der Verb. zu seriellem Port |
| 0x958C | HIP Treiber: Fehler beim Zugriff auf java Ptimer |
| 0x958D | HIP Treiber: Keine serielle Verbindung zu HIP-Modul |
| 0x958E | HIP Treiber: Interner Zustandswechsel |
| 0x958F | Fehler 0x958F |
| 0x9590 | HIP Treiber: Keine Antwort auf Anforderung zur Baudraten Reduzierung |
| 0x9591 | HIP Module antwortet nicht auf Statusanfrage |
| 0x9592 | HIP Module antwortet mit Fehler Code |
| 0x9593 | HIP Treiber: Weder ACK noch NACK als Antwort empfangen |
| 0x9594 | HIP Treiber: Unerwartete Antwort auf Status Anfrage: +toName(result) |
| 0x9595 | HIP Module Kommuniziert in keinem bekannten Protokoll |
| 0x9596 | Keine Verbindung zu HIP Module fuer mehr als 10 sec |
| 0x9597 | HardwareId des HIP Moduls hat unbekanntes Format |
| 0x9598 | Die neu installierte HIP-Firmware can nicht auf dem FileSystem geloescht werden |
| 0x9599 | HIP: Unbekanntes Event empfangen |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00000000 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9508 | 20 | 21 | - | - |
| 0x9509 | 20 | 21 | - | - |
| 0x950A | 20 | 21 | - | - |
| 0x950B | 20 | 21 | - | - |
| 0x950D | 20 | 21 | - | - |
| 0x950E | 20 | 21 | - | - |
| 0x9520 | 20 | 21 | - | - |
| 0x9521 | 20 | 21 | - | - |
| 0x9522 | 20 | 21 | - | - |
| 0x9523 | 20 | 21 | - | - |
| 0x9524 | 20 | 21 | - | - |
| 0x9525 | 20 | 21 | - | - |
| 0x9526 | 20 | 21 | - | - |
| 0x9527 | 20 | 21 | - | - |
| 0x9528 | 20 | 21 | - | - |
| 0x9529 | 20 | 21 | - | - |
| 0x952A | 20 | 21 | - | - |
| 0x952B | 20 | 21 | - | - |
| 0x952C | 20 | 21 | - | - |
| 0x952D | 20 | 21 | - | - |
| 0x952E | 20 | 21 | - | - |
| 0x952F | 20 | 21 | - | - |
| 0x9540 | 20 | 21 | - | - |
| 0x9541 | 20 | 21 | - | - |
| 0x9542 | 20 | 21 | - | - |
| 0x9543 | 20 | 21 | - | - |
| 0x9544 | 20 | 21 | - | - |
| 0x9545 | 20 | 21 | - | - |
| 0x9546 | 20 | 21 | - | - |
| 0x9547 | 20 | 21 | - | - |
| 0x9580 | 20 | 21 | - | - |
| 0x9581 | 20 | 21 | - | - |
| 0x9582 | 20 | 21 | - | - |
| 0x9583 | 20 | 21 | - | - |
| 0x9584 | 20 | 21 | - | - |
| 0x9585 | 20 | 21 | - | - |
| 0x9586 | 20 | 21 | - | - |
| 0x9587 | 20 | 21 | - | - |
| 0x9588 | 20 | 21 | - | - |
| 0x9589 | 20 | 21 | - | - |
| 0x958A | 20 | 21 | - | - |
| 0x958B | 20 | 21 | - | - |
| 0x958C | 20 | 21 | - | - |
| 0x958D | 20 | 21 | - | - |
| 0x958E | 20 | 21 | - | - |
| 0x958F | 20 | 21 | - | - |
| 0x9590 | 20 | 21 | - | - |
| 0x9591 | 20 | 21 | - | - |
| 0x9592 | 20 | 21 | - | - |
| 0x9593 | 20 | 21 | - | - |
| 0x9594 | 20 | 21 | - | - |
| 0x9595 | 20 | 21 | - | - |
| 0x9596 | 20 | 21 | - | - |
| 0x9597 | 20 | 21 | - | - |
| 0x9598 | 20 | 21 | - | - |
| default | 20 | 21 | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VDO-Error | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 21 | Datenlaenge | Hex | - | unsigned char | - | 1 | 1 | 0 |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxxx | 0 | -- |

### TESTERGEBNISSE

| TESTERG_NR | TESTERG_TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft - Nummer  |
| 0x7F | Test abgebrochen |
| 0x81 | Test beendet mit Fehler  |
| 0xFF | Test beendet |

### PROTVERSIONTABLE

| WERT | PROT_VERSION |
| --- | --- |
| 0x00FA | Standard |
| 0x037A | XXL |
| 0xXY | unknown |

### HIPDRIVERSTATETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | HIP-Treiber: OK |
| 0x01 | HIP-Treiber: Daten nicht abrufbar |
| 0xXY | nicht definiert |

### ONLINESTATETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Online-Status OK |
| 0x01 | Daten nicht abrufbar |
| 0xXY | nicht definiert |

### HIPSWLERRORTABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x04158010 | keine Verbindung zu HIP Modul |
| 0x0415801B | Die zu ladende Datei konnte nicht geoeffnet werden oder existiert nicht |
| 0x0415801C | Exception beim SWL aber kein Fehler gespeichert |
| 0x04158002 | Beim Laden der SW trat ein Fehler auf |
| 0x04158017 | Die Software ist nicht kompatibel zum HIP-Modul |
| 0xXY | nicht definiert |

### HIPSWLTABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | HIP SW-Laden laeuft |
| 0x02 | HIP SW-Laden erfolgreich beendet |
| 0x03 | HIP SW-Laden fehlgeschlagen |
| 0xXY | nicht definiert |

### HIPRESETTABLE

| WERT | RESET_MODE |
| --- | --- |
| 0x07 | ResetClear |
| 0x09 | ResetSave |
| 0xXY | nicht definiert |

### TRACKINGSTATE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Search the Sky |
| 0x01 | Tracking |
| 0x02 | 2D Positionierung |
| 0x03 | 3D Positionierung |
| 0xXY | nicht definiert |

### ALMANACHSTATE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Kein Almanach |
| 0x01 | Almanach OK |
| 0xXY | nicht definiert |

### GPSANTENNASTATE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Verbunden |
| 0x01 | Nicht verbunden |
| 0x02 | Kurzschluss |
| 0xXY | nicht definiert |

### GANGWAHL

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Rueckwaertsgang |
| 0x01 | Vorwaertsgang oder Leerlauf |
| 0xXY | nicht definiert |

### AUDIOSYSTEMTABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | STEREO |
| 0x01 | HIFI |
| 0x02 | TOP-HIFI |
| 0xXY | nicht definiert |

### AUDIOSOURCETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x03 | AUX |
| 0x04 | CDPlayer |
| 0x05 | CDC |
| 0x06 | Radio |
| 0x07 | MDPlayer |
| 0x08 | SDARS |
| 0x09 | TV |
| 0x0A | DVDPlayer |
| 0x0B | RadioTP |
| 0x0C | MP3 |
| 0xXY | nicht definiert |

### TAUDIOVOLUME

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Mute |
| 0x0F | Inkrement 15 |
| 0x10 | Inkrement 16 |
| 0x12 | Inkrement 18 |
| 0x14 | Inkrement 20 |
| 0x16 | Inkrement 22 |
| 0x18 | Inkrement 24 |
| 0x1A | Inkrement 26 |
| 0x1C | Inkrement 28 |
| 0x1E | Inkrement 30 |
| 0x20 | Inkrement 32 |
| 0x22 | Inkrement 34 |
| 0x24 | Inkrement 36 |
| 0x26 | Inkrement 38 |
| 0x28 | Inkrement 40 |
| 0x2A | Inkrement 42 |
| 0x2C | Inkrement 44 |
| 0x2E | Inkrement 46 |
| 0x30 | Inkrement 48 |
| 0x32 | Inkrement 50 |
| 0x34 | Inkrement 52 |
| 0x36 | Inkrement 54 |
| 0x38 | Inkrement 56 |
| 0x3A | Inkrement 58 |
| 0x3C | Inkrement 60 |
| 0x3E | Inkrement 62 |
| 0x3F | Maximal |
| 0xXY | Nicht definiert |

### TENTSOURCE

| MASKE | TEXT |
| --- | --- |
| 0x00 | next |
| 0x01 | FM |
| 0x02 | AM |
| 0x03 | SCD |
| 0x04 | CDC |
| 0x05 | MD |
| 0x06 | WB |
| 0x07 | SDARS |
| 0x08 | IBOC |
| 0x09 | AUX |
| 0x0A | DVD |
| 0x0B | TV |
| 0x0C | VIDEOTXT |
| 0x0D | AV-AUX |
| 0x0E | DAB |
| 0xFF | Entertainmentsource not available |
