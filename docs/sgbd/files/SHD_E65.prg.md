# SHD_E65.prg

## General

|  |  |
| --- | --- |
| File | SHD_E65.prg |
| Type | PRG |
| Jobs | 64 |
| Tables | 23 |
| Origin | BMW TI-430 Schnelle |
| Revision | 1.03 |
| Author | Karol Drienovsky Siemens AT BE AS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SHD E_65 |  |  |
| ORIGIN | string | BMW TI-430 Schnelle |  |  |
| REVISION | string | 1.03 |  |  |
| AUTHOR | string | Karol Drienovsky Siemens AT BE AS |  |  |
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

### STATUS_IODIGITAL

Auslesen der Stati von digitale Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerLesen NAME TEXT |

### STATUS_ANALOG

Auslesen der Stati von analoge Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table AnalogSignaleFuerLesen NAME EINHEIT TEXT |

### STEUERN_IODIGITAL

Ansteuern von I/O DigitalSignal mit DIGITALWERT KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Ohne DIGITALWERT->Return Control To ECU KWP2000: $30 InputOutputControlByLocalIdentifier $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerSchreiben NAME TEXT |
| DIGITALWERT | string | Werte: true, false, on, off,... table DigitalArgument TEXT Achtung: Ohne dem Arggumet DIGITALWERT wird die Kontrolle ueber den Input/Output der ECU zurueckgegeben! |

### STATUS_CFL

Auslesen der Stati von CFL KWP2000: $31 startRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | gewuenschte Funktion table Funktion_CFL CFL_FUNKTION TEXT |

### STEUERN_CFL

Steuern der CFL-modul KWP2000: $31 startRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | gewuenschte Funktion table Funktion_CFL CFL_FUNKTION TEXT |
| WERT | string | Funktionswert Werte in dezimal |

### RESET_AUTH

Löschen der signalbezogenen Authentisierung KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### DIAGNOSTIC_MOVE

Steuern den Motor KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| MOTOR_COMMAND | string | Befehl table Name_Motor_Command |
| SPEED | string | Geschwindigkeit Wert in dezimal, 10 < SPEED < 190 |

### ECU_RESET

Reset der ECU KWP2000: $11 EcuReset Modus  : Default

_No arguments._

### STATUS_SCHALTER

Shhalterzustand abfragen KWP2000: $21 ReadDatabyLocalIdentifier

_No arguments._

### STATUS_BATTERIESPANNUNG

Batteriespannung abfragen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### STATUS_MOTORTEMPERATUR

Motortemperatur abfragen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### AIF_DEL

Löschen des AIF Feldes auf Adresse 0x12 KWP 2000: $3D WriteMemoryByAddress Modus   : Default

_No arguments._

### READ_SERIAL

Siemens Seriennummer lesen

_No arguments._

### ZUSTANDS_WERTE_LESEN

Diverse Zustandswerte abfragen KWP2000: $31 startRoutineByLocalIdentifier

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
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA088 | Fehler Bedienschalter |
| 0xA089 | Fehler Dacheinheit SHD |
| 0xA08A | Fehler Dimmung |
| 0xA08B | Fehler Antrieb |
| 0xA08C | Fehler Normierung |
| 0xDA04 | Fehler K_CAN_LOW |
| 0xDA07 | Fehler CAN_Controller |
| 0xDA43 | Fehler Fehler_beim_Senden_NM_Botschaft - NUR FÜR ENTWICKLUNG RELEVANT |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Fehler Hallsensor A |
| 0x9309 | Fehler Motorbruecke |
| 0x930A | Fehler Motorbruecke kurzschluss |
| 0x930B | Fehler Motor |
| 0x930C | Fehler Kennlinie Heben |
| 0x930D | Fehler Versorgungsspannung unplausibel |
| 0x930E | Fehler Oszillator |
| 0x930F | Fehler Spannungsausfall |
| 0x9311 | Fehler Kennlinie Schieben |
| 0x9313 | Fehler Hallsensor B |
| 0x9314 | Fehler Kalibrierwerte ungültig |
| 0x9315 | Fehler Temperatursensor |
| 0x9316 | Fehler Motorklemmenspannung |
| 0x9317 | Fehler EEPROM Schreibfehler |
| 0x9318 | Fehler Checksumme SHD Konfiguration |
| 0x9319 | Fehler Watchdog |
| 0x931A | Fehler Manuelle Dach Bewegung |
| 0x931B | Fehler Aktivierung der SKB |
| 0x931C | Fehler Aktivierung des Panik Modes |
| 0x931D | Fehler Temperatur Monitor Abbruch |
| 0x931E | Fehler Opcode |
| 0x931F | Fehler Initialisierung |
| 0x9320 | Fehler Initialisierung abgebrochen |
| 0x9321 | Fehler Temperatur Monitor Startverhinderung |
| 0x9322 | Fehler Checksumme ECU Konfiguration |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IODIGITALSIGNALEFUERLESEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x10 | SWITCH0 | Schalter 0 |
| 0x11 | HALL_SOS_A_STATE | Zustand Hallsensor A SoS |
| 0x12 | HALL_SHD_B_STATE | Zustand Hallsensor B SHD |
| 0x13 | HALL_SHD_A_STATE | Zustand Hallsensor A SHD |
| 0x14 | MM_TXD_SENSE | Rueckmeldeleitung Strombegrenzung TxD SHD->SoS |
| 0x15 | RXCAN | Empfangsleitung CAN-Bus |
| 0x16 | MM_RXD | Empfangsleitung SoS->SHD |
| 0x17 | SWITCH1 | Schalter 1 |
| 0x18 | PWM0_STATE | Zustand der PWM0-Leitung |
| 0x19 | NERR0 | CAN-Bus Fehlersignal |
| 0x1A | SWITCH2 | Schalter 2 |
| 0x1B | HALL_SHD_A_IRQ | Interrupt Hallsensor A SHD |
| 0x1C | HALL_SHD_B_IRQ | Interrupt Hallsensor B SHD |
| 0x1D | HALL_SOS_A_IRQ | Interrupt Hallsensor A SoS |
| 0x1F | SENSE_DIM | Rueckmeldeleitung Strombegrenzung KL58g |
| 0x20 | SENSE_SOS | Rueckmeldeleitung Strombegrenzung Freigabe SoS |
| 0x50 | POWERMGT_UC | Strommanagement Uc |
| 0x51 | POWERMGT_SOS | Strommanagement SoS |
| 0x52 | POWERMGT_HOLD | Strommanagement Hold des Spannungsstabilisators |
| 0x53 | POWERMGT_HALLB0 | Strommanagement Hallsensor B0 |
| 0x54 | POWERMGT_TS | Strommanagement Temperatursensor |
| 0x55 | POWERMGT_HALLB1 | Strommanagement Hallsensor B1 |
| 0x56 | POWERMGT_VPF | Strommanagement programmierspannung |
| 0x57 | CANTX | Sendeleitung CAN-Bus |
| 0x58 | STB0 | Strobe des CAN-Bus Transceivers |
| 0x59 | EN0 | Enable des CAN-Bus Transceivers |
| 0x5A | MM_TXD | Sendeleitung SHD->SoS |
| 0x5B | POWERMGT_HALLB2 | Strommanagement Hallsensor B2 |
| 0x5C | POWERMGT_HALLB3 | Strommanagement Hallsensor B3 |
| 0x5D | POWERMGT_HALLA0 | Strommanagement Hallsensor A0 |
| 0x5E | POWERMGT_HALLA1 | Strommanagement Hallsensor A1 |
| 0x5F | POWERMGT_HALLA2 | Strommanagement Hallsensor A2 |
| 0x60 | POWERMGT_HALLA3 | Strommanagement Hallsensor A3 |
| 0x61 | POWERMGT_BRIDGE | Strommanagement Brueckentreiber |

### IODIGITALSIGNALEFUERSCHREIBEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
|  |  | Es sind keine Signale definiert, die gesteuert werden koennen! |
|  |  | Es sind keine Signale definiert, die gesteuert werden koennen! |

### ANALOGSIGNALEFUERLESEN

| IOLI | NAME | EINHEIT | MUL | DIV | ADD | TEXT |
| --- | --- | --- | --- | --- | --- | --- |
| 0xA0 | VMOT0 | Volt | 1 | 47.6 | 0 | Motorspannung 0 |
| 0xA1 | VMOT1 | Volt | 1 | 47.6 | 0 | Motorspannung 1 |
| 0xA2 | VBAT | Volt | 1 | 47.6 | 0 | Batteriespannung |
| 0xA3 | TEMP_SENS | ? | 1 | 1 | 0 | Temperatursensor |

### GERAET

| IOLI | NAME_GERAET | TEXT |
| --- | --- | --- |
| 0xFA | ECU | Steuergeraet |
| 0xFB | SHD | SchiebeHebeDach |
| 0xFC | SOS | SonnenSchutz |

### FUNKTION_CFL

| IOLI | CFL_FUNKTION | TEXT |
| --- | --- | --- |
|  |  | Status_cfl                         / Steuern_cfl |
| 0x0000 | AUTOINIT | Laeuft Autoinit?                   / Autoinit starten |
| 0x0001 | CFL_AVAILABLE | Steht CFL zu Verfuegung?           / -  |
| 0x0002 | KLEMME_R | Klemme R: Radio abfragen           / setzen |
| 0x0003 | KLEMME_15 | Klemme 15: Zuendung abfragen       / setzen |
| 0x0004 | KLEMME_50 | Klemme 50: Start abfragen          / setzen |
| 0x0005 | SPEED_VEHICLE | Fahrzeuggeschwindigkeit abfragen   / setzen |
| 0x0006 | VBAT | Batteriespannug abfragen |
| 0x0007 | AMBIENT_TEMP | Umgebungstemperatur abfragen |
| 0x0008 | AUTONORM | Normiert abfragen / Normierung ohne Lernen starten |
| 0x0009 | CLEAR_CAS_AUTH_KEY | CAS Authentisierungszustand abfragen/loeschen |
| 0x000A | FUNCTSTATE | FunctState abfragen |
| 0x000B | CHECKSUM | Flash Pruefsumme abfragen |
| 0x000C | CONF_CHECKSUM | Konfiguration Prüfsumme abfragen |
| 0x000D | PARAM_CHECKSUM | Parametersatz Prüfsumme abfragen |
| 0x000E | CODING_CHECKSUM | Kodirung Prüfsumme abfragen |
| 0x000F | CAL_CHECKSUM | Kalibrierung Prüfsumme abfragen |
| 0x0080 | CAL_CHECKSUM | Kalibrierwerte Pruefsumme Gueltigkeit abfragen |
| 0x0081 | CAL_VOLT_MUL | Kalibrierwert (*) Spannung abrfagen/ setzen |
| 0x0082 | CAL_VOLT_ADD | Kalibrierwert (+) Spannung abfragen/ setzen |
| 0x0083 | CAL_TEMP_MUL | Kalibrierwert (*) Umgebungst. abrf./ setzen |
| 0x0084 | CAL_TEMP_ADD | Kalibrierwert (+) Umgebungst. abfr./ setzen |
| 0x0100 | CONFIG_CHECKSUM_ECU | Konfigurationsdaten und Checksumme in EEPROM aktualisieren |
| 0x0102 | CHECK_IGNITIONK | Klemmenstatus             abfragen / setzen |
| 0x0103 | CHECK_IGNITIONC | CAS Freigabe              abfragen / setzen |
| 0x0104 | TEMP_SENSOR_ALLOWED | Benutzung des Temperatursensors abfr. /setzen |
| 0x0105 | CHECK_IGNITIONA | CAS Authentisierung Freigabe abfr. / setzen |
| 0x0106 | DIAGMOVE_KEY | Freigabe Links/Rechtslauf von Schalter abfragen/setzen |
| 0x0115 | POWERERR_LEN | Entprellzahl Unter/Ueberspannung abfr. / setzen |
| 0x0116 | MEASVBATLOW | Untere Spannugsmessfehlergraenze abfr. / setzen |
| 0x0117 | MEASVBATHIGH | Obere Spannungsmessfehlergraenze abfr. / setzen |
| 0x0118 | LOW_BAT_OFF | Spannungsausschaltschwelle   abfr. / setzen |
| 0x0119 | LOW_BAT_ON | Spannungseinschaltschwelle   abfr. / setzen |
| 0x011A | LOADDUMP_ON | Spannungseinschaltschwelle   abfr. / setzen |
| 0x011B | LOADDUMP_OFF | Spannungsausschaltschwelle   abfr. / setzen |
| 0x011D | LED_MIN | LED minimum               abfragen / setzen |
| 0x011E | LED_MAX | LED maximum               abfragen / setzen |
| 0x0140 | PREPANICSTARTTIME | Zeit fuer Pre-Panic Mode  abfragen / setzen |
| 0x0141 | PANICWAITTIME | Hoechste Wartezeit fuer Panic Mode abfr. / setzen |
| 0x0142 | NO_RAIN_INTENSITY | Regenintensitaet untere Grenzwert abfr./setzen |
| 0x0143 | RAIN_CLOSE_INTENSITY | Regenintensitaet obere Grenzwert abfr./setzen |
| 0x01FC | CLEAR_PARAM | Parametern loeschen/Richtigkeit der Pruefs. abfr. |
| 0x01FD | CLEAR_CALIB | Kalibrierdaten loeschen / Richtigkeit der Pruefsumme abfr. |
| 0x01FE | CLEAR_EEPROM | EEPROM loeschen (nur steuern_cfl) |
| 0x01FF | CLEAR_CONFIG | Konfigurationsdaten loeschen/Richtigkeit der Pruefs. abfr. |
| 0x0200 | STOP_MOVE | Motor moving abfragen              / Motor stoppen |
| 0x0201 | POSITION | Position auslesen (dezimal)        / Position anfahren |
| 0x0202 | NORMED | Normierung abfragen                / Normierung loeschen |
| 0x0203 | RF_VALID | Kennlinie Schieben gueltig?        / Kennlinie loeschen |
| 0x0204 | RF_VALID_TILT | Kennlinie Heben gueltig?           / Kennlinie loeschen |
| 0x0205 | STOP_REASON | Abbruchkriterium abfragen          / Stop Reason loeschen |
| 0x0206 | CFL_AVAILABLE | Schliesskraftbegrenzung funktionshaehig ? |
| 0x0207 | POS_MOUNT | Anlieferposition abfragen                      / anfahren |
| 0x0211 | RF_ADR | RF Speicheradresse abfragen |
| 0x0212 | RF_CHECKSUM | RF Pruefsumme abragen              / generieren |
| 0x0213 | RF_CHECKSUM_TILTED | RF fuer Hebebereich: Pruefsumme abfragen / generieren |
| 0x0221 | ACTPOS | Position auslesen                  / setzen |
| 0x0222 | ACTSPEED | Geschwindigkeit auslesen |
| 0x0223 | VDIFF | Motorklemmenspannung auslesen |
| 0x0224 | FORCELOWPASS | Kraft auslesen |
| 0x0225 | TEMPCOIL | Wicklungstemperatur auslesen |
| 0x0226 | TEMPROTOR | Rotortemperatur auslesen |
| 0x0227 | TEMPCASE | Gehaeusetemperatur auslesen |
| 0x0300 | CONFIG_CHECKSUM_SHD | Konfigurationsdaten und Checksumme in EEPROM aktualisieren |
| 0x0301 | POSITION_OPEN | Position Offen abfragen            / setzen |
| 0x0302 | POSITION_CLOSED | Position Geschlossen abfragen      / setzen |
| 0x0303 | POSITION_NORMED | Position Normiert abfragen         / setzen |
| 0x0304 | POSITION_100MM | Position 100mm abfragen            / setzen |
| 0x0305 | POSITION_DEFLECTOR | Position Windabweiser abfragen     / setzen |
| 0x0306 | POSITION_TILTED | Position Gehoben abfragen          / setzen |
| 0x0307 | QUARTER_TURN | Reversierlaenge bei Block abfragen / setzen |
| 0x0308 | TOLERANCE | Zielposition Tolerance abfragen    / setzen |
| 0x030A | POSITION_CLOUD | Position Ueberlauf fuer Schliessen abfr./setzen |
| 0x030B | SPEED_SEAL | Min. Geschw. fuer Soft Stop abfragen/setzen |
| 0x030C | SOFT_STOP_MUL | Multiplikator fuer Soft Stop abfr. / setzen |
| 0x030D | SOFT_STOP_OFFSET | Soft Stop Offset abfragen          / setzen |
| 0x030E | POS_SEAL | Position Seal abfragen                         / setzen |
| 0x0310 | CARSPEEDTHRESH | Geschwindigkeit RRD abfragen           / setzen |
| 0x0311 | RF_DISTANCE | Abstand CFL-bereich->Geschloss.    / setzen |
| 0x0312 | RF_DISTANCE_TILT | Abstand CFL-bereich Geh.->Geschlos./ setzen |
| 0x0313 | RF_LENGTH | Kennl.Schieben-laenge abfragen     / setzen |
| 0x0314 | RF_LENGTH_65N | Kennlinie65N-laenge abfragen       / setzen |
| 0x0315 | RF_LENGTH_TILT | Kennl.Heben-laenge abfragne        / setzen |
| 0x0316 | SPEED_20N | Geschwindigkeit 20N/mm abfragen    / setzen |
| 0x0317 | SPEED_65N | Geschwindigkeit 65N/mm abfragen    / setzen |
| 0x0318 | FORCE_OFFSET_START | Startwert Anlauf-Ausl.-Offs. abf.  / setzen |
| 0x0319 | FORCE_OFFSET_RESTART | Restartwert Anlauf-Ausl.-Offs. abf./ setzen |
| 0x031A | FORCE_THRESH | Ausloese-Offset abfragen           / setzen |
| 0x031B | FORCE_THRESH_TILT | Heben Ausloese-Offset abfragen     / setzen |
| 0x031D | TRACK_LIMIT_MAX | Startwert Tracking abfragen        / setzen |
| 0x031E | TRACK_LIMIT_MIN | Endwert Tracking abfragen          / setzen |
| 0x031F | TRACK_LIMIT_MIN_TILT | Endwert Tracking Heben abfragen    / setzen |
| 0x033B | RF_START_65N | RFstart65N abfragen                / setzen |
| 0x033D | SOFTSTART_RISE | Soft Start Ramp 1 [dV/dt] abfragen / setzen |
| 0x033E | SOFTSTART_VSTART_LOWT | Soft Start Anfangssp. kalt abfragen/ setzen |
| 0x033F | SOFTSTART_XTEMP | Soft Start kalte Grenztemp. abfragen/setzen |
| 0x0349 | TC_ROTOR_CASE | Therm. Kond. Rotor->Gehaeuse abfragen/setzen |
| 0x034A | TC_CASE_AMBIENT | Therm. Kond. Gehaeuse->Umgebung abf./setzen |
| 0x034B | QCASE | Thermische Kapazitaet Gehaeuse abfr./setzen |
| 0x034C | QROTOR | Thermische Kapazitaet Rotor abfr.  / setzen |
| 0x034D | SPEED_OPEN | Geschwindigkeit Oeffnen abfragen   / setzen |
| 0x0358 | QCOIL | Thermische Kapazitaet WIndung abfragen/setzen |
| 0x0359 | TC_COIL_ROTOR | Therm. Kond. Windung->Rotor abfragen/setzen |
| 0x035A | LENGTH_NO_STOP | Position ohne Stopp abfragen       / setzen |
| 0x035B | LENGTH_NO_STOP_TILT | Position ohne Stopp gehoben abfragen/setzen |
| 0x0360 | POWER_DISSIPATION_FACT | Waermedissipationsfaktor abfragen      / setzen |
| 0x0370 | PANIC_SREV | Panicmode Phase 1 Reversierlaenge abfr./setzen |
| 0x0371 | SPEED_OPEN_1 | Geschw. Oeffnen im Bereich 1 abfragen/setzen |
| 0x0372 | AREA_OPEN_1 | Grenzposition des Bereichs 1 abfragen/setzen |
| 0x0373 | SPEED_OPEN_2 | Geschw. Oeffnen im Bereich 1 abfragen/setzen |
| 0x0374 | AREA_OPEN_2 | Grenzposition des Bereichs 1 abfragen/setzen |
| 0x0375 | SPEED_OPEN_3 | Geschw. Oeffnen im Bereich 1 abfragen/setzen |
| 0x0376 | AREA_OPEN_3 | Grenzposition des Bereichs 1 abfragen/setzen |
| 0x0380 | MOTOR_SHORT_TIME | Erkennungszeit von Motorkurzschluss abfr./setzen |
| 0x038C | POSITION_5MM_TILT | 5 mm Weg in Hebebereich abfragen       / setzen |
| 0x038D | POSITION_0MM_TILT | Oeffnungspunkt Heben abfragen          / setzen |
| 0x038E | POSITION_GBLIMIT | Minimale Reversierziel in GB abfr. / setzen |
| 0x038F | POSITION_0MM | Oeffnungspunkt Schieben abfragen       / setzen |
| 0x03A3 | BLOCKTIME | Blockerkennungszeit       abfragen / setzen |
| 0x03A4 | SOFTSTART_VSTART_HIGHT | Soft Start Anfangssp. warm abfragen/ setzen |
| 0x03A5 | SOFTSTART_XTEMP_HIGH | Soft Start warme Grenztemp. abfragen/setzen |
| 0x0500 | CFL_ALLOWED | SKB erlaubt               abfragen / setzen |
| 0x0501 | ACTU_ALLOWED | Actualize erlaubt         abfragen / setzen |
| 0x0503 | RRD_ALLOWED | Ruettelerkennung erlaubt  abfragen / setzen |
| 0x0504 | PWM_ALLOWED | PWM erlaubt               abfragen / setzen |
| 0x0505 | TMON_ALLOWED | Temperaturmonitor         abfragen / setzen |
| 0x0506 | CLOUD_ALLOWED | Eine Richtung schliessen  abfragen / setzen |
| 0x0508 | LIMPHOME_ALLOWED | Notlauf erlaubt           abfragen / setzen |

### NAME_MOTOR_COMMAND

| CODE | COMMAND | TEXT |
| --- | --- | --- |
| 0 | STOP | Motor anhalten |
| 1 | OPEN | Bewegen richtung oeffnen |
| 2 | CLOSE | Bewegen richtung schliessen |

### SCHALTER_TEXT

| NR | TEXT |
| --- | --- |
| 0 | Keine Betaetigung |
| 1 | oeffnen Manuell |
| 2 | Schliessen Manuell |
| 3 | Unplausibel |
| 4 | Heben |
| 5 | oeffnen Automatisch |
| 6 | Schliessen Automatisch |
| 7 | Unplausibel |

### STOP_REASON

| STOP_REASON_NR | STOP_REASON_TEXT | TEXT |
| --- | --- | --- |
| 0 | NOT_STOPPED | Motor laeuft |
| 1 | POSITION_REACHED | Position erreicht |
| 2 | STOP_MOVE | Bewegung abgebrochen |
| 3 | STOP_MOVE_INSTANTLY | Bewegung abgebrochen |
| 4 | NORM | Normiert |
| 5 | RENORM | Renormiert |
| 6 | PINCHING | Einklemmen erkannt |
| 7 | BLOCKING | Blockieren erkannt |
| 8 | DOUBLE_BLOCK | doppeltes Blockieren erkannt |
| 9 | NO_MOVE | keine Bewegung |
| 10 | EXCEPTION | Ausnahme |
| 11 | SAFETY_TIMER | Sicherheitszeitueberlauf |
| 12 | OPPOSITE_DIRECTION | verkehrte Drehrichtung |
| 13 | INVALID_TARGET_POS | falsche Zielposition |
| 14 | INVALID_TARGET_POS_LOW | falsche Zielposition (zu niedrig) |
| 15 | INVALID_TARGET_POS_HIGH | falsche Zielposition (zu hoch) |
| 16 | WRONG_DIR_LIMPHOME | falsche Drehrichtung fuer Notlauf |
| 17 | WRONG_NR_VALUES | flasche Anzahl Elemente |
| 18 | FINALIZE_CANT_WRITE | Schreibzugriff verweigert |
| 19 | FIFO_OVERRUN | FIFO Ueberlauf |
| 20 | CFL_NUMERICAL_OV | Numerischer Ueberlauf |
| 21 | CANT_TILT | ungueltige Hebenaufforderung |
| 22 | POS_OPEN_LEARNED |  - nicht vorhanden - |
| 23 | STOP_MOVE_HIGH_TEMP | Motor zu warm |
| 24 | FET_BAD | Fehler in der FET-Bruecke |
| 25 | MOTOR_SHORT | Motorkurzschluss |
| 26 | STARTUP_FAILED | Start nicht gelungen |
| 27 | RESET | Reset |
| 28 | UNEXPECTER STOP | Unerwartetes Anhalten |
| 29 | HARDWARE_DOWN | Hardware nicht freigeschaltet |
| 30 | REINIT | Erneute Intializieunrg (nach Hardware Down |
