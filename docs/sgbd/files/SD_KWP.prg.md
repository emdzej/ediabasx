# SD_KWP.prg

## General

|  |  |
| --- | --- |
| File | SD_KWP.prg |
| Type | PRG |
| Jobs | 79 |
| Tables | 32 |
| Origin | BMW EI-61 Hariolf Gentner |
| Revision | 3.000 |
| Author | BMW EE-51 Siwy, SiemensVDO SAA Gross-Gottschall, BMW TI-430 Bendel, SiemensVDO SAA Boonstra, MagnaSteyr EEB-A Gaugl, SiemensVDO SAA Prostejovsky |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | sd_kwp MDS und MINI Steuergeraetefamilie fuer Schiebedaecher |  |  |
| ORIGIN | string | BMW EI-61 Hariolf Gentner |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW EE-51 Siwy, SiemensVDO SAA Gross-Gottschall, BMW TI-430 Bendel, SiemensVDO SAA Boonstra, MagnaSteyr EEB-A Gaugl, SiemensVDO SAA Prostejovsky |  |  |
| COMMENT | string |  |  |  |
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

### WARTEN

Dieser Job bewirkt eine Wartezeit

| Name | Type | Description |
| --- | --- | --- |
| SEKUNDEN | int | minimale Wartezeit: <SEKUNDEN> -1 maximale Wartezeit: <SEKUNDEN> |

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

### STATUS_BATTERIESPANNUNG

Batteriespannung abfragen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### STATUS_MOTORTEMPERATUR

Motortemperatur abfragen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### WRITE_BMW_HWR_NR

Write BMW HWR NR in EPROM

| Name | Type | Description |
| --- | --- | --- |
| HARDWARENR | string | gewuenschte Hardware: MDS_K, MDS_CAN, E60, MDS_CAN_LASCHEN, R56 table HardwareNr HARDWARE_NR TEXT |

### READ_BMW_HWR_NR_FROM_EEPROM

Read BMW HW Number from EEPROM

_No arguments._

### ANLIEFERPOSITION_ANFAHREN

Dach fährt nach Anlieferposition KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente shd,sos oder ecu (shd und sos) table Geraet NAME_GERAET TEXT |

### READ_SERIAL

Siemens Seriennummer lesen

_No arguments._

### ALLE_PRUEFSTEMPEL_LESEN

Alle Pruefstempel abfragen KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| CAR_TYPE | string | Keine Eingabge fuer MDS, optional 'R56' oder 'E91' fuer R56 Mini / E91 |

### KENNLINIE_LESEN

Auslesen der Kennlinien von SHD oder SoS KWP2000: $23 ReadMemoryByAddress KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | Argument table Geraet NAME_GERAET TEXT |
| KENNLINIE | string | gewuenschte Funktion table Kennlinie NAME_KENNLINIE TEXT |

### UEBERWACHUNGSBEREICHE_EINSTELLEN

Bereiche für Minimal- Maximal- und Mittelwertbildung der von der Software berechneten Kraefte einstellen. Max. 7 Bereiche moeglich KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | Gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| BEREICHE | string | Komma getrennte Liste der Positionen |

### MIN_MAX_MITTELWERTE_AUSLESEN

Minimal- Maximal- und Mittelwerte der von der Software berechneten Kraefte in den mit UEBERWACHUNGSBEREICHE_EINSTELLEN festegelegten Bereichen auslesen KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | Argument gewuenschte Komponente table Geraet NAME_GERAET TEXT |

### STATISTIKZAEHLER_LESEN

Statistikzaehler vom Bedienkonzeptes auslesen

_No arguments._

### BEDIENKONZEPTZUSTAENDE_LESEN

Statemachine-Zustaende des Bedienkonzeptes auslesen

_No arguments._

### STATUS_BEDIENSCHALTER

Auslesen der Status von Bedienschalter-Leitungen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### STATUS_FREISCHALTUNG

Auslesen der Stati von Klemmen und CAS-Freigabesignalen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### DENORM_REASON_LESEN

Denorm reason abfragen KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente shd,sos oder ecu (shd und sos) table Geraet NAME_GERAET TEXT |

### DENORM_REASON_LOESCHEN

Denorm reason LOESCHEN KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente shd,sos oder ecu (shd und sos) table Geraet NAME_GERAET TEXT |

### ZUSTANDS_WERTE_LESEN

Diverse Zustandswerte abfragen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### STATISTIKZAEHLER_LOESCHEN

Statistikzähler löschen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_WERT | int | Argumentswert 1 = Ja |

### WINDSCHOTT

Windschott aus und einfahren lassen

| Name | Type | Description |
| --- | --- | --- |
| ARG_WERT | string | Argumentswert WAW_AUS = Ausfahren WAW_EIN = einfahren |

### STATUS_CFL

Auslesen der Stati von CFL KWP2000: $31 startRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | Funktion see Table for the functions table Funktion_CFL CFL_FUNKTION TEXT |

### STEUERN_CFL

Steuern der CFL-modul KWP2000: $31 startRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | gewuenschte Funktion table Funktion_CFL CFL_FUNKTION TEXT |
| FUNC_WERT | string | Funktionswert Werte in dezimal |

### SOS_DATEN_AKTUALISIEREN

Aktualisierung der SOS Daten im sicheren Satz (gueltig fuer MDS SW Ver. 5.3.0) Update of SOS data for default data set (valid for MDS SW Ver. 5.3.0)

_No arguments._

### BB_HISTORY_LESEN

Bounce Back History lesen KWP2000: $31 startRoutineByLocalIdentifier

_No arguments._

### BB_HISTORY_LOESCHEN

Bounce Back History loeschen KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARG_WERT | int | Argumentswert 1 = Ja |

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
| 0xA088 | Fehler Bedienschalter |
| 0xA08A | Fehler Dimmung |
| 0xA08D | Fehler Kodierung |
| 0xA090 | Fehler Dacheinheit SHD |
| 0xA091 | Fehler Antrieb SHD |
| 0xA092 | Fehler Normierung SHD |
| 0xA0A0 | Fehler Dacheinheit SoS |
| 0xA0A1 | Fehler Antrieb SoS |
| 0xA0A2 | Fehler Normierung SoS |
| 0xA40D | Fehler Eeprom Schreibfehler |
| 0xA40E | Energiesparmode aktiv |
| 0xDA04 | Fehler K_CAN_LOW |
| 0xDA07 | Fehler CAN_Controller |
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
| 0x9400 | Fehler Oszillator |
| 0x9401 | Fehler Watchdog |
| 0x9402 | Fehler Opcode |
| 0x9403 | Fehler Kalibrierwerte ungültig |
| 0x9404 | Fehler Versorgungsspannung unplausibel |
| 0x9405 | Fehler Temperatursensor unplausibel |
| 0x9406 | Fehler Checksumme ECU Konfiguration |
| 0x9440 | Aktivierung des Panik Modes |
| 0x9441 | Initialisierung manuell gestartet |
| 0x9442 | Initialisierung über Diagnose gestartet |
| 0x9443 | Fehler Initialisierung abgebrochen |
| 0x9444 | Fehler Dauerhafte Unterspannung |
| 0x9445 | Fehler Dauerhafte Überspannung |
| 0x9446 | Ueberspannung Lastabwurf oder Starthilfe |
| 0x9447 | Anzahl aller Kodierungen |
| 0x9448 | Anzahl ungültiger Kodierungen |
| 0x9500 | Fehler SHD Hallsensor A Puls |
| 0x9501 | Fehler SHD Hallsensor B Puls |
| 0x9502 | Fehler SHD Hallsensor B Drehrichtung |
| 0x9503 | Fehler SHD Motorbruecke |
| 0x9504 | Fehler SHD Motorbruecke Kurzschluss |
| 0x9505 | Fehler SHD Motor Kurzschluss |
| 0x9506 | Fehler SHD Motorklemmenspannung Drehrichtung |
| 0x9507 | Fehler SHD Positionsverlust Spannungsausfall |
| 0x9508 | Fehler SHD Positionsverlust |
| 0x9509 | Fehler SHD Kennlinie Schieben |
| 0x950A | Fehler SHD Kennlinie Heben |
| 0x950B | Fehler SHD Checksumme SHD Konfiguration |
| 0x950C | Fehler SHD Hall A Ueberlast |
| 0x950D | Fehler SHD Hall B Ueberlast |
| 0x950E | Fehler SHD Hall A Leitungsbruch |
| 0x950F | Fehler SHD Hall B Leitungsbruch |
| 0x9510 | Fehler SHD Positionsverlust Bereichsueberschreitung |
| 0x9540 | Fehler SHD Manuelle Dachbewegung |
| 0x9541 | SHD Aktivierung der SKB |
| 0x9542 | Fehler SHD Motortemperatur Startverhinderung |
| 0x9543 | Fehler SHD Motortemperatur Bewegungsabbruch |
| 0x9600 | Fehler SoS Hallsensor A Puls |
| 0x9601 | Fehler SoS Hallsensor B Puls |
| 0x9602 | Fehler SoS Hallsensor B Drehrichtung |
| 0x9603 | Fehler SoS Motorbruecke |
| 0x9604 | Fehler SoS Motorbruecke Kurzschluss |
| 0x9605 | Fehler SoS Motor Kurzschluss |
| 0x9606 | Fehler SoS Motorklemmenspannung Drehrichtung |
| 0x9607 | Fehler SoS Positionsverlust Spannungsausfall |
| 0x9608 | Fehler SoS Positionsverlust |
| 0x9609 | Fehler SoS Kennlinie Schieben |
| 0x960A | Fehler SoS Kennlinie Heben |
| 0x960B | Fehler SoS Checksumme SHD Konfiguration |
| 0x960C | Fehler SoS Hall A Ueberlast |
| 0x960D | Fehler SoS Hall B Ueberlast |
| 0x960E | Fehler SoS Hall A Leitungsbruch |
| 0x960F | Fehler SoS Hall B Leitungsbruch |
| 0x9610 | Fehler SoS Positionsverlust Bereichsueberschreitung |
| 0x9640 | Fehler SoS Manuelle Dachbewegung |
| 0x9641 | SoS Aktivierung der SKB |
| 0x9642 | Fehler SoS Motortemperatur Startverhinderung |
| 0x9643 | Fehler SoS Motortemperatur Bewegungsabbruch |
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

### IODIGITALSIGNALEFUERLESEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x10 | IN_KBUSRXD_DISC1 | K-Bus RXD1 |
| 0x11 | IN_KBUSRXD_DISC | K-Bus RXD |
| 0x12 | SWITCH0 | Schalter 0 |
| 0x13 | SWITCH1 | Schalter 1 |
| 0x14 | SWITCH2 | Schalter 2 |
| 0x15 | HALL_SHD_A_STATE | Zustand Hallsensor A SHD |
| 0x16 | HALL_SHD_B_STATE | Zustand Hallsensor B SHD |
| 0x17 | HALL_SOS_A_STATE | Zustand Hallsensor A SoS |
| 0x18 | HALL_SOS_B_STATE | Zustand Hallsensor B SoS |
| 0x19 | SENSE_DIM | Rueckmeldeleitung Strombegrenzung KL58g |
| 0x1A | SENSE_HALL_A | Rueckmeldeleitung Strombegrenzung Freigabe Hallsensor A |
| 0x1B | SENSE_HALL_B | Rueckmeldeleitung Strombegrenzung Freigabe Hallsensor B |
| 0x1C | RXCAN | Empfangsleitung CAN-Bus |
| 0x1D | NERR0 | CAN-Bus Fehlersignal |
| 0x1E | HALL_SHD_A_IRQ | Interrupt Hallsensor A SHD |
| 0x1F | HALL_SHD_B_IRQ | Interrupt Hallsensor B SHD |
| 0x20 | HALL_SOS_A_IRQ | Interrupt Hallsensor A SoS |
| 0x21 | HALL_SOS_B_IRQ | Interrupt Hallsensor B SoS |
| 0x50 | OUT_KBUSTXD_DISC | K-Bus TXD |
| 0x51 | OUT_DME_KBUSHIGHDISC | K-Bus wird auf high geschaltet |
| 0x52 | POWERMGT_HOLD | Strommanagement Hold des Spannungsstabilisators |
| 0x53 | POWERMGT_HALL_A | Strommanagement Hallsensor A |
| 0x54 | POWERMGT_HALL_B | Strommanagement Hallsensor B |
| 0x55 | POWERMGT_TS | Strommanagement Temperatursensor |
| 0x56 | POWERMGT_KEYS |  |
| 0x57 | CANTX | Sendeleitung CAN-Bus |
| 0x58 | STB0 | Strobe des CAN-Bus Transceivers |
| 0x59 | EN0 | Enable des CAN-Bus Transceivers |
| 0x5A | MOTOR_SHD_A |  |
| 0x5B | MOTOR_SHD_B |  |
| 0x5C | MOTOR_SOS_A |  |
| 0x5D | MOTOR_SOS_B |  |
| 0x5E | LED | Led... |
| 0x5F | ROBEL | Robel... |
| 0x60 | POWERMGT_HOLDC |  |
| 0x61 | POWERMGT_HOLDK |  |

### ANALOGSIGNALEFUERLESEN

| IOLI | NAME | EINHEIT | MUL | DIV | ADD | TEXT |
| --- | --- | --- | --- | --- | --- | --- |
| 0xA0 | VBAT | Volt | 1 | 47.6 | 0 | Batteriespannung |
| 0xA1 | SHD_VMOT0 | Volt | 1 | 47.6 | 0 | Motorspannung 0 |
| 0xA2 | SHD_VMOT1 | Volt | 1 | 47.6 | 0 | Motorspannung 1 |
| 0xA3 | SOS_VMOT0 | Volt | 1 | 47.6 | 0 | Motorspannung 0 |
| 0xA4 | SOS_VMOT1 | Volt | 1 | 47.6 | 0 | Motorspannung 1 |
| 0xA5 | TEMP_SENS | ? | 1 | 1 | 0 | Temperatursensor |
| 0xA6 | SUM_IMOT | ? | 1 | 1 | 0 | Sum Imot |

### IODIGITALSIGNALEFUERSCHREIBEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x12 | SWITCH0 | Schalter 0 |
| 0x13 | SWITCH1 | Schalter 1 |
| 0x14 | SWITCH2 | Schalter 2 |
| 0x5A | MOTOR_SHD_A |  |
| 0x5B | MOTOR_SHD_B |  |
| 0x5C | MOTOR_SOS_A |  |
| 0x5D | MOTOR_SOS_B |  |

### GERAET

| IOLI | NAME_GERAET | TEXT |
| --- | --- | --- |
| 0xFA | ECU | Steuergeraet |
| 0xFB | SHD | SchiebeHebeDach |
| 0xFC | SOS | SonnenSchutz |

### SIGNALE_STATUS

| IOLI | SIGNAL_STATUS | TEXT |
| --- | --- | --- |
| 0x0001 | SWITCH2 | Schalter heben, 1 = aktiv rd/wr |
| 0x0002 | SWITCH1 | Schalter auf, 1 = aktiv rd/wr |
| 0x0004 | SWITCH0 | Schalter zu, 1 = aktiv rd/wr |
| 0x0100 | MOTOR_SHD_A | Motor 1 Relais A Ansteuerung, 1 = aktiv rd/wr |
| 0x0200 | MOTOR_SHD_B | Motor 1 Relais B Ansteuerung, 1 = aktiv rd/wr |
| 0x0400 | MOTOR_SOS_A | Motor 2 Relais A Ansteuerung, 1 = aktiv rd/wr |
| 0x0800 | MOTOR_SOS_B | Motor 1 Relais A Ansteuerung, 1 = aktiv rd/wr |

### FUNKTION_CFL

| IOLI | CFL_FUNKTION | TEXT |
| --- | --- | --- |
| 0x0000 | AUTOINIT | Laeuft Autoinit?                   / Autoinit starten |
| 0x0001 | CFL_AVAILABLE | Steht CFL zu Verfuegung?           / - |
| 0x0002 | KLEMME_R | Klemme R abfragen / setzen |
| 0x0003 | KLEMME_15 | Klemme 15 abfragen / setzen |
| 0x0004 | KLEMME_50 | Klemme 50 abfragen / setzen |
| 0x0005 | SPEED_VEHICLE | Fahrzeuggeschwindigkeit abfragen / setzen |
| 0x0006 | VBAT | Batteriespannung abfragen |
| 0x0007 | AMBIENT_TEMP | Umgebungstemperatur abfragen |
| 0x000B | FLASH_CRC | Programm-CRC abfragen |
| 0x000C | CONFIG_CHECKSUM | Konfigurationspruefsumme abfragen |
| 0x000D | PARAM_CHECKSUM | Parameterpruefsumme abfragen |
| 0x000E | CODING_CHECKSUM | Kodierungspruefsumme abfragen |
| 0x000F | CAL_CHECKSUM | Kalibrierungspruefsumme abfragen |
| 0x0010 | FLASH_CRC_CALC | Programm-CRC berechnet abfragen |
| 0x0012 | ROBTABADR | Robel-Tabelle Adresse abfragen |
| 0x0013 | RESET_REASON | Reset-Grund abfragen |
| 0x0016 | DIAGMOVE_KEY | Freigabe Links/Rechtslauf von Schalter abfragen/setzen |
| 0x0017 | SHDENABLED | CAS Freigabe |
| 0x0018 | WINDSCHOTT_AUF | Windschott oeffnen (existiert nicht in SW5.2.0) |
| 0x0020 | SIGNAL_STATUS | Diverse Signale abfragen / setzen |
| 0x0021 | HALL_STATUS | Hallsignale abfragen |
| 0x0022 | DACHTYP | Dachtyp abfragen |
| 0x0023 | SOFORT_SCHLAF | Geraet sofort einschlafen lassen |
| 0x0024 | FREIGABEZUSTAND | Freigabezustand auslesen / setzen |
| 0x0025 | WINDSCHOTT_AUS | Windschott ausfahren lassen |
| 0x0026 | WINDSCHOTT_AKTIV | Windschottzustand abfragen |
| 0x0027 | STATISTIKZAEHLER | Statistikzaehler loeschen |
| 0x0080 | CAL_CHK_VALID | Kalibrierwerte Pruefsumme Gueltigkeit abfragen / Defaultwerte setzen |
| 0x0081 | CAL_VOLT_MUL | Kalibrierwert (*) Spannung abfragen / setzen |
| 0x0082 | CAL_VOLT_ADD | Kalibrierwert (+) Spannung abfragen / setzen |
| 0x0083 | CAL_TEMP_MUL | Kalibrierwert (*) Umgebungstemperatur abfragen / setzen |
| 0x0084 | CAL_TEMP_ADD | Kalibrierwert (+) Umgebungstemperatur abfragen/setzen |
| 0x0102 | CHECK_IGNITIONK | Klemmenstatus beruecksichtigen |
| 0x0103 | CHECK_IGNITIONC | Freigabe Panikfreigabe beruecksichtigen |
| 0x0104 | TEMPSENSOR_ALLOWED | Tempsensor erlaubt (existiert nicht in SW5.2.0) |
| 0x0105 | CHECK_IGNITIONA | CAS Authentisierung Freigabe |
| 0x0108 | USESTATEENGINE | USESTATEENGINE (existiert nicht in SW5.2.0) |
| 0x010B | E9X_HIMMEL | Luefterstellung Himmel fuer e9x |
| 0x010C | WASSERSTOFF_FZG | Wasserstofffahrzeug |
| 0x010D | SICHERHEITS_FZG | Sicherheitsfahrzeug |
| 0x010E | HIMMEL_AUTO_ZU | Himmel automatisch Zufahren beim Sichern des Fzg. |
| 0x010F | HIMMEL_AUTO_AUF | Himmel automatisch Oeffnen beim Entriegeln des Fzg. |
| 0x0112 | DOPPELKLICK_AUF | Doppelklick Richtung Oeffnen |
| 0x0113 | DOPPELKLICK_ZU | Doppelklick Richtung schliessen erlaubt |
| 0x0114 | DOPPELKLICK_HEBEN | Doppelklick Richtung Heben |
| 0x0115 | POWER_ERR_LEN_OK | POWER_ERR_LEN_OK |
| 0x0116 | MEAS_VBAT_LOW | MEAS_VBAT_LOW |
| 0x0117 | VBATTOPLIMIT | VBATTOPLIMIT |
| 0x0118 | LOW_BAT_OFF | LOW_BAT_OFF |
| 0x0119 | LOW_BAT_ON | LOW_BAT_ON |
| 0x011A | LOAD_DUMP_ON | LOAD_DUMP_ON |
| 0x011B | LOAD_DUMP_OFF | LOAD_DUMP_OFF |
| 0x011C | LED_BAT_NORM | LED_BAT_NORM |
| 0x011D | LED_MIN | LED_MIN |
| 0x011E | LED_MAX | LED_MAX |
| 0x011F | MOTOROFFDELAYATLOADDUMP | MOTOROFFDELAYATLOADDUMP |
| 0x0140 | PREPANIC_START_TIME | PREPANIC_START_TIME (existiert nicht in SW5.2.0) |
| 0x0141 | PANICWAITTIME | PANICWAITTIME (existiert nicht in SW5.2.0) |
| 0x0142 | NO_RAIN_INTENSITY | Regenintensitaet untere Grenzwert |
| 0x0143 | RAIN_CLOSE_INTENSITY | Regenintensitaet obere Grenzwert |
| 0x0144 | MEAS_AMBIENT_TEMP_LOW | MEAS_AMBIENT_TEMP_LOW |
| 0x0145 | MEAS_AMBIENT_TEMP_HIGH | MEAS_AMBIENT_TEMP_HIGH |
| 0x0146 | BEDIENKONZEPT | Bedienkonzept |
| 0x0147 | USE_SOS | Schiebehimmel vorhanden |
| 0x0148 | TASTE_UEBER_CAN | Taste ueber CAN z.B. fuer E91 |
| 0x0149 | KOMFORT_POS_ZU | Komfortposition beim Schliessen verwenden |
| 0x014A | POWER_ERR_LEN_HIGH | POWER_ERR_LEN_HIGH |
| 0x014B | POWER_ERR_LEN_LOW | POWER_ERR_LEN_LOW |
| 0x0150 | PANIC_FREIGABE_KL15 | Panic-close nur bei Kl 15 |
| 0x0151 | PANIC_FREIGABE_CAS | Panic-close nur mit Freigabe vom CAS (CAN-Bus) |
| 0x0161 | BBHISTAREA | BBHISTAREA |
| 0x0170 | SET_CODE0 | Set Code0 (ab SW5.2.0) |
| 0x0171 | SET_CODE1 | Set Code1 (ab sw5.2.0) |
| 0x0172 | MSA_OPTION | MSA Option (ab MDS sw5.4.0 / Mini sw3.30.0) |
| 0x0180 | REGENSCHLIESSEN | Schliessen aus geoeffnet bei Regen |
| 0x0181 | REGENSCHLIESSENTILT | Schliessen aus gehoben bei Regen |
| 0x0182 | PANIC_CLOSE | Panic-close aus geoeffnet 1 oder 2 Phasen |
| 0x0183 | DOUBLE_PANIC | Doppel Panic-close aus geoeffnet |
| 0x0184 | KLEMME_15_NOTWENDIG | Bedienbar nur mit Enable UND Kl. 15 |
| 0x0186 | PANIC_CLOSE_TILT | Panic-close im Senken |
| 0x0187 | DOUBLE_PANIC_TILT | Doppel Panic-close Senken |
| 0x0188 | SCHIEBEHEBEDACH_TIPP_HEB | Tipp Bewegung heben |
| 0x0189 | SCHIEBEHEBEDACH_TIPP_SENK | Tipp Bewegung senken |
| 0x018A | SCHIEBEHEBEDACH_TIPP_AUF | Tipp Bewegung Oeffnen |
| 0x018B | SCHIEBEHEBEDACH_TIPP_ZU | Tipp Bewegung schliessen |
| 0x018C | HEBEN_AUS_GEOEFFNET | Heben aus geoeffnetem Zustand erlaubt |
| 0x018D | OEFFNEN_AUS_GEHOBEN | Oeffnen aus gehobenen Zustand erlaubt |
| 0x0190 | ANTI_WUMMER | Anti-Wummer-Position verwenden |
| 0x0191 | WINDSCHOTT | Windschott verwenden |
| 0x0192 | KOMFORT_POS_AUF | Komfortposition beim Oeffnen verwenden |
| 0x01B4 | FE_MODE | Fertigungsmode einschaltbar |
| 0x01B5 | TRA_MODE | Transportmode einschaltbar |
| 0x01B6 | WE_MODE | Werkstattmode einschaltbar |
| 0x01B7 | WINDSCHOTT_OPT | Deckelbewegung bei Windschott |
| 0x01B8 | VSCHOTT_AUF_HS | Geschw. bei der Windschott ausgefahren wird bei hochgeschw. |
| 0x01B9 | VDECKEL_ZU | Geschw. Bei der SHD zugefahren wird |
| 0x01BA | TDECKEL_ZU | Zeitverzoegerung  fuer SHD zufahren |
| 0x01BB | VDECKEL_AUF | Geschw. Bei der SHD aufgefahren wird |
| 0x01BC | TDECKEL_AUF | Zeitverzoegerung SHD auffahren |
| 0x01BD | TSCHOTT_AUF_HS | Zeitverzoegerung bei der Windschott ausgefahren wird bei hochgeschw. |
| 0x01C0 | VSCHOTT_AUF | Geschw. bei der Windschott ausgefahren wird |
| 0x01C1 | VSCHOTT_ZU | Geschw. bei der Windschott eingefahren wird |
| 0x01C2 | TSCHOTT_AUF | Zeitverzoegerung bei der Windschott ausgefahren wird |
| 0x01C3 | T_DOPPELKLICK | Zeitverzoegerung in der Doppelklick akzeptiert wird |
| 0x01C4 | DELTA_SOS_SHD | Vorlauf fuer Himmel *1,8 in (mm) |
| 0x01C5 | KOMFORT_OEFFNEN | Komfort-Oeffnen Option |
| 0x01C6 | T_PANIC1 | Timer 1 fuer Panikmode |
| 0x01C7 | T_PANIC2 | Timer 2 fuer Panikmode |
| 0x01C8 | VSCHOTT_ZU_HS | Geschw. bei der Windschott eingefahren wird bei hochgeschw. |
| 0x01C9 | KOMFORT_SCHLIESSEN | Komfort-Schliessen Option |
| 0x01CA | KOMFORT_HEBEN | Komfort-Heben Option |
| 0x01CB | T_SCHOTT_ZU | Zeitverzoegerung bei der Windschott eingefahren wird |
| 0x01CC | T_SCHOTT_ZU_HS | Zeitverzoegerung bei der Windschott eingefahren wird bei hochgeschw. |
| 0x01CD | PARAM1 | PARAM1 |
| 0x01CE | PARAM2 | PARAM2 |
| 0x01CF | PARAM3 | PARAM3 |
| 0x01D0 | TEMPTMONUSESENSOR | Thermomonitor mit interner Temperatur Sensor verwenden abfrage/setzen |
| 0x01D1 | TEMPTMONUSEOUTER | Thermomonitor mit externer Temperatur Sensor verwenden abfrage/setzen |
| 0x01D4 | TEMPCFLUSESENSOR | CFL Temperatur mit interner Temperatur Sensor verwenden abfrage/setzen |
| 0x01D5 | TEMPCFLUSEOUTER | CFL Temperatur mit interner Temperatur Sensor verwenden abfrage/setzen |
| 0x01D8 | NOTLAUF_IMMER | NOTLAUF_IMMER |
| 0x0200 | STOP_MOVE | Motor moving               / Motor stoppen |
| 0x0201 | POSITION | Position abfragen / anfahren |
| 0x0202 | NORMED | Normierung abfragen / loeschen |
| 0x0203 | RF_VALID | Kennlinie Schieben Gueltigkeit abfragen / loeschen |
| 0x0204 | RF_VALID_TILT | Kennlinie Heben Gueltigkeit abfragen / loeschen |
| 0x0205 | STOP_REASON | StopReason abfragen / loeschen |
| 0x0207 | ANLIEFERPOSITION | Anlieferposition abfragen / anfahren |
| 0x0208 | NORM | Normierung abfragen / anstossen |
| 0x0211 | RF_ADR | Kennlinie Speicheradresse abfragen |
| 0x0212 | RF_CHECKSUM | Kennlinie Pruefsumme abfragen  / generieren |
| 0x0213 | RF_CHECKSUM_TILTED | Kennlinie Hebebereich Pruefsumme abfragen / generieren |
| 0x0221 | ACTPOS | Position abfragen / einstellen |
| 0x0222 | ACTSPEED | Dachgeschwindigkeit abfragen |
| 0x0223 | VDIFF | Motorklemmenspannung abfragen |
| 0x0224 | FORCELOWPASS | Kraft abfragen |
| 0x0225 | TEMPCOIL | Wicklungstemperatur auslesen |
| 0x0226 | TEMPROTOR | Rotortemperatur abfragen |
| 0x0227 | TEMPCASE | Gehaeusetemperatur abfragen |
| 0x0228 | DENORMREASON | Grund fuer Normierungsverlust abfragen / loeschen |
| 0x022A | FORCEUSEROFFSET | Aendern der Einklemmschutzschwelle |
| 0x0230 | RFEEIDX | Eeprom Index der Kennlinie abfragen |
| 0x0231 | RFMAXLEN | Laenge des Kennlinienbereiches abfragen |
| 0x0232 | RFSTART | Kraft am Anfang der Schieben Kennlinie abfragen |
| 0x0233 | RFSTARTTILT | Kraft am Anfang der Heben Kennlinie abfragen |
| 0x0301 | POSITION_OPEN | Position Offen |
| 0x0302 | POSITION_CLOSED | Position Geschlossen |
| 0x0303 | POSITION_NORMED | Position Normiert |
| 0x0304 | POSITION_100MM | Position 100mm |
| 0x0305 | BBLENGTH | Reversierlaenge |
| 0x0306 | POSITION_TILTED | Position Gehoben |
| 0x0307 | QUARTER_TURN | Reversierlaenge bei Block |
| 0x0308 | TOLERANCE | TOLERANCE |
| 0x030A | POSITION_CLOUD | Position Ueberlauf fuer Schliessen |
| 0x030E | POS_SEAL | POS_SEAL (existiert nicht in SW5.2.0) |
| 0x030F | ANLIEFERPOSITION | Anlieferposition |
| 0x0310 | CAR_SPEED_THRESH | CAR_SPEED_THRESH |
| 0x0311 | RF_DISTANCE | Abstand CFL-Bereich -> geschossen. |
| 0x0312 | RF_DISTANCE_TILT | Abstand CFL-Bereich Geh.->Geschlossen. |
| 0x0313 | RF_LENGTH | Kennl.Schieben-laenge |
| 0x0315 | RF_LENGTH_TILT | Kennl.Heben-laenge |
| 0x0319 | FORCE_OFFSET_RESTART | Restartwert Anlauf-Ausl.-Offs. |
| 0x031C | TRACK_LIMIT_RESTART | TRACKLIMITRESTART |
| 0x031D | TRACK_LIMIT_MAX | TRACK_LIMIT_MAX |
| 0x031E | TRACKLIMITMIN | TRACKLIMITMIN |
| 0x031F | TRACK_LIMIT_MIN_TILT | TRACK_LIMIT_MIN_TILT |
| 0x0323 | MAXDVDT | dV/dt limit for motor pin voltage slope down |
| 0x0329 | OPPDIRVMOTLIMIT | OPPDIRVMOTLIMIT |
| 0x0349 | TC_ROTOR_CASE | Therm. Kond. Rotor->Gehaeuse |
| 0x034A | TC_CASE_AMBIENT | Therm. Kond. Gehaeuse->Umgebung |
| 0x034B | QCASE | Thermische Kapazitaet Gehaeuse |
| 0x034C | QROTOR | Thermische Kapazitaet Rotor abfrage. |
| 0x0350 | TEMPTHRESH1 | TEMPTHRESH1 |
| 0x0358 | QCOIL | Thermische Kapazitaet Windung |
| 0x0359 | TC_COIL_ROTOR | Therm. Kond. Windung->Rotor |
| 0x035A | LENGTH_NO_STOP | Position ohne Stopp |
| 0x035B | LENGTH_NO_STOP_TILT | Position ohne Stopp gehoben |
| 0x035C | TEMPTHRESH2 | TEMPTHRESH2 |
| 0x0360 | POWER_DISS_FACT | Waermedissipationsfaktor |
| 0x036A | THERMAL_MOTOR_CONST | Thermal Motor Konstante |
| 0x036F | POLEPAIRS | Anzahl der Polpaare |
| 0x0370 | POSPANICSREV | Reversierlaenge in Panik-Mode Phase 1 |
| 0x0371 | SET_CODE1 | Set Code1 (existiert nicht in SW5.2.0) |
| 0x0374 | SET_CODE_4 | SET_CODE_4 (existiert nicht in SW5.2.0) |
| 0x0375 | SET_CODE_6 | SET_CODE_6 (existiert nicht in SW5.2.0) |
| 0x0376 | SET_CODE_8 | SET_CODE_8 (existiert nicht in SW5.2.0) |
| 0x0377 | SET_CODE_A | SET_CODE_A (existiert nicht in SW5.2.0) |
| 0x0378 | SET_CODE_C | SET_CODE_C (existiert nicht in SW5.2.0) |
| 0x0379 | SET_CODE_E | SET_CODE_E (existiert nicht in SW5.2.0) |
| 0x037A | SET_CODE_10 | SET_CODE_10 (existiert nicht in SW5.2.0) |
| 0x037B | SET_CODE_12 | SET_CODE_12 (existiert nicht in SW5.2.0) |
| 0x0382 | MULVDIFFHIGHLIMIT | MULVDIFFHIGHLIMIT |
| 0x0383 | MULVDIFFLOWLIMIT | MULVDIFFLOWLIMIT |
| 0x038C | POSITION_5MM_TILT | 5 mm Weg in Hebebereich |
| 0x038D | POSITION_0MM_TILT | Oeffnungspunkt Heben |
| 0x038F | POSITION_0MM | Oeffnungspunkt Schieben |
| 0x0399 | POSSEAL2 | POSSEAL2 (existiert nicht in SW5.2.0) |
| 0x03A0 | TEMP_COIL_START | Temperaturaddition bei Start |
| 0x03A3 | BLOCK_TIME | BLOCK_TIME |
| 0x03A6 | OPPDIR_HALL | Hall Signal invers |
| 0x03A7 | OPPDIR_VMOT | Motorklemmenspannung invers |
| 0x03A8 | OPPDIR_DRIVER | Driver inverse |
| 0x03B0 | BRAKE_MUL | BRAKE_MUL |
| 0x03B1 | BRAKE_OFFSET | BRAKE_OFFSET |
| 0x03B2 | PRERUNLEARN | PRERUNLEARN |
| 0x03B3 | POSTRUNLEARN | POSTRUNLEARN |
| 0x03B4 | PRERUNACTU | PRERUNACTU |
| 0x03B5 | POSTRUNACTU | POSTRUNACTU |
| 0x03B6 | PRERUNFROMTILT | PRERUNFROMTILT |
| 0x03B7 | TRACKLIMITMAXOUTSIDE | TRACKLIMITMAXOUTSIDE |
| 0x03B8 | TRACKLIMITMINOUTSIDE | TRACKLIMITMINOUTSIDE |
| 0x03BB | TEMPIDLE | TEMPIDLE |
| 0x03BC | MINDIFFFORACTU | MINDIFFFORACTU |
| 0x03BE | EXOPENBEGIN | EXOPENBEGIN |
| 0x03BF | EXOPENEND | EXOPENEND |
| 0x03C0 | POS0 | Position 0 |
| 0x03C1 | POS1 | Position 1 |
| 0x03C2 | POS2 | Position 2 |
| 0x03C3 | POS3 | Position 3 |
| 0x03C4 | POS4 | Position 4 |
| 0x03C5 | POS5 | Position 5 |
| 0x03C6 | POS6 | Position 6 |
| 0x03C7 | POS7 | Position 7 |
| 0x03C8 | POS8 | Position 8 |
| 0x03C9 | POS9 | Position 9 |
| 0x03D0 | BOOTINGTIME | BOOTINGTIME |
| 0x03D1 | STARTUPTIME | STARTUPTIME |
| 0x03D2 | TURNTIME | TURNTIME |
| 0x03D3 | NORMINGBLOCKTIME | NORMINGBLOCKTIME |
| 0x03D4 | WRITEPOSTIME | WRITEPOSTIME |
| 0x03D5 | CLEARPOSTIME | CLEARPOSTIME |
| 0x03D6 | TIMEOUTTIME | TIMEOUTTIME |
| 0x03D7 | TIMEOUTLIMPHOMETIME | TIMEOUTLIMPHOMETIME |
| 0x03D8 | DRIVERILLEGALONTIME | DRIVERILLEGALONTIME |
| 0x03D9 | DRIVERBADTIME | DRIVERBADTIME |
| 0x03DA | MOTORSHORTTIME | MOTORSHORTTIME |
| 0x03DB | ERRMECHCOUNT | ERRMECHCOUNT |
| 0x03DC | OPPDIRCOUNT | OPPDIRCOUNT |
| 0x03DD | REVERSINGDELAYTIME | REVERSINGDELAYTIME |
| 0x03DE | FORCETHRESHEXOPEN | FORCETHRESHEXOPEN |
| 0x03DF | TRACKLIMITEXOPEN | TRACKLIMITEXOPEN |
| 0x03F0 | CFL_ALLOWED | SKB erlaubt |
| 0x03F1 | ACTU_ALLOWED | Aktualisieren erlaubt |
| 0x03F3 | RRD_ALLOWED | Ruettelerkennung erlaubt |
| 0x03F5 | TMON_ALLOWED | Temperaturmonitor |
| 0x03F6 | CLOUD_ALLOWED | Eine Richtung schliessen |
| 0x03F8 | LIMPHOMEALLOWED | LIMPHOMEALLOWED (existiert nicht in SW5.2.0) |
| 0x03F9 | LIMPHOME2DIR | LIMPHOME2DIR |
| 0x03FA | RESTARTALLOWED | RESTARTALLOWED |
| 0x03FD | SKB_OHNE_KL_OEFFNEN | SKB ohne Kennlinie bei Oeffnen erlaubt |
| 0x03FE | SKB_OHNE_KL_SCH | SKB ohne Kennlinie bei Heben erlaubt |

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
| 11 | SAFETY_TIMER_OR_LIMPHOME | Sicherheitszeitueberlauf oder notlauf |
| 12 | OPPOSITE_DIRECTION | verkehrte Drehrichtung |
| 13 | INVALID_TARGET_POS | falsche Zielposition |
| 14 | INVALID_TARGET_POS_LOW | falsche Zielposition (zu niedrig) |
| 15 | INVALID_TARGET_POS_HIGH | falsche Zielposition (zu hoch) |
| 16 | WRONG_DIR_LIMPHOME | falsche Drehrichtung fuer Notlauf |
| 17 | WRONG_NR_VALUES | Lern fehler |
| 18 | CANT_WRITE | Lern fehler |
| 19 | FIFO_OVERRUN | Lern fehler |
| 20 | CFL_NUMERICAL_OV | Lern fehler |
| 21 | CANT_TILT | ungueltige Hebenaufforderung |
| 22 | POS_OPEN_LEARNED | Position open lernt |
| 23 | STOP_MOVE_HIGH_TEMP | Motor zu warm |
| 24 | DRIVER_BAD | Fehler in hardware treiber |
| 25 | MOTOR_SHORT | Motorkurzschluss |
| 26 | STARTUP_FAILED | Start nicht gelungen |
| 27 | RESET | Reset |
| 28 | UNEXPECTED STOP | Unerwartetes Anhalten |
| 29 | HARDWARE_DOWN | Hardware nicht freigeschaltet |
| 30 | REINIT | Erneute Intializieunrg (nach Hardware Down |
| 31 | PULSE_LOST | HALL Puls verloren |
| 32 | DOUBLE_PINCHED | doppelte Einklemmen erkannt |
| 33 | TRIPLE_PINCHED | dreifach Einklemmen erkannt |
| 34 | STARTUP_FAILED_TMON | Startup failed due to TMon veto |
| 35 | STARTUP_FAILED_VBAT | startup failed due to battery voltage |
| 36 | OPPOSITE_DIRECTION_VMOT | opposite direction was detected (motor pin voltage) |
| 37 | HALLA_ERROR | erroneous HallA |
| 38 | HALLB_ERROR | erroneous HallB |

### KENNLINIE

| IOLI | NAME_KENNLINIE | TEXT |
| --- | --- | --- |
| 0x10 | SHD | SchiebeHebeDach |
| 0x11 | SOS | SOnnenSchutz |
| 0x20 | SCHIEBEN | Schieben |
| 0x22 | HEBEN | Heben |

### MOTORLAUF

| IOLI | NAME_MOTORLAUF | TEXT |
| --- | --- | --- |
| 0x10 | SHD | SchiebeHebeDach |
| 0x11 | SOS | SOnnenSchutz |
| 0x20 | STOP | Anhalten |
| 0x24 | LINKS | Links drehen |
| 0x28 | RECHTS | Rechts drehen |

### DENORM_REASON

| IOLI | DENORM_TEXT | TEXT |
| --- | --- | --- |
| 0 | NORM | Normiert |
| 1 | INITSTART | Start Initialisierung |
| 2 | DIAGCOMMAND | Clear norm bit durch Diagnose |
| 3 | DIAGMOVECAN | Unbegrenzte links/rechts Lauf durch Diagnose |
| 4 | DIAGMOVEKEY | Unbegrenzte links/rechts Lauf durch taste |
| 5 | ERRCONFIG | Configuration Fehler |
| 6 | ERRCODING | Kodier Fehler |
| 7 | LOADDUMP | Load dump jump start bei laufende Motor |
| 8 | HALLOFF | Hall abgeschaltet bei laufende Motor |
| 9 | ERRHALLA | Ein Hall Sensor A Fehler entdeckt |
| 10 | POSITIONERRI | Ein falsche Position entdeckt bei stehende Motor |
| 11 | POSITIONERRM | Ein falsche Position entdeckt bei laufende Motor |
| 12 | AFTERRESET | Keine Positionen gefunden nach reset |
| 13 | RESERVED1 | Reserviert |
| 14 | RESERVED2 | Reserviert |
| 15 | IODIAG |  |
| 16 | HALLA_NOMOVE |  |
| 17 | ERRHALLB | Ein Hall Sensor B fehler entdeckt |
| 18 | PE | Ein Relais Kleber nach hochfahren entdeckt |
| 19 | EEPROM | EEPROM Fehler im Positionsspeicherbereich |
| 127 | UNKNOWN | Nach hochfahren war kein Normierung mehr da |
| 255 | EMPTY | Kein Eintrag |

### HARDWARENR

| IOLI | HARDWARE_NR | TEXT |
| --- | --- | --- |
| 0x00 | MDS_K | Hardware nummer KBUS |
| 0x01 | MDS_CAN | Hardware nummer CANBUS |
| 0x02 | E60 | Hardware nummer E60 |
| 0x03 | MDS_CAN_LASCHEN | Hardware nummer CANBus mit laschen |
| 0x04 | R56 | Hardware nummer R56 |

### WAWAUSEIN

| IOLI | WAW | TEXT |
| --- | --- | --- |
| 0x00 | WAW_EIN | Windschott einfahren |
| 0x01 | WAW_AUS | Windschott ausfahren |
