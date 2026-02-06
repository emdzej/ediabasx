# fdm_65.prg

## General

|  |  |
| --- | --- |
| File | fdm_65.prg |
| Type | PRG |
| Jobs | 69 |
| Tables | 278 |
| Origin | BMW VS-42 Robert Grießbach, Dieter Martini |
| Revision | 1.000 |
| Author | BMW VS-42 Dieter Martini |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Flexibles Diagnosemodul |  |  |
| ORIGIN | string | BMW VS-42 Robert Grießbach, Dieter Martini |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | BMW VS-42 Dieter Martini |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.35 |  |  |
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

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus $04 requestIdentifiedShadowMemoryDTCAndStatus

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

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

### CODIERDATEN1_LESEN

Lesen der Basis-Codierdaten (Block 1) aus dem FDM KWP2000: $22 30 00 Modus  : Default

_No arguments._

### CODIERDATEN2_LESEN

Lesen der Applikations-Codierdaten (Block 2) aus dem FDM KWP2000: $22 30 00 Modus  : Default

_No arguments._

### CODIERDATEN1_SCHREIBEN

Schreiben der Basis-Codierdaten (Block 1) ins FDM KWP2000: $2E 30 00 Modus  : Default Job darf nur in Verbindung mit TD-530.ipo - Tool benutzt werden!!

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN1 | string | Basis-Codierdaten für FDM mit Software 3.xx = Codierbytes 0 bis 112. Bsp: 05030000FF00010041000555F8050203030001FF04FF0102000000000000000000FF0A0504C001010200320000000000007dc8730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffff Bsp: Einschlafverhinderer finden: 050300001e40030000000000f8050203030004ff0404000001000000000000ffffff0a000000000003200100000000000000000004c00052000000000000ffff00ff00000000000004000042000000000000ff0000ff00000000000004800000000000000000ffff0000000000000000 |

### CODIERDATEN2_SCHREIBEN

Schreiben der Applikations-Codierdaten (Block 2) ins FDM KWP2000: $2E 30 01 Modus  : Default Job darf nur in Verbindung mit TD-530.ipo - Tool benutzt werden!!

| Name | Type | Description |
| --- | --- | --- |
| CODIERDATEN2 | string | Fahrzeugrelevante-Codierdaten für FDM mit Software 3.xx 1. Möglichkeit: Tool 32 bedingt können nur 60 Module codiert werden(Grund: 60x2Byte=240Nibble) die restlichen Codierdaten werden mit FF beschrieben = Codierbytes 0 bis 120. Bsp: 002f010f020f030f040f050f060f070f080f090f0a0f0d0f0e0f120d130d180d202f210d232f272f290d2a2f312f322f342f352f362f372f380d390d3a2f3b2f3c2f3f2f402f412f420d430d442f450d462f472f492f4a2f4b2f4c0d4d0d4e0d4f0d500d602f612f622f632f640d650d660d672f682f690f 2. Möglichkeit: Mit untenstehenden Zahlen kann ausgewählt werden welches Fzg. codiert werden soll Eingabe: "1" = E65 alle Stge mit SMS Eingabe: "2" = E6x alle Stge mit SMS Eingabe: "3" = E8x alle Stge mit SMS Eingabe: "4" = E9x alle Stge mit SMS Eingabe: "5" = RR1 alle Stge mit SMS |

### STEUERN_DIAGNOSEDATEN_LOESCHEN

Löschen der Diagnosedaten KWP2000: $31 Steuergerätespezifische Routine starten $14 Diagnosedaten loeschen Modus  : Default

_No arguments._

### LESEN_DIAGNOSEDATEN_INFO

Information über Struktur und Anzahl der Diagnosedaten lesen KWP2000: $31 Steuergerätespezifische Routine starten $11 Lesen Diagnosedaten Info Modus  : Default

_No arguments._

### LESEN_RINGDATEN_INFO

Information über aktuellen Stand der Diagnosedaten im Ringspeicher lesen Ergebnis ist letzter Eintrag im Ring KWP2000: $31 Steuergerätespezifische Routine starten $12 Lesen Ringdaten Info Modus  : Default

_No arguments._

### LESEN_SMSDATEN_INFO

Information über gesendete SMSe lesen Ergebnis ist gesendete SMSe pro Kategorie KWP2000: $31 Steuergerätespezifische Routine starten $13 Lesen SMS-Daten Info Modus  : Default

_No arguments._

### LESEN_DIAGNOSEDATEN

Lesen der Diagnosedaten KWP2000: $31 SSteuergerätespezifische Routine starten $10 Diagnosedaten lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KAT_NUMMER | unsigned int | Nummer der auszulesenden Kategorie |
| BLOCK_NUMMER | unsigned int | Nummer des auszulesenden Blocks (dezimal) |

### STATUS_LESEN

Lesen der Steuergerätedaten KWP2000: $22 Steuergerätespezifische Routine starten $98 Status lesen $00 Modus  : Default

_No arguments._

### STELLEN_ECHTZEITUHR

Stellen und Starten der Echtzeituhr KWP2000: $2E Steuergerätespezifische Routine starten $00 Stellen Echtzeituhr $02 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TAG | char | Tag |
| MONAT | char | Monat |
| JAHR | char | Jahr (2-stellig) |
| STUNDE | char | Stunde |
| MINUTE | char | Minute |
| SEKUNDE | char | Sekunde |

### STATUS_VORGEBEN

Steuergeräte-Status vorgeben KWP2000: $31 $01 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| A1_MASSE | char | Ausgang 1 masseschaltend steuern 0x00: ausschalten 0x01: einschalten 0x02: im Sekundentakt aus- und einschalten 0x04: im 10-Sekundentakt aus- und einschalten 0xFF: Ausgang unverändert lassen |
| A2_MASSE | char | Ausgang 2 masseschaltend steuern 0x00: ausschalten 0x01: einschalten 0x02: im Sekundentakt aus- und einschalten 0x04: im 10-Sekundentakt aus- und einschalten 0xFF: Ausgang unverändert lassen |
| A1_PLUS | char | Ausgang 1 plusschaltend steuern 0x00: ausschalten 0x01: einschalten 0x02: im Sekundentakt aus- und einschalten 0x04: im 10-Sekundentakt aus- und einschalten 0xFF: Ausgang unverändert lassen |
| A2_PLUS | char | Ausgang 2 plusschaltend steuern 0x00: ausschalten 0x01: einschalten 0x02: im Sekundentakt aus- und einschalten 0x04: im 10-Sekundentakt aus- und einschalten 0xFF: Ausgang unverändert lassen |

### LESEN_CAN_STATUS

Lesen des Inhalts einer Nachricht auf einem der CANs KWP2000: $31 $29 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAN_ID | int | CAN_ID der auszulesenden Nachricht z.B: 0x0130 |
| CAN_AUSWAHL | int | 0 --> Anfrage am Low-Speed-CAN 1 --> Anfrage am High-Speed-CAN |

### FEHLERSPEICHER_LOESCHEN_EINZELN

Fehlerspeicher löschen einzeln KWP2000: $14 Fehlerspeicher löschen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FEHLERCODE | unsigned int | zu löschender Fehlercode |

### SCHREIBEN_PIN_NUMMER

Schreiben der PIN ins FDM KWP2000: $2E 00 10 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PIN | string | PIN-Nummer 4-stellig |

### SCHREIBEN_NR_SMS_EMAIL

Schreiben der Nummer des SMS -> E-Mail-Gateways ins FDM KWP2000: $2E 00 11 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NUMMER | string | Nummer des SMS->E-Mail-Gateways max. 16-stellig |

### SCHREIBEN_NR_SERVICE_CENTER

Schreiben der Nummer des Service Centers ins FDM KWP2000: $2E 00 12 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NUMMER | string | Nummer des Service Centers 16-stellig |

### SCHREIBEN_EMAIL_ADRESSE

Schreiben der E-Mail-Adresse ins FDM KWP2000: $2E 00 13 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| E_MAIL_ADRESSE | string | E-Mail-Adresse 32-stellig |

### LESEN_NR_SMS_EMAIL

Lesen der Nummer des SMS->E-Mail-Gateways KWP2000: $22 00 11 Modus  : Default

_No arguments._

### LESEN_NR_SERVICE_CENTER

Lesen der Nummer des Service Centers KWP2000: $22 00 12 Modus  : Default

_No arguments._

### LESEN_EMAIL_ADRESSE

Lesen der E-Mail-Adresse KWP2000: $22 00 13 Modus  : Default

_No arguments._

### STEUERN_RESET

Reset auslösen Es wird zuerst ein Boot-Reset ausgelöst und dann ein Software-Reset 1. KWP2000: $11 03 2. KWP2000: $11 01 Modus  : Default

_No arguments._

### SMS_READ

Lesen und Interpretieren der SMSn KWP2000: n. r. Die auszuwertende Datei ist "C:\SMS.txt"

| Name | Type | Description |
| --- | --- | --- |
| DATEINAME | string | Dateiname, in der die SMSn liegen eingeben (Bsp: test) Datei muss in C:\ liegen und mit .txt enden (Bsp: C:\test.txt) (default: sms) |

### FUNKMODEM_STATUS_LESEN

Lesen des Funkmodem Status Modus  : Default

_No arguments._

### SW_MODEM_STATUS_LESEN

Lesen der Software Vers. u. des Modem Status Modus  : Default

_No arguments._

### CAN_ID_TO_DIAG_ADR

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CAN_ID | int | ID der CAN Botschaft |

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
| 0x72 | ASIN AWCO.LTD |
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
| 0xC868 | Watchdog-Reset µP |
| 0xC869 | Clock-Monitor-Reset µP |
| 0xC86a | Illegal Opcode  |
| 0xC86b | Falsche Fahrgestellnummer |
| 0xC86c | Wake-Up durch Unterspannung |
| 0xC86d | Unterspannung im Betrieb (Ubatt < 9V für mindestens eine Minute) |
| 0xC86f | Codierdaten Checksummenfehler |
| 0xC870 | Flash–Speicher defekt |
| 0xC871 | EEPROM–Speicher defekt |
| 0xC872 | DSM Prüfsummenfehler |
| 0xC873 | SRAM Speicher defekt |
| 0xC874 | TAS Antwort ungültig |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 12300000 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 1xxxxxxx | 11 | Fehlerklassifikation t > 1min |
| x1xxxxxx | 21 | Fehlerklassifikation 1s < t < 1min |
| xx1xxxxx | 31 | Fehlerklassifikation 0 < t < 1s |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | Zeit_FehlerAnfang | Zeit_FehlerEnde | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Spannung Fehler_Anfang | Volt | - | unsigned char | - | 20 | 254 | 0 |
| 0x11 | Jahr Fehler_Anfang | Jahr | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | Monat Fehler_Anfang | Monat | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | Tag Fehler_Anfang | Tag | - | unsigned char | - | 1 | 1 | 0 |
| 0x14 | Stunde Fehler_Anfang | h | - | unsigned char | - | 1 | 1 | 0 |
| 0x15 | Minute Fehler_Anfang | min | - | unsigned char | - | 1 | 1 | 0 |
| 0x16 | Sekunde Fehler_Anfang | sek | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Jahr Fehler_Ende | Jahr | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | Monat Fehler_Ende | Monat | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | Tag Fehler_Ende | Tag | - | unsigned char | - | 1 | 1 | 0 |
| 0x24 | Stunde Fehler_Ende | h | - | unsigned char | - | 1 | 1 | 0 |
| 0x25 | Minute Fehler_Ende | min | - | unsigned char | - | 1 | 1 | 0 |
| 0x26 | Sekunde Fehler_Ende | sek | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC86e | POR Power-On-Reset |
| 0xc872 | EEPROM -> RAM Abgleich |
| 0xc873 | DSM read address error |
| 0xc874 | TAS response invalid |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 12300000 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | Zeit_IFehlerAnfang | Zeit_IFehlerEnde | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Spannung Fehler_Anfang | Volt | - | unsigned char | - | 20 | 254 | 0 |
| 0x11 | Jahr Fehler_Anfang | Jahr | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | Monat Fehler_Anfang | Monat | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | Tag Fehler_Anfang | Tag | - | unsigned char | - | 1 | 1 | 0 |
| 0x14 | Stunde Fehler_Anfang | h | - | unsigned char | - | 1 | 1 | 0 |
| 0x15 | Minute Fehler_Anfang | min | - | unsigned char | - | 1 | 1 | 0 |
| 0x16 | Sekunde Fehler_Anfang | sek | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Jahr Fehler_Ende | Jahr | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | Monat Fehler_Ende | Monat | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | Tag Fehler_Ende | Tag | - | unsigned char | - | 1 | 1 | 0 |
| 0x24 | Stunde Fehler_Ende | h | - | unsigned char | - | 1 | 1 | 0 |
| 0x25 | Minute Fehler_Ende | min | - | unsigned char | - | 1 | 1 | 0 |
| 0x26 | Sekunde Fehler_Ende | sek | - | unsigned char | - | 1 | 1 | 0 |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 1xxxxxxx | 11 | Fehlerklassifikation t > 1min |
| x1xxxxxx | 21 | Fehlerklassifikation 1s < t < 1min |
| xx1xxxxx | 31 | Fehlerklassifikation 0 < t < 1s |
| xxxxxxxx | 0 | -- |

### ZEIT_FEHLERANFANG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 |

### ZEIT_FEHLERENDE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x21 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 |

### ZEIT_IFEHLERANFANG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 |

### ZEIT_IFEHLERENDE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x21 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 |

### SG_NAMEN

| SG_ADRESSE | SG_KURZNAME | SG_LANGNAME |
| --- | --- | --- |
| 0x00 | ZGM | Zentrales Gateway-Modul (ZGM)                      		 |
| 0x01 | SIM | Sicherheits- und Informations-Modul (SIM)                   |
| 0x02 | SZL | Schaltzentrum Lenksäule                                     |
| 0x03 | SASL | Satellit A-Säule links                                     |
| 0x04 | SASR | Satellit A-Säule rechts                                    |
| 0x05 | STVL | Satellit Tuer vorne links                                  |
| 0x06 | STVR | Satellit Tuer vorne rechts                                 |
| 0x07 | SSFA | Satellit Sitz Fahrer                                       |
| 0x08 | SSBF | Satellit Sitz Beifahrer                                    |
| 0x09 | SBSL | Satellit B-Säule links                                     |
| 0x0A | SBSR | Satellit B-Säule rechts                                    |
| 0x0D | SSH | Satellit Sitz hinten                                        |
| 0x0E | SFZ | Satellit Fahrzeugzentrum                                    |
| 0x12 | DME_DDE | Motor Elektronik / Diesel Elektronik                    |
| 0x13 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave          |
| 0x16 | AFS | Aktivlenkung                                              	 |
| 0x17 | EKP | Kraftstoffpumpe                                          	 |
| 0x18 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe      |
| 0x19 | VTG | Verteilergetriebe                                         	 |
| 0x1B | VTC | Valvetronic                                               	 |
| 0x1E | VTC2 | Valvetronic 2                                              |
| 0x1F | HDEV | HDEV-Steuergerät                                           |
| 0x20 | RDC | Reifendruck-Control                                       	 |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                           	 |
| 0x22 | AHL | Adaptives Kurvenlicht                                     	 |
| 0x23 | ARS | Dynamic Drive                                             	 |
| 0x24 | CVM | Cabrioverdeck-Modul                                       	 |
| 0x27 | PGS | Passive-Go-Steuergerät                                    	 |
| 0x29 | DSC | Dynamische Stabilitäts-Control                           	 |
| 0x2A | EMF | Elektromechanische Feststellbremse                        	 |
| 0x2F | HDEV2 | HDEV2-Steuergerät                                         |
| 0x31 | MMC2 | Multimedia Changer                                		 |
| 0x32 | MMIFC | MMI-Fond CAN Zugang                                		 |
| 0x34 | MMIF | MMI-Fond                                					 |
| 0x35 | SVS | Sprachverarbeitungssystem                                   |
| 0x36 | TEL | Telefon                                                     |
| 0x37 | AMP | Verstärker                                                  |
| 0x38 | EHC | Höhenstands-Control                                         |
| 0x39 | EDC_K | Dämpfer-Control                                           |
| 0x3A | KHI | Kopfhörer-Interface                                         |
| 0x3B | NAV | Navigation                                					 |
| 0x3C | CDC | CD-Wechsler                                                 |
| 0x3D | HUD | Head-Up Display                                             |
| 0x3F | ASK | Audio-System-Kontroller                                     |
| 0x40 | CAS | Car Access System                                           |
| 0x41 | DWA | Diebstahlwarnanlage                                         |
| 0x42 | CIM | Chassis Integrations Modul                                  |
| 0x43 | POW | Powermodul E65                                              |
| 0x44 | SHD | Schiebehebedach                                             |
| 0x45 | RLS | Regen-Fahrlicht-Sensor                                      |
| 0x46 | WIM | Wischerzentrum                                    			 |
| 0x47 | ANT | Antennentuner                                               |
| 0x49 | Sec1 | Security1                                             	 |
| 0x4A | Sec2 | Security2                                             	 |
| 0x4B | VM | Videomodul                                                	 |
| 0x4C | TMF | Tuermodul Fahrertuer                                        |
| 0x4D | TMB | Tuermodul Beifahrertuer                                     |
| 0x4E | TMFH | Tuermodul Fahrertuer hinten                                |
| 0x4F | TMBH | Tuermodul Beifahrertuer hinten                             |
| 0x50 | SINE_65 | DWA-Sirene und Neigungsgeber                            |
| 0x51 | DWA | Diebstahlwarnanlage                                         |
| 0x52 | DWA | Diebstahlwarnanlage                                         |
| 0x53 | DWA | Diebstahlwarnanlage                                         |
| 0x54 | RAD | Radio                                                       |
| 0x60 | KOMBI | Instrumentenkombination                                   |
| 0x61 | FBI | Flexibles Bus-Interface                                     |
| 0x62 | MC_GW | MOST/CAN-Gateway E65 									 |
| 0x63 | MMI/GT | MMI/Grafikteil 											 |
| 0x64 | PDC | Park Distance Control                                       |
| 0x65 | BZM | Bedienzentrum Mittelkonsole                                 |
| 0x66 | BZMF | Bedienzentrum Mittelarmlehne                               |
| 0x67 | ZBE | Zentrales Bedienelement                                     |
| 0x68 | ZBEF | Zentrales Bedienelement Fond                               |
| 0x69 | SM_FAH | Sitzsteuergeraet Hecksitz Fahrer                         |
| 0x6A | SM_BFH | Sitzsteuergeraet Hecksitz Beifahrer                      |
| 0x6B | HKL | Heckklappenlift                                             |
| 0x6D | SMFA | Sitzmodul Fahrer                                           |
| 0x6E | SMBF | Sitzmodul Beifahrer                                        |
| 0x70 | LSZ | Lichtschaltzentrum                                          |
| 0x71 | AHM | Anhängermodul                                               |
| 0x72 | KBM | Karosserie-Basismodul                                       |
| 0x73 | CID | Central Information Display                                 |
| 0x74 | CIDF | Central Information Display Fond                           |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                           |
| 0x79 | HKA | Heckklimaanlage                          					 |
| 0x7A | SH | Standheizgerät                                               |
| 0x7D | FDM | Flexibles Diagnosemodul                                    |
| 0x80 | CAS | Car Access System                                          |
| 0x90 | CCC | Car Communication Computer                                 |
| 0x91 | CCC | Car Communication Computer                                 |
| 0x92 | CCC | Car Communication Computer                                 |
| 0x93 | CCC | Car Communication Computer                                 |
| 0x94 | CCC | Car Communication Computer                                 |
| 0x95 | CCC | Car Communication Computer                                 |
| 0x96 | CCC | Car Communication Computer                                 |
| 0x97 | CCC | Car Communication Computer                                 |
| 0x98 | CCC | Car Communication Computer                                 |
| 0x99 | CCC | Car Communication Computer                                 |
| 0x9A | CCC | Car Communication Computer                                 |
| 0x9B | CCC | Car Communication Computer                                 |
| 0x9C | CCC | Car Communication Computer                                 |
| 0x9D | CCC | Car Communication Computer                                 |
| 0x9E | CCC | Car Communication Computer                                 |
| 0x9F | CCC | Car Communication Computer                                 |
| 0xA0 | CCC | Car Communication Computer                                 |
| 0xA1 | SBSL | Satellit B-Säule links                                     |
| 0xA2 | SBSR | Satellit B-Säule rechts                                    |
| 0xE9 | K_CAN | Bus-System für Karosserieumfänge                           |
| 0xEA | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich               |
| 0xEB | byteflight | Bus-System für Airbag-Steuergeräte                         |
| 0xEC | MOST | Bus-System für Audio- und Kommunikationsumfänge            |
| 0xFF | unbekannt | unbekanntes Steuergerät                                    |

### ID_00

| ORT | ORTTEXT |
| --- | --- |
| 0x9328 | P K-CAN Bus aus |
| 0x9329 | P PT-CAN Bus aus |
| 0x932a | P SI-Bus Bus aus |
| 0x932b | P SI-Bus Pegelfehler |
| 0x932c | P Zu viel Speicher erforderlich |
| 0x932d | P Speicher Fehler |
| 0x932e | P Exeption aufgetreten |
| 0x932f | P PT-Bus WAKE Info unterschiedlich |
| 0x938c | S Sendepufferüberlauf K-CAN |
| 0x938d | S Sendepufferüberlauf PT-CAN |
| 0x938e | S Sendepufferüberlauf SI-Bus |
| 0x938f | S Empfangspufferüberlauf |
| 0x9390 | S Sendpufferüberlauf |
| 0x9391 | S Unerwarteter Funktionsindex im Kf |
| 0x9392 | S Unerwartete Ziel-Bus-Id im Kf |
| 0x9393 | S Unerwarteter IRQ |
| 0x9394 | S K-CAN Bus aus |
| 0x9395 | S PT-CAN Bus aus |
| 0x9396 | S SI-Bus Bus aus |
| 0x9397 | S K-Line Fehler |
| 0xC904 | S K-CAN Eindraht |
| 0x9398 | S SI-Bus Sysemzeitfehler |
| 0xFFFF | unbekannter Fehlerort |

### ID_01

| ORT | ORTTEXT |
| --- | --- |
| 0x93a8 | P Watchdog-Reset uP |
| 0x93a9 | P Clock-Monitor-Reset uP |
| 0x93aa | P Illegal Opcode uP |
| 0x93ab | P Falsche Fahrgestellnummer |
| 0x93ac | P Systemzeitfehler |
| 0x93ad | P Timeout ID 01H (STVL) |
| 0x93ae | P Timeout ID 02H |
| 0x93af | P Timeout ID 03H (STVR) |
| 0x93b0 | P Timeout ID 04H |
| 0x93b1 | P Timeout ID 05H (SBSL) |
| 0x93b2 | P Timeout ID 06H (SASL) |
| 0x93b3 | P Timeout ID 07H (SBSR) |
| 0x93b4 | P Timeout ID 08H (SASR) |
| 0x93b5 | P Timeout ID 09H (SFZ) |
| 0x93b6 | P Timeout ID 0AH (SIM) |
| 0x93b7 | P Timeout ID 0BH (SASL) |
| 0x93b8 | P Timeout ID 0CH (SASR) |
| 0x93b9 | P Timeout ID 0DH (SFZ) |
| 0x93ba | P Timeout ID 0EH |
| 0x93bb | P Timeout ID 0FH |
| 0x93bc | P Timeout ID 20H (SSFA) |
| 0x93bd | P Timeout ID 21H (SSBF) |
| 0x93be | P Timeout ID 22H (SSH) |
| 0x93bf | P Timeout ID 43H (ZGM) |
| 0x93c0 | P Codierdaten Checksummenfehler |
| 0x93c1 | P Stack Overflow |
| 0x93c2 | P PDC_3 : zu wenig Telegramme |
| 0x93c3 | P PDC_3 : Datenfehler in Telegramm |
| 0x93c4 | P PDC_3 : Uebertragungsfehler |
| 0x93c5 | P unplausible Crash-Schwere |
| 0x93c6 | P Fehler im Alarmpfad |
| 0x93c8 | P Abschalten von Modul 2 (SZL) |
| 0x93c9 | P Abschalten von Modul 3 (SASL) |
| 0x93ca | P Abschalten von Modul 4 (SASR) |
| 0x93cb | P Abschalten von Modul 5 (SFZ) |
| 0x93cc | P Abschalten von Modul 6 (STVL) |
| 0x93cd | P Abschalten von Modul 7 (SSFA) |
| 0x93ce | P Abschalten von Modul 8 (SBSL) |
| 0x93cf | P Abschalten von Modul 9 (STVR) |
| 0x93d0 | P Abschalten von Modul 10 (SSBF) |
| 0x93d1 | P Abschalten von Modul 11 (SBSR) |
| 0x93d2 | P Abschalten von Modul 12 (SSH) |
| 0x93d3 | P Abschalten von Modul 13 |
| 0x93d4 | P Abschalten von Modul 14 |
| 0x93d5 | P Abschalten von Modul 15 |
| 0x93d6 | P Abschalten von Modul 16 |
| 0x93d7 | P Abschalten von Modul 17 |
| 0x93d8 | P Abschalten von Modul 18 |
| 0x93d9 | P Ueberspannungsabschaltung defekt |
| 0x93db | P Hochspannungsteil defekt |
| 0x93dc | P Algorithmus-Parameter inkonsistent |
| 0x93dd | P EAM-Parameter inkonsistent |
| 0x93de | P Zuendversuch erfolgt |
| 0x93df | P Unterspannung erkannt |
| 0x93e0 | P COP-Watchdog fehlerhaft |
| 0x9487 | P Keine Kommunikation mit Telefon |
| 0x9488 | P Ueberfallalarm aufgetreten |
| 0x???? | unbekannter Fehlerort |
| 0x93c7 | S Abschalten von Modul 1  (ZGM)  |
| 0x9404 | S Power-On-Reset uP |
| 0x9405 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9406 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9407 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9408 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9409 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x940a | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x940b | S Pre-Drive-Check n.i.O. wegen Modul 1 (ZGM) |
| 0x940c | S Pre-Drive-Check n.i.O. wegen Modul 2 (SZL) |
| 0x940d | S Pre-Drive-Check n.i.O. wegen Modul 3 (SASL) |
| 0x940e | S Pre-Drive-Check n.i.O. wegen Modul 4 (SASR) |
| 0x940f | S Pre-Drive-Check n.i.O. wegen Modul 5 (SFZ) |
| 0x9410 | S Pre-Drive-Check n.i.O. wegen Modul 6 (STVL) |
| 0x9411 | S Pre-Drive-Check n.i.O. wegen Modul 7 (SSFA) |
| 0x9412 | S Pre-Drive-Check n.i.O. wegen Modul 8 (SBSL) |
| 0x9413 | S Pre-Drive-Check n.i.O. wegen Modul 9 (STVR) |
| 0x9414 | S Pre-Drive-Check n.i.O. wegen Modul 10(SSBF) |
| 0x9415 | S Pre-Drive-Check n.i.O. wegen Modul 11(SBSR) |
| 0x9416 | S Pre-Drive-Check n.i.O. wegen Modul 12(SSH) |
| 0x9417 | S Pre-Drive-Check n.i.O. wegen Modul 13 |
| 0x9418 | S Pre-Drive-Check n.i.O. wegen Modul 14 |
| 0x9419 | S Pre-Drive-Check n.i.O. wegen Modul 15 |
| 0x941a | S Pre-Drive-Check n.i.O. wegen Modul 16 |
| 0x941b | S Pre-Drive-Check n.i.O. wegen Modul 17 |
| 0x941c | S Pre-Drive-Check n.i.O. wegen Modul 18 |
| 0x941d | S Statusmeldung fehlt Modul 1 (ZGM) |
| 0x941e | S Statusmeldung fehlt Modul 2 (SZL) |
| 0x941f | S Statusmeldung fehlt Modul 3 (SASL) |
| 0x9420 | S Statusmeldung fehlt Modul 4 (SASR) |
| 0x9421 | S Statusmeldung fehlt Modul 5 (SFZ) |
| 0x9422 | S Statusmeldung fehlt Modul 6 (STVL) |
| 0x9423 | S Statusmeldung fehlt Modul 7 (SSFA) |
| 0x9424 | S Statusmeldung fehlt Modul 8 (SBSL) |
| 0x9425 | S Statusmeldung fehlt Modul 9 (STVR) |
| 0x9426 | S Statusmeldung fehlt Modul 10(SSBF) |
| 0x9427 | S Statusmeldung fehlt Modul 11(SBSR) |
| 0x9428 | S Statusmeldung fehlt Modul 12(SSH) |
| 0x9429 | S Statusmeldung fehlt Modul 13 |
| 0x942a | S Statusmeldung fehlt Modul 14 |
| 0x942b | S Statusmeldung fehlt Modul 15 |
| 0x942c | S Statusmeldung fehlt Modul 16 |
| 0x942d | S Statusmeldung fehlt Modul 17 |
| 0x942e | S Statusmeldung fehlt Modul 18 |
| 0x942f | S Uebertemperatur Stromverteiler A |
| 0x9430 | S Uebertemperatur Stromverteiler B |
| 0x9431 | S Uebertemperatur Stromverteiler C |
| 0x9432 | S Uebertemperatur Stromverteiler D |
| 0x9433 | S Reserved |
| 0x9434 | S Temperaturabschaltung Stromverteiler A |
| 0x9435 | S Temperaturabschaltung Stromverteiler B |
| 0x9436 | S Temperaturabschaltung Stromverteiler C |
| 0x9437 | S Temperaturabschaltung Stromverteiler D |
| 0x9438 | S Reserved |
| 0x9439 | S Ueberstrom Ausgang A1 (SZL) |
| 0x943a | S Ueberstrom Ausgang A2 (SZL) |
| 0x943b | S Ueberstrom Ausgang A3 (SASL) |
| 0x943c | S Ueberstrom Ausgang A4 (SASR) |
| 0x943d | S Ueberstrom Ausgang B1 (SFZ) |
| 0x943e | S Ueberstrom Ausgang B2 (STVL) |
| 0x943f | S Ueberstrom Ausgang B3 (SSFA) |
| 0x9440 | S Ueberstrom Ausgang B4 (SBSL) |
| 0x9441 | S Ueberstrom Ausgang C1 (STVR) |
| 0x9442 | S Ueberstrom Ausgang C2 (SSBF) |
| 0x9443 | S Ueberstrom Ausgang C3 (SBSR) |
| 0x9444 | S Ueberstrom Ausgang C4 (SSH) |
| 0x9445 | S Ueberstrom Ausgang D1 |
| 0x9446 | S Ueberstrom Ausgang D2 |
| 0x9447 | S Ueberstrom Ausgang D3 |
| 0x9448 | S Ueberstrom Ausgang D4 |
| 0x9449 | S Reserved |
| 0x944a | S Reserved |
| 0x944b | S Reserved |
| 0x944c | S Reserved |
| 0x944d | S Ueberspannung Ausgang A1 (SZL) |
| 0x944e | S Ueberspannung Ausgang A2 (SZL) |
| 0x944f | S Ueberspannung Ausgang A3 (SASL) |
| 0x9450 | S Ueberspannung Ausgang A4 (SASR) |
| 0x9451 | S Ueberspannung Ausgang B1 (SFZ) |
| 0x9452 | S Ueberspannung Ausgang B2 (STVL) |
| 0x9453 | S Ueberspannung Ausgang B3 (SSFA) |
| 0x9454 | S Ueberspannung Ausgang B4 (SBSL) |
| 0x9455 | S Ueberspannung Ausgang C1 (STVR) |
| 0x9456 | S Ueberspannung Ausgang C2 (SSBF) |
| 0x9457 | S Ueberspannung Ausgang C3 (SBSR) |
| 0x9458 | S Ueberspannung Ausgang C4 (SSH) |
| 0x9459 | S Ueberspannung Ausgang D1 |
| 0x945a | S Ueberspannung Ausgang D2 |
| 0x945b | S Ueberspannung Ausgang D3 |
| 0x945c | S Ueberspannung Ausgang D4 |
| 0x945d | S Reserved |
| 0x945e | S Reserved |
| 0x945f | S Reserved |
| 0x9460 | S Reserved |
| 0x9461 | S Uebertragungsfehler Modul 1 (ZGM) |
| 0x9462 | S Uebertragungsfehler Modul 2 (SZL) |
| 0x9463 | S Uebertragungsfehler Modul 3 (SASL) |
| 0x9464 | S Uebertragungsfehler Modul 4 (SASR) |
| 0x9465 | S Uebertragungsfehler Modul 5 (SFZ) |
| 0x9466 | S Uebertragungsfehler Modul 6 (STVL) |
| 0x9467 | S Uebertragungsfehler Modul 7 (SSFA) |
| 0x9468 | S Uebertragungsfehler Modul 8 (SBSL) |
| 0x9469 | S Uebertragungsfehler Modul 9 (STVR) |
| 0x946a | S Uebertragungsfehler Modul 10 (SSBF) |
| 0x946b | S Uebertragungsfehler Modul 11 (SBSR) |
| 0x946c | S Uebertragungsfehler Modul 12 (SSH) |
| 0x946d | S Uebertragungsfehler Modul 13 |
| 0x946e | S Uebertragungsfehler Modul 14 |
| 0x946f | S Uebertragungsfehler Modul 15 |
| 0x9470 | S Uebertragungsfehler Modul 16 |
| 0x9471 | S Uebertragungsfehler Modul 17 |
| 0x9472 | S Uebertragungsfehler Modul 18 |
| 0x9473 | S S/E-Diagnose Lichtleistung Modul 1 (ZGM) |
| 0x9474 | S S/E-Diagnose Lichtleistung Modul 2 (SZL) |
| 0x9475 | S S/E-Diagnose Lichtleistung Modul 3 (SASL) |
| 0x9476 | S S/E-Diagnose Lichtleistung Modul 4 (SASR) |
| 0x9477 | S S/E-Diagnose Lichtleistung Modul 5 (SFZ) |
| 0x9478 | S S/E-Diagnose Lichtleistung Modul 6 (STVL) |
| 0x9479 | S S/E-Diagnose Lichtleistung Modul 7 (SSFA) |
| 0x947a | S S/E-Diagnose Lichtleistung Modul 8 (SBSL) |
| 0x947b | S S/E-Diagnose Lichtleistung Modul 9 (STVR) |
| 0x947c | S S/E-Diagnose Lichtleistung Modul 10(SSBF) |
| 0x947d | S S/E-Diagnose Lichtleistung Modul 11(SBSR) |
| 0x947e | S S/E-Diagnose Lichtleistung Modul 12(SSH) |
| 0x947f | S S/E-Diagnose Lichtleistung Modul 13 |
| 0x9480 | S S/E-Diagnose Lichtleistung Modul 14 |
| 0x9481 | S S/E-Diagnose Lichtleistung Modul 15 |
| 0x9482 | S S/E-Diagnose Lichtleistung Modul 16 |
| 0x9483 | S S/E-Diagnose Lichtleistung Modul 17 |
| 0x9484 | S S/E-Diagnose Lichtleistung Modul 18 |
| 0x9485 | S Fehler Relativzeit |
| 0x9486 | S DC/DC-Wandler MSC defekt |
| 0x???? | unbekannter Fehlerort |

### ID_02

| ORT | ORTTEXT |
| --- | --- |
| 0x94a8 | P Watchdog-Reset uP |
| 0x94a9 | P Clock-Monitor-Reset uP |
| 0x94aa | P Illegal Opcode uP |
| 0x94ab | P Falsche Fahrgestellnummer |
| 0x94ac | P Systemzeitfehler |
| 0x94ad | P AD-Wandler fehlerhaft |
| 0x94ae | P Timeout ID 01H (E65,E66,E67,RR01:STVL; E60,E61,E63,E64:TE_FAT) |
| 0x94af | P Timeout ID 02H |
| 0x94b0 | P Timeout ID 03H (E65,E66,E67,RR01:STVR; E60,E61,E63,E64:TE_BFT) |
| 0x94b1 | P Timeout ID 04H |
| 0x94b2 | P Timeout ID 05H (SBSL) |
| 0x94b3 | P Timeout ID 06H (SASL) |
| 0x94b4 | P Timeout ID 07H (SBSR) |
| 0x94b5 | P Timeout ID 08H (SASR) |
| 0x94b6 | P Timeout ID 09H (SFZ) |
| 0x94b7 | P Timeout ID 0AH (E65,E66,E67,RR01:SIM; E60,E61,E63,E64:SGM) |
| 0x94b8 | P Timeout ID 0BH (E65,E66,E67,RR01:SASL; E60,E61,E63,E64:SBSL) |
| 0x94b9 | P Timeout ID 0CH (E65,E66,E67,RR01:SASR; E60,E61,E63,E64:SBSR) |
| 0x94ba | P Timeout ID 0DH (SFZ) |
| 0x94bb | P Timeout ID 0EH (E60,E61,E63,E64:SFZ |
| 0x94bc | P Timeout ID 0FH |
| 0x94bd | P Timeout ID 20H (E65,E66,E67,RR01:SSFA; E60,E61,E63,E64:SBSL) |
| 0x94be | P Timeout ID 21H (E65,E66,E67,RR01:SSBF; E60,E61,E63,E64:SBSR) |
| 0x94bf | P Timeout ID 22H (SSH) |
| 0x94c0 | P Timeout ID 71H (E65,E66,E67,RR01:SIM; E60,E61,E63,E64:SGM) |
| 0x94c1 | P Codierdaten Checksummenfehler |
| 0x94c2 | P Stack Overflow |
| 0x94c3 | P PDC_3 : zu wenig Telegramme |
| 0x94c4 | P PDC_3 : Datenfehler in Telegramm |
| 0x94c5 | P PDC_3 : Uebertragungsfehler |
| 0x94c6 | P unplausible Crash-Schwere |
| 0x94c7 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x94c8 | P Kurzschluss ZK1 nach Masse |
| 0x94c9 | P Kurzschluss ZK1 nach Plus |
| 0x94ca | P Widerstand Zuendpille ZK1 zu klein |
| 0x94cb | P Widerstand Zuendpille ZK1 zu gross |
| 0x94cc | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x94cd | P Unterbrechung ZK1 |
| 0x94ce | P Spannung ZK1 n.i.O. |
| 0x94cf | P Zuendkapazitaet ZK1 n.i.O. |
| 0x94d0 | P Codierung/Konfiguration ZK1 unstimmig |
| 0x94d1 | P Unterbrechung Entladekreis ZK1 |
| 0x94d2 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x94d3 | P Kurzschluss ZK2 nach Masse |
| 0x94d4 | P Kurzschluss ZK2 nach Plus |
| 0x94d5 | P Widerstand Zuendpille ZK2 zu klein |
| 0x94d6 | P Widerstand Zuendpille ZK2 zu gross |
| 0x94d7 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x94d8 | P Unterbrechung ZK2 |
| 0x94d9 | P Spannung ZK2 n.i.O. |
| 0x94da | P Zuendkapazitaet ZK2 n.i.O. |
| 0x94db | P Codierung/Konfiguration ZK2 unstimmig |
| 0x94dc | P Unterbrechung Entladekreis ZK2 |
| 0x94dd | P Fehler im Alarmpfad |
| 0x94de | P E65,66,67,RR:GWS: Einfachfehler Signalpfad E60,61,63,64: U_ASE ausserhalb Bereich |
| 0x94df | P GWS: Zweifachfehler Signalpfad |
| 0x94e0 | P GWS: Parktaster Zweifachkontakt fehlerhaft |
| 0x94e1 | P Klemme 30 fehlt am SZL |
| 0x94e2 | P Klemme 15 unplausibel |
| 0x94e3 | P Klemme U_Isis fehlt |
| 0x94e4 | P LWS: Maximaler Lenkradeinschlagbereich ueberschritten |
| 0x94e5 | P LWS: Schleifer 1 ausserhalb Bereich |
| 0x94e6 | P LWS: Schleifer 2 ausserhalb Bereich |
| 0x94e7 | P LWS: Relativer Schleiferwinkel fehlerhaft |
| 0x94e8 | P keine oder fehlerhafte Einzelrad-Geschwindigkeiten |
| 0x94e9 | P Lenkradwinkelgradient zu hoch |
| 0x94ea | P Kommunikation Lenkrad <-> Lenksaeule fehlerhaft |
| 0x94eb | P LRE-Version nicht kompatibel |
| 0x94ec | P MFL links : Kurzschluss/Unterbrechung |
| 0x94ed | P MFL rechts: Kurzschluss/Unterbrechung |
| 0x94ee | P MFL links : Spannungswert nicht definiert |
| 0x94ef | P MFL rechts: Spannungswert nicht definiert |
| 0x94f0 | P LHZ Heizmatte Unterbrechung |
| 0x94f1 | P LHZ Heizmatte Kurzschluss nach Klemme 31 |
| 0x94f2 | P LHZ Heizmatte Kurzschluss nach Klemme 30 |
| 0x94f3 | P LHZ Timeout-Regelung |
| 0x94f4 | P LHZ Temperaturfuehler fehlerhaft |
| 0x94f5 | P Lenksaeulenverstellschalter: Kurzschluss nach VSS |
| 0x94f6 | P Lenksaeulenverstellschalter: Unterbrechung/Kurzschluss nach VDD |
| 0x94f7 | P Lenksaeulenverstellschalter: Spannungswert nicht definiert |
| 0x94f8 | P Fehler Horn Toener1 |
| 0x94f9 | P Fehler Horn Toener2 |
| 0x94fa | P Lenkstockschalterauswertung fehlerhaft |
| 0x94fb | P LWS: Versorgungsspannung zu klein |
| 0x94fc | P LRE: keine Ausloesebereitschaft |
| 0x94fd | P LRE: Fehler im Alarmpfad |
| 0x94fe | P Algorithmus-Parameter inkonsistent |
| 0x94ff | P EAM-Parameter inkonsistent |
| 0x9500 | P Zuendversuch erfolgt |
| 0x9501 | P LWS nicht abgeglichen |
| 0x9502 | P COP-Watchdog fehlerhaft |
| 0x9503 | P LWS Resetzeitmessung fehlerhaft |
| 0x9504 | P Fehler serielle Leitung Active Front Steering (AFS) |
| 0x9505 | P Kommunikationsfehler CAN |
| 0x9506 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9507 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9508 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9509 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x950A | P Kommunikation mit Zuend-IC gestoert |
| 0x950B | P Energiesparmode aktiv |
| 0x9518 | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x9519 | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x951A | P Spannungsueberwachung LRE unterer Grenzwert unterschritten |
| 0x951B | P Spannungsueberwachung LRE oberer Grenzwert ueberschritten |
| 0x???? | unbekannter Fehlerort |
| 0x950c | S Power-On-Reset uP |
| 0x950d | S Diagnose S/E-Modul (Lichtleistung) |
| 0x950e | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x950f | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9510 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9511 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9512 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9513 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9514 | S Synth. Lenkwinkel: Nullpunkt unplausibel |
| 0x9515 | S Aufsetzen: maximale Geschwindigkeit ueberschritten |
| 0x9516 | S EMV-Fehler im Zuend-Ic |
| 0x9517 | S Uisis Reset |
| 0x???? | unbekannter Fehlerort |

### ID_03

| ORT | ORTTEXT |
| --- | --- |
| 0x9528 | P Watchdog-Reset uP |
| 0x9529 | P Clock-Monitor-Reset uP |
| 0x952a | P Illegal Opcode uP |
| 0x952b | P Falsche Fahrgestellnummer |
| 0x952c | P Systemzeitfehler |
| 0x952d | P Timeout ID 01H (STVL) |
| 0x952e | P Timeout ID 02H |
| 0x952f | P Timeout ID 03H (STVR) |
| 0x9530 | P Timeout ID 04H |
| 0x9531 | P Timeout ID 05H (SBSL) |
| 0x9532 | P Timeout ID 06H (SASL) |
| 0x9533 | P Timeout ID 07H (SBSR) |
| 0x9534 | P Timeout ID 08H (SASR) |
| 0x9535 | P Timeout ID 09H (SFZ) |
| 0x9536 | P Timeout ID 0AH (SIM) |
| 0x9537 | P Timeout ID 0BH (SASL) |
| 0x9538 | P Timeout ID 0CH (SASR) |
| 0x9539 | P Timeout ID 0DH (SFZ) |
| 0x953a | P Timeout ID 0EH |
| 0x953b | P Timeout ID 0FH |
| 0x953c | P Timeout ID 20H (SSFA) |
| 0x953d | P Timeout ID 21H (SSBF) |
| 0x953e | P Timeout ID 22H (SSH) |
| 0x953f | P Timeout ID 71H (SIM) |
| 0x9540 | P Codierdaten Checksummenfehler |
| 0x9541 | P Stack Overflow |
| 0x9542 | P PDC_3 : zu wenig Telegramme |
| 0x9543 | P PDC_3 : Datenfehler in Telegramm |
| 0x9544 | P PDC_3 : Uebertragungsfehler |
| 0x9545 | P unplausible Crash-Schwere |
| 0x9546 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9547 | P Kurzschluss ZK1 nach Masse |
| 0x9548 | P Kurzschluss ZK1 nach Plus |
| 0x9549 | P Widerstand Zuendpille ZK1 zu klein |
| 0x954a | P Widerstand Zuendpille ZK1 zu gross |
| 0x954b | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x954c | P Unterbrechung ZK1  |
| 0x954d | P Spannung ZK1 n.i.O. |
| 0x954e | P Zuendkapazitaet ZK1 n.i.O. |
| 0x954f | P Codierung/Konfiguration ZK1 unstimmig |
| 0x9550 | P Unterbrechung Entladekreis ZK1 |
| 0x9551 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9552 | P Kurzschluss ZK2 nach Masse |
| 0x9553 | P Kurzschluss ZK2 nach Plus |
| 0x9554 | P Widerstand Zuendpille ZK2 zu klein |
| 0x9555 | P Widerstand Zuendpille ZK2 zu gross |
| 0x9556 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9557 | P Unterbrechung ZK2 |
| 0x9558 | P Spannung ZK2 n.i.O. |
| 0x9559 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x955a | P Codierung/Konfiguration ZK2 unstimmig |
| 0x955b | P Unterbrechung Entladekreis ZK2 |
| 0x955c | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 |
| 0x955d | P Kurzschluss ZK3 nach Masse |
| 0x955e | P Kurzschluss ZK3 nach Plus |
| 0x955f | P Widerstand Zuendpille ZK3 zu klein |
| 0x9560 | P Widerstand Zuendpille ZK3 zu gross |
| 0x9561 | P Widerstand Zuendpille ZK3 nicht gemessen |
| 0x9562 | P Unterbrechung ZK3 |
| 0x9563 | P Spannung ZK3 n.i.O. |
| 0x9564 | P Zuendkapazitaet ZK3 n.i.O. |
| 0x9565 | P Codierung/Konfiguration ZK3 unstimmig |
| 0x9566 | P Unterbrechung Entladekreis ZK3 |
| 0x9567 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 |
| 0x9568 | P Kurzschluss ZK4 nach Masse |
| 0x9569 | P Kurzschluss ZK4 nach Plus |
| 0x956a | P Widerstand Zuendpille ZK4 zu klein |
| 0x956b | P Widerstand Zuendpille ZK4 zu gross |
| 0x956c | P Widerstand Zuendpille ZK4 nicht gemessen |
| 0x956d | P Unterbrechung ZK4 |
| 0x956e | P Spannung ZK4 n.i.O. |
| 0x956f | P Zuendkapazitaet ZK4 n.i.O. |
| 0x9570 | P Codierung/Konfiguration ZK4 unstimmig |
| 0x9571 | P Unterbrechung Entladekreis ZK4 |
| 0x9572 | P Fehler im Alarmpfad |
| 0x9573 | P Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9574 | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x9575 | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x9576 | P Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x9577 | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung) |
| 0x9578 | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung) |
| 0x9579 | P Statusfehler Beschleunigungssensor (y-Richtung) |
| 0x947A | P Algorithmus-Parameter inkonsistent |
| 0x947B | P EAM-Parameter inkonsistent |
| 0x957C | P Zuendversuch erfolgt |
| 0x957D | P COP-Watchdog fehlerhaft |
| 0x9589 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK1 |
| 0x958A | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x958B | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK2 |
| 0x958C | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x958D | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK3 |
| 0x958E | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x958F | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK4 |
| 0x9590 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x9591 | P Kommunikation mit Zuend-IC gestoert |
| 0x???? | unbekannter Fehlerort |
| 0x9580 | S Power-On-Reset uP |
| 0x9581 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9582 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9583 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9584 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9585 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9586 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9587 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9588 | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_04

| ORT | ORTTEXT |
| --- | --- |
| 0x95a8 | P Watchdog-Reset uP |
| 0x95a9 | P Clock-Monitor-Reset uP |
| 0x95aa | P Illegal Opcode uP |
| 0x95ab | P Falsche Fahrgestellnummer |
| 0x95ac | P Systemzeitfehler |
| 0x95ad | P Timeout ID 01H (STVL) |
| 0x95ae | P Timeout ID 02H |
| 0x95af | P Timeout ID 03H (STVR) |
| 0x95b0 | P Timeout ID 04H |
| 0x95b1 | P Timeout ID 05H (SBSL) |
| 0x95b2 | P Timeout ID 06H (SASL) |
| 0x95b3 | P Timeout ID 07H (SBSR) |
| 0x95b4 | P Timeout ID 08H (SASR) |
| 0x95b5 | P Timeout ID 09H (SFZ) |
| 0x95b6 | P Timeout ID 0AH (SIM) |
| 0x95b7 | P Timeout ID 0BH (SASL) |
| 0x95b8 | P Timeout ID 0CH (SASR) |
| 0x95b9 | P Timeout ID 0DH (SFZ) |
| 0x95ba | P Timeout ID 0EH |
| 0x95bb | P Timeout ID 0FH |
| 0x95bc | P Timeout ID 20H (SSFA) |
| 0x95bd | P Timeout ID 21H (SSBF) |
| 0x95be | P Timeout ID 22H (SSH) |
| 0x95bf | P Timeout ID 71H (SIM) |
| 0x95c0 | P Codierdaten Checksummenfehler |
| 0x95c1 | P Stack Overflow |
| 0x95c2 | P PDC_3 : zu wenig Telegramme |
| 0x95c3 | P PDC_3 : Datenfehler in Telegramm |
| 0x95c4 | P PDC_3 : Uebertragungsfehler |
| 0x95c5 | P unplausible Crash-Schwere |
| 0x95c6 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x95c7 | P Kurzschluss ZK1 nach Masse |
| 0x95c8 | P Kurzschluss ZK1 nach Plus |
| 0x95c9 | P Widerstand Zuendpille ZK1 zu klein |
| 0x95ca | P Widerstand Zuendpille ZK1 zu gross |
| 0x95cb | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x95cc | P Unterbrechung ZK1 |
| 0x95cd | P Spannung ZK1 n.i.O. |
| 0x95ce | P Zuendkapazitaet ZK1 n.i.O. |
| 0x95cf | P Codierung/Konfiguration ZK1 unstimmig |
| 0x95d0 | P Unterbrechung Entladekreis ZK1 |
| 0x95d1 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x95d2 | P Kurzschluss ZK2 nach Masse |
| 0x95d3 | P Kurzschluss ZK2 nach Plus |
| 0x95d4 | P Widerstand Zuendpille ZK2 zu klein |
| 0x95d5 | P Widerstand Zuendpille ZK2 zu gross |
| 0x95d6 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x95d7 | P Unterbrechung ZK2 |
| 0x95d8 | P Spannung ZK2 n.i.O. |
| 0x95d9 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x95da | P Codierung/Konfiguration ZK2 unstimmig |
| 0x95db | P Unterbrechung Entladekreis ZK2 |
| 0x95dc | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 |
| 0x95dd | P Kurzschluss ZK3 nach Masse |
| 0x95de | P Kurzschluss ZK3 nach Plus |
| 0x95df | P Widerstand Zuendpille ZK3 zu klein |
| 0x95e0 | P Widerstand Zuendpille ZK3 zu gross |
| 0x95e1 | P Widerstand Zuendpille ZK3 nicht gemessen |
| 0x95e2 | P Unterbrechung ZK3 |
| 0x95e3 | P Spannung ZK3 n.i.O. |
| 0x95e4 | P Zuendkapazitaet ZK3 n.i.O. |
| 0x95e5 | P Codierung/Konfiguration ZK3 unstimmig |
| 0x95e6 | P Unterbrechung Entladekreis ZK3 |
| 0x95e7 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 |
| 0x95e8 | P Kurzschluss ZK4 nach Masse |
| 0x95e9 | P Kurzschluss ZK4 nach Plus |
| 0x95ea | P Widerstand Zuendpille ZK4 zu klein |
| 0x95eb | P Widerstand Zuendpille ZK4 zu gross |
| 0x95ec | P Widerstand Zuendpille ZK4 nicht gemessen |
| 0x95ed | P Unterbrechung ZK4 |
| 0x95ee | P Spannung ZK4 n.i.O. |
| 0x95ef | P Zuendkapazitaet ZK4 n.i.O. |
| 0x95f0 | P Codierung/Konfiguration ZK4 unstimmig |
| 0x95f1 | P Unterbrechung Entladekreis ZK4 |
| 0x95f2 | P Fehler im Alarmpfad |
| 0x95f3 | P Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x95f4 | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x95f5 | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x95f6 | P Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x95f7 | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung) |
| 0x95f8 | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung) |
| 0x95f9 | P Statusfehler Beschleunigungssensor (y-Richtung) |
| 0x95fa | P Algorithmus-Parameter inkonsistent |
| 0x95fb | P EAM-Parameter inkonsistent |
| 0x95fc | P Zuendversuch erfolgt |
| 0x95fd | P COP-Watchdog fehlerhaft |
| 0x9609 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x960a | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x960b | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x960c | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x960d | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK3 |
| 0x960e | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x960f | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK4 |
| 0x9610 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x9611 | P Kommunikation mit Zuend-IC gestoert |
| 0x9600 | S Power-On-Reset uP |
| 0x9601 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9602 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9603 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9604 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9605 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9606 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9607 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9608 | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_05

| ORT | ORTTEXT |
| --- | --- |
| 0x9628 | P Watchdog-Reset uP |
| 0x9629 | P Clock-Monitor-Reset uP |
| 0x962a | P Illegal Opcode uP |
| 0x962b | P Falsche Fahrgestellnummer |
| 0x962c | P Systemzeitfehler |
| 0x962d | P Timeout ID 01H (STVL) |
| 0x962e | P Timeout ID 02H |
| 0x962f | P Timeout ID 03H (STVR) |
| 0x9630 | P Timeout ID 04H |
| 0x9631 | P Timeout ID 05H (SBSL) |
| 0x9632 | P Timeout ID 06H (SASL) |
| 0x9633 | P Timeout ID 07H (SBSR) |
| 0x9634 | P Timeout ID 08H (SASR) |
| 0x9635 | P Timeout ID 09H (SFZ) |
| 0x9636 | P Timeout ID 0AH (SIM) |
| 0x9637 | P Timeout ID 0BH (SASL) |
| 0x9638 | P Timeout ID 0CH (SASR) |
| 0x9639 | P Timeout ID 0DH (SFZ) |
| 0x963a | P Timeout ID 0EH |
| 0x963b | P Timeout ID 0FH |
| 0x963c | P Timeout ID 20H (SSFA) |
| 0x963d | P Timeout ID 21H (SSBF) |
| 0x963e | P Timeout ID 22H (SSH) |
| 0x963f | P Timeout ID 71H (SIM) |
| 0x9640 | P Codierdaten Checksummenfehler |
| 0x9641 | P Stack Overflow |
| 0x9642 | P PDC_3 : zu wenig Telegramme |
| 0x9643 | P PDC_3 : Datenfehler in Telegramm |
| 0x9644 | P PDC_3 : Uebertragungsfehler |
| 0x9645 | P unplausible Crash-Schwere |
| 0x9646 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9647 | P Kurzschluss ZK1 nach Masse |
| 0x9648 | P Kurzschluss ZK1 nach Plus |
| 0x9649 | P Widerstand Zuendpille ZK1 zu klein |
| 0x964a | P Widerstand Zuendpille ZK1 zu gross |
| 0x964b | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x964c | P Unterbrechung ZK1 |
| 0x964d | P Spannung ZK1 n.i.O. |
| 0x964e | P Zuendkapazitaet ZK1 n.i.O. |
| 0x964f | P Codierung/Konfiguration ZK1 unstimmig |
| 0x9650 | P Unterbrechung Entladekreis ZK1 |
| 0x9651 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9652 | P Kurzschluss ZK2 nach Masse |
| 0x9653 | P Kurzschluss ZK2 nach Plus |
| 0x9654 | P Widerstand Zuendpille ZK2 zu klein |
| 0x9655 | P Widerstand Zuendpille ZK2 zu gross |
| 0x9656 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9657 | P Unterbrechung ZK2 |
| 0x9658 | P Spannung ZK2 n.i.O. |
| 0x9659 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x965a | P Codierung/Konfiguration ZK2 unstimmig |
| 0x965b | P Unterbrechung Entladekreis ZK2 |
| 0x965d | P Fehler im Alarmpfad |
| 0x965e | P Algorithmus-Parameter inkonsistent |
| 0x965f | P EAM-Parameter inkonsistent |
| 0x9660 | P Zuendversuch erfolgt |
| 0x9661 | P Drucksensor Parityfehler |
| 0x9662 | P Drucksensor SRDY-Taktfehler |
| 0x9663 | P Drucksensor Datenbereich Einschwingfehler |
| 0x9664 | P Drucksensor EEPROM inkonsistent |
| 0x9665 | P Drucksensor Selbsttest Timeout |
| 0x9666 | P Drucksensor Filterfehler |
| 0x9667 | P COP-Watchdog fehlerhaft |
| 0x9672 | P Drucksensor Datenbereich unplausiblel |
| 0x9673 | P Drucksensor Druckdelta unplausiblel |
| 0x9674 | P Drucksensor Fehler bei Test 1 |
| 0x9675 | P Drucksensor Fehler bei Array-Test |
| 0x9676 | P Drucksensor Fehler SIORX Overrun |
| 0x9677 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9678 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9679 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x967a | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x967b | P Kommunikation mit Zuend-IC gestoert |
| 0x9668 | S Power-On-Reset uP |
| 0x9669 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x966a | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x966b | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x966c | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x966d | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x966e | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x966f | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9670 | S DS-Test: Rauschband verlassen |
| 0x9671 | S EMV-Fehler im Zuend-Ic |
| 0x???? | unbekannter Fehlerort |

### ID_06

| ORT | ORTTEXT |
| --- | --- |
| 0x96a8 | P Watchdog-Reset uP |
| 0x96a9 | P Clock-Monitor-Reset uP |
| 0x96aa | P Illegal Opcode uP |
| 0x96ab | P Falsche Fahrgestellnummer |
| 0x96ac | P Systemzeitfehler |
| 0x96ad | P Timeout ID 01H (STVL) |
| 0x96ae | P Timeout ID 02H |
| 0x96af | P Timeout ID 03H (STVR) |
| 0x96b0 | P Timeout ID 04H |
| 0x96b1 | P Timeout ID 05H (SBSL) |
| 0x96b2 | P Timeout ID 06H (SASL) |
| 0x96b3 | P Timeout ID 07H (SBSR) |
| 0x96b4 | P Timeout ID 08H (SASR) |
| 0x96b5 | P Timeout ID 09H (SFZ) |
| 0x96b6 | P Timeout ID 0AH (SIM) |
| 0x96b7 | P Timeout ID 0BH (SASL) |
| 0x96b8 | P Timeout ID 0CH (SASR) |
| 0x96b9 | P Timeout ID 0DH (SFZ) |
| 0x96ba | P Timeout ID 0EH |
| 0x96bb | P Timeout ID 0FH |
| 0x96bc | P Timeout ID 20H (SSFA) |
| 0x96bd | P Timeout ID 21H (SSBF) |
| 0x96be | P Timeout ID 22H (SSH) |
| 0x96bf | P Timeout ID 71H (SIM) |
| 0x96c0 | P Codierdaten Checksummenfehler |
| 0x96c1 | P Stack Overflow |
| 0x96c2 | P PDC_3 : zu wenig Telegramme |
| 0x96c3 | P PDC_3 : Datenfehler in Telegramm |
| 0x96c4 | P PDC_3 : Uebertragungsfehler |
| 0x96c5 | P unplausible Crash-Schwere |
| 0x96c6 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x96c7 | P Kurzschluss ZK1 nach Masse |
| 0x96c8 | P Kurzschluss ZK1 nach Plus |
| 0x96c9 | P Widerstand Zuendpille ZK1 zu klein |
| 0x96ca | P Widerstand Zuendpille ZK1 zu gross |
| 0x96cb | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x96cc | P Unterbrechung ZK1 |
| 0x96cd | P Spannung ZK1 n.i.O. |
| 0x96ce | P Zuendkapazitaet ZK1 n.i.O. |
| 0x96cf | P Codierung/Konfiguration ZK1 unstimmig |
| 0x96d0 | P Unterbrechung Entladekreis ZK1 |
| 0x96d1 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x96d2 | P Kurzschluss ZK2 nach Masse |
| 0x96d3 | P Kurzschluss ZK2 nach Plus |
| 0x96d4 | P Widerstand Zuendpille ZK2 zu klein |
| 0x96d5 | P Widerstand Zuendpille ZK2 zu gross |
| 0x96d6 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x96d7 | P Unterbrechung ZK2 |
| 0x96d8 | P Spannung ZK2 n.i.O. |
| 0x96d9 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x96da | P Codierung/Konfiguration ZK2 unstimmig |
| 0x96db | P Unterbrechung Entladekreis ZK2 |
| 0x96dd | P Fehler im Alarmpfad |
| 0x96de | P Algorithmus-Parameter inkonsistent |
| 0x96df | P EAM-Parameter inkonsistent |
| 0x96e0 | P Zuendversuch erfolgt |
| 0x96e1 | P Drucksensor Parityfehler |
| 0x96e2 | P Drucksensor SRDY Taktfehler |
| 0x96e3 | P Drucksensor Datenbereich Einschwingfehler |
| 0x96e4 | P Drucksensor EEPROM inkonsistent |
| 0x96e5 | P Drucksensor Selbsttest Timeout |
| 0x96e6 | P Drucksensor Filterfehler |
| 0x96e7 | P COP-Watchdog fehlerhaft |
| 0x96f2 | P Drucksensor Datenbereich unplausibel |
| 0x96f3 | P Drucksensor Druckdelta unplausibel |
| 0x96f4 | P Drucksensor Fehler bei Test 1 |
| 0x96f5 | P Drucksensor Fehler bei Array-Test |
| 0x96f6 | P Drucksensor Fehler SIORX Overrun |
| 0x96f7 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x96f8 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x96f9 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x96fa | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x96fb | P Kommunikation mit Zuend-IC gestoert |
| 0x96e8 | S Power-On-Reset uP |
| 0x96e9 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x96ea | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x96eb | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x96ec | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x96ed | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x96ee | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x96ef | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x96f0 | S DS-Test: Rauschband verlassen |
| 0x96f1 | S EMV-Fehler im Zuend-Ic |
| 0x???? | unbekannter Fehlerort |

### ID_07

| ORT | ORTTEXT |
| --- | --- |
| 0x9728 | P Watchdog-Reset uP |
| 0x9729 | P Clock-Monitor-Reset uP |
| 0x972a | P Illegal Opcode uP |
| 0x972b | P Falsche Fahrgestellnummer |
| 0x972c | P Systemzeitfehler |
| 0x972d | P Timeout ID 01H (STVL) |
| 0x972e | P Timeout ID 02H |
| 0x972f | P Timeout ID 03H (STVR) |
| 0x9730 | P Timeout ID 04H |
| 0x9731 | P Timeout ID 05H (SBSL) |
| 0x9732 | P Timeout ID 06H (SASL) |
| 0x9733 | P Timeout ID 07H (SBSR) |
| 0x9734 | P Timeout ID 08H (SASR) |
| 0x9735 | P Timeout ID 09H (SFZ) |
| 0x9736 | P Timeout ID 0AH (SIM) |
| 0x9737 | P Timeout ID 0BH (SASL) |
| 0x9738 | P Timeout ID 0CH (SASR) |
| 0x9739 | P Timeout ID 0DH (SFZ) |
| 0x973a | P Timeout ID 0EH |
| 0x973b | P Timeout ID 0FH |
| 0x973c | P Timeout ID 20H (SSFA) |
| 0x973d | P Timeout ID 21H (SSBF) |
| 0x973e | P Timeout ID 22H (SSH) |
| 0x973f | P Timeout ID 71H (SIM) |
| 0x9740 | P Codierdaten Checksummenfehler |
| 0x9741 | P Stack Overflow |
| 0x9742 | P PDC_3 : zu wenig Telegramme |
| 0x9743 | P PDC_3 : Datenfehler in Telegramm |
| 0x9744 | P PDC_3 : Uebertragungsfehler |
| 0x9745 | P unplausible Crash-Schwere |
| 0x9746 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9747 | P Kurzschluss ZK1 nach Masse |
| 0x9748 | P Kurzschluss ZK1 nach Plus |
| 0x9749 | P Widerstand Zuendpille ZK1 zu klein |
| 0x974a | P Widerstand Zuendpille ZK1 zu gross |
| 0x974b | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x974c | P Unterbrechung ZK1 |
| 0x974d | P Spannung ZK1 n.i.O. |
| 0x974e | P Zuendkapazitaet ZK1 n.i.O. |
| 0x974f | P Codierung/Konfiguration ZK1 unstimmig |
| 0x9750 | P Unterbrechung Entladekreis ZK1 |
| 0x9751 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9752 | P Kurzschluss ZK2 nach Masse |
| 0x9753 | P Kurzschluss ZK2 nach Plus |
| 0x9754 | P Widerstand Zuendpille ZK2 zu klein |
| 0x9755 | P Widerstand Zuendpille ZK2 zu gross |
| 0x9756 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9757 | P Unterbrechung ZK2 |
| 0x9758 | P Spannung ZK2 n.i.O. |
| 0x9759 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x975a | P Codierung/Konfiguration ZK2 unstimmig |
| 0x975b | P Unterbrechung Entladekreis ZK2 |
| 0x975c | P Gurtschlossschalter 1 Kurzschluss |
| 0x975d | P Gurtschlossschalter 1 Unterbrechung |
| 0x975e | P Fehler im Alarmpfad |
| 0x9763 | P Unterbrechung SBE1 |
| 0x9764 | P Kurzschluss SBE1 |
| 0x9765 | P Kommunikationsstoerung SBE1 |
| 0x9766 | P Algorithmus-Parameter inkonsistent |
| 0x9767 | P EAM-Parameter inkonsistent |
| 0x9768 | P Zuendversuch erfolgt |
| 0x9769 | P COP-Watchdog fehlerhaft |
| 0x976a | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x976b | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x976c | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x976d | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x976e | P Kommunikation mit Zuend-IC gestoert |
| 0x9770 | S Power-On-Reset uP |
| 0x9771 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9772 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9773 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9774 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9775 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9776 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9777 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9778 | S Unterspannung OCE |
| 0x9779 | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_08

| ORT | ORTTEXT |
| --- | --- |
| 0x97a8 | P Watchdog-Reset uP |
| 0x97a9 | P Clock-Monitor-Reset uP |
| 0x97aa | P Illegal Opcode uP |
| 0x97ab | P Falsche Fahrgestellnummer |
| 0x97ac | P Systemzeitfehler |
| 0x97ad | P Timeout ID 01H (STVL) |
| 0x97ae | P Timeout ID 02H |
| 0x97af | P Timeout ID 03H (STVR) |
| 0x97b0 | P Timeout ID 04H |
| 0x97b1 | P Timeout ID 05H (SBSL) |
| 0x97b2 | P Timeout ID 06H (SASL) |
| 0x97b3 | P Timeout ID 07H (SBSR) |
| 0x97b4 | P Timeout ID 08H (SASR) |
| 0x97b5 | P Timeout ID 09H (SFZ) |
| 0x97b6 | P Timeout ID 0AH (SIM) |
| 0x97b7 | P Timeout ID 0BH (SASL) |
| 0x97b8 | P Timeout ID 0CH (SASR) |
| 0x97b9 | P Timeout ID 0DH (SFZ) |
| 0x97ba | P Timeout ID 0EH |
| 0x97bb | P Timeout ID 0FH |
| 0x97bc | P Timeout ID 20H (SSFA) |
| 0x97bd | P Timeout ID 21H (SSBF) |
| 0x97be | P Timeout ID 22H (SSH) |
| 0x97bf | P Timeout ID 71H (SIM) |
| 0x97c0 | P Codierdaten Checksummenfehler |
| 0x97c1 | P Stack Overflow |
| 0x97c2 | P PDC_3 : zu wenig Telegramme |
| 0x97c3 | P PDC_3 : Datenfehler in Telegramm |
| 0x97c4 | P PDC_3 : Uebertragungsfehler |
| 0x97c5 | P unplausible Crash-Schwere |
| 0x97c6 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x97c7 | P Kurzschluss ZK1 nach Masse |
| 0x97c8 | P Kurzschluss ZK1 nach Plus |
| 0x97c9 | P Widerstand Zuendpille ZK1 zu klein |
| 0x97ca | P Widerstand Zuendpille ZK1 zu gross |
| 0x97cb | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x97cc | P Unterbrechung ZK1 |
| 0x97cd | P Spannung ZK1 n.i.O. |
| 0x97ce | P Zuendkapazitaet ZK1 n.i.O. |
| 0x97cf | P Codierung/Konfiguration ZK1 unstimmig |
| 0x97d0 | P Unterbrechung Entladekreis ZK1 |
| 0x97d1 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x97d2 | P Kurzschluss ZK2 nach Masse |
| 0x97d3 | P Kurzschluss ZK2 nach Plus |
| 0x97d4 | P Widerstand Zuendpille ZK2 zu klein |
| 0x97d5 | P Widerstand Zuendpille ZK2 zu gross |
| 0x97d6 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x97d7 | P Unterbrechung ZK2 |
| 0x97d8 | P Spannung ZK2 n.i.O. |
| 0x97d9 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x97da | P Codierung/Konfiguration ZK2 unstimmig |
| 0x97db | P Unterbrechung Entladekreis ZK2 |
| 0x97dc | P Gurtschlossschalter 1 Kurzschluss |
| 0x97dd | P Gurtschlossschalter 1 Unterbrechung |
| 0x97de | P Fehler im Alarmpfad |
| 0x97fd | P Unterbrechung SBE1 |
| 0x97fe | P Kurzschluss SBE1 |
| 0x97ff | P Kommunikationsstoerung SBE1 |
| 0x9800 | P Algorithmus-Parameter inkonsistent |
| 0x9801 | P EAM-Parameter inkonsistent |
| 0x9802 | P Zuendversuch erfolgt |
| 0x9803 | P COP-Watchdog fehlerhaft |
| 0x9804 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9805 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9806 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9807 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x9812 | P Kommunikation mit Zuend-IC gestoert |
| 0x9808 | S Power-On-Reset uP |
| 0x9809 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x980a | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x980b | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x980c | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x980d | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x980e | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x980f | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9810 | S Unterspannung OCE |
| 0x9811 | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_09

| ORT | ORTTEXT |
| --- | --- |
| 0x9828 | P Watchdog-Reset uP |
| 0x9829 | P Clock-Monitor-Reset uP |
| 0x982a | P Illegal Opcode uP |
| 0x982b | P Falsche Fahrgestellnummer |
| 0x982c | P Systemzeitfehler |
| 0x982d | P Timeout ID 01H (STVL) |
| 0x982e | P Timeout ID 02H |
| 0x982f | P Timeout ID 03H (STVR) |
| 0x9830 | P Timeout ID 04H |
| 0x9831 | P Timeout ID 05H (SBSL) |
| 0x9832 | P Timeout ID 06H (SASL) |
| 0x9833 | P Timeout ID 07H (SBSR) |
| 0x9834 | P Timeout ID 08H (SASR) |
| 0x9835 | P Timeout ID 09H (SFZ) |
| 0x9836 | P Timeout ID 0AH (SIM) |
| 0x9837 | P Timeout ID 0BH (SASL) |
| 0x9838 | P Timeout ID 0CH (SASR) |
| 0x9839 | P Timeout ID 0DH (SFZ) |
| 0x983a | P Timeout ID 0EH |
| 0x983b | P Timeout ID 0FH |
| 0x983c | P Timeout ID 20H (SSFA) |
| 0x983d | P Timeout ID 21H (SSBF) |
| 0x983e | P Timeout ID 22H (SSH) |
| 0x983f | P Timeout ID 71H (SIM) |
| 0x9840 | P Codierdaten Checksummenfehler |
| 0x9841 | P Stack Overflow |
| 0x9842 | P PDC_3 : zu wenig Telegramme |
| 0x9843 | P PDC_3 : Datenfehler in Telegramm |
| 0x9844 | P PDC_3 : Uebertragungsfehler |
| 0x9845 | P unplausible Crash-Schwere |
| 0x9846 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9847 | P Kurzschluss ZK1 nach Masse |
| 0x9848 | P Kurzschluss ZK1 nach Plus |
| 0x9849 | P Widerstand Zuendpille ZK1 zu klein |
| 0x984a | P Widerstand Zuendpille ZK1 zu gross |
| 0x984b | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x984c | P Unterbrechung ZK1 |
| 0x984d | P Spannung ZK1 n.i.O. |
| 0x984e | P Zuendkapazitaet ZK1 n.i.O. |
| 0x984f | P Codierung/Konfiguration ZK1 unstimmig |
| 0x9850 | P Unterbrechung Entladekreis ZK1 |
| 0x9851 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9852 | P Kurzschluss ZK2 nach Masse |
| 0x9853 | P Kurzschluss ZK2 nach Plus |
| 0x9854 | P Widerstand Zuendpille ZK2 zu klein |
| 0x9855 | P Widerstand Zuendpille ZK2 zu gross |
| 0x9856 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9857 | P Unterbrechung ZK2 |
| 0x9858 | P Spannung ZK2 n.i.O. |
| 0x9859 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x985a | P Codierung/Konfiguration ZK2 unstimmig |
| 0x985b | P Unterbrechung Entladekreis ZK2 |
| 0x985c | P Fehler Beschleunigungssensor:Offset zu gross |
| 0x985d | P Fehler Beschleunigungssensor:Selbsttestwert zu gross |
| 0x985e | P Fehler Beschleunigungssensor:Selbsttestwert zu klein |
| 0x985f | P Statusfehler Beschleunigungssensor |
| 0x9860 | P Fehler im Alarmpfad |
| 0x9861 | P Algorithmus-Parameter inkonsistent |
| 0x9862 | P EAM-Parameter inkonsistent |
| 0x9863 | P Zuendversuch erfolgt |
| 0x9864 | P COP-Watchdog fehlerhaft |
| 0x9871 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9872 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9873 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9874 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x9875 | P Kommunikation mit Zuend-IC gestoert |
| 0x9868 | S Power-On-Reset uP |
| 0x9869 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x986a | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x986b | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x986c | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x986d | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x986e | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x986f | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9870 | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_0A

| ORT | ORTTEXT |
| --- | --- |
| 0x98a8 | P Watchdog-Reset uP |
| 0x98a9 | P Clock-Monitor-Reset uP |
| 0x98aa | P Illegal Opcode uP |
| 0x98ab | P Falsche Fahrgestellnummer |
| 0x98ac | P Systemzeitfehler |
| 0x98ad | P Timeout ID 01H (STVL) |
| 0x98ae | P Timeout ID 02H |
| 0x98af | P Timeout ID 03H (STVR) |
| 0x98b0 | P Timeout ID 04H |
| 0x98b1 | P Timeout ID 05H (SBSL) |
| 0x98b2 | P Timeout ID 06H (SASL) |
| 0x98b3 | P Timeout ID 07H (SBSR) |
| 0x98b4 | P Timeout ID 08H (SASR) |
| 0x98b5 | P Timeout ID 09H (SFZ) |
| 0x98b6 | P Timeout ID 0AH (SIM) |
| 0x98b7 | P Timeout ID 0BH (SASL) |
| 0x98b8 | P Timeout ID 0CH (SASR) |
| 0x98b9 | P Timeout ID 0DH (SFZ) |
| 0x98ba | P Timeout ID 0EH |
| 0x98bb | P Timeout ID 0FH |
| 0x98bc | P Timeout ID 20H (SSFA) |
| 0x98bd | P Timeout ID 21H (SSBF) |
| 0x98be | P Timeout ID 22H (SSH) |
| 0x98bf | P Timeout ID 71H (SIM) |
| 0x98c0 | P Codierdaten Checksummenfehler |
| 0x98c1 | P Stack Overflow |
| 0x98c2 | P PDC_3 : zu wenig Telegramme |
| 0x98c3 | P PDC_3 : Datenfehler in Telegramm |
| 0x98c4 | P PDC_3 : Uebertragungsfehler |
| 0x98c5 | P unplausible Crash-Schwere |
| 0x98c6 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x98c7 | P Kurzschluss ZK1 nach Masse |
| 0x98c8 | P Kurzschluss ZK1 nach Plus |
| 0x98c9 | P Widerstand Zuendpille ZK1 zu klein |
| 0x98ca | P Widerstand Zuendpille ZK1 zu gross |
| 0x98cb | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x98cc | P Unterbrechung ZK1 |
| 0x98cd | P Spannung ZK1 n.i.O. |
| 0x98ce | P Zuendkapazitaet ZK1 n.i.O. |
| 0x98cf | P Codierung/Konfiguration ZK1 unstimmig |
| 0x98d0 | P Unterbrechung Entladekreis ZK1 |
| 0x98d1 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x98d2 | P Kurzschluss ZK2 nach Masse |
| 0x98d3 | P Kurzschluss ZK2 nach Plus |
| 0x98d4 | P Widerstand Zuendpille ZK2 zu klein |
| 0x98d5 | P Widerstand Zuendpille ZK2 zu gross |
| 0x98d6 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x98d7 | P Unterbrechung ZK2 |
| 0x98d8 | P Spannung ZK2 n.i.O. |
| 0x98d9 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x98da | P Codierung/Konfiguration ZK2 unstimmig |
| 0x98db | P Unterbrechung Entladekreis ZK2 |
| 0x98dc | P Fehler Beschleunigungssensor:Offset zu gross |
| 0x98dd | P Fehler Beschleunigungssensor:Selbsttestwert zu gross |
| 0x98de | P Fehler Beschleunigungssensor:Selbsttestwert zu klein |
| 0x98df | P Statusfehler Beschleunigungssensor |
| 0x98e0 | P Klemme 30 fehlt |
| 0x98e1 | P Klemme 15 unplausibel |
| 0x98e2 | P Fehler im Alarmpfad |
| 0x98e3 | P Unterbrechung EKP |
| 0x98e4 | P EKP leichtgaengig |
| 0x98e5 | P EKP schwergaengig |
| 0x98e6 | P EKP abgeschaltet (Crash) |
| 0x98e7 | P Asic defekt |
| 0x98e8 | P Asic in einem ungueltigen Zustand |
| 0x98e9 | P EKP Notlaufbetrieb (keine Motordaten) |
| 0x98ea | P Asic Uebertemperaturabschaltung Low-Side-Transistor |
| 0x98eb | P Asic Uebertemperaturabschaltung High-Side-Transistor |
| 0x98ec | P Algorithmus-Parameter inkonsistent |
| 0x98ed | P EAM-Parameter inkonsistent |
| 0x98ee | P Zuendversuch erfolgt |
| 0x98ef | P COP-Watchdog fehlerhaft |
| 0x98f9 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x98fa | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x98fb | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x98fc | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x98fd | P Kommunikation mit Zuend-IC gestoert |
| 0x98f0 | S Power-On-Reset uP |
| 0x98f1 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x98f2 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x98f3 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x98f4 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x98f5 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x98f6 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x98f7 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x98f8 | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_0B

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_0C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_0D

| ORT | ORTTEXT |
| --- | --- |
| 0x9a28 | P Watchdog-Reset uP |
| 0x9a29 | P Clock-Monitor-Reset uP |
| 0x9a2a | P Illegal Opcode uP |
| 0x9a2b | P Falsche Fahrgestellnummer |
| 0x9a2c | P Systemzeitfehler |
| 0x9a2d | P Timeout ID 01H (STVL) |
| 0x9a2e | P Timeout ID 02H |
| 0x9a2f | P Timeout ID 03H (STVR) |
| 0x9a30 | P Timeout ID 04H |
| 0x9a31 | P Timeout ID 05H (SBSL) |
| 0x9a32 | P Timeout ID 06H (SASL) |
| 0x9a33 | P Timeout ID 07H (SBSR) |
| 0x9a34 | P Timeout ID 08H (SASR) |
| 0x9a35 | P Timeout ID 09H (SFZ) |
| 0x9a36 | P Timeout ID 0AH (SIM) |
| 0x9a37 | P Timeout ID 0BH (SASL) |
| 0x9a38 | P Timeout ID 0CH (SASR) |
| 0x9a39 | P Timeout ID 0DH (SFZ) |
| 0x9a3a | P Timeout ID 0EH |
| 0x9a3b | P Timeout ID 0FH |
| 0x9a3c | P Timeout ID 20H (SSFA) |
| 0x9a3d | P Timeout ID 21H (SSBF) |
| 0x9a3e | P Timeout ID 22H (SSH) |
| 0x9a3f | P Timeout ID 71H (SIM) |
| 0x9a40 | P Codierdaten Checksummenfehler |
| 0x9a41 | P Stack Overflow |
| 0x9a42 | P PDC_3 : zu wenig Telegramme |
| 0x9a43 | P PDC_3 : Datenfehler in Telegramm |
| 0x9a44 | P PDC_3 : Uebertragungsfehler |
| 0x9a45 | P unplausible Crash-Schwere |
| 0x9a46 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9a47 | P Kurzschluss ZK1 nach Masse |
| 0x9a48 | P Kurzschluss ZK1 nach Plus |
| 0x9a49 | P Widerstand Zuendpille ZK1 zu klein |
| 0x9a4a | P Widerstand Zuendpille ZK1 zu gross |
| 0x9a4b | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x9a4c | P Unterbrechung ZK1 |
| 0x9a4d | P Spannung ZK1 n.i.O. |
| 0x9a4e | P Zuendkapazitaet ZK1 n.i.O. |
| 0x9a4f | P Codierung/Konfiguration ZK1 unstimmig |
| 0x9a50 | P Unterbrechung Entladekreis ZK1 |
| 0x9a51 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9a52 | P Kurzschluss ZK2 nach Masse |
| 0x9a53 | P Kurzschluss ZK2 nach Plus |
| 0x9a54 | P Widerstand Zuendpille ZK2 zu klein |
| 0x9a55 | P Widerstand Zuendpille ZK2 zu gross |
| 0x9a56 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9a57 | P Unterbrechung ZK2 |
| 0x9a58 | P Spannung ZK2 n.i.O. |
| 0x9a59 | P Zuendkapazitaet ZK2 n.i.O. |
| 0x9a5a | P Codierung/Konfiguration ZK2 unstimmig |
| 0x9a5b | P Unterbrechung Entladekreis ZK2 |
| 0x9a5c | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 |
| 0x9a5d | P Kurzschluss ZK3 nach Masse |
| 0x9a5e | P Kurzschluss ZK3 nach Plus |
| 0x9a5f | P Widerstand Zuendpille ZK3 zu klein |
| 0x9a60 | P Widerstand Zuendpille ZK3 zu gross |
| 0x9a61 | P Widerstand Zuendpille ZK3 nicht gemessen |
| 0x9a62 | P Unterbrechung ZK3 |
| 0x9a63 | P Spannung ZK3 n.i.O. |
| 0x9a64 | P Zuendkapazitaet ZK3 n.i.O. |
| 0x9a65 | P Codierung/Konfiguration ZK3 unstimmig |
| 0x9a66 | P Unterbrechung Entladekreis ZK3 |
| 0x9a67 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 |
| 0x9a68 | P Kurzschluss ZK4 nach Masse |
| 0x9a69 | P Kurzschluss ZK4 nach Plus |
| 0x9a6a | P Widerstand Zuendpille ZK4 zu klein |
| 0x9a6b | P Widerstand Zuendpille ZK4 zu gross |
| 0x9a6c | P Widerstand Zuendpille ZK4 nicht gemessen |
| 0x9a6d | P Unterbrechung ZK4 |
| 0x9a6e | P Spannung ZK4 n.i.O. |
| 0x9a6f | P Zuendkapazitaet ZK4 n.i.O. |
| 0x9a70 | P Codierung/Konfiguration ZK4 unstimmig |
| 0x9a71 | P Unterbrechung Entladekreis ZK4 |
| 0x9a72 | P Fehler im Alarmpfad |
| 0x9a73 | P Ueberlast Kopfstuetzenverstellung links |
| 0x9a74 | P Ueberlast Kopfstuetzenverstellung rechts |
| 0x9a75 | P Unterbrechung Kopfstuetzenverstellung links |
| 0x9a76 | P Unterbrechung Kopfstuetzenverstellung rechts |
| 0x9a7f | P Unterbrechung SBE1 links |
| 0x9a80 | P Kurzschluss SBE1 links |
| 0x9a81 | P Kommunikationsstoerung SBE1 links |
| 0x9a82 | P Unterbrechung SBE1 rechts |
| 0x9a83 | P Kurzschluss SBE1 rechts |
| 0x9a84 | P Kommunikationsstoerung SBE1 rechts |
| 0x9a85 | P Algorithmus-Parameter inkonsistent |
| 0x9a86 | P EAM-Parameter inkonsistent |
| 0x9a87 | P Zuendversuch erfolgt |
| 0x9a88 | P COP-Watchdog fehlerhaft |
| 0x9a9b | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9a9c | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9a9d | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9a9e | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x9a9f | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK3 |
| 0x9aa0 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x9aa1 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK4 |
| 0x9aa2 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x9aa3 | P Kommunikation mit Zuend-IC gestoert |
| 0x9a90 | S Power-On-Reset uP |
| 0x9a91 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9a92 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9a93 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9a94 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9a95 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9a96 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9a97 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9a98 | S Unterspannung OCE links |
| 0x9a99 | S Unterspannung OCE rechts |
| 0x9a9a | S EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_0E

| ORT | ORTTEXT |
| --- | --- |
| 0x9aa8 | P Watchdog-Reset uP |
| 0x9aa9 | P Clock-Monitor-Reset uP |
| 0x9aaa | P Illegal Opcode uP |
| 0x9aab | P Falsche Fahrgestellnummer |
| 0x9aac | P Systemzeitfehler |
| 0x9aad | P Timeout ID 01H (STVL) |
| 0x9aae | P Timeout ID 02H |
| 0x9aaf | P Timeout ID 03H (STVR) |
| 0x9ab0 | P Timeout ID 04H |
| 0x9ab1 | P Timeout ID 05H (SBSL) |
| 0x9ab2 | P Timeout ID 06H (SASL) |
| 0x9ab3 | P Timeout ID 07H (SBSR) |
| 0x9ab4 | P Timeout ID 08H (SASR) |
| 0x9ab5 | P Timeout ID 09H (SFZ) |
| 0x9ab6 | P Timeout ID 0AH (SIM) |
| 0x9ab7 | P Timeout ID 0BH (SASL) |
| 0x9ab8 | P Timeout ID 0CH (SASR) |
| 0x9ab9 | P Timeout ID 0DH (SFZ) |
| 0x9aba | P Timeout ID 0EH |
| 0x9abb | P Timeout ID 0FH |
| 0x9abc | P Timeout ID 20H (SSFA) |
| 0x9abd | P Timeout ID 21H (SSBF) |
| 0x9abe | P Timeout ID 22H (SSH) |
| 0x9abf | P Timeout ID 71H (SIM) |
| 0x9ac0 | P Codierdaten Checksummenfehler |
| 0x9ac1 | P Stack Overflow |
| 0x9ac2 | P PDC_3 : zu wenig Telegramme |
| 0x9ac3 | P PDC_3 : Datenfehler in Telegramm |
| 0x9ac4 | P PDC_3 : Uebertragungsfehler |
| 0x9ac5 | P unplausible Crash-Schwere |
| 0x9ac6 | P Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9ac7 | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x9ac8 | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x9ac9 | P Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x9aca | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung) |
| 0x9acb | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung) |
| 0x9acc | P Algorithmus-Parameter inkonsistent |
| 0x9acd | P COP-Watchdog fehlerhaft |
| 0x9ae8 | S Power-On-Reset uP |
| 0x9ae9 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9aea | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9aeb | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9aec | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9aed | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9aee | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9aef | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0xFFFF | unbekannter Fehlerort |

### ID_0F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_10

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_11

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_12

| ORT | ORTTEXT |
| --- | --- |
| 0x2712 | P CDKDMMVE - Ansteuerung Magnetventil DM-TL |
| 0x2713 | P CDKLSVV - Vertauschte Lambdasonden oder Steckerzuordnung HDEV Steuergeraet vertauscht |
| 0x2716 | P CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x271A | P CDKLSV - Lambda-Sonde vor Kat |
| 0x271B | P CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x271C | P CDKLSH - Lambda-Sonde hinter Kat |
| 0x271D | P CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x271E | P CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x2721 | P CDKLASH - Lambda-Sondenalterung h. Kat |
| 0x2728 | P CDKFRAO - LR-Adaption multiplikativ Bereich2 |
| 0x272A | P CDKFRAU - LR-Adaption multiplikativ Bereich1 |
| 0x272C | P CDKRKAT - LR-Adaption additiv pro Zeit |
| 0x272E | P CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x2731 | P CDKENWS - Nockenwellensteuerung Einlass |
| 0x2737 | P CDKWFS - EWS3.3-Manipulationsschutz |
| 0x2738 | P CDKKAT - Katalysator-Konvertierung |
| 0x2742 | P CDKMD00 - Aussetzererkennung Zyl.1 |
| 0x2743 | P CDKMD01 - Aussetzererkennung Zyl.7 |
| 0x2744 | P CDKMD02 - Aussetzererkennung Zyl.5 |
| 0x2745 | P CDKMD03 - Aussetzererkennung Zyl.11 |
| 0x2746 | P CDKMD04 - Aussetzererkennung Zyl.3 |
| 0x2747 | P CDKMD05 - Aussetzererkennung Zyl.9 |
| 0x2748 | P CDKMD06 - Aussetzererkennung Zyl.6 |
| 0x2749 | P CDKMD07 - Aussetzererkennung Zyl.12 |
| 0x274A | P CDKMD08 - Aussetzererkennung Zyl.2 |
| 0x274B | P CDKMD09 - Aussetzererkennung Zyl.8 |
| 0x274C | P CDKMD10 - Aussetzererkennung Zyl.4 |
| 0x274D | P CDKMD11 - Aussetzererkennung Zyl.10 |
| 0x274E | P CDKMD - Aussetzererkennung Summenfehler |
| 0x2753 | P CDKDZKU0 - Ueberwachung Zuender 1  |
| 0x2754 | P CDKDZKU1 - Ueberwachung  Zuender  5 |
| 0x2755 | P CDKDZKU2 - Ueberwachung Zuender  3 |
| 0x2756 | P CDKDZKU3 - Ueberwachung Zuender  6 |
| 0x2757 | P CDKDZKU4 - Ueberwachung  Zuender  2 |
| 0x2758 | P CDKDZKU5 - Ueberwachung  Zuender  4 |
| 0x2759 | P CDKDZKU0 - Ueberwachung Zuender  7 |
| 0x275A | P CDKDZKU1 - Ueberwachung Zuender  11 |
| 0x275B | P CDKDZKU2 - Ueberwachung Zuender  9 |
| 0x275C | P CDKDZKU3 - Ueberwachung Zuender  12 |
| 0x275D | P CDKDZKU4 - Ueberwachung Zuender  8 |
| 0x275E | P CDKDZKU5 - Ueberwachung Zuender 10 |
| 0x2760 | P CDKSLS - Sekundaerluftsystem |
| 0x2762 | P CDKSLV - Sekudaerluftventil |
| 0x2764 | P CDKSLPE - Ansteuerung Relais Sekundaerluftpumpe |
| 0x2765 | P CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2769 | P CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276A | P CDKSGA - Steuergeraeteauswahl |
| 0x276D | P CDKTES - Tankentlueftung functional check |
| 0x2772 | P CDKTEVE - Ansteuerung Tankentlueftungsventil |
| 0x2774 | P CDKCUHR - Plausibilisierung Systemuhr Powermodul |
| 0x2775 | P CDKUFMV - Motormomentueberwachung Ebene 2 |
| 0x2776 | P CDKMFL - Schnittstelle MFL |
| 0x2778 | P CDKKUPPL - Schalter Kupplung |
| 0x2779 | P CDKURRAM - SG Selbsttest RAM |
| 0x277A | P CDKBREMS - Schalter Bremse |
| 0x277B | P CDKURROM - SG Selbsttest ROM |
| 0x277C | P CDKURRST - SG Selbsttest RESET |
| 0x277D | P CDKUB - Batteriespannung |
| 0x277E | P CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x277F | P CDKN - Kurbelwellengeber |
| 0x2780 | P CDKBM - Bezugsmarkengeber |
| 0x2781 | P CDKPH - Nockenwellengeber Einlass |
| 0x2782 | P CDKPH2 - Nockenwellengeber Auslass |
| 0x2783 | P CDKLM - Heissfilmluftmassenmesser |
| 0x2785 | P CDKDK - DK-Potentiometer |
| 0x2786 | P CDKDK1P - Drosselklappenpoti 1 |
| 0x2787 | P CDKDK2P - Drosselklappenpoti 2 |
| 0x2788 | P CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x2789 | P CDKSWE - Schlechtwegstreckenerkennung |
| 0x278A | P CDKTUM - Umgebungstemperatur |
| 0x278B | P CDKTM - Motortemperatur |
| 0x278C | P CDKTA - Ansauglufttemperatur |
| 0x278D | P CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | P CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x2791 | P CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | P CDKDVEL - DK-Positionsueberwachung |
| 0x2793 | P CDKDVER -  DK-Steller Regelbereich |
| 0x2794 | P CDKDVEE - DK-Steller Ansteuerung |
| 0x2795 | P CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | P CDKDVEU - Pruefung unterer Anschlag |
| 0x2797 | P CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | P CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | P CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | P CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | P CDKTHS - Thermostat klemmt |
| 0x279C | P CDKETS - Ansteuerung Thermostat Kennfeldkuehlung |
| 0x279D | P CDKMLE - Ansteuerung Motor-E-Luefter |
| 0x279E | P CDKAKRE - Ansteuerung Abgasklappe |
| 0x279F | P CDKLUEA - Endstufe LuefterA |
| 0x27A0 | P CDKELS - Ansteuerung E-Box Luefter |
| 0x27A2 | P CDKMLE - Motorluefter 2 Ansteuerung |
| 0x27A4 | P CDKDWA - EWS3.3 Schnittstelle EWS-DME |
| 0x27B3 | P CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | P CDKDSU - Drucksensor Umgebung |
| 0x27B5 | P CDKENWSE - Ansteuerung Einlass-VANOS |
| 0x27B7 | P CDKKPE - Ansteuerung Kraftstoffpumpen-Relais |
| 0x27B8 | P CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27BB | P CDKANWS - Nockenwellensteuerung Auslass-VANOS0 |
| 0x27BD | P CDKANWSE - Ansteuerung Auslass-VANOS |
| 0x27C1 | P CDKPHM - Master Nockenwellengeber |
| 0x27C2 | P CDKKOSE - Ansteuerung Klimakompressorsteuerung |
| 0x27C8 | P CDKTESG - DM-TL Grobleck |
| 0x27CA | P CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | P CDKDMTKNM - DM-TL Feinstleck (0,5 mm) MIL aus |
| 0x27CC | P CDKDMTK - DM-TL Feinleck |
| 0x27CD | P CDKDMTL - DM-TL Modul |
| 0x27CE | P CDKUFRLIP - Lastsensor-, Zuleitung- oder SG-Fehler |
| 0x27D5 | P CDKLLR - Leerlaufregelung fehlerhaft |
| 0x27D9 | P CDKDHDMTE - Ansteuerung DM-TL Heizung |
| 0x27DA | P CDKDGEN - Generatorfehler |
| 0x27DC | P CDKWCA - EWS3.3-Wechselcode-Abspeicherung |
| 0x27E1 | P CDKUFSPSC - Pedalwertgeberueberwachung |
| 0x27E2 | P CDKKS1 - Klopfsensor1 |
| 0x27E3 | P CDKKS2 - Klopfsensor2 |
| 0x27E4 | P CDKKS3 - Klopfsensor3 |
| 0x27E5 | P CDKKS3 - Klopfsensor3 |
| 0x27E6 | P CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | P CDKKROF - Klopfregelung Offset |
| 0x27E8 | P CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | P CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | P CDKCHDEV - CAN-Timeout HDEV |
| 0x27EC | P CDKCGE - CAN-EGS Signalfehler |
| 0x27ED | P CDKCAS - CAN-ASC/DSC Signalfehler |
| 0x27EE | P CDKCINS - CAN-Instrumentenkombination Signalfehler |
| 0x27EF | P CDKCACC - CAN-ACC Signalfehler |
| 0x27F2 | P CDKFST - Plausibilitaet Tankfuellstand |
| 0x27F3 | P CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F6 | P CDKFPP - Pedalwertgeber |
| 0x27F7 | P CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | P CDKFP2P - Pedalwertgeber Poti2 |
| 0x27FA | P CDKSTS - Startautomatik Eingang |
| 0x27FD | P CDKSTA - Startautomatik |
| 0x27FE | P CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | P CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x2813 | P CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | P CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | P CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | P CDKUFNC - Motordrehzahlueberwachung |
| 0x2818 | P CDKULSU - Spannungsueberwachung Sonde an Luft (Sonde nicht verbaut aber angesteckt) |
| 0x2819 | P CDKCDM - Time Out SG-Kopplung |
| 0x281E | P CDKSUE - Ansteuerung DISA |
| 0x2822 | P CDKMTOEL - Zwangsschaltung EGS |
| 0x2823 | P CDKHSVSA - Heizung Lambdasonde vor Kat (im Schub) |
| 0x2825 | P CDKLAVH - Lambda-Sondenalterung h. Kat |
| 0x2827 | P CDKHELSU - Heizereinkopplung auf Signalpfad |
| 0x2828 | P CDKCARS - CAN-ARS Signalfehler |
| 0x2829 | P CDKCCAS - CAN-CAS Signalfehler |
| 0x282A | P CDKCIHKA - ICAN-HKA Signalfehler |
| 0x282B | P CDKCPWML - CAN-PWML Signalfehler |
| 0x282C | P CDKCSZL - CAN-SZL Signalfehler |
| 0x282E | P CDKBWF - PWG-Bewegung |
| 0x283A | P CDKOEZS - Fehler Oelzustandssensor |
| 0x283D | P CDKCANA - PT CAN Bus Off |
| 0x283E | P CDKVVTE - VVT-Enable-Leitung Ansteuerung |
| 0x283F | P CDKPOELS - Plausibilitaet Oeldruckschalter |
| 0x2841 | P CDKLUVE - Luftumfasste Einspritzventile Ansteuerung |
| 0x2842 | P CDKGEN2 - 2.Generator Fehler |
| 0x2843 | P CDKPLLSU - Plausibilitaetsdiagnose LSU durch LSH Nachkat |
| 0x2844 | P CDKICLSU - Eigendiagnose CJ125 SPI Kommunikation |
| 0x2846 | P CDKANSKE - Ansteuerung Ansaugklappe |
| 0x2847 | P CDKDDSA - Druck-Schalter-Ansteuerung |
| 0x2848 | P CDKHDEVRE - Endstufe Relais HDEV SG |
| 0x2849 | P CDKLSUIP - Leitungsunterbrechung an Pumpstrom |
| 0x284A | P CDKLSUKS - Kurzschluss Sondenleitungen gegen Masse oder Ub |
| 0x284B | P CDKASVE -  Ansteuerung Ruecklauf Absperrventil  |
| 0x284C | P CDKDYLSU - LSU dynamisch zu langsam |
| 0x284F | P CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft  |
| 0x2850 | P CDKDVFFS - VVT-Fuehrungssensor |
| 0x2851 | P CDKDVFFS2 -  VVT-Fuehrungssensor (Bank2) |
| 0x2852 | P CDKDVFRS - VVT-Referenzsensor |
| 0x2853 | P CDKDVFRS2 - VVT-Referenzsensor (Bank2) |
| 0x2854 | P CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x2855 | P CDKDVPLA2 - VVT-Sensorplausibilisierung (Bank2) |
| 0x2856 | P CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x2857 | P CDKDVUSE2 - VVT-Versorgungsspannung Sensor (Bank2) |
| 0x2858 | P CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x2859 | P CDKDVLRN2 - VVT-Lernfunktion Anschlag (Bank2) |
| 0x285A | P CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x285B | P CDKDVSTE2 - VVT-Stellgliedueberwachung (Bank2) |
| 0x285C | P CDKDVCAN - VVT-CAN-Kommunikation |
| 0x285D | P CDKDVCAN2 - VVT-CAN-Kommunikation (Bank2) |
| 0x285E | P CDKDVFSG - VVT-Steuergeraet interner Fehler |
| 0x2860 | P CDKDVEST -  VVT-Endstufe |
| 0x2862 | P CDKDVULV -  VVT-Leistungsversorgung |
| 0x2864 | P CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler |
| 0x2865 | P CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | P CDKDVAN - VVT Anschlaege lernen notwendig |
| 0x2867 | P CDKDVOVL - VVT-Systemueberlast |
| 0x286D | P CDKEVLE3 - Endstufe HDEV9, Leitung 9 |
| 0x286E | P CDKEVLE4 - Endstufe HDEV12, Leitung 12 |
| 0x286F | P CDKEVLE5 - Endstufe HDEV8, Leitung 8 |
| 0x2870 | P CDKEVLE6 - Endstufe HDEV10, Leitung 10 |
| 0x2871 | P CDKHDEVH1 - Hochdruck-Einspritzventil Highside 7 |
| 0x2872 | P CDKHDEVH2 - Hochdruck-Einspritzventil Highside 11 |
| 0x2873 | P CDKHDEVH3 - Hochdruck-Einspritzventil Highside 9 |
| 0x2874 | P CDKHDEVH4 - Hochdruck-Einspritzventil Highside 12 |
| 0x2875 | P CDKHDEVH5 - Hochdruck-Einspritzventil Highside 8 |
| 0x2876 | P CDKHDEVH6 - Hochdruck-Einspritzventil Highside 10 |
| 0x2877 | P CDKHDEVL1 - Hochdruck-Einspritzventil Lowside 7 |
| 0x2878 | P CDKHDEVL2 - Hochdruck-Einspritzventil Lowside 11 |
| 0x287A | P CDKHDEVL3 - Hochdruck-Einspritzventil Lowside 9 |
| 0x287D | P CDKHDEVL4 - Hochdruck-Einspritzventil Lowside 12 |
| 0x287E | P CDKHDEVL5 - Hochdruck-Einspritzventil Lowside 8 |
| 0x287F | P CDKHDEVL6 - Hochdruck-Einspritzventil Lowside 10 |
| 0x2880 | P CDKRBVE - Ansteuerung Rücklaufbelüftungsventil |
| 0x2889 | P CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x28C8 | P CDKFRST - LR-Abweichung |
| 0x28D6 | P CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | P CDKDGENBS - Generator Kommunikation |
| 0x28D8 | P CDKNVRBUP - RAM Backup-Fehler |
| 0x28DB | P CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x28DC | P CDKDGENBS2 - 2.Generator Kommunikation |
| 0x28DE | P CDKHBOOST1 - Boostertimeout Hochdruckeinspritzventil Zyl  1 |
| 0x28DF | P CDKHBOOST2 - Boostertimeout Hochdruckeinspritzventil Zyl  5 |
| 0x28E0 | P CDKHBOOST3 - Boostertimeout Hochdruckeinspritzventil Zyl  3 |
| 0x28E1 | P CDKHBOOST4 - Boostertimeout Hochdruckeinspritzventil Zyl  6 |
| 0x28E2 | P CDKHBOOST5 - Boostertimeout Hochdruckeinspritzventil Zyl  2 |
| 0x28E3 | P CDKHBOOST6 - Boostertimeout Hochdruckeinspritzventil Zyl  4 |
| 0x28E4 | P CDKHBOOST1 - Boostertimeout Hochdruckeinspritzventil Zyl  7 |
| 0x28E5 | P CDKHBOOST2 - Boostertimeout Hochdruckeinspritzventil Zyl 11 |
| 0x2901 | P CDKHBOOST3 - Boostertimeout Hochdruckeinspritzventil Zyl  9 |
| 0x2902 | P CDKHBOOST4 - Boostertimeout Hochdruckeinspritzventil Zyl 12 |
| 0x2903 | P CDKHBOOST5 - Boostertimeout Hochdruckeinspritzventil Zyl  8 |
| 0x2904 | P CDKHBOOST6 - Boostertimeout Hochdruckeinspritzventil Zyl 10 |
| 0x290F | P CDKDSKV - Hochdrucksensortest (Signal Raildrucksensor) |
| 0x2913 | P CDKEVLE1 - Endstufe HDEV1, Leitung 1 |
| 0x2914 | P CDKEVLE2 - Endstufe HDEV5  Leitung 5 |
| 0x2915 | P CDKEVLE3 - Endstufe HDEV3, Leitung 3 |
| 0x2916 | P CDKEVLE4 - Endstufe HDEV6, Leitung 6 |
| 0x2917 | P CDKEVLE5 - Endstufe HDEV2, Leitung 2 |
| 0x2918 | P CDKEVLE6 - Endstufe HDEV4, Leitung 4 |
| 0x2919 | P CDKEVLE1 - Endstufe HDEV7, Leitung 7 |
| 0x291A | P CDKEVLE2 - Endstufe HDEV11 Leitung 11 |
| 0x291B | P CDKHDEVH1 - Hochdruck-Einspritzventil Highside 1 |
| 0x291C | P CDKHDEVH2 - Hochdruck-Einspritzventil Highside 5 |
| 0x291D | P CDKHDEVH3 - Hochdruck-Einspritzventil Highside 3 |
| 0x291E | P CDKHDEVH4 - Hochdruck-Einspritzventil Highside 6 |
| 0x291F | P CDKHDEVK - Hochdruck-Einspritzventil, Kommunikation |
| 0x2920 | P CDKHDEVL1 - Hochdruck-Einspritzventil Lowside 1 |
| 0x2921 | P CDKHDEVL2 - Hochdruck-Einspritzventil Lowside 5 |
| 0x2922 | P CDKHDEVL3 - Hochdruck-Einspritzventil Lowside 3 |
| 0x2923 | P CDKHDEVL4 - Hochdruck-Einspritzventil Lowside 6 |
| 0x2924 | P CDKHDR - Raildruckregelung |
| 0x292B | P CDKLSUIA - LSU Abgleichsleitung |
| 0x292D | P CDKLSUUN - LSU Nernst Zelle Unterbrechung |
| 0x2930 | P CDKLSUVM - LSU virtuelle Masse Unterbrechung |
| 0x2932 | P CDKMSVE - Endstufe Drucksteuerventil |
| 0x2937 | P CDKUFRKC - Funktionsueberwachung: Lambda-Plausibilisierung |
| 0x2940 | P CDKHDEVH5 - Hochdruck-Einspritzventil Highside 2 |
| 0x2941 | P CDKHDEVH6 - Hochdruck-Einspritzventil Highside 4 |
| 0x2942 | P CDKHDEVL5 - Hochdruck-Einspritzventil Lowside 2 |
| 0x2943 | P CDKHDEVL6 - Hochdruck-Einspritzventil Lowside 4 |
| 0x2944 | P CDKUF2SG - DME Kopplungsbotschaften |
| 0x296C | P CDKCTXU - CAN-Timeout TXU |
| 0x296D | P CDKMBV - Motormoment Bankvergleich |
| 0x2971 | P CDKSGAPL - Programm- und Datenstands-Plausibilisierung von Master und Slave |
| 0x297C | P CDKRLMAX - RL Begrenzung |
| 0x29AE | P CDKCFC - Tankdeckel offen |
| 0xCD87 | P CDKCANA - PT CAN Bus Off |
| 0xCD8B | P CDKCANB - Local CAN Bus Off |
| 0xCDC7 | P CDKCANA - PT CAN Bus Off |
| 0xCDCB | P CDKCANB - Local CAN Bus Off |
| 0x2712 | P 2712 DMTL Magnetventil: Ansteuerung |
| 0x2715 | P 2715 Lambdasondenheizung vor Katalysator Bank 2: Ansteuerung |
| 0x2716 | P 2716 Lambdasondenheizung nach Katalysator Bank 1: Ansteuerung |
| 0x2717 | P 2717 Lambdasondenheizung nach Katalysator Bank 2: Ansteuerung |
| 0x2718 | P 2718 Kurbelwellengeber: Bezugsmarke |
| 0x2719 | P 2719 Kurbelwellengeber: Periodendauer |
| 0x271A | P 271A Lambdasonde vor Katalysator Bank 1: Signal |
| 0x271C | P 271C Lambdasonde nach Katalysator Bank 1: Signal |
| 0x271D | P 271D Lambdasondenheizung vor Katalysator Bank 1: Ansteuerung |
| 0x271F | P 271F Lambdasondenalterung Bank 1: Periodendauer |
| 0x2720 | P 2720 Lambdasondenalterung Bank 1: Schaltzeit |
| 0x2721 | P 2721 Lambdasondenalterung nach Katalysator Bank 1 |
| 0x2722 | P 2722 Lambdasonde vor Katalysator Bank 2: Signal |
| 0x2724 | P 2724 Lambdasonde nach Katalysator Bank 2: Signal  |
| 0x2725 | P 2725 Lambdasondenalterung Bank 2: Periodendauer |
| 0x2726 | P 2726 Lambdasondenalterung Bank 2: Schaltzeit |
| 0x2727 | P 2727 Lambdasondenalterung nach Katalysator Bank 2 |
| 0x2734 | P 2734 Drosselklappen-Potentiometer 1: Signal unplausibel gegenüber Heißfilm-Luftmassenmesser |
| 0x2735 | P 2735 Drosselklappen-Potentiometer 2: Signal unplausibel gegenüber Heißfilm-Luftmassenmesser |
| 0x2737 | P 2737 EWS 3.3 Manipulationsschutz |
| 0x2738 | P 2738 Katalysator-Konvertierung Bank 1 |
| 0x273B | P 273B Katalysator-Konvertierung Bank 1 über Stickoxidsensor |
| 0x273C | P 273C Katalysator-Konvertierung Bank 2 über Stickoxidsensor |
| 0x273D | P 273D Katalysator-Konvertierung Bank 2 |
| 0x2740 | P 2740 Pedalwertgeber 1: Spannungsversorgung |
| 0x2741 | P 2741 Pedalwertgeber 2: Spannungsversorgung |
| 0x2742 | P 2742 Verbrennungsaussetzer Zylinder 1 |
| 0x2743 | P 2743 Verbrennungsaussetzer Zylinder 5 |
| 0x2744 | P 2744 Verbrennungsaussetzer Zylinder 3 |
| 0x2745 | P 2745 Verbrennungsaussetzer Zylinder 6 |
| 0x2746 | P 2746 Verbrennungsaussetzer Zylinder 2 |
| 0x2747 | P 2747 Verbrennungsaussetzer Zylinder 4 |
| 0x274E | P 274E Verbrennungsaussetzer an mehreren Zylindern |
| 0x2750 | P 2750 Drosselklappen-Lageregler: klemmt kurzzeitig |
| 0x2751 | P 2751 Drosselklappen-Lageregler: klemmt dauerhaft |
| 0x2752 | P 2752 Drosselklappen-Lageregler: schwergängig |
| 0x2753 | P 2753 Zündspule Zylinder 1 |
| 0x2754 | P 2754 Zündspule Zylinder 5 |
| 0x2755 | P 2755 Zündspule Zylinder 3 |
| 0x2756 | P 2756 Zündspule Zylinder 6 |
| 0x2757 | P 2757 Zündspule Zylinder 2 |
| 0x2758 | P 2758 Zündspule Zylinder 4 |
| 0x2760 | P 2760 Sekundärluftsystem |
| 0x2761 | P 2761 Sekundärluftsystem |
| 0x2762 | P 2762 Sekundärluftventil |
| 0x2764 | P 2764 Relais Sekundärluftpumpe: Ansteuerung |
| 0x2765 | P 2765 Magnetventil Sekundärluft: Ansteuerung |
| 0x2766 | P 2766 Nockenwellengeber Einlass: Signaldauer  |
| 0x2767 | P 2767 Nockenwellengeber Auslass: Signaldauer  |
| 0x2768 | P 2768 Nockenwellengeber Einlass: Phasenposition  |
| 0x276C | P 276C Nockenwellengeber Auslass: Phasenposition  |
| 0x276D | P 276D Funktionsprüfung Tankentlüftung |
| 0x2770 | P 2770 Sekundärluft-Heißfilm-Luftmassenmesser |
| 0x2772 | P 2772 Tankentlüftungsventil: Ansteuerung |
| 0x2774 | P 2774 Motorabstellzeit |
| 0x2777 | P 2777 DME-Selbsttest: AD-Wandler |
| 0x2778 | P 2778 Kupplungsschalter |
| 0x2779 | P 2779 DME-Selbsttest: RAM |
| 0x2783 | P 2783 Heißfilm-Luftmassenmesser |
| 0x2786 | P 2786 Drosselklappenpotentiometer 1 |
| 0x2787 | P 2787 Drosselklappenpotentiometer 2 |
| 0x2788 | P 2788 Fahrzeuggeschwindigkeit |
| 0x278B | P 278B Temperaturfühler Motorkühlmittel |
| 0x278C | P 278C Temperaturfühler Ansaugluft |
| 0x278D | P 278D Temperaturfühler Kühleraustritt |
| 0x278F | P 278F Generator: Untererregung |
| 0x2790 | P 2790 Kühlerauslasstemperatur: unplausibel |
| 0x2794 | P 2794 Drosselklappensteller |
| 0x2796 | P 2796 Drosselklappe: Adaptionswerte fehlerhaft |
| 0x279B | P 279B Thermostat Kennfeldkühlung: Mechanik |
| 0x279C | P 279C Thermostat Kennfeldkühlung: Ansteuerung |
| 0x279D | P 279D Motorlüfter: Ansteuerung |
| 0x279E | P 279E Abgasklappe: Ansteuerung |
| 0x27A0 | P 27A0 E-Box Lüfter: Ansteuerung |
| 0x27A1 | P 27A1 Drosselklappe: Startprüfung |
| 0x27A4 | P 27A4 Schnittstelle EWS 3.3 - DME |
| 0x27A5 | P 27A5 Drosselklappe: Neuadaption |
| 0x27A6 | P 27A6 Einspritzventil Zylinder 1 |
| 0x27A7 | P 27A7 Einspritzventil Zylinder 5 |
| 0x27A8 | P 27A8 Einspritzventil Zylinder 3 |
| 0x27A9 | P 27A9 Einspritzventil Zylinder 6 |
| 0x27AA | P 27AA Einspritzventil Zylinder 2 |
| 0x27AB | P 27AB Einspritzventil Zylinder 4 |
| 0x27B2 | P 27B2 Bremslichtschalter: Signal  |
| 0x27B4 | P 27B4 Umgebungsdrucksensor |
| 0x27B5 | P 27B5 Nockenwellensteuerung Einlass Bank 1: Ansteuerung |
| 0x27B7 | P 27B7 Kraftstoffpumpenrelais: Ansteuerung |
| 0x27B9 | P 27B9 Lambdasonde vor Katalysator Bank 1: Spannungshub |
| 0x27BA | P 27BA Lambdasonde vor Katalysator Bank 2: Spannungshub |
| 0x27BD | P 27BD Nockenwellensteuerung Auslass Bank 1: Ansteuerung |
| 0x27C2 | P 27C2 Klimakompressorsteuerung: Ansteuerung |
| 0x27C3 | P 27C3 Thermischer Ölniveausensor |
| 0x27C4 | P 27C4 Hauptrelais |
| 0x27C5 | P 27C5 Bremslichttestschalter: Signal |
| 0x27C7 | P 27C7 Hauptrelais: Schaltverzögerung |
| 0x27CA | P 27CA DMTL Pumpenmotor: Ansteuerung |
| 0x27CC | P 27CC DMTL: Leck |
| 0x27CD | P 27CD DMTL: Modulfehler |
| 0x27CF | P 27CF Zündung Zylinder 1 |
| 0x27D0 | P 27D0 Zündung Zylinder 5 |
| 0x27D1 | P 27D1 Zündung Zylinder 3 |
| 0x27D2 | P 27D2 Zündung Zylinder 6 |
| 0x27D3 | P 27D3 Zündung Zylinder 2 |
| 0x27D4 | P 27D4 Zündung Zylinder 4 |
| 0x27D6 | P 27D6 Leerlaufsteller: Ansteuerung - Position Zu |
| 0x27D7 | P 27D7 Leerlaufsteller: Ansteuerung - Position Auf |
| 0x27D9 | P 27D9 DMTL Heizung: Ansteuerung |
| 0x27DA | P 27DA BSD-Generator |
| 0x27DB | P 27DB Gas- und Bremspedal: Signal unplausibel |
| 0x27DC | P 27DC EWS 3.3 Wechselcode-Abspeicherung |
| 0x27DD | P 27DD Temperaturfühler Motorkühlmittel: Gradient |
| 0x27DE | P 27DE Temperaturfühler Motorkühlmittel: Signal |
| 0x27DF | P 27DF Temperaturfühler Motorkühlmittel: Signal konstant |
| 0x27E0 | P 27E0 Kurbelwellengeber: Segmentzeitmessung |
| 0x27E2 | P 27E2 Klopfsensor 1 |
| 0x27E3 | P 27E3 Klopfsensor 2 |
| 0x27EB | P 27EB Botschaft (EGS 2) vom EGS-Steuergerät fehlt |
| 0x27EC | P 27EC Botschaft (EGS 1) vom EGS-Steuergerät fehlt |
| 0x27F2 | P 27F2 Plausibilitaet Tankfuellstand |
| 0x27F7 | P 27F7 Pedalwertgeber Potentiometer 1 |
| 0x27F8 | P 27F8 Pedalwertgeber Potentiometer 2 |
| 0x27F9 | P 27F9 Startautomatik: Ansteuerung |
| 0x27FB | P 27FB Gesteuerte Luftführung: Ansteuerung |
| 0x2800 | P 2800 Botschaft (I-Kombi 2) von der Instrumentenkombination fehlt |
| 0x2801 | P 2801 Leerlaufdrehzahl unplausibel (Leckluft) |
| 0x2804 | P 2804 Fahrgeschwindigkeitsregelung: Anforderung |
| 0x2805 | P 2805 Schalter Fahrgeschwindigkeitsregelung: Signal  |
| 0x2806 | P 2806 Fahrgeschwindigkeitsregelung: Zeitlimit der Datenübertragung erreicht |
| 0x2807 | P 2807 Pedalwertgeber Potentiometer: Signal |
| 0x2808 | P 2808 Pedalwertgeber: Signal |
| 0x2809 | P 2809 Botschaft (I-Kombi 3) von der Instrumentenkombination fehlt |
| 0x280B | P 280B Botschaft (ASC 1) vom ASC-Steuergerät fehlt |
| 0x280C | P 280C Botschaft (ASC 3) vom ASC-Steuergerät fehlt |
| 0x280D | P 280D Botschaft (LWS) vom LWS-Steuergerät fehlt |
| 0x280E | P 280E Botschaft (SMG 1) vom SMG-Steuergerät fehlt |
| 0x280F | P 280F Botschaft (ASC 4) vom ASC-Steuergerät fehlt |
| 0x2811 | P 2811 Local-CAN Kommunikationsfehler |
| 0x2812 | P 2812 Öltemperatur |
| 0x281A | P 281A Botschaft (TxU) fehlt |
| 0x281B | P 281B Botschaft (EKP) von der elektronischen Kraftstoffpumpe fehlt |
| 0x281C | P 281C Bitserielle Datenschnittstelle (BSD): Signal |
| 0x281D | P 281D BSD-Generator: Signal |
| 0x281E | P 281E Variable Sauganlage: Ansteuerung |
| 0x282F | P 282F PT-CAN Kommunikationsfehler |
| 0x2830 | P 2830 DME-Selbsttest: Checksumme |
| 0x2831 | P 2831 DME-Selbsttest: Prozessorüberwachung |
| 0x283A | P 283A Ölzustandssensor |
| 0x283F | P 283F Öldruckschalter: Signal unplausibel |
| 0x2869 | P 2869 DME-Selbsttest: RAM-Check Fehlerhaft |
| 0x286A | P 286A DME-Selbsttest: Klopfsensorbaustein |
| 0x286B | P 286B DME-Selbsttest: Mehfachendstufenbaustein |
| 0x2882 | P 2882 Gemischaufbereitung Bank 1 |
| 0x2883 | P 2883 Gemischaufbereitung Bank 2 |
| 0x2892 | P 2892 Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x2893 | P 2893 Steuergeräte-Innentemperatur |
| 0x2894 | P 2894 Irreversibler Steuergerätefehler |
| 0x2895 | P 2895 Kurbelwellengeber: Signal |
| 0x2896 | P 2896 Nockenwellengeber: Einlass-Signal |
| 0x2897 | P 2897 Nockenwellengeber: Auslass-Signal |
| 0x2898 | P 2898 Lambdasonde nach Katalysator Bank 1: Signal  |
| 0x2899 | P 2899 Lambdasonde nach Katalysator Bank 2: Signal |
| 0x289A | P 289A Lambdasondenheizung vor Katalysator Bank 1: Funktion |
| 0x289B | P 289B Lambdasondenheizung vor Katalysator Bank 2: Funktion |
| 0x289C | P 289C Lambdasondenheizung nach Katalysator Bank 1: Funktion |
| 0x289D | P 289D Lambdasondenheizung nach Katalysator Bank 2: Funktion |
| 0x289E | P 289E Lambdasonde vor Katalysator Bank 1   |
| 0x289F | P 289F Lambdasonde vor Katalysator Bank 2  |
| 0x28A1 | P 28A1 Fahrgeschwindigkeitsregelung |
| 0x28A2 | P 28A2 Luftpfad |
| 0x28A4 | P 28A4 Drehzahl |
| 0x28A5 | P 28A5 Pedalwertgeber |
| 0x28A7 | P 28A7 Botschaftsüberwachung: Stickoxidsensor 1 |
| 0x28A8 | P 28A8 Botschaftsüberwachung: Stickoxidsensor 2 |
| 0x28AA | P 28AA Leerlaufregler |
| 0x28AB | P 28AB Externe Momentenanforderung: Überwachung |
| 0x28AC | P 28AC Soll-Moment |
| 0x28AD | P 28AD Ist-Moment |
| 0x28AE | P 28AE Momentenbegrenzung |
| 0x28B1 | P 28B1 Drehzahlbegrenzung |
| 0x28B2 | P 28B2 Drehzahlbegrenzung: Reset |
| 0x28B3 | P 28B3 Drosselklappe: kontinuierliche Adaption |
| 0x28B4 | P 28B4 Taster Fahrdynamikkontrolle |
| 0x28B5 | P 28B5 Soundklappe: Signal  |
| 0x28B6 | P 28B6 Einlass-Nockenwelle Bank 1: mechanisch |
| 0x28B8 | P 28B8 Auslass-Nockenwelle Bank1: mechanisch |
| 0x28BA | P 28BA Einlass-Nockenwelle Bank 1: schwergängig |
| 0x28BC | P 28BC Auslass-Nockenwelle Bank 1: schwergängig |
| 0x28BD | P 28BD Einlass-Nockenwellengeber: Arretierung |
| 0x28BE | P 28BE Auslass-Nockenwellengeber: Arretierung |
| 0x28BF | P 28BF Stickoxydsensor 1 |
| 0x28C0 | P 28C0 Stickoxydsensor 2 |
| 0x28C1 | P 28C1 Lambdasonde vor Katalysator Bank 1 |
| 0x28C2 | P 28C2 Lambdasonde vor Katalysator Bank 2 |
| 0x28C3 | P 28C3 Lambdasondenheizung vor Katalysator Bank 1: Funktion |
| 0x28C4 | P 28C4 Lambdasondenheizung vor Katalysator Bank 2: Funktion |
| 0x28C5 | P 28C5 Lambdasonde nach Katalysator Bank 1: Systemcheck |
| 0x28C6 | P 28C6 Lambdasonde nach Katalysator Bank 2: Systemcheck |
| 0x28CA | P 28CA Ozonumwandlung: zu gering |
| 0x28CB | P 28CB Ozonsensor 2 |
| 0x28CC | P 28CC Ozonsensor 1 |
| 0x28CF | P 28CF Kraftstoffpumpe: Notabschaltung |
| 0x28D0 | P 28D0 Kraftstoffpumpe |
| 0x28DD | P 28DD Luftmassensystem |
| 0x28E6 | P 28E6 Auswertebaustein Lambdasonde Bank 1:  Eigendiagnose |
| 0x28E7 | P 28E7 Auswertebaustein Lambdasonde Bank 2:  Eigendiagnose |
| 0x28E8 | P 28E8 Lambdasonden Bank 1: Trimmregelung |
| 0x28E9 | P 28E9 Lambdasonden Bank 2: Trimmregelung |
| 0x28EA | P 28EA Lambdasonde nach Katalysator Bank 1: Signal |
| 0x28EB | P 28EB Lambdasonde nach Katalysator Bank 2: Signal |
| 0x28EC | P 28EC Lambdasonde nach Katalysator Bank 1: Signal bei Volllast  |
| 0x28ED | P 28ED Lambdasonde nach Katalysator Bank 2: Signal bei Volllast  |
| 0x28F0 | P 28F0 Lambdasonde nach Katalysator Bank 1: Systemcheck |
| 0x28F1 | P 28F1 Lambdasonde nach Katalysator Bank 2: Systemcheck |
| 0x28F2 | P 28F2 Lambdasonden Bank 1: Trimmregelung |
| 0x28F3 | P 28F3 Lambdasonden Bank 2: Trimmregelung |
| 0x28F4 | P 28F4 Lambdasonde vor Katalysator Bank 1: Kalttest |
| 0x28F5 | P 28F5 Lambdasonde vor Katalysator Bank 2: Kalttest |
| 0x28F6 | P 28F6 Lambdasonde nach Katalysator Bank 1: Kalttest |
| 0x28F7 | P 28F7 Lambdasonde nach Katalysator Bank 2: Kalttest |
| 0x28F9 | P 28F9 Laufunruhe: Segmentzeitmessung |
| 0x28FA | P 28FA Drehmoment bei Schaltphase  |
| 0x28FB | P 28FB Active Cruise Control (ACC) |
| 0x28FF | P 28FF DME-Selbsttest |
| 0x2900 | P 2900 DME-Selbsttest |
| 0x293C | P 293C Botschaftsüberwachung: Drehmomentanforderung AFS |
| 0x293D | P 293D Botschaftsüberwachung: EKP |
| 0x2947 | P 2947 Botschaftsüberwachung: Drehmomentanforderung ACC |
| 0x2948 | P 2948 Botschaftsüberwachung: ARS |
| 0x2949 | P 2949 Botschaftsüberwachung: CAS |
| 0x294A | P 294A Botschaftsüberwachung Drehmomentanforderung SMG |
| 0x294B | P 294B Botschaftsüberwachung: Geschwindigkeit DSC |
| 0x294C | P 294C Botschaftsüberwachung: Status DSC |
| 0x294D | P 294D Botschaftsüberwachung: Drehmomentanforderung EGS |
| 0x294E | P 294E Botschaftsüberwachung: Getriebedaten EGS/SMG |
| 0x294F | P 294F Botschaftsüberwachung Drehmomentanforderung SMG |
| 0x2950 | P 2950 Botschaftsüberwachung: Klima |
| 0x2951 | P 2951 Botschaftsüberwachung: Temperatur Instrumentenkombination |
| 0x2952 | P 2952 Botschaftsüberwachung: Kilometerstand Instrumentenkombination |
| 0x2953 | P 2953 Botschaftsüberwachung: Status Instrumentenkombination |
| 0x2954 | P 2954 Botschaftsüberwachung: Batteriespannung Powermodul |
| 0x2955 | P 2955 Botschaftsüberwachung: Ladespannung Powermodul |
| 0x2956 | P 2956 Botschaftsüberwachung: Bedienung Fahrgeschwindigkeitsregler Schaltzentrum Lenksäule |
| 0x2957 | P 2957 Botschaftsüberwachung: Lenkradwinkel Schaltzentrum Lenksäule |
| 0x2958 | P 2958 Botschaftsüberwachung: Sporttaster |
| 0x2960 | P 2960 Lambdasonde vor Katalysator Bank 1  |
| 0x2961 | P 2961 Lambdasonde vor Katalysator Bank 2 |
| 0x2962 | P 2962 Lambdasonde vor Katalysator Bank 1: Dynamik |
| 0x2963 | P 2963 Lambdasonde vor Katalysator Bank 2: Dynamik |
| 0x2964 | P 2964 Lambdasonde vor Katalysator Bank 1: Keramiktemperatur |
| 0x2965 | P 2965 Lambdasonde vor Katalysator Bank 2: Keramiktemperatur |
| 0x2966 | P 2966 Lambdasonde vor Katalysator Bank 1: Signal |
| 0x2967 | P 2967 Lambdasonde vor Katalysator Bank 2: Signal |
| 0x296A | P 296A Lambdasonden vor Katalysator: vertauscht |
| 0x296B | P 296B Lambdasonden nach Katalysator: vertauscht |
| 0x2973 | P 2973 Lambdasonde vor Katalysator Bank 1: Leitungen |
| 0x2974 | P 2974 Lambdasonde vor Katalysator Bank 2: Leitungen |
| 0x2986 | P 2986 Lambdasonde vor Katalysator Bank 1: Systemcheck |
| 0x2987 | P 2987 Lambdasonde vor Katalysator Bank 2: Systemcheck |
| 0x2988 | P 2988 Lambdasonde vor Katalysator Bank 1: Systemcheck |
| 0x2989 | P 2989 Lambdasonde vor Katalysator Bank 2: Systemcheck |
| 0x2990 | P 2990 Stickoxydsensor 1: Systemtest |
| 0x2991 | P 2991 Stickoxydsensor 2: Systemtest |
| 0x2992 | P 2992 Stickoxydsensor 1: Systemtest Dynamik |
| 0x2993 | P 2993 Stickoxydsensor 2: Systemtest Dynamik |
| 0x2994 | P 2994 Stickoxydsensor 1: Heizerleistung |
| 0x2995 | P 2995 Stickoxydsensor 2: Heizerleistung |
| 0x2996 | P 2996 Stickoxydsensor 1: Systemtest Plausibilität |
| 0x2997 | P 2997 Stickoxydsensor 2: OBDII-Diagnose  Plausibilität |
| 0x2998 | P 2998 Stickoxydsensor 1: Systemtest |
| 0x2999 | P 2999 Stickoxydsensor 2: Systemtest |
| 0x299A | P 299A Fehlerverwaltung EGS |
| 0x299B | P 299B Batteriesensor: Signal |
| 0x299C | P 299C Batteriesensor: Funktion |
| 0x299D | P 299D Batteriesensor: Signalübertragung |
| 0x299E | P 299E Lambdasonde nach Katalysator Bank 1: Signal |
| 0x299F | P 299F Lambdasonde nach Katalysator Bank 1: Signal |
| 0x29A0 | P 29A0 Lambdasonde nach Katalysator Bank 2: Signal  |
| 0x29A1 | P 29A1 Lambdasonde nach Katalysator Bank 2: Signal  |
| 0x29A2 | P 29A2 Lambdasonde vor Katalysator Bank 2: Signal |
| 0x29A3 | P 29A3 Lambdasonde vor Katalysator Bank 2: Signal |
| 0x29A4 | P 29A4 Lambdasondenheizung vor Katalysator Bank 1: Ansteuerung |
| 0x29A5 | P 29A5 Lambdasondenheizung vor Katalysator Bank 2: Ansteuerung |
| 0x29A6 | P 29A6 Lambdasonde vor Katalysator Bank 1: Signal |
| 0x29A7 | P 29A7 Lambdasonde vor Katalysator Bank 1: Signal |
| 0x29A8 | P 29A8 Botschaftsüberwachung: Netzwerkfehler Powermanagement |
| 0x29A9 | P 29A9 Botschaftsüberwachung: Batterie Powermanagement |
| 0x29AB | P 29AB Mommentenanforderung über CAN |
| 0x29AE | P 29AE Tankdeckel |
| 0x29AF | P 29AF Botschafts- und Signalüberwachung KL.15 |
| 0x29B5 | P 29B5 Sekundärluftsystem |
| 0x29B6 | P 29B6 Zylinderabschaltung |
| 0x3C1D | P 3C1D Kurbelwellengeber: Signal |
| 0x3C1E | P 3C1E Nockenwellengeber: Einlass-Signal |
| 0x3C1F | P 3C1F Nockenwellengeber: Auslass-Signal |
| 0x3D33 | P 3D33 Mommentenanforderung über CAN |
| 0xCD87 | P CD87 PT-CAN Kommunikationsfehler |
| 0xCD8B | P CD8B Local-CAN Kommunikationsfehler |
| 0xCD94 | P CD94 Botschaft (Außentemperatur, 310) |
| 0xCD95 | P CD95 Botschaft (Bedienung FGR/ACC, 194) |
| 0xCD96 | P CD96 Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD97 | P CD97 Botschaft (Drehmomentanforderung AFS, B9) |
| 0xCD98 | P CD98 Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | P CD99 Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | P CD9A Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9B | P CD9B Botschaft (Fahrzeugmodus, 315) |
| 0xCD9C | P CD9C Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | P CD9D Botschaft (Getriebedaten, BA) |
| 0xCD9F | P CD9F Botschaft (Kilometerstand, 330) |
| 0xCDA0 | P CDA0 Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | P CDA1 Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | P CDA2 Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | P CDA3 Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA4 | P CDA4 Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | P CDA5 Botschaft (Status DSC, 19E) |
| 0xCDA6 | P CDA6 Botschaft (Status EKP, 335) |
| 0xCDA7 | P CDA7 Botschaft (Rückwärtsgang, 3B0) |
| 0xCDA8 | P CDA8 Botschaft (Status Instrumentenkombination, 1B4) |
| 0xCDA9 | P CDA9 Botschaft (Status Klima, 1B5) |
| 0x0000 | P 0000 Fehlerort nicht bedatet |
| 0x3E90 | P 3E90  Kurbelwellengeber |
| 0x3E91 | P 3E91  Kurbelwellengeber |
| 0x3E95 | P 3E95  Ansauglufttemperatursensor 2 |
| 0x3E96 | P 3E96  Ansauglufttemperatursensor 2 |
| 0x3EA5 | P 3EA5  Ansauglufttemperatursensor 2 |
| 0x3EA6 | P 3EA6  Ansauglufttemperatursensor 2 |
| 0x3EB0 | P 3EB0  Drehzahlberechnung |
| 0x3EB5 | P 3EB5  Luftmassenmesser 2 |
| 0x3EB6 | P 3EB6  Luftmassenmesser 2 |
| 0x3EC0 | P 3EC0  Nockenwellengeber |
| 0x3EC1 | P 3EC1  Nockenwellengeber |
| 0x3EC7 | P 3EC7  Ueberwachung Master/Slave |
| 0x3ED5 | P 3ED5  Luftmassenmesser 2 |
| 0x3ED6 | P 3ED6  Luftmassenmesser 2 |
| 0x3EE0 | P 3EE0  Kuehlmitteltemperatursensor |
| 0x3EE1 | P 3EE1  Kuehlmitteltemperatursensor |
| 0x3EE2 | P 3EE2  Kuehlmitteltemperatursensor |
| 0x3EE3 | P 3EE3  Kuehlmitteltemperatursensor |
| 0x3EE5 | P 3EE5  Luftmassenmesser 2 |
| 0x3EE6 | P 3EE6  Luftmassenmesser 2 |
| 0x3EE7 | P 3EE7  Luftmassenmesser 2 |
| 0x3EF3 | P 3EF3  Kuehlmitteltemperatursensor Plausibilitaet |
| 0x3EF5 | P 3EF5  Ansauglufttemperatursensor 2 (Referenzsignal fuer Luftmassenmesser) |
| 0x3EF6 | P 3EF6  Ansauglufttemperatursensor 2 (Referenzsignal fuer Luftmassenmesser) |
| 0x3EF7 | P 3EF7  Ansauglufttemperatursensor 2 (Referenzsignal fuer Luftmassenmesser) |
| 0x3F00 | P 3F00  Ladedruckfuehler |
| 0x3F01 | P 3F01  Ladedruckfuehler |
| 0x3F02 | P 3F02  Ladedruckfuehler |
| 0x3F03 | P 3F03  Ladedruckfuehler |
| 0x3F05 | P 3F05  MIL OFF |
| 0x3F10 | P 3F10  Fahrpedalmodul Potentiometer 1 |
| 0x3F11 | P 3F11  Fahrpedalmodul Potentiometer 1 |
| 0x3F13 | P 3F13  Fahrpedalmodul Potentiometer 1 |
| 0x3F15 | P 3F15  MIL On |
| 0x3F20 | P 3F20  Fahrpedalmodul Potentiometer 2 |
| 0x3F21 | P 3F21  Fahrpedalmodul Potentiometer 2 |
| 0x3F23 | P 3F23  Fahrpedalmodul Potentiometer 2 |
| 0x3F25 | P 3F25  Ladeluftschlauch-Ueberwachung |
| 0x3F30 | P 3F30  Raildrucksensor |
| 0x3F31 | P 3F31  Raildrucksensor |
| 0x3F35 | P 3F35  Ladeluftschlauch-Ueberwachung im Leerlauf |
| 0x3F40 | P 3F40  Raildrucksensor Offset-Test |
| 0x3F41 | P 3F41  Raildrucksensor Offset-Test |
| 0x3F47 | P 3F47  Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F48 | P 3F48  Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F50 | P 3F50  Fahrgeschwindigkeitssignal |
| 0x3F52 | P 3F52  Fahrgeschwindigkeitssignal |
| 0x3F53 | P 3F53  Fahrgeschwindigkeitssignal |
| 0x3F57 | P 3F57  Ladedrucksteller |
| 0x3F62 | P 3F62  Fahrgeschwindigkeitssignal ueber CAN |
| 0x3F67 | P 3F67  Ladedrucksteller 2 |
| 0x3F70 | P 3F70  Ansauglufttemperatursensor |
| 0x3F71 | P 3F71  Ansauglufttemperatursensor |
| 0x3F72 | P 3F72  Ansauglufttemperatursensor |
| 0x3F77 | P 3F77  Ladedrucksteller |
| 0x3F80 | P 3F80  Umgebungstemperaturfuehler (nv) |
| 0x3F81 | P 3F81  Umgebungstemperaturfuehler (nv) |
| 0x3F82 | P 3F82  Umgebungstemperaturfuehler (nv) |
| 0x3F87 | P 3F87  Ladedrucksteller 2 |
| 0x3F90 | P 3F90  Oeldrucksensor (nv) |
| 0x3F91 | P 3F91  Oeldrucksensor (nv) |
| 0x3F97 | P 3F97  Ladedrucksteller |
| 0x3FA0 | P 3FA0  Oeltemperatursensor |
| 0x3FA1 | P 3FA1  Oeltemperatursensor |
| 0x3FA2 | P 3FA2  Oeltemperatursensor |
| 0x3FA7 | P 3FA7  Ladedrucksteller 2 |
| 0x3FB5 | P 3FB5  Ueberwachung Master/Slave |
| 0x3FB6 | P 3FB6  Ueberwachung Master/Slave |
| 0x3FB7 | P 3FB7  Ueberwachung Master/Slave |
| 0x3FC0 | P 3FC0  Luftmassenmesser |
| 0x3FC5 | P 3FC5  Ueberwachung Master/Slave faultpath for irreversible faults (BIT2 is set in statu |
| 0x3FD0 | P 3FD0  Luftmassenmesser |
| 0x3FE0 | P 3FE0  Luftmassenmesser |
| 0x3FE1 | P 3FE1  Luftmassenmesser |
| 0x3FE5 | P 3FE5  Ueberwachung Master/Slave faultpath for irreversible faults (BIT3 is set in statu |
| 0x3FF0 | P 3FF0  Luftmassenmesser |
| 0x3FF1 | P 3FF1  Luftmassenmesser |
| 0x3FF5 | P 3FF5  Ueberwachung Master/Slave faultpath for irreversible faults (BIT0 is set in statu |
| 0x4000 | P 4000  Kraftstofftemperaturfuehler |
| 0x4001 | P 4001  Kraftstofftemperaturfuehler |
| 0x4005 | P 4005  Ueberwachung Master/Slave faultpath for shut off Vehicle (BIT4 is set in status b |
| 0x4010 | P 4010  Abgasgegendruckfuehler vor Partikelfilter |
| 0x4011 | P 4011  Abgasgegendruckfuehler vor Partikelfilter |
| 0x4015 | P 4015  Ueberwachung Master/Slave faultpath for reversible faults (BIT5 is set in status  |
| 0x4020 | P 4020  Abgastemperaturfuehler vor Partikelfilter |
| 0x4021 | P 4021  Abgastemperaturfuehler vor Partikelfilter |
| 0x4025 | P 4025  Ueberwachung Master/Slave faultpath for reversible faults (BIT6 is set in status  |
| 0x4030 | P 4030  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4031 | P 4031  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4032 | P 4032  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4035 | P 4035  Ueberwachung Master/Slave faultpath for reversible faults (BIT1 is set in status  |
| 0x4040 | P 4040  DFP for SRC error of Tank 1 (nv) |
| 0x4041 | P 4041  DFP for SRC error of Tank 1 (nv) |
| 0x4042 | P 4042  DFP for SRC error of Tank 1 (nv) |
| 0x4060 | P 4060  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4061 | P 4061  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4062 | P 4062  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4063 | P 4063  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4065 | P 4065  Ueberwachung Master/Slave faultpath for private CAN (BIT7 is set in status byte 2 |
| 0x4072 | P 4072  Kupplungsschalter |
| 0x4073 | P 4073  Kupplungsschalter |
| 0x4075 | P 4075  Ueberwachung Master/Slave faultpath for Mil Lamp activation |
| 0x4082 | P 4082  Bremslicht-/Bremstestschalter |
| 0x4083 | P 4083  Bremslicht-/Bremstestschalter |
| 0x4085 | P 4085  Ueberwachung Master/Slave faultpath for SysLamp activation |
| 0x4093 | P 4093  Error path for AccPed and Brake Plausibility (nv) |
| 0x4095 | P 4095  Ueberwachung Master/Slave faultpath for fuel quantity limitation (BIT7 is set in  |
| 0x40A5 | P 40A5  Ueberwachung Master/Slave faultpath for coordination drive train (BIT5 is set in  |
| 0x40B5 | P 40B5  Ueberwachung Master/Slave faultpath for coordination vehicle (BIT6 is set in stat |
| 0x40C5 | P 40C5  Ueberwachung Master/Slave faultpath for external desired torque (BIT4 is set in s |
| 0x40D5 | P 40D5  Ueberwachung Master/Slave faultpath for torque limitation (BIT0 is set in status  |
| 0x40E0 | P 40E0  Generator |
| 0x40E5 | P 40E5  Ueberwachung Master/Slave faultpath for torque limitation (BIT1 is set in status  |
| 0x40F5 | P 40F5  Ueberwachung Master/Slave faultpath for torque limitation (BIT2 is set in status  |
| 0x4108 | P 4108  Ueberwachung Master/Slave |
| 0x4112 | P 4112  Fault path of air condition power stage (nv) |
| 0x4113 | P 4113  Fault path of air condition power stage (nv) |
| 0x4117 | P 4117  Ueberwachung Master/Slave |
| 0x4118 | P 4118  Ueberwachung Master/Slave |
| 0x4120 | P 4120  DDE-Hauptrelais |
| 0x4121 | P 4121  DDE-Hauptrelais |
| 0x4125 | P 4125  Speisespannung 4 |
| 0x4126 | P 4126  Speisespannung 4 |
| 0x4130 | P 4130  Drallklappe |
| 0x4135 | P 4135  Speisespannung 5 |
| 0x4136 | P 4136  Speisespannung 5 |
| 0x4141 | P 4141  Drallklappe |
| 0x4145 | P 4145  Speisespannung 6 |
| 0x4146 | P 4146  Speisespannung 6 |
| 0x4152 | P 4152  Drallklappe |
| 0x4153 | P 4153  Drallklappe |
| 0x4155 | P 4155  Abgasklappe |
| 0x4156 | P 4156  Abgasklappe |
| 0x4157 | P 4157  Abgasklappe |
| 0x4158 | P 4158  Abgasklappe |
| 0x4165 | P 4165  Partikelfiltersystem |
| 0x4166 | P 4166  Partikelfiltersystem |
| 0x4170 | P 4170  Additiv-Dosierpumpe (nv) |
| 0x4171 | P 4171  Additiv-Dosierpumpe (nv) |
| 0x4172 | P 4172  Additiv-Dosierpumpe (nv) |
| 0x4173 | P 4173  Additiv-Dosierpumpe (nv) |
| 0x4175 | P 4175  Partikelfiltersystem |
| 0x4176 | P 4176  Partikelfiltersystem |
| 0x4178 | P 4178  Partikelfiltersystem |
| 0x4180 | P 4180  Ladedrucksteller |
| 0x4185 | P 4185  Partikelfiltersystem |
| 0x4186 | P 4186  Partikelfiltersystem |
| 0x4188 | P 4188  Partikelfiltersystem |
| 0x4191 | P 4191  Ladedrucksteller |
| 0x4195 | P 4195  Drehmomentanforderung Klimaanlage |
| 0x41A2 | P 41A2  Ladedrucksteller |
| 0x41A3 | P 41A3  Ladedrucksteller |
| 0x41A6 | P 41A6  Botschaft (CBS_RESET, 0x580) |
| 0x41A7 | P 41A7  Botschaft (CBS_RESET, 0x580) |
| 0x41A8 | P 41A8  Botschaft (CBS_RESET, 0x580) |
| 0x41B0 | P 41B0  Abgasrueckfuehrsteller |
| 0x41B5 | P 41B5  Fault path for Gearbox Temperature |
| 0x41C0 | P 41C0  Abluftklappenansteuerung |
| 0x41C1 | P 41C1  Abluftklappenansteuerung |
| 0x41C2 | P 41C2  Abluftklappenansteuerung |
| 0x41C3 | P 41C3  Abluftklappenansteuerung |
| 0x41C5 | P 41C5  Ueberwachung Master/Slave faultpath for air system 7 |
| 0x41D1 | P 41D1  Abgasrueckfuehrsteller |
| 0x41E2 | P 41E2  Abgasrueckfuehrsteller |
| 0x41E3 | P 41E3  Abgasrueckfuehrsteller |
| 0x41F0 | P 41F0  Elektroluefter |
| 0x41F1 | P 41F1  Elektroluefter |
| 0x41F2 | P 41F2  Elektroluefter |
| 0x41F3 | P 41F3  Elektroluefter |
| 0x4203 | P 4203  Gluehsteuergeraet |
| 0x4211 | P 4211  Gluehkerze Zylinder 1 |
| 0x4212 | P 4212  Gluehkerze Zylinder 1 |
| 0x4213 | P 4213  Gluehkerze Zylinder 1 |
| 0x4221 | P 4221  Gluehkerze Zylinder 2 |
| 0x4222 | P 4222  Gluehkerze Zylinder 2 |
| 0x4223 | P 4223  Gluehkerze Zylinder 2 |
| 0x4231 | P 4231  Gluehkerze Zylinder 3 |
| 0x4232 | P 4232  Gluehkerze Zylinder 3 |
| 0x4233 | P 4233  Gluehkerze Zylinder 3 |
| 0x4241 | P 4241  Gluehkerze Zylinder 4 |
| 0x4242 | P 4242  Gluehkerze Zylinder 4 |
| 0x4243 | P 4243  Gluehkerze Zylinder 4 |
| 0x4251 | P 4251  Gluehkerze Zylinder 5 |
| 0x4252 | P 4252  Gluehkerze Zylinder 5 |
| 0x4253 | P 4253  Gluehkerze Zylinder 5 |
| 0x4261 | P 4261  Gluehkerze Zylinder 6 |
| 0x4262 | P 4262  Gluehkerze Zylinder 6 |
| 0x4263 | P 4263  Gluehkerze Zylinder 6 |
| 0x4271 | P 4271  Gluehkerze Zylinder 7 |
| 0x4272 | P 4272  Gluehkerze Zylinder 7 |
| 0x4273 | P 4273  Gluehkerze Zylinder 7 |
| 0x4281 | P 4281  Gluehkerze Zylinder 8 |
| 0x4282 | P 4282  Gluehkerze Zylinder 8 |
| 0x4283 | P 4283  Gluehkerze Zylinder 8 |
| 0x4293 | P 4293  Steuergeraet intern 16 |
| 0x42A0 | P 42A0  Gluehrelais (nv) |
| 0x42A1 | P 42A1  Gluehrelais (nv) |
| 0x42A2 | P 42A2  Gluehrelais (nv) |
| 0x42A3 | P 42A3  Gluehrelais (nv) |
| 0x42B1 | P 42B1  Gluehrelais (nv) |
| 0x42B2 | P 42B2  Gluehrelais (nv) |
| 0x42B5 | P 42B5  DrehzahlUeberwachung |
| 0x42C0 | P 42C0  Oeldruck-Kontrollleuchte |
| 0x42C1 | P 42C1  Oeldruck-Kontrollleuchte |
| 0x42C2 | P 42C2  Oeldruck-Kontrollleuchte |
| 0x42C3 | P 42C3  Oeldruck-Kontrollleuchte |
| 0x42D0 | P 42D0  Power Stage fault status for MIL (nv) |
| 0x42D1 | P 42D1  Power Stage fault status for MIL (nv) |
| 0x42D2 | P 42D2  Power Stage fault status for MIL (nv) |
| 0x42D3 | P 42D3  Power Stage fault status for MIL (nv) |
| 0x42D5 | P 42D5  Injektor Zylinder 7 |
| 0x42D6 | P 42D6  Injektor Zylinder 7 |
| 0x42D7 | P 42D7  Injektor Zylinder 7 |
| 0x42D8 | P 42D8  Injektor Zylinder 7 |
| 0x42E2 | P 42E2  Umschaltung Raildruckregelung PCV |
| 0x42E5 | P 42E5  Injektor Zylinder 7_1 |
| 0x42E6 | P 42E6  Injektor Zylinder 7_1 |
| 0x42E7 | P 42E7  Injektor Zylinder 7_1 |
| 0x42E8 | P 42E8  Injektor Zylinder 7_1 |
| 0x42F2 | P 42F2  Umschaltung Raildruckregelung MeUn |
| 0x42F5 | P 42F5  Injektor Zylinder 8 |
| 0x42F6 | P 42F6  Injektor Zylinder 8 |
| 0x42F7 | P 42F7  Injektor Zylinder 8 |
| 0x42F8 | P 42F8  Injektor Zylinder 8 |
| 0x4302 | P 4302  Mengenregelventil |
| 0x4303 | P 4303  Mengenregelventil |
| 0x4305 | P 4305  Injektor Zylinder 8_1 |
| 0x4306 | P 4306  Injektor Zylinder 8_1 |
| 0x4307 | P 4307  Injektor Zylinder 8_1 |
| 0x4308 | P 4308  Injektor Zylinder 8_1 |
| 0x4310 | P 4310  Mengenregelventil |
| 0x4315 | P 4315  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4316 | P 4316  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4317 | P 4317  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4318 | P 4318  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4321 | P 4321  Mengenregelventil |
| 0x4332 | P 4332  Raildruckregelventil |
| 0x4333 | P 4333  Raildruckregelventil |
| 0x4340 | P 4340  Raildruckregelventil |
| 0x4351 | P 4351  Raildruckregelventil |
| 0x4355 | P 4355  Ueberwachung Master/Slave faultpath for ARS error |
| 0x4360 | P 4360  Stromregelung fuer Raildruckregelventil |
| 0x4361 | P 4361  Stromregelung fuer Raildruckregelventil |
| 0x4362 | P 4362  Stromregelung fuer Raildruckregelventil |
| 0x4365 | P 4365  Ueberwachung Master/Slave faultpath for air system 0 |
| 0x4373 | P 4373  Plausibilitaet Luftmassen |
| 0x4378 | P 4378  Raildruckregelventil Test (nv) |
| 0x4382 | P 4382  Raildruckregelventil Stellertest |
| 0x4385 | P 4385  Ueberwachung Master/Slave faultpath for air system 1 |
| 0x4390 | P 4390  Ladelufttemperatursensor |
| 0x4391 | P 4391  Ladelufttemperatursensor |
| 0x4392 | P 4392  Ladelufttemperatursensor |
| 0x4397 | P 4397  Mengenregelventil Stellertest |
| 0x43A0 | P 43A0  Anlasssperr-Relais |
| 0x43A1 | P 43A1  Anlasssperr-Relais |
| 0x43A2 | P 43A2  Anlasssperr-Relais |
| 0x43A3 | P 43A3  Anlasssperr-Relais |
| 0x43A5 | P 43A5  Ueberwachung Master/Slave faultpath for air system 2 |
| 0x43B0 | P 43B0  Power Stage fault status for System lamp (nv) |
| 0x43B1 | P 43B1  Power Stage fault status for System lamp (nv) |
| 0x43B2 | P 43B2  Power Stage fault status for System lamp (nv) |
| 0x43B3 | P 43B3  Power Stage fault status for System lamp (nv) |
| 0x43B5 | P 43B5  Ueberwachung Master/Slave faultpath for air system 3 |
| 0x43C0 | P 43C0  Drosselklappe |
| 0x43C5 | P 43C5  Ueberwachung Master/Slave faultpath for air system 4 |
| 0x43D1 | P 43D1  Drosselklappe |
| 0x43E2 | P 43E2  Drosselklappe |
| 0x43E3 | P 43E3  Drosselklappe |
| 0x43E5 | P 43E5  Ueberwachung Master/Slave faultpath for DSC error (torque switch off) |
| 0x43F0 | P 43F0  Elektrischer Zuheizer |
| 0x43F1 | P 43F1  Elektrischer Zuheizer |
| 0x43F2 | P 43F2  Elektrischer Zuheizer |
| 0x43F3 | P 43F3  Elektrischer Zuheizer |
| 0x4403 | P 4403  Steuergeraet intern 17 |
| 0x4405 | P 4405  Ueberwachung Master/Slave faultpath for EGS error (torque switch off) |
| 0x4410 | P 4410  Injektor Zylinder 1 |
| 0x4411 | P 4411  Injektor Zylinder 1 |
| 0x4412 | P 4412  Injektor Zylinder 1 |
| 0x4413 | P 4413  Injektor Zylinder 1 |
| 0x4417 | P 4417  Ueberwachung Master/Slave |
| 0x441A | P 441A  Injektor Zylinder 1_1 |
| 0x441B | P 441B  Injektor Zylinder 1_1 |
| 0x441C | P 441C  Injektor Zylinder 1_1 |
| 0x441D | P 441D  Injektor Zylinder 1_1 |
| 0x4420 | P 4420  Injektor Zylinder 2 |
| 0x4421 | P 4421  Injektor Zylinder 2 |
| 0x4422 | P 4422  Injektor Zylinder 2 |
| 0x4423 | P 4423  Injektor Zylinder 2 |
| 0x4428 | P 4428  Ueberwachung Master/Slave |
| 0x442A | P 442A  Injektor Zylinder 2_1 |
| 0x442B | P 442B  Injektor Zylinder 2_1 |
| 0x442C | P 442C  Injektor Zylinder 2_1 |
| 0x442D | P 442D  Injektor Zylinder 2_1 |
| 0x4430 | P 4430  Injektor Zylinder 3 |
| 0x4431 | P 4431  Injektor Zylinder 3 |
| 0x4432 | P 4432  Injektor Zylinder 3 |
| 0x4433 | P 4433  Injektor Zylinder 3 |
| 0x4438 | P 4438  Ueberwachung Master/Slave |
| 0x443A | P 443A  Injektor Zylinder 3_1 |
| 0x443B | P 443B  Injektor Zylinder 3_1 |
| 0x443C | P 443C  Injektor Zylinder 3_1 |
| 0x443D | P 443D  Injektor Zylinder 3_1 |
| 0x4440 | P 4440  Injektor Zylinder 4 |
| 0x4441 | P 4441  Injektor Zylinder 4 |
| 0x4442 | P 4442  Injektor Zylinder 4 |
| 0x4443 | P 4443  Injektor Zylinder 4 |
| 0x444A | P 444A  Injektor Zylinder 4_1 |
| 0x444B | P 444B  Injektor Zylinder 4_1 |
| 0x444C | P 444C  Injektor Zylinder 4_1 |
| 0x444D | P 444D  Injektor Zylinder 4_1 |
| 0x4450 | P 4450  Injektor Zylinder 5 |
| 0x4451 | P 4451  Injektor Zylinder 5 |
| 0x4452 | P 4452  Injektor Zylinder 5 |
| 0x4453 | P 4453  Injektor Zylinder 5 |
| 0x4457 | P 4457  Botschaft (LENKRADWINKEL, 0xC4) |
| 0x4458 | P 4458  Botschaft (LENKRADWINKEL, 0xC4) |
| 0x445A | P 445A  Injektor Zylinder 5_1 |
| 0x445B | P 445B  Injektor Zylinder 5_1 |
| 0x445C | P 445C  Injektor Zylinder 5_1 |
| 0x445D | P 445D  Injektor Zylinder 5_1 |
| 0x4460 | P 4460  Injektor Zylinder 6 |
| 0x4461 | P 4461  Injektor Zylinder 6 |
| 0x4462 | P 4462  Injektor Zylinder 6 |
| 0x4463 | P 4463  Injektor Zylinder 6 |
| 0x446A | P 446A  Injektor Zylinder 6_1 |
| 0x446B | P 446B  Injektor Zylinder 6_1 |
| 0x446C | P 446C  Injektor Zylinder 6_1 |
| 0x446D | P 446D  Injektor Zylinder 6_1 |
| 0x4473 | P 4473  Steuergeraet intern 18 |
| 0x4480 | P 4480  Steuergeraet intern 19 |
| 0x4491 | P 4491  Steuergeraet intern 20 |
| 0x44A0 | P 44A0  Injektoren Bank 1 |
| 0x44A1 | P 44A1  Injektoren Bank 1 |
| 0x44A2 | P 44A2  Injektoren Bank 1 |
| 0x44A3 | P 44A3  Injektoren Bank 1 |
| 0x44AA | P 44AA  Injektoren Bank 1_1 |
| 0x44AB | P 44AB  Injektoren Bank 1_1 |
| 0x44AC | P 44AC  Injektoren Bank 1_1 |
| 0x44AD | P 44AD  Injektoren Bank 1_1 |
| 0x44B0 | P 44B0  Injektoren Bank 2 |
| 0x44B1 | P 44B1  Injektoren Bank 2 |
| 0x44B2 | P 44B2  Injektoren Bank 2 |
| 0x44B3 | P 44B3  Injektoren Bank 2 |
| 0x44BA | P 44BA  Injektoren Bank 2_1 |
| 0x44BB | P 44BB  Injektoren Bank 2_1 |
| 0x44BC | P 44BC  Injektoren Bank 2_1 |
| 0x44BD | P 44BD  Injektoren Bank 2_1 |
| 0x44C0 | P 44C0  Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C1 | P 44C1  Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C2 | P 44C2  Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44D0 | P 44D0  Generator |
| 0x44D2 | P 44D2  Generator |
| 0x44D3 | P 44D3  Generator |
| 0x44E2 | P 44E2  Generator |
| 0x44E3 | P 44E3  Generator |
| 0x44F0 | P 44F0  Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4501 | P 4501  Abgasrueckfuehr-Regelung |
| 0x4507 | P 4507  Abgasrueckfuehr-Regelung |
| 0x4512 | P 4512  Thermischer Oelniveausensor |
| 0x4513 | P 4513  Thermischer Oelniveausensor |
| 0x4521 | P 4521  Ladedruckregelung |
| 0x4530 | P 4530  Ladedruckregelung |
| 0x4541 | P 4541  Thermischer Oelniveausensor |
| 0x4550 | P 4550  Ladedrucksteller 2 |
| 0x4560 | P 4560  Raildruck-Plausibilitaet mengengeregelt |
| 0x4570 | P 4570  Raildruck-Plausibilitaet mengengeregelt |
| 0x4580 | P 4580  Raildruck-Plausibilitaet mengengeregelt |
| 0x4587 | P 4587  Kraftstofffilter |
| 0x4590 | P 4590  Raildruck-Plausibilitaet mengengeregelt |
| 0x45A0 | P 45A0  Raildruck-Plausibilitaet mengengeregelt |
| 0x45A5 | P 45A5  Ladelufttemperatursensor 2 |
| 0x45A6 | P 45A6  Ladelufttemperatursensor 2 |
| 0x45A7 | P 45A7  Ladelufttemperatursensor 2 |
| 0x45B5 | P 45B5  Ueberwachung Master/Slave faultpath for FrmMng_CoEng error (torque switch off) |
| 0x45C0 | P 45C0  Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x45C5 | P 45C5  Ueberwachung Master/Slave faultpath for FrmMngPT2 error (torque switch off) |
| 0x45D5 | P 45D5  Ueberwachung Master/Slave faultpath for FrmMngPT3 error (torque switch off) |
| 0x45E3 | P 45E3  Ueberwachung Master/Slave |
| 0x45E5 | P 45E5  Ueberwachung Master/Slave faultpath for stFrmMng_CoEng error (torque is limited) |
| 0x45F2 | P 45F2  Ueberwachung Master/Slave |
| 0x45F3 | P 45F3  Ueberwachung Master/Slave |
| 0x45F5 | P 45F5  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F6 | P 45F6  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F7 | P 45F7  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F8 | P 45F8  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x4600 | P 4600  Raildruck-Plausibilitaet druckgeregelt |
| 0x4610 | P 4610  Raildruck-Plausibilitaet druckgeregelt |
| 0x4620 | P 4620  Raildruck-Plausibilitaet druckgeregelt |
| 0x4630 | P 4630  Raildruck-Plausibilitaet druckgeregelt |
| 0x4640 | P 4640  Raildruck-Plausibilitaet druckgeregelt |
| 0x4650 | P 4650  Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4660 | P 4660  Versorgungsspannung |
| 0x4661 | P 4661  Versorgungsspannung |
| 0x4670 | P 4670  Speisespannung 1 |
| 0x4671 | P 4671  Speisespannung 1 |
| 0x4680 | P 4680  Speisespannung 2 |
| 0x4681 | P 4681  Speisespannung 2 |
| 0x4690 | P 4690  Speisespannung 3 |
| 0x4691 | P 4691  Speisespannung 3 |
| 0x46A0 | P 46A0  Steuergeraet intern 1 |
| 0x46A1 | P 46A1  Steuergeraet intern 1 |
| 0x46A2 | P 46A2  Steuergeraet intern 1 |
| 0x46A3 | P 46A3  Steuergeraet intern 1 |
| 0x46B0 | P 46B0  Steuergeraet intern 2 |
| 0x46B1 | P 46B1  Steuergeraet intern 2 |
| 0x46B2 | P 46B2  Steuergeraet intern 2 |
| 0x46B3 | P 46B3  Steuergeraet intern 2 |
| 0x46C0 | P 46C0  Steuergeraet intern 3 |
| 0x46C1 | P 46C1  Steuergeraet intern 3 |
| 0x46D0 | P 46D0  Steuergeraet intern 4 |
| 0x46D1 | P 46D1  Steuergeraet intern 4 |
| 0x46D2 | P 46D2  Steuergeraet intern 4 |
| 0x46D3 | P 46D3  Steuergeraet intern 4 |
| 0x4703 | P 4703  Steuergeraet intern 7 |
| 0x4711 | P 4711  Steuergeraet intern 8 |
| 0x4712 | P 4712  Steuergeraet intern 8 |
| 0x4713 | P 4713  Steuergeraet intern 8 |
| 0x4723 | P 4723  Steuergeraet intern 9 |
| 0x4730 | P 4730  Mengenregelventil Stromregelung |
| 0x4731 | P 4731  Mengenregelventil Stromregelung |
| 0x4732 | P 4732  Mengenregelventil Stromregelung |
| 0x4740 | P 4740  Steuergeraet intern 11 |
| 0x4750 | P 4750  Steuergeraet intern 12 |
| 0x4753 | P 4753  Steuergeraet intern 12 |
| 0x4763 | P 4763  Steuergeraet intern 13 (nv) |
| 0x4773 | P 4773  Steuergeraet intern 14 |
| 0x4780 | P 4780  Steuergeraet intern 15 |
| 0x4781 | P 4781  Steuergeraet intern 15 |
| 0x4782 | P 4782  Steuergeraet intern 15 |
| 0x4783 | P 4783  Steuergeraet intern 15 |
| 0x4793 | P 4793  Ueberwachung Master/Slave |
| 0x4803 | P 4803  Drehmomentueberwachung ACC |
| 0x4810 | P 4810  Drehmomenteingriff ACC |
| 0x4830 | P 4830  Ansauglufttemperatursensor |
| 0x4831 | P 4831  Ansauglufttemperatursensor |
| 0x4841 | P 4841  Abgasrueckfuehr-Regelung 2 |
| 0x4850 | P 4850  Abgasrueckfuehr-Regelung 2 |
| 0x4863 | P 4863  Fahrgeschwindigkeitsregelung |
| 0x4870 | P 4870  Aussetzerkennung in mehreren Zylindern |
| 0x4880 | P 4880  Aussetzerkennung Zylinder 1 |
| 0x4890 | P 4890  Aussetzerkennung Zylinder 2 |
| 0x48F2 | P 48F2  CAN Bus A |
| 0x48F3 | P 48F3  CAN Bus A |
| 0x4900 | P 4900  Momenteneingriff DSC (nv) |
| 0x4912 | P 4912  CAN Bus B |
| 0x4913 | P 4913  CAN Bus B |
| 0x4920 | P 4920  Momenteneingriff Getriebe (nv) |
| 0x4930 | P 4930  Aussetzerkennung Zylinder 3 |
| 0x4940 | P 4940  Aussetzerkennung Zylinder 4 |
| 0x4950 | P 4950  Aussetzerkennung Zylinder 5 |
| 0x4960 | P 4960  Aussetzerkennung Zylinder 6 |
| 0x4970 | P 4970  (FRM3) Botschaft |
| 0x4971 | P 4971  (FRM3) Botschaft |
| 0x4972 | P 4972  (FRM3) Botschaft |
| 0x4973 | P 4973  (FRM3) Botschaft |
| 0x4975 | P 4975  Aussetzerkennung Zylinder 7 |
| 0x4980 | P 4980  (FRM5) Botschaft |
| 0x4981 | P 4981  (FRM5) Botschaft |
| 0x4983 | P 4983  (FRM5) Botschaft |
| 0x4985 | P 4985  Aussetzerkennung Zylinder 8 |
| 0x4991 | P 4991  Botschaft (STAT_KOMBI, 0x1B4) |
| 0x4992 | P 4992  Botschaft (STAT_KOMBI, 0x1B4) |
| 0x4993 | P 4993  Botschaft (STAT_KOMBI, 0x1B4) |
| 0x49A2 | P 49A2  Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x49A3 | P 49A3  Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x49F2 | P 49F2  Botschaft (WHEEL_SPEED, 0xCE) |
| 0x49F3 | P 49F3  Botschaft (WHEEL_SPEED, 0xCE) |
| 0x4A02 | P 4A02  Klemme 15 |
| 0x4A03 | P 4A03  Klemme 15 |
| 0x4A10 | P 4A10  Bitserielle Datenschnittstelle BSD |
| 0x4A13 | P 4A13  Bitserielle Datenschnittstelle BSD |
| 0x4A22 | P 4A22  Ladedrucksteller 2 |
| 0x4A23 | P 4A23  Ladedrucksteller 2 |
| 0x4A30 | P 4A30  Multifunktionslenkrad |
| 0x4A31 | P 4A31  Multifunktionslenkrad |
| 0x4A32 | P 4A32  Multifunktionslenkrad |
| 0x4A33 | P 4A33  Multifunktionslenkrad |
| 0x4A40 | P 4A40  EWS Schnittstellenfehler |
| 0x4A41 | P 4A41  EWS Schnittstellenfehler |
| 0x4A42 | P 4A42  EWS Schnittstellenfehler |
| 0x4A43 | P 4A43  EWS Schnittstellenfehler |
| 0x4A51 | P 4A51  EWS EEPROM Wechselcodeablage fehlerhaft |
| 0x4A60 | P 4A60  EWS Manipulation |
| 0x4A61 | P 4A61  EWS Manipulation |
| 0x4A62 | P 4A62  EWS Manipulation |
| 0x4A63 | P 4A63  EWS Manipulation |
| 0x4A70 | P 4A70  Kennfeld FMTC_trq2qBas_MAP falsch |
| 0x4A80 | P 4A80  Ladeluftschlauch-Ueberwachung |
| 0x4AB2 | P 4AB2  Elektrischer Zuheizer |
| 0x4AC2 | P 4AC2  Elektrischer Zuheizer 2 (nv) |
| 0x4AD2 | P 4AD2  Elektrischer Zuheizer 3 (nv) |
| 0x4AE0 | P 4AE0  E-Boxluefter |
| 0x4AE1 | P 4AE1  E-Boxluefter |
| 0x4AE2 | P 4AE2  E-Boxluefter |
| 0x4AE3 | P 4AE3  E-Boxluefter |
| 0x4AF0 | P 4AF0  Steuergeraetetemperaturfuehler |
| 0x4AF1 | P 4AF1  Steuergeraetetemperaturfuehler |
| 0x4B00 | P 4B00  Steuergeraetetemperatur |
| 0x4B10 | P 4B10  Laufruheregler |
| 0x4B11 | P 4B11  Laufruheregler |
| 0x4B22 | P 4B22  Elektroluefter |
| 0x4B32 | P 4B32  Elektroluefter 2 (nv) |
| 0x4B42 | P 4B42  Elektroluefter 3 (nv) |
| 0x4B50 | P 4B50  Mengenabgleich |
| 0x4B60 | P 4B60  Mengendriftkompensation |
| 0x4B71 | P 4B71  ZMS Pulsation |
| 0x4B80 | P 4B80  Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x4B90 | P 4B90  Raildruckueberwachung bei Motorstart |
| 0x4BA0 | P 4BA0  Ansauglufttemperatursensor |
| 0x4BA1 | P 4BA1  Ansauglufttemperatursensor |
| 0x4BB0 | P 4BB0  Versorgungsspannung Luftmassenmesser |
| 0x4BB1 | P 4BB1  Versorgungsspannung Luftmassenmesser |
| 0x4BB5 | P 4BB5  Luftmassenmesser |
| 0x4BB6 | P 4BB6  Luftmassenmesser |
| 0x4BC0 | P 4BC0  Luftmassenmesser |
| 0x4BC1 | P 4BC1  Luftmassenmesser |
| 0x4BC2 | P 4BC2  Luftmassenmesser |
| 0x4BC5 | P 4BC5  Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BC6 | P 4BC6  Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BC7 | P 4BC7  Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BD2 | P 4BD2  Drehmomentanforderung ARS |
| 0x4BD5 | P 4BD5  Motorlager |
| 0x4BD6 | P 4BD6  Motorlager |
| 0x4BD7 | P 4BD7  Motorlager |
| 0x4BD8 | P 4BD8  Motorlager |
| 0x4BE2 | P 4BE2  Botschaft (GEARBX_DATA, 0xBA) |
| 0x4BE3 | P 4BE3  Botschaft (GEARBX_DATA, 0xBA) |
| 0x4BE7 | P 4BE7  Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x4BE8 | P 4BE8  Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x4BF2 | P 4BF2  Botschaft (HEAT_AC, 0x1B5) |
| 0x4BF3 | P 4BF3  Botschaft (HEAT_AC, 0x1B5) |
| 0x4BF7 | P 4BF7  Botschaft (MILEAGE_RANGE, 0x330) |
| 0x4BF8 | P 4BF8  Botschaft (MILEAGE_RANGE, 0x330) |
| 0x4C00 | P 4C00  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C01 | P 4C01  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C02 | P 4C02  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C03 | P 4C03  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C06 | P 4C06  Botschaft (STAT_ARS, 0x1AC) |
| 0x4C07 | P 4C07  Botschaft (STAT_ARS, 0x1AC) |
| 0x4C08 | P 4C08  Botschaft (STAT_ARS, 0x1AC) |
| 0x4C12 | P 4C12  Botschaft (STAT_DSC, 0x19E) |
| 0x4C13 | P 4C13  Botschaft (STAT_DSC, 0x19E) |
| 0x4C15 | P 4C15  Botschaft (TERMINAL, 0x130) |
| 0x4C16 | P 4C16  Botschaft (TERMINAL, 0x130) |
| 0x4C17 | P 4C17  Botschaft (TERMINAL, 0x130) |
| 0x4C18 | P 4C18  Botschaft (TERMINAL, 0x130) |
| 0x4C20 | P 4C20  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C21 | P 4C21  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C22 | P 4C22  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C23 | P 4C23  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C27 | P 4C27  Botschaft (VELOCITY, 0x1A0) |
| 0x4C28 | P 4C28  Botschaft (VELOCITY, 0x1A0) |
| 0x4C30 | P 4C30  (FRM1) Botschaft |
| 0x4C31 | P 4C31  (FRM1) Botschaft |
| 0x4C32 | P 4C32  (FRM1) Botschaft |
| 0x4C33 | P 4C33  (FRM1) Botschaft |
| 0x4C35 | P 4C35  (FRM2) Botschaft |
| 0x4C36 | P 4C36  (FRM2) Botschaft |
| 0x4C37 | P 4C37  (FRM2) Botschaft |
| 0x4C38 | P 4C38  (FRM2) Botschaft |
| 0x4C40 | P 4C40  Partikelfilterheizung |
| 0x4C41 | P 4C41  Partikelfilterheizung |
| 0x4C42 | P 4C42  Partikelfilterheizung |
| 0x4C43 | P 4C43  Partikelfilterheizung |
| 0x4C71 | P 4C71  fault path for the additive tank  component driver |
| 0x4C75 | P 4C75  Versorgungsspannung Luftmassenmesser 2 |
| 0x4C76 | P 4C76  Versorgungsspannung Luftmassenmesser 2 |
| 0x4CA2 | P 4CA2  Botschaft (POWERMANAGMENT_BATTERYVOLTAGE, 0x3B4) |
| 0x4CA3 | P 4CA3  Botschaft (POWERMANAGMENT_BATTERYVOLTAGE, 0x3B4) |
| 0x4CA5 | P 4CA5  Luftmassenmesser 2 |
| 0x4CA6 | P 4CA6  Luftmassenmesser 2 |
| 0x4CB2 | P 4CB2  Botschaft (PWRMNG_LOADV, 0x334) |
| 0x4CB3 | P 4CB3  Botschaft (PWRMNG_LOADV, 0x334) |
| 0x4CC0 | P 4CC0  (FRM4) Botschaft |
| 0x4CC3 | P 4CC3  (FRM4) Botschaft |
| 0x4CE0 | P 4CE0  Partikelfiltersystem |
| 0x4CF3 | P 4CF3  Partikelfiltersystem |
| 0x4D00 | P 4D00  Partikelfiltersystem |
| 0x4D01 | P 4D01  Partikelfiltersystem |
| 0x4D03 | P 4D03  Partikelfiltersystem |
| 0x4D13 | P 4D13  Partikelfiltersystem |
| 0x4D23 | P 4D23  Partikelfiltersystem |
| 0x4D40 | P 4D40  Partikelfiltersystem |
| 0x4D73 | P 4D73  Partikelfiltersystem |
| 0x4D81 | P 4D81  Ladedrucksteller 2 |
| 0x4DA3 | P 4DA3  Ladedruckregelung |
| 0x4DB0 | P 4DB0  Abgasrueckfuehrsteller 2 |
| 0x4DC1 | P 4DC1  Abgasrueckfuehrsteller 2 |
| 0x4DD2 | P 4DD2  Abgasrueckfuehrsteller 2 |
| 0x4DD3 | P 4DD3  Abgasrueckfuehrsteller 2 |
| 0x4DE0 | P 4DE0  Ueberwachung Master/Slave privater CAN |
| 0x4DE1 | P 4DE1  Ueberwachung Master/Slave privater CAN |
| 0x4DE2 | P 4DE2  Ueberwachung Master/Slave privater CAN |
| 0x4DE3 | P 4DE3  Ueberwachung Master/Slave privater CAN |
| 0x4DF0 | P 4DF0  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF1 | P 4DF1  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF2 | P 4DF2  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF3 | P 4DF3  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0xCD87 | P CD87  CAN Bus A |
| 0xCD8B | P CD8B  CAN Bus B |
| 0xFFFF | FFFF unbekannter Fehlerort |

### ID_13

| ORT | ORTTEXT |
| --- | --- |
| 0x2712 | P CDKDMMVE - Ansteuerung Magnetventil DM-TL |
| 0x2713 | P CDKLSVV - Vertauschte Lambdasonden oder Steckerzuordnung HDEV Steuergeraet vertauscht |
| 0x2716 | P CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x271A | P CDKLSV - Lambda-Sonde vor Kat |
| 0x271B | P CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x271C | P CDKLSH - Lambda-Sonde hinter Kat |
| 0x271D | P CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x271E | P CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x2721 | P CDKLASH - Lambda-Sondenalterung h. Kat |
| 0x2728 | P CDKFRAO - LR-Adaption multiplikativ Bereich2 |
| 0x272A | P CDKFRAU - LR-Adaption multiplikativ Bereich1 |
| 0x272C | P CDKRKAT - LR-Adaption additiv pro Zeit |
| 0x272E | P CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x2731 | P CDKENWS - Nockenwellensteuerung Einlass |
| 0x2737 | P CDKWFS - EWS3.3-Manipulationsschutz |
| 0x2738 | P CDKKAT - Katalysator-Konvertierung |
| 0x2742 | P CDKMD00 - Aussetzererkennung Zyl.1 |
| 0x2743 | P CDKMD01 - Aussetzererkennung Zyl.7 |
| 0x2744 | P CDKMD02 - Aussetzererkennung Zyl.5 |
| 0x2745 | P CDKMD03 - Aussetzererkennung Zyl.11 |
| 0x2746 | P CDKMD04 - Aussetzererkennung Zyl.3 |
| 0x2747 | P CDKMD05 - Aussetzererkennung Zyl.9 |
| 0x2748 | P CDKMD06 - Aussetzererkennung Zyl.6 |
| 0x2749 | P CDKMD07 - Aussetzererkennung Zyl.12 |
| 0x274A | P CDKMD08 - Aussetzererkennung Zyl.2 |
| 0x274B | P CDKMD09 - Aussetzererkennung Zyl.8 |
| 0x274C | P CDKMD10 - Aussetzererkennung Zyl.4 |
| 0x274D | P CDKMD11 - Aussetzererkennung Zyl.10 |
| 0x274E | P CDKMD - Aussetzererkennung Summenfehler |
| 0x2753 | P CDKDZKU0 - Ueberwachung Zuender 1  |
| 0x2754 | P CDKDZKU1 - Ueberwachung  Zuender  5 |
| 0x2755 | P CDKDZKU2 - Ueberwachung Zuender  3 |
| 0x2756 | P CDKDZKU3 - Ueberwachung Zuender  6 |
| 0x2757 | P CDKDZKU4 - Ueberwachung  Zuender  2 |
| 0x2758 | P CDKDZKU5 - Ueberwachung  Zuender  4 |
| 0x2759 | P CDKDZKU0 - Ueberwachung Zuender  7 |
| 0x275A | P CDKDZKU1 - Ueberwachung Zuender  11 |
| 0x275B | P CDKDZKU2 - Ueberwachung Zuender  9 |
| 0x275C | P CDKDZKU3 - Ueberwachung Zuender  12 |
| 0x275D | P CDKDZKU4 - Ueberwachung Zuender  8 |
| 0x275E | P CDKDZKU5 - Ueberwachung Zuender 10 |
| 0x2760 | P CDKSLS - Sekundaerluftsystem |
| 0x2762 | P CDKSLV - Sekudaerluftventil |
| 0x2764 | P CDKSLPE - Ansteuerung Relais Sekundaerluftpumpe |
| 0x2765 | P CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2769 | P CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276A | P CDKSGA - Steuergeraeteauswahl |
| 0x276D | P CDKTES - Tankentlueftung functional check |
| 0x2772 | P CDKTEVE - Ansteuerung Tankentlueftungsventil |
| 0x2774 | P CDKCUHR - Plausibilisierung Systemuhr Powermodul |
| 0x2775 | P CDKUFMV - Motormomentueberwachung Ebene 2 |
| 0x2776 | P CDKMFL - Schnittstelle MFL |
| 0x2778 | P CDKKUPPL - Schalter Kupplung |
| 0x2779 | P CDKURRAM - SG Selbsttest RAM |
| 0x277A | P CDKBREMS - Schalter Bremse |
| 0x277B | P CDKURROM - SG Selbsttest ROM |
| 0x277C | P CDKURRST - SG Selbsttest RESET |
| 0x277D | P CDKUB - Batteriespannung |
| 0x277E | P CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x277F | P CDKN - Kurbelwellengeber |
| 0x2780 | P CDKBM - Bezugsmarkengeber |
| 0x2781 | P CDKPH - Nockenwellengeber Einlass |
| 0x2782 | P CDKPH2 - Nockenwellengeber Auslass |
| 0x2783 | P CDKLM - Heissfilmluftmassenmesser |
| 0x2785 | P CDKDK - DK-Potentiometer |
| 0x2786 | P CDKDK1P - Drosselklappenpoti 1 |
| 0x2787 | P CDKDK2P - Drosselklappenpoti 2 |
| 0x2788 | P CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x2789 | P CDKSWE - Schlechtwegstreckenerkennung |
| 0x278A | P CDKTUM - Umgebungstemperatur |
| 0x278B | P CDKTM - Motortemperatur |
| 0x278C | P CDKTA - Ansauglufttemperatur |
| 0x278D | P CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | P CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x2791 | P CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | P CDKDVEL - DK-Positionsueberwachung |
| 0x2793 | P CDKDVER -  DK-Steller Regelbereich |
| 0x2794 | P CDKDVEE - DK-Steller Ansteuerung |
| 0x2795 | P CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | P CDKDVEU - Pruefung unterer Anschlag |
| 0x2797 | P CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | P CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | P CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | P CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | P CDKTHS - Thermostat klemmt |
| 0x279C | P CDKETS - Ansteuerung Thermostat Kennfeldkuehlung |
| 0x279D | P CDKMLE - Ansteuerung Motor-E-Luefter |
| 0x279E | P CDKAKRE - Ansteuerung Abgasklappe |
| 0x279F | P CDKLUEA - Endstufe LuefterA |
| 0x27A0 | P CDKELS - Ansteuerung E-Box Luefter |
| 0x27A2 | P CDKMLE - Motorluefter 2 Ansteuerung |
| 0x27A4 | P CDKDWA - EWS3.3 Schnittstelle EWS-DME |
| 0x27B3 | P CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | P CDKDSU - Drucksensor Umgebung |
| 0x27B5 | P CDKENWSE - Ansteuerung Einlass-VANOS |
| 0x27B7 | P CDKKPE - Ansteuerung Kraftstoffpumpen-Relais |
| 0x27B8 | P CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27BB | P CDKANWS - Nockenwellensteuerung Auslass-VANOS0 |
| 0x27BD | P CDKANWSE - Ansteuerung Auslass-VANOS |
| 0x27C1 | P CDKPHM - Master Nockenwellengeber |
| 0x27C2 | P CDKKOSE - Ansteuerung Klimakompressorsteuerung |
| 0x27C8 | P CDKTESG - DM-TL Grobleck |
| 0x27CA | P CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | P CDKDMTKNM - DM-TL Feinstleck (0,5 mm) MIL aus |
| 0x27CC | P CDKDMTK - DM-TL Feinleck |
| 0x27CD | P CDKDMTL - DM-TL Modul |
| 0x27CE | P CDKUFRLIP - Lastsensor-, Zuleitung- oder SG-Fehler |
| 0x27D5 | P CDKLLR - Leerlaufregelung fehlerhaft |
| 0x27D9 | P CDKDHDMTE - Ansteuerung DM-TL Heizung |
| 0x27DA | P CDKDGEN - Generatorfehler |
| 0x27DC | P CDKWCA - EWS3.3-Wechselcode-Abspeicherung |
| 0x27E1 | P CDKUFSPSC - Pedalwertgeberueberwachung |
| 0x27E2 | P CDKKS1 - Klopfsensor1 |
| 0x27E3 | P CDKKS2 - Klopfsensor2 |
| 0x27E4 | P CDKKS3 - Klopfsensor3 |
| 0x27E5 | P CDKKS3 - Klopfsensor3 |
| 0x27E6 | P CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | P CDKKROF - Klopfregelung Offset |
| 0x27E8 | P CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | P CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | P CDKCHDEV - CAN-Timeout HDEV |
| 0x27EC | P CDKCGE - CAN-EGS Signalfehler |
| 0x27ED | P CDKCAS - CAN-ASC/DSC Signalfehler |
| 0x27EE | P CDKCINS - CAN-Instrumentenkombination Signalfehler |
| 0x27EF | P CDKCACC - CAN-ACC Signalfehler |
| 0x27F2 | P CDKFST - Plausibilitaet Tankfuellstand |
| 0x27F3 | P CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F6 | P CDKFPP - Pedalwertgeber |
| 0x27F7 | P CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | P CDKFP2P - Pedalwertgeber Poti2 |
| 0x27FA | P CDKSTS - Startautomatik Eingang |
| 0x27FD | P CDKSTA - Startautomatik |
| 0x27FE | P CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | P CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x2813 | P CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | P CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | P CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | P CDKUFNC - Motordrehzahlueberwachung |
| 0x2818 | P CDKULSU - Spannungsueberwachung Sonde an Luft (Sonde nicht verbaut aber angesteckt) |
| 0x2819 | P CDKCDM - Time Out SG-Kopplung |
| 0x281E | P CDKSUE - Ansteuerung DISA |
| 0x2822 | P CDKMTOEL - Zwangsschaltung EGS |
| 0x2823 | P CDKHSVSA - Heizung Lambdasonde vor Kat (im Schub) |
| 0x2825 | P CDKLAVH - Lambda-Sondenalterung h. Kat |
| 0x2827 | P CDKHELSU - Heizereinkopplung auf Signalpfad |
| 0x2828 | P CDKCARS - CAN-ARS Signalfehler |
| 0x2829 | P CDKCCAS - CAN-CAS Signalfehler |
| 0x282A | P CDKCIHKA - ICAN-HKA Signalfehler |
| 0x282B | P CDKCPWML - CAN-PWML Signalfehler |
| 0x282C | P CDKCSZL - CAN-SZL Signalfehler |
| 0x282E | P CDKBWF - PWG-Bewegung |
| 0x283A | P CDKOEZS - Fehler Oelzustandssensor |
| 0x283D | P CDKCANA - PT CAN Bus Off |
| 0x283E | P CDKVVTE - VVT-Enable-Leitung Ansteuerung |
| 0x283F | P CDKPOELS - Plausibilitaet Oeldruckschalter |
| 0x2841 | P CDKLUVE - Luftumfasste Einspritzventile Ansteuerung |
| 0x2842 | P CDKGEN2 - 2.Generator Fehler |
| 0x2843 | P CDKPLLSU - Plausibilitaetsdiagnose LSU durch LSH Nachkat |
| 0x2844 | P CDKICLSU - Eigendiagnose CJ125 SPI Kommunikation |
| 0x2846 | P CDKANSKE - Ansteuerung Ansaugklappe |
| 0x2847 | P CDKDDSA - Druck-Schalter-Ansteuerung |
| 0x2848 | P CDKHDEVRE - Endstufe Relais HDEV SG |
| 0x2849 | P CDKLSUIP - Leitungsunterbrechung an Pumpstrom |
| 0x284A | P CDKLSUKS - Kurzschluss Sondenleitungen gegen Masse oder Ub |
| 0x284B | P CDKASVE -  Ansteuerung Ruecklauf Absperrventil  |
| 0x284C | P CDKDYLSU - LSU dynamisch zu langsam |
| 0x284F | P CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft  |
| 0x2850 | P CDKDVFFS - VVT-Fuehrungssensor |
| 0x2851 | P CDKDVFFS2 -  VVT-Fuehrungssensor (Bank2) |
| 0x2852 | P CDKDVFRS - VVT-Referenzsensor |
| 0x2853 | P CDKDVFRS2 - VVT-Referenzsensor (Bank2) |
| 0x2854 | P CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x2855 | P CDKDVPLA2 - VVT-Sensorplausibilisierung (Bank2) |
| 0x2856 | P CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x2857 | P CDKDVUSE2 - VVT-Versorgungsspannung Sensor (Bank2) |
| 0x2858 | P CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x2859 | P CDKDVLRN2 - VVT-Lernfunktion Anschlag (Bank2) |
| 0x285A | P CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x285B | P CDKDVSTE2 - VVT-Stellgliedueberwachung (Bank2) |
| 0x285C | P CDKDVCAN - VVT-CAN-Kommunikation |
| 0x285D | P CDKDVCAN2 - VVT-CAN-Kommunikation (Bank2) |
| 0x285E | P CDKDVFSG - VVT-Steuergeraet interner Fehler |
| 0x2860 | P CDKDVEST -  VVT-Endstufe |
| 0x2862 | P CDKDVULV -  VVT-Leistungsversorgung |
| 0x2864 | P CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler |
| 0x2865 | P CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | P CDKDVAN - VVT Anschlaege lernen notwendig |
| 0x2867 | P CDKDVOVL - VVT-Systemueberlast |
| 0x286D | P CDKEVLE3 - Endstufe HDEV9, Leitung 9 |
| 0x286E | P CDKEVLE4 - Endstufe HDEV12, Leitung 12 |
| 0x286F | P CDKEVLE5 - Endstufe HDEV8, Leitung 8 |
| 0x2870 | P CDKEVLE6 - Endstufe HDEV10, Leitung 10 |
| 0x2871 | P CDKHDEVH1 - Hochdruck-Einspritzventil Highside 7 |
| 0x2872 | P CDKHDEVH2 - Hochdruck-Einspritzventil Highside 11 |
| 0x2873 | P CDKHDEVH3 - Hochdruck-Einspritzventil Highside 9 |
| 0x2874 | P CDKHDEVH4 - Hochdruck-Einspritzventil Highside 12 |
| 0x2875 | P CDKHDEVH5 - Hochdruck-Einspritzventil Highside 8 |
| 0x2876 | P CDKHDEVH6 - Hochdruck-Einspritzventil Highside 10 |
| 0x2877 | P CDKHDEVL1 - Hochdruck-Einspritzventil Lowside 7 |
| 0x2878 | P CDKHDEVL2 - Hochdruck-Einspritzventil Lowside 11 |
| 0x287A | P CDKHDEVL3 - Hochdruck-Einspritzventil Lowside 9 |
| 0x287D | P CDKHDEVL4 - Hochdruck-Einspritzventil Lowside 12 |
| 0x287E | P CDKHDEVL5 - Hochdruck-Einspritzventil Lowside 8 |
| 0x287F | P CDKHDEVL6 - Hochdruck-Einspritzventil Lowside 10 |
| 0x2880 | P CDKRBVE - Ansteuerung Rücklaufbelüftungsventil |
| 0x2889 | P CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x28C8 | P CDKFRST - LR-Abweichung |
| 0x28D6 | P CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | P CDKDGENBS - Generator Kommunikation |
| 0x28D8 | P CDKNVRBUP - RAM Backup-Fehler |
| 0x28DB | P CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x28DC | P CDKDGENBS2 - 2.Generator Kommunikation |
| 0x28DE | P CDKHBOOST1 - Boostertimeout Hochdruckeinspritzventil Zyl  1 |
| 0x28DF | P CDKHBOOST2 - Boostertimeout Hochdruckeinspritzventil Zyl  5 |
| 0x28E0 | P CDKHBOOST3 - Boostertimeout Hochdruckeinspritzventil Zyl  3 |
| 0x28E1 | P CDKHBOOST4 - Boostertimeout Hochdruckeinspritzventil Zyl  6 |
| 0x28E2 | P CDKHBOOST5 - Boostertimeout Hochdruckeinspritzventil Zyl  2 |
| 0x28E3 | P CDKHBOOST6 - Boostertimeout Hochdruckeinspritzventil Zyl  4 |
| 0x28E4 | P CDKHBOOST1 - Boostertimeout Hochdruckeinspritzventil Zyl  7 |
| 0x28E5 | P CDKHBOOST2 - Boostertimeout Hochdruckeinspritzventil Zyl 11 |
| 0x2901 | P CDKHBOOST3 - Boostertimeout Hochdruckeinspritzventil Zyl  9 |
| 0x2902 | P CDKHBOOST4 - Boostertimeout Hochdruckeinspritzventil Zyl 12 |
| 0x2903 | P CDKHBOOST5 - Boostertimeout Hochdruckeinspritzventil Zyl  8 |
| 0x2904 | P CDKHBOOST6 - Boostertimeout Hochdruckeinspritzventil Zyl 10 |
| 0x290F | P CDKDSKV - Hochdrucksensortest (Signal Raildrucksensor) |
| 0x2913 | P CDKEVLE1 - Endstufe HDEV1, Leitung 1 |
| 0x2914 | P CDKEVLE2 - Endstufe HDEV5  Leitung 5 |
| 0x2915 | P CDKEVLE3 - Endstufe HDEV3, Leitung 3 |
| 0x2916 | P CDKEVLE4 - Endstufe HDEV6, Leitung 6 |
| 0x2917 | P CDKEVLE5 - Endstufe HDEV2, Leitung 2 |
| 0x2918 | P CDKEVLE6 - Endstufe HDEV4, Leitung 4 |
| 0x2919 | P CDKEVLE1 - Endstufe HDEV7, Leitung 7 |
| 0x291A | P CDKEVLE2 - Endstufe HDEV11 Leitung 11 |
| 0x291B | P CDKHDEVH1 - Hochdruck-Einspritzventil Highside 1 |
| 0x291C | P CDKHDEVH2 - Hochdruck-Einspritzventil Highside 5 |
| 0x291D | P CDKHDEVH3 - Hochdruck-Einspritzventil Highside 3 |
| 0x291E | P CDKHDEVH4 - Hochdruck-Einspritzventil Highside 6 |
| 0x291F | P CDKHDEVK - Hochdruck-Einspritzventil, Kommunikation |
| 0x2920 | P CDKHDEVL1 - Hochdruck-Einspritzventil Lowside 1 |
| 0x2921 | P CDKHDEVL2 - Hochdruck-Einspritzventil Lowside 5 |
| 0x2922 | P CDKHDEVL3 - Hochdruck-Einspritzventil Lowside 3 |
| 0x2923 | P CDKHDEVL4 - Hochdruck-Einspritzventil Lowside 6 |
| 0x2924 | P CDKHDR - Raildruckregelung |
| 0x292B | P CDKLSUIA - LSU Abgleichsleitung |
| 0x292D | P CDKLSUUN - LSU Nernst Zelle Unterbrechung |
| 0x2930 | P CDKLSUVM - LSU virtuelle Masse Unterbrechung |
| 0x2932 | P CDKMSVE - Endstufe Drucksteuerventil |
| 0x2937 | P CDKUFRKC - Funktionsueberwachung: Lambda-Plausibilisierung |
| 0x2940 | P CDKHDEVH5 - Hochdruck-Einspritzventil Highside 2 |
| 0x2941 | P CDKHDEVH6 - Hochdruck-Einspritzventil Highside 4 |
| 0x2942 | P CDKHDEVL5 - Hochdruck-Einspritzventil Lowside 2 |
| 0x2943 | P CDKHDEVL6 - Hochdruck-Einspritzventil Lowside 4 |
| 0x2944 | P CDKUF2SG - DME Kopplungsbotschaften |
| 0x296C | P CDKCTXU - CAN-Timeout TXU |
| 0x296D | P CDKMBV - Motormoment Bankvergleich |
| 0x2971 | P CDKSGAPL - Programm- und Datenstands-Plausibilisierung von Master und Slave |
| 0x297C | P CDKRLMAX - RL Begrenzung |
| 0x29AE | P CDKCFC - Tankdeckel offen |
| 0xCD87 | P CDKCANA - PT CAN Bus Off |
| 0xCD8B | P CDKCANB - Local CAN Bus Off |
| 0xCDC7 | P CDKCANA - PT CAN Bus Off |
| 0xCDCB | P CDKCANB - Local CAN Bus Off |
| 0x3E90 | P 3E90  Kurbelwellengeber |
| 0x3E91 | P 3E91  Kurbelwellengeber |
| 0x3E95 | P 3E95  Ansauglufttemperatursensor 2 |
| 0x3E96 | P 3E96  Ansauglufttemperatursensor 2 |
| 0x3EA5 | P 3EA5  Ansauglufttemperatursensor 2 |
| 0x3EA6 | P 3EA6  Ansauglufttemperatursensor 2 |
| 0x3EB0 | P 3EB0  Drehzahlberechnung |
| 0x3EB5 | P 3EB5  Luftmassenmesser 2 |
| 0x3EB6 | P 3EB6  Luftmassenmesser 2 |
| 0x3EC0 | P 3EC0  Nockenwellengeber |
| 0x3EC1 | P 3EC1  Nockenwellengeber |
| 0x3EC7 | P 3EC7  Ueberwachung Master/Slave |
| 0x3ED5 | P 3ED5  Luftmassenmesser 2 |
| 0x3ED6 | P 3ED6  Luftmassenmesser 2 |
| 0x3EE0 | P 3EE0  Kuehlmitteltemperatursensor |
| 0x3EE1 | P 3EE1  Kuehlmitteltemperatursensor |
| 0x3EE2 | P 3EE2  Kuehlmitteltemperatursensor |
| 0x3EE3 | P 3EE3  Kuehlmitteltemperatursensor |
| 0x3EE5 | P 3EE5  Luftmassenmesser 2 |
| 0x3EE6 | P 3EE6  Luftmassenmesser 2 |
| 0x3EE7 | P 3EE7  Luftmassenmesser 2 |
| 0x3EF3 | P 3EF3  Kuehlmitteltemperatursensor Plausibilitaet |
| 0x3EF5 | P 3EF5  Ansauglufttemperatursensor 2 (Referenzsignal fuer Luftmassenmesser) |
| 0x3EF6 | P 3EF6  Ansauglufttemperatursensor 2 (Referenzsignal fuer Luftmassenmesser) |
| 0x3EF7 | P 3EF7  Ansauglufttemperatursensor 2 (Referenzsignal fuer Luftmassenmesser) |
| 0x3F00 | P 3F00  Ladedruckfuehler |
| 0x3F01 | P 3F01  Ladedruckfuehler |
| 0x3F02 | P 3F02  Ladedruckfuehler |
| 0x3F03 | P 3F03  Ladedruckfuehler |
| 0x3F05 | P 3F05  MIL OFF |
| 0x3F10 | P 3F10  Fahrpedalmodul Potentiometer 1 |
| 0x3F11 | P 3F11  Fahrpedalmodul Potentiometer 1 |
| 0x3F13 | P 3F13  Fahrpedalmodul Potentiometer 1 |
| 0x3F15 | P 3F15  MIL On |
| 0x3F20 | P 3F20  Fahrpedalmodul Potentiometer 2 |
| 0x3F21 | P 3F21  Fahrpedalmodul Potentiometer 2 |
| 0x3F23 | P 3F23  Fahrpedalmodul Potentiometer 2 |
| 0x3F25 | P 3F25  Ladeluftschlauch-Ueberwachung |
| 0x3F30 | P 3F30  Raildrucksensor |
| 0x3F31 | P 3F31  Raildrucksensor |
| 0x3F35 | P 3F35  Ladeluftschlauch-Ueberwachung im Leerlauf |
| 0x3F40 | P 3F40  Raildrucksensor Offset-Test |
| 0x3F41 | P 3F41  Raildrucksensor Offset-Test |
| 0x3F47 | P 3F47  Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F48 | P 3F48  Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F50 | P 3F50  Fahrgeschwindigkeitssignal |
| 0x3F52 | P 3F52  Fahrgeschwindigkeitssignal |
| 0x3F53 | P 3F53  Fahrgeschwindigkeitssignal |
| 0x3F57 | P 3F57  Ladedrucksteller |
| 0x3F62 | P 3F62  Fahrgeschwindigkeitssignal ueber CAN |
| 0x3F67 | P 3F67  Ladedrucksteller 2 |
| 0x3F70 | P 3F70  Ansauglufttemperatursensor |
| 0x3F71 | P 3F71  Ansauglufttemperatursensor |
| 0x3F72 | P 3F72  Ansauglufttemperatursensor |
| 0x3F77 | P 3F77  Ladedrucksteller |
| 0x3F80 | P 3F80  Umgebungstemperaturfuehler (nv) |
| 0x3F81 | P 3F81  Umgebungstemperaturfuehler (nv) |
| 0x3F82 | P 3F82  Umgebungstemperaturfuehler (nv) |
| 0x3F87 | P 3F87  Ladedrucksteller 2 |
| 0x3F90 | P 3F90  Oeldrucksensor (nv) |
| 0x3F91 | P 3F91  Oeldrucksensor (nv) |
| 0x3F97 | P 3F97  Ladedrucksteller |
| 0x3FA0 | P 3FA0  Oeltemperatursensor |
| 0x3FA1 | P 3FA1  Oeltemperatursensor |
| 0x3FA2 | P 3FA2  Oeltemperatursensor |
| 0x3FA7 | P 3FA7  Ladedrucksteller 2 |
| 0x3FB5 | P 3FB5  Ueberwachung Master/Slave |
| 0x3FB6 | P 3FB6  Ueberwachung Master/Slave |
| 0x3FB7 | P 3FB7  Ueberwachung Master/Slave |
| 0x3FC0 | P 3FC0  Luftmassenmesser |
| 0x3FC5 | P 3FC5  Ueberwachung Master/Slave faultpath for irreversible faults (BIT2 is set in statu |
| 0x3FD0 | P 3FD0  Luftmassenmesser |
| 0x3FE0 | P 3FE0  Luftmassenmesser |
| 0x3FE1 | P 3FE1  Luftmassenmesser |
| 0x3FE5 | P 3FE5  Ueberwachung Master/Slave faultpath for irreversible faults (BIT3 is set in statu |
| 0x3FF0 | P 3FF0  Luftmassenmesser |
| 0x3FF1 | P 3FF1  Luftmassenmesser |
| 0x3FF5 | P 3FF5  Ueberwachung Master/Slave faultpath for irreversible faults (BIT0 is set in statu |
| 0x4000 | P 4000  Kraftstofftemperaturfuehler |
| 0x4001 | P 4001  Kraftstofftemperaturfuehler |
| 0x4005 | P 4005  Ueberwachung Master/Slave faultpath for shut off Vehicle (BIT4 is set in status b |
| 0x4010 | P 4010  Abgasgegendruckfuehler vor Partikelfilter |
| 0x4011 | P 4011  Abgasgegendruckfuehler vor Partikelfilter |
| 0x4015 | P 4015  Ueberwachung Master/Slave faultpath for reversible faults (BIT5 is set in status  |
| 0x4020 | P 4020  Abgastemperaturfuehler vor Partikelfilter |
| 0x4021 | P 4021  Abgastemperaturfuehler vor Partikelfilter |
| 0x4025 | P 4025  Ueberwachung Master/Slave faultpath for reversible faults (BIT6 is set in status  |
| 0x4030 | P 4030  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4031 | P 4031  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4032 | P 4032  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4035 | P 4035  Ueberwachung Master/Slave faultpath for reversible faults (BIT1 is set in status  |
| 0x4040 | P 4040  DFP for SRC error of Tank 1 (nv) |
| 0x4041 | P 4041  DFP for SRC error of Tank 1 (nv) |
| 0x4042 | P 4042  DFP for SRC error of Tank 1 (nv) |
| 0x4060 | P 4060  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4061 | P 4061  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4062 | P 4062  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4063 | P 4063  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4065 | P 4065  Ueberwachung Master/Slave faultpath for private CAN (BIT7 is set in status byte 2 |
| 0x4072 | P 4072  Kupplungsschalter |
| 0x4073 | P 4073  Kupplungsschalter |
| 0x4075 | P 4075  Ueberwachung Master/Slave faultpath for Mil Lamp activation |
| 0x4082 | P 4082  Bremslicht-/Bremstestschalter |
| 0x4083 | P 4083  Bremslicht-/Bremstestschalter |
| 0x4085 | P 4085  Ueberwachung Master/Slave faultpath for SysLamp activation |
| 0x4093 | P 4093  Error path for AccPed and Brake Plausibility (nv) |
| 0x4095 | P 4095  Ueberwachung Master/Slave faultpath for fuel quantity limitation (BIT7 is set in  |
| 0x40A5 | P 40A5  Ueberwachung Master/Slave faultpath for coordination drive train (BIT5 is set in  |
| 0x40B5 | P 40B5  Ueberwachung Master/Slave faultpath for coordination vehicle (BIT6 is set in stat |
| 0x40C5 | P 40C5  Ueberwachung Master/Slave faultpath for external desired torque (BIT4 is set in s |
| 0x40D5 | P 40D5  Ueberwachung Master/Slave faultpath for torque limitation (BIT0 is set in status  |
| 0x40E0 | P 40E0  Generator |
| 0x40E5 | P 40E5  Ueberwachung Master/Slave faultpath for torque limitation (BIT1 is set in status  |
| 0x40F5 | P 40F5  Ueberwachung Master/Slave faultpath for torque limitation (BIT2 is set in status  |
| 0x4108 | P 4108  Ueberwachung Master/Slave |
| 0x4112 | P 4112  Fault path of air condition power stage (nv) |
| 0x4113 | P 4113  Fault path of air condition power stage (nv) |
| 0x4117 | P 4117  Ueberwachung Master/Slave |
| 0x4118 | P 4118  Ueberwachung Master/Slave |
| 0x4120 | P 4120  DDE-Hauptrelais |
| 0x4121 | P 4121  DDE-Hauptrelais |
| 0x4125 | P 4125  Speisespannung 4 |
| 0x4126 | P 4126  Speisespannung 4 |
| 0x4130 | P 4130  Drallklappe |
| 0x4135 | P 4135  Speisespannung 5 |
| 0x4136 | P 4136  Speisespannung 5 |
| 0x4141 | P 4141  Drallklappe |
| 0x4145 | P 4145  Speisespannung 6 |
| 0x4146 | P 4146  Speisespannung 6 |
| 0x4152 | P 4152  Drallklappe |
| 0x4153 | P 4153  Drallklappe |
| 0x4155 | P 4155  Abgasklappe |
| 0x4156 | P 4156  Abgasklappe |
| 0x4157 | P 4157  Abgasklappe |
| 0x4158 | P 4158  Abgasklappe |
| 0x4165 | P 4165  Partikelfiltersystem |
| 0x4166 | P 4166  Partikelfiltersystem |
| 0x4170 | P 4170  Additiv-Dosierpumpe (nv) |
| 0x4171 | P 4171  Additiv-Dosierpumpe (nv) |
| 0x4172 | P 4172  Additiv-Dosierpumpe (nv) |
| 0x4173 | P 4173  Additiv-Dosierpumpe (nv) |
| 0x4175 | P 4175  Partikelfiltersystem |
| 0x4176 | P 4176  Partikelfiltersystem |
| 0x4178 | P 4178  Partikelfiltersystem |
| 0x4180 | P 4180  Ladedrucksteller |
| 0x4185 | P 4185  Partikelfiltersystem |
| 0x4186 | P 4186  Partikelfiltersystem |
| 0x4188 | P 4188  Partikelfiltersystem |
| 0x4191 | P 4191  Ladedrucksteller |
| 0x4195 | P 4195  Drehmomentanforderung Klimaanlage |
| 0x41A2 | P 41A2  Ladedrucksteller |
| 0x41A3 | P 41A3  Ladedrucksteller |
| 0x41A6 | P 41A6  Botschaft (CBS_RESET, 0x580) |
| 0x41A7 | P 41A7  Botschaft (CBS_RESET, 0x580) |
| 0x41A8 | P 41A8  Botschaft (CBS_RESET, 0x580) |
| 0x41B0 | P 41B0  Abgasrueckfuehrsteller |
| 0x41B5 | P 41B5  Fault path for Gearbox Temperature |
| 0x41C0 | P 41C0  Abluftklappenansteuerung |
| 0x41C1 | P 41C1  Abluftklappenansteuerung |
| 0x41C2 | P 41C2  Abluftklappenansteuerung |
| 0x41C3 | P 41C3  Abluftklappenansteuerung |
| 0x41C5 | P 41C5  Ueberwachung Master/Slave faultpath for air system 7 |
| 0x41D1 | P 41D1  Abgasrueckfuehrsteller |
| 0x41E2 | P 41E2  Abgasrueckfuehrsteller |
| 0x41E3 | P 41E3  Abgasrueckfuehrsteller |
| 0x41F0 | P 41F0  Elektroluefter |
| 0x41F1 | P 41F1  Elektroluefter |
| 0x41F2 | P 41F2  Elektroluefter |
| 0x41F3 | P 41F3  Elektroluefter |
| 0x4203 | P 4203  Gluehsteuergeraet |
| 0x4211 | P 4211  Gluehkerze Zylinder 1 |
| 0x4212 | P 4212  Gluehkerze Zylinder 1 |
| 0x4213 | P 4213  Gluehkerze Zylinder 1 |
| 0x4221 | P 4221  Gluehkerze Zylinder 2 |
| 0x4222 | P 4222  Gluehkerze Zylinder 2 |
| 0x4223 | P 4223  Gluehkerze Zylinder 2 |
| 0x4231 | P 4231  Gluehkerze Zylinder 3 |
| 0x4232 | P 4232  Gluehkerze Zylinder 3 |
| 0x4233 | P 4233  Gluehkerze Zylinder 3 |
| 0x4241 | P 4241  Gluehkerze Zylinder 4 |
| 0x4242 | P 4242  Gluehkerze Zylinder 4 |
| 0x4243 | P 4243  Gluehkerze Zylinder 4 |
| 0x4251 | P 4251  Gluehkerze Zylinder 5 |
| 0x4252 | P 4252  Gluehkerze Zylinder 5 |
| 0x4253 | P 4253  Gluehkerze Zylinder 5 |
| 0x4261 | P 4261  Gluehkerze Zylinder 6 |
| 0x4262 | P 4262  Gluehkerze Zylinder 6 |
| 0x4263 | P 4263  Gluehkerze Zylinder 6 |
| 0x4271 | P 4271  Gluehkerze Zylinder 7 |
| 0x4272 | P 4272  Gluehkerze Zylinder 7 |
| 0x4273 | P 4273  Gluehkerze Zylinder 7 |
| 0x4281 | P 4281  Gluehkerze Zylinder 8 |
| 0x4282 | P 4282  Gluehkerze Zylinder 8 |
| 0x4283 | P 4283  Gluehkerze Zylinder 8 |
| 0x4293 | P 4293  Steuergeraet intern 16 |
| 0x42A0 | P 42A0  Gluehrelais (nv) |
| 0x42A1 | P 42A1  Gluehrelais (nv) |
| 0x42A2 | P 42A2  Gluehrelais (nv) |
| 0x42A3 | P 42A3  Gluehrelais (nv) |
| 0x42B1 | P 42B1  Gluehrelais (nv) |
| 0x42B2 | P 42B2  Gluehrelais (nv) |
| 0x42B5 | P 42B5  DrehzahlUeberwachung |
| 0x42C0 | P 42C0  Oeldruck-Kontrollleuchte |
| 0x42C1 | P 42C1  Oeldruck-Kontrollleuchte |
| 0x42C2 | P 42C2  Oeldruck-Kontrollleuchte |
| 0x42C3 | P 42C3  Oeldruck-Kontrollleuchte |
| 0x42D0 | P 42D0  Power Stage fault status for MIL (nv) |
| 0x42D1 | P 42D1  Power Stage fault status for MIL (nv) |
| 0x42D2 | P 42D2  Power Stage fault status for MIL (nv) |
| 0x42D3 | P 42D3  Power Stage fault status for MIL (nv) |
| 0x42D5 | P 42D5  Injektor Zylinder 7 |
| 0x42D6 | P 42D6  Injektor Zylinder 7 |
| 0x42D7 | P 42D7  Injektor Zylinder 7 |
| 0x42D8 | P 42D8  Injektor Zylinder 7 |
| 0x42E2 | P 42E2  Umschaltung Raildruckregelung PCV |
| 0x42E5 | P 42E5  Injektor Zylinder 7_1 |
| 0x42E6 | P 42E6  Injektor Zylinder 7_1 |
| 0x42E7 | P 42E7  Injektor Zylinder 7_1 |
| 0x42E8 | P 42E8  Injektor Zylinder 7_1 |
| 0x42F2 | P 42F2  Umschaltung Raildruckregelung MeUn |
| 0x42F5 | P 42F5  Injektor Zylinder 8 |
| 0x42F6 | P 42F6  Injektor Zylinder 8 |
| 0x42F7 | P 42F7  Injektor Zylinder 8 |
| 0x42F8 | P 42F8  Injektor Zylinder 8 |
| 0x4302 | P 4302  Mengenregelventil |
| 0x4303 | P 4303  Mengenregelventil |
| 0x4305 | P 4305  Injektor Zylinder 8_1 |
| 0x4306 | P 4306  Injektor Zylinder 8_1 |
| 0x4307 | P 4307  Injektor Zylinder 8_1 |
| 0x4308 | P 4308  Injektor Zylinder 8_1 |
| 0x4310 | P 4310  Mengenregelventil |
| 0x4315 | P 4315  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4316 | P 4316  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4317 | P 4317  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4318 | P 4318  Ueberwachung Master/Slave faultpath for CAN Error |
| 0x4321 | P 4321  Mengenregelventil |
| 0x4332 | P 4332  Raildruckregelventil |
| 0x4333 | P 4333  Raildruckregelventil |
| 0x4340 | P 4340  Raildruckregelventil |
| 0x4351 | P 4351  Raildruckregelventil |
| 0x4355 | P 4355  Ueberwachung Master/Slave faultpath for ARS error |
| 0x4360 | P 4360  Stromregelung fuer Raildruckregelventil |
| 0x4361 | P 4361  Stromregelung fuer Raildruckregelventil |
| 0x4362 | P 4362  Stromregelung fuer Raildruckregelventil |
| 0x4365 | P 4365  Ueberwachung Master/Slave faultpath for air system 0 |
| 0x4373 | P 4373  Plausibilitaet Luftmassen |
| 0x4378 | P 4378  Raildruckregelventil Test (nv) |
| 0x4382 | P 4382  Raildruckregelventil Stellertest |
| 0x4385 | P 4385  Ueberwachung Master/Slave faultpath for air system 1 |
| 0x4390 | P 4390  Ladelufttemperatursensor |
| 0x4391 | P 4391  Ladelufttemperatursensor |
| 0x4392 | P 4392  Ladelufttemperatursensor |
| 0x4397 | P 4397  Mengenregelventil Stellertest |
| 0x43A0 | P 43A0  Anlasssperr-Relais |
| 0x43A1 | P 43A1  Anlasssperr-Relais |
| 0x43A2 | P 43A2  Anlasssperr-Relais |
| 0x43A3 | P 43A3  Anlasssperr-Relais |
| 0x43A5 | P 43A5  Ueberwachung Master/Slave faultpath for air system 2 |
| 0x43B0 | P 43B0  Power Stage fault status for System lamp (nv) |
| 0x43B1 | P 43B1  Power Stage fault status for System lamp (nv) |
| 0x43B2 | P 43B2  Power Stage fault status for System lamp (nv) |
| 0x43B3 | P 43B3  Power Stage fault status for System lamp (nv) |
| 0x43B5 | P 43B5  Ueberwachung Master/Slave faultpath for air system 3 |
| 0x43C0 | P 43C0  Drosselklappe |
| 0x43C5 | P 43C5  Ueberwachung Master/Slave faultpath for air system 4 |
| 0x43D1 | P 43D1  Drosselklappe |
| 0x43E2 | P 43E2  Drosselklappe |
| 0x43E3 | P 43E3  Drosselklappe |
| 0x43E5 | P 43E5  Ueberwachung Master/Slave faultpath for DSC error (torque switch off) |
| 0x43F0 | P 43F0  Elektrischer Zuheizer |
| 0x43F1 | P 43F1  Elektrischer Zuheizer |
| 0x43F2 | P 43F2  Elektrischer Zuheizer |
| 0x43F3 | P 43F3  Elektrischer Zuheizer |
| 0x4403 | P 4403  Steuergeraet intern 17 |
| 0x4405 | P 4405  Ueberwachung Master/Slave faultpath for EGS error (torque switch off) |
| 0x4410 | P 4410  Injektor Zylinder 1 |
| 0x4411 | P 4411  Injektor Zylinder 1 |
| 0x4412 | P 4412  Injektor Zylinder 1 |
| 0x4413 | P 4413  Injektor Zylinder 1 |
| 0x4417 | P 4417  Ueberwachung Master/Slave |
| 0x441A | P 441A  Injektor Zylinder 1_1 |
| 0x441B | P 441B  Injektor Zylinder 1_1 |
| 0x441C | P 441C  Injektor Zylinder 1_1 |
| 0x441D | P 441D  Injektor Zylinder 1_1 |
| 0x4420 | P 4420  Injektor Zylinder 2 |
| 0x4421 | P 4421  Injektor Zylinder 2 |
| 0x4422 | P 4422  Injektor Zylinder 2 |
| 0x4423 | P 4423  Injektor Zylinder 2 |
| 0x4428 | P 4428  Ueberwachung Master/Slave |
| 0x442A | P 442A  Injektor Zylinder 2_1 |
| 0x442B | P 442B  Injektor Zylinder 2_1 |
| 0x442C | P 442C  Injektor Zylinder 2_1 |
| 0x442D | P 442D  Injektor Zylinder 2_1 |
| 0x4430 | P 4430  Injektor Zylinder 3 |
| 0x4431 | P 4431  Injektor Zylinder 3 |
| 0x4432 | P 4432  Injektor Zylinder 3 |
| 0x4433 | P 4433  Injektor Zylinder 3 |
| 0x4438 | P 4438  Ueberwachung Master/Slave |
| 0x443A | P 443A  Injektor Zylinder 3_1 |
| 0x443B | P 443B  Injektor Zylinder 3_1 |
| 0x443C | P 443C  Injektor Zylinder 3_1 |
| 0x443D | P 443D  Injektor Zylinder 3_1 |
| 0x4440 | P 4440  Injektor Zylinder 4 |
| 0x4441 | P 4441  Injektor Zylinder 4 |
| 0x4442 | P 4442  Injektor Zylinder 4 |
| 0x4443 | P 4443  Injektor Zylinder 4 |
| 0x444A | P 444A  Injektor Zylinder 4_1 |
| 0x444B | P 444B  Injektor Zylinder 4_1 |
| 0x444C | P 444C  Injektor Zylinder 4_1 |
| 0x444D | P 444D  Injektor Zylinder 4_1 |
| 0x4450 | P 4450  Injektor Zylinder 5 |
| 0x4451 | P 4451  Injektor Zylinder 5 |
| 0x4452 | P 4452  Injektor Zylinder 5 |
| 0x4453 | P 4453  Injektor Zylinder 5 |
| 0x4457 | P 4457  Botschaft (LENKRADWINKEL, 0xC4) |
| 0x4458 | P 4458  Botschaft (LENKRADWINKEL, 0xC4) |
| 0x445A | P 445A  Injektor Zylinder 5_1 |
| 0x445B | P 445B  Injektor Zylinder 5_1 |
| 0x445C | P 445C  Injektor Zylinder 5_1 |
| 0x445D | P 445D  Injektor Zylinder 5_1 |
| 0x4460 | P 4460  Injektor Zylinder 6 |
| 0x4461 | P 4461  Injektor Zylinder 6 |
| 0x4462 | P 4462  Injektor Zylinder 6 |
| 0x4463 | P 4463  Injektor Zylinder 6 |
| 0x446A | P 446A  Injektor Zylinder 6_1 |
| 0x446B | P 446B  Injektor Zylinder 6_1 |
| 0x446C | P 446C  Injektor Zylinder 6_1 |
| 0x446D | P 446D  Injektor Zylinder 6_1 |
| 0x4473 | P 4473  Steuergeraet intern 18 |
| 0x4480 | P 4480  Steuergeraet intern 19 |
| 0x4491 | P 4491  Steuergeraet intern 20 |
| 0x44A0 | P 44A0  Injektoren Bank 1 |
| 0x44A1 | P 44A1  Injektoren Bank 1 |
| 0x44A2 | P 44A2  Injektoren Bank 1 |
| 0x44A3 | P 44A3  Injektoren Bank 1 |
| 0x44AA | P 44AA  Injektoren Bank 1_1 |
| 0x44AB | P 44AB  Injektoren Bank 1_1 |
| 0x44AC | P 44AC  Injektoren Bank 1_1 |
| 0x44AD | P 44AD  Injektoren Bank 1_1 |
| 0x44B0 | P 44B0  Injektoren Bank 2 |
| 0x44B1 | P 44B1  Injektoren Bank 2 |
| 0x44B2 | P 44B2  Injektoren Bank 2 |
| 0x44B3 | P 44B3  Injektoren Bank 2 |
| 0x44BA | P 44BA  Injektoren Bank 2_1 |
| 0x44BB | P 44BB  Injektoren Bank 2_1 |
| 0x44BC | P 44BC  Injektoren Bank 2_1 |
| 0x44BD | P 44BD  Injektoren Bank 2_1 |
| 0x44C0 | P 44C0  Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C1 | P 44C1  Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C2 | P 44C2  Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44D0 | P 44D0  Generator |
| 0x44D2 | P 44D2  Generator |
| 0x44D3 | P 44D3  Generator |
| 0x44E2 | P 44E2  Generator |
| 0x44E3 | P 44E3  Generator |
| 0x44F0 | P 44F0  Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4501 | P 4501  Abgasrueckfuehr-Regelung |
| 0x4507 | P 4507  Abgasrueckfuehr-Regelung |
| 0x4512 | P 4512  Thermischer Oelniveausensor |
| 0x4513 | P 4513  Thermischer Oelniveausensor |
| 0x4521 | P 4521  Ladedruckregelung |
| 0x4530 | P 4530  Ladedruckregelung |
| 0x4541 | P 4541  Thermischer Oelniveausensor |
| 0x4550 | P 4550  Ladedrucksteller 2 |
| 0x4560 | P 4560  Raildruck-Plausibilitaet mengengeregelt |
| 0x4570 | P 4570  Raildruck-Plausibilitaet mengengeregelt |
| 0x4580 | P 4580  Raildruck-Plausibilitaet mengengeregelt |
| 0x4587 | P 4587  Kraftstofffilter |
| 0x4590 | P 4590  Raildruck-Plausibilitaet mengengeregelt |
| 0x45A0 | P 45A0  Raildruck-Plausibilitaet mengengeregelt |
| 0x45A5 | P 45A5  Ladelufttemperatursensor 2 |
| 0x45A6 | P 45A6  Ladelufttemperatursensor 2 |
| 0x45A7 | P 45A7  Ladelufttemperatursensor 2 |
| 0x45B5 | P 45B5  Ueberwachung Master/Slave faultpath for FrmMng_CoEng error (torque switch off) |
| 0x45C0 | P 45C0  Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x45C5 | P 45C5  Ueberwachung Master/Slave faultpath for FrmMngPT2 error (torque switch off) |
| 0x45D5 | P 45D5  Ueberwachung Master/Slave faultpath for FrmMngPT3 error (torque switch off) |
| 0x45E3 | P 45E3  Ueberwachung Master/Slave |
| 0x45E5 | P 45E5  Ueberwachung Master/Slave faultpath for stFrmMng_CoEng error (torque is limited) |
| 0x45F2 | P 45F2  Ueberwachung Master/Slave |
| 0x45F3 | P 45F3  Ueberwachung Master/Slave |
| 0x45F5 | P 45F5  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F6 | P 45F6  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F7 | P 45F7  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F8 | P 45F8  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x4600 | P 4600  Raildruck-Plausibilitaet druckgeregelt |
| 0x4610 | P 4610  Raildruck-Plausibilitaet druckgeregelt |
| 0x4620 | P 4620  Raildruck-Plausibilitaet druckgeregelt |
| 0x4630 | P 4630  Raildruck-Plausibilitaet druckgeregelt |
| 0x4640 | P 4640  Raildruck-Plausibilitaet druckgeregelt |
| 0x4650 | P 4650  Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4660 | P 4660  Versorgungsspannung |
| 0x4661 | P 4661  Versorgungsspannung |
| 0x4670 | P 4670  Speisespannung 1 |
| 0x4671 | P 4671  Speisespannung 1 |
| 0x4680 | P 4680  Speisespannung 2 |
| 0x4681 | P 4681  Speisespannung 2 |
| 0x4690 | P 4690  Speisespannung 3 |
| 0x4691 | P 4691  Speisespannung 3 |
| 0x46A0 | P 46A0  Steuergeraet intern 1 |
| 0x46A1 | P 46A1  Steuergeraet intern 1 |
| 0x46A2 | P 46A2  Steuergeraet intern 1 |
| 0x46A3 | P 46A3  Steuergeraet intern 1 |
| 0x46B0 | P 46B0  Steuergeraet intern 2 |
| 0x46B1 | P 46B1  Steuergeraet intern 2 |
| 0x46B2 | P 46B2  Steuergeraet intern 2 |
| 0x46B3 | P 46B3  Steuergeraet intern 2 |
| 0x46C0 | P 46C0  Steuergeraet intern 3 |
| 0x46C1 | P 46C1  Steuergeraet intern 3 |
| 0x46D0 | P 46D0  Steuergeraet intern 4 |
| 0x46D1 | P 46D1  Steuergeraet intern 4 |
| 0x46D2 | P 46D2  Steuergeraet intern 4 |
| 0x46D3 | P 46D3  Steuergeraet intern 4 |
| 0x4703 | P 4703  Steuergeraet intern 7 |
| 0x4711 | P 4711  Steuergeraet intern 8 |
| 0x4712 | P 4712  Steuergeraet intern 8 |
| 0x4713 | P 4713  Steuergeraet intern 8 |
| 0x4723 | P 4723  Steuergeraet intern 9 |
| 0x4730 | P 4730  Mengenregelventil Stromregelung |
| 0x4731 | P 4731  Mengenregelventil Stromregelung |
| 0x4732 | P 4732  Mengenregelventil Stromregelung |
| 0x4740 | P 4740  Steuergeraet intern 11 |
| 0x4750 | P 4750  Steuergeraet intern 12 |
| 0x4753 | P 4753  Steuergeraet intern 12 |
| 0x4763 | P 4763  Steuergeraet intern 13 (nv) |
| 0x4773 | P 4773  Steuergeraet intern 14 |
| 0x4780 | P 4780  Steuergeraet intern 15 |
| 0x4781 | P 4781  Steuergeraet intern 15 |
| 0x4782 | P 4782  Steuergeraet intern 15 |
| 0x4783 | P 4783  Steuergeraet intern 15 |
| 0x4793 | P 4793  Ueberwachung Master/Slave |
| 0x4803 | P 4803  Drehmomentueberwachung ACC |
| 0x4810 | P 4810  Drehmomenteingriff ACC |
| 0x4830 | P 4830  Ansauglufttemperatursensor |
| 0x4831 | P 4831  Ansauglufttemperatursensor |
| 0x4841 | P 4841  Abgasrueckfuehr-Regelung 2 |
| 0x4850 | P 4850  Abgasrueckfuehr-Regelung 2 |
| 0x4863 | P 4863  Fahrgeschwindigkeitsregelung |
| 0x4870 | P 4870  Aussetzerkennung in mehreren Zylindern |
| 0x4880 | P 4880  Aussetzerkennung Zylinder 1 |
| 0x4890 | P 4890  Aussetzerkennung Zylinder 2 |
| 0x48F2 | P 48F2  CAN Bus A |
| 0x48F3 | P 48F3  CAN Bus A |
| 0x4900 | P 4900  Momenteneingriff DSC (nv) |
| 0x4912 | P 4912  CAN Bus B |
| 0x4913 | P 4913  CAN Bus B |
| 0x4920 | P 4920  Momenteneingriff Getriebe (nv) |
| 0x4930 | P 4930  Aussetzerkennung Zylinder 3 |
| 0x4940 | P 4940  Aussetzerkennung Zylinder 4 |
| 0x4950 | P 4950  Aussetzerkennung Zylinder 5 |
| 0x4960 | P 4960  Aussetzerkennung Zylinder 6 |
| 0x4970 | P 4970  (FRM3) Botschaft |
| 0x4971 | P 4971  (FRM3) Botschaft |
| 0x4972 | P 4972  (FRM3) Botschaft |
| 0x4973 | P 4973  (FRM3) Botschaft |
| 0x4975 | P 4975  Aussetzerkennung Zylinder 7 |
| 0x4980 | P 4980  (FRM5) Botschaft |
| 0x4981 | P 4981  (FRM5) Botschaft |
| 0x4983 | P 4983  (FRM5) Botschaft |
| 0x4985 | P 4985  Aussetzerkennung Zylinder 8 |
| 0x4991 | P 4991  Botschaft (STAT_KOMBI, 0x1B4) |
| 0x4992 | P 4992  Botschaft (STAT_KOMBI, 0x1B4) |
| 0x4993 | P 4993  Botschaft (STAT_KOMBI, 0x1B4) |
| 0x49A2 | P 49A2  Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x49A3 | P 49A3  Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x49F2 | P 49F2  Botschaft (WHEEL_SPEED, 0xCE) |
| 0x49F3 | P 49F3  Botschaft (WHEEL_SPEED, 0xCE) |
| 0x4A02 | P 4A02  Klemme 15 |
| 0x4A03 | P 4A03  Klemme 15 |
| 0x4A10 | P 4A10  Bitserielle Datenschnittstelle BSD |
| 0x4A13 | P 4A13  Bitserielle Datenschnittstelle BSD |
| 0x4A22 | P 4A22  Ladedrucksteller 2 |
| 0x4A23 | P 4A23  Ladedrucksteller 2 |
| 0x4A30 | P 4A30  Multifunktionslenkrad |
| 0x4A31 | P 4A31  Multifunktionslenkrad |
| 0x4A32 | P 4A32  Multifunktionslenkrad |
| 0x4A33 | P 4A33  Multifunktionslenkrad |
| 0x4A40 | P 4A40  EWS Schnittstellenfehler |
| 0x4A41 | P 4A41  EWS Schnittstellenfehler |
| 0x4A42 | P 4A42  EWS Schnittstellenfehler |
| 0x4A43 | P 4A43  EWS Schnittstellenfehler |
| 0x4A51 | P 4A51  EWS EEPROM Wechselcodeablage fehlerhaft |
| 0x4A60 | P 4A60  EWS Manipulation |
| 0x4A61 | P 4A61  EWS Manipulation |
| 0x4A62 | P 4A62  EWS Manipulation |
| 0x4A63 | P 4A63  EWS Manipulation |
| 0x4A70 | P 4A70  Kennfeld FMTC_trq2qBas_MAP falsch |
| 0x4A80 | P 4A80  Ladeluftschlauch-Ueberwachung |
| 0x4AB2 | P 4AB2  Elektrischer Zuheizer |
| 0x4AC2 | P 4AC2  Elektrischer Zuheizer 2 (nv) |
| 0x4AD2 | P 4AD2  Elektrischer Zuheizer 3 (nv) |
| 0x4AE0 | P 4AE0  E-Boxluefter |
| 0x4AE1 | P 4AE1  E-Boxluefter |
| 0x4AE2 | P 4AE2  E-Boxluefter |
| 0x4AE3 | P 4AE3  E-Boxluefter |
| 0x4AF0 | P 4AF0  Steuergeraetetemperaturfuehler |
| 0x4AF1 | P 4AF1  Steuergeraetetemperaturfuehler |
| 0x4B00 | P 4B00  Steuergeraetetemperatur |
| 0x4B10 | P 4B10  Laufruheregler |
| 0x4B11 | P 4B11  Laufruheregler |
| 0x4B22 | P 4B22  Elektroluefter |
| 0x4B32 | P 4B32  Elektroluefter 2 (nv) |
| 0x4B42 | P 4B42  Elektroluefter 3 (nv) |
| 0x4B50 | P 4B50  Mengenabgleich |
| 0x4B60 | P 4B60  Mengendriftkompensation |
| 0x4B71 | P 4B71  ZMS Pulsation |
| 0x4B80 | P 4B80  Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x4B90 | P 4B90  Raildruckueberwachung bei Motorstart |
| 0x4BA0 | P 4BA0  Ansauglufttemperatursensor |
| 0x4BA1 | P 4BA1  Ansauglufttemperatursensor |
| 0x4BB0 | P 4BB0  Versorgungsspannung Luftmassenmesser |
| 0x4BB1 | P 4BB1  Versorgungsspannung Luftmassenmesser |
| 0x4BB5 | P 4BB5  Luftmassenmesser |
| 0x4BB6 | P 4BB6  Luftmassenmesser |
| 0x4BC0 | P 4BC0  Luftmassenmesser |
| 0x4BC1 | P 4BC1  Luftmassenmesser |
| 0x4BC2 | P 4BC2  Luftmassenmesser |
| 0x4BC5 | P 4BC5  Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BC6 | P 4BC6  Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BC7 | P 4BC7  Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BD2 | P 4BD2  Drehmomentanforderung ARS |
| 0x4BD5 | P 4BD5  Motorlager |
| 0x4BD6 | P 4BD6  Motorlager |
| 0x4BD7 | P 4BD7  Motorlager |
| 0x4BD8 | P 4BD8  Motorlager |
| 0x4BE2 | P 4BE2  Botschaft (GEARBX_DATA, 0xBA) |
| 0x4BE3 | P 4BE3  Botschaft (GEARBX_DATA, 0xBA) |
| 0x4BE7 | P 4BE7  Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x4BE8 | P 4BE8  Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x4BF2 | P 4BF2  Botschaft (HEAT_AC, 0x1B5) |
| 0x4BF3 | P 4BF3  Botschaft (HEAT_AC, 0x1B5) |
| 0x4BF7 | P 4BF7  Botschaft (MILEAGE_RANGE, 0x330) |
| 0x4BF8 | P 4BF8  Botschaft (MILEAGE_RANGE, 0x330) |
| 0x4C00 | P 4C00  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C01 | P 4C01  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C02 | P 4C02  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C03 | P 4C03  Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C06 | P 4C06  Botschaft (STAT_ARS, 0x1AC) |
| 0x4C07 | P 4C07  Botschaft (STAT_ARS, 0x1AC) |
| 0x4C08 | P 4C08  Botschaft (STAT_ARS, 0x1AC) |
| 0x4C12 | P 4C12  Botschaft (STAT_DSC, 0x19E) |
| 0x4C13 | P 4C13  Botschaft (STAT_DSC, 0x19E) |
| 0x4C15 | P 4C15  Botschaft (TERMINAL, 0x130) |
| 0x4C16 | P 4C16  Botschaft (TERMINAL, 0x130) |
| 0x4C17 | P 4C17  Botschaft (TERMINAL, 0x130) |
| 0x4C18 | P 4C18  Botschaft (TERMINAL, 0x130) |
| 0x4C20 | P 4C20  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C21 | P 4C21  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C22 | P 4C22  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C23 | P 4C23  Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C27 | P 4C27  Botschaft (VELOCITY, 0x1A0) |
| 0x4C28 | P 4C28  Botschaft (VELOCITY, 0x1A0) |
| 0x4C30 | P 4C30  (FRM1) Botschaft |
| 0x4C31 | P 4C31  (FRM1) Botschaft |
| 0x4C32 | P 4C32  (FRM1) Botschaft |
| 0x4C33 | P 4C33  (FRM1) Botschaft |
| 0x4C35 | P 4C35  (FRM2) Botschaft |
| 0x4C36 | P 4C36  (FRM2) Botschaft |
| 0x4C37 | P 4C37  (FRM2) Botschaft |
| 0x4C38 | P 4C38  (FRM2) Botschaft |
| 0x4C40 | P 4C40  Partikelfilterheizung |
| 0x4C41 | P 4C41  Partikelfilterheizung |
| 0x4C42 | P 4C42  Partikelfilterheizung |
| 0x4C43 | P 4C43  Partikelfilterheizung |
| 0x4C71 | P 4C71  fault path for the additive tank  component driver |
| 0x4C75 | P 4C75  Versorgungsspannung Luftmassenmesser 2 |
| 0x4C76 | P 4C76  Versorgungsspannung Luftmassenmesser 2 |
| 0x4CA2 | P 4CA2  Botschaft (POWERMANAGMENT_BATTERYVOLTAGE, 0x3B4) |
| 0x4CA3 | P 4CA3  Botschaft (POWERMANAGMENT_BATTERYVOLTAGE, 0x3B4) |
| 0x4CA5 | P 4CA5  Luftmassenmesser 2 |
| 0x4CA6 | P 4CA6  Luftmassenmesser 2 |
| 0x4CB2 | P 4CB2  Botschaft (PWRMNG_LOADV, 0x334) |
| 0x4CB3 | P 4CB3  Botschaft (PWRMNG_LOADV, 0x334) |
| 0x4CC0 | P 4CC0  (FRM4) Botschaft |
| 0x4CC3 | P 4CC3  (FRM4) Botschaft |
| 0x4CE0 | P 4CE0  Partikelfiltersystem |
| 0x4CF3 | P 4CF3  Partikelfiltersystem |
| 0x4D00 | P 4D00  Partikelfiltersystem |
| 0x4D01 | P 4D01  Partikelfiltersystem |
| 0x4D03 | P 4D03  Partikelfiltersystem |
| 0x4D13 | P 4D13  Partikelfiltersystem |
| 0x4D23 | P 4D23  Partikelfiltersystem |
| 0x4D40 | P 4D40  Partikelfiltersystem |
| 0x4D73 | P 4D73  Partikelfiltersystem |
| 0x4D81 | P 4D81  Ladedrucksteller 2 |
| 0x4DA3 | P 4DA3  Ladedruckregelung |
| 0x4DB0 | P 4DB0  Abgasrueckfuehrsteller 2 |
| 0x4DC1 | P 4DC1  Abgasrueckfuehrsteller 2 |
| 0x4DD2 | P 4DD2  Abgasrueckfuehrsteller 2 |
| 0x4DD3 | P 4DD3  Abgasrueckfuehrsteller 2 |
| 0x4DE0 | P 4DE0  Ueberwachung Master/Slave privater CAN |
| 0x4DE1 | P 4DE1  Ueberwachung Master/Slave privater CAN |
| 0x4DE2 | P 4DE2  Ueberwachung Master/Slave privater CAN |
| 0x4DE3 | P 4DE3  Ueberwachung Master/Slave privater CAN |
| 0x4DF0 | P 4DF0  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF1 | P 4DF1  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF2 | P 4DF2  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF3 | P 4DF3  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0xCD87 | P CD87  CAN Bus A |
| 0xCD8B | P CD8B  CAN Bus B |
| 0xFFFF | unbekannter Fehlerort |

### ID_14

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_15

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_16

| ORT | ORTTEXT |
| --- | --- |
| 0x612C | P Hardwarefehler Steuergeraet |
| 0x612E | P Fahrgestellnummernvergleich |
| 0x612F | P Codierdatenfehler |
| 0x6130 | P Boot- oder Flashfehler MPC |
| 0x6131 | P Flashvorgang oder -Fehler NEC |
| 0x6132 | P Serielle Schnittstelle zum SZL |
| 0x6133 | P Motorspannung |
| 0x6134 | P Motorstrom |
| 0x6136 | P Sensorversorgung Motorlage und -position |
| 0x6137 | P Motorlagesensor |
| 0x6138 | P Motor- Uebertemperatur |
| 0x6139 | P Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | P Versorgungsspannung Kl. 30 |
| 0x613B | P Fahrdynamiksensoren |
| 0x613C | P Winkelsummenbeziehung fehlerhaft |
| 0x613D | P elektr. Sperrenfehler |
| 0x613E | P mechanischer Sperrenfehler |
| 0x613F | P Lenkwinkelplausibilitaet |
| 0x6140 | P Lenkwinkelplausibilisierung CAN - Seriell |
| 0x6141 | P Motordynamikueberwachung |
| 0x6142 | P ECO-Ventil im SGM |
| 0x6143 | P Servoventil im SGM |
| 0x6144 | P Unvollstaendiger Powerdown |
| 0x6145 | P keine Ueberwachung der Winkelsummenbeziehung |
| 0x6146 | P Motortemperatursensor |
| 0x6147 | P Lenkwinkelsensorversorgung |
| 0x6148 | P Voterfehler diversitaeres Rechnen |
| 0x6149 | P kombinierte Lage- Drehzahlueberwachung |
| 0x614A | P Motorlagewinkel ungueltig |
| 0x614B | P ERCOSEK Fehler |
| 0xCE84 | P nicht benutzt |
| 0xCE85 | P nicht benutzt |
| 0xCE86 | P nicht benutzt |
| 0xCE87 | P F-CAN Kommunikationsfehler |
| 0xCE88 | P nicht benutzt |
| 0xCE89 | P nicht benutzt |
| 0xCE8A | P nicht benutzt |
| 0xCE8B | P PT-CAN Kommunikationsfehler |
| 0xCE8C | P nicht benutzt |
| 0xCE8D | P nicht benutzt |
| 0xCE8E | P nicht benutzt |
| 0xCE8F | P nicht benutzt |
| 0xCE90 | P nicht benutzt |
| 0xCE91 | P nicht benutzt |
| 0xCE92 | P nicht benutzt |
| 0xCE93 | P nicht benutzt |
| 0xCE94 | P Botschaft (Gierrate Antwort 1, ID=0CB) von Y_SENS_1 F-CAN |
| 0xCE95 | P Botschaft (Gierrate Antwort 2, ID=0C7) von Y_SENS_2 F-CAN |
| 0xCE96 | P Botschaft (Radgeschwindigkeiten, ID=0CE) von DSC F-CAN |
| 0xCE97 | P Botschaft (Radlenkwinkel, ID=0C3) von LWS_Rad F-CAN |
| 0xCE98 | P Botschaft (Regeleingriffe DSC, ID=11E) von DSC F-CAN |
| 0xCE99 | P Botschaft (Lenkradwinkel oben, ID=0C8) von SZL F-CAN |
| 0xCE9A | P Botschaft (Radtoleranzabgleich, ID=374) von DSC PT-CAN |
| 0xCE9B | P Botschaft (Fahrzeugzustand, ID=1A0) von DSC PT-CAN |
| 0xCE9C | P Botschaft (Status DSC, ID=19E) von DSC PT-CAN |
| 0xCE9D | P Botschaft (Motormoment 1, ID=0A8) von DME PT-CAN |
| 0xCE9E | P Botschaft (Motormoment 3, ID=0AA) von DME PT-CAN |
| 0xCE9F | P Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xCEA0 | P Botschaft (Status Lenkunterstuetzung, ID=0E0) von SGM PT-CAN |
| 0xCEA1 | P Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | P Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0xCEA3 | P Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
| 0x1001 | S Fehler a |
| 0x1002 | S Fehler b |
| 0x1003 | S Fehler c |
| 0x1004 | S Fehler d |
| 0x1005 | S Fehler e |
| 0x1006 | S Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### ID_17

| ORT | ORTTEXT |
| --- | --- |
| 0x6291 | P Motorspannung zu hoch |
| 0x6292 | P Motorspannung zu niedrig |
| 0x6293 | P Motorstrom zu hoch |
| 0x6294 | P Motorstrom zu niedrig |
| 0x6295 | P Motorstrom fehlt |
| 0x6296 | P Drehzahl fehlt |
| 0x6297 | P Drehzahl zu hoch |
| 0x6298 | P Drehzahl zu niedrig |
| 0x6299 | P Übertemperatur Highside-Treiber |
| 0x629A | P Übertemperatur Lowside-Treiber |
| 0x629C | P CRC-Fehler im EEPROM |
| 0x629D | P Default Kodierdaten |
| 0x629E | P CRASH/+Batterie-Abschaltung |
| 0xCEC7 | P CAN Bus-Off |
| 0xCED4 | P Timeout CAN-Message 0xAA (TORQUE_3) |
| 0x62A1 | S WakeUp zu hoch |
| 0x62A2 | S WakeUp fehlt |
| 0x62A3 | S KL30 fehlt |
| 0x62A4 | S KL30 zu hoch |
| 0x62A5 | S Drehz. zu niedrig bei KL30-Untersp. |
| 0x62A6 | S FLASH-Anforderung (DNMT) bei v oder n ungleich Null |
| 0xFFFF | unbekannter Fehlerort |

### ID_18

| ORT | ORTTEXT |
| --- | --- |
| 0x4E20 | P Druckregler EDS 1 |
| 0x4E21 | P Druckregler EDS 2 |
| 0x4E22 | P Druckregler EDS 3 |
| 0x4E23 | P Druckregler EDS 4 |
| 0x4E24 | P Druckregler EDS 5 |
| 0x4E25 | P Druckregler EDS 6 |
| 0x4E26 | P Stromfehler DR in P/R/N |
| 0x4E84 | P Magnetventil MV 1 |
| 0x4E85 | P Magnetventil MV 2 |
| 0x4E86 | P Magnetventil MV 3 |
| 0x4E87 | P Magnetventil MV 4 |
| 0x4E89 | P MV 1 oder MV 2 klemmt mechanisch |
| 0x4EE8 | P Sensor Eingangsdrehzahl N_Turbine |
| 0x4EE9 | P Sensor Abtriebsdrehzahl N_Abtrieb |
| 0x4EEB | P Abtriebsdrehzahlsensor - Gradient zu hoch |
| 0x4EF2 | P Sensor Getriebeoeltemperatur T_Oel |
| 0x4EF3 | P Sensor Substrattemperatur T_Substrat |
| 0x4F4C | P Symptom Gangueberwachung |
| 0x4F4D | P Gangueberwachung 1 |
| 0x4F4E | P Gangueberwachung 2 |
| 0x4F4F | P Gangueberwachung 3 |
| 0x4F50 | P Gangueberwachung 4 |
| 0x4F51 | P Gangueberwachung 5 |
| 0x4F52 | P Gangueberwachung 6 |
| 0x4F53 | P WK fehlerhaft geoeffnet |
| 0x4F4B | P Gangueberwachung R |
| 0x4F56 | P Symptom Schaltungsueberwachung |
| 0x4F57 | P Schaltungsueberwachung 1-2 |
| 0x4F58 | P Schaltungsueberwachung 2-3 |
| 0x4F59 | P Schaltungsueberwachung 3-4 |
| 0x4F5A | P Schaltungsueberwachung 4-5 |
| 0x4F5B | P Schaltungsueberwachung 5-6 |
| 0x4F5C | P Schaltungsueberwachung 2-1 |
| 0x4F5D | P Schaltungsueberwachung 3-2 |
| 0x4F5E | P Schaltungsueberwachung 4-3 |
| 0x4F5F | P Schaltungsueberwachung 5-4 |
| 0x4F60 | P Schaltungsueberwachung 6-5 |
| 0x4F6A | P Temperaturabschaltung EGS |
| 0x4F6B | P Oelalterungsschwelle |
| 0x4F6F | P Hohe Drehungleichförmigkeit |
| 0x4F70 | P Motorueberdrehzahl |
| 0x4F71 | P Kombi Timeout bei Notentriegelung betaetigt |
| 0x4FB0 | P Interner Fehler 1 (EPROM/FLASH) |
| 0x4FB1 | P Interner Fehler 2 (EEPROM) |
| 0x4FB2 | P Interner Fehler 3 (Watchdog) |
| 0x4FB3 | P Interner Fehler 4 (VRAM) |
| 0x5014 | P Batteriespannung |
| 0x5015 | P Versorgungsspannung Druckregler/Magnetventile |
| 0x5016 | P Versorgungsspannung Sensorik |
| 0x5079 | P Serielle Leitung Timeout |
| 0x507A | P Serielle Leitung Positionsinfo |
| 0x507B | P Parksperrensensoren unplausibel |
| 0x507C | P Parksperre fehlerhaft eingelegt |
| 0x507D | P Parksperre fehlerhaft ausgelegt |
| 0x50DC | P Doppelfehler Positionsinfo CAN / serielle Leitung |
| 0x50DD | P Kombination Ersatzfunktionen |
| 0x5140 | P CAN Timeout DME |
| 0x5141 | P CAN Timeout DSC |
| 0x5142 | P CAN Timeout Kombi |
| 0x5143 | P CAN Timeout ACC |
| 0x5144 | P CAN Timeout CAS |
| 0x5145 | P CAN Timeout EMF |
| 0x5146 | P CAN Timeout SSFA |
| 0x5147 | P CAN Timeout SZL |
| 0x5149 | P CAN Timeout PM |
| 0x5150 | P CAN Timeout AHM |
| 0x51A5 | P CAN Momentenschnittstelle |
| 0x51A7 | P CAN Motordrehzahl |
| 0x51A8 | P CAN Drosselklappe/Fahrpedal |
| 0x51AA | P CAN Positionsinfo |
| 0x51AB | P CAN P-Taster |
| 0x51AC | P CAN Schluessel steckt |
| 0x51AE | P CAN Bremssignal |
| 0xCF07 | P CAN Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_19

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_1A

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_1B

| ORT | ORTTEXT |
| --- | --- |
| 0x6001 | P Fehler A |
| 0x6002 | P Fehler B |
| 0x6003 | P Fehler C |
| 0x6004 | P Fehler D |
| 0x6005 | P Fehler E |
| 0x6006 | P Fehler F |
| 0x1001 | S Fehler a |
| 0x1002 | S Fehler b |
| 0x1003 | S Fehler c |
| 0x1004 | S Fehler d |
| 0x1005 | S Fehler e |
| 0x1006 | S Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### ID_1C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_1D

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_1E

| ORT | ORTTEXT |
| --- | --- |
| 0x6001 | P Fehler A |
| 0x6002 | P Fehler B |
| 0x6003 | P Fehler C |
| 0x6004 | P Fehler D |
| 0x6005 | P Fehler E |
| 0x6006 | P Fehler F |
| 0x1001 | S Fehler a |
| 0x1002 | S Fehler b |
| 0x1003 | S Fehler c |
| 0x1004 | S Fehler d |
| 0x1005 | S Fehler e |
| 0x1006 | S Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### ID_1F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_20

| ORT | ORTTEXT |
| --- | --- |
| 0x604C | P Klemmenfehler |
| 0x604D | P Fehler Steuergerät |
| 0x604E | P Fehler Reifendruck Control-System |
| 0x604F | P Fehler Übertragungskanal VL |
| 0x6050 | P Fehler Übertragungskanal VR |
| 0x6051 | P Fehler Übertragungskanal HL |
| 0x6052 | P Fehler Übertragungskanal HR |
| 0x6053 | P Fehler Übertragungskanal RR |
| 0x6054 | P Fehler Radsensor VL |
| 0x6055 | P Fehler Radsensor VR |
| 0x6056 | P Fehler Radsensor HL |
| 0x6057 | P Fehler Radsensor HR |
| 0x6058 | P Fehler Radsensor RR |
| 0x6059 | P Fehler Radsensor undefiniert |
| 0xD104 | P Fehler CAN-Low |
| 0xD107 | P Fehler Controller |
| 0xD13E | P Fehler Telegramm Timeout beim Empfang |
| 0x6065 | S Fehler Rad VL |
| 0x6066 | S Fehler Rad VR |
| 0x6067 | S Fehler Rad HL |
| 0x6068 | S Fehler Rad HR |
| 0x6069 | S Fehler Rad RR |
| 0x606A | S Fehler Rad undefiniert |
| 0xFFFF | unbekannter Fehlerort |

### ID_21

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | P Steuergeraetefehler |
| 0x5D0E | P Betriebsspannung |
| 0x5D0F | P Fehler Linsenheizung |
| 0x5D10 | P Plausibilitaet Applikationsparameter |
| 0x5D14 | P Sensor dejustiert |
| 0x5D25 | P Temperaturabschaltung SCU |
| 0xD147 | P Fehler CAN-Controller |
| 0xD17C | P Fehlerwert erhalten |
| 0xD17D | P unplausibles Signal empfangen |
| 0xD17E | P CAN-Timeout beim Empfang |
| 0xD181 | P unplausibles Signal gesendet |
| 0xD182 | P CAN-Timeout beim Senden |
| 0xCD35 | P ACC Sicherheitsabschaltung Bremsueberhitzung |
| 0xCD36 | P Fehler Umsetzung ACC-Sollwert durch Motor und Getriebe |
| 0xCD37 | P Fehler Umsetzung Beschleunigungssollwert im Bremsfall |
| 0xCD38 | P ACC von Partnersteuergeraet nicht erkannt |
| 0xCD39 | P ACC temporär nicht verfügbar wegen DSC Initialisierung oder Unterspannung |
| 0xFFFF | unbekannter Fehlerort |

### ID_22

| ORT | ORTTEXT |
| --- | --- |
| 0xA588 | P interner Fehler ALC-SG |
| 0xA589 | P Kommunikation mit StepperMoterBox 1 gestoert |
| 0xA58A | P Kommunikation mit StepperMoterBox 2 gestoert |
| 0xA58B | P Sensor Hoehenstand vorne defekt |
| 0xA58C | P Sensor Hoehenstand hinten defekt |
| 0xA58D | P Bremslichtschalter defekt |
| 0xA58E | P Energiesparmode aktiv |
| 0xA58F | P Fehler WAKE-Leitung |
| 0xA590 | P SMC links defekt |
| 0xA591 | P SMC rechts defekt |
| 0xA592 | P neuer Fehler 1 |
| 0xA593 | P neuer Fehler 2 |
| 0xA594 | P neuer Fehler 3 |
| 0xD187 | P Controller, Bus Off |
| 0x9308 | S EEPROM SMC links defekt |
| 0x9309 | S Motor Kurvenlicht SMC links defekt |
| 0x930A | S Motor LWR SMC links defekt |
| 0x930B | S Treiber Kurvenlicht SMC links defekt |
| 0x930C | S Spannungsversorgung Sensor SMC links defekt |
| 0x930D | S Signal Sensor SMC links defekt |
| 0x930E | S Flanke Sensor SMC links defekt |
| 0x930F | S LIN SMC links defekt |
| 0x9310 | S Schrittverlust Grenze 1 SMC links |
| 0x9311 | S Schrittverlust Grenze 2 SMC links |
| 0x9312 | S Schrittverlust Grenze 3 SMC links |
| 0x9313 | S Schrittverlust Grenze 4 SMC links |
| 0x9314 | S Schrittverlust Grenze 5 SMC links |
| 0x9315 | S Schrittverlust Grenze 6 SMC links |
| 0x9316 | S Spike auf Sensor SMS links |
| 0x9317 | S unbekannter Fehler 1 SMC links |
| 0x9318 | S unbekannter Fehler 2 SMC links |
| 0x9319 | S unbekannter Fehler 3 SMC links |
| 0x931A | S unbekannter Fehler 4 SMC links |
| 0x931B | S unbekannter Fehler 5 SMC links |
| 0x931C | S EEPROM SMC rechts defekt |
| 0x931D | S Motor Kurvenlicht SMC rechts defekt |
| 0x931E | S Motor LWR SMC rechts defekt |
| 0x931F | S Treiber Kurvenlicht SMC rechts defekt |
| 0x9320 | S Spannungsversorgung Sensor SMC rechts defekt |
| 0x9321 | S Signal Sensor SMC rechts defekt |
| 0x9322 | S Flanke Sensor SMC rechts defekt |
| 0x9323 | S LIN SMC rechts defekt |
| 0x9324 | S Schrittverlust Grenze 1 SMC rechts |
| 0x9325 | S Schrittverlust Grenze 2 SMC rechts |
| 0x9326 | S Schrittverlust Grenze 3 SMC rechts |
| 0x9327 | S Schrittverlust Grenze 4 SMC rechts |
| 0x9328 | S Schrittverlust Grenze 5 SMC rechts |
| 0x9329 | S Schrittverlust Grenze 6 SMC rechts |
| 0x932A | S Spike auf Sensor SMS rechts |
| 0x932B | S unbekannter Fehler 1 SMC rechts |
| 0x932C | S unbekannter Fehler 2 SMC rechts |
| 0x932D | S unbekannter Fehler 3 SMC rechts |
| 0x932E | S unbekannter Fehler 4 SMC rechts |
| 0x932F | S unbekannter Fehler 5 SMC rechts |
| 0x9330 | S Telegramm Geschwindigkeit ungueltig |
| 0x9331 | S Telegramm Gierrate Timeout oder ungueltig |
| 0x9332 | S Telegramm Lenkwinkel Timeout oder ungueltig |
| 0x9333 | S Telegramm Lampenzustand Timeout oder ungueltig |
| 0x9334 | S Telegramm Klemmenstatus Timeout oder ungueltig |
| 0x9335 | S Telegramm Steuerung ALC Timeout oder ungueltig |
| 0xFFFF | unbekannter Fehlerort |

### ID_23

| ORT | ORTTEXT |
| --- | --- |
| 0x5D4C | P Sicherheitsventil |
| 0x5D4D | P Richtungsventil |
| 0x5D4E | P Proportionalventil VA |
| 0x5D4F | P Proportionalventil HA |
| 0x5D50 | P Versorgung Drucksensor VA |
| 0x5D51 | P Versorgung Drucksensor HA |
| 0x5D52 | P Versorgung Schaltstellungssensor |
| 0x5D53 | P Versorgung Querbeschleunigungssensor |
| 0x5D54 | P Lernen Drucksensor VA |
| 0x5D55 | P Lernen Drucksensor HA |
| 0x5D56 | P frei |
| 0x5D57 | P Lernen Querbeschleunigungssensor |
| 0x5D58 | P Gradient Drucksensor VA |
| 0x5D59 | P Gradient Drucksensor HA |
| 0x5D5A | P Konsistenz LWL |
| 0x5D5B | P Konsistenz Druck VA |
| 0x5D5C | P Konsistenz Druck HA |
| 0x5D5D | P Konsistenz Querbeschleunigungssensor |
| 0x5D5E | P Konsistenz Strommessung Propventile |
| 0x5D5F | P Konsistenz Strommessung Schaltventile |
| 0x5D60 | P Oelstandsensor |
| 0x5D61 | P KL30 ARS-SG |
| 0x5D62 | P ECU intern |
| 0x5D63 | P Inbetriebnahme |
| 0x5D64 | P Codierdatenfehler |
| 0x5D65 | P Status Richtungsventil |
| 0x5D66 | P Predrive Check |
| 0xD1C7 | P CAN Bus Off |
| 0xD1C8 | P CAN frei |
| 0xD1C9 | P CAN frei |
| 0xD1CA | P CAN frei |
| 0xD1CB | P CAN frei |
| 0xD1CC | P CAN frei |
| 0xD1CD | P CAN frei |
| 0xD1CE | P CAN frei |
| 0xD1CF | P CAN frei |
| 0xD1D0 | P CAN frei |
| 0xD1D1 | P CAN frei |
| 0xD1D2 | P CAN frei |
| 0xD1D3 | P CAN frei |
| 0xD1D4 | P CAN frei |
| 0xD1D5 | P CAN frei |
| 0xD1D6 | P CAN frei |
| 0xD1D7 | P CAN frei |
| 0xD1D8 | P CAN frei |
| 0xD1D9 | P CAN frei |
| 0xD1DA | P CAN frei |
| 0xD1DB | P CAN frei |
| 0xD1DC | P CAN Status Quittierung Motor ARS |
| 0xD1DD | P CAN Beschleunigung Fahrzeug Quer DSC |
| 0xD1DE | P CAN Winkelgeschwindigkeit Gier DSC |
| 0xD1DF | P CAN Geschwindigkeit Fahrzeug |
| 0xD1E0 | P CAN Aussentemperatur |
| 0xD1E1 | P CAN Temperatur Motor Kuehlwasser |
| 0xD1E2 | P CAN Status Klemme 15 |
| 0xD1E3 | P CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xD1E4 | P CAN Lenkradwinkel |
| 0xD1E5 | P CAN Drehzahl Motor |
| 0xD1E6 | P CAN Geschwindigkeit Rad VL oder Rad VR |
| 0xD1E7 | P CAN Status EDCK Programm Komfort-Sport |
| 0xD1E8 | P CAN Gradient Lenkradwinkel |
| 0xD1E9 | P CAN Fahrgestellnummer |
| 0xD1EA | P CAN Bedienung EDCK Programm Komfort-Sport |
| 0xD1EB | P CAN Kilometerstand |
| 0xD1EC | P CAN Status ABS |
| 0xD1ED | P CAN Status DSC |
| 0xFFFF | unbekannter Fehlerort |

### ID_24

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_25

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_26

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_27

| ORT | ORTTEXT |
| --- | --- |
| 0xD2C4 | P K_CAN_LOW |
| 0xD2C5 | P K_CAN_HIGH |
| 0xD2C6 | P GroundShift |
| 0xD2C7 | P CAN_Controller |
| 0xD2FC | P Fehlerwert_erhalten |
| 0xD2FD | P Unplausibles_Signal |
| 0xD2FE | P Telegramm_Timeout_beim_Emfang |
| 0xD2FF | P Fehler_beim_Emfang_NM_Botschaft |
| 0xD300 | P Fehlerwert_gesendet |
| 0xD301 | P Unplausibles_Signal1 |
| 0xD302 | P Telegramm_Timeout_beim_Senden |
| 0xD303 | P Fehler_beim_Senden_NM_Botschaft |
| 0xA068 | P PGS_Innenraumantennen_vorne_defekt |
| 0xA069 | P Innenraumantennen_hinten_defekt |
| 0xA06A | P Kofferraumantenne_defekt |
| 0xA06B | P Stossfaengerantennen_defekt |
| 0xA072 | P PGS_RelaisTrei_defekt |
| 0xA073 | P PGS_PGS_WUP_geaendert |
| 0xA074 | P PGS_Reserve_Fehler_20 |
| 0xA075 | P PGS_Reserve_Fehler_19 |
| 0xA076 | P PGS_Reserve_Fehler_18 |
| 0xA077 | P PGS_Reserve_Fehler_17 |
| 0xA078 | P PGS_Reserve_Fehler_16 |
| 0xA079 | P PGS_Reserve_Fehler_15 |
| 0xA07A | P PGS_Reserve_Fehler_14 |
| 0xA07B | P PGS_Reserve_Fehler_13 |
| 0xA07C | P PGS_Reserve_Fehler_12 |
| 0xA07D | P PGS_Reserve_Fehler_11 |
| 0xA07E | P PGS_Reserve_Fehler_10 |
| 0xA07F | P PGS_Reserve_Fehler_09 |
| 0xA080 | P PGS_Reserve_Fehler_08 |
| 0xA081 | P PGS_Reserve_Fehler_07 |
| 0xA082 | P PGS_Reserve_Fehler_06 |
| 0xA083 | P PGS_Reserve_Fehler_05 |
| 0xA084 | P PGS_Reserve_Fehler_04 |
| 0xA085 | P PGS_Reserve_Fehler_03 |
| 0xA086 | P PGS_Reserve_Fehler_02 |
| 0xA087 | P PGS_Reserve_Fehler_01 |
| 0xA088 | P TAGE1_Watchdog_Reset |
| 0xA089 | P TAGE1_Watchdog_Timer |
| 0xA08A | P TAGE1_Abic_reagiert_nicht |
| 0xA08B | P TAGE1_Ubat_ausserhalb_ULF |
| 0xA08C | P TAGE1_Antennen defekt |
| 0xA08D | P TAGE1_Timeout_Kap_Sensor |
| 0xA08E | P TAGE1_Timeout_Dru_Sensor |
| 0xA08F | P TAGE1_Timeout_Zug_Sensor |
| 0xA090 | P TAGE1_Spielschutz_aktiv |
| 0xA091 | P TAGE1_Checksum_EEPROM |
| 0xA092 | P TAGE1_Checksum_ROM |
| 0xA093 | P TAGE1_Interrupt_unused |
| 0xA094 | P TAGE1_ErrorCode_unknown |
| 0xA095 | P TAGE1_Coding_TimeoutKBus |
| 0xA096 | P TAGE1_WUP_falsche_Antwort |
| 0xA097 | P TAGE1_WUP_keine_Antwort |
| 0xA098 | P TAGE2_Watchdog_Reset |
| 0xA099 | P TAGE2_Watchdog_Timer |
| 0xA09A | P TAGE2_Abic_reagiert_nicht |
| 0xA09B | P TAGE2_Ubat_ausserhalb_ULF |
| 0xA09C | P TAGE2_Antennen defekt |
| 0xA09D | P TAGE2_Timeout_Kap_Sensor |
| 0xA09E | P TAGE2_Timeout_Dru_Sensor |
| 0xA09F | P TAGE2_Timeout_Zug_Sensor |
| 0xA0A0 | P TAGE2_Spielschutz_aktiv |
| 0xA0A1 | P TAGE2_Checksum_EEPROM |
| 0xA0A2 | P TAGE2_Checksum_ROM |
| 0xA0A3 | P TAGE2_Interrupt_unused |
| 0xA0A4 | P TAGE2_ErrorCode_unknown |
| 0xA0A5 | P TAGE2_Coding_TimeoutKBus |
| 0xA0A6 | P TAGE2_WUP_falsche_Antwort |
| 0xA0A7 | P TAGE2_WUP_keine_Antwort |
| 0xA0A8 | P TAGE3_Watchdog_Reset |
| 0xA0A9 | P TAGE3_Watchdog_Timer |
| 0xA0AA | P TAGE3_Abic_reagiert_nicht |
| 0xA0AB | P TAGE3_Ubat_ausserhalb_ULF |
| 0xA0AC | P TAGE3_Antennen defekt |
| 0xA0AD | P TAGE3_Timeout_Kap_Sensor |
| 0xA0AE | P TAGE3_Timeout_Dru_Sensor |
| 0xA0AF | P TAGE3_Timeout_Zug_Sensor |
| 0xA0B0 | P TAGE3_Spielschutz_aktiv |
| 0xA0B1 | P TAGE3_Checksum_EEPROM |
| 0xA0B2 | P TAGE3_Checksum_ROM |
| 0xA0B3 | P TAGE3_Interrupt_unused |
| 0xA0B4 | P TAGE3_ErrorCode_unknown |
| 0xA0B5 | P TAGE3_Coding_TimeoutKBus |
| 0xA0B6 | P TAGE3_WUP_falsche_Antwort |
| 0xA0B7 | P TAGE3_WUP_keine_Antwort |
| 0xA0B8 | P TAGE4_Watchdog_Reset |
| 0xA0B9 | P TAGE4_Watchdog_Timer |
| 0xA0BA | P TAGE4_Abic_reagiert_nicht |
| 0xA0BB | P TAGE4_Ubat_ausserhalb_ULF |
| 0xA0BC | P TAGE4_Antennen defekt |
| 0xA0BD | P TAGE4_Timeout_Kap_Sensor |
| 0xA0BE | P TAGE4_Timeout_Dru_Sensor |
| 0xA0BF | P TAGE4_Timeout_Zug_Sensor |
| 0xA0C0 | P TAGE4_Spielschutz_aktiv |
| 0xA0C1 | P TAGE4_Checksum_EEPROM |
| 0xA0C2 | P TAGE4_Checksum_ROM |
| 0xA0C3 | P TAGE4_Interrupt_unused  |
| 0xA0C4 | P TAGE4_ErrorCode_unknown |
| 0xA0C5 | P TAGE4_Coding_TimeoutKBus |
| 0xA0C6 | P TAGE4_WUP_falsche_Antwort |
| 0xA0C7 | P TAGE4_WUP_keine_Antwort |
| 0xA0C8 | P Energiesparmode aktiv |
| 0x9308 | S PGS_Uebertemperatur |
| 0xFFFF | unbekannter Fehlerort |

### ID_28

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_29

| ORT | ORTTEXT |
| --- | --- |
| 0x5E90 | P Drehzahlfuehler hinten links Plausibilitaet |
| 0x5E91 | P Drehzahlfuehler hinten rechts Plausibilitaet |
| 0x5E92 | P Drehzahlfuehler vorne rechts Plausibilitaet |
| 0x5E93 | P Drehzahlfuehler vorne links Plausibilitaet |
| 0x5E9A | P Ventilrelais Fehler |
| 0x5E9B | P Rueckfoerderpumpe: (Langzeit-)Ueberwachung |
| 0x5EA1 | P Steuergeraet Fehler intern |
| 0x5EA3 | P Codierungs Fehler |
| 0x5EA4 | P Lambda Fehler: Radschlupf |
| 0x5EAA | P Drehzahlfuehler hinten links Leitungsfehler |
| 0x5EAB | P Drehzahlfuehler hinten rechts Leitungsfehler |
| 0x5EAC | P Drehzahlfuehler vorne rechts Leitungsfehler |
| 0x5EAD | P Drehzahlfuehler vorne links Leitungsfehler |
| 0x5EAE | P ASC Umschaltventil Vorderachse |
| 0x5EB5 | P Lenkwinkel Sensor Plausibilitaet |
| 0x5EBB | P Ventil Auslass hinten links |
| 0x5EBC | P Ventil Auslass hinten rechts |
| 0x5EBD | P Ventil Auslass vorne rechts |
| 0x5EBE | P Ventil Auslass vorne links |
| 0x5EBF | P Ventil Einlass hinten links |
| 0x5EC0 | P Ventil Einlass hinten rechts |
| 0x5EC1 | P Ventil Einlass vorne rechts |
| 0x5EC2 | P Ventil Einlass vorne links |
| 0x5EC3 | P Vorlade Ventil Vorderachse |
| 0xD347 | P CAN Fehler: Bus off, CAN Botschaft zu kurz |
| 0x5EC6 | P CAN Botschaftsfehler: Getriebe sendet nicht |
| 0x5EC7 | P DMER1 CAN Botschaftsfehler |
| 0x5ECB | P Lambda Fehler: v-Vergleich |
| 0x5ECC | P Lambda Fehler: Dauerregelung |
| 0x5ED0 | P DSC passiv, Einstreuung auf Uz |
| 0x5ED1 | P DMER2 CAN Botschaftsfehler |
| 0x5EDD | P Druck Sensor: Leitungsueberpruefung |
| 0x5EE0 | P Drehraten Sensor: Plausibilitaet |
| 0x5EE2 | P ASC Umschaltventil Hinterachse |
| 0x5EE3 | P Vorlade Ventil Hinterachse |
| 0x5EE4 | P Vorladepumpe: Unterbrechung,Kurzschluss,Kleber |
| 0x5EE5 | P Unterspannung |
| 0x5EE6 | P zeitbegrenzte Passivschaltung: LWS Initialisierung |
| 0x5EE7 | P Lenkwinkel Sensor: fehlende CAN Botschaft |
| 0x5EE8 | P Druck Sensor (Plausibilitaet Vorladepumpe) |
| 0x5EEA | P Drehraten Sensor: statischer Initialierungstest (Bite), dynamische Testauswertung |
| 0x5EEE | P zeitbegrenzte Passivschaltung: Bremse drucklos |
| 0x5EEF | P zeitbegrenzte Passivschaltung: Dauerregelung |
| 0x5EF3 | P Lenkwinkel Sensor: Aufsetzalgorithmus |
| 0x5EF4 | P Lenkwinkel Sensor: Steuergeraet intern |
| 0x5EF5 | P Bremslichtschalter: Pruefung ueber Plausibilitaet Drucksensor |
| 0x5EF6 | P Querbeschleunigungs Sensor: Plausibilitaet, ausserhalb gueltigem Bereich |
| 0x5EF7 | P Drehraten Sensor: Gradient |
| 0x5EF8 | P SN-Ueberwachung, Niveau Bremsfluessigkeit |
| 0x5EF9 | P Bandendetest |
| 0x5EFA | P Ueberspannung |
| 0x5EFB | P CAN Botschaft: Quittierung ASC kommt nicht |
| 0x5EFE | P Druck Sensor (Offset) |
| 0x5EFF | P Druck Sensor Einstreuung auf die Spannungsversorgung |
| 0x5F00 | P Bremsschalter Fehler |
| 0x5F01 | P Bremslichtschalter: dauerhaft aktiviert |
| 0x5F02 | P Status DME: Interner Fehler DME |
| 0x5F04 | P Drehraten Sensor: falsches Drehraten Signal erkannt |
| 0x5F05 | P Drehraten Sensor: Plausibilitaet falsches Drehraten Signal mit Warnlampenansteuerung |
| 0x5F06 | P ACC CAN Botschaftsfehler |
| 0x5F07 | P ACC Verzoegerungsanforderung Plausibilitaet |
| 0x5F08 | P ACC hat abgeschaltet, keine Aenderung Alive Zaehler |
| 0x5F0B | P Raddrehzahl Plausibilitaet |
| 0x5F0D | P DMER3 CAN Botschaftsfehler |
| 0x5F0E | P Drehraten Sensor: CAN Botschaftsfehler |
| 0x5F11 | P CS820 Vorsorgungsspannung Sensoren |
| 0x5F12 | P CAN Botschaftsfehler EMF |
| 0x5F13 | P CAN Botschaftsfehler ARS |
| 0x5F14 | P CAN Botschaftsfehler CAS |
| 0x5F15 | P CAN Botschaftsfehler Kombi |
| 0x5F16 | P zeitbegrenzte Passivschaltung: DRS Initialisierung |
| 0x5F17 | P Drehzahlfuehler vorne links falscher Typ |
| 0x5F18 | P Drehzahlfuehler vorne links Luftspalt zu gross |
| 0x5F19 | P Drehzahlfuehler vorne links Spannungsversorgung oder Signalqualitaet |
| 0x5F20 | P Drehzahlfuehler hinten links falscher Typ |
| 0x5F21 | P Drehzahlfuehler hinten links Luftspalt zu gross |
| 0x5F22 | P Drehzahlfuehler hinten links Spannungsversorgung oder Signalqualitaet |
| 0x5F23 | P Fahrleistungsreduzierung |
| 0x5F24 | P EMF Fehler Ueberhitzungsgefahr fuer Halbleiterrelais |
| 0x5F25 | P EMF Fehler Halbleiterrelais ueberhitzt |
| 0x5F1A | P Drehzahlfuehler hinten rechts falscher Typ |
| 0x5F1B | P Drehzahlfuehler hinten rechts Luftspalt zu gross |
| 0x5F1C | P Drehzahlfuehler hinten rechts Spannungsversorgung oder Signalqualitaet |
| 0x5F1D | P Drehzahlfuehler vorne rechts falscher Typ |
| 0x5F1E | P Drehzahlfuehler vorne rechts Luftspalt zu gross |
| 0x5F1F | P Drehzahlfuehler vorne rechts Spannungsversorgung oder Signalqualitaet |
| 0x5F26 | P Bremsbelagverschleiss Servicemeldung VA unplausibel |
| 0x5F27 | P Bremsbelagverschleiss Dicke VA < 3mm |
| 0x5F28 | P Bremsbelagverschleiss Servicemeldung HA unplausibel |
| 0x5F29 | P Bremsbelagverschleiss Dicke HA < 3mm |
| 0x5F2A | P DME Signal ungueltig |
| 0x5F2B | P Drehraten Sensor: ausbleibende Botschaft bei Zuendung aus waehrend der Fahrt |
| 0x5F0F | P Drehraten Sensor: temporaerer Fehler |
| 0xFFFF | unbekannter Fehlerort |

### ID_2A

| ORT | ORTTEXT |
| --- | --- |
| 0x600D | P ECU EEPROM |
| 0x600E | P ECU EEPROM DATEN |
| 0x600F | P ECU HW VERRIEGELUNG |
| 0x6010 | P ECU ANZIEHEN DEFEKT |
| 0x6011 | P ECU HALL |
| 0x6012 | P ECU LOESEN DEFEKT |
| 0x6013 | P ECU MOT KREIS |
| 0x6014 | P ECU MOT ABBRUCH |
| 0x6015 | P ECU ANSTEUER VERGLEICH |
| 0x601F | P ECU TEMPERATUR |
| 0x6020 | P PER EMF TASTE |
| 0x6022 | P PER FREIGABE TG |
| 0x6023 | P PER RDZ |
| 0x6025 | P PER KL30 |
| 0x6026 | P PER WAKE |
| 0x6030 | P MECH STELLWEG |
| 0x6031 | P MECH BLOCKIERT |
| 0x6032 | P MECH ROLLERKENNUNG |
| 0x6033 | P MECH KEP AZP |
| 0x6034 | P MECH UEBERTEMPERATUR |
| 0x6040 | P DSC INTF EMF S1 |
| 0x6041 | P DSC EMF QUIT |
| 0x6042 | P DSC HYDRAULIK |
| 0x6043 | P DSC FREIGABE ABBRUCH |
| 0x6044 | P DSC INTF EMF S2 |
| 0x6045 | P DSC KEINE GESCHW. |
| 0x6046 | P DSC FREIGABE |
| 0xD387 | P CAN GENERAL |
| 0xD3bd | P CAN RX SIGNAL |
| 0xd3be | P CAN RX |
| 0xd3c2 | P CAN TX |
| 0xFFFF | unbekannter Fehlerort |

### ID_2B

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_2C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_2D

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_2E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_2F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_30

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_31

| ORT | ORTTEXT |
| --- | --- |
| 0x9D28 | P Fehler Wechsler Mechanik CD laden |
| 0x9D29 | P Fehler Wechsler Mechanik CD entladen |
| 0x9D2A | P Fehler Wechsler Mechanik Elevator |
| 0x9D2B | P Fehler Magazin Auswurf |
| 0x9D2C | P Fehler Security Access |
| 0xD54E | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus (Error_Light_Not_Off). |
| 0xD550 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD551 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD552 | P Abgeschaltet wegen zu hoher Temperatur im Gerät (Error_TempShutDown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfänger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### ID_32

| ORT | ORTTEXT |
| --- | --- |
| 0xA5C8 | P Fehler MOST/CAN-Gateway |
| 0xA5C9 | P Fehler LCD/Inverter MMIGT |
| 0xA5CB | P FeTraWe-Mode für MOST-Verbund ist aktiv |
| 0xD584 | P CAN-Low, Physikalischer Busfehler |
| 0xD587 | P Controller, Bus off |
| 0xD58E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD590 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD591 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD592 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA5D0 | S Fehler IPC Startup |
| 0xA5D1 | S Fehler IPC Operation |
| 0xA5D2 | S Fehler Laden FPGA |
| 0xA5D3 | S Fehler OS8104 |
| 0xA5D4 | S Fehler FLASH-ROM |
| 0xA5D5 | S Fehler RAM |
| 0xA5D6 | S Fehler EEPROM |
| 0xA5D7 | S MMI-Rechner Temperatur zu hoch |
| 0xA5DA | S Fehler Ausgang FPGA |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### ID_33

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_34

| ORT | ORTTEXT |
| --- | --- |
| 0xA5E8 | P Fehler Speichertest MMI-Rechner |
| 0xA5F0 | S Fehler FLASH-ROM |
| 0xA5F1 | S Fehler RAM |
| 0xA5F2 | S Fehler Video-RAM |
| 0xA5F3 | S Fehler EEPROM |
| 0xA5FA | S Ueberlauf IPC-Queue |
| 0xA5FB | S Ueberlauf MMI-Task Queue |
| 0xA5FC | S Ueberlauf Grafik-Queue |
| 0xFFFF | unbekannter Fehlerort |

### ID_35

| ORT | ORTTEXT |
| --- | --- |
| 0xA288 | P Fehler Selbsttest! SVS defekt. |
| 0xD64E | P Error_Light_Not_Off |
| 0xD650 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD651 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD652 | P Ein Device hat sich wegen Übertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Licht aus, ohne ShutDown.Execute (Error_Sudden_Light_Off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfänger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9318 | S Bis zum Auftreten des Timeouts keine Rueckmeldung von MMI bzw. Navi erhalten. |
| 0x931A | S PTT ohne synchrone Kanaele. |
| 0x931B | S PTT ohne Notifizierung. |
| 0xFFFF | unbekannter Fehlerort |

### ID_36

| ORT | ORTTEXT |
| --- | --- |
| 0xD68C | P Ein Device hat die Monitoringnachricht nicht abgenommen oder bestätigt. (Error_Monitoring). |
| 0xD68D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD68E | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD68F | P Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xD690 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD691 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD692 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xD6A4 | P Notruftaster sendet keine Rückmeldung (NOT_TASTE_NOK). |
| 0xD6A5 | P K-Bus sendet keine Rückmeldung (K_BUS_NOK) |
| 0xD6A6 | P CAN-Bus sendet keine Rückmeldung (CAN_BUS_NOK) |
| 0xD6A7 | P TELCOMANDER sendet ungültigen Tasten Code (TELCOMANDER_INV_KEY) |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Licht am Eingang geht ohne Vorankündigung aus (Most_Sudden_Light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9338 | S Funkstrecke unterbrochen (WDCT_DISC). |
| 0x9339 | S GSM-Strecke unterbrochen (GSM_DISC). |
| 0xD68D | P Weckendes Device hat erfolglos 3mal versucht das Netzwerk zu wecken (Error_WakeUp_Failed). |
| 0xD68E | P Obwohl Shutdown (Execute) geschickt wurde, ging das Licht nicht aus (Error_Light_Not_Off). |
| 0xD690 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD691 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD685 | P Fehler NOT_TASTE_NOK |
| 0xD687 | P Fehler CAN_BUS_NOK |
| 0xD688 | P Fehler TELCOMANDER_INVALID_KEY |
| 0xD689 | P unbekannter Portable Fehler |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort, obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Trotz Low Level Widerholungen hat ein Empfaenger eine Nachricht nicht angenommen (Error_NAK). |
| 0xD68D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WAKEUP_Failed). |
| 0xD68E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD690 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose) |
| 0xD691 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD692 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA368 | Kurzschluß in der GPS-Antenne/Short at the GPS antenna(Error_HW_GPS_ANNTENNA_SHORT). |
| 0xA369 | GPS-Antenne nicht angeschlossen/GPS antenna not connected(Error_HW_GPS_ANTENNA_OPEN). |
| 0xA36A | Fehler im GPS-Modul/Failure in the gps module(Error_HW_GPS_HW). |
| 0xA36B | Kommunikation zwischen GPS-Modul und MOST gestoert/Communication between MOST and GPS module interrupted(Error_HW_GPS_COMM_FAIL). |
| 0xA36C | Kommunikation mit Telefon-Netzwerk nicht moeglich/Communication with network provider not possible(Error_HW_TRANSCEIVER_FAIL). |
| 0xA36D | Fehler Notruftaster nicht angeschlossen/Mayday - switch not connected(Error_HW_MAYDAY_SWITCH_DISCONNECTED). |
| 0xA36E | Notruf-LED ist ohne Funktion/Mayday - LED is without function(Error_HW_MAYDAY_LED_NOK). |
| 0xA370 | Notruftaster ist kurzgeschlossen/Mayday switch is pressed continuously(Error_HW_MAYDAY_SWITCH_SHORT). |
| 0xA373 | Fehler Non-volatile Speicherbereich/Error within Non-volatile memory(Error NVM_NOK). |
| 0xA374 | Notruftaster ohne Funktion/Mayday switch without function(Error_HW_MAYDAY_SWITCH_STUCK). |
| 0xA375 | Fehler Kommunikation mit Airbag-SG gestoert/Communication with Airbag device not OK(Error_IBUS_CONNECTION_FAIL). |
| 0xA376 | Fehler Kommunikation mit PhoneBoard gestoert/No communication with PhoneBoard(Error_CAN_TELECOMMANDER_FAIL). |
| 0xA377 | Fehler Nicht gueltiger PhoneBoard-Druck/Incorrect PhoneBoardpress(Error_TELCOMMANDER_KEYPAD_FAIL). |
| 0xA378 | unbekannter Portable Fehler/unknown Portable error(Error Portable_Handset). |
| 0xA379 | Fehler im Bluetooth-Interface/error in communication with Bluetooth-interface(Error_BT_INTERFACE). |
| 0xA37A | Energiesparmode aktiv |
| 0xA37C | Fehler in Telematics Sim/Error with the telematics sim. |
| 0xA37E | fehler mit backup battery/backup battery failure. |
| 0xA390 | fehler mit backup antenna/backup antenna fault. |
| 0xA391 | fehler mit GSM antenna/GSM antenna fault. |
| 0xA392 | fehler mit backup Loudspeaker/backup Loudspeaker fault. |
| 0xA397 | fehler mit BT Cradle Button/BT Cradle Button Stuck. |
| 0xA3A7 | fehler mit BT Cradle Button/BT Cradle Button Stuck. |
| 0xA398 | fehler mit Microphone 1/Microphone 1 fault. |
| 0xA399 | fehler mit Microphone 2/Microphone 2 fault. |
| 0xA3A0 | Prefit sim nicht angeschlossen/Prefit sim not present. |
| 0xA3A1 | fehler mit lesen prefit sim/Prefit sim read error. |
| 0xA3A2 | fehler mit Prefit sim PIN Locked/Prefit SIM PIN Locked. |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9312 | S Low RF. |
| 0x9313 | S Fehler mit NVM/NVM Corruption. |
| 0x9314 | S Kein Codieren des Devices moeglich/Error in coding data (Error_CODING_DATA). |
| 0x9315 | S Kommunikation mit Telefon-Netzwerk nicht moeglich/Communication with network provider not possible(Error_HW_TRANSCEIVER_FAIL). |
| 0x9316 | S unbekannter Portable Fehler/unknown Portable error(Error Portable_Handset). |
| 0xFFFF | unbekannter Fehlerort |

### ID_37

| ORT | ORTTEXT |
| --- | --- |
| 0xD6CC | P Ein Device hat die Monitoringnachricht nicht abgenommen oder bestätigt. (Error_Monitoring). |
| 0xD6CD | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD6CE | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD6CF | P Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xD6D0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD6D1 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD6D2 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA1A8 | P DSP defekt (Error_DSP_Funktion)  |
| 0xA1A9 | P Endstufen IC defekt (Error_Audio_Amplifier_IC)  |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9311 | S Error_CS: TH hat beim Aufstarten einen Checksummenfehler erkannt |
| 0x9312 | S Error_UT: TH hat Uebertemperatur erkannt |
| 0x9313 | S Error_SPG: TH hat bei Selbsttest Unterspannung Klemme 30 erkannt |
| 0xFFFF | unbekannter Fehlerort |

### ID_38

| ORT | ORTTEXT |
| --- | --- |
| 0x5F8E | P Sensor hinten links |
| 0x5F8F | P Sensor hinten rechts |
| 0x5F90 | P ECU Spannungsversorgung |
| 0x5F92 | P Sensorspannungsversorgung hinten links |
| 0x5F93 | P Sensorspannungsversorgung hinten rechts |
| 0x5F94 | P Magnetventil hinten links |
| 0x5F95 | P Magnetventil hinten rechts |
| 0x5F96 | P Ablass Ventil |
| 0x5F97 | P Kompressor-Relais |
| 0x5F98 | P Regelzeit einseitig heben hinten links |
| 0x5F99 | P Regelzeit einseitig heben hinten rechts |
| 0x5F9A | P Regelzeit heben |
| 0x5F9B | P Regelzeit senken |
| 0x5F9C | P Sensoraktivitaet hinten links |
| 0x5F9D | P Sensoraktivitaet hinten rechts |
| 0x5FB0 | P Steuergeraet interner Fehler |
| 0x5FB1 | P Checksummenfehler EEPromspeicher |
| 0x5FB2 | P Checksummenfehler Flashspeicher |
| 0x5FB3 | P Energiesparmode aktiv |
| 0xD704 | P K-CAN Transceiver LOW |
| 0xD707 | P K-CAN Controller BUS Off |
| 0xD710 | P K-CAN Botschaft(STAT_ZV_KLAPPEN,2FCh) |
| 0xD711 | P K-CAN Botschaft(ENGINE_1,1D0h) |
| 0xD712 | P K-CAN Botschaft(GESCHWINDIGKEIT,1A0h) |
| 0xD713 | P K-CAN Botschaft(KLEMMENSTATUS,130h) |
| 0xD73C | P K-CAN Fehlerwert erhalten |
| 0xD73D | P K-CAN unplausibles Signal |
| 0xD73E | P K-CAN Telegramm Timeout |
| 0xFFFF | unbekannter Fehlerort |

### ID_39

| ORT | ORTTEXT |
| --- | --- |
| 0x5FCC | P Beschl.-Signal vorne links zu klein |
| 0x5FCD | P Beschl.-Signal vorne links zu gross |
| 0x5FCE | P Beschl.-Signal vorne links unplausibel |
| 0x5FD0 | P Beschl.-Signal vorne rechts zu klein |
| 0x5FD1 | P Beschl.-Signal vorne rechts zu gross |
| 0x5FD2 | P Beschl.-Signal vorne rechts unplausibel |
| 0x5FD4 | P Beschl.-Signal hinten rechts zu klein |
| 0x5FD5 | P Beschl.-Signal hinten rechts zu gross |
| 0x5FD6 | P Beschl.-Signal hinten rechts unplausibel |
| 0x5FD8 | P Beschl.-Signale allgemein unplausibel |
| 0x5FE1 | P maximaler Lenkwinkel-Korrekturwert ueberschritten |
| 0x5FE2 | P CAN Bus off (bis VS2) |
| 0x5FE4 | P Ventile vorne Ueberstrom |
| 0x5FE5 | P Ventile hinten Ueberstrom |
| 0x5FE6 | P Ventilfehler Vorderachse |
| 0x5FE7 | P Ventilfehler Hinterachse |
| 0x5FE8 | P harter Kurzschluss Ventile Vorderachse |
| 0x5FE9 | P harter Kurzschluss Ventile Hinterachse |
| 0x5FF0 | P CAN-Fahrzeuggeschwindigkeit: Timeout oder ungueltig |
| 0x5FF1 | P analog Radgeschwindigkeit links: Abweichung zu gross |
| 0x5FF2 | P analog Radgeschwindigkeit rechts: Abweichung zu gross |
| 0x5FF3 | P CAN-Radgeschwindigkeit vorne links: Abweichung zu gross |
| 0x5FF4 | P CAN-Radgeschwindigkeit vorne rechts: Abweichung zu gross |
| 0x5FF5 | P CAN-Aussentemperatur: Timeout oder ungueltig |
| 0x5FF6 | P CAN-Kilometerstand: Timeout oder ungueltig |
| 0x5FF7 | P CAN-Lenkwinkel: Timeout oder ungueltig |
| 0x5FF8 | P CAN-Radgeschwindigkeiten: Timeout oder ungueltig |
| 0x5FF9 | P EDCK nicht kodiert |
| 0x5FFA | P Versorgungsspannung Beschl.-Sensoren: Abweichung zu gross |
| 0x5FFB | P Abweichung Klemme EDC zu gross |
| 0x5FFC | P Abweichung Klemme 30 zu gross |
| 0x5FFD | P Abweichung WakeUp-Leitung zu gross |
| 0x5FFE | P Abweichung KL_EDC-Leitung zu gross |
| 0x5FFF | P CAN-Klemmenstatus: Timeout oder ungueltig |
| 0x6004 | P EDCK-SW im Entwicklermodus |
| 0x600A | P EEPROM-Fehler |
| 0xD747 | P CAN Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_3A

| ORT | ORTTEXT |
| --- | --- |
| 0xD78D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD78E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD790 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose).   |
| 0xD791 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD792 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA1C8 | P DSP defekt (Error_DSP_Funktion)  |
| 0xA1C9 | P Endstufen IC defekt (Error_Audio_Amplifier_IC)  |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer)  |
| 0x930C | S Kurze Unlocks (Error_unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK).  |
| 0x9311 | S Error_CS: KHI hat beim Aufstarten einen Checksummenfehler erkannt |
| 0x9312 | S Error_UT: KHI hat Uebertemperatur erkannt |
| 0x9313 | S Error_SPG: KHI hat bei Selbsttest Unterspannung Klemme 30 erkannt |
| 0xFFFF | unbekannter Fehlerort |

### ID_3B

| ORT | ORTTEXT |
| --- | --- |
| 0xD7CE | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD7D0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD7D1 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD7D2 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfänger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA3E8 | S Checksum Fehler oder Image nicht wie erwartet (Error_Image). |
| 0xA3E9 | S RAM-Test fehlgeschlagen (Error_RAM). |
| 0xA3EA | S OLIC Error (Error_OLIC). |
| 0xA3EB | S 1 oder mehr Spannungen nicht wie erwartet (Error_SUPPLY). |
| 0xA3EC | S Fehler im Grafikprozessor (Error_TRIMEDIA). |
| 0xA3ED | S Lüfter Fehler (Error_FAN). |
| 0xA3EE | S Kommunikation mit OCN gestört oder NVR defekt(Error_OCNCOMM). |
| 0xA3EF | S Fehler bei Selbsttest Durchfuehrung (Error_SELFTEST). |
| 0xFFFF | unbekannter Fehlerort |

### ID_3C

| ORT | ORTTEXT |
| --- | --- |
| 0x9D28 | P Fehler Wechsler Mechanik CD laden |
| 0x9D29 | P Fehler Wechsler Mechanik CD entladen |
| 0x9D2A | P Fehler Wechsler Mechanik Elevator |
| 0x9D2B | P Fehler Magazin Auswurf |
| 0xD80E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD810 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD811 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD812 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9408 | S Betriebstemperatur im unzulaessigen Bereich (<-20 Grad C bzw. >70 Grad C) |
| 0x9409 | S Betriebsspannung fuer mehr als 10s im unzulaessigen Bereich (<9V bzw >16V) |
| 0x940A | S Sound skip fuer laenger als 1 s |
| 0x940B | S Table of Content der CD nicht lesbar |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### ID_3D

| ORT | ORTTEXT |
| --- | --- |
| 0xA4E8 | Schalter (ein/aus), Überspannung oder Unterspannung |
| 0xA4E9 | Schaltregler NT LED Array |
| 0xA4EA | Backlight LED |
| 0xA4EB | Bordnetzspannung, Überspannung oder Unterspannung |
| 0xA4EC | Temperaturfühler LED |
| 0xA4ED | Interner Fotosensor |
| 0xA4EE | Kommunikation Master - Slave gestört |
| 0xA4EF | EEPROM - Kodierdatenfehler VDO |
| 0xA4F0 | EEPROM - Kodierdatenfehler BMW |
| 0xA4F1 | CAN: No ID |
| 0xA4F2 | CAN: Ausfall Telegramm Klemmenstatus |
| 0xA4F3 | CAN: Ausfall/Fehler Telegramm Anzeige ACC |
| 0xA4F4 | CAN: Ausfall Telegramm Geschwindigkeit |
| 0xA4F5 | CAN: Ausfall/Fehler Telegramm Status Kombi |
| 0xA4F6 | CAN: Ausfall Telegramm Regelgeschwindigkeit Stufentempomat |
| 0xA4F7 | CAN: Ausfall Telegramm Bedienung HUD |
| 0xA4F8 | CAN: Ausfall Telegramm Einheiten |
| 0xA4F9 | CAN: Ausfall Telegramm Status Fahrlicht |
| 0xA4FA | CAN: Ausfall Telegramm Kilometer/Reichweite |
| 0xA4FB | CAN: Ausfall/Fehler Telegramm Anzeigesteuerung CC-Meldung |
| 0xA4FC | CAN: Ausfall Telegramm Status Bordcomputer |
| 0xA4FD | CAN: Ausfall Telegramm Anzeige Kombi/Externe Anzeige |
| 0xA4FE | CAN: physikalischer Fehler EIN |
| 0xA4FF | CAN: Senden misslungen |
| 0xA500 | CAN: kein Acknowledge |
| 0xA501 | CAN: Bus off |
| 0xA502 | CAN: Signal ungültig |
| 0xA503 | CAN: Ausfall Telegramm Personalisierung Erweitert |
| 0xA504 | CAN: Ausfall Telegramm Personalisierung Standard |
| 0xA505 | CAN: No Answer to Request (580h+3Dh) |
| 0xA506 | Energiesparmode aktiv |
| 0xD844 | CAN: Low |
| 0xD847 | CAN: Bus off oder dual ported RAM |
| 0xD84D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD84E | Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD850 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD851 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD852 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9400 | Helligkeitsreduzierung aufgrund zu niedriger Bordnetzspannung |
| 0x9401 | Helligkeitsreduzierung aufgrund zu hoher LED Array Temperatur |
| 0xFFFF | unbekannter Fehlerort |

### ID_3E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_3F

| ORT | ORTTEXT |
| --- | --- |
| 0xD8CD | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD8CE | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD8CF | P Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xD8D0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD8D1 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD8D2 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA188 | P DSP defekt (Error_DSP_Funktion)  |
| 0xA189 | P Endstufen IC defekt (Error_Audio_Amplifier_IC)   |
| 0xA18A | P Laufwerk defekt (Error_Single_Player)   |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9311 | S Error_CS: ASK hat beim Aufstarten einen Checksummenfehler erkannt |
| 0x9312 | S Error_UT: ASK hat Uebertemperatur erkannt |
| 0x9313 | S Error_SPG: ASK hat bei Selbsttest Unterspannung Klemme 30 erkannt |
| 0x9314 | S Error_Loudness: ASK hat Loudnessfehler eines Verstärkers detektiert |
| 0x9317 | S Ein Device hat die Monitoringnachricht nicht abgenommen oder bestätigt. (Error_Monitoring). |
| 0xFFFF | unbekannter Fehlerort |

### ID_40

| ORT | ORTTEXT |
| --- | --- |
| 0xD904 | P K_CAN_LOW_SYS, Physikalischer Busfehler D904 |
| 0xD905 | P K_CAN_HIGH_SYS                          D905 |
| 0xD906 | P GroundShift_SYS                         D906 |
| 0xD907 | P CAN_Controller_SYS, Bus off             D907 |
| 0xD93C | P Fehlerwert_erhalten_SYS                 D93C |
| 0xD93D | P Unplausibles_Signal_SYS                 D93D |
| 0xD93E | P Telegramm_Timeout_beim_Emfang_SYS       D93E |
| 0xD93F | P Fehler_beim_Emfang_NM_Botschaft_SYS     D93F |
| 0xD940 | P Fehlerwert_gesendet_SYS                 D940 |
| 0xD941 | P Unplausibles_Signal1_SYS                D941 |
| 0xD942 | P Telegramm_Timeout_beim_Senden_SYS       D942 |
| 0xD943 | P Fehler_beim_Senden_NM_Botschaft_SYS     D943 |
| 0xE904 | P K_CAN_LOW_PER, Physikalischer Busfehler E904 |
| 0xE905 | P K_CAN_HIGH_PER                          E905 |
| 0xE906 | P GroundShift_PER                         E906 |
| 0xE907 | P CAN_Controller_PER, Bus off             E907 |
| 0xE93C | P Fehlerwert_erhalten_PER                 E93C |
| 0xE93D | P Unplausibles_Signal_PER                 E93D |
| 0xE93E | P Telegramm_Timeout_beim_Emfang_PER       E93E |
| 0xE93F | P Fehler_beim_Emfang_NM_Botschaft_PER     E93F |
| 0xE940 | P Fehlerwert_gesendet_PER                 E940 |
| 0xE941 | P Unplausibles_Signal1_PER                E941 |
| 0xE942 | P Telegramm_Timeout_beim_Senden_PER       E942 |
| 0xE943 | P Fehler_beim_Senden_NM_Botschaft_PER     E943 |
| 0xA0A8 | P RAM_CRC_FEHLER                  A0A8 |
| 0xA0AA | P BootFlash_CRC_FEHLER            A0AA |
| 0xA0AB | P ProgFlash_CRC_FEHLER            A0AB |
| 0xA0AC | P SG_Fehler_COP_CM_TRAP           A0AC |
| 0xA0AD | P EEPROM_WRITE_FEHLER             A0AD |
| 0xA0AE | P Energiesparmode aktiv           A0AE |
| 0xA0B0 | P SG_Eingang_Bremselicht          A0B0 |
| 0xA0B1 | P SG_Eingang_P_N                  A0B1 |
| 0xA0B2 | P Fehler_CAS_Versorgung           A0B2 |
| 0xA0B3 | P Fehler_Ansteurung_Anlasser_KL50 A0B3 |
| 0xA0B4 | P Fehler_Motorstart_Anlasserbetrieb A0B4 |
| 0xA0B5 | P DFAHL_Kabelbruch                A0B5 |
| 0xA0B8 | P Hallsensor_verrastet            A0B8 |
| 0xA0B9 | P Hallsensor_eject                A0B9 |
| 0xA0BA | P Hallsensor_SSTA                 A0BA |
| 0xA0BB | P Hallsensor_SSTB                 A0BB |
| 0xA0BC | P Hubmagnet_AZSP                  A0BC |
| 0xA0BD | P KL15_Wakeup_Ausgangstreiber     A0BD |
| 0xA0BE | P Treiber_KL15_1_FZG_KS           A0BE |
| 0xA0BF | P Treiber_KL15_2_FZG_KS           A0BF |
| 0xA0C0 | P Treiber_KL15_3_FZG_KS           A0C0 |
| 0xA0C1 | P Treiber_KL50L_KS                A0C1 |
| 0xA0C2 | P Treiber_KL50RS_KS               A0C2 |
| 0xA0C3 | P KL15_WUP_ACC_KS                 A0C3 |
| 0xA0C4 | P Treiber_KL15_4_FZG_KS           A0C4 |
| 0xA0C5 | P MFS_Signal_fehlt                A0C5 |
| 0xA0C6 | P Treiber_KLR_KS                  A0C6 |
| 0xA0C7 | P Treiber_KLR_MRS_KS              A0C7 |
| 0xA0C8 | P Komfort_Schliesszylinder_FAT    A0C8 |
| 0xA0CC | P Komfort_FBD                     A0CC |
| 0xA0CF | P Komfort_Tueraussengriff         A0CF |
| 0xA0E0 | P Centerlock_Taster_Verriegeln    A0E0 |
| 0xA0E1 | P Centerlock_Taster_Entriegeln    A0E1 |
| 0xA0F0 | P Fehler_Basestation_Antenne      A0F0 |
| 0xA0F1 | P Fehler_TRSP_Page3               A0F1 |
| 0xA0F2 | P Fehler_Typ_Nachschluessel       A0F2 |
| 0xA0F3 | P Fehler_TRSP_Cryptodaten         A0F3 |
| 0xA100 | P DME_Lost                        A100 |
| 0xA102 | P DME_Drehzahl                    A102 |
| 0xA120 | P Treiber_KL30G_KS                A120 |
| 0x9304 | S EEPROM_CRC_FEHLER |
| 0x9305 | S Unterspannung_SG_Info |
| 0x9306 | S Ueberspannung_SG_Info |
| 0x9404 | S Unplausibilitaet_SG_Spannung_Info |
| 0x9405 | S Unplausibilitaet_Bremslicht_Info |
| 0x9406 | S Unplausibilitaet_P_N_Info |
| 0x9604 | S Keine_Antwort_auf_KISI_aktiv_Info |
| 0x9605 | S Keine_Antwort_auf_KISI_deakt_Info |
| 0x9804 | S DVD_in_Wiederholsperre_Info |
| 0x9805 | S DVDR_in_Wiederholsperre_Info |
| 0x9806 | S PSD_in_Wiederholsperre_Info |
| 0x9807 | S PSDR_in_Wiederholsperre_Info |
| 0x9808 | S PM_in_Wiederholsperre_Info |
| 0x9809 | S Keine_Bestaetigung_KiSi_DVD_Info |
| 0x980A | S Keine_Bestaetigung_KiSi_DVDR_Info |
| 0x980B | S DVD_bestaet_ZV_Aenderung_nicht_Info |
| 0x980C | S DVDR_bestaet_ZV_Aenderung_nicht_Info |
| 0x980D | S PSD_bestaet_ZV_Aenderung_nicht_Info |
| 0x980E | S PSDR_bestaet_ZV_Aenderung_nicht_Info |
| 0x980F | S PM_bestaet_ZV_Aenderung_nicht_Info |
| 0x9904 | S Fehler_TRSP_Initialisierung |
| 0x9905 | S Fehler_Wert_TRSP_Initdone |
| 0x9906 | S Fehler_TRSP_Kommunikation |
| 0x9907 | S Gesperrter_Schluessel |
| 0x9908 | S TRSP_Nicht_Zugehoerig |
| 0x9909 | S Kein_TRSP_ID_Erkannt |
| 0x990A | S Nachlauf_EWS_Aktiv |
| 0xFFFF | unbekannter Fehlerort |

### ID_41

| ORT | ORTTEXT |
| --- | --- |
| 0x9CE8 | P Ram Fehler |
| 0x9CE9 | P Flash Checksummen Fehler |
| 0x9CEA | P EEprom Fehler |
| 0x9CEB | P AD-Wandler Fehler |
| 0x9CEC | P Ultraschall Sensorik defekt |
| 0x9CF9 | P DWA-Led defekt |
| 0x9D00 | P Komunikationsfehler mit der Sirene |
| 0x9D0C | P DWA-Bus Fehler |
| 0x9D20 | P Energiesparmode aktiv |
| 0xD944 | P K-Can Physikalischer Fehler |
| 0xD947 | P K-Can Bus-Off |
| 0xD97E | P K-Can Request nicht beantwortet |
| 0x9308 | S US-Sensorik vorne unplausibles Signal |
| 0x9309 | S US-Sensorik hinten unplausibles Signal |
| 0x930A | S Klappenkontakt fehlerhaft |
| 0x9314 | S Deaktivierung US/NG |
| 0xFFFF | unbekannter Fehlerort |

### ID_42

| ORT | ORTTEXT |
| --- | --- |
| 0x5d2c | P KL30 |
| 0x5d2d | P ECU intern |
| 0x5d2f | P MLSL+ |
| 0x5d30 | P MLSL- |
| 0x5d31 | P MLSN+ |
| 0x5d32 | P MLSN- |
| 0x5d35 | P Hallsensor Laengs |
| 0x5d36 | P Hallsensor Neigung |
| 0x5d38 | P Positionsdaten |
| 0x5d39 | P EEPROM-Fehler |
| 0x60bb | P DWS-Geschwindigkeitsimpulse VL |
| 0x60ba | P DWS-Geschwindigkeitsimpulse VR |
| 0x60bd | P DWS-Geschwindigkeitsimpulse HL |
| 0x60bc | P DWS-Geschwindigkeitsimpulse HR |
| 0x62ac | P Servotronic 1 |
| 0x62ad | P Servotronic 2 |
| 0xd984 | P CAN-low, Physikalischer Busfehler |
| 0xd987 | P Controller, Bus off |
| 0xd98A | P Timeout einer Botschaft vom Powermodul |
| 0xd98b | P Timeout einer Botschaft vom CAS |
| 0xd98c | P Signalfehler einer Botschaft vom CAS |
| 0xd98d | P Timeout einer Botschaft vom DSC |
| 0xd98e | P Signalfehler einer Botschaft vom DSC |
| 0xd98f | P Timeout einer Botschaft vom DME |
| 0xd990 | P Signalfehler einer Botschaft vom DME |
| 0xd991 | P Timeout einer Botschaft vom EDCK |
| 0xd992 | P Signalfehler einer Botschaft vom EDCK |
| 0xd993 | P Timeout einer Botschaft vom KOMBI |
| 0xd994 | P Signalfehler einer Botschaft vom KOMBI |
| 0xd995 | P Timeout einer Botschaft vom SZL |
| 0xd996 | P Signalfehler einer Botschaft vom SZL |
| 0xd997 | P Signalfehler einer Botschaft vom MMI |
| 0xFFFC | P Chassis Group |
| 0xFFFE | P Network Communication Group |
| 0xFFFF | P All Groups |
| 0xFFFF | unbekannter Fehlerort |

### ID_43

| ORT | ORTTEXT |
| --- | --- |
| 0xA148 | P Fehler ECU intern |
| 0xA149 | P Fehler Input Kl.15 |
| 0xA14A | P Fehler Batterieschalter |
| 0xA14B | P Fehler Exzenterkontakt |
| 0xA14C | P Fehler Batterietemperatursensor |
| 0xA14D | P Fehler Treiber Kl.30 |
| 0xA14E | P Fehler Treiber HHS |
| 0xA14F | P Fehler Treiber IB |
| 0xA150 | P Fehler Treiber Kl.15 |
| 0xA151 | P Fehler Treiber Kl.R |
| 0xA152 | P Fehler Treiber VA-Karosserie |
| 0xA153 | P Fehler Treiber VA-Dach |
| 0xA154 | P Fehler Tankklappenmotor |
| 0xA155 | P Fehler Heckklappenmotor |
| 0xA156 | P Fehler Heckklappenkontakt |
| 0xA157 | P Fehler SCA-Motor |
| 0xA158 | P Ruhestromfehler |
| 0xA159 | P Fehler Batterietrennung (Imax) |
| 0xA15A | P Fehler Batterietrennung (Kurzschluss) |
| 0xA15B | P Fehler Treiber LM |
| 0xA15C | P Energiesparmodus |
| 0xA15D | P Fehler Batterie-Tiefentladung |
| 0xA15E | P Fehler Lichtmodul |
| 0xA15F | P Messemode |
| 0xA160 | P Fehler Multifuses |
| 0xA161 | P Fehler Batterietrennung (Ruhestrom) |
| 0xD9C4 | P CAN-Low, Physikalischer Busfehler |
| 0xD9C7 | P Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_44

| ORT | ORTTEXT |
| --- | --- |
| 0xA088 | P Fehler Bedienschalter |
| 0xA08A | P Fehler Dimmung |
| 0xA08D | P Fehler Kodierung |
| 0xA090 | P Fehler Dacheinheit SHD |
| 0xA091 | P Fehler Antrieb SHD |
| 0xA092 | P Fehler Normierung SHD |
| 0xA0A0 | P Fehler Dacheinheit SoS |
| 0xA0A1 | P Fehler Antrieb SoS |
| 0xA0A2 | P Fehler Normierung SoS |
| 0xA40D | P Fehler Eeprom Schreibfehler |
| 0xA40E | P Fehler Energiesparmode aktiv |
| 0xDA04 | P Fehler K_CAN_LOW |
| 0xDA07 | P Fehler CAN_Controller |
| 0x9400 | S Fehler Oszillator |
| 0x9401 | S Fehler Watchdog |
| 0x9402 | S Fehler Opcode |
| 0x9403 | S Fehler Kalibrierwerte ungültig |
| 0x9404 | S Fehler Versorgungsspannung unplausibel |
| 0x9405 | S Fehler Temperatursensor unplausibel |
| 0x9406 | S Fehler Checksumme ECU Konfiguration |
| 0x9440 | S Fehler Aktivierung des Panik Modes |
| 0x9441 | S Fehler Initialisierung Manuell |
| 0x9442 | S Fehler Initialisierung Diagnose |
| 0x9443 | S Fehler Initialisierung abgebrochen |
| 0x9444 | S Fehler Dauerhafte Unterspannung |
| 0x9445 | S Fehler Dauerhafte Überspannung |
| 0x9446 | S Ueberspannung Lastabwurf oder Starthilfe |
| 0x9447 | S Fehler Anzahl aller Kodierungen |
| 0x9448 | S Fehler Anzahl ungültiger Kodierungen |
| 0x9500 | S Fehler SHD Hallsensor A Puls |
| 0x9501 | S Fehler SHD Hallsensor B Puls |
| 0x9502 | S Fehler SHD Hallsensor B Drehrichtung |
| 0x9503 | S Fehler SHD Motorbruecke |
| 0x9504 | S Fehler SHD Motorbruecke Kurzschluss |
| 0x9505 | S Fehler SHD Motor Kurzschluss |
| 0x9506 | S Fehler SHD Motorklemmenspannung Drehrichtung |
| 0x9507 | S Fehler SHD Positionsverlust Spannungsausfall |
| 0x9508 | S Fehler SHD Positionsverlust |
| 0x9509 | S Fehler SHD Kennlinie Schieben |
| 0x950A | S Fehler SHD Kennlinie Heben |
| 0x950B | S Fehler SHD Checksumme SHD Konfiguration |
| 0x950C | S Fehler SHD Hall A Ueberlast |
| 0x950D | S Fehler SHD Hall B Ueberlast |
| 0x950E | S Fehler SHD Hall A Leitungsbruch |
| 0x950F | S Fehler SHD Hall B Leitungsbruch |
| 0x9510 | S Fehler SHD Positionsverlust Bereichsueberschreitung |
| 0x9540 | S Fehler SHD Manuelle Dachbewegung |
| 0x9541 | S Fehler SHD Aktivierung der SKB |
| 0x9542 | S Fehler SHD Motortemperatur Startverhinderung |
| 0x9543 | S Fehler SHD Motortemperatur Bewegungsabbruch |
| 0x9600 | S Fehler SoS Hallsensor A Puls |
| 0x9601 | S Fehler SoS Hallsensor B Puls |
| 0x9602 | S Fehler SoS Hallsensor B Drehrichtung |
| 0x9603 | S Fehler SoS Motorbruecke |
| 0x9604 | S Fehler SoS Motorbruecke Kurzschluss |
| 0x9605 | S Fehler SoS Motor Kurzschluss |
| 0x9606 | S Fehler SoS Motorklemmenspannung Drehrichtung |
| 0x9607 | S Fehler SoS Positionsverlust Spannungsausfall |
| 0x9608 | S Fehler SoS Positionsverlust |
| 0x9609 | S Fehler SoS Kennlinie Schieben |
| 0x960A | S Fehler SoS Kennlinie Heben |
| 0x960B | S Fehler SoS Checksumme SHD Konfiguration |
| 0x960C | S Fehler SoS Hall A Ueberlast |
| 0x960D | S Fehler SoS Hall B Ueberlast |
| 0x960E | S Fehler SoS Hall A Leitungsbruch |
| 0x960F | S Fehler SoS Hall B Leitungsbruch |
| 0x9610 | S Fehler SoS Positionsverlust Bereichsueberschreitung |
| 0x9640 | S Fehler SoS Manuelle Dachbewegung |
| 0x9641 | S Fehler SoS Aktivierung der SKB |
| 0x9642 | S Fehler SoS Motortemperatur Startverhinderung |
| 0x9643 | S Fehler SoS Motortemperatur Bewegungsabbruch |
| 0xDA43 | P Fehler Fehler_beim_Senden_NM_Botschaft - NUR FÜR ENTWICKLUNG RELEVANT |
| 0x9308 | S Fehler Hallsensor A |
| 0x9309 | S Fehler Motorbruecke |
| 0x930A | S Fehler Motorbruecke kurzschluss |
| 0x930B | S Fehler Motor |
| 0x930C | S Fehler Kennlinie Heben |
| 0x930D | S Fehler Versorgungsspannung unplausibel |
| 0x930E | S Fehler Oszillator |
| 0x930F | S Fehler Spannungsausfall |
| 0x9311 | S Fehler Kennlinie Schieben |
| 0x9313 | S Fehler Hallsensor B |
| 0x9314 | S Fehler Kalibrierwerte ungültig |
| 0x9315 | S Fehler Temperatursensor |
| 0x9316 | S Fehler Motorklemmenspannung |
| 0x9317 | S Fehler EEPROM Schreibfehler |
| 0x9318 | S Fehler Checksumme SHD Konfiguration |
| 0x9319 | S Fehler Watchdog |
| 0x931A | S Fehler Manuelle Dach Bewegung |
| 0x931B | S Fehler Aktivierung der SKB |
| 0x931C | S Fehler Aktivierung des Panik Modes |
| 0x931D | S Fehler Temperatur Monitor Abbruch |
| 0x931E | S Fehler Opcode |
| 0x931F | S Fehler Initialisierung |
| 0x9320 | S Fehler Initialisierung abgebrochen |
| 0x9321 | S Fehler Temperatur Monitor Startverhinderung |
| 0x9322 | S Fehler Checksumme ECU Konfiguration |
| 0xFFFF | unbekannter Fehlerort |

### ID_45

| ORT | ORTTEXT |
| --- | --- |
| 0xA128 | P Hardwarefehler Regensensor A128 |
| 0xA129 | P keine optische Initialisierung möglich A129 |
| 0xA12A | P Übertemperatur A12A |
| 0xA12B | P Überspannung A12B |
| 0xA12C | P reserviert A12C |
| 0xA12D | P Hardwarefehler Lichtsensor A12D |
| 0xA12E | P Kalibrierungsfehler Lichtsensor A12E |
| 0xDA44 | P Can-Low physik.Busfehler DA44 |
| 0xFFFF | unbekannter Fehlerort |

### ID_46

| ORT | ORTTEXT |
| --- | --- |
| 0x9E08 | P Fehler im Microcontroller |
| 0x9E09 | P Fehlende Codierung |
| 0x9E0B | P Wascherpumpe oder Leitung WP: Kurzschluss oder Unterbrechung oder Behaelter leer |
| 0x9E0C | P Scheinwerferpumpe oder Leitung: SRA Unterbrechung oder Kurzschluss nach Masse |
| 0x9E0D | P Nassarmheizung oder Leitung: Unterbrechung oder Kurzschluss nach Masse |
| 0x9E0F | P Wischer schwergaengig |
| 0x9E10 | P Fehler Hallsensor Anker |
| 0x9E11 | P Kodierfehler 'Montagebetrieb' |
| 0x9E12 | P Fehler Hallsensor Referenz (RSK) |
| 0xDA84 | P CAN - low |
| 0xDA87 | P CAN - Controller |
| 0x9308 | S Wischer- oder Intervallschalter |
| 0x9309 | S Regensensor |
| 0x930A | S Fahrzeuggeschwindigkeit |
| 0x930B | S Klemme R oder Klemme 50 |
| 0x930C | S Aussentemperatur |
| 0x930D | S Standlicht |
| 0x930E | S Waschwasserbefuellung |
| 0x930F | S Datum |
| 0x9310 | S Betriebsspannung |
| 0x9311 | S Batterie Spitzenreduzierung |
| 0x9312 | S dauernder Schwerlastbetrieb |
| 0x9313 | S Blockierschutz ausgeloesst |
| 0x9314 | S Abschaltung Ueberspannung |
| 0xFFFF | unbekannter Fehlerort |

### ID_47

| ORT | ORTTEXT |
| --- | --- |
| 0xA508 | Antennen-SV. Fehler in der Antennen-Stromversorgung |
| 0xDACE | P Error_Light_Not_Off. |
| 0xDAD0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xDAD1 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9313 | S MOST-CHIP IIC- Bus Fehler |
| 0x9314 | S Watchdog_Reset |
| 0xFFFF | unbekannter Fehlerort |

### ID_48

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_49

| ORT | ORTTEXT |
| --- | --- |
| 0xA208 | P Sicherung 30BB1 / Leitungsbruch |
| 0xA209 | P Sicherung 30SB1 / Leitungsbruch |
| 0xA20A | P Stromsensor |
| 0xA20B | P Ansteuerung Hochstromrelais 86TR |
| 0xA20C | P Reizgassensor Frischluftklappe links |
| 0xA20D | P Reizgassensor Frischluftklappe rechts |
| 0xA20E | P Reizgassensor Nähe Motorlüfter |
| 0xA20F | P Flaschendruck Luftanlage |
| 0xA210 | P Taster Luftanlage |
| 0xA211 | P Magnetventil Luftanlage |
| 0xA212 | P Unit-Wire Motorraum |
| 0xA213 | P Unit-Wire unten rechts |
| 0xA214 | P Unit-Wire unten links |
| 0xA215 | P Taster Feuerlöschanlage |
| 0xA216 | P Zündpille Feuerlöschflasche links |
| 0xA217 | P Zündpille Feuerlöschflasche rechts |
| 0xA218 | P Ansteuerung Hydropumpe 86HP |
| 0xA221 | P Magnetventile Fahrertür |
| 0xA222 | P Magnetventile Beifahrertür |
| 0xA223 | P Magnetventile Fahrertür hinten |
| 0xA224 | P Magnetventile Beifahrertür hinten |
| 0xA226 | P Überhitzung Hydropumpe |
| 0xA227 | P Produktions-/Werkstattmodus |
| 0xA228 | P Endschalter Schottwand |
| 0xA229 | P Magnetventil Not Fahrertür |
| 0xA22A | P Magnetventil Not Beifahrertür |
| 0xA22B | P Magnetventil Not Fahrertür hinten |
| 0xA22C | P Magnetventil Not Beifahrertür hinten |
| 0xA22D | P Taster Scheibenheizung |
| 0xA22E | P Frontscheibe Heizfeld links |
| 0xA22F | P Frontscheibe Heizfeld rechts |
| 0xA230 | P Seitenscheibe Heizfeld links |
| 0xA231 | P Seitenscheibe Heizfeld rechts |
| 0xA232 | P Taster Sicherung Vordertüren |
| 0xA233 | P Notausstieg |
| 0xA238 | P Zündpille Startbatterieklemme |
| 0x9308 | S Alarm RGS Frischluftklappe links Stufe 1 reduzierbare Gase |
| 0x9309 | S Alarm RGS Frischluftklappe links Stufe 1 oxidierbare Gase |
| 0x930A | S Alarm RGS Frischluftklappe links Stufe 2 reduzierbare Gase |
| 0x930B | S Alarm RGS Frischluftklappe links Stufe 2 oxidierbare Gase |
| 0x930C | S Alarm RGS Frischluftklappe rechts Stufe 1 reduzierbare Gase |
| 0x930D | S Alarm RGS Frischluftklappe rechts Stufe 1 oxidierbare Gase |
| 0x930E | S Alarm RGS Frischluftklappe rechts Stufe 2 reduzierbare Gase |
| 0x930F | S Alarm RGS Frischluftklappe rechts Stufe 2 oxidierbare Gase |
| 0x9310 | S Alarm RGS Nähe Motorlüfter Stufe 1 reduzierbare Gase |
| 0x9311 | S Alarm RGS Nähe Motorlüfter Stufe 1 oxidierbare Gase |
| 0x9312 | S Alarm RGS Nähe Motorlüfter Stufe 2 reduzierbare Gase |
| 0x9313 | S Alarm RGS Nähe Motorlüfter Stufe 2 oxidierbare Gase |
| 0x9314 | S Auslösung Luftanlage |
| 0x9315 | S Auslösung SBK Starterleitung |
| 0x9316 | S Auslösung Feuerlöschanlage manuell |
| 0x9317 | S Auslösung Feuerlöschanlage Motorraum |
| 0x9318 | S Auslösung Feuerlöschanlage unten rechts |
| 0x9319 | S Auslösung Feuerlöschanlage unten links |
| 0x931A | S Auslösung Notausstieg Frontscheibe |
| 0xFFFF | unbekannter Fehlerort |

### ID_4A

| ORT | ORTTEXT |
| --- | --- |
| 0xA248 | P Taster WSA Ein/Aus |
| 0xA249 | P Sprech-Taste WSA |
| 0xA24A | P Sprech-Taste WSA Kommando |
| 0xA24B | P Taster Tonfolge ECE/Yelp |
| 0xA24C | P Taster Tonfolge Wail |
| 0xA24D | P Taster Tonfolge HiLo |
| 0xA24E | P Taster Fernlichtblinken |
| 0xA24F | P Taster Hupe -> Tonfolge |
| 0xA250 | P Taster Blitzleuchte |
| 0xA251 | P Taster Überfallalarm |
| 0xA252 | P Taster Alarm Reset |
| 0xA253 | P Taster Funk1 Ein/Aus |
| 0xA254 | P Taster Funk2 Ein/Aus |
| 0xA255 | P Versorgung Funk1 |
| 0xA256 | P Versorgung Funk2 |
| 0xA257 | P Taster Stiller Alarm 1 |
| 0xA258 | P Taster Stiller Alarm 2 |
| 0xA259 | P Taster Anti-Kidnapping |
| 0xA25A | P Versorgung Gepäckraumleuchte |
| 0x9348 | S Auslösung Überfallalarm |
| 0x9349 | S Auslösung Anti-Kidnapping |
| 0x934A | S Auslösung Stiller Alarm |
| 0xFFFF | unbekannter Fehlerort |

### ID_4B

| ORT | ORTTEXT |
| --- | --- |
| 0xDBCC | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xDBD0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xDBD1 | P Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xDBD2 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA388 | P Rot-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA389 | P Gruen-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA38A | P Blau-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA38B | P Sync-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA38C | P FBAS-Eingangssignal ausserhalb der Toleranz |
| 0xA38D | P Fernspeisespannung ausserhalb der Toleranz |
| 0xA38E | P Fernspeisestrom ausserhalb der Toleranz |
| 0xA390 | P FBAS Ausgangssignal 1 ausserhalb der Toleranz |
| 0xA391 | P FBAS Ausgangssignal 2 ausserhalb der Toleranz |
| 0xA392 | P Rot-Signal vom RGB Ausgang1 ausserhalb der Toleranz |
| 0xA393 | P Gruen-Signal vom RGB Ausgang1 ausserhalb der Toleranz |
| 0xA394 | P Blau-Signal vom RGB Ausgang1 ausserhalb der Toleranz |
| 0xA395 | P Rot-Signal vom RGB Ausgang2 ausserhalb der Toleranz |
| 0xA396 | P Gruen-Signal vom RGB Ausgang2 ausserhalb der Toleranz |
| 0xA397 | P Blau-Signal vom RGB Ausgang2 ausserhalb der Toleranz |
| 0xC904 | S Device bekam Reset (Error_Reset). |
| 0xC905 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0xC906 | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankündigung aus (Error_Sudden_light_off). |
| 0xC907 | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0xC908 | S Kurze Unlocks (Error_unlock_Short). |
| 0xC909 | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0xC90C | S Empfänger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9320 | S IIC-Fehler HW-Bus |
| 0x9321 | S IIC-Fehler SW-Bus 1 |
| 0x9322 | S IIC-Fehler SW-Bus 2 |
| 0x9323 | S Speicherfehler |
| 0x9324 | S Initialisierung |
| 0x9325 | S Unterspannung (Spannung fuer mindestens 3 Sekunden unter 9 Volt) |
| 0xFFFF | unbekannter Fehlerort |

### ID_4C

| ORT | ORTTEXT |
| --- | --- |
| 0xDC04 | P CAN_Low, Physikalischer Fehler |
| 0xDC07 | P Controller, Bus Off |
| 0x9B48 | P Prozessor defekt |
| 0x9B49 | P Schalterblock defekt |
| 0x9B4A | P Dauerhafte Unterspannung |
| 0x9B4B | P Energiesparmode aktiv |
| 0x9B4E | P CAN_Low, Physikalischer Fehler |
| 0x9B4F | P Controller, Bus Off |
| 0x9B50 | P ZV Motor ER defekt |
| 0x9B51 | P ZV Motor COM defekt |
| 0x9B52 | P ZV Motor VR/ZS defekt |
| 0x9B53 | P Elektrisch Oeffnen Motor defekt |
| 0x9B54 | P SCA Motor defekt |
| 0x9B55 | P KISI Sensor defekt |
| 0x9B56 | P ZV ER Sensor defekt |
| 0x9B57 | P SCA Sensor defekt |
| 0x9B58 | P Elektrisch Oeffnen Sensor defekt |
| 0x9B59 | P Elektrisch Oeffnen Freigabe ohne TAG |
| 0x9B5A | P Fussraumleuchte defekt |
| 0x9B5B | P Tuerwarnleuchte defekt |
| 0x9B5C | P Ambiente Beleuchtung defekt |
| 0x9B5D | P Vorfeldbeleuchtung defekt |
| 0x9B60 | P FH Defekt vorgehalten |
| 0x9B61 | P FH Defekt vorgehalten |
| 0x9B62 | P Fensterhebermechanik schwergaengig |
| 0x9B63 | P Hallsensor defekt |
| 0x9B64 | P Transistorbruecke defekt |
| 0x9B65 | P Motorklemmenspannung unplausibel |
| 0x9B66 | P Fensterposition ungueltig |
| 0x9B67 | P Kennlinie ungueltig |
| 0x9B68 | P Temperaturwert unplausibel |
| 0x9B69 | P Magnetrad Polbreiten ungueltig |
| 0x9B70 | P Spiegel Motor Horizontal defekt |
| 0x9B71 | P Spiegel Motor Vertikal defekt |
| 0x9B72 | P Beiklappmotor defekt |
| 0x9B73 | P Spiegelheizung defekt |
| 0x9B75 | P Spiegelposition Potentiometer vertikal defekt |
| 0x9B76 | P Spiegelposition Potentiometer horizontal defekt |
| 0xFFFF | unbekannter Fehlerort |

### ID_4D

| ORT | ORTTEXT |
| --- | --- |
| 0xDC44 | P CAN_Low, Physikalischer Fehler |
| 0xDC47 | P Controller, Bus Off |
| 0x9B88 | P Prozessor defekt |
| 0x9B89 | P Schalterblock defekt |
| 0x9B8A | P Dauerhafte Unterspannung |
| 0x9B8B | P Energiesparmode aktiv |
| 0x9B8E | P CAN_Low, Physikalischer Fehler |
| 0x9B8F | P Controller, Bus Off |
| 0x9B90 | P ZV Motor ER defekt |
| 0x9B91 | P ZV Motor COM defekt |
| 0x9B92 | P ZV Motor VR/ZS defekt |
| 0x9B93 | P Elektrisch Oeffnen Motor defekt |
| 0x9B94 | P SCA Motor defekt |
| 0x9B95 | P KISI Sensor defekt |
| 0x9B96 | P ZV ER Sensor defekt |
| 0x9B97 | P SCA Sensor defekt |
| 0x9B98 | P Elektrisch Oeffnen Sensor defekt |
| 0x9B99 | P Elektrisch Oeffnen Freigabe ohne TAG |
| 0x9B9A | P Fussraumleuchte defekt |
| 0x9B9B | P Tuerwarnleuchte defekt |
| 0x9B9C | P Ambiente Beleuchtung defekt |
| 0x9B9D | P Vorfeldbeleuchtung defekt |
| 0x9BA0 | P FH Defekt vorgehalten |
| 0x9BA1 | P FH Defekt vorgehalten |
| 0x9BA2 | P Fensterhebermechanik schwergaengig |
| 0x9BA3 | P Hallsensor defekt |
| 0x9BA4 | P Transistorbruecke defekt |
| 0x9BA5 | P Motorklemmenspannung unplausibel |
| 0x9BA6 | P Fensterposition ungueltig |
| 0x9BA7 | P Kennlinie ungueltig |
| 0x9BA8 | P Temperaturwert unplausibel |
| 0x9BA9 | P Magnetrad Polbreiten ungueltig |
| 0x9BB0 | P Spiegel Motor Horizontal defekt |
| 0x9BB1 | P Spiegel Motor Vertikal defekt |
| 0x9BB2 | P Beiklappmotor defekt |
| 0x9BB3 | P Spiegelheizung defekt |
| 0x9BB5 | P Spiegelposition Potentiometer vertikal defekt |
| 0x9BBA | P Spiegelposition Potentiometer horizontal defekt |
| 0xFFFF | unbekannter Fehlerort |

### ID_4E

| ORT | ORTTEXT |
| --- | --- |
| 0xDC84 | P CAN_Low, Physikalischer Fehler |
| 0xDC87 | P Controller, Bus Off |
| 0x9BC8 | P Prozessor defekt |
| 0x9BC9 | P Schalterblock defekt |
| 0x9BCA | P Dauerhafte Unterspannung |
| 0x9BCB | P Energiesparmode aktiv |
| 0x9BCE | P CAN_Low, Physikalischer Fehler |
| 0x9BCF | P Controller, Bus Off |
| 0x9BD0 | P ZV Motor ER defekt |
| 0x9BD1 | P ZV Motor COM defekt |
| 0x9BD2 | P ZV Motor VR/ZS defekt |
| 0x9BD3 | P Elektrisch Oeffnen Motor defekt |
| 0x9BD4 | P SCA Motor defekt |
| 0x9BD5 | P KISI Sensor defekt |
| 0x9BD6 | P ZV ER Sensor defekt |
| 0x9BD7 | P SCA Sensor defekt |
| 0x9BD8 | P Elektrisch Oeffnen Sensor defekt |
| 0x9BD9 | P Elektrisch Oeffnen Freigabe ohne TAG |
| 0x9BDA | P Fussraumleuchte defekt |
| 0x9BDB | P Tuerwarnleuchte defekt |
| 0x9BDC | P Ambiente Beleuchtung defekt |
| 0x9BDD | P Vorfeldbeleuchtung defekt |
| 0x9BE0 | P FH Defekt vorgehalten |
| 0x9BE1 | P FH Defekt vorgehalten |
| 0x9BE2 | P Fensterhebermechanik schwergaengig |
| 0x9BE3 | P Hallsensor defekt |
| 0x9BE4 | P Transistorbruecke defekt |
| 0x9BE5 | P Motorklemmenspannung unplausibel |
| 0x9BE6 | P Fensterposition ungueltig |
| 0x9BE7 | P Kennlinie ungueltig |
| 0x9BE8 | P Temperaturwert unplausibel |
| 0x9BE9 | P Magnetrad Polbreiten ungueltig |
| 0x9BF0 | P Spiegel Motor Horizontal defekt |
| 0x9BF1 | P Spiegel Motor Vertikal defekt |
| 0x9BF2 | P Beiklappmotor defekt |
| 0x9BF3 | P Spiegelheizung defekt |
| 0x9BF5 | P Spiegelposition Potentiometer vertikal defekt |
| 0x9BFE | P Spiegelposition Potentiometer horizontal defekt |
| 0xFFFF | unbekannter Fehlerort |

### ID_4F

| ORT | ORTTEXT |
| --- | --- |
| 0xDCC4 | P CAN_Low, Physikalischer Fehler |
| 0xDCC7 | P Controller, Bus Off |
| 0x9C08 | P Prozessor defekt |
| 0x9C09 | P Schalterblock defekt |
| 0x9C0A | P Dauerhafte Unterspannung |
| 0x9C0B | P Energiesparmode aktiv |
| 0x9C0E | P CAN_Low, Physikalischer Fehler |
| 0x9C0F | P Controller, Bus Off |
| 0x9C10 | P ZV Motor ER defekt |
| 0x9C11 | P ZV Motor COM defekt |
| 0x9C12 | P ZV Motor VR/ZS defekt |
| 0x9C13 | P Elektrisch Oeffnen Motor defekt |
| 0x9C14 | P SCA Motor defekt |
| 0x9C15 | P KISI Sensor defekt |
| 0x9C16 | P ZV ER Sensor defekt |
| 0x9C17 | P SCA Sensor defekt |
| 0x9C18 | P Elektrisch Oeffnen Sensor defekt |
| 0x9C19 | P Elektrisch Oeffnen Freigabe ohne TAG |
| 0x9C1A | P Fussraumleuchte defekt |
| 0x9C1B | P Tuerwarnleuchte defekt |
| 0x9C1C | P Ambiente Beleuchtung defekt |
| 0x9C1D | P Vorfeldbeleuchtung defekt |
| 0x9C20 | P FH Defekt vorgehalten |
| 0x9C21 | P FH Defekt vorgehalten |
| 0x9C22 | P Fensterhebermechanik schwergaengig |
| 0x9C23 | P Hallsensor defekt |
| 0x9C24 | P Transistorbruecke defekt |
| 0x9C25 | P Motorklemmenspannung unplausibel |
| 0x9C26 | P Fensterposition ungueltig |
| 0x9C27 | P Kennlinie ungueltig |
| 0x9C28 | P Temperaturwert unplausibel |
| 0x9C29 | P Magnetrad Polbreiten ungueltig |
| 0x9C30 | P Spiegel Motor Horizontal defekt |
| 0x9C31 | P Spiegel Motor Vertikal defekt |
| 0x9C32 | P Beiklappmotor defekt |
| 0x9C33 | P Spiegelheizung defekt |
| 0x9C35 | P Spiegelposition Potentiometer vertikal defekt |
| 0x9C36 | P Spiegelposition Potentiometer horizontal defekt |
| 0xFFFF | unbekannter Fehlerort |

### ID_50

| ORT | ORTTEXT |
| --- | --- |
| 0x9D11 | P Fehler Bus-Leitung |
| 0x9D12 | P Fehler Batterie-Kreis |
| 0x9D13 | P Fehler EEprom |
| 0x9D14 | P Fehler Sicherheits-Kreis |
| 0x9D15 | P Fehler Timing-Schaltung |
| 0x9D16 | P Fehler Alarmsignal-Kreis |
| 0x9D1F | P Fehler Neigungssensor-Kreis |
| 0x9D44 | P Alarm: Funktionsstörung Spannungsversorgung |
| 0x9D45 | P Alarm: Bus gegen Plus oder Überspannung |
| 0x9D46 | P Alarm: Bus gegen Masse |
| 0x9D47 | P Alarm: Zyklus fehlt |
| 0x9338 | P Information: Back-up-Batterie entladen |
| 0x9339 | P Information: Verpolung erkannt |
| 0xFFFF | unbekannter Fehlerort |

### ID_51

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_52

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_53

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_54

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Energiesparmode aktiviert |
| 0x01 | Fehler an der CD-Wechsler-Schnittstelle |
| 0x02 | Fehler an der Antennenstromversorgung |
| 0xA168 | IPC Startup Error. |
| 0xA169 | IPC Operation Error. |
| 0xA16A | CRC Flash ROM Error. |
| 0xA16B | CRC GW Table Error. |
| 0xA16C | EEPROM Error. |
| 0xA16D | Energiesparmode aktiv. |
| 0xE184 | CAN High/Low-Line Error. |
| 0xE187 | CAN Bus Communication Error. |
| 0xE194 | No CLAMP_STATUS via CAN received. |
| 0xE18C | Device hat die Monitoringnachricht nicht abgenommen oder bestaetigt. (Error_Monitoring). |
| 0xE18D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xE18E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE18F | Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xE190 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xABC8 | 0xABC8: Fehler Speichertest RAD 1/2 |
| 0xABC9 | 0xABC9: Laufwerk defekt |
| 0xABCA | 0xABCA: DSP defekt  |
| 0xABCB | 0xABCB: Endstufen IC defekt  |
| 0xABCC | 0xABCC: Fehler in der Antennen-Stromversorgung |
| 0xABCD | 0xABCD: FeTraWe Mode ist aktiv |
| 0xABD8 | 0xABD8: Fehler FLASH-ROM |
| 0xABD9 | 0xABD9: Fehler RAM |
| 0xABDA | 0xABDA: Fehler WatchDogReset |
| 0xABDB | 0xABDB: Fehler EEPROM |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA170 | Receive Buffer Overflow. |
| 0xA171 | Transmit Buffer Overflow. |
| 0xA172 | Invalid DLC ID of CAN message. |
| 0xA173 | Invalid Length of MOST message. |
| 0xA180 | RAM Access Error. |
| 0xFFFF | unbekannter Fehlerort |

### ID_55

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_56

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_57

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_58

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_59

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_60

| ORT | ORTTEXT |
| --- | --- |
| 0x930E | P KOMBI65: GANGANZEIGE_P; KOMB65_2: S Weckendes Device hat erfolglos versucht das Netzwerk zu wecken (Error_WakeUp_Failed). |
| 0x930F | P KOMBI65: GANGANZEIGE_N; KOMB65_2: S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | P KOMBI65: GANGANZEIGE_D; KOMB65_2: S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9311 | P GANGANZEIGE_R |
| 0x9313 | P TEMPERATURFÜHLER_LCD |
| 0x9315 | P GWSZ_FEHLER_CAS_ODER_KOMBI |
| 0x9316 | P GWSZ_FEHLER_EEPROM_KOMBI |
| 0x9317 | P EEPROM: CHECKSUM ERROR CODING DATA BMW |
| 0x9318 | P VMC_COMMUNICATION_ERROR |
| 0x9319 | P HEBELGEBER1 |
| 0x9312 | P Energiesparmode aktiv. |
| 0x931A | P HEBELGEBER2 |
| 0x931B | P AUSSENTEMPERATUR |
| 0x931C | P KURZSCHUSS_DISPLAYHEIZUNG |
| 0x931D | P BORDNETZSPANNUNG, UEBERSPANNUNG ODER UNTERSPANNUNG |
| 0x931E | P EEPROM: CHECKSUM ERROR CODING DATA VDO |
| 0x9327 | P ZGM_ALIVE_ERROR |
| 0xA3A8 | P CAN_NO_ID_ERROR |
| 0xA3A9 | P CAN_ID_1EE_ERROR_Ausfall_Botschaft_LSS |
| 0xA3AA | P CAN_ID_1D2_ERROR_Ausfall_Botschaft_Getriebedaten |
| 0xA3AB | P CAN_ID_190_ERROR_Ausfall_Botschaft_Anzeige_ACC |
| 0xA3AC | P CAN_ID_1A6_ERROR_Ausfall_Botschaft_Wegstrecke |
| 0xA3AD | P CAN_ID_1D0_ERROR_Ausfall_Botschaft_Motordaten |
| 0xA3AE | P CAN_ID_0AA_ERROR_Ausfall_Botschaft_Drehmoment3 |
| 0xA3AF | P CAN_ID_200_ERROR_Ausfall_Botschaft_Regelgeschw_Stufentempomat |
| 0xA3B0 | P CAN_ID_202_ERROR_Ausfall_Botschaft_Dimmung |
| 0xA3B1 | P CAN_ID_1F6_ERROR_Ausfall_Botschaft_Blinken |
| 0xA3B2 | P CAN_ID_130_ERROR_Ausfall_Botschaft_Klemmenstatus |
| 0xA3B3 | P CAN_ID_0BE_ERROR_Ausfall_Botschaft_ARS_SSY_Alive_Zaehler |
| 0xA3B4 | P CAN_ID_21A_ERROR_Ausfall_Botschaft_Lampenzustand |
| 0xA3B5 | P CAN_ID_3B4_ERROR_Ausfall_Botschaft_Powermanagement |
| 0xA3B6 | P CAN_ID_394_ERROR_Ausfall_Botschaft_RDA_Anfrage_Datenablage |
| 0xA3B7 | P CAN_ID_2E4_ERROR_Ausfall_Botschaft_Status_Anhaenger |
| 0xA3B8 | P CAN_ID_326_ERROR_Ausfall_Botschaft_Status_Daempferprogramm |
| 0xA3B9 | P CAN_ID_19E_ERROR_Ausfall_Botschaft_Status_DSC |
| 0xA3BA | P CAN_ID_0AE_ERROR_Ausfall_Botschaft_Alive_EMF |
| 0xA3BB | P CAN_ID_2FC_ERROR_Ausfall_Botschaft_ZV_Klappenzustand |
| 0xA3BC | P NO_ANSWER_TO_REQUEST (580h+60h) |
| 0xA3BD | P CAN_ID_0C0_ERROR_Ausfall_Botschaft_Alive_ZGM |
| 0xA548 | P CAN_ID_1A0_ERROR_Ausfall_Botschaft_Geschwindigkeit |
| 0xA54A | P CAN_ID_5C0_ERROR_CAS_Checksumme_Wegstrecke |
| 0xA3BE | P CAS_ALIVE_ERROR |
| 0xA3BF | P CIM_ALIVE_ERROR |
| 0xA3C0 | P AHM_ALIVE_ERROR |
| 0xA3C1 | P LSZ_ALIVE_ERROR |
| 0xA3C2 | P POWERMODUL_ALIVE_ERROR |
| 0xA3C3 | P RDC_ALIVE_ERROR |
| 0xA3C4 | P SECURITY1_ALIVE_ERROR |
| 0xA3C5 | P SECURITY2_ALIVE_ERROR |
| 0xA3C6 | P WISCHERMODUL_ALIVE_ERROR |
| 0xA3C7 | P LUFTFEDER_ALIVE_ERROR |
| 0xE104 | P CAN LOW ERROR |
| 0xE105 | P CAN HIGH ERROR |
| 0xE106 | P GROUND SHIFT ERROR |
| 0xE107 | P CAN BUS OFF |
| 0xE10C | P Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK) |
| 0xE10E | P Obwohl Shutdown (Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE110 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE111 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0xFFFF | unbekannter Fehlerort |

### ID_61

| ORT | ORTTEXT |
| --- | --- |
| 0xA268 | P JBIT2 IBus Line Fehler A268 |
| 0xA269 | P SOS Key Line Fehler A269 |
| 0xA26A | P CrashLine Line Fehler A26A |
| 0xA26B | P TelCommander Line Fehler A26B ab FBI SW 6.B.0, PU 09/02: Fehlereintrag inaktiviert |
| 0xA26C | P JNAV IBus Line Fehler A26C |
| 0xA26E | P EEPROM Fehler A26E |
| 0xA26F | P TelCommander Taste hängt A26F |
| 0xE14E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE150 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE151 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE152 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9408 | S TelCommander Line Fehler 9408 Fehlereintrag erst ab FBI SW 6.B.0, PU 09/02 |
| 0xFFFF | unbekannter Fehlerort |

### ID_62

| ORT | ORTTEXT |
| --- | --- |
| 0xA168 | P Fehler MOST/CAN-Gateway |
| 0xA169 | P Fehler LCD/Inverter MMIGT |
| 0xA16B | P FeTraWe-Mode für MOST-Verbund ist aktiv |
| 0xE184 | P CAN-Low, Physikalischer Busfehler |
| 0xE187 | P Controller, Bus off |
| 0xE18D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken (Error_WakeUp_Failed). |
| 0xE18E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus (Error_Light_Not_Off). |
| 0xE190 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA170 | S Fehler IPC Startup |
| 0xA171 | S Fehler IPC Operation |
| 0xA172 | S Fehler Laden FPGA |
| 0xA173 | S Fehler OS8104 |
| 0xA174 | S Fehler FLASH-ROM |
| 0xA175 | S Fehler RAM |
| 0xA176 | S Fehler EEPROM |
| 0xA177 | S MMI-Rechner Temperatur zu hoch |
| 0xA17A | S Fehler Ausgang FPGA |
| 0xA17B | S Fehler Safety-Signal |
| 0xA17C | S Fehler UInverter |
| 0xA17D | S Fehler Temperatursensor LCD |
| 0xA17E | S CCT/LCD Temperatur zu hoch |
| 0xA180 | S Pufferueberlauf Empfangspuffer |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### ID_63

| ORT | ORTTEXT |
| --- | --- |
| 0xA048 | P Fehler Speichertest MMI-Rechner |
| 0xA050 | S Fehler FLASH-ROM |
| 0xA051 | S Fehler RAM |
| 0xA052 | S Fehler Video-RAM |
| 0xA053 | S Fehler EEPROM |
| 0xA05A | S Ueberlauf IPC-Queue |
| 0xA05B | S Ueberlauf MMI-Task Queue |
| 0xA05C | S Ueberlauf Grafik-Queue |
| 0xFFFF | unbekannter Fehlerort |

### ID_64

| ORT | ORTTEXT |
| --- | --- |
| 0x9e28 | P Fehlerort: SG intern |
| 0x9e29 | P Fehlerort: Funktionsanzeige |
| 0x9e2a | P Fehlerort: Taster |
| 0x9e2b | P Fehlerort: Wandlerfehler HL |
| 0x9e2c | P Fehlerort: Wandlerfehler HR |
| 0x9e2d | P Fehlerort: Wandlerfehler HML |
| 0x9e2e | P Fehlerort: Wandlerfehler HMR |
| 0x9e2f | P Fehlerort: Wandlerfehler VL |
| 0x9e30 | P Fehlerort: Wandlerfehler VR |
| 0x9e31 | P Fehlerort: Wandlerfehler VML |
| 0x9e32 | P Fehlerort: Wandlerfehler VMR |
| 0x9e33 | P Fehlerort: Wandlerleitungen HL |
| 0x9e34 | P Fehlerort: Wandlerleitungen HR |
| 0x9e35 | P Fehlerort: Wandlerleitungen HML |
| 0x9e36 | P Fehlerort: Wandlerleitungen HMR |
| 0x9e37 | P Fehlerort: Wandlerleitungen VL |
| 0x9e38 | P Fehlerort: Wandlerleitungen VR |
| 0x9e39 | P Fehlerort: Wandlerleitungen VML |
| 0x9e3a | P Fehlerort: Wandlerleitungen VMR |
| 0x9e3b | P Fehlerort: Wandler Versorgung |
| 0xe204 | P Fehlerort: CAN-Low, Physikalischer Busfehler |
| 0xe205 | P Fehlerort: CAN-High, Physikalischer Busfehler |
| 0xe206 | P Fehlerort: CAN-Groundshift, Physikalischer Busfehler |
| 0xe207 | P Fehlerort: CAN-Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_65

| ORT | ORTTEXT |
| --- | --- |
| 0x9FC8 | P AD-Kanal 00 -> Daten 1 Links HM - Menuetasten |
| 0x9FC9 | P AD-Kanal 10 -> Daten 2 Links HM - Drehknopf drehen |
| 0x9FCA | P AD-Kanal 01 -> Daten 3 Links ZM - Heizung/Klima/Aktiv |
| 0x9FCB | P AD-Kanal 11 -> Daten 4 Links HM - Drehknopf schieben |
| 0x9FCC | P AD-Kanal 02 -> Daten 5 Links ZM - Memory |
| 0x9FCD | P AD-Kanal 12 -> Daten 1 Rechts HM - Menuetasten |
| 0x9FCE | P AD-Kanal 03 -> Daten 2 Rechts HM - Drehknopf drehen |
| 0x9FCF | P AD-Kanal 13 -> Daten 3 Rechts ZM - Heizung/Klima/Aktiv |
| 0x9FD0 | P AD-Kanal 04 -> Daten 4 Rechts HM - Drehknopf schieben |
| 0x9FD1 | P AD-Kanal 14 -> Daten 5 Rechts ZM - Memory |
| 0xE244 | P CAN-Low, Physikalischer Busfehler |
| 0xE247 | P Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_66

| ORT | ORTTEXT |
| --- | --- |
| 0xA008 | P AD-Kanal 11 -> Daten 1 Links HM - Vorauswahltasten |
| 0xA009 | P AD-Kanal 02 -> Daten 2 Links HM - Drehknopf drehen |
| 0xA00A | P AD-Kanal 01 -> Daten 3 Links ZM - Sitzheizung/klima |
| 0xA00B | P AD-Kanal 12 -> Daten 4 Links HM - Drehknopf schieben |
| 0xA00C | P AD-Kanal 03 -> Daten 5 Links HM - Memory |
| 0xA00D | P AD-Kanal 17 -> Daten 1 Rechts HM - Vorauswahltasten |
| 0xA00E | P AD-Kanal 07 -> Daten 2 Rechts HM - Drehknopf drehen |
| 0xA00F | P AD-Kanal 10 -> Daten 3 Rechts ZM - Sitzheizung/klima |
| 0xA010 | P AD-Kanal 16 -> Daten 4 Rechts HM - Drehknopf schieben |
| 0xA011 | P AD-Kanal 00 -> Daten 5 Rechts HM - Memory |
| 0xA012 | P AD-Kanal 05 -> Audio Modul |
| 0xE284 | P CAN-Low, Physikalischer Busfehler |
| 0xE287 | P Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_67

| ORT | ORTTEXT |
| --- | --- |
| 0xA2C8 | P Fehler Motor |
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Energiesparmode aktiv |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN logical error |
| 0x2002 | S Fehler Motor PTC |
| 0x2003 | S Fehler Implausible Effect |
| 0xFFFF | unbekannter Fehlerort |

### ID_68

| ORT | ORTTEXT |
| --- | --- |
| 0xA2C8 | P Fehler Motor |
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Energiesparmode aktiv |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN logical error |
| 0x2002 | S Fehler Motor PTC |
| 0x2003 | S Fehler Implausible Effect |
| 0xFFFF | unbekannter Fehlerort |

### ID_69

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | P keine Hallimpulse SLV  |
| 0x9E49 | P keine Hallimpulse SHV  |
| 0x9E4A | P keine Hallimpulse LBV  |
| 0x9E4B | P keine Hallimpulse LNV  |
| 0x9E4C | P keine Hallimpulse SNV  |
| 0x9E4D | P keine Hallimpulse KHV  |
| 0x9E4E | P keine Hallimpulse LKV  |
| 0x9E4F | P keine Hallimpulse STV  |
| 0x9E50 | P Fehler Motor SLV  |
| 0x9E51 | P Fehler Motor SHV  |
| 0x9E52 | P Fehler Motor LBV  |
| 0x9E53 | P Fehler Motor LNV  |
| 0x9E54 | P Fehler Motor SNV  |
| 0x9E55 | P Fehler Motor KHV  |
| 0x9E56 | P Fehler Motor LKV  |
| 0x9E57 | P Fehler Motor STV  |
| 0x9E58 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9E59 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5A | P Fehler Restheizfeld NTC Kissen  |
| 0x9E5B | P Fehler Restheizfeld NTC Lehne  |
| 0x9E5C | P Fehler Schnellheizfeld Kissen  |
| 0x9E5D | P Fehler Schnellheizfeld Lehne  |
| 0x9E5E | P Fehler Restheizfeld Kissen  |
| 0x9E5F | P Fehler Restheizfeld Lehne  |
| 0x9E60 | P Fehler Heizungstreiber durchlegiert  |
| 0x9E61 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E62 | P Fehler Klima Steuerung Kissen  |
| 0x9E63 | P Fehler Klima Steuerung Lehne  |
| 0x9E64 | P Fehler Aktivsitz Motor  |
| 0x9E65 | P Fehler Aktivsitz Magnet  |
| 0x9E66 | P Fehler Aktivsitz Druckschalter  |
| 0x9E67 | P Fehler Lordose Ventile  |
| 0x9E68 | P Fehler Lordose Pumpe  |
| 0x9E69 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9E6A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6B | P Interner Fehler EEPROM  |
| 0x9E6C | P Energiesparmode aktiv  |
| 0xE444 | P CAN-Low, Physikalischer Busfehler  |
| 0xE447 | P Controller, Bus off  |
| 0x9EA8 | P keine Hallimpulse SLV  |
| 0x9EA9 | P keine Hallimpulse SHV  |
| 0x9EAA | P keine Hallimpulse LBV  |
| 0x9EAB | P keine Hallimpulse LNV  |
| 0x9EAC | P keine Hallimpulse SNV  |
| 0x9EAD | P keine Hallimpulse KHV  |
| 0x9EAE | P keine Hallimpulse LKV  |
| 0x9EAF | P keine Hallimpulse STV  |
| 0x9EB0 | P Fehler Motor SLV  |
| 0x9EB1 | P Fehler Motor SHV  |
| 0x9EB2 | P Fehler Motor LBV  |
| 0x9EB3 | P Fehler Motor LNV  |
| 0x9EB4 | P Fehler Motor SNV  |
| 0x9EB5 | P Fehler Motor KHV  |
| 0x9EB6 | P Fehler Motor LKV  |
| 0x9EB7 | P Fehler Motor STV  |
| 0x9EB8 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9EB9 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBA | P Fehler Restheizfeld NTC Kissen  |
| 0x9EBB | P Fehler Restheizfeld NTC Lehne  |
| 0x9EBC | P Fehler Schnellheizfeld Kissen  |
| 0x9EBD | P Fehler Schnellheizfeld Lehne  |
| 0x9EBE | P Fehler Restheizfeld Kissen  |
| 0x9EBF | P Fehler Restheizfeld Lehne  |
| 0x9EC0 | P Fehler Heizungstreiber durchlegiert  |
| 0x9EC1 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC2 | P Fehler Klima Steuerung Kissen  |
| 0x9EC3 | P Fehler Klima Steuerung Lehne  |
| 0x9EC4 | P Fehler Aktivsitz Motor  |
| 0x9EC5 | P Fehler Aktivsitz Magnet  |
| 0x9EC6 | P Fehler Aktivsitz Druckschalter  |
| 0x9EC7 | P Fehler Lordose Ventile  |
| 0x9EC8 | P Fehler Lordose Pumpe  |
| 0x9EC9 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9ECA | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECB | P Interner Fehler EEPROM  |
| 0x9ECC | P Energiesparmode aktiv  |
| 0xE484 | P CAN-Low, Physikalischer Busfehler  |
| 0xE487 | P Controller, Bus off  |
| 0x9F08 | P keine Hallimpulse SLV  |
| 0x9F09 | P keine Hallimpulse SHV  |
| 0x9F0A | P keine Hallimpulse LBV  |
| 0x9F0B | P keine Hallimpulse LNV  |
| 0x9F0C | P keine Hallimpulse SNV  |
| 0x9F0D | P keine Hallimpulse KHV  |
| 0x9F0E | P keine Hallimpulse LKV  |
| 0x9F0F | P keine Hallimpulse STV  |
| 0x9F10 | P Fehler Motor SLV  |
| 0x9F11 | P Fehler Motor SHV  |
| 0x9F12 | P Fehler Motor LBV  |
| 0x9F13 | P Fehler Motor LNV  |
| 0x9F14 | P Fehler Motor SNV  |
| 0x9F15 | P Fehler Motor KHV  |
| 0x9F16 | P Fehler Motor LKV  |
| 0x9F17 | P Fehler Motor STV  |
| 0x9F18 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F19 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F1B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F1C | P Fehler Schnellheizfeld Kissen  |
| 0x9F1D | P Fehler Schnellheizfeld Lehne  |
| 0x9F1E | P Fehler Restheizfeld Kissen  |
| 0x9F1F | P Fehler Restheizfeld Lehne  |
| 0x9F20 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F21 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F22 | P Fehler Klima Steuerung Kissen  |
| 0x9F23 | P Fehler Klima Steuerung Lehne  |
| 0x9F24 | P Fehler Aktivsitz Motor  |
| 0x9F25 | P Fehler Aktivsitz Magnet  |
| 0x9F26 | P Fehler Aktivsitz Druckschalter  |
| 0x9F27 | P Fehler Lordose Ventile  |
| 0x9F28 | P Fehler Lordose Pumpe  |
| 0x9F29 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F2A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2B | P Interner Fehler EEPROM  |
| 0x9F2C | P Energiesparmode aktiv  |
| 0xE344 | P CAN-Low, Physikalischer Busfehler  |
| 0xE347 | P Controller, Bus off  |
| 0x9F68 | P keine Hallimpulse SLV  |
| 0x9F69 | P keine Hallimpulse SHV  |
| 0x9F6A | P keine Hallimpulse LBV  |
| 0x9F6B | P keine Hallimpulse LNV  |
| 0x9F6C | P keine Hallimpulse SNV  |
| 0x9F6D | P keine Hallimpulse KHV  |
| 0x9F6E | P keine Hallimpulse LKV  |
| 0x9F6F | P keine Hallimpulse STV  |
| 0x9F70 | P Fehler Motor SLV  |
| 0x9F71 | P Fehler Motor SHV  |
| 0x9F72 | P Fehler Motor LBV  |
| 0x9F73 | P Fehler Motor LNV  |
| 0x9F74 | P Fehler Motor SNV  |
| 0x9F75 | P Fehler Motor KHV  |
| 0x9F76 | P Fehler Motor LKV  |
| 0x9F77 | P Fehler Motor STV  |
| 0x9F78 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F79 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F7B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F7C | P Fehler Schnellheizfeld Kissen  |
| 0x9F7D | P Fehler Schnellheizfeld Lehne  |
| 0x9F7E | P Fehler Restheizfeld Kissen  |
| 0x9F7F | P Fehler Restheizfeld Lehne  |
| 0x9F80 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F81 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F82 | P Fehler Klima Steuerung Kissen  |
| 0x9F83 | P Fehler Klima Steuerung Lehne  |
| 0x9F84 | P Fehler Aktivsitz Motor  |
| 0x9F85 | P Fehler Aktivsitz Magnet  |
| 0x9F86 | P Fehler Aktivsitz Druckschalter  |
| 0x9F87 | P Fehler Lordose Ventile  |
| 0x9F88 | P Fehler Lordose Pumpe  |
| 0x9F89 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F8A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8B | P Interner Fehler EEPROM  |
| 0x9F8C | P Energiesparmode aktiv  |
| 0xE384 | P CAN-Low, Physikalischer Busfehler  |
| 0xE387 | P Controller, Bus off  |
| 0x9E9E | S Fehler Motor SLV   |
| 0x9E9F | S Fehler Motor SHV   |
| 0x9EA0 | S Fehler Motor LBV   |
| 0x9EA1 | S Fehler Motor LNV   |
| 0x9EA2 | S Fehler Motor SNV   |
| 0x9EA3 | S Fehler Motor KHV   |
| 0x9EA4 | S Fehler Motor LKV   |
| 0x9EA5 | S Fehler Motor STV   |
| 0x9EA6 | S Fehler Steuergerätetemperatur  |
| 0x9EA7 | S Versorgungsspannungsfehler  |
| 0x9EFE | S Fehler Motor SLV   |
| 0x9EFF | S Fehler Motor SHV   |
| 0x9F00 | S Fehler Motor LBV   |
| 0x9F01 | S Fehler Motor LNV   |
| 0x9F02 | S Fehler Motor SNV   |
| 0x9F03 | S Fehler Motor KHV   |
| 0x9F04 | S Fehler Motor LKV   |
| 0x9F05 | S Fehler Motor STV   |
| 0x9F06 | S Fehler Steuergerätetemperatur  |
| 0x9F07 | S Versorgungsspannungsfehler  |
| 0x9F5E | S Fehler Motor SLV   |
| 0x9F5F | S Fehler Motor SHV   |
| 0x9F60 | S Fehler Motor LBV   |
| 0x9F61 | S Fehler Motor LNV   |
| 0x9F62 | S Fehler Motor SNV   |
| 0x9F63 | S Fehler Motor KHV   |
| 0x9F64 | S Fehler Motor LKV   |
| 0x9F65 | S Fehler Motor STV   |
| 0x9F66 | S Fehler Steuergerätetemperatur  |
| 0x9F67 | S Versorgungsspannungsfehler  |
| 0x9FBE | S Fehler Motor SLV   |
| 0x9FBF | S Fehler Motor SHV   |
| 0x9FC0 | S Fehler Motor LBV   |
| 0x9FC1 | S Fehler Motor LNV   |
| 0x9FC2 | S Fehler Motor SNV   |
| 0x9FC3 | S Fehler Motor KHV   |
| 0x9FC4 | S Fehler Motor LKV   |
| 0x9FC5 | S Fehler Motor STV   |
| 0x9FC6 | S Fehler Steuergerätetemperatur  |
| 0x9FC7 | S Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6A

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | P keine Hallimpulse SLV  |
| 0x9E49 | P keine Hallimpulse SHV  |
| 0x9E4A | P keine Hallimpulse LBV  |
| 0x9E4B | P keine Hallimpulse LNV  |
| 0x9E4C | P keine Hallimpulse SNV  |
| 0x9E4D | P keine Hallimpulse KHV  |
| 0x9E4E | P keine Hallimpulse LKV  |
| 0x9E4F | P keine Hallimpulse STV  |
| 0x9E50 | P Fehler Motor SLV  |
| 0x9E51 | P Fehler Motor SHV  |
| 0x9E52 | P Fehler Motor LBV  |
| 0x9E53 | P Fehler Motor LNV  |
| 0x9E54 | P Fehler Motor SNV  |
| 0x9E55 | P Fehler Motor KHV  |
| 0x9E56 | P Fehler Motor LKV  |
| 0x9E57 | P Fehler Motor STV  |
| 0x9E58 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9E59 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5A | P Fehler Restheizfeld NTC Kissen  |
| 0x9E5B | P Fehler Restheizfeld NTC Lehne  |
| 0x9E5C | P Fehler Schnellheizfeld Kissen  |
| 0x9E5D | P Fehler Schnellheizfeld Lehne  |
| 0x9E5E | P Fehler Restheizfeld Kissen  |
| 0x9E5F | P Fehler Restheizfeld Lehne  |
| 0x9E60 | P Fehler Heizungstreiber durchlegiert  |
| 0x9E61 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E62 | P Fehler Klima Steuerung Kissen  |
| 0x9E63 | P Fehler Klima Steuerung Lehne  |
| 0x9E64 | P Fehler Aktivsitz Motor  |
| 0x9E65 | P Fehler Aktivsitz Magnet  |
| 0x9E66 | P Fehler Aktivsitz Druckschalter  |
| 0x9E67 | P Fehler Lordose Ventile  |
| 0x9E68 | P Fehler Lordose Pumpe  |
| 0x9E69 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9E6A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6B | P Interner Fehler EEPROM  |
| 0x9E6C | P Energiesparmode aktiv  |
| 0xE444 | P CAN-Low, Physikalischer Busfehler  |
| 0xE447 | P Controller, Bus off  |
| 0x9EA8 | P keine Hallimpulse SLV  |
| 0x9EA9 | P keine Hallimpulse SHV  |
| 0x9EAA | P keine Hallimpulse LBV  |
| 0x9EAB | P keine Hallimpulse LNV  |
| 0x9EAC | P keine Hallimpulse SNV  |
| 0x9EAD | P keine Hallimpulse KHV  |
| 0x9EAE | P keine Hallimpulse LKV  |
| 0x9EAF | P keine Hallimpulse STV  |
| 0x9EB0 | P Fehler Motor SLV  |
| 0x9EB1 | P Fehler Motor SHV  |
| 0x9EB2 | P Fehler Motor LBV  |
| 0x9EB3 | P Fehler Motor LNV  |
| 0x9EB4 | P Fehler Motor SNV  |
| 0x9EB5 | P Fehler Motor KHV  |
| 0x9EB6 | P Fehler Motor LKV  |
| 0x9EB7 | P Fehler Motor STV  |
| 0x9EB8 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9EB9 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBA | P Fehler Restheizfeld NTC Kissen  |
| 0x9EBB | P Fehler Restheizfeld NTC Lehne  |
| 0x9EBC | P Fehler Schnellheizfeld Kissen  |
| 0x9EBD | P Fehler Schnellheizfeld Lehne  |
| 0x9EBE | P Fehler Restheizfeld Kissen  |
| 0x9EBF | P Fehler Restheizfeld Lehne  |
| 0x9EC0 | P Fehler Heizungstreiber durchlegiert  |
| 0x9EC1 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC2 | P Fehler Klima Steuerung Kissen  |
| 0x9EC3 | P Fehler Klima Steuerung Lehne  |
| 0x9EC4 | P Fehler Aktivsitz Motor  |
| 0x9EC5 | P Fehler Aktivsitz Magnet  |
| 0x9EC6 | P Fehler Aktivsitz Druckschalter  |
| 0x9EC7 | P Fehler Lordose Ventile  |
| 0x9EC8 | P Fehler Lordose Pumpe  |
| 0x9EC9 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9ECA | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECB | P Interner Fehler EEPROM  |
| 0x9ECC | P Energiesparmode aktiv  |
| 0xE484 | P CAN-Low, Physikalischer Busfehler  |
| 0xE487 | P Controller, Bus off  |
| 0x9F08 | P keine Hallimpulse SLV  |
| 0x9F09 | P keine Hallimpulse SHV  |
| 0x9F0A | P keine Hallimpulse LBV  |
| 0x9F0B | P keine Hallimpulse LNV  |
| 0x9F0C | P keine Hallimpulse SNV  |
| 0x9F0D | P keine Hallimpulse KHV  |
| 0x9F0E | P keine Hallimpulse LKV  |
| 0x9F0F | P keine Hallimpulse STV  |
| 0x9F10 | P Fehler Motor SLV  |
| 0x9F11 | P Fehler Motor SHV  |
| 0x9F12 | P Fehler Motor LBV  |
| 0x9F13 | P Fehler Motor LNV  |
| 0x9F14 | P Fehler Motor SNV  |
| 0x9F15 | P Fehler Motor KHV  |
| 0x9F16 | P Fehler Motor LKV  |
| 0x9F17 | P Fehler Motor STV  |
| 0x9F18 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F19 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F1B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F1C | P Fehler Schnellheizfeld Kissen  |
| 0x9F1D | P Fehler Schnellheizfeld Lehne  |
| 0x9F1E | P Fehler Restheizfeld Kissen  |
| 0x9F1F | P Fehler Restheizfeld Lehne  |
| 0x9F20 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F21 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F22 | P Fehler Klima Steuerung Kissen  |
| 0x9F23 | P Fehler Klima Steuerung Lehne  |
| 0x9F24 | P Fehler Aktivsitz Motor  |
| 0x9F25 | P Fehler Aktivsitz Magnet  |
| 0x9F26 | P Fehler Aktivsitz Druckschalter  |
| 0x9F27 | P Fehler Lordose Ventile  |
| 0x9F28 | P Fehler Lordose Pumpe  |
| 0x9F29 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F2A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2B | P Interner Fehler EEPROM  |
| 0x9F2C | P Energiesparmode aktiv  |
| 0xE344 | P CAN-Low, Physikalischer Busfehler  |
| 0xE347 | P Controller, Bus off  |
| 0x9F68 | P keine Hallimpulse SLV  |
| 0x9F69 | P keine Hallimpulse SHV  |
| 0x9F6A | P keine Hallimpulse LBV  |
| 0x9F6B | P keine Hallimpulse LNV  |
| 0x9F6C | P keine Hallimpulse SNV  |
| 0x9F6D | P keine Hallimpulse KHV  |
| 0x9F6E | P keine Hallimpulse LKV  |
| 0x9F6F | P keine Hallimpulse STV  |
| 0x9F70 | P Fehler Motor SLV  |
| 0x9F71 | P Fehler Motor SHV  |
| 0x9F72 | P Fehler Motor LBV  |
| 0x9F73 | P Fehler Motor LNV  |
| 0x9F74 | P Fehler Motor SNV  |
| 0x9F75 | P Fehler Motor KHV  |
| 0x9F76 | P Fehler Motor LKV  |
| 0x9F77 | P Fehler Motor STV  |
| 0x9F78 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F79 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F7B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F7C | P Fehler Schnellheizfeld Kissen  |
| 0x9F7D | P Fehler Schnellheizfeld Lehne  |
| 0x9F7E | P Fehler Restheizfeld Kissen  |
| 0x9F7F | P Fehler Restheizfeld Lehne  |
| 0x9F80 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F81 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F82 | P Fehler Klima Steuerung Kissen  |
| 0x9F83 | P Fehler Klima Steuerung Lehne  |
| 0x9F84 | P Fehler Aktivsitz Motor  |
| 0x9F85 | P Fehler Aktivsitz Magnet  |
| 0x9F86 | P Fehler Aktivsitz Druckschalter  |
| 0x9F87 | P Fehler Lordose Ventile  |
| 0x9F88 | P Fehler Lordose Pumpe  |
| 0x9F89 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F8A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8B | P Interner Fehler EEPROM  |
| 0x9F8C | P Energiesparmode aktiv  |
| 0xE384 | P CAN-Low, Physikalischer Busfehler  |
| 0xE387 | P Controller, Bus off  |
| 0x9E9E | S Fehler Motor SLV   |
| 0x9E9F | S Fehler Motor SHV   |
| 0x9EA0 | S Fehler Motor LBV   |
| 0x9EA1 | S Fehler Motor LNV   |
| 0x9EA2 | S Fehler Motor SNV   |
| 0x9EA3 | S Fehler Motor KHV   |
| 0x9EA4 | S Fehler Motor LKV   |
| 0x9EA5 | S Fehler Motor STV   |
| 0x9EA6 | S Fehler Steuergerätetemperatur  |
| 0x9EA7 | S Versorgungsspannungsfehler  |
| 0x9EFE | S Fehler Motor SLV   |
| 0x9EFF | S Fehler Motor SHV   |
| 0x9F00 | S Fehler Motor LBV   |
| 0x9F01 | S Fehler Motor LNV   |
| 0x9F02 | S Fehler Motor SNV   |
| 0x9F03 | S Fehler Motor KHV   |
| 0x9F04 | S Fehler Motor LKV   |
| 0x9F05 | S Fehler Motor STV   |
| 0x9F06 | S Fehler Steuergerätetemperatur  |
| 0x9F07 | S Versorgungsspannungsfehler  |
| 0x9F5E | S Fehler Motor SLV   |
| 0x9F5F | S Fehler Motor SHV   |
| 0x9F60 | S Fehler Motor LBV   |
| 0x9F61 | S Fehler Motor LNV   |
| 0x9F62 | S Fehler Motor SNV   |
| 0x9F63 | S Fehler Motor KHV   |
| 0x9F64 | S Fehler Motor LKV   |
| 0x9F65 | S Fehler Motor STV   |
| 0x9F66 | S Fehler Steuergerätetemperatur  |
| 0x9F67 | S Versorgungsspannungsfehler  |
| 0x9FBE | S Fehler Motor SLV   |
| 0x9FBF | S Fehler Motor SHV   |
| 0x9FC0 | S Fehler Motor LBV   |
| 0x9FC1 | S Fehler Motor LNV   |
| 0x9FC2 | S Fehler Motor SNV   |
| 0x9FC3 | S Fehler Motor KHV   |
| 0x9FC4 | S Fehler Motor LKV   |
| 0x9FC5 | S Fehler Motor STV   |
| 0x9FC6 | S Fehler Steuergerätetemperatur  |
| 0x9FC7 | S Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6B

| ORT | ORTTEXT |
| --- | --- |
| 0xA2A8 | P Reset durch Watchdog |
| 0xA2A9 | P Reset durch OpCode Fehler |
| 0xA2AA | P Reset durch Clock-Monitor |
| 0xA2AB | P Fehler im EEPROM |
| 0xA2AD | P Relaiskleber AUF aktivieren |
| 0xA2AE | P Relaiskleber AUF deaktivieren |
| 0xA2AF | P Relaiskleber ZU aktivieren |
| 0xA2B0 | P Relaiskleber ZU deaktivieren |
| 0xA2B1 | P Fehler am Pumpen-MOSFET |
| 0xA2B2 | P Fehler am Ventil-Treiber |
| 0xA2B3 | P Fehler am Drehwinkelgeber |
| 0xA2B4 | P TOEHKK Kurzschluss nach Masse |
| 0xA2B5 | P TOEHK Kurzschluss nach Masse |
| 0xE3C4 | P Controller, Bus Off |
| 0xE3C5 | P CAN_Low, Physikalischer Busfehler |
| 0xA2BF | S Fehlspg. an Klemme 30 |
| 0xA2C0 | S Timeout Oeffnen der Klappe |
| 0xA2C1 | S Timeout Schliessen der Klappe |
| 0xA2C2 | S Timeout Entriegeln HKK |
| 0xA2C3 | S Timeout Verriegeln HKK |
| 0xFFFF | unbekannter Fehlerort |

### ID_6C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_6D

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | P keine Hallimpulse SLV  |
| 0x9E49 | P keine Hallimpulse SHV  |
| 0x9E4A | P keine Hallimpulse LBV  |
| 0x9E4B | P keine Hallimpulse LNV  |
| 0x9E4C | P keine Hallimpulse SNV  |
| 0x9E4D | P keine Hallimpulse KHV  |
| 0x9E4E | P keine Hallimpulse LKV  |
| 0x9E4F | P keine Hallimpulse STV  |
| 0x9E50 | P Fehler Motor SLV  |
| 0x9E51 | P Fehler Motor SHV  |
| 0x9E52 | P Fehler Motor LBV  |
| 0x9E53 | P Fehler Motor LNV  |
| 0x9E54 | P Fehler Motor SNV  |
| 0x9E55 | P Fehler Motor KHV  |
| 0x9E56 | P Fehler Motor LKV  |
| 0x9E57 | P Fehler Motor STV  |
| 0x9E58 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9E59 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5A | P Fehler Restheizfeld NTC Kissen  |
| 0x9E5B | P Fehler Restheizfeld NTC Lehne  |
| 0x9E5C | P Fehler Schnellheizfeld Kissen  |
| 0x9E5D | P Fehler Schnellheizfeld Lehne  |
| 0x9E5E | P Fehler Restheizfeld Kissen  |
| 0x9E5F | P Fehler Restheizfeld Lehne  |
| 0x9E60 | P Fehler Heizungstreiber durchlegiert  |
| 0x9E61 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E62 | P Fehler Klima Steuerung Kissen  |
| 0x9E63 | P Fehler Klima Steuerung Lehne  |
| 0x9E64 | P Fehler Aktivsitz Motor  |
| 0x9E65 | P Fehler Aktivsitz Magnet  |
| 0x9E66 | P Fehler Aktivsitz Druckschalter  |
| 0x9E67 | P Fehler Lordose Ventile  |
| 0x9E68 | P Fehler Lordose Pumpe  |
| 0x9E69 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9E6A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6B | P Interner Fehler EEPROM  |
| 0x9E6C | P Energiesparmode aktiv  |
| 0xE444 | P CAN-Low, Physikalischer Busfehler  |
| 0xE447 | P Controller, Bus off  |
| 0x9EA8 | P keine Hallimpulse SLV  |
| 0x9EA9 | P keine Hallimpulse SHV  |
| 0x9EAA | P keine Hallimpulse LBV  |
| 0x9EAB | P keine Hallimpulse LNV  |
| 0x9EAC | P keine Hallimpulse SNV  |
| 0x9EAD | P keine Hallimpulse KHV  |
| 0x9EAE | P keine Hallimpulse LKV  |
| 0x9EAF | P keine Hallimpulse STV  |
| 0x9EB0 | P Fehler Motor SLV  |
| 0x9EB1 | P Fehler Motor SHV  |
| 0x9EB2 | P Fehler Motor LBV  |
| 0x9EB3 | P Fehler Motor LNV  |
| 0x9EB4 | P Fehler Motor SNV  |
| 0x9EB5 | P Fehler Motor KHV  |
| 0x9EB6 | P Fehler Motor LKV  |
| 0x9EB7 | P Fehler Motor STV  |
| 0x9EB8 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9EB9 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBA | P Fehler Restheizfeld NTC Kissen  |
| 0x9EBB | P Fehler Restheizfeld NTC Lehne  |
| 0x9EBC | P Fehler Schnellheizfeld Kissen  |
| 0x9EBD | P Fehler Schnellheizfeld Lehne  |
| 0x9EBE | P Fehler Restheizfeld Kissen  |
| 0x9EBF | P Fehler Restheizfeld Lehne  |
| 0x9EC0 | P Fehler Heizungstreiber durchlegiert  |
| 0x9EC1 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC2 | P Fehler Klima Steuerung Kissen  |
| 0x9EC3 | P Fehler Klima Steuerung Lehne  |
| 0x9EC4 | P Fehler Aktivsitz Motor  |
| 0x9EC5 | P Fehler Aktivsitz Magnet  |
| 0x9EC6 | P Fehler Aktivsitz Druckschalter  |
| 0x9EC7 | P Fehler Lordose Ventile  |
| 0x9EC8 | P Fehler Lordose Pumpe  |
| 0x9EC9 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9ECA | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECB | P Interner Fehler EEPROM  |
| 0x9ECC | P Energiesparmode aktiv  |
| 0xE484 | P CAN-Low, Physikalischer Busfehler  |
| 0xE487 | P Controller, Bus off  |
| 0x9F08 | P keine Hallimpulse SLV  |
| 0x9F09 | P keine Hallimpulse SHV  |
| 0x9F0A | P keine Hallimpulse LBV  |
| 0x9F0B | P keine Hallimpulse LNV  |
| 0x9F0C | P keine Hallimpulse SNV  |
| 0x9F0D | P keine Hallimpulse KHV  |
| 0x9F0E | P keine Hallimpulse LKV  |
| 0x9F0F | P keine Hallimpulse STV  |
| 0x9F10 | P Fehler Motor SLV  |
| 0x9F11 | P Fehler Motor SHV  |
| 0x9F12 | P Fehler Motor LBV  |
| 0x9F13 | P Fehler Motor LNV  |
| 0x9F14 | P Fehler Motor SNV  |
| 0x9F15 | P Fehler Motor KHV  |
| 0x9F16 | P Fehler Motor LKV  |
| 0x9F17 | P Fehler Motor STV  |
| 0x9F18 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F19 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F1B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F1C | P Fehler Schnellheizfeld Kissen  |
| 0x9F1D | P Fehler Schnellheizfeld Lehne  |
| 0x9F1E | P Fehler Restheizfeld Kissen  |
| 0x9F1F | P Fehler Restheizfeld Lehne  |
| 0x9F20 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F21 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F22 | P Fehler Klima Steuerung Kissen  |
| 0x9F23 | P Fehler Klima Steuerung Lehne  |
| 0x9F24 | P Fehler Aktivsitz Motor  |
| 0x9F25 | P Fehler Aktivsitz Magnet  |
| 0x9F26 | P Fehler Aktivsitz Druckschalter  |
| 0x9F27 | P Fehler Lordose Ventile  |
| 0x9F28 | P Fehler Lordose Pumpe  |
| 0x9F29 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F2A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2B | P Interner Fehler EEPROM  |
| 0x9F2C | P Energiesparmode aktiv  |
| 0xE344 | P CAN-Low, Physikalischer Busfehler  |
| 0xE347 | P Controller, Bus off  |
| 0x9F68 | P keine Hallimpulse SLV  |
| 0x9F69 | P keine Hallimpulse SHV  |
| 0x9F6A | P keine Hallimpulse LBV  |
| 0x9F6B | P keine Hallimpulse LNV  |
| 0x9F6C | P keine Hallimpulse SNV  |
| 0x9F6D | P keine Hallimpulse KHV  |
| 0x9F6E | P keine Hallimpulse LKV  |
| 0x9F6F | P keine Hallimpulse STV  |
| 0x9F70 | P Fehler Motor SLV  |
| 0x9F71 | P Fehler Motor SHV  |
| 0x9F72 | P Fehler Motor LBV  |
| 0x9F73 | P Fehler Motor LNV  |
| 0x9F74 | P Fehler Motor SNV  |
| 0x9F75 | P Fehler Motor KHV  |
| 0x9F76 | P Fehler Motor LKV  |
| 0x9F77 | P Fehler Motor STV  |
| 0x9F78 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F79 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F7B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F7C | P Fehler Schnellheizfeld Kissen  |
| 0x9F7D | P Fehler Schnellheizfeld Lehne  |
| 0x9F7E | P Fehler Restheizfeld Kissen  |
| 0x9F7F | P Fehler Restheizfeld Lehne  |
| 0x9F80 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F81 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F82 | P Fehler Klima Steuerung Kissen  |
| 0x9F83 | P Fehler Klima Steuerung Lehne  |
| 0x9F84 | P Fehler Aktivsitz Motor  |
| 0x9F85 | P Fehler Aktivsitz Magnet  |
| 0x9F86 | P Fehler Aktivsitz Druckschalter  |
| 0x9F87 | P Fehler Lordose Ventile  |
| 0x9F88 | P Fehler Lordose Pumpe  |
| 0x9F89 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F8A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8B | P Interner Fehler EEPROM  |
| 0x9F8C | P Energiesparmode aktiv  |
| 0xE384 | P CAN-Low, Physikalischer Busfehler  |
| 0xE387 | P Controller, Bus off  |
| 0x9E9E | S Fehler Motor SLV   |
| 0x9E9F | S Fehler Motor SHV   |
| 0x9EA0 | S Fehler Motor LBV   |
| 0x9EA1 | S Fehler Motor LNV   |
| 0x9EA2 | S Fehler Motor SNV   |
| 0x9EA3 | S Fehler Motor KHV   |
| 0x9EA4 | S Fehler Motor LKV   |
| 0x9EA5 | S Fehler Motor STV   |
| 0x9EA6 | S Fehler Steuergerätetemperatur  |
| 0x9EA7 | S Versorgungsspannungsfehler  |
| 0x9EFE | S Fehler Motor SLV   |
| 0x9EFF | S Fehler Motor SHV   |
| 0x9F00 | S Fehler Motor LBV   |
| 0x9F01 | S Fehler Motor LNV   |
| 0x9F02 | S Fehler Motor SNV   |
| 0x9F03 | S Fehler Motor KHV   |
| 0x9F04 | S Fehler Motor LKV   |
| 0x9F05 | S Fehler Motor STV   |
| 0x9F06 | S Fehler Steuergerätetemperatur  |
| 0x9F07 | S Versorgungsspannungsfehler  |
| 0x9F5E | S Fehler Motor SLV   |
| 0x9F5F | S Fehler Motor SHV   |
| 0x9F60 | S Fehler Motor LBV   |
| 0x9F61 | S Fehler Motor LNV   |
| 0x9F62 | S Fehler Motor SNV   |
| 0x9F63 | S Fehler Motor KHV   |
| 0x9F64 | S Fehler Motor LKV   |
| 0x9F65 | S Fehler Motor STV   |
| 0x9F66 | S Fehler Steuergerätetemperatur  |
| 0x9F67 | S Versorgungsspannungsfehler  |
| 0x9FBE | S Fehler Motor SLV   |
| 0x9FBF | S Fehler Motor SHV   |
| 0x9FC0 | S Fehler Motor LBV   |
| 0x9FC1 | S Fehler Motor LNV   |
| 0x9FC2 | S Fehler Motor SNV   |
| 0x9FC3 | S Fehler Motor KHV   |
| 0x9FC4 | S Fehler Motor LKV   |
| 0x9FC5 | S Fehler Motor STV   |
| 0x9FC6 | S Fehler Steuergerätetemperatur  |
| 0x9FC7 | S Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6E

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | P keine Hallimpulse SLV  |
| 0x9E49 | P keine Hallimpulse SHV  |
| 0x9E4A | P keine Hallimpulse LBV  |
| 0x9E4B | P keine Hallimpulse LNV  |
| 0x9E4C | P keine Hallimpulse SNV  |
| 0x9E4D | P keine Hallimpulse KHV  |
| 0x9E4E | P keine Hallimpulse LKV  |
| 0x9E4F | P keine Hallimpulse STV  |
| 0x9E50 | P Fehler Motor SLV  |
| 0x9E51 | P Fehler Motor SHV  |
| 0x9E52 | P Fehler Motor LBV  |
| 0x9E53 | P Fehler Motor LNV  |
| 0x9E54 | P Fehler Motor SNV  |
| 0x9E55 | P Fehler Motor KHV  |
| 0x9E56 | P Fehler Motor LKV  |
| 0x9E57 | P Fehler Motor STV  |
| 0x9E58 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9E59 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5A | P Fehler Restheizfeld NTC Kissen  |
| 0x9E5B | P Fehler Restheizfeld NTC Lehne  |
| 0x9E5C | P Fehler Schnellheizfeld Kissen  |
| 0x9E5D | P Fehler Schnellheizfeld Lehne  |
| 0x9E5E | P Fehler Restheizfeld Kissen  |
| 0x9E5F | P Fehler Restheizfeld Lehne  |
| 0x9E60 | P Fehler Heizungstreiber durchlegiert  |
| 0x9E61 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E62 | P Fehler Klima Steuerung Kissen  |
| 0x9E63 | P Fehler Klima Steuerung Lehne  |
| 0x9E64 | P Fehler Aktivsitz Motor  |
| 0x9E65 | P Fehler Aktivsitz Magnet  |
| 0x9E66 | P Fehler Aktivsitz Druckschalter  |
| 0x9E67 | P Fehler Lordose Ventile  |
| 0x9E68 | P Fehler Lordose Pumpe  |
| 0x9E69 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9E6A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6B | P Interner Fehler EEPROM  |
| 0x9E6C | P Energiesparmode aktiv  |
| 0xE444 | P CAN-Low, Physikalischer Busfehler  |
| 0xE447 | P Controller, Bus off  |
| 0x9EA8 | P keine Hallimpulse SLV  |
| 0x9EA9 | P keine Hallimpulse SHV  |
| 0x9EAA | P keine Hallimpulse LBV  |
| 0x9EAB | P keine Hallimpulse LNV  |
| 0x9EAC | P keine Hallimpulse SNV  |
| 0x9EAD | P keine Hallimpulse KHV  |
| 0x9EAE | P keine Hallimpulse LKV  |
| 0x9EAF | P keine Hallimpulse STV  |
| 0x9EB0 | P Fehler Motor SLV  |
| 0x9EB1 | P Fehler Motor SHV  |
| 0x9EB2 | P Fehler Motor LBV  |
| 0x9EB3 | P Fehler Motor LNV  |
| 0x9EB4 | P Fehler Motor SNV  |
| 0x9EB5 | P Fehler Motor KHV  |
| 0x9EB6 | P Fehler Motor LKV  |
| 0x9EB7 | P Fehler Motor STV  |
| 0x9EB8 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9EB9 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBA | P Fehler Restheizfeld NTC Kissen  |
| 0x9EBB | P Fehler Restheizfeld NTC Lehne  |
| 0x9EBC | P Fehler Schnellheizfeld Kissen  |
| 0x9EBD | P Fehler Schnellheizfeld Lehne  |
| 0x9EBE | P Fehler Restheizfeld Kissen  |
| 0x9EBF | P Fehler Restheizfeld Lehne  |
| 0x9EC0 | P Fehler Heizungstreiber durchlegiert  |
| 0x9EC1 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC2 | P Fehler Klima Steuerung Kissen  |
| 0x9EC3 | P Fehler Klima Steuerung Lehne  |
| 0x9EC4 | P Fehler Aktivsitz Motor  |
| 0x9EC5 | P Fehler Aktivsitz Magnet  |
| 0x9EC6 | P Fehler Aktivsitz Druckschalter  |
| 0x9EC7 | P Fehler Lordose Ventile  |
| 0x9EC8 | P Fehler Lordose Pumpe  |
| 0x9EC9 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9ECA | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECB | P Interner Fehler EEPROM  |
| 0x9ECC | P Energiesparmode aktiv  |
| 0xE484 | P CAN-Low, Physikalischer Busfehler  |
| 0xE487 | P Controller, Bus off  |
| 0x9F08 | P keine Hallimpulse SLV  |
| 0x9F09 | P keine Hallimpulse SHV  |
| 0x9F0A | P keine Hallimpulse LBV  |
| 0x9F0B | P keine Hallimpulse LNV  |
| 0x9F0C | P keine Hallimpulse SNV  |
| 0x9F0D | P keine Hallimpulse KHV  |
| 0x9F0E | P keine Hallimpulse LKV  |
| 0x9F0F | P keine Hallimpulse STV  |
| 0x9F10 | P Fehler Motor SLV  |
| 0x9F11 | P Fehler Motor SHV  |
| 0x9F12 | P Fehler Motor LBV  |
| 0x9F13 | P Fehler Motor LNV  |
| 0x9F14 | P Fehler Motor SNV  |
| 0x9F15 | P Fehler Motor KHV  |
| 0x9F16 | P Fehler Motor LKV  |
| 0x9F17 | P Fehler Motor STV  |
| 0x9F18 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F19 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F1B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F1C | P Fehler Schnellheizfeld Kissen  |
| 0x9F1D | P Fehler Schnellheizfeld Lehne  |
| 0x9F1E | P Fehler Restheizfeld Kissen  |
| 0x9F1F | P Fehler Restheizfeld Lehne  |
| 0x9F20 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F21 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F22 | P Fehler Klima Steuerung Kissen  |
| 0x9F23 | P Fehler Klima Steuerung Lehne  |
| 0x9F24 | P Fehler Aktivsitz Motor  |
| 0x9F25 | P Fehler Aktivsitz Magnet  |
| 0x9F26 | P Fehler Aktivsitz Druckschalter  |
| 0x9F27 | P Fehler Lordose Ventile  |
| 0x9F28 | P Fehler Lordose Pumpe  |
| 0x9F29 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F2A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2B | P Interner Fehler EEPROM  |
| 0x9F2C | P Energiesparmode aktiv  |
| 0xE344 | P CAN-Low, Physikalischer Busfehler  |
| 0xE347 | P Controller, Bus off  |
| 0x9F68 | P keine Hallimpulse SLV  |
| 0x9F69 | P keine Hallimpulse SHV  |
| 0x9F6A | P keine Hallimpulse LBV  |
| 0x9F6B | P keine Hallimpulse LNV  |
| 0x9F6C | P keine Hallimpulse SNV  |
| 0x9F6D | P keine Hallimpulse KHV  |
| 0x9F6E | P keine Hallimpulse LKV  |
| 0x9F6F | P keine Hallimpulse STV  |
| 0x9F70 | P Fehler Motor SLV  |
| 0x9F71 | P Fehler Motor SHV  |
| 0x9F72 | P Fehler Motor LBV  |
| 0x9F73 | P Fehler Motor LNV  |
| 0x9F74 | P Fehler Motor SNV  |
| 0x9F75 | P Fehler Motor KHV  |
| 0x9F76 | P Fehler Motor LKV  |
| 0x9F77 | P Fehler Motor STV  |
| 0x9F78 | P Fehler Schnellheizfeld NTC Kissen  |
| 0x9F79 | P Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7A | P Fehler Restheizfeld NTC Kissen  |
| 0x9F7B | P Fehler Restheizfeld NTC Lehne  |
| 0x9F7C | P Fehler Schnellheizfeld Kissen  |
| 0x9F7D | P Fehler Schnellheizfeld Lehne  |
| 0x9F7E | P Fehler Restheizfeld Kissen  |
| 0x9F7F | P Fehler Restheizfeld Lehne  |
| 0x9F80 | P Fehler Heizungstreiber durchlegiert  |
| 0x9F81 | P Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F82 | P Fehler Klima Steuerung Kissen  |
| 0x9F83 | P Fehler Klima Steuerung Lehne  |
| 0x9F84 | P Fehler Aktivsitz Motor  |
| 0x9F85 | P Fehler Aktivsitz Magnet  |
| 0x9F86 | P Fehler Aktivsitz Druckschalter  |
| 0x9F87 | P Fehler Lordose Ventile  |
| 0x9F88 | P Fehler Lordose Pumpe  |
| 0x9F89 | P Interner Fehler Versorgungsspannung U12s  |
| 0x9F8A | P Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8B | P Interner Fehler EEPROM  |
| 0x9F8C | P Energiesparmode aktiv  |
| 0xE384 | P CAN-Low, Physikalischer Busfehler  |
| 0xE387 | P Controller, Bus off  |
| 0x9E9E | S Fehler Motor SLV   |
| 0x9E9F | S Fehler Motor SHV   |
| 0x9EA0 | S Fehler Motor LBV   |
| 0x9EA1 | S Fehler Motor LNV   |
| 0x9EA2 | S Fehler Motor SNV   |
| 0x9EA3 | S Fehler Motor KHV   |
| 0x9EA4 | S Fehler Motor LKV   |
| 0x9EA5 | S Fehler Motor STV   |
| 0x9EA6 | S Fehler Steuergerätetemperatur  |
| 0x9EA7 | S Versorgungsspannungsfehler  |
| 0x9EFE | S Fehler Motor SLV   |
| 0x9EFF | S Fehler Motor SHV   |
| 0x9F00 | S Fehler Motor LBV   |
| 0x9F01 | S Fehler Motor LNV   |
| 0x9F02 | S Fehler Motor SNV   |
| 0x9F03 | S Fehler Motor KHV   |
| 0x9F04 | S Fehler Motor LKV   |
| 0x9F05 | S Fehler Motor STV   |
| 0x9F06 | S Fehler Steuergerätetemperatur  |
| 0x9F07 | S Versorgungsspannungsfehler  |
| 0x9F5E | S Fehler Motor SLV   |
| 0x9F5F | S Fehler Motor SHV   |
| 0x9F60 | S Fehler Motor LBV   |
| 0x9F61 | S Fehler Motor LNV   |
| 0x9F62 | S Fehler Motor SNV   |
| 0x9F63 | S Fehler Motor KHV   |
| 0x9F64 | S Fehler Motor LKV   |
| 0x9F65 | S Fehler Motor STV   |
| 0x9F66 | S Fehler Steuergerätetemperatur  |
| 0x9F67 | S Versorgungsspannungsfehler  |
| 0x9FBE | S Fehler Motor SLV   |
| 0x9FBF | S Fehler Motor SHV   |
| 0x9FC0 | S Fehler Motor LBV   |
| 0x9FC1 | S Fehler Motor LNV   |
| 0x9FC2 | S Fehler Motor SNV   |
| 0x9FC3 | S Fehler Motor KHV   |
| 0x9FC4 | S Fehler Motor LKV   |
| 0x9FC5 | S Fehler Motor STV   |
| 0x9FC6 | S Fehler Steuergerätetemperatur  |
| 0x9FC7 | S Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_70

| ORT | ORTTEXT |
| --- | --- |
| 0x9CA8 | P interner Fehler LM |
| 0x9CA9 | P Klemme 30A Anschluss fehlerhaft |
| 0x9CAA | P Klemme 30B Anschluss fehlerhaft |
| 0x9CAB | P eine Klemme 15 fehlt |
| 0x9CAC | P Bremslichtschalter defekt |
| 0x9CAD | P AHM-Kommunikation gestoert |
| 0x9CAE | P Bedienteilfehler |
| 0x9CAF | P Lichtschalterstellung 1 defekt |
| 0x9CB0 | P Lichtschalterstellung 2 defekt |
| 0x9CB1 | P Dimmer-Poti defekt |
| 0x9CB2 | P LWR-Poti defekt |
| 0x9CB3 | P Sensor Hoehenstand vorne defekt |
| 0x9CB4 | P Sensor Hoehenstand hinten defekt |
| 0x9CB5 | P Energiesparmode aktiv |
| 0x9CB6 | P LWR-Spulenabriss |
| 0x9CB7 | P LWR-Treiberfehler |
| 0x9CB8 | P XIRQ (PWM-Dimmung) defekt |
| 0x9CB9 | P Kurzschlussfehler 4 |
| 0x9CBA | P Kurzschlussfehler 3 |
| 0x9CBB | P Kurzschlussfehler 2 |
| 0x9CBC | P Kurzschlussfehler 1 |
| 0x9CBD | P neuer Fehler 1 |
| 0x9CBE | P neuer Fehler 2 |
| 0x9CBF | P neuer Fehler 3 |
| 0xE504 | P CAN-Low, Physikalischer Fehler |
| 0xE505 | P CAN-High, Kurzschluss VB |
| 0xE506 | P Ground Shift, zu hoch |
| 0xE507 | P Controller, Bus Off |
| 0xE53E | P Telegramm Timeout beim Empfang |
| 0x9308 | S Fernlicht links defekt |
| 0x9309 | S Fernlicht rechts defekt |
| 0x930A | S Abblendlicht links defekt |
| 0x930B | S Abblendlicht rechts defekt |
| 0x930C | S Begrenzungslicht links (E60, E65), aussen (E60-Halogen), defekt |
| 0x930D | S Begrenzungslicht rechts (E60, E65), aussen (E60-Halogen), defekt |
| 0x930E | S Nebelscheinwerfer links defekt |
| 0x930F | S Nebelscheinwerfer rechts defekt |
| 0x9310 | S Fahrtrichtungsanzeiger links vorne 1 defekt |
| 0x9311 | S Fahrtrichtungsanzeiger rechts vorne 1 defekt |
| 0x9312 | S Fahrtrichtungsanzeiger links hinten defekt |
| 0x9313 | S Fahrtrichtungsanzeiger rechts hinten defekt |
| 0x9314 | S Fahrtrichtungsanzeiger links vorne 2 defekt |
| 0x9315 | S Fahrtrichtungsanzeiger rechts vorne 2 defekt |
| 0x9316 | S Bremslicht links defekt |
| 0x9317 | S Bremslicht rechts defekt |
| 0x9318 | S Bremslicht mitte defekt |
| 0x9319 | S Schlusslicht/Bremslicht links defekt |
| 0x931A | S Schlusslicht/Bremslicht rechts defekt |
| 0x931B | S Schlusslicht (E65), Begrenzungslicht (E60-Halogen), links innen defekt |
| 0x931C | S Schlusslicht (E65), Begrenzungslicht (E60-Halogen), rechts innen defekt |
| 0x931D | S Kennzeichenlicht links defekt |
| 0x931E | S Kennzeichenlicht rechts defekt |
| 0x931F | S Nebelschlusslicht links defekt |
| 0x9320 | S Nebelschlusslicht rechts defekt |
| 0x9321 | S Rueckfahrlicht links defekt |
| 0x9322 | S Rueckfahrlicht rechts defekt |
| 0x9323 | S Zusatzfahrtrichtungsanzeiger links defekt |
| 0x9324 | S Zusatzfahrtrichtungsanzeiger rechts defekt |
| 0x9325 | S Seitenmarkierungslicht vorne defekt |
| 0x9326 | S Reserve-Ausgang 4 defekt |
| 0x9327 | S Seitenmarkierungslicht hinten defekt |
| 0x9328 | S Lenkwinkel fehlt |
| 0x9329 | S LoadDump aktiviert |
| 0x932A | S Bedienteil abgerissen |
| 0x932B | S Hardwareleitung zu SZL fehlt |
| 0x932C | S Lichtnotlauf mit Kl.15 aktiv |
| 0x932D | S Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x932E | S ALC-System defekt |
| 0x932F | S ALC-System: AL links abgeschaltet |
| 0x9330 | S ALC-System: AL rechts abgeschaltet |
| 0x9331 | S Signal vom Regenlichtsensor unplausibel |
| 0xFFFF | unbekannter Fehlerort |

### ID_71

| ORT | ORTTEXT |
| --- | --- |
| 0xE544 | P K_CAN_LOW |
| 0xE545 | P K_CAN_HIGH |
| 0xE546 | P GroundShift |
| 0xE547 | P CAN_Controller |
| 0xE57C | P Fehlerwert_erhalten |
| 0xE57D | P Unplausibles_Signal |
| 0xE57E | P Telegramm_Timeout_beim_Emfang |
| 0xE57F | P Fehler_beim_Empfang_NM_Botschaft - nur für Entwicklung relevant |
| 0xE580 | P Fehlerwert_gesendet |
| 0xE581 | P Unplausibles_Signal1 |
| 0xE582 | P Telegramm_Timeout_beim_Senden |
| 0xE583 | P Fehler_beim_Senden_NM_Botschaft - nur für Entwicklung relevant |
| 0x9DE8 | P AHM SG_FEHLER |
| 0x9DE9 | P AHM Reserve_DTC_30 |
| 0x9DEA | P AHM Reserve_DTC_29 |
| 0x9DEB | P AHM Reserve_DTC_28 |
| 0x9DEC | P AHM Reserve_DTC_27 |
| 0x9DED | P AHM Reserve_DTC_26 |
| 0x9DEE | P AHM Reserve_DTC_25 |
| 0x9DEF | P AHM Reserve_DTC_24 |
| 0x9DF0 | P AHM Reserve_DTC_23 |
| 0x9DF1 | P AHM Reserve_DTC_22 |
| 0x9DF2 | P AHM Reserve_DTC_21 |
| 0x9DF3 | P AHM Reserve_DTC_20 |
| 0x9DF4 | P AHM Reserve_DTC_19 |
| 0x9DF5 | P AHM Reserve_DTC_18 |
| 0x9DF6 | P AHM Reserve_DTC_17 |
| 0x9DF7 | P AHM Eingang Bremslicht Hardware |
| 0x9DF8 | P AHM Reserve_DTC_16 |
| 0x9DF9 | P AHM Reserve_DTC_15 |
| 0x9DFA | P AHM Reserve_DTC_14 |
| 0x9DFB | P AHM Reserve_DTC_13 |
| 0x9DFC | P AHM Reserve_DTC_12 |
| 0x9DFD | P AHM Reserve_DTC_11 |
| 0x9DFE | P AHM Reserve_DTC_10 |
| 0x9DFF | P AHM Reserve_DTC_09 |
| 0x9E00 | P AHM Reserve_DTC_08 |
| 0x9E01 | P AHM Reserve_DTC_07 |
| 0x9E02 | P AHM Reserve_DTC_06 |
| 0x9E03 | P AHM Reserve_DTC_05 |
| 0x9E04 | P AHM Reserve_DTC_04 |
| 0x9E05 | P AHM Reserve_DTC_03 |
| 0x9E06 | P AHM Reserve_DTC_02 |
| 0x9E07 | P AHM Reserve_DTC_01 |
| 0x9308 | S AHM SG Fehler |
| 0x9309 | S AHM SG Spannung unter 07 Volt |
| 0x930A | S AHM SG Spannung ueber 16 Volt |
| 0x930B | S AHM SG Spannung BN-Info unplausibel |
| 0x930C | S AHM SG Eingg Bremslicht unplausibel |
| 0x930D | S AHM SG Software DWA-Alarm |
| 0x9400 | S AHM Bremslicht |
| 0x9401 | S AHM Blinker links |
| 0x9402 | S AHM Blinker rechts |
| 0x9403 | S AHM Schlussl. links |
| 0x9404 | S AHM Schlussl. rechts |
| 0x9405 | S AHM Rueckfahrlicht |
| 0x9406 | S AHM Nebellicht |
| 0xFFFF | unbekannter Fehlerort |

### ID_72

| ORT | ORTTEXT |
| --- | --- |
| 0xE584 | K_CAN_KURZSCHLUSS |
| 0xE587 | CAN_INAKTIV |
| 0xE5C3 | CAN_NM_SEND_ERROR |
| 0xA409 | KBM_UNTERSPANNUNG |
| 0xA40B | PROG_FLASH_CRC_FEHLER |
| 0xA40D | EEPROM_WRITE_FEHLER |
| 0xA410 | KURZSCHLUSS_IL |
| 0xA411 | KURZSCHLUSS_VA |
| 0xA418 | KEIN_HALL_A_PULS_FH_BFTH |
| 0xA419 | KEIN_HALL_B_PULS_FH_BFTH |
| 0xA41A | SPANNUNGS_FEHLER_FH_BFTH |
| 0xA41B | STROM_FEHLER_FH_BFTH |
| 0xA41C | RELAIS_KLEBER_FH_BFTH |
| 0xA41D | RELAIS_TOT_FH_BFTH |
| 0xA41E | POSITION_FEHLER_FH_BFTH |
| 0xA41F | MOTOR_FEHLER_FH_BFTH |
| 0xA420 | MECHANIK_FEHLER_FH_BFTH |
| 0xA421 | CAN_TEMP_FEHLER_FH_BFTH |
| 0xA422 | EKS_EE_ERROR_FH_BFTH |
| 0xA423 | MOTOR_HEISS_FH_BFTH |
| 0xA424 | BLOCK_FH_BFTH |
| 0xA428 | FRONTWISCHER_BLOCKIERT |
| 0xA429 | RLS_AUSFALL |
| 0xA42A | HECKWISCHER_BLOCKIERT |
| 0xA430 | SCA_CONTACT_ERROR_SCAOPEN |
| 0xA431 | SCA_CONTACT_ERROR_SCA_CLOSE |
| 0xA432 | SCA_CONTROL_ERROR_ON |
| 0xA433 | SCA_CONTROL_ERROR_OFF |
| 0xA434 | SCA_DIAGNOSE_ERROR |
| 0xA435 | RD_UNLOCK_NOT_ACTIVE |
| 0xA436 | RD_UNLOCK_ACTIVE |
| 0xA437 | RD_LOCK_NOT_ACTIVE |
| 0xA438 | RD_LOCK_ACTIVE |
| 0xA439 | RD_SAVE_NOT_ACTIVE |
| 0xA43A | RD_SAVE_ACTIVE |
| 0xA43B | TR_RELEASE_NOT_ACTIVE |
| 0xA43C | TR_RELEASE_ACTIVE |
| 0xA43D | TR_RELEASE_EXTSW_STICK |
| 0xA43E | AL_PIN72_ERROR |
| 0xA43F | AL_PIN68_ERROR |
| 0xA440 | AL_PIN72_INVALID |
| 0xA441 | AL_PIN68_INVALID |
| 0xA442 | AL_RW_CONTROL_ERROR_ON |
| 0xA443 | RW_CONTROL_ERROR_OFF |
| 0xA444 | AL_RW_DIAGNOSIS_ERROR |
| 0xA447 | Energiesparmode aktiv |
| 0xA448 | KEIN_HALL_A_PULS_FH_FTH |
| 0xA449 | KEIN_HALL_B_PULS_FH_FTH |
| 0xA44A | SPANNUNGS_FEHLER_FH_FTH |
| 0xA44B | STROM_FEHLER_FH_FTH |
| 0xA44C | REALIS_KLEBER_FH_FTH |
| 0xA44D | RELAIS_TOT_FH_FTH |
| 0xA44E | POSITION_FEHLER_FH_FTH |
| 0xA44F | MOTOR_FEHLER_FH_FTH |
| 0xA450 | MECHANIK_FEHLER_FH_FTH |
| 0xA451 | CAN_TEMP_FEHLER_FH_FTH |
| 0xA452 | EKS_EE_ERROR_FH_FTH |
| 0xA453 | MOTOR_HEISS_FH_FTH |
| 0xA454 | BLOCK_FH_FTH |
| 0xA455 | HARD_DOOR_FH_FTH |
| 0xA456 | HARD_DOOR_FH_BFTH |
| 0xA457 | AL_TCCONTROLERROR_ON |
| 0xA458 | AL_TCCONTROLERROR_OFF |
| 0xA459 | CFL_OVERFLOW_FH_FTH |
| 0xA460 | CFL_OVERFLOW_FH_BFTH |
| 0xA461 | WIPER_HANDLE_DEFECT |
| 0xA462 | FWP_SC_TO_GND |
| 0xA463 | RWP_SC_TO_GND |
| 0x9305 | DIAG_TEST |
| 0x9308 | MOVEMENT_ERROR_FH_FTH |
| 0x9309 | MOVEMENT_ERROR_FH_BFTH |
| 0x930B | PANIC_FH_FTH |
| 0x930C | PANIC_FH_BFTH |
| 0x930D | CAN_TEMP_FEHLER_FH_BFTH |
| 0x930E | MOTOR_HEISS_FH_BFTH |
| 0x930F | BLOCK_FH_BFTH |
| 0x9310 | CAN_TEMP_FEHLER_FH_FTH |
| 0x9311 | MOTOR_HEISS_FH_FTH |
| 0x9312 | BLOCK_FH_FTH |
| 0x9315 | HARD_DOOR_FH_FTH |
| 0x9316 | HARD_DOOR_FH_BFTH |
| 0x9317 | PINCHING_DETECTED_FH_FTH |
| 0x9318 | PINCHING_DETECTED_FH_BFTH |
| 0xFFFF | unbekannter Fehlerort |

### ID_73

| ORT | ORTTEXT |
| --- | --- |
| 0xA468 | Kabelbruch extern |
| 0xA469 | Elektronikausfall intern |
| 0xA46A | Uebertemp Abschaltung (kein defekt) |
| 0xA46B | EEP Checksumme falsch |
| 0xA46C | Energiesparmode aktiv |
| 0xE5C4 | CAN LOW ERROR |
| 0xE5C7 | CAN BUS OFF |
| 0xFFFF | unbekannter Fehlerort |

### ID_74

| ORT | ORTTEXT |
| --- | --- |
| 0xA488 | P Kabelbruch extern |
| 0xA489 | P Elektronikausfall intern |
| 0xA48A | P Uebertemp Abschaltung (kein defekt) |
| 0xA48B | P EEP Checksumme falsch |
| 0xA48C | P Energiesparmode aktiv |
| 0xE604 | P CAN LOW FEHLER |
| 0xE607 | P CAN BUS AUS |
| 0xFFFF | unbekannter Fehlerort |

### ID_75

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_76

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_77

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_78

| ORT | ORTTEXT |
| --- | --- |
| 0x9C48 | P Warmluftmotor links |
| 0x9C49 | P Warmluftmotor rechts |
| 0x9C4A | P Umluftmotor |
| 0x9C4B | P Entfrostungsmotor |
| 0x9C4C | P Fussraummotor links (Fond) |
| 0x9C4D | P Fussraummotor rechts (Fond) |
| 0x9C4E | P Kaltluft links |
| 0x9C4F | P Kaltluft rechts |
| 0x9C50 | P Fondbelueftung links |
| 0x9C51 | P Fondbelueftung rechts |
| 0x9C52 | P Reserve 1 |
| 0x9C53 | P Reserve 2 |
| 0x9C54 | P Reserve 3 |
| 0x9C55 | P Frischluftmotor |
| 0x9C56 | P Beschlagsensor |
| 0x9C57 | P Geblaese-Endstufe |
| 0x9C58 | P Innentemperaturfuehler |
| 0x9C59 | P Stromsense f. KMV |
| 0x9C5A | P Stromsense f. Zusatz-WP |
| 0x9C5B | P Monitor Drucksensor-Versorgung |
| 0x9C5C | P Stromsense AUC-Versorgung/Heizung |
| 0x9C5D | P Stromsense f. Treiberversorgung |
| 0x9C5E | P Leiterplatten-Code |
| 0x9C5F | P Schichtungstemperatur links |
| 0x9C60 | P Schichtungstemperatur rechts |
| 0x9C61 | P Reserve 5 |
| 0x9C62 | P Verdampfertemperaturfuehler |
| 0x9C63 | P Drucksensor |
| 0x9C64 | P AUC-Sensor |
| 0x9C65 | P Temp. Waermetauscher links |
| 0x9C66 | P Temp. Waermetauscher rechts |
| 0x9C67 | P Poti Temperatur links |
| 0x9C68 | P Poti Temperatur rechts |
| 0x9C69 | P Poti Geblaese links |
| 0x9C6A | P Poti Geblaese rechts |
| 0x9C6B | P Monitor AUC-Versorgung/Heizung |
| 0x9C6C | P Reserve 4 |
| 0x9C6D | P Monitor Heckrollo |
| 0x9C6E | P Solarsensor links |
| 0x9C6F | P Solarsensor rechts |
| 0x9C70 | P Reserve 6 |
| 0x9C71 | P Monitor Versorgung High-Ausstattung |
| 0x9C72 | P Poti Fondschichtung links |
| 0x9C73 | P Poti Fondschichtung rechts |
| 0x9C74 | P Poti Fondgeblaese links |
| 0x9C75 | P Poti Fondgeblaese rechts |
| 0x9C76 | P Zusatzwasserpumpe |
| 0x9C77 | P Kaeltemittelverdichter |
| 0x9C78 | P Wischerablagenheizung |
| 0x9C79 | P Wasserventil links |
| 0x9C7A | P Wasserventil rechts |
| 0x9C7B | P Innenfuehlergeblaese |
| 0x9C7C | P KMV Sperrventil |
| 0x9C7D | P Heckrollo |
| 0x9C7E | P Treiber-Reserve 1 |
| 0x9C7F | P Treiber-Reserve 2 |
| 0x9C80 | P Treiber-Reserve 3 |
| 0x9C81 | P KCAN: Waermestrom Motor ( DME1 ) |
| 0x9C82 | P SH/SK AUS wg. Reichweiten od. zu hoher Drehzahl |
| 0x9C83 | P Checksumme EEPROM |
| 0x9C84 | P KCAN: Kilometerstand ( KOMBI ) |
| 0x9C85 | P KCAN: Klemmenstatus ( CAS ) |
| 0x9C86 | P Heizbare Heckscheibe |
| 0x9C87 | P Zusatzluefter |
| 0x9C88 | P KCAN: Relativzeit ( Kombi ) |
| 0x9C90 | P KCAN: Motor laeuft ( DME1 ) |
| 0x9C92 | P KCAN: Aussentemperatur ( Kombi ) |
| 0x9C93 | P KCAN: Fahrzeuggeschwindigkeit ( DSC ) |
| 0x9C94 | P KCAN: Kuehlmitteltemperatur ( DME1 ) |
| 0x9C95 | P KCAN: Motordrehzahl ( DME1 ) |
| 0x9C96 | P KCAN: Dimmung ( LSZ ) |
| 0x9C97 | P KCAN: Powermanagement Batteriespannung ( PM ) |
| 0x9C98 | P KCAN: Stand/Zuheizer ( SH/ZH ) |
| 0x9CA7 | P Energiesparmode aktiv |
| 0xE704 | P CAN-Low, Physikalischer Busfehler |
| 0xE705 | P Netzwerkmanagementfehler |
| 0xE706 | P MUX4-Busfehler |
| 0xE707 | P Controller, Bus Off |
| 0xFFFF | unbekannter Fehlerort |

### ID_79

| ORT | ORTTEXT |
| --- | --- |
| 0xA1E8 | P Belueftungsmotor links |
| 0xA1E9 | P Belueftungsmotor rechts |
| 0xA1EA | P Schichtungsmotor links |
| 0xA1EB | P Schichtungsmotor rechts |
| 0xA1EC | P Geblaese-Endstufe |
| 0xA1ED | P Poti Temperatur links |
| 0xA1EE | P Poti Temperatur rechts |
| 0xA1EF | P Poti Geblaese links |
| 0xA1F0 | P Poti Geblaese rechts |
| 0xA1F1 | P Verdampfertemperaturfuehler |
| 0xA1F2 | P Schichtungstemperatur links |
| 0xA1F3 | P Schichtungstemperatur rechts |
| 0xA1F4 | P Monitor Tastenerfassung |
| 0xA1F5 | P Kaeltemittelventil Front |
| 0xA1F6 | P Kaeltemittelventil Fond |
| 0xA1F7 | P Symbolbeleuchtung linkes BDT |
| 0xA1F8 | P Symbolbeleuchtung Kuehlfach |
| 0xA1F9 | P Funktionsbeleuchtung OFF |
| 0xA1FA | P Funktionsbeleuchtung MAX-AC |
| 0xA1FB | P Funktionsbeleuchtung KUEHLFACH |
| 0xA1FC | P Monitor VCC linker Satellit |
| 0xA201 | P KCAN:  Aussentemperatur ( Kombi ) |
| 0xA202 | P KCAN:  Dimmung ( LSZ ) |
| 0xA203 | P KCAN:  Klemmenstatus ( CAS ) |
| 0xA204 | P KCAN:  Motordrehzahl ( DME1 ) |
| 0xA205 | P KCAN:  Powermanagement Batteriespannung ( PM ) |
| 0xA206 | P KCAN:  Kuehlmitteltemperatur ( DME1 ) |
| 0xA207 | P Energiesparmode aktiv |
| 0xE744 | P CAN-Low, Physikalischer Busfehler |
| 0xE745 | P Netzwerkmanagementfehler |
| 0xE746 | P MUX4-Busfehler |
| 0xFFFF | unbekannter Fehlerort |

### ID_7A

| ORT | ORTTEXT |
| --- | --- |
| 0x9B28 | P Steuergeraet fehlerhaft |
| 0x9B29 | P Kein Start |
| 0x9B2A | P Flammabbruch |
| 0x9B2B | P Ueber-/Unterspannung |
| 0x9B2C | P Fremdlicht |
| 0x9B2D | P Ueberhitzung |
| 0x9B2E | P Heizgeraeteverriegelung |
| 0x9B2F | P Dosierpumpenkreis fehlerhaft |
| 0x9B30 | P Brennluftgeblaesekreis fehlerhaft |
| 0x9B31 | P Gluehelement / Brennraumsensor fehlerhaft |
| 0x9B32 | P Wasserpumpenkreis fehlerhaft |
| 0x9B33 | P Absperrventilkreis fehlerhaft |
| 0x9B34 | P Kraftstoffcodierung fehlerhaft |
| 0x9B35 | P Plausibilitaetsfehler |
| 0x9B36 | P Betriebsmodus fehlerhaft |
| 0xE784 | P CAN Low Leitungsfehler |
| 0xE787 | P Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### ID_7B

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_7C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_7D

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | Löschmarkierung Diagnosedaten |
| 0xc868 | P Watchdog-Reset uP |
| 0xc869 | P Clock-Monitor-Reset uP |
| 0xc86a | P Illegal Opcode uP |
| 0xc86b | P Falsche Fahrgestellnummer |
| 0xc86c | P Wakeup durch Unterspannung |
| 0xc86d | P Unterspannung im Betrieb (Ubatt < 9V für mindestens eine Minute) |
| 0xc86f | P Codierdaten Prüfsummenfehler |
| 0xc870 | P Flash - Speicher defekt |
| 0xc871 | P EEPROM - Speicher defekt |
| 0xc86e | S Power On Reset |
| 0xc872 | S EEPROM -> RAM Abgleich |
| 0xc873 | S DSM read address error |
| 0xc874 | S TAS response invaild |
| 0xFFFF | unbekannter Fehlerort |

### ID_7E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_7F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_80

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_81

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_82

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_83

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_84

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_85

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_86

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_87

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_88

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_89

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_8A

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_8B

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_8C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_8D

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_8E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_8F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_90

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_91

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_92

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_93

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_94

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_95

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_96

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_97

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_98

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_99

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_9A

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_9B

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_9C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_9D

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_9E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_9F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A0

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A1

| ORT | ORTTEXT |
| --- | --- |
| 0x953b | Timeout ID 12H |
| 0x9828 | Watchdog-Reset uP |
| 0x9829 | Clock-Monitor-Reset uP |
| 0x982a | Illegal Opcode uP |
| 0x982b | Falsche Fahrgestellnummer |
| 0x982c | Systemzeitfehler |
| 0x982d | Timeout ID 01H |
| 0x982e | Timeout ID 02H |
| 0x982f | Timeout ID 03H |
| 0x9830 | Timeout ID 04H |
| 0x9831 | Timeout ID 05H |
| 0x9832 | Timeout ID 06H |
| 0x9833 | Timeout ID 07H |
| 0x9834 | Timeout ID 08H |
| 0x9835 | Timeout ID 09H |
| 0x9836 | Timeout ID 0AH |
| 0x9837 | Timeout ID 0BH |
| 0x9838 | Timeout ID 0CH |
| 0x9839 | Timeout ID 0DH |
| 0x983a | Timeout ID 11H |
| 0x983c | Timeout ID 20H |
| 0x983d | Timeout ID 21H |
| 0x983e | Timeout ID 22H |
| 0x983f | Timeout ID 71H |
| 0x9840 | Codierdatenchecksumme falsch |
| 0x9841 | Codierdaten falsch |
| 0x9842 | PDC_3 : zu wenig Telegramme |
| 0x9843 | PDC_3 : Datenfehler in Telegramm |
| 0x9844 | PDC_3 : Uebertragungsfehler |
| 0x9845 | unplausible Crash-Schwere |
| 0x9846 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9847 | Kurzschluss ZK1 nach Masse |
| 0x9848 | Kurzschluss ZK1 nach Plus |
| 0x9849 | Widerstand Zuendpille ZK1 zu klein |
| 0x984a | Widerstand Zuendpille ZK1 zu gross |
| 0x984b | Widerstand Zuendpille ZK1 nicht gemessen |
| 0x984c | Unterbrechung ZK1 |
| 0x984d | Spannung ZK1 n.i.O. |
| 0x984e | Zuendkondensator ZK1 n.i.O. |
| 0x984f | Codierung/Konfiguration ZK1 unstimmig |
| 0x9850 | Unterbrechung Entladekreis ZK1 |
| 0x9851 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9852 | Kurzschluss ZK2 nach Masse |
| 0x9853 | Kurzschluss ZK2 nach Plus |
| 0x9854 | Widerstand Zuendpille ZK2 zu klein |
| 0x9855 | Widerstand Zuendpille ZK2 zu gross |
| 0x9856 | Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9857 | Unterbrechung ZK2 |
| 0x9858 | Spannung ZK2 n.i.O. |
| 0x9859 | Zuendkondensator ZK2 n.i.O. |
| 0x985a | Codierung/Konfiguration ZK2 unstimmig |
| 0x985b | Unterbrechung Entladekreis ZK2 |
| 0x985c | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 |
| 0x985d | Kurzschluss ZK3 nach Masse |
| 0x985e | Kurzschluss ZK3 nach Plus |
| 0x985f | Widerstand Zuendpille ZK3 zu klein |
| 0x9860 | Widerstand Zuendpille ZK3 zu gross |
| 0x9861 | Widerstand Zuendpille ZK3 nicht gemessen |
| 0x9862 | Unterbrechung ZK3 |
| 0x9863 | Spannung ZK3 n.i.O. |
| 0x9864 | Zuendkondensator ZK3 n.i.O. |
| 0x9865 | Codierung/Konfiguration ZK3 unstimmig |
| 0x9866 | Unterbrechung Entladekreis ZK3 |
| 0x9867 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 |
| 0x9868 | Kurzschluss ZK4 nach Masse |
| 0x9869 | Kurzschluss ZK4 nach Plus |
| 0x986a | Widerstand Zuendpille ZK4 zu klein |
| 0x986b | Widerstand Zuendpille ZK4 zu gross |
| 0x986c | Widerstand Zuendpille ZK4 nicht gemessen |
| 0x986d | Unterbrechung ZK4 |
| 0x986e | Spannung ZK4 n.i.O. |
| 0x986f | Zuendkondensator ZK4 n.i.O. |
| 0x9870 | Codierung/Konfiguration ZK4 unstimmig |
| 0x9871 | Unterbrechung Entladekreis ZK4 |
| 0x9872 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK5 |
| 0x9873 | Kurzschluss ZK5 nach Masse |
| 0x9874 | Kurzschluss ZK5 nach Plus |
| 0x9875 | Widerstand Zuendpille ZK5 zu klein |
| 0x9876 | Widerstand Zuendpille ZK5 zu gross |
| 0x9877 | Widerstand Zuendpille ZK5 nicht gemessen |
| 0x9878 | Unterbrechung ZK5 |
| 0x9879 | Spannung ZK5 n.i.O. |
| 0x987a | Zuendkondensator ZK5 n.i.O. |
| 0x987b | Codierung/Konfiguration ZK5 unstimmig |
| 0x987c | Unterbrechung Entladekreis ZK5 |
| 0x987d | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK6 |
| 0x987e | Kurzschluss ZK6 nach Masse |
| 0x987f | Kurzschluss ZK nach Plus |
| 0x9880 | Widerstand Zuendpille ZK6 zu klein |
| 0x9881 | Widerstand Zuendpille ZK6 zu gross |
| 0x9882 | Widerstand Zuendpille ZK6 nicht gemessen |
| 0x9883 | Unterbrechung ZK6 |
| 0x9884 | Spannung ZK6 n.i.O. |
| 0x9885 | Zuendkondensator ZK6 n.i.O. |
| 0x9886 | Codierung/Konfiguration ZK6 unstimmig |
| 0x9887 | Unterbrechung Entladekreis ZK6 |
| 0x9888 | Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9889 | Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x988a | Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x988b | Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x988c | Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung) |
| 0x988d | Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung) |
| 0x988e | Statusfehler Beschleunigungssensor (y-Richtung) |
| 0x988f | Hallschalter:Kurzschluss |
| 0x9890 | Hallschalter:unplausibler Meßwert |
| 0x9891 | Hallschalter:Unterbrechung |
| 0x9892 | Alarm im Pfad |
| 0x9893 | Unterbrechung SBE1 |
| 0x9894 | Kurzschluß SBE1 |
| 0x9895 | Kommunikationssttörung SBE1 |
| 0x9896 | Algo-Parameter inkonsistent |
| 0x9897 | EAM-Parameter inkonsistent |
| 0x9898 | Zuendversuch erfolgt |
| 0x9899 | COP-Watchdog fehlerhaft |
| 0x989a | Reserve |
| 0x989b | Reserve |
| 0x989c | Reserve |
| 0x989d | Reserve |
| 0x989e | V10a unplausibel |
| 0x989f | Power-On-Reset uP |
| 0x98a0 | Diagnose S/E-Modul (Lichtleistung) |
| 0x98a1 | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x98a2 | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x98a3 | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x98a4 | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x98a5 | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x98a6 | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x98a7 | EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_A2

| ORT | ORTTEXT |
| --- | --- |
| 0x98a8 | Watchdog-Reset uP |
| 0x98a9 | Clock-Monitor-Reset uP |
| 0x98aa | Illegal Opcode uP |
| 0x98ab | Falsche Fahrgestellnummer |
| 0x98ac | Systemzeitfehler |
| 0x98ad | Timeout ID 01H |
| 0x98ae | Timeout ID 02H |
| 0x98af | Timeout ID 03H |
| 0x98b0 | Timeout ID 04H |
| 0x98b1 | Timeout ID 05H |
| 0x98b2 | Timeout ID 06H |
| 0x98b3 | Timeout ID 07H |
| 0x98b4 | Timeout ID 08H |
| 0x98b5 | Timeout ID 09H |
| 0x98b6 | Timeout ID 0AH |
| 0x98b7 | Timeout ID 0BH |
| 0x98b8 | Timeout ID 0CH |
| 0x98b9 | Timeout ID 0DH |
| 0x98ba | Timeout ID 11H |
| 0x98bb | Timeout ID 12H |
| 0x98bc | Timeout ID 20H |
| 0x98bd | Timeout ID 21H |
| 0x98be | Timeout ID 22H |
| 0x98bf | Timeout ID 71H |
| 0x98c0 | Codierdatenchecksumme falsch |
| 0x98c1 | Codierdaten falsch |
| 0x98c2 | PDC_3 : zu wenig Telegramme |
| 0x98c3 | PDC_3 : Datenfehler in Telegramm |
| 0x98c4 | PDC_3 : Uebertragungsfehler |
| 0x98c5 | unplausible Crash-Schwere |
| 0x98c6 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x98c7 | Kurzschluss ZK1 nach Masse |
| 0x98c8 | Kurzschluss ZK1 nach Plus |
| 0x98c9 | Widerstand Zuendpille ZK1 zu klein |
| 0x98ca | Widerstand Zuendpille ZK1 zu gross |
| 0x98cb | Widerstand Zuendpille ZK1 nicht gemessen |
| 0x98cc | Unterbrechung ZK1 |
| 0x98cd | Spannung ZK1 n.i.O. |
| 0x98ce | Zuendkondensator ZK1 n.i.O. |
| 0x98cf | Codierung/Konfiguration ZK1 unstimmig |
| 0x98d0 | Unterbrechung Entladekreis ZK1 |
| 0x98d1 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x98d2 | Kurzschluss ZK2 nach Masse |
| 0x98d3 | Kurzschluss ZK2 nach Plus |
| 0x98d4 | Widerstand Zuendpille ZK2 zu klein |
| 0x98d5 | Widerstand Zuendpille ZK2 zu gross |
| 0x98d6 | Widerstand Zuendpille ZK2 nicht gemessen |
| 0x98d7 | Unterbrechung ZK2 |
| 0x98d8 | Spannung ZK2 n.i.O. |
| 0x98d9 | Zuendkondensator ZK2 n.i.O. |
| 0x98da | Codierung/Konfiguration ZK2 unstimmig |
| 0x98db | Unterbrechung Entladekreis ZK2 |
| 0x98dc | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 |
| 0x98dd | Kurzschluss ZK3 nach Masse |
| 0x98de | Kurzschluss ZK3 nach Plus |
| 0x98df | Widerstand Zuendpille ZK3 zu klein |
| 0x98e0 | Widerstand Zuendpille ZK3 zu gross |
| 0x98e1 | Widerstand Zuendpille ZK3 nicht gemessen |
| 0x98e2 | Unterbrechung ZK3 |
| 0x98e3 | Spannung ZK3 n.i.O. |
| 0x98e4 | Zuendkondensator ZK3 n.i.O. |
| 0x98e5 | Codierung/Konfiguration ZK3 unstimmig |
| 0x98e6 | Unterbrechung Entladekreis ZK3 |
| 0x98e7 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 |
| 0x98e8 | Kurzschluss ZK4 nach Masse |
| 0x98e9 | Kurzschluss ZK4 nach Plus |
| 0x98ea | Widerstand Zuendpille ZK4 zu klein |
| 0x98eb | Widerstand Zuendpille ZK4 zu gross |
| 0x98ec | Widerstand Zuendpille ZK4 nicht gemessen |
| 0x98ed | Unterbrechung ZK4 |
| 0x98ee | Spannung ZK4 n.i.O. |
| 0x98ef | Zuendkondensator ZK4 n.i.O. |
| 0x98f0 | Codierung/Konfiguration ZK4 unstimmig |
| 0x98f1 | Unterbrechung Entladekreis ZK4 |
| 0x98f2 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK5 |
| 0x98f3 | Kurzschluss ZK5 nach Masse |
| 0x98f4 | Kurzschluss ZK5 nach Plus |
| 0x98f5 | Widerstand Zuendpille ZK5 zu klein |
| 0x98f6 | Widerstand Zuendpille ZK5 zu gross |
| 0x98f7 | Widerstand Zuendpille ZK5 nicht gemessen |
| 0x98f8 | Unterbrechung ZK5 |
| 0x98f9 | Spannung ZK5 n.i.O. |
| 0x98fa | Zuendkondensator ZK5 n.i.O. |
| 0x98fb | Codierung/Konfiguration ZK5 unstimmig |
| 0x98fc | Unterbrechung Entladekreis ZK5 |
| 0x98fd | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK6 |
| 0x98fe | Kurzschluss ZK6 nach Masse |
| 0x98ff | Kurzschluss ZK nach Plus |
| 0x9900 | Widerstand Zuendpille ZK6 zu klein |
| 0x9901 | Widerstand Zuendpille ZK6 zu gross |
| 0x9902 | Widerstand Zuendpille ZK6 nicht gemessen |
| 0x9903 | Unterbrechung ZK6 |
| 0x9904 | Spannung ZK6 n.i.O. |
| 0x9905 | Zuendkondensator ZK6 n.i.O. |
| 0x9906 | Codierung/Konfiguration ZK6 unstimmig |
| 0x9907 | Unterbrechung Entladekreis ZK6 |
| 0x9908 | Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9909 | Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung) |
| 0x990a | Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung) |
| 0x990b | Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x990c | Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung) |
| 0x990d | Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung) |
| 0x990e | Statusfehler Beschleunigungssensor (y-Richtung) |
| 0x990f | Hallschalter:Kurzschluss |
| 0x9910 | Hallschalter:unplausibler Meßwert |
| 0x9911 | Hallschalter:Unterbrechung |
| 0x9912 | Alarm im Pfad |
| 0x9913 | Unterbrechung SBE1 |
| 0x9914 | Kurzschluß SBE1 |
| 0x9915 | Kommunikationssttörung SBE1 |
| 0x9916 | Algo-Parameter inkonsistent |
| 0x9917 | EAM-Parameter inkonsistent |
| 0x9918 | Zuendversuch erfolgt |
| 0x9919 | COP-Watchdog fehlerhaft |
| 0x991a | BLeitung Unterbrechung |
| 0x991b | BLeitung Kurzschluss Masse |
| 0x991c | BLeitung Kurzschluss Plus |
| 0x991d | BLeitung unplausibler Wert |
| 0x991e | V10a unplausibel |
| 0x991f | Power-On-Reset uP |
| 0x9920 | Diagnose S/E-Modul (Lichtleistung) |
| 0x9921 | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9922 | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9923 | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9924 | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9925 | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9926 | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9927 | EMV-Fehler im Zuend-Ic |
| 0xFFFF | unbekannter Fehlerort |

### ID_A3

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A4

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A5

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A6

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A7

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A8

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_A9

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_AA

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_AB

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_AC

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_AD

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_AE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_AF

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B0

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B1

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B3

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B4

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B5

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B6

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B7

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B8

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_B9

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_BA

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_BB

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_BC

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_BD

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_BE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_BF

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C0

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C1

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C3

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C4

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C5

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C6

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C7

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C8

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_C9

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_CA

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_CB

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_CC

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_CD

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_CE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_CF

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D0

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D1

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D3

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D4

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D5

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D6

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D7

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D8

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_D9

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_DA

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_DB

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_DC

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_DD

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_DE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_DF

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E0

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E1

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E3

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E4

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E5

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E6

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E7

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E8

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_E9

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_EA

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_EB

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_EC

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_ED

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_EE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_EF

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F0

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F1

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F3

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F4

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F5

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F6

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F7

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F8

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_F9

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_FA

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_FB

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_FC

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_FD

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_FE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_FF

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### TELEGRAM

| TEL_ID | TEL_NAME | SENDER |
| --- | --- | --- |
| 0xA8 | Drehmoment 1 	 | 	DDE1; DME1	 |
| 0xA9 | Drehmoment 2 (10)	 | 	DDE1; DME1	 |
| 0xAA | Drehmoment 3 	 | 	DDE1; DME1	 |
| 0xAD | Verzögerungsanforderung ACC [9]	 | 	ACC_Modul	 |
| 0xAE | Verzögerungsanforderung EMF	 | 	EMF	 |
| 0xB5 | Drehmomentanforderung EGS [9]	 | 	EGS_EL	 |
| 0xB6 | Drehmomentanforderung DSC [7]	 | 	DSC_RB	 |
| 0xB7 | Drehmomentanforderung ACC [10]	 | 	ACC_Modul	 |
| 0xB9 | Drehmomentanforderung AFS [3]	 | 	 AFS	 |
| 0xBA | Getriebedaten (21)	 | 	EGS_EL	 |
| 0xBD | Drehmomentanforderung SSG [6]	 | 	SSG	 |
| 0xBE | Alive Zähler [12]	 | 	ARS_Modul; SIM	 |
| 0xC0 | Alive Zentrales Gateway [1]	 | 	ZGM	 |
| 0xC4 | Lenkradwinkel	 | 	SZL	 |
| 0xCA | Gierrate Anforderung [7]	 | 	DSC_RB	 |
| 0xCB | Gierrate Antwort [8]	 | 	Y_SENS_1	 |
| 0xCE | Radgeschwindigkeit 	 | 	DSC_RB	 |
| 0xCF | Drehmoment 4 [3]	 | 	DME1	 |
| 0xD2 | Bedienung Sitzverstellung BF [6]	 | 	BZM	 |
| 0xD3 | Fernbedienung Sitzverstellung BF [2]	 | 	BZM_Fond	 |
| 0xD6 | Bedienung Sitzverstellung BFH [7]	 | 	BZM_Fond	 |
| 0xDA | Bedienung Sitzverstellung FA [6]	 | 	BZM	 |
| 0xDE | Bedienung Sitzverstellung FAH [7]	 | 	BZM_Fond	 |
| 0xE2 | Status Zentralverriegelung BFT [11]	 | 	TM_BFT	 |
| 0xE6 | Status Zentralverriegelung BFTH [11]	 | 	TM_BFTH	 |
| 0xEA | Status Zentralverriegelung FAT [11]	 | 	TM_FAT	 |
| 0xEE | Status Zentralverriegelung FATH [11]	 | 	TM_FATH	 |
| 0xF2 | Status Zentralverriegelung HK [13]	 | 	PM	 |
| 0xF6 | Steuerung Außenspiegel [9]	 | 	TM_FAT	 |
| 0xFA | Steuerung Fensterheber FAT [10]	 | 	TM_FAT	 |
| 0xFB | Steuerung Fensterheber BFT [5]	 | 	TM_BFT	 |
| 0xFC | Steuerung Fensterheber FATH [5]	 | 	TM_FATH	 |
| 0xFD | Steuerung Fensterheber BFTH [5]	 | 	TM_BFTH	 |
| 0x103 | Bedienung Taster Frontkamera [1]	 | 	Security_1	 |
| 0x110 | Drehmoment KSG [2]	 | 	KSG	 |
| 0x130 | Klemmenstatus [19]	 | 	CAS	 |
| 0x190 | Anzeige ACC [13]	 | 	ACC_Modul	 |
| 0x192 | Bedienung Getriebewahlschalter [16]	 | 	SZL	 |
| 0x194 | Bedienung Tempomat/ACC [13]	 | 	SZL	 |
| 0x19E | Status DSC K-CAN; PT-CAN	 | 	DSC_RB	 |
| 0x1A0 | Geschwindigkeit K-CAN; PT-CAN	 | 	DSC_RB	 |
| 0x1A2 | Getriebedaten 2 [6]	 | 	EGS_EL	 |
| 0x1A6 | Wegstrecke [6]	 | 	DSC_RB	 |
| 0x1AA | Effekt ErgoCommander [10]	 | 	MMI_GT	 |
| 0x1AC | Status ARS-Modul [13]	 | 	ARS_Modul	 |
| 0x1AE | Effekt FondCommander [4]	 | 	MMI_Fond	 |
| 0x1B2 | Status Klima Kälteabsperrventile [9]	 | 	HKA	 |
| 0x1B4 | Status Kombi [14]	 | 	Kombi	 |
| 0x1B5 | Wärmestrom/Lastmoment Klima [14]	 | 	IHKA	 |
| 0x1B6 | Wärmestrom Motor [11]	 | 	DDE1; DME1	 |
| 0x1B8 | Bedienung ErgoCommander [6]	 | 	ZBE	 |
| 0x1C0 | Bedienung FondCommander [3]	 | 	ZBE_FOND	 |
| 0x1C2 | Abstandsmeldung PDC [5]	 | 	PDC	 |
| 0x1C3 | Abstandsmeldung 2 PDC [3]	 | 	PDC	 |
| 0x1C6 | Akustikmeldung PDC [5]	 | 	PDC	 |
| 0x1CA | Bedienung Taster FondCommander [8]	 | 	BZM_Fond	 |
| 0x1CC | Bedienung Lautstärke FondCommander [7]	 | 	BZM_Fond	 |
| 0x1D0 | Motordaten [13]	 | 	DDE1; DME1	 |
| 0x1D2 | Anzeige Getriebedaten [22]	 | 	EGS_EL	 |
| 0x1D6 | Bedienung Taster Audio/Telefon [12]	 | 	SZL	 |
| 0x1D8 | Bedienung Klima Luftverteilung FA [13]	 | 	MMI_GT	 |
| 0x1DA | Bedienung Klima Fernwirken [5]	 | 	CAS	 |
| 0x1DC | Bedienung Schichtung Sitzheizung [1]	 | 	MMI_GT	 |
| 0x1DE | Bedienung Klima Fond [8]	 | 	MMI_GT	 |
| 0x1E0 | Bedienung Klima Luftverteilung BF [7]	 | 	MMI_GT	 |
| 0x1E2 | Bedienung Klima Front [11]	 | 	MMI_GT	 |
| 0x1E5 | Bedienung Sitzheizung/Sitzklima FAH [2]	 | 	BZM_Fond	 |
| 0x1E7 | Bedienung Sitzheizung/Sitzklima FA [7]	 | 	BZM	 |
| 0x1E8 | Bedienung Sitzheizung/Sitzklima BF [7]	 | 	BZM	 |
| 0x1E9 | Bedienung Sitzheizung/Sitzklima BFH [3]	 | 	BZM_Fond	 |
| 0x1EA | Bedienung Lenksäulenverstellung [5]	 | 	SZL	 |
| 0x1EB | Bedienung Aktivsitz FA (4)	 | 	BZM	 |
| 0x1EC | Bedienung Aktivsitz BF (4)	 | 	BZM	 |
| 0x1EE | Bedienung Lenkstockstaster [6]	 | 	SZL	 |
| 0x1F0 | Bedienung Sitzmemory BFH [2]	 | 	BZM_Fond	 |
| 0x1F1 | Bedienung Sitzmemory FAH [2]	 | 	BZM_Fond	 |
| 0x1F2 | Bedienung Sitzmemory BF [3]	 | 	BZM	 |
| 0x1F3 | Bedienung Sitzmemory FA [4]	 | 	BZM	 |
| 0x1F4 | Fernbedienung Sitzmemory BF [2]	 | 	BZM_Fond	 |
| 0x1F6 | Blinken [6]	 | 	LM	 |
| 0x1FC | Status AFS [4]	 | 		 |
| 0x1FE | Crash [12]	 | 	SIM	 |
| 0x200 | Regelgeschwindigkeit Stufentempomat [7]	 | 	DDE1; DME1	 |
| 0x202 | Dimmung [10]	 | 	LM	 |
| 0x203 | Bedienung Aktivsitz FAH (3)	 | 	BZM_Fond	 |
| 0x204 | Bedienung Aktivsitz BFH (3)	 | 	BZM_Fond	 |
| 0x20B | Memoryverstellung [6]	 | 	SM_FA	 |
| 0x20C | Steuerung Lenksäule [4]	 | 	SM_FA	 |
| 0x20D | Position Lenksäule [5]	 | 	CIM	 |
| 0x212 | Höhenstände Luftfeder [8]	 | 	EHC	 |
| 0x21A | Lampenzustand [13]	 | 	LM	 |
| 0x21C | Bedienung Night-Vision [2]	 | 	MMI_GT	 |
| 0x21E | Status Night-Vision [2]	 |  NVC		 |
| 0x226 | Regensensor-Wischergeschwindigkeit [8]	 | 	RLS	 |
| 0x228 | Bedienung Sonderfunktion [8]	 | 	MMI_GT	 |
| 0x22A | Status BFS [10]	 | 	SM_BF	 |
| 0x22E | Status BFSH [7]	 | 	SM_BFH	 |
| 0x232 | Status FAS [10]	 | 	SM_FA	 |
| 0x236 | Status FASH [7]	 | 	SM_FAH	 |
| 0x23A | Status Funkschlüssel [13]	 | 	CAS	 |
| 0x23E | Status Klima Fond [11]	 | 	HKA	 |
| 0x242 | Status Klima Front [11]	 | 	IHKA	 |
| 0x246 | Status Klima Front Bedienteil [11]	 | 	IHKA	 |
| 0x24A | Status PDC [6]	 | 	PDC	 |
| 0x252 | Wischerstatus [8]	 | 	Wischermodul	 |
| 0x256 | Challenge Passive Access [10]	 | 	CAS	 |
| 0x258 | Status Transmission Passive Access [4]	 | 	PGS	 |
| 0x26B | Bedienung Rollos BF [2]	 | 	TM_BFT	 |
| 0x26C | Bedienung Rollos FA [2]	 | 	TM_FAT	 |
| 0x26D | Bedienung Rollos MK [1]	 | 		 |
| 0x26E | Steuerung FH/SHD Zentrale (Komfort) [10]	 | 	CAS	 |
| 0x26F | Bedienung Rollos BFH [2]	 | 	TM_BFTH	 |
| 0x270 | Bedienung Rollos FAH [2]	 | 	TM_FATH	 |
| 0x27E | Status Verdeck Cabrio [7]	 | 		 |
| 0x280 | Steuerung Sicherheitsfahrzeug 1 [5]	 | 	Security_1	 |
| 0x282 | Steuerung Sicherheitsfahrzeug 2 [6]	 | 	Security_2	 |
| 0x284 | Steuerung Fernstart Sicherheitsfahrzeug [8]	 | 	CAS	 |
| 0x285 | Steuerung Rollos [3]	 | 	IHKA	 |
| 0x288 | Status Überfallfunktion [2]	 | 	Security_2	 |
| 0x290 | Steuerung Reaktion Wasserstoff-Fahrzeug [1]	 | 		 |
| 0x292 | Steuerung Fernlicht-Assistent [2]	 | 	FLA	 |
| 0x294 | Steuerung Freischaltung Sicherheit [2]	 | 	Security_2	 |
| 0x29E | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4]	 | 	Security_1	 |
| 0x2A0 | Steuerung Zentralverriegelung [10]	 | 	CAS	 |
| 0x2A2 | Bedienung Klima Standfunktionen [5]	 | 	MMI_GT	 |
| 0x2A4 | Bedienung Personalisierung [8]	 | 	MMI_GT	 |
| 0x2A6 | Bedienung Wischertaster [12]	 | 	SZL	 |
| 0x2B2 | Raddrücke	 | 	DSC_RB	 |
| 0x2B4 | DWA-Alarm [4]	 | 	DWA	 |
| 0x2B6 | Steuerung Hupe DWA [3]	 | 	DWA	 |
| 0x2C0 | LCD-Leuchtdichte [7]	 | 	Kombi	 |
| 0x2CA | Außentemperatur [9]	 | 	Kombi	 |
| 0x2CE | Steuerung Monitor [4]	 | 	MMI_GT	 |
| 0x2E2 | Status Einstellung Video Night-Vision [1]	 | 		 |
| 0x2E4 | Status Anhänger [8]	 | 	AHM	 |
| 0x2E6 | Status Klima Luftverteilung FA [13]	 | 	IHKA	 |
| 0x2EA | Status Klima Luftverteilung BF [9]	 | 	IHKA	 |
| 0x2EC | Status Klima SH/ZH Zusatzwasserpumpe [14]	 | 	SH_ZH	 |
| 0x2F0 | Status Klima Standfunktionen [12]	 | 	IHKA	 |
| 0x2F4 | Steuerung Klima SH/ZH Zusatzwasserpumpe [13]	 | 	IHKA	 |
| 0x2F6 | Steuerung Licht [7]	 | 	PM	 |
| 0x2F7 | Einheiten [10]	 | 	MMI_GT	 |
| 0x2F8 | Uhrzeit/Datum [12]	 | 	Kombi	 |
| 0x2FA | Sitzbelegung Gurtkontakte [14]	 | 	SSBF; SSFA; SSH	 |
| 0x2FC | ZV und Klappenzustand [11]	 | 	CAS	 |
| 0x2FF | Tank Wasserstoff-Fahrzeug [5]	 | 		 |
| 0x304 | Status Gang [13]	 | 	EGS_EL	 |
| 0x306 | Fahrzeugneigung [2]	 | 	LM	 |
| 0x310 | Außentemperatur/Relativzeit [10]	 | 	Kombi	 |
| 0x311 | Nachtankmenge [3]	 | 	Kombi	 |
| 0x313 | Status Service Call Teleservice [3]	 | 	NAVI; TEL_BPI	 |
| 0x314 | Status Fahrlicht [9]	 | 	RLS	 |
| 0x315 | Fahrzeugmodus [7]	 | 		 |
| 0x317 | Bedienung Taster PDC [1]	 | 	BZM	 |
| 0x318 | Status Antennen Passive Access [7]	 | 	PGS	 |
| 0x31C | Status Reifendruck [6]	 | 	RDC	 |
| 0x31D | Status Reifenpannenanzeige [6]	 | 	CIM	 |
| 0x322 | Dämpferstrom [2]	 | 	EDCK_Modul	 |
| 0x326 | Status Dämpferprogramm [9]	 | 	EDCK_Modul	 |
| 0x328 | Relativzeit [9]	 | 	Kombi	 |
| 0x32A | Steuerung ALC [2]	 | 	LM	 |
| 0x32E | Status Klima Interne Regelinfo [6]	 | 	IHKA	 |
| 0x330 | Kilometerstand/Reichweite [5]	 | 	Kombi	 |
| 0x331 | Programmierung Stufentempomat [2]	 | 		 |
| 0x332 | Fahreranzeige Drehzahlbereich [4]	 | 	DDE1; DME1	 |
| 0x333 | Powermanagement Ladevorgabe Generator [2]	 | 	DME1	 |
| 0x334 | Powermanagement Ladespannung [6]	 | 	PM	 |
| 0x335 | Status Elektrische Kraftstoffpumpe [3]	 | 		 |
| 0x337 | Status Kraftstoffregelung DME [1]	 | 		 |
| 0x33A | Status Monitor Front [3]	 | 		 |
| 0x33C | Status Monitor Fond 1 [3]	 | 	CID_C_R	 |
| 0x33E | Status Monitor Fond 2 [3]	 | 	CID_C_R_2; RSEH_ICC	 |
| 0x374 | Radtoleranzabgleich [7]	 | 	DSC_RB	 |
| 0x380 | Fahrgestellnummer [5]	 | 	CAS	 |
| 0x381 | Elektronischer Motorölmessstab [10]	 | 	DME1	 |
| 0x388 | Fahrzeugtyp [13]	 | 	CAS	 |
| 0x38E | Startdrehzahl [1]	 | 	DDE1; DME1	 |
| 0x390 | Status KSG [3]	 | 	KSG	 |
| 0x394 | RDA Anfrage/Datenablage [5]	 | 	Kombi	 |
| 0x398 | Bedienung Fahrwerk [14]	 | 	MMI_GT	 |
| 0x39C | EBA Datenanforderung [5]	 | 		 |
| 0x3A3 | Anforderung Remote Services [2]	 | 	MMI_GT	 |
| 0x3B0 | Status Gang Rückwärts [2]	 | 		 |
| 0x3B2 | Powermanagement Batteriespannung Sicherheitsfahrzeug [4]	 | 	Security_1	 |
| 0x3B3 | Powermanagement Verbrauchersteuerung [8]	 | 		 |
| 0x3B4 | Powermanagement Batteriespannung [11]	 | 	PM	 |
| 0x3B5 | Status Wasserventil [6]	 | 	IHKA	 |
| 0x3B6 | Position Fensterheber FAT [6]	 | 	TM_FAT	 |
| 0x3B7 | Position Fensterheber FATH [5]	 | 	TM_FATH	 |
| 0x3B8 | Position Fensterheber BFT [6]	 | 	TM_BFT	 |
| 0x3B9 | Position Fensterheber BFTH [5]	 | 	TM_BFTH	 |
| 0x3BA | Position SHD [10]	 | 	SHD	 |
| 0x3BC | Position Fensterheber Sicherheitsfahrzeug [2]	 | 	Security_1	 |
| 0x3C0 | Konfiguration FAS [3]	 | 	SM_FA	 |
| 0x3C1 | Konfiguration BFS [3]	 | 	SM_BF	 |
| 0x3C2 | Konfiguration FASH [1]	 | 	SM_FAH	 |
| 0x3C3 | Konfiguration BFSH [2]	 | 	SM_BFH	 |
| 0x3D6 | Konfiguration DWA CKM [1]	 | 		 |
| 0x3D7 | Status DWA CKM [2]	 | 	DWA	 |
| 0x3DA | Konfiguration Memorypositionen CKM [1]	 | 		 |
| 0x3DB | Status Memorypositionen CKM [3]	 | 	SM_FA	 |
| 0x3E0 | Konfiguration ALC CKM [1]	 | 		 |
| 0x3E9 | Marker 1 [1]	 | 	Diagnosetool_K_CAN_Peripherie	 |
| 0x3EA | Marker 2 [3]	 | 	Diagnosetool_K_CAN_System	 |
| 0x3EB | Marker 3 [1]	 | 	Diagnosetool_PT_CAN	 |
| 0x3FE | Anforderung CAN_Testtool SI-Bus [5]	 | 	Diagnosetool_K_CAN_System	 |
| 0x3FF | Übertragung Daten SI-Bus CAN_Testtool [5]	 | 		 |
| 0x480 | Netzwerkmanagement K-CAN [11]	 | 	ZGM	 |
| 0x480 | Netzwerkmanagement PT-CAN [10]	 | 	ZGM	 |
| 0x492 | Netzwerkmanagement PT-CAN [10]	 | 	DME1; DDE1	 |
| 0x493 | Netzwerkmanagement PT-CAN [10]	 | 	DME2	 |
| 0x498 | Netzwerkmanagement PT-CAN [10]	 | 	EGS_EL	 |
| 0x4A0 | Netzwerkmanagement K-CAN [11]	 | 	RDC	 |
| 0x4A1 | Netzwerkmanagement PT-CAN [10]	 | 	ACC	 |
| 0x4A3 | Netzwerkmanagement PT-CAN [10]	 | 	ARS_Modul	 |
| 0x4A5 | Netzwerkmanagement PT-CAN [10]	 | 	Y_SENS_1	 |
| 0x4A7 | Netzwerkmanagement K-CAN [11]	 | 	PGS	 |
| 0x4A9 | Netzwerkmanagement PT-CAN [10]	 | 	DSC_RB	 |
| 0x4AA | Netzwerkmanagement PT-CAN [10]	 | 	EMF	 |
| 0x4B2 | Netzwerkmanagement K-CAN [11]	 | 	MMI_Fond	 |
| 0x4B8 | Netzwerkmanagement K-CAN [11]	 | 	EHC	 |
| 0x4B9 | Netzwerkmanagement PT-CAN [10]	 | 	EDCK_Modul	 |
| 0x4C0 | Netzwerkmanagement K-CAN [11]	 | 	CAS	 |
| 0x4C1 | Netzwerkmanagement K-CAN [11]	 | 	DWA	 |
| 0x4C2 | Netzwerkmanagement K-CAN [11]	 | 	CIM	 |
| 0x4C3 | Netzwerkmanagement K-CAN [11]	 | 	PM	 |
| 0x4C4 | Netzwerkmanagement K-CAN [11]	 | 	SHD	 |
| 0x4C5 | Netzwerkmanagement K-CAN [11]	 | 	RLS	 |
| 0x4C6 | Netzwerkmanagement K-CAN [11]	 | 	Wischermodul	 |
| 0x4C9 | Netzwerkmanagement K-CAN [11]	 | 	Security_1	 |
| 0x4CA | Netzwerkmanagement K-CAN [11]	 | 	Security_2	 |
| 0x4CC | Netzwerkmanagement K-CAN [11]	 | 	TM_FAT	 |
| 0x4CD | Netzwerkmanagement K-CAN [11]	 | 	TM_BFT	 |
| 0x4CE | Netzwerkmanagement K-CAN [11]	 | 	TM_FATH	 |
| 0x4CF | Netzwerkmanagement K-CAN [11]	 | 	TM_BFTH	 |
| 0x4D7 | Netzwerkmanagement K-CAN [11]	 | 	NVC	 |
| 0x4DF | Netzwerkmanagement K-CAN [11]	 | 	FLA	 |
| 0x4E0 | Netzwerkmanagement K-CAN [11]	 | 	Kombi	 |
| 0x4E2 | Netzwerkmanagement K-CAN [11]	 | 	MMI_GT	 |
| 0x4E4 | Netzwerkmanagement K-CAN [11]	 | 	PDC	 |
| 0x4E5 | Netzwerkmanagement K-CAN [11]	 | 	BZM	 |
| 0x4E6 | Netzwerkmanagement K-CAN [11]	 | 	BZM_Fond	 |
| 0x4E7 | Netzwerkmanagement K-CAN [11]	 | 	ZBE	 |
| 0x4E8 | Netzwerkmanagement K-CAN [11]	 | 	ZBE_FOND	 |
| 0x4E9 | Netzwerkmanagement K-CAN [11]	 | 	SM_FAH	 |
| 0x4EA | Netzwerkmanagement K-CAN [11]	 | 	SM_BFH	 |
| 0x4EB | Netzwerkmanagement K-CAN [11]	 | 	HKL	 |
| 0x4ED | Netzwerkmanagement K-CAN [11]	 | 	SM_FA	 |
| 0x4EE | Netzwerkmanagement K-CAN [11]	 | 	SM_BF	 |
| 0x4EF | Netzwerkmanagement PT-CAN [10]	 | 	KSG	 |
| 0x4F0 | Netzwerkmanagement K-CAN [11]	 | 	LM	 |
| 0x4F0 | Netzwerkmanagement PT-CAN [10]	 | 	LM-ALC	 |
| 0x4F1 | Netzwerkmanagement K-CAN [11]	 | 	AHM	 |
| 0x4F4 | Netzwerkmanagement K-CAN [11]	 | 	CID_C_R	 |
| 0x4F8 | Netzwerkmanagement K-CAN [11]	 | 	IHKA	 |
| 0x4F9 | Netzwerkmanagement K-CAN [11]	 | 	HKA	 |
| 0x4FA | Netzwerkmanagement K-CAN [11]	 | 	SH_ZH	 |
| 0x4FC | Netzwerkmanagement K-CAN [11]	 | 	CID_C_R_2	 |
| 0x500 | Datentransfer [1]	 | 	LM	 |
| 0x580 | Dienste (24)	 | 	ZGM	 |
| 0x592 | Dienste (24)	 | 	DME1; DDE1	 |
| 0x598 | Dienste (24)	 | 	EGS_EL	 |
| 0x5A0 | Dienste (24)	 | 	RDC	 |
| 0x5A1 | Dienste (24)	 | 	ACC	 |
| 0x5A3 | Dienste (24)	 | 	ARS_Modul	 |
| 0x5A5 | Dienste (24)	 | 	Y_SENS_1	 |
| 0x5A7 | Dienste (24)	 | 	PGS	 |
| 0x5A9 | Dienste (24)	 | 	DSC_RB	 |
| 0x5AA | Dienste (24)	 | 	EMF	 |
| 0x5B2 | Dienste (24)	 | 	MMI_Fond	 |
| 0x5B8 | Dienste (24)	 | 	EHC	 |
| 0x5B9 | Dienste (24)	 | 	EDCK_Modul	 |
| 0x5C0 | Dienste (24)	 | 	CAS	 |
| 0x5C1 | Dienste (24)	 | 	DWA	 |
| 0x5C2 | Dienste (24)	 | 	CIM	 |
| 0x5C3 | Dienste (24)	 | 	PM	 |
| 0x5C4 | Dienste (24)	 | 	SHD	 |
| 0x5C5 | Dienste (24)	 | 	RLS	 |
| 0x5C6 | Dienste (24)	 | 	Wischermodul	 |
| 0x5C9 | Dienste (24)	 | 	Security_1	 |
| 0x5CA | Dienste (24)	 | 	Security_2	 |
| 0x5CC | Dienste (24)	 | 	TM_FAT	 |
| 0x5CD | Dienste (24)	 | 	TM_BFT	 |
| 0x5CE | Dienste (24)	 | 	TM_FATH	 |
| 0x5CF | Dienste (24)	 | 	TM_BFTH	 |
| 0x5D7 | Dienste (24)	 | 	NVC	 |
| 0x5DF | Dienste (24)	 | 	FLA	 |
| 0x5E0 | Dienste (24)	 | 	Kombi	 |
| 0x5E2 | Dienste (24)	 | 	MMI_GT	 |
| 0x5E4 | Dienste (24)	 | 	PDC	 |
| 0x5E5 | Dienste (24)	 | 	BZM	 |
| 0x5E6 | Dienste (24)	 | 	BZM_Fond	 |
| 0x5E7 | Dienste (24)	 | 	ZBE	 |
| 0x5E8 | Dienste (24)	 | 	ZBE_FOND	 |
| 0x5E9 | Dienste (24)	 | 	SM_FAH	 |
| 0x5EA | Dienste (24)	 | 	SM_BFH	 |
| 0x5EB | Dienste (24)	 | 	HKL	 |
| 0x5ED | Dienste (24)	 | 	SM_FA	 |
| 0x5EE | Dienste (24)	 | 	SM_BF	 |
| 0x5EF | Dienste (24)	 | 	KSG	 |
| 0x5F0 | Dienste (24)	 | 	LM	 |
| 0x5F1 | Dienste (24)	 | 	AHM	 |
| 0x5F4 | Dienste (24)	 | 	CID_C_R	 |
| 0x5F8 | Dienste (24)	 | 	IHKA	 |
| 0x5F9 | Dienste (24)	 | 	HKA	 |
| 0x5FA | Dienste (24)	 | 	SH_ZH	 |
| 0x5FC | Dienste (24)	 | 	CID_C_R_2	 |
| 0x5FE | Dienste (24)	 | 	Diagnosetool_K_CAN_System	 |
| 0x600 | Dienste (24)	 | 	ZGM	 |
| 0x612 | Dienste (24)	 | 	DME1; DDE1	 |
| 0x618 | Dienste (24)	 | 	EGS_EL	 |
| 0x620 | Dienste (24)	 | 	RDC	 |
| 0x621 | Dienste (24)	 | 	ACC	 |
| 0x623 | Dienste (24)	 | 	ARS_Modul	 |
| 0x625 | Dienste (24)	 | 	Y_SENS_1	 |
| 0x627 | Dienste (24)	 | 	PGS	 |
| 0x629 | Dienste (24)	 | 	DSC_RB	 |
| 0x62A | Dienste (24)	 | 	EMF	 |
| 0x632 | Dienste (24)	 | 	MMI_Fond	 |
| 0x638 | Dienste (24)	 | 	EHC	 |
| 0x639 | Dienste (24)	 | 	EDCK_Modul	 |
| 0x640 | Dienste (24)	 | 	CAS	 |
| 0x641 | Dienste (24)	 | 	DWA	 |
| 0x642 | Dienste (24)	 | 	CIM	 |
| 0x643 | Dienste (24)	 | 	PM	 |
| 0x644 | Dienste (24)	 | 	SHD	 |
| 0x645 | Dienste (24)	 | 	RLS	 |
| 0x646 | Dienste (24)	 | 	Wischermodul	 |
| 0x649 | Dienste (24)	 | 	Security_1	 |
| 0x64A | Dienste (24)	 | 	Security_2	 |
| 0x64C | Dienste (24)	 | 	TM_FAT	 |
| 0x64D | Dienste (24)	 | 	TM_BFT	 |
| 0x64E | Dienste (24)	 | 	TM_FATH	 |
| 0x64F | Dienste (24)	 | 	TM_BFTH	 |
| 0x657 | Dienste (24)	 | 	NVC	 |
| 0x65F | Dienste (24)	 | 	FLA	 |
| 0x660 | Dienste (24)	 | 	Kombi	 |
| 0x662 | Dienste (24)	 | 	MMI_GT	 |
| 0x664 | Dienste (24)	 | 	PDC	 |
| 0x665 | Dienste (24)	 | 	BZM	 |
| 0x666 | Dienste (24)	 | 	BZM_Fond	 |
| 0x667 | Dienste (24)	 | 	ZBE	 |
| 0x668 | Dienste (24)	 | 	ZBE_FOND	 |
| 0x669 | Dienste (24)	 | 	SM_FAH	 |
| 0x66A | Dienste (24)	 | 	SM_BFH	 |
| 0x66B | Dienste (24)	 | 	HKL	 |
| 0x66D | Dienste (24)	 | 	SM_FA	 |
| 0x66E | Dienste (24)	 | 	SM_BF	 |
| 0x66F | Dienste (24)	 | 	KSG	 |
| 0x670 | Dienste (24)	 | 	LM	 |
| 0x671 | Dienste (24)	 | 	AHM	 |
| 0x674 | Dienste (24)	 | 	CID_C_R	 |
| 0x678 | Dienste (24)	 | 	IHKA	 |
| 0x679 | Dienste (24)	 | 	HKA	 |
| 0x67A | Dienste (24)	 | 	SH_ZH	 |
| 0x67C | Dienste (24)	 | 	CID_C_R_2	 |
| 0x67E | Dienste (24)	 | 	Diagnosetool_K_CAN_System	 |
| 0x67D | Diagnosetelegramm K-CAN [11]  |  FDM  |
| 0x6F0 | Diagnosetelegramm  |  Diagnosetool  |
| 0x6F1 | Diagnosetelegramm  |  Diagnosetool  |
| 0x6F2 | Diagnosetelegramm  |  Diagnosetool  |
| 0x6F3 | Diagnosetelegramm  |  Diagnosetool  |
| 0x7C0 | CAS Programmierung Bandende 1 [3]	 | 	CAS	 |
| 0x7C1 | CAS Programmierung Bandende 2 [3]	 | 	TOOL_BANDENDE_CAS	 |
| 0x7C2 | CAS Applikationsnachricht 1 [3]	 | 	CAS	 |
| 0x7C3 | CAS Applikationsnachricht 2 [3]	 | 	TOOL_BANDENDE_CAS	 |
| 0x??? | unbekannt | unbekanntes Steuergerät  |

### WUP_ID

| WUP_ID | DIAG_ADR | TEL_NAME | SENDER |
| --- | --- | --- | --- |
| 168 | 0x00 | Drehmoment 1 K-CAN [8]   | (PT-CAN über ZGM)        |
| 169 | 0x00 | Drehmoment 2 K-CAN [8]   | (PT-CAN über ZGM)        |
| 170 | 0x00 | Drehmoment 3 K-CAN [8]   | (PT-CAN über ZGM)        |
| 174 | 0x00 | Verzögerungsanforderung EMF K-CAN [2]    | (PT-CAN über ZGM)        |
| 190 | 0x00 | Alive Zähler (10)        | (PT-CAN über ZGM)        |
| 192 | 0x00 | Alive Zentrales Gateway [1]      | SGM_ZGM (6)      |
| 193 | 0x36 | Alive Zähler Telefon [2]         | (PT-CAN über ZGM)        |
| 196 | 0x00 | Lenkradwinkel K-CAN (12)         | (PT-CAN über ZGM)        |
| 200 | 0x00 | Lenkradwinkel Oben K-CAN [4]     | (PT-CAN über ZGM)        |
| 206 | 0x00 | Radgeschwindigkeit K-CAN (3)     | (PT-CAN über ZGM)        |
| 210 | 0x65 | Bedienung Sitzverstellung BF [6]         | SZM (8), SZM_MIT_KBUS (6)        |
| 211 | 0x00 | Fernbedienung Sitzverstellung BF [2]     | (PT-CAN über ZGM)        |
| 214 | 0x00 | Bedienung Sitzverstellung BF [2]         | (PT-CAN über ZGM)        |
| 218 | 0x65 | Bedienung Sitzverstellung FA [6]         | SZM (8), SZM_MIT_KBUS (6)        |
| 222 | 0x65 | Bedienung Sitzverstellung FAH [6]        | SZM (8), SZM_MIT_KBUS (6)        |
| 226 | 0x72 | Status Zentralverriegelung BFT [8]       | (PT-CAN über ZGM)        |
| 230 | 0x72 | Status Zentralverriegelung BFTH [9]      | KBM (7)  |
| 234 | 0x72 | Status Zentralverriegelung FAT [8]       | (PT-CAN über ZGM)        |
| 238 | 0x72 | Status Zentralverriegelung FATH [9]      | KBM (7)  |
| 242 | 0x72 | Status Zentralverriegelung HK [10]       | KBM (7)  |
| 246 | 0x72 | Steuerung Außenspiegel [7]       | (PT-CAN über ZGM)        |
| 250 | 0x72 | Steuerung Fensterheber FAT [8]   | (PT-CAN über ZGM)        |
| 251 | 0x72 | Steuerung Fensterheber BFT [4]   | (PT-CAN über ZGM)        |
| 252 | 0x72 | Steuerung Fensterheber FATH [4]  | KBM (7) 				  |
| 253 | 0x72 | Steuerung Fensterheber BFTH [4]  | KBM (7) 				  |
| 276 | 0x40 | Challenge/Response CAS->DME [7]  | CAS (32)				  |
| 282 | 0x00 | Challenge/Response DME1->CAS [6] | CHALLENGE_DME1_CAS 	  |
| 304 | 0x40 | Klemmenstatus [14]       | CAS (29)         |
| 309 | 0x00 | Steuerung Crashabschaltung EKP [1]       | (PT-CAN über ZGM)        |
| 370 | 0x62 | Quittierung Anforderung Kombi [1]        | M_ASK (12), CCC_GW (12)  |
| 372 | 0x40 | Challenge/Response CAS->DME [6]  | CAS (29)         |
| 400 | 0x00 | Anzeige ACC [13]         | (PT-CAN über ZGM)        |
| 412 | 0x00 | Challenge/Response DME1->CAS [5]         | (PT-CAN über ZGM)        |
| 414 | 0x00 | Status DSC K-CAN (16)    | (PT-CAN über ZGM)        |
| 416 | 0x00 | Geschwindigkeit K-CAN (12)       | (PT-CAN über ZGM)        |
| 422 | 0x00 | Wegstrecke (6)   | (PT-CAN über ZGM)        |
| 426 | 0x62 | Effekt ErgoCommander [8]         | M_ASK (12), CCC_GW (12)  |
| 430 | 0x00 | Effekt FondCommander [4]         | EFFECT_FC				   |
| 434 | 0x00 | Status Klima Kälteabsperrventile [9] | HKA [14]			   |
| 436 | 0x60 | Status Kombi (11)        | Kombi (42)       |
| 437 | 0x78 | Wärmestrom/Lastmoment Klima [11]         | IHKA (29)        |
| 438 | 0x00 | Wärmestrom Motor [10]    | (PT-CAN über ZGM)        |
| 440 | 0x67 | Bedienung ErgoCommander [3]      | ZBE (18), ZBE_LO (7)     |
| 448 | 0xff | Bedienung FondCommander [2]      | (PT-CAN über ZGM)        |
| 450 | 0x64 | Abstandsmeldung PDC [5]  | PDC (23)         |
| 451 | 0x64 | Abstandsmeldung 2 PDC [2]        | PDC (23)         |
| 454 | 0x64 | Akustikmeldung PDC [5]   | PDC (23)         |
| 458 | 0x00 | Bedienung Taster FondCommander [8]	 | BZM_Fond [12]  |
| 460 | 0xff | Bedienung Lautstärke FondCommander [6]   | (PT-CAN über ZGM)        |
| 464 | 0x00 | Motordaten [11]  | (PT-CAN über ZGM)        |
| 466 | 0x00 | Anzeige Getriebedaten [17]       | (PT-CAN über ZGM)        |
| 470 | 0x00 | Bedienung Taster Audio/Telefon [7]       | (PT-CAN über ZGM)        |
| 472 | 0x62 | Bedienung Klima Luftverteilung FA (10)   | M_ASK (12), CCC_GW (12)  |
| 474 | 0x62 | Bedienung Klima Fernwirken [4]   | CAS (29) |
| 476 | 0x62 | Bedienung Schichtung Sitzheizung [1] | M_ASK (12), CCC_GW (12)  |
| 478 | 0x00 | Bedienung Klima Fond [7]  | MMI_GT [19]  |
| 480 | 0x62 | Bedienung Klima Luftverteilung BF [4]    | M_ASK (12), CCC_GW (12)  |
| 482 | 0x62 | Bedienung Klima Front [7]    | M_ASK (12), CCC_GW (12)  |
| 485 | 0x00 | Bedienung Sitzheizung/Sitzklima FAH [2] | 485	BZM_Fond [12]  |
| 487 | 0x65 | Bedienung Sitzheizung/Sitzklima FA [4]   | SZM (8), SZM_MIT_KBUS (6)    |
| 488 | 0x65 | Bedienung Sitzheizung/Sitzklima BF [4]   | SZM (8), SZM_MIT_KBUS (6)    |
| 489 | 0x00 | Bedienung Sitzheizung/Sitzklima BFH [2] | BZM_Fond [12]  |
| 490 | 0x62 | Bedienung Lenksäulenverstellung [5]  | (PT-CAN über ZGM)    |
| 491 | 0x65 | Bedienung Aktivsitz FA [3]   | SZM (8), SZM_MIT_KBUS (6)    |
| 492 | 0x65 | Bedienung Aktivsitz BF [3]   | SZM (8), SZM_MIT_KBUS (6)    |
| 493 | 0x65 | Bedienung Lehnenbreitenverstellung Aktiv FA [1]  | SZM (8), SZM_MIT_KBUS (6)    |
| 494 | 0x00 | Bedienung Lenkstockstaster [6]   | (PT-CAN über ZGM)    |
| 495 | 0x65 | Bedienung Lehnenbreitenverstellung Aktiv BF [1]  | SZM (8), SZM_MIT_KBUS (6)    |
| 496 | 0x65 | Bedienung Sitzmemory BFH [2]  | BZM_Fond [12]	 |
| 497 | 0x65 | Bedienung Sitzmemory FAH [2]  | BZM_Fond [12]  |
| 498 | 0x65 | Bedienung Sitzmemory BF [3]  | SZM (8), SZM_MIT_KBUS (6)    |
| 499 | 0x65 | Bedienung Sitzmemory FA [4]  | SZM (8), SZM_MIT_KBUS (6)    |
| 500 | 0x00 | Fernbedienung Sitzmemory BF [2]  | (PT-CAN über ZGM)    |
| 502 | 0x70 | Blinken [6]  | LM (21)  |
| 504 | 0xff | Bedienung SHD/MDS [1]    | (PT-CAN über ZGM)    |
| 508 | 0x00 | Status AFS [4]   | (PT-CAN über ZGM)    |
| 510 | 0x00 | Crash (9)    | (PT-CAN über ZGM)    |
| 512 | 0x00 | Regelgeschwindigkeit Stufentempomat [5]  | (PT-CAN über ZGM)    |
| 514 | 0x70 | Dimmung [7]  | LM (21)  |
| 515 | 0x00 | Bedienung Aktivsitz FAH [2]  | BZM_Fond [12]  |
| 516 | 0x00 | Bedienung Aktivsitz BFH [2]  | BZM_Fond [12]  |
| 517 | 0x60 | Akustikanforderung Kombi [3] | Kombi (42)   |
| 523 | 0x65 | Memoryverstellung [3]    | SM_FA (27), SZM_MIT_KBUS (6) |
| 524 | 0x6d | Steuerung Lenksäule [3]  | SM_FA (27)   |
| 525 | 0x65 | Position Lenksäule [4]   | SZM (8), SZM_MIT_KBUS (6)    |
| 528 | 0x62 | Bedienung HUD [5]    | M_ASK (12), CCC_GW (12)  |
| 529 | 0x3d | Status HUD [5]   | HUD (7)  |
| 538 | 0x70 | Lampenzustand [8]    | LM (21)  |
| 540 | 0x63 | Bedienung Night-Vision [1]					  | MMI_GT [19]		 |
| 542 | 0x00 | Status Night-Vision [1] 					  | NVC [5]			 |
| 550 | 0x45 | Regensensor-Wischergeschwindigkeit (8)   | RLS (23) |
| 552 | 0x62 | Bedienung Sonderfunktion [5] | M_ASK (12), CCC_GW (12)  |
| 554 | 0x6e | Status BFS [10]  | SM_BF (24)   |
| 558 | 0xff | Status BFSH [7]  | (PT-CAN über ZGM)    |
| 562 | 0x6d | Status FAS [10]  | SM_FA (27)   |
| 566 | 0xff | Status FASH [7]  | (PT-CAN über ZGM)    |
| 567 | 0x6e | Status Lehnenbreitenverstellung Aktiv BF [1] | (PT-CAN über ZGM)	 |
| 569 | 0x6d | Status Lehnenbreitenverstellung Aktiv FA [1] | (PT-CAN über ZGM)   |
| 570 | 0x40 | Status Funkschlüssel [9]					  | CAS (29)		 	 |
| 574 | 0x79 | Status Klima Fond Kühlbox [8] 				  | HKA [14] 			 |
| 578 | 0x78 | Status Klima Front [9]  					  | IHKA (29)   		 |
| 582 | 0x78 | Status Klima Front Bedienteil [9] 			  | IHKA [33] 			 |
| 586 | 0x64 | Status PDC [5]  							  | PDC (23)			 |
| 594 | 0x72 | Wischerstatus (7)    | KBM (7)  |
| 598 | 0x40 | Challenge Passive Access [8] | CAS (29) |
| 600 | 0x27 | Status Transmission Passive Access [4]   | PGS (22) |
| 604 | 0x62 | Bedienung Klima Zusatzprogramme [1]  | M_ASK (12), CCC_GW (12)  |
| 619 | 0xff | Bedienung Rollos BF [2]  | (PT-CAN über ZGM)    |
| 620 | 0xff | Bedienung Rollos FA [2]  | (PT-CAN über ZGM)    |
| 621 | 0xff | Bedienung Rollos MK [1]  | (PT-CAN über ZGM)    |
| 622 | 0x40 | Steuerung FH/SHD Zentrale (Komfort) [7]  | CAS (29) |
| 623 | 0xff | Bedienung Rollos BFH [2] | (PT-CAN über ZGM)    |
| 624 | 0xff | Bedienung Rollos FAH [2] | (PT-CAN über ZGM)    |
| 632 | 0x62 | Navigationsgraph [2] | CCC_GW (12)  |
| 634 | 0x62 | Synchronisation Navigationsgraph [3] | CCC_GW (12)  |
| 638 | 0x24 | Status Verdeck Cabrio [5]    | CVM_V (11)   |
| 640 | 0x00 | Steuerung Sicherheitsfahrzeug 1 [5]  | (PT-CAN über ZGM)    |
| 642 | 0x00 | Steuerung Sicherheitsfahrzeug 2 [5]  | (PT-CAN über ZGM)    |
| 644 | 0x40 | Steuerung Fernstart Sicherheitsfahrzeug [8]  | CAS (29) |
| 645 | 0x65 | Steuerung Rollos [3] | SZM (8), SZM_MIT_KBUS (6)    |
| 648 | 0x00 | Status Überfallfunktion [2] | Security_2 [11]  |
| 656 | 0xff | Steuerung Reaktion Wasserstoff-Fahrzeug [1]  | (PT-CAN über ZGM)    |
| 670 | 0xff | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4]    | (PT-CAN über ZGM)    |
| 671 | 0x40 | Fernbedienung FondCommander [4]  | CAS (29) |
| 672 | 0x40 | Steuerung Zentralverriegelung [9]    | CAS (29) |
| 674 | 0x62 | Bedienung Klima Standfunktionen [5]  | M_ASK (12), CCC_GW (12)  |
| 676 | 0x62 | Bedienung Personalisierung [7]   | M_ASK (12), CCC_GW (12)  |
| 678 | 0x00 | Bedienung Wischertaster (8)  | (PT-CAN über ZGM)    |
| 684 | 0x00 | Challenge/Response ELV->CAS [4]  | (PT-CAN über ZGM)    |
| 688 | 0x40 | Challenge/Response CAS -> ELV [5]    | CAS (29) |
| 692 | 0x41 | DWA-Alarm [4]    | DWA (21) |
| 694 | 0x41 | Steuerung Hupe DWA [3]   | DWA (21) |
| 696 | 0x62 | Bedienung Bordcomputer [3]   | M_ASK (12), CCC_GW (12)  |
| 698 | 0x60 | Stoppuhr [1] | Kombi (42)  			 |
| 704 | 0x60 | LCD-Leuchtdichte [7] | Kombi (42)  			 |
| 714 | 0x60 | Außentemperatur (9) | Kombi (42)  			 |
| 718 | 0x62 | Steuerung Monitor [4] | M_ASK (12), CCC_GW (12) |
| 725 | 0x78 | Status Heizung Heckscheibe [1] | IHKA (29)   			 |
| 740 | 0x71 | Status Anhänger [7]  | AHM (23)				 |
| 742 | 0x78 | Status Klima Luftverteilung FA [9]  | IHKA (29)   			 |
| 746 | 0x78 | Status Klima Luftverteilung BF [5]  | IHKA (29)   			 |
| 748 | 0x7a | Status Klima SH/ZH Zusatzwasserpumpe [12]  | SH_ZH (20)  			 |
| 750 | 0x78 | Status Klima Zusatzprogramme [1]		    | IHKA (29)   			 |
| 752 | 0x78 | Status Klima Standfunktionen [9]		    | IHKA (29)   			 |
| 756 | 0x78 | Steuerung Klima SH/ZH Zusatzwasserpumpe [11] | IHKA (29)   			 |
| 758 | 0x72 | Steuerung Licht [6]  | KBM (7)  |
| 759 | 0x62 | Einheiten [7]    | M_ASK (12), CCC_GW (12)  |
| 760 | 0x60 | Uhrzeit/Datum [11]   | Kombi (42)   |
| 762 | 0x00 | Sitzbelegung Gurtkontakte [7]    | (PT-CAN über ZGM)    |
| 764 | 0x40 | ZV und Klappenzustand [10]   | CAS (29) |
| 767 | 0x00 | Tank Wasserstoff-Fahrzeug [2]				 | (PT-CAN über ZGM)    |
| 772 | 0x00 | Status Gang [10]							 | (PT-CAN über ZGM)    |
| 785 | 0x60 | Nachtankmenge [3]    | Kombi (42)   |
| 786 | 0x60 | Service Call Teleservice [2] | Kombi (42)   |
| 787 | 0x62 | Status Service Call Teleservice [2]  | M_ASK (12), CCC_GW (12)  |
| 788 | 0x45 | Status Fahrlicht [6] | RLS (23) |
| 789 | 0xff | Fahrzeugmodus (5)    | SZM (8), SZM_MIT_KBUS (6)    |
| 791 | 0x65 | Bedienung Taster PDC [1] | SZM (8), SZM_MIT_KBUS (6)    |
| 792 | 0x27 | Status Antennen Passive Access [6]   | PGS (22) |
| 794 | 0x00 | Bedienung Taster HDC [1] | (PT-CAN über ZGM)    |
| 796 | 0x00 | Status Reifendruck [5]   | RDC (24) |
| 797 | 0x00 | Status Reifenpannenanzeige [2]   | (PT-CAN über ZGM)    |
| 806 | 0x00 | Status Dämpferprogramm [9]   | (PT-CAN über ZGM)    |
| 808 | 0x60 | Relativzeit (9)  | Kombi (42)   |
| 810 | 0x70 | Steuerung ALC [2]    | LM (21)  |
| 811 | 0x00 | Status ALC [2]   | (PT-CAN über ZGM)    |
| 813 | 0x00 | Anzeige HDC [1]  | (PT-CAN über ZGM)    |
| 814 | 0x78 | Status Klima Interne Regelinfo [4]   | IHKA (29)    |
| 816 | 0x60 | Kilometerstand/Reichweite [5]    | Kombi (42)   |
| 817 | 0x62 | Programmierung Stufentempomat [2]    | M_ASK (12), CCC_GW (12)  |
| 818 | 0x00 | Fahreranzeige Drehzahlbereich [4]    | (PT-CAN über ZGM)    |
| 820 | 0x00 | Powermanagement Ladespannung [6] | (PT-CAN über ZGM)    |
| 821 | 0x00 | Status Elektrische Kraftstoffpumpe [2]   | (PT-CAN über ZGM)    |
| 822 | 0x60 | Anzeige Checkcontrol-Meldung (Rolle) [3] | Kombi (42)   |
| 824 | 0x60 | Steuerung Anzeige Checkcontrol-Meldung (7)   | Kombi (42)   |
| 826 | 0x73 | Status Monitor Front [3] | CID_C_H (11), CID_C (16), CID_M (11) |
| 828 | 0x74 | Status Monitor Fond 1 [3]    | CID_C_R (13)	 |
| 830 | 0x74 | Status Monitor Fond 2 [3]	  | CID_C_R_2 [6]	 |
| 840 | 0x62 | Übereinstimmung Navigationsgraph [2] | CCC_GW (12)  |
| 842 | 0x62 | Navigation GPS 1 [2] | CCC_GW (12)  |
| 843 | 0x65 | Status Sitzlehnenverriegelung FA [1] | SZM_MIT_KBUS (6) |
| 844 | 0x62 | Navigation GPS 2 [2] | CCC_GW (12)  |
| 845 | 0x65 | Status Sitzlehnenverriegelung BF [1] | SZM_MIT_KBUS (6) |
| 846 | 0x62 | Navigation System Information [2]    | CCC_GW (12)  |
| 847 | 0x00 | Status Kontakt Handbremse (2)    | (PT-CAN über ZGM)    |
| 858 | 0x62 | Termin Condition Based Service [2]   | M_ASK (12), CCC_GW (12)  |
| 860 | 0x60 | Status Bordcomputer [2]  | Kombi (42)   |
| 862 | 0x60 | Daten Bordcomputer (Reisedaten) [4]  | Kombi (42)   |
| 864 | 0x60 | Daten Bordcomputer (Fahrtbeginn) [2] | Kombi (42)   |
| 866 | 0x60 | Daten Bordcomputer (Durchschnittswerte) [2]  | Kombi (42)   |
| 868 | 0x60 | Daten Bordcomputer (Ankunft) [2] | Kombi (42)   |
| 870 | 0x60 | Anzeige Kombi/Externe Anzeige [3]    | Kombi (42)   |
| 871 | 0x60 | Steuerung Anzeige Bedarfsorientierter Service [6]    | Kombi (42)   |
| 896 | 0x40 | Fahrgestellnummer [5]    | CAS (29) |
| 897 | 0x00 | Elektronischer Motorölmessstab (4)   | (PT-CAN über ZGM)    |
| 904 | 0x40 | Fahrzeugtyp [10] | CAS (29) |
| 910 | 0x00 | Startdrehzahl [1]    | (PT-CAN über ZGM)    |
| 916 | 0x60 | RDA Anfrage/Datenablage [4]  | Kombi (42)   |
| 917 | 0x40 | Codierung Powermanagement [2]    | CAS (29) |
| 920 | 0x62 | Bedienung Fahrwerk [10]  | M_ASK (12), CCC_GW (12)  |
| 924 | 0x00 | EBA Datenanforderung [5] | (PT-CAN über ZGM)    |
| 926 | 0x62 | Bedienung Uhrzeit/Datum [1]  | M_ASK (12), CCC_GW (12)  |
| 944 | 0x70 | Status Gang Rückwärts [1]    | LM (21)  |
| 946 | 0x00 | Powermanagement Batteriespannung Sicherheitsfahrzeug [4] | Security_1 [11] |
| 947 | 0x00 | Powermanagement Verbrauchersteuerung [3] | (PT-CAN über ZGM)    |
| 948 | 0x00 | Powermanagement Batteriespannung [9] | (PT-CAN über ZGM)    |
| 949 | 0x78 | Status Wasserventil [1]  | IHKA (29)    |
| 950 | 0x00 | Position Fensterheber FAT [5]    | (PT-CAN über ZGM)    |
| 951 | 0x72 | Position Fensterheber FATH [4]   | KBM (7)  |
| 952 | 0x00 | Position Fensterheber BFT [5]    | (PT-CAN über ZGM)    |
| 953 | 0x72 | Position Fensterheber BFTH [4]   | KBM (7)  |
| 954 | 0x44 | Position SHD [6] | SHD (20), MDS (6)    |
| 956 | 0x00 | Position Fensterheber Sicherheitsfahrzeug [2]    | (PT-CAN über ZGM)    |
| 957 | 0x72 | Status Verbraucherabschaltung [2]    | KBM (7)  |
| 958 | 0x40 | Nachlaufzeit Stromversorgung [3] | CAS (29) |
| 960 | 0x6d | Konfiguration FAS [3]    | SM_FA (27)   |
| 961 | 0x6e | Konfiguration BFS [3]    | SM_BF (24)   |
| 962 | 0x00 | Konfiguration FASH [1]	 | (PT-CAN über ZGM)    |
| 963 | 0x00 | Konfiguration BFSH [2]	 | (PT-CAN über ZGM)    |
| 980 | 0x62 | Konfiguration Zentralverriegelung CKM [3]    | M_ASK (12), CCC_GW (12)  |
| 981 | 0x40 | Status Zentralverriegelung CKM [3]   | CAS (29) |
| 982 | 0x62 | Konfiguration DWA CKM [1]    | M_ASK (12), CCC_GW (12)  |
| 983 | 0x41 | Status DWA CKM [1]   | DWA (21) |
| 984 | 0x62 | Konfiguration RLS CKM [2]    | M_ASK (12), CCC_GW (12)  |
| 985 | 0x45 | Status RLS CKM [2]   | RLS (23) |
| 986 | 0x62 | Konfiguration Memorypositionen CKM [1]   | M_ASK (12), CCC_GW (12)  |
| 987 | 0x6d | Status Memorypositionen CKM [2]  | SM_FA (27), SZM_MIT_KBUS (6) |
| 988 | 0x62 | Konfiguration Licht CKM [3]  | M_ASK (12), CCC_GW (12)  |
| 989 | 0x70 | Status Licht CKM [3] | LM (21)  |
| 990 | 0x62 | Konfiguration Klima CKM (5)  | M_ASK (12), CCC_GW (12)  |
| 991 | 0x78 | Status Klima CKM (5) | IHKA (29)    |
| 992 | 0x62 | Konfiguration ALC CKM [1]    | M_ASK (12), CCC_GW (12)  |
| 993 | 0x00 | Status ALC CKM [1]   | (PT-CAN über ZGM)    |
| 1001 | 0x00 | Marker 1 [1] | (PT-CAN über ZGM)    |
| 1002 | 0x00 | Marker 2 [3] | Diagnosetool_K_CAN_System (17)   |
| 1003 | 0x00 | Marker 3 [1] | (PT-CAN über ZGM)    |
| 1022 | 0x00 | Anforderung CAN_Testtool SI_Bus [3]  | Diagnosetool_K_CAN_System (17)   |
| 1023 | 0x00 | Übertragung Daten SI_Bus CAN_Testtool [3]    | (PT-CAN über ZGM)    |
| 1280 | 0x78 | Datentransfer [1]    | IHKA (29)    |
| 1984 | 0xff | CAS Programmierung Bandende 1 [2]    | Tool_Programmierung_Bandende_CAS (7) |
| 1985 | 0xff | CAS Programmierung Bandende 2 [2]    | Tool_Programmierung_Bandende_CAS (7) |
| 1986 | 0xff | CAS Applikationsnachricht 1 [1]  | Tool_Programmierung_Bandende_CAS (7) |
| 1987 | 0xff | CAS Applikationsnachricht 2 [1]  | Tool_Programmierung_Bandende_CAS (7) |
| 0x480 | 0x00 | SGM_ZGM | Sicherheits- und Gateway-Modul (ZGM)   	 |
| 0x481 | 0x00 | SGM_SIM | Sicherheits- und Gateway-Modul (SIM)   	 |
| 0x482 | 0x00 | SZL | Schaltzentrum Lenksäule					 	 |
| 0x483 | 0x00 | SASL | Satellit A-Säule links                    	 |
| 0x484 | 0x00 | SASR | Satellit A-Säule rechts                   	 |
| 0x485 | 0x00 | STVL | Satellit Tuer vorne links					 |
| 0x486 | 0x00 | STVR | Satellit Tuer vorne rechts			     	 |
| 0x487 | 0x00 | SSFA | Satellit Sitz Fahrer                      	 |
| 0x488 | 0x00 | SSBF | Satellit Sitz Beifahrer						 |
| 0x489 | 0x00 | SBSL | Satellit B-Säule links						 |
| 0x48A | 0x00 | SBSR | Satellit B-Säule rechts   					 |
| 0x48D | 0x00 | SSH | Satellit Sitz hinten                           |
| 0x48E | 0x00 | SFZ | Satellit Fahrzeugzentrum   					 |
| 0x492 | 0x00 | DME_DDE | Motor Elektronik / Diesel Elektronik   	 |
| 0x493 | 0x00 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave 	  |
| 0x496 | 0x00 | AFS | Aktivlenkung   								 |
| 0x497 | 0x00 | EKP | Kraftstoffpumpe								 |
| 0x498 | 0x00 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe  |
| 0x499 | 0x00 | VTG | Verteilergetriebe  							 |
| 0x49B | 0x00 | VTC | Valvetronic									 |
| 0x49E | 0x00 | VTC2 | Valvetronic 2 								 |
| 0x49F | 0x00 | HDEV | HDEV-Steuergerät  							 |
| 0x4A0 | 0x00 | RDC | Reifendruck-Control							 |
| 0x4A1 | 0x00 | ACC | Aktive Geschwindigkeitsregelung				 |
| 0x4A2 | 0x00 | AHL | Adaptives Kurvenlicht  						 |
| 0x4A3 | 0x00 | ARS | Dynamic Drive  								 |
| 0x4A4 | 0x24 | CVM | Cabrioverdeck-Modul							 |
| 0x4A7 | 0x27 | PGS | Passive-Go-Steuergerät 						 |
| 0x4A9 | 0x00 | DSC | Dynamische Stabilitäts-Control 				 |
| 0x4AA | 0x00 | EMF | Elektromechanische Feststellbremse             |
| 0x4AF | 0x00 | HDEV2 | HDEV2-Steuergerät							 |
| 0x4B1 | 0x00 | MMC2 | Multimedia Changer                            |
| 0x4B2 | 0x00 | MMIFC | MMI-Fond CAN Zugang                          |
| 0x4B4 | 0x00 | MMIF | MMI-Fond                                	     |
| 0x4B5 | 0x62 | CCC | Car Communication Computer 					 |
| 0x4B6 | 0x36 | TEL | Telefon										 |
| 0x4B7 | 0xff | AMP | Verstärker 									 |
| 0x4B8 | 0x00 | EHC | Höhenstands-Control							 |
| 0x4B9 | 0x00 | EDC_K | Dämpfer-Control  							 |
| 0x4BA | 0xff | KHI | Kopfhörer-Interface							 |
| 0x4BB | 0x62 | NAV | Navigation								     |
| 0x4BC | 0xff | CDC | CD-Wechsler                                    |
| 0x4BD | 0x3d | HUD | Head-Up Display								 |
| 0x4BF | 0x3F | ASK | Audio-System-Kontroller                        |
| 0x4C0 | 0x40 | CAS | Car Access System  							 |
| 0x4C1 | 0x41 | DWA | Diebstahlwarnanlage							 |
| 0x4C2 | 0x42 | CIM | Chassis Integrations Modul                     |
| 0x4C3 | 0x43 | MPM | Mikro-Powermodul   							 |
| 0x4C4 | 0x44 | SHD | Schiebehebedach								 |
| 0x4C5 | 0x45 | RLS | Regen-Fahrlicht-Sensor 						 |
| 0x4C6 | 0x46 | WIM | Wischerzentrum                                 |
| 0x4C7 | 0xff | ANT | Antennentuner  								 |
| 0x4C9 | 0xff | Sec1 | Security1                                     |
| 0x4CA | 0xff | Sec2 | Security2                                     |
| 0x4CB | 0xff | VM | Videomodul  									 |
| 0x4CC | 0x00 | TMF | Tuermodul Fahrertuer            				 |
| 0x4CD | 0x00 | TMB | Tuermodul Beifahrertuer         				 |
| 0x4CE | 0x00 | TMFH | Tuermodul Fahrertuer hinten    				 |
| 0x4CF | 0x00 | TMBH | Tuermodul Beifahrertuer hinten 				 |
| 0x4D0 | 0x50 | SINE_65 | DWA-Sirene und Neigungsgeber				 |
| 0x4D1 | 0x41 | DWA | Diebstahlwarnanlage							 |
| 0x4D2 | 0x41 | DWA | Diebstahlwarnanlage							 |
| 0x4D3 | 0x41 | DWA | Diebstahlwarnanlage							 |
| 0x4D4 | 0x54 | RAD | Radio  										 |
| 0x4E0 | 0x60 | KOMBI | Instrumentenkombination  					 |
| 0x4E1 | 0xff | FBI | Flexibles Bus-Interface						 |
| 0x4E2 | 0x62 | MC_GW | MOST/CAN-Gateway E65					     |
| 0x4E3 | 0x63 | MMI/GT | MMI/Grafikteil								 |
| 0x4E4 | 0x64 | PDC | Park Distance Control  						 |
| 0x4E5 | 0x65 | BZM | Bedienzentrum Mittelkonsole					 |
| 0x4E6 | 0x66 | BZMF | Bedienzentrum Mittelarmlehne                  |
| 0x4E7 | 0x67 | ZBE | Zentrales Bedienelement					     |
| 0x4E8 | 0x68 | ZBEF | Zentrales Bedienelement Fond                  |
| 0x4E9 | 0x69 | SM_FAH | Sitzsteuergeraet Hecksitz Fahrer            |
| 0x4EA | 0x6A | SM_BFH | Sitzsteuergeraet Hecksitz Beifahrer         |
| 0x4EB | 0x6b | HKL | Heckklappenlift								 |
| 0x4ED | 0x6d | SMFA | Sitzmodul Fahrer  							 |
| 0x4EE | 0x6e | SMBF | Sitzmodul Beifahrer   						 |
| 0x4F0 | 0x70 | LSZ | Lichtschaltzentrum 							 |
| 0x4F1 | 0x71 | AHM | Anhängermodul  								 |
| 0x4F2 | 0x72 | KBM | Karosserie-Basismodul  						 |
| 0x4F3 | 0x73 | CID | Central Information Display					 |
| 0x4F4 | 0x74 | CIDF | Central Information Display Fond				 |
| 0x4F8 | 0x78 | IHKA | Integrierte Heiz-Klima-Automatik  			 |
| 0x4F9 | 0x79 | HKA | Heckklimaanlage                          		 |
| 0x4FA | 0x7a | SH | Standheizgerät  								 |
| 0x4FD | 0x7d | FDM | Flexibles Diagnosemodul						 |
| 0x500 | 0x40 | CAS | Car Access System  							 |
| 0x510 | 0x62 | CCC | Car Communication Computer 					 |
| 0x511 | 0x62 | CCC | Car Communication Computer 					 |
| 0x512 | 0x62 | CCC | Car Communication Computer 					 |
| 0x513 | 0x62 | CCC | Car Communication Computer 					 |
| 0x514 | 0x62 | CCC | Car Communication Computer   					 |
| 0x515 | 0x62 | CCC | Car Communication Computer 					 |
| 0x516 | 0x62 | CCC | Car Communication Computer 					 |
| 0x517 | 0x62 | CCC | Car Communication Computer 					 |
| 0x518 | 0x62 | CCC | Car Communication Computer 					 |
| 0x519 | 0x62 | CCC | Car Communication Computer 					 |
| 0x51A | 0x62 | CCC | Car Communication Computer 					 |
| 0x51B | 0x62 | CCC | Car Communication Computer 					 |
| 0x51C | 0x62 | CCC | Car Communication Computer 					 |
| 0x51D | 0x62 | CCC | Car Communication Computer 					 |
| 0x51E | 0x62 | CCC | Car Communication Computer 					 |
| 0x51F | 0x62 | CCC | Car Communication Computer 					 |
| 0x520 | 0x62 | CCC | Car Communication Computer 					 |
| 0x521 | 0x00 | SBSL | Satellit B-Säule links						 |
| 0x522 | 0x00 | SBSR | Satellit B-Säule rechts   					 |
| 0x569 | 0x00 | K_CAN | Bus-System für Karosserieumfänge 			 |
| 0x56A | 0x00 | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich	 |
| 0x56B | 0x00 | byteflight | Bus-System für Airbag-Steuergeräte  		 |
| 0x56C | 0x00 | MOST | Bus-System für Audio- und Kommunikationsumfänge   |
| 0x580 | 0x00 | SGM_ZGM | Sicherheits- und Gateway-Modul (ZGM)   	 |
| 0x5A0 | 0x00 | RDC | Reifendruck-Control							 |
| 0x5B8 | 0x00 | EHC | Höhenstands-Control							 |
| 0x5C0 | 0x40 | CAS | Car Access System  							 |
| 0x5C1 | 0x41 | DWA | Diebstahlwarnanlage							 |
| 0x5C2 | 0x42 | CIM | Chassis Integrations Modul                     |
| 0x5C4 | 0x44 | SHD | Schiebehebedach								 |
| 0x5C5 | 0x45 | RLS | Regen-Fahrlicht-Sensor 						 |
| 0x5C6 | 0x46 | WIM | Wischerzentrum                                 |
| 0x5C9 | 0xff | Sec1 | Security1                                     |
| 0x5CA | 0xff | Sec2 | Security2                                     |
| 0x5E0 | 0x60 | KOMBI | Instrumentenkombination  					 |
| 0x5E3 | 0x63 | MMI/GT | MMI/Grafikteil								 |
| 0x5E4 | 0x64 | PDC | Park Distance Control  						 |
| 0x5E5 | 0x65 | BZM | Bedienzentrum Mittelkonsole					 |
| 0x5E6 | 0x66 | BZMF | Bedienzentrum Mittelarmlehne                  |
| 0x5E7 | 0x67 | ZBE | Zentrales Bedienelement					     |
| 0x5F0 | 0x70 | LSZ | Lichtschaltzentrum 							 |
| 0x5F8 | 0x78 | IHKA | Integrierte Heiz-Klima-Automatik  			 |
| 0x5F9 | 0x79 | HKA | Heckklimaanlage                          		 |
| 0x5FA | 0x7a | SH | Standheizgerät  								 |
| 0x6f1 | 0xf1 | GT1 | Diagnose Gerät 								 |
| 0xffff | 0x00 | PT-Wake | PT-CAN Weckleitung						 |
| 0x??? | 0xff | unbekannt | unbekanntes Steuergerät  				 |
