# fdm_vs.prg

## General

|  |  |
| --- | --- |
| File | fdm_vs.prg |
| Type | PRG |
| Jobs | 59 |
| Tables | 71 |
| Origin | BMW VS-22 Robert Griessbach |
| Revision | 0.01 |
| Author | BMW VS-22 Robert Griessbach |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Flexibles Diagnosemodul |  |  |
| ORIGIN | string | BMW VS-22 Robert Griessbach |  |  |
| REVISION | string | 0.01 |  |  |
| AUTHOR | string | BMW VS-22 Robert Griessbach |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.18 |  |  |
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
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

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

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC869 | Clock-Monitor-Reset µP |
| 0xC86a | Illegal Opcode µP |
| 0xC86b | falsche Fahrgestellnummer |
| 0xC86c | Wake-Up durch Unterspannung |
| 0xC86d | Unterspannung im Betrieb (Ubatt < 9V für mindestens eine Minute) |
| 0xC86e | POR Power-On-Reset |
| 0xC86f | Codierdaten Checksummenfehler |
| 0xC870 | Flash - Speicher defekt |
| 0xC871 | EEPROM - Speicher defekt |
| 0xffff | unbekannter Fehlerort |

### FDETAILSTRUKTUR

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

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### SG_NAMEN

| SG_ADRESSE | SG_KURZNAME | SG_LANGNAME |
| --- | --- | --- |
| 0x00 | SGM_ZGM | Sicherheits- und Gateway-Modul (ZGM) |
| 0x01 | SGM_SIM | Sicherheits- und Gateway-Modul (SIM) |
| 0x02 | SZL | Schaltzentrum Lenksäule |
| 0x05 | TMFA | Türmodul Fahrer |
| 0x06 | TMBF | Türmodul Beifahrer |
| 0x09 | SBSL | Satellit B-Säule links |
| 0x0A | SBSR | Satellit B-Säule rechts |
| 0x0E | SFZ | Satellit Fahrzeugzentrum |
| 0x12 | DME_DDE | Motor Elektronik / Diesel Elektronik |
| 0x13 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave |
| 0x16 | AFS | Aktivlenkung |
| 0x17 | EKP | Kraftstoffpumpe |
| 0x18 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe |
| 0x19 | VTG | Verteilergetriebe |
| 0x1B | VTC | Valvetronic |
| 0x1E | VTC2 | Valvetronic 2 |
| 0x1F | HDEV | HDEV-Steuergerät |
| 0x20 | RDC | Reifendruck-Control |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung |
| 0x22 | AHL | Adaptives Kurvenlicht |
| 0x23 | ARS | Dynamic Drive |
| 0x24 | CVM | Cabrioverdeck-Modul |
| 0x27 | PGS | Passive-Go-Steuergerät |
| 0x29 | DSC | Dynamische Stabilitäts-Control |
| 0x2F | HDEV2 | HDEV2-Steuergerät |
| 0x35 | CCC | Car Communication Computer |
| 0x36 | TEL | Telefon |
| 0x37 | AMP | Verstärker |
| 0x38 | EHC | Höhenstands-Control |
| 0x39 | EDC_K | Dämpfer-Control |
| 0x3A | KHI | Kopfhörer-Interface |
| 0x3B | CCC | Car Communication Computer |
| 0x3D | CDC | CD-Wechsler |
| 0x3D | HUD | Head-Up Display |
| 0x40 | CAS | Car Access System |
| 0x41 | DWA | Diebstahlwarnanlage |
| 0x43 | MPM | Mikro-Powermodul |
| 0x44 | SHD | Schiebehebedach |
| 0x45 | RLS | Regen-Fahrlicht-Sensor |
| 0x47 | ANT | Antennentuner |
| 0x4B | VM | Videomodul |
| 0x50 | DWA | Diebstahlwarnanlage |
| 0x51 | DWA | Diebstahlwarnanlage |
| 0x52 | DWA | Diebstahlwarnanlage |
| 0x53 | DWA | Diebstahlwarnanlage |
| 0x54 | RAD | Radio |
| 0x60 | KOMBI | Instrumentenkombination |
| 0x61 | FBI | Flexibles Bus-Interface |
| 0x62 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer |
| 0x63 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer |
| 0x64 | PDC | Park Distance Control |
| 0x65 | SZM | Schaltzentrum Mittelkonsole |
| 0x67 | CON | Controller |
| 0x6B | HKL | Heckklappenlift |
| 0x6D | SMFA | Sitzmodul Fahrer |
| 0x6E | SMBF | Sitzmodul Beifahrer |
| 0x70 | LSZ | Lichtschaltzentrum |
| 0x71 | AHM | Anhängermodul |
| 0x72 | KBM | Karosserie-Basismodul |
| 0x73 | CID | Central Information Display |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik |
| 0x7A | SH | Standheizgerät |
| 0x7D | FDM | Flexibles Diagnosemodul |
| 0x80 | CAS | Car Access System |
| 0x90 | CCC | Car Communication Computer |
| 0x91 | CCC | Car Communication Computer |
| 0x92 | CCC | Car Communication Computer |
| 0x93 | CCC | Car Communication Computer |
| 0x94 | CCC | Car Communication Computer |
| 0x95 | CCC | Car Communication Computer |
| 0x96 | CCC | Car Communication Computer |
| 0x97 | CCC | Car Communication Computer |
| 0x98 | CCC | Car Communication Computer |
| 0x99 | CCC | Car Communication Computer |
| 0x9A | CCC | Car Communication Computer |
| 0x9B | CCC | Car Communication Computer |
| 0x9C | CCC | Car Communication Computer |
| 0x9D | CCC | Car Communication Computer |
| 0x9E | CCC | Car Communication Computer |
| 0x9F | CCC | Car Communication Computer |
| 0xA0 | CCC | Car Communication Computer |
| 0xA1 | SBSL | Satellit B-Säule links |
| 0xA2 | SBSR | Satellit B-Säule rechts |
| 0xE9 | K_CAN | Bus-System für Karosserieumfänge |
| 0xEA | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich |
| 0xEB | byteflight | Bus-System für Airbag-Steuergeräte |
| 0xEC | MOST | Bus-System für Audio- und Kommunikationsumfänge |
| 0xFF | unbekannt | unbekanntes Steuergerät |

### SZL

| ORT | ORTTEXT |
| --- | --- |
| 0x94a8 | Watchdog-Reset uP |
| 0x94a9 | Clock-Monitor-Reset uP |
| 0x94aa | Illegal Opcode uP |
| 0x94ab | Falsche Fahrgestellnummer |
| 0x94ac | Systemzeitfehler |
| 0x94ad | AD-Wandler fehlerhaft |
| 0x94ae | Timeout ID 01H (E65,E66,E67,RR01:STVL; E60,E61,E63,E64:TE_FAT) |
| 0x94af | Timeout ID 02H |
| 0x94b0 | Timeout ID 03H (E65,E66,E67,RR01:STVR; E60,E61,E63,E64:TE_BFT) |
| 0x94b1 | Timeout ID 04H |
| 0x94b2 | Timeout ID 05H (SBSL) |
| 0x94b3 | Timeout ID 06H (SASL) |
| 0x94b4 | Timeout ID 07H (SBSR) |
| 0x94b5 | Timeout ID 08H (SASR) |
| 0x94b6 | Timeout ID 09H (SFZ) |
| 0x94b7 | Timeout ID 0AH (E65,E66,E67,RR01:SIM; E60,E61,E63,E64:SGM) |
| 0x94b8 | Timeout ID 0BH (E65,E66,E67,RR01:SASL; E60,E61,E63,E64:SBSL) |
| 0x94b9 | Timeout ID 0CH (E65,E66,E67,RR01:SASR; E60,E61,E63,E64:SBSR) |
| 0x94ba | Timeout ID 0DH (SFZ) |
| 0x94bb | Timeout ID 0EH (E60,E61,E63,E64:SFZ |
| 0x94bc | Timeout ID 0FH |
| 0x94bd | Timeout ID 20H (E65,E66,E67,RR01:SSFA; E60,E61,E63,E64:SBSL) |
| 0x94be | Timeout ID 21H (E65,E66,E67,RR01:SSBF; E60,E61,E63,E64:SBSR) |
| 0x94bf | Timeout ID 22H (SSH) |
| 0x94c0 | Timeout ID 71H (E65,E66,E67,RR01:SIM; E60,E61,E63,E64:SGM) |
| 0x94c1 | Codierdaten Checksummenfehler |
| 0x94c2 | Stack Overflow |
| 0x94c3 | PDC_3 : zu wenig Telegramme |
| 0x94c4 | PDC_3 : Datenfehler in Telegramm |
| 0x94c5 | PDC_3 : Uebertragungsfehler |
| 0x94c6 | unplausible Crash-Schwere |
| 0x94c7 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x94c8 | Kurzschluss ZK1 nach Masse |
| 0x94c9 | Kurzschluss ZK1 nach Plus |
| 0x94ca | Widerstand Zuendpille ZK1 zu klein |
| 0x94cb | Widerstand Zuendpille ZK1 zu gross |
| 0x94cc | Widerstand Zuendpille ZK1 nicht gemessen |
| 0x94cd | Unterbrechung ZK1 |
| 0x94ce | Spannung ZK1 n.i.O. |
| 0x94cf | Zuendkapazitaet ZK1 n.i.O. |
| 0x94d0 | Codierung/Konfiguration ZK1 unstimmig |
| 0x94d1 | Unterbrechung Entladekreis ZK1 |
| 0x94d2 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x94d3 | Kurzschluss ZK2 nach Masse |
| 0x94d4 | Kurzschluss ZK2 nach Plus |
| 0x94d5 | Widerstand Zuendpille ZK2 zu klein |
| 0x94d6 | Widerstand Zuendpille ZK2 zu gross |
| 0x94d7 | Widerstand Zuendpille ZK2 nicht gemessen |
| 0x94d8 | Unterbrechung ZK2 |
| 0x94d9 | Spannung ZK2 n.i.O. |
| 0x94da | Zuendkapazitaet ZK2 n.i.O. |
| 0x94db | Codierung/Konfiguration ZK2 unstimmig |
| 0x94dc | Unterbrechung Entladekreis ZK2 |
| 0x94dd | Fehler im Alarmpfad |
| 0x94de | E65,66,67,RR:GWS: Einfachfehler Signalpfad E60,61,63,64: U_ASE ausserhalb Bereich |
| 0x94df | GWS: Zweifachfehler Signalpfad |
| 0x94e0 | GWS: Parktaster Zweifachkontakt fehlerhaft |
| 0x94e1 | Klemme 30 fehlt am SZL |
| 0x94e2 | Klemme 15 unplausibel |
| 0x94e3 | Klemme U_Isis fehlt |
| 0x94e4 | LWS: Maximaler Lenkradeinschlagbereich ueberschritten |
| 0x94e5 | LWS: Schleifer 1 ausserhalb Bereich |
| 0x94e6 | LWS: Schleifer 2 ausserhalb Bereich |
| 0x94e7 | LWS: Relativer Schleiferwinkel fehlerhaft |
| 0x94e8 | keine oder fehlerhafte Einzelrad-Geschwindigkeiten |
| 0x94e9 | Lenkradwinkelgradient zu hoch |
| 0x94ea | Kommunikation Lenkrad <-> Lenksaeule fehlerhaft |
| 0x94eb | LRE-Version nicht kompatibel |
| 0x94ec | MFL links : Kurzschluss/Unterbrechung |
| 0x94ed | MFL rechts: Kurzschluss/Unterbrechung |
| 0x94ee | MFL links : Spannungswert nicht definiert |
| 0x94ef | MFL rechts: Spannungswert nicht definiert |
| 0x94f0 | LHZ Heizmatte Unterbrechung |
| 0x94f1 | LHZ Heizmatte Kurzschluss nach Klemme 31 |
| 0x94f2 | LHZ Heizmatte Kurzschluss nach Klemme 30 |
| 0x94f3 | LHZ Timeout-Regelung |
| 0x94f4 | LHZ Temperaturfuehler fehlerhaft |
| 0x94f5 | Lenksaeulenverstellschalter: Kurzschluss nach VSS |
| 0x94f6 | Lenksaeulenverstellschalter: Unterbrechung/Kurzschluss nach VDD |
| 0x94f7 | Lenksaeulenverstellschalter: Spannungswert nicht definiert |
| 0x94f8 | Fehler Horn Toener1 |
| 0x94f9 | Fehler Horn Toener2 |
| 0x94fa | Lenkstockschalterauswertung fehlerhaft |
| 0x94fb | LWS: Versorgungsspannung zu klein |
| 0x94fc | LRE: keine Ausloesebereitschaft |
| 0x94fd | LRE: Fehler im Alarmpfad |
| 0x94fe | Algorithmus-Parameter inkonsistent |
| 0x94ff | EAM-Parameter inkonsistent |
| 0x9500 | Zuendversuch erfolgt |
| 0x9501 | LWS nicht abgeglichen |
| 0x9502 | COP-Watchdog fehlerhaft |
| 0x9503 | LWS Resetzeitmessung fehlerhaft |
| 0x9504 | Fehler serielle Leitung Active Front Steering (AFS) |
| 0x9505 | Kommunikationsfehler CAN |
| 0x9506 | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9507 | Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9508 | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9509 | Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x950A | Kommunikation mit Zuend-IC gestoert |
| 0x950B | Energiesparmode aktiv |
| 0x9518 | Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x9519 | Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x951A | Spannungsueberwachung LRE unterer Grenzwert unterschritten |
| 0x951B | Spannungsueberwachung LRE oberer Grenzwert ueberschritten |
| 0x950c | Power-On-Reset uP |
| 0x950d | Diagnose S/E-Modul (Lichtleistung) |
| 0x950e | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x950f | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9510 | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9511 | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9512 | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9513 | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9514 | Synth. Lenkwinkel: Nullpunkt unplausibel |
| 0x9515 | Aufsetzen: maximale Geschwindigkeit ueberschritten |
| 0x9516 | EMV-Fehler im Zuend-Ic |
| 0x9517 | Uisis Reset |
| 0xFFFF | unbekannter Fehlerort |

### TMFA

| ORT | ORTTEXT |
| --- | --- |
| 0x9628 | Watchdog-Reset uP |
| 0x9629 | Clock-Monitor-Reset uP |
| 0x962a | Illegal Opcode uP |
| 0x962b | Falsche Fahrgestellnummer |
| 0x962c | Systemzeitfehler |
| 0x962d | Timeout ID 01H |
| 0x962e | Timeout ID 02H |
| 0x962f | Timeout ID 03H |
| 0x9630 | Timeout ID 04H |
| 0x9631 | Timeout ID 05H |
| 0x9632 | Timeout ID 06H |
| 0x9633 | Timeout ID 07H |
| 0x9634 | Timeout ID 08H |
| 0x9635 | Timeout ID 09H |
| 0x9636 | Timeout ID 0AH |
| 0x9637 | Timeout ID 0BH |
| 0x9638 | Timeout ID 0CH |
| 0x9639 | Timeout ID 0DH |
| 0x963a | Timeout ID 0EH |
| 0x963b | Timeout ID 0FH |
| 0x963c | Timeout ID 20H |
| 0x963d | Timeout ID 21H |
| 0x963e | Timeout ID 22H |
| 0x963f | Timeout ID 71H |
| 0x9640 | Codierdaten Checksummenfehler |
| 0x9642 | PDC_3 : zu wenig Telegramme |
| 0x9643 | PDC_3 : Datenfehler in Telegramm |
| 0x9644 | PDC_3 : Uebertragungsfehler |
| 0x9645 | unplausible Crash-Schwere |
| 0x9646 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9647 | Kurzschluss ZK1 nach Masse |
| 0x9648 | Kurzschluss ZK1 nach Plus |
| 0x9649 | Widerstand Zuendpille ZK1 zu klein |
| 0x964a | Widerstand Zuendpille ZK1 zu gross |
| 0x964b | Widerstand Zuendpille ZK1 nicht gemessen |
| 0x964c | Unterbrechung ZK1 |
| 0x964d | Spannung ZK1 n.i.O. |
| 0x964e | Zuendkondensator ZK1 n.i.O. |
| 0x964f | Codierung/Konfiguration ZK1 unstimmig |
| 0x9650 | Unterbrechung Entladekreis ZK1 |
| 0x9651 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9652 | Kurzschluss ZK2 nach Masse |
| 0x9653 | Kurzschluss ZK2 nach Plus |
| 0x9654 | Widerstand Zuendpille ZK2 zu klein |
| 0x9655 | Widerstand Zuendpille ZK2 zu gross |
| 0x9656 | Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9657 | Unterbrechung ZK2 |
| 0x9658 | Spannung ZK2 n.i.O. |
| 0x9659 | Zuendkondensator ZK2 n.i.O. |
| 0x965a | Codierung/Konfiguration ZK2 unstimmig |
| 0x965b | Unterbrechung Entladekreis ZK2 |
| 0x965c | Reserved 3 |
| 0x965d | Fehler im Alarmpfad |
| 0x965e | Algo-Parameter inkonsistent |
| 0x965f | EAM-Parameter inkonsistent |
| 0x9660 | Zuendversuch erfolgt |
| 0x9661 | Drucksensor Parityfehler |
| 0x9662 | Drucksensor SRDY-Taktfehler |
| 0x9663 | Drucksensor Datenbereich Einschwingfehler |
| 0x9664 | Drucksensor EEPROM inkonsistent |
| 0x9665 | Drucksensor Selbsttest Timeout |
| 0x9666 | Drucksensor Filterfehler |
| 0x9667 | COP-Watchdog fehlerhaft |
| 0x9672 | Drucksensor Datenbereich unplausibel |
| 0x9673 | Drucksensor Druckdelta unplausibel |
| 0x9674 | Drucksensor Fehler bei Test 1 |
| 0x9675 | Drucksensor Fehler bei Array-Test |
| 0x9676 | Drucksensor Fehler SIORX Overrun |
| 0x9677 | Energiesparmode aktiv |
| 0x9678 | Kommunikation mit Zuend-IC gestoert |
| 0x9679 | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x967a | Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x967b | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x967c | Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x967d | Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x967e | Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x967f | Klemme 30 fehlt |
| 0x9b48 | Ambiente Beleuchtung defekt |
| 0x9b49 | Spiegelposition Potentiometer 1 defekt |
| 0x9b4a | Spiegelposition Potentiometer 2 defekt |
| 0x9b4b | Spiegelposition Potentiometer Versorgung defekt |
| 0x9b4c | Vorfeldbeleuchtung defekt |
| 0x9b4d | Schalterblock Versorgung defekt |
| 0x9b4e | Fensterheber Hall Versorgung defekt |
| 0x9b4f | Schalterblock Kommunikation gestoert |
| 0x9b52 | Fensterheber Hall Sensor defekt |
| 0x9b53 | Fensterheber Relais defekt |
| 0x9b54 | Fensterheber EEPROM Checksummenfehler |
| 0x9b55 | Aussenspiegel Motor 1 defekt |
| 0x9b56 | Aussenspiegel Motor 2 defekt |
| 0x9b57 | Aussenspiegel Beiklapp-Motor defekt |
| 0x9b58 | Aussenspiegel Fehler Common-Leitung |
| 0x9b59 | Schalterblock Defekt |
| 0x9b5a | Software in Test-Modus |
| 0x9b5b | Zentralverriegelung Verriegeln-Motor Defekt |
| 0x9b5c | Zentralverriegelung Sichern-Motor Defekt |
| 0x9b5d | Zentralverriegelung Common-Leitung Defekt |
| 0x9b5e | Einstiegsbeleuchtung Defekt |
| 0x9641 | Reserved 2 |
| 0x9664 | Drucksensor EEPROM inkonsistent |
| 0x9668 | Power-On-Reset uP |
| 0x9669 | Diagnose S/E-Modul (Lichtleistung) |
| 0x966a | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x966b | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x966c | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x966d | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x966e | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x966f | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9670 | DS-Test: Rauschband verlassen |
| 0x9671 | EMV-Fehler im Zuend-Ic |
| 0x9b50 | Fensterheber Zeitmanagement |
| 0x9b51 | Fensterheber denormiert |
| 0x9b54 | Fensterheber EEPROM Checksummenfehler |
| 0x9b5f | Schalterblock Taste innerhalb 500 ms betaetigt |
| 0x9b60 | Fensterheber denormiert CC-Meldung aktiv |
| 0xFFFF | unbekannter Fehlerort |

### TMBF

| ORT | ORTTEXT |
| --- | --- |
| 0x96a8 | Watchdog-Reset uP |
| 0x96a9 | Clock-Monitor-Reset uP |
| 0x96aa | Illegal Opcode uP |
| 0x96ab | Falsche Fahrgestellnummer |
| 0x96ac | Systemzeitfehler |
| 0x96ad | Timeout ID 01H |
| 0x96ae | Timeout ID 02H |
| 0x96af | Timeout ID 03H |
| 0x96b0 | Timeout ID 04H |
| 0x96b1 | Timeout ID 05H |
| 0x96b2 | Timeout ID 06H |
| 0x96b3 | Timeout ID 07H |
| 0x96b4 | Timeout ID 08H |
| 0x96b5 | Timeout ID 09H |
| 0x96b6 | Timeout ID 0AH |
| 0x96b7 | Timeout ID 0BH |
| 0x96b8 | Timeout ID 0CH |
| 0x96b9 | Timeout ID 0DH |
| 0x96ba | Timeout ID 0EH |
| 0x96bb | Timeout ID 0FH |
| 0x96bc | Timeout ID 20H |
| 0x96bd | Timeout ID 21H |
| 0x96be | Timeout ID 22H |
| 0x96bf | Timeout ID 71H |
| 0x96c0 | Codierdaten Checksummenfehler |
| 0x96c2 | PDC_3 : zu wenig Telegramme |
| 0x96c3 | PDC_3 : Datenfehler in Telegramm |
| 0x96c4 | PDC_3 : Uebertragungsfehler |
| 0x96c5 | unplausible Crash-Schwere |
| 0x96c6 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x96c7 | Kurzschluss ZK1 nach Masse |
| 0x96c8 | Kurzschluss ZK1 nach Plus |
| 0x96c9 | Widerstand Zuendpille ZK1 zu klein |
| 0x96ca | Widerstand Zuendpille ZK1 zu gross |
| 0x96cb | Widerstand Zuendpille ZK1 nicht gemessen |
| 0x96cc | Unterbrechung ZK1 |
| 0x96cd | Spannung ZK1 n.i.O. |
| 0x96ce | Zuendkondensator ZK1 n.i.O. |
| 0x96cf | Codierung/Konfiguration ZK1 unstimmig |
| 0x96d0 | Unterbrechung Entladekreis ZK1 |
| 0x96d1 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x96d2 | Kurzschluss ZK2 nach Masse |
| 0x96d3 | Kurzschluss ZK2 nach Plus |
| 0x96d4 | Widerstand Zuendpille ZK2 zu klein |
| 0x96d5 | Widerstand Zuendpille ZK2 zu gross |
| 0x96d6 | Widerstand Zuendpille ZK2 nicht gemessen |
| 0x96d7 | Unterbrechung ZK2 |
| 0x96d8 | Spannung ZK2 n.i.O. |
| 0x96d9 | Zuendkondensator ZK2 n.i.O. |
| 0x96da | Codierung/Konfiguration ZK2 unstimmig |
| 0x96db | Unterbrechung Entladekreis ZK2 |
| 0x96dc | Reserved 3 |
| 0x96dd | Fehler im Alarmpfad |
| 0x96de | Algo-Parameter inkonsistent |
| 0x96df | EAM-Parameter inkonsistent |
| 0x96e0 | Zuendversuch erfolgt |
| 0x96e1 | Drucksensor Parityfehler |
| 0x96e2 | Drucksensor SRDY-Taktfehler |
| 0x96e3 | Drucksensor Datenbereich Einschwingfehler |
| 0x96e4 | Drucksensor EEPROM inkonsistent |
| 0x96e5 | Drucksensor Selbsttest Timeout |
| 0x96e6 | Drucksensor Filterfehler |
| 0x96e7 | COP-Watchdog fehlerhaft |
| 0x96f2 | Drucksensor Datenbereich unplausibel |
| 0x96f3 | Drucksensor Druckdelta unplausibel |
| 0x96f4 | Drucksensor Fehler bei Test 1 |
| 0x96f5 | Drucksensor Fehler bei Array-Test |
| 0x96f6 | Drucksensor Fehler SIORX Overrun |
| 0x96f7 | Energiesparmode aktiv |
| 0x96f8 | Kommunikation mit Zuend-IC gestoert |
| 0x96f9 | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x96fa | Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x96fb | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x96fc | Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x96fd | Spannungsueberwachung ASE unterer Grenzwert unterschritten |
| 0x96fe | Spannungsueberwachung ASE oberer Grenzwert ueberschritten |
| 0x96ff | Klemme 30 fehlt |
| 0x9b88 | Ambiente Beleuchtung defekt |
| 0x9b89 | Spiegelposition Potentiometer 1 defekt |
| 0x9b8a | Spiegelposition Potentiometer 2 defekt |
| 0x9b8b | Spiegelposition Potentiometer Versorgung defekt |
| 0x9b8c | Vorfeldbeleuchtung defekt |
| 0x9b8e | Fensterheber Hall Versorgung defekt |
| 0x9b8f | Schalterblock Kommunikation gestoert |
| 0x9b92 | Fensterheber Hall Sensor defekt |
| 0x9b93 | Fensterheber Relais defekt |
| 0x9b94 | Fensterheber EEPROM Checksummenfehler |
| 0x9b95 | Aussenspiegel Motor 1 defekt |
| 0x9b96 | Aussenspiegel Motor 2 defekt |
| 0x9b97 | Aussenspiegel Beiklapp-Motor defekt |
| 0x9b98 | Aussenspiegel Fehler Common-Leitung |
| 0x9b9a | Software in Test-Modus |
| 0x9b9b | Zentralverriegelung Verriegeln-Motor Defekt |
| 0x9b9c | Zentralverriegelung Sichern-Motor Defekt |
| 0x9b9d | Zentralverriegelung Common-Leitung Defekt |
| 0x9b9e | Einstiegsbeleuchtung Defekt |
| 0x96c1 | Reserved 2 |
| 0x96e4 | Drucksensor EEPROM inkonsistent |
| 0x96e8 | Power-On-Reset uP |
| 0x96e9 | Diagnose S/E-Modul (Lichtleistung) |
| 0x96ea | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x96eb | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x96ec | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x96ed | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x96ee | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x96ef | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x96f0 | DS-Test: Rauschband verlassen |
| 0x96f1 | EMV-Fehler im Zuend-Ic |
| 0x9b8d | Schalterblock Versorgung defekt |
| 0x9b90 | Fensterheber Zeitmanagement |
| 0x9b91 | Fensterheber denormiert |
| 0x9b94 | Fensterheber EEPROM Checksummenfehler |
| 0x9b99 | Schalterblock Defekt |
| 0x9b9f | Schalterblock Taste innerhalb 500 ms betaetigt |
| 0x9ba0 | Fensterheber denormiert CC-Meldung aktiv |
| 0xFFFF | unbekannter Fehlerort |

### SBSL

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

### SBSR

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

### SFZ

| ORT | ORTTEXT |
| --- | --- |
| 0x9aa8 | Watchdog-Reset uP |
| 0x9aa9 | Clock-Monitor-Reset uP |
| 0x9aaa | Illegal Opcode uP |
| 0x9aab | Falsche Fahrgestellnummer |
| 0x9aac | Systemzeitfehler |
| 0x9aad | Timeout ID 01H (TE_FAT) |
| 0x9aaf | Timeout ID 03H (TE_BFT) |
| 0x9ab1 | Timeout ID 05H (SBSL) |
| 0x9ab3 | Timeout ID 07H (SBSR) |
| 0x9ab5 | Timeout ID 09H (SFZ) |
| 0x9ab6 | Timeout ID 0AH (SGM_SIM) |
| 0x9ab7 | Timeout ID 0BH (SBSL) |
| 0x9ab8 | Timeout ID 0CH (SBSR) |
| 0x9ab9 | Timeout ID 0DH (SFZ) |
| 0x9aba | Timeout ID 0EH (SFZ) |
| 0x9abc | Timeout ID 20H (SBSL) |
| 0x9abd | Timeout ID 21H (SBSR) |
| 0x9abf | Timeout ID 71H (SGM_SIM) |
| 0x9ac0 | Codierdaten Checksummenfehler |
| 0x9ac2 | PDC_3 : zu wenig Telegramme |
| 0x9ac3 | PDC_3 : Datenfehler in Telegramm |
| 0x9ac4 | PDC_3 : Uebertragungsfehler |
| 0x9ac5 | unplausible Crash-Schwere |
| 0x9ac6 | Fehler Beschleunigungssensor:Offset zu gross (x-Richtung) |
| 0x9ac7 | Fehler Beschleunigungssensor:Selbsttestwert zu gross (x-Richtung |
| 0x9ac8 | Fehler Beschleunigungssensor:Selbsttestwert zu klein (x-Richtung |
| 0x9ac9 | Fehler Beschleunigungssensor:Offset zu gross (y-Richtung) |
| 0x9aca | Fehler Beschleunigungssensor:Selbsttestwert zu gross (y-Richtung |
| 0x9acb | Fehler Beschleunigungssensor:Selbsttestwert zu klein (y-Richtung |
| 0x9acc | Algorithmus-Parameter inkonsistent |
| 0x9acd | COP-Watchdog fehlerhaft |
| 0x9af0 | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK1 |
| 0x9af1 | Kurzschluss ZK1 nach Masse |
| 0x9af2 | Kurzschluss ZK1 nach Plus |
| 0x9af3 | Widerstand Zuendpille ZK1 zu klein |
| 0x9af4 | Widerstand Zuendpille ZK1 zu gross |
| 0x9af5 | Widerstand Zuendpille ZK1 nicht gemessen |
| 0x9af6 | Unterbrechung ZK1 |
| 0x9af7 | Spannung ZK1 n.i.O. |
| 0x9af8 | Zuendkondensator ZK1 n.i.O. |
| 0x9af9 | Codierung/Konfiguration ZK1 unstimmig |
| 0x9afa | Unterbrechung Entladekreis ZK1 |
| 0x9afb | Kurzschluss oder Unterbrechung H/L-Side-Schalter ZK2 |
| 0x9afc | Kurzschluss ZK2 nach Masse |
| 0x9afd | Kurzschluss ZK2 nach Plus |
| 0x9afe | Widerstand Zuendpille ZK2 zu klein |
| 0x9aff | Widerstand Zuendpille ZK2 zu gross |
| 0x9b00 | Widerstand Zuendpille ZK2 nicht gemessen |
| 0x9b01 | Unterbrechung ZK2 |
| 0x9b02 | Spannung ZK2 n.i.O. |
| 0x9b03 | Zuendkondensator ZK2 n.i.O. |
| 0x9b04 | Codierung/Konfiguration ZK2 unstimmig |
| 0x9b05 | Unterbrechung Entladekreis ZK2 |
| 0x9b06 | Zuendversuch erfolgt |
| 0x9b07 | Fehler im Alarmpfad |
| 0x9b09 | U-ASE-Überwachung unterer Grenzwert unterschritten |
| 0x9b10 | U-ASE-Überwachung oberer Grenzwert überschritten |
| 0x9b11 | Rollover-Modul Schnittstellen-Fehler unzulässiger Fehlercode |
| 0x9b12 | Rollover-Modul fehlerhafte Kalibrierdaten |
| 0x9b13 | Rollover-Modul Hilfsprozessor nicht verfuegbar |
| 0x9b14 | Rollover-Modul Schnittstellen-Fehler unzulässiger Aufruf |
| 0x9b15 | Rollover-Modul Schnittstellen-Fehler unzulässige Reihenfolge der Aufrufe |
| 0x9b16 | Rollover-Modul Schnittstellen-Fehler Reentrance-Problem |
| 0x9b17 | Rollover-Modul Arming-Pfad Fehler aus Low-g-Sensor Test |
| 0x9b18 | Rollover-Modul Arming-Pfad KS nach Masse |
| 0x9b19 | Rollover-Modul Arming-Pfad KS nach Plus |
| 0x9b1a | Rollover-Modul Winkelbeschl.-Sensor Eigendiagnose Schaltkreis-Fehler |
| 0x9b1b | Rollover-Modul Winkelbeschl.-Sensor Fehler bei Anregung der Eigendiagnose |
| 0x9b1c | Rollover-Modul Winkelbeschl.-Sensor Fehler bei Beenden der Eigendiagnose |
| 0x9b1d | Rollover-Modul Winkelbeschl.-Sensor Null-Lage bei Initialisierung fehlerhaft |
| 0x9b1e | Rollover-Modul Winkelbeschl.-Sensor Fehler der Eigendiagnose |
| 0x9b1f | Rollover-Modul Winkelbeschl.-Sensor KS nach Plus |
| 0x9b20 | Rollover-Modul Winkelbeschl.-Sensor KS nach Masse |
| 0x9b21 | Rollover-Modul Vert. Beschl.-Sensor Low-g Eigendiagnose Fehler bei Anregung der Auslenkung |
| 0x9b22 | Rollover-Modul Vert. Beschl.-Sensor Low-g Null-Lage fehlerhaft |
| 0x9b23 | Rollover-Modul Vert. Beschl.-Sensor Low-g KS nach Plus |
| 0x9b24 | Rollover-Modul Vert. Beschl.-Sensor Low-g KS nach Masse |
| 0x9b25 | Rollover-Modul Schnittstellen-Fehler unzulässige Daten aus Rollover-Modul |
| 0x9b26 | Rollover-Modul Codierung für Aktivierung des Rollover fehlerhaft |
| 0x9b27 | Rollover-Modul Arming-Pfad Fehler aus High-G-Sensor Test |
| 0x9b29 | FeTraWe aktiv |
| 0x9b2a | Kommunikation mit Zuend-IC gestoert |
| 0x9b2b | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK1 |
| 0x9b2c | Kurzschluss oder Unterbrechung High-Side-Schalter ZK1 |
| 0x9b2d | Kurzschluss oder Unterbrechung Low-Side-Schalter ZK2 |
| 0x9b2e | Kurzschluss oder Unterbrechung High-Side-Schalter ZK2 |
| 0x9b32 | Rollover-Modul Arming-Pfad Fehler Verdacht auf KS nach Plus |
| 0x9b33 | EAM-Parameter inkonsistent |
| 0x9ac1 | Reserved 2 |
| 0x9ae8 | Power-On-Reset uP |
| 0x9ae9 | Diagnose S/E-Modul (Lichtleistung) |
| 0x9aea | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x9aeb | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9aec | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9aed | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9aee | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9aef | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9b08 | EMV-Fehler im Zuend-Ic |
| 0x9b28 | Rollover-Modul High-G Arming-Pfad Test nicht durchgeführt |
| 0x9b29 | FeTraWe aktiv |
| 0x9b2f | Rollover-Modul Auslöse-Entscheidung aber kein Arming |
| 0x9b30 | Rollover-Modul Schnittstellen-Fehler Messwerterfassung |
| 0x9b31 | U-ASE-Überwachung inaktiv codiert |
| 0x9b34 | Rollover-Modul EDR Aufzeichnung unvollständig |
| 0x9b35 | Rollover-Modul Reset aufgetreten |
| 0x9b36 | Rollover-Modul interner Fehler 21 |
| 0x9b37 | Rollover-Modul interner Fehler 22 |
| 0x9b38 | Rollover-Modul interner Fehler 23 |
| 0x9b39 | Rollover-Modul interner Fehler 24 |
| 0x9b3a | Rollover-Modul interner Fehler 25 |
| 0x9b3b | Rollover-Modul interner Fehler 26 |
| 0x9b3c | Rollover-Modul interner Fehler 27 |
| 0x9b3d | Rollover-Modul interner Fehler 28 |
| 0x9b3e | Rollover-Modul interner Fehler 29 |
| 0x9b3f | Rollover-Modul interner Fehler 30 |
| 0x9b40 | Rollover-Modul interner Fehler 31 |
| 0xFFFF | unbekannter Fehlerort |

### AFS

| ORT | ORTTEXT |
| --- | --- |
| 0x612C | Hardwarefehler Steuergeraet |
| 0x612E | Fahrgestellnummernvergleich |
| 0x612F | Codierdatenfehler |
| 0x6130 | Boot- oder Flashfehler MPC |
| 0x6131 | Flashvorgang oder -Fehler NEC |
| 0x6132 | Serielle Schnittstelle zum SZL |
| 0x6133 | Motorspannung |
| 0x6134 | Motorstrom |
| 0x6136 | Sensorversorgung Motorlage und -position |
| 0x6137 | Motorlagesensor |
| 0x6138 | Motor- Uebertemperatur |
| 0x6139 | Fzg Ref. Geschw. oder Fahrtrichtung unsicher oder nicht verfuegbar |
| 0x613A | Versorgungsspannung Kl. 30 |
| 0x613B | Fahrdynamiksensoren |
| 0x613C | Winkelsummenbeziehung fehlerhaft |
| 0x613D | elektr. Sperrenfehler |
| 0x613E | mechanischer Sperrenfehler |
| 0x613F | Lenkwinkelplausibilitaet |
| 0x6140 | Lenkwinkelplausibilisierung CAN - Seriell |
| 0x6141 | Motordynamikueberwachung |
| 0x6142 | ECO-Ventil im SGM |
| 0x6143 | Servoventil im SGM |
| 0x6144 | Unvollstaendiger Powerdown |
| 0x6145 | keine Ueberwachung der Winkelsummenbeziehung |
| 0x6146 | Motortemperatursensor |
| 0x6147 | Lenkwinkelsensorversorgung |
| 0x6148 | Voterfehler diversitaeres Rechnen |
| 0x6149 | kombinierte Lage- Drehzahlueberwachung |
| 0x614A | Motorlagewinkel ungueltig |
| 0x614B | ERCOSEK Fehler |
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
| 0xCE92 | nicht benutzt |
| 0xCE93 | nicht benutzt |
| 0xCE94 | Botschaft (Gierrate Antwort 1, ID=0CB) von Y_SENS_1 F-CAN |
| 0xCE95 | Botschaft (Gierrate Antwort 2, ID=0C7) von Y_SENS_2 F-CAN |
| 0xCE96 | Botschaft (Radgeschwindigkeiten, ID=0CE) von DSC F-CAN |
| 0xCE97 | Botschaft (Radlenkwinkel, ID=0C3) von LWS_Rad F-CAN |
| 0xCE98 | Botschaft (Regeleingriffe DSC, ID=11E) von DSC F-CAN |
| 0xCE99 | Botschaft (Lenkradwinkel oben, ID=0C8) von SZL F-CAN |
| 0xCE9A | Botschaft (Radtoleranzabgleich, ID=374) von DSC PT-CAN |
| 0xCE9B | Botschaft (Fahrzeugzustand, ID=1A0) von DSC PT-CAN |
| 0xCE9C | Botschaft (Status DSC, ID=19E) von DSC PT-CAN |
| 0xCE9D | Botschaft (Motormoment 1, ID=0A8) von DME PT-CAN |
| 0xCE9E | Botschaft (Motormoment 3, ID=0AA) von DME PT-CAN |
| 0xCE9F | Botschaft (Motordaten, ID=1D0) von DME PT-CAN |
| 0xCEA0 | Botschaft (Status Lenkunterstuetzung, ID=0E0) von SGM PT-CAN |
| 0xCEA1 | Botschaft (Klemmenstatus, ID=130) von CAS PT-CAN |
| 0xCEA2 | Botschaft (Fahrgestellnummer, ID=380) von CAS PT-CAN |
| 0xCEA3 | Botschaft (Kilometerstand, ID=330) von KI PT-CAN |
| 0x1001 | Fehler a |
| 0x1002 | Fehler b |
| 0x1003 | Fehler c |
| 0x1004 | Fehler d |
| 0x1005 | Fehler e |
| 0x1006 | Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### EKP

| ORT | ORTTEXT |
| --- | --- |
| 0x6291 | Motorspannung zu hoch |
| 0x6292 | Motorspannung zu niedrig |
| 0x6293 | Motorstrom zu hoch |
| 0x6294 | Motorstrom zu niedrig |
| 0x6295 | Motorstrom fehlt |
| 0x6296 | Drehzahl fehlt |
| 0x6297 | Drehzahl zu hoch |
| 0x6298 | Drehzahl zu niedrig |
| 0x6299 | Übertemperatur Highside-Treiber |
| 0x629A | Übertemperatur Lowside-Treiber |
| 0xCED4 | Timeout CAN-Message 0xAA (TORQUE_3) |
| 0x629C | CRC-Fehler im EEPROM |
| 0xFFFF | unbekannter Fehlerort |
| 0x629D | Default Kodierdaten |
| 0xCEC7 | CAN Bus-Off |
| 0x629E | CRASH/+Batterie-Abschaltung |
| 0x62A1 | WakeUp zu hoch |
| 0x62A2 | WakeUp fehlt |
| 0x62A3 | KL30 fehlt |
| 0x62A4 | KL30 zu hoch |
| 0x62A5 | Drehz. zu niedrig bei KL30-Untersp. |
| 0x62A6 | FLASH-Anforderung (DNMT) bei v oder n ungleich Null |
| 0xFFFF | unbekannter Fehlerort |

### VTG

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### VTC

| ORT | ORTTEXT |
| --- | --- |
| 0x6001 | Fehler A |
| 0x6002 | Fehler B |
| 0x6003 | Fehler C |
| 0x6004 | Fehler D |
| 0x6005 | Fehler E |
| 0x6006 | Fehler F |
| 0x1001 | Fehler a |
| 0x1002 | Fehler b |
| 0x1003 | Fehler c |
| 0x1004 | Fehler d |
| 0x1005 | Fehler e |
| 0x1006 | Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### VTC2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### HDEV

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### RDC

| ORT | ORTTEXT |
| --- | --- |
| 0x604D | Fehler Steuergerät |
| 0x604E | Fehler RDC-System |
| 0x604F | Fehler Übertragungskanal VL |
| 0x6050 | Fehler Übertragungskanal VR |
| 0x6051 | Fehler Übertragungskanal HL |
| 0x6052 | Fehler Übertragungskanal HR |
| 0x6054 | Fehler Radsensor VL |
| 0x6055 | Fehler Radsensor VR |
| 0x6056 | Fehler Radsensor HL |
| 0x6057 | Fehler Radsensor HR |
| 0x6059 | Fehler Radsensor undefiniert |
| 0x605A | Energiesparmode aktiv |
| 0xD104 | Fehler CAN-Low |
| 0xD107 | Fehler Controller |
| 0xD13E | Fehler Telegramm Timeout beim Empfang |
| 0x6064 | Systeminfo |
| 0x6065 | Fehler Rad VL |
| 0x6066 | Fehler Rad VR |
| 0x6067 | Fehler Rad HL |
| 0x6068 | Fehler Rad HR |
| 0x6069 | Fehler Rad RR |
| 0x606A | Fehler Rad undefiniert |
| 0xFFFF | unbekannter Fehlerort |

### ACC

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | Steuergeraetefehler |
| 0x5D0E | Betriebsspannung |
| 0x5D0F | Fehler Linsenheizung |
| 0x5D10 | Plausibilitaet Applikationsparameter |
| 0x5D14 | Sensor dejustiert |
| 0x5D25 | Temperaturabschaltung SCU |
| 0xD147 | Fehler CAN-Controller |
| 0xD17C | Fehlerwert erhalten |
| 0xD17D | unplausibles Signal empfangen |
| 0xD17E | CAN-Timeout beim Empfang |
| 0xD181 | unplausibles Signal gesendet |
| 0xD182 | CAN-Timeout beim Senden |
| 0xCD35 | ACC Sicherheitsabschaltung Bremsueberhitzung |
| 0xCD36 | Fehler Umsetzung ACC-Sollwert durch Motor und Getriebe |
| 0xCD37 | Fehler Umsetzung Beschleunigungssollwert im Bremsfall |
| 0xCD38 | ACC von Partnersteuergeraet nicht erkannt |
| 0xCD39 | ACC temporär nicht verfügbar wegen DSC Initialisierung oder Unterspannung |
| 0xFFFF | unbekannter Fehlerort |

### AHL

| ORT | ORTTEXT |
| --- | --- |
| 0xA588 | interner Fehler ALC-SG |
| 0xA589 | Kommunikation mit StepperMoterBox 1 gestoert |
| 0xA58A | Kommunikation mit StepperMoterBox 2 gestoert |
| 0xA58B | Sensor Hoehenstand vorne defekt |
| 0xA58C | Sensor Hoehenstand hinten defekt |
| 0xA58D | Bremslichtschalter defekt |
| 0xA58E | Energiesparmode aktiv |
| 0xA58F | Fehler WAKE-Leitung |
| 0xA590 | SMC links defekt |
| 0xA591 | SMC rechts defekt |
| 0xA592 | neuer Fehler 1 |
| 0xA593 | neuer Fehler 2 |
| 0xA594 | neuer Fehler 3 |
| 0xD187 | Controller, Bus Off |
| 0x9308 | EEPROM SMC links defekt |
| 0x9309 | Motor Kurvenlicht SMC links defekt |
| 0x930A | Motor LWR SMC links defekt |
| 0x930B | Treiber Kurvenlicht SMC links defekt |
| 0x930C | Spannungsversorgung Sensor SMC links defekt |
| 0x930D | Signal Sensor SMC links defekt |
| 0x930E | Flanke Sensor SMC links defekt |
| 0x930F | LIN SMC links defekt |
| 0x9310 | Schrittverlust Grenze 1 SMC links |
| 0x9311 | Schrittverlust Grenze 2 SMC links |
| 0x9312 | Schrittverlust Grenze 3 SMC links |
| 0x9313 | Schrittverlust Grenze 4 SMC links |
| 0x9314 | Schrittverlust Grenze 5 SMC links |
| 0x9315 | Schrittverlust Grenze 6 SMC links |
| 0x9316 | Spike auf Sensor SMS links |
| 0x9317 | unbekannter Fehler 1 SMC links |
| 0x9318 | unbekannter Fehler 2 SMC links |
| 0x9319 | unbekannter Fehler 3 SMC links |
| 0x931A | unbekannter Fehler 4 SMC links |
| 0x931B | unbekannter Fehler 5 SMC links |
| 0x931C | EEPROM SMC rechts defekt |
| 0x931D | Motor Kurvenlicht SMC rechts defekt |
| 0x931E | Motor LWR SMC rechts defekt |
| 0x931F | Treiber Kurvenlicht SMC rechts defekt |
| 0x9320 | Spannungsversorgung Sensor SMC rechts defekt |
| 0x9321 | Signal Sensor SMC rechts defekt |
| 0x9322 | Flanke Sensor SMC rechts defekt |
| 0x9323 | LIN SMC rechts defekt |
| 0x9324 | Schrittverlust Grenze 1 SMC rechts |
| 0x9325 | Schrittverlust Grenze 2 SMC rechts |
| 0x9326 | Schrittverlust Grenze 3 SMC rechts |
| 0x9327 | Schrittverlust Grenze 4 SMC rechts |
| 0x9328 | Schrittverlust Grenze 5 SMC rechts |
| 0x9329 | Schrittverlust Grenze 6 SMC rechts |
| 0x932A | Spike auf Sensor SMS rechts |
| 0x932B | unbekannter Fehler 1 SMC rechts |
| 0x932C | unbekannter Fehler 2 SMC rechts |
| 0x932D | unbekannter Fehler 3 SMC rechts |
| 0x932E | unbekannter Fehler 4 SMC rechts |
| 0x932F | unbekannter Fehler 5 SMC rechts |
| 0x9330 | Telegramm Geschwindigkeit ungueltig |
| 0x9331 | Telegramm Gierrate Timeout oder ungueltig |
| 0x9332 | Telegramm Lenkwinkel Timeout oder ungueltig |
| 0x9333 | Telegramm Lampenzustand Timeout oder ungueltig |
| 0x9334 | Telegramm Klemmenstatus Timeout oder ungueltig |
| 0x9335 | Telegramm Steuerung ALC Timeout oder ungueltig |
| 0xFFFF | unbekannter Fehlerort |

### ARS

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
| 0x5D57 | Lernen Querbeschleunigungssensor |
| 0x5D5A | Konsistenz LWL |
| 0x5D5B | Konsistenz Druck VA |
| 0x5D5C | Konsistenz Druck HA |
| 0x5D5E | Konsistenz Strommessung Propventile |
| 0x5D5F | Konsistenz Strommessung Schaltventile |
| 0x5D60 | Oelstandsensor |
| 0x5D61 | KL30 ARS-SG |
| 0x5D62 | ECU intern |
| 0x5D64 | Codierdatenfehler |
| 0x5D65 | Status Richtungsventil |
| 0x5D67 | Konsistenz Fahrgestellnummer |
| 0x5D68 | Kalibrierung Sensoren |
| 0x5D69 | Fehlerspeicher defekt |
| 0x5D6C | Inbetriebnahme: RV bestromt |
| 0x5D6D | Inbetriebnahme: RV unbestromt |
| 0x5D6E | Inbetriebnahme: FS und VA-Ventil unbestr. zu od. Sensor p_VA defekt |
| 0x5D6F | Inbetriebnahme: Sensor p_HA defekt |
| 0x5D70 | Inbetriebnahme: Tankruecklauf zu oder (FS und HA-Ventil unbestromt zu) |
| 0x5D71 | Inbetriebnahme: FS unbestr. zu u. (Ventilblock dicht od. Tankrueckl. zu od. HA unbestr. zu) |
| 0x5D72 | Inbetriebnahme: FS unbestr. zu |
| 0x5D73 | Inbetriebnahme: FS u. VA-Ventil unbestr. zu |
| 0x5D74 | Inbetriebnahme: Schwenkmotor VA fest |
| 0x5D75 | Inbetriebnahme: FS-Ventil od. FS-Drossel oder VA-Ventil haengt offen od. beide DS od. Rueckschl.-ventil links defekt |
| 0x5D76 | Inbetriebnahme: Drucksensoren vertauscht |
| 0x5D77 | Inbetriebnahme: Druckaufbau_VA zu langsam oder Kennlinie VA pVA(l) (VBL Problem) od. Sensor pVA defekt |
| 0x5D78 | Inbetriebnahme: VA-Ventil haengt geschlossen |
| 0x5D79 | Inbetriebnahme: Summen Leck VA oder Sensor pVA defekt |
| 0x5D7A | Inbetriebnahme: Kennline VA oder Sensor pVA defekt |
| 0x5D7D | Inbetriebnahme: Schwenkmotor HA fest |
| 0x5D7E | Inbetriebnahme: Sensor pVA oder Sensor pHA defekt |
| 0x5D7F | Inbetriebnahme: HA_Ventil haengt geschlossen |
| 0x5D80 | Inbetriebnahme: Druckaufbau_HA zu langsam oder Kennlinie HA pHA(l) (VBL Problem) |
| 0x5D81 | Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil links defekt |
| 0x5D82 | Inbetriebnahme: HA-Ventil haengt offen od. Rueckschl.-ventil rechts defekt |
| 0x5D83 | Inbetriebnahme: Dynamikfehler HA/VA |
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
| 0x6278 | Predrive Check: Kombi Meldung 1 |
| 0x6279 | Predrive Check: Kombi Meldung 2 |
| 0x627A | Predrive Check: Motor in Fahrt gestoppt |
| 0x627B | Predrive Check: Zuschalten nach Reset waehrend der Fahrt |
| 0x6288 | Inbetriebnahme: aQuer Analogsensor defekt |
| 0x6289 | Inbetriebnahme: aQuer Analogsensor Vorzeichenfehler |
| 0x628A | Inbetriebnahme: LL Fehler oder Predrive Fehler verhindert Inbetriebnahme starten |
| 0x628B | Inbetriebnahme: Inbetriebnahme abgebrochen |
| 0xD1C7 | CAN Bus Off |
| 0xD1DD | CAN Beschleunigung Fahrzeug Quer DSC |
| 0xD1DE | CAN Winkelgeschwindigkeit Gier DSC |
| 0xD1DF | CAN Geschwindigkeit Fahrzeug |
| 0xD1E0 | CAN Aussentemperatur |
| 0xD1E1 | CAN Temperatur Motor Kuehlwasser |
| 0xD1E2 | CAN Status Klemme 15 |
| 0xD1E3 | CAN Status Klemme 50 Zuendschlossstellung Anlasser |
| 0xD1E4 | CAN Lenkradwinkel |
| 0xD1E5 | CAN Drehzahl Motor |
| 0xD1E8 | CAN Gradient Lenkradwinkel |
| 0xD1EB | CAN Kilometerstand |
| 0xD1ED | CAN Status DSC |
| 0xD1F1 | CAN Botschaft Geschwindigkeit |
| 0xD1F2 | CAN Botschaft Klemmenstatus |
| 0xFFFF | unbekannter Fehlerort |

### CVM

| ORT | ORTTEXT |
| --- | --- |
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
| 0xA693 | Versorgung Hallsensoren Stecker B |
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
| 0xFFFF | unbekannter Fehlerort |

### PGS

| ORT | ORTTEXT |
| --- | --- |
| 0xD2C4 | K_CAN_LOW |
| 0xD2C5 | K_CAN_HIGH |
| 0xD2C6 | GroundShift |
| 0xD2C7 | CAN_Controller |
| 0xD2FC | Fehlerwert_erhalten |
| 0xD2FD | Unplausibles_Signal |
| 0xD2FE | Telegramm_Timeout_beim_Emfang |
| 0xD2FF | Fehler_beim_Emfang_NM_Botschaft |
| 0xD300 | Fehlerwert_gesendet |
| 0xD301 | Unplausibles_Signal1 |
| 0xD302 | Telegramm_Timeout_beim_Senden |
| 0xD303 | Fehler_beim_Senden_NM_Botschaft |
| 0xA068 | PGS_Innenraumantennen_vorne_defekt |
| 0xA069 | Innenraumantennen_hinten_defekt |
| 0xA06A | Kofferraumantenne_defekt |
| 0xA06B | Stossfaengerantennen_defekt |
| 0xA072 | PGS_RelaisTrei_defekt |
| 0xA073 | PGS_PGS_WUP_geaendert |
| 0xA074 | PGS_Reserve_Fehler_20 |
| 0xA075 | PGS_Reserve_Fehler_19 |
| 0xA076 | PGS_Reserve_Fehler_18 |
| 0xA077 | PGS_Reserve_Fehler_17 |
| 0xA078 | PGS_Reserve_Fehler_16 |
| 0xA079 | PGS_Reserve_Fehler_15 |
| 0xA07A | PGS_Reserve_Fehler_14 |
| 0xA07B | PGS_Reserve_Fehler_13 |
| 0xA07C | PGS_Reserve_Fehler_12 |
| 0xA07D | PGS_Reserve_Fehler_11 |
| 0xA07E | PGS_Reserve_Fehler_10 |
| 0xA07F | PGS_Reserve_Fehler_09 |
| 0xA080 | PGS_Reserve_Fehler_08 |
| 0xA081 | PGS_Reserve_Fehler_07 |
| 0xA082 | PGS_Reserve_Fehler_06 |
| 0xA083 | PGS_Reserve_Fehler_05 |
| 0xA084 | PGS_Reserve_Fehler_04 |
| 0xA085 | PGS_Reserve_Fehler_03 |
| 0xA086 | PGS_Reserve_Fehler_02 |
| 0xA087 | PGS_Reserve_Fehler_01 |
| 0xA088 | TAGE1_Watchdog_Reset |
| 0xA089 | TAGE1_Watchdog_Timer |
| 0xA08A | TAGE1_Abic_reagiert_nicht |
| 0xA08B | TAGE1_Ubat_ausserhalb_ULF |
| 0xA08C | TAGE1_Antennen defekt |
| 0xA08D | TAGE1_Timeout_Kap_Sensor |
| 0xA08E | TAGE1_Timeout_Dru_Sensor |
| 0xA08F | TAGE1_Timeout_Zug_Sensor |
| 0xA090 | TAGE1_Spielschutz_aktiv |
| 0xA091 | TAGE1_Checksum_EEPROM |
| 0xA092 | TAGE1_Checksum_ROM |
| 0xA093 | TAGE1_Interrupt_unused |
| 0xA094 | TAGE1_ErrorCode_unknown |
| 0xA095 | TAGE1_Coding_TimeoutKBus |
| 0xA096 | TAGE1_WUP_falsche_Antwort |
| 0xA097 | TAGE1_WUP_keine_Antwort |
| 0xA098 | TAGE2_Watchdog_Reset |
| 0xA099 | TAGE2_Watchdog_Timer |
| 0xA09A | TAGE2_Abic_reagiert_nicht |
| 0xA09B | TAGE2_Ubat_ausserhalb_ULF |
| 0xA09C | TAGE2_Antennen defekt |
| 0xA09D | TAGE2_Timeout_Kap_Sensor |
| 0xA09E | TAGE2_Timeout_Dru_Sensor |
| 0xA09F | TAGE2_Timeout_Zug_Sensor |
| 0xA0A0 | TAGE2_Spielschutz_aktiv |
| 0xA0A1 | TAGE2_Checksum_EEPROM |
| 0xA0A2 | TAGE2_Checksum_ROM |
| 0xA0A3 | TAGE2_Interrupt_unused |
| 0xA0A4 | TAGE2_ErrorCode_unknown |
| 0xA0A5 | TAGE2_Coding_TimeoutKBus |
| 0xA0A6 | TAGE2_WUP_falsche_Antwort |
| 0xA0A7 | TAGE2_WUP_keine_Antwort |
| 0xA0A8 | TAGE3_Watchdog_Reset |
| 0xA0A9 | TAGE3_Watchdog_Timer |
| 0xA0AA | TAGE3_Abic_reagiert_nicht |
| 0xA0AB | TAGE3_Ubat_ausserhalb_ULF |
| 0xA0AC | TAGE3_Antennen defekt |
| 0xA0AD | TAGE3_Timeout_Kap_Sensor |
| 0xA0AE | TAGE3_Timeout_Dru_Sensor |
| 0xA0AF | TAGE3_Timeout_Zug_Sensor |
| 0xA0B0 | TAGE3_Spielschutz_aktiv |
| 0xA0B1 | TAGE3_Checksum_EEPROM |
| 0xA0B2 | TAGE3_Checksum_ROM |
| 0xA0B3 | TAGE3_Interrupt_unused |
| 0xA0B4 | TAGE3_ErrorCode_unknown |
| 0xA0B5 | TAGE3_Coding_TimeoutKBus |
| 0xA0B6 | TAGE3_WUP_falsche_Antwort |
| 0xA0B7 | TAGE3_WUP_keine_Antwort |
| 0xA0B8 | TAGE4_Watchdog_Reset |
| 0xA0B9 | TAGE4_Watchdog_Timer |
| 0xA0BA | TAGE4_Abic_reagiert_nicht |
| 0xA0BB | TAGE4_Ubat_ausserhalb_ULF |
| 0xA0BC | TAGE4_Antennen defekt |
| 0xA0BD | TAGE4_Timeout_Kap_Sensor |
| 0xA0BE | TAGE4_Timeout_Dru_Sensor |
| 0xA0BF | TAGE4_Timeout_Zug_Sensor |
| 0xA0C0 | TAGE4_Spielschutz_aktiv |
| 0xA0C1 | TAGE4_Checksum_EEPROM |
| 0xA0C2 | TAGE4_Checksum_ROM |
| 0xA0C3 | TAGE4_Interrupt_unused |
| 0xA0C4 | TAGE4_ErrorCode_unknown |
| 0xA0C5 | TAGE4_Coding_TimeoutKBus |
| 0xA0C6 | TAGE4_WUP_falsche_Antwort |
| 0xA0C7 | TAGE4_WUP_keine_Antwort |
| 0x9308 | PGS_Uebertemperatur |
| 0xFFFF | unbekannter Fehlerort |

### DSC

| ORT | ORTTEXT |
| --- | --- |
| 0x5d8c | Rueckfoerder Pumpe: - steht (Rueckmeldung aus Messung: AN aber Erwartet: AUS) |
| 0x5d8d | Rueckfoerder Pumpe: - laeuft (Rueckmeldung aus Messung: AUS aber Erwartet: AN) |
| 0x5d8e | Rueckfoerder Pumpe: - Nachlauf zu kurz |
| 0x5d8f | Rueckfoerder Pumpe: - Freigabe des Pumpen-Anlauf-Zyklus, kein Fehler:Nachweistest |
| 0x5d90 | Ventil Relais: AUS, verursacht durch zu viele Ventil Fehler - Sicherung defekt ? |
| 0x5d91 | Ventil Relais: AUS, Relais schaltet nicht ab waehrend FSA Test |
| 0x5d92 | Ventil Relais: VRA Information via SPI zeigt keinen Effekt |
| 0x5d93 | Ventil Relais: mittel oder hochohmiger Kurzschluss von UVR oder Ventil nach Masse erkannt ueber FSA Test |
| 0x5d94 | Ventil Relais: haengen geblieben, Relais schaltet nicht ab waehrend FSA Test |
| 0x5d95 | Ventil Relais: AUS, UVR ist zu niedrig (verglichen mit UZ)waehrend FSA Test; Defekte Sicherung! |
| 0x5d96 | Ventil Relais: Kurzschluss zu UZ detektiert in cvrt |
| 0x5d97 | Ventil Relais: Medium oder hoch-ohmiger Kurzschluss des UVR oder des Ventils auf Gnd registriert durch cvrt |
| 0x5d98 | Einlass Ventil (EV) Vorne Links - zyklischer Ventil und Relais Test |
| 0x5d99 | Einlass Ventil (EV) Vorne Links - Allgmemein |
| 0x5d9b | Einlass Ventil (EV) Vorne Links - Drift Fehler: defektes Ventil (?, Fertigung?), gestoerter Drahtanschluss, fehlerhafte Endstufe |
| 0x5d9d | Auslass Ventil (AV) Vorne Links - zyklischer Ventil und Relais Test |
| 0x5d9e | Auslass Ventil (AV) Vorne Links - Allgmemein |
| 0x5da1 | Einlass Ventil (EV) Vorne Rechts - zyklischer Ventil und Relais Test |
| 0x5da2 | Einlass Ventil (EV) Vorne Rechts - Allgmemein |
| 0x5da6 | Auslass Ventil (AV) Vorne Rechts - zyklischer Ventil und Relais Test |
| 0x5da7 | Auslass Ventil (AV) Vorne Rechts - Allgmemein |
| 0x5daa | Einlass Ventil (EV) Hinten Links - zyklischer Ventil und Relais Test |
| 0x5dab | Einlass Ventil (EV) Hinten Links - Allgmemein |
| 0x5dad | Einlass Ventil (EV) Hinten Links - Drift Fehler: defektes Ventil (?, Fertigung?), gestoerter Drahtanschluss, fehlerhafte Endstufe |
| 0x5daf | Auslass Ventil (AV) Hinten Links - zyklischer Ventil und Relais Test |
| 0x5db0 | Auslass Ventil (AV) Hinten Links - Allgmemein |
| 0x5db3 | Einlass Ventil (EV) Hinten Rechts - zyklischer Ventil und Relais Test |
| 0x5db4 | Einlass Ventil (EV) Hinten Rechts - Allgmemein |
| 0x5db8 | Auslass Ventil (AV) Hinten Rechts - zyklischer Ventil und Relais Test |
| 0x5db9 | Auslass Ventil (AV) Hinten Rechts - Allgmemein |
| 0x5dbc | Ventil (USV1): zyklischer Ventil und Relais Test |
| 0x5dbd | Ventil (USV1): Allgmemein |
| 0x5dbf | Ventil (USV1) Vorne Links - Drift Fehler: defektes Ventil (?, Fertigung?), gestoerter Drahtanschluss, fehlerhafte Endstufe |
| 0x5dc1 | Ventil (USV2): zyklischer Ventil und Relais Test |
| 0x5dc2 | Ventil (USV2): Allgmemein |
| 0x5dc6 | Ventil (HSV1): zyklischer Ventil und Relais Test |
| 0x5dc7 | Ventil (HSV1): Allgmemein |
| 0x5dca | Ventil (HSV2): zyklischer Ventil und Relais Test |
| 0x5dcb | Ventil (HSV2): Allgmemein |
| 0x5dce | UZ-Fehler: leichte unter Spannung (Spannung zu niedrig) |
| 0x5dcf | UZ-Fehler: schwere unter Spannung (Spannung viel zu niedrig) |
| 0x5dd0 | UZ-Fehler: Spannung zu hoch |
| 0x5dd1 | UZ-Fehler: Eine WSS-Spannungs-Leitung evtl. kurz auf UBatt-Stromfluss durch ASPxx Pin des WSS Input Amplifier |
| 0x5dd2 | UZ-Fehler: Spannungsspitze auf Uz |
| 0x5dd3 | ECU-Fehler: Gemessene UZ-Spannung zu niedrig (Spannungsteiler Fehler) |
| 0x5dd4 | ECU-Fehler: Raddrehzahlsensor Driver Chip Versorgungsspannung/GND Fehler, Reset Antwort Test misslungen |
| 0x5dd5 | ECU-Fehler: Enable kann nicht eingeschaltet werden (FSA Test Enable High) |
| 0x5dd6 | ECU-Fehler: Enable kann nicht ausgeschaltet werden (FSA Test Enable low) |
| 0x5dd8 | ECU-Fehler: System Startup Synchronisation Timeout aufgefallen |
| 0x5dd9 | ECU-Fehler: Spi-Handler Hardware Fehler Erkennung |
| 0x5ddc | ECU-Fehler: HetSpi-Handler sendet Fehler; Nachricht nicht korrekt uebertragen |
| 0x5ddd | ECU-Fehler: Zugang in Uebersetzungstabelle des HetSpi ist nicht moeglich |
| 0x5dde | ECU-Fehler: Watchdog Daten Fehler aufgefallen |
| 0x5ddf | ECU-Fehler: Watchdog Status nicht korrekt |
| 0x5de0 | ECU-Fehler: Plausibilität des VASP-U bit in Bezug zu UZ-Spannung |
| 0x5de1 | ECU-Fehler: Clk Status des SPI zeigt fehlende Uhr |
| 0x5de2 | ECU-Fehler: DePwm Status / SW - HW Konfigurationen passen nicht zusammen (DF11i/s) |
| 0x5de3 | ECU-Fehler: DFA Status des SPI passt nicht zur Konfiguration |
| 0x5de4 | ECU-Fehler: Boot Block Checksummen Fehler |
| 0x5dee | ECU-Fehler: FPS Fault Transfer SysServ->AlgoSrv: Fifo Overflow aufgetreten |
| 0x5def | ECU-Fehler: ROM Checksummen Test Fehler |
| 0x5df0 | ECU-Fehler: RAM Adressierung Test Fehler |
| 0x5df1 | ECU-Fehler: RAM checkpattern Test Fehler |
| 0x5df2 | ECU-Fehler: HET RAM Adressierung Test Fehler |
| 0x5df3 | ECU-Fehler: HET RAM checkpattern Test Fehler |
| 0x5df5 | ECU-Fehler: Can RAM checkpattern Test Fehler |
| 0x5df6 | ECU-Fehler: Betriebssystem Task Jitter zu hoch - unkorrektes Task Timing |
| 0x5df7 | ECU-Fehler: Betriebssystem geringe Background Task Aktivitaet - System ueberlastet |
| 0x5df8 | ECU-Fehler: Betriebssystem Ausnahme |
| 0x5df9 | ECU-Fehler: Betriebssystem Task fehlt (nicht aktiviert) |
| 0x5dfa | ECU-Fehler: Undefiniertes FIQ aufgefallen |
| 0x5dfb | ECU-Fehler: Daten Abbruch -> uC Mode: Daboard |
| 0x5dfc | ECU-Fehler: Programm Abbruch -> uC Mode: Paboard |
| 0x5dfd | ECU-Fehler: Illegaler Opcode gefunden -> uC Mode: undef |
| 0x5dfe | ECU-Fehler: ROM Checksummen Test Fehler |
| 0x5dff | ECU-Fehler: RAM Adressierung Test Fehler |
| 0x5e00 | ECU-Fehler: RAM checkpattern Test Fehler |
| 0x5e01 | ECU-Fehler: HET RAM Adressierung Test Fehler |
| 0x5e02 | ECU-Fehler: HET RAM checkpattern Test Fehler |
| 0x5e03 | ECU-Fehler: Allgemeiner Fehler des Ventil Driver Status oder des Antriebes registriert durch cvrt |
| 0x5e04 | ECU-Fehler: Permanente Enable Ueberwachung (Enable ist low nach FSA Test) |
| 0x5e05 | ECU-Fehler: Planmaessiger SPI transfer nicht moeglich |
| 0x5e06 | ECU-Fehler: Planmaessige Datenuebertragung nicht verfuegbar |
| 0x5e07 | ECU-Fehler: Datenuebertragungsfehler (Antwort des SPI handler) |
| 0x5e08 | ECU-Fehler: Planmaessiger BIST Test nicht korrekt (BIST Kontinuität) |
| 0x5e09 | ECU-Fehler: BIST Signaturen verschieden, CPU Fehler bei AS oder SS |
| 0x5e0a | ECU-Fehler: Allgemeiner Fehler; something totally wrong; sollte nicht auftreten |
| 0x5e0b | ECU-Fehler: FPS Fehler und Status Transfer: FifoOverflow aufgetreten in SS |
| 0x5e0c | ECU-Fehler: BIST Signaturen unterschiedlich, CPU Fehler bei AS oder SS |
| 0x5e0d | ECU-Fehler: Timeout des BIST Antwort durch Algorithm Server |
| 0x5e0e | ECU-Fehler: Betriebssystem Task Jitter zu hoch - unkorrektes Task Timing |
| 0x5e0f | ECU-Fehler: Betriebssystem Task fehlt (nicht aktiviert) |
| 0x5e10 | ECU-Fehler: Betriebssystem geringe Background Task Aktivität - System ueberlastet |
| 0x5e11 | ECU-Fehler: Undefiniertes FIQ aufgetreten |
| 0x5e12 | ECU-Fehler: Illegaler Opcode gefunden -> uC Mode: undef |
| 0x5e13 | ECU-Fehler: Programm Abbruch -> uC Mode: Paboard |
| 0x5e14 | ECU-Fehler: Daten Abbruch -> uC Mode: Daboard |
| 0x5e15 | ECU-Fehler: FPS Status Transfer: SPI timeout in SS |
| 0x5e16 | ECU-Fehler: FPS Fault Transfer: SPI timeout in SS |
| 0x5e17 | ECU-Fehler: FPS Status Transfer: SPI Fehler in SS |
| 0x5e18 | ECU-Fehler: Datenmenge der Peripherie SPI ueberschreitet Buffer Laenge |
| 0x5e19 | ECU-Fehler: Peripherie SPI ID Anfrage nicht akzeptiert |
| 0x5e1a | ECU-Fehler: Peripherie SPI Uebersetzungsfehler multi IC |
| 0x5e1b | ECU-Fehler: Peripherie SPI Uebersetzungsfehler EEPROM |
| 0x5e1c | ECU-Fehler: Bandluecke Spannung ausserhalb des Bereichs |
| 0x5e1d | ECU-Fehler: ADC Umwandlung Start Fehler |
| 0x5e1e | ECU-Fehler: Flash Reprogrammierungszyklus ist fehlgeschlagen (Zellen nicht reprogrammiert) |
| 0x5e1f | ECU-Fehler: Flash Reprogrammierungszyklus wurde erfolgreich ausgefuehrt (Info) |
| 0x5e20 | ECU-Fehler: Allgemeiner Fehler; something totally wrong; sollte nicht auftreten |
| 0x5e21 | ECU-Fehler: Betriebssystem Ausnahme |
| 0x5f03 | ECU-Fehler: Fehler beim lesen der ASW-EEPROM Werte: Defekte EEPROM-Zelle |
| 0x5f04 | ECU-Fehler: Auslesen der ASW-EEPROM Werte dauert zu lange |
| 0x5f05 | ECU-Fehler: Testpin Leitungsstoerung bemerkt durch ValveDriftCheck fuer U467 |
| 0x5f06 | ECU-Fehler: widerspruechlicher Zugriff auf Ventilausgaenge (diagnosis x others) |
| 0x5f16 | ECU-Fehler: Radgeschwindigkeit von Hauptprozessor und Coprozessor stimmen nicht ueberein |
| 0x5f17 | ECU-Fehler: HET Ausnahme IRQ ereignet sich (HetApcntOvrfl \| HetApcntUndrfl \| HetPrgOvrfl) |
| 0x5e22 | Raddrehzahlsensor Vorne Links: Leitungsstoerung oder Kurzschluss (aWSS: + oder Gnd; pWSS: +) |
| 0x5e24 | Raddrehzahlsensor Vorne Links: Signalflanke fehlt (DF11i) |
| 0x5e25 | Raddrehzahlsensor Vorne Links: unkorrekte Signal Weite (>2ms)DF11 |
| 0x5e26 | Raddrehzahlsensor Vorne Links: Luftspalt zu groß |
| 0x5e27 | Raddrehzahlsensor Vorne Links: Dynamisches Signal - Verlust registriert |
| 0x5e28 | Raddrehzahlsensor Vorne Links: Noise Monitor |
| 0x5e2d | Raddrehzahlsensor Vorne Links: Fehlender Zahn RAD FL |
| 0x5e2e | Raddrehzahlsensor Vorne Links: Radschlupfueberwachung RAD FL |
| 0x5e2f | Raddrehzahlsensor Vorne Links: Anfahrerkennung Fehler RAD FL |
| 0x5efe | Raddrehzahlsensor Vorne Links: max. Time InplRad Rad FL ueberschritten |
| 0x5e30 | Raddrehzahlsensor Hinten Links: Leitungsstoerung oder Kurzschluss (aWSS: + oder Gnd; pWSS: +) |
| 0x5e32 | Raddrehzahlsensor Hinten Links: Signalflanke fehlt |
| 0x5e33 | Raddrehzahlsensor Hinten Links: unkorrekte Signal Weite (>2ms) |
| 0x5e34 | Raddrehzahlsensor Hinten Links: Luftspalt zu groß |
| 0x5e35 | Raddrehzahlsensor Hinten Links: Dynamisches Signal - Verlust registriert |
| 0x5e36 | Raddrehzahlsensor Hinten Links: Noise Monitor |
| 0x5e3b | Raddrehzahlsensor Hinten Links: Fehlender Zahn RAD RL |
| 0x5e3c | Raddrehzahlsensor Hinten Links: Radschlupfueberwachung RAD RL |
| 0x5e3d | Raddrehzahlsensor Hinten Links: Anfahrerkennung Fehler RAD RL |
| 0x5eff | Raddrehzahlsensor Hinten Links: max. Time InplRad Rad FL ueberschritten |
| 0x5e3e | Raddrehzahlsensor Hinten Rechts: Leitungsstoerung oder Kurzschluss (aWSS: + oder Gnd; pWSS: +) |
| 0x5e40 | Raddrehzahlsensor Hinten Rechts: Signalflanke fehlt |
| 0x5e41 | Raddrehzahlsensor Hinten Rechts: unkorrekte Signal Weite (>2ms) |
| 0x5e42 | Raddrehzahlsensor Hinten Rechts: Luftspalt zu groß |
| 0x5e43 | Raddrehzahlsensor Hinten Rechts: Dynamisches Signal - Verlust registriert |
| 0x5e44 | Raddrehzahlsensor Hinten Rechts: Noise Monitor |
| 0x5e49 | Raddrehzahlsensor Hinten Rechts: Fehlender Zahn RAD RR |
| 0x5e4a | Raddrehzahlsensor Hinten Rechts: Radschlupfueberwachung RAD RR |
| 0x5e4b | Raddrehzahlsensor Hinten Rechts: Anfahrerkennung Fehler RAD RR |
| 0x5f00 | Raddrehzahlsensor Hinten Rechts: max. Time InplRad Rad FL ueberschritten |
| 0x5e4c | Raddrehzahlsensor Vorne Rechts: Leitungsstoerung oder Kurzschluss (aWSS: + oder Gnd; pWSS: +) |
| 0x5e4e | Raddrehzahlsensor Vorne Rechts: Signalflanke fehlt |
| 0x5e4f | Raddrehzahlsensor Vorne Rechts: unkorrekte Signal Weite (>2ms) |
| 0x5e50 | Raddrehzahlsensor Vorne Rechts: Luftspalt zu groß |
| 0x5e51 | Raddrehzahlsensor Vorne Rechts: Dynamisches Signal - Verlust registriert |
| 0x5e52 | Raddrehzahlsensor Vorne Rechts: Noise Monitor |
| 0x5e57 | Raddrehzahlsensor Vorne Rechts: Fehlender Zahn RAD FR |
| 0x5e58 | Raddrehzahlsensor Vorne Rechts: Radschlupfueberwachung RAD FR |
| 0x5e59 | Raddrehzahlsensor Vorne Rechts: Anfahrerkennung Fehler RAD FR |
| 0x5f01 | Raddrehzahlsensor Vorne Rechts: max. Time InplRad Rad FL ueberschritten |
| 0x5e5c | Raddrehzahlsensor Allgemein: Drehrichtung Plausibilitaet |
| 0x5e5d | Raddrehzahlsensor Allgemein: Unplausibilitaet BSC-controlling |
| 0x5e5e | Raddrehzahlsensor Allgemein: Lambda allgemein |
| 0x5f02 | Raddrehzahlsensor Allgemein: max. Anzahl der InplRad ueberschritten |
| 0x5e60 | BLS-Fehler: Plausibilitaet BLS versus BS |
| 0x5e62 | BLS-Fehler: Ueberwachung BLS permanent high |
| 0xD347 | CAN-Fehler: BusOff Fehler oder CANSys - Init |
| 0xD354 | CAN-Fehler: Botschaft TORQUE_1 (ID 0x0A8) fehlt ! |
| 0xD355 | CAN-Fehler: Botschaft TORQUE_2 (ID 0x0A9) fehlt ! |
| 0xD356 | CAN-Fehler: Botschaft TORQUE_3 (ID 0x0AA) fehlt ! |
| 0xD357 | CAN-Fehler: Botschaft VERZOEGERUNG_ANF-ACC (ID 0x0AD) fehlt ! |
| 0x5e6a | CAN-Fehler: Botschaft DREHMOMENT-ANF-DSC (ID 0x0B6) nicht abgeschickt ! |
| 0xD358 | CAN-Fehler: Botschaft GETRIEBEDATEN (ID 0x0BA) fehlt ! |
| 0x5e6B | CAN-Fehler: Botschaft LENKRADWINKEL (ID 0x0C4) nicht abgeschickt ! |
| 0xD359 | CAN-Fehler: Botschaft LENKRADWINKEL_OBEN (ID 0x0C8) fehlt ! |
| 0x5e72 | CAN-Fehler: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) nicht abgeschickt ! |
| 0xD35A | CAN-Fehler: Botschaft KLEMMENSTATUS (ID 0x130) fehlt ! |
| 0x5e74 | CAN-Fehler: Botschaft STAT_DSC (ID 0x19E) nicht abgeschickt ! |
| 0x5e75 | CAN-Fehler: Botschaft GESCHWINDIGKEIT (ID 0x1A0) nicht abgeschickt ! |
| 0x5e76 | CAN-Fehler: Botschaft WEGSTRECKE (ID 0x1A6) fehlt ! |
| 0xD35C | CAN-Fehler: Botschaft STAT_KOMBI (ID 0x1B4) fehlt ! |
| 0xD35D | CAN-Fehler: Botschaft STAT_AFS (ID 0x1FC) fehlt ! |
| 0x5E77 | CAN-Fehler: Botschaft STAT_RPA (ID 0x31D) nicht abgeschickt ! |
| 0x5E7A | CAN-Fehler: Botschaft BREMSDRUCK_RAD (ID 0x2B2) nicht abgeschickt ! |
| 0xD35E | CAN-Fehler: Botschaft A_TEMP_RELATIVZEIT (ID 0x310) fehlt ! |
| 0xD35F | CAN-Fehler: Botschaft STAT_ARS (ID 0x1AC) fehlt ! |
| 0xD360 | CAN-Fehler: Botschaft KILOMETERSTAND (ID 0x330) fehlt ! |
| 0x5e7e | CAN-Fehler: Botschaft RAD_TOLERANZ (ID 0x374) nicht abgeschickt ! |
| 0xD361 | CAN-Fehler: Botschaft FAHRGESTELLNUMMER (ID 0x380) fehlt ! |
| 0xD362 | CAN-Fehler: Botschaft FAHRZEUGTYP (ID 0x388) fehlt ! |
| 0xD363 | CAN-Fehler: Botschaft BEDIENUNG_FAHRWERK (ID 0x398) fehlt ! |
| 0xD364 | CAN-Fehler: Botschaft NM_PT_CAN (ID 0x480) fehlt ! |
| 0x5e83 | CAN-Fehler: Botschaft NM_PT_CAN_DSC (ID 0x4A9) nicht abgeschickt ! |
| 0x5e84 | CAN-Fehler: Botschaft BOS_MELDUNG_DSC (ID 0x5A9) nicht abgeschickt ! |
| 0xD365 | CAN-Fehler: Botschaft BOS_RUECKSTELLUNG (ID 0x5E0) fehlt ! |
| 0x5e85 | CAN-Fehler: Botschaft YAW_REQUEST (ID 0x0C5) nicht abgeschickt ! |
| 0xD366 | CAN-Fehler: Botschaft YAW_ANSWER (ID 0x0C7) fehlt ! |
| 0xD367 | CAN-Fehler: Botschaft EXCH_AFS_DSC (ID 0x118) fehlt ! |
| 0xD368 | CAN-Fehler: Botschaft RWDT_STEA_WHL (ID 0x0C3) fehlt ! |
| 0x5e89 | CAN-Fehler: Botschaft YAW_REQUEST_2 (ID 0x0CA) nicht abgeschickt ! |
| 0xD369 | CAN-Fehler: Botschaft YAW_ANSWER_2 (ID 0x0CB) fehlt ! |
| 0x5E8A | CAN-Fehler: Botschaft REGELEINGRIFF_DSC_AFS (ID 0x11E) nicht abgeschickt ! |
| 0x5e8b | CAN-Fehler: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) nicht abgeschickt ! |
| 0x5e8c | CAN-Fehler: Botschaft RAD_TOLERANZ (ID 0x374) nicht abgeschickt ! |
| 0x5e8e | Querbeschleunigungs Sensor: - Messbereich Querbeschleunigungs sensor |
| 0x5e8f | Querbeschleunigungs Sensor: - Gradient Querbeschleunigungs sensor |
| 0x5e90 | Querbeschleunigungs Sensor: - Langzeit Offset ueberschreitet Limit |
| 0x5e91 | Querbeschleunigungs Sensor: - Wert während des Stillstands ist zu gross |
| 0x5e92 | Querbeschleunigungs Sensor: - Plausibilitaets Fehler waehrend Model Gueltigkeit |
| 0x5e93 | Querbeschleunigungs Sensor: - Plausibilitaets Fehler waehrend Erkennung |
| 0x5e95 | Querbeschleunigungs Sensor: - Crs - Fehlerverdacht Gradient |
| 0x5e96 | Querbeschleunigungs Sensor: - PSW - Fehlerverdacht |
| 0x5e97 | Querbeschleunigungs Sensor: - Crs - Messbereich Fehlerverdacht |
| 0x5e98 | Querbeschleunigungs Sensor: - DrsERRN02 - AYS interner Wert ausser Messbereich |
| 0x5e99 | Querbeschleunigungs Sensor: - DrsERRN04 - AYS interner Selbsttest nicht bestanden |
| 0x5e9a | Drehraten Sensor: - Vorzeichen Fehler mit SilaMemory |
| 0x5e9b | Drehraten Sensor: - Static Bite Yrs |
| 0x5e9c | Drehraten Sensor: - Plausibilitaets Fehler in Bezug auf Lws |
| 0x5e9d | Drehraten Sensor: - Messbereich Yrs |
| 0x5e9e | Drehraten Sensor: - Sign Fehler (ohne SilaMemory) |
| 0x5e9f | Drehraten Sensor: - Offset ueberschreitet Limit waehrend Stillstand |
| 0x5ea0 | Drehraten Sensor: - Gradient Yrs |
| 0x5ea1 | Drehraten Sensor: - Dynamic Bite Yrs |
| 0x5ea2 | Drehraten Sensor: - Offset ueberschreitet Limit waehrend der schnellen Kompensation |
| 0x5ea3 | Drehraten Sensor: - Gain ueberschreitet Limit |
| 0x5ea4 | Drehraten Sensor: - Offset ueberschreitet Limit waehrend der langsamen Kompensation |
| 0x5ea5 | Drehraten Sensor: - Plausibilitaets Fehler waehrend Ueberwachung auf Modellgueltigkeit |
| 0x5ea6 | Drehraten Sensor: - Plausibilitaets Fehler waehrend Ueberwachung |
| 0x5ea7 | Drehraten Sensor: - Redundanz Fehler |
| 0x5ea8 | Drehraten Sensor: - Crs - Messbereich Fehlerverdacht Yrs |
| 0x5ea9 | Drehraten Sensor: - Crs - Fehlerverdacht Yrs Static BITE |
| 0x5eaa | Drehraten Sensor: - Crs - Fehlerverdacht Yrs Gradient |
| 0x5eab | Drehraten Sensor: - Crs - Fehlerverdacht Yrs Dynamic BITE |
| 0x5eac | Drehraten Sensor: - PSW - Fehlerverdacht Yrs |
| 0x5ead | Drehraten Sensor: - Drs ID passt nicht zur Anfrage |
| 0x5eae | Drehraten Sensor: Checksumme der empfangenen Sensor-Nachricht ist nicht korrekt |
| 0x5eaf | Drehraten Sensor: ERR oder TERR Bit. Keine zusaetzliche Information (ERRNO = 0) |
| 0x5eb0 | Drehraten Sensor: NO1: Interner YRS Wert ausser des Wertebereichs |
| 0x5eb1 | Drehraten Sensor: NO3: Interner Ref Wert ausser des Wertebereichs |
| 0x5eb2 | Drehraten Sensor: NO5: Empfangene Nachricht zu frueh |
| 0x5eb3 | Drehraten Sensor: NO6: Spannungsversorgung zu niedrig |
| 0x5eb4 | Drehraten Sensor: NO7: Spannungsversorgung zu hoch |
| 0x5eb5 | Drehraten Sensor: NO8: Sensor in Initialisation |
| 0x5ee2 | Druck Sensor: - DS5 Plausibilitaet DSLine+DSLine2 = 5 Volt |
| 0x5ee4 | Druck Sensor: - Spannungsversorgung Fehler |
| 0x5ee5 | Druck Sensor: - Leitungsfehler |
| 0x5ee6 | Druck Sensor: - Leitungsfehler (invertiertes Signal) |
| 0x5ee7 | Druck Sensor: - POS - Power Up Selbsttest |
| 0x5eed | Druck Sensor: - Offset Druck sensor |
| 0x5eee | Druck Sensor: - Plausibilitaet 2 Druck Sensor in Bezug auf Bremslichtschalter |
| 0x5eef | Druck Sensor: - Plausibilität 1 Druck Sensor in Bezug auf Bremslichtschalter |
| 0x5ef0 | Druck Sensor: - Plausibilität 3 Druck Sensor in Bezug auf Bremslichtschalter |
| 0x5f28 | Temperatur Sensor: - Fehler Signalleitung Kurzschluss (+ oder Gnd oder kein Signalimpuls) |
| 0x5f29 | Temperatur Sensor: - Uebertragungs Fehler Paritaet |
| 0x5f2a | Temperatur Sensor: - Temperatur ausserhalb gueltigem Bereich |
| 0x5ef2 | Druck Sensor_ACC_vorne: - Offset Fehler Druck Sensor |
| 0x5ef3 | Druck Sensor_ACC_hinten: - Offset Fehler Druck Sensor |
| 0x5ef4 | Druck Sensor_ACC_vorne: - Plausibilitaets Fehler Druck Sensor Kreis |
| 0x5ef5 | Druck Sensor_ACC_hinten: - Plausibilitaets Fehler Druck Sensor Kreis |
| 0x5ef6 | Druck Sensor_ACC_vorne: - DS2Add1-e.g. Ti-Druck Sensor Leitungsfehler |
| 0x5ef7 | Druck Sensor_ACC_hinten: - DS2Add2-e.g. Ti-Druck Sensor Leitungsfehler |
| 0x5ef8 | Druck Sensor_ACC_vorne: - DS2Add-e.g. Ti-Druck Sensor Fehler Spannungsversorgung |
| 0x5eba | Lenkwinkel Sensor: - Allgemeiner Fehler |
| 0x5ebb | Lenkwinkel Sensor: - Signal Fehler mit SilaMemory |
| 0x5ebc | Lenkwinkel Sensor: - Sign Fehler (ohne SilaMemory) |
| 0x5ebd | Lenkwinkel Sensor: - Signal verbleibt auf konstanten Wert |
| 0x5ebe | Lenkwinkel Sensor: - Messbereich Sas |
| 0x5ebf | Lenkwinkel Sensor: - Gradient Sas |
| 0x5ec0 | Lenkwinkel Sensor: - Langzeit Offset ueberschreitet Limit |
| 0x5ec1 | Lenkwinkel Sensor: - Plausibilitaets Fehler - Bezug auf Drehraten sensor |
| 0x5ec5 | Lenkwinkel Sensor: - Message Counter |
| 0x5f0c | Lenkwinkel Sensor: - Segment-Finder Algorithmus fand kein Segment, Temp. |
| 0x5f0d | Lenkwinkel Sensor: - Segment-Finder Algorithmus fand falsches Segment |
| 0x5f0e | Lenkwinkel Sensor: - SFA fand kein Segment und vfzref > 25 km/h, Temp. |
| 0x5f0f | Lenkwinkel Sensor: - Sensor ist nicht Initialisiert unter 25 km/h , Temp. |
| 0x5ed4 | Unplausibilitaet VDC controlling |
| 0x5ed5 | Notbremse |
| 0x5eda | Variantenkodierung Wert in EEPROM nicht zulaessig |
| 0x5edb | Variantenkodierung Wert ausser des Messbereichs |
| 0x5edc | Variantenkodierung Wert nicht freigegeben in diesem Projekt |
| 0x5efb | Varianten Umstellung nicht gelesen aus EEPROM |
| 0x5efc | keine Fahrzeugtyp Daten empfangen |
| 0x5efd | neue Variantenkodierung - Wert gesetzt |
| 0x5f23 | EEPROM Konfiguration ACB Hba Value im EEPROM nicht gueltig |
| 0x5f24 | Abgeschaltet ACB HBA HPS HVV durch EEPROM |
| 0x5f2c | EEPROM Inhalt nicht gueltig |
| 0x5f60 | Variantenkodierung passt nicht zum Fahrzeug |
| 0x5ef9 | Anwendersoftware-Fehler:Timeout waehrend ASW startup Phase |
| 0x5efa | Anwendersoftware-Fehler:Taskcounter im ASW sind asynchron |
| 0x5f20 | Anwendersoftware-Fehler:ASW fordert vollstaendiges Abschalten des Systems an |
| 0x5e21 | Anwendersoftware-Fehler:ASW fordert nur EBD Funktion an |
| 0x5e22 | Anwendersoftware-Fehler:ASW fordert nur ABS Funktion an |
| 0x5f07 | AccEcd-Fehler: timeout beim Empfangen der CAN messages fuer ACC |
| 0x5f08 | AccEcd-Fehler: ACC, ECD alive-Fehler |
| 0x5f09 | AccEcd-Fehler: Gueltigkeits Check des gesetzten Werts gescheitert |
| 0x5f0a | AccEcd-Fehler: ACC sendet Fehler Bit |
| 0x5f2d | AccEcd-Fehler: Checksumme der empfangenen ACC Botschaft nicht richtig |
| 0x5f40 | AccEcd-Fehler: Zustandverzoegerung ist gebrochen, Druckvorgabe ungueltig oder Status ACC abgeschaltet, System ungueltig |
| 0x5f10 | Bremsbelagverschleiss-Fehler: Sensor check Vorderachse gescheitert |
| 0x5f11 | Bremsbelagverschleiss-Fehler: Sensor check Hinterachse gescheitert |
| 0x5f12 | Bremsbelagverschleiss-Fehler: Vorderachse Verschleissgrenze erreicht |
| 0x5f13 | Bremsbelagverschleiss-Fehler: Hinterachse Verschleissgrenze erreicht |
| 0x5f14 | Bremsbelagverschleiss-Fehler: Vorderachse Werte - sind nicht aktualisiert |
| 0x5f15 | Bremsbelagverschleiss-Fehler: Hinterachse Werte - sind nicht aktualisiert |
| 0x5f1a | CUS: Fahrleistungsreduzierung |
| 0x5f1b | CUS: Fahrleistungsreduzierung abgeschaltet |
| 0x5f25 | ARS-ECU-Fehler: timeout waehrend Empfang von CAN Messages fuer ARS (reversibel!) |
| 0x5f26 | ARS-ECU-Fehler: ARS alive-Fehler |
| 0x5f1f | ARS-ECU-Fehler: Status ungueltig |
| 0x5ed6 | LZA-Fehler: SIC-Langzeit-Kompensation abgeschaltet. |
| 0x5f2b | LZA-Fehler: Abschaltung verschiedener Funktionen per EEPROM Eintrag. |
| 0x5f2e | Getriebe-Fehler: Getriebe Botschaft fehlt oder Checksumme nicht gueltig. |
| 0x5f2f | Getriebe-Fehler: Getriebe Status ungueltig oder Schalthebel ungueltig oder Getriebe negative-lift ungueltig |
| 0x5f30 | DME-Fehler: Motordrehzahl ungueltig |
| 0x5f31 | DME-Fehler: mittleres Effektivdrehmoment ungueltig |
| 0x5f32 | DME-Fehler: unbearbeitetes Gaspedal ungueltig |
| 0x5f33 | DME-Fehler: ASR/MSR Rueckmeldung ist Null |
| 0x5f34 | DME-Fehler: Checksumme oder alive-Fehler von Nachricht TORQUE_1 ungueltig |
| 0x5f35 | DME-Fehler: Checksumme oder alive von Nachricht TORQUE_2 ungueltig |
| 0x5f36 | DME-Fehler: Checksumme oder alive von Nachricht TORQUE_3 ungueltig |
| 0x5f37 | DME-Fehler: DME Daten ungueltig |
| 0x5f45 | Niveau Bremsfluessigkeit zu niedrig |
| 0x5f47 | Kombi-Fehler: Kombi alive-Fehler |
| 0x5f48 | Kombi-Fehler: Zeit ungueltig oder Temperatur ungueltig |
| 0x5f49 | Kombi-Fehler: Kilometerstand ungueltig |
| 0x5f4a | Kombi-Fehler: Status anzeige Handbremslichtschalter ungueltig |
| 0x5f4b | Kombi-Fehler: Kilometerstand ungueltig |
| 0x5f4c | Kombi-Fehler: CANSys - Unterbrechung aller Kombi Nachrichten (0x1B4,0x310,0x330,0x5E0) |
| 0x5f50 | Ventil-Fehler: ValveGen Uebertemperatur Fehler |
| 0x5f52 | CCC/MASK-Fehler: Taster Signal Reifendruck Control ungueltig |
| 0x5f54 | CAS-Fehler: Fahrzeugfahrgestellnummer ungueltig |
| 0x5f55 | CAS-Fehler: Motortyp ungueltig |
| 0x5f56 | CAS-Fehler: KL-15 Signal ungueltig oder KL-R Signal ungueltig oder KL-15 verglichen mit Wauln Plausibilitaets test nicht bestanden |
| 0x5f57 | CAS-Fehler: CANSys - Unterbrechung aller CAS Nachrichten (0x130,0x380,0x388) |
| 0x5f61 | AFS-Status ungueltig |
| 0x5f62 | Signal Austausch AFS-DSC ungueltig |
| 0x60ac | RPA-Fehler: Codierdaten unplausibel |
| 0x60ad | RPA-Fehler: Standardisierungsdaten unplausibel |
| 0xFFFF | unbekannter Fehlerort |

### HDEV2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### CCC

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Licht aus, ohne ShutDown.Execute (Error_Sudden_Light_Off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfänger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9318 | Bis zum Auftreten des Timeouts keine Rueckmeldung von MMI bzw. Navi erhalten. |
| 0x931A | PTT ohne synchrone Kanaele. |
| 0x931B | PTT ohne Notifizierung. |
| 0xFFFF | unbekannter Fehlerort |

### TEL

| ORT | ORTTEXT |
| --- | --- |
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

### AMP

| ORT | ORTTEXT |
| --- | --- |
| 0xD6CE | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD6D0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD6D1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD6D2 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA1A8 | Keine Kommunikation mit dem Coprozessor (Error_Coprozessor). |
| 0xA1A9 | Kurzschluß am Lautsprecher Center (Error_LP_C) |
| 0xA1AA | Kurzschluß am Lautsprecher Front (Error_LP_F) |
| 0xA1AB | Kurzschluß am Lautsprecher Rear (Error_LP_R) |
| 0xA1AC | Kurzschluß am Lautsprecher Surround (Error_LP_S) |
| 0xA1AD | Kurzschluß am Subwoofer Left (Error_Sub_L) |
| 0xA1AE | Kurzschluß am Subwoofer Right (Error_Sub_R) |
| 0xA1AF | Device wurde falsch codiert (Error_Wrong_Coded). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9311 | Device hat beim Aufstarten einen Checksummenfehler erkannt (Error_CS). |
| 0x9312 | Device hat Uebertemperatur erkannt (Error_OT). |
| 0x9313 | Device hat Unterspannung Klemme 30 erkannt (Error_SPG). |
| 0xFFFF | unbekannter Fehlerort |

### EHC

| ORT | ORTTEXT |
| --- | --- |
| 0x5F8E | Sensor hinten links |
| 0x5F8F | Sensor hinten rechts |
| 0x5F90 | ECU Spannungsversorgung |
| 0x5F92 | Sensorspannungsversorgung hinten links |
| 0x5F93 | Sensorspannungsversorgung hinten rechts |
| 0x5F94 | Magnetventil hinten links |
| 0x5F95 | Magnetventil hinten rechts |
| 0x5F96 | Ablass Ventil |
| 0x5F97 | Kompressor-Relais |
| 0x5F98 | Regelzeit einseitig heben hinten links |
| 0x5F99 | Regelzeit einseitig heben hinten rechts |
| 0x5F9A | Regelzeit heben |
| 0x5F9B | Regelzeit senken |
| 0x5F9C | Sensoraktivitaet hinten links |
| 0x5F9D | Sensoraktivitaet hinten rechts |
| 0x5FB0 | Steuergeraet interner Fehler |
| 0x5FB1 | Checksummenfehler EEPromspeicher |
| 0x5FB2 | Checksummenfehler Flashspeicher |
| 0xD704 | K-CAN Transceiver LOW |
| 0xD707 | K-CAN Controller BUS Off |
| 0xD73C | K-CAN Fehlerwert erhalten |
| 0xD73D | K-CAN unplausibles Signal |
| 0xD73E | K-CAN Telegramm Timeout |
| 0xFFFF | unbekannter Fehlerort |

### KHI

| ORT | ORTTEXT |
| --- | --- |
| 0xD78D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xD78E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xD790 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD791 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD792 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0xA1C8 | DSP defekt (Error_DSP_Funktion) |
| 0xA1C9 | Endstufen IC defekt (Error_Audio_Amplifier_IC) |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer) |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9311 | Error_CS: KHI hat beim Aufstarten einen Checksummenfehler erkannt |
| 0x9312 | Error_UT: KHI hat Uebertemperatur erkannt |
| 0x9313 | Error_SPG: KHI hat bei Selbsttest Unterspannung Klemme 30 erkannt |
| 0xFFFF | unbekannter Fehlerort |

### CDC

| ORT | ORTTEXT |
| --- | --- |
| 0x9D28 | Fehler Wechsler Mechanik CD laden |
| 0x9D29 | Fehler Wechsler Mechanik CD entladen |
| 0x9D2A | Fehler Wechsler Mechanik Elevator |
| 0x9D2B | Fehler Magazin Auswurf |
| 0xD80C | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xD810 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xD811 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xD812 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9408 | Betriebstemperatur im unzulaessigen Bereich (<-20 Grad C bzw. >70 Grad C) |
| 0x9409 | Betriebsspannung fuer mehr als 10s im unzulaessigen Bereich (<9V bzw >16V) |
| 0x940A | Sound skip fuer laenger als 1 s |
| 0x940B | Table of Content der CD nicht lesbar |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xFFFF | unbekannter Fehlerort |

### HUD

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

### CAS

| ORT | ORTTEXT |
| --- | --- |
| 0xD904 | K_CAN_LOW_SYS, Physikalischer Busfehler D904 |
| 0xD905 | K_CAN_HIGH_SYS D905 |
| 0xD906 | GroundShift_SYS D906 |
| 0xD907 | CAN_Controller_SYS, Bus off D907 |
| 0xD93C | Fehlerwert_erhalten_SYS D93C |
| 0xD93D | Unplausibles_Signal_SYS D93D |
| 0xD93E | Telegramm_Timeout_beim_Emfang_SYS D93E |
| 0xD93F | Fehler_beim_Emfang_NM_Botschaft_SYS D93F |
| 0xD940 | Fehlerwert_gesendet_SYS D940 |
| 0xD941 | Unplausibles_Signal1_SYS D941 |
| 0xD942 | Telegramm_Timeout_beim_Senden_SYS D942 |
| 0xD943 | Fehler_beim_Senden_NM_Botschaft_SYS D943 |
| 0xE904 | K_CAN_LOW_PER, Physikalischer Busfehler E904 |
| 0xE905 | K_CAN_HIGH_PER E905 |
| 0xE906 | GroundShift_PER E906 |
| 0xE907 | CAN_Controller_PER, Bus off E907 |
| 0xE93C | Fehlerwert_erhalten_PER E93C |
| 0xE93D | Unplausibles_Signal_PER E93D |
| 0xE93E | Telegramm_Timeout_beim_Emfang_PER E93E |
| 0xE93F | Fehler_beim_Emfang_NM_Botschaft_PER E93F |
| 0xE940 | Fehlerwert_gesendet_PER E940 |
| 0xE941 | Unplausibles_Signal1_PER E941 |
| 0xE942 | Telegramm_Timeout_beim_Senden_PER E942 |
| 0xE943 | Fehler_beim_Senden_NM_Botschaft_PER E943 |
| 0xA0A8 | RAM_CRC_FEHLER A0A8 |
| 0xA0AA | BootFlash_CRC_FEHLER A0AA |
| 0xA0AB | ProgFlash_CRC_FEHLER A0AB |
| 0xA0AC | SG_Fehler_COP_CM_TRAP A0AC |
| 0xA0AD | EEPROM_WRITE_FEHLER A0AD |
| 0xA0AE | Energiesparmodi A0AE |
| 0xA0B0 | SG_Eingang_Bremselicht A0B0 |
| 0xA0B1 | SG_Eingang_P_N A0B1 |
| 0xA0B2 | Fehler_CAS_Versorgung A0B2 |
| 0xA0B3 | Fehler_Ansteurung_Anlasser_KL50 A0B3 |
| 0xA0B4 | Fehler_Motorstart_Anlasserbetrieb A0B4 |
| 0xA0B5 | DFAHL_Kabelbruch A0B5 |
| 0xA0B8 | Hallsensor_verrastet A0B8 |
| 0xA0B9 | Hallsensor_eject A0B9 |
| 0xA0BA | Hallsensor_SSTA A0BA |
| 0xA0BB | Hallsensor_SSTB A0BB |
| 0xA0BC | Hubmagnet_AZSP A0BC |
| 0xA0BD | KL15_Wakeup_Ausgangstreiber A0BD |
| 0xA0BE | Treiber_KL15_1_FZG_KS A0BE |
| 0xA0BF | Treiber_KL15_2_FZG_KS A0BF |
| 0xA0C0 | Treiber_KL15_3_FZG_KS A0C0 |
| 0xA0C1 | Treiber_KL50L_KS A0C1 |
| 0xA0C2 | Treiber_KL50E_KS A0C2 |
| 0xA0C3 | KL15_WUP_ACC_KS A0C3 |
| 0xA0C4 | Treiber_KL15_4_FZG_KS A0C4 |
| 0xA0C5 | MFS_Signal_fehlt A0C5 |
| 0xA0C8 | Komfort_Schliesszylinder_FAT A0C8 |
| 0xA0CC | Komfort_FBD A0CC |
| 0xA0CF | Komfort_Tueraussengriff A0CF |
| 0xA0E0 | Centerlock_Taster_Verriegeln A0E0 |
| 0xA0E1 | Centerlock_Taster_Entriegeln A0E1 |
| 0xA0F0 | Fehler_Basestation_Antenne A0F0 |
| 0xA0F1 | Fehler_TRSP_Page3 A0F1 |
| 0xA0F2 | Fehler_Typ_Nachschluessel A0F2 |
| 0xA0F3 | Fehler_TRSP_Cryptodaten A0F3 |
| 0xA100 | DME_Lost A100 |
| 0xA102 | DME_Drehzahl A102 |
| 0x9304 | EEPROM_CRC_FEHLER |
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
| 0x9809 | Keine_Bestaetigung_KiSi_DVD_Info |
| 0x980A | Keine_Bestaetigung_KiSi_DVDR_Info |
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
| 0xFFFF | unbekannter Fehlerort |

### DWA

| ORT | ORTTEXT |
| --- | --- |
| 0x9CE8 | Ram Fehler |
| 0x9CE9 | Flash Checksummen Fehler |
| 0x9CEA | EEprom Fehler |
| 0x9CEB | AD-Wandler Fehler |
| 0x9CEC | Ultraschall Sensorik defekt |
| 0x9CF9 | DWA-Led defekt |
| 0x9D00 | Komunikationsfehler mit der Sirene |
| 0x9D0C | DWA-Bus Fehler |
| 0x9D20 | Energiesparmode aktiv |
| 0xD944 | K-Can Physikalischer Fehler |
| 0xD947 | K-Can Bus-Off |
| 0xD97E | K-Can Request nicht beantwortet |
| 0x9308 | US-Sensorik vorne unplausibles Signal |
| 0x9309 | US-Sensorik hinten unplausibles Signal |
| 0x930A | Klappenkontakt fehlerhaft |
| 0x9314 | Deaktivierung US/NG |
| 0xFFFF | unbekannter Fehlerort |

### MPM

| ORT | ORTTEXT |
| --- | --- |
| 0xA6A4 | Interner Fehler Steuergerät |
| 0xA6A5 | Codierdaten (Checksumme) |
| 0xA6A6 | Codierdaten (Steuergerät nicht codiert) |
| 0xA6A7 | Relais 1 defekt |
| 0xA6A8 | Relais 2 defekt |
| 0xA6A9 | Sicherung Stromzweig 1 |
| 0xA6AA | Sicherung Stromzweig 2 |
| 0xA6AB | Klemme 30 Spannungslos |
| 0xD9C4 | K-CAN Bus Low |
| 0xD9C5 | K-CAN Bus High |
| 0xD9C6 | K-CAN Kommunikationsfehler |
| 0xD9D4 | Powermanagement Verbrauchersteuerung, 3B3h |
| 0xD9D5 | Nachlaufzeit Stromversorgung, 3BEh |
| 0xD9D6 | Klemmenstatus, 130h |
| 0xD9D7 | ZV und Klappenzustand, 2FCh |
| 0xA6AC | Energiesparmode aktiv |
| 0xA6C1 | Abschaltung Standverbraucher |
| 0xA6C2 | Abschaltung Counter Sleep Ack |
| 0xA6C3 | Abschaltung Unterspannung |
| 0xA6C4 | Abschaltung No Sleep Ack |
| 0xA6C5 | KL 15 unplausibel |
| 0xA6C6 | Relais 1 unplausibel |
| 0xA6C7 | Relais 2 unplausibel |
| 0xA6C8 | Abschaltung Transortmodus |
| 0xA6C9 | Unterspannung erkannt |
| 0xFFFF | unbekannter Fehlerort |

### SHD

| ORT | ORTTEXT |
| --- | --- |
| 0xA088 | Fehler Bedienschalter |
| 0xA089 | Fehler Dacheinheit SHD |
| 0xA08A | Fehler Dimmung |
| 0xA08B | Fehler Antrieb |
| 0xA08C | Fehler Normierung |
| 0xDA04 | Fehler K_CAN_LOW |
| 0xDA07 | Fehler CAN_Controller |
| 0xDA43 | Fehler Fehler_beim_Senden_NM_Botschaft - NUR FÜR ENTWICKLUNG RELEVANT |
| 0x9308 | Fehler Hallsensor A |
| 0x9309 | Fehler Motorbruecke |
| 0x930A | Fehler Motorbruecke kurzschluss |
| 0x930B | Fehler Motor |
| 0x930C | Fehler Kennlinie Heben |
| 0x930D | Fehler Versorgungsspannung unplausibel |
| 0x930E | Fehler Oszillator |
| 0x930F | Fehler Spannungsausfall |
| 0x9311 | Fehler Kennlinie Schieben |
| 0x9313 | Fehler Hallsensor B |
| 0x9314 | Fehler Kalibrierwerte ungültig |
| 0x9315 | Fehler Temperatursensor |
| 0x9316 | Fehler Motorklemmenspannung |
| 0x9317 | Fehler EEPROM Schreibfehler |
| 0x9318 | Fehler Checksumme SHD Konfiguration |
| 0x9319 | Fehler Watchdog |
| 0x931A | Fehler Manuelle Dach Bewegung |
| 0x931B | Fehler Aktivierung der SKB |
| 0x931C | Fehler Aktivierung des Panik Modes |
| 0x931D | Fehler Temperatur Monitor Abbruch |
| 0x931E | Fehler Opcode |
| 0x931F | Fehler Initialisierung |
| 0x9320 | Fehler Initialisierung abgebrochen |
| 0x9321 | Fehler Temperatur Monitor Startverhinderung |
| 0x9322 | Fehler Checksumme ECU Konfiguration |
| 0xFFFF | unbekannter Fehlerort |

### RLS

| ORT | ORTTEXT |
| --- | --- |
| 0xA128 | Hardwarefehler Regensensor A128 |
| 0xA129 | keine optische Initialisierung möglich A129 |
| 0xA12A | Übertemperatur A12A |
| 0xA12B | Überspannung A12B |
| 0xA12C | reserviert A12C |
| 0xA12D | Hardwarefehler Lichtsensor A12D |
| 0xA12E | Kalibrierungsfehler Lichtsensor A12E |
| 0xDA44 | Can-Low physik.Busfehler DA44 |
| 0xFFFF | unbekannter Fehlerort |

### ANT

| ORT | ORTTEXT |
| --- | --- |
| 0xA508 | Antennen-SV. Fehler in der Antennen-Stromversorgung |
| 0xDAC4 | Das externe RAM hat den Selbsttest nicht bestanden. |
| 0xDAC5 | Der Audio_Tuner hat den Selbsttest nicht bestanden. |
| 0xDAC6 | Der CDSP Chip hat den Selbsttest nicht bestanden. |
| 0xDAC7 | Der Data_Tuner hat den Selbsttest nicht bestanden. |
| 0xDAC8 | Das EEPROM hat den Selbsttest nicht bestanden. |
| 0xDAC9 | Die interne Versorgung mit 8.5V hat den Selbsttest nicht bestanden. |
| 0xDACE | Error_Light_Not_Off. |
| 0xDAD0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xDAD1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9313 | MOST-CHIP IIC- Bus Fehler |
| 0x9314 | Watchdog_Reset |
| 0x930E | Die Diversity ist nicht angeschlossen. |
| 0x930F | Die Eigendiagnose der Diversity meldet einen Fehler. |
| 0xFFFF | unbekannter Fehlerort |

### VM

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | IBus Dauerhigh Abschaltung |
| 0x02 | Watchdog ausgeloest |
| 0x03 | FeTraWe aktiviert |
| 0x01 | I-Bus-Pufferueberlauf |
| 0x02 | I2 C Fehler zum Graphikteil |
| 0x03 | I2 C Fehler vom Graphikteil |
| 0x04 | Uebertemperatur im Videomodul |
| 0x05 | Audio-Fehler |
| 0x06 | RGB-Fehler |
| 0x07 | Video-Fehler |
| 0x08 | Sonstige-Fehler |
| 0x09 | EEPROM read Fehler |
| 0x0A | EEPROM write Fehler |
| 0x0B | EEPROM Checksumfehler |
| 0x0C | EEPROM Neuinitialisierung |
| 0x0D | Kein RGB Telegramm vom Graphikteil |
| 0xFFFF | unbekannter Fehlerort |

### RAD

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### KOMBI

| ORT | ORTTEXT |
| --- | --- |
| 0x9313 | TEMPERATURFUEHLER_LCD |
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
| 0xA3C7 | Luftfeder_AUSFALL_NETZWERKMANAGMENT |
| 0xA548 | ID_Ausfall 1FCh AFS |
| 0xA549 | ID_Ausfall 315h Fahrzeugmodus |
| 0xA54A | Checksummenfehler Antwort CAS auf CAN-Anfrage ID 394h |
| 0xA54D | ID_Ausfall oder Alive EKP |
| 0xA54E | ID_Ausfall oder Alive Sitzlehnenverriegelung Fahrer |
| 0xA54F | ID_Ausfall oder Alive Sitzlehnenverriegelung Beifahrer |
| 0xA550 | ID_Ausfall 1A0h Geschwindigkeit |
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

### FBI

| ORT | ORTTEXT |
| --- | --- |
| 0xA268 | JBIT2 IBus Line Fehler A268 |
| 0xA269 | SOS Key Line Fehler A269 |
| 0xA26A | CrashLine Line Fehler A26A |
| 0xA26B | TelCommander Line Fehler A26B ab FBI SW 6.B.0, PU 09/02: Fehlereintrag inaktiviert |
| 0xA26C | JNAV IBus Line Fehler A26C |
| 0xA26E | EEPROM Fehler A26E |
| 0xA26F | TelCommander Taste hängt A26F |
| 0xE14E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE150 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE151 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE152 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0x9408 | TelCommander Line Fehler 9408 Fehlereintrag erst ab FBI SW 6.B.0, PU 09/02 |
| 0xFFFF | unbekannter Fehlerort |

### PDC

| ORT | ORTTEXT |
| --- | --- |
| 0x9e28 | Fehlerort: SG intern |
| 0x9e29 | Fehlerort: Funktionsanzeige |
| 0x9e2a | Fehlerort: Taster |
| 0x9e2b | Fehlerort: Wandlerfehler HL |
| 0x9e2c | Fehlerort: Wandlerfehler HR |
| 0x9e2d | Fehlerort: Wandlerfehler HML |
| 0x9e2e | Fehlerort: Wandlerfehler HMR |
| 0x9e2f | Fehlerort: Wandlerfehler VL |
| 0x9e30 | Fehlerort: Wandlerfehler VR |
| 0x9e31 | Fehlerort: Wandlerfehler VML |
| 0x9e32 | Fehlerort: Wandlerfehler VMR |
| 0x9e33 | Fehlerort: Wandlerleitungen HL |
| 0x9e34 | Fehlerort: Wandlerleitungen HR |
| 0x9e35 | Fehlerort: Wandlerleitungen HML |
| 0x9e36 | Fehlerort: Wandlerleitungen HMR |
| 0x9e37 | Fehlerort: Wandlerleitungen VL |
| 0x9e38 | Fehlerort: Wandlerleitungen VR |
| 0x9e39 | Fehlerort: Wandlerleitungen VML |
| 0x9e3a | Fehlerort: Wandlerleitungen VMR |
| 0x9e3b | Fehlerort: Wandler Versorgung |
| 0xe204 | Fehlerort: CAN-Low, Physikalischer Busfehler |
| 0xe205 | Fehlerort: CAN-High, Physikalischer Busfehler |
| 0xe206 | Fehlerort: CAN-Groundshift, Physikalischer Busfehler |
| 0xe207 | Fehlerort: CAN-Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### SZM

| ORT | ORTTEXT |
| --- | --- |
| 0x9FE0 | Lenksaeulenmodul: Hall Sensor defekt |
| 0x9FE1 | Lenksaeulenmodul: Motor defekt |
| 0x9FE2 | Lenksaeulenmodul: Positionsdaten Checksumme ungueltig |
| 0x9FE3 | Lenksaeulenmodul: Parameter Checksumme ungueltig |
| 0x9FE4 | E60/Sonnenrollo: Motor defekt |
| 0x9FE5 | E60/Sonnenrollo: Parameter Checksumme ungueltig |
| 0x9FE6 | E63/Sitzheizung: MOS defekt |
| 0x9FE7 | E63/Sitzheizung: CTN defekt |
| 0x9FE8 | E63/Sitzheizung: Parameter Checksumme ungueltig |
| 0x9FE9 | Energiesparmode aktiv |
| 0x9FEA | Beleuchtungsteuerung: Dimmung Parameter Checksumme ungueltig |
| 0xE244 | CAN-Low, Physikalischer Busfehler |
| 0xE247 | Controller, Bus off |
| 0xFFFF | unbekannter Fehlerort |

### CON

| ORT | ORTTEXT |
| --- | --- |
| 0xA2C8 | Fehler Motor |
| 0xA2CB | Fehler Hat switch |
| 0xA2CC | Energiesparmode aktiv |
| 0xE2C4 | Fehler CAN physical error |
| 0xE2C7 | Fehler CAN logical error |
| 0x2002 | Fehler Motor PTC |
| 0xFFFF | unbekannter Fehlerort |

### HKL

| ORT | ORTTEXT |
| --- | --- |
| 0xA2A8 | Reset durch Watchdog |
| 0xA2A9 | Reset durch OpCode Fehler |
| 0xA2AA | Reset durch Clock-Monitor |
| 0xA2AB | Fehler im EEPROM |
| 0xA2AD | Relaiskleber AUF aktivieren |
| 0xA2AE | Relaiskleber AUF deaktivieren |
| 0xA2AF | Relaiskleber ZU aktivieren |
| 0xA2B0 | Relaiskleber ZU deaktivieren |
| 0xA2B1 | Fehler am Pumpen-MOSFET |
| 0xA2B2 | Fehler am Ventil-Treiber |
| 0xA2B3 | Fehler am Drehwinkelgeber |
| 0xA2B4 | TOEHKK Kurzschluss nach Masse |
| 0xA2B5 | TOEHK Kurzschluss nach Masse |
| 0xE3C4 | Controller, Bus Off |
| 0xE3C5 | CAN_Low, Physikalischer Busfehler |
| 0xA2BF | Fehlspg. an Klemme 30 |
| 0xA2C0 | Timeout Oeffnen der Klappe |
| 0xA2C1 | Timeout Schliessen der Klappe |
| 0xA2C2 | Timeout Entriegeln HKK |
| 0xA2C3 | Timeout Verriegeln HKK |
| 0xFFFF | unbekannter Fehlerort |

### SMFA

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | keine Hallimpulse SLV |
| 0x9E49 | keine Hallimpulse SHV |
| 0x9E4A | keine Hallimpulse LBV |
| 0x9E4B | keine Hallimpulse LNV |
| 0x9E4C | keine Hallimpulse SNV |
| 0x9E4D | keine Hallimpulse KHV |
| 0x9E4E | keine Hallimpulse LKV |
| 0x9E4F | keine Hallimpulse STV |
| 0x9E50 | Fehler Motor SLV |
| 0x9E51 | Fehler Motor SHV |
| 0x9E52 | Fehler Motor LBV |
| 0x9E53 | Fehler Motor LNV |
| 0x9E54 | Fehler Motor SNV |
| 0x9E55 | Fehler Motor KHV |
| 0x9E56 | Fehler Motor LKV |
| 0x9E57 | Fehler Motor STV |
| 0x9E58 | Fehler Schnellheizfeld NTC Kissen |
| 0x9E59 | Fehler Schnellheizfeld NTC Lehne |
| 0x9E5A | Fehler Restheizfeld NTC Kissen |
| 0x9E5B | Fehler Restheizfeld NTC Lehne |
| 0x9E5C | Fehler Schnellheizfeld Kissen |
| 0x9E5D | Fehler Schnellheizfeld Lehne |
| 0x9E5E | Fehler Restheizfeld Kissen |
| 0x9E5F | Fehler Restheizfeld Lehne |
| 0x9E60 | Fehler Heizungstreiber durchlegiert |
| 0x9E61 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9E62 | Fehler Klima Steuerung Kissen |
| 0x9E63 | Fehler Klima Steuerung Lehne |
| 0x9E64 | Fehler Aktivsitz Motor |
| 0x9E65 | Fehler Aktivsitz Magnet |
| 0x9E66 | Fehler Aktivsitz Druckschalter |
| 0x9E67 | Fehler Lordose Ventile |
| 0x9E68 | Fehler Lordose Pumpe |
| 0x9E69 | Interner Fehler Versorgungsspannung U12s |
| 0x9E6A | Interner Fehler Versorgungsspannung Kl30s |
| 0x9E6B | Interner Fehler EEPROM |
| 0x9E6C | Energiesparmode aktiv |
| 0xE444 | CAN-Low, Physikalischer Busfehler |
| 0xE447 | Controller, Bus off |
| 0x9EA8 | keine Hallimpulse SLV |
| 0x9EA9 | keine Hallimpulse SHV |
| 0x9EAA | keine Hallimpulse LBV |
| 0x9EAB | keine Hallimpulse LNV |
| 0x9EAC | keine Hallimpulse SNV |
| 0x9EAD | keine Hallimpulse KHV |
| 0x9EAE | keine Hallimpulse LKV |
| 0x9EAF | keine Hallimpulse STV |
| 0x9EB0 | Fehler Motor SLV |
| 0x9EB1 | Fehler Motor SHV |
| 0x9EB2 | Fehler Motor LBV |
| 0x9EB3 | Fehler Motor LNV |
| 0x9EB4 | Fehler Motor SNV |
| 0x9EB5 | Fehler Motor KHV |
| 0x9EB6 | Fehler Motor LKV |
| 0x9EB7 | Fehler Motor STV |
| 0x9EB8 | Fehler Schnellheizfeld NTC Kissen |
| 0x9EB9 | Fehler Schnellheizfeld NTC Lehne |
| 0x9EBA | Fehler Restheizfeld NTC Kissen |
| 0x9EBB | Fehler Restheizfeld NTC Lehne |
| 0x9EBC | Fehler Schnellheizfeld Kissen |
| 0x9EBD | Fehler Schnellheizfeld Lehne |
| 0x9EBE | Fehler Restheizfeld Kissen |
| 0x9EBF | Fehler Restheizfeld Lehne |
| 0x9EC0 | Fehler Heizungstreiber durchlegiert |
| 0x9EC1 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9EC2 | Fehler Klima Steuerung Kissen |
| 0x9EC3 | Fehler Klima Steuerung Lehne |
| 0x9EC4 | Fehler Aktivsitz Motor |
| 0x9EC5 | Fehler Aktivsitz Magnet |
| 0x9EC6 | Fehler Aktivsitz Druckschalter |
| 0x9EC7 | Fehler Lordose Ventile |
| 0x9EC8 | Fehler Lordose Pumpe |
| 0x9EC9 | Interner Fehler Versorgungsspannung U12s |
| 0x9ECA | Interner Fehler Versorgungsspannung Kl30s |
| 0x9ECB | Interner Fehler EEPROM |
| 0x9ECC | Energiesparmode aktiv |
| 0xE484 | CAN-Low, Physikalischer Busfehler |
| 0xE487 | Controller, Bus off |
| 0x9F08 | keine Hallimpulse SLV |
| 0x9F09 | keine Hallimpulse SHV |
| 0x9F0A | keine Hallimpulse LBV |
| 0x9F0B | keine Hallimpulse LNV |
| 0x9F0C | keine Hallimpulse SNV |
| 0x9F0D | keine Hallimpulse KHV |
| 0x9F0E | keine Hallimpulse LKV |
| 0x9F0F | keine Hallimpulse STV |
| 0x9F10 | Fehler Motor SLV |
| 0x9F11 | Fehler Motor SHV |
| 0x9F12 | Fehler Motor LBV |
| 0x9F13 | Fehler Motor LNV |
| 0x9F14 | Fehler Motor SNV |
| 0x9F15 | Fehler Motor KHV |
| 0x9F16 | Fehler Motor LKV |
| 0x9F17 | Fehler Motor STV |
| 0x9F18 | Fehler Schnellheizfeld NTC Kissen |
| 0x9F19 | Fehler Schnellheizfeld NTC Lehne |
| 0x9F1A | Fehler Restheizfeld NTC Kissen |
| 0x9F1B | Fehler Restheizfeld NTC Lehne |
| 0x9F1C | Fehler Schnellheizfeld Kissen |
| 0x9F1D | Fehler Schnellheizfeld Lehne |
| 0x9F1E | Fehler Restheizfeld Kissen |
| 0x9F1F | Fehler Restheizfeld Lehne |
| 0x9F20 | Fehler Heizungstreiber durchlegiert |
| 0x9F21 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9F22 | Fehler Klima Steuerung Kissen |
| 0x9F23 | Fehler Klima Steuerung Lehne |
| 0x9F24 | Fehler Aktivsitz Motor |
| 0x9F25 | Fehler Aktivsitz Magnet |
| 0x9F26 | Fehler Aktivsitz Druckschalter |
| 0x9F27 | Fehler Lordose Ventile |
| 0x9F28 | Fehler Lordose Pumpe |
| 0x9F29 | Interner Fehler Versorgungsspannung U12s |
| 0x9F2A | Interner Fehler Versorgungsspannung Kl30s |
| 0x9F2B | Interner Fehler EEPROM |
| 0x9F2C | Energiesparmode aktiv |
| 0xE344 | CAN-Low, Physikalischer Busfehler |
| 0xE347 | Controller, Bus off |
| 0x9F68 | keine Hallimpulse SLV |
| 0x9F69 | keine Hallimpulse SHV |
| 0x9F6A | keine Hallimpulse LBV |
| 0x9F6B | keine Hallimpulse LNV |
| 0x9F6C | keine Hallimpulse SNV |
| 0x9F6D | keine Hallimpulse KHV |
| 0x9F6E | keine Hallimpulse LKV |
| 0x9F6F | keine Hallimpulse STV |
| 0x9F70 | Fehler Motor SLV |
| 0x9F71 | Fehler Motor SHV |
| 0x9F72 | Fehler Motor LBV |
| 0x9F73 | Fehler Motor LNV |
| 0x9F74 | Fehler Motor SNV |
| 0x9F75 | Fehler Motor KHV |
| 0x9F76 | Fehler Motor LKV |
| 0x9F77 | Fehler Motor STV |
| 0x9F78 | Fehler Schnellheizfeld NTC Kissen |
| 0x9F79 | Fehler Schnellheizfeld NTC Lehne |
| 0x9F7A | Fehler Restheizfeld NTC Kissen |
| 0x9F7B | Fehler Restheizfeld NTC Lehne |
| 0x9F7C | Fehler Schnellheizfeld Kissen |
| 0x9F7D | Fehler Schnellheizfeld Lehne |
| 0x9F7E | Fehler Restheizfeld Kissen |
| 0x9F7F | Fehler Restheizfeld Lehne |
| 0x9F80 | Fehler Heizungstreiber durchlegiert |
| 0x9F81 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9F82 | Fehler Klima Steuerung Kissen |
| 0x9F83 | Fehler Klima Steuerung Lehne |
| 0x9F84 | Fehler Aktivsitz Motor |
| 0x9F85 | Fehler Aktivsitz Magnet |
| 0x9F86 | Fehler Aktivsitz Druckschalter |
| 0x9F87 | Fehler Lordose Ventile |
| 0x9F88 | Fehler Lordose Pumpe |
| 0x9F89 | Interner Fehler Versorgungsspannung U12s |
| 0x9F8A | Interner Fehler Versorgungsspannung Kl30s |
| 0x9F8B | Interner Fehler EEPROM |
| 0x9F8C | Energiesparmode aktiv |
| 0xE384 | CAN-Low, Physikalischer Busfehler |
| 0xE387 | Controller, Bus off |
| 0x9EA6 | Fehler Steuergerätetemperatur |
| 0x9EA7 | Versorgungsspannungsfehler |
| 0x9F06 | Fehler Steuergerätetemperatur |
| 0x9F07 | Versorgungsspannungsfehler |
| 0x9F66 | Fehler Steuergerätetemperatur |
| 0x9F67 | Versorgungsspannungsfehler |
| 0x9FC6 | Fehler Steuergerätetemperatur |
| 0x9FC7 | Versorgungsspannungsfehler |
| 0xFFFF | unbekannter Fehlerort |

### SMBF

| ORT | ORTTEXT |
| --- | --- |
| 0x9E48 | keine Hallimpulse SLV |
| 0x9E49 | keine Hallimpulse SHV |
| 0x9E4A | keine Hallimpulse LBV |
| 0x9E4B | keine Hallimpulse LNV |
| 0x9E4C | keine Hallimpulse SNV |
| 0x9E4D | keine Hallimpulse KHV |
| 0x9E4E | keine Hallimpulse LKV |
| 0x9E4F | keine Hallimpulse STV |
| 0x9E50 | Fehler Motor SLV |
| 0x9E51 | Fehler Motor SHV |
| 0x9E52 | Fehler Motor LBV |
| 0x9E53 | Fehler Motor LNV |
| 0x9E54 | Fehler Motor SNV |
| 0x9E55 | Fehler Motor KHV |
| 0x9E56 | Fehler Motor LKV |
| 0x9E57 | Fehler Motor STV |
| 0x9E58 | Fehler Schnellheizfeld NTC Kissen |
| 0x9E59 | Fehler Schnellheizfeld NTC Lehne |
| 0x9E5A | Fehler Restheizfeld NTC Kissen |
| 0x9E5B | Fehler Restheizfeld NTC Lehne |
| 0x9E5C | Fehler Schnellheizfeld Kissen |
| 0x9E5D | Fehler Schnellheizfeld Lehne |
| 0x9E5E | Fehler Restheizfeld Kissen |
| 0x9E5F | Fehler Restheizfeld Lehne |
| 0x9E60 | Fehler Heizungstreiber durchlegiert |
| 0x9E61 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9E62 | Fehler Klima Steuerung Kissen |
| 0x9E63 | Fehler Klima Steuerung Lehne |
| 0x9E64 | Fehler Aktivsitz Motor |
| 0x9E65 | Fehler Aktivsitz Magnet |
| 0x9E66 | Fehler Aktivsitz Druckschalter |
| 0x9E67 | Fehler Lordose Ventile |
| 0x9E68 | Fehler Lordose Pumpe |
| 0x9E69 | Interner Fehler Versorgungsspannung U12s |
| 0x9E6A | Interner Fehler Versorgungsspannung Kl30s |
| 0x9E6B | Interner Fehler EEPROM |
| 0x9E6C | Energiesparmode aktiv |
| 0xE444 | CAN-Low, Physikalischer Busfehler |
| 0xE447 | Controller, Bus off |
| 0x9EA8 | keine Hallimpulse SLV |
| 0x9EA9 | keine Hallimpulse SHV |
| 0x9EAA | keine Hallimpulse LBV |
| 0x9EAB | keine Hallimpulse LNV |
| 0x9EAC | keine Hallimpulse SNV |
| 0x9EAD | keine Hallimpulse KHV |
| 0x9EAE | keine Hallimpulse LKV |
| 0x9EAF | keine Hallimpulse STV |
| 0x9EB0 | Fehler Motor SLV |
| 0x9EB1 | Fehler Motor SHV |
| 0x9EB2 | Fehler Motor LBV |
| 0x9EB3 | Fehler Motor LNV |
| 0x9EB4 | Fehler Motor SNV |
| 0x9EB5 | Fehler Motor KHV |
| 0x9EB6 | Fehler Motor LKV |
| 0x9EB7 | Fehler Motor STV |
| 0x9EB8 | Fehler Schnellheizfeld NTC Kissen |
| 0x9EB9 | Fehler Schnellheizfeld NTC Lehne |
| 0x9EBA | Fehler Restheizfeld NTC Kissen |
| 0x9EBB | Fehler Restheizfeld NTC Lehne |
| 0x9EBC | Fehler Schnellheizfeld Kissen |
| 0x9EBD | Fehler Schnellheizfeld Lehne |
| 0x9EBE | Fehler Restheizfeld Kissen |
| 0x9EBF | Fehler Restheizfeld Lehne |
| 0x9EC0 | Fehler Heizungstreiber durchlegiert |
| 0x9EC1 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9EC2 | Fehler Klima Steuerung Kissen |
| 0x9EC3 | Fehler Klima Steuerung Lehne |
| 0x9EC4 | Fehler Aktivsitz Motor |
| 0x9EC5 | Fehler Aktivsitz Magnet |
| 0x9EC6 | Fehler Aktivsitz Druckschalter |
| 0x9EC7 | Fehler Lordose Ventile |
| 0x9EC8 | Fehler Lordose Pumpe |
| 0x9EC9 | Interner Fehler Versorgungsspannung U12s |
| 0x9ECA | Interner Fehler Versorgungsspannung Kl30s |
| 0x9ECB | Interner Fehler EEPROM |
| 0x9ECC | Energiesparmode aktiv |
| 0xE484 | CAN-Low, Physikalischer Busfehler |
| 0xE487 | Controller, Bus off |
| 0x9F08 | keine Hallimpulse SLV |
| 0x9F09 | keine Hallimpulse SHV |
| 0x9F0A | keine Hallimpulse LBV |
| 0x9F0B | keine Hallimpulse LNV |
| 0x9F0C | keine Hallimpulse SNV |
| 0x9F0D | keine Hallimpulse KHV |
| 0x9F0E | keine Hallimpulse LKV |
| 0x9F0F | keine Hallimpulse STV |
| 0x9F10 | Fehler Motor SLV |
| 0x9F11 | Fehler Motor SHV |
| 0x9F12 | Fehler Motor LBV |
| 0x9F13 | Fehler Motor LNV |
| 0x9F14 | Fehler Motor SNV |
| 0x9F15 | Fehler Motor KHV |
| 0x9F16 | Fehler Motor LKV |
| 0x9F17 | Fehler Motor STV |
| 0x9F18 | Fehler Schnellheizfeld NTC Kissen |
| 0x9F19 | Fehler Schnellheizfeld NTC Lehne |
| 0x9F1A | Fehler Restheizfeld NTC Kissen |
| 0x9F1B | Fehler Restheizfeld NTC Lehne |
| 0x9F1C | Fehler Schnellheizfeld Kissen |
| 0x9F1D | Fehler Schnellheizfeld Lehne |
| 0x9F1E | Fehler Restheizfeld Kissen |
| 0x9F1F | Fehler Restheizfeld Lehne |
| 0x9F20 | Fehler Heizungstreiber durchlegiert |
| 0x9F21 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9F22 | Fehler Klima Steuerung Kissen |
| 0x9F23 | Fehler Klima Steuerung Lehne |
| 0x9F24 | Fehler Aktivsitz Motor |
| 0x9F25 | Fehler Aktivsitz Magnet |
| 0x9F26 | Fehler Aktivsitz Druckschalter |
| 0x9F27 | Fehler Lordose Ventile |
| 0x9F28 | Fehler Lordose Pumpe |
| 0x9F29 | Interner Fehler Versorgungsspannung U12s |
| 0x9F2A | Interner Fehler Versorgungsspannung Kl30s |
| 0x9F2B | Interner Fehler EEPROM |
| 0x9F2C | Energiesparmode aktiv |
| 0xE344 | CAN-Low, Physikalischer Busfehler |
| 0xE347 | Controller, Bus off |
| 0x9F68 | keine Hallimpulse SLV |
| 0x9F69 | keine Hallimpulse SHV |
| 0x9F6A | keine Hallimpulse LBV |
| 0x9F6B | keine Hallimpulse LNV |
| 0x9F6C | keine Hallimpulse SNV |
| 0x9F6D | keine Hallimpulse KHV |
| 0x9F6E | keine Hallimpulse LKV |
| 0x9F6F | keine Hallimpulse STV |
| 0x9F70 | Fehler Motor SLV |
| 0x9F71 | Fehler Motor SHV |
| 0x9F72 | Fehler Motor LBV |
| 0x9F73 | Fehler Motor LNV |
| 0x9F74 | Fehler Motor SNV |
| 0x9F75 | Fehler Motor KHV |
| 0x9F76 | Fehler Motor LKV |
| 0x9F77 | Fehler Motor STV |
| 0x9F78 | Fehler Schnellheizfeld NTC Kissen |
| 0x9F79 | Fehler Schnellheizfeld NTC Lehne |
| 0x9F7A | Fehler Restheizfeld NTC Kissen |
| 0x9F7B | Fehler Restheizfeld NTC Lehne |
| 0x9F7C | Fehler Schnellheizfeld Kissen |
| 0x9F7D | Fehler Schnellheizfeld Lehne |
| 0x9F7E | Fehler Restheizfeld Kissen |
| 0x9F7F | Fehler Restheizfeld Lehne |
| 0x9F80 | Fehler Heizungstreiber durchlegiert |
| 0x9F81 | Fehler Klima Versorgung Kissen und Lehne |
| 0x9F82 | Fehler Klima Steuerung Kissen |
| 0x9F83 | Fehler Klima Steuerung Lehne |
| 0x9F84 | Fehler Aktivsitz Motor |
| 0x9F85 | Fehler Aktivsitz Magnet |
| 0x9F86 | Fehler Aktivsitz Druckschalter |
| 0x9F87 | Fehler Lordose Ventile |
| 0x9F88 | Fehler Lordose Pumpe |
| 0x9F89 | Interner Fehler Versorgungsspannung U12s |
| 0x9F8A | Interner Fehler Versorgungsspannung Kl30s |
| 0x9F8B | Interner Fehler EEPROM |
| 0x9F8C | Energiesparmode aktiv |
| 0xE384 | CAN-Low, Physikalischer Busfehler |
| 0xE387 | Controller, Bus off |
| 0x9EA6 | Fehler Steuergerätetemperatur |
| 0x9EA7 | Versorgungsspannungsfehler |
| 0x9F06 | Fehler Steuergerätetemperatur |
| 0x9F07 | Versorgungsspannungsfehler |
| 0x9F66 | Fehler Steuergerätetemperatur |
| 0x9F67 | Versorgungsspannungsfehler |
| 0x9FC6 | Fehler Steuergerätetemperatur |
| 0x9FC7 | Versorgungsspannungsfehler |
| 0xFFFF | unbekannter Fehlerort |

### LSZ

| ORT | ORTTEXT |
| --- | --- |
| 0x9CA8 | interner Fehler LM |
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
| 0x9CB8 | XIRQ (PWM-Dimmung) defekt |
| 0x9CB9 | Kurzschlussfehler 4 |
| 0x9CBA | Kurzschlussfehler 3 |
| 0x9CBB | Kurzschlussfehler 2 |
| 0x9CBC | Kurzschlussfehler 1 |
| 0x9CBD | neuer Fehler 1 |
| 0x9CBE | neuer Fehler 2 |
| 0x9CBF | neuer Fehler 3 |
| 0xE504 | CAN-Low, Physikalischer Fehler |
| 0xE505 | CAN-High, Kurzschluss VB |
| 0xE506 | Ground Shift, zu hoch |
| 0xE507 | Controller, Bus Off |
| 0xE53E | Telegramm Timeout beim Empfang |
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
| 0x932B | Hardwareleitung zu SZL fehlt |
| 0x932C | Lichtnotlauf mit Kl.15 aktiv |
| 0x932D | Lichtnotlauf mit Geschwindigkeit aktiv |
| 0x932E | ALC-System defekt |
| 0x932F | ALC-System: AL links abgeschaltet |
| 0x9330 | ALC-System: AL rechts abgeschaltet |
| 0x9331 | Signal vom Regenlichtsensor unplausibel |
| 0xFFFF | unbekannter Fehlerort |

### AHM

| ORT | ORTTEXT |
| --- | --- |
| 0xE544 | K_CAN_LOW |
| 0xE545 | K_CAN_HIGH |
| 0xE546 | GroundShift |
| 0xE547 | CAN_Controller |
| 0xE57C | Fehlerwert_erhalten |
| 0xE57D | Unplausibles_Signal |
| 0xE57E | Telegramm_Timeout_beim_Emfang |
| 0xE57F | Fehler_beim_Empfang_NM_Botschaft - nur für Entwicklung relevant |
| 0xE580 | Fehlerwert_gesendet |
| 0xE581 | Unplausibles_Signal1 |
| 0xE582 | Telegramm_Timeout_beim_Senden |
| 0xE583 | Fehler_beim_Senden_NM_Botschaft - nur für Entwicklung relevant |
| 0x9DE8 | AHM SG_FEHLER |
| 0x9DE9 | AHM Reserve_DTC_30 |
| 0x9DEA | AHM Reserve_DTC_29 |
| 0x9DEB | AHM Reserve_DTC_28 |
| 0x9DEC | AHM Reserve_DTC_27 |
| 0x9DED | AHM Reserve_DTC_26 |
| 0x9DEE | AHM Reserve_DTC_25 |
| 0x9DEF | AHM Reserve_DTC_24 |
| 0x9DF0 | AHM Reserve_DTC_23 |
| 0x9DF1 | AHM Reserve_DTC_22 |
| 0x9DF2 | AHM Reserve_DTC_21 |
| 0x9DF3 | AHM Reserve_DTC_20 |
| 0x9DF4 | AHM Reserve_DTC_19 |
| 0x9DF5 | AHM Reserve_DTC_18 |
| 0x9DF6 | AHM Reserve_DTC_17 |
| 0x9DF7 | AHM Eingang Bremslicht Hardware |
| 0x9DF8 | AHM Reserve_DTC_16 |
| 0x9DF9 | AHM Reserve_DTC_15 |
| 0x9DFA | AHM Reserve_DTC_14 |
| 0x9DFB | AHM Reserve_DTC_13 |
| 0x9DFC | AHM Reserve_DTC_12 |
| 0x9DFD | AHM Reserve_DTC_11 |
| 0x9DFE | AHM Reserve_DTC_10 |
| 0x9DFF | AHM Reserve_DTC_09 |
| 0x9E00 | AHM Reserve_DTC_08 |
| 0x9E01 | AHM Reserve_DTC_07 |
| 0x9E02 | AHM Reserve_DTC_06 |
| 0x9E03 | AHM Reserve_DTC_05 |
| 0x9E04 | AHM Reserve_DTC_04 |
| 0x9E05 | AHM Reserve_DTC_03 |
| 0x9E06 | AHM Reserve_DTC_02 |
| 0x9E07 | AHM Reserve_DTC_01 |
| 0x9308 | AHM SG Fehler |
| 0x9309 | AHM SG Spannung unter 07 Volt |
| 0x930A | AHM SG Spannung ueber 16 Volt |
| 0x930B | AHM SG Spannung BN-Info unplausibel |
| 0x930C | AHM SG Eingg Bremslicht unplausibel |
| 0x930D | AHM SG Software DWA-Alarm |
| 0x9400 | AHM Bremslicht |
| 0x9401 | AHM Blinker links |
| 0x9402 | AHM Blinker rechts |
| 0x9403 | AHM Schlussl. links |
| 0x9404 | AHM Schlussl. rechts |
| 0x9405 | AHM Rueckfahrlicht |
| 0x9406 | AHM Nebellicht |
| 0xFFFF | unbekannter Fehlerort |

### KBM

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

### CID

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

### IHKA

| ORT | ORTTEXT |
| --- | --- |
| 0x9C48 | Motor Frischluft/Umluft links |
| 0x9C49 | Motor Frischluft/Umluft rechts |
| 0x9C4A | Motor Entfrostung |
| 0x9C4B | Motor Belüftung links |
| 0x9C4C | Motor Belüftung rechts |
| 0x9C4D | Motor Kaltluft |
| 0x9C4E | Motor Fussraum links |
| 0x9C4F | Motor Fussraum rechts |
| 0x9C50 | Motor Belüftung Fond |
| 0x9C53 | PTC-Zuheizer |
| 0x9C54 | AUC-Sensor |
| 0x9C55 | Beschlagsensor |
| 0x9C56 | Standheiz-LED |
| 0x9C57 | Geblaese-Endstufe |
| 0x9C58 | Poti links |
| 0x9C59 | Poti rechts |
| 0x9C5A | Poti mitte |
| 0x9C5B | Innentemperaturfühler |
| 0x9C5C | Verdampfertemperaturfühler |
| 0x9C5D | Monitor Drucksensor-Versorgung |
| 0x9C5E | Drucksensor |
| 0x9C60 | Fühler Wärmetauscher rechts |
| 0x9C65 | Stromsense Treiberversorgung |
| 0x9C66 | Stromsense f. OL-Versorgung |
| 0x9C67 | Fühler Wärmetauscher links |
| 0x9C68 | Belüftungstemperaturfühler |
| 0x9C69 | Schichtung Fondpoti |
| 0x9C6a | Solarsensor links |
| 0x9C6b | Solarsensor rechts |
| 0x9C6c | Monitor AUC-Versorgung |
| 0x9C6d | Monitor Sonnensensor-Versorgung |
| 0x9C6e | Monitor Fondpotiversorgung |
| 0x9C6f | Monitor Beschlagsensor Versorgung |
| 0x9C77 | Zusatzwasserpumpe |
| 0x9C78 | Spritzdüsenheizung |
| 0x9C79 | Wasserventil links |
| 0x9C7A | Wasserventil rechts |
| 0x9C7B | Innenfuehlergeblaese |
| 0x9C7C | KMV-Sperrventil |
| 0x9C7E | Heckscheibenheizung |
| 0x9C7F | Checksumme EEPROM |
| 0x9CA7 | Energiesparmode aktiv |
| 0xE704 | K-CAN Bus Low Leitungsfehler |
| 0xE705 | K-CAN Bus High Leitungsfehler |
| 0xE706 | LIN-Busfehler |
| 0xE707 | CAN-Controller, Bus Off |
| 0xE714 | Botschaft(KCAN: Powermanagement Batteriespannung, 3BE) |
| 0xE715 | Botschaft(KCAN: Kilometerstand/Reichweite, 330) |
| 0xE716 | Botschaft(KCAN: Powermanagement Verbrauchersteuerung, 3B3) |
| 0xE717 | Botschaft(KCAN: Relativzeit, 328) |
| 0xE718 | Botschaft(KCAN: Wärmestrom Motor, 1B6) |
| 0xE719 | Botschaft(KCAN: Motordaten, 1D0) |
| 0xE71A | Botschaft(KCAN: Klemmenstatus, 130) |
| 0xE71B | Botschaft(KCAN: Aussentemperatur, 2CA) |
| 0xE71C | Botschaft(KCAN: Geschwindigkeit, 1A0) |
| 0xE71D | Botschaft(KCAN: Status Klima SH/ZH Zusatzwasserpumpe, 2EC) |
| 0xE71E | Botschaft(KCAN: Drehmoment 3, AA) |
| 0xE71F | Botschaft(KCAN: Dimmung, 202) |
| 0xFFFF | unbekannter Fehlerort |

### SH

| ORT | ORTTEXT |
| --- | --- |
| 0x9B28 | Steuergeraet fehlerhaft |
| 0x9B29 | Kein Start |
| 0x9B2A | Flammabbruch |
| 0x9B2B | Ueber-/Unterspannung |
| 0x9B2C | Fremdlicht |
| 0x9B2D | Ueberhitzung |
| 0x9B2E | Heizgeraeteverriegelung |
| 0x9B2F | Dosierpumpenkreis fehlerhaft |
| 0x9B30 | Brennluftgeblaesekreis fehlerhaft |
| 0x9B31 | Gluehelement / Brennraumsensor fehlerhaft |
| 0x9B32 | Wasserpumpenkreis fehlerhaft |
| 0x9B33 | Absperrventilkreis fehlerhaft |
| 0x9B34 | Kraftstoffcodierung fehlerhaft |
| 0x9B35 | Plausibilitaetsfehler |
| 0x9B36 | Betriebsmodus fehlerhaft |
| 0xE784 | CAN Low Leitungsfehler |
| 0xE787 | Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### FDM

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | Löschmarkierung Diagnosedaten |
| 0xC869 | Clock-Monitor-Reset µP |
| 0xC86a | Illegal Opcode µP |
| 0xC86b | falsche Fahrgestellnummer |
| 0xC86c | Wake-Up durch Unterspannung |
| 0xC86d | Unterspannung im Betrieb (Ubatt < 9V für mindestens eine Minute) |
| 0xC86e | POR Power-On-Reset |
| 0xC86f | Codierdaten Checksummenfehler |
| 0xC870 | Flash - Speicher defekt |
| 0xC871 | EEPROM - Speicher defekt |
| 0xFFFF | unbekannter Fehlerort |

### UNBEKANNT

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### SGM_ZGM

| ORT | ORTTEXT |
| --- | --- |
| 0x9328 | K-CAN Bus aus |
| 0x9329 | PT-CAN Bus aus |
| 0x932a | SI-Bus Bus aus |
| 0x932b | SI-Bus Pegelfehler |
| 0x932c | Zu viel Speicher erforderlich |
| 0x932d | Speicher Fehler |
| 0x932e | Exeption aufgetreten |
| 0x932f | PT-Bus WAKE Info unterschiedlich |
| 0x938c | Sendepufferüberlauf K-CAN |
| 0x938d | Sendepufferüberlauf PT-CAN |
| 0x938e | Sendepufferüberlauf SI-Bus |
| 0x938f | Empfangspufferüberlauf |
| 0x9390 | Sendpufferüberlauf |
| 0x9391 | Unerwarteter Funktionsindex im Kf |
| 0x9392 | Unerwartete Ziel-Bus-Id im Kf |
| 0x9393 | Unerwarteter IRQ |
| 0x9394 | K-CAN Bus aus |
| 0x9395 | PT-CAN Bus aus |
| 0x9396 | SI-Bus Bus aus |
| 0x9397 | K-Line Fehler |
| 0xC904 | K-CAN Eindraht |
| 0x9398 | SI-Bus Sysemzeitfehler |
| 0xFFFF | unbekannter Fehlerort |

### SGM_SIM

| ORT | ORTTEXT |
| --- | --- |
| 0x93a8 | Watchdog-Reset uP |
| 0x93a9 | COP-Watchdog fehlerhaft |
| 0x93aa | Clock-Monitor-Reset uP |
| 0x93ab | Illegal Opcode uP |
| 0x93ac | Falsche Fahrgestellnummer |
| 0x93ad | Systemzeitfehler |
| 0x93ae | Timeout ID 01H (STVL E65, TEFA E6x Türdruck) |
| 0x93b0 | Timeout ID 03H (STVR E65, TEBF E6x Türdruck) |
| 0x93b2 | Timeout ID 05H (SBSL Y-Beschl.) |
| 0x93b3 | Timeout ID 06H (SASL Y-Beschl. E65, Reserve Y-Beschl. E6x) |
| 0x93b4 | Timeout ID 07H (SBSR Y-Beschl.) |
| 0x93b5 | Timeout ID 08H (SASR Y-Beschl. E65, Reserve Y-Beschl. E6x) |
| 0x93b6 | Timeout ID 09H (SFZ Y-Beschl.) |
| 0x93b8 | Timeout ID 0BH (SASL E65, SBSL E6x X-Beschl.) |
| 0x93b9 | Timeout ID 0CH (SASR E65, SBSR E6x X-Beschl.) |
| 0x93ba | Timeout ID 0DH (SFZ X-Beschl.) |
| 0x93bc | Timeout ID 11H (SBSR B+- Diagnose High) |
| 0x93bd | Timeout ID 12H (SBSL B+- Diagnose Low) |
| 0x93be | Timeout ID 20H (E65 SSFA, E6X SBSL Sitzinfo Fahrer) |
| 0x93bf | Timeout ID 21H (E65 SSBF, E6X SBSR Sitzinfo Beifahrer) |
| 0x93c0 | Timeout ID 22H (SSH E65 Sitzinfo, Reserve Sitzinfo hinten E6x) |
| 0x93c1 | Timeout ID 35H (Telegramm, Alive) AFS (Nur E6x) |
| 0x93c2 | Timeout ID 39H (DSC Nur E6x) |
| 0x93c3 | Timeout ID 43H (Klemmen) |
| 0x93c4 | Timeout ID 52H (Telegramm, Alive) SZM (Nur E6x) |
| 0x93c5 | Timeout ID 45H (Motordaten DME Nur E6x) |
| 0x93cc | Servotronik-SollStrom ungültig (AFS) |
| 0x93cd | ECO-SollStrom ungültig (AFS) |
| 0x93ce | Fahrzeugmodus ungültig (SZM) |
| 0x93cf | Geschwindigkeit ungültig (DSC) |
| 0x93d0 | Klemme 15 ungültig |
| 0x93d1 | Motor-Status ungültig |
| 0x93d2 | Fehler Status Airbag (SBSR) |
| 0x93d7 | Abschalten von Modul 1 (SGM_ZGM E65, SGM_ZGM E6x) |
| 0x93d8 | Abschalten von Modul 2 (nc E65, SZL E6x) |
| 0x93d9 | Abschalten von Modul 3 (SZL E65, TEFAT E6x) |
| 0x93da | Abschalten von Modul 4 (SASL E65, TEBFT E6x) |
| 0x93db | Abschalten von Modul 5 (SASR E65, SBSL E6x) |
| 0x93dc | Abschalten von Modul 6 (SFZ E65, SBSR E6x) |
| 0x93dd | Abschalten von Modul 7 (STVL E65, SFZ E6x) |
| 0x93de | Abschalten von Modul 8 (SSFA E65, nc E6x) |
| 0x93df | Abschalten von Modul 9 (SBSL E65, nc E6x) |
| 0x93e0 | Abschalten von Modul 10 (STVR E65, nc E6x) |
| 0x93e1 | Abschalten von Modul 11 (SSBF E65, nc E6x) |
| 0x93e2 | Abschalten von Modul 12 (SBSR E65, nc E6x) |
| 0x93e3 | Abschalten von Modul 13 (SSH E65, nc E6x) |
| 0x93e4 | PDC_3 : zu wenig Telegramme |
| 0x93e5 | PDC_3 : Datenfehler in Telegramm |
| 0x93e6 | PDC_3 : Uebertragungsfehler |
| 0x93ea | Codierdaten Checksummenfehler |
| 0x93eb | Algorithmus-Parameter Checksummenfehler |
| 0x93ec | EAM-Parameter Checksummenfehler |
| 0x93f4 | Keine Kommunikation mit Telefon |
| 0x93f5 | Systemspannung U_ASE n.i.O. |
| 0x93f6 | Kurzschluß U_ASE-Schalter |
| 0x93f7 | Geschaltete Systemspannung U_ASE_S n.i.O. |
| 0x93f8 | Geschaltete Systemspannung U5_SW n.i.O. |
| 0x93f9 | Spannung Energiereserve U60 n.i.O. |
| 0x93fa | Rückspeisung defekt |
| 0x93fb | Kapazität der Energiereserve n.i.O. |
| 0x93fc | Unterspannung Kl.30 erkannt |
| 0x9400 | FeTraWe aktiv |
| 0x9401 | Peripheral Acceleration Sensor (PAS) Interface defekt |
| 0x9402 | UpFront-Sensor links defekt |
| 0x9403 | UpFront-Sensor rechts defekt |
| 0x9406 | Stromanforderung zu hoch |
| 0x9407 | Fehler Servotronik-Wandler |
| 0x9408 | Fehler ECO-Wandler (Electrical Controlled Orifice) |
| 0x9409 | Ueber bzw. Unterspannung Servotronic ECO |
| 0x940F | Elektrische Kraftstoff Pumpe abgeschaltet |
| 0x9410 | Zuordnung Codierung Hardware fehlerhaft |
| 0x9411 | Kurzschluss Hinweisleuchte nach GND |
| 0x9412 | Kurzschluss Hinweisleuchte nach Plus |
| 0x9413 | Unterbrechung Hinweisleuchte |
| 0x943d | Power-On-Reset uP |
| 0x943e | SI-Bus: Uebertragungsfehler, CRC-Fehler ERRIF |
| 0x943f | SI-Bus: Uebertragungsfehler, Formatfehler ILLPIF |
| 0x9440 | SI-Bus: Synchronisierungspuls zu frueh SYNEIF |
| 0x9441 | SI-Bus: Synchronisierung verloren SYNLIF |
| 0x9442 | SI-Bus: Slotmismatch, Timingfehler SLMMIF |
| 0x9443 | SI-Bus: FIFO-Ueberlauf OVRNIF |
| 0x9445 | Pre-Drive-Check n.i.O. wegen Modul 2 (nc E65, SZL E6x) |
| 0x9446 | Pre-Drive-Check n.i.O. wegen Modul 3 (SZL E65, TEFAT E6x) |
| 0x9447 | Pre-Drive-Check n.i.O. wegen Modul 4 (SASL E65, TEBFT E6x) |
| 0x9448 | Pre-Drive-Check n.i.O. wegen Modul 5 (SASR E65, SBSL E6x) |
| 0x9449 | Pre-Drive-Check n.i.O. wegen Modul 6 (SFZ E65, SBSR E6x) |
| 0x944a | Pre-Drive-Check n.i.O. wegen Modul 7 (STVL E65, SFZ E6x) |
| 0x944b | Pre-Drive-Check n.i.O. wegen Modul 8 (SSFA E65, nc E6x) |
| 0x944c | Pre-Drive-Check n.i.O. wegen Modul 9 (SBSL E65, nc E6x) |
| 0x944d | Pre-Drive-Check n.i.O. wegen Modul 10 (STVR E65, nc E6x) |
| 0x944e | Pre-Drive-Check n.i.O. wegen Modul 11 (SSBF E65, nc E6x) |
| 0x944f | Pre-Drive-Check n.i.O. wegen Modul 12 (SBSR E65, nc E6x) |
| 0x9450 | Pre-Drive-Check n.i.O. wegen Modul 13 (SSH E65, nc E6x) |
| 0x9451 | Statusmeldung fehlt Modul 1 (SGM_ZGM E65, SGM_ZGM E6x) |
| 0x9452 | Statusmeldung fehlt Modul 2 (nc E65, SZL E6x) |
| 0x9453 | Statusmeldung fehlt Modul 3 (SZL E65, TEFAT E6x) |
| 0x9454 | Statusmeldung fehlt Modul 4 (SASL E65, TEBFT E6x) |
| 0x9455 | Statusmeldung fehlt Modul 5 (SASR E65, SBSL E6x) |
| 0x9456 | Statusmeldung fehlt Modul 6 (SFZ E65, SBSR E6x) |
| 0x9457 | Statusmeldung fehlt Modul 7 (STVL E65, SFZ E6x) |
| 0x9458 | Statusmeldung fehlt Modul 8 (SSFA E65, nc E6x) |
| 0x9459 | Statusmeldung fehlt Modul 9 (SBSL E65, nc E6x) |
| 0x945a | Statusmeldung fehlt Modul 10 (STVR E65, nc E6x) |
| 0x945b | Statusmeldung fehlt Modul 11 (SSBF E65, nc E6x) |
| 0x945c | Statusmeldung fehlt Modul 12 (SBSR E65, nc E6x) |
| 0x945d | Statusmeldung fehlt Modul 13 (SSH E65, nc E6x) |
| 0x945e | Uebertemperatur Stromverteiler A |
| 0x945f | Uebertemperatur Stromverteiler B |
| 0x9460 | Uebertemperatur Stromverteiler C |
| 0x9462 | Temperaturabschaltung Stromverteiler A |
| 0x9463 | Temperaturabschaltung Stromverteiler B |
| 0x9464 | Temperaturabschaltung Stromverteiler C |
| 0x9466 | Ueberstrom Ausgang A1 (SZL E65, SZL E6x) |
| 0x9467 | Ueberstrom Ausgang A2 (SZL E65, SZL E6x) |
| 0x9468 | Ueberstrom Ausgang A3 (SASL E65, TEFAT E6x) |
| 0x9469 | Ueberstrom Ausgang A4 (SASR E65, TEFAT E6x) |
| 0x946a | Ueberstrom Ausgang B1 (SFZ E65, TEBFT E6x) |
| 0x946b | Ueberstrom Ausgang B2 (STVL E65, TEBFT E6x) |
| 0x946c | Ueberstrom Ausgang B3 (SSFA E65, SBSL E6x) |
| 0x946d | Ueberstrom Ausgang B4 (SBSL E65, SBSL E6x) |
| 0x946e | Ueberstrom Ausgang C1 (STVR E65, SBSR E6x) |
| 0x946f | Ueberstrom Ausgang C2 (SSBF E65), SBSR E6x) |
| 0x9470 | Ueberstrom Ausgang C3 (SBSR E65), SFZ E6x) |
| 0x9471 | Ueberstrom Ausgang C4 (SSH E65), SFZ E6x) |
| 0x9476 | Ueberspannung Ausgang A1 (SZL E65, SZL E6x) |
| 0x9477 | Ueberspannung Ausgang A2 (SZL E65, SZL E6x) |
| 0x9478 | Ueberspannung Ausgang A3 (SASL E65, TEFAT E6x) |
| 0x9479 | Ueberspannung Ausgang A4 (SASR E65, TEFAT E6x) |
| 0x947a | Ueberspannung Ausgang B1 (SFZ E65, TEBFT E6x) |
| 0x947b | Ueberspannung Ausgang B2 (STVL E65, TEBFT E6x) |
| 0x947c | Ueberspannung Ausgang B3 (SSFA E65, SBSL E6x) |
| 0x947d | Ueberspannung Ausgang B4 (SBSL E65, SBSL E6x) |
| 0x947e | Ueberspannung Ausgang C1 (STVR E65, SBSR E6x) |
| 0x947f | Ueberspannung Ausgang C2 (SSBF E65), SBSR E6x) |
| 0x9480 | Ueberspannung Ausgang C3 (SBSR E65), SFZ E6x) |
| 0x9481 | Ueberspannung Ausgang C4 (SSH E65), SFZ E6x) |
| 0x9486 | Uebertragungsfehler Modul 1 (SGM_ZGM E65, SGM_ZGM E6x) |
| 0x9487 | Uebertragungsfehler Modul 2 (nc E65, SZL E6x) |
| 0x9488 | Uebertragungsfehler Modul 3 (SZL E65, TEFAT E6x) |
| 0x9489 | Uebertragungsfehler Modul 4 (SASL E65, TEBFT E6x) |
| 0x948a | Uebertragungsfehler Modul 5 (SASR E65, SBSL E6x) |
| 0x948b | Uebertragungsfehler Modul 6 (SFZ E65, SBSR E6x) |
| 0x948c | Uebertragungsfehler Modul 7 (STVL E65, SFZ E6x) |
| 0x948d | Uebertragungsfehler Modul 8 (SSFA E65, nc E6x) |
| 0x948e | Uebertragungsfehler Modul 9 (SBSL E65, nc E6x) |
| 0x948f | Uebertragungsfehler Modul 10 (STVR E65, nc E6x) |
| 0x9490 | Uebertragungsfehler Modul 11 (SSBF E65, nc E6x) |
| 0x9491 | Uebertragungsfehler Modul 12 (SBSR E65, nc E6x) |
| 0x9492 | Uebertragungsfehler Modul 13 (SSH E65, nc E6x) |
| 0x9494 | S/E-Diagnose Lichtleistung Modul 2 (nc E65, SZL E6x) |
| 0x9495 | S/E-Diagnose Lichtleistung Modul 3 (SZL E65, TEFAT E6x) |
| 0x9496 | S/E-Diagnose Lichtleistung Modul 4 (SASL E65, TEBFT E6x) |
| 0x9497 | S/E-Diagnose Lichtleistung Modul 5 (SASR E65, SBSL E6x) |
| 0x9498 | S/E-Diagnose Lichtleistung Modul 6 (SFZ E65, SBSR E6x) |
| 0x9499 | S/E-Diagnose Lichtleistung Modul 7 (STVL E65, SFZ E6x) |
| 0x949a | S/E-Diagnose Lichtleistung Modul 8 (SSFA E65, nc E6x) |
| 0x949b | S/E-Diagnose Lichtleistung Modul 9 (SBSL E65, nc E6x) |
| 0x949c | S/E-Diagnose Lichtleistung Modul 10 (STVR E65, nc E6x) |
| 0x949d | S/E-Diagnose Lichtleistung Modul 11 (SSBF E65, nc E6x) |
| 0x949e | S/E-Diagnose Lichtleistung Modul 12 (SBSR E65, nc E6x) |
| 0x949f | S/E-Diagnose Lichtleistung Modul 13 (SSH E65, nc E6x) |
| 0xFFFF | unbekannter Fehlerort |

### DME_DDE

| ORT | ORTTEXT |
| --- | --- |
| 0x2712 | CDKDMMVE - Ansteuerung Magnetventil DM-TL |
| 0x2713 | CDKLSVV - Vertauschte Lambdasonden |
| 0x2714 | CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2715 | CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2716 | CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x2717 | CDKHSHE2 - Ansteuerung Heizung Sonde hinter Kat (Bank2) |
| 0x271A | CDKLSV - Lambda-Sonde vor Kat |
| 0x271B | CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x271C | CDKLSH - Lambda-Sonde hinter Kat |
| 0x271D | CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x271E | CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x271F | CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x2720 | CDKLATV - Lambda-Sondenalterung TV |
| 0x2721 | CDKLASH - Lambda-Sondenalterung h. Kat |
| 0x2722 | CDKLSV2 - Lambda-Sonde2 vor Kat |
| 0x2723 | CDKHSVE2 - Endstufe Heizung Sonde vor Katalysator Bank2 |
| 0x2724 | CDKLSH2 - Lambda-Sonde2 hinter Kat |
| 0x2725 | CDKLATP2 - Lambda-Sondenalterung Periodendauer Bank2 |
| 0x2726 | CDKLATV2 - Lambda-Sondenalterung TV Bank2 |
| 0x2727 | CDKLASH2 - Lambda-Sondenalterung h. Kat Bank2 |
| 0x2728 | CDKFRAO - LR-Adaption multiplikativ Bereich2 |
| 0x2729 | CDKFRAO2 - LR-Adaption multipl. Bereich2 (Bank2) |
| 0x272A | CDKFRAU - LR-Adaption multiplikativ Bereich1 |
| 0x272B | CDKFRAU2 - LR-Adaption multipl. Bereich1 (Bank2) |
| 0x272C | CDKRKAT - LR-Adaption additiv pro Zeit |
| 0x272D | CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x272E | CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x272F | CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x2731 | CDKENWS - Nockenwellensteuerung Einlass |
| 0x2732 | CDKENWS2 - NW-Steuerung Einlass Bank2 |
| 0x2737 | CDKWFS - EWS3.3 Manipulationsschutz |
| 0x2738 | CDKKAT - Katalysator-Konvertierung |
| 0x2739 | CDKKATSP - Katalysator-Konvertierung LSU |
| 0x273A | CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x273D | CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x2742 | CDKMD00 - Aussetzererkennung Zyl.1 |
| 0x2743 | CDKMD01 - Aussetzererkennung Zyl.5 |
| 0x2744 | CDKMD02 - Aussetzererkennung Zyl.4 |
| 0x2745 | CDKMD03 - Aussetzererkennung Zyl.8 |
| 0x2746 | CDKMD04 - Aussetzererkennung Zyl.6 |
| 0x2747 | CDKMD05 - Aussetzererkennung Zyl.3 |
| 0x2748 | CDKMD06 - Aussetzererkennung Zyl.7 |
| 0x2749 | CDKMD07 - Aussetzererkennung Zyl.2 |
| 0x274E | CDKMD - Aussetzererkennung, Summenfehler |
| 0x2753 | CDKDZKU0 - Ueberwachung Zuender 1 |
| 0x2754 | CDKDZKU1 - Ueberwachung Zuender 5 |
| 0x2755 | CDKDZKU2 - Ueberwachung Zuender 4 |
| 0x2756 | CDKDZKU3 - Ueberwachung Zuender 8 |
| 0x2757 | CDKDZKU4 - Ueberwachung Zuender 6 |
| 0x2758 | CDKDZKU5 - Ueberwachung Zuender 3 |
| 0x2759 | CDKDZKU6 - Ueberwachung Zuender 7 |
| 0x275A | CDKDZKU7 - Ueberwachung Zuender 2 |
| 0x2760 | CDKSLS - Sekundaerluftsystem |
| 0x2761 | CDKSLS2 - Sekundaerluftsystem Bank2 |
| 0x2762 | CDKSLV - Sekundaerluftventil |
| 0x2763 | CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2764 | CDKSLPE - Ansteuerung Relais Sekundaerluftpumpe |
| 0x2765 | CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2769 | CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276B | CDKSLVE2 - Ansteuerung Sekundaerluftventil Bank2 |
| 0x276D | CDKTES - Tankentlueftung functional check |
| 0x276E | CDKTES2 - Tankentlueftung funktional check Bank2 |
| 0x2772 | CDKTEVE - Ansteuerung Tankentlueftungsventil |
| 0x2773 | CDKTEVE2 - Ansteuerung Tankentlueftungsventil Bank2 |
| 0x2775 | CDKUFMV - Motormomentueberwachung Ebene 2 |
| 0x2776 | CDKMFL - Schnittstelle MFL |
| 0x2777 | CDKUFSKA - Ueberwachung Rechnerfunktion |
| 0x2778 | CDKKUPPL - Schalter Kupplung |
| 0x2779 | CDKURRAM - SG Selbsttest RAM |
| 0x277A | CDKBREMS - Schalter Bremse |
| 0x277B | CDKURROM - SG Selbsttest ROM |
| 0x277C | CDKURRST - SG Selbsttest RESET |
| 0x277D | CDKUB - Batteriespannung |
| 0x277E | CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x277F | CDKN - Kurbelwellengeber |
| 0x2780 | CDKBM - Bezugsmarkengeber |
| 0x2781 | CDKPH - Nockenwellengeber Einlass |
| 0x2782 | CDKPH2 - Nockenwellengeber Auslass |
| 0x2783 | CDKLM - Heissfilmluftmassenmesser |
| 0x2785 | CDKDK - DK-Potentiometer |
| 0x2786 | CDKDK1P - Drosselklappenpoti 1 |
| 0x2787 | CDKDK2P - Drosselklappenpoti 2 |
| 0x2788 | CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x2789 | CDKSWE - Schlechtwegstreckenerkennung |
| 0x278A | CDKTUM - Umgebungstemperatur |
| 0x278B | CDKTM - Motortemperatur |
| 0x278C | CDKTA - Ansauglufttemperatur |
| 0x278D | CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x278F | CDKGLOR - LowRange Signal unplausibel |
| 0x2790 | CDKTGET - Getriebetemperatur |
| 0x2791 | CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | CDKDVEL - DK Positionsueberwachung |
| 0x2793 | CDKDVER - DK-Steller Regelbereich |
| 0x2794 | CDKDVEE - DK-Steller Ansteuerung |
| 0x2795 | CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | CDKDVEU - Pruefung unterer Anschlag |
| 0x2797 | CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | CDKTHS - Thermostat klemmt |
| 0x279C | CDKETS - Ansteuerung Thermostat Kennfeldkuehlung |
| 0x279D | CDKMLE - Ansteuerung Motorluefter |
| 0x279E | CDKAKRE - Ansteuerung Abgasklappe |
| 0x279F | CDKLUEA - Ansteuerung LuefterA |
| 0x27A0 | CDKELS - Ansteuerung E-Box Luefter |
| 0x27A4 | CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x27A6 | CDKEV1 - Ansteuerung EV1 |
| 0x27A7 | CDKEV2 - Ansteuerung EV5 |
| 0x27A8 | CDKEV3 - Ansteuerung EV4 |
| 0x27A9 | CDKEV4 - Ansteuerung EV8 |
| 0x27AA | CDKEV5 - Ansteuerung EV6 |
| 0x27AB | CDKEV6 - Ansteuerung EV3 |
| 0x27AC | CDKEV7 - Ansteuerung EV7 |
| 0x27AD | CDKEV8 - Ansteuerung EV2 |
| 0x27B3 | CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | CDKDSU - Drucksensor Umgebung |
| 0x27B5 | CDKENWSE - Ansteuerung Einlass-VANOS |
| 0x27B6 | CDKENWSE2 - Ansteuerung Einlass-VANOS Bank2 |
| 0x27B7 | CDKKPE - Ansteuerung Kraftstoffpumpen-Relais |
| 0x27B8 | CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27BB | CDKANWS - Nockenwellensteuerung Auslass-VANOS0 |
| 0x27BC | CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x27BD | CDKANWSE - Ansteuerung Auslass-VANOS |
| 0x27BE | CDKANWSE2 - Ansteuerung Auslass-VANOS Bank2 |
| 0x27BF | CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x27C0 | CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x27C1 | CDKPHM - Master Nockenwellengeber |
| 0x27C2 | CDKKOSE - Ansteuerung Klimakompressorsteuerung |
| 0x27C3 | CDKTOENS - Fehler Oelniveausensor |
| 0x27C8 | CDKCFC - Check Filler Cap |
| 0x27CA | CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | CDKDMTKNM - DM-TL Feinstleck (0,5mm) MIL aus |
| 0x27CC | CDKDMTK - DM-TL Feinleck |
| 0x27CE | CDKUFRLIP - Lastsensorueberwachung |
| 0x27CD | CDKDMTL - DM-TL Modul |
| 0x27D5 | CDKLLR - Leerlaufregelung fehlerhaft |
| 0x27D9 | CDKDHDMTE - Ansteuerung DM-TL Heizung |
| 0x27DA | CDKDGEN - Generatorfehler |
| 0x27DC | CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x27E1 | CDKUFSPSC - Pedalwertgeberueberwachung |
| 0x27E2 | CDKKS1 - Klopfsensor1 |
| 0x27E3 | CDKKS2 - Klopfsensor2 |
| 0x27E4 | CDKKS3 - Klopfsensor3 |
| 0x27E5 | CDKKS4 - Klopfsensor4 |
| 0x27E6 | CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | CDKKROF - Klopfregelung Offset |
| 0x27E8 | CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | CDKCHDEV - CAN-Timeout HDEV |
| 0x27EB | CDKCTXU - CAN-Timeout TXU |
| 0x27EC | CDKCGE - CAN EGS Signalfehler |
| 0x27ED | CDKCAS - CAN ASC/DSC Signalfehler |
| 0x27EE | CDKCINS - CAN Instrumentenkombination Signalfehler |
| 0x27EF | CDKCACC - CAN ACC Signalfehler |
| 0x27F0 | CDKAS - Plausibilitaet MSR-Eingriff |
| 0x27F1 | CDKACC - Plausibilitaet ACC-Eingriff |
| 0x27F2 | CDKFST - Plausibilitaet Tankfuellstand |
| 0x27F3 | CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F5 | CDKCDME - CAN-Timeout DME-Steuergeraet |
| 0x27F6 | CDKFPP - Pedalwertgeber |
| 0x27F7 | CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | CDKFP2P - Pedalwertgeber Poti2 |
| 0x27F9 | CDKSTAE - Startautomatik Ansteuerung |
| 0x27FA | CDKSTS - Startautomatik Eingang |
| 0x27FB | CDKGLFE - Ansteuerung gesteuerte Luftfuehrung |
| 0x27FD | CDKSTA - Startautomatik |
| 0x27FE | CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x280A | CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x2812 | CDKTOL - Oeltemperatur |
| 0x2813 | CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | CDKUFNC - Motordrehzahlueberwachung |
| 0x2818 | CDKULSU - Spannungsueberwachung Sonde an Luft |
| 0x281D | CDKBSD - BSD-Leitungsfehler |
| 0x281E | CDKSUE - Ansteuerung DISA |
| 0x281F | CDKULSU2 - Spannungsueberwachung Sonde an Luft Bank2 |
| 0x2820 | CDKDISA - Fehler DISA |
| 0x2821 | CDKDISAT - DISA Temperaturwarnschwelle Motorschutzmodell |
| 0x2822 | CDKMTOEL - Zwangsschaltung EGS |
| 0x2823 | CDKHSVSA - Heizung Lambdasonde vor Kat (im Schub) |
| 0x2824 | CDKHSVSA2 - Heizung Lambdasonde vor Kat (im Schub) Bank2 |
| 0x2825 | CDKLAVH - Lambdasondenalterung hinter Kat |
| 0x2827 | CDKHELSU - Heizereinkopplung auf Signalpfad |
| 0x2828 | CDKCARS - CAN ARS Signalfehler |
| 0x2829 | CDKCCAS - CAN CAS Signalfehler |
| 0x282A | CDKCIHKA - CAN IHKA Signalfehler |
| 0x282B | CDKCPWML - CAN PWML Signalfehler |
| 0x282C | CDKCSZL - CAN SZL Signalfehler |
| 0x282D | CDKHELSU2 - Heizereinkopplung auf Signalpfad Bank2 |
| 0x282E | CDKBWL - PWG-Bewegung |
| 0x2830 | CDKLAVH2 - Lambdasondenalterung hinter Kat Bank2 |
| 0x2832 | CDKPLLSU2 - Plausibilitaetsdiagnose LSU durch LSH Nachkat B2 |
| 0x2833 | CDKICLSU2 - Eigendiagnose CJ125 SPI Kommunikation Bank2 |
| 0x2834 | CDKLSUIP2 - Leitungsunterbrechung an Pumpstrom Bank2 |
| 0x2835 | CDKLSUKS2 - Kurzschluss Sondenleitungen gegen Masse o. Ub B2 |
| 0x2836 | CDKDYLSU2 - LSU dynamisch zu langsam Bank2 |
| 0x283A | CDKOEZS - Fehler Oelqualitaetssensor |
| 0x283E | CDKVVTE - VVT-Enable-Leitung Ansteuerung |
| 0x283F | CDKPOELS - Plausibilitaet Oeldruckschalter |
| 0x2841 | CDKLUVE - Luftumfasste Einspritzventile Ansteuerung |
| 0x2843 | CDKPLLSU - Plausibilitaetsdiagnose LSU durch LSH Nachkat |
| 0x2844 | CDKICLSU - Eigendiagnose CJ125 SPI Kommunikation |
| 0x2849 | CDKLSUIP - Leitungsunterbrechung an Pumpstrom |
| 0x284A | CDKLSUKS - Kurzschluss Sondenleitungen gegen Masse oder Ub |
| 0x284C | CDKDYLSU - LSU dynamisch zu langsam |
| 0x284F | CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft |
| 0x2850 | CDKDVFFS - VVT-Fuehrungssensor |
| 0x2851 | CDKDVFFS2 - VVT-Fuehrungssensor (Bank2) |
| 0x2852 | CDKDVFRS - VVT-Referenzsensor |
| 0x2853 | CDKDVFRS2 - VVT-Referenzsensor (Bank2) |
| 0x2854 | CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x2855 | CDKDVPLA2 - VVT-Sensorplausibilisierung (Bank2) |
| 0x2856 | CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x2857 | CDKDVUSE2 - VVT-Versorgungsspannung Sensor (Bank2) |
| 0x2858 | CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x2859 | CDKDVLRN2 - VVT-Lernfunktion Anschlag (Bank2) |
| 0x285A | CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x285B | CDKDVSTE2 - VVT-Stellgliedueberwachung (Bank2) |
| 0x285C | CDKDVCAN - VVT-CAN-Kommunikation |
| 0x285D | CDKDVCAN2 - VVT-CAN-Kommunikation (Bank2) |
| 0x285E | CDKDVFSG - VVT-Steuergeraet interner Fehler |
| 0x285F | CDKDVFSG2 - VVT-Steuergeraet interner Fehler (Bank2) |
| 0x2860 | CDKDVEST - VVT-Endstufe |
| 0x2861 | CDKDVEST2 - VVT-Endstufe (Bank2) |
| 0x2862 | CDKDVULV - VVT-Leistungsversorgung |
| 0x2863 | CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x2864 | CDKDPMEE - DM-TL-Pumpe Ansteuerungsfehler |
| 0x2865 | CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | CDKDVAN - VVT-Anschlaege lernen notwendig |
| 0x2867 | CDKDVOVL - VVT-Systemueberlast |
| 0x2868 | CDKDVOVL2 - VVT-Systemueberlast Bank2 |
| 0x287C | CDKDSS - Drucksensor Saugrohr |
| 0x2880 | CDKAGRS - AGR System |
| 0x2889 | CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x28C8 | CDKFRST - LR-Abweichung |
| 0x28C9 | CDKFRST2 - LR-Abweichung Bank2 |
| 0x28D2 | CDKDSL - Drucksensor Ladedruck |
| 0x28D3 | CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x28D4 | CDKLDE - Ladedrucksteuerventil Ansteuerung |
| 0x28D5 | CDKUVSE - Ansteuerung Umluftventil Turbo |
| 0x28D6 | CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | CDKDGENBS - Generatorkommunikation |
| 0x28D8 | CDKNVRBUR - Bordnetzabschaltung, Fehlerspeicher gelöscht |
| 0x28DB | CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x28DC | CDKDGENB2 - Generator 2 Kommunikation |
| 0x2908 | CDKCDSC - CAN Timeout DSG SG |
| 0x2909 | CDKCEGS - CAN Timeout Getriebesteuergeraet |
| 0x290A | CDKAFS - Active Front Steering Moment |
| 0x292B | CDKLSUIA - LSU Abgleichsleitung |
| 0x292C | CDKLSUIA2 - LSU Abgleichsleitung Bank2 |
| 0x292D | CDKLSUUN - LSU Nernst Zelle Unterbrechung |
| 0x292E | CDKLSUUN2 - LSU Nernst Zelle Unterbrechung Bank2 |
| 0x2930 | CDKLSUVM - LSU virtuelle Masse Unterbrechung |
| 0x2931 | CDKLSUVM2 - LSU virtuelle Masse Unterbrechung Bank2 |
| 0x297D | CDKCSSG - CAN SSG Signalfehler |
| 0x2981 | CDKGLFE - Ansteuerung gesteuerte Luftfuehrung |
| 0x290A | CDKAFS - Active Front Steering Moment |
| 0x299B | CDKDIBS1 - IBS BSD Fehler #1 |
| 0x299C | CDKDIBS2 - IBS BSD Fehler #2 |
| 0x299D | CDKDIBS3 - IBS BSD Fehler #3 |
| 0x29A8 | CDKPMBN - Powermanagement Netzwerkfehler |
| 0x29A9 | CDKPMBATT - Powermanagement |
| 0x29AE | CDKTESG - Tankentlüftungssystem Grobleck |
| 0xCD87 | CDKCANA - PT - CAN Bus Off |
| 0xCD8B | CDKCANB - Local CAN Bus Off |
| 0xCD9B | CDKX315 - Status Fahrzeugmodus |
| 0xCDA1 | CDKXC4 - Lenkradwinkel |
| 0xCDA7 | CDKX3B0 - Status Gang Rückwärts |
| 0xCDAA | CDKX135 - Steuerung Crashabschaltung EKP |
| 0x4327 | 4327 Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4328 | 4328 Botschaft (DREHMOMENT_ANF_SSG, 0xBD) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4332 | 4332 Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4333 | 4333 Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4335 | 4335 Kuehlerjalousie |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4336 | 4336 Kuehlerjalousie |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4337 | 4337 Kuehlerjalousie |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4338 | 4338 Kuehlerjalousie |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4340 | 4340 Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4351 | 4351 (145) Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4360 | 4360 Stromregelung fuer Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4361 | 4361 Stromregelung fuer Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4362 | 4362 Stromregelung fuer Raildruckregelventil |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4378 | 4378 Raildruckregelventil Test (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4382 | 4382 Raildruckregelventil Stellertest |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xED |
| 0x4390 | 4390 (4678) Ladelufttemperatursensor |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4391 | 4391 (4677) Ladelufttemperatursensor |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4392 | 4392 Ladelufttemperatursensor |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4397 | 4397 Mengenregelventil Stellertest |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xEC |
| 0x43A0 | 43A0 Anlasssperr-Relais |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43A1 | 43A1 Anlasssperr-Relais |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43A2 | 43A2 Anlasssperr-Relais |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43A3 | 43A3 Anlasssperr-Relais |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43B0 | 43B0 Power Stage fault status for System lamp (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43B1 | 43B1 Power Stage fault status for System lamp (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43B2 | 43B2 Power Stage fault status for System lamp (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43B3 | 43B3 Power Stage fault status for System lamp (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x43C0 | 43C0 Drosselklappe |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xEA |
| 0x43D1 | 43D1 Drosselklappe |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xEA |
| 0x43E2 | 43E2 Drosselklappe |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xEA |
| 0x43E3 | 43E3 Drosselklappe |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xEA |
| 0x43F0 | 43F0 Elektrischer Zuheizer |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE9 |
| 0x43F1 | 43F1 Elektrischer Zuheizer |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE9 |
| 0x43F2 | 43F2 Elektrischer Zuheizer |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE9 |
| 0x43F3 | 43F3 Elektrischer Zuheizer |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE9 |
| 0x4403 | 4403 Steuergeraet intern 17 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x73 |
| 0x4410 | 4410 Injektor Zylinder 1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4411 | 4411 Injektor Zylinder 1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4412 | 4412 Injektor Zylinder 1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4413 | 4413 Injektor Zylinder 1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x441A | 441A Injektor Zylinder 1_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x441B | 441B Injektor Zylinder 1_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x441C | 441C (513) Injektor Zylinder 1_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x441D | 441D Injektor Zylinder 1_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4420 | 4420 Injektor Zylinder 2 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4421 | 4421 Injektor Zylinder 2 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4422 | 4422 Injektor Zylinder 2 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4423 | 4423 Injektor Zylinder 2 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x442A | 442A Injektor Zylinder 2_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x442B | 442B Injektor Zylinder 2_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x442C | 442C (514) Injektor Zylinder 2_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x442D | 442D Injektor Zylinder 2_1 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4430 | 4430 Injektor Zylinder 3 |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4B22 | 4B22 Elektroluefter |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE8 |
| 0x4B32 | 4B32 Elektroluefter 2 (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE8 |
| 0x4B42 | 4B42 Elektroluefter 3 (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0xE8 |
| 0x4B50 | 4B50 Mengenabgleich |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4B60 | 4B60 Mengendriftkompensation |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4B80 | 4B80 Raildruck-Plausibilitaet mengengeregelt (nv) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0xC3 |
| 0x32 | 0xEC |
| 0x4B90 | 4B90 Raildruckueberwachung bei Motorstart |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x81 |
| 0x4BA0 | 4BA0 (275) Ansauglufttemperatursensor |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BA1 | 4BA1 (274) Ansauglufttemperatursensor |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BB0 | 4BB0 (12905) Versorgungsspannung Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BB1 | 4BB1 (12912) Versorgungsspannung Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BB5 | 4BB5 (12915) Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BB6 | 4BB6 (12916) Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BC0 | 4BC0 (258) Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BC1 | 4BC1 (259) Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BC2 | 4BC2 (257) Luftmassenmesser |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BC5 | 4BC5 Ansauglufttemperatursensor (Referenzsignal fuer Luftmassenmesser) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BC6 | 4BC6 Ansauglufttemperatursensor (Referenzsignal fuer Luftmassenmesser) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BC7 | 4BC7 Ansauglufttemperatursensor (Referenzsignal fuer Luftmassenmesser) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x38 | 0x6E |
| 0x4BD2 | 4BD2 Drehmomentanforderung ARS |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BD5 | 4BD5 Motorlager |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BD6 | 4BD6 Motorlager |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BD7 | 4BD7 Motorlager |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BD8 | 4BD8 Motorlager |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BE2 | 4BE2 Botschaft (GEARBX_DATA, 0xBA) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BE3 | 4BE3 Botschaft (GEARBX_DATA, 0xBA) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BE7 | 4BE7 Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BE8 | 4BE8 Botschaft (GEARBX_DATA2, 0x1A2) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BF2 | 4BF2 Botschaft (HEAT_AC, 0x1B5) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BF3 | 4BF3 Botschaft (HEAT_AC, 0x1B5) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BF7 | 4BF7 Botschaft (MILEAGE_RANGE, 0x330) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4BF8 | 4BF8 Botschaft (MILEAGE_RANGE, 0x330) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C00 | 4C00 Botschaft (OP_CRCTLACC, 0x194) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C01 | 4C01 Botschaft (OP_CRCTLACC, 0x194) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C02 | 4C02 Botschaft (OP_CRCTLACC, 0x194) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C03 | 4C03 Botschaft (OP_CRCTLACC, 0x194) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C06 | 4C06 Botschaft (STAT_ARS, 0x1AC) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C07 | 4C07 Botschaft (STAT_ARS, 0x1AC) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C08 | 4C08 Botschaft (STAT_ARS, 0x1AC) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C12 | 4C12 Botschaft (STAT_DSC, 0x19E) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C13 | 4C13 Botschaft (STAT_DSC, 0x19E) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C15 | 4C15 Botschaft (TERMINAL, 0x130) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C16 | 4C16 Botschaft (TERMINAL, 0x130) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C17 | 4C17 Botschaft (TERMINAL, 0x130) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C18 | 4C18 Botschaft (TERMINAL, 0x130) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C20 | 4C20 Botschaft (TORQUE_DSC, 0xB6) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C21 | 4C21 Botschaft (TORQUE_DSC, 0xB6) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C22 | 4C22 Botschaft (TORQUE_DSC, 0xB6) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C23 | 4C23 Botschaft (TORQUE_DSC, 0xB6) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C27 | 4C27 Botschaft (VELOCITY, 0x1A0) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C28 | 4C28 Botschaft (VELOCITY, 0x1A0) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C40 | 4C40 Partikelfilterheizung |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C41 | 4C41 Partikelfilterheizung |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C42 | 4C42 Partikelfilterheizung |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C43 | 4C43 Partikelfilterheizung |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4C71 | 4C71 fault path for the additive tank component driver |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4CE0 | 4CE0 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4CF3 | 4CF3 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D00 | 4D00 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D01 | 4D01 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D03 | 4D03 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D13 | 4D13 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D23 | 4D23 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D40 | 4D40 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4D73 | 4D73 Partikelfiltersystem |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4DF0 | 4DF0 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4DF1 | 4DF1 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4DF2 | 4DF2 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0x4DF3 | 4DF3 Botschaft (TORQUE_GEARBX, 0xB5) |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0xCD87 | CD87 CAN Bus A |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0xCD8B | CD8B (12802) CAN Bus B |
| 0x2D | 0x2C |
| 0xC2 | 0x59 |
| 0x50 | 0x3A |
| 0x48 | 0x2F |
| 0x32 | 0x6E |
| 0xFFFF | unbekannter Fehlerort |

### DME2_DDE2

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### EGS_SMG

| ORT | ORTTEXT |
| --- | --- |
| 0x4E20 | Proportionalventil Gangwahl EV1 |
| 0x4E21 | Proportionalventil Gangwahl EV2 |
| 0x4E26 | Proportionalventil Kupplung |
| 0x4E8E | Fehler Shiftlock |
| 0x4E90 | Magnetventil Waehlwinkelbremse |
| 0x4E91 | Relais Hydraulikpumpe |
| 0x4E92 | Ansteuerung Rückfahrlicht |
| 0x4EF4 | Sensor Waehlweg |
| 0x4EF5 | Sensor Waehlwinkel |
| 0x4EF6 | Sensor Kupplungsweg |
| 0x4EF7 | Drucksensor Hydraulik |
| 0x4EF8 | Motordrehzahl festverdrahtet |
| 0x4EF9 | Sensor Kupplungsdrehzahl |
| 0x4F6C | Fehler Getriebe/Kupplung |
| 0x4F6D | Uebertemperatur Kupplung |
| 0x4F6E | Hydraulikdruck zu niedrig |
| 0x4F6F | Fehler Hydraulikpumpe |
| 0x4F72 | Fehler Kupplung |
| 0x4F73 | Fehler Getriebe, Gangauslegen fehlgeschlagen |
| 0x4F74 | Fehler Getriebe, Gang unbeabsichtigt ausgelegt |
| 0x4F75 | Fehler Getriebe, Gangeinlegen/schalten fehlerhaft oder nicht moeglich |
| 0x4F76 | Fehler Kupplung, Drehzahl zu hoch |
| 0x4FB0 | Interner Fehler ROM |
| 0x4FB1 | Interner Fehler EEPROM |
| 0x4FB2 | Fehler Ueberwachungsprozessor |
| 0x4FB3 | Interner Fehler RAM |
| 0x4FB4 | Fehler Hauptprozessor: Sicherheitsueberwachung |
| 0x4FB5 | Fehler Hauptprozessor: AD Wandler |
| 0x4FB6 | Fehler Stromversorgung Klemme 30 |
| 0x5014 | Batteriespannung |
| 0x5016 | Spannungsversorgung Sensoren |
| 0x5017 | Stromversorgung Waehlhebel |
| 0x5018 | Masse Waehlhebel |
| 0x5019 | Masse Steuergeraet |
| 0x507E | Analogleitungen Nr. 0 Waehlhebel |
| 0x507F | Analogleitungen Nr. 1 Waehlhebel |
| 0x5080 | Analogleitungen Nr. 2 Waehlhebel |
| 0x5081 | Analogleitungen Nr. 3 Waehlhebel |
| 0x5082 | Lenkradschaltung |
| 0x5083 | Digitalleitung Waehlhebel |
| 0x5084 | Hallsensoren Waehlhebel Einfachfehler |
| 0x5085 | Hallsensoren Waehlhebel Mehrfachfehler |
| 0x5086 | Anlassfreigabesignal fehlerhaft |
| 0x50DE | Doppelfehler Motordrehzahlsignal |
| 0x5140 | DME CAN Timeout |
| 0x5141 | ASC/DSC CAN Timeout |
| 0x5142 | Kombi CAN Timeout |
| 0x51A5 | CAN Motormoment |
| 0x51A7 | CAN Motordrehzahl |
| 0x51A8 | CAN Fahrpedal |
| 0x51A9 | CAN Kuehlwassertemperatur Motor |
| 0x51AD | Raddrehzahlen |
| 0x51AE | CAN Bremslichtschalter |
| 0x51B0 | Raddrehzahlen Vorderachse |
| 0x51B1 | Raddrehzahlen Hinterachse |
| 0x51B2 | CAN Virtuelles Fahrpedal |
| 0x51B3 | CAN Oeltemperatur Motor |
| 0x51B4 | CAN Aussentemperatur |
| 0x51B5 | CAN Bremssignal inkonsistent mit festverdrahteten Signal |
| 0x51B6 | CAN Fehler Motoreingriff |
| 0xCF07 | Fehler CAN Controller |
| 0x1001 | Fehler a |
| 0x1002 | Fehler b |
| 0x1003 | Fehler c |
| 0x1004 | Fehler d |
| 0x1005 | Fehler e |
| 0x1006 | Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### EDC_K

| ORT | ORTTEXT |
| --- | --- |
| 0x5FCC | Beschl.-Signal vorne links zu klein |
| 0x5FCD | Beschl.-Signal vorne links zu gross |
| 0x5FCE | Beschl.-Signal vorne links unplausibel |
| 0x5FD0 | Beschl.-Signal vorne rechts zu klein |
| 0x5FD1 | Beschl.-Signal vorne rechts zu gross |
| 0x5FD2 | Beschl.-Signal vorne rechts unplausibel |
| 0x5FD4 | Beschl.-Signal hinten rechts zu klein |
| 0x5FD5 | Beschl.-Signal hinten rechts zu gross |
| 0x5FD6 | Beschl.-Signal hinten rechts unplausibel |
| 0x5FD8 | Beschl.-Signale allgemein unplausibel |
| 0x5FE1 | maximaler Lenkwinkel-Korrekturwert ueberschritten |
| 0x5FE2 | CAN Bus off (bis VS2) |
| 0x5FE4 | Ventile vorne Ueberstrom |
| 0x5FE5 | Ventile hinten Ueberstrom |
| 0x5FE6 | Ventilfehler Vorderachse |
| 0x5FE7 | Ventilfehler Hinterachse |
| 0x5FE8 | harter Kurzschluss Ventile Vorderachse |
| 0x5FE9 | harter Kurzschluss Ventile Hinterachse |
| 0x5FF0 | CAN-Fahrzeuggeschwindigkeit: Timeout oder ungueltig |
| 0x5FF1 | analog Radgeschwindigkeit links: Abweichung zu gross |
| 0x5FF2 | analog Radgeschwindigkeit rechts: Abweichung zu gross |
| 0x5FF3 | CAN-Radgeschwindigkeit vorne links: Abweichung zu gross |
| 0x5FF4 | CAN-Radgeschwindigkeit vorne rechts: Abweichung zu gross |
| 0x5FF5 | CAN-Aussentemperatur: Timeout oder ungueltig |
| 0x5FF6 | CAN-Kilometerstand: Timeout oder ungueltig |
| 0x5FF7 | CAN-Lenkwinkel: Timeout oder ungueltig |
| 0x5FF8 | CAN-Radgeschwindigkeiten: Timeout oder ungueltig |
| 0x5FF9 | EDCK nicht kodiert |
| 0x5FFA | Versorgungsspannung Beschl.-Sensoren: Abweichung zu gross |
| 0x5FFB | Abweichung Klemme EDC zu gross |
| 0x5FFC | Abweichung Klemme 30 zu gross |
| 0x5FFD | Abweichung WakeUp-Leitung zu gross |
| 0x6004 | EDCK-SW im Entwicklermodus |
| 0x600A | EEPROM-Fehler |
| 0xD747 | CAN Bus off |
| 0xFFFF | unbekannter Fehlerort |

### M_ASK_CCC

| ORT | ORTTEXT |
| --- | --- |
| 0xE1CC | Ein Device hat eine Monitor Nachricht nicht bekommen oder beantwortet (Error_Monitoring). |
| 0xE1CD | Gesamtring konnte nicht aufgestartet werden (Error_WakeUp_Failed). |
| 0xE1CE | Kernring konnte nicht aufgestartet werden |
| 0xE1CF | Ein Device hat nach Licht aus am Eingang nicht mit Licht aus am Ausgang reagiert. |
| 0xE1D0 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE1D1 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE1D2 | Shutdown wegen Uebertemperatur (Error_Tempshutdown). |
| 0xA3DE | Video In defect |
| 0xA16C | Physikalischer Bus Fehler |
| 0xA170 | Data Carrier Termination fehlt (CAN Bus) |
| 0xA175 | Lautsprecher nicht verbunden |
| 0xA179 | Fehler 0xA179 |
| 0xA17A | Fehler 0xA17A |
| 0xA17B | Fehler 0xA17B |
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
| 0xA187 | Fehler 0xA187 |
| 0xE18C | Ein Device hat eine Monitor Nachricht nicht bekommen oder beantwortet (Error_Monitoring). |
| 0xE18D | Gesamtring konnte nicht aufgestartet werden (Error_WakeUp_Failed). |
| 0xE18E | Kernring konnte nicht aufgestartet werden |
| 0xE18F | Ein Device hat nach Licht aus am Eingang nicht mit Licht aus am Ausgang reagiert. |
| 0xE190 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | Shutdown wegen Uebertemperatur (Error_Tempshutdown). |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA3C8 | Checksum Error |
| 0xA3C9 | Illegaler Speicher Zugriff |
| 0xA3CA | Illegaler Resourcen Zugriff |
| 0xA3CB | Timelimit Exeeded |
| 0xA3CC | Detected Software Exception |
| 0xA3CD | OS-Fehler |
| 0xA3CE | CD/MD Drive errors |
| 0xA3CF | DVD Drive errors |
| 0xA3D0 | No CAN connection to Tuner |
| 0xA3D1 | No CAN connection to ASK |
| 0xA3D2 | No CAN Connection to LVDS |
| 0xA3D3 | No connection UART to Nav |
| 0xA3D4 | No CAN Connection to Rear Seat LVDS |
| 0xA3D5 | No connection between companion chip and CAN transceiver |
| 0xA3D6 | No connection between companion chip and I/O expander |
| 0xA3D7 | No connection companion chip to Video Out |
| 0xA3D8 | Deviation SH4 clock from real time clock |
| 0xA3D9 | Deviation PCI clock from real time clock |
| 0xA3DA | Defects in SDRAM |
| 0xA3DB | Defects in ext. SDRAM |
| 0xA3DC | Defects in NAND flash |
| 0xA3DD | Wrong FIB checksum |
| 0xA3DF | No Connection I2S Speech Out - DSP (ASK) -Speech In |
| 0xA168 | EEPROM does not respond |
| 0xA169 | OLIC does not respond |
| 0xA16A | TDA7563 does not respond |
| 0xA16B | Power Source Supply |
| 0xA16C | Illumination ext failed |
| 0xA16D | Temp. out of range (MOST-FOT,PWB) |
| 0xA16E | Loudspeaker not OK |
| 0xA16F | K-CAN Test not OK |
| 0xA170 | RAD_ON Signal (for ext.Ampl.) failed |
| 0xA171 | Wrong Checksum Eeprom |
| 0xA172 | Wrong Checksum ext.Flash |
| 0xA173 | CAN Transceiver not working |
| 0xA174 | Connection SPI to MOST Transc. NOK |
| 0xA175 | Connection I2S DSP-GW-DSP not OK (unp.) |
| 0xA176 | Connection I2S DSP-GW-DSP not OK (p.) |
| 0xA177 | Function of ext. Fan failed |
| 0xA178 | Temperatur Sensor Fehler |
| 0xA179 | Ueber-/Unterspannung interne Spannung |
| 0xA17A | I2C-Amplifier Output |
| 0xFFFF | unbekannter Fehlerort |

### WUP_ID

| WUP_ID | TEL_NAME | SENDER |
| --- | --- | --- |
| 168 | Drehmoment 1 K-CAN [8] | (PT-CAN über ZGM) |
| 170 | Drehmoment 3 K-CAN [8] | (PT-CAN über ZGM) |
| 174 | Verzögerungsanforderung EMF K-CAN [2] | (PT-CAN über ZGM) |
| 190 | Alive Zähler (10) | (PT-CAN über ZGM) |
| 192 | Alive Zentrales Gateway [1] | SGM_ZGM (6) |
| 193 | Alive Zähler Telefon [2] | (PT-CAN über ZGM) |
| 196 | Lenkradwinkel K-CAN (12) | (PT-CAN über ZGM) |
| 200 | Lenkradwinkel Oben K-CAN [4] | (PT-CAN über ZGM) |
| 206 | Radgeschwindigkeit K-CAN (3) | (PT-CAN über ZGM) |
| 210 | Bedienung Sitzverstellung BF [6] | SZM (8), SZM_MIT_KBUS (6) |
| 211 | Fernbedienung Sitzverstellung BF [2] | (PT-CAN über ZGM) |
| 218 | Bedienung Sitzverstellung FA [6] | SZM (8), SZM_MIT_KBUS (6) |
| 226 | Status Zentralverriegelung BFT [8] | (PT-CAN über ZGM) |
| 230 | Status Zentralverriegelung BFTH [9] | KBM (7) |
| 234 | Status Zentralverriegelung FAT [8] | (PT-CAN über ZGM) |
| 238 | Status Zentralverriegelung FATH [9] | KBM (7) |
| 242 | Status Zentralverriegelung HK [10] | KBM (7) |
| 246 | Steuerung Außenspiegel [7] | (PT-CAN über ZGM) |
| 250 | Steuerung Fensterheber FAT [8] | (PT-CAN über ZGM) |
| 251 | Steuerung Fensterheber BFT [4] | (PT-CAN über ZGM) |
| 252 | Steuerung Fensterheber FATH [4] | KBM (7) |
| 253 | Steuerung Fensterheber BFTH [4] | KBM (7) |
| 304 | Klemmenstatus [14] | CAS (29) |
| 309 | Steuerung Crashabschaltung EKP [1] | (PT-CAN über ZGM) |
| 370 | Quittierung Anforderung Kombi [1] | M_ASK (12), CCC_GW (12) |
| 372 | Challenge/Response CAS->DME [6] | CAS (29) |
| 400 | Anzeige ACC [13] | (PT-CAN über ZGM) |
| 412 | Challenge/Response DME1->CAS [5] | (PT-CAN über ZGM) |
| 414 | Status DSC K-CAN (16) | (PT-CAN über ZGM) |
| 416 | Geschwindigkeit K-CAN (12) | (PT-CAN über ZGM) |
| 422 | Wegstrecke (6) | (PT-CAN über ZGM) |
| 426 | Effekt ErgoCommander [8] | M_ASK (12), CCC_GW (12) |
| 436 | Status Kombi (11) | Kombi (42) |
| 437 | Wärmestrom/Lastmoment Klima [11] | IHKA (29) |
| 438 | Wärmestrom Motor [10] | (PT-CAN über ZGM) |
| 440 | Bedienung ErgoCommander [3] | ZBE (18), ZBE_LO (7) |
| 448 | Bedienung FondCommander [2] | (PT-CAN über ZGM) |
| 450 | Abstandsmeldung PDC [5] | PDC (23) |
| 451 | Abstandsmeldung 2 PDC [2] | PDC (23) |
| 454 | Akustikmeldung PDC [5] | PDC (23) |
| 460 | Bedienung Lautstärke FondCommander [6] | (PT-CAN über ZGM) |
| 464 | Motordaten [11] | (PT-CAN über ZGM) |
| 466 | Anzeige Getriebedaten [17] | (PT-CAN über ZGM) |
| 470 | Bedienung Taster Audio/Telefon [7] | (PT-CAN über ZGM) |
| 472 | Bedienung Klima Luftverteilung FA (10) | M_ASK (12), CCC_GW (12) |
| 474 | Bedienung Klima Fernwirken [4] | CAS (29) |
| 476 | Bedienung Schichtung Sitzheizung [1] | M_ASK (12), CCC_GW (12) |
| 480 | Bedienung Klima Luftverteilung BF [4] | M_ASK (12), CCC_GW (12) |
| 482 | Bedienung Klima Front [7] | M_ASK (12), CCC_GW (12) |
| 487 | Bedienung Sitzheizung/Sitzklima FA [4] | SZM (8), SZM_MIT_KBUS (6) |
| 488 | Bedienung Sitzheizung/Sitzklima BF [4] | SZM (8), SZM_MIT_KBUS (6) |
| 490 | Bedienung Lenksäulenverstellung [5] | (PT-CAN über ZGM) |
| 491 | Bedienung Aktivsitz FA [3] | SZM (8), SZM_MIT_KBUS (6) |
| 492 | Bedienung Aktivsitz BF [3] | SZM (8), SZM_MIT_KBUS (6) |
| 493 | Bedienung Lehnenbreitenverstellung Aktiv FA [1] | SZM (8), SZM_MIT_KBUS (6) |
| 494 | Bedienung Lenkstockstaster [6] | (PT-CAN über ZGM) |
| 495 | Bedienung Lehnenbreitenverstellung Aktiv BF [1] | SZM (8), SZM_MIT_KBUS (6) |
| 498 | Bedienung Sitzmemory BF [3] | SZM (8), SZM_MIT_KBUS (6) |
| 499 | Bedienung Sitzmemory FA [4] | SZM (8), SZM_MIT_KBUS (6) |
| 500 | Fernbedienung Sitzmemory BF [2] | (PT-CAN über ZGM) |
| 502 | Blinken [6] | LM (21) |
| 504 | Bedienung SHD/MDS [1] | (PT-CAN über ZGM) |
| 508 | Status AFS [4] | (PT-CAN über ZGM) |
| 510 | Crash (9) | (PT-CAN über ZGM) |
| 512 | Regelgeschwindigkeit Stufentempomat [5] | (PT-CAN über ZGM) |
| 514 | Dimmung [7] | LM (21) |
| 517 | Akustikanforderung Kombi [3] | Kombi (42) |
| 523 | Memoryverstellung [3] | SM_FA (27), SZM_MIT_KBUS (6) |
| 524 | Steuerung Lenksäule [3] | SM_FA (27) |
| 525 | Position Lenksäule [4] | SZM (8), SZM_MIT_KBUS (6) |
| 528 | Bedienung HUD [5] | M_ASK (12), CCC_GW (12) |
| 529 | Status HUD [5] | HUD (7) |
| 538 | Lampenzustand [8] | LM (21) |
| 550 | Regensensor-Wischergeschwindigkeit (8) | RLS (23) |
| 552 | Bedienung Sonderfunktion [5] | M_ASK (12), CCC_GW (12) |
| 554 | Status BFS [10] | SM_BF (24) |
| 558 | Status BFSH [7] | (PT-CAN über ZGM) |
| 562 | Status FAS [10] | SM_FA (27) |
| 566 | Status FASH [7] | (PT-CAN über ZGM) |
| 567 | Status Lehnenbreitenverstellung Aktiv BF [1] | (PT-CAN über ZGM) |
| 569 | Status Lehnenbreitenverstellung Aktiv FA [1] | (PT-CAN über ZGM) |
| 570 | Status Funkschlüssel [9] | CAS (29) |
| 578 | Status Klima Front [9] | IHKA (29) |
| 586 | Status PDC [5] | PDC (23) |
| 594 | Wischerstatus (7) | KBM (7) |
| 598 | Challenge Passive Access [8] | CAS (29) |
| 600 | Status Transmission Passive Access [4] | PGS (22) |
| 604 | Bedienung Klima Zusatzprogramme [1] | M_ASK (12), CCC_GW (12) |
| 619 | Bedienung Rollos BF [2] | (PT-CAN über ZGM) |
| 620 | Bedienung Rollos FA [2] | (PT-CAN über ZGM) |
| 621 | Bedienung Rollos MK [1] | (PT-CAN über ZGM) |
| 622 | Steuerung FH/SHD Zentrale (Komfort) [7] | CAS (29) |
| 623 | Bedienung Rollos BFH [2] | (PT-CAN über ZGM) |
| 624 | Bedienung Rollos FAH [2] | (PT-CAN über ZGM) |
| 632 | Navigationsgraph [2] | CCC_GW (12) |
| 634 | Synchronisation Navigationsgraph [3] | CCC_GW (12) |
| 638 | Status Verdeck Cabrio [5] | CVM_V (11) |
| 640 | Steuerung Sicherheitsfahrzeug 1 [5] | (PT-CAN über ZGM) |
| 642 | Steuerung Sicherheitsfahrzeug 2 [5] | (PT-CAN über ZGM) |
| 644 | Steuerung Fernstart Sicherheitsfahrzeug [8] | CAS (29) |
| 645 | Steuerung Rollos [3] | SZM (8), SZM_MIT_KBUS (6) |
| 656 | Steuerung Reaktion Wasserstoff-Fahrzeug [1] | (PT-CAN über ZGM) |
| 670 | Steuerung Zentralverriegelung Sicherheitsfahrzeug [4] | (PT-CAN über ZGM) |
| 671 | Fernbedienung FondCommander [4] | CAS (29) |
| 672 | Steuerung Zentralverriegelung [9] | CAS (29) |
| 674 | Bedienung Klima Standfunktionen [5] | M_ASK (12), CCC_GW (12) |
| 676 | Bedienung Personalisierung [7] | M_ASK (12), CCC_GW (12) |
| 678 | Bedienung Wischertaster (8) | (PT-CAN über ZGM) |
| 684 | Challenge/Response ELV->CAS [4] | (PT-CAN über ZGM) |
| 688 | Challenge/Response CAS -> ELV [5] | CAS (29) |
| 692 | DWA-Alarm [4] | DWA (21) |
| 694 | Steuerung Hupe DWA [3] | DWA (21) |
| 696 | Bedienung Bordcomputer [3] | M_ASK (12), CCC_GW (12) |
| 698 | Stoppuhr [1] | Kombi (42) |
| 704 | LCD-Leuchtdichte [7] | Kombi (42) |
| 714 | Außentemperatur (9) | Kombi (42) |
| 718 | Steuerung Monitor [4] | M_ASK (12), CCC_GW (12) |
| 725 | Status Heizung Heckscheibe [1] | IHKA (29) |
| 740 | Status Anhänger [7] | AHM (23) |
| 742 | Status Klima Luftverteilung FA [9] | IHKA (29) |
| 746 | Status Klima Luftverteilung BF [5] | IHKA (29) |
| 748 | Status Klima SH/ZH Zusatzwasserpumpe [12] | SH_ZH (20) |
| 750 | Status Klima Zusatzprogramme [1] | IHKA (29) |
| 752 | Status Klima Standfunktionen [9] | IHKA (29) |
| 756 | Steuerung Klima SH/ZH Zusatzwasserpumpe [11] | IHKA (29) |
| 758 | Steuerung Licht [6] | KBM (7) |
| 759 | Einheiten [7] | M_ASK (12), CCC_GW (12) |
| 760 | Uhrzeit/Datum [11] | Kombi (42) |
| 762 | Sitzbelegung Gurtkontakte [7] | (PT-CAN über ZGM) |
| 764 | ZV und Klappenzustand [10] | CAS (29) |
| 772 | Status Gang [10] | (PT-CAN über ZGM) |
| 785 | Nachtankmenge [3] | Kombi (42) |
| 786 | Service Call Teleservice [2] | Kombi (42) |
| 787 | Status Service Call Teleservice [2] | M_ASK (12), CCC_GW (12) |
| 788 | Status Fahrlicht [6] | RLS (23) |
| 789 | Fahrzeugmodus (5) | SZM (8), SZM_MIT_KBUS (6) |
| 791 | Bedienung Taster PDC [1] | SZM (8), SZM_MIT_KBUS (6) |
| 792 | Status Antennen Passive Access [6] | PGS (22) |
| 794 | Bedienung Taster HDC [1] | (PT-CAN über ZGM) |
| 796 | Status Reifendruck [5] | RDC (24) |
| 797 | Status Reifenpannenanzeige [2] | (PT-CAN über ZGM) |
| 806 | Status Dämpferprogramm [9] | (PT-CAN über ZGM) |
| 808 | Relativzeit (9) | Kombi (42) |
| 810 | Steuerung ALC [2] | LM (21) |
| 811 | Status ALC [2] | (PT-CAN über ZGM) |
| 813 | Anzeige HDC [1] | (PT-CAN über ZGM) |
| 814 | Status Klima Interne Regelinfo [4] | IHKA (29) |
| 816 | Kilometerstand/Reichweite [5] | Kombi (42) |
| 817 | Programmierung Stufentempomat [2] | M_ASK (12), CCC_GW (12) |
| 818 | Fahreranzeige Drehzahlbereich [4] | (PT-CAN über ZGM) |
| 820 | Powermanagement Ladespannung [6] | (PT-CAN über ZGM) |
| 821 | Status Elektrische Kraftstoffpumpe [2] | (PT-CAN über ZGM) |
| 822 | Anzeige Checkcontrol-Meldung (Rolle) [3] | Kombi (42) |
| 824 | Steuerung Anzeige Checkcontrol-Meldung (7) | Kombi (42) |
| 826 | Status Monitor Front [3] | CID_C_H (11), CID_C (16), CID_M (11) |
| 828 | Status Monitor Fond 1 [3] | CID_C_R (13) |
| 840 | Übereinstimmung Navigationsgraph [2] | CCC_GW (12) |
| 842 | Navigation GPS 1 [2] | CCC_GW (12) |
| 843 | Status Sitzlehnenverriegelung FA [1] | SZM_MIT_KBUS (6) |
| 844 | Navigation GPS 2 [2] | CCC_GW (12) |
| 845 | Status Sitzlehnenverriegelung BF [1] | SZM_MIT_KBUS (6) |
| 846 | Navigation System Information [2] | CCC_GW (12) |
| 847 | Status Kontakt Handbremse (2) | (PT-CAN über ZGM) |
| 858 | Termin Condition Based Service [2] | M_ASK (12), CCC_GW (12) |
| 860 | Status Bordcomputer [2] | Kombi (42) |
| 862 | Daten Bordcomputer (Reisedaten) [4] | Kombi (42) |
| 864 | Daten Bordcomputer (Fahrtbeginn) [2] | Kombi (42) |
| 866 | Daten Bordcomputer (Durchschnittswerte) [2] | Kombi (42) |
| 868 | Daten Bordcomputer (Ankunft) [2] | Kombi (42) |
| 870 | Anzeige Kombi/Externe Anzeige [3] | Kombi (42) |
| 871 | Steuerung Anzeige Bedarfsorientierter Service [6] | Kombi (42) |
| 896 | Fahrgestellnummer [5] | CAS (29) |
| 897 | Elektronischer Motorölmessstab (4) | (PT-CAN über ZGM) |
| 904 | Fahrzeugtyp [10] | CAS (29) |
| 910 | Startdrehzahl [1] | (PT-CAN über ZGM) |
| 916 | RDA Anfrage/Datenablage [4] | Kombi (42) |
| 917 | Codierung Powermanagement [2] | CAS (29) |
| 920 | Bedienung Fahrwerk [10] | M_ASK (12), CCC_GW (12) |
| 924 | EBA Datenanforderung [5] | (PT-CAN über ZGM) |
| 926 | Bedienung Uhrzeit/Datum [1] | M_ASK (12), CCC_GW (12) |
| 944 | Status Gang Rückwärts [1] | LM (21) |
| 947 | Powermanagement Verbrauchersteuerung [3] | (PT-CAN über ZGM) |
| 948 | Powermanagement Batteriespannung [9] | (PT-CAN über ZGM) |
| 949 | Status Wasserventil [1] | IHKA (29) |
| 950 | Position Fensterheber FAT [5] | (PT-CAN über ZGM) |
| 951 | Position Fensterheber FATH [4] | KBM (7) |
| 952 | Position Fensterheber BFT [5] | (PT-CAN über ZGM) |
| 953 | Position Fensterheber BFTH [4] | KBM (7) |
| 954 | Position SHD [6] | SHD (20), MDS (6) |
| 956 | Position Fensterheber Sicherheitsfahrzeug [2] | (PT-CAN über ZGM) |
| 957 | Status Verbraucherabschaltung [2] | KBM (7) |
| 958 | Nachlaufzeit Stromversorgung [3] | CAS (29) |
| 960 | Konfiguration FAS [3] | SM_FA (27) |
| 961 | Konfiguration BFS [3] | SM_BF (24) |
| 980 | Konfiguration Zentralverriegelung CKM [3] | M_ASK (12), CCC_GW (12) |
| 981 | Status Zentralverriegelung CKM [3] | CAS (29) |
| 982 | Konfiguration DWA CKM [1] | M_ASK (12), CCC_GW (12) |
| 983 | Status DWA CKM [1] | DWA (21) |
| 984 | Konfiguration RLS CKM [2] | M_ASK (12), CCC_GW (12) |
| 985 | Status RLS CKM [2] | RLS (23) |
| 986 | Konfiguration Memorypositionen CKM [1] | M_ASK (12), CCC_GW (12) |
| 987 | Status Memorypositionen CKM [2] | SM_FA (27), SZM_MIT_KBUS (6) |
| 988 | Konfiguration Licht CKM [3] | M_ASK (12), CCC_GW (12) |
| 989 | Status Licht CKM [3] | LM (21) |
| 990 | Konfiguration Klima CKM (5) | M_ASK (12), CCC_GW (12) |
| 991 | Status Klima CKM (5) | IHKA (29) |
| 992 | Konfiguration ALC CKM [1] | M_ASK (12), CCC_GW (12) |
| 993 | Status ALC CKM [1] | (PT-CAN über ZGM) |
| 1001 | Marker 1 [1] | (PT-CAN über ZGM) |
| 1002 | Marker 2 [3] | Diagnosetool_K_CAN_System (17) |
| 1003 | Marker 3 [1] | (PT-CAN über ZGM) |
| 1022 | Anforderung CAN_Testtool SI_Bus [3] | Diagnosetool_K_CAN_System (17) |
| 1023 | Übertragung Daten SI_Bus CAN_Testtool [3] | (PT-CAN über ZGM) |
| 1280 | Datentransfer [1] | IHKA (29) |
| 1984 | CAS Programmierung Bandende 1 [2] | Tool_Programmierung_Bandende_CAS (7) |
| 1985 | CAS Programmierung Bandende 2 [2] | Tool_Programmierung_Bandende_CAS (7) |
| 1986 | CAS Applikationsnachricht 1 [1] | Tool_Programmierung_Bandende_CAS (7) |
| 1987 | CAS Applikationsnachricht 2 [1] | Tool_Programmierung_Bandende_CAS (7) |
| 0x480 | SGM_ZGM | Sicherheits- und Gateway-Modul (ZGM) |
| 0x481 | SGM_SIM | Sicherheits- und Gateway-Modul (SIM) |
| 0x482 | SZL | Schaltzentrum Lenksäule |
| 0x485 | TMFA | Türmodul Fahrer |
| 0x486 | TMBF | Türmodul Beifahrer |
| 0x489 | SBSL | Satellit B-Säule links |
| 0x48A | SBSR | Satellit B-Säule rechts |
| 0x48E | SFZ | Satellit Fahrzeugzentrum |
| 0x492 | DME_DDE | Motor Elektronik / Diesel Elektronik |
| 0x493 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave |
| 0x496 | AFS | Aktivlenkung |
| 0x497 | EKP | Kraftstoffpumpe |
| 0x498 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe |
| 0x499 | VTG | Verteilergetriebe |
| 0x49B | VTC | Valvetronic |
| 0x49E | VTC2 | Valvetronic 2 |
| 0x49F | HDEV | HDEV-Steuergerät |
| 0x4A0 | RDC | Reifendruck-Control |
| 0x4A1 | ACC | Aktive Geschwindigkeitsregelung |
| 0x4A2 | AHL | Adaptives Kurvenlicht |
| 0x4A3 | ARS | Dynamic Drive |
| 0x4A4 | CVM | Cabrioverdeck-Modul |
| 0x4A7 | PGS | Passive-Go-Steuergerät |
| 0x4A9 | DSC | Dynamische Stabilitäts-Control |
| 0x4AF | HDEV2 | HDEV2-Steuergerät |
| 0x4B5 | CCC | Car Communication Computer |
| 0x4B6 | TEL | Telefon |
| 0x4B7 | AMP | Verstärker |
| 0x4B8 | EHC | Höhenstands-Control |
| 0x4B9 | EDC_K | Dämpfer-Control |
| 0x4BA | KHI | Kopfhörer-Interface |
| 0x4BB | CCC | Car Communication Computer |
| 0x4BD | CDC | CD-Wechsler |
| 0x4BD | HUD | Head-Up Display |
| 0x4C0 | CAS | Car Access System |
| 0x4C1 | DWA | Diebstahlwarnanlage |
| 0x4C3 | MPM | Mikro-Powermodul |
| 0x4C4 | SHD | Schiebehebedach |
| 0x4C5 | RLS | Regen-Fahrlicht-Sensor |
| 0x4C7 | ANT | Antennentuner |
| 0x4CB | VM | Videomodul |
| 0x4D0 | DWA | Diebstahlwarnanlage |
| 0x4D1 | DWA | Diebstahlwarnanlage |
| 0x4D2 | DWA | Diebstahlwarnanlage |
| 0x4D3 | DWA | Diebstahlwarnanlage |
| 0x4D4 | RAD | Radio |
| 0x4E0 | KOMBI | Instrumentenkombination |
| 0x4E1 | FBI | Flexibles Bus-Interface |
| 0x4E2 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer |
| 0x4E3 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer |
| 0x4E4 | PDC | Park Distance Control |
| 0x4E5 | SZM | Schaltzentrum Mittelkonsole |
| 0x4E7 | CON | Controller |
| 0x4EB | HKL | Heckklappenlift |
| 0x4ED | SMFA | Sitzmodul Fahrer |
| 0x4EE | SMBF | Sitzmodul Beifahrer |
| 0x4F0 | LSZ | Lichtschaltzentrum |
| 0x4F1 | AHM | Anhängermodul |
| 0x4F2 | KBM | Karosserie-Basismodul |
| 0x4F3 | CID | Central Information Display |
| 0x4F8 | IHKA | Integrierte Heiz-Klima-Automatik |
| 0x4FA | SH | Standheizgerät |
| 0x4FD | FDM | Flexibles Diagnosemodul |
| 0x500 | CAS | Car Access System |
| 0x510 | CCC | Car Communication Computer |
| 0x511 | CCC | Car Communication Computer |
| 0x512 | CCC | Car Communication Computer |
| 0x513 | CCC | Car Communication Computer |
| 0x514 | CCC | Car Communication Computer |
| 0x515 | CCC | Car Communication Computer |
| 0x516 | CCC | Car Communication Computer |
| 0x517 | CCC | Car Communication Computer |
| 0x518 | CCC | Car Communication Computer |
| 0x519 | CCC | Car Communication Computer |
| 0x51A | CCC | Car Communication Computer |
| 0x51B | CCC | Car Communication Computer |
| 0x51C | CCC | Car Communication Computer |
| 0x51D | CCC | Car Communication Computer |
| 0x51E | CCC | Car Communication Computer |
| 0x51F | CCC | Car Communication Computer |
| 0x520 | CCC | Car Communication Computer |
| 0x521 | SBSL | Satellit B-Säule links |
| 0x522 | SBSR | Satellit B-Säule rechts |
| 0x569 | K_CAN | Bus-System für Karosserieumfänge |
| 0x56A | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich |
| 0x56B | byteflight | Bus-System für Airbag-Steuergeräte |
| 0x56C | MOST | Bus-System für Audio- und Kommunikationsumfänge |
| 0xffff | PT-Wake | PT-CAN Weckleitung |
| 0x??? | unbekannt | unbekanntes Steuergerät |
