# kafas70.prg

## General

|  |  |
| --- | --- |
| File | kafas70.prg |
| Type | PRG |
| Jobs | 84 |
| Tables | 55 |
| Origin | BMW EI-612 André Schwald |
| Revision | 2.000 |
| Author | ADC_Automotive_Distance_Control_Systems_GmbH C/PSAD/AD Robert_A |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KAFAS |  |  |
| ORIGIN | string | BMW EI-612 André Schwald |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | ADC_Automotive_Distance_Control_Systems_GmbH C/PSAD/AD Robert_A |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.50 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

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

### STATUS_AUSSTATTUNG

KafasConfiguration KWP2000: $21 ReadDataByLocalIdentifier $23 STATUS_AUSSTATTUNG KafasConfiguration

_No arguments._

### STATUS_ERGEBNS_SLI

Gibt das Ergebnis der Verkeherzeichenerkennung aus. KWP2000: $21 ReadDataByLocalIdentifier $27 ERGEBNIS_SLI

_No arguments._

### STATUS_FLA_FERNLICHT_SCHALTEN

Gibt aus, ob die Funktion Fernlichtassistent das Fernlicht ein- oder ausschaltet. KWP2000: $21 ReadDataByLocalIdentifier $2B STATUS_FLA_FERNLICHT_SCHALTEN

_No arguments._

### STATUS_FLA_GRUND_FL_ABSCHALTUNG

Gibt die Parameter zur Funktion FLA aus. KWP2000: $21 ReadDataByLocalIdentifier $2A STATUS_FLA_GRUND_FL_ABSCHALTUNG

_No arguments._

### STATUS_INITIALISIERUNG

KWP2000: $21 ReadDataByLocalIdentifier $24 STATUS_INITIALISIERUNG

_No arguments._

### STATUS_KAFAS_KAM_SN_LESEN

Gibt die Seriennummer aus der Kamera aus. KWP2000: $21 ReadDataByLocalIdentifier $29 STATUS_KAFAS_KAM_SN_LESEN

_No arguments._

### STATUS_KAFAS_VINS_LESEN

Gibt die VINs aus der Kamera und ECU aus. KWP2000: $21 ReadDataByLocalIdentifier $28 STATUS_KAFAS_VINS_LESEN

_No arguments._

### STATUS_KALIBRIERWERTE_KAFAS

This service reads the camera calibration data from the camera's EEPROM KWP2000: $21 ReadDataByLocalIdentifier $2C STATUS_KALIBRIERWERTE_KAFAS

_No arguments._

### STATUS_KAMERAVERBINDUNG

Kann ermitteln, ob eine Kamera am TLC-Steuergerät angeschlossen ist KWP2000: $21 ReadDataByLocalIdentifier $22 STATUS_KAMERAVERBINDUNG

_No arguments._

### STATUS_KAMERAVERSORGUNG

Gibt die aktuellen Werte der Kamera aus KWP2000: $21 ReadDataByLocalIdentifier $21 STATUS_KAMERAVERSORGUNG

_No arguments._

### STATUS_KLEMMEN

Job zum Auslesen der Klemmensteuerung am Steuergerät KWP2000: $21 ReadDataByLocalIdentifier $20 STATUS_KLEMMEN

_No arguments._

### STATUS_SPANNUNGEN

KWP2000: $21 ReadDataByLocalIdentifier $25 STATUS_SPANNUNGEN

_No arguments._

### STEUERN_AKTUATOR

Ansteuerung Demo Mode KWP2000: $2E WriteDataByCommonIdentifier .        $F195 STEUERN_AKTUATOR

| Name | Type | Description |
| --- | --- | --- |
| DAUER | int | Ansteuerdauer in Sekunden 1-250 : 0.1-25.0 Sekunden 0 = Ansteuerung AUS |
| ANLAUFRAMPE | int | Werte von 0, 1 und 2 sind möglich "0" entspricht steilster Rampe, "2" entspricht der flachsten Rampe Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| STOPRAMPE | int | Werte von 0, 1 und 2 sind möglich "0" entspricht steilster Rampe, "2" entspricht der flachsten Rampe Der genaue Signalverlaufen der Rampe ist in der Lenkradelektronik festgelegt. |
| AMPLITUDE | int | Vibrationsstärke  es sind Amplituden von 0-14 (dezimal) möglich. |
| FREQUENZ | int | Frequenz der Vibration, Frequenzstufen von 0-14 (dezimal) sind möglich. |

### STEUERN_ANZEIGE_KOMBI_SLI

Steuert die Ausgabe der Verkehrzeichenerkennung im Kombi an. KWP2000: $2E WriteDataByCommonIdentifier .        $F191 STEUERN_ANZEIGE_KOMBI_SLI

| Name | Type | Description |
| --- | --- | --- |
| AKTUELLES_SEGMENT_ZEICHEN | int | Gibt an, welches Zeichen angezeigt werden soll: Argumente siehe TAB_ART_ZEICHEN 0x00 - set PRES_WDR_LIM_V to "kein Zeichen verfügbar" 0x01 - set PRES_WDR_LIM_V to "Beschränkungszeichen" 0x02 - set PRES_WDR_LIM_V to "Aufhebungszeichen" 0x03 - set PRES_WDR_LIM_V to "ungueltig" |
| AKTUELLES_SEGMENT_GESCHWINDIGKEIT | int | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebungszeichen alles, 5 bis 150 in 5-er Schritten. 0x00 - set PRES_CLAS_LIM_V to "general end of restriction" 5 to 150 (only multiples of 5 allowed) - set PRES_CLAS_LIM_V to input value divided by 5 0xfe - set PRES_CLAS_LIM_V to "nicht verfuegbar" 0xff - set PRES_CLAS_LIM_V to "ungueltig" |
| KOMMENDES_SEGMENT_ZEICHEN | int | Gibt an, welches Zeichen angezeigt werden soll: Argument siehe TAB_ART_ZEICHEN 0x00 - set NXT_WDR_LIM_V to "kein Zeichen verfügbar" 0x01 - set NXT_WDR_LIM_V to "Beschränkungszeichen" 0x02 - set NXT_WDR_LIM_V to "Aufhebungszeichen" 0x03 - set NXT_WDR_LIM_V to "ungueltig" |
| KOMMENDES_SEGMENT_GESCHWINDIGKEIT | int | Gibt an, welche Geschwindigkeit für die Zeichen angezeigt werden soll: 0 = Aufhebung alles, 5 bis 150 in 5-er Schritten. 0x00 - set NXT_CLAS_LIM_V to "general end of restriction" 5 to 150 (only multiples of 5 allowed) - set NXT_CLAS_LIM_V to input value divided by 5 0xfe -  set NXT_CLAS_LIM_V to "nicht verfuegbar" 0xff -  set NXT_CLAS_LIM_V to "ungueltig" |
| ANZEIGE_UEBERHOLVERBOTSZEICHEN | int | Gibt an, welches Überholverbotszeichen angezeigt werden soll: Argumente siehe TAB_ART_UEBERHOL_ZEICHEN 0x00 - kein Überholverbot 0x01 - Überholverbot PKW 0x02 - Aufhebung Überholverbot PKW 0x03 - Überholverbot PKW mit Anhänger 0x04 - Aufhebung Überholverbot PKW mit Anhänger 0x05 - Überholverbot LKW 0x06 - Aufhebung Überholverbot LKW 0x07 - andere Überholverbote |
| LAENDERKODIERUNG_VERKEHRSZEICHEN | int | Angabe der Länderkodierung der Verkehrszeichen, Argumente siehe TAB_ART_LAENDERKODIERUNG 0x00 = EU weiss 0x01 = EU gelb 0x02 = US weiss 0x03 = US gelb 0x04 = generisch 0x05...0x0D = reserved 0x0E = nicht verfuegbar 0x0F = ungueltig |
| ANZEIGE_TEXT_MELDUNG | int | Gibt an, welche Textmeldung angezeigt werden soll: Argumente siehe TAB_ART_MELDUNG 0x00 = keine Textmeldung 0x01 = nur mit Navigations - DVD 0x02 = in diesem Land nicht verfuegbar 0x03 = Navigationsdaten nicht verfuegbar 0x07 = ungueltig |

### STEUERN_ANZEIGE_KOMBI_TLC

Steuert die Anzeige im Kombi an. KWP2000: $2E WriteDataByCommonIdentifier .        $F190 STEUERN_ANZEIGE_KOMBI_TLC

| Name | Type | Description |
| --- | --- | --- |
| AKTION | int | 00h  Alle Anzeigen im Kombi ausgeschaltet 01h  Set ST_TLC aktiv, 02h  Balken rechts anzeigen, 04h  Balken links anzeigen, 07h  Balken rechts und links anzeigen 08h  Aktivierungsanzeige = Verfügbarkeitsschwelle anzeigen 10h  Verfügbarkeit rechts 20h  Verfügbarkeit links FFh  Ungültig |

### STEUERN_BUS_NACHRICHT

Ansteuerung zum Senden einer ausgehenden Busnachricht mit vorgegebenen Werten. KWP2000: $2E WriteDataByCommonIdentifier .        $F193 STEUERN_BUS_NACHRICHT

| Name | Type | Description |
| --- | --- | --- |
| AKTION | int | Gibt an, ob das Fernlicht über BUS aus- oder eingeschaltet werden soll: 0 = AUS, 1 = EIN, 2 = Keine Empfehlung 3 = Zurück zum Normalmodus |

### STEUERN_DEMO_MODE_FLA

Ansteuerung Demo Mode KWP2000: $2E WriteDataByCommonIdentifier .        $F194 STEUERN_DEMO_MODE_FLA

| Name | Type | Description |
| --- | --- | --- |
| AKTION | int | 0 = Demo-Mode Ausschalten, 1 = Demo-Mode Einschalten |

### STEUERN_KALIBRIERUNG_MONTAGE

Startet die Kalibrierung der Kameras im Werk KWP2000: $31 StartRoutineByLocalIdentifier .      	 $20 KALIBRIERUNG_KAFAS_MONTAGE (TAC)

| Name | Type | Description |
| --- | --- | --- |
| TARGET_POSITION | int | Gibt an, welche Seite mit dem Target kalibriert werden soll: 0x01 = LINKS, 0x02 = RECHTS |
| ENTFERNUNG_X | int | Angabe der Entfernung zwischen Vorderachse des Fahrzeugs und Gerüst. |
| ENTFERNUNG_Y | int | Angabe der Entfernung in y-Richtung von der Fahrzeugmitte zur gedachten Mittellinie zwischen den beiden Targetpositionen, wobei eine Verschiebung nach links in Fahrtrichtung einem positiven Wert entspricht. |
| HOEHE_TARGET_OBEN | int | Angabe der Höhe vom Boden bis zur Mitte des oberen Targets. |
| HOEHE_TARGET_UNTEN | int | Angabe der Höhe vom Boden bis zur Mitte des unteren Targets. |
| HOEHE_KAMERA | int | Angabe der tatsächlichen, am Kalibrierstand gemessenen Verbauhöhe der Kamera. |
| ENTFERNUNG_TARGETS | int | Gibt an, wie weit die einzelnen Targetpositionen auseinander liegen. Gemessen wird von der linken Außenkante des Targets in der linken Position bis zur linken Außenkante des Targets in der rechten Position. |
| QUADRAT_GROESSE | int | Angabe der Größe der Quadrate des Schachbrettmusters der Targets. Diese Parameter sind notwendig, um TLC auch an geänderten Kalibrierständen kalibrieren zu können. Alle Parameter sind als 2Byte Signed Integer mit einen Auflösung von 1 mm definiert |

### STATUS_STEUERN_KALIBRIERUNG_MONTAGE

Status Kalibrierung der Kameras im Werk KWP2000: $33 RequestRoutineResultsByLocalIdentifier .        $20 KALIBRIERUNG_KAFAS_MONTAGE (TAC)

_No arguments._

### STEUERN_KALIBRIERUNG_SERVICE_START

Start calibration SPC KWP2000: $31 StartRoutineByLocalIdentifier .        $21 CalibrationSPC

_No arguments._

### STEUERN_KALIBRIERUNG_SERVICE_STOP

Stop calibration SPC KWP2000: $32 StopRoutineByLocalIdentifier .        $21 CalibrationSPC

_No arguments._

### STATUS_STEUERN_KALIBRIERUNG_SERVICE

Get Status of calibration SPC KWP2000: $33 RequestRoutineResultsByLocalIdentifier .        $21 CalibrationSPC

_No arguments._

### STEUERN_METHODE_SLI

Gibt vor, welche Methode bei der Verkehrszeichenerkennung abgewendet werden soll. KWP2000: $2E WriteDataByCommonIdentifier .        $F192 STEUERN_METHODE_SLI

| Name | Type | Description |
| --- | --- | --- |
| METHODE_SLI | int | Argumente siehe TAB_METHODE_SLI |

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte  21+Anzahl Daten: ETX (0x03) |

### _HARDWARE_REVISION_LESEN

Gibt aus, ob die Funktion Fernlichtassistent das Fernlicht ein- oder ausschaltet. KWP2000: $1A ReadECUIdentification $8A HardwareRevision

_No arguments._

### _STATUS_ECU_IDENT_LESEN

Gibt die VIN aus. KWP2000: $22 ReadDataByCommonIdentifier .        $F18C STATUS_ECU_IDENT

_No arguments._

### _STEUERN_DIAGNOSE_MESSAGES_START

Control Diagnostic Messages KWP2000: $31 StartRoutineByLocalIdentifier .        $23 ControlDiagnosticMessages

_No arguments._

### _STEUERN_DIAGNOSE_MESSAGES_STOP

Control Diagnostic Messages KWP2000: $32 StopRoutineByLocalIdentifier .        $23 ControlDiagnosticMessages

_No arguments._

### _STEUERN_KALIBRIERUNG_RESET

This service reset the camera calibration data from the camera's EEPROM KWP2000: $2E WriteDataByCommonIdentifier .        $F011 STEUERN_KALIBRIERUNG_RESET

_No arguments._

### _STEUERN_KALIBRIERWERTE_KAFAS

This service updates the camera calibration data from the camera's EEPROM KWP2000: $2E WriteDataByCommonIdentifier .        $F010 STEUERN_KALIBRIERWERTE_KAFAS

| Name | Type | Description |
| --- | --- | --- |
| OFFLINE_YAW | int | Offline Yaw-Winkel |
| OFFLINE_HORIZON | int | Offline Horizon-Winkel |
| OFFLINE_ROLL | int | Offline Roll-Winkel |
| ONLINE_YAW | int | Online Yaw-Winkel |
| ONLINE_HORIZON | int | Online Horizon-Winkel |
| ONLINE_ROLL | int | Online Roll-Winkel |
| KAM_HOEHE | unsigned int | Kamera-Verbauhöhe |
| BRENNWEITE | unsigned int | Brennweite |
| GRABBING_SHIFT | unsigned int | Grabbing-Shift |
| FAHRGESTELLNR | string | Fahrgestellnummer(VIN) in der Kamera |

### _STEUERN_TEST_FUNKTIONAL_TLC_START

This control enables TLC performance tests KWP2000: $31 StartRoutineByLocalIdentifier .        $22 STEUERN_TEST_FUNKTIONAL_TLC

| Name | Type | Description |
| --- | --- | --- |
| GESCHWINDIGKEIT | int | Geschwindigkeit |
| YAW | int | Yaw-Winkel |

### _STEUERN_TEST_FUNKTIONAL_TLC_STOP

This control disables TLC performance tests KWP2000: $32 StopRoutineByLocalIdentifier .        $22 STEUERN_TEST_FUNKTIONAL_TLC

_No arguments._

### _STATUS_STEUERN_TEST_FUNKTIONAL_TLC

Get Status of TLC performance tests KWP2000: $33 RequestRoutineResultsByLocalIdentifier .        $22 STEUERN_TEST_FUNKTIONAL_TLC

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
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
| ?81? | ERROR_VEHICLE_IDENTIFICATION_NR |
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
| 0x72 | AISIN AW CO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | AKsys GmbH |
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
| 0x93 | TPO Display Corp. |
| 0x94 | KÜSTER Automotive Control |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental Automotive |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls |
| 0x9A | Takata- Petri |
| 0x9B | Mitsubishi Electric B.V. (Melco) |
| 0x9C | Autokabel |
| 0x9D | GKN-Driveline |
| 0x9E | Zollner Elektronik AG |
| 0x9F | PEIKER acustics GmbH |
| 0xA0 | Bosal-Oris |
| 0xA1 | Cobasys |
| 0xA2 | Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | ADC Automotive Distance Control Systems GmbH |
| 0xA5 | Funkwerk Dabendorf GmbH |
| 0xA6 | Lame |
| 0xA7 | Magna/Closures |
| 0xA8 | Wanyu |
| 0xA9 | Thyssen Krupp Presta |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutz Sensorband | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0xFFFF | unbekannter Verbauort | - |

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
| 2 | D-CAN |
| 1 | BMW-FAST |
| 3 | KWP2000* |
| 4 | KWP2000 |
| 5 | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA928 | Kamera Strommessung ausserhalb Bereich |
| 0xA929 | Kamera Spannungsmessung ausserhalb Bereich |
| 0xA92B | Steuergeraet: Interner Fehler |
| 0xA92C | Kamera EEPROM Kommunikationsfehler |
| 0xA92D | Kamera: nicht kalibriert |
| 0xA92F | Aktuator Lenkrad defekt |
| 0xA931 | Kamera Empfindlichkeitsänderung |
| 0xA932 | CAM: SPC failed |
| 0xA933 | ECU: VIN_INCORRECT |
| 0xA934 | Steuergerät Checksummenfehler |
| 0xA936 | Steuergeraet: Klemmenspannung ausserhalb Bereich |
| 0xA937 | Kamera: Gierwinkel ausserhalb Bereich |
| 0xA938 | Kamera: Nickwinkel ausserhalb Bereich |
| 0xA939 | Kamera: Rollwinkel ausserhalb Bereich |
| 0xA93A | Steuergeraet: Interne Spannungen ausserhalb Bereich |
| 0xA93B | Kamera: Imager Defekt |
| 0xA93C | LVDS Kommunikationsfehler |
| 0xA93D | Kamera EEPROM Checksummenfehler |
| 0xA93E | Energiesparmode aktiv |
| 0xE047 | PT-CAN BUS OFF |
| 0xE054 | Nachrichtenfehler(130h, Klemmenstatus) |
| 0xE055 | Nachrichtenfehler(19Eh, Status DSC)) |
| 0xE056 | Nachrichtenfehler(1A0h, Geschwindigkeit) |
| 0xE057 | Nachrichtenfehler(1B4h, Status Kombi) |
| 0xE058 | Nachrichtenfehler(1D6h, Bedienung Taster Audio/Telefon) |
| 0xE059 | Nachrichtenfehler(1EEh, Bedienung Lenkstock) |
| 0xE05A | Nachrichtenfehler(1F6h, Blinken) |
| 0xE05B | Nachrichtenfehler (C8h, Lenkradwinkel oben) |
| 0xE05C | Nachrichtenfehler(21Ah, Lampenzustand) |
| 0xE05D | Nachrichtenfehler(226h, Regensensor Wischergeschwindigkeit) |
| 0xE05E | Nachrichtenfehler(252h, Wischerstatus) |
| 0xE05F | Nachrichtenfehler(278h, Navigationsgraph) |
| 0xE060 | Nachrichtenfehler(27Ah, Synchronisation Navigationsgraph) |
| 0xE061 | Nachrichtenfehler(2A6h, Bedienung Wischertaster) |
| 0xE062 | Nachrichtenfehler(2E4h, Status Anhaenger) |
| 0xE063 | Nachrichtenfehler(2F8h, Uhrzeit / Datum) |
| 0xE064 | Nachrichtenfehler(310h, Aussentemperatur / Relativzeit) |
| 0xE065 | Nachrichtenfehler(314h, Status Fahrlicht) |
| 0xE066 | Nachrichtenfehler(330h, Kilometerstand / Reichweite) |
| 0xE067 | Nachrichtenfehler(347h, Status Koordination Vibration Lenkrad) |
| 0xE068 | Nachrichtenfehler(348h, Uebereinstimmung Navigationsgraph) |
| 0xE069 | Nachrichtenfehler(34Ch, Navigation GPS2) |
| 0xE06A | Nachrichtenfehler(34Eh, Navigation System Information) |
| 0xE06B | Nachrichtenfehler(380h, Fahrgestellnummer) |
| 0xE06C | Nachrichtenfehler(36Ah, Status Fernlicht Assistenz) |
| 0xE06D | Nachrichtenfehler(3B0h, Status Gang Rueckwaerts) |
| 0xE06E | Nachrichtenfehler(3CCh, Navigationsgraph Geschwindigkeit) |
| 0xE06F | Nachrichtenfehler(3F7h, Navigationsgraph Fahrspur) |
| 0xE070 | Nachrichtenfehler(2F7h, Einheiten) |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA928 | 2 | 3 | 4 | - |
| 0xA929 | 2 | 3 | 4 | - |
| 0xA92B | 2 | 3 | 4 | - |
| 0xA92C | 2 | 3 | 4 | - |
| 0xA92D | 2 | 3 | 4 | - |
| 0xA92F | 2 | 3 | 4 | - |
| 0xA931 | 2 | 3 | 4 | - |
| 0xA932 | 2 | 3 | 4 | - |
| 0xA933 | 2 | 3 | 4 | - |
| 0xA934 | 2 | 3 | 4 | - |
| 0xA936 | 2 | 3 | 4 | - |
| 0xA937 | 2 | 3 | 4 | - |
| 0xA938 | 2 | 3 | 4 | - |
| 0xA939 | 2 | 3 | 4 | - |
| 0xA93A | 2 | 3 | 4 | - |
| 0xA93B | 2 | 3 | 4 | - |
| 0xA93C | 2 | 3 | 4 | - |
| 0xA93D | 2 | 3 | 4 | - |
| 0xA93E | 2 | 3 | 4 | - |
| 0xE047 | 2 | 3 | 4 | - |
| 0xE054 | 2 | 3 | 4 | - |
| 0xE055 | 2 | 3 | 4 | - |
| 0xE056 | 2 | 3 | 4 | - |
| 0xE057 | 2 | 3 | 4 | - |
| 0xE058 | 2 | 3 | 4 | - |
| 0xE059 | 2 | 3 | 4 | - |
| 0xE05A | 2 | 3 | 4 | - |
| 0xE05B | 2 | 3 | 4 | - |
| 0xE05C | 2 | 3 | 4 | - |
| 0xE05D | 2 | 3 | 4 | - |
| 0xE05E | 2 | 3 | 4 | - |
| 0xE05F | 2 | 3 | 4 | - |
| 0xE060 | 2 | 3 | 4 | - |
| 0xE061 | 2 | 3 | 4 | - |
| 0xE062 | 2 | 3 | 4 | - |
| 0xE063 | 2 | 3 | 4 | - |
| 0xE064 | 2 | 3 | 4 | - |
| 0xE065 | 2 | 3 | 4 | - |
| 0xE066 | 2 | 3 | 4 | - |
| 0xE067 | 2 | 3 | 4 | - |
| 0xE068 | 2 | 3 | 4 | - |
| 0xE069 | 2 | 3 | 4 | - |
| 0xE06A | 2 | 3 | 4 | - |
| 0xE06B | 2 | 3 | 4 | - |
| 0xE06C | 2 | 3 | 4 | - |
| 0xE06D | 2 | 3 | 4 | - |
| 0xE06E | 2 | 3 | 4 | - |
| 0xE06F | 2 | 3 | 4 | - |
| 0xE070 | 2 | 3 | 4 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 2 | Relativzeit | s | high | signed long | - | 1 | 1 | 0 |
| 3 | Aussentemperatur | °C | high | signed char | - | 1 | 1 | 0 |
| 4 | Batteriespannung | V | high | unsigned int | - | 1 | 1000 | 0 |

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
| 0x9340 | EyeQ: Interner Fehler |
| 0x9341 | EyeQ: Verlust der Kommunikation |
| 0x9342 | Kamerasensor ueberhitzt |
| 0x9343 | nvm_e_write_failed |
| 0x9344 | nvm_e_read_failed |
| 0x9345 | nvm_e_control_failed |
| 0x9346 | nvm_e_erase_failed |
| 0x9347 | nvm_e_write_all_failed |
| 0x9348 | nvm_e_read_all_failed |
| 0x9349 | nvm_e_wrong_config_id |
| 0x934A | CBT Failure |
| 0x934B | TLC Actuator ueberhitzt |
| 0x934C | Coding Failed |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9340 | 2 | 3 | 4 | - |
| 0x9341 | 2 | 3 | 4 | - |
| 0x9342 | 2 | 3 | 4 | - |
| 0x9343 | 2 | 3 | 4 | - |
| 0x9344 | 2 | 3 | 4 | - |
| 0x9345 | 2 | 3 | 4 | - |
| 0x9346 | 2 | 3 | 4 | - |
| 0x9347 | 2 | 3 | 4 | - |
| 0x9348 | 2 | 3 | 4 | - |
| 0x9349 | 2 | 3 | 4 | - |
| 0x934A | 2 | 3 | 4 | - |
| 0x934B | 2 | 3 | 4 | - |
| 0x934C | 2 | 3 | 4 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 2 | Relativzeit | s | high | signed long | - | 1 | 1 | 0 |
| 3 | Aussentemperatur | °C | high | signed char | - | 1 | 1 | 0 |
| 4 | Batteriespannung | V | high | unsigned int | - | 1 | 1000 | 0 |

### TAC_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | TAC in progress |
| 0x01 | Calibration successfully completed |
| 0x02 | Success -> continue calibration |
| 0x03 | Insufficient image quality |
| 0x04 | No target located |
| 0x05 | Targets out of range |
| 0x06 | Inconsistency between left and right target (for instance wrong pitch angle) |
| 0x07 | TAC parameters out of range |
| 0x08 | Calibration values out of range (Note: limits are codable in EEPROM) |
| 0x09 | TAC undefined error |
| 0xXY | Invalid status received |

### SPANNUNGEN_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | Unterhalb Limit |
| 0x02 | Normal |
| 0x03 | Oberhalb Limit |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### VORHANDEN_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Nicht Vorhanden |
| 0x01 | Vorhanden |
| 0xXY | Invalid status received |

### ZEICHEN_NR_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Kein Zeichen erkannt |
| 0x01 | Beschraenkungszeichen |
| 0x02 | Aufhebungszeichen |
| 0xFF | Ungueltige Kamerainformation |
| 0xXY | Invalid status received |

### GESCHWINDIGKEIT_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Aufhebung alles |
| 0x01 | Erkannte Geschwindigkeit (Aufloesung 5km/h) |
| 0x02 | Ungueltig |
| 0xXY | Invalid status received |

### GUETE_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Erkennungsqualitaet in Prozent |
| 0x01 | Ungueltig |
| 0xXY | Invalid status received |

### BELEUCHTUNG_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Keine ausreichende Beleuchtung erkannt |
| 0x01 | Ausreichende Beleuchtung erkannt |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### V_FAHRZEUG_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Kein vorausfahrendes Fahrzeug erkannt |
| 0x01 | Vorausfahrendes Fahrzeug erkannt |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### E_FAHRZEUG_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Kein entgegenkommendes Fahrzeug erkannt |
| 0x01 | Entgegenkommendes Fahrzeug erkannt |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### FLA_TAGERKENNUNG_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Keine Helligkeit (Nacht) erkannt |
| 0x01 | Helligkeit (Nacht) erkannt |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### FLA_GESCHWINDIGKEIT_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Geschwindigkeit über Limit |
| 0x01 | Geschwindigkeit unter Limit |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### FLA_VERZOEGERUNG_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Keine Verzoegerung |
| 0x01 | Verzoegerung |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### FLA_SENSORTEMPERATUR_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Temperatur außerhalb des Arbeitsbereiches |
| 0x01 | Temperatur zulässig |
| 0xXY | Invalid request |

### FLA_NEBELERKENNUNG_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Kein Nebel erkannt |
| 0x01 | Nebel erkannt |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### VERBINDUNG_KAM_NR_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | Information nicht verfügbar, Anfrage wiederholen |
| 0x02 | Kameraverbindung in Ordnung |
| 0x03 | Videoleitungen: |
| 0x04 | Dataleitungen: |
| 0x05 | LVDS Leitungs: |
| 0x06 | Versorgungsleitungen: |
| 0x07 | Fehler |
| 0xXY | Invalid status received |

### KAFAS_INIT_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | KAFAS nicht initialisiert |
| 0x01 | KAFAS initialisiert |
| 0x02 | Information noch nicht verfuegbar |
| 0xFF | KAFAS Initialisierung fehlerhaft |
| 0xXY | Invalid status received |

### VIN_STATUS_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Keine Uebereinstimmung |
| 0x01 | Uebereinstimmung |
| 0x02 | Kein Zugriff auf VINs, Anfrage wiederholen |
| 0xXY | Invalid status received |

### SPANNUNG_STROM_KAM_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x01 | Unterhalb des Limits |
| 0x02 | Normal |
| 0x03 | Oberhalb des Limits |
| 0xFF | Ungueltig |
| 0xXY | Invalid status received |

### SAK_AKTION_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Alle Anzeigen im Kombi ausgeschaltet |
| 0x01 | Set ST_TLC aktiv |
| 0x02 | Balken rechts anzeigen |
| 0x04 | Balken links anzeigen |
| 0x07 | Balken rechts und links anzeigen |
| 0x08 | Aktivierungsanzeige = Verfügbarkeitsschwelle anzeigen |
| 0x10 | Verfügbarkeit rechts |
| 0x20 | Verfügbarkeit links |
| 0xFF | Ungueltig |
| 0xXY | Invalid request |

### SBN_AKTION_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0x02 | Keine Empfehlung |
| 0x03 | Zurück zum Normalmodus |
| 0xXY | Invalid request |

### SDMF_AKTION_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Demo-Mode Ausschalten |
| 0x01 | Demo-Mode Einschalten |
| 0xXY | Invalid request |

### KALIB_SERVICE_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Blockagetest nicht gestartet, SPC nicht gestartet |
| 0x01 | Blockagetest aktiv, SPC nicht gestartet |
| 0x02 | Blockagetest erfolgreich beendet, SPC aktiv |
| 0x03 | Blockagetest erfolgreich beendet, SPC erfolgreich abgeschlossen |
| 0xXY | Invalid status received |

### TEST_FUNKTIONAL_TLC_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Service not running (yaw and speed values from vehicle CAN) |
| 0x01 | Service running (yaw and speed values from diagnostic job) |
| 0xXY | Invalid status received |

### SLI_METHODE_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Activate camera-based recognition only |
| 0x01 | Activate map-based recognition only |
| 0x02 | Activate consolidated recognition |
| 0xFF | Reset to standard configuration coded in EEPROM |
| 0xXY | Invalid request |

### PIXEL_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0xFFFF | Invalid value |
| 0xXY | Pixel |

### DEGREE_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0xFFFF | Invalid value |
| 0xXY | 0.01 * degree |

### KAM_HOHE_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0xFFFF | Invalid value |
| 0xXY | mm, Height of camera above ground |

### SUPLEMENTAL_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Km/h |
| 0x01 | % (percent) |
| 0x02 | 1V resolution |
| 0x03 | 1mV resolution |
| 0x04 | 1mA resolution |
| 0xXY | Invalid entry |

### FLA_FERNLICHT_SCHALTEN_TEXT

| WERT | DESCRIPTION |
| --- | --- |
| 0x00 | Keine Empfehlung (Defekt erkannt, Sichtfeld verdreckt) |
| 0x01 | Fernlicht AUS |
| 0x02 | Fernlicht EIN |
| 0xFF | Ungueltig |
| 0xXY | Invalid request |

### HW_REVISION_TAB

| WERT | DESCRIPTION |
| --- | --- |
| 0x02 | B2 |
| 0x78 | B2_1 |
| 0xC9 | C0 Labor V02 |
| 0xCA | C0 BMW V01 |
| 0xD3 | C0 BMW V02 |
| 0xD4 | C1 BMW V02 |
| 0xD6 | C2 BMW V01 |
| 0xD7 | C3 BMW V01 |
| 0xD8 | C4 BMW V01 |
| 0xXY | Undefined Revision |
