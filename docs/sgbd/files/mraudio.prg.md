# mraudio.prg

## General

|  |  |
| --- | --- |
| File | mraudio.prg |
| Type | PRG |
| Jobs | 100 |
| Tables | 35 |
| Origin | BMW UX-EE-2 Dettloff, Günter |
| Revision | 2.002 |
| Author | in-tech UX-EE-1 Breitkreutz, Dräxlmaier UX-EE-1 Rätscher |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Audioplattform |  |  |
| ORIGIN | string | BMW UX-EE-2 Dettloff, Günter |  |  |
| REVISION | string | 2.002 |  |  |
| AUTHOR | string | in-tech UX-EE-1 Breitkreutz, Dräxlmaier UX-EE-1 Rätscher |  |  |
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

### STEUERN_RADIO_ONOFF

Simulation Tastendruck ENTERTAINMENT-Taste KWP2000: $3B WriteDataByLocalIdentifier $A0 inputOutputLocalIdentifier  - switch radio on or off Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHALTMODUS | string | EIN/AUS-Schalten des Radios 0/"no override" = no override, 1/off/aus = off, 2/on/ein = on |

### STATUS_RADIO_ONOFF

Simulation Tastendruck ENTERTAINMENT-Taste KWP2000: $21 ReadDataByLocalIdentifier $A0 inputOutputLocalIdentifier  - switch radio on or off Modus  : Default

_No arguments._

### STATUS_FREQUENZ

aktuelle Tunerfrequenz abfragen KWP2000: $21 ReadDataByLocalIdentifier $96 inputOutputLocalIdentifier - tuner frequency Modus  : Default

_No arguments._

### STEUERN_FREQUENZ

Tunerfrequenz einstellen KWP2000: $3B WriteDataByLocalIdentifier $96 inputOutputLocalIdentifier - tuner frequency Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ | long | Bereich: 150 - 108000 [kHz] |

### STATUS_RDS

Lesen Status AF-Verfolgung und TP KWP2000: $21 ReadDataByLocalIdentifier $91 inputOutputLocalIdentifier  - - get RDS Modus  : Default

_No arguments._

### STEUERN_RDS

Steuern AF-Verfolgung und TP KWP2000: $3B WriteDataByLocalIdentifier $91 inputOutputLocalIdentifier - set RDS Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TP | string | Steuern TP 0 = off, 1 = on Werte siehe table TTunerRDS NAME |
| RDS | string | Steuern AF-Verfolgung und RDS 0 = off, 1 = on Werte siehe table TTunerRDS NAME |

### STATUS_ANT_QFS

Auslesen des Status Quality Fieldstrength KWP2000: $21 ReadDataByLocalIdentifier $92 inputOutputLocalIdentifier - signal quality Modus  : Default

_No arguments._

### STEUERN_TUNER_SUCHLAUF

Sendersuchlauf des AM/FM-Tuner starten KWP2000: $31 StartRoutineByLocalIdentifier $93 RoutineLocalIdentifier  - seek - Tuner_Suchlauf Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TUNER_SUCHLAUF | string | Steuern des Suchlaufs (ASC/DEC/STOP) table TTunerSuchlauf NAME |

### STOP_STEUERN_TUNER_SUCHLAUF

Sendersuchlauf des AM/FM-Tuner stoppen KWP2000: $32 StopRoutineByLocalIdentifier $93 RoutineLocalIdentifier  - seek - Tuner_Suchlauf Modus  : Default

_No arguments._

### STEUERN_FIND_BEST_STATION

Routine zur Suche des besten, verfügberen Senders KWP2000: $31 StartRoutineByLocalIdentifier $94 RoutineLocalIdentifier (find_best_station) Modus  : Default

_No arguments._

### STEUERN_WAVEBAND

Umschalten der Radio-Quelle per Diagnose KWP2000: $31 StartRoutineByLocalIdentifier $95 RoutineLocalIdentifier  - waveband Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_WAVEBAND | string | Einzustellende Radioquelle Befehl in Textform einzugeben: z.B.: MW Werte aus table TWaveband Spalte TEXT |

### STATUS_WAVEBAND

Status der Radio-Quelle per Diagnose KWP2000: $33 RequestRoutineResultsByLocalIdentifier $95 RoutineLocalIdentifier  - waveband Modus  : Default

_No arguments._

### STATUS_VOLUME

Auslesen, welches Lautstärke Inkrement eingestellt ist KWP2000: $21 ReadDataByLocalIdentifier $80 recordLocalIdentifier - Volume audio step Modus  : Default

_No arguments._

### STEUERN_VOLUME

Einstellen der Audio-Lautstaerke KWP2000: $3B WriteDataByLocalIdentifier $80 inputOutputLocalIdentifier - set volume Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VOLUME | int | Ausgewaehlte Audio-Lautstaerke  table TVOL_INC WERT |

### STEUERN_BALANCE

Ansteuern eines AudioKanals bzw. Einstellen der Balance KWP2000: $3B WriteDataByLocalIdentifier $83 inputOutputLocalIdentifier  - balance Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BALANCE | string | Ausgewählte Balance  table TBalance NAME |

### STATUS_BALANCE

Status eines AudioKanals bzw. Einstellen der Balance KWP2000: $21 ReadDataByLocalIdentifier $83 inputOutputLocalIdentifier  - balance Modus  : Default

_No arguments._

### STATUS_FADER

Status eines AudioKanals bzw. Einstellen des Faders KWP2000: $21 ReadDataByLocalIdentifier $84 inputOutputLocalIdentifier  - fader Modus  : Default

_No arguments._

### STEUERN_FADER

Ansteuern eines AudioKanals bzw. Einstellen des Faders KWP2000: $3B WriteDataByLocalIdentifier $84 inputOutputLocalIdentifier  - fader Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FADER | string | Ausgewählte Fader  table TFader NAME |

### STATUS_AKTIVE_GAL_KURVE

Reads the active coded speed dependent volume control curve  KWP2000: $21 ReadDataByLocalIdentifier $85 RecordLocalIdentifier

_No arguments._

### STEUERN_GAL_KURVE

Schreibt die zu nutzende GAL-Kurve  KWP2000: $3B WriteDataByLocalIdentifier $85 RecordLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GAL_KURVE | char | Active SDVC curve Eingabe im Bereich 0-3 |

### STEUERN_SOURCE_CONTROL

Umschalten der Entertainment-Quelle per Diagnose KWP2000: $3B WriteDataByLocalIdentifier $87 RoutineLocalIdentifier  - source control Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_ENTSOURCE | int | Einzustellende Entertainment-quelle Werte aus table TEntSource MASKE Eingabe 0 bis 7 0: No source 1: Aux input 2: USB 3: iPod 4: AmFm tuner 5: Sirius tuner 7: Funk input |

### STATUS_SOURCE_CONTROL

Status der Entertainment-Quelle per Diagnose KWP2000: $21 RequestRoutineResultsByLocalIdentifier $87 RoutineLocalIdentifier  - source control Modus  : Default

_No arguments._

### STEUERN_BASS

Schreiben der Bass-Einstellung KWP2000: $3B writeDataByLocalIdentifier $81 recordLocalIdentifier - bass Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BASS | char | Bass-Einstellung Eingabe von -6 bis 6 |

### STATUS_BASS

Status der Bass-Einstellung KWP2000: $21 writeDataByLocalIdentifier $81 recordLocalIdentifier - bass Modus  : Default

_No arguments._

### STATUS_TREBLE

Status der Treble-Einstellung KWP2000: $21 writeDataByLocalIdentifier $82 recordLocalIdentifier - treble Modus  : Default

_No arguments._

### STEUERN_TREBLE

Schreiben der Treble-Einstellung KWP2000: $3B writeDataByLocalIdentifier $82 recordLocalIdentifier - treble Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TREBLE | char | Treble-Einstellung Eingabe von -6 bis 6 |

### STATUS_MUTE

Auslesen, ob Mute "ein" oder "aus" ist KWP2000: $21 ReadDataByLocalIdentifier $86 recordLocalIdentifier - mute Modus  : Default

_No arguments._

### STEUERN_MUTE

Mute "ein" oder "aus" schalten KWP2000: $3B WriteDataByLocalIdentifier $86 recordLocalIdentifier - mute Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_MUTE | string | Steuern Mute "ein" oder "aus" |

### STATUS_INTERNE_TEMPERATUR

Status des SG- Temperaturwertes KWP2000: $21 ReadDataByLocalIdentifier $D1 inputOutputLocalIdentifier - interal temperature Modus  : Default

_No arguments._

### STATUS_INTERNE_SPANNUNG

Status der internen Batterie-Spannung des MCR KWP2000: $21 ReadDataByLocalIdentifier $D0 inputOutputLocalIdentifier - interal voltage Modus  : Default

_No arguments._

### STATUS_PARROT_SW_HW_VERS_LESEN

Lesen der Parrot HW- und SW-Version KWP2000: $21 ReadDataByLocalIdentifier $B1 inputOutputLocalIdentifier - Parrot SW-HW-Version Modus  : Default

_No arguments._

### STATUS_PARROT_BT_ADRESSE_LESEN

Lesen der Parrot BT-Adresse KWP2000: $21 ReadDataByLocalIdentifier $B0 inputOutputLocalIdentifier - Parrot BT-Adresse Modus  : Default

_No arguments._

### STEUERN_PARROT_BT_ADRESSE_SCHREIBEN

Schreiben der Parrot BT-Adresse KWP2000: $3B WriteDataByLocalIdentifier $B0 inputOutputLocalIdentifier - Parrot BT-Adresse Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PARROT_BT_ADR | string | Parrot BT-Adresse Eingabe 12stellig ohne Trennzeichen |

### STATUS_FRONT_SPEAKER_ONOFF

Zustand der vorderen Lautsprecher, sind sie ein oder aus geschalten? KWP2000: $21 ReadDataByLocalIdentifier $88 inputOutputLocalIdentifier  - switch Front Speaker on or off Modus  : Default

_No arguments._

### STEUERN_FRONT_SPEAKER_ONOFF

Zustand der vorderen Lautsprecher, sind sie ein oder aus geschalten? KWP2000: $3B WriteDataByLocalIdentifier $88 inputOutputLocalIdentifier  - switch Front Speaker on or off Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FRONT_SPEAKER | string | EIN/AUS-Schalten der vorderen Lautsprecher table TSpeaker NAME |

### STATUS_REAR_SPEAKER_ONOFF

Zustand der vorderen Lautsprecher, sind sie ein oder aus geschalten? KWP2000: $21 ReadDataByLocalIdentifier $89 inputOutputLocalIdentifier  - switch Rear Speaker on or off Modus  : Default

_No arguments._

### STEUERN_REAR_SPEAKER_ONOFF

Zustand der vorderen Lautsprecher, sind sie ein oder aus geschalten? KWP2000: $3B WriteDataByLocalIdentifier $89 inputOutputLocalIdentifier  - switch Rear Speaker on or off Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REAR_SPEAKER | string | EIN/AUS-Schalten der hinteren Lautsprecher Tabelle TSpeaker NAME |

### STATUS_LOUDNESS_ONOFF

Zustand der Funktion Loudness, ist sie ein oder aus geschalten? KWP2000: $21 ReadDataByLocalIdentifier $8A inputOutputLocalIdentifier  - switch LOUDNESS on or off Modus  : Default

_No arguments._

### STEUERN_LOUDNESS_ONOFF

Zustand der Funktion Loudness, ist sie ein oder aus geschalten? KWP2000: $3B WriteDataByLocalIdentifier $8A inputOutputLocalIdentifier  - switch Loudness on or off Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LOUDNESS | string | EIN/AUS-Schalten der Funktion Loudness Tabelle TLoudness NAME |

### STATUS_BLUETOOTH_ONOFF

Zustand der Funktion BLUETOOTH, ist sie ein oder aus geschalten? KWP2000: $21 ReadDataByLocalIdentifier $B2 inputOutputLocalIdentifier  - switch BLUETOOTH on or off Modus  : Default

_No arguments._

### STEUERN_BLUETOOTH_ONOFF

Zustand der Funktion Bluetooth, ist sie ein oder aus geschalten? KWP2000: $3B WriteDataByLocalIdentifier $B2 inputOutputLocalIdentifier  - switch bluetooth on or off Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BLUETOOTH | string | EIN/AUS-Schalten der Funktion Bluetooth mit "on"/"ein"/"1" oder "off"/"aus"/"0" table TBluetooth NAME |

### STEUERN_BLUETOOTH_EOL_TEST

Schreiben der Parrot BT-Adresse KWP2000: $31 StartRoutineByLocalIdentifier $B3 inputOutputLocalIdentifier - Bluetooth EOL Test Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BT_ADR | string | Parrot BT-Adresse Eingabe 12stellig ohne Trennzeichen |

### STOP_STEUERN_BLUETOOTH_EOL_TEST

Schreiben der Parrot BT-Adresse KWP2000: $32 StopRoutineByLocalIdentifier $B3 inputOutputLocalIdentifier - Bluetooth EOL Test Modus  : Default

_No arguments._

### STATUS_ROUTINE_BLUETOOTH_EOL_TEST

Dieser Routine Service liefert das Ergebnis der Bluetooth Suche nach dem angegebenen Gerät. Ist die Suche abgeschlossen bleibt das Ergebnis solange gültig, bis eine neue Suche gestartet wird. KWP2000: $33 RequestRoutineResultsByLocalIdentifier $B3 inputOutputLocalIdentifier - Bluetooth EOL Test Modus  : Default

_No arguments._

### STATUS_USB_IPOD

KWP2000: $21 RequestRoutineResultsByLocalIdentifier $B4 RoutineLocalIdentifier (USB/iPod Device Diagnostics) Modus  : Default

_No arguments._

### STATUS_FIND_BEST_STATION

KWP2000: $33 RequestRoutineResultsByLocalIdentifier $94 RoutineLocalIdentifier (find_best_station) Modus  : Default

_No arguments._

### STATUS_SIRIUS_SN_LESEN

Lesen der Sirius Seriennummer KWP2000: $21 ReadDataByLocalIdentifier $C0 inputOutputLocalIdentifier - Parrot BT-Adresse Modus  : Default

_No arguments._

### STATUS_SIRIUS_FW

Lesen der Sirius Firmwarenummer KWP2000: $21 ReadDataByLocalIdentifier $C1 inputOutputLocalIdentifier - Firmwarenummer Modus  : Default

_No arguments._

### STATUS_SIRIUS_SIGNAL

Status des Sirius Signals per Diagnose KWP2000: $21 RequestRoutineResultsByLocalIdentifier $C2 RoutineLocalIdentifier  - sirius signal Modus  : Default

_No arguments._

### STEUERN_SIRIUS_FACTORYDEFAULT

Sirius Empfaenger auf Werkseinstellung zuruecksetzen KWP2000: $3B WriteDataByLocalIdentifier $C3 inputOutputLocalIdentifier - sirius factory default Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT_EIN | int | 0 = Empfaenger nicht zuruecksetzen 1 = Empfaenger zuruecksetzen |

### STATUS_SIRIUS_FACTORYDEFAULT

Lesen des Sirius Werkseinstellungsstatus KWP2000: $21 ReadDataByLocalIdentifier $C3 inputOutputLocalIdentifier - Werkseinstellung Modus  : Default

_No arguments._

### STEUERN_SIRIUS_TUNERMODUS

Waehlt den Sirius Tunermodus KWP2000: $3B WriteDataByLocalIdentifier $C4 inputOutputLocalIdentifier  - Sirius tunermode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TUNERMODUS | string | Sirius Modus aus Tabelle TSMode auswaehlen |

### STATUS_SIRIUS_TUNERMODUS

Gewaehlter Sirius Tunermodus KWP2000: $21 ReadDataByLocalIdentifier $C4 inputOutputLocalIdentifier  - Sirius tunermode Modus  : Default

_No arguments._

### STATUS_SIRIUS_BITFEHLERRATE

Lesen der Sirius Bitfehlerrate KWP2000: $21 ReadDataByLocalIdentifier $C5 inputOutputLocalIdentifier - Bitfehlerrate Modus  : Default

_No arguments._

### STEUERN_SIRIUS_SIGNALGEN

Ansteuern der Kanaele im Signalgeneratormodus KWP2000: $3B WriteDataByLocalIdentifier $C6 inputOutputLocalIdentifier - Signalgenerator Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ_LINKS | int | Frequenzwert linker Kanal Bereich: 0 - 15999 [Hz] |
| FREQUENZ_RECHTS | int | Frequenzwert rechter Kanal Bereich: 0 - 15999 [Hz] |

### STATUS_SIRIUS_SIGNALGEN

Lesen der Sirius Bitfehlerrate KWP2000: $21 ReadDataByLocalIdentifier $C6 inputOutputLocalIdentifier - Signalgenerator Modus  : Default

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_ARGUMENT_NOT_IN_TABLE |
| 0x01 | ERROR_INVALID_ARGUMENT |
| 0x02 | ERROR_MISSING_ARGUMENT |
| 0x03 | ERROR_EXECUTION_LOCALROUTINE |
| 0x04 | ERROR_ARGUMENT_TOO_LONG |
| 0x05 | ERROR_INVALID_RESULT |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9908 | Leitungsunterbrechung Lautsprecher links |
| 0x9909 | Leitungsunterbrechung Lautsprecher rechts |
| 0x990A | Kurzschluss nach Masse Lautsprecher links |
| 0x990B | Kurzschluss nach Masse Lautsprecher rechts |
| 0x990C | Kurzschluss nach plus Lautsprecher links |
| 0x990D | Kurzschluss nach plus Lautsprecher rechts |
| 0x9912 | Connector 2 ist nicht angeschlossen |
| 0x9913 | Connector 4 ist nicht angeschlossen |
| 0x991B | Leitungsunterbrechung BT-Antenne |
| 0x991D | Abschalten nach Überhitzung Audioplattform |
| 0x991E | Übertemperatur Verstärker |
| 0x991F | Überspannung Verstärker |
| 0x9920 | Unterspannung Verstärker |
| 0x9921 | Kurzschluss  USB |
| 0x9922 | Kurzschluss Lautsprecher links |
| 0x9923 | Kurzschluss Lautsprecher rechts |
| 0x9925 | FM/AM Tuner interner Fehler |
| 0x9926 | Überspannung USB |
| 0x9927 | Leitungsunterbrechung Sirius Antenne |
| 0x9928 | Kurzschluss Sirius Antenne |
| 0x9941 | CAN Time Out Bedienung_Radio (750ms) |
| 0x9942 | CAN Time Out Geschwindigkeit (750ms) |
| 0x9943 | CAN Time Out Kombidaten (5000ms) |
| 0x9944 | CAN Time Out Motordaten_1 (750ms) |
| 0x9946 | EEPROM |
| 0x9947 | CAN_BUS_OFF |
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
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xFFFF | 0x01 | 0x02 | 0x03 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Geschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | interne Spannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x03 | Innentemperatur | Celsius | - | unsigned char | - | 1 | 1 | -40 |
| 0xFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### TSCHALTMODI

| NAME | MASKE | TEXT |
| --- | --- | --- |
| no override | 0x00 | keine Beeinflussung |
| off | 0x01 | Audio Plattform aus |
| aus | 0x01 | Audio Plattform aus |
| 1 | 0x01 | Audio Plattform aus |
| on | 0x02 | Audio Plattform ein |
| ein | 0x02 | Audio Plattform ein |
| 2 | 0x02 | Audio Plattform ein |
| Fehler | 0xXY | Nicht definiert |

### TTUNERRDS

| NAME | MASKE | TEXT |
| --- | --- | --- |
| 0 | 0x00 | aus |
| 1 | 0x01 | ein |
| Fehler | 0xXY | Nicht definiert |

### TTUNERSUCHLAUF

| NAME | MASKE | TEXT |
| --- | --- | --- |
| STOP | 0x02 | Stop searching |
| ASC | 0x01 | Ascending search |
| DEC | 0x00 | Descending search |
| Fehler | 0xXY | - |

### TTUNERBESTSTATION

| NAME | MASKE | TEXT |
| --- | --- | --- |
| 0 | 0x00 | process not started |
| 1 | 0x01 | process running |
| 2 | 0x02 | process finished and best station found |
| 3 | 0x03 | process finished and no best station found |
| 4 | 0x04 | searching process halted |
| Fehler | 0xXY | - |

### TWAVEBAND

| MASKE | TEXT |
| --- | --- |
| 0x00 | FM |
| 0x01 | LW |
| 0x02 | MW/AM |
| 0x03 | KW/SW |
| 0x04 | WB |
| 0x05 | TRF |
| 0xFF | Entertainmentsource not available |

### TVOL_INC

| MASKE | NAME | WERT |
| --- | --- | --- |
| 0x00 | Mute | 0 |
| 0x01 | Inkrement 01 | 1 |
| 0x02 | Inkrement 02 | 2 |
| 0x03 | Inkrement 03 | 3 |
| 0x04 | Inkrement 04 | 4 |
| 0x05 | Inkrement 05 | 5 |
| 0x06 | Inkrement 06 | 6 |
| 0x07 | Inkrement 07 | 7 |
| 0x08 | Inkrement 08 | 8 |
| 0x09 | Inkrement 09 | 9 |
| 0x0A | Inkrement 10 | 10 |
| 0x0B | Inkrement 11 | 11 |
| 0x0C | Inkrement 12 | 12 |
| 0x0D | Inkrement 13 | 13 |
| 0x0E | Inkrement 14 | 14 |
| 0x0F | Inkrement 15 | 15 |
| 0x10 | Inkrement 16 | 16 |
| 0x11 | Inkrement 17 | 17 |
| 0x12 | Inkrement 18 | 18 |
| 0x13 | Inkrement 19 | 19 |
| 0x14 | Maximal | 20 |
| 0xFF | Bluetooth | 21 |
| 0xXY | Nicht definiert | 22 |

### TBALANCE

| NAME | MASKE | TEXT |
| --- | --- | --- |
| -10 | 0xF6 | Links |
| -9 | 0xF7 | Links -9 |
| -8 | 0xF8 | Links -8 |
| -7 | 0xF9 | Links -7 |
| -6 | 0xFA | Links -6 |
| -5 | 0xFB | Links -5 |
| -4 | 0xFC | Links -4 |
| -3 | 0xFD | Links -3 |
| -2 | 0xFE | Links -2 |
| -1 | 0xFF | Links -1 |
| 0 | 0x00 | Balance |
| 1 | 0x01 | Rechts 1 |
| 2 | 0x02 | Rechts 2 |
| 3 | 0x03 | Rechts 3 |
| 4 | 0x04 | Rechts 4 |
| 5 | 0x05 | Rechts 5 |
| 6 | 0x06 | Rechts 6 |
| 7 | 0x07 | Rechts 7 |
| 8 | 0x08 | Rechts 8 |
| 9 | 0x09 | Rechts 9 |
| 10 | 0x0A | Rechts |
| XY | 0xXY | Nicht definiert |

### TFADER

| NAME | MASKE | TEXT |
| --- | --- | --- |
| -10 | 0xF6 | Hinten |
| -9 | 0xF7 | Hinten -9 |
| -8 | 0xF8 | Hinten -8 |
| -7 | 0xF9 | Hinten -7 |
| -6 | 0xFA | Hinten -6 |
| -5 | 0xFB | Hinten -5 |
| -4 | 0xFC | Hinten -4 |
| -3 | 0xFD | Hinten -3 |
| -2 | 0xFE | Hinten -2 |
| -1 | 0xFF | Hinten -1 |
| 0 | 0x00 | Fader |
| 1 | 0x01 | Vorne 1 |
| 2 | 0x02 | Vorne 2 |
| 3 | 0x03 | Vorne 3 |
| 4 | 0x04 | Vorne 4 |
| 5 | 0x05 | Vorne 5 |
| 6 | 0x06 | Vorne 6 |
| 7 | 0x07 | Vorne 7 |
| 8 | 0x08 | Vorne 8 |
| 9 | 0x09 | Vorne 9 |
| 10 | 0x0A | Vorne |
| XY | 0xXY | Nicht definiert |

### TENTSOURCE

| MASKE | TEXT |
| --- | --- |
| 0x00 | no source |
| 0x01 | AUX Input |
| 0x02 | USB |
| 0x03 | iPod |
| 0x04 | AmFm Tuner |
| 0x05 | Sirius Tuner |
| 0x06 | Internal sine generator |
| 0xFF | Entertainmentsource not available |

### TPROCESSSTAT

| MASKE | TEXT |
| --- | --- |
| 0x00 | process not started |
| 0x01 | process running |
| 0x02 | process finished and best station found |
| 0x03 | process finished and no best station found |
| 0x04 | searching process halted |
| 0xXY | Fehler |

### TSPEAKER

| NAME | MASKE | TEXT |
| --- | --- | --- |
| off | 0x00 | Speaker off |
| aus | 0x00 | Lautsprecher aus |
| 0 | 0x00 | Lautsprecher aus |
| on | 0x01 | Speaker on |
| ein | 0x01 | Lautsprecher ein |
| 1 | 0x01 | Lautsprecher ein |
| Fehler | 0xXY | Nicht definiert |

### TLOUDNESS

| NAME | MASKE | TEXT |
| --- | --- | --- |
| off | 0x00 | Loudness off |
| aus | 0x00 | Loudness aus |
| 0 | 0x00 | Loudness aus |
| on | 0x01 | Loudness on |
| ein | 0x01 | Loudness ein |
| 1 | 0x01 | Loudness ein |
| Fehler | 0xXY | Nicht definiert |

### TBLUETOOTH

| NAME | MASKE | TEXT |
| --- | --- | --- |
| off | 0x00 | Bluetooth off |
| aus | 0x00 | Bluetooth aus |
| 0 | 0x00 | Bluetooth off/aus |
| on | 0x01 | Bluetooth on |
| ein | 0x01 | Bluetooth ein |
| 1 | 0x01 | Bluetooth on/ein |
| Fehler | 0xXY | Nicht definiert |

### TBLUETOOTH_EOL_TEST

| NAME | MASKE | TEXT |
| --- | --- | --- |
| 0 | 0x00 | None (a search has not yet been completed, or the last search was aborted before completion) |
| 1 | 0x01 | A search is currently in progress |
| 2 | 0x02 | A search has completed, and the device was found successfully |
| 3 | 0x03 | A search has completed, but it failed to find the device |
| Fehler | 0xXY | - |

### TUSBANSCHLUSS

| NAME | MASKE | TEXT |
| --- | --- | --- |
| no | 0x00 | no USB device connected |
| nein | 0x00 | keine USB-Quelle vorhanden |
| yes | 0x01 | USB device connected |
| ja | 0x01 | USB-Quelle vorhanden |
| Fehler | 0xXY | Nicht definiert |

### TUSBFORMATIERT

| NAME | MASKE | TEXT |
| --- | --- | --- |
| no | 0x00 | connected USB device is not formatted |
| nein | 0x00 | verbundene USB-Quelle ist nicht formatiert |
| yes | 0x01 | connected USB device is formatted |
| ja | 0x01 | verbundene USB-Quelle ist formatiert |
| Fehler | 0xXY | Nicht definiert |

### TSSIG

| MASKE | TEXT |
| --- | --- |
| 0x00 | Kein Signal |
| 0x01 | Schwaches Signal |
| 0x02 | Gutes Signal |
| 0x03 | Hervorragendes Signal |
| 0xFF | Signal ungueltig |

### TSMODE

| MASKE | TEXT |
| --- | --- |
| 0x00 | Ungueltig |
| 0x01 | Signalgenerator-Modus |
| 0x02 | Bitfehlerrate-Modus |
| 0x03 | Sender-Modus |
