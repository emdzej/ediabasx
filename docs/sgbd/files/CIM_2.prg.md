# CIM_2.prg

## General

|  |  |
| --- | --- |
| File | CIM_2.prg |
| Type | PRG |
| Jobs | 63 |
| Tables | 42 |
| Origin | BMW TI-432 Helmich |
| Revision | 1.02 |
| Author | TEMIC L/B1/EF-N Strasser |
| ECU Comment | SGBD fuer Chassis Integrations Modul Generation_II |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SGBD fuer Chassis Integrations Modul Generation_II |  |  |
| ORIGIN | string | BMW TI-432 Helmich |  |  |
| REVISION | string | 1.02 |  |  |
| AUTHOR | string | TEMIC L/B1/EF-N Strasser |  |  |
| COMMENT | string | SGBD fuer Chassis Integrations Modul Generation_II |  |  |
| PACKAGE | string | 1.32 |  |  |
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

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $00 all ECU Modus  : Default

_No arguments._

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### STEUERN_SERVOTRONIC

PWM für Ventilansteuerung vorgeben KWP2000: $30 InpuOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CONTROL | char | 0 = Steuerung zurueck an ECU 6 = Vorgabe durch Tester |
| PWM | char | PWM_Vorgabe von 0 bis 30 Prozent |

### STEUERN_LENKSAEULE_INIT

vollelektrische Lenksaeule initialisieren IO_Control Job KWP2000: $30 InpuOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CONTROL | char | 0 = Initialisierung abbrechen 6 = Initialisierung starten |

### STEUERN_LENKSAEULE_LAENGE

Lenksaeule Laenge verstellen IO_Control Job KWP2000: $30 InpuOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CONTROL | char | 0 = LS stoppen 6 = LS verstellen |
| IMPULSE | int | Verstellweg = Anzahl der Hallimpulse (max. 300 +- 30) |

### STEUERN_LENKSAEULE_HOEHE

Lenksaeule Hoehe verstellen IO_Control Job KWP2000: $30 InpuOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CONTROL | char | 0 = LS stoppen 6 = LS verstellen |
| IMPULSE | int | Verstellweg = Anzahl der Hallimpulse (max. 190 +-30) |

### STEUERN_POSITIONSDATEN_LOESCHEN

Positionsdaten der vollelektrischen LS loeschen KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_POSITIONSDATEN

Positionsdaten der vollelektrischen LS lesen IO_Control Job KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_TEMPERATURMODELL

Status Temperaturmodell der vollelektrischen LS lesen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SERVOTRONIC

Ventilstrom lesen IO_Control Job KWP2000: $30 InpuOutputControlByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_DWS

IO Status vom DWS lesen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_DWS

IO Status des DWS vorgeben KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DB1 | char | Bit_0 = Start Standardisierung |
| DB2 | char | Bit_2 und Bit_3 = Bremslicht setzen, Bit_3 Bremslicht löschen |

### STATUS_DWS_FASTA

Fasta Daten lesen IO_Control Job KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_DWS_FASTA_LOESCHEN

FASTA Daten loeschen KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_DWS_STANDARDISIERUNG

Standardisierung lesen IO_Control Job KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_DWS_STANDARDISIERUNG

Standardisierungsdaten schreiben KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein Binaerbuffer mit 80 Byte uebergeben Inhalt: Standardisierungsdaten in Hex-Format (EEPROM-Darstellung) |

### POWER_DOWN

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | char | Auswahl der SG |

### STEUERN_CCP

CCP Schnittstelle freigeben KWP2000: $3B WriteDataByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KEY | char | mit 0x55 wird die Schnittstelle freigegeben Voraussetzung: symetrische Authentisierung mit Level 5 |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5d2c | KL30 |
| 0x5d2d | ECU intern |
| 0x5d2f | MLSL+ |
| 0x5d30 | MLSL- |
| 0x5d31 | MLSN+ |
| 0x5d32 | MLSN- |
| 0x5d35 | Hallsensor Laengs |
| 0x5d36 | Hallsensor Neigung |
| 0x5d38 | Positionsdaten |
| 0x5d39 | EEPROM-Fehler |
| 0x60bb | DWS-Geschwindigkeitsimpulse VL |
| 0x60ba | DWS-Geschwindigkeitsimpulse VR |
| 0x60bd | DWS-Geschwindigkeitsimpulse HL |
| 0x60bc | DWS-Geschwindigkeitsimpulse HR |
| 0x62ac | Servotronic 1 |
| 0x62ad | Servotronic 2 |
| 0xd984 | CAN-low, Physikalischer Busfehler |
| 0xd987 | Controller, Bus off |
| 0xd98A | Timeout einer Botschaft vom Powermodul |
| 0xd98b | Timeout einer Botschaft vom CAS |
| 0xd98c | Signalfehler einer Botschaft vom CAS |
| 0xd98d | Timeout einer Botschaft vom DSC |
| 0xd98e | Signalfehler einer Botschaft vom DSC |
| 0xd98f | Timeout einer Botschaft vom DME |
| 0xd990 | Signalfehler einer Botschaft vom DME |
| 0xd991 | Timeout einer Botschaft vom EDCK |
| 0xd992 | Signalfehler einer Botschaft vom EDCK |
| 0xd993 | Timeout einer Botschaft vom KOMBI |
| 0xd994 | Signalfehler einer Botschaft vom KOMBI |
| 0xd995 | Timeout einer Botschaft vom SZL |
| 0xd996 | Signalfehler einer Botschaft vom SZL |
| 0xd997 | Signalfehler einer Botschaft vom MMI |
| 0xFFFC | Chassis Group |
| 0xFFFE | Network Communication Group |
| 0xFFFF | All Groups |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja   |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5D2C | 0x02 | - | - | - |
| 0x5D2D | 0x02 | ECU | - | - |
| 0x5D2F | 0x02 | - | - | - |
| 0x5D30 | 0x02 | - | - | - |
| 0x5D31 | 0x02 | - | - | - |
| 0x5D32 | 0x02 | - | - | - |
| 0x5D35 | 0x02 | - | - | - |
| 0x5D36 | 0x02 | - | - | - |
| 0x5D38 | 0x02 | - | - | - |
| 0x5D39 | 0x02 | CODDAT | FSP | - |
| 0x60BB | 0x02 | - | - | - |
| 0x60BA | 0x02 | - | - | - |
| 0x60BD | 0x02 | - | - | - |
| 0x60BC | 0x02 | - | - | - |
| 0x62ac | 0x02 | - | - | - |
| 0x62ad | 0x02 | - | - | - |
| 0xD984 | 0x02 | - | - | - |
| 0xD987 | 0x02 | - | - | - |
| 0xD98a | 0x02 | PM_TO | - | - |
| 0xD98b | 0x02 | CAS_TO | - | - |
| 0xD98c | 0x02 | CAS_SE | - | - |
| 0xD98d | 0x02 | DSC_TO | - | - |
| 0xD98e | 0x02 | DSC_SE | - | - |
| 0xD98f | 0x02 | DME_TO | - | - |
| 0xD990 | 0x02 | DME_SE | - | - |
| 0xD991 | 0x02 | EDCK_TO | - | - |
| 0xD992 | 0x02 | EDCK_SE | - | - |
| 0xD993 | 0x02 | KOMBI_TO | - | - |
| 0xD994 | 0x02 | KOMBI_SE | - | - |
| 0xD995 | 0x02 | SZL_TO | - | - |
| 0xD996 | 0x02 | SZL_SE | - | - |
| 0xD997 | 0x02 | MMI_SE | - | - |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Kilometerstand | km | high | unsigned int | - | 100 | 1 | 0 |
| 0x02 | Batteriespannung | Volt | high | unsigned int | - | 1 | 1000 | 0 |
| 0x03 | Geschwindigkeit | km/h | high | unsigned int | - | 1 | 1 | 0 |
| 0x10 | RAM | 0-n | high | 0x0001 | EE_W | - | - | - |
| 0x11 | ROM | 0-n | high | 0x0002 | EE_W | - | - | - |
| 0x12 | BOOT_ROM | 0-n | high | 0x0004 | EE_W | - | - | - |
| 0x13 | MMU | 0-n | high | 0x0008 | EE_W | - | - | - |
| 0x14 | ARITHM | 0-n | high | 0x0010 | EE_W | - | - | - |
| 0x15 | WATCHDOG | 0-n | high | 0x0020 | EE_W | - | - | - |
| 0x16 | ADC | 0-n | high | 0x0040 | EE_W | - | - | - |
| 0x17 | Task | 0-n | high | 0x0080 | EE_W | - | - | - |
| 0x20 | Codierdaten allgemein | 0-n | high | 0x0001 | EE_W | - | - | - |
| 0x21 | Codierdaten allgemein (Backuptabelle) | 0-n | high | 0x0002 | EE_W | - | - | - |
| 0x22 | Codierdaten LSV | 0-n | high | 0x0004 | EE_W | - | - | - |
| 0x23 | Codierdaten LSV (Backuptabelle) | 0-n | high | 0x0008 | EE_W | - | - | - |
| 0x24 | Codierdaten Servotronic Sport | 0-n | high | 0x0010 | EE_W | - | - | - |
| 0x25 | Codierdaten Servotronic Sport (Backuptabelle) | 0-n | high | 0x0020 | EE_W | - | - | - |
| 0x26 | Codierdaten Servotronic Komfort | 0-n | high | 0x0040 | EE_W | - | - | - |
| 0x27 | Codierdaten Servotronic Komfort (Backuptabelle) | 0-n | high | 0x0080 | EE_W | - | - | - |
| 0x28 | Codiedaten RPA | 0-n | high | 0x0100 | EE_W | - | - | - |
| 0x29 | Codiedaten RPA (Backuptabelle) | 0-n | high | 0x0200 | EE_W | - | - | - |
| 0x30 | FSP LSV | 0-n | high | 0x0001 | EE_W | - | - | - |
| 0x31 | FSP Servotronic | 0-n | high | 0x0002 | EE_W | - | - | - |
| 0x32 | FSP Kl_30 | 0-n | high | 0x0004 | EE_W | - | - | - |
| 0x33 | FSP ECU intern | 0-n | high | 0x0008 | EE_W | - | - | - |
| 0x34 | FSP CAN-Bus | 0-n | high | 0x0010 | EE_W | - | - | - |
| 0x35 | FSP RPA | 0-n | high | 0x0020 | EE_W | - | - | - |
| 0x36 | RPA Standard | 0-n | high | 0x0040 | EE_W | - | - | - |
| 0x37 | RPA Standard (Backuptabelle) | 0-n | high | 0x0080 | EE_W | - | - | - |
| 0x38 | Produktionsdaten | 0-n | high | 0x0100 | EE_W | - | - | - |
| 0x39 | UIF-Feld | 0-n | high | 0x0200 | EE_W | - | - | - |
| 0x3a | Positionsdaten Bereich 0 | 0-n | high | 0x0400 | EE_W | - | - | - |
| 0x3b | Positionsdaten Bereich 1 | 0-n | high | 0x0800 | EE_W | - | - | - |
| 0x3c | Positionsdaten Bereich 2 | 0-n | high | 0x1000 | EE_W | - | - | - |
| 0x3d | Positionsdaten Zykluszaehler | 0-n | high | 0x2000 | EE_W | - | - | - |
| 0x3e | FASTA Daten DWS | 0-n | high | 0x4000 | EE_W | - | - | - |
| 0x3f | Abgleichdaten Servotronic | 0-n | high | 0x8000 | EE_W | - | - | - |
| 0x50 | Standardisierung | 0-n | high | 0x0001 | DWS_E | - | - | - |
| 0x51 | Fehlerspeicherkonzept | 0-n | high | 0x0002 | DWS_A | - | - | - |
| 0x52 | Fehlerauswirkung | 0-n | high | 0x0004 | DWS_A | - | - | - |
| 0x53 | Bandmode | 0-n | high | 0x0008 | DWS_E | - | - | - |
| 0x54 | Systemfunktion | 0-n | high | 0x0010 | DWS_E | - | - | - |
| 0x55 | Blindphase | 0-n | high | 0x0020 | DWS_E | - | - | - |
| 0x60 | Bedienung Lenksaeule | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x61 | Fahreranzeige Motorzustand | 0-n | high | 0x0002 | PLAUS | - | - | - |
| 0x62 | Geschwindigkeit | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x63 | Status Daempferprogramm | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x64 | Motordaten | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x65 | Bedienung Fahrwerk | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x67 | Kilometerstand/Reichweite | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x68 | Klemmenstatus | 0-n | high | 0x0002 | PLAUS | - | - | - |
| 0x69 | Status DSC | 0-n | high | 0x0002 | PLAUS | - | - | - |
| 0x6B | ZV und Klappenzustand | 0-n | high | 0x0001 | PLAUS | - | - | - |
| 0x6C | Uhrzeit/Datum | 0-n | high | 0x0002 | PLAUS | - | - | - |
| 0x90 | Bedienung Lenksaeule | 0-n | high | 0x0001 | TO | - | - | - |
| 0x91 | Fahreranzeige Motorzustand | 0-n | high | 0x0002 | TO | - | - | - |
| 0x92 | Geschwindigkeit | 0-n | high | 0x0001 | TO | - | - | - |
| 0x93 | Status Daempferprogramm | 0-n | high | 0x0001 | TO | - | - | - |
| 0x94 | Motordaten | 0-n | high | 0x0001 | TO | - | - | - |
| 0x97 | Kilometerstand/Reichweite | 0-n | high | 0x0001 | TO | - | - | - |
| 0x98 | Klemmenstatus | 0-n | high | 0x0002 | TO | - | - | - |
| 0x99 | Status DSC | 0-n | high | 0x0002 | TO | - | - | - |
| 0x9B | ZV und Klappenzustand | 0-n | high | 0x0001 | TO | - | - | - |
| 0x9C | Uhrzeit/Datum | 0-n | high | 0x0002 | TO | - | - | - |
| 0x9D | Powermanagement Batteriespannung | 0-n | high | 0x0001 | TO | - | - | - |
| 0xFF | ohne Bedeutung | 1 | - | unsigned int | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### ECU

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 |

### CODDAT

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x20 | 0x21 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 | 0x27 | 0x28 | 0x29 |

### FSP

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 | 0x37 | 0x38 | 0x39 | 0x3A | 0x3B | 0x3C | 0x3D | 0x3E | 0x3F |

### CAS_SE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x6B | 0x68 |

### DSC_SE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x62 | 0x69 |

### DME_SE

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x64 |

### EDCK_SE

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x63 |

### KOMBI_SE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x67 | 0x6C |

### SZL_SE

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x60 |

### MMI_SE

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x65 |

### PM_TO

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x9D |

### CAS_TO

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x9B | 0x98 |

### DSC_TO

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x92 | 0x99 |

### DME_TO

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x94 |

### EDCK_TO

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x93 |

### KOMBI_TO

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x97 | 0x9C |

### SZL_TO

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x90 |

### RAD

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x34 |

### DWS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x50 | 0x51 | 0x52 | 0x53 | 0x54 | 0x55 |

### EE_W

| WERT | UWTEXT |
| --- | --- |
| 0x0001 | FEHLER |
| 0x0002 | FEHLER |
| 0x0004 | FEHLER |
| 0x0008 | FEHLER |
| 0x0010 | FEHLER |
| 0x0020 | FEHLER |
| 0x0040 | FEHLER |
| 0x0080 | FEHLER |
| 0x0100 | FEHLER |
| 0x0200 | FEHLER |
| 0x0400 | FEHLER |
| 0x0800 | FEHLER |
| 0x1000 | FEHLER |
| 0x2000 | FEHLER |
| 0x4000 | FEHLER |
| 0x8000 | FEHLER |
| 0x0000 | OK |
| 0xFFFF | unbekannter Fehler |

### RAD_W

| WERT | UWTEXT |
| --- | --- |
| 0x0010 | FEHLER |
| 0x0000 | OK |
| 0xFFFF | unbekannter Fehler |

### PLAUS

| WERT | UWTEXT |
| --- | --- |
| 0x0001 | ungültiges Signal |
| 0x0002 | ungültiges Signal |
| 0x0000 | OK |
| 0xFFFF | unbekannter Fehler |

### TO

| WERT | UWTEXT |
| --- | --- |
| 0x0001 | Timeout |
| 0x0002 | Timeout |
| 0x0000 | OK |
| 0xFFFF | unbekannter Fehler |

### DWS_E

| WERT | UWTEXT |
| --- | --- |
| 0x0001 | EIN |
| 0x0008 | EIN |
| 0x0010 | EIN |
| 0x0020 | EIN |
| 0x0000 | AUS |
| 0xFFFF | unbekannter Fehler |

### DWS_A

| WERT | UWTEXT |
| --- | --- |
| 0x0002 | AUS |
| 0x0004 | AUS |
| 0x0000 | EIN |
| 0xFFFF | unbekannter Fehler |

### SERVO

| WERT | TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | Kurzschluss Serv2-Kl_31 |
| 0x02 | Kurzschluss Serv1-Kl_30 |
| 0x03 | Kurzschluss Serv1-Kl_31 |
| 0x04 | offene Leitung |
| 0x05 | Kurzschluss Serv2-Kl_30 |
| 0x07 | Kurzschluss Ventilklemmen |
| 0x09 | Timeout V_DSC |
| 0x0a | ungültiger Wert V_DSC |
| 0x0c | Timeout Klemmenstatus |
| 0x0d | Ueberspannung Kl_30 |
| 0x0e | Unterspannung Kl_30 |
| 0x0f | Codierdatenfehler |
| 0x10 | Interne ECU-Fehler |
| 0x11 | Kurzschluss Ventilklemmen oder Kurzschluss Serv2-Kl_30 |
| 0x12 | Kurzschluss Ventilklemme nach Kl_30 |
| 0x13 | Kurzschluss Ventilklemme nach Kl_31 |
| 0x14 | Kurzschluss Serv2-Kl_31 oder offene Leitung |
| 0x15 | Timeout Motorstatus |
| 0x16 | Motordaten ungültig |
| 0xFF | temporärer Fehler |

### MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor ok |
| 0x01 | Notlaufbetrieb |
| 0x02 | Fehler |
| 0x03 | Lenksaeule schwergaengig |
| 0xFF | default |

### BREMSLICHT

| WERT | TEXT |
| --- | --- |
| 0x00 | Defekt |
| 0x01 | Aktiv |
| 0x02 | Inaktiv |
| 0x03 | Defekt |
| 0xFF | default |
