# EHC2RR.prg

## General

|  |  |
| --- | --- |
| File | EHC2RR.prg |
| Type | PRG |
| Jobs | 97 |
| Tables | 29 |
| Origin | BMW TI-432 Siegfried Helmich |
| Revision | 1.003 |
| Author | BMW EF-63 Tobias Schmid, Bertrandt EF-63 Ulrich Strobl |
| ECU Comment | Steuergraetebeschreibungsdatei fuer 2-Achs-Luftfeder-SG RR01 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EHC2RR  |  |  |
| ORIGIN | string | BMW TI-432 Siegfried Helmich |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | BMW EF-63 Tobias Schmid, Bertrandt EF-63 Ulrich Strobl |  |  |
| COMMENT | string | Steuergraetebeschreibungsdatei fuer 2-Achs-Luftfeder-SG RR01  |  |  |
| PACKAGE | string | 1.30 |  |  |
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

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### FLASH_PARAMETER_SETZEN

Setzt die SG-spezifischen Flash-Parameter

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |
| SG_MAXANZAHL_AIF | int | Anzahl der Anwender-Infofelder 0x00  Nicht zulässig sonst Anzahl der AIF |
| SG_GROESSE_AIF | int | Grösse des Anwender-Infofeldes 0x12  18 dez kleines AIF 0x33  51 dez grosses AIF 0x40  64 dez grosses AIF ( gilt nur für Power-Pc ) sonst Nicht zulässig |
| SG_ENDEKENNUNG_AIF | int | Offset für letztes Anwender-Infofeld 0xFE  Letztes AIF nicht überschreibbar 0x01  Letztes AIF ist überschreibbar sonst Nicht zulässig |
| SG_AUTHENTISIERUNG | string | Authentisierungsart table Authentisierung AUTH_TEXT |
| DIAG_PROT | string | optionaler Parameter Diagnoseprotokoll table KONZEPT_TABELLE KONZEPT_TEXT |

### FLASH_PARAMETER_LESEN

Gibt die SG-spezifischen Flash-Parameter zurück

_No arguments._

### READ_BOOT_IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### READ_ANALOG_VALUES

Lesen physikalischen Analogwerte der Sensoren

_No arguments._

### READ_DIG_IN

Lesen Digitale Eingangssignale

_No arguments._

### READ_LED_STAT

Lesen Satus LEDs

_No arguments._

### SET_REGULATOR_STAT

Schreiben regulator modes

| Name | Type | Description |
| --- | --- | --- |
| NIVEAU | string | Aktuatoren |

### READ_AKTOREN_STAT

Lesen actuator modes

_No arguments._

### READ_REGULATOR_MODE

Lesen regulator modi

_No arguments._

### READ_COD_COTOOL

EEPROM Daten lesen

| Name | Type | Description |
| --- | --- | --- |
| LOEHNERT_HEADER | binary | Headerdaten |

### WRITE_COD_COTOOL

EEPROM Daten schreiben

| Name | Type | Description |
| --- | --- | --- |
| LOEHNERT_HEADER | binary | Headerdaten |

### DUMMY_IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### READ_CALIBRATION

Hoehenstand lesen

_No arguments._

### CALIBRATE_VEHICLE_HEIGHT

automatischer Hoehenabgleich

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_LINKS | int | mm |
| DELTA_HOEHE_RECHTS | int | mm |
| ACHSE | int | 1 Vorne und 2 Hinten |

### WRITE_HEIGHT_COUNTS

Fahrzeughöhe in Counts vorgeben

| Name | Type | Description |
| --- | --- | --- |
| OFFSET_V_LINKS | int | counts |
| OFFSET_V_RECHTS | int | counts |
| OFFSET_H_LINKS | int | counts |
| OFFSET_H_RECHTS | int | counts |

### READ_ANALOG_VOLTAGE

Lesen physikalischen Analogwerte der Sensoren

_No arguments._

### STATUS_BOOT_IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### STEUERN_ACTUATORS

Aktuatoren setzen/ ruecksetzen Check the Pneumatic layout before acivating valves System can be damaged !

| Name | Type | Description |
| --- | --- | --- |
| ACTUATORS1 | int | Aktuatoren Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved MV_FR  = Magnetventil Front Right MV_FL  = Magnetventil Front Left MV_RR  = Magnetventil Rear Right MV_RL  = Magnetventil Rear left MV_RES = Reservoir Valve MV_EX  = Exhaust Valve C_SW   = Compressor Switch |
| ACTUATORS2 | int | Aktuatoren Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved MV_HPEX = Magnetventil High pressure Exhaust Valve |

### STEUERN_LEDS

LEDs setzen/ ruecksetzen

| Name | Type | Description |
| --- | --- | --- |
| LEDS1 | int | LEDs Bit0: reserved Bit1: standard Bit2: reserved, Bit3: reserved,Bit4: reserved, Bit5: reserved, Bit6: reserved Bit7: offroad |

### STEUERN_VALVE_SW_LSS

set valve switches LSS (Low Side Switch) in full access

| Name | Type | Description |
| --- | --- | --- |
| VALVE_SW1 | int | valve switches Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved MV_FR  = Magnetventil Front Right MV_FL  = Magnetventil Front Left MV_RR  = Magnetventil Rear Right MV_RL  = Magnetventil Rear left MV_RES = Reservoir Valve MV_EX  = Exhaust Valve C_SW   = Compressor Switch |
| VALVE_SW2 | int | valve switches Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved MV_HPEX = Magnetventil High pressure Exhaust Valve |

### STEUERN_VALVE_SW_HSS

set valve switches HSS (High SIde Switch) in full access

| Name | Type | Description |
| --- | --- | --- |
| VALVE_SW1 | int | valve switches Bit0: HSS_FRONT, Bit1: HSS_REAR, Bit2: HSS_RES, Bit3: PWR_UPULL Bit4: PWR_SENS1, Bit5: PWR_SENS2, Bit6: PWR_SENS3, Bit7: reserved HSS_FRONT  = Front valves common switch HSS_REAR   = Rear valves common switch HSS_RES    = High Side Switch - Reservoir PWR_UPULL  = PWR_SENS1  = PWR_SENS2  = PWR_SENS3  = |
| VALVE_SW2 | int | valve switches Bit0: reserved, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |

### STATUS_ANALOG_VALUES

Lesen physikalischen Analogwerte der Sensoren

_No arguments._

### STATUS_DIG_IN

Lesen Digitale Eingangssignale

_No arguments._

### STATUS_LED_STAT

Lesen Satus LEDs

_No arguments._

### STEUERN_REGULATOR

Schreiben regulator modes

| Name | Type | Description |
| --- | --- | --- |
| NIVEAU | string | Aktuatoren |

### STATUS_AKTOREN

Lesen actuator modes

_No arguments._

### STATUS_REGULATOR_MODE

Lesen regulator modi

_No arguments._

### STATUS_CALIBRATION

Hoehenstand lesen

_No arguments._

### STATUS_ECU

Steuergerätestatus einstellen

_No arguments._

### STATUS_INTERNAL_STATUS

Auslesen von internen Reglerinformationen

_No arguments._

### STEUERN_MEMORY_DEFAULT

Copy default memory from FLASH to EEPROM

_No arguments._

### STATUS_ANALOG_VOLTAGE

Lesen physikalischen Analogwerte der Sensoren

_No arguments._

### STEUERN_ACTUATORS_TIME

Aktuatoren bestimmte Zeit setzen/ ruecksetzen

| Name | Type | Description |
| --- | --- | --- |
| ACTUATORS1 | int | Aktuatoren Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved MV_FR  = Magnetventil Front Right MV_FL  = Magnetventil Front Left MV_RR  = Magnetventil Rear Right MV_RL  = Magnetventil Rear left MV_RES = Reservoir Valve MV_EX  = Exhaust Valve C_SW   = Compressor Switch |
| ACTUATORS2 | int | Aktuatoren Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved MV_HPEX   = High pressure exhaust |
| TIME | int | Zeit in Sekunden |

### STATUS_DELTA_OFFROAD

Ausgabe Delta Offroad aus Codierdaten

_No arguments._

### STEUERN_ECU

Steuergerätestatus einstellen

| Name | Type | Description |
| --- | --- | --- |
| STATUS1 | int | Status Steuergeraet (Modus) Bit0: Dump Modus, Bit1: Band Modus, Bit2: Verlademodus, Bit3: Lowtolmodus Bit4: EMV Kundenmodus, Bit5: Handsteuermodus, Bit6: Noplausmodus, Bit7: Nousermodus |
| STATUS2 | int | Status Steuergeraet (Modus) Bit0:  CYCLIC EMC , Bit1: Lebensdauertests, Bit2: Regelungsverhinderer deaktivieren, Bit3: Auto senken Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |

### SET_ACTUATORS

Aktuatoren setzen/ ruecksetzen Check the Pneumatic layout before acivating valves System can be damaged !

| Name | Type | Description |
| --- | --- | --- |
| ACTUATORS1 | int | Aktuatoren Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved MV_FR  = Magnetventil Front Right MV_FL  = Magnetventil Front Left MV_RR  = Magnetventil Rear Right MV_RL  = Magnetventil Rear left MV_RES = Reservoir Valve MV_EX  = Exhaust Valve C_SW   = Compressor Switch |
| ACTUATORS2 | int | Aktuatoren Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved MV_HPEX = Magnetventil High pressure Exhaust Valve |

### SET_LEDS

LEDs setzen/ ruecksetzen

| Name | Type | Description |
| --- | --- | --- |
| LEDS1 | int | LEDs Bit0: reserved, Bit1: standard, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: offroad |

### SET_VALVE_SW_LSS

set valve switches LSS (Low Side Switch) in full access

| Name | Type | Description |
| --- | --- | --- |
| VALVE_SW1 | int | valve switches Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved MV_FR  = Magnetventil Front Right MV_FL  = Magnetventil Front Left MV_RR  = Magnetventil Rear Right MV_RL  = Magnetventil Rear left MV_RES = Reservoir Valve MV_EX  = Exhaust Valve C_SW   = Compressor Switch |
| VALVE_SW2 | int | valve switches Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved MV_HPEX = Magnetventil High pressure Exhaust Valve |

### SET_VALVE_SW_HSS

set valve switches HSS (High SIde Switch) in full access

| Name | Type | Description |
| --- | --- | --- |
| VALVE_SW1 | int | valve switches Bit0: HSS_FRONT, Bit1: HSS_REAR, Bit2: HSS_RES, Bit3: PWR_UPULL Bit4: PWR_SENS1, Bit5: PWR_SENS2, Bit6: PWR_SENS3, Bit7: reserved HSS_FRONT HSS_REAR HSS_RES    = High Side Switch - Reservoir PWR_UPULL PWR_SENS1 PWR_SENS2 PWR_SENS3 |
| VALVE_SW2 | int | valve switches Bit0: reserved, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |

### SET_ECU_STATUS

Steuergerätestatus einstellen

| Name | Type | Description |
| --- | --- | --- |
| STATUS1 | int | Status Steuergeraet (Modus) Bit0: Dump Modus, Bit1: Band Modus, Bit2: Verlademodus, Bit3: Lowtolmodus Bit4: EMV Kundenmodus, Bit5: Handsteuermodus, Bit6: Noplausmodus, Bit7: Nousermodus |
| STATUS2 | int | Status Steuergeraet (Modus) Bit0:  CYCLIC EMC , Bit1: Lebensdauertests, Bit2: Regelungsverhinderer deaktivieren, Bit3: Auto senken Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |

### READ_ECU_STATUS

Steuergerätestatus einstellen

_No arguments._

### READ_INTERNAL_STATUS

Auslesen von internen Reglerinformationen

_No arguments._

### SET_MEMORY_DEFAULT

Copy default memory from FLASH to EEPROM

_No arguments._

### SET_ACTUATORS_TIME

Aktuatoren bestimmte Zeit setzen/ ruecksetzen

| Name | Type | Description |
| --- | --- | --- |
| ACTUATORS1 | int | Aktuatoren Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved MV_FR  = Magnetventil Front Right MV_FL  = Magnetventil Front Left MV_RR  = Magnetventil Rear Right MV_RL  = Magnetventil Rear left MV_RES = Reservoir Valve MV_EX  = Exhaust Valve C_SW   = Compressor Switch |
| ACTUATORS2 | int | Aktuatoren Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved MV_HPEX   = High pressure exhaust |
| TIME | int | Zeit in Sekunden |

### STEUERN_ECU_STATUS

Steuergerätestatus einstellen

| Name | Type | Description |
| --- | --- | --- |
| STATUS1 | int | Status Steuergeraet (Modus) Bit0: Dump Modus, Bit1: Band Modus, Bit2: Verlademodus, Bit3: Lowtolmodus Bit4: EMV Kundenmodus, Bit5: Handsteuermodus, Bit6: Noplausmodus, Bit7: Nousermodus |
| STATUS2 | int | Status Steuergeraet (Modus) Bit0:  CYCLIC EMC , Bit1: Lebensdauertests, Bit2: Regelungsverhinderer deaktivieren, Bit3: Auto senken Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |

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
| 0x0001 | Balgventil vorne links |
| 0x0002 | Balgventil vorne rechts |
| 0x0003 | Balgventil hinten links |
| 0x0004 | Balgventil hinten rechts |
| 0x0005 | Quersperrventil vorne |
| 0x0006 | Quersperrventil hinten |
| 0x0007 | Ablassventil |
| 0x0008 | Hochdruckablassventil |
| 0x0009 | Speicherventil |
| 0x000A | Kompressorrelais |
| 0x0014 | Versorgung Balgventile vorne |
| 0x0015 | Versorgung Balgventile hinten |
| 0x0016 | Versorgung Quersperrventile |
| 0x0017 | Versorgung Speicherventil/Ablassventil |
| 0x0018 | Versorgung Hochdruckablassventil |
| 0x001E | Hoehenstandssensor vorne links |
| 0x001F | Hoehenstandssensor vorne rechts |
| 0x0020 | Hoehenstandssensor hinten links |
| 0x0021 | Hoehenstandssensor hinten rechts |
| 0x0022 | Speicherdrucksensor |
| 0x0023 | Versorgung Speicherdrucksensor |
| 0x0024 | Kompressortemperatursensor |
| 0x0025 | VA Signal |
| 0x0032 | CAN Bus |
| 0x0034 | Speicherfehler Steuergeraet |
| 0x0035 | interner Fehler Steuergeraet |
| 0x0036 | Codierdatenfehler |
| 0x0037 | interner Abgleichfehler Steuergeraet |
| 0x0064 | Verschraenkungs-Plausibilitaet |
| 0x0065 | Kein/zu langsames Verfahren (ganzes Fzg.) wenn heben angefordert |
| 0x0066 | Kein/zu langsames Verfahren (ganzes Fzg.) wenn absenken angefordert |
| 0x0067 | Zu viel Energie fuer eine Regelung benoetigt: Vorderachse |
| 0x0068 | Zu viel Energie fuer eine Regelung benoetigt: hinten links |
| 0x0069 | Zu viel Energie fuer eine Regelung benoetigt: hinten rechts |
| 0x006A | Zu viel Energie um die Zielhoehe zu erreichen: Vorderachse |
| 0x006B | Zu viel Energie um die Zielhoehe zu erreichen: hinten links |
| 0x006C | Zu viel Energie um die Zielhoehe zu erreichen: hinten rechts |
| 0x006D | Hoehenaenderung in die falsche Richtung (mind. ein Rad), wenn heben angefordert |
| 0x006E | Hoehenaenderung in die falsche Richtung (mind. ein Rad), wenn absenken angefordert |
| 0x006F | Kompressortemperatur steigt, wenn Kompressor nicht angesteuert wird |
| 0x0070 | Kompressortemperatur steigt nicht, wenn Kompressor angesteuert wird |
| 0x0071 | Kompressortemperatur faellt nicht, wenn Kompressor nicht angesteuert wird |
| 0x0072 | Speicherdruck steigt, wenn Speicher nicht aktiv ist |
| 0x0073 | Speicherdruck sinkt, wenn Speicher nicht aktiv ist |
| 0x0074 | Speicherdruck bleibt konstant, wenn Speicherfuellen angefordert wird |
| 0x0075 | Speicherdruck sinkt anfaenglich, wenn Speicherfuellen angefordert wird |
| 0x0076 | Speicherdruck sinkt, wenn Speicherfuellen angefordert wird |
| 0x0077 | Speicherdruck bleibt konstant, wenn Entlueftung angefordert wird |
| 0x0078 | Speicherdruck steigt, wenn Entlueftung angefordert wird |
| 0x0079 | Speicherdruck bleibt konstant, wenn aus dem Speicher nach oben verfahren wird |
| 0x007A | Speicherdruck steigt, wenn aus dem Speicher nach oben verfahren wird |
| 0x007B | Quersperrplausibilitaet Vorderachse |
| 0x007C | Quersperrplausibilitaet Hinterachse |
| 0x007D | links vorne bewegt sich zu langsam |
| 0x007E | rechts vorne bewegt sich zu langsam |
| 0x007F | Aktivitaetsplausibilitaet vorne links |
| 0x0080 | Aktivitaetsplausibilitaet vorne rechts |
| 0x0081 | Aktivitaetsplausibilitaet hinten links |
| 0x0082 | Aktivitaetsplausibilitaet hinten rechts |
| 0x5F8C | Balgventil vorne links |
| 0x5F8D | Balgventil vorne rechts |
| 0x5F8E | Balgventil hinten links |
| 0x5F8F | Balgventil hinten rechts |
| 0x5F90 | Quersperrventil vorne |
| 0x5F91 | Quersperrventil hinten |
| 0x5F92 | Ablassventil |
| 0x5F93 | Hochdruckablassventil |
| 0x5F94 | Speicherventil |
| 0x5F95 | Kompressorrelais |
| 0x5F96 | Versorgung Balgventile vorne |
| 0x5F97 | Versorgung Balgventile hinten |
| 0x5F98 | Versorgung Quersperrventile |
| 0x5F99 | Versorgung Speicherventil/Ablassventil |
| 0x5F9A | Versorgung Hochdruckablassventil |
| 0x5F9B | Hoehenstandssensor vorne links |
| 0x5F9C | Hoehenstandssensor vorne rechts |
| 0x5F9D | Hoehenstandssensor hinten links |
| 0x5F9E | Hoehenstandssensor hinten rechts |
| 0x5F9F | Speicherdrucksensor |
| 0x5FA0 | Versorgung Speicherdrucksensor |
| 0x5FA1 | Kompressortemperatursensor |
| 0x5FA2 | VA Signal |
| 0x5FA4 | Speicherfehler Steuergeraet |
| 0x5FA5 | interner Fehler Steuergeraet |
| 0x5FA6 | Codierdatenfehler |
| 0x5FA7 | interner Abgleichfehler Steuergeraet |
| 0x5FA8 | Verschraenkungs-Plausibilitaet |
| 0x5FA9 | Kein/zu langsames Verfahren (ganzes Fzg.) wenn heben angefordert |
| 0x5FAA | Kein/zu langsames Verfahren (ganzes Fzg.) wenn absenken angefordert |
| 0x5FAB | Zu viel Energie fuer eine Regelung benoetigt: Vorderachse |
| 0x5FAC | Zu viel Energie fuer eine Regelung benoetigt: hinten links |
| 0x5FAD | Zu viel Energie fuer eine Regelung benoetigt: hinten rechts |
| 0x5FAE | Zu viel Energie um die Zielhoehe zu erreichen: Vorderachse |
| 0x5FAF | Zu viel Energie um die Zielhoehe zu erreichen: hinten links |
| 0x5FB0 | Zu viel Energie um die Zielhoehe zu erreichen: hinten rechts |
| 0x5FB1 | Hoehenaenderung in die falsche Richtung (mind. ein Rad), wenn heben angefordert |
| 0x5FB2 | Hoehenaenderung in die falsche Richtung (mind. ein Rad), wenn absenken angefordert |
| 0x5FB3 | Kompressortemperatur steigt, wenn Kompressor nicht angesteuert wird |
| 0x5FB4 | Kompressortemperatur steigt nicht, wenn Kompressor angesteuert wird |
| 0x5FB5 | Kompressortemperatur faellt nicht, wenn Kompressor nicht angesteuert wird |
| 0x5FB6 | Speicherdruck steigt, wenn Speicher nicht aktiv ist |
| 0x5FB7 | Speicherdruck sinkt, wenn Speicher nicht aktiv ist |
| 0x5FB8 | Speicherdruck bleibt konstant, wenn Speicherfuellen angefordert wird |
| 0x5FB9 | Speicherdruck sinkt anfaenglich, wenn Speicherfuellen angefordert wird |
| 0x5FBA | Speicherdruck sinkt, wenn Speicherfuellen angefordert wird |
| 0x5FBB | Speicherdruck bleibt konstant, wenn Entlueftung angefordert wird |
| 0x5FBC | Speicherdruck steigt, wenn Entlueftung angefordert wird |
| 0x5FBD | Speicherdruck bleibt konstant, wenn aus dem Speicher nach oben verfahren wird |
| 0x5FBE | Speicherdruck steigt, wenn aus dem Speicher nach oben verfahren wird |
| 0x5FBF | Quersperrplausibilitaet Vorderachse |
| 0x5FC0 | Quersperrplausibilitaet Hinterachse |
| 0x5FC1 | links vorne bewegt sich zu langsam |
| 0x5FC2 | rechts vorne bewegt sich zu langsam |
| 0x5FC3 | Aktivitaetsplausibilitaet vorne links |
| 0x5FC4 | Aktivitaetsplausibilitaet vorne rechts |
| 0x5FC5 | Aktivitaetsplausibilitaet hinten links |
| 0x5FC6 | Aktivitaetsplausibilitaet hinten rechts |
| 0x5FC7 | Energiesparmode aktiv |
| 0xD704 | K-CAN Transceiver LOW |
| 0xD707 | K-CAN Controller BUS Off |
| 0xD73C | K-CAN Fehlerwert erhalten |
| 0xD73D | K-CAN unplausibles Signal |
| 0xD73E | K-CAN Telegramm Timeout |
| 0xD743 | K-CAN NM Fehlerwert erhalten |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00001111 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxx0001 | 10001 | Kurzschluss gegen U-Batt |
| xxxx0010 | 10010 | Kurzschluss gegen Masse |
| xxxx0100 | 10100 | Leitungsunterbrechung |
| xxxx1000 | 11000 | Plausibilitaetsfehler |
| xxxx0011 | 10011 | Eingang Floating Plausibilitaetsfehler |
| xxxx0101 | 10101 | Hardwarefehler |
| xxxx0110 | 10110 | Fehler Sensorversorgung |
| xxxx0111 | 10111 | Busfehler |
| xxxx1001 | 11001 | Memoryfehler |
| xxxx1010 | 11010 | Steuergerätefehler |
| xxxx1011 | 11011 | Konfigurationsfehler |
| xxxx1100 | 11100 | Abgleichfehler |
| xxxx1111 | 11111 | unbekannte Fehlerart |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | SPEZIAL1 | SPEZIAL2 | SPEZIAL3 | SPEZIAL4 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | signed char | - | 1 | 8 | 0 |
| 0x02 | Speicherdruck | Bar | -- | unsigned char | - | 1 | 8 | 0 |
| 0x03 | Balgventil vorne rechts | 0/1 | -- | 0x0001 | - | - | 1 | - |
| 0x04 | Balgventil vorne links | 0/1 | -- | 0x0002 | - | - | 1 | - |
| 0x05 | Balgventil hinten rechts | 0/1 | -- | 0x0004 | - | - | 1 | - |
| 0x06 | Balgventil hinten links | 0/1 | -- | 0x0008 | - | - | 1 | - |
| 0x07 | Speicherventil | 0/1 | -- | 0x0010 | - | - | 1 | - |
| 0x08 | Ablassventil | 0/1 | -- | 0x0020 | - | - | 1 | - |
| 0x09 | Kompressorschalter | 0/1 | -- | 0x0040 | - | - | 1 | - |
| 0x0A | Hochdruckablassventil | 0/1 | -- | 0x0080 | - | - | 1 | - |
| 0x0B | Fahrzeuggeschwindigkeit | km/h | -- | unsigned char | - | 1 | 1 | 0 |
| 0x0C | Kompressortemperatur | °C | -- | unsigned char | - | 1 | 1 | -40 |
| 0x0E | durchschn. Fahrzeughoehe | mm | -- | signed char | - | 1 | 1 | 0 |
| 0x0F | reserved | - | -- | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | XY | -- | unsigned int | -- | 25 | 255 | 0 |

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

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x1001 | Fehler a |
| 0x1002 | Fehler b |
| 0x1003 | Fehler c |
| 0x1004 | Fehler d |
| 0x1005 | Fehler e |
| 0x1006 | Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Aussentemperatur | Grad C | -- | signed char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | - | 1 | 1 | 0 |

### SPEZIAL1

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x02 | 0x01 |

### SPEZIAL2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A |

### SPEZIAL3

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0B | 0x0C |

### SPEZIAL4

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0F | 0x0E |

### HOEHEN

| HOEHEN | BYTE | BITWERT |
| --- | --- | --- |
| ACCESS | 0 | 0x02 |
| MOTORWAY | 0 | 0x04 |
| STANDARD | 0 | 0x08 |
| OFFROAD | 0 | 0x10 |
| REG_DOWN | 0 | 0x40 |
| REG_UP | 0 | 0x80 |
| XXX | Y | Z |
