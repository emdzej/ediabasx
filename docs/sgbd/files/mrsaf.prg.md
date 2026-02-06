# mrsaf.prg

## General

|  |  |
| --- | --- |
| File | mrsaf.prg |
| Type | PRG |
| Jobs | 85 |
| Tables | 68 |
| Origin | BMW UX-EE-2 Dreifke_Lars |
| Revision | 3.000 |
| Author | Dräxlmaier UX-EE-1 Rätscher |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Semiaktives Fahrwerk |  |  |
| ORIGIN | string | BMW UX-EE-2 Dreifke_Lars |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | Dräxlmaier UX-EE-1 Rätscher |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.62 |  |  |
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

### STATUS_BATTERIESPANNUNG

Auslesen der aktuellen Batteriespannung KWP2000: $21 ReadDataByLocalIdentifier $02 Batteriespannung Default

_No arguments._

### STATUS_HALLSENSOR

Spannung und Zustand der Hallsensoren KWP2000: $21 ReadDataByLocalIdentifier $03 Hallsensoren Default

_No arguments._

### STATUS_ANALOGSENSOR_ROH

Auslesen der Rohwerte der Analogsensoren KWP2000: $21 ReadDataByLocalIdentifier $0A Analogsensoren Rohwerte Modus  : Default

_No arguments._

### STATUS_ANALOGSENSOR_PHYS

Auslesen der physikalischen Werte der Analogsensoren KWP2000: $21 ReadDataByLocalIdentifier $09 Analogsensoren physikalisch Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE

Auslesen der HL-SW Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier $0D Adaptionswerte HL-SW Modus  : Default

_No arguments._

### STATUS_KOMBISCHALTER

Auslesen der aktuellen Schalterzustaende KWP2000: $21 ReadDataByLocalIdentifier $08 Kombischalter Default

_No arguments._

### STATUS_DC_MOTOR_PWM

Auslesen PWM Werte DC Motor KWP2000: $21 ReadDataByLocalIdentifier $0B DC Motor PWM Modus  : Default

_No arguments._

### STATUS_TEMPERATURMODELL

Auslesen der DC Motor Temperatur KWP2000: $21 ReadDataByLocalIdentifier $0C Temperaturmodell Modus  : Default

_No arguments._

### STEUERN_VENTIL_PWM_START

Uebernahme der IO-Kontrolle vom Steuergeraet und Vorgabe PWM und Frequenz fuer Proportionalventile KWP2000: $30 InputOutputControlByLocalIdentifier $01 Proportionalventile PWM $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VENTIL | string | Bestimmt das zu steuernde Ventil table TAB_VENTIL_ANSTEUERUNG TEXT |
| PWM | unsigned char | Einzustellender PWM Wert 0..100 [%] |
| FREQ | string | Einzustellende PWM Frequenz table TAB_MR_SAF_FREQ TEXT |

### STEUERN_VENTIL_PWM_STOP

Rueckgabe der IO-Kontrolle an das Steuergeraet KWP2000: $30 InputOutputControlByLocalIdentifier $01 Proportionalventile PWM $00 returnControlToECU Modus  : Default

_No arguments._

### STATUS_VENTIL_PWM

Auslesen des aktuellen Zustands der Proportionalventile KWP2000: $22 ReadDataByCommonIdentifier $E137 Proportionalventile PWM Modus  : Default

_No arguments._

### STEUERN_VENTIL_STROM_START

Uebernahme der IO-Kontrolle vom Steuergeraet und Vorgabe Stromwert fuer Proportionalventile KWP2000: $30 InputOutputControlByLocalIdentifier $04 Proportionalventile Strom $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| VENTIL | string | Bestimmt das zu steuernde Ventil table TAB_VENTIL_ANSTEUERUNG TEXT |
| STROMWERT | unsigned int | Vorgegebener Stromwert in mA |
| FREQ | string | Einzustellende PWM Frequenz table TAB_MR_SAF_FREQ TEXT |

### STEUERN_VENTIL_STROM_STOP

Rueckgabe der IO-Kontrolle an das Steuergeraet KWP2000: $30 InputOutputControlByLocalIdentifier $04 Proportionalventile Strom $00 returnControlToECU Modus  : Default

_No arguments._

### STATUS_VENTIL_STROM

Auslesen des aktuellen Zustands der Proportionalventile KWP2000: $22 ReadDataByCommonIdentifier $E138 Proportionalventile Strom Modus  : Default

_No arguments._

### STEUERN_DC_MOTOR_START

Uebernahme der IO-Kontrolle vom Steuergeraet und Vorgabe Impulse (Inkremente) fuer DC Motor KWP2000: $30 InputOutputControlByLocalIdentifier $05 DC Motor $07 shortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RICHTUNG_DC | unsigned char | Verstellrichtung DC Motor: 0 = Feder entspannen 1 = Feder spannen |
| RELATIVWERT | unsigned int | Vorgegebener relativer Verstellweg Bereich: 0..6000 Impulse |

### STEUERN_DC_MOTOR_STOP

Uebernahme der IO-Kontrolle vom Steuergeraet und Vorgabe Impulse (Inkremente) fuer DC Motor KWP2000: $30 InputOutputControlByLocalIdentifier $05 DC Motor $00 returnControlToECU Modus  : Default

_No arguments._

### STATUS_DC_MOTOR

Statusabfrage Position DC Motor KWP2000: $22 ReadDataByCommonIdentifier $E114 DC Motor Modus  : Default

_No arguments._

### STEUERN_PRODUKTIONSMODE_START

Uebernahme der IO-Kontrolle vom Steuergeraet und Einschalten des Produktionsmodus KWP2000: $30 InputOutputControlByLocalIdentifier $06 Produktionsmode $07 shortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_PRODUKTIONSMODE_STOP

Ausschalten des Produktionsmodus und Zurueckgabe der IO-Steuerung an das SG KWP2000: $30 InputOutputControlByLocalIdentifier $06 Produktionsmode $00 returnControlToECU Modus  : Default

_No arguments._

### STEUERN_DAEMPFER_TEST_MODUS_START

Uebernahme der IO-Kontrolle vom Steuergeraet und Einschalten des Daempfer_Test- und Showroommodus KWP2000: $30 InputOutputControlByLocalIdentifier $07 Daempfer_Test_Modus $07 shortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_DAEMPFER_TEST_MODUS_STOP

Ausschalten des Daempfer_Test- und Showroommodus und Uebergabe der IO-Kontrolle ans SG zurueck KWP2000: $30 InputOutputControlByLocalIdentifier $07 Daempfer_Test_Modus $00 returnControlToECU Modus  : Default

_No arguments._

### STEUERN_SENSOR_ABGLEICH_ROUTINE_START

Startet die Routine fuer den Sensorabgleich KWP2000: $31 StartRoutineByLocalIdentifier $20 Kalibrierung Sensoren Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_KANAL | string | Bestimmt das zu steuernde Ventil table TAB_MR_SENSORKANAL TEXT |

### STEUERN_SENSOR_ABGLEICH_ROUTINE_STOP

Stoppt die Routine fuer die Sensorkalibrierung KWP2000: $32 StopRoutineByLocalIdentifier $20 Kalibrierung Sensoren Modus  : Default

_No arguments._

### STEUERN_SENSOR_ABGLEICH_ROUTINE_RESULTS

Status der Routine fuer den Sensorabgleich KWP2000: $33 RequestRoutineResultsByLocalIdentifier $20 Kalibrierung Sensoren Modus  : Default

_No arguments._

### STEUERN_KALIBRIERUNG_FEDERBEIN_ROUTINE_START

Startet die Routine fuer Federbeinkalibrierung KWP2000: $31 StartRoutineByLocalIdentifier $21 Kalibrierung Federbein Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ART_KALIBRIERUNG | string | Auswahl Kalibrierungsart table TAB_MR_ART_KALIBRIERUNG_SAF TEXT |

### STEUERN_KALIBRIERUNG_FEDERBEIN_ROUTINE_STOP

Stoppt die Routine fuer die Federbeinkalibrierung KWP2000: $32 StopRoutineByLocalIdentifier $21 Kalibrierung Federbein Modus  : Default

_No arguments._

### STEUERN_KALIBRIERUNG_FEDERBEIN_ROUTINE_RESULTS

Status der Routine fuer die Federbeinkalibrierung KWP2000: $33 RequestRoutineResultsByLocalIdentifier $21 Kalibrierung Federbein Modus  : Default

_No arguments._

### STEUERN_FAHREREINSTELLUNG_ROUTINE_START

Startet die Routine fuer die Fahrereinstellung KWP2000: $31 StartRoutineByLocalIdentifier $22 Fahrereinstellung Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SAF_FEDERVORSPANNUNG | string | Waehlt die Federrate table TAB_FEDERVORSPANNUNG_ARG TEXT |
| SAF_DAEMPFUNG | string | Waehlt die Daempfung table TAB_DAEMPFUNG_ARG TEXT |

### STEUERN_FAHREREINSTELLUNG_ROUTINE_RESULTS

Status der Routine fuer die Fahrereinstellung KWP2000: $33 RequestRoutineResultsByLocalIdentifier $22 Fahrereinstellung Modus  : Default

_No arguments._

### STATUS_RACECAL

Dieser Job liest den Status des Race Calibration Kits 0xE001 RACECAL_STAT

_No arguments._

### STATUS_RACECAL_DAMP_FAC

Dieser Job liest die Kalibrierungsdaten fuer die manuelle Verstellung der Zug-/Druckstufe 0xE002 RACECAL_DAMP_FAC

_No arguments._

### STATUS_RACECAL_WHEEL_INF

Dieser Job liest die Kalibrierungsdaten fuer die montierte Reifen 0xE003 RACECAL_WHEEL_INF

_No arguments._

### STATUS_RACECAL_TRACK

Dieser Job liest die Kalibrierungsdaten fuer die Rennstrecke 0xE004 RACECAL_TRACK

_No arguments._

### STATUS_RACECAL_SHIMMING

Dieser Job liest die Kalibrierungsdaten fuer e-Shimming 0xE005 RACECAL_SHIMMING

_No arguments._

### STATUS_RACECAL_CHKSUM

Dieser Job liest die Checksumme der Kalibrierungsdaten 0xE006 RACECAL_CHKSUM

_No arguments._

### STATUS_RACECAL_INFO

Dieser Job liest die Informationen zum aktiven Datensatz 0xE007 RACECAL_INFO

_No arguments._

### STATUS_RACECAL_HIST

Dieser Job liest die Historie der Kalibrierungssaetze 0xE008 RACECAL_HIST

_No arguments._

### STATUS_RACECAL_SETUP

Dieser Job liest Verbauzustand des Federwegsensors vorne 0xE009 RACECAL_SETUP

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
| 0xB7 | SB LiMotive Germany GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
| 0xBA | BorgWarner |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x11 | TI_K2_NRSNS |
| 0x12 | TI_K2_NRSFNS |
| 0x22 | TI_K2_NRCNC |
| 0x77 | TI_K2_NRBTCE |
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
| 0x670C | Unterspannung Batterie |
| 0x670D | Überspannung Batterie |
| 0x670E | Failsafe Ebene 5: Hardware Failsafe |
| 0x670F | Failsafe Ebene 4: Federwegssensor Fehler |
| 0x6710 | Failsafe Ebene 3: reduziertes SAF-System |
| 0x6711 | Sensorabgleich fehlerhaft |
| 0x6712 | Neustart Ventilendstufe vorne durch Applikationssoftware |
| 0x6713 | Neustart Ventilendstufe hinten durch Applikationssoftware |
| 0x6714 | HL-SW_DTC7 |
| 0x6715 | HL-SW_DTC8 |
| 0x6716 | DC-Motor hinten: Vollkalibrierung fehlgeschlagen |
| 0x6717 | Federverstellung hinten: Position nicht erreicht |
| 0x6718 | Motor, Federverstellung hinten: Kurzschluss |
| 0x6719 | Motor, Federverstellung hinten: Leitungsunterbrechung |
| 0x671A | Motor, Federverstellung hinten:Übertemperatur |
| 0x671B | Proportionalventil hinten: Kurzschluss |
| 0x671C | Proportionalventil hinten: Leitungsunterbrechung |
| 0x671D | Proportionalventil Lenkung: Kurzschluss |
| 0x671E | Proportionalventil Lenkung: Leitungsunterbrechung |
| 0x671F | Proportionalventil vorne: Kurzschluss |
| 0x6720 | Proportionalventil vorne: Leitungsunterbrechung |
| 0x6721 | Sensor, Federverstellung hinten: elektrischer Fehler |
| 0x6722 | Federwegsensor vorne: Messwert hat Maximalwert überschritten |
| 0x6723 | Federwegsensor vorne: Messwert hat Minimalwert unterschritten |
| 0x6724 | Federwegsensor vorne: Messwert unplausibel |
| 0x6725 | Federwegsensor vorne: Nullpunkt nicht gelernt |
| 0x6726 | Federwegsensor vorne: Sensorparameter unplausibel |
| 0x6727 | Federwegsensor vorne: Versorgungsspannung zu niedrig |
| 0x6728 | Federwegsensor vorne: Versorgungsspannung zu hoch |
| 0x6729 | Federwegsensor hinten: Messwert hat Maximalwert überschritten |
| 0x672A | Federwegsensor hinten: Messwert hat Minimalwert unterschritten |
| 0x672B | Federwegsensor hinten: Nullpunkt nicht gelernt |
| 0x672C | Federwegsensor hinten: Messwert unplausibel |
| 0x672D | Federwegsensor hinten: Sensorparameter unplausibel |
| 0x672E | Federwegsensor hinten: Versorgungsspannung zu niedrig |
| 0x672F | Federwegsensor hinten: Versorgungsspannung zu hoch |
| 0x6730 | Beschleunigungssensor vorne: Messwert hat Maximalwert überschritten |
| 0x6731 | Beschleunigungssensor vorne: Messwert hat Minimalwert unterschritten |
| 0x6732 | Beschleunigungssensor vorne: Messwert unplausibel |
| 0x6733 | Beschleunigungssensor vorne: Sensorparameter unplausibel |
| 0x6734 | Beschleunigungssensor vorne: Nullpunkt nicht gelernt |
| 0x6735 | Beschleunigungssensor vorne: Versorgungsspannung zu niedrig |
| 0x6736 | Beschleunigungssensor vorne: Versorgungsspannung zu hoch |
| 0x6738 | Proportionalventil hinten: keine Endstufenfreigabe über Watchdog |
| 0x6739 | Proportionalventil hinten: Strommessung nicht kalibriert |
| 0x673B | Proportionalventil Lenkung: keine Endstufenfreigabe über Watchdog |
| 0x673C | Proportionalventil Lenkung: Strommessung nicht kalibriert |
| 0x673E | Proportionalventil vorne: keine Endstufenfreigabe über Watchdog |
| 0x673F | Proportionalventil vorne: Strommessung nicht kalibriert |
| 0x6745 | Radrehzahlsignal hinten: Sensorsignal unplausibel |
| 0x674A | Radrehzahlsignal vorne: Sensorsignal unplausibel |
| 0x674B | SAF-SG: Übertemperatur |
| 0x674E | Strommessung Lenkung:  Stromreglerplausibilitätsfehler |
| 0x6751 | Strommessung Proportionalventil  hinten:  Stromreglerplausibilitätsfehler |
| 0x6756 | Strommessung Proportionalventil vorne:  Stromreglerplausibilitätsfehler |
| 0x6757 | Taster1: Kurzschluss nach Masse |
| 0x6758 | Taster1: Kurzschluss nach UBatt oder nach 5VSupply |
| 0x6759 | Taster2: Kurzschluss nach Masse |
| 0x675A | Taster2: Kurzschluss nach UBatt oder nach 5VSupply |
| 0x675B | Produktionsmode aktiv |
| 0x675C | Beschleunigungssensor hinten: Messwert unplausibel |
| 0x675D | Beschleunigungssensor hinten: Messwert hat Maximalwert überschritten |
| 0x675E | Beschleunigungssensor hinten: Messwert hat Minimalwert unterschritten |
| 0x675F | Beschleunigungssensor hinten: Versorgungsspannung zu hoch |
| 0x6760 | Beschleunigungssensor hinten: Versorgungsspannung zu niedrig |
| 0x6761 | Beschleunigungssensor hinten: Nullpunkt nicht gelernt |
| 0x6762 | Beschleunigungssensor hinten: Sensorparameter unplausibel |
| 0x6768 | Hardwarefehler Steuergeraet |
| 0x6769 | Softwarefehler Steuergeraet |
| 0x676A | NVM_E_ERASE_FAILED |
| 0x676B | NVM_E_WRONG_CONFIG_ID |
| 0x676C | NVM_E_CONTROL_FAILED |
| 0x676D | NVM_E_READ_ALL_FAILED |
| 0x676E | NVM_E_WRITE_ALL_FAILED |
| 0x676F | NVM_E_WRITE_FAILED |
| 0x6770 | NVM_E_READ_FAILED |
| 0x6771 | Daempfer Testmodus aktiv |
| 0xD744 | ABS Zeitüberschreitung ABS_1_MOTBK |
| 0xD745 | ABS Zeitüberschreitung BRP_MOTBK |
| 0xD746 | BMSK Zeitüberschreitung DTC_DT_MOTBK |
| 0xD747 | BMSK Zeitüberschreitung DRDY_MOTBK |
| 0xD748 | ABS_ZFE_BMSK Zeitüberschreitung SPEED_MOTBK |
| 0xD749 | KOMBI  Zeitüberschreitung KOMBI_DATA_MOTBK |
| 0xD74A | BMSK  Zeitüberschreitung MOD_VEH_MOTBK |
| 0xD74B | BMSK  Zeitüberschreitung ENGINE_1_MOTBK |
| 0xD74C | BMSK  Zeitüberschreitung ENGINE_2_MOTBK |
| 0xD74D | SEB Zeitüberschreitung SEB_ID1_MOTBK |
| 0xD74E | SEB Zeitüberschreitung SEB_ID4_MOTBK |
| 0xD74F | ZFE_BMSK  Zeitüberschreitung ZFE_2_MOTBK |
| 0xD750 | CAN Bus Off |
| 0xD751 | KOMBI Zeitüberschreitung CTR_SUSPD_AD_MOTBK |
| 0xD752 | KOMBI Zeitüberschreitung AUINF_S_MOTBK |
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
| 0x670C | 0x01 | 0x03 | 0x04 | - |
| 0x670D | 0x01 | 0x03 | 0x04 | - |
| 0x670E | 0x01 | - | - | - |
| 0x670F | 0x01 | - | - | - |
| 0x6710 | 0x01 | - | - | - |
| 0x6711 | 0x01 | - | - | - |
| 0x6712 | 0x01 | - | - | - |
| 0x6713 | 0x01 | - | - | - |
| 0x6714 | 0x01 | - | - | - |
| 0x6715 | 0x01 | - | - | - |
| 0x6716 | 0x01 | 0x03 | 0x24 | M_DC_MOTOR1 |
| 0x6717 | 0x01 | 0x03 | 0x24 | M_DC_MOTOR1 |
| 0x6718 | 0x01 | 0x03 | 0x24 | M_DC_MOTOR1 |
| 0x6719 | 0x01 | 0x03 | 0x24 | M_DC_MOTOR1 |
| 0x671A | 0x01 | 0x03 | 0x24 | M_DC_MOTOR1 |
| 0x671B | 0x01 | 0x1C | 0x1D | 0x1E |
| 0x671C | 0x01 | 0x1C | 0x1D | 0x1E |
| 0x671D | 0x01 | 0x1F | 0x20 | 0x21 |
| 0x671E | 0x01 | 0x1F | 0x20 | 0x21 |
| 0x671F | 0x01 | 0x19 | 0x1A | 0x1B |
| 0x6720 | 0x01 | 0x19 | 0x1A | 0x1B |
| 0x6721 | 0x01 | 0x03 | 0x27 | 0x28 |
| 0x6722 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6723 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6724 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6725 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6726 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6727 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6728 | 0x01 | M_SENSOR1_A | 0x0F | M_SENSOR1 |
| 0x6729 | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x672A | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x672B | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x672C | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x672D | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x672E | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x672F | 0x01 | M_SENSOR2_A | 0x14 | M_SENSOR2 |
| 0x6730 | 0x01 | M_SENSOR3_A | 0x2F | M_SENSOR3 |
| 0x6731 | 0x01 | M_SENSOR3_A | 0x2F | M_SENSOR3 |
| 0x6732 | 0x01 | M_SENSOR3_A | 0x2F | M_SENSOR3 |
| 0x6734 | 0x01 | M_SENSOR3_A | 0x2F | M_SENSOR3 |
| 0x6735 | 0x01 | M_SENSOR3_A | 0x2F | M_SENSOR3 |
| 0x6736 | 0x01 | M_SENSOR3_A | 0x2F | M_SENSOR3 |
| 0x6738 | 0x01 | 0x1C | 0x1D | 0x1E |
| 0x6739 | 0x01 | 0x1C | 0x1D | 0x1E |
| 0x673B | 0x01 | 0x1F | 0x20 | 0x21 |
| 0x673C | 0x01 | 0x1F | 0x20 | 0x21 |
| 0x673E | 0x01 | 0x19 | 0x1A | 0x1B |
| 0x673F | 0x01 | 0x19 | 0x1A | 0x1B |
| 0x6745 | 0x01 | 0x03 | 0x29 | 0x2A |
| 0x674A | 0x01 | 0x03 | 0x29 | 0x2A |
| 0x674B | 0x01 | 0x22 | 0x23 | - |
| 0x674E | 0x01 | 0x1F | 0x20 | 0x21 |
| 0x6751 | 0x01 | 0x1C | 0x1D | 0x1E |
| 0x6756 | 0x01 | 0x19 | 0x1A | 0x1B |
| 0x6757 | M_ANALOG | 0x2C | 0x2D | 0x2E |
| 0x6758 | M_ANALOG | 0x2C | 0x2D | 0x2E |
| 0x6759 | M_ANALOG | 0x2C | 0x2D | 0x2E |
| 0x675A | M_ANALOG | 0x2C | 0x2D | 0x2E |
| 0x675B | 0x01 | - | - | - |
| 0x675C | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x675D | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x675E | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x675F | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x6760 | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x6761 | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x6762 | 0x01 | M_SENSOR4_A | 0x34 | M_SENSOR4 |
| 0x676A | 0x01 | - | - | - |
| 0x676B | 0x01 | - | - | - |
| 0x676C | 0x01 | - | - | - |
| 0x676D | 0x01 | - | - | - |
| 0x676E | 0x01 | - | - | - |
| 0x676F | 0x01 | - | - | - |
| 0x6770 | 0x01 | - | - | - |
| 0x6771 | 0x01 | - | - | - |
| 0xD744 | 0x01 | - | - | - |
| 0xD745 | 0x01 | - | - | - |
| 0xD746 | 0x01 | - | - | - |
| 0xD747 | 0x01 | - | - | - |
| 0xD748 | 0x01 | - | - | - |
| 0xD749 | 0x01 | - | - | - |
| 0xD74A | 0x01 | - | - | - |
| 0xD74B | 0x01 | - | - | - |
| 0xD74D | 0x01 | - | - | - |
| 0xD74E | 0x01 | - | - | - |
| 0xD74F | 0x01 | - | - | - |
| 0xD750 | 0x01 | - | - | - |
| 0x6768 | 0x01 | 0x22 | 0x23 | - |
| 0x6769 | 0x01 | 0x22 | 0x23 | - |
| 0xD751 | 0x01 | - | - | - |
| 0xD752 | 0x01 | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | STAT_SYSTEMZEIT_WERT | s | high | signed long | - | 1 | 1 | 0 |
| 0x02 | STAT_KM_STAND | km | high | signed long | - | 1 | 1 | 0 |
| 0x03 | KLEMME30 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x04 | KLEMME30_ERR | 0-n | high | 0xFFFF | TAB_KLEMME30_ERR | - | - | - |
| 0x05 | WERT_SENSOR_1 | V | high | unsigned int | - | 1.0 | 1000 | 0 |
| 0x06 | WERT_SENSOR_1_TYP | 0-n | high | 0xFF | TAB_WERT_SENSOR_1_TYP | - | - | - |
| 0x07 | WERT_SENSOR_1_KURVE | 0-n | high | 0xFF | TAB_WERT_SENSOR_1_KURVE | - | - | - |
| 0x08 | WERT_SENSOR_1_ERR | 0-n | high | 0xFFFF | TAB_WERT_SENSOR1_ERR | - | - | - |
| 0x09 | WERT_SENSOR_1_VERSSP_ERR | 0-n | high | 0xFFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | - | - | - |
| 0x0A | WERT_SENSOR_2 | V | high | unsigned int | - | 1.0 | 1000 | 0 |
| 0x0B | WERT_SENSOR_2_TYP | 0-n | high | 0xFF | TAB_WERT_SENSOR_1_TYP | - | - | - |
| 0x0C | WERT_SENSOR_2_KURVE | 0-n | high | 0xFF | TAB_WERT_SENSOR_1_KURVE | - | - | - |
| 0x0D | WERT_SENSOR_2_ERR | 0-n | high | 0xFFFF | TAB_WERT_SENSOR1_ERR | - | - | - |
| 0x0E | WERT_SENSOR_2_VERSSP_ERR | 0-n | high | 0xFFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | - | - | - |
| 0x0F | WERT_SENSOR_1 | V | high | unsigned int | - | 1.0 | 1000 | 0 |
| 0x10 | WERT_SENSOR_1_TYP | 0-n | high | 0xFF00 | TAB_WERT_SENSOR_1_TYP | - | - | - |
| 0x11 | WERT_SENSOR_1_KURVE | 0-n | high | 0x00FF | TAB_WERT_SENSOR_1_KURVE | - | - | - |
| 0x12 | WERT_SENSOR_1_ERR | 0-n | high | 0xFFFF0000 | TAB_WERT_SENSOR1_ERR | - | - | - |
| 0x13 | WERT_SENSOR_1_VERSSP_ERR | 0-n | high | 0x0000FFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | - | - | - |
| 0x14 | WERT_SENSOR_2 | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x15 | WERT_SENSOR_2_TYP | 0-n | high | 0xFF00 | TAB_WERT_SENSOR_1_TYP | - | - | - |
| 0x16 | WERT_SENSOR_2_KURVE | 0-n | high | 0x00FF | TAB_WERT_SENSOR_1_KURVE | - | - | - |
| 0x17 | WERT_SENSOR_2_ERR | 0-n | high | 0xFFFF0000 | TAB_WERT_SENSOR1_ERR | - | - | - |
| 0x18 | WERT_SENSOR_2_VERSSP_ERR | 0-n | high | 0x0000FFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | - | - | - |
| 0x19 | ISTSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1A | SOLLSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1B | ISTSTROM_DAEMPFER_VORNE_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | - | - | - |
| 0x1C | ISTSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1D | SOLLSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1E | ISTSTROM_DAEMPFER_HINTEN_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | - | - | - |
| 0x1F | ISTSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x20 | SOLLSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x21 | ISTSTROM_DAEMPFER_LENKUNG_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | - | - | - |
| 0x22 | FEHLER_KRITISCH | 0-n | High | 0xFFFF | TAB_FEHLER_KRITISCH | - | - | - |
| 0x23 | FEHLER_UNKRITISCH | 0-n | High | 0xFFFFFFFF | TAB_FEHLER_UNKRITISCH | - | - | - |
| 0x24 | DC_MOTOR_STROM | A | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x25 | DC_MOTOR_IST_POSITION | Inkremente | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x26 | DC_MOTOR_SOLL_POSITION | Inkremente | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x27 | HALL_SENSOR_1_SPANNUNG | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x28 | HALL_SENSOR_2_SPANNUNG | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x29 | WHEEL_FRONT_TOOTH_TIME | s | High | unsigned int | - | 1.0 | 1000000.0 | 0.0 |
| 0x2A | WHEEL_REAR_TOOTH_TIME | s | High | unsigned int | - | 1.0 | 1000000.0 | 0.0 |
| 0x2B | SWITCH_1_VOLTAGE | V | high | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x2C | SWITCH_1_ERROR | 0-n | high | 0xFFFF | TAB_SWITCH_X_ERROR | - | - | - |
| 0x2D | SWITCH_2_VOLTAGE | V | high | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x2E | SWITCH_2_ERROR | 0-n | high | 0xFFFF | TAB_SWITCH_X_ERROR | - | - | - |
| 0x2F | WERT_SENSOR_3 | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x30 | WERT_SENSOR_3_TYP | 0-n | high | 0xFF00 | TAB_WERT_SENSOR_1_TYP | - | - | - |
| 0x31 | WERT_SENSOR_3_KURVE | 0-n | high | 0x00FF | TAB_WERT_SENSOR_1_KURVE | - | - | - |
| 0x32 | WERT_SENSOR_3_ERR | 0-n | high | 0xFFFF0000 | TAB_WERT_SENSOR1_ERR | - | - | - |
| 0x33 | WERT_SENSOR_3_VERSSP_ERR | 0-n | high | 0x0000FFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | - | - | - |
| 0x34 | WERT_SENSOR_4 | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x35 | WERT_SENSOR_4_TYP | 0-n | high | 0xFF00 | TAB_WERT_SENSOR_1_TYP | - | - | - |
| 0x36 | WERT_SENSOR_4_KURVE | 0-n | high | 0x00FF | TAB_WERT_SENSOR_1_KURVE | - | - | - |
| 0x37 | WERT_SENSOR_4_ERR | 0-n | high | 0xFFFF0000 | TAB_WERT_SENSOR1_ERR | - | - | - |
| 0x38 | WERT_SENSOR_4_VERSSP_ERR | 0-n | high | 0x0000FFFF | TAB_WERT_SENSOR_1_VERSSP_ERR | - | - | - |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x673A | Proportionalventil hinten: Ventilfehler bei Onlineprüfung |
| 0x673D | Proportionalventil Lenkung: Ventilfehler bei Onlineprüfung |
| 0x6740 | Proportionalventil vorne: Ventilfehler bei Onlineprüfung |
| 0x6763 | Exception-Fehler |
| 0x6764 | Task-Fehler |
| 0x6765 | LL-Check-Fehler |
| 0x6766 | SEK Unterspannung Batterie |
| 0x6767 | SEK Ueberspannung Batterie |
| 0xD75D | SEK ABS Zeitüberschreitung ABS_1_MOTBK |
| 0xD75E | SEK ABS Zeitüberschreitung BRP_MOTBK |
| 0xD753 | SEK BMSK Zeitüberschreitung DTC_DT_MOTBK |
| 0xD754 | SEK BMSK Zeitüberschreitung DRDY_MOTBK |
| 0xD755 | SEK ABS_ZFE_BMSK Zeitüberschreitung SPEED_MOTBK |
| 0xD756 | SEK KOMBI  Zeitüberschreitung KOMBI_DATA_MOTBK |
| 0xD757 | SEK BMSK  Zeitüberschreitung MOD_VEH_MOTBK |
| 0xD758 | SEK BMSK  Zeitüberschreitung ENGINE_1_MOTBK |
| 0xD759 | SEK BMSK  Zeitüberschreitung ENGINE_2_MOTBK |
| 0xD75A | SEK SEB Zeitüberschreitung SEB_ID1_MOTBK |
| 0xD75B | SEK SEB Zeitüberschreitung SEB_ID4_MOTBK |
| 0xD75C | SEK ZFE_BMSK  Zeitüberschreitung ZFE_2_MOTBK |
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
| 0x673A | 0x01 | 0x1C | 0x1D | 0x1E |
| 0x673D | 0x01 | 0x1F | 0x20 | 0x21 |
| 0x6740 | 0x01 | 0x19 | 0x1A | 0x1B |
| 0x6763 | 0x01 | 0x05 | 0x07 | - |
| 0x6764 | 0x01 | 0x08 | 0x09 | 0x0A |
| 0x6765 | 0x01 | 0x05 | 0x06 | - |
| 0x6766 | 0x01 | 0x03 | 0x04 | - |
| 0x6767 | 0x01 | 0x03 | 0x04 | - |
| 0xD751 | 0x01 | - | - | - |
| 0xD752 | 0x01 | - | - | - |
| 0xD753 | 0x01 | - | - | - |
| 0xD754 | 0x01 | - | - | - |
| 0xD755 | 0x01 | - | - | - |
| 0xD756 | 0x01 | - | - | - |
| 0xD757 | 0x01 | - | - | - |
| 0xD758 | 0x01 | - | - | - |
| 0xD759 | 0x01 | - | - | - |
| 0xD75A | 0x01 | - | - | - |
| 0xD75B | 0x01 | - | - | - |
| 0xD75C | 0x01 | - | - | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | STAT_SYSTEMZEIT_WERT | s | high | signed long | - | 1 | 1 | 0 |
| 0x02 | STAT_KM_STAND | km | high | signed long | - | 1 | 1 | 0 |
| 0x03 | KLEMME30 | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x04 | KLEMME30_ERR | 0-n | high | 0xFFFF | TAB_KLEMME30_ERR | - | - | - |
| 0x05 | FEHLER_KRITISCH | 0-n | High | 0xFFFF | TAB_FEHLER_KRITISCH | - | - | - |
| 0x06 | FEHLER_UNKRITISCH | 0-n | High | 0xFFFFFFFF | TAB_FEHLER_UNKRITISCH | - | - | - |
| 0x07 | EXCEPTION_ADRESSE | hex | - | signed long | - | - | - | - |
| 0x08 | WCET_TASK_ERROR | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x09 | NUMBER_TASK_ERROR | 0-n | high | 0xFF | TAB_NUMBER_TASK_ERROR | - | - | - |
| 0x0A | REASON_TASK_ERROR | 0-n | high | 0xFF | TAB_REASON_TASK_ERROR | - | - | - |
| 0x1C | ISTSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1D | SOLLSTROM_DAEMPFER_HINTEN | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1E | ISTSTROM_DAEMPFER_HINTEN_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | - | - | - |
| 0x19 | ISTSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1A | SOLLSTROM_DAEMPFER_VORNE | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x1B | ISTSTROM_DAEMPFER_VORNE_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | - | - | - |
| 0x1F | ISTSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x20 | SOLLSTROM_DAEMPFER_LENKUNG | A | High | unsigned int | - | 1 | 1000 | 0 |
| 0x21 | ISTSTROM_DAEMPFER_LENKUNG_ERR | 0-n | High | 0xFFFF | TAB_ISTSTROM_DAEMPFER_VORNE_ERR | - | - | - |

### TAB_DAEMPFUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Komfort |
| 0x02 | Normal |
| 0x03 | Sport |
| 0x04 | nicht verbaut |
| 0xFF | undefiniert |

### TAB_DAEMPFUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | Komfort |
| 0x02 | Normal |
| 0x03 | Sport |

### TAB_FEDERVORSPANNUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Einzelfahrer |
| 0x02 | Beladen |
| 0x03 | Sozius |
| 0x04 | Gelaende1 |
| 0x05 | Gelaende2 |
| 0x06 | nicht verbaut |
| 0xFF | nicht definiert |

### TAB_FEDERVORSPANNUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | Einzelfahrer |
| 0x02 | Beladen |
| 0x03 | Sozius |
| 0x04 | Gelaende1 |
| 0x05 | Gelaende2 |

### TAB_KALIBRIERUNGSART

| WERT | TEXT |
| --- | --- |
| 0x00 | Vollkalibrierung DC-Motor hinten |
| 0x01 | Rekalibrierung DC-Motor hinten |

### TAB_KALIBRIERUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung Federbein laeuft |
| 0x01 | Fehler Kalibrierung |
| 0x02 | Kalibrierung Federbein erfolgreich |
| 0xFF | ungueltig |

### TAB_STATUS_DC_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Wiederholter Versuch aktiv |
| 0x02 | Position erreicht |
| 0x03 | Motorposition nicht im Zielfenster |
| 0x04 | Motor nicht verbaut |
| 0x05 | Motor deaktiviert |
| 0x06 | Motor zu heiss |
| 0x07 | Fehler vorhanden |
| 0xFF | ungueltig |

### TAB_ROUTINESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine nicht beendet |
| 0x01 | Routine erfolgreich beendet |
| 0x02 | Routine nicht erfolgreich beendet |
| 0x03 | Routine abgebrochen |
| 0xFF | ungueltig |

### TAB_PROPVENTILSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Zielfenster des Stroms erreicht |
| 0x01 | Zielfenster des Stroms nicht erreicht |
| 0x02 | Proportionalventil nicht verbaut |
| 0x03 | Proportionalventil nicht aktiviert |
| 0x04 | Kurzschluss |
| 0x05 | Leitungsbruch |
| 0xFF | ungueltig |

### TAB_SENSORKANAL

| WERT | TEXT |
| --- | --- |
| 0x00 | AIN1..AIN4 |
| 0x01 | AIN1 |
| 0x02 | AIN2 |
| 0x03 | AIN3 |
| 0x04 | AIN4 |

### TAB_SAF_SG

| WERT | TEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | SAF in Ordnung |
| 0x02 | SAF defekt: Systemfehler vorhanden |
| 0xFF | undefiniert |

### TAB_VENTIL_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkung |
| 0x01 | Daempfung vorne |
| 0x02 | Daempfung hinten |
| 0x03 | Lenkung und Daempfung vorne |
| 0x04 | Lenkung und Daempfung hinten |
| 0x05 | Daempfung vorne und hinten |
| 0x06 | Alle Proportionalventile |

### TAB_SUBFUNKTION_IO

| WERT | TEXT |
| --- | --- |
| 0x00 | returnControlToECU |
| 0x07 | shortTermAdjustment |

### TAB_MR_ESA_STATUS_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kalibrierung Federbein laeuft |
| 0x01 | Fehler Kalibrierung |
| 0x02 | Kalibrierung Federbein erfolgreich |
| 0xFF | ungültig |

### TAB_WERT_SENSOR_1_VERSSP_ERR

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | kein Fehler festgestellt |
| 0x00000001 | Signal zu hoch |
| 0x00000002 | Signal zu niedrig |
| 0x00000004 | reserviert |
| 0x00000008 | reserviert |
| 0x00000010 | reserviert |
| 0x00000020 | reserviert |
| 0x00000040 | reserviert |
| 0x00000080 | reserviert |
| 0x00000100 | reserviert |
| 0x00000200 | reserviert |
| 0x00000400 | reserviert |
| 0x00000800 | reserviert |
| 0x00001000 | reserviert |
| 0x00002000 | reserviert |
| 0x00004000 | reserviert |
| 0x00008000 | reserviert |
| 0xFFFFFFFF | manuell auswerten |

### TAB_WERT_SENSOR_1_TYP

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | ungültig |
| 0x0100 | Beschleunigungssensor |
| 0x0200 | Höhenstandssensor |
| 0xFFFF | nicht definiert |

### TAB_REASON_TASK_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | WCET Überschreitung |
| 0x01 | Taskausfall |
| 0xFF | ungültiger Wert |

### TAB_MR_LED_VERBAU_DC_HINTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung zur Soll-Position laeuft |
| 0x01 | Wiederholter Versuch aktiv |
| 0x02 | Soll-Position erreicht |
| 0x03 | Motorposiition nicht im Zielfenster |
| 0x04 | Ersatzposition: Abgestimmtes Fahrwerk bei Fehler |
| 0x05 | Motor nicht verbaut |
| 0x06 | Motor deaktiviert |
| 0x07 | Motor zu heiss |
| 0x08 | Fehler vorhanden |
| 0xFF | ungültig |

### TAB_MR_SENSORKANAL

| WERT | TEXT |
| --- | --- |
| 0x00 | AIN1..AIN4 |
| 0x01 | AIN1 |
| 0x02 | AIN2 |
| 0x03 | AIN3 |
| 0x04 | AIN4 |

### TAB_ISTSTROM_DAEMPFER_VORNE_ERR

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Ventil Kurzschluss nach KL30 |
| 0x0002 | Ventil Kurzschluss nach KL31 |
| 0x0004 | Ventil offene Leitung |
| 0x0008 | Ventil Kurzschluss |
| 0x0010 | reserviert |
| 0x0020 | Ventilstrommessung nicht kalibriert |
| 0x0040 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | allgemeiner Ventilfehler bei Onlinepruefung |
| 0x0200 | Hochlaufpruefung nicht durchgefuehrt |
| 0x0400 | Stromplausibilitaetsfehler |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_MR_SAF_PROPORTIONALVENTIL

| WERT | TEXT |
| --- | --- |
| 0x00 | Zielfenster des Stromes erreicht |
| 0x01 | Zielfenster des Stromes nicht erreicht |
| 0x02 | Proportionalventil nicht verbaut |
| 0x03 | Proportionalventil nicht aktiviert |
| 0x04 | Kurzschluss |
| 0x05 | Leitungsbruch |
| 0xFF | ungültig |

### TAB_MR_VENTIL_ANSTEUERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkung |
| 0x01 | Daempfung vorne |
| 0x02 | Daempfung hinten |
| 0x03 | Lenkung und Daempfung vorne |
| 0x04 | Lenkung und Daempfung hinten |
| 0x05 | Daempfung vorne und hinten |
| 0x06 | Alle Proportionalventile |

### TAB_WERT_SENSOR1_ERR

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | kein Fehler festgestellt |
| 0x00010000 | Signal zu hoch |
| 0x00020000 | Signal zu niedrig |
| 0x00040000 | reserviert |
| 0x00080000 | reserviert |
| 0x00100000 | reserviert |
| 0x00200000 | Sensorparameter nicht codiert |
| 0x00400000 | Sensoreinbaulage nicht gelernt |
| 0x00600000 | Sensorparameter nicht codiert und Sensoreinbaulage nicht gelernt |
| 0x00800000 | reserviert |
| 0x01000000 | reserviert |
| 0x02000000 | reserviert |
| 0x04000000 | reserviert |
| 0x08000000 | reserviert |
| 0x10000000 | reserviert |
| 0x20000000 | reserviert |
| 0x40000000 | reserviert |
| 0x80000000 | reserviert |
| 0xFFFFFFFF | manuell auswerten |

### TAB_MR_ROUTINE_SAF

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine nicht beendet |
| 0x01 | Routine erfolgreich beendet |
| 0x02 | Routine nicht erfolgreich beendet |
| 0x03 | Routine abgebrochen |
| 0xFF | Ungültig |

### TAB_MR_SAF_STATUS_DC_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Verstellung laeuft |
| 0x01 | Wiederholter Versuch aktiv |
| 0x02 | Position erreicht |
| 0x03 | Motorposiition nicht im Zielfenster |
| 0x04 | Motor nicht verbaut |
| 0x05 | Motor deaktiviert |
| 0x06 | Motor zu heiss |
| 0x07 | Fehler vorhanden |
| 0xFF | ungültig |

### TAB_MR_ART_KALIBRIERUNG_SAF

| WERT | TEXT |
| --- | --- |
| 0x00 | Vollkalibrierung DC-Motor hinten |
| 0x01 | Rekalibrierung DC-Motor hinten |

### TAB_MR_STAT_SAF_FREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | 400 Hz |
| 0x01 | 800 Hz |
| 0x02 | 1200 Hz |
| 0x03 | 1600 Hz |
| 0x04 | 2000 Hz |
| 0xFF | ungueltig |

### TAB_FEHLER_KRITISCH

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler festgestellt |
| 0x03 | ADC-Fehler |
| 0x04 | ALU-Fehler |
| 0x05 | Core-Spg.-Fehler |
| 0x07 | TLE Fehler |
| 0x08 | Watchdog Fehler |
| 0x28 | Taskfehler |
| 0x30 | Reset-unbekannte Ursache/unerwartet |
| 0x31 | External Reset (keine Anwendung im ICM-V, da keine Unterscheidung der Ursache möglich) |
| 0x32 | Loss-of-Lock-Reset |
| 0x33 | Loss-of-Clock-Reset |
| 0x34 | CPU WD Reset/Debug-Reset (keine Anwendung im ICM-V) |
| 0x36 | Checkstop-Reset |
| 0x37 | Software-System-Reset (keine Anwendung im ICM-V) |
| 0x38 | Software-external-Reset (keine Anwendung im ICM-V) |
| 0x40 | reserviert |
| 0x41 | Maschine-Check |
| 0x42 | Data-Storage |
| 0x43 | Instruction-Storage |
| 0x44 | External Interupt |
| 0x45 | Alignment |
| 0x46 | Program |
| 0x47 | Floating-point unavailbale |
| 0x48 | System-Call |
| 0x49 | AP unavailable |
| 0x4A | Dekrementer |
| 0x4B | Fixed Interval Timer |
| 0x4C | Watchdog Timer |
| 0x4D | Data TLB Error |
| 0x4E | Instruction TLB Error |
| 0x4F | Debug |
| 0x50 | reserviert |
| 0x51 | reserviert |
| 0x52 | reserviert |
| 0x53 | reserviert |
| 0x54 | reserviert |
| 0x55 | reserviert |
| 0x56 | reserviert |
| 0x57 | reserviert |
| 0x58 | reserviert |
| 0x59 | reserviert |
| 0x5A | reserviert |
| 0x5B | reserviert |
| 0x5C | reserviert |
| 0x5D | reserviert |
| 0x5E | reserviert |
| 0x5F | reserviert |
| 0x60 | SPE unavailbale Exc |
| 0x61 | SPE Data Exc |
| 0x69 | Deadline |
| 0x6B | Stack-Fehler |
| 0x70 | unbekannter OS-Fehler |
| 0xFF | manuell auswerten |

### TAB_WERT_SENSOR_1_KURVE

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Kurve1 |
| 0x0001 | Kurve2 |
| 0xFFFF | Nicht definiert |

### TAB_MR_STATUS_PROP_VENTILE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sollstrom erreicht |
| 0x01 | Proportionalventil deaktiviert |
| 0x02 | Fehler vorhanden |
| 0x03 | ungueltig |

### TAB_ESA_SG

| WERT | TEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | ESA in Ordnung |
| 0x02 | ESA defekt: Systemfehler vorhanden |
| 0xFF | undefiniert |

### TAB_NUMBER_TASK_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 10ms-Task |
| 0x01 | 2.5ms-Task |
| 0xFF | ungültiger Wert |

### TAB_MR_SAF_FREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | 400 Hz |
| 0x01 | 800 Hz |
| 0x02 | 1200 Hz |
| 0x03 | 1600 Hz |
| 0x04 | 2000 Hz |

### TAB_FEHLER_UNKRITISCH

| WERT | UWTEXT |
| --- | --- |
| 0x00000000 | kein Fehler festgestellt |
| 0x00000001 | BUS_OFF |
| 0x00000002 | Task_Check_WCET |
| 0x00000004 | EEP-Driver-Failure |
| 0x00000008 | ROM-Check-Failure |
| 0x00000010 | No-Coding-Data |
| 0xFFFFFFFF | manuell auswerten |

### M_DC_MOTOR1

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x26 | 0x25 |

### M_SENSOR1

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x12 | 0x13 |

### M_SENSOR2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x17 | 0x18 |

### M_SENSOR3

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x32 | 0x33 |

### M_SWITCH1

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x2D | 0x2E |

### M_SENSOR4

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x37 | 0x38 |

### M_SENSOR1_A

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x10 | 0x11 |

### M_SENSOR2_A

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x15 | 0x16 |

### M_SENSOR3_A

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x30 | 0x31 |

### M_SENSOR4_A

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x35 | 0x36 |

### M_ANALOG

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x01 | 0x2B |

### TAB_KLEMME30_ERR

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Überpannung |
| 0x0002 | Unterspannung |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | reserviert |
| 0x0040 | reserviert |
| 0x0060 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |

### TAB_SWITCH_X_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | kein Fehler festgestellt |
| 0x0001 | Schluss nach UBAT |
| 0x0002 | Schluss nach GND |
| 0x0004 | reserviert |
| 0x0008 | reserviert |
| 0x0010 | reserviert |
| 0x0020 | reserviert |
| 0x0040 | reserviert |
| 0x0060 | reserviert |
| 0x0080 | reserviert |
| 0x0100 | reserviert |
| 0x0200 | reserviert |
| 0x0400 | reserviert |
| 0x0800 | reserviert |
| 0x1000 | reserviert |
| 0x2000 | reserviert |
| 0x4000 | reserviert |
| 0x8000 | reserviert |
| 0xFFFF | manuell auswerten |
