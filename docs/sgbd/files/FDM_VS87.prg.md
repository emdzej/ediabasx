# FDM_VS87.prg

## General

|  |  |
| --- | --- |
| File | FDM_VS87.prg |
| Type | PRG |
| Jobs | 62 |
| Tables | 265 |
| Origin | BMW VS-22 Robert Griessbach, Dieter Martini |
| Revision | 0.11 |
| Author | BMW VS-22 Robert Griessbach, BMW VS-22 Dieter Martini |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Flexibles Diagnosemodul für E87 und E90 |  |  |
| ORIGIN | string | BMW VS-22 Robert Griessbach, Dieter Martini |  |  |
| REVISION | string | 0.11 |  |  |
| AUTHOR | string | BMW VS-22 Robert Griessbach, BMW VS-22 Dieter Martini |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.22 |  |  |
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

_No arguments._

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

### STEUERN_DIAGNOSEDATEN_LOESCHEN

Löschen der Diagnosedaten KWP2000: $31 Steuergerätespezifische Routine starten $12 Diagnosedaten loeschen Modus  : Default

_No arguments._

### LESEN_DIAGNOSEDATEN_INFO

Information über Struktur und Anzahl der Diagnosedaten lesen KWP2000: $31 Steuergerätespezifische Routine starten $11 Lesen Diagnosedaten Info Modus  : Default

_No arguments._

### LESEN_DIAGNOSEDATEN

Lesen der Diagnosedaten KWP2000: $31 SSteuergerätespezifische Routine starten $10 Diagnosedaten lesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KAT_NUMMER | unsigned int | Nummer der auszulesenden Kategorie |
| BLOCK_NUMMER | unsigned int | Nummer des auszulesenden Blocks |

### STATUS_LESEN

Löschen der Diagnosedaten KWP2000: $22 Steuergerätespezifische Routine starten $98 Status lesen $00 Modus  : Default

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
| CAN_ID | int | CAN_ID der auszulesenden Nachricht |
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

### STEUERN_SW_RESET

Software-Reset auslösen KWP2000: $11 02 Modus  : Default

_No arguments._

### STEUERN_WD_RESET

Watchdog-Reset auslösen KWP2000: $11 03 Modus  : Default

_No arguments._

### SMS_READ

Lesen und Interpretieren der SMSn KWP2000: n. r. Die auszuwertende Datei ist "C:\SMS.txt"

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

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
| 0x18 | Teves |
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
| 0xFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
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

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Anlieferzustand |
| 0x01 | Normalbetrieb |
| 0x02 | nicht benutzt |
| 0x03 | Speicher geloescht |
| 0x04 | nicht benutzt |
| 0x05 | Signaturpruefung PAF nicht durchgefuehrt |
| 0x06 | Signaturpruefung DAF nicht durchgefuehrt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vorhanden oder nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vorhanden oder nicht vollstaendig |
| 0x10 | Reserviert fuer BMW |
| 0x80 | Reserviert fuer Zulieferer |
| 0xXY | unbekannter Programmierstatus |

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
| 0xC870 | Flash – Speicher defekt |
| 0xC871 | EEPROM – Speicher defekt |
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
| 0xC86e | POR Power-On-Reset |
| 0xc872 | EEPROM -> RAM Abgleich |
| 0xc873 | DSM read address error |
| 0xc874 | TAS response invalid |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_NAMEN

| SG_ADRESSE | SG_KURZNAME | SG_LANGNAME |
| --- | --- | --- |
| 0x00 | JBBF87 | Junction Box Beifahrer                                  |
| 0x01 | MRS5 | Airbag Steuergerät                                        |
| 0x02 | SZL | Schaltzentrum Lenksäule                                    |
| 0x05 | TMFA | Türmodul Fahrer                                           |
| 0x06 | TMBF | Türmodul Beifahrer                                        |
| 0x09 | SBSL | Satellit B-Säule links                                    |
| 0x0A | SBSR | Satellit B-Säule rechts                                   |
| 0x0E | SFZ | Satellit Fahrzeugzentrum                                   |
| 0x12 | ME9N45 | Motor Elektronik / Diesel Elektronik                    |
| 0x13 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave         |
| 0x16 | AFS_90 | Aktivlenkung                                            |
| 0x17 | EKP | Kraftstoffpumpe                                            |
| 0x18 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe     |
| 0x19 | VGSG90 | Verteilergetriebe Steuergerät                           |
| 0x1B | VTC | Valvetronic                                                |
| 0x1C | LDM_90 | Längs Dynamik Manegement                                |
| 0x1D | FFP_90 | Force Feedback Paddle                                   |
| 0x1E | VTC2 | Valvetronic 2                                             |
| 0x1F | HDEV | HDEV-Steuergerät                                          |
| 0x20 | RDC | Reifendruck-Control                                        |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                            |
| 0x22 | AHL | Adaptives Kurvenlicht                                      |
| 0x23 | ARS | Dynamic Drive                                              |
| 0x24 | CVM | Cabrioverdeck-Modul                                        |
| 0x27 | PGS | Passive-Go-Steuergerät                                     |
| 0x29 | DSC_87 | Dynamische Stabilitäts-Control                          |
| 0x2F | HDEV2 | HDEV2-Steuergerät                                        |
| 0x30 | EPS_90 | Elektrische Lenkung                                     |
| 0x35 | CCC | Car Communication Computer                                 |
| 0x36 | TEL | Telefon                                                    |
| 0x37 | AMP | Verstärker                                                 |
| 0x38 | EHC | Höhenstands-Control                                        |
| 0x39 | EDC_K | Dämpfer-Control                                          |
| 0x3A | KHI | Kopfhörer-Interface                                        |
| 0x3B | CCC | Car Communication Computer                                 |
| 0x3C | CDC | CD-Wechsler                                                |
| 0x3D | HUD | Head-Up Display                                            |
| 0x40 | CAS | Car Access System 2                                        |
| 0x41 | DWA_E65 | Diebstahlwarnanlage                                    |
| 0x43 | MPM | Mikro-Powermodul                                           |
| 0x44 | SHD | Schiebehebedach                                            |
| 0x45 | RLS | Regen-Fahrlicht-Sensor                                     |
| 0x47 | ANT | Antennentuner                                              |
| 0x4B | VM | Videomodul                                                  |
| 0x50 | DWA | Diebstahlwarnanlage                                        |
| 0x51 | DWA | Diebstahlwarnanlage                                        |
| 0x52 | DWA | Diebstahlwarnanlage                                        |
| 0x53 | DWA | Diebstahlwarnanlage                                        |
| 0x54 | RAD | Radio                                                      |
| 0x56 | FZD_87 | Funktionszentrum Dach								    |
| 0x60 | KOMB87 | Instrumentenkombination                                 |
| 0x61 | FBI | Flexibles Bus-Interface                                    |
| 0x62 | RAD2_GW | MOST/CAN-Gateway (im Radio Stufe 2)                    |
| 0x63 | RAD1 | Radio Stufe 1/2                                           |
| 0x64 | PDC_87 | Park Distance Control                                   |
| 0x65 | SZM | Schaltzentrum Mittelkonsole                                |
| 0x67 | ZBEL87 | Zentrale Bedieneinheit Low/High                         |
| 0x6B | HKL | Heckklappenlift                                            |
| 0x6D | FAS_87 | Sitzmodul Fahrer                                        |
| 0x6E | BFS_87 | Sitzmodul Beifahrer                                     |
| 0x70 | LSZ | Lichtschaltzentrum                                         |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | FRM_87 | Fussraum Modul Fahrerseite                              |
| 0x73 | CID_87 | Zentrales Info Display                                  |
| 0x78 | IHKA87 | Integrierte Heiz-Klima-Automatik                        |
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
| 0xA6DC | P ERR_WIPER_REARWASHER |
| 0xA6DD | P ERR_SUNBLIND_S1 |
| 0xA6DE | P ERR_JETWASHER_DRIVER |
| 0xA6DF | P ERR_JETWASHER_PASSENGER |
| 0xA6E0 | P ERR_SEATHEATING_DRIVER |
| 0xA6E1 | P ERR_SEATHEATING_PASSENGER |
| 0xA6CF | P ERR_KLIMA_AUC_SENSOR |
| 0x9C5E | P ERR_KLIMA_DRUCK_SENSOR |
| 0x9C69 | P ERR_KLIMA_FONDSCHICHTUNGS |
| 0xA6D0 | P ERR_KLIMA_KOMPRESSOR_VALVE |
| 0xC910 | P ERR_KLIMA_MSG_246_STATUSKLIMA |
| 0xC911 | P ERR_KLIMA_MSG_246_INVALID_KOMPRESSOR |
| 0xA6C8 | P ERR_KLIMA_HSHEIZUNG |
| 0xC912 | P ERR_KLIMA_MSG_246_INVALID_HSHEIZUNG |
| 0xA6D1 | P ERR_KLIMA_ZWP |
| 0xC913 | P ERR_KLIMA_MSG_246_INVALID_ZWP |
| 0xA6D2 | P ERR_KLIMA_WASSERVENTIL |
| 0xC914 | P ERR_WIPER_MSG_2A6_BEDIENUNG |
| 0xA6C9 | P ERR_WIPER_FRONTWIPER_RSK |
| 0xA6CA | P ERR_WIPER_FRONTWIPER_STAGE1 |
| 0xA6CB | P ERR_WIPER_FRONTWIPER_STAGE2 |
| 0xA6D3 | P ERR_WIPER_FRONTWASHER |
| 0xA6CC | P ERR_WIPER_SRA |
| 0xA6CD | P ERR_WIPER_REARWIPER_RSK |
| 0xA6CE | P ERR_WIPER_REARWIPER |
| 0xC904 | P ERR_NW_KCAN_LOW_LINE_ERROR |
| 0xC905 | P ERR_NW_KCAN_HIGH_LINE_ERROR |
| 0xA6E2 | P ERR_TRUNK_LID |
| 0xA6E3 | P ERR_REAR_WINDOW |
| 0xA6D4 | P ERR_LOCKING_MER |
| 0xA6D5 | P ERR_LOCKING_MVR |
| 0xA6D6 | P ERR_LOCKING_MZS |
| 0xA6D7 | P ERR_LOCKING_MVRT |
| 0xA6D8 | P ERR_PASS_WINDOW_UP |
| 0xA6D9 | P ERR_PASS_WINDOW_DOWN |
| 0xA6DA | P ERR_DRV_WINDOW_UP |
| 0xA6DB | P ERR_DRV_WINDOW_DOWN |
| 0xA6E4 | P ERR_FUELTANK_DRIVER |
| 0xA6E5 | P ERR_FUELTANK_PASSENGER |
| 0xAAAF | P ERR_SEATHEATING_DRIVER |
| 0xAAB0 | P ERR_SEATHEATING_PASSENGER |
| 0xC915 | P ERR_1B6_WATERVALVE_TIMOUT |
| 0xC916 | P ERR_1B6_WATERVALVE_INVALID |
| 0xC917 | P ERR_1E7_SEATHEATINGFAHRER_TIMOUT |
| 0xC918 | P ERR_1E7_SEATHEATINGFAHRER_INVALID |
| 0xC919 | P ERR_1E8_SEATHEATINGBEIFAHRER_TIMEOUT |
| 0xC91A | P ERR_1E8_SEATHEATINGBEIFAHRER_INVALID |
| 0xA6E7 | P Energy saving mode active |
| 0xA728 | P ERR_PW_REARPASSENGER |
| 0xA729 | P ERR_PW_REARDRIVER |
| 0xA6E6 | P ERR_PW_PASSENGER |
| 0xC907 | P ERR_K_CAN_BUS |
| 0xC90B | P ERR_PT_CAN_BUS |
| 0x9309 | P ERR_SLEEPACK |
| 0xC801 | S ERR_SWITCH_OFF_SVAUS |
| 0xC802 | S ERR_SWITCH_OFF_WAKEUP |
| 0xC803 | S ERR_SWITCH_OFF_NOT_SLEEP |
| 0xXYZW | unbekannte DTC |
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
| 0x0000 | 0000  Unbekannter Fehlerort |

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
| 0xFFFF | unbekannter Fehlerort |

### ID_19

| ORT | ORTTEXT |
| --- | --- |
| 0x5208 | P 5208 Stellmotor Verkabelung |
| 0x52D0 | P 52D0 Inkrementalgeber DIR - Leitung |
| 0x52D1 | P 52D1 Inkrementalgeber Versorgung |
| 0x52D2 | P 52D2 Inkrementalgeber IMP - Leitung |
| 0x52D4 | P 52D4 Inkrementalgeber unplausibel |
| 0x5398 | P 5398 Prüfsummenfehler Programmcode |
| 0x5399 | P 5399 Prüfsummenfehler EEPROM |
| 0x539A | P 539A Watchdog Fehlfunktion |
| 0x539B | P 539B Prüffehler RAM |
| 0x539D | P 539D Steuergerät interner Fehler |
| 0x53A0 | P 53A0 Verteilergetriebe Steuergerät - Codierung |
| 0x53FB | P 53FB FEHLENDE_VERSORGUNG |
| 0x53FC | P 53FC KL30 Versorgungsspannung |
| 0x53FE | P 53FE Unerwarteter Reset |
| 0x53FF | P 53FF Kl15 Plausibilität |
| 0x5460 | P 5460 Motorstrommessung Plausibilität |
| 0x5461 | P 5461 Fehler Stellmotoransteuerung |
| 0x5462 | P 5462 Fehler Stellmotor oder erhöhter Kraftbedarf Kupplung |
| 0x5463 | P 5463 Bruch Mechanik |
| 0x54C4 | P 54C4 Erstkalibrierung fehlerhaft |
| 0x54C5 | P 54C5 Motorstrommessung Offset Strommessung |
| 0x54C6 | P 54C6 Ölverschleiss |
| 0x55C0 | P 55C0 Notlaufregler Abbruch |
| 0x55C4 | P 55C4 CAN_MESSAGE_DSC1 |
| 0x55C5 | P 55C5 CAN_MESSAGE_DME1 |
| 0x55C6 | P 55C6 CAN_MESSAGE_DME2 |
| 0x55C8 | P 55C8 CAN_MESSAGE_ASC2 |
| 0x55C9 | P 55C9 CAN_MESSAGE_ASC4 |
| 0x55CA | P 55CA CAN_MESSAGE_INSTR2 |
| 0x55CB | P 55CB CAN_MESSAGE_INSTR3 |
| 0x55CC | P 55CC CAN_MESSAGE_ASC1 |
| 0x55CD | P 55CD CAN_MESSAGE_ASC3 |
| 0x55CE | P 55CE CAN_MESSAGE_EGS1_SMG1 |
| 0x55CF | P 55CF CAN_MESSAGE_EGS2 |
| 0x55D0 | P 55D0 CAN_MESSAGE_LWS1 |
| 0xD607 | P D607 CAN Bus Off |
| 0xD614 | P D614 CAN_TIMEOUT_DSC1 |
| 0xD615 | P D615 CAN_TIMEOUT_DME1 |
| 0xD616 | P D616 CAN_TIMEOUT_DME2 |
| 0xD618 | P D618 CAN_TIMEOUT_ASC2 |
| 0xD619 | P D619 CAN_TIMEOUT_ASC4 |
| 0xD61A | P D61A CAN_TIMEOUT_INSTR2 |
| 0xD61B | P D61B CAN_TIMEOUT_INSTR3 |
| 0xD61C | P D61C CAN_TIMEOUT_ASC1 |
| 0xD61D | P D61D CAN_TIMEOUT_ASC3 |
| 0xD61E | P D61E CAN_TIMEOUT_EGS1_SMG1 |
| 0xD61F | P D61F CAN_TIMEOUT_EGS2 |
| 0xD620 | P D620 CAN_TIMEOUT_LWS1 |
| 0x55C1 | P 55C1 ALLRADVERLUST |
| 0x54C7 | P 54C7 INC_MODEL_UNPLAUSIBEL |
| 0x54C8 | P 54C8 Klassierwiderstand am Stellmotor |
| 0x539E | P 539E Funktionsfehler VTG Gesamtsystem |
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
| 0x62CC | P Klemme 30 |
| 0x62CD | P ECU intern |
| 0x62CE | P Inbetriebnahme |
| 0x62CF | P Codierdatenfehler |
| 0x62D1 | P Konsistenz Fahrgestellnummer |
| 0x62D2 | P Fehlerspeicher defekt |
| 0xD007 | P CAN Bus Off |
| 0xD01D | P CAN Beschleunigung Fahrzeug Quer DSC |
| 0xD01E | P CAN Winkelgeschwindigkeit Gier DSC |
| 0xD01F | P CAN Geschwindigkeit Fahrzeug |
| 0xD020 | P CAN Aussentemperatur |
| 0xD021 | P CAN Temperatur Motor Kuehlwasser |
| 0xD022 | P CAN Status Klemme 15 |
| 0xD023 | P CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xD024 | P CAN Lenkradwinkel |
| 0xD025 | P CAN Drehzahl Motor |
| 0xD028 | P CAN Gradient Lenkradwinkel |
| 0xD02B | P CAN Kilometerstand |
| 0xD02D | P CAN Status DSC |
| 0xD031 | P CAN Botschaft Geschwindigkeit |
| 0xD032 | P CAN Botschaft Klemmenstatus |
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
| 0xD058 | P Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
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
| 0xD058 | S Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
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
| 0x5d8c |  P Rueckfoerder Pumpe: - Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AN aber erwartet: AUS - Leitungsstoerung ? |
| 0x5d8d |  P Rueckfoerder Pumpe: - steht. Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AUS aber erwartet: AN - Sicherung oder Pumpenmotorrelais defekt ? |
| 0x5D8E | P 5D8E - E87: Falscher Sensorcluster; E90: Rueckfoerder Pumpe: - Nachlauf zu kurz. |
| 0x5D8F | P 5D8F - E87: Sensorcluster Fehler intern; E90; Rueckfoerder Pumpe: - Freigabe des Pumpen-Anlauf-Zyklus, kein Fehler: Gutpruefung nach behobenem Defekt erfolgt. |
| 0x5d90 | P Ventil Relais: VR offen. Fehler verursacht durch zu viele erkannte Einzelventilfehler - Sicherung defekt ? |
| 0x5d91 | P Ventil Relais: VR offen, Relais schliesst nicht waehrend Startup-Test. |
| 0x5d92 | P Ventil Relais: VR-Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. |
| 0x5d93 | P Ventil Relais: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse ueber Startup-Test erkannt.  |
| 0x5d94 | P Ventil Relais: VR steckt in geschlossener Position. Relais schaltet nicht ab waehrend Startup-Test. |
| 0x5d95 | P Ventil Relais: VR offen, Spannungsversorgung_VR waehrend Startup-Test zu niedrig (verglichen mit Uz Versorgungsspannung_Klemme_15); Defekte Sicherung! |
| 0x5d96 | P Ventil Relais: Kurzschluss zu Uz Versorgungsspannung_Klemme_15 im zyklischen Ventilrelais-Test festgestellt. |
| 0x5D97 | P 5D97 - E87: Sensorcluster Versorgungsspannung ausserhalb gueltigem Bereich; E90: Ventil Relais: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse waehrend zyklischem Ventilrelais-Testregistriert. |
| 0x5d98 | P Einlass Ventil (EV) Vorne Links - zyklischer Ventil- und Relaistest. |
| 0x5d99 | P Einlass Ventil (EV) Vorne Links - Allgemeiner Fehler. |
| 0x5D9A | P 5D9A - Drucksensor vorne links elektrisch defekt |
| 0x5D9B | P 5D9B - Drucksensor vorne links Plausibilitaet; E90: Einlass Ventil (EV) Vorne Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5d9d | P Auslass Ventil (AV) Vorne Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5d9e | P Auslass Ventil (AV) Vorne Links - Allgemeiner Fehler. |
| 0x5da1 | P Einlass Ventil (EV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da2 | P Einlass Ventil (EV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5da6 | P Auslass Ventil (AV) Vorne Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da7 | P Auslass Ventil (AV) Vorne Rechts - Allgemeiner Fehler. |
| 0x5DAA | P 5DAA - E87: Drucksensor vorne rechts elektrisch defekt; E90: Einlass Ventil (EV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DAB | P 5DAB - E87: Drucksensor vorne rechts Plausibilitaet; E90: Einlass Ventil (EV) Hinten Links - Allgemeiner Fehler. |
| 0x5DAD | P Einlass Ventil (EV) Hinten Links - Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5DAF | P Auslass Ventil (AV) Hinten Links - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DB0 | P Auslass Ventil (AV) Hinten Links - Allgemeiner Fehler. |
| 0x5DB3 | P Einlass Ventil (EV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DB4 | P Einlass Ventil (EV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5DB8 | P Auslass Ventil (AV) Hinten Rechts - Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DB9 | P Auslass Ventil (AV) Hinten Rechts - Allgemeiner Fehler. |
| 0x5DBA | P 5DBA - Drucksensor hinten rechts elektrisch defekt |
| 0x5DBB | P 5DBB - Drucksensor hinten rechts Plausibilitaet |
| 0x5DBC | P Ventil (USV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DBD | P Ventil (USV1): Allgemeiner Fehler. |
| 0x5DBF | P Ventil (USV1): Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt ? |
| 0x5DC1 | P Ventil (USV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DC2 | P Ventil (USV2): Allgemeiner Fehler. |
| 0x5DC6 | P Ventil (HSV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DC7 | P Ventil (HSV1): Allgemeiner Fehler. |
| 0x5DCA | P 5DCA - E87: Drucksensor hinten rechts elektrisch defekt; E90: Ventil (HSV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5DCB | P 5DCB - E87: Drucksensor hinten rechts Plausibilitaet; E90: Ventil (HSV2): Allgemeiner Fehler. |
| 0x5DCE | P Uz Versorgungsspannung_Klemme_15-Fehler: leichte Unterspannung (Spannung zu niedrig). |
| 0x5DCF | P Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). |
| 0x5DD0 | P 5DD0 - E87: Ventil Abgleich Daten fehlen; E90: Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). |
| 0x5DD1 | P 5DD1 - E87: RPA EEPROM Checksumme-Fehler; E97: Uz Versorgungsspannung_Klemme_15-Fehler: Kurzschluss einer Drehzahlsensor-Spannungsleitung auf UBatt. (Stromfluss durch den ASPxx-Pin des Drehzahlsensor_Inputamplifiers). |
| 0x5DD2 | P Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz Versorgungsspannung_Klemme_15. |
| 0x5DD3 | P DSC-ECU : Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler). |
| 0x5DD4 | P DSC-ECU : ECU-intern: Raddrehzahlfuehler-Driverchip: Fehler bei Versorgungsspannung/Masse. Reset-Response-Test fehlerhaft. |
| 0x5DD5 | P DSC-ECU : ECU-intern: Enable-Leitung kann nicht eingeschaltet werden (Startup-Test Enable High). |
| 0x5DD6 | P DSC-ECU : ECU-intern: Enable-Leitung kann nicht ausgeschaltet werden (Startup-Test Enable low). |
| 0x5DD8 | P DSC-ECU : ECU-intern: System Startup-Synchronisation-Timeout aufgetreten. |
| 0x5DD9 | P DSC-ECU : ECU-intern: SP-Interface: Hardware Fehler erkannt. |
| 0x5DDC | P DSC-ECU : ECU-intern: Het-SP-Interface sendet Fehler; Nachricht nicht korrekt uebertragen. |
| 0x5DDD | P DSC-ECU : ECU-intern: Zugang in Uebersetzungstabelle des Het-SP-Interface ist nicht moeglich. |
| 0x5DDE | P DSC-ECU : ECU-intern: Watchdog-Ueberwachung meldet: Datenfehler aufgetreten. |
| 0x5DDF | P DSC-ECU : ECU-intern: Watchdog-Ueberwachung meldet: Status nicht korrekt. |
| 0x5DE0 | P DSC-ECU : ECU-intern: Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15. |
| 0x5DE1 | P DSC-ECU : ECU-intern: Clockstatus des SP-Interface zeigt fehlende Uhr. |
| 0x5DE2 | P DSC-ECU : ECU-intern: DePwm Status : Software-/ Hardware Konfigurationen passen nicht zusammen (DF11i/s). |
| 0x5DE3 | P DSC-ECU : ECU-intern: Status_Raddrehzahlfuehler des SP-Interface passt nicht zur Konfiguration. |
| 0x5DE4 | P DSC-ECU : ECU-intern: Boot Block ROM Checksummentest-Fehler. |
| 0x5DEA | P Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen Reibarbeit im VG. |
| 0x5DEB | P Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen zu hoher Reifenumfangstoleranz. |
| 0x5DEC | P Verteilergetriebe-ECU: Kupplung voruebergehend (temporaer) stillgelegt. |
| 0x5DED | P DSC-ECU : ECU-intern: Fehlererkennungssystem-Fehler und Statustransfer: Transfer in Algorithm Server nicht gestartet . |
| 0x5DEE | P DSC-ECU : ECU-intern: Fehlererkennungssystem-Fehler in Status/Transfer: SP-Interface-Fehler in Algorithm-Server. |
| 0x5DEF | P DSC-ECU : ECU-intern: ROM Checksummentest-Fehler. |
| 0x5D90 | P 5D90 - Drehzahlfuehler vorne links elektrisch defekt |
| 0x5D91 | P 5D91 - Drehzahlfuehler vorne links Extrapolation |
| 0x5D92 | P 5D92 - Drehzahlfuehler Impulsrad vorne links periodische Ueberwachung |
| 0x5D93 | P 5D93 - Drehzahlfuehler vorne links Anfahrerkennung v_Vergleich |
| 0x5D94 | P 5D94 - Drehzahlfuehler vorne links Langzeitueberwachung |
| 0x5D95 | P 5D95 - Drehzahlfuehler vorne links Check auf doppelte Impulsradfrequenz |
| 0x5D96 | P 5D96 - Drehrichtungserkennung |
| 0x5DA0 | P 5DA0 - Drehzahlfuehler vorne rechts elektrisch defekt |
| 0x5DA1 | P 5DA1 - Drehzahlfuehler vorne rechts Extrapolation |
| 0x5DA2 | P 5DA2 - Drehzahlfuehler Impulsrad vorne rechts periodische Ueberwachung |
| 0x5DA3 | P 5DA3 - Drehzahlfuehler vorne rechts Anfahrerkennung v_Vergleich |
| 0x5DA4 | P 5DA4 - Drehzahlfuehler vorne rechts Langzeitueberwachung |
| 0x5DA5 | P 5DA5 - Drehzahlfuehler vorne rechts Check auf doppelte Impulsradfrequenz |
| 0x5DA6 | P 5DA6 - Drehrichtungserkennung |
| 0x5DB0 | P 5DB0 - Drehzahlfuehler hinten links elektrisch defekt |
| 0x5DB1 | P 5DB1 - Drehzahlfuehler hinten links Extrapolation |
| 0x5DB2 | P 5DB2 - Drehzahlfuehler Impulsrad hinten links periodische Ueberwachung |
| 0x5DB3 | P 5DB3 - Drehzahlfuehler hinten links Anfahrerkennung v_Vergleich |
| 0x5DB4 | P 5DB4 - Drehzahlfuehler hinten links Langzeitueberwachung |
| 0x5DB5 | P 5DB5 - Drehzahlfuehler hinten links Check auf doppelte Impulsradfrequenz |
| 0x5DB6 | P 5DB6 - Drehrichtungserkennung |
| 0x5DC0 | P 5DC0 - Drehzahlfuehler hinten rechts elektrisch defekt |
| 0x5DC1 | P 5DC1 - Drehzahlfuehler hinten rechts Extrapolation |
| 0x5DC2 | P 5DC2 - Drehzahlfuehler Impulsrad hinten rechts periodische Ueberwachung |
| 0x5DC3 | P 5DC3 - Drehzahlfuehler hinten rechts Anfahrerkennung v_Vergleich |
| 0x5DC4 | P 5DC4 - Drehzahlfuehler hinten rechts Langzeitueberwachung |
| 0x5DC5 | P 5DC5 - Drehzahlfuehler hinten rechts Check auf doppelte Impulsradfrequenz |
| 0x5DC6 | P 5DC6 - Drehrichtungserkennung |
| 0x5DF0 | P 5DF0 - E87: Pumpenmotor defekt; E90: DSC-ECU : ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5DF1 | P DSC-ECU : ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5DF2 | P 5DF2 - E87: Ventil/ECU_Hardware Fehler,ROM/RAM_Check Fehler; E90: DSC-ECU : ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5DF3 | P DSC-ECU : ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5DF4 | P 5DF4 - Bordnetzspannung < 9 Volt |
| 0x5DF5 | P 5DF5 - E87: Steuergeraet Fehler intern; E90: DSC-ECU : ECU-intern: Can RAM Checkpatterntest-Fehler. |
| 0x5DF6 | P DSC-ECU : ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task)-Timing. |
| 0x5DF7 | P 5DF7 - E87: Bordnetzspannung > 18 Volt; E90: ECU-intern: Betriebssystem: geringe Background-Rechenzyklus(Task) Aktivitaet - System ueberlastet ! |
| 0x5DF8 | P DSC-ECU : ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5DF9 | P DSC-ECU : ECU-intern: Betriebssystem: Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5DFA | P DSC-ECU : ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5DFB | P DSC-ECU : ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5DFC | P DSC-ECU : ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5DFD | P DSC-ECU : ECU-intern: Illegalen Opcode gefunden    -> Mikrocontroller Mode: undefiniert. |
| 0x5DFE | P DSC-ECU : ECU-intern: ROM Checksummentest-Fehler. |
| 0x5DFF | P DSC-ECU : ECU-intern: RAM Adressierungstest-Fehler. |
| 0xD347 | P D347 - E87: PT-CAN-Bus Off; E90: CAN-Bus-Fehler: CAN Initialisierungs- oder BusOff-Fehler - CAN Leitungsunterbrechung oder Kurzschluss ? |
| 0xD34B | P D34B - F-CAN-Bus Off |
| 0xD354 | P D354 - E87: PT-CAN DME/DDE_1; E90: CAN-Botschaft/DME-Fehler: Motronic - Botschaft DME1 (ID 0x316) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD355 | P D355 - E87: PT-CAN DME/DDE_2; E90: CAN-Botschaft/DME-Fehler: Motronic - Botschaft DME2 (ID 0x329) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD356 | P D356 - E87: PT-CAN DME/DDE_3; E90: CAN-Botschaft/DME-Fehler: Motronic - Botschaft DME4 (ID 0x545) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD357 | P D357 - E87: PT-CAN Getriebe 1; E90: CAN-Botschaft/LWS-Fehler: Botschaft LWS1 (ID 0x1F5) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD358 | P D358 - E87: PT-CAN Instrumentcluster_1; E90: CAN-Botschaft/EGS-Fehler: Getriebe - Botschaft EGS1 (ID 0x43F) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD359 | P D359 - E87: PT-CAN Instrumentcluster_2; E90: CAN-Botschaft/Kombi-Fehler: Botschaft Instrumentkombi INSTR2 (ID 0x613) fehlt (RCV) (von DSC-SG empfangen). |
| 0xD35A | P D35A - E87: PT-CAN Gateway_1; E90: CAN-Botschaft/Kombi-Fehler: Botschaft Instrumentkombi INSTR3 (ID 0x615) fehlt (RCV) (von DSC-SG empfangen). |
| 0xD377 | P D377 - PT-CAN Gateway_2 |
| 0xD35B | P D35B - E87: PT-CAN ACC_1; E90: CAN-Botschaft/DRS-Fehler: Botschaft YAW_A (ID 0xCB) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD35C | P CAN-Botschaft/VG-Fehler: Verteilergetriebe - Botschaft DXC1 (ID 0x192) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD35E | P CAN-Botschaft/EHC-Fehler: Luftfederung - Botschaft EHC1 (ID 0x5DC) fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD35f | P CAN-Botschaft/VG-Fehler: Botschaft DXC3 (ID 0x600)  fehlt (RCV) (von DSC-ECU empfangen). |
| 0xD361 | P D361 - PT-CAN Fahrgestellnummer Timeout |
| 0xD370 | P D370 - F-CAN Sensorcluster_1 Timeout |
| 0xD371 | P D371 - F-CAN Sensorcluster_2 Timeout |
| 0xD372 | P D372 - F-CAN Sensorcluster_3 Timeout |
| 0xD373 | P D373 - F-CAN SWA-Top-Sensor Timeout |
| 0xD374 | P D374 - F-CAN SWA-Raw-Sensor Timeout |
| 0xD375 | P D375 - F-CAN AFS ID118 Timeout |
| 0xD376 | P D376 - F-CAN AFS ID11F Timeout |
| 0xC987 | P C987 - F-CAN SZL keine Botschaften Bus-Off |
| 0xC994 | P C994 - F-CAN SZL Radgeschwindigkeit, Kommunikation mit DSC, Timeout (Nachricht in applizierbarer Zeit nicht empfangen) |
| 0xC995 | P C995 - F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit >300km/h |
| 0xC996 | P C996 - F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit <300km/h |
| 0xC997 | P C997 - F-CAN SZL Radtoleranzabgleich, Kommunikation mit DSC, Timeout (Nachricht in applizierbarer Zeit nicht empfangen) |
| 0xC998 | P C998 - F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich < -5% |
| 0xC99A | P C99A - F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich > 5% |
| 0xC99B | P C99B - F-CAN SZL Sync, keine Kommunikation mit DSC, Timeout |
| 0xC99C | P C99C - F-CAN SZL, Klemmenstatus, keine Kommunikation mit DSC, Timeout |
| 0x5E00 | P 5E00 - E87: Bandendetest aktiv; E90: DSC-ECU : ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5E01 | P 5E01 - E87: Bandendetest Timeout; E90: DSC-ECU : ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5E02 | P 5E02 - E87: Bandendetest Gierratensensor Justierung Fehler; E90: DSC-ECU : ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5E03 | P 5E03 - E87: Bandendetest Gierratensensor Fehler; E90: DSC-ECU : ECU-intern: Allgemeiner Fehler des Ventiltreiber-Status oder -antriebes durch zyklischen Ventilrelaistest registriert. |
| 0x5E04 | P 5E04 - E87: Bandendetest Querbeschleunigungssensor Fehler; E90: DSC-ECU : ECU-intern: Fehler der permanenten Enable-Leitungsueberwachung (Enable ist low nach Startup-Test). |
| 0x5E05 | P 5E05 - E87: Bandendetest Querbeschleunigung und Gierraten Fehler: vertauscht; E90: DSC-ECU : ECU-intern: nicht moeglich SP-Interface transfer zu planen. |
| 0x5E06 | P 5E06 - E87: Bandendetest Gierratensensor falsch montiert; E90: DSC-ECU : ECU-intern: Planmaessige Datenuebertragung nicht verfuegbar. |
| 0x5E07 | P 5E07 - E87: Bandendetest Querbeschleunigungssensor falsch montiert; E90: DSC-ECU : ECU-intern: Datenuebertragungsfehler (Antwort des SP-Interface handler). |
| 0x5E08 | P 5E08 - E87: Bandendetest Lenkwinkelsensor Fehler; E90: DSC-ECU : ECU-intern: Planmaessiger Build-in-self-test (BIST) nicht korrekt (BIST Kontinuität). |
| 0x5E09 | P DSC-ECU : ECU-intern: Build-in-self-test (BIST)-Signaturen verschieden, CPU Fehler im Algorithm- oder System-Server. |
| 0x5E0A | P DSC-ECU : ECU-intern: Allgemeiner Steuergeraete-Fehler. |
| 0x5E0B | P DSC-ECU : ECU-intern: Fehlererkennungssystem Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. |
| 0x5E0C | P DSC-ECU : ECU-intern: Build-in-self-test (BIST)-Signaturen unterschiedlich. CPU Fehler in Algorithm- oder System-Server. |
| 0x5E0D | P DSC-ECU : ECU-intern: Timeout des Build-in-self-test (BIST). Antwort durch Algorithm-Server. |
| 0x5E0E | P DSC-ECU : ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task) Timing. |
| 0x5E0F | P DSC-ECU : ECU-intern: Betriebssystem Rechenzyklus (Task) fehlt (bzw. nicht aktiviert). |
| 0x5E10 | P DSC-ECU : ECU-intern: Betriebssystem: geringe Background Rechenzyklus (Task) Aktivität - System ueberlastet ! |
| 0x5E11 | P DSC-ECU : ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5E12 | P DSC-ECU : ECU-intern: Illegaler Opcode gefunden  -> Mikrocontroller Mode: undefiniert |
| 0x5E13 | P DSC-ECU : ECU-intern: Programm Abbruch  -> Mikrocontroller Mode: Paboard. |
| 0x5E14 | P DSC-ECU : ECU-intern: Datenabbruch  -> Mikrocontroller Mode: Daboard. |
| 0x5E15 | P DSC-ECU : ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface timeout in System-Server.  |
| 0x5E16 | P DSC-ECU : ECU-intern: Fehlererkennungssystem Transfer Fehler: SP-Interface timeout in System-Server. |
| 0x5E17 | P DSC-ECU : ECU-intern: Fehlererkennungssystem Status Transfer: SP-Interface Fehler in System-Server. |
| 0x5E18 | P 5E18 - E87: CAN DME/DDE Botschaft unplausibel; E90: DSC-ECU : ECU-intern: Datenmenge der Peripherie SP-Interface ueberschreitet Bufferlaenge |
| 0x5E19 | P 5E19 - E87: CAN DME/DDE, Motormoment nicht einstellbar; E90: DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): ID Anfrage nicht akzeptiert. |
| 0x5E1A | P 5E1A - E87: CAN DME/DDE Signal Fehler; E90: DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler multi IC. |
| 0x5E1B | P 5E1B - E87: CAN DME/DDE Motormoment Signal Fehler; E90: DSC-ECU : ECU-intern: Serial-Peripherial-Interface (SPI): Uebersetzungsfehler im EEPROM. |
| 0x5E1C | P DSC-ECU : ECU-intern: Bandluecke Spannung ausserhalb gueltigem Bereich. |
| 0x5E1D | P 5E1D - E87: PT-CAN Fahrgestellnummer ungueltig; E90: DSC-ECU : ECU-intern: ADC Umwandlung Start-Fehler. |
| 0x5E1F | P 5E1F - PT-CAN Fahrgestellnummer falsch / ECU nicht initialisiert |
| 0x5E20 | P 5E20 - E87: Drucksensor 1 elektrisch defekt; E90: DSC-ECU : Allgemeiner Steuergeraete-Fehler. |
| 0x5E21 | P 5E21 - E87: Drucksensor 2 elektrisch defekt; E90: DSC-ECU : ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5E22 | P Raddrehzahlfuehler Vorne Links: Leitungsstoerung oder Kurzschluss. |
| 0x5E24 | P 5E24 - E87: Drucksensor 1/2 unplausibel; E90: Raddrehzahlfuehler Vorne Links: Signalflanke fehlt (RDF Typ 11i). |
| 0x5E25 | P Raddrehzahlfuehler Vorne Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5E26 | P 5E26 - E87: Spannungsversorgung Sensoren; E90: Raddrehzahlfuehler Vorne Links: Luftspalt zu groß. |
| 0x5E27 | P Raddrehzahlfuehler Vorne Links: Dynamischen Signalverlust registriert. |
| 0x5E28 | P Raddrehzahlfuehler Vorne Links: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). |
| 0x5E2D | P Raddrehzahlfuehler Vorne Links: Fehlender Zahn RAD VL. |
| 0x5E2E | P Raddrehzahlfuehler Vorne Links: Radschlupfueberwachung RAD VL. |
| 0x5E2F | P 5E2F - E87: Temperatur Sensor; E90: Raddrehzahlfuehler Vorne Links: Fehler Anfahrerkennung RAD VL (RDF-Signalwert ungueltig). |
| 0x5E30 | P 5E30 - E87: Querbeschleunigungssensor elektrisch defekt; E90: Raddrehzahlfuehler Hinten Links: Leitungsstoerung oder Kurzschluss. |
| 0x5E32 | P 5E32 - E87: Querbeschleunigungssensor unplausibel; E90: Raddrehzahlfuehler Hinten Links: Signalflanke fehlt (RDF Typ 11i). |
| 0x5E33 | P Raddrehzahlfuehler Hinten Links: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5E34 | P Raddrehzahlfuehler Hinten Links: Luftspalt zu groß. |
| 0x5E35 | P Raddrehzahlfuehler Hinten Links: Dynamischen Signalverlust registriert. |
| 0x5E36 | P Raddrehzahlfuehler Hinten Links: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). |
| 0x5E38 | P 5E38 - Gierratensensor elektrisch defekt |
| 0x5E3B | P Raddrehzahlfuehler Hinten Links: Fehlender Zahn RAD HL. |
| 0x5E3C | P 5E3C - E87: Gierratensensor unplausibel; E90: Raddrehzahlfuehler Hinten Links: Radschlupfueberwachung  RAD HL. |
| 0x5E3D | P Raddrehzahlfuehler Hinten Links: Fehler Anfahrerkennung RAD HL (RDF-Signalwert ungueltig). |
| 0x5E3E | P Raddrehzahlfuehler Hinten Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5E40 | P 5E40 - E87: Lenkwinkelsensor Signal unplausibel,Offset; E90: Raddrehzahlfuehler Hinten Rechts: Signalflanke fehlt (RDF Typ 11i). |
| 0x5E41 | P Raddrehzahlfuehler Hinten Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5E42 | P Raddrehzahlfuehler Hinten Rechts: Luftspalt zu groß. |
| 0x5E43 | P 5E43 - E87: Lenkwinkelsensor intern; E90: Raddrehzahlfuehler Hinten Rechts: Dynamischen Signalverlust registriert |
| 0x5E44 | P Raddrehzahlfuehler Hinten Rechts: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). |
| 0x5E49 | P Raddrehzahlfuehler Hinten Rechts: Fehlender Zahn RAD HR. |
| 0x5E4A | P Raddrehzahlfuehler Hinten Rechts: Radschlupfueberwachung  RAD HR. |
| 0x5E4B | P Raddrehzahlfuehler Hinten Rechts: Fehler Anfahrerkennung RAD HR (RDF-Signalwert ungueltig). |
| 0x5E4C | P Raddrehzahlfuehler Vorne Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5E4E | P 5E4E - E87: DSC Sensor Offset Check; E90: Raddrehzahlfuehler Vorne Rechts: Signalflanke fehlt (RDF Typ 11i). |
| 0x5E4F | P 5E4F - E87: DSC Dauerregelung; E90: Raddrehzahlfuehler Vorne Rechts: falsche Signalweite (>2ms)DF11. Korrekter RDF-Typ verbaut ? |
| 0x5E50 | P 5E50 - E87: F-CAN SZL Seriennummer falsch; E90: Raddrehzahlfuehler Vorne Rechts: Luftspalt zu groß. |
| 0x5E51 | P 5E51 - E87: F-CAN SZL Seriennummer ungueltig; E90: Raddrehzahlfuehler Vorne Rechts: Dynamischen Signalverlust registriert. |
| 0x5E52 | P Raddrehzahlfuehler Vorne Rechts: Fehler Signaleinstreuungs-Ueberwachung (Noise Monitor). |
| 0x5E57 | P Raddrehzahlfuehler Vorne Rechts: Fehlender Zahn RAD VR. |
| 0x5E58 | P 5E58 - E87: ASC ECU im falschen Fahrzeug; E90: Raddrehzahlfuehler Vorne Rechts: Radschlupfueberwachung  RAD VR. |
| 0x5E59 | P 5E59 - E87: Codierfehler; E90: Raddrehzahlfuehler Vorne Rechts: Fehler Anfahrerkennung RAD VR (RDF-Signalwert ungueltig). |
| 0x5E5B | P 5E5B - DSC Taster laenger als 10sec gedrueckt oder Fehler |
| 0x5E5C | P 5E5C - E87: RPA Taster Fehler; E90: Raddrehzahlfuehler allgemein: Plausibilitaet Drehrichtung. |
| 0x5E5D | P 5E5D - E87: Bremsfluessigkeitsniveau niedrig / Schalter defekt; E90: Raddrehzahlfuehler allgemein: Unplausibilitaet bei ABS-Regelung. |
| 0x5E5E | P 5E5E - E87: Bremslichtschalter Fehler, Plausibilitaets Fehler; E90: Raddrehzahlfuehler allgemein: Schlupfueberwachung (Lambda) allgemein. |
| 0x5E60 | P Bremslichschalter-Fehler: DME meldet BLS-Fehler im Bremssystem (F_BS) - Leitungs-Kurzschluss ? |
| 0x5E63 | P Bremslichschalter-Fehler: Ueberwachung BLS permanent high mit SilaMemory (ECU sieht permanent getretenes Bremspedal)- Gutpruefung nach behobenem Defekt erforderlich ! -Leitungsunterbrechung oder Kurzschluss ? |
| 0x5E64 | P CAN-Bus-Fehler: Allgemeiner CAN-Fehler. |
| 0x5E6A | P CAN-Botschaft/DSC-Fehler: Botschaft ASC1 (ID 0x153) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5E6B | P CAN-Botschaft/DSC-Fehler: Botschaft ASC2 (ID 0x1F0) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5E70 | P CAN-Botschaft/DSC-Fehler: Botschaft ASC3 (ID 0x1F3) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5E74 | P CAN-Botschaft/DSC-Fehler: Botschaft Yaw_R (ID 0xCA) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5E76 | P CAN-Botschaft/DSC-Fehler: Botschaft ASC4 (ID 0x1F8) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5E77 | P CAN-Botschaft/DSC-Fehler: Botschaft DSC1 (ID 0x190) nicht abgeschickt (XMT) (von DSC-ECU gesendet). |
| 0x5E8E | P Querbeschleunigungssensor:  - Messbereich Querbeschleunigungssensor. |
| 0x5E90 | P Querbeschleunigungssensor:  - Langzeit-Offset ueberschreitet Limit. |
| 0x5E91 | P Querbeschleunigungssensor:  - Wert waehrend Stillstand zu gross. |
| 0x5E92 | P Querbeschleunigungssensor:  - Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5E93 | P Querbeschleunigungssensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5E95 | P Querbeschleunigungssensor:  - Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5E96 | P Querbeschleunigungssensor:  - Plattform-Software (PSW) - Fehlerverdacht. |
| 0x5E97 | P Querbeschleunigungssensor:  - Controller Release System (CRS)- Fehlerverdacht bei Messbereich. |
| 0x5E9A | P Drehratensensor:  - Vorzeichen-Fehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5E9B | P Drehratensensor:  - Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5E9C | P Drehratensensor:  - Plausibilitaetsfehler in Bezug zu Lenkwinkelsensor. |
| 0x5E9D | P Drehratensensor:  - Messbereich DRS. |
| 0x5E9F | P Drehratensensor:  - Offset ueberschreitet Limit waehrend Stillstand. |
| 0x5EA0 | P Drehratensensor:  - Signalgradient DRS. |
| 0x5EA1 | P Drehratensensor:  - Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5EA2 | P Drehratensensor:  - Offset ueberschreitet Limit waehrend schneller Kompensation. |
| 0x5EA3 | P Drehratensensor:  - Empfindlichkeit ueberschreitet Limit. |
| 0x5EA4 | P Drehratensensor:  - Offset ueberschreitet Limit waehrend langsamer Kompensation. |
| 0x5EA5 | P Drehratensensor:  - Plausibilitaetsfehler, obwohl Modelgueltigkeit gegeben. |
| 0x5EA6 | P Drehratensensor:  - Plausibilitaetsfehler waehrend Signalbeobachtung (Modelgueltigkeit nicht mehr vorhanden). |
| 0x5EA8 | P Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht bei Messbereich DRS. |
| 0x5EA9 | P Drehratensensor:  - Controller Release System (CRS) - Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5EAA | P Drehratensensor:  - Controller Release System (CRS) - Fehlerverdacht DRS bei Signalgradient. |
| 0x5EAB | P Drehratensensor:  - Controller Release System (CRS) - Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5EAC | P Drehratensensor:  - Plattform-Software (PSW) - Fehlerverdacht DRS. |
| 0x5EAE | P Drehratensensor:  - IDB - ID ungueltig. |
| 0x5EB0 | P Lenkwinkelsensor: interner Fehler : Signal ungueltig. |
| 0x5EB1 | P Lenkwinkelsensor: LWS - Signal relativ. Lenkrad-Mittenstellung unbekannt. Lernquadrant. |
| 0x5EB2 | P Lenkwinkelsensor: LWS - nicht Initialisiert, (empfangene id Null). |
| 0x5EB3 | P Lenkwinkelsensor: LWS - Empfangene id ungleich letztem DSC-LWS-Abgleich. |
| 0x5EB7 | P Variantencodierung : ungueltige Variantencodierung des Luffeder-Steuergeraetes. |
| 0x5EB8 | P Variantencodierung : Variante mit manuellem Getriebe empfaengt CAN-Botschaft von Getriebesteuergeraet - Fehler. |
| 0x5EB9 | P Variantencodierung : MD-Norm_Wert nicht erlaubt fuer ausgewaehlte Variante. |
| 0x5EBB | P Lenkwinkelsensor:  - Signalfehler- Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5EBD | P Lenkwinkelsensor:  - Signal verbleibt auf konstanten Wert. |
| 0x5EBE | P Lenkwinkelsensor:  - Messbereich LWS. |
| 0x5EBF | P Lenkwinkelsensor:  - Signalgradient LWS. |
| 0x5EC0 | P Lenkwinkelsensor:  - Langzeit-Offset-Wert ueberschreitet Limit. |
| 0x5EC1 | P Lenkwinkelsensor:  - Plausibilitaetsfehler - in Bezug zu Drehratensensor. |
| 0x5EC2 | P Lenkwinkelsensor:  - Controller Release System (CRS) - Fehlerverdacht bei Signalgradient. |
| 0x5EC3 | P Lenkwinkelsensor:  - Controller Release System (CRS) - Fehlerverdacht bei Messbereich LWS. |
| 0x5EC4 | P Lenkwinkelsensor:  - Controller Release System (CRS) - Fehlerverdacht bei Plausibilitaet. |
| 0x5EC5 | P Lenkwinkelsensor:  - CAN-Botschaftszaehler meldet Fehler. |
| 0x5ED4 | P Unplausible DSC-Regelung : Unplausibilitaet bei Gierratenregelung (FZR-Controlling). |
| 0x5ED5 | P Unplausible DSC-Regelung : Notbremsfunktion ausgeloest (wegen unplausible Regelung: Blockieren der Raeder wird moeglich gemacht). |
| 0x5ED6 | P Langzeitabgleich: LWS-, DRS- und AY-Sensor-Langzeitabgleiche deaktiviert. |
| 0x5EDA | P Variantencodierung: Codierungswert in EEPROM nicht zulaessig. |
| 0x5EDB | P Variantencodierung: Codierungswert ausserhalb Wertebereich. |
| 0x5EDC | P Variantencodierung: Codierungswert nicht freigegeben in diesem Projekt. |
| 0x5EE0 | P Drucksensor: Drucksensor-Spannungsversorgung Fehler |
| 0x5EE2 | P Drucksensor: Plausibilitaet Drucksensor_Signalleitungen- DS5 :DSLine+DSLine2 = 5Volt. |
| 0x5EE4 | P DSC-ECU: ECU-intern: asynchroner Rechenzyklus-Counter; Fehler Drucksensor_Stromversorgung. |
| 0x5EE5 | P Drucksensor:  - Leitungsfehler. |
| 0x5EE6 | P Drucksensor:  - Leitungsfehler: Signal invertiert. |
| 0x5EE7 | P Drucksensor:  - Fehler beiPower Up Selbsttest (POS). |
| 0x5EED | P Drucksensor:  - Drucksensor-Offset ungueltig. |
| 0x5EEE | P Bremslichschalter:  - Plausibilitaet 2 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5EEF | P Bremslichschalter:  - Plausibilitaet 1 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5EF0 | P Bremslichschalter:  - Plausibilitaet 3 - Plausibilisierung Drucksensor gegen Bremslichtschalter. |
| 0x5EF9 | P DSC-Software: ECU-intern : Timeout in Software-Startup-Phase. |
| 0x5EFA | P DSC-Software: ECU-intern : asynchroner Rechenzyklus-Counter in Software. |
| 0x5EFE | P Raddrehzahlfuehler Vorne Links: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad VL. |
| 0x5EFF | P Raddrehzahlfuehler Hinten Links: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad HL. |
| 0x5DE0 | P 5DE0 - Bremsbelagverschleiss VA nicht/falsch initialisiert |
| 0x5DE1 | P 5DE1 - Bremsbelagverschleiss HA nicht/falsch initialisiert |
| 0x5DE2 | P 5DE2 - Bremsbelagverschleiss VA kritische Belagdicke erreicht |
| 0x5DE3 | P 5DE3 - Bremsbelagverschleiss HA kritische Belagdicke erreicht |
| 0x5DE7 | P Verteilergetriebe-ECU: Funktionspruefung nicht Ok. |
| 0x5DE9 | P Verteilergetriebe-ECU: Unkomfortable VG-Kupplungsregelung. |
| 0x5DEC | P Verteilergetriebe-ECU: Kupplung voruebergehend stillgelegt. |
| 0x5F00 | P Raddrehzahlfuehler Hinten Rechts: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad HR. |
| 0x5F01 | P Raddrehzahlfuehler Vorne Rechts: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten Rad VR. |
| 0x5F02 | P Raddrehzahlfuehler allgemein: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten. |
| 0x5F03 | P ECU-Fehler: Fehler beim lesen der ASW-EEPROM Werte: Defekte EEPROM-Zelle |
| 0x5F04 | P ECU-Fehler: Auslesen der ASW-EEPROM Werte dauert zu lange |
| 0x5F05 | P ECU-Fehler: Testpin Leitungsunterbrechung ueber ValveDriftCheck fuer U467 erkannt. |
| 0x5F06 | P ECU-Fehler: fehlerhafter Zugriff auf Ventilausgang |
| 0x5F07 | P Querbeschleunigungssensor: DRS Typ MM 1.1 Interner Querbeschleunigungs-Sensorwert ausserhalb gueltigem Bereich. |
| 0x5F08 | P Querbeschleunigungssensor: DRS Typ MM 1.1 interner Querbeschleunigungs-Selbsttest fehlgeschlagen. |
| 0x5F09 | P Drehratensensor: DRS Typ MM 1.1 Checksummen der CAN-Botschaften falsch. |
| 0x5F0A | P Drehratensensor: DRS Typ MM 1.1 Allgemeiner DRS-Fehler. |
| 0x5F0B | P Drehratensensor: DRS Typ MM 1.1 interner DRS-Wert ausserhalb gueltigem Bereich. |
| 0x5F0C | P Drehratensensor: DRS Typ MM 1.1 interner DRS-Referenzwert ausserhalb gueltigem Bereich. |
| 0x5F0D | P Drehratensensor: DRS Typ MM 1.1 DRS empfaengt CAN-Botschaft zu frueh. |
| 0x5F0F | P Drehratensensor: DRS Typ MM 1.1 Spannungsversorgung zu hoch. |
| 0x5F10 | P Drehratensensor: DRS Typ MM 1.1 Sensor in Initialisierung. |
| 0x5F11 | P Codierungs-Fehler: Eeprom Konfiguration :ACB: Hill-Descent-Control_Wert in EEPROM ungueltig. |
| 0x5F12 | P Codierungs-Fehler: Eeprom Konfiguration :ACB: Hydraul-Brems-Assistent_Wert in EEPROM ungueltig. |
| 0x5F15 | P Verteilergetriebe-ECU-Fehler: VG-Kupplung ueber Diagnose geoeffnet - Heckantrieb ! |
| 0x5F16 | P Motronic-Fehler: Q_ASC Timeout aufgetreten. |
| 0x5F17 | P ECU-Fehler: High-end-timer (HET) - Fehler aufgetreten |
| 0x5F18 | P Variantencodierung: EEPROM Konfiguration FZR: Anhaenger-Schlinger-Logik (Tol)_Wert in EEPROM ungueltig |
| 0x5F19 | P Allgemeiner Ventil-Fehler: Ventil-Ueberhitzung ! |
| 0x5F1A | P CUS: Fahrleistungsreduzierung durch DSC-Befehl aktiv. |
| 0x5F1B | P CUS: Fahrleistungsreduzierung durch DSC-Befehl abgeschaltet. |
| 0x5F1C | P CUS: Aktiver Bremseneingriff waehrend ueberhitzten Bremsscheiben. |
| 0x5F1D | P Motronic-Fehler: DME Momenteingriff nicht moeglich (STAT_MD_E=3). |
| 0x5F1E | P Variantencodierung: Anhaenger-Schlinger-Logik ueber EEPROM deaktiviert. |
| 0x5F21 | P Motronic-Fehler: Fehler im Motordrehzahl-Signal (CAN-Botschaft DME1). |
| 0x5F22 | P Motronic-Fehler: MotPedalPos sendet Fehlerkennzeichnung FFh (CAN-Botschaft DME2). |
| 0x5F23 | P Motronic-Fehler: Tempomatanforderung im HDC kann nicht gestellt werden. |
| 0x5F24 | P Motronic-Fehler: MdNorm-Signal ungueltig (=0) (CAN-Botschaft DME2, ID 0x329). |
| 0x5F2C | P EEPROM Inhalt nicht gueltig. |
| 0x5F38 | P DSC-ECU: ECU-intern : Radgeschwindigkeiten von Algorithm- und System-Server sind unterschiedlich. |
| 0x5F39 | P Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplungsposition unbekannt. |
| 0x5F3A | P Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplung ist in geoeffneter Position - Heckantrieb! |
| 0x5F3B | P Verteilergetriebe-ECU: VG-Kupplung: Einbussen Stellgenauigkeit. Unkomfortable Regelung. |
| 0x5F3C | P Verteilergetriebe-ECU: VG-Kupplung setzt Momentenvorgabe nicht zufriedenstellend um. |
| 0x5F3D | P Verteilergetriebe-ECU: VG-Kupplung setzt Momentenvorgabe nicht um : Allradverlust ! |
| 0x5F3E | P Verteilergetriebe-ECU: Botschaft DXC3 (ID 0x600): Signal_Lamelle sendet Fehlercode. |
| 0x5F3F | P Verteilergetriebe-ECU: Botschaft DXC3 (ID 0x600): Signal_Kette sendet Fehlercode. |
| 0x5F41 | P Verteilergetriebe-ECU: DSC-VG-Notlauf aktiv (VG uebernimmt Kupplungsregelung). |
| 0x5F42 | P EGS-Fehler: Getriebe im Notlaufmodus. |
| 0x5F43 | P EGS-Fehler: Getriebe Abbtriebsdrehzahl sendet Fehlerkennzeichnung. |
| 0x5F5A | P CAN-Botschaft/Kombi-Fehler: Instr3, ID 0x615: Umgebungstemperatur sendet Fehlerkennzeichnung. |
| 0x5F5B | P CAN-Botschaft/Kombi-Fehler: Instr2, ID 0x613: Km_Stand sendet Fehlerkennzeichnung. |
| 0x5F5C | P CAN-Botschaft/Kombi-Fehler: Instr3, ID 0x615: Anhaenger-Schlinger-Logik (TOL) wegen fehlender CAN-Botschaft deaktiviert. |
| 0x60AC | P RPA-Fehler: Reifenpannenanzeige: Codierdaten unplausibel. |
| 0x60AD | P RPA-Fehler: Reifenpannenanzeige: Standardisierungsdaten unplausibel. |
| 0x60AE | P RPA-Fehler: Reifenpannenanzeige: FASTA_Daten unplausibel. |
| 0x94B0 | P 94B0 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Synchronisation mit Sub nicht moeglich |
| 0x94B1 | P 94B1 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Verbindungstest zur PDA fehlgeschlagen |
| 0x94B2 | P 94B2 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Umgebungshelligkeit zu hoch |
| 0x94B3 | P 94B3 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - keine Referenzspur gefunden |
| 0x94B4 | P 94B4 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Referenzspurabstand ausserhalb des Toleranzbandes |
| 0x94B5 | P 94B5 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Illegaler Code |
| 0x94B6 | P 94B6 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkelsprung zu gross |
| 0x94B7 | P 94B7 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Lenkwinkel-Messbereich ueberschritten (Rundenoverflow) |
| 0x94B8 | P 94B8 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkelverifizierung durch Main und Sub fehlerhaft |
| 0x94B9 | P 94B9 - F-CAN SZL Lenkwinkelsensor : Sensor nicht abgeglichen - EEPROM defekt (nach Anklemmen der KL30) |
| 0x94E0 | P 94E0 - F-CAN SZL EEPROM defekt - Prozessor defekt |
| 0x9500 | P 9500 - F-CAN SZL Unterspannung   UBatt < 8.5 V |
| 0x9501 | P 9501 - F-CAN SZL Ueberspannung    UBatt > 16,5 V |
| 0x9510 | P 9510 - FGR/ACC-Lenkstockschalter (LST) haengt (alle tastenden Schalter)- mechanisch defekt, Kontakt |
| 0x9511 | P 9511 - FGR/ACC-Lenkstockschalter (LST) unplausibel - Unzulaessige Kombination mit Tempomatschalter |
| 0x9512 | P 9512 - FGR/ACC-Lenkstockschalter (LST) elektrisch defekt |
| 0x9518 | P 9518 - Scheibenwischerschalter (SWS) (alle tastenden Schalter)- mechanisch defekt, Kontakt |
| 0x9519 | P 9519 - Scheibenwischerschalter (SWS) unplausibel- Unzulaessige Kombination im Scheibenwischerschalter |
| 0x951A | P 951A - Scheibenwischerschalter (SWS) -Schalter defekt - elektrisch defekt |
| 0x9520 | P 9520 - Lenkrad MFL: mechanisch defekt, Kontakt |
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
| 0xA390 | P fehler mit backup antenna/backup antenna fault. |
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
| 0x9320 | S IIC-Fehler HW-Bus |
| 0x9321 | S IIC-Fehler SW-Bus 1 |
| 0x9322 | S IIC-Fehler SW-Bus 2 |
| 0x9323 | S Speicherfehler |
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
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Fehler Energiesparmode aktiv |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN communication error |
| 0x9308 | S low voltage error |
| 0x9309 | S high voltage error |
| 0x930A | S OS Shutdowns |
| 0x930B | S nr of flash downloads |
| 0x930C | S Anzahl der IC Test Durchläufe |
| 0xA2C8 | P Fehler Motor |
| 0xA2CB | P Fehler Hat switch |
| 0xA2CC | P Energiesparmode aktiv |
| 0xE2C4 | P Fehler CAN physical error |
| 0xE2C7 | P Fehler CAN logical error |
| 0x2001 | S Fehler Temperatur |
| 0x2002 | S Fehler Motor PTC |
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
| 0x9E48 | P SMFA keine Hallimpulse SLV  |
| 0x9E49 | P SMFA keine Hallimpulse SHV  |
| 0x9E4A | P SMFA keine Hallimpulse LNV  |
| 0x9E4B | P SMFA keine Hallimpulse SNV  |
| 0x9E4C | P SMFA keine Hallimpulse KHV  |
| 0x9E4D | P SMFA keine Hallimpulse FEH  |
| 0x9E4E | P SMFA Fehler Motor SLV  |
| 0x9E4F | P SMFA Fehler Motor SHV  |
| 0x9E50 | P SMFA Fehler Motor LNV  |
| 0x9E51 | P SMFA Fehler Motor SNV  |
| 0x9E52 | P SMFA Fehler Motor KHV  |
| 0x9E53 | P SMFA Fehler Motor FEH  |
| 0x9E54 | P SMFA Fehler Heizfeld NTC  |
| 0x9E55 | P SMFA Fehler Heizfeld Kissen  |
| 0x9E56 | P SMFA Fehler Heizfeld Lehne  |
| 0x9E57 | P SMFA Interner Fehler Versorgungsspannung U12s  |
| 0x9E58 | P SMFA Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E59 | P SMFA Interner Fehler EEPROM  |
| 0x9E5A | P SMFA Energiesparmode aktiv  |
| 0x9E5B | P SMFA Fehler Schalter SVS  |
| 0x9E5C | P SMFA Fehler Schalter FEH  |
| 0x9E5D | P SMFA Fehler Schalter LVK  |
| 0xE444 | P CAN-Low, Physikalischer Busfehler  |
| 0xE447 | P Controller, Bus off  |
| 0x9EA8 | P SMBF keine Hallimpulse SLV  |
| 0x9EA9 | P SMBF keine Hallimpulse SHV  |
| 0x9EAA | P SMBF keine Hallimpulse LNV  |
| 0x9EAB | P SMBF keine Hallimpulse SNV  |
| 0x9EAC | P SMBF keine Hallimpulse KHV  |
| 0x9EAD | P SMBF keine Hallimpulse FEH  |
| 0x9EAE | P SMBF Fehler Motor SLV  |
| 0x9EAF | P SMBF Fehler Motor SHV  |
| 0x9EB0 | P SMBF Fehler Motor LNV  |
| 0x9EB1 | P SMBF Fehler Motor SNV  |
| 0x9EB2 | P SMBF Fehler Motor KHV  |
| 0x9EB3 | P SMBF Fehler Motor FEH  |
| 0x9EB4 | P SMBF Fehler Heizfeld NTC  |
| 0x9E55 | P SMFA Fehler Heizfeld Kissen  |
| 0x9E56 | P SMFA Fehler Heizfeld Lehne  |
| 0x9EB7 | P SMBF Interner Fehler Versorgungsspannung U12s  |
| 0x9EB8 | P SMBF Interner Fehler Versorgungsspannung Kl30s  |
| 0x9EB9 | P SMBF Interner Fehler EEPROM  |
| 0x9EBA | P SMBF Energiesparmode aktiv  |
| 0x9EBB | P SMBF Fehler Schalter SVS  |
| 0x9EBC | P SMBF Fehler Schalter FEH  |
| 0x9EBD | P SMBF Fehler Schalter LVK  |
| 0xE484 | P CAN-Low, Physikalischer Busfehler  |
| 0xE487 | P Controller, Bus off  |
| 0x9F08 | P SMFAH keine Hallimpulse SLV  |
| 0x9F09 | P SMFAH keine Hallimpulse SHV  |
| 0x9F0A | P SMFAH keine Hallimpulse LNV  |
| 0x9F0B | P SMFAH keine Hallimpulse SNV  |
| 0x9F0C | P SMFAH keine Hallimpulse KHV  |
| 0x9F0D | P SMFAH keine Hallimpulse FEH  |
| 0x9F0E | P SMFAH Fehler Motor SLV  |
| 0x9F0F | P SMFAH Fehler Motor SHV  |
| 0x9F10 | P SMFAH Fehler Motor LNV  |
| 0x9F11 | P SMFAH Fehler Motor SNV  |
| 0x9F12 | P SMFAH Fehler Motor KHV  |
| 0x9F13 | P SMFAH Fehler Motor FEH  |
| 0x9F14 | P SMFAH Fehler Heizfeld NTC  |
| 0x9F15 | P SMFAH Fehler Heizfeld Kissen  |
| 0x9F16 | P SMFAH Fehler Heizfeld Lehne  |
| 0x9F17 | P SMFAH Interner Fehler Versorgungsspannung U12s  |
| 0x9F18 | P SMFAH Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F19 | P SMFAH Interner Fehler EEPROM  |
| 0x9F1A | P SMFAH Energiesparmode aktiv  |
| 0x9F1B | P SMFAH Fehler Schalter SVS  |
| 0x9F1C | P SMFAH Fehler Schalter FEH  |
| 0x9F1D | P SMFAH Fehler Schalter LVK  |
| 0xE344 | P CAN-Low, Physikalischer Busfehler  |
| 0xE347 | P Controller, Bus off  |
| 0x9F68 | P SMBFH keine Hallimpulse SLV  |
| 0x9F69 | P SMBFH keine Hallimpulse SHV  |
| 0x9F6A | P SMFAH keine Hallimpulse LNV  |
| 0x9F6B | P SMFAH keine Hallimpulse SNV  |
| 0x9F6C | P SMFAH keine Hallimpulse KHV  |
| 0x9F6D | P SMFAH keine Hallimpulse FEH  |
| 0x9F6E | P SMFAH Fehler Motor SLV  |
| 0x9F6F | P SMFAH Fehler Motor SHV  |
| 0x9F70 | P SMFAH Fehler Motor LNV  |
| 0x9F71 | P SMFAH Fehler Motor SNV  |
| 0x9F72 | P SMFAH Fehler Motor KHV  |
| 0x9F73 | P SMFAH Fehler Motor FEH  |
| 0x9F74 | P SMFAH Fehler Heizfeld NTC  |
| 0x9F15 | P SMFAH Fehler Heizfeld Kissen  |
| 0x9F16 | P SMFAH Fehler Heizfeld Lehne  |
| 0x9F77 | P SMFAH Interner Fehler Versorgungsspannung U12s  |
| 0x9F78 | P SMFAH Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F79 | P SMFAH Interner Fehler EEPROM  |
| 0x9F7A | P SMFAH Energiesparmode aktiv  |
| 0x9F7B | P SMFAH Fehler Schalter SVS  |
| 0x9F7C | P SMFAH Fehler Schalter FEH  |
| 0x9F7D | P SMFAH Fehler Schalter LVK  |
| 0xE384 | P CAN-Low, Physikalischer Busfehler  |
| 0xE387 | P Controller, Bus off  |
| 0x9EA6 | S SMFA Fehler Steuergerätetemperatur  |
| 0x9EA7 | S SMFA Versorgungsspannungsfehler  |
| 0x9F06 | S SMBF Fehler Steuergerätetemperatur  |
| 0x9F07 | S SMBF Versorgungsspannungsfehler  |
| 0x9F66 | S SMFAH Fehler Steuergerätetemperatur  |
| 0x9F67 | S SMFAH Versorgungsspannungsfehler  |
| 0x9FC6 | S SMBFH Fehler Steuergerätetemperatur  |
| 0x9FC7 | S SMBFH Versorgungsspannungsfehler  |
| 0xFFFF | unbekannter Fehlerort |

### ID_6E

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | P SMFA keine Hallimpulse SLV  |
| 0x9E49 | P SMFA keine Hallimpulse SHV  |
| 0x9E4A | P SMFA keine Hallimpulse LNV  |
| 0x9E4B | P SMFA keine Hallimpulse SNV  |
| 0x9E4C | P SMFA keine Hallimpulse KHV  |
| 0x9E4D | P SMFA keine Hallimpulse FEH  |
| 0x9E4E | P SMFA Fehler Motor SLV  |
| 0x9E4F | P SMFA Fehler Motor SHV  |
| 0x9E50 | P SMFA Fehler Motor LNV  |
| 0x9E51 | P SMFA Fehler Motor SNV  |
| 0x9E52 | P SMFA Fehler Motor KHV  |
| 0x9E53 | P SMFA Fehler Motor FEH  |
| 0x9E54 | P SMFA Fehler Heizfeld NTC  |
| 0x9E55 | P SMFA Fehler Heizfeld Kissen  |
| 0x9E56 | P SMFA Fehler Heizfeld Lehne  |
| 0x9E57 | P SMFA Interner Fehler Versorgungsspannung U12s  |
| 0x9E58 | P SMFA Interner Fehler Versorgungsspannung Kl30s  |
| 0x9E59 | P SMFA Interner Fehler EEPROM  |
| 0x9E5A | P SMFA Energiesparmode aktiv  |
| 0x9E5B | P SMFA Fehler Schalter SVS  |
| 0x9E5C | P SMFA Fehler Schalter FEH  |
| 0x9E5D | P SMFA Fehler Schalter LVK  |
| 0xE444 | P CAN-Low, Physikalischer Busfehler  |
| 0xE447 | P Controller, Bus off  |
| 0x9EA8 | P SMBF keine Hallimpulse SLV  |
| 0x9EA9 | P SMBF keine Hallimpulse SHV  |
| 0x9EAA | P SMBF keine Hallimpulse LNV  |
| 0x9EAB | P SMBF keine Hallimpulse SNV  |
| 0x9EAC | P SMBF keine Hallimpulse KHV  |
| 0x9EAD | P SMBF keine Hallimpulse FEH  |
| 0x9EAE | P SMBF Fehler Motor SLV  |
| 0x9EAF | P SMBF Fehler Motor SHV  |
| 0x9EB0 | P SMBF Fehler Motor LNV  |
| 0x9EB1 | P SMBF Fehler Motor SNV  |
| 0x9EB2 | P SMBF Fehler Motor KHV  |
| 0x9EB3 | P SMBF Fehler Motor FEH  |
| 0x9EB4 | P SMBF Fehler Heizfeld NTC  |
| 0x9E55 | P SMFA Fehler Heizfeld Kissen  |
| 0x9E56 | P SMFA Fehler Heizfeld Lehne  |
| 0x9EB7 | P SMBF Interner Fehler Versorgungsspannung U12s  |
| 0x9EB8 | P SMBF Interner Fehler Versorgungsspannung Kl30s  |
| 0x9EB9 | P SMBF Interner Fehler EEPROM  |
| 0x9EBA | P SMBF Energiesparmode aktiv  |
| 0x9EBB | P SMBF Fehler Schalter SVS  |
| 0x9EBC | P SMBF Fehler Schalter FEH  |
| 0x9EBD | P SMBF Fehler Schalter LVK  |
| 0xE484 | P CAN-Low, Physikalischer Busfehler  |
| 0xE487 | P Controller, Bus off  |
| 0x9F08 | P SMFAH keine Hallimpulse SLV  |
| 0x9F09 | P SMFAH keine Hallimpulse SHV  |
| 0x9F0A | P SMFAH keine Hallimpulse LNV  |
| 0x9F0B | P SMFAH keine Hallimpulse SNV  |
| 0x9F0C | P SMFAH keine Hallimpulse KHV  |
| 0x9F0D | P SMFAH keine Hallimpulse FEH  |
| 0x9F0E | P SMFAH Fehler Motor SLV  |
| 0x9F0F | P SMFAH Fehler Motor SHV  |
| 0x9F10 | P SMFAH Fehler Motor LNV  |
| 0x9F11 | P SMFAH Fehler Motor SNV  |
| 0x9F12 | P SMFAH Fehler Motor KHV  |
| 0x9F13 | P SMFAH Fehler Motor FEH  |
| 0x9F14 | P SMFAH Fehler Heizfeld NTC  |
| 0x9F15 | P SMFAH Fehler Heizfeld Kissen  |
| 0x9F16 | P SMFAH Fehler Heizfeld Lehne  |
| 0x9F17 | P SMFAH Interner Fehler Versorgungsspannung U12s  |
| 0x9F18 | P SMFAH Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F19 | P SMFAH Interner Fehler EEPROM  |
| 0x9F1A | P SMFAH Energiesparmode aktiv  |
| 0x9F1B | P SMFAH Fehler Schalter SVS  |
| 0x9F1C | P SMFAH Fehler Schalter FEH  |
| 0x9F1D | P SMFAH Fehler Schalter LVK  |
| 0xE344 | P CAN-Low, Physikalischer Busfehler  |
| 0xE347 | P Controller, Bus off  |
| 0x9F68 | P SMBFH keine Hallimpulse SLV  |
| 0x9F69 | P SMBFH keine Hallimpulse SHV  |
| 0x9F6A | P SMFAH keine Hallimpulse LNV  |
| 0x9F6B | P SMFAH keine Hallimpulse SNV  |
| 0x9F6C | P SMFAH keine Hallimpulse KHV  |
| 0x9F6D | P SMFAH keine Hallimpulse FEH  |
| 0x9F6E | P SMFAH Fehler Motor SLV  |
| 0x9F6F | P SMFAH Fehler Motor SHV  |
| 0x9F70 | P SMFAH Fehler Motor LNV  |
| 0x9F71 | P SMFAH Fehler Motor SNV  |
| 0x9F72 | P SMFAH Fehler Motor KHV  |
| 0x9F73 | P SMFAH Fehler Motor FEH  |
| 0x9F74 | P SMFAH Fehler Heizfeld NTC  |
| 0x9F15 | P SMFAH Fehler Heizfeld Kissen  |
| 0x9F16 | P SMFAH Fehler Heizfeld Lehne  |
| 0x9F77 | P SMFAH Interner Fehler Versorgungsspannung U12s  |
| 0x9F78 | P SMFAH Interner Fehler Versorgungsspannung Kl30s  |
| 0x9F79 | P SMFAH Interner Fehler EEPROM  |
| 0x9F7A | P SMFAH Energiesparmode aktiv  |
| 0x9F7B | P SMFAH Fehler Schalter SVS  |
| 0x9F7C | P SMFAH Fehler Schalter FEH  |
| 0x9F7D | P SMFAH Fehler Schalter LVK  |
| 0xE384 | P CAN-Low, Physikalischer Busfehler  |
| 0xE387 | P Controller, Bus off  |
| 0x9EA6 | S SMFA Fehler Steuergerätetemperatur  |
| 0x9EA7 | S SMFA Versorgungsspannungsfehler  |
| 0x9F06 | S SMBF Fehler Steuergerätetemperatur  |
| 0x9F07 | S SMBF Versorgungsspannungsfehler  |
| 0x9F66 | S SMFAH Fehler Steuergerätetemperatur  |
| 0x9F67 | S SMFAH Versorgungsspannungsfehler  |
| 0x9FC6 | S SMBFH Fehler Steuergerätetemperatur  |
| 0x9FC7 | S SMBFH Versorgungsspannungsfehler  |
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
| 0x9332 | S Alive-Signal vom ALC-System fehlt |
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

### WUP_ID

| WUP_ID | DIAG_ADR | TEL_NAME | SENDER |
| --- | --- | --- | --- |
| 168 | 0x00 | Drehmoment 1 K-CAN [8] | (PT-CAN von DDE/DME über JBBF) |
| 170 | 0x00 | Drehmoment 3 K-CAN [8] | (PT-CAN von DDE/DME über JBBF) |
| 174 | 0x00 | Verzögerungsanforderung EMF K-CAN [2] | (PT-CAN über JBBF) |
| 190 | 0x01 | Alive Zähler (11) | MRSZ (9) |
| 192 | 0x00 | Alive Zentrales Gateway [1] | JBBF (9) |
| 193 | 0x62 | Alive Zähler Telefon [3] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 196 | 0x00 | Lenkradwinkel K-CAN (13) | (PT-CAN über JBBF) |
| 200 | 0x00 | Lenkradwinkel Oben K-CAN (6) | (PT-CAN über JBBF) |
| 206 | 0x00 | Radgeschwindigkeit K-CAN [3] | (PT-CAN über JBBF) |
| 226 | 0x00 | Status Zentralverriegelung BFT [8] | JBBF (9) |
| 230 | 0x00 | Status Zentralverriegelung BFTH [9] | JBBF (9) |
| 234 | 0x00 | Status Zentralverriegelung FAT [8] | JBBF (9) |
| 238 | 0x00 | Status Zentralverriegelung FATH [9] | JBBF (9) |
| 242 | 0x00 | Status Zentralverriegelung HK [10] | JBBF (9) |
| 246 | 0x00 | Steuerung Außenspiegel (9) | (PT-CAN über JBBF) |
| 250 | 0x72 | Steuerung Fensterheber FAT [8] | FRMFA (9) |
| 251 | 0x00 | Steuerung Fensterheber BFT [4] | JBBF (9) |
| 252 | 0x00 | Steuerung Fensterheber FATH [4] | JBBF (9) |
| 253 | 0x00 | Steuerung Fensterheber BFTH [4] | JBBF (9) |
| 276 | 0x40 | Challenge/Response CAS->DME [7] | CAS (34) |
| 282 | 0x00 | Challenge/Response DME1->CAS [6] | (von DME/DDE PT-CAN über JBBF) |
| 304 | 0x40 | Klemmenstatus (15) | CAS (34) |
| 309 | 0x01 | Steuerung Crashabschaltung EKP [1] | MRSZ (9) |
| 370 | 0x62 | Quittierung Anforderung Kombi [1] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 400 | 0x00 | Anzeige ACC [13] | (PT-CAN über JBBF) |
| 403 | 0x00 | Anzeige ACC DCC (1) | (PT-CAN über JBBF) |
| 414 | 0x00 | Status DSC K-CAN (17) | (PT-CAN über JBBF) |
| 416 | 0x00 | Geschwindigkeit K-CAN [13] | (PT-CAN über JBBF) |
| 422 | 0x00 | Wegstrecke [6] | (PT-CAN über JBBF) |
| 426 | 0x62 | Effekt ErgoCommander (9) | M_ASK (16), CCC_GW (16) |
| 436 | 0x60 | Status Kombi [12] | Kombi (53) |
| 437 | 0x78 | Wärmestrom/Lastmoment Klima (12) | IHKA (34), IHR (8), IHKR (8) |
| 438 | 0x00 | Wärmestrom Motor [10] | (PT-CAN über JBBF) |
| 440 | 0x67 | Bedienung ErgoCommander (6) | ZBE (21), ZBE_LO (9) |
| 450 | 0x64 | Abstandsmeldung PDC [5] | PDC (26) |
| 451 | 0x64 | Abstandsmeldung 2 PDC [2] | PDC (26) |
| 454 | 0x64 | Akustikmeldung PDC [5] | PDC (26) |
| 464 | 0x00 | Motordaten (12) | (PT-CAN über JBBF) |
| 466 | 0x00 | Anzeige Getriebedaten (18) | (PT-CAN über JBBF) |
| 470 | 0x00 | Bedienung Taster Audio/Telefon [9] | (PT-CAN über JBBF) |
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
| 507 | 0x00 | Status EPS [1] | (PT-CAN über JBBF) |
| 508 | 0x00 | Status AFS [4] | (PT-CAN über JBBF) |
| 510 | 0x01 | Crash (10) | MRSZ (9) |
| 512 | 0x00 | Regelgeschwindigkeit Stufentempomat [5] | (PT-CAN über JBBF) |
| 514 | 0x60 | Dimmung (9) | Kombi (53) |
| 517 | 0x60 | Akustikanforderung Kombi [3] | Kombi (53) |
| 523 | 0x6d | Memoryverstellung [3] | SM_FA (32) |
| 524 | 0x6d | Steuerung Lenksäule [3] | SM_FA (32) |
| 528 | 0x62 | Bedienung HUD [5] | M_ASK (16), CCC_GW (16) |
| 529 | 0x00 | Status HUD [5] | (PT-CAN über JBBF) |
| 538 | 0x72 | Lampenzustand [8] | FRMFA (9) |
| 550 | 0x56 | Regensensor-Wischergeschwindigkeit [8] | FZD (6) |
| 552 | 0x63 | Bedienung Sonderfunktion (7) | M_ASK (16), RAD1 (9), RAD2 (9) |
| 554 | 0x6e | Status BFS [10] | SM_BF (29), JBBF (9) |
| 558 | 0x00 | Status BFSH [7] | (PT-CAN über JBBF) |
| 562 | 0x6d | Status FAS [10] | SM_FA (32), JBBF (9) |
| 566 | 0x00 | Status FASH [7] | (PT-CAN über JBBF) |
| 570 | 0x40 | Status Funkschlüssel (11) | CAS (34) |
| 578 | 0x78 | Status Klima Front [9] | IHKA (34), IHR (8), IHKR (8) |
| 582 | 0x78 | Status Klima Front Bedienteil [9] | IHKA (34), IHR (8), IHKR (8) |
| 586 | 0x64 | Status PDC [6] | PDC (26) |
| 587 | 0x72 | Status Türsensoren [3] | FRMFA (9) |
| 594 | 0x00 | Wischerstatus [7] | JBBF (9) |
| 598 | 0x40 | Challenge Passive Access (9) | CAS (34) |
| 600 | 0x27 | Status Transmission Passive Access [4] | PGS (26) |
| 604 | 0x62 | Bedienung Klima Zusatzprogramme [1] | M_ASK (16), CCC_GW (16) |
| 619 | 0x00 | Bedienung Rollos BF [2] | (PT-CAN über JBBF) |
| 620 | 0x00 | Bedienung Rollos FA [2] | (PT-CAN über JBBF) |
| 621 | 0x78 | Bedienung Rollos MK [1] | IHKA (34), IHR (8), IHKR (8) |
| 622 | 0x40 | Steuerung FH/SHD Zentrale (Komfort) [8] | CAS (34) |
| 623 | 0x00 | Bedienung Rollos BFH [2] | (PT-CAN über JBBF) |
| 624 | 0x00 | Bedienung Rollos FAH [2] | (PT-CAN über JBBF) |
| 632 | 0x62 | Navigationsgraph [2] | CCC_GW (16) |
| 634 | 0x62 | Synchronisation Navigationsgraph [3] | CCC_GW (16) |
| 638 | 0x24 | Status Verdeck Cabrio [5] | CVM_V (13) |
| 640 | 0x00 | Steuerung Sicherheitsfahrzeug 1 [5] | (PT-CAN über JBBF) |
| 642 | 0x00 | Steuerung Sicherheitsfahrzeug 2 [5] | (PT-CAN über JBBF) |
| 644 | 0x40 | Steuerung Fernstart Sicherheitsfahrzeug [8] | CAS (34) |
| 646 | 0x56 | Steuerung Elektrochrom Abblenden [1] | FZD (6) |
| 656 | 0x00 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] | (PT-CAN über JBBF) |
| 670 | 0x00 | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4] | (PT-CAN über JBBF) |
| 671 | 0x40 | Fernbedienung FondCommander [4] | CAS (34) |
| 672 | 0x40 | Steuerung Zentralverriegelung [9] | CAS (34) |
| 676 | 0x60 | Bedienung Personalisierung [7] | Kombi (53) |
| 678 | 0x00 | Bedienung Wischertaster [9] | (PT-CAN über JBBF) |
| 692 | 0x41 | DWA-Alarm [4] | DWA (23) |
| 694 | 0x41 | Steuerung Hupe DWA [3] | DWA (23) |
| 696 | 0x62 | Bedienung Bordcomputer [3] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 698 | 0x60 | Stoppuhr (2) | Kombi (53) |
| 704 | 0x60 | LCD-Leuchtdichte [7] | Kombi (53) |
| 714 | 0x60 | Außentemperatur [9] | Kombi (53) |
| 718 | 0x62 | Steuerung Monitor [4] | M_ASK (16), CCC_GW (16) |
| 719 | 0x00 | Status Zusatzwasserpumpe [2] | JBBF (9) |
| 720 | 0x00 | Status Sensor AUC [4] | JBBF (9) |
| 721 | 0x56 | Status Beschlag Scheibe V [5] | FZD (6) |
| 722 | 0x00 | Status Druck Kältekreislauf [5] | JBBF (9) |
| 723 | 0x00 | Status Schichtung Fond [5] | JBBF (9) |
| 725 | 0x00 | Status Heizung Heckscheibe [1] | JBBF (9) |
| 726 | 0x00 | Status Ventil Klimakompressor [2] | JBBF (9) |
| 740 | 0x71 | Status Anhänger [7] | AHM (26) |
| 742 | 0x78 | Status Klima Luftverteilung FA [9] | IHKA (34) |
| 746 | 0x78 | Status Klima Luftverteilung BF [5] | IHKA (34) |
| 748 | 0x00 | Status Klima SH/ZH Zusatzwasserpumpe [12] | (PT-CAN über JBBF) |
| 750 | 0x78 | Status Klima Zusatzprogramme [1] | IHKA (34) |
| 752 | 0x78 | Status Klima Standfunktionen [9] | IHKA (34), IHR (8), IHKR (8) |
| 756 | 0x78 | Steuerung Klima SH/ZH Zusatzwasserpumpe (12) | IHKA (34), IHR (8), IHKR (8) |
| 758 | 0x72 | Steuerung Licht (7) | FRMFA (9) |
| 759 | 0x60 | Einheiten [9] | Kombi (53) |
| 760 | 0x60 | Uhrzeit/Datum (12) | Kombi (53) |
| 762 | 0x00 | Sitzbelegung Gurtkontakte (10) | (PT-CAN über JBBF) |
| 764 | 0x40 | ZV und Klappenzustand [10] | CAS (34) |
| 772 | 0x00 | Status Gang (12) | (PT-CAN über JBBF) |
| 785 | 0x60 | Nachtankmenge [3] | Kombi (53) |
| 786 | 0x60 | Service Call Teleservice [2] | Kombi (53) |
| 787 | 0x62 | Status Service Call Teleservice [3] | M_ASK (16), CCC_GW (16) |
| 788 | 0x56 | Status Fahrlicht [6] | FZD (6) |
| 789 | 0x00 | Fahrzeugmodus [5] | (PT-CAN über JBBF) |
| 791 | 0x78 | Bedienung Taster PDC [1] | IHKA (34), IHR (8), IHKR (8) |
| 792 | 0x27 | Status Antennen Passive Access [6] | PGS (26) |
| 793 | 0x60 | Bedienung Taster RDC [3] | Kombi (53) |
| 794 | 0x78 | Bedienung Taster HDC [1] | IHKA (34), IHR (8), IHKR (8) |
| 796 | 0x00 | Status Reifendruck [5] | (PT-CAN über JBBF) |
| 797 | 0x00 | Status Reifenpannenanzeige (3) | (PT-CAN über JBBF) |
| 806 | 0x00 | Status Dämpferprogramm [9] | (PT-CAN über JBBF) |
| 808 | 0x60 | Relativzeit [9] | Kombi (53) |
| 813 | 0x00 | Anzeige HDC (3) | (PT-CAN über JBBF) |
| 814 | 0x78 | Status Klima Interne Regelinfo (5) | IHKA (34), IHR (8), IHKR (8) |
| 816 | 0x60 | Kilometerstand/Reichweite [5] | Kombi (53) |
| 817 | 0x62 | Programmierung Stufentempomat [2] | M_ASK (16), CCC_GW (16) |
| 818 | 0x00 | Fahreranzeige Drehzahlbereich [4] | (PT-CAN über JBBF) |
| 820 | 0x00 | Powermanagement Ladespannung [6] | (PT-CAN über JBBF) |
| 821 | 0x00 | Status Elektrische Kraftstoffpumpe [2] | (PT-CAN über JBBF) |
| 822 | 0x60 | Anzeige Checkcontrol-Meldung (Rolle) [3] | Kombi (53) |
| 824 | 0x60 | Steuerung Anzeige Checkcontrol-Meldung [7] | Kombi (53) |
| 826 | 0x73 | Status Monitor Front [3] | CID_C_H (14), CID_C (20), CID_M (14) |
| 828 | 0x00 | Status Monitor Fond 1 [3] | (PT-CAN über JBBF) |
| 840 | 0x62 | Übereinstimmung Navigationsgraph [2] | CCC_GW (16) |
| 841 | 0x00 | Rohdaten Füllstand Tank (3) | JBBF (9) |
| 842 | 0x62 | Navigation GPS 1 [2] | CCC_GW (16) |
| 843 | 0x6d | Status Sitzlehnenverriegelung FA [1] | SM_FA (32) |
| 844 | 0x62 | Navigation GPS 2 [2] | CCC_GW (16) |
| 845 | 0x6e | Status Sitzlehnenverriegelung BF [1] | SM_BF (29) |
| 846 | 0x62 | Navigation System Information [2] | CCC_GW (16) |
| 847 | 0x00 | Status Kontakt Handbremse (3) | JBBF (9) |
| 858 | 0x62 | Termin Condition Based Service [2] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 860 | 0x60 | Status Bordcomputer [5] | Kombi (53) |
| 862 | 0x60 | Daten Bordcomputer (Reisedaten) (5) | Kombi (53) |
| 864 | 0x60 | Daten Bordcomputer (Fahrtbeginn) [2] | Kombi (53) |
| 866 | 0x60 | Daten Bordcomputer (Durchschnittswerte) [4] | Kombi (53) |
| 868 | 0x60 | Daten Bordcomputer (Ankunft) [2] | Kombi (53) |
| 870 | 0x60 | Anzeige Kombi/Externe Anzeige [3] | Kombi (53) |
| 871 | 0x60 | Steuerung Anzeige Bedarfsorientierter Service [6] | Kombi (53) |
| 896 | 0x40 | Fahrgestellnummer [5] | CAS (34) |
| 897 | 0x00 | Elektronischer Motorölmessstab (7) | (PT-CAN über JBBF) |
| 904 | 0x40 | Fahrzeugtyp [11] | CAS (34) |
| 910 | 0x00 | Startdrehzahl [1] | (PT-CAN über JBBF) |
| 916 | 0x60 | RDA Anfrage/Datenablage [4] | Kombi (53) |
| 917 | 0x40 | Codierung Powermanagement [2] | CAS (34) |
| 920 | 0x62 | Bedienung Fahrwerk (12) | M_ASK (16), CCC_GW (16) |
| 921 | 0x00 | Status M-Drive [1] | (PT-CAN über JBBF) |
| 926 | 0x62 | Bedienung Uhrzeit/Datum [1] | M_ASK (16), CCC_GW (16), RAD2 (9) |
| 944 | 0x72 | Status Gang Rückwärts [1] | FRMFA (9) |
| 947 | 0x00 | Powermanagement Verbrauchersteuerung (5) | (PT-CAN über JBBF) |
| 948 | 0x00 | Powermanagement Batteriespannung [9] | (PT-CAN über JBBF) |
| 949 | 0x00 | Status Wasserventil (3) | JBBF (9) |
| 950 | 0x72 | Position Fensterheber FAT [5] | FRMFA (9) |
| 951 | 0x00 | Position Fensterheber FATH [4] | JBBF (9) |
| 952 | 0x72 | Position Fensterheber BFT [5] | FRMFA (9) |
| 953 | 0x00 | Position Fensterheber BFTH [4] | JBBF (9) |
| 954 | 0x56 | Position SHD (7) | MDS (8), FZD (6) |
| 956 | 0x00 | Position Fensterheber Sicherheitsfahrzeug [2] | (PT-CAN über JBBF) |
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
| 1001 | 0x?? | Marker 1 [1] | (PT-CAN über JBBF) |
| 1002 | 0x?? | Marker 2 [3] | Diagnosetool_K_CAN_System (20) |
| 1003 | 0x?? | Marker 3 [1] | (PT-CAN über JBBF) |
| 1022 | 0x?? | Anforderung CAN_Testtool SI_Bus [3] | Diagnosetool_K_CAN_System (20) |
| 1023 | 0x?? | Übertragung Daten SI_Bus CAN_Testtool [3] | (PT-CAN über JBBF) |
| 1280 | 0x?? | Datentransfer [1] | (PT-CAN über JBBF) |
| 1984 | 0x?? | CAS Programmierung Bandende 1 [2] | Tool_Programmierung_Bandende_CAS (10) |
| 1985 | 0x?? | CAS Programmierung Bandende 2 [2] | Tool_Programmierung_Bandende_CAS (10) |
| 1986 | 0x?? | CAS Applikationsnachricht 1 [1] | Tool_Programmierung_Bandende_CAS (10) |
| 1987 | 0x?? | CAS Applikationsnachricht 2 [1] | Tool_Programmierung_Bandende_CAS (10) |
| 0x480 | 0x00 | JBBF | Junction Box Beifahrer    |
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
| 0x??? | 0x?? | MDS | Multi Drive Schiebehebedach |
| 0x569 | 0x00 | K_CAN | Bus-System für Karosserieumfänge  |
| 0x56A | 0x00 | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich |
| 0x56B | 0x00 | byteflight | Bus-System für Airbag-Steuergeräte   |
| 0x56C | 0x00 | MOST | Bus-System für Audio- und Kommunikationsumfänge    |
| 0xffff | 0x00 | PT-Wake | PT-CAN Weckleitung |
| 0x??? | 0xff | unbekannt | unbekanntes Steuergerät   |
