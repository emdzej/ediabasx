# MRBMSMP1.prg

## General

|  |  |
| --- | --- |
| File | MRBMSMP1.prg |
| Type | PRG |
| Jobs | 54 |
| Tables | 161 |
| Origin | BMW/ist EA-362 Ulbricht |
| Revision | 8.000 |
| Author | ist_GmbH EA-362 Ulbricht, ist_GmbH EA-362 Schoener |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Motorsteuergerät BMS-MP (BN2000) |  |  |
| ORIGIN | string | BMW/ist EA-362 Ulbricht |  |  |
| REVISION | string | 8.000 |  |  |
| AUTHOR | string | ist_GmbH EA-362 Ulbricht, ist_GmbH EA-362 Schoener |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.77 |  |  |
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

### STATUS_LESEN

Lesen eines oder mehrerer Stati KWP  : $22 ReadDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige result erzeugt table SG_Funktionen ARG ID RESULTNAME RES_TABELLE ARG_TABELLE |

### STEUERN

Vorgeben eines Status KWP  : $2E WriteDataByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID LABEL ARG_TABELLE |
| WERT | string | Es muss mindestens ein Argument übergeben werden Argumente siehe table SG_Funktionen ARG ID ARG_TABELLE |

### STEUERN_IO

Vorgeben eines Status KWP  : $2F InputOutputControlByCommonIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment optionales Argument Wenn nicht angegeben, dann kein InputOutputControlParameter im Request |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### STEUERN_ROUTINE

Vorgeben eines Status KWP  : $31 StartRoutineByLocalIdentifier KWP  : $32 StopRoutineByLocalIdentifier KWP  : $33 RequestRoutineResultsByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'STR'  = startRoutine 'STPR' = stopRoutine 'RRR'  = requestRoutineResults |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F07 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string | max Laenge 127 Byte weil nur max 128 Byte (127 Nutzbyte FA + Endekennung) moeglich |

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 - $3F07 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string | max Laenge 127 Byte weil nur max 128 Byte (127 Nutzbyte FA + Endekennung) moeglich |

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number KWP2000  : $22   ReadDataByCommonIdentifier KWP2000  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

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
| 0xC2 | LG Chem |
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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x1000 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1001 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1002 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1003 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1020 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1021 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1022 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1023 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1030 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1031 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1032 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1033 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1040 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x1041 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x1042 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x1043 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x1050 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x1051 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x1052 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x1053 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x1060 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1061 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1062 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1063 | 0x6507 | 0x6508 | 0x6501 | 0x650B |
| 0x1070 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1071 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1072 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1073 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1080 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x1081 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x1082 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x1083 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x1090 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1091 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1092 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1093 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x10A0 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x10A1 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x10A2 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x10A3 | 0x6507 | 0x6508 | 0x6501 | 0x6509 |
| 0x10D0 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x10D1 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x10D2 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x10D3 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x10E0 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x10E1 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x10E2 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x1101 | 0x650B | 0x6501 | 0x656C | 0x651D |
| 0x1102 | 0x650B | 0x6501 | 0x656C | 0x651D |
| 0x1111 | 0x6509 | 0x6501 | 0x656A | 0x6568 |
| 0x1112 | 0x6509 | 0x6501 | 0x656A | 0x6568 |
| 0x1121 | 0x650A | 0x6501 | 0x656B | 0x6569 |
| 0x1122 | 0x650A | 0x6501 | 0x656B | 0x6569 |
| 0x1131 | 0x650C | 0x6501 | 0x656D | 0x6503 |
| 0x1132 | 0x650C | 0x6501 | 0x656D | 0x6503 |
| 0x1140 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1150 | 0x6501 | 0x6509 | 0x6507 | 0x6517 |
| 0x1161 | 0x654B | 0x6508 | 0x6507 | 0x6517 |
| 0x1172 | 0x6507 | 0x654E | 0x6508 | 0x6522 |
| 0x1173 | 0x6507 | 0x654E | 0x6508 | 0x6522 |
| 0x1180 | 0x6512 | 0x6507 | 0x6508 | 0x6502 |
| 0x1181 | 0x6512 | 0x6507 | 0x6508 | 0x6502 |
| 0x1182 | 0x6512 | 0x6507 | 0x6508 | 0x6502 |
| 0x1183 | 0x6514 | 0x6515 | 0x6512 | 0x6516 |
| 0x1190 | 0x6514 | 0x6515 | 0x6512 | 0x6516 |
| 0x1191 | 0x6514 | 0x6515 | 0x6512 | 0x6516 |
| 0x1192 | 0x6514 | 0x6515 | 0x6512 | 0x6516 |
| 0x1193 | 0x6563 | 0x6564 | 0x6514 | 0x6515 |
| 0x1194 | 0x655F | 0x6560 | 0x6561 | 0x6562 |
| 0x11A0 | 0x6501 | 0x6507 | 0x651B | 0x6517 |
| 0x11B0 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x11C0 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x11D0 | 0x6507 | 0x654E | 0x6502 | 0x6517 |
| 0x11E0 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x11F0 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1210 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1213 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1220 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1221 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1222 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1223 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1230 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1231 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1232 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1233 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1240 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1241 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1242 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1243 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1260 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1263 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1270 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1273 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x12A0 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x12A3 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x12B0 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x12B1 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x12B2 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x12B3 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1300 | 0x6507 | 0x6500 | 0x6502 | 0x6501 |
| 0x1301 | 0x6507 | 0x6500 | 0x6502 | 0x6501 |
| 0x1302 | 0x6507 | 0x6500 | 0x6502 | 0x6501 |
| 0x1310 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x1311 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x1312 | 0x6500 | 0x6507 | 0x6502 | 0x6509 |
| 0x1320 | 0x6556 | 0x6557 | 0x6508 | 0x6507 |
| 0x1330 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1331 | 0x6507 | 0x654E | 0x6508 | 0x6522 |
| 0x1332 | 0x6507 | 0x6508 | 0x655C | 0x655D |
| 0x1340 | 0x6503 | 0x6500 | 0x6507 | 0x6506 |
| 0x1350 | 0x6503 | 0x6500 | 0x6507 | 0x6506 |
| 0x1360 | 0x6507 | 0x6502 | 0x6503 | 0x6517 |
| 0x1361 | 0x6507 | 0x6502 | 0x6503 | 0x6517 |
| 0x1362 | 0x6507 | 0x6502 | 0x6503 | 0x6517 |
| 0x1370 | 0x651D | 0x6518 | 0x6507 | 0x6502 |
| 0x1371 | 0x651D | 0x6518 | 0x6507 | 0x6502 |
| 0x1372 | 0x651D | 0x6518 | 0x6507 | 0x6502 |
| 0x1380 | 0x651A | 0x6503 | 0x6517 | 0x6508 |
| 0x1381 | 0x651A | 0x6503 | 0x6517 | 0x6508 |
| 0x1382 | 0x651A | 0x6503 | 0x6517 | 0x6508 |
| 0x1390 | 0x651E | 0x6503 | 0x6508 | 0x6517 |
| 0x1391 | 0x651E | 0x6503 | 0x6508 | 0x6517 |
| 0x1392 | 0x651E | 0x6503 | 0x6508 | 0x6517 |
| 0x13A0 | 0x651E | 0x6503 | 0x6508 | 0x6517 |
| 0x13A1 | 0x651E | 0x6503 | 0x6508 | 0x6517 |
| 0x13A2 | 0x651E | 0x6503 | 0x6508 | 0x6517 |
| 0x13B0 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x13B1 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x13B2 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x13B3 | 0x650E | 0x6507 | 0x6517 | 0x650D |
| 0x13C0 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x13C1 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x13C2 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x13C3 | 0x650F | 0x6507 | 0x6517 | 0x650D |
| 0x13D0 | 0x6523 | 0x6524 | 0x6507 | 0x6503 |
| 0x13D1 | 0x6523 | 0x6524 | 0x6507 | 0x6503 |
| 0x13D2 | 0x6520 | 0x6501 | 0x6507 | 0x6503 |
| 0x13D3 | 0x6520 | 0x6501 | 0x6507 | 0x6503 |
| 0x13D4 | 0x6521 | 0x6501 | 0x6507 | 0x6503 |
| 0x13D5 | 0x6521 | 0x6501 | 0x6507 | 0x6503 |
| 0x13D6 | 0x6552 | 0x6553 | 0x6554 | 0x6555 |
| 0x13D7 | 0x6520 | 0x6501 | 0x6507 | 0x6503 |
| 0x13D8 | 0x6520 | 0x6501 | 0x6507 | 0x6503 |
| 0x13D9 | 0x6521 | 0x6501 | 0x6507 | 0x6503 |
| 0x13DA | 0x6521 | 0x6501 | 0x6507 | 0x6503 |
| 0x13E0 | 0x6507 | 0x654E | 0x6508 | 0x6522 |
| 0x13E1 | 0x6507 | 0x654E | 0x6508 | 0x6522 |
| 0x13E2 | 0x6507 | 0x654E | 0x6508 | 0x6522 |
| 0x1400 | 0x652B | 0x652C | 0x6507 | 0x6501 |
| 0x1401 | 0x652B | 0x652C | 0x6507 | 0x6501 |
| 0x1402 | 0x6529 | 0x6501 | 0x6507 | 0x6503 |
| 0x1403 | 0x6529 | 0x6501 | 0x6507 | 0x6503 |
| 0x1404 | 0x652A | 0x6501 | 0x6507 | 0x6503 |
| 0x1405 | 0x652A | 0x6501 | 0x6507 | 0x6503 |
| 0x1406 | 0x6529 | 0x6501 | 0x6507 | 0x6503 |
| 0x1407 | 0x6529 | 0x6501 | 0x6507 | 0x6503 |
| 0x1408 | 0x652A | 0x6501 | 0x6507 | 0x6503 |
| 0x1409 | 0x652A | 0x6501 | 0x6507 | 0x6503 |
| 0x1410 | 0x6502 | 0x6500 | 0x6501 | 0x6503 |
| 0x1411 | 0x6502 | 0x6500 | 0x6501 | 0x6503 |
| 0x1412 | 0x6502 | 0x6500 | 0x6501 | 0x6503 |
| 0x1420 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1421 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1422 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1423 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1430 | 0x652F | 0x6530 | 0x6507 | 0x6501 |
| 0x1431 | 0x652F | 0x6530 | 0x6507 | 0x6501 |
| 0x1432 | 0x652D | 0x6501 | 0x6507 | 0x6503 |
| 0x1433 | 0x652D | 0x6501 | 0x6507 | 0x6503 |
| 0x1434 | 0x652E | 0x6501 | 0x6507 | 0x6503 |
| 0x1435 | 0x652E | 0x6501 | 0x6507 | 0x6503 |
| 0x1436 | 0x652D | 0x6501 | 0x6507 | 0x6503 |
| 0x1437 | 0x652D | 0x6501 | 0x6507 | 0x6503 |
| 0x1438 | 0x652E | 0x6501 | 0x6507 | 0x6503 |
| 0x1439 | 0x652E | 0x6501 | 0x6507 | 0x6503 |
| 0x1440 | 0x6502 | 0x6500 | 0x6501 | 0x6503 |
| 0x1441 | 0x6502 | 0x6500 | 0x6501 | 0x6503 |
| 0x1442 | 0x6502 | 0x6500 | 0x6501 | 0x6503 |
| 0x1450 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1451 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1452 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1453 | 0x6502 | 0x6507 | 0x6503 | 0x6501 |
| 0x1460 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1461 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1462 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1463 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1470 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1471 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1472 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1473 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1480 | 0x650C | 0x6501 | 0x656D | 0x6503 |
| 0x1481 | 0x650C | 0x6501 | 0x656D | 0x6503 |
| 0x1491 | 0x6507 | 0x6502 | 0x656E | 0x656F |
| 0x1510 | 0x6504 | 0x6505 | 0x6507 | 0x6518 |
| 0x1511 | 0x6504 | 0x6505 | 0x6507 | 0x6518 |
| 0x1530 | 0x650B | 0x651D | 0x6507 | 0x6502 |
| 0x1541 | 0x6508 | 0x6522 | 0x6502 | 0x6507 |
| 0x1542 | 0x6508 | 0x6522 | 0x6502 | 0x6507 |
| 0x1543 | 0x6508 | 0x6522 | 0x6502 | 0x6507 |
| 0x1544 | 0x6508 | 0x6522 | 0x6502 | 0x6507 |
| 0x1545 | 0x6507 | 0x6508 | 0x655B | 0x655E |
| 0x1550 | 0x650A | 0x6501 | 0x6507 | 0x6508 |
| 0x1551 | 0x650A | 0x6501 | 0x6507 | 0x6508 |
| 0x1560 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1561 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1562 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1563 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1564 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1565 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1570 | 0x6502 | 0x6510 | 0x6507 | 0x6503 |
| 0x1571 | 0x6502 | 0x6510 | 0x6507 | 0x6503 |
| 0x1580 | 0x6502 | 0x6511 | 0x6507 | 0x6503 |
| 0x1581 | 0x6502 | 0x6511 | 0x6507 | 0x6503 |
| 0x1590 | 0x6501 | 0x6509 | 0x6507 | 0x6517 |
| 0x15A1 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x15A2 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x15C0 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x15C1 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x15F0 | 0x6565 | 0x6566 | 0x6567 | 0x6508 |
| 0x1600 | 0x6502 | 0x6522 | 0x6507 | 0x6529 |
| 0x1601 | 0x6502 | 0x6522 | 0x6507 | 0x6529 |
| 0x1610 | 0x6502 | 0x6522 | 0x6507 | 0x6529 |
| 0x1611 | 0x6502 | 0x6522 | 0x6507 | 0x6529 |
| 0x1620 | 0x6507 | 0x6548 | 0x6517 | 0x6502 |
| 0x1621 | 0x6547 | 0x6546 | 0x6545 | 0x6544 |
| 0x1622 | 0x6544 | 0x6535 | 0x6536 | 0x6507 |
| 0x1623 | 0x6544 | 0x6537 | 0x6538 | 0x6507 |
| 0x1624 | 0x6545 | 0x6533 | 0x6534 | 0x6507 |
| 0x1625 | 0x6539 | 0x653D | 0x6522 | 0x6508 |
| 0x1626 | 0x653A | 0x653E | 0x6522 | 0x6508 |
| 0x1627 | 0x651E | 0x6549 | 0x6507 | 0x6517 |
| 0x1628 | 0x6539 | 0x653B | 0x6522 | 0x6507 |
| 0x1629 | 0x653A | 0x653C | 0x6522 | 0x6507 |
| 0x162A | 0x6507 | 0x6522 | 0x653F | 0x6502 |
| 0x162B | 0x6508 | 0x6522 | 0x6502 | 0x6507 |
| 0x162C | 0x6507 | 0x6518 | 0x6547 | 0x6502 |
| 0x162D | 0x6507 | 0x6519 | 0x6502 | 0x6522 |
| 0x162E | 0x6531 | 0x653B | 0x6522 | 0x6507 |
| 0x162F | 0x6532 | 0x653C | 0x6522 | 0x6507 |
| 0x1630 | 0x6522 | 0x6512 | 0x6502 | 0x6507 |
| 0x17E0 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x17E3 | 0x6507 | 0x6508 | 0x6501 | 0x6517 |
| 0x1800 | 0x6507 | 0x654E | 0x6502 | 0x6517 |
| 0x1801 | 0x6507 | 0x654E | 0x6502 | 0x6517 |
| 0x1810 | 0x6539 | 0x653B | 0x653A | 0x653C |
| 0x1820 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1821 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1822 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1823 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1824 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1830 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1831 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1832 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1833 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1834 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1835 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1840 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1841 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1842 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1843 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1844 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1845 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1850 | 0x6507 | 0x654E | 0x6502 | 0x6517 |
| 0x1A00 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1A01 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1A02 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1A03 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1A04 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1A10 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A20 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A21 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A30 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A31 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A32 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A33 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A40 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A41 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A42 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A43 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A50 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A51 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A52 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A53 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A60 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A61 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A62 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A63 | 0x6500 | 0x6501 | 0x6507 | 0x6525 |
| 0x1A70 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A71 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A72 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A80 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A81 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A82 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A90 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A91 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1A92 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AA0 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AA1 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AA2 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AB0 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AB1 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AB2 | 0x6507 | 0x6503 | 0x6501 | 0x650A |
| 0x1AC0 | - | - | - | - |
| 0x1AC1 | - | - | - | - |
| 0x1AC2 | - | - | - | - |
| 0x1AD0 | - | - | - | - |
| 0x1AD1 | - | - | - | - |
| 0x1AD2 | - | - | - | - |
| 0x1AE0 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1AE1 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1AE2 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1AF0 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1AF1 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1AF2 | 0x6507 | 0x6508 | 0x6501 | 0x650A |
| 0x1B00 | - | - | - | - |
| 0x1B01 | - | - | - | - |
| 0x1B02 | - | - | - | - |
| 0x1B10 | - | - | - | - |
| 0x1B11 | - | - | - | - |
| 0x1B12 | - | - | - | - |
| 0x1B20 | - | - | - | - |
| 0x1B21 | - | - | - | - |
| 0x1B22 | - | - | - | - |
| 0x1B30 | - | - | - | - |
| 0x1B31 | - | - | - | - |
| 0x1B32 | - | - | - | - |
| 0x1B40 | - | - | - | - |
| 0x1B41 | - | - | - | - |
| 0x1B42 | - | - | - | - |
| 0x1B50 | - | - | - | - |
| 0x1B51 | - | - | - | - |
| 0x1B52 | - | - | - | - |
| 0x1B60 | 0x6507 | 0x6503 | 0x6508 | 0x6517 |
| 0x1B61 | 0x6507 | 0x6503 | 0x6508 | 0x6517 |
| 0x1B62 | 0x6507 | 0x6503 | 0x6508 | 0x6517 |
| 0x1B70 | 0x6507 | 0x6503 | 0x6508 | 0x6517 |
| 0x1B71 | 0x6507 | 0x6503 | 0x6508 | 0x6517 |
| 0x1B80 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1B81 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1B90 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1B91 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1BA0 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1BA1 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1BB0 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1BB1 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x1BD1 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BE0 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BE1 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BE2 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BE3 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BF2 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1C00 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C01 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C02 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C03 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C04 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C10 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C11 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C12 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C13 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C14 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C15 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C16 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C17 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C20 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C21 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C22 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C23 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C24 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C25 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C26 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C27 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C30 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C31 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C32 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C33 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C40 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C41 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C42 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C43 | 0x6508 | 0x654E | 0x6503 | 0x6517 |
| 0x1C50 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x1C51 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x1C60 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x1C61 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x1C62 | 0x654B | 0x6508 | 0x6507 | 0x6501 |
| 0x1C70 | - | - | - | - |
| 0x1C71 | - | - | - | - |
| 0x1C72 | - | - | - | - |
| 0x1C80 | - | - | - | - |
| 0x1C81 | - | - | - | - |
| 0x1C82 | - | - | - | - |
| 0x1C90 | - | - | - | - |
| 0x1C91 | - | - | - | - |
| 0x1C92 | - | - | - | - |
| 0x1CA0 | - | - | - | - |
| 0x1CA1 | - | - | - | - |
| 0x1CA2 | - | - | - | - |

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
| F_ART_ERW | ja |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x1160 | 0x654B | 0x6508 | 0x6507 | 0x6517 |
| 0x1162 | 0x654B | 0x6508 | 0x6507 | 0x6517 |
| 0x1351 | 0x6503 | 0x6500 | 0x6507 | 0x6506 |
| 0x1464 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1474 | 0x6508 | 0x6507 | 0x6501 | 0x6502 |
| 0x1490 | 0x6507 | 0x6502 | 0x656E | 0x656F |
| 0x1500 | 0x6540 | 0x6541 | 0x6542 | 0x6543 |
| 0x1520 | 0x6520 | 0x6521 | 0x6522 | 0x654D |
| 0x1521 | 0x6520 | 0x6521 | 0x6522 | 0x654D |
| 0x1522 | 0x6520 | 0x6521 | 0x6522 | 0x654D |
| 0x1523 | 0x6520 | 0x6521 | 0x6522 | 0x654D |
| 0x1540 | 0x6508 | 0x6522 | 0x6502 | 0x6507 |
| 0x1552 | 0x650A | 0x6502 | 0x6507 | 0x6508 |
| 0x1553 | 0x650A | 0x6502 | 0x6507 | 0x6508 |
| 0x15A0 | 0x6507 | 0x6502 | 0x6558 | 0x6559 |
| 0x15D0 | 0x6517 | 0x6502 | 0x6507 | 0x6510 |
| 0x15D1 | 0x6517 | 0x6502 | 0x6507 | 0x6510 |
| 0x15E0 | 0x655A | 0x6508 | 0x6503 | 0x6501 |
| 0x1B63 | 0x6507 | 0x6503 | 0x6508 | 0x6517 |
| 0x1BD2 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BF0 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |
| 0x1BF1 | 0x6501 | 0x6502 | 0x6507 | 0x6508 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| ?06? | ERROR_ECU_RESPONSE_INCORRECT_DATA_IDENTIFIER |
| ?07? | ERROR_ECU_RESPONSE_TOO_MUCH_DATA |
| ?08? | ERROR_ECU_RESPONSE_TOO_LESS_DATA |
| ?09? | ERROR_ECU_RESPONSE_VALUE_OUT_OF_RANGE |
| ?14? | ERROR_ECU_RESPONSE_INCORRECT_IO_CONTROL_PARAMETER |
| ?18? | ERROR_ECU_RESPONSE_NO_STRING_END_CHAR |
| ?1F? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_EXIT_STATUS |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |
| 1 | D-CAN |

### ARG_0X6440_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRUPPENAUSWAHL | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | 511.0 | bitweise Angabe der zu löschenden Adaptionsgruppen: 0 = nicht zugeordnete Funktionen; 1 = Kraftstoffgemisch; 2 = Leerlaufvorsteuerung; 3 = Getriebe; 4 = EGAS-Lageregelung; 5 = Sensorik Fahrwertgeber; 6 = Sensorik Drosselklappenwinkel; 7 = ASC; 8 = Klopfregelung |

### ARG_0X6442_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOCKENWELLENDIAGNOSE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | De-/Aktivierung Nockenwellendiagnose: 0 == DEAKTIVIEREN; 1 == AKTIVIEREN |

### ARG_0X6444_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_GETRIEBE_NEUTRAL | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den Neutralgang in Volt |
| ADAPTION_GETRIEBE_GANG1 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 1. Gang in Volt |
| ADAPTION_GETRIEBE_GANG2 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 2. Gang in Volt |
| ADAPTION_GETRIEBE_GANG3 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 3. Gang in Volt |
| ADAPTION_GETRIEBE_GANG4 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 4. Gang in Volt |
| ADAPTION_GETRIEBE_GANG5 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 5. Gang in Volt |
| ADAPTION_GETRIEBE_GANG6 | V | high | unsigned int | - | - | 1000.0 | 1.0 | 0.0 | - | - | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 6. Gang in Volt |

### ARG_0X6445_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_LAMBDAREGELUNG_BANKNR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 2.0 | Banknummer der auszulesenden Lambdaregeladaptionsdaten |
| ADAPTION_LAMBDAREGELUNG_LABEL | 0-n | high | unsigned char | - | TAB_MR_LAMBDAADAPTION_LABEL | - | - | - | - | - | auszulesendes Label der Lambdaregeladaption |
| ADAPTION_LAMBDAREGELUNG_TEILENR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 4.0 | Teilenummer des auszulesenden Labels |

### ARG_0X6446_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADAPTION_LAMBDAREGELUNG_BANKNR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 2.0 | Banknummer der auszulesenden Lambdaregeladaptionsdaten |
| ADAPTION_LAMBDAREGELUNG_LABEL | 0-n | high | unsigned char | - | TAB_MR_LAMBDAADAPTION_LABEL | - | - | - | - | - | auszulesendes Label der Lambdaregeladaption |
| ADAPTION_LAMBDAREGELUNG_TEILENR | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 4.0 | Teilenummer des auszulesenden Labels |
| ADAPTION_LAMBDAREGELUNG_DATEN_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | - | - | durch  Banknummer, Label und Teilenummer spezifizierte Daten der Lambdaregelungsadaption |

### ARG_0X6447_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUDIAGNOSE_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/aktivierung der Verbaudiagnose des Leerlaufsteppers: 1 == aktiv, 0 == inaktiv |
| VERBAUDIAGNOSE_DAUER | s | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | zulässige Gesamtdauer der Verbaudiagnose des Leerlaufsteppers in Sekunden |

### ARG_0X6450_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die mit EV_ANSTEUERN_NUMMER ausgewählten Einspritzventile |
| EV_ANSTEUERN_NUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, z.B. 9 -> 0b00001001 -> Ansteuerung des 1. und des 4. EVs in Zündreihenfolge |

### ARG_0X6451_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SLV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Sekundärluftventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6452_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEV_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Tankentlüftungsventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| TEV_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung des Tankentlüftungsventils in Prozent |

### ARG_0X6453_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Elektrokraftstoffpumpe in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| EKP_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Elektrokraftstoffpumpe in Prozent |

### ARG_0X6454_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELUE_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den elektrischen Motorlüfter in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6455_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSH_ANSTEUERN_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | -1.0 | - | 2.0 | Banknummer der anzusteuernden Lambdasondenheizung |
| LSH_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Lambdasondenheizung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| LSH_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Lambdasondenheizung in Prozent; war Pausenzeit in x*100ms |

### ARG_0X6456_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UETM_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Übertemperaturleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6457_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MIL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für die Motorwarnleuchte in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X6458_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Abgasklappensteller in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| AGKL_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Abgasklappenstellers in Prozent |

### ARG_0X6459_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IFRKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Interferenzrohrklappensteller in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| IFRKL_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Interferenzrohrklappenstellers in Prozent |

### ARG_0X645A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DISA_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Schaltsaugrohres in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DISA_ANSTEUERN_SZ | 0-n | high | unsigned char | - | TAB_MR_SCHALTSAUGROHR | - | - | - | - | - | Sollzustand des Schaltsaugrohres bei Ansteuerung |

### ARG_0X645B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKM_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung des Drosselklappenmotors in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DKM_ANSTEUERN_START | % | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -95.0 | 95.0 | Startposition der Ansteuerung des Drosselklappenmotors in Prozent |
| DKM_ANSTEUERN_ENDE | % | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -95.0 | 95.0 | Endposition der Ansteuerung des Drosselklappenmotors in Prozent |
| DKM_ANSTEUERN_GRADIENT | %/s | high | unsigned long | - | - | 2147483648.0 | 50000.0 | 0.0 | 0.0 | 99999.9999 | Gradient der Ansteuerung des Drosselklappenmotors in Prozent je Sekunde |

### ARG_0X645C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKR_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung/Stimulierung der Drosselklappenlageregelung in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| DKR_ANSTEUERN_START | % | high | unsigned int | - | - | 65536.0 | 1600.0 | 0.0 | 0.0 | 100.0 | Startposition/-sollwert der Stimulierung der Drosselklappenlageregelung in Prozent |
| DKR_ANSTEUERN_ENDE | % | high | unsigned int | - | - | 65536.0 | 1600.0 | 0.0 | 0.0 | 100.0 | Endposition/-sollwert der Stimulierung der Drosselklappenlageregelung in Prozent |
| DKR_ANSTEUERN_GRADIENT | %/s | high | unsigned long | - | - | 2147483648.0 | 50000.0 | 0.0 | 0.0 | 50000.0 | Gradient der Ansteuerung/Stimulierung der Drosselklappenlageregelung in Prozent je Sekunde |

### ARG_0X645D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKL_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für das Akustikklappenventil in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |

### ARG_0X645E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVEKP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der gemeinsamen Ansteuerung für die mit EVEKP_ANSTEUERN_EVNUMMER ausgewählten Einspritzventile und die EKP |
| EVEKP_ANSTEUERN_EVNUMMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | bitcodierte Angabe der anzusteuernden Einspritzventile in Zündreihenfolge, z.B. 9 -> 0b00001001 -> Ansteuerung des 1. und des 4. EVs in Zündreihenfolge |
| EVEKP_ANSTEUERN_PULSDAUER | µs | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Pulsdauer der Ansteuerung der über EVEKP_ANSTEUERN_EVNUMMER ausgewählten Einspritzventile in Mikrosekunden |
| EVEKP_ANSTEUERN_EKPTV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | 100.0 | Tastverhältnis der Ansteuerung der Elektrokraftstoffpumpe (bei gemeinsamer Ansteuerung mit Einspritzventilen) in Prozent |

### ARG_0X645F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LLSTP_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Leerlaufstepper in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| LLSTP_ANSTEUERN_POSITION | % | high | unsigned int | - | - | 65536.0 | 100.0 | 0.0 | - | - | anzusteuernde Position des Leerlaufsteppers in Prozent |

### ARG_0X6460_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RFHST_ANSTEUERN_DAUER | s | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung für den Steller der Rückfahrhilfe in Sekunden; Bei Ansteuerdauer == 0 verwendet das SG den applizierten Defaultwert. |
| RFHST_ANSTEUERN_TV | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 10.0 | 90.0 | Tastverhältnis der Ansteuerung des Steller der Rückfahrhilfe in Prozent |

### ARG_0X6470_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRGESTELLNUMMER | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | EWS-Fahrgestellnummer |

### ARG_0X6471_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Schlüsselnummer |
| SCHLUESSEL_TYP | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 3.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel; 2 == Hauptschlüssel; 3 == Nachschlüssel |
| AUTOINIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Autoinit: 0 == keine automatische Initialisierung; 1 == automatische Initialisierung |
| SCHLUESSEL_SPERRE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schlüsselsperrung: 0 == nicht sperren; 1 == sperren |
| SCHLUESSEL_ANLERNZUSTAND | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Schlüsselanlernzustand: 0 == Schlüssel nicht angelernt; 1 == Schlüssel angelernt |
| MSC_HANDLING | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | mechanischen Schlüsselcode nicht lesen (Geldbörsenschlüssel) bzw. schreiben (andere Schlüssel): 0 ==  aktiv; 1 == inaktiv |
| SCHLUESSEL_ID | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Schlüsselidentifier |
| SECRET_KEY | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Secret Key des Schlüssel |
| PASSWORD | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Secret Key des Schlüssel |

### ARG_0X6472_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Tag des Schlüsselanlerndatums |
| MONAT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Monat des Schlüsselanlerndatums |
| JAHR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2009.0 | 2256.0 | Jahr des Schlüsselanlerndatums |
| ORT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ort des Schlüsselanlernens |

### ARG_0X6473_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STARTCODE | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Startcode zum Starten des EWS-Schlüsselanlernprozesses |

### ARG_0X6474_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSELCODE | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | mechanischer Schlüsselcode in ASCII |

### ARG_0X6475_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERRIEGELUNGCODE | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Code zur Verriegelung des SGs |

### ARG_0X6476_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des zu sperrenden Schlüssels |

### ARG_0X6477_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des freizugebenden Schlüssels |

### ARG_0X6479_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHLUESSEL_NUMBER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 10.0 | Nummer des Schlüssels, dessen Daten ausgelesen werden sollen |

### ARG_0X64A1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRUNG_EKP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | De-/Aktivierung der Sperrung von EKP, Anlasser und Einspritzung: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X64A2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOESCHUNG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1.0 | Löschen der Überdrehzahlereignisse: 1 == Löschen |

### ARG_0X64A3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VARIANTE_AKUSTIK | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung der länderspezifischen Datenvariante der Funktion AKUSTIK: 1 == AKTIVIERUNG, 0 == DEAKTIVIERUNG |

### ARG_0X64A4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL_WERK_BEGRENZUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Drehzahlbegrenzung für das Werk: 0 == DEAKTIVIEREN; 1 == AKTIVIEREN |

### ARG_0X64A5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPERRUNG_TEV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung der Sperrung des Tankentlüftungsventils: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X64A6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERKSPROZESS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | De-/Aktivierung des Werksprozess: 0 == DEAKTIVIERUNG, 1 == AKTIVIERUNG |

### ARG_0X64C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_KMSTAND | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Servicekilometerstand |

### ARG_0XE119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_SCHREIBEN | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | GWSZ im Kombi auf neuen Wert setzen |

### ARG_0XE12C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_TAG | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tag, an dem der nächste Service fällig ist |
| SERVICE_MONAT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Monat, an dem der nächste Service fällig ist |
| SERVICE_JAHR | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr, an dem der nächste Service fällig ist |

### ARG_0XE12D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESTWEG | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Wegstreckenintervalles bis zur nächsten Seviceanzeige |

### BF_TAB_MR_ADAPTIONSFREIGABE_GETRIEBE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_GETRIEBE_FREIGABE_NEUTRAL | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Freigabe Adaption Neutralgang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Freigabe Adaption 1. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Freigabe Adaption 2. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Freigabe Adaption 3. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Freigabe Adaption 4. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Freigabe Adaption 5. Gang: 1=vorhanden; 0=nicht vorhanden |
| STAT_ADAPTION_GETRIEBE_FREIGABE_GANG6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Freigabe Adaption 6. Gang: 1=vorhanden; 0=nicht vorhanden |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x1000 | Abgasklappe Endstufe, Kurzschluss nach Masse |
| 0x1001 | Abgasklappe Endstufe, Kurzschluss nach UBatt |
| 0x1002 | Abgasklappe Endstufe, Leitungsabfall |
| 0x1003 | Abgasklappe Endstufe, Übertemperatur |
| 0x1020 | elektrische Kraftstoffpumpe Endstufe, Kurzschluss nach Masse |
| 0x1021 | elektrische Kraftstoffpumpe Endstufe, Kurzschluss nach UBatt |
| 0x1022 | elektrische Kraftstoffpumpe Endstufe, Leitungsabfall |
| 0x1023 | elektrische Kraftstoffpumpe Endstufe, Übertemperatur |
| 0x1030 | Interferenzrohrklappe Endstufe, Kurzschluss nach Masse |
| 0x1031 | Interferenzrohrklappe Endstufe, Kurzschluss nach UBatt |
| 0x1032 | Interferenzrohrklappe Endstufe, Leitungsabfall |
| 0x1033 | Interferenzrohrklappe Endstufe, Übertemperatur |
| 0x1040 | Sprunglambdasondenheizung 1 Endstufe, Kurzschluss nach Masse |
| 0x1041 | Sprunglambdasondenheizung 1 Endstufe, Kurzschluss nach UBatt |
| 0x1042 | Sprunglambdasondenheizung 1 Endstufe, Leitungsabfall |
| 0x1043 | Sprunglambdasondenheizung 1 Endstufe, Übertemperatur |
| 0x1050 | Sprunglambdasondenheizung 2 Endstufe, Kurzschluss nach Masse |
| 0x1051 | Sprunglambdasondenheizung 2 Endstufe, Kurzschluss nach UBatt |
| 0x1052 | Sprunglambdasondenheizung 2 Endstufe, Leitungsabfall |
| 0x1053 | Sprunglambdasondenheizung 2 Endstufe, Übertemperatur |
| 0x1060 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Kurzschluss nach Masse |
| 0x1061 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Kurzschluss nach UBatt |
| 0x1062 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Leitungsabfall |
| 0x1063 | Elektrokraftstoffpumpe Low-Side Endstufe intern, Übertemperatur |
| 0x1070 | Rückfahrhilfe Endstufe, Kurzschluss nach Masse |
| 0x1071 | Rückfahrhilfe Endstufe, Kurzschluss nach UBatt |
| 0x1072 | Rückfahrhilfe Endstufe, Leitungsabfall |
| 0x1073 | Rückfahrhilfe Endstufe, Übertemperatur |
| 0x1080 | Sekundärluftventil Endstufe, Kurzschluss nach Masse |
| 0x1081 | Sekundärluftventil Endstufe, Kurzschluss nach UBatt |
| 0x1082 | Sekundärluftventil Endstufe, Leitungsabfall |
| 0x1083 | Sekundärluftventil Endstufe, Übertemperatur |
| 0x1090 | Starterrelais Endstufe, Kurzschluss nach Masse |
| 0x1091 | Starterrelais Endstufe, Kurzschluss nach UBatt |
| 0x1092 | Starterrelais Endstufe, Leitungsabfall |
| 0x1093 | Starterrelais Endstufe, Übertemperatur |
| 0x10A0 | Tankentlüftungsventil Endstufe, Kurzschluss nach Masse |
| 0x10A1 | Tankentlüftungsventil Endstufe, Kurzschluss nach UBatt |
| 0x10A2 | Tankentlüftungsventil Endstufe, Leitungsabfall |
| 0x10A3 | Tankentlüftungsventil Endstufe, Übertemperatur |
| 0x10D0 | Schaltsaugrohr Endstufe, Kurzschluss nach Masse |
| 0x10D1 | Schaltsaugrohr Endstufe, Kurzschluss nach UBatt |
| 0x10D2 | Schaltsaugrohr Endstufe, Leitungsabfall |
| 0x10D3 | Schaltsaugrohr Endstufe, Übertemperatur |
| 0x10E0 | Hauptrelais Endstufe, Kurzschluss nach Masse |
| 0x10E1 | Hauptrelais Endstufe, Kurzschluss nach UBatt |
| 0x10E2 | Hauptrelais Endstufe, Leitungsabfall |
| 0x1101 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung |
| 0x1102 | Elektrokraftstoffpumpe Bauteileschutz Sicherungsfunktion, Überstrom |
| 0x1111 | System Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung |
| 0x1112 | System Bauteileschutz Sicherungsfunktion, Überstrom |
| 0x1121 | Zündung Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung |
| 0x1122 | Zündung Bauteileschutz Sicherungsfunktion, Überstrom |
| 0x1131 | E-Lüfter Bauteileschutz Sicherungsfunktion, Kurzschluss nach Masse oder Unterspannung |
| 0x1132 | E-Lüfter Bauteileschutz Sicherungsfunktion, Überstrom |
| 0x1140 | Killschalter, Signal prellt zu stark |
| 0x1150 | Klemme 15, unplausibles Signal oder Wert |
| 0x1161 | Batterie, Spannung zu niedrig |
| 0x1172 | Kupplungsschalter 1, Kupplung geschlossen, Fehler Plausibilisierung im Schubbetrieb |
| 0x1173 | Kupplungsschalter 1, Kupplung offen, Signal unplausibel |
| 0x1180 | Getriebeschaltwalzenpotentiometer, Signal oder Wert oberhalb Schwelle |
| 0x1181 | Getriebeschaltwalzenpotentiometer, Signal oder Wert unterhalb Schwelle |
| 0x1182 | Getriebeschaltwalzenpotentiometer, unplausibles Signal oder Wert |
| 0x1183 | Getriebeschaltwalzenpotentiometer, unvollständige Gangadaption bei freigeschaltetem Schaltassistent |
| 0x1190 | Schalthebelsensor, Spannung oberhalb Schwelle |
| 0x1191 | Schalthebelsensor, Spannung unterhalb Schwelle |
| 0x1192 | Schalthebelsensor, unplausible Spannung |
| 0x1193 | Schalthebelsensor, fehlerhafte Spannung |
| 0x1194 | Schalthebelsensor, Adaption nicht abgeschlossen |
| 0x11A0 | ASC-ABS-Taster, unplausibles Signal oder Wert |
| 0x11B0 | Hinterradgeschwindigkeit ABS, unplausibles Signal oder Wert |
| 0x11C0 | Vorderradgeschwindigkeit ABS, unplausibles Signal oder Wert |
| 0x11D0 | Fahrzeuggeschwindigkeit CAN, kein Signal oder Wert |
| 0x11E0 | Bremslichtschalter hinten, Signal oder Wert oberhalb Schwelle |
| 0x11F0 | Bremslichtschalter vorne, Signal oder Wert oberhalb Schwelle |
| 0x1213 | CAN-Botschaft Geschwindigkeit, Fehler Overrun |
| 0x1223 | CAN-Botschaft Sensorbox ID1, Fehler Overrun |
| 0x1233 | CAN-Botschaft Sensorbox ID4, Fehler Overrun |
| 0x1243 | CAN-Botschaft Sensorbox ID7, Fehler Overrun |
| 0x1263 | CAN-Botschaft Kombidaten, Fehler Overrun |
| 0x1273 | CAN-Botschaft Status Fahrzeug Zugriff, Fehler Overrun |
| 0x1300 | Sensorbox, Fehler Spannungsversorgung |
| 0x1301 | Sensorbox, Zeitüberschreitung CAN-Nachricht |
| 0x1302 | Sensorbox, Sensor- oder Signalfehler |
| 0x1310 | Sturzsensor, Kurzschluss nach UBatt |
| 0x1311 | Sturzsensor, Kurzschluss nach Masse |
| 0x1312 | Sturzsensor, Sturz erkannt |
| 0x1320 | Längsbeschleunigungssensor, Signal unplausibel |
| 0x1330 | Seitenstützenschalter, Signale beider Kanäle zueinander unplausibel |
| 0x1331 | Seitenstützenschalter, nicht eingeklappter Seitenstützständer während der Fahrt |
| 0x1332 | Seitenstützenschalter, unplausible Signale während der Fahrt |
| 0x1340 | Ölniveaugeber, Sensorfehler |
| 0x1350 | Ölniveaugeber, Ölstand zu hoch |
| 0x1360 | Drucksensor, Umgebung, Signal oder Wert oberhalb Schwelle |
| 0x1361 | Drucksensor, Umgebung, Signal oder Wert unterhalb Schwelle |
| 0x1362 | Drucksensor, Umgebung, unplausibles Signal oder Wert |
| 0x1370 | Drucksensor, Kraftstoff, Signal oder Wert oberhalb Schwelle |
| 0x1371 | Drucksensor, Kraftstoff, Signal oder Wert unterhalb Schwelle |
| 0x1372 | Drucksensor, Kraftstoff, unplausibles Signal oder Wert |
| 0x1380 | Temperatursensor, Ansaugluft, Signal oder Wert unterhalb Schwelle |
| 0x1381 | Temperatursensor, Ansaugluft, Signal oder Wert oberhalb Schwelle |
| 0x1382 | Temperatursensor, Ansaugluft, unplausibles Signal oder Wert |
| 0x1390 | Temperatursensor, Motor, Signal oder Wert oberhalb Schwelle |
| 0x1391 | Temperatursensor, Motor, Signal oder Wert unterhalb Schwelle |
| 0x1392 | Temperatursensor, Motor, unplausibles Signal oder Wert |
| 0x13A0 | Temperatursensor, Öl, Signal oder Wert oberhalb Schwelle |
| 0x13A1 | Temperatursensor, Öl, Signal oder Wert unterhalb Schwelle |
| 0x13A2 | Temperatursensor, Öl, unplausibles Signal oder Wert |
| 0x13B0 | Lambdasonde vor Kat, Signal oder Wert unterhalb Schwelle |
| 0x13B1 | Lambdasonde vor Kat, Signal oder Wert oberhalb Schwelle |
| 0x13B2 | Lambdasonde vor Kat, kein Signal oder Wert |
| 0x13B3 | Lambdasonde vor Kat, unplausibles Signal oder Wert |
| 0x13C0 | Lambdasonde 2 vor Kat, Signal oder Wert unterhalb Schwelle |
| 0x13C1 | Lambdasonde 2 vor Kat, Signal oder Wert oberhalb Schwelle |
| 0x13C2 | Lambdasonde 2 vor Kat, kein Signal oder Wert |
| 0x13C3 | Lambdasonde 2 vor Kat, unplausibles Signal oder Wert |
| 0x13D0 | Fahrwertgeber, Vergleichsfehler, Rohwerte |
| 0x13D1 | Fahrwertgeber, Vergleichsfehler, adaptierte Werte |
| 0x13D2 | Fahrwertgeber, Sensor, Kanal 1, MIN-Bereichsfehler |
| 0x13D3 | Fahrwertgeber, Sensor, Kanal 1, MAX-Bereichsfehler |
| 0x13D4 | Fahrwertgeber, Sensor, Kanal 2, MIN-Bereichsfehler |
| 0x13D5 | Fahrwertgeber, Sensor, Kanal 2, MAX-Bereichsfehler |
| 0x13D6 | Fahrwertgeber, Adaption nicht abgeschlossen |
| 0x13D7 | Fahrwertgeber, Sensor, Kanal 1, Kurzschluss nach Masse |
| 0x13D8 | Fahrwertgeber, Sensor, Kanal 1, Kurzschluss nach UBatt |
| 0x13D9 | Fahrwertgeber, Sensor, Kanal 2, Kurzschluss nach Masse |
| 0x13DA | Fahrwertgeber, Sensor, Kanal 2, Kurzschluss nach UBatt |
| 0x13E0 | Kupplungsschalter 2, Kupplung geschlossen, Fehler Plausibilisierung im Schubbetrieb |
| 0x13E1 | Kupplungsschalter 2, Kupplung offen, Signal unplausibel |
| 0x13E2 | Kupplungsschalter 2, Fehler Plausibilisierung beider Kupplungschalter |
| 0x1400 | Drosselklappe 1, Vergleichsfehler, adaptierte Werte |
| 0x1401 | Drosselklappe 1, Vergleichsfehler, Rohwerte |
| 0x1402 | Drosselklappe 1, Sensor, Kanal 1, MIN-Bereichsfehler |
| 0x1403 | Drosselklappe 1, Sensor, Kanal 1, MAX-Bereichsfehler |
| 0x1404 | Drosselklappe 1, Sensor, Kanal 2, MIN-Bereichsfehler |
| 0x1405 | Drosselklappe 1, Sensor, Kanal 2, MAX-Bereichsfehler |
| 0x1406 | Drosselklappe 1, Sensor, Kanal 1, Kurzschluss nach Masse |
| 0x1407 | Drosselklappe 1, Sensor, Kanal 1, Kurzschluss nach UBatt |
| 0x1408 | Drosselklappe 1, Sensor, Kanal 2, Kurzschluss nach Masse |
| 0x1409 | Drosselklappe 1, Sensor, Kanal 2, Kurzschluss nach UBatt |
| 0x1410 | Drosselklappe 1, Initialisierung, Fehler Adaption |
| 0x1411 | Drosselklappe 1, Initialisierung, Fehler Abschaltpfad oder Notlaufpunkt |
| 0x1412 | Drosselklappe 1, Initialisierung, Fehler DK-Motor |
| 0x1420 | Drosselklappe 1, Regelung, Regelanschlag oben |
| 0x1421 | Drosselklappe 1, Regelung, Regelanschlag unten |
| 0x1422 | Drosselklappe 1, Regelung, Lageregelung instabil |
| 0x1423 | Drosselklappe 1, Regelung, Abweichung Ist-Sollwert |
| 0x1430 | Drosselklappe 2, Vergleichsfehler, adaptierte Werte |
| 0x1431 | Drosselklappe 2, Vergleichsfehler, Rohwerte |
| 0x1432 | Drosselklappe 2, Sensor, Kanal 1, MIN-Bereichsfehler |
| 0x1433 | Drosselklappe 2, Sensor, Kanal 1, MAX-Bereichsfehler |
| 0x1434 | Drosselklappe 2, Sensor, Kanal 2, MIN-Bereichsfehler |
| 0x1435 | Drosselklappe 2, Sensor, Kanal 2, MAX-Bereichsfehler |
| 0x1436 | Drosselklappe 2, Sensor, Kanal 1, Kurzschluss nach Masse |
| 0x1437 | Drosselklappe 2, Sensor, Kanal 1, Kurzschluss nach UBatt |
| 0x1438 | Drosselklappe 2, Sensor, Kanal 2, Kurzschluss nach Masse |
| 0x1439 | Drosselklappe 2, Sensor, Kanal 2, Kurzschluss nach UBatt |
| 0x1440 | Drosselklappe 2, Initialisierung, Fehler Adaption |
| 0x1441 | Drosselklappe 2, Initialisierung, Fehler Abschaltpfad oder Notlaufpunkt |
| 0x1442 | Drosselklappe 2, Initialisierung, Fehler DK-Motor |
| 0x1450 | Drosselklappe 2, Regelung, Regelanschlag oben |
| 0x1451 | Drosselklappe 2, Regelung, Regelanschlag unten |
| 0x1452 | Drosselklappe 2, Regelung, Lageregelung instabil |
| 0x1453 | Drosselklappe 2, Regelung, Abweichung Ist-Sollwert |
| 0x1460 | Abgasklappe, Stellmotor, unplausibles Signal oder Wert |
| 0x1461 | Abgasklappe, Stellmotor, Fehler Abgleich |
| 0x1462 | Abgasklappe, Stellmotor, mechanischer Fehler oder Blockade |
| 0x1463 | Abgasklappe, Stellmotor, keine Rückmeldung |
| 0x1470 | Interferenzrohrklappe, Stellmotor, unplausibles Signal oder Wert |
| 0x1471 | Interferenzrohrklappe, Stellmotor, Fehler Abgleich |
| 0x1472 | Interferenzrohrklappe, Stellmotor, mechanischer Fehler oder Blockade |
| 0x1473 | Interferenzrohrklappe, Stellmotor, keine Rückmeldung |
| 0x1480 | Motorlüfter, Signal oder Wert unterhalb Schwelle |
| 0x1481 | Motorlüfter, Signal oder Wert oberhalb Schwelle |
| 0x1491 | Signalqualität Drosselklappensensor, eingeschränkt, Stufe 2 |
| 0x1510 | Leerlaufsteller offen, Überdrehzahlfehler |
| 0x1511 | Leerlaufsteller geschlossen, Unterdrehzahlfehler |
| 0x1530 | elektrisches Kraftstoffsystem, Signal oder Wert unterhalb Schwelle |
| 0x1541 | Fahrgeschwindigkeitsregler, SET-Schalter gesetzt bei Hauptschalter aus |
| 0x1542 | Fahrgeschwindigkeitsregler, RES-Schalter gesetzt bei Hauptschalter aus |
| 0x1543 | Fahrgeschwindigkeitsregler, SET- und RES-Schalter gleichzeitig gesetzt |
| 0x1544 | Fahrgeschwindigkeitsregler, Abschaltung über Schlechtwegerkennung SAF |
| 0x1545 | Fahrgeschwindigkeitsregler, Freigabe verweigert |
| 0x1550 | EWS3, Logistikdatenfehler |
| 0x1551 | EWS3, Signalfehler |
| 0x1560 | EWS4, CAN, Timeout Response CAS |
| 0x1561 | EWS4, CAN, Response CAS nicht authentisch |
| 0x1562 | EWS4, CAN, Nachricht ungültig |
| 0x1563 | EWS4, Datenablage, Schreibfehler |
| 0x1564 | EWS4, Datenablage, Plausibilitätsfehler |
| 0x1565 | EWS4, kein SecretKey programmiert |
| 0x1570 | LR-Adaption, Bank 1, Gemischkorrekturfaktor oberhalb Schwelle |
| 0x1571 | LR-Adaption, Bank 1, Gemischkorrekturfaktor unterhalb Schwelle |
| 0x1580 | LR-Adaption, Bank 2, Gemischkorrekturfaktor oberhalb Schwelle |
| 0x1581 | LR-Adaption, Bank 2, Gemischkorrekturfaktor unterhalb Schwelle |
| 0x1590 | Elektrokraftstoffpumpe, Sperrung |
| 0x15A1 | Klopfregelung, Klopfsensor 1, Leitungsabfall |
| 0x15A2 | Klopfregelung, Klopfsensor 2, Leitungsabfall |
| 0x15C0 | Startfreigabe Sonderzubehör, Sperrung, fehlende Bedatung oder Freischaltcode |
| 0x15C1 | Startfreigabe Sonderzubehör, falsche Konfiguration |
| 0x15F0 | Bremse, Vorderrad, Temperatur zu hoch |
| 0x1600 | Sicherheitskonzept Überwachung Drosselklappenwinkel 1, Abweichung FWG/DK1-Winkel, Rohwerte |
| 0x1601 | Sicherheitskonzept Überwachung Drosselklappenwinkel 1, Abweichung FWG/DK1-Winkel, adaptierte Werte |
| 0x1610 | Sicherheitskonzept Überwachung Drosselklappenwinkel 2, Abweichung FWG/DK2-Winkel, Rohwerte |
| 0x1611 | Sicherheitskonzept Überwachung Drosselklappenwinkel 2, Abweichung FWG/DK2-Winkel, adaptierte Werte |
| 0x1620 | Ebene 2, Überwachung, Drehzahl |
| 0x1621 | Ebene 2, Überwachung, Notlauf |
| 0x1622 | Ebene 2, Überwachung, Drosselklappe 1 |
| 0x1623 | Ebene 2, Überwachung, Drosselklappe 2 |
| 0x1624 | Ebene 2, Überwachung, Fahrwertgeber |
| 0x1625 | Ebene 2, Tempomat, Sollwertüberschreitung, Drosselklappe 1 |
| 0x1626 | Ebene 2, Tempomat, Sollwertüberschreitung, Drosselklappe 2 |
| 0x1627 | Ebene 2, Überwachung, Motortemperatur |
| 0x1628 | Ebene 2, Sollwertüberschreitung, Drosselklappe 1 |
| 0x1629 | Ebene 2, Sollwertüberschreitung, Drosselklappe 2 |
| 0x162A | Ebene 2, Vergleichsfehler, Berechnungswerte Ebene 1 |
| 0x162B | Ebene 2, Berechnung, Fahrzeugmodus |
| 0x162C | Ebene 2, Überwachung, Fehlerreaktion |
| 0x162D | Ebene 2, Berechnung, Zündwinkel |
| 0x162E | Ebene 2, Berechnung, Sollwert, Drosselklappe 1 |
| 0x162F | Ebene 2, Berechnung, Sollwert, Drosselklappe 2 |
| 0x1630 | Ebene 2, Schaltassistent |
| 0x1800 | ABS-Raddrehzahlsensor, Vorderrad, Sensorfehler |
| 0x1801 | ABS-Raddrehzahlsensor, Hinterrad, Sensorfehler |
| 0x1810 | Unterstützung Gangwechsel, Grenzwertüberschreitung Drosselklappen-Zähler |
| 0x1820 | Rückfahrhilfe, Stellmotor, unplausibles Signal oder Wert |
| 0x1821 | Rückfahrhilfe, Stellmotor, Fehler Abgleich |
| 0x1822 | Rückfahrhilfe, Stellmotor, mechanischer Fehler oder Blockade |
| 0x1823 | Rückfahrhilfe, Stellmotor, keine Rückmeldung |
| 0x1824 | Rückfahrhilfe, Stellmotor, zulässige Anzahl Einlegeversuche überschritten |
| 0x1830 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach Masse |
| 0x1831 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach UBatt |
| 0x1832 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach Masse |
| 0x1833 | H-Brücke 1 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach UBatt |
| 0x1834 | H-Brücke 1 Drosselklappe/Bypassstepper, Leitungsabfall |
| 0x1835 | H-Brücke 1 Drosselklappe/Bypassstepper, Übertemperatur |
| 0x1840 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach Masse |
| 0x1841 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 1, Kurzschluss nach UBatt |
| 0x1842 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach Masse |
| 0x1843 | H-Brücke 2 Drosselklappe/Bypassstepper, Ausgang 2, Kurzschluss nach UBatt |
| 0x1844 | H-Brücke 2 Drosselklappe/Bypassstepper, Leitungsabfall |
| 0x1845 | H-Brücke 2 Drosselklappe/Bypassstepper, Übertemperatur |
| 0x1850 | Werksprozess, Aktivierung |
| 0x1A00 | Codierung : falsches Fahrzeug |
| 0x1A01 | Codierung : unplausible Daten während Transaktion |
| 0x1A02 | Codierung : Steuergerät ist nicht codiert |
| 0x1A03 | Codierung : Codiersignaturfehler |
| 0x1A04 | Codierung : Codierdatenübertragungsfehler |
| 0x1A10 | SPI-Kommunikation TriCore <-> CY327 |
| 0x1A20 | CY327, Spannungsversorgung, 5V, Überspannung |
| 0x1A21 | CY327, Spannungsversorgung, 5V, Unterspannung |
| 0x1A30 | CY327, Spannungsversorgung Sensoren 1, Spannungsfehler |
| 0x1A31 | CY327, Spannungsversorgung Sensoren 1, Überspannung |
| 0x1A32 | CY327, Spannungsversorgung Sensoren 1, Kurzschluss nach Masse |
| 0x1A33 | CY327, Spannungsversorgung Sensoren 1, Unterspannung |
| 0x1A40 | CY327, Spannungsversorgung Sensoren 2, Spannungsfehler |
| 0x1A41 | CY327, Spannungsversorgung Sensoren 2, Überspannung |
| 0x1A42 | CY327, Spannungsversorgung Sensoren 2, Kurzschluss nach Masse |
| 0x1A43 | CY327, Spannungsversorgung Sensoren 2, Unterspannung |
| 0x1A50 | CY327, Spannungsversorgung Sensoren 3, Spannungsfehler |
| 0x1A51 | CY327, Spannungsversorgung Sensoren 3, Überspannung |
| 0x1A52 | CY327, Spannungsversorgung Sensoren 3, Kurzschluss nach Masse |
| 0x1A53 | CY327, Spannungsversorgung Sensoren 3, Unterspannung |
| 0x1A60 | CY327, Spannungsversorgung Sensoren 4, Spannungsfehler |
| 0x1A61 | CY327, Spannungsversorgung Sensoren 4, Überspannung |
| 0x1A62 | CY327, Spannungsversorgung Sensoren 4, Kurzschluss nach Masse |
| 0x1A63 | CY327, Spannungsversorgung Sensoren 4, Unterspannung |
| 0x1A70 | Zündung, Endstufe, Identifikation Bausteintreiber |
| 0x1A71 | Zündung, Endstufe, Initialisierung CK200 |
| 0x1A72 | Zündung, Endstufe, SPI-Kommunikation |
| 0x1A80 | Zündendstufe Zylinder 1, Kurzschluss nach UBatt |
| 0x1A81 | Zündendstufe Zylinder 1, Kurzschluss nach Masse |
| 0x1A82 | Zündendstufe Zylinder 1, Leitungsabfall |
| 0x1A90 | Zündendstufe Zylinder 2, Kurzschluss nach UBatt |
| 0x1A91 | Zündendstufe Zylinder 2, Kurzschluss nach Masse |
| 0x1A92 | Zündendstufe Zylinder 2, Leitungsabfall |
| 0x1AA0 | Zündendstufe Zylinder 3, Kurzschluss nach UBatt |
| 0x1AA1 | Zündendstufe Zylinder 3, Kurzschluss nach Masse |
| 0x1AA2 | Zündendstufe Zylinder 3, Leitungsabfall |
| 0x1AB0 | Zündendstufe Zylinder 4, Kurzschluss nach UBatt |
| 0x1AB1 | Zündendstufe Zylinder 4, Kurzschluss nach Masse |
| 0x1AB2 | Zündendstufe Zylinder 4, Leitungsabfall |
| 0x1AC0 | Zündendstufe Zylinder 5, Kurzschluss nach UBatt |
| 0x1AC1 | Zündendstufe Zylinder 5, Kurzschluss nach Masse |
| 0x1AC2 | Zündendstufe Zylinder 5, Leitungsabfall |
| 0x1AD0 | Zündendstufe Zylinder 6, Kurzschluss nach UBatt |
| 0x1AD1 | Zündendstufe Zylinder 6, Kurzschluss nach Masse |
| 0x1AD2 | Zündendstufe Zylinder 6, Leitungsabfall |
| 0x1AE0 | Einspritzventil Zylinder 1, Endstufe, Kurzschluss nach UBatt |
| 0x1AE1 | Einspritzventil Zylinder 1, Endstufe, Kurzschluss nach Masse |
| 0x1AE2 | Einspritzventil Zylinder 1, Endstufe, Leitungsabfall |
| 0x1AF0 | Einspritzventil Zylinder 2, Endstufe, Kurzschluss nach UBatt |
| 0x1AF1 | Einspritzventil Zylinder 2, Endstufe, Kurzschluss nach Masse |
| 0x1AF2 | Einspritzventil Zylinder 2, Endstufe, Leitungsabfall |
| 0x1B00 | Einspritzventil Zylinder 3, Endstufe, Kurzschluss nach UBatt |
| 0x1B01 | Einspritzventil Zylinder 3, Endstufe, Kurzschluss nach Masse |
| 0x1B02 | Einspritzventil Zylinder 3, Endstufe, Leitungsabfall |
| 0x1B10 | Einspritzventil Zylinder 4, Endstufe, Kurzschluss nach UBatt |
| 0x1B11 | Einspritzventil Zylinder 4, Endstufe, Kurzschluss nach Masse |
| 0x1B12 | Einspritzventil Zylinder 4, Endstufe, Leitungsabfall |
| 0x1B20 | Einspritzventil Zylinder 5, Endstufe, Kurzschluss nach UBatt |
| 0x1B21 | Einspritzventil Zylinder 5, Endstufe, Kurzschluss nach Masse |
| 0x1B22 | Einspritzventil Zylinder 5, Endstufe, Leitungsabfall |
| 0x1B30 | Einspritzventil Zylinder 6, Endstufe, Kurzschluss nach UBatt |
| 0x1B31 | Einspritzventil Zylinder 6, Endstufe, Kurzschluss nach Masse |
| 0x1B32 | Einspritzventil Zylinder 6, Endstufe, Leitungsabfall |
| 0x1B40 | Einspritzventil 2 Zylinder 1 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt |
| 0x1B41 | Einspritzventil 2 Zylinder 1 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse |
| 0x1B42 | Einspritzventil 2 Zylinder 1 bei Saugrohrdusche, Endstufe, Leitungsabfall |
| 0x1B50 | Einspritzventil 2 Zylinder 2 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt |
| 0x1B51 | Einspritzventil 2 Zylinder 2 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse |
| 0x1B52 | Einspritzventil 2 Zylinder 2 bei Saugrohrdusche, Endstufe, Leitungsabfall |
| 0x1B60 | Nockenwelle, keine Signalflanke vorhanden, Eingangspegel high |
| 0x1B61 | Nockenwelle, keine Signalflanke vorhanden, Eingangspegel low |
| 0x1B62 | Nockenwelle, Anzahl und-oder Position der Flanken unplausibel |
| 0x1B70 | Kurbelwelle, Signalstörung |
| 0x1B71 | Kurbelwelle, Signalausfall |
| 0x1B80 | Klopfsensor 1, Leitung A, Kurzschluss nach UBatt |
| 0x1B81 | Klopfsensor 1, Leitung A, Kurzschluss nach Masse |
| 0x1B90 | Klopfsensor 1, Leitung B, Kurzschluss nach UBatt |
| 0x1B91 | Klopfsensor 1, Leitung B, Kurzschluss nach Masse |
| 0x1BA0 | Klopfsensor 2, Leitung A, Kurzschluss nach UBatt |
| 0x1BA1 | Klopfsensor 2, Leitung A, Kurzschluss nach Masse |
| 0x1BB0 | Klopfsensor 2, Leitung B, Kurzschluss nach UBatt |
| 0x1BB1 | Klopfsensor 2, Leitung B, Kurzschluss nach Masse |
| 0x1BD1 | EEPROM: Lesen mehrerer Blöcke fehlgeschlagen |
| 0x1BE0 | Funktionsüberwachung, Prüfung ADC-Leerlauftestimpuls |
| 0x1BE1 | Funktionsüberwachung, Prüfung ADC-Testspannung |
| 0x1BE2 | Funktionsüberwachung, Überwachungsmodul |
| 0x1BE3 | Funktionsüberwachung, Endstufenabschaltung nach Frage-Antwort Fehler |
| 0x1BF2 | Softwarereset FSW, Gruppe 2 |
| 0x1C01 | CAN, Knoten B, BusOff Fehler |
| 0x1C02 | CAN, Knoten C - Diagnose-CAN, BusOff Fehler |
| 0x1C03 | CAN, Knoten D - Applikations-CAN, BusOff Fehler |
| 0x1C04 | CAN, Fehler Hardware |
| 0x1C10 | CJ135, Linearlambdasonde 1, ASIC-Diagnose |
| 0x1C11 | CJ135, Linearlambdasonde 1, SPI-Diagnose |
| 0x1C12 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall APE |
| 0x1C13 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall IPE |
| 0x1C14 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall MES |
| 0x1C15 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Leitungsabfall RE |
| 0x1C16 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Kurzschluss nach UBatt |
| 0x1C17 | CJ135, Linearlambdasonde 1, Leitungsdiagnose, Kurzschluss nach Masse |
| 0x1C20 | CJ135, Linearlambdasonde 2, ASIC-Diagnose |
| 0x1C21 | CJ135, Linearlambdasonde 2, SPI-Diagnose |
| 0x1C22 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall APE |
| 0x1C23 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall IPE |
| 0x1C24 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall MES |
| 0x1C25 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Leitungsabfall RE |
| 0x1C26 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Kurzschluss nach UBatt |
| 0x1C27 | CJ135, Linearlambdasonde 2, Leitungsdiagnose, Kurzschluss nach Masse |
| 0x1C30 | Linearlambdasondenheizung 1, Endstufe, Kurzschluss nach Masse |
| 0x1C31 | Linearlambdasondenheizung 1, Endstufe, Kurzschluss nach UBatt |
| 0x1C32 | Linearlambdasondenheizung 1, Endstufe, Leitungsabfall |
| 0x1C33 | Linearlambdasondenheizung 1, Steuerung, Heizungsfehler |
| 0x1C40 | Linearlambdasondenheizung 2, Endstufe, Kurzschluss nach Masse |
| 0x1C41 | Linearlambdasondenheizung 2, Endstufe, Kurzschluss nach UBatt |
| 0x1C42 | Linearlambdasondenheizung 2, Endstufe, Leitungsabfall |
| 0x1C43 | Linearlambdasondenheizung 2, Steuerung, Heizungsfehler |
| 0x1C50 | Batterie, Spannung zu hoch, Grundsystem |
| 0x1C51 | Batterie, Spannung zu niedrig, Grundsystem |
| 0x1C60 | Hauptrelais, Kurzschluss nach Masse |
| 0x1C61 | Hauptrelais, zu früher Abfall |
| 0x1C62 | Hauptrelais klemmt |
| 0x1C70 | Zündendstufe Zylinder 1, Nebenkerze, Kurzschluss nach UBatt |
| 0x1C71 | Zündendstufe Zylinder 1, Nebenkerze, Kurzschluss nach Masse |
| 0x1C72 | Zündendstufe Zylinder 1, Nebenkerze, Leitungsabfall |
| 0x1C80 | Zündendstufe Zylinder 2, Nebenkerze, Kurzschluss nach UBatt |
| 0x1C81 | Zündendstufe Zylinder 2, Nebenkerze, Kurzschluss nach Masse |
| 0x1C82 | Zündendstufe Zylinder 2, Nebenkerze, Leitungsabfall |
| 0x1C90 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt |
| 0x1C91 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse |
| 0x1C92 | Einspritzventil 2 Zylinder 3 bei Saugrohrdusche, Endstufe, Leitungsabfall |
| 0x1CA0 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche, Endstufe, Kurzschluss nach UBatt |
| 0x1CA1 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche, Endstufe, Kurzschluss nach Masse |
| 0x1CA2 | Einspritzventil 2 Zylinder 4 bei Saugrohrdusche, Endstufe, Leitungsabfall |
| 0x1C00 | CAN, Knoten A - Fahrzeug-CAN, BusOff Fehler |
| 0x1210 | CAN-Botschaft Geschwindigkeit, Zeitüberschreitung |
| 0x1260 | CAN-Botschaft Kombidaten, Zeitüberschreitung |
| 0x1220 | CAN-Botschaft Sensorbox ID1, Zeitüberschreitung |
| 0x1230 | CAN-Botschaft Sensorbox ID4, Zeitüberschreitung |
| 0x12A0 | CAN-Botschaft ABS_1_Motorrad, Zeitüberschreitung |
| 0x12A3 | CAN-Botschaft ABS_1_Motorrad, Fehler Overrun |
| 0x12B0 | CAN-Botschaft Modus_Fahrzeug_ABS_Motorrad, Zeitüberschreitung |
| 0x12B1 | CAN-Botschaft Modus_Fahrzeug_ABS_Motorrad, Fehler Alive-Counter |
| 0x12B2 | CAN-Botschaft Modus_Fahrzeug_ABS_Motorrad, Fehler CRC |
| 0x12B3 | CAN-Botschaft Modus_Fahrzeug_ABS_Motorrad, Fehler Overrun |
| 0x17E0 | CAN-Botschaft ZFE_2_Motorrad, Zeitüberschreitung |
| 0x17E3 | CAN-Botschaft ZFE_2_Motorrad, Fehler Overrun |
| 0x1270 | CAN-Botschaft Status Fahrzeug Zugriff, Zeitüberschreitung |
| 0x1240 | CAN-Botschaft Sensorbox ID7, Zeitüberschreitung |
| 0x1241 | CAN-Botschaft Sensorbox ID7, Fehler Alive-Counter |
| 0x1242 | CAN-Botschaft Sensorbox ID7, Fehler CRC |
| 0x1221 | CAN-Botschaft Sensorbox ID1, Fehler Alive-Counter |
| 0x1222 | CAN-Botschaft Sensorbox ID1, Fehler CRC |
| 0x1231 | CAN-Botschaft Sensorbox ID4, Fehler Alive-Counter |
| 0x1232 | CAN-Botschaft Sensorbox ID4, Fehler CRC |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6500 | Ansauglufttemperatur (tans_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6501 | Batteriespannung (ub_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6502 | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba_w) | % DK | high | signed int | - | 1600 | 65536 | 0 |
| 0x6503 | Motortemperatur (tmot_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6504 | Lambda Regelfaktor Bank 1 (fr_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6505 | Lambda Regelfaktor Bank 2 (fr_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6506 | relative Luftfüllung (rl_w) | % | high | unsigned int | - | 0,75 | 32 | 0 |
| 0x6507 | Motordrehzahl (nmot_w) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6508 | Fahrzeuggeschwindigkeit (vfzg_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x6509 | Spannung System-BTS (uubts_sys_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650A | Spannung Zündungs-BTS (uubts_zdg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650B | Spannung EKP-BTS (uubts_ekp_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650C | Spannung ELUE-BTS (uubts_elue_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650D | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x650E | Lambdasondenspannung Bank 1 (usvk_w[0]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x650F | Lambdasondenspannung Bank 2 (usvk_w[1]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x6510 | schneller Mittelwert des Lambdaregelfaktors Bank 1 (frm_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6511 | schneller Mittelwert des Lambdaregelfaktors Bank 2 (frm_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6512 | Spannungswert von Getriebeschaltwalze Sensor 1 (ugetrg1_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6513 | Spannungswert Schalthebelsensor (ushs_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6514 | ADC-Spannung Schalthebelsensor Kanal 1 (ushs1_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6515 | ADC-Spannung Schalthebelsensor Kanal 2 (ushs2_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6516 | Winkel Schalthebelsensor in Neutralstellung adaptiert (wadpshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6517 | Zeit nach Motorstart (tnse_w) | s | high | unsigned int | - | 0,1 | 1 | 0 |
| 0x6518 | Einspritzzeit (te_w) | ms | high | unsigned int | - | 8 | 1000 | 0 |
| 0x6519 | Letzter berechneter Zündwinkel (zw) | ° KW | Low | signed int | - | 191,25 | 65280 | 0 |
| 0x651A | ADC-Spannung Ansauglufttemperatur (utans_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x651B | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und Drehzahl (vfzggang_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x651C | Umgebungsdruck (pu_w) | hPa | high | unsigned int | - | 10 | 256 | 0 |
| 0x651D | gemessener Kraftstoffdruck (frps_meas) | hPa | high | signed int | - | 1 | 5 | 0 |
| 0x651E | Motortemperatur, linearisiert und umgerechnet (tmotlin_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x651F | ADC-Wert Batteriespannung/Kl15 (ukl15_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6520 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6521 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6522 | Fahrwertgeber (fwg_w) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6523 | Fahrwertgeber Kanal 1 adaptiert (fwgad1) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6524 | Fahrwertgeber Kanal 2 adaptiert (fwgad2) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6525 | Spannung Drosselklappenwinkel 1 von Drosselklappe 1 (udkp1r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6526 | Spannung Drosselklappenwinkel 2 von Drosselklappe 1 (udkp2r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6527 | Spannung Drosselklappenwinkel 1 von Drosselklappe 2 (udkp1r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6528 | Spannung Drosselklappenwinkel 2 von Drosselklappe 2 (udkp2r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6529 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1 (dkp1r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652A | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1 (dkp2r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652B | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 1 (dkpad1[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652C | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 1 (dkpad2[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652D | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652E | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652F | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 2 (dkpad1[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6530 | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 2 (dkpad2[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6531 | Sollwert des Drosselklappenwinkels der Drosselklappe 1 (wdks_w[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6532 | Sollwert des Drosselklappenwinkels der Drosselklappe 2 (wdks_w[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6533 | Rohwert Fahrwertgeber Kanal 1, Ebene 2 (fwg1r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6534 | Rohwert Fahrwertgeber Kanal 2, Ebene 2 (fwg2r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6535 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1, Ebene 2 (dkp1r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6536 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1, Ebene 2 (dkp2r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6537 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2, Ebene 2 (dkp1r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6538 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2, Ebene 2 (dkp2r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6539 | Drosselklappenwinkel der Drosselklappe 1, Ebene 2 (wdkba_ar_um[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653A | Drosselklappenwinkel der Drosselklappe 2, Ebene 2 (wdkba_ar_um[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653B | zulässige Drosselklappenöffnung für Drosselklappe 1, Ebene 2 (wdkzul_ar_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653C | zulässige Drosselklappenöffnung für Drosselklappe 2, Ebene 2 (wdkzul_ar_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653D | zulässige Drosselklappenöffnung für Drosselklappe 1 durch FGR, Ebene 2 (wdkzul_fgr_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653E | zulässige Drosselklappenöffnung für Drosselklappe 2 durch FGR, Ebene 2 (wdkzul_fgr_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653F | mittlere zulässige Drosselklappenöffnung, Ebene 2 (wdkzul_um) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6540 | Fehlerort Modul (dsys_merker[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6541 | Parameter 1 (dsys_merker[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6542 | Parameter 2 (dsys_merker[2]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6543 | Parameter 3 (dsys_merker[3]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6544 | Sicherheitskonzept Zustand für Fehlerreaktion Drosselklappensensorik (sk_reak_dkp) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6545 | Sicherheitskonzept Zustand des Fahrwertgebers (sk_zust_fwg) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6546 | Statusbyte Sensorikfehler in Ebene 2 (e_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6547 | Statusbyte Fehlerreaktionen Ebene 1, 2 und 3 (r_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6548 | Motordrehzahl, Ebene 2 (nmotseg_um) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6549 | Motortemperatur unbegrenzt, Ebene 2 (tmotubeg_um) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x654A | Endwert relative Momentenforderung der ASC-Regelung (reltrq_end) | - | high | unsigned int | - | 1 | 65536 | 0 |
| 0x654B | Maximum aus Kl.15- und BTS-Spannungen (wub) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x654C | Anzahl der Fehlerspeichereinträge durch die Fahrwertgeberdiagnose bezüglich des Leerlaufanschlags (cntfwglldiag) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654D | Bedingung Kupplungsschalter 1 betätigt (Kraftschluß getrennt) (B_kuppl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654E | Ist-Gang (gangi) | 0-n | high | 0xFFFF | TAB_MR_GETRIEBE | 1 | 1 | 0 |
| 0x654F | KtEwsError (kt_ews_error) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6550 | KtEwsResult (kt_ews_result) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6551 | EwsInfoState (ews_info_state) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6552 | Zustand History ENVRAM (Eep_EnvRamHist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6553 | Zustand Ungültigkeit ENVRAM (Eep_EnvRamInvld) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6554 | Bedingung Initialisierung aller Adaptionswerte aufgrund ungültiger NV-RAM Daten (B_adpini_eepnpl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6555 | Status gruppenweises Initialisieren von Adaptionswerten, Gruppen 1-15 (st_adpini_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6556 | im Kombi angezeigter ASC-Status (asc_status_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_STATUS | 1 | 1 | 0 |
| 0x6557 | Modus der ASC-Funktion (asc_modus_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_MODUS | 1 | 1 | 0 |
| 0x6558 | Integrator Klopfregelung Zylinder 1 (ikr[0]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x6559 | Integrator Klopfregelung Zylinder 2 (ikr[1]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x655A | letzte nicht maskierte Reset-Condition (uwb_reset_hist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655B | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 0 - 15 (st_fgr_freigabe_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655C | Eingangssignal vom Schalter 1 des Seitenstützständers (ES_sst1) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655D | Eingangssignal vom Schalter 2 des Seitenstützständers (ES_sst2) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655E | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 16 - 31 (st_fgr_freigabe_uwb_high) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655F | Winkel Schalthebelsensor ohne Korrektur (wrohshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6560 | Bedingung Adaption Schalthebelsensor abgeschlossen (B_shsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6561 | Betriebsbedingung Adaption Schalthebelsensor für Schaltassistent (B_bshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6562 | Bedingung Readaption Schalthebelsensor notwendig (B_rshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6563 | Winkel Schalthebelsensor 1 ohne Korrektur (wrohshs1sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6564 | Winkel Schalthebelsensor 2 ohne Korrektur (wrohshs2sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6565 | Modelltemperatur des vorderen Bremssattels (temp_sattel_v_mdl) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6566 | Modelltemperatur des vorderen Bremssattels bei Kl15 aus (temp_sattel_v_mdl_kl15off) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6567 | berechnete Temperatur der vorderen Bremsscheibe (temp_bremsscheibe_v) | °C | high | signed int | - | 1 | 20 | 0 |
| 0x6568 | berechneter zulässiger Gesamtstrom System-BTS (isys_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x6569 | berechneter zulässiger Gesamtstrom Zündungs-BTS (izdg_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x656A | Strom am System-BTS bei Überschreitung Auslösestromquadrat (isys_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656B | Strom am Zündungs-BTS bei Überschreitung Auslösestromquadrat (izdg_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656C | Strom am EKP-BTS bei Überschreitung Auslösestromquadrat (iekp_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656D | aktueller Strom am ELUE-BTS (ielue) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656E | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level1 (ddkp_sig_abwcnt[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x656F | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level2 (ddkp_sig_abwcnt[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x1160 | Batterie, Spannung zu hoch |
| 0x1162 | Batterie, unplausible Spannung |
| 0x1351 | Ölniveaugeber, Ölstand zu niedrig |
| 0x1464 | Abgasklappe, Stellmotor, kein Abgleich aufgrund Temperaturüberschreitung SG |
| 0x1474 | Interferenzrohrklappe, Stellmotor, kein Abgleich aufgrund Temperaturüberschreitung SG |
| 0x1490 | Signalqualität Drosselklappensensor, eingeschränkt, Stufe 1 |
| 0x1500 | Systemfehler |
| 0x1520 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 1 |
| 0x1521 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 2 |
| 0x1522 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 3 |
| 0x1523 | Fahrwertgeber, Leerlaufanschlag, Position innerhalb Fenster 4 |
| 0x1540 | Fahrgeschwindigkeitsregler, maximale Fahrzeugbeschleunigung überschritten |
| 0x1552 | EWS3, KT-Fehler |
| 0x1553 | EWS3, FSW-Fehler |
| 0x15A0 | Klopfregelung, Fehler Signalerfassung |
| 0x15D0 | LR-Adaption, Warteschlange, Pufferfüllstand Lambdaadaption Bank 1 zu hoch |
| 0x15D1 | LR-Adaption, Warteschlange, Pufferfüllstand Lambdaadaption Bank 2 zu hoch |
| 0x15E0 | Resetüberwachung, unerwarteter Reset erkannt |
| 0x1B63 | Nockenwelle, unzulässige Verdrehung |
| 0x1BD2 | EEPROM: Schreiben eines Blocks fehlgeschlagen |
| 0x1BF0 | Softwarereset FSW, Gruppe 0 |
| 0x1BF1 | Softwarereset FSW, Gruppe 1 |
| 0xFFFF | unbekannter Fehlerort |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6500 | Ansauglufttemperatur (tans_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6501 | Batteriespannung (ub_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6502 | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba_w) | % DK | high | signed int | - | 1600 | 65536 | 0 |
| 0x6503 | Motortemperatur (tmot_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x6504 | Lambda Regelfaktor Bank 1 (fr_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6505 | Lambda Regelfaktor Bank 2 (fr_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6506 | relative Luftfüllung (rl_w) | % | high | unsigned int | - | 0,75 | 32 | 0 |
| 0x6507 | Motordrehzahl (nmot_w) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6508 | Fahrzeuggeschwindigkeit (vfzg_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x6509 | Spannung System-BTS (uubts_sys_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650A | Spannung Zündungs-BTS (uubts_zdg_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650B | Spannung EKP-BTS (uubts_ekp_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650C | Spannung ELUE-BTS (uubts_elue_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x650D | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x650E | Lambdasondenspannung Bank 1 (usvk_w[0]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x650F | Lambdasondenspannung Bank 2 (usvk_w[1]) | V | high | signed int | - | 0,001 | 1 | 0 |
| 0x6510 | schneller Mittelwert des Lambdaregelfaktors Bank 1 (frm_w[0]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6511 | schneller Mittelwert des Lambdaregelfaktors Bank 2 (frm_w[1]) | - | high | unsigned int | - | 2 | 65536 | 0 |
| 0x6512 | Spannungswert von Getriebeschaltwalze Sensor 1 (ugetrg1_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6513 | Spannungswert Schalthebelsensor (ushs_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6514 | ADC-Spannung Schalthebelsensor Kanal 1 (ushs1_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6515 | ADC-Spannung Schalthebelsensor Kanal 2 (ushs2_w) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x6516 | Winkel Schalthebelsensor in Neutralstellung adaptiert (wadpshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6517 | Zeit nach Motorstart (tnse_w) | s | high | unsigned int | - | 0,1 | 1 | 0 |
| 0x6518 | Einspritzzeit (te_w) | ms | high | unsigned int | - | 8 | 1000 | 0 |
| 0x6519 | Letzter berechneter Zündwinkel (zw) | ° KW | Low | signed int | - | 191,25 | 65280 | 0 |
| 0x651A | ADC-Spannung Ansauglufttemperatur (utans_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x651B | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und Drehzahl (vfzggang_w) | km/h | high | unsigned int | - | 512 | 65536 | 0 |
| 0x651C | Umgebungsdruck (pu_w) | hPa | high | unsigned int | - | 10 | 256 | 0 |
| 0x651D | gemessener Kraftstoffdruck (frps_meas) | hPa | high | signed int | - | 1 | 5 | 0 |
| 0x651E | Motortemperatur, linearisiert und umgerechnet (tmotlin_w) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x651F | ADC-Wert Batteriespannung/Kl15 (ukl15_w) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6520 | Rohwert Fahrwertgeber Kanal 1 (fwg1r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6521 | Rohwert Fahrwertgeber Kanal 2 (fwg2r) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6522 | Fahrwertgeber (fwg_w) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6523 | Fahrwertgeber Kanal 1 adaptiert (fwgad1) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6524 | Fahrwertgeber Kanal 2 adaptiert (fwgad2) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6525 | Spannung Drosselklappenwinkel 1 von Drosselklappe 1 (udkp1r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6526 | Spannung Drosselklappenwinkel 2 von Drosselklappe 1 (udkp2r[0]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6527 | Spannung Drosselklappenwinkel 1 von Drosselklappe 2 (udkp1r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6528 | Spannung Drosselklappenwinkel 2 von Drosselklappe 2 (udkp2r[1]) | V | high | unsigned int | - | 0,001 | 1 | 0 |
| 0x6529 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1 (dkp1r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652A | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1 (dkp2r[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652B | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 1 (dkpad1[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652C | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 1 (dkpad2[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x652D | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652E | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2 (dkp1r[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x652F | Drosselklappenwinkel Kanal 1 adaptiert von Drosselklappe 2 (dkpad1[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6530 | Drosselklappenwinkel Kanal 2 adaptiert von Drosselklappe 2 (dkpad2[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x6531 | Sollwert des Drosselklappenwinkels der Drosselklappe 1 (wdks_w[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6532 | Sollwert des Drosselklappenwinkels der Drosselklappe 2 (wdks_w[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6533 | Rohwert Fahrwertgeber Kanal 1, Ebene 2 (fwg1r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6534 | Rohwert Fahrwertgeber Kanal 2, Ebene 2 (fwg2r_um) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6535 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 1, Ebene 2 (dkp1r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6536 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 1, Ebene 2 (dkp2r_um[0]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6537 | Rohwert Drosselklappenwinkel Kanal 1 von Drosselklappe 2, Ebene 2 (dkp1r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6538 | Rohwert Drosselklappenwinkel Kanal 2 von Drosselklappe 2, Ebene 2 (dkp2r_um[1]) | % | high | unsigned int | - | 1 | 100 | 0 |
| 0x6539 | Drosselklappenwinkel der Drosselklappe 1, Ebene 2 (wdkba_ar_um[0]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653A | Drosselklappenwinkel der Drosselklappe 2, Ebene 2 (wdkba_ar_um[1]) | % | high | signed int | - | 1600 | 65536 | 0 |
| 0x653B | zulässige Drosselklappenöffnung für Drosselklappe 1, Ebene 2 (wdkzul_ar_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653C | zulässige Drosselklappenöffnung für Drosselklappe 2, Ebene 2 (wdkzul_ar_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653D | zulässige Drosselklappenöffnung für Drosselklappe 1 durch FGR, Ebene 2 (wdkzul_fgr_um[0]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653E | zulässige Drosselklappenöffnung für Drosselklappe 2 durch FGR, Ebene 2 (wdkzul_fgr_um[1]) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x653F | mittlere zulässige Drosselklappenöffnung, Ebene 2 (wdkzul_um) | % | high | unsigned int | - | 1600 | 65536 | 0 |
| 0x6540 | Fehlerort Modul (dsys_merker[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6541 | Parameter 1 (dsys_merker[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6542 | Parameter 2 (dsys_merker[2]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6543 | Parameter 3 (dsys_merker[3]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6544 | Sicherheitskonzept Zustand für Fehlerreaktion Drosselklappensensorik (sk_reak_dkp) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6545 | Sicherheitskonzept Zustand des Fahrwertgebers (sk_zust_fwg) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6546 | Statusbyte Sensorikfehler in Ebene 2 (e_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6547 | Statusbyte Fehlerreaktionen Ebene 1, 2 und 3 (r_flags_um) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6548 | Motordrehzahl, Ebene 2 (nmotseg_um) | 1/min | high | unsigned int | - | 0,25 | 1 | 0 |
| 0x6549 | Motortemperatur unbegrenzt, Ebene 2 (tmotubeg_um) | °C | high | signed int | - | 0,05 | 1 | 0 |
| 0x654A | Endwert relative Momentenforderung der ASC-Regelung (reltrq_end) | - | high | unsigned int | - | 1 | 65536 | 0 |
| 0x654B | Maximum aus Kl.15- und BTS-Spannungen (wub) | V | high | unsigned int | - | 1 | 1000 | 0 |
| 0x654C | Anzahl der Fehlerspeichereinträge durch die Fahrwertgeberdiagnose bezüglich des Leerlaufanschlags (cntfwglldiag) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654D | Bedingung Kupplungsschalter 1 betätigt (Kraftschluß getrennt) (B_kuppl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x654E | Ist-Gang (gangi) | 0-n | high | 0xFFFF | TAB_MR_GETRIEBE | 1 | 1 | 0 |
| 0x654F | KtEwsError (kt_ews_error) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6550 | KtEwsResult (kt_ews_result) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6551 | EwsInfoState (ews_info_state) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6552 | Zustand History ENVRAM (Eep_EnvRamHist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6553 | Zustand Ungültigkeit ENVRAM (Eep_EnvRamInvld) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6554 | Bedingung Initialisierung aller Adaptionswerte aufgrund ungültiger NV-RAM Daten (B_adpini_eepnpl) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6555 | Status gruppenweises Initialisieren von Adaptionswerten, Gruppen 1-15 (st_adpini_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6556 | im Kombi angezeigter ASC-Status (asc_status_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_STATUS | 1 | 1 | 0 |
| 0x6557 | Modus der ASC-Funktion (asc_modus_uwb) | 0-n | high | 0xFFFF | TAB_MR_ASC_MODUS | 1 | 1 | 0 |
| 0x6558 | Integrator Klopfregelung Zylinder 1 (ikr[0]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x6559 | Integrator Klopfregelung Zylinder 2 (ikr[1]) | - | high | unsigned int | - | 1 | 100 | 0 |
| 0x655A | letzte nicht maskierte Reset-Condition (uwb_reset_hist) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655B | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 0 - 15 (st_fgr_freigabe_uwb_low) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655C | Eingangssignal vom Schalter 1 des Seitenstützständers (ES_sst1) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655D | Eingangssignal vom Schalter 2 des Seitenstützständers (ES_sst2) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655E | Statuswort Freigabe Fahrgeschwindigkeitsregler, Bedingungen 16 - 31 (st_fgr_freigabe_uwb_high) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x655F | Winkel Schalthebelsensor ohne Korrektur (wrohshssass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6560 | Bedingung Adaption Schalthebelsensor abgeschlossen (B_shsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6561 | Betriebsbedingung Adaption Schalthebelsensor für Schaltassistent (B_bshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6562 | Bedingung Readaption Schalthebelsensor notwendig (B_rshsadpsass) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x6563 | Winkel Schalthebelsensor 1 ohne Korrektur (wrohshs1sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6564 | Winkel Schalthebelsensor 2 ohne Korrektur (wrohshs2sass) | % | high | signed int | - | 100 | 32768 | 0 |
| 0x6565 | Modelltemperatur des vorderen Bremssattels (temp_sattel_v_mdl) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6566 | Modelltemperatur des vorderen Bremssattels bei Kl15 aus (temp_sattel_v_mdl_kl15off) | °C | high | unsigned int | - | 1 | 20 | 0 |
| 0x6567 | berechnete Temperatur der vorderen Bremsscheibe (temp_bremsscheibe_v) | °C | high | signed int | - | 1 | 20 | 0 |
| 0x6568 | berechneter zulässiger Gesamtstrom System-BTS (isys_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x6569 | berechneter zulässiger Gesamtstrom Zündungs-BTS (izdg_ber_ges) | A | high | unsigned int | - | 25,6 | 32767 | 0 |
| 0x656A | Strom am System-BTS bei Überschreitung Auslösestromquadrat (isys_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656B | Strom am Zündungs-BTS bei Überschreitung Auslösestromquadrat (izdg_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656C | Strom am EKP-BTS bei Überschreitung Auslösestromquadrat (iekp_uwb) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656D | aktueller Strom am ELUE-BTS (ielue) | A | high | unsigned int | - | 50 | 255 | 0 |
| 0x656E | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level1 (ddkp_sig_abwcnt[0]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x656F | Diagnose Signalqualität Drosselklappe - Fehlerzähler Abweichung, Level2 (ddkp_sig_abwcnt[1]) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ISOSAEReserved_00 |
| 0x01 | defaultSession |
| 0x02 | programmingSession |
| 0x03 | extendedDiagnosticSession |
| 0x04 | safetySystemDiagnosticSession |
| 0x40 | vehicleManufacturerSpecific_40 |
| 0x41 | codingSession |
| 0x42 | SWTSession |
| 0x43 | HDDUpdateSession |
| 0xff | ungültig |

### RES_0X2300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL1_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 1 als String |
| STAT_FASTA_PROFIL1_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 1 als String |
| STAT_FASTA_PROFIL1_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 1 in Minuten |
| STAT_FASTA_PROFIL1_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 1 als String |
| STAT_FASTA_PROFIL1_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL2_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 2 als String |
| STAT_FASTA_PROFIL2_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 2 als String |
| STAT_FASTA_PROFIL2_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 2 in Minuten |
| STAT_FASTA_PROFIL2_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 2 als String |
| STAT_FASTA_PROFIL2_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL3_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 3 als String |
| STAT_FASTA_PROFIL3_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 3 als String |
| STAT_FASTA_PROFIL3_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 3 in Minuten |
| STAT_FASTA_PROFIL3_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 3 als String |
| STAT_FASTA_PROFIL3_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2303_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL4_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 4 als String |
| STAT_FASTA_PROFIL4_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 4 als String |
| STAT_FASTA_PROFIL4_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 4 in Minuten |
| STAT_FASTA_PROFIL4_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 4 als String |
| STAT_FASTA_PROFIL4_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2304_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL5_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 5 als String |
| STAT_FASTA_PROFIL5_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 5 als String |
| STAT_FASTA_PROFIL5_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 5 in Minuten |
| STAT_FASTA_PROFIL5_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 5 als String |
| STAT_FASTA_PROFIL5_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2305_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL6_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 6 als String |
| STAT_FASTA_PROFIL6_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 6 als String |
| STAT_FASTA_PROFIL6_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 6 in Minuten |
| STAT_FASTA_PROFIL6_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 6 als String |
| STAT_FASTA_PROFIL6_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2306_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL7_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 7 als String |
| STAT_FASTA_PROFIL7_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 7 als String |
| STAT_FASTA_PROFIL7_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 7 in Minuten |
| STAT_FASTA_PROFIL7_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 7 als String |
| STAT_FASTA_PROFIL7_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2307_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL8_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 8 als String |
| STAT_FASTA_PROFIL8_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 8 als String |
| STAT_FASTA_PROFIL8_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 8 in Minuten |
| STAT_FASTA_PROFIL8_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 8 als String |
| STAT_FASTA_PROFIL8_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2308_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL9_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 9 als String |
| STAT_FASTA_PROFIL9_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 9 als String |
| STAT_FASTA_PROFIL9_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 9 in Minuten |
| STAT_FASTA_PROFIL9_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 9 als String |
| STAT_FASTA_PROFIL9_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2309_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL10_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 10 als String |
| STAT_FASTA_PROFIL10_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 10 als String |
| STAT_FASTA_PROFIL10_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 10 in Minuten |
| STAT_FASTA_PROFIL10_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 10 als String |
| STAT_FASTA_PROFIL10_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL11_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 11 als String |
| STAT_FASTA_PROFIL11_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 11 als String |
| STAT_FASTA_PROFIL11_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 11 in Minuten |
| STAT_FASTA_PROFIL11_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 11 als String |
| STAT_FASTA_PROFIL11_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL12_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 12 als String |
| STAT_FASTA_PROFIL12_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 12 als String |
| STAT_FASTA_PROFIL12_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 12 in Minuten |
| STAT_FASTA_PROFIL12_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 12 als String |
| STAT_FASTA_PROFIL12_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL13_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 13 als String |
| STAT_FASTA_PROFIL13_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 13 als String |
| STAT_FASTA_PROFIL13_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 13 in Minuten |
| STAT_FASTA_PROFIL13_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 13 als String |
| STAT_FASTA_PROFIL13_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL14_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 14 als String |
| STAT_FASTA_PROFIL14_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 14 als String |
| STAT_FASTA_PROFIL14_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 14 in Minuten |
| STAT_FASTA_PROFIL14_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 14 als String |
| STAT_FASTA_PROFIL14_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X230E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_PROFIL15_STRING_MIN_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | minimale Bereichsgrenze des FASTA-Profils 15 als String |
| STAT_FASTA_PROFIL15_STRING_MAX_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | maximale Bereichsgrenze des FASTA-Profils 15 als String |
| STAT_FASTA_PROFIL15_BEREICH1_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 1 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH2_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 2 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH3_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 3 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH4_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 4 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH5_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 5 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH6_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 6 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_BEREICH7_WERT | min | high | unsigned int | - | - | 4.0 | 1.0 | 0.0 | Zeitzähler Bereich 7 des FASTA-Profils 15 in Minuten |
| STAT_FASTA_PROFIL15_STRING_LABEL_TEXT | TEXT | high | string[30] | - | - | 1.0 | 1.0 | 0.0 | Label des FASTA-Profils 15 als String |
| STAT_FASTA_PROFIL15_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2320_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 1) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 2) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 3) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_MINUTEN_TEIL4_DATA | DATA | high | data[126] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit 4-min Zählern (Teil 4) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_SEKUNDEN_TEIL1_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit Sekundenzählern (Teil 1) |
| STAT_FASTA_LASTKOLLEKTIV1_ZEIT_SEKUNDEN_TEIL2_DATA | DATA | high | data[238] | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Lastkollektiv1-Arrays mit Sekundenzählern (Teil 2) |
| STAT_FASTA_LASTKOLLEKTIV1_GESAMTLAUFZEIT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit der FASTA-Profile in Sekunden |

### RES_0X2330_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LAMBDADATEN1_LRA_ADAP_CNT_BANK1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl durchgeführter Berechnungen der Lambdaadaption (Bank 1) |
| STAT_FASTA_LAMBDADATEN1_LRA_ADAP_CNT_BANK2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl durchgeführter Berechnungen der Lambdaadaption (Bank 2) |

### RES_0X233D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_NMOT_MX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_WDKBA_MX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_TMOT_MX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_NMOT_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_WDKBA_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel |
| STAT_FASTA_LAMBDADATEN4_LRA_STUETZ_TMOT_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur |

### RES_0X233E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_NMOT_X_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; X-Achse |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_NMOT_W_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; Werte |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_WDKBA_X_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; X-Achse |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_WDKBA_W_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; Werte |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_TMOT_X_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; X-Achse |
| STAT_FASTA_LAMBDADATEN5_LRA_GEWICHT_TMOT_W_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; Werte |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X6400_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_ANSAUGLUFT_WERT | °C | high | signed int | - | - | 0.05 | 1.0 | 0.0 | Ansauglufttemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_ANSAUGLUFTTEMP_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | ADC-Spannung des Ansauglufttemperatursensors in Volt |
| STAT_TEMPERATUR_MOTOR_WERT | °C | high | signed int | - | - | 0.05 | 1.0 | 0.0 | Motortemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_MOTORTEMP_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | ADC-Spannung des Motortemperatursensors in Volt |
| STAT_TEMPERATUR_OEL_WERT | °C | high | signed int | - | - | 0.05 | 1.0 | 0.0 | Motoroeltemperatur in Grad Celsius |
| STAT_SPANNUNG_ADC_OELTEMP_WERT | V | high | unsigned int | - | - | 0.001 | 1.0 | 0.0 | ADC-Spannung des Oeltemperatursensors in Volt |

### RES_0X6401_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_CAN_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Vorderradgeschwindigkeit aus ABS-CAN-Botschaft in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_CAN_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Hinterradgeschwindigkeit aus ABS-CAN-Botschaft in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_FAHRZEUG_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Fahrzeuggeschwindigkeit aus plausibilisierten CAN-Geschwindigkeiten in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_VORDERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Vorderradgeschwindigkeit vom ABS-SG in Kilometer pro Stunde |
| STAT_GESCHWINDIGKEIT_ABS_HINTERRAD_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Hinterradgeschwindigkeit vom ABS-SG in Kilometer pro Stunde |

### RES_0X6402_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRUCK_UMGEBUNG_WERT | hPa | high | unsigned int | - | - | 10.0 | 256.0 | 0.0 | gefilterter Umgebungsluftdruck in Hektopascal |
| STAT_SPANNUNG_ADC_UMGEBUNGSDRUCK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Umgebungsdrucksensors in Volt |
| STAT_DRUCK_KRAFTSTOFF_WERT | hPa | high | signed int | - | - | 1.0 | 5.0 | 0.0 | gefilterter Kraftstoffdruck in Hektopascal |
| STAT_SPANNUNG_ADC_KRAFTSTOFFDRUCK_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Kraftstoffdrucksensors in Volt |

### RES_0X6403_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_MOTOR_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motordrehzahl in Umdrehungen pro Minute |
| STAT_DREHZAHL_LEERLAUF_SOLL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Leerlaufsolldrehzahl in Umdrehungen pro Minute |
| STAT_DREHZAHL_UMDREHUNG_NOCKENWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Umdrehungszähler der Nockenwelle 1 |
| STAT_DREHZAHL_UMDREHUNG_NOCKENWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 16.0 | 0.0 | Umdrehungszähler der Nockenwelle 2 |
| STAT_DREHZAHL_FLANKEN_NOCKENWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Nockenwellenflanken der laufenden Nockenwellenumdrehung der Nockenwelle 1 |
| STAT_DREHZAHL_FLANKEN_NOCKENWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der erkannten Nockenwellenflanken der laufenden Nockenwellenumdrehung der Nockenwelle 2 |
| STAT_DREHZAHL_NOCKENWELLE_WERT | 1/min | high | signed int | - | - | 1.0 | 4.0 | 0.0 | Nockenwellendrehzahl in Umdrehungen pro Minute |

### RES_0X6404_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_BATTERIE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Batteriespannung in Volt |
| STAT_SPANNUNG_ADC_UB_KL15_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Klemme 15 in Volt |
| STAT_SPANNUNG_ADC_BTS_UZDG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Zündungs-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_USYS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des System-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_UEKP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des EKP-BTS in Volt |
| STAT_SPANNUNG_ADC_CODIERSTECKER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Reifencodiersteckers in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 1 in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 2 in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 3 in Volt |
| STAT_SPANNUNG_ADC_LAMBDASONDE4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Lambdasonde 4 in Volt |
| STAT_SPANNUNG_ADC_BTS_UELUE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des ELUE-BTS in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_5V_AUSGANG_A_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ausgang A der 5V-Versorgung in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_5V_AUSGANG_B_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ausgang B der 5V-Versorgung in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_5V_AUSGANG_C_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ausgang C der 5V-Versorgung in Volt |
| STAT_SPANNUNG_ADC_STURZSENSOR_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Sturzsensors in Volt |
| STAT_SPANNUNG_ADC_OELSTANDSGEBER_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Ölstandsgebers in Volt |
| STAT_SPANNUNG_ADC_VERSORGUNG_STARTERRELAIS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung der Spannungsversorgung des Starterrelais in Volt |
| STAT_SPANNUNG_ADC_BTS_IZDG_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des Zündungs-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_ISYS_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des System-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_IEKP_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des EKP-BTS in Volt |
| STAT_SPANNUNG_ADC_BTS_IELUE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung am Strommessshunt des ELUE-BTS in Volt |

### RES_0X6410_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DROSSELKLAPPE1_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Drosselklappenwinkels 1 in Prozent |
| STAT_SPANNUNG_ADC_DK1_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Drosselklappenwinkels 1 in Volt |
| STAT_DROSSELKLAPPE1_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Drosselklappenwinkels 1 in Prozent |
| STAT_SPANNUNG_ADC_DK1_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Drosselklappenwinkels 1 in Volt |
| STAT_DROSSELKLAPPE2_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Drosselklappenwinkels 2 in Prozent |
| STAT_SPANNUNG_ADC_DK2_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Drosselklappenwinkels 2 in Volt |
| STAT_DROSSELKLAPPE2_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Drosselklappenwinkels 2 in Prozent |
| STAT_SPANNUNG_ADC_DK2_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Drosselklappenwinkels 2 in Volt |
| STAT_DROSSELKLAPPE_ISTWERT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel bezogen auf DK-Anschläge in Prozent |
| STAT_DROSSELKLAPPE1_SOLLWERT_WERT | % | high | unsigned int | - | - | 1600.0 | 65536.0 | 0.0 | Sollwert für den Drosselklappenwinkel 1 in Prozent |
| STAT_DROSSELKLAPPE2_SOLLWERT_WERT | % | high | unsigned int | - | - | 1600.0 | 65536.0 | 0.0 | Sollwert für den Drosselklappenwinkel 2 in Prozent |
| STAT_STATUS_DROSSELKLAPPE1_REGELUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statusbyte der Drosselklappenregelung 1 |
| STAT_STATUS_DROSSELKLAPPE2_REGELUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statusbyte der Drosselklappenregelung 2 |
| STAT_DROSSELKLAPPE1_ANSTEUERUNG_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | PWM-Ansteuerwert des Drosselklappenmotors 1 in Prozent |
| STAT_DROSSELKLAPPE2_ANSTEUERUNG_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | PWM-Ansteuerwert des Drosselklappenmotors 2 in Prozent |
| STAT_DROSSELKLAPPE1_ABSCHALTUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung der Drosselklappenendstufe 1: 1=EIN, 0=AUS |
| STAT_DROSSELKLAPPE2_ABSCHALTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Abschaltung der Drosselklappenendstufe 2: 1=EIN, 0=AUS |
| STAT_DROSSELKLAPPE1_KANAL1_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 1 vom Kanal 1 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_DROSSELKLAPPE1_KANAL2_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 1 vom Kanal 2 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_DROSSELKLAPPE2_KANAL1_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 2 vom Kanal 1 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_DROSSELKLAPPE2_KANAL2_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Drosselklappenwinkel 2 vom Kanal 2 bezogen auf den unteren und oberen Adaptionswert  in Prozent |

### RES_0X6411_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRWERTGEBER_KANAL1_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 1 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 1 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_KANAL2_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Rohwert vom Kanal 2 des Fahrwertgebers in Prozent |
| STAT_SPANNUNG_ADC_FWG_KANAL2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung vom Kanal 2 des Fahrwertgebers in Volt |
| STAT_FAHRWERTGEBER_ISTWERT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Istwert des Fahrwertgebers in Prozent |
| STAT_FAHRWERTGEBER_KANAL1_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Fahrwertgeberwert vom Kanal 1 bezogen auf den unteren und oberen Adaptionswert  in Prozent |
| STAT_FAHRWERTGEBER_KANAL2_ADP_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Fahrwertgeberwert vom Kanal 2 bezogen auf den unteren und oberen Adaptionswert  in Prozent |

### RES_0X6412_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORBOX_DREHRATE1_WERT | °/s | high | signed int | - | - | 1.0 | 200.0 | 0.0 | Drehrate 1 der Sensorbox (aus CAN-Botschaft) in Grad pro Sekunde |
| STAT_SENSORBOX_DREHRATE2_WERT | °/s | high | signed int | - | - | 1.0 | 200.0 | 0.0 | Drehrate 2 der Sensorbox (aus CAN-Botschaft) in Grad pro Sekunde |
| STAT_SENSORBOX_BESCHLEUNIGUNG1_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 1 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |
| STAT_SENSORBOX_BESCHLEUNIGUNG2_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 2 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |
| STAT_SENSORBOX_SCHRAEGLAGE_WERT | ° | high | signed int | - | - | 0.0439 | 1.0 | 0.0 | Schräglagenwinkel des Motorrads (berechnet aus Sensorboxsignalen) in Grad |
| STAT_SENSORBOX_BESCHLEUNIGUNG3_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Beschleunigung 3 der Sensorbox (aus CAN-Botschaft) in Meter pro Quadratsekunde |

### RES_0X6413_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETRIEBE_ISTGANG | 0-n | high | unsigned char | - | TAB_MR_GETRIEBE | 1.0 | 1.0 | 0.0 | Istwert der Getriebeschaltwalzenposition als Ganginformation |
| STAT_SPANNUNG_ADC_GETRIEBE_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Wert des Getriebeschaltwalzenpotentiometers in Volt |

### RES_0X6414_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_SST_SCHALTER1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang Schalter 1 des Seitenstützenständers: 1=eingeklappt; 0=ausgeklappt |
| STAT_SCHALTER_SST_SCHALTER2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang Schalter 2 des Seitenstützenständers: 1=eingeklappt; 0=ausgeklappt |
| STAT_SCHALTER_SEITENSTUETZENSTAENDER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand des Seitenstützenständers: 1=eingeklappt; 0=ausgeklappt |
| STAT_SCHALTER_KUPPLUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Kupplungsschalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_OELNIVEAU | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Ölniveauschalters: 1=Ölniveau i.O.; 0=Ölniveau n.i.O. |
| STAT_SCHALTER_START | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Startschalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_KLEMME15 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des KL15-Schalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_NOTAUS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Notausschalters: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_BREMSLICHT_VORN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Bremslichtschalters vorn: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_BREMSLICHT_HINTEN | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Bremslichtschalters hinten: 1=betätigt; 0=nicht betätigt |
| STAT_SCHALTER_FAHRZEUGMODUS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Fahrzeugmodustasters: 1 == betätigt; 0 == nicht betätigt |
| STAT_SCHALTER_CODIERSTECKER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Codiersteckers Sondermodus: 1 == gesteckt; 0 == nicht gesteckt |
| STAT_SCHALTER_KUPPLUNG_2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingang des Kupplungsschalters 2: 1=betätigt; 0=nicht betätigt |

### RES_0X6415_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANLASSER_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Anlasseransteuerung: 1=AKTIV ; 0=INAKTIV |
| STAT_ANLASSER_SCHUTZ | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Anlasserschutzes: 1=AKTIV; 0=INAKTIV |
| STAT_ANLASSER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Anlasserfreigabe: 1=AKTIV; 0=INAKTIV |
| STAT_ANLASSER_MOTORSTOP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Motorstop-Flags: 1=AKTIV; 0=INAKTIV |

### RES_0X6416_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch FSW oder Tester, Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch FSW oder Tester, Bank 2: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_TESTERKONTROLLE_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Testerkontrolle über Ansteuerung der Endstufe(n) der Lambdasondenheizung(en), Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_TESTERKONTROLLE_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Testerkontrolle über Ansteuerung der Endstufe(n) der Lambdasondenheizung(en), Bank 2: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_TESTER_BANK1 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch Tester, Bank 1: 1=AKTIV; 0=INAKTIV |
| STAT_SONDENHEIZUNG_ANSTEUERUNG_TESTER_BANK2 | 0/1 | high | unsigned char | - | - | - | - | - | Ansteuerung der Endstufe(n) der Lambdasondenheizung(en) durch Tester, Bank 2: 1=AKTIV; 0=INAKTIV |

### RES_0X6417_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KRAFTSTOFFPUMPE_BTS_EKP_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe Bauteilschutz Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Elektrokraftstoffpumpe: 1=AKTIV; 0=INAKTIV |
| STAT_KRAFTSTOFFPUMPE_BTS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bauteilschutz Elektrokraftstoffpumpe: 1=EIN; 0=AUS |

### RES_0X6418_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELUEFTER_BTS_ELUE_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Freigabe Bauteilschutz E-Lüfter: 1=AKTIV; 0=INAKTIV |
| STAT_ELUEFTER_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung E-Lüfter: 1=AKTIV; 0=INAKTIV |
| STAT_ELUEFTER_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung E-Lüfter: 1=AKTIV; 0=INAKTIV |

### RES_0X6419_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDAERLUFTVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |
| STAT_SEKUNDAERLUFTVENTIL_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |
| STAT_SEKUNDAERLUFTVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Sekundärluftventil: 1=AKTIV; 0=INAKTIV |

### RES_0X641A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKENTLUEFTUNGSVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Tankentlüftungsventil: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Öffnung Tankentlüftungsventil: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_ENTLUEFTUNGSPHASE | 0/1 | high | unsigned char | - | - | - | - | - | Entlüftungsphase desTankentlüftungsventils: 1=EIN; 0=AUS |
| STAT_TANKENTLUEFTUNGSVENTIL_TANKENTLUEFTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Tankentlüftung: 1=AKTIV; 0=INAKTIV |
| STAT_TANKENTLUEFTUNGSVENTIL_TV_WERT | % | high | unsigned int | - | - | 100.0 | 65535.0 | 0.0 | ausgegebenes Tastverhältnis für das Tankentlüftungsventil in Prozent |

### RES_0X641B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATURLEUCHTE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_UEBERTEMPERATURLEUCHTE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_UEBERTEMPERATURLEUCHTE_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Übertemperaturleuchte: 1=AKTIV; 0=INAKTIV |

### RES_0X641C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MOTORWARNLEUCHTE_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_MOTORWARNLEUCHTE_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |
| STAT_MOTORWARNLEUCHTE_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Motorwarnleuchte: 1=AKTIV; 0=INAKTIV |

### RES_0X641D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABGASKLAPPENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Abgasklappenstellers in Prozent |
| STAT_ABGASKLAPPENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosefreigabe für Abgasklappensteller: 1=AKTIV, 0=INAKTIV |
| STAT_ABGASKLAPPENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | - | - | - | Abgleichstatus des Abgasklappenstellers |
| STAT_ABGASKLAPPENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | - | - | - | Fehler des Abgasklappenstellers |
| STAT_ABGASKLAPPENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | 1.0 | 1.0 | 0.0 | Abgleichsperre des Abgasklappenstellers |

### RES_0X641E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERFERENZROHRKLAPPENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Interferenzrohrklappenstellers in Prozent |
| STAT_INTERFERENZROHRKLAPPENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosefreigabe für Interferenzrohrklappensteller: 1=AKTIV, 0=INAKTIV |
| STAT_INTERFERENZROHRKLAPPENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | 1.0 | 1.0 | 0.0 | Abgleichstatus des Interferenzrohrklappenstellers |
| STAT_INTERFERENZROHRKLAPPENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | 1.0 | 1.0 | 0.0 | Fehler des Interferenzrohrklappenstellers |
| STAT_INTERFERENZROHRKLAPPENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | 1.0 | 1.0 | 0.0 | Abgleichsperre des Interferenzrohrklappenstellers |

### RES_0X6420_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKUSTIKKLAPPENVENTIL_TESTERKONTROLLE | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testerkontrolle Ansteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |
| STAT_AKUSTIKKLAPPENVENTIL_ANSTEUERUNG_TESTER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Testeransteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |
| STAT_AKUSTIKKLAPPENVENTIL_ANSTEUERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ansteuerung Akustikklappenventil: 1=AKTIV; 0=INAKTIV |

### RES_0X6421_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTHEBEL_SENSOR1_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | Rohwert des Schalthebelsensors 1 in Prozent |
| STAT_SPANNUNG_ADC_SCHALTHEBEL_SENSOR1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Schalthebelsensors 1 |
| STAT_SCHALTHEBEL_SENSOR2_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | Rohwert des Schalthebelsensors 2 in Prozent |
| STAT_SPANNUNG_ADC_SCHALTHEBEL_SENSOR2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | ADC-Spannung des Schalthebelsensors 2 |
| STAT_SCHALTHEBEL_SENSOR_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | plausibilisierter Rohwert der Schalthebelsensoren in Prozent |

### RES_0X6422_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG1_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 1 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG2_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 2 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG3_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 3 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_BESCHLEUNIGUNG4_WERT | m/s² | high | signed int | - | - | 1.0 | 800.0 | 0.0 | Querbeschleunigung des Sensorboxdatensatzes 4 in Meter pro Quadratsekunde |
| STAT_SENSORBOXDATEN_STATUS1 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 1: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_STATUS2 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 2: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_STATUS3 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 3: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_STATUS4 | 0/1 | high | unsigned char | - | - | - | - | - | Status des Sensorboxdatensatzes 4: 1 = belegt, 0 = nicht belegt |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT1_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 1 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT2_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 2 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT3_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 3 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_GESCHWINDIGKEIT4_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Geschwindigkeit des Sensorboxdatensatzes 4 in Kilometer pro Stunde |
| STAT_SENSORBOXDATEN_KILOMETERSTAND1_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 1 in Kilometer |
| STAT_SENSORBOXDATEN_KILOMETERSTAND2_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 2 in Kilometer |
| STAT_SENSORBOXDATEN_KILOMETERSTAND3_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 3 in Kilometer |
| STAT_SENSORBOXDATEN_KILOMETERSTAND4_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des Sensorboxdatensatzes 4 in Kilometer |

### RES_0X6423_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEERLAUFSTEPPER_SOLLPOSITION_WERT | % | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | relative Sollposition des Leerlaufsteppers in Prozent |
| STAT_LEERLAUFSTEPPER_ISTPOSITION_WERT | % | high | unsigned int | - | - | 100.0 | 65536.0 | 0.0 | relative Istposition des Leerlaufsteppers in Prozent |
| STAT_LEERLAUFSTEPPER_STATUS_ANSTEUERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Ansteuerung des Leerlaufsteppers |
| STAT_LEERLAUFSTEPPER_STATUS_INITIALISIERUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der Initialisierung des Leerlaufsteppers |

### RES_0X6424_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RUECKFAHRHILFENSTELLER_POSITION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Position des Rückfahrhilfenstellers in Prozent |
| STAT_RUECKFAHRHILFENSTELLER_FREIGABE | 0/1 | high | unsigned char | - | - | - | - | - | Diagnosefreigabe für Rückfahrhilfensteller: 1=AKTIV, 0=INAKTIV |
| STAT_RUECKFAHRHILFENSTELLER_ABGLEICH | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_ABGLEICH | - | - | - | Abgleichstatus des Rückfahrhilfenstellers |
| STAT_RUECKFAHRHILFENSTELLER_FEHLER | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_FEHLER | - | - | - | Fehler des Rückfahrhilfenstellers |
| STAT_RUECKFAHRHILFENSTELLER_SPERRE | 0-n | high | unsigned char | - | TAB_MR_KLAPPEN_SPERRE | - | - | - | Abgleichsperre des Rückfahrhilfenstellers |

### RES_0X6430_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_GETRIEBE_NEUTRAL_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den Neutralgang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG1_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 1.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG2_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 2.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG3_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 3.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG4_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 4.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG5_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 5.Gang in Volt |
| STAT_ADAPTION_GETRIEBE_GANG6_WERT | V | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Adaptionswert des Getriebeschaltwalzenpotentiometers für den 6.Gang in Volt |
| STAT_ADAPTION_GETRIEBE | 0/1 | high | unsigned char | - | - | - | - | - | Status Adaption Getriebe: 1=für alle Gänge abgeschlossen; 0=nicht abgeschlossen |
| - | Bit | high | BITFIELD | - | BF_TAB_MR_ADAPTIONSFREIGABE_GETRIEBE | - | - | - | Status Freigabe Adaption Getriebe für den jeweiligen Gang |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_NEUTRAL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des Neutralganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 1. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 2. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 3. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 4. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 5. Ganges |
| STAT_ADAPTION_GETRIEBE_FREIGABEZAEHLER_GANG6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zähler der Freigabebedingungen für die Adaption des 6. Ganges |

### RES_0X6431_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Drosselklappe 1: 1=abgeschlossen; 0=nicht abgeschlossen |
| STAT_ADAPTION_DROSSELKLAPPE1_NOTLAUFPUNKT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Adaptionswert Notlaufpunkt der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Drosselklappe 2: 1=abgeschlossen; 0=nicht abgeschlossen |
| STAT_ADAPTION_DROSSELKLAPPE2_NOTLAUFPUNKT_WERT | % | high | signed int | - | - | 1600.0 | 65536.0 | 0.0 | Adaptionswert Notlaufpunkt der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ADAPTION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Adaptionswerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ADAPTION_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Adaptionswerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ROHWERT_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Rohwerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE1_ABWEICHUNG_ROHWERT_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Rohwerte der Drosselklappe 1 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ADAPTION_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Adaptionswerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ADAPTION_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Adaptionswerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ROHWERT_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert Interkanalabweichung der Rohwerte der Drosselklappe 2 in Prozent |
| STAT_ADAPTION_DROSSELKLAPPE2_ABWEICHUNG_ROHWERT_MAX_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Adaptionswert maximale Interkanalabweichung der Rohwerte der Drosselklappe 2 in Prozent |

### RES_0X6432_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL1_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 1 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_OBEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | oberer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER_KANAL2_UNTEN_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | unterer Adaptionswert vom Kanal 2 des Fahrwertgeber in Prozent |
| STAT_ADAPTION_FAHRWERTGEBER | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Adaption Fahrwertgeber: 1=abgeschlossen; 0=nicht abgeschlossen |

### RES_0X6434_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_SCHRAEGLAGE_GIERRATE_WERT | °/s | high | signed int | - | - | 1.0 | 2000.0 | 0.0 | Nullpunktadaptionswert der Gierrate in Grad pro Sekunde |
| STAT_ADAPTION_SCHRAEGLAGE_ROLLRATE_WERT | °/s | high | signed int | - | - | 1.0 | 2000.0 | 0.0 | Nullpunktadaptionswert der Rollrate in Grad pro Sekunde |

### RES_0X6435_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_LEERLAUF_VORSTEUERUNG_WERT | % | high | signed int | - | - | 100.0 | 32768.0 | 0.0 | Adaptionswert der Leerlaufvorsteuerung in Prozent |
| STAT_ARRAY_TEMP_ADAPTION_LEERLAUF_VORSTEUERUNG_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Mittlere Motortemperatur im Temperaturfenster für Freigabe der Adaption Leerlaufvorsteuerung (TMLLAD), Rohwerte |
| STAT_ARRAY_ADAPTION_LEERLAUF_VORSTEUERUNG_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Adaptionswert Array Adaption Leerlaufvorsteuerung (dvad_ar), Rohwerte |

### RES_0X6438_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_KLOPFREGELUNG_VKS1_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 1 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS2_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 2 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS3_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 3 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS4_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 4 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS5_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 5 |
| STAT_ADAPTION_KLOPFREGELUNG_VKS6_WERT | - | high | unsigned int | - | - | 64.0 | 65536.0 | 0.0 | Verstärkungskorrektur des Klopfsensors für Zylinder 6 |

### RES_0X6439_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_LAMBDAREGELUNG_BANKNR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Banknummer der auszulesenden Lambdaregeladaptionsdaten |
| STAT_ADAPTION_LAMBDAREGELUNG_LABEL | 0-n | high | unsigned char | - | TAB_MR_LAMBDAADAPTION_LABEL | - | - | - | auszulesendes Label der Lambdaregeladaption |
| STAT_ADAPTION_LAMBDAREGELUNG_TEILENR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Teilenummer des auszulesenden Labels |
| STAT_ADAPTION_LAMBDAREGELUNG_DATEN_DATA | DATA | high | data[200] | - | - | 1.0 | 1.0 | 0.0 | durch  Banknummer, Label und Teilenummer spezifizierte Daten der Lambdaregelungsadaption |

### RES_0X643A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS1_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 1. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS2_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 2. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS3_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 3. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS4_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 4. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS5_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 5. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS6_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 6. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS7_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 7. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS8_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 8. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS9_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 9. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_EINLASS1_REFPOS10_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | adaptierte 10. Referenzposition einer NW-Flanke der Einlassnockenwelle 1 |
| STAT_ADAPTION_NOCKENWELLE_VERDREHWINKEL_WERT | ° KW | high | signed int | - | - | 1.0 | 45.5111111 | 0.0 | gefilterter Nockenwellenverdrehwinkel |

### RES_0X6470_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRGESTELLNUMMER_TEXT | TEXT | high | string[17] | - | - | 1.0 | 1.0 | 0.0 | EWS-Fahrgestellnummer |

### RES_0X6471_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_NUMMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselnummer |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_TYP_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel; 2 == Hauptschlüssel; 3 == Nachschlüssel |
| STAT_SCHLUESSELDATEN_AUTOINIT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Autoinit: 0 == keine automatische Initialisierung; 1 == automatische Initialisierung |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_SPERRE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselsperrung: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_ANLERNZUSTAND_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselanlernzustand: 0 == Schlüssel ist nicht angelernt; 1 == Schlüssel ist angelernt |
| STAT_SCHLUESSELDATEN_MSC_HANDLING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zustand Handling mechanischer Schlüsselcode: 0 == lesen/schreiben; 1 == nicht lesen schreiben |
| STAT_SCHLUESSELDATEN_SCHLUESSEL_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Schlüsselidentifier |
| STAT_SCHLUESSELDATEN_SECRETKEY_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Secret Key des Schlüssel |
| STAT_SCHLUESSELDATEN_PASSWORD_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Secret Key des Schlüssel |

### RES_0X6472_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANLERNDATUM_ORT_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_JAHR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Jahr des Schlüsselanlerndatums |
| STAT_ANLERNDATUM_ORT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ort des Schlüsselanlernens |

### RES_0X6473_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSELANLERNEN_STATUS_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Status des EWS-Schlüsselanlernprozesses |

### RES_0X6474_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MECHANISCHER_SCHLUESSELCODE_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | mechanischer Schlüsselcode in ASCII |

### RES_0X6475_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SGVERRIEGELUNG_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Status der Verriegelung des SGs |

### RES_0X6478_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSEL_AKTUELL_KEY_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsselnummer: 0 == kein aktueller Schlüssel, 1-10 == aktueller Schlüssel |
| STAT_SCHLUESSEL_AKTUELL_KEY_TYPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schlüsseltyp: 1 == Geldbörsenschlüssel, 2 == Standardschlüssel, 3 == Nachschlüssel |
| STAT_SCHLUESSEL_AKTUELL_KEY_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Schlüsselstatus: Bit 0 == reserviert, Bit 1 == gesperrt, Bit 2 == Daten plausibel, Bit 3 == angelernt, Bit 4 == Automatisches Anlernen gesetzt, Bit 5 == Ignoriere MSC gesetzt |
| STAT_SCHLUESSEL_AKTUELL_AUTH_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Authentisierungsstatus: Bit 0 == Schlüssel in BMSX bekannt, Bit 1 == Reserviert, Bit 2 == Reserviert, Bit 3 == SG verriegelt, Bit 4 == Anlernfunktion aktiviert |
| STAT_SCHLUESSEL_AKTUELL_SYS_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweiser Systemstatus: Bit 0 == Kommunikationsfehler |
| STAT_SCHLUESSEL_AKTUELL_MECH_KEY_CODE_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | mechanischer Schlüsselcode |

### RES_0X647A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWS_DIAGNOSE_ENV_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweise Umgebungsinformation: Bit 0 == Stromversorgung Ringantenne vorhanden, Bit 1 == Killschalter während EWS-Funktion gezogen, Bit 2 == Killschalter gezogen |
| STAT_EWS_DIAGNOSE_LOGSTATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | bitweise Logistikinformation: Bit 0 == Schlüssel ist der BMSX bekannt, Bit 1 == Authentisierung erfolgt, Bit 2 == BMSX ist verriegelt, Bit 3 == Anlernfunktion ist aktiv |
| STAT_EWS_DIAGNOSE_AKT_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Status: 0 == EWS Funktion beendet, >0 == EWS aktiv |
| STAT_EWS_DIAGNOSE_AKT_ERROR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Fehler: 0 == kein Fehler,  >0 == Fehler |
| STAT_EWS_DIAGNOSE_LEARN_STATE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktueller Anlernstatus: 0 == nicht aktiv, 1 == aktiv, 2 == Anlernen i.O., > 2 == Fehler |
| STAT_EWS_DIAGNOSE_RDX_DATA | DATA | high | data[127] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |
| STAT_EWS_DIAGNOSE_CBL_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Interne Nutzung EA |

### RES_0X647B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHLUESSEL_SPERRSTATI_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 1: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 2: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 3: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 4: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 5: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 6: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 7: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 8: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 9: 0 == nicht gesperrt; 1 == gesperrt |
| STAT_SCHLUESSEL_SPERRSTATI_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus Schlüssel 10: 0 == nicht gesperrt; 1 == gesperrt |

### RES_0X6490_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAMBDAREGELUNG_BANK1_FAKTOR_WERT | - | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Ausgangswert des Lambdaregelfaktors der Bank 1 |
| STAT_LAMBDAREGELUNG_BANK2_FAKTOR_WERT | - | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Ausgangswert des Lambdaregelfaktors der Bank 2 |
| STAT_LAMBDAREGELUNG_BANK1 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lambdaregelung Bank 1: 1=AKTIV, 0=INAKTIV |
| STAT_LAMBDAREGELUNG_BANK2 | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lambdaregelung Bank 2: 1=AKTIV, 0=INAKTIV |

### RES_0X6491_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_LEERLAUF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leerlauf des Motors: 1=AKTIV; 0=INAKTIV |
| STAT_LAST_VOLLLAST | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Volllast des Motors: 1=AKTIV; 0=INAKTIV |

### RES_0X6492_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUENDUNG_WINKEL_IST_WERT | ° | high | signed char | - | - | 191.25 | 255.0 | 0.0 | aktueller Zündwinkel in Grad Kurbelwelle |
| STAT_ZUENDUNG_SCHLIESSZEIT_ZUENDSPULEN_WERT | ms | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Schließzeiten der Zündspulen in Millisekunden |

### RES_0X6493_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINSPRITZUNG_DAUER_BANK1_WERT | ms | high | unsigned int | - | - | 8.0 | 1000.0 | 0.0 | effektive Einspritzdauer Bank 1 in Millisekunden |
| STAT_EINSPRITZUNG_DAUER_BANK2_WERT | ms | high | unsigned int | - | - | 8.0 | 1000.0 | 0.0 | effektive Einspritzdauer Bank 2 in Millisekunden |

### RES_0X6494_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASC_REGELUNG_DAUER_WERT | s | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Dauer aller ASC-Regelungen in Sekunden |
| STAT_ASC_REGELUNG_INTENSITAET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | mittlere Intensität/Momentrücknahme aller ASC-Regelungen in Prozent |
| STAT_ASC_STATUS | 0-n | high | unsigned char | - | TAB_MR_ASC_STATUS | 1.0 | 1.0 | 0.0 | aktueller Status der ASC-Funktion |
| STAT_ASC_MODUS | 0-n | high | unsigned char | - | TAB_MR_ASC_MODUS | 1.0 | 1.0 | 0.0 | gewählter Modus der ASC-Funktion |
| STAT_ASC_TASTER | 0-n | high | unsigned char | - | TAB_MR_ASC_TASTER | 1.0 | 1.0 | 0.0 | ASC-Taster |
| STAT_ASC_RADIUSKORREKTUR_WERT | mm | high | signed int | - | - | 4000.0 | 65536.0 | 0.0 | gesamte Radiuskorrektur der Reifenradiusadaption in Millimeter |

### RES_0X6495_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLOPFREGELUNG_DZW_KR_I_HOLD_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene I-Anteile Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_DZW_KR_P_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | P-Anteile Klopfregelung bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_NMOT_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_RL_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | relative Füllungen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_WDKBA_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drosselklappenwinkel bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TANS_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Ansauglufttemperaturen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TMOT_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Motortemperaturen bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_PU_HOLDI_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Umgebungsdrücke bei max. I-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_DZW_KR_P_HOLD_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene P-Anteile Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_DZW_KR_I_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | I-Anteile Klopfregelung bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_NMOT_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_RL_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | relative Füllungen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_WDKBA_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Drosselklappenwinkel bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TANS_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Ansauglufttemperaturen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_TMOT_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Motortemperaturen bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_PU_HOLDP_DATA | DATA | high | data[12] | - | - | 1.0 | 1.0 | 0.0 | Umgebungsdrücke bei max. P-Anteil Klopfregelung (zylinderindividuell) als Rohdaten |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL1_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 1 |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL2_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 2 |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL3_DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 3 |
| STAT_KLOPFREGELUNG_KR_IKRMX_HOLD_TEIL4_DATA | DATA | high | data[114] | - | - | 1.0 | 1.0 | 0.0 | maximal aufgetretene ikr ohne erkanntes Klopfen (zylinderindividuell) als Rohdaten - Teil 4 |

### RES_0X6496_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | - | - | - | aktuell aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im aktuellen Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im aktuellen Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_AKTUELL_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im aktuellen Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim vorletzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | 1.0 | 1.0 | 0.0 | im vorletzten Fahrzyklus aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im vorletzten Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im vorletzten Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_ZWEITLETZT_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im vorletzten Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim drittletzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | 1.0 | 1.0 | 0.0 | im drittletzten Fahrzyklus aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im drittletzten Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im drittletzten Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_DRITTLETZT_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im drittletzten Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim viertletzten Umschaltvorgang |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_MODUS | 0-n | high | unsigned char | - | TAB_MR_FZG_MODUS | 1.0 | 1.0 | 0.0 | im viertletzten Fahrzyklus aktiver Fahrzeugmodus |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_ASC | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ASC im viertletzten Fahrzyklus: 1 == ASC deaktiviert, 0 == ASC aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_ABS | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungsstatus ABS im viertletzten Fahrzyklus: 1 == ABS deaktiviert, 0 == ABS aktiviert |
| STAT_FAHRZEUGMODUSSPEICHER_VIERTLETZT_SONDERCODIERUNG | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status des Reifencodiersteckers / der Sondercodierung im viertletzten Fahrzyklus: 1 == gesteckt / aktiv, 0 == nicht gesteckt / inaktiv |
| STAT_FAHRZEUGMODUSSPEICHER_MODUSZUORDNUNG_TEXT | TEXT | high | string[101] | - | - | 1.0 | 1.0 | 0.0 | Fahrzeugmoduszuordnung als ASCII-Text |

### RES_0X64A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRUNG_EKP | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Sperrstatus von EKP, Anlasser und Einspritzung: 0 == INAKTIV; 1 == AKTIV |

### RES_0X64A2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERDREHZAHL_GRENZE_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motorüberdrehzahlgrenzwert in Umdrehungen pro Minute |
| STAT_UEBERDREHZAHL_MAX_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | vorgekommene Maximaldrehzahl in Umdrehungen pro Minute |
| STAT_UEBERDREHZAHL_KMSTAND_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand der letzten Überschreitung des Motorüberdrehzahlgrenzwertes in Kilometer |
| STAT_UEBERDREHZAHL_ANZAHL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überschreitungen des Motorüberdrehzahlgrenzwertes |

### RES_0X64A3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKUSTIK_VARIANTE | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungsstatus der länderspezifischen Datenvariante der Funktion AKUSTIK: 1 == AKTIV, 0 == INAKTIV |

### RES_0X64A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERK_BEGRENZUNG | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungsstatus Drehzahlbegrenzung Werk: 1=AKTIV; 0=INAKTIV |

### RES_0X64A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPERRUNG_TEV | 0/1 | high | unsigned char | - | - | - | - | - | Sperrstatus des Tankentlüftungsventils: 0 == INAKTIV; 1 == AKTIV |

### RES_0X64A6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERKSPROZESS | 0/1 | high | unsigned char | - | - | - | - | - | testerseitiger Aktivierungsstatus des Werksprozesses: 0 == INAKTIV; 1 == AKTIV |

### RES_0X64B3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NETTOCODIERDATEN_BLOCK_3300_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Codierdatenarray 3300 (BSZR - betriebsstundenzählerrelevant) |
| STAT_NETTOCODIERDATEN_BLOCK_3320_DATA | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | Codierdatenarray 3320 (BSZU - betriebsstundenzählerunabhängig) |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE00_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 0 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE01_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 1 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE02_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 2 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE03_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 3 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE04_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 4 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE05_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 5 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE06_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 6 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE07_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 7 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE08_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 8 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE09_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 9 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE10_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 10 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE11_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 11 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE12_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 12 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE13_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 13 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE14_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 14 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE15_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 15 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE16_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 16 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE17_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 17 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE18_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 18 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE19_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 19 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE20_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 20 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE21_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 21 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE22_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 22 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE23_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 23 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE24_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 24 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE25_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 25 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE26_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 26 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE27_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 27 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE28_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 28 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE29_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 29 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE30_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 30 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE31_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 31 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE32_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 32 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE33_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 33 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE34_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 34 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE35_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 35 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE36_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 36 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE37_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 37 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE38_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 38 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE39_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 39 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE40_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 40 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE41_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 41 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE42_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 42 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE43_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 43 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE44_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 44 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE45_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 45 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE46_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 46 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE47_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 47 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE48_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 48 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE49_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 49 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE50_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 50 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE51_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 51 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE52_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 52 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE53_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 53 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE54_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 54 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE55_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 55 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE56_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 56 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE57_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 57 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE58_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 58 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE59_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 59 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE60_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 60 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE61_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 61 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE62_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 62 des Codierdatenarrays 3320 |
| STAT_NETTOCODIERDATEN_BLOCK_3320_BYTE63_WERT | HEX | high | unsigned char | - | - | - | - | - | Byte 63 des Codierdatenarrays 3320 |

### RES_0X64B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VARIANTENINFO_DATEN0_TEXT | TEXT | high | string[26] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 0) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN1_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 1) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN2_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 2) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN3_TEXT | TEXT | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 3) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN4_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 4) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN5_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 5) als ASCII-Text |
| STAT_VARIANTENINFO_DATEN6_TEXT | TEXT | high | string[40] | - | - | 1.0 | 1.0 | 0.0 | Datensatz-/Varianteninformation (Datenfeld 6) als ASCII-Text |

### RES_0X64B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_DATEN_RADIUS_VORDERRAD_WERT | m | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | unkorrigierter Radius des Vorderrades in Meter |
| STAT_CODIERUNG_DATEN_RADIUS_HINTERRAD_WERT | m | high | unsigned int | - | - | 2.0 | 65536.0 | 0.0 | Radius des Hinterrades in Meter |
| STAT_CODIERUNG_DATEN_BEGRENZUNG_DREHZAHL_WERT | 1/min | high | unsigned int | - | - | 1.0 | 4.0 | 0.0 | Motorbegrenzungsdrehzahl in Umdrehungen pro Minute |
| STAT_CODIERUNG_DATEN_BEGRENZUNG_GESCHWINDIGKEIT_WERT | km/h | high | unsigned int | - | - | 1.0 | 128.0 | 0.0 | zulässige Maximalgeschwindigkeit in Kilometer pro Stunde |

### RES_0X64C1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_KMSTAND_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Servicekilometerstand |

### RES_0XE119_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GWSZ_WERT | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | aktueller GWSZ-Wert |

### RES_0XE12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_TAG_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Tag, an dem der nächste Service fällig ist |
| STAT_SERVICE_MONAT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Monat, an dem der nächste Service fällig ist |
| STAT_SERVICE_JAHR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Jahr, an dem der nächste Service fällig ist |

### RES_0XE12D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTWEG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibendes Wegstreckenintervall bis wegabhängiger Service als überfällig angezeigt wird |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| KL_15_HW_DIGITAL_MR | 0xE013 | STAT_KL_15_HW_DIGITAL_EIN | Status Klemme 15 Hardware digital | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12C_D | RES_0xE12C_D |
| SERVICE_RESTWEG_MR | 0xE12D | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Weg | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12D_D | RES_0xE12D_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| EXHAUST_REGULATION_OR_TYPEAPPROVAL_NUMBER | 0xF196 | STAT_TYPPRUEFNUMMER_TEXT | Typprüfnummer | TEXT | - | high | string[17] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_PROFIL01_MR | 0x2300 | - | Auslesen der Daten des FASTA-Profils 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2300_D |
| FASTA_PROFIL02_MR | 0x2301 | - | Auslesen der Daten des FASTA-Profils 2 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2301_D |
| FASTA_PROFIL03_MR | 0x2302 | - | Auslesen der Daten des FASTA-Profils 3 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2302_D |
| FASTA_PROFIL04_MR | 0x2303 | - | Auslesen der Daten des FASTA-Profils 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2303_D |
| FASTA_PROFIL05_MR | 0x2304 | - | Auslesen der Daten des FASTA-Profils 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2304_D |
| FASTA_PROFIL06_MR | 0x2305 | - | Auslesen der Daten des FASTA-Profils 6 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2305_D |
| FASTA_PROFIL07_MR | 0x2306 | - | Auslesen der Daten des FASTA-Profils 7 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2306_D |
| FASTA_PROFIL08_MR | 0x2307 | - | Auslesen der Daten des FASTA-Profils 8 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2307_D |
| FASTA_PROFIL09_MR | 0x2308 | - | Auslesen der Daten des FASTA-Profils 9 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2308_D |
| FASTA_PROFIL10_MR | 0x2309 | - | Auslesen der Daten des FASTA-Profils 10 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2309_D |
| FASTA_PROFIL11_MR | 0x230A | - | Auslesen der Daten des FASTA-Profils 11 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230A_D |
| FASTA_PROFIL12_MR | 0x230B | - | Auslesen der Daten des FASTA-Profils 12 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230B_D |
| FASTA_PROFIL13_MR | 0x230C | - | Auslesen der Daten des FASTA-Profils 13 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230C_D |
| FASTA_PROFIL14_MR | 0x230D | - | Auslesen der Daten des FASTA-Profils 14 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230D_D |
| FASTA_PROFIL15_MR | 0x230E | - | Auslesen der Daten des FASTA-Profils 15 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x230E_D |
| FASTA_LASTKOLLEKTIV1_MR | 0x2320 | - | Auslesen der Daten des Lastkollektivs 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2320_D |
| FASTA_LAMBDADATEN1_MR | 0x2330 | - | Auslesen der Daten des FASTA-Lambdadatenblocks 1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2330_D |
| FASTA_LAMBDADATEN2_BANK1_TEIL1_MR | 0x2331 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK1_TEIL1_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN2_BANK1_TEIL2_MR | 0x2332 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK1_TEIL2_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN2_BANK2_TEIL1_MR | 0x2333 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK2_TEIL1_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN2_BANK2_TEIL2_MR | 0x2334 | STAT_FASTA_LAMBDADATEN2_KFLRA_BANK2_TEIL2_DATA | adaptiertes Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL1_MR | 0x2335 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL1_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL2_MR | 0x2336 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL2_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL3_MR | 0x2337 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL3_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 3) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK1_TEIL4_MR | 0x2338 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK1_TEIL4_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 1 als Messgröße (Teil 4) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL1_MR | 0x2339 | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL1_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 1) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL2_MR | 0x233A | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL2_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 2) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL3_MR | 0x233B | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL3_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 3) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN3_BANK2_TEIL4_MR | 0x233C | STAT_FASTA_LAMBDADATEN3_KFLRA_SUM_GEWICHT_BANK2_TEIL4_DATA | Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank 2 als Messgröße (Teil 4) | DATA | - | high | data[192] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_LAMBDADATEN4_MR | 0x233D | - | Auslesen der Daten des FASTA-Lambdadatenblocks 4 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233D_D |
| FASTA_LAMBDADATEN5_MR | 0x233E | - | Auslesen der Daten des FASTA-Lambdadatenblocks 5 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x233E_D |
| BETRIEBSSTUNDENZAEHLER_MR | 0x4AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler des Motors in Sekunden | s | - | high | unsigned long | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| TEMPERATUR_MR | 0x6400 | - | Auslesen der vom SG verwendeten Temperaturen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6400_D |
| GESCHWINDIGKEIT_MR | 0x6401 | - | Auslesen der vom SG verwendeten Geschwindigkeiten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6401_D |
| DRUCK_MR | 0x6402 | - | Auslesen der vom SG verwendeten Drücke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6402_D |
| DREHZAHL_MR | 0x6403 | - | Auslesen der vom SG verwendeten Drehzahlen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6403_D |
| SPANNUNG_MR | 0x6404 | - | Auslesen der vom SG verwendeten Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6404_D |
| DROSSELKLAPPE_MR | 0x6410 | - | Auslesen von Drosselklappenwerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6410_D |
| FAHRWERTGEBER_MR | 0x6411 | - | Auslesen von Fahrwertgeberwerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6411_D |
| SENSORBOX_MR | 0x6412 | - | Auslesen der vom SG verwendeten Signale der Sensorbox sowie daraus berechneter Werte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6412_D |
| GETRIEBE_MR | 0x6413 | - | Auslesen von Getriebewerten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6413_D |
| SCHALTER_MR | 0x6414 | - | Auslesen von Schaltereingängen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6414_D |
| ANLASSER_MR | 0x6415 | - | Auslesen von anlasserrelevanten Stati | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6415_D |
| LAMBDASONDENHEIZUNG_MR | 0x6416 | - | Auslesen von Ansteuerstati der Lambdasondenheizung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6416_D |
| KRAFTSTOFFPUMPE_MR | 0x6417 | - | Auslesen von Ansteuerstati der Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6417_D |
| ELUEFTER_MR | 0x6418 | - | Auslesen von Ansteuerstati des E-Lüfters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6418_D |
| SEKUNDAERLUFTVENTIL_MR | 0x6419 | - | Auslesen von Ansteuerstati des Sekundärluftventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6419_D |
| TANKENTLUEFTUNGSVENTIL_MR | 0x641A | - | Auslesen von Stati und Werten des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641A_D |
| UEBERTEMPERATURLEUCHTE_MR | 0x641B | - | Auslesen von Ansteuerstati der Übertemperaturleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641B_D |
| MOTORWARNLEUCHTE_MR | 0x641C | - | Auslesen von Ansteuerstati der Motorwarnleuchte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641C_D |
| ABGASKLAPPENSTELLER_MR | 0x641D | - | Auslesen von Werten des Abgasklappenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641D_D |
| INTERFERENZROHRKLAPPENSTELLER_MR | 0x641E | - | Auslesen von Werten des Interferenzrohrklappenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x641E_D |
| SCHALTSAUGROHR_MR | 0x641F | STAT_SCHALTSAUGROHR_POSITION_WERT | Position des Schaltsaugrohres in Prozent | % | - | high | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| AKUSTIKKLAPPENVENTIL_MR | 0x6420 | - | Auslesen von Ansteuerstati des Akustikklappenventils | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6420_D |
| SCHALTHEBEL_MR | 0x6421 | - | Auslesen von Werten der Schalthebelsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6421_D |
| SENSORBOXDATEN_MR | 0x6422 | - | Auslesen von Sensorboxdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6422_D |
| LEERLAUFSTEPPER_MR | 0x6423 | - | Auslesen von Werten des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6423_D |
| RUECKFAHRHILFENSTELLER_MR | 0x6424 | - | Auslesen von Werten des Rückfahrhilfenstellers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6424_D |
| ADAPTION_GETRIEBE_LESEN_MR | 0x6430 | - | Auslesen der Adaptionswerte des Getriebeschaltwalzenpotentiometers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6430_D |
| ADAPTION_DROSSELKLAPPE_LESEN_MR | 0x6431 | - | Auslesen der Adaptionswerte der Drosselklappe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6431_D |
| ADAPTION_FAHRWERTGEBER_LESEN_MR | 0x6432 | - | Auslesen der Adaptionswerte des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6432_D |
| ADAPTION_SCHRAEGLAGE_LESEN_MR | 0x6434 | - | Auslesen von Adaptionswerten der Schräglagenberechnung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6434_D |
| ADAPTION_LEERLAUF_LESEN_MR | 0x6435 | - | Auslesen von Adaptionswerten der Leerlaufvorsteuerung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6435_D |
| ADAPTION_SCHALTHEBEL_LESEN_MR | 0x6436 | STAT_ADAPTION_SCHALTHEBEL_SENSOR_WERT | Adaptionswert des Schalthebelsensors in Prozent | % | - | high | signed int | - | 100.0 | 32768.0 | 0.0 | - | 22 | - | - |
| ADAPTION_LAUFUNRUHE_LESEN_MR | 0x6437 | STAT_ADAPTION_LAUFUNRUHE_WERT | Adaptionswert der Laufunruheberechnung in Prozent | % | - | high | signed int | - | 1024.0 | 1953125.0 | 0.0 | - | 22 | - | - |
| ADAPTION_KLOPFREGELUNG_LESEN_MR | 0x6438 | - | Auslesen der Adaptionswerte der Klopfregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6438_D |
| ADAPTION_LAMBDAREGELUNG_LESEN_MR | 0x6439 | - | Auslesen von Daten der Lambdaregelungsadaption, die zuvor über ADAPTION_LAMBDAREGELUNG_AUSWAHL_MR ausgewählt wurden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6439_D |
| ADAPTION_NOCKENWELLE_LESEN_MR | 0x643A | - | Auslesen von Adaptionswerten der Nockenwelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x643A_D |
| ADAPTION_GANGWECHSEL_LESEN_MR | 0x643B | STAT_ADAPTION_GANGWECHSEL_ZAEHLER_DKVER_WERT | adaptiver Maximalwert von cnt_dkver_um nach Momenteneingriff durch die Gangwechselunterstützung | - | - | high | unsigned int | - | 1.0 | 1000.0 | 0.0 | - | 22 | - | - |
| ADAPTION_LOESCHEN_MR | 0x6440 | - | Löschen von Adaptionswertegruppen.  Bei Motordrehzahl == 0 wird direkt nach Jobausführung ein Reset ausgelöst und damit die Adaptionswerte in den gesetzten Gruppen initialisiert. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6440_D | - |
| NOCKENWELLENDIAGNOSE_MR | 0x6442 | - | De-/Aktivierung der Nockenwellendiagnose | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6442_D | - |
| ADAPTION_GETRIEBE_SCHREIBEN_MR | 0x6444 | - | Schreiben von Werten der Getriebeadaption | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6444_D | - |
| ADAPTION_LAMBDAREGELUNG_AUSWAHL_MR | 0x6445 | - | Auswahl der Kennfelddaten, die nachfolgend mit ADAPTION_LAMBDAREGELUNG_LESEN_MR ausgelesen werden sollen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6445_D | - |
| ADAPTION_LAMBDAREGELUNG_SCHREIBEN_MR | 0x6446 | - | Schreiben von Daten der Lambdaregelungsadaption, die zuvor mit ADAPTION_LAMBDAREGELUNG_LESEN_MR ausgelesen wurden | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6446_D | - |
| VERBAUDIAGNOSE_LEERLAUFSTEPPER_MR | 0x6447 | - | Steuerung der Verbaudiagnose des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6447_D | - |
| EINSPRITZVENTIL_ANSTEUERN_MR | 0x6450 | - | Ansteuern der Einspritzventile | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6450_D | - |
| SEKUNDAERLUFTVENTIL_ANSTEUERN_MR | 0x6451 | - | Ansteuern des Sekundärluftventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6451_D | - |
| TANKENTLUEFTUNGVENTIL_ANSTEUERN_MR | 0x6452 | - | Ansteuern des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6452_D | - |
| ELEKTROKRAFTSTOFFPUMPE_ANSTEUERN_MR | 0x6453 | - | Ansteuern der Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6453_D | - |
| MOTORLUEFTER_ANSTEUERN_MR | 0x6454 | - | Ansteuern des elektrischen Motorlüfters | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6454_D | - |
| LAMBDASONDENHEIZUNG_ANSTEUERN_MR | 0x6455 | - | Ansteuern der Lambdasondenheizungen | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6455_D | - |
| UEBERTEMPERATURLEUCHTE_ANSTEUERN_MR | 0x6456 | - | Ansteuern der Übertemperaturleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6456_D | - |
| MOTORWARNLEUCHTE_ANSTEUERN_MR | 0x6457 | - | Ansteuern der Motorwarnleuchte | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6457_D | - |
| ABGASKLAPPENSTELLER_ANSTEUERN_MR | 0x6458 | - | Ansteuern des Abgasklappenstellers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6458_D | - |
| INTERFERENZROHRKLAPPENSTELLER_ANSTEUERN_MR | 0x6459 | - | Ansteuern des Interferenzrohrklappenstellers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6459_D | - |
| SCHALTSAUGROHR_ANSTEUERN_MR | 0x645A | - | Ansteuern des Schaltsaugrohres | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645A_D | - |
| DROSSELKLAPPENMOTOR_ANSTEUERN_MR | 0x645B | - | Ansteuern des Drosselklappenmotors | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645B_D | - |
| DROSSELKLAPPENREGLER_ANSTEUERN_MR | 0x645C | - | Ansteuern bzw. Stimulieren der Drosselklappenlageregelung durch eine Sollwertvorgabe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645C_D | - |
| AKUSTIKKLAPPENVENTIL_ANSTEUERN_MR | 0x645D | - | Ansteuern des Akustikklappenventils | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645D_D | - |
| EINSPRITZVENTIL_EKP_ANSTEUERN_MR | 0x645E | - | gemeinsames Ansteuern von Einspritzventilen und Elektrokraftstoffpumpe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645E_D | - |
| LEERLAUFSTEPPER_ANSTEUERN_MR | 0x645F | - | Ansteuern des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 2F | ARG_0x645F_D | - |
| RUECKFAHRHILFENSTELLER_ANSTEUERN_MR | 0x6460 | - | Ansteuerung des Stellers für die Rückfahrhilfe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x6460_D | - |
| FAHRGESTELLNUMMER_MR | 0x6470 | - | Auslesen und Schreiben der EWS-Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6470_D | RES_0x6470_D |
| SCHLUESSELDATEN_MR | 0x6471 | - | Auslesen und Schreiben der EWS-Schlüsseldaten; Vor dem Auslesen der Schlüsseldaten muß mit STEUERN_SCHLUESSELDATEN_AUSWAHL_MR die Schlüsselnummer gesetzt werden. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6471_D | RES_0x6471_D |
| ANLERNDATUM_ORT_MR | 0x6472 | - | Auslesen und Schreiben des EWS-Schlüsselanlerndatums/-orts | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6472_D | RES_0x6472_D |
| SCHLUESSELANLERNEN_MR | 0x6473 | - | Auslesen des Status bzw. Starten des EWS-Schlüsselanlernprozesses | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6473_D | RES_0x6473_D |
| MECHANISCHER_SCHLUESSELCODE_MR | 0x6474 | - | Auslesen und Schreiben des mechanischen Schlüsselcodes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6474_D | RES_0x6474_D |
| SGVERRIEGELUNG_MR | 0x6475 | - | Auslesen des Verriegelungsstatus bzw. Verriegelung des SG | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6475_D | RES_0x6475_D |
| SCHLUESSEL_SPERREN_MR | 0x6476 | - | Sperren eines Schlüssels | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6476_D | - |
| SCHLUESSEL_FREIGEBEN_MR | 0x6477 | - | Freigeben eines Schlüssels | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6477_D | - |
| SCHLUESSEL_AKTUELL_MR | 0x6478 | - | Auslesen aktueller Schlüsseldaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6478_D |
| SCHLUESSELDATEN_AUSWAHL_MR | 0x6479 | - | Auswahl des Schlüssels für den nachfolgend mit STATUS_SCHLUESSELDATEN_MR die Schlüsseldaten ausgelesen werden können | - | - | - | - | - | - | - | - | - | 2E | ARG_0x6479_D | - |
| EWS_DIAGNOSE_MR | 0x647A | - | EWS-Diagnoseinformationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x647A_D |
| SCHLUESSEL_SPERRSTATI_MR | 0x647B | - | Auslesen der Sperrstati aller Schlüssel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x647B_D |
| LAMBDAREGELUNG_MR | 0x6490 | - | Auslesen von Werten der Lambdaregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6490_D |
| LAST_MR | 0x6491 | - | Auslesen der Lastzustände des Motors | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6491_D |
| ZUENDUNG_MR | 0x6492 | - | Auslesen von Werten der Zündung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6492_D |
| EINSPRITZUNG_MR | 0x6493 | - | Auslesen von Werten der Einspritzung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6493_D |
| ASC_MR | 0x6494 | - | Auslesen von ASC-relevanten Werten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6494_D |
| KLOPFREGELUNG_MR | 0x6495 | - | Auslesen von Betriebsdaten der Klopfregelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6495_D |
| FAHRZEUGMODUSSPEICHER_MR | 0x6496 | - | Auslesen des Fahrzeugmodusspeichers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6496_D |
| RUECKFAHRHILFE_MR | 0x6497 | STAT_RUECKFAHRHILFE_FREIGABE | Status der Freigabe der Rückfahrhilfe: 1=vorhanden; 0=nicht vorhanden | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| VERBAUDIAGNOSE_LEERLAUFSTEPPER_LESEN_MR | 0x6498 | STAT_VERBAUDIAGNOSE_LEERLAUFSTEPPER_STATUS_WERT | aktueller Status der Verbaudiagnose des Leerlaufsteppers | - | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPERRUNG_EKP_MR | 0x64A1 | - | Auslesen des Sperrstatus bzw. De-/Aktivierung der Sperrung von EKP, Anlasser und Einspritzung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A1_D | RES_0x64A1_D |
| UEBERDREHZAHL_MR | 0x64A2 | - | Auslesen und Löschen von Informationen zu Überdrehzahlereignissen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A2_D | RES_0x64A2_D |
| AKUSTIK_VARIANTE_MR | 0x64A3 | - | Auslesen des Aktivierungsstatus bzw. De-/Aktivierung der länderspezifischen Datenvariante der Funktion AKUSTIK | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A3_D | RES_0x64A3_D |
| DREHZAHL_WERK_MR | 0x64A4 | - | Auslesen des Status und De-/Aktivierung der Drehzahlbegrenzung für das Werk | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A4_D | RES_0x64A4_D |
| SPERRUNG_TEV_MR | 0x64A5 | - | Auslesen des Sperrstatus bzw. De-/Aktivierung der Sperrung des Tankentlüftungsventils | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A5_D | RES_0x64A5_D |
| WERKSPROZESS_MR | 0x64A6 | - | Auslesen des Aktivierungsstatus bzw De-/Aktivierung des Werksprozesses | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64A6_D | RES_0x64A6_D |
| DATENSATZ_MR | 0x64B0 | STAT_DATENSATZ_TEXT | Datensatzinformation als ASCII-Text | TEXT | - | high | string[251] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ROZ_VARIANTE_MR | 0x64B1 | STAT_ROZ_VARIANTE | codierte Kraftstoffvariante (ROZ): 0 == Applikation ROZ-Variante 1 (Serie) aktiv, 1 == Applikation ROZ-Variante 2 aktiv | 0-n | - | high | unsigned char | TAB_MR_ROZ_VARIANTE | - | - | - | - | 22 | - | - |
| GETRIEBE_VARIANTE_MR | 0x64B2 | STAT_GETRIEBE_VARIANTE | codierte Getriebevariante: 0 == Applikation Getriebe-Variante 1 (Serie) aktiv, 1 == Applikation Getriebe-Variante 2 aktiv | 0-n | - | high | unsigned char | TAB_MR_GETRIEBE_VARIANTE | - | - | - | - | 22 | - | - |
| NETTOCODIERDATEN_MR | 0x64B3 | - | Auslesen der Nettocodierdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x64B3_D |
| VARIANTENINFO_MR | 0x64B4 | - | Datensatz-/Varianteninformationen als ASCII-Texte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x64B4_D |
| CODIERUNG_DATEN_MR | 0x64B5 | - | Auslesen von durch Codierung beeinflussten Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x64B5_D |
| SERVICE_KMSTAND_MR | 0x64C1 | - | Auslesen und Schreiben des Service-Kilometerstandes | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x64C1_D | RES_0x64C1_D |
| ADAPTION_FAHRWERTGEBER_MR | 0xF500 | - | Adaptierung des Fahrwertgebers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_GETRIEBE_MR | 0xF501 | - | Anstossen der Adaption der Getriebepotispannungen für alle Gänge | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_LAMBDA_UEBERNAHME_MR | 0xF502 | - | Übernahme der über ADAPTION_LAMBDAREGELUNG_SCHREIBEN_MR eingebrachten Daten in die Lambdaregelungsadaption | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ADAPTION_LEERLAUFSTEPPER_MR | 0xF503 | - | Anstossen der Adaption des Leerlaufsteppers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_ABGASKLAPPE_MR | 0xF510 | - | Anstossen des Abgleichs der Abgasklappe | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_INTERFERENZROHRKLAPPE_MR | 0xF511 | - | Anstossen des Abgleichs der Interferenzrohrklappe | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ABGLEICH_RUECKFAHRHILFENSTELLER_MR | 0xF512 | - | Abgleich des Rückfahrhilfen-Stellers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LOESCHUNG_FASTA_MR | 0xF520 | - | Anstossen der Löschung aller gesammelten FASTA-Daten | - | - | - | - | - | - | - | - | - | 31 | - | - |

### TAB_MR_ASC_MODUS

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 7 | AUS | AUS |
| 1 | Modus 1 | Modus 1 |
| 2 | Modus 2 | Modus 2 |
| 10 | Modus 3 | Modus 3 |
| 13 | Modus 4 | Modus 4 |
| 16 | Modus 5 | Modus 5 |

### TAB_MR_ASC_STATUS

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | AUS | AUS |
| 1 | AKTIV | AKTIV |
| 2 | FEHLER | FEHLER |
| 3 | KEINE_FREIGABE | KEINE_FREIGABE |
| 4 | STANDBY | STANDBY |

### TAB_MR_ASC_TASTER

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | nicht betätigt | nicht betätigt |
| 1 | betätigt | betätigt |
| 2 | NOT-AUS aktiv | NOT-AUS aktiv |

### TAB_MR_FZG_MODUS

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 1 | Modus 1 | Modus 1 |
| 2 | Modus 2 | Modus 2 |
| 3 | Modus 3 | Modus 3 |
| 4 | Modus 4 | Modus 4 |
| 5 | Modus 5 | Modus 5 |
| 6 | Modus 6 | Modus 6 |
| 7 | Modus 7 | Modus 7 |

### TAB_MR_GETRIEBE

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0x00 | Leergang | Leergang |
| 0x01 | 1. Gang | 1. Gang |
| 0x02 | 2. Gang | 2. Gang |
| 0x03 | 3. Gang | 3. Gang |
| 0x04 | 4. Gang | 4. Gang |
| 0x05 | 5. Gang | 5. Gang |
| 0x06 | 6. Gang | 6. Gang |
| 0x0F | kein Gang | kein Gang |

### TAB_MR_GETRIEBE_VARIANTE

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | Applikation Getriebe-Variante 1 (Serie) aktiv | Applikation Getriebe-Variante 1 (Serie) aktiv |
| 1 | Applikation Getriebe-Variante 2 aktiv | Applikation Getriebe-Variante 2 aktiv |

### TAB_MR_KLAPPEN_ABGLEICH

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | Abgleich abgeschlossen | Abgleich abgeschlossen |
| 1 | Abgleich fehlerhaft | Abgleich fehlerhaft |
| 255 | Diagnose gesperrt, Abfrage Abgleichstatus nicht möglich | Diagnose gesperrt, Abfrage Abgleichstatus nicht möglich |

### TAB_MR_KLAPPEN_FEHLER

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | kein Fehler | kein Fehler |
| 1 | unzulässiges PWM-Signal | unzulässiges PWM-Signal |
| 2 | Abgleichfehler | Abgleichfehler |
| 3 | mechanischer Fehler oder Blockade des Stellmotors | mechanischer Fehler oder Blockade des Stellmotors |
| 4 | Leitungsunterbrechung PWM an Stellmotor | Leitungsunterbrechung PWM an Stellmotor |
| 255 | Diagnose gesperrt, Fehlerabfrage nicht möglich | Diagnose gesperrt, Fehlerabfrage nicht möglich |

### TAB_MR_KLAPPEN_SPERRE

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | Abgleich frei | Abgleich frei |
| 1 | Sperrbedingung für Abgleich, Motor dreht | Sperrbedingung für Abgleich, Motor dreht |
| 255 | Diagnose gesperrt, Abfrage Sperrbedingung nicht möglich | Diagnose gesperrt, Abfrage Sperrbedingung nicht möglich |

### TAB_MR_LAMBDAADAPTION_LABEL

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 1 | lra_adap_cnt (Anzahl durchgeführte Berechnungen der Lambdaadaption Bank1/2); 1-teilig | lra_adap_cnt (Anzahl durchgeführte Berechnungen der Lambdaadaption Bank1/2); 1-teilig |
| 2 | kflra/2 (adaptiertes Kennfeld für die Lambdaregelung Bank1/2 als Messgröße); 2-teilig | kflra/2 (adaptiertes Kennfeld für die Lambdaregelung Bank1/2 als Messgröße); 2-teilig |
| 3 | kflra_sum_gewicht/2 (Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank1/2 als Messgröße; 4-teilig) | kflra_sum_gewicht/2 (Gewichtehistorie des adaptierten Kennfeld für die Lambdaregelung Bank1/2 als Messgröße; 4-teilig) |
| 4 | LRA_STUETZ_NMOT (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl; 1-teilig) | LRA_STUETZ_NMOT (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl; 1-teilig) |
| 5 | LRA_STUETZ_WDKBA (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel; 1-teilig) | LRA_STUETZ_WDKBA (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel; 1-teilig) |
| 6 | LRA_STUETZ_TMOT (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur; 1-teilig) | LRA_STUETZ_TMOT (Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur; 1-teilig) |
| 7 | LRA_GEWICHT_NMOT, X-Achse (Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; 1-teilig) | LRA_GEWICHT_NMOT, X-Achse (Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; 1-teilig) |
| 8 | LRA_GEWICHT_NMOT, Werte (Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; 1-teilig) | LRA_GEWICHT_NMOT, Werte (Gewichtung Abstand (abhängig von Drehzahl) für Berechnung Lambdaadaption; 1-teilig) |
| 9 | LRA_GEWICHT_WDKBA, X-Achse (Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; 1-teilig) | LRA_GEWICHT_WDKBA, X-Achse (Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; 1-teilig) |
| 10 | LRA_GEWICHT_WDKBA, Werte (Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; 1-teilig) | LRA_GEWICHT_WDKBA, Werte (Gewichtung Abstand (abhängig von Drosselklappenwinkel) für Berechnung Lambdaadaption; 1-teilig) |
| 11 | LRA_GEWICHT_TMOT, X-Achse (Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; 1-teilig) | LRA_GEWICHT_TMOT, X-Achse (Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; 1-teilig) |
| 12 | LRA_GEWICHT_TMOT, Werte (Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; 1-teilig) | LRA_GEWICHT_TMOT, Werte (Gewichtung Abstand (abhängig von Temperatur) für Berechnung Lambdaadaption; 1-teilig) |
| 13 | LRA_STUETZ_NMOT_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl; 1-teilig) | LRA_STUETZ_NMOT_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motordrehzahl; 1-teilig) |
| 14 | LRA_STUETZ_WDKBA_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel; 1-teilig) | LRA_STUETZ_WDKBA_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Drosselklappenwinkel; 1-teilig) |
| 15 | LRA_STUETZ_TMOT_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur; 1-teilig) | LRA_STUETZ_TMOT_MX (maximale Anzahl Stützstellen kflra für Berechnung Lambdaadaption für Dimension Motortemperatur; 1-teilig) |

### TAB_MR_ROZ_VARIANTE

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 0 | Applikation ROZ-Variante 1 (Serie) aktiv | Applikation ROZ-Variante 1 (Serie) aktiv |
| 1 | Applikation ROZ-Variante 2 aktiv | Applikation ROZ-Variante 2 aktiv |

### TAB_MR_SCHALTSAUGROHR

| WERT | TEXT | UWTEXT |
| --- | --- | --- |
| 1 | Bereitschaft | Bereitschaft |
| 2 | Position 1 | Position 1 |
| 3 | Position 2 | Position 2 |
| 4 | Takten zwischen Position 1 und Position 2 | Takten zwischen Position 1 und Position 2 |
