# CAS.PRG

## General

|  |  |
| --- | --- |
| File | CAS.PRG |
| Type | PRG |
| Jobs | 166 |
| Tables | 23 |
| Origin | BMW EI-61 Martin Kaltenbrunner |
| Revision | 7.000 |
| Author | SiemensVDO SV_C_BC_P3_PE_SW51 Lohberger, SiemensVDO SV_C_BC_P3_PE_SW51 Vaisman, SiemensVDO SV_C_BC_P3_PE_SW51 Palamari, SiemensVDO SV_C_BC_P3_PE_SW51 Tutsch |
| ECU Comment | Keine Bemerkung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAS  |  |  |
| ORIGIN | string | BMW EI-61 Martin Kaltenbrunner |  |  |
| REVISION | string | 7.000 |  |  |
| AUTHOR | string | SiemensVDO SV_C_BC_P3_PE_SW51 Lohberger, SiemensVDO SV_C_BC_P3_PE_SW51 Vaisman, SiemensVDO SV_C_BC_P3_PE_SW51 Palamari, SiemensVDO SV_C_BC_P3_PE_SW51 Tutsch |  |  |
| COMMENT | string | Keine Bemerkung  |  |  |
| PACKAGE | string | 1.29 |  |  |
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

### SG_VARIANTE_LESEN

Auslesen der SG-Variante auf Basis des Jobs Hardware Referenz lesen KWP2000: $22   ReadDataByCommonIdentifier $2502 HWREF oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### STATUS_CAS_DIAGNOSE

All Inputs Read KWP2000: $30 InputOutputControlByLocalIdentifier LocalIdentifier=0x01 $01 ReportCurrentState Modus   : Default

_No arguments._

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

### STATUS_ELV_AUTHENTISIERUNG

aktueller Status "ELV-Authentisierung" KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $05 Modus   : Default

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

### STATUS_EWS

aktueller Status "EWS4 key" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC000 Modus   : Default Zurücklesen verschiedener interner Stati für EWS4

_No arguments._

### STATUS_EWS4_SK

aktueller Status "EWS4 secret keys" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC002 Modus   : Default Lesen des SecretKey des Server (CAS) sowie Client (DME) für EWS4

_No arguments._

### STATUS_EWS4_KEY

aktueller Status "EWS4 key" KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC000 Modus   : Default

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

### STATUS_SCHLUESSEL_BATTERIEZUSTAND

1 Byte KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $22 Modus   : Default

_No arguments._

### STATUS_SYSTEM_FEHLER_KLSTRG

1 Byte KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $24 Modus   : Default

_No arguments._

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

### STATUS_SCHLUESSEL_FREI_GESPERRT

aktuelle Transponder-Daten KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $40-$49 Modus   : Default

_No arguments._

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

### STATUS_FZG_TYP

11 Byte "Fahrzeug-Type" lesen KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=$1011 Modus  :  Default

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
| SET_KL30X_ON | unsigned char | Bereich 0/1 ======> Byte5, Bit2 |
| SET_KL30X_OFF | unsigned char | Bereich 0/1 ======> Byte5, Bit3 |
| SET_KL30G_ON | unsigned char | Bereich 0/1 ======> Byte5, Bit4 |
| SET_KL30G_OFF | unsigned char | Bereich 0/1 ======> Byte5, Bit5 |
| SET_KLR_ON | unsigned char | Bereich 0/1 ======> Byte5, Bit6 |
| SET_KLR_OFF | unsigned char | Bereich 0/1 ======> Byte5, Bit7 |

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

### STEUERN_ELV_AUTHENTISIERUNG

Schreibt 4 Byte "ELV-Authentisierung"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $05 Modus  : Default

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

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=$C001 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 MODE-strings vgl.: table STEUERN_EWS4_MODE TEXT |
| DATA | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

### STEUERN_EWS4_KEY

Schreibt 64 Byte EWS key  KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=$C000 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "0x11,0x22,0x33,0x44..." ======> Byte0-63 |

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

### AKTUALISIEREN_CHIP_CARD_DATEN

Schreibt 1 Byte  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $23 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CHIP_CARD_DATA | unsigned char | Bereich: 0-255 ======> Byte0 |

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
| S_DIAG_STARTINIT | unsigned char | Bereich 0/1 ======> Byte0,Bit5 |
| S_DIAG_DIS_CYA | unsigned char | Bereich 0/1 ======> Byte0,Bit6 |

### STEUERN_CMD_READ_PAGE_TRSP

Schreibt 1 Byte "Transponder Page"  KWP 2000: $3B WriteDataByLocalIdentifier LocalIdentifier $29 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| PAGE_NUMMER | unsigned char | "Page": 0-7,0xFF,"WUP": 0xFE Diagnosed, 4 Pages: 0xFD ======> Byte0 |

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
| DEALER_ORG | string | "HO-Codierung" ======> Byte0-4 |
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

### C_C_AUFTRAG_CAS

Codierd schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $1000 - $3EFF CodingDataSet KWP2000: $22   ReadDataByCommonIdentifier $1000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskend) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Byted (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortd (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierd Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_LESEN_CAS

Codierd lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $1000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskend) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Byted (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortd (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierd Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_SCHREIBEN_CAS

Codierd schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $1000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskend) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Byted (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortd (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierd Byte 21+Anzahl Daten: ETX (0x03) |

### ISTUFE_LESEN_CAS

I_Stufe lesen KWP2000: $22   ReadDataByCommonIdentifier $100B Modus  : Default

_No arguments._

### ISTUFE_SCHREIBEN_CAS

I_Stufe schreiben KWP2000: $2E   WriteDataByCommonIdentifier $100B Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ISTUFE | string |  |

### STATUS_CBS_VERSION

I_Stufe lesen KWP2000: $22   ReadDataByCommonIdentifier $1014 Modus  : Default

_No arguments._

### STEUERN_CBS_VERSION

I_Stufe schreiben KWP2000: $2E   WriteDataByCommonIdentifier $1014 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KEY_VARIANT | unsigned int | "Vaues": 0-65535 ======> Byte0-1 |
| CBS_VERSION | unsigned char | "Values":  0-255 ======> Byte2 |
| CC_CONSISTENCE | unsigned char | "Values": 0xAA ======> Byte3 |

### SDIAG

Universaler Diagnosebefehl Speziell fuer Tools SDIAG vom SIEMENS VDO Regensburg entwickelt KWP2000: $XX Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Der Binaerbuffer hat folgenden Aufbau Byte 0              : SID Byte 1              : Daten |

### STATUS_CC_DATEN_ARG

Lesen von 32 Byte "CC-Daten" KWP 2000: $31 StartRoutineByLocaldentifier $25 READ_CC_DATEN_ARG Local=0x00 - 0x19 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR_CC_DATEN | int | Werte: 0x00...0x19 ===>Byte0 |

### ELV_IDENT

KWP 2000: $21 ReadDataByLocaldentifier Local=$05 Modus   : Default

_No arguments._

### STATUS_FNDCOM

3 Byte des EEPROM FNDCOM_Id Block KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $61 Modus   : Default

_No arguments._

### STEUERN_FNDCOM

Schreibt  3Byte im EEPROM-Block FNDCOM_Id  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $61 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FNDCOM_ID | string | FNDCOM_ID: z.B. "0x00,0x00,0x55,0xAA" ======> Byte0-2 |

### STATUS_AUTHENT_FNDCOM

1 Byte des Authentisierung des FNDCOM KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $62 Modus   : Default

_No arguments._

### STEUERN_FNDCOM_ANLERNEN

KWP2000: $31 StartRoutineByLID LocalIdentifier $26 00 XX Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FNDCOM_ZEIT | int | Fenster Zeit 0 bis 255 Sekunden" |

### STATUS_FNDCOM_FUNKTION

KWP2000: $31 StartRoutineByLID LocalIdentifier $26 00 XX Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FNDCOM_ZEIT | int | Fenster Zeit 0 bis 255 Sekunden |

### STATUS_RDU

Infospeicher lesen (alle Info-Meldungen) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory Infospeicher lesen detail (hier 0x9810) KWP2000: $22 ReadDataByCommonIdentifier $20XX dtcShadowMemoryEntry, wobei XX = Ort des RDU-INFO-Eintrags Liest Datum/Urzeit zum INFO_Eintrags 0x9810 KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $27

_No arguments._

### STATUS_ELV_WERTE

KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $7A Modus   : Default

_No arguments._

### STEUERN_ELVCOUNTER_CAS_LOESCHEN

Loeschen EscapeCounter von CAS KWP 2000: $21 $3B ReadWriteDataByLocalIdentifier LocalIdentifier $79 Modus   : Default

_No arguments._

### STEUERN_ELVCOUNTER_ELV_LOESCHEN

Loeschen EscapeCounter von ELV KWP 2000: $21 $3B ReadWriteDataByLocalIdentifier LocalIdentifier $79 Modus   : Default

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
| 0xD904 | K_CAN_Leitungsfehler |
| 0xD905 | K_CAN_HIGH |
| 0xD906 | GroundShift |
| 0xD907 | Bus_Off |
| 0xD90C | CAN_ENG_FEHLER |
| 0xD90D | CAN_FEHLER_2LEITUNGEN |
| 0xD93C | Fehlerwert_erhalten |
| 0xD93D | Unplausibles_Signal |
| 0xD93E | Telegramm_Timeout_beim_Emfang |
| 0xD93F | Fehler_beim_Emfang_NM_Botschaft |
| 0xD940 | Fehlerwert_gesendet |
| 0xD941 | Unplausibles_Signal1 |
| 0xD942 | Telegramm_Timeout_beim_Senden |
| 0xE904 | K_CAN_LOW_PER |
| 0xE905 | K_CAN_HIGH_PER |
| 0xE906 | GroundShift_PER |
| 0xE93C | Fehlerwert_erhalten_PER |
| 0xE93D | Unplausibles_Signal_PER |
| 0xE93E | Telegramm_Timeout_beim_Emfang_PER |
| 0xE93F | Fehler_beim_Emfang_NM_Botschaft_PER |
| 0xE940 | Fehlerwert_gesendet_PER |
| 0xE941 | Unplausibles_Signal1_PER |
| 0xE942 | Telegramm_Timeout_beim_Senden_PER |
| 0xE943 | Fehler_beim_Senden_NM_Botschaft_PER |
| 0xA0A8 | BSW_RAM_CRC_FEHLER |
| 0xA0A9 | BSW_SYSTEM_FEHLER |
| 0xA0AA | BSW_REGISTER_FEHLER |
| 0xA0AB | BSW_ProgFlash_CRC_FEHLER |
| 0xA0AC | BSW_SG_FEHLER_COP_CM_TRAP |
| 0xA0AD | EEPROM_Schreibe_Fehler |
| 0xA0AE | Energiesparmode_aktiv |
| 0xA0AF | FEHLER_EXTERNAL_WATCHDOG |
| 0xA0B0 | SG_Eingang_Bremslicht |
| 0xA0B1 | SG_Eingang_P_N |
| 0xA0B2 | Fehler_CAS_Versorgung |
| 0xA0B3 | Fehler_Ansteurung_Anlasser_KL50 |
| 0xA0B4 | Fehler_Motorstart_Anlasserbetrieb |
| 0xA0B5 | Signalerkennung_Geschwindigkeit_Fehler |
| 0xA0B6 | Interlock_PLOCK_Fehler |
| 0xA0B8 | Hallsensor_RAST_KS |
| 0xA0B9 | Hallsensor_EJECT_KS |
| 0xA0BA | Hallsensor_SSTA_KS |
| 0xA0BB | Hallsensor_SSTB_KS |
| 0xA0BC | Hubmagnet_AZSP |
| 0xA0BD | Treiber_KL15_WUP_KS |
| 0xA0BE | Treiber_KL15_1_FZG_KS |
| 0xA0BF | Treiber_KL15_2_FZG_KS |
| 0xA0C0 | Treiber_KL15_3_FZG_KS |
| 0xA0C1 | Treiber_KL50L_KS |
| 0xA0C2 | Treiber_KL50RS_KS |
| 0xA0C3 | Treiber_KL15_WUP_RS_KS |
| 0xA0C4 | Treiber_KL15_4_FZG_KS |
| 0xA0C5 | MFS_Signal_fehlt |
| 0xA0C6 | Treiber_KLR_KS |
| 0xA0C7 | Treiber_KLR_MRS_KS |
| 0xA0C8 | Komfort_Schliesszylinder_FAT |
| 0xA0CC | Komfort_FBD |
| 0xA0CF | Komfort_Tueraussengriff |
| 0xA0E0 | Centerlock_Taster_Verriegeln |
| 0xA0E1 | Centerlock_Taster_Entriegeln |
| 0xA0E2 | DUMMY_1 |
| 0xA0E3 | DUMMY_2 |
| 0xA0E4 | DUMMY_3 |
| 0xA0E5 | DUMMY_4 |
| 0xA0E6 | DUMMY_5 |
| 0xA0E7 | DUMMY_6 |
| 0xA0E8 | DUMMY_7 |
| 0xA0E9 | DUMMY_8 |
| 0xA0EA | DUMMY_9 |
| 0xA0EB | DUMMY_A |
| 0xA0EC | DUMMY_B |
| 0xA0ED | DUMMY_C |
| 0xA0EE | DUMMY_D |
| 0xA0EF | DUMMY_E |
| 0xA0F0 | Fehler_Basestation_Antenne |
| 0xA0F1 | Fehler_TRSP_Page3 |
| 0xA0F2 | Fehler_Typ_Nachschluessel |
| 0xA0F3 | Fehler_TRSP_Cryptodaten |
| 0xA0F4 | DUMMY_F |
| 0xA0F5 | DUMMY_G |
| 0xA0F6 | DUMMY_H |
| 0xA0F7 | DUMMY_I |
| 0xA0F8 | DUMMY_J |
| 0xA0F9 | DUMMY_K |
| 0xA0FA | DUMMY_L |
| 0xA0FB | DUMMY_M |
| 0xA0FC | DUMMY_N |
| 0xA0FD | DUMMY_O |
| 0xA0FE | DUMMY_P |
| 0xA0FF | DUMMY_Q |
| 0xA100 | DME_Lost |
| 0xA101 | EWS4_EEPROM_CRC_FEHLER |
| 0xA102 | EWS4_0xA102 |
| 0xA103 | EWS4_0xA103 |
| 0xA104 | EWS4_0xA104 |
| 0xA105 | EWS4_FSC_FEHLER |
| 0xA106 | EWS4_Random_FEHLER |
| 0xA107 | EWS4_0xA107 |
| 0xA108 | EWS4_0xA108 |
| 0xA109 | EWS4_0xA109 |
| 0xA10A | EWS4_0xA10A |
| 0xA10B | EWS4_CalcTo_FEHLER |
| 0xA10C | EWS4_ZUSTAND_FEHLER |
| 0xA110 | ELV_SW_CAS_Fehler_1 |
| 0xA111 | ELV_HW_CAS_Fehler_1 |
| 0xA112 | ELV_SG_HW_Lenkschloss_Fehler |
| 0xA113 | ELV_SG_Sensor_Fehler |
| 0xA114 | ELV_SG_Kommunikations_Fehler |
| 0xA115 | ELV_SG_Ablauf_Fehler_1 |
| 0xA116 | ELV_SG_Abbruch_Fehler |
| 0xA117 | ASW_SW_CAS_Fehler_2 |
| 0xA118 | ASW_Signalerkennung_Geschwindigkeit_Fehler |
| 0xA119 | ELV_HW_CAS_Fehler_3 |
| 0xA11A | ELV_Hsd_Fehler |
| 0xA11B | ELV_Lsd_Fehler |
| 0xA11C | FLAG_NOT_ALLOWED |
| 0xA11D | ASW_KL30_Fehler |
| 0xA11E | ELV_P_Sternpunkt_Fehler |
| 0xA11F | ELV_M_Sternpunkt_Fehler |
| 0xA120 | KL30g_Kurzschluss |
| 0xA121 | Treiber_LED_KS |
| 0xA122 | Treiber_VCC12_KS |
| 0xA123 | Treiber_VCC34_KS |
| 0xA124 | Fehler_Klemmenstate |
| 0xA125 | DUMMY_W |
| 0xA126 | DUMMY_X |
| 0xA127 | DUMMY_Y |
| 0xA128 | DUMMY_Z |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9400 | CAN_CONTROLLER |
| 0x9304 | EEPROM_CRC_Info |
| 0x9305 | Unterspannung_SG_Info |
| 0x9306 | Ueberspannung_SG_Info |
| 0x9404 | Unplausibilitaet_SG_Spannung_Info |
| 0x9405 | Unplausibilitaet_Bremslicht_Info |
| 0x9406 | Unplausibilitaet_P_N_Info |
| 0x9504 | ZAS_Hall_3_Position_Unstabil |
| 0x9604 | Keine_Antwort_auf_KISI_aktiv_Info |
| 0x9605 | Keine_Antwort_auf_KISI_deakt_Info |
| 0x9804 | DVD_in_Wiederholsperre_Info |
| 0x9805 | DVDR_in_Wiederholsperre_Info |
| 0x9806 | PSD_in_Wiederholsperre_Info |
| 0x9807 | PSDR_in_Wiederholsperre_Info |
| 0x9808 | PM_in_Wiederholsperre_Info |
| 0x9809 | Keine_Bestaet_Kindersich_DVD_Info |
| 0x980A | Keine_Bestaet_Kindersich_DVDR_Info |
| 0x980B | DVD_bestaet_ZV_Aenderung_nicht_Info |
| 0x980C | DVDR_bestaet_ZV_Aenderung_nicht_Info |
| 0x980D | PSD_bestaet_ZV_Aenderung_nicht_Info |
| 0x980E | PSDR_bestaet_ZV_Aenderung_nicht_Info |
| 0x980F | PM_bestaet_ZV_Aenderung_nicht_Info |
| 0x9810 | ZV_RDU_ANFORDERUNG |
| 0x9904 | Fehler_TRSP_Initialisierung |
| 0x9905 | Fehler_Wert_TRSP_Initdone |
| 0x9906 | Fehler_TRSP_Kommunikation |
| 0x9907 | Gesperrter_Schluessel |
| 0x9908 | TRSP_Nicht_Zugehoerig |
| 0x9909 | Kein_TRSP_ID_Erkannt |
| 0x990A | Nachlauf_EWS_Aktiv |
| 0x990B | TRSP_Cryptodaten_Fehler |
| 0x9920 | DUMMY_INFO_9920 |
| 0x9921 | DUMMY_INFO_9921 |
| 0x9923 | DUMMY_INFO_9923 |
| 0x9924 | DUMMY_INFO_9924 |
| 0x9925 | DUMMY_INFO_9925 |
| 0x9A04 | ASW_SW_Info_Fehler_1 |
| 0x9A05 | ASW_HW_Info_Fehler_1 |
| 0x9A06 | ASW_HW_Info_Fehler_2 |
| 0x9A07 | ASW_HW_Info_Fehler_3 |
| 0x9A08 | ELV_KS_Info_Fehler_1  |
| 0x9A09 | ASW_KS_Info_Fehler_2 |
| 0x9A0A | ASW_SPG_Info_Fehler |
| 0x9A0B | ELV_SG_STM_Timing_Info_Fehler |
| 0x9A0C | ASW_CAN_Signal_Info_Fehler |
| 0x9A0D | ELV_SG_sonstiger_Info_Fehler |
| 0x9A0E | ELV_Lenksäule_verspannt_Info_Fehler |
| 0x9A0F | ELV_CAS_ESC_Counter_Info_Fehler |
| 0x9A10 | ELV_externer_WatchDog_Info_Fehler |
| 0x9A11 | ASW_CAN_Bus_Info_Fehler |
| 0x9A12 | ASW_Speed_Info_Fehler |
| 0x9A13 | ASW_ROM_Info_Fehler |
| 0x9A14 | ELV_SG_Info_Fehler |
| 0x9A15 | ELV_Lsd_Info_Fehler |
| 0x9A16 | ELV_SG_ ESC_Counter_Info_Fehler |
| 0x9A17 | ASW_CCM15_KlStrg_Info_Fehler |
| 0x9A18 | ASW_Fatal_Info_Fehler |
| 0x9A19 | ELV_SG_Kommunikation_Timeout_Info_Fehler |
| 0x9A1A | ELV_Kommunikation_Inhalt_Info_Fehler |
| 0x9A1B | ELV_KBUS_Timeout_Control_Info_Fehler |
| 0x9A1C | ASW_CAS_Montagemode |
| 0x9A1D | PLL_NOT_DEACTIVE |
| 0x9A1E | INF_9A1E |
| 0x9A1F | INF_9A1F |
| 0x9A20 | CAS_Awake_Quelle_IO |
| 0x9A21 | CAS_Awake_Quelle_Klstrg |
| 0x9A22 | CAS_Awake_Quelle_ZV |
| 0x9A23 | CAS_Awake_Quelle_FH |
| 0x9A24 | CAS_Awake_Quelle_FBD |
| 0x9A25 | CAS_Awake_Quelle_CA |
| 0x9A26 | CAS_Awake_Quelle_Trsp |
| 0x9A27 | CAS_Awake_Quelle_Trsp2 |
| 0x9A28 | CAS_Awake_Quelle_EE |
| 0x9A29 | CAS_Awake_Quelle_Diag |
| 0x9A2A | CAS_Awake_Quelle_Tester |
| 0x9A2B | CAS_Awake_Quelle_Init |
| 0x9A2C | CAS_Awake_Quelle_FB_Leitung_Offen |
| 0x9A2D | CAS_Awake_Quelle_Sleeptimer_Short |
| 0x9A2E | CAS_Awake_Quelle_Sleeptimer_FH |
| 0x9A2F | CAS_Awake_Quelle_Sleeptimer_Long |
| 0x9A30 | CAS_WakeUp_Quelle_Init |
| 0x9A31 | CAS_WakeUp_Quelle_S_CAN |
| 0x9A32 | CAS_WakeUp_Quelle_HOTEL |
| 0x9A33 | CAS_WakeUp_Quelle_FBD |
| 0x9A34 | CAS_WakeUp_Quelle_KBUS |
| 0x9A35 | CAS_WakeUp_Quelle_Reserved |
| 0x9A36 | CAS_WakeUp_Quelle_Hall_4 |
| 0x9A37 | CAS_WakeUp_Quelle_Hall_3 |
| 0x9A38 | CAS_WakeUp_Quelle_CLT |
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
| F_UWB_ERW | nein |

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

### ELV_STATE

| WERT | NAME |
| --- | --- |
| 0x00 | M_ELV_START_UP |
| 0x01 | M_ELV_GET_IDENT |
| 0x02 | M_ELV_LOCKED |
| 0x03 | M_ELV_HW_CHECK |
| 0x04 | M_ELV_UNLOCK_CONDITION |
| 0x05 | M_ELV_WAIT_FOR_LOCK_STATUS |
| 0x06 | M_ELV_DETECT_ERROR_UNLOCK |
| 0x07 | M_ELV_NEW_TRIGGER_UNLOCK |
| 0x08 | M_ELV_CHECK_CONTROL_UNLOCK |
| 0x09 | M_ELV_SEND_UNLOCK |
| 0x0A | M_ELV_SAVE_UNLOCK_INFO |
| 0x0B | M_ELV_SEND_STATUS_REQ_UNL |
| 0x0C | M_ELV_WAIT_FOR_ST_REQ_UNL |
| 0x10 | M_ELV_UNLOCKED |
| 0x20 | M_ELV_CK_SECOND_EVENT |
| 0x30 | M_ELV_LOCK_CONDITION |
| 0x40 | M_ELV_WAIT_FOR_UNLOCK_STATUS |
| 0x50 | M_ELV_DETECT_ERROR_LOCK |
| 0x60 | M_ELV_NEW_TRIGGER_LOCK |
| 0x70 | M_ELV_CHECK_CONTROL_LOCK |
| 0x80 | M_ELV_SEND_LOCK |
| 0x90 | M_ELV_SAVE_LOCK_INFO |
| 0xA0 | M_ELV_WAIT_FOR_POWER_OFF |
| 0xB0 | M_ELV_SEND_STATUS_REQ_LOCK |
| 0xC0 | M_ELV_WAIT_FOR_ST_REQ_LOCK |
| 0xF0 | M_ELV_WORST_CASE |

### EWS4_KEY_STATE

| WERT | NAME | TEXT |
| --- | --- | --- |
| 0x00 | KEY_READY | KEY_READY |
| 0x5B | WAIT_FIRST_AUT | WAIT_FIRST_AUT |
| 0x5D | SEND_RPLY_KEY | SEND_RPLY_KEY |
| 0x5E | RND_KEY | RND_KEY |
| 0x66 | COMPRESS_KEY | COMPRESS_KEY |
| 0x77 | CALC_KEY | CALC_KEY |
| 0x8B | CHECK_FSC_KEYREADY | CHECK_FSC_KEYREADY |
| 0x8D | CHECK_FSC | CHECK_FSC |
| 0x8E | CHECK_FSC_UNLOCKED | CHECK_FSC_UNLOCKED |
| 0x9B | WAIT_FSC_KEYREADY | WAIT_FSC_KEYREADY |
| 0x9D | WAIT_FSC | WAIT_FSC |
| 0x9E | WAIT_FSC_UNLOCKED | WAIT_FSC_UNLOCKED |
| 0xAA | CALC_FACTOR | CALC_FACTOR |
| 0xBB | WAIT_WR_RND | WAIT_WR_RND |
| 0xCC | INIT_RND2 | INIT_RND2 |
| 0xDD | INIT_RND1 | INIT_RND1 |
| 0xEE | START_RND | START_RND |
| 0xFF | KEY_STATE_CLEARED | KEY_STATE_CLEARED |

### STEUERN_EWS4_MODE

| WERT | NAME | TEXT | DATA_LENGTH |
| --- | --- | --- | --- |
| 0x01 | LOCK_SERVER_SK | LOCK_SERVER_SK | 0 |
| 0x02 | WRITE_SERVER_SK | WRITE_SERVER_SK | 16 |
| 0xFF | UNKNOWN_MODE | UNKNOWN_MODE | 0 |

### RDU_NUMBER

| WERT | TEXT |
| --- | --- |
| 0 | Normal Operation |
| 1 | Nicht ausgeführt: CAN Signal ungültig |
| 2 | Nicht ausgeführt: Fahrzeug fährt |
| 4 | Nicht ausgeführt: Motor startet oder Wiederholsperre aktiv |
| 8 | Nicht ausgeführt: CAS Kodierung |
