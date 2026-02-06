# fdm_60_k.prg

## General

|  |  |
| --- | --- |
| File | fdm_60_k.prg |
| Type | PRG |
| Jobs | 69 |
| Tables | 283 |
| Origin | BMW VS-42 Dieter Martini |
| Revision | 1.000 |
| Author | BMW VS-42 Dieter Martini |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Flexibles Diagnosemodul für E6x ab 09/05 mit KGM |  |  |
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
| 0x00 | KGM | Karosserie Gatewaymodul (KGM)                       |
| 0x01 | ACSM | Advanced Crash and Safety Management (ACSM) (Airbag Steuergerät)  |
| 0x02 | SZL | Schaltzentrum Lenksäule                                    |
| 0x05 | TMFA | Türmodul Fahrer                                            |
| 0x06 | TMBF | Türmodul Beifahrer                                         |
| 0x09 | SBSL | Satellit B-Säule links                                     |
| 0x0A | SBSR | Satellit B-Säule rechts                                    |
| 0x0E | SFZ | Satellit Fahrzeugzentrum                                   |
| 0x12 | DME_DDE | Motor Elektronik / Diesel Elektronik                       |
| 0x13 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave               |
| 0x16 | AFS | Aktivlenkung                                               |
| 0x17 | EKP | Kraftstoffpumpe                                            |
| 0x18 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe         |
| 0x19 | VTG | Verteilergetriebe                                          |
| 0x1B | VTC | Valvetronic                                                |
| 0x1C | LDM | Längs Dynamik Management                                 |
| 0x1E | VTC2 | Valvetronic 2                                              |
| 0x1F | HDEV | HDEV-Steuergerät                                           |
| 0x20 | RDC | Reifendruck-Control                                        |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                            |
| 0x22 | AHL | Adaptives Kurvenlicht                                      |
| 0x23 | ARS | Dynamic Drive                                              |
| 0x24 | CVM | Cabrioverdeck-Modul                                        |
| 0x25 | RSC_VDA | Redundanter Sensor Cluster VDA Standard                |
| 0x26 | RSE | Rear Seat Entertainment                                    |
| 0x27 | PGS | Passive-Go-Steuergerät                                     |
| 0x29 | DSC | Dynamische Stabilitäts-Control                             |
| 0x2F | HDEV2 | HDEV2-Steuergerät                                        |
| 0x31 | MMC2 | Multimedia Changer                                        |
| 0x35 | CCC | Car Communication Computer                                 |
| 0x36 | TEL | Telefon                                                    |
| 0x37 | AMP | Verstärker                                                 |
| 0x38 | EHC | Höhenstands-Control                                        |
| 0x39 | EDC_K | Dämpfer-Control                                          |
| 0x3A | KHI | Kopfhörer-Interface                                        |
| 0x3B | NAV | Navigation                                                 |
| 0x3C | CDC | CD-Wechsler                                                |
| 0x3D | HUD | Head-Up Display                                            |
| 0x3F | ASK | Audio System Controller                                    |
| 0x40 | CAS | Car Access System                                          |
| 0x41 | DWA | Diebstahlwarnanlage                                        |
| 0x42 | CIM | Chassis Integrations Modul                                 |
| 0x43 | MPM | Mikro-Powermodul                                           |
| 0x44 | SHD | Schiebehebedach                                            |
| 0x45 | RLS | Regen-Fahrlicht-Sensor                                     |
| 0x47 | ANT | Antennentuner                                              |
| 0x4B | VM | Videomodul                                                 |
| 0x50 | DWA | Diebstahlwarnanlage                                        |
| 0x51 | DWA | Diebstahlwarnanlage                                        |
| 0x52 | DWA | Diebstahlwarnanlage                                        |
| 0x53 | IBOC | In Band On Channel - Radio USA                            |
| 0x54 | RAD | Radio                                                      |
| 0x55 | ISPB | Sprachverarbeitungssystem                                     |
| 0x57 | NVE | Night Vision Elektronik (Steuergerät)                      |
| 0x59 | ALBV60F | Aktive Lehnenbreitenverstellung Fahrer                 |
| 0x5A | ALBV60B | Aktive Lehnenbreitenverstellung Beifahrer              |
| 0x5B | DAB | Digital Tuner ECE             |
| 0x5C | BEHO60 | Behördenmodul              |
| 0x5E | GWS_70 | Gangwahlschalter           |
| 0x5F | FLA_65 | Fernlicht Assistent        |
| 0x60 | KOMBI | Instrumentenkombination                                  |
| 0x61 | FBI | Flexibles Bus-Interface                                    |
| 0x62 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer  |
| 0x63 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer  |
| 0x64 | PDC | Park Distance Control                                      |
| 0x65 | SZM | Schaltzentrum Mittelkonsole                                |
| 0x67 | CON | Controller                                                 |
| 0x6B | HKL | Heckklappenlift                                            |
| 0x6D | SMFA | Sitzmodul Fahrer                                          |
| 0x6E | SMBF | Sitzmodul Beifahrer                                       |
| 0x70 | LM | Lichtmodul                                         |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | KBM | Karosserie-Basismodul                                      |
| 0x73 | CID | Central Information Display                                |
| 0x74 | CIDF | Central Information Display hinten                               |
| 0x75 | CIDF2RR | Zentrales Info Display hinten rechts                   |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                           |
| 0x7A | SH | Standheizgerät                                             |
| 0x7D | FDM | Flexibles Diagnosemodul                                    |
| 0x80 | CAS | Car Access System                                          |
| 0x8B | NVC | Night Vision Camera                                        |
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
| 0xC904 | CAN-Low, Physikalischer Fehler |
| 0xC905 | CAN-High, Kurzschluss VB |
| 0xC906 | Ground Shift, zu hoch |
| 0xC907 | Controller K-CAN, Bus Off |
| 0xC908 | Controller PT-CAN, Bus Off |
| 0x93A8 | interner Fehler |
| 0x93A9 | Klemme 30A Anschluss fehlerhaft |
| 0x93AA | Klemme 30B Anschluss fehlerhaft |
| 0x93AB | Relaiskleber MPM-Relais ein |
| 0x93AC | Relaiskleber MPM-Relais aus |
| 0x93AD | MPM kein SVIN |
| 0x93AE | Hallsensor FH-Fahrertuer defekt |
| 0x93AF | Hallsensor FH-Beifahrertuer defekt |
| 0x93B0 | Relais FH-Fahrertuer defekt |
| 0x93B1 | Relais FH-Beifahrertuer defekt |
| 0x93B2 | Spiegelheizung Fahrerseite defekt |
| 0x93B3 | Antrieb Spiegel Fahrerseite defekt |
| 0x93B4 | Antrieb Beiklappen Spiegel Fahrerseite defekt |
| 0x93B5 | Spiegelheizung Beifahrerseite defekt |
| 0x93B6 | Antrieb Spiegel Beifahrerseite defekt |
| 0x93B7 | Antrieb Beiklappen Spiegel Beifahrerseite defekt |
| 0x93B8 | Servotronik: Timeout Klemmentelegramm |
| 0x93B9 | Servotronik: Klemme 15 ungueltig |
| 0x93BA | Servotronik: Motortimeout |
| 0x93BB | Servotronik: Motorstatus ungueltig |
| 0x93BC | Servotronik: DSC Telegrammtimeout |
| 0x93BD | Servotronik: Geschwindigkeit ungueltig |
| 0x93BE | Servotronik: Klemme 30A fehlt |
| 0x93BF | Servotronik: FDC Timeout |
| 0x93C0 | Servotronik: FDC-Modus ungueltig |
| 0x93C1 | Servotronik: Hardware defekt |
| 0x93C2 | Schaltnuss: Kontakt defekt |
| 0x93C3 | Zentralverriegelung: Kurzschluss Leitung ZV_MER |
| 0x93C4 | Zentralverriegelung: Kurzschluss Leitung ZV_MVFRT |
| 0x93C5 | Zentralverriegelung: Kurzschluss Leitung ZV_MVR |
| 0x93C6 | Zentralverriegelung: Kurzschluss Leitung ZV_MZS |
| 0x93C7 | Klemme 30 Anschluss fehlerhaft |
| 0x93E7 | Energiesparmode aktiv |
| 0x943D | Uebertemperatur FH-Fahrertuer |
| 0x943E | Uebertemperatur FH-Beifahrertuer |
| 0x943F | LIN-Kommunikation defekt |
| 0x9440 | Einstiegsleuchte defekt |
| 0x9441 | CAN-Overrun |
| 0x9442 | Schaltnuss defekt |
| 0x9443 | Tuerkontakt defekt |
| 0x9444 | Schaltnuss Timeout |
| 0x9445 | MPM RES SVA |
| 0x9446 | MPM RES KLR |
| 0x9447 | MPM RES WECK |
| 0x9448 | MPM AUS CTR_CBR |
| 0x9449 | MPM AUS KLR |
| 0x944A | MPM AUS WECK |
| 0xFFFF | unbekannter Fehlerort |

### ID_01

| ORT | ORTTEXT |
| --- | --- |
| 0x93A8 | ZK0 / Airbag Fahrer 1.Stufe |
| 0x93A9 | ZK1 / Gurtstrammer Fahrer |
| 0x93AA | ZK2 / Gurtstrammer Beifahrer |
| 0x93AB | ZK3 / Airbag Beifahrer 1.Stufe |
| 0x93AC | ZK4 / Seitenairbag Thorax vorne Fahrerseite |
| 0x93AD | ZK5 / Seitenairbag Thorax vorne Beifahrerseite |
| 0x93AE | ZK6 / Seitenairbag Thorax hinten Fahrerseite |
| 0x93AF | ZK7 / Seitenairbag Thorax hinten Beifahrerseite |
| 0x93B0 | ZK8 / Kopfairbag Fahrerseite |
| 0x93B1 | ZK9 / Kopfairbag Beifahrerseite |
| 0x93B2 | ZK10 / Sicherheitsbatterieklemme |
| 0x93B3 | ZK11 / Airbag Beifahrer 2.Stufe |
| 0x93B4 | ZK12 / Airbag Fahrer 2.Stufe |
| 0x93B5 | ZK13 / Endbeschlagstrammer hinten Fahrerseite |
| 0x93B6 | ZK14 / Endbeschlagstrammer hinten Beifahrerseite |
| 0x93B8 | ZK15 / Knieairbag Fahrer |
| 0x93F7 | ZK16 / Knieairbag Beifahrer |
| 0x93F8 | ZK17 / Endbeschlagstrammer Fahrer |
| 0x93F9 | ZK18 / Kopfstuetze Fahrer |
| 0x93FA | ZK19 / Kopfstuetze Beifahrer |
| 0x93BA | Gurtkontakt Fahrer |
| 0x93BB | Gurtkontakt Beifahrer |
| 0x93BC | Gurtkontakt hinten Fahrerseite |
| 0x93BD | Gurtkontakt hinten Beifahrerseite |
| 0x93BE | Passenger Airbag Off Schalter (POS) |
| 0x93BF | Sitzpositionssensor Fahrer SPSF |
| 0x93C1 | SBE Beifahrer |
| 0x93C2 | SBE Sitzmatte Beifahrer |
| 0x93C3 | OC3 |
| 0x93C4 | OC3 - Datenspeicher voll |
| 0x93C5 | OC3 - System noch nicht freigegeben |
| 0x93D8 | OC3 - System konnte nicht freigegeben werden |
| 0x93C6 | SLV Fahrer |
| 0x93C7 | SLV Beifahrer |
| 0x93C8 | UPFRONT Fahrerseite |
| 0x93D9 | UPFRONT Fahrerseite - falscher Messbereich |
| 0x93DA | UPFRONT Fahrerseite - Sensor Daten unplausibel |
| 0x93C9 | UPFRONT Beifahrerseite |
| 0x93DB | UPFRONT Beifahrerseite - falscher Messbereich |
| 0x93DC | UPFRONT Beifahrerseite -Sensor Daten unplausibel |
| 0x93CA | Satellit B- Saeule X Fahrerseite |
| 0x93DD | Satellit B- Saeule X Fahrerseite - falscher Messbereich |
| 0x93DE | Satellit B- Saeule X Fahrerseite - Sensor Daten unplausibel |
| 0x93CB | Satellit B- Saeule X Beifahrerseite |
| 0x93DF | Satellit B- Saeule X Beifahrerseite - falscher Messbereich |
| 0x93E0 | Satellit B- Saeule X Beifahrerseite - Sensor Daten unplausibel |
| 0x93CC | Satellit B- Saeule Y Fahrerseite |
| 0x93E1 | Satellit B- Saeule Y Fahrerseite - falscher Messbereich |
| 0x93E2 | Satellit B- Saeule Y Fahrerseite - Sensor Daten unplausibel |
| 0x93CD | Satellit B- Saeule Y Beifahrerseite |
| 0x93E3 | Satellit B- Saeule Y Beifahrerseite - falscher Messbereich |
| 0x93E4 | Satellit B- Saeule Y Beifahrerseite - Sensor Daten unplausibel |
| 0x93CE | Satellit Tuere Fahrerseite |
| 0x93E5 | Satellit Tuere Fahrerseite - falscher Messbereich |
| 0x93E6 | Satellit Tuere Fahrerseite - Sensor Daten unplausibel |
| 0x93CF | Satellit Tuere Beifahrerseite |
| 0x93E7 | Satellit Tuere Beifahrerseite - falscher Messbereich |
| 0x93E8 | Satellit Tuere Beifahrerseite - Sensor Daten unplausibel |
| 0x93F1 | Satellit Tuere Beifahrerseite - Drucksensor ausser Messbereich |
| 0x93D0 | Versorgungsspannung - Unterspannung |
| 0x93D1 | Versorgungsspannung - Ueberspannung |
| 0x93D2 | Passenger Airbag Off Leuchte (POL) |
| 0x93EB | TCU-Ausgang_(Schnittstelle Telefon - Notruf) |
| 0x93D3 | CBD -Block - CRC Fehler durch Schreiben Codierdaten |
| 0x93EC | EEPROM Layout passt nicht zur SW-Version |
| 0x93ED | Zentralsteuergeraet - Satelilliten unbekannter Fehler |
| 0x93EE | Satellit Tuere Fahrerseite - Drucksensor ausser Messbereich |
| 0x93D4 | Crashtelegrammspeicher - Mindestens ein Crashtelegramm ist gespeichert |
| 0x93D5 | Crashtelegrammspeicher - Drei Crashtelegramme sind gespeichert |
| 0x93FB | Geschwindigkeit - Geschwindigkeitssignal fehlt |
| 0x93FC | B+ - Leitung |
| 0x93FD | B- - Leitung |
| 0x93FE | Roll over Function - Sensor nicht verbaut |
| 0x93FF | RollOverController |
| 0x9401 | RollOverController - Alive-Zaehler fehlerhaft |
| 0x9402 | RollOverController - Interner Fehler |
| 0x9403 | RollOverController - Ausloesekreis links |
| 0x9404 | RolloverController - Ausloesekreis rechts |
| 0x9405 | RollOverController - Datenspeicher voll |
| 0x9406 | RollOverController - Unterspannung |
| 0x9407 | RollOverController - PDC dauert zu lange |
| 0x9409 | RollOverController - Weiterer PDC im Normalbetrieb |
| 0x9400 | SBE Beifahrer - Fehlverbau SBE - Typ |
| 0x940B | Drehratensensor - AD - Wandler übersteuert |
| 0x940C | Drehratensensor - Sensorelement schwingt nicht |
| 0x940D | LCD Leuchtdichte - Telegramm mit Helligkeitsinfo nicht empfangen |
| 0x93D6 | Zentralsteuergeraet - SG ist nicht verriegelt |
| 0x93D7 | Zentralsteuergeraet - Interner Fehler |
| 0xC944 | Bus Leitungsfehler - Allg. |
| 0x940A | Ueberspannung im PDC |
| 0x9408 | Unterspannung im PDC |
| 0xC947 | Bus Kommunikationsfehler |
| 0xC200 | Interner Beschleunigungsmesser X - Aktiver Selbsttest nicht bestanden |
| 0xC201 | Interner Beschleunigungsmesser X - Offset außerhalb zugelassener Abweichungen |
| 0xC203 | Interner Beschleunigungsmesser Y - Aktiver Selbsttest nicht bestanden |
| 0xC204 | Interner Beschleunigungsmesser Y - Offset außerhalb zugelassener Abweichungen |
| 0xC206 | Interner Low-G Beschleunigungsmesser Y - Aktiver Selbsttest nicht bestanden |
| 0xC207 | Interner Low-G Beschleunigungsmesser Y - Offset außerhalb zugelassener Abweichungen |
| 0xC208 | Interner Low-G Beschleunigungsmesser Y - Plausibilitätsfehler |
| 0xC209 | Interner Low-G Beschleunigungsmesser Z - Aktiver Selbsttest nicht bestanden |
| 0xC20A | Interner Low-G Beschleunigungsmesser Z - Offset außerhalb zugelassener Abweichungen |
| 0xC20B | Interner Low-G Beschleunigungsmesser Z - Plausibilitätsfehler |
| 0xC20C | Gyro - ungueltige Daten |
| 0xC20D | Gyro - Unrealistischer Messwert |
| 0xC20E | Gyro - Offset außerhalb zugelassener Abweichungen |
| 0xC20F | Gyro - Selbsttest nicht bestanden |
| 0xC210 | RSU ASIC 1 - Erhöhte Temperatur im RSU ASIC 1 diagnostisiert |
| 0xC211 | RSU ASIC 2 - Erhöhte Temperatur im RSU ASIC 2 diagnostisiert |
| 0xC212 | ASIC 3 - Fehlerhafte Funktion der internen High Side Transistoren in ASIC3 |
| 0xC213 | ASIC 1 - Fehlerhafte Funktion der internen Low Side Transistoren in ASIC1 |
| 0xC214 | ASIC 2 - Fehlerhafte Funktion der internen Low Side Transistoren in ASIC2 |
| 0xC215 | ASIC 3 - Fehlerhafte Funktion der internen Low Side Transistoren in ASIC3 |
| 0xC216 | ASIC 1 - Missglücktes Entriegeln / Verriegeln des Firing ASIC 1 |
| 0xC217 | ASIC 2 - Missglücktes Entriegeln / Verriegeln des Firing ASIC 2 |
| 0xC218 | ASIC 3 - Missglücktes Entriegeln / Verriegeln des Firing ASIC 3 |
| 0xC219 | ASIC 1 - Messresultat des Referenzstroms, ASIC 1, außerhalb zugelassener Abweichungen |
| 0xC21A | ASIC 2 - Messresultat des Referenzstroms, ASIC 2, außerhalb zugelassener Abweichungen |
| 0xC21B | ASIC 3 - Messresultat des Referenzstroms, ASIC 3, außerhalb zugelassener Abweichungen |
| 0xC21C | EEPROM - Inkorrekte Kontrollsumme |
| 0xC21D | EEPROM - Missglückte Datenablage im EEPROM |
| 0xC21E | Energiereserve - Kapazitaetsmesswert der Energiereserve ermittelt im Startup außerhalb zugelassener Abweichungen |
| 0xC21F | Energiereserve - Kapazitaetsmesswert der Energiereserve ermittelt in der zyklischen Pruefung außerhalb zugelassener Abweichungen |
| 0xC220 | Energiereserve - Spannungswert der Energiereserve unterhalb des unteren Schwellwerts |
| 0xC221 | Power supply - Diode zwischen der Spannungsversorgung und der Energiereserve defekt |
| 0xC222 | Arming- Test des Arming-Signals missglueckt |
| 0xC223 | ASIC 1 - Fehlerhafte Funktion der internen high Side Transistoren in ASIC1 |
| 0xC224 | ASIC 2 - Fehlerhafte Funktion der internen High Side Transistoren in ASIC2 |
| 0xC225 | External HSS - Fehlerhafte Funktion der externen High Side Transistoren |
| 0xC226 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - High-G X- Sensor |
| 0xC227 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - High-G Y- Sensor |
| 0xC228 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - Low-G Y- Sensor |
| 0xC229 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - Low-G Z- Sensor |
| 0xC22A | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert: Aktiver Selbsttest nicht bestanden - interner High-G Sensor |
| 0xC22B | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert: Aktiver Selbsttest nicht bestanden - interner Low-G Sensor |
| 0xC22C | RAM - Test Datenablage im RAM missglueckt |
| 0xC22D | ROM - Inkorrekte Kontrollsumme - ROM |
| 0xC22E | Watchdog - Aktiver Watchdogtest missglückt |
| 0xC22F | MCU - inkorrekte Reihenfolge im Programmablauf |
| 0xC230 | ADC - Timeout bei ADC - Umwandlung |
| 0xC231 | ADC - Referenzfehler bei ADC - Umwandlung |
| 0xc232 | Algo - Zündentscheidung mit Zeitverzögerung durch Arming nicht bestätigt |
| 0xC235 | RSU ASIC 0 Fehler |
| 0xC236 | RSU ASIC 1 Fehler |
| 0xC237 | Aux - Software Version des Hilfscontrollers inkompatibel |
| 0xC238 | Gyro - ADC Überlauf |
| 0xC239 | Gyro - Exc Fehler |
| 0xC23A | Gyro - Arithmetischer Übelauf Drehratensensor |
| 0xC23B | Gyro - OTP Paritätsfehler Drehratensensor |
| 0xC23C | Gyro - Spannung des Drehratensensors ausserhalb des zulässigem Bereichs |
| 0xC23D | EEPROM - Checksummen-Fehler im Bereich der AES Konfigurationsdaten |
| 0xC23E | EEPROM - Checksummen-Fehler direkt nach dem Flashen |
| 0xC23F | Aux MCU - Fehler im Programmablauf im Hilfs-Prozessor |
| 0xC240 | Arming - Zündentscheidung lag vor, aber keine Bestätigung durch Arming |
| 0xC241 | Aux MCU - Hauptkontroller Kommunikationsfehler bzw. Synchronisierungsfehler |
| 0xC242 | Fehler im Control ASIC |
| 0xC243 | Batterieleitungsdiagnose- ECU interner Fehler |
| 0xC244 | Crashparametersatz nur fuer Testzwecke geeignet |
| 0xC245 | Hilfsprozessor MCU -Fehler auf der RSU SPI Leitung |
| 0xC246 | Watchdog - 5V Reset |
| 0xC247 | Hilfsprozessor MCU - Arming Replica Error |
| 0xFFFF | unbekannter Fehlerort |

### ID_02

| ORT | ORTTEXT |
| --- | --- |
| 0x94C1 | Codierdaten CRC Fehler |
| 0x94EC | Multifunktionslenkrad (MFL) Analogport Links Kurzschluß |
| 0x94ED | Multifunktionslenkrad (MFL)  Analogport Rechts Kurzschluß |
| 0x94EE | Multifunktionslenkrad (MFL)  Schalter Links unplausibel |
| 0x94EF | Multifunktionslenkrad (MFL)  Schalter  Rechts unplausibel |
| 0x94F0 | Lenkradheizung (LHZ)  Heizmatte unterbrochen |
| 0x94F1 | Lenkradheizung (LHZ) Heizmatte Kurzschluß nach Masse |
| 0x94F3 | Lenkradheizung (LHZ) Fehler Regelung |
| 0x94F4 | Lenkradheizung (LHZ) Temperatur-Fühler unterbrochen |
| 0x94F5 | Lenksäulenverstellung (LSV)  Analogport Kurzschluß nach Masse |
| 0x94F6 | Lenksäulenverstellung (LSV)  Analogport Kurzschluß nach Plus |
| 0x94F7 | Lenksäulenverstellung (LSV)  Unplausibel |
| 0x94F8 | Hupe Fehler Hochtöner |
| 0x94F9 | Hupe Fehler Tieftöner |
| 0x9501 | Lenkwinkelsensor: Sensor nicht abgeglichen |
| 0x950B | Energiesparmode aktiv |
| 0x951A | System Unterspannung |
| 0x951B | System Ueberspannung |
| 0x951D | Fahrtrichtungsabblendlichtschalter (FAS) Schalter unplausibel |
| 0x951E | Fahrtrichtungsabblendlichtschalter (FAS) Schalter Hängt |
| 0x951F | Multifunktionslenkrad (MFL) Schalter Links Hängt |
| 0x9520 | Multifunktionslenkrad (MFL)  Schalter Rechts Hängt |
| 0x9521 | Schaltwippen (SMG) Schalter Hängt |
| 0xA848 | Tempomatschalter  (FGR/ACC)  Hängt |
| 0xA849 | Tempomatschalter  (FGR/ACC) Horizontal unplausibel |
| 0xA84A | Tempomatschalter  (FGR/ACC) Vertikal Unplausibel |
| 0xA84B | Tempomatschalter  (ACC) ACC-Rändel / Axial Tippen unplausibel |
| 0xA84C | Tempomatschalter  (FGR/ACC) Analogport Kurzschluß Masse |
| 0xA84D | Tempomatschalter  (FGR/ACC) Analogport Kurzschluß Plus |
| 0xA84E | FGR redundanter Analogport Kurzschluß nach Masse |
| 0xA84F | Tempomatschalter  (FGR/ACC) redundanter Analogport Kurzschluß nach Plus |
| 0xA850 | Scheibenwischerschalter (SWS) Hängt |
| 0xA851 | Scheibenwischerschalter (SWS) unplausibel |
| 0xA852 | Scheibenwischerschalter (SWS) Analogport Kurzschluß nach Masse |
| 0xA853 | Scheibenwischerschalter (SWS)  Analogport Kurzschluß nach Plus |
| 0xA854 | Scheibenwischerschalter (SWS)  Intervall-Rändel unplausibel |
| 0xA855 | Lenkradheizung (LHZ) Schalter hängt |
| 0xA856 | Lenksäulenverstellung (LSV) Schalter hängt |
| 0xA857 | Hupe Schalter Hängt |
| 0xA858 | Codierdatenblock des Synthetischen Lenkwinkel ist inkompatibel zur Variante |
| 0xA859 | Softwareindex des Sub ist inkompatibel |
| 0xA85A | Softwareindex des Eprom ist inkompatibel |
| 0xA85B | Softwareindex des Main ist inkompatibel |
| 0xA85C | PT-Wecken Kurzschluss |
| 0xA85D | Lenkwinkelsensor defekt |
| 0xA85E | Fahrgestellnummer unplausibel |
| 0xC987 | PT-CAN SZL keine Botschaften Bus-Off |
| 0xC98B | F-CAN SZL keine Botschaften Bus-Off |
| 0xC994 | F-CAN SZL Radgeschwindigkeit, Kommunikation mit DSC, Timeout |
| 0xC995 | F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit > 320 km/h |
| 0xC996 | F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit < -320 km/h |
| 0xC998 | F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich < -5% |
| 0xC99A | F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich > 5% |
| 0xC99B | F-CAN SZL Sync, keine Kommunikation mit DSC, Timeout... |
| 0xC99C | FCAN Botschaft: Exchange AFS DSC-Timeout |
| 0xC9A4 | PTCAN Botschaft: Außentemperatur/Relativzeit-Timeout |
| 0xC9A5 | PTCAN Botschaft: Bedienung Sonderfunktion-Timeout |
| 0xC9A6 | PTCAN Botschaft: Kilometerstand Timeout |
| 0xC9A7 | PTCAN Botschaft: Dimmung-Timeout |
| 0xC9A8 | PTCAN Botschaft: Powermanagement Verbrauchersteuerung-Timeout |
| 0xC9A9 | PT-CAN SZL, Klemmenstatus, keine Kommunikation mit CAS, Timeout |
| 0xC9AA | PT-CAN Botschaft: Radtoleranzabgleich-Timeout |
| 0x2711 | Lenkwinkelsensor : Sensorfehler - Synchronisation mit Sub nicht möglich |
| 0x2712 | Lenkwinkelsensor : Sensorfehler - Verbindungstest zur PDA |
| 0x2713 | Lenkwinkelsensor : Sensorfehler - Umgebungshelligkeit zu hoch |
| 0x2714 | Lenkwinkelsensor : Sensorfehler - keine Referenzspur gefunden |
| 0x2715 | Lenkwinkelsensor : Sensorfehler - Referenzspurabstand außerhalb Toleranzband |
| 0x2716 | Lenkwinkelsensor : Sensorfehler - Illegaler Code |
| 0x2717 | Lenkwinkelsensor : Sensorfehler - Winkelsprung zu gross |
| 0x2718 | Lenkwinkelsensor : Sensorfehler - Lenkwinkel-Messbereich |
| 0x2719 | Lenkwinkelsensor: Fehler Winkelverifizierung |
| 0x2734 | EEPROM Defekt (Kein Zugriff möglich) |
| 0x2735 | A/D-Wandler des Main Defekt |
| 0x2736 | ROM des Main Defekt |
| 0x2737 | RAM des Main Defekt |
| 0x2738 | Watchdog Defekt |
| 0x273F | CPU Main defekt |
| 0x2742 | A/D-Wandler Sub defekt |
| 0x2743 | ROM Sub defekt |
| 0x2744 | RAM Sub defekt |
| 0x2745 | CPU Sub defekt |
| 0x274D | Synthetischer  Lenkwinkel Unplausibel |
| 0x274E | PT-Wecken unplausibel |
| 0x274F | Power On Reset |
| 0x2750 | Aufsetzen Geschwindigkeit Max |
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
| 0xFFFF | unbekannter Fehlerort |

### ID_12

| ORT | ORTTEXT |
| --- | --- |
| 0x3E90 | 3E90	Kurbelwellengeber, Signal	 |
| 0x3E91 | 3E91	Kurbelwellengeber, Signal	 |
| 0x3EB0 | 3EB0	Drehzahlberechnung	 |
| 0x3EC0 | 3EC0	Nockenwellengeber, Signal	 |
| 0x3EC1 | 3EC1	Nockenwellengeber, Signal	 |
| 0x3EC7 | 3EC7	Ueberwachung Master/Slave	 |
| 0x3EDC | 3EDC	Variantencodierung	 |
| 0x3EDD | 3EDD	Variantencodierung	 |
| 0x3EE0 | 3EE0	Kuehlmitteltemperatursensor, Signal	 |
| 0x3EE1 | 3EE1	Kuehlmitteltemperatursensor, Signal	 |
| 0x3EE2 | 3EE2	Kuehlmitteltemperatursensor, Signal	 |
| 0x3EE3 | 3EE3	Kuehlmitteltemperatursensor, Signal	 |
| 0x3EEA | 3EEA	Powermanagement Ruhestrom (Layer_PMRUHVERL)	 |
| 0x3EEB | 3EEB	Powermanagement Ruhestrom (Layer_PMRUHVERL)	 |
| 0x3EEC | 3EEC	Powermanagement Ruhestrom (Layer_PMRUHVERL)	 |
| 0x3EED | 3EED	Powermanagement Ruhestrom (Layer_PMRUHVERL)	 |
| 0x3EF3 | 3EF3	Kuehlmitteltemperatursensor, Plausibilitaet	 |
| 0x3EFA | 3EFA	Thermischer Oelniveausensor (Layer_TOENS)	 |
| 0x3EFB | 3EFB	Thermischer Oelniveausensor (Layer_TOENS)	 |
| 0x3EFC | 3EFC	Thermischer Oelniveausensor (Layer_TOENS)	 |
| 0x3EFD | 3EFD	Thermischer Oelniveausensor (Layer_TOENS)	 |
| 0x3F00 | 3F00	Ladedruckfuehler, Signal	 |
| 0x3F01 | 3F01	Ladedruckfuehler, Signal	 |
| 0x3F02 | 3F02	Ladedruckfuehler, Signal	 |
| 0x3F03 | 3F03	Ladedruckfuehler, Signal	 |
| 0x3F0A | 3F0A	CAN Bus C	 |
| 0x3F0B | 3F0B	CAN Bus C	 |
| 0x3F0C | 3F0C	CAN Bus C	 |
| 0x3F0D | 3F0D	CAN Bus C	 |
| 0x3F10 | 3F10	Fahrpedalmodul Potentiometer 1, Signal	 |
| 0x3F11 | 3F11	Fahrpedalmodul Potentiometer 1, Signal	 |
| 0x3F13 | 3F13	Fahrpedalmodul Potentiometer 1, Signal	 |
| 0x3F1A | 3F1A	Layer_MANHYDR	 |
| 0x3F1B | 3F1B	Layer_MANHYDR	 |
| 0x3F1C | 3F1C	Layer_MANHYDR	 |
| 0x3F1D | 3F1D	Layer_MANHYDR	 |
| 0x3F20 | 3F20	Fahrpedalmodul Potentiometer 2, Signal	 |
| 0x3F21 | 3F21	Fahrpedalmodul Potentiometer 2, Signal	 |
| 0x3F23 | 3F23	Fahrpedalmodul Potentiometer 2, Signal	 |
| 0x3F25 | 3F25	Ladeluftschlauch-Ueberwachung	 |
| 0x3F2A | 3F2A	Layer_MANLUFT	 |
| 0x3F2B | 3F2B	Layer_MANLUFT	 |
| 0x3F2C | 3F2C	Layer_MANLUFT	 |
| 0x3F2D | 3F2D	Layer_MANLUFT	 |
| 0x3F30 | 3F30	Raildrucksensor, Signal	 |
| 0x3F31 | 3F31	Raildrucksensor, Signal	 |
| 0x3F35 | 3F35	Ladeluftschlauch-Ueberwachung im Leerlauf	 |
| 0x3F40 | 3F40	Raildrucksensor Offset-Test	 |
| 0x3F41 | 3F41	Raildrucksensor Offset-Test	 |
| 0x3F50 | 3F50	Fahrgeschwindigkeitssignal	 |
| 0x3F51 | 3F51	Fahrgeschwindigkeitssignal	 |
| 0x3F52 | 3F52	Fahrgeschwindigkeitssignal	 |
| 0x3F53 | 3F53	Fahrgeschwindigkeitssignal	 |
| 0x3F57 | 3F57	Ladedrucksteller	 |
| 0x3F62 | 3F62	Fahrgeschwindigkeitssignal ueber CAN	 |
| 0x3F70 | 3F70	Ansauglufttemperatursensor, Signal	 |
| 0x3F71 | 3F71	Ansauglufttemperatursensor, Signal	 |
| 0x3F72 | 3F72	Ansauglufttemperatursensor, Signal	 |
| 0x3F77 | 3F77	Ladedrucksteller, Ansteuerung	 |
| 0x3F80 | 3F80	Umgebungstemperatursensor, Signal	 |
| 0x3F81 | 3F81	Umgebungstemperatursensor, Signal	 |
| 0x3F82 | 3F82	Umgebungstemperatursensor, Signal	 |
| 0x3F90 | 3F90	Oeldrucksensor, Signal	 |
| 0x3F91 | 3F91	Oeldrucksensor, Signal	 |
| 0x3F97 | 3F97	Ladedrucksteller, Versorgungsspannung	 |
| 0x3FA0 | 3FA0	Oeltemperatursensor	 |
| 0x3FA1 | 3FA1	Oeltemperatursensor	 |
| 0x3FA2 | 3FA2	Oeltemperatursensor	 |
| 0x3FA3 | 3FA3	Oeltemperatursensor	 |
| 0x3FC0 | 3FC0	Luftmassenmesser	 |
| 0x3FD0 | 3FD0	Luftmassenmesser	 |
| 0x3FE0 | 3FE0	Luftmassenmesser	 |
| 0x3FE1 | 3FE1	Luftmassenmesser	 |
| 0x3FF0 | 3FF0	Luftmassenmesser	 |
| 0x3FF1 | 3FF1	Luftmassenmesser	 |
| 0x4000 | 4000	Kraftstofftemperaturfuehler, Signal	 |
| 0x4001 | 4001	Kraftstofftemperaturfuehler, Signal	 |
| 0x4010 | 4010	Abgasgegendrucksensor vor Partikelfilter, Signal	 |
| 0x4011 | 4011	Abgasgegendrucksensor vor Partikelfilter, Signal	 |
| 0x4020 | 4020	Abgastemperatursensor vor Partikelfilter, Signal	 |
| 0x4021 | 4021	Abgastemperatursensor vor Partikelfilter, Signal	 |
| 0x4030 | 4030	Abgastemperatursensor vor Katalysator, Signal	 |
| 0x4031 | 4031	Abgastemperatursensor vor Katalysator, Signal	 |
| 0x4032 | 4032	Abgastemperatursensor vor Katalysator, Signal	 |
| 0x4060 | 4060	Umgebungsdrucksensor (im Steuergeraet verbaut), Signal	 |
| 0x4061 | 4061	Umgebungsdrucksensor (im Steuergeraet verbaut), Signal	 |
| 0x4062 | 4062	Umgebungsdrucksensor (im Steuergeraet verbaut), Signal	 |
| 0x4063 | 4063	Umgebungsdrucksensor (im Steuergeraet verbaut), Signal	 |
| 0x4072 | 4072	Kupplungsschalter, Signal	 |
| 0x4073 | 4073	Kupplungsschalter, Signal	 |
| 0x4082 | 4082	Bremslicht-/Bremstestschalter, Signale	 |
| 0x4083 | 4083	Bremslicht-/Bremstestschalter, Signale	 |
| 0x4093 | 4093	Info - Sicherheitsfall	 |
| 0x40A0 | 40A0	Generatorlastsignal	 |
| 0x40A1 | 40A1	Generatorlastsignal	 |
| 0x40B0 | 40B0	Fault path 1 for air condition pressure (nv)	 |
| 0x40B1 | 40B1	Fault path 1 for air condition pressure (nv)	 |
| 0x40B2 | 40B2	Fault path 1 for air condition pressure (nv)	 |
| 0x40B3 | 40B3	Fault path 1 for air condition pressure (nv)	 |
| 0x40C0 | 40C0	Fault path 2 for air condition pressure (nv)	 |
| 0x40C1 | 40C1	Fault path 2 for air condition pressure (nv)	 |
| 0x40D0 | 40D0	Klimadrucksensor, Signal	 |
| 0x40D1 | 40D1	Klimadrucksensor, Signal	 |
| 0x40E0 | 40E0	Generator	 |
| 0x410C | 410C	Drallklappensteller	 |
| 0x4112 | 4112	Fault path of air condition power stage (nv)	 |
| 0x4113 | 4113	Fault path of air condition power stage (nv)	 |
| 0x411A | 411A	Injektor Zylinder 1, Adaption Ansteuerspannung	 |
| 0x411B | 411B	Injektor Zylinder 1, Adaption Ansteuerspannung	 |
| 0x4120 | 4120	DDE-Hauptrelais	 |
| 0x4121 | 4121	DDE-Hauptrelais	 |
| 0x412A | 412A	Injektor Zylinder 2, Adaption Ansteuerspannung	 |
| 0x412B | 412B	Injektor Zylinder 2, Adaption Ansteuerspannung	 |
| 0x4130 | 4130	Drallklappensteller, Ansteuerung	 |
| 0x413A | 413A	Injektor Zylinder 3, Adaption Ansteuerspannung	 |
| 0x413B | 413B	Injektor Zylinder 3, Adaption Ansteuerspannung	 |
| 0x4141 | 4141	Drallklappensteller, Ansteuerung	 |
| 0x414A | 414A	Injektor Zylinder 4, Adaption Ansteuerspannung	 |
| 0x414B | 414B	Injektor Zylinder 4, Adaption Ansteuerspannung	 |
| 0x4152 | 4152	Drallklappensteller, Ansteuerung	 |
| 0x4153 | 4153	Drallklappensteller, Ansteuerung	 |
| 0x4155 | 4155	Abgasklappensteller, Ansteuerung	 |
| 0x4156 | 4156	Abgasklappensteller, Ansteuerung	 |
| 0x4157 | 4157	Abgasklappensteller, Ansteuerung	 |
| 0x4158 | 4158	Abgasklappensteller, Ansteuerung	 |
| 0x415A | 415A	Injektor Zylinder 5, Adaption Ansteuerspannung	 |
| 0x415B | 415B	Injektor Zylinder 5, Adaption Ansteuerspannung	 |
| 0x4160 | 4160	Relais Vorfoerderpumpe, Ansteuerung	 |
| 0x4161 | 4161	Relais Vorfoerderpumpe, Ansteuerung	 |
| 0x4162 | 4162	Relais Vorfoerderpumpe, Ansteuerung	 |
| 0x4163 | 4163	Relais Vorfoerderpumpe, Ansteuerung	 |
| 0x4165 | 4165	Partikelfiltersystem	 |
| 0x4166 | 4166	Partikelfiltersystem	 |
| 0x416A | 416A	Injektor Zylinder 6, Adaption Ansteuerspannung	 |
| 0x416B | 416B	Injektor Zylinder 6, Adaption Ansteuerspannung	 |
| 0x4175 | 4175	Abgastemperatursensor vor Partikelfilter, Signal	 |
| 0x4176 | 4176	Abgastemperatursensor vor Partikelfilter, Signal	 |
| 0x4178 | 4178	Abgastemperatursensor vor Partikelfilter, Signal	 |
| 0x417A | 417A	Injektor Zylinder 7, Adaption Ansteuerspannung	 |
| 0x417B | 417B	Injektor Zylinder 7, Adaption Ansteuerspannung	 |
| 0x4180 | 4180	Ladedrucksteller, Ansteuerung	 |
| 0x4185 | 4185	Abgastemperatursensor vor Kat, Signal	 |
| 0x4186 | 4186	Abgastemperatursensor vor Kat, Signal	 |
| 0x4188 | 4188	Abgastemperatursensor vor Kat, Signal	 |
| 0x418A | 418A	Injektor Zylinder 8, Adaption Ansteuerspannung	 |
| 0x418B | 418B	Injektor Zylinder 8, Adaption Ansteuerspannung	 |
| 0x4191 | 4191	Ladedrucksteller, Ansteuerung	 |
| 0x4195 | 4195	Drehmomentanforderung Klimaanlage	 |
| 0x419A | 419A	Umgebungsdrucksensor (im Steuergeraet verbaut)	 |
| 0x419B | 419B	Umgebungsdrucksensor (im Steuergeraet verbaut)	 |
| 0x41A2 | 41A2	Ladedrucksteller, Ansteuerung	 |
| 0x41A3 | 41A3	Ladedrucksteller, Ansteuerung	 |
| 0x41A6 | 41A6	Botschaft (CBS_RESET, 0x580)	 |
| 0x41A7 | 41A7	Botschaft (CBS_RESET, 0x580)	 |
| 0x41A8 | 41A8	Botschaft (CBS_RESET, 0x580)	 |
| 0x41AA | 41AA	Ladedruckfuehler	 |
| 0x41AB | 41AB	Ladedruckfuehler	 |
| 0x41B0 | 41B0	Abgasrueckfuehrsteller, Ansteuerung	 |
| 0x41B5 | 41B5	Fault path for Gearbox Temperature	 |
| 0x41BA | 41BA	Abgasgegendrucksensor	 |
| 0x41BB | 41BB	Abgasgegendrucksensor	 |
| 0x41C0 | 41C0	Abluftklappensteller, Ansteuerung	 |
| 0x41C1 | 41C1	Abluftklappensteller, Ansteuerung	 |
| 0x41C2 | 41C2	Abluftklappensteller, Ansteuerung	 |
| 0x41C3 | 41C3	Abluftklappensteller, Ansteuerung	 |
| 0x41CD | 41CD	Plausibilitaet Drucksensoren	 |
| 0x41D1 | 41D1	Abgasrueckfuehrsteller, Ansteuerung	 |
| 0x41D5 | 41D5	Lambdasonde, Signal Nernstspannung	 |
| 0x41D6 | 41D6	Lambdasonde, Signal Nernstspannung	 |
| 0x41D7 | 41D7	Lambdasonde, Signal Nernstspannung	 |
| 0x41D8 | 41D8	Lambdasonde, Signal Nernstspannung	 |
| 0x41DA | 41DA	Motorlager 2, Ansteuerung	 |
| 0x41DB | 41DB	Motorlager 2, Ansteuerung	 |
| 0x41DC | 41DC	Motorlager 2, Ansteuerung	 |
| 0x41DD | 41DD	Motorlager 2, Ansteuerung	 |
| 0x41E2 | 41E2	Abgasrueckfuehrsteller, Ansteuerung	 |
| 0x41E3 | 41E3	Abgasrueckfuehrsteller, Ansteuerung	 |
| 0x41E5 | 41E5	Lambdasonde, Signal Pumpstrom	 |
| 0x41E6 | 41E6	Lambdasonde, Signal Pumpstrom	 |
| 0x41E7 | 41E7	Lambdasonde, Signal Pumpstrom	 |
| 0x41E8 | 41E8	Lambdasonde, Signal Pumpstrom	 |
| 0x41ED | 41ED	Zyklische Authentisierung	 |
| 0x41F0 | 41F0	Elektroluefter, Ansteuerung	 |
| 0x41F1 | 41F1	Elektroluefter, Ansteuerung	 |
| 0x41F2 | 41F2	Elektroluefter, Ansteuerung	 |
| 0x41F3 | 41F3	Elektroluefter, Ansteuerung	 |
| 0x41F5 | 41F5	Lambdasonde, Signal virtuelle Masse	 |
| 0x41F6 | 41F6	Lambdasonde, Signal virtuelle Masse	 |
| 0x41F7 | 41F7	Lambdasonde, Signal virtuelle Masse	 |
| 0x41F8 | 41F8	Lambdasonde, Signal virtuelle Masse	 |
| 0x41FD | 41FD	Zyklische Authentisierung	 |
| 0x4205 | 4205	Lambdasonde, Ansteuerung Heizung	 |
| 0x4206 | 4206	Lambdasonde, Ansteuerung Heizung	 |
| 0x4207 | 4207	Lambdasonde, Ansteuerung Heizung	 |
| 0x4208 | 4208	Lambdasonde, Ansteuerung Heizung	 |
| 0x420B | 420B	Abgasrueckfuehr-Regelung im Regenerationsbetrieb	 |
| 0x4211 | 4211	Gluehkerze Zylinder 1, Ansteuerung	 |
| 0x4212 | 4212	Gluehkerze Zylinder 1, Ansteuerung	 |
| 0x4213 | 4213	Gluehkerze Zylinder 1, Ansteuerung	 |
| 0x4217 | 4217	Lambdasonde	 |
| 0x421B | 421B	Abgasrueckfuehr-Regelung 2 im Regenerationsbetrieb	 |
| 0x4221 | 4221	Gluehkerze Zylinder 2, Ansteuerung	 |
| 0x4222 | 4222	Gluehkerze Zylinder 2, Ansteuerung	 |
| 0x4223 | 4223	Gluehkerze Zylinder 2, Ansteuerung	 |
| 0x4225 | 4225	Lambdasonde	 |
| 0x4226 | 4226	Lambdasonde	 |
| 0x422A | 422A	Abgasrueckfuehr-Regelung im Regenerationsbetrieb	 |
| 0x4231 | 4231	Gluehkerze Zylinder 3, Ansteuerung	 |
| 0x4232 | 4232	Gluehkerze Zylinder 3, Ansteuerung	 |
| 0x4233 | 4233	Gluehkerze Zylinder 3, Ansteuerung	 |
| 0x4235 | 4235	Steuergeraet intern 21	 |
| 0x4236 | 4236	Steuergeraet intern 21	 |
| 0x423A | 423A	Abgasrueckfuehr-Regelung 2 im Regenerationsbetrieb	 |
| 0x4241 | 4241	Gluehkerze Zylinder 4, Ansteuerung	 |
| 0x4242 | 4242	Gluehkerze Zylinder 4, Ansteuerung	 |
| 0x4243 | 4243	Gluehkerze Zylinder 4, Ansteuerung	 |
| 0x4245 | 4245	Steuergeraet intern 22	 |
| 0x4246 | 4246	Steuergeraet intern 22	 |
| 0x424D | 424D	transtion mode RgnNrm	 |
| 0x4251 | 4251	Gluehkerze Zylinder 5, Ansteuerung	 |
| 0x4252 | 4252	Gluehkerze Zylinder 5, Ansteuerung	 |
| 0x4253 | 4253	Gluehkerze Zylinder 5, Ansteuerung	 |
| 0x4258 | 4258	Steuergeraet intern 23	 |
| 0x425D | 425D	Fahrpedalmodul Potentiometer, Plausibilitaet	 |
| 0x4261 | 4261	Gluehkerze Zylinder 6, Ansteuerung	 |
| 0x4262 | 4262	Gluehkerze Zylinder 6, Ansteuerung	 |
| 0x4263 | 4263	Gluehkerze Zylinder 6, Ansteuerung	 |
| 0x4267 | 4267	Lambdasonde, Nebenschlusserkennung	 |
| 0x426E | 426E	BSD - Kommunikation mit Teilnehmer 0 (Intelligenter Batterie Sensor)	 |
| 0x4271 | 4271	Gluehkerze Zylinder 7, Ansteuerung	 |
| 0x4272 | 4272	Gluehkerze Zylinder 7, Ansteuerung	 |
| 0x4273 | 4273	Gluehkerze Zylinder 7, Ansteuerung	 |
| 0x4275 | 4275	Lambdasonde, Heizung	 |
| 0x4276 | 4276	Lambdasonde, Heizung	 |
| 0x427E | 427E	BSD - Kommunikation mit Teilnehmer 1	 |
| 0x4281 | 4281	Gluehkerze Zylinder 8, Ansteuerung	 |
| 0x4282 | 4282	Gluehkerze Zylinder 8, Ansteuerung	 |
| 0x4283 | 4283	Gluehkerze Zylinder 8, Ansteuerung	 |
| 0x428B | 428B	Ladedruckregelung Niederdruckstufe, Regelabweichung	 |
| 0x428E | 428E	BSD - Kommunikation mit Teilnehmer 2	 |
| 0x4293 | 4293	Steuergeraet intern 16	 |
| 0x429A | 429A	Ladedruckregelung Niederdruckstufe, Regelabweichung	 |
| 0x429E | 429E	BSD - Kommunikation mit Teilnehmer 3	 |
| 0x42AE | 42AE	BSD - Kommunikation mit Teilnehmer 4 (Oelqualitaetssensor)	 |
| 0x42B5 | 42B5	Drehzahlueberwachung	 |
| 0x42BE | 42BE	BSD - Kommunikation mit Teilnehmer 5	 |
| 0x42C0 | 42C0	Oeldruck-Kontrollleuchte, Ansteuerung	 |
| 0x42C1 | 42C1	Oeldruck-Kontrollleuchte, Ansteuerung	 |
| 0x42C2 | 42C2	Oeldruck-Kontrollleuchte, Ansteuerung	 |
| 0x42C3 | 42C3	Oeldruck-Kontrollleuchte, Ansteuerung	 |
| 0x42C7 | 42C7	Ueberwachung ZMS Oszillation	 |
| 0x42CA | 42CA	Injektoren Bank 1, Ansteuerung	 |
| 0x42CB | 42CB	Injektoren Bank 1, Ansteuerung	 |
| 0x42CC | 42CC	Injektoren Bank 1, Ansteuerung	 |
| 0x42CD | 42CD	Injektoren Bank 1, Ansteuerung	 |
| 0x42CE | 42CE	BSD - Kommunikation mit Teilnehmer 6 (Generator)	 |
| 0x42D0 | 42D0	Power Stage fault status for MIL (nv)	 |
| 0x42D1 | 42D1	Power Stage fault status for MIL (nv)	 |
| 0x42D2 | 42D2	Power Stage fault status for MIL (nv)	 |
| 0x42D3 | 42D3	Power Stage fault status for MIL (nv)	 |
| 0x42D5 | 42D5	Injektor Zylinder 7, Ansteuerung	 |
| 0x42D6 | 42D6	Injektor Zylinder 7, Ansteuerung	 |
| 0x42D7 | 42D7	Injektor Zylinder 7, Ansteuerung	 |
| 0x42D8 | 42D8	Injektor Zylinder 7, Ansteuerung	 |
| 0x42DA | 42DA	Injektoren Bank 1, Ansteuerung	 |
| 0x42DB | 42DB	Injektoren Bank 1, Ansteuerung	 |
| 0x42DE | 42DE	BSD - Kommunikation mit Teilnehmer 7 (Gluehsteuergeraet)	 |
| 0x42E2 | 42E2	Umschaltung Raildruckregelung PCV	 |
| 0x42E5 | 42E5	Injektor Zylinder 7, Ansteuerung	 |
| 0x42E6 | 42E6	Injektor Zylinder 7, Ansteuerung	 |
| 0x42E7 | 42E7	Injektor Zylinder 7, Ansteuerung	 |
| 0x42E8 | 42E8	Injektor Zylinder 7, Ansteuerung	 |
| 0x42EA | 42EA	Injektoren Bank 2, Ansteuerung	 |
| 0x42EB | 42EB	Injektoren Bank 2, Ansteuerung	 |
| 0x42EC | 42EC	Injektoren Bank 2, Ansteuerung	 |
| 0x42ED | 42ED	Injektoren Bank 2, Ansteuerung	 |
| 0x42F2 | 42F2	Umschaltung Raildruckregelung MeUn	 |
| 0x42F4 | 42F4	Kraftstofffilter	 |
| 0x42F5 | 42F5	Injektor Zylinder 8, Ansteuerung	 |
| 0x42F6 | 42F6	Injektor Zylinder 8, Ansteuerung	 |
| 0x42F7 | 42F7	Injektor Zylinder 8, Ansteuerung	 |
| 0x42F8 | 42F8	Injektor Zylinder 8, Ansteuerung	 |
| 0x42FA | 42FA	Injektoren Bank 2, Ansteuerung	 |
| 0x42FB | 42FB	Injektoren Bank 2, Ansteuerung	 |
| 0x4302 | 4302	Mengenregelventil, Ansteuerung	 |
| 0x4303 | 4303	Mengenregelventil, Ansteuerung	 |
| 0x4305 | 4305	Injektor Zylinder 8, Ansteuerung	 |
| 0x4306 | 4306	Injektor Zylinder 8, Ansteuerung	 |
| 0x4307 | 4307	Injektor Zylinder 8, Ansteuerung	 |
| 0x4308 | 4308	Injektor Zylinder 8, Ansteuerung	 |
| 0x430A | 430A	Injektoren, ChipA (Steuergeraet intern)	 |
| 0x430B | 430B	Injektoren, ChipA (Steuergeraet intern)	 |
| 0x430C | 430C	Injektoren, ChipA (Steuergeraet intern)	 |
| 0x430D | 430D	Injektoren, ChipA (Steuergeraet intern)	 |
| 0x430E | 430E	Botschaft (FAHRZEUGTYP, 0x388)	 |
| 0x430F | 430F	Botschaft (FAHRZEUGTYP, 0x388)	 |
| 0x4310 | 4310	Mengenregelventil, Ansteuerung	 |
| 0x431A | 431A	Injektoren, ChipB (Steuergeraet intern)	 |
| 0x431B | 431B	Injektoren, ChipB (Steuergeraet intern)	 |
| 0x431C | 431C	Injektoren, ChipB (Steuergeraet intern)	 |
| 0x4321 | 4321	Mengenregelventil, Ansteuerung	 |
| 0x4324 | 4324	Kuehlluftklappensystem	 |
| 0x4325 | 4325	Botschaft (DREHMOMENT_ANF_SSG, 0xBD)	 |
| 0x4326 | 4326	Botschaft (DREHMOMENT_ANF_SSG, 0xBD)	 |
| 0x4327 | 4327	Botschaft (DREHMOMENT_ANF_SSG, 0xBD)	 |
| 0x4328 | 4328	Botschaft (DREHMOMENT_ANF_SSG, 0xBD)	 |
| 0x4329 | 4329	Kuehlluftklappensystem	 |
| 0x432F | 432F	Kuehlluftklappensystem	 |
| 0x4332 | 4332	Raildruckregelventil, Ansteuerung	 |
| 0x4333 | 4333	Raildruckregelventil, Ansteuerung	 |
| 0x4334 | 4334	Kuehlluftklappensystem	 |
| 0x4335 | 4335	Kuehlerjalousie (gesteuerte Niere), Ansteuerung	 |
| 0x4336 | 4336	Kuehlerjalousie (gesteuerte Niere), Ansteuerung	 |
| 0x4337 | 4337	Kuehlerjalousie (gesteuerte Niere), Ansteuerung	 |
| 0x4338 | 4338	Kuehlerjalousie (gesteuerte Niere), Ansteuerung	 |
| 0x4340 | 4340	Raildruckregelventil, Ansteuerung	 |
| 0x4344 | 4344	Kuehlluftklappensystem, Ansteuerung	 |
| 0x4349 | 4349	Kuehlluftklappensystem, Ansteuerung	 |
| 0x434E | 434E	Kuehlluftklappensystem, Ansteuerung	 |
| 0x434F | 434F	Kuehlluftklappensystem, Ansteuerung	 |
| 0x4351 | 4351	Raildruckregelventil, Ansteuerung	 |
| 0x4360 | 4360	Stromregelung fuer Raildruckregelventil	 |
| 0x4361 | 4361	Stromregelung fuer Raildruckregelventil	 |
| 0x4362 | 4362	Stromregelung fuer Raildruckregelventil	 |
| 0x437D | 437D	Drehmomentueberwachung DCC	 |
| 0x4382 | 4382	Raildruckregelventil Stellertest	 |
| 0x438A | 438A	Botschaft (ANF_RADMOM_PT, 0xBF)	 |
| 0x438B | 438B	Botschaft (ANF_RADMOM_PT, 0xBF)	 |
| 0x438C | 438C	Botschaft (ANF_RADMOM_PT, 0xBF)	 |
| 0x438D | 438D	Botschaft (ANF_RADMOM_PT, 0xBF)	 |
| 0x4390 | 4390	Ladelufttemperatursensor, Signal	 |
| 0x4391 | 4391	Ladelufttemperatursensor, Signal	 |
| 0x4392 | 4392	Ladelufttemperatursensor, Signal	 |
| 0x4397 | 4397	Mengenregelventil Stellertest	 |
| 0x439C | 439C	Ladedrucksteller, Fenster 4	 |
| 0x43A0 | 43A0	Anlasssperr-Relais, Ansteuerung	 |
| 0x43A1 | 43A1	Anlasssperr-Relais, Ansteuerung	 |
| 0x43A2 | 43A2	Anlasssperr-Relais, Ansteuerung	 |
| 0x43A3 | 43A3	Anlasssperr-Relais, Ansteuerung	 |
| 0x43B0 | 43B0	Power Stage fault status for System lamp (nv)	 |
| 0x43B1 | 43B1	Power Stage fault status for System lamp (nv)	 |
| 0x43B2 | 43B2	Power Stage fault status for System lamp (nv)	 |
| 0x43B3 | 43B3	Power Stage fault status for System lamp (nv)	 |
| 0x43C0 | 43C0	Drosselklappensteller, Ansteuerung	 |
| 0x43D1 | 43D1	Drosselklappensteller, Ansteuerung	 |
| 0x43E2 | 43E2	Drosselklappensteller, Ansteuerung	 |
| 0x43E3 | 43E3	Drosselklappensteller, Ansteuerung	 |
| 0x43EA | 43EA	Mengenmittelwertadaption	 |
| 0x43EB | 43EB	Mengenmittelwertadaption	 |
| 0x43ED | 43ED	Mengenmittelwertadaption	 |
| 0x43F0 | 43F0	Elektrischer Zuheizer, Ansteuerung	 |
| 0x43F1 | 43F1	Elektrischer Zuheizer, Ansteuerung	 |
| 0x43F2 | 43F2	Elektrischer Zuheizer, Ansteuerung	 |
| 0x43F3 | 43F3	Elektrischer Zuheizer, Ansteuerung	 |
| 0x43FD | 43FD	Lambdasonde	 |
| 0x4403 | 4403	Steuergeraet intern 17	 |
| 0x440A | 440A	Lambdasonde	 |
| 0x440B | 440B	Lambdasonde	 |
| 0x4410 | 4410	Injektor Zylinder 1, Ansteuerung	 |
| 0x4411 | 4411	Injektor Zylinder 1, Ansteuerung	 |
| 0x4412 | 4412	Injektor Zylinder 1, Ansteuerung	 |
| 0x4413 | 4413	Injektor Zylinder 1, Ansteuerung	 |
| 0x4414 | 4414	Injektor Zylinder 1, Ladezeit	 |
| 0x4419 | 4419	Injektor Zylinder 1, Ladezeit	 |
| 0x441A | 441A	Injektor Zylinder 1, Ansteuerung	 |
| 0x441B | 441B	Injektor Zylinder 1, Ansteuerung	 |
| 0x441C | 441C	Injektor Zylinder 1, Ansteuerung	 |
| 0x441D | 441D	Injektor Zylinder 1, Ansteuerung	 |
| 0x441E | 441E	Injektor Zylinder 1, Ladezeit	 |
| 0x441F | 441F	Injektor Zylinder 1, Ladezeit	 |
| 0x4420 | 4420	Injektor Zylinder 2, Ansteuerung	 |
| 0x4421 | 4421	Injektor Zylinder 2, Ansteuerung	 |
| 0x4422 | 4422	Injektor Zylinder 2, Ansteuerung	 |
| 0x4423 | 4423	Injektor Zylinder 2, Ansteuerung	 |
| 0x4424 | 4424	Injektor Zylinder 2, Ladezeit	 |
| 0x4429 | 4429	Injektor Zylinder 2, Ladezeit	 |
| 0x442A | 442A	Injektor Zylinder 2, Ansteuerung	 |
| 0x442B | 442B	Injektor Zylinder 2, Ansteuerung	 |
| 0x442C | 442C	Injektor Zylinder 2, Ansteuerung	 |
| 0x442D | 442D	Injektor Zylinder 2, Ansteuerung	 |
| 0x442E | 442E	Injektor Zylinder 2, Ladezeit	 |
| 0x442F | 442F	Injektor Zylinder 2, Ladezeit	 |
| 0x4430 | 4430	Injektor Zylinder 3, Ansteuerung	 |
| 0x4431 | 4431	Injektor Zylinder 3, Ansteuerung	 |
| 0x4432 | 4432	Injektor Zylinder 3, Ansteuerung	 |
| 0x4433 | 4433	Injektor Zylinder 3, Ansteuerung	 |
| 0x4434 | 4434	Injektor Zylinder 3, Ladezeit	 |
| 0x4439 | 4439	Injektor Zylinder 3, Ladezeit	 |
| 0x443A | 443A	Injektor Zylinder 3, Ansteuerung	 |
| 0x443B | 443B	Injektor Zylinder 3, Ansteuerung	 |
| 0x443C | 443C	Injektor Zylinder 3, Ansteuerung	 |
| 0x443D | 443D	Injektor Zylinder 3, Ansteuerung	 |
| 0x443E | 443E	Injektor Zylinder 3, Ladezeit	 |
| 0x443F | 443F	Injektor Zylinder 3, Ladezeit	 |
| 0x4440 | 4440	Injektor Zylinder 4, Ansteuerung	 |
| 0x4441 | 4441	Injektor Zylinder 4, Ansteuerung	 |
| 0x4442 | 4442	Injektor Zylinder 4, Ansteuerung	 |
| 0x4443 | 4443	Injektor Zylinder 4, Ansteuerung	 |
| 0x4444 | 4444	Injektor Zylinder 4, Ladezeit	 |
| 0x4445 | 4445	Botschaft (DREHMOMENT_ANF_AFS, 0xB9)	 |
| 0x4446 | 4446	Botschaft (DREHMOMENT_ANF_AFS, 0xB9)	 |
| 0x4447 | 4447	Botschaft (DREHMOMENT_ANF_AFS, 0xB9)	 |
| 0x4448 | 4448	Botschaft (DREHMOMENT_ANF_AFS, 0xB9)	 |
| 0x4449 | 4449	Injektor Zylinder 4, Ladezeit	 |
| 0x444A | 444A	Injektor Zylinder 4, Ansteuerung	 |
| 0x444B | 444B	Injektor Zylinder 4, Ansteuerung	 |
| 0x444C | 444C	Injektor Zylinder 4, Ansteuerung	 |
| 0x444D | 444D	Injektor Zylinder 4, Ansteuerung	 |
| 0x444E | 444E	Injektor Zylinder 4, Ladezeit	 |
| 0x444F | 444F	Injektor Zylinder 4, Ladezeit	 |
| 0x4450 | 4450	Injektor Zylinder 5, Ansteuerung	 |
| 0x4451 | 4451	Injektor Zylinder 5, Ansteuerung	 |
| 0x4452 | 4452	Injektor Zylinder 5, Ansteuerung	 |
| 0x4453 | 4453	Injektor Zylinder 5, Ansteuerung	 |
| 0x4454 | 4454	Injektor Zylinder 5, Ladezeit	 |
| 0x4457 | 4457	Botschaft (LENKRADWINKEL, 0xC4)	 |
| 0x4458 | 4458	Botschaft (LENKRADWINKEL, 0xC4)	 |
| 0x4459 | 4459	Injektor Zylinder 5, Ladezeit	 |
| 0x445A | 445A	Injektor Zylinder 5, Ansteuerung	 |
| 0x445B | 445B	Injektor Zylinder 5, Ansteuerung	 |
| 0x445C | 445C	Injektor Zylinder 5, Ansteuerung	 |
| 0x445D | 445D	Injektor Zylinder 5, Ansteuerung	 |
| 0x445E | 445E	Injektor Zylinder 5, Ladezeit	 |
| 0x445F | 445F	Injektor Zylinder 5, Ladezeit	 |
| 0x4460 | 4460	Injektor Zylinder 6, Ansteuerung	 |
| 0x4461 | 4461	Injektor Zylinder 6, Ansteuerung	 |
| 0x4462 | 4462	Injektor Zylinder 6, Ansteuerung	 |
| 0x4463 | 4463	Injektor Zylinder 6, Ansteuerung	 |
| 0x4464 | 4464	Injektor Zylinder 6, Ladezeit	 |
| 0x4469 | 4469	Injektor Zylinder 6, Ladezeit	 |
| 0x446A | 446A	Injektor Zylinder 6, Ansteuerung	 |
| 0x446B | 446B	Injektor Zylinder 6, Ansteuerung	 |
| 0x446C | 446C	Injektor Zylinder 6, Ansteuerung	 |
| 0x446D | 446D	Injektor Zylinder 6, Ansteuerung	 |
| 0x446E | 446E	Injektor Zylinder 6, Ladezeit	 |
| 0x446F | 446F	Injektor Zylinder 6, Ladezeit	 |
| 0x4473 | 4473	Steuergeraet intern 18	 |
| 0x4474 | 4474	Injektor Zylinder 7, Ladezeit	 |
| 0x4479 | 4479	Injektor Zylinder 7, Ladezeit	 |
| 0x447A | 447A	Lambdasonde	 |
| 0x447B | 447B	Lambdasonde	 |
| 0x447E | 447E	Injektor Zylinder 7, Ladezeit	 |
| 0x447F | 447F	Injektor Zylinder 7, Ladezeit	 |
| 0x4480 | 4480	Steuergeraet intern 19	 |
| 0x4484 | 4484	Injektor Zylinder 8, Ladezeit	 |
| 0x4489 | 4489	Injektor Zylinder 8, Ladezeit	 |
| 0x448A | 448A	Lambdasonde	 |
| 0x448B | 448B	Lambdasonde	 |
| 0x448E | 448E	Injektor Zylinder 8, Ladezeit	 |
| 0x448F | 448F	Injektor Zylinder 8, Ladezeit	 |
| 0x4491 | 4491	Steuergeraet intern 20	 |
| 0x449A | 449A	Ladedrucksteller	 |
| 0x449B | 449B	Ladedrucksteller	 |
| 0x449D | 449D	Ladedrucksteller	 |
| 0x44A5 | 44A5	Nullmengenadaption Injektor Zylinder 1	 |
| 0x44A6 | 44A6	Nullmengenadaption Injektor Zylinder 1	 |
| 0x44A7 | 44A7	Nullmengenadaption Injektor Zylinder 1	 |
| 0x44A8 | 44A8	Nullmengenadaption Injektor Zylinder 1	 |
| 0x44B5 | 44B5	Nullmengenadaption Injektor Zylinder 2	 |
| 0x44B6 | 44B6	Nullmengenadaption Injektor Zylinder 2	 |
| 0x44B7 | 44B7	Nullmengenadaption Injektor Zylinder 2	 |
| 0x44B8 | 44B8	Nullmengenadaption Injektor Zylinder 2	 |
| 0x44C0 | 44C0	Anzahl gewuenschter Einspritzungen begrenzt	 |
| 0x44C1 | 44C1	Anzahl gewuenschter Einspritzungen begrenzt	 |
| 0x44C2 | 44C2	Anzahl gewuenschter Einspritzungen begrenzt	 |
| 0x44C5 | 44C5	Nullmengenadaption Injektor Zylinder 3	 |
| 0x44C6 | 44C6	Nullmengenadaption Injektor Zylinder 3	 |
| 0x44C7 | 44C7	Nullmengenadaption Injektor Zylinder 3	 |
| 0x44C8 | 44C8	Nullmengenadaption Injektor Zylinder 3	 |
| 0x44CC | 44CC	Ladedrucksteller	 |
| 0x44D5 | 44D5	Nullmengenadaption Injektor Zylinder 4	 |
| 0x44D6 | 44D6	Nullmengenadaption Injektor Zylinder 4	 |
| 0x44D7 | 44D7	Nullmengenadaption Injektor Zylinder 4	 |
| 0x44D8 | 44D8	Nullmengenadaption Injektor Zylinder 4	 |
| 0x44DC | 44DC	Ladedrucksteller	 |
| 0x44E5 | 44E5	Nullmengenadaption Injektor Zylinder 5	 |
| 0x44E6 | 44E6	Nullmengenadaption Injektor Zylinder 5	 |
| 0x44E7 | 44E7	Nullmengenadaption Injektor Zylinder 5	 |
| 0x44E8 | 44E8	Nullmengenadaption Injektor Zylinder 5	 |
| 0x44EC | 44EC	Ladedrucksteller, Ansteuerung	 |
| 0x44F5 | 44F5	Nullmengenadaption Injektor Zylinder 6	 |
| 0x44F6 | 44F6	Nullmengenadaption Injektor Zylinder 6	 |
| 0x44F7 | 44F7	Nullmengenadaption Injektor Zylinder 6	 |
| 0x44F8 | 44F8	Nullmengenadaption Injektor Zylinder 6	 |
| 0x44FC | 44FC	Ladedrucksteller	 |
| 0x4501 | 4501	Abgasrueckfuehr-Regelung, Regelabweichung	 |
| 0x4507 | 4507	Abgasrueckfuehr-Regelung, Regelabweichung	 |
| 0x450A | 450A	Abgastemperatur-Regelung vor Kat, Regelabweichung	 |
| 0x450B | 450B	Abgastemperatur-Regelung vor Kat, Regelabweichung	 |
| 0x4514 | 4514	Injektor Zylinder 1, Spannung	 |
| 0x4519 | 4519	Injektor Zylinder 1, Spannung	 |
| 0x451A | 451A	Abgastemperatur-Regelung vor Partikelfilter, Regelabweichung	 |
| 0x451B | 451B	Abgastemperatur-Regelung vor Partikelfilter, Regelabweichung	 |
| 0x4521 | 4521	Ladedruckregelung, Regelabweichung	 |
| 0x4524 | 4524	Injektor Zylinder 2, Spannung	 |
| 0x4529 | 4529	Injektor Zylinder 2, Spannung	 |
| 0x452A | 452A	Info - Partikelfiltersystem	 |
| 0x4530 | 4530	Ladedruckregelung, Regelabweichung	 |
| 0x4534 | 4534	Injektor Zylinder 3, Spannung	 |
| 0x4539 | 4539	Injektor Zylinder 3, Spannung	 |
| 0x453B | 453B	Power Train CAN Bus	 |
| 0x453C | 453C	Power Train CAN Bus	 |
| 0x453D | 453D	Power Train CAN Bus	 |
| 0x4544 | 4544	Injektor Zylinder 4, Spannung	 |
| 0x4549 | 4549	Injektor Zylinder 4, Spannung	 |
| 0x4554 | 4554	Injektor Zylinder 5, Spannung	 |
| 0x4559 | 4559	Injektor Zylinder 5, Spannung	 |
| 0x455A | 455A	Stromregelung fuer Motorlager, Analogwerterfassung	 |
| 0x455B | 455B	Stromregelung fuer Motorlager, Analogwerterfassung	 |
| 0x4560 | 4560	Raildruck-Plausibilitaet mengengeregelt	 |
| 0x4564 | 4564	Injektor Zylinder 6, Spannung	 |
| 0x4567 | 4567	Botschaft (CODIERUNG_PM, 0x395)	 |
| 0x4568 | 4568	Botschaft (CODIERUNG_PM, 0x395)	 |
| 0x4569 | 4569	Injektor Zylinder 6, Spannung	 |
| 0x456A | 456A	Stromregelung fuer Motorlager 2, Analogwerterfassung	 |
| 0x456B | 456B	Stromregelung fuer Motorlager 2, Analogwerterfassung	 |
| 0x4570 | 4570	Raildruck-Plausibilitaet mengengeregelt	 |
| 0x4574 | 4574	Injektor Zylinder 7, Spannung	 |
| 0x4577 | 4577	Botschaft (CTR_CRASH_SWO_EKP, 0x135)	 |
| 0x4578 | 4578	Botschaft (CTR_CRASH_SWO_EKP, 0x135)	 |
| 0x4579 | 4579	Injektor Zylinder 7, Spannung	 |
| 0x457A | 457A	Abgastemperatur vor Kat, Plausibilitaet	 |
| 0x457D | 457D	Abgastemperatur vor Kat, Plausibilitaet	 |
| 0x4580 | 4580	Raildruck-Plausibilitaet mengengeregelt	 |
| 0x4584 | 4584	Injektor Zylinder 8, Spannung	 |
| 0x4587 | 4587	Kraftstofffilter	 |
| 0x4589 | 4589	Injektor Zylinder 8, Spannung	 |
| 0x458A | 458A	Abgastemperatur vor Kat waehrend Regeneration, Plausibilitaet	 |
| 0x4590 | 4590	Raildruck-Plausibilitaet mengengeregelt	 |
| 0x4597 | 4597	Botschaft (PRGG_CCTR, 0x331)	 |
| 0x4598 | 4598	Botschaft (PRGG_CCTR, 0x331)	 |
| 0x459A | 459A	Abgastemperatur vor Partikelfilter, Plausibilitaet	 |
| 0x459D | 459D	Abgastemperatur vor Partikelfilter, Plausibilitaet	 |
| 0x45A0 | 45A0	Raildruck-Plausibilitaet mengengeregelt	 |
| 0x45AA | 45AA	Abgastemperatur vor Partikelfilter waehrend Regeneration, Plausibilitaet	 |
| 0x45E3 | 45E3	Ueberwachung Master/Slave	 |
| 0x45F2 | 45F2	Ueberwachung Master/Slave	 |
| 0x45F3 | 45F3	Ueberwachung Master/Slave	 |
| 0x45F5 | 45F5	Botschaft (DREHMOMENT_ANF_ACC, 0xB7)	 |
| 0x45F6 | 45F6	Botschaft (DREHMOMENT_ANF_ACC, 0xB7)	 |
| 0x45F7 | 45F7	Botschaft (DREHMOMENT_ANF_ACC, 0xB7)	 |
| 0x45F8 | 45F8	Botschaft (DREHMOMENT_ANF_ACC, 0xB7)	 |
| 0x4600 | 4600	Raildruck-Plausibilitaet druckgeregelt	 |
| 0x4605 | 4605	Partikelfiltersystem	 |
| 0x4610 | 4610	Raildruck-Plausibilitaet druckgeregelt	 |
| 0x4618 | 4618	Umgebungsdrucksensor (im Steuergeraet verbaut)	 |
| 0x4620 | 4620	Raildruck-Plausibilitaet druckgeregelt	 |
| 0x4628 | 4628	Partikelfiltersystem	 |
| 0x4630 | 4630	Raildruck-Plausibilitaet druckgeregelt	 |
| 0x4637 | 4637	Botschaft (ParkConsumer, 0x?)	 |
| 0x4638 | 4638	Botschaft (ParkConsumer, 0x?)	 |
| 0x4640 | 4640	Raildruck-Plausibilitaet druckgeregelt	 |
| 0x4645 | 4645	Abgasrueckfuehrsteller	 |
| 0x4650 | 4650	Raildruck-Plausibilitaet druckgeregelt (nv)	 |
| 0x4656 | 4656	Steuergeraet intern 24	 |
| 0x4660 | 4660	Versorgungsspannung	 |
| 0x4661 | 4661	Versorgungsspannung	 |
| 0x4665 | 4665	Partikelfiltersystem	 |
| 0x4666 | 4666	Partikelfiltersystem	 |
| 0x4667 | 4667	Partikelfiltersystem	 |
| 0x4670 | 4670	Speisespannung 1	 |
| 0x4671 | 4671	Speisespannung 1	 |
| 0x4677 | 4677	Drosselklappensteller	 |
| 0x4680 | 4680	Speisespannung 2	 |
| 0x4681 | 4681	Speisespannung 2	 |
| 0x4687 | 4687	Drosselklappensteller	 |
| 0x4690 | 4690	Speisespannung 3	 |
| 0x4691 | 4691	Speisespannung 3	 |
| 0x4697 | 4697	Drosselklappensteller	 |
| 0x46A7 | 46A7	Drallklappensteller	 |
| 0x46B7 | 46B7	Drallklappensteller	 |
| 0x46C0 | 46C0	Steuergeraet intern 3	 |
| 0x46C1 | 46C1	Steuergeraet intern 3	 |
| 0x46C7 | 46C7	Drallklappensteller	 |
| 0x46D0 | 46D0	Steuergeraet intern 4	 |
| 0x46D1 | 46D1	Steuergeraet intern 4	 |
| 0x46D2 | 46D2	Steuergeraet intern 4	 |
| 0x46D3 | 46D3	Steuergeraet intern 4	 |
| 0x46D5 | 46D5	Verdichter-Bypassklappe, Ansteuerung	 |
| 0x46D6 | 46D6	Verdichter-Bypassklappe, Ansteuerung	 |
| 0x46D7 | 46D7	Verdichter-Bypassklappe, Ansteuerung	 |
| 0x46D8 | 46D8	Verdichter-Bypassklappe, Ansteuerung	 |
| 0x46E5 | 46E5	Wastegate-Ventil, Ansteuerung	 |
| 0x46EA | 46EA	Diagnosemodus Hochdrucktest	 |
| 0x46F6 | 46F6	Wastegate-Ventil, Ansteuerung	 |
| 0x4703 | 4703	Steuergeraet intern 7	 |
| 0x4707 | 4707	Wastegate-Ventil, Ansteuerung	 |
| 0x4708 | 4708	Wastegate-Ventil, Ansteuerung	 |
| 0x4711 | 4711	Steuergeraet intern 8	 |
| 0x4712 | 4712	Steuergeraet intern 8	 |
| 0x4713 | 4713	Steuergeraet intern 8	 |
| 0x471A | 471A	check for critical engine oil mass	 |
| 0x471B | 471B	check for critical engine oil mass	 |
| 0x4723 | 4723	Steuergeraet intern 9	 |
| 0x472B | 472B	check for critical engine oil viscosity	 |
| 0x4730 | 4730	Mengenregelventil Stromregelung	 |
| 0x4731 | 4731	Mengenregelventil Stromregelung	 |
| 0x4732 | 4732	Mengenregelventil Stromregelung	 |
| 0x4735 | 4735	Injektoren Bank 1, Bufferspannungsmessung (Steuergeraet intern)	 |
| 0x4736 | 4736	Injektoren Bank 1, Bufferspannungsmessung (Steuergeraet intern)	 |
| 0x4740 | 4740	Steuergeraet intern 11	 |
| 0x4747 | 4747	Injektoren, Verstaerkerabgleich (Steuergeraet intern)	 |
| 0x4763 | 4763	Steuergeraet intern 13 (nv)	 |
| 0x4765 | 4765	Injektor Zylinder 1, Ansteuerung	 |
| 0x4766 | 4766	Injektor Zylinder 1, Ansteuerung	 |
| 0x4767 | 4767	Injektor Zylinder 1, Ansteuerung	 |
| 0x4768 | 4768	Injektor Zylinder 1, Ansteuerung	 |
| 0x476A | 476A	Injektoren Bank 2, Bufferspannungsmessung (Steuergeraet intern)	 |
| 0x476B | 476B	Injektoren Bank 2, Bufferspannungsmessung (Steuergeraet intern)	 |
| 0x4772 | 4772	Steuergeraet intern 14	 |
| 0x4773 | 4773	Steuergeraet intern 14	 |
| 0x477C | 477C	Injektoren, Ansteuerdauer (Steuergeraet intern)	 |
| 0x4780 | 4780	Steuergeraet intern 15	 |
| 0x4781 | 4781	Steuergeraet intern 15	 |
| 0x4782 | 4782	Steuergeraet intern 15	 |
| 0x4783 | 4783	Steuergeraet intern 15	 |
| 0x4785 | 4785	Injektor Zylinder 2, Ansteuerung	 |
| 0x4786 | 4786	Injektor Zylinder 2, Ansteuerung	 |
| 0x4787 | 4787	Injektor Zylinder 2, Ansteuerung	 |
| 0x4788 | 4788	Injektor Zylinder 2, Ansteuerung	 |
| 0x478C | 478C	Injektoren, Ansteuerdauer (Steuergeraet intern)	 |
| 0x4792 | 4792	Ueberwachung Master/Slave	 |
| 0x4793 | 4793	Ueberwachung Master/Slave	 |
| 0x4795 | 4795	Injektor Zylinder 3, Ansteuerung	 |
| 0x4796 | 4796	Injektor Zylinder 3, Ansteuerung	 |
| 0x4797 | 4797	Injektor Zylinder 3, Ansteuerung	 |
| 0x4798 | 4798	Injektor Zylinder 3, Ansteuerung	 |
| 0x47A5 | 47A5	Injektor Zylinder 4, Ansteuerung	 |
| 0x47A6 | 47A6	Injektor Zylinder 4, Ansteuerung	 |
| 0x47A7 | 47A7	Injektor Zylinder 4, Ansteuerung	 |
| 0x47A8 | 47A8	Injektor Zylinder 4, Ansteuerung	 |
| 0x47B5 | 47B5	Injektor Zylinder 5, Ansteuerung	 |
| 0x47B6 | 47B6	Injektor Zylinder 5, Ansteuerung	 |
| 0x47B7 | 47B7	Injektor Zylinder 5, Ansteuerung	 |
| 0x47B8 | 47B8	Injektor Zylinder 5, Ansteuerung	 |
| 0x47C5 | 47C5	Injektor Zylinder 6, Ansteuerung	 |
| 0x47C6 | 47C6	Injektor Zylinder 6, Ansteuerung	 |
| 0x47C7 | 47C7	Injektor Zylinder 6, Ansteuerung	 |
| 0x47C8 | 47C8	Injektor Zylinder 6, Ansteuerung	 |
| 0x47D5 | 47D5	Injektor Zylinder 7, Ansteuerung	 |
| 0x47D6 | 47D6	Injektor Zylinder 7, Ansteuerung	 |
| 0x47D7 | 47D7	Injektor Zylinder 7, Ansteuerung	 |
| 0x47D8 | 47D8	Injektor Zylinder 7, Ansteuerung	 |
| 0x47E5 | 47E5	Injektor Zylinder 8, Ansteuerung	 |
| 0x47E6 | 47E6	Injektor Zylinder 8, Ansteuerung	 |
| 0x47E7 | 47E7	Injektor Zylinder 8, Ansteuerung	 |
| 0x47E8 | 47E8	Injektor Zylinder 8, Ansteuerung	 |
| 0x47F7 | 47F7	Botschaft (STAT_SITZBELEGUNG_GURT, 0x2FA)	 |
| 0x47F8 | 47F8	Botschaft (STAT_SITZBELEGUNG_GURT, 0x2FA)	 |
| 0x4803 | 4803	Drehmomentueberwachung ACC	 |
| 0x480A | 480A	Partikelfiltersystem	 |
| 0x4810 | 4810	Drehmomenteingriff ACC	 |
| 0x481A | 481A	Partikelfiltersystem	 |
| 0x4820 | 4820	Klimaleistungsausgang, Ansteuerung	 |
| 0x4821 | 4821	Klimaleistungsausgang, Ansteuerung	 |
| 0x4822 | 4822	Klimaleistungsausgang, Ansteuerung	 |
| 0x4823 | 4823	Klimaleistungsausgang, Ansteuerung	 |
| 0x482A | 482A	Energiesparmode aktiv	 |
| 0x482B | 482B	Energiesparmode aktiv	 |
| 0x482C | 482C	Energiesparmode aktiv	 |
| 0x4830 | 4830	Ansauglufttemperatursensor	 |
| 0x4831 | 4831	Ansauglufttemperatursensor	 |
| 0x4832 | 4832	Ansauglufttemperatursensor	 |
| 0x483D | 483D	Drosselklappensteller	 |
| 0x4841 | 4841	Abgasrueckfuehr-Regelung 2, Regelabweichung	 |
| 0x484A | 484A	Fahrpedalmodul Potentiometer, Signal	 |
| 0x4850 | 4850	Abgasrueckfuehr-Regelung 2, Regelabweichung	 |
| 0x4857 | 4857	Drallklappensteller	 |
| 0x485A | 485A	AGR-Kuehler Bypassventil, Ansteuerung	 |
| 0x485B | 485B	AGR-Kuehler Bypassventil, Ansteuerung	 |
| 0x485C | 485C	AGR-Kuehler Bypassventil, Ansteuerung	 |
| 0x485D | 485D	AGR-Kuehler Bypassventil, Ansteuerung	 |
| 0x4863 | 4863	Fahrgeschwindigkeitsregelung	 |
| 0x4867 | 4867	Drallklappensteller	 |
| 0x486D | 486D	Steuergeraet	 |
| 0x4870 | 4870	Aussetzerkennung in mehreren Zylindern	 |
| 0x4877 | 4877	Drallklappensteller	 |
| 0x4880 | 4880	Aussetzerkennung Zylinder 1	 |
| 0x4887 | 4887	Drallklappensteller	 |
| 0x4890 | 4890	Aussetzerkennung Zylinder 2	 |
| 0x4896 | 4896	Drallklappensteller	 |
| 0x48A2 | 48A2	Botschaft (ASC1)	 |
| 0x48A3 | 48A3	Botschaft (ASC1)	 |
| 0x48A5 | 48A5	Botschaft (VEH_MOD, 0x315)	 |
| 0x48A6 | 48A6	Botschaft (VEH_MOD, 0x315)	 |
| 0x48A7 | 48A7	Botschaft (VEH_MOD, 0x315)	 |
| 0x48A8 | 48A8	Botschaft (VEH_MOD, 0x315)	 |
| 0x48B2 | 48B2	Botschaft (ASC2)	 |
| 0x48B3 | 48B3	Botschaft (ASC2)	 |
| 0x48B5 | 48B5	Injektoren, Ladungsmessung (Steuergeraet intern)	 |
| 0x48B6 | 48B6	Injektoren, Ladungsmessung (Steuergeraet intern)	 |
| 0x48B7 | 48B7	Injektoren, Ladungsmessung (Steuergeraet intern)	 |
| 0x48C2 | 48C2	Botschaft (EGS1)	 |
| 0x48C3 | 48C3	Botschaft (EGS1)	 |
| 0x48C5 | 48C5	Injektoren, Spannungsmessung (Steuergeraet intern)	 |
| 0x48C6 | 48C6	Injektoren, Spannungsmessung (Steuergeraet intern)	 |
| 0x48C7 | 48C7	Injektoren, Spannungsmessung (Steuergeraet intern)	 |
| 0x48D2 | 48D2	Botschaft (INSTR2)	 |
| 0x48D3 | 48D3	Botschaft (INSTR2)	 |
| 0x48D5 | 48D5	error path of actuator classification Bank1	 |
| 0x48D6 | 48D6	error path of actuator classification Bank1	 |
| 0x48D7 | 48D7	error path of actuator classification Bank1	 |
| 0x48E2 | 48E2	Botschaft (INSTR3)	 |
| 0x48E3 | 48E3	Botschaft (INSTR3)	 |
| 0x48E5 | 48E5	error path of actuator classification Bank2	 |
| 0x48E6 | 48E6	error path of actuator classification Bank2	 |
| 0x48E7 | 48E7	error path of actuator classification Bank2	 |
| 0x48F0 | 48F0	CAN Bus A	 |
| 0x48F1 | 48F1	CAN Bus A	 |
| 0x48F2 | 48F2	CAN Bus A	 |
| 0x48F3 | 48F3	CAN Bus A	 |
| 0x4900 | 4900	Momenteneingriff DSC (nv)	 |
| 0x4910 | 4910	CAN Bus B	 |
| 0x4911 | 4911	CAN Bus B	 |
| 0x4912 | 4912	CAN Bus B	 |
| 0x4913 | 4913	CAN Bus B	 |
| 0x4917 | 4917	Injektoren, Ladeschalter (Steuergeraet intern)	 |
| 0x4920 | 4920	Momenteneingriff Getriebe (nv)	 |
| 0x4930 | 4930	Aussetzerkennung Zylinder 3	 |
| 0x4940 | 4940	Aussetzerkennung Zylinder 4	 |
| 0x4950 | 4950	Aussetzerkennung Zylinder 5	 |
| 0x4960 | 4960	Aussetzerkennung Zylinder 6	 |
| 0x4991 | 4991	Botschaft (STAT_KOMBI, 0x1B4)	 |
| 0x4992 | 4992	Botschaft (STAT_KOMBI, 0x1B4)	 |
| 0x4993 | 4993	Botschaft (STAT_KOMBI, 0x1B4)	 |
| 0x49A2 | 49A2	Botschaft (A_TEMP_RELATIVZEIT, 0x310)	 |
| 0x49A3 | 49A3	Botschaft (A_TEMP_RELATIVZEIT, 0x310)	 |
| 0x49A7 | 49A7	Botschaft (RQ_STG_EFAN, 0x?)	 |
| 0x49A8 | 49A8	Botschaft (RQ_STG_EFAN, 0x?)	 |
| 0x49B7 | 49B7	Botschaft (STAT_EKP, 0x335)	 |
| 0x49B8 | 49B8	Botschaft (STAT_EKP, 0x335)	 |
| 0x49C5 | 49C5	Abgastemperatursensor vor Turbine, Signal	 |
| 0x49C6 | 49C6	Abgastemperatursensor vor Turbine, Signal	 |
| 0x49D7 | 49D7	Botschaft (ASC4)	 |
| 0x49D8 | 49D8	Botschaft (ASC4)	 |
| 0x49E7 | 49E7	Drosselklappensteller	 |
| 0x49F2 | 49F2	Botschaft (WHEEL_SPEED, 0xCE)	 |
| 0x49F3 | 49F3	Botschaft (WHEEL_SPEED, 0xCE)	 |
| 0x49F7 | 49F7	Drallklappensteller	 |
| 0x4A02 | 4A02	WakeUp-Leitung (BN 12h) bzw. Klemme 15 (BN 11h)	 |
| 0x4A03 | 4A03	WakeUp-Leitung (BN 12h) bzw. Klemme 15 (BN 11h)	 |
| 0x4A05 | 4A05	Generator (Layer_BSD)	 |
| 0x4A06 | 4A06	Generator (Layer_BSD)	 |
| 0x4A07 | 4A07	Generator (Layer_BSD)	 |
| 0x4A08 | 4A08	Generator (Layer_BSD)	 |
| 0x4A10 | 4A10	Bitserielle Datenschnittstelle BSD	 |
| 0x4A13 | 4A13	Bitserielle Datenschnittstelle BSD	 |
| 0x4A15 | 4A15	Generator (Layer_GEN)	 |
| 0x4A16 | 4A16	Generator (Layer_GEN)	 |
| 0x4A17 | 4A17	Generator (Layer_GEN)	 |
| 0x4A18 | 4A18	Generator (Layer_GEN)	 |
| 0x4A25 | 4A25	Intelligenter Batterie Sensor (Layer_DIBS1)	 |
| 0x4A26 | 4A26	Intelligenter Batterie Sensor (Layer_DIBS1)	 |
| 0x4A27 | 4A27	Intelligenter Batterie Sensor (Layer_DIBS1)	 |
| 0x4A28 | 4A28	Intelligenter Batterie Sensor (Layer_DIBS1)	 |
| 0x4A2C | 4A2C	Injektoren, TPU (Steuergeraet intern)	 |
| 0x4A30 | 4A30	Multifunktionslenkrad, Signal	 |
| 0x4A31 | 4A31	Multifunktionslenkrad, Signal	 |
| 0x4A32 | 4A32	Multifunktionslenkrad, Signal	 |
| 0x4A33 | 4A33	Multifunktionslenkrad, Signal	 |
| 0x4A35 | 4A35	Intelligenter Batterie Sensor (Layer_DIBS2)	 |
| 0x4A36 | 4A36	Intelligenter Batterie Sensor (Layer_DIBS2)	 |
| 0x4A37 | 4A37	Intelligenter Batterie Sensor (Layer_DIBS2)	 |
| 0x4A38 | 4A38	Intelligenter Batterie Sensor (Layer_DIBS2)	 |
| 0x4A40 | 4A40	EWS Schnittstellenfehler	 |
| 0x4A41 | 4A41	EWS Schnittstellenfehler	 |
| 0x4A42 | 4A42	EWS Schnittstellenfehler	 |
| 0x4A43 | 4A43	EWS Schnittstellenfehler	 |
| 0x4A45 | 4A45	Intelligenter Batterie Sensor (Layer_DIBS3)	 |
| 0x4A46 | 4A46	Intelligenter Batterie Sensor (Layer_DIBS3)	 |
| 0x4A47 | 4A47	Intelligenter Batterie Sensor (Layer_DIBS3)	 |
| 0x4A48 | 4A48	Intelligenter Batterie Sensor (Layer_DIBS3)	 |
| 0x4A4A | 4A4A	Momentenreduktion Partikelfilter	 |
| 0x4A50 | 4A50	EWS EEPROM Wechselcodeablage fehlerhaft	 |
| 0x4A51 | 4A51	EWS EEPROM Wechselcodeablage fehlerhaft	 |
| 0x4A55 | 4A55	Powermanagement Batterie (Layer_PMBATT)	 |
| 0x4A56 | 4A56	Powermanagement Batterie (Layer_PMBATT)	 |
| 0x4A57 | 4A57	Powermanagement Batterie (Layer_PMBATT)	 |
| 0x4A58 | 4A58	Powermanagement Batterie (Layer_PMBATT)	 |
| 0x4A60 | 4A60	EWS Manipulation	 |
| 0x4A61 | 4A61	EWS Manipulation	 |
| 0x4A62 | 4A62	EWS Manipulation	 |
| 0x4A63 | 4A63	EWS Manipulation	 |
| 0x4A65 | 4A65	Powermanagement Bordnetz (Layer_PMBN)	 |
| 0x4A66 | 4A66	Powermanagement Bordnetz (Layer_PMBN)	 |
| 0x4A67 | 4A67	Powermanagement Bordnetz (Layer_PMBN)	 |
| 0x4A68 | 4A68	Powermanagement Bordnetz (Layer_PMBN)	 |
| 0x4A70 | 4A70	Kennfeld FMTC_trq2qBas_MAP falsch	 |
| 0x4A7D | 4A7D	Drehmomentueberwachung DCC	 |
| 0x4A80 | 4A80	Ladeluftschlauch-Ueberwachung	 |
| 0x4A8A | 4A8A	Dummyfehler (Layer_FltMngTst)	 |
| 0x4A8B | 4A8B	Dummyfehler (Layer_FltMngTst)	 |
| 0x4A8C | 4A8C	Dummyfehler (Layer_FltMngTst)	 |
| 0x4A8D | 4A8D	Dummyfehler (Layer_FltMngTst)	 |
| 0x4A92 | 4A92	Botschaft (ASC3)	 |
| 0x4A93 | 4A93	Botschaft (ASC3)	 |
| 0x4A97 | 4A97	Botschaft (CBS_RESET_2, 0x580)	 |
| 0x4A98 | 4A98	Botschaft (CBS_RESET_2, 0x580)	 |
| 0x4A9C | 4A9C	Generator	 |
| 0x4AA2 | 4AA2	Botschaft (EGS2)	 |
| 0x4AA3 | 4AA3	Botschaft (EGS2)	 |
| 0x4AA7 | 4AA7	Botschaft (STAT_ANHAENGER, 0x2E4)	 |
| 0x4AA8 | 4AA8	Botschaft (STAT_ANHAENGER, 0x2E4)	 |
| 0x4AAC | 4AAC	Gluehsteuergeraet	 |
| 0x4AB0 | 4AB0	Elektrischer Zuheizer	 |
| 0x4AB2 | 4AB2	Elektrischer Zuheizer	 |
| 0x4AB7 | 4AB7	Botschaft (UHRZEIT_DATUM, 0x2F8)	 |
| 0x4AB8 | 4AB8	Botschaft (UHRZEIT_DATUM, 0x2F8)	 |
| 0x4ABC | 4ABC	Oelqualitaetssensor	 |
| 0x4AC0 | 4AC0	Elektrischer Zuheizer 2 (nv)	 |
| 0x4AC2 | 4AC2	Elektrischer Zuheizer 2 (nv)	 |
| 0x4AD0 | 4AD0	Elektrischer Zuheizer 3 (nv)	 |
| 0x4AD2 | 4AD2	Elektrischer Zuheizer 3 (nv)	 |
| 0x4AD5 | 4AD5	Nullmengenadaption Injektor Zylinder 1	 |
| 0x4AD6 | 4AD6	Nullmengenadaption Injektor Zylinder 1	 |
| 0x4ADD | 4ADD	Diagnosemodus Hochlauftest	 |
| 0x4AE0 | 4AE0	E-Boxluefter, Ansteuerung	 |
| 0x4AE1 | 4AE1	E-Boxluefter, Ansteuerung	 |
| 0x4AE2 | 4AE2	E-Boxluefter, Ansteuerung	 |
| 0x4AE3 | 4AE3	E-Boxluefter, Ansteuerung	 |
| 0x4AE5 | 4AE5	Nullmengenadaption Injektor Zylinder 2	 |
| 0x4AE6 | 4AE6	Nullmengenadaption Injektor Zylinder 2	 |
| 0x4AEA | 4AEA	Diagnosemodus Einspritzabschaltung	 |
| 0x4AF0 | 4AF0	Steuergeraetetemperatursensor, Signal	 |
| 0x4AF1 | 4AF1	Steuergeraetetemperatursensor, Signal	 |
| 0x4AF5 | 4AF5	Nullmengenadaption Injektor Zylinder 3	 |
| 0x4AF6 | 4AF6	Nullmengenadaption Injektor Zylinder 3	 |
| 0x4AFA | 4AFA	Unterdrucksensor Bremskraftverstaerker, Signal	 |
| 0x4AFB | 4AFB	Unterdrucksensor Bremskraftverstaerker, Signal	 |
| 0x4B00 | 4B00	Steuergeraetetemperatur	 |
| 0x4B05 | 4B05	Nullmengenadaption Injektor Zylinder 4	 |
| 0x4B06 | 4B06	Nullmengenadaption Injektor Zylinder 4	 |
| 0x4B0A | 4B0A	Vorfoederdrucksensor, Signal	 |
| 0x4B0B | 4B0B	Vorfoederdrucksensor, Signal	 |
| 0x4B10 | 4B10	Laufruheregler	 |
| 0x4B11 | 4B11	Laufruheregler	 |
| 0x4B15 | 4B15	Nullmengenadaption Injektor Zylinder 5	 |
| 0x4B16 | 4B16	Nullmengenadaption Injektor Zylinder 5	 |
| 0x4B1A | 4B1A	Kraftstofffilterheizung, Ansteuerung	 |
| 0x4B1B | 4B1B	Kraftstofffilterheizung, Ansteuerung	 |
| 0x4B1C | 4B1C	Kraftstofffilterheizung, Ansteuerung	 |
| 0x4B1D | 4B1D	Kraftstofffilterheizung, Ansteuerung	 |
| 0x4B20 | 4B20	Elektroluefter	 |
| 0x4B22 | 4B22	Elektroluefter	 |
| 0x4B25 | 4B25	Nullmengenadaption Injektor Zylinder 6	 |
| 0x4B26 | 4B26	Nullmengenadaption Injektor Zylinder 6	 |
| 0x4B30 | 4B30	Elektroluefter 2 (nv)	 |
| 0x4B32 | 4B32	Elektroluefter 2 (nv)	 |
| 0x4B35 | 4B35	Oelqualitaetssensor (Layer_QLT)	 |
| 0x4B36 | 4B36	Oelqualitaetssensor (Layer_QLT)	 |
| 0x4B37 | 4B37	Oelqualitaetssensor (Layer_QLT)	 |
| 0x4B38 | 4B38	Oelqualitaetssensor (Layer_QLT)	 |
| 0x4B40 | 4B40	Elektroluefter 3 (nv)	 |
| 0x4B42 | 4B42	Elektroluefter 3 (nv)	 |
| 0x4B45 | 4B45	Injektor Zylinder 1, Energieverbrauchsmessung	 |
| 0x4B46 | 4B46	Injektor Zylinder 1, Energieverbrauchsmessung	 |
| 0x4B48 | 4B48	Injektor Zylinder 1, Energieverbrauchsmessung	 |
| 0x4B4A | 4B4A	Botschaft (DREHMOMENT_ANF_STE, 0xB1)	 |
| 0x4B4B | 4B4B	Botschaft (DREHMOMENT_ANF_STE, 0xB1)	 |
| 0x4B4C | 4B4C	Botschaft (DREHMOMENT_ANF_STE, 0xB1)	 |
| 0x4B4D | 4B4D	Botschaft (DREHMOMENT_ANF_STE, 0xB1)	 |
| 0x4B50 | 4B50	Mengenabgleich	 |
| 0x4B55 | 4B55	Injektor Zylinder 2, Energieverbrauchsmessung	 |
| 0x4B56 | 4B56	Injektor Zylinder 2, Energieverbrauchsmessung	 |
| 0x4B58 | 4B58	Injektor Zylinder 2, Energieverbrauchsmessung	 |
| 0x4B5C | 4B5C	Drehmomentanforderung Lenkung (EHB3)	 |
| 0x4B5D | 4B5D	Drehmomentanforderung Lenkung (EHB3)	 |
| 0x4B60 | 4B60	Mengendriftkompensation	 |
| 0x4B65 | 4B65	Injektor Zylinder 3, Energieverbrauchsmessung	 |
| 0x4B66 | 4B66	Injektor Zylinder 3, Energieverbrauchsmessung	 |
| 0x4B68 | 4B68	Injektor Zylinder 3, Energieverbrauchsmessung	 |
| 0x4B75 | 4B75	Injektor Zylinder 4, Energieverbrauchsmessung	 |
| 0x4B76 | 4B76	Injektor Zylinder 4, Energieverbrauchsmessung	 |
| 0x4B78 | 4B78	Injektor Zylinder 4, Energieverbrauchsmessung	 |
| 0x4B85 | 4B85	Injektor Zylinder 5, Energieverbrauchsmessung	 |
| 0x4B86 | 4B86	Injektor Zylinder 5, Energieverbrauchsmessung	 |
| 0x4B88 | 4B88	Injektor Zylinder 5, Energieverbrauchsmessung	 |
| 0x4B90 | 4B90	Raildruckueberwachung bei Motorstart	 |
| 0x4B95 | 4B95	Injektor Zylinder 6, Energieverbrauchsmessung	 |
| 0x4B96 | 4B96	Injektor Zylinder 6, Energieverbrauchsmessung	 |
| 0x4B98 | 4B98	Injektor Zylinder 6, Energieverbrauchsmessung	 |
| 0x4BA0 | 4BA0	Ansauglufttemperatursensor, Signal	 |
| 0x4BA1 | 4BA1	Ansauglufttemperatursensor, Signal	 |
| 0x4BB0 | 4BB0	Versorgungsspannung Luftmassenmesser	 |
| 0x4BB1 | 4BB1	Versorgungsspannung Luftmassenmesser	 |
| 0x4BB5 | 4BB5	Luftmassenmesser	 |
| 0x4BB6 | 4BB6	Luftmassenmesser	 |
| 0x4BB7 | 4BB7	Luftmassenmesser	 |
| 0x4BC0 | 4BC0	Luftmassenmesser	 |
| 0x4BC1 | 4BC1	Luftmassenmesser	 |
| 0x4BC2 | 4BC2	Luftmassenmesser	 |
| 0x4BC5 | 4BC5	Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser)	 |
| 0x4BC6 | 4BC6	Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser)	 |
| 0x4BC7 | 4BC7	Ansauglufttemperatursensor  (Referenzsignal fuer Luftmassenmesser)	 |
| 0x4BCA | 4BCA	Diagnosemodus Kompressionstest	 |
| 0x4BD2 | 4BD2	Drehmomentanforderung ARS	 |
| 0x4BD5 | 4BD5	Motorlager, Ansteuerung	 |
| 0x4BD6 | 4BD6	Motorlager, Ansteuerung	 |
| 0x4BD7 | 4BD7	Motorlager, Ansteuerung	 |
| 0x4BD8 | 4BD8	Motorlager, Ansteuerung	 |
| 0x4BDA | 4BDA	Kraftstoff-Niederdruckregelung (Layer_NDR1)	 |
| 0x4BDB | 4BDB	Kraftstoff-Niederdruckregelung (Layer_NDR1)	 |
| 0x4BDC | 4BDC	Kraftstoff-Niederdruckregelung (Layer_NDR1)	 |
| 0x4BDD | 4BDD	Kraftstoff-Niederdruckregelung (Layer_NDR1)	 |
| 0x4BE2 | 4BE2	Botschaft (GEARBX_DATA, 0xBA)	 |
| 0x4BE3 | 4BE3	Botschaft (GEARBX_DATA, 0xBA)	 |
| 0x4BE7 | 4BE7	Botschaft (GEARBX_DATA2, 0x1A2)	 |
| 0x4BE8 | 4BE8	Botschaft (GEARBX_DATA2, 0x1A2)	 |
| 0x4BEA | 4BEA	Kraftstoff-Niederdruckregelung (Layer_NDR2)	 |
| 0x4BEB | 4BEB	Kraftstoff-Niederdruckregelung (Layer_NDR2)	 |
| 0x4BEC | 4BEC	Kraftstoff-Niederdruckregelung (Layer_NDR2)	 |
| 0x4BED | 4BED	Kraftstoff-Niederdruckregelung (Layer_NDR2)	 |
| 0x4BF2 | 4BF2	Botschaft (HEAT_AC, 0x1B5)	 |
| 0x4BF3 | 4BF3	Botschaft (HEAT_AC, 0x1B5)	 |
| 0x4BF7 | 4BF7	Botschaft (MILEAGE_RANGE, 0x330)	 |
| 0x4BF8 | 4BF8	Botschaft (MILEAGE_RANGE, 0x330)	 |
| 0x4BFA | 4BFA	Vorfoederdrucksensor 2, Signal	 |
| 0x4BFB | 4BFB	Vorfoederdrucksensor 2, Signal	 |
| 0x4C00 | 4C00	Botschaft (OP_CRCTLACC, 0x194)	 |
| 0x4C01 | 4C01	Botschaft (OP_CRCTLACC, 0x194)	 |
| 0x4C02 | 4C02	Botschaft (OP_CRCTLACC, 0x194)	 |
| 0x4C03 | 4C03	Botschaft (OP_CRCTLACC, 0x194)	 |
| 0x4C06 | 4C06	Botschaft (STAT_ARS, 0x1AC)	 |
| 0x4C07 | 4C07	Botschaft (STAT_ARS, 0x1AC)	 |
| 0x4C08 | 4C08	Botschaft (STAT_ARS, 0x1AC)	 |
| 0x4C0A | 4C0A	Diagnosemodus Mengenregelventil Hysteresetest	 |
| 0x4C12 | 4C12	Botschaft (STAT_DSC, 0x19E)	 |
| 0x4C13 | 4C13	Botschaft (STAT_DSC, 0x19E)	 |
| 0x4C15 | 4C15	Botschaft (TERMINAL, 0x130)	 |
| 0x4C16 | 4C16	Botschaft (TERMINAL, 0x130)	 |
| 0x4C17 | 4C17	Botschaft (TERMINAL, 0x130)	 |
| 0x4C18 | 4C18	Botschaft (TERMINAL, 0x130)	 |
| 0x4C1A | 4C1A	Diagnosemodus Raildruckregelventil Hysteresetest	 |
| 0x4C20 | 4C20	Botschaft (TORQUE_DSC, 0xB6)	 |
| 0x4C21 | 4C21	Botschaft (TORQUE_DSC, 0xB6)	 |
| 0x4C22 | 4C22	Botschaft (TORQUE_DSC, 0xB6)	 |
| 0x4C23 | 4C23	Botschaft (TORQUE_DSC, 0xB6)	 |
| 0x4C27 | 4C27	Botschaft (VELOCITY, 0x1A0)	 |
| 0x4C28 | 4C28	Botschaft (VELOCITY, 0x1A0)	 |
| 0x4C2A | 4C2A	Injektoren, Ansteuerung	 |
| 0x4C3C | 4C3C	Botschaft (SOLL_MOM_ANF, 0xBB)	 |
| 0x4C3D | 4C3D	Botschaft (SOLL_MOM_ANF, 0xBB)	 |
| 0x4C45 | 4C45	Injektor Zylinder 7, Energieverbrauchsmessung	 |
| 0x4C46 | 4C46	Injektor Zylinder 7, Energieverbrauchsmessung	 |
| 0x4C48 | 4C48	Injektor Zylinder 7, Energieverbrauchsmessung	 |
| 0x4C55 | 4C55	Injektor Zylinder 8, Energieverbrauchsmessung	 |
| 0x4C56 | 4C56	Injektor Zylinder 8, Energieverbrauchsmessung	 |
| 0x4C58 | 4C58	Injektor Zylinder 8, Energieverbrauchsmessung	 |
| 0x4CAA | 4CAA	Generator (Layer_GENEL)	 |
| 0x4CAB | 4CAB	Generator (Layer_GENEL)	 |
| 0x4CAC | 4CAC	Generator (Layer_GENEL)	 |
| 0x4CAD | 4CAD	Generator (Layer_GENEL)	 |
| 0x4CB2 | 4CB2	Botschaft (PWRMNG_LOADV, 0x334)	 |
| 0x4CB3 | 4CB3	Botschaft (PWRMNG_LOADV, 0x334)	 |
| 0x4CBA | 4CBA	Generator (Layer_GENELB)	 |
| 0x4CBB | 4CBB	Generator (Layer_GENELB)	 |
| 0x4CBC | 4CBC	Generator (Layer_GENELB)	 |
| 0x4CBD | 4CBD	Generator (Layer_GENELB)	 |
| 0x4CCA | 4CCA	Generator (Layer_GENHT)	 |
| 0x4CCB | 4CCB	Generator (Layer_GENHT)	 |
| 0x4CCC | 4CCC	Generator (Layer_GENHT)	 |
| 0x4CCD | 4CCD	Generator (Layer_GENHT)	 |
| 0x4CDA | 4CDA	Generator (Layer_GENHTB)	 |
| 0x4CDB | 4CDB	Generator (Layer_GENHTB)	 |
| 0x4CDC | 4CDC	Generator (Layer_GENHTB)	 |
| 0x4CDD | 4CDD	Generator (Layer_GENHTB)	 |
| 0x4CE0 | 4CE0	Partikelfiltersystem	 |
| 0x4CEA | 4CEA	Generator (Layer_GENKOMM)	 |
| 0x4CEB | 4CEB	Generator (Layer_GENKOMM)	 |
| 0x4CEC | 4CEC	Generator (Layer_GENKOMM)	 |
| 0x4CED | 4CED	Generator (Layer_GENKOMM)	 |
| 0x4CF3 | 4CF3	Abgasgegendrucksensor, Signal	 |
| 0x4CFA | 4CFA	Generator (Layer_GENMECH)	 |
| 0x4CFB | 4CFB	Generator (Layer_GENMECH)	 |
| 0x4CFC | 4CFC	Generator (Layer_GENMECH)	 |
| 0x4CFD | 4CFD	Generator (Layer_GENMECH)	 |
| 0x4D00 | 4D00	Abgasgegendrucksensor	 |
| 0x4D01 | 4D01	Abgasgegendrucksensor	 |
| 0x4D03 | 4D03	Abgasgegendrucksensor	 |
| 0x4D0A | 4D0A	Generator (Layer_GENREGUPL)	 |
| 0x4D0B | 4D0B	Generator (Layer_GENREGUPL)	 |
| 0x4D0C | 4D0C	Generator (Layer_GENREGUPL)	 |
| 0x4D0D | 4D0D	Generator (Layer_GENREGUPL)	 |
| 0x4D13 | 4D13	Partikelfiltersystem	 |
| 0x4D1A | 4D1A	Generator (Layer_GENUPL)	 |
| 0x4D1B | 4D1B	Generator (Layer_GENUPL)	 |
| 0x4D1C | 4D1C	Generator (Layer_GENUPL)	 |
| 0x4D1D | 4D1D	Generator (Layer_GENUPL)	 |
| 0x4D23 | 4D23	Partikelfiltersystem	 |
| 0x4D2A | 4D2A	Botschaft (STATUS_EMF, 0x201)	 |
| 0x4D2B | 4D2B	Botschaft (STATUS_EMF, 0x201)	 |
| 0x4D2C | 4D2C	Botschaft (STATUS_EMF, 0x201)	 |
| 0x4D2D | 4D2D	Botschaft (STATUS_EMF, 0x201)	 |
| 0x4D3A | 4D3A	Botschaft (STELLANF_EMF, 0x1A7)	 |
| 0x4D3B | 4D3B	Botschaft (STELLANF_EMF, 0x1A7)	 |
| 0x4D3C | 4D3C	Botschaft (STELLANF_EMF, 0x1A7)	 |
| 0x4D3D | 4D3D	Botschaft (STELLANF_EMF, 0x1A7)	 |
| 0x4D40 | 4D40	Partikelfiltersystem	 |
| 0x4D4A | 4D4A	Partikelfiltersystem	 |
| 0x4D5A | 4D5A	Injektor Zylinder 1, Adaption Ansteuerspannung	 |
| 0x4D5B | 4D5B	Injektor Zylinder 1, Adaption Ansteuerspannung	 |
| 0x4D6A | 4D6A	Injektor Zylinder 2, Adaption Ansteuerspannung	 |
| 0x4D6B | 4D6B	Injektor Zylinder 2, Adaption Ansteuerspannung	 |
| 0x4D73 | 4D73	Partikelfiltersystem	 |
| 0x4D7A | 4D7A	Injektor Zylinder 3, Adaption Ansteuerspannung	 |
| 0x4D7B | 4D7B	Injektor Zylinder 3, Adaption Ansteuerspannung	 |
| 0x4D8A | 4D8A	Injektor Zylinder 4, Adaption Ansteuerspannung	 |
| 0x4D8B | 4D8B	Injektor Zylinder 4, Adaption Ansteuerspannung	 |
| 0x4D9A | 4D9A	Injektor Zylinder 5, Adaption Ansteuerspannung	 |
| 0x4D9B | 4D9B	Injektor Zylinder 5, Adaption Ansteuerspannung	 |
| 0x4DAA | 4DAA	Injektor Zylinder 6, Adaption Ansteuerspannung	 |
| 0x4DAB | 4DAB	Injektor Zylinder 6, Adaption Ansteuerspannung	 |
| 0x4DBA | 4DBA	Injektor Zylinder 7, Adaption Ansteuerspannung	 |
| 0x4DBB | 4DBB	Injektor Zylinder 7, Adaption Ansteuerspannung	 |
| 0x4DCA | 4DCA	Injektor Zylinder 8, Adaption Ansteuerspannung	 |
| 0x4DCB | 4DCB	Injektor Zylinder 8, Adaption Ansteuerspannung	 |
| 0x4DF0 | 4DF0	Botschaft (TORQUE_GEARBX, 0xB5)	 |
| 0x4DF1 | 4DF1	Botschaft (TORQUE_GEARBX, 0xB5)	 |
| 0x4DF2 | 4DF2	Botschaft (TORQUE_GEARBX, 0xB5)	 |
| 0x4DF3 | 4DF3	Botschaft (TORQUE_GEARBX, 0xB5)	 |
| 0xCD87 | CD87	Power Train CAN Bus	 |
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
| 0x2721 | P CDKLASH - Lambda-Sondenalterung h. Kat |
| 0x2722 | P CDKLSV2 - Lambda-Sonde2 vor Kat |
| 0x2723 | P CDKHSVE2 - Endstufe Heizung Sonde vor Katalysator Bank2 |
| 0x2724 | P CDKLSH2 - Lambda-Sonde2 hinter Kat |
| 0x2725 | P CDKLATP2 - Lambda-Sondenalterung Periodendauer Bank2 |
| 0x2726 | P CDKLATV2 - Lambda-Sondenalterung TV Bank2 |
| 0x2727 | P CDKLASH2 - Lambda-Sondenalterung h. Kat Bank2 |
| 0x2728 | P CDKFRAO - LR-Adaption multiplikativ Bereich2 |
| 0x2729 | P CDKFRAO2 - LR-Adaption multipl. Bereich2 (Bank2) |
| 0x272A | P CDKFRAU - LR-Adaption multiplikativ Bereich1 |
| 0x272B | P CDKFRAU2 - LR-Adaption multipl. Bereich1 (Bank2) |
| 0x272C | P CDKRKAT - LR-Adaption additiv pro Zeit |
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
| 0x2742 | P CDKMD00 - Aussetzererkennung Zyl.1  |
| 0x2743 | P CDKMD01 - Aussetzererkennung Zyl.5  |
| 0x2744 | P CDKMD02 - Aussetzererkennung Zyl.4  |
| 0x2745 | P CDKMD03 - Aussetzererkennung Zyl.8  |
| 0x2746 | P CDKMD04 - Aussetzererkennung Zyl.6  |
| 0x2747 | P CDKMD05 - Aussetzererkennung Zyl.3  |
| 0x2748 | P CDKMD06 - Aussetzererkennung Zyl.7  |
| 0x2749 | P CDKMD07 - Aussetzererkennung Zyl.2  |
| 0x274E | P CDKMD - Aussetzererkennung, Summenfehler |
| 0x2753 | P CDKDZKU0 - Ueberwachung Zuender 1  |
| 0x2754 | P CDKDZKU1 - Ueberwachung Zuender 5  |
| 0x2755 | P CDKDZKU2 - Ueberwachung Zuender 4  |
| 0x2756 | P CDKDZKU3 - Ueberwachung Zuender 8  |
| 0x2757 | P CDKDZKU4 - Ueberwachung Zuender 6  |
| 0x2758 | P CDKDZKU5 - Ueberwachung Zuender 3  |
| 0x2759 | P CDKDZKU6 - Ueberwachung Zuender 7  |
| 0x275A | P CDKDZKU7 - Ueberwachung Zuender 2  |
| 0x2760 | P CDKSLS - Sekundaerluftsystem |
| 0x2761 | P CDKSLS2 - Sekundaerluftsystem Bank2 |
| 0x2762 | P CDKSLV - Sekundaerluftventil |
| 0x2763 | P CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2764 | P CDKSLPE - Ansteuerung Relais Sekundaerluftpumpe |
| 0x2765 | P CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2769 | P CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276B | P CDKSLVE2 - Ansteuerung Sekundaerluftventil Bank2 |
| 0x276D | P CDKTES - Tankentlueftung functional check |
| 0x276E | P CDKTES2 - Tankentlueftung funktional check Bank2 |
| 0x2772 | P CDKTEVE - Ansteuerung Tankentlueftungsventil |
| 0x2773 | P CDKTEVE2 - Ansteuerung Tankentlueftungsventil Bank2 |
| 0x2775 | P CDKUFMV - Motormomentueberwachung Ebene 2 |
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
| 0x278B | P CDKTM - Motortemperatur |
| 0x278C | P CDKTA - Ansauglufttemperatur |
| 0x278D | P CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | P CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x278F | P CDKGLOR - LowRange Signal unplausibel  |
| 0x2790 | P CDKTGET - Getriebetemperatur |
| 0x2791 | P CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | P CDKDVEL - DK Positionsueberwachung |
| 0x2793 | P CDKDVER - DK-Steller Regelbereich |
| 0x2794 | P CDKDVEE - DK-Steller Ansteuerung |
| 0x2795 | P CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | P CDKDVEU - Pruefung unterer Anschlag |
| 0x2797 | P CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | P CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | P CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | P CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | P CDKTHS - Thermostat klemmt |
| 0x279C | P CDKETS - Ansteuerung Thermostat Kennfeldkuehlung |
| 0x279D | P CDKMLE - Ansteuerung Motorluefter |
| 0x279E | P CDKAKRE - Ansteuerung Abgasklappe |
| 0x279F | P CDKLUEA - Ansteuerung LuefterA |
| 0x27A0 | P CDKELS - Ansteuerung E-Box Luefter |
| 0x27A4 | P CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x27A6 | P CDKEV1 - Ansteuerung EV1  |
| 0x27A7 | P CDKEV2 - Ansteuerung EV5  |
| 0x27A8 | P CDKEV3 - Ansteuerung EV4  |
| 0x27A9 | P CDKEV4 - Ansteuerung EV8  |
| 0x27AA | P CDKEV5 - Ansteuerung EV6  |
| 0x27AB | P CDKEV6 - Ansteuerung EV3  |
| 0x27AC | P CDKEV7 - Ansteuerung EV7  |
| 0x27AD | P CDKEV8 - Ansteuerung EV2  |
| 0x27B3 | P CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | P CDKDSU - Drucksensor Umgebung |
| 0x27B5 | P CDKENWSE - Ansteuerung Einlass-VANOS |
| 0x27B6 | P CDKENWSE2 - Ansteuerung Einlass-VANOS Bank2 |
| 0x27B7 | P CDKKPE - Ansteuerung Kraftstoffpumpen-Relais |
| 0x27B8 | P CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27BB | P CDKANWS - Nockenwellensteuerung Auslass-VANOS0 |
| 0x27BC | P CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x27BD | P CDKANWSE - Ansteuerung Auslass-VANOS |
| 0x27BE | P CDKANWSE2 - Ansteuerung Auslass-VANOS Bank2 |
| 0x27BF | P CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x27C0 | P CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x27C1 | P CDKPHM - Master Nockenwellengeber |
| 0x27C2 | P CDKKOSE - Ansteuerung Klimakompressorsteuerung |
| 0x27C3 | P CDKTOENS - Fehler Oelniveausensor |
| 0x27C8 | P CDKCFC - Check Filler Cap |
| 0x27CA | P CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | P CDKDMTKNM - DM-TL Feinstleck (0,5mm) MIL aus |
| 0x27CC | P CDKDMTK - DM-TL Feinleck |
| 0x27CE | P CDKUFRLIP - Lastsensorueberwachung |
| 0x27CD | P CDKDMTL - DM-TL Modul |
| 0x27D5 | P CDKLLR - Leerlaufregelung fehlerhaft |
| 0x27D9 | P CDKDHDMTE - Ansteuerung DM-TL Heizung |
| 0x27DA | P CDKDGEN - Generatorfehler |
| 0x27DC | P CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x27E1 | P CDKUFSPSC - Pedalwertgeberueberwachung |
| 0x27E2 | P CDKKS1 - Klopfsensor1 |
| 0x27E3 | P CDKKS2 - Klopfsensor2 |
| 0x27E4 | P CDKKS3 - Klopfsensor3 |
| 0x27E5 | P CDKKS4 - Klopfsensor4 |
| 0x27E6 | P CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | P CDKKROF - Klopfregelung Offset |
| 0x27E8 | P CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | P CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | P CDKCHDEV  - CAN-Timeout HDEV |
| 0x27EB | P CDKCTXU  - CAN-Timeout TXU |
| 0x27EC | P CDKCGE  - CAN EGS Signalfehler |
| 0x27ED | P CDKCAS  - CAN ASC/DSC Signalfehler |
| 0x27EE | P CDKCINS  - CAN Instrumentenkombination Signalfehler |
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
| 0x27FB | P CDKGLFE - Luftfuehrung |
| 0x27FD | P CDKSTA - Startautomatik |
| 0x27FE | P CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | P CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x280A | P CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x2812 | P CDKTOL - Oeltemperatur |
| 0x2813 | P CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | P CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | P CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | P CDKUFNC - Motordrehzahlueberwachung |
| 0x2818 | P CDKULSU - Spannungsueberwachung Sonde an Luft |
| 0x281D | P CDKBSD - BSD-Leitungsfehler |
| 0x281E | P CDKSUE - Ansteuerung DISA |
| 0x281F | P CDKULSU2 - Spannungsueberwachung Sonde an Luft Bank2 |
| 0x2820 | P CDKDISA - Fehler DISA |
| 0x2821 | P CDKDISAT - DISA Temperaturwarnschwelle Motorschutzmodell |
| 0x2822 | P CDKMTOEL - Zwangsschaltung EGS |
| 0x2823 | P CDKHSVSA - Heizung Lambdasonde vor Kat (im Schub) |
| 0x2824 | P CDKHSVSA2 - Heizung Lambdasonde vor Kat (im Schub) Bank2 |
| 0x2825 | P CDKLAVH - Lambdasondenalterung hinter Kat |
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
| 0x283E | P CDKVVTE - VVT-Enable-Leitung Ansteuerung |
| 0x283F | P CDKPOELS - Plausibilitaet Oeldruckschalter |
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
| 0x285F | CDKDVFSG2 - VVT-Steuergeraet interner Fehler (Bank2) |
| 0x2860 | P CDKDVEST - VVT-Endstufe |
| 0x2861 | P CDKDVEST2 - VVT-Endstufe (Bank2) |
| 0x2862 | P CDKDVULV - VVT-Leistungsversorgung |
| 0x2863 | P CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x2864 | P CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler |
| 0x2865 | P CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | P CDKDVAN - VVT-Anschlaege lernen notwendig |
| 0x2867 | P CDKDVOVL - VVT-Systemueberlast |
| 0x2868 | P CDKDVOVL2 - VVT-Systemueberlast Bank2 |
| 0x287C | P CDKDSS - Drucksensor Saugrohr |
| 0x2880 | P CDKAGRS - AGR System |
| 0x2889 | P CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x28C8 | P CDKFRST - LR-Abweichung  |
| 0x28C9 | P CDKFRST2 - LR-Abweichung Bank2 |
| 0x28D2 | P CDKDSL - Drucksensor Ladedruck |
| 0x28D3 | P CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x28D4 | P CDKLDE - Ladedrucksteuerventil Ansteuerung |
| 0x28D5 | P CDKUVSE - Ansteuerung Umluftventil Turbo |
| 0x28D6 | P CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | P CDKDGENBS - Generatorkommunikation |
| 0x28D8 | P CDKNVRBUR - Bordnetzabschaltung, Fehlerspeicher gelöscht |
| 0x28DB | P CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x28DC | P CDKDGENB2 - Generator 2 Kommunikation |
| 0x2908 | P CDKCDSC - CAN Timeout DSG SG |
| 0x2909 | P CDKCEGS - CAN Timeout Getriebesteuergeraet |
| 0x290A | P CDKAFS - Active Front Steering Moment |
| 0x292B | P CDKLSUIA - LSU Abgleichsleitung |
| 0x292C | P CDKLSUIA2 - LSU Abgleichsleitung Bank2 |
| 0x292D | P CDKLSUUN - LSU Nernst Zelle Unterbrechung |
| 0x292E | P CDKLSUUN2 - LSU Nernst Zelle Unterbrechung Bank2 |
| 0x2930 | P CDKLSUVM - LSU virtuelle Masse Unterbrechung |
| 0x2931 | P CDKLSUVM2 - LSU virtuelle Masse Unterbrechung Bank2 |
| 0x297D | P CDKCSSG - CAN SSG Signalfehler |
| 0x2982 | P CDKGLFE - Ölkontrollleuchte Ansteuerung |
| 0x299B | P CDKDIBS1 - IBS BSD Fehler #1 |
| 0x299C | P CDKDIBS2 - IBS BSD Fehler #2 |
| 0x299D | P CDKDIBS3 - IBS BSD Fehler #3 |
| 0x29A8 | P CDKPMBN - Powermanagement Netzwerkfehler |
| 0x29A9 | P CDKPMBATT - Powermanagement |
| 0x29AE | P CDKTESG - Tankentlüftungssystem Grobleck |
| 0xCD87 | P CDKCANA - PT - CAN Bus Off |
| 0xCD8B | P CDKCANB - Local CAN Bus Off |
| 0xCD9B | P CDKX315 - Status Fahrzeugmodus |
| 0xCDA1 | P CDKXC4 - Lenkradwinkel |
| 0xCDA7 | P CDKX3B0 - Status Gang Rückwärts |
| 0xCDAA | P CDKX135 - Steuerung Crashabschaltung EKP |
| 0x2710 | P unbekannter Fehlerort |
| 0x2711 | P Umgebungsdrucksensor |
| 0x2712 | P HFM1_FEHLER |
| 0x2713 | P HFM2_FEHLER |
| 0x2714 | P PSAU1_FEHLER |
| 0x2715 | P PSAU2_FEHLER |
| 0x2716 | P VAN_HALL_E1_FEHLER |
| 0x2717 | P VAN_HALL_A1_FEHLER |
| 0x2718 | P VAN_HALL_E2_FEHLER |
| 0x2719 | P VAN_HALL_A2_FEHLER |
| 0x271A | P VAN_REGL_E1_FEHLER |
| 0x271B | P VAN_REGL_A1_FEHLER |
| 0x271C | P VAN_REGL_E2_FEHLER |
| 0x271D | P VAN_REGL_A2_FEHLER |
| 0x271E | P NW1_SYNC_FEHLER |
| 0x271F | P NW2_SYNC_FEHLER |
| 0x2720 | P PCTRL_IGN_FEHLER |
| 0x2721 | P ZUST_NL_IGN_FEHLER |
| 0x2722 | P PKS_FEHLER |
| 0x2723 | P TKS_FEHLER |
| 0x2724 | P LAVK1_FEHLER |
| 0x2725 | P LAVK2_FEHLER |
| 0x2726 | P LAVK1_OBD_PLAU_FEHLER |
| 0x2727 | P LAVK2_OBD_PLAU_FEHLER |
| 0x2728 | P LAVK1_OBD_SA_FEHLER |
| 0x2729 | P LAVK2_OBD_SA_FEHLER |
| 0x272A | P LANK1_FEHLER |
| 0x272B | P LANK2_FEHLER |
| 0x272C | P LSHNK1_FEHLER |
| 0x272D | P LSHNK2_FEHLER |
| 0x272E | P PTCAN_BUSOFF_FEHLER |
| 0x272F | P PTCAN_TORQDSC_FEHLER |
| 0x2730 | P PTCAN_STDSC_FEHLER |
| 0x2731 | P PTCAN_VRAD_FEHLER |
| 0x2732 | P PTCAN_VFZG_FEHLER |
| 0x2733 | P PTCAN_ATEMP_FEHLER |
| 0x2734 | P PTCAN_KLST_FEHLER |
| 0x2735 | P PTCAN_KKOS_FEHLER |
| 0x2736 | P PTCAN_LRW_FEHLER |
| 0x2737 | P FPLAU1_FEHLER |
| 0x2738 | P FPLAU2_FEHLER |
| 0x2739 | P SL_ML_HFM_FEHLER |
| 0x273A | P LANK1_OBD_S_FEHLER |
| 0x273B | P LANK2_OBD_S_FEHLER |
| 0x273C | P LAVK1_OBD_TL_FEHLER |
| 0x273D | P LAVK2_OBD_TL_FEHLER |
| 0x273E | P LSHVK1_FEHLER |
| 0x273F | P LSHVK2_FEHLER |
| 0x2740 | P LSRVK1_OBD_REG_FEHLER |
| 0x2741 | P LSRVK2_OBD_REG_FEHLER |
| 0x2742 | P LSHVK1_R_FEHLER |
| 0x2743 | P LSHVK2_R_FEHLER |
| 0x2744 | P LSRVK1_OBD_START_FEHLER |
| 0x2745 | P LSRVK2_OBD_START_FEHLER |
| 0x2746 | P LSRVK1_OBD_REF_FEHLER |
| 0x2747 | P LSRVK2_OBD_REF_FEHLER |
| 0x2748 | P LAVK1_DIAG_FEHLER |
| 0x2749 | P LAVK2_DIAG_FEHLER |
| 0x274A | P LAVK1_IA_OPENLOAD_FEHLER |
| 0x274B | P LAVK2_IA_OPENLOAD_FEHLER |
| 0x274C | P LAVK1_VM_OPENLOAD_FEHLER |
| 0x274D | P LAVK2_VM_OPENLOAD_FEHLER |
| 0x274E | P LAVK1_UN_OPENLOAD_FEHLER |
| 0x274F | P LAVK2_UN_OPENLOAD_FEHLER |
| 0x2750 | P LAVK1_IP_OPENLOAD_FEHLER |
| 0x2751 | P LAVK2_IP_OPENLOAD_FEHLER |
| 0x2752 | P APPL_DATEN_FEHLER |
| 0x2752 | P TZ1_FEHLER |
| 0x2753 | P TZ2_FEHLER |
| 0x2754 | P TZ3_FEHLER |
| 0x2755 | P TZ4_FEHLER |
| 0x2756 | P TZ5_FEHLER |
| 0x2757 | P TZ6_FEHLER |
| 0x2758 | P TZ7_FEHLER |
| 0x2759 | P TZ8_FEHLER |
| 0x275A | P TZ9_FEHLER |
| 0x275B | P TZ10_FEHLER |
| 0x275C | P TZ11_FEHLER |
| 0x275D | P TZ12_FEHLER |
| 0x275F | P VAN_ANSCHL_E1_FEHLER |
| 0x2760 | P VAN_ANSCHL_A1_FEHLER |
| 0x2761 | P VAN_ANSCHL_E2_FEHLER |
| 0x2762 | P VAN_ANSCHL_A2_FEHLER |
| 0x2763 | P VAN_VENT_E1_FEHLER |
| 0x2764 | P VAN_VENT_A1_FEHLER |
| 0x2765 | P VAN_VENT_E2_FEHLER |
| 0x2766 | P VAN_VENT_A2_FEHLER |
| 0x2767 | P EV1_FEHLER |
| 0x2768 | P EV2_FEHLER |
| 0x2769 | P EV3_FEHLER |
| 0x276A | P EV4_FEHLER |
| 0x276B | P EV5_FEHLER |
| 0x276C | P EV6_FEHLER |
| 0x276D | P EV7_FEHLER |
| 0x276E | P EV8_FEHLER |
| 0x276F | P EV9_FEHLER |
| 0x2770 | P EV10_FEHLER |
| 0x2771 | P EV11_FEHLER |
| 0x2772 | P EV12_FEHLER |
| 0x2773 | P PTCAN_CRASH_FEHLER |
| 0x2774 | P PTCAN_VEHMOD_FEHLER |
| 0x2775 | P PTCAN_BEDFGR_FEHLER |
| 0x2776 | P INDEX_102_INJ |
| 0x2777 | P INDEX_103_INJ |
| 0x2778 | P INDEX_104_INJ |
| 0x2779 | P INDEX_105_INJ |
| 0x277A | P INDEX_106_INJ |
| 0x277B | P INDEX_107_INJ |
| 0x277C | P INDEX_108_INJ |
| 0x277D | P INDEX_109_INJ |
| 0x277E | P INDEX_110_INJ |
| 0x277F | P INDEX_111_INJ |
| 0x2780 | P INDEX_112_INJ |
| 0x2781 | P INDEX_113_INJ |
| 0x2782 | P INDEX_114_INJ |
| 0x2783 | P INDEX_115_INJ |
| 0x2784 | P INDEX_116_INJ |
| 0x2785 | P INDEX_117_INJ |
| 0x2786 | P INDEX_118_INJ |
| 0x2787 | P INDEX_119_INJ |
| 0x2788 | P INDEX_120_INJ |
| 0x2789 | P INDEX_121_INJ |
| 0x278A | P INDEX_122_INJ |
| 0x278B | P INDEX_123_INJ |
| 0x278C | P INDEX_124_INJ |
| 0x278D | P INDEX_125_INJ |
| 0x278E | P INDEX_126_INJ |
| 0x278F | P INDEX_127_INJ |
| 0x2AF8 | P unbekannter Fehlerort |
| 0x2AF9 | P Kuehlwassertemperatursensor |
| 0x2AFA | P OBD-Plausibilitaet-Kuehlwassersensor |
| 0x2AFB | P Ansauglufttemperatursensor Bank 1 |
| 0x2AFC | P Ansauglufttemperatursensor Bank 2 |
| 0x2AFD | P Spannung an Klemme 15 |
| 0x2AFE | P Spannung an Klemme 87 |
| 0x2AFF | P Kuehleraustrittstemperatursensor |
| 0x2B00 | P Steuergeraetetemperatursensor |
| 0x2B01 | P Spannungsversorgung an PIN 111,219,514 |
| 0x2B02 | P Spannungsversorgung an PIN 124,512 |
| 0x2B03 | P APPL_DATA_IGN |
| 0x2B04 | P INDEX_12_IGN |
| 0x2B05 | P Pedalwertgeber 1 |
| 0x2B06 | P Pedalwertgeber 2 |
| 0x2B07 | P Vergleich der Pedalwertgeber 1 und 2 |
| 0x2B08 | P PCTRL_INJ_FEHLER |
| 0x2B09 | P LLSCAN_LLS1_FEHLER |
| 0x2B0A | P LLSCAN_LLS2_FEHLER |
| 0x2B0B | P DKCAN_DK1_FEHLER |
| 0x2B0C | P DKCAN_DK2_FEHLER |
| 0x2B0D | P LLS1_SK_FEHLER |
| 0x2B0E | P LLS2_SK_FEHLER |
| 0x2B0F | P INDEX_23_IGN |
| 0x2B10 | P INDEX_24_IGN |
| 0x2B11 | P INDEX_25_IGN |
| 0x2B12 | P INDEX_26_IGN |
| 0x2B13 | P INDEX_27_IGN |
| 0x2B14 | P INDEX_28_IGN |
| 0x2B15 | P INDEX_29_IGN |
| 0x2B16 | P INDEX_30_IGN |
| 0x2B17 | P INDEX_31_IGN |
| 0x2B18 | P INDEX_32_IGN |
| 0x2B19 | P IONVERST_B1 |
| 0x2B1A | P IONSPG_B1 |
| 0x2B1B | P IONVERST_B2 |
| 0x2B1C | P IONSPG_B2 |
| 0x2B1D | P Abgastemperatursensor Bank 1 |
| 0x2B1E | P Abgastemperatursensor Bank 2 |
| 0x2B1F | P DK1_WDK_FEHLER |
| 0x2B20 | P DK2_WDK_FEHLER |
| 0x2B21 | P DK1_FAIL_FEHLER |
| 0x2B22 | P DK2_FAIL_FEHLER |
| 0x2B23 | P LLS1_FAIL_FEHLER |
| 0x2B24 | P LLS2_FAIL_FEHLER |
| 0x2B25 | P DK1_SK_FEHLER |
| 0x2B26 | P DK2_SK_FEHLER |
| 0x2B27 | P DK1_FT_FEHLER |
| 0x2B28 | P DK2_FT_FEHLER |
| 0x2B29 | P MD_SICHERHEITSKONZEPT |
| 0x2B2A | P INDEX_50_IGN |
| 0x2B2B | P DSC_EINGR_FEHLER |
| 0x2B2C | P DK1_CMD_FEHLER |
| 0x2B2D | P DK2_CMD_FEHLER |
| 0x2B2E | P LLS1_CMD_FEHLER |
| 0x2B2F | P LLS2_CMD_FEHLER |
| 0x2B30 | P SMGCAN_SMG1_FEHLER |
| 0x2B31 | P SMGCAN_SMG2_FEHLER |
| 0x2B32 | P SMGCAN_SMG3_FEHLER |
| 0x2B33 | P SMG_LLSCAN_BUSOFF_FEHLER |
| 0x2B34 | P DKCAN_BUSOFF_FEHLER |
| 0x2B35 | P AUSS_KAT_Z1_FEHLER |
| 0x2B36 | P AUSS_KAT_Z2_FEHLER |
| 0x2B37 | P AUSS_KAT_Z3_FEHLER |
| 0x2B38 | P AUSS_KAT_Z4_FEHLER |
| 0x2B39 | P AUSS_KAT_Z5_FEHLER |
| 0x2B3A | P AUSS_KAT_Z6_FEHLER |
| 0x2B3B | P AUSS_KAT_Z7_FEHLER |
| 0x2B3C | P AUSS_KAT_Z8_FEHLER |
| 0x2B3D | P AUSS_KAT_Z9_FEHLER |
| 0x2B3E | P AUSS_KAT_Z10_FEHLER |
| 0x2B3F | P AUSS_KAT_Z11_FEHLER |
| 0x2B40 | P AUSS_KAT_Z12_FEHLER |
| 0x2B41 | P AUSS_KAT_MULT_FEHLER |
| 0x2B42 | P AUSS_ABG_Z1_FEHLER |
| 0x2B43 | P AUSS_ABG_Z2_FEHLER |
| 0x2B44 | P AUSS_ABG_Z3_FEHLER |
| 0x2B45 | P AUSS_ABG_Z4_FEHLER |
| 0x2B46 | P AUSS_ABG_Z5_FEHLER |
| 0x2B47 | P AUSS_ABG_Z6_FEHLER |
| 0x2B48 | P AUSS_ABG_Z7_FEHLER |
| 0x2B49 | P AUSS_ABG_Z8_FEHLER |
| 0x2B4A | P AUSS_ABG_Z9_FEHLER |
| 0x2B4B | P AUSS_ABG_Z10_FEHLER |
| 0x2B4C | P AUSS_ABG_Z11_FEHLER |
| 0x2B4D | P AUSS_ABG_Z12_FEHLER |
| 0x2B4E | P AUSS_ABG_MULT_FEHLER |
| 0x2B4F | P TAN_OBD_FEHLER |
| 0x2B50 | P FPGA FEHLER |
| 0x2B51 | P INDEX_89_IGN |
| 0x2B52 | P INDEX_90_IGN |
| 0x2B53 | P INDEX_91_IGN |
| 0x2B54 | P INDEX_92_IGN |
| 0x2B55 | P INDEX_93_IGN |
| 0x2B56 | P INDEX_94_IGN |
| 0x2B57 | P INDEX_95_IGN |
| 0x2B58 | P INDEX_96_IGN |
| 0x2B59 | P INDEX_97_IGN |
| 0x2B5A | P INDEX_98_IGN |
| 0x2B5B | P INDEX_99_IGN |
| 0x2B5C | P INDEX_100_IGN |
| 0x2B5D | P INDEX_101_IGN |
| 0x2B5E | P INDEX_102_IGN |
| 0x2B5F | P INDEX_103_IGN |
| 0x2B60 | P INDEX_104_IGN |
| 0x2B61 | P INDEX_105_IGN |
| 0x2B62 | P INDEX_106_IGN |
| 0x2B63 | P INDEX_107_IGN |
| 0x2B64 | P INDEX_108_IGN |
| 0x2B65 | P INDEX_109_IGN |
| 0x2B66 | P INDEX_110_IGN |
| 0x2B67 | P INDEX_111_IGN |
| 0x2B68 | P INDEX_112_IGN |
| 0x2B69 | P INDEX_113_IGN |
| 0x2B6A | P INDEX_114_IGN |
| 0x2B6B | P INDEX_115_IGN |
| 0x2B6C | P INDEX_116_IGN |
| 0x2B6D | P INDEX_117_IGN |
| 0x2B6E | P INDEX_118_IGN |
| 0x2B6F | P INDEX_119_IGN |
| 0x2B70 | P INDEX_120_IGN |
| 0x2B71 | P INDEX_121_IGN |
| 0x2B72 | P INDEX_122_IGN |
| 0x2B73 | P INDEX_123_IGN |
| 0x2B74 | P INDEX_124_IGN |
| 0x2B75 | P INDEX_125_IGN |
| 0x2B76 | P INDEX_126_IGN |
| 0x2B77 | P INDEX_127_IGN |
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
| 0x3F02 | P 3F02  Ladedruckfuehler |
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
| 0x3F57 | P 3F57 (4722) Ladedrucksteller |
| 0x3F62 | P 3F62 (1280) Fahrgeschwindigkeitssignal ueber CAN |
| 0x3F70 | P 3F70  Ansauglufttemperatursensor |
| 0x3F71 | P 3F71  Ansauglufttemperatursensor |
| 0x3F72 | P 3F72  Ansauglufttemperatursensor |
| 0x3F77 | P 3F77 (4723) Ladedrucksteller |
| 0x3F80 | P 3F80  Umgebungstemperaturfuehler (nv) |
| 0x3F81 | P 3F81  Umgebungstemperaturfuehler (nv) |
| 0x3F82 | P 3F82  Umgebungstemperaturfuehler (nv) |
| 0x3F90 | P 3F90  Oeldrucksensor (nv) |
| 0x3F91 | P 3F91  Oeldrucksensor (nv) |
| 0x3F97 | P 3F97 (4724) Ladedrucksteller |
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
| 0x4605 | P 4605  Abgasnachbehandlung |
| 0x4610 | P 4610  Raildruck-Plausibilitaet druckgeregelt |
| 0x4618 | P 4618  Partikelfiltersystem |
| 0x4620 | P 4620 (12294) Raildruck-Plausibilitaet druckgeregelt |
| 0x4628 | P 4628  Partikelfiltersystem |
| 0x4630 | P 4630  Raildruck-Plausibilitaet druckgeregelt |
| 0x4637 | P 4637  Botschaft (ParkConsumer, 0x?) |
| 0x4638 | P 4638  Botschaft (ParkConsumer, 0x?) |
| 0x4640 | P 4640  Raildruck-Plausibilitaet druckgeregelt |
| 0x4645 | P 4645  Abgasrueckfuehrsteller |
| 0x4650 | P 4650  Raildruck-Plausibilitaet druckgeregelt (nv) |
| 0x4656 | P 4656  Lambdasonde Steuergeraet intern |
| 0x4660 | P 4660  Versorgungsspannung |
| 0x4661 | P 4661  Versorgungsspannung |
| 0x4665 | P 4665  Partikelfiltersystem |
| 0x4666 | P 4666  Partikelfiltersystem |
| 0x4670 | P 4670 (1603) Speisespannung 1 |
| 0x4671 | P 4671 (1602) Speisespannung 1 |
| 0x4677 | P 4677  Drosselklappe |
| 0x4680 | P 4680 (1619) Speisespannung 2 |
| 0x4681 | P 4681 (1618) Speisespannung 2 |
| 0x4687 | P 4687  Drosselklappe |
| 0x4690 | P 4690  Speisespannung 3 |
| 0x4691 | P 4691  Speisespannung 3 |
| 0x4697 | P 4697  Drosselklappe |
| 0x46A0 | P 46A0  Steuergeraet intern 1 |
| 0x46A1 | P 46A1  Steuergeraet intern 1 |
| 0x46A2 | P 46A2  Steuergeraet intern 1 |
| 0x46A3 | P 46A3  Steuergeraet intern 1 |
| 0x46A7 | P 46A7  Drallklappe |
| 0x46B0 | P 46B0  Steuergeraet intern 2 |
| 0x46B1 | P 46B1  Steuergeraet intern 2 |
| 0x46B2 | P 46B2  Steuergeraet intern 2 |
| 0x46B3 | P 46B3  Steuergeraet intern 2 |
| 0x46B7 | P 46B7  Drallklappe |
| 0x46C0 | P 46C0  Steuergeraet intern 3 |
| 0x46C7 | P 46C7  Drallklappe |
| 0x46D1 | P 46D1  Steuergeraet intern 4 |
| 0x46D2 | P 46D2  Steuergeraet intern 4 |
| 0x46D3 | P 46D3  Steuergeraet intern 4 |
| 0x46D5 | P 46D5  Verdichterbypass |
| 0x46D6 | P 46D6  Verdichterbypass |
| 0x46D7 | P 46D7  Verdichterbypass |
| 0x46D8 | P 46D8  Verdichterbypass |
| 0x46E5 | P 46E5  Boost-pressure actuator at low pressure stage |
| 0x46F6 | P 46F6  Boost-pressure actuator at low pressure stage |
| 0x4703 | P 4703  Steuergeraet intern 7 |
| 0x4707 | P 4707  Boost-pressure actuator at low pressure stage |
| 0x4708 | P 4708  Boost-pressure actuator at low pressure stage |
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
| 0x4912 | P 4912 (12800) CAN Bus B |
| 0x4913 | P 4913 (12801) CAN Bus B |
| 0x4920 | P 4920  Momenteneingriff Getriebe (nv) |
| 0x4930 | P 4930  Aussetzerkennung Zylinder 3 |
| 0x4940 | P 4940  Aussetzerkennung Zylinder 4 |
| 0x4950 | P 4950  Aussetzerkennung Zylinder 5 |
| 0x4960 | P 4960  Aussetzerkennung Zylinder 6 |
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
| 0x4C40 | P 4C40  Partikelfilterheizung |
| 0x4C41 | P 4C41  Partikelfilterheizung |
| 0x4C42 | P 4C42  Partikelfilterheizung |
| 0x4C43 | P 4C43  Partikelfilterheizung |
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
| 0xCD8B | P CD8B (12802) CAN Bus B |
| 0x0000 | P 0000 FehlerOrt nicht bedatet |
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
| 0x2854 | P 2854 VVT |
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
| 0x28EE | P 28EE Lambdasonde vor Katalysator Bank 1: Systemcheck |
| 0x28EF | P 28EF Lambdasonde vor Katalysator Bank 2: Systemcheck |
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
| 0x295E | P 295E Lambdasonden Bank 1: Signal  |
| 0x295F | P 295F Lambdasonden Bank 2: Signal |
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
| 0x296E | P 296E elektrische Wasserpumpe: Drehzahlüberwachung |
| 0x296F | P 296F Elektrische Wasserpumpe: Abschaltung |
| 0x2970 | P 2970 Elektrische Wasserpumpe: Überwachung |
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
| 0x29A6 | P 29A6 Lambdasonde vor Katalysator Bank 1: Signal |
| 0x29A7 | P 29A7 Lambdasonde vor Katalysator Bank 1: Signal |
| 0x29A8 | P 29A8 Botschaftsüberwachung: Netzwerkfehler Powermanagement |
| 0x29A9 | P 29A9 Botschaftsüberwachung: Batterie Powermanagement |
| 0x29AB | P 29AB Mommentenanforderung über CAN |
| 0x29AE | P 29AE Tankdeckel |
| 0x29AF | P 29AF Botschafts- und Signalüberwachung KL.15 |
| 0x29B5 | P 29B5 Sekundärluftsystem |
| 0x29B6 | P 29B6 Zylinderabschaltung |
| 0x2A30 | P 2A30 VVT Sensoren |
| 0x2A31 | P 2A31 VVT-Führungssensor |
| 0x2A32 | P 2A32 VVT-Führungssensor |
| 0x2A33 | P 2A33 VVT-Führungssensor |
| 0x2A34 | P 2A34 VVT-Führungssensor |
| 0x2A35 | P 2A35 VVT-Führungssensor |
| 0x2A36 | P 2A36 VVT-Führungssensor |
| 0x2A37 | P 2A37 VVT Stellmotor |
| 0x2A38 | P 2A38 VVT Lagereglerüberwachung |
| 0x2A39 | P 2A39 VVT Stellmotor |
| 0x2A3A | P 2A3A VVT Adaptionsroutine |
| 0x2A3B | P 2A3B VVT Adaptionsroutine |
| 0x2A3C | P 2A3C VVT Adaptionsroutine - E2PROM |
| 0x2A3D | P 2A3D VVT Adaptionsroutine |
| 0x2A3F | P 2A3F VVT Stellmotor |
| 0x2A40 | P 2A40 VVT Stellmotor |
| 0x2A41 | P 2A41 VVT Stellmotor |
| 0x2A42 | P 2A42 VVT Stellmotor |
| 0x2A43 | P 2A43 VVT Stellmotor |
| 0x2A44 | P 2A44 VVT Überlastungsschutz |
| 0x2A45 | P 2A45 VVT Überlastungsschutz |
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
| 0x0000 | Unbekannter Fehlerort |

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
| 0x612C | Hardwarefehler Steuergerät |
| 0x612D | Gierratenregelung Plus |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder fehler NEC |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6135 | SZL neu verbaut oder AFS neu abgleichen |
| 0x6137 | Motorlagesensorversorgung,-position,-kommunikation |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Unterspannung Klemme. 30 (< 9 Volt) |
| 0x613D | elektrischer Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x6140 | Fahrerlenkwinkelplausibilitaet |
| 0x6142 | ECO-Ventil |
| 0x6143 | SERVO-Ventil |
| 0x6144 | Selbsthemmungsueberwachung |
| 0x6145 | diversitaeres Rechnen |
| 0x6146 | Steuergeraet kann nicht in den aktiven Modus wechseln |
| 0x6147 | Motorblockade |
| 0x6148 | Ueberspannung Klemme 30 (> 17 Volt) |
| 0x6149 | kombinierte Lage- Drehzahlueberwachung |
| 0x614A | Motorlagewinkel nicht initialisiert |
| 0x614B | Betriebssystem |
| 0xCE84 | nicht benutzt |
| 0xCE85 | nicht benutzt |
| 0xCE86 | nicht benutzt |
| 0xCE87 | F-CAN Kommunikationsfehler |
| 0xCE88 | nicht benutzt |
| 0xCE89 | nicht benutzt |
| 0xCE8A | nicht benutzt |
| 0xCE8B | PT-CAN Kommunikationsfehler |
| 0xCE8C | nicht benutzt |
| 0xCE8D | nicht benutzt |
| 0xCE8E | nicht benutzt |
| 0xCE8F | nicht benutzt |
| 0xCE90 | nicht benutzt |
| 0xCE91 | nicht benutzt |
| 0xCE92 | Botschaft (Sensorcluster 3, ID=0F4) von F-CAN |
| 0xCE93 | Botschaft (Lenkradwinkel oben, ID=0C9) Initialisierungsphase |
| 0xCE94 | Botschaft (Sensorcluster 1, ID=0D8) von F-CAN |
| 0xCE95 | Botschaft (Sensorcluster 2, ID=0E3) von F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) von DSC F-CAN |
| 0xCE97 | Botschaft (Sensorcluster Status, ID=165) von F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC, ID=11E) von DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C9) von SZL F-CAN |
| 0xCE9A | Botschaft (Anhaengerdaten, ID=2E4) von PT-CAN |
| 0xCE9B | Botschaft (Status DXC Kupplung, ID=BC) von PT-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) von DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) von DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) von DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xCEA0 | Botschaft (Getriebedaten 1, ID=BA) von EGS PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | Botschaft (Status ARS, ID=1AC) von ARS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
| 0x7001 | KFC_NEC_ERR_1 |
| 0x7002 | KFC_NEC_ERR_2 |
| 0x7003 | KFC_NEC_ERR_3 |
| 0x7004 | KFC_NEC_ERR_4 |
| 0x7005 | KFC_NEC_ERR_5 |
| 0x7006 | KFC_NEC_ERR_6 |
| 0x7007 | KFC_NEC_ERR_7 |
| 0x7008 | KFC_NEC_ERR_8 |
| 0x7009 | KFC_PROG |
| 0x700A | KFC_COMM |
| 0x700B | KFC_EEPROMNR |
| 0x700C | KFC_EEPROMHR |
| 0x700D | KFC_KLD |
| 0x700E | KFC_ROM |
| 0x700F | KFC_RAM |
| 0x7010 | KFC_CORE |
| 0x7011 | KFC_RESERVED17 |
| 0x7012 | KFC_OS |
| 0x7013 | KFC_MLW_INVALID |
| 0x7014 | KFC_VX_REF |
| 0x7015 | KFC_DPSI1 |
| 0x7016 | KFC_RESERVED22 |
| 0x7017 | KFC_DPSI2 |
| 0x7018 | KFC_RESERVED24 |
| 0x7019 | KFC_AY1 |
| 0x701A | KFC_RESERVED26 |
| 0x701B | KFC_AY2 |
| 0x701C | KFC_RESERVED28 |
| 0x701D | KFC_DEH |
| 0x701E | KFC_RESERVED30 |
| 0x701F | KFC_RESERVED31 |
| 0x7020 | KFC_LWS |
| 0x7021 | KFC_MPC_POSCTRL_ERR |
| 0x7022 | KFC_VINCOMP |
| 0x7023 | KFC_CONFIG |
| 0x7024 | KFC_MPC_BOOT_FLASH |
| 0x7025 | KFC_NEC_UPDATE |
| 0x7026 | KFC_RESERVED38 |
| 0x7027 | KFC_INV_SER_SLZ |
| 0x7028 | KFC_GEST_REDUNDANT |
| 0x7029 | KFC_RESERVED41 |
| 0x702A | KFC_RESERVED42 |
| 0x702B | KFC_LOW_VOLTAGE |
| 0x702C | KFC_RESERVED44 |
| 0x702D | KFC_RESERVED45 |
| 0x702E | KFC_SENSOR_DRIVE |
| 0x702F | KFC_CANA |
| 0x7030 | KFC_CANB |
| 0x7031 | KFC_CANA_Y1 |
| 0x7032 | KFC_CANA_Y2 |
| 0x7033 | KFC_CANA_DSC_VWHL |
| 0x7034 | KFC_RESERVED52 |
| 0x7035 | KFC_CANA_DSC_REGULATION |
| 0x7036 | KFC_CANA_SZL_LWDS |
| 0x7037 | KFC_RESERVED55 |
| 0x7038 | KFC_RESERVED56 |
| 0x7039 | KFC_CANB_DSC_STAT |
| 0x703A | KFC_CANB_DME_TORQ1 |
| 0x703B | KFC_CANB_DME_TORQ3 |
| 0x703C | KFC_CANB_DME_MOTORDAT |
| 0x703D | KFC_GMK |
| 0x703E | KFC_CANB_CAS_KLEMMEN |
| 0x703F | KFC_RESERVED63 |
| 0x7040 | KFC_CANB_KI_KM |
| 0x7041 | KFC_RESERVED65 |
| 0x7042 | KFC_CANA_SZL_LWDS_INIT |
| 0x7043 | KFC_RSCAN |
| 0x7044 | KFC_RESERVED68 |
| 0x7045 | KFC_RESERVED69 |
| 0x7046 | KFC_DIV_CALC_MPC |
| 0x7047 | KFC_SPI |
| 0x7048 | KFC_CANA_AX |
| 0x7049 | KFC_CANB_EGS_GETRIEBEDATEN_1 |
| 0x704A | KFC_TBD74 |
| 0x704B | KFC_SMCOM |
| 0x704C | KFC_US |
| 0x704D | KFC_HIGH_VOLTAGE |
| 0x704E | KFC_GESTOERT_LWSYNC |
| 0x704F | KFC_GESTOERT_ABWUERG |
| 0x7050 | KFC_GESTOERT_ROLLEN |
| 0x7051 | KFC_CANA_CLU_STATUS |
| 0x7052 | KFC_AX |
| 0x7053 | KFC_LWMOTOR_MAX |
| 0x7054 | KFC_CANB_DXC_KUPPLUNG |
| 0x7055 | KFC_CANB_ANHAENGER |
| 0x7056 | KFC_ALIVE_MONITOR |
| 0x7057 | KFC_MOTORBLOCKADE |
| 0x7058 | KFC_CANB_STAT_ARS |
| 0x7059 | KFC_NECQUAL |
| 0x705A | KFC_DRIVE_TRANSITION |
| 0x705B | KFC_TBD91 |
| 0x705C | KFC_TBD92 |
| 0x705D | KFC_TBD93 |
| 0x705E | KFC_TBD94 |
| 0x705F | KFC_TBD95 |
| 0x7060 | KFC_TBD96 |
| 0x7061 | KFC_TBD97 |
| 0x7062 | KFC_TBD98 |
| 0x7101 | NKFC_CAN |
| 0x7102 | NKFC_CCU |
| 0x7103 | NKFC_EEPROMNR |
| 0x7104 | NKFC_US |
| 0x7105 | NKFC_EPROM |
| 0x7106 | NKFC_IWD |
| 0x7107 | NKFC_COMP |
| 0x7108 | NKFC_RAM |
| 0x7109 | NKFC_RELAIS |
| 0x710A | NKFC_SMCURR |
| 0x710B | NKFC_SMPOS |
| 0x710C | NKFC_SMVOLT |
| 0x710D | NKFC_PROG |
| 0x710E | NKFC_EEPROMHR |
| 0x710F | NKFC_MOD_MC |
| 0x7110 | NKFC_BRAKE |
| 0x7111 | NKFC_COMM |
| 0x7113 | NKFC_LWSSUPP |
| 0x7114 | NKFC_DPOS |
| 0x7115 | NKFC_MPC |
| 0x7116 | NKFC_MPC_SUBS_1 |
| 0x7117 | NKFC_MPC_SUBS_2 |
| 0x7118 | NKFC_MPC_SUBS_3 |
| 0x7119 | NKFC_MPC_SUBS_4 |
| 0x711A | NKFC_MPC_SUBS_5 |
| 0x711B | NKFC_MPC_SUBS_6 |
| 0x711C | NKFC_MPC_SUBS_7 |
| 0x711D | NKFC_MPC_SUBS_8 |
| 0x711E | NKFC_MPC_SUBS_9 |
| 0x7120 | NKFC_EN_CHOKE |
| 0x7121 | NKFC_ST |
| 0x7122 | NKFC_ECO |
| 0x7123 | NKFC_COMP_CAN |
| 0x7124 | NKFC_RESERVED36 |
| 0x7125 | NKFC_RESERVED37 |
| 0x7126 | NKFC_CANA_WHEELSPEED |
| 0x7127 | NKFC_LOWVOLT |
| 0x7128 | NKFC_ADC |
| 0x7129 | NKFC_SMCOM |
| 0x712A | NKFC_SPI |
| 0x712B | NKFC_OS |
| 0x712C | NKFC_ALIVE_MONITOR |
| 0x712D | NKFC_SAS_TRIALS |
| 0x712E | NKFC_SAS_FAILS |
| 0x712F | NKFC_SELFLOCK |
| 0x7130 | NKFC_HIGHVOLT |
| 0x7131 | NKFC_TBD49 |
| 0x7132 | NKFC_TBD50 |
| 0x7133 | NKFC_TBD51 |
| 0x7134 | NKFC_TBD52 |
| 0x7135 | NKFC_TBD53 |
| 0x7136 | NKFC_TBD54 |
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
| 0x6145 | P keine Ueberwachung der Winkelsummenbeziehung |
| 0x6146 | P Motortemperatursensor |
| 0x6147 | P Lenkwinkelsensorversorgung |
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
| 0x4EE9 | P Sensor Abtriebsdrehzahl - elektrisch |
| 0x4EEA | P Sensor Abtriebsdrehzahl - Plausibilität |
| 0x4EEB | P Abtriebsdrehzahlsensor - Gradient zu hoch |
| 0x4EF2 | P Sensor Getriebeoeltemperatur T_Oel |
| 0x4EF3 | P Sensor Substrattemperatur T_Substrat |
| 0x4F4B | P Gangueberwachung R |
| 0x4F4C | P Symptom Gangueberwachung |
| 0x4F4D | P Gangueberwachung 1 |
| 0x4F4E | P Gangueberwachung 2 |
| 0x4F4F | P Gangueberwachung 3 |
| 0x4F50 | P Gangueberwachung 4 |
| 0x4F51 | P Gangueberwachung 5 |
| 0x4F52 | P Gangueberwachung 6 |
| 0x4F53 | P WK fehlerhaft geoeffnet |
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
| 0x4F77 | P Fehlerhafter Positiver Motoreingriff |
| 0x4FB0 | P Interner Fehler 1 (EPROM/FLASH) |
| 0x4FB1 | P Interner Fehler 2 (EEPROM) |
| 0x4FB2 | P Interner Fehler 3 (Watchdog) |
| 0x4FB3 | P Interner Fehler 4 (VRAM) |
| 0x4FB7 | P Interner Fehler 5 (EEPROM schreiben) |
| 0x5014 | P Batteriespannung |
| 0x5015 | P Versorgungsspannung Druckregler/Magnetventile |
| 0x5016 | P Versorgungsspannung Sensorik |
| 0x5079 | P Serielle Leitung Timeout |
| 0x507A | P Serielle Leitung Positionsinfo |
| 0x507B | P Parksperrensensoren unplausibel |
| 0x507C | P Parksperre fehlerhaft eingelegt |
| 0x507D | P Parksperre fehlerhaft ausgelegt |
| 0x507E | P Tippschaltung oder M-Gassenschalter |
| 0x5087 | P Tippschaltung oder M-Gassenschalter |
| 0x5088 | P Sensoren Getriebeschalter L1-L4 |
| 0x5089 | P Status HW-Leitung passt nicht zu Getriebe-Position |
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
| 0x514A | P CAN Timeout SZM |
| 0x5150 | P CAN Timeout AHM |
| 0x51A5 | P CAN Momentenschnittstelle |
| 0x51A7 | P CAN Motordrehzahl |
| 0x51A8 | P CAN Drosselklappe/Fahrpedal |
| 0x51A9 | P CAN Raddrehzahlen |
| 0x51AD | P CAN Raddrehzahlen |
| 0x51AA | P CAN Positionsinfo |
| 0x51AB | P CAN P-Taster |
| 0x51AC | P CAN Schluessel steckt |
| 0x51AE | P CAN Bremssignal |
| 0x51A4 | P CAN11 Stand-Fehler |
| 0xCF07 | P CAN Bus off |
| 0x4F4C | S Symptom Gangueberwachung |
| 0x4F56 | S Symptom Schaltungsueberwachung |
| 0x5118 | S Resetzaehler |
| 0x5113 | S Zwangshochschaltung durch DME |
| 0x510E | S Auto-N wegen PM Abschaltung |
| 0x510F | S Auto-P wegen Absicherung EMF Komfortebene |
| 0x5110 | S Auto-P wegen Hilferuf EMF |
| 0x5111 | S Auto-N wegen Zwischenposition SZL |
| 0x5112 | S Auto-P wegen Wegfall CAN-Information SZL f |
| 0x4E20 | P Proportionalventil Gangwahl EV1 |
| 0x4E21 | P Proportionalventil Gangwahl EV2 |
| 0x4E26 | P Proportionalventil Kupplung |
| 0x4E8E | P Fehler Shiftlock |
| 0x4E90 | P Magnetventil Waehlwinkelbremse |
| 0x4E91 | P Relais Hydraulikpumpe |
| 0x4E92 | P Ansteuerung Rückfahrlicht |
| 0x4EF4 | P Sensor Waehlweg |
| 0x4EF5 | P Sensor Waehlwinkel |
| 0x4EF6 | P Sensor Kupplungsweg |
| 0x4EF7 | P Drucksensor Hydraulik |
| 0x4EF8 | P Motordrehzahl festverdrahtet |
| 0x4EF9 | P Sensor Kupplungsdrehzahl |
| 0x4EFA | P Sensor Waehlwinkel: Verschleissgrenze erreicht |
| 0x4F6C | P Fehler Getriebe/Kupplung |
| 0x4F6D | P Uebertemperatur Kupplung |
| 0x4F6E | P Hydraulikdruck zu niedrig |
| 0x4F6F | P Fehler Hydraulikpumpe |
| 0x4F72 | P Fehler Kupplung |
| 0x4F73 | P Fehler Getriebe, Gangauslegen fehlgeschlagen |
| 0x4F74 | P Fehler Getriebe, Gang unbeabsichtigt ausgelegt |
| 0x4F75 | P Fehler Getriebe, Gangeinlegen/schalten fehlerhaft oder nicht moeglich |
| 0x4F76 | P Fehler Kupplung, Drehzahl zu hoch |
| 0x4FB0 | P Interner Fehler ROM |
| 0x4FB1 | P Interner Fehler EEPROM |
| 0x4FB2 | P Fehler Ueberwachungsprozessor |
| 0x4FB3 | P Interner Fehler RAM |
| 0x4FB4 | P Fehler Hauptprozessor: Sicherheitsueberwachung |
| 0x4FB5 | P Fehler Hauptprozessor: AD Wandler |
| 0x4FB6 | P Fehler Stromversorgung Klemme 30 |
| 0x5014 | P Batteriespannung |
| 0x5016 | P Spannungsversorgung Sensoren |
| 0x5017 | P Stromversorgung Waehlhebel |
| 0x5018 | P Masse Waehlhebel |
| 0x5019 | P Masse Steuergeraet |
| 0x507E | P Analogleitungen Nr. 0 Waehlhebel |
| 0x507F | P Analogleitungen Nr. 1 Waehlhebel |
| 0x5080 | P Analogleitungen Nr. 2 Waehlhebel |
| 0x5081 | P Analogleitungen Nr. 3 Waehlhebel |
| 0x5082 | P Lenkradschaltung |
| 0x5083 | P Digitalleitung Waehlhebel |
| 0x5084 | P Hallsensoren Waehlhebel Einfachfehler |
| 0x5085 | P Hallsensoren Waehlhebel Mehrfachfehler |
| 0x5086 | P Anlassfreigabesignal fehlerhaft |
| 0x50DE | P Doppelfehler Motordrehzahlsignal |
| 0x5140 | P DME CAN Timeout |
| 0x5141 | P ASC/DSC CAN Timeout |
| 0x5142 | P Kombi CAN Timeout |
| 0x51A5 | P CAN Motormoment |
| 0x51A7 | P CAN Motordrehzahl |
| 0x51A8 | P CAN Fahrpedal |
| 0x51A9 | P CAN Kuehlwassertemperatur Motor |
| 0x51AD | P Raddrehzahlen |
| 0x51AE | P CAN Bremslichtschalter |
| 0x51B0 | P Raddrehzahlen Vorderachse |
| 0x51B1 | P Raddrehzahlen Hinterachse |
| 0x51B2 | P CAN Virtuelles Fahrpedal |
| 0x51B3 | P CAN Oeltemperatur Motor |
| 0x51B4 | P CAN Aussentemperatur |
| 0x51B5 | P CAN Bremssignal inkonsistent mit festverdrahteten Signal |
| 0x51B6 | P CAN Fehler Motoreingriff |
| 0xCF07 | P Fehler CAN Controller |
| 0x1001 | S Fehler a |
| 0x1002 | S Fehler b |
| 0x1003 | S Fehler c |
| 0x1004 | S Fehler d |
| 0x1005 | S Fehler e |
| 0x1006 | S Fehler f |
| 0x3000 | P Auswertung Motorhaubenkontakt im Stand |
| 0x3001 | P Auswertung Motorhaubenkontakt im Fahrbetrieb |
| 0x4E20 | Elektronisches Drucksteuerventil 1 |
| 0x4E21 | Elektronisches Drucksteuerventil 2 |
| 0x4E22 | Elektronisches Drucksteuerventil 3 |
| 0x4E23 | Elektronisches Drucksteuerventil 4 |
| 0x4E24 | Elektronisches Drucksteuerventil 5 |
| 0x4E25 | Elektronisches Drucksteuerventil 6 |
| 0x4E26 | Stromfehler EDS in P/R/N |
| 0x4E84 | Magnetventil  1 |
| 0x4E85 | Magnetventil  2 |
| 0x4E86 | Magnetventil  3 |
| 0x4E87 | Magnetventil  4 (Shiftlock) |
| 0x4E89 | Magnetventil 1 oder Magnetventil 2 klemmt mechanisch |
| 0x4EE8 | Turbinendrehzahlsensor |
| 0x4EE9 | Abtriebsdrehzahlsensor |
| 0x4EEB | Abtriebsdrehzahl - Gradient zu hoch |
| 0x4EF2 | Getriebeoeltemperatursensor |
| 0x4EF3 | Steuergerät-Temperatursensor |
| 0x4F81 | Übersetzungsueberwachung Kupplung A |
| 0x4F82 | Übersetzungsueberwachung Kupplung B |
| 0x4F83 | Übersetzungsueberwachung Kupplung C |
| 0x4F84 | Übersetzungsueberwachung Kupplung D |
| 0x4F85 | Übersetzungsueberwachung Kupplung E |
| 0x4F53 | Wandlerüberbrückungskupplung fehlerhaft geöffnet |
| 0x4F87 | Übersetzungsueberwachung Schaltung 1-2 |
| 0x4F88 | Übersetzungsueberwachung Schaltung 2-3 |
| 0x4F89 | Übersetzungsueberwachung Schaltung 3-4 |
| 0x4F8A | Übersetzungsueberwachung Schaltung 4-5 |
| 0x4F8B | Übersetzungsueberwachung Schaltung 5-6 |
| 0x4F8C | Übersetzungsueberwachung Schaltung 6-5 |
| 0x4F8D | Übersetzungsueberwachung Schaltung 5-4 |
| 0x4F8E | Übersetzungsueberwachung Schaltung 4-3 |
| 0x4F8F | Übersetzungsueberwachung Schaltung 3-2 |
| 0x4F90 | Übersetzungsueberwachung Schaltung 2-1 |
| 0x4F91 | Übersetzungsueberwachung Kupplung A-D |
| 0x4F92 | Übersetzungsueberwachung Kupplung A-C |
| 0x4F93 | Übersetzungsueberwachung Kupplung A-B |
| 0x4F94 | Übersetzungsueberwachung Kupplung A-E |
| 0x4F95 | Übersetzungsueberwachung Kupplung B-E |
| 0x4F96 | Übersetzungsueberwachung Kupplung C-E |
| 0x4F97 | Übersetzungsueberwachung Kupplung B-D |
| 0x4F72 | Überwachung Hillholder-Funktion |
| 0x4F6F | Hohe Drehungleichförmigkeit |
| 0x4F70 | Motorüberdrehzahl |
| 0x4F71 | Botschaft von der Instrumentenkombination fehlt während Notentriegelung Parksperre betätigt |
| 0x4F77 | Fehlerhafter Positiver Motoreingriff |
| 0x4FB0 | Getriebesteuerung:interner Fehler (EPROM/FLASH) |
| 0x4FB1 | Getriebesteuerung:interner Fehler (EEPROM) |
| 0x4FB2 | Getriebesteuerung:interner Fehler (Watchdog) |
| 0x4FB7 | Getriebesteuerung:interner Fehler (EEPROM schreiben) |
| 0x4FB8 | Getriebesteuerung:interner Fehler (Überwachungsebene 2) |
| 0x4FB9 | Getriebesteuerung:interner Fehler (TPU/QADC |
| 0x5014 | Versorgungsspannung, Getriebesteuerung |
| 0x5015 | EDS/MV Versorgungsspannung |
| 0x5016 | Sensorversorgungsspannung |
| 0x507B | Parksperrensensoren unplausibel |
| 0x507C | Parksperre fehlerhaft eingelegt |
| 0x507D | Parksperre fehlerhaft ausgelegt |
| 0x5087 | Tipp- oder M-Gassenschalter |
| 0x5088 | Getriebewahlschaltersensoren fehlerhaft |
| 0x5089 | P/N-Leitung passt nicht zu Getriebeposition |
| 0x50DC | Getriebepositionssensor |
| 0x50DD | Aktivierung zweier Ersatzfunktionen gleicher Priorität |
| 0x51A5 | Signal (Momentenschnittstelle) von der Motorsteuerung fehlerhaft |
| 0x51A6 | Fehler Motorsignal |
| 0x51A8 | Signal (Drosselklappe/Fahrpedal)von der Motorsteuerung fehlerhaft |
| 0x51AD | Botschaft (Raddrehzahlen) von der DSC fehlt |
| 0x51AA | Signal (Positionsinformation) vom Schaltzentrum Lenksäule fehlt |
| 0x51AB | Signal (P-Taster) vom Schaltzentrum Lenksäule fehlerhaft |
| 0x51AC | Signal (Identifikationsgeber steckt) vom Car Access System fehlerhaft |
| 0x51AE | Botschaft (Bremslichtschalter) von der Motorsteuerung unplausibel |
| 0xCF07 | Kommunikationsfehler:PT-CAN |
| 0xCF31 | Botschaften von der Motorsteuerung fehlen |
| 0xCF32 | Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0xCF16 | Botschaft von der Motorsteuerung:Drehmoment 3 |
| 0xCF17 | Botschaft von der Motorsteuerung:Motordaten |
| 0xCF18 | Botschaft von der Motorsteuerung:Fahrgeschwindigkeitsreglert |
| 0xCF19 | Botschaft von der DSC:Radgeschwindigkeit PT-CAN |
| 0xCF1A | Botschaft von der DSC:Status DSC PT-CAN |
| 0xCF1B | Botschaft von der DSC:Geschwindigkeit PT-CAN |
| 0xCF1C | Botschaft von der DSC:Drehmomentanforderung |
| 0xCF1D | Botschaft von der DSC:Status HDC |
| 0xCF1E | Botschaft von der DSC:Radtoleranzabgleich |
| 0xCF1F | Botschaft von der CAS: Klemmenstatus |
| 0xCF20 | Botschaft von der CAS: ZV und Klappenzustand |
| 0xCF21 | Botschaft von der Instrumentenkombination:Kilometerstand Reichweite |
| 0xCF22 | Botschaft von der Instrumentenkombination:Aussentemperatur Relativzeit |
| 0xCF23 | Botschaft von der Instrumentenkombination:Status KOMBI |
| 0xCF24 | Botschaft von der Parkbremse (EMF): Verzögerungsanforderung |
| 0xCF25 | Botschaft vom Satellit Sitz Fahrer (SSFA): Sitzbelegung Gurtkontakte |
| 0xCF26 | Botschaft von der Actice Cruise Control(ACC): Drehmomentanforderung |
| 0xCF27 | Botschaft vom Schaltzentrum Lenksäule (SZL): Bedienung Getriebewahlschalter |
| 0xCF29 | Botschaft vom Anhängermodul: Status Anhänger |
| 0xCF2A | Botschaft vom Schaltzentrum Mittelkonsole (SZM): Fahrzeugmodus |
| 0xCF2B | Botschaft vom Längsdynamikmanagement (LDM): Anforderung Radmoment Antriebsstrang |
| 0xCF2C | Botschaft vom Verteilergetriebe:DXC1 |
| 0xCF33 | Botschaft von der Motorsteuerung fehlt |
| 0xCF34 | Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0xCF35 | Botschaften vom CAR Access System fehlen |
| 0xCF36 | Botschaften von der Instrumentenkombination fehlen |
| 0x4F7A | Botschaft vom Verteilergetriebe fehlerhaft |
| 0x4FBA | Aktuatoransteuerung und Wählhebelposition unplausibel, Geschwindigkeit über Schwellwert |
| 0x4FBB | Aktuatoransteuerung und Wählhebelposition unplausibel, Geschwindigkeit unter Schwellwert |
| 0x4EFB | Getriebe-Übertemperatur |
| 0x4EFD | Getriebesteuerung:internes Bauteil defekt (CG122-HS-FET) |
| 0x4EFE | Getriebesteuerung:internes Bauteil defekt (CG122), Spannungseingänge |
| 0x4EFF | Ölschädigung |
| 0x4EFC | Getriebesteuerung:internes Bauteil defekt (CG122) |
| 0x4F4D | Fehler Motorleerlaufsolldrehzahl |
| 0x4F9C | Fehler Getriebestrangverstärkung |
| 0x4F9B | Übersetzungsüberwachung Schaltung 3-1 |
| 0x4F9A | Übersetzungsüberwachung Schaltung 4-2 |
| 0x4F99 | Übersetzungsüberwachung Schaltung 5-3 |
| 0x4F98 | Übersetzungsüberwachung Schaltung 6-4 |
| 0x51B0 | Botschaft (Bremslichtschalter) von der DSC unplausibel |
| 0x511B | Fehler Codierung |
| 0x4E90 | Elektronisches Drucksteuerventil 7 oder Magnetventil 1 |
| 0x51B1 | Überwachung Sitzbelegungssignal über CAN  |
| 0x51B2 | Überwachung Türkontaktsignal über CAN  |
| 0xCF2D | Botschaft vom CAS: Nachlaufzeit Stromversorgung |
| 0xCF2E | Positionsinformation über LIN vom Steuergerät GWS |
| 0xCF2F | Botschaft (über LIN) vom GWS:elektrischer Getriebewahlschalter |
| 0xCF30 | Botschaft (über CAN) vom GWS:elektrischer Getriebewahlschalter |
| 0x4FB4 | Getriebesteuerung:interner Fehler (Überwachungsebene 2)bei ZF-E-Schaltung |
| 0x4F6C | Fehler Getriebeaufnahmemoment |
| 0x4F6D | Fehler Getriebeaufnahmemoment |
| 0x4F6E | Fehler Pumpenaufnahmemoment |
| 0x4E8A | Überwachung Positionsventil |
| 0x4F80 | Übersetzungsueberwachung Symptom Gangueberwachung |
| 0x4F86 | Übersetzungsueberwachung Symptom Schaltungsueberwachung |
| 0x5118 | Infozähler1 - EGS-Reset |
| 0x5113 | Infozähler2 - DME-Zwangshochschaltung |
| 0x510D | Infozähler3 - Auto-P wegen CAS |
| 0x510F | Infozähler4 - Auto-P EMF |
| 0x5110 | Infozähler5 - Auto-P EMF |
| 0x5116 | Infozähler6 - GWS Einfachfehler |
| 0x5117 | Infozähler7 - Zwischenstellung GWS |
| 0x5114 | Funktionalität der Hotmode Stufe 1,2 oder 3 ausgelöst |
| 0x5115 | Anzeige für Hotmode Stufe 1 oder 2 ausgelöst |
| 0x5119 | Reset im Bosch SW-Teil |
| 0x511A | Reset im ZF SW-Teil |
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
| 0x5D4C | Sicherheitsventil |
| 0x5D4D | Richtungsventil |
| 0x5D4E | Proportionalventil VA |
| 0x5D4F | Proportionalventil HA |
| 0x5D50 | Versorgung Drucksensor VA |
| 0x5D51 | Versorgung Drucksensor HA |
| 0x5D52 | Versorgung Schaltstellungssensor |
| 0x5D53 | Versorgung Querbeschleunigungssensor |
| 0x5D54 | Lernen Drucksensor VA |
| 0x5D55 | Lernen Drucksensor HA |
| 0x5D56 | Lernen Hoehenstandssensor |
| 0x5D57 | Lernen Querbeschleunigungssensor |
| 0x5D5A | Konsistenz LWS |
| 0x5D5B | Konsistenz Druck VA |
| 0x5D5C | Konsistenz Druck HA |
| 0x5D5E | Konsistenz Strommessung Propventile |
| 0x5D5F | Konsistenz Strommessung Schaltventile |
| 0x5D60 | Oelstandssensor |
| 0x5D61 | KL30 ARS-SG |
| 0x5D62 | ECU intern |
| 0x5D64 | Codierdatenfehler |
| 0x5D65 | Status Richtungsventil |
| 0x5D67 | Konsistenz Fahrgestellnummer |
| 0x5D69 | Fehlerspeicher defekt |
| 0x5D6A | VDM Wankratenüberwachung |
| 0x5D6B | Oelstandssensorelektronik |
| 0x5D6C | Inbetriebnahme: RV bestromt |
| 0x5D6D | Inbetriebnahme: RV unbestromt |
| 0x5D6E | Inbetriebnahme: FS und VA-Ventil unbestr. zu od. Sensor p_VA defekt |
| 0x5D6F | Inbetriebnahme: Sensor p_HA defekt |
| 0x5D70 | Inbetriebnahme: Tankruecklauf zu oder (FS und HA-Ventil unbestromt zu) |
| 0x5D71 | Inbetriebnahme: FS unbestr. zu u. (Ventilblock dicht od. Tankrueckl. zu od. HA unbestr. zu) |
| 0x5D72 | Inbetriebnahme: FS unbestr. zu |
| 0x5D73 | Inbetriebnahme: FS u. VA-Ventil unbestr. zu |
| 0x5D74 | Inbetriebnahme: Schwenkmotor VA fest |
| 0x5D75 | Inbetriebnahme: FS-Drossel oder VA-Ventil haengt offen od. beide DS od. Rueckschl.-ventil links defekt |
| 0x5D76 | Inbetriebnahme: Drucksensoren vertauscht |
| 0x5D77 | Inbetriebnahme: Druckaufbau VA zu langsam oder Kennlinie VA (VBL Problem) od. Sensor pVA defekt |
| 0x5D78 | Inbetriebnahme: VA-Ventil haengt geschlossen |
| 0x5D79 | Inbetriebnahme: Summen Leck VA oder Sensor pVA defekt |
| 0x5D7A | Inbetriebnahme: Kennline VA oder Sensor pVA defekt |
| 0x5D7D | Inbetriebnahme: Schwenkmotor HA fest |
| 0x5D7E | Inbetriebnahme: Sensor pVA oder Sensor pHA defekt |
| 0x5D7F | Inbetriebnahme: HA_Ventil haengt geschlossen |
| 0x5D80 | Inbetriebnahme: Druckaufbau HA zu langsam oder Kennlinie HA (VBL Problem) |
| 0x5D81 | Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil links defekt |
| 0x5D82 | Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil rechts defekt |
| 0x5D83 | Inbetriebnahme: Dynamikfehler VA/HA |
| 0x5D84 | Inbetriebnahme: Druckaufbau (VA und HA) zu langsam |
| 0x5D85 | Inbetriebnahme: Kennline HA |
| 0x5D8A | Inbetriebnahme: Kennlinienfehler VA |
| 0x5D8B | Inbetriebnahme: Kennlinienfehler HA |
| 0x626C | Konsistenz Querbeschleunigung Can Signal |
| 0x626D | Konsistenz Querbeschleunigung ARS Sensor |
| 0x6271 | Predrive Check: FS und VA-Ventil unbestromt zu oder Sensor P_VA defekt |
| 0x6272 | Predrive Check: FS und HA-Ventil unbestromt zu |
| 0x6273 | Predrive Check: FS Okay, VA- und HA-Ventil bestromt offen |
| 0x6274 | Predrive Check: FS unbestromt zu und VA Okay |
| 0x6275 | Predrive Check: FS unbestromt zu und VA-Ventil offen, HA-Ventil Okay |
| 0x6276 | Predrive Check: VA-Ventil bestromt offen |
| 0x6277 | Predrive Check: FS oder HA oder VA-Ventilstrom zu hoch |
| 0x6278 | Predrive Check: Umlaufdruck temporaer zu hoch (evtl. Oel zu kalt) |
| 0x6279 | Predrive Check: Umlaufdruck dauerhaft zu hoch |
| 0x627A | Predrive Check: Motor in Fahrt gestoppt |
| 0x627B | Predrive Check: Zuschalten nach Reset waehrend der Fahrt |
| 0x6288 | Inbetriebnahme: aQuer Analogsensor defekt |
| 0x6289 | Inbetriebnahme: aQuer Analogsensor Vorzeichenfehler |
| 0x628A | Inbetriebnahme: LL- oder Predrive Fehler verhindert Inbetriebnahme Start |
| 0x628B | Inbetriebnahme: Inbetriebnahme durch Tester abgebrochen |
| 0xD1C7 | PT-CAN Bus Off |
| 0xD1C8 | F-CAN Bus Off |
| 0xD1DD | CAN Beschleunigung Fahrzeug Quer DSC |
| 0xD1DF | CAN Geschwindigkeit Fahrzeug |
| 0xD1E4 | CAN Lenkradwinkel |
| 0xD1E8 | CAN Gradient Lenkradwinkel |
| 0xD1E9 | Fahrgestellnummer |
| 0xD1F1 | CAN Botschaft Geschwindigkeit |
| 0xD1F5 | F-CAN STWA_TOP |
| 0xD1F6 | F-CAN RTR_PO_AVL |
| 0xD1F8 | F-CAN RATE_ANG_VDC_EST |
| 0xD1FD | F-CAN ACLN_ACRO_1 |
| 0x7D62 | ECU intern |
| 0x7D63 | ECU intern Software |
| 0x7D69 | Fehlerspeicher defekt |
| 0x826C | Konsistenz Querbeschleunigung Can Signal |
| 0xF1DD | CAN Beschleunigung Fahrzeug Quer DSC |
| 0xF1DE | CAN Winkelgeschwindigkeit Gier DSC |
| 0xF1E0 | CAN Aussentemperatur |
| 0xF1E1 | CAN Temperatur Motor |
| 0xF1E2 | CAN Status Klemme 15 |
| 0xF1E3 | CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xF1E4 | CAN Lenkradwinkel |
| 0xF1E5 | CAN Drehzahl Motor |
| 0xF1EB | CAN Kilometerstand |
| 0xF1F2 | CAN Botschaft Klemmenstatus |
| 0xF1F5 | F-CAN STWA_TOP |
| 0xF1F6 | F-CAN RTR_PO_AVL |
| 0xF1F8 | F-CAN RATE_ANG_VDC_EST |
| 0xF1F9 | F-CAN HGLV_FLH |
| 0xF1FA | F-CAN HGLV_FRH |
| 0xF1FB | F-CAN HGLV_RLH |
| 0xF1FC | F-CAN HGLV_RRH |
| 0xF1FD | F-CAN ACLN_ACRO_1 |
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
| 0x7D50 | Versorgung Drucksensor VA |
| 0x7D51 | Versorgung Drucksensor HA |
| 0x7D52 | Versorgung Schaltstellungssensor |
| 0x7D53 | Versorgung Querbeschleunigungssensor |
| 0x7D5A | Konsistenz LWL |
| 0x7D67 | Konsistenz Fahrgestellnummer |
| 0x7D69 | Fehlerspeicher defekt |
| 0x826C | Konsistenz Querbeschleunigung Can Signal |
| 0x8278 | Predrive Check: Umlaufdruck temporaer zu hoch (evtl. Oel zu kalt) |
| 0x827A | Predrive Check: Motor in Fahrt gestoppt |
| 0x827B | Predrive Check: Zuschalten nach Reset waehrend der Fahrt |
| 0xF1DD | CAN Beschleunigung Fahrzeug Quer DSC |
| 0xF1DE | CAN Winkelgeschwindigkeit Gier DSC |
| 0xF1DF | CAN Geschwindigkeit Fahrzeug |
| 0xF1E0 | CAN Aussentemperatur |
| 0xF1E1 | CAN Temperatur Motor Kuehlwasser |
| 0xF1E2 | CAN Status Klemme 15 |
| 0xF1E3 | CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xF1E4 | CAN Lenkradwinkel |
| 0xF1E5 | CAN Drehzahl Motor |
| 0xF1E8 | CAN Gradient Lenkradwinkel |
| 0xF1EB | CAN Kilometerstand |
| 0xF1ED | CAN Status DSC |
| 0xF1F1 | CAN Botschaft Geschwindigkeit |
| 0xF1F2 | CAN Botschaft Klemmenstatus |
| 0xFFFF | unbekannter Fehlerort |

### ID_24

| ORT | ORTTEXT |
| --- | --- |
| 0xA688 | P Fehler am Hallsenor Verdeckklappe geöffnet |
| 0xA689 | P Fehler am Hallsenor Verdeckklappe unten links |
| 0xA68A | P Fehler am Hallsenor Verdeckklappe unten rechts |
| 0xA68B | P Fehler am Hallsenor Verdeckklappe verriegelt links |
| 0xA68C | P Fehler am Hallsenor Verdeckklappe verriegelt rechts |
| 0xA68D | P Fehler am Hallsenor Windlauf verriegelt |
| 0xA68E | P Fehler am Hallsenor Windlauf entriegelt |
| 0xA68F | P Fehler am Hallsensor Heckscheibe unten |
| 0xA690 | P Drehwinkelgeber Hauptsäule |
| 0xA691 | P Drehwinkelgeber Finnen |
| 0xA692 | P Versorgung Hallsensoren Stecker A |
| 0xA693 | P Versorgung Hallsensoren Stecker B |
| 0xA694 | P Versorgung Drehwinkelgeber |
| 0xA695 | P Bedientaster Öffnen |
| 0xA696 | P Bedientaster Schließen |
| 0xA697 | P Schalter Verdeckkastenboden |
| 0xA698 | P Temperatursensor der Druckpumpe |
| 0xA699 | P Heckscheibenmotor |
| 0xA69A | P Windlaufmotor |
| 0xA69B | P Ventil V1 |
| 0xA69C | P Ventil V2 |
| 0xA69D | P Ventil V3 |
| 0xA69E | P Relais RPS Pumpe Stange |
| 0xA69F | P Relais RPK Pumpe Kolben |
| 0xA6A0 | P Relais 5. Scheibe Auf |
| 0xA6A1 | P Relais 5. Scheibe Ab |
| 0xA6A2 | P interner Prozessorfehler |
| 0xA6A3 | P Codierdatenfehler |
| 0xA6A7 | P Energiesparmode aktiv |
| 0xD204 | P K-CAN Physikalischer Busfehler |
| 0xD205 | P K-CAN BusOff |
| 0xD206 | P Timeout Nachricht ATEMP |
| 0xD207 | P Timeout Nachricht GESCHWINDIGKEIT |
| 0xD208 | P Timeout Nachricht KLEMMENSTATUS |
| 0xD209 | P Timeout Nachricht KILOMETERSTAND |
| 0xA6A4 | P Überschreitung der Geschwindigkeit |
| 0xFFFF | unbekannter Fehlerort |

### ID_25

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_26

| ORT | ORTTEXT |
| --- | --- |
| 0xA7E8 | RSE SG defekt |
| 0xA7E9 | Energiesparmode aktiv |
| 0xA7EA | Audio KH_1 |
| 0xA7EB | Audio KH_2 |
| 0xA7EC | Audio KH_IR |
| 0xA7ED | Audio AUX_Out |
| 0xA7EE | AUX_In_1 (Front) |
| 0xA7EF | AUX_In_2 (Kabelbaum) |
| 0xA7F0 | Übertemperatur |
| 0xA7F1 | Über- / Unterspannung |
| 0xA7F3 | SW Reset |
| 0xD284 | Bus Low Leitungsfehler |
| 0xD287 | Bus Kommunikationsfehler |
| 0x9308 | RSE SG defekt |
| 0x9309 | Energiesparmode aktiv |
| 0x930A | Audio KH_1 |
| 0x930B | Audio KH_2 |
| 0x930C | Audio KH_IR |
| 0x930D | Audio AUX_Out |
| 0x930E | AUX_In_1 (Front) |
| 0x930F | AUX_In_2 (Kabelbaum) |
| 0x9310 | Übertemperatur |
| 0x9311 | Über- / Unterspannung |
| 0x9312 | SPI Fehler |
| 0x9313 | SW Reset |
| 0x9314 | TriMedia Fehler |
| 0x9315 | Download Fehler |
| 0x9316 | Fehler Betriebsspannungen |
| 0x9317 | Fehler VGC_STATE |
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
| 0x5d8d | 5D8D - Rueckfoerderpumpe: RFP steht. Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AUS, aber erwartet: AN - Gutpruefung nach behobenem Defekt erforderlich ! - Sicherung oder Pumpenmotorrelais defekt ? |
| 0x5d8e | 5D8E - Rueckfoerderpumpe: Nachlauf zu kurz - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5d8f | 5D8F - Infoeintrag: Rueckfoerderpumpe: Freigabe des Pumpenanlaufzyklus. Kein Fehler: Gutpruefung nach behobenem Defekt erfolgt. |
| 0x6c8c | 6C8C - Rueckfoerderpumpe: MRD Motorrelais Spannungsversorgung NIO |
| 0x6c8d | 6C8D - Rueckfoerderpumpe: MR Motorrelais Kurzschluss nach Masse |
| 0x6c8e | 6C8E - Rueckfoerderpumpe: MR Motorrelais Ueberlast erkannt |
| 0x5d90 | 5D90 - Ventil Relais: VR offen. Fehler verursacht durch zu viele erkannte Einzelventilfehler - Sicherung defekt ? |
| 0x5d91 | 5D91 - Ventil Relais: VR offen. Relais schliesst nicht waehrend Startup-Test - Sicherung defekt? |
| 0x5d92 | 5D92 - Ventil Relais: VR-Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. |
| 0x5d93 | 5D93 - Ventil Relais: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse ueber Startup-Test erkannt. |
| 0x5d94 | 5D94 - Ventil Relais: VR steckt in geschlossener Position. Relais schaltet waehrend Startup-Test nicht ab. |
| 0x5d95 | 5D95 - Ventil Relais: VR offen, Spannungsversorgung_VR waehrend Startup-Test zu niedrig (verglichen mit Uz Versorgungsspannung_Klemme_15); Sicherung defekt? |
| 0x5d96 | 5D96 - Ventil Relais: Kurzschluss zu Uz Versorgungsspannung_Klemme_15 im zyklischen Ventilrelais-Test festgestellt. |
| 0x5d97 | 5D97 - Ventil Relais: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse waehrend zyklischem Ventilrelais-Test registriert. |
| 0x5d98 | 5D98 - Einlassventil (EV) Vorne Links: Fehler bei zyklischerm Ventil- und Relaistest. |
| 0x5d99 | 5D99 - Einlassventil (EV) Vorne Links: Allgemeiner Fehler. |
| 0x5d9b | 5D9B - Einlassventil (EV) Vorne Links: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5dda | 5DDA - Einlassventil (EV) Vorne Links: Masse Kurzschluß erkannt. |
| 0x5ddb | 5DDB - Einlassventil (EV) Vorne Links: Nicht zuordenbarer Fehler. |
| 0x5d9d | 5D9E - Auslassventil (AV) Vorne Links: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5d9e | 5D9E - Auslassventil (AV) Vorne Links: Allgemeiner Fehler. |
| 0x5de5 | 5DE5 - Auslassventil (AV) Vorne Links: Masse Kurzschluß erkannt. |
| 0x5de6 | 5DE6 - Auslassventil (AV) Vorne Links: Nicht zuordenbarer Fehler. |
| 0x5da1 | 5DA1 - Einlassventil (EV) Vorne Rechts Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da2 | 5DA2 - Einlassventil (EV) Vorne Rechts Allgemeiner Fehler. |
| 0x5e94 | 5E94 - Einlassventil (EV) Vorne Rechts: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt? |
| 0x5e29 | 5E29 - Einlassventil (EV) Vorne Rechts: Masse Kurzschluß erkannt. |
| 0x5e2a | 5E2A - Einlassventil (EV) Vorne Rechts: Nicht zuordenbarer Fehler. |
| 0x5da6 | 5DA6 - Auslassventil (AV) Vorne Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da7 | 5DA7 - Auslassventil (AV) Vorne Rechts: Allgemeiner Fehler. |
| 0x5e2b | 5E2B - Auslassventil (AV) Vorne Rechts: Masse Kurzschluß erkannt. |
| 0x5e78 | 5E78 - Auslassventil (AV) Vorne Rechts: Nicht zuordenbarer Fehler. |
| 0x5daa | 5DAA - Einlassventil (EV) Hinten Links: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dab | 5DAB - Einlassventil (EV) Hinten Links: Allgemeiner Fehler. |
| 0x5dad | 5DAD - Einlassventil (EV) Hinten Links: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5e47 | 5E47 - Einlassventil (EV) Hinten Links: Masse Kurzschluß erkannt. |
| 0x5e48 | 5E48 - Einlassventil (EV) Hinten Links: Nicht zuordenbarer Fehler. |
| 0x5daf | 5DAF - Auslassventil (AV) Hinten Links: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db0 | 5DB0 - Auslassventil (AV) Hinten Links: Allgemeiner Fehler. |
| 0x5e6e | 5E6E - Auslassventil (AV) Hinten Links: Masse Kurzschluß erkannt. |
| 0x5e6f | 5E6F - Auslassventil (AV) Hinten Links: Nicht zuordenbarer Fehler. |
| 0x5db3 | 5DB3 - Einlassventil (EV) Hinten Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db4 | 5DB4 - Einlassventil (EV) Hinten Rechts: Allgemeiner Fehler. |
| 0x5e71 | 5E71 - Einlassventil (EV) Hinten Rechts: Masse Kurzschluß erkannt. |
| 0x5e73 | 5E73 - Einlassventil (EV) Hinten Rechts: Nicht zuordenbarer Fehler. |
| 0x5db8 | 5DB8 - Auslassventil (AV) Hinten Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db9 | 5DB9 - Auslassventil (AV) Hinten Rechts: Allgemeiner Fehler. |
| 0x5e7c | 5E7F - Auslassventil (AV) Hinten Rechts: Masse Kurzschluß erkannt. |
| 0x5e7d | 5E7D - Auslassventil (AV) Hinten Rechts: Nicht zuordenbarer Fehler. |
| 0x5dbc | 5DBC - Ventil USV1: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dbd | 5DBD - Ventil USV1: Allgemeiner Fehler. |
| 0x5dbf | 5DBF - Ventil USV1: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5e7f | 5E7F - Ventil (USV1): Masse Kurzschluß erkannt. |
| 0x5e80 | 5E80 - Ventil (USV1): Nicht zuordenbarer Fehler. |
| 0x5dc1 | 5DC1 - Ventil USV2: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc2 | 5DC2 - Ventil USV2: Allgemeiner Fehler. |
| 0x5f4f | 5F4F - Ventil (USV2): Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5e81 | 5E81 - Ventil (USV2): Masse Kurzschluß erkannt. |
| 0x5e82 | 5E82 - Ventil (USV2): Nicht zuordenbarer Fehler. |
| 0x5dc6 | 5DC6 - Ventil HSV1: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc7 | 5DC7 - Ventil HSV1: Allgemeiner Fehler. |
| 0x5dc8 | 5DC8 - Ventil (HSV1): Masse Kurzschluß erkannt. |
| 0x5dc9 | 5DC9 - Ventil (HSV1): Nicht zuordenbarer Fehler. |
| 0x5dca | 5DCA - Ventil HSV2: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dcb | 5DCB - Ventil HSV2: Allgemeiner Fehler. |
| 0x5dcc | 5DCC - Ventil (HSV2): Masse Kurzschluß erkannt. |
| 0x5dcd | 5DCD - Ventil (HSV2): Nicht zuordenbarer Fehler. |
| 0x5dce | 5DCE - Uz Versorgungsspannung_Klemme_15-Fehler: leichte Unterspannung (Spannung zu niedrig). |
| 0x5dcf | 5DCF - Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). |
| 0x5dd0 | 5DD0 - Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). |
| 0x5dd1 | 5DD1 - Uz Versorgungsspannung_Klemme_15-Fehler: Kurzschluss einer Raddrehzahlfuehler-Spannungsleitung auf UBatt. (Stromfluss durch den ASPxx-Pin des Drehzahlfuehler_Inputamplifiers). |
| 0x5dd2 | 5DD2 - Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz. |
| 0x5dd3 | 5DD3 - DSC-ECU: ECU-intern: Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler). |
| 0x5dd4 | 5DD4 - DSC-ECU: ECU-intern: Raddrehzahlfuehler-Driverchip: Fehler bei Versorgungsspannung/Masse. Reset-Response-Test fehlerhaft. |
| 0x5dd5 | 5DD5 - DSC-ECU: ECU-intern: Enable-Leitung kann nicht eingeschaltet werden (Startup-Test Enable high). |
| 0x5dd6 | 5DD6 - DSC-ECU: ECU-intern: Enable-Leitung kann nicht ausgeschaltet werden (Startup-Test Enable low). |
| 0x5dd8 | 5DD8 - DSC-ECU: ECU-intern: System Startup-Synchronisations-Timeout aufgetreten. |
| 0x5dd9 | 5DD9 - DSC-ECU: ECU-intern: SP-Interface: Hardwarfehler erkannt. |
| 0x5ddc | 5DDC - DSC-ECU: ECU-intern: Het-SP-Interface sendet Fehler Nachricht nicht korrekt uebertragen. |
| 0x5ddd | 5DDD - DSC-ECU: ECU-intern: Zugang in Uebersetzungstabelle des Het-SP-Interface ist nicht moeglich. |
| 0x5dde | 5DDE - DSC-ECU: ECU-intern: Watchdog-Ueberwachung meldet: Datenfehler aufgetreten. |
| 0x5ddf | 5DDF - DSC-ECU: ECU-intern: Watchdog-Ueberwachung meldet: Status nicht korrekt. |
| 0x5de0 | 5DE0 - DSC-ECU: ECU-intern: Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15. |
| 0x5de1 | 5DE1 - DSC-ECU: ECU-intern: Clockstatus des SP-Interface zeigt fehlende Uhr. |
| 0x5de2 | 5DE2 - DSC-ECU: ECU-intern: DePwm Status: Software-/ Hardwarekonfigurationen passen nicht zusammen (DF11i/s). |
| 0x5de3 | 5DE3 - DSC-ECU: ECU-intern: Status_Raddrehzahlfuehlerausgang des SP-Interface passt nicht zur Konfiguration. |
| 0x5de4 | 5DE4 - DSC-ECU: ECU-intern: Boot Block ROM Checksummentest-Fehler |
| 0x5dee | 5DEE - DSC-ECU: ECU-intern: Fehlererkennungssystem-Fehler in Status/Transfer: SP-Interface-Fehler im Algorithm Server |
| 0x5def | 5DEF - DSC-ECU: ECU-intern: ROM Checksummentest-Fehler. |
| 0x5df0 | 5DF0 - DSC-ECU: ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5df1 | 5DF1 - DSC-ECU: ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5df2 | 5DF2 - DSC-ECU: ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5df3 | 5DF3 - DSC-ECU: ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5df4 | 5DF4 - DSC-ECU: ECU-intern: ADC Kalibrierungs-Fehler. |
| 0x5df5 | 5DF5 - DSC-ECU: ECU-intern: Can RAM Checkpatterntest-Fehler. |
| 0x5df6 | 5DF6 - DSC-ECU: ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task)-Timing. |
| 0x5df7 | 5DF7 - DSC-ECU: ECU-intern: Betriebssystem: Geringe Background-Rechenzyklus(Task)- Aktivitaet - System ueberlastet ! |
| 0x5df8 | 5DF8 - DSC-ECU: ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5df9 | 5DF9 - DSC-ECU: ECU-intern: Betriebssystem: Rechenzyklus (Task) fehlt bzw. nicht aktiviert. |
| 0x5dfa | 5DFA - DSC-ECU: ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5dfb | 5DFB - DSC-ECU: ECU-intern: Datenabbruch -> Mikrocontroller-Mode: Daboard. |
| 0x5dfc | 5DFC - DSC-ECU: ECU-intern: Programm Abbruch -> Mikrocontroller-Mode: Paboard. |
| 0x5dfd | 5DFD - DSC-ECU: ECU-intern: Illegalen Opcode gefunden -> Mikrocontroller Mode: undefiniert. |
| 0x5dfe | 5DFE - DSC-ECU: ECU-intern: ROM Checksummentest-Fehler. |
| 0x5dff | 5DFF - DSC-ECU: ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5e00 | 5E00 - DSC-ECU: ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5e01 | 5E01 - DSC-ECU: ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5e02 | 5E02 - DSC-ECU: ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5e03 | 5E03 - DSC-ECU: ECU-intern: Allgemeiner Fehler des Ventiltreiber-Status oder -antriebes durch zyklischen Ventilrelaistest registriert. |
| 0x5e04 | 5E04 - DSC-ECU: ECU-intern: Fehler der permanenten Enable-Leitungsueberwachung (Enable ist low nach Startup-Test). |
| 0x5e05 | 5E05 - DSC-ECU: ECU-intern: Nicht moeglich SP-Interface-Transfer zu planen. |
| 0x5e06 | 5E06 - DSC-ECU: ECU-intern: Planmaessige Datenuebertragung nicht verfuegbar. |
| 0x5e07 | 5E07 - DSC-ECU: ECU-intern: Datenuebertragungsfehler (Antwort des SP-Interface Haendler). |
| 0x5e08 | 5E08 - DSC-ECU: ECU-intern: Planmaessiger Build-in-self-test (BIST) nicht korrekt (BIST Kontinuität). |
| 0x5e09 | 5E09 - DSC-ECU: ECU-intern: Build-in-self-test (BIST)-Signaturen verschieden, CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0a | 5E0A - DSC-ECU: ECU-intern: Allgemeiner Steuergeraete-Fehler. |
| 0x5e0b | 5E0B - DSC-ECU: ECU-intern: FPS Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. |
| 0x5e0c | 5E0C - DSC-ECU: ECU-intern: Build-in-self-test(BIST)-Signaturen verschieden. CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0d | 5E0D - DSC-ECU: ECU-intern: Timeout des Build-in-self-test(BIST). Antwort durch Algorithm-Server. |
| 0x5e0e | 5E0E - DSC-ECU: ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus(Task)-Timing. |
| 0x5e0f | 5E0F - DSC-ECU: ECU-intern: Betriebssystem Rechenzyklus (Task) fehlt bzw. nicht aktiviert. |
| 0x5e10 | 5E10 - DSC-ECU: ECU-intern: Betriebssystem: geringe Background Rechenzyklus(Task)-Aktivität - System ueberlastet ! |
| 0x5e11 | 5E11 - DSC-ECU: ECU-intern: Undefiniertes Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5e12 | 5E12 - DSC-ECU: ECU-intern: Illegaler Opcode gefunden -> Mikrocontroller Mode: undefiniert. |
| 0x5e13 | 5E13 - DSC-ECU: ECU-intern: Programm Abbruch -> Mikrocontroller Mode: Paboard. |
| 0x5e14 | 5E14 - DSC-ECU: ECU-intern: Daten Abbruch -> Mikrocontroller Mode: Daboard. |
| 0x5e15 | 5E15 - DSC-ECU: ECU-intern: FPS Status Transfer: SP-Interface timeout im System-Server. |
| 0x5e16 | 5E16 - DSC-ECU: ECU-intern: FPS Fehlertransfer: SP-Interface timeout im System-Server. |
| 0x5e17 | 5E17 - DSC-ECU: ECU-intern: FPS Status Transfer: SP-Interface Fehler im System-Server. |
| 0x5e18 | 5E18 - DSC-ECU: ECU-intern: Datenmenge fuer Peripherie SP-Interface ueberschreitet Bufferlaenge. |
| 0x5e19 | 5E19 - DSC-ECU: ECU-intern: Serial-Peripheral-Interface (SPI): ID Anfrage nicht akzeptiert. |
| 0x5e1a | 5E1A - DSC-ECU: ECU-intern: Serial-Peripheral-Interface (SPI): Uebersetzungsfehler multi IC. |
| 0x5e1b | 5E1B - DSC-ECU: ECU-intern: Serial-Peripheral-Interface (SPI): Uebersetzungsfehler im EEPROM. |
| 0x5e1c | 5E1C - DSC-ECU: ECU-intern: Bandluecken Spannung ausserhalb gueltigem Bereich. |
| 0x5e1d | 5E1D - DSC-ECU: ECU-intern: ADC Umwandlung Start-Fehler. |
| 0x5e1e | 5E1E - ECU-Fehler: Flash Reprogrammierungszyklus ist fehlgeschlagen (Zellen nicht reprogrammiert) |
| 0x5e1f | 5E1F - Info Eintrag: DSC-ECU: Flash Reprogrammierungszyklus erfolgreich ausgefuehrt (Info) |
| 0x5e20 | 5E20 - DSC-ECU: Allgemeiner Steuergeraete-Fehler. |
| 0x5e21 | 5E21 - DSC-ECU: ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5f03 | 5F03 - DSC-ECU: ECU-intern: Fehler beim Auslesen der EEPROM-Werte: EEPROM-Zelle defekt. |
| 0x5f04 | 5F04 - DSC-ECU: ECU-intern: Auslesen der EEPROM-Werte dauert zu lange. |
| 0x5f05 | 5F05 - DSC-ECU: ECU-intern: Testpin Leitungs-Unterbrechung ueber ValveDriftCheck fuer U467 erkannt. |
| 0x5f06 | 5F06 - DSC-ECU: ECU-intern: Fehlerhafter Zugriff auf Ventilansteuerungs-Ausgang. |
| 0x5f16 | 5F16 - DSC-ECU: ECU-intern: Radgeschwindigkeit von Hauptprozessor und Coprozessor stimmen nicht ueberein |
| 0x5f17 | 5F17 - DSC-ECU: ECU-Fehler: High-end-timer (HET) - Fehler aufgetreten |
| 0x6d94 | 6D94 - DSC-ECU: ECU-intern: |
| 0x6d95 | 6D95 - DSC-ECU: ECU-intern: |
| 0x6d96 | 6D96 - DSC-ECU: ECU-intern: |
| 0x6d97 | 6D97 - DSC-ECU: ECU-intern: |
| 0x6d98 | 6D98 - DSC-ECU: ECU-intern: |
| 0x6d99 | 6D99 - DSC-ECU: ECU-intern: |
| 0x5e22 | 5E22 - Raddrehzahlfuehler Vorne Links: Leitungsstoerung oder Kurzschluss. |
| 0x6d9a | 6D9A - Raddrehzahlfuehler Vorne Links: Leitung Spannungsversorgung: Kurzschluss nach Masse oder Sensor defekt |
| 0x6d9b | 6D9B - Raddrehzahlfuehler Vorne Links: Sensor-Leitung: Kurzschluss nach Masse, Leitungsunterbrechung, keine Spannungsversorgung, Sensor defekt |
| 0x6d9c | 6D9C - Raddrehzahlfuehler Vorne Links: Sensor-Leitung: Kurzschluss nach UBatt, Sensor defekt |
| 0x5e23 | 5E23 - Raddrehzahlfuehler Vorne Links: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e24 | 5E24 - Raddrehzahlfuehler Vorne Links: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e25 | 5E25 - Raddrehzahlfuehler Vorne Links: falsche Signalweite (>2ms) - Korrekter RDF-Typ verbaut ? |
| 0x5e26 | 5E26 - Raddrehzahlfuehler Vorne Links: Luftspalt zu groß. |
| 0x5e27 | 5E27 - Raddrehzahlfuehler Vorne Links: Dynamischen Signalverlust registriert - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e28 | 5E28 - Raddrehzahlfuehler Vorne Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e2d | 5E2D - Raddrehzahlfuehler Vorne Links: Fehlender Zahn RAD VL - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e2e | 5E2E - Raddrehzahlfuehler Vorne Links: Radschlupfueberwachung Rad VL - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e2f | 5E2F - Raddrehzahlfuehler Vorne Links: Fehler Anfahrerkennung RAD VL (RDF-Signalwert ungueltig) - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5efe | 5EFE - Raddrehzahlfuehler Vorne Links: max. Zeitspanne von unplausiblem Sensorwert (InplRad) Rad VL ueberschritten. |
| 0x5e30 | 5E30 - Raddrehzahlfuehler Hinten Links: Leitungsstoerung oder Kurzschluss. |
| 0x6d9d | 6D9D - Raddrehzahlfuehler Hinten Links: Leitung Spannungsversorgung: Kurzschluss nach Masse oder Sensor defekt |
| 0x6d9e | 6D9E - Raddrehzahlfuehler Hinten Links: Sensor-Leitung: Kurzschluss nach Masse, Leitungsunterbrechung, keine Spannungsversorgung, Sensor defekt |
| 0x6d9f | 6D9F - Raddrehzahlfuehler Hinten Links: Sensor-Leitung: Kurzschluss nach UBatt, Sensor defekt |
| 0x5e31 | 5E31 - Raddrehzahlfuehler Hinten Links: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e32 | 5E32 - Raddrehzahlfuehler Hinten Links: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e33 | 5E33 - Raddrehzahlfuehler Hinten Links: falsche Signalweite (>2ms) - Korrekter RDF-Typ verbaut ? |
| 0x5e34 | 5E34 - Raddrehzahlfuehler Hinten Links: Luftspalt zu groß. |
| 0x5e35 | 5E35 - Raddrehzahlfuehler Hinten Links: Dynamischen Signalverlust registriert - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e36 | 5E36 - Raddrehzahlfuehler Hinten Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e3b | 5E3B - Raddrehzahlfuehler Hinten Links: Fehlender Zahn RAD HL - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e3c | 5E3C - Raddrehzahlfuehler Hinten Links: Radschlupfueberwachung Rad HL - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e3d | 5E3D - Raddrehzahlfuehler Hinten Links: Fehler Anfahrerkennung RAD HL (RDF-Signalwert ungueltig)- Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5eff | 5EFF - Raddrehzahlfuehler Hinten Links: max. Zeitspanne von unplausiblem Sensorwert (InplRad) Rad HL ueberschritten. |
| 0x5e3e | 5E3E - Raddrehzahlfuehler Hinten Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x6da0 | 6DA0 - Raddrehzahlfuehler Hinten Rechts: Leitung Spannungsversorgung: Kurzschluss nach Masse oder Sensor defekt |
| 0x6da1 | 6DA1 - Raddrehzahlfuehler Hinten Rechts: Sensor-Leitung: Kurzschluss nach Masse, Leitungsunterbrechung, keine Spannungsversorgung, Sensor defekt |
| 0x6da2 | 6DA2 - Raddrehzahlfuehler Hinten Rechts: Sensor-Leitung: Kurzschluss nach UBatt, Sensor defekt |
| 0x5e3f | 5E3F - Raddrehzahlfuehler Hinten Rechts: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e40 | 5E40 - Raddrehzahlfuehler Hinten Rechts: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e41 | 5E41 - Raddrehzahlfuehler Hinten Rechts: falsche Signalweite (>2ms) - Korrekter RDF-Typ verbaut ? |
| 0x5e42 | 5E42 - Raddrehzahlfuehler Hinten Rechts: Luftspalt zu groß. |
| 0x5e43 | 5E43 - Raddrehzahlfuehler Hinten Rechts: Dynamischen Signalverlust registriert - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e44 | 5E44 - Raddrehzahlfuehler Hinten Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e49 | 5E49 - Raddrehzahlfuehler Hinten Rechts: Fehlender Zahn RAD HR - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e4a | 5E4A - Raddrehzahlfuehler Hinten Rechts: Radschlupfueberwachung HR - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e4b | 5E4B - Raddrehzahlfuehler Hinten Rechts: Fehler Anfahrerkennung RAD HR (RDF-Signalwert ungueltig) - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5f00 | 5F00 - Raddrehzahlfuehler Hinten Rechts: max. Zeitspanne von unplausiblem Sensorwert (InplRad) Rad HL ueberschritten. |
| 0x5e4c | 5E4C - Raddrehzahlfuehler Vorne Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x6da3 | 6DA3 - Raddrehzahlfuehler Vorne Rechts: Leitung Spannungsversorgung: Kurzschluss nach Masse oder Sensor defekt |
| 0x6da4 | 6DA4 - Raddrehzahlfuehler Vorne Rechts: Sensor-Leitung: Kurzschluss nach Masse, Leitungsunterbrechung, keine Spannungsversorgung, Sensor defekt |
| 0x6da5 | 6DA5 - Raddrehzahlfuehler Vorne Rechts: Sensor-Leitung: Kurzschluss nach UBatt, Sensor defekt |
| 0x5e4d | 5E4D - Raddrehzahlfuehler Vorne Rechts: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e4e | 5E4E - Raddrehzahlfuehler Vorne Rechts: Signalflanke fehl (RDF-Typ 11i). |
| 0x5e4f | 5E4F - Raddrehzahlfuehler Vorne Rechts: Falsche Signalweite (>2ms) Korrekter RDF-Typ verbaut ? |
| 0x5e50 | 5E50 - Raddrehzahlfuehler Vorne Rechts: Luftspalt zu groß. |
| 0x5e51 | 5E51 - Raddrehzahlfuehler Vorne Rechts: Dynamischen Signalverlust registriert - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e52 | 5E52 - Raddrehzahlfuehler Vorne Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e57 | 5E57 - Raddrehzahlfuehler Vorne Rechts: Fehlender Zahn RAD VR - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e58 | 5E58 - Raddrehzahlfuehler Vorne Rechts: Radschlupfueberwachung Rad VR - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e59 | 5E59 - Raddrehzahlfuehler Vorne Rechts: Fehler Anfahrerkennung RAD VR (RDF-Signalwert ungueltig) - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5f01 | 5F01 - Raddrehzahlfuehler Vorne Rechts:  max. Zeitspanne von unplausiblem Sensorwert (InplRad) Rad VL ueberschritten. |
| 0x5e5a | 5E5A - Raddrehzahlfuehler allgemein: Langzeitig (mehrere Sek.) vorhandener Fehlerverdacht von 2 RDF führte zu Fehler-Modus. |
| 0x5e5b | 5E5B - Raddrehzahlfuehler allgemein: Langzeitig (mehrere Sec.) vorhandener Fehlerverdacht von 3-4 RDF führte zu Fehler-Modus. |
| 0x5e5c | 5E5C - Raddrehzahlfuehler allgemein: Plausibilitaet Drehrichtung. |
| 0x5e5d | 5E5D - Raddrehzahlfuehler allgemein: Unplausibilitaet bei ABS-Regelung. |
| 0x5e5e | 5E5E - Raddrehzahlfuehler allgemein: Allg. Fehler bei Schlupfueberwachung (Lambda). |
| 0x5e5f | 5E5F - Raddrehzahlfuehler allgemein: kurzzeitig (wenige Sec.) vorhandener Fehlerverdacht von 2-3 RDF. Temporaer (heilbarer) Fehler. |
| 0x5e66 | 5E66 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Vorderachse. |
| 0x5e67 | 5E67 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Hinterachse. |
| 0x5e68 | 5E68 - Raddrehzahlfuehler allgemein: Vertauschte Vertauschte Raddrehzahlfuehler an Vorderachse - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e69 | 5E69 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Hinterachse - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5f02 | 5F02 - Raddrehzahlfuehler allgemein: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten |
| 0x5e60 | 5E60 - Bremslichschalter: Plausibilitaet des BLS-Signals gegen gemeldetes BS-Signal von DME - Leitungs-Kurzschluss? |
| 0x5e62 | 5E62 - Bremslichschalter: Ueberwachung BLS permanent high.(ECU sieht permanent getretenes Bremspedal) - Leitungsunterbrechung oder Kurzschluss? |
| 0x5e63 | 5E63 - Bremslichschalter: Ueberwachung BLS permanent high.(ECU sieht permanent getretenes Bremspedal)- Gutpruefung nach behobenem Defekt erforderlich! - Leitungsunterbrechung oder Kurzschluss? |
| 0x5eee | 5EEE - Bremslichschalter: - Plausibilitaet 1 - Plausibilisierung Drucksensor gegen BLS (niedriger Bremsdruckbereich). |
| 0x5eef | 5EEF - Bremslichschalter: - Plausibilitaet 2 - Plausibilisierung Drucksensor gegen BLS (mittlerer Bremsdruckbereich). |
| 0x5ef0 | 5EF0 - Bremslichschalter: - Plausibilitaet 3 - Plausibilisierung Drucksensor gegen BLS (hoher Bremsdruckbereich). |
| 0x5f37 | 5F37 - Bremslichschalter: DME meldet ungueltiges Status des Signals BREMSSCHALTER. |
| 0xD347 | D347 - PT-CAN: BusOff oder Initialisierungs-Fehler. - CAN unterbrochen? |
| 0xD34B | D34B - F-CAN: BusOff oder Initialisierungs-Fehler. - CAN unterbrochen? |
| 0xD34c | D34C - PT-CAN: Allg. CAN Fehler. CAN1 passiv CAN Leitung unterbrochen? |
| 0xD34d | D34D - F-CAN: Allg. CAN Fehler. CAN2 passiv CAN Leitung unterbrochen? |
| 0xD354 | D354 - PT-CAN: Botschaft TORQUE_1 (ID 0xA8) nicht empfangen oder falsche Botschaftslaenge (DLC) ][Sender: DME]. |
| 0xD355 | D355 - PT-CAN: Botschaft TORQUE_2 (ID 0x0A9) nicht empfangen oder falsche Botschaftslaenge (DLC) ][Sender: DME]. |
| 0xD356 | D356 - PT-CAN: Botschaft TORQUE_3 (ID 0xAA) nicht empfangen oder falsche Botschaftslaenge (DLC) ][Sender: DME]. |
| 0xD357 | D357 - PT-CAN: Botschaft VERZOEGERUNG_ANF-ACC (ID 0x0AD) nicht empfangen (von DSC-SG empfangen) [Sender: ACC]. |
| 0x5e6a | 5E6A - PT-CAN: Botschaft DREHMOMENT_ANF_DSC (ID 0x0B6) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD358 | D358 - PT-CAN: Botschaft GETRIEBEDATEN (ID 0xBA) nicht empfangen (von DSC-SG empfangen). [Sender: EGS]. |
| 0x5e6b | 5E6B - PT-Can: Botschaft LENKRADWINKEL (ID 0x0C4) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD359 | D359 - F-CAN: Botschaft LENKRADWINKEL_OBEN (ID 0x0C9) nicht empfangen (von DSC-SG empfangen). [Sender: SZL] |
| 0x5e72 | 5E72 - PT-Can: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD35A | D35A - PT-CAN: Botschaft KLEMMENSTATUS (ID 0x130) nicht empfangen. [Sender:CAS]. |
| 0x5e74 | 5E74 - PT-Can: Botschaft STAT_DSC (ID 0x19E, Status DSC) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e75 | 5E75 - PT-Can: Botschaft GESCHWINDIGKEIT (ID 0x1A0) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e76 | 5E76 - PT-Can: Botschaft WEGSTRECKE (ID 0x1A6) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD35F | D35F - PT-CAN: Botschaft STAT_ARS (ID 0x1AC) nicht empfangen. [Sender: ARS] |
| 0xD35C | D35C - PT-CAN: Botschaft STAT_KOMBI (ID 0x1B4) nicht empfangen. [Sender: Kombi] |
| 0xD35D | D35D - PT-CAN: Botschaft STAT_AFS (ID 0x1FC) nicht empfangen. [Sender: AFS]! |
| 0x5e7a | 5E7A - PT-Can: Botschaft BREMSDRUCK_RAD (ID 0x2B2) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD35E | D35E - PT-CAN: Botschaft A_TEMP_RELATIVZEIT (ID 0x310) nicht empfangen [Sender: Kombi]. |
| 0x5e77 | 5E77 - PT-Can: Botschaft STAT_RPA (ID 0x31D Reifenpannenanzeige) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD360 | D360 - PT-CAN: Botschaft KILOMETERSTAND (ID 0x330) nicht empfangen. [Sender:Kombi] ! |
| 0x5e7e | 5E7E - PT-Can: Botschaft RAD_TOLERANZ (ID 0x374Radtoleranzabgleich) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD361 | D361 - PT-CAN: Botschaft FAHRGESTELLNUMMER (ID 0x380) nicht empfangen. [Sender:CAS] |
| 0xD362 | D362 - CAN-Fehler: Botschaft FAHRZEUGTYP (ID 0x388) nicht empfangen. [Sender:CAS]! |
| 0xD363 | D363 - PT-CAN: Botschaft BEDIENUNG_FAHRWERK (ID 0x398) nicht empfangen (von DSC-SG empfangen). [Sender: CCC,MASK] |
| 0xD364 | D364 - PT-CAN: Botschaft NETZWERKMANAGEMENT (ID 0x480) nicht empfangen oder falsche Botschaftslaenge (DLC). |
| 0x5e83 | 5E83 - PT-Can: Botschaft NETZWERKMANAGEMENT_DSC (ID 0x5A9) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e84 | 5E84 - PT-Can: Botschaft BOS_MELDUNG_DSC (ID 0x5A9, Bremsbelagverschleiss) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD365 | D365 - PT-CAN: Botschaft BOS_RUECKSTELLUNG (ID 0x5E0) nicht empfangen. [sender:Kombi] |
| 0x5e85 | 5E85 - CAN-Fehler: Botschaft YAW_REQUEST (ID 0xC5) nicht abgeschickt ! |
| 0xD366 | D366 - CAN-Fehler: Botschaft YAW_ANSWER (ID 0xC7) nicht empfangen (von DSC-SG empfangen). |
| 0xD367 | D367 - F-CAN: Botschaft EXCH_AFS_DSC (ID 0x118) nicht empfangen (von DSC-SG empfangen). [Sender:AFS]. |
| 0xD368 | D368 - PT-CAN: Botschaft RWDT_STEA_WHL (ID 0x0C3) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: SZL] |
| 0x5e89 | 5E89 - CAN-Fehler: Botschaft YAW_REQUEST_2 (ID 0xCA) nicht abgeschickt! |
| 0xD369 | D369 - CAN-Fehler: Botschaft YAW_ANSWER_2 (ID 0x0CB) fehlt! |
| 0x5e8a | 5E8A - F-CAN: Botschaft REGELEINGRIFF_DSC_AFS (ID 0x11E) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e8b | 5E8B - F-CAN: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e8c | 5E8C - PT-CAN: Botschaft STATUS_ANHAENGER (ID 0x2E4) nicht empfangen (von DSC-SG empfangen). [Sender:AHM] |
| 0x5e6c | 5E6C - PT-CAN: Botschaft SOLL_MOM_ANF (0xBB) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD36B | D36B - PT-CAN: Botschaft ST_WEAR_DISK (0x376) nicht empfangen oder falsch Botschaftslaenge. (DLC). [Sender:VGSG] |
| 0x5e6d | 5E6D - F-CAN: Botschaft SYNC (ID 0x080) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD36C | D36C - CAN: Timeout der Botschaft BEDIENUNG_AUDIO_TEL (ID ox1D). |
| 0xD36D | D36D - CAN: Botschaft BEDIENUNG_TEMPOMAT (ID 0x194) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender:SZL] |
| 0xD36E | D36E - CAN: Botschaft BEDIENUNG_WISCHER (ID 0x2A6) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender:SZL] |
| 0xD373 | D373 - F-CAN: Botschaft LENKRADWINKEL_OBEN_Gateway TimeOut (ID 0x0C9h) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: SZL] |
| 0x5e79 | 5E7E - PT-CAN: Botschaft RAD_TOLERANZ (ID 0x374, Radtoleranzabgleich) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD37D | D37D - PT-CAN: Botschaft WISCHERGESCHWINDIGKEIT (0x226) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: Regensensor] |
| 0xD37E | D37E - PT-CAN: Botschaft BEDIENUNG_SONDERFUNKTION (0x228) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: CCC,MASK] |
| 0xD37F | D37F - CAN-Fehler: Botschaft BEDIENUNG_TASTER_DSC (ID 0x316) nicht empfangen oder falsche Botschaftslaenge (DLC). |
| 0xD380 | D380 - PT-CAN: Botschaft BEDIENUNG_TASTER_HDC (ID 0x31A) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: CCC,MASK] |
| 0xD381 | D381 - CAN-Fehler: Botschaft BEDIENUNG_TASTER_RDC (ID 0x319) nicht empfangen oder falsche Botschaftslaenge (DLC). |
| 0xD382 | D382 - PT-CAN: Botschaft ANF_RADMOM_BREMSE (ID 0xD5) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: LDM] |
| 0x5e7b | 5E7B - PT-Can: Botschaft RADMOM_BREMSE (0xE1) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5ec2 | 5EC2 - Info Eintrag: CAN: Allrad-Software ist geladen. |
| 0x6f51 | 6F51 - CAN-Botschaft/ Luftfeder: Botschaft HOEHENSTAND_LUFTFEDER nicht empfangen oder falsche Botschaftslaenge |
| 0x6dcf | 6dcf - CAN-Botschaft/ Luftfeder: Signal HGLV_RH_AISP in CAN-Botschaft HOEHENSTAND_LUFTFEDER ungueltig. |
| 0x6dd0 | 6dd0 - CAN-Botschaft/ Luftfeder: Signal ALIV_AISP in CAN-Botschaft HOEHENSTAND_LUFTFEDER ungueltig. |
| 0x6f4c | 6F4C - CAN-Botschaft AFS TEILSOLLWERTE_AFS_DSC (ID 0x1FC) nicht empfangen oder falsche Botschaftslaenge |
| 0x6f4d | 6F4D - CAN-Botschaft EMF STELLANF_EMF (ID 0x1A7) konnte nicht abgeschickt werden (von DSC-SG gesendet) |
| 0x6f4e | 6F4E - CAN-Botschaft EMF STATUS_EMF (ID 0x201) nicht empfangen |
| 0x6f4f | 6F4F - CAN-Botschaft EMF STATUS_EMF ChecKsum oder Alive |
| 0x6dcc | 6DCC - CAN-Botschaft EMF ??? (S_FscEmflLocateState) |
| 0x6dcd | 6DCD - CAN-Botschaft EMF Taster Fehler in Stellung betaetigt |
| 0x6dce | 6FCE - CAN-Botschaft EMF Taster Fehler in Stellung  nicht betaetigt |
| 0x6f50 | 6F50 - CAN-Botschaft SITZBELEGUNG_GURTKONTAKTE (ID 0x2FA) nicht empfangen oder falsche Botschaftslaenge |
| 0x5e61 | 5E61 - Querbeschleunigungssensor: Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5e8e | 5E8E - Querbeschleunigungssensor: Messbereich ueberschritten. |
| 0x5e90 | 5E90 - Querbeschleunigungssensor: Langzeit-Offset ueberschreitet Limit. |
| 0x5e91 | 5E91 - Querbeschleunigungssensor: Wert waehrend Stillstand zu gross. |
| 0x5e92 | 5E92 - Querbeschleunigungssensor: Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5e93 | 5E93 - Querbeschleunigungssensor: Plausibilitaetsfehler waehrend Signalbeobachtung (Modellgueltigkeit nicht mehr vorhanden). |
| 0x5e95 | 5E95 - Querbeschleunigungssensor: Controller Release System (CRS) - Fehlerverdacht Signalgradient. |
| 0x5e96 | 5E96 - Querbeschleunigungssensor: Plattform-Software (PSW) - Fehlerverdacht. |
| 0x5e97 | 5E97 - Querbeschleunigungssensor: Controller Release System (CRS)- Fehlerverdacht bei Messbereichsueberschreitung. |
| 0x5e98 | 5E98 - Querbeschleunigungssensor: Interner Querbeschleunigungswert ausserhalb Messbereich (DrsERRN02) |
| 0x5e99 | 5E99 - Querbeschleunigungssensor: Interner Selbsttest fehlgeschlagen (DrsERRN04). |
| 0x5f64 | 5F64 - Querbeschleunigungssensor2: Interner Wert ausserhalb Messbereich (Drs2ERRN02). |
| 0x5f65 | 5F65 - Querbeschleunigungssensor2: Interner Selbsttest fehlgeschlagen (Drs2ERRN04). |
| 0x5e8d | 5E8D - Laengsbeschleunigungs-Sensor: Langzeit-Offsetwert ausserhalb Wertebereich. |
| 0x5e8f | 5E8F - Laengsbeschleunigungs-Sensor: Fehler in Plausibilitaetsueberwachung |
| 0x5eb6 | 5EB6 - Laengsbeschleunigungs-Sensor: wertebereichs ueberschritten. |
| 0x5e9a | 5E9A - Drehratensensor: Vorzeichenfehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e9b | 5E9B - Drehratensensor: Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5ea1 | 5EA1 - Drehratensensor: Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5ea9 | 5EA9 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Signalstoerung (Static BITE). |
| 0x5eab | 5EAB - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Sinalstoerung (Dynamic Bite). |
| 0x5eac | 5EAC - Drehratensensor: Plattform-Software (PSW) - Fehlerverdacht DRS. |
| 0x5ead | 5EAD - Drehratensensor: Drs-ID passt nicht zur angefragten ID. |
| 0x5eae | 5EAE - Drehratensensor: Checksumme der empfangenen DRS-Botschaft falsch. |
| 0x5eaf | 5EAF - Drehratensensor: Fehler des ERR- oder TERR-Bits. Keine zusaetzliche Information (ERRNO = 0) |
| 0x5eb0 | 5EB0 - Drehratensensor: Interner Gierratenwert ausserhalb Wertebereich (DrsERRNO1). |
| 0x5eb1 | 5EB1 - Drehratensensor: Interne Referenzvariable ausserhalb Wertebereich (DrsERRNO3). |
| 0x5eb2 | 5EB2 - Drehratensensor: Empfangene Nachricht zu früh (DrsERRNO5). |
| 0x5eb3 | 5EB3 - Drehratensensor: Spannungsversorgung zu niedrig (DrsERRNO6). |
| 0x5eb4 | 5EB4 - Drehratensensor: Spannungsversorgung zu hoch (DrsERRNO7). |
| 0x5eb5 | 5EB5 - Drehratensensor: Sensor in Initialisierung (DrsERRNO8). |
| 0x5f58 | 5F58 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Signalstoerung (Dynamic Bite). |
| 0x5f59 | 5F59 - Drehratensensor: Controller Release System (CRS): Fehlerverdacht bei Signalgradient. |
| 0x5d9a | 5D9A - Drehratensensor: DRS sendet Signal DrsAX1=INITStatusfehler. (DRS-Typ MM 3.x). |
| 0x5d9c | 5D9C - Drehratensensor: DRS sendet Signal DrsAY1=INITStatusfehler. (DRS-Typ MM 3.x). |
| 0x5d9f | 5D9F - Drehratensensor: DRS sendet Signal DrsAY2=INITStatusfehler. (DRS-Typ MM 3.x). |
| 0x5da0 | 5DA0 - Drehratensensor: DRS sendet Signal DrsPSIP1=INITStatusfehler. (DRS-Typ MM 3.x). |
| 0x5da3 | 5DA3 - Drehratensensor: DRS sendet Signal DrsPSIP2=INITStatusfehler. (DRS-Typ MM 3.x). |
| 0x5da4 | 5DA4 - Drehratensensor: DRS sendet Signal DrsAX1=Signalfehler. Resertierbar. (DRS-Typ MM 3.x). |
| 0x5da5 | 5DA5 - Drehratensensor: DRS sendet Signal DrsAY1=Signalfehler. Resertierbar. (DRS-Typ MM 3.x). |
| 0x5da8 | 5DA8 - Drehratensensor: DRS sendet Signal DrsAY2=Signalfehler. Resertierbar. (DRS-Typ MM 3.x). |
| 0x5da9 | 5DA9 - Drehratensensor: DRS sendet Signal DrsPSIP1=Signalfehler. Resertierbar. (DRS-Typ MM 3.x). |
| 0x5dac | 5DAC - Drehratensensor: DRS sendet Signal DrsPSIP2=Signalfehler. Resertierbar. (DRS-Typ MM 3.x). |
| 0x5dae | 5DAE - Drehratensensor: DRS sendet Signal AX1=ungueltig. (DRS-Typ MM 3.x). |
| 0x5db1 | 5DB1 - Drehratensensor: DRS sendet Signal AY1=ungueltig. (DRS-Typ MM 3.x). |
| 0x5db2 | 5DB2 - Drehratensensor: DRS sendet Signal AY2=ungueltig. (DRS-Typ MM 3.x). |
| 0x5db5 | 5DB5 - Drehratensensor: DRS sendet Signal PSIP!=ungueltig. (DRS-Typ MM 3.x). |
| 0x5db6 | 5DB6 - Drehratensensor: DRS sendet Signal PSIP2=unueltig. (DRS-Typ MM 3.x) |
| 0x5db7 | 5DB7 - Drehratensensor: DRS sendet Signal PSIPP=ungueltig. (DRS-Typ MM 3.x). |
| 0x5dba | 5DBA - Drehratensensor: Interner Fehler. Ax1SensNotAvailable.(DRS-Typ MM3.x) |
| 0x5dbb | 5DBB - Drehratensensor: Interner Fehler. Ay1SensNotAvailable.(DRS-Typ MM3.x). |
| 0x5dbe | 5DBE - Drehratensensor: Interner Fehler. Ay2SensNotAvailable.(DRS-Typ MM3.x) |
| 0x5dc0 | 5DC0 - Drehratensensor: Interner Fehler. PSIP1SensNotAvailable.(DRS-Typ MM3.x). |
| 0x5dc3 | 5DC3 - Drehratensensor: Interner Fehler. PSIP2SensNotAvailable.(DRS-Typ MM3.x) |
| 0x5dc4 | 5DC4 - Drehratensensor: Interner Fehler. PSIPPSensNotAvailable. (DRS-TypMM 3.x) DRS MM 3.x (R): DRS - PSIPPSensNotAvailable. |
| 0xD375 | D375 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler. (DRS Typ MM 3.x) |
| 0xD376 | D376 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler. (DRS Typ MM 3.x) |
| 0xD377 | D377 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler. (DRS Typ MM 3.x) |
| 0xD378 | D378 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler. (DRS Typ MM 3.x) |
| 0xD379 | D379 - Drehratensensor: Checksumme der Botschaft ist falsch. (DRS Typ MM 3.x) |
| 0xD37A | D37A - Drehratensensor: Checksumme der Botschaft ist falsch. (DRS Typ MM 3.x) |
| 0xD37B | D37B - Drehratensensor: Checksumme der Botschaft ist falsch. (DRS Typ MM 3.x) |
| 0xD37C | D37C - Drehratensensor: Checksumme der Botschaft ist falsch. (DRS Typ MM 3.x) |
| 0x5e2c | 5E2C - Drehratensensor: Ueber CAN-Bus empfangene DRS-Type passt nicht zur Konfiguration. (DRS-Typ MM 3.x) |
| 0x5e37 | 5E37 - Drehratensensor: DRS-Type falsch oder CluType-ID7 nicht erlaubt. (DRS-Typ MM 3.x) |
| 0x5e38 | 5E38 - Drehratensensor: DRS meldet CheckTimeout. DrsVARCheckTimeout. (DRS-Typ MM 3.x) |
| 0x5e39 | 5E39 - Drehratensensor: Interner Fehler. SensDetectedCRC. (DRS-Typ MM 3.x) |
| 0x5e3a | 5E3A - Drehratensensor: Interner Fehler. Ueberspannung erkannt. |
| 0x5e45 | 5E45 - Drehratensensor: Interner Fehler. (DRS-Typ MM 3.x) |
| 0xD36F | D36F - F-CAN: Botschaft CLU1_VDA (ID 0x0D8) nicht empfangen oder falsch Botschaftslaenge (DLC) [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0xD370 | D370 - F-CAN: Botschaft CLU2_VDA (0x0E3) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0xD371 | D371 - F-CAN: Botschaft CLU3_VDA (0x0F4) nicht empfangen oder falsche Botschaftslaenge. [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0xD372 | D372 - F-CAN: Botschaft CLU_St_VDA (ID 0x165) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0x5e46 | 5E46 - F-CAN: Botschaft SYNC (ID 0x80, Synchronisation Sensorcluster) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e9c | 5E9C - Drehratensensor: Plausibilitaetsfehler in Bezug zu Lenkwinkelsensor. |
| 0x5e9d | 5E9D - Drehratensensor: Messbereich ueberschritten. |
| 0x5e9e | 5E9E - Drehratensensor: Vorzeichenfehler |
| 0x5e9f | 5E9F - Drehratensensor: Offset ueberschreitet Limit waehrend Stillstand. |
| 0x5ea0 | 5EA0 - Drehratensensor: Signalgradient DRS. |
| 0x5ea2 | 5EA2 - Drehratensensor: Offset ueberschreitet Limit waehrend schneller Kompensation. |
| 0x5ea3 | 5EA3 - Drehratensensor: Empfindlichkeit (Gain) ueberschreitet Limit. |
| 0x5ea4 | 5EA4 - Drehratensensor: Offset ueberschreitet Limit waehrend langsamer Kompensation. |
| 0x5ea5 | 5EA5 - Drehratensensor: Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5ea6 | 5EA6 - Drehratensensor: Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5ea7 | 5EA7 - Drehratensensor: Redundanz Fehler |
| 0x5ea8 | 5EA8 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei Messbereich DRS. |
| 0x5eaa | 5EAA - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Signalstoerung (Dynamic Bite). |
| 0x5f7a | 5F7A - Drehratensensor: DRS-Fehler dem DRS_1 zugeordnet. |
| 0x5f66 | 5F66 - Drehratensensor2: DRS2-ID passt nicht zur angefragten ID. |
| 0x5f67 | 5F67 - Drehratensensor2: Checksumme der empfangenen DRS-Botschaften falsch. |
| 0x5f68 | 5F68 - Drehratensensor2: Fehler des ERR- oder TERR-Bits. Keine zusaetzliche Information (ERRNO = 0). |
| 0x5f69 | 5F69 - Drehratensensor2: Interner Gierratenwert ausserhalb Wertebereich (DrsERRNO1). |
| 0x5f6a | 5F6A - Drehratensensor2: Interne Referenzvariable ausserhalb Wertebereich (DrsERRNO3). |
| 0x5f6b | 5F6B - Drehratensensor2: Empfangene Nachricht zu frueh (DrsERRNO5). |
| 0x5f6c | 5F6C - Drehratensensor2: Spannungsversorgung zu niedrig (DrsERRNO6). |
| 0x5f6d | 5F6D - Drehratensensor2: Spannungsversorgung zu hoch (DrsERRNO7). |
| 0x5f6e | 5F6E - Drehratensensor2: Sensor in Initialisierung (DrsERRNO8). |
| 0x5f7b | 5F7B - Drehratensensor: DRS-Fehler dem DRS_2 zugeordnet. |
| 0x5ee2 | 5EE2 - Drucksensor: Plausibilitaet Drucksensor_Signalleitungen. (DS-Typ 5: DSLine+DSLine2 = 5Volt). |
| 0x5ee4 | 5EE4 - Drucksensor: Fehler in Spannungsversorgung. |
| 0x5ee5 | 5EE5 - Drucksensor: Leitungsfehler. |
| 0x5ee6 | 5EE6 - Drucksensor: Leitungsfehler. Signal invertiert. |
| 0x5ee7 | 5EE7 - Drucksensor: Fehler bei Power Up Selbsttest (POS). |
| 0x5eed | 5EED - Drucksensor: DS-Offset ungueltig. |
| 0x5ec4 | 5EC4 - Drucksensor: Testpuls Fehler. |
| 0x5f28 | 5F28 - Drucksensor: Leitungsfehler des Temperatursignals. - Kurzschluss zu +12V, Masse? |
| 0x5f29 | 5F29 - Drucksensor: Temperatursignal Fehler. Parity failure, Transmission error. (Ds-Typ DS5). |
| 0x5f2a | 5F2A - Drucksensor: Temperatursignal ausserhalb Wertebereich (DS-Typ DS5). |
| 0x5e86 | 5E86 - Drucksensor Mc1: Fehler in Spannungsversorgung (Kreis 1). |
| 0x5edd | 5EDD - Interner Drucksensor Mc1: Fehler bei Power On Selbsttest. |
| 0x5ede | 5EDE - Interner Drucksensor Mc1: Leitungsfehler Kanal 1. |
| 0x5edf | 5EDF - Interner Drucksensor Mc1: Leitungsfehler Kanal 2. |
| 0x5ee1 | 5EE1 - Interner Drucksensor Mc1: Plausibilitaetsfehler. |
| 0x5e87 | 5E87 - Drucksensor Ci1: Fehler in Spannungsversorgung (Kreis 1). |
| 0x5ee3 | 5EE3 - Drucksensor Ci1: Fehler bei Power-On-Selbsttest. |
| 0x5ee8 | 5EE8 - Drucksensor Ci1: Kanal 1 Leitungsfehler. |
| 0x5ee9 | 5EE9 - Drucksensor Ci1: Kanal 2 Leitungsfehler. |
| 0x5eea | 5EEA - Drucksensor Ci1: Plausibilitaetsfehler. |
| 0x5e88 | 5E88 - Drucksensor Ci2: Fehler in Spannungsversorgung (Kreis 2). |
| 0x5eeb | 5EEB - Drucksensor Ci2: Fehler bei Power-On-Selbsttest. |
| 0x5eec | 5EEC - Drucksensor Ci2: Kanal 1 Leitungsfehler. |
| 0x5ef1 | 5EF1 - Drucksensor Ci2: Kanal 2 Leitungsfehler. |
| 0x5f27 | 5F27 - Drucksensor Ci2: Plausibilitaetsfehler. |
| 0x6da6 | 6DA6 - Drucksensor Mc2: Fehler in Spannungsversorgung (Kreis 1). |
| 0x6da7 | 6DA7 - Interner Drucksensor Mc2: Fehler bei Power On Selbsttest. |
| 0x6da8 | 6DA8 - Interner Drucksensor Mc2: Leitungsfehler Kanal 1. |
| 0x6da9 | 6DA9 - Interner Drucksensor Mc2: Leitungsfehler Kanal 2. |
| 0x6daa | 6DAA - Interner Drucksensor Mc2: Plausibilitaetsfehler. |
| 0x6dab | 6DAB - Drucksensor Vorne Links: Fehler in Spannungsversorgung. |
| 0x6dac | 6DAC - Drucksensor Vorne Links: Fehler bei Power-On-Selbsttest. |
| 0x6dad | 6DAD - Drucksensor Vorne Links: Kanal 1 Leitungsfehler. |
| 0x6dae | 6DAE - Drucksensor Vorne Links: Kanal 2 Leitungsfehler. |
| 0x6daf | 6DAF - Drucksensor Vorne Links: Plausibilitaetsfehler. |
| 0x6db0 | 6DB0 - Drucksensor Vorne Rechts: Fehler in Spannungsversorgung. |
| 0x6db1 | 6DB1 - Drucksensor Vorne Rechts: Fehler bei Power-On-Selbsttest. |
| 0x6db2 | 6DB2 - Drucksensor Vorne Rechts: Kanal 1 Leitungsfehler. |
| 0x6db3 | 6DB3 - Drucksensor Vorne Rechts: Kanal 2 Leitungsfehler. |
| 0x6db4 | 6DB4 - Drucksensor Vorne Rechts: Plausibilitaetsfehler. |
| 0x6db5 | 6DB5 - Drucksensor Hinten Links: Fehler in Spannungsversorgung. |
| 0x6db6 | 6DB6 - Drucksensor Hinten Links: Fehler bei Power-On-Selbsttest. |
| 0x6db7 | 6DB7 - Drucksensor Hinten Links: Kanal 1 Leitungsfehler. |
| 0x6db8 | 6DB8 - Drucksensor Hinten Links: Kanal 2 Leitungsfehler. |
| 0x6db9 | 6DB9 - Drucksensor Hinten Links: Plausibilitaetsfehler. |
| 0x6dba | 6DBA - Drucksensor Hinten Rechts: Fehler in Spannungsversorgung. |
| 0x6dbb | 6DBB - Drucksensor Hinten Rechts: Fehler bei Power-On-Selbsttest. |
| 0x6dbc | 6DBC - Drucksensor Hinten Rechts: Kanal 1 Leitungsfehler. |
| 0x6dbd | 6DBD - Drucksensor Hinten Rechts: Kanal 2 Leitungsfehler. |
| 0x6dbe | 6DBE - Drucksensor Hinten Rechts: Plausibilitaetsfehler. |
| 0x5eba | 5EBA - Lenkwinkelsensor: Lenkwinkel-Signal nur relativ.Rad-Mittenstellung unbekannt.Lernquadrant aktiv,(Auf Anschlag lenken).ODER LW Signal ungueltig, ODER LW-Status Fehler |
| 0x5ebb | 5EBB - Lenkwinkelsensor: Signalfehler- Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5ebc | 5EBC - Lenkwinkelsensor: Vorzeichenfehler |
| 0x5ebd | 5EBD - Lenkwinkelsensor: Signal verbleibt auf konstanten Wert. |
| 0x5ebe | 5EBE - Lenkwinkelsensor: Messbereich LWS. |
| 0x5ebf | 5EBF - Lenkwinkelsensor: Signalgradient LWS. |
| 0x5ec0 | 5EC0 - Lenkwinkelsensor: Langzeit-Offset-Wert ueberschreitet Limit. |
| 0x5ec1 | 5EC1 - Lenkwinkelsensor: Plausibilitaetsfehler in Bezug zu Drehratensensor. |
| 0x5ec5 | 5EC5 - Lenkwinkelsensor: CAN-Botschaftszaehler meldet Fehler. |
| 0x5f0d | 5F0D - Lenkwinkelsensor: Segment-Finde Algorithmus fand falsches Segment |
| 0x5f0e | 5F0E - Lenkwinkelsensor: SFA fand kein Segment und Fahrzeuggeschw. > 25 km/h, Temp.. |
| 0x5f63 | 5F63 - Lenkwinkelsensor: LWS nicht abgeglichen (LWS-Typ: LWS4,RWDT_STEA_WHL) |
| 0x5ec6 | 5EC6 - Lenkwinkelsensor: Signal nicht OK. |
| 0x5ec7 | 5EC7 - Lenkwinkelsensor: Seriennummer ungueltig. |
| 0x5ec8 | 5EC8 - Lenkwinkelsensor: Signal STWA_TOP=ungueltig empfangen. |
| 0x5ec9 | 5EC9 - Lenkwinkelsensor: Die im DXC gespeicherte LWS-Serienummer ist falsch. |
| 0x5eca | 5ECA - Lenkwinkelsensor: Lesen der gespeicherten LWS-Seriennummer nicht moeglich.Lenkwinkelsensor neu abgleichen |
| 0x5ecb | 5ECB - Lenkwinkelsensor: Signal STWA_TOP_COMP in F-CAN-Botschaft LENKRADWINKEL_OBEN (ID C9h) ungueltig. |
| 0x6dbf | 6DBF - Lenkwinkelsensor: Signal RWDT_STEA_WHL in F-CAN-Botschaft RWDT_STEA_WHL (ID ??h) ungueltig. |
| 0x6dc6 | 6DC6 - Lenkwinkelsensor: SZL Kodierung Timout. |
| 0x6dc7 | 6DC7 - Lenkwinkelsensor: SZL nicht codiert. |
| 0x6dc8 | 6DC8 - Lenkwinkelsensor: Signal ALIV_COU_STWA_TOP in F-CAN-Botschaft LENKRADWINKEL_OBEN2 (ID 0xC9) empfangen. |
| 0x5ed4 | 5ED4 - Unplausible DSC-Regelung : Unplausibilitaet bei Gierratenregelung (FZR-Controlling). |
| 0x5ed5 | 5ED5 - Unplausible DSC-Regelung : Notbremsfunktion ausgeloest (Wegen unplausibler Regelung: Blockieren der Raeder wird moeglich gemacht). |
| 0x5ed6 | 5ED6 - Info Eintrag: Langzeitabgleich: LWS-, DRS- und ay-Sensor-Langzeitabgleiche deaktiviert. |
| 0x5eda | 5EDA - Variantencodierung: Codierungswert in EEPROM nicht zulaessig. |
| 0x5edb | 5EDB - Variantencodierung: Codierungswert ausserhalb Wertebereich. |
| 0x5edc | 5EDC - Variantenkodierung: Codierungswert nicht freigegeben in diesem Projekt. von CAS gesendete Variante wird nicht aktzeptiert |
| 0x5efb | 5EFB - Variantencodierung: Variantenschalter konnte aus EEPROM nicht gelesen werden |
| 0x5efc | 5EFC - Variantencodierung: Keine Fahrzeugtyp Daten empfangen |
| 0x5efd | 5EFD - Info Eintrag: Variantencodierung: Neuer Variantenkodierungswert gesetzt |
| 0x5f23 | 5F23 - Variantenkodierung: EEPROM Konfiguration ACB Hba Value im EEPROM nicht gueltig |
| 0x5f2c | 5F2C - Variantenkodierung: EEPROM Inhalt nicht gueltig |
| 0x5f60 | 5F60 - Variantenkodierungswert passt nicht zum Fahrzeug |
| 0x5f18 | 5F18 - Variantenkodierung: EEPROM Konfiguration FZR: Anhaenger-Schlinger-Logik_Wert in EEPROM ungueltig. |
| 0x5f4d | 5F4D - Variantenkodierung: ASWVARCON lesen nicht moeglich. |
| 0x6dc4 | 6DC4 - Variantenkodierung: Variantencode ungueltig. |
| 0x6dc5 | 6DC5 - Variantenkodierung: Auslesen des SZL-CodeBytes aus dem EEProm nicht möglich. |
| 0x5f1e | 5F1E - Info Eintrag: Variantenkodierung: Anhaenger-Stabilisierungs-Logik ueber EEPROM deaktiviert |
| 0x5ef9 | 5EF9 - DSC-Software: ECU-intern: Timeout in Software-Startup-Phase. |
| 0x5efa | 5EFA - DSC-Software: ECU-intern: Asynchroner Rechenzyklus(Task)-Counter in Software. |
| 0x5f20 | 5F20 - DSC-Software: ECU-intern: Software fordert vollstaendiges Abschalten des Systems an |
| 0x5f21 | 5F21 - DSC-Software: ECU-intern: Software fordert nur EBV Funktion an |
| 0x5f22 | 5F22 - DSC-Software: ECU-intern: Software fordert nur ABS Funktion an |
| 0x5f30 | 5F30 - DME-Fehler: DME sendet Motordrehzahl=ungueltig |
| 0x5f31 | 5F31 - DME-Fehler: DME sendet Mittleres_Effektivdrehmoment=ungueltig |
| 0x5f32 | 5F32 - DME-Fehler: DME sendet Unbearbeitetes_Gaspedal=ungueltig |
| 0x5f33 | 5F33 - DME-Fehler: Rueckmeldung aus angefordetem DME-Stelleingriff (ASR,MSR) ist Null. |
| 0x5f34 | 5F34 - DME-Fehler: Checksummen- oder Timeout-Fehler der Botschaft TORQUE_1. |
| 0x5f35 | 5F35 - DME-Fehler: Checksummen- oder Timeout-Fehler der Botschaft TORQUE_2. |
| 0x5f36 | 5F36 - DME-Fehler: Checksummen- oder Timeout-Fehler der Botschaft TORQUE_3. |
| 0x5f6f | 5F6F - DME-Fehler: DME sendet Drehmoment_aktueller_Wert=ungueltig (PT-CAN, ID 0xA8, Signal TORQ_AVL). |
| 0x5f70 | 5F70 - DME-Fehler: DME sendet Status Kupplungsschalter=ungueltig (PT-CAN, ID 0xA8, Signal ST_SW_CLT). |
| 0x5f71 | 5F71 - DME-Fehler: DME sendet Drehmoment_aktuelles_Minimum=ungueltig (PT-CAN,ID 0xA9, Signal TORQ_AVL_MIN). |
| 0x5f72 | 5F72 - DME-Fehler: DME sendet Drehmoment_aktuelles_Maximum=ungueltig (PT-CAN,ID 0xA9, Signal TORQ_AVL_MAX) |
| 0x5f73 | 5F73 - DME-Fehler: DME sendet Drehmomentwert=ungueltig (PT-CAN, ID 0xA9,Signal TORQ_AVL_SPAR_POS). |
| 0x5f74 | 5F74 - DME-Fehler: DME sendet Gaspedalwinkel=ungueltig (PT-CAN, ID 0xAA, Signal ANG_ACPD). |
| 0x5f75 | 5F75 - DME-Fehler: DME sendet Drehmoment_Fahrer_Wahl=ungueltig (PT-CAN, ID 0xAA, Signal TORQ_DVCH) |
| 0x5f76 | 5F76 - DME-Fehler: DME sendet Drehzahlwert=ungueltig (PT-CAN ID 0x0AA, Signal RPM_ENG). |
| 0x5f77 | 5F77 - DME-Fehler: DME sendet Drehmomentwert=ungueltig (PT-CAN, ID 0xA8, Signal ST_RCPT_ENG_DSC). |
| 0x5f78 | 5F78 - DME-Fehler: DME sendet Motorstatus=ungueltig (PT-CAN, ID 0xA8, Signal ST_RCPT_ENG_DSC). |
| 0x5f2e | 5F2E - EGS-Fehler: EGS sendet EGS_not_alive ODER Checksumme ungueltig (PT-CAN, ID 0xBA, Signal ALIV_GRB, CHKSM_GRB). |
| 0x5f2f | 5F2F - EGS-Fehler: EGS sendet Getriebe_Status=ungueltig ODER Schalthebel=ungueltig ODER Getriebe_negativelift=ungueltig (PT-CAN, ID 0xBA, Signal RPM_GRB_NEGL, ST_GRLV_ACV, ST_GR_GRB). |
| 0x5f07 | 5F07 - DSC-ACC-Schnittstelle: Timeout bei Empfang der CAN Botschaften fuer ACC. |
| 0x5f08 | 5F08 - DSC-Acc-Schnittstelle (ECD): ACC sendet ACC not alive (PT-CAN, ID 0xAD, Signal ALIV_DCRN_BRP_ACC). |
| 0x5f09 | 5F09 - DSC-Acc-Schnittstelle (ECD): ACC sendet Gueltigkeitscheck des gesetzten Wertes gescheitert (PT-CAN, ID 0xAD, Signal ST_DCRN_BRP_TAR_ACC, DCRN_BRP_TAR_ACC). |
| 0x5f2d | 5F2D - DSC-Acc-Schnittstelle (ECD): ACC sendet: Checksumme der empfangenen ACC Botschaft falsch (PT-CAN, ID 0xAD, Signal CHKSM_DCRN_BRP_ACC). |
| 0x5f25 | 5F25 - ARS-ECU: Timeout waehrend Empfang von CAN Botschaften (Temporaer heilbarer Fehler). |
| 0x5f26 | 5F26 - ARS-ECU: ARS alive-Fehler (Botschaft ID 0x1AC, Signal ALIV_COU_ARS) |
| 0x5f1f | 5F1F - ARS-ECU: ARS meldet Status ungueltig (Botschaft ID 0x1AC, Signal ST_ARS) |
| 0x5f10 | 5F10 - Bremsbelagverschleiss: Sensorcheck Vorderachse gescheitert. - BBV-Fuehler abgesteckt? |
| 0x5f12 | 5F12 - Bremsbelagverschleiss: Vorderachse Verschleissgrenze erreicht |
| 0x5f14 | 5F14 - Bremsbelagverschleiss: Plausibilitaetsfehler. Verschleisszustand des BBV-Vorderachsefuehlers passt nicht zu berechnetem Verschleisswert oder zu Ruecksetzwunsch. |
| 0x5f11 | 5F11 - Bremsbelagverschleiss: Sensorcheck Hinterachse gescheitert. - BBV-Fuehler abgesteckt? |
| 0x5f13 | 5F13 - Bremsbelagverschleiss: Hinterachse Verschleissgrenze erreicht. |
| 0x5f15 | 5F15 - Bremsbelagverschleiss: Plausibilitaetsfehler. Verschleisszustand des BBV-Hinterachsefuehlers passt nicht zu berechnetem Verschleisswert oder zu Ruecksetzwunsch. |
| 0x5f1a | 5F1A - Info Eintrag: Fahrleistungsreduzierung durch DSC-Befehl aktiv. |
| 0x5f1b | 5F1B - Info Eintrag: Fahrleistungsreduzierung durch DSC-Befehl abgeschaltet. |
| 0x5f1c | 5F1C - Info Eintrag: Aktiver Bremseneingriff bei ueberhitzten Bremsscheiben |
| 0x5ef2 | 5EF2 - Drucksensor_ACC_vorne: Offset-Fehler |
| 0x5ef4 | 5EF4 - Drucksensor_ACC_vorne: Plausibilitaets-Fehler |
| 0x5ef6 | 5EF6 - Drucksensor_ACC_vorne: Leitungsfehler (DS2Add1). |
| 0x5ef8 | 5EF8 - Drucksensor_ACC_vorne: Spannungsversorgungs-Fehler. |
| 0x5ef3 | 5EF3 - Drucksensor_ACC_hinten: Offset-Fehler. |
| 0x5ef5 | 5EF5 - Drucksensor_ACC_hinten: Plausibilitaets-Fehler. |
| 0x5ef7 | 5EF7 - Drucksensor_ACC_hinten: Spannungsversorgungs-Fehler. |
| 0x5f50 | 5F50 - Ventile allgemein: Uebertemperatur Fehler. |
| 0x5f45 | 5F45 - Bremsfluessigkeitniveau zu niedrig |
| 0x5f47 | 5F47 - Kombi: Kombi Alive-Fehler |
| 0x5f48 | 5F48 - Kombi: Kombi sendet Zeit oder Temperatur=ungueltig (PT-CAN, ID 0x310, Signal TEMP_EX,T_SEC_COU_REL). |
| 0x5f49 | 5F49 - Kombi: Kombi sendet Kilometerstand ungueltig (PT-CAN, ID 0x330, Signal MILE_KM) |
| 0x5f4a | 5F4A - Kombi: Kombi sendet Bremsbelagverschleiss_vorne_oder_hinten=ungueltig. |
| 0x5f4b | 5F4B - Kombi: Kombi sendet Status_Handbremslichtschalter=ungueltig (PT-CAN, ID 0x1B4, Signal ST_IDLI_HABR). |
| 0x5f4c | 5F4C - Kombi: Unterbrechung aller Kombi-Botschaften (PT-CAN, ID 0x1B4,0x310,0x330,0x5E0). |
| 0x5f5c | 5f5c - CAN-Botschaft/Kombi: Anhaenger-Stabilisierungs-Logik wegen fehlender CAN-Botschaft INSTR3 (ID 0x615) deaktiviert. |
| 0x5e65 | 5E65 - Kombi: OP_PUBU_DSC Signal ungueltig. (Botschaft BEDIENUNG_TASTER_DSC, ID 0x316) |
| 0x5ec3 | 5EC3 - Kombi: OP_PUBU_TPCT Signal ungueltig. (Botschaft  BEDIENUNG_TASTER_RDC, ID 0x319) |
| 0x5f52 | 5F52 - CCC/MASK-Fehler: CCC meldet Bedienung_Reifendruckkontrolle ungueltig |
| 0xD36A | D36A - PT-CAN: Botschaft STAT_SOLL_MOM_UMSETZUNG (ID 0x0BC) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender:VGSG] |
| 0x5de7 | 5DE7 - Verteilergetriebe-ECU: VG-ECU meldet: Funktionspruefung nicht Ok. |
| 0x5de8 | 5DE8 - Verteilergetriebe-ECU: Kupplung ueber Diagnose deaktiviert. |
| 0x5de9 | 5DE9 - Info Eintrag: Verteilergetriebe-ECU: VG-ECU meldet unkomfortable VG-Kupplungsregelung. (PT-CAN, 0xBC, Signal ST_TXU_ERR) |
| 0x5dea | 5DEA - Info Eintrag: Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen Reibarbeit im VG. |
| 0x5deb | 5DEB - Info Eintrag: Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen zu hoher Reifenumfangstoleranz. |
| 0x5dec | 5DEC - Verteilergetriebe-ECU: Kupplung voruebergehend (temporaer) stillgelegt. |
| 0x5f39 | 5F39 - Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplungsposition unbekannt. |
| 0x5f3a | 5F3A - Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplung ist in geoeffneter Position - Heckantrieb! |
| 0x5f3b | 5F3B - Info Eintrag: Verteilergetriebe-ECU: VG-ECU meldet Einbussen in der Stellgenauigkeit. Unkomfortable Regelung. (PT-CAN, ID 0xBC, Signal ST_TXU_Err) |
| 0x5f3c | 5F3C - Info Eintrag: Verteilergetriebe-ECU: VG-Kupplung setzt Momentenvorgabe nicht zufriedenstellend um. |
| 0x5f3d | 5F3D - Verteilergetriebe-ECU: VG-Kupplung leitet kein Antriebsmoment zur VA. Sollvorgabe wird nicht ausgefuehrt - ALLRADVERLUST. |
| 0x5f3e | 5F3E - Verteilergetriebe-ECU: Botschaft ST_WEAR_DISK (ID 0x376h): Signal_Lamelle sendet Fehlercode. |
| 0x5f3f | 5F3F - Verteilergetriebe-ECU: Botschaft DXC3 (ID 0x600): Signal_Kette sendet Fehlercode. |
| 0x5f41 | 5F41 - Info Eintrag: Verteilergetriebe-ECU: Notregelung der Verteiergetriebkupplung aktiv. VG uebernimmt Kupplungsregelung). |
| 0x5f54 | 5F54 - HFC: HFC ist aktiv und Bremsscheibentemp. oberhalb Grenzwert. |
| 0x5f55 | 5F55 - LDM: Signal WMOM_BRK_DIFF_TAR ungueltig. |
| 0x5f56 | 5F56 - CAS: CAS sendet Signal KL_15 ungueltig oder Signal KL_R ungueltig oder Unplausibilitaet zwischen Signal KL_15 und WakeUp Signal (PT-Can (ID 0x130h),Signal ST_KL_R,ST_KL_15). |
| 0x5f57 | 5F57 - Allgemeine CAN Stoerung (CAS-, DME1-, Kombi-, DSC-PT-, DSC-F-Botschaftsfehler). |
| 0x5f61 | 5F61 - AFS: AFS meldet Status ungueltig (Botschaft ID 0x1FC, Signal ST_FN_AFS)) |
| 0x5f62 | 5F62 - AFS: Signalaustausch AFS-DSC ungueltig |
| 0x5f79 | 5F79 - Anhaengermodul: Anhaenger-Signal ungueltig |
| 0x5f51 | 5F51 - Hydraulischer Bremsassistent: EEPROM-Eintrag ungueltig (HPS, HVV). |
| 0x5f53 | 5F53 -   HFC: HFC ist länger als 500ms aktiv und Bremsscheibentemp. oberhalb Grenzwert. |
| 0x5ecc | 5ECC - Hill Descent Control: MASK/CCC sendet Operation_HDC=ungueltig. (PT-CAN, Bedienung_Fahrwerk ID 398h, Signal OP_HDC). |
| 0x5ecd | 5ECD - Hill Descent Control: MASK/CCC sendet Signal=ungueltig. (PT-CAN, Bedienung_Sonderfunktion ID 228h, Signal ID_SPFN). |
| 0x5ece | 5ECE - Hill Descent Control: SZL sendet Signal_Checksumme oder Signal_Alive=ungueltig. (Bedienung_Tempomat ID 194h, Signal CHKSM_CCTR, ALIV_CCTR). |
| 0x5ecf | 5ECF - Hill Descent Control: SZL sendet Signal_OpPUshButtonAcc=ungueltig. (Bedienung_Tempomat ID 194h, Signal OpPushButtonACC). |
| 0x5ed0 | 5ED0 - Hill Descent Control: SZL sendet Signal_OpGapcAcc=ungueltig. (Bedienung_Tempomat ID 194h, Signal OpGapcAcc). |
| 0x5ed1 | 5ED1 - Hill Descent Control: SZL sendet Signal_OpModChoCcca=ungueltig. (Bedienung_Tempomat ID 194h, Signal OpModChoCcca). |
| 0x5f2b | 5F2B - PT-Can: Botschaft ANZEIGE_HDC (ID 0x32D) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5f4e | 5F4E - Hill Descent Control: MASK/CCC sendet Signal_Taster_HDC=ungueltig. (PT-CAN, Bedienung_Taster_HDC ID 31Ah, Signal OP_PUBU_HDC).! |
| 0x5f5d | 5F5D -   Elektron. Brems-Vorbefüllung: EEPROM-Eintrag der EVB-Funktion ungueltig |
| 0x5f5e | 5F5E - Bremsscheiben-Wischer: EEPROM Eintrag ungueltig |
| 0x5f5f | 5F5F - Berg-Anfahrassistent: EEPROM Eintrag ungueltig |
| 0xD374 | D374 - PT-CAN: Botschaft STAT_GANG_RUECKWAERTS (ID 0x3B0) nicht empfangen oder falsche Botschaftslaenge (DLC). [SenderLM] |
| 0x5f7c | 5F7C - DSC-ECU: ECU-intern: VAFS-Prozessor: VAFS-SP-Interface Übertragungsfehler des VAFS-Controllers. |
| 0x5f7d | 5F7D - DSC-ECU: ECU-intern: VAFS-Prozessor: Falscher Speicherzugriff auf den VAFS-Controller. |
| 0x5f7e | 5F7E - DSC-ECU: ECU-intern: VAFS-Prozessor: ADC Kalibrierfehler des VAFS-Controllers |
| 0x5f7f | 5F7F - DSC-SG: SG-intern: VAFS-Prozessor: ADC Konvertierungsstartfehler des VAFS-Controllers. |
| 0x5f80 | 5F80 - DSC-ECU: ECU-intern: VAFS-Prozessor: ADC Übertragungsfehler des VAFS-Controllers |
| 0x5f81 | 5F81 - DSC-ECU: ECU-intern: VAFS-Prozessor: Softwareuebertragungsfehler (ASW-PSW). |
| 0x5f82 | 5F82 - DSC-ECU: ECU-intern: VAFS-Prozessor: Allg. HSW-Fehler des VAFS-Controllers. |
| 0x5f83 | 5F83 - DSC-ECU: ECU-intern: VAFS-Prozessor: CAN-Hardwarefehler des VAFS-Controllers. |
| 0x5f84 | 5F84 - DSC-ECU: ECU-intern: VAFS-Prozessor: CAN Botschafts-Timeout des VAFS-Controllers. |
| 0x5f85 | 5F85 - DSC-ECU: ECU-intern: VAFS-Prozessor: CAN Signalfehler des VAFS-Controllers. |
| 0x5f86 | 5F86 - DSC-ECU: ECU-intern: VAFS-Prozessor: Allg. VAFS-Fehler des VAFS-Controllers |
| 0x5f44 | 5F44 - Kupplung: Kupplungsschalter niemals gedrueckt |
| 0x5f46 | 5F46 - Kupplung: Kupplungsschalte permanent gedrueckt |
| 0x5ed7 | 5ED7 - Rueckwaertsgangschalter: Überwachung meldet: Schalter permantent Rueckwaerts. |
| 0x5ed8 | 5ED8 - Rueckwaertsgangschalter: Überwachung meldet: Schalter permantent Vorwaerts. |
| 0x5ed9 | 5ED9 - PT-CAN: Signal STATUS_GEAR_BACKWARDS in Botschaft STATUS_GANG_RUECKWAERTS (ID 3B0h) ungueltig (verwendet fuer Hill-Hold-Funktion). |
| 0x5ed2 | 5ED2 - Bremsscheiben-Wischer: RLS sendet ungueltige Signale in Botschaft REGENSENSOR_WISCHERGESCHWINDIGKEIT (PT-CAN, ID 0x226). |
| 0x5ed3 | 5ED3 - Bremsscheiben-Wischer: SZL sendet Signal OP_WISW=ungueltig. (F-CAN, ID 0x2a6, Signal OP_WISW) |
| 0xD383 | D383 - LDM: Checksummen-Fehler |
| 0x6f4b | 6F4B - LDM-Fehler: Alive-Fehler. |
| 0x5e55 | 5E55 - CAN-Fehler: Botschaft LDM_Anforderung_Radmoment_Sollwert ungueltig |
| 0x5e56 | 5E56 - CAN-Fehler: Botschaft G237LDM_Anforderung_Radmoment_Sollwertverteilung (vorne/hinten) ungültig |
| 0x5e53 | 5E53 - Info Eintrag: Hydraulische Fading Control: HFC ist laenger als 500ms aktiv und Bremsscheibentemp. oberhalb Grenzwert 550 Grad |
| 0x5e54 | 5E54 - Info Eintrag: Hydraulische Fading Control: HFC ist aktiv und Bremsscheibentemperatur oberhalb Grenzwert 700 Grad |
| 0x60ac | 60AC - Reifenpannenanzeige: RPA Codierdaten unplausibel |
| 0x60ad | 60AD - Reifenpannenanzeige: RPA Standartisierungsdaten unplausibel |
| 0x60ae | 60AE - Reifenpannenanzeige: RPA-FASTA-Daten unplausibel. |
| 0x60af | 60AF - Reifenpannenanzeige: RPA inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Vorderachse. |
| 0x60b0 | 60B0 - Reifenpannenanzeige: RPA inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Hinterachse. |
| 0x6dc0 | 6DC0 - Drehratensensor: Offset-Kalibrierung nicht möglich, da Laengsbeschleungingswert ausserhalb Wertebereich. (DRS-Typ MM3x). |
| 0x6dc1 | 6DC1 - Drehratensensor: Fehler waehrend EEProm-Zugriff aufgetreten. (DRS-Typ MM3x). |
| 0x6dc2 | 6DC2 - Drehratensensor: Zu viele ungueltige Laengsbeschleunigungswerte waehrend Laengsbeschleunigungs-Kalibrierung aufgetreten. (DRS-Typ MM3x). |
| 0x6dc3 | 6DC3 - Drehratensensor: Neuer DRS-Sensor erkannt. Abgespeicherte Seriennummer paßt nicht zu empfangener Seriennr. Laengsbeschleunigungs-Sensor neu abgleichen |
| 0x94B0 | 94B0 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Synchronisation mit Sub nicht moeglich |
| 0x94B1 | 94B1 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Verbindungstest zur PDA fehlgeschlagen |
| 0x94B2 | 94B2 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Umgebungshelligkeit zu hoch |
| 0x94B3 | 94B3 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - keine Referenzspur gefunden |
| 0x94B4 | 94B4 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Referenzspurabstand ausserhalb des Toleranzbandes |
| 0x94B5 | 94B5 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Illegaler Code |
| 0x94B6 | 94B6 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkelsprung zu gross |
| 0x94B7 | 94B7 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Lenkwinkel-Messbereich ueberschritten (Rundenoverflow) |
| 0x94B8 | 94B8 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkelverifizierung des Main und Sub fehlerhaft |
| 0x94B9 | 94B9 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - EEPROM defekt, Sensor nicht abgeglichen |
| 0x94BA | 94BA - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_BelZeit_0 Interner Softwarefehler. |
| 0x94BB | 94BB - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_VglAbwurf Fehler im Sub Lenkwinkel. |
| 0x94BC | 94BC - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCFehlInCDB Fehler in EEPROM-Daten. |
| 0x94BD | 94BD - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCRamSave Fehler im RAM - Bereich. |
| 0x94BE | 94BE - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkel ausserhalb Praediktionbereich |
| 0x94BF | 94BF - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_TimeoutSubCom Verbindung zum SUB defekt. |
| 0x94C0 | 94C0 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_BelTimeout Klemme 30 Startzeit zu lang. |
| 0x94C1 | 94C1 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_TimeoutSub Kommunikationsfehler Sub. |
| 0x94C2 | 94C2 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_KeinAbgleich Nullpunktdaten fehlerhaft. |
| 0x94C3 | 94C3 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_ERROR allgemeiner Sensorfehler. |
| 0x94C4 | 94C4 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - eine Referenzspur nicht gefunden |
| 0x94C5 | 94C5 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCSaveRamCopy Fehler im RAM. |
| 0x94C6 | 94C6 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - fuer CRC_Refspurabstand reserviert |
| 0x94C7 | 94C7 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCLwsNullShw Nullpunktdaten CRC Fehler. |
| 0x94C8 | 94C8 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCLwsShw Konfigurationsdaten CRC Fehler. |
| 0x94C9 | 94C9 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_TimeoutEEPROM EEPROM Fehler. |
| 0xC987 | C987 - F-CAN SZL keine Botschaften Bus-Off |
| 0xC995 | C995 - F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit >300km/h |
| 0xC996 | C996 - F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit <300km/h |
| 0xC998 | C998 - F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich < -5% |
| 0xC99A | C99A - F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich > 5% |
| 0xC994 | C994 - F-CAN SZL Radgeschwindigkeit, Kommunikation mit DSC, Timeout (Nachricht in applizierbarer Zeit nicht empfangen) |
| 0xC997 | C997 - F-CAN SZL Radtoleranzabgleich, Kommunikation mit DSC, Timeout (Nachricht in applizierbarer Zeit nicht empfangen) |
| 0xC99B | C99B - F-CAN SZL Sync, keine Kommunikation mit DSC, Timeout |
| 0xC99C | C99C - F-CAN SZL Klemmenstatus, keine Kommunikation mit DSC, Timeout |
| 0x94E0 | 94E0 - EEPROM defekt. |
| 0x9500 | 9500 - Bordnetz Unterspannung t > 1 Min. |
| 0x9501 | 9501 - Bordnetz Unterspannung t < 1 Min. |
| 0x9510 | 9510 - FGR/ACC-Lenkstockschalter (LST) haengt (alle tastenden Schalter)- mechanisch defekt, FGR/ACC_Taster fuer t>5 Min betaetigt |
| 0x9511 | 9511 - FGR/ACC-Lenkstockschalter (LST) unplausibel - Unzulaessige Kombination mit Tempomatschalter |
| 0x9512 | 9512 - FGR/ACC-Lenkstockschalter (LST) elektrisch defekt |
| 0x9518 | 9518 - Scheibenwischerschalter (SWS) (alle tastenden Schalter)- mechanisch defekt, SWS_Taster fuer t>5 Min betaetigt |
| 0x9519 | 9519 - Scheibenwischerschalter (SWS) unplausibel- Unzulaessige Kombination im Scheibenwischerschalter |
| 0x951A | 951A - Scheibenwischerschalter (SWS) -Schalter defekt - elektrisch defekt |
| 0x9520 | 9520 - Lenkrad MFL: mechanisch defekt, Kontakt Audio/Telefon_Taster fuer t>5 Min betaetigt |
| 0x6dd1 | 6DD1 - ECU: ungueltige Durchfuehrungsgeschwindigkeit vom High End Timer HET (z. B. verursacht durch nicht passenden vorskalierten Faktoren vom HET). |
| 0x6dd2 | 6DD2 - ECU: ungueltiger Arbeitszyklus vom High End Timer HET (HetPin 14 wurde mit einem Betriebstest getestet. |
| 0x6dd3 | 6DD3 - Raddrehzahlfuehler vorne links: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler vorne links (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd4 | 6DD4 - Raddrehzahlfuehler hinten links: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler hinten links (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd5 | 6DD5 - Raddrehzahlfuehler hinten rechts: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler hinten rechts (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd6 | 6DD6 - Raddrehzahlfuehler vorne rechts: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler vorne rechts (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd7 | 6DD7 - Getriebe: Signal ST_RSTA in CAN Bostchaft GETRIEBEDATEN ungueltig. |
| 0x6dd8 | 6DD8 - Kombi-Fehler: Signal FRC_INTM_WAY_BOS_RSTG_2_F in CAN Botschaft BOS_RUECKSTELLUNG ungueltig. |
| 0x6dd9 | 6DD9 - Kombi-Fehler: Signal FRC_INTM_WAY_BOS_RSTG_2_R in CAN Botschaft BOS_RUECKSTELLUNG ungueltig. |
| 0x6dda | 6DDA - EMF-Fehler: Anziehen nicht moeglich (geleost) (SLSII). |
| 0x6ddb | 6DDB - EMF-Fehler: Anziehen nicht moeglich (angezogen) (SLSII). |
| 0x6ddc | 6DDC - EMF-Fehler: Loesen nicht moeglich (SLSII). |
| 0x6ddd | 6DDD - EMF-Fehler: Unzulaessiges Kommando EHB3 (SLSII). |
| 0x6dde | 6DDE - EMF-Fehler: Parkbremse ueberhitzt (SLSII). |
| 0x6ddf | 6DDF - EMF-Fehler: Signal ungueltig (SLSIII) TBC. |
| 0x6de0 | 6DE0 - EMF-Fehler: Taster fuer Loesen defekt (SLSII). |
| 0x6de1 | 6DE1 - EMF-Fehler: Taster fuer Anziehen defekt (SLSIII). |
| 0x6de2 | 6DE2 - EMF-Fehler: Taster defekt (SLSIII). |
| 0x6de3 | 6DE3 - EMF-Fehler: Tastersignal ungueltig (SLSIII). |
| 0x6de4 | 6DE4 - EMF-Fehler: Tastercodierung ungueltig (SLSIII). |
| 0x6de5 | 6DE5 - EMF-Fehler: Taster Plausifehler (SLSIII) TBC. |
| 0x6de6 | 6DE6 - EMF-Fehler: Verbindung fehlerhaft (EHB3 Fehler oder EMF degr.). |
| 0x6de7 | 6DE7 - EMF-Fehler: Signal  SitzbelegungGurtschloss ungueltig. |
| 0x6de8 | 6DE8 - AFS-Fehler: Botschaft EXCH_AFS_DSC Checksumme oder Alivezaehler fehlerhaft. |
| 0x6de9 | 6DE9 - AFS-Fehler: Botschaft EXCH_AFS_DSC: Signal STEA_WHL ungueltig. |
| 0x6dea | 6DEA - AFS-Fehler: Botschaft EXCH_AFS_DSC: Signal STEA_WHL_V ungueltig. |
| 0x6deb | 6DEB - AFS-Fehler: Botschaft EXCH_AFS_DSC: Signal STEA_WHL_ERR ungueltig. |
| 0x6dec | 6DEC - AFS-Fehler: Signal RTR_PO_AVL in Botschaft Austausch_AFS_DSC (ID: 0x118) (Sender AFS) |
| 0x6ded | 6DED - AFS-Fehler: Erkennung fuer AFS nicht rechtzeitig. |
| 0x6dee | 6DEE - AFS-Fehler: AFS Konfiguration in EEPROM zuruecksetzen fehlerhaft. |
| 0x6def | 6DEF - VarCod-Fehler: AFS-Erkennung: AFS Verfuegbarkeit hat sich geaendert. |
| 0x6df0 | 6DF0 - CAS-Fehler: Key plugged/unplugged Signal nicht plausibel oder ungueltig. |
| 0x6f52 | 6F52 - CAN-Fehler: Botschaft LENKRADWINKEL_OBEN_2 (0xC9h) fehlt oder falsche Botschaftslaenge (DLC). |
| 0x6df1 | 6DF1 - Variantencodierung EEPROM Konfiguration VHC ungueltig |
| 0x6df2 | 6DF2 - Getriebe Fehler:  Signal ST_MOD_GRB in CAN Botschaft Getriebedaten unplausibel |
| 0x6df3 | 6DF3 - ECU intern: VAFS (Value Added Function Server) Versionen inkompatibel |
| 0x6df4 | 6DF4 - ECU intern: VAFS (Value Added Function Server) Transfer Timeout |
| 0x6df5 | 6DF5 - ECU intern: VAFS (Value Added Function Server) Data Checksum Fehler |
| 0x6df6 | 6DF6 - ECU intern: VAFS (Value Added Function Server) allgemeiner Spi Fehler |
| 0x5d8c | 5d8c - Rueckfoerderpumpe (RFP): RFP laeuft staendig (obwohl nicht angesteuert) |
| 0x6dc9 | 6dc9 - InfoEintrag: CCC Bandendetest aktiv (Bosch) |
| 0x6dca | 6dca - InfoEintrag: CCC Bandendetest fehlgeschlagen (Bosch) |
| 0x6dcb | 6dcb - CAN: Botschaft TORQUE_3 (ID  0xAA) Signal ST_CLCTR_V ungueltig. [Sender:DME/DDE] |
| 0x6df9 | 6df9 - Rueckfoerderpumpe (RFP): gemessene Drehzahl trotz Ansteuerung zu gering (RFP laeuft nicht). |
| 0x6dfa | 6dfa - Rueckfoerderpumpe (RFP): gemessene Drehzahl bei Ansteuerung zu hoch. |
| 0x6dfc | 6dfc - DSC-ECU: ECU-intern: System IC Konfiguration fuer CCC Ansteuerung nicht moeglich |
| 0x6dff | 6dff - DSC-ECU: ECU-intern: RAM-Puffer fuer Parameter ungueltig |
| 0x6e00 | 6e00 - CAN: Botschaft AFS_DSC_2 (ID 0x120) Signal StatusTeilsollwerte_AFS_DSC_2 Fehler Checksumme |
| 0x6e01 | 6e01 - CAN: Botschaft AFS_DSC_2 (ID 0x120) Signal TARVL_VARI ungueltig. [Sender:AFS] |
| 0x6e03 | 6e03 - CAN: Botschaft AFS_DSC_2 (ID 0x120) Signal ST_INFO_AFS ungueltig. [Sender:AFS] |
| 0x6e04 | 6e04 - Drehratensensor: falscher DRS Typ verbaut (DRSMM3.22 ohne AFS oder DRSMM3.8 mit AFS) |
| 0x6e05 | 6e05 - VarCod-Fehler: AFS-Erkennung: AFS Initialisierung nicht moeglich (Varcode nicht rechtzeitig gelesen). |
| 0x6e06 | 6e06 - Info Eintrag: AFS-Funktion (zeitweise) deaktiviert (FZR aktiv) |
| 0x6e07 | 6e07 - Info Eintrag: AFS-Funktion deaktiviert |
| 0x6e09 | 6e09 - EMF-Fehler: Service Modus (SLSIII). |
| 0x6e0a | 6e0a - EMF-Fehler: ungueltig (SLSII). |
| 0x6e0b | 6e0b - EMF-Fehler: Loesen und Anziehen nicht moeglich (SLSII). |
| 0x6e0d | 6e0d - Interner Drucksensor Mc1: Temperatur vom Drucksensor am Hauptzylinder 1 ausserhalb gueltigem Bereich |
| 0x6e0f | 6e0f - DCC: Fehler im Interface zum Kombi-Instrument |
| 0x6e10 | 6e10 - DCC: Laengsbeschleunigung passt nicht zu Fahrzeuggeschwindigkeit |
| 0x6e11 | 6e11 - DCC: Beschleunigung waehrend Regelung zu gross |
| 0x6e12 | 6e12 - DCC: Verzoegerung waehrend Regelung zu gross |
| 0x6e13 | 6e13 - DCC: Bremsanforderung aktuell nicht erlaubt |
| 0x6e14 | 6e14 - DCC: Beschleunigungsanforderung aktuell nicht erlaubt |
| 0x6e15 | 6e15 - DCC: Regler hat auf eine Abschaltbedingung nicht reagiert |
| 0x6e16 | 6e16 - DCC: Parameter Fehler |
| 0x6e17 | 6e17 - DCC: Gradient Bremsanforderung zu gross |
| 0x6e18 | 6e18 - DCC: Gradient Beschleunigungsanforderung zu gross |
| 0x6e19 | 6e19 - DCC: Freigabe nicht abgewartet |
| 0x6e1b | 6e1b - PT-CAN: Botschaft ANF_RADMOM_PT (ID 0xBF) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x6e1c | 6e1c - PT-CAN: Botschaft ANZEIGE_ACC_DCC (ID 0x193) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x6e1d | 6e1d - DME-Fehler: Alive-Counter der empfangenen DME-Botschaft RADMOM_PT_1 falsch. |
| 0x6e1e | 6e1e - DME-Fehler: Checksumme der empfangenen DME-Botschaft RADMOM_PT_1 falsch. |
| 0x6e1f | 6e1f - DME-Fehler: Alive-Counter der empfangenen DME-Botschaft RADMOM_PT_2 falsch. |
| 0x6e20 | 6e20 - DME-Fehler: Checksumme der empfangenen DME-Botschaft RADMOM_PT_2 falsch. |
| 0x6e21 | 6e21 - DME-Fehler: DME sendet ST_INTF_PT=ungueltig (PT-CAN, RADMOM_PT_1, ID 0xB4). |
| 0x6e22 | 6e22 - DME-Fehler: DME sendet ST_PENG=ungueltig (PT-CAN, RADMOM_PT_1, ID 0xB4). |
| 0x6e23 | 6e23 - DME-Fehler: DME sendet WMOM_PT_AVL=ungueltig (PT-CAN, RADMOM_PT_1, ID 0xB4). |
| 0x6e24 | 6e24 - DME-Fehler: DME sendet ANG_ACPED_REAL=ungueltig (PT-CAN, RADMOM_PT_1, ID 0xB4). |
| 0x6e25 | 6e25 - DME-Fehler: DME sendet WMOM_PT_MAX=ungueltig (PT-CAN, RADMOM_PT_2, ID 0xAC). |
| 0x6e26 | 6e26 - DME-Fehler: DME sendet WMOM_PT_MIN_LOW=ungueltig (PT-CAN, RADMOM_PT_2, ID0xAC). |
| 0x6e27 | 6e27 - Drucksensor Lenkung (DAL): Sensor Versorgungsspannung fehlerhaft |
| 0x6e28 | 6e28 - Drucksensor Lenkung (DAL): Sensor Signal fehlerhaft |
| 0x6e2c | 6e2c - Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). Kein EEPROM Eintrag. |
| 0x6e2d | 6e2d - Uz Versorgungsspannung_Klemme_15-Fehler: leichte  (Spannung zu niedrig). kein EEPROM Eintrag. |
| 0x6e2e | 6e2e - Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). kein EEPROM Eintrag. |
| 0x6e2f | 6e2f - Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz. kein EEPROM Eintrag. |
| 0x6e30 | 6e30 - Interner Drucksensor Mc1: Plauisibilitaet eines Drucksensors gegen BLS falsch. |
| 0x6e31 | 6e31 - Interner Drucksensor Mc1: Plauisibilitaet von 3 Drucksensoren gegen BLS falsch. |
| 0x6e32 | 6e32 - Interner Drucksensor Mc1: Offsetfehler. |
| 0x6e33 | 6e33 - Interner Drucksensor Mc1: Testpuls Fehler. |
| 0x6f53 | 6f53 - PT-CAN: Botschaft Status_Teilsollwerte_AFS_DSC_2 (ID 0x120) falsche Botschaftslaenge (DLC) ][Sender: AFS]. |
| 0x6f54 | 6f54 - PT-CAN: Botschaft Status_Teilsollwerte_AFS_DSC_2 (ID 0x120) Alivecounter falsch. ][Sender: AFS]. |
| 0x6f56 | 6f56 - PT-CAN: Botschaft RADMOM_PT_1 (ID   (0xB4) nicht empfangen [Sender: DME] |
| 0x6f57 | 6f57 - PT-CAN: Botschaft RADMOM_PT_2 (ID   (0xAC) nicht empfangen [Sender: DME] |
| 0x6e4c | 6e4c - ECU intern: System IC Watchdog Oszillator Fehler |
| 0x6e4a | 6e4a - Ventil Relais: VR nicht aus, waehrend Watchdog unterdrueckt (FSA) |
| 0x6e4f | 6e4f - Rueckfoerderpumpe: MRG Test fehlgeschlagen |
| 0x6e51 | 6e51 - Rueckfoerderpumpe: Freilauf Interrupt Fehler (FWint) |
| 0x6e50 | 6e50 - Rueckfoerderpumpe: Freilauf Ueberlast Fehler (FWol) |
| 0x6e4e | 6e4e - Rueckfoerderpumpe: Freilauf Schalter Fehler (FWS) |
| 0x6e4d | 6e4d - Rueckfoerderpumpe: falsches MRAuC Signal erkannt (MRAfail) |
| 0x6dfb | 6dfb - Rueckfoerderpumpe: MRD Versorgungsspannung falsch |
| 0x6d8e | 6d8e - Rueckfoerderpumpe: Motorrelais Ueberlast erkannt (MRol) |
| 0x6d8d | 6d8d - Rueckfoerderpumpe: Motorrelais Kurzschluss auf Masse erkannt (MRsc) |
| 0x6df8 | 6df8 - Rueckfoerderpumpe: Freilauf Kurzschluss Fehler erkannt (FWsc) |
| 0x6e54 | 6e54 - Variantenkodierung: ungueltiger Variantenwert verursacht timeout beim Parameteraustausch |
| 0x6e5c | 6e5c - Ventile allgemein: USV ueberhitzt |
| 0x6e4b | 6e4b - Ventil USV2: Kurzschluss zu VPRE. (Bond im SG?) |
| 0x6e47 | 6e47 - Getriebe: Signal RPM_GRB_NEGL_2 in CAN Botschaft GETRIEBEDATEN_2 (0x1A2) ungueltig. |
| 0x6f62 | 6f62 - PT-CAN: Botschaft GETRIEBEDATEN_2 (ID 0x1A2) Checksumme oder Alivezaehler fehlerhaft (von DSC-SG empfangen). [Sender: EGS] |
| 0x6f60 | 6f60 - PT-CAN: Botschaft GETRIEBEDATEN_2 (ID 0x1A2) falsche Botschaftslaenge (von DSC-SG empfangen). [Sender: EGS] |
| 0x6e58 | 6e58 - Drehratensensor: Info-Block nicht vollständig empfangen. (DRS Typ MM 3.x) |
| 0x6e0e | 6e0e - Interner Temperatursensor: Plausibilität zwischen MC1 und NTC |
| 0x6e5a | 6e5a - EMF-Fehler: Taster Fehler. Anziehen nicht moeglich. |
| 0x6e5b | 6e5b - EMF-Fehler: Taster Fehler. Loesen nicht moeglich. |
| 0x6e29 | 6e29 - Auto-Hold Taster: Unterbrechung oder Kurzschluss auf Masse |
| 0x6e49 | 6e49 - RDC: Signal ST_BDOW_TYR in Botschaft STAT_RPA (0x31C) ungueltig (Sender RPA) |
| 0x6f63 | 6f63 - PT-CAN: Botschaft BEDIENUNG_TASTER_RDC (ID 0x31A) falsche Botschaftslänge empfangen (Sender RDC) |
| 0x6e52 | 6e52 - DCC: Level 2 Abschaltung (keine Reaktion auf Level 1 Abschaltung) |
| 0x6e53 | 6e53 - DCC: Fehler Lenkstockhebel (SZL?) |
| 0x6e48 | 6e48 - PT-CAN: Botschaft DREHMOMENT_ANF_STE (ID 0x0B1) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x6e55 | 6e55   Bremsklappensteuerung Ventil Treiber IC erkennt Leitungs Fehler (line short to Ubatt, GND or open line) |
| 0x6e56 | 6e56   Bremsklappensteuerung Sensor links Leitungs Fehler (line short to Ubatt, GND or open line) |
| 0x6e57 | 6e57   Bremsklappensteuerung Sensor rechts Leitungs Fehler (line short to Ubatt, GND or open line) |
| 0x5d8c | P Rueckfoerder Pumpe: - Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AN aber erwartet: AUS - Leitungsstoerung ? |
| 0x5d8d | P Rueckfoerder Pumpe: - steht. Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AUS aber erwartet: AN - Sicherung oder Pumpenmotorrelais defekt ? |
| 0x5d8e | P Rueckfoerder Pumpe: - Nachlauf zu kurz. |
| 0x5d8f | P Rueckfoerder Pumpe: - Freigabe des Pumpen-Anlauf-Zyklus, kein Fehler: Gutpruefung nach behobenem Defekt erfolgt. |
| 0x5d90 | P Ventil Relais: VR offen. Fehler verursacht durch zu viele erkannte Einzelventilfehler - Sicherung defekt ? |
| 0x5d91 | P Ventil Relais: VR offen, Relais schliesst nicht waehrend Startup-Test. |
| 0x5d92 | P Ventil Relais: VR-Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. |
| 0x5d93 | P Ventil Relais: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse ueber Startup-Test erkannt.  |
| 0x5d94 | P Ventil Relais: VR steckt in geschlossener Position. Relais schaltet nicht ab waehrend Startup-Test. |
| 0x5d95 | P Ventil Relais: VR offen, Spannungsversorgung_VR waehrend Startup-Test zu niedrig (verglichen mit Uz Versorgungsspannung_Klemme_15); Defekte Sicherung! |
| 0x5d96 | P Ventil Relais: Kurzschluss zu Uz Versorgungsspannung_Klemme_15 im zyklischen Ventilrelais-Test festgestellt. |
| 0x5d97 | P Ventil Relais: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse waehrend zyklischem Ventilrelais-Test registriert. |
| 0x5d98 | P Einlass Ventil (EV) Vorne Links - zyklischer Ventil- und Relaistest. |
| 0x5d99 | P Einlass Ventil (EV) Vorne Links - Allgemeiner Fehler. |
| 0x5d9b | P Einlass Ventil (EV) Vorne Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5d9d | P Auslass Ventil (AV) Vorne Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5d9e | P Auslass Ventil (AV) Vorne Links - Allgemeiner Fehler. |
| 0x5da1 | P Einlass Ventil (EV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da2 | P Einlass Ventil (EV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5da6 | P Auslass Ventil (AV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da7 | P Auslass Ventil (AV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5daa | P Einlass Ventil (EV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dab | P Einlass Ventil (EV) Hinten Links - Allgemeiner Fehler. |
| 0x5dad | P Einlass Ventil (EV) Hinten Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5daf | P Auslass Ventil (AV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db0 | P Auslass Ventil (AV) Hinten Links - Allgemeiner Fehler. |
| 0x5db3 | P Einlass Ventil (EV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db4 | P Einlass Ventil (EV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5db8 | P Auslass Ventil (AV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db9 | P Auslass Ventil (AV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5dbc | P Ventil (USV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dbd | P Ventil (USV1): Allgemeiner Fehler. |
| 0x5dbf | P Ventil (USV1): - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5dc1 | P Ventil (USV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc2 | P Ventil (USV2): Allgemeiner Fehler. |
| 0x5dc6 | P Ventil (HSV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc7 | P Ventil (HSV1): Allgemeiner Fehler. |
| 0x5dca | P Ventil (HSV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dcb | P Ventil (HSV2): Allgemeiner Fehler. |
| 0x5dce | P Uz Versorgungsspannung_Klemme_15-Fehler: leichte Unterspannung (Spannung zu niedrig). |
| 0x5dcf | P Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). |
| 0x5dd0 | P Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). |
| 0x5dd1 | P Uz Versorgungsspannung_Klemme_15-Fehler: Kurzschluss einer Drehzahlsensor-Spannungsleitung auf UBatt. (Stromfluss durch den ASPxx-Pin des Drehzahlsensor_Inputamplifiers). |
| 0x5dd2 | P Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz Versorgungsspannung_Klemme_15. |
| 0x5dd3 | P DSC-ECU : Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler). |
| 0x5dd4 | P DSC-ECU : ECU-intern: Raddrehzahlfuehler-Driverchip: Fehler bei Versorgungsspannung/Masse Fehler. Reset-Response-Test fehlerhaft. |
| 0x5dd5 | P DSC-ECU : ECU-intern: Enable-Leitung kann nicht eingeschaltet werden (Startup-Test Enable High). |
| 0x5dd6 | P DSC-ECU : ECU-intern: Enable-Leitung kann nicht ausgeschaltet werden (Startup-Test Enable low). |
| 0x5dd8 | P DSC-ECU : ECU-intern: System Startup-Synchronisation-Timeout aufgetreten. |
| 0x5dd9 | P DSC-ECU : ECU-intern: SP-Interface: Hardware Fehler erkannt. |
| 0x5ddc | P DSC-ECU : ECU-intern: Het-SP-Interface sendet Fehler; Nachricht nicht korrekt uebertragen. |
| 0x5ddd | P DSC-ECU : ECU-intern: Zugang in Uebersetzungstabelle des Het-SP-Interface ist nicht moeglich. |
| 0x5dde | P DSC-ECU : ECU-intern: Watchdog-Ueberwachung meldet: Datenfehler aufgetreten. |
| 0x5ddf | P DSC-ECU : ECU-intern: Watchdog-Ueberwachung meldet: Status nicht korrekt. |
| 0x5de0 | P DSC-ECU : ECU-intern: Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15. |
| 0x5de1 | P DSC-ECU : ECU-intern: Clockstatus des SP-Interface zeigt fehlende Uhr. |
| 0x5de2 | P DSC-ECU : ECU-intern: DePwm Status : Software-/ Hardware Konfigurationen passen nicht zusammen (DF11i/s). |
| 0x5de3 | P DSC-ECU : ECU-intern: Status_Raddrehzahlfuehler des SP-Interface passt nicht zur Konfiguration. |
| 0x5de4 | P ECU-Fehler: Boot Block Checksummen Fehler |
| 0x5dee | P ECU-Fehler: FPS Fault Transfer SysServ->AlgoSrv: Fifo Overflow aufgetreten oder Fehlererkennungssystem-Fehler und Statustransfer: Transfer in Algorithm Server nicht gestartet in AS oder SPI Fehler in AS |
| 0x5def | P DSC-ECU : ECU-intern: ROM Checksummentest-Fehler. |
| 0x5df0 | P DSC-ECU : ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5df1 | P DSC-ECU : ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5df2 | P DSC-ECU : ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5df3 | P DSC-ECU : ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5df5 | P DSC-ECU : ECU-intern: Can RAM Checkpatterntest-Fehler. |
| 0x5df6 | P DSC-ECU : ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task)-Timing. |
| 0x5df7 | P DSC-ECU : ECU-intern: Betriebssystem: geringe Background-Rechenzyklus(Task) Aktivitaet - System ueberlastet ! |
| 0x5df8 | P DSC-ECU : ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5df9 | P DSC-ECU : ECU-intern: Betriebssystem: Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5dfa | P DSC-ECU : ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5dfb | P DSC-ECU : ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5dfc | P DSC-ECU : ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5dfd | P DSC-ECU : ECU-intern: Illegalen Opcode gefunden    -> Mikrocontroller Mode: undef. |
| 0x5dfe | P DSC-ECU : ECU-intern: ROM Checksummentest-Fehler. |
| 0x5dff | P DSC-ECU : ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5e00 | P DSC-ECU : ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5e01 | P DSC-ECU : ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5e02 | P DSC-ECU : ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5e03 | P DSC-ECU : ECU-intern: Allgemeiner Fehler des Ventiltreiber-Status oder -antriebes durch zyklischen Ventilrelaistest registriert.  |
| 0x5e04 | P DSC-ECU : ECU-intern: Fehler der permanenten Enable-Leitungsueberwachung (Enable ist low nach Startup-Test). |
| 0x5e05 | P DSC-ECU : ECU-intern: nicht moeglich SP-Interface transfer zu planen. |
| 0x5e06 | P DSC-ECU : ECU-intern: Planmaessige Datenuebertragung nicht verfuegbar.  |
| 0x5e07 | P DSC-ECU : ECU-intern: Datenuebertragungsfehler (Antwort des SP-Interface handler). |
| 0x5e08 | P DSC-ECU : ECU-intern: Planmaessiger Build-in-self-test (BIST) nicht korrekt (BIST Kontinuität). |
| 0x5e09 | P DSC-ECU : ECU-intern: Build-in-self-test (BIST)-Signaturen verschieden, CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0a | P DSC-ECU : ECU-intern: Allgemeiner Steuergeraete-Fehler. |
| 0x5e0b | P DSC-ECU : ECU-intern: Fehlererkennungssystem Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. |
| 0x5e0c | P DSC-ECU : ECU-intern: Build-in-self-test (BIST)-Signaturen unterschiedlich. CPU Fehler in Algorithm- oder System-Server. |
| 0x5e0d | P DSC-ECU : ECU-intern: Timeout des Build-in-self-test (BIST). Antwort durch Algorithm-Server. |
| 0x5e0e | P DSC-ECU : ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task) Timing. |
| 0x5e0f | P DSC-ECU : ECU-intern: Betriebssystem Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5e10 | P DSC-ECU : ECU-intern: Betriebssystem: geringe Background Rechenzyklus (Task) Aktivität - System ueberlastet ! |
| 0x5e11 | P DSC-ECU : ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5e12 | P DSC-ECU : ECU-intern: Illegaler Opcode gefunden  -> Mikrocontroller Mode: undef. |
| 0x5e13 | P DSC-ECU : ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5e14 | P DSC-ECU : ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5e15 | P DSC-ECU : ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface timeout in System-Server.  |
| 0x5e16 | P DSC-ECU : ECU-intern: Fehlererkennungssystem Transfer Fehler: SP-Interface timeout in System-Server. |
| 0x5e17 | P DSC-ECU : ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface Fehler in System-Server. |
| 0x5e18 | P DSC-ECU : ECU-intern: Datenmenge der Peripherie SP-Interface ueberschreitet Bufferlaenge. |
| 0x5e19 | P DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): ID Anfrage nicht akzeptiert. |
| 0x5e1a | P DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler multi IC. |
| 0x5e1b | P DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler im EEPROM. |
| 0x5e1c | P DSC-ECU : ECU-intern: Bandluecke Spannung ausserhalb gueltigem Bereich. |
| 0x5e1d | P DSC-ECU : ECU-intern: ADC Umwandlung Start-Fehler. |
| 0x5e1e | P ECU-Fehler: Flash Reprogrammierungszyklus ist fehlgeschlagen (Zellen nicht reprogrammiert) |
| 0x5e1f | P ECU-Fehler: Flash Reprogrammierungszyklus wurde erfolgreich ausgefuehrt (Info) |
| 0x5e20 | P DSC-ECU : Allgemeiner Steuergeraete-Fehler. |
| 0x5e21 | P DSC-ECU : ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5f03 | P DSC-ECU: ECU-intern : Fehler beim Auslesen der Software-EEPROM-Werte: EEPROM-Zelle defekt. |
| 0x5f04 | P DSC-ECU: ECU-intern : Timeout beim Auslesen der Software-EEPROM-Werte. |
| 0x5f05 | P DSC-ECU: ECU-intern : Testpin Leitungs-Unterbrechung ueber ValveDriftCheck fuer U467 erkannt. |
| 0x5f06 | P DSC-ECU: ECU-intern : fehlerhafter Zugriff auf Ventilansteuerungs-Ausgang. |
| 0x5f16 | P ECU-Fehler: Radgeschwindigkeit von Hauptprozessor und Coprozessor stimmen nicht ueberein |
| 0x5f17 | P ECU-Fehler: HET Ausnahme IRQ ereignet sich (HetApcntOvrfl \| HetApcntUndrfl \| HetPrgOvrfl) |
| 0x5e22 | P Raddrehzahlfuehler Vorne Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e24 | P Raddrehzahlfuehler Vorne Links: Signalflanke fehlt (DF11i). |
| 0x5e25 | P Raddrehzahlfuehler Vorne Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e26 | P Raddrehzahlfuehler Vorne Links: Luftspalt zu groß. |
| 0x5e27 | P Raddrehzahlfuehler Vorne Links: Dynamischen Signalverlust registriert. |
| 0x5e28 | P Raddrehzahlfuehler Vorne Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e2d | P Raddrehzahlfuehler Vorne Links: Fehlender Zahn RAD FL. |
| 0x5e2e | P Raddrehzahlfuehler Vorne Links: Radschlupfueberwachung  FL. |
| 0x5e2f | P Raddrehzahlfuehler Vorne Links: Fehler Anfahrerkennung RAD FL (RDF-Signalwert ungueltig). |
| 0x5efe | P Raddrehzahlfuehler Vorne Links: max. Time InplRad Rad FL ueberschritten |
| 0x5e30 | P Raddrehzahlfuehler Hinten Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e32 | P Raddrehzahlfuehler Hinten Links: Signalflanke fehlt. |
| 0x5e33 | P Raddrehzahlfuehler Hinten Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e34 | P Raddrehzahlfuehler Hinten Links: Luftspalt zu groß. |
| 0x5e35 | P Raddrehzahlfuehler Hinten Links: Dynamischen Signalverlust registriert. |
| 0x5e36 | P Raddrehzahlfuehler Hinten Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e3b | P Raddrehzahlfuehler Hinten Links: Fehlender Zahn RAD RL. |
| 0x5e3c | P Raddrehzahlfuehler Hinten Links: Radschlupfueberwachung  RL. |
| 0x5e3d | P Raddrehzahlfuehler Hinten Links: Fehler Anfahrerkennung RAD RL (RDF-Signalwert ungueltig). |
| 0x5eff | P Raddrehzahlfuehler Hinten Links: max. Time InplRad Rad FL ueberschritten |
| 0x5e3e | P Raddrehzahlfuehler Hinten Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e40 | P Raddrehzahlfuehler Hinten Rechts: Signalflanke fehlt. |
| 0x5e41 | P Raddrehzahlfuehler Hinten Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e42 | P Raddrehzahlfuehler Hinten Rechts: Luftspalt zu groß. |
| 0x5e43 | P Raddrehzahlfuehler Hinten Rechts: Dynamischen Signalverlust registriert |
| 0x5e44 | P Raddrehzahlfuehler Hinten Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e49 | P Raddrehzahlfuehler Hinten Rechts: Fehlender Zahn RAD RR. |
| 0x5e4a | P Raddrehzahlfuehler Hinten Rechts: Radschlupfueberwachung  RR. |
| 0x5e4b | P Raddrehzahlfuehler Hinten Rechts: Fehler Anfahrerkennung RAD RR (RDF-Signalwert ungueltig). |
| 0x5f00 | P Raddrehzahlfuehler Hinten Rechts: max. Time InplRad Rad FL ueberschritten |
| 0x5e4c | P Raddrehzahlfuehler Vorne Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e4e | P Raddrehzahlfuehler Vorne Rechts: Signalflanke fehlt. |
| 0x5e4f | P Raddrehzahlfuehler Vorne Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5e50 | P Raddrehzahlfuehler Vorne Rechts: Luftspalt zu groß. |
| 0x5e51 | P Raddrehzahlfuehler Vorne Rechts: Dynamischen Signalverlust registriert. |
| 0x5e52 | P Raddrehzahlfuehler Vorne Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor). |
| 0x5e57 | P Raddrehzahlfuehler Vorne Rechts: Fehlender Zahn RAD FR. |
| 0x5e58 | P Raddrehzahlfuehler Vorne Rechts: Radschlupfueberwachung  FR. |
| 0x5e59 | P Raddrehzahlfuehler Vorne Rechts: Fehler Anfahrerkennung RAD FR (RDF-Signalwert ungueltig). |
| 0x5f01 | P Raddrehzahlfuehler Vorne Rechts: max. Time InplRad Rad FL ueberschritten |
| 0x5e5c | P Raddrehzahlfuehler allgemein: Plausibilitaet Drehrichtung. |
| 0x5e5d | P Raddrehzahlfuehler allgemein: Unplausibilitaet bei ABS-Regelung. |
| 0x5e5e | P Raddrehzahlfuehler allgemein: Schlupfueberwachung (Lambda) allgemein. |
| 0x5f02 | P Raddrehzahlfuehler allgemein: max. Anzahl der InplRad ueberschritten |
| 0x5e60 | P Bremslichschalter-Fehler: Plausibilitaet BLS versus BS |
| 0x5e62 | P Bremslichschalter-Fehler: Ueberwachung BLS permanent high |
| 0x5e37 | P Bremslichschalter-Fehler: DME meldet BLS-Fehler im Bremssystem.  |
| 0x5eee | P Bremslichschalterc:  - Plausibilitaet 1 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5eef | P Bremslichschalter:  - Plausibilitaet 2 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5ef0 | P Bremslichschalter:  - Plausibilitaet 3 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0xD347 | P CAN-Fehler: BusOff Fehler CAN1 oder CANSys - Init oder allgemeiner Fehler |
| 0xD34B | P CAN-Fehler: BusOff Fehler CAN2 = F_CAN |
| 0xD354 | P CAN-Fehler: Botschaft TORQUE_1 (ID 0x0A8) fehlt ! |
| 0xD355 | P CAN-Fehler: Botschaft TORQUE_2 (ID 0x0A9) fehlt ! |
| 0xD356 | P CAN-Fehler: Botschaft TORQUE_3 (ID 0x0AA) fehlt ! |
| 0xD357 | P CAN-Fehler: Botschaft VERZOEGERUNG_ANF-ACC (ID 0x0AD,(ST_DCRN_BRP_TAR_ACC)) fehlt ! |
| 0x5e6a | P CAN-Fehler: Botschaft DREHMOMENT-ANF-DSC (ID 0x0B6) nicht abgeschickt ! |
| 0xD358 | P CAN-Fehler: Botschaft GETRIEBEDATEN (ID 0x0BA) fehlt ! |
| 0x5e6b | P CAN-Fehler: Botschaft LENKRADWINKEL (ID 0x0C4) nicht abgeschickt ! |
| 0xD359 | P CAN-Fehler: Botschaft LENKRADWINKEL_OBEN (ID 0x0C8) fehlt ! |
| 0x5e72 | P CAN-Fehler: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) nicht abgeschickt ! |
| 0xD35A | P CAN-Fehler: Botschaft KLEMMENSTATUS (ID 0x130) fehlt ! |
| 0x5e74 | P CAN-Fehler: Botschaft STAT_DSC (ID 0x19E) nicht abgeschickt ! |
| 0x5e75 | P CAN-Fehler: Botschaft GESCHWINDIGKEIT (ID 0x1A0) nicht abgeschickt ! |
| 0x5e76 | P CAN-Fehler: Botschaft WEGSTRECKE (ID 0x1A6) fehlt ! |
| 0xD35C | P CAN-Fehler: Botschaft STAT_KOMBI (ID 0x1B4) fehlt ! |
| 0xD35D | P CAN-Fehler: Botschaft STAT_AFS (ID 0x1FC) fehlt ! |
| 0x5E77 | P CAN-Fehler: Botschaft STAT_RPA (ID 0x31D) nicht abgeschickt ! |
| 0x5E7A | P CAN-Fehler: Botschaft BREMSDRUCK_RAD (ID 0x2B2) nicht abgeschickt ! |
| 0xD35E | P CAN-Fehler: Botschaft A_TEMP_RELATIVZEIT (ID 0x310) fehlt ! |
| 0xD35F | P CAN-Fehler: Botschaft STAT_ARS (ID 0x1AC) fehlt ! |
| 0xD360 | P CAN-Fehler: Botschaft KILOMETERSTAND (ID 0x330) fehlt ! |
| 0x5e7e | P CAN-Fehler: Botschaft RAD_TOLERANZ (ID 0x374) nicht abgeschickt ! |
| 0xD361 | P CAN-Fehler: Botschaft FAHRGESTELLNUMMER (ID 0x380) fehlt ! |
| 0xD362 | P CAN-Fehler: Botschaft FAHRZEUGTYP (ID 0x388) fehlt ! |
| 0xD363 | P CAN-Fehler: Botschaft BEDIENUNG_FAHRWERK (ID 0x398) fehlt ! |
| 0xD364 | P CAN-Fehler: Botschaft NM_PT_CAN (ID 0x480) fehlt ! |
| 0x5e83 | P CAN-Fehler: Botschaft NM_PT_CAN_DSC (ID 0x4A9) nicht abgeschickt ! |
| 0x5e84 | P CAN-Fehler: Botschaft BOS_MELDUNG_DSC (ID 0x5A9) nicht abgeschickt ! |
| 0xD365 | P CAN-Fehler: Botschaft BOS_RUECKSTELLUNG (ID 0x5E0) fehlt ! |
| 0x5e85 | P CAN-Fehler: Botschaft YAW_REQUEST (ID 0x0C5) nicht abgeschickt ! |
| 0xD366 | P CAN-Fehler: Botschaft YAW_ANSWER (ID 0x0C7) fehlt ! |
| 0xD367 | P CAN-Fehler: Botschaft EXCH_AFS_DSC (ID 0x118) fehlt ! |
| 0xD368 | P CAN-Fehler: Botschaft RWDT_STEA_WHL (ID 0x0C3) fehlt ! |
| 0x5e89 | P CAN-Fehler: Botschaft YAW_REQUEST_2 (ID 0x0CA) nicht abgeschickt ! |
| 0xD369 | P CAN-Fehler: Botschaft YAW_ANSWER_2 (ID 0x0CB) fehlt ! |
| 0x5e8a | P CAN-Fehler: Botschaft REGELEINGRIFF_DSC_AFS (ID 0x11E) nicht abgeschickt ! |
| 0x5e8b | P CAN-Fehler: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) nicht abgeschickt ! |
| 0x5e8c | P CAN-Fehler: Botschaft STATUS_ANHAENGER (ID 0x2E4) fehlt ! |
| 0x5e8e | P Querbeschleunigungssensor:  - Messbereich Querbeschleunigungssensor. |
| 0x5e90 | P Querbeschleunigungssensor:  - Langzeit-Offset ueberschreitet Limit. |
| 0x5e91 | P Querbeschleunigungssensor:  - Wert waehrend Stillstand zu gross. |
| 0x5e92 | P Querbeschleunigungssensor:  - Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5e93 | P Querbeschleunigungssensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5e95 | P Querbeschleunigungssensor:  - Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5e96 | P Querbeschleunigungssensor:  - Plattform-Software (PSW) - Fehlerverdacht. |
| 0x5e97 | P Querbeschleunigungssensor:  - Controller Release System (CRS)- Fehlerverdacht bei Messbereich. |
| 0x5e98 | P Querbeschleunigungssensor:  - DrsERRN02 - AYS interner Wert ausser Messbereich |
| 0x5e99 | P Querbeschleunigungssensor:  - DrsERRN04 - AYS interner Selbsttest nicht bestanden |
| 0x5e64 | P Querbeschleunigungs Sensor:  - Drs2ERRN02 - AYS interner Wert ausserhalb Messbereich (DRS2 AFS) |
| 0x5e65 | P Querbeschleunigungs Sensor:  - Drs2ERRN04 - AYS interner Selbsttest nicht bestanden (DRS2 AFS) |
| 0x5e9a | P Drehratensensor:  - Vorzeichen-Fehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e9b | P Drehratensensor:  - Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5e9c | P Drehratensensor:  - Plausibilitaetsfehler in Bezug zu Lenkwinkelsensor. |
| 0x5e9d | P Drehratensensor:  - Messbereich DRS. |
| 0x5e9e | P Drehratensensor:  - Sign Fehler (ohne SilaMemory) |
| 0x5e9f | P Drehratensensor:  - Offset ueberschreitet Limit waehrend Stillstand. |
| 0x5ea0 | P Drehratensensor:  - Signalgradient DRS. |
| 0x5ea1 | P Drehratensensor:  - Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5ea2 | P Drehratensensor:  - Offset ueberschreitet Limit waehrend schneller Kompensation. |
| 0x5ea3 | P Drehratensensor:  - Empfindlichkeit ueberschreitet Limit. |
| 0x5ea4 | P Drehratensensor:  - Offset ueberschreitet Limit waehrend langsamer Kompensation. |
| 0x5ea5 | P Drehratensensor:  - Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5ea6 | P Drehratensensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5ea7 | P Drehratensensor:  - Redundanz Fehler |
| 0x5ea8 | P Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht bei Messbereich DRS. |
| 0x5ea9 | P Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht DRS Static BITE. |
| 0x5eaa | P Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht DRS bei Signalgradient. |
| 0x5eab | P Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht YDRS Dynamic BITE. |
| 0x5eac | P Drehratensensor:  - Plattform-Software (PSW) - Fehlerverdacht DRS. |
| 0x5ead | P Drehratensensor:  - Drs ID passt nicht zur Anfrage |
| 0x5eae | P Drehratensensor:  Checksumme der empfangenen Sensor-Nachricht ist nicht korrekt |
| 0x5eaf | P Drehratensensor:  ERR oder TERR Bit. Keine zusaetzliche Information (ERRNO = 0) |
| 0x5eb0 | P Drehratensensor:  NO1: YRS Interner Wert ausser Wertebereich |
| 0x5eb1 | P Drehratensensor:  NO3: Interner Ref Wert ausser Wertebereich |
| 0x5eb2 | P Drehratensensor:  NO5: Timeout fuer empfangene Nachricht |
| 0x5eb3 | P Drehratensensor:  NO6: Spannungsversorgung zu niedrig |
| 0x5eb4 | P Drehratensensor:  NO7: Spannungsversorgung zu hoch  |
| 0x5eb5 | P Drehratensensor:  NO8: Sensor in Initialisierung |
| 0x5f66 | P Drehratensensor:  DRS2- Drs ID passt nicht zur Anfrage |
| 0x5f67 | P Drehratensensor:  DRS2 Checksumme der empfangenen Sensor-Nachricht ist nicht korrekt |
| 0x5f68 | P Drehratensensor:  DRS2 ERR oder TERR Bit. Keine zusaetzliche Information (ERRNO = 0) |
| 0x5f69 | P Drehratensensor:  DRS2: NO1 YRS Interner Wert ausser Wertebereich |
| 0x5f6a | P Drehratensensor:  DRS2: NO3 Interner Ref Wert ausser Wertebereich |
| 0x5f6b | P Drehratensensor:  DRS2: NO5 Timeout fuer empfangene Nachricht |
| 0x5f6c | P Drehratensensor:  DRS2: NO6 Spannungsversorgung zu niedrig |
| 0x5f6d | P Drehratensensor:  DRS2: NO7 Spannungsversorgung zu hoch  |
| 0x5f6e | P Drehratensensor:  DRS2: NO8 Sensor in Initialisierung |
| 0x5ee2 | P Drucksensor: Plausibilitaet Drucksensor_Signalleitungen- DS5 :DSLine+DSLine2 = 5Volt. |
| 0x5ee4 | P DSC-ECU: ECU-intern: asynchroner Rechenzyklus-Counter; Fehler Drucksensor_Stromversorgung. |
| 0x5ee5 | P Drucksensor:  - Leitungsfehler. |
| 0x5ee6 | P Drucksensor:  - Leitungsfehler: Signal invertiert. |
| 0x5ee7 | P Drucksensor:  - Fehler beiPower Up Selbsttest (POS). |
| 0x5eed | P Drucksensor:  - Drucksensor-Offset ungueltig. |
| 0x5ef2 | P Druck Sensor_ACC_vorne:  - Offset Fehler Drucksensor |
| 0x5ef4 | P Druck Sensor_ACC_vorne:  - Plausibilitaets Fehler Drucksensor Kreis |
| 0x5ef6 | P Druck Sensor_ACC_vorne:  - DS2Add1-e.g. Ti-Drucksensor Leitungsfehler |
| 0x5ef8 | P Druck Sensor_ACC_vorne:  - DS2Add-e.g. Ti-Drucksensor Fehler Spannungsversorgung |
| 0x5ef3 | P Druck Sensor_ACC_hinten:  - Offset Fehler Drucksensor |
| 0x5ef5 | P Druck Sensor_ACC_hinten:  - Plausibilitaets Fehler Drucksensor Kreis |
| 0x5ef7 | P Druck Sensor_ACC_hinten:  - DS2Add2-e.g. Ti-Drucksensor Leitungsfehler |
| 0x5eba | P Lenkwinkelsensor:  - Status Fehler |
| 0x5ebb | P Lenkwinkelsensor:  - Signalfehler- Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5ebc | P Lenkwinkelsensor:  - Sign Fehler (ohne SilaMemory) |
| 0x5ebd | P Lenkwinkelsensor:  - Signal verbleibt auf konstanten Wert. |
| 0x5ebe | P Lenkwinkelsensor:  - Messbereich LWS. |
| 0x5ebf | P Lenkwinkelsensor:  - Signalgradient LWS. |
| 0x5ec0 | P Lenkwinkelsensor:  - Langzeit-Offset-Wert ueberschreitet Limit. |
| 0x5ec1 | P Lenkwinkelsensor:  - Plausibilitaetsfehler - in Bezug zu Drehratensensor. |
| 0x5ec5 | P Lenkwinkelsensor:  - CAN-Botschaftszaehler meldet Fehler. |
| 0x5f0c | P Lenkwinkelsensor:  - Segment-Finder Algorithmus fand kein Segment, Temp. |
| 0x5f0d | P Lenkwinkelsensor:  - Segment-Finder Algorithmus  fand falsches Segment |
| 0x5f0e | P Lenkwinkelsensor:  - SFA fand kein Segment und vfzref > 25 km/h, Temp. |
| 0x5f0f | P Lenkwinkelsensor:  - Sensor ist nicht Initialisiert unter 25 km/h , Temp. |
| 0x5f63 | P Lenkwinkelsensor:  - LWS4 (RWDT_STEA_WHL) nicht abgeglichen |
| 0x5ed4 | P Unplausible DSC-Regelung : Unplausibilitaet bei Gierratenregelung. |
| 0x5ed5 | P Unplausible DSC-Regelung : Notbremsfunktion ausgeloest. |
| 0x5eda | P Variantencodierung: Codierungswert in EEPROM nicht zulaessig. |
| 0x5edb | P Variantencodierung: Codierungswert ausserhalb Wertebereich. |
| 0x5edc | P Variantencodierung: Codierungswert nicht freigegeben in diesem Projekt. |
| 0x5efb | P Varianten Umstellung nicht gelesen aus EEPROM  |
| 0x5efc | P keine Fahrzeugtyp Daten empfangen |
| 0x5efd | P neue Variantenkodierung - Wert gesetzt |
| 0x5f23 | P EEPROM Konfiguration ACB Hba Value im EEPROM nicht gueltig |
| 0x5f24 | P Abgeschaltet ACB HBA HPS HVV durch EEPROM |
| 0x5f2c | P EEPROM Inhalt nicht gueltig |
| 0x5f60 | P Variantenkodierung passt nicht zum Fahrzeug |
| 0x5f18 | P Variantenkodierung: EEPROM Konfiguration FZR Tol Wert in EEPROM nicht gueltig |
| 0x5f1e | P Variantenkodierung: TOL ueber EEPROM deaktiviert |
| 0x5ef9 | P DSC-Software: ECU-intern : Timeout in Software-Startup-Phase. |
| 0x5efa | P DSC-Software: ECU-intern : asynchroner Rechenzyklus-Counter in Software. |
| 0x5f20 | P ASW Anwendersoftware-Fehler: fordert vollstaendiges Abschalten des Systems an |
| 0x5f21 | P ASW Anwendersoftware-Fehler: fordert nur EBD Funktion an |
| 0x5f22 | P ASW Anwendersoftware-Fehler: fordert nur ABS Funktion an |
| 0x5f07 | P AccEcd-Fehler: Timeout beim Empfangen der CAN Botschaften fuer ACC (ID 0x0AD), |
| 0x5f08 | P AccEcd-Fehler: ACC, ECD alive-Fehler (ID 0x0AD,(ALIV_DCRN_BRP_ACC)) |
| 0x5f09 | P AccEcd-Fehler: Gueltigkeitscheck des gesetzten Werts gescheitert (ID 0x0AD,(ST_DCRN_BRP_TAR_ACC)(DCRN_BRP_TAR_ACC)) |
| 0x5f0a | P AccEcd-Fehler: ACC sendet Fehler Bit(ID 0x0AD,(ST_ACC_SWO_SYS_DSC)) |
| 0x5f2d | P AccEcd-Fehler: Checksumme der empfangenen ACC Botschaft nicht richtig (ID 0x0AD,(CHKSM_DCRN_BRP_ACC) |
| 0x5f40 | P AccEcd-Fehler: Status Verzoegerung Bremsdruck ungueltig oder Status ACC Systemabschaltung, ungueltiges Signal im Botschaft (ID 0x0AD,(ST_ACC_SWO_SYS_DSC)(ST_DCRN_BRP_TAR_ACC)) |
| 0x5f10 | P Bremsbelagverschleiss-Fehler: Sensor check Vorderachse gescheitert |
| 0x5f11 | P Bremsbelagverschleiss-Fehler: Sensor check Hinterachse gescheitert |
| 0x5f12 | P Bremsbelagverschleiss-Fehler: Vorderachse Verschleissgrenze erreicht |
| 0x5f13 | P Bremsbelagverschleiss-Fehler: Hinterachse Verschleissgrenze erreicht |
| 0x5f14 | P Bremsbelagverschleiss-Fehler: Vorderachse Werte - sind nicht aktualisiert |
| 0x5f15 | P Bremsbelagverschleiss-Fehler: Hinterachse Werte - sind nicht aktualisiert |
| 0x5f1a | P DSC-ECU Software: CUS-Block: Fahrleistungsreduzierung |
| 0x5f1b | P DSC-ECU Software: CUS-Block: Fahrleistungsreduzierung abgeschaltet |
| 0x5f25 | P ARS-ECU-Fehler:Timeout waehrend Empfang von CAN Botschaften fuer ARS (reversibel!) |
| 0x5f26 | P ARS-ECU-Fehler: ARS alive-Fehler (ID 0x1AC,(ALIV_COU_ARS)) |
| 0x5f1f | P ARS-ECU-Fehler: Status ungueltig (ID 0x1AC,(ST_ARS)) |
| 0x5ed6 | P LZA-Fehler: SIC-Langzeit-Kompensation abgeschaltet. |
| 0x5f2e | P Getriebe-Fehler: Getriebe Botschaft fehlt oder Checksumme nicht gueltig (ID 0x0BA,(ALIV_GRB)(CHKSM_GRB)) |
| 0x5f2f | P Getriebe-Fehler: Getriebe Status ungueltig oder Schalthebel ungueltig oder Getriebe negative-lift ungueltig (ID 0x0BA,(RPM_GRB_NEGL)(ST_GRLV_ACV)(ST_GR_GRB)) |
| 0x5f30 | P DME-Fehler: Motordrehzahl ungueltig |
| 0x5f31 | P DME-Fehler: mittleres Effektivdrehmoment ungueltig |
| 0x5f32 | P DME-Fehler: unbearbeitetes Gaspedal ungueltig |
| 0x5f33 | P DME-Fehler: ASR/MSR Rueckmeldung ist Null |
| 0x5f34 | P DME-Fehler: Checksumme oder alive-Fehler von Nachricht TORQUE_1 ungueltig |
| 0x5f35 | P DME-Fehler: Checksumme oder alive von Nachricht TORQUE_2 ungueltig |
| 0x5f36 | P DME-Fehler: Checksumme oder alive von Nachricht TORQUE_3 ungueltig |
| 0x5f6f | P DME-Fehler: Drehmoment aktueller Wert ungueltig (ID 0x0A8,(TORQ_AVL)) |
| 0x5f70 | P DME-Fehler: Status Kupplungsschalter ungueltig (ID 0x0A8,(ST_SW_CLT)) |
| 0x5f71 | P DME-Fehler: Drehmoment aktuelles Minimum ungueltig (ID 0x0A9,(TORQ_AVL_MIN)) |
| 0x5f72 | P DME-Fehler: Drehmoment aktuelles Maximum ungueltig (ID 0x0A9,(TORQ_AVL_MAX)) |
| 0x5f73 | P DME-Fehler: Drehmoment aktueller Wert der freien Stellung ungueltig (ID 0x0A9,(TORQ_AVL_SPAR_POS)) |
| 0x5f74 | P DME-Fehler: Winkel Gaspedal ungueltig (ID 0x0AA,(ANG_ACPD)) |
| 0x5f75 | P DME-Fehler: Drehmoment Fahrer Wahl ungueltig (ID 0x0AA,(TORQ_DVCH)) |
| 0x5f76 | P DME-Fehler: Drehzahl Wert ungueltig (ID 0x0AA,(RPM_ENG)) |
| 0x5f77 | P DME-Fehler: Status Drehmoment aktueller Wert ungueltig (ID 0x0A8,(ST_RCPT_ENG_DSC)) |
| 0x5f78 | P DME-Fehler: Status vom Motor empfangen ungueltig (ID 0x0A8,(ST_RCPT_ENG_DSC)) |
| 0x5f45 | P Niveau Bremsfluessigkeit zu niedrig |
| 0x5f47 | P Kombi-Fehler: Kombi alive-Fehler |
| 0x5f48 | P Kombi-Fehler: Zeit ungueltig oder Temperatur ungueltig (ID 0x310,(TEMP_EX,T_SEC_COU_REL) |
| 0x5f49 | P Kombi-Fehler: Kilometerstand ungueltig (ID 0x330,(MILE_KM)) |
| 0x5f4a | P Kombi-Fehler: Bremsbelagverschleiss vorne oder hinten: Daten ungueltig |
| 0x5f4b | P Kombi-Fehler: Statusanzeige Handbremslichtschalter ungueltig(ID 0x1B4,(ST_IDLI_HABR))  |
| 0x5f4c | P Kombi-Fehler: CANSys - Unterbrechung aller Kombi Nachrichten (0x1B4,0x310,0x330,0x5E0) |
| 0x5f50 | P Ventil-Fehler: ValveGen Uebertemperatur Fehler |
| 0x5f52 | P CCC/MASK-Fehler: Bedienung Reifendruckcontrol ungueltig |
| 0x5f54 | P CAS-Fehler: Fahrzeugfahrgestellnummer ungueltig (ID 0x380,(NO_VECH_1) |
| 0x5f55 | P CAS-Fehler: Motortyp ungueltig (ID 0x388,(TYP_VEH,TYP_ENG,TYP_GRP,TYP_CAPA) |
| 0x5f56 | P CAS-Fehler: KL-15 Signal ungueltig oder KL-R Signal ungueltig oder KL-15 verglichen mit Wauln Plausibilitaets test nicht bestanden (ID 0x130,(ST_KL_R,ST_KL_15) |
| 0x5f57 | P CAS-Fehler: CANSys - Unterbrechung aller CAS Nachrichten (ID 0x130,0x380,0x388) |
| 0x5f61 | P AFS-Status ungueltig (ID 0x1FC,(ST_FN_AFS)) |
| 0x5f62 | P Signal Austausch AFS-DSC ungueltig |
| 0x5f79 | P Anhaenger Fehler; Anhaenger Signal ungueltig |
| 0x5f7a | P Anhaenger Fehler |
| 0x60ac | P RPA-Fehler: Reifenpannenanzeige: Codierdaten unplausibel |
| 0x60ad | P RPA-Fehler: Reifenpannenanzeige: Standardisierungsdaten unplausibel |
| 0x60ae | P RPA-Fehler: Reifenpannenanzeige: RPA-FASTA Daten unplausibel |
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
| 0xA368 | Kurzschluss in der GPS-Antenne (Error_HW_GPS_ANTENNA_SHORT) |
| 0xA369 | GPS-Antenne nicht angeschlossen (Error_HW_GPS_ANTENNA_OPEN) |
| 0xA36A | Fehler im GPS-Modul (Error_HW_GPS_HW) |
| 0xA36B | Kommunikation zum GPS-Modul gestoert (Error_HW_GPS_COMM_FAIL) |
| 0xA36D | Notruftaster fehlerhaft oder nicht angeschlossen (Error_HW_MAYDAY_SWITCH_DISCONNECTED) |
| 0xA36E | Notruf-LED ist ohne Funktion (Error_HW_MAYDAY_LED_NOK) |
| 0xA370 | Kurzschluss gegen 12V im Notruftaster (Error_HW_MAYDAY_SWITCH_SHORT) |
| 0xA373 | Speicherfehler (Error NVM_NOK) |
| 0xA374 | Kurzschluss gegen Masse im Notruftaster (Error_HW_MAYDAY_SWITCH_STUCK) |
| 0xA375 | Kommunikation mit Airbag-SG gestoert (Error_IBUS_CONNECTION_FAIL) |
| 0xA376 | Kommunikation mit PhoneBoard gestoert (Error_CAN_TELECOMMANDER_FAIL) |
| 0xA377 | Fehler im PhoneBoard (Error_TELCOMMANDER_KEYPAD_FAIL) |
| 0xA379 | Fehler im Bluetooth-Interface (Error_BT_INTERFACE) |
| 0xA37A | Energiesparmode aktiv (Error_MTS_MODE_ACTIVE) |
| 0xA37C | Fehler in Telematics Sim (Error_TELEMATICS_SIM) |
| 0xA390 | Fehler mit Backup Antenne (Error_BACKUP_ANTENNA) |
| 0xA391 | Fehler mit Haupt TCU Antenne (Error_TCU_MAIN_ANTENNA) |
| 0xA392 | Fehler mit Backup Lautsprecher (Error_BACKUP_LOUDSPEAKER) |
| 0xA397 | Fehler mit BT Cradle Button (Error_CRADLE_BUTTON_STUCK) |
| 0xA398 | Fehler mit Mikrofon 1 (Error_MICROPHONE_1) |
| 0xA399 | Fehler mit Mikrofon 2 (Error_MICROPHONE_2) |
| 0xA3A0 | Prefit SIM nicht erreichbar (Error_PREFIT_SIM_NOT_ACCESSABLE) |
| 0xA3A1 | Fehler beim Lesen der Prefit SIM (Error_READING_SIM_CARD) |
| 0xA3A2 | Prefit SIM PIN gesperrt (Error_PREFIT_SIM_LOCKED) |
| 0xA3A3 | Fehler mit Bluetooth Antenne (Error_BLUETOOTH_ANTENNA) |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9312 | Niedrige Feldstaerke waehrend aktiver Verbindung über das interne NAD (Error_LOW_RF) |
| 0x9313 | Fehler im NVM (Error_NVM_CORRUPTION) |
| 0x9314 | Fehlerhafte Codierdaten (Error_CODING_DATA) |
| 0x9315 | Kommunikation mit Telefon-Netzwerk nicht moeglich / Communication with network provider not possible (Error_HW_TRANSCEIVER_FAIL) |
| 0x9316 | Unbekannter Portable Fehler (Error_PORTABLE) |
| 0x9317 | Notruf-LED ist ohne Funktion/Mayday - LED is without function(Error_HW_MAYDAY_LED_NOK). |
| 0x9318 | Kommunikation zwischen GPS-Modul und MOST gestoert/Communication between MOST and GPS module interrupted(Error_HW_GPS_COMM_FAIL). |
| 0x931A | Prefit sim nicht angeschlossen/Prefit sim not present. |
| 0x931B | Fehler beim Lesen der Prefit SIM / Prefit sim read error. |
| 0x931C | Prefit SIM PIN Locked |
| 0x931D | Fehler mit Prefit SIM Network / Prefit SIM Network Error |
| 0x9301 | Phone_ID_1 |
| 0x9302 | Phone_ID_2 |
| 0x9303 | Phone_ID_3 |
| 0x9304 | Phone_ID_4 |
| 0xD68D | Weckendes Device hat drei Mal erfolglos versucht, das Netzwerk zu wecken (Error_WAKEUP_Failed) |
| 0xD68E | Obwohl Shutdown (Execute) geschickt wurde, ging das Licht nicht aus (Error_Light_Not_Off) |
| 0xD690 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose) |
| 0xD691 | Lange und/oder haeufige Unlocks (Error_Unlock_Long) |
| 0xD692 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown) |
| 0xA368 | Kurzschluss in der GPS-Antenne (Error_HW_GPS_ANTENNA_SHORT) |
| 0xA369 | GPS-Antenne nicht angeschlossen (Error_HW_GPS_ANTENNA_OPEN) |
| 0xA36A | Fehler im GPS-Modul (Error_HW_GPS_HW) |
| 0xA36B | Kommunikation zwischen GPS-Modul und MOST gestoert (Error_HW_GPS_COMM_FAIL) |
| 0xA36C | Fehler im internen Telefon Modul (ERROR_NAD) |
| 0xA36D | Notruftaster fehlerhaft oder nicht angeschlossen (Error_HW_MAYDAY_SWITCH_DISCONNECTED) |
| 0xA36E | Notruf-LED ist ohne Funktion (Error_HW_MAYDAY_LED_NOK) |
| 0xA36F | Kommunikation mit Airbag SG gestoert (ERROR_COM_AIRBAG_ECU) |
| 0xA370 | Kurzschluss gegen 12V im Notruftaster (Error_HW_MAYDAY_SWITCH_SHORT) |
| 0xA372 | Kommunikation mit Airbag SG gestoert (ERROR_COM_AIRBAG_ECU) |
| 0xA373 | Speicherfehler (Error NVM_NOK) |
| 0xA374 | Kurzschluss gegen Masse im Notruftaster (Error_HW_MAYDAY_SWITCH_STUCK) |
| 0xA375 | Kommunikation mit Airbag-SG gestoert (Error_IBUS_CONNECTION_FAIL) |
| 0xA376 | Kommunikation mit PhoneBoard gestoert (Error_CAN_TELECOMMANDER_FAIL) |
| 0xA377 | Fehler im PhoneBoard (Error_TELCOMMANDER_KEYPAD_FAIL) |
| 0xA378 | Kommunikation mit Airbag SG gestoert (ERROR_COM_AIRBAG_ECU) |
| 0xA379 | Fehler im Bluetooth-Interface (Error_BT_INTERFACE) |
| 0xA37A | Energiesparmode aktiv (Error_MTS_MODE_ACTIVE) |
| 0xA37B | Fehler mit Backup Antenne (ERROR_BACKUP_ANTENNA) |
| 0xA37C | Fehler mit Haupt TCU Antenne (ERROR_TCU_MAIN_ANTENNA) |
| 0xA37D | Fehler mit Backup Lautsprecher (ERROR_BACKUP_LOUDSPEAKER) |
| 0xA37E | Fehler mit BT Cradle Button (ERROR_BT_CRADLE_BUTTON) |
| 0xA382 | Fehler mit Mikrofon 1 (ERROR_MIC_1) |
| 0xA383 | Fehler mit Mikrofon 2 (ERROR_MIC_2) |
| 0xA384 | Prefit SIM physikalisch nicht erreichbar (ERROR_PSIM_NOT_REACHABLE) |
| 0xA385 | Prefit SIM Lesefehler (ERROR_PSIM_NOT_READABLE) |
| 0xA386 | Prefit SIM PIN gesperrt (ERROR_PSIM_PIN_LOCKED) |
| 0xA387 | Fehler mit Bluetooth Antenne (ERROR_BT_ANTENNA) |
| 0xA8E8 | Fehler in Wheel Speed Sensor (ERROR_WHEEL_SPEED_SENSOR) |
| 0xA8E9 | Fehlerhafte Codierdaten (ERROR_CODING_DATA) |
| 0x9301 | Phone_ID_1 |
| 0x9302 | Phone_ID_2 |
| 0x9303 | Phone_ID_3 |
| 0x9304 | Phone_ID_4 |
| 0x9308 | Watchdog Reset |
| 0x9309 | HW NS Init Timeout |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off) |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer) |
| 0x930C | Kurze Unlocks (Error_Unlock_Short) |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus) |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK) |
| 0x9312 | Niedrige Feldstaerke waehrend aktiver Verbindung über das interne NAD (Error_LOW_RF) |
| 0x9313 | Behebbarer Fehler im NVM (Error_NVM_CORRUPTION) |
| 0x931A | Prefit SIM nicht angeschlossen; PSIM jedoch momentan nicht aktiviert (ERROR_PSIM_NOT_REACHABLE) |
| 0x931B | Fehler beim Lesen der Prefit SIM; PSIM jedoch momentan nicht aktiviert (ERROR_PSIM_NOT_READABLE) |
| 0x931C | Prefit SIM PIN gesperrt; PSIM jedoch momentan nicht aktiviert (ERROR_PSIM_PIN_LOCKED) |
| 0x931D | Prefit SIM von Provider nicht freigeschaltet (ERROR_PSIM_DENIED_IN_THE_NETWORK) |
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
| 0x9714 | DSP hat Audio Synchronation verloren |
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
| 0x9CE8 | P Fault in RAM Memory |
| 0x9CE9 | P Fault in Flash Memory |
| 0x9CEA | P Fault in EEPROM |
| 0x9CEB | P 'Energiesparmode' active |
| 0x9CF9 | P Fault in LED |
| 0x9D00 | P Fault in DWABUS |
| 0x9D12 | P Fault in Internal Battery |
| 0x9D14 | P Fault in Protection Circuit |
| 0x9D15 | P Fault in Wakeup Circuit |
| 0x9D16 | P Fault in Sound Circuit |
| 0x9D1F | P Fault in Tilt Sensor Circuit |
| 0xD944 | P CAN physical error: single wire |
| 0xD947 | P CAN physical error: bus off |
| 0x9D17 | P Max Operating Temperature Exceeded |
| 0x9D01 | P MUW implausible |
| 0x9D18 | P General default data use |
| 0x9D19 | P Application default data use |
| 0x9D1A | P SIREN default data use |
| 0x9D1B | P TILTSENSOR default data use |
| 0x9D1C | P Min Operating Temperature Exceeded |
| 0x930A | S Error Door Contact |
| 0x9314 | S Sensor Inactivated |
| 0x9339 | S Polarity Inversion Detected |
| 0x9D13 | S External battery voltage out of range |
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
| 0xA38E | FBAS-Eingangssignal 3 (NIVI / RFK ) - evtl. ueber AVM - ausserhalb der Toleranz |
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
| 0xA399 | SG wurde in den Passive Mode geschaltet (MOST aktiv, keine Applikation) |
| 0xA39A | Sicherung 3.3V defekt (MOST aktiv, keine Applikation) |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x930B | Empfaenger hat nicht geantwortet obwohl in Central Registry vorhanden (Error_Device_No_Answer) |
| 0x9336 | TaskDelayed: Timeout der Rueckmeldung zum SW-WatchDog |
| 0x9337 | Luefter defekt: |
| 0x9338 | Modul defekt: |
| 0x9339 | Schnittstelle defekt: |
| 0x933A | Checksumme Programm-Flash fehlerhaft |
| 0x933B | Fehler bei der Most High Uebertragung |
| 0x933D | Laufzeit-Info: Message Queue |
| 0x933E | Laufzeit-Fehler: OSEK Wait |
| 0x933F | Laufzeit-Fehler: OSEK Get/Release Resource |
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
| 0xA528 | Error_Micro/Memory_Failure |
| 0xA529 | Error_IBOC_Tuner_Fault |
| 0xA52A | Error_DSP_Fault |
| 0xA52B | Error_Antenna_Fault |
| 0xA52E | Error_Oasis_Chip_Interrupt_Malfunction |
| 0xDDCE | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off) |
| 0xDDD0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose) |
| 0xDDD1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long) |
| 0xDDD2 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown) |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Applikation hat sich wegen Übertemperatur abgeschaltet. 80C < temp < 85C (Error_Application_Temp_ShutDown). |
| 0x9408 | Applikation hat sich wegen Übertemperatur abgeschaltet. 80C < temp < 85C (Error_Application_Temp_ShutDown). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
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
| 0xFFFF | unbekannter Fehlerort |

### ID_57

| ORT | ORTTEXT |
| --- | --- |
| 0xA748 | Taster (ein/aus), Überspannung oder Unterspannung |
| 0xA749 | Videoverbindung ECU |
| 0xA74A |  Failure smart switch |
| 0xA74B | Diebstahlschutz |
| 0xA74C | Energiesparmodus Ein |
| 0xA74D | Spannungsversorgung ECU |
| 0xA74E | LIN Kommunikation ECU |
| 0xA74F | EEPROM - Kodierdatenfehler Autoliv |
| 0xA750 | EEPROM - Kodierdatenfehler BMW |
| 0xA751 | CAN: Schwenkmodus Aus Panning disable |
| 0xA752 | CAN: Ausfall Telegramm Lenkradwinkel |
| 0xA753 | CAN: Ausfall Telegramm Klemmenstatus |
| 0xA754 | CAN: Ausfall Telegramm Geschwindigkeit |
| 0xA755 | CAN: Ausfall Telegram Fahrzeugneigung |
| 0xA756 | CAN: Ausfall Telegramm Aussentemperatur |
| 0xA757 | CAN: Ausfall Telegramm Status Fahrlicht |
| 0xA758 | CAN: Ausfall Telegramm Kilometer/Reichweite |
| 0xA759 | CAN: Ausfall Telegramm Lampenzustand |
| 0xA75E | CAN: kein Acknowledge |
| 0xA760 | CAN: Signal ungültig Netzwerkmanagement KGM Error |
| 0xA761 | CAN: Ausfall Telegramm Status Funkschlüssel |
| 0xA762 | CAN: CAN No ID |
| 0xA763 | Microcontroller |
| 0xDEC4 | CAN-Low |
| 0xDEC7 |  CAN BUS OFF oder Dual ported RAM |
| 0xA800 | Kamera Abschaltung aufgrund zu hoher Temperatur |
| 0xA801 | Watchdog Kamera |
| 0xFFFF | unbekannter Fehlerort |

### ID_58

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_59

| ORT | ORTTEXT |
| --- | --- |
| 0xDF47 | Bus Kommunikationsfehler Pt-CAN |
| 0xA708 | Unter oder Ueberspannung |
| 0xA709 | Aktuator Fehler Links |
| 0xA70A | SG Fehler |
| 0xA70B | Klemmenstatus Signal |
| 0xA70C | Bediennung Sitz Signal |
| 0xA70D | Bediennung LBV Aktiv Signal |
| 0xA70E | Memoryverstellung Signal |
| 0xA70F | Aussen Temperatur Signal |
| 0xA710 | Relative Zeit Signal |
| 0xA711 | Winkel Fahrpedal Signal |
| 0xA712 | Fahrzeug Geschwindigkeit Signal |
| 0xA713 | Laengsbeschleunigung Signal |
| 0xA714 | Querbeschleunigung Signal |
| 0xA715 | Gierrate Signal |
| 0xA716 | Kilometerstand Signal |
| 0xA717 | Lenkradwinkel Signal |
| 0xA718 | Lenkradwinkelgeschwindigkeit Signal |
| 0xA719 | Status Motor Laueft Signal |
| 0xA71A | Gutkontakt FA Signal |
| 0xA71B | Gurtkontakt BF Signal |
| 0xA71C | Gewichtsklasse Signal |
| 0xA71F | Fahrertür Signal |
| 0xA720 | Beifahrertür Signal |
| 0xA721 | Open Load Motor Links |
| 0xA722 | Open Load Motor Rechts |
| 0xA723 | Aktuator Fehler Rechts |
| 0xA724 | LWS-Offset |
| 0xA725 | AYS-Offset |
| 0xA727 | Energiesparmode aktiv |
| 0x2710 | Unter oder Uber Spannung |
| 0x2711 | Ausfall Hallsensor1 Motor1 |
| 0x2712 | Ausfall Hallsensor2 Motor1 |
| 0x2713 | Problem Endstuffe Links |
| 0x2714 | Problem Endstuffe Rechts |
| 0x2715 | Ausfall Entwertgeber Links |
| 0x2716 | Ausfall Entwertgeber Rechts |
| 0x2717 | Ausfall Temperatursensor Links |
| 0x2718 | Ausfall Temperatursensor Rechts |
| 0x2719 | Ausfall Hallsensor3 Motor2 |
| 0x271A | Ausfall Hallsensor4 Motor2 |
| 0x271B | Problem Motor1 (Hallsensoren oder Motor) |
| 0x271C | Problem Motor2 (Hallsensoren oder Motor) |
| 0x271D | Ungewünschter Reset erkannt |
| 0xFFFF | unbekannter Fehlerort |

### ID_5A

| ORT | ORTTEXT |
| --- | --- |
| 0xDF87 | Bus Kommunikationsfehler Pt-CAN |
| 0xA768 | Unter oder Ueberspannung |
| 0xA769 | Aktuator Fehler Links |
| 0xA76A | SG Fehler |
| 0xA76B | Klemmenstatus Signal |
| 0xA76C | Bediennung Sitz Signal |
| 0xA76D | Bediennung LBV Aktiv Signal |
| 0xA76E | Bedienung Sitz memory Signal |
| 0xA76F | Aussen Temperatur Signal |
| 0xA770 | Relative Zeit Signal |
| 0xA771 | Winkel Fahrpedal Signal |
| 0xA772 | Fahrzeug Geschwindigkeit Signal |
| 0xA773 | Laengsbeschleunigung Signal |
| 0xA774 | Querbeschleunigung Signal |
| 0xA775 | Gierrate Signal |
| 0xA776 | Kilometerstand Signal |
| 0xA777 | Lenkradwinkel Signal |
| 0xA778 | Lenkradwinkelgeschwindigkeit Signal |
| 0xA779 | Status Motor Laueft Signal |
| 0xA77A | Gutkontakt FA Signal |
| 0xA77B | Gurtkontakt BF Signal |
| 0xA77C | Gewichtsklasse Signal |
| 0xA77D | Status Modus Memory Speichern BF Signal |
| 0xA77F | Fahrertür Signal |
| 0xA780 | Beifahrertür Signal |
| 0xA781 | Open Load Motor Links |
| 0xA782 | Open Load Motor Rechts |
| 0xA783 | Aktuator Fehler Rechts |
| 0xA784 | LWS-Offset |
| 0xA785 | AYS-Offset |
| 0xA787 | Energiesparmode aktiv |
| 0x2710 | Unter oder Uber Spannung |
| 0x2711 | Ausfall Hallsensor1 Motor1 |
| 0x2712 | Ausfall Hallsensor2 Motor1 |
| 0x2713 | Problem Endstuffe Links |
| 0x2714 | Problem Endstuffe Rechts |
| 0x2715 | Ausfall Entwertgeber Links |
| 0x2716 | Ausfall Entwertgeber Rechts |
| 0x2717 | Ausfall Temperatursensor Links |
| 0x2718 | Ausfall Temperatursensor Rechts |
| 0x2719 | Ausfall Hallsensor3 Motor2 |
| 0x271A | Ausfall Hallsensor4 Motor2 |
| 0x271B | Problem Motor1 (Hallsensoren oder Motor) |
| 0x271C | Problem Motor2 (Hallsensoren oder Motor) |
| 0x271D | Ungewünschter Reset erkannt |
| 0xFFFF | unbekannter Fehlerort |

### ID_5B

| ORT | ORTTEXT |
| --- | --- |
| 0xA528 | Error_Micro/Memory_Failure. |
| 0xA529 | Error_Band_L_Antenna_Open_Circuit. |
| 0xA52A | Error_Band_L_Antenna_Short_Circuit. |
| 0xA52B | Error_Band_III_Antenna_Open_Circuit. |
| 0xA52C | Error_Band_III_Antenna_Short_Circuit. |
| 0xA52D | Error_TI_Chip_Set_Failure. |
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

### ID_5C

| ORT | ORTTEXT |
| --- | --- |
| 0xE004 | K_CAN_LOW |
| 0xE005 | K_CAN_HIGH |
| 0xE006 | GroundShift |
| 0xE007 | CAN_Controller |
| 0xE03C | Fehlerwert_erhalten |
| 0xE03D | Unplausibles_Signal |
| 0xE03E | Telegramm_Timeout_beim_Emfang |
| 0xE03F | Fehler_beim_Empfang_NM_Botschaft |
| 0xE040 | Fehlerwert_gesendet |
| 0xE041 | Unplausibles_Signal |
| 0xE042 | Telegramm_Timeout_beim_Senden |
| 0xE043 | Fehler_beim_Senden_NM_Botschaft |
| 0x9DE8 | BEHO SG_FEHLER |
| 0x9308 | BEHO SG Fehler |
| 0x9309 | BEHO SG Spannung unter 07 Volt |
| 0x930A | BEHO SG Spannung ueber 16 Volt |
| 0x930B | BEHO SG Spannung zu  BN-Info unplausibel |
| 0x9400 | BEHO Zusatzwarnblinklicht |
| 0x9401 | BEHO Zusatzblinklicht links |
| 0x9402 | BEHO Zusatzblinklicht rechts |
| 0x9403 | BEHO Status Fahrzeug fährt |
| 0x9404 | BEHO Status Klemme R |
| 0x9405 | BEHO Geschwindigkeit |
| 0x9406 | BEHO Status Klemme 61 |
| 0xFFFF | unbekannter Fehlerort |

### ID_5E

| ORT | ORTTEXT |
| --- | --- |
| 0xE087 | Bus Kommunikationsfehler (PT-CAN) |
| 0xE088 | Bus Low Leitungsfehler (LIN) |
| 0xE094 | Botschaft (Anzeige_Getriebedaten, 0x1D2) |
| 0xE095 | Botschaft (Anzeige_Getriebedaten_LIN, 0x02) |
| 0xE096 | Botschaft (Klemmenstatus, 0x130) |
| 0xA82A | Parktaster fehlerhaft |
| 0xA82B | Unlocktaster fehlerhaft |
| 0xA830 | Rückstellsystem: Hebel konnte nicht zurückgestellt werden |
| 0x2710 | Checksummenerror Kodierparameter |
| 0x2711 | Kodierparameter ungültig |
| 0x2712 | Hall-Sensoren Einfachfehler |
| 0x271D | Unterspannung |
| 0x271E | Überspannung |
| 0xFFFF | unbekannter Fehlerort |

### ID_5F

| ORT | ORTTEXT |
| --- | --- |
| 0xA7C8 | Interner Fehler |
| 0xE0C4 | Bus Low line error K-CAN |
| 0xE0C5 | Bus High line error K-CAN |
| 0xE0C7 | Bus communication error K-CAN |
| 0xE0D4 | Botschaft Außentemperatur K-CAN, 2CAh |
| 0xE0D5 | Botschaft Bedienung Lenkstocktaster K-CAN, 1EEh |
| 0xE0D6 | Botschaft Geschwindigkeit K-CAN, 1A0h |
| 0xE0D7 | Botschaft Kilometerstand/Reichweite K-CAN, 330h |
| 0xE0D8 | Botschaft Lampenzustand K-CAN, 21Ah |
| 0xE0D9 | Botschaft Lenkradwinkel K-CAN, 0C4H |
| 0xE0DA | Botschaft Regensensor/Wischergeschwindigkeit K-CAN, 226h |
| 0xA7C8 | Temperatur außerhalb des Arbeitsbereiches |
| 0xA7C9 | Einbruch der Versorgungsspannung |
| 0xA7CA | Lichtwert Bildsensor und Umgebungslichtsensor unplausibel |
| 0xA7CB | Sensitivität verstellt |
| 0xA7CD | Kommunikationsfehler mit Bildsensor |
| 0xA7CE | Kommunikationsfehler mit ALS-Sensoren |
| 0xA7CF | EEProm Werte beschädigt |
| 0xA7D0 | Watchdog Reset |
| 0xA7D1 | Sensor Kalibrationsfehler |
| 0xA7D2 | Sensorsichtfeld verdeckt |
| 0xFFFF | unbekannter Fehlerort |

### ID_60

| ORT | ORTTEXT |
| --- | --- |
| 0x9312 | Energiesparmode aktiv |
| 0x9313 | TEMPERATURFUEHLER_LCD |
| 0x9314 | Kurzschluss Kombitaster |
| 0x9315 | GWSZ_FEHLER_CAS_ODER_KOMBI |
| 0x9316 | GWSZ_FEHLER_EEPROM |
| 0x9317 | EEPROM: Fehler Codierdaten BMW |
| 0x9319 | HEBELGEBER1 |
| 0x931A | HEBELGEBER2 |
| 0x931B | AUSSENTEMPERATURSENSOR |
| 0x931C | KURZSCHUSS_DISPLAYHEIZUNG |
| 0x931D | BORDNETZSPANNUNG, UEBERSPANNUNG ODER UNTERSPANNUNG |
| 0x931E | EEPROM: Fehler Codierdaten Lieferant |
| 0xA3A8 | CAN_NO ID |
| 0xA3A9 | CAN_ID_1EE_ERROR_Ausfall_Botschaft_LSS |
| 0xA3AA | CAN_ID_1D2_ERROR_Botschaft_Getriebedaten |
| 0xA3AB | CAN_ID_190_ERROR_Ausfall_Botschaft_Anzeige_ACC |
| 0xA3AC | CAN_ID_1A6_ERROR_Ausfall_Botschaft_Wegstrecke |
| 0xA3AD | CAN_ID_1D0_ERROR_Ausfall_Botschaft_Motordaten |
| 0xA3AE | CAN_ID_0AA_ERROR_Ausfall_Botschaft_Drehzahl_Leerlauf |
| 0xA3AF | CAN_ID_200_ERROR_Ausfall_Botschaft_Regelgeschw_Stufentempomat |
| 0xA3B0 | CAN_ID_202_ERROR_Ausfall_Botschaft_Dimmung |
| 0xA3B1 | CAN_ID_1F6_ERROR_Ausfall_Botschaft_Blinken |
| 0xA3B2 | CAN_ID_130_ERROR_Ausfall_Botschaft_Klemmenstatus |
| 0xA3B3 | CAN_ID_0BE_ERROR_Ausfall_Botschaft_ARS_Alive_Zaehler_oder_SFY |
| 0xA3B4 | CAN_ID_21A_ERROR_Ausfall_Botschaft_Lampenzustand |
| 0xA3B6 | CAN_ID_5C0_ERROR_Ausfall_Botschaft_CAS_Antwort_RDA_DATEN_fehlen |
| 0xA3B9 | CAN_ID_19E_ERROR_Ausfall_Botschaft_Status_DSC |
| 0xA3BB | CAN_ID_2FC_ERROR_Ausfall_Botschaft_ZV_Klappenzustand |
| 0xA3BC | NO_ANSWER_TO_REQUEST (580h+60h) |
| 0xA3BD | CAN_ID_0C0_ERROR_Ausfall_Botschaft_Alive_Zentrales_Gateway |
| 0xA3BE | CAS_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C0 | AHM_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C1 | LM_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C3 | RDC_AUSFALL_NETZWERKMANAGMENT |
| 0xA3C4 | ID_Ausfall oder Alive ACC |
| 0xA3C5 | ID_Ausfall oder Alive SFY |
| 0xA3C6 | Konsistenzfehler Getriebeposition |
| 0xA3C7 | Luftfeder_AUSFALL_NETZWERKMANAGMENT |
| 0xA548 | ID_Ausfall 1FCh AFS |
| 0xA549 | ID_Ausfall 315h Fahrzeugmodus |
| 0xA54A | Checksummenfehler Antwort CAS auf CAN-Anfrage ID 394h |
| 0xA54D | ID_Ausfall oder Alive EKP |
| 0xA54E | ID_Ausfall oder Alive Sitzlehnenverriegelung Fahrer |
| 0xA54F | ID_Ausfall oder Alive Sitzlehnenverriegelung Beifahrer |
| 0xA550 | ID_Ausfall 1A0h Geschwindigkeit |
| 0xA553 | CBS-EEPROM-Lesefehler |
| 0xA554 | Alive Telefon |
| 0xA555 | Sitzbelegung Gurtkontakte |
| 0xA556 | Ausfall HDC-Anzeige |
| 0xA557 | Debuginfo Kombi |
| 0xA559 | Klemme30g_f_Abschaltung |
| 0xA55A | ID_Ausfall oder Alive TLC |
| 0xA55B | ID_Ausfall oder Alive Airbag |
| 0xA55C | WD Anzeige Abschaltung |
| 0xA55D | Fehler Anzeige Getriebeposition |
| 0xA55E | WD Fehler |
| 0xA560 | ID_Ausfall Anzeige shift indicator |
| 0xE104 | CAN LOW ERROR |
| 0xE105 | CAN HIGH ERROR |
| 0xE106 | GROUND SHIFT ERROR |
| 0xE107 | CAN BUS OFF |
| 0xE13C | CAN Fehlerwert_erhalten |
| 0xE13D | CAN unplausibles_Signal |
| 0xE13E | CAN Telegramm_Timeout |
| 0xE13F | CAN Fehler_Empfang_NM-Botschaft |
| 0xE140 | CAN Fehler_von_KI_gesendet |
| 0xE141 | CAN unplausibles_Signal_gesendet |
| 0xE142 | CAN Telegramm_Timeout_senden |
| 0xE143 | CAN Fehler_Senden_NM-Botschaft |
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
| 0xA168 | P EEPROM antwortet nicht |
| 0xA169 | P OLIC antwortet nicht |
| 0xA16A | P TDA7563 antwortet nicht |
| 0xA16B | P Fehler im Power Source Supply |
| 0xA16C | P Fehler Externe Beleuchtung |
| 0xA16D | P Temperatur (MOST-FOT,PWB) ausserhalb zulaessigem Bereich |
| 0xA16E | P Lautsprecher nicht OK |
| 0xA16F | P Fehler im K-CAN Test |
| 0xA170 | P RAD_ON Signal (fuer ext.Ampl.) ohne Funktion |
| 0xA171 | P Checksum Fehler Eeprom |
| 0xA172 | P Checksum Fehler ext.Flash |
| 0xA173 | P CAN Transceiver arbeitet nicht |
| 0xA174 | P Verbindung SPI - MOST Transc. NOK |
| 0xA175 | P Verbindung I2S - DSP-GW-DSP NOK (unp.) |
| 0xA176 | P Verbindung I2S - DSP-GW-DSP NOK (p.) |
| 0xA177 | P Externer Fan arbeitet nicht |
| 0xA178 | P Temperatur Sensor Fehler |
| 0xA179 | P Ueber-/Unterspannung interne Spannung |
| 0xA17A | P I2C-Amplifier Output |
| 0xA17B | P Fehler 0xA17B |
| 0xA17C | P Fehler 0xA17C |
| 0xA17D | P Fehler 0xA17D |
| 0xA17E | P Fehler 0xA17E |
| 0xA17F | P Fehler 0xA17F |
| 0xA180 | P Fehler 0xA180 |
| 0xA181 | P Fehler 0xA181 |
| 0xA182 | P Fehler 0xA182 |
| 0xA183 | P Fehler 0xA183 |
| 0xA184 | P Fehler 0xA184 |
| 0xA185 | P Fehler 0xA185 |
| 0xA186 | P Fehler 0xA186 |
| 0xA187 | P Energiesparmodus (FeTraWe) aktiv |
| 0xE18C | P Ein Device hat eine Monitor Nachricht nicht bekommen oder beantwortet (Error_Monitoring). |
| 0xE18D | P Gesamtring konnte nicht aufgestartet werden (Error_WakeUp_Failed). |
| 0xE18E | P Kernring konnte nicht aufgestartet werden |
| 0xE18F | P Ein Device hat nach Licht aus am Eingang nicht mit Licht aus am Ausgang reagiert. |
| 0xE190 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | P Shutdown wegen Uebertemperatur (Error_Tempshutdown). |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA168 | S EEPROM does not respond (obsolete) |
| 0xA169 | S OLIC does not respond (obsolete) |
| 0xA16A | S TDA7563 does not respond (obsolete) |
| 0xA16B | S Power Source Supply (obsolete) |
| 0xA16C | S Illumination ext failed (obsolete) |
| 0xA16D | S Temp. out of range (MOST-FOT,PWB) (obsolete) |
| 0xA16E | S Loudspeaker not OK (obsolete) |
| 0xA16F | S K-CAN Test not OK (obsolete) |
| 0xA170 | S RAD_ON Signal (for ext.Ampl.) failed (obsolete) |
| 0xA171 | S Wrong Checksum Eeprom (obsolete) |
| 0xA172 | S Wrong Checksum ext.Flash (obsolete) |
| 0xA173 | S CAN Transceiver not working (obsolete) |
| 0xA174 | S Connection SPI to MOST Transc. NOK (obsolete) |
| 0xA175 | S Connection I2S DSP-GW-DSP not OK (unp.) (obsolete) |
| 0xA176 | S Connection I2S DSP-GW-DSP not OK (p.) (obsolete) |
| 0xA177 | S Function of ext. Fan failed (obsolete) |
| 0xA178 | S Temperatur Sensor Fehler (Obsolete) |
| 0xA179 | S Ueber-/Unterspannung interne Spannung (Obsolete) |
| 0xA17A | S I2C-Amplifier Output (Obsolete) |
| 0xA187 | S Energiesparmodus (FeTraWe) aktiv (Obsolete) |
| 0xA168 | P Hardware-Defekt Gateway-Rechner |
| 0xA169 | P Hardware-Defekt LCD |
| 0xA16A | P Prüfsummenfehler Gateway-Tabelle |
| 0xA16B | P Energiesparmode aktiv |
| 0xE184 | P CAN Low |
| 0xE187 | P CAN Controller |
| 0xE18C | P Device hat die Monitoringnachricht nicht abgenommen oder bestaetigt. (Error_Monitoring). |
| 0xE18D | P Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xE18E | P Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE18F | P Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xE190 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | P Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA170 | S Fehler IPC Startup |
| 0xA171 | S Fehler IPC Operation |
| 0xA172 | S Fehler Laden FPGA |
| 0xA173 | S Fehler OS8805 |
| 0xA174 | S Fehler FLASH-ROM |
| 0xA175 | S Fehler RAM |
| 0xA176 | S Fehler EEPROM |
| 0xA177 | S MMI-Rechner Temperatur zu hoch |
| 0xA180 | S Pufferueberlauf Empfangspuffer |
| 0xA181 | S Pufferueberlauf Sendepuffer |
| 0xA182 | S Laenge der CAN Input-Nachricht nicht korrekt |
| 0xA183 | S Laenge der MOST Input-Nachricht nicht korrekt |
| 0xA184 | S Timeout CAN Input-Nachricht |
| 0xA185 | S RAD-ON oder SUB-ON Kurzschluss |
| 0xA186 | S Sahara DSP Fehler |
| 0xA187 | S Sahara Lüfter defekt |
| 0xA188 | S Endstufen Fehler |
| 0xA189 | S Fehler SH3 Spannungsversorgung |
| 0xA18A | S Fehler FPGA Spannungsversorgung |
| 0xA18B | S Nachlauf-Stromversorgung Zeitüberschreitung |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
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
| 0xE1CC | P Ein Device hat eine Monitor Nachricht nicht bekommen oder beantwortet (Error_Monitoring). |
| 0xE1CD | P Gesamtring konnte nicht aufgestartet werden (Error_WakeUp_Failed). |
| 0xE1CE | P Ein Device hat nach Licht aus am Eingang nicht mit Licht aus am Ausgang reagiert (Error_Light_Not_Off). |
| 0xE1CF | P Die zentrale Registry ist fehlerhaft (Error_Registry_New). |
| 0xE1D0 | P Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE1D1 | P Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE1D2 | P Shutdown wegen Uebertemperatur (Error_Tempshutdown). |
| 0xA3CE | P CD Services nicht Verfuegbar |
| 0xA3CF | P CD Laufwerk steht im Reset |
| 0xA3D0 | P CD Laufwerk Kommunikationsfehler |
| 0xA3D4 | P Keine CAN Verbindung zum Tuner |
| 0xA3D5 | P Keine CAN Verbindung zum ASK |
| 0xA3D6 | P Keine CAN Verbindung zum LVDS |
| 0xA3D7 | P Keine UART Verbindung zum Nav |
| 0xA3D8 | P Keine CAN Verbindung zum hinteren LVDS |
| 0xA3D9 | P DVD Services nicht Verfuegbar |
| 0xA3DA | P DVD Laufwerk steht im Reset |
| 0xA3DB | P DVD Laufwerk Kommunikationsfehler |
| 0xA3DC | P Ungueltige FIB Checksumme |
| 0xA3DD | P Keine Verbindung I2S Speech Out - DSP (ASK) -Speech In |
| 0xA3DE | P Video In defect (obsolete) |
| 0xA3DF | P Abweichung zwischen SH4-Clock und RealTime-Clock |
| 0xA3E0 | P Abweichung zwischen PCI-Clock und RealTime-Clock |
| 0xA3E1 | P Defekte im SDRAM |
| 0xA3E2 | P Defekte im externen SDRAM |
| 0xA3E3 | P Defekte im NAND-Flash |
| 0xA3E4 | P FlashFileSystem konnte nicht gestartet werden |
| 0x9308 | S Device bekam Reset (Error_Reset). |
| 0x9309 | S Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | S Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | S Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | S Kurze Unlocks (Error_unlock_Short). |
| 0x930D | S Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | S Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | S Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9408 | S Abweichung SH4 clock von der real time clock. |
| 0x9409 | S Abweichung PCI clock von der real time clock. |
| 0x940A | S Defekte im internen SDRAM. |
| 0x940B | S Defekte im externen SDRAM. |
| 0x940C | S Defekte im NAND flash. |
| 0x940D | S Video In defekt (Chip 7118 antwortet nicht). |
| 0xA3D1 | S Keine Verbindung zwischen companion chip und CAN transceiver (obsolete). |
| 0xA3D2 | S Keine Verbindung zwischen companion chip und I/O expander (obsolete). |
| 0xA3D3 | S Keine Verbindung zwischen companion chip und Video Out (obsolete). |
| 0xA3C8 | S Checksum Error |
| 0xA3C9 | S Illegaler Speicher Zugriff |
| 0xA3CA | S Illegaler Resourcen Zugriff |
| 0xA3CB | S Timelimit Exeeded |
| 0xA3CC | S Detected Software Exception |
| 0xA3CD | S OS-Fehler |
| 0xA3CE | S CD/MD Drive errors (obsolete) |
| 0xA3CF | S DVD Drive errors (obsolete) |
| 0xA3D0 | S No CAN connection to Tuner (obsolete) |
| 0xA3D1 | S No CAN connection to ASK (obsolete) |
| 0xA3D2 | S No CAN Connection to LVDS (obsolete) |
| 0xA3D3 | S No connection UART to Nav (obsolete) |
| 0xA3D4 | S No CAN Connection to Rear Seat LVDS (obsolete) |
| 0xA3D5 | S No connection between companion chip and CAN transceiver (obsolete) |
| 0xA3D6 | S No connection between companion chip and I/O expander (obsolete) |
| 0xA3D7 | S No connection companion chip to Video Out (obsolete) |
| 0xA3DD | S Wrong FIB checksum (obsolete) |
| 0xA3DF | S No Connection I2S Speech Out - DSP (ASK) -Speech In (obsolete) |
| 0xABC8 | P 0xABC8: Fehler Speichertest MASK |
| 0xABC9 | P 0xABC9: Laufwerk defekt |
| 0xABCA | P 0xABCA: Fehler in der Antennen-Stromversorgung |
| 0xABD8 | S 0xABD8: Fehler FLASH-ROM |
| 0xABD9 | S 0xABD9: Fehler RAM |
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
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Energy saving mode active |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN logical error |
| 0xA2C8 | P Fehler Motor |
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Fehler FaTraWe active |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN logical error |
| 0xA2C8 | P Fehler Motor |
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Energiesparmode aktiv |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN logical error |
| 0x2002 | S Fehler Motor PTC |
| 0x2003 | Fehler Implausible Effect |
| 0xFFFF | unbekannter Fehlerort |

### ID_68

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_69

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ID_6A

| ORT | ORTTEXT |
| --- | --- |
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
| 0x9CA8 | interner Fehler LM-II |
| 0x9CA9 | Klemme 30A Anschluss fehlerhaft |
| 0x9CAA | Klemme 30B Anschluss fehlerhaft |
| 0x9CAB | eine Klemme 15 fehlt |
| 0x9CAC | Bremslichtschalter defekt |
| 0x9CAD | LWR-Poti defekt |
| 0x9CAE | Bedienteilfehler |
| 0x9CAF | Lichtschalterstellung 1 defekt |
| 0x9CB0 | Lichtschalterstellung 2 defekt |
| 0x9CB1 | Dimmer-Poti defekt |
| 0x9CB2 | Sensor Hoehenstand vorne defekt |
| 0x9CB3 | Sensor Hoehenstand hinten defekt |
| 0x9CB4 | Energiesparmode aktiv |
| 0x9CB5 | Unkonsistenz: Softwareversion und Codierindex |
| 0x9CB6 | LWR-Spulenabriss |
| 0x9CB7 | LWR-Treiberfehler |
| 0x9CB8 | Kurzschlussfehler |
| 0x9CB9 | Batterie tiefentladen |
| 0x9CBA | Tiefentladungsschutz der Batterie: Abschaltung Standlicht |
| 0x9CBB | Tiefentladungsschutz der Batterie: Abschaltung Parklicht |
| 0x9CBC | Kommunikation mit StepperMoterBox links gestoert |
| 0x9CBD | Kommunikation mit StepperMoterBox rechts gestoert |
| 0x9CBE | Achtung: Elektronik am linken Scheinwerfer (SMC) meldet Fehler |
| 0x9CBF | Achtung: Elektronik am rechten Scheinwerfer (SMC) meldet Fehler |
| 0x9CC0 | Vergleich Fahrgestellnummer ALC mit SMC links unterschiedlich |
| 0x9CC1 | Vergleich Fahrgestellnummer ALC mit SMC rechts unterschiedlich |
| 0x9CC2 | Hardwareleitung zu SZL fehlt |
| 0x9CC3 | RLS: LinPhysicalBusError |
| 0x9CC4 | RLS: LinProtocolError |
| 0x9CC5 | RLS: NoResponse |
| 0xA8A8 | Fernlicht links defekt |
| 0xA8A9 | Fernlicht rechts defekt |
| 0xA8AA | Abblendlicht links defekt |
| 0xA8AB | Abblendlicht rechts defekt |
| 0xA8AC | Begrenzungslicht links (E60, E65), aussen (E60-Halogen), Zusatzfahrtrichtungsanzeiger links (E63, E64 ab 09/07) defekt |
| 0xA8AD | Begrenzungslicht rechts (E60, E65), aussen (E60-Halogen), Zusatzfahrtrichtungsanzeiger rechts (E63, E64 ab 09/07) defekt |
| 0xA8AE | Nebelscheinwerfer links defekt |
| 0xA8AF | Nebelscheinwerfer rechts defekt |
| 0xA8B0 | Fahrtrichtungsanzeiger links vorne 1 defekt |
| 0xA8B1 | Fahrtrichtungsanzeiger rechts vorne 1 defekt |
| 0xA8B2 | Fahrtrichtungsanzeiger links hinten defekt |
| 0xA8B3 | Fahrtrichtungsanzeiger rechts hinten defekt |
| 0xA8B4 | Seitenmarkierungslicht defekt |
| 0xA8B5 | Bremslicht links defekt |
| 0xA8B6 | Bremslicht rechts defekt |
| 0xA8B7 | Bremslicht mitte defekt |
| 0xA8B8 | Schlusslicht/Bremslicht links defekt |
| 0xA8B9 | Schlusslicht/Bremslicht rechts defekt |
| 0xA8BA | Schlusslicht (E65), Begrenzungslicht (E60-Halogen), links innen defekt |
| 0xA8BB | Schlusslicht (E65), Begrenzungslicht (E60-Halogen), rechts innen defekt |
| 0xA8BC | Kennzeichenlicht links defekt |
| 0xA8BD | Kennzeichenlicht rechts defekt |
| 0xA8BE | Nebelschlusslicht links defekt |
| 0xA8BF | Nebelschlusslicht rechts defekt |
| 0xA8C0 | Rueckfahrlicht links defekt |
| 0xA8C1 | Rueckfahrlicht rechts defekt |
| 0xA8C2 | Fahrtrichtungsanzeiger links vorne 2, Schlusslicht/Bremslicht links 2 (E60, E61 ab 03/07, E63, E64 ab 09/07) defekt |
| 0xA8C3 | Fahrtrichtungsanzeiger rechts vorne 2, Schlusslicht/Bremslicht rechts 2 (E60, E61 ab 03/07, E63, E64 ab 09/07) defekt |
| 0xA8C4 | Tagfahrlicht links defekt |
| 0xA8C5 | Tagfahrlicht rechts defekt |
| 0xA8C6 | Klemme 58g defekt |
| 0xA8C7 | Bi-Xenonklappe defekt |
| 0xE504 | Bus Leitungsfehler K-CAN |
| 0xE507 | Bus Kommunikationsfehler K-CAN |
| 0xE50B | Bus Kommunikationsfehler PT-CAN |
| 0xE514 | Telegramm Lenkwinkel Timeout |
| 0xE515 | Telegramm Status-AHM Timeout |
| 0xE516 | Telegramm Bedienung Lenkstock Timeout |
| 0xE517 | Telegramm Status DSC Timeout |
| 0xE518 | Telegramm Status Fahrlicht Timeout |
| 0xE519 | Telegramm Geschwindigkeit Timeout |
| 0xE51A | Telegramm Gierrate Timeout |
| 0xE51B | Telegramm Klemmenstatus Timeout |
| 0xE51C | Telegramm Fernlichtassistent Timeout |
| 0x9308 | LoadDump aktiviert |
| 0x9309 | Signal vom Regenlichtsensor unplausibel |
| 0x930A | Lichtnotlauf mit Kl.15 aktiv |
| 0x930B | Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x930C | ALC-System defekt |
| 0x930D | ALC-System: AL links abgeschaltet |
| 0x930E | ALC-System: AL rechts abgeschaltet |
| 0x930F | RLS Grund: Dunkelheit aber Abblendlicht aus |
| 0x9310 | Taster Nebelscheinwerfer defekt |
| 0x9311 | Taster Nebelschlusslicht defekt |
| 0x9312 | Taster Warnblinklicht defekt |
| 0x9313 | Schalter Rueckfahrscheinwerfer defekt |
| 0x9CA8 | interner Fehler LM-AHL |
| 0x9CA9 | Klemme 30A Anschluss fehlerhaft |
| 0x9CAA | Klemme 30B Anschluss fehlerhaft |
| 0x9CAB | eine Klemme 15 fehlt |
| 0x9CAC | Bremslichtschalter defekt |
| 0x9CAD | AHM-Kommunikation gestoert |
| 0x9CAE | Bedienteilfehler |
| 0x9CAF | Lichtschalterstellung 1 defekt |
| 0x9CB0 | Lichtschalterstellung 2 defekt |
| 0x9CB1 | Dimmer-Poti defekt |
| 0x9CB2 | Sensor Hoehenstand vorne defekt |
| 0x9CB3 | Sensor Hoehenstand hinten defekt |
| 0x9CB4 | Energiesparmode aktiv |
| 0x9CB5 | XIRQ (PWM-Dimmung) defekt |
| 0x9CB6 | Kurzschlussfehler 4 |
| 0x9CB7 | Kurzschlussfehler 3 |
| 0x9CB8 | Kurzschlussfehler 2 |
| 0x9CB9 | Kurzschlussfehler 1 |
| 0x9CBA | Tiefentladungsschutz der Batterie: Abschaltung Standlicht |
| 0x9CBB | Tiefentladungsschutz der Batterie: Abschaltung Parklicht |
| 0x9CBC | Kommunikation mit StepperMoterBox links gestoert |
| 0x9CBD | Kommunikation mit StepperMoterBox rechts gestoert |
| 0x9CBE | Achtung: Elektronik am linken Scheinwerfer (SMC) meldet Fehler |
| 0x9CBF | Achtung: Elektronik am rechten Scheinwerfer (SMC) meldet Fehler |
| 0x9CC0 | Vergleich Fahrgestellnummer ALC mit SMC links unterschiedlich |
| 0x9CC1 | Vergleich Fahrgestellnummer ALC mit SMC rechts unterschiedlich |
| 0x9CC2 | Hardwareleitung zu SZL fehlt |
| 0x9CC3 | Batterie tiefentladen |
| 0x9CC4 | Unkonsistenz: Softwareversion und Codierindex |
| 0xE504 | CAN-Low, Physikalischer Fehler |
| 0xE505 | CAN-High, Kurzschluss VB |
| 0xE506 | Ground Shift, zu hoch |
| 0xE507 | Controller K-CAN, Bus Off |
| 0xE508 | Controller PT-CAN, Bus Off |
| 0xE50B | Controller PT-CAN, Bus Off |
| 0xE514 | Telegramm Lenkwinkel Timeout oder ungueltig |
| 0xE515 | Telegramm Status-AHM Timeout |
| 0xE516 | Telegramm Bedienung Lenkstock Timeout |
| 0xE517 | Telegramm Status DSC Timeout |
| 0xE518 | Telegramm Status Fahrlicht Timeout |
| 0xE519 | Telegramm Geschwindigkeit ungueltig |
| 0xE51A | Telegramm Gierrate Timeout oder ungueltig |
| 0xE51B | Telegramm Klemmenstatus Timeout oder ungueltig |
| 0xE51C | Telegramm Fernlichtassistent Timeout |
| 0x9308 | Fernlicht links defekt |
| 0x9309 | Fernlicht rechts defekt |
| 0x930A | Abblendlicht links defekt |
| 0x930B | Abblendlicht rechts defekt |
| 0x930C | Begrenzungslicht links (E60, E65), aussen (E60-Halogen), defekt |
| 0x930D | Begrenzungslicht rechts (E60, E65), aussen (E60-Halogen), defekt |
| 0x930E | Nebelscheinwerfer links defekt |
| 0x930F | Nebelscheinwerfer rechts defekt |
| 0x9310 | Fahrtrichtungsanzeiger links vorne 1 defekt |
| 0x9311 | Fahrtrichtungsanzeiger rechts vorne 1 defekt |
| 0x9312 | Fahrtrichtungsanzeiger links hinten defekt |
| 0x9313 | Fahrtrichtungsanzeiger rechts hinten defekt |
| 0x9314 | Fahrtrichtungsanzeiger links vorne 2 defekt |
| 0x9315 | Fahrtrichtungsanzeiger rechts vorne 2 defekt |
| 0x9316 | Bremslicht links defekt |
| 0x9317 | Bremslicht rechts defekt |
| 0x9318 | Bremslicht mitte defekt |
| 0x9319 | Schlusslicht/Bremslicht links defekt |
| 0x931A | Schlusslicht/Bremslicht rechts defekt |
| 0x931B | Schlusslicht (E65), Begrenzungslicht (E60-Halogen), links innen defekt |
| 0x931C | Schlusslicht (E65), Begrenzungslicht (E60-Halogen), rechts innen defekt |
| 0x931D | Kennzeichenlicht links defekt |
| 0x931E | Kennzeichenlicht rechts defekt |
| 0x931F | Nebelschlusslicht links defekt |
| 0x9320 | Nebelschlusslicht rechts defekt |
| 0x9321 | Rueckfahrlicht links defekt |
| 0x9322 | Rueckfahrlicht rechts defekt |
| 0x9323 | Zusatzfahrtrichtungsanzeiger links defekt |
| 0x9324 | Zusatzfahrtrichtungsanzeiger rechts defekt |
| 0x9325 | Seitenmarkierungslicht vorne defekt |
| 0x9326 | Reserve-Ausgang 4 defekt |
| 0x9327 | Seitenmarkierungslicht hinten defekt |
| 0x9328 | Lenkwinkel fehlt |
| 0x9329 | LoadDump aktiviert |
| 0x932A | Bedienteil abgerissen |
| 0x932B | Lichtnotlauf mit Kl.15 aktiv |
| 0x932C | Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x932D | ALC-System defekt |
| 0x932E | ALC-System: AL links abgeschaltet |
| 0x932F | ALC-System: AL rechts abgeschaltet |
| 0x9330 | Signal vom Regenlichtsensor unplausibel |
| 0x9331 | ALC meldet Fehler an Lichtmodul |
| 0x9332 | RLS Grund: Dunkelheit aber Abblendlicht aus |
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
| 0x940F | Notlauf aktiv SMC links |
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
| 0x942F | Notlauf aktiv SMC rechts |
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
| 0xE584 | P K_CAN_KURZSCHLUSS |
| 0xE587 | P CAN_INAKTIV |
| 0xE5C3 | P CAN_NM_SEND_ERROR |
| 0xA409 | P KBM_UNTERSPANNUNG |
| 0xA40B | P PROG_FLASH_CRC_FEHLER |
| 0xA40D | P EEPROM_WRITE_FEHLER |
| 0xA410 | P KURZSCHLUSS_IL |
| 0xA411 | P KURZSCHLUSS_VA |
| 0xA418 | P KEIN_HALL_A_PULS_FH_BFTH |
| 0xA419 | P KEIN_HALL_B_PULS_FH_BFTH |
| 0xA41A | P SPANNUNGS_FEHLER_FH_BFTH |
| 0xA41B | P STROM_FEHLER_FH_BFTH |
| 0xA41C | P RELAIS_KLEBER_FH_BFTH |
| 0xA41D | P RELAIS_TOT_FH_BFTH |
| 0xA41E | P POSITION_FEHLER_FH_BFTH |
| 0xA41F | P MOTOR_FEHLER_FH_BFTH |
| 0xA420 | P MECHANIK_FEHLER_FH_BFTH |
| 0xA421 | P CAN_TEMP_FEHLER_FH_BFTH |
| 0xA422 | P EKS_EE_ERROR_FH_BFTH |
| 0xA423 | P MOTOR_HEISS_FH_BFTH |
| 0xA424 | P BLOCK_FH_BFTH |
| 0xA428 | P FRONTWISCHER_BLOCKIERT |
| 0xA429 | P RLS_AUSFALL |
| 0xA42A | P HECKWISCHER_BLOCKIERT |
| 0xA430 | P SCA_CONTACT_ERROR_SCAOPEN |
| 0xA431 | P SCA_CONTACT_ERROR_SCA_CLOSE |
| 0xA432 | P SCA_CONTROL_ERROR_ON |
| 0xA433 | P SCA_CONTROL_ERROR_OFF |
| 0xA434 | P SCA_DIAGNOSE_ERROR |
| 0xA435 | P RD_UNLOCK_NOT_ACTIVE |
| 0xA436 | P RD_UNLOCK_ACTIVE |
| 0xA437 | P RD_LOCK_NOT_ACTIVE |
| 0xA438 | P RD_LOCK_ACTIVE |
| 0xA439 | P RD_SAVE_NOT_ACTIVE |
| 0xA43A | P RD_SAVE_ACTIVE |
| 0xA43B | P TR_RELEASE_NOT_ACTIVE |
| 0xA43C | P TR_RELEASE_ACTIVE |
| 0xA43D | P TR_RELEASE_EXTSW_STICK |
| 0xA43E | P AL_PIN72_ERROR |
| 0xA43F | P AL_PIN68_ERROR |
| 0xA440 | P AL_PIN72_INVALID |
| 0xA441 | P AL_PIN68_INVALID |
| 0xA442 | P AL_RW_CONTROL_ERROR_ON |
| 0xA443 | P RW_CONTROL_ERROR_OFF |
| 0xA444 | P AL_RW_DIAGNOSIS_ERROR |
| 0xA447 | P ENERGIESPARMODE_AKTIV |
| 0xA448 | P KEIN_HALL_A_PULS_FH_FTH |
| 0xA449 | P KEIN_HALL_B_PULS_FH_FTH |
| 0xA44A | P SPANNUNGS_FEHLER_FH_FTH |
| 0xA44B | P STROM_FEHLER_FH_FTH |
| 0xA44C | P REALAIS_KLEBER_FH_FTH |
| 0xA44D | P RELAIS_TOT_FH_FTH |
| 0xA44E | P POSITION_FEHLER_FH_FTH |
| 0xA44F | P MOTOR_FEHLER_FH_FTH |
| 0xA450 | P MECHANIK_FEHLER_FH_FTH |
| 0xA451 | P CAN_TEMP_FEHLER_FH_FTH |
| 0xA452 | P EKS_EE_ERROR_FH_FTH |
| 0xA453 | P MOTOR_HEISS_FH_FTH |
| 0xA454 | P BLOCK_FH_FTH |
| 0xA455 | P HARD_DOOR_FH_FTH |
| 0xA456 | P HARD_DOOR_FH_BFTH |
| 0xA457 | P AL_TCCONTROLERROR_ON |
| 0xA458 | P AL_TCCONTROLERROR_OFF |
| 0xA459 | P CFL_OVERFLOW_FH_FTH |
| 0xA460 | P CFL_OVERFLOW_FH_BFTH |
| 0xA461 | P WIPER_HANDLE_DEFECT |
| 0xA462 | P FWP_SC_TO_GND |
| 0xA463 | P RWP_SC_TO_GND |
| 0xA468 | P RW_WIPER_ERROR |
| 0xA469 | P HW_PUMP_ERROR |
| 0xA46A | P AL_RWRELEASEEXTSW_STICK |
| 0xA46B | P RW_WIPER_SC_TO_GND |
| 0xA46C | P HW_PUMP_SC_TO_GND |
| 0x9308 | S FH_FTH_BEWEGUNGSFEHLER |
| 0x9309 | S FH_BFTH_BEWEGUNGSFEHLER |
| 0x930B | S FH_FTH_PANIKMODUS |
| 0x930C | S FH_BFTH_PANIKMODUS |
| 0x930D | S FH_BFTH_TEMPERATUR_FEHLER |
| 0x930E | S FH_BFTH_MOTOR_HEISS |
| 0x930F | S FH_BFTH_BLOCK |
| 0x9310 | S FH_FTH_CAN_TEMPERATURFEHLER |
| 0x9311 | S FH_FTH_HEISSERMOTOR |
| 0x9312 | S FH_FTH_BLOCK |
| 0x9315 | S FH_FTH_HOHERREIBWERT |
| 0x9316 | S FH_BFTH_HOHERREIBWERT |
| 0x9317 | S FH_FTH_EINQUETSCHUNG |
| 0x9318 | S FH_BFTH_EINQUETSCHUNG |
| 0x9319 | S STARTWITHOUTNORMING_FTH |
| 0x931A | S RESET_WEIL_PDN |
| 0x931B | S RESET_WEIL_WD |
| 0x931C | S RESET_WEIL_OSC |
| 0x931D | S RESET_WEIL_TRAP |
| 0x931E | S RESET_WEIL_SWI |
| 0x931F | S STARTWITHOUTNORMING_BFTH |
| 0xFFFF | unbekannter Fehlerort |

### ID_73

| ORT | ORTTEXT |
| --- | --- |
| 0xA468 | P Kabelbruch extern |
| 0xA469 | P Elektronikausfall intern |
| 0xA46A | P Uebertemp Abschaltung (kein defekt) |
| 0xA46B | P EEP Checksumme falsch |
| 0xA46C | P Energiesparmode aktiv |
| 0xE5C4 | P CAN LOW FEHLER |
| 0xE5C7 | P CAN BUS AUS |
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
| 0xA4A8 | Kat. A -> Kabelbruch extern |
| 0xA4A9 | Kat. B -> Elektronikausfall intern |
| 0xA4AA | Kat. C -> Uebertemp Abschaltung (kein defekt) |
| 0xA4AB | Kat. D -> EEP Checksumme falsch |
| 0xA4AC | Kat. E -> FeTraWe/Powerdown aktiv |
| 0xE644 | Komunikation: Can Low |
| 0xE647 | Komunikation: Bus-Fehler |
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
| 0x9C48 | P Motor Frischluft/Umluft links |
| 0x9C49 | P Motor Frischluft/Umluft rechts |
| 0x9C4A | P Motor Entfrostung |
| 0x9C4B | P Motor Belüftung links |
| 0x9C4C | P Motor Belüftung rechts |
| 0x9C4D | P Motor Kaltluft |
| 0x9C4E | P Motor Fussraum links |
| 0x9C4F | P Motor Fussraum rechts |
| 0x9C50 | P Motor Belüftung Fond |
| 0x9C53 | P PTC-Zuheizer |
| 0x9C54 | P AUC-Sensor |
| 0x9C55 | P Beschlagsensor |
| 0x9C56 | P Standheiz-LED |
| 0x9C57 | P Geblaese-Endstufe |
| 0x9C58 | P Poti links |
| 0x9C59 | P Poti rechts |
| 0x9C5A | P Poti mitte |
| 0x9C5B | P Innentemperaturfühler |
| 0x9C5C | P Verdampfertemperaturfühler |
| 0x9C5D | P Monitor Drucksensor-Versorgung |
| 0x9C5E | P Drucksensor |
| 0x9C60 | P Fühler Wärmetauscher rechts |
| 0x9C65 | P Stromsense Treiberversorgung |
| 0x9C66 | P Stromsense f. OL-Versorgung |
| 0x9C67 | P Fühler Wärmetauscher links |
| 0x9C68 | P Belüftungstemperaturfühler |
| 0x9C69 | P Schichtung Fondpoti |
| 0x9C6a | P Solarsensor links |
| 0x9C6b | P Solarsensor rechts |
| 0x9C6c | P Monitor AUC-Versorgung |
| 0x9C6d | P Monitor Sonnensensor-Versorgung |
| 0x9C6e | P Monitor Fondpotiversorgung |
| 0x9C6f | P Monitor Beschlagsensor Versorgung |
| 0x9C77 | P Zusatzwasserpumpe |
| 0x9C78 | P Spritzdüsenheizung |
| 0x9C79 | P Wasserventil links |
| 0x9C7A | P Wasserventil rechts |
| 0x9C7B | P Innenfuehlergeblaese |
| 0x9C7C | P KMV-Sperrventil |
| 0x9C7E | P Heckscheibenheizung |
| 0x9C7F | P Checksumme EEPROM |
| 0x9CA7 | P Energiesparmode aktiv |
| 0xE704 | P K-CAN Bus Low Leitungsfehler |
| 0xE705 | P K-CAN Bus High Leitungsfehler |
| 0xE706 | P LIN-Busfehler |
| 0xE707 | P CAN-Controller, Bus Off |
| 0xE714 | P Botschaft(KCAN: Powermanagement Batteriespannung, 3BE) |
| 0xE715 | P Botschaft(KCAN: Kilometerstand/Reichweite, 330) |
| 0xE716 | P Botschaft(KCAN: Powermanagement Verbrauchersteuerung, 3B3) |
| 0xE717 | P Botschaft(KCAN: Relativzeit, 328) |
| 0xE718 | P Botschaft(KCAN: Wärmestrom Motor, 1B6) |
| 0xE719 | P Botschaft(KCAN: Motordaten, 1D0) |
| 0xE71A | P Botschaft(KCAN: Klemmenstatus, 130) |
| 0xE71B | P Botschaft(KCAN: Aussentemperatur, 2CA) |
| 0xE71C | P Botschaft(KCAN: Geschwindigkeit, 1A0) |
| 0xE71D | P Botschaft(KCAN: Status Klima SH/ZH Zusatzwasserpumpe, 2EC) |
| 0xE71E | P Botschaft(KCAN: Drehmoment 3, AA) |
| 0xE71F | P Botschaft(KCAN: Dimmung, 202) |
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
| 0xA788 | Heater Camera |
| 0xA789 | voltage Supply Camera |
| 0xA78A | Tamper Protection Camera |
| 0xA78B | IR Sensor |
| 0xA78C | Defective Pixel |
| 0xA78D | Shutter |
| 0xA78E | HW/SW error |
| 0xA78F | Video out failure |
| 0xA790 | Camera not adjusted |
| 0xA768 | Camera Overtemperature |
| 0xA769 | Watching Reset (Camera) |
| 0xA800 | Kamera Abschaltung aufgrund zu hoher Temperatur |
| 0xA801 | Watchdog Kamera |
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
| 0xA8 | Drehmoment 1 K-CAN [10] | DME1/DDE1 |
| 0xA9 | Drehmoment 2 [9] | DME1/DDE1 |
| 0xAA | Drehmoment 3 K-CAN [10] | DME1/DDE1 |
| 0xAC | Radmoment Antriebsstrang 2 [5] | DME1/DDE1 |
| 0xAD | Verzögerungsanforderung ACC [9] | LDM |
| 0xAD | Verzögerungsanforderung ACC [9] | ACC_Modul/ACC+NAVI |
| 0xB3 | Steuerung Lenkunterstützung [2] | AFS |
| 0xB4 | Radmoment Antriebsstrang 1 [4] | DME1/DDE1 |
| 0xB5 | Drehmomentanforderung EGS [9] | EGS_MECH+NAVI/EGS_MECH |
| 0xB6 | Drehmomentanforderung DSC [7] | DXC_RB/DSC_RB/DSC_CT |
| 0xB7 | Drehmomentanforderung ACC [10] | ACC_Modul/ACC+NAVI/LDM |
| 0xB8 | Drehmomentanforderung DKG [2] | DKG |
| 0xB9 | Drehmomentanforderung AFS [3] | AFS |
| 0xBA | Getriebedaten [20] | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG |
| 0xBB | Sollmomentanforderung [7] | DXC_RB |
| 0xBC | Status Sollmomentumsetzung [7] | VGSG |
| 0xBD | Drehmomentanforderung SSG [6] | SMG_M/SMG |
| 0xBE | Alive Zähler [12] | ARS_Modul |
| 0xBF | Anforderung Radmoment Antriebsstrang [6] | LDM |
| 0xC0 | Alive Zentrales Gateway [1] | KGM |
| 0xC1 | Alive Zähler Telefon [3] | TEL_JAP/TEL_BPI |
| 0xC4 | Lenkradwinkel K-CAN [13] | DXC_RB/DSC_RB/DSC_CT |
| 0xC8 | Lenkradwinkel Oben K-CAN [6] | SZL_LWS |
| 0xCA | Gierrate Anforderung [7] |  |
| 0xCE | Radgeschwindigkeit K-CAN [4] | DXC_RB/DSC_RB/DSC_CT |
| 0xD2 | Bedienung Sitzverstellung BF [6] | SZM_MIT_KBUS/SZM |
| 0xD5 | Anforderung Radmoment Bremse [6] | LDM |
| 0xD7 | Alive Zähler Sicherheit [2] | ACSM |
| 0xDA | Bedienung Sitzverstellung FA [6] | SZM_MIT_KBUS/SZM |
| 0xE1 | Radmoment Bremse [3] | DXC_RB/DSC_RB |
| 0xE2 | Status Zentralverriegelung BFT [11] | KGM |
| 0xE6 | Status Zentralverriegelung BFTH [11] | KBM |
| 0xEA | Status Zentralverriegelung FAT [11] | KGM |
| 0xEE | Status Zentralverriegelung FATH [11] | KBM |
| 0xF2 | Status Zentralverriegelung HK [13] | KBM |
| 0xF6 | Steuerung Außenspiegel [9] | KGM |
| 0xFA | Steuerung Fensterheber FAT [10] | KGM |
| 0xFB | Steuerung Fensterheber BFT [5] | KGM |
| 0xFC | Steuerung Fensterheber FATH [5] | KBM |
| 0xFD | Steuerung Fensterheber BFTH [5] | KBM |
| 0x130 | Klemmenstatus [19] | CAS |
| 0x135 | Steuerung Crashabschaltung EKP [1] | ACSM |
| 0x15F | Anforderung Winkel FFP [6] | LDM |
| 0x172 | Quittierung Anforderung Kombi [1] | M_ASK/CCC_GW |
| 0x190 | Anzeige ACC [13] | LDM |
| 0x190 | Anzeige ACC [13] | ACC_Modul/ACC+NAVI |
| 0x192 | Bedienung Getriebewahlschalter [16] | SZL_LWS |
| 0x193 | Anzeige ACC DCC [4] | LDM |
| 0x194 | Bedienung Tempomat/ACC [13] | SZL_LWS |
| 0x198 | Bedienung Getriebewahlschalter 2 [2] | GWS |
| 0x19E | Status DSC K-CAN [19] | DXC_RB/DSC_RB/DSC_CT |
| 0x1A0 | Geschwindigkeit K-CAN [14] | DXC_RB/DSC_RB/DSC_CT |
| 0x1A2 | Getriebedaten 2 [6] | EGS_MECH+NAVI/EGS_MECH/DKG |
| 0x1A3 | Rohdaten Längsbeschleunigung [3] | SMG_M |
| 0x1A6 | Wegstrecke [6] | DXC_RB/DSC_RB/DSC_CT |
| 0x1AA | Effekt ErgoCommander [10] | M_ASK/CCC_GW |
| 0x1AC | Status ARS-Modul [13] | ARS_Modul |
| 0x1B4 | Status Kombi [14] | Kombi |
| 0x1B5 | Wärmestrom/Lastmoment Klima [14] | IHKA |
| 0x1B6 | Wärmestrom Motor [11] | DME1/DDE1 |
| 0x1B8 | Bedienung ErgoCommander [6] | ZBE_LO/ZBE |
| 0x1C2 | Abstandsmeldung PDC [5] | PDC |
| 0x1C3 | Abstandsmeldung 2 PDC [3] | PDC |
| 0x1C6 | Akustikmeldung PDC [5] | PDC |
| 0x1D0 | Motordaten [13] | DME1/DDE1 |
| 0x1D2 | Anzeige Getriebedaten [22] | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG |
| 0x1D6 | Bedienung Taster Audio/Telefon [12] | SZL_LWS |
| 0x1D8 | Bedienung Klima Luftverteilung FA [13] | M_ASK/CCC_GW |
| 0x1D9 | Bedienung Taster M-Drive [2] | SZL_LWS |
| 0x1DA | Bedienung Klima Fernwirken [5] | CAS |
| 0x1DC | Bedienung Schichtung Sitzheizung [1] | M_ASK/CCC_GW |
| 0x1E0 | Bedienung Klima Luftverteilung BF [7] | M_ASK/CCC_GW |
| 0x1E2 | Bedienung Klima Front [11] | M_ASK/CCC_GW |
| 0x1E7 | Bedienung Sitzheizung/Sitzklima FA [7] | SZM_MIT_KBUS/SZM |
| 0x1E8 | Bedienung Sitzheizung/Sitzklima BF [7] | SZM_MIT_KBUS/SZM |
| 0x1EA | Bedienung Lenksäulenverstellung [5] | SZL_LWS |
| 0x1EB | Bedienung Aktivsitz FA [3] | SZM_MIT_KBUS/SZM |
| 0x1EC | Bedienung Aktivsitz BF [3] | SZM_MIT_KBUS/SZM |
| 0x1ED | Bedienung Lehnenbreitenverstellung Aktiv FA [2] | SZM_MIT_KBUS/SZM |
| 0x1EE | Bedienung Lenkstockstaster [6] | SZL_LWS |
| 0x1EF | Bedienung Lehnenbreitenverstellung Aktiv BF [2] | SZM_MIT_KBUS/SZM |
| 0x1F2 | Bedienung Sitzmemory BF [3] | SZM_MIT_KBUS/SZM |
| 0x1F3 | Bedienung Sitzmemory FA [4] | SZM_MIT_KBUS/SZM |
| 0x1F4 | Fernbedienung Sitzmemory BF [2] |  |
| 0x1F6 | Blinken [6] | LM |
| 0x1FC | Status AFS [4] | AFS |
| 0x1FE | Crash [12] | ACSM |
| 0x200 | Regelgeschwindigkeit Stufentempomat [7] | DME1/DDE1 |
| 0x202 | Dimmung [10] | LM |
| 0x205 | Akustikanforderung Kombi [3] | Kombi |
| 0x206 | Steuerung Anzeige Shiftlights [1] | DME1 |
| 0x20B | Memoryverstellung [6] | SZM_MIT_KBUS |
| 0x20B | Memoryverstellung [6] | SM_FA |
| 0x20C | Steuerung Lenksäule [3] | SM_FA |
| 0x20D | Position Lenksäule [4] | SZM_MIT_KBUS/SZM |
| 0x210 | Bedienung HUD [7] | M_ASK/CCC_GW |
| 0x211 | Status HUD [7] | HUD |
| 0x212 | Höhenstände Luftfeder [8] | EHC |
| 0x21A | Lampenzustand [13] | LM |
| 0x21C | Bedienung Night-Vision [2] | CCC_GW |
| 0x21E | Status Night-Vision [2] | NVC |
| 0x226 | Regensensor-Wischergeschwindigkeit [8] | LM/RLS |
| 0x228 | Bedienung Sonderfunktion [8] | CCC_MM/M_ASK/CCC_GW |
| 0x22A | Status BFS [10] | SM_BF |
| 0x22E | Status BFSH [7] | SM_BFH |
| 0x232 | Status FAS [10] | SM_FA |
| 0x236 | Status FASH [7] | SM_FAH |
| 0x237 | Status Lehnenbreitenverstellung Aktiv BF [3] | aLBV_BF |
| 0x239 | Status Lehnenbreitenverstellung Aktiv FA [3] | aLBV_FA |
| 0x23A | Status Funkschlüssel [13] | CAS |
| 0x23B | Status Klima Front Erweitert [1] | IHKA |
| 0x23C | Status Bedienung Sitzkomfort FA [1] | SM_FA |
| 0x23F | Status Bedienung Sitzkomfort BF [1] | SM_BF |
| 0x242 | Status Klima Front [11] | IHKA |
| 0x24A | Status PDC [6] | PDC |
| 0x252 | Wischerstatus [8] | KBM |
| 0x256 | Challenge Passive Access [10] | CAS |
| 0x258 | Status Transmission Passive Access [4] | PGS |
| 0x25C | Bedienung Klima Zusatzprogramme [2] | M_ASK/CCC_GW |
| 0x26B | Bedienung Rollos BF [2] |  |
| 0x26C | Bedienung Rollos FA [2] | KGM |
| 0x26D | Bedienung Rollos MK [1] |  |
| 0x26E | Steuerung FH/SHD Zentrale (Komfort) [10] | CAS |
| 0x26F | Bedienung Rollos BFH [2] |  |
| 0x270 | Bedienung Rollos FAH [2] |  |
| 0x278 | Navigationsgraph [3] | CCC_GW |
| 0x27A | Synchronisation Navigationsgraph [4] | CCC_GW |
| 0x27E | Status Verdeck Cabrio [7] | CVM_V |
| 0x284 | Steuerung Fernstart Sicherheitsfahrzeug [8] | CAS |
| 0x285 | Steuerung Rollos [3] | SZM_MIT_KBUS/SZM |
| 0x28C | Bedienung Taster Vertikaldynamik [2] | GWS |
| 0x290 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] |  |
| 0x292 | Steuerung Fernlicht-Assistent [2] | FLA |
| 0x29E | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4]  |  Secutity 1  |
| 0x29F | Fernbedienung FondCommander [5] | CAS |
| 0x2A0 | Steuerung Zentralverriegelung [10] | CAS |
| 0x2A2 | Bedienung Klima Standfunktionen [5] | M_ASK/CCC_GW |
| 0x2A4 | Bedienung Personalisierung [8] | M_ASK/CCC_GW |
| 0x2A6 | Bedienung Wischertaster [12] | SZL_LWS |
| 0x2B2 | Raddrücke K-CAN [1] | DXC_RB/DSC_RB/DSC_CT |
| 0x2B3 | Beschleunigungsdaten [2] | DXC_RB/DSC_RB/DSC_CT |
| 0x2B4 | DWA-Alarm [4] | DWA |
| 0x2B6 | Steuerung Hupe DWA [3] | DWA |
| 0x2B8 | Bedienung Bordcomputer [3] | M_ASK/CCC_GW |
| 0x2BA | Stoppuhr [2] | Kombi |
| 0x2C0 | LCD-Leuchtdichte [7] | Kombi |
| 0x2CA | Außentemperatur [9] | Kombi |
| 0x2CE | Steuerung Monitor [4] | M_ASK/CCC_GW |
| 0x2D5 | Status Heizung Heckscheibe [1] | IHKA |
| 0x2DA | Status Heckklappenlift [2] | HKL |
| 0x2E2 | Status Einstellung Video Night-Vision [1] | NVC |
| 0x2E4 | Status Anhänger [7] | AHM |
| 0x2E6 | Status Klima Luftverteilung FA [13] | IHKA |
| 0x2EA | Status Klima Luftverteilung BF [9] | IHKA |
| 0x2EC | Status Klima SH/ZH Zusatzwasserpumpe [14] | SH_ZH |
| 0x2EE | Status Klima Zusatzprogramme [2] | IHKA |
| 0x2F0 | Status Klima Standfunktionen [12] | IHKA |
| 0x2F4 | Steuerung Klima SH/ZH Zusatzwasserpumpe [13] | IHKA |
| 0x2F6 | Steuerung Licht [7] | KBM |
| 0x2F7 | Einheiten [10] | M_ASK/CCC_MM/CCC_GW |
| 0x2F8 | Uhrzeit/Datum [12] | Kombi |
| 0x2FA | Sitzbelegung Gurtkontakte [13] | ACSM |
| 0x2FC | ZV und Klappenzustand [11] | CAS |
| 0x304 | Status Gang [13] | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG |
| 0x306 | Fahrzeugneigung [2] | LM |
| 0x308 | Status MSA [2] | DME1/DDE1 |
| 0x310 | Außentemperatur/Relativzeit [10] | Kombi |
| 0x311 | Nachtankmenge [3] | Kombi |
| 0x312 | Service Call Teleservice [2] | Kombi |
| 0x313 | Status Service Call Teleservice [3] | TEL_BPI/M_ASK/CCC_GW |
| 0x314 | Status Fahrlicht [9] | RLS/LM |
| 0x315 | Fahrzeugmodus [7] | SZM_MIT_KBUS/SZM |
| 0x317 | Bedienung Taster PDC [1] | SZM_MIT_KBUS/SZM |
| 0x318 | Status Antennen Passive Access [7] | PGS |
| 0x319 | Bedienung Taster RDC [4] | SZM |
| 0x31C | Status Reifendruck [6] | RDC |
| 0x31D | Status Reifenpannenanzeige [6] | DXC_RB/DSC_RB/DSC_CT |
| 0x322 | Dämpferstrom [2] | EDCK_Modul |
| 0x326 | Status Dämpferprogramm [9] | EDCK_Modul |
| 0x328 | Relativzeit [9] | Kombi |
| 0x32A | Steuerung ALC [2] | LM |
| 0x32D | Anzeige HDC [3] | DXC_RB |
| 0x32E | Status Klima Interne Regelinfo [6] | IHKA |
| 0x330 | Kilometerstand/Reichweite [5] | Kombi |
| 0x331 | Programmierung Stufentempomat [2] | M_ASK/CCC_GW |
| 0x332 | Fahreranzeige Drehzahlbereich [4] | DME1/DDE1 |
| 0x335 | Status Elektrische Kraftstoffpumpe [3] | EKP |
| 0x336 | Anzeige Checkcontrol-Meldung (Rolle) [3] | Kombi |
| 0x337 | Status Kraftstoffregelung DME [1] | DME1 |
| 0x338 | Steuerung Anzeige Checkcontrol-Meldung [7] | Kombi |
| 0x339 | Status Anzeige Funktionen Extern [1] | M_ASK/CCC_GW |
| 0x33A | Status Monitor Front [3] | CID_C_H/CID_C |
| 0x348 | Übereinstimmung Navigationsgraph [4] | CCC_GW |
| 0x34A | Navigation GPS 1 [5] | CCC_GW |
| 0x34B | Status Sitzlehnenverriegelung FA [2] | SZM_MIT_KBUS |
| 0x34B | Status Sitzlehnenverriegelung FA [2] | SM_FA |
| 0x34C | Navigation GPS 2 [5] | CCC_GW |
| 0x34D | Status Sitzlehnenverriegelung BF [2] | SZM_MIT_KBUS |
| 0x34D | Status Sitzlehnenverriegelung BF [2] | SM_BF |
| 0x34E | Navigation System Information [6] | CCC_GW |
| 0x35A | Termin Condition Based Service [2] | M_ASK/CCC_GW |
| 0x35C | Status Bordcomputer [5] | Kombi |
| 0x35E | Daten Bordcomputer (Reisedaten) [5] | Kombi |
| 0x360 | Daten Bordcomputer (Fahrtbeginn) [2] | Kombi |
| 0x362 | Daten Bordcomputer (Durchschnittswerte) [4] | Kombi |
| 0x364 | Daten Bordcomputer (Ankunft) [2] | Kombi |
| 0x366 | Anzeige Kombi/Externe Anzeige [3] | Kombi |
| 0x367 | Steuerung Anzeige Bedarfsorientierter Service [6] | Kombi |
| 0x374 | Radtoleranzabgleich [7] | DXC_RB/DSC_RB/DSC_CT |
| 0x376 | Status Verschleiß Lamelle [3] | VGSG |
| 0x380 | Fahrgestellnummer [5] | CAS |
| 0x381 | Elektronischer Motorölmessstab [10] | DME1/DDE1 |
| 0x382 | Elektronischer Motorölmessstab M [1] | DME1/DDE1 |
| 0x388 | Fahrzeugtyp [13] | CAS |
| 0x38E | Startdrehzahl [1] | DME1/DDE1 |
| 0x394 | RDA Anfrage/Datenablage [5] | Kombi |
| 0x395 | Codierung Powermanagement [2] | CAS |
| 0x398 | Bedienung Fahrwerk [14] | M_ASK/CCC_GW |
| 0x399 | Status M-Drive [2] | DME1 |
| 0x39C | EBA Datenanforderung [5] |  |
| 0x39E | Bedienung Uhrzeit/Datum [1] | M_ASK/CCC_GW |
| 0x3A0 | Fahrzeugzustand [4] | KGM |
| 0x3A3 | Anforderung Remote Services [2] | M_ASK/CCC_GW |
| 0x3AC | Nachlaufzeit Klemme 30 fehlergesteuert [2] | KGM |
| 0x3B0 | Status Gang Rückwärts [2] | LM |
| 0x3B1 | Getriebedaten 3 [2] | EGS_MECH/DKG |
| 0x3B3 | Powermanagement Verbrauchersteuerung [8] | DME1/DDE1 |
| 0x3B4 | Powermanagement Batteriespannung [11] | DME1/DDE1 |
| 0x3B5 | Status Wasserventil [6] | IHKA |
| 0x3B6 | Position Fensterheber FAT [6] | KGM |
| 0x3B7 | Position Fensterheber FATH [5] | KBM |
| 0x3B8 | Position Fensterheber BFT [6] | KGM |
| 0x3B9 | Position Fensterheber BFTH [5] | KBM |
| 0x3BA | Position SHD [10] | SHD/MDS |
| 0x3BD | Status Verbraucherabschaltung [2] | KBM |
| 0x3BE | Nachlaufzeit Stromversorgung [5] | CAS |
| 0x3BF | Position Fensterheber Heckscheibe [1] | CVM_V |
| 0x3C0 | Konfiguration FAS [3] | SM_FA |
| 0x3C1 | Konfiguration BFS [3] | SM_BF |
| 0x3CA | Konfiguration M-Drive [2] | M_ASK/CCC_GW |
| 0x3D3 | Status Solarsensor [1] | LM |
| 0x3D4 | Konfiguration Zentralverriegelung CKM [3] | M_ASK/CCC_GW |
| 0x3D5 | Status Zentralverriegelung CKM [4] | CAS |
| 0x3D6 | Konfiguration DWA CKM [1] | M_ASK/CCC_GW |
| 0x3D7 | Status DWA CKM [2] | DWA |
| 0x3D8 | Konfiguration RLS CKM [3] | M_ASK/CCC_GW |
| 0x3D9 | Status RLS CKM [4] | RLS |
| 0x3D9 | Status RLS CKM [4] | LM |
| 0x3DA | Konfiguration Memorypositionen CKM [1] | M_ASK/CCC_GW |
| 0x3DB | Status Memorypositionen CKM [3] | SZM_MIT_KBUS |
| 0x3DB | Status Memorypositionen CKM [3] | SM_FA |
| 0x3DC | Konfiguration Licht CKM [3] | M_ASK/CCC_GW |
| 0x3DD | Status Licht CKM [4] | LM |
| 0x3DE | Konfiguration Klima CKM [5] | M_ASK/CCC_GW |
| 0x3DF | Status Klima CKM [6] | IHKA |
| 0x3E0 | Konfiguration ALC CKM [1] | M_ASK/CCC_GW |
| 0x3E1 | Status ALC CKM [1] | LM |
| 0x3E2 | Konfiguration Heckklappe CKM [1] | M_ASK/CCC_GW |
| 0x3E3 | Status Heckklappe CKM [1] | HKL |
| 0x3E9 | Marker 1 [1] |  |
| 0x3EA | Marker 2 [3] | Diagnosetool_K_CAN_System |
| 0x3EB | Marker 3 [1] | Diagnosetool_PT_CAN |
| 0x3EE | Anforderung Fehlermeldung [1] |  |
| 0x3EF | OBD Daten Motor [2] | DME1/DDE1 |
| 0x3F0 | Konfiguration Licht Erweitert CKM [1] | M_ASK/CCC_GW |
| 0x3F1 | Status Licht Erweitert CKM [1] | LM |
| 0x3F4 | Konfiguration Laderaumabdeckung CKM [1] | M_ASK/CCC_GW |
| 0x3F5 | Status Laderaumabdeckung CKM [1] | KBM |
| 0x3FE | Anforderung CAN_Testtool SI-Bus [5] | Diagnosetool_K_CAN_System |
| 0x480 | Netzwerkmanagement | KGM |
| 0x481 | Netzwerkmanagement | ACSM |
| 0x482 | Netzwerkmanagement | SZL_LWS |
| 0x492 | Netzwerkmanagement | DDE1/DME1 |
| 0x496 | Netzwerkmanagement | AFS |
| 0x497 | Netzwerkmanagement | EKP |
| 0x498 | Netzwerkmanagement | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M |
| 0x499 | Netzwerkmanagement | VGSG |
| 0x49B | Netzwerkmanagement | VVT1 |
| 0x49C | Netzwerkmanagement | LDM |
| 0x49E | Netzwerkmanagement | VVT2 |
| 0x4A0 | Netzwerkmanagement | RDC |
| 0x4A1 | Netzwerkmanagement | ACC+NAVI/ACC_Modul |
| 0x4A3 | Netzwerkmanagement | ARS_Modul |
| 0x4A4 | Netzwerkmanagement | CVM_V |
| 0x4A5 | Netzwerkmanagement | RSC_VDA/SC_CT/SC_VDA |
| 0x4A7 | Netzwerkmanagement | PGS |
| 0x4A9 | Netzwerkmanagement | DSC_CT/DSC_RB/DXC_RB |
| 0x4B6 | Netzwerkmanagement | TEL_BPI/TEL_JAP/TEL_MULF |
| 0x4B7 | Netzwerkmanagement | AMP_TOP |
| 0x4B8 | Netzwerkmanagement | EHC |
| 0x4B9 | Netzwerkmanagement | EDCK_Modul |
| 0x4BA | Netzwerkmanagement | KHM |
| 0x4BB | Netzwerkmanagement | JNAV |
| 0x4BC | Netzwerkmanagement | CDC |
| 0x4BD | Netzwerkmanagement | HUD |
| 0x4C0 | Netzwerkmanagement | CAS |
| 0x4C1 | Netzwerkmanagement | DWA |
| 0x4C4 | Netzwerkmanagement | MDS/SHD |
| 0x4C5 | Netzwerkmanagement | RLS/RLS |
| 0x4CB | Netzwerkmanagement | VM |
| 0x4D0 | Netzwerkmanagement | Notstrom-Sirene |
| 0x4D3 | Netzwerkmanagement | IBOC |
| 0x4D4 | Netzwerkmanagement | SDARS |
| 0x4D5 | Netzwerkmanagement | ISpeechBox |
| 0x4D7 | Netzwerkmanagement | NVC |
| 0x4D9 | Netzwerkmanagement | aLBV_FA |
| 0x4DA | Netzwerkmanagement | aLBV_BF |
| 0x4DB | Netzwerkmanagement | DAB |
| 0x4DC | Netzwerkmanagement | Behoerde |
| 0x4DD | Netzwerkmanagement | TLC |
| 0x4DE | Netzwerkmanagement | GWS |
| 0x4DF | Netzwerkmanagement | FLA |
| 0x4E0 | Netzwerkmanagement | Kombi |
| 0x4E2 | Netzwerkmanagement | CCC_GW/M_ASK |
| 0x4E3 | Netzwerkmanagement | CCC_MM |
| 0x4E4 | Netzwerkmanagement | PDC |
| 0x4E5 | Netzwerkmanagement | SZM/SZM_MIT_KBUS |
| 0x4E7 | Netzwerkmanagement | ZBE/ZBE_LO |
| 0x4EB | Netzwerkmanagement | HKL |
| 0x4ED | Netzwerkmanagement | SM_FA/SM_FA_KBUS |
| 0x4EE | Netzwerkmanagement | SM_BF/SM_BF_KBUS |
| 0x4F0 | Netzwerkmanagement | LM/LM_ALC |
| 0x4F1 | Netzwerkmanagement | AHM |
| 0x4F2 | Netzwerkmanagement | KBM |
| 0x4F3 | Netzwerkmanagement | CID_C/CID_C_H |
| 0x4F8 | Netzwerkmanagement | IHKA |
| 0x4FA | Netzwerkmanagement | SH_ZH |
| 0x4FD | Netzwerkmanagement | Diagnosetool_PT_CAN |
| 0x4FE | Netzwerkmanagement | Diagnosetool_K_CAN_System |
| 0x500 | Datentransfer [1] | LM/IHKA |
| 0x509 | Netzwerkmanagement | Xenon_Scheinwerfer_Links_ALC |
| 0x50A | Netzwerkmanagement | Xenon_Scheinwerfer_Rechts_ALC |
| 0x50B | Netzwerkmanagement | CNV |
| 0x571 | Netzwerkmanagement | Diagnosedose |
| 0x580 | Dienste | KGM |
| 0x581 | Dienste | ACSM |
| 0x582 | Dienste | SZL_LWS |
| 0x592 | Dienste | DDE1/DME1 |
| 0x596 | Dienste | AFS |
| 0x597 | Dienste | EKP |
| 0x598 | Dienste | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M |
| 0x599 | Dienste | VGSG |
| 0x59B | Dienste | VVT1 |
| 0x59C | Dienste | LDM |
| 0x59E | Dienste | VVT2 |
| 0x5A0 | Dienste | RDC |
| 0x5A1 | Dienste | ACC+NAVI/ACC_Modul |
| 0x5A3 | Dienste | ARS_Modul |
| 0x5A4 | Dienste | CVM_V |
| 0x5A5 | Dienste | RSC_VDA/SC_CT/SC_VDA |
| 0x5A7 | Dienste | PGS |
| 0x5A9 | Dienste | DSC_CT/DSC_RB/DXC_RB |
| 0x5B6 | Dienste | TEL_BPI/TEL_JAP/TEL_MULF |
| 0x5B7 | Dienste | AMP_TOP |
| 0x5B8 | Dienste | EHC |
| 0x5B9 | Dienste | EDCK_Modul |
| 0x5BA | Dienste | KHM |
| 0x5BB | Dienste | JNAV |
| 0x5BC | Dienste | CDC |
| 0x5BD | Dienste | HUD |
| 0x5C0 | Dienste | CAS |
| 0x5C1 | Dienste | DWA |
| 0x5C4 | Dienste | MDS/SHD |
| 0x5C5 | Dienste | RLS/RLS |
| 0x5CB | Dienste | VM |
| 0x5D0 | Dienste | Notstrom-Sirene |
| 0x5D3 | Dienste | IBOC |
| 0x5D4 | Dienste | SDARS |
| 0x5D5 | Dienste | ISpeechBox |
| 0x5D7 | Dienste | NVC |
| 0x5D9 | Dienste | aLBV_FA |
| 0x5DA | Dienste | aLBV_BF |
| 0x5DB | Dienste | DAB |
| 0x5DC | Dienste | Behoerde |
| 0x5DD | Dienste | TLC |
| 0x5DE | Dienste | GWS |
| 0x5DF | Dienste | FLA |
| 0x5E0 | Dienste | Kombi |
| 0x5E2 | Dienste | CCC_GW/M_ASK |
| 0x5E3 | Dienste | CCC_MM |
| 0x5E4 | Dienste | PDC |
| 0x5E5 | Dienste | SZM/SZM_MIT_KBUS |
| 0x5E7 | Dienste | ZBE/ZBE_LO |
| 0x5EB | Dienste | HKL |
| 0x5ED | Dienste | SM_FA/SM_FA_KBUS |
| 0x5EE | Dienste | SM_BF/SM_BF_KBUS |
| 0x5F0 | Dienste | LM/LM_ALC |
| 0x5F1 | Dienste | AHM |
| 0x5F2 | Dienste | KBM |
| 0x5F3 | Dienste | CID_C/CID_C_H |
| 0x5F8 | Dienste | IHKA |
| 0x5FA | Dienste | SH_ZH |
| 0x5FD | Dienste | Diagnosetool_PT_CAN |
| 0x5FE | Dienste | Diagnosetool_K_CAN_System |
| 0x600 | Diagnosetelegramm | KGM |
| 0x601 | Diagnosetelegramm | ACSM |
| 0x602 | Diagnosetelegramm | SZL_LWS |
| 0x612 | Diagnosetelegramm | DDE1/DME1 |
| 0x616 | Diagnosetelegramm | AFS |
| 0x617 | Diagnosetelegramm | EKP |
| 0x618 | Diagnosetelegramm | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M |
| 0x619 | Diagnosetelegramm | VGSG |
| 0x61B | Diagnosetelegramm | VVT1 |
| 0x61C | Diagnosetelegramm | LDM |
| 0x61E | Diagnosetelegramm | VVT2 |
| 0x620 | Diagnosetelegramm | RDC |
| 0x621 | Diagnosetelegramm | ACC+NAVI/ACC_Modul |
| 0x623 | Diagnosetelegramm | ARS_Modul |
| 0x624 | Diagnosetelegramm | CVM_V |
| 0x625 | Diagnosetelegramm | RSC_VDA/SC_CT/SC_VDA |
| 0x627 | Diagnosetelegramm | PGS |
| 0x629 | Diagnosetelegramm | DSC_CT/DSC_RB/DXC_RB |
| 0x636 | Diagnosetelegramm | TEL_BPI/TEL_JAP/TEL_MULF |
| 0x637 | Diagnosetelegramm | AMP_TOP |
| 0x638 | Diagnosetelegramm | EHC |
| 0x639 | Diagnosetelegramm | EDCK_Modul |
| 0x63A | Diagnosetelegramm | KHM |
| 0x63B | Diagnosetelegramm | JNAV |
| 0x63C | Diagnosetelegramm | CDC |
| 0x63D | Diagnosetelegramm | HUD |
| 0x640 | Diagnosetelegramm | CAS |
| 0x641 | Diagnosetelegramm | DWA |
| 0x644 | Diagnosetelegramm | MDS/SHD |
| 0x645 | Diagnosetelegramm | RLS/RLS |
| 0x64B | Diagnosetelegramm | VM |
| 0x650 | Diagnosetelegramm | Notstrom-Sirene |
| 0x653 | Diagnosetelegramm | IBOC |
| 0x654 | Diagnosetelegramm | SDARS |
| 0x655 | Diagnosetelegramm | ISpeechBox |
| 0x657 | Diagnosetelegramm | NVC |
| 0x659 | Diagnosetelegramm | aLBV_FA |
| 0x65A | Diagnosetelegramm | aLBV_BF |
| 0x65B | Diagnosetelegramm | DAB |
| 0x65C | Diagnosetelegramm | Behoerde |
| 0x65D | Diagnosetelegramm | TLC |
| 0x65E | Diagnosetelegramm | GWS |
| 0x65F | Diagnosetelegramm | FLA |
| 0x660 | Diagnosetelegramm | Kombi |
| 0x662 | Diagnosetelegramm | CCC_GW/M_ASK |
| 0x663 | Diagnosetelegramm | CCC_MM |
| 0x664 | Diagnosetelegramm | PDC |
| 0x665 | Diagnosetelegramm | SZM/SZM_MIT_KBUS |
| 0x667 | Diagnosetelegramm | ZBE/ZBE_LO |
| 0x66B | Diagnosetelegramm | HKL |
| 0x66D | Diagnosetelegramm | SM_FA/SM_FA_KBUS |
| 0x66E | Diagnosetelegramm | SM_BF/SM_BF_KBUS |
| 0x670 | Diagnosetelegramm | LM/LM_ALC |
| 0x671 | Diagnosetelegramm | AHM |
| 0x672 | Diagnosetelegramm | KBM |
| 0x673 | Diagnosetelegramm | CID_C/CID_C_H |
| 0x678 | Diagnosetelegramm | IHKA |
| 0x67A | Diagnosetelegramm | SH_ZH |
| 0x67D | Diagnosetelegramm | Diagnosetool_PT_CAN |
| 0x67E | Diagnosetelegramm | Diagnosetool_K_CAN_System |
| 0x689 | Diagnosetelegramm | Xenon_Scheinwerfer_Links_ALC |
| 0x68A | Diagnosetelegramm | Xenon_Scheinwerfer_Rechts_ALC |
| 0x68B | Diagnosetelegramm | CNV |
| 0x6F1 | Diagnosetelegramm | Diagnosedose |
| 0x7C0 | CAS Programmierung Bandende 1 [2] | CAS |
| 0x7C1 | CAS Programmierung Bandende 2 [2] | CAS |
| 0x7C2 | CAS Applikationsnachricht 1 [2]  |  TOOL_BANDENDE_CAS  |
| 0x7C3 | CAS Applikationsnachricht 2 [2]  |  TOOL_BANDENDE_CAS  |
| 0x??? | unbekannt | unbekanntes Steuergerät   |

### WUP_ID

| WUP_ID | DIAG_ADR | TEL_NAME | SENDER |
| --- | --- | --- | --- |
| 168 | 0x12 | Drehmoment 1 K-CAN [10] | DME1/DDE1 vom PT-CAN über KGM |
| 169 | 0x12 | Drehmoment 2 [9] | DME1/DDE1 vom PT-CAN über KGM |
| 170 | 0x12 | Drehmoment 3 K-CAN [10] | DME1/DDE1 vom PT-CAN über KGM |
| 172 | 0x12 | Radmoment Antriebsstrang 2 [5] | DME1/DDE1 vom PT-CAN über KGM |
| 173 | 0x1C | Verzögerungsanforderung ACC [9] | LDM oder 0x21=ACC_Modul/ACC+NAVI vom PT-CAN über KGM |
| 179 | 0x16 | Steuerung Lenkunterstützung [2] | AFS vom PT-CAN über KGM |
| 180 | 0x12 | Radmoment Antriebsstrang 1 [4] | DME1/DDE1 vom PT-CAN über KGM |
| 181 | 0x18 | Drehmomentanforderung EGS [9] | EGS_MECH+NAVI/EGS_MECH vom PT-CAN über KGM |
| 182 | 0x29 | Drehmomentanforderung DSC [7] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 183 | 0x1C | Drehmomentanforderung ACC [10] | LDM oder 0x21=ACC_Modul/ACC+NAVI vom PT-CAN über KGM |
| 184 | 0x18 | Drehmomentanforderung DKG [2] | DKG vom PT-CAN über KGM |
| 185 | 0x16 | Drehmomentanforderung AFS [3] | AFS vom PT-CAN über KGM |
| 186 | 0x18 | Getriebedaten [20] | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG vom PT-CAN über KGM |
| 187 | 0x29 | Sollmomentanforderung [7] | DXC_RB vom PT-CAN über KGM |
| 188 | 0x19 | Status Sollmomentumsetzung [7] | VGSG vom PT-CAN über KGM |
| 189 | 0x18 | Drehmomentanforderung SSG [6] | SMG_M/SMG vom PT-CAN über KGM |
| 190 | 0x23 | Alive Zähler [12] | ARS_Modul vom PT-CAN über KGM |
| 191 | 0x1C | Anforderung Radmoment Antriebsstrang [6] | LDM vom PT-CAN über KGM |
| 192 | 0x00 | Alive Zentrales Gateway [1] | KGM |
| 193 | 0x36 | Alive Zähler Telefon [3] | TEL_JAP/TEL_BPI |
| 196 | 0x29 | Lenkradwinkel K-CAN [13] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 200 | 0x02 | Lenkradwinkel Oben K-CAN [6] | SZL_LWS vom PT-CAN über KGM |
| 202 | 0x00 | Gierrate Anforderung [7] |  |
| 206 | 0x29 | Radgeschwindigkeit K-CAN [4] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 210 | 0x65 | Bedienung Sitzverstellung BF [6] | SZM_MIT_KBUS/SZM |
| 213 | 0x1C | Anforderung Radmoment Bremse [6] | LDM vom PT-CAN über KGM |
| 215 | 0x01 | Alive Zähler Sicherheit [2] | ACSM |
| 218 | 0x65 | Bedienung Sitzverstellung FA [6] | SZM_MIT_KBUS/SZM |
| 225 | 0x29 | Radmoment Bremse [3] | DXC_RB/DSC_RB vom PT-CAN über KGM |
| 226 | 0x00 | Status Zentralverriegelung BFT [11] | KGM |
| 230 | 0x72 | Status Zentralverriegelung BFTH [11] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 234 | 0x00 | Status Zentralverriegelung FAT [11] | KGM |
| 238 | 0x72 | Status Zentralverriegelung FATH [11] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 242 | 0x72 | Status Zentralverriegelung HK [13] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 246 | 0x00 | Steuerung Außenspiegel [9] | KGM |
| 250 | 0x00 | Steuerung Fensterheber FAT [10] | KGM |
| 251 | 0x00 | Steuerung Fensterheber BFT [5] | KGM |
| 252 | 0x72 | Steuerung Fensterheber FATH [5] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 253 | 0x72 | Steuerung Fensterheber BFTH [5] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 304 | 0x40 | Klemmenstatus [19] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 309 | 0x01 | Steuerung Crashabschaltung EKP [1] | ACSM |
| 351 | 0x1C | Anforderung Winkel FFP [6] | LDM vom PT-CAN über KGM |
| 370 | 0x62 | Quittierung Anforderung Kombi [1] | M_ASK/CCC_GW |
| 400 | 0x1C | Anzeige ACC [13] | LDM oder 0x21=ACC_Modul/ACC+NAVI vom PT-CAN über KGM |
| 402 | 0x02 | Bedienung Getriebewahlschalter [16] | SZL_LWS vom PT-CAN über KGM |
| 403 | 0x1C | Anzeige ACC DCC [4] | LDM vom PT-CAN über KGM |
| 404 | 0x02 | Bedienung Tempomat/ACC [13] | SZL_LWS vom PT-CAN über KGM |
| 408 | 0x5E | Bedienung Getriebewahlschalter 2 [2] | GWS vom PT-CAN über KGM |
| 414 | 0x29 | Status DSC K-CAN [19] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 416 | 0x29 | Geschwindigkeit K-CAN [14] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 418 | 0x18 | Getriebedaten 2 [6] | EGS_MECH+NAVI/EGS_MECH/DKG vom PT-CAN über KGM vom PT-CAN über KGM |
| 419 | 0x18 | Rohdaten Längsbeschleunigung [3] | SMG_M vom PT-CAN über KGM |
| 422 | 0x29 | Wegstrecke [6] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 426 | 0x62 | Effekt ErgoCommander [10] | M_ASK/CCC_GW |
| 428 | 0x23 | Status ARS-Modul [13] | ARS_Modul vom PT-CAN über KGM |
| 436 | 0x60 | Status Kombi [14] | Kombi |
| 437 | 0x78 | Wärmestrom/Lastmoment Klima [14] | IHKA |
| 438 | 0x12 | Wärmestrom Motor [11] | DME1/DDE1 vom PT-CAN über KGM |
| 440 | 0x67 | Bedienung ErgoCommander [6] | ZBE_LO/ZBE |
| 450 | 0x64 | Abstandsmeldung PDC [5] | PDC |
| 451 | 0x64 | Abstandsmeldung 2 PDC [3] | PDC |
| 454 | 0x64 | Akustikmeldung PDC [5] | PDC |
| 464 | 0x12 | Motordaten [13] | DME1/DDE1 vom PT-CAN über KGM |
| 466 | 0x18 | Anzeige Getriebedaten [22] | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG vom PT-CAN über KGM |
| 470 | 0x02 | Bedienung Taster Audio/Telefon [12] | SZL_LWS vom PT-CAN über KGM |
| 472 | 0x62 | Bedienung Klima Luftverteilung FA [13] | M_ASK/CCC_GW |
| 473 | 0x02 | Bedienung Taster M-Drive [2] | SZL_LWS vom PT-CAN über KGM |
| 474 | 0x40 | Bedienung Klima Fernwirken [5] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 476 | 0x62 | Bedienung Schichtung Sitzheizung [1] | M_ASK/CCC_GW |
| 480 | 0x62 | Bedienung Klima Luftverteilung BF [7] | M_ASK/CCC_GW |
| 482 | 0x62 | Bedienung Klima Front [11] | M_ASK/CCC_GW |
| 487 | 0x65 | Bedienung Sitzheizung/Sitzklima FA [7] | SZM_MIT_KBUS/SZM |
| 488 | 0x65 | Bedienung Sitzheizung/Sitzklima BF [7] | SZM_MIT_KBUS/SZM |
| 490 | 0x02 | Bedienung Lenksäulenverstellung [5] | SZL_LWS vom PT-CAN über KGM |
| 491 | 0x65 | Bedienung Aktivsitz FA [3] | SZM_MIT_KBUS/SZM |
| 492 | 0x65 | Bedienung Aktivsitz BF [3] | SZM_MIT_KBUS/SZM |
| 493 | 0x65 | Bedienung Lehnenbreitenverstellung Aktiv FA [2] | SZM_MIT_KBUS/SZM |
| 494 | 0x02 | Bedienung Lenkstockstaster [6] | SZL_LWS vom PT-CAN über KGM |
| 495 | 0x65 | Bedienung Lehnenbreitenverstellung Aktiv BF [2] | SZM_MIT_KBUS/SZM |
| 498 | 0x65 | Bedienung Sitzmemory BF [3] | SZM_MIT_KBUS/SZM |
| 499 | 0x65 | Bedienung Sitzmemory FA [4] | SZM_MIT_KBUS/SZM |
| 500 | 0x00 | Fernbedienung Sitzmemory BF [2] |  |
| 502 | 0x70 | Blinken [6] | LM |
| 508 | 0x16 | Status AFS [4] | AFS vom PT-CAN über KGM |
| 510 | 0x01 | Crash [12] | ACSM |
| 512 | 0x12 | Regelgeschwindigkeit Stufentempomat [7] | DME1/DDE1 vom PT-CAN über KGM |
| 514 | 0x70 | Dimmung [10] | LM |
| 517 | 0x60 | Akustikanforderung Kombi [3] | Kombi |
| 518 | 0x12 | Steuerung Anzeige Shiftlights [1] | DME1 vom PT-CAN über KGM |
| 523 | 0x65 | Memoryverstellung [6] | SZM_MIT_KBUS oder 0x6D=SM_FA |
| 524 | 0x6D | Steuerung Lenksäule [3] | SM_FA |
| 525 | 0x65 | Position Lenksäule [4] | SZM_MIT_KBUS/SZM |
| 528 | 0x62 | Bedienung HUD [7] | M_ASK/CCC_GW |
| 529 | 0x3D | Status HUD [7] | HUD |
| 530 | 0x38 | Höhenstände Luftfeder [8] | EHC |
| 538 | 0x70 | Lampenzustand [13] | LM |
| 540 | 0x62 | Bedienung Night-Vision [2] | CCC_GW |
| 542 | 0x57 | Status Night-Vision [2] | NVC |
| 550 | 0x45 | Regensensor-Wischergeschwindigkeit [8] | RLS |
| 550 | 0x70 | Regensensor-Wischergeschwindigkeit [8] | LM |
| 552 | 0x62 | Bedienung Sonderfunktion [8] | M_ASK/CCC_GW oder 0x63=CCC_MM |
| 554 | 0x6E | Status BFS [10] | SM_BF |
| 558 | 0x00 | Status BFSH [7] |  |
| 562 | 0x6D | Status FAS [10] | SM_FA |
| 566 | 0x00 | Status FASH [7] |  |
| 567 | 0x5A | Status Lehnenbreitenverstellung Aktiv BF [3] | aLBV_BF vom PT-CAN über KGM |
| 569 | 0x59 | Status Lehnenbreitenverstellung Aktiv FA [3] | aLBV_FA vom PT-CAN über KGM |
| 570 | 0x40 | Status Funkschlüssel [13] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 571 | 0x78 | Status Klima Front Erweitert [1] | IHKA |
| 572 | 0x6D | Status Bedienung Sitzkomfort FA [1] | SM_FA |
| 575 | 0x6E | Status Bedienung Sitzkomfort BF [1] | SM_BF |
| 578 | 0x78 | Status Klima Front [11] | IHKA |
| 586 | 0x64 | Status PDC [6] | PDC |
| 594 | 0x72 | Wischerstatus [8] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 598 | 0x40 | Challenge Passive Access [10] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 600 | 0x27 | Status Transmission Passive Access [4] | PGS |
| 604 | 0x62 | Bedienung Klima Zusatzprogramme [2] | M_ASK/CCC_GW |
| 619 | 0x00 | Bedienung Rollos BF [2] |  |
| 620 | 0x00 | Bedienung Rollos FA [2] | KGM |
| 621 | 0x00 | Bedienung Rollos MK [1] |  |
| 622 | 0x40 | Steuerung FH/SHD Zentrale (Komfort) [10] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 623 | 0x00 | Bedienung Rollos BFH [2] |  |
| 624 | 0x00 | Bedienung Rollos FAH [2] |  |
| 632 | 0x62 | Navigationsgraph [3] | CCC_GW |
| 634 | 0x62 | Synchronisation Navigationsgraph [4] | CCC_GW |
| 638 | 0x24 | Status Verdeck Cabrio [7] | CVM_V |
| 644 | 0x40 | Steuerung Fernstart Sicherheitsfahrzeug [8] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 645 | 0x65 | Steuerung Rollos [3] | SZM_MIT_KBUS/SZM |
| 652 | 0x5E | Bedienung Taster Vertikaldynamik [2] | GWS vom PT-CAN über KGM |
| 656 | 0x00 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] |  |
| 658 | 0x5F | Steuerung Fernlicht-Assistent [2] | FLA |
| 671 | 0x40 | Fernbedienung FondCommander [5] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 672 | 0x40 | Steuerung Zentralverriegelung [10] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 674 | 0x62 | Bedienung Klima Standfunktionen [5] | M_ASK/CCC_GW |
| 676 | 0x62 | Bedienung Personalisierung [8] | M_ASK/CCC_GW |
| 678 | 0x02 | Bedienung Wischertaster [12] | SZL_LWS |
| 690 | 0x29 | Raddrücke K-CAN [1] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 691 | 0x29 | Beschleunigungsdaten [2] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 692 | 0x41 | DWA-Alarm [4] | DWA |
| 694 | 0x41 | Steuerung Hupe DWA [3] | DWA |
| 696 | 0x62 | Bedienung Bordcomputer [3] | M_ASK/CCC_GW |
| 698 | 0x60 | Stoppuhr [2] | Kombi |
| 704 | 0x60 | LCD-Leuchtdichte [7] | Kombi |
| 714 | 0x60 | Außentemperatur [9] | Kombi |
| 718 | 0x62 | Steuerung Monitor [4] | M_ASK/CCC_GW |
| 725 | 0x78 | Status Heizung Heckscheibe [1] | IHKA |
| 730 | 0x6B | Status Heckklappenlift [2] | HKL |
| 738 | 0x57 | Status Einstellung Video Night-Vision [1] | NVC |
| 740 | 0x71 | Status Anhänger [7] | AHM |
| 742 | 0x78 | Status Klima Luftverteilung FA [13] | IHKA |
| 746 | 0x78 | Status Klima Luftverteilung BF [9] | IHKA |
| 748 | 0x7A | Status Klima SH/ZH Zusatzwasserpumpe [14] | SH_ZH |
| 750 | 0x78 | Status Klima Zusatzprogramme [2] | IHKA |
| 752 | 0x78 | Status Klima Standfunktionen [12] | IHKA |
| 756 | 0x78 | Steuerung Klima SH/ZH Zusatzwasserpumpe [13] | IHKA |
| 758 | 0x72 | Steuerung Licht [7] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 759 | 0x62 | Einheiten [10] | M_ASK/CCC_GW oder 0x63=CCC_MM |
| 760 | 0x60 | Uhrzeit/Datum [12] | Kombi |
| 762 | 0x01 | Sitzbelegung Gurtkontakte [13] | ACSM |
| 764 | 0x40 | ZV und Klappenzustand [11] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 772 | 0x18 | Status Gang [13] | SMG_M/SMG/EGS_MECH+NAVI/EGS_MECH/DKG vom PT-CAN über KGM |
| 774 | 0x70 | Fahrzeugneigung [2] | LM |
| 776 | 0x12 | Status MSA [2] | DME1/DDE1 vom PT-CAN über KGM |
| 784 | 0x60 | Außentemperatur/Relativzeit [10] | Kombi |
| 785 | 0x60 | Nachtankmenge [3] | Kombi |
| 786 | 0x60 | Service Call Teleservice [2] | Kombi |
| 787 | 0x36 | Status Service Call Teleservice [3] | TEL_BPI oder 0x62=M_ASK/CCC_GW |
| 788 | 0x45 | Status Fahrlicht [9] | RLS oder 0x70=LM |
| 789 | 0x65 | Fahrzeugmodus [7] | SZM_MIT_KBUS/SZM |
| 791 | 0x65 | Bedienung Taster PDC [1] | SZM_MIT_KBUS/SZM |
| 792 | 0x27 | Status Antennen Passive Access [7] | PGS |
| 793 | 0x65 | Bedienung Taster RDC [4] | SZM |
| 796 | 0x20 | Status Reifendruck [6] | RDC |
| 797 | 0x29 | Status Reifenpannenanzeige [6] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 802 | 0x39 | Dämpferstrom [2] | EDCK_Modul vom PT-CAN über KGM |
| 806 | 0x39 | Status Dämpferprogramm [9] | EDCK_Modul vom PT-CAN über KGM |
| 808 | 0x60 | Relativzeit [9] | Kombi |
| 810 | 0x70 | Steuerung ALC [2] | LM |
| 813 | 0x29 | Anzeige HDC [3] | DXC_RB vom PT-CAN über KGM |
| 814 | 0x78 | Status Klima Interne Regelinfo [6] | IHKA |
| 816 | 0x60 | Kilometerstand/Reichweite [5] | Kombi |
| 817 | 0x62 | Programmierung Stufentempomat [2] | M_ASK/CCC_GW |
| 818 | 0x12 | Fahreranzeige Drehzahlbereich [4] | DME1/DDE1 vom PT-CAN über KGM |
| 821 | 0x17 | Status Elektrische Kraftstoffpumpe [3] | EKP vom PT-CAN über KGM |
| 822 | 0x60 | Anzeige Checkcontrol-Meldung (Rolle) [3] | Kombi |
| 823 | 0x12 | Status Kraftstoffregelung DME [1] | DME1 vom PT-CAN über KGM |
| 824 | 0x60 | Steuerung Anzeige Checkcontrol-Meldung [7] | Kombi |
| 825 | 0x62 | Status Anzeige Funktionen Extern [1] | M_ASK/CCC_GW |
| 826 | 0x73 | Status Monitor Front [3] | CID_C_H/CID_C |
| 840 | 0x62 | Übereinstimmung Navigationsgraph [4] | CCC_GW |
| 842 | 0x62 | Navigation GPS 1 [5] | CCC_GW |
| 843 | 0x65 | Status Sitzlehnenverriegelung FA [2] | SZM_MIT_KBUS oder 0x6D=SM_FA |
| 844 | 0x62 | Navigation GPS 2 [5] | CCC_GW |
| 845 | 0x65 | Status Sitzlehnenverriegelung BF [2] | SZM_MIT_KBUS oder 0x6E=SM_BF |
| 846 | 0x62 | Navigation System Information [6] | CCC_GW |
| 858 | 0x62 | Termin Condition Based Service [2] | M_ASK/CCC_GW |
| 860 | 0x60 | Status Bordcomputer [5] | Kombi |
| 862 | 0x60 | Daten Bordcomputer (Reisedaten) [5] | Kombi |
| 864 | 0x60 | Daten Bordcomputer (Fahrtbeginn) [2] | Kombi |
| 866 | 0x60 | Daten Bordcomputer (Durchschnittswerte) [4] | Kombi |
| 868 | 0x60 | Daten Bordcomputer (Ankunft) [2] | Kombi |
| 870 | 0x60 | Anzeige Kombi/Externe Anzeige [3] | Kombi |
| 871 | 0x60 | Steuerung Anzeige Bedarfsorientierter Service [6] | Kombi |
| 884 | 0x29 | Radtoleranzabgleich [7] | DXC_RB/DSC_RB/DSC_CT vom PT-CAN über KGM |
| 886 | 0x19 | Status Verschleiß Lamelle [3] | VGSG vom PT-CAN über KGM |
| 896 | 0x40 | Fahrgestellnummer [5] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 897 | 0x12 | Elektronischer Motorölmessstab [10] | DME1/DDE1 vom PT-CAN über KGM |
| 898 | 0x12 | Elektronischer Motorölmessstab M [1] | DME1/DDE1 vom PT-CAN über KGM |
| 904 | 0x40 | Fahrzeugtyp [13] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 910 | 0x12 | Startdrehzahl [1] | DME1/DDE1 vom PT-CAN über KGM |
| 916 | 0x60 | RDA Anfrage/Datenablage [5] | Kombi |
| 917 | 0x40 | Codierung Powermanagement [2] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 920 | 0x62 | Bedienung Fahrwerk [14] | M_ASK/CCC_GW |
| 921 | 0x12 | Status M-Drive [2] | DME1 vom PT-CAN über KGM |
| 924 | 0x00 | EBA Datenanforderung [5] |  |
| 926 | 0x62 | Bedienung Uhrzeit/Datum [1] | M_ASK/CCC_GW |
| 928 | 0x00 | Fahrzeugzustand [4] | KGM |
| 931 | 0x62 | Anforderung Remote Services [2] | M_ASK/CCC_GW |
| 940 | 0x00 | Nachlaufzeit Klemme 30 fehlergesteuert [2] | KGM |
| 944 | 0x70 | Status Gang Rückwärts [2] | LM |
| 945 | 0x18 | Getriebedaten 3 [2] | EGS_MECH/DKG vom PT-CAN über KGM |
| 947 | 0x12 | Powermanagement Verbrauchersteuerung [8] | DME1/DDE1 vom PT-CAN über KGM |
| 948 | 0x12 | Powermanagement Batteriespannung [11] | DME1/DDE1 vom PT-CAN über KGM |
| 949 | 0x78 | Status Wasserventil [6] | IHKA |
| 950 | 0x00 | Position Fensterheber FAT [6] | KGM |
| 951 | 0x72 | Position Fensterheber FATH [5] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 952 | 0x00 | Position Fensterheber BFT [6] | KGM |
| 953 | 0x72 | Position Fensterheber BFTH [5] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 954 | 0x44 | Position SHD [10] | SHD/MDS |
| 957 | 0x72 | Status Verbraucherabschaltung [2] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 958 | 0x40 | Nachlaufzeit Stromversorgung [5] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 959 | 0x24 | Position Fensterheber Heckscheibe [1] | CVM_V |
| 960 | 0x6D | Konfiguration FAS [3] | SM_FA |
| 961 | 0x6E | Konfiguration BFS [3] | SM_BF |
| 970 | 0x62 | Konfiguration M-Drive [2] | M_ASK/CCC_GW |
| 979 | 0x70 | Status Solarsensor [1] | LM |
| 980 | 0x62 | Konfiguration Zentralverriegelung CKM [3] | M_ASK/CCC_GW |
| 981 | 0x40 | Status Zentralverriegelung CKM [4] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 982 | 0x62 | Konfiguration DWA CKM [1] | M_ASK/CCC_GW |
| 983 | 0x41 | Status DWA CKM [2] | DWA |
| 984 | 0x62 | Konfiguration RLS CKM [3] | M_ASK/CCC_GW |
| 985 | 0x45 | Status RLS CKM [4] | RLS oder 0x70=LM |
| 986 | 0x62 | Konfiguration Memorypositionen CKM [1] | M_ASK/CCC_GW |
| 987 | 0x65 | Status Memorypositionen CKM [3] | SZM_MIT_KBUS oder 0x6D=FM_FA |
| 988 | 0x62 | Konfiguration Licht CKM [3] | M_ASK/CCC_GW |
| 989 | 0x70 | Status Licht CKM [4] | LM |
| 990 | 0x62 | Konfiguration Klima CKM [5] | M_ASK/CCC_GW |
| 991 | 0x78 | Status Klima CKM [6] | IHKA |
| 992 | 0x62 | Konfiguration ALC CKM [1] | M_ASK/CCC_GW |
| 993 | 0x70 | Status ALC CKM [1] | LM |
| 994 | 0x62 | Konfiguration Heckklappe CKM [1] | M_ASK/CCC_GW |
| 995 | 0x6B | Status Heckklappe CKM [1] | HKL |
| 1001 | 0x00 | Marker 1 [1] |  |
| 1002 | 0x7E | Marker 2 [3] | Diagnosetool_K_CAN_System |
| 1003 | 0x7D | Marker 3 [1] | Diagnosetool_PT_CAN |
| 1006 | 0x00 | Anforderung Fehlermeldung [1] |  |
| 1007 | 0x12 | OBD Daten Motor [2] | DME1/DDE1 vom PT-CAN über KGM |
| 1008 | 0x62 | Konfiguration Licht Erweitert CKM [1] | M_ASK/CCC_GW |
| 1009 | 0x70 | Status Licht Erweitert CKM [1] | LM |
| 1012 | 0x62 | Konfiguration Laderaumabdeckung CKM [1] | M_ASK/CCC_GW |
| 1013 | 0x72 | Status Laderaumabdeckung CKM [1] | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 1022 | 0x7E | Anforderung CAN_Testtool SI-Bus [5] | Diagnosetool_K_CAN_System |
| 1280 | 0x70 | Datentransfer [1] | LM |
| 1280 | 0x78 | Datentransfer [1] | IHKA |
| 1984 | 0x40 | CAS Programmierung Bandende 1 [2] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 1985 | 0x00 | CAS Programmierung Bandende 2 [2] | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 1152 | 0x00 | Netzwerkmanagement | KGM |
| 1153 | 0x01 | Netzwerkmanagement | ACSM |
| 1154 | 0x02 | Netzwerkmanagement | SZL_LWS vom PT-CAN über KGM |
| 1170 | 0x12 | Netzwerkmanagement | DDE1/DME1 vom PT-CAN über KGM |
| 1174 | 0x16 | Netzwerkmanagement | AFS vom PT-CAN über KGM |
| 1175 | 0x17 | Netzwerkmanagement | EKP vom PT-CAN über KGM |
| 1176 | 0x18 | Netzwerkmanagement | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M vom PT-CAN über KGM |
| 1177 | 0x19 | Netzwerkmanagement | VGSG vom PT-CAN über KGM |
| 1179 | 0x1B | Netzwerkmanagement | VVT1 |
| 1180 | 0x1C | Netzwerkmanagement | LDM vom PT-CAN über KGM |
| 1182 | 0x1E | Netzwerkmanagement | VVT2 |
| 1184 | 0x20 | Netzwerkmanagement | RDC |
| 1185 | 0x21 | Netzwerkmanagement | ACC+NAVI/ACC_Modul vom PT-CAN über KGM |
| 1187 | 0x23 | Netzwerkmanagement | ARS_Modul vom PT-CAN über KGM |
| 1188 | 0x24 | Netzwerkmanagement | CVM_V |
| 1189 | 0x25 | Netzwerkmanagement | RSC_VDA/SC_CT/SC_VDA |
| 1191 | 0x27 | Netzwerkmanagement | PGS |
| 1193 | 0x29 | Netzwerkmanagement | DSC_CT/DSC_RB/DXC_RB vom PT-CAN über KGM |
| 1206 | 0x36 | Netzwerkmanagement | TEL_BPI/TEL_JAP/TEL_MULF |
| 1207 | 0x37 | Netzwerkmanagement | AMP_TOP |
| 1208 | 0x38 | Netzwerkmanagement | EHC |
| 1209 | 0x39 | Netzwerkmanagement | EDCK_Modul vom PT-CAN über KGM |
| 1210 | 0x3A | Netzwerkmanagement | KHM |
| 1211 | 0x3B | Netzwerkmanagement | JNAV |
| 1212 | 0x3C | Netzwerkmanagement | CDC |
| 1213 | 0x3D | Netzwerkmanagement | HUD |
| 1216 | 0x40 | Netzwerkmanagement | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 1217 | 0x41 | Netzwerkmanagement | DWA |
| 1220 | 0x44 | Netzwerkmanagement | MDS/SHD |
| 1221 | 0x45 | Netzwerkmanagement | RLS/RLS |
| 1227 | 0x4B | Netzwerkmanagement | VM |
| 1232 | 0x50 | Netzwerkmanagement | Notstrom-Sirene |
| 1235 | 0x53 | Netzwerkmanagement | IBOC |
| 1236 | 0x54 | Netzwerkmanagement | SDARS |
| 1237 | 0x55 | Netzwerkmanagement | ISpeechBox |
| 1239 | 0x57 | Netzwerkmanagement | NVE |
| 1241 | 0x59 | Netzwerkmanagement | aLBV_FA vom PT-CAN über KGM |
| 1242 | 0x5A | Netzwerkmanagement | aLBV_BF vom PT-CAN über KGM |
| 1243 | 0x5B | Netzwerkmanagement | DAB |
| 1244 | 0x5C | Netzwerkmanagement | Behoerde |
| 1245 | 0x5D | Netzwerkmanagement | TLC vom PT-CAN über KGM |
| 1246 | 0x5E | Netzwerkmanagement | GWS vom PT-CAN über KGM |
| 1247 | 0x5F | Netzwerkmanagement | FLA |
| 1248 | 0x60 | Netzwerkmanagement | Kombi |
| 1250 | 0x62 | Netzwerkmanagement | CCC_GW/M_ASK |
| 1251 | 0x63 | Netzwerkmanagement | CCC_MM |
| 1252 | 0x64 | Netzwerkmanagement | PDC |
| 1253 | 0x65 | Netzwerkmanagement | SZM/SZM_MIT_KBUS |
| 1255 | 0x67 | Netzwerkmanagement | ZBE/ZBE_LO |
| 1259 | 0x6B | Netzwerkmanagement | HKL |
| 1261 | 0x6D | Netzwerkmanagement | SM_FA/SM_FA_KBUS |
| 1262 | 0x6E | Netzwerkmanagement | SM_BF/SM_BF_KBUS |
| 1264 | 0x70 | Netzwerkmanagement | LM/LM_ALC |
| 1265 | 0x71 | Netzwerkmanagement | AHM |
| 1266 | 0x72 | Netzwerkmanagement | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 1267 | 0x73 | Netzwerkmanagement | CID_C |
| 1268 | 0x74 | Netzwerkmanagement | CID_C_R |
| 1269 | 0x75 | Netzwerkmanagement | CID_C_R_2 |
| 1272 | 0x78 | Netzwerkmanagement | IHKA |
| 1274 | 0x7A | Netzwerkmanagement | SH_ZH |
| 1277 | 0x7D | Netzwerkmanagement | Diagnosetool_PT_CAN |
| 1278 | 0x7E | Netzwerkmanagement | Diagnosetool_K_CAN_System |
| 1289 | 0x89 | Netzwerkmanagement | Xenon_Scheinwerfer_Links_ALC |
| 1290 | 0x8A | Netzwerkmanagement | Xenon_Scheinwerfer_Rechts_ALC |
| 1291 | 0x8B | Netzwerkmanagement | NVC |
| 1393 | 0xF1 | Netzwerkmanagement | Diagnosedose |
| 1408 | 0x00 | Dienste | KGM |
| 1409 | 0x01 | Dienste | ACSM |
| 1410 | 0x02 | Dienste | SZL_LWS vom PT-CAN über KGM |
| 1426 | 0x12 | Dienste | DDE1/DME1 vom PT-CAN über KGM |
| 1430 | 0x16 | Dienste | AFS vom PT-CAN über KGM |
| 1431 | 0x17 | Dienste | EKP vom PT-CAN über KGM |
| 1432 | 0x18 | Dienste | DKG/EGS_MECH/EGS_MECH+NAVI/SMG/SMG_M vom PT-CAN über KGM |
| 1433 | 0x19 | Dienste | VGSG vom PT-CAN über KGM |
| 1435 | 0x1B | Dienste | VVT1 |
| 1436 | 0x1C | Dienste | LDM vom PT-CAN über KGM |
| 1438 | 0x1E | Dienste | VVT2 |
| 1440 | 0x20 | Dienste | RDC |
| 1441 | 0x21 | Dienste | ACC+NAVI/ACC_Modul vom PT-CAN über KGM |
| 1443 | 0x23 | Dienste | ARS_Modul vom PT-CAN über KGM |
| 1444 | 0x24 | Dienste | CVM_V |
| 1445 | 0x25 | Dienste | RSC_VDA/SC_CT/SC_VDA |
| 1447 | 0x27 | Dienste | PGS |
| 1449 | 0x29 | Dienste | DSC_CT/DSC_RB/DXC_RB vom PT-CAN über KGM |
| 1462 | 0x36 | Dienste | TEL_BPI/TEL_JAP/TEL_MULF |
| 1463 | 0x37 | Dienste | AMP_TOP |
| 1464 | 0x38 | Dienste | EHC |
| 1465 | 0x39 | Dienste | EDCK_Modul vom PT-CAN über KGM |
| 1466 | 0x3A | Dienste | KHM |
| 1467 | 0x3B | Dienste | JNAV |
| 1468 | 0x3C | Dienste | CDC |
| 1469 | 0x3D | Dienste | HUD |
| 1472 | 0x40 | Dienste | CAS Trigger: Kl R/15 Ein, FB, ZV-Taste, Motorhaubenk.  |
| 1473 | 0x41 | Dienste | DWA |
| 1476 | 0x44 | Dienste | MDS/SHD |
| 1477 | 0x45 | Dienste | RLS/RLS |
| 1483 | 0x4B | Dienste | VM |
| 1488 | 0x50 | Dienste | Notstrom-Sirene |
| 1491 | 0x53 | Dienste | IBOC |
| 1492 | 0x54 | Dienste | SDARS |
| 1493 | 0x55 | Dienste | ISpeechBox |
| 1495 | 0x57 | Dienste | NVE |
| 1497 | 0x59 | Dienste | aLBV_FA vom PT-CAN über KGM |
| 1498 | 0x5A | Dienste | aLBV_BF vom PT-CAN über KGM |
| 1499 | 0x5B | Dienste | DAB |
| 1500 | 0x5C | Dienste | Behoerde |
| 1501 | 0x5D | Dienste | TLC vom PT-CAN über KGM |
| 1502 | 0x5E | Dienste | GWS vom PT-CAN über KGM |
| 1503 | 0x5F | Dienste | FLA |
| 1504 | 0x60 | Dienste | Kombi |
| 1506 | 0x62 | Dienste | CCC_GW/M_ASK |
| 1507 | 0x63 | Dienste | CCC_MM |
| 1508 | 0x64 | Dienste | PDC |
| 1509 | 0x65 | Dienste | SZM/SZM_MIT_KBUS |
| 1511 | 0x67 | Dienste | ZBE/ZBE_LO |
| 1515 | 0x6B | Dienste | HKL |
| 1517 | 0x6D | Dienste | SM_FA/SM_FA_KBUS |
| 1518 | 0x6E | Dienste | SM_BF/SM_BF_KBUS |
| 1520 | 0x70 | Dienste | LM/LM_ALC |
| 1521 | 0x71 | Dienste | AHM |
| 1522 | 0x72 | Dienste | KBM Triger: Innenlicht, Türen hinten o. Heckkl. öffnen  |
| 1523 | 0x73 | Dienste | CID_C |
| 1524 | 0x74 | Dienste | CID_C_R |
| 1525 | 0x75 | Dienste | CID_C_R_2 |
| 1528 | 0x78 | Dienste | IHKA |
| 1530 | 0x7A | Dienste | SH_ZH |
| 1533 | 0x7D | Dienste | Diagnosetool_PT_CAN |
| 1534 | 0x7E | Dienste | Diagnosetool_K_CAN_System |
| 1545 | 0x89 | Dienste | Xenon_Scheinwerfer_Links_ALC |
| 1546 | 0x8A | Dienste | Xenon_Scheinwerfer_Rechts_ALC |
| 1547 | 0x8B | Dienste | NVC |
| 1649 | 0xF1 | Dienste | Diagnosedose |
| 0xffff | 0x00 | PT-Wake | PT-CAN Weckleitung ODER 0x72: Karosserie-Basismodul => Ausschalten der Kl. VA |
| 0x0000 | 0x72 | KBM | Karosserie-Basismodul => Ausschalten der Kl. VA |
| 0x??? | 0xff | unbekannt | unbekanntes Steuergerät   |
