# SPEG56.prg

## General

|  |  |
| --- | --- |
| File | SPEG56.prg |
| Type | PRG |
| Jobs | 112 |
| Tables | 45 |
| Origin | MSF MSF Alexander Vrchoticky |
| Revision | 4.010 |
| Author | Lear Corporation Entwicklung Arseni Martínez, Lear Corporation Entwicklung Carme Tàpias, Lear Corporation Entwicklung Israel Revert, Lear Corporation Entwicklung Sergi Garriga |
| ECU Comment | SGBD of SPEG for R56 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SPEG |  |  |
| ORIGIN | string | MSF MSF Alexander Vrchoticky |  |  |
| REVISION | string | 4.010 |  |  |
| AUTHOR | string | Lear Corporation Entwicklung Arseni Martínez, Lear Corporation Entwicklung Carme Tàpias, Lear Corporation Entwicklung Israel Revert, Lear Corporation Entwicklung Sergi Garriga |  |  |
| COMMENT | string | SGBD of SPEG for R56 |  |  |
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

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LESEN_DETAIL

Historypeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2101 - $21FF HistoryMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Historycode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 IdentifyNumberofSubbusMembers Modus  : Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 IdentifyNumberofSubbusMembers $16xx SubbusMemberSerialNumber Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) |

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

### READ_ENERGY_SAVING_MODE

Energy-Saving-Mode auslesen KWP 2000: $22 ReadDataByCommonIdentifier KWP 2000: $100A EnergySavingMode

_No arguments._

### _READ_MEMORY_BY_ADDRESS

Selected MEMORY reading by Address KWP 2000: $23  ReadMemoryByAddress KWP 2000: $02  External EEPROM KWP 2000: $04  Internal RAM

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Type of Memory to read out 2->External EEPROM 4->Internal RAM |
| MEMORY_ADDRESS | long | Address Offset to start reading out Maximum 3 bytes Base Address: e2prom   ->0x00 Ram(ST30)->0xA0000000 |
| MEMORY_SIZE | int | Number of bytes to be read Max: DiagBufferDataLength-1 |

### _WRITE_MEMORY_BY_ADDRESS

Selected MEMORY writing by Address KWP 2000: $3D  WriteMemoryByAddress KWP 2000: $02  External EEPROM KWP 2000: $04  Internal RAM

| Name | Type | Description |
| --- | --- | --- |
| BINARY_BUFFER | binary | Binary Buffer Alle Daten in HEX Byte 0	: High Byte Memory Address to write in Byte 1	: Middle Byte Memory Address to write in Byte 2	: Low Byte Memory Address to write in Byte 3	: Type of Memory 2->External EEPROM 4->Internal RAM Byte 4	: Number of Data to record Byte 5+ N of Data: Record Values Max. BINARY_BUFFER Size -> DiagBufferDataLength |

### _READ_DISP_EE

Read EEPROM EE Struct and Disp Flags KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C000 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0->default 1->DISP1_ADR,DISP2_ADR 2->UIF_EEPROM.Aktuelles UserInfoField 3->PRGREFB.   ProgrammReferenz Backup 4->VMECUHNB.  VehicleManufacturerECUHardware*Number Backup 5->PROGS.     Programmierstatus 6->RANDOM.    Initialisierung des Rauschgenerators |

### _WRITE_DISP_EE

Write EEPROM EE Struct and Disp Flags KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFFF commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0->default 1->DISP1_ADR 2->DISP2_ADR 3->PROGS |
| WERT | int |  |

### _READ_BRIF

Lear specific Job for reading BRIF from RAM KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C001 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0-> default 1-> HWREF.    HardwareReferenz 2-> PECUHN.   physicalECUHardwareNumber 3-> DOECUM.   DateOfECUManufacturing 4-> SSI.      SystemSupplierIndex 5-> SSECUSN.  SystemSupplierECUSerialNumber 6-> ERT.      eraseTime 7-> SIGT.     signTime 8-> RST.      resetTime 9-> MXBL.     maximaleBlockLaenge 10->VMECUHVN. VehicleManufacturerECUHWVersionNumber 11->UIF.      UserInfoField Ersteintrag |

### _READ_ZIF

Lear specific Job for reading ZIF from RAM KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C002 commonProjectSpecific

| Name | Type | Description |
| --- | --- | --- |
| ORT | int | 0->default 1->PRGREF.    ProgrammReferenz 2->VMECUHN.   VehicleManufacturerECUHardware*Number 3->VMECUSLVN. VehicleManufacturerECUSoftwareLayerVersionNumber 4->VMCI.      VehicleManufacturerCodingIndex 5->VMDI.      VehicleManufacturerDiagnosticIndex 6->TO_FILL.   damit signatur bei 0x10050 liegt 7->SIGNATUR |

### _READ_LENGTH_DIAG_BUFFER

Read Diag Buffer Lenth KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $C003 commonProjectSpecific

_No arguments._

### STATUS_VERSION_GATEWAYMODULES

Lesen der Versionsnummer der Gateway software, gateway tabelle, software version KWP2000: $21 ReadDataByLocalIdentifier $6F RecordLocalId Modus  : Default

_No arguments._

### _SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse_LEAR F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

### STATUS_DIGITAL_INPUTS

Auslesen der Stati von den digitalen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Inputs $01 ReportCurrentState

_No arguments._

### STATUS_DIGITAL_OUTPUTS

Auslesen der Stati von den digitalen Ausgaengen KWP2000: $30 InputOutputControlByLocalIdentifier $02 Digitale Outputs $01 ReportCurrentState

_No arguments._

### STATUS_ANALOG_INPUTS

Auslesen der Stati von den analogen Eingaengen KWP2000: $30 InputOutputControlByLocalIdentifier $03 Analoge Inputs $01 ReportCurrentState

_No arguments._

### STATUS_ANALOG_OUTPUTS

Auslesen der Stati von den analogen Ausgaengen KWP2000: $30 InputOutputControlByLocalIdentifier $04 Analoge Outputs $01 ReportCurrentState

_No arguments._

### STEUERN_DIGITAL_INPUT

Digitale Input direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Input $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table DigitalInputNrTexte DINNR NAME |
| WERT | string | table DigitalInputNrTexte WERT |

### STEUERN_DIGITAL_OUTPUT

Digitale Output direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $02 Digitale Ouput $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table DigitalOutputNrTexte DOUTNR NAME |
| WERT | string | table DigitalOutputNrTexte WERT |

### STEUERN_ANALOG_INPUT

Analoge Input direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $03 Analoge Input $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table AnalogInputNrTexte AINNR NAME |
| WERT | string | table AnalogInputNrTexte WERT |
| WERT2 | string | table AnalogInputNrTexte WERT nützlich nur fuer AUCSENSOR und DCDC_MSA Tastverhältnis valid only for AUCSENSOR and DCDC_MSA Duty-Cycle |
| ART_WERT | string | "nein"-> ADC register Wert "ja"  -> (PH) Wert default "nein" table DigitalArgument TEXT |

### STEUERN_ANALOG_OUTPUT

Analoge Output direkt ansteuern KWP2000: $30 InputOutputControlByLocalIdentifier $04 Analoge Output $07 ShortTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | table AnalogOutputNrTexte AOUTNR NAME |
| WERT | string | table AnalogOutputNrTexte WERT |

### STEUERN_BEENDEN

Kontrolle an SPEG zurueckgeben KWP2000: $30 InputOutputControlByLocalIdentifier $01 Digitale Input $02 Digitale Output $03 Analoge Input $04 Analoge Output $00 ReturnControToECU

_No arguments._

### _STATUS_VAR_CAN_GENERAL

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $00 GENERAL

_No arguments._

### _STATUS_VAR_CAN_WWS

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $01 WWS (Wiper-Washer System)

_No arguments._

### _STATUS_VAR_CAN_ZVS

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $02 ZVS (Central Locking System)

_No arguments._

### _STATUS_VAR_CAN_DWA

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $03 DWA (Anti-Theft Alarm System)

_No arguments._

### _STATUS_VAR_CAN_PH_KOMBI

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $04 PH_KOMBI (Peripherics Kombi)

_No arguments._

### _STATUS_VAR_CAN_PH_MISC

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $05 PH_MISC (Peripherics Miscelaneous)

_No arguments._

### _STATUS_VAR_CAN_ACH

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $07 ACH (Air Conditioning / Heating)

_No arguments._

### _STATUS_VAR_CAN_PIA

Auslesen der Stati von den Internen CAN Nachrichten Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $05 Internal Variables CAN Nachrichten $01 ReportCurrentState $09 PIA (Personalization, Individualization, Adaption)

_No arguments._

### _STATUS_VAR_IAP_GENERAL

Auslesen der Stati von den Internen Application Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables Application $01 ReportCurrentState $00 GENERAL

_No arguments._

### _STATUS_VAR_IAP_WWS

Auslesen der Stati von den Internen Application Variablen KWP2000: $30 InputOutputControlByLocalIdentifier $06 Internal Variables Application $01 ReportCurrentState $01 WWS (Wiper-Washer System)

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_1

EnergieDatenSpeicher Teil 1 -Einschlafverhinderer- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE1 commonProjectSpecific

_No arguments._

### STATUS_HISTORIENSPEICHER_LESEN_BLOCK_2

EnergieDatenSpeicher Teil 2 -Wecker- aus lesen KWP 2000: $22   ReadDataByCommonIdentifier KWP 2000: $EFE2 commonProjectSpecific

_No arguments._

### STEUERN_HISTORIENSPEICHER_LOESCHEN

EnergieDatenSpeicher Teil 1 und TEIL 2 loeschen KWP 2000: $2E   WriteDataByCommonIdentifier KWP 2000: $EFE0 commonProjectSpecific

_No arguments._

### _SLEEP_MODE_LEAR

Send ECU to Sleep Mode without waiting the busses to stop KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $02 Specific Lear Modus  : Default

_No arguments._

### _STATUS_LEAR_VERSIONS

Reading of the internal LEAR Application Software Version Lesen der internen Versionsnummer der Applikationssoftware KWP2000: $21 ReadDataByLocalIdentifier $70 RecordLocalId

_No arguments._

### AIF_LESEN_READECU

Auslesen des Anwender Informations Feldes KWP2000: $1A ReadECUIdentification $86 CurrentUIFDataTable Modus  : Default

_No arguments._

### STATUS_LESEN_WISCHERTASTER

Auslesen des Wischertasterstatus KWP2000: 0x23 ReadMemoryByAddress

_No arguments._

### SG_INIT

RLS_Initialisation KWP2000: $3D $00 $08 $20 $00 $01 $FF WriteMemoryByAddress

_No arguments._

### RLS_IDENT

KWP2000:  1. READ LEAR VERSION $21 $70 ReadDataByLocalIdentifier 2. LEAR VERSION <V6.2.0  -> $22 $16 $01 ReadDataByLocalIdentifier READ VERSION >=V6.2.0 -> $21 $A3 ReadDataByLocalIdentifier

_No arguments._

### STATUS_LESEN_RLS

KWP2000: $30 $5501 InputOutputControlByLocalID

_No arguments._

### C_AEI_LESEN_RLS

RLS Aenderungsindex der Codierdaten lesen KWP2000: $21 $A0 ReadDataByLocalIdentifier

_No arguments._

### C_FG_LESEN_RLS

RLS Fahrgestellnummer lesen KWP2000: $21 $A1 ReadDataByLocalIdentifier

_No arguments._

### C_AEI_SCHREIBEN_RLS

KWP2000: $3B $A0 WriteDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ANSDERUNGSINDEX | string | 2 DATA BYTES |

### C_FG_SCHREIBEN_RLS

KWP2000: $3B $A1 WriteDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FAHRGESTELLNR | string | 18 data bytes supported by RLS only 7 |

### C_AEI_AUFTRAG_RLS

KWP2000: $3B $A0 WriteDataByLocalIdentifier and $21 $A0 ReadDataByLocalIdentifier ANSDERUNGSINDEX examples: 31 32 (12) 61 62 (ab)

| Name | Type | Description |
| --- | --- | --- |
| ANSDERUNGSINDEX | string | 2 DATA BYTES Aenderungsindex max. 2-stellig ASCII inkl. Ziffern 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_FG_AUFTRAG_RLS

KWP2000: $3B $A1 WriteDataByLocalIdentifier and $21 $A1 ReadDataByLocalIdentifier FAHRGESTELLNR examples: 31 32 33 34 35 36 37 (1234567) 61 62 63 64 65 66 67(abcdefg)

| Name | Type | Description |
| --- | --- | --- |
| FAHRGESTELLNR | string | 18 data bytes supported by RLS only 7 |

### _LEAR_PLx_EOL_CONFIGURATION

Configuration for the LEAR End of Line KWP2000: $3B WriteDataByLocalIdentifier $7A RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| VARIANT_BYTE | string | Variant table Variant_table VARIANT_BYTE |
| SERIENNUMMER | string | serial number 9-stellig |
| AIF_FG_NR | string | Fahrgestellnummer 7-stellig |
| AIF_DATUM | string | Datum der SG-Programmierung in der Form TTMMJJ |
| AIF_ZB_NR | string | Zusammenbaunummer 7-stellig |

### READ_VARIANT

Lesen der Variante der Plattine KWP2000: $21 ReadDataByLocalIdentifier $6E RecordLocalId Modus  : Default

_No arguments._

### STEUERN_WASCHDUESE_AUSSENSPIEGEL

Schreiben die Waschduese und Aussenspiegel parameter KWP2000: $3B WriteDataByLocalIdentifier $79 RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_JWH_TIMER | unsigned int | Control the Jet Washer and Mirror Heater for the time passed in this parameter. Unit: Steps of 10 ms (milliseconds) Steuern der Waschduesen/Aussenspiegelheizung während die in diesem Parameter eingefuehrte Zeit Einheit: Stufen von 10 ms (MILLISEKUNDEN) |

### _EEPROM_INIT

Initialise the EEPROM KWP2000: $3B WriteDataByLocalIdentifier $7E RecordLocalId

| Name | Type | Description |
| --- | --- | --- |
| ACTION | string | Action to do with the EEPROM table Eeprom_Init_table ACTION_BYTE |

### _PERFORMANCE_ANALYSIS

Reading the Performing Analysis KWP2000: $21 ReadDataByLocalIdentifier $6C RecordLocalId Modus  : Default

_No arguments._

### STATUS_DWA_INTERN

Readout of the application status of the DWA KWP2000: $21 ReadDataByLocalIdentifier $A2 identifier of the DWA_STS

_No arguments._

### _READ_WAKEUP_REASON

Returns the last wake-up reason KWP2000: $21 ReadDataByLocalIdentifier $71 RecordLocalId

_No arguments._

### STEUERN_DWA_IRS_SELFTEST

Self Test of the INRS DWA KWP2000: $31 StartRoutineByLocalIdentifier $04 SelfTest $00 INRS DWA Modus  : Default

_No arguments._

### STEUERN_DWA_NG_SELFTEST

Self Test of the NG DWA KWP2000: $31 StartRoutineByLocalIdentifier $04 SelfTest $01 NG DWA Modus  : Default

_No arguments._

### STATUS_ALARMTRIGGER

Return the status of every trigger of the DWA KWP2000: $21 ReadDataByLocalIdentifier $A4 identifier of the STATUS_ALARMTRIGGER

_No arguments._

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

### HARTTEXTE

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

### VERBAUORTTABELLE

| ORT | ORTTEXT |
| --- | --- |
| 0x0100 | Batteriesensor |
| 0x0200 | Elektrische Wasserpumpe |
| 0x0300 | Generator 1 |
| 0x0350 | Generator 2 |
| 0x0400 | Schaltzentrum Lenksäule |
| 0x0500 | DSC Sensor-Cluster |
| 0x0600 | Nahbereichsradarsensor links |
| 0x0700 | Nahbereichsradarsensor rechts |
| 0x0800 | Funkempfänger |
| 0x0900 | Elektrische Lenksäulenverriegelung |
| 0x0A00 | Regen- Lichtsensor |
| 0xFFFF | unbekannter Verbauort |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

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
| 0xA128 | HARDWAREFEHLER_REGENSENSOR |
| 0xA129 | KEINE_OPTISCHE_INITIALISIERUNG_MÖGLICH |
| 0xA12A | ÜBERTEMPERATUR |
| 0xA12B | ÜBERSPANNUNG |
| 0xA12D | HARDWAREFEHLER_LICHTSENSOR |
| 0xA12E | KALIBRIERUNGSFEHLER_LICHTSENSOR |
| 0xA6C9 | WISCHER_FRONT_BLOCKIERT |
| 0xA6CA | WISCHER_STUFE_1_RELAIS |
| 0xA6CB | WISCHER_STUFE_2_RELAIS |
| 0xA6CD | WISCHER_HECK_BLOCKIERT |
| 0xA6CF | AUC_SENSOR |
| 0xA6DF | AUSSENSPIEGEL_HEIZUNG |
| 0xA6E0 | SITZHEIZUNG_FAHRER |
| 0xA6E1 | SITZHEIZUNG_BEIFAHRER |
| 0xA6E2 | ZV_ANTRIEB_HECKKLAPPE |
| 0xA6E4 | SENSOR_TANK_LINKS |
| 0xA6E5 | SENSOR_TANK_RECHTS |
| 0xA6E7 | Energiesparmode aktiv |
| 0xA730 | BISTABILES_RELAIS_1 |
| 0xA733 | DC_DC_WANDLER |
| 0xA868 | FRONTSCHEIBENHEIZUNG_RELAIS |
| 0xA869 | K_CAN_ID220_FRONTSCHHEIZUNG_UNGUELT |
| 0xA86A | FH_HINTEN_RELAIS |
| 0xA86B | SCHALTER_FH_HINTEN |
| 0xA86D | HECKSCHEIBENHEIZUNG_RELAIS |
| 0xA86E | UNTERSPANNUNG |
| 0xA86F | UEBERSPANNUNG |
| 0xA870 | K_CAN_ID220_FRONTSCHHEIZUNG_TIMEOUT |
| 0xC904 | K_CAN_LOW_LEITUNG |
| 0xC905 | K_CAN_HIGH_LEITUNG |
| 0xC907 | K_CAN_KOMMUNIKATION |
| 0xC90B | PT_CAN_KOMMUNIKATION |
| 0xC910 | PT_CAN_ID1B6_WAERMESTROM_MOTOR_TIMEOUT |
| 0xC911 | PT_CAN_ID1B6_WAERMESTROM_MOTOR_UNGUELTIG |
| 0xC912 | K_CAN_ID246_HECKSCHHEIZUNG_UNGUELT |
| 0xC913 | LIN_KOMMUNIKATION |
| 0xC914 | PT_CAN_ID2A6_BEDIENUNG_WISCHER_TIMEOUT |
| 0xC918 | K_CAN_ID1E7_SITHEIZUNG_FA_UNGUELT |
| 0xC91A | K_CAN_ID1E7_SITHEIZUNG_BF_UNGUELT |
| 0xC91E | K_CAN_ID_130_KLEMMENSTATUS_TIMEOUT  |
| 0xC91F | K_CAN_ID2C0_LCD-LEUCHTD_TIMEOUT |
| 0xC920 | K_CAN_ID2C0_LCD-LEUCHTD_UNGUELTIG |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Geschwindigkeit | km/h | high | unsigned int | - | 1 | 10 | 0 |
| 0x02 | BatterieSpannung | volt | high | unsigned int | - | 1850 | 102400 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9315 | ALARM_INNENRAUMSENSOR |
| 0x9317 | ALARM_KLAPPENKONTAKT_MOTORHAUBE |
| 0x9318 | ALARM_KLAPPENKONTAKT_KOFFERRAUM |
| 0x9319 | ALARM_KLAPPENKONTAKT_FAHRERTUER_VORNE |
| 0x931A | ALARM_KLAPPENKONTAKT_BEIFAHRERTUER_VORNE |
| 0x931B | ALARM_KLAPPENKONTAKT_CLUBDOOR |
| 0x9324 | PANIKALARM |
| 0x9328 | ALARM_NEIGUNGSSENSOR |
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
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | DWA_Historienspeicher_Triggers | DWA_Historienspeicher_Date | DWA_Historienspeicher_Windows | 0x19 |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Status Türkontakt Fahrer vorne | 0/1 | low | 0x0001 | - | 1 | 1 | 0 |
| 0x02 | Status Türkontakt Fahrer hinten | 0/1 | low | 0x0002 | - | 1 | 1 | 0 |
| 0x03 | Status Türkontakt Beifahrer vorne | 0/1 | low | 0x0004 | - | 1 | 1 | 0 |
| 0x04 | Status Türkontakt Beifahrer hinten | 0/1 | low | 0x0008 | - | 1 | 1 | 0 |
| 0x05 | Status Motorhaubenkontakt | 0/1 | low | 0x0010 | - | 1 | 1 | 0 |
| 0x06 | Status Heckklappeenkontakt | 0/1 | low | 0x0020 | - | 1 | 1 | 0 |
| 0x07 | Status Ultraschallsensor (USIS) | 0/1 | low | 0x0040 | - | 1 | 1 | 0 |
| 0x08 | Status Neigungsgeber | 0/1 | low | 0x0080 | - | 1 | 1 | 0 |
| 0x09 | Unbekannter Alarmtrigger 1 | 0/1 | low | 0x0100 | - | 1 | 1 | 0 |
| 0x0A | Unbekannter Alarmtrigger 2 | 0/1 | low | 0x0200 | - | 1 | 1 | 0 |
| 0x0B | Unbekannter Alarmtrigger 3 | 0/1 | low | 0x0400 | - | 1 | 1 | 0 |
| 0x0C | Unbekannter Alarmtrigger 4 | 0/1 | low | 0x0800 | - | 1 | 1 | 0 |
| 0x0D | Unbekannter Alarmtrigger 5 | 0/1 | low | 0x1000 | - | 1 | 1 | 0 |
| 0x0E | Unbekannter Alarmtrigger 6 | 0/1 | low | 0x2000 | - | 1 | 1 | 0 |
| 0x0F | Unbekannter Alarmtrigger 7 | 0/1 | low | 0x4000 | - | 1 | 1 | 0 |
| 0x10 | Unbekannter Alarmtrigger 8 | 0/1 | low | 0x8000 | - | 1 | 1 | 0 |
| 0x11 | Datum | Month | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | Datum | Day | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | Datum | Hour | - | unsigned char | - | 1 | 1 | 0 |
| 0x14 | Datum | Minutes | - | unsigned char | - | 1 | 1 | 0 |
| 0x15 | Position Fensterheber Fahrerseite vorne | 0-n | low | 0x0003 | PowerWindowDriver_Status | 1 | 1 | 0 |
| 0x16 | Position Fensterheber Beifahrerseite vorne | 0-n | low | 0x0030 | PowerWindowPassenger_Status | 1 | 1 | 0 |
| 0x17 | Position Schiebedach | 0-n | low | 0x0300 | SHD_Status | 1 | 1 | 0 |
| 0x18 | Neigungspostion Schiebedach | 0-n | low | 0x3000 | SHD_Tilt_Status | 1 | 1 | 0 |
| 0x19 | Aussentemperatur | ºC | - | unsigned char | - | 0.5 | 1 | -40 |
| 0xXY | Unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC801 | ERR_SWITCH_RESET_SVAUS |
| 0xC802 | ERR_SWITCH_RESET_WAKEUP |
| 0xC803 | ERR_SWITCH_RESET_NOT_SLEEP |
| 0xC804 | ERR_SWITCH_OFF_STROMZWEIG |
| 0xC805 | ERR_SWITCH_OFF_WAKEUP |
| 0xC806 | ERR_SWITCH_OFF_NOT_SLEEP |
| 0xC807 | ERR_SWITCH_OFF_TRANSPORT |
| 0xC808 | ERR_POWERDOWN_NOT_SLEEP |
| 0xC809 | ERR_POWERDOWN_WAKEUP |
| 0xC80A | DIAG_CAN_KOMMUNIKATION |
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
| default | 0x01 | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Relativzeit | s | high | signed long | - | 1 | 1 | 0 |
| 0xXY | Unbekannte UW | 1 | - | unsigned char | - | 1 | 1 | 0 |

### ENERGYSAVING

| E_MODE | NAME | TEXT |
| --- | --- | --- |
| 0x00 | ENERGY_MODE_AUS | Energiesparmode aus |
| 0x01 | ENERGY_MODE_PRODUCTION | Energiesparmode Produktionsmode |
| 0x02 | ENERGY_MODE_SHIPMENT | Energiesparmode Transportmode |
| 0x04 | ENERGY_MODE_REPAIR_SHOP | Energiesparmode Werkstattmode |
| 0x08 | ERROR | falscher Eingabewert |

### EEPROM_INIT_TABLE

| ACTION_NUMBER | ACTION_BYTE | ACTION_NAME |
| --- | --- | --- |
| 0x00 | CODING | default Codierung |
| 0x01 | DTC | Fehlerspeicher löschen |
| 0x02 | ALL | EEPROM vollständig löschen |
| 0xXY | -- | -- |

### VARIANT_TABLE

| VARIANT_NUMBER | VARIANT_BYTE | VARIANT_NAME |
| --- | --- | --- |
| 0x00 | LOW | LOW-Variante |
| 0x01 | HIGH | HIGH-Variantw |
| 0x02 | HIGH_MSA | HIGH-Variante mit MSA |
| 0xXY | -- | -- |

### DWA_STATUS_TABELLE

| STAT_DWA_NUMBER | STAT_DWA_NAME |
| --- | --- |
| 0x00 | DWA entschärft |
| 0x01 | DWA schärft |
| 0x02 | DWA geschärft |
| 0x03 | DWA entschärfen |
| 0x04 | DWA Alarm |
| 0x05 | DWA Pause nach Alarm |
| 0x06 | DWA Transportmode |
| 0x07 | DWA Werkstattmode |
| 0x08 | DWA Fertigungsmode |
| 0x09 | DWA geschärft - USIS und Neigungsgeber deaktiviert durch Anwender |
| 0x0D | DWA Panikalarm mode |
| 0x0F | DWA geschärft - USIS und Neigungsgeber nicht aktiv |
| 0x10 | DWA geschärft - USIS nicht aktiv |
| 0x11 | DWA geschärft - Neigungsgeber nicht aktiv |
| 0xXY | -- |

### WAKEUPREASON_TABLE

| WAKEUP_NUMBER | WAKEUP_REASON_NAME |
| --- | --- |
| 0x00 | NICHT |
| 0x01 | PT_WAKE_UP |
| 0x02 | DWA_NG |
| 0x03 | DWA_INRS |
| 0x04 | TRUNK_CONTACT |
| 0x05 | TRUNK_BUTTON |
| 0x06 | K_CAN_BUS |
| 0xXY | -- |

### DWA_HISTORIENSPEICHER_TRIGGERS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F | 0x10 |

### DWA_HISTORIENSPEICHER_DATE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x11 | 0x12 | 0x13 | 0x14 |

### DWA_HISTORIENSPEICHER_WINDOWS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x15 | 0x16 | 0x17 | 0x18 |

### POWERWINDOWDRIVER_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Fenster geschlossen |
| 0x0001 | Position mittig |
| 0x0002 | Fesnter offen |
| 0x0003 | ungültiges Signal |
| 0xXY | ungültiges Signal |

### POWERWINDOWPASSENGER_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Fenster geschlossen |
| 0x0010 | Position mittig |
| 0x0020 | Fesnter offen |
| 0x0030 | ungültiges Signal |
| 0xXY | ungültiges Signal |

### SHD_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | SHD nicht offen |
| 0x0100 | Position mittig |
| 0x0200 | SHD offen |
| 0x0300 | ungültiges Signal |
| 0xXY | ungültiges Signal |

### SHD_TILT_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | SHD nicht in Position gehoben |
| 0x1000 | Position mittig |
| 0x2000 | SHD in Position gehoben |
| 0x3000 | ungültiges Signal |
| 0xXY | ungültiges Signal |

### FUNKTIONALEADRESSE_LEAR

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xE9 | K-CAN | Karosserie-CAN Steuergeräte |
| 0xEA | PT-CAN | Powertrain-CAN Steuergeräte |
| 0xEB | SI | Sicherheits-BUS Steuergeräte |
| 0xEC | MOST | MOST-BUS Steuergeräte |
| 0xED | BOS oder CBS | Bedarfsorientierter Service |
| 0xEE | PERSONAL | Personalisierung |
| 0xEF | ALL | alle Steuergeräte |

### DIGITALINPUTNRTEXTE

| DINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | HECKWISCHER_2_RSK | Heckscheibenwischer 2 in Parkposition          	.PIN 27, PORT P1.4 | EIN RSK: 0, AUS RSK: 1 |
| 0x01 | MSA_TASTER | Taster Motor Start/Stop Automatik           .PIN 29, PORT P1.6 | KEINE BETÄTIGUNG: 0, TASTER GEDRÜCKT: 1 |
| 0x02 | SPORT_TASTER | Taster SPORT                           .PIN 30, PORT P1.7 | KEINE BETÄTIGUNG: 0, TASTER GEDRÜCKT: 1 |
| 0x03 | HANDBREMSE_KONTAKT | Schalter Handbremse                       .PIN 32, PORT P1.9 | KEINE BETÄTIGUNG (Handbremse Aus): 0, TASTER GEDRÜCKT (Handbremse Ein): 1 |
| 0x04 | FRONTWISCHER_RSK | Frontscheibenwischer in Parkposition              .PIN 33, PORT P1.10 | EIN RSK: 0, AUS RSK: 1 |
| 0x05 | HECKWISCHER_RSK | Heckscheibenwischer in Parkposition               .PIN 34, PORT P1.11 | EIN RSK: 0, AUS RSK: 1 |
| 0x06 | PTWAKE_IN | PT CAN Wake-Up Input Interrupt line    .PIN 35, PORT P1.12 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x07 | FRONTSCHEIBENHEIZUNG_DIAG | Diagnose Relais Frontscheibenheizung    .PIN 79, PORT P3.10 | OK : 0, FEHLER: 1 |
| 0x08 | KL30G_F2_OFF_DIAG | Diagnose Bistabiles Relais aus MSA     	.PIN 104, PORT P4.10 | AUS: 0, EIN: 1 |
| 0x09 | KL30G_F2_ON_DIAG | Diagnose Bistabiles Relais ein MSA     	.PIN 107, PORT P4.13 | AUS: 0, EIN: 1 |
| 0x0A | HECKWISCHER_2_DIAG | Diagnose Heckscheibenwischer 2     			.PIN 113, PORT P5.3 | AUS: 0, EIN: 1 |
| 0x0B | HECKSCHEIBENHEIZUNG_DIAG | Diagnose Relais Heckscheibenheizung     .PIN 124, PORT P5.14 | AUS: 0, EIN: 1 |
| 0x0C | HECKKLAPPE_TASTER_SEK | Schalter Entriegelung zweite Splitdoor   	.PIN 129, PORT P6.0 | KEINE BETÄTIGUNG: 0, TASTER GEDRÜCKT: 1 |
| 0x0D | HECKKLAPPE_TASTER | Taster Heckklappe öffnen                .PIN 130, PORT P6.1 | KEINE BETÄTIGUNG: 0, TASTER GEDRÜCKT: 1 |
| 0x0E | HECKKLAPPE_KONTAKT | Heckklappenkontakt                       .PIN 131, PORT P6.2 | GESCHLOSSEN: 0, OFFEN: 1 |
| 0x0F | ULTRASCHALLSENSOR | Ultraschallsensor                      .PIN 133, PORT P6.4 | AUS oder NICHT AKTIV: 0 (100 ms.), EIN (1000 ms) oder AKTIV: 1 |
| 0x10 | DSC_TASTER | Taster ASC/DSC                         .PIN 134, PORT P6.5 | KEINE BETÄTIGUNG: 0, TASTER GEDRÜCKT: 1 |
| 0x11 | WASCHWASSERSTAND | Sensor Waschwasser                    .PIN 135, PORT P6.6 | Normaler Füllstand: 0, Zu niedriger Füllstand: 1 |
| 0x12 | KUEHLMITTELSTAND | Sensor Kühlmittelstand                   .PIN 136, PORT P6.7 | Normaler Füllstand: 0, Zu niedriger Füllstand: 1 |
| 0x13 | KIPPSENSOR | Status Neigungsgeber                     .PIN 139, PORT P6.10 | NICHT AKTIV: 0, AKTIV: 1 (500 ms.) |
| 0x14 | KL15_UC_HW_INPUT | KL15 physikalisch                     		.PIN 144, PORT P6.15 | KL15 OFF: 0, KL15 ON: 1 |
| 0x15 | FH_BFTH_ZU_DIAG | Diagnose Fensterheber hinten zu    		.SPI_relays_feedback.OUT0 | AUS: 0, EIN: 1 |
| 0x16 | FH_BFTH_AUF_DIAG | Diagnose Fensterheber hinten auf 		.SPI_relays_feedback.OUT1 | AUS: 0, EIN: 1 |
| 0x17 | FRONTWISCHER_GESCHW_1_DIAG | Diagnose Frontscheibenwischer Geschwindigkeitsrelais 1    .SPI_relays_feedback.OUT2 | AUS: 0, EIN: 1 |
| 0x18 | HECKSCHEIBENHEIZUNG_DIAG | Diagnose Heckscheibenheizung     		.SPI_relays_feedback.OUT3 | AUS: 0, EIN: 1 |
| 0x19 | FRONTWISCHER_GESCHW_2_DIAG | Diagnose Frontscheibenwischer Geschwindigkeitsrelais 2    .SPI_relays_feedback.OUT4 | AUS: 0, EIN: 1 |
| 0x1A | SIRENE_DWA_DIAG | Diagnose Alarmstatus                 .SPI_relays_feedback.OUT5 | AUS: 0, EIN: 1 |
| 0x1B | BISTABILRELAIS_ON_2_DIAG | Diagnose Bistabiles Relais 2 ein          .SPI_relays_feedback.OUT6 | AUS: 0, EIN: 1 |
| 0x1C | GEBLAESEMOTOR_RELAIS_DIAG | Diagnose Relais Motorlüfter          	.SPI_relays_feedback.OUT7 | AUS: 0, EIN: 1 |
| 0xFF | UNKNOWN | unbekannter digitaler Eingang |  |

### DIGITALOUTPUTNRTEXTE

| DOUTNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | ZV_AUSGANG | Ausgang Zentralverriegelung | Aus: 0, Entriegeln: 1, Selektiv Entriegeln: 3, Verriegeln: 10, Entsichern: 11, Sichern: 14 |
| 0x01 | ZV_ENTRIEGELN_RELAIS | Zentralverriegelung Relais entriegeln           .PIN 1, PORT P0.0 | AUS: 0, EIN: 1 |
| 0x02 | ZV_VERRIEGELN_RELAIS | Zentralverriegelung Relais verriegeln             .PIN 2, PORT P0.1 | AUS: 0, EIN: 1 |
| 0x03 | ZV_ZENTRALSICHERN_RELAIS | Zentralverriegelung Relais sichern           .PIN 3, PORT P0.2 | AUS: 0, EIN: 1 |
| 0x04 | ZV_VERRIEGELN_FAHRERTUERE_RELAIS | Zentralverriegelung Relais verriegeln Fahrer      .PIN 4, PORT P0.3 | AUS: 0, EIN: 1 |
| 0x05 | HECKWISCHER | Heckscheibenwischer                             .PIN 7, PORT P0.4 | AUS: 0, EIN: 1 |
| 0x06 | SRA | Scheinwerferreinigungsanlage                      .PIN 9, PORT P0.6 | AUS: 0, EIN: 1 |
| 0x07 | KLIMAKOMPRESSOR | Klimakompressor                     .PIN 11, PORT P0.8 | AUS: 0, EIN: 1 |
| 0x08 | DUO_WASCHERPUMPE_AUSGANG | Ausgang Waschwasserpumpe | Keine Aktion: 0 oder 3, Vorderes Waschen: 1, Hinteres Waschen: 2 |
| 0x09 | DUO_WASCHERPUMPE_VORNE | Waschwasserpumpe vorne                      .PIN 12, PORT P0.9 | AUS: 0, EIN: 1 |
| 0x0A | DUO_WASCHERPUMPE_HINTEN  | Waschwasserpumpe hinten                      	.PIN 13, PORT P0.10 | AUS: 0, EIN: 1 |
| 0x0B | BISTABILRELAIS_ON | Bistabiles Relais ein                      .PIN 14, PORT P0.11 | AUS: 0, EIN: 1 (5 ms < Tein < 1s), Ausruhen der Zeit zwischen Pulses: 1s |
| 0x0C | BISTABILRELAIS_OFF | Bistabiles Relais aus                     .PIN 18, PORT P0.13 | AUS: 0, EIN: 1 (5 ms < Tein < 1s), Ausruhen der Zeit zwischen Pulses: 1s |
| 0x0D | SCHLAFEN_STRATEGIE | Schlafen-Strategie                         .PIN 19, PORT P0.14 | DISABLE: 0, ENABLE: 1 |
| 0x0E | KL15_EJB | KL15 EJB (Relais)            .PIN 20, PORT P0.15 | AUS: 0, EIN: 1 |
| 0x0F | USIS | Aktivierung Spannungsversorgung USIS    .PIN 23, PORT P1.2 | LOW: 0, HIGH: 1 (12 V im Sensor) |
| 0x10 | GANG_RUCKWAERTS | Status Rückwärtsgang für EC-Spiegel      .PIN 24, PORT P1.3 | AUS: 0, EIN: 1 |
| 0x11 | PORT_AUCSENSOR | Aktivierung AUC-Sensor                      .PIN 42, PORT P2.3 | ENABLE: 0, DISABLE: 1 |
| 0x12 | HECKKLAPPE_MOTOR | Öffnen Heckklappenkontakt                      .PIN 57, PORT P2.10 | AUS: 0, EIN: 1 |
| 0x13 | KL30SW_ENABLE | KL30 SW-Aktivierung                         .PIN 59, PORT P2.12 | DISABLE: 0, ENABLE: 1 |
| 0x14 | PTWAKE_OUT | PT CAN Wake-Up Output Interrupt line   .PIN 62, PORT P2.15 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x15 | FRONTSCHEIBENHEIZUNG | Relais Frontscheibenheizung              .PIN 100, PORT P4.6 | AUS: 0, EIN: 1 |
| 0x16 | ULTRASCHALL_SIRENE_ENABLE | Aktivierung interene Überwachung / Sirene.PIN 101, PORT P4.7 | DISABLE: 0, ENABLE: 1 |
| 0x17 | KL30G_F2_OFF | Bistabiles Relais aus MSA                .PIN 103, PORT P4.9 | AUS: 0, EIN: 1 (5 ms < Tein < 1s), Ausruhen der Zeit zwischen Pulses: 1s |
| 0x18 | KL30G_F2_ON | Bistabiles Relais ein MSA                 .PIN 104, PORT P4.11 | AUS: 0, EIN: 1 (5 ms < Tein < 1s), Ausruhen der Zeit zwischen Pulses: 1s |
| 0x19 | HECKWISCHER_2 | Heckscheibenwischer 2                           .PIN 114, PORT P5.4 | AUS: 0, EIN: 1 |
| 0x1A | HECKKLAPPE_2_MOTOR | Öffnen Heckklappe 2                    .PIN 118, PORT P5.8 | AUS: 0, EIN: 1 |
| 0x1B | BISTABILRELAIS_OFF_2 | Bistabiles Relais aus 2                   .PIN 123, PORT P5.13 | AUS: 0, EIN: 1 (5 ms < Tein < 1s), Ausruhen der Zeit zwischen Pulses: 1s |
| 0x1C | FH_BFTH_ZU | Fensterheber hinten zu              		.SPI_relays_out.OUT0 | AUS: 0, EIN: 1 |
| 0x1D | FH_BFTH_AUF | Fensterheber hinten auf           		.SPI_relays_out.OUT1 | AUS: 0, EIN: 1 |
| 0x1E | FRONTWISCHER_GESCHW_1 | Frontscheibenwischer Geschwindigkeitsrelais 1              .SPI_relays_out.OUT2 | AUS: 0, EIN: 1 |
| 0x1F | HECKSCHEIBENHEIZUNG | Heckscheibenheizung                     .SPI_relays_out.OUT3 | AUS: 0, EIN: 1 |
| 0x20 | FRONTWISCHER_GESCHW_2 | Frontscheibenwischer Geschwindigkeitsrelais 2              .SPI_relays_out.OUT4 | AUS: 0, EIN: 1 |
| 0x21 | SIRENE_DWA | Aktivierung Sirene                       .SPI_relays_out.OUT5 | AUS: 0, EIN: 1 |
| 0x22 | BISTABILRELAIS_ON_2 | Bistabiles Relais ein 2                    .SPI_relays_out.OUT6 | AUS: 0, EIN: 1 (5 ms < Tein < 1s), Ausruhen der Zeit zwischen Pulses: 1s |
| 0x23 | GEBLAESEMOTOR_RELAIS | Relais Motorlüfter                    	.SPI_relays_out.OUT7 | AUS: 0, EIN: 1 |
| 0xFF | UNKNOWN | unbekannter digitaler Ausgang |  |

### ANALOGINPUTNRTEXTE

| AINNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | HECKKLAPPE_2_MOTOR_DIAG | Diagnose Öffnen Heckklappe 2          .PIN 72, PORT P3.5 | OPEN-LOAD: 0....60(0x3C), OK: 61(0x3D).....920(0x398), SHORT-GND: 921(0x399)....1023(0x3FF) |
| 0x01 | BATTERIE_SPANNUNG | Spannungsversorgung                        .PIN 73, PORT P3.6 | 0(0 V)...0x3FF(1023)(18.50 V) (HEX);(HEX)=Vbat*5530/100  [V] |
| 0x02 | FH_HINTEN_SCHALTER | Taster Fensterheber hinten               .PIN 74, PORT P3.7 | DOWNAUTO(2):0x08F..0x15A,DOWNMANUAL(1):0x15B..0x23B,UPAUTO(4):0x23C..0x2F4,UPMANUAL(3):0x2F5..0x3B7,OFF(0):0x3B8..0x3FF |
| 0x03 | TANK_FA_FUELLSTAND | Tankgeber links            .PIN 77, PORT P3.8 | 0...0x3FF(1023); (HEX)=(8388,6*Vbat*RS)/(18,12+151*RS); Full:20 Ohm, Empty: 475 Ohm (40 ltr.) or 295 Ohm (50 ltr.), SHORT-GND: < 10 Ohm, OPEN-LOAD: > 550 Ohm (40 ltr.) or 350 Ohm (50 ltr.) |
| 0x04 | TANK_BF_FUELLSTAND | Tankgeber rechts           .PIN 78, PORT P3.9 | 0...0x3FF(1023); (HEX)=(8388,6*Vbat*RS)/(18,12+151*RS); Full:20 Ohm, Empty: 475 Ohm (40 ltr.) or 295 Ohm (50 ltr.), SHORT-GND: < 10 Ohm, OPEN-LOAD: > 550 Ohm (40 ltr.) or 350 Ohm (50 ltr.) |
| 0x05 | HECKBREMSBELAGVERSCHLEISS | Verschleiss Bremsbelag hinten                         .PIN 80, PORT P3.11 | STAGE 0(<5 Ohm): 0...203(0xCB), STAGE 1(470 Ohm ± 10%): 204(0xCC)...982(0x3D6) (Vbatt>=10.5V) or 204(0xCC)...818(0x332) (Vbatt<10.5V), STAGE 12(> 100 kOhm): >982(0x3D6) (Vbatt>=10.5V) or >818(0x332) (Vbatt<10.5V) |
| 0x06 | FRONTBREMSBELAGVERSCHLEISS | Verschleiss Bremsbelag vorne                        .PIN 81, PORT P3.12 | STAGE 0(<5 Ohm): 0...203(0xCB), STAGE 1(470 Ohm ± 10%): 204(0xCC)...982(0x3D6) (Vbatt>=10.5V) or 204(0xCC)...818(0x332) (Vbatt<10.5V), STAGE 12(> 100 kOhm): >982(0x3D6) (Vbatt>=10.5V) or >818(0x332) (Vbatt<10.5V) |
| 0x07 | HECKKLAPPE_MOTOR_DIAG | Diagnose Öffnen Heckklappe            .PIN 82, PORT P3.13 | OPEN-LOAD: 0....60(0x3C), OK: 61(0x3D).....920(0x398), SHORT-GND: 921(0x399)....1023(0x3FF) |
| 0x08 | WASCHDUESENHEIZUNG_AUSSENSPIEGEL_DIAG | Diagnose Spritzdüsen- und Aussenspiegelheizung  .PIN 84, PORT P3.15 | OPEN-LOAD: 0....60(0x3C), OK: 61(0x3D).....920(0x398), SHORT-GND: 921(0x399)....1023(0x3FF) |
| 0x09 | AUCSENSOR | AUC Sensor PWM                         .PIN 17, PORT P0.12 | AUCSENSOR_PERIOD: 0..131 ms, AUCSENSOR_DUTY_CYCLE: 0..100 %; NORMAL: Period=20 ms (50 Hz) Duty-cycle=5%-95%, SHORT-GND: Period=0 Duty-cycle=0, OPEN-LOAD: Duty-cycle=0xFFFF |
| 0x0A | SITZHEIZUNG_FA_DIAG | Diagnose Sitzheizung Fahrer          .PIN 21, PORT P1.0 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x0B | SITZHEIZUNG_BF_DIAG | Diagnose Sitzheizung Beifahrer       .PIN 22, PORT P1.1 | NICHT AKTIV: 0, AKTIV: 1 |
| 0x0C | DCDC_MSA | Diagnose MSA DC/DC Converter PWM      .PIN 94, PORT P4.0 | DCDC_MSA_PERIOD: 0..131 ms, DCDC_MSA_DUTY_CYCLE: 0..100 %; NORMAL: Period=0 Duty-cycle=0, OPEN-LOAD: Duty-cycle=0xFFFF, OVERTEMPERATURE: Period= 77 ms(13 Hz) Duty-cycle=20%-80% |
| 0xFF | UNKNOWN | unbekannter analoger Ausgang |  |

### ANALOGOUTPUTNRTEXTE

| AOUTNR | NAME | TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | SPORT_LED_PWM | Sport LED                              		.PIN 31, PORT P1.8 | 0...100 % |
| 0x01 | LED_HEARTBEAT_PWM | DWA-LED Tastverhältnis PWM-Signal für Heartbeat-Simulation .PIN 43,PORT P2.4 | 0...100 % |
| 0x02 | LED_DWA_PWM | DWA-LED Tastverhältnis PWM-Signal                .PIN 44, PORT P2.5 | OFF: 0, FLASHING: 1 (F=0.5 Hz. 50 ms ON), BLINKING: 2 (F=2 Hz. 250 ms ON), ON: 3 |
| 0x03 | SITZHEIZUNG_FA_PWM | Sitzheizung Fahrer Tastverhältnis PWM-Signal      .PIN 45, PORT P2.6 | OFF: 0 (40ms ON), STATE1: 1 (32ms ON, 8ms OFF), STATE2: 2 (20ms ON, 20ms OFF), STATE3: 3 (12ms ON, 28ms OFF) |
| 0x04 | SITZHEIZUNG_BF_PWM | Sitzheizung Beifahrer Tastverhältnis PWM-Signal   .PIN 46, PORT P2.7 | OFF: 0 (40ms ON), STATE1: 1 (32ms ON, 8ms OFF), STATE2: 2 (20ms ON, 20ms OFF), STATE3: 3 (12ms ON, 28ms OFF) |
| 0x05 | WASCHDUESENHEIZUNG_AUSSENSPIEGEL | Spritzdüsen- und Aussenspiegelheizung     .PIN 58, PORT P2.11 | AUS: 0, EIN: 1 |
| 0x06 | MSA_LED_PWM | MSA LED                                		.PIN 112, PORT P5.2 | 0...100 % |
| 0xFF | UNKNOWN | unbekannter analoger Ausgang |  |
