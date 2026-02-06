# cas_reset.prg

## General

|  |  |
| --- | --- |
| File | cas_reset.prg |
| Type | PRG |
| Jobs | 138 |
| Tables | 20 |
| Origin | Martin Kaltenbrunner BMW EE-52 |
| Revision | 0.35 |
| Author | Mikhail Vaisman/Werner Hoffmann/Johannes Lohberger Siemens AT BE AS CS6 SW |
| ECU Comment | Keine Bemerkung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAS E_65 |  |  |
| ORIGIN | string | Martin Kaltenbrunner BMW EE-52   |  |  |
| REVISION | string | 0.35 |  |  |
| AUTHOR | string | Mikhail Vaisman/Werner Hoffmann/Johannes Lohberger Siemens AT BE AS CS6 SW |  |  |
| COMMENT | string | Keine Bemerkung |  |  |
| PACKAGE | string | 1.01 |  |  |
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
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

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
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

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

### SG_VARIANTE_LESEN

Auslesen der SG-Variante auf Basis des Jobs Hardware Referenz lesen KWP2000: $22   ReadDataByCommonIdentifier $2502 HWREF oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### STATUS_CAS_DIAGNOSE

All Inputs Read KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=0x01 $01 ReportCurrentState Modus   : Default

_No arguments._

### STEUERN_CAS_DIAGNOSE

Schreibt 6 Byte "Digital Outputs" KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=$02 $07 ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| EWS_TOGGELN | unsigned char | Bereich 0/1 ======> Byte0, Bit0 |
| TXD_TOGGELN | unsigned char | Bereich 0/1 ======> Byte0, Bit1 |
| IN_ZAS_BLSDISC | unsigned char | Bereich 0/1 ======> Byte1, Bit0 |
| IN_EGS_PNDISC | unsigned char | Bereich 0/1 ======> Byte1, Bit1 |
| IN_VR_DISC | unsigned char | Bereich 0/1 ======> Byte1, Bit2 |
| IN_ER_DISC | unsigned char | Bereich 0/1 ======> Byte1, Bit3 |
| HKIT | unsigned char | Bereich 0/1 ======> Byte1, Bit4 |
| IN_MHK_ZUDISC | unsigned char | Bereich 0/1 ======> Byte1, Bit5 |
| IN_HTLSTLG_EINDISC | unsigned char | Bereich 0/1 ======> Byte1, Bit6 |
| IN_FB_MOTFERNSTARTDISC | unsigned char | Bereich 0/1 ======> Byte1, Bit7 |
| IN_RESERVE_1_DISC | unsigned char | Bereich 0/1 ======> Byte2, Bit0 |
| FBD_DIAG_FKT | unsigned char | Bereich 0-255 ======> Byte3 |
| FBD_DIAG_PRSLNR | unsigned char | Bereich 0-255 ======> Byte4 |
| RF_FELDSPULE_EIN | unsigned char | Bereich 0/1 ======> Byte5, Bit0 |
| SCI_TELEGRAMM_CLR | unsigned char | Bereich 0/1 ======> Byte5, Bit1 |

### STATUS_ISN

4 Byte des ISN KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $01 Modus   : Default

_No arguments._

### STATUS_MECHANISCHER_SCHLUESSELCODE

5 Byte des Mechanischer Schluesselcode KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $02 Modus   : Default

_No arguments._

### STATUS_SCHLUESSEL_FREQUENZ

Frequenz des Schluessels KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $03 Modus   : Default

_No arguments._

### STATUS_PROG_LOCATION_DATUM

Ort und Datum der ECU-Programmierung KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $04 Modus   : Default

_No arguments._

### STATUS_ZV_AUTHENTISIERUNG

aktueller Status "ZV-Authentisierung" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $05 Modus   : Default

_No arguments._

### STATUS_TRSP_INIT

aktueller Status "TRSP, Init-Kennung" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $06 Modus   : Default

_No arguments._

### STATUS_TRSP_FAHRZYKLUSZAEHLER

aktueller Status "TRSP, Fahrzykluszaehler" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $07 Modus   : Default

_No arguments._

### STATUS_CAS_INIT_KENNUNG

aktueller Status "CAS, Init-Kennung" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $08 Modus   : Default

_No arguments._

### STATUS_BDM_SPERREN

BDM-Sperren-Status Lesen KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $09 Modus   : Default

_No arguments._

### STATUS_DME_RINGBUFFER

aktueller Status "DME-RingBuffer" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0A Modus   : Default

_No arguments._

### STATUS_ZVFH_RINGBUFFER

aktueller Status "ZV/FH-Ringpuffer" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0B Modus   : Default

_No arguments._

### STATUS_FBD_TELEGRAMM

letztes FBD-Telegramm KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0C Modus   : Default

_No arguments._

### STATUS_PA_TELEGRAMM

letztes PA-Telegramm KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0D Modus   : Default

_No arguments._

### STATUS_ICT_BYTE

Internal Circuit Test Byte (Siemens Data) KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0E Modus   : Default

_No arguments._

### STATUS_MLFB

MLFB Data Siemens KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $0F Modus   : Default

_No arguments._

### STATUS_SCHLUESSEL_DATEN

Auslesen der SCHLUESSELDATEN KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $10...$19 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL_NUMMER | int | Werte: 1...10 |

### STATUS_BASESTATION

Auslesen der Basestation Status KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $25 Modus   : Default

_No arguments._

### STATUS_AKTUELL_SCHLUESSEL

aktuelle Schluessel KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $27 Modus   : Default

_No arguments._

### STATUS_TRANSPONDER_PAGE

Transponder Page KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $2A Modus   : Default

_No arguments._

### STATUS_SET_PAGE_TRSP

Page TRSP KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $2D Modus   : Default

_No arguments._

### STATUS_XTRSP_TEST_DATA

Test Data KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $2F Modus   : Default

_No arguments._

### STATUS_XTRSP

XTRSP Status KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $30 Modus   : Default

_No arguments._

### STATUS_TRSP_DATEN

aktuelle Transponder-Daten KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $40-$49 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL_NUMMER | int | Werte: 1...10 |

### STATUS_THS_HANDSENDER1

THS Handsender1 KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $4A Modus   : Default

_No arguments._

### STATUS_THS_HANDSENDER2

THS Handsender1 KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $4B Modus   : Default

_No arguments._

### STATUS_FBD_DATEN

aktuelle Fernbedienung-Daten KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $50-$59 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL_NUMMER | int | Werte: 1...10 |

### STATUS_HS_DATEN

aktuelle Handsender-Daten KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $5A-$5B Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| HANDSENDER_NUMMER | int | Werte: 1...2 |

### STATUS_FBD_UBAT

aktueller Status "UBat" aller FBDs KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $5C Modus   : Default

_No arguments._

### STATUS_HS_UBAT

aktueller Status "UBat" aller HSs KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $5D Modus   : Default

_No arguments._

### STATUS_FBD_FELDSTAERKE

aktueller Status "Feldstaerke" der FBDs KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $5E Modus   : Default

_No arguments._

### STATUS_WUP

aktueller Status "Wake-Up-Pattern" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $5F Modus   : Default

_No arguments._

### STATUS_FBD_PERSONALISIERUNG

aktueller Status "Personalisierung" der FBDs KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $60 Modus   : Default

_No arguments._

### STATUS_FERTIG_TRANSP_WERKST

1 Byte lesen: "Fertigung/Transport/Werkstatt-MODE" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=$100A Modus  : Default

_No arguments._

### STATUS_VEHICLE_PRODUCTION_DATE

8 ASCII Byte Production Date KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0x1009 Modus   : Default

_No arguments._

### STATUS_REPEAT_TABLE

8 Byte Repeat Table Version KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0x100D Modus   : Default

_No arguments._

### STATUS_FAHRGESTELLNUMMER

17 ASCII Byte Fahrgestell-Nummer KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0x1010 Modus   : Default

_No arguments._

### STATUS_HO_CODE

8 Byte "HO-Codierung" lesen KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=$1013 Modus  :  Default

_No arguments._

### STATUS_FZG_ZUSTAND

14 Byte "Fahrzeug-Zustand" lesen KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=$1015 Modus  :  Default

_No arguments._

### STATUS_BOS_CC_DATEN

Lesen von 32 Byte "BOS_CC-Daten" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=$1016-1018 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BOS_CC_INDEX | int | Werte: 1...3 ===>Byte0 |

### STATUS_FSD_DATEN

Lesen von 32 Byte "FSD-Daten" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=$1019-101A Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| FSD_INDEX | int | Werte: 1...2 ===>Byte0 |

### STATUS_FAHRZEUGAUFTRAG

Liest 16 Byte "Fahrzeugauftrag" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=3F00...3F13 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUMMER | int | Werte: 0...19 |

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### STEUERN_ISN

Schreibt  4Byte "ISN" und kopiert diesen auf beide  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $01 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ISN_CODE | string | "ISN": z.B. "0x00,0x00,0x55,0xAA" ======> Byte0-3 |

### STEUERN_MECH_SCHLUESSELCODE

Schreibt 10 Byte "mechan. Schluessel-Code"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $02 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "HA00012345" ======> Byte0-9 |

### STEUERN_SCHLUESSEL_FREQUENZ

Schreibt 1 Byte "Schluessel-Frequenz"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $03 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KEQ_FREQ | unsigned char | "Freq": 0-255 ======> Byte0 |

### STEUERN_PROG_LOCATION_DATUM

Schreibt 3 Byte "Programmier-Ort/Datum"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $04 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PROG_LOCATION | unsigned char | "Ort":   0-15 ======> Byte0, Bit4-7 |
| PROG_TIME_DAY | unsigned char | "Tag":   1-31 ======> Byte1 |
| PROG_TIME_MONTH | unsigned char | "Monat": 1-12 ======> Byte0, Bit0-3 |
| PROG_TIME_YEAR_2_DIGITS | unsigned int | "Jahr":  0-99 ======> Byte2 |

### STEUERN_ZV_AUTHENTISIERUNG

Schreibt 4 Byte "ZV-Authentisierung"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $05 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "0x11,0x22,0x33,0x44" ======> Byte0-3 |

### STEUERN_TRANSPONDERKENNUNG

Schreibt 3 Byte "Transponder-Aktivierung"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $06 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "0xAA,0xAA,0xAA" ======> Byte0-2 |

### STEUERN_TRSP_FAHRZYKLUSZAEHLER

Schreibt 4 Byte "Transponder-Fahrzykluszaehler"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $07 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZAEHLER_HIGH_WORD | unsigned int | ======> Byte0-1 |
| ZAEHLER_LOW_WORD | unsigned int | ======> Byte2-3 |

### STEUERN_CAS_INIT_KENNUNG

Schreibt 3 Byte "Initialisierungs-Kennung"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $08 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "0xAA,0xAA,0xAA" ======> Byte0-2 |

### STEUERN_BDM_SPERREN

BDM Sperren (only in special mode with BDM interface!!!)  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $09 Modus  : Default

_No arguments._

### STEUERN_DME_RINGBUFFER

Schreibt 31 Byte "DME-Ringpuffer"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $0A Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "1,2,03,0x04,0x05,...." ======> Byte0-30 |

### STEUERN_ZVFH_RINGBUFFER

Schreibt 64+1 Byte "ZV/FH-Ringpuffer"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $0B Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BUFFER_POINTER | unsigned char | ======> Byte 0 |
| DATEN | string | "Daten": z.B. "1,2,03,0x04,0x05" ======> Byte 1-64 |

### STEUERN_ICT_BYTE

Internal Circuit Byte Schreiben  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $0E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ICT_BYTE | unsigned char | ======> Byte 0 |

### STEUERN_SCHLUESSELDATEN

Schreibt 17 Byte "Schluessel-Daten"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $10...$19 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KEY_NUMBER | int | "Schl-Nr": 1-10 ======> Array-Index |
| STATUS_BYTE1 | unsigned char | "Status1": 0-255 ======> Byte 0 |
| STATUS_BYTE2 | unsigned char | "Status1": 0-255 ======> Byte 1 |
| INITIALISIERUNGSSTATUS | unsigned char | "Init-Status": 0-255 ======> Byte 2 |
| IDENTIFIER | string | "Identifier": (z.B. 0x01,0x02,0x03,0x04) ======> Byte 3-6 |
| SECRET_KEY | string | "Secret Key": (z.B. 0x01,0x02,0x03,0x04,0x05,0x06) ======> Byte 7-12 |
| CONFIG_BYTE | unsigned char | Config-Byte ======> Byte 13 |
| PASSWORD_TRANSPONDER | string | "Password-Transponder": (z.B. 0x01,0x02,0x03) ======> Byte 14-16 |
| CRC_BYTE | unsigned char | "CyclicRedundancyCheck": 0-255 ======> Byte 17 |

### STEUERN_SCHLUESSEL_GESPERRT

Schreibt 1 Byte "Schluessel-Sperre"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $20 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KEY_NUMBER | unsigned int | Schluesselnummer: 1...10 ======> Byte0 |

### STEUERN_SCHLUESSEL_FREIGEBEN

Schreibt 1 Byte "Schluessel-Nummer"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $21 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KEY_NUMBER | unsigned int | "Nr.":   1-10 ======> Byte0 |

### STEUERN_BASESTATION

Schreibt 5 Byte "Basestation-Vorgabewerte"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $26 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PAGE0 | unsigned char | "Page0": 0-15 ======> Byte0 |
| PAGE1 | unsigned char | "Page1": 0-15 ======> Byte1 |
| PAGE2 | unsigned char | "Page2": 0-15 ======> Byte2 |
| PAGE3 | unsigned char | "Page3": 0-15 ======> Byte3 |
| SAMPLING_TIME | unsigned char | "STime": 0-63 ======> Byte4 |

### STEUERN_KOMMUNIKATION_PARAMETER

Schreibt 1 Byte "Kommunikation Parameter"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $28 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DIAGNOSE_SETZT_FORT | unsigned char | Bereich 0/1 ======> Byte0,Bit0 |
| CRYPTO_PASSWORD | unsigned char | Bereich 0/1 ======> Byte0,Bit1 |
| AUTHENT_DIAGN_CAS | unsigned char | Bereich 0/1 ======> Byte0,Bit2 |
| ABZUGSSPERRE_ON_OFF | unsigned char | Bereich 0/1 ======> Byte0,Bit3 |
| RF_FELD_OHNE_SCHLUESSSEL_EIN | unsigned char | Bereich 0/1 ======> Byte0,Bit4 |

### STEUERN_CMD_READ_PAGE_TRSP

Schreibt 1 Byte "Transponder Page"  KWP 2000: $3B WriteDataByLocalIdentifier LocalIdentifier $29 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| PAGE_NUMMER | unsigned char | "Page": 0-7,0xFF, "WUP": 0xFE ======> Byte0 |

### STEUERN_ADR_XTRSP

Schreibt 4 Byte "XTRSP-Adresse"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $2B Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_HIGH | unsigned int | "High": 0-65535 ======> Byte0-1 |
| ADRESSE_LOW | unsigned int | "Low":  0-65535 ======> Byte2-3 |

### STEUERN_PAGE_TRSP

Schreibt 5 Byte "TRSP-Page"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $2C Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PAGE | unsigned char | "Page": 0-7, 0xFF, "WUP": 0xFE ======> Byte0 |
| DATA_HIGH | unsigned int | "High": 0-65535 ======> Byte1-2 |
| DATA_LOW | unsigned int | "Low":  0-65535 ======> Byte3-4 |

### STEUERN_SEQUENCE_COUNTER_XTRSP

Schreibt 4 Byte "XTRSP, Sequ.-Counter"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $2E Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATA_HIGH | unsigned int | "High": 0-65535 ======> Byte0-1 |
| DATA_LOW | unsigned int | "Low":  0-65535 ======> Byte2-3 |

### STEUERN_FBD_DATEN

Schreibt 15 Byte "Daten fuer eine FBD" KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $50-$59 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL_NUMMER | int | Werte: 1...10 ======> LID |
| KEY_NUMBER_WORD | string | Schluessel-Nr ======> Byte0-1 |
| SECRET_KEY_HIGH | string | "SECRET_KEY_HIGH": z.B. "1,2" ======> Byte2-3 |
| SECRET_KEY_LOW | string | "SECRET_KEY_HIGH": z.B. "1,2,3,4" ======> Byte4-7 |
| RANDOM_FBD | string | "SECRET_KEY_HIGH": z.B. "1,2,3,4" ======> Byte8-11 |
| LAUF_NR | unsigned char | Personalisierung Nummer ======> Byte12 |
| UBAT_STAT | unsigned char | Hex-Antwort von SG ======> Byte13, Bit0-7 |
| STAT_FBD | unsigned char | Bereich ======> Byte14, Bit0-7 |

### STEUERN_FBD_UBAT

Schreibt 10 Byte "UBAT fuer alle FBD" KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $5C Modus:   Default

| Name | Type | Description |
| --- | --- | --- |
| FBD01_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte0, Bit0-2 |
| FBD01_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte0, Bit7 |
| FBD02_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte1, Bit0-2 |
| FBD02_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte1, Bit7 |
| FBD03_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte2, Bit0-2 |
| FBD03_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte2, Bit7 |
| FBD04_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte3, Bit0-2 |
| FBD04_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte3, Bit7 |
| FBD05_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte4, Bit0-2 |
| FBD05_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte4, Bit7 |
| FBD06_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte5, Bit0-2 |
| FBD06_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 Byte5, Bit7 |
| FBD07_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte6, Bit0-2 |
| FBD07_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte6, Bit7 |
| FBD08_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte7, Bit0-2 |
| FBD08_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte7, Bit7 |
| FBD09_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte8, Bit0-2 |
| FBD09_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte8, Bit7 |
| FBD10_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte9, Bit0-2 |
| FBD10_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte9, Bit7 |

### STEUERN_HS_UBAT

Schreibt 2 Byte "UBAT fuer alle HS" KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $5D Modus:   Default

| Name | Type | Description |
| --- | --- | --- |
| HS01_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte0, Bit0-2 |
| HS01_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte0, Bit7 |
| HS02_UBAT_STAT_CNTR | unsigned char | Bereich 0-7 ======> Byte1, Bit0-2 |
| HS02_UBAT_STAT_FLAG | unsigned char | Bereich 0/1 ======> Byte1, Bit7 |

### STEUERN_FBD_FELDSTAERKE

Schreibt 6 Byte "FBD-Feldstaerke" KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $5E Modus:   Default

| Name | Type | Description |
| --- | --- | --- |
| FBD_QUELLE | unsigned char | Bereich 0-255 ======> Byte0 |
| FBD_KEYID_PRSL | unsigned char | Bereich 0-255 ======> Byte1 |
| FBD_KEYID_DIAG | unsigned char | Bereich 0-255 ======> Byte2 |
| FBD_QUANT | unsigned char | Bereich 0-255 ======> Byte3 |
| FBD_QUANT_MIN | unsigned char | Bereich 0-255 ======> Byte4 |
| FBD_QUANT_MAX | unsigned char | Bereich 0-255 ======> Byte5 |

### STEUERN_WUP

Schreibt 3 Byte "Wake-Up-Pattern"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $5F Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| WUP_BYTE_HIGH | unsigned char | "High": 0-255 ======> Byte0 |
| WUP_BYTE_MIDDLE | unsigned char | "Mid":  0-255 ======> Byte1 |
| WUP_BYTE_LOW | unsigned char | "Low":  0-255 ======> Byte2 |

### STEUERN_FBD_PERSONALISIERUNG

Schreibt 10 Byte "FBD Personalisierung Daten"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $60 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FBD0_PERSON | unsigned char | "High": 0-255 ======> Byte0 |
| FBD1_PERSON | unsigned char | "High": 0-255 ======> Byte1 |
| FBD2_PERSON | unsigned char | "High": 0-255 ======> Byte2 |
| FBD3_PERSON | unsigned char | "High": 0-255 ======> Byte3 |
| FBD4_PERSON | unsigned char | "High": 0-255 ======> Byte4 |
| FBD5_PERSON | unsigned char | "High": 0-255 ======> Byte5 |
| FBD6_PERSON | unsigned char | "High": 0-255 ======> Byte6 |
| FBD7_PERSON | unsigned char | "High": 0-255 ======> Byte7 |
| FBD8_PERSON | unsigned char | "High": 0-255 ======> Byte8 |
| FBD9_PERSON | unsigned char | "High": 0-255 ======> Byte9 |

### STEUERN_VEHICLE_PRODUCTION_DATE

8 ASCII "Vehicle Production Date" schreiben KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=$1009 Full Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATE | string | "Date" 8 x ASCII (0-9) ======> Byte0-7 |

### STEUERN_FAHRGESTELLNUMMER

17 ASCII "Fahrgestellnummer" schreiben KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=$1010 Full Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NUMMER | string | "Fahrgestellnummer" 17 x {1...0A...Z} ======> Byte0-16 |

### STEUERN_HO_CODE

8 Byte "HO-Codierung" schreiben KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=$1013 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DEALER_ORG | string | "HO-Codierung" ======> Byte0-3 |
| FIRST_REG_DEALER | unsigned char | "Haendler" ======> Byte4 |
| FIRST_REG_TIME_DAY | unsigned char | "Tag" ======> Byte5 |
| FIRST_REG_TIME_MONTH | unsigned char | "Monat" ======> Byte6 |
| FIRST_REG_TIME_YEAR_2_DIGITS | unsigned char | "Jahr" ======> Byte7 |

### STEUERN_FAHRZEUGAUFTRAG

Schreibt 16 Byte "Fahrzeugauftrag" KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=3F00...3F13 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NUMMER | int | Werte: 0...19 ======> CID |
| BLOCK_DATA | string | "Block Data": z.B. 0x01,0x02,0x03,0x04,0x05,0x06... ======> Byte 0-15 |

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F13 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F13 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### SET_FERTIG_TRANSP_WERKST

Initialisiert den Fertigung/Transport/Werkstatt-MODE KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $0C Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | unsigned char | Werte: 0-255 ======> Byte0 |

### DME_STARTWERT_ABGLEICH

Kopiert die ISN auf beide Wechselcodes KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

_No arguments._

### SET_KEY_MODE

1 Byte => Command 0/1/2/3/-/5/6/7 11 Byte => Command -/-/-/-/4/-/-/- Startet einen KEY_MODE Befehl KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $21 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COMMAND | string | "Befehl": 0-7 table Key_Mode_Befehle NAME TEXT ======> Byte0 |
| DATEN | string | "Daten": Nur fuer START_AUTH_DIAG(=4) ======> Byte1-16 (z.B. 0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A) |

### SET_KEY_INIT

Initialisiert den KEY-MODE KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $22 Modus  : Default

_No arguments._

### SIGNATURPRUEFUNG

Aktiviert die Signaturpruefung des Flash-ROM KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $23 Modus  : Default

_No arguments._

### CAS_INIT_OHNE_AUTHENTICATION

Normal->Jungfraeulich ohne Authentication KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $24 Modus  : Default

_No arguments._

### C_C_AUFTRAG_CAS

Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $1000 - $3EFF CodingDataSet KWP2000: $22   ReadDataByCommonIdentifier $1000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_LESEN_CAS

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $1000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_SCHREIBEN_CAS

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $1000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

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
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
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
| 0x55 | BHTC |
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
| 0x07 | nicht benutzt |
| 0x08 | nicht benutzt |
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
| 0xD904 | K_CAN_LOW_SYS, Physikalischer Busfehler D904 |
| 0xD905 | K_CAN_HIGH_SYS                          D905 |
| 0xD906 | GroundShift_SYS                         D906 |
| 0xD907 | CAN_Controller_SYS, Bus off             D907 |
| 0xD93C | Fehlerwert_erhalten_SYS                 D93C |
| 0xD93D | Unplausibles_Signal_SYS                 D93D |
| 0xD93E | Telegramm_Timeout_beim_Emfang_SYS       D93E |
| 0xD93F | Fehler_beim_Emfang_NM_Botschaft_SYS     D93F |
| 0xD940 | Fehlerwert_gesendet_SYS                 D940 |
| 0xD941 | Unplausibles_Signal1_SYS                D941 |
| 0xD942 | Telegramm_Timeout_beim_Senden_SYS       D942 |
| 0xD943 | Fehler_beim_Senden_NM_Botschaft_SYS     D943 |
| 0xE904 | K_CAN_LOW_PER, Physikalischer Busfehler E904 |
| 0xE905 | K_CAN_HIGH_PER                          E905 |
| 0xE906 | GroundShift_PER                         E906 |
| 0xE907 | CAN_Controller_PER, Bus off             E907 |
| 0xE93C | Fehlerwert_erhalten_PER                 E93C |
| 0xE93D | Unplausibles_Signal_PER                 E93D |
| 0xE93E | Telegramm_Timeout_beim_Emfang_PER       E93E |
| 0xE93F | Fehler_beim_Emfang_NM_Botschaft_PER     E93F |
| 0xE940 | Fehlerwert_gesendet_PER                 E940 |
| 0xE941 | Unplausibles_Signal1_PER                E941 |
| 0xE942 | Telegramm_Timeout_beim_Senden_PER       E942 |
| 0xE943 | Fehler_beim_Senden_NM_Botschaft_PER     E943 |
| 0xA0A8 | RAM_CRC_FEHLER                  A0A8 |
| 0xA0AA | BootFlash_CRC_FEHLER            A0AA |
| 0xA0AB | ProgFlash_CRC_FEHLER            A0AB |
| 0xA0AC | SG_Fehler_COP_CM_TRAP           A0AC |
| 0xA0AD | EEPROM_WRITE_FEHLER             A0AD |
| 0xA0AE | Energiesparmodi                 A0AE |
| 0xA0B0 | SG_Eingang_Bremselicht          A0B0 |
| 0xA0B1 | SG_Eingang_P_N                  A0B1 |
| 0xA0B2 | Fehler_CAS_Versorgung           A0B2 |
| 0xA0B3 | Fehler_Ansteurung_Anlasser_KL50 A0B3 |
| 0xA0B4 | Fehler_Motorstart_Anlasserbetrieb A0B4 |
| 0xA0B5 | DFAHL_Kabelbruch                A0B5 |
| 0xA0B8 | Hallsensor_verrastet            A0B8 |
| 0xA0B9 | Hallsensor_eject                A0B9 |
| 0xA0BA | Hallsensor_SSTA                 A0BA |
| 0xA0BB | Hallsensor_SSTB                 A0BB |
| 0xA0BC | Hubmagnet_AZSP                  A0BC |
| 0xA0BD | KL15_Wakeup_Ausgangstreiber     A0BD |
| 0xA0BE | Treiber_KL15_1_FZG_KS           A0BE |
| 0xA0BF | Treiber_KL15_2_FZG_KS           A0BF |
| 0xA0C0 | Treiber_KL15_3_FZG_KS           A0C0 |
| 0xA0C1 | Treiber_KL50L_KS                A0C1 |
| 0xA0C2 | Treiber_KL50E_KS                A0C2 |
| 0xA0C3 | KL15_WUP_ACC_KS                 A0C3 |
| 0xA0C4 | Treiber_KL15_4_FZG_KS           A0C4 |
| 0xA0C8 | Komfort_Schliesszylinder_FAT    A0C8 |
| 0xA0CC | Komfort_FBD                     A0CC |
| 0xA0CF | Komfort_Tueraussengriff         A0CF |
| 0xA0E0 | Centerlock_Taster_Verriegeln    A0E0 |
| 0xA0E1 | Centerlock_Taster_Entriegeln    A0E1 |
| 0xA0F0 | Fehler_Basestation_Antenne      A0F0 |
| 0xA0F1 | Fehler_TRSP_Page3               A0F1 |
| 0xA0F2 | Fehler_Typ_Nachschluessel       A0F2 |
| 0xA0F3 | Fehler_TRSP_Cryptodaten         A0F3 |
| 0xA100 | DME_Lost                        A100 |
| 0xA102 | DME_Drehzahl                    A102 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Km-Stand1 | km | - | unsigned int | - | 8 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9304 | EEPROM_CRC_FEHLER |
| 0x9305 | Unterspannung_SG_Info |
| 0x9306 | Ueberspannung_SG_Info |
| 0x9404 | Unplausibilitaet_SG_Spannung_Info |
| 0x9405 | Unplausibilitaet_Bremslicht_Info |
| 0x9406 | Unplausibilitaet_P_N_Info |
| 0x9604 | Keine_Antwort_auf_KISI_aktiv_Info |
| 0x9605 | Keine_Antwort_auf_KISI_deakt_Info |
| 0x9804 | DVD_in_Wiederholsperre_Info |
| 0x9805 | DVDR_in_Wiederholsperre_Info |
| 0x9806 | PSD_in_Wiederholsperre_Info |
| 0x9807 | PSDR_in_Wiederholsperre_Info |
| 0x9808 | PM_in_Wiederholsperre_Info |
| 0x9809 | Keine_Bestaetigung_KiSi_DVD_Info |
| 0x980A | Keine_Bestaetigung_KiSi_DVDR_Info |
| 0x980B | DVD_bestaet_ZV_Aenderung_nicht_Info |
| 0x980C | DVDR_bestaet_ZV_Aenderung_nicht_Info |
| 0x980D | PSD_bestaet_ZV_Aenderung_nicht_Info |
| 0x980E | PSDR_bestaet_ZV_Aenderung_nicht_Info |
| 0x980F | PM_bestaet_ZV_Aenderung_nicht_Info |
| 0x9904 | Fehler_TRSP_Initialisierung |
| 0x9905 | Fehler_Wert_TRSP_Initdone |
| 0x9906 | Fehler_TRSP_Kommunikation |
| 0x9907 | Gesperrter_Schluessel |
| 0x9908 | TRSP_Nicht_Zugehoerig |
| 0x9909 | Kein_TRSP_ID_Erkannt |
| 0x990A | Nachlauf_EWS_Aktiv |
| 0x9B04 | Schl01_ausserhalb_Fangbereich_Info |
| 0x9B05 | Schl02_ausserhalb_Fangbereich_Info |
| 0x9B06 | Schl03_ausserhalb_Fangbereich_Info |
| 0x9B07 | Schl04_ausserhalb_Fangbereich_Info |
| 0x9B08 | Schl05_ausserhalb_Fangbereich_Info |
| 0x9B09 | Schl06_ausserhalb_Fangbereich_Info |
| 0x9B0A | Schl07_ausserhalb_Fangbereich_Info |
| 0x9B0B | Schl08_ausserhalb_Fangbereich_Info |
| 0x9B0C | Schl09_ausserhalb_Fangbereich_Info |
| 0x9B0D | Schl10_ausserhalb_Fangbereich_Info |
| 0x9B0E | TH_01_ausserhalb_Fangbereich_Info |
| 0x9B0F | TH_02_ausserhalb_Fangbereich_Info |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | unsigned char | -- |  1 | 1 | 0 |
| 0x02 | Aussentemperatur | Grad C | -- | signed char | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |

### KEY_MODE_BEFEHLE

| WERT | NAME | TEXT |
| --- | --- | --- |
| 0x00 | RISC_EN_DATA | Datenuebertragung CAS <> RISC |
| 0x01 | RISC_EN_CHARGE | RISC in dem Accu-Ladezustand |
| 0x02 | RISC_EN_BATT | Batteriespannung lesen |
| 0x03 | RISC_EN_DIAG | Daten fuer Diagnose berechnen |
| 0x04 | START_AUTH_DIAG | Start der Authentisierung mit Diagnose-Daten, Schluessel im Transponder Mode |
| 0x05 | START_AUTH_CAS | Start der Authentisierung mit CAS Daten, Schluessel im Transponder Mode |
| 0x06 | RF_FIELD_OFF | Schaltet die Versorgung des Transporders aus |
| 0x07 | RISC_EN_ST_KEY | STATUS_KEY vom Starc aktualisiert |
