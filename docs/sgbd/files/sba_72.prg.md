# sba_72.prg

## General

|  |  |
| --- | --- |
| File | sba_72.prg |
| Type | PRG |
| Jobs | 59 |
| Tables | 24 |
| Origin | BMW EF-623 Kusch |
| Revision | 1.000 |
| Author | BMW EF-520 Kusch |
| ECU Comment | Conti_Teves MK60, SBA,BMW_FAST, E72 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SBA: Sensotronic Brake Actuation, RBS Regeneratives BremsSystem E72 |  |  |
| ORIGIN | string | BMW EF-623 Kusch |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | BMW EF-520 Kusch |  |  |
| COMMENT | string | Conti_Teves MK60, SBA,BMW_FAST, E72 |  |  |
| PACKAGE | string | 1.46 |  |  |
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

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### SEED

Status Eingaenge E87 DSC_MK60 KWP2000:$27,$03 oder  $27,$07 SecurityAccess service

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### _EEPROM_LESEN

Lesen  EEPROM Zellen Zwei Argumente muessen eingegeben werden: die Start-Adresse und die End-Adresse. Musterparametersatz: "Start-Adresse,End-Adresse", jedoch mit "Strichpunkt" getrennt. Musterparametersatz: "224,244", jedoch mit "Strichpunkt" getrennt. Musterparametersatz: "0x00E0,0x00F4", jedoch mit "Strichpunkt" getrennt. Adressenbereich: 0x000000 - 0x0003FF KWP2000: $23 $03 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| ARG_START_ADRESSE | int | Start Adresse min 0000 hex |
| ARG_END_ADRESSE | int | End Adresse max FF hex |

### STEUERN_ERGEBNIS_ROUTINE

Ergebnis der Routine abholen Musterparametersatz: "E,PEDALWINKEL" Musterparametersatz: "W,MEMBRANTELLERWEG" Musterparametersatz: "E,DRUCKSENSOR_SBA" Musterparametersatz: "E,VAKUUMPUMPE,R" Musterparametersatz: "W,AUTO_INITIALISIERUNG_UND_PUMPEN_TEST,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle ROUTINE_RESULT Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt mit R als Argument wird das Result mehrfach abgefragt, bis pos. Ergebnis vorliegt ohne R als Argument liefert dieser Job nur einmal das Result der Routine zurück

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| TYP | string | Typ der Routine angeben |
| RESULT | string | mit R als Argument wird das Result mehrfach abgefragt, bis pos. Ergebnis vorliegt ohne R als Argument liefert dieser Job nur einmal das Result der Routine zurück |

### STEUERN_DIGITAL

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) es koennen  maximal 4 Argumente vorgegeben werden E oder W,COV,VP,BV27 COV:  Cut_Off_Ventil VP:   Vakuumpumpe BV30: Boosterventil wird mit 30% angesteuert das Boosterventil kann z.Zt.nur in 10er-Stufen angesteuert werden, BV0,BV10,BV20,BV30...BV100 Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Musterparametersatz_1: "E,COV,VP,200,BV30," Musterparametersatz_2: "W,BV70,VP,1000,COV,BV10" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es koennen 2 beliebige Stellgliedgruppen angesteuert werden und zwar 1 Stellgliedgruppe vor dem Zeitglied und 1 Stellgliedgruppe nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit in ms

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |

### STATUS_ANALOG

KWP2000: $21,$0B ReadDataByLocalIdentifier service

_No arguments._

### STATUS_ANALOG_OFFSET

KWP2000: $21,$0A ReadDataByLocalIdentifier service

_No arguments._

### STATUS_DIGITAL

Status Eingaenge KWP2000: $21,$0C ReadDataByLocalIdentifier service

_No arguments._

### STATUS_PRODUCTION_DATA

KWP2000: $1A,$8F ReadECUIdentification Ident-Daten des SG ...

_No arguments._

### STATUS_PROGRAMMING_DATE

KWP2000: $1A,$99 ReadECUIdentification Ident-Daten des SG: Herstelldatum

_No arguments._

### STEUERN_START_ROUTINE

Startet die Abgleichsroutinen Musterparametersatz: "PEDALWINKEL" Musterparametersatz: "MEMBRANTELLERWEG" Musterparametersatz: "DRUCKSENSOR_SBA" Musterparametersatz: "VAKUUMPUMPE" Musterparametersatz: "PRODUKTIONS_MODE"  Musterparametersatz: "REKUPERIEREN" startet den Rekuperations-Mode, obwohl sich das SBA in der Rueckfallebnen befindet z.B. der E72 befindet sich in der Abgasrolle, an der Vorderachse ist mindestens ein Drehzahlfuehler abgesteckt Allrad aus ---> E72 laeuft nur als Hecktriebler, E72 soll nur ueber die HA rekuperieren  Musterparametersatz: "KONVENTIONELL_BREMSEN" schaltet den Rekuperations-Mode aus, E72 bremst konventionell z.B. E72 im Rollenpruefstand  der Betriebs-Modi "REKUPERIEREN" oder "KONVENTIONELL_BREMSEN" koennen ueber die Diagnose-Jobs DIAGNOSE_ENDE oder STEUERN_STOP_ROUTINE oder Zuendung-AUS beendet werden  Musterparametersatz: "AUTO_INITIALISIERUNG_UND_PUMPEN_TEST" startet die Autoinitialisierung dazu muss das Bremspedal einmal durchgedrueckt und wieder geloest werden dann laufen folgende Initialisierungen automatisch ab Pedalwinkel, Pedalwegsensor, Drucksensor, Vakuumpumpe die Routine dauert ca. 13 sec  Musterparametersatz: "PRODUKTIONS_MODE" startet den Produktions-Mode (PM) der Status PM_aktiv wird im EEPROM abgespeichert der PM kann nur durch den Stop_Routine Befehl aufgehoben werden Zuendungsreset oder ECU-Neu-Initialisierung setzt den PM nicht zurück das Steuergeraet ist im Anlieferzustand bereits im PM das SBA befindet sich in der Rueckfallebene es ist keine ELUP-Ansteuerung moeglich Verbot aller Initialisierungs- und Ansteuerroutinen

| Name | Type | Description |
| --- | --- | --- |
| TYP | string | Typ der Routine angeben |

### STEUERN_STOP_ROUTINE

Beendet die Routinen "REKUPERIEREN" bzw. "KONVENTIONELL_BREMSEN" Musterparametersatz: "REKUPERIEREN" Musterparametersatz: "KONVENTIONELL_BREMSEN" Musterparametersatz: "PRODUKTIONS_MODE"

| Name | Type | Description |
| --- | --- | --- |
| TYP | string | Typ der Routine angeben |

### STATUS_ECU_SW_NR

KWP2000: $1A,$94 ReadECUIdentification Ident-Daten des SG: SW Nummer

_No arguments._

### STEUERN_DIGITAL_RELAIS

KWP2000:$30,$12,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) es koennen  maximal 3 Argumente vorgegeben werden E oder W,SSR,MR SSR:  Solid State Relais fuer die Vakuumpumpe MR:   mechanisches Relais fuer die Vakuumpumpe Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Musterparametersatz_1: "E,SSR,MR" Musterparametersatz_2: "W,SSR" Musterparametersatz_3: "W," jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) beide Relais sind in Reihe geschaltet die Pumpe laeuft nur an, wenn beide Relais eingeschaltet sind MR nicht schalten, wenn SSR eigeschaltet ist (sonst Zerstoerungsgefahr)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |

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
| 0x6720 | OBD_Code: C1002, Bremskraftverstaerker Spule: allgemeiner elektrischer Fehler |
| 0x6721 | OBD_Code: C1001, Bremskraftverstaerker: Plausibilitaet |
| 0x6725 | OBD_Code: C1001, Bremskraftverstaerker schwergaengig |
| 0x6726 | OBD_Code: C1001, Bremsdruck: Plausibilitaet |
| 0x6730 | OBD_Code: C1021, Membranwegsensor: Kurzschluss nach Masse |
| 0x6731 | OBD_Code: C1021, Membranwegsensor: Kurzschluss nach Spannungsversorgung |
| 0x6735 | OBD_Code: C1020, Membranwegsensor: Signal Wert konstant |
| 0x6736 | OBD_Code: C1020, Membranwegsensor: Signal Gradient |
| 0x6737 | OBD_Code: C1020, Membranwegsensor: Signal gestoert |
| 0x6738 | OBD_Code: C1020, Membranwegsensor: Signal Wert dauerhaft 0 |
| 0x6739 | Bremssystem Volumenbilanz gestoert |
| 0x6740 | OBD_Code: C1003, Unterdruck im Bremskraftverstaerker zu niedrig (waehrend ELUP und Verbrenner an) |
| 0x6741 | OBD_Code: C1003, Unterdruck im Bremskraftverstaerker zu niedrig (waehrend ELUP an) |
| 0x6742 | OBD_Code: C1003, Unterdruck Versorgung: Leckage |
| 0x6743 | OBD_Code: C1003, Unterdruck Versorgung: Gradient |
| 0x6744 | OBD_Code: C1030, Unterdruck Sensor Signal 1: elektrischer Fehler |
| 0x6745 | OBD_Code: C1031, Unterdruck Sensor Signal 2: elektrischer Fehler |
| 0x6746 | OBD_Code: C1032, Unterdruck Sensor Fehler Plausibilitaet |
| 0x6755 | Unterdruck Pumpe dauerhaft an |
| 0x675A | OBD_Code: C1040, Ansteuerung ELUP: Spannung auf Rueckleseleitung waehrend Initialisierung zu niedrig |
| 0x675B | OBD_Code: C1040, Ansteuerung ELUP: Spannung auf Rueckleseleitung waehrend Initialisierung zu hoch |
| 0x675C | OBD_Code: C1040, Ansteuerung ELUP: Spannung auf Rueckleseleitung zu niedrig |
| 0x675D | OBD_Code: C1040, Ansteuerung ELUP: Spannung auf Rueckleseleitung zu hoch |
| 0x6760 | OBD_Code: C1067, Bremspedal Winkelsensor: Signal 1 max elektrischer Bereich |
| 0x6761 | OBD_Code: C1068, Bremspedal Winkelsensor: Signal 1 min elektrischer Bereich |
| 0x6770 | OBD_Code: C1067, Bremspedal Winkelsensor: Signal 2 max elektrischer Bereich |
| 0x6771 | OBD_Code: C1068, Bremspedal Winkelsensor: Signal 2 min elektrischer Bereich |
| 0x6780 | OBD_Code: C1069, Bremspedal Winkelsensor: Fehler Nullpunkt |
| 0x6781 | OBD_Code: C1069, Bremspedal Winkelsensor: Kalibrierdaten Fehler Checksumme |
| 0x6783 | OBD_Code: C1069, Bremspedal Winkelsensor: Abweichung Signal 1 zu 2 |
| 0x6790 | OBD_Code: C1050, Simulator Cut Off Device Drucksensor: elektrischer Fehler |
| 0x6791 | OBD_Code: C1050, Simulator Cut Off Device Drucksensor: Initialisierungssignal fehlerhaft |
| 0x6792 | OBD_Code: C1050, Simulator Cut Off Device Drucksensor: unerwartetes Initialisierungssignal erkannt |
| 0x6795 | OBD_Code: C1051, Simulator Cut Off Device Ventil: elektrischer Fehler |
| 0x6799 | Simulator Cut Off Device: Ueberwachung erkennt Fehler |
| 0x679A | OBD_Code: C1052, Simulator Cut Off Device: Plausibilitaet |
| 0x679B | Simulator Cut Off Device Test: Timeout |
| 0x67A0 | OBD_Code: C1012, Tandemhauptzylinder Drucksensor 1: allgemeiner elektrischer Fehler |
| 0x67A1 | OBD_Code: C1010, Tandemhauptzylinder Drucksensor 1: Signal Offset |
| 0x67A4 | OBD_Code: C1010, Tandemhauptzylinder Drucksensor 1: Signal Plausibilitaet |
| 0x67A5 | OBD_Code: C1013, Tandemhauptzylinder Drucksensor 2: allgemeiner elektrischer Fehler |
| 0x67A6 | OBD_Code: C1011, Tandemhauptzylinder Drucksensor 2: Signal Offset |
| 0x67A7 | OBD_Code: C1011, Tandemhauptzylinder Drucksensor 2 Signal Plausibilitaet |
| 0x67A8 | OBD_Code: C1001, Tandemhauptzylinder Druck: Plausibilitaet |
| 0x67A9 | Leckage oder Sensor Fehler im Hydraulikkreis 1 |
| 0x67AA | Leckage oder Sensor Fehler im Hydraulikkreis 2 |
| 0x67AB | ECU interner Temperatur Sensor: Plausibilitaet |
| 0x67B0 | OBD_Code: C1062, Spannungsversorgung Pedalwinkelsensor: Kurzschluss nach Masse |
| 0x67B1 | OBD_Code: C1063, Spannungsversorgung Pedalwinkelsensor: Kurzschluss nach +12 Volt |
| 0x67C0 | OBD_Code: C1016, Sensor Offset: EEPROM Checksumme fehlerhaft |
| 0x67C1 | OBD_Code: C103F, Sensor Spannungsversorgung: elektrischer Fehler |
| 0x67D2 | OBD_Code: C1070, Bandende Initialisierung nicht durchgefuehrt oder fehlerhaft |
| 0x67D3 | OBD_Code: C1070, Fehler Initialisierung Pedalwinkelsensor |
| 0x67D5 | OBD_Code: C1071, Bremsenergierueckgewinnung: Plausibilitaet |
| 0x67D6 | OBD_Code: C1071, Schnittstelle HCP: falsches oder kein BUS-Signal fuer Bremsenergierueckgewinnung |
| 0x67D7 | OBD_Code: C1072, Schnittstelle EHB3: Signal ST_ABS |
| 0x67D8 | OBD_Code: C1072, Schnittstelle EHB3: Signal ST_DSC |
| 0x67D9 | OBD_Code: C1072, Schnittstelle EHB3: Signal QU_SER_OVB |
| 0x67DA | OBD_Code: C1072, Schnittstelle EHB3: Signal V_VEH |
| 0x67DB | OBD_Code: C1072, Schnittstelle EHB3: Signal QU_SER_OVB: Timeout Initialisierung |
| 0x67DC | SBA dauerhaft degradiert: zu viele Wechsel zwischen Normalbetrieb und Rueckfallebene |
| 0x67DD | Schnittstelle CAS: Fahrgestellnummer ungueltig |
| 0x67DE | OBD_Code: C1073, keine oder falsche Fahrgestellnummer gespeichert / ECU nicht initialisiert |
| 0x67E0 | OBD_Code: C1080, Unterspannung |
| 0x67E5 | OBD_Code: C1081, Ueberspannung |
| 0x67E8 | OBD_Code: C1070, Produktionsmodus aktiv |
| 0x67FA | OBD_Code: C1072, Schnittstelle EHB3: Signal ST_STBTY |
| 0x67FB | OBD_Code: C1072, Schnittstelle EHB3: Signal ST_VEH_DVCO |
| 0x67FC | OBD_Code: C1072, Schnittstelle EHB3: Signal ST_CLCTR |
| 0x67FD | OBD_Code: U180E, Schnittstelle DME: Signal RPM_ENG |
| 0x67FE | OBD_Code: C1072, Schnittstelle EHB3: Signal RECUPM_MAX_TXU |
| 0x67FF | OBD_Code: U180E, Schnittstelle DME: Signal TAR_WMOM_PT_SUM_COOTD |
| 0x6800 | OBD_Code: C1082, Hardware Fehler |
| 0x6801 | OBD_Code: C1082, ECU interner Fehler |
| 0xCB87 | OBD_Code: U180C, PT-CAN: Bus Off |
| 0xCB8B | OBD_Code: U180D, HS-CAN: Bus Off |
| 0xCB94 | OBD_Code: U180A, PT-CAN: (EHB3-ID_E7h) Austausch EHB3 SBA Timeout |
| 0xCB95 | OBD_Code: U180A, PT-CAN: (EHB3-ID_E7h) Austausch EHB3 SBA Alive |
| 0xCB96 | OBD_Code: U180A, PT-CAN: (EHB3-ID_E7h) Austausch EHB3 SBA Checksumme |
| 0xCB97 | OBD_Code: U180A, PT-CAN: (EHB3-ID_1A0h) Geschwindigkeit Timeout |
| 0xCB98 | OBD_Code: U180A, PT-CAN: (EHB3-ID_1A0h) Geschwindigkeit Alive |
| 0xCB99 | OBD_Code: U180A, PT-CAN: (EHB3-ID_1A0h) Geschwindigkeit Checksumme |
| 0xCB9A | PT-CAN: (EHB3-ID_CEh) Radgeschwindigkeit Timeout |
| 0xCB9D | OBD_Code: U180A, PT-CAN: (EHB3-ID_19Eh) Status DSC Timeout |
| 0xCB9E | OBD_Code: U180A, PT-CAN: (EHB3-ID_19Eh) Status DSC Alive |
| 0xCB9F | OBD_Code: U180A, PT-CAN: (EHB3-ID_19Eh) Status DSC Checksumme |
| 0xCBA0 | PT-CAN: (Kombi-ID_310h) Aussentemperatur/Relativzeit Timeout |
| 0xCBA1 | PT-CAN: (Kombi-ID_330h) Kilometerstand/Reichweite Timeout |
| 0xCBA2 | PT-CAN: (CAS-ID_130h) Klemmenstatus Timeout |
| 0xCBA3 | PT-CAN: (CAS-ID_130h) Klemmenstatus Alive |
| 0xCBA4 | PT-CAN: (CAS-ID_130h) Klemmenstatus Checksumme |
| 0xCBA8 | PT-CAN: (EGS_EL-ID_BAh) Getriebedaten Timeout |
| 0xCBA9 | PT-CAN: (EGS_EL-ID_BAh) Getriebedaten Alive |
| 0xCBAA | PT-CAN: (EGS_EL-ID_BAh) Getriebedaten Checksumme |
| 0xCBAB | OBD_Code: U180E, PT-CAN: (DME1-ID_AAh) Drehmoment 3 Timeout |
| 0xCBAC | OBD_Code: U180E, PT-CAN: (DME1-ID_AAh) Drehmoment 3 Alive |
| 0xCBAD | OBD_Code: U180E, PT-CAN: (DME1-ID_AAh) Drehmoment 3 Checksumme |
| 0xCBAE | PT-CAN: (CAS-ID_380h) Fahrgestellnummer Timeout |
| 0xCBAF | OBD_Code: U180E, PT-CAN: (DME1-ID_DDh) Radmoment Antrieb 5 Timeout |
| 0xCBB0 | OBD_Code: U180E, PT-CAN: (DME1-ID_DDh) Radmoment Antrieb 5 Alive |
| 0xCBB1 | OBD_Code: U180E, PT-CAN: (DME1-ID_DDh) Radmoment Antrieb 5 Checksumme |
| 0xCBB8 | PT-CAN: (CAS-ID_3BEh) Nachlaufzeit Stromversorgung Timeout |
| 0xCBBA | PT-CAN: (EHB3-ID_2B3h) Beschleunigungsdaten Timeout |
| 0xCBBB | PT-CAN: (EHB3-ID_2B3h) Beschleunigungsdaten Alive |
| 0xCBBC | PT-CAN: (EHB3-ID_2B3h) Beschleunigungsdaten Checksumme |
| 0xCBC0 | OBD_Code: U180B, HS-CAN: (ID_1C6h) Regenerative Braking Status Timeout |
| 0xCBC1 | OBD_Code: U180B, HS-CAN: (ID_1C6h) Regenerative Braking Status Alive |
| 0xCBC2 | OBD_Code: U180B, HS-CAN: (ID_1C6h) Regenerative Braking Status Checksumme |
| 0xCBC3 | HS-CAN: (HIM-ID_4C1h) PPEI Engine General Status 4 HS Timeout |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | Digital | Analog | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Bremslichtschalter | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x03 | Rekuperation | 0/1 | - | 0x02 | - | 1 | 1 | 0 |
| 0x04 | Overboost | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x05 | Cut-Off Ventil | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x06 | By-Wire Normalbetrieb | 0/1 | - | 0x10 | - | 1 | 1 | 0 |
| 0x07 | Vakuumdruck | bar | - | signed char | - | 1 | 100 | 0 |
| 0x08 | Aussentemperatur | Grad | high | signed int | - | 1 | 10 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0xCB87 | 0x0000 | 0x1004 | 0x0000 | 0x0000 |
| 0xCB8B | 0x0000 | 0x1004 | 0x0000 | 0x0000 |
| 0xCB94 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB95 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB96 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB97 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB98 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB99 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB9A | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB9C | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB9D | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB9E | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCB9F | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA0 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA1 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA2 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA3 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA4 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA8 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBA9 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBAA | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBAB | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBAC | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBAD | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBAE | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBAF | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBB0 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBB1 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBB8 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBBA | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBBB | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBBC | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBC0 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBC1 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBC2 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xCBC3 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| default | 0x0000 | 0x0000 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom. |
| 0x0002 | Fehler Alive-Zaehler. |
| 0x0004 | Timeout. |
| 0x0008 | Fehler Checksumme. |
| 0x1004 | Bus Off. |
| 0x1008 | physikalischer Wert ausserhalb gueltigem Bereich |
| 0x0010 | Testbedingungen erfuellt. |
| 0x0011 | Testbedingungen noch nicht erfuellt. |
| 0x0020 | Fehler bisher nicht aufgetreten. |
| 0x0021 | Fehler momentan nicht vorhanden, aber bereits gespeichert. |
| 0x0022 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase). |
| 0x0023 | Fehler momentan vorhanden und bereits gespeichert. |
| 0x0030 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen. |
| 0x0031 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen. |
| 0xFFFF | unbekannte Fehlerart. |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### ROUTINE_RESULT

| BYTE | RESULT | WERT |
| --- | --- | --- |
| 0x00 | Routine_wurde_noch_nicht_gestartet | 0 |
| 0x01 | Routine_aktiv | 1 |
| 0x03 | Routine_erfolgreich_beendet | 3 |
| 0x04 | Routine_abgebrochen_oder_fehlerhaft | 4 |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| COV | 0 | 0x01 |
| VP | 0 | 0x02 |
| BV0 | 1 | 0x00 |
| BV10 | 1 | 0x0A |
| BV20 | 1 | 0x14 |
| BV30 | 1 | 0x1E |
| BV40 | 1 | 0x28 |
| BV50 | 1 | 0x32 |
| BV60 | 1 | 0x3C |
| BV70 | 1 | 0x46 |
| BV80 | 1 | 0x50 |
| BV90 | 1 | 0x5A |
| BV100 | 1 | 0x64 |
| SSR | 0 | 0x01 |
| MR | 0 | 0x02 |
| XYZ | 9 | 0x00 |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 |

### ANALOG

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x07 | 0x08 |

### FEHLER_ROUTINE

| BYTE | RESULT | WERT |
| --- | --- | --- |
| 0x00 | kein_Fehler | 0 |
| 0x01 | SBA_erkennt_Bremse | 1 |
| 0x02 | SBA_erkennt_Bremsbetaetigung | 2 |
| 0x03 | SBA_erkennt_Stillstand | 3 |
| 0x04 | SBA_erkennt_Unterspannung | 4 |
| 0x05 | SBA_erkennt_Time_Out_Phase | 5 |
| 0x06 | SBA_erkennt_Motor_laeuft | 6 |
| 0x07 | SBA_erkennt_Vakuum_Info | 7 |
| 0x08 | SBA_erkennt_Vakuum_Ueberwachung | 8 |
| 0x09 | SBA_erkennt_Vakuum_Gradient | 9 |
| 0x0A | SBA_erkennt_Vakuum_Leckage | 10 |
| 0x0F | SBA_erkennt_schwerer Fehler | 15 |
| 0x0E | SBA_erkennt_Zuendung_aus | 14 |
