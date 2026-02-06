# KBM_60.prg

## General

|  |  |
| --- | --- |
| File | KBM_60.prg |
| Type | PRG |
| Jobs | 79 |
| Tables | 21 |
| Origin | BMW EE-51 Juergen Herter |
| Revision | 2.03 |
| Author | Boris Palamari/Florian Tutsch Siemens SV C CE CS6 SW |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Karosserie Basis Modul |  |  |
| ORIGIN | string | BMW EE-51 Juergen Herter |  |  |
| REVISION | string | 2.03 |  |  |
| AUTHOR | string | Boris Palamari/Florian Tutsch Siemens SV C CE CS6 SW |  |  |
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

### LESEN_DIGITAL_ARG

Auslesen der Stati von digitale Signale KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerLesen NAME TEXT |

### LESEN_ANALOG_ARG

Auslesen der Stati von analoge Signale KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table AnalogSignaleFuerLesen NAME EINHEIT TEXT |

### STEUERN_DIGITAL

Ansteuern von I/O DigitalSignal mit DIGITALWERT KWP2000: $30 InputOutputControlByLocalIdentifier Parameter: $07 ShortTermAdjustment Ohne DIGITALWERT->Return Control To ECU Parameter: $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerSchreiben NAME TEXT |
| DIGITALWERT | string | Werte: true, false, on, off,... table DigitalArgument TEXT Achtung: Fehlt das Argument DIGITALWERT so wird die Kontrolle ueber Input/Output der ECU zurueckgegeben! |

### CFL_INITIALIZATION

Initialisiert Fentser lernen KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DOORNUM | int | Werte: 0=Left door, 1=Right door, 2=both doors ======> Byte0 |

### CFL_INITIALIZATION_DELAY

Initialisiert Fentser lernen KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DOORNUM | int | Werte: 0=Left door, 1=Right door, 2=both doors |
| PAUSE | int | Werte: 0,1 |

### CFL_INVALID

Initialisiert Fentser lernen KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DOORNUM | int | Werte: 0=Left door, 1=Right door, 2=both doors ======> Byte0 |

### CFL_150N

Initialisiert Fentser lernen KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| V150N | int | Werte: 0=loeschen, 1=setzen |

### STATUS_CFL_NAECHSTE_150N_INIT

Lesen ob Fenstern gelernt sind KWP2000: $31 StartRoutineByLID $20 $70 mcfldb_GetNextInit150N

_No arguments._

### IL_CONTROL

Initialisiert IL Control KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $21 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LIGHTCOMMAND | int | Werte: 1=OFF_NO_FADE 2=OFF_FADE 3=ON_NO_FADE 4=ON_FADE ======> Byte0 |

### WIPER_CONTROL

Initialisiert Wiper Control KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $21 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WIPERCOMMAND | int | Werte: 0-10 ======> Byte0 |

### CDL_CONTROL

Central Door Locking Control KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $23 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COMPONENT | int | Werte: 0x10=RD 0x20=TR 0x30=SCA 0x40=RW 0x50=TC ======> Byte0 |
| ACTION | int | Werte: 1=RELEASE 2=OPEN 3=CLOSE 4=UNLOCK 5=LOCK 6=SAVE ======> Byte1 |

### MK_CONTROL

Central Door Locking Control KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $23 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ACTION | int | Werte: 4=UNLOCK 5=LOCK ======> Byte1 |

### STATUS_INPUT_DIGITAL_KBM

All Inputs Read KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=0x01 $01 ReportCurrentState Modus   : Default

_No arguments._

### STATUS_OUTPUT_DIGITAL_KBM

All Inputs Read KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=0x01 $02 ReportCurrentState Modus   : Default

_No arguments._

### STATUS_INPUT_ANALOG_KBM

Auslesen der Stati von analoge Signale KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=0x03 Parameter: $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_OUT_WISH_MOT_1_2

All Inputs Read KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=0x01 $03 ReportCurrentState Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_MOT2 | int | Werte: 0=OFF 1=ON ======> Byte0 |
| STEUERN_MOT1 | int | Werte: 0=OFF 1=ON ======> Byte0 |

### STATUS_FENSTERHEBER

Lesen ob Fenstern gelernt sind KWP2000: $21 ReadDataByLID $50 Status Fensterheber - ob init sind

_No arguments._

### STATUS_CFL_LOESCHEN

Lesen ob Fenstern gelernt sind KWP2000: $31 StartRoutineByLID $20 $40 mcfldb_GetEraseFlags

_No arguments._

### STATUS_CFL_150N

Lesen ob Fenstern gelernt sind KWP2000: $31 StartRoutineByLID $20 $50 mcfldb_GetLastInit150N

_No arguments._

### STEUERN_LOESCHEN_DENORM_REASON

Lesen ob Fenstern gelernt sind KWP2000: $31 StartRoutineByLID $20 $80 mcfldb_ClearDenormQueue

_No arguments._

### STATUS_DENORM_REASON

Lesen ob Fenstern gelernt sind KWP2000: $31 StartRoutineByLID $20 $90 mcfldb_GetDenormCount KWP2000: $31 StartRoutineByLID $20 $91 mcfldb_GetDenormData

_No arguments._

### STATUS_CFL_INITIALISIERUNG

Lesen ob Fenstern gelernt sind KWP2000: $21 ReadDataByLID $50 Status Fensterheber - ob init sind

_No arguments._

### STATUS_FENSTERHEBER_NEU

Lesen ob Fenstern gelernt sind KWP2000: $21 ReadDataByLID $50 Status Fensterheber - ob init sind $51 Status Fensterheber FTH $52 Status Fensterheber BFTH

_No arguments._

### SDIAG

Universaler Diagnosebefehl Speziell fuer Tools SDIAG vom SIEMENS VDO Regensburg entwickelt KWP2000: $XX Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Der Binaerbuffer hat folgenden Aufbau Byte 0              : SID Byte 1              : Daten |

### STATUS_ICT_BYTE

Internal Circuit Test Byte (Siemens Data) KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0E Modus   : Default

_No arguments._

### STEUERN_ICT_BYTE

Internal Circuit Byte Schreiben  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $0E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ICT_BYTE | unsigned char | ======> Byte 0 |

### AENDERUNG_CFL_BEREICH

Aendern Block MG_PARAMS (offset 79)  KWP2000: $1A ReadECUIdentification LocalIdentifier $7F KWP2000: $3D WriteDataByAddres Modus  : Default

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
| 0xE584 | K_CAN_KURZSCHLUSS |
| 0xE587 | CAN_INAKTIV |
| 0xE5C3 | CAN_NM_SEND_ERROR |
| 0xA409 | KBM_UNTERSPANNUNG |
| 0xA40B | PROG_FLASH_CRC_FEHLER |
| 0xA40D | EEPROM_WRITE_FEHLER |
| 0xA410 | KURZSCHLUSS_IL |
| 0xA411 | KURZSCHLUSS_VA |
| 0xA418 | KEIN_HALL_A_PULS_FH_BFTH |
| 0xA419 | KEIN_HALL_B_PULS_FH_BFTH |
| 0xA41A | SPANNUNGS_FEHLER_FH_BFTH |
| 0xA41B | STROM_FEHLER_FH_BFTH |
| 0xA41C | RELAIS_KLEBER_FH_BFTH |
| 0xA41D | RELAIS_TOT_FH_BFTH |
| 0xA41E | POSITION_FEHLER_FH_BFTH |
| 0xA41F | MOTOR_FEHLER_FH_BFTH |
| 0xA420 | MECHANIK_FEHLER_FH_BFTH |
| 0xA421 | CAN_TEMP_FEHLER_FH_BFTH |
| 0xA422 | EKS_EE_ERROR_FH_BFTH |
| 0xA423 | MOTOR_HEISS_FH_BFTH |
| 0xA424 | BLOCK_FH_BFTH |
| 0xA428 | FRONTWISCHER_BLOCKIERT |
| 0xA429 | RLS_AUSFALL |
| 0xA42A | HECKWISCHER_BLOCKIERT |
| 0xA430 | SCA_CONTACT_ERROR_SCAOPEN |
| 0xA431 | SCA_CONTACT_ERROR_SCA_CLOSE |
| 0xA432 | SCA_CONTROL_ERROR_ON |
| 0xA433 | SCA_CONTROL_ERROR_OFF |
| 0xA434 | SCA_DIAGNOSE_ERROR |
| 0xA435 | RD_UNLOCK_NOT_ACTIVE |
| 0xA436 | RD_UNLOCK_ACTIVE |
| 0xA437 | RD_LOCK_NOT_ACTIVE |
| 0xA438 | RD_LOCK_ACTIVE |
| 0xA439 | RD_SAVE_NOT_ACTIVE |
| 0xA43A | RD_SAVE_ACTIVE |
| 0xA43B | TR_RELEASE_NOT_ACTIVE |
| 0xA43C | TR_RELEASE_ACTIVE |
| 0xA43D | TR_RELEASE_EXTSW_STICK |
| 0xA43E | AL_PIN72_ERROR |
| 0xA43F | AL_PIN68_ERROR |
| 0xA440 | AL_PIN72_INVALID |
| 0xA441 | AL_PIN68_INVALID |
| 0xA442 | AL_RW_CONTROL_ERROR_ON |
| 0xA443 | RW_CONTROL_ERROR_OFF |
| 0xA444 | AL_RW_DIAGNOSIS_ERROR |
| 0xA447 | ENERGIESPARMODE_AKTIV |
| 0xA448 | KEIN_HALL_A_PULS_FH_FTH |
| 0xA449 | KEIN_HALL_B_PULS_FH_FTH |
| 0xA44A | SPANNUNGS_FEHLER_FH_FTH |
| 0xA44B | STROM_FEHLER_FH_FTH |
| 0xA44C | REALAIS_KLEBER_FH_FTH |
| 0xA44D | RELAIS_TOT_FH_FTH |
| 0xA44E | POSITION_FEHLER_FH_FTH |
| 0xA44F | MOTOR_FEHLER_FH_FTH |
| 0xA450 | MECHANIK_FEHLER_FH_FTH |
| 0xA451 | CAN_TEMP_FEHLER_FH_FTH |
| 0xA452 | EKS_EE_ERROR_FH_FTH |
| 0xA453 | MOTOR_HEISS_FH_FTH |
| 0xA454 | BLOCK_FH_FTH |
| 0xA455 | HARD_DOOR_FH_FTH |
| 0xA456 | HARD_DOOR_FH_BFTH |
| 0xA457 | AL_TCCONTROLERROR_ON |
| 0xA458 | AL_TCCONTROLERROR_OFF |
| 0xA459 | CFL_OVERFLOW_FH_FTH |
| 0xA460 | CFL_OVERFLOW_FH_BFTH |
| 0xA461 | WIPER_HANDLE_DEFECT |
| 0xA462 | FWP_ERROR |
| 0xA463 | RWP_ERROR |
| 0xA468 | RW_WIPER_ERROR |
| 0xA469 | HLW_PUMP_ERROR |
| 0xA46A | AL_RWRELEASEEXTSW_STICK |
| 0xA46B | RW_WIPER_SC_TO_GND |
| 0xA46C | HLW_PUMP_SC_TO_GND |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | FH_FTH_BEWEGUNGSFEHLER |
| 0x9309 | FH_BFTH_BEWEGUNGSFEHLER |
| 0x930B | FH_FTH_PANIKMODUS |
| 0x930C | FH_BFTH_PANIKMODUS |
| 0x930D | FH_BFTH_CAN_TEMPERATUR_FEHLER |
| 0x930E | FH_BFTH_MOTOR_HEISS |
| 0x930F | FH_BFTH_BLOCK |
| 0x9310 | FH_FTH_CAN_TEMPERATURFEHLER |
| 0x9311 | FH_FTH_HEISSERMOTOR |
| 0x9312 | FH_FTH_BLOCK |
| 0x9315 | FH_FTH_HOHERREIBWERT |
| 0x9316 | FH_BFTH_HOHERREIBWERT |
| 0x9317 | FH_FTH_EINQUETSCHUNG |
| 0x9318 | FH_BFTH_EINQUETSCHUNG |
| 0x9319 | STARTWITHOUTNORMING_FTH |
| 0x931A | RESET_WEIL_PDN |
| 0x931B | RESET_WEIL_WD |
| 0x931C | RESET_WEIL_OSC |
| 0x931D | RESET_WEIL_TRAP |
| 0x931E | RESET_WEIL_SWI |
| 0x931F | STARTWITHOUTNORMING_BFTH |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IODIGITALSIGNALEFUERLESEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x10 | S_FH_FTH_AUF | FH-Schalter 1 Fahrertuere hinten |
| 0x11 | S_FH_FTH_ZU | FH-Schalter 2 Fahrertuere hinten |
| 0x12 | S_FH_BTH_AUF | FH-Schalter 1 Beifahrertuere hinten |
| 0x13 | S_FH_BTH_ZU | FH-Schalter 2 Beifahrertuere hinten |
| 0x14 | S_RSK_WISCHER | Rueckstellkontakt Wischer (Schalter) |
| 0x15 | S_IL | Innenlicht Taster |
| 0x16 | S_HKL | Taster Heckklappe oeffnen |
| 0x17 | IN_TK_FTH | ZV Hallsensor Drehfalle (Tuerkontakt) Fahrertuer hinten |
| 0x18 | IN_TK_BFTH | ZV Hallsensor Drehfalle (Tuerkontakt) Beifahrertuer hinten |
| 0x19 | S_HKLK | Heckklappenkontakt |
| 0x1A | S_HSK | Hall Sensor Heckscheibenkontakt |
| 0x1B | S_SCA_HK | Schalter SCA Heck oder Heckscheibe oeffnen (Touring) |
| 0x1C | S_DWA_HKLK | Diebstahlwarnanlage Heckklappenkontakt |
| 0x1D | S_RSK_HKWISCHER | Rueckstellkontakt Heckwischer |
| 0x1E | S_HOTEL | Schalter Hotelstellung |
| 0x1F | DI_KL15 | Klemme 15 |
| 0x50 | OUT_FH_MOT_FTH_AUF | OUT_FH_MOT_FTH_AUF |
| 0x51 | OUT_FH_MOT_FTH_ZU | OUT_FH_MOT_FTH_ZU |
| 0x52 | OUT_FH_MOT_BTH_AUF | OUT_FH_MOT_BTH_AUF |
| 0x53 | OUT_FH_MOT_BTH_ZU | OUT_FH_MOT_BTH_ZU |
| 0x54 | OUT_FH_BTH_HALL | Fensterheber Hall BTH |
| 0x55 | OUT_FH_FTH_HALL | Fensterheber Hall FTH |
| 0x56 | OUT_KL30_GESCH1 | Status Klemme 30 geschalten 1 |
| 0x57 | OUT_KL30_GESCH2 | Status Klemme 30 geschalten 2 |
| 0x58 | OUT_LADERAUM | Laderaumabdeckung |
| 0x59 | OUT_WISCH_MOT1 | Status Wischerrelais 1 |
| 0x5A | OUT_WISCH_MOT2 | Status Wischerrelais 2 |
| 0x5B | OUT_ZV_MOT_HS | Oeffnen Heckscheibe |
| 0x5C | OUT_WP_MOT | Status Wischerpumpe WP |
| 0x5D | OUT_ZS_MOT | OUT_ZS_MOT |
| 0x5E | OUT_VR_MOT | OUT_VR_MOT |
| 0x5F | OUT_ER_MOT | OUT_ER_MOT |
| 0x60 | OUT_ZV_MOT_HKL | Status ZV_HKL |
| 0x61 | OUT_HK_WISCH | Status HECK-WI |
| 0x62 | OUT_HKWP_MOT | Status WP-HECK |
| 0x63 | OUT_SRA | Status SRA |
| 0x64 | OUT_SCA | Status SCA |

### IODIGITALSIGNALEFUERSCHREIBEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x10 | S_FH_FTH_AUF | FH-Schalter 1 Fahrertuere hinten |
| 0x11 | S_FH_FTH_ZU | FH-Schalter 2 Fahrertuere hinten |
| 0x12 | S_FH_BTH_AUF | FH-Schalter 1 Beifahrertuere hinten |
| 0x13 | S_FH_BTH_ZU | FH-Schalter 2 Beifahrertuere hinten |
| 0x14 | S_RSK_WISCHER | Rueckstellkontakt Wischer (Schalter) |
| 0x15 | S_IL | Innenlicht Taster |
| 0x16 | S_HKL | Taster Heckklappe oeffnen |
| 0x17 | IN_TK_FTH | ZV Hallsensor Drehfalle (Tuerkontakt) Fahrertuer hinten |
| 0x18 | IN_TK_BFTH | ZV Hallsensor Drehfalle (Tuerkontakt) Beifahrertuer hinten |
| 0x19 | S_HKLK | Heckklappenkontakt |
| 0x1A | S_HSK | Hall Sensor Heckscheibenkontakt |
| 0x1B | S_SCA_HK | Schalter SCA Heck oder Heckscheibe oeffnen (Touring) |
| 0x1C | IN_DWA_HKLK | Diebstahlwarnanlage Heckklappenkontakt |
| 0x50 | OUT_FH_MOT_FTH_AUF | OUT_FH_MOT_FTH_AUF |
| 0x51 | OUT_FH_MOT_FTH_ZU | OUT_FH_MOT_FTH_ZU |
| 0x52 | OUT_FH_MOT_BTH_AUF | OUT_FH_MOT_BTH_AUF |
| 0x53 | OUT_FH_MOT_BTH_ZU | OUT_FH_MOT_BTH_ZU |
| 0x54 | OUT_FH_BTH_HALL | Fensterheber Hall BTH |
| 0x55 | OUT_FH_FTH_HALL | Fensterheber Hall FTH |
| 0x56 | OUT_KL30_GESCH1 | Status Klemme 30 geschalten 1 |
| 0x57 | OUT_KL30_GESCH2 | Status Klemme 30 geschalten 2 |
| 0x58 | OUT_LADERAUM | Laderaumabdeckung |
| 0x59 | OUT_WISCH_MOT1 | Status Wischerrelais 1 |
| 0x5A | OUT_WISCH_MOT2 | Status Wischerrelais 2 |
| 0x5B | OUT_ZV_MOT_HS | Oeffnen Heckscheibe |
| 0x5C | OUT_WP_MOT | Status Wischerpumpe WP |
| 0x5D | OUT_ZS_MOT | OUT_ZS_MOT |
| 0x5E | OUT_VR_MOT | OUT_VR_MOT |
| 0x5F | OUT_ER_MOT | OUT_ER_MOT |
| 0x60 | OUT_ZV_MOT_HKL | Status ZV_HKL |
| 0x61 | OUT_HK_WISCH | Status HECK-WI |
| 0x62 | OUT_HKWP_MOT | Status WP-HECK |
| 0x63 | OUT_SRA | Status SRA |
| 0x64 | OUT_SCA | Status SCA |

### ANALOGSIGNALEFUERLESEN

| IOLI | NAME | EINHEIT | MUL | DIV | ADD | TEXT |
| --- | --- | --- | --- | --- | --- | --- |
| 0xA0 | VBAT | Volt | 236,25 | 8439.75 | 0 | VBAT KL30-E (+12V) |
| 0xA9 | IN_KL30_L1 | Volt | 236,25 | 8439.75 | 0 | IN_KL30_L1 |
| 0xA2 | IN_KL30_L2 | Volt | 236,25 | 8439.75 | 0 | IN_KL30_L2 |
| 0xA4 | IN_KL30_L3 | Volt | 236,25 | 8439.75 | 0 | IN_KL30_L3 |

### CFLINIT1

| FE | FETX |
| --- | --- |
| 0 | 00 OK |
| 1 | 01 FH SCHON GESTOPPT |
| 2 | 02 FH BOUNCE BACK AKTIV |
| 3 | 03 FH LIMP MODUS AKTIV |
| 4 | 04 FH PRESS SEAL MODUS AKTIV |
| 5 | 05 FH BEWEGUNG SCHON IN AKTION |
| 6 | 06 FH AKTION BEREITS AUSGEFUERT |
| 7 | 07 FH UNGUELTIGE ARGUMENTE |
| 8 | 08 FH POSITIONSWERT ZU NIEDRIG |
| 9 | 09 FH POSITIONSWERT ZU HOCH |
| 10 | 10 FH SW FEHLER NR. 1 |
| 11 | 11 FH SW FEHLER NR. 2 |
| 12 | 12 FH MOTOR ZU HEISS |
| 13 | 13 FH SW FEHLER NR. 3 |
| 14 | 14 FH DEAKTIVIERT |
| 15 | 15 FH NICHT GESTOPPT |
| 16 | 16 FH SW FEHLER NR. 4 |
| 17 | 17 FH HALL FEHLER |
| 18 | 18 FH EKS FEHLER |
| 19 | 19 FH SW FEHLER NR. 5 |
| 20 | 20 FH TEMPERATUR TELEGRAMM FEHLT |
| 21 | 21 FH SW FEHLER NR. 6 |
| 22 | 22 FH EKS PARAMERS NICHT GESCHRIEBEN |

### CFLINIT2

| FE | FETX |
| --- | --- |
| 0 | 0 OK |
| 1 | 1 FH_STATUS: KEINE MOTOR AKTION |
| 2 | 2 FH_STATUS: LIMP MODUS |
| 3 | 3 FH_STATUS: ANLAUFMODUS 200 MS |
| 4 | 4 FH_STATUS: EKS INITIALISIERUNG |
| 5 | 5 FH_STATUS: BOUNCE BACK |
| 6 | 6 FH_STATUS: SICHERHEITSWARTEZEIT 20 MS |
| 7 | 7 FH_STATUS: PRESSEAL MODUS |

### CFLINIT3

| FE | FETX |
| --- | --- |
| 0 | 00 OK |
| 1 | 01 FH IST INITIALISIERT |
| 2 | 02 FH LAEUFT |
| 3 | 03 FH POSITION ERREICHT |
| 4 | 04 FH LIMP POSITION ERREICHT |
| 5 | 05 FH BOUNCE BACK POSITION ERREICHT |
| 6 | 06 FH SCHLIESS-POSITION ERREICHT |
| 7 | 07 FH WIEDERHOLT-SCHLIESS-POSITION ERREICHT |
| 8 | 08 FH OFFEN-POSITION ERREICHT BEI FENSTER INITIALISIERUNG |
| 9 | 09 FH WIEDERHOLT-OFFEN-POSITION ERREICHT BEI FENSTER INITIALISIERUNG |
| 10 | 10 FH NICHT FUER E6x |
| 11 | 11 FH INITIALISIERUNG UNTERBROCHEN |
| 12 | 12 FH MOTOR ZU HEISS |
| 13 | 13 FH HALL A FEHLER |
| 14 | 14 FH HALL B FEHLER |
| 15 | 15 FH POSITION ZU NIEDRIG |
| 16 | 16 FH POSITION ZU HOCH |
| 17 | 17 FH MOTOR LAUF FALSCH |
| 18 | 18 FH BLOCKIERT IN EINE RICHTUNG |
| 19 | 19 FH BLOCKIERT IN BEIDE RICHTUNGEN |
| 20 | 20 FH HALL ODER MOTOR FEHLER |
| 21 | 21 FH EKS FEHLER BEI KRAFTBERECHNUNG |
| 22 | 22 FH TIMEOUT |
| 23 | 23 FH TIMEOUT BEI PRESS SEAL |
| 24 | 24 FH DEAKTIVIERT |
| 25 | 25 FH RANDBEDINGUNGEN FUER INITIALISIERUNG NICHT ERFUELLT |
| 26 | 26 FH UEBER- ODER UNTERSPANNUNG |
| 27 | 27 FH FEHLER BEI INITIALISIERUNG |
| 28 | 28 FH PANIC MODE UEBER 16 KM/H |
| 29 | 29 FH SCHLAF-ANFORDERUNG |
| 30 | 30 FH TMON FEHLER |
| 31 | 31 FH NICHT BEKANNTER FEHLER |
