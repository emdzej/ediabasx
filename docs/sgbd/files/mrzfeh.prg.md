# mrzfeh.prg

## General

|  |  |
| --- | --- |
| File | mrzfeh.prg |
| Type | PRG |
| Jobs | 88 |
| Tables | 30 |
| Origin | BMW_AG UX-EE-2 Andree |
| Revision | 2.101 |
| Author | BMW_AG UX-EE-1 Stoffregen, ESG UX-EE-1 Sergl, BMW_AG UX-EE-1 Kr |
| ECU Comment | Erstellung aus ZFE_15.b2s |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MRZFEH |  |  |
| ORIGIN | string | BMW_AG UX-EE-2 Andree |  |  |
| REVISION | string | 2.101 |  |  |
| AUTHOR | string | BMW_AG UX-EE-1 Stoffregen, ESG UX-EE-1 Sergl, BMW_AG UX-EE-1 Kr |  |  |
| COMMENT | string | Erstellung aus ZFE_15.b2s |  |  |
| PACKAGE | string | 1.66 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

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

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F0A Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F0A Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### STATUS_CODIERUNG

Lesen der Konfigurationsparameter der ZFE KWP2000:      $22 ReadDataByCommonIdentifier $300F DataGroup CodingDone (EEPROM) Modus:        Default

_No arguments._

### STATUS_KONFIGURATION

Lesen der Konfigurationsparameter der ZFE KWP2000:      $22 ReadDataByCommonIdentifier $300B (C07) bzw. $300A (C08) DataGroup Configuration Parameter (EEPROM) Modus:        Default

_No arguments._

### STATUS_DIGITAL

Lesen digitaler Stati der Ausgaenge ZFE KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Only Digital Output Signals (siehe ControlState.xls) $01 ReportCurrentState Modus:        Default

_No arguments._

### STATUS_ANALOG_AUSGANG

Lesen der PWM Ausgaenge ZFE und der Geschwindigkeit KWP2000:      $30 InputOutputControlByLocalIdentifier $04 Only Analog Output Signals (siehe ControlState.xls) $01 ReportCurrentState Modus:        Default

_No arguments._

### STATUS_ANALOG_EINGANG

Lesen analoger Eingaenge der ZFE KWP2000:      $30 InputOutputControlByLocalIdentifier $03 Analog Input Signals (siehe ControlState.xls) $01 ReportCurrentState KWP2000:      $22 ReadDataByCommonIdentifier $300B DataGroup Configuration Parameter (EEPROM) Modus:        Default

_No arguments._

### STATUS_SCHALTER

Lesen der Stati der Eingaenge der ZFE KWP2000:      $30 InputOutputControlByLocalIdentifier $01 Digital Inputs (siehe ControlState.xls) $01 ReportCurrentState Modus:        Default

_No arguments._

### STATUS_ESA

Lesen der aktuellen ESA-Position KWP2000:      $30 InputOutputByLocalIdentifier $06 ESA $01 ReportCurrentState Modus:        Default

_No arguments._

### STATUS_WINDSCHILD

Status des Windschilds KWP2000:      $30 InputOutputByLocalId $05 Windshield $01 Status Modus:        Default

_No arguments._

### STEUERN_VORBEREITEN

Kontrolle von ZFE an Diagnosesystem uebergeben KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Outputs (siehe ControlState.xls) $05 FreezeCurrentState $04 Analog Outputs (siehe ControlState.xls) Modus:        Default

_No arguments._

### STEUERN_ABBLENDLICHT

Abblendlicht direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls) $07 ShortTermAdjustment $03 c_KL56b1_soft $0A c_KL56b2_soft Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten des Abblendlichts Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_FERNLICHT

Fernlicht direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls $07 ShortTermAdjustment $04 c_KL56a Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten des Fernlichts Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_STANDLICHT

Standlicht direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls) $07 ShortTermAdjustment $06 c_KL58_front_soft Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten des Standlichts Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_KENNZEICHENLEUCHTE

Kennzeichenleuchte direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls) $07 ShortTermAdjustment $10 c_licence_plate Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten der Kennzeichenleuchte Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_BREMSLICHT

Bremslicht direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $04 Analog Output Signals (siehe ControlState.xls) $07 ShortTermAdjustment $00 c_KL54 Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | int | PWM-Analogwert für Bremslicht Bereich: 0 bis 100 [%] |

### STEUERN_RUECKLICHT

Ruecklicht/Zusatzscheinwerfer K7x_MUE direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $04 Analog Output Signals (siehe ControlState.xls) $07 ShortTermAdjustment $01 c_KL58_rear Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | int | PWM-Analogwert für Rücklicht/Zusatzscheinwerfer Bereich: 0 bis 100 [%] |

### STEUERN_BLINKER_LINKS

Linken Blinker direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls $07 ShortTermAdjustment $0E c_KLbl Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten des linken Blinkers Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_BLINKER_RECHTS

Rechten Blinker direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls $07 ShortTermAdjustment $0D c_KLbr Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten des rechten Blinkers Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_GRIFFHEIZUNG

Griffheizung ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls $07 ShortTermAdjustment $07 c_handlerheat Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten der Griffheizung Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_SITZHEIZUNG_FAHRER

Sitzheizung Fahrer ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls $07 ShortTermAdjustment $09 seat_heating_drv Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten der Sitzheizung Fahrer Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_SITZHEIZUNG_SOZIUS

Sitzheizung Sozius ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls $07 ShortTermAdjustment $08 seat_heating_pas Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten der Sitzheizung Sozius Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_HUPE

Hupe direkt ansteuern Vorbedingung: Ausführung des Jobs STEUERN_VORBEREITEN KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Output Signals (siehe ControlState.xls) $07 ShortTermAdjustment $05 horn Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Aus- u. Einschalten der Hupe Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_BEENDEN

Kontrolle an ZFE zurueckgeben KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Digital Outputs (siehe ControlState.xls) $00 ReturnControlToEcu $04 Analog Outputs (siehe ControlState.xls) Modus:        Default

_No arguments._

### STEUERN_ESA

ESA ansteuern KWP2000:      $30 InputOutputControlByLocalIdentifier $06 ESA $07 ShortTermAdjustment $XX $YY ESA Parameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| ESA_BELADUNG | string | Federbasisparameter Werte:E,EB,SO,HU,BE table Steuern_ESA_Arg1 ESA_TEXT |
| ESA_DAEMPFUNG | string | Federdämpfungsparameter Werte:C / soft, N / normal, S / hard table Steuern_ESA_Arg2 ESA_TEXT |

### STEUERN_WINDSCHILD

Windschild ansteuern KWP2000:      $30 InputOutputControlByLocalIdentifier $05 Windshield $07 ShortTermAdjustment $XX Windshield Parameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| WS_OPTION | string | Windschild ansteuern Werte: table Steuern_Windshield_Arg WINDSHIELD_TEXT |

### STEUERN_START_ESA_KALIBRIERUNG

Start der ESA-Kalibrierung KWP2000:      $31 StartRoutineByLocalId $22 ESA $01 Rear ESA: Start Reference Run in SO Postion $04 Rear ESA: Start Reference Run in every Postion $05 Front ESA: Start Reference Run in SO Postion $08 Front ESA: Start Reference Run in every Postion $09 Both ESA: Start Reference Run in SO Postion $0C Both ESA: Start Reference Run in every Postion Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| CAL_TYPE | char | Werte: kein Argument od. 1.. Kalibrierung Hinten aus jeder Federbeinposition 2.. Kalibrierung Hinten mit max. vorgespanntem Federbein 3.. Kalibrierung Vorne aus jeder Federbeinposition 4.. Kalibrierung Vorne mit max. vorgespanntem Federbein 5.. Kalibrierung Vorne und Hinten aus jeder Federbeinposition 6.. Kalibrierung Vorne und Hinten mit max. vorgespanntem Federbein |

### STEUERN_START_KALIBRIERUNG_FOLIENGEBER

Start der Kalibrierung des Foliengebers KWP2000:      $31 StartRoutineByLocalId $20 Thermocouples $01 Start Calibration Modus:        Default

_No arguments._

### STEUERN_START_KALIBRIERUNG_WINDSCHILD

Start der Kalibrierung des Windschildes KWP2000:      $31 StartRoutineByLocalId $21 Windshield $01 Start Reference Run Modus:        Default

_No arguments._

### STEUERN_BBVA_INIT

Initialisieren der Bremsbelagsverschleißanzeige Mit diesem Job kann die Bremsbelagsverschleißanzeige nach dem Verbauen neuer Bremsbeläge neu initialisiert werden KWP2000:      $31 StartRoutineByLocalId $23 Brake Pad $01 Reset BrakePadWornOutFront or $02 Reset BrakePadWornOutRear or $03 Reset BrakePadWornOutFront & BrakePadWornOutRear Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| POSITION | unsigned char | Werte: 1.. vorne 2.. hinten 3.. vorne und hinten |

### STATUS_KALIBRIERUNG_ESA

Auslesen Status Kalibrierung ESA KWP2000:      $31 StartRoutineByLocalId $22 ESA $03 Status Reference Run Modus:        Default

_No arguments._

### STATUS_KALIBRIERUNG_FOLIENGEBER

Status Kalibrierung des Foliengebers KWP2000:      $31 StartRoutineByLocalId $20 Thermocouples $03 Status Calibration Modus:        Default

_No arguments._

### STATUS_KALIBRIERUNG_WINDSCHILD

Status Kalibrierung Windschild KWP2000:      $31 StartRoutineByLocalId $21 Windshield $03 Status of Reference Run Modus:        Default

_No arguments._

### STATUS_BBVA

Auslesen Status Bremsbelagsverschleißanzeige KWP2000:      $31 StartRoutineByLocalId $23 Brake Pad $04 Ask for status of BrakePadWear Modus:        Default

_No arguments._

### STATUS_WS_KALIBRIERSTROM

Kalibrierstrom Windschild KWP2000:      $23 ReadMemoryByAddress $03 $AC Adresse $03 NVRAM $02 Länge 2 Byte Modus:        Default

_No arguments._

### STATUS_SG_VARIANTE

Status Bestueckungsvariante der ZFEB Damit wird die (Bestueckungs-)Variante der ZFE(High Full Version, no ESA, ESA only,  Low,  Basic Low,Mid,High) zurueckgegeben KWP2000: $1A Ident $80 Ident  $23 ReadMemoryByAddress $00 High Byte $03 Mid Byte $8E Low Byte for ZFEBasic $E8 Low Byte for ZFEHigh

_No arguments._

### STATUS_ESA_HALL_POSITION

Lesen der aktuellen ESA-Hall-Position KWP2000:      $31 StartRoutineByLocalIdentifier $24 ESA Hall $01 Report max number of pulses rear, $02 Report acutal position rear $03 Number of pulses front, $03 Actual position front Modus:        Default

_No arguments._

### STATUS_SPEED_SENSOR_DF11I

Status Information (Zusatzinfo) beim DF11i KWP2000:      $30 InputOutputByLocalId $07 Speed Sensor DF11i Modus:        Default

_No arguments._

### STEUERN_EMERGENCY_SOFTWARE

Starten/Beenden der Emergency Software KWP2000:      $31 StartRoutineByLocalId $25 Emergency Software $01 Enable Emergency Software $02 Disable Emergency Software Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Emergency-SW ein- bzw. ausschalten Werte: 0 aus, 1 ein table DigitalArgument TEXT |

### _STATUS_FOLIENGEBER

Lesen analoger Eingaenge der ZFE KWP2000:      $30 InputOutputControlByLocalIdentifier $03 Analog Input Signals (siehe ControlState.xls) $01 ReportCurrentState KWP2000:      $22 ReadDataByCommonIdentifier $300B DataGroup Configuration Parameter (EEPROM) KWP2000:      $30 InputOutputControlByLocalIdentifier $04 Only Analog Output Signals (siehe ControlState.xls) $01 ReportCurrentState KWP2000:      $30 InputOutputControlByLocalIdentifier $02 Only Digital Output Signals (siehe ControlState.xls) $01 ReportCurrentState Modus:        Default

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

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
| 0xAC | SMR Automotive Mirrors |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA |
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive World Headquarters |
| 0xB6 | Hans Widmaier |
| 0xB7 | Robert Bosch Battery Systems GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
| 0xBA | BorgWarner |
| 0xBB | BMW - Fahrzeugsimulator |
| 0xBC | Benteler Duncan Plant |
| 0xBD | U-Shin |
| 0xBE | Schaeffler Technologies |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA2E8 | Kl30 Unterspannung |
| 0xA2E9 | Tankgeber |
| 0xA2EA | Handbremsschalter Kurzschluß nach Masse |
| 0xA2EB | Handbremsschalter Kurzschluß nach Plus |
| 0xA2EC | Handbremsschalter Leitungsunterbrechung |
| 0xA2ED | Fussbremsschalter Kurzschluß nach Masse |
| 0xA2EE | Fussbremsschalter Kurzschluß nach Plus |
| 0xA2EF | Fussbremsschalter Leitungsunterbrechung |
| 0xA2F1 | Geschwindigkeitssensor |
| 0xA2F2 | Taster Hupe |
| 0xA2F3 | Taster Warnblinkschalter |
| 0xA2F4 | Taster Blinker links |
| 0xA2F5 | Taster Blinker rechts |
| 0xA2F6 | Taster Blinkerrückstellung |
| 0xA2F7 | Rücklicht/Radio/NSL/Zusatzscheinwerfer Kurzschluß |
| 0xA2F8 | Rücklicht/NSL/Zusatzscheinwerfer Leitungsunterbrechung |
| 0xA2F9 | Standlicht Kurzschluß |
| 0xA2FA | Standlicht Leitungsunterbrechung |
| 0xA2FB | Fernlicht Kurzschluß |
| 0xA2FC | Fernlicht Leitungsunterbrechung |
| 0xA2FD | Abblendlicht 1 Kurzschluß |
| 0xA2FE | Abblendlicht 1 Leitungsunterbrechung |
| 0xA2FF | Abblendlicht 2 Kurzschluß |
| 0xA301 | Abblendlicht 2 Leitungsunterbrechung |
| 0xA302 | Bremslicht Kurzschluß |
| 0xA303 | Bremslicht Leitungsunterbrechung |
| 0xA306 | Blinker links Kurzschluß |
| 0xA307 | Blinker links Leitungsunterbrechung |
| 0xA308 | Blinker rechts Kurzschluß |
| 0xA309 | Blinker rechts Leitungsunterbrechung |
| 0xA30A | Hupe Kurzschluß |
| 0xA30B | Hupe Leitungsunterbrechung |
| 0xA30C | Heizgriffe Kurzschluß |
| 0xA30D | Heizgriffe Leitungsunterbrechung |
| 0xA30F | Bordsteckdose Kurzschluß |
| 0xA311 | CAN Time Out DWA |
| 0xA319 | CAN Bus Off |
| 0xA31A | CAN Time Out BMS-K |
| 0xA31B | CAN Time Out ABS |
| 0xA31C | CAN Time Out I-Kombi |
| 0xA31D | EEPROM Fehler |
| 0xA31E | Kl30 Überspannung |
| 0xA320 | Sitzheizung Fahrer Kurzschluß |
| 0xA321 | Sitzheizung Fahrer Leitungsunterbrechung |
| 0xA322 | Sitzheizung Beifahrer Kurzschluß |
| 0xA323 | Sitzheizung Beifahrer Leitungsunterbrechung |
| 0xA324 | Windschildverstellung/Federbeinverstellung vorne Kurzschluß |
| 0xA325 | Windschildverstellung/Federbeinverstellung vorne Leitungsunterbrechung |
| 0xA326 | Federbeinverstellung hinten Kurzschluß |
| 0xA327 | Federbeinverstellung hinten Leitungsunterbrechung/Kurzschluß |
| 0xA328 | Sensorsignal ESA hinten |
| 0xA329 | Sensorsignal Windschild / ESA vorne |
| 0xA32A | Federbeinverstellung hinten Position nicht erreicht |
| 0xA32B | Federbeinverstellung vorne Position nicht erreicht |
| 0xA32C | Druckstufenverstellung hinten Kurzschluß |
| 0xA32D | Druckstufenverstellung hinten Leitungsunterbrechung |
| 0xA32E | Zugstufenverstellung hinten Kurzschluß |
| 0xA32F | Zugstufenverstellung hinten Leitungsunterbrechung |
| 0xA330 | Zugstufenverstellung vorne Kurzschluß |
| 0xA331 | Zugstufenverstellung vorne Leitungsunterbrechung |
| 0xA332 | Heizdraht Tanksensor |
| 0xA333 | Taster Windschildverstellung auf |
| 0xA334 | Taster Windschildverstellung ab |
| 0xA335 | Taster ESA |
| 0xA336 | Energiesparmode aktiv |
| 0xA337 | Taster BC |
| 0xA33E | Tempomat Versorgung Kurzschluß nach Masse |
| 0xA33F | Externer Temperatursensor: Leitungsunterbrechung/Kurzschluss nach Plus |
| 0xA340 | Weckleitung Kurzschluß |
| 0xA341 | Fehler Kalibrierparameter Foliengeber |
| 0xA342 | Fehler Kalibrierparameter Windschild/ESA vorne |
| 0xA343 | Fehler Kalibrierparameter ESA |
| 0xA34D | Externer Temperatursensor: Kurzschluss nach Masse |
| 0xA352 | Tempomat Ansteuerung Kurzschluß nach Masse/Leitungsunterbrechung |
| 0xA355 | Geschwindigkeitssignal Ausgang Leitungsunterbrechung/Kurzschluß nach Masse |
| 0xA356 | Taster Griffheizung |
| 0xA357 | Taster Sitzheizung vorne |
| 0xA358 | Versorgung Hall-Sensor Federbein vorne Leitungsunterbrechung |
| 0xA359 | Versorgung Hall-Sensor Federbein hinten Leitungsunterbrechung |
| 0xA35A | Thermische Ueberlast Federbeinverstellung hinten |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA2E8 | 0x01 | 0x02 | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | -- | 185 | 2560 | 0 |
| 0x02 | Geschwindigkeit | km/h | high | unsigned int | -- | 1 | 16 | 0 |
| 0xFF | unbekannte Umweltbedingung | 1 | - | unsigned char | -- | 1 | 1 | 0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

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
| 0xFFFF | unbekannter Fehlerort |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| - | DS2 |
| 2 | D-CAN |

### STATUS_ESA_ARG3

| ESA_TEXT | ESA_WERT |
| --- | --- |
| ESA noch in alter Position | 0x00 |
| ESA-Verstellung läuft | 0x01 |
| ESA-Endposition erfolgreich erreicht | 0x02 |
| ESA-Fehler bei Ansteuerung | 0x03 |
| nicht gültig | 0xXY |

### STEUERN_ESA_ARG1

| ESA_TEXT | ESA_WERT | ESA_INFO |
| --- | --- | --- |
| E | 0x01 | Einzel |
| EB | 0x02 | Einzel Beladung |
| SO | 0x03 | Sozius |
| HU | 0x04 | Huegel |
| BE | 0x05 | Berg |
| nicht gültig | 0xXY | - |

### STEUERN_ESA_ARG2

| ESA_TEXT | ESA_WERT | ESA_INFO |
| --- | --- | --- |
| N | 0x01 | normal |
| C | 0x02 | comfort |
| S | 0x03 | sport |
| nicht gültig | 0xXY | - |

### STEUERN_WINDSHIELD_ARG

| WINDSHIELD_TEXT | WINDSHIELD_WERT |
| --- | --- |
| auf | 0x01 |
| ab | 0x02 |
| stopp | 0x00 |
| up | 0x01 |
| down | 0x02 |
| stop | 0x00 |
| 1 | 0x01 |
| 2 | 0x02 |
| 0 | 0x00 |

### TAB_ZFE_VARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00 | ZFEBasic_Low |
| 0x01 | ZFEBasic_Mid |
| 0x02 | ZFEBasic_High |
| 0x10 | ZFELow |
| 0x20 | ZFEHigh Full Version |
| 0x21 | ZFEHigh no ESA |
| 0x22 | ZFEHigh ESA only |
| 0xff | Keine_gueltige_Variante |

### TAB_BBVA

| STATUS_ID | STATUS_NUMMER | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | 0 | Status OK - Bremsbeläge i.O. |
| 0x01 | 1 | Bremsbelag vorne verschlissen |
| 0x02 | 2 | Bremsbelag hinten verschlissen |
| 0x03 | 3 | Bremsbelag vorne und hinten verschlissen |
| 0xFD | 4 | Steuergerätereset wird abgewartet |
| 0xXY | -1 | nicht gültig |

### TAB_KALIBRIERUNG_ESA

| STATUS_ID | STATUS_NUMMER | STATUS_TEXT |
| --- | --- | --- |
| 0xFD | 1 | Kalibrierung aktiviert, läuft aber noch nicht |
| 0xFE | 2 | Kalibrierung wird durchgeführt |
| 0x00 | 3 | Kalibrierung erfolgreich abgeschlossen |
| 0x01 | 5 | Fehler ESA Sensor Hinten |
| 0x02 | 4 | Kalibrierung Hinten durch Anwender gestoppt |
| 0x03 | 5 | Fehler ESA Sensor Vorne |
| 0x04 | 4 | Kalibrierung Vorne durch Anwender gestoppt |
| 0x05 | 6 | Kalibrierung Hinten erfolgreich abgeschlossen, Kalibrierung Vorne wird durchgeführt |
| 0x06 | 7 | Kalibrierung Vorne erfolgreich abgeschlossen, Kalibrierung Hinten wird durchgeführt |
| 0x07 | 8 | Kalibrierung Hinten erfolgreich abgeschlossen, ESA Vorne fehlerhaft |
| 0x08 | 9 |  Kalibrierung Vorne erfolgreich abgeschlossen, ESA hinten fehlerhaft |
| 0x09 | 10 |  ESA Hinten fehlerhaft, Kalibrierung Vorne wird durchgeführt |
| 0x0A | 11 |  ESA Vorne fehlerhaft, Kalibrierung Hinten wird durchgeführt |
| 0x0B | 4 | Kalibrierung ESA Vorne und Hinten durch Anwender gestoppt |
| 0x0C | 12 | Minimale Pulsanzahl beider ESA nicht erreicht |
| 0x0D | 12 | Nach Kalibrierung beider ESAs minimale Pulszahl hinten nicht erreicht |
| 0x0E | 12 | Nach Kalibrierung beider ESAs minimale Pulszahl vorne nicht erreicht |
| 0x0F | 12 | Minimale Pulszahl hinten nicht erreicht |
| 0xFF | -1 | nicht gültig |
| 0xXY | 4 | Fehler bei Kalibrierung |

### TAB_KALIBRIERUNG_FOLIENGEBER

| STATUS_ID | STATUS_NUMMER | STATUS_TEXT |
| --- | --- | --- |
| 0xFD | 1 | Kalibrierung aktiviert, läuft aber noch nicht |
| 0xFE | 2 | Kalibrierung wird durchgeführt |
| 0x00 | 3 | Kalibrierung erfolgreich abgeschlossen |
| 0xFF | -1 | nicht gültig |
| 0xXY | 4 | Fehler bei Kalibrierung |

### TAB_KALIBRIERUNG_WINDSCHILD

| STATUS_ID | STATUS_NUMMER | STATUS_TEXT |
| --- | --- | --- |
| 0xFD | 1 | Kalibrierung wird durchgeführt |
| 0xFE | 2 | Kalibrierung wird durchgeführt |
| 0x00 | 3 | Kalibrierung erfolgreich abgeschlossen |
| 0xFF | -1 | nicht gültig |
| 0xXY | 4 | Fehler bei Kalibrierung |

### TAB_SENSOR_DF11I

| STATUS_ID | STATUS_NUMMER | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | 0 | STOP (Standstill) |
| 0x01 | 1 | LR |
| 0x02 | 2 | DR-L |
| 0x03 | 3 | DR-R |
| 0x04 | 4 | DR-L/EL |
| 0x05 | 5 | DR-R/EL |
| 0xXY | 255 | unbekannter Status |
