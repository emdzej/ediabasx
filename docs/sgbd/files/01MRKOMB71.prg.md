# 01MRKOMB71.prg

## General

|  |  |
| --- | --- |
| File | 01MRKOMB71.prg |
| Type | PRG |
| Jobs | 90 |
| Tables | 54 |
| Origin | BMW UX-EE-2 Hamm |
| Revision | 1.000 |
| Author | BMW_AG UX-EE-1 Krimmer |
| ECU Comment | nur zum Programmieren XKOMB3 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | K7xKombi |  |  |
| ORIGIN | string | BMW UX-EE-2 Hamm |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | BMW_AG UX-EE-1 Krimmer |  |  |
| COMMENT | string | nur zum Programmieren XKOMB3 |  |  |
| PACKAGE | string | 1.71 |  |  |
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

### STATUS_LED

liest den Zustand der LEDs aus KWP2000: $30 InputOutputControlByLocalIdentifier $02 Bereich LEDs $01 ReportCurrentState Modus  : Default 1 = LED Ein    0 = LED Aus

_No arguments._

### STATUS_IO

liest den Zustand der IOs aus KWP2000: $21 ApplDiagReadDataByLocalIdentifier $03 Status der Digitaleingaenge 1= Taste gedrueckt / Wakeleitung aktiv (d.h. High) 0= Taste nicht gedrueckt / Wakeleitung nicht aktiv (d.h. Low)

_No arguments._

### STATUS_ANALOG

liest den Wert der aus der an den AD- Eingängen gemessen wird KWP2000: $21 InputOutputControlByLocalIdentifier $02 Status Analog

_No arguments._

### STATUS_GWSZ_ANZEIGE

Ausgabe des aktuellen GWSZ Standes KWP2000: $21 ApplDiagReadDataByLocalIdentifier $01 Status Gesamtwegstrecke

_No arguments._

### STATUS_TANK

liefert einige Informationeen über den Tankinhalt KWP2000: $21 ApplDiagReadDataByLocalIdentifier $04 Status Tank

_No arguments._

### STATUS_CAN_OUT

Daten die vom I- Kombi auf dem CAn versendet werden KWP2000: $21 ApplDiagReadDataByLocalIdentifier $05 Status CAN OUT

_No arguments._

### STATUS_CAN_IN_DWA

Daten die von der DWA auf dem CAN versendet werden KWP2000: $21 ApplDiagReadDataByLocalIdentifier $06 Status CAN IN DWA

_No arguments._

### STATUS_CAN_IN_ZFE

Daten die von der ZFE auf dem CAN versendet werden KWP2000: $21 ApplDiagReadDataByLocalIdentifier $07 Status CAN IN ZFE

_No arguments._

### STATUS_CAN_IN_ABS

Daten die vom ABS auf dem CAN versendet werden KWP2000: $21 ApplDiagReadDataByLocalIdentifier $08 Status CAN IN ABS

_No arguments._

### STATUS_CAN_IN_GESCHW

Daten die in der GESCHW Botschaft auf dem CAN versendet werden KWP2000: $21 ApplDiagReadDataByLocalIdentifier $09 Status CAN IN GESCHW

_No arguments._

### STATUS_CAN_IN_MOTOR

Daten die vom BMSK auf dem CAN versendet werden KWP2000: $21 ApplDiagReadDataByLocalIdentifier $0A Status CAN IN MOTOR

_No arguments._

### STATUS_GESCHWINDIGKEIT

liest die aktuell angezeigt Geschwindigkeit aus KWP2000: $30 InputOutputControlByLocalIdentifier $03 Bereich Geschwindigkeit $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_GESCHWINDIGKEIT

steuert die Geschwindigkeit über den Tester KWP2000: $30 InputOutputControlByLocalIdentifier $03 Bereich Geschwindigkeit $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GESCHWINDIGKEIT | unsigned int | Geschwindigkeit, die vom Zeiger angezeigt werden soll |

### STEUERN_GESCHWINDIGKEIT_ENDE

übergibt die Kontrolle über die Geschwindigkeitsanzeige wieder an das Kombi KWP2000: $30 InputOutputControlByLocalIdentifier $03 Bereich Geschwindigkeit $00 returnControlToECU Modus  : Default

_No arguments._

### STATUS_DREHZAHL

liest die aktuelle Drehzahl aus KWP2000: $30 InputOutputControlByLocalIdentifier $04 Bereich Drehzahl $01 ReportCurrentState Modus  : Default

_No arguments._

### STEUERN_DREHZAHL

steuert die Drehzahl über den Tester KWP2000: $30 InputOutputControlByLocalIdentifier $04 Bereich Drehzahl $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DREHZAHL | unsigned int | Drehzahl, die vom Zeiger angezeigt werden soll Der gewuenschte Drehzahlwert wird direkt (1:1) angegeben.  z.B. fuer 2000 1/min = 2000 angeben |

### STEUERN_DREHZAHL_ENDE

übergibt die Kontrolle über die Drehzahlanzeige wieder an das Kombi KWP2000: $30 InputOutputControlByLocalIdentifier $04 Bereich Drehzahl $00 returnControlToECU Modus  : Default

_No arguments._

### STEUERN_DISPLAY

steuert die Drehzahl über den Tester KWP2000: $30 InputOutputControlByLocalIdentifier $05 Bereich Display $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DISPLAY | unsigned char | Gibt das Anzeigeverhalten des Displays vor 0x00 => Display loeschen 0x01 => Display komplett ansteuern 0x02 => Testmuster 1 darstellen 0x03 => Testmuster 2 darstellen 0x04 => Testmuster 3 darstellen 0x05 => Testmuster 4 darstellen 0x06 => Testmuster 1-4 im Wechsel anzeigen 0xEE => Erweiterter Modus. 20 Datenbytes mit bitweiser Zuordnung zu den Displaysegmenten muessen hinzugefuegt werden. Achtung: Steuergeraet ueberprueft die Nachrichtenlaenge |
| DATA | string | 20 Bytes mit bitweiser Zuordnung zu den Displaysegmenten Nur erforderlich, wenn DISPLAY = 0xEE Folgende Formate werden unterstuetzt: "00 01 02 03 04..." und "0x00, 0x01, 0x02, 0x03, ..." |

### STEUERN_DISPLAY_ENDE

übergibt die Kontrolle über die Displayanzeige wieder an das Kombi KWP2000: $30 InputOutputControlByLocalIdentifier $05 Bereich Display $00 returnControlToECU Modus  : Default

_No arguments._

### STEUERN_LED

steuert die LEDs über den Tester KWP2000: $30 InputOutputControlByLocalIdentifier $02 Bereich LEDs $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LED_BYTE_1 | unsigned char | Low Byte welches bestimmt für welche LED die Kontrolle wieder an das Kombi übergeben werden soll ---- ---1b  => Blinker links grün ---- --1-b  => Blinker rechts grün ---- -1--b  => Fernlicht blau ---- 1---b  => ABS rot ---1 ----b  => ABS gelb --1- ----b  => Warnleuchte rot -1-- ----b  => Warnleuchte gelb 1--- ----b  => Neutral grün |
| LED_BYTE_2 | unsigned char | Low Byte welches bestimmt für welche LED die Kontrolle wieder an das Kombi übergeben werden soll ---- ---1b  => Öldruck rot ---- --1-b  => Tank Reserve gelb ---- -1--b  => DWA LED rot ---- 1---b  => ASC LED gelb (K27) ---1 ----b  => Ladekontrolle rot (K27) --1- ----b  => Zusatzscheinwerfer gruen (K7X_MUE) -1-- ----b  => MIL gelb (K7x_TUE/LCI) 1--- ----b  => --- |
| LED_SCHALTEN | unsigned char | bestimmt ob die ausgewählte LED ein oder ausgeschaltet werden soll 0x00 => LED ausschalten 0x01 => LED einschalten |

### STEUERN_LED_ENDE

übergibt die Kontrolle über die LED wieder an das Kombi KWP2000: $30 InputOutputControlByLocalIdentifier $02 externes Steuern Selbstest $00 returnControlToECU Modus  : Default

_No arguments._

### STEUERN_PWM

steuert die Drehzahl über den Tester KWP2000: $30 InputOutputControlByLocalIdentifier $06 Bereich PWM $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PWM_LCD | unsigned int | PWM Wert fuer die LCD- Beleuchtung Prozentwerte im Bereich von 1 bis 99 sind erlaubt |
| PWM_SUCH | unsigned int | PWM Wert fuer die Such- Beleuchtung Prozentwerte im Bereich von 1 bis 99 sind erlaubt |
| PWM_FUNKTIONS | unsigned int | PWM Wert fuer die Funktions- Beleuchtung Prozentwerte im Bereich von 1 bis 99 sind erlaubt |

### STEUERN_PWM_ENDE

übergibt die Kontrolle über die Drehzahlanzeige wieder an das Kombi KWP2000: $30 InputOutputControlByLocalIdentifier $06 Bereich PWM $00 returnControlToECU Modus  : Default

_No arguments._

### STEUERN_TASTER

steuert die Taster über den Tester KWP2000: $30 InputOutputControlByLocalIdentifier $01 Bereich Taster $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TASTER | unsigned char | bestimmt welcher Taster von aussen gesteuert werden soll O => Taste gedrueckt 1 => Taste nicht gedrueckt 0x01  => Uhr- Taster 0x02  => Trip- Taster 0x04  => Doppeltastendruck |
| TASTENDRUCK_ART | unsigned char | bestimmt welcher Taster von aussen gesteuert werden soll 0x01  => kurzer Tastendruck 0x02  => langer Tastendruck |

### STEUERN_TASTER_ENDE

übergibt die Kontrolle über die IOs wieder an das Kombi KWP2000: $30 InputOutputControlByLocalIdentifier $01 Bereich Taster $00 returnControlToECU Modus  : Default

_No arguments._

### START_SELBSTTEST

Starten des Selbsttest KWP2000: $31 StartRoutineByLocalIdentifier $04 Selbstest starten Modus  : Default

_No arguments._

### STOPP_SELBSTTEST

Stoppen des Selbsttest KWP2000: $32 StopRoutineByLocalIdentifier $04 Selbstest beenden Modus  : Default

_No arguments._

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F0A Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F0A Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### STATUS_AUSSTATTUNG

liest den Inhalt des Codierblockes 3007 (Ausstattung) KWP2000: $22 InputOutputControlByLocalIdentifier $3007 Block 'Ausstattung' Modus  : Default 1 = Ausstattung ist als aktiv / verbaut  codiert 0 = Ausstattung ist als nicht aktiv / nicht verbaut  codiert

_No arguments._

### STEUERN_GWSZ_ANZEIGE_SCHREIBEN

Schreibt einen km Wert in den GWSZ-EEPROM-Bereich KWP2000: $31 StartRoutineByLocalIdentifier $AA GWSZ schreiben Modus  : Default  Damit das Einschreiben funktioniert, muessen folgende Bedingungen erfuellt sein: - GWZS-Offsetzelle im EEPROM muss == 0 sein - neuer GWSZ-Wert muss > alter GWSZ-Wert und < 999999 km sein - Betriebsspannung muss im normalen Bereich sein

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_WERT | real | Kilometer-Wert, der in das Kombi geschrieben werden soll (nur ganze km-Werte < 999999 eingeben) |
| GWSZ_ANZEIGE_EINH | string | km od. miles |

### STATUS_DATE_TIME

Kombiinternes Datum und Uhrzeit auslesen KWP2000: $21 ApplDiagReadDataByLocalIdentifier $10 Read Date/Time

_No arguments._

### STATUS_SERVICE_DATE

Kombiinternes Service_Datum auslesen KWP2000: $21 ApplDiagReadDataByLocalIdentifier $11 Read Service_Date

_No arguments._

### STEUERN_DATE_TIME

kombiinternes Datum und Uhrzeit Setzen KWP2000: $3B ApplDiagWriteDataByLocalIdentifier $10 Set Date/Time Wenn keine Argumente uebergeben werden, werden die Daten werden vom PC bzw. Tester uebernommen

| Name | Type | Description |
| --- | --- | --- |
| TIME_HH | int | Zeit: Stunden  HH = 0..23 kein Argument - Rechnerzeit |
| TIME_MM | int | Zeit: Minuten  MM = 0..59 kein Argument - Rechnerzeit |
| TIME_SS | int | ZEIT: Sekunden  SS = 0..59 kein Argument - Rechnerzeit |
| DATE_DD | int | Datum: Tag  TT = 1..28,29,30,31 kein Argument - Rechnerdatum |
| DATE_MM | int | Datum: Monat  MM = 1..12 kein Argument - Rechnerdatum |
| DATE_YYYY | int | Datum: Jahr  YYYY = 2006..2099 kein Argument - Rechnerdatum |

### STEUERN_SERVICE_DATE

kombiinternes Service-Datum Setzen KWP2000: $3B ApplDiagWriteDataByLocalIdentifier $10 Set Service_Date

| Name | Type | Description |
| --- | --- | --- |
| SERV_DATE_DD | int | Service-Datum: Tag  TT = 1..28,29,30,31 |
| SERV_DATE_MM | int | Service-Datum: Monat  MM = 1..12 |
| SERV_DATE_YYYY | int | Service-Datum: Jahr  YYYY = 2006..2099 |

### STEUERN_SERVICE_RESTWEG

kombiinterne Service-Intervall-Wegstrecke Setzen KWP2000: $3B ApplDiagWriteDataByLocalIdentifier $12 Set Actual Service Mileage Range in [km]

| Name | Type | Description |
| --- | --- | --- |
| SERV_WEG_WERT | real | Neuer Startwert fuer Serviceintervallzaehler in km oder meilen bei negativen Werten wird 0 KM fuer das Service-Intervall uebernommen max. Wert <= 65535 |
| SERV_WEG_EINHEIT | string | km od. miles |

### STATUS_SERVICE_RESTWEG

Kombiinternen KM-Zaehlerstand bis zum naechsten Service auslesen KWP2000: $21 ApplDiagReadDataByLocalIdentifier $12 Read Actual_Service_Mileage_Range in [km]

_No arguments._

### STEUERN_HBG_VOL_NV_DATA

Setzt den Hebelgeberwert fuer die Tankanzeige auf den Codierwert HBG_RESET KWP2000: $3B WriteDataByLocalIdentifier $0B hbg_reset

| Name | Type | Description |
| --- | --- | --- |
| HBG_VOL_WRITE | string | 1 = Anzeige zuruecksetzen 0 = keine Aenderung table DigitalArgument TEXT |

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### FLASH_SCHREIBEN_XXL

Flash Daten schreiben XXL-Format Standard Flashjob KWP2000: $36 TransferData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### NG_FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden (Byteparameter 1) Byte 5,6            : Loeschzeit in Sekunden (WordParameter 1 (low/high)) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### NG_AUTHENTISIERUNG_START

Authentisierung pruefen KWP2000: $31 StartRoutineByLocalIdentifier $08 ReleaseAuthentication Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Authentisierungszeit in Sekunden Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Schluesseldaten Byte 21+Anzahl Daten: ETX (0x03) |

### INTERFACETYPE

Interface-Typ bestimmen und ausgeben Es wird der Name des Interfaces übergeben Wichtig für Baudratenumschaltung weil bei ADS, EADS und OBD sind nur 115200 Baud möglich, bei EDIC nur 125000 Baud möglich

_No arguments._

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
| 0x01 | Reinshagen / Delphi |
| 0x02 | Leopold Kostal GmbH & Co. KG |
| 0x03 | Hella Fahrzeugkomponenten GmbH |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako GmbH |
| 0x08 | Robert Bosch GmbH |
| 0x09 | Lear Corporation |
| 0x10 | VDO |
| 0x11 | Valeo GmbH |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine Electronics GmbH |
| 0x18 | Continental Teves AG & Co. OHG |
| 0x19 | Elektromatik Südafrika |
| 0x20 | Harman Becker Automotive Systems |
| 0x21 | Preh GmbH |
| 0x22 | Alps Electric Co. Ltd. |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto SE |
| 0x26 | MotoMeter |
| 0x27 | Delphi Automotive PLC |
| 0x28 | DODUCO (Beru) |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer Corporation |
| 0x33 | Jatco |
| 0x34 | FUBA Automotive GmbH & Co. KG |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE (Fahrzeugtechnik Ebern) |
| 0x41 | Megamos |
| 0x42 | TRW Automotive GmbH |
| 0x43 | WABCO Fahrzeugsysteme GmbH |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC Hella Electronics Corporation |
| 0x46 | Gemel |
| 0x47 | ZF Friedrichshafen AG |
| 0x48 | GMPT |
| 0x49 | Harman Becker Automotive Systems GmbH |
| 0x50 | Remes GmbH |
| 0x51 | ZF Lenksysteme GmbH |
| 0x52 | Magneti Marelli S.p.A. |
| 0x53 | Johnson Controls Inc. |
| 0x54 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x55 | Behr-Hella Thermocontrol GmbH |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon Innovation & Technology GmbH |
| 0x58 | Autoliv AB |
| 0x59 | Haberl Electronic GmbH & Co. KG |
| 0x60 | Magna International Inc. |
| 0x61 | Marquardt GmbH |
| 0x62 | AB Elektronik GmbH |
| 0x63 | SDVO/BORG |
| 0x64 | Hirschmann Car Communication GmbH |
| 0x65 | hoerbiger-electronics |
| 0x66 | Thyssen Krupp Automotive |
| 0x67 | Gentex Corporation |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steeting Europe |
| 0x71 | NSI Beheer B.V. |
| 0x72 | Aisin AW Co. Ltd. |
| 0x73 | Schorlock |
| 0x74 | Schrader Electronics Ltd. |
| 0x75 | Huf-Electronics Bretten GmbH |
| 0x76 | CEL |
| 0x77 | AUDIO MOBIL Elektronik GmbH |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia-Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A. |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | Sonceboz S.A. |
| 0x86 | Meta System S.p.A. |
| 0x87 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x88 | MANN+HUMMEL GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co. |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.a |
| 0x92 | CRH |
| 0x93 | TPO Display Corp |
| 0x94 | Küster Automotive GmbH |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental AG |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls Inc. |
| 0x9A | Takata-Petri |
| 0x9B | Mitsubishi Electric B.V. (Melco) |
| 0x9C | Autokabel |
| 0x9D | GKN Plc |
| 0x9E | Zollner Elektronik AG |
| 0x9F | peiker acustic GmbH & Co. KG |
| 0xA0 | Bosal-Oris |
| 0xA1 | Cobasys |
| 0xA2 | Automotive Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0xA5 | Novero Dabendorf GmbH |
| 0xA6 | LAMES S.p.a. |
| 0xA7 | Magna/Closures |
| 0xA8 | Harbin Wan Yu Technology Co |
| 0xA9 | ThyssenKrupp Presta AG |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
| 0xAC | SMR Automotive Mirrors Stuttgart GmbH |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA S.p.A. |
| 0xAF | Alfmeier Präzision AG |
| 0xB0 | Eltek Deutechland GmbH |
| 0xB1 | OMRON Automotive Electronics Europe GmbH |
| 0xB2 | ASK Industries GmbH |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive |
| 0xB6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0xB7 | Robert Bosch Battery Systems GmbH |
| 0xB8 | Kyocera Display Europe GmbH |
| 0xB9 | Magna Powertrain AG & Co. KG |
| 0xBA | BorgWarner Beru Systems GmbH |
| 0xBB | BMW AG |
| 0xBC | Benteler Duncan Plant |
| 0xBD | U-Shin Deutschland Zugangssysteme GmbH |
| 0xBE | Schaeffler Technologies AG & Co. KG |
| 0xBF | JTEKT Corporation |
| 0xC0 | VLF |
| 0xC1 | Flextronics |
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
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x930B | Kontrastspannung LCD (bei K7x nicht genutzt) |
| 0x9310 | No ID CAN |
| 0x9311 | ID Ausfall ABS_1 |
| 0x9312 | ID Ausfall ABS_2 |
| 0x9313 | ID Ausfall BMS-K_1 |
| 0x9314 | ID Ausfall BMS-K_2 |
| 0x9315 | ID Ausfall ZFE_1 |
| 0x9316 | ID Ausfall ZFE_2 |
| 0x9317 | ID Ausfall DWA |
| 0x9318 | CAN-Signal ungültig Steuerung Leuchte ABS Motorrad |
| 0x9319 | CAN-Signal ungültig Geschwindigkeit Rad H Motorrad |
| 0x931A | CAN-Signal ungültig Weg Impuls Zaehler H Motorrad |
| 0x931B | GWSZ-Fehler im EEPROM |
| 0x931D | ID Ausfall RDC |
| 0x931E | ID Ausfall ASC |
| 0x931F | ID Ausfall Wegstrecke_Redundant_Motorrad |
| 0x9320 | CAN-Signal ungültig Steuerung LED DWA Motorrad |
| 0x9321 | CAN-Signal ungültig Batteriespannung DWA Motorrad |
| 0x9322 | CAN-Signal ungültig Status Anzeige Übertemperatur Motorrad |
| 0x9323 | CAN-Signal ungültig Status Druck ÖL Motorrad |
| 0x9324 | CAN-Signal ungültig Status EWS Motorrad |
| 0x9325 | Bordnetzspannung (UB Überspannung, Unterspannung) |
| 0x9328 | Codierdaten-Fehler Lieferanten-Bereich |
| 0x9329 | Codierdaten-Fehler BMW-Bereich |
| 0x932A | CAN-Signal ungültig Drehzahl Motor Motorrad |
| 0x932B | CAN-Signal ungültig Status Not- Aus |
| 0x932C | CAN-Signal ungültig Füllstand Tank |
| 0x932D | CAN-Signal ungültig Taste BC |
| 0x932E | CAN-Signal ungültig Status KL15 |
| 0x932F | CAN-Signal ungültig Status KL56 |
| 0x9330 | CAN-Signal ungültig Status Blinken |
| 0x9331 | CAN-Signal ungültig Motor-Warnung |
| 0x9332 | CAN-Signal ungültig Motortemperatur |
| 0x9333 | CAN-Signal ungültig Einspritzmenge |
| 0x9334 | CAN-Signal ungültig Status KL50 |
| 0x9335 | Differenz: km-Stand Kombi / BMSK-P groesser Schwelle |
| 0x9337 | ID Ausfall Anzeige_Modus_Fahrzeug (2E0h) |
| 0xE107 | Bus Off |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x930B | 1 | 2 | 3 | - |
| 0x9310 | 1 | 2 | 3 | - |
| 0x9311 | 1 | 2 | 3 | - |
| 0x9312 | 1 | 2 | 3 | - |
| 0x9313 | 1 | 2 | 3 | - |
| 0x9314 | 1 | 2 | 3 | - |
| 0x9315 | 1 | 2 | 3 | - |
| 0x9316 | 1 | 2 | 3 | - |
| 0x9317 | 1 | 2 | 3 | - |
| 0x9318 | 1 | 2 | 3 | - |
| 0x9319 | 1 | 2 | 3 | - |
| 0x931A | 1 | 2 | 3 | - |
| 0x931B | 1 | 2 | 3 | - |
| 0x931D | 1 | 2 | 3 | - |
| 0x931E | 1 | 2 | 3 | - |
| 0x9320 | 1 | 2 | 3 | - |
| 0x9321 | 1 | 2 | 3 | - |
| 0x9322 | 1 | 2 | 3 | - |
| 0x9323 | 1 | 2 | 3 | - |
| 0x9324 | 1 | 2 | 3 | - |
| 0x9325 | 1 | 2 | 3 | - |
| 0x9328 | 1 | 2 | 3 | - |
| 0x9329 | 1 | 2 | 3 | - |
| 0x932A | 1 | 2 | 3 | - |
| 0x932B | 1 | 2 | 3 | - |
| 0x932C | 1 | 2 | 3 | - |
| 0x932D | 1 | 2 | 3 | - |
| 0x932E | 1 | 2 | 3 | - |
| 0x932F | 1 | 2 | 3 | - |
| 0x9330 | 1 | 2 | 3 | - |
| 0x9331 | 1 | 2 | 3 | - |
| 0x9332 | 1 | 2 | 3 | - |
| 0x9333 | 1 | 2 | 3 | - |
| 0x9334 | 1 | 2 | 3 | - |
| 0x9335 | 1 | 2 | 3 | - |
| 0x9337 | 1 | 2 | 3 | - |
| 0xFFFF | 1 | 2 | 3 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |
| 1 | Bordnetzspannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 2 | spez. Erweiterung | 0-n | - | 0xFF | UB2_LB | 1 | 2 | 3 |
| 3 | Geschwindigkeit | km/h | - | unsigned char | - | 2 | 1 | 0 |

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

### UB2_LB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | UNUSED |
| 0x01 | ID FEHLT |
| 0x02 | ALIVE FEHLER |
| 0x04 | KOMPLEMENTFEHLER |
| 0x08 | KONSISTENZFEHLER |
| 0x10 | UNKRITISCHER_FEHLER |
| 0x20 | KRITISCHER_FEHLER |
| 0xXY | ERROR_UNKNOWN |

### TABELLE_WARNLEUCHTE_MOTOR

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Leuchte Aus |
| 0x02 | Blinken 1Hz |
| 0x04 | Blinken 4 Hz |
| 0x05 | Dauerlicht |
| 0x07 | ungueltig |
| 0xXY | reserviert |

### TABELLE_ANZEIGE_UEBERTEMPERATUR

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Temperatur OK |
| 0x02 | Temperatur zu hoch |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_DRUCK_OEL

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | kein Oeldruck |
| 0x02 | Oeldruck vorhanden |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_KLEMME_50

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Relais aktiviert |
| 0x02 | Relais nicht aktiviert |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_EWS

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | Schluessel noch nicht abgefragt |
| 0x01 | Schluessel gueltig |
| 0x02 | Schluessel ungueltig |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_GANG_GETRIEBE

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | 1. Gang |
| 0x02 | Leerlauf |
| 0x04 | 2. Gang |
| 0x07 | 3. Gang |
| 0x08 | 4. Gang |
| 0x0B | 5. Gang |
| 0x0D | 6. Gang |
| 0x0F | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_HSD_BMSK

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | kein Fehler erkannt |
| 0x01 | Fehler am HSD1 |
| 0x02 | Fehler am HSD2 |
| 0x04 | Fehler an HSD3 |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_LEUCHTE_ASC

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | ASC Aus/Fehler |
| 0x01 | ASC Komfortmodus Ein |
| 0x02 | GS Mode Ein |
| 0x03 | ASC noch nicht initialisiert |
| 0x05 | ASC regelt Komfort Modus |
| 0x06 | ASC regelt GS Modus |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_OELSTAND

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Oelstand in Ordnung |
| 0x02 | Oelstand zu gering |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_NOT_AUS

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Not Aus betaetigt |
| 0x02 | Not Aus nicht betaetigt |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_SCHALTER_KUPPLUNG

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Kupplungsschalter AUS |
| 0x02 | Kupplungsschalter EIN |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_SCHALTAUFFORDERUNG

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Schaltaufforderung nicht aktiv |
| 0x02 | Schaltaufforderung aktiv |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_WARNLEUCHTE_L_MOTOR

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Leuchte Aus |
| 0x02 | Blinken 1Hz |
| 0x04 | Blinken 4 Hz |
| 0x05 | Dauerlicht |
| 0x07 | ungueltig |
| 0xXY | reserviert |

### TABELLE_LEUCHTE_ABS

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Leuchte Aus |
| 0x02 | Blinken 1Hz |
| 0x04 | Blinken 4 Hz |
| 0x05 | Dauerlicht |
| 0x07 | ungueltig |
| 0xXY | reserviert |

### TABELLE_STEUERUNG_WARNBLINKEN_DWA

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Leuchte Aus |
| 0x02 | Leuchte Ein |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_STEUERUNG_LED_DWA

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | Blinken 1Hz |
| 0x01 | Leuchte Aus |
| 0x02 | Leuchte Ein |
| 0x03 | ungueltig |
| 0xXY | reserviert |

### TABELLE_BATTERIESPANNUNG_DWA

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Ladezustand i.O. |
| 0x02 | Ladezustand n.i.O. |
| 0x03 | Batterie entladen |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_KONTROLLEUCHTE_REIFENDRUCKKONTRLLE

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Warnleuchte L und RDC Icon AUS |
| 0x02 | Warnleuchte L in gelb und RDC Icon AN |
| 0x04 | Warnleuchte L in rot und RDC Icon AN |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_ZUSATZINFORMATION_REIFENDRUCKKONTROLLE

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | kein Fehler |
| 0x02 | Fehler im Vorderrad |
| 0x03 | Fehler im Hinterrad |
| 0x04 | Fehler in beiden Raedern |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_BATTERIE_REIFENDRUCKKONTROLLE

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Symbol AUS |
| 0x02 | Symbol EIN |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_STEUERUNG_KONTROLLEUCHTE_LADUNG

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Leuchte AUS |
| 0x02 | Leuchte EIN |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_ESA

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | E-C (Fahrer - Comfort) |
| 0x02 | E-N (Fahrer - Normal) |
| 0x03 | E-S (Fahrer - Sport) |
| 0x04 | EB-C (Fahrer+Gepaeck - Comfort) |
| 0x05 | EB-N (Fahrer+Gepaeck - Normal) |
| 0x06 | EB-S (Fahrer+Gepaeck - Sport) |
| 0x07 | SO-C (Soziusbetrieb - Comfort) |
| 0x08 | SO-N (Soziusbetrieb - Normal) |
| 0x09 | SO-S (Soziusbetrieb - Sport) |
| 0x0A | ESA-Anzeige ausgeblendet |
| 0x0B | nicht verwendet |
| 0x0C | ESA-Anzeige ausgeschaltet |
| 0x0D | nicht verwendet |
| 0x0E | nicht verwendet |
| 0x0F | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_TASTER_BC

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | Taster nicht gedrueckt |
| 0x01 | Taster gedrueckt |
| 0x02 | Taster laenger als 2 sec gedrueckt |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_KONTROLLEUCHTE_TEMPOMAT

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | Signal fehlerhaft |
| 0x01 | Leuchte AUS |
| 0x02 | Leuchte EIN |
| 0x03 | Signal fehlerhaft |
| 0xXY | reserviert |

### TABELLE_WARNUNG_BREMSBELAG

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Bremsbelag i.O. |
| 0x02 | Bremsbelag verschlissen |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_ANFORDERUNG_DREHZAHL_SOLLWERT

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | LL-Anhebung nicht angefordert |
| 0x02 | LL-Anhebung angefordert |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_SITZHEIZUNG

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Fahrer Aus, Beifahrer Aus |
| 0x02 | Fahrer Stufe 1, Beifahrer Aus |
| 0x03 | Fahrer Stufe 2, Beifahrer Aus |
| 0x04 | Fahrer Aus, Beifahrer Stufe 1 |
| 0x05 | Fahrer Aus, Beifahrer Stufe 2 |
| 0x06 | Fahrer Stufe 1, Beifahrer Stufe 1 |
| 0x07 | Fahrer Stufe 1, Beifahrer Stufe 2 |
| 0x08 | Fahrer Stufe 2, Beifahrer Stufe 1 |
| 0x09 | Fahrer Stufe 2, Beifahrer Stufe 2 |
| 0x0A | nicht verwendet |
| 0x0B | nicht verwendet |
| 0x0C | nicht verwendet |
| 0x0D | nicht verwendet |
| 0x0E | nicht verwendet |
| 0x0F | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_TASTER_ESA

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | Taster nicht gedrueckt |
| 0x01 | Taster < 1 sec gedrueckt |
| 0x02 | Taster > 1 sec gedrueckt |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_KL15

| CODE | KLARTEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | Schalter in Stellung AUS |
| 0x02 | Klemme 15 Ein |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_KL56A

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Leuchte in Ordnung und aktiv |
| 0x02 | Leuchte AUS |
| 0x04 | Leuchte defekt |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_SCHALTER_FUSSBREMSE

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Schalter betaetigt |
| 0x02 | Schalter nicht betaetigt |
| 0x04 | Schalter Fehler |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_BLINKEN_ZFE

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | beide Blinker AUS |
| 0x02 | Blinker links   EIN |
| 0x04 | Blinker rechts EIN |
| 0x05 | beide Blinker EIN |
| 0x07 | Signal ungueltig |
| 0xXY | reserviert |

### TABELLE_DIMMUNG

| CODE | KLARTEXT |
| --- | --- |
| 0x01 | Tageinstellung |
| 0x02 | Nachteinstellung |
| 0x03 | Signal ungueltig |
| 0xXY | reserviert |
