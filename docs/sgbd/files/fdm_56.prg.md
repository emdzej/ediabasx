# fdm_56.prg

## General

|  |  |
| --- | --- |
| File | fdm_56.prg |
| Type | PRG |
| Jobs | 69 |
| Tables | 279 |
| Origin | BMW VS-42 Dieter Martini |
| Revision | 1.000 |
| Author | BMW VS-42 Dieter Martini |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Flexibles Diagnosemodul für R56 |  |  |
| ORIGIN | string | BMW VS-42 Dieter Martini |  |  |
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
| 0x00 | SPEG56 | Smart Power Electronics Gateway                         |
| 0x01 | MRS6 | Airbag Steuergerät                                        |
| 0x02 | SZL_56 | Schaltzentrum Lenksäule                                    |
| 0x05 | TMFA | Türmodul Fahrer                                           |
| 0x06 | TMBF | Türmodul Beifahrer                                        |
| 0x09 | SBSL | Satellit B-Säule links                                    |
| 0x0A | SBSR | Satellit B-Säule rechts                                   |
| 0x0E | SFZ | Satellit Fahrzeugzentrum                                   |
| 0x11 | MED/MEV | Motor Elektronik / Diesel Elektronik                   |
| 0x16 | AFS_90 | Aktivlenkung                                            |
| 0x17 | EKP | Kraftstoffpumpe                                            |
| 0x18 | GSF21A | Getriebesteuergerät AISIN                               |
| 0x19 | VGSG90 | Verteilergetriebe Steuergerät                           |
| 0x1B | VTC | Valvetronic                                                |
| 0x1C | LDM_90 | Längs Dynamik Management                                |
| 0x1D | FFP_90 | Force Feedback Pedal                                   |
| 0x1E | VTC2 | Valvetronic 2                                             |
| 0x1F | HDEV | HDEV-Steuergerät                                          |
| 0x20 | RDC | Reifendruck-Control                                        |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                            |
| 0x22 | AHL | Adaptives Kurvenlicht                                      |
| 0x23 | ARS | Dynamic Drive                                              |
| 0x24 | CTM | Cabrio Top Modul                                        |
| 0x27 | PGS_56 | Passive-Go-Steuergerät                                  |
| 0x29 | DSC_56 | Dynamische Stabilitätskontrolle                         |
| 0x2F | HDEV2 | HDEV2-Steuergerät                                        |
| 0x30 | EPS_56 | Electrical Power Steering                               |
| 0x35 | CCC | Car Communication Computer                                 |
| 0x36 | TEL | Telefon                                                    |
| 0x37 | AMP | Verstärker                                                 |
| 0x38 | EHC | Höhenstands-Control                                        |
| 0x39 | EDC_K | Dämpfer-Control                                          |
| 0x3A | KHI | Kopfhörer-Interface                                        |
| 0x3B | NAV | Navigation                                                 |
| 0x3C | CDC | CD-Wechsler                                                |
| 0x3D | HUD | Head-Up Display                                            |
| 0x3F | ASK_60 | Audio System Kontroller                                 |
| 0x40 | CAS | Car Access System                                          |
| 0x41 | DWA_E65/E63 | Diebstahlwarnanlage                                |
| 0x43 | MPM | Mikro-Powermodul                                           |
| 0x44 | SD_KWP | Multidrive Schiebedach                                  |
| 0x45 | RLS | Regen-Fahrlicht-Sensor                                     |
| 0x47 | ANT | Antennentuner                                              |
| 0x4B | VM | Videomodul                                                  |
| 0x50 | DWA | Diebstahlwarnanlage                                        |
| 0x51 | DWA | Diebstahlwarnanlage                                        |
| 0x52 | DWA | Diebstahlwarnanlage                                        |
| 0x53 | DWA | Diebstahlwarnanlage                                        |
| 0x54 | RAD | Radio                                                      |
| 0x56 | FZD_87 | Funktionszentrum Dach								    |
| 0x5B | RADIO | Multidrive Schiebedach / In Band On Channel - Radio USA  |
| 0x60 | KOMB56 | Instrumentenkombination                                 |
| 0x61 | FBI | Flexibles Bus-Interface                                    |
| 0x62 | RADIO | Radio Stufe 2 / CCC / MOST/CAN-Gateway                   |
| 0x63 | MMI | Radio Stufe 1/2                                           |
| 0x64 | PDC_87 | Park Distance Control                                   |
| 0x65 | SZM | Schaltzentrum Mittelkonsole                                |
| 0x67 | ZBEL87/ZBEH87 | Zentrale Bedieneinheit Low/High                         |
| 0x69 | FAH_PLX | Sitzmodul PLX Fahrer hinten                            |
| 0x69 | BFH_PLX | Sitzmodul PLX Fahrer hinten                            |
| 0x6B | HKL | Heckklappenlift                                            |
| 0x6D | FAS_87/FAS_PLX | Sitzmodul Fahrer / Sitzmodul PLX Fahrer         |
| 0x6E | BFS_87/BFS_PLX | Sitzmodul Beifahrer / Sitzmodul PLX Beifahrer   |
| 0x70 | LSZ | Lichtschaltzentrum                                         |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | FRM_70 | Fussraum Modul Fahrerseite                              |
| 0x73 | CID_87 | Zentrales Info Display                                  |
| 0x78 | IHKA56 | Klimaautomatik / Klimasteuerung / Heizungssteuerung     |
| 0x7A | SH | Standheizgerät                                              |
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
| 0xA1 | SBSL | Satellit B-Säule links                                    |
| 0xA2 | SBSR | Satellit B-Säule rechts                                   |
| 0xE9 | K_CAN | Bus-System für Karosserieumfänge                         |
| 0xEA | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich            |
| 0xEB | byteflight | Bus-System für Airbag-Steuergeräte                  |
| 0xEC | MOST | Bus-System für Audio- und Kommunikationsumfänge           |
| 0xFF | unbekannt | unbekanntes Steuergerät                              |

### ID_00

| ORT | ORTTEXT |
| --- | --- |
| 0xAAB0 | FRONTSCHEIBENHEIZUNG_RELAIS |
| 0xC910 | K_CAN_ID246_STATUSKLIMA_TIMEOUT |
| 0xC911 | K_CAN_ID246_KOMPRESSORVENTIL_UNGUELT |
| 0xAAB1 | K_CAN_ID246_FRONTSCHHEIZUNG_UNGUELT |
| 0xC912 | K_CAN_ID246_HECKSCHHEIZUNG_UNGUELT |
| 0xA6CA | WISCHER_STUFE_1_RELAIS |
| 0xA6CB | WISCHER_STUFE_2_RELAIS |
| 0xC914 | PT_CAN_ID246_BEDIENUNG_WISCHER_TIMEOUT |
| 0xA6C9 | WISCHER_FRONT_BLOCKIERT |
| 0xA6CD | WISCHER_HECK_BLOCKIERT |
| 0xA6E2 | ZV_ANTRIEB_HECKKLAPPE |
| 0xAAAC | FH_HINTEN_RELAIS |
| 0xAAAD | SCHALTER_FH_HINTEN |
| 0xA6DF | SPRITZDUESE_HEIZUNG |
| 0xAAAE | LOAD_DEAC_INT_LIGHT |
| 0xA6E0 | SITZHEIZUNG_FAHRER |
| 0xA6E1 | SITZHEIZUNG_BEIFAHRER |
| 0xC918 | K_CAN_ID1E7_SITHEIZUNG_FA_UNGUELT |
| 0xC91A | K_CAN_ID1E7_SITHEIZUNG_BF_UNGUELT |
| 0xA6E4 | SENSOR_TANK_LINKS |
| 0xA6E5 | SENSOR_TANK_RECHTS |
| 0xC904 | K_CAN_LOW_LEITUNG |
| 0xC905 | K_CAN_HEIGH_LEITUNG |
| 0xC907 | K_CAN_KOMMUNICATION |
| 0xC90B | PT_CAN_KOMMUNIKATION |
| 0xC90F | DIAG_CAN_KOMMUNICATION |
| 0xC913 | LIN_KOMMUNICATION |
| 0xA6E7 | ENERGIESPARMODE_AKTIV |
| 0xFFFF | unbekannter Fehlerort |

### ID_01

| ORT | ORTTEXT |
| --- | --- |
| 0x93A8 | P ZK0 / Airbag Fahrer 1.Stufe |
| 0x93A9 | P ZK1 / Gurtstrammer Fahrer |
| 0x93AA | P ZK2 / Gurtstrammer Beifahrer |
| 0x93AB | P ZK3 / Airbag Beifahrer 1.Stufe |
| 0x93AC | P ZK4 / Sitzairbag vorne Links |
| 0x93AD | P ZK5 / Sitzairbag vorne Rechts |
| 0x93AE | P ZK6 / Seitenairbag hinten Links |
| 0x93AF | P ZK7 / Seitenairbag hinten Rechts |
| 0x93B0 | P ZK8 / Curtainairbag Links |
| 0x93B1 | P ZK9 / Curtainairbag Rechts |
| 0x93B2 | P ZK10 / Sicherheitsbatterieklemme |
| 0x93B3 | P ZK11 / Airbag Beifahrer 2.Stufe |
| 0x93B4 | P ZK12 / Airbag Fahrer 2.Stufe |
| 0x93B5 | P ZK13 / Gurtstrammer hinten Links |
| 0x93B6 | P ZK14 / Gurtstrammer hinten Rechts |
| 0x93B7 | P ZK15 / AUX1 |
| 0x93B8 | P ZK8 / Knieairbag Fahrer |
| 0x93B9 | P ZK9 / Knieairbag Beifahrer |
| 0x93BA | P Gurtkontakt Fahrer |
| 0x93BB | P Gurtkontakt Beifahrer |
| 0x93BC | P Gurtkontakt hinten Links |
| 0x93BD | P Gurtkontakt hinten Rechts |
| 0x93BE | P Passenger Airbag Off Schalter (POS) |
| 0x93BF | P Pass. Airbag Off Schalter (POS) inverse |
| 0x93C0 | P Pass. Airbag Off Schalter (POS) POS-Ausgang Positiv und Inverse nicht komplementaer |
| 0x93C1 | P SBE |
| 0x93C2 | P SBE Sitzmatte |
| 0x93C3 | P OC3 |
| 0x93C4 | P OC3 - Datenspeicher voll |
| 0x93C5 | P OC3 - System noch nicht freigegeben |
| 0x93D8 | P OC3 - System konnte nicht freigegeben werden |
| 0x93C6 | P SLV Fahrer |
| 0x93C7 | P SLV Beifahrer |
| 0x93C8 | P UPFRONT Links |
| 0x93D9 | P UPFRONT Links - falscher Messbereich |
| 0x93DA | P UPFRONT Links - Sensor Data Implausible |
| 0x93C9 | P UPFRONT Rechts |
| 0x93DB | P UPFRONT Rechts - falscher Messbereich |
| 0x93DC | P UPFRONT Rechts - Sensor Data Implausible |
| 0x93CA | P MRSA B- Saeule X  Links |
| 0x93DD | P MRSA B- Saeule X  Links - falscher Messbereich |
| 0x93DE | P MRSA B- Saeule X  Links - Sensor Data Implausible |
| 0x93CB | P MRSA B- Saeule X  Rechts |
| 0x93DF | P MRSA B- Saeule X  Rechts - falscher Messbereich |
| 0x93E0 | P MRSA B- Saeule X  Rechts - Sensor Data Implausible |
| 0x93CC | P MRSA B- Saeule Y  Links |
| 0x93E1 | P MRSA B- Saeule Y  Links - falscher Messbereich |
| 0x93E2 | P MRSA B- Saeule Y  Links - Sensor Data Implausible |
| 0x93CD | P MRSA B- Saeule Y  Rechts |
| 0x93E3 | P MRSA B- Saeule Y  Rechts - falscher Messbereich |
| 0x93E4 | P MRSA B- Saeule Y  Rechts - Sensor Data Implausible |
| 0x93CE | P MRSA Tuer Links |
| 0x93E5 | P MRSA Tuer Links - falscher Messbereich |
| 0x93E6 | P MRSA Tuer Links - Sensor Data Implausible |
| 0x93EE | P MRSA Tuer Links - Drucksensor ausserhalb Messbereich |
| 0x93EF | P MRSA Tuer Links - Absolutdruck ausserhalb Messbereich |
| 0x93F0 | P MRSA Tuer Links - Differenz des Absolutdrucks ausserhalb Messbereich |
| 0x93F4 | P MRSA Tuer Links - Absolutdruck-Uebertragungsstoerung |
| 0x93CF | P MRSA Tuer Rechts |
| 0x93E7 | P MRSA Tuer Rechts - falscher Messbereich |
| 0x93E8 | P MRSA Tuer Rechts - Sensor Data Implausible |
| 0x93F1 | P MRSA Tuer Rechts - Drucksensor ausserhalb Messbereich |
| 0x93F2 | P MRSA Tuer Rechts - Absolutdruck ausserhalb Messbereich |
| 0x93F3 | P MRSA Tuer Rechts - Differenz des Absolutdrucks ausserhalb Messbereich |
| 0x93F5 | P MRSA Tuer Rechts - Absolutdruck-Uebertragungsstoerung |
| 0x93D0 | P Versorgungsspannung - Unterspannung |
| 0x93D1 | P Versorgungsspannung - Ueberspannung |
| 0x93D2 | P Passenger Airbag Off Leuchte (POL) |
| 0x93E9 | P Airbag Warnleuchte (AWL) |
| 0x93EB | P TCU-Ausgang |
| 0x93D3 | P CBD -Block - CRC Fehler durch Schreiben Codierdaten |
| 0x93EC | P EEPROM Layout passt nicht zur SW-Version |
| 0x93D4 | P Crashtelegrammspeicher - Mindestens ein Crashtelegramm ist gespeichert |
| 0x93D5 | P Crashtelegrammspeicher - Drei Crashtelegramme sind gespeichert |
| 0x93D6 | P Zentralsteuergeraet - SG ist nicht verriegelt |
| 0x93D7 | P Zentralsteuergeraet - Interner Fehler |
| 0x93ED | P Zentralsteuergeraet/Satelliten - Unbekannter Fehler |
| 0x93F6 | P Alert-Schwelle - Ueberpruefung Ausloeseschwelle |
| 0xC944 | P Bus Leitungsfehler - Allg. |
| 0xC947 | P Bus Kommunikationsfehler |
| 0xC000 | S ZK0 / Airbag Fahrer 1.Stufe - Endstufenfehler (Plus) |
| 0xC001 | S ZK0 / Airbag Fahrer 1.Stufe - Endstufenfehler (Minus) |
| 0xC002 | S ZK1 / Gurtstrammer Fahrer - Endstufenfehler (Plus) |
| 0xC003 | S ZK1 / Gurtstrammer Fahrer - Endstufenfehler (Minus) |
| 0xC004 | S ZK2 / Gurtstrammer Beifahrer - Endstufenfehler (Plus) |
| 0xC005 | S ZK2 / Gurtstrammer Beifahrer - Endstufenfehler (Minus) |
| 0xC006 | S ZK3 / Airbag Beifahrer 1.Stufe - Endstufenfehler (Plus) |
| 0xC007 | S ZK3 / Airbag Beifahrer 1.Stufe - Endstufenfehler (Minus) |
| 0xC008 | S ZK4 / Sitzairbag vorne links - Endstufenfehler (Plus) |
| 0xC009 | S ZK4 / Sitzairbag vorne links - Endstufenfehler (Minus) |
| 0xC00A | S ZK5 / Sitzairbag vorne rechts - Endstufenfehler (Plus) |
| 0xC00B | S ZK5 / Sitzairbag vorne rechts - Endstufenfehler (Minus) |
| 0xC00C | S ZK6 / Seitenairbag hinten links - Endstufenfehler (Plus) |
| 0xC00D | S ZK6 / Seitenairbag hinten links - Endstufenfehler (Minus) |
| 0xC00E | S ZK7 / Seitenairbag hinten rechts - Endstufenfehler (Plus) |
| 0xC00F | S ZK7 / Seitenairbag hinten rechts - Endstufenfehler (Minus) |
| 0xC010 | S ZK8 / Curtainairbag links / Knieairbag Fahrer - Endstufenfehler (Plus) |
| 0xC011 | S ZK8 / Curtainairbag links / Knieairbag Fahrer - Endstufenfehler (Minus) |
| 0xC012 | S ZK9 / Curtainairbag rechts / Knieairbag Beifahrer - Endstufenfehler (Plus) |
| 0xC013 | S ZK9 / Curtainairbag rechts / Knieairbag Beifahrer - Endstufenfehler (Minus) |
| 0xC014 | S ZK10 / Sicherheitsbatterieklemme - Endstufenfehler (Plus) |
| 0xC015 | S ZK10 / Sicherheitsbatterieklemme - Endstufenfehler (Minus) |
| 0xC016 | S ZK11 / Airbag Beifahrer 2.Stufe - Endstufenfehler (Plus) |
| 0xC017 | S ZK11 / Airbag Beifahrer 2.Stufe - Endstufenfehler (Minus) |
| 0xC018 | S ZK12 / Airbag Fahrer 2.Stufe - Endstufenfehler (Plus) |
| 0xC019 | S ZK12 / Airbag Fahrer 2.Stufe - Endstufenfehler (Minus) |
| 0xC01A | S ZK13 / Gurtstrammer hinten links - Endstufenfehler (Plus) |
| 0xC01B | S ZK13 / Gurtstrammer hinten links - Endstufenfehler (Minus) |
| 0xC01C | S ZK14 / Gurtstrammer hinten rechts - Endstufenfehler (Plus) |
| 0xC01D | S ZK14 / Gurtstrammer hinten rechts - Endstufenfehler (Minus) |
| 0xC01E | S ZK15 / AUX1 - Endstufenfehler (Plus) |
| 0xC01F | S ZK15 / AUX1 - Endstufenfehler (Minus) |
| 0xC020 | S Flic0 - Eingang Energiereservespannung |
| 0xC021 | S Flic0 - Plausibilitaet Referenzwiderstand |
| 0xC022 | S Flic0 - Plausibilitaet |
| 0xC023 | S Flic0 - FltFLIC0ChpVoltage |
| 0xC024 | S Flic0 - FltFLIC0RMVoltage |
| 0xC025 | S Flic0 - FltFLIC0Program |
| 0xC026 | S Flic0 - FltFLIC0EOP |
| 0xC027 | S Flic1 - Eingang Energiereservespannung |
| 0xC028 | S Flic1 - Plausibilitaet Referenzwiderstand |
| 0xC029 | S Flic1 - Plausibilitaet |
| 0xC02A | S Flic1 - FltFLIC1ChpVoltage |
| 0xC02B | S Flic1 - FltFLIC1RMVoltage |
| 0xC02C | S Flic1 - FltFLIC1Program |
| 0xC02D | S Flic1 - FltFLIC1EOP |
| 0xC02E | S Sensor1 - FltXPositiveDeflection |
| 0xC02F | S Sensor1 - FltXNegativeDeflection |
| 0xC030 | S Sensor1 - Grundwert |
| 0xC031 | S Sensor1 - sensor data inplausible |
| 0xC032 | S Sensor1 - Safety ID |
| 0xC033 | S Sensor2 - FltYPositiveDeflection |
| 0xC034 | S Sensor2 - FltYNegativeDeflection |
| 0xC035 | S Sensor2 - Grundwert |
| 0xC036 | S Sensor2 - sensor data inplausible |
| 0xC037 | S Sensor2 - Safety ID |
| 0xC038 | S Sensor3 - FltZPositiveDeflection |
| 0xC039 | S Sensor3 - FltZNegativeDeflection |
| 0xC03A | S Sensor3 - FltZFastOffsetCancellation / Grundwert |
| 0xC03B | S Sensor3 - FltZPlausibility / sensor data inplausible |
| 0xC03C | S Sensor3 - Safety ID |
| 0xC03D | S CPU - FltWD1 |
| 0xC03E | S CPU - FltWD2 |
| 0xC03F | S CPU - FltWD3 |
| 0xC040 | S CPU - FltWDF |
| 0xC041 | S CPU - WDDis |
| 0xC042 | S System - EEPROM communication test failed |
| 0xC043 | S Energiereserve - Unterspannung |
| 0xC044 | S Energiereserve - Ueberspannung |
| 0xC045 | S Energiereserve - Aufwaertswandler |
| 0xC046 | S Energiereserve - Abwaertswandler |
| 0xC047 | S Energiereserve - Kapazitaet zu gross / klein |
| 0xC049 | S Energiereserve - FltERCVzpChargeUp |
| 0xC04A | S Energiereserve - FltERCVzpChargeDown |
| 0xC04B | S Energiereserve - FltERCVzpTestVoltage |
| 0xC04C | S E2Prom - Konfigurationsdaten defekt |
| 0xC04D | S E2Prom - CRCDatasetsNotIdent |
| 0xC04E | S E2Prom - FltCRCClassFault |
| 0xC04F | S E2Prom - FltEEMVerify |
| 0xC050 | S E2Prom - Fehler beim Schreibzugriff |
| 0xC051 | S CRC RAM fault |
| 0xC052 | S FltPOnReset |
| 0xC053 | S FltAmuBusy |
| 0xC054 | S FltAmuBusy2 |
| 0xC055 | S FltAmuADC |
| 0xC056 | S FltAmuMulti1 |
| 0xC057 | S FltAmuMulti2 |
| 0xC058 | S FltAmuMulti3 |
| 0xC059 | S FltAmuTim1A |
| 0xC05A | S FltAmuTim1B |
| 0xC05B | S FltAmuTim2A |
| 0xC05C | S FltAmuTim2B |
| 0xC05D | S FltAmuTim3 |
| 0xC05E | S FltAmuTim4 |
| 0xC05F | S Flic2 - Eingang Energiereservespannung |
| 0xC060 | S Flic2 - Plausibilitaet Referenzwiderstand |
| 0xC061 | S Flic2 - Plausibilitaet |
| 0xC062 | S Flic2 - FltFLIC2ChpVoltage |
| 0xC063 | S Flic2 - FltFLIC2RMVoltage |
| 0xC066 | S Flic3 - Eingang Energiereservespannung |
| 0xC067 | S Flic3 - Plausibilitaet Referenzwiderstand |
| 0xC068 | S Flic3 - Plausibilitaet |
| 0xC069 | S Flic3 - FltFLIC3ChpVoltage |
| 0xC06A | S Flic3 - FltFLIC3RMVoltage |
| 0x93A8 | FltAB1FDCurrentSink |
| 0x93AB | FltAB1FDCurrentSink |
| 0x93B4 | FltAB2FDCurrentSink |
| 0x93B3 | FltAB2FDCurrentSink |
| 0x93AD | FltSA1FRCurrentSink |
| 0x93B5 | FltBT1RLCurrentSink |
| 0x93B6 | FltBT1RRCurrentSink |
| 0x93AE | FltSA1RLCurrentSink |
| 0x93AF | FltSA1RRCurrentSink |
| 0x93AC | FltSA1FLCurrentSink |
| 0x93AA | FltBTFPDCurrentSink |
| 0x93B0 | FltCA1LCurrentSink |
| 0x93B8 | FltCA1FDCurrentSink |
| 0x93B1 | FltCA1RCurrentSink |
| 0x93B9 | FltKB1FPCurrentSink |
| 0x93B7 | FltAUX1CurrentSink |
| 0x93B2 | FltBATD1CurrentSink |
| 0xC06D | S FltAB1FDCurrentSink |
| 0xC06E | S FltAB1FPCurrentSink |
| 0xC06F | S FltAB2FDCurrentSink |
| 0xC070 | S FltAB2FPCurrentSink |
| 0xC071 | S FltSA1FRCurrentSink |
| 0xC072 | S FltBT1RLCurrentSink |
| 0xC073 | S FltBT1RRCurrentSink |
| 0xC074 | S FltSA1RLCurrentSink |
| 0xC075 | S FltSA1RRCurrentSink |
| 0xC076 | S FltBT1FDCurrentSink |
| 0xC077 | S FltSA1FLCurrentSink |
| 0xC078 | S FltBT1FPCurrentSink |
| 0xC079 | S FltCA1LCurrentSink |
| 0xC07A | S FltKB1FDCurrentSink |
| 0xC07B | S FltCA1RCurrentSink |
| 0xC07C | S FltKB1FPCurrentSink |
| 0xC07D | S FltAUX1CurrentSink |
| 0xC07E | S FltBATD1CurrentSink |
| 0xC07F | S FltPICVrefHigh |
| 0xC080 | S FltPICVrefLow |
| 0xC081 | S FltSCONConfiguration |
| 0xC082 | S FltSENSORXYConfiguration |
| 0xC083 | S FltSENSORMINUSXConfiguration |
| 0xC084 | S FltSENSORZConfiguration |
| 0xC085 | S FltRollRateSensorConfiguration |
| 0xC086 | S FltPASIF0Configuration |
| 0xC087 | S FltPASIF1Configuration |
| 0xC088 | S FltPASIF2Configuration |
| 0xC089 | S FltSPI1Line |
| 0xC08A | S Flic 2 - FltFLIC2Program |
| 0xC08B | S Flic 2 - FltFLIC2EOP |
| 0xC08C | S Flic 3 - FltFLIC3Program |
| 0xC08D | S Flic 3 - FltFLIC3EOP |
| 0xC08E | S SCON - FltConfigSCON |
| 0xC08F | S SCON - FltEOPSCON |
| 0xC090 | S FltRAM |
| 0xC091 | S FltROMSector0 |
| 0xC092 | S FltROMSector1 |
| 0xC093 | S FltBISTtest |
| 0xC094 | S FltCsCrossCoupling |
| 0xC095 | S FltDisableLines |
| 0xC096 | S SCON - FltSconSpecialDisableLineState |
| 0xC097 | S Flic - FltFlicSpecialDisableLineState |
| 0xC098 | S FltSwReset |
| 0xC099 | S SCON - FltSCONPlausibilityPath |
| 0xC09A | S FltStackOverflow |
| 0xC09B | S Flic 0 - FltFLIC0AnalogTest |
| 0xC09C | S Flic 1 - FltFLIC1AnalogTest |
| 0xC09D | S Flic 2 - FltFLIC2AnalogTest |
| 0xC09E | S Flic 3 - FltFLIC3AnalogTest |
| 0xC09F | S SCON - FltSconMonitor |
| 0xC0A0 | S Energiereserve |
| 0xC0A1 | S Energiereserve - FltAutarky |
| 0xC0A2 | S UpFront links - Safety ID- Fehler |
| 0xC0A3 | S UpFront rechts - Safety ID- Fehler |
| 0xC0A4 | S MRSA B- Saeule X- Richtung links - Safety ID- Fehler |
| 0xC0A5 | S MRSA B- Saeule X- Richtung rechts - Safety ID- Fehler |
| 0xC0A6 | S MRSA B- Saeule Y- Richtung links - Safety ID- Fehler |
| 0xC0A7 | S MRSA B- Saeule Y- Richtung rechts - Safety ID- Fehler |
| 0xC0A8 | S MRSA Tuer Y- Richtung links - Safety ID- Fehler |
| 0xC0A9 | S MRSA Tuer Y- Richtung rechts - Safety ID- Fehler |
| 0xC0AA | FltFlicRegisterMonitoring |
| 0xC0AB | RAM Device FireStatus |
| 0xC0AC | ProgrammingSCON_PASIF |
| 0xC0AD | ProgrammingSCONPASIF0 |
| 0xC0AE | ProgrammingSCONPASIF1 |
| 0xC0AF | FltPASReadEEPROM |
| 0xC0B0 | FltFlic0SpecialRegisterMonitoring |
| 0xC0B1 | FltFlic1SpecialRegisterMonitoring |
| 0xC0B2 | FltFlic2SpecialRegisterMonitoring |
| 0xC0B3 | FltFlic3SpecialRegisterMonitoring |
| 0xC0B4 | FltSconRegisterMonitoring |
| 0xC0B5 | FltSysWLSconPathTest |
| 0xC0B6 | FltADC |
| 0xC0B7 | FltProgrammingPASIF2 |
| 0xC0B8 | FltSensorXYProgFOC |
| 0xC0B9 | FltSensorMinusXProgrFOC |
| 0xC0BA | FltSensorZProgrFOC |
| 0xC0BB | FltFLIC0SDLTest |
| 0xC0BC | FltFLIC1SDLTest |
| 0xC0BD | FltFLIC2SDLTEST |
| 0xC0BE | FltFLIC3SDLTest |
| 0xC0BF | SMB200 / RollRate - SMB200 Y bias |
| 0xC0C0 | SMB200 / RollRate - FltSMB200YPositiveDeflection |
| 0xC0C1 | SMB200 / RollRate - FltSMB200YNegativeDeflection |
| 0xC0C2 | SMB200 / RollRate - FltSMB200YSafetyID |
| 0xC0C3 | SMB200 / RollRate - Sensor data inplausible |
| 0xC0C4 | SMB200 / RollRate - SMB200 Z bias |
| 0xC0C5 | SMB200 / RollRate - FltSMB200ZPositiveDeflection |
| 0xC0C6 | SMB200 / RollRate - FltSMB200ZNegativeDeflection |
| 0xC0C7 | SMB200 / RollRate - FltSMB200SafetyID |
| 0xC0C8 | SMB200 / RollRate - Sensor Data inplausible |
| 0xC0C9 | RollRate - ROSE -sensor no regular operation fault |
| 0xC0CA | RollRate - ROSE - spi-transfer fault occured |
| 0xC0CB | RollRate - ROSE- initial sensortest out of range |
| 0xC0CC | RollRAte _ FltRoseOffs |
| 0xC0CD | RollRate - FltRoseSafety |
| 0xC0CE | RollRate - FltRoseMoni1 |
| 0xC0CF | RollRate - FltRoseMoni2 |
| 0xC0D0 | RollRate - FltRoseMoni3 |
| 0xC0D1 | RollRate - FltRoseMoni4 |
| 0xC0D2 | RollRate - FltRoseMoni5 |
| 0xC0D3 | RollRate - FltRoseMoni6 |
| 0xC0D4 | RollRate - FltRoseMoni7 |
| 0xC0D5 | RollRate - FltRoseMoni8 |
| 0xC0D6 | RollRate - FltRoseMoni9 |
| 0xC0D7 | RollRate - FltRoseMoni10 |
| 0xC0D8 | RollRate - FltRoseMoni11 |
| 0xC0D9 | RollRate - FltRoseMoni12 |
| 0xC0DA | RollRate - FltRoseOffsCancFast |
| 0xC0DB | RollRate - FltRoseOffsCancSlow |
| 0xC0DC | RollRate - FltRoseTst |
| 0xC0DD | RollRate - FltRoseApl |
| 0xC0dE | RollRate - FltRoseSensPlausi |
| 0xC100 | S Beschleunigungsaufnehmer 0 - Ruhespannung Fehlerhaft  |
| 0xC101 | S Beschleunigungsaufnehmer 0 - BA- zu unempfindlich  |
| 0xC102 | S Beschleunigungsaufnehmer 0 - BA- zu empfindlich  |
| 0xC103 | S Beschleunigungsaufnehmer 0 - ZP Fehler  |
| 0xC104 | S Beschleunigungsaufnehmer 1 - Ruhespannung Fehlerhaft  |
| 0xC105 | S Beschleunigungsaufnehmer 1 - BA- zu unempfindlich  |
| 0xC106 | S Beschleunigungsaufnehmer 1 - BA- zu empfindlich  |
| 0xC107 | S Beschleunigungsaufnehmer 1 - ZP Fehler  |
| 0xC108 | S Autarkiekondensator CAS - Spannung zu klein |
| 0xC109 | S Autarkiekondensator CAS - Kapazitaet zu klein |
| 0xC10A | S Autarkiekondensator CAS - Kapazitaet zu gross |
| 0xC10B | S Autarkiekondensator CAZ - Spannung zu klein |
| 0xC10C | S Autarkiekondensator CAZ - Kapazitaet zu klein |
| 0xC10D | S Autarkiekondensator CAZ - Kapazitaet zu gross |
| 0xC10E | S LSS-Schalter ZK0 - Schalter defekt |
| 0xC10F | S LSS-Schalter ZK1 - Schalter defekt |
| 0xC110 | S LSS-Schalter ZK2 - Schalter defekt |
| 0xC111 | S LSS-Schalter ZK3 - Schalter defekt |
| 0xC112 | S LSS-Schalter ZK4 - Schalter defekt |
| 0xC113 | S LSS-Schalter ZK5 - Schalter defekt |
| 0xC114 | S LSS-Schalter ZK6 - Schalter defekt |
| 0xC115 | S LSS-Schalter ZK7 - Schalter defekt |
| 0xC116 | S LSS-Schalter ZK8 - Schalter defekt |
| 0xC117 | S LSS-Schalter ZK9 - Schalter defekt |
| 0xC118 | S LSS-Schalter ZK10 - Schalter defekt |
| 0xC119 | S LSS-Schalter ZK11 - Schalter defekt |
| 0xC11A | S LSS-Schalter ZK12 - Schalter defekt |
| 0xC11B | S LSS-Schalter ZK13 - Schalter defekt |
| 0xC11C | S LSS-Schalter ZK14 - Schalter defekt |
| 0xC11D | S LSS-Schalter ZK15 - Schalter defekt |
| 0xC11E | S LSS-Schalter ZK16 - Schalter defekt |
| 0xC11F | S LSS-Schalter ZK17 - Schalter defekt |
| 0xC120 | S HSS-Schalter ZK0 - Schalter defekt |
| 0xC121 | S HSS-Schalter ZK1 - Schalter defekt |
| 0xC122 | S HSS-Schalter ZK2 - Schalter defekt |
| 0xC123 | S HSS-Schalter ZK3 - Schalter defekt |
| 0xC124 | S HSS-Schalter ZK4 - Schalter defekt |
| 0xC125 | S HSS-Schalter ZK5 - Schalter defekt |
| 0xC126 | S HSS-Schalter ZK6 - Schalter defekt |
| 0xC127 | S HSS-Schalter ZK7 - Schalter defekt |
| 0xC128 | S HSS-Schalter ZK8 - Schalter defekt |
| 0xC129 | S HSS-Schalter ZK9 - Schalter defekt |
| 0xC12A | S HSS-Schalter ZK10 - Schalter defekt |
| 0xC12B | S HSS-Schalter ZK11 - Schalter defekt |
| 0xC12C | S HSS-Schalter ZK12 - Schalter defekt |
| 0xC12D | S HSS-Schalter ZK13 - Schalter defekt |
| 0xC12E | S HSS-Schalter ZK14 - Schalter defekt |
| 0xC12F | S HSS-Schalter ZK15 - Schalter defekt |
| 0xC130 | S HSS-Schalter ZK16 - Schalter defekt |
| 0xC131 | S HSS-Schalter ZK17 - Schalter defekt |
| 0xC132 | S 3.Schalter - Schalter defekt/Ueberwachung defekt |
| 0xC133 | S TZ-Pin - Leitung/Ueberwachung defekt |
| 0xC134 | S Referenzspannung - Referenzspannung ausserhalb der Toleranz |
| 0xC135 | S Ueberwachungsprozessor - PIC meldet Fehler  |
| 0xC136 | S Satelliten Autarkiewandler - defekt |
| 0xC137 | S Algorithmusparameter - falsche Algokennung |
| 0xC138 | S Algorithmusparameter - Pruefsummenfehler  |
| 0xC139 | S EEPROM - Konfigurationsdaten Fehlerhaft  |
| 0xC13A | S EEPROM - 1AUS2 Fehler  |
| 0xC13B | S EEPROM - Fehler beim Zugriff |
| 0xC13C | S ASIC - ASIC Kommunikation nicht moeglich |
| 0xC13D | S ASIC - ASIC Zuendenergiegrenze konnte nicht geschrieben werden |
| 0xC13E | S ASIC - Referenzwiderstand Fehlerhaft  |
| 0xFFFF | unbekannter Fehlerort |

### ID_02

| ORT | ORTTEXT |
| --- | --- |
| 0x9E28 | SG interner Fehler |
| 0x9E29 | Lenkradwinkel |
| 0x9E2A | Lenkradwinkelgeschwindigkeit |
| 0x9E2B | Versorgungsspannung |
| 0xC987 | Bus Kommunikationsfehler (PT-CAN) |
| 0xC98B | Bus Kommunikationsfehler (F-CAN) |
| 0xC994 | Botschaft (Klemmenstatus, 130h) |
| 0xFFFF | unbekannter Fehlerort |

### ID_03

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_04

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_05

| ORT | ORTTEXT |
| --- | --- |
| 0x9628 | P Watchdog-Reset uP |
| 0x9629 | P Clock-Monitor-Reset uP |
| 0x962a | P Illegal Opcode uP |
| 0x962b | P Falsche Fahrgestellnummer |
| 0x962c | P Systemzeitfehler |
| 0x962d | P Timeout ID 01H |
| 0x962e | P Timeout ID 02H |
| 0x962f | P Timeout ID 03H |
| 0x9630 | P Timeout ID 04H |
| 0x9631 | P Timeout ID 05H |
| 0x9632 | P Timeout ID 06H |
| 0x9633 | P Timeout ID 07H |
| 0x9634 | P Timeout ID 08H |
| 0x9635 | P Timeout ID 09H |
| 0x9636 | P Timeout ID 0AH |
| 0x9637 | P Timeout ID 0BH |
| 0x9638 | P Timeout ID 0CH |
| 0x9639 | P Timeout ID 0DH |
| 0x963a | P Timeout ID 0EH |
| 0x963b | P Timeout ID 0FH |
| 0x963c | P Timeout ID 20H |
| 0x963d | P Timeout ID 21H |
| 0x963e | P Timeout ID 22H |
| 0x963f | P Timeout ID 71H |
| 0x9640 | P Codierdaten Checksummenfehler |
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
| 0x964e | P Zuendkondensator ZK1 n.i.O. |
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
| 0x9659 | P Zuendkondensator ZK2 n.i.O. |
| 0x965a | P Codierung/Konfiguration ZK2 unstimmig |
| 0x965b | P Unterbrechung Entladekreis ZK2 |
| 0x965c | P Reserved 3 |
| 0x965d | P Fehler im Alarmpfad |
| 0x965e | P Algo-Parameter inkonsistent |
| 0x965f | P EAM-Parameter inkonsistent |
| 0x9660 | P Zuendversuch erfolgt |
| 0x9661 | P Drucksensor Parityfehler |
| 0x9662 | P Drucksensor SRDY-Taktfehler |
| 0x9663 | P Drucksensor Datenbereich Einschwingfehler |
| 0x9664 | P Drucksensor EEPROM inkonsistent |
| 0x9665 | P Drucksensor Selbsttest Timeout |
| 0x9666 | P Drucksensor Filterfehler |
| 0x9667 | P COP-Watchdog fehlerhaft |
| 0x9672 | P Drucksensor Datenbereich unplausibel |
| 0x9673 | P Drucksensor Druckdelta unplausibel |
| 0x9674 | P Drucksensor Fehler bei Test 1 |
| 0x9675 | P Drucksensor Fehler bei Array-Test |
| 0x9676 | P Drucksensor Fehler SIORX Overrun |
| 0x9677 | P Energiesparmode aktiv |
| 0x9678 | P Kommunikation mit Zuend-IC gestoert |
| 0x9679 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x967a | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x967b | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x967c | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x967d | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x967e | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x967f | P Klemme 30 fehlt |
| 0x9b48 | P Ambiente Beleuchtung defekt |
| 0x9b49 | P Spiegelposition Potentiometer 1 defekt |
| 0x9b4a | P Spiegelposition Potentiometer 2 defekt |
| 0x9b4b | P Spiegelposition Potentiometer Versorgung defekt |
| 0x9b4c | P Vorfeldbeleuchtung defekt |
| 0x9b4d | P Schalterblock Versorgung defekt |
| 0x9b4e | P Fensterheber Hall Versorgung defekt |
| 0x9b4f | P Schalterblock Kommunikation gestoert |
| 0x9b52 | P Fensterheber Hall Sensor defekt |
| 0x9b53 | P Fensterheber Relais defekt |
| 0x9b54 | P Fensterheber EEPROM Checksummenfehler |
| 0x9b55 | P Aussenspiegel Motor 1 defekt |
| 0x9b56 | P Aussenspiegel Motor 2 defekt |
| 0x9b57 | P Aussenspiegel Beiklapp-Motor defekt |
| 0x9b58 | P Aussenspiegel Fehler Common-Leitung |
| 0x9b59 | P Schalterblock Defekt |
| 0x9b5a | P Software in Test-Modus |
| 0x9b5b | P Zentralverriegelung Verriegeln-Motor Defekt |
| 0x9b5c | P Zentralverriegelung Sichern-Motor Defekt |
| 0x9b5d | P Zentralverriegelung Common-Leitung Defekt |
| 0x9b5e | P Einstiegsbeleuchtung Defekt |
| 0x9641 | S Reserved 2 |
| 0x9664 | S Drucksensor EEPROM inkonsistent |
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
| 0x9b50 | S Fensterheber Zeitmanagement |
| 0x9b51 | S Fensterheber denormiert |
| 0x9b54 | S Fensterheber EEPROM Checksummenfehler |
| 0x9b59 | S Schalterblock Defekt |
| 0x9b5f | S Schalterblock Taste innerhalb 500 ms betaetigt |
| 0x9b60 | S Fensterheber denormiert CC-Meldung aktiv |
| 0x9b61 | S Fensterheber Panik-Modus CC-Meldung aktiv |
| 0xFFFF | unbekannter Fehlerort |

### ID_06

| ORT | ORTTEXT |
| --- | --- |
| 0x96a8 | P Watchdog-Reset uP |
| 0x96a9 | P Clock-Monitor-Reset uP |
| 0x96aa | P Illegal Opcode uP |
| 0x96ab | P Falsche Fahrgestellnummer |
| 0x96ac | P Systemzeitfehler |
| 0x96ad | P Timeout ID 01H |
| 0x96ae | P Timeout ID 02H |
| 0x96af | P Timeout ID 03H |
| 0x96b0 | P Timeout ID 04H |
| 0x96b1 | P Timeout ID 05H |
| 0x96b2 | P Timeout ID 06H |
| 0x96b3 | P Timeout ID 07H |
| 0x96b4 | P Timeout ID 08H |
| 0x96b5 | P Timeout ID 09H |
| 0x96b6 | P Timeout ID 0AH |
| 0x96b7 | P Timeout ID 0BH |
| 0x96b8 | P Timeout ID 0CH |
| 0x96b9 | P Timeout ID 0DH |
| 0x96ba | P Timeout ID 0EH |
| 0x96bb | P Timeout ID 0FH |
| 0x96bc | P Timeout ID 20H |
| 0x96bd | P Timeout ID 21H |
| 0x96be | P Timeout ID 22H |
| 0x96bf | P Timeout ID 71H |
| 0x96c0 | P Codierdaten Checksummenfehler |
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
| 0x96ce | P Zuendkondensator ZK1 n.i.O. |
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
| 0x96d9 | P Zuendkondensator ZK2 n.i.O. |
| 0x96da | P Codierung/Konfiguration ZK2 unstimmig |
| 0x96db | P Unterbrechung Entladekreis ZK2 |
| 0x96dc | P Reserved 3 |
| 0x96dd | P Fehler im Alarmpfad |
| 0x96de | P Algo-Parameter inkonsistent |
| 0x96df | P EAM-Parameter inkonsistent |
| 0x96e0 | P Zuendversuch erfolgt |
| 0x96e1 | P Drucksensor Parityfehler |
| 0x96e2 | P Drucksensor SRDY-Taktfehler |
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
| 0x96f7 | P Energiesparmode aktiv |
| 0x96f8 | P Kommunikation mit Zuend-IC gestoert |
| 0x96f9 | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x96fa | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x96fb | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x96fc | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x96fd | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x96fe | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x96ff | P Klemme 30 fehlt |
| 0x9b88 | P Ambiente Beleuchtung defekt |
| 0x9b89 | P Spiegelposition Potentiometer 1 defekt |
| 0x9b8a | P Spiegelposition Potentiometer 2 defekt |
| 0x9b8b | P Spiegelposition Potentiometer Versorgung defekt |
| 0x9b8c | P Vorfeldbeleuchtung defekt |
| 0x9b8e | P Fensterheber Hall Versorgung defekt |
| 0x9b8f | P Schalterblock Kommunikation gestoert |
| 0x9b92 | P Fensterheber Hall Sensor defekt |
| 0x9b93 | P Fensterheber Relais defekt |
| 0x9b94 | P Fensterheber EEPROM Checksummenfehler |
| 0x9b95 | P Aussenspiegel Motor 1 defekt |
| 0x9b96 | P Aussenspiegel Motor 2 defekt |
| 0x9b97 | P Aussenspiegel Beiklapp-Motor defekt |
| 0x9b98 | P Aussenspiegel Fehler Common-Leitung |
| 0x9b9a | P Software in Test-Modus |
| 0x9b9b | P Zentralverriegelung Verriegeln-Motor Defekt |
| 0x9b9c | P Zentralverriegelung Sichern-Motor Defekt |
| 0x9b9d | P Zentralverriegelung Common-Leitung Defekt |
| 0x9b9e | P Einstiegsbeleuchtung Defekt |
| 0x96c1 | S Reserved 2 |
| 0x96e4 | S Drucksensor EEPROM inkonsistent |
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
| 0x9b8d | S Schalterblock Versorgung defekt |
| 0x9b90 | S Fensterheber Zeitmanagement |
| 0x9b91 | S Fensterheber denormiert |
| 0x9b94 | S Fensterheber EEPROM Checksummenfehler |
| 0x9b99 | S Schalterblock Defekt |
| 0x9b9f | S Schalterblock Taste innerhalb 500 ms betaetigt |
| 0x9ba0 | S Fensterheber denormiert CC-Meldung aktiv |
| 0x9ba1 | S Fensterheber Panik-Modus CC-Meldung aktiv |
| 0xFFFF | unbekannter Fehlerort |

### ID_07

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_08

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_09

| ORT | ORTTEXT |
| --- | --- |
| 0x9528 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK1 |
| 0x9529 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x952a | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK2 |
| 0x952b | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x952c | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK3 |
| 0x952d | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x952e | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK4 |
| 0x952f | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x9530 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK5 |
| 0x9531 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK5 |
| 0x9532 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK6 |
| 0x9533 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK6 |
| 0x9534 | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x9535 | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x9536 | P Stack Overflow |
| 0x9537 | P OC3 Komunikationsstoerung |
| 0x9538 | P OC3 Fehler |
| 0x9539 | P OC3 Datenspeicher |
| 0x953a | P OC3 nicht freigegeben |
| 0x953b | P Entladen der Beifahrerairbags fehlerhaft |
| 0x953c | P OC3 Vorlast |
| 0x9828 | P Watchdog-Reset uP |
| 0x9829 | P Clock-Monitor-Reset uP |
| 0x982a | P Illegal Opcode uP |
| 0x982b | P Falsche Fahrgestellnummer |
| 0x982c | P Systemzeitfehler |
| 0x982d | P Timeout ID 01H (STVL) |
| 0x982e | P Timeout ID 02H (Reserve) |
| 0x982f | P Timeout ID 03H (STVR) |
| 0x9830 | P Timeout ID 04H (Reserve) |
| 0x9831 | P Timeout ID 05H (Reserve/SBSL_Y) |
| 0x9832 | P Timeout ID 06H (Reserve) |
| 0x9833 | P Timeout ID 07H (SBSR_Y) |
| 0x9834 | P Timeout ID 08H (Reserve) |
| 0x9835 | P Timeout ID 09H (Zentral_Y; E85: SIM/E6x: SFZ) |
| 0x9836 | P Timeout ID 0AH (E85: SIM/E6x: SGM) |
| 0x9837 | P Timeout ID 0BH (Reserve/SBSL_X) |
| 0x9838 | P Timeout ID 0CH (SBSR_X) |
| 0x9839 | P Timeout ID 0DH (Zentral_X; E85: SIM/E6x: SFZ) |
| 0x983a | P Timeout ID 11H (Reserve/SBSL Batterieleitung) |
| 0x983b | P Timeout ID 12H (SBSR Batterieleitung) |
| 0x983c | P Timeout ID 20H (Reserve/SBSL Sitzbelegungserkennung) |
| 0x983d | P Timeout ID 21H (SBSR Sitzbelegungserkennung) |
| 0x983e | P Unterbrechung ZK-Line |
| 0x983f | P Timeout ID 71H (E85: SIM/E6x: SGM Status) |
| 0x9840 | P Codierdaten Checksummenfehler  |
| 0x9841 | P Codierdaten falsch |
| 0x9842 | P PDC_3: zu wenig Telegramme |
| 0x9843 | P PDC_3: Datenfehler in Telegramm |
| 0x9844 | P PDC_3: Uebertragungsfehler |
| 0x9845 | P Unplausible Crash-Schwere |
| 0x9846 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) |
| 0x9847 | P Kurzschluss ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) nach Masse |
| 0x9848 | P Kurzschluss ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) nach Plus |
| 0x9849 | P Widerstand Zuendpille ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) zu klein |
| 0x984a | P Widerstand Zuendpille ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) zu gross |
| 0x984b | P Widerstand Zuendpille ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) nicht gemessen |
| 0x984c | P Unterbrechung ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) |
| 0x984d | P Spannung ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) n.i.O. |
| 0x984e | P Zuendkapazitaet ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) n.i.O. |
| 0x984f | P Codierung/Konfiguration ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) unstimmig |
| 0x9850 | P Unterbrechung Entladekreis ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) |
| 0x9851 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) |
| 0x9852 | P Kurzschluss ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) nach Masse |
| 0x9853 | P Kurzschluss ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) nach Plus |
| 0x9854 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) zu klein |
| 0x9855 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) zu gross |
| 0x9856 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) nicht gemessen |
| 0x9857 | P Unterbrechung ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) |
| 0x9858 | P Spannung ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) n.i.O. |
| 0x9859 | P Zuendkapazitaet ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) n.i.O. |
| 0x985a | P Codierung/Konfiguration ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) unstimmig |
| 0x985b | P Unterbrechung Entladekreis ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) |
| 0x985c | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 (Gurtstrammer links) |
| 0x985d | P Kurzschluss ZK3 (Gurtstrammer links) nach Masse |
| 0x985e | P Kurzschluss ZK3 (Gurtstrammer links) nach Plus |
| 0x985f | P Widerstand Zuendpille ZK3 (Gurtstrammer links) zu klein |
| 0x9860 | P Widerstand Zuendpille ZK3 (Gurtstrammer links) zu gross |
| 0x9861 | P Widerstand Zuendpille ZK3 (Gurtstrammer links) nicht gemessen |
| 0x9862 | P Unterbrechung ZK3 (Gurtstrammer links) |
| 0x9863 | P Spannung ZK3 (Gurtstrammer links) n.i.O. |
| 0x9864 | P Zuendkapazitaet ZK3 (Gurtstrammer links) n.i.O. |
| 0x9865 | P Codierung/Konfiguration ZK3 (Gurtstrammer links) unstimmig |
| 0x9866 | P Unterbrechung Entladekreis ZK3 (EGurtstrammer links) |
| 0x9867 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) |
| 0x9868 | P Kurzschluss ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) nach Masse |
| 0x9869 | P Kurzschluss ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) nach Plus |
| 0x986a | P Widerstand Zuendpille ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) zu klein |
| 0x986b | P Widerstand Zuendpille ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) zu gross |
| 0x986c | P Widerstand Zuendpille ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) nicht gemessen |
| 0x986d | P Unterbrechung ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) |
| 0x986e | P Spannung ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) n.i.O. |
| 0x986f | P Zuendkapazitaet ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) n.i.O. |
| 0x9870 | P Codierung/Konfiguration ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) unstimmig |
| 0x9871 | P Unterbrechung Entladekreis ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) |
| 0x9872 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) |
| 0x9873 | P Kurzschluss ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) nach Masse |
| 0x9874 | P Kurzschluss ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) nach Plus |
| 0x9875 | P Widerstand Zuendpille ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) zu klein |
| 0x9876 | P Widerstand Zuendpille ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) zu gross |
| 0x9877 | P Widerstand Zuendpille ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) nicht gemessen |
| 0x9878 | P Unterbrechung ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) |
| 0x9879 | P Spannung ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) n.i.O. |
| 0x987a | P Zuendkapazitaet ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) n.i.O. |
| 0x987b | P Codierung/Konfiguration ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) unstimmig |
| 0x987c | P Unterbrechung Entladekreis ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) |
| 0x987d | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) |
| 0x987e | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) nach Masse |
| 0x987f | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) nach Plus |
| 0x9880 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) zu klein |
| 0x9881 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) zu gross |
| 0x9882 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) nicht gemessen |
| 0x9883 | P Unterbrechung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) |
| 0x9884 | P Spannung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) n.i.O. |
| 0x9885 | P Zuendkapazitaet ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) n.i.O. |
| 0x9886 | P Codierung/Konfiguration ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) unstimmig |
| 0x9887 | P Unterbrechung Entladekreis ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) |
| 0x9888 | P Fehler Beschleunigungssensor x: Offset zu gross |
| 0x9889 | P Fehler Beschleunigungssensor x: Selbsttestwert zu gross |
| 0x988a | P Fehler Beschleunigungssensor x: Selbsttestwert zu klein |
| 0x988b | P Fehler Beschleunigungssensor y: Offset zu gross |
| 0x988c | P Fehler Beschleunigungssensor y: Selbsttestwert zu gross |
| 0x988d | P Fehler Beschleunigungssensor y: Selbsttestwert zu klein |
| 0x988e | P Statusfehler Beschleunigungssensor |
| 0x988f | P Hallschalter Kurzschluss |
| 0x9890 | P Hallschalter unplausibler Messwert |
| 0x9891 | P Hallschalter Unterbrechung |
| 0x9892 | P Fehler im Alarmpfad |
| 0x9893 | P Unterbrechung SBE1 |
| 0x9894 | P Kurzschluss SBE1 |
| 0x9895 | P Komunikationsstoerung SBE1 |
| 0x9896 | P Algorithmus-Parameter inkonsistent |
| 0x9897 | P EAM-Parameter inkonsistent |
| 0x9898 | P Zuendversuch erfolgt |
| 0x9899 | P COP-Watchdog fehlerhaft |
| 0x989a | P Reserve |
| 0x989b | P Reserve |
| 0x989c | P Reserve |
| 0x989e | P Interne Versorgungsspannung unplausibel (E85: SIM/E6x: SGM) |
| 0x989d | S Energiesparmode aktiv |
| 0x989f | S Power-On-Reset uP |
| 0x98a0 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x98a1 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x98a2 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x98a3 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x98a4 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x98a5 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x98a6 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x98a7 | S EMV-Fehler im Zuend-IC |
| 0x953a | S OC3 ODS System nicht freigegeben |
| 0x953c | S OC3 Vorlast |
| 0xFFFF | unbekannter Fehlerort |

### ID_0A

| ORT | ORTTEXT |
| --- | --- |
| 0x95a8 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK1 |
| 0x95a9 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x95aa | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK2 |
| 0x95ab | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x95ac | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK3 |
| 0x95ad | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x95ae | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK4 |
| 0x95af | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x95b0 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK5 |
| 0x95b1 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK5 |
| 0x95b2 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK6 |
| 0x95b3 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK6 |
| 0x95b4 | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x95b5 | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x95b6 | P Stack Overflow |
| 0x95b7 | P OC3 Kommunikationsstoerung |
| 0x95b8 | P OC3 Fehler |
| 0x95b9 | P OC3 Datenspeicher |
| 0x95ba | P OC3 nicht freigegeben |
| 0x95bb | P Entladen der Beifahrerairbags fehlerhaft |
| 0x95bc | P OC3 Vorlast |
| 0x98a8 | P Watchdog-Reset uP |
| 0x98a9 | P Clock-Monitor-Reset uP |
| 0x98aa | P Illegal Opcode uP |
| 0x98ab | P Falsche Fahrgestellnummer |
| 0x98ac | P Systemzeitfehler |
| 0x98ad | P Timeout ID 01H (STVL) |
| 0x98ae | P Timeout ID 02H (Reserve) |
| 0x98af | P Timeout ID 03H (STVR) |
| 0x98b0 | P Timeout ID 04H (Reserve) |
| 0x98b1 | P Timeout ID 05H (SBSL_Y) |
| 0x98b2 | P Timeout ID 06H (Reserve) |
| 0x98b3 | P Timeout ID 07H (Reserve/SBSR_Y) |
| 0x98b4 | P Timeout ID 08H (Reserve) |
| 0x98b5 | P Timeout ID 09H (Zentral_Y; E85: SIM/E6x: SFZ) |
| 0x98b6 | P Timeout ID 0AH (E85: SIM/E6x: SGM) |
| 0x98b7 | P Timeout ID 0BH (SBSL_X) |
| 0x98b8 | P Timeout ID 0CH (Reserve/SBSR_X) |
| 0x98b9 | P Timeout ID 0DH (Zentral_X; E85: SIM/E6x: SFZ) |
| 0x98ba | P Timeout ID 11H (SBSL Batterieleitung) |
| 0x98bb | P Timeout ID 12H (Reserve/SBSR Batterieleitung) |
| 0x98bc | P Timeout ID 20H (SBSL Sitzbelegungserkennung) |
| 0x98bd | P Timeout ID 21H (Reserve/SBSR Sitzbelegungserkennung) |
| 0x98be | P Unterbrechung ZK-Line |
| 0x98bf | P Timeout ID 71H (E85: SIM/E6x: SGM Status) |
| 0x98c0 | P Codierdaten Checksummenfehler |
| 0x98c1 | P Codierdaten falsch |
| 0x98c2 | P PDC_3: zu wenig Telegramme |
| 0x98c3 | P PDC_3: Datenfehler in Telegramm |
| 0x98c4 | P PDC_3: Uebertragungsfehler |
| 0x98c5 | P Unplausible Crash-Schwere |
| 0x98c6 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) |
| 0x98c7 | P Kurzschluss ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) nach Masse |
| 0x98c8 | P Kurzschluss ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) nach Plus |
| 0x98c9 | P Widerstand Zuendpille ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) zu klein |
| 0x98ca | P Widerstand Zuendpille ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) zu gross |
| 0x98cb | P Widerstand Zuendpille ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) nicht gemessen |
| 0x98cc | P Unterbrechung ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) |
| 0x98cd | P Spannung ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) n.i.O. |
| 0x98ce | P Zuendkapazitaet ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) n.i.O. |
| 0x98cf | P Codierung/Konfiguration ZK1 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 1) unstimmig |
| 0x98d0 | P Unterbrechung Entladekreis ZK1 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 1) |
| 0x98d1 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 2) |
| 0x98d2 | P Kurzschluss ZK2 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 2) nach Masse |
| 0x98d3 | P Kurzschluss ZK2 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 2) nach Plus |
| 0x98d4 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) zu klein |
| 0x98d5 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) zu gross |
| 0x98d6 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) nicht gemessen |
| 0x98d7 | P Unterbrechung ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) |
| 0x98d8 | P Spannung ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) n.i.O. |
| 0x98d9 | P Zuendkapazitaet ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) n.i.O. |
| 0x98da | P Codierung/Konfiguration ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) unstimmig |
| 0x98db | P Unterbrechung Entladekreis ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) |
| 0x98dc | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 (Gurtstrammer rechts) |
| 0x98dd | P Kurzschluss ZK3 (Gurtstrammer rechts) nach Masse |
| 0x98de | P Kurzschluss ZK3 (Gurtstrammer rechts) nach Plus |
| 0x98df | P Widerstand Zuendpille ZK3 (Gurtstrammer rechts) zu klein |
| 0x98e0 | P Widerstand Zuendpille ZK3 (Gurtstrammer rechts) zu gross |
| 0x98e1 | P Widerstand Zuendpille ZK3 (Gurtstrammer rechts) nicht gemessen |
| 0x98e2 | P Unterbrechung ZK3 (Gurtstrammer rechts) |
| 0x98e3 | P Spannung ZK3 (Gurtstrammer rechts) n.i.O. |
| 0x98e4 | P Zuendkapazitaet ZK3 (Gurtstrammer rechts) n.i.O. |
| 0x98e5 | P Codierung/Konfiguration ZK3 (Gurtstrammer rechts) unstimmig |
| 0x98e6 | P Unterbrechung Entladekreis ZK3 (Gurtstrammer rechts) |
| 0x98e7 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) |
| 0x98e8 | P Kurzschluss ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) nach Masse |
| 0x98e9 | P Kurzschluss ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) nach Plus |
| 0x98ea | P Widerstand Zuendpille ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) zu klein |
| 0x98eb | P Widerstand Zuendpille ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) zu gross |
| 0x98ec | P Widerstand Zuendpille ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) nicht gemessen |
| 0x98ed | P Unterbrechung ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) |
| 0x98ee | P Spannung ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) n.i.O. |
| 0x98ef | P Zuendkapazitaet ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) n.i.O. |
| 0x98f0 | P Codierung/Konfiguration ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) unstimmig |
| 0x98f1 | P Unterbrechung Entladekreis ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) |
| 0x98f2 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) |
| 0x98f3 | P Kurzschluss ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) nach Masse |
| 0x98f4 | P Kurzschluss ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) nach Plus |
| 0x98f5 | P Widerstand Zuendpille ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) zu klein |
| 0x98f6 | P Widerstand Zuendpille ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) zu gross |
| 0x98f7 | P Widerstand Zuendpille ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) nicht gemessen |
| 0x98f8 | P Unterbrechung ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) |
| 0x98f9 | P Spannung ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) n.i.O. |
| 0x98fa | P Zuendkapazitaet ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) n.i.O. |
| 0x98fb | P Codierung/Konfiguration ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) unstimmig |
| 0x98fc | P Unterbrechung Entladekreis ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) |
| 0x98fd | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nach Masse) |
| 0x98fe | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nach Masse) |
| 0x98ff | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nach Plus) |
| 0x9900 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) zu klein |
| 0x9901 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) zu gross |
| 0x9902 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nicht gemessen |
| 0x9903 | P Unterbrechung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) |
| 0x9904 | P Spannung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) n.i.O. |
| 0x9905 | P Zuendkapazitaet ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) n.i.O. |
| 0x9906 | P Codierung/Konfiguration ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) unstimmig |
| 0x9907 | P Unterbrechung Entladekreis ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) |
| 0x9908 | P Fehler Beschleunigungssensor x: Offset zu gross |
| 0x9909 | P Fehler Beschleunigungssensor x: Selbsttestwert zu gross |
| 0x990a | P Fehler Beschleunigungssensor x: Selbsttestwert zu klein |
| 0x990b | P Fehler Beschleunigungssensor y: Offset zu gross |
| 0x990c | P Fehler Beschleunigungssensor y: Selbsttestwert zu gross |
| 0x990d | P Fehler Beschleunigungssensor y: Selbsttestwert zu klein |
| 0x990e | P Statusfehler Beschleunigungssensor |
| 0x990f | P Hallschalter Kurzschluss |
| 0x9910 | P Hallschalter unplausibler Messwert |
| 0x9911 | P Hallschalter Unterbrechung |
| 0x9912 | P Fehler im Alarmpfad |
| 0x9913 | P Unterbrechung SBE1 |
| 0x9914 | P Kurzschluss SBE1 |
| 0x9915 | P Kommunikationsstoerung SBE1 |
| 0x9916 | P Algorithmus-Parameter inkonsistent |
| 0x9917 | P EAM-Parameter inkonsistent |
| 0x9918 | P Zuendversuch erfolgt |
| 0x9919 | P COP-Watchdog fehlerhaft |
| 0x991a | P Unterbrechung Batterieleitung |
| 0x991b | P Kurzschluss gegen Masse Batterieleitung (Schirmung) |
| 0x991c | P Kurzschluss gegen Plus Batterieleitung (Schirmung) |
| 0x991d | P Batterieleitung unplausibler Messwert |
| 0x991e | P Interne Versorgungsspannung unplausibel (E85: SIM/E6x: SGM) |
| 0x991f | S Power-On-Reset uP |
| 0x9920 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9921 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9922 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9923 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9924 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9925 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9926 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9927 | S EMV-Fehler im Zuend-IC |
| 0x9928 | S Energiesparmode aktiv |
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
| 0xFFFF | unbekannter Fehlerort |

### ID_0E

| ORT | ORTTEXT |
| --- | --- |
| 0x9aa8 | P Watchdog-Reset uP |
| 0x9aa9 | P Clock-Monitor-Reset uP |
| 0x9aaa | P Illegal Opcode uP |
| 0x9aab | P Falsche Fahrgestellnummer |
| 0x9aac | P Systemzeitfehler |
| 0x9aad | P Timeout ID 01H (TE_FAT) |
| 0x9aaf | P Timeout ID 03H (TE_BFT) |
| 0x9ab1 | P Timeout ID 05H (SBSL) |
| 0x9ab3 | P Timeout ID 07H (SBSR) |
| 0x9ab5 | P Timeout ID 09H (SFZ) |
| 0x9ab6 | P Timeout ID 0AH (SGM_SIM) |
| 0x9ab7 | P Timeout ID 0BH (SBSL) |
| 0x9ab8 | P Timeout ID 0CH (SBSR) |
| 0x9ab9 | P Timeout ID 0DH (SFZ) |
| 0x9aba | P Timeout ID 0EH (SFZ) |
| 0x9abc | P Timeout ID 20H (SBSL) |
| 0x9abd | P Timeout ID 21H (SBSR) |
| 0x9abf | P Timeout ID 71H (SGM_SIM) |
| 0x9ac0 | P Codierdaten Checksummenfehler |
| 0x9ac2 | P PDC_3 : zu wenig Telegramme |
| 0x9ac3 | P PDC_3 : Datenfehler in Telegramm |
| 0x9ac4 | P PDC_3 : Uebertragungsfehler |
| 0x9ac5 | P unplausible Crash-Schwere |
| 0x9ac6 | P Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9ac7 | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung |
| 0x9ac8 | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung |
| 0x9ac9 | P Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x9aca | P Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung |
| 0x9acb | P Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung |
| 0x9acc | P Algorithmus-Parameter inkonsistent |
| 0x9acd | P COP-Watchdog fehlerhaft |
| 0x9af0 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9af1 | P Kurzschluss ZK1 nach Masse |
| 0x9af2 | P Kurzschluss ZK1 nach Plus |
| 0x9af3 | P Widerstand Zuendpille ZK1 zu klein |
| 0x9af4 | P Widerstand Zuendpille ZK1 zu gross |
| 0x9af5 | P Widerstand Zuendpille ZK1 nicht gemessen |
| 0x9af6 | P Unterbrechung ZK1 |
| 0x9af7 | P Spannung ZK1 n.i.O. |
| 0x9af8 | P Zuendkondensator ZK1 n.i.O. |
| 0x9af9 | P Codierung/Konfiguration ZK1 unstimmig |
| 0x9afa | P Unterbrechung Entladekreis ZK1 |
| 0x9afb | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9afc | P Kurzschluss ZK2 nach Masse |
| 0x9afd | P Kurzschluss ZK2 nach Plus |
| 0x9afe | P Widerstand Zuendpille ZK2 zu klein |
| 0x9aff | P Widerstand Zuendpille ZK2 zu gross |
| 0x9b00 | P Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9b01 | P Unterbrechung ZK2 |
| 0x9b02 | P Spannung ZK2 n.i.O. |
| 0x9b03 | P Zuendkondensator ZK2 n.i.O. |
| 0x9b04 | P Codierung/Konfiguration ZK2 unstimmig |
| 0x9b05 | P Unterbrechung Entladekreis ZK2 |
| 0x9b06 | P Zuendversuch erfolgt |
| 0x9b07 | P Fehler im Alarmpfad |
| 0x9b09 | P U-ASE-Überwachung unterer Grenzwert unterschritten |
| 0x9b10 | P U-ASE-Überwachung oberer Grenzwert überschritten |
| 0x9b11 | P Rollover-Modul Schnittstellen-Fehler unzulässiger Fehlercode |
| 0x9b12 | P Rollover-Modul fehlerhafte Kalibrierdaten |
| 0x9b13 | P Rollover-Modul Hilfsprozessor nicht verfuegbar |
| 0x9b14 | P Rollover-Modul Schnittstellen-Fehler unzulässiger Aufruf |
| 0x9b15 | P Rollover-Modul Schnittstellen-Fehler unzulässige Reihenfolge der Aufrufe |
| 0x9b16 | P Rollover-Modul Schnittstellen-Fehler Reentrance-Problem |
| 0x9b17 | P Rollover-Modul Arming-Pfad Fehler aus Low-g-Sensor Test |
| 0x9b18 | P Rollover-Modul Arming-Pfad KS nach Masse |
| 0x9b19 | P Rollover-Modul Arming-Pfad KS nach Plus |
| 0x9b1a | P Rollover-Modul Winkelbeschl.-Sensor Eigendiagnose Schaltkreis-Fehler |
| 0x9b1b | P Rollover-Modul Winkelbeschl.-Sensor Fehler bei Anregung der Eigendiagnose |
| 0x9b1c | P Rollover-Modul Winkelbeschl.-Sensor Fehler bei Beenden der Eigendiagnose |
| 0x9b1d | P Rollover-Modul Winkelbeschl.-Sensor Null-Lage bei Initialisierung fehlerhaft |
| 0x9b1e | P Rollover-Modul Winkelbeschl.-Sensor Fehler der Eigendiagnose |
| 0x9b1f | P Rollover-Modul Winkelbeschl.-Sensor KS nach Plus |
| 0x9b20 | P Rollover-Modul Winkelbeschl.-Sensor KS nach Masse |
| 0x9b21 | P Rollover-Modul Vert. Beschl.-Sensor Low-g Eigendiagnose Fehler bei Anregung der Auslenkung |
| 0x9b22 | P Rollover-Modul Vert. Beschl.-Sensor Low-g Null-Lage fehlerhaft |
| 0x9b23 | P Rollover-Modul Vert. Beschl.-Sensor Low-g KS nach Plus |
| 0x9b24 | P Rollover-Modul Vert. Beschl.-Sensor Low-g KS nach Masse |
| 0x9b25 | P Rollover-Modul Schnittstellen-Fehler unzulässige Daten aus Rollover-Modul |
| 0x9b26 | P Rollover-Modul Codierung für Aktivierung des Rollover fehlerhaft |
| 0x9b27 | P Rollover-Modul Arming-Pfad Fehler aus High-G-Sensor Test |
| 0x9b29 | P FeTraWe aktiv |
| 0x9b2a | P Kommunikation mit Zuend-IC gestoert |
| 0x9b2b | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9b2c | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9b2d | P Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9b2e | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x9b32 | P Rollover-Modul Arming-Pfad Fehler Verdacht auf KS nach Plus |
| 0x9b33 | P EAM-Parameter inkonsistent |
| 0x9ac1 | S Reserved 2 |
| 0x9ae8 | S Power-On-Reset uP |
| 0x9ae9 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9aea | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9aeb | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9aec | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9aed | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9aee | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9aef | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9b08 | S EMV-Fehler im Zuend-Ic |
| 0x9b28 | S Rollover-Modul High-G Arming-Pfad Test nicht durchgeführt |
| 0x9b29 | S FeTraWe aktiv |
| 0x9b2f | S Rollover-Modul Auslöse-Entscheidung aber kein Arming |
| 0x9b30 | S Rollover-Modul Schnittstellen-Fehler Messwerterfassung |
| 0x9b31 | S U-ASE-Überwachung inaktiv codiert |
| 0x9b34 | S Rollover-Modul EDR Aufzeichnung unvollständig |
| 0x9b35 | S Rollover-Modul Reset aufgetreten |
| 0x9b36 | S Rollover-Modul interner Fehler 21 |
| 0x9b37 | S Rollover-Modul interner Fehler 22 |
| 0x9b38 | S Rollover-Modul interner Fehler 23 |
| 0x9b39 | S Rollover-Modul interner Fehler 24 |
| 0x9b3a | S Rollover-Modul interner Fehler 25 |
| 0x9b3b | S Rollover-Modul interner Fehler 26 |
| 0x9b3c | S Rollover-Modul interner Fehler 27 |
| 0x9b3d | S Rollover-Modul interner Fehler 28 |
| 0x9b3e | S Rollover-Modul interner Fehler 29 |
| 0x9b3f | S Rollover-Modul interner Fehler 30 |
| 0x9b40 | S Rollover-Modul interner Fehler 31 |
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
| 0x4E40 | DFES_DTCM_DFC_Cj945SpiCom1_C__G - Reported SPI and COM-Errors of a Cj945 |
| 0x4E29 | DFES_DTCM_DFC_KnDetSens1PortAMax_C__G - Knocksensor fault: short circuit sensor 1, line A, Max |
| 0x4E2A | DFES_DTCM_DFC_KnDetSens1PortAMin_C__G - Knocksensor fault: short circuit sensor 1, line A, Min |
| 0x4E2B | DFES_DTCM_DFC_KnDetSens1PortBMax_C__G - Knocksensor fault: short circuit sensor 1, line B, Max |
| 0x4E2C | DFES_DTCM_DFC_KnDetSens1PortBMin_C__G - Knocksensor fault: short circuit sensor 1, line B, Min |
| 0x4E2D | DFES_DTCM_DFC_KnDetSens2PortAMax_C__G - Knocksensor fault: short circuit sensor 2, line A, Max |
| 0x4E2E | DFES_DTCM_DFC_KnDetSens2PortAMin_C__G - Knocksensor fault: short circuit sensor 2, line A, Min |
| 0x4E2F | DFES_DTCM_DFC_KnDetSens2PortBMax_C__G - Knocksensor fault: short circuit sensor 2, line B, Max |
| 0x4E30 | DFES_DTCM_DFC_KnDetSens2PortBMin_C__G - Knocksensor fault: short circuit sensor 2, line B, Min |
| 0x4E31 | DFES_DTCM_DFC_KnDetSens3PortAMax_C__G - Knocksensor fault: short circuit sensor 3, line A, Max |
| 0x4E32 | DFES_DTCM_DFC_KnDetSens3PortAMin_C__G - Knocksensor fault: short circuit sensor 3, line A, Min |
| 0x4E33 | DFES_DTCM_DFC_KnDetSens3PortBMax_C__G - Knocksensor fault: short circuit sensor 3, line B, Max |
| 0x4E34 | DFES_DTCM_DFC_KnDetSens3PortBMin_C__G - Knocksensor fault: short circuit sensor 3, line B, Min |
| 0x4E35 | DFES_DTCM_DFC_KnDetSens4PortAMax_C__G - Knocksensor fault: short circuit sensor 4, line A, Max |
| 0x4E36 | DFES_DTCM_DFC_KnDetSens4PortAMin_C__G - Knocksensor fault: short circuit sensor 4, line A, Min |
| 0x4E37 | DFES_DTCM_DFC_KnDetSens4PortBMax_C__G - Knocksensor fault: short circuit sensor 4, line B, Max |
| 0x4E38 | DFES_DTCM_DFC_KnDetSens4PortBMin_C__G - Knocksensor fault: short circuit sensor 4, line B, Min |
| 0x4E39 | DFES_DTCM_DFC_DSMDummy_C__G - Dummy element to guarantee a minimum of one defined element of DFC and DFP |
| 0x4E21 | DFES_DTCM_DFC_AdcI_ADC0_Cal_C__G - DFC for ADC0 power-up calibration timeout errors |
| 0x4E22 | DFES_DTCM_DFC_AdcI_ADC0_Conv_C__G - DFC for ADC0 conversion timeout errors |
| 0x4E23 | DFES_DTCM_DFC_AdcI_ADC1_Cal_C__G - DFC for ADC1 power-up calibration timeout errors |
| 0x4E24 | DFES_DTCM_DFC_AdcI_ADC1_Conv_C__G - DFC for ADC1 conversion timeout errors |
| 0x4E25 | DFES_DTCM_DFC_AAVEmax_C__G - Check of maximum for DFP_AAVE |
| 0x4E26 | DFES_DTCM_DFC_AAVEmin_C__G - Check of minimum for DFP_AAVE |
| 0x4E27 | DFES_DTCM_DFC_AAVEnpl_C__G - Plausibilitycheck for DFP_AAVE |
| 0x4E28 | DFES_DTCM_DFC_AAVEsig_C__G - Signalcheck for DFP_AAVE |
| 0x2091 | DFES_DTCM_DFC_ANWSEmax_C__G - Nockenwellenversteller Auslass - Kurzschluss nach Plus |
| 0x2090 | DFES_DTCM_DFC_ANWSEmin_C__G - Nockenwellenversteller Auslass - Kurzschluss nach Minus |
| 0x0013 | DFES_DTCM_DFC_ANWSEsig_C__G - Nockenwellenversteller Auslass - Leitungsunterbrechung |
| 0x0014 | DFES_DTCM_DFC_ANWSmin_C__G - Nockenwellensteuerung Auslass - Anschlagadaption außerhalb gütligem Bereich |
| 0x0015 | DFES_DTCM_DFC_ANWSnpl_C__G - Nockenwellensteuerung Auslass - Regelfehler, unplausible Position |
| 0x4E41 | DFES_DTCM_DFC_ASYHFMmax_C__G - Asymmetrie Zwischen HFM1 und HFM2 |
| 0x4E42 | DFES_DTCM_DFC_ASYHFMmin_C__G - Asymmetrie Zwischen HFM1 und HFM2 |
| 0x4E43 | DFES_DTCM_DFC_ASYHFMnpl_C__G - Asymmetrie Zwischen HFM1 und HFM2 |
| 0x4E44 | DFES_DTCM_DFC_ASYHFMsig_C__G - Asymmetrie Zwischen HFM1 und HFM2 |
| 0x4E45 | DFES_DTCM_DFC_ATNVmax_C__G - Temp.-Sensor hinter dem Vorkatalysator - Kurzschluss nach Plus |
| 0x4E46 | DFES_DTCM_DFC_ATNVmin_C__G - Temp.-Sensor hinter dem Vorkatalysator - Kurzschluss nach Minus |
| 0x4E47 | DFES_DTCM_DFC_ATNVnpl_C__G - Temp.-Sensor hinter dem Vorkatalysator - Unplausibel |
| 0x4E48 | DFES_DTCM_DFC_ATNVsig_C__G - Temp.-Sensor hinter dem Vorkatalysator - Leitungsunterbrechung |
| 0x0571 | DFES_DTCM_DFC_BREMSnpl_C__G - Bremsschalter - Prüfresultat unplausibel |
| 0x110C | DFES_DTCM_DFC_BWFnpl_C__G - PWG-Bewegungserkennung - Signal unplausibel |
| 0x1678 | DFES_DTCM_DFC_CACCmax_C__G - ACC (Adaptive Cruise Control) - keine Reaktion auf ACC Abschaltung |
| 0x1677 | DFES_DTCM_DFC_CACCmin_C__G - ACC (Adaptive Cruise Control) - keine Aktivität festzustellen |
| 0x1676 | DFES_DTCM_DFC_CACCnpl_C__G - ACC (Adaptive Cruise Control) Signal - Plausibilitätsfehler |
| 0x161E | DFES_DTCM_DFC_CACCsig_C__G - ACC (Adaptive Cruise Control) - Kein Signal |
| 0x3200 | DFES_DTCM_DFC_CANAmax_C__G - Powertrain CAN, CAN-Baustein - defekt |
| 0x3201 | DFES_DTCM_DFC_CANAmin_C__G - Powertrain CAN, DPRAM-CAN-Baustein - defekt |
| 0x3202 | DFES_DTCM_DFC_CANAsig_C__G - Powertrain CAN, CAN-Baustein - Abschaltung |
| 0x4E49 | DFES_DTCM_DFC_CANBmax_C__G - Check of maximum for DFP_CANB |
| 0x4E4A | DFES_DTCM_DFC_CANBmin_C__G - Check of minimum for DFP_CANB |
| 0x4E4B | DFES_DTCM_DFC_CANBsig_C__G - Signalcheck for DFP_CANB |
| 0x3206 | DFES_DTCM_DFC_CARSmin_C__G - CAN-Timeout ARS (Active Roll Stabilisation) - Aktivitätsfehler CAN-ARS- Botschaft |
| 0x3208 | DFES_DTCM_DFC_CARSnpl_C__G - CAN-Timeout ARS (Active Roll Stabilisation) - Plausibilitätsfehler |
| 0x3207 | DFES_DTCM_DFC_CARSsig_C__G - CAN-Timeout ARS (Active Roll Stabilisation) - Kein Signal |
| 0x4E4C | DFES_DTCM_DFC_CATmax_C__G - Check of maximum for DFP_CAT |
| 0x4E4D | DFES_DTCM_DFC_CATmin_C__G - Check of minimum for DFP_CAT |
| 0x4E4E | DFES_DTCM_DFC_CATnpl_C__G - Plausibilitycheck for DFP_CAT |
| 0x4E4F | DFES_DTCM_DFC_CATsig_C__G - Signalcheck for DFP_CAT |
| 0x3212 | DFES_DTCM_DFC_CCASnpl_C__G - CAN-Botschaftsüberwachung CAS (Car Access System) - Plausibilitätsfehler |
| 0x3211 | DFES_DTCM_DFC_CCASsig_C__G - CAN-Botschaftsüberwachung CAS (Car Access System) - Kein Signal |
| 0x3209 | DFES_DTCM_DFC_CDSCmin_C__G - CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Aliveprüfung |
| 0x3210 | DFES_DTCM_DFC_CDSCnpl_C__G - CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Plausibilitätsfehler |
| 0x16C7 | DFES_DTCM_DFC_CDSCsig_C__G - CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Sperrung wegen unplausibler Werte |
| 0x3213 | DFES_DTCM_DFC_CEGSmin_C__G - CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Timeout |
| 0x3214 | DFES_DTCM_DFC_CEGSnpl_C__G - CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Plausibilitätsfehler |
| 0x1611 | DFES_DTCM_DFC_CEGSsig_C__G - Serielle Kommunikationsverbindung Getriebesteuergerät - Kein Signal |
| 0x4E50 | DFES_DTCM_DFC_CIFmax_C__G - Check of maximum for DFP_CIF |
| 0x4E51 | DFES_DTCM_DFC_CIFmin_C__G - Check of minimum for DFP_CIF |
| 0x4E52 | DFES_DTCM_DFC_CIFnpl_C__G - Plausibilitycheck for DFP_CIF |
| 0x4E53 | DFES_DTCM_DFC_CIFsig_C__G - Signalcheck for DFP_CIF |
| 0x3215 | DFES_DTCM_DFC_CIHKAsig_C__G - CAN-Botschaftsüberwachung IHKA (integrierte Heiz- und Klimaautomatik) - Kein Signal |
| 0x3216 | DFES_DTCM_DFC_CINSmin_C__G - CAN-Timeout Instrumentenkombination |
| 0x3217 | DFES_DTCM_DFC_CINSnpl_C__G - CAN-Botschaftsüberwachung Instrumentenkombination - Plausibilitätsfehler |
| 0x1612 | DFES_DTCM_DFC_CINSsig_C__G - Serielle Kommunikationsverbindung Instrumentenkombination - Kein Signal |
| 0x4E54 | DFES_DTCM_DFC_CMUTmax_C__G - Check of maximum for DFP_CMUT |
| 0x4E55 | DFES_DTCM_DFC_CMUTmin_C__G - Check of minimum for DFP_CMUT |
| 0x4E56 | DFES_DTCM_DFC_CMUTnpl_C__G - Plausibilitycheck for DFP_CMUT |
| 0x4E57 | DFES_DTCM_DFC_CMUTsig_C__G - Signalcheck for DFP_CMUT |
| 0x4E58 | DFES_DTCM_DFC_CNE1max_C__G - CAN Host 1 abwesend |
| 0x4E59 | DFES_DTCM_DFC_CNE1min_C__G - CAN Host 1 abwesend |
| 0x4E5A | DFES_DTCM_DFC_CNE1npl_C__G - CAN Host 1 abwesend |
| 0x4E5B | DFES_DTCM_DFC_CNE1sig_C__G - CAN Host 1 abwesend |
| 0x4E5C | DFES_DTCM_DFC_CNE3max_C__G - CAN Host 3 abwesend |
| 0x4E5D | DFES_DTCM_DFC_CNE3min_C__G - CAN Host 3 abwesend |
| 0x4E5E | DFES_DTCM_DFC_CNE3npl_C__G - CAN Host 3 abwesend |
| 0x4E5F | DFES_DTCM_DFC_CNE3sig_C__G - CAN Host 3 abwesend |
| 0x4E60 | DFES_DTCM_DFC_CNE6max_C__G - CAN Host 6 abwesend |
| 0x4E61 | DFES_DTCM_DFC_CNE6min_C__G - CAN Host 6 abwesend |
| 0x4E62 | DFES_DTCM_DFC_CNE6npl_C__G - CAN Host 6 abwesend |
| 0x4E63 | DFES_DTCM_DFC_CNE6sig_C__G - CAN Host 6 abwesend |
| 0x4E64 | DFES_DTCM_DFC_CNE7max_C__G - CAN Host 7 abwesend |
| 0x4E65 | DFES_DTCM_DFC_CNE7min_C__G - CAN Host 7 abwesend |
| 0x4E66 | DFES_DTCM_DFC_CNE7npl_C__G - CAN Host 7 abwesend |
| 0x4E67 | DFES_DTCM_DFC_CNE7sig_C__G - CAN Host 7 abwesend |
| 0x4E68 | DFES_DTCM_DFC_CNE8max_C__G - CAN Host 8 abwesend |
| 0x4E69 | DFES_DTCM_DFC_CNE8min_C__G - CAN Host 8 abwesend |
| 0x4E6A | DFES_DTCM_DFC_CNE8npl_C__G - CAN Host 8 abwesend |
| 0x4E6B | DFES_DTCM_DFC_CNE8sig_C__G - CAN Host 8 abwesend |
| 0x320D | DFES_DTCM_DFC_CSSGsig_C__G - CAN-Botschaftsüberwachung EGS |
| 0x3219 | DFES_DTCM_DFC_CSZLmin_C__G - CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Aliveprüfung |
| 0x3221 | DFES_DTCM_DFC_CSZLnpl_C__G - CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Plausibilitätsfehler |
| 0x3220 | DFES_DTCM_DFC_CSZLsig_C__G - CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Kein Signal |
| 0x2610 | DFES_DTCM_DFC_CUHRnpl_C__G - CAN rel.Zeitgeber, unplausibel |
| 0x0123 | DFES_DTCM_DFC_DK1Pmax_C__G - Drosselklappenpotentiometer 1 - Bereichsverletzung nach oben |
| 0x0122 | DFES_DTCM_DFC_DK1Pmin_C__G - Drosselklappenpotentiometer 1 - Bereichsverletzung nach unten |
| 0x0121 | DFES_DTCM_DFC_DK1Pnpl_C__G - Drosselklappenpotentiometer 1 - Unplausibel zu Ersatzwert aus Füllung |
| 0x0223 | DFES_DTCM_DFC_DK2Pmax_C__G - Drosselklappenpotentiometer 2 - Bereichsverletzung nach oben |
| 0x0222 | DFES_DTCM_DFC_DK2Pmin_C__G - Drosselklappenpotentiometer 2 - Bereichsverletzung nach unten |
| 0x0221 | DFES_DTCM_DFC_DK2Pnpl_C__G - Drosselklappenpotentiometer 2 - Unplausibel zu Ersatzwert aus Füllung |
| 0x4E6C | DFES_DTCM_DFC_DKPDFmax_C__G - Check of maximum for DFP_DKPDF |
| 0x4E6D | DFES_DTCM_DFC_DKPDFmin_C__G - Check of minimum for DFP_DKPDF |
| 0x4E6E | DFES_DTCM_DFC_DKPDFnpl_C__G - Plausibility check for DFP_DKPDF |
| 0x4E6F | DFES_DTCM_DFC_DKPDFsig_C__G - Signal check for DFP_DKPDF |
| 0x110D | DFES_DTCM_DFC_DKnpl_C__G - Fehler DK-Poti 1 oder DK-Poti 2 |
| 0x4E70 | DFES_DTCM_DFC_DPLZSRax_C__G - Check of maximum for DFP_DPL |
| 0x4E71 | DFES_DTCM_DFC_DPLZSRin_C__G - Check of minimum for DFP_DPL |
| 0x4E72 | DFES_DTCM_DFC_DPLnpl_C__G - Plausibilitycheck for DFP_DPL |
| 0x4E73 | DFES_DTCM_DFC_DPLsig_C__G - Signalcheck for DFP_DPL |
| 0x4E74 | DFES_DTCM_DFC_DSACmax_C__G - Drucksensor-Klima Kurzschluss nach Plus |
| 0x4E75 | DFES_DTCM_DFC_DSACmin_C__G - Drucksensor-Klima Kurzschluss nach Minus |
| 0x4E76 | DFES_DTCM_DFC_DSACnpl_C__G - Drucksensor-Klima Unplausibel |
| 0x4E77 | DFES_DTCM_DFC_DSACsig_C__G - Drucksensor-Klima Leitungsunterbrechung |
| 0x4E78 | DFES_DTCM_DFC_DSBKVmax_C__G - Check of maximum for DFP_DSBKV |
| 0x4E79 | DFES_DTCM_DFC_DSBKVmin_C__G - Check of minimum for DFP_DSBKV |
| 0x4E7A | DFES_DTCM_DFC_DSBKVnpl_C__G - Plausibilitycheck for DFP_DSBKV |
| 0x4E7B | DFES_DTCM_DFC_DSBKVsig_C__G - Signalcheck for DFP_DSBKV |
| 0x4E7C | DFES_DTCM_DFC_DSKVmax_C__G - Kraftstoffdrucksensor kurzschluss nach Plus |
| 0x4E7D | DFES_DTCM_DFC_DSKVmin_C__G - Kraftstoffdrucksensor kurzschluss nach Minus |
| 0x4E7E | DFES_DTCM_DFC_DSKVnpl_C__G - Kraftstoffdrucksensor Unplausibel |
| 0x4E7F | DFES_DTCM_DFC_DSKVsig_C__G - Kraftstoffdrucksensor Leitungsunterbrechung |
| 0x4E80 | DFES_DTCM_DFC_DSLmax_C__G - Check of maximum for DFP_DSL |
| 0x4E81 | DFES_DTCM_DFC_DSLmin_C__G - Check of minimum for DFP_DSL |
| 0x4E82 | DFES_DTCM_DFC_DSLnpl_C__G - Plausibility check for DFP_DSL |
| 0x4E83 | DFES_DTCM_DFC_DSLsig_C__G - Signal check for DFP_DSL |
| 0x4E84 | DFES_DTCM_DFC_DSSmax_C__G - Check of maximum for DFP_DSS |
| 0x4E85 | DFES_DTCM_DFC_DSSmin_C__G - Check of minimum for DFP_DSS |
| 0x4E86 | DFES_DTCM_DFC_DSSnpl_C__G - Plausibility check for DFP_DSS |
| 0x4E87 | DFES_DTCM_DFC_DSSsig_C__G - Signal check for DFP_DSS |
| 0x2229 | DFES_DTCM_DFC_DSUmax_C__G - Umgebungsdruckschaltkreis - Kurzschluss nach Plus |
| 0x2228 | DFES_DTCM_DFC_DSUmin_C__G - Umgebungsdruckschaltkreis - Kurzschluss nach Minus |
| 0x2227 | DFES_DTCM_DFC_DSUnpl_C__G - Umgebungsdruckschaltkreis - Unplausibel |
| 0x4E88 | DFES_DTCM_DFC_DSVEmax_C__G - Check of maximum for DFP_DSVE |
| 0x4E89 | DFES_DTCM_DFC_DSVEmin_C__G - Check of minimum for DFP_DSVE |
| 0x4E8A | DFES_DTCM_DFC_DSVEnpl_C__G - Plausibilitycheck for DFP_DSVE |
| 0x4E8B | DFES_DTCM_DFC_DSVEsig_C__G - Signalcheck for DFP_DSVE |
| 0x4E8C | DFES_DTCM_DFC_DSVmax_C__G - Check of maximum for DFP_DSV |
| 0x4E8D | DFES_DTCM_DFC_DSVmin_C__G - Check of minimum for DFP_DSV |
| 0x4E8E | DFES_DTCM_DFC_DSVnpl_C__G - Plausibilitycheck for DFP_DSV |
| 0x4E8F | DFES_DTCM_DFC_DSVsig_C__G - Signalcheck for DFP_DSV |
| 0x4E90 | DFES_DTCM_DFC_DTEVmax_C__G - Check of maximum for DFP_DTEV |
| 0x4E91 | DFES_DTCM_DFC_DTEVmin_C__G - Check of minimum for DFP_DTEV |
| 0x4E92 | DFES_DTCM_DFC_DTEVnpl_C__G - Plausibility check for DFP_DTEV |
| 0x4E93 | DFES_DTCM_DFC_DTEVsig_C__G - Signal check for DFP_DTEV |
| 0x2103 | DFES_DTCM_DFC_DVEEmax_C__G - Drosselklappensteller Stellmotor - Kurzschluss nach Plus |
| 0x2102 | DFES_DTCM_DFC_DVEEmin_C__G - Drosselklappensteller Stellmotor - Kurzschluss nach Minus |
| 0x1636 | DFES_DTCM_DFC_DVEEnpl_C__G - Drosselklappensteller Stellmotor - DVE Ansteuerungsfehler |
| 0x2100 | DFES_DTCM_DFC_DVEEsig_C__G - Drosselklappensteller Stellmotor - Leitungsunterbrechung |
| 0x1629 | DFES_DTCM_DFC_DVEFOmax_C__G - Drosselklappensteller Federtest - Abbruch, Feder öffnet nicht |
| 0x1628 | DFES_DTCM_DFC_DVEFOmin_C__G - Drosselklappensteller Federtest - Fehlfunktion beim Öffnen |
| 0x1634 | DFES_DTCM_DFC_DVEFmax_C__G - DV-E Fehler bei Prüfung der Rückstellfeder |
| 0x1631 | DFES_DTCM_DFC_DVEFmin_C__G - DV-E Fehler bei Prüfung der öffnenden Feder |
| 0x1637 | DFES_DTCM_DFC_DVELnpl_C__G - Drosselklappen Lageregelung - Regeldifferenz |
| 0x1633 | DFES_DTCM_DFC_DVENnpl_C__G - Drosselklappen-Adaption - Notluftpunkt nicht adaptiert |
| 0x1639 | DFES_DTCM_DFC_DVERmax_C__G - Drosselklappen Lageregelung - klemmt anhaltend |
| 0x1638 | DFES_DTCM_DFC_DVERmin_C__G - Drosselklappen Lageregelung - klemmt kurzzeitig |
| 0x163B | DFES_DTCM_DFC_DVETnpl_C__G - Drosselklappen-Adaption - keine Adaption nach Austausch |
| 0x1641 | DFES_DTCM_DFC_DVEUBmax_C__G - Drosselklappen-Adaption - Lernverbot Status Prüfbedingung >0 aber nicht 27 |
| 0x1642 | DFES_DTCM_DFC_DVEUBmin_C__G - Drosselklappen-Adaption - Lernverbot Status Prüfbedingung = 27 |
| 0x1644 | DFES_DTCM_DFC_DVEUWnpl_C__G - Drosselklappen-Adaption - Abbruch unterer mechanischer Anschlag (UMA) Wiederlernen |
| 0x1635 | DFES_DTCM_DFC_DVEUnpl_C__G - Drosselklappen-Adaption - UMA-Lernen während Urinitialisierung abgebrochen |
| 0x1643 | DFES_DTCM_DFC_DVEVnpl_C__G - Drosselklappensteller Startprüfung Verstärkerabgleich - Plausibilitätsfehler |
| 0x4E94 | DFES_DTCM_DFC_DWAPUEmax_C__G - Beltdrivecontrol Kurzschluss nach Plus |
| 0x4E95 | DFES_DTCM_DFC_DWAPUEmin_C__G - Beltdrivecontrol Kurzschluss nach Minus |
| 0x4E96 | DFES_DTCM_DFC_DWAPUEnpl_C__G - Beltdrivecontrol Unplausibel |
| 0x4E97 | DFES_DTCM_DFC_DWAPUEsig_C__G - Beltdrivecontrol Leitungsunterbrechung |
| 0x2089 | DFES_DTCM_DFC_ENWSEmax_C__G - Nockenwellenversteller Einlass - Kurzschluss nach Plus |
| 0x2088 | DFES_DTCM_DFC_ENWSEmin_C__G - Nockenwellenversteller Einlass - Kurzschluss nach Minus |
| 0x0010 | DFES_DTCM_DFC_ENWSEsig_C__G - Nockenwellenversteller Einlass - Leitungsunterbrechung |
| 0x0011 | DFES_DTCM_DFC_ENWSmin_C__G - Nockenwellensteuerung Einlass - Anschlagadaptionen außerhalb gültigem Bereich |
| 0x0012 | DFES_DTCM_DFC_ENWSnpl_C__G - Nockenwellensteuerung Einlass - Regelfehler, unplausible Position |
| 0x0262 | DFES_DTCM_DFC_EV1max_C__G - Einspritzventil Zylinder 1 - Kurzschluss nach Plus |
| 0x0261 | DFES_DTCM_DFC_EV1min_C__G - Einspritzventil Zylinder 1 - Kurzschluss nach Minus |
| 0x0201 | DFES_DTCM_DFC_EV1sig_C__G - Einspritzventil Zylinder 1 - Leitungsunterbrechung |
| 0x0268 | DFES_DTCM_DFC_EV2max_C__G - Einspritzventil Zylinder 2 - Kurzschluss nach Plus |
| 0x0267 | DFES_DTCM_DFC_EV2min_C__G - Einspritzventil Zylinder 2 - Kurzschluss nach Minus |
| 0x0203 | DFES_DTCM_DFC_EV2sig_C__G - Einspritzventil Zylinder 2 - Leitungsunterbrechung |
| 0x0271 | DFES_DTCM_DFC_EV3max_C__G - Einspritzventil Zylinder 3 - Kurzschluss nach Plus |
| 0x0270 | DFES_DTCM_DFC_EV3min_C__G - Einspritzventil Zylinder 3 - Kurzschluss nach Minus |
| 0x0204 | DFES_DTCM_DFC_EV3sig_C__G - Einspritzventil Zylinder 3 - Leitungsunterbrechung |
| 0x0265 | DFES_DTCM_DFC_EV4max_C__G - Einspritzventil Zylinder 4 - Kurzschluss nach Plus |
| 0x0264 | DFES_DTCM_DFC_EV4min_C__G - Einspritzventil Zylinder 4 - Kurzschluss nach Minus |
| 0x0202 | DFES_DTCM_DFC_EV4sig_C__G - Einspritzventil Zylinder 4 - Leitungsunterbrechung |
| 0x4E3A | DFES_DTCM_DFC_EpmCaSI1ErrSig_C__G - DFC for camshaft signal diagnosis - disturbed signal |
| 0x4E3B | DFES_DTCM_DFC_EpmCaSI1NoSig_C__G - DFC for camshaft signal diagnosis - no signal |
| 0x4E3C | DFES_DTCM_DFC_EpmCaSO1ErrSig_C__G - DFC for camshaft signal diagnosis - disturbed signal |
| 0x4E3D | DFES_DTCM_DFC_EpmCaSO1NoSig_C__G - DFC for camshaft signal diagnosis - no signal |
| 0x4E3E | DFES_DTCM_DFC_EpmCrSErrSig_C__G - DFC for crankshaft signal diagnose - disturbed signal |
| 0x4E3F | DFES_DTCM_DFC_EpmCrSNoSig_C__G - DFC for crankshaft signal diagnose - no signal |
| 0x2123 | DFES_DTCM_DFC_FP1Pmax_C__G - Pedalwertgeber 1 - Spannung oberhalb Max-Wert |
| 0x2122 | DFES_DTCM_DFC_FP1Pmin_C__G - Pedalwertgeber 1 - Spannung unterhalb Min-Wert |
| 0x2138 | DFES_DTCM_DFC_FP1Pnpl_C__G - Pedalwertgeber 1/2 Spannung - Gleichlauffehler zwischen PWG1 und PWG2 |
| 0x2128 | DFES_DTCM_DFC_FP2Pmax_C__G - Pedalwertgeber 2 - Spannung oberhalb Max-Wert |
| 0x2127 | DFES_DTCM_DFC_FP2Pmin_C__G - Pedalwertgeber 2 - Spannung unterhalb Min-Wert |
| 0x2120 | DFES_DTCM_DFC_FPPnpl_C__G - Pedalwertgeber 1 - PWG1 oder PWG2 fehlerhaft oder außerhalb der Toleranz |
| 0x4E98 | DFES_DTCM_DFC_FRAmax_C__G - Check of maximum for DFP_FRA |
| 0x4E99 | DFES_DTCM_DFC_FRAmin_C__G - Check of minimum for DFP_FRA |
| 0x4E9A | DFES_DTCM_DFC_FRAnpl_C__G - Plausibility check for DFP_FRA |
| 0x4E9B | DFES_DTCM_DFC_FRAsig_C__G - Signal check for DFP_FRA |
| 0x110E | DFES_DTCM_DFC_FRSTmax	interner Code (Service/Bandendetest) - System zu fett |
| 0x4E9C | DFES_DTCM_DFC_FSTPmax_C__G - Check of maximum for DFP_FSTP |
| 0x4E9D | DFES_DTCM_DFC_FSTPmin_C__G - Check of minimum for DFP_FSTP |
| 0x4E9E | DFES_DTCM_DFC_FSTPnpl_C__G - Plausibility check for DFP_FSTP |
| 0x4E9F | DFES_DTCM_DFC_FSTPsig_C__G - Signal check for DFP_FSTP |
| 0x4EA0 | DFES_DTCM_DFC_FSTSImax_C__G - Check of maximum for DFP_FSTSI |
| 0x4EA1 | DFES_DTCM_DFC_FSTSImin_C__G - Check of minimum for DFP_FSTSI |
| 0x4EA2 | DFES_DTCM_DFC_FSTSInpl_C__G - Plausibility check for DFP_FSTSI |
| 0x4EA3 | DFES_DTCM_DFC_FSTSIsig_C__G - Signal check for DFP_FSTSI |
| 0x4EA4 | DFES_DTCM_DFC_FSTmax_C__G - Check of maximum for DFP_FST |
| 0x4EA5 | DFES_DTCM_DFC_FSTmin_C__G - Check of minimum for DFP_FST |
| 0x4EA6 | DFES_DTCM_DFC_FSTnpl_C__G - Plausibility check for DFP_FST |
| 0x4EA7 | DFES_DTCM_DFC_FSTsig_C__G - Signal check for DFP_FST |
| 0x4EA8 | DFES_DTCM_DFC_HDRmax_C__G - Check of maximum for DFP_HDR |
| 0x4EA9 | DFES_DTCM_DFC_HDRmin_C__G - Check of minimum for DFP_HDR |
| 0x4EAA | DFES_DTCM_DFC_HDRnpl_C__G - Plausibilitycheck for DFP_HDR |
| 0x4EAB | DFES_DTCM_DFC_HDRsig_C__G - Signalcheck for DFP_HDR |
| 0x4EAC | DFES_DTCM_DFC_HFM2Emax_C__G - Check of maximum for DFP_HFM2E |
| 0x4EAD | DFES_DTCM_DFC_HFM2Emin_C__G - Check of minimum for DFP_HFM2E |
| 0x4EAE | DFES_DTCM_DFC_HFM2Enpl_C__G - Plausibilitycheck for DFP_HFM2E |
| 0x4EAF | DFES_DTCM_DFC_HFM2Esig_C__G - Signalcheck for DFP_HFM2E |
| 0x4EB0 | DFES_DTCM_DFC_HFM2Rmax_C__G - Check of maximum for DFP_HFM2R |
| 0x4EB1 | DFES_DTCM_DFC_HFM2Rmin_C__G - Check of minimum for DFP_HFM2R |
| 0x4EB2 | DFES_DTCM_DFC_HFM2Rnpl_C__G - Plausibility check for DFP_HFM2R |
| 0x4EB3 | DFES_DTCM_DFC_HFM2Rsig_C__G - Signal check for DFP_HFM2R |
| 0x4EB4 | DFES_DTCM_DFC_HFM2max_C__G - Check of maximum for DFP_HFM2 |
| 0x4EB5 | DFES_DTCM_DFC_HFM2min_C__G - Check of minimum for DFP_HFM2 |
| 0x4EB6 | DFES_DTCM_DFC_HFM2npl_C__G - Plausibility check for DFP_HFM2 |
| 0x4EB7 | DFES_DTCM_DFC_HFM2sig_C__G - Signal check for DFP_HFM2 |
| 0x4EB8 | DFES_DTCM_DFC_HFMEmax_C__G - Check of maximum for DFP_HFME |
| 0x4EB9 | DFES_DTCM_DFC_HFMEmin_C__G - Check of minimum for DFP_HFME |
| 0x4EBA | DFES_DTCM_DFC_HFMEnpl_C__G - Plausibilitycheck for DFP_HFME |
| 0x4EBB | DFES_DTCM_DFC_HFMEsig_C__G - Signalcheck for DFP_HFME |
| 0x4EBC | DFES_DTCM_DFC_HFMRmax_C__G - Check of maximum for DFP_HFMR |
| 0x4EBD | DFES_DTCM_DFC_HFMRmin_C__G - Check of minimum for DFP_HFMR |
| 0x4EBE | DFES_DTCM_DFC_HFMRnpl_C__G - Plausibility check for DFP_HFMR |
| 0x4EBF | DFES_DTCM_DFC_HFMRsig_C__G - Signal check for DFP_HFMR |
| 0x4EC0 | DFES_DTCM_DFC_HFMmax_C__G - Check of maximum for DFP_HFM |
| 0x4EC1 | DFES_DTCM_DFC_HFMmin_C__G - Check of minimum for DFP_HFM |
| 0x4EC2 | DFES_DTCM_DFC_HFMnpl_C__G - Plausibility check for DFP_HFM |
| 0x4EC3 | DFES_DTCM_DFC_HFMsig_C__G - Signal check for DFP_HFM |
| 0x4EC4 | DFES_DTCM_DFC_HNOHKEmax_C__G - Check of maximum for DFP_HNOHKE |
| 0x4EC5 | DFES_DTCM_DFC_HNOHKEmin_C__G - Check of minimum for DFP_HNOHKE |
| 0x4EC6 | DFES_DTCM_DFC_HNOHKEnpl_C__G - Plausibilitycheck for DFP_HNOHKE |
| 0x4EC7 | DFES_DTCM_DFC_HNOHKEsig_C__G - Signalcheck for DFP_HNOHKE |
| 0x4EC8 | DFES_DTCM_DFC_HNOHKmax_C__G - Check of maximum for DFP_HNOHK |
| 0x4EC9 | DFES_DTCM_DFC_HNOHKmin_C__G - Check of minimum for DFP_HNOHK |
| 0x4ECA | DFES_DTCM_DFC_HNOHKnpl_C__G - Plausibilitycheck for DFP_HNOHK |
| 0x4ECB | DFES_DTCM_DFC_HNOHKsig_C__G - Signalcheck for DFP_HNOHK |
| 0x4ECC | DFES_DTCM_DFC_HSHEmax_C__G - Check of maximum for DFP_HSHE |
| 0x4ECD | DFES_DTCM_DFC_HSHEmin_C__G - Check of minimum for DFP_HSHE |
| 0x4ECE | DFES_DTCM_DFC_HSHEnpl_C__G - Plausibility check for DFP_HSHE |
| 0x4ECF | DFES_DTCM_DFC_HSHEsig_C__G - Signal check for DFP_HSHE |
| 0x0038 | DFES_DTCM_DFC_HSHmax_C__G - Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Kurzschluss nach Plus |
| 0x0037 | DFES_DTCM_DFC_HSHmin_C__G - Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Kurzschluss nach Minus |
| 0x0141 | DFES_DTCM_DFC_HSHnpl_C__G - Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Sondenheizung defekt (Innenwiderstand) |
| 0x0036 | DFES_DTCM_DFC_HSHsig_C__G - Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Leitungsunterbrechung |
| 0x0032 | DFES_DTCM_DFC_HSVEmax_C__G - Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Kurzschluss nach Plus |
| 0x0031 | DFES_DTCM_DFC_HSVEmin_C__G - Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Kurzschluss nach Minus |
| 0x0030 | DFES_DTCM_DFC_HSVEsig_C__G - Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Leitungsunterbrechung |
| 0x1100 | DFES_DTCM_DFC_HSVSAnpl_C__G - Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x0135 | DFES_DTCM_DFC_HSVnpl_C__G - Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Sondenheizung zu langsam |
| 0x4ED0 | DFES_DTCM_DFC_ICLSUmax_C__G - Check of maximum for DFP_ICLSU |
| 0x4ED1 | DFES_DTCM_DFC_ICLSUmin_C__G - Check of minimum for DFP_ICLSU |
| 0x4ED2 | DFES_DTCM_DFC_ICLSUnpl_C__G - Plausibilitycheck for DFP_ICLSU |
| 0x4ED3 | DFES_DTCM_DFC_ICLSUsig_C__G - Signalcheck for DFP_ICLSU |
| 0x0420 | DFES_DTCM_DFC_KATmin_C__G - Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0328 | DFES_DTCM_DFC_KS1max_C__G - Klopfsensor 1 - Motor mechanisch zu laut oder KS außerhalb Toleranz (Empfindlichkeit) |
| 0x0327 | DFES_DTCM_DFC_KS1min_C__G - Klopfsensor 1 - elektrischer Fehler KS (Wackelkontakt) oder KS locker |
| 0x1328 | DFES_DTCM_DFC_KS2max_C__G - Klopfsensor 2 - Motor mechanisch zu laut oder KS außerhalb Toleranz (Empfindlichkeit) |
| 0x1327 | DFES_DTCM_DFC_KS2min_C__G - Klopfsensor 2 - elektrischer Fehler KS (Wackelkontakt) oder KS locker |
| 0x0704 | DFES_DTCM_DFC_KUPPLsig_C__G - Eingangssignal Kupplungsschalter - Signal inaktiv |
| 0x2270 | DFES_DTCM_DFC_LASHmax_C__G - Lambdasonde (Bank 1, nach Katalysator) - Signal überschreitet Schwellwert nicht |
| 0x2271 | DFES_DTCM_DFC_LASHmin_C__G - Lambdasonde (Bank 1, nach Katalysator) - Signal unterschreitet Schwellwert nicht |
| 0x1130 | DFES_DTCM_DFC_LASHnpl_C__G - Lambdasonde (Bank 1, nach Katalysator) - Sonde dynamisch zu langsam |
| 0x0139 | DFES_DTCM_DFC_LASHsig_C__G - Lambdasonde (Bank 1, nach Katalysator) - Schubspannungsschwelle nicht erreicht oder Signal bei Vollast kleiner Schwelle |
| 0x4ED4 | DFES_DTCM_DFC_LATPmax_C__G - Check of maximum for DFP_LATP |
| 0x4ED5 | DFES_DTCM_DFC_LATPmin_C__G - Check of minimum for DFP_LATP |
| 0x4ED6 | DFES_DTCM_DFC_LATPnpl_C__G - Plausibility check for DFP_LATP |
| 0x4ED7 | DFES_DTCM_DFC_LATPsig_C__G - Signal check for DFP_LATP |
| 0x4ED8 | DFES_DTCM_DFC_LATVmax_C__G - Check of maximum for DFP_LATV |
| 0x4ED9 | DFES_DTCM_DFC_LATVmin_C__G - Check of minimum for DFP_LATV |
| 0x4EDA | DFES_DTCM_DFC_LATVnpl_C__G - Plausibility check for DFP_LATV |
| 0x4EDB | DFES_DTCM_DFC_LATVsig_C__G - Signal check for DFP_LATV |
| 0x1204 | DFES_DTCM_DFC_LAVHmax_C__G - Lambdasonde (Bank 1, nach Katalysator) Volllastprüfung - Signal bei Volllast kleiner Schwelle |
| 0x4EDC | DFES_DTCM_DFC_LDEmax_C__G - Wastegate-Steuerventil Kurzschluss nach Plus |
| 0x4EDD | DFES_DTCM_DFC_LDEmin_C__G - Wastegate-Steuerventil Kurzschluss nach Minus |
| 0x4EDE | DFES_DTCM_DFC_LDEnpl_C__G - Wastegate-Steuerventil Unplausibel |
| 0x4EDF | DFES_DTCM_DFC_LDEsig_C__G - Wastegate-Steuerventil Leitungsunterbrechung |
| 0x4EE0 | DFES_DTCM_DFC_LDRmax_C__G - Check of maximum for DFP_LDR |
| 0x4EE1 | DFES_DTCM_DFC_LDRmin_C__G - Check of minimum for DFP_LDR |
| 0x4EE2 | DFES_DTCM_DFC_LDRnpl_C__G - Plausibility check for DFP_LDR |
| 0x4EE3 | DFES_DTCM_DFC_LDRsig_C__G - Signal check for DFP_LDR |
| 0x4EE4 | DFES_DTCM_DFC_LDUVmax_C__G - Steuerventil für Umluftventil Kurzschluss nach Plus |
| 0x4EE5 | DFES_DTCM_DFC_LDUVmin_C__G - Steuerventil für Umluftventil Kurzschluss nach Minus |
| 0x4EE6 | DFES_DTCM_DFC_LDUVnpl_C__G - Steuerventil für Umluftventil Unplausibel |
| 0x4EE7 | DFES_DTCM_DFC_LDUVsig_C__G - Steuerventil für Umluftventil Leitungsunterbrechung |
| 0x4EE8 | DFES_DTCM_DFC_LKVDKmax_C__G - Check of maximum for DFP_LKVDK |
| 0x4EE9 | DFES_DTCM_DFC_LKVDKmin_C__G - Check of minimum for DFP_LKVDK |
| 0x4EEA | DFES_DTCM_DFC_LKVDKnpl_C__G - Plausibilitycheck for DFP_LKVDK |
| 0x4EEB | DFES_DTCM_DFC_LKVDKsig_C__G - Signalcheck for DFP_LKVDK |
| 0x4EEC | DFES_DTCM_DFC_LLRHmax_C__G - Check of maximum for DFP_LLRH |
| 0x4EED | DFES_DTCM_DFC_LLRHmin_C__G - Check of minimum for DFP_LLRH |
| 0x4EEE | DFES_DTCM_DFC_LLRHnpl_C__G - Plausibilitycheck for DFP_LLRH |
| 0x4EEF | DFES_DTCM_DFC_LLRHsig_C__G - Signalcheck for DFP_LLRH |
| 0x4EF0 | DFES_DTCM_DFC_LLRMmax_C__G - Check of maximum for DFP_LLRM |
| 0x4EF1 | DFES_DTCM_DFC_LLRMmin_C__G - Check of minimum for DFP_LLRM |
| 0x4EF2 | DFES_DTCM_DFC_LLRMnpl_C__G - Plausibilitycheck for DFP_LLRM |
| 0x4EF3 | DFES_DTCM_DFC_LLRMsig_C__G - Signalcheck for DFP_LLRM |
| 0x0507 | DFES_DTCM_DFC_LLRmax_C__G - Leerlaufregelsystem - LL-Steller Öffnung zu groß oder Leckluft |
| 0x0506 | DFES_DTCM_DFC_LLRmin_C__G - Leerlaufregelsystem - LL-Steller Öffnung zu gering |
| 0x0103 | DFES_DTCM_DFC_LMmax_C__G - Luftmassen- oder Luftmengendurchsatz 1 - Kurzschluss nach Plus |
| 0x0102 | DFES_DTCM_DFC_LMmin_C__G - Luftmassen- oder Luftmengendurchsatz 1 - Kurzschluss nach Minus |
| 0x0138 | DFES_DTCM_DFC_LSHmax_C__G - Lambdasonde (Bank 1, nach Katalysator) - Kurzschluss nach Plus |
| 0x0137 | DFES_DTCM_DFC_LSHmin_C__G - Lambdasonde (Bank 1, nach Katalysator) - Adernschlus oder CSD (Referenzluft vergiftet) |
| 0x0136 | DFES_DTCM_DFC_LSHnpl_C__G - Lambdasonde (Bank 1, nach Katalysator) - Heiztakteinkopplung auf Signal |
| 0x0140 | DFES_DTCM_DFC_LSHsig_C__G - Lambdasonde (Bank 1, nach Katalysator) - Leitungsunterbrechung |
| 0x4EF4 | DFES_DTCM_DFC_LSUIAmax_C__G - Check of maximum for DFP_LSUIA |
| 0x4EF5 | DFES_DTCM_DFC_LSUIAmin_C__G - Check of minimum for DFP_LSUIA |
| 0x4EF6 | DFES_DTCM_DFC_LSUIAnpl_C__G - Plausibilitycheck for DFP_LSUIA |
| 0x4EF7 | DFES_DTCM_DFC_LSUIAsig_C__G - Signalcheck for DFP_LSUIA |
| 0x4EF8 | DFES_DTCM_DFC_LSUUNmax_C__G - Check of maximum for DFP_LSUUN |
| 0x4EF9 | DFES_DTCM_DFC_LSUUNmin_C__G - Check of minimum for DFP_LSUUN |
| 0x4EFA | DFES_DTCM_DFC_LSUUNnpl_C__G - Plausibilitycheck for DFP_LSUUN |
| 0x4EFB | DFES_DTCM_DFC_LSUUNsig_C__G - Signalcheck for DFP_LSUUN |
| 0x4EFC | DFES_DTCM_DFC_LSUVMmax_C__G - Check of maximum for DFP_LSUVM |
| 0x4EFD | DFES_DTCM_DFC_LSUVMmin_C__G - Check of minimum for DFP_LSUVM |
| 0x4EFE | DFES_DTCM_DFC_LSUVMnpl_C__G - Plausibilitycheck for DFP_LSUVM |
| 0x4EFF | DFES_DTCM_DFC_LSUVMsig_C__G - Signalcheck for DFP_LSUVM |
| 0x1168 | DFES_DTCM_DFC_LSVmax_C__G - Gemischfeinregelung (Bank 1) - Regler Korrekturwert über Schwellwert |
| 0x0133 | DFES_DTCM_DFC_LSVmin_C__G - Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion |
| 0x0130 | DFES_DTCM_DFC_LSVnpl_C__G - Lambdasonde (Bank 1, vor Katalysator) - Signal unplausibel |
| 0x2231 | DFES_DTCM_DFC_LSVsig_C__G - Lambdasonde (Bank 1, vor Katalysator) - Nebenschluss Signalpfad mit Heizer |
| 0x4F00 | DFES_DTCM_DFC_LUEAmax_C__G - Check of maximum for DFP_LUEA |
| 0x4F01 | DFES_DTCM_DFC_LUEAmin_C__G - Check of minimum for DFP_LUEA |
| 0x4F02 | DFES_DTCM_DFC_LUEAnpl_C__G - Plausibilitycheck for DFP_LUEA |
| 0x4F03 | DFES_DTCM_DFC_LUEAsig_C__G - Signalcheck for DFP_LUEA |
| 0x4F04 | DFES_DTCM_DFC_LUEBmax_C__G - Check of maximum for DFP_LUEB |
| 0x4F05 | DFES_DTCM_DFC_LUEBmin_C__G - Check of minimum for DFP_LUEB |
| 0x4F06 | DFES_DTCM_DFC_LUEBnpl_C__G - Plausibilitycheck for DFP_LUEB |
| 0x4F07 | DFES_DTCM_DFC_LUEBsig_C__G - Signalcheck for DFP_LUEB |
| 0x4F08 | DFES_DTCM_DFC_LUES1Emax_C__G - Lüftersteuerung 1 Endstufe - Kurzschluss nach Plus |
| 0x4F09 | DFES_DTCM_DFC_LUES1Emin_C__G - Lüftersteuerung 1 Endstufe - Kurzschluss nach Minus |
| 0x4F0A | DFES_DTCM_DFC_LUES1Enpl_C__G - Lüftersteuerung 1 Endstufe - Signal unplausibel |
| 0x4F0B | DFES_DTCM_DFC_LUES1Esig_C__G - Lüftersteuerung 1 Endstufe - Leitungsunterbrechung |
| 0x4F0C | DFES_DTCM_DFC_LUES2Emax_C__G - Lüftersteuerung 2 Endstufe - Kurzschluss nach Plus |
| 0x4F0D | DFES_DTCM_DFC_LUES2Emin_C__G - Lüftersteuerung 2 Endstufe - Kurzschluss nach Minus |
| 0x4F0E | DFES_DTCM_DFC_LUES2Enpl_C__G - Lüftersteuerung 2 Endstufe - Signal unplausibel |
| 0x4F0F | DFES_DTCM_DFC_LUES2Esig_C__G - Lüftersteuerung 2 Endstufe - Leitungsunterbrechung |
| 0x4F10 | DFES_DTCM_DFC_LZSRmax_C__G - Check of maximum for DFP_LZSR |
| 0x4F11 | DFES_DTCM_DFC_LZSRmin_C__G - Check of minimum for DFP_LZSR |
| 0x4F12 | DFES_DTCM_DFC_LZSRnpl_C__G - Plausibility check for DFP_LZSR |
| 0x4F13 | DFES_DTCM_DFC_LZSRsig_C__G - Signal check for DFP_LZSR |
| 0x0301 | DFES_DTCM_DFC_MD00max_C__G - Verbrennungsaussetzer erkannt - Zylinder 1; katschädigende Aussetzer |
| 0x0303 | DFES_DTCM_DFC_MD01max_C__G - Verbrennungsaussetzer erkannt - Zylinder 3; katschädigende Aussetzer |
| 0x0304 | DFES_DTCM_DFC_MD02max_C__G - Verbrennungsaussetzer erkannt - Zylinder 4; katschädigende Aussetzer |
| 0x0302 | DFES_DTCM_DFC_MD03max_C__G - Verbrennungsaussetzer erkannt - Zylinder 2; katschädigende Aussetzer |
| 0x1605 | DFES_DTCM_DFC_MDBmax_C__G - Sicherheitskonzept Momentbegrenzung Ebene 1 - maximal zulässiges Sollmoment wird dauerhaft überschritten |
| 0x4F14 | DFES_DTCM_DFC_MDSCHmax_C__G - Check of maximum for DFP_MDSCH |
| 0x4F15 | DFES_DTCM_DFC_MDSCHmin_C__G - Check of minimum for DFP_MDSCH |
| 0x4F16 | DFES_DTCM_DFC_MDSCHnpl_C__G - Plausibility check for DFP_MDSCH |
| 0x4F17 | DFES_DTCM_DFC_MDSCHsig_C__G - Signal check for DFP_MDSCH |
| 0x0300 | DFES_DTCM_DFC_MDmax_C__G - Verbrennungsaussetzer erkannt - mehrere Zylinder; katschädigende Aussetzer Summe |
| 0x4F18 | DFES_DTCM_DFC_MSVEmax_C__G - Check of maximum for DFP_MSVE |
| 0x4F19 | DFES_DTCM_DFC_MSVEmin_C__G - Check of minimum for DFP_MSVE |
| 0x4F1A | DFES_DTCM_DFC_MSVEnpl_C__G - Plausibilitycheck for DFP_MSVE |
| 0x4F1B | DFES_DTCM_DFC_MSVEsig_C__G - Signalcheck for DFP_MSVE |
| 0x4F1C | DFES_DTCM_DFC_NOHKmax_C__G - Check of maximum for DFP_NOHK |
| 0x4F1D | DFES_DTCM_DFC_NOHKmin_C__G - Check of minimum for DFP_NOHK |
| 0x4F1E | DFES_DTCM_DFC_NOHKnpl_C__G - Plausibilitycheck for DFP_NOHK |
| 0x4F1F | DFES_DTCM_DFC_NOHKsig_C__G - Signalcheck for DFP_NOHK |
| 0x4F20 | DFES_DTCM_DFC_NWKWmax_C__G - Check of maximum for DFP_NWKW |
| 0x4F21 | DFES_DTCM_DFC_NWKWmin_C__G - Check of minimum for DFP_NWKW |
| 0x4F22 | DFES_DTCM_DFC_NWKWnpl_C__G - Plausibilitycheck for DFP_NWKW |
| 0x4F23 | DFES_DTCM_DFC_NWKWsig_C__G - Signalcheck for DFP_NWKW |
| 0x4F24 | DFES_DTCM_DFC_NWVPA2max_C__G - Check of maximum for DFP_NWVPA2 |
| 0x4F25 | DFES_DTCM_DFC_NWVPA2min_C__G - Check of minimum for DFP_NWVPA2 |
| 0x4F26 | DFES_DTCM_DFC_NWVPA2npl_C__G - Plausibility check for DFP_NWVPA2 |
| 0x4F27 | DFES_DTCM_DFC_NWVPA2sig_C__G - Signal check for DFP_NWVPA2 |
| 0x4F28 | DFES_DTCM_DFC_NWVPAmax_C__G - Check of maximum for DFP_NWVPA |
| 0x4F29 | DFES_DTCM_DFC_NWVPAmin_C__G - Check of minimum for DFP_NWVPA |
| 0x4F2A | DFES_DTCM_DFC_NWVPAnpl_C__G - Plausibility check for DFP_NWVPA |
| 0x4F2B | DFES_DTCM_DFC_NWVPAsig_C__G - Signal check for DFP_NWVPA |
| 0x4F2C | DFES_DTCM_DFC_NWVPE2max_C__G - Check of maximum for DFP_NWVPE2 |
| 0x4F2D | DFES_DTCM_DFC_NWVPE2min_C__G - Check of minimum for DFP_NWVPE2 |
| 0x4F2E | DFES_DTCM_DFC_NWVPE2npl_C__G - Plausibility check for DFP_NWVPE2 |
| 0x4F2F | DFES_DTCM_DFC_NWVPE2sig_C__G - Signal check for DFP_NWVPE2 |
| 0x4F30 | DFES_DTCM_DFC_NWVPEmax_C__G - Check of maximum for DFP_NWVPE |
| 0x4F31 | DFES_DTCM_DFC_NWVPEmin_C__G - Check of minimum for DFP_NWVPE |
| 0x4F32 | DFES_DTCM_DFC_NWVPEnpl_C__G - Plausibility check for DFP_NWVPE |
| 0x4F33 | DFES_DTCM_DFC_NWVPEsig_C__G - Signal check for DFP_NWVPE |
| 0x4F34 | DFES_DTCM_DFC_ORA2max_C__G - Check of maximum for DFP_ORA2 |
| 0x4F35 | DFES_DTCM_DFC_ORA2min_C__G - Check of minimum for DFP_ORA2 |
| 0x4F36 | DFES_DTCM_DFC_ORA2npl_C__G - Plausibility check for DFP_ORA2 |
| 0x4F37 | DFES_DTCM_DFC_ORA2sig_C__G - Signal check for DFP_ORA2 |
| 0x4F38 | DFES_DTCM_DFC_ORAmax_C__G - Check of maximum for DFP_ORA |
| 0x4F39 | DFES_DTCM_DFC_ORAmin_C__G - Check of minimum for DFP_ORA |
| 0x4F3A | DFES_DTCM_DFC_ORAnpl_C__G - Plausibility check for DFP_ORA |
| 0x4F3B | DFES_DTCM_DFC_ORAsig_C__G - Signal check for DFP_ORA |
| 0x4F3C | DFES_DTCM_DFC_PSREmax_C__G - Saugrohrdrucksensor Kurzschluss nach Plus |
| 0x4F3D | DFES_DTCM_DFC_PSREmin_C__G - Saugrohrdrucksensor Kurzschluss nach Minus |
| 0x4F3E | DFES_DTCM_DFC_PSREnpl_C__G - Saugrohrdrucksensor Unplausibel |
| 0x4F3F | DFES_DTCM_DFC_PSREsig_C__G - Saugrohrdrucksensor Leitungsunterbrechung |
| 0x4F40 | DFES_DTCM_DFC_PSRRmax_C__G - Check of maximum for DFP_PSRR |
| 0x4F41 | DFES_DTCM_DFC_PSRRmin_C__G - Check of minimum for DFP_PSRR |
| 0x4F42 | DFES_DTCM_DFC_PSRRnpl_C__G - Plausibility check for DFP_PSRR |
| 0x4F43 | DFES_DTCM_DFC_PSRRsig_C__G - Signal check for DFP_PSRR |
| 0x4F44 | DFES_DTCM_DFC_PSRmax_C__G - Check of maximum for DFP_PSR |
| 0x4F45 | DFES_DTCM_DFC_PSRmin_C__G - Check of minimum for DFP_PSR |
| 0x4F46 | DFES_DTCM_DFC_PSRnpl_C__G - Plausibility check for DFP_PSR |
| 0x4F47 | DFES_DTCM_DFC_PSRsig_C__G - Signal check for DFP_PSR |
| 0x4F48 | DFES_DTCM_DFC_PUEmax_C__G - Check of maximum for DFP_PUE |
| 0x4F49 | DFES_DTCM_DFC_PUEmin_C__G - Check of minimum for DFP_PUE |
| 0x4F4A | DFES_DTCM_DFC_PUEnpl_C__G - Plausibility check for DFP_PUE |
| 0x4F4B | DFES_DTCM_DFC_PUEsig_C__G - Signal check for DFP_PUE |
| 0x4F4C | DFES_DTCM_DFC_PURmax_C__G - Check of maximum for DFP_PUR |
| 0x4F4D | DFES_DTCM_DFC_PURmin_C__G - Check of minimum for DFP_PUR |
| 0x4F4E | DFES_DTCM_DFC_PURnpl_C__G - Plausibility check for DFP_PUR |
| 0x4F4F | DFES_DTCM_DFC_PURsig_C__G - Signal check for DFP_PUR |
| 0x4F50 | DFES_DTCM_DFC_PUmax_C__G - Check of maximum for DFP_PU |
| 0x4F51 | DFES_DTCM_DFC_PUmin_C__G - Check of minimum for DFP_PU |
| 0x4F52 | DFES_DTCM_DFC_PUnpl_C__G - Plausibility check for DFP_PU |
| 0x4F53 | DFES_DTCM_DFC_PUsig_C__G - Signal check for DFP_PU |
| 0x4F54 | DFES_DTCM_DFC_PVDEmax_C__G - Ladedrucksensor Kurzschluss nach Plus |
| 0x4F55 | DFES_DTCM_DFC_PVDEmin_C__G - Ladedrucksensor Kurzschluss nach Minus |
| 0x4F56 | DFES_DTCM_DFC_PVDEnpl_C__G - Ladedrucksensor Unplausibel |
| 0x4F57 | DFES_DTCM_DFC_PVDEsig_C__G - Ladedrucksensor Leitungsunterbrechung |
| 0x4F58 | DFES_DTCM_DFC_PVDRmax_C__G - Check of maximum for DFP_PVDR |
| 0x4F59 | DFES_DTCM_DFC_PVDRmin_C__G - Check of minimum for DFP_PVDR |
| 0x4F5A | DFES_DTCM_DFC_PVDRnpl_C__G - Plausibility check for DFP_PVDR |
| 0x4F5B | DFES_DTCM_DFC_PVDRsig_C__G - Signal check for DFP_PVDR |
| 0x4F5C | DFES_DTCM_DFC_PVDmax_C__G - Check of maximum for DFP_PVD |
| 0x4F5D | DFES_DTCM_DFC_PVDmin_C__G - Check of minimum for DFP_PVD |
| 0x4F5E | DFES_DTCM_DFC_PVDnpl_C__G - Plausibility check for DFP_PVD |
| 0x4F5F | DFES_DTCM_DFC_PVDsig_C__G - Signal check for DFP_PVD |
| 0x4F60 | DFES_DTCM_DFC_SALSUmax_C__G - Check of maximum for DFP_SALSU |
| 0x4F61 | DFES_DTCM_DFC_SALSUmin_C__G - Check of minimum for DFP_SALSU |
| 0x4F62 | DFES_DTCM_DFC_SALSUnpl_C__G - Plausibilitycheck for DFP_SALSU |
| 0x4F63 | DFES_DTCM_DFC_SALSUsig_C__G - Signalcheck for DFP_SALSU |
| 0x4F64 | DFES_DTCM_DFC_SGEEPmax_C__G - Check of maximum for DFP_SGEEP |
| 0x4F65 | DFES_DTCM_DFC_SGEEPmin_C__G - Check of minimum for DFP_SGEEP |
| 0x4F66 | DFES_DTCM_DFC_SGEEPnpl_C__G - Plausibilitycheck for DFP_SGEEP |
| 0x4F67 | DFES_DTCM_DFC_SGEEPsig_C__G - Signalcheck for DFP_SGEEP |
| 0x1414 | DFES_DTCM_DFC_SLPEmax_C__G - Sekundärluftpumpenrelais - Kurzschluss nach Plus |
| 0x1413 | DFES_DTCM_DFC_SLPEmin_C__G - Sekundärluftpumpenrelais - Kurzschluss nach Minus |
| 0x0418 | DFES_DTCM_DFC_SLPEsig_C__G - Sekundärluftpumpenrelais - Leitungsunterbrechung |
| 0x0491 | DFES_DTCM_DFC_SLSmin_C__G - Sekundärluftsystem (Bank 1) - Durchsatz zu gering |
| 0x4F68 | DFES_DTCM_DFC_SLVEmax_C__G - Check of maximum for DFP_SLVE |
| 0x4F69 | DFES_DTCM_DFC_SLVEmin_C__G - Check of minimum for DFP_SLVE |
| 0x4F6A | DFES_DTCM_DFC_SLVEnpl_C__G - Plausibilitycheck for DFP_SLVE |
| 0x4F6B | DFES_DTCM_DFC_SLVEsig_C__G - Signalcheck for DFP_SLVE |
| 0x4F6C | DFES_DTCM_DFC_SLVmax_C__G - Check of maximum for DFP_SLV |
| 0x4F6D | DFES_DTCM_DFC_SLVmin_C__G - Check of minimum for DFP_SLV |
| 0x4F6E | DFES_DTCM_DFC_SLVnpl_C__G - Plausibilitycheck for DFP_SLV |
| 0x4F6F | DFES_DTCM_DFC_SLVsig_C__G - Signalcheck for DFP_SLV |
| 0x4F70 | DFES_DTCM_DFC_STAEmax_C__G - Check of maximum for DFP_STAE |
| 0x4F71 | DFES_DTCM_DFC_STAEmin_C__G - Check of minimum for DFP_STAE |
| 0x4F72 | DFES_DTCM_DFC_STAEnpl_C__G - Plausibility check for DFP_STAE |
| 0x4F73 | DFES_DTCM_DFC_STAEsig_C__G - Signal check for DFP_STAE |
| 0x0512 | DFES_DTCM_DFC_STAsig_C__G - Startautomatik - Fehler bei Ansteuerung des Starters |
| 0x1650 | DFES_DTCM_DFC_STSsig_C__G - Start in laufendem Motor |
| 0x4F74 | DFES_DTCM_DFC_SV_DVCVEmax_C__G - Kraftstoffdruck-Steuerventil Kurzschluss nach Plus |
| 0x4F75 | DFES_DTCM_DFC_SV_DVCVEmin_C__G - Kraftstoffdruck-Steuerventil Kurzschluss nach Plus |
| 0x4F76 | DFES_DTCM_DFC_SV_DVCVEnpl_C__G - Kraftstoffdruck-Steuerventil Unplausibel |
| 0x4F77 | DFES_DTCM_DFC_SV_DVCVEsig_C__G - Kraftstoffdruck-Steuerventil Leitungsunterbrechung |
| 0x1518 | DFES_DTCM_DFC_SWEmax_C__G - Schlechtwegstreckenerkennung - Raddrehzahl zu hoch |
| 0x1517 | DFES_DTCM_DFC_SWEsig_C__G - Schlechtwegstreckenerkennung - kein Raddrehzahlsignal erhalten |
| 0x4F78 | DFES_DTCM_DFC_SWReset_0_C__G - Visibility of SoftwareResets in DSM |
| 0x4F79 | DFES_DTCM_DFC_TAEmax_C__G - Check of maximum for DFP_TAE |
| 0x4F7A | DFES_DTCM_DFC_TAEmin_C__G - Check of minimum for DFP_TAE |
| 0x4F7B | DFES_DTCM_DFC_TAEnpl_C__G - Plausibility check for DFP_TAE |
| 0x4F7C | DFES_DTCM_DFC_TAEsig_C__G - Signal check for DFP_TAE |
| 0x4F7D | DFES_DTCM_DFC_TANKLmax_C__G - Check of maximum for DFP_TANKL |
| 0x4F7E | DFES_DTCM_DFC_TANKLmin_C__G - Check of minimum for DFP_TANKL |
| 0x4F7F | DFES_DTCM_DFC_TANKLnpl_C__G - Plausibility check for DFP_TANKL |
| 0x4F80 | DFES_DTCM_DFC_TANKLsig_C__G - Signal check for DFP_TANKL |
| 0x4F81 | DFES_DTCM_DFC_TARmax_C__G - Check of maximum for DFP_TAR |
| 0x4F82 | DFES_DTCM_DFC_TARmin_C__G - Check of minimum for DFP_TAR |
| 0x4F83 | DFES_DTCM_DFC_TARnpl_C__G - Plausibility check for DFP_TAR |
| 0x4F84 | DFES_DTCM_DFC_TARsig_C__G - Signal check for DFP_TAR |
| 0x4F85 | DFES_DTCM_DFC_TASRmax_C__G - Check of maximum for DFP_TASR |
| 0x4F86 | DFES_DTCM_DFC_TASRmin_C__G - Check of minimum for DFP_TASR |
| 0x4F87 | DFES_DTCM_DFC_TASRnpl_C__G - Plausibility check for DFP_TASR |
| 0x4F88 | DFES_DTCM_DFC_TASRsig_C__G - Signal check for DFP_TASR |
| 0x4F89 | DFES_DTCM_DFC_TAVDKmax_C__G - Check of maximum for DFP_TAVDK |
| 0x4F8A | DFES_DTCM_DFC_TAVDKmin_C__G - Check of minimum for DFP_TAVDK |
| 0x4F8B | DFES_DTCM_DFC_TAVDKnpl_C__G - Plausibility check for DFP_TAVDK |
| 0x4F8C | DFES_DTCM_DFC_TAVDKsig_C__G - Signal check for DFP_TAVDK |
| 0x0113 | DFES_DTCM_DFC_TAmax_C__G - Ansauglufttemperaturfühler 1 - Kurzschluss nach Minus |
| 0x0112 | DFES_DTCM_DFC_TAmin_C__G - Ansauglufttemperaturfühler 1 - Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x0441 | DFES_DTCM_DFC_TESmin_C__G - Tankentlüftungssystem - fehlerhafter Durchfluss |
| 0x0443 | DFES_DTCM_DFC_TEVEmax_C__G - Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Kurzschluss nach Plus |
| 0x0445 | DFES_DTCM_DFC_TEVEmin_C__G - Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Kurzschluss nach Minus |
| 0x0444 | DFES_DTCM_DFC_TEVEsig_C__G - Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Leitungsunterbrechung |
| 0x4F8D | DFES_DTCM_DFC_THMmax_C__G - Check of maximum for DFP_THM |
| 0x4F8E | DFES_DTCM_DFC_THMmin_C__G - Check of minimum for DFP_THM |
| 0x4F8F | DFES_DTCM_DFC_THMnpl_C__G - Plausibility check for DFP_THM |
| 0x4F90 | DFES_DTCM_DFC_THMsig_C__G - Signal check for DFP_THM |
| 0x4F91 | DFES_DTCM_DFC_TLDTEVmax_C__G - Check of maximum for DFP_TLDTEV |
| 0x4F92 | DFES_DTCM_DFC_TLDTEVmin_C__G - Check of minimum for DFP_TLDTEV |
| 0x4F93 | DFES_DTCM_DFC_TLDTEVnpl_C__G - Plausibility check for DFP_TLDTEV |
| 0x4F94 | DFES_DTCM_DFC_TLDTEVsig_C__G - Signal check for DFP_TLDTEV |
| 0x4F95 | DFES_DTCM_DFC_TMEmax_C__G - Check of maximum for DFP_TME |
| 0x4F96 | DFES_DTCM_DFC_TMEmin_C__G - Check of minimum for DFP_TME |
| 0x4F97 | DFES_DTCM_DFC_TMEnpl_C__G - Plausibility check for DFP_TME |
| 0x4F98 | DFES_DTCM_DFC_TMEsig_C__G - Signal check for DFP_TME |
| 0x4F99 | DFES_DTCM_DFC_TMKImax_C__G - Check of maximum for DFP_TMKI |
| 0x4F9A | DFES_DTCM_DFC_TMKImin_C__G - Check of minimum for DFP_TMKI |
| 0x4F9B | DFES_DTCM_DFC_TMKInpl_C__G - Plausibilitycheck for DFP_TMKI |
| 0x4F9C | DFES_DTCM_DFC_TMKIsig_C__G - Signalcheck for DFP_TMKI |
| 0x4F9D | DFES_DTCM_DFC_TMPmax_C__G - Check of maximum for DFP_TMP |
| 0x4F9E | DFES_DTCM_DFC_TMPmin_C__G - Check of minimum for DFP_TMP |
| 0x4F9F | DFES_DTCM_DFC_TMPnpl_C__G - Plausibility check for DFP_TMP |
| 0x4FA0 | DFES_DTCM_DFC_TMPsig_C__G - Signal check for DFP_TMP |
| 0x0118 | DFES_DTCM_DFC_TMmax_C__G - Motorkühlmitteltemperaturfühler 1 - Kurzschluss nach Minus |
| 0x0117 | DFES_DTCM_DFC_TMmin_C__G - Motorkühlmitteltemperaturfühler 1 - Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x0116 | DFES_DTCM_DFC_TMnpl_C__G - Motorkühlmitteltemperaturfühler 1 - Motortemperatursignal unplausibel ggü. Modell |
| 0x0125 | DFES_DTCM_DFC_TMsig_C__G - Motorkühlmitteltemperaturfühler 1 - Motortemperaturschwelle für Lambdaregelungsfreigabe nicht erreicht |
| 0x4FA1 | DFES_DTCM_DFC_TOLmax_C__G - Check of maximum for DFP_TOL |
| 0x4FA2 | DFES_DTCM_DFC_TOLmin_C__G - Check of minimum for DFP_TOL |
| 0x4FA3 | DFES_DTCM_DFC_TOLnpl_C__G - Plausibility check for DFP_TOL |
| 0x4FA4 | DFES_DTCM_DFC_TOLsig_C__G - Signal check for DFP_TOL |
| 0x0634 | DFES_DTCM_DFC_TSGmax_C__G - Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur zu hoch |
| 0x163A | DFES_DTCM_DFC_TSGmin_C__G - Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur zu niedrig |
| 0x4FA5 | DFES_DTCM_DFC_TUMPmax_C__G - Check of maximum for DFP_TUMP |
| 0x4FA6 | DFES_DTCM_DFC_TUMPmin_C__G - Check of minimum for DFP_TUMP |
| 0x4FA7 | DFES_DTCM_DFC_TUMPnpl_C__G - Plausibility check for DFP_TUMP |
| 0x4FA8 | DFES_DTCM_DFC_TUMPsig_C__G - Signal check for DFP_TUMP |
| 0x1115 | DFES_DTCM_DFC_TUMnpl_C__G - Umgebungstemperaturfühler - Plausibilitätsfehler |
| 0x110F | DFES_DTCM_DFC_TUMsig_C__G - Umgebungstemperaturfühler - CAN-Signal fehlerhaft |
| 0x4FA9 | DFES_DTCM_DFC_UBRmax_C__G - Check of maximum for DFP_UBR |
| 0x4FAA | DFES_DTCM_DFC_UBRmin_C__G - Check of minimum for DFP_UBR |
| 0x4FAB | DFES_DTCM_DFC_UBRnpl_C__G - Plausibility check for DFP_UBR |
| 0x4FAC | DFES_DTCM_DFC_UBRsig_C__G - Signal check for DFP_UBR |
| 0x0563 | DFES_DTCM_DFC_UBmax_C__G - Versorgungsspannung - Spannungsschwellwert überschritten |
| 0x0562 | DFES_DTCM_DFC_UBmin_C__G - Versorgungsspannung - Spannungsschwellwert unterschritten |
| 0x0560 | DFES_DTCM_DFC_UBnpl_C__G - Versorgungsspannung - ADC-Fehler, HW-Fehler |
| 0x4FAD | DFES_DTCM_DFC_UVSEmax_C__G - Check of maximum for DFP_UVSE |
| 0x4FAE | DFES_DTCM_DFC_UVSEmin_C__G - Check of minimum for DFP_UVSE |
| 0x4FAF | DFES_DTCM_DFC_UVSEnpl_C__G - Plausibility check for DFP_UVSE |
| 0x4FB0 | DFES_DTCM_DFC_UVSEsig_C__G - Signal check for DFP_UVSE |
| 0x0500 | DFES_DTCM_DFC_VFZsig_C__G - Fahrzeuggeschwindigkeitssensor 1 - Kein Signal |
| 0x112D | DFES_DTCM_DFC_X135sig_C__G - Kommunikationsverlust mit Steuerung Crashabschaltung EKP - Timeout CAN-Kommunikation |
| 0x1116 | DFES_DTCM_DFC_X315sig_C__G - Kommunikationsverlust mit Status Fahrzeugmodus - Timeout CAN-Kommunikation |
| 0x1122 | DFES_DTCM_DFC_X334sig_C__G - Kommunikationsverlust mit Powermanagement Ladespannung - Timeout CAN-Kommunikation |
| 0x1129 | DFES_DTCM_DFC_X3B0sig_C__G - Kommunikationsverlust mit Status Rückwärtsgang - Timeout CAN-Kommunikation |
| 0x1121 | DFES_DTCM_DFC_X3B4sig_C__G - Kommunikationsverlust mit Powermanagement Batteriespannung - Timeout CAN-Kommunikation |
| 0x4FB1 | DFES_DTCM_DFC_X3B5max_C__G - Check of maximum for DFP_X3B5 |
| 0x4FB2 | DFES_DTCM_DFC_X3B5min_C__G - Check of minimum for DFP_X3B5 |
| 0x4FB3 | DFES_DTCM_DFC_X3B5npl_C__G - Plausibility check for DFP_X3B5 |
| 0x4FB4 | DFES_DTCM_DFC_X3B5sig_C__G - Signal check for DFP_X3B5 |
| 0x1120 | DFES_DTCM_DFC_XC4sig_C__G - Kommunikationsverlust mit Lenkradwinkel - Timeout CAN-Kommunikation |
| 0x4FB5 | DFES_DTCM_DFC_ZWPEmax_C__G - Zusatzwasserpumpe Kurzschluss nach Plus |
| 0x4FB6 | DFES_DTCM_DFC_ZWPEmin_C__G - Zusatzwasserpumpe Kurzschluss nach Minus |
| 0x4FB7 | DFES_DTCM_DFC_ZWPEnpl_C__G - Zusatzwasserpumpe Unplausibel |
| 0x4FB8 | DFES_DTCM_DFC_ZWPEsig_C__G - Zusatzwasserpumpe Leitungsunterbrechung |
| 0x4E20 | DFES_DTCO_DFC_AdcI_ADC0_Cal_C__G - ADC0 power-up calibration timeout errors |
| 0x4E21 | DFES_DTCO_DFC_AdcI_ADC0_Conv_C__G - ADC0 conversion timeout errors |
| 0x4E22 | DFES_DTCO_DFC_AdcI_ADC1_Cal_C__G - ADC1 power-up calibration timeout errors |
| 0x4E23 | DFES_DTCO_DFC_AdcI_ADC1_Conv_C__G - ADC1 conversion timeout error |
| 0x0368 | DFES_DTCO_DFC_ANWSmax_C__G - Signal oberhalb Schwelle |
| 0x0367 | DFES_DTCO_DFC_ANWSmin_C__G - Signal unterhalb Schwelle |
| 0x0365 | DFES_DTCO_DFC_ANWSnpl_C__G - unplausible Phasenflankenanzahl |
| 0x0366 | DFES_DTCO_DFC_ANWSsig_C__G - Kurzschluss nach Minus, Lage der Phasenflanken oder Einbaulage außerhalb Toleranzen |
| 0x0571 | DFES_DTCO_DFC_BREMSnpl_C__G - Schalter Bremse, Prüfresultat unplausibel |
| 0x110C | DFES_DTCO_DFC_BWFnpl_C__G - PWG-Bewegungserkennung Signal unplausibel |
| 0x4E24 | DFES_DTCO_DFC_CANAmax_C__G - CANA Fehler, Signal oberhalb Schwelle |
| 0x4E25 | DFES_DTCO_DFC_CANAmin_C__G - CANA Fehler, Signal unterhalb Schwelle |
| 0x4E26 | DFES_DTCO_DFC_CANAsig_C__G - CANA Fehler, kein Signal |
| 0x4E27 | DFES_DTCO_DFC_CCASmax_C__G - CAN CAS, Signal oberhalb Schwelle |
| 0x4E28 | DFES_DTCO_DFC_CCASmin_C__G - CAN CAS, Signal unterhalb Schwelle |
| 0x3212 | DFES_DTCO_DFC_CCASnpl_C__G - CAN CAS, unplausibel |
| 0x3211 | DFES_DTCO_DFC_CCASsig_C__G - CAN CAS, kein Signal |
| 0x3209 | DFES_DTCO_DFC_CDSCmin_C__G - CAN Timeout DCS SG, Aliveprüfung |
| 0x3210 | DFES_DTCO_DFC_CDSCnpl_C__G - CAN Timeout DCS SG, unplausibel |
| 0x1613 | DFES_DTCO_DFC_CDSCsig_C__G - CAN Timeout DCS SG, kein Signal |
| 0x3213 | DFES_DTCO_DFC_CEGSmin_C__G - CAN-Timeout EGS |
| 0x3214 | DFES_DTCO_DFC_CEGSnpl_C__G - CAN-Timeout EGS, Plausibilitätsfehler |
| 0x1611 | DFES_DTCO_DFC_CEGSsig_C__G - CAN-Timeout EGS, kein Signal |
| 0x4E29 | DFES_DTCO_DFC_CIHKAmax_C__G - CAN-IHKA Signalfehler, Signal oberhalb Schwelle |
| 0x4E2A | DFES_DTCO_DFC_CIHKAmin_C__G - CAN-IHKA Signalfehler, Signal unterhalb Schwelle |
| 0x4E2B | DFES_DTCO_DFC_CIHKAnpl_C__G - CAN-IHKA Signalfehler, unplausibel |
| 0x3215 | DFES_DTCO_DFC_CIHKAsig_C__G - CAN- IHKA Signalfehler, kein Signal |
| 0x4E2C | DFES_DTCO_DFC_CINSmax_C__G - CAN-Timeout Instrumentenkombination |
| 0x3216 | DFES_DTCO_DFC_CINSmin_C__G - CAN-Timeout Instrumentenkombination, Timeout Instrument |
| 0x3217 | DFES_DTCO_DFC_CINSnpl_C__G - CAN-Timeout Instrumentenkombination, Plausibilitätsfehler |
| 0x1612 | DFES_DTCO_DFC_CINSsig_C__G - CAN-Timeout Instrumentenkombination, kein Signal |
| 0x4E2D | DFES_DTCO_DFC_Cj945SpiCom1_C__G - Reported SPI and COM-Errors of a Cj945 |
| 0x320D | DFES_DTCO_DFC_CSSGsig_C__G - CAN SSG Signalfehler, kein Signal |
| 0x3219 | DFES_DTCO_DFC_CSZLmin_C__G - CAN SZL Signalfehler |
| 0x3221 | DFES_DTCO_DFC_CSZLnpl_C__G - CAN SZL Signalfehler, Plausibilitätsfehler |
| 0x3220 | DFES_DTCO_DFC_CSZLsig_C__G - CAN SZL Signalfehler, kein Signal |
| 0x4E30 | DFES_DTCO_DFC_CUHRnpl_C__G - CAN rel.Zeitgeber, unplausibel |
| 0x1197 | DFES_DTCO_DFC_DDSSmax_C__G - Differenzdrucksensor Saugrohr, obere Schwelle überschritten |
| 0x1198 | DFES_DTCO_DFC_DDSSmin_C__G - Differenzdrucksensor Saugrohr, untere Schwelle unterschritten |
| 0x1199 | DFES_DTCO_DFC_DDSSnpl_C__G - Differenzdrucksensor Saugrohr, Plausibilitätsfehler |
| 0x4E32 | DFES_DTCO_DFC_DIVVTnpl_C__G - Stromplausibilisierung VVT-Motor |
| 0x0123 | DFES_DTCO_DFC_DK1Pmax_C__G - Bereichsverletzung DK-Poti 1 nach oben |
| 0x0122 | DFES_DTCO_DFC_DK1Pmin_C__G - Bereichsverletzung DK-Poti 1 nach unten |
| 0x0121 | DFES_DTCO_DFC_DK1Pnpl_C__G - DK-Poti 1 unplausibel  |
| 0x4E33 | DFES_DTCO_DFC_DK1Psig_C__G - DK-Poti 1, kein Signal |
| 0x0223 | DFES_DTCO_DFC_DK2Pmax_C__G - Bereichsverletzung DK-Poti 2 nach oben |
| 0x0222 | DFES_DTCO_DFC_DK2Pmin_C__G - Bereichsverletzung DK-Poti 2 nach unten |
| 0x0221 | DFES_DTCO_DFC_DK2Pnpl_C__G - DK-Poti 2 unplausibel  |
| 0x4E34 | DFES_DTCO_DFC_DK2Psig_C__G - DK-Poti 2, kein Signal |
| 0x4E35 | DFES_DTCO_DFC_DKmax_C__G - Fehler Drosselklappenpoti löschen |
| 0x4E36 | DFES_DTCO_DFC_DKmin_C__G - Fehler Drosselklappenpoti löschen |
| 0x4E37 | DFES_DTCO_DFC_DKnpl_C__G - Fehler Drosselklappenpoti löschen |
| 0x4E38 | DFES_DTCO_DFC_DKPDFmax_C__G - Fehler DK-Poti 1 oder DK-Poti 2, Signal oberhalb Schwelle |
| 0x4E39 | DFES_DTCO_DFC_DKPDFmin_C__G - Fehler DK-Poti 1 oder DK-Poti 2, Signal unterhalb Schwelle |
| 0x0120 | DFES_DTCO_DFC_DKPDFnpl_C__G - Fehler DK-Poti 1 oder DK-Poti 2, unplausibel |
| 0x4E3A | DFES_DTCO_DFC_DKPDFsig_C__G - Fehler DK-Poti 1 oder DK-Poti 2, kein Signal |
| 0x4E3B | DFES_DTCO_DFC_DKsig_C__G - Fehler Drosselklappenpoti löschen |
| 0x4E3C | DFES_DTCO_DFC_DKVL2npl_C__G - Sammelfehlerpfad LRA- adaptation und Luftmassenabgleich |
| 0x4E3D | DFES_DTCO_DFC_DKVLnpl_C__G - Sammelfehlerpfad LRA- adaptation und Luftmassenabgleich, Bank 2 |
| 0x4E3E | DFES_DTCO_DFC_DSMDummy_C__G - Dummy element to guarantee a minimum of one defined element of DFC and DFP |
| 0x0108 | DFES_DTCO_DFC_DSUmax_C__G - Umgebungsdrucksensor, obere Schwelle überschritten |
| 0x0107 | DFES_DTCO_DFC_DSUmin_C__G - Umgebungsdrucksensor, untere Schwelle unterschritten |
| 0x0106 | DFES_DTCO_DFC_DSUnpl_C__G - Umgebungsdrucksensor,  unplausibel  |
| 0x4E3F | DFES_DTCO_DFC_DSUsig_C__G - Umgebungsdrucksensor,  kein Signal |
| 0x1064 | DFES_DTCO_DFC_DVALRNmax_C__G - VVT Anschläge lernen notwendig |
| 0x4E40 | DFES_DTCO_DFC_DVEEmax_C__G - Fehler DV-E Endstufe, Signal oberhalb Schwelle |
| 0x4E41 | DFES_DTCO_DFC_DVEEmin_C__G - Fehler DV-E Endstufe, Signal unterhalb Schwelle |
| 0x4E42 | DFES_DTCO_DFC_DVEEnpl_C__G - Fehler DV-E Endstufe, unplausibel |
| 0x4E43 | DFES_DTCO_DFC_DVEEsig_C__G - Fehler DV-E Endstufe, kein Signal |
| 0x4E44 | DFES_DTCO_DFC_DVEFmax_C__G - DV-E Fehler bei Federprüfung, Signal oberhalb Schwelle |
| 0x4E45 | DFES_DTCO_DFC_DVEFmin_C__G - DV-E Fehler bei Federprüfung, Signal unterhalb Schwelle |
| 0x4E46 | DFES_DTCO_DFC_DVEFnpl_C__G - DV-E Fehler bei Federprüfung, unplausibel |
| 0x1629 | DFES_DTCO_DFC_DVEFOmax_C__G - Federprüfung Drosselklappen-Steller öffnende Feder, Fehler bei Federprüfung 'Öffnen', Abbruch Feder öffnet nicht |
| 0x1628 | DFES_DTCO_DFC_DVEFOmin_C__G - Federprüfung Drosselklappen-Steller öffnende Feder, Fehler bei Federprüfung 'Öffnen' |
| 0x4E47 | DFES_DTCO_DFC_DVEFOnpl_C__G - Federprüfung Drosselklappen-Steller öffnende Feder, unplausibel |
| 0x4E48 | DFES_DTCO_DFC_DVEFOsig_C__G - Federprüfung Drosselklappen-Steller öffnende Feder, kein Signal |
| 0x4E49 | DFES_DTCO_DFC_DVEFsig_C__G - DV-E Fehler bei Federprüfung, kein Signal |
| 0x4E4A | DFES_DTCO_DFC_DVELmax_C__G - DV-E Lageabweichung, Signal oberhalb Schwelle |
| 0x4E4B | DFES_DTCO_DFC_DVELmin_C__G - DV-E Lageabweichung, Signal unterhalb Schwelle |
| 0x4E4C | DFES_DTCO_DFC_DVELnpl_C__G - DV-E Lageabweichung, unplausibel |
| 0x4E4D | DFES_DTCO_DFC_DVELsig_C__G - DV-E Lageabweichung, kein Signal |
| 0x4E4E | DFES_DTCO_DFC_DVENmax_C__G - Prüfung Notlaufpunkt, Signal oberhalb Schwelle |
| 0x4E4F | DFES_DTCO_DFC_DVENmin_C__G - Prüfung Notlaufpunkt, Signal unterhalb Schwelle |
| 0x1633 | DFES_DTCO_DFC_DVENnpl_C__G - Prüfung Notlaufpunkt,  Notluftpunkt nicht adaptiert |
| 0x4E50 | DFES_DTCO_DFC_DVENsig_C__G - Prüfung Notlaufpunkt, kein Signal |
| 0x1639 | DFES_DTCO_DFC_DVERmax_C__G - Drosselklappen-Steller Regelbereich, DK-Lagereg. klemmt anhaltend |
| 0x1638 | DFES_DTCO_DFC_DVERmin_C__G - Drosselklappen-Steller Regelbereich,  DK-Lagereg. klemmt kurzzeitig |
| 0x4E51 | DFES_DTCO_DFC_DVERnpl_C__G - Drosselklappen-Steller Regelbereich, unplausibel |
| 0x4E52 | DFES_DTCO_DFC_DVERsig_C__G - Drosselklappen-Steller Regelbereich |
| 0x101C | DFES_DTCO_DFC_DVESTmax_C__G - Endstufendiagnose Entlastungsrelais VVT, Kurzschluss nach Plus |
| 0x101D | DFES_DTCO_DFC_DVESTmin_C__G - Endstufendiagnose Entlastungsrelais VVT, Kurzschluss nach Minus |
| 0x4E53 | DFES_DTCO_DFC_DVESTnpl_C__G - Endstufendiagnose Entlastungsrelais VVT, unplausibel |
| 0x101E | DFES_DTCO_DFC_DVESTsig_C__G - Endstufendiagnose Entlastungsrelais VVT, Leitungsunterbrechung |
| 0x4E54 | DFES_DTCO_DFC_DVETmax_C__G - Drosselklappen-Adaption Tauscherkennung ohne Adaption |
| 0x4E55 | DFES_DTCO_DFC_DVETmin_C__G - Drosselklappen-Adaption Tauscherkennung ohne Adaption |
| 0x163B | DFES_DTCO_DFC_DVETnpl_C__G - Drosselklappen-Adaption Tauscherkennung ohne Adaption |
| 0x4E56 | DFES_DTCO_DFC_DVETsig_C__G - Drosselklappen-Adaption Tauscherkennung ohne Adaption |
| 0x1641 | DFES_DTCO_DFC_DVEUBmax_C__G - Abbruch DV-Adaption wegen Umweltbedingungen, Lernverbot Status Prüfbedingung >0 aber nicht 27 |
| 0x1642 | DFES_DTCO_DFC_DVEUBmin_C__G - Abbruch DV-Adaption wegen Umweltbedingungen, Lernverbot Status Prüfbedingung = 27 |
| 0x4E57 | DFES_DTCO_DFC_DVEUBnpl_C__G - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x4E58 | DFES_DTCO_DFC_DVEUBsig_C__G - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x4E59 | DFES_DTCO_DFC_DVEUmax_C__G - DV-E Fehler beim UMA-Lernen, Signal oberhalb Schwelle |
| 0x4E5A | DFES_DTCO_DFC_DVEUmin_C__G - DV-E Fehler beim UMA-Lernen, Signal unterhalb Schwelle |
| 0x1635 | DFES_DTCO_DFC_DVEUnpl_C__G - DV-E Fehler beim UMA-Lernen, unplausibel |
| 0x4E5B | DFES_DTCO_DFC_DVEUsig_C__G - DV-E Fehler beim UMA-Lernen, kein Signal |
| 0x4E5C | DFES_DTCO_DFC_DVEUWmax_C__G - DV-E Fehler beim UMA-Wiederlernen, Signal oberhalb Schwelle |
| 0x4E5D | DFES_DTCO_DFC_DVEUWmin_C__G - DV-E Fehler beim UMA-Wiederlernen, Signal unterhalb Schwelle |
| 0x1644 | DFES_DTCO_DFC_DVEUWnpl_C__G - DV-E Fehler beim UMA-Wiederlernen, unplausibel |
| 0x4E5E | DFES_DTCO_DFC_DVEUWsig_C__G - DV-E Fehler beim UMA-Wiederlernen, kein Signal |
| 0x4E5F | DFES_DTCO_DFC_DVEVmax_C__G - Drosselklappensteller, Fehler bei Verstärkerabgleich, Signal oberhalb Schwelle |
| 0x4E60 | DFES_DTCO_DFC_DVEVmin_C__G - Drosselklappensteller, Fehler bei Verstärkerabgleich, Signal unterhalb Schwelle |
| 0x1643 | DFES_DTCO_DFC_DVEVnpl_C__G - Drosselklappensteller, Fehler bei Verstärkerabgleich, unplausibel |
| 0x4E61 | DFES_DTCO_DFC_DVEVsig_C__G - Drosselklappensteller, Fehler bei Verstärkerabgleich, kein Signal |
| 0x1004 | DFES_DTCO_DFC_DVFFSmax_C__G - VVT-Führungssensor, Magnetloss-Fehler |
| 0x1005 | DFES_DTCO_DFC_DVFFSmin_C__G - VVT-Führungssensor, Reset-Fehler |
| 0x1007 | DFES_DTCO_DFC_DVFFSnpl_C__G - VVT-Führungssensor, Gradientenfehler |
| 0x1006 | DFES_DTCO_DFC_DVFFSsig_C__G - VVT-Führungssensor, Parity-Fehler oder kein Signal |
| 0x1012 | DFES_DTCO_DFC_DVFRSmax_C__G - VVT-Referenzsensor, Magnetloss-Fehler |
| 0x1013 | DFES_DTCO_DFC_DVFRSmin_C__G - VVT-Referenzsensor, Reset-Fehler |
| 0x1015 | DFES_DTCO_DFC_DVFRSnpl_C__G - VVT-Referenzsensor, Gradientenfehler |
| 0x1014 | DFES_DTCO_DFC_DVFRSsig_C__G - VVT-Referenzsensor, Parity-Fehler oder kein Signal |
| 0x1023 | DFES_DTCO_DFC_DVLRNmax_C__G - VVT-Lernfunktion Anschlag, Verstellbereich fehlerhaft |
| 0x1024 | DFES_DTCO_DFC_DVLRNmin_C__G - VVT-Lernfunktion Anschlag, Fehler unteres Lernfenster |
| 0x101A | DFES_DTCO_DFC_DVLRNnpl_C__G - VVT-Lernfunktion Anschlag, keine Anschläge gelernt |
| 0x1025 | DFES_DTCO_DFC_DVLRNsig_C__G - VVT-Lernfunktion Anschlag, keine Anschläge gelernt |
| 0x1078 | DFES_DTCO_DFC_DVOVLmax_C__G - VVT-Systemüberlast, Strom E-Motoransteuerung zu hoch |
| 0x1077 | DFES_DTCO_DFC_DVOVLmin_C__G - VVT-Systemüberlast, Temperatur E-Motor zu hoch |
| 0x1017 | DFES_DTCO_DFC_DVPLAnpl_C__G - VVT-Sensorplausibilisierung, Sensorsignale zueinander unplausibel |
| 0x4E62 | DFES_DTCO_DFC_DVPMNmax_C__G - Fehler Leistungsabfall VVT, Signal oberhalb Schwelle |
| 0x4E63 | DFES_DTCO_DFC_DVPMNmin_C__G - Fehler Leistungsabfall VVT, Signal unteralb Schwelle |
| 0x4E64 | DFES_DTCO_DFC_DVPMNnpl_C__G - Fehler Leistungsabfall VVT, unplausibel |
| 0x4E65 | DFES_DTCO_DFC_DVPMNsig_C__G - Fehler Leistungsabfall VVT, kein Signal |
| 0x4E66 | DFES_DTCO_DFC_DVSTEmax_C__G - Fehler VVT-Stellmotor, Signal oberhalb Schwelle |
| 0x4E67 | DFES_DTCO_DFC_DVSTEmin_C__G - Fehler VVT-Stellmotor, Signal unterhalb Schwelle |
| 0x4E68 | DFES_DTCO_DFC_DVSTEnpl_C__G - Fehler VVT-Stellmotor, unplausibel |
| 0x4E69 | DFES_DTCO_DFC_DVSTEsig_C__G - Fehler VVT-Stellmotor, kein Signal |
| 0x1055 | DFES_DTCO_DFC_DVULVmax_C__G - VVT-Leistungsversorgung, Spannung zu hoch |
| 0x1056 | DFES_DTCO_DFC_DVULVmin_C__G - VVT-Leistungsversorgung, Spannung zu niedrig |
| 0x1057 | DFES_DTCO_DFC_DVULVnpl_C__G - VVT-Leistungsversorgung, Relais-Fehler |
| 0x1019 | DFES_DTCO_DFC_DVUSEmax_C__G - VVT-Versorgungsspannung Sensor, Sensorversorgungsspannung zu hoch |
| 0x1020 | DFES_DTCO_DFC_DVUSEmin_C__G - VVT-Versorgungsspannung Sensor, Sensorversorgungsspannung zu niedrig |
| 0x4E6B | DFES_DTCO_DFC_DYLSU2min_C__G - Diagnose Dynamik der LSU, Signal unterhalb Schwelle, Bank 2 |
| 0x4E6F | DFES_DTCO_DFC_DYLSUmin_C__G - Diagnose Dynamik der LSU, Signal unterhalb Schwelle |
| 0x0343 | DFES_DTCO_DFC_ENWSmax_C__G - Nockenwellengeber Einlass, Kurzschluss nach Plus |
| 0x0342 | DFES_DTCO_DFC_ENWSmin_C__G - Nockenwellengeber Einlass, Kurzschluss nach Minus |
| 0x0340 | DFES_DTCO_DFC_ENWSnpl_C__G - Nockenwellengeber Einlass, unplausible Phasenflankenanzahl |
| 0x0341 | DFES_DTCO_DFC_ENWSsig_C__G - Nockenwellengeber Einlass, Lage der Phasenflanken oder Einbaulage außerhalb Toleranzen |
| 0x4E72 | DFES_DTCO_DFC_EpmCaSI1ErrSig_C__G - camshaft signal diagnosis - disturbed signal |
| 0x4E73 | DFES_DTCO_DFC_EpmCaSI1NoSig_C__G - camshaft signal diagnosis - no signal |
| 0x4E74 | DFES_DTCO_DFC_EpmCaSO1ErrSig_C__G - camshaft signal diagnosis - disturbed signal |
| 0x4E75 | DFES_DTCO_DFC_EpmCaSO1NoSig_C__G - camshaft signal diagnosis - no signal |
| 0x0335 | DFES_DTCO_DFC_EpmCrSErrSig_C__G - Kurbelwellengeber, Leitungsunterbrechung, Drehzahlsignal |
| 0x0374 | DFES_DTCO_DFC_EpmCrSNoSig_C__G - Kurbelwellengeber, Signal fehlt |
| 0x2123 | DFES_DTCO_DFC_FP1Pmax_C__G - Pedalwertgeber Poti 1, Spannung PWG1 oberhalb Max-Wert |
| 0x2122 | DFES_DTCO_DFC_FP1Pmin_C__G - Pedalwertgeber Poti 1, Spannung PWG1 unterhalb Min-Wert |
| 0x2121 | DFES_DTCO_DFC_FP1Pnpl_C__G - Pedalwertgeber Poti 1, Gleichlauffehler zwischen PWG1 und PWG2 |
| 0x2128 | DFES_DTCO_DFC_FP2Pmax_C__G - Pedalwertgeber Poti 2, Spannung PWG2 oberhalb Max-Wert |
| 0x2127 | DFES_DTCO_DFC_FP2Pmin_C__G - Pedalwertgeber Poti 2, Spannung PWG2 unterhalb Min-Wert |
| 0x1120 | DFES_DTCO_DFC_FPPnpl_C__G - Fehler, Fahrpedal Potentiometer |
| 0x4E76 | DFES_DTCO_DFC_FRAO2max_C__G - Gemischadaption FRAO, Signal oberhalb Schwelle, Bank 2 |
| 0x4E77 | DFES_DTCO_DFC_FRAO2min_C__G - Gemischadaption FRAO, Signal unterhalb Schwelle, Bank 2 |
| 0x4E78 | DFES_DTCO_DFC_FRAOmax_C__G - Gemischadaption FRAO, Signal oberhalb Schwelle |
| 0x4E79 | DFES_DTCO_DFC_FRAOmin_C__G - Gemischadaption FRAO, Signal unterhalb Schwelle |
| 0x4E7A | DFES_DTCO_DFC_FRAU2max_C__G - untere multiplikative Gemischadaptionsfaktor, Signal oberhalb Schwelle, Bank 2 |
| 0x4E7B | DFES_DTCO_DFC_FRAU2min_C__G - untere multiplikative Gemischadaptionsfaktor, Signal unterhalb Schwelle, Bank 2 |
| 0x4E7C | DFES_DTCO_DFC_FRAUmax_C__G - untere multiplikative Gemischadaptionsfaktor, Signal oberhalb Schwelle |
| 0x4E7D | DFES_DTCO_DFC_FRAUmin_C__G - untere multiplikative Gemischadaptionsfaktor, Signal unterhalb Schwelle |
| 0x110E | DFES_DTCO_DFC_FRST2max_C__G - LR-Abweichung (Bank 2), System zu fett |
| 0x4E7E | DFES_DTCO_DFC_HELSU2max_C__G - Lambdasonde vor Katalysator Bank 2, Signal oberhalb Schwelle |
| 0x4E7F | DFES_DTCO_DFC_HELSU2min_C__G - Lambdasonde vor Katalysator Bank 2, Signal unterhalb Schwelle |
| 0x4E80 | DFES_DTCO_DFC_HELSU2npl_C__G - Lambdasonde vor Katalysator Bank 2, unplausibel |
| 0x2234 | DFES_DTCO_DFC_HELSU2sig_C__G - Lambdasonde vor Katalysator Bank 2, Heizereinkopplung, Heizereinkopplung auf Signalpfad |
| 0x4E81 | DFES_DTCO_DFC_HELSUmax_C__G - Lambdasonde vor Katalysator, Signal oberhalb Schwelle |
| 0x4E82 | DFES_DTCO_DFC_HELSUmin_C__G - Lambdasonde vor Katalysator, Signal unterhalb Schwelle |
| 0x4E83 | DFES_DTCO_DFC_HELSUnpl_C__G - Lambdasonde vor Katalysator, unplausibel |
| 0x2231 | DFES_DTCO_DFC_HELSUsig_C__G - Lambdasonde vor Katalysator, Heizereinkopplung, Heizereinkopplung auf Signalpfad |
| 0x0058 | DFES_DTCO_DFC_HSH2max_C__G - Lambdasondenheizung nach Kat (Bank 2), Kurzschluss nach Plus |
| 0x0057 | DFES_DTCO_DFC_HSH2min_C__G - Lambdasondenheizung nach Kat (Bank 2), Kurzschluss nach Minus |
| 0x0161 | DFES_DTCO_DFC_HSH2npl_C__G - Lambdasondenheizung nach Kat (Bank 2), Sondenheizung defekt (Innenwiderstand) |
| 0x0056 | DFES_DTCO_DFC_HSH2sig_C__G - Lambdasondenheizung nach Kat (Bank 2), Leitungsunterbrechung |
| 0x4E84 | DFES_DTCO_DFC_HSHE2max_C__G - Lambdasondenheizung hinter Kat. Endstufe, Bank2, Signal oberhalb Schwelle |
| 0x4E85 | DFES_DTCO_DFC_HSHE2min_C__G - Lambdasondenheizung hinter Kat. Endstufe, Bank2, Signal unterhalb Schwelle |
| 0x4E86 | DFES_DTCO_DFC_HSHE2npl_C__G - Lambdasondenheizung hinter Kat. Endstufe, Bank2, unplausibel |
| 0x4E87 | DFES_DTCO_DFC_HSHE2sig_C__G - Lambdasondenheizung hinter Kat. Endstufe, Bank2, kein Signal |
| 0x4E88 | DFES_DTCO_DFC_HSHEmax_C__G - Lambdasondenheizung hinter Kat. Endstufe, Signal oberhalb Schwelle |
| 0x4E89 | DFES_DTCO_DFC_HSHEmin_C__G - Lambdasondenheizung hinter Kat. Endstufe, Signal unterhalb Schwelle |
| 0x4E8A | DFES_DTCO_DFC_HSHEnpl_C__G - Lambdasondenheizung hinter Kat. Endstufe, unplausibel |
| 0x4E8B | DFES_DTCO_DFC_HSHEsig_C__G - Lambdasondenheizung hinter Kat. Endstufe, Kein Signal |
| 0x0038 | DFES_DTCO_DFC_HSHmax_C__G - Lambdasondenheizung nach Kat, Kurzschluss nach Plus |
| 0x0037 | DFES_DTCO_DFC_HSHmin_C__G - Lambdasondenheizung nach Kat, Kurzschluss nach Minus |
| 0x0141 | DFES_DTCO_DFC_HSHnpl_C__G - Lambdasondenheizung nach Kat, Sondenheizung defekt (Innenwiderstand) |
| 0x0036 | DFES_DTCO_DFC_HSHsig_C__G - Lambdasondenheizung nach Kat Leitungsunterbrechung |
| 0x0032 | DFES_DTCO_DFC_HSVmax_C__G - Lambdasondenheizung vor Kat, Kurzschluss nach Plus |
| 0x0031 | DFES_DTCO_DFC_HSVmin_C__G - Lambdasondenheizung vor Kat, Kurzschluss nach Minus |
| 0x0135 | DFES_DTCO_DFC_HSVnpl_C__G - Lambdasondenheizung vor Kat, Innenwiderstand der Nernstzelle unplausibel oder zu späte Betriebsbereitschaft |
| 0x0030 | DFES_DTCO_DFC_HSVsig_C__G - Lambdasondenheizung vor Kat, Leitungsunterbrechung |
| 0x4E8C | DFES_DTCO_DFC_ICLSU2max_C__G - Diagnose Auswerte-IC der LSU, Signal oberhalb Schwelle, Bank 2 |
| 0x4E8D | DFES_DTCO_DFC_ICLSU2min_C__G - Diagnose Auswerte-IC der LSU, Signal unterhalb Schwelle, Bank 2 |
| 0x4E8E | DFES_DTCO_DFC_ICLSU2npl_C__G - Diagnose Auswerte-IC der LSU, unplausibel, Bank 2 |
| 0x4E8F | DFES_DTCO_DFC_ICLSU2sig_C__G - Diagnose Auswerte-IC der LSU, kein Signal, Bank 2 |
| 0x4E90 | DFES_DTCO_DFC_ICLSUmax_C__G - Diagnose Auswerte-IC der LSU, Signal oberhalb Schwelle |
| 0x4E91 | DFES_DTCO_DFC_ICLSUmin_C__G - Diagnose Auswerte-IC der LSU, Signal unterhalb Schwelle |
| 0x4E92 | DFES_DTCO_DFC_ICLSUnpl_C__G - Diagnose Auswerte-IC der LSU, unplausibel |
| 0x4E93 | DFES_DTCO_DFC_ICLSUsig_C__G - Diagnose Auswerte-IC der LSU, kein Signal |
| 0x4E94 | DFES_DTCO_DFC_KAT2max_C__G - Katalysatordiagnose, Signal oberhalb Schwelle,  Bank 2 |
| 0x4E95 | DFES_DTCO_DFC_KAT2min_C__G - Katalysatordiagnose, Signal unterhalb Schwelle,  Bank 2 |
| 0x4E96 | DFES_DTCO_DFC_KAT2npl_C__G - Katalysatordiagnose, unplausibel,  Bank 2 |
| 0x4E97 | DFES_DTCO_DFC_KAT2sig_C__G - Katalysatordiagnose, kein Signal,  Bank 2 |
| 0x4E98 | DFES_DTCO_DFC_KATmax_C__G - Katalysatordiagnose, Signal oberhalb Schwelle |
| 0x4E99 | DFES_DTCO_DFC_KATmin_C__G - Katalysatordiagnose, Signal unterhalb Schwelle |
| 0x4E9A | DFES_DTCO_DFC_KATnpl_C__G - Katalysatordiagnose, unplausibel |
| 0x4E9B | DFES_DTCO_DFC_KATsig_C__G - Katalysatordiagnose, kein Signal |
| 0x0328 | DFES_DTCO_DFC_KnDetSens1PortAMax_C__G - Klopfsensor 1, Motor mechanisch zu laut oder KS 1 außerhalb Toleranz (Empfindlichkeit) |
| 0x0327 | DFES_DTCO_DFC_KnDetSens1PortAMin_C__G - Klopfsensor 1, elektrischer Fehler KS1 (Wackelkontakt) oder KS locker |
| 0x4E9C | DFES_DTCO_DFC_KnDetSens1PortBMax_C__G - Klopfsensor 1, unplausibel |
| 0x4E9D | DFES_DTCO_DFC_KnDetSens1PortBMin_C__G - Klopfsensor 1, kein Signal |
| 0x1328 | DFES_DTCO_DFC_KnDetSens2PortAMax_C__G - Klopfsensor 2, Motor mechanisch zu laut oder KS 2 außerhalb Toleranz (Empfindlichkeit) |
| 0x1327 | DFES_DTCO_DFC_KnDetSens2PortAMin_C__G - Klopfsensor 2, elektrischer Fehler KS2 (Wackelkontakt) oder KS locker |
| 0x4E9E | DFES_DTCO_DFC_KnDetSens2PortBMax_C__G - Klopfsensor 2, unplausibel |
| 0x4E9F | DFES_DTCO_DFC_KnDetSens2PortBMin_C__G - Klopfsensor 2, kein Signal |
| 0x1330 | DFES_DTCO_DFC_KnDetSens3PortAMax_C__G - Klopfsensor 3, Motor mechanisch zu laut oder KS 3 außerhalb Toleranz (Empfindlichkeit) |
| 0x1329 | DFES_DTCO_DFC_KnDetSens3PortAMin_C__G - Klopfsensor 3, elektrischer Fehler KS3 (Wackelkontakt) oder KS locker |
| 0x4EA0 | DFES_DTCO_DFC_KnDetSens3PortBMax_C__G - Klopfsensor 3, unplausibel |
| 0x4EA1 | DFES_DTCO_DFC_KnDetSens3PortBMin_C__G - Klopfsensor 3, kein Signal |
| 0x1333 | DFES_DTCO_DFC_KnDetSens4PortAMax_C__G - Klopfsensor 4, Motor mechanisch zu laut oder KS 4 außerhalb Toleranz (Empfindlichkeit) |
| 0x1332 | DFES_DTCO_DFC_KnDetSens4PortAMin_C__G - Klopfsensor 4, elektrischer Fehler KS4 (Wackelkontakt) oder KS locker |
| 0x4EA2 | DFES_DTCO_DFC_KnDetSens4PortBMax_C__G - Klopfsensor 4, unplausibel |
| 0x4EA3 | DFES_DTCO_DFC_KnDetSens4PortBMin_C__G - Klopfsensor 4, kein Signal |
| 0x4EA4 | DFES_DTCO_DFC_KS1max_C__G - Klopfsensor 1, Signal oberhalb Schwelle |
| 0x4EA5 | DFES_DTCO_DFC_KS1min_C__G - Klopfsensor 1, Signal unterhalb Schwelle |
| 0x4EA6 | DFES_DTCO_DFC_KS1npl_C__G - Klopfsensor 1, unplausibel |
| 0x4EA7 | DFES_DTCO_DFC_KS1sig_C__G - Klopfsensor 1, kein Signal |
| 0x4EA8 | DFES_DTCO_DFC_KS2max_C__G - Klopfsensor 2, Signal oberhalb Schwelle |
| 0x4EA9 | DFES_DTCO_DFC_KS2min_C__G - Klopfsensor 2, Signal unterhalb Schwelle |
| 0x4EAA | DFES_DTCO_DFC_KS2npl_C__G - Klopfsensor 2, unplausibel |
| 0x4EAB | DFES_DTCO_DFC_KS2sig_C__G - Klopfsensor 2, kein Signal |
| 0x4EAC | DFES_DTCO_DFC_KUPPLmax_C__G - Kupplungsschalter, Signal oberhalb Schwelle |
| 0x4EAD | DFES_DTCO_DFC_KUPPLmin_C__G - Kupplungsschalter, Signal unterhalb Schwelle |
| 0x4EAE | DFES_DTCO_DFC_KUPPLnpl_C__G - Kupplungsschalter, unplausibel |
| 0x0704 | DFES_DTCO_DFC_KUPPLsig_C__G - Kupplungsschalter, Signal, Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1150 | DFES_DTCO_DFC_LASH2max_C__G - Lambdasondenalterung nach Kat (Bank 2), Signal überschreitet Schwellwert nicht |
| 0x1149 | DFES_DTCO_DFC_LASH2min_C__G - Lambdasondenalterung nach Kat (Bank 2), Signal unterschreitet Schwellwert nicht |
| 0x1131 | DFES_DTCO_DFC_LASH2npl_C__G - Lambdasondenalterung nach Kat (Bank 2), Sonde dynamisch zu langsam |
| 0x0159 | DFES_DTCO_DFC_LASH2sig_C__G - Lambdasondenalterung nach Kat (Bank 2), Schubspannungsschwelle nicht erreicht oder Signal bei Vollast kleiner Schwelle |
| 0x1144 | DFES_DTCO_DFC_LASHmax_C__G - Lambdasondenalterung nach Kat, Signal überschreitet Schwellwert nicht |
| 0x1143 | DFES_DTCO_DFC_LASHmin_C__G - Lambdasondenalterung nach Kat, Signal unterschreitet Schwellwert nicht |
| 0x1130 | DFES_DTCO_DFC_LASHnpl_C__G - Lambdasondenalterung nach Kat, Sonde dynamisch zu langsam |
| 0x0139 | DFES_DTCO_DFC_LASHsig_C__G - Lambdasondenalterung nach Kat, Schubspannungsschwelle nicht erreicht oder Signal bei Vollast kleiner Schwelle |
| 0x0158 | DFES_DTCO_DFC_LSH2max_C__G - Lambdasonde nach Kat (Bank 2), Kurzschluss nach Plus |
| 0x0157 | DFES_DTCO_DFC_LSH2min_C__G - Lambdasonde nach Kat (Bank 2), Adernschluß oder CSD (Referenzluft vergiftet) |
| 0x0156 | DFES_DTCO_DFC_LSH2npl_C__G - Lambdasonde nach Kat (Bank 2), Heiztakteinkopplung auf Signal |
| 0x0160 | DFES_DTCO_DFC_LSH2sig_C__G - Lambdasonde nach Kat (Bank 2), Leitungsunterbrechung |
| 0x0138 | DFES_DTCO_DFC_LSHmax_C__G - Lambdasonde nach Kat, Kurzschluss nach Plus |
| 0x0137 | DFES_DTCO_DFC_LSHmin_C__G - Lambdasonde nach Kat, Adernschluß oder CSD (Referenzluft vergiftet) |
| 0x0140 | DFES_DTCO_DFC_LSHsig_C__G - Lambdasonde nach Kat, Leitungsunterbrechung |
| 0x4EAF | DFES_DTCO_DFC_LSUIA2max_C__G - Diagnose Sondenleitung an Bond IA der LSU, Bank 2, Signal oberhalb Schwelle |
| 0x4EB0 | DFES_DTCO_DFC_LSUIA2min_C__G - Diagnose Sondenleitung an Bond IA der LSU, Bank 2, Signal unterhalb Schwelle |
| 0x4EB1 | DFES_DTCO_DFC_LSUIA2npl_C__G - Diagnose Sondenleitung an Bond IA der LSU, Bank 2, unplausibel |
| 0x4EB2 | DFES_DTCO_DFC_LSUIA2sig_C__G - Diagnose Sondenleitung an Bond IA der LSU, Bank 2, kein Signal |
| 0x4EB3 | DFES_DTCO_DFC_LSUIAmax_C__G - Diagnose Sondenleitung an Bond IA der LSU, Signal oberhalb Schwelle |
| 0x4EB4 | DFES_DTCO_DFC_LSUIAmin_C__G - Diagnose Sondenleitung an Bond IA der LSU, Signal unterhalb Schwelle |
| 0x4EB5 | DFES_DTCO_DFC_LSUIAnpl_C__G - Diagnose Sondenleitung an Bond IA der LSU, unplausibel |
| 0x4EB6 | DFES_DTCO_DFC_LSUIAsig_C__G - Diagnose Sondenleitung an Bond IA der LSU, kein Signal |
| 0x4EB7 | DFES_DTCO_DFC_LSUIP2max_C__G - Diagnose Sondenleitung an Bond IP der LSU, Bank 2, Signal oberhalb Schwelle |
| 0x4EB8 | DFES_DTCO_DFC_LSUIP2min_C__G - Diagnose Sondenleitung an Bond IP der LSU, Bank 2, Signal unterhalb Schwelle |
| 0x4EB9 | DFES_DTCO_DFC_LSUIP2npl_C__G - Diagnose Sondenleitung an Bond IP der LSU, Bank 2, unplausibel |
| 0x4EBA | DFES_DTCO_DFC_LSUIP2sig_C__G - Diagnose Sondenleitung an Bond IP der LSU, Bank 2, kein Signal |
| 0x4EBB | DFES_DTCO_DFC_LSUIPmax_C__G - Diagnose Sondenleitung an Bond IP der LSU, Signal oberhalb Schwelle |
| 0x4EBC | DFES_DTCO_DFC_LSUIPmin_C__G - Diagnose Sondenleitung an Bond IP der LSU, Signal unterhalb Schwelle |
| 0x4EBD | DFES_DTCO_DFC_LSUIPnpl_C__G - Diagnose Sondenleitung an Bond IP der LSU, unplausibel |
| 0x4EBE | DFES_DTCO_DFC_LSUIPsig_C__G - Diagnose Sondenleitung an Bond IP der LSU, kein Signal |
| 0x0152 | DFES_DTCO_DFC_LSUKS2max_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub (Bank 2), Kurzschluss nach Plus |
| 0x0151 | DFES_DTCO_DFC_LSUKS2min_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub (Bank 2), Kurzschluss nach Minus |
| 0x4EBF | DFES_DTCO_DFC_LSUKS2npl_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub (Bank 2), unplausibel |
| 0x4EC0 | DFES_DTCO_DFC_LSUKS2sig_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub (Bank 2), kein Signal |
| 0x0132 | DFES_DTCO_DFC_LSUKSmax_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub, Kurzschluss nach Plus |
| 0x0131 | DFES_DTCO_DFC_LSUKSmin_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub, Kurzschluss nach Minus |
| 0x4EC1 | DFES_DTCO_DFC_LSUKSnpl_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub, unplausibel |
| 0x4EC2 | DFES_DTCO_DFC_LSUKSsig_C__G - Kurzschluss Sondenleitungen LSU gegen Masse oder Ub, kein Signal |
| 0x4EC3 | DFES_DTCO_DFC_LSUUN2max_C__G - Diagnose Sondenleitung an Bond UN der LSU, Bank 2, Signal oberhalb Schwelle |
| 0x4EC4 | DFES_DTCO_DFC_LSUUN2min_C__G - Diagnose Sondenleitung an Bond UN der LSU, Bank 2, Signal unterhalb Schwelle |
| 0x4EC5 | DFES_DTCO_DFC_LSUUN2npl_C__G - Diagnose Sondenleitung an Bond UN der LSU, Bank 2, unplausibel |
| 0x4EC6 | DFES_DTCO_DFC_LSUUN2sig_C__G - Diagnose Sondenleitung an Bond UN der LSU, Bank 2, kein Signal |
| 0x4EC7 | DFES_DTCO_DFC_LSUUNmax_C__G - Diagnose Sondenleitung an Bond UN der LSU, Signal oberhalb Schwelle |
| 0x4EC8 | DFES_DTCO_DFC_LSUUNmin_C__G - Diagnose Sondenleitung an Bond UN der LSU, Signal unterhalb Schwelle |
| 0x4EC9 | DFES_DTCO_DFC_LSUUNnpl_C__G - Diagnose Sondenleitung an Bond UN der LSU, unplausibel |
| 0x4ECA | DFES_DTCO_DFC_LSUUNsig_C__G - Diagnose Sondenleitung an Bond UN der LSU, kein Signal |
| 0x4ECB | DFES_DTCO_DFC_LSUVM2max_C__G - Diagnose Sondenleitung an Bond VM der LSU, Bank 2, Signal oberhalb Schwelle |
| 0x4ECC | DFES_DTCO_DFC_LSUVM2min_C__G - Diagnose Sondenleitung an Bond VM der LSU, Bank 2, Signal unterhalb Schwelle |
| 0x4ECD | DFES_DTCO_DFC_LSUVM2npl_C__G - Diagnose Sondenleitung an Bond VM der LSU, Bank 2, unplausibel |
| 0x4ECE | DFES_DTCO_DFC_LSUVM2sig_C__G - Diagnose Sondenleitung an Bond VM der LSU, Bank 2, kein Signal |
| 0x4ECF | DFES_DTCO_DFC_LSUVMmax_C__G - Diagnose Sondenleitung an Bond VM der LSU, Signal oberhalb Schwelle |
| 0x4ED0 | DFES_DTCO_DFC_LSUVMmin_C__G - Diagnose Sondenleitung an Bond VM der LSU, Signal unterhalb Schwelle |
| 0x4ED1 | DFES_DTCO_DFC_LSUVMnpl_C__G - Diagnose Sondenleitung an Bond VM der LSU, unplausibel |
| 0x4ED2 | DFES_DTCO_DFC_LSUVMsig_C__G - Diagnose Sondenleitung an Bond VM der LSU, kein Signal |
| 0x1170 | DFES_DTCO_DFC_LSV2max_C__G - Lambdasonde vor Kat (Bank 2), Offset über Grenzwert |
| 0x0153 | DFES_DTCO_DFC_LSV2min_C__G - Lambdasonde vor Kat (Bank 2), langsame Sonde |
| 0x0150 | DFES_DTCO_DFC_LSV2npl_C__G - Lambdasonde vor Kat (Bank 2), Signal unplausibel |
| 0x1169 | DFES_DTCO_DFC_LSV2sig_C__G - Lambdasonde vor Kat (Bank 2), Nebenschluss Signalpfad mit Heizer |
| 0x0133 | DFES_DTCO_DFC_LSVmin_C__G - Lambdasonde vor Kat, langsame Sonde |
| 0x0130 | DFES_DTCO_DFC_LSVnpl_C__G - Lambdasonde vor Kat, Signal unplausibel |
| 0x0134 | DFES_DTCO_DFC_LSVsig_C__G - Lambdasonde vor Kat, Nebenschluss Signalpfad mit Heizer |
| 0x1605 | DFES_DTCO_DFC_MDBmax_C__G - Momentbegrenzung Ebene 1, maximal zulässiges Sollmoment wird dauerhaft überschritten |
| 0x111C | DFES_DTCO_DFC_MSLAM2max_C__G - Massenstrom, Plausibilisierung  (Bank 2), Schwelle überschritten |
| 0x111D | DFES_DTCO_DFC_MSLAM2min_C__G - Massenstrom, Plausibilisierung  (Bank 2), Schwelle unterschritten |
| 0x111A | DFES_DTCO_DFC_MSLAMmax_C__G - Massenstrom, Plausibilisierung, Schwelle überschritten |
| 0x111B | DFES_DTCO_DFC_MSLAMmin_C__G - Massenstrom, Plausibilisierung, Schwelle unterschritten |
| 0x4ED3 | DFES_DTCO_DFC_NWKWmax_C__G - Fehler Zuordnung Nockenwelle zu Kurbelwelle, Signal oberhalb Schwelle |
| 0x4ED4 | DFES_DTCO_DFC_NWKWmin_C__G - Fehler Zuordnung Nockenwelle zu Kurbelwelle, Signal unterhalb Schwelle |
| 0x4ED5 | DFES_DTCO_DFC_NWKWnpl_C__G - Fehler Zuordnung Nockenwelle zu Kurbelwelle, unplausibel |
| 0x4ED6 | DFES_DTCO_DFC_NWKWsig_C__G - Fehler Zuordnung Nockenwelle zu Kurbelwelle, kein Signal |
| 0x4ED7 | DFES_DTCO_DFC_PDDSSmax_C__G - Fehler Druck Differenzdrucksensor Saugrohr, Signal oberhalb Schwelle |
| 0x4ED8 | DFES_DTCO_DFC_PDDSSmin_C__G - Fehler Druck Differenzdrucksensor Saugrohr, Signal unterhalb Schwelle |
| 0x4ED9 | DFES_DTCO_DFC_PDDSSnpl_C__G - Fehler Druck Differenzdrucksensor Saugrohr, unplausibel |
| 0x4EDA | DFES_DTCO_DFC_PDDSSsig_C__G - Fehler Druck Differenzdrucksensor Saugrohr, kein Signal |
| 0x2099 | DFES_DTCO_DFC_PLLSU2max_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat (Bank 2), System zu fett |
| 0x2098 | DFES_DTCO_DFC_PLLSU2min_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat (Bank 2), System zu mager |
| 0x2197 | DFES_DTCO_DFC_PLLSU2npl_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat (Bank 2), Signal zu mager |
| 0x2198 | DFES_DTCO_DFC_PLLSU2sig_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat (Bank 2), Signal zu fett |
| 0x2097 | DFES_DTCO_DFC_PLLSUmax_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat, System zu fett |
| 0x2096 | DFES_DTCO_DFC_PLLSUmin_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat, System zu mager |
| 0x2195 | DFES_DTCO_DFC_PLLSUnpl_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat, Signal zu mager |
| 0x2196 | DFES_DTCO_DFC_PLLSUsig_C__G - Plausibilitätsdiagnose LSU durch LSH Nachkat, Signal zu fett |
| 0x0520 | DFES_DTCO_DFC_POELSnpl_C__G - Öldruckschalter, Plausibilität, Leitunsunterbrechung |
| 0x2229 | DFES_DTCO_DFC_PUEmax_C__G - Umgebungsdrucksensor, Max-Fehler Umgebungsdrucksensor |
| 0x2228 | DFES_DTCO_DFC_PUEmin_C__G - Umgebungsdrucksensor, Min-Fehler Umgebungsdrucksensor |
| 0x2227 | DFES_DTCO_DFC_PUEnpl_C__G - Umgebungsdrucksensor, unplausibel |
| 0x4EDB | DFES_DTCO_DFC_PUEsig_C__G - Umgebungsdrucksensor elektrisch, kein Signal |
| 0x4EDC | DFES_DTCO_DFC_PUmax_C__G - Umgebungsdrucksensor, Signal oberhalb Schwelle |
| 0x4EDD | DFES_DTCO_DFC_PUmin_C__G - Umgebungsdrucksensor, Signal unterhalb Schwelle |
| 0x4EDE | DFES_DTCO_DFC_PUnpl_C__G - Umgebungsdrucksensor, unplausibel |
| 0x4EDF | DFES_DTCO_DFC_PURmax_C__G - Fehler PUR, Signal oberhalb Schwelle |
| 0x4EE0 | DFES_DTCO_DFC_PURmin_C__G - Fehler PUR, Signal unterhalb Schwelle |
| 0x4EE1 | DFES_DTCO_DFC_PURnpl_C__G - Fehler PUR, unplausibel |
| 0x4EE2 | DFES_DTCO_DFC_PURsig_C__G - Fehler PUR, kein Signal |
| 0x4EE3 | DFES_DTCO_DFC_PUsig_C__G - Umgebungsdrucksensor, kein Signal |
| 0x4EE4 | DFES_DTCO_DFC_RKAT2max_C__G - Gemischadaption RKAT (additive Korrektur pro Zeit), Bank 2, Signal oberhalb Schwelle |
| 0x4EE5 | DFES_DTCO_DFC_RKAT2min_C__G - Gemischadaption RKAT (additive Korrektur pro Zeit), Bank 2, Signal unterhalb Schwelle |
| 0x4EE6 | DFES_DTCO_DFC_RKATmax_C__G - Gemischadaption RKAT (additive Korrektur pro Zeit), Signal oberhalb Schwelle |
| 0x4EE7 | DFES_DTCO_DFC_RKATmin_C__G - Gemischadaption RKAT (additive Korrektur pro Zeit), Signal unterhalb Schwelle |
| 0x4EE8 | DFES_DTCO_DFC_RKAZ2max_C__G - Gemischadaption RKAZ (additive Korrektur pro Zündung), Bank 2, Signal oberhalb Schwelle |
| 0x4EE9 | DFES_DTCO_DFC_RKAZ2min_C__G - Gemischadaption RKAZ (additive Korrektur pro Zündung), Bank 2, Signal unterhalb Schwelle |
| 0x4EEA | DFES_DTCO_DFC_RKAZmax_C__G - Gemischadaption RKAZ (additive Korrektur pro Zündung), Signal oberhalb Schwelle |
| 0x4EEB | DFES_DTCO_DFC_RKAZmin_C__G - Gemischadaption RKAZ (additive Korrektur pro Zündung), Signal unterhalb Schwelle |
| 0x140C | DFES_DTCO_DFC_SLS2max_C__G - Sekundärluftsystem Bank 2, Sekundärluftmasse und Summe Sekundärluftmasse Bank 1 und Bank 2 zu gering |
| 0x0492 | DFES_DTCO_DFC_SLS2min_C__G - Sekundärluftsystem Bank 2, Sekundärluftmasse zu gering |
| 0x140A | DFES_DTCO_DFC_SLS2npl_C__G - Sekundärluftsystem Bank 2, Summe Sekundärluftmasse Bank 1 und Bank 2 zu gering |
| 0x4EEC | DFES_DTCO_DFC_SLS2sig_C__G - Sekundärluftsystem Bank 2, kein Signal |
| 0x140B | DFES_DTCO_DFC_SLSmax_C__G - Sekundärluftsystem, Sekundärluftmasse und Summe Sekundärluftmasse Bank 1 und Bank 2 zu gering |
| 0x0491 | DFES_DTCO_DFC_SLSmin_C__G - Sekundärluftsystem, Sekundärluftmasse zu gering |
| 0x4EED | DFES_DTCO_DFC_SLSsig_C__G - Sekundärluftsystem, kein Signal |
| 0x4EEE | DFES_DTCO_DFC_SLV2max_C__G - Sekundärluftventil, Bank 2, Kurzschluss nach Plus |
| 0x4EEF | DFES_DTCO_DFC_SLV2min_C__G - Sekundärluftventil, Bank 2, Kurzschluss nach Minus |
| 0x4EF0 | DFES_DTCO_DFC_SLV2npl_C__G - Sekundärluftventil, Bank 2, unplausibel |
| 0x4EF1 | DFES_DTCO_DFC_SLV2sig_C__G - Sekundärluftventil, Bank 2, Leitungsunterbrechung |
| 0x0412 | DFES_DTCO_DFC_SLVmax_C__G - Sekundärluftventil, Kurzschluss nach Plus |
| 0x0414 | DFES_DTCO_DFC_SLVmin_C__G - Sekundärluftventil, Kurzschluss nach Minus |
| 0x4EF2 | DFES_DTCO_DFC_SLVnpl_C__G - Sekundärluftventil, unplausibel |
| 0x0413 | DFES_DTCO_DFC_SLVsig_C__G - Sekundärluftventil, Leitungsunterbrechung |
| 0x4EF3 | DFES_DTCO_DFC_SWReset_0_C__G - Visibility of SoftwareResets in DSM |
| 0x4EF4 | DFES_DTCO_DFC_SWReset_1_C__G - Visibility of SoftwareResets in DSM |
| 0x4EF5 | DFES_DTCO_DFC_SWReset_2_C__G - Visibility of SoftwareResets in DSM |
| 0x0113 | DFES_DTCO_DFC_TAmax_C__G - Ansauglufttemperatur, Kurzschluss nach Minus |
| 0x0112 | DFES_DTCO_DFC_TAmin_C__G - Ansauglufttemperatur, Kurzschluss nach Plus |
| 0x0111 | DFES_DTCO_DFC_TAnpl_C__G - Ansauglufttemperatur, unplausibel |
| 0x4EF6 | DFES_DTCO_DFC_TAsig_C__G - Ansauglufttemperatur, kein Signal |
| 0x4EF7 | DFES_DTCO_DFC_TASRmax_C__G - Ansauglufttemperatur (hinten DK), Signal oberhalb Schwelle |
| 0x4EF8 | DFES_DTCO_DFC_TASRmin_C__G - Ansauglufttemperatur (hinten DK), Signal unterhalb Schwelle |
| 0x4EF9 | DFES_DTCO_DFC_TASRnpl_C__G - Ansauglufttemperatur (hinten DK), unplausibel |
| 0x4EFA | DFES_DTCO_DFC_TASRsig_C__G - Ansauglufttemperatur (hinten DK), kein Signal |
| 0x4EFB | DFES_DTCO_DFC_TAVDKmax_C__G - Ansauglufttemperatur (vor DK), Signal oberhalb Schwelle |
| 0x4EFC | DFES_DTCO_DFC_TAVDKmin_C__G - Ansauglufttemperatur (vor DK), Signal unterhalb Schwelle |
| 0x4EFD | DFES_DTCO_DFC_TAVDKnpl_C__G - Ansauglufttemperatur (vor DK), unplausibel |
| 0x4EFE | DFES_DTCO_DFC_TAVDKsig_C__G - Ansauglufttemperatur (vor DK), kein Signal |
| 0x0441 | DFES_DTCO_DFC_TESmin_C__G - Tankentlüftung functional check |
| 0x0118 | DFES_DTCO_DFC_TMmax_C__G - Temperaturfühler Motorkühlmittel, Kurzschluss nach Minus |
| 0x0117 | DFES_DTCO_DFC_TMmin_C__G - Temperaturfühler Motorkühlmittel, Kurzschluss nach Plus |
| 0x0116 | DFES_DTCO_DFC_TMnpl_C__G - Temperaturfühler Motorkühlmittel, Motortemperatursignal unplausibe |
| 0x0115 | DFES_DTCO_DFC_TMsig_C__G - Temperaturfühler Motorkühlmittel, Motortemperaturschwelle für Lambdaregelungsfreigabe nicht erreicht |
| 0x4EFF | DFES_DTCO_DFC_TSGmax_C__G - SG-Innentemperatursensor, Signal oberhalb Schwelle |
| 0x4F00 | DFES_DTCO_DFC_TSGmin_C__G - SG-Innentemperatursensor, Signal unterhalb Schwelle |
| 0x4F01 | DFES_DTCO_DFC_TSGnpl_C__G - SG-Innentemperatursensor, unplausibel |
| 0x4F02 | DFES_DTCO_DFC_TSGsig_C__G - SG-Innentemperatursensor, kein Signal |
| 0x4F03 | DFES_DTCO_DFC_TUMEmax_C__G - Umgebungstemperatur, Signal oberhalb Schwelle |
| 0x4F04 | DFES_DTCO_DFC_TUMEmin_C__G - Umgebungstemperatur, Signal unterhalb Schwelle |
| 0x4F05 | DFES_DTCO_DFC_TUMEnpl_C__G - Umgebungstemperatur, unplausibel |
| 0x4F06 | DFES_DTCO_DFC_TUMEsig_C__G - Umgebungstemperatur, kein Signal |
| 0x4F07 | DFES_DTCO_DFC_TUMmax_C__G - Umgebungstemperatur, Signal oberhalb Schwelle |
| 0x4F08 | DFES_DTCO_DFC_TUMmin_C__G - Umgebungstemperatur, Signal unterhalb Schwelle |
| 0x4F09 | DFES_DTCO_DFC_TUMnpl_C__G - Umgebungstemperatur, unplausibel |
| 0x4F0A | DFES_DTCO_DFC_TUMPmax_C__G - Umgebungstemperatur, Plausibilität, Signal oberhalb Schwelle |
| 0x4F0B | DFES_DTCO_DFC_TUMPmin_C__G - Umgebungstemperatur, Plausibilität, Signal unterhalb Schwelle |
| 0x4F0C | DFES_DTCO_DFC_TUMPnpl_C__G - Umgebungstemperatur, Plausibilität, unplausibel |
| 0x4F0D | DFES_DTCO_DFC_TUMPsig_C__G - Umgebungstemperatur, Plausibilität, kein Signal |
| 0x4F0E | DFES_DTCO_DFC_TUMsig_C__G - Umgebungstemperatur, kein Signal |
| 0x4F0F | DFES_DTCO_DFC_UBmax_C__G - Umweltbedingungen, Signal oberhalb Schwelle |
| 0x4F10 | DFES_DTCO_DFC_UBmin_C__G - Umweltbedingungen, Signal unterhalb Schwelle |
| 0x4F11 | DFES_DTCO_DFC_UBnpl_C__G - Umweltbedingungen, unplausibel |
| 0x4F12 | DFES_DTCO_DFC_UBRmax_C__G - Umweltbedingungen, Signal oberhalb Schwelle |
| 0x4F13 | DFES_DTCO_DFC_UBRmin_C__G - Umweltbedingungen, Signal unterhalb Schwelle |
| 0x4F14 | DFES_DTCO_DFC_UBRnpl_C__G - Umweltbedingungen, unplausibel |
| 0x4F15 | DFES_DTCO_DFC_UBRsig_C__G - Umweltbedingungen, kein Signal |
| 0x4F16 | DFES_DTCO_DFC_UBsig_C__G - Umweltbedingungen, kein Signal |
| 0x4F17 | DFES_DTCO_DFC_ULSU2max_C__G - Diagnose Spannungsignal LSU, Bank 2, Signal oberhalb Schwelle |
| 0x4F18 | DFES_DTCO_DFC_ULSU2min_C__G - Diagnose Spannungsignal LSU, Bank 2, Signal unterhalb Schwelle |
| 0x4F19 | DFES_DTCO_DFC_ULSU2npl_C__G - Diagnose Spannungsignal LSU, Bank 2, unplausibel |
| 0x4F1A | DFES_DTCO_DFC_ULSU2sig_C__G - Diagnose Spannungsignal LSU, Bank 2, kein Signal |
| 0x4F1B | DFES_DTCO_DFC_ULSUmax_C__G - Diagnose Spannungsignal LSU, Signal oberhalb Schwelle |
| 0x4F1C | DFES_DTCO_DFC_ULSUmin_C__G - Diagnose Spannungsignal LSU, Signal unterhalb Schwelle |
| 0x4F1D | DFES_DTCO_DFC_ULSUnpl_C__G - Diagnose Spannungsignal LSU, unplausibel |
| 0x4F1E | DFES_DTCO_DFC_ULSUsig_C__G - Diagnose Spannungsignal LSU, kein Signal |
| 0x4F1F | DFES_DTCO_DFC_VVTLRUmax_C__G - VVT-Stellgliedüberwachung, |
| 0x1029 | DFES_DTCO_DFC_VVTLRUmin_C__G - VVT-Stellgliedüberwachung, Temperatur E-Motor zu hoch |
| 0x1031 | DFES_DTCO_DFC_VVTLRUnpl_C__G - VVT-Stellgliedüberwachung, Drehrichtungserkennung |
| 0x1030 | DFES_DTCO_DFC_VVTLRUsig_C__G - VVT-Stellgliedüberwachung, Lagereglerüberwachung |
| 0x4F20 | DFES_DTCO_DFC_X135max_C__G - Botschaft (Status Crashabschaltung EKP, 135) |
| 0x4F21 | DFES_DTCO_DFC_X135min_C__G - Botschaft (Status Crashabschaltung EKP, 135) |
| 0x4F22 | DFES_DTCO_DFC_X135npl_C__G - Botschaft (Status Crashabschaltung EKP, 135) |
| 0x112D | DFES_DTCO_DFC_X135sig_C__G - Botschaft (Status Crashabschaltung EKP, 135), Timeout CAN-Kommunikation |
| 0x4F23 | DFES_DTCO_DFC_X315max_C__G - Botschaft (Fahrzeugmodus, 315) |
| 0x4F24 | DFES_DTCO_DFC_X315min_C__G - Botschaft (Fahrzeugmodus, 315) |
| 0x1116 | DFES_DTCO_DFC_X315npl_C__G - Botschaft (Fahrzeugmodus, 315), Prüfsumme ungleich errechnetem Wert |
| 0x1115 | DFES_DTCO_DFC_X315sig_C__G - Botschaft (Fahrzeugmodus, 315), Timeout CAN-Kommunikation |
| 0x4F25 | DFES_DTCO_DFC_X334max_C__G - Botschaftsüberwachung: Ladespannung Powermodul |
| 0x4F26 | DFES_DTCO_DFC_X334min_C__G - Botschaftsüberwachung: Ladespannung Powermodul |
| 0x4F27 | DFES_DTCO_DFC_X334npl_C__G - Botschaftsüberwachung: Ladespannung Powermodul |
| 0x1122 | DFES_DTCO_DFC_X334sig_C__G - Botschaftsüberwachung: Ladespannung Powermodul, Timeout CAN-Kommunikation |
| 0x4F28 | DFES_DTCO_DFC_X3B0max_C__G - Botschaftsüberwachung: Rückwärtsgang |
| 0x4F29 | DFES_DTCO_DFC_X3B0min_C__G - Botschaftsüberwachung: Rückwärtsgang |
| 0x4F2A | DFES_DTCO_DFC_X3B0npl_C__G - Botschaftsüberwachung: Rückwärtsgang |
| 0x1129 | DFES_DTCO_DFC_X3B0sig_C__G - Botschaftsüberwachung: Rückwärtsgang, Timeout CAN-Kommunikation |
| 0x4F2B | DFES_DTCO_DFC_X3B4max_C__G - Botschaftsüberwachung: Batteriespannung Powermodul |
| 0x4F2C | DFES_DTCO_DFC_X3B4min_C__G - Botschaftsüberwachung: Batteriespannung Powermodul |
| 0x4F2D | DFES_DTCO_DFC_X3B4npl_C__G - Botschaftsüberwachung: Batteriespannung Powermodul |
| 0x1121 | DFES_DTCO_DFC_X3B4sig_C__G - Botschaftsüberwachung: Batteriespannung Powermodul, Timeout CAN-Kommunikation |
| 0x4F2E | DFES_DTCO_DFC_X3B5max_C__G - Botschaftsüberwachung: Status Wasserventil |
| 0x4F2F | DFES_DTCO_DFC_X3B5min_C__G - Botschaftsüberwachung: Status Wasserventil |
| 0x4F30 | DFES_DTCO_DFC_X3B5npl_C__G - Botschaftsüberwachung: Status Wasserventil |
| 0x4F31 | DFES_DTCO_DFC_X3B5sig_C__G - Botschaftsüberwachung: Status Wasserventil |
| 0x4F32 | DFES_DTCO_DFC_XC4max_C__G - Botschaftsüberwachung: Lenkradwinkel Schaltzentrum Lenksäule |
| 0x4F33 | DFES_DTCO_DFC_XC4min_C__G - Botschaftsüberwachung: Lenkradwinkel Schaltzentrum Lenksäule |
| 0x4F34 | DFES_DTCO_DFC_XC4npl_C__G - Botschaftsüberwachung: Lenkradwinkel Schaltzentrum Lenksäule |
| 0x2091 | DFES_DTCO_DFC_ANWSEmax_C__G - Nockenwellenversteller Auslass (Bank 1) - Kurzschluss nach Plus |
| 0x2090 | DFES_DTCO_DFC_ANWSEmin_C__G - Nockenwellenversteller Auslass (Bank 1) - Kurzschluss nach Minus |
| 0x0013 | DFES_DTCO_DFC_ANWSEsig_C__G - Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung |
| 0x2089 | DFES_DTCO_DFC_ENWSEmax_C__G - Nockenwellenversteller Einlass (Bank 1) - Kurzschluss nach Plus |
| 0x2088 | DFES_DTCO_DFC_ENWSEmin_C__G - Nockenwellenversteller Einlass (Bank 1) - Kurzschluss nach Minus |
| 0x0010 | DFES_DTCO_DFC_ENWSEsig_C__G - Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung |
| 0x0052 | DFES_DTCO_DFC_HSVE2max_C__G - Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Kurzschluss nach Plus |
| 0x0051 | DFES_DTCO_DFC_HSVE2min_C__G - Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Kurzschluss nach Minus |
| 0x0050 | DFES_DTCO_DFC_HSVE2sig_C__G - Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Leitungsunterbrechung |
| 0x0512 | DFES_DTCO_DFC_STAsig_C__G - Startautomatik - Fehlfunktion - Signalfehler |
| 0x1650 | DFES_DTCO_DFC_STSsig_C__G - Start in laufendem Motor |
| 0x4F35 | DFES_DTCO_DFC_ANWSE2max_C__G - Nockenwellenversteller Auslass (Bank 2) - Kurzschluss nach Plus |
| 0x4F36 | DFES_DTCO_DFC_ANWSE2min_C__G - Nockenwellenversteller Auslass (Bank 2) - Kurzschluss nach Minus |
| 0x4F37 | DFES_DTCO_DFC_ANWSE2npl_C__G - Nockenwellenversteller Auslass (Bank 2) - Unplausibel |
| 0x4F38 | DFES_DTCO_DFC_ANWSE2sig_C__G - Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung |
| 0x4F39 | DFES_DTCO_DFC_DSACmax_C__G - Drucksensor AC - Kurzschluss nach Plus |
| 0x4F3A | DFES_DTCO_DFC_DSACmin_C__G - Drucksensor AC - Kurzschluss nach Minus |
| 0x4F3B | DFES_DTCO_DFC_DSACnpl_C__G - Drucksensor AC - Unplausibel |
| 0x4F3C | DFES_DTCO_DFC_DSACsig_C__G - Drucksensor AC - Leitungsunterbrechung |
| 0x4F3D | DFES_DTCO_DFC_ENWSE2max_C__G - Nockenwellenversteller Einlass (Bank 2) - Kurzschluss nach Plus |
| 0x4F3E | DFES_DTCO_DFC_ENWSE2min_C__G - Nockenwellenversteller Einlass (Bank 2) - Kurzschluss nach Minus |
| 0x4F3F | DFES_DTCO_DFC_ENWSE2npl_C__G - Nockenwellenversteller Einlass (Bank 2) - Unplausibel |
| 0x4F40 | DFES_DTCO_DFC_ENWSE2sig_C__G - Nockenwellenversteller Einlass (Bank 2) - Leitungsunterbrechung |
| 0x4F41 | DFES_DTCO_DFC_LUES1Emax_C__G - Lüftersteuerung 1 Endstufe - Kurzschluss nach Plus |
| 0x4F42 | DFES_DTCO_DFC_LUES1Emin_C__G - Lüftersteuerung 1 Endstufe - Kurzschluss nach Minus |
| 0x4F43 | DFES_DTCO_DFC_LUES1Enpl_C__G - Lüftersteuerung 1 Endstufe - Unplausibel |
| 0x4F44 | DFES_DTCO_DFC_LUES1Esig_C__G - Lüftersteuerung 1 Endstufe - Leitungsunterbrechung |
| 0x4F45 | DFES_DTCO_DFC_LUES2Emax_C__G - Lüftersteuerung 2 Endstufe - Kurzschluss nach Plus |
| 0x4F46 | DFES_DTCO_DFC_LUES2Emin_C__G - Lüftersteuerung 2 Endstufe - Kurzschluss nach Minus |
| 0x4F47 | DFES_DTCO_DFC_LUES2Enpl_C__G - Lüftersteuerung 2 Endstufe - Unplausibel |
| 0x4F48 | DFES_DTCO_DFC_LUES2Esig_C__G - Lüftersteuerung 2 Endstufe - Leitungsunterbrechung |
| 0x4F49 | DFES_DTCO_DFC_TAEmax_C__G - Ansauglufttemperatur TANS (-Ladeluft) / out of range check - Kurzschluss nach Plus |
| 0x4F4A | DFES_DTCO_DFC_TAEmin_C__G - Ansauglufttemperatur TANS (-Ladeluft) / out of range check - Kurzschluss nach Minus |
| 0x4F4B | DFES_DTCO_DFC_TAEnpl_C__G - Ansauglufttemperatur TANS (-Ladeluft) / out of range check - Unplausibel |
| 0x4F4C | DFES_DTCO_DFC_TAEsig_C__G - Ansauglufttemperatur TANS (-Ladeluft) / out of range check - Leitungsunterbrechung |
| 0x4F4D | DFES_DTCO_DFC_TARmax_C__G - Ansauglufttemperatur TANS (-Ladeluft) / rationality check - Kurzschluss nach Plus |
| 0x4F4E | DFES_DTCO_DFC_TARmin_C__G - Ansauglufttemperatur TANS (-Ladeluft) / rationality check - Kurzschluss nach Minus |
| 0x4F4F | DFES_DTCO_DFC_TARnpl_C__G - Ansauglufttemperatur TANS (-Ladeluft) / rationality check - Unplausibel |
| 0x4F50 | DFES_DTCO_DFC_TARsig_C__G - Ansauglufttemperatur TANS (-Ladeluft) / rationality check - Leitungsunterbrechung |
| 0x4F51 | DFES_DTCO_DFC_THMmax_C__G - Thermostat monitoring - Kurzschluss nach Plus |
| 0x4F52 | DFES_DTCO_DFC_THMmin_C__G - Thermostat monitoring - Kurzschluss nach Minus |
| 0x4F53 | DFES_DTCO_DFC_THMnpl_C__G - Thermostat monitoring - Unplausibel |
| 0x4F54 | DFES_DTCO_DFC_THMsig_C__G - Thermostat monitoring - Leitungsunterbrechung |
| 0x4F55 | DFES_DTCO_DFC_TMEmax_C__G - Motortemperatur - Kurzschluss nach Plus |
| 0x4F56 | DFES_DTCO_DFC_TMEmin_C__G - Motortemperatur - Kurzschluss nach Minus |
| 0x4F57 | DFES_DTCO_DFC_TMEnpl_C__G - Motortemperatur - Unplausibel |
| 0x4F58 | DFES_DTCO_DFC_TMEsig_C__G - Motortemperatur - Leitungsunterbrechung |
| 0x4F59 | DFES_DTCO_DFC_TMPmax_C__G - Motortemperatur - Kurzschluss nach Plus |
| 0x4F5A | DFES_DTCO_DFC_TMPmin_C__G - Motortemperatur - Kurzschluss nach Minus |
| 0x4F5B | DFES_DTCO_DFC_TMPnpl_C__G - Motortemperatur - Unplausibel |
| 0x4F5C | DFES_DTCO_DFC_TMPsig_C__G - Motortemperatur - Leitungsunterbrechung |
| 0xFFFF | unbekannter Fehlerort |

### ID_12

| ORT | ORTTEXT |
| --- | --- |
| 0x2712 | P CDKDMMVE - Ansteuerung Magnetventil DM-TL |
| 0x2713 | P CDKLSVV - Vertauschte Lambdasonden |
| 0x2714 | P CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2715 | P CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2716 | P CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x2717 | P CDKHSHE2 - Ansteuerung Heizung Sonde hinter Kat (Bank2) |
| 0x271A | P CDKLSV - Lambda-Sonde vor Kat |
| 0x271B | P CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x271C | P CDKLSH - Lambda-Sonde hinter Kat |
| 0x271D | P CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x271E | P CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x271F | P CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x2720 | P CDKLATV - Lambda-Sondenalterung TV |
| 0x2721 | P CDKLASH - Lambda-Sondenalterung hinter Kat (BAnk1) |
| 0x2722 | P CDKLSV2 - Lambda-Sonde vor Kat(Bank2) |
| 0x2723 | P CDKHSVE2 - Endstufe Heizung Sonde vor Katalysator Bank2 |
| 0x2724 | P CDKLSH2 - Lambda-Sonde hinter Kat (Bank2) |
| 0x2725 | P CDKLATP2 - Lambda-Sondenalterung Periodendauer Bank2 |
| 0x2726 | P CDKLATV2 - Lambda-Sondenalterung TV Bank2 |
| 0x2727 | P CDKLASH2 - Lambda-Sondenalterung hinter Kat (Bank2) |
| 0x2728 | P CDKFRAO - LR-Adaption multiplikativ Bereich2 (Bank1) |
| 0x2729 | P CDKFRAO2 - LR-Adaption multiplikativ Bereich2 (Bank2) |
| 0x272A | P CDKFRAU - LR-Adaption multiplikativ Bereich1 (Bank1) |
| 0x272B | P CDKFRAU2 - LR-Adaption multiplikativ Bereich1 (Bank2) |
| 0x272C | P CDKRKAT - LR-Adaption additiv pro Zeit (Bank1) |
| 0x272D | P CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x272E | P CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x272F | P CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x2731 | P CDKENWS - Nockenwellensteuerung Einlass |
| 0x2732 | P CDKENWS2 - NW-Steuerung Einlass Bank2  |
| 0x2737 | P CDKWFS - EWS3.3 Manipulationsschutz |
| 0x2738 | P CDKKAT - Katalysator-Konvertierung |
| 0x2739 | P CDKKATSP - Katalysator-Konvertierung LSU |
| 0x273A | P CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x273D | P CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x2742 | P CDKMD00 - Aussetzererkennung Zylinder in 1.Zuendreihenfolge |
| 0x2743 | P CDKMD01 - Aussetzererkennung Zylinder in 2.Zuendreihenfolge |
| 0x2744 | P CDKMD02 - Aussetzererkennung Zylinder in 3.Zuendreihenfolge |
| 0x2745 | P CDKMD03 - Aussetzererkennung Zylinder in 4.Zuendreihenfolge |
| 0x2746 | P CDKMD04 - Aussetzererkennung Zyl.6  |
| 0x2747 | P CDKMD05 - Aussetzererkennung Zyl.3  |
| 0x2748 | P CDKMD06 - Aussetzererkennung Zyl.7  |
| 0x2749 | P CDKMD07 - Aussetzererkennung Zyl.2  |
| 0x274E | P CDKMD - Aussetzererkennung Summenfehler |
| 0x2753 | P CDKDZKU0 - Zuendspule Zylinder in 1.Zuendreihenfolge |
| 0x2754 | P CDKDZKU1 - Zuendspule Zylinder in 2.Zuendreihenfolge |
| 0x2755 | P CDKDZKU2 - Zuendspule Zylinder in 3.Zuendreihenfolge |
| 0x2756 | P CDKDZKU3 - Zuendspule Zylinder in 4.Zuendreihenfolge |
| 0x2757 | P CDKDZKU4 - Ueberwachung Zuender 6  |
| 0x2758 | P CDKDZKU5 - Ueberwachung Zuender 3  |
| 0x2759 | P CDKDZKU6 - Ueberwachung Zuender 7  |
| 0x275A | P CDKDZKU7 - Ueberwachung Zuender 2  |
| 0x2760 | P CDKSLS - Sekundaerluftsystem |
| 0x2761 | P CDKSLS2 - Sekundaerluftsystem (Bank2) |
| 0x2762 | P CDKSLV - Sekundaerluftventil |
| 0x2763 | P CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2764 | P CDKSLPE - Sekundaerluftpumperelais |
| 0x2765 | P CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2769 | P CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276B | P CDKSLVE2 - Ansteuerung Sekundaerluftventil Bank2 |
| 0x276D | P CDKTES - Tankentlueftung functional check |
| 0x276E | P CDKTES2 - Tankentlueftung funktional check Bank2 |
| 0x2772 | P CDKTEVE - Tankentlueftungsventil |
| 0x2773 | P CDKTEVE2 - Ansteuerung Tankentlueftungsventil Bank2 |
| 0x2774 | P CDKCUHR - Fehler CAN / relativer Zeitgeber |
| 0x2775 | P CDKUFMV - Momentenueberwachung Ebene 2 |
| 0x2776 | P CDKMFL - Schnittstelle MFL |
| 0x2777 | P CDKUFSKA - Ueberwachung Rechnerfunktion |
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
| 0x278B | P CDKTM - Temperaturfuehler Motorkuehlmittel |
| 0x278C | P CDKTA - Ansauglufttemperatur |
| 0x278D | P CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | P CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x278F | P CDKGLOR - LowRange Signal unplausibel  |
| 0x2790 | P CDKTGET - Getriebetemperatur |
| 0x2791 | P CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | P CDKDVEL - DK Positionsueberwachung |
| 0x2793 | P CDKDVER - DK-Steller Regelbereich |
| 0x2794 | P CDKDVEE - DK-Steller |
| 0x2795 | P CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | P CDKDVEU - Drosselklappen- Adaption |
| 0x2797 | P CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | P CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | P CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | P CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | P CDKTHS - Thermostat, mechanisch |
| 0x279C | P CDKKFT - Thermostat, elektrisch |
| 0x279D | P CDKMLE - Motorluefter |
| 0x279E | P CDKAKRE - Ansteuerung Abgasklappe |
| 0x279F | P CDKLUEA - Ansteuerung LuefterA |
| 0x27A0 | P CDKELS - E-Box Luefter |
| 0x27A4 | P CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x27A6 | P CDKEV1 - Einspritzventil Zylinder in 1. Zylinderreihenfolge |
| 0x27A7 | P CDKEV2 - Einspritzventil Zylinder in 2. Zylinderreihenfolge |
| 0x27A8 | P CDKEV3 - Einspritzventil Zylinder in 3. Zylinderreihenfolge |
| 0x27A9 | P CDKEV4 - Einspritzventil Zylinder in 4. Zylinderreihenfolge |
| 0x27AA | P CDKEV5 - Ansteuerung EV6  |
| 0x27AB | P CDKEV6 - Ansteuerung EV3  |
| 0x27AC | P CDKEV7 - Ansteuerung EV7  |
| 0x27AD | P CDKEV8 - Ansteuerung EV2  |
| 0x27B3 | P CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | P CDKDSU - Drucksensor Umgebung |
| 0x27B5 | P CDKENWSE - Einlass-VANOS |
| 0x27B6 | P CDKENWSE2 - Ansteuerung Einlass-VANOS Bank2 |
| 0x27B7 | P CDKKPE - Kraftstoffpumpen-Relais |
| 0x27B8 | P CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27BB | P CDKANWS - Nockenwellensteuerung Auslass |
| 0x27BC | P CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x27BD | P CDKANWSE - Auslass-VANOS |
| 0x27BE | P CDKANWSE2 - Ansteuerung Auslass-VANOS Bank2 |
| 0x27BF | P CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x27C0 | P CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x27C1 | P CDKPHM - Master Nockenwellengeber |
| 0x27C2 | P CDKKOSE - Klimakompressorsteuerung |
| 0x27C3 | P CDKTOENS - Thermischer Oelniveausensor |
| 0x27C6 | P CDKTESK - Tankleckueberwachung |
| 0x27C8 | P CDKCFC - Check Filler Cap |
| 0x27CA | P CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | P CDKDMTKNM - DM-TL Feinstleck (0,5mm) MIL aus |
| 0x27CC | P CDKDMTK - DM-TL Feinleck |
| 0x27CE | P CDKUFRLIP - Lastsensorueberwachung |
| 0x27CD | P CDKDMTL - DM-TL Modul |
| 0x27D5 | P CDKLLR - Leerlaufregelung |
| 0x27D9 | P CDKDHDMTE - Ansteuerung DM-TL Heizung |
| 0x27DA | P CDKDGEN - BSD Generator |
| 0x27DC | P CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x27E1 | P CDKUFSPSC - Pedalwertgeberueberwachung (Ebene2) |
| 0x27E2 | P CDKKS1 - Klopfsensor1 |
| 0x27E3 | P CDKKS2 - Klopfsensor2 (Bank1) |
| 0x27E4 | P CDKKS3 - Klopfsensor3 |
| 0x27E5 | P CDKKS4 - Klopfsensor4 |
| 0x27E6 | P CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | P CDKKROF - Klopfregelung Offset |
| 0x27E8 | P CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | P CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | P CDKCHDEV  - CAN-Timeout HDEV |
| 0x27EB | P CDKCTXU  - CAN-Timeout TXU |
| 0x27EC | P CDKCGE  -  CAN- Timeout EGS |
| 0x27ED | P CDKCAS  - CAN- Timeout ASC/DSC |
| 0x27EE | P CDKCINS  - CAN- Timeout Instrumentenkombination |
| 0x27EF | P CDKCACC  - CAN ACC Signalfehler |
| 0x27F0 | P CDKAS - Plausibilitaet MSR-Eingriff |
| 0x27F1 | P CDKACC - Plausibilitaet ACC-Eingriff |
| 0x27F2 | P CDKFST - Plausibilitaet Tankfuellstand |
| 0x27F3 | P CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F5 | P CDKCDME - CAN-Timeout DME-Steuergeraet |
| 0x27F6 | P CDKFPP - Pedalwertgeber |
| 0x27F7 | P CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | P CDKFP2P - Pedalwertgeber Poti2 |
| 0x27F9 | P CDKSTAE - Startautomatik Ansteuerung |
| 0x27FA | P CDKSTS - Startautomatik Eingang |
| 0x27FB | P CDKGLFE - Ansteuerung gesteuerte Luftfuehrung |
| 0x27FD | P CDKSTA - Startautomatik |
| 0x27FE | P CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | P CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x280A | P CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x2811 | P CDKCANB - Local CAN |
| 0x2812 | P CDKTOL - Oeltemperaturfuehler |
| 0x2813 | P CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | P CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | P CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | P CDKUFNC - Motordrehzahlueberwachung |
| 0x2818 | P CDKULSU - Spannungsueberwachung Sonde an Luft |
| 0x281C | P CDKBSD - BSD-Leitungsfehler |
| 0x281E | P CDKSUE - DISA |
| 0x281F | P CDKULSU2 - Spannungsueberwachung Sonde an Luft Bank2 |
| 0x2820 | P CDKDISA - Fehler DISA |
| 0x2821 | P CDKDISAT - DISA Temperaturwarnschwelle Motorschutzmodell |
| 0x2822 | P CDKMTOEL - Zwangsschaltung EGS |
| 0x2823 | P CDKHSVSA - Heizung Lambdasonde vor Kat (Schubspannung) |
| 0x2824 | P CDKHSVSA2 - Heizung Lambdasonde vor Kat (Schubspannung) Bank2 |
| 0x2825 | P CDKLAVH - Lambdasondenalterung hinter Kat (VL- Prüfung) |
| 0x2827 | P CDKHELSU - Heizereinkopplung auf Signalpfad |
| 0x2828 | P CDKCARS  - CAN ARS Signalfehler |
| 0x2829 | P CDKCCAS  - CAN CAS Signalfehler |
| 0x282A | P CDKCIHKA  - CAN IHKA Signalfehler |
| 0x282B | P CDKCPWML  - CAN PWML Signalfehler |
| 0x282C | P CDKCSZL  - CAN  SZL Signalfehler |
| 0x282D | P CDKHELSU2 - Heizereinkopplung auf Signalpfad Bank2 |
| 0x282E | P CDKBWL  - PWG-Bewegung |
| 0x2830 | P CDKLAVH2 - Lambdasondenalterung hinter Kat Bank2 |
| 0x2832 | P CDKPLLSU2 - Plausibilitaetsdiagnose LSU durch LSH Nachkat B2 |
| 0x2833 | P CDKICLSU2 - Eigendiagnose CJ125 SPI Kommunikation Bank2 |
| 0x2834 | P CDKLSUIP2 - Leitungsunterbrechung an Pumpstrom Bank2 |
| 0x2835 | P CDKLSUKS2 - Kurzschluss Sondenleitungen gegen Masse o. Ub B2 |
| 0x2836 | P CDKDYLSU2 - LSU dynamisch zu langsam Bank2 |
| 0x283A | P CDKOEZS - Fehler Oelqualitaetssensor |
| 0x283D | P CDKCANA - PT- CAN |
| 0x283E | P CDKVVTE - VVT-Enable Ansteuerung |
| 0x283F | P CDKPOELS - Oeldruckschalter |
| 0x2841 | P CDKLUVE - Luftumfasste Einspritzventile Ansteuerung |
| 0x2843 | P CDKPLLSU - Plausibilitaetsdiagnose LSU durch LSH Nachkat |
| 0x2844 | P CDKICLSU - Eigendiagnose CJ125 SPI Kommunikation |
| 0x2849 | P CDKLSUIP - Leitungsunterbrechung an Pumpstrom |
| 0x284A | P CDKLSUKS - Kurzschluss Sondenleitungen gegen Masse oder Ub |
| 0x284C | P CDKDYLSU - LSU dynamisch zu langsam |
| 0x284F | P CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft  |
| 0x2850 | P CDKDVFFS - VVT-Fuehrungssensor |
| 0x2851 | P CDKDVFFS2 - VVT-Fuehrungssensor (Bank2) |
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
| 0x285F | P CDKDVFSG2 - VVT-Steuergeraet interner Fehler (Bank2) |
| 0x2860 | P CDKDVEST - VVT-Ansteuerung |
| 0x2861 | P CDKDVEST2 - VVT-Endstufe (Bank2) |
| 0x2862 | P CDKDVULV - VVT-Leistungsversorgung |
| 0x2863 | P CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x2864 | P CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler |
| 0x2865 | P CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | P CDKDVALRN - VVT-Anschlaege lernen notwendig |
| 0x2867 | P CDKDVOVL - VVT-Systemueberlast |
| 0x2868 | P CDKDVOVL2 - VVT-Systemueberlast Bank2 |
| 0x287C | P CDKDSS - Drucksensor Saugrohr |
| 0x2880 | P CDKAGRS - AGR System |
| 0x2889 | P CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x2893 | P CDKTSG - DME- Temperatur |
| 0x28C8 | P CDKFRST - LR-Abweichung  |
| 0x28C9 | P CDKFRST2 - LR-Abweichung Bank2 |
| 0x28D2 | P CDKDSL - Drucksensor Ladedruck |
| 0x28D3 | P CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x28D4 | P CDKLDE - Ladedrucksteuerventil Ansteuerung |
| 0x28D5 | P CDKUVSE - Ansteuerung Umluftventil Turbo |
| 0x28D6 | P CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | P CDKDGENBS - Generatorkommunikation |
| 0x28D8 | P CDKNVRBUP - RAM Backup |
| 0x28D9 | P CDKEZH - Elektrischer Zusatzheizer |
| 0x28DA | P CDKCEZ - CAN- Timeout Elektrischer Zusatzheizer |
| 0x28DB | P CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x28DC | P CDKDGENB2 - Generator 2 Kommunikation |
| 0x2907 | P CDKAGRF - AGR Ventil |
| 0x2908 | P CDKCDSC - CAN Timeout DSG SG |
| 0x2909 | P CDKCEGS - CAN Timeout Getriebesteuergeraet |
| 0x290A | P CDKCAFS - Active Front Steering Moment |
| 0x292B | P CDKLSUIA - LSU Abgleichsleitung |
| 0x292C | P CDKLSUIA2 - LSU Abgleichsleitung Bank2 |
| 0x292D | P CDKLSUUN - LSU Nernst Zelle Unterbrechung |
| 0x292E | P CDKLSUUN2 - LSU Nernst Zelle Unterbrechung Bank2 |
| 0x2930 | P CDKLSUVM - LSU virtuelle Masse Unterbrechung |
| 0x2931 | P CDKLSUVM2 - LSU virtuelle Masse Unterbrechung Bank2 |
| 0x2936 | P CDKUFPR - Kraftstoffdrucksensor |
| 0x2937 | P CDKUFRKC - Funktionsüberwachung: Lambda-Plausibilisierung |
| 0x296B | P CDKLSHV - Vertauschte Lambdasonden hinter Kat |
| 0x2972 | P CDKBKVPE - Saugstrahlpumpe für Bremskraftverstärker |
| 0x297D | P CDKCSSG - CAN SSG Signalfehler |
| 0x2981 | P CDKGLFE - Ansteuerung gesteuerte Luftfuehrung |
| 0x299B | P CDKIBSK - IBS Kommunikation |
| 0x299C | P CDKIBSA - IBS Allgemeine Fehler |
| 0x299D | P CDKIBSP - IBS Plausibilitaet |
| 0x29A8 | P CDKPMBN - Powermanagement Netzwerkfehler |
| 0x29A9 | P CDKPMBAT - Powermanagement |
| 0x29AE | P CDKTESG - Tankentlüftungssystem Grobleck |
| 0x2A70 | P CDKDIVVT - Fehler Stromplausibilisierung |
| 0x2A71 | P CDKVVTRE - Endstufendiagnose Entlastungsrelais VVT |
| 0x2B9D | P CDKWDA - Ueberspanungserkennung auf VCC |
| 0xCD87 | P CDKCANA - PT - CAN Bus Off |
| 0xCD8B | P CDKCANB - Local CAN Bus Off |
| 0xCD9B | P CDKX315 - Status Fahrzeugmodus |
| 0xCDA1 | P CDKXC4 - Lenkradwinkel |
| 0xCDA2 | P CDKX3B4 - Powermanagement Batteriespannung |
| 0xCDA3 | P CDKX334 - Powermanagement Ladespannung |
| 0xCDA7 | P CDKX3B0 - Status Gang Rückwärts |
| 0xCDAA | P CDKX135 - Steuerung Crashabschaltung EKP |
| 0xCDAC | P CDKX3B5 - Status Wasserventil |
| 0x2712 | P CDKDMMVE - Ansteuerung Magnetventil DM-TL |
| 0x2713 | P CDKLSVV - Vertauschte Lambdasonden |
| 0x2714 | P CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2715 | P CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2716 | P CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x2717 | P CDKHSHE2 - Ansteuerung Heizung Sonde hinter Kat (Bank2) |
| 0x271A | P CDKLSV - Lambda-Sonde vor Kat |
| 0x271B | P CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x271C | P CDKLSH - Lambda-Sonde hinter Kat |
| 0x271D | P CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x271E | P CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x271F | P CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x2720 | P CDKLATV - Lambda-Sondenalterung TV |
| 0x2721 | P CDKLASH - Lambda-Sondenalterung hinter Kat (BAnk1) |
| 0x2722 | P CDKLSV2 - Lambda-Sonde vor Kat(Bank2) |
| 0x2723 | P CDKHSVE2 - Endstufe Heizung Sonde vor Katalysator Bank2 |
| 0x2724 | P CDKLSH2 - Lambda-Sonde hinter Kat (Bank2) |
| 0x2725 | P CDKLATP2 - Lambda-Sondenalterung Periodendauer Bank2 |
| 0x2726 | P CDKLATV2 - Lambda-Sondenalterung TV Bank2 |
| 0x2727 | P CDKLASH2 - Lambda-Sondenalterung hinter Kat (Bank2) |
| 0x2728 | P CDKFRAO - LR-Adaption multiplikativ Bereich2 (Bank1) |
| 0x2729 | P CDKFRAO2 - LR-Adaption multiplikativ Bereich2 (Bank2) |
| 0x272A | P CDKFRAU - LR-Adaption multiplikativ Bereich1 (Bank1) |
| 0x272B | P CDKFRAU2 - LR-Adaption multiplikativ Bereich1 (Bank2) |
| 0x272C | P CDKRKAT - LR-Adaption additiv pro Zeit (Bank1) |
| 0x272D | P CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x272E | P CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x272F | P CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x2731 | P CDKENWS - Nockenwellensteuerung Einlass |
| 0x2732 | P CDKENWS2 - NW-Steuerung Einlass Bank2  |
| 0x2737 | P CDKWFS - EWS3.3 Manipulationsschutz |
| 0x2738 | P CDKKAT - Katalysator-Konvertierung |
| 0x2739 | P CDKKATSP - Katalysator-Konvertierung LSU |
| 0x273A | P CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x273D | P CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x2742 | P CDKMD00 - Aussetzererkennung Zylinder in 1.Zuendreihenfolge |
| 0x2743 | P CDKMD01 - Aussetzererkennung Zylinder in 2.Zuendreihenfolge |
| 0x2744 | P CDKMD02 - Aussetzererkennung Zylinder in 3.Zuendreihenfolge |
| 0x2745 | P CDKMD03 - Aussetzererkennung Zylinder in 4.Zuendreihenfolge |
| 0x2746 | P CDKMD04 - Aussetzererkennung Zyl.6  |
| 0x2747 | P CDKMD05 - Aussetzererkennung Zyl.3  |
| 0x2748 | P CDKMD06 - Aussetzererkennung Zyl.7  |
| 0x2749 | P CDKMD07 - Aussetzererkennung Zyl.2  |
| 0x274E | P CDKMD - Aussetzererkennung Summenfehler |
| 0x2753 | P CDKDZKU0 - Zuendspule Zylinder in 1.Zuendreihenfolge |
| 0x2754 | P CDKDZKU1 - Zuendspule Zylinder in 2.Zuendreihenfolge |
| 0x2755 | P CDKDZKU2 - Zuendspule Zylinder in 3.Zuendreihenfolge |
| 0x2756 | P CDKDZKU3 - Zuendspule Zylinder in 4.Zuendreihenfolge |
| 0x2757 | P CDKDZKU4 - Ueberwachung Zuender 6  |
| 0x2758 | P CDKDZKU5 - Ueberwachung Zuender 3  |
| 0x2759 | P CDKDZKU6 - Ueberwachung Zuender 7  |
| 0x275A | P CDKDZKU7 - Ueberwachung Zuender 2  |
| 0x2760 | P CDKSLS - Sekundaerluftsystem |
| 0x2761 | P CDKSLS2 - Sekundaerluftsystem (Bank2) |
| 0x2762 | P CDKSLV - Sekundaerluftventil |
| 0x2763 | P CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2764 | P CDKSLPE - Sekundaerluftpumperelais |
| 0x2765 | P CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2769 | P CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276B | P CDKSLVE2 - Ansteuerung Sekundaerluftventil Bank2 |
| 0x276D | P CDKTES - Tankentlueftung functional check |
| 0x276E | P CDKTES2 - Tankentlueftung funktional check Bank2 |
| 0x2772 | P CDKTEVE - Tankentlueftungsventil |
| 0x2773 | P CDKTEVE2 - Ansteuerung Tankentlueftungsventil Bank2 |
| 0x2774 | P CDKCUHR - Fehler CAN / relativer Zeitgeber |
| 0x2775 | P CDKUFMV - Momentenueberwachung Ebene 2 |
| 0x2776 | P CDKMFL - Schnittstelle MFL |
| 0x2777 | P CDKUFSKA - Ueberwachung Rechnerfunktion |
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
| 0x278B | P CDKTM - Temperaturfuehler Motorkuehlmittel |
| 0x278C | P CDKTA - Ansauglufttemperatur |
| 0x278D | P CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | P CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x278F | P CDKGLOR - LowRange Signal unplausibel  |
| 0x2790 | P CDKTGET - Getriebetemperatur |
| 0x2791 | P CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | P CDKDVEL - DK Positionsueberwachung |
| 0x2793 | P CDKDVER - DK-Steller Regelbereich |
| 0x2794 | P CDKDVEE - DK-Steller |
| 0x2795 | P CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | P CDKDVEU - Drosselklappen- Adaption |
| 0x2797 | P CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | P CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | P CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | P CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | P CDKTHS - Thermostat, mechanisch |
| 0x279C | P CDKKFT - Thermostat, elektrisch |
| 0x279D | P CDKMLE - Motorluefter |
| 0x279E | P CDKAKRE - Ansteuerung Abgasklappe |
| 0x279F | P CDKLUEA - Ansteuerung LuefterA |
| 0x27A0 | P CDKELS - E-Box Luefter |
| 0x27A4 | P CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x27A6 | P CDKEV1 - Einspritzventil Zylinder in 1. Zylinderreihenfolge |
| 0x27A7 | P CDKEV2 - Einspritzventil Zylinder in 2. Zylinderreihenfolge |
| 0x27A8 | P CDKEV3 - Einspritzventil Zylinder in 3. Zylinderreihenfolge |
| 0x27A9 | P CDKEV4 - Einspritzventil Zylinder in 4. Zylinderreihenfolge |
| 0x27AA | P CDKEV5 - Ansteuerung EV6  |
| 0x27AB | P CDKEV6 - Ansteuerung EV3  |
| 0x27AC | P CDKEV7 - Ansteuerung EV7  |
| 0x27AD | P CDKEV8 - Ansteuerung EV2  |
| 0x27B3 | P CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | P CDKDSU - Drucksensor Umgebung |
| 0x27B5 | P CDKENWSE - Einlass-VANOS |
| 0x27B6 | P CDKENWSE2 - Ansteuerung Einlass-VANOS Bank2 |
| 0x27B7 | P CDKKPE - Kraftstoffpumpen-Relais |
| 0x27B8 | P CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27BB | P CDKANWS - Nockenwellensteuerung Auslass |
| 0x27BC | P CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x27BD | P CDKANWSE - Auslass-VANOS |
| 0x27BE | P CDKANWSE2 - Ansteuerung Auslass-VANOS Bank2 |
| 0x27BF | P CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x27C0 | P CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x27C1 | P CDKPHM - Master Nockenwellengeber |
| 0x27C2 | P CDKKOSE - Klimakompressorsteuerung |
| 0x27C3 | P CDKTOENS - Thermischer Oelniveausensor |
| 0x27C6 | P CDKTESK - Tankleckueberwachung |
| 0x27C8 | P CDKCFC - Check Filler Cap |
| 0x27CA | P CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | P CDKDMTKNM - DM-TL Feinstleck (0,5mm) MIL aus |
| 0x27CC | P CDKDMTK - DM-TL Feinleck |
| 0x27CE | P CDKUFRLIP - Lastsensorueberwachung |
| 0x27CD | P CDKDMTL - DM-TL Modul |
| 0x27D5 | P CDKLLR - Leerlaufregelung |
| 0x27D9 | P CDKDHDMTE - Ansteuerung DM-TL Heizung |
| 0x27DA | P CDKDGEN - BSD Generator |
| 0x27DC | P CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x27E1 | P CDKUFSPSC - Pedalwertgeberueberwachung (Ebene2) |
| 0x27E2 | P CDKKS1 - Klopfsensor1 |
| 0x27E3 | P CDKKS2 - Klopfsensor2 (Bank1) |
| 0x27E4 | P CDKKS3 - Klopfsensor3 |
| 0x27E5 | P CDKKS4 - Klopfsensor4 |
| 0x27E6 | P CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | P CDKKROF - Klopfregelung Offset |
| 0x27E8 | P CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | P CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | P CDKCHDEV  - CAN-Timeout HDEV |
| 0x27EB | P CDKCTXU  - CAN-Timeout TXU |
| 0x27EC | P CDKCGE  -  CAN- Timeout EGS |
| 0x27ED | P CDKCAS  - CAN- Timeout ASC/DSC |
| 0x27EE | P CDKCINS  - CAN- Timeout Instrumentenkombination |
| 0x27EF | P CDKCACC  - CAN ACC Signalfehler |
| 0x27F0 | P CDKAS - Plausibilitaet MSR-Eingriff |
| 0x27F1 | P CDKACC - Plausibilitaet ACC-Eingriff |
| 0x27F2 | P CDKFST - Plausibilitaet Tankfuellstand |
| 0x27F3 | P CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F5 | P CDKCDME - CAN-Timeout DME-Steuergeraet |
| 0x27F6 | P CDKFPP - Pedalwertgeber |
| 0x27F7 | P CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | P CDKFP2P - Pedalwertgeber Poti2 |
| 0x27F9 | P CDKSTAE - Startautomatik Ansteuerung |
| 0x27FA | P CDKSTS - Startautomatik Eingang |
| 0x27FB | P CDKGLFE - Ansteuerung gesteuerte Luftfuehrung |
| 0x27FD | P CDKSTA - Startautomatik |
| 0x27FE | P CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | P CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x280A | P CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x2811 | P CDKCANB - Local CAN |
| 0x2812 | P CDKTOL - Oeltemperaturfuehler |
| 0x2813 | P CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | P CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | P CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | P CDKUFNC - Motordrehzahlueberwachung |
| 0x2818 | P CDKULSU - Spannungsueberwachung Sonde an Luft |
| 0x281C | P CDKBSD - BSD-Leitungsfehler |
| 0x281E | P CDKSUE - DISA |
| 0x281F | P CDKULSU2 - Spannungsueberwachung Sonde an Luft Bank2 |
| 0x2820 | P CDKDISA - Fehler DISA |
| 0x2821 | P CDKDISAT - DISA Temperaturwarnschwelle Motorschutzmodell |
| 0x2822 | P CDKMTOEL - Zwangsschaltung EGS |
| 0x2823 | P CDKHSVSA - Heizung Lambdasonde vor Kat (Schubspannung) |
| 0x2824 | P CDKHSVSA2 - Heizung Lambdasonde vor Kat (Schubspannung) Bank2 |
| 0x2825 | P CDKLAVH - Lambdasondenalterung hinter Kat (VL- Prüfung) |
| 0x2827 | P CDKHELSU - Heizereinkopplung auf Signalpfad |
| 0x2828 | P CDKCARS  - CAN ARS Signalfehler |
| 0x2829 | P CDKCCAS  - CAN CAS Signalfehler |
| 0x282A | P CDKCIHKA  - CAN IHKA Signalfehler |
| 0x282B | P CDKCPWML  - CAN PWML Signalfehler |
| 0x282C | P CDKCSZL  - CAN  SZL Signalfehler |
| 0x282D | P CDKHELSU2 - Heizereinkopplung auf Signalpfad Bank2 |
| 0x282E | P CDKBWL  - PWG-Bewegung |
| 0x2830 | P CDKLAVH2 - Lambdasondenalterung hinter Kat Bank2 |
| 0x2832 | P CDKPLLSU2 - Plausibilitaetsdiagnose LSU durch LSH Nachkat B2 |
| 0x2833 | P CDKICLSU2 - Eigendiagnose CJ125 SPI Kommunikation Bank2 |
| 0x2834 | P CDKLSUIP2 - Leitungsunterbrechung an Pumpstrom Bank2 |
| 0x2835 | P CDKLSUKS2 - Kurzschluss Sondenleitungen gegen Masse o. Ub B2 |
| 0x2836 | P CDKDYLSU2 - LSU dynamisch zu langsam Bank2 |
| 0x283A | P CDKOEZS - Fehler Oelqualitaetssensor |
| 0x283D | P CDKCANA - PT- CAN |
| 0x283E | P CDKVVTE - VVT-Enable Ansteuerung |
| 0x283F | P CDKPOELS - Oeldruckschalter |
| 0x2841 | P CDKLUVE - Luftumfasste Einspritzventile Ansteuerung |
| 0x2843 | P CDKPLLSU - Plausibilitaetsdiagnose LSU durch LSH Nachkat |
| 0x2844 | P CDKICLSU - Eigendiagnose CJ125 SPI Kommunikation |
| 0x2849 | P CDKLSUIP - Leitungsunterbrechung an Pumpstrom |
| 0x284A | P CDKLSUKS - Kurzschluss Sondenleitungen gegen Masse oder Ub |
| 0x284C | P CDKDYLSU - LSU dynamisch zu langsam |
| 0x284F | P CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft  |
| 0x2850 | P CDKDVFFS - VVT-Fuehrungssensor |
| 0x2851 | P CDKDVFFS2 - VVT-Fuehrungssensor (Bank2) |
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
| 0x285F | P CDKDVFSG2 - VVT-Steuergeraet interner Fehler (Bank2) |
| 0x2860 | P CDKDVEST - VVT-Ansteuerung |
| 0x2861 | P CDKDVEST2 - VVT-Endstufe (Bank2) |
| 0x2862 | P CDKDVULV - VVT-Leistungsversorgung |
| 0x2863 | P CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x2864 | P CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler |
| 0x2865 | P CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | P CDKDVALRN - VVT-Anschlaege lernen notwendig |
| 0x2867 | P CDKDVOVL - VVT-Systemueberlast |
| 0x2868 | P CDKDVOVL2 - VVT-Systemueberlast Bank2 |
| 0x287C | P CDKDSS - Drucksensor Saugrohr |
| 0x2880 | P CDKAGRS - AGR System |
| 0x2889 | P CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x2893 | P CDKTSG - DME- Temperatur |
| 0x28C8 | P CDKFRST - LR-Abweichung  |
| 0x28C9 | P CDKFRST2 - LR-Abweichung Bank2 |
| 0x28D2 | P CDKDSL - Drucksensor Ladedruck |
| 0x28D3 | P CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x28D4 | P CDKLDE - Ladedrucksteuerventil Ansteuerung |
| 0x28D5 | P CDKUVSE - Ansteuerung Umluftventil Turbo |
| 0x28D6 | P CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | P CDKDGENBS - Generatorkommunikation |
| 0x28D8 | P CDKNVRBUP - RAM Backup |
| 0x28D9 | P CDKEZH - Elektrischer Zusatzheizer |
| 0x28DA | P CDKCEZ - CAN- Timeout Elektrischer Zusatzheizer |
| 0x28DB | P CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x28DC | P CDKDGENB2 - Generator 2 Kommunikation |
| 0x2907 | P CDKAGRF - AGR Ventil |
| 0x2908 | P CDKCDSC - CAN Timeout DSG SG |
| 0x2909 | P CDKCEGS - CAN Timeout Getriebesteuergeraet |
| 0x290A | P CDKCAFS - Active Front Steering Moment |
| 0x292B | P CDKLSUIA - LSU Abgleichsleitung |
| 0x292C | P CDKLSUIA2 - LSU Abgleichsleitung Bank2 |
| 0x292D | P CDKLSUUN - LSU Nernst Zelle Unterbrechung |
| 0x292E | P CDKLSUUN2 - LSU Nernst Zelle Unterbrechung Bank2 |
| 0x2930 | P CDKLSUVM - LSU virtuelle Masse Unterbrechung |
| 0x2931 | P CDKLSUVM2 - LSU virtuelle Masse Unterbrechung Bank2 |
| 0x2936 | P CDKUFPR - Kraftstoffdrucksensor |
| 0x2937 | P CDKUFRKC - Funktionsüberwachung: Lambda-Plausibilisierung |
| 0x296B | P CDKLSHV - Vertauschte Lambdasonden hinter Kat |
| 0x2972 | P CDKBKVPE - Saugstrahlpumpe für Bremskraftverstärker |
| 0x297D | P CDKCSSG - CAN SSG Signalfehler |
| 0x2981 | P CDKGLFE - Ansteuerung gesteuerte Luftfuehrung |
| 0x299B | P CDKIBSK - IBS Kommunikation |
| 0x299C | P CDKIBSA - IBS Allgemeine Fehler |
| 0x299D | P CDKIBSP - IBS Plausibilitaet |
| 0x29A8 | P CDKPMBN - Powermanagement Netzwerkfehler |
| 0x29A9 | P CDKPMBAT - Powermanagement |
| 0x29AE | P CDKTESG - Tankentlüftungssystem Grobleck |
| 0x2A70 | P CDKDIVVT - Fehler Stromplausibilisierung |
| 0x2A71 | P CDKVVTRE - Endstufendiagnose Entlastungsrelais VVT |
| 0x2B9D | P CDKWDA - Ueberspanungserkennung auf VCC |
| 0xCD87 | P CDKCANA - PT - CAN Bus Off |
| 0xCD8B | P CDKCANB - Local CAN Bus Off |
| 0xCD9B | P CDKX315 - Status Fahrzeugmodus |
| 0xCDA1 | P CDKXC4 - Lenkradwinkel |
| 0xCDA2 | P CDKX3B4 - Powermanagement Batteriespannung |
| 0xCDA3 | P CDKX334 - Powermanagement Ladespannung |
| 0xCDA7 | P CDKX3B0 - Status Gang Rückwärts |
| 0xCDAA | P CDKX135 - Steuerung Crashabschaltung EKP |
| 0xCDAC | P CDKX3B5 - Status Wasserventil |
| 0x3E90 | P 3E90  Kurbelwellengeber |
| 0x3E91 | P 3E91  Kurbelwellengeber |
| 0x3EB0 | P 3EB0  Drehzahlberechnung |
| 0x3EC0 | P 3EC0  Nockenwellengeber |
| 0x3EC1 | P 3EC1  Nockenwellengeber |
| 0x3EC7 | P 3EC7  Ueberwachung Master/Slave |
| 0x3EE0 | P 3EE0 (279) Kuehlmitteltemperatursensor |
| 0x3EE1 | P 3EE1 (280) Kuehlmitteltemperatursensor |
| 0x3EE2 | P 3EE2  Kuehlmitteltemperatursensor |
| 0x3EE3 | P 3EE3  Kuehlmitteltemperatursensor |
| 0x3EF3 | P 3EF3 (277) Kuehlmitteltemperatursensor Plausibilitaet |
| 0x3F00 | P 3F00 (568) Ladedruckfuehler |
| 0x3F01 | P 3F01 (567) Ladedruckfuehler |
| 0x3F02 | P 3F02 (565) Ladedruckfuehler |
| 0x3F03 | P 3F03 (566) Ladedruckfuehler |
| 0x3F05 | P 3F05 (1793) MIL OFF |
| 0x3F10 | P 3F10  Fahrpedalmodul Potentiometer 1 |
| 0x3F11 | P 3F11  Fahrpedalmodul Potentiometer 1 |
| 0x3F13 | P 3F13  Fahrpedalmodul Potentiometer 1 |
| 0x3F15 | P 3F15 (1792) MIL On |
| 0x3F20 | P 3F20  Fahrpedalmodul Potentiometer 2 |
| 0x3F21 | P 3F21  Fahrpedalmodul Potentiometer 2 |
| 0x3F23 | P 3F23  Fahrpedalmodul Potentiometer 2 |
| 0x3F25 | P 3F25  Ladeluftschlauch-Ueberwachung |
| 0x3F30 | P 3F30 (403) Raildrucksensor |
| 0x3F31 | P 3F31 (402) Raildrucksensor |
| 0x3F35 | P 3F35  Ladeluftschlauch-Ueberwachung im Leerlauf |
| 0x3F40 | P 3F40 (12288) Raildrucksensor Offset-Test |
| 0x3F41 | P 3F41 (12289) Raildrucksensor Offset-Test |
| 0x3F47 | P 3F47  Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F48 | P 3F48  Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F50 | P 3F50 (1283) Fahrgeschwindigkeitssignal |
| 0x3F52 | P 3F52  Fahrgeschwindigkeitssignal |
| 0x3F53 | P 3F53 (1281) Fahrgeschwindigkeitssignal |
| 0x3F62 | P 3F62 (1280) Fahrgeschwindigkeitssignal ueber CAN |
| 0x3F70 | P 3F70  Ansauglufttemperatursensor |
| 0x3F71 | P 3F71  Ansauglufttemperatursensor |
| 0x3F72 | P 3F72  Ansauglufttemperatursensor |
| 0x3F80 | P 3F80  Umgebungstemperaturfuehler (nv) |
| 0x3F81 | P 3F81  Umgebungstemperaturfuehler (nv) |
| 0x3F82 | P 3F82  Umgebungstemperaturfuehler (nv) |
| 0x3F90 | P 3F90  Oeldrucksensor (nv) |
| 0x3F91 | P 3F91  Oeldrucksensor (nv) |
| 0x3FA0 | P 3FA0  Oeltemperatursensor |
| 0x3FA1 | P 3FA1  Oeltemperatursensor |
| 0x3FA2 | P 3FA2  Oeltemperatursensor |
| 0x3FC0 | P 3FC0 (4705) Luftmassenmesser |
| 0x3FD0 | P 3FD0 (4706) Luftmassenmesser |
| 0x3FE0 | P 3FE0 (12897) Luftmassenmesser |
| 0x3FE1 | P 3FE1 (12898) Luftmassenmesser |
| 0x3FF0 | P 3FF0 (12899) Luftmassenmesser |
| 0x3FF1 | P 3FF1 (12900) Luftmassenmesser |
| 0x4000 | P 4000  Kraftstofftemperaturfuehler |
| 0x4001 | P 4001  Kraftstofftemperaturfuehler |
| 0x4010 | P 4010  Abgasgegendruckfuehler vor Partikelfilter |
| 0x4011 | P 4011  Abgasgegendruckfuehler vor Partikelfilter |
| 0x4020 | P 4020  Abgastemperaturfuehler vor Partikelfilter |
| 0x4021 | P 4021  Abgastemperaturfuehler vor Partikelfilter |
| 0x4030 | P 4030  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4031 | P 4031  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4032 | P 4032  Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4060 | P 4060 (8745) Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4061 | P 4061 (8744) Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4062 | P 4062  Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4072 | P 4072  Kupplungsschalter |
| 0x4073 | P 4073  Kupplungsschalter |
| 0x4082 | P 4082  Bremslicht-/Bremstestschalter |
| 0x4083 | P 4083  Bremslicht-/Bremstestschalter |
| 0x4093 | P 4093  Error path for AccPed and Brake Plausibility (nv) |
| 0x40E0 | P 40E0  Generator |
| 0x4112 | P 4112  Fault path of air condition power stage (nv) |
| 0x4113 | P 4113  Fault path of air condition power stage (nv) |
| 0x4120 | P 4120  DDE-Hauptrelais |
| 0x4121 | P 4121  DDE-Hauptrelais |
| 0x4130 | P 4130 (5157) Drallklappe |
| 0x4141 | P 4141 (5158) Drallklappe |
| 0x4152 | P 4152 (5159) Drallklappe |
| 0x4153 | P 4153 (5160) Drallklappe |
| 0x4155 | P 4155  Abgasklappe |
| 0x4156 | P 4156  Abgasklappe |
| 0x4157 | P 4157  Abgasklappe |
| 0x4158 | P 4158  Abgasklappe |
| 0x4165 | P 4165  Partikelfiltersystem |
| 0x4166 | P 4166  Partikelfiltersystem |
| 0x4175 | P 4175  Partikelfiltersystem |
| 0x4176 | P 4176  Partikelfiltersystem |
| 0x4178 | P 4178  Partikelfiltersystem |
| 0x4180 | P 4180 (4689) Ladedrucksteller |
| 0x4185 | P 4185  Partikelfiltersystem |
| 0x4186 | P 4186  Partikelfiltersystem |
| 0x4188 | P 4188  Partikelfiltersystem |
| 0x4191 | P 4191 (4690) Ladedrucksteller |
| 0x4195 | P 4195  Drehmomentanforderung Klimaanlage |
| 0x41A2 | P 41A2 (4691) Ladedrucksteller |
| 0x41A3 | P 41A3 (4692) Ladedrucksteller |
| 0x41A7 | P 41A7  Botschaft (CBS_RESET, 0x580) |
| 0x41A8 | P 41A8  Botschaft (CBS_RESET, 0x580) |
| 0x41B0 | P 41B0 (4626) Abgasrueckfuehrsteller |
| 0x41B5 | P 41B5  Fault path for Gearbox Temperature |
| 0x41C0 | P 41C0  Abluftklappenansteuerung |
| 0x41C1 | P 41C1  Abluftklappenansteuerung |
| 0x41C2 | P 41C2  Abluftklappenansteuerung |
| 0x41C3 | P 41C3  Abluftklappenansteuerung |
| 0x41D1 | P 41D1 (4627) Abgasrueckfuehrsteller |
| 0x41D5 | P 41D5  Lambdasonde Abgleichstrom |
| 0x41D6 | P 41D6  Lambdasonde Abgleichstrom |
| 0x41D7 | P 41D7  Lambdasonde Abgleichstrom |
| 0x41D8 | P 41D8  Lambdasonde Abgleichstrom |
| 0x41E2 | P 41E2 (4742) Abgasrueckfuehrsteller |
| 0x41E3 | P 41E3 (4713) Abgasrueckfuehrsteller |
| 0x41E5 | P 41E5  Lambdasonde Pumpstrom |
| 0x41E6 | P 41E6  Lambdasonde Pumpstrom |
| 0x41E7 | P 41E7  Lambdasonde Pumpstrom |
| 0x41E8 | P 41E8  Lambdasonde Pumpstrom |
| 0x41F0 | P 41F0  Elektroluefter |
| 0x41F1 | P 41F1  Elektroluefter |
| 0x41F2 | P 41F2  Elektroluefter |
| 0x41F3 | P 41F3  Elektroluefter |
| 0x41F5 | P 41F5  Lambdasonde virtuelle Masse |
| 0x41F6 | P 41F6  Lambdasonde virtuelle Masse |
| 0x41F7 | P 41F7  Lambdasonde virtuelle Masse |
| 0x41F8 | P 41F8  Lambdasonde virtuelle Masse |
| 0x4203 | P 4203  Gluehsteuergeraet |
| 0x4205 | P 4205  Lambdasonde Heizung |
| 0x4206 | P 4206  Lambdasonde Heizung |
| 0x4207 | P 4207  Lambdasonde Heizung |
| 0x4208 | P 4208  Lambdasonde Heizung |
| 0x4211 | P 4211  Gluehkerze Zylinder 1 |
| 0x4212 | P 4212  Gluehkerze Zylinder 1 |
| 0x4213 | P 4213  Gluehkerze Zylinder 1 |
| 0x4217 | P 4217  Lambdasonde Heizungskopplung |
| 0x4221 | P 4221  Gluehkerze Zylinder 2 |
| 0x4222 | P 4222  Gluehkerze Zylinder 2 |
| 0x4223 | P 4223  Gluehkerze Zylinder 2 |
| 0x4225 | P 4225  Lambdasonde |
| 0x4226 | P 4226  Lambdasonde |
| 0x4231 | P 4231  Gluehkerze Zylinder 3 |
| 0x4232 | P 4232  Gluehkerze Zylinder 3 |
| 0x4233 | P 4233  Gluehkerze Zylinder 3 |
| 0x4235 | P 4235  Lambdasonde Nullpunktkorrektur |
| 0x4236 | P 4236  Lambdasonde Nullpunktkorrektur |
| 0x4241 | P 4241  Gluehkerze Zylinder 4 |
| 0x4242 | P 4242  Gluehkerze Zylinder 4 |
| 0x4243 | P 4243  Gluehkerze Zylinder 4 |
| 0x4245 | P 4245  Lambdasonde Temperaturauswertung |
| 0x4246 | P 4246  Lambdasonde Temperaturauswertung |
| 0x4251 | P 4251  Gluehkerze Zylinder 5 |
| 0x4252 | P 4252  Gluehkerze Zylinder 5 |
| 0x4253 | P 4253  Gluehkerze Zylinder 5 |
| 0x4258 | P 4258  Lambdasonde Steuergeraet intern |
| 0x4261 | P 4261  Gluehkerze Zylinder 6 |
| 0x4262 | P 4262  Gluehkerze Zylinder 6 |
| 0x4263 | P 4263  Gluehkerze Zylinder 6 |
| 0x4267 | P 4267  Lambdasonde Nebenschlußerkennung |
| 0x4271 | P 4271  Gluehkerze Zylinder 7 |
| 0x4272 | P 4272  Gluehkerze Zylinder 7 |
| 0x4273 | P 4273  Gluehkerze Zylinder 7 |
| 0x4275 | P 4275  Lambdasonde Temperaturauswertung |
| 0x4276 | P 4276  Lambdasonde Temperaturauswertung |
| 0x4281 | P 4281  Gluehkerze Zylinder 8 |
| 0x4282 | P 4282  Gluehkerze Zylinder 8 |
| 0x4283 | P 4283  Gluehkerze Zylinder 8 |
| 0x4287 | P 4287  Lambdasonde Plausibilisierung |
| 0x4288 | P 4288  Lambdasonde Plausibilisierung |
| 0x4293 | P 4293  Steuergeraet intern 16 |
| 0x4296 | P 4296  Lambdasonde Plausibilisierung |
| 0x4298 | P 4298  Lambdasonde Plausibilisierung |
| 0x42B1 | P 42B1  Gluehrelais (nv) |
| 0x42B2 | P 42B2  Gluehrelais (nv) |
| 0x42B5 | P 42B5  DrehzahlUeberwachung |
| 0x42C0 | P 42C0  Oeldruck-Kontrollleuchte |
| 0x42C1 | P 42C1  Oeldruck-Kontrollleuchte |
| 0x42C2 | P 42C2  Oeldruck-Kontrollleuchte |
| 0x42C3 | P 42C3  Oeldruck-Kontrollleuchte |
| 0x42C7 | P 42C7  Ueberwachung ZMS Oszillation |
| 0x42D0 | P 42D0  Power Stage fault status for MIL (nv) |
| 0x42D1 | P 42D1  Power Stage fault status for MIL (nv) |
| 0x42D2 | P 42D2  Power Stage fault status for MIL (nv) |
| 0x42D3 | P 42D3  Power Stage fault status for MIL (nv) |
| 0x42E2 | P 42E2  Umschaltung Raildruckregelung PCV |
| 0x42F2 | P 42F2  Umschaltung Raildruckregelung MeUn |
| 0x4302 | P 4302 (1) Mengenregelventil |
| 0x4303 | P 4303 (4753) Mengenregelventil |
| 0x4310 | P 4310 (4) Mengenregelventil |
| 0x4321 | P 4321  Mengenregelventil |
| 0x4325 | P 4325  Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4326 | P 4326  Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4327 | P 4327  Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4328 | P 4328  Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4332 | P 4332  Raildruckregelventil |
| 0x4333 | P 4333  Raildruckregelventil |
| 0x4335 | P 4335  Kuehlerjalousie |
| 0x4336 | P 4336  Kuehlerjalousie |
| 0x4337 | P 4337  Kuehlerjalousie |
| 0x4338 | P 4338  Kuehlerjalousie |
| 0x4340 | P 4340  Raildruckregelventil |
| 0x4351 | P 4351 (145) Raildruckregelventil |
| 0x4360 | P 4360  Stromregelung fuer Raildruckregelventil |
| 0x4361 | P 4361  Stromregelung fuer Raildruckregelventil |
| 0x4362 | P 4362  Stromregelung fuer Raildruckregelventil |
| 0x4378 | P 4378  Raildruckregelventil Test (nv) |
| 0x4382 | P 4382  Raildruckregelventil Stellertest |
| 0x4390 | P 4390 (4678) Ladelufttemperatursensor |
| 0x4391 | P 4391 (4677) Ladelufttemperatursensor |
| 0x4392 | P 4392  Ladelufttemperatursensor |
| 0x4397 | P 4397  Mengenregelventil Stellertest |
| 0x43A0 | P 43A0  Anlasssperr-Relais |
| 0x43A1 | P 43A1  Anlasssperr-Relais |
| 0x43A2 | P 43A2  Anlasssperr-Relais |
| 0x43A3 | P 43A3  Anlasssperr-Relais |
| 0x43B0 | P 43B0  Power Stage fault status for System lamp (nv) |
| 0x43B1 | P 43B1  Power Stage fault status for System lamp (nv) |
| 0x43B2 | P 43B2  Power Stage fault status for System lamp (nv) |
| 0x43B3 | P 43B3  Power Stage fault status for System lamp (nv) |
| 0x43C0 | P 43C0  Drosselklappe |
| 0x43D1 | P 43D1  Drosselklappe |
| 0x43E2 | P 43E2  Drosselklappe |
| 0x43E3 | P 43E3  Drosselklappe |
| 0x43F0 | P 43F0  Elektrischer Zuheizer |
| 0x43F1 | P 43F1  Elektrischer Zuheizer |
| 0x43F2 | P 43F2  Elektrischer Zuheizer |
| 0x43F3 | P 43F3  Elektrischer Zuheizer |
| 0x4403 | P 4403  Steuergeraet intern 17 |
| 0x4410 | P 4410  Injektor Zylinder 1 |
| 0x4411 | P 4411  Injektor Zylinder 1 |
| 0x4412 | P 4412  Injektor Zylinder 1 |
| 0x4413 | P 4413  Injektor Zylinder 1 |
| 0x441A | P 441A  Injektor Zylinder 1_1 |
| 0x441B | P 441B  Injektor Zylinder 1_1 |
| 0x441C | P 441C (513) Injektor Zylinder 1_1 |
| 0x441D | P 441D  Injektor Zylinder 1_1 |
| 0x4420 | P 4420  Injektor Zylinder 2 |
| 0x4421 | P 4421  Injektor Zylinder 2 |
| 0x4422 | P 4422  Injektor Zylinder 2 |
| 0x4423 | P 4423  Injektor Zylinder 2 |
| 0x442A | P 442A  Injektor Zylinder 2_1 |
| 0x442B | P 442B  Injektor Zylinder 2_1 |
| 0x442C | P 442C (514) Injektor Zylinder 2_1 |
| 0x442D | P 442D  Injektor Zylinder 2_1 |
| 0x4430 | P 4430  Injektor Zylinder 3 |
| 0x4431 | P 4431  Injektor Zylinder 3 |
| 0x4432 | P 4432  Injektor Zylinder 3 |
| 0x4433 | P 4433  Injektor Zylinder 3 |
| 0x443A | P 443A  Injektor Zylinder 3_1 |
| 0x443B | P 443B  Injektor Zylinder 3_1 |
| 0x443C | P 443C (515) Injektor Zylinder 3_1 |
| 0x443D | P 443D  Injektor Zylinder 3_1 |
| 0x4440 | P 4440  Injektor Zylinder 4 |
| 0x4441 | P 4441  Injektor Zylinder 4 |
| 0x4442 | P 4442  Injektor Zylinder 4 |
| 0x4443 | P 4443  Injektor Zylinder 4 |
| 0x4445 | P 4445  Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x4446 | P 4446  Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x4447 | P 4447  Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x4448 | P 4448  Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x444A | P 444A  Injektor Zylinder 4_1 |
| 0x444B | P 444B  Injektor Zylinder 4_1 |
| 0x444C | P 444C (516) Injektor Zylinder 4_1 |
| 0x444D | P 444D  Injektor Zylinder 4_1 |
| 0x4450 | P 4450  Injektor Zylinder 5 |
| 0x4451 | P 4451  Injektor Zylinder 5 |
| 0x4452 | P 4452  Injektor Zylinder 5 |
| 0x4453 | P 4453  Injektor Zylinder 5 |
| 0x4457 | P 4457  Botschaft (LENKRADWINKEL, 0xC4) |
| 0x4458 | P 4458  Botschaft (LENKRADWINKEL, 0xC4) |
| 0x445A | P 445A  Injektor Zylinder 5_1 |
| 0x445B | P 445B  Injektor Zylinder 5_1 |
| 0x445C | P 445C (517) Injektor Zylinder 5_1 |
| 0x445D | P 445D  Injektor Zylinder 5_1 |
| 0x4460 | P 4460  Injektor Zylinder 6 |
| 0x4461 | P 4461  Injektor Zylinder 6 |
| 0x4462 | P 4462  Injektor Zylinder 6 |
| 0x4463 | P 4463  Injektor Zylinder 6 |
| 0x446A | P 446A  Injektor Zylinder 6_1 |
| 0x446B | P 446B  Injektor Zylinder 6_1 |
| 0x446C | P 446C (518) Injektor Zylinder 6_1 |
| 0x446D | P 446D  Injektor Zylinder 6_1 |
| 0x4473 | P 4473  Steuergeraet intern 18 |
| 0x4475 | P 4475  Intelligenter Batterie Sensor (DIBS1) |
| 0x4477 | P 4477  Intelligenter Batterie Sensor (DIBS1) |
| 0x4478 | P 4478  Intelligenter Batterie Sensor (DIBS1) |
| 0x4480 | P 4480  Steuergeraet intern 19 |
| 0x4485 | P 4485  Intelligenter Batterie Sensor (DIBS2) |
| 0x4487 | P 4487  Intelligenter Batterie Sensor (DIBS2) |
| 0x4488 | P 4488  Intelligenter Batterie Sensor (DIBS2) |
| 0x4491 | P 4491  Steuergeraet intern 20 |
| 0x4495 | P 4495  Intelligenter Batterie Sensor (DIBS3) |
| 0x4496 | P 4496  Intelligenter Batterie Sensor (DIBS3) |
| 0x4497 | P 4497  Intelligenter Batterie Sensor (DIBS3) |
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
| 0x4501 | P 4501 (1025) Abgasrueckfuehr-Regelung |
| 0x4507 | P 4507 (1026) Abgasrueckfuehr-Regelung |
| 0x4521 | P 4521 (4758) Ladedruckregelung |
| 0x4530 | P 4530 (4759) Ladedruckregelung |
| 0x4536 | P 4536  Powermanagement Batterie |
| 0x4538 | P 4538  Powermanagement Batterie |
| 0x4545 | P 4545  Powermanagement Bordnetz |
| 0x4546 | P 4546  Powermanagement Bordnetz |
| 0x4547 | P 4547  Powermanagement Bordnetz |
| 0x4548 | P 4548  Powermanagement Bordnetz |
| 0x4560 | P 4560 (12290) Raildruck-Plausibilitaet mengengeregelt |
| 0x4567 | P 4567  Botschaft (CODIERUNG_PM, 0x395) |
| 0x4568 | P 4568  Botschaft (CODIERUNG_PM, 0x395) |
| 0x4570 | P 4570  Raildruck-Plausibilitaet mengengeregelt |
| 0x4577 | P 4577  Botschaft (CTR_CRASH_SWO_EKP, 0x135) |
| 0x4578 | P 4578  Botschaft (CTR_CRASH_SWO_EKP, 0x135) |
| 0x4580 | P 4580 (12291) Raildruck-Plausibilitaet mengengeregelt |
| 0x4587 | P 4587  Kraftstofffilter |
| 0x4590 | P 4590  Raildruck-Plausibilitaet mengengeregelt |
| 0x4597 | P 4597  Botschaft (PRGG_CCTR, 0x331) |
| 0x4598 | P 4598  Botschaft (PRGG_CCTR, 0x331) |
| 0x45A0 | P 45A0 (12292) Raildruck-Plausibilitaet mengengeregelt |
| 0x45C0 | P 45C0  Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x45E3 | P 45E3  Ueberwachung Master/Slave |
| 0x45F2 | P 45F2  Ueberwachung Master/Slave |
| 0x45F3 | P 45F3  Ueberwachung Master/Slave |
| 0x45F5 | P 45F5  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F6 | P 45F6  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F7 | P 45F7  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F8 | P 45F8  Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x4600 | P 4600 (12293) Raildruck-Plausibilitaet druckgeregelt |
| 0x4610 | P 4610  Raildruck-Plausibilitaet druckgeregelt |
| 0x4620 | P 4620 (12294) Raildruck-Plausibilitaet druckgeregelt |
| 0x4630 | P 4630  Raildruck-Plausibilitaet druckgeregelt |
| 0x4637 | P 4637  Botschaft (ParkConsumer, 0x?) |
| 0x4638 | P 4638  Botschaft (ParkConsumer, 0x?) |
| 0x4640 | P 4640  Raildruck-Plausibilitaet druckgeregelt |
| 0x4650 | P 4650  Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4660 | P 4660  Versorgungsspannung |
| 0x4661 | P 4661  Versorgungsspannung |
| 0x4670 | P 4670 (1603) Speisespannung 1 |
| 0x4671 | P 4671 (1602) Speisespannung 1 |
| 0x4680 | P 4680 (1619) Speisespannung 2 |
| 0x4681 | P 4681 (1618) Speisespannung 2 |
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
| 0x4841 | P 4841 (5265) Abgasrueckfuehr-Regelung 2 |
| 0x4850 | P 4850 (5266) Abgasrueckfuehr-Regelung 2 |
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
| 0x4A30 | P 4A30  Multifunktionslenkrad |
| 0x4A31 | P 4A31  Multifunktionslenkrad |
| 0x4A32 | P 4A32  Multifunktionslenkrad |
| 0x4A33 | P 4A33  Multifunktionslenkrad |
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
| 0x4B10 | P 4B10 (4728) Laufruheregler |
| 0x4B11 | P 4B11 (4729) Laufruheregler |
| 0x4B22 | P 4B22  Elektroluefter |
| 0x4B32 | P 4B32  Elektroluefter 2 (nv) |
| 0x4B42 | P 4B42  Elektroluefter 3 (nv) |
| 0x4B50 | P 4B50  Mengenabgleich |
| 0x4B60 | P 4B60  Mengendriftkompensation |
| 0x4B80 | P 4B80  Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x4B90 | P 4B90  Raildruckueberwachung bei Motorstart |
| 0x4BA0 | P 4BA0 (275) Ansauglufttemperatursensor |
| 0x4BA1 | P 4BA1 (274) Ansauglufttemperatursensor |
| 0x4BB0 | P 4BB0 (12905) Versorgungsspannung Luftmassenmesser |
| 0x4BB1 | P 4BB1 (12912) Versorgungsspannung Luftmassenmesser |
| 0x4BB5 | P 4BB5 (12915) Luftmassenmesser |
| 0x4BB6 | P 4BB6 (12916) Luftmassenmesser |
| 0x4BC0 | P 4BC0 (258) Luftmassenmesser |
| 0x4BC1 | P 4BC1 (259) Luftmassenmesser |
| 0x4BC2 | P 4BC2 (257) Luftmassenmesser |
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
| 0x4DF0 | P 4DF0  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF1 | P 4DF1  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF2 | P 4DF2  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF3 | P 4DF3  Botschaft (TORQUE_GEARBX, 0xB5) |
| 0xCD87 | P CD87  CAN Bus A |
| 0xCD8B | P CD8B  CAN Bus B |
| 0x3E90 | P 3E90 Kurbelwellengeber |
| 0x3E91 | P 3E91 Kurbelwellengeber |
| 0x3EB0 | P 3EB0 Drehzahlberechnung |
| 0x3EC0 | P 3EC0 Nockenwellengeber |
| 0x3EC1 | P 3EC1 Nockenwellengeber |
| 0x3EC7 | P 3EC7 Ueberwachung Master/Slave |
| 0x3EE0 | P 3EE0 (0117) Kuehlmitteltemperatursensor |
| 0x3EE1 | P 3EE1 (0118) Kuehlmitteltemperatursensor |
| 0x3EE2 | P 3EE2 Kuehlmitteltemperatursensor |
| 0x3EE3 | P 3EE3 Kuehlmitteltemperatursensor |
| 0x3EF3 | P 3EF3 (0115) Kuehlmitteltemperatursensor Plausibilitaet |
| 0x3F00 | P 3F00 (0238) Ladedruckfuehler |
| 0x3F01 | P 3F01 (0237) Ladedruckfuehler |
| 0x3F02 | P 3F02 Ladedruckfuehler |
| 0x3F03 | P 3F03 (0236) Ladedruckfuehler |
| 0x3F05 | P 3F05 (0701) MIL OFF |
| 0x3F10 | P 3F10 Fahrpedalmodul Potentiometer 1 |
| 0x3F11 | P 3F11 Fahrpedalmodul Potentiometer 1 |
| 0x3F13 | P 3F13 Fahrpedalmodul Potentiometer 1 |
| 0x3F15 | P 3F15 (0700) MIL On |
| 0x3F20 | P 3F20 Fahrpedalmodul Potentiometer 2 |
| 0x3F21 | P 3F21 Fahrpedalmodul Potentiometer 2 |
| 0x3F23 | P 3F23 Fahrpedalmodul Potentiometer 2 |
| 0x3F25 | P 3F25 Ladeluftschlauch-Ueberwachung |
| 0x3F30 | P 3F30 (0193) Raildrucksensor |
| 0x3F31 | P 3F31 (0192) Raildrucksensor |
| 0x3F35 | P 3F35 Ladeluftschlauch-Ueberwachung im Leerlauf |
| 0x3F48 | P 3F48 Redundante Auswertung Bremslicht-/Bremstestschalter |
| 0x3F50 | P 3F50 (0503) Fahrgeschwindigkeitssignal |
| 0x3F51 | P 3F51 Fahrgeschwindigkeitssignal |
| 0x3F52 | P 3F52 Fahrgeschwindigkeitssignal |
| 0x3F53 | P 3F53 (0501) Fahrgeschwindigkeitssignal |
| 0x3F57 | P 3F57 (1272) Ladedrucksteller |
| 0x3F62 | P 3F62 (0500) Fahrgeschwindigkeitssignal ueber CAN |
| 0x3F70 | P 3F70 Ansauglufttemperatursensor |
| 0x3F71 | P 3F71 Ansauglufttemperatursensor |
| 0x3F72 | P 3F72 Ansauglufttemperatursensor |
| 0x3F77 | P 3F77 (1273) Ladedrucksteller |
| 0x3F80 | P 3F80 Umgebungstemperaturfuehler (nv) |
| 0x3F81 | P 3F81 Umgebungstemperaturfuehler (nv) |
| 0x3F82 | P 3F82 Umgebungstemperaturfuehler (nv) |
| 0x3F90 | P 3F90 Oeldrucksensor (nv) |
| 0x3F91 | P 3F91 Oeldrucksensor (nv) |
| 0x3F97 | P 3F97 (1274) Ladedrucksteller |
| 0x3FA0 | P 3FA0 Oeltemperatursensor |
| 0x3FA1 | P 3FA1 Oeltemperatursensor |
| 0x3FA2 | P 3FA2 Oeltemperatursensor |
| 0x3FA3 | P 3FA3 Oeltemperatursensor |
| 0x3FC0 | P 3FC0 (1261) Luftmassenmesser |
| 0x3FD0 | P 3FD0 (1262) Luftmassenmesser |
| 0x3FE0 | P 3FE0 (3261) Luftmassenmesser |
| 0x3FE1 | P 3FE1 (3262) Luftmassenmesser |
| 0x3FF0 | P 3FF0 (3263) Luftmassenmesser |
| 0x3FF1 | P 3FF1 (3264) Luftmassenmesser |
| 0x4000 | P 4000 Kraftstofftemperaturfuehler |
| 0x4001 | P 4001 Kraftstofftemperaturfuehler |
| 0x4010 | P 4010 Abgasgegendruckfuehler vor Partikelfilter |
| 0x4011 | P 4011 Abgasgegendruckfuehler vor Partikelfilter |
| 0x4020 | P 4020 Abgastemperaturfuehler vor Partikelfilter |
| 0x4021 | P 4021 Abgastemperaturfuehler vor Partikelfilter |
| 0x4030 | P 4030 Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4031 | P 4031 Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4032 | P 4032 Abgastemperaturfuehler vor Katalysator (nv) |
| 0x4060 | P 4060 (2229) Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4061 | P 4061 (2228) Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4062 | P 4062 Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4063 | P 4063 (2227) Umgebungsdrucksensor (im Steuergeraet verbaut) |
| 0x4072 | P 4072 Kupplungsschalter |
| 0x4073 | P 4073 Kupplungsschalter |
| 0x4082 | P 4082 Bremslicht-/Bremstestschalter |
| 0x4083 | P 4083 Bremslicht-/Bremstestschalter |
| 0x4093 | P 4093 Error path for AccPed and Brake Plausibility (nv) |
| 0x40E0 | P 40E0 Generator |
| 0x4112 | P 4112 Fault path of air condition power stage (nv) |
| 0x4113 | P 4113 Fault path of air condition power stage (nv) |
| 0x4120 | P 4120 DDE-Hauptrelais |
| 0x4121 | P 4121 DDE-Hauptrelais |
| 0x4130 | P 4130 (1425) Drallklappe |
| 0x4141 | P 4141 (1426) Drallklappe |
| 0x4152 | P 4152 (1427) Drallklappe |
| 0x4153 | P 4153 (1428) Drallklappe |
| 0x4155 | P 4155 Abgasklappe |
| 0x4156 | P 4156 Abgasklappe |
| 0x4157 | P 4157 Abgasklappe |
| 0x4158 | P 4158 Abgasklappe |
| 0x4165 | P 4165 Partikelfiltersystem |
| 0x4166 | P 4166 Partikelfiltersystem |
| 0x4175 | P 4175 Partikelfiltersystem |
| 0x4176 | P 4176 Partikelfiltersystem |
| 0x4178 | P 4178 Partikelfiltersystem |
| 0x4180 | P 4180 (1251) Ladedrucksteller |
| 0x4185 | P 4185 Partikelfiltersystem |
| 0x4186 | P 4186 Partikelfiltersystem |
| 0x4188 | P 4188 Partikelfiltersystem |
| 0x4191 | P 4191 (1252) Ladedrucksteller |
| 0x4195 | P 4195 Drehmomentanforderung Klimaanlage |
| 0x41A2 | P 41A2 (1253) Ladedrucksteller |
| 0x41A3 | P 41A3 (1254) Ladedrucksteller |
| 0x41A6 | P 41A6 Botschaft (CBS_RESET, 0x580) |
| 0x41A7 | P 41A7 Botschaft (CBS_RESET, 0x580) |
| 0x41A8 | P 41A8 Botschaft (CBS_RESET, 0x580) |
| 0x41B0 | P 41B0 (1212) Abgasrueckfuehrsteller |
| 0x41B5 | P 41B5 Fault path for Gearbox Temperature |
| 0x41C0 | P 41C0 Abluftklappenansteuerung |
| 0x41C1 | P 41C1 Abluftklappenansteuerung |
| 0x41C2 | P 41C2 Abluftklappenansteuerung |
| 0x41C3 | P 41C3 Abluftklappenansteuerung |
| 0x41D1 | P 41D1 (1213) Abgasrueckfuehrsteller |
| 0x41D5 | P 41D5 (2246) Lambdasonde Abgleichstrom |
| 0x41D6 | P 41D6 (2245) Lambdasonde Abgleichstrom |
| 0x41D7 | P 41D7 (2243) Lambdasonde Abgleichstrom |
| 0x41D8 | P 41D8 Lambdasonde Abgleichstrom |
| 0x41E2 | P 41E2 (1286) Abgasrueckfuehrsteller |
| 0x41E3 | P 41E3 (1269) Abgasrueckfuehrsteller |
| 0x41E5 | P 41E5 (2239) Lambdasonde Pumpstrom |
| 0x41E6 | P 41E6 (2238) Lambdasonde Pumpstrom |
| 0x41E7 | P 41E7 (2237) Lambdasonde Pumpstrom |
| 0x41E8 | P 41E8 Lambdasonde Pumpstrom |
| 0x41F0 | P 41F0 Elektroluefter |
| 0x41F1 | P 41F1 Elektroluefter |
| 0x41F2 | P 41F2 Elektroluefter |
| 0x41F3 | P 41F3 Elektroluefter |
| 0x41F5 | P 41F5 (2253) Lambdasonde virtuelle Masse |
| 0x41F6 | P 41F6 (2252) Lambdasonde virtuelle Masse |
| 0x41F7 | P 41F7 (2251) Lambdasonde virtuelle Masse |
| 0x41F8 | P 41F8 Lambdasonde virtuelle Masse |
| 0x4203 | P 4203 Gluehsteuergeraet |
| 0x4205 | P 4205 (0032) Lambdasonde Heizung |
| 0x4206 | P 4206 (0031) Lambdasonde Heizung |
| 0x4207 | P 4207 (0030) Lambdasonde Heizung |
| 0x4208 | P 4208 Lambdasonde Heizung |
| 0x4211 | P 4211 Gluehkerze Zylinder 1 |
| 0x4212 | P 4212 Gluehkerze Zylinder 1 |
| 0x4213 | P 4213 Gluehkerze Zylinder 1 |
| 0x4217 | P 4217 Lambdasonde Heizungskopplung |
| 0x4221 | P 4221 Gluehkerze Zylinder 2 |
| 0x4222 | P 4222 Gluehkerze Zylinder 2 |
| 0x4223 | P 4223 Gluehkerze Zylinder 2 |
| 0x4225 | P 4225 (0132) Lambdasonde |
| 0x4226 | P 4226 (0131) Lambdasonde |
| 0x4231 | P 4231 Gluehkerze Zylinder 3 |
| 0x4232 | P 4232 Gluehkerze Zylinder 3 |
| 0x4233 | P 4233 Gluehkerze Zylinder 3 |
| 0x4235 | P 4235 Lambdasonde Steuergeraet intern |
| 0x4236 | P 4236 Lambdasonde Steuergeraet intern |
| 0x4241 | P 4241 Gluehkerze Zylinder 4 |
| 0x4242 | P 4242 Gluehkerze Zylinder 4 |
| 0x4243 | P 4243 Gluehkerze Zylinder 4 |
| 0x4245 | P 4245 Lambdasonde Steuergeraet intern |
| 0x4246 | P 4246 Lambdasonde Steuergeraet intern |
| 0x4251 | P 4251 Gluehkerze Zylinder 5 |
| 0x4252 | P 4252 Gluehkerze Zylinder 5 |
| 0x4253 | P 4253 Gluehkerze Zylinder 5 |
| 0x4258 | P 4258 Lambdasonde Steuergeraet intern |
| 0x4261 | P 4261 Gluehkerze Zylinder 6 |
| 0x4262 | P 4262 Gluehkerze Zylinder 6 |
| 0x4263 | P 4263 Gluehkerze Zylinder 6 |
| 0x4267 | P 4267 Lambdasonde Nebenschlußerkennung |
| 0x4271 | P 4271 Gluehkerze Zylinder 7 |
| 0x4272 | P 4272 Gluehkerze Zylinder 7 |
| 0x4273 | P 4273 Gluehkerze Zylinder 7 |
| 0x4275 | P 4275 Lambdasonde Temperaturauswertung |
| 0x4276 | P 4276 Lambdasonde Temperaturauswertung |
| 0x4281 | P 4281 Gluehkerze Zylinder 8 |
| 0x4282 | P 4282 Gluehkerze Zylinder 8 |
| 0x4283 | P 4283 Gluehkerze Zylinder 8 |
| 0x4287 | P 4287 Lambdasonde Plausibilisierung |
| 0x4288 | P 4288 Lambdasonde Plausibilisierung |
| 0x4293 | P 4293 Steuergeraet intern 16 |
| 0x4296 | P 4296 Lambdasonde Plausibilisierung |
| 0x4298 | P 4298 Lambdasonde Plausibilisierung |
| 0x42B1 | P 42B1 Gluehrelais (nv) |
| 0x42B2 | P 42B2 Gluehrelais (nv) |
| 0x42B5 | P 42B5 Drehzahlueberwachung |
| 0x42C0 | P 42C0 Oeldruck-Kontrollleuchte |
| 0x42C1 | P 42C1 Oeldruck-Kontrollleuchte |
| 0x42C2 | P 42C2 Oeldruck-Kontrollleuchte |
| 0x42C3 | P 42C3 Oeldruck-Kontrollleuchte |
| 0x42C7 | P 42C7 Ueberwachung ZMS Oszillation |
| 0x42D0 | P 42D0 Power Stage fault status for MIL (nv) |
| 0x42D1 | P 42D1 Power Stage fault status for MIL (nv) |
| 0x42D2 | P 42D2 Power Stage fault status for MIL (nv) |
| 0x42D3 | P 42D3 Power Stage fault status for MIL (nv) |
| 0x42D5 | P 42D5 Injektor Zylinder 7 |
| 0x42D6 | P 42D6 Injektor Zylinder 7 |
| 0x42D7 | P 42D7 Injektor Zylinder 7 |
| 0x42D8 | P 42D8 Injektor Zylinder 7 |
| 0x42E2 | P 42E2 Umschaltung Raildruckregelung PCV |
| 0x42E5 | P 42E5 Injektor Zylinder 7_1 |
| 0x42E6 | P 42E6 Injektor Zylinder 7_1 |
| 0x42E7 | P 42E7 (0207) Injektor Zylinder 7_1 |
| 0x42E8 | P 42E8 Injektor Zylinder 7_1 |
| 0x42F2 | P 42F2 Umschaltung Raildruckregelung MeUn |
| 0x42F5 | P 42F5 Injektor Zylinder 8 |
| 0x42F6 | P 42F6 Injektor Zylinder 8 |
| 0x42F7 | P 42F7 Injektor Zylinder 8 |
| 0x42F8 | P 42F8 Injektor Zylinder 8 |
| 0x4302 | P 4302 (0001) Mengenregelventil |
| 0x4303 | P 4303 (1291) Mengenregelventil |
| 0x4305 | P 4305 Injektor Zylinder 8_1 |
| 0x4306 | P 4306 Injektor Zylinder 8_1 |
| 0x4307 | P 4307 (0208) Injektor Zylinder 8_1 |
| 0x4308 | P 4308 Injektor Zylinder 8_1 |
| 0x4310 | P 4310 (0004) Mengenregelventil |
| 0x4321 | P 4321 Mengenregelventil |
| 0x4325 | P 4325 Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4326 | P 4326 Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4327 | P 4327 Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4328 | P 4328 Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x4332 | P 4332 Raildruckregelventil |
| 0x4333 | P 4333 Raildruckregelventil |
| 0x4335 | P 4335 Kuehlerjalousie (gesteuerte Niere) |
| 0x4336 | P 4336 Kuehlerjalousie (gesteuerte Niere) |
| 0x4337 | P 4337 Kuehlerjalousie (gesteuerte Niere) |
| 0x4338 | P 4338 Kuehlerjalousie (gesteuerte Niere) |
| 0x4340 | P 4340 Raildruckregelventil |
| 0x4351 | P 4351 (0091) Raildruckregelventil |
| 0x4360 | P 4360 Stromregelung fuer Raildruckregelventil |
| 0x4361 | P 4361 Stromregelung fuer Raildruckregelventil |
| 0x4362 | P 4362 Stromregelung fuer Raildruckregelventil |
| 0x4382 | P 4382 Raildruckregelventil Stellertest |
| 0x4390 | P 4390 (1246) Ladelufttemperatursensor |
| 0x4391 | P 4391 (1245) Ladelufttemperatursensor |
| 0x4392 | P 4392 Ladelufttemperatursensor |
| 0x4397 | P 4397 Mengenregelventil Stellertest |
| 0x43A0 | P 43A0 Anlasssperr-Relais |
| 0x43A1 | P 43A1 Anlasssperr-Relais |
| 0x43A2 | P 43A2 Anlasssperr-Relais |
| 0x43A3 | P 43A3 Anlasssperr-Relais |
| 0x43B0 | P 43B0 Power Stage fault status for System lamp (nv) |
| 0x43B1 | P 43B1 Power Stage fault status for System lamp (nv) |
| 0x43B2 | P 43B2 Power Stage fault status for System lamp (nv) |
| 0x43B3 | P 43B3 Power Stage fault status for System lamp (nv) |
| 0x43C0 | P 43C0 Drosselklappe |
| 0x43D1 | P 43D1 Drosselklappe |
| 0x43E2 | P 43E2 Drosselklappe |
| 0x43E3 | P 43E3 Drosselklappe |
| 0x43F0 | P 43F0 Elektrischer Zuheizer |
| 0x43F1 | P 43F1 Elektrischer Zuheizer |
| 0x43F2 | P 43F2 Elektrischer Zuheizer |
| 0x43F3 | P 43F3 Elektrischer Zuheizer |
| 0x4403 | P 4403 Steuergeraet intern 17 |
| 0x4410 | P 4410 Injektor Zylinder 1 |
| 0x4411 | P 4411 Injektor Zylinder 1 |
| 0x4412 | P 4412 Injektor Zylinder 1 |
| 0x4413 | P 4413 Injektor Zylinder 1 |
| 0x441A | P 441A Injektor Zylinder 1_1 |
| 0x441B | P 441B Injektor Zylinder 1_1 |
| 0x441C | P 441C (0201) Injektor Zylinder 1_1 |
| 0x441D | P 441D Injektor Zylinder 1_1 |
| 0x4420 | P 4420 Injektor Zylinder 2 |
| 0x4421 | P 4421 Injektor Zylinder 2 |
| 0x4422 | P 4422 Injektor Zylinder 2 |
| 0x4423 | P 4423 Injektor Zylinder 2 |
| 0x442A | P 442A Injektor Zylinder 2_1 |
| 0x442B | P 442B Injektor Zylinder 2_1 |
| 0x442C | P 442C (0202) Injektor Zylinder 2_1 |
| 0x442D | P 442D Injektor Zylinder 2_1 |
| 0x4430 | P 4430 Injektor Zylinder 3 |
| 0x4431 | P 4431 Injektor Zylinder 3 |
| 0x4432 | P 4432 Injektor Zylinder 3 |
| 0x4433 | P 4433 Injektor Zylinder 3 |
| 0x443A | P 443A Injektor Zylinder 3_1 |
| 0x443B | P 443B Injektor Zylinder 3_1 |
| 0x443C | P 443C (0203) Injektor Zylinder 3_1 |
| 0x443D | P 443D Injektor Zylinder 3_1 |
| 0x4440 | P 4440 Injektor Zylinder 4 |
| 0x4441 | P 4441 Injektor Zylinder 4 |
| 0x4442 | P 4442 Injektor Zylinder 4 |
| 0x4443 | P 4443 Injektor Zylinder 4 |
| 0x4445 | P 4445 Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x4446 | P 4446 Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x4447 | P 4447 Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x4448 | P 4448 Botschaft (DREHMOMENT_ANF_AFS, 0xB9) |
| 0x444A | P 444A Injektor Zylinder 4_1 |
| 0x444B | P 444B Injektor Zylinder 4_1 |
| 0x444C | P 444C (0204) Injektor Zylinder 4_1 |
| 0x444D | P 444D Injektor Zylinder 4_1 |
| 0x4450 | P 4450 Injektor Zylinder 5 |
| 0x4451 | P 4451 Injektor Zylinder 5 |
| 0x4452 | P 4452 Injektor Zylinder 5 |
| 0x4453 | P 4453 Injektor Zylinder 5 |
| 0x4457 | P 4457 Botschaft (LENKRADWINKEL, 0xC4) |
| 0x4458 | P 4458 Botschaft (LENKRADWINKEL, 0xC4) |
| 0x445A | P 445A Injektor Zylinder 5_1 |
| 0x445B | P 445B Injektor Zylinder 5_1 |
| 0x445C | P 445C (0205) Injektor Zylinder 5_1 |
| 0x445D | P 445D Injektor Zylinder 5_1 |
| 0x4460 | P 4460 Injektor Zylinder 6 |
| 0x4461 | P 4461 Injektor Zylinder 6 |
| 0x4462 | P 4462 Injektor Zylinder 6 |
| 0x4463 | P 4463 Injektor Zylinder 6 |
| 0x446A | P 446A Injektor Zylinder 6_1 |
| 0x446B | P 446B Injektor Zylinder 6_1 |
| 0x446C | P 446C (0206) Injektor Zylinder 6_1 |
| 0x446D | P 446D Injektor Zylinder 6_1 |
| 0x4473 | P 4473 Steuergeraet intern 18 |
| 0x4475 | P 4475 Intelligenter Batterie Sensor (DIBS1) |
| 0x4477 | P 4477 Intelligenter Batterie Sensor (DIBS1) |
| 0x4478 | P 4478 Intelligenter Batterie Sensor (DIBS1) |
| 0x4480 | P 4480 Steuergeraet intern 19 |
| 0x4485 | P 4485 Intelligenter Batterie Sensor (DIBS2) |
| 0x4487 | P 4487 Intelligenter Batterie Sensor (DIBS2) |
| 0x4488 | P 4488 Intelligenter Batterie Sensor (DIBS2) |
| 0x4491 | P 4491 Steuergeraet intern 20 |
| 0x4495 | P 4495 Intelligenter Batterie Sensor (DIBS3) |
| 0x4496 | P 4496 Intelligenter Batterie Sensor (DIBS3) |
| 0x4497 | P 4497 Intelligenter Batterie Sensor (DIBS3) |
| 0x44A0 | P 44A0 Injektoren Bank 1 |
| 0x44A1 | P 44A1 Injektoren Bank 1 |
| 0x44A2 | P 44A2 Injektoren Bank 1 |
| 0x44A3 | P 44A3 Injektoren Bank 1 |
| 0x44A5 | P 44A5 Nullmengenkalibrierung Injektor Zylinder 1 |
| 0x44A6 | P 44A6 Nullmengenkalibrierung Injektor Zylinder 1 |
| 0x44A7 | P 44A7 Nullmengenkalibrierung Injektor Zylinder 1 |
| 0x44A8 | P 44A8 Nullmengenkalibrierung Injektor Zylinder 1 |
| 0x44AA | P 44AA Injektoren Bank 1_1 |
| 0x44AB | P 44AB Injektoren Bank 1_1 |
| 0x44AC | P 44AC Injektoren Bank 1_1 |
| 0x44AD | P 44AD Injektoren Bank 1_1 |
| 0x44B0 | P 44B0 Injektoren Bank 2 |
| 0x44B1 | P 44B1 Injektoren Bank 2 |
| 0x44B2 | P 44B2 Injektoren Bank 2 |
| 0x44B3 | P 44B3 Injektoren Bank 2 |
| 0x44B5 | P 44B5 Nullmengenkalibrierung Injektor Zylinder 2 |
| 0x44B6 | P 44B6 Nullmengenkalibrierung Injektor Zylinder 2 |
| 0x44B7 | P 44B7 Nullmengenkalibrierung Injektor Zylinder 2 |
| 0x44B8 | P 44B8 Nullmengenkalibrierung Injektor Zylinder 2 |
| 0x44BA | P 44BA Injektoren Bank 2_1 |
| 0x44BB | P 44BB Injektoren Bank 2_1 |
| 0x44BC | P 44BC Injektoren Bank 2_1 |
| 0x44BD | P 44BD Injektoren Bank 2_1 |
| 0x44C0 | P 44C0 Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C1 | P 44C1 Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C2 | P 44C2 Anzahl gewuenschter Einspritzungen begrenzt |
| 0x44C5 | P 44C5 Nullmengenkalibrierung Injektor Zylinder 3 |
| 0x44C6 | P 44C6 Nullmengenkalibrierung Injektor Zylinder 3 |
| 0x44C7 | P 44C7 Nullmengenkalibrierung Injektor Zylinder 3 |
| 0x44C8 | P 44C8 Nullmengenkalibrierung Injektor Zylinder 3 |
| 0x44D0 | P 44D0 Generator |
| 0x44D2 | P 44D2 Generator |
| 0x44D3 | P 44D3 Generator |
| 0x44D5 | P 44D5 Nullmengenkalibrierung Injektor Zylinder 4 |
| 0x44D6 | P 44D6 Nullmengenkalibrierung Injektor Zylinder 4 |
| 0x44D7 | P 44D7 Nullmengenkalibrierung Injektor Zylinder 4 |
| 0x44D8 | P 44D8 Nullmengenkalibrierung Injektor Zylinder 4 |
| 0x44E2 | P 44E2 Generator |
| 0x44E3 | P 44E3 Generator |
| 0x44E5 | P 44E5 Nullmengenkalibrierung Injektor Zylinder 5 |
| 0x44E6 | P 44E6 Nullmengenkalibrierung Injektor Zylinder 5 |
| 0x44E7 | P 44E7 Nullmengenkalibrierung Injektor Zylinder 5 |
| 0x44E8 | P 44E8 Nullmengenkalibrierung Injektor Zylinder 5 |
| 0x44F5 | P 44F5 Nullmengenkalibrierung Injektor Zylinder 6 |
| 0x44F6 | P 44F6 Nullmengenkalibrierung Injektor Zylinder 6 |
| 0x44F7 | P 44F7 Nullmengenkalibrierung Injektor Zylinder 6 |
| 0x44F8 | P 44F8 Nullmengenkalibrierung Injektor Zylinder 6 |
| 0x4501 | P 4501 (0401) Abgasrueckfuehr-Regelung |
| 0x4507 | P 4507 (0402) Abgasrueckfuehr-Regelung |
| 0x4512 | P 4512 Thermischer Oelniveausensor |
| 0x4513 | P 4513 Thermischer Oelniveausensor |
| 0x4521 | P 4521 (1296) Ladedruckregelung |
| 0x4530 | P 4530 (1297) Ladedruckregelung |
| 0x4536 | P 4536 Powermanagement Batterie |
| 0x4538 | P 4538 Powermanagement Batterie |
| 0x4541 | P 4541 Thermischer Oelniveausensor |
| 0x4545 | P 4545 Powermanagement Bordnetz |
| 0x4546 | P 4546 Powermanagement Bordnetz |
| 0x4547 | P 4547 Powermanagement Bordnetz |
| 0x4548 | P 4548 Powermanagement Bordnetz |
| 0x4560 | P 4560 (3002) Raildruck-Plausibilitaet mengengeregelt |
| 0x4567 | P 4567 Botschaft (CODIERUNG_PM, 0x395) |
| 0x4568 | P 4568 Botschaft (CODIERUNG_PM, 0x395) |
| 0x4570 | P 4570 Raildruck-Plausibilitaet mengengeregelt |
| 0x4577 | P 4577 Botschaft (CTR_CRASH_SWO_EKP, 0x135) |
| 0x4578 | P 4578 Botschaft (CTR_CRASH_SWO_EKP, 0x135) |
| 0x4580 | P 4580 (3003) Raildruck-Plausibilitaet mengengeregelt |
| 0x4587 | P 4587 Kraftstofffilter |
| 0x4590 | P 4590 Raildruck-Plausibilitaet mengengeregelt |
| 0x4597 | P 4597 Botschaft (PRGG_CCTR, 0x331) |
| 0x4598 | P 4598 Botschaft (PRGG_CCTR, 0x331) |
| 0x45A0 | P 45A0 (3004) Raildruck-Plausibilitaet mengengeregelt |
| 0x45E3 | P 45E3 Ueberwachung Master/Slave |
| 0x45F2 | P 45F2 Ueberwachung Master/Slave |
| 0x45F3 | P 45F3 Ueberwachung Master/Slave |
| 0x45F5 | P 45F5 Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F6 | P 45F6 Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F7 | P 45F7 Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x45F8 | P 45F8 Botschaft (DREHMOMENT_ANF_ACC, 0xB7) |
| 0x4600 | P 4600 (3005) Raildruck-Plausibilitaet druckgeregelt |
| 0x4605 | P 4605 Abgasnachbehandlung |
| 0x4610 | P 4610 Raildruck-Plausibilitaet druckgeregelt |
| 0x4618 | P 4618 Partikelfiltersystem |
| 0x4620 | P 4620 (3006) Raildruck-Plausibilitaet druckgeregelt |
| 0x4628 | P 4628 Partikelfiltersystem |
| 0x4630 | P 4630 Raildruck-Plausibilitaet druckgeregelt |
| 0x4637 | P 4637 Botschaft (ParkConsumer, 0x?) |
| 0x4638 | P 4638 Botschaft (ParkConsumer, 0x?) |
| 0x4640 | P 4640 Raildruck-Plausibilitaet druckgeregelt |
| 0x4645 | P 4645 Abgasrueckfuehrsteller |
| 0x4650 | P 4650 Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4656 | P 4656 Lambdasonde Steuergeraet intern |
| 0x4660 | P 4660 Versorgungsspannung |
| 0x4661 | P 4661 Versorgungsspannung |
| 0x4665 | P 4665 Partikelfiltersystem |
| 0x4666 | P 4666 Partikelfiltersystem |
| 0x4670 | P 4670 (0643) Speisespannung 1 |
| 0x4671 | P 4671 (0642) Speisespannung 1 |
| 0x4677 | P 4677 Drosselklappe |
| 0x4680 | P 4680 (0653) Speisespannung 2 |
| 0x4681 | P 4681 (0652) Speisespannung 2 |
| 0x4687 | P 4687 Drosselklappe |
| 0x4690 | P 4690 Speisespannung 3 |
| 0x4691 | P 4691 Speisespannung 3 |
| 0x4697 | P 4697 Drosselklappe |
| 0x46A0 | P 46A0 Steuergeraet intern 1 |
| 0x46A1 | P 46A1 Steuergeraet intern 1 |
| 0x46A2 | P 46A2 Steuergeraet intern 1 |
| 0x46A3 | P 46A3 Steuergeraet intern 1 |
| 0x46A7 | P 46A7 Drallklappe |
| 0x46B0 | P 46B0 Steuergeraet intern 2 |
| 0x46B1 | P 46B1 Steuergeraet intern 2 |
| 0x46B2 | P 46B2 Steuergeraet intern 2 |
| 0x46B3 | P 46B3 Steuergeraet intern 2 |
| 0x46B7 | P 46B7 Drallklappe |
| 0x46C0 | P 46C0 Steuergeraet intern 3 |
| 0x46C7 | P 46C7 Drallklappe |
| 0x46D0 | P 46D0 Steuergeraet intern 4 |
| 0x46D1 | P 46D1 Steuergeraet intern 4 |
| 0x46D2 | P 46D2 Steuergeraet intern 4 |
| 0x46D3 | P 46D3 Steuergeraet intern 4 |
| 0x46E5 | P 46E5 Boost-pressure actuator at low pressure stage |
| 0x46F6 | P 46F6 Boost-pressure actuator at low pressure stage |
| 0x4703 | P 4703 Steuergeraet intern 7 |
| 0x4707 | P 4707 Boost-pressure actuator at low pressure stage |
| 0x4708 | P 4708 Boost-pressure actuator at low pressure stage |
| 0x4711 | P 4711 Steuergeraet intern 8 |
| 0x4712 | P 4712 Steuergeraet intern 8 |
| 0x4713 | P 4713 Steuergeraet intern 8 |
| 0x4715 | P 4715 Dummyfehler 1 |
| 0x4716 | P 4716 Dummyfehler 1 |
| 0x4717 | P 4717 Dummyfehler 1 |
| 0x4718 | P 4718 Dummyfehler 1 |
| 0x4723 | P 4723 Steuergeraet intern 9 |
| 0x4725 | P 4725 error path of DCDC-converter |
| 0x4726 | P 4726 error path of DCDC-converter |
| 0x4727 | P 4727 error path of DCDC-converter |
| 0x4728 | P 4728 error path of DCDC-converter |
| 0x4730 | P 4730 Mengenregelventil Stromregelung |
| 0x4731 | P 4731 Mengenregelventil Stromregelung |
| 0x4732 | P 4732 Mengenregelventil Stromregelung |
| 0x4735 | P 4735 error path of buffer voltage |
| 0x4736 | P 4736 error path of buffer voltage |
| 0x4740 | P 4740 Steuergeraet intern 11 |
| 0x4747 | P 4747 error path for amplifier trimming of CY370 |
| 0x4750 | P 4750 Steuergeraet intern 12 |
| 0x4753 | P 4753 Steuergeraet intern 12 |
| 0x4757 | P 4757 error path for short circuit of select switches |
| 0x4763 | P 4763 Steuergeraet intern 13 (nv) |
| 0x4765 | P 4765 Injektor Zylinder 1 |
| 0x4766 | P 4766 Injektor Zylinder 1 |
| 0x4767 | P 4767 Injektor Zylinder 1 |
| 0x4768 | P 4768 Injektor Zylinder 1 |
| 0x4772 | P 4772 Steuergeraet intern 14 |
| 0x4773 | P 4773 Steuergeraet intern 14 |
| 0x4780 | P 4780 Steuergeraet intern 15 |
| 0x4781 | P 4781 Steuergeraet intern 15 |
| 0x4782 | P 4782 Steuergeraet intern 15 |
| 0x4783 | P 4783 Steuergeraet intern 15 |
| 0x4785 | P 4785 Injektor Zylinder 2 |
| 0x4786 | P 4786 Injektor Zylinder 2 |
| 0x4787 | P 4787 Injektor Zylinder 2 |
| 0x4788 | P 4788 Injektor Zylinder 2 |
| 0x4792 | P 4792 Ueberwachung Master/Slave |
| 0x4793 | P 4793 Ueberwachung Master/Slave |
| 0x4796 | P 4796 Injektor Zylinder 3 |
| 0x4797 | P 4797 Injektor Zylinder 3 |
| 0x4798 | P 4798 Injektor Zylinder 3 |
| 0x47A5 | P 47A5 Injektor Zylinder 4 |
| 0x4795 | P 4795 Injektor Zylinder 3 |
| 0x47A6 | P 47A6 Injektor Zylinder 4 |
| 0x47A7 | P 47A7 Injektor Zylinder 4 |
| 0x47A8 | P 47A8 Injektor Zylinder 4 |
| 0x47B5 | P 47B5 Injektor Zylinder 5 |
| 0x47B6 | P 47B6 Injektor Zylinder 5 |
| 0x47B7 | P 47B7 Injektor Zylinder 5 |
| 0x47B8 | P 47B8 Injektor Zylinder 5 |
| 0x47C5 | P 47C5 Injektor Zylinder 6 |
| 0x47C6 | P 47C6 Injektor Zylinder 6 |
| 0x47C7 | P 47C7 Injektor Zylinder 6 |
| 0x47C8 | P 47C8 Injektor Zylinder 6 |
| 0x47D5 | P 47D5 Injektor Zylinder 7 |
| 0x47D6 | P 47D6 Injektor Zylinder 7 |
| 0x47D7 | P 47D7 Injektor Zylinder 7 |
| 0x47D8 | P 47D8 Injektor Zylinder 7 |
| 0x47E5 | P 47E5 Injektor Zylinder 8 |
| 0x47E6 | P 47E6 Injektor Zylinder 8 |
| 0x47E7 | P 47E7 Injektor Zylinder 8 |
| 0x47E8 | P 47E8 Injektor Zylinder 8 |
| 0x4803 | P 4803 Drehmomentueberwachung ACC |
| 0x4810 | P 4810 Drehmomenteingriff ACC |
| 0x4830 | P 4830 Ansauglufttemperatursensor |
| 0x4831 | P 4831 Ansauglufttemperatursensor |
| 0x4832 | P 4832 Ansauglufttemperatursensor |
| 0x4841 | P 4841 (1491) Abgasrueckfuehr-Regelung 2 |
| 0x4850 | P 4850 (1492) Abgasrueckfuehr-Regelung 2 |
| 0x4863 | P 4863 Fahrgeschwindigkeitsregelung |
| 0x4870 | P 4870 Aussetzerkennung in mehreren Zylindern |
| 0x4880 | P 4880 Aussetzerkennung Zylinder 1 |
| 0x4890 | P 4890 Aussetzerkennung Zylinder 2 |
| 0x48A5 | P 48A5 Botschaft (VEH_MOD, 0x315) |
| 0x48A6 | P 48A6 Botschaft (VEH_MOD, 0x315) |
| 0x48A7 | P 48A7 Botschaft (VEH_MOD, 0x315) |
| 0x48A8 | P 48A8 Botschaft (VEH_MOD, 0x315) |
| 0x48F2 | P 48F2 CAN Bus A |
| 0x48F3 | P 48F3 CAN Bus A |
| 0x4900 | P 4900 Momenteneingriff DSC (nv) |
| 0x4912 | P 4912 (3200) CAN Bus B |
| 0x4913 | P 4913 (3201) CAN Bus B |
| 0x4920 | P 4920 Momenteneingriff Getriebe (nv) |
| 0x4930 | P 4930 Aussetzerkennung Zylinder 3 |
| 0x4940 | P 4940 Aussetzerkennung Zylinder 4 |
| 0x4950 | P 4950 Aussetzerkennung Zylinder 5 |
| 0x4960 | P 4960 Aussetzerkennung Zylinder 6 |
| 0x4970 | P 4970 (FRM3) Botschaft |
| 0x4971 | P 4971 (FRM3) Botschaft |
| 0x4972 | P 4972 (FRM3) Botschaft |
| 0x4973 | P 4973 (FRM3) Botschaft |
| 0x4991 | P 4991 Botschaft (STAT_KOMBI, 0x1B4) |
| 0x4992 | P 4992 Botschaft (STAT_KOMBI, 0x1B4) |
| 0x4993 | P 4993 Botschaft (STAT_KOMBI, 0x1B4) |
| 0x49A2 | P 49A2 Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x49A3 | P 49A3 Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x49F2 | P 49F2 Botschaft (WHEEL_SPEED, 0xCE) |
| 0x49F3 | P 49F3 Botschaft (WHEEL_SPEED, 0xCE) |
| 0x4A02 | P 4A02 Klemme 15 |
| 0x4A03 | P 4A03 Klemme 15 |
| 0x4A10 | P 4A10 Bitserielle Datenschnittstelle BSD |
| 0x4A13 | P 4A13 Bitserielle Datenschnittstelle BSD |
| 0x4A30 | P 4A30 Multifunktionslenkrad |
| 0x4A31 | P 4A31 Multifunktionslenkrad |
| 0x4A32 | P 4A32 Multifunktionslenkrad |
| 0x4A33 | P 4A33 Multifunktionslenkrad |
| 0x4A41 | P 4A41 EWS Schnittstellenfehler |
| 0x4A42 | P 4A42 EWS Schnittstellenfehler |
| 0x4A43 | P 4A43 EWS Schnittstellenfehler |
| 0x4A50 | P 4A50 EWS EEPROM Wechselcodeablage fehlerhaft |
| 0x4A51 | P 4A51 EWS EEPROM Wechselcodeablage fehlerhaft |
| 0x4A60 | P 4A60 EWS Manipulation |
| 0x4A61 | P 4A61 EWS Manipulation |
| 0x4A62 | P 4A62 EWS Manipulation |
| 0x4A63 | P 4A63 EWS Manipulation |
| 0x4A70 | P 4A70 Kennfeld FMTC_trq2qBas_MAP falsch |
| 0x4A80 | P 4A80 Ladeluftschlauch-Ueberwachung |
| 0x4AB0 | P 4AB0 Elektrischer Zuheizer |
| 0x4AB2 | P 4AB2 Elektrischer Zuheizer |
| 0x4AC0 | P 4AC0 Elektrischer Zuheizer 2 (nv) |
| 0x4AC2 | P 4AC2 Elektrischer Zuheizer 2 (nv) |
| 0x4AD0 | P 4AD0 Elektrischer Zuheizer 3 (nv) |
| 0x4AD2 | P 4AD2 Elektrischer Zuheizer 3 (nv) |
| 0x4AE0 | P 4AE0 E-Boxluefter |
| 0x4AE1 | P 4AE1 E-Boxluefter |
| 0x4AE2 | P 4AE2 E-Boxluefter |
| 0x4AE3 | P 4AE3 E-Boxluefter |
| 0x4AF0 | P 4AF0 Steuergeraetetemperaturfuehler |
| 0x4AF1 | P 4AF1 Steuergeraetetemperaturfuehler |
| 0x4B00 | P 4B00 Steuergeraetetemperatur |
| 0x4B10 | P 4B10 (1278) Laufruheregler |
| 0x4B11 | P 4B11 (1279) Laufruheregler |
| 0x4B20 | P 4B20 Elektroluefter |
| 0x4B22 | P 4B22 Elektroluefter |
| 0x4B30 | P 4B30 Elektroluefter 2 (nv) |
| 0x4B32 | P 4B32 Elektroluefter 2 (nv) |
| 0x4B40 | P 4B40 Elektroluefter 3 (nv) |
| 0x4B42 | P 4B42 Elektroluefter 3 (nv) |
| 0x4B50 | P 4B50 Mengenabgleich |
| 0x4B60 | P 4B60 Mengendriftkompensation |
| 0x4B90 | P 4B90 Raildruckueberwachung bei Motorstart |
| 0x4BA0 | P 4BA0 (0113) Ansauglufttemperatursensor |
| 0x4BA1 | P 4BA1 (0112) Ansauglufttemperatursensor |
| 0x4BB0 | P 4BB0 (3269) Versorgungsspannung Luftmassenmesser |
| 0x4BB1 | P 4BB1 (3270) Versorgungsspannung Luftmassenmesser |
| 0x4BB5 | P 4BB5 (3273) Luftmassenmesser |
| 0x4BB6 | P 4BB6 (3274) Luftmassenmesser |
| 0x4BB7 | P 4BB7 Luftmassenmesser |
| 0x4BC0 | P 4BC0 (0102) Luftmassenmesser |
| 0x4BC1 | P 4BC1 (0103) Luftmassenmesser |
| 0x4BC2 | P 4BC2 (0101) Luftmassenmesser |
| 0x4BC5 | P 4BC5 Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BC6 | P 4BC6 Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BC7 | P 4BC7 Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser) |
| 0x4BD2 | P 4BD2 Drehmomentanforderung ARS |
| 0x4BD5 | P 4BD5 Motorlager |
| 0x4BD6 | P 4BD6 Motorlager |
| 0x4BD7 | P 4BD7 Motorlager |
| 0x4BD8 | P 4BD8 Motorlager |
| 0x4BE2 | P 4BE2 Botschaft (GEARBX_DATA, 0xBA) |
| 0x4BE3 | P 4BE3 Botschaft (GEARBX_DATA, 0xBA) |
| 0x4BE7 | P 4BE7 Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x4BE8 | P 4BE8 Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x4BF2 | P 4BF2 Botschaft (HEAT_AC, 0x1B5) |
| 0x4BF3 | P 4BF3 Botschaft (HEAT_AC, 0x1B5) |
| 0x4BF7 | P 4BF7 Botschaft (MILEAGE_RANGE, 0x330) |
| 0x4BF8 | P 4BF8 Botschaft (MILEAGE_RANGE, 0x330) |
| 0x4C00 | P 4C00 Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C01 | P 4C01 Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C02 | P 4C02 Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C03 | P 4C03 Botschaft (OP_CRCTLACC, 0x194) |
| 0x4C06 | P 4C06 Botschaft (STAT_ARS, 0x1AC) |
| 0x4C07 | P 4C07 Botschaft (STAT_ARS, 0x1AC) |
| 0x4C08 | P 4C08 Botschaft (STAT_ARS, 0x1AC) |
| 0x4C12 | P 4C12 Botschaft (STAT_DSC, 0x19E) |
| 0x4C13 | P 4C13 Botschaft (STAT_DSC, 0x19E) |
| 0x4C15 | P 4C15 Botschaft (TERMINAL, 0x130) |
| 0x4C16 | P 4C16 Botschaft (TERMINAL, 0x130) |
| 0x4C17 | P 4C17 Botschaft (TERMINAL, 0x130) |
| 0x4C18 | P 4C18 Botschaft (TERMINAL, 0x130) |
| 0x4C20 | P 4C20 Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C21 | P 4C21 Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C22 | P 4C22 Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C23 | P 4C23 Botschaft (TORQUE_DSC, 0xB6) |
| 0x4C27 | P 4C27 Botschaft (VELOCITY, 0x1A0) |
| 0x4C28 | P 4C28 Botschaft (VELOCITY, 0x1A0) |
| 0x4C30 | P 4C30 (FRM1) Botschaft |
| 0x4C31 | P 4C31 (FRM1) Botschaft |
| 0x4C32 | P 4C32 (FRM1) Botschaft |
| 0x4C33 | P 4C33 (FRM1) Botschaft |
| 0x4C35 | P 4C35 (FRM2) Botschaft |
| 0x4C36 | P 4C36 (FRM2) Botschaft |
| 0x4C37 | P 4C37 (FRM2) Botschaft |
| 0x4C38 | P 4C38 (FRM2) Botschaft |
| 0x4CC0 | P 4CC0 (FRM4) Botschaft |
| 0x4CE0 | P 4CE0 Partikelfiltersystem |
| 0x4CF3 | P 4CF3 Partikelfiltersystem |
| 0x4D00 | P 4D00 Partikelfiltersystem |
| 0x4D01 | P 4D01 Partikelfiltersystem |
| 0x4D03 | P 4D03 Partikelfiltersystem |
| 0x4D13 | P 4D13 Partikelfiltersystem |
| 0x4D23 | P 4D23 Partikelfiltersystem |
| 0x4D40 | P 4D40 Partikelfiltersystem |
| 0x4D73 | P 4D73 Partikelfiltersystem |
| 0x4DF0 | P 4DF0 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF1 | P 4DF1 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF2 | P 4DF2 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x4DF3 | P 4DF3 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0xCD87 | P CD87 CAN Bus A |
| 0xCD8B | P CD8B (3202) CAN Bus B |
| 0x29CC | CDKMD - Aussetzererkennung Summenfehler |
| 0x29CD | CDKMD00 - Aussetzererkennung Zylinder 1 in 1.Zuendreihenfolge |
| 0x29CE | CDKMD03 - Aussetzererkennung Zylinder 2 in 4.Zuendreihenfolge |
| 0x29CF | CDKMD01 - Aussetzererkennung Zylinder 3 in 2.Zuendreihenfolge |
| 0x29D0 | CDKMD02 - Aussetzererkennung Zylinder 4 in 3.Zuendreihenfolge |
| 0x29DD | CDKSWE - Schlechtwegstreckenerkennung |
| 0x29E5 | CDKFRAO - LR-Adaption multiplikativ Bereich2 (Bank1) |
| 0x29E6 | CDKFRAO2 - LR-Adaption multiplikativ Bereich2 (Bank2) |
| 0x29E7 | CDKRKAT - LR-Adaption additiv pro Zeit (Bank1) |
| 0x29E8 | CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x29E9 | CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x29EA | CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x29EB | CDKFRST - LR-Abweichung  |
| 0x29EC | CDKFRST2 - LR-Abweichung Bank2 |
| 0x29ED | CDKFRAU - LR-Adaption multiplikativ Bereich1 (Bank1) |
| 0x29EE | CDKFRAU2 - LR-Adaption multiplikativ Bereich1 (Bank2) |
| 0x29F4 | CDKKAT - Katalysator-Konvertierung |
| 0x29F5 | CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x29F8 | CDKKATSP - Katalysator-Konvertierung LSU |
| 0x29F9 | CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x29FE | CDKSLS - Sekundaerluftsystem |
| 0x29FF | CDKSLS2 - Sekundaerluftsystem (Bank2) |
| 0x2A01 | CDKSLV - Sekundaerluftventil |
| 0x2A02 | CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2A03 | CDKSLPE - Sekundaerluftpumperelais |
| 0x2A05 | CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2A0E | CDKAGRF - AGR Ventil |
| 0x2A14 | CDKDMTK - DM-TL Feinleck |
| 0x2A17 | CDKDMTL - DM-TL Modul |
| 0x2A19 | CDKTEVE - Tankentlueftungsventil |
| 0x2A1A | CDKTES - Tankentlueftung functional check |
| 0x2A1D | CDKTESK - Tankleckueberwachung |
| 0x2A1E | CDKLDP - Leckdiagnosepumpe |
| 0x2A58 | CDKVVTE - VVT-Enable Ansteuerung |
| 0x2A59 | CDKDVFFS - VVT-Fuehrungssensor |
| 0x2A5B | CDKDVFRS - VVT-Referenzsensor |
| 0x2A5D | CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x2A5F | CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x2A61 | CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x2A63 | CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x2A67 | CDKDVEST - VVT-Ansteuerung |
| 0x2A69 | CDKDVULV - VVT-Leistungsversorgung |
| 0x2A6B | CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2A6C | CDKDVALRN - VVT-Anschlaege lernen notwendig |
| 0x2A6D | CDKDVOVL - VVT-Systemueberlast |
| 0x2A6F | CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x2A70 | CDKDIVVT - Fehler Stromplausibilisierung |
| 0x2A71 | CDKVVTRE - Endstufendiagnose Entlastungsrelais VVT |
| 0x2A72 | CDKVVTLRU - Stellgliedüberwachung VVT Hubverstellung |
| 0x2A80 | CDKENWSE - Einlass-VANOS |
| 0x2A83 | CDKENWS - Nockenwellensteuerung- Einlass |
| 0x2A85 | CDKANWSE - Auslass-VANOS |
| 0x2A88 | CDKANWS - Nockenwellensteuerung Auslass |
| 0x2B5C | CDKN - Kurbelwellengeber |
| 0x2B5D | CDKBM - Bezugsmarkengeber |
| 0x2B61 | CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x2B62 | CDKPH - Nockenwellengeber Einlass |
| 0x2B63 | CDKPH2 - Nockenwellengeber Auslass |
| 0x2B66 | CDKPHM - Master Nockenwellengeber |
| 0x2B70 | CDKSUE - DISA |
| 0x2B80 | CDKLLR - Leerlaufregelung |
| 0x2B8A | CDKKRNT - Klopfregelung Nulltest |
| 0x2B8B | CDKKROF - Klopfregelung Offset |
| 0x2B8C | CDKKRTP - Klopfregelung Testimpuls |
| 0x2B98 | CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x2B99 | CDKNVRBUP - RAM Backup |
| 0x2B9A | CDKURRAM - SG Selbsttest RAM |
| 0x2B9B | CDKURROM - SG Selbsttest ROM |
| 0x2B9C | CDKURRST - SG Selbsttest RESET |
| 0x2B9D | CDKWDA - Ueberspanungserkennung auf VCC |
| 0x2BA7 | CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x2C24 | CDKLSVV - Vertauschte Lambdasonden |
| 0x2C45 | CDKLSV - Lambda-Sonde vor Kat |
| 0x2C46 | CDKLSV2 - Lambda-Sonde vor Kat(Bank2) |
| 0x2C55 | CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x2C56 | CDKLATV - Lambda-Sondenalterung TV |
| 0x2C6A | CDKLSHV - Vertauschte Lambdasonden hinter Kat |
| 0x2C6D | CDKLASH - Lambda-Sondenalterung hinter Kat (BAnk1) |
| 0x2C6E | CDKLASH2 - Lambda-Sondenalterung hinter Kat (Bank2) |
| 0x2C6F | CDKLAVH - Lambdasondenalterung hinter Kat (VL- Prüfung) |
| 0x2C70 | CDKLAVH2 - Lambdasondenalterung hinter Kat Bank2 |
| 0x2C71 | CDKLSH - Lambda-Sonde hinter Kat |
| 0x2C72 | CDKLSH2 - Lambda-Sonde hinter Kat (Bank2) |
| 0x2C9C | CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x2C9D | CDKHSVE2 - Endstufe Heizung Sonde vor Katalysator Bank2 |
| 0x2C9E | CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x2C9F | CDKHSHE2 - Ansteuerung Heizung Sonde hinter Kat (Bank2) |
| 0x2CA0 | CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x2CA1 | CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2CA2 | CDKHSVSA - Heizung Lambdasonde vor Kat (Schubspannung) |
| 0x2CA3 | CDKHSVSA2 - Heizung Lambdasonde vor Kat (Schubspannung) Bank2 |
| 0x2CA8 | CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x2CA9 | CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2CEF | CDKDVEE - DK-Steller |
| 0x2CF0 | CDKDVER - DK-Steller Regelbereich |
| 0x2CF1 | CDKDVEL - DK Positionsueberwachung |
| 0x2CF8 | CDKDK - DK-Potentiometer |
| 0x2CF9 | CDKDK1P - Drosselklappenpoti 1 |
| 0x2CFA | CDKDK2P - Drosselklappenpoti 2 |
| 0x2CFF | CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2D00 | CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2D01 | CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x2D02 | CDKDVEN - Pruefung Notluftpunkt |
| 0x2D03 | CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x2D04 | CDKDVEU - Drosselklappen- Adaption |
| 0x2D05 | CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x2D08 | CDKDVET - Tauscherkennung ohne Adaption |
| 0x2D10 | CDKHFMPL - Plausibilisierung HFM |
| 0x2D11 | CDKMSLAM - Plausibilisierung, Massenstrom Lambdasonde |
| 0x2D12 | CDKMSLAM2 - Plausibilisierung, Massenstrom Lambdasonde Bank2 |
| 0x2D0F | CDKLM - Heissfilmluftmassenmesser |
| 0x2D19 | CDKBWF  - PWG-Bewegung |
| 0x2D1A | CDKFPP - Pedalwertgeber |
| 0x2D1B | CDKFP1P - Pedalwertgeber Poti1 |
| 0x2D1C | CDKFP2P - Pedalwertgeber Poti2 |
| 0x2D28 | CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x2D29 | CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x2D32 | CDKDPSRPL - Plausibilitaet Drucksensor Saugrohr |
| 0x2D6E | CDKUFMV - Momentenueberwachung Ebene 2 |
| 0x2D6F | CDKUFRLIP - Lastsensorueberwachung |
| 0x2D70 | CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2D71 | CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2D72 | CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2D73 | CDKUFPR - Kraftstoffdrucksensor |
| 0x2D74 | CDKUFRKC - Funktionsüberwachung: Lambda-Plausibilisierung |
| 0x2D75 | CDKUFNC - Motordrehzahlueberwachung |
| 0x2D76 | CDKUFSPSC - Pedalwertgeberueberwachung (Ebene2) |
| 0x2D78 | CDKUFMSAC - Ueberwachung Luftmassenstromabgleich |
| 0x2DB4 | CDKMFL - Schnittstelle MFL |
| 0x2DBF | CDKCACC  - CAN ACC Signalfehler |
| 0x2DCA | CDKCEGS - CAN Timeout Getriebesteuergeraet |
| 0x2DCB | CDKCSSG - CAN SSG Signalfehler |
| 0x2DCF | CDKCINS  - CAN- Timeout Instrumentenkombination |
| 0x2DD7 | CDKCDSC - CAN Timeout DSG SG |
| 0x2DD8 | CDKCAFS - Active Front Steering Moment |
| 0x2DD9 | CDKCARS  - CAN ARS Signalfehler |
| 0x2DDA | CDKCCAS  - CAN CAS Signalfehler |
| 0x2DDB | CDKCIHKA  - CAN IHKA Signalfehler |
| 0x2DDC | CDKCSZL  - CAN  SZL Signalfehler |
| 0x2DDD | CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x2DEB | CDKPMBN - Powermanagement Netzwerkfehler |
| 0x2DEC | CDKPMBAT - Powermanagement |
| 0x2DED | CDKPMRUHV - Powermanagement: Ruhestromverletzung |
| 0x2E24 | CDKDZKU0 - Zuendspule Zylinder 1 in 1.Zuendreihenfolge |
| 0x2E25 | CDKDZKU3 - Zuendspule Zylinder 2 in 4.Zuendreihenfolge |
| 0x2E26 | CDKDZKU1 - Zuendspule Zylinder 3 in 2.Zuendreihenfolge |
| 0x2E27 | CDKDZKU2 - Zuendspule Zylinder 4 in 3.Zuendreihenfolge |
| 0x2E30 | CDKEV1 - Einspritzventil Zylinder 1 in 1. Zylinderreihenfolge |
| 0x2E31 | CDKEV4 - Einspritzventil Zylinder 2 in 4. Zylinderreihenfolge |
| 0x2E32 | CDKEV2 - Einspritzventil Zylinder 3 in 2. Zylinderreihenfolge |
| 0x2E33 | CDKEV3 - Einspritzventil Zylinder 4 in 3. Zylinderreihenfolge |
| 0x2E68 | CDKKS1 - Klopfsensor1 |
| 0x2E69 | CDKKS2 - Klopfsensor2 (Bank1) |
| 0x2E6A | CDKKS3 - Klopfsensor3 |
| 0x2E6B | CDKKS4 - Klopfsensor4 |
| 0x2E7C | CDKBSD - BSD-Leitungsfehler |
| 0x2E86 | CDKEWAPU - Elektrische Wasserpumpe |
| 0x2E8B | CDKIBSK - IBS Kommunikation |
| 0x2E8C | CDKIBSA - IBS Allgemeine Fehler |
| 0x2E8D | CDKIBSP - IBS Plausibilitaet |
| 0x2E95 | CDKDGENBS - Generatorkommunikation |
| 0x2E97 | CDKDGEN/CDKGEN - BSD Generator |
| 0x2E9F | CDKOEZS - Fehler Oelqualitaetssensor |
| 0x2EA0 | CDKQLT - Oelzustandssensor |
| 0x2EE0 | CDKTM - Temperaturfuehler Motorkuehlmittel |
| 0x2EEA | CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x2EF4 | CDKTHS - Thermostat Kennfeldkühlung, mechanisch |
| 0x2EF5 | CDKETS - Thermostat Kennfeldkühlung, Ansteuerung |
| 0x2EF6 | CDKKFT - Kennfeldthermostat |
| 0x2EFE | CDKMLE - Motorluefter |
| 0x2F08 | CDKTA - Ansauglufttemperatur |
| 0x2F12 | CDKKOSE - Klimakompressorsteuerung |
| 0x2F17 | CDKMTOEL - Zwangsschaltung EGS |
| 0x2F21 | CDKWMKD - Motorsteuerung, Leistungsreduktion |
| 0x2F44 | CDKWFS - EWS3.3 Manipulationsschutz |
| 0x2F45 | CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x2F46 | CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x2F4E | CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x2F50 | CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft  |
| 0x2F58 | CDKSTAE - Startautomatik Ansteuerung |
| 0x2F59 | CDKSTS - Startautomatik Eingang |
| 0x2F5A | CDKSTA - Startautomatik |
| 0x2F62 | CDKBREMS - Schalter Bremse |
| 0x2F67 | CDKKUPPL - Schalter Kupplung |
| 0x2F6C | CDKAKRE - Ansteuerung Abgasklappe |
| 0x2F71 | CDKELS - E-Box Luefter |
| 0x2F76 | CDKDSU - Drucksensor Umgebung |
| 0x2F7B | CDKPOELS - Oeldruckschalter |
| 0x2F80 | CDKCUHR - Fehler CAN / relativer Zeitgeber |
| 0x2F85 | CDKTSG - DME- Temperatur |
| 0x2F8A | CDKUB - Batteriespannung |
| 0x2F94 | CDKKPE - Kraftstoffpumpen-Relais |
| 0x2F99 | CDKTUM - Umgebungstemperatur |
| 0x2F9E | CDKTOENS - Thermischer Oelniveausensor |
| 0x2FA3 | CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0xCD87 | CDKCANA - PT - CAN Bus Off |
| 0xCD8B | CDKCANB - Local CAN Bus Off |
| 0xCD9B | CDKX315 - Status Fahrzeugmodus |
| 0xCDA1 | CDKXC4 - Lenkradwinkel |
| 0xCDA2 | CDKX3B4 - Powermanagement Batteriespannung |
| 0xCDA3 | CDKX334 - Powermanagement Ladespannung |
| 0xCDA7 | CDKX3B0 - Status Gang Rückwärts |
| 0xCDAA | CDKX135 - Steuerung Crashabschaltung EKP |
| 0xCDAC | CDKX3B5 - Status Wasserventil |
| 0x0000 | unbekannter Fehlerort |

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
| 0x612C | P Hardwarefehler Steuergerät |
| 0x612E | P Fahrgestellnummernvergleich |
| 0x612F | P Codierdatenfehler |
| 0x6130 | P Boot- oder Flashfehler MPC |
| 0x6131 | P Flashvorgang oder -fehler NEC |
| 0x6132 | P Serielle Schnittstelle zum SZL |
| 0x6133 | P Motorspannung |
| 0x6134 | P Motorstrom |
| 0x6135 | P Sperrenfehler |
| 0x6136 | P Sensorversorgung Motorlage und -position |
| 0x6137 | P Motorlagesensor |
| 0x6138 | P Motor-Übertemperatur |
| 0x6139 | P Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | P Versorgungsspannung Kl. 30 |
| 0x613B | P Fahrdynamiksensoren |
| 0x613C | P Winkelsummenbeziehung fehlerhaft |
| 0x613D | P elektr. Sperrenfehler |
| 0x613E | P mechanischer Sperrenfehler |
| 0x613F | P Lenkwinkelplausibilität |
| 0x6140 | P Lenkwinkelplausibilisierung CAN - Seriell |
| 0x6141 | P Motordynamiküberwachung |
| 0x6142 | P ECO-Ventil im SGM |
| 0x6143 | P Servoventil im SGM |
| 0x6144 | P Unvollständiger Powerdown |
| 0x6145 | P keine Ueberwachung der Winkelsummenbeziehung |
| 0x6146 | P Motortemperatursensor |
| 0x6147 | P Lenkwinkelsensorversorgung |
| 0x6148 | P Voterfehler diversitaeres Rechnen |
| 0x6149 | P KLD |
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
| 0xCEA0 | P Botschaft (Status Lenkunterstützung, ID=0E0) von SGM PT-CAN |
| 0xCEA1 | P Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | P Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0xCEA3 | P Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
| 0xCEC3 | P letzter Network DTC AFS |
| 0x6001 | KFC_NEC_ERR_1 |
| 0x6002 | KFC_NEC_ERR_2 |
| 0x6003 | KFC_NEC_ERR_3 |
| 0x6004 | KFC_NEC_ERR_4 |
| 0x6005 | KFC_NEC_ERR_5 |
| 0x6006 | KFC_NEC_ERR_6 |
| 0x6007 | KFC_NEC_ERR_7 |
| 0x6008 | KFC_NEC_ERR_8 |
| 0x6009 | KFC_PROG |
| 0x600A | KFC_COMM |
| 0x600B | KFC_EEPROMNR |
| 0x600C | KFC_EEPROMHR |
| 0x600D | KFC_KLD |
| 0x600E | KFC_ROM |
| 0x600F | KFC_TBD15 |
| 0x6010 | KFC_CORE |
| 0x6011 | KFC_TBD17 |
| 0x6012 | KFC_OS |
| 0x6013 | KFC_MLW_INVALID |
| 0x6014 | KFC_VX_REF |
| 0x6015 | KFC_DPSI1 |
| 0x6016 | KFC_TBD22 |
| 0x6017 | KFC_DPSI2 |
| 0x6018 | KFC_TBD24 |
| 0x6019 | KFC_AY1 |
| 0x601A | KFC_TBD26 |
| 0x601B | KFC_AY2 |
| 0x601C | KFC_TBD28 |
| 0x601D | KFC_DEH |
| 0x601E | KFC_TBD30 |
| 0x601F | KFC_TBD31 |
| 0x6020 | KFC_LWS |
| 0x6021 | KFC_MPC_POSCTRL_ERR |
| 0x6022 | KFC_VINCOMP |
| 0x6023 | KFC_CONFIG |
| 0x6024 | KFC_MPC_BOOT_FLASH |
| 0x6025 | KFC_NEC_UPDATE |
| 0x6026 | KFC_MPC_SCI_ERR |
| 0x6027 | KFC_INV_SER_SLZ |
| 0x6028 | KFC_GEST_1 |
| 0x6029 | KFC_GEST_2 |
| 0x602A | KFC_GEST_3 |
| 0x602B | KFC_LOW_VOLTAGE |
| 0x602C | KFC_LWS_FS |
| 0x602D | KFC_LWS_FS_OFF |
| 0x602E | KFC_SENSOR_DRIVE |
| 0x602F | KFC_CANA |
| 0x6030 | KFC_CANB |
| 0x6031 | KFC_CANA_Y1 |
| 0x6032 | KFC_CANA_Y2 |
| 0x6033 | KFC_CANA_DSC_VWHL |
| 0x6034 | KFC_CANA_LWSRAD |
| 0x6035 | KFC_CANA_DSC_REGULATION |
| 0x6036 | KFC_CANA_SZL_LWDS |
| 0x6037 | KFC_TBD55 |
| 0x6038 | KFC_TBD56 |
| 0x6039 | KFC_CANB_DSC_STAT |
| 0x603A | KFC_CANB_DME_TORQ1 |
| 0x603B | KFC_CANB_DME_TORQ3 |
| 0x603C | KFC_CANB_DME_MOTORDAT |
| 0x603D | KFC_GMK |
| 0x603E | KFC_CANB_CAS_KLEMMEN |
| 0x603F | KFC_TBD63 |
| 0x6040 | KFC_CANB_KI_KM |
| 0x6041 | KFC_TBD65 |
| 0x6042 | KFC_CANA_SZL_LWDS_INIT |
| 0x6043 | KFC_RSCAN |
| 0x6044 | KFC_TBD68 |
| 0x6101 | NKFC_CAN |
| 0x6102 | NKFC_CCU |
| 0x6103 | NKFC_EEPROMNR |
| 0x6104 | NKFC_US |
| 0x6105 | NKFC_EPROM |
| 0x6106 | NKFC_IWD |
| 0x6107 | NKFC_COMP |
| 0x6108 | NKFC_RAM |
| 0x6109 | NKFC_RELAIS |
| 0x610A | NKFC_SMCURR |
| 0x610B | NKFC_SMPOS |
| 0x610C | NKFC_SMVOLT |
| 0x610D | NKFC_PROG |
| 0x610E | NKFC_EEPROMHR |
| 0x610F | NKFC_MOD_MC |
| 0x6110 | NKFC_BRAKE |
| 0x6111 | NKFC_COMM |
| 0x6112 | NKFC_MTEMP |
| 0x6113 | NKFC_LWSSUPP |
| 0x6114 | NKFC_DPOP |
| 0x6115 | NKFC_MPC |
| 0x6116 | NKFC_MPC_SUBS_1 |
| 0x6117 | NKFC_MPC_SUBS_2 |
| 0x6118 | NKFC_MPC_SUBS_3 |
| 0x6119 | NKFC_MPC_SUBS_4 |
| 0x611A | NKFC_MPC_SUBS_5 |
| 0x611B | NKFC_MPC_SUBS_6 |
| 0x611C | NKFC_MPC_SUBS_7 |
| 0x611D | NKFC_MPC_SUBS_8 |
| 0x611E | NKFC_MPC_SUBS_9 |
| 0x611F | NKFC_MTEMP_SENS |
| 0x6120 | NKFC_EN_CHOKE |
| 0x6121 | NKFC_ST |
| 0x6122 | NKFC_ECO |
| 0x6123 | NKFC_COMP_CAN |
| 0x6124 | NKFC_TBD36 |
| 0x6125 | NKFC_TBD37 |
| 0x6126 | NKFC_CANA_WHEELSPEED |
| 0x6127 | NKFC_BRVOLT |
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
| 0x6299 | P Übertemperatur Highside-Treiber Stufe 2 |
| 0x629A | P Übertemperatur Highside-Treiber Stufe 1 |
| 0xCED4 | P Timeout CAN-Message 0xAA (TORQUE_3) |
| 0x629C | P CRC-Fehler im EEPROM |
| 0xFFFF | P unbekannter Fehlerort |
| 0x629D | P Default Kodierdaten |
| 0xCEC7 | P CAN Bus-Off |
| 0x629E | P CRASH/+Batterie-Abschaltung |
| 0x629F | P Abschaltung durch ASIC Fail |
| 0x62A1 | S WakeUp zu hoch |
| 0x62A2 | S WakeUp fehlt |
| 0x62A3 | S KL30 fehlt |
| 0x62A4 | S KL30 zu hoch |
| 0x62A5 | S Drehz. zu niedrig bei KL30-Untersp. |
| 0x62A6 | S FLASH-Anforderung (DNMT) bei v oder n ungleich Null |
| 0x62A7 | S ASIC Fail |
| 0xFFFF | unbekannter Fehlerort |

### ID_18

| ORT | ORTTEXT |
| --- | --- |
| 0x2710 | S1 SOLENOID |
| 0x2711 | S1 SOLENOID |
| 0x2720 | S2 SOLENOID |
| 0x2721 | S2 SOLENOID |
| 0x2800 | SHIFT LOCK SOLENOID |
| 0x2801 | SHIFT LOCK SOLENOID |
| 0x2900 | LINEAR SOLENOID ( SLT ) |
| 0x2901 | LINEAR SOLENOID ( SLT ) |
| 0x2902 | LINEAR SOLENOID ( SLT ) |
| 0x2910 | LINEAR SOLENOID  (SLU) |
| 0x2911 | LINEAR SOLENOID  (SLU) |
| 0x2912 | LINEAR SOLENOID  (SLU) |
| 0x2920 | LINEAR SOLENOID  (SLC1) |
| 0x2921 | LINEAR SOLENOID  (SLC1) |
| 0x2922 | LINEAR SOLENOID  (SLC1) |
| 0x2930 | LINEAR SOLENOID  (SLC2) |
| 0x2931 | LINEAR SOLENOID  (SLC2) |
| 0x2932 | LINEAR SOLENOID  (SLC2) |
| 0x2940 | LINEAR SOLENOID  (SLC3) |
| 0x2941 | LINEAR SOLENOID  (SLC3) |
| 0x2942 | LINEAR SOLENOID  (SLC3) |
| 0x2950 | LINEAR SOLENOID  (SLB1) |
| 0x2951 | LINEAR SOLENOID  (SLB1) |
| 0x2952 | LINEAR SOLENOID  (SLB1) |
| 0x2A00 | OUTPUT REVOLUTION SENSOR |
| 0x2A01 | OUTPUT REVOLUTION SENSOR |
| 0x2A02 | OUTPUT REVOLUTION SENSOR |
| 0x2B00 | INPUT REVOLUTION SENSOR |
| 0x2B01 | INPUT REVOLUTION SENSOR |
| 0x2B02 | INPUT REVOLUTION SENSOR |
| 0x2C00 | INHIBITOR SWITCH |
| 0x2C01 | INHIBITOR SWITCH |
| 0x2C10 | MANUAL SWITCH |
| 0x2C11 | MANUAL SWITCH |
| 0x2D00 | OIL TEMPERATURE SENSOR |
| 0x2D01 | OIL TEMPERATURE SENSOR |
| 0x2D02 | OIL TEMPERATURE SENSOR |
| 0x2E00 | Battery voltage |
| 0x2E01 | Battery voltage |
| 0x2F00 | FLASH ROM CHECK SUM |
| 0x2F10 | RAM |
| 0x2F20 | EEPROM |
| 0xCF0B | CAN Bus |
| 0xCF14 | CAN Bus |
| 0xCF15 | CAN Bus |
| 0x3000 | CAN Bus |
| 0x3010 | CAN Bus |
| 0x3020 | CAN Bus |
| 0x3030 | CAN Bus |
| 0x3040 | CAN Bus |
| 0x3050 | CAN Bus |
| 0x3060 | CAN Bus |
| 0x3070 | CAN Bus |
| 0x3080 | CAN Bus |
| 0x3100 | GEAR RATIO |
| 0x3111 | GEAR RATIO |
| 0x3110 | GEAR RATIO |
| 0x3120 | GEAR RATIO |
| 0x3130 | GEAR RATIO |
| 0x3140 | GEAR RATIO |
| 0x3150 | GEAR RATIO |
| 0x3160 | GEAR RATIO |
| 0x3200 | Neutral Condition |
| 0x3210 | Neutral Condition |
| 0x3300 | Unusual shifting |
| 0x3310 | Unusual shifting |
| 0x3320 | Unusual shifting |
| 0x3330 | Unusual shifting |
| 0x3400 | Lock up clutch |
| 0x3410 | Lock up clutch |
| 0xFFFF | unbekannter Fehlerort |

### ID_19

| ORT | ORTTEXT |
| --- | --- |
| 0x5208 | 5208 Stellmotor Verkabelung |
| 0x52D0 | 52D0 Inkrementalgeber DIR - Leitung |
| 0x52D1 | 52D1 Inkrementalgeber Versorgung |
| 0x52D2 | 52D2 Inkrementalgeber IMP - Leitung |
| 0x52D4 | 52D4 Inkrementalgeber unplausibel |
| 0x5398 | 5398 Prüfsummenfehler Programmcode |
| 0x5399 | 5399 Prüfsummenfehler EEPROM |
| 0x539A | 539A Watchdog Fehlfunktion |
| 0x539B | 539B Prüffehler RAM |
| 0x539D | 539D Steuergerät interner Fehler |
| 0x53A0 | 53A0 Steuergerät nicht codiert bzw. Codierung ist fehlerhaft |
| 0x53FB | 53FB Fehlende Versorgung |
| 0x53FC | 53FC KL30 Versorgungsspannung |
| 0x53FD | 53FD KL30g Versorgungsspannung |
| 0x53FE | 53FE Unerwarteter Reset |
| 0x53FF | 53FF Kl15 Plausibilität |
| 0x5460 | 5460 Motorstrommessung Plausibilität |
| 0x5461 | 5461 Fehler Stellmotoransteuerung |
| 0x5462 | 5462 Fehler Stellmotor oder erhöhter Kraftbedarf Kupplung |
| 0x5463 | 5463 Bruch Mechanik |
| 0x54C4 | 54C4 Kalibrierung fehlerhaft |
| 0x54C5 | 54C5 Motorstrommessung Offset Strommessung |
| 0x54C6 | 54C6 Ölverschleiss |
| 0x55C0 | 55C0 Allrad Abschaltung. Abbruch VGSG-Allrad-Notlaufregelung wegen falscher CAN-Signale. |
| 0x55C2 | 55C2 Allrad Abschaltung. Keine DXC Sollmomentenvorgabe. |
| 0x55C3 | 55C3 VGSG-Allrad-Notlaufregelung aktiviert. Keine DXC Sollmomentenvorgabe. |
| 0x55C4 | 55C4 CAN_MESSAGE_SOLL_MOM_ANF, BB |
| 0x55C5 | 55C5 CAN_MESSAGE_TORQUE_3, AA |
| 0x55C6 | 55C6 CAN_MESSAGE_GESCHWINDIGKEIT_RAD, CE |
| 0x55C7 | 55C7 CAN_MESSAGE_GESCHWINDIGKEIT, 1A0 |
| 0x55C8 | 55C8 CAN_MESSAGE_KLEMMENSTATUS, 130 |
| 0x55C9 | 55C9 CAN_MESSAGE_TORQUE_1, A8 |
| 0x55CA | 55CA CAN_MESSAGE_KILOMETERSTAND, 330 |
| 0x55CB | 55CB CAN_MESSAGE_A_TEMP_RELATIVZEIT, 310 |
| 0x55CD | 55CD CAN_MESSAGE_STAT_DSC, 19E |
| 0x55CE | 55CE CAN_MESSAGE_GETRIEBEDATEN, BA |
| 0x55CF | 55CF CAN_MESSAGE_GETRIEBEDATEN_2, 1A2 |
| 0x55D0 | 55D0 CAN_MESSAGE_LENKRADWINKEL, C4 |
| 0xCF4B | CF4B CAN Bus Off |
| 0xCF54 | CF54 CAN_TIMEOUT_SOLL_MOM_ANF, BB |
| 0xCF55 | CF55 CAN_TIMEOUT_TORQUE_3, AA |
| 0xCF56 | CF56 CAN_TIMEOUT_GESCHWINDIGKEIT_RAD, CE |
| 0xCF57 | CF57 CAN_TIMEOUT_GESCHWINDIGKEIT, 1A0 |
| 0xCF58 | CF58 CAN_TIMEOUT_KLEMMENSTATUS, 130 |
| 0xCF59 | CF59 CAN_TIMEOUT_TORQUE_1, A8 |
| 0xCF5A | CF5A CAN_TIMEOUT_KILOMETERSTAND, 330 |
| 0xCF5B | CF5B CAN_TIMEOUT_A_TEMP_RELATIVZEIT, 310 |
| 0xCF5D | CF5D CAN_TIMEOUT_STAT_DSC, 19E |
| 0xCF5E | CF5E CAN_TIMEOUT_GETRIEBEDATEN, BA |
| 0xCF5F | CF5F CAN_TIMEOUT_GETRIEBEDATEN_2, 1A2 |
| 0xCF60 | CF60 CAN_TIMEOUT_LENKRADWINKEL, C4 |
| 0x55C1 | 55C1 ALLRADVERLUST |
| 0x54C7 | 54C7 Modell - Inkrementalgeber unplausibel |
| 0x54C8 | 54C8 Klassierwiderstand am Stellmotor |
| 0x54C9 | 54C9 Temperatursensor am Stellmotor |
| 0x539E | 539E Funktionsfehler VTG Gesamtsystem |
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
| 0x62CC | 0x62CC - Steuergeraetefehler |
| 0x62CD | 0x62CD - Codierdatenfehler |
| 0x62CE | 0x62CE - Überspannungsfehlerr |
| 0x62CF | 0x62CF - Unterspannungsfehler |
| 0x62D0 | 0x62D0 - Abschaltung Bremsenueberhitzung |
| 0x62D1 | 0x62D1 - Abschaltung durch Ueberwachungsrechner |
| 0x62D2 | 0x62D2 - Kodierung ACC/DCC unplausibel |
| 0x62D3 | 0x62D3 - V_dsc und V_anz unplausibel |
| 0x62D4 | 0x62D4 - Abschaltung durch Motorsteuergeraet |
| 0x62D5 | 0x62D5 - Abschaltung durch Getriebesteuergeraet |
| 0x62D6 | 0x62D6 - Abschaltung durch Bremsensteuergeraet |
| 0x62D7 | 0x62D7 - Abschaltung durch ACC-Sensor |
| 0x62D8 | 0x62D8 - Abschaltung durch Kombi |
| 0x62D9 | 0x62D9 - Abschaltung durch FFP |
| 0x62DA | 0x62DA - Sicherheitsabschaltung Antrieb |
| 0x62DB | 0x62DB - Sicherheitsabschaltung Bremse |
| 0x62DC | 0x62DC - SG-Fehler (Weckleitung) |
| 0x62DE | 0x62DE - SG-Fehler (HL CAN Abschaltung) |
| 0x62DF | 0x62DF - SG-Fehler (Startup) |
| 0x62E0 | 0x62E0 - SG-Fehler (SCI) |
| 0x62E1 | 0x62E1 - SG-Fehler (Stack/Task Hauptrechner) |
| 0x62E2 | 0x62E2 - SG-Fehler (Intern Hauptrechner) |
| 0x62E3 | 0x62E3 - SG-Fehler (Exception Hauptrechner) |
| 0x62E4 | 0x62E4 - SG-Fehler (Reset Hauptrechner) |
| 0x62E5 | 0x62E5 - SG-Fehler (Stack/Task Ueberwachungsrechner) |
| 0x62E6 | 0x62E6 - SG-Fehler (Intern Ueberwachungsrechner) |
| 0x62E7 | 0x62E7 - SG-Fehler (Reset Ueberwachungsrechner) |
| 0x62E8 | 0x62E8 - Falsche Fahrgestellnummer |
| 0x62E9 | 0x62E9 - Undokumentierte Fehlerabschaltung |
| 0x62EA | 0x62EA - Vorwarnung Beschleunigungsüberwachung |
| 0x62EB | 0x62EB - Vorwarnung Verzögerungsüberwachung |
| 0x63CC | 0x63CC - ACC Sollwerte unplausibel |
| 0xD007 | 0xD007 - Bus Kommunikationsfehler PT-CAN |
| 0xD00B | 0xD00B - Bus Kommunikationsfehler S-CAN |
| 0xD014 | 0xD014 - Botschaft Anzeige Getriebedaten, ID 1D2h |
| 0xD015 | 0xD015 - Botschaft Aussentemperatur/Relativzeit, ID 310h |
| 0xD016 | 0xD016 - Botschaft Bedienung Tempomat/ACC, ID 194h |
| 0xD017 | 0xD017 - Botschaft Blinken, ID 1F6h |
| 0xD018 | 0xD018 - Botschaft Dremoment 1 PT-CAN, ID A8h |
| 0xD019 | 0xD019 - Botschaft Drehmoment 2, ID A9h |
| 0xD01A | 0xD01A - Botschaft Drehmoment 3 PT-CAN, ID AAh |
| 0xD01B | 0xD01B - Botschaft Fahrzeugmodus, ID 315h |
| 0xD01C | 0xD01C - Botschaft Geschwindigkeit PT-CAN, ID 1A0h |
| 0xD01D | 0xD01D - Botschaft Getriebedaten, ID BAh |
| 0xD01E | 0xD01E - Botschaft Kilometerstand/Reichweite, ID 330h |
| 0xD01F | 0xD01F - Botschaft Klemmenstatus, ID 130h |
| 0xD020 | 0xD020 - Botschaft Lenkradwinkel PT-CAN, ID C4h |
| 0xD021 | 0xD021 - Botschaft Objektdaten ACC, ID 159h |
| 0xD022 | 0xD022 - Botschaft Raddruecke, ID 2B2h |
| 0xD023 | 0xD023 - Botschaft Radgeschwindigkeit PT-CAN, ID CEh |
| 0xD024 | 0xD024 - Botschaft Radmoment Antriebsstrang 1, ID B4h |
| 0xD025 | 0xD025 - Botschaft Radmoment Antriebsstrang 2, ID ACh |
| 0xD026 | 0xD026 - Botschaft Radmoment Bremse, ID E1h |
| 0xD027 | 0xD027 - Botschaft Radtoleranzabgleich, ID 374h |
| 0xD028 | 0xD028 - Botschaft Sitzbelegung Gurtkontakte, ID 2FAh |
| 0xD029 | 0xD029 - Botschaft Status ACC, ID 15Ch |
| 0xD02A | 0xD02A - Botschaft Status Anhaenger, ID 2E4h |
| 0xD02B | 0xD02B - Botschaft Status DSC, ID 19Eh |
| 0xD02D | 0xD02D - Botschaft Status FFP, ID 162h |
| 0xD02E | 0xD02E - Botschaft Status Gang Rueckwaerts, ID 3B0h |
| 0xD02F | 0xD02F - Botschaft Sollmomentanforderung, ID BBh |
| 0xD030 | 0xD030 - Botschaft Status Kombi, ID 1B4h |
| 0xD031 | 0xD031 - Botschaft Fahrgestellnummer, ID 380h |
| 0xD032 | 0xD032 - Botschaft Fahrzeugtyp, ID 388h |
| 0xFFFF | unbekannter Fehlerort |

### ID_1D

| ORT | ORTTEXT |
| --- | --- |
| 0x62EC | P Temperatursensor |
| 0x62ED | P Motorhallsensor |
| 0x62EE | P H-Brücke/Torquemotor |
| 0x62EF | P S12DG128MFU |
| 0x62F0 | P Fehlerhaftes CAN Signal in Botschaft ANF_WINKEL_FFP |
| 0x62F1 | P KL 30 |
| 0x62F2 | P Weckleitung |
| 0x62F3 | P Fehlerhaftes CAN Signal in Botschaft KLEMMENSTATUS |
| 0x62F4 | P EEPROM Fehler |
| 0x62F5 | P Temperaturerwärmung |
| 0xD047 | P Pt-Can Kommunikationsfehler |
| 0xD054 | P CAN Botschaft (ANF_WINKEL_FFP, 0x15F) |
| 0xD055 | P CAN Botschaft (KILOMETERSTAND, 0x330) |
| 0xD056 | P CAN Botschaft (KLEMMENSTATUS, 0x130) |
| 0xD057 | P CAN Botschaft (TORQUE_3, 0xAA) |
| 0xD058 | P CAN Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x62F6 | P Fehlerhaftes CAN Signal in Botschaft TORQUE_3 |
| 0x62F7 | P Strommessung |
| 0x62F8 | P Regelanforderung |
| 0x62F9 | P Hallsensor Plausibilität |
| 0x62EC | S Temperatursensor |
| 0x62ED | S Motorhallsensor |
| 0x62EE | S H-Brücke/Torquemotor |
| 0x62EF | S S12DG128MFU |
| 0x62F0 | S Fehlerhaftes CAN Signal in Botschaft ANF_WINKEL_FFP |
| 0x62F1 | S KL 30 |
| 0x62F2 | S Weckleitung |
| 0x62F3 | S Fehlerhaftes CAN Signal in Botschaft KLEMMENSTATUS |
| 0x62F4 | S EEPROM Fehler |
| 0x62F5 | S Temperaturerwärmung |
| 0xD047 | S Pt-Can Kommunikationsfehler |
| 0xD054 | S CAN Botschaft (ANF_WINKEL_FFP, 0x15F) |
| 0xD055 | S CAN Botschaft (KILOMETERSTAND, 0x330) |
| 0xD056 | S CAN Botschaft (KLEMMENSTATUS, 0x130) |
| 0xD057 | S CAN Botschaft (TORQUE_3, 0xAA) |
| 0xD058 | S CAN Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x62F6 | S Fehlerhaftes CAN Signal in Botschaft TORQUE_3 |
| 0x62F7 | S Strommessung |
| 0x62F8 | S Regelanforderung |
| 0x62F9 | S Hallsensor Plausibilität |
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
| 0x604D | P Fehler Steuergerät |
| 0x604E | P Fehler RDC-System |
| 0x604F | P Fehler Übertragungskanal VL |
| 0x6050 | P Fehler Übertragungskanal VR |
| 0x6051 | P Fehler Übertragungskanal HL |
| 0x6052 | P Fehler Übertragungskanal HR |
| 0x6054 | P Fehler Radsensor VL |
| 0x6055 | P Fehler Radsensor VR |
| 0x6056 | P Fehler Radsensor HL |
| 0x6057 | P Fehler Radsensor HR |
| 0x6059 | P Fehler Radsensor undefiniert |
| 0x605A | P Energiesparmode aktiv |
| 0xD104 | P Fehler CAN-Low |
| 0xD107 | P Fehler Controller |
| 0xD13E | P Fehler Telegramm Timeout beim Empfang |
| 0x6065 | S Fehler Rad VL |
| 0x6064 | S Systeminfo |
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
| 0x5D0D | P Steuergeraetefehler: Botschaftsplausibilitaet |
| 0x5D0E | P Betriebsspannung |
| 0x5D0F | P Fehler Linsenheizung |
| 0x5D10 | P Plausibilitaet Applikationsparameter |
| 0x5D11 | P HW-Fehler CAN |
| 0x5D12 | P Abweichender CAN-Stand |
| 0x5D13 | P Sensor blind |
| 0x5D14 | P Sensor dejustiert |
| 0x5D15 | P Fehler Bremspedal |
| 0x5D16 | P ACC-relevanter Fehler Motorsteuerung |
| 0x5D17 | P ACC-relevanter Fehler DSC |
| 0x5D18 | P ACC-relevanter Fehler DSC-Gierrate |
| 0x5D19 | P ACC-relevanter Fehler ECD |
| 0x5D1A | P ACC-relevanter Fehler Kombi |
| 0x5D1B | P ACC-relevanter Fehler EGS |
| 0x5D1C | P CAN-Timeout Motorsteuerung |
| 0x5D1D | P CAN-Timeout DSC |
| 0x5D1E | P CAN-Timeout Kombi |
| 0x5D1F | P CAN-Timeout EGS |
| 0x5D20 | P Fehler CAN-Daten Motorsteuerung |
| 0x5D21 | P Fehler CAN-Daten DSC |
| 0x5D22 | P Fehler CAN-Daten Kombi |
| 0x5D23 | P Fehler CAN-Daten EGS |
| 0x5D24 | P Fehler CAN-Daten DSC-Gierrate |
| 0x5D25 | P Temperaturabschaltung SCU |
| 0x5D26 | P Fehler Programmblock 1 |
| 0x5D27 | P ACC Sicherheitsabschaltung Bremsueberhitzung |
| 0x5D28 | P Fehler Umsetzung Beschleunigungssollwert im Antriebsfall |
| 0x5D29 | P Fehler Umsetzung Beschleunigungssollwert im Bremsfall |
| 0xD147 | Fehler CAN-Controller |
| 0xD17C | Fehlerwert erhalten |
| 0xD17D | unplausibles Signal empfangen |
| 0xD17E | CAN-Timeout beim Empfang |
| 0xD181 | unplausibles Signal gesendet |
| 0xCD35 | ACC Sicherheitsabschaltung Bremsueberhitzung |
| 0xCD36 | Fehler Umsetzung ACC-Sollwert durch Motor und Getriebe |
| 0xCD37 | Fehler Umsetzung Beschleunigungssollwert im Bremsfall |
| 0xCD38 | ACC von Partnersteuergeraet nicht erkannt |
| 0xCD39 | ACC temporär nicht verfügbar wegen DSC Initialisierung oder Unterspannung |
| 0xCD3A | Zeitüberschreitung Navi-Modul im ACC |
| 0xCD40 | Hinweis: Fehler im LDM |
| 0xCD41 | Kein LDM erkannt |
| 0xCD42 | Hinweis: Bordnetzspannung < 11 Volt |
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
| 0x5D57 | P Lernen Querbeschleunigungssensor |
| 0x5D5A | P Konsistenz LWL |
| 0x5D5B | P Konsistenz Druck VA |
| 0x5D5C | P Konsistenz Druck HA |
| 0x5D5E | P Konsistenz Strommessung Propventile |
| 0x5D5F | P Konsistenz Strommessung Schaltventile |
| 0x5D60 | P Oelstandsensor |
| 0x5D61 | P KL30 ARS-SG |
| 0x5D62 | P ECU intern |
| 0x5D64 | P Codierdatenfehler |
| 0x5D65 | P Status Richtungsventil |
| 0x5D67 | P Konsistenz Fahrgestellnummer |
| 0x5D68 | P Kalibrierung Sensoren |
| 0x5D69 | P Fehlerspeicher defekt |
| 0x5D6C | P Inbetriebnahme: RV bestromt |
| 0x5D6D | P Inbetriebnahme: RV unbestromt |
| 0x5D6E | P Inbetriebnahme: FS und VA-Ventil unbestr. zu od. Sensor p_VA defekt |
| 0x5D6F | P Inbetriebnahme: Sensor p_HA defekt |
| 0x5D70 | P Inbetriebnahme: Tankruecklauf zu oder (FS und HA-Ventil unbestromt zu) |
| 0x5D71 | P Inbetriebnahme: FS unbestr. zu u. (Ventilblock dicht od. Tankrueckl. zu od. HA unbestr. zu) |
| 0x5D72 | P Inbetriebnahme: FS unbestr. zu |
| 0x5D73 | P Inbetriebnahme: FS u. VA-Ventil unbestr. zu |
| 0x5D74 | P Inbetriebnahme: Schwenkmotor VA fest |
| 0x5D75 | P Inbetriebnahme: FS-Ventil od. FS-Drossel oder VA-Ventil haengt offen od. beide DS od. Rueckschl.-ventil links defekt |
| 0x5D76 | P Inbetriebnahme: Drucksensoren vertauscht |
| 0x5D77 | P Inbetriebnahme: Druckaufbau_VA zu langsam oder Kennlinie VA pVA(l) (VBL Problem) od. Sensor pVA defekt |
| 0x5D78 | P Inbetriebnahme: VA-Ventil haengt geschlossen |
| 0x5D79 | P Inbetriebnahme: Summen Leck VA oder Sensor pVA defekt |
| 0x5D7A | P Inbetriebnahme: Kennline VA oder Sensor pVA defekt |
| 0x5D7D | P Inbetriebnahme: Schwenkmotor HA fest |
| 0x5D7E | P Inbetriebnahme: Sensor pVA oder Sensor pHA defekt |
| 0x5D7F | P Inbetriebnahme: HA_Ventil haengt geschlossen |
| 0x5D80 | P Inbetriebnahme: Druckaufbau_HA zu langsam oder Kennlinie HA pHA(l) (VBL Problem) |
| 0x5D81 | P Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil links defekt |
| 0x5D82 | P Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil rechts defekt |
| 0x5D83 | P Inbetriebnahme: Dynamikfehler HA/VA |
| 0x5D84 | P Inbetriebnahme: Druckaufbau (VA und HA) zu langsam |
| 0x5D85 | P Inbetriebnahme: Kennline HA |
| 0x5D8A | P Inbetriebnahme: Kennlinienfehler VA |
| 0x5D8B | P Inbetriebnahme: Kennlinienfehler HA |
| 0x626C | P Konsistenz Querbeschleunigung Can Signal |
| 0x626D | P Konsistenz Querbeschleunigung ARS Sensor |
| 0x6271 | P Predrive Check: FS und VA-Ventil unbestromt zu  oder Sensor P_VA defekt |
| 0x6272 | P Predrive Check: FS und HA-Ventil unbestromt zu |
| 0x6273 | P Predrive Check: FS Okay, VA- und HA-Ventil bestromt offen |
| 0x6274 | P Predrive Check: FS unbestromt zu und VA Okay |
| 0x6275 | P Predrive Check: FS unbestromt zu und VA-Ventil offen, HA-Ventil Okay |
| 0x6276 | P Predrive Check: VA-Ventil bestromt offen |
| 0x6277 | P Predrive Check: FS oder HA oder VA-Ventilstrom zu hoch |
| 0x6278 | P Predrive Check: Kombi Meldung 1 |
| 0x6279 | P Predrive Check: Kombi Meldung 2 |
| 0x627A | P Predrive Check: Motor in Fahrt gestoppt |
| 0x627B | P Predrive Check: Zuschalten nach Reset waehrend der Fahrt |
| 0x6288 | P Inbetriebnahme: aQuer Analogsensor defekt |
| 0x6289 | P Inbetriebnahme: aQuer Analogsensor Vorzeichenfehler |
| 0x628A | P Inbetriebnahme: LL Fehler oder Predrive Fehler verhindert Inbetriebnahme starten |
| 0x628B | P Inbetriebnahme: Inbetriebnahme abgebrochen |
| 0xD1C7 | P CAN Bus Off |
| 0xD1DD | P CAN Beschleunigung Fahrzeug Quer DSC |
| 0xD1DE | P CAN Winkelgeschwindigkeit Gier DSC |
| 0xD1DF | P CAN Geschwindigkeit Fahrzeug |
| 0xD1E0 | P CAN Aussentemperatur |
| 0xD1E1 | P CAN Temperatur Motor Kuehlwasser |
| 0xD1E2 | P CAN Status Klemme 15 |
| 0xD1E3 | P CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xD1E4 | P CAN Lenkradwinkel |
| 0xD1E5 | P CAN Drehzahl Motor |
| 0xD1E8 | P CAN Gradient Lenkradwinkel |
| 0xD1EB | P CAN Kilometerstand |
| 0xD1ED | P CAN Status DSC |
| 0xD1F1 | P CAN Botschaft Geschwindigkeit |
| 0xD1F2 | P CAN Botschaft Klemmenstatus |
| 0xFFFF | unbekannter Fehlerort |

### ID_24

| ORT | ORTTEXT |
| --- | --- |
| 0xA688 | Speicherfehler |
| 0xA689 | Hallsensor VSW1.1 |
| 0xA68A | Hallsensor VSW1.2 |
| 0xA68B | Hallsensor VSW2.1 |
| 0xA68C | Hallsensor VSW2.2 |
| 0xA68D | Hallsensor VSW3 |
| 0xA68E | Hallsensor VSW4.1 |
| 0xA68F | Hallsensor VSW4.2 |
| 0xA690 | Hallsensor VSW5.1 |
| 0xA691 | Hallsensor VSW5.2 |
| 0xA692 | Hallsensor VSW6.1 |
| 0xA693 | Hallsensor VSW6.2 |
| 0xA694 | Hallsensor VSW6.3 |
| 0xA695 | Hallsensor VSW7 |
| 0xA696 | Hallsensor VSW8 |
| 0xA697 | Hallsensor VSW9 |
| 0xA698 | Hallsensor VSW10 |
| 0xA699 | Hallsensor VSW11 |
| 0xA69A | Linearsensor LINS1 |
| 0xA69B | Linearsensor LINS2 |
| 0xA69C | Linearsensor LINS5 |
| 0xA69D |   |
| 0xA69E |   |
| 0xA69F |   |
| 0xA6A0 |   |
| 0xA6A1 |   |
| 0xA6A2 |   |
| 0xA6A3 |   |
| 0xA6A4 |   |
| 0xA6A5 |   |
| 0xA6A6 |   |
| 0xA6A7 | Energiesparmode aktiv |
| 0xA688 | Fehler am Hallsenor Verdeckklappe geöffnet |
| 0xA689 | Fehler am Hallsenor Verdeckklappe unten links |
| 0xA68A | Fehler am Hallsenor Verdeckklappe unten rechts |
| 0xA68B | Fehler am Hallsenor Verdeckklappe verriegelt links |
| 0xA68C | Fehler am Hallsenor Verdeckklappe verriegelt rechts |
| 0xA68D | Fehler am Hallsenor Windlauf verriegelt |
| 0xA68E | Fehler am Hallsenor Windlauf entriegelt |
| 0xA68F | Fehler am Hallsensor Heckscheibe unten |
| 0xA690 | Drehwinkelgeber Hauptsäule |
| 0xA691 | Drehwinkelgeber Finnen |
| 0xA692 | Versorgung Hallsensoren Stecker A |
| 0xA693 | Versorgung Hallsensoren Stecker C |
| 0xA694 | Versorgung Drehwinkelgeber |
| 0xA695 | Bedientaster Öffnen |
| 0xA696 | Bedientaster Schließen |
| 0xA697 | Schalter Verdeckkastenboden |
| 0xA698 | Temperatursensor der Druckpumpe |
| 0xA699 | Heckscheibenmotor |
| 0xA69A | Windlaufmotor |
| 0xA69B | Ventil V1 |
| 0xA69C | Ventil V2 |
| 0xA69D | Ventil V3 |
| 0xA69E | Relais RPS Pumpe Stange |
| 0xA69F | Relais RPK Pumpe Kolben |
| 0xA6A0 | Relais 5. Scheibe Auf |
| 0xA6A1 | Relais 5. Scheibe Ab |
| 0xA6A2 | interner Prozessorfehler |
| 0xA6A3 | Codierdatenfehler |
| 0xA6A7 | Energiesparmode aktiv |
| 0xD204 | K-CAN Physikalischer Busfehler |
| 0xD205 | K-CAN BusOff |
| 0xD206 | Timeout Nachricht ATEMP |
| 0xD207 | Timeout Nachricht GESCHWINDIGKEIT |
| 0xD208 | Timeout Nachricht KLEMMENSTATUS |
| 0xD209 | Timeout Nachricht KILOMETERSTAND |
| 0xA6A4 | Überschreitung der Geschwindigkeit |
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
| 0x9311 | TAGE1_Timeout_Dru_Sensor |
| 0x9312 | TAGE2_Timeout_Dru_Sensor |
| 0x9313 | TAGE3_Timeout_Dru_Sensor |
| 0x9314 | TAGE4_Timeout_Dru_Sensor |
| 0x9315 | TAGE1_Timeout_Zug_Sensor |
| 0x9316 | TAGE2_Timeout_Zug_Sensor |
| 0x9317 | TAGE3_Timeout_Zug_Sensor |
| 0x9318 | TAGE4_Timeout_Zug_Sensor |
| 0x9319 | TAGE1_Spielschutz_aktiv |
| 0x9320 | TAGE2_Spielschutz_aktiv |
| 0x9321 | TAGE3_Spielschutz_aktiv |
| 0x9322 | TAGE4_Spielschutz_aktiv |
| 0xFFFF | unbekannter Fehlerort |

### ID_28

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_29

| ORT | ORTTEXT |
| --- | --- |
| 0x5D8C | 5D8C - Raddrehzahlfuehler vorne links |
| 0x5D8D | 5D8D - Raddrehzahlfuehler vorne rechts |
| 0x5D8E | 5D8E - Raddrehzahlfuehler hinten links |
| 0x5D8F | 5D8F - Raddrehzahlfuehler hinten rechts |
| 0x5D90 | 5D90 - Uebermaeßige Raddrehzahl Fehler |
| 0x5D91 | 5D91 - Fehlanpassung Rad |
| 0x5D92 | 5D92 - Spule ISO = Einlass Ventil vorne links |
| 0x5D93 | 5D93 - Spule ISO = Einlass Ventil vorne rechts |
| 0x5D94 | 5D94 - Spule ISO = Einlass Ventil hinten links |
| 0x5D95 | 5D95 - Spule ISO = Einlass Ventil hinten rechts |
| 0x5D96 | 5D96 - Spule Dump = Auslass Ventil vorne links |
| 0x5D97 | 5D97 - Spule Dump = Auslass Ventil vorne rechts |
| 0x5D98 | 5D98 - Spule Dump = Auslass Ventil hinten links |
| 0x5D99 | 5D99 - Spule Dump = Auslass Ventil hinten rechts |
| 0x5D9A | 5D9A - Spule TC ISO1 = Trenn Ventil 1 |
| 0x5D9B | 5D9B - Spule TC ISO2 = Trenn Ventil 2 |
| 0x5D9C | 5D9C - Spule TC Supply 1 = Saug Ventil 1 |
| 0x5D9D | 5D9D - Spule TC Supply 2 = Saug Ventil 2 |
| 0x5D9E | 5D9E - Treiber Einlass Ventil vorne links kurzgeschlossen |
| 0x5D9F | 5D9F - Treiber Einlass Ventil vorne rechts kurzgeschlossen |
| 0x5DA0 | 5DA0 - Treiber Einlass Ventil hinten links kurzgeschlossen |
| 0x5DA1 | 5DA1 - Treiber Einlass Ventil hinten rechts kurzgeschlossen |
| 0x5DA2 | 5DA2 - Treiber Auslass Ventil vorne links kurzgeschlossen |
| 0x5DA3 | 5DA3 - Treiber Auslass Ventil vorne rechts kurzgeschlossen |
| 0x5DA4 | 5DA4 - Treiber Auslass Ventil hinten links kurzgeschlossen |
| 0x5DA5 | 5DA5 - Treiber Auslass Ventil hinten rechts kurzgeschlossen |
| 0x5DA6 | 5DA6 - Treiber kurzgeschlossen TC ISO 1 = Trenn Ventil 1 |
| 0x5DA7 | 5DA7 - Treiber kurzgeschlossen TC ISO 2 = Trenn Ventil 2 |
| 0x5DA8 | 5DA8 - Treiber kurzgeschlossen TC Supply 1 = Saug Ventil 1 |
| 0x5DA9 | 5DA9 - Treiber kurzgeschlossen TC Supply 2 = Saug Ventil 2 |
| 0x5DAA | 5DAA - Power Schalter |
| 0x5DAB | 5DAB - ABS Motor |
| 0x5DCC | 5DCC - BIST Fehler |
| 0x5DCD | 5DCD - Rom Fehler |
| 0x5DCE | 5DCE - Dynamic Ram Fehler |
| 0x5DCF | 5DCF - HET Ram Fehler |
| 0x5DD0 | 5DD0 - Stack Fehler |
| 0x5DD1 | 5DD1 - Overrun Fehler |
| 0x5DD2 | 5DD2 - Unimplemented interrupt |
| 0x5DD3 | 5DD3 - Unexpected excepction |
| 0x5DD4 | 5DD4 - Spule timeout Fehler |
| 0x5DD5 | 5DD5 - HET periodic interrupt Fehler |
| 0x5DD6 | 5DD6 - HET watchdog timeout |
| 0x5DD7 | 5DD7 - HET program Fehler |
| 0x5DD8 | 5DD8 - HET Program overflow |
| 0x5DD9 | 5DD9 - SPI Fehler |
| 0x5DDA | 5DDA - SPI QUEUE overflow Fehler |
| 0x5DAD | 5DAD - EXT watchdog Fehler |
| 0x5DAE | 5DAE - Basis Bremse Fehler |
| 0x5DAF | 5DAF - Zuendung Spannung niedrig |
| 0x5DB0 | 5DB0 - Interne 5V Versorgung volt Fehler |
| 0x5DB1 | 5DB1 - COMMS LWL Sensor Fehler |
| 0x5DB2 | 5DB2 - COMMS YAW Sensor Fehler |
| 0x5DB3 | 5DB3 - COMMS LAT Sensor Fehler |
| 0x5DB4 | 5DB4 - COMMS LONG Sensor Fehler |
| 0x5DB5 | 5DB5 - Druck Sensor |
| 0x5DAC | 5DAC - SPI Fehler |
| 0x5DB6 | 5DB6 - Uebermaeßige INIT Zeit Fehler |
| 0x5DB7 | 5DB7 - Bremsschalter (BLS) Fehler: BLS nie aktiv |
| 0x5DB8 | 5DB8 - Kontrollierter Shutdown Fehler |
| 0x5DBA | 5DBA - Umgebungs Temp Spannung Bereich Fehler |
| 0x5DBB | 5DBB - Wakeup line Fehler |
| 0xD347 | D347 - CAN BUS OFF PT-CAN |
| 0xD34B | D34B - CAN BUS OFF F-CAN |
| 0xD354 | D354 - Alle Knoten fehlend PT-CAN |
| 0xD355 | D355 - CAN MUTE PT-CAN |
| 0xD356 | D356 - Alle Knoten fehlend F-CAN |
| 0xD357 | D357 - CAN MUTE F-CAN |
| 0xD358 | D358 - PT-CAN Gang_Rueck |
| 0xD359 | D359 - PT-CAN Bedien_FW |
| 0xD35A | D35A - PT-CAN Fahrzeugtyp |
| 0xD35B | D35B - PT-CAN FahrgestNR |
| 0xD35C | D35C - PT-CAN Stat_CT_Habr |
| 0xD35D | D35D - PT-CAN Klemmenstat |
| 0xD35E | D35E - PT-CAN Kilometerst |
| 0xD35F | D35F - PT-CAN Bedien_RDC |
| 0xD360 | D360 - PT-CAN Temp_Zeit |
| 0xD361 | D361 - PT-CAN Stat_Kombi |
| 0xD362 | D362 - PT-CAN Bedien_DSC |
| 0xD363 | D363 - PT-CAN Anhaenger |
| 0xD364 | D364 - PT-CAN Getriebedat |
| 0xD365 | D365 - PT-CAN TORQUE_1 |
| 0xD366 | D366 - PT-CAN TORQUE_2 |
| 0xD367 | D367 - PT-CAN TORQUE_3 |
| 0xD368 | D368 - PT-CAN NM |
| 0xD369 | D369 - PT-CAN Dienste |
| 0xD36A | D36A - F-CAN CLU_1 |
| 0xD36B | D36B - F-CAN CLU_2 |
| 0xD36C | D36C - F-CAN CLU_3 |
| 0xD36D | D36D - F-CAN LWL |
| 0x5DBC | 5DBC - Invalid State |
| 0xFFFF | unbekannter Fehlerort |

### ID_2A

| ORT | ORTTEXT |
| --- | --- |
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
| 0x610C | [TS] : Torque Sensor |
| 0x610D | [MCU] : Motor Control Unit |
| 0x610E | [BATT] : Battery voltage |
| 0xD507 | [NM] : Bus communication error |
| 0xD514 | [CAN ]: Speed, Id 1A0h |
| 0xD515 | [CAN] : Engine status, Id 1D0h |
| 0xD516 | [CAN ]: Steer angle, Id C4h |
| 0xD517 | [CAN] :Terminal status, Id 130h |
| 0x5D0C | [TS] : Torque sensor power supply voltage>7.0V Main sensor output current>9.4/9.3mA or Main sensor output current<0.6/0.7mA |
| 0x5D0D | [TS] : Torque sensor power supply voltage>7.0V Sub sensor output current>9.4mA or Sub sensor output current<0.6mA |
| 0x5D0E | [TS] : Torque sensor power supply voltage>7.0V \|(Main sensor)-(Sub sensor)\|>0.75mA |
| 0x5D0F | [TS] : Torque sensor power supply voltage>7.0V {\|(Peak error)-(Average error)\|between main and sub}>0.5mA |
| 0x5D11 | [TS] : (Battery terminal voltage)>9V and Torque sensor power supply on (Torque sensor power supply voltage)<7V |
| 0x5D12 | [TS] : Torque sensor power supply on (Torque sensor power supply voltage)<2.5V |
| 0x5D13 | [MS]: 9V<(Battery terminal voltage)<17.5V Excitation voltage is outside of normal range. (Vpp<1.0V ) |
| 0x5D14 | [MS]: 9V<(Battery terminal voltage)<17.5V The amplitude signal is constant and abnormal value.( SIN,COS<2.0V or SIN,COS>3.0V) |
| 0x5D15 | [MS]: SIN2+COS2 is outside of normal area.(SIN2+COS2 <2.252 or SIN2+COS2>3.752 ) |
| 0x5D16 | [M]: 9V<(Battery terminal voltage)<17.5V and motor PWM=on 'Detected  fault in FET driver (1)Short circuit of FET (Vds of FET > 2V typ.) (2)Over temperature (170degC typ.) (3)Undervoltage of bootstrap capacitor (Boot strap voltage generated from charge pump < 9.3V typ.) |
| 0x5D17 | [M]: MCU power on (Measured current) - (desired current ) > 10Arms |
| 0x5D18 | [M]: MCU power on (Measured current) >   131A |
| 0x5D19 | [M]: Initial check Motor terminal voltage <0.7V or Motor terminal voltage >3.9V |
| 0x5D1A | [M]: Initial check is finished and motor speed < 400 rpm and current on q-axis < 25A ; \|Output voltage of monitoring motor terminal - nominal value\| > 0.3V |
| 0x5D1B | [M] : '(Battery terminal voltage) > 9V and motor?speed<1700rpm;' (Measured current)  < 2Arms for (desired current) >4Arms |
| 0x5D1C | [M] : MCU power on(Battery terminal voltage)>17V |
| 0x5D1D | [BATT] : '-Connected to 24V, Load dump surge;MCU power on;(Battery terminal voltage)>17.0V |
| 0x5D1E | [BATT] :'-Low battery; FET Driver power supply on; (Battery terminal voltage)<9V and FET driver ERR=L |
| 0x5D20 | [CPU] : FET Driver power supply sticking; Before FET Driver power supply on; (Battery terminal voltage)>3V |
| 0x5D21 | [CPU] : Main torque sensor amplifier malfunction; (Battery terminal voltage)>7.5V; \|(Main torque sensor amp. input)-(output)\|>2.5Nm |
| 0x5D22 | [CPU]: 'Thermistor malfunction; MCU power on; (Detected temperature) < -50degC or >184 degC (Output voltage > 4.9V or < 0.1V) |
| 0x5D23 | [EEPROM] : EEPROM malfunction(Fixed data area) once after POR, EEPROM check failure, |
| 0x5D24 | [ECU] :Current detection circuit offset failure; MCU power on; Offset voltage <2.0V or 3.0V < offset voltage |
| 0x5D25 | [ECU] : Communication failure between CPUs'; MCU power on (Checked by Main&Sub CPU); Communication is stopped or failed in check sum |
| 0x5D26 | [ECU] : A/D converter failure; MCU power on (Checked by Sub CPU); Trq(main CPU) - Trq(sub CPU)\| > 3Nm |
| 0x5D27 | [ECU] : Main-CPU clock failure; MCU power on (Checked by Sub CPU); Clock pulse in 4ms from main CPU <64 (Typ.80) |
| 0x5D28 | [ECU]: Main CPU failure; MCU power on (Checked by Sub CPU); Motor current is outside of the approved area. (Interlock Function) |
| 0x5D29 | [CAN] :Speed signal |
| 0x5D2A | [CAN] : Engine_1 status |
| 0x5D2B | [CAN] : Lenkradwinkelsensor message |
| 0x5D2C | [CAN] : KLEMMENSTATUS message |
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
| 0xFFFF | unbekannter Fehlerort |

### ID_33

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_34

| ORT | ORTTEXT |
| --- | --- |
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
| 0xD68D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WAKEUP_Failed). |
| 0xD68E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD690 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose) |
| 0xD691 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD692 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA368 | P Kurzschluß in der GPS-Antenne/Short at the GPS antenna(Error_HW_GPS_ANNTENNA_SHORT). |
| 0xA369 | P GPS-Antenne nicht angeschlossen/GPS antenna not connected(Error_HW_GPS_ANTENNA_OPEN). |
| 0xA36A | P Fehler im GPS-Modul/Failure in the gps module(Error_HW_GPS_HW). |
| 0xA36B | P Kommunikation zwischen GPS-Modul und MOST gestoert/Communication between MOST and GPS module interrupted(Error_HW_GPS_COMM_FAIL). |
| 0xA36C | P Kommunikation mit Telefon-Netzwerk nicht moeglich/Communication with network provider not possible(Error_HW_TRANSCEIVER_FAIL). |
| 0xA36D | P Fehler Notruftaster nicht angeschlossen/Mayday - switch not connected(Error_HW_MAYDAY_SWITCH_DISCONNECTED). |
| 0xA36E | P Notruf-LED ist ohne Funktion/Mayday - LED is without function(Error_HW_MAYDAY_LED_NOK). |
| 0xA370 | P Notruftaster ist kurzgeschlossen/Mayday switch is pressed continuously(Error_HW_MAYDAY_SWITCH_SHORT). |
| 0xA373 | P Fehler Non-volatile Speicherbereich/Error within Non-volatile memory(Error NVM_NOK). |
| 0xA374 | P Notruftaster ohne Funktion/Mayday switch without function(Error_HW_MAYDAY_SWITCH_STUCK). |
| 0xA375 | P Fehler Kommunikation mit Airbag-SG gestoert/Communication with Airbag device not OK(Error_IBUS_CONNECTION_FAIL). |
| 0xA376 | P Fehler Kommunikation mit PhoneBoard gestoert/No communication with PhoneBoard(Error_CAN_TELECOMMANDER_FAIL). |
| 0xA377 | P Fehler Nicht gueltiger PhoneBoard-Druck/Incorrect PhoneBoardpress(Error_TELCOMMANDER_KEYPAD_FAIL). |
| 0xA378 | P unbekannter Portable Fehler/unknown Portable error(Error Portable_Handset). |
| 0xA379 | P Fehler im Bluetooth-Interface/error in communication with Bluetooth-interface(Error_BT_INTERFACE). |
| 0xA37A | P Energiesparmode aktiv |
| 0xA37C | P Fehler in Telematics Sim/Error with the telematics sim. |
| 0xA37E | P fehler mit backup battery/backup battery failure. |
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
| 0xD68D | Weckendes Device hat drei Mal erfolglos versucht, das Netzwerk zu wecken (Error_WAKEUP_Failed) |
| 0xD68E | Obwohl Shutdown (Execute) geschickt wurde, ging das Licht nicht aus (Error_Light_Not_Off) |
| 0xD690 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose) |
| 0xD691 | Lange und/oder haeufige Unlocks (Error_Unlock_Long) |
| 0xD692 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown) |
| 0xA368 | Kurzschluss in der GPS-Antenne (Error_HW_GPS_ANNTENNA_SHORT) |
| 0xA369 | GPS-Antenne nicht angeschlossen (Error_HW_GPS_ANTENNA_OPEN) |
| 0xA36A | Fehler im GPS-Modul (Error_HW_GPS_HW) |
| 0xA36B | Kommunikation zwischen GPS-Modul und MOST gestoert (Error_HW_GPS_COMM_FAIL) |
| 0xA36C | Kommunikation mit Telefon-Netzwerk nicht moeglich (Error_HW_TRANSCEIVER_FAIL) |
| 0xA36D | Notruftaster nicht angeschlossen (Error_HW_MAYDAY_SWITCH_DISCONNECTED) |
| 0xA36E | Notruf-LED ist ohne Funktion (Error_HW_MAYDAY_LED_NOK) |
| 0xA370 | Kurzschluss in Notruftaster (Error_HW_MAYDAY_SWITCH_SHORT) |
| 0xA373 | Fehler im non-volatile Speicherbereich (Error NVM_NOK) |
| 0xA374 | Notruftaster ohne Funktion (Error_HW_MAYDAY_SWITCH_STUCK) |
| 0xA375 | Kommunikation mit Airbag-SG gestoert (Error_IBUS_CONNECTION_FAIL) |
| 0xA376 | Kommunikation mit PhoneBoard gestoert (Error_CAN_TELECOMMANDER_FAIL) |
| 0xA377 | Nicht gueltiger PhoneBoard-Druck (Error_TELCOMMANDER_KEYPAD_FAIL) |
| 0xA378 | Unbekannter Portable Fehler (Error Portable_Handset) |
| 0xA379 | Fehler im Bluetooth-Interface (Error_BT_INTERFACE) |
| 0xA37A | Energiesparmodus aktiv |
| 0xA37C | Fehler in Telematics Sim |
| 0xA37E | Fehler mit Backup Batterie |
| 0xA390 | Fehler mit Backup Antenne |
| 0xA391 | Fehler mit Haupt TCU Antenne |
| 0xA392 | Fehler mit Backup Lautsprecher |
| 0xA397 | Fehler mit BT Cradle Button |
| 0xA398 | Fehler mit Mikrofon 1 |
| 0xA399 | Fehler mit Mikrofon 2 |
| 0xA3A0 | Prefit SIM nicht angeschlossen |
| 0xA3A1 | Fehler beim Lesen der Prefit SIM |
| 0xA3A2 | Prefit SIM PIN gesperrt |
| 0xA3A3 | Fehler mit Bluetooth Antenne |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9312 | Low RF. |
| 0x9313 | Fehler mit NVM/NVM Corruption. |
| 0x9314 | Kein Codieren des Devices moeglich/Error in coding data (Error_CODING_DATA). |
| 0x9315 | Kommunikation mit Telefon-Netzwerk nicht moeglich/Communication with network provider not possible(Error_HW_TRANSCEIVER_FAIL). |
| 0x9316 | unbekannter Portable Fehler/unknown Portable error(Error Portable_Handset). |
| 0x9317 | Notruf-LED ist ohne Funktion/Mayday - LED is without function(Error_HW_MAYDAY_LED_NOK). |
| 0x9318 | Kommunikation zwischen GPS-Modul und MOST gestoert/Communication between MOST and GPS module interrupted(Error_HW_GPS_COMM_FAIL). |
| 0x931A | Prefit sim nicht angeschlossen/Prefit sim not present. |
| 0x931B | fehler mit lesen prefit sim/Prefit sim read error. |
| 0x931C | fehler mit Prefit sim PIN Locked/Prefit SIM PIN Locked. |
| 0x931D | fehler mit Prefit sim Network/Prefit SIM Network Error. |
| 0xA368 | P Error_Memory_Failure. |
| 0xA36A | P Error_Stuck_Cradle_Key. |
| 0xA36B | P Error_Bluetooth_Failure. |
| 0xA36C | P Error_Bluetooth_Antenna_Fault. |
| 0xA36D | P Error_Battey_Voltage_Fault. |
| 0xA36E | P Error_FOT_Temperature_Fault. |
| 0xA36F | P Error_Failed_Power_On_Self_Test. |
| 0xA370 | P Error_DSP_Failure. |
| 0xD68E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD690 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD691 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD692 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xD68C | Ein Device hat die Monitoringnachricht nicht abgenommen oder bestätigt. (Error_Monitoring). |
| 0xD68D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD68E | Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD68F | Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xD690 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD691 | Lange und/oder häufige Unlocks (Error_Unlock_Long). |
| 0xD692 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xD6A4 | Notruftaster sendet keine Rückmeldung (NOT_TASTE_NOK). |
| 0xD6A5 | K-Bus sendet keine Rückmeldung (K_BUS_NOK) |
| 0xD6A6 | CAN-Bus sendet keine Rückmeldung (CAN_BUS_NOK) |
| 0xD6A7 | TELCOMANDER sendet ungültigen Tasten Code (TELCOMANDER_INV_KEY) |
| 0x01 | GPS hardware failure |
| 0x02 | ROM checksum failure |
| 0x03 | NVM device failure |
| 0x04 | GPS antenna short |
| 0x05 | GPS antenna open |
| 0x06 | Emergency switch stuck |
| 0x07 | Roadside assistance switch stuck |
| 0x08 | Emergency switch short |
| 0x09 | Roadside assistance switch short |
| 0x0A | Hardware failure |
| 0x0B | MOD config failure |
| 0x0C | NVM config failure |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Licht am Eingang geht ohne Vorankündigung aus (Most_Sudden_Light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9338 | Funkstrecke unterbrochen (WDCT_DISC). |
| 0x9339 | GSM-Strecke unterbrochen (GSM_DISC). |
| 0xFFFF | unbekannter Fehlerort |

### ID_37

| ORT | ORTTEXT |
| --- | --- |
| 0xD6CE | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD6D0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD6D1 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD6D2 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA1A8 | P Keine Kommunikation mit dem Coprozessor (Error_Coprozessor). |
| 0xA1A9 | P Kurzschluß am Lautsprecher Center (Error_LP_C) |
| 0xA1AA | P Kurzschluß am Lautsprecher Front (Error_LP_F) |
| 0xA1AB | P Kurzschluß am Lautsprecher Rear (Error_LP_R) |
| 0xA1AC | P Kurzschluß am Lautsprecher Surround (Error_LP_S) |
| 0xA1AD | P Kurzschluß am Subwoofer Left (Error_Sub_L) |
| 0xA1AE | P Kurzschluß am Subwoofer Right (Error_Sub_R) |
| 0xA1AF | P Device wurde falsch codiert (Error_Wrong_Coded). |
| 0xD6C4 | Physikalischer CAN-Bus-Fehler |
| 0xD6C7 | CAN-Bus-Off |
| 0xA1B0 | Uebertemperaturabschaltung |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9311 | S Device hat beim Aufstarten einen Checksummenfehler erkannt (Error_CS). |
| 0x9312 | S Device hat Uebertemperatur erkannt (Error_OT). |
| 0x9313 | S Device hat Unterspannung Klemme 30 erkannt (Error_SPG). |
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
| 0xA3F2 | P CF card out of order. |
| 0xA3F4 | P DVD drive out of order. |
| 0xA3ED | P SDRAM out of order. |
| 0xA3F5 | P EEPROM of MOST CPU out of order. |
| 0xA3F6 | P EEPROM of CNS CPU out of order. |
| 0xA3F7 | P Flash memory out of order. |
| 0xA3E8 | P GPS antenna not connected. |
| 0xA3E9 | P GPS antenna short connection. |
| 0xA3EA | P GPS receiver out of order. |
| 0xA3EB | P GYRO out of order. |
| 0xA3F8 | P VICS FM connection check failed. |
| 0xA3F9 | P VICS HF connection check failed. |
| 0xA3FA | P VICS receiver out of order |
| 0xA3EC | P No Speed Pulse signal available. |
| 0xD7CE | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD7D0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD7D1 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD7D2 | P Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA3C8 | P Fehler A3C8 |
| 0xA3E8 | P 0xA3E8: GPS Antenne ist nicht angeschlossen. |
| 0xA3E9 | P 0xA3E9: GPS Antenne ist kurzgeschlossen |
| 0xA3EA | P 0xA3EA: GPS Receiver defekt |
| 0xA3EB | P 0xA3EB: Gyro defekt |
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
| 0xA4E8 | P Schalter (ein/aus), Überspannung oder Unterspannung |
| 0xA4E9 | P Schaltregler NT LED Array |
| 0xA4EA | P Backlight LED |
| 0xA4EB | P Bordnetzspannung, Überspannung oder Unterspannung |
| 0xA4EC | P Temperaturfühler LED |
| 0xA4ED | P Interner Fotosensor |
| 0xA4EE | P Kommunikation Master - Slave gestört |
| 0xA4EF | P EEPROM - Kodierdatenfehler VDO |
| 0xA4F0 | P EEPROM - Kodierdatenfehler BMW |
| 0xA4F1 | P CAN: No ID |
| 0xA4F2 | P CAN: Ausfall Telegramm Klemmenstatus |
| 0xA4F3 | P CAN: Ausfall/Fehler Telegramm Anzeige ACC |
| 0xA4F4 | P CAN: Ausfall Telegramm Geschwindigkeit |
| 0xA4F5 | P CAN: Ausfall/Fehler Telegramm Status Kombi |
| 0xA4F6 | P CAN: Ausfall Telegramm Regelgeschwindigkeit Stufentempomat |
| 0xA4F7 | P CAN: Ausfall Telegramm Bedienung HUD |
| 0xA4F8 | P CAN: Ausfall Telegramm Einheiten |
| 0xA4F9 | P CAN: Ausfall Telegramm Status Fahrlicht |
| 0xA4FA | P CAN: Ausfall Telegramm Kilometer/Reichweite |
| 0xA4FB | P CAN: Ausfall/Fehler Telegramm Anzeigesteuerung CC-Meldung |
| 0xA4FC | P CAN: Ausfall Telegramm Status Bordcomputer |
| 0xA4FD | P CAN: Ausfall Telegramm Anzeige Kombi/Externe Anzeige |
| 0xA4FE | P CAN: physikalischer Fehler EIN |
| 0xA4FF | P CAN: Senden misslungen |
| 0xA500 | P CAN: kein Acknowledge |
| 0xA501 | P CAN: Bus off |
| 0xA502 | P CAN: Signal ungültig |
| 0xA503 | P CAN: Ausfall Telegramm Personalisierung Erweitert |
| 0xA504 | P CAN: Ausfall Telegramm Personalisierung Standard |
| 0xA505 | P CAN: No Answer to Request (580h+3Dh) |
| 0xA506 | P Energiesparmode aktiv |
| 0xD844 | P CAN: Low |
| 0xD847 | P CAN: Bus off oder dual ported RAM |
| 0xD84D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD84E | P Obwohl Shutdown(Execute) geschickt wurde, ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD850 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD851 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD852 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9400 | S Helligkeitsreduzierung aufgrund zu niedriger Bordnetzspannung |
| 0x9401 | S Helligkeitsreduzierung aufgrund zu hoher LED Array Temperatur |
| 0xFFFF | unbekannter Fehlerort |

### ID_3E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_3F

| ORT | ORTTEXT |
| --- | --- |
| 0xA18B | P DSP Flash CRC-Test Fehler |
| 0xA18C | P Minidisc Ueberstrom detektiert |
| 0xA18D | P Minidisc Uebertemperatur detektiert |
| 0xA18E | P Minidisc back-up powerdown detektiert |
| 0xA18F | P Minidisc: Mechanische Stoerung beim Laden detektiert |
| 0xA190 | P Minidisc loading completion-Schalter Stoerung detektiert |
| 0xA191 | P I2C-Treiber Fehler |
| 0xA192 | P DSP interner SRAM Test fehlgeschlagen |
| 0xA193 | P Minidisc: TABII-Interface antwortet nicht |
| 0xA194 | P DSP flash type check fehlgeschlagen |
| 0xA195 | P Flash CRC check DAF fehlgeschlagen |
| 0xA196 | P Flash CRC check PAF fehlgeschlagen |
| 0xA197 | P DSP SW-Version konnte nicht gelesen werden |
| 0xA198 | P Minidisc gen. Status Record konnte nicht gelesen werden |
| 0xA199 | P ST10 Watchdog timeout |
| 0xA19A | P DSP hat Audio Synchronation verloren |
| 0xA19B | P DSP watchdog timeout |
| 0xA19C | P Mikrophon nicht verbunden oder Kurzschluss |
| 0xA19D | P AUX nicht verbunden oder Kurzschluss |
| 0xA1A1 | P ungueltiges ACK von DSP empfangen |
| 0xA1A2 | P Nach 3 Wiederholungen kein ACK empfangen |
| 0xA1A3 | P DSP ACK Timeout |
| 0xA1A4 | P DSP boot Timeout |
| 0xA1A5 | P DSP oder CODEC konnte nicht initialisiert werden |
| 0x9713 | S kein AudioSync nach Boot Timeout |
| 0x9715 | S Voice preprocessing Fehler |
| 0xA189 | S VDO_ERR_SPI_RECEIVEERROR (obsolete) |
| 0xA18A | S VDO_ERR_SPI_PHASEERROR (obsolete) |
| 0xA18B | S DSP self test failed (obsolete) |
| 0xA18C | S Minidisc ERROR (obsolete) |
| 0xA197 | S Event starvation (obsolete) |
| 0xA198 | S Discarded IPC message, TP length and MOST length mismatch (obsolete) |
| 0xA199 | S ST10 Watchdog timeout (obsolete) |
| 0xA19A | S DSP lost audio sync extended (obsolete) |
| 0xA19B | S DSP watchdog timeout (obsolete) |
| 0xA19C | S Microphone not connected (obsolete) |
| 0xA19D | S Receive buffer overflow (obsolete) |
| 0xA19E | S ACK high before transmission (obsolete) |
| 0xA19F | S Received ACK too small (obsolete) |
| 0xA1A0 | S Received ACK too large (obsolete) |
| 0xA1A1 | S Received ACK out of range (obsolete) |
| 0xA1A2 | S Incorrect ACK received after three retries (obsolete) |
| 0xA1A3 | S DSP ACK timeout (obsolete) |
| 0xA1A4 | S DSP boot timeout (obsolete) |
| 0xA1A5 | S DSP lost audio sync (obsolete) |
| 0xA1A6 | S No audio sync after boot timeout (obsolete) |
| 0xA1A7 | S VPP error (obsolete) |
| 0xFFFF | unbekannter Fehlerort |

### ID_40

| ORT | ORTTEXT |
| --- | --- |
| 0xD904 | K_CAN_LOW |
| 0xD905 | K_CAN_HIGH |
| 0xD906 | GroundShift |
| 0xD907 | dummy_CAN_Controller |
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
| 0xA0A8 | RAM_CRC_Fehler |
| 0xA0A9 | Laufzeit_Fehler |
| 0xA0AA | Register_Fehler |
| 0xA0AB | ProgFlash_CRC_Fehler |
| 0xA0AC | COP_CM_TRAP_SWI_Fehler |
| 0xA0AD | EEPROM_Schreibe_Fehler |
| 0xA0AE | Energiesparmodi |
| 0xA0AF | Externer_WatchDog_Fehler |
| 0xA0B0 | SG_Eingang_Bremslicht |
| 0xA0B1 | SG_Eingang_P_N |
| 0xA0B2 | Fehler_CAS_Versorgung |
| 0xA0B3 | Fehler_Ansteurung_Anlasser_KL50 |
| 0xA0B4 | Fehler_Motorstart_Anlasserbetrieb |
| 0xA0B5 | DFAHL_Kabelbruch |
| 0xA0B6 | Interlock_PLOCK_Fehler |
| 0xA0B8 | Hallsensor_RAST |
| 0xA0B9 | Hallsensor_EJECT |
| 0xA0BA | Hallsensor_SSTA |
| 0xA0BB | Hallsensor_SSTB |
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
| 0xA101 | DUMMY_R |
| 0xA102 | DME_Drehzahl |
| 0xA110 | ELV_SW_CAS_Fehler_1 |
| 0xA111 | ELV_HW_CAS_Fehler_1 |
| 0xA112 | ELV_HW_Lenkschloss_Fehler |
| 0xA113 | ELV_Sensor_Fehler |
| 0xA114 | ELV_Kommunikations_Fehler |
| 0xA115 | ELV_Ablauf_Fehler_1 |
| 0xA116 | ELV_Abbruch_Fehler |
| 0xA117 | ELV_SW_CAS_Fehler_2 |
| 0xA118 | ELV_HW_CAS_Fehler_2 |
| 0xA119 | ELV_HW_CAS_Fehler_3 |
| 0xA11A | ELV_Ablauf_Fehler_2 |
| 0xA11B | ELV_sonstiger_Fehler |
| 0xA11C | DUMMY_S |
| 0xA11D | DUMMY_T |
| 0xA11E | DUMMY_U |
| 0xA11F | DUMMY_V |
| 0xA120 | KL30g_Kurzschluss |
| 0xA121 | Treiber_LED_KS |
| 0xA122 | Treiber_VCC12_KS |
| 0xA123 | Treiber_VCC34_KS |
| 0xA124 | Fehler_Klemmenstate |
| 0xA125 | DUMMY_W |
| 0xA125 | DUMMY_X |
| 0xA125 | DUMMY_Y |
| 0xA125 | DUMMY_Z |
| 0x9304 | EEPROM_CRC_Info |
| 0x9305 | Unterspannung_SG_Info |
| 0x9306 | Ueberspannung_SG_Info |
| 0x9404 | Unplausibilitaet_SG_Spannung_Info |
| 0x9405 | Unplausibilitaet_Bremslicht_Info |
| 0x9406 | Unplausibilitaet_P_N_Info |
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
| 0x9A04 | ELV_SW_Info_Fehler_1 |
| 0x9A05 | ELV_HW_Info_Fehler_1 |
| 0x9A06 | ELV_HW_Info_Fehler_2 |
| 0x9A07 | ELV_HW_Info_Fehler_3 |
| 0x9A08 | ELV_KS_Info_Fehler_1 |
| 0x9A09 | ELV_KS_Info_Fehler_2 |
| 0x9A0A | ELV_SPG_Info_Fehler |
| 0x9A0B | ELV_Timing_Info_Fehler |
| 0x9A0C | ELV_CAN_Signal_Info_Fehler |
| 0x9A0D | ELV_sonstiger_Info_Fehler |
| 0x9A0E | ELV_Lenksäule_verspannt_Info_Fehler |
| 0x9A0F | ELV_DFASIM_Info_Fehler |
| 0x9A10 | ELV_externer_WatchDog_Info_Fehler |
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
| 0x9CE8 | Fault in RAM Memory |
| 0x9CE9 | Fault in Flash Memory |
| 0x9CEA | Fault in EEPROM |
| 0x9CEB | 'Energiesparmode' active |
| 0x9CF9 | Fault in LED |
| 0x9D00 | Fault in DWABUS |
| 0x9D12 | Fault in Internal Battery |
| 0x9D14 | Fault in Protection Circuit |
| 0x9D15 | Fault in Wakeup Circuit |
| 0x9D16 | Fault in Sound Circuit |
| 0x9D1F | Fault in Tilt Sensor Circuit |
| 0xD944 | CAN physical error: single wire |
| 0xD947 | CAN physical error: bus off |
| 0x9D17 | Max Operating Temperature Exceeded |
| 0x9D01 | MUW implausible |
| 0x9D18 | General default data use |
| 0x9D19 | Application default data use |
| 0x9D1A | SIREN default data use |
| 0x9D1B | TILTSENSOR default data use |
| 0x9D1C | Min Operating Temperature Exceeded |
| 0x9D1D | MUW default data use |
| 0x930A | Error Door Contact |
| 0x9314 | Sensor Inactivated |
| 0x9339 | Polarity Inversion Detected |
| 0x9D13 | External battery voltage out of range |
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
| 0xA6A4 | P Interner Fehler Steuergerät |
| 0xA6A5 | P Codierdaten (Checksumme) |
| 0xA6A6 | P Codierdaten (Steuergerät nicht codiert) |
| 0xA6A7 | P Relais 1 defekt |
| 0xA6A8 | P Relais 2 defekt |
| 0xA6A9 | P Sicherung Stromzweig 1 |
| 0xA6AA | P Sicherung Stromzweig 2 |
| 0xA6AB | P Klemme 30 Spannungslos |
| 0xD9C4 | P K-CAN Bus Low |
| 0xD9C5 | P K-CAN Bus High |
| 0xD9C6 | P K-CAN Kommunikationsfehler |
| 0xD9D4 | P Powermanagement Verbrauchersteuerung, 3B3h |
| 0xD9D5 | P Nachlaufzeit Stromversorgung, 3BEh |
| 0xD9D6 | P Klemmenstatus, 130h |
| 0xD9D7 | P ZV und Klappenzustand, 2FCh |
| 0xA6AC | P Energiesparmode aktiv |
| 0xA6C1 | S Abschaltung Standverbraucher |
| 0xA6C2 | S Abschaltung Counter Sleep Ack |
| 0xA6C3 | S Abschaltung Unterspannung |
| 0xA6C4 | S Abschaltung No Sleep Ack |
| 0xA6C5 | S KL 15 unplausibel |
| 0xA6C6 | S Relais 1 unplausibel |
| 0xA6C7 | S Relais 2 unplausibel |
| 0xA6C8 | S Abschaltung Transortmodus |
| 0xA6C9 | S Unterspannung erkannt |
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
| 0xFFFF | unbekannter Fehlerort |

### ID_47

| ORT | ORTTEXT |
| --- | --- |
| 0xA508 | P Antennen-SV. Fehler in der Antennen-Stromversorgung |
| 0xDAC4 | P Das externe RAM hat den Selbsttest nicht bestanden. |
| 0xDAC5 | P Der Audio_Tuner hat den Selbsttest nicht bestanden. |
| 0xDAC6 | P Der CDSP Chip hat den Selbsttest nicht bestanden. |
| 0xDAC7 | P Der Data_Tuner hat den Selbsttest nicht bestanden. |
| 0xDAC8 | P Das EEPROM hat den Selbsttest nicht bestanden. |
| 0xDAC9 | P Die interne Versorgung mit 8.5V hat den Selbsttest nicht bestanden. |
| 0xDACE | P Error_Light_Not_Off. |
| 0xDAD0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xDAD1 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9313 | S MOST-CHIP IIC- Bus Fehler |
| 0x9314 | S Watchdog_Reset |
| 0x930E | S Die Diversity ist nicht angeschlossen. |
| 0x930F | S Die Eigendiagnose der Diversity meldet einen Fehler. |
| 0xFFFF | unbekannter Fehlerort |

### ID_48

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_49

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_4A

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_4B

| ORT | ORTTEXT |
| --- | --- |
| 0xDBCE | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xDBD0 | Timeout während der Ringbruchdiagnose (Error_Ring_Diagnose). |
| 0xDBD1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xDBD2 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA388 | Rot-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA389 | Gruen-Signal vom RGB Eingang ausserhalb Toleranz oder RGB-Verbindung fehlerhaft |
| 0xA38A | Blau-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA38B | Sync-Signal vom RGB Eingang ausserhalb der Toleranz |
| 0xA38C | FBAS-Eingangssignal 1 (MMC) ausserhalb der Toleranz |
| 0xA38D | FBAS-Eingangssignal 2 (AUX) ausserhalb der Toleranz |
| 0xA38E | FBAS-Eingangssignal 3 (NIVI) ausserhalb der Toleranz |
| 0xA38F | Fernspeisespannung ausserhalb der Toleranz |
| 0xA390 | Fernspeisestrom ausserhalb der Toleranz |
| 0xA391 | FBAS Ausgangssignal ausserhalb der Toleranz |
| 0xA392 | Rot-Signal vom RGB Ausgang1 ausserhalb der Toleranz |
| 0xA393 | Gruen-Signal vom RGB Ausgang1 ausserhalb Toleranz oder RGB-Verbindung fehlerhaft |
| 0xA394 | Blau-Signal vom RGB Ausgang1 ausserhalb der Toleranz |
| 0xA395 | Rot-Signal vom RGB Ausgang2 ausserhalb der Toleranz |
| 0xA396 | Gruen-Signal vom RGB Ausgang2 ausserhalb Toleranz oder RGB-Verbindung fehlerhaft |
| 0xA397 | Blau-Signal vom RGB Ausgang2 ausserhalb der Toleranz |
| 0xA398 | Interner Geraetefehler |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9320 | IIC-Fehler HW-Bus |
| 0x9321 | IIC-Fehler SW-Bus 1 |
| 0x9322 | IIC-Fehler SW-Bus 2 |
| 0x9323 | Speicherfehler |
| 0x9324 | Initialisierung |
| 0x9325 | Unterspannung (Spannung fuer mindestens 3 Sekunden unter 9 Volt) |
| 0xC904 | Device bekam Reset (Error_Reset). |
| 0xC905 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0xC906 | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0xC907 | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0xC908 | Kurze Unlocks (Error_Unlock_Short). |
| 0xC909 | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0xC90C | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x930B | Empfaenger hat nicht geantwortet obwohl in Central Registry vorhanden (Error_Device_No_Answer) |
| 0x9336 | TaskHangUp:Ein Task hat sich nicht mehr beim SW-WatchDog gemeldet |
| 0x9337 | Luefter defekt: |
| 0x9338 | Modul defekt: |
| 0x9339 | Schnittstelle defekt: |
| 0x933A | Speicherfehler: |
| 0x933B | Fehler bei der Most High Uebertragung |
| 0x933D | Laufzeitfehler: Message Queue |
| 0x933E | Laufzeitfehler: OSEK Wait Fehler |
| 0x933F | Laufzeitfehler: OSEK Get/Release Resource |
| 0xFFFF | unbekannter Fehlerort |

### ID_4C

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_4D

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_4E

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_4F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_50

| ORT | ORTTEXT |
| --- | --- |
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
| 0xA530 | P Error_Power_Supply_Fault. |
| 0xA531 | P Error_Micro_Fault. |
| 0xA532 | P Error_IC_Fault. |
| 0xA536 | P Error_SatAntenna_Open_Circuit. |
| 0xA537 | P Error_SatAntenna_Short_Circuit. |
| 0xA538 | P Error_TerAntenna_OpenOrShort_Circuit. |
| 0xDE0E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xDE10 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xDE11 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xDE12 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | S Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### ID_55

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_56

| ORT | ORTTEXT |
| --- | --- |
| 0xA088 | P unzulässige Tastenkombination SHD 0xA088 |
| 0xA08A | P Überlast Suchbeleuchtung 0xA08A |
| 0xA08D | P Kodierung inkonsistent 0xA08D |
| 0xA090 | P SHD_Mechanik schwergängig 0xA090 |
| 0xA091 | P SHD_Motor/Kabelbaum 0xA091 |
| 0xA092 | P SHD_Normierung 0xA092 |
| 0xA668 | P Fehler Leselicht Rechts 0xA668 |
| 0xA669 | P Fehler Innenlicht Front 0xA669 |
| 0xA66A | P Fehler Leselicht Links 0xA66A |
| 0xA66B | P Fehler Make Up Beleuchtung 0xA66B |
| 0xA66C | P Fehler Leselicht Rechts Fond 0xA66C |
| 0xA66D | P Fehler Leselicht Links Fond 0xA66D |
| 0xA66E | P Fehler Innenlicht Fond 0xA66E |
| 0xA670 | P Fehler Beschlagsensor 0xA670 |
| 0xA671 | P Taster SHD hängt 0xA671 |
| 0xA672 | P Innenlicht_Taster_Front_hängt 0xA672 |
| 0xA673 | P Leselicht_Taster_Front_Links_hängt 0xA673 |
| 0xA674 | P Leselicht_Taster_Front_Rechts_hängt 0xA674 |
| 0xA675 | P Innenlicht_Taster_Fond_hängt 0xA675 |
| 0xA676 | P Leselicht_Taster_Fond_Links_hängt 0xA676 |
| 0xA677 | P Leselicht_Taster_Fond_Rechts_hängt 0xA677 |
| 0xA678 | P Überlast Rückfahrsignal 0xA678 |
| 0xA679 | P EC_Siegel Analogsignal außerhalb des gültigen Bereiches 0xA679 |
| 0xA687 | P Energiesparmode aktiv |
| 0xDE84 | P CAN Bus CAN LOW Fehler 0xDE84 |
| 0xDE85 | P CAN Bus CAN HIGH Fehler 0xDE85 |
| 0xDE87 | P CAN Bus CAN Controller Fehler 0xDE87 |
| 0xDE88 | P LIN Leitungsfehler 0xDE88 |
| 0xDE8B | P LIN Fehler 0xDE8B |
| 0xDE8F | P LIN Fehler UGDO 0xDE8F |
| 0x9401 | S letzter Reset wurde durch Watchdog ausgeführt 0x9401 |
| 0x9402 | S undef. Opcode erkannt 0x9402 |
| 0x9403 | S Kalibrierwerte ungültig 0x9403 |
| 0x9405 | S Temperatur < -40 oder > +85 0x9405 |
| 0x9440 | S Aktivierung des Panikmodes 0x9440 |
| 0x9441 | S Anzahl der man. Inits 0x9441 |
| 0x9442 | S Anzahl der Autoinits 0x9442 |
| 0x9443 | S Initialisierung nicht vollständig 0x9443 |
| 0x9444 | S Unterspannung 0x9444 |
| 0x9445 | S Überspannung 0x9445 |
| 0x9447 | S Anzahl der gültigen Kodierungen 0x9447 |
| 0x9448 | S Anzahl der ungültigen Kodierungen 0x9448 |
| 0x9500 | S Hall_1_Signal_fehlerhaft 0x9500 |
| 0x9501 | S Hall_2_Signal_fehlerhaft 0x9501 |
| 0x9502 | S Hall_Drehrichtung_falsch 0x9502 |
| 0x9503 | S Relais zieht nicht an 0x9503 |
| 0x9504 | S Relaiskleber 0x9504 |
| 0x9507 | S Ausfall_Ubat 0x9507 |
| 0x9508 | S ungültige Dachposition 0x9508 |
| 0x9509 | S Kennlinie_Schiebebereich_ungültig 0x9509 |
| 0x950A | S Kennlinie_Hebebereich_ungültig 0x950A |
| 0x950C | S Überstrom an Hall Speisung 0x950c |
| 0x9540 | S manuelle Dachbewegung 0x9540 |
| 0x9541 | S Aktivierung Einklemmschutz 0x9541 |
| 0x9543 | S Motor hat Grenzwert für Motorlauf überschritten 0x9543 |
| 0xA40D | S EEprom Schreibfehler 0xA40D |
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

### ID_5B

| ORT | ORTTEXT |
| --- | --- |
| 0xA528 | Error_Micro/Memory_Failure. |
| 0xA529 | Error_IBOC_Tuner_Fault. |
| 0xA52A | Error_DSP_Fault. |
| 0xA52B | Error_Antenna_Fault. |
| 0xA52E | Error_Oasis_Chip_Interrupt_Malfunction. |
| 0xDFCE | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xDFD0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xDFD1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xDFD2 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Applikation hat sich wegen Übertemperatur abgeschaltet. 80C < temp < 85C (Error_Application_Temp_ShutDown). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### ID_60

| ORT | ORTTEXT |
| --- | --- |
| 0x9313 | P TEMPERATURFUEHLER_LCD |
| 0x9315 | P GWSZ_FEHLER_CAS_ODER_KOMBI |
| 0x9316 | P GWSZ_FEHLER_EEPROM |
| 0x9317 | P EEPROM: Fehler Codierdaten BMW |
| 0x9319 | P Fehler Signal Tank Rohdaten_Fuellstand_Links |
| 0x931A | P Fehler Signal Tank Rohdaten_Fuellstand_Rechts |
| 0x931B | P AUSSENTEMPERATURSENSOR |
| 0x931D | P BORDNETZSPANNUNG, UEBERSPANNUNG ODER UNTERSPANNUNG |
| 0x931E | P EEPROM: Fehler Codierdaten Lieferant |
| 0xA3A8 | P CAN_NO ID |
| 0xA3A9 | P CAN_ID_1EE_ERROR_Ausfall_Botschaft_LSS |
| 0xA3AA | P CAN_ID_1D2_ERROR_Botschaft_Getriebedaten |
| 0xA3AB | P CAN_ID_190_ERROR_Ausfall_Botschaft_Anzeige_ACC |
| 0xA3AC | P CAN_ID_1A6_ERROR_Ausfall_Botschaft_Wegstrecke |
| 0xA3AD | P CAN_ID_1D0_ERROR_Ausfall_Botschaft_Motordaten |
| 0xA3AE | P CAN_ID_0AA_ERROR_Ausfall_Botschaft_Drehzahl_Leerlauf |
| 0xA3AF | P CAN_ID_200_ERROR_Ausfall_Botschaft_Regelgeschw_Stufentempomat |
| 0xA3B1 | P CAN_ID_1F6_ERROR_Ausfall_Botschaft_Blinken |
| 0xA3B2 | P CAN_ID_130_ERROR_Ausfall_Botschaft_Klemmenstatus |
| 0xA3B3 | P CAN_ID_0BE_ERROR_Ausfall_Botschaft_ARS_Alive_Zaehler_oder_SFY |
| 0xA3B4 | P CAN_ID_21A_ERROR_Ausfall_Botschaft_Lampenzustand |
| 0xA3B6 | P CAN_ID_5C0_ERROR_Ausfall_Botschaft_CAS_Antwort_RDA_DATEN_fehlen |
| 0xA3B9 | P CAN_ID_19E_ERROR_Ausfall_Botschaft_Status_DSC |
| 0xA3BB | P CAN_ID_2FC_ERROR_Ausfall_Botschaft_ZV_Klappenzustand |
| 0xA3BC | P NO_ANSWER_TO_REQUEST (580h+60h) |
| 0xA3BD | P CAN_ID_0C0_ERROR_Ausfall_Botschaft_Alive_Zentrales_Gateway |
| 0xA3BE | P CAS_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C0 | P AHM_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C1 | P FRMFA_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C3 | P RDC_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C7 | P Luftfeder_AUSFALL_NETZWERKMANAGMENT |
| 0xA548 | P ID_Ausfall 1FCh AFS |
| 0xA549 | P ID_Ausfall 315h Fahrzeugmodus |
| 0xA54A | P Checksummenfehler Antwort CAS auf CAN-Anfrage ID 394h |
| 0xA54B | P ID_Ausfall oder Alive EPS |
| 0xA54C | P ID_Ausfall Rohdaten Fuellstand Tank |
| 0xA54D | P ID_Ausfall oder Alive EKP |
| 0xA54E | P ID_Ausfall oder Alive Sitzlehnenverriegelung Fahrer |
| 0xA54F | P ID_Ausfall oder Alive Sitzlehnenverriegelung Beifahrer |
| 0xA550 | P ID_Ausfall 1A0h Geschwindigkeit |
| 0xA551 | P ID_Ausfall 0x34F Kontakt Handbremse |
| 0xE104 | P CAN LOW ERROR |
| 0xE105 | P CAN HIGH ERROR |
| 0xE106 | P GROUND SHIFT ERROR |
| 0xE107 | P CAN BUS OFF |
| 0xE13C | P CAN Fehlerwert_erhalten |
| 0xE13D | P CAN unplausibles_Signal |
| 0xE13E | P CAN Telegramm_Timeout |
| 0xE13F | P CAN Fehler_Empfang_NM-Botschaft |
| 0xE140 | P CAN Fehler_von_KI_gesendet |
| 0xE141 | P CAN unplausibles_Signal_gesendet |
| 0xE142 | P CAN Telegramm_Timeout_senden |
| 0xE143 | P CAN Fehler_Senden_NM-Botschaft |
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
| 0xA168 | P IPC Startup Error. |
| 0xA169 | P IPC Operation Error. |
| 0xA16A | P CRC Flash ROM Error. |
| 0xA16B | P CRC GW Table Error. |
| 0xA16C | P EEPROM Error. |
| 0xA16D | P Energiesparmode aktiv. |
| 0xE184 | P CAN High/Low-Line Error. |
| 0xE187 | P CAN Bus OFF Error. |
| 0xE194 | P No CLAMP_STATUS via CAN received. |
| 0xE18C | P Device hat die Monitoringnachricht nicht abgenommen oder bestaetigt. (Error_Monitoring). |
| 0xE18D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xE18E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE18F | P Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xE190 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_Unlock_Short). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA170 | S Receive Buffer Overflow. |
| 0xA171 | S Transmit Buffer Overflow. |
| 0xA172 | S Invalid DLC ID of CAN message. |
| 0xA173 | S Invalid Length of MOST message. |
| 0xA180 | S RAM Access Error. |
| 0xA168 | Hardware-Defekt Gateway-Rechner |
| 0xA169 | Hardware-Defekt LCD |
| 0xA16A | Prüfsummenfehler Gateway-Tabelle |
| 0xA16B | Energiesparmode aktiv |
| 0xE184 | CAN Low |
| 0xE187 | CAN Controller |
| 0xE18C | Device hat die Monitoringnachricht nicht abgenommen oder bestaetigt. (Error_Monitoring). |
| 0xE18D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xE18E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE18F | Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xE190 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA170 | Fehler IPC Startup |
| 0xA171 | Fehler IPC Operation |
| 0xA172 | Fehler Laden FPGA |
| 0xA173 | Fehler OS8805 |
| 0xA174 | Fehler FLASH-ROM |
| 0xA175 | Fehler RAM |
| 0xA176 | Fehler EEPROM |
| 0xA177 | MMI-Rechner Temperatur zu hoch |
| 0xA180 | Pufferueberlauf Empfangspuffer |
| 0xA181 | Pufferueberlauf Sendepuffer |
| 0xA182 | Laenge der CAN Input-Nachricht nicht korrekt |
| 0xA183 | Laenge der MOST Input-Nachricht nicht korrekt |
| 0xA184 | Timeout CAN Input-Nachricht |
| 0xA185 | RAD-ON oder SUB-ON Kurzschluss |
| 0xA186 | Sahara DSP Fehler |
| 0xA187 | Sahara Lüfter defekt |
| 0xA188 | Endstufen Fehler |
| 0xA189 | Fehler SH3 Spannungsversorgung |
| 0xA18A | Fehler FPGA Spannungsversorgung |
| 0xA18B | Nachlauf-Stromversorgung Zeitüberschreitung |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA168 | EEPROM antwortet nicht |
| 0xA169 | OLIC antwortet nicht |
| 0xA16A | TDA7563 antwortet nicht |
| 0xA16B | Fehler im Power Source Supply |
| 0xA16C | Fehler Externe Beleuchtung |
| 0xA16D | Temperatur (MOST-FOT,PWB) ausserhalb zulaessigem Bereich |
| 0xA16E | Lautsprecher nicht OK |
| 0xA16F | Fehler im K-CAN Test |
| 0xA170 | RAD_ON Signal (fuer ext.Ampl.) ohne Funktion |
| 0xA171 | Checksum Fehler Eeprom |
| 0xA172 | Checksum Fehler ext.Flash |
| 0xA173 | CAN Transceiver arbeitet nicht |
| 0xA174 | Verbindung SPI - MOST Transc. NOK |
| 0xA175 | Verbindung I2S - DSP-GW-DSP NOK (unp.) |
| 0xA176 | Verbindung I2S - DSP-GW-DSP NOK (p.) |
| 0xA177 | Externer Fan arbeitet nicht |
| 0xA178 | Temperatur Sensor Fehler |
| 0xA179 | Ueber-/Unterspannung interne Spannung |
| 0xA17A | I2C-Amplifier Output |
| 0xA17B | Ueberspannung externe Versorgung (Batterie) |
| 0xA17C | Fehler 0xA17C |
| 0xA17D | Fehler 0xA17D |
| 0xA17E | Fehler 0xA17E |
| 0xA17F | Fehler 0xA17F |
| 0xA180 | Fehler 0xA180 |
| 0xA181 | Fehler 0xA181 |
| 0xA182 | Fehler 0xA182 |
| 0xA183 | Fehler 0xA183 |
| 0xA184 | Fehler 0xA184 |
| 0xA185 | Fehler 0xA185 |
| 0xA186 | Fehler 0xA186 |
| 0xA187 | Energiesparmodus aktiv |
| 0xE184 | K-CAN Leitungsfehler |
| 0xE187 | K-CAN Kommunikationsfehler |
| 0xE18C | Device hat die Monitoringnachricht nicht abgenommen oder bestaetigt. (Error_Monitoring). |
| 0xE18D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xE18E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE18F | Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xE190 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA168 | EEPROM does not respond (obsolete) |
| 0xA169 | OLIC does not respond (obsolete) |
| 0xA16A | TDA7563 does not respond (obsolete) |
| 0xA16B | Power Source Supply (obsolete) |
| 0xA16C | Illumination ext failed (obsolete) |
| 0xA16D | Temp. out of range (MOST-FOT,PWB) (obsolete) |
| 0xA16E | Loudspeaker not OK (obsolete) |
| 0xA16F | K-CAN Test not OK (obsolete) |
| 0xA170 | RAD_ON Signal (for ext.Ampl.) failed (obsolete) |
| 0xA171 | Wrong Checksum Eeprom (obsolete) |
| 0xA172 | Wrong Checksum ext.Flash (obsolete) |
| 0xA173 | CAN Transceiver not working (obsolete) |
| 0xA174 | Connection SPI to MOST Transc. NOK (obsolete) |
| 0xA175 | Connection I2S DSP-GW-DSP not OK (unp.) (obsolete) |
| 0xA176 | Connection I2S DSP-GW-DSP not OK (p.) (obsolete) |
| 0xA177 | Function of ext. Fan failed (obsolete) |
| 0xA178 | Temperatur Sensor Fehler (Obsolete) |
| 0xA179 | Ueber-/Unterspannung interne Spannung (Obsolete) |
| 0xA17A | I2C-Amplifier Output (Obsolete) |
| 0xA187 | Energiesparmodus (FeTraWe) aktiv (Obsolete) |
| 0xFFFF | unbekannter Fehlerort |

### ID_63

| ORT | ORTTEXT |
| --- | --- |
| 0xABC9 | P 0xABC9: Drive communication error |
| 0xABC8 | P 0xABC8: Drive operation error |
| 0xABCC | P 0xABCC: RAD ON short circuit error |
| 0xABCE | P 0xABCE: Error FLASHROM |
| 0xABCF | P 0xABCF: Error EEPROM |
| 0xABD0 | P 0xABD0: I2C bus error |
| 0xABD1 | P 0xABD1: Error no antenna |
| 0xABD2 | P 0xABD2: Error wrong antenna |
| 0xABD3 | P 0xABD3: Error diversity module |
| 0xABD4 | P 0xABD4: RAD ON open circuit error |
| 0xA16D | P 0xA16D: Energiesparmode aktiv |
| 0xE1C4 | P 0xE1C4: CAN physical bus error |
| 0xE1C7 | P 0xE1C7: CAN bus communication error |
| 0xE1CE | P 0xE1CE: CAS sender failure |
| 0xE1CF | P 0xE1CF: KOMBI sender failure |
| 0xE1D0 | P 0xE1D0: SZL_LWS sender failure |
| 0xE1D1 | P 0xE1D1: DSC sender failure |
| 0xE1D2 | P 0xE1D2: DME sender failure |
| 0xABD8 | S 0xABD8: Error RAM |
| 0xABD9 | S 0xABD9: Queue error |
| 0xABDA | S 0xABDA: Watchdog Reset |
| 0xABDC | S 0xABDC: Overtemperature CD-drive |
| 0xABC8 | P 0xABC8: Drive operation error |
| 0xABCA | P 0xABCA: DSP error |
| 0xABCC | P 0xABCC: RAD ON shortcut error |
| 0xABCD | P 0xABCD: Error communication Top-Hifi |
| 0xABCE | P 0xABCE: Error FLASHROM |
| 0xABCF | P 0xABCF: Error EEPROM |
| 0xABD0 | P 0xABD0: I2C bus error |
| 0xABD1 | P 0xABD1: Error no antenna |
| 0xABD2 | P 0xABD2: Error wrong antenna |
| 0xABD3 | P 0xABD3: Error diversity module |
| 0xABD8 | S 0xABD8: Error RAM |
| 0xABD9 | S 0xABD9: Queue error IPC |
| 0xABDA | S 0xABDA: Queue error |
| 0xABDB | S 0xABDB: Overtemperature FOT |
| 0xABDC | S 0xABDC: Watchdog Reset |
| 0xABDD | S 0xABDD: Overtemperature CD-drive |
| 0xABC8 | 0xABC8: Fehler Speichertest MASK |
| 0xABC9 | 0xABC9: Laufwerk defekt |
| 0xABCA | 0xABCA: Fehler in der Antennen-Stromversorgung |
| 0xABCB | 0xABCB: Fehler Verbindung TopHifi |
| 0xABD8 | 0xABD8: Fehler FLASH-ROM |
| 0xABD9 | 0xABD9: Fehler RAM |
| 0xE1CC | Ein Device hat eine Monitor Nachricht nicht bekommen oder beantwortet (Error_Monitoring). |
| 0xE1CD | Gesamtring konnte nicht aufgestartet werden (Error_WakeUp_Failed). |
| 0xE1CE | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE1CF | Die zentrale Registry ist fehlerhaft (Error_Registry_New). |
| 0xE1D0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE1D1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE1D2 | Shutdown wegen Uebertemperatur (Error_Tempshutdown). |
| 0xA3CE | CD Services nicht Verfuegbar |
| 0xA3CF | CD Laufwerk steht im Reset |
| 0xA3D0 | CD Laufwerk Kommunikationsfehler |
| 0xA3D1 | Keine Verbindung zwischen Companion Chip und CAN-Transceiver |
| 0xA3D2 | Keine Verbindung zwischen Companion Chip und I/O-Expander |
| 0xA3D3 | Keine Verbindung zwischen Companion Chip und MOST |
| 0xA3D4 | Keine CAN Verbindung zum Tuner |
| 0xA3D5 | Keine CAN Verbindung zum ASK |
| 0xA3D6 | Keine CAN Verbindung zum LVDS |
| 0xA3D7 | Keine UART Verbindung zum Nav |
| 0xA3D8 | Keine CAN Verbindung zum hinteren LVDS |
| 0xA3D9 | DVD Services nicht Verfuegbar |
| 0xA3DA | DVD Laufwerk steht im Reset |
| 0xA3DB | DVD Laufwerk Kommunikationsfehler |
| 0xA3DC | Ungueltige FIB Checksumme |
| 0xA3DD | Keine Verbindung I2S Speech Out - DSP (ASK) -Speech In |
| 0xA3DE | Video In defect (obsolete) |
| 0xA3DF | Abweichung zwischen SH4-Clock und RealTime-Clock |
| 0xA3E0 | Abweichung zwischen PCI-Clock und RealTime-Clock |
| 0xA3E1 | Defekte im SDRAM |
| 0xA3E2 | Defekte im externen SDRAM |
| 0xA3E3 | Defekte im NAND-Flash |
| 0xA3E4 | FlashFileSystem konnte nicht gestartet werden |
| 0xA3E5 | Keine IPC-Verbindung zum Gateway |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9408 | Abweichung SH4 clock von der real time clock. |
| 0x9409 | Abweichung PCI clock von der real time clock. |
| 0x940A | Defekte im internen SDRAM. |
| 0x940B | Defekte im externen SDRAM. |
| 0x940C | Defekte im NAND flash. |
| 0x940D | Video In defekt (Chip 7118 antwortet nicht). |
| 0xA3C8 | Checksum Error |
| 0xA3C9 | Illegaler Speicher Zugriff |
| 0xA3CA | Illegaler Resourcen Zugriff |
| 0xA3CB | Timelimit Exeeded |
| 0xA3CC | Detected Software Exception |
| 0xA3CD | OS-Fehler |
| 0xA3CE | CD/MD Drive errors (obsolete) |
| 0xA3CF | DVD Drive errors (obsolete) |
| 0xA3D0 | No CAN connection to Tuner (obsolete) |
| 0xA3D1 | No CAN connection to ASK (obsolete) |
| 0xA3D2 | No CAN Connection to LVDS (obsolete) |
| 0xA3D3 | No connection UART to Nav (obsolete) |
| 0xA3D4 | No CAN Connection to Rear Seat LVDS (obsolete) |
| 0xA3D5 | No connection between companion chip and CAN transceiver (obsolete) |
| 0xA3D6 | No connection between companion chip and I/O expander (obsolete) |
| 0xA3D7 | No connection companion chip to Video Out (obsolete) |
| 0xA3DD | Wrong FIB checksum (obsolete) |
| 0xA3DF | No Connection I2S Speech Out - DSP (ASK) -Speech In (obsolete) |
| 0xFFFF | unbekannter Fehlerort |

### ID_64

| ORT | ORTTEXT |
| --- | --- |
| 0x9e28 | P Fehlerort: SG intern |
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
| 0x9e3c | P Fehlerort: Lautsprecher hinten |
| 0x9e3d | P Fehlerort: Lautesprecher vorne |
| 0x9e40 | P Fehlerort: EEPROM Parameterfehler |
| 0xe204 | P Fehlerort: CAN-Low, Physikalischer Busfehler |
| 0xe207 | P Fehlerort: CAN-Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### ID_65

| ORT | ORTTEXT |
| --- | --- |
| 0x9FE0 | P Lenksaeulenmodul: Hall Sensor defekt / Umschaltmotor defekt |
| 0x9FE1 | P Lenksaeulenmodul: Motor defekt |
| 0x9FE2 | P Lenksaeulenmodul: Positionsdaten Checksumme ungueltig |
| 0x9FE3 | P Lenksaeulenmodul: Parameter Checksumme ungueltig |
| 0x9FE4 | P E60/Sonnenrollo: Motor defekt |
| 0x9FE5 | P E60/Sonnenrollo: Parameter Checksumme ungueltig |
| 0x9FE6 | P E63/Sitzheizung: MOS defekt |
| 0x9FE7 | P E63/Sitzheizung: CTN defekt |
| 0x9FE8 | P E63/Sitzheizung: Parameter Checksumme ungueltig |
| 0x9FE9 | P Energiesparmode aktiv |
| 0x9FEA | P Beleuchtungsteuerung: Dimmung Parameter Checksumme ungueltig |
| 0x9FEB | P E60/MFS: Taste haengt |
| 0x9FEC | P Lenksaeulenmodul: Umschaltmotor defekt |
| 0xE244 | P CAN-Low, Physikalischer Busfehler |
| 0xE247 | P Controller, Bus off  |
| 0xFFFF | unbekannter Fehlerort |

### ID_66

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_67

| ORT | ORTTEXT |
| --- | --- |
| 0xA2C8 | Fehler Motor |
| 0xA2CB | Fehler Schiebefunktion |
| 0xA2CC | Energiesparmode aktiv |
| 0xE2C4 | Bus Low Leitungsfehler |
| 0xE2C7 | Bus Kommunikationsfehler |
| 0x2001 | S Fehler Temperatur |
| 0x2002 | S Fehler Motor PTC |
| 0x9308 | Unterspannungsfehler |
| 0x9309 | Ueberspannungsfehler |
| 0x930A | Betriebssystem Abschaltvorgaenge |
| 0x930B | Anzahl der Flashvorgaenge |
| 0x930C | Anzahl der IC Test Durchläufe |
| 0xFFFF | unbekannter Fehlerort |

### ID_68

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_69

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | keine Hallimpulse SLV  |
| 0x9E49 | keine Hallimpulse SHV  |
| 0x9E4A | keine Hallimpulse LNV  |
| 0x9E4B | keine Hallimpulse SNV  |
| 0x9E4C | keine Hallimpulse KHV  |
| 0x9E4D | keine Hallimpulse FEH  |
| 0x9E4E | keine Hallimpulse STV  |
| 0x9E4F | keine Hallimpulse LBV  |
| 0x9E50 | keine Hallimpulse LKV  |
| 0x9E51 | Fehler Motor SLV  |
| 0x9E52 | Fehler Motor SHV  |
| 0x9E53 | Fehler Motor LNV  |
| 0x9E54 | Fehler Motor SNV  |
| 0x9E55 | Fehler Motor KHV  |
| 0x9E56 | Fehler Motor FEH  |
| 0x9E57 | Fehler Motor STV  |
| 0x9E58 | Fehler Motor LBV  |
| 0x9E59 | Fehler Motor LKV  |
| 0x9E5A | Fehler Schnellheizfeld NTC Kissen  |
| 0x9E5B | Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5C | Fehler Restheizfeld NTC Kissen  |
| 0x9E5D | Fehler Restheizfeld NTC Lehne  |
| 0x9E5E | Fehler Schnellheizfeld Kissen  |
| 0x9E5F | Fehler Schnellheizfeld Lehne  |
| 0x9E60 | Fehler Restheizfeld Kissen  |
| 0x9E61 | Fehler Restheizfeld Lehne  |
| 0x9E62 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9E63 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E64 | Fehler Klima Steuerung Kissen  |
| 0x9E65 | Fehler Klima Steuerung Lehne  |
| 0x9E66 | Fehler Aktivsitz Motor  |
| 0x9E67 | Fehler Aktivsitz Magnet  |
| 0x9E68 | Fehler Aktivsitz Druckschalter  |
| 0x9E69 | Fehler Lordose Ventile  |
| 0x9E6A | Fehler Lordose Pumpe  |
| 0x9E6B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9E6C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6D | Interner Fehler EEPROM  |
| 0x9E6E | Energiesparmode aktiv  |
| 0x9E6F | Fehler Schalter SVS  |
| 0x9E70 | Fehler Schalter FEH  |
| 0x9E71 | Fehler Schalter LVK  |
| 0xE444 | CAN-Low, Physikalischer Busfehler  |
| 0xE447 | Controller, Bus off  |
| 0x9EA8 | keine Hallimpulse SLV  |
| 0x9EA9 | keine Hallimpulse SHV  |
| 0x9EAA | keine Hallimpulse LNV  |
| 0x9EAB | keine Hallimpulse SNV  |
| 0x9EAC | keine Hallimpulse KHV  |
| 0x9EAD | keine Hallimpulse FEH  |
| 0x9EAE | keine Hallimpulse STV  |
| 0x9EAF | keine Hallimpulse LBV  |
| 0x9EB0 | keine Hallimpulse LKV  |
| 0x9EB1 | Fehler Motor SLV  |
| 0x9EB2 | Fehler Motor SHV  |
| 0x9EB3 | Fehler Motor LNV  |
| 0x9EB4 | Fehler Motor SNV  |
| 0x9EB5 | Fehler Motor KHV  |
| 0x9EB6 | Fehler Motor FEH  |
| 0x9EB7 | Fehler Motor STV  |
| 0x9EB8 | Fehler Motor LBV  |
| 0x9EB9 | Fehler Motor LKV  |
| 0x9EBA | Fehler Schnellheizfeld NTC Kissen  |
| 0x9EBB | Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBC | Fehler Restheizfeld NTC Kissen  |
| 0x9EBD | Fehler Restheizfeld NTC Lehne  |
| 0x9EBE | Fehler Schnellheizfeld Kissen  |
| 0x9EBF | Fehler Schnellheizfeld Lehne  |
| 0x9EC0 | Fehler Restheizfeld Kissen  |
| 0x9EC1 | Fehler Restheizfeld Lehne  |
| 0x9EC2 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9EC3 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC4 | Fehler Klima Steuerung Kissen  |
| 0x9EC5 | Fehler Klima Steuerung Lehne  |
| 0x9EC6 | Fehler Aktivsitz Motor  |
| 0x9EC7 | Fehler Aktivsitz Magnet  |
| 0x9EC8 | Fehler Aktivsitz Druckschalter  |
| 0x9EC9 | Fehler Lordose Ventile  |
| 0x9ECA | Fehler Lordose Pumpe  |
| 0x9ECB | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9ECC | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECD | Interner Fehler EEPROM  |
| 0x9ECE | Energiesparmode aktiv  |
| 0x9ECF | Fehler Schalter SVS  |
| 0x9ED0 | Fehler Schalter FEH  |
| 0x9ED1 | Fehler Schalter LVK  |
| 0xE484 | CAN-Low, Physikalischer Busfehler  |
| 0xE487 | Controller, Bus off  |
| 0x9F08 | keine Hallimpulse SLV  |
| 0x9F09 | keine Hallimpulse SHV  |
| 0x9F0A | keine Hallimpulse LNV  |
| 0x9F0B | keine Hallimpulse SNV  |
| 0x9F0C | keine Hallimpulse KHV  |
| 0x9F0D | keine Hallimpulse FEH  |
| 0x9F0E | keine Hallimpulse STV  |
| 0x9F0F | keine Hallimpulse LBV  |
| 0x9F10 | keine Hallimpulse LKV  |
| 0x9F11 | Fehler Motor SLV  |
| 0x9F12 | Fehler Motor SHV  |
| 0x9F13 | Fehler Motor LNV  |
| 0x9F14 | Fehler Motor SNV  |
| 0x9F15 | Fehler Motor KHV  |
| 0x9F16 | Fehler Motor FEH  |
| 0x9F17 | Fehler Motor STV  |
| 0x9F18 | Fehler Motor LBV  |
| 0x9F19 | Fehler Motor LKV  |
| 0x9F1A | Fehler Schnellheizfeld NTC Kissen  |
| 0x9F1B | Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1C | Fehler Restheizfeld NTC Kissen  |
| 0x9F1D | Fehler Restheizfeld NTC Lehne  |
| 0x9F1E | Fehler Schnellheizfeld Kissen  |
| 0x9F1F | Fehler Schnellheizfeld Lehne  |
| 0x9F20 | Fehler Restheizfeld Kissen  |
| 0x9F21 | Fehler Restheizfeld Lehne  |
| 0x9F22 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F23 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F24 | Fehler Klima Steuerung Kissen  |
| 0x9F25 | Fehler Klima Steuerung Lehne  |
| 0x9F26 | Fehler Aktivsitz Motor  |
| 0x9F27 | Fehler Aktivsitz Magnet  |
| 0x9F28 | Fehler Aktivsitz Druckschalter  |
| 0x9F29 | Fehler Lordose Ventile  |
| 0x9F2A | Fehler Lordose Pumpe  |
| 0x9F2B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F2C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2D | Interner Fehler EEPROM  |
| 0x9F2E | Energiesparmode aktiv  |
| 0x9F2F | Fehler Schalter SVS  |
| 0x9F30 | Fehler Schalter FEH  |
| 0x9F31 | Fehler Schalter LVK  |
| 0xE344 | CAN-Low, Physikalischer Busfehler  |
| 0xE347 | Controller, Bus off  |
| 0x9F68 | keine Hallimpulse SLV  |
| 0x9F69 | keine Hallimpulse SHV  |
| 0x9F6A | keine Hallimpulse LNV  |
| 0x9F6B | keine Hallimpulse SNV  |
| 0x9F6C | keine Hallimpulse KHV  |
| 0x9F6D | keine Hallimpulse FEH  |
| 0x9F6E | keine Hallimpulse STV  |
| 0x9F6F | keine Hallimpulse LBV  |
| 0x9F70 | keine Hallimpulse LKV  |
| 0x9F71 | Fehler Motor SLV  |
| 0x9F72 | Fehler Motor SHV  |
| 0x9F73 | Fehler Motor LNV  |
| 0x9F74 | Fehler Motor SNV  |
| 0x9F75 | Fehler Motor KHV  |
| 0x9F76 | Fehler Motor FEH  |
| 0x9F77 | Fehler Motor STV  |
| 0x9F78 | Fehler Motor LBV  |
| 0x9F79 | Fehler Motor LKV  |
| 0x9F7A | Fehler Schnellheizfeld NTC Kissen  |
| 0x9F7B | Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7C | Fehler Restheizfeld NTC Kissen  |
| 0x9F7D | Fehler Restheizfeld NTC Lehne  |
| 0x9F7E | Fehler Schnellheizfeld Kissen  |
| 0x9F7F | Fehler Schnellheizfeld Lehne  |
| 0x9F80 | Fehler Restheizfeld Kissen  |
| 0x9F81 | Fehler Restheizfeld Lehne  |
| 0x9F82 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F83 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F84 | Fehler Klima Steuerung Kissen  |
| 0x9F85 | Fehler Klima Steuerung Lehne  |
| 0x9F86 | Fehler Aktivsitz Motor  |
| 0x9F87 | Fehler Aktivsitz Magnet  |
| 0x9F88 | Fehler Aktivsitz Druckschalter  |
| 0x9F89 | Fehler Lordose Ventile  |
| 0x9F8A | Fehler Lordose Pumpe  |
| 0x9F8B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F8C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8D | Interner Fehler EEPROM  |
| 0x9F8E | Energiesparmode aktiv  |
| 0x9F8F | Fehler Schalter SVS  |
| 0x9F90 | Fehler Schalter FEH  |
| 0x9F91 | Fehler Schalter LVK  |
| 0xE384 | CAN-Low, Physikalischer Busfehler  |
| 0xE387 | Controller, Bus off  |
| ORT | ORTTEXT |
| 0x9E9C | Fehler Motor SLV  |
| 0x9E9D | Fehler Motor SHV  |
| 0x9E9E | Fehler Motor LNV  |
| 0x9E9F | Fehler Motor SNV  |
| 0x9EA0 | Fehler Motor KHV  |
| 0x9EA1 | Fehler Motor FEH  |
| 0x9EA2 | Fehler Motor STV  |
| 0x9EA3 | Fehler Motor LBV  |
| 0x9EA4 | Fehler Motor LKV  |
| 0x9EA5 | Fehler Steuergerätetemperatur  |
| 0x9EA6 | Versorgungsspannungsfehler  |
| 0x9EA7 | Individualfahrzeug aktiv  |
| 0x9EFC | Fehler Motor SLV  |
| 0x9EFD | Fehler Motor SHV  |
| 0x9EFE | Fehler Motor LNV  |
| 0x9EFF | Fehler Motor SNV  |
| 0x9F00 | Fehler Motor KHV  |
| 0x9F01 | Fehler Motor FEH  |
| 0x9F02 | Fehler Motor STV  |
| 0x9F03 | Fehler Motor LBV  |
| 0x9F04 | Fehler Motor LKV  |
| 0x9F05 | Fehler Steuergerätetemperatur  |
| 0x9F06 | Versorgungsspannungsfehler  |
| 0x9F07 | Individualfahrzeug aktiv  |
| 0x9F5C | Fehler Motor SLV  |
| 0x9F5D | Fehler Motor SHV  |
| 0x9F5E | Fehler Motor LNV  |
| 0x9F5F | Fehler Motor SNV  |
| 0x9F60 | Fehler Motor KHV  |
| 0x9F61 | Fehler Motor FEH  |
| 0x9F62 | Fehler Motor STV  |
| 0x9F63 | Fehler Motor LBV  |
| 0x9F64 | Fehler Motor LKV  |
| 0x9F65 | Fehler Steuergerätetemperatur  |
| 0x9F66 | Versorgungsspannungsfehler  |
| 0x9F67 | Individualfahrzeug aktiv  |
| 0x9FBC | Fehler Motor SLV  |
| 0x9FBD | Fehler Motor SHV  |
| 0x9FBE | Fehler Motor LNV  |
| 0x9FBF | Fehler Motor SNV  |
| 0x9FC0 | Fehler Motor KHV  |
| 0x9FC1 | Fehler Motor FEH  |
| 0x9FC2 | Fehler Motor STV  |
| 0x9FC3 | Fehler Motor LBV  |
| 0x9FC4 | Fehler Motor LKV  |
| 0x9FC5 | Fehler Steuergerätetemperatur  |
| 0x9FC6 | Versorgungsspannungsfehler  |
| 0x9FC7 | Individualfahrzeug aktiv  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6A

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | keine Hallimpulse SLV  |
| 0x9E49 | keine Hallimpulse SHV  |
| 0x9E4A | keine Hallimpulse LNV  |
| 0x9E4B | keine Hallimpulse SNV  |
| 0x9E4C | keine Hallimpulse KHV  |
| 0x9E4D | keine Hallimpulse FEH  |
| 0x9E4E | keine Hallimpulse STV  |
| 0x9E4F | keine Hallimpulse LBV  |
| 0x9E50 | keine Hallimpulse LKV  |
| 0x9E51 | Fehler Motor SLV  |
| 0x9E52 | Fehler Motor SHV  |
| 0x9E53 | Fehler Motor LNV  |
| 0x9E54 | Fehler Motor SNV  |
| 0x9E55 | Fehler Motor KHV  |
| 0x9E56 | Fehler Motor FEH  |
| 0x9E57 | Fehler Motor STV  |
| 0x9E58 | Fehler Motor LBV  |
| 0x9E59 | Fehler Motor LKV  |
| 0x9E5A | Fehler Schnellheizfeld NTC Kissen  |
| 0x9E5B | Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5C | Fehler Restheizfeld NTC Kissen  |
| 0x9E5D | Fehler Restheizfeld NTC Lehne  |
| 0x9E5E | Fehler Schnellheizfeld Kissen  |
| 0x9E5F | Fehler Schnellheizfeld Lehne  |
| 0x9E60 | Fehler Restheizfeld Kissen  |
| 0x9E61 | Fehler Restheizfeld Lehne  |
| 0x9E62 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9E63 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E64 | Fehler Klima Steuerung Kissen  |
| 0x9E65 | Fehler Klima Steuerung Lehne  |
| 0x9E66 | Fehler Aktivsitz Motor  |
| 0x9E67 | Fehler Aktivsitz Magnet  |
| 0x9E68 | Fehler Aktivsitz Druckschalter  |
| 0x9E69 | Fehler Lordose Ventile  |
| 0x9E6A | Fehler Lordose Pumpe  |
| 0x9E6B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9E6C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6D | Interner Fehler EEPROM  |
| 0x9E6E | Energiesparmode aktiv  |
| 0x9E6F | Fehler Schalter SVS  |
| 0x9E70 | Fehler Schalter FEH  |
| 0x9E71 | Fehler Schalter LVK  |
| 0xE444 | CAN-Low, Physikalischer Busfehler  |
| 0xE447 | Controller, Bus off  |
| 0x9EA8 | keine Hallimpulse SLV  |
| 0x9EA9 | keine Hallimpulse SHV  |
| 0x9EAA | keine Hallimpulse LNV  |
| 0x9EAB | keine Hallimpulse SNV  |
| 0x9EAC | keine Hallimpulse KHV  |
| 0x9EAD | keine Hallimpulse FEH  |
| 0x9EAE | keine Hallimpulse STV  |
| 0x9EAF | keine Hallimpulse LBV  |
| 0x9EB0 | keine Hallimpulse LKV  |
| 0x9EB1 | Fehler Motor SLV  |
| 0x9EB2 | Fehler Motor SHV  |
| 0x9EB3 | Fehler Motor LNV  |
| 0x9EB4 | Fehler Motor SNV  |
| 0x9EB5 | Fehler Motor KHV  |
| 0x9EB6 | Fehler Motor FEH  |
| 0x9EB7 | Fehler Motor STV  |
| 0x9EB8 | Fehler Motor LBV  |
| 0x9EB9 | Fehler Motor LKV  |
| 0x9EBA | Fehler Schnellheizfeld NTC Kissen  |
| 0x9EBB | Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBC | Fehler Restheizfeld NTC Kissen  |
| 0x9EBD | Fehler Restheizfeld NTC Lehne  |
| 0x9EBE | Fehler Schnellheizfeld Kissen  |
| 0x9EBF | Fehler Schnellheizfeld Lehne  |
| 0x9EC0 | Fehler Restheizfeld Kissen  |
| 0x9EC1 | Fehler Restheizfeld Lehne  |
| 0x9EC2 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9EC3 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC4 | Fehler Klima Steuerung Kissen  |
| 0x9EC5 | Fehler Klima Steuerung Lehne  |
| 0x9EC6 | Fehler Aktivsitz Motor  |
| 0x9EC7 | Fehler Aktivsitz Magnet  |
| 0x9EC8 | Fehler Aktivsitz Druckschalter  |
| 0x9EC9 | Fehler Lordose Ventile  |
| 0x9ECA | Fehler Lordose Pumpe  |
| 0x9ECB | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9ECC | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECD | Interner Fehler EEPROM  |
| 0x9ECE | Energiesparmode aktiv  |
| 0x9ECF | Fehler Schalter SVS  |
| 0x9ED0 | Fehler Schalter FEH  |
| 0x9ED1 | Fehler Schalter LVK  |
| 0xE484 | CAN-Low, Physikalischer Busfehler  |
| 0xE487 | Controller, Bus off  |
| 0x9F08 | keine Hallimpulse SLV  |
| 0x9F09 | keine Hallimpulse SHV  |
| 0x9F0A | keine Hallimpulse LNV  |
| 0x9F0B | keine Hallimpulse SNV  |
| 0x9F0C | keine Hallimpulse KHV  |
| 0x9F0D | keine Hallimpulse FEH  |
| 0x9F0E | keine Hallimpulse STV  |
| 0x9F0F | keine Hallimpulse LBV  |
| 0x9F10 | keine Hallimpulse LKV  |
| 0x9F11 | Fehler Motor SLV  |
| 0x9F12 | Fehler Motor SHV  |
| 0x9F13 | Fehler Motor LNV  |
| 0x9F14 | Fehler Motor SNV  |
| 0x9F15 | Fehler Motor KHV  |
| 0x9F16 | Fehler Motor FEH  |
| 0x9F17 | Fehler Motor STV  |
| 0x9F18 | Fehler Motor LBV  |
| 0x9F19 | Fehler Motor LKV  |
| 0x9F1A | Fehler Schnellheizfeld NTC Kissen  |
| 0x9F1B | Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1C | Fehler Restheizfeld NTC Kissen  |
| 0x9F1D | Fehler Restheizfeld NTC Lehne  |
| 0x9F1E | Fehler Schnellheizfeld Kissen  |
| 0x9F1F | Fehler Schnellheizfeld Lehne  |
| 0x9F20 | Fehler Restheizfeld Kissen  |
| 0x9F21 | Fehler Restheizfeld Lehne  |
| 0x9F22 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F23 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F24 | Fehler Klima Steuerung Kissen  |
| 0x9F25 | Fehler Klima Steuerung Lehne  |
| 0x9F26 | Fehler Aktivsitz Motor  |
| 0x9F27 | Fehler Aktivsitz Magnet  |
| 0x9F28 | Fehler Aktivsitz Druckschalter  |
| 0x9F29 | Fehler Lordose Ventile  |
| 0x9F2A | Fehler Lordose Pumpe  |
| 0x9F2B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F2C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2D | Interner Fehler EEPROM  |
| 0x9F2E | Energiesparmode aktiv  |
| 0x9F2F | Fehler Schalter SVS  |
| 0x9F30 | Fehler Schalter FEH  |
| 0x9F31 | Fehler Schalter LVK  |
| 0xE344 | CAN-Low, Physikalischer Busfehler  |
| 0xE347 | Controller, Bus off  |
| 0x9F68 | keine Hallimpulse SLV  |
| 0x9F69 | keine Hallimpulse SHV  |
| 0x9F6A | keine Hallimpulse LNV  |
| 0x9F6B | keine Hallimpulse SNV  |
| 0x9F6C | keine Hallimpulse KHV  |
| 0x9F6D | keine Hallimpulse FEH  |
| 0x9F6E | keine Hallimpulse STV  |
| 0x9F6F | keine Hallimpulse LBV  |
| 0x9F70 | keine Hallimpulse LKV  |
| 0x9F71 | Fehler Motor SLV  |
| 0x9F72 | Fehler Motor SHV  |
| 0x9F73 | Fehler Motor LNV  |
| 0x9F74 | Fehler Motor SNV  |
| 0x9F75 | Fehler Motor KHV  |
| 0x9F76 | Fehler Motor FEH  |
| 0x9F77 | Fehler Motor STV  |
| 0x9F78 | Fehler Motor LBV  |
| 0x9F79 | Fehler Motor LKV  |
| 0x9F7A | Fehler Schnellheizfeld NTC Kissen  |
| 0x9F7B | Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7C | Fehler Restheizfeld NTC Kissen  |
| 0x9F7D | Fehler Restheizfeld NTC Lehne  |
| 0x9F7E | Fehler Schnellheizfeld Kissen  |
| 0x9F7F | Fehler Schnellheizfeld Lehne  |
| 0x9F80 | Fehler Restheizfeld Kissen  |
| 0x9F81 | Fehler Restheizfeld Lehne  |
| 0x9F82 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F83 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F84 | Fehler Klima Steuerung Kissen  |
| 0x9F85 | Fehler Klima Steuerung Lehne  |
| 0x9F86 | Fehler Aktivsitz Motor  |
| 0x9F87 | Fehler Aktivsitz Magnet  |
| 0x9F88 | Fehler Aktivsitz Druckschalter  |
| 0x9F89 | Fehler Lordose Ventile  |
| 0x9F8A | Fehler Lordose Pumpe  |
| 0x9F8B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F8C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8D | Interner Fehler EEPROM  |
| 0x9F8E | Energiesparmode aktiv  |
| 0x9F8F | Fehler Schalter SVS  |
| 0x9F90 | Fehler Schalter FEH  |
| 0x9F91 | Fehler Schalter LVK  |
| 0xE384 | CAN-Low, Physikalischer Busfehler  |
| 0xE387 | Controller, Bus off  |
| 0x9E9C | Fehler Motor SLV  |
| 0x9E9D | Fehler Motor SHV  |
| 0x9E9E | Fehler Motor LNV  |
| 0x9E9F | Fehler Motor SNV  |
| 0x9EA0 | Fehler Motor KHV  |
| 0x9EA1 | Fehler Motor FEH  |
| 0x9EA2 | Fehler Motor STV  |
| 0x9EA3 | Fehler Motor LBV  |
| 0x9EA4 | Fehler Motor LKV  |
| 0x9EA5 | Fehler Steuergerätetemperatur  |
| 0x9EA6 | Versorgungsspannungsfehler  |
| 0x9EA7 | Individualfahrzeug aktiv  |
| 0x9EFC | Fehler Motor SLV  |
| 0x9EFD | Fehler Motor SHV  |
| 0x9EFE | Fehler Motor LNV  |
| 0x9EFF | Fehler Motor SNV  |
| 0x9F00 | Fehler Motor KHV  |
| 0x9F01 | Fehler Motor FEH  |
| 0x9F02 | Fehler Motor STV  |
| 0x9F03 | Fehler Motor LBV  |
| 0x9F04 | Fehler Motor LKV  |
| 0x9F05 | Fehler Steuergerätetemperatur  |
| 0x9F06 | Versorgungsspannungsfehler  |
| 0x9F07 | Individualfahrzeug aktiv  |
| 0x9F5C | Fehler Motor SLV  |
| 0x9F5D | Fehler Motor SHV  |
| 0x9F5E | Fehler Motor LNV  |
| 0x9F5F | Fehler Motor SNV  |
| 0x9F60 | Fehler Motor KHV  |
| 0x9F61 | Fehler Motor FEH  |
| 0x9F62 | Fehler Motor STV  |
| 0x9F63 | Fehler Motor LBV  |
| 0x9F64 | Fehler Motor LKV  |
| 0x9F65 | Fehler Steuergerätetemperatur  |
| 0x9F66 | Versorgungsspannungsfehler  |
| 0x9F67 | Individualfahrzeug aktiv  |
| 0x9FBC | Fehler Motor SLV  |
| 0x9FBD | Fehler Motor SHV  |
| 0x9FBE | Fehler Motor LNV  |
| 0x9FBF | Fehler Motor SNV  |
| 0x9FC0 | Fehler Motor KHV  |
| 0x9FC1 | Fehler Motor FEH  |
| 0x9FC2 | Fehler Motor STV  |
| 0x9FC3 | Fehler Motor LBV  |
| 0x9FC4 | Fehler Motor LKV  |
| 0x9FC5 | Fehler Steuergerätetemperatur  |
| 0x9FC6 | Versorgungsspannungsfehler  |
| 0x9FC7 | Individualfahrzeug aktiv  |
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
| 0x9E48 | keine Hallimpulse SLV  |
| 0x9E49 | keine Hallimpulse SHV  |
| 0x9E4A | keine Hallimpulse LNV  |
| 0x9E4B | keine Hallimpulse SNV  |
| 0x9E4C | keine Hallimpulse KHV  |
| 0x9E4D | keine Hallimpulse FEH  |
| 0x9E4E | Fehler Motor SLV / keine Hallimpulse STV  |
| 0x9E4F | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9E50 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9E51 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9E52 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9E53 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9E54 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9E55 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9E56 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9E57 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9E58 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl 30s  |
| 0x9E59 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9E5A | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9E5B | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5C | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9E5D | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9E5E | Fehler Schnellheizfeld Kissen  |
| 0x9E5F | Fehler Schnellheizfeld Lehne  |
| 0x9E60 | Fehler Restheizfeld Kissen  |
| 0x9E61 | Fehler Restheizfeld Lehne  |
| 0x9E62 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9E63 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E64 | Fehler Klima Steuerung Kissen  |
| 0x9E65 | Fehler Klima Steuerung Lehne  |
| 0x9E66 | Fehler Aktivsitz Motor  |
| 0x9E67 | Fehler Aktivsitz Magnet  |
| 0x9E68 | Fehler Aktivsitz Druckschalter  |
| 0x9E69 | Fehler Lordose Ventile  |
| 0x9E6A | Fehler Lordose Pumpe  |
| 0x9E6B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9E6C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6D | Interner Fehler EEPROM  |
| 0x9E6E | Energiesparmode aktiv  |
| 0x9E6F | Fehler Schalter SVS  |
| 0x9E70 | Fehler Schalter FEH  |
| 0x9E71 | Fehler Schalter LVK  |
| 0x9EA8 | keine Hallimpulse SLV / keine Hallimpulse SLV  |
| 0x9EA9 | keine Hallimpulse SHV / keine Hallimpulse SHV  |
| 0x9EAA | keine Hallimpulse LNV / keine Hallimpulse LNV  |
| 0x9EAB | keine Hallimpulse SNV / keine Hallimpulse SNV  |
| 0x9EAC | keine Hallimpulse KHV / keine Hallimpulse KHV  |
| 0x9EAD | keine Hallimpulse FEH / keine Hallimpulse FEH  |
| 0x9EAE | Fehler Motor SLV / keine Hallimpulse STV  |
| 0x9EAF | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9EB0 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9EB1 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9EB2 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9EB3 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9EB4 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9EB5 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9EB6 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9EB7 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s  |
| 0x9EB8 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9EB9 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9EBA | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9EBB | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBC | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9EBD | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9EBE | Fehler Schnellheizfeld Kissen  |
| 0x9EBF | Fehler Schnellheizfeld Lehne  |
| 0x9EC0 | Fehler Restheizfeld Kissen  |
| 0x9EC1 | Fehler Restheizfeld Lehne  |
| 0x9EC2 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9EC3 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC4 | Fehler Klima Steuerung Kissen  |
| 0x9EC5 | Fehler Klima Steuerung Lehne  |
| 0x9EC6 | Fehler Aktivsitz Motor  |
| 0x9EC7 | Fehler Aktivsitz Magnet  |
| 0x9EC8 | Fehler Aktivsitz Druckschalter  |
| 0x9EC9 | Fehler Lordose Ventile  |
| 0x9ECA | Fehler Lordose Pumpe  |
| 0x9ECB | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9ECC | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECD | Interner Fehler EEPROM  |
| 0x9ECE | Energiesparmode aktiv  |
| 0x9ECF | Fehler Schalter SVS  |
| 0x9ED0 | Fehler Schalter FEH  |
| 0x9ED1 | Fehler Schalter LVK  |
| 0x9F08 | keine Hallimpulse SLV  |
| 0x9F09 | keine Hallimpulse SHV  |
| 0x9F0A | keine Hallimpulse LNV  |
| 0x9F0B | keine Hallimpulse SNV  |
| 0x9F0C | keine Hallimpulse KHV  |
| 0x9F0D | keine Hallimpulse FEH  |
| 0x9F0E | Fehler Motor SLV/ keine Hallimpulse STV  |
| 0x9F0F | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9F10 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9F11 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9F12 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9F13 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9F14 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9F15 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9F16 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9F17 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s  |
| 0x9F18 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F19 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9F1A | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9F1B | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1C | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9F1D | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9F1E | Fehler Schnellheizfeld Kissen  |
| 0x9F1F | Fehler Schnellheizfeld Lehne  |
| 0x9F20 | Fehler Restheizfeld Kissen  |
| 0x9F21 | Fehler Restheizfeld Lehne  |
| 0x9F22 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F23 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F24 | Fehler Klima Steuerung Kissen  |
| 0x9F25 | Fehler Klima Steuerung Lehne  |
| 0x9F26 | Fehler Aktivsitz Motor  |
| 0x9F27 | Fehler Aktivsitz Magnet  |
| 0x9F28 | Fehler Aktivsitz Druckschalter  |
| 0x9F29 | Fehler Lordose Ventile  |
| 0x9F2A | Fehler Lordose Pumpe  |
| 0x9F2B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F2C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2D | Interner Fehler EEPROM  |
| 0x9F2E | Energiesparmode aktiv  |
| 0x9F2F | Fehler Schalter SVS  |
| 0x9F30 | Fehler Schalter FEH  |
| 0x9F31 | Fehler Schalter LVK  |
| 0x9F68 | keine Hallimpulse SLV  |
| 0x9F69 | keine Hallimpulse SHV  |
| 0x9F6A | keine Hallimpulse LNV  |
| 0x9F6B | keine Hallimpulse SNV  |
| 0x9F6C | keine Hallimpulse KHV  |
| 0x9F6D | keine Hallimpulse FEH  |
| 0x9F6E | Fehler Motor SLV / keine Hallimpulse STV  |
| 0x9F6F | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9F70 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9F71 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9F72 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9F73 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9F74 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9F75 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9F76 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9F77 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s  |
| 0x9F78 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F79 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9F7A | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9F7B | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7C | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9F7D | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9F7E | Fehler Schnellheizfeld Kissen  |
| 0x9F7F | Fehler Schnellheizfeld Lehne  |
| 0x9F80 | Fehler Restheizfeld Kissen  |
| 0x9F81 | Fehler Restheizfeld Lehne  |
| 0x9F82 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F83 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F84 | Fehler Klima Steuerung Kissen  |
| 0x9F85 | Fehler Klima Steuerung Lehne  |
| 0x9F86 | Fehler Aktivsitz Motor  |
| 0x9F87 | Fehler Aktivsitz Magnet  |
| 0x9F88 | Fehler Aktivsitz Druckschalter  |
| 0x9F89 | Fehler Lordose Ventile  |
| 0x9F8A | Fehler Lordose Pumpe  |
| 0x9F8B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F8C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8D | Interner Fehler EEPROM  |
| 0x9F8E | Energiesparmode aktiv  |
| 0x9F8F | Fehler Schalter SVS  |
| 0x9F90 | Fehler Schalter FEH  |
| 0x9F91 | Fehler Schalter LVK  |
| 0xE344 | CAN-Low, Physikalischer Busfehler  |
| 0xE347 | Controller, Bus off  |
| 0xE384 | CAN-Low, Physikalischer Busfehler  |
| 0xE387 | Controller, Bus off  |
| 0xE444 | CAN-Low, Physikalischer Busfehler  |
| 0xE447 | Controller, Bus off  |
| 0xE484 | CAN-Low, Physikalischer Busfehler  |
| 0xE487 | Controller, Bus off  |
| 0x9E9C | Fehler Motor SLV  |
| 0x9E9D | Fehler Motor SHV  |
| 0x9E9E | Fehler Motor LNV  |
| 0x9E9F | Fehler Motor SNV  |
| 0x9EA0 | Fehler Motor KHV  |
| 0x9EA1 | Fehler Motor FEH  |
| 0x9EA2 | Fehler Motor STV  |
| 0x9EA3 | Fehler Motor LBV  |
| 0x9EA4 | Fehler Motor LKV  |
| 0x9EA5 | Fehler Steuergerätetemperatur  |
| 0x9EA6 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9EA7 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0x9EFC | Fehler Motor SLV  |
| 0x9EFD | Fehler Motor SHV  |
| 0x9EFE | Fehler Motor LNV  |
| 0x9EFF | Fehler Motor SNV  |
| 0x9F00 | Fehler Motor KHV  |
| 0x9F01 | Fehler Motor FEH  |
| 0x9F02 | Fehler Motor STV  |
| 0x9F03 | Fehler Motor LBV  |
| 0x9F04 | Fehler Motor LKV  |
| 0x9F05 | Fehler Steuergerätetemperatur  |
| 0x9F06 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9F07 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0x9F5C | Fehler Motor SLV  |
| 0x9F5D | Fehler Motor SHV  |
| 0x9F5E | Fehler Motor LNV  |
| 0x9F5F | Fehler Motor SNV  |
| 0x9F60 | Fehler Motor KHV  |
| 0x9F61 | Fehler Motor FEH  |
| 0x9F62 | Fehler Motor STV  |
| 0x9F63 | Fehler Motor LBV  |
| 0x9F64 | Fehler Motor LKV  |
| 0x9F65 | Fehler Steuergerätetemperatur  |
| 0x9F66 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9F67 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0x9FBC | Fehler Motor SLV  |
| 0x9FBD | Fehler Motor SHV  |
| 0x9FBE | Fehler Motor LNV  |
| 0x9FBF | Fehler Motor SNV  |
| 0x9FC0 | Fehler Motor KHV  |
| 0x9FC1 | Fehler Motor FEH  |
| 0x9FC2 | Fehler Motor STV  |
| 0x9FC3 | Fehler Motor LBV  |
| 0x9FC4 | Fehler Motor LKV  |
| 0x9FC5 | Fehler Steuergerätetemperatur  |
| 0x9FC6 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9FC7 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6E

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | keine Hallimpulse SLV  |
| 0x9E49 | keine Hallimpulse SHV  |
| 0x9E4A | keine Hallimpulse LNV  |
| 0x9E4B | keine Hallimpulse SNV  |
| 0x9E4C | keine Hallimpulse KHV  |
| 0x9E4D | keine Hallimpulse FEH  |
| 0x9E4E | Fehler Motor SLV / keine Hallimpulse STV  |
| 0x9E4F | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9E50 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9E51 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9E52 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9E53 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9E54 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9E55 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9E56 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9E57 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9E58 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl 30s  |
| 0x9E59 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9E5A | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9E5B | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9E5C | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9E5D | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9E5E | Fehler Schnellheizfeld Kissen  |
| 0x9E5F | Fehler Schnellheizfeld Lehne  |
| 0x9E60 | Fehler Restheizfeld Kissen  |
| 0x9E61 | Fehler Restheizfeld Lehne  |
| 0x9E62 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9E63 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9E64 | Fehler Klima Steuerung Kissen  |
| 0x9E65 | Fehler Klima Steuerung Lehne  |
| 0x9E66 | Fehler Aktivsitz Motor  |
| 0x9E67 | Fehler Aktivsitz Magnet  |
| 0x9E68 | Fehler Aktivsitz Druckschalter  |
| 0x9E69 | Fehler Lordose Ventile  |
| 0x9E6A | Fehler Lordose Pumpe  |
| 0x9E6B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9E6C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9E6D | Interner Fehler EEPROM  |
| 0x9E6E | Energiesparmode aktiv  |
| 0x9E6F | Fehler Schalter SVS  |
| 0x9E70 | Fehler Schalter FEH  |
| 0x9E71 | Fehler Schalter LVK  |
| 0x9EA8 | keine Hallimpulse SLV / keine Hallimpulse SLV  |
| 0x9EA9 | keine Hallimpulse SHV / keine Hallimpulse SHV  |
| 0x9EAA | keine Hallimpulse LNV / keine Hallimpulse LNV  |
| 0x9EAB | keine Hallimpulse SNV / keine Hallimpulse SNV  |
| 0x9EAC | keine Hallimpulse KHV / keine Hallimpulse KHV  |
| 0x9EAD | keine Hallimpulse FEH / keine Hallimpulse FEH  |
| 0x9EAE | Fehler Motor SLV / keine Hallimpulse STV  |
| 0x9EAF | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9EB0 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9EB1 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9EB2 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9EB3 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9EB4 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9EB5 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9EB6 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9EB7 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s  |
| 0x9EB8 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9EB9 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9EBA | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9EBB | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9EBC | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9EBD | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9EBE | Fehler Schnellheizfeld Kissen  |
| 0x9EBF | Fehler Schnellheizfeld Lehne  |
| 0x9EC0 | Fehler Restheizfeld Kissen  |
| 0x9EC1 | Fehler Restheizfeld Lehne  |
| 0x9EC2 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9EC3 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9EC4 | Fehler Klima Steuerung Kissen  |
| 0x9EC5 | Fehler Klima Steuerung Lehne  |
| 0x9EC6 | Fehler Aktivsitz Motor  |
| 0x9EC7 | Fehler Aktivsitz Magnet  |
| 0x9EC8 | Fehler Aktivsitz Druckschalter  |
| 0x9EC9 | Fehler Lordose Ventile  |
| 0x9ECA | Fehler Lordose Pumpe  |
| 0x9ECB | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9ECC | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9ECD | Interner Fehler EEPROM  |
| 0x9ECE | Energiesparmode aktiv  |
| 0x9ECF | Fehler Schalter SVS  |
| 0x9ED0 | Fehler Schalter FEH  |
| 0x9ED1 | Fehler Schalter LVK  |
| 0x9F08 | keine Hallimpulse SLV  |
| 0x9F09 | keine Hallimpulse SHV  |
| 0x9F0A | keine Hallimpulse LNV  |
| 0x9F0B | keine Hallimpulse SNV  |
| 0x9F0C | keine Hallimpulse KHV  |
| 0x9F0D | keine Hallimpulse FEH  |
| 0x9F0E | Fehler Motor SLV/ keine Hallimpulse STV  |
| 0x9F0F | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9F10 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9F11 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9F12 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9F13 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9F14 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9F15 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9F16 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9F17 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s  |
| 0x9F18 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F19 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9F1A | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9F1B | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9F1C | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9F1D | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9F1E | Fehler Schnellheizfeld Kissen  |
| 0x9F1F | Fehler Schnellheizfeld Lehne  |
| 0x9F20 | Fehler Restheizfeld Kissen  |
| 0x9F21 | Fehler Restheizfeld Lehne  |
| 0x9F22 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F23 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F24 | Fehler Klima Steuerung Kissen  |
| 0x9F25 | Fehler Klima Steuerung Lehne  |
| 0x9F26 | Fehler Aktivsitz Motor  |
| 0x9F27 | Fehler Aktivsitz Magnet  |
| 0x9F28 | Fehler Aktivsitz Druckschalter  |
| 0x9F29 | Fehler Lordose Ventile  |
| 0x9F2A | Fehler Lordose Pumpe  |
| 0x9F2B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F2C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F2D | Interner Fehler EEPROM  |
| 0x9F2E | Energiesparmode aktiv  |
| 0x9F2F | Fehler Schalter SVS  |
| 0x9F30 | Fehler Schalter FEH  |
| 0x9F31 | Fehler Schalter LVK  |
| 0x9F68 | keine Hallimpulse SLV  |
| 0x9F69 | keine Hallimpulse SHV  |
| 0x9F6A | keine Hallimpulse LNV  |
| 0x9F6B | keine Hallimpulse SNV  |
| 0x9F6C | keine Hallimpulse KHV  |
| 0x9F6D | keine Hallimpulse FEH  |
| 0x9F6E | Fehler Motor SLV / keine Hallimpulse STV  |
| 0x9F6F | Fehler Motor SHV / keine Hallimpulse LBV  |
| 0x9F70 | Fehler Motor LNV / keine Hallimpulse LKV  |
| 0x9F71 | Fehler Motor SLV / Fehler Motor SNV  |
| 0x9F72 | Fehler Motor KHV / Fehler Motor SHV  |
| 0x9F73 | Fehler Motor FEH / Fehler Motor LNV  |
| 0x9F74 | Fehler Heizfeld NTC / Fehler Motor SNV  |
| 0x9F75 | Fehler Heizfeld Kissen / Fehler Motor KHV  |
| 0x9F76 | Fehler Heizfeld Lehne / Fehler Motor FEH  |
| 0x9F77 | Fehler Motor STV / Interner Fehler Versorgungsspannung U12s  |
| 0x9F78 | Fehler Motor LBV / Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F79 | Fehler Motor LKV / Interner Fehler EEPROM  |
| 0x9F7A | Energiesparmode aktiv / Fehler Schnellheizfeld NTC Kissen  |
| 0x9F7B | Fehler Schalter SVS / Fehler Schnellheizfeld NTC Lehne  |
| 0x9F7C | Fehler Restheizfeld NTC Kissen / Fehler Schalter FEH  |
| 0x9F7D | Fehler Restheizfeld NTC Lehne / Fehler Schalter LVK  |
| 0x9F7E | Fehler Schnellheizfeld Kissen  |
| 0x9F7F | Fehler Schnellheizfeld Lehne  |
| 0x9F80 | Fehler Restheizfeld Kissen  |
| 0x9F81 | Fehler Restheizfeld Lehne  |
| 0x9F82 | Fehler Heizungstreiber durchlegiert oder NTC defekt  |
| 0x9F83 | Fehler Klima Versorgung Kissen und Lehne  |
| 0x9F84 | Fehler Klima Steuerung Kissen  |
| 0x9F85 | Fehler Klima Steuerung Lehne  |
| 0x9F86 | Fehler Aktivsitz Motor  |
| 0x9F87 | Fehler Aktivsitz Magnet  |
| 0x9F88 | Fehler Aktivsitz Druckschalter  |
| 0x9F89 | Fehler Lordose Ventile  |
| 0x9F8A | Fehler Lordose Pumpe  |
| 0x9F8B | Interner Fehler Versorgungsspannung U12s oder U12h  |
| 0x9F8C | Kurzschluss Heizung oder interner Fehler Versorgungsspannung Kl30s  |
| 0x9F8D | Interner Fehler EEPROM  |
| 0x9F8E | Energiesparmode aktiv  |
| 0x9F8F | Fehler Schalter SVS  |
| 0x9F90 | Fehler Schalter FEH  |
| 0x9F91 | Fehler Schalter LVK  |
| 0xE344 | CAN-Low, Physikalischer Busfehler  |
| 0xE347 | Controller, Bus off  |
| 0xE384 | CAN-Low, Physikalischer Busfehler  |
| 0xE387 | Controller, Bus off  |
| 0xE444 | CAN-Low, Physikalischer Busfehler  |
| 0xE447 | Controller, Bus off  |
| 0xE484 | CAN-Low, Physikalischer Busfehler  |
| 0xE487 | Controller, Bus off  |
| 0x9E9C | Fehler Motor SLV  |
| 0x9E9D | Fehler Motor SHV  |
| 0x9E9E | Fehler Motor LNV  |
| 0x9E9F | Fehler Motor SNV  |
| 0x9EA0 | Fehler Motor KHV  |
| 0x9EA1 | Fehler Motor FEH  |
| 0x9EA2 | Fehler Motor STV  |
| 0x9EA3 | Fehler Motor LBV  |
| 0x9EA4 | Fehler Motor LKV  |
| 0x9EA5 | Fehler Steuergerätetemperatur  |
| 0x9EA6 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9EA7 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0x9EFC | Fehler Motor SLV  |
| 0x9EFD | Fehler Motor SHV  |
| 0x9EFE | Fehler Motor LNV  |
| 0x9EFF | Fehler Motor SNV  |
| 0x9F00 | Fehler Motor KHV  |
| 0x9F01 | Fehler Motor FEH  |
| 0x9F02 | Fehler Motor STV  |
| 0x9F03 | Fehler Motor LBV  |
| 0x9F04 | Fehler Motor LKV  |
| 0x9F05 | Fehler Steuergerätetemperatur  |
| 0x9F06 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9F07 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0x9F5C | Fehler Motor SLV  |
| 0x9F5D | Fehler Motor SHV  |
| 0x9F5E | Fehler Motor LNV  |
| 0x9F5F | Fehler Motor SNV  |
| 0x9F60 | Fehler Motor KHV  |
| 0x9F61 | Fehler Motor FEH  |
| 0x9F62 | Fehler Motor STV  |
| 0x9F63 | Fehler Motor LBV  |
| 0x9F64 | Fehler Motor LKV  |
| 0x9F65 | Fehler Steuergerätetemperatur  |
| 0x9F66 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9F67 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0x9FBC | Fehler Motor SLV  |
| 0x9FBD | Fehler Motor SHV  |
| 0x9FBE | Fehler Motor LNV  |
| 0x9FBF | Fehler Motor SNV  |
| 0x9FC0 | Fehler Motor KHV  |
| 0x9FC1 | Fehler Motor FEH  |
| 0x9FC2 | Fehler Motor STV  |
| 0x9FC3 | Fehler Motor LBV  |
| 0x9FC4 | Fehler Motor LKV  |
| 0x9FC5 | Fehler Steuergerätetemperatur  |
| 0x9FC6 | Fehler Steuergerätetemperatur / Versorgungsspannungsfehler  |
| 0x9FC7 | Individualfahrzeug aktiv / Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6F

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_70

| ORT | ORTTEXT |
| --- | --- |
| 0x9CA8 | interner Fehler |
| 0x9CA9 | Klemme 30A Anschluss fehlerhaft |
| 0x9CAA | Klemme 30B Anschluss fehlerhaft |
| 0x9CAB | eine Klemme 15 fehlt |
| 0x9CAC | Bremslichtschalter defekt |
| 0x9CAD | AHM-Kommunikation gestoert |
| 0x9CAE | Bedienteilfehler |
| 0x9CAF | Lichtschalterstellung 1 defekt |
| 0x9CB0 | Lichtschalterstellung 2 defekt |
| 0x9CB1 | Dimmer-Poti defekt |
| 0x9CB2 | LWR-Poti defekt |
| 0x9CB3 | Sensor Hoehenstand vorne defekt |
| 0x9CB4 | Sensor Hoehenstand hinten defekt |
| 0x9CB5 | Energiesparmode aktiv |
| 0x9CB6 | LWR-Spulenabriss |
| 0x9CB7 | LWR-Treiberfehler |
| 0x9CB8 | SPI (EEPROM, LWR) gestoert |
| 0x9CB9 | Kurzschlussfehler 4 |
| 0x9CBA | Kurzschlussfehler 3 |
| 0x9CBB | Kurzschlussfehler 2 |
| 0x9CBC | Kurzschlussfehler 1 |
| 0x9CBD | Kommunikation mit StepperMotorBox links gestoert |
| 0x9CBE | Kommunikation mit StepperMotorBox rechts gestoert |
| 0x9CBF | SMC links defekt |
| 0x9CC0 | SMC rechts defekt |
| 0x9CC1 | Kommunikation mit Spiegel Fahrerseite gestoert |
| 0x9CC2 | Kommunikation mit Spiegel Beifahrerseite gestoert |
| 0x9CC3 | Spiegelheizung Fahrerseite defekt |
| 0x9CC4 | Spiegelheizung Beifahrerseite defekt |
| 0x9CC5 | Hallsensor FH-Fahrertuer defekt |
| 0x9CC6 | Hallsensor FH-Beifahrertuer defekt |
| 0x9CC7 | Zeitfenster FH-Fahrertuer gestoert |
| 0x9CC8 | Zeitfenster FH-Beifahrertuer gestoert |
| 0x9CC9 | FH-EEPROM gestoert |
| 0x9CCA | Relais FH-Fahrertuer defekt |
| 0x9CCB | Relais FH-Beifahrertuer defekt |
| 0x9CCC | Tiefentladungsschutz der Batterie: Abschaltung Standlicht |
| 0x9CCD | Tiefentladungsschutz der Batterie: Abschaltung Parklicht |
| 0x9CCE | Batterie tiefentladen |
| 0x9CCF | Kommunikation mit LIN-Bedienteil gestoert |
| 0x9CD0 | Antrieb Spiegel Fahrerseite defekt |
| 0x9CD1 | Antrieb Spiegel Beifahrerseite defekt |
| 0x9CD2 | Antrieb Beiklappen Spiegel Fahrerseite defekt |
| 0x9CD3 | Antrieb Beiklappen Spiegel Beifahrerseite defekt |
| 0xE584 | CAN-Low, physikalischer Fehler |
| 0xE585 | CAN-High, Kurzschluss VB |
| 0xE586 | Ground Shift, zu hoch |
| 0xE587 | Controller K-CAN, Bus Off |
| 0xE588 | Controller PT-CAN, Bus Off |
| 0xE58B | Controller PT-CAN, Bus Off |
| 0x9308 | Fernlicht links defekt |
| 0x9309 | Fernlicht rechts defekt |
| 0x930A | Abblendlicht links defekt |
| 0x930B | Abblendlicht rechts defekt |
| 0x930C | Begrenzungslicht links defekt |
| 0x930D | Begrenzungslicht rechts defekt |
| 0x930E | Nebelscheinwerfer links defekt |
| 0x930F | Nebelscheinwerfer rechts defekt |
| 0x9310 | Fahrtrichtungsanzeiger links vorne defekt |
| 0x9311 | Fahrtrichtungsanzeiger rechts vorne defekt |
| 0x9312 | Fahrtrichtungsanzeiger links hinten defekt |
| 0x9313 | Fahrtrichtungsanzeiger rechts hinten defekt |
| 0x9314 | unbekannte Lampe 1 defekt |
| 0x9315 | Beleuchtung WBL-Taster defekt |
| 0x9316 | Bremslicht links defekt |
| 0x9317 | Bremslicht rechts defekt |
| 0x9318 | Bremslicht mitte defekt |
| 0x9319 | Schlusslicht links 1 defekt |
| 0x931A | Schlusslicht rechts 1 defekt |
| 0x931B | Schlusslicht links 2 defekt |
| 0x931C | Schlusslicht rechts 2 defekt |
| 0x931D | Kennzeichenlicht defekt |
| 0x931E | Innenbeleuchtung defekt |
| 0x931F | Nebelschlusslicht links defekt |
| 0x9320 | Nebelschlusslicht rechts defekt |
| 0x9321 | Rueckfahrlicht links defekt |
| 0x9322 | Rueckfahrlicht rechts defekt |
| 0x9323 | Break-Force-Display links defekt |
| 0x9324 | Break-Force-Display rechts defekt |
| 0x9325 | Klemme 58g defekt |
| 0x9326 | LED Fahrtlichtkontrolle defekt |
| 0x9327 | LED Vorfeldbeleuchtung defekt |
| 0x9328 | LoadDump aktiviert |
| 0x9329 | Bedienteil abgerissen |
| 0x932A | Lichtnotlauf mit Kl.15 aktiv |
| 0x932B | Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x932C | ALC-System defekt |
| 0x932D | ALC-System: AL links abgeschaltet |
| 0x932E | ALC-System: AL rechts abgeschaltet |
| 0x932F | Signal vom Regenlichtsensor unplausibel |
| 0x9330 | Telegramm Geschwindigkeit ungueltig |
| 0x9331 | Telegramm Gierrate Timeout oder ungueltig |
| 0x9332 | Telegramm Lenkwinkel Timeout oder ungueltig |
| 0x9333 | Telegramm Klemmenstatus Timeout oder ungueltig |
| 0x9334 | Telegramm Status-AHM Timeout |
| 0x9335 | Telegramm Status DSC Timeout |
| 0x9336 | Telegramm Status Fahrlicht Timeout |
| 0x9337 | Uebertemperatur FH-Fahrertuer |
| 0x9338 | Uebertemperatur FH-Beifahrertuer |
| 0x9339 | Schliesszylinder defekt |
| 0x9400 | EEPROM SMC links defekt |
| 0x9401 | Motor Kurvenlicht SMC links defekt |
| 0x9402 | Motor LWR SMC links defekt |
| 0x9403 | Treiber Kurvenlicht SMC links defekt |
| 0x9404 | Spannungsversorgung Sensor SMC links defekt |
| 0x9405 | Signal Sensor SMC links defekt |
| 0x9406 | Flanke Sensor SMC links defekt |
| 0x9407 | LIN SMC links defekt |
| 0x9408 | Schrittverlust Grenze 1 SMC links |
| 0x9409 | Schrittverlust Grenze 2 SMC links |
| 0x940A | Schrittverlust Grenze 3 SMC links |
| 0x940B | Schrittverlust Grenze 4 SMC links |
| 0x940C | Schrittverlust Grenze 5 SMC links |
| 0x940D | Schrittverlust Grenze 6 SMC links |
| 0x940E | Spike auf Sensor SMS links |
| 0x940F | unbekannter Fehler 1 SMC links |
| 0x9410 | unbekannter Fehler 2 SMC links |
| 0x9411 | unbekannter Fehler 3 SMC links |
| 0x9412 | unbekannter Fehler 4 SMC links |
| 0x9413 | unbekannter Fehler 5 SMC links |
| 0x9420 | EEPROM SMC rechts defekt |
| 0x9421 | Motor Kurvenlicht SMC rechts defekt |
| 0x9422 | Motor LWR SMC rechts defekt |
| 0x9423 | Treiber Kurvenlicht SMC rechts defekt |
| 0x9424 | Spannungsversorgung Sensor SMC rechts defekt |
| 0x9425 | Signal Sensor SMC rechts defekt |
| 0x9426 | Flanke Sensor SMC rechts defekt |
| 0x9427 | LIN SMC rechts defekt |
| 0x9428 | Schrittverlust Grenze 1 SMC rechts |
| 0x9429 | Schrittverlust Grenze 2 SMC rechts |
| 0x942A | Schrittverlust Grenze 3 SMC rechts |
| 0x942B | Schrittverlust Grenze 4 SMC rechts |
| 0x942C | Schrittverlust Grenze 5 SMC rechts |
| 0x942D | Schrittverlust Grenze 6 SMC rechts |
| 0x942E | Spike auf Sensor SMS rechts |
| 0x942F | unbekannter Fehler 1 SMC rechts |
| 0x9430 | unbekannter Fehler 2 SMC rechts |
| 0x9431 | unbekannter Fehler 3 SMC rechts |
| 0x9432 | unbekannter Fehler 4 SMC rechts |
| 0x9433 | unbekannter Fehler 5 SMC rechts |
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
| 0x9CA8 | P interner Fehler |
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
| 0x9CB8 | P SPI (EEPROM, LWR) gestoert |
| 0x9CB9 | P Kurzschlussfehler 4 |
| 0x9CBA | P Kurzschlussfehler 3 |
| 0x9CBB | P Kurzschlussfehler 2 |
| 0x9CBC | P Kurzschlussfehler 1 |
| 0x9CBD | P Kommunikation mit StepperMoterBox links gestoert |
| 0x9CBE | P Kommunikation mit StepperMoterBox rechts gestoert |
| 0x9CBF | P SMC links defekt |
| 0x9CC0 | P SMC rechts defekt |
| 0x9CC1 | P Kommunikation mit Spiegel Fahrerseite gestoert |
| 0x9CC2 | P Kommunikation mit Spiegel Beifahrerseite gestoert |
| 0x9CC3 | P Spiegel Fahrerseite defekt |
| 0x9CC4 | P Spiegel Beifahrerseite defekt |
| 0x9CC5 | P Hallsensor FH-Fahrertuer defekt |
| 0x9CC6 | P Hallsensor FH-Beifahrertuer defekt |
| 0x9CC7 | P Zeitfenster FH-Fahrertuer gestoert |
| 0x9CC8 | P Zeitfenster FH-Beifahrertuer gestoert |
| 0x9CC9 | P FH-EEPROM gestoert |
| 0x9CCA | P Relais FH-Fahrertuer defekt |
| 0x9CCB | P Relais FH-Beifahrertuer defekt |
| 0x9CCC | P neuer Fehler 1 |
| 0x9CCD | P neuer Fehler 2 |
| 0x9CCE | P neuer Fehler 3 |
| 0xE584 | P CAN-Low, physikalischer Fehler |
| 0xE585 | P CAN-High, Kurzschluss VB |
| 0xE586 | P Ground Shift, zu hoch |
| 0xE587 | P Controller K-CAN, Bus Off |
| 0xE588 | P Controller PT-CAN, Bus Off |
| 0x9308 | S Fernlicht links defekt |
| 0x9309 | S Fernlicht rechts defekt |
| 0x930A | S Abblendlicht links defekt |
| 0x930B | S Abblendlicht rechts defekt |
| 0x930C | S Begrenzungslicht links defekt |
| 0x930D | S Begrenzungslicht rechts defekt |
| 0x930E | S Nebelscheinwerfer links defekt |
| 0x930F | S Nebelscheinwerfer rechts defekt |
| 0x9310 | S Fahrtrichtungsanzeiger links vorne defekt |
| 0x9311 | S Fahrtrichtungsanzeiger rechts vorne defekt |
| 0x9312 | S Fahrtrichtungsanzeiger links hinten defekt |
| 0x9313 | S Fahrtrichtungsanzeiger rechts hinten defekt |
| 0x9314 | S unbekannte Lampe 1 defekt |
| 0x9315 | S unbekannte Lampe 2 defekt |
| 0x9316 | S Bremslicht links defekt |
| 0x9317 | S Bremslicht rechts defekt |
| 0x9318 | S Bremslicht mitte defekt |
| 0x9319 | S Schlusslicht links 1 defekt |
| 0x931A | S Schlusslicht rechts 1 defekt |
| 0x931B | S Schlusslicht links 2 defekt |
| 0x931C | S Schlusslicht rechts 2 defekt |
| 0x931D | S Kennzeichenlicht defekt |
| 0x931E | S Innenbeleuchtung defekt |
| 0x931F | S Nebelschlusslicht links defekt |
| 0x9320 | S Nebelschlusslicht rechts defekt |
| 0x9321 | S Rueckfahrlicht links defekt |
| 0x9322 | S Rueckfahrlicht rechts defekt |
| 0x9323 | S Break-Force-Display links defekt |
| 0x9324 | S Break-Force-Display rechts defekt |
| 0x9325 | S Klemme 58g defekt |
| 0x9326 | S LED Fahrtlichtkontrolle defekt |
| 0x9327 | S LED Vorfeldbeleuchtung defekt |
| 0x9328 | S LoadDump aktiviert |
| 0x9329 | S Bedienteil abgerissen |
| 0x932A | S Lichtnotlauf mit Kl.15 aktiv |
| 0x932B | S Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x932C | S ALC-System defekt |
| 0x932D | S ALC-System: AL links abgeschaltet |
| 0x932E | S ALC-System: AL rechts abgeschaltet |
| 0x932F | S Signal vom Regenlichtsensor unplausibel |
| 0x9330 | S Telegramm Geschwindigkeit ungueltig |
| 0x9331 | S Telegramm Gierrate Timeout oder ungueltig |
| 0x9332 | S Telegramm Lenkwinkel Timeout oder ungueltig |
| 0x9333 | S Telegramm Klemmenstatus Timeout oder ungueltig |
| 0x9334 | S Telegramm Status-AHM Timeout |
| 0x9335 | S Uebertemperatur FH-Fahrertuer |
| 0x9336 | S Uebertemperatur FH-Beifahrertuer |
| 0x9337 | S Denormierung FH-Fahrertuer |
| 0x9338 | S Denormierung FH-Beifahrertuer |
| 0x9400 | S EEPROM SMC links defekt |
| 0x9401 | S Motor Kurvenlicht SMC links defekt |
| 0x9402 | S Motor LWR SMC links defekt |
| 0x9403 | S Treiber Kurvenlicht SMC links defekt |
| 0x9404 | S Spannungsversorgung Sensor SMC links defekt |
| 0x9405 | S Signal Sensor SMC links defekt |
| 0x9406 | S Flanke Sensor SMC links defekt |
| 0x9407 | S LIN SMC links defekt |
| 0x9408 | S Schrittverlust Grenze 1 SMC links |
| 0x9409 | S Schrittverlust Grenze 2 SMC links |
| 0x940A | S Schrittverlust Grenze 3 SMC links |
| 0x940B | S Schrittverlust Grenze 4 SMC links |
| 0x940C | S Schrittverlust Grenze 5 SMC links |
| 0x940D | S Schrittverlust Grenze 6 SMC links |
| 0x940E | S Spike auf Sensor SMS links |
| 0x940F | S unbekannter Fehler 1 SMC links |
| 0x9410 | S unbekannter Fehler 2 SMC links |
| 0x9411 | S unbekannter Fehler 3 SMC links |
| 0x9412 | S unbekannter Fehler 4 SMC links |
| 0x9413 | S unbekannter Fehler 5 SMC links |
| 0x9420 | S EEPROM SMC rechts defekt |
| 0x9421 | S Motor Kurvenlicht SMC rechts defekt |
| 0x9422 | S Motor LWR SMC rechts defekt |
| 0x9423 | S Treiber Kurvenlicht SMC rechts defekt |
| 0x9424 | S Spannungsversorgung Sensor SMC rechts defekt |
| 0x9425 | S Signal Sensor SMC rechts defekt |
| 0x9426 | S Flanke Sensor SMC rechts defekt |
| 0x9427 | S LIN SMC rechts defekt |
| 0x9428 | S Schrittverlust Grenze 1 SMC rechts |
| 0x9429 | S Schrittverlust Grenze 2 SMC rechts |
| 0x942A | S Schrittverlust Grenze 3 SMC rechts |
| 0x942B | S Schrittverlust Grenze 4 SMC rechts |
| 0x942C | S Schrittverlust Grenze 5 SMC rechts |
| 0x942D | S Schrittverlust Grenze 6 SMC rechts |
| 0x942E | S Spike auf Sensor SMS rechts |
| 0x942F | S unbekannter Fehler 1 SMC rechts |
| 0x9430 | S unbekannter Fehler 2 SMC rechts |
| 0x9431 | S unbekannter Fehler 3 SMC rechts |
| 0x9432 | S unbekannter Fehler 4 SMC rechts |
| 0x9433 | S unbekannter Fehler 5 SMC rechts |
| 0xFFFF | unbekannter Fehlerort |

### ID_73

| ORT | ORTTEXT |
| --- | --- |
| 0xA468 | P Kat. A -> Kabelbruch extern |
| 0xA469 | P Kat. B -> Elektronikausfall intern |
| 0xA46A | P Kat. C -> Uebertemperatur Abschaltung (kein defekt) |
| 0xA46B | P Kat. D -> EEP Checksumme falsch |
| 0xA46C | P Kat. E -> Energiesparmode aktiv |
| 0xA46D | P Illegal Reset |
| 0xE5C4 | K-CAN Fehler |
| 0xE5C7 | K-CAN Fehler, Bus fehlt |
| 0xE5C4 | P Komunikation: Can Low |
| 0xE5C7 | P Komunikation: Bus-Fehler |
| 0x9380 | S Temperatursensor im LCD fehlerhaft |
| 0x9381 | S Temperatursensor auf der Platine fehlerhaft |
| 0x9382 | S EEPROM Checksum-Fehler |
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
| 0x9C48 | P Mischluftklappe links (LIN) |
| 0x9C49 | P Mischluftklappe rechts (LIN) |
| 0x9C4A | P Frischluft/Umluft/Staudruckklappe (LIN) |
| 0x9C4B | P Defrostklappe (LIN) |
| 0x9C4C | P Fußraumklappe (LIN) |
| 0x9C4D | P Zentralantrieb (LIN) |
| 0x9C4E | P Schichtungsklappe (LIN) |
| 0x9C50 | P Fondbelüftungsklappe (LIN) |
| 0x9C52 | P Belüftungsklappe (LIN) |
| 0x9C53 | P PTC (LIN) |
| 0x9C56 | P Temperaturfühler Fußraum |
| 0x9C57 | P Gebläseendstufe |
| 0x9C58 | P Temperaturfühler Innenraum |
| 0x9C5F | P Temperaturfühler Belüftung |
| 0x9C61 | P 5V-Ausgang Peripherie |
| 0x9C62 | P Temperarturfühler Verdampfer |
| 0x9C63 | P Schalter Kulissenscheibe |
| 0x9C6C | P 12V-Ausgang Peripherie |
| 0x9C6E | P Sonnensensor |
| 0x9C75 | P Unter-/Überspannung |
| 0x9C7B | P Innenraumfühlergebläse |
| 0x9C90 | P Steuergerät defekt |
| 0x9C97 | P Schichtungspoti |
| 0x9CA7 | P Energiesparmode aktiv |
| 0xE704 | P CAN-Low, physikalischer Busfehler |
| 0xE707 | P Can-Bus off |
| 0xE714 | P Can-Botschaft Klemmenstatus |
| 0xE715 | P Can-Botschaft Außentemperatur |
| 0xE716 | P Can-Botschaft Dimmung |
| 0xE717 | P Can-Botschaft Motordaten |
| 0xE718 | P Can-Botschaft Status Druck Kältekreislauf |
| 0xE719 | P Can-Botschaft Kilometerstand/Reichweite |
| 0xE71A | P Can-Botschaft Drehmoment 3 |
| 0xE71B | P Can-Botschaft Wärmestrom Motor |
| 0xE71C | P Can-Botschaft Geschwindigkeit |
| 0xE71D | P Can-Botschaft Status PDC |
| 0xE71E | P Can-Botschaft Status BFS |
| 0xE71F | P Can-Botschaft Status FAS |
| 0xE720 | P Can-Botschaft Powermanagement Verbrauchersteuerung |
| 0xE721 | P Can-Botschaft Status Sensor AUC |
| 0xE722 | P Can-Botschaft Status Funkschlüssel |
| 0xE723 | P CAN-Botschaft Status Beschlag Scheibe vorn |
| 0xE724 | P CAN-Botschaft Status Schichtung Fond |
| 0xE725 | P CAN-Botschaft Fahrgestellnummer |
| 0xE726 | P CAN-Botschaft Einheiten |
| 0xE727 | P CAN-Botschaft LCD-Leuchtdichte |
| 0xE728 | P CAN-Botschaft Relativzeit |
| 0xE729 | P CAN-Botschaft Status HDC |
| 0xFFFF | unbekannter Fehlerort |

### ID_79

| ORT | ORTTEXT |
| --- | --- |
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
| 0xc874 | S TAS response invalid |
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
| 0xABC8 | P 0xABC8: Fehler Speichertest MASK |
| 0xABC9 | P 0xABC9: Laufwerk defekt |
| 0xABCA | P 0xABCA: Fehler in der Antennen-Stromversorgung |
| 0xABD8 | S 0xABD8: Fehler FLASH-ROM |
| 0xABD9 | S 0xABD9: Fehler RAM |
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
| 0xA048 | P Kein Zusaetzliches Memory verfuegbar |
| 0xA04A | P Root Zertifikat im Browser ist ungueltig |
| 0xA04B | P Das angeforderte Security Level ist beim WAP Gateway nicht verfuegbar |
| 0xA04C | P Das OU-Feld des geladenen WAP Zertifikat ist ungueltig |
| 0xA04D | P Das aktuelle Netz wird nicht unterstuetzt |
| 0xA04E | P Gyro Ausgaben ausserhalb der Spezifikation |
| 0xA04F | P Kein Tacho Signal waehrend GPS Bewegung erkennt |
| 0xA050 | P Zu grosse Tachodaten |
| 0xA051 | P Rueckwertsgang Signal in Widerspruch zu GPS |
| 0xA052 | P Grosse oder haeufige Positionsspruenge |
| 0xA053 | P Oszillatorwerte ausserhalb Grosse der Spezifikation |
| 0xA054 | P Offener GPS-Antennenanschluss |
| 0xA055 | P Kurzschluss des GPS-Antennenanschluss |
| 0xA056 | P Keine Verbindung zu GPS DSP |
| 0xA057 | P RealTimeClock inkonsistent mit GPS-Zeit |
| 0xA058 | P Gyro Fehler bei Selbsttest |
| 0xA059 | P Gyro AD-Wandler Fehler bei Selbsttest |
| 0xA05A | P Gyro gibt permanent 3.3 V |
| 0xA05B | P Generischer Gyro Fehler |
| 0xA05C | P Nicht spezifizierter Gyro Fehler |
| 0xA05D | P Nicht spezifizierter Tacho Fehler |
| 0xA05E | P Unbekanntes Soft Event |
| 0xA05F | P Illegale hardware-Interrupts |
| 0xA060 | P HIP: RAM-Fehler bei Selbsttest |
| 0xA061 | P Fehler 0xA061 |
| 0xA062 | P Fehler 0xA062 |
| 0xA063 | P HIP: interner SW-Fehler |
| 0xA064 | P HIP: Fehler bei der Freigabe einer Semaphore |
| 0xA065 | P HIP: Fehler beim Loeschen einer Message Queue |
| 0xA066 | P HIP: Fehler beim Loeschen einer Task |
| 0xA067 | P HIP: Fehler beim Suspendieren einer Task |
| 0xA6E8 | P HIP: Fehler beim Resume einer Task |
| 0xA6E9 | P HIP: Fehler beim Erstellen einer Semaphore |
| 0xA6EA | P HIP: Fehler beim Verbinden zu einer IO-Zelle |
| 0xA6EB | P HIP: Fehler beim Erstellen einer Task |
| 0xA6EC | P HIP: Fehler beim Speicher allocieren |
| 0xA6ED | P HIP: eine Message Queue ist voll |
| 0xA6EE | P HIP: Fehler beim Oeffnen des seriellen Ports |
| 0xA6EF | P HIP: COCOM event, kein recovery |
| 0xA6F0 | P HIP: Fehler in Navigations library |
| 0xA6F1 | P HIP: Serieller Port nicht gefunden |
| 0xA6F2 | P HIP: Fehler beim Zugriff auf den seriellen Port |
| 0x9508 | S Online: Browser kann nicht gestartet werden |
| 0x9509 | S Online: Dateien koennen nicht geschrieben oder gelesen werden |
| 0x950A | S Online: Initiale Timer koennen nicht gestartet werden |
| 0x950B | S Online: Einwahl in RAS-Server konnte fehlgeschlagen |
| 0x950D | S Online: Telefon nicht verfuegbar |
| 0x950E | S Online: Kein zusaetzlicher Speicher verfuegbar |
| 0x9520 | S Viva: Fehler in der Spracherkennungs-SW |
| 0x9521 | S Viva: Audioverbindung konnte nicht aufgebaut werden |
| 0x9522 | S Viva: MultiMedia Registry nicht verfuegbar |
| 0x9523 | S Viva: Mikrophon Registry nicht verfuegbar |
| 0x9524 | S Viva: Grammatik-Datei nicht verfuegbar |
| 0x9525 | S Viva: nicht alle benoetigten Resourcen konnten allokiert werden |
| 0x9526 | S Viva: SprachSynthesiser nicht verfuegbar |
| 0x9527 | S Viva: Verbindung zum SprachSynthesiser nicht verfuegbar |
| 0x9528 | S Viva: MPEG4 file player nicht verfuegbar |
| 0x9529 | S Viva: Fehler bei der Spracherkennung |
| 0x952A | S Viva: Fehler bei der Spracherzeugung |
| 0x952B | S Viva: Fehler beim Erzeugen des SampleRate Converters |
| 0x952C | S Viva: Fehler bei der Spracherverarbeitung |
| 0x952D | S Viva: Fehler in der Synthesiser Engine |
| 0x952E | S Viva: Fehler beim allocieren des Synthesisers |
| 0x952F | S Viva: Fehler beim freigeben des Synthesisers |
| 0x9530 | S Viva: Fehler mit Java MultiMedia Framework |
| 0x9531 | S Viva: Fehler mit dem Sprach-Synthesiser |
| 0x9532 | S Viva: Nativer MPEG4-Decoder kann nicht angesprochen werden |
| 0x9533 | S Viva: Nativer MPEG4-Encoder kann nicht angesprochen werden |
| 0x9534 | S Viva: Nativer MPEG4-AudioMultiplexer kann nicht angesprochen werden |
| 0x9535 | S Viva: Nativer MPEG4-Coder kann keinen Speicher allocieren |
| 0x9536 | S Viva: Nativer MPEG4-Coder hat Korrupte Eingabedaten empfangen |
| 0x9540 | S Kein VoiceMemo service Recorder gefunden. |
| 0x9541 | S Registry setting konnten nicht gelesen werden. |
| 0x9542 | S Fehler 0x9542 |
| 0x9543 | S Datenbank konnte nicht gespeichert werden |
| 0x9544 | S Kein Speicher Service Verfuegbar |
| 0x9545 | S Audio Manager Error |
| 0x9546 | S Exception der AudioMgrFactory abgefangen |
| 0x9547 | S Initialisierung des MPEG4-Encoders fehlgeschlagen |
| 0x9561 | S SAM: Verbindung zur Sprachvorverarbeitung konnte nicht erstellt werden |
| 0x9562 | S SAM: Generischer Dialog Manager konnte nicht geladen werden |
| 0x9563 | S SAM: Das PrompterFile konnte nicht geleden werden |
| 0x9564 | S SAM: keine Verbindung zum Adressbuch |
| 0x9565 | S SAM: Verbindung zur Spracherkennung konnte nicht erstellt werden |
| 0x9566 | S SAM: die Spracherkennung konnte nicht gestartet werden |
| 0x9567 | S SAM: Verbindung zum SALSA Adressbuch konnte nicht erstellt werden |
| 0x9568 | S SAM: Fehler Adressbuch Modul |
| 0x9569 | S SAM: Daten koennen nicht im Flash gespeichert werden |
| 0x956A | S SAM: Fehler in der Spracherkennung |
| 0x956B | S SAM: Fehler im Prompter Modul |
| 0x956C | S SAM: Fehler im Generischen Dialog Manager (GDM) |
| 0x956D | S SAM: Der Sprach-Application Manager (SAM) konnte nicht gestartet werden |
| 0x956E | S SAM: Der Sprachservice konnte nicht registriert werden |
| 0x956F | S SAM: Verbindung zum MPEG4 Coder konnte nicht erstellt werden |
| 0x9570 | S SAM: Fehler im der Texterkennung |
| 0x9580 | S HIP: Beim Startup ungueliges BBRAM gefunden |
| 0x9581 | S HIP: Checksum Fehler bei ROM test |
| 0x9582 | S HIP: Fehler beim Senden einer Nachricht |
| 0x9583 | S HIP: Fehler beim Empfang einer Nachricht |
| 0x9584 | S HIP: unbekanntes Fatal Event Fehler empfangen |
| 0x9585 | S HIP: unangeforderte Nachricht erhalten |
| 0x9586 | S HIP: Programmier Fehler HIP-Treiber |
| 0x9587 | S Fehler 0x9587 |
| 0x9588 | S HIP: Ein Thread konte nicht gestartet werden |
| 0x9589 | S Fehler 0x9589 |
| 0x958A | S HIP Treiber: Fehler beim Zugriff auf den seriellen Port |
| 0x958B | S HIP Treiber: Versuch zum Wiederaufbau der Verb. zu seriellem Port |
| 0x958C | S HIP Treiber: Fehler beim Zugriff auf java Ptimer |
| 0x958D | S HIP Treiber: Keine serielle Verbindung zu HIP-Modul |
| 0x958E | S HIP Treiber: Interner Zustandswechsel |
| 0x958F | S Fehler 0x958F |
| 0x9590 | S HIP Treiber: Keine Antwort auf Anforderung zur Baudraten Reduzierung |
| 0x9591 | S HIP Module antwortet nicht auf Statusanfrage |
| 0x9592 | S HIP Module antwortet mit Fehler Code |
| 0x9593 | S HIP Treiber: Weder ACK noch NACK als Antwort empfangen |
| 0x9594 | S HIP Treiber: Unerwartete Antwort auf Status Anfrage: +toName(result) |
| 0x9595 | S HIP Module Kommuniziert in keinem bekannten Protokoll |
| 0x9596 | S Keine Verbindung zu HIP Module fuer mehr als 10 sec |
| 0x9597 | S HardwareId des HIP Moduls hat unbekanntes Format |
| 0x9598 | S Die neu installierte HIP-Firmware can nicht auf dem FileSystem geloescht werden |
| 0x9599 | S HIP: Unbekanntes Event empfangen |
| 0xFFFF | unbekannter Fehlerort |

### ID_A1

| ORT | ORTTEXT |
| --- | --- |
| 0x9528 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK1 |
| 0x9529 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x952a | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK2 |
| 0x952b | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x952c | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK3 |
| 0x952d | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x952e | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK4 |
| 0x952f | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x9530 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK5 |
| 0x9531 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK5 |
| 0x9532 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK6 |
| 0x9533 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK6 |
| 0x9534 | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x9535 | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x9536 | P Stack Overflow |
| 0x9537 | P OC3 Komunikationsstoerung |
| 0x9538 | P OC3 Fehler |
| 0x9539 | P OC3 Datenspeicher |
| 0x953a | P OC3 nicht freigegeben |
| 0x953b | P Entladen der Beifahrerairbags fehlerhaft |
| 0x953c | P OC3 Vorlast |
| 0x9828 | P Watchdog-Reset uP |
| 0x9829 | P Clock-Monitor-Reset uP |
| 0x982a | P Illegal Opcode uP |
| 0x982b | P Falsche Fahrgestellnummer |
| 0x982c | P Systemzeitfehler |
| 0x982d | P Timeout ID 01H (STVL) |
| 0x982e | P Timeout ID 02H (Reserve) |
| 0x982f | P Timeout ID 03H (STVR) |
| 0x9830 | P Timeout ID 04H (Reserve) |
| 0x9831 | P Timeout ID 05H (Reserve/SBSL_Y) |
| 0x9832 | P Timeout ID 06H (Reserve) |
| 0x9833 | P Timeout ID 07H (SBSR_Y) |
| 0x9834 | P Timeout ID 08H (Reserve) |
| 0x9835 | P Timeout ID 09H (Zentral_Y; E85: SIM/E6x: SFZ) |
| 0x9836 | P Timeout ID 0AH (E85: SIM/E6x: SGM) |
| 0x9837 | P Timeout ID 0BH (Reserve/SBSL_X) |
| 0x9838 | P Timeout ID 0CH (SBSR_X) |
| 0x9839 | P Timeout ID 0DH (Zentral_X; E85: SIM/E6x: SFZ) |
| 0x983a | P Timeout ID 11H (Reserve/SBSL Batterieleitung) |
| 0x983b | P Timeout ID 12H (SBSR Batterieleitung) |
| 0x983c | P Timeout ID 20H (Reserve/SBSL Sitzbelegungserkennung) |
| 0x983d | P Timeout ID 21H (SBSR Sitzbelegungserkennung) |
| 0x983e | P Unterbrechung ZK-Line |
| 0x983f | P Timeout ID 71H (E85: SIM/E6x: SGM Status) |
| 0x9840 | P Codierdaten Checksummenfehler  |
| 0x9841 | P Codierdaten falsch |
| 0x9842 | P PDC_3: zu wenig Telegramme |
| 0x9843 | P PDC_3: Datenfehler in Telegramm |
| 0x9844 | P PDC_3: Uebertragungsfehler |
| 0x9845 | P Unplausible Crash-Schwere |
| 0x9846 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) |
| 0x9847 | P Kurzschluss ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) nach Masse |
| 0x9848 | P Kurzschluss ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) nach Plus |
| 0x9849 | P Widerstand Zuendpille ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) zu klein |
| 0x984a | P Widerstand Zuendpille ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) zu gross |
| 0x984b | P Widerstand Zuendpille ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) nicht gemessen |
| 0x984c | P Unterbrechung ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) |
| 0x984d | P Spannung ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) n.i.O. |
| 0x984e | P Zuendkapazitaet ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) n.i.O. |
| 0x984f | P Codierung/Konfiguration ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) unstimmig |
| 0x9850 | P Unterbrechung Entladekreis ZK1 (E85: Front-Airbag links Stufe 1/E6x: Aktive Kopfstuetze Links) |
| 0x9851 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) |
| 0x9852 | P Kurzschluss ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) nach Masse |
| 0x9853 | P Kurzschluss ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) nach Plus |
| 0x9854 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) zu klein |
| 0x9855 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) zu gross |
| 0x9856 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) nicht gemessen |
| 0x9857 | P Unterbrechung ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) |
| 0x9858 | P Spannung ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) n.i.O. |
| 0x9859 | P Zuendkapazitaet ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) n.i.O. |
| 0x985a | P Codierung/Konfiguration ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) unstimmig |
| 0x985b | P Unterbrechung Entladekreis ZK2 (E85: Front-Airbag links Stufe 2/E6x: Aktive Kopfstuetze Rechts) |
| 0x985c | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 (Gurtstrammer links) |
| 0x985d | P Kurzschluss ZK3 (Gurtstrammer links) nach Masse |
| 0x985e | P Kurzschluss ZK3 (Gurtstrammer links) nach Plus |
| 0x985f | P Widerstand Zuendpille ZK3 (Gurtstrammer links) zu klein |
| 0x9860 | P Widerstand Zuendpille ZK3 (Gurtstrammer links) zu gross |
| 0x9861 | P Widerstand Zuendpille ZK3 (Gurtstrammer links) nicht gemessen |
| 0x9862 | P Unterbrechung ZK3 (Gurtstrammer links) |
| 0x9863 | P Spannung ZK3 (Gurtstrammer links) n.i.O. |
| 0x9864 | P Zuendkapazitaet ZK3 (Gurtstrammer links) n.i.O. |
| 0x9865 | P Codierung/Konfiguration ZK3 (Gurtstrammer links) unstimmig |
| 0x9866 | P Unterbrechung Entladekreis ZK3 (EGurtstrammer links) |
| 0x9867 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) |
| 0x9868 | P Kurzschluss ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) nach Masse |
| 0x9869 | P Kurzschluss ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) nach Plus |
| 0x986a | P Widerstand Zuendpille ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) zu klein |
| 0x986b | P Widerstand Zuendpille ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) zu gross |
| 0x986c | P Widerstand Zuendpille ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) nicht gemessen |
| 0x986d | P Unterbrechung ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) |
| 0x986e | P Spannung ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) n.i.O. |
| 0x986f | P Zuendkapazitaet ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) n.i.O. |
| 0x9870 | P Codierung/Konfiguration ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) unstimmig |
| 0x9871 | P Unterbrechung Entladekreis ZK4 (E85: Seiten-Airbag links/E60,E61: Thorax-Airbag hinten links/E63,E64: Knie-Airbag vorne links) |
| 0x9872 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) |
| 0x9873 | P Kurzschluss ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) nach Masse |
| 0x9874 | P Kurzschluss ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) nach Plus |
| 0x9875 | P Widerstand Zuendpille ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) zu klein |
| 0x9876 | P Widerstand Zuendpille ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) zu gross |
| 0x9877 | P Widerstand Zuendpille ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) nicht gemessen |
| 0x9878 | P Unterbrechung ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) |
| 0x9879 | P Spannung ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) n.i.O. |
| 0x987a | P Zuendkapazitaet ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) n.i.O. |
| 0x987b | P Codierung/Konfiguration ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) unstimmig |
| 0x987c | P Unterbrechung Entladekreis ZK5 (E85: Reserve/E6x: Gurtstrammer hinten links) |
| 0x987d | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) |
| 0x987e | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) nach Masse |
| 0x987f | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) nach Plus |
| 0x9880 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) zu klein |
| 0x9881 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) zu gross |
| 0x9882 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) nicht gemessen |
| 0x9883 | P Unterbrechung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) |
| 0x9884 | P Spannung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) n.i.O. |
| 0x9885 | P Zuendkapazitaet ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) n.i.O. |
| 0x9886 | P Codierung/Konfiguration ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) unstimmig |
| 0x9887 | P Unterbrechung Entladekreis ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag links) |
| 0x9888 | P Fehler Beschleunigungssensor x: Offset zu gross |
| 0x9889 | P Fehler Beschleunigungssensor x: Selbsttestwert zu gross |
| 0x988a | P Fehler Beschleunigungssensor x: Selbsttestwert zu klein |
| 0x988b | P Fehler Beschleunigungssensor y: Offset zu gross |
| 0x988c | P Fehler Beschleunigungssensor y: Selbsttestwert zu gross |
| 0x988d | P Fehler Beschleunigungssensor y: Selbsttestwert zu klein |
| 0x988e | P Statusfehler Beschleunigungssensor |
| 0x988f | P Hallschalter Kurzschluss |
| 0x9890 | P Hallschalter unplausibler Messwert |
| 0x9891 | P Hallschalter Unterbrechung |
| 0x9892 | P Fehler im Alarmpfad |
| 0x9893 | P Unterbrechung SBE1 |
| 0x9894 | P Kurzschluss SBE1 |
| 0x9895 | P Komunikationsstoerung SBE1 |
| 0x9896 | P Algorithmus-Parameter inkonsistent |
| 0x9897 | P EAM-Parameter inkonsistent |
| 0x9898 | P Zuendversuch erfolgt |
| 0x9899 | P COP-Watchdog fehlerhaft |
| 0x989a | P Reserve |
| 0x989b | P Reserve |
| 0x989c | P Reserve |
| 0x989e | P Interne Versorgungsspannung unplausibel (E85: SIM/E6x: SGM) |
| 0x989d | S Energiesparmode aktiv |
| 0x989f | S Power-On-Reset uP |
| 0x98a0 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x98a1 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x98a2 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x98a3 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x98a4 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x98a5 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x98a6 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x98a7 | S EMV-Fehler im Zuend-IC |
| 0x953a | S OC3 ODS System nicht freigegeben |
| 0x953c | S OC3 Vorlast |
| 0xFFFF | unbekannter Fehlerort |

### ID_A2

| ORT | ORTTEXT |
| --- | --- |
| 0x95a8 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK1 |
| 0x95a9 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x95aa | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK2 |
| 0x95ab | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x95ac | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK3 |
| 0x95ad | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK3 |
| 0x95ae | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK4 |
| 0x95af | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK4 |
| 0x95b0 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK5 |
| 0x95b1 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK5 |
| 0x95b2 | P Kurzschluss oder Unterbrechung Low-Side-Schalter  ZK6 |
| 0x95b3 | P Kurzschluss oder Unterbrechung High-Side-Schalter ZK6 |
| 0x95b4 | P Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x95b5 | P Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x95b6 | P Stack Overflow |
| 0x95b7 | P OC3 Kommunikationsstoerung |
| 0x95b8 | P OC3 Fehler |
| 0x95b9 | P OC3 Datenspeicher |
| 0x95ba | P OC3 nicht freigegeben |
| 0x95bb | P Entladen der Beifahrerairbags fehlerhaft |
| 0x95bc | P OC3 Vorlast |
| 0x98a8 | P Watchdog-Reset uP |
| 0x98a9 | P Clock-Monitor-Reset uP |
| 0x98aa | P Illegal Opcode uP |
| 0x98ab | P Falsche Fahrgestellnummer |
| 0x98ac | P Systemzeitfehler |
| 0x98ad | P Timeout ID 01H (STVL) |
| 0x98ae | P Timeout ID 02H (Reserve) |
| 0x98af | P Timeout ID 03H (STVR) |
| 0x98b0 | P Timeout ID 04H (Reserve) |
| 0x98b1 | P Timeout ID 05H (SBSL_Y) |
| 0x98b2 | P Timeout ID 06H (Reserve) |
| 0x98b3 | P Timeout ID 07H (Reserve/SBSR_Y) |
| 0x98b4 | P Timeout ID 08H (Reserve) |
| 0x98b5 | P Timeout ID 09H (Zentral_Y; E85: SIM/E6x: SFZ) |
| 0x98b6 | P Timeout ID 0AH (E85: SIM/E6x: SGM) |
| 0x98b7 | P Timeout ID 0BH (SBSL_X) |
| 0x98b8 | P Timeout ID 0CH (Reserve/SBSR_X) |
| 0x98b9 | P Timeout ID 0DH (Zentral_X; E85: SIM/E6x: SFZ) |
| 0x98ba | P Timeout ID 11H (SBSL Batterieleitung) |
| 0x98bb | P Timeout ID 12H (Reserve/SBSR Batterieleitung) |
| 0x98bc | P Timeout ID 20H (SBSL Sitzbelegungserkennung) |
| 0x98bd | P Timeout ID 21H (Reserve/SBSR Sitzbelegungserkennung) |
| 0x98be | P Unterbrechung ZK-Line |
| 0x98bf | P Timeout ID 71H (E85: SIM/E6x: SGM Status) |
| 0x98c0 | P Codierdaten Checksummenfehler |
| 0x98c1 | P Codierdaten falsch |
| 0x98c2 | P PDC_3: zu wenig Telegramme |
| 0x98c3 | P PDC_3: Datenfehler in Telegramm |
| 0x98c4 | P PDC_3: Uebertragungsfehler |
| 0x98c5 | P Unplausible Crash-Schwere |
| 0x98c6 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) |
| 0x98c7 | P Kurzschluss ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) nach Masse |
| 0x98c8 | P Kurzschluss ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) nach Plus |
| 0x98c9 | P Widerstand Zuendpille ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) zu klein |
| 0x98ca | P Widerstand Zuendpille ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) zu gross |
| 0x98cb | P Widerstand Zuendpille ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) nicht gemessen |
| 0x98cc | P Unterbrechung ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) |
| 0x98cd | P Spannung ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) n.i.O. |
| 0x98ce | P Zuendkapazitaet ZK1 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 1) n.i.O. |
| 0x98cf | P Codierung/Konfiguration ZK1 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 1) unstimmig |
| 0x98d0 | P Unterbrechung Entladekreis ZK1 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 1) |
| 0x98d1 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 2) |
| 0x98d2 | P Kurzschluss ZK2 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 2) nach Masse |
| 0x98d3 | P Kurzschluss ZK2 (E85: Front-Airbag rechts; E6x: Beifahrer-Airbag Stufe 2) nach Plus |
| 0x98d4 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) zu klein |
| 0x98d5 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) zu gross |
| 0x98d6 | P Widerstand Zuendpille ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) nicht gemessen |
| 0x98d7 | P Unterbrechung ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) |
| 0x98d8 | P Spannung ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) n.i.O. |
| 0x98d9 | P Zuendkapazitaet ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) n.i.O. |
| 0x98da | P Codierung/Konfiguration ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) unstimmig |
| 0x98db | P Unterbrechung Entladekreis ZK2 (E85: Front-Airbag rechts/E6x: Beifahrer-Airbag Stufe 2) |
| 0x98dc | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK3 (Gurtstrammer rechts) |
| 0x98dd | P Kurzschluss ZK3 (Gurtstrammer rechts) nach Masse |
| 0x98de | P Kurzschluss ZK3 (Gurtstrammer rechts) nach Plus |
| 0x98df | P Widerstand Zuendpille ZK3 (Gurtstrammer rechts) zu klein |
| 0x98e0 | P Widerstand Zuendpille ZK3 (Gurtstrammer rechts) zu gross |
| 0x98e1 | P Widerstand Zuendpille ZK3 (Gurtstrammer rechts) nicht gemessen |
| 0x98e2 | P Unterbrechung ZK3 (Gurtstrammer rechts) |
| 0x98e3 | P Spannung ZK3 (Gurtstrammer rechts) n.i.O. |
| 0x98e4 | P Zuendkapazitaet ZK3 (Gurtstrammer rechts) n.i.O. |
| 0x98e5 | P Codierung/Konfiguration ZK3 (Gurtstrammer rechts) unstimmig |
| 0x98e6 | P Unterbrechung Entladekreis ZK3 (Gurtstrammer rechts) |
| 0x98e7 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) |
| 0x98e8 | P Kurzschluss ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) nach Masse |
| 0x98e9 | P Kurzschluss ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) nach Plus |
| 0x98ea | P Widerstand Zuendpille ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) zu klein |
| 0x98eb | P Widerstand Zuendpille ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) zu gross |
| 0x98ec | P Widerstand Zuendpille ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) nicht gemessen |
| 0x98ed | P Unterbrechung ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) |
| 0x98ee | P Spannung ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) n.i.O. |
| 0x98ef | P Zuendkapazitaet ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) n.i.O. |
| 0x98f0 | P Codierung/Konfiguration ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) unstimmig |
| 0x98f1 | P Unterbrechung Entladekreis ZK4 (E85: Seitenairbag rechts/E60,E61: Thorax-Airbag hinten rechts/E63,E64: Knie-Airbag vorne rechts) |
| 0x98f2 | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) |
| 0x98f3 | P Kurzschluss ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) nach Masse |
| 0x98f4 | P Kurzschluss ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) nach Plus |
| 0x98f5 | P Widerstand Zuendpille ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) zu klein |
| 0x98f6 | P Widerstand Zuendpille ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) zu gross |
| 0x98f7 | P Widerstand Zuendpille ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) nicht gemessen |
| 0x98f8 | P Unterbrechung ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) |
| 0x98f9 | P Spannung ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) n.i.O. |
| 0x98fa | P Zuendkapazitaet ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) n.i.O. |
| 0x98fb | P Codierung/Konfiguration ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) unstimmig |
| 0x98fc | P Unterbrechung Entladekreis ZK5 (E85: Sicherheitsbatterieklemme/E6x: Gurtstrammer hinten rechts) |
| 0x98fd | P Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nach Masse) |
| 0x98fe | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nach Masse) |
| 0x98ff | P Kurzschluss ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nach Plus) |
| 0x9900 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) zu klein |
| 0x9901 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) zu gross |
| 0x9902 | P Widerstand Zuendpille ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) nicht gemessen |
| 0x9903 | P Unterbrechung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) |
| 0x9904 | P Spannung ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) n.i.O. |
| 0x9905 | P Zuendkapazitaet ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) n.i.O. |
| 0x9906 | P Codierung/Konfiguration ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) unstimmig |
| 0x9907 | P Unterbrechung Entladekreis ZK6 (E85: Knie-Airbag/E6x: Kopf-Airbag rechts) |
| 0x9908 | P Fehler Beschleunigungssensor x: Offset zu gross |
| 0x9909 | P Fehler Beschleunigungssensor x: Selbsttestwert zu gross |
| 0x990a | P Fehler Beschleunigungssensor x: Selbsttestwert zu klein |
| 0x990b | P Fehler Beschleunigungssensor y: Offset zu gross |
| 0x990c | P Fehler Beschleunigungssensor y: Selbsttestwert zu gross |
| 0x990d | P Fehler Beschleunigungssensor y: Selbsttestwert zu klein |
| 0x990e | P Statusfehler Beschleunigungssensor |
| 0x990f | P Hallschalter Kurzschluss |
| 0x9910 | P Hallschalter unplausibler Messwert |
| 0x9911 | P Hallschalter Unterbrechung |
| 0x9912 | P Fehler im Alarmpfad |
| 0x9913 | P Unterbrechung SBE1 |
| 0x9914 | P Kurzschluss SBE1 |
| 0x9915 | P Kommunikationsstoerung SBE1 |
| 0x9916 | P Algorithmus-Parameter inkonsistent |
| 0x9917 | P EAM-Parameter inkonsistent |
| 0x9918 | P Zuendversuch erfolgt |
| 0x9919 | P COP-Watchdog fehlerhaft |
| 0x991a | P Unterbrechung Batterieleitung |
| 0x991b | P Kurzschluss gegen Masse Batterieleitung (Schirmung) |
| 0x991c | P Kurzschluss gegen Plus Batterieleitung (Schirmung) |
| 0x991d | P Batterieleitung unplausibler Messwert |
| 0x991e | P Interne Versorgungsspannung unplausibel (E85: SIM/E6x: SGM) |
| 0x991f | S Power-On-Reset uP |
| 0x9920 | S Diagnose S/E-Modul (Lichtleistung) |
| 0x9921 | S SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9922 | S SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9923 | S SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9924 | S SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9925 | S SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9926 | S SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9927 | S EMV-Fehler im Zuend-IC |
| 0x9928 | S Energiesparmode aktiv |
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
| 0xA8 | 	Drehmoment 1 	 | 	DDE1; DME1	 |
| 0xA9 | 	Drehmoment 2 (10)	 | 	DDE1; DME1	 |
| 0xAA | 	Drehmoment 3 	 | 	DDE1; DME1	 |
| 0xAC | 	Radmoment Antriebsstrang 2 [5]	 | 	DDE1; DME1	 |
| 0xB4 | 	Radmoment Antriebsstrang 1 [4]	 | 	DDE1; DME1	 |
| 0xB5 | 	Drehmomentanforderung EGS [9]	 | 	EGS_MECH	 |
| 0xB6 | 	Drehmomentanforderung DSC [7]	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0xBA | 	Getriebedaten (21)	 | 	EGS_MECH	 |
| 0xC0 | 	Alive Zentrales Gateway [1]	 | 	SPEG	 |
| 0xC1 | 	Alive Zähler Telefon [3]	 | 	CCC_GW; RAD2	 |
| 0xC4 | 	Lenkradwinkel	 | 	SZL_LWS	 |
| 0xC8 | 	Lenkradwinkel Oben	 | 	SZL_LWS	 |
| 0xCE | 	Radgeschwindigkeit	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0xD7 | 	Alive Zähler Sicherheit [2]	 | 	ACSM	 |
| 0xE2 | 	Status Zentralverriegelung BFT [11]	 | 	SPEG	 |
| 0xE6 | 	Status Zentralverriegelung BFTH [11]	 | 	SPEG	 |
| 0xEA | 	Status Zentralverriegelung FAT [11]	 | 	SPEG	 |
| 0xEE | 	Status Zentralverriegelung FATH [11]	 | 	SPEG	 |
| 0xF2 | 	Status Zentralverriegelung HK [13]	 | 	SPEG	 |
| 0x102 | Steuerung Fensterheber Mittelkonsole [1]	 | 	IHKA; IHKS; IHS	 |
| 0x130 | Klemmenstatus [19]	 | 	CAS	 |
| 0x135 | Steuerung Crashabschaltung EKP [1]	 | 	ACSM	 |
| 0x172 | Quittierung Anforderung Kombi [1]	 | 	CCC_GW; RAD2	 |
| 0x194 | Bedienung Tempomat/ACC [13]	 | 	SZL_LWS	 |
| 0x195 | Bedienung Taster MSA [1]	 | 	SPEG	 |
| 0x19E | Status DSC	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x1A0 | Geschwindigkeit	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x1A2 | Getriebedaten 2 [6]	 | 	EGS_MECH	 |
| 0x1A6 | Wegstrecke [6]	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x1A6 | Wegstrecke [6]	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x1AA | Effekt ErgoCommander [10]	 | 	CCC_GW	 |
| 0x1B4 | Status Kombi [14]	 | 	Kombi	 |
| 0x1B5 | Wärmestrom/Lastmoment Klima [14]	 | 	IHKA; IHKS; IHS	 |
| 0x1B6 | Wärmestrom Motor [11]	 | 	DDE1; DME1	 |
| 0x1B8 | Bedienung ErgoCommander [6]	 | 	ZBE_LO	 |
| 0x1C2 | Abstandsmeldung PDC [5]	 | 	PDC	 |
| 0x1C3 | Abstandsmeldung 2 PDC [3]	 | 	PDC	 |
| 0x1C6 | Akustikmeldung PDC [5]	 | 	PDC	 |
| 0x1D0 | Motordaten [13]	 | 	DDE1; DME1	 |
| 0x1D2 | Anzeige Getriebedaten [22]	 | 	EGS_MECH	 |
| 0x1D6 | Bedienung Taster Audio/Telefon [12]	 | 	MFL_KBUS; SZL_LWS	 |
| 0x1D8 | Bedienung Klima Luftverteilung FA [13]	 | 	CCC_GW	 |
| 0x1DA | Bedienung Klima Fernwirken [5]	 | 	CAS	 |
| 0x1E0 | Bedienung Klima Luftverteilung BF [7]	 | 	CCC_GW	 |
| 0x1E2 | Bedienung Klima Front [11]	 | 	CCC_GW	 |
| 0x1E7 | Bedienung Sitzheizung/Sitzklima FA [7]	 | 	IHKA; IHKS; IHS	 |
| 0x1E8 | Bedienung Sitzheizung/Sitzklima BF [7]	 | 	IHKA; IHKS; IHS	 |
| 0x1EE | Bedienung Lenkstockstaster [6]	 | 	SZL_LWS	 |
| 0x1F6 | Blinken [6]	 | 	FRMFA	 |
| 0x1FB | Status EPS [1]	 | 	EPS	 |
| 0x1FE | Crash [12]	 | 	ACSM	 |
| 0x200 | Regelgeschwindigkeit Stufentempomat [7]	 | 	DDE1; DME1	 |
| 0x202 | Dimmung [10]	 | 	Kombi	 |
| 0x205 | Akustikanforderung Kombi [3]	 | 	Kombi	 |
| 0x206 | Steuerung Anzeige Shiftlights [1]	 | 	DME1	 |
| 0x21A | Lampenzustand [13]	 | 	FRMFA	 |
| 0x220 | Steuerung Frontscheibenheizung [3]	 | 	IHKA; IHKS; IHS	 |
| 0x222 | Status Frontscheibenheizung [1]	 | 	SPEG	 |
| 0x224 | Bedienung Taster NSW [2]	 | 	IHKA; IHKS; IHS	 |
| 0x226 | Regensensor-Wischergeschwindigkeit [8]	 | 	SPEG	 |
| 0x228 | Bedienung Sonderfunktion [8]	 | 	CCC_GW; CCC_MM; RAD1; RAD2	 |
| 0x22A | Status BFS [10]	 | 	SPEG	 |
| 0x22C | Bedienung Taster NSL [2]	 | 	IHKA; IHKS; IHS	 |
| 0x232 | Status FAS [10]	 | 	SPEG	 |
| 0x23A | Status Funkschlüssel [13]	 | 	CAS	 |
| 0x242 | Status Klima Front [11]	 | 	IHKA; IHKS; IHS	 |
| 0x246 | Status Klima Front Bedienteil [11]	 | 	IHKA; IHKS; IHS	 |
| 0x24A | Status PDC [6]	 | 	PDC	 |
| 0x24B | Status Türsensoren [5]	 | 	FRMFA	 |
| 0x252 | Wischerstatus [8]	 | 	SPEG	 |
| 0x256 | Challenge Passive Access [10]	 | 	CAS	 |
| 0x258 | Status Transmission Passive Access [4]	 | 	PGS	 |
| 0x25C | Bedienung Klima Zusatzprogramme [2]	 | 	CCC_GW	 |
| 0x262 | Blinkerrückstellung [1]	 | 	SZL_LWS	 |
| 0x26E | Steuerung FH/SHD Zentrale (Komfort) [10]	 | 	CAS	 |
| 0x284 | Steuerung Fernstart Sicherheitsfahrzeug [8]	 | 	CAS	 |
| 0x29F | Fernbedienung FondCommander [5]	 | 	CAS	 |
| 0x2A0 | Steuerung Zentralverriegelung [10]	 | 	CAS	 |
| 0x2A2 | Bedienung Klima Standfunktionen [5]	 | 	CCC_GW; RAD2	 |
| 0x2A4 | Bedienung Personalisierung [8]	 | 	Kombi	 |
| 0x2A6 | Bedienung Wischertaster [12]	 | 	SZL_LWS	 |
| 0x2B2 | Raddrücke PT-CAN [7]	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x2B3 | Beschleunigungsdaten [2]	 | 	DSC_TRW	 |
| 0x2B4 | DWA-Alarm [4]	 | 	SPEG	 |
| 0x2B8 | Bedienung Bordcomputer [3]	 | 	CCC_GW; RAD2	 |
| 0x2BA | Stoppuhr [3]	 | 	Kombi	 |
| 0x2C0 | LCD-Leuchtdichte [7]	 | 	Kombi	 |
| 0x2CA | Außentemperatur [9]	 | 	Kombi	 |
| 0x2CE | Steuerung Monitor [4]	 | 	CCC_GW	 |
| 0x2D0 | Status Sensor AUC [4]	 | 	SPEG	 |
| 0x2D5 | Status Heizung Heckscheibe [1]	 | 	SPEG	 |
| 0x2D6 | Status Ventil Klimakompressor [3]	 | 	SPEG	 |
| 0x2E4 | Status Anhänger [8]	 | 	AHM	 |
| 0x2E6 | Status Klima Luftverteilung FA [13]	 | 	IHKA	 |
| 0x2EA | Status Klima Luftverteilung BF [9]	 | 	IHKA	 |
| 0x2EE | Status Klima Zusatzprogramme [2]	 | 	IHKA	 |
| 0x2F0 | Status Klima Standfunktionen [12]	 | 	IHKA; IHKS; IHS	 |
| 0x2F6 | Steuerung Licht [7]	 | 	FRMFA	 |
| 0x2F7 | Einheiten [10]	 | 	Kombi	 |
| 0x2F8 | Uhrzeit/Datum [12]	 | 	Kombi	 |
| 0x2FA | Sitzbelegung Gurtkontakte [14]	 | 	ACSM	 |
| 0x2FC | ZV und Klappenzustand [11]	 | 	CAS	 |
| 0x304 | Status Gang [13]	 | 	EGS_MECH	 |
| 0x308 | Status MSA [2]	 | 	DDE1; DME1	 |
| 0x30C | Status Bremsbelagverschleiß [1]	 | 	SPEG	 |
| 0x310 | Außentemperatur/Relativzeit [10]	 | 	Kombi	 |
| 0x311 | Nachtankmenge [3]	 | 	Kombi	 |
| 0x312 | Service Call Teleservice [2]	 | 	Kombi	 |
| 0x313 | Status Service Call Teleservice [3]	 | 	CCC_GW	 |
| 0x314 | Status Fahrlicht [9]	 | 	SPEG	 |
| 0x315 | Fahrzeugmodus [7]	 | 	SPEG	 |
| 0x316 | Bedienung Taster DSC (4)	 | 	SPEG	 |
| 0x318 | Status Antennen Passive Access [7]	 | 	PGS	 |
| 0x319 | Bedienung Taster RDC [4]	 | 	Kombi	 |
| 0x31C | Status Reifendruck [6]	 | 	RDC	 |
| 0x31D | Status Reifenpannenanzeige [6]	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x328 | Relativzeit [9]	 | 	Kombi	 |
| 0x32E | Status Klima Interne Regelinfo [6]	 | 	IHKA; IHKS; IHS	 |
| 0x330 | Kilometerstand/Reichweite [5]	 | 	Kombi	 |
| 0x331 | Programmierung Stufentempomat [2]	 | 	CCC_GW	 |
| 0x332 | Fahreranzeige Drehzahlbereich [4]	 | 		 |
| 0x336 | Anzeige Checkcontrol-Meldung (Rolle) [3]	 | 	Kombi	 |
| 0x337 | Status Kraftstoffregelung DME [1]	 | 	DME1	 |
| 0x338 | Steuerung Anzeige Checkcontrol-Meldung [7]	 | 	Kombi	 |
| 0x33A | Status Monitor Front [3]	 | 	CID_C	 |
| 0x349 | Rohdaten Füllstand Tank [3]	 | 	SPEG	 |
| 0x34F | Status Kontakt Handbremse [4]	 | 	SPEG	 |
| 0x34F | Status Kontakt Handbremse [4]	 | 	SPEG	 |
| 0x35A | Termin Condition Based Service [2]	 | 	CCC_GW	 |
| 0x35C | Status Bordcomputer [5]	 | 	Kombi	 |
| 0x35E | Daten Bordcomputer (Reisedaten) [5]	 | 	Kombi	 |
| 0x360 | Daten Bordcomputer (Fahrtbeginn) [2]	 | 	Kombi	 |
| 0x362 | Daten Bordcomputer (Durchschnittswerte) [4]	 | 	Kombi	 |
| 0x364 | Daten Bordcomputer (Ankunft) [2]	 | 	Kombi	 |
| 0x366 | Anzeige Kombi/Externe Anzeige [3]	 | 	Kombi	 |
| 0x367 | Steuerung Anzeige Bedarfsorientierter Service (7)	 | 	Kombi	 |
| 0x374 | Radtoleranzabgleich [7]	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x380 | Fahrgestellnummer [5]	 | 	CAS	 |
| 0x381 | Elektronischer Motorölmessstab [10]	 | 	DDE1; DME1	 |
| 0x382 | Elektronischer Motorölmessstab M [1]	 | 	DDE1; DME1	 |
| 0x388 | Fahrzeugtyp [13]	 | 	CAS	 |
| 0x38B | Status Batterie (1)	 | 	DDE1; DME1	 |
| 0x38E | Startdrehzahl [1]	 | 	DDE1; DME1	 |
| 0x394 | RDA Anfrage/Datenablage [5]	 | 	Kombi	 |
| 0x395 | Codierung Powermanagement [2]	 | 	CAS	 |
| 0x398 | Bedienung Fahrwerk [14]	 | 	CCC_GW	 |
| 0x399 | Status M-Drive [2]	 | 	DME1	 |
| 0x39E | Bedienung Uhrzeit/Datum [1]	 | 	CCC_GW; RAD2	 |
| 0x3A3 | Anforderung Remote Services [2]	 | 	CCC_GW; RAD2	 |
| 0x3AC | Nachlaufzeit Klemme 30 fehlergesteuert [2]	 | 	SPEG	 |
| 0x3B0 | Status Gang Rückwärts [2]	 | 	FRMFA	 |
| 0x3B1 | Getriebedaten 3 [2]	 | 	EGS_MECH	 |
| 0x3B4 | Powermanagement Batteriespannung [11]	 | 	DDE1; DME1	 |
| 0x3B5 | Status Wasserventil [6]	 | 	SPEG	 |
| 0x3B6 | Position Fensterheber FAT [6]	 | 	FRMFA	 |
| 0x3B8 | Position Fensterheber BFT [6]	 | 	FRMFA	 |
| 0x3BA | Position SHD [10]	 | 	SHD	 |
| 0x3BD | Status Verbraucherabschaltung [2]	 | 	FRMFA	 |
| 0x3BE | Nachlaufzeit Stromversorgung [5]	 | 	CAS	 |
| 0x3C7 | Zugriff Radio [1]	 | 	RAD1; RAD2	 |
| 0x3C8 | Bedienung Taster Radio [1]	 | 	RAD1; RAD2	 |
| 0x3CF | Quittierung Zugriff Radio Audio-Control-Interface [1]	 | 		 |
| 0x3D4 | Konfiguration Zentralverriegelung CKM [3]	 | 	Kombi	 |
| 0x3D5 | Status Zentralverriegelung CKM [4]	 | 	CAS	 |
| 0x3D6 | Konfiguration DWA CKM [1]	 | 	Kombi	 |
| 0x3D7 | Status DWA CKM [2]	 | 	SPEG	 |
| 0x3D8 | Konfiguration RLS CKM [3]	 | 	Kombi	 |
| 0x3D9 | Status RLS CKM [4]	 | 	SPEG	 |
| 0x3DA | Konfiguration Memorypositionen CKM [1]	 | 	Kombi	 |
| 0x3DC | Konfiguration Licht CKM [3]	 | 	Kombi	 |
| 0x3DD | Status Licht CKM [4]	 | 	FRMFA	 |
| 0x3DE | Konfiguration Klima CKM [5]	 | 	CCC_GW	 |
| 0x3DF | Status Klima CKM [6]	 | 	IHKA	 |
| 0x3EF | OBD Daten Motor (3)	 | 	DDE1; DME1	 |
| 0x3F0 | Konfiguration Licht Erweitert CKM [1]	 | 	Kombi	 |
| 0x480 | Netzwerkmanagement	 | 	SPEG	 |
| 0x481 | Netzwerkmanagement	 | 	ACSM	 |
| 0x492 | Netzwerkmanagement	 | 	DME1; DDE1	 |
| 0x498 | Netzwerkmanagement	 | 	EGS_MECH	 |
| 0x4A0 | Netzwerkmanagement	 | 	RDC	 |
| 0x4A7 | Netzwerkmanagement	 | 	PGS	 |
| 0x4A9 | Netzwerkmanagement	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x4B0 | Netzwerkmanagement	 | 	EPS	 |
| 0x4B7 | Netzwerkmanagement	 | 	AMP_HIFI	 |
| 0x4C0 | Netzwerkmanagement	 | 	CAS	 |
| 0x4C4 | Netzwerkmanagement	 | 	SHD	 |
| 0x4E0 | Netzwerkmanagement	 | 	Kombi	 |
| 0x4E3 | Netzwerkmanagement	 | 	CCC_GW; CCC_MM; RAD1; RAD2	 |
| 0x4E4 | Netzwerkmanagement	 | 	PDC	 |
| 0x4E7 | Netzwerkmanagement	 | 	ZBE_LO	 |
| 0x4F1 | Netzwerkmanagement	 | 	AHM	 |
| 0x4F2 | Netzwerkmanagement	 | 	FRMFA	 |
| 0x4F3 | Netzwerkmanagement	 | 	CID_C	 |
| 0x4F8 | Netzwerkmanagement	 | 	IHKA; IHKS; IHS	 |
| 0x580 | Dienste (24)	 | 	SPEG	 |
| 0x581 | Dienste (24)	 | 	ACSM	 |
| 0x592 | Dienste (24)	 | 	DME1; DDE1	 |
| 0x598 | Dienste (24)	 | 	EGS_MECH	 |
| 0x5A0 | Dienste (24)	 | 	RDC	 |
| 0x5A7 | Dienste (24)	 | 	PGS	 |
| 0x5A9 | Dienste (24)	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x5B0 | Dienste (24)	 | 	EPS	 |
| 0x5B7 | Dienste (24)	 | 	AMP_HIFI	 |
| 0x5C0 | Dienste (24)	 | 	CAS	 |
| 0x5C4 | Dienste (24)	 | 	SHD	 |
| 0x5E0 | Dienste (24)	 | 	Kombi	 |
| 0x5E3 | Dienste (24)	 | 	CCC_GW; CCC_MM; RAD1; RAD2	 |
| 0x5E4 | Dienste (24)	 | 	PDC	 |
| 0x5E7 | Dienste (24)	 | 	ZBE_LO	 |
| 0x5F1 | Dienste (24)	 | 	AHM	 |
| 0x5F2 | Dienste (24)	 | 	FRMFA	 |
| 0x5F3 | Dienste (24)	 | 	CID_C	 |
| 0x5F8 | Dienste (24)	 | 	IHKA; IHKS; IHS	 |
| 0x600 | Diagnosetelegramm	 | 	SPEG	 |
| 0x601 | Diagnosetelegramm	 | 	ACSM	 |
| 0x612 | Diagnosetelegramm	 | 	DME1; DDE1	 |
| 0x618 | Diagnosetelegramm	 | 	EGS_MECH	 |
| 0x620 | Diagnosetelegramm	 | 	RDC	 |
| 0x627 | Diagnosetelegramm	 | 	PGS	 |
| 0x629 | Diagnosetelegramm	 | 	ABS_TRW; ASC_TRW; DSC_TRW	 |
| 0x630 | Diagnosetelegramm	 | 	EPS	 |
| 0x637 | Diagnosetelegramm	 | 	AMP_HIFI	 |
| 0x640 | Diagnosetelegramm	 | 	CAS	 |
| 0x644 | Diagnosetelegramm	 | 	SHD	 |
| 0x660 | Diagnosetelegramm	 | 	Kombi	 |
| 0x663 | Diagnosetelegramm	 | 	CCC_GW; CCC_MM; RAD1; RAD2	 |
| 0x664 | Diagnosetelegramm	 | 	PDC	 |
| 0x667 | Diagnosetelegramm	 | 	ZBE_LO	 |
| 0x671 | Diagnosetelegramm	 | 	AHM	 |
| 0x672 | Diagnosetelegramm	 | 	FRMFA	 |
| 0x673 | Diagnosetelegramm	 | 	CID_C	 |
| 0x678 | Diagnosetelegramm	 | 	IHKA; IHKS; IHS	 |
| 0x67D | Diagnosetelegramm	 | 	FDM	 |
| 0x6F0 | Diagnosetelegramm |  Diagnosetool  |
| 0x6F1 | Diagnosetelegramm |  Diagnosetool  |
| 0x6F2 | Diagnosetelegramm |  Diagnosetool  |
| 0x6F3 | Diagnosetelegramm |  Diagnosetool  |
| 0x7C0 | CAS Programmierung Bandende 1 [3]	 | 	CAS	 |
| 0x7C1 | CAS Programmierung Bandende 2 [3]	 | 	TOOL_BANDENDE_CAS	 |
| 0x7C2 | CAS Applikationsnachricht 1 [3]	 | 	CAS	 |
| 0x7C3 | CAS Applikationsnachricht 2 [3]	 | 	TOOL_BANDENDE_CAS	 |
| 0x??? | unbekannt | unbekanntes Steuergerät   |

### WUP_ID

| WUP_ID | DIAG_ADR | TEL_NAME | SENDER |
| --- | --- | --- | --- |
| 0 | 0x?? | Klemme VA abschalten ODER Error Frame | FRMA ODER Unbekannt |
| 168 | 0x00 | Drehmoment 1 K-CAN [8] | (PT-CAN von DDE/DME über SPEG56) |
| 169 | 0x00 | Drehmoment 2 K-CAN [8] | (PT-CAN von DDE/DME über SPEG56) |
| 170 | 0x00 | Drehmoment 3 K-CAN [8] | (PT-CAN von DDE/DME über SPEG56) |
| 174 | 0x00 | Verzögerungsanforderung EMF K-CAN [2] | (PT-CAN über SPEG56) |
| 190 | 0x01 | Alive Zähler (11) | MRSZ (9) |
| 192 | 0x00 | Alive Zentrales Gateway [1] | SPEG56 (9) |
| 193 | 0x62 | Alive Zähler Telefon [3] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 196 | 0x00 | Lenkradwinkel K-CAN (13) | (PT-CAN über SPEG56) |
| 200 | 0x00 | Lenkradwinkel Oben K-CAN (6) | (PT-CAN über SPEG56) |
| 206 | 0x00 | Radgeschwindigkeit K-CAN [3] | (PT-CAN über SPEG56) |
| 226 | 0x00 | Status Zentralverriegelung BFT [8] | SPEG56 (9) |
| 230 | 0x00 | Status Zentralverriegelung BFTH [9] | SPEG56 (9) |
| 234 | 0x00 | Status Zentralverriegelung FAT [8] | SPEG56 (9) |
| 238 | 0x00 | Status Zentralverriegelung FATH [9] | SPEG56 (9) |
| 242 | 0x00 | Status Zentralverriegelung HK [10] | SPEG56 (9) |
| 246 | 0x00 | Steuerung Außenspiegel (9) | (PT-CAN über SPEG56) |
| 250 | 0x72 | Steuerung Fensterheber FAT [8] | FRMFA (9) |
| 251 | 0x00 | Steuerung Fensterheber BFT [4] | SPEG56 (9) |
| 252 | 0x00 | Steuerung Fensterheber FATH [4] | SPEG56 (9) |
| 253 | 0x00 | Steuerung Fensterheber BFTH [4] | SPEG56 (9) |
| 276 | 0x40 | Challenge/Response CAS->DME [7] | CAS (34) |
| 282 | 0x00 | Challenge/Response DME1->CAS [6] | (von DME/DDE PT-CAN über SPEG56) |
| 304 | 0x40 | Klemmenstatus (15) | CAS (34) |
| 309 | 0x01 | Steuerung Crashabschaltung EKP [1] | MRSZ (9) |
| 370 | 0x62 | Quittierung Anforderung Kombi [1] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 372 | 0x40 | Challenge/Response CAS->DME [6] | CAS [30]  |
| 400 | 0x00 | Anzeige ACC [13] | (PT-CAN über SPEG56) |
| 403 | 0x00 | Anzeige ACC DCC (1) | (PT-CAN über SPEG56) |
| 412 | 0x00 | Challenge/Response DME1->CAS [5]  | (PT-CAN über SPEG56) |
| 414 | 0x00 | Status DSC K-CAN (17) | (PT-CAN über SPEG56) |
| 416 | 0x00 | Geschwindigkeit K-CAN [13] | (PT-CAN über SPEG56) |
| 422 | 0x00 | Wegstrecke [6] | (PT-CAN über SPEG56) |
| 426 | 0x62 | Effekt ErgoCommander (9) | M_ASK (16), CCC_GW (16) |
| 436 | 0x60 | Status Kombi [12] | Kombi (53) |
| 437 | 0x78 | Wärmestrom/Lastmoment Klima (12) | IHKA (34), IHR (8), IHKR (8) |
| 438 | 0x00 | Wärmestrom Motor [10] | (PT-CAN über SPEG56) |
| 440 | 0x67 | Bedienung ErgoCommander (6) | ZBE (21), ZBE_LO (9) |
| 450 | 0x64 | Abstandsmeldung PDC [5] | PDC (26) |
| 451 | 0x64 | Abstandsmeldung 2 PDC [2] | PDC (26) |
| 454 | 0x64 | Akustikmeldung PDC [5] | PDC (26) |
| 464 | 0x00 | Motordaten (12) | (PT-CAN über SPEG56) |
| 466 | 0x00 | Anzeige Getriebedaten (18) | (PT-CAN über SPEG56) |
| 470 | 0x00 | Bedienung Taster Audio/Telefon [9] | (PT-CAN über SPEG56) |
| 472 | 0x62 | Bedienung Klima Luftverteilung FA [10] | M_ASK (16), CCC_GW (16) |
| 474 | 0x40 | Bedienung Klima Fernwirken [4] | CAS (34) |
| 480 | 0x62 | Bedienung Klima Luftverteilung BF [4] | M_ASK (16), CCC_GW (16) |
| 482 | 0x62 | Bedienung Klima Front [8] | M_ASK (16), CCC_GW (16) |
| 483 | 0x56 | Bedienung Taster Innenbeleuchtung [2] | FZD (6) |
| 487 | 0x78 | Bedienung Sitzheizung/Sitzklima FA [4] | IHKA (34), IHR (8), IHKR (8) |
| 488 | 0x78 | Bedienung Sitzheizung/Sitzklima BF [4] | IHKA (34), IHR (8), IHKR (8) |
| 494 | 0x72 | Bedienung Lenkstockstaster [6] | FRMFA (9) |
| 502 | 0x72 | Blinken [6] | FRMFA (9) |
| 504 | 0x56 | Bedienung SHD/MDS [1] | FZD (6) |
| 507 | 0x00 | Status EPS [1] | (PT-CAN über SPEG56) |
| 508 | 0x00 | Status AFS [4] | (PT-CAN über SPEG56) |
| 510 | 0x01 | Crash (10) | MRSZ (9) |
| 512 | 0x00 | Regelgeschwindigkeit Stufentempomat [5] | (PT-CAN über SPEG56) |
| 514 | 0x60 | Dimmung (9) | Kombi (53) |
| 517 | 0x60 | Akustikanforderung Kombi [3] | Kombi (53) |
| 523 | 0x6d | Memoryverstellung [3] | SM_FA (32) |
| 524 | 0x6d | Steuerung Lenksäule [3] | SM_FA (32) |
| 528 | 0x62 | Bedienung HUD [5] | M_ASK (16), CCC_GW (16) |
| 529 | 0x00 | Status HUD [5] | (PT-CAN über SPEG56) |
| 538 | 0x72 | Lampenzustand [8] | FRMFA (9) |
| 550 | 0x56 | Regensensor-Wischergeschwindigkeit [8] | FZD (6) |
| 552 | 0x63 | Bedienung Sonderfunktion (7) | M_ASK (16), RAD1 (9), RAD2 (9) |
| 554 | 0x6e | Status BFS [10] | SM_BF (29), SPEG56 (9) |
| 558 | 0x00 | Status BFSH [7] | (PT-CAN über SPEG56) |
| 562 | 0x6d | Status FAS [10] | SM_FA (32), SPEG56 (9) |
| 566 | 0x00 | Status FASH [7] | (PT-CAN über SPEG56) |
| 570 | 0x40 | Status Funkschlüssel (11) | CAS (34) |
| 578 | 0x78 | Status Klima Front [9] | IHKA (34), IHR (8), IHKR (8) |
| 582 | 0x78 | Status Klima Front Bedienteil [9] | IHKA (34), IHR (8), IHKR (8) |
| 586 | 0x64 | Status PDC [6] | PDC (26) |
| 587 | 0x72 | Status Türsensoren [3] | FRMFA (9) |
| 594 | 0x00 | Wischerstatus [7] | SPEG56 (9) |
| 598 | 0x40 | Challenge Passive Access (9) | CAS (34) |
| 600 | 0x27 | Status Transmission Passive Access [4] | PGS (26) |
| 604 | 0x62 | Bedienung Klima Zusatzprogramme [1] | M_ASK (16), CCC_GW (16) |
| 619 | 0x00 | Bedienung Rollos BF [2] | (PT-CAN über SPEG56) |
| 620 | 0x00 | Bedienung Rollos FA [2] | (PT-CAN über SPEG56) |
| 621 | 0x78 | Bedienung Rollos MK [1] | IHKA (34), IHR (8), IHKR (8) |
| 622 | 0x40 | Steuerung FH/SHD Zentrale (Komfort) [8] | CAS (34) |
| 623 | 0x00 | Bedienung Rollos BFH [2] | (PT-CAN über SPEG56) |
| 624 | 0x00 | Bedienung Rollos FAH [2] | (PT-CAN über SPEG56) |
| 632 | 0x62 | Navigationsgraph [2] | CCC_GW (16) |
| 634 | 0x62 | Synchronisation Navigationsgraph [3] | CCC_GW (16) |
| 638 | 0x24 | Status Verdeck Cabrio [5] | CVM_V (13) |
| 640 | 0x00 | Steuerung Sicherheitsfahrzeug 1 [5] | (PT-CAN über SPEG56) |
| 642 | 0x00 | Steuerung Sicherheitsfahrzeug 2 [5] | (PT-CAN über SPEG56) |
| 644 | 0x40 | Steuerung Fernstart Sicherheitsfahrzeug [8] | CAS (34) |
| 646 | 0x56 | Steuerung Elektrochrom Abblenden [1] | FZD (6) |
| 656 | 0x00 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] | (PT-CAN über SPEG56) |
| 670 | 0x00 | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4] | (PT-CAN über SPEG56) |
| 671 | 0x40 | Fernbedienung FondCommander [4] | CAS (34) |
| 672 | 0x40 | Steuerung Zentralverriegelung [9] | CAS (34) |
| 676 | 0x60 | Bedienung Personalisierung [7] | Kombi (53) |
| 678 | 0x00 | Bedienung Wischertaster [9] | (PT-CAN über SPEG56) |
| 684 | 0x00 | Challenge/Response ELV->CAS [4] | (PT-CAN über SPEG56)  |
| 688 | 0x40 | Challenge/Response CAS -> ELV [5] | CAS [30]  |
| 692 | 0x41 | DWA-Alarm [4] | DWA (23) |
| 694 | 0x41 | Steuerung Hupe DWA [3] | DWA (23) |
| 696 | 0x62 | Bedienung Bordcomputer [3] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 698 | 0x60 | Stoppuhr (2) | Kombi (53) |
| 704 | 0x60 | LCD-Leuchtdichte [7] | Kombi (53) |
| 714 | 0x60 | Außentemperatur [9] | Kombi (53) |
| 718 | 0x62 | Steuerung Monitor [4] | M_ASK (16), CCC_GW (16) |
| 719 | 0x00 | Status Zusatzwasserpumpe [2] | SPEG56 (9) |
| 720 | 0x00 | Status Sensor AUC [4] | SPEG56 (9) |
| 721 | 0x56 | Status Beschlag Scheibe V [5] | FZD (6) |
| 722 | 0x00 | Status Druck Kältekreislauf [5] | SPEG56 (9) |
| 723 | 0x00 | Status Schichtung Fond [5] | SPEG56 (9) |
| 725 | 0x00 | Status Heizung Heckscheibe [1] | SPEG56 (9) |
| 726 | 0x00 | Status Ventil Klimakompressor [2] | SPEG56 (9) |
| 740 | 0x71 | Status Anhänger [7] | AHM (26) |
| 742 | 0x78 | Status Klima Luftverteilung FA [9] | IHKA (34) |
| 746 | 0x78 | Status Klima Luftverteilung BF [5] | IHKA (34) |
| 748 | 0x00 | Status Klima SH/ZH Zusatzwasserpumpe [12] | (PT-CAN über SPEG56) |
| 750 | 0x78 | Status Klima Zusatzprogramme [1] | IHKA (34) |
| 752 | 0x78 | Status Klima Standfunktionen [9] | IHKA (34), IHR (8), IHKR (8) |
| 756 | 0x78 | Steuerung Klima SH/ZH Zusatzwasserpumpe (12) | IHKA (34), IHR (8), IHKR (8) |
| 758 | 0x72 | Steuerung Licht (7) | FRMFA (9) |
| 759 | 0x60 | Einheiten [9] | Kombi (53) |
| 760 | 0x60 | Uhrzeit/Datum (12) | Kombi (53) |
| 762 | 0x00 | Sitzbelegung Gurtkontakte (10) | (PT-CAN über SPEG56) |
| 764 | 0x40 | ZV und Klappenzustand [10] | CAS (34) |
| 772 | 0x00 | Status Gang (12) | (PT-CAN über SPEG56) |
| 785 | 0x60 | Nachtankmenge [3] | Kombi (53) |
| 786 | 0x60 | Service Call Teleservice [2] | Kombi (53) |
| 787 | 0x62 | Status Service Call Teleservice [3] | M_ASK (16), CCC_GW (16) |
| 788 | 0x56 | Status Fahrlicht [6] | FZD (6) |
| 789 | 0x00 | Fahrzeugmodus [5] | (PT-CAN über SPEG56) |
| 791 | 0x78 | Bedienung Taster PDC [1] | IHKA (34), IHR (8), IHKR (8) |
| 792 | 0x27 | Status Antennen Passive Access [6] | PGS (26) |
| 793 | 0x60 | Bedienung Taster RDC [3] | Kombi (53) |
| 794 | 0x78 | Bedienung Taster HDC [1] | IHKA (34), IHR (8), IHKR (8) |
| 796 | 0x00 | Status Reifendruck [5] | (PT-CAN über SPEG56) |
| 797 | 0x00 | Status Reifenpannenanzeige (3) | (PT-CAN über SPEG56) |
| 806 | 0x00 | Status Dämpferprogramm [9] | (PT-CAN über SPEG56) |
| 808 | 0x60 | Relativzeit [9] | Kombi (53) |
| 813 | 0x00 | Anzeige HDC (3) | (PT-CAN über SPEG56) |
| 814 | 0x78 | Status Klima Interne Regelinfo (5) | IHKA (34), IHR (8), IHKR (8) |
| 816 | 0x60 | Kilometerstand/Reichweite [5] | Kombi (53) |
| 817 | 0x62 | Programmierung Stufentempomat [2] | M_ASK (16), CCC_GW (16) |
| 818 | 0x00 | Fahreranzeige Drehzahlbereich [4] | (PT-CAN über SPEG56) |
| 820 | 0x00 | Powermanagement Ladespannung [6] | (PT-CAN über SPEG56) |
| 821 | 0x00 | Status Elektrische Kraftstoffpumpe [2] | (PT-CAN über SPEG56) |
| 822 | 0x60 | Anzeige Checkcontrol-Meldung (Rolle) [3] | Kombi (53) |
| 824 | 0x60 | Steuerung Anzeige Checkcontrol-Meldung [7] | Kombi (53) |
| 826 | 0x73 | Status Monitor Front [3] | CID_C_H (14), CID_C (20), CID_M (14) |
| 828 | 0x00 | Status Monitor Fond 1 [3] | (PT-CAN über SPEG56) |
| 840 | 0x62 | Übereinstimmung Navigationsgraph [2] | CCC_GW (16) |
| 841 | 0x00 | Rohdaten Füllstand Tank (3) | SPEG56 (9) |
| 842 | 0x62 | Navigation GPS 1 [2] | CCC_GW (16) |
| 843 | 0x6d | Status Sitzlehnenverriegelung FA [1] | SM_FA (32) |
| 844 | 0x62 | Navigation GPS 2 [2] | CCC_GW (16) |
| 845 | 0x6e | Status Sitzlehnenverriegelung BF [1] | SM_BF (29) |
| 846 | 0x62 | Navigation System Information [2] | CCC_GW (16) |
| 847 | 0x00 | Status Kontakt Handbremse (3) | SPEG56 (9) |
| 858 | 0x62 | Termin Condition Based Service [2] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 860 | 0x60 | Status Bordcomputer [5] | Kombi (53) |
| 862 | 0x60 | Daten Bordcomputer (Reisedaten) (5) | Kombi (53) |
| 864 | 0x60 | Daten Bordcomputer (Fahrtbeginn) [2] | Kombi (53) |
| 866 | 0x60 | Daten Bordcomputer (Durchschnittswerte) [4] | Kombi (53) |
| 868 | 0x60 | Daten Bordcomputer (Ankunft) [2] | Kombi (53) |
| 870 | 0x60 | Anzeige Kombi/Externe Anzeige [3] | Kombi (53) |
| 871 | 0x60 | Steuerung Anzeige Bedarfsorientierter Service [6] | Kombi (53) |
| 896 | 0x40 | Fahrgestellnummer [5] | CAS (34) |
| 897 | 0x00 | Elektronischer Motorölmessstab (7) | (PT-CAN über SPEG56) |
| 904 | 0x40 | Fahrzeugtyp [11] | CAS (34) |
| 910 | 0x00 | Startdrehzahl [1] | (PT-CAN über SPEG56) |
| 916 | 0x60 | RDA Anfrage/Datenablage [4] | Kombi (53) |
| 917 | 0x40 | Codierung Powermanagement [2] | CAS (34) |
| 920 | 0x62 | Bedienung Fahrwerk (12) | M_ASK (16), CCC_GW (16) |
| 921 | 0x00 | Status M-Drive [1] | (PT-CAN über SPEG56) |
| 924 | 0x63 | EBA Datenanforderung [5] | M_ASK [13], CCC_GW [13]  |
| 926 | 0x63 | Bedienung Uhrzeit/Datum [1] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 944 | 0x72 | Status Gang Rückwärts [1] | FRMFA (9) |
| 947 | 0x00 | Powermanagement Verbrauchersteuerung (5) | (PT-CAN über SPEG56) |
| 948 | 0x00 | Powermanagement Batteriespannung [9] | (PT-CAN über SPEG56) |
| 949 | 0x00 | Status Wasserventil (3) | SPEG56 (9) |
| 950 | 0x72 | Position Fensterheber FAT [5] | FRMFA (9) |
| 951 | 0x00 | Position Fensterheber FATH [4] | SPEG56 (9) |
| 952 | 0x72 | Position Fensterheber BFT [5] | FRMFA (9) |
| 953 | 0x00 | Position Fensterheber BFTH [4] | SPEG56 (9) |
| 954 | 0x56 | Position SHD (7) | MDS (8), FZD (6) |
| 956 | 0x00 | Position Fensterheber Sicherheitsfahrzeug [2] | (PT-CAN über SPEG56) |
| 957 | 0x72 | Status Verbraucherabschaltung [2] | FRMFA (9) |
| 958 | 0x40 | Nachlaufzeit Stromversorgung [3] | CAS (34) |
| 959 | 0x24 | Position Fensterheber Heckscheibe [1] | CVM_V (13) |
| 960 | 0x6d | Konfiguration FAS [3] | SM_FA (32) |
| 961 | 0x6e | Konfiguration BFS [3] | SM_BF (29) |
| 980 | 0x60 | Konfiguration Zentralverriegelung CKM [3] | Kombi (53) |
| 981 | 0x40 | Status Zentralverriegelung CKM [3] | CAS (34) |
| 982 | 0x60 | Konfiguration DWA CKM [1] | Kombi (53) |
| 983 | 0x41 | Status DWA CKM [1] | DWA (23) |
| 984 | 0x62 | Konfiguration RLS CKM (3) | M_ASK (16), CCC_GW (16) |
| 985 | 0x56 | Status RLS CKM (3) | FZD (6) |
| 986 | 0x62 | Konfiguration Memorypositionen CKM [1] | M_ASK (16), CCC_GW (16) |
| 987 | 0x6d | Status Memorypositionen CKM [2] | SM_FA (32) |
| 988 | 0x60 | Konfiguration Licht CKM [3] | Kombi (53) |
| 989 | 0x72 | Status Licht CKM [3] | FRMFA (9) |
| 990 | 0x62 | Konfiguration Klima CKM [5] | M_ASK (16), CCC_GW (16) |
| 991 | 0x78 | Status Klima CKM [5] | IHKA (34) |
| 1001 | 0x?? | Marker 1 [1] | (PT-CAN über SPEG56) |
| 1002 | 0x?? | Marker 2 [3] | Diagnosetool_K_CAN_System (20) |
| 1003 | 0x?? | Marker 3 [1] | (PT-CAN über SPEG56) |
| 1022 | 0x?? | Anforderung CAN_Testtool SI_Bus [3] | Diagnosetool_K_CAN_System (20) |
| 1023 | 0x?? | Übertragung Daten SI_Bus CAN_Testtool [3] | (PT-CAN über SPEG56) |
| 1280 | 0x?? | Datentransfer [1] | (PT-CAN über SPEG56) |
| 1984 | 0x?? | CAS Programmierung Bandende 1 [2] | Tool_Programmierung_Bandende_CAS (10) |
| 1985 | 0x?? | CAS Programmierung Bandende 2 [2] | Tool_Programmierung_Bandende_CAS (10) |
| 1986 | 0x?? | CAS Applikationsnachricht 1 [1] | Tool_Programmierung_Bandende_CAS (10) |
| 1987 | 0x?? | CAS Applikationsnachricht 2 [1] | Tool_Programmierung_Bandende_CAS (10) |
| 0x480 | 0x00 | SPEG56 | Smart Power Electronics Gateway    |
| 0x481 | 0x01 | MRS5 | Airbag Steuergerät    |
| 0x492 | 0x00 | DME_DDE | Motor Elektronik / Diesel Elektronik    |
| 0x496 | 0x00 | AFS | Aktiv Front Steering    |
| 0x499 | 0x00 | VGS | Verteilergetriebe Steuergerät    |
| 0x49C | 0x00 | LDM | Längs Dynamik Management    |
| 0x49D | 0x00 | FFP | Force Feedback Paddle    |
| 0x4A4 | 0x24 | CVM | Cabrio-Verdeck-Modul  |
| 0x4A7 | 0x27 | PGS | Passiv Go Steuergerät  |
| 0x4A9 | 0x00 | DSC | Dynamische Stabilitäts-Control  |
| 0x4B0 | 0x00 | EPS | Elektrische Lenkung   |
| 0x4C0 | 0x40 | CAS | Car Access System   |
| 0x4C1 | 0x41 | DWA | Diebstahlwarnanlage |
| 0x4D6 | 0x56 | FZD | Funktionszentrum Dach   |
| 0x4E0 | 0x60 | KOMBI | Instrumentenkombination   |
| 0x4E1 | 0x?? | FBI | Flexibles Bus-Interface |
| 0x4E2 | 0x62 | RAD2 | MOST/CAN-Gateway (im Radio Stufe 2) |
| 0x4E3 | 0x63 | RAD | Radio |
| 0x4E4 | 0x64 | PDC | Park Distance Control   |
| 0x4E7 | 0x67 | ZBE | Zentrale Bedieneinheit  |
| 0x4ED | 0x6d | SMFA | Sitzmodul Fahrer   |
| 0x4EE | 0x6e | SMBF | Sitzmodul Beifahrer    |
| 0x4F1 | 0x71 | AHM | Anhänger-Modul    |
| 0x4F2 | 0x72 | FRMFA | Fussraum Modul Fahrerseite   |
| 0x4F3 | 0x73 | CID | Central Information Display |
| 0x4F8 | 0x78 | IHKA | Heizungsregelung oder, Klimaregelung oder Klimaautomatik   |
| 0x4FD | 0x7d | FDM | Flexibles Diagnosemodul |
| 0x4C4 | 0x44 | MDS | Multi Drive Schiebehebedach |
| 0x569 | 0x00 | K_CAN | Bus-System für Karosserieumfänge  |
| 0x56A | 0x00 | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich |
| 0x56B | 0x00 | byteflight | Bus-System für Airbag-Steuergeräte   |
| 0x56C | 0x00 | MOST | Bus-System für Audio- und Kommunikationsumfänge    |
| 0x580 | 0x00 | SPEG56 | Smart Power Electronics Gateway    |
| 0x5C0 | 0x40 | CAS | Car Access System   |
| 0x5C1 | 0x41 | DWA | Diebstahlwarnanlage |
| 0x5E0 | 0x60 | KOMBI | Instrumentenkombination   |
| 0x5E3 | 0x63 | RAD | Radio |
| 0x5E4 | 0x64 | PDC | Park Distance Control   |
| 0x5E7 | 0x67 | ZBE | Zentrale Bedieneinheit  |
| 0x5F8 | 0x78 | IHKA | Heizungsregelung oder, Klimaregelung oder Klimaautomatik   |
| 0xffff | 0x00 | PT-Wake | PT-CAN Weckleitung |
| 0x??? | 0xff | unbekannt | unbekanntes Steuergerät   |
