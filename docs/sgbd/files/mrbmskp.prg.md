# mrbmskp.prg

## General

|  |  |
| --- | --- |
| File | mrbmskp.prg |
| Type | PRG |
| Jobs | 134 |
| Tables | 46 |
| Origin | BMW/IST EA-413 Ulbricht |
| Revision | 5.400 |
| Author | BMW/IST EA-413 Ulbricht, BMW/Hays EA-413 Fischer |
| ECU Comment | nur KWP2000 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | mrbmskp |  |  |
| ORIGIN | string | BMW/IST EA-413 Ulbricht |  |  |
| REVISION | string | 5.400 |  |  |
| AUTHOR | string | BMW/IST EA-413 Ulbricht, BMW/Hays EA-413 Fischer |  |  |
| COMMENT | string | nur KWP2000 |  |  |
| PACKAGE | string | 1.42 |  |  |
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

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

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

### STEUERN_ABS_LOESCHEN

Auftrag: KWP2000 :   $31 StartRoutineByLocalIdentifier Request Service Id $2F inputOutputLocalIdentifier "B_abs ruecksetzen" Auftrag2: KWP2000 :   $22     ReadDataByCommonIdentifier $40 $00 RecordCommonIdentifier "Meßwerte lesen"  Überprüfung der Motordrehzahl mittels Auftrag2 wenn Drehzahl = 0 , Bedingung ABS-SG ist/war verbaut (B_abs) wird zurückgesetzt Bedingung B_abs wird gesetzt sofern eine entsprechende CAN-Message vom ABS-SG empfangen wurde

_No arguments._

### STATUS_ADAPTIONSWERTE

KWP2000 :   $21 ReadDataByLocalIdentifier Request Service Id $0B recordLocalIdentifier "Adaptionswerte_lesen"  Adaptionswerte: ABS     (ABS-SG verbaut(=1)/nicht verbaut(=0)) LOWBAT  (UB liegt zw. 6 und 7 V (=1) und fuehrt zu Einschraenkungen beim Ansteuern des Anlassers) SPERREKP(EKP,Zünd./Einsp. & Anlasser gesperrt(=1) über Tester) DKPA    (Drosselklappe im Nullanschlag) GANGAN  (Getriebepoti in Neutralstellung) GANGA1  (Stellung Getriebepoti 1.Gang) GANGA2  (Stellung Getriebepoti 2.Gang) GANGA3  (Stellung Getriebepoti 3.Gang) GANGA4  (Stellung Getriebepoti 4.Gang) GANGA5  (Stellung Getriebepoti 5.Gang) GANGA6  (Stellung Getriebepoti 6.Gang) UADPSHS (Schalthebelsensor in Neutralstellung) DKPADO1 (oberer Adaptionswert Drosselklappenwinkel Kanal 1) DKPADU1 (unterer Adaptionswert Drosselklappenwinkel Kanal 1) DKPADO2 (oberer Adaptionswert Drosselklappenwinkel Kanal 2) DKPADU2 (unterer Adaptionswert Drosselklappenwinkel Kanal 2) FWGADO1 (oberer Adaptionswert Fahrwertgeber Kanal 1) FWGADU1 (unterer Adaptionswert Fahrwertgeber Kanal 1) FWGADO2 (oberer Adaptionswert Fahrwertgeber Kanal 2) FWGADU2 (unterer Adaptionswert Fahrwertgeber Kanal 2) FWGADAPT (Fahrtwertgeberadaption vollständig (=1)) DKPADAPT (Drosselklappenadaption vollständig (=1))

_No arguments._

### STEUERN_ADAPTIONSWERTE_LOESCHEN

KWP2000 :   $31 StartRoutineByLocalIdentifier Request Service Id $E9 inputOutputLocalIdentifier "Adaptionswerte löschen"  sofern die Motordrehzahl = 0 ist, wird nach Abschluß der aktuellen Kommunikation ein Reset ausgelöst, währenddessen die Adaptionswerte gelöscht und beim Hochfahren wieder initialisiert werden

_No arguments._

### STATUS_AUSGAENGE_DIGITAL

KWP2000:    $22     ReadDataByCommonIdentifier $40 $05 RecordCommonIdentifier "Ausgänge prüfen"  Ausgänge:   UETMC ( Kontrollleuchte Motortemperatur, 1=aktiv 0=inaktiv) ANLASSER ( Ansteuerung Anlasserrelais, 1=aktiv 0=inaktiv) AKL ( Akustikklappe, 1=offen 0=geschlossen=nicht verbaut) SLV1 ( Sekundärluftventil, 1=offen 0=geschlossen) TEV ( Taktventil Tankentlüftung, 1=offen 0=geschlossen) EKPBTS ( Kraftstoffpumpe, 1=läuft 0=läuft nicht) ELUE1 ( E-Lüfter, 1=läuft 0=läuft nicht) MIL ( Motornotlauf, 1=Notlauf 0=kein Notlauf) HSV ( Lambdasondenheizung 1, 1=aktiv 0=inaktiv) HSV2 ( Lambdasondenheizung 2, 1=aktiv 0=inaktiv) B_A_SCHUTZ ( Anlasserschutz, 1=aktiv 0=inaktiv löst Sicherheitsabschaltung aus) B_FRGANL ( Anlasser Freigabe, 1=freigegeben 0=nicht freigegeben) B_MOTORSTP ( Motor Abschalten, 1=aktiv 0=inaktiv)

_No arguments._

### STATUS_FUNKTIONSSTATI

KWP2000:    $22     ReadDataByCommonIdentifier $40 $07 RecordCommonIdentifier "Funktionsstati lesen"  Funktionsstati: LL (Bedingung Leerlauf, 1=aktiv 0=inaktiv gesetzt wenn sich Motor im Leerlauf befindet) VL (Bedingung Vollast, 1=Vollast 0=keine Vollast gesetzt wenn: - Bedingung Leerlauf inaktiv und - drehzahlabhängiger Drosselklappenwinkel gegeben ist) TEHB (Bedingung Tankentlüftung mit hoher Beladung 1=aktiv 0=inaktiv, Beladung=HC-Konzentration im Regeneriergasstrom(aus Tankentlüftung) SA (Bedingung Schubabschalten, 1=aktiv 0=inaktiv Abschaltung Einspritzung, Zündung, EKP u.a., um vorhandenes positives Drehmoment(Schub) auf Null zu reduzieren wenn keine Drehmomentanforderung mehr besteht SBBVK (Bedingung Sonde betriebsbereit vor Kat 1=betriebsbereit 0=nicht betriebsbereit) BM (Zylinder-1 Erkennung, 1=erkannt 0=nicht erkannt gesetzt wenn TPU und Kurbelwelle synchron, dauerhaft gesetzt) LR (Lambdaregelung, 1=aktiv 0=inaktiv, Wert ist dauerhaft gesetzt wenn alle Bedingungen (z.b. Warm- laufphase beendet, Lambdasondenheizung i.O. ...) erfüllt sind NWSYN (Synchronisierung ueber Nockenwelle 1=synchronisiert 0=NW Notlauf) STURZ (Sturzsensorik)

_No arguments._

### GET_PARAMETER

Lesen der Globalen Variablen

_No arguments._

### STEUERN_IO_FREIGEBEN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $xx inputOutputLocalIdentifier $00 inputOutputControlParameter "RCTECU - ReturnControlToECU"  Freigabe der aufgelisteten Bauteile über ihr MNEMO Freigabe bedeutet, daß die zeitweilige Kontrolle des jeweiligen Bauteils durch den Tester (Ansteuerung) wieder an das Steuergerät zurückgegeben wird explizite Freigabe ist notwendig, wenn Ansteuerung noch vor Ablauf der Ansteuerdauer abgebrochen werden soll Benutzung der Freigabe nach Ablauf der Ansteuerdauer ist überflüssig

| Name | Type | Description |
| --- | --- | --- |
| MNEMO | string | MNEMO   TEXT (PARAMETER) Elu             E-Lüfter SLV             Sekundärluftventil AKL             Akustik Klappe TEV             Taktventil Tankentlüftung EKP             Kraftstoffpumpe HSV             Lambdasondenheizung vor Kat 1 HSV2            Lambdasondenheizung vor Kat 2 EV1 .. EV8      Einspritzventil 1..8 STPLL1          Stepper 1: LL-Regelung rechts STPLL2          Stepper 2: K25 LL-Regelung links oder K40 Vmax-Begrenzung Gangadp         Gangadaption ueber Tester UETMC           Kontrolleuchte Übertemperatur MIL             Check-Engine-Lampe VSIDEL          Ventilspielserviceintervall AGKL            Abgasklappensteller IFRKL           Interferenzrohrklappensteller DISA            Sollstellung Schaltsaugrohr |

### STEUERN_IO_VORGEBEN

Auftrag : KWP2000 : $30 InputOutputControlByLocalIdentifier Request Service Id $xx inputOutputLocalIdentifier $07 inputOutputControlParameter "STA - ShortTermAdjustment" $xx data Auftrag2: KWP2000 : $22     ReadDataByCommonIdentifier $40 $00 RecordCommonIdentifier "Meßwerte lesen"  1. Prüfung der Drehzahlbedingung entsprechend Tabelle Bauteilansteuerung 2. Nebenbedingung Drehzahl = 0 erforderlich für: EKP, EV1...EV8, STPABGL, MIL, AGKL, IFRKL, DISA Drehzahl > 0 erforderlich für: UETMC 3. Ansteuerung der aufgelisteten Bauteile über ihr MNEMO und ein entsprechenden [PARAMETER] 4. Dauer der Ansteuerung: 20s - gilt für alle aufgeführten Bauteile 5. Nach Ablauf der Ansteuerdauer implizite Rückgabe der Kontrolle über das jeweilige Bauteil an das Steuergerät (Freigabe)

| Name | Type | Description |
| --- | --- | --- |
| MNEMO | string | MNEMO           TEXT [PARAMETER] Elu             E-Lüfter [ein / aus] SLV             Sekundärluftventil [ein] AKL             Akustik Klappe [ein] TEV             Taktventil Tankentlüftung (Tastverhaeltnis [0 ... 100]% bei 15Hz) EKP             Kraftstoffpumpe (Tastverhaeltnis [0 ... 100]% bei 1kHz) HSV             Lambdasondenheizung vor Kat 1 (im 100 ms Raster: 100 ms Puls - [n]ms Pause - 100 ms Puls - ...) HSV2            Lambdasondenheizung vor Kat 2 (im 100 ms Raster: 100 ms Puls - [n]ms Pause - 100 ms Puls - ...) (bei der Wahl der Pulspause Ansteuerungsdauer beachten -> 0 < n < 20000, n<100 bedeutet Dauerpuls) EV1 .. EV8      Einspritzventil 1..4 [ein / aus] STPLL1          Stepper 1: LL-Regelung rechts [0 ... 100%] STPLL2          Stepper 2: K25 LL-Regelung links oder K40 Vmax-Begrenzung [0 ... 100%] STPABGL         Stepper-Abgleich [ein] Gangadp         Freischalten der Gangadaption ueber Tester [ein] UETMC           Kontrolleuchte Übertemperatur [ein / aus] MIL             Check-Engine-Lampe [ein / aus] VSIDEL          Ventilspielserviceintervall Kilometerstand zuruecksetzen [ein] AGKL            Abgasklappensteller [10 ... 90%] IFRKL           Interferenzrohrklappensteller [10 ... 90%] DISA            Sollstellung Schaltsaugrohr(nur bei K46): [1(= Bereitschaft), 2(= Position 1 = 33%), 3(= Position 2 = 67%), 4(= Takten zwischen Position 1 und 2)] |
| PARAMETER | string |  |

### STATUS_MIL_ON

KWP2000:    $21     ReadDataByLocalIdentifier $09     RecordLocalIdentifier "Fahrstrecke mit MIL-ON lesen" 

_No arguments._

### SECURITY_ACCESS

KWP2000: $27 SecurityAccess Service $01 requestSeed $FB Key

| Name | Type | Description |
| --- | --- | --- |
| ACCESS_MODE | int | 1: Request Seed with the level of security defined in the ECU´s project specification 2: Send Key with the level of security defined in the ECU´s project specification 3, 5 - 7F: Request Seed with different levels of security defined in the ECU´s project specification 4, 6 - 80: Send Key with different levels of security defined in the ECU´s project specification |

### SET_BAUDRATE

Initialisierung der Kommunikationsparameter mit bestimmter Baudrate

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE | string | die gewuenschte Baudrate |
| KONZEPT | string | Konzept |
| TIMEOUT | string | Timeout in ms |
| REGENERATIONSZEIT | string | Regenerationszeit in ms |
| TELEGRAMMENDEZEIT | string | Telegrammendezeit in ms |

### START_COMMUNICATION

KWP2000 $81 startCommunication Request Service Id

_No arguments._

### STATUS_ANALOG

KWP2000:    $22 readDataByCommonIdentifier Request Service Id $40 00 recordCommonIdentifier "Meßwerte lesen"  liefert die physikalischen Werte der aufgelisteten Größen TI       (effektive Einspritzzeit) FR       (Lambda-Regler-Ausgang, Bank 1) FR2      (Lambda-Regler-Ausgang, Bank 2) VFZG     (Fahrzeuggeschwindigkeit - ermittelt aus Geschwindigkeitssignal des ABS-SG) NMOT     (Motordrehzahl, hohe Auflösung) NSOL     (Leerlaufsolldrehzahl) WNWI0    (Nockenwellenposition Einlaß -> nicht existent, Dummy-Wert 0) WNWI1    (Nockenwellenposition Auslaß -> nicht existent, Dummy-Wert 0) TANS     (Ansauglufttemperatur) TMOT     (Motortemperatur Öl(K25)bzw. Wasser(K40,K71)) TMOTZYL1 (Motortemperatur Zylinder 1) TMOTZYL2 (Motortemperatur Zylinder 2) ZWOUT    (Zündwinkel-Ausgabe, in Grad KW relativ zu ? ) WDKBA    (relativer Drosselklappenwinkel bezogen auf unteren DK-Anschlag, ermittelt aus Position Drosselklappenpoti) MSHFM    (Luftmassen HFM Mittelwert -> wird nicht ermittelt, Wert fest auf 0) MIIST    (indiziertes Ist-Motormoment) UB       (Spannung Klemme 30) RKRN0    (normierter Referenzspannungspegel des Klopfsensors (zylinderindividuell), muß innerhalb der drehzahlabhängigen oberen und unteren Referenzspannungsschwellen liegen) RKRN1    (siehe RKRN0) RKRN2    (siehe RKRN0) RKRN3    (siehe RKRN0) SZOUT    (Schließzeit der Zündspulen 1 - 4) KMSTAND  (Fahrstrecke des Fahrzeugs als Information über CAN empfangen) TRMIN    (relative Zeit in Minuten über CAN vom Kombi) VVRAD    (Geschwindigkeit Vorderrad über CAN vom ABS-SG) VHRAD    (Geschwindigkeit Hinterrad über CAN vom ABS-SG) STCURPOS1(aktuelle Position des Schrittmotors der Leerlaufregelung links, 0...204) STCURPOS2(aktuelle Position des Schrittmotors der Leerlaufregelung rechts, 0...204) PU       (Umgebungsluftdruck - Druck außerhalb des Saugrohres, ca. 1000 hPa) GANG     (Getriebeschaltwalzenposition) KWIRQ    (Interruptzaehler der Kurbelwelle) NWIRQ    (Interruptzaehler der Nockenwelle) DISA     (Ansteuerposition Schaltsaugrohr, 0 - 100 %)

_No arguments._

### STATUS_DIGITAL

KWP2000:    $22     ReadDataByCommonIdentifier $40 $02 RecordCommonIdentifier "Schalter Stati lesen"  liefert Schalterstati sowie andere digitale Werte S_KUPP    (Schalter Kupplung, 1=betätigt 0=nicht betätigt) ES_SST    (Seitenstützen-Schalter (aus Diagnose), 1=eingeklappt 0=ausgeklappt, ermittelt aus den Zuständen der Seitenstützen 1 und 2 bzw. nur 1) ES_SST1   (Schalter Seitenstütze 1, 1=eingeklappt 0=ausgeklappt) ES_SST2   (Schalter Seitenstütze 2, 1=ausgeklappt 0=eingeklappt) ES_OELNIV (Ölniveau-Schwimmer-Schalter, 1=Ölniveau i.O. 0=nicht i.O.) ES_POEL   (Öldruck-Schalter, 1=vorhanden 0=nicht vorhanden) ES_START  (Startschalter, 1=betätigt 0=nicht betätigt) S_KL15    (Schalter Klemme 15, 1=betätigt 0=nicht betätigt) ES_KILL   (Not-Aus-Schalter, 1=Not-aus aktiv 0=in Betriebsstellung) B_KL15_ZFE(Status Klemme 15 aus ZFE2 über CAN, 1=betätigt 0=nicht betätigt) B_FZGM_AENDERN(Eingang Modustaster, 1=betätigt, 0=nicht betätigt) B_FZGM_SONDER(Sondermodus, 1=aktiv, 0=nicht aktiv)

_No arguments._

### STOP_COMMUNICATION

KWP2000 $82 StopCommunication Request Service Id

_No arguments._

### STATUS_UEBERDREHZAHLEREIGNISSE

KWP2000:    $21 ReadDataByLocalIdentifier Request Service Id $03 recordLocalIdentifier "Überdrehsicherung lesen"  liefert Informationen bezüglich der Überschreitung der Drehzahlgrenze NUEMAX  (Motorüberdrehzahlgrenzwert, U/min, Festwert) NMAXVK  (vorgekommene Maximaldrehzahl, U/min) KMSTNMAX(Kilometerstand beim Auftreten der letzten Überdrehzahl, km) ANZNMAX (Anzahl der aufgetretenen Überdrehzahlereignisse)

_No arguments._

### STEUERN_UEBERDREHZAHLEREIGNISSE_LOESCHEN

KWP2000:    $30 InputOutputControlByLocalIdentifier Request Service Id $A7 inputOutputLocalIdentifier "Überdrehsicherung löschen" $04 inputOutputControlParameter "RTD - ResetToDefault"  setzt die gespeicherten Einträge bezüglich Überdrehzahlereignissen zurück betrifft folgende Werte: ANZNMAX (Anzahl der aufgetretenen Überdrehzahlereignisse) NMAXVK  (vorgekommene Maximaldrehzahl) KMSTNMAX(Kilometerstand beim Auftreten der letzten Überdrehzahl)

_No arguments._

### STATUS_ZYLINDERANZAHL

Auslesen der Zylinderanzahl KWP2000: $22        ReadDataByCommonIdentifier $40 $0C    "Adaptionswerte 2 Messblock lesen" Entweder 2 oder 4 Zylinder

_No arguments._

### FS_LESEN_SPEZIAL

RDBLI Fehlerspeicher lesen (lang, mit FF und Logistik) KWP2000:        0x21 ReadDataByLocalIdentifier 0x0A routineLocalIdentifier 0xXX 0xXX groupOfDTC

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | string | gewaehlter Fehlercode (CDK Nr) |

### FLASH_PARAMETER_LESEN

Gibt die SG-spezifischen Flash-Parameter zurück

_No arguments._

### FLASH_PARAMETER_SETZEN

Setzt die SG-spezifischen Flash-Parameter

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |
| SG_MAXANZAHL_AIF | int | Anzahl der Anwender-Infofelder 0x00  Nicht zulässig sonst Anzahl der AIF |
| SG_GROESSE_AIF | int | Grösse des Anwender-Infofeldes 0x12  18 dez kleines AIF 0x33  51 dez grosses AIF 0x40  64 dez grosses AIF ( gilt nur für Power-Pc ) sonst Nicht zulässig |
| SG_ENDEKENNUNG_AIF | int | Offset für letztes Anwender-Infofeld 0xFE  Letztes AIF nicht überschreibbar 0x01  Letztes AIF ist überschreibbar sonst Nicht zulässig |
| SG_AUTHENTISIERUNG | string | Authentisierungsart table Authentisierung AUTH_TEXT |
| DIAG_PROT | string | optionaler Parameter Diagnoseprotokoll table KONZEPT_TABELLE KONZEPT_TEXT |

### STATUS_ADC_WERTE

Auslesen der unverarbeiteten Rohwerte der analogen Eingänge KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_L_SONDE

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_L_SONDE_2

KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

_No arguments._

### STATUS_L_ADD

Auslesen der additiven Lambdaregelung

_No arguments._

### STATUS_L_ADD_2

Auslesen der additiven Lambdaregelung Bank2

_No arguments._

### STATUS_L_INT

Auslesen der Lambdaregelung

_No arguments._

### STATUS_L_INT_2

Auslesen der Lambdaregelung

_No arguments._

### STATUS_L_MUL

Auslesen der multiplikativen Lambdaregelung

_No arguments._

### STATUS_L_MUL_2

Auslesen der multipikativen Lambdaregelung

_No arguments._

### STATUS_MOTORLAUFUNRUHE

KWP2000:    $22     ReadDataByCommonIdentifier $40 $03 RecordCommonIdentifier "Laufunruhewert lesen"  Auslesen der Laufunruhewerte (Laufqualität) Werte stellen ein Maß für die Verbrennungsqualität der einzelnen Zylinder dar

_No arguments._

### STATUS_SPI_MAX_T_TIME

KWP2000:    $30 InputOutputControlByLocalIdentifier Request Service Id $5C inputOutputLocalIdentifier Raw Data $01 inputOutputControlParameter "RCS - ReportCurrentState"  liefert die maximale Übertragungszeit aller bisherigen SPI Sequenzen Übertragungzeit entspricht der Zeitdauer des folgenden Ablaufs: 1. Eintrag vorbereiteter SPI-Sequenz in die Sequenz-Queue - Zeitmarke speichern 2. Senden der Sequenz an einen peripheren Baustein 3. Empfang der Antwortdaten 4. Auslesen dieser Daten aus dem Hardwarepuffer der SPI-Schittstelle -> Zeitdauer 1 - 4 ermitteln

_No arguments._

### STEUERN_EKP_ENTSPERREN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D4 inputOutputLocalIdentifier "Sperrbedingung EKP" $04 inputOutputControlParameter "RTD - ResetToDefault"  entsperrt die EKP, Anlasserfreigabe, Einspitzung und Zuendung

_No arguments._

### STEUERN_EKP_SPERREN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D4 inputOutputLocalIdentifier "Sperrbedingung EKP" $05 inputOutputControlParameter "FCS - FreezeCurrentState" KWP2000 :   $22     ReadDataByCommonIdentifier $40 $00 RecordCommonIdentifier "Meßwerte lesen"  sperrt die EKP, Anlasserfreigabe, Einspritzung und Zuendung Nebenbedingung: Drehzahl muß Null sein.

_No arguments._

### ACCESS_TIMING_PARAMETER

KWP2000:    $83 AccessTimingParamater Request Service Id $xx timingParameterIdentifier  ermöglicht auslesen und modifizieren der Flash-Zugriffsparameter

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0 = readLimitsOfPossibleTimingParameter 1 = setTimingParamatersToDefaultValue 2 = readCurrentlyActivetimingParamaters 3 = setTimingParametersToGivenValues .       default .       $32 P2min = 25 ms (0,5 ms Res.) .       $02 P2max = 50 ms (25 ms Res.) .       $6E P3min = 55 ms ( 0.5 ms Res.) .       $14 P3max = 5000 ms ( 250 ms Res.) .       $0A P4min = 5 ms (0,5 ms Res.) |
| P2_MIN | int | Time between tester request and ECU response or two ECU responses (0,5 ms Res.) |
| P2_MAX | int | Time between tester request and ECU response or two ECU responses (25 ms Res.) |
| P3_MIN | int | Time between end of ECU responses and start of new tester request ( 0.5 ms Res.) |
| P3_MAX | int | Time between end of ECU responses and start of new tester request ( 250 ms Res.) |
| P4_MIN | int | Inter byte time for tester request (0,5 ms Res.) |

### STEUERN_FAHRGESTELLNUMMER

17 ASCII "Fahrgestellnummer" schreiben KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $30 und:     $2E WriteDataByCommonIdentifier $10 $10 Full Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NUMMER | string | "Fahrgestellnummer" 17 x {1...0A...Z} ======> Byte0-16 |

### STATUS_FAHRGESTELLNUMMER

17 ASCII Byte Fahrgestell-Nummer KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $30 Falls keine Antwort von BMSKP (weil BMSKP im Kundenbootblock), wird auf die FGNR aus dem FA-Bereich ($22, $10, $10) zurückgegriffen Modus   : Default

_No arguments._

### STEUERN_PROG_LOCATION_DATUM

Schreibt 3 Byte "Programmier-Ort/Datum"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $29 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PROG_LOCATION | unsigned char | "Ort":   0-15 ======> Byte0, Bit4-7 |
| PROG_TIME_DAY | unsigned char | "Tag":   1-31 ======> Byte1 |
| PROG_TIME_MONTH | unsigned char | "Monat": 1-12 ======> Byte0, Bit0-3 |
| PROG_TIME_YEAR_2_DIGITS | unsigned int | "Jahr":  0-99 ======> Byte2 |

### STATUS_PROG_LOCATION_DATUM

Ort und Datum der ECU-Programmierung KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $29 Modus   : Default

_No arguments._

### STEUERN_TRSP_INIT

KWP2000:    $3B WriteDataByLocalIdentifier Request Service Id $2A recordLocalIdentifier "TFA - Transponder Funktion Aktivieren"  dient der Aktivierung/Deaktivierung des Transponders(Ringantenne) Nutzung für den Werksprozess Bedingung: SG nicht verriegelt

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "0xAA,0xAA,0xAA" => aktivieren o."0xFF,0xFF,0xFF" => deaktivieren ======> Byte 0 - 2 |

### STATUS_TRSP_INIT

aktueller Status "TRSP, Init-Kennung" KWP2000:    $21 ReadDataByLocalIdentifier Request Service Id $2A recordLocalIdentifier "Funktion Transponder"  ermittelt den Aktivierungsstatus des Transponders(Ringantenne) Nutzung für den Werksprozess - aktiviert:    "0xAA,0xAA,0xAA" - deaktiviert:  "0xFF,0xFF,0xFF"

_No arguments._

### STATUS_MECHANISCHER_SCHLUESSELCODE

KWP2000:    $21 ReadDataByLocalIdentifier Request Service Id $28 recordLocalIdentifier  mechanischer Schliesscode ist in jedem Schlüssel hinterlegt wird vom SG aus dem ersten angelernten Schlüssel übernommen job liefert Schliesscode aus SG (0000Kxxxxx) Default Schliesscode vor dem ersten angelernten Schlüssel - 0000K00000

_No arguments._

### STATUS_AKTUELLER_SCHLUESSEL

aktuelle Schluessel KWP2000:    $21 ReadDataByLocalIdentifier $35 recordLocalIdentifier Modus   : Default liest die aktuellen Statusinformationen zum gesteckten Schluessel

_No arguments._

### STATUS_MREWS_DIAGNOSE

aktuelle Schluessel KWP2000:    $21 ReadDataByLocalIdentifier $34 recordLocalIdentifier Modus  : Default liest die Diagnoseinformationen bzgl. EWS-SG, Ringantenne und Transponder

_No arguments._

### STEUERN_MREWS_INIT

KWP2000:    $3B WriteDataByLocalIdentifier $2C recordLocalIdentifier "IES - Initialisierungserkennung-status"  ermöglicht Verriegelung des SG keine Entriegelung möglich ! sperrt einige Diagnose-Jobs, z.B.: STATUS_SCHLUESSELDATEN STEUERN_SCHLUESSELDATEN STEUERN_FAHRGESTELLNUMMER STEUERN_TRSP_INIT STEUERN_PROG_LOCATION_DATUM STEUERN_MECHANISCHER_SCHLUESSELCODE

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "0xAA,0xAA,0xAA" => verriegelt o."0xFF,0xFF,0xFF" => nicht verriegelt ======> Byte 0 - 2 |

### STATUS_MREWS_INIT

aktueller Status "MREWS, Init-Kennung" KWP2000:    $21 ReadDataByLocalIdentifier $2C recordLocalIdentifier  Feststellung, ob das SG verriegelt ist

_No arguments._

### STEUERN_SCHLUESSEL_SPERREN

Schreibt 1 Byte "Schluessel-Sperre"  KWP2000:    $3B WriteDataByLocalIdentifier $2E recordLocalIdentifier Modus  :    Default sperrt den über die Schluesselnummer eingegebenen Schluessel mit diesem gesperrten Schluessel kein Fahrzeugstart mehr möglich zum Sperren muß Schluessel gesteckt sein -> dieser nicht sperrbar

| Name | Type | Description |
| --- | --- | --- |
| KEY_NUMBER | unsigned int | Schluesselnummer: 1...10 ======> Byte0 |

### STEUERN_SCHLUESSEL_FREIGEBEN

Schreibt 1 Byte "Schluessel-Nummer"  KWP2000:    $3B WriteDataByLocalIdentifier $2F recordLocalIdentifier Modus  :    Default gibt den über die Schluesselnummer eingegebenen Schlüssel frei

| Name | Type | Description |
| --- | --- | --- |
| KEY_NUMBER | unsigned int | "Nr.":   1-10 ======> Byte0 |

### STATUS_TRSP_DATEN

KWP2000:    $21 ReadDataByLocalIdentifier $xx recordLocalIdentifier, $40-$49  auslesen bestimmter Statusdaten aus SG fuer den eingegebenen Schluessel

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL_NUMMER | int | Werte: 1...10 |

### STATUS_SCHLUESSELDATEN

Auslesen der SCHLUESSELDATEN KWP2000 :   $21 ReadDataByLocalIdentifier $36...$3F  recordLocalIdentifier Modus   :   Default listet die kompletten Schluesseldaten aus SG-Tabelle zur eingegebenen Schluesselnummer auf Ausführung ist nur vor der Verriegelung möglich

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSEL_NUMMER | int | Werte: 1...10 |

### STEUERN_SCHLUESSELDATEN

Schreibt 17 Byte "Schluessel-Daten"  KWP2000:    $3B WriteDataByLocalIdentifier $36...$3F recordLocalIdentifier Modus  :    Default dient dem Befüllen der internen Schluesseltabelle vor dem eigentlichen Schluesselanlernen Ausführung ist nur vor der Verriegelung möglich

| Name | Type | Description |
| --- | --- | --- |
| KEY_NUMBER | int | "Schl-Nr": 1-10 ======> Array-Index |
| STATUS_BYTE1 | unsigned char | "Status1": 0-255 ======> Byte 0 |
| STATUS_BYTE2 | unsigned char | "Status1": 0-255 ======> Byte 1 |
| INITIALISIERUNGSSTATUS | unsigned char | "Init-Status": 0-255 ======> Byte 2 |
| IDENTIFIER | string | "Identifier": (z.B. 0x01,0x02,0x03,0x04) ======> Byte 3-6 |
| SECRET_KEY | string | "Secret Key": (z.B. 0x01,0x02,0x03,0x04,0x05,0x06) ======> Byte 7-12 |
| CONFIG_BYTE | unsigned char | Config-Byte ======> Byte 13 |
| PASSWORD_TRANSPONDER | string | "Password-Transponder": (z.B. 0x01,0x02,0x03) ======> Byte 14-16 |
| CRC_BYTE | unsigned char | "CyclicRedundancyCheck": 0-255 ======> Byte 17 |

### STEUERN_MECHANISCHER_SCHLUESSELCODE

5 ASCII "Mechanischer Schliesscode" schreiben KWP2000: $3B WriteDataByLocalIdentifier $28 recordLocalIdentifier "MSC - mechanischer Schlüsselcode"  speichert/schreibt mechanischen Schliesscode des Schluessels ins SG dient der Ersatzteilcodierung und der Nacharbeit nur bei unverriegeltem SG möglich

| Name | Type | Description |
| --- | --- | --- |
| SCHLUESSELCODE | string | siehe STATUS_MECHANISCHER_SCHLUESSELCODE |

### INTERFACETYP

Ermitteln des Interface-Typ

_No arguments._

### STEUERN_GRUNDADAPTION_ANFORDERN

KWP2000 : $31 Start Routine By Local Identifier Request Service Id $32 routineLocalIdentifier legt Grundadaption fuer Tankentlueftungssystem an wird erst bei Klemme 15 AUS/EIN zurueckgesetzt

_No arguments._

### STEUERN_PM_AKTIVIEREN

KWP2000 : $31 Start Routine By Local Identifier Request Service Id $83 inputOutputLocalIdentifier "EWS initialisieren"

_No arguments._

### STATUS_TRSP_AUTH

Transponder Page KWP2000:    $21 ReadDataByLocalIdentifier $4C recordLocalIdentifier  vor Ausführung dieses Jobs muß STEUERN_TRSP_AUTH ausgeführt werden manuelle Authentisierung des TRSP und lesen/plausibilisieren der relevanten Pages

_No arguments._

### STEUERN_TRSP_AUTH

Schreibt 5 Byte "TRSP-Page"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $33 Modus  : Default dieser Job muß vor STATUS_TRSP_AUTH ausgeführt werden

| Name | Type | Description |
| --- | --- | --- |
| AUTHENTISIERUNGSSTATE | unsigned char | "Art der Authentisierung" ======> Byte0 0 = Standardauthenisierung 1 = Authentisierung mit default Schluesseln 2 = Authenisierung mit übergebenen Schluesseln |
| SECRET_KEY | string | "Secret Key": (z.B. 0x01,0x02,0x03,0x04,0x05,0x06) ======> Byte 1-6 Wird nur im Modus 2 benoetigt |
| PASSWORD_TRANSPONDER | string | "Password-Transponder": (z.B. 0x01,0x02,0x03) ======> Byte 7-10 Wird nur im Modus 2 benoetigt |

### STATUS_READ_TRSP_PAGE

Transponder Page KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $4A Modus   : Default

_No arguments._

### STEUERN_CMD_READ_PAGE_TRSP

Schreibt 1 Byte "Transponder Page"  KWP 2000: $3B WriteDataByLocalIdentifier LocalIdentifier $31 Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| PAGE_NUMMER | unsigned char | "Page": 0-7,0xFF, "WUP": 0xFE ======> Byte0 |

### STATUS_WRITE_PAGE_TRSP

Page TRSP KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $4B Modus   : Default

_No arguments._

### STEUERN_CMD_WRITE_PAGE_TRSP

Schreibt 5 Byte "TRSP-Page"  KWP2000: $3B WriteDataByLocalIdentifier LocalIdentifier $32 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PAGE | unsigned char | "Page": 0-7, 0xFF, "WUP": 0xFE ======> Byte0 |
| DATA_HIGH | string | "High": 0x0000 bis 0xFFFF ======> Byte1-2 =========================================== ALTERNATIV 4 Bytes "High und Low": 0x00000000 bis 0xFFFFFFFF |
| DATA_LOW | string | "Low":  0x0000 bis 0xFFFF ======> Byte3-4 |

### STEUERN_NOCKENWELLENDIAGNOSE_AN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D6 inputOutputLocalIdentifier "Freigabe Anlasser und Sperren Zuendung und Einsprizung" $08 inputOutputControlParameter "LTA - LongtermAdjustment" KWP2000 :   $22     ReadDataByCommonIdentifier $40 $00 RecordCommonIdentifier "Meßwerte lesen"  sperrt die Einspritzung und Zuendung und gibt gleichzeitig den Anlasser frei Dazu werden die Interruptzaehler der Kurbelwelle und Nockenwelle angzeigt Nebenbedingung: Drehzahl muß kleiner als 500 U/min sein.

_No arguments._

### STEUERN_NOCKENWELLENDIAGNOSE_AUS

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D6 inputOutputLocalIdentifier "Freigabe Anlasser und Sperren Zuendung und Einsprizung" $04 inputOutputControlParameter "RTD - ResetToDefault"  gibt Kontrolle von Einspitzung, Zuendung und Anlasserfreigabe wieder an SG zurueck

_No arguments._

### STATUS_ADAPTIONSWERTE2

KWP2000:    $22     ReadDataByCommonIdentifier $40 $0C RecordCommonIdentifier "ADAPTIONSWERTE2 lesen"  Adaptionswerte: DMVAD (Delta-Motordrehmom. aus Verlustmom.-Adapt.) UDKP1MX (Drosselklappenadaption max. Anschlag) RKA (Adaptive Korrektur Kraftstoffmasse) RKA2 (Adaptive Korrektur Kraftstoffmasse Bank 2) FRAO (multipl. Gemischadapt.fakt. ob. Lastbereich) FRAO2 (multipl. Gemischadapt.fakt. ob. Lastbereich Bank 2) FRAU (multipl.Gemischadapt.fakt. unt. mult.Bereich) FRAU2 (multipl.Gemischadapt.fakt. unt. mult.Bereich Bank 2) RKAZ (addit.Gemischkorr. (pro Zuend.) der Gemischadapt.) RKAZ2 (addit.Gemischkorr. (pro Zuend.) der Gemischadapt. Bank 2) FMSLA (Korrekturfak. SLmasse adaptiv) FMSLA2 (Korrekturfak. SLmasse adaptiv Bank 2) FMSLVA (Sekundaerluft Adaptionswert) FMSLVA2 (Sekundaerluft Adaptionswert Bank 2) NWFEHLER (Anzahl Nockenwellenfehler) YAWRAD (Nullpunktadaption Gierrate)

_No arguments._

### STATUS_ANALOG2

KWP2000:    $22     ReadDataByCommonIdentifier $40 $11 RecordCommonIdentifier "Analogwerte 2 lesen"  STP1 (Stepperposition 1 in Prozent) STP2 (Stepperposition 2 in Prozent) VSIKM (Restkilometerstand fuer Ventilspielserviceintervall) VSIDEL (Anzahl von Loeschungen der VSI-km) FRPS (gefilterter Wert des Kraftstoffdrucksensors) TOEL (Motoroeltemperatur) AGKL (Position Abgasklappensteller) IFRKL (Position Interferenzrohrklappensteller) PHIOUT (Schräglagenwinkel) FWG (Fahrwertgeber) WDKS (Sollwert Drosselklappenwinkel) DKP1R (Rohert Drosselklappenwinkel Kanal 1) DKP2R (Rohert Drosselklappenwinkel Kanal 2) FWG1R (Rohwert Fahrwertgeber Kanal 1) FWG2R (Rohwert Fahrwertgeber Kanal 2) KTDKM (Ansteuerung Drosselklappenmotor (PWM) DKDISSK (Drosselklappenabschaltung bei SK Fehlern) STDKREG (Statusbyte Drosselklappenregelung) DREHRATE1 (Drehrate 1 der Sensorbox) DREHRATE2 (Drehrate 2 der Sensorbox) BESCHLEUNIGUNG1 (Beschleunigung 1 der Sensorbox) BESCHLEUNIGUNG2 (Beschleunigung 2 der Sensorbox)

_No arguments._

### STATUS_MREWS_RETRY

aktueller Status "MREWS, Init-Kennung" KWP2000:    $21 ReadDataByLocalIdentifier $4D recordLocalIdentifier  Zum Auslesen der Retry Counter

_No arguments._

### STATUS_NCOLL

KWP2000:    $22     ReadDataByCommonIdentifier $40 $0F RecordCommonIdentifier "NCOLL WERTE lesen"  Adaptionswerte: NCOLL1 (Motorlaufzeit von 9000 - 9249 U/min in Sekunden) NCOLL2 (Motorlaufzeit von 9250 - 9499 U/min in Sekunden) NCOLL3 (Motorlaufzeit von 9500 - 9749 U/min in Sekunden) NCOLL4 (Motorlaufzeit von 9750 - 9999 U/min in Sekunden) NCOLL5 (Motorlaufzeit von 10000 - 10249 U/min in Sekunden) NCOLL6 (Motorlaufzeit von 10250 - 10499 U/min in Sekunden) NCOLL7 (Motorlaufzeit von 10500 - 10749 U/min in Sekunden) NCOLL8 (Motorlaufzeit von 10750 - 10999 U/min in Sekunden) NCOLL9 (Motorlaufzeit von 11000 - 11250 U/min in Sekunden)

_No arguments._

### STATUS_ASC_WERTE

KWP2000:    $22     ReadDataByCommonIdentifier $40 $10 RecordCommonIdentifier "ASC Status-/Messwerteblock lesen"  Messwerte:      ACTCTR    (Dauer der ASC-Regelungen in Sekunden) INTCTR    (mittlere Intensität/Momentrücknahme der ASC-Regelungen in Prozent) ASCSTATUS (aktueller Status der ASC-Funktion: 0 = RESERVIERT 1 = KOMFORT_STANDBY 2 = GS_STANDBY 3 = KEINE_FREIGABE 4 = KEINE_FREIGABE_GS 5 = KOMFORT_AKTIV 6 = GS_AKTIV 7 = AUS 8 = FEHLER ) ASCMODUS  (gewählter Modus der ASC-Funktion: 7 = AUS 1 = KOMFORT 2 = GS ) ES_ASC    (ASC-Taster, 0=nicht betätigt 1=betätigt 2=NOT-AUS aktiv ) RADCOR    (gesamte Radiuskorrektur der Reifenradiusadaption in mm, rücksetzen über den Job STEUERN_ADAPTIONSWERTE_LÖSCHEN möglich)

_No arguments._

### STEUERN_SEKUNDAERLUFTVENTILDIAGNOSE_AN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D8 inputOutputLocalIdentifier "Sekundärluftventildiagnose über Tester" $08 inputOutputControlParameter "LTA - LongtermAdjustment"  gibt die Sekundaerluftventildiagnose frei

_No arguments._

### STEUERN_SEKUNDAERLUFTVENTILDIAGNOSE_AUS

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D8 inputOutputLocalIdentifier "Sekundärluftventildiagnose über Tester" $04 inputOutputControlParameter "RTD - ResetToDefault"  nimmt die Freigabe der Sekundaerluftventildiagnose wieder zurueck

_No arguments._

### STATUS_SEKUNDAERLUFTVENTILDIAGNOSE

KWP2000:    $22     ReadDataByCommonIdentifier $40 $0E RecordCommonIdentifier "SLV-Diagnose-Stati lesen"  Stati:      B_ANFSLV (Bedingung Anforderung SLV-Diagnose) B_DSLVE  (Bedingung Durchführung SLV-Diagnose) B_DSLVA  (Bedingung Abbruch SLV-Diagnose) B_ADSLV  (Bedingung SLV-Diagnose abgeschlossen)

_No arguments._

### STEUERN_NMOTMAXWERK_EIN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D9 inputOutputLocalIdentifier "Drehzahlbegrenzung über Tester" $08 inputOutputControlParameter "LTA - LongtermAdjustment"  aktiviert die Drehzahlbegrenzung Werk

_No arguments._

### STEUERN_NMOTMAXWERK_AUS

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $D9 inputOutputLocalIdentifier "Drehzahlbegrenzung über Tester" $04 inputOutputControlParameter "RTD - ResetToDefault"  nimmt die Drehzahlbegrenzung Werk wieder zurueck

_No arguments._

### STEUERN_VENTILSPIELSERVICE_SETZEN

KWP2000 : $2E     WriteDataByCommonIdentifier Request Service Id $40 $13 recordCommonIdentifier "VSI Restwegstrecke und Löschzähler setzen" $xx $xx $xx data  1. SG-interne Prüfung auf Drehzahl = 0 2. Setzen der Restwegstrecke (in km) und des Löschzählers

| Name | Type | Description |
| --- | --- | --- |
| STAT_VSIDEL_WERT | real | Löschzähler Ventilspielserviceintervall |
| STAT_VSIKM_WERT | real | Restwegstrecke Ventilspielserviceintervall (in km) |

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

### STATUS_GWSZ_ANZEIGE

KWP2000:    $21 ReadDataByLocalIdentifier Request Service Id $07 RecordLocalIdentifier "redundanter Kilometerstand"  Lesen des Kilometerstandes Modus:        Default

_No arguments._

### STEUERN_GWSZ_ANZEIGE_SCHREIBEN

KWP2000:    $30 InputOutputControlByLocalIdentifier Request Service Id $A9 inputOutputLocalIdentifier "redundanter Kilometerstand schreiben" $08 inputOutputControlParameter "LTA - LongtermAdjustment"  Schreiben des Kilometerstandes Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_WERT | real | Tachometerstand (KM oder Meilen) gueltiger Bereich: 0 bis 999999,9 |
| GWSZ_ANZEIGE_EINH | string | km od. miles |

### STATUS_SERVICE_DATE

redundantes Service-Datum aus BMSKP auslesen KWP2000: $21 ReadDataByLocalIdentifier $1A Local-ID für Lesen SERVDAT

_No arguments._

### STEUERN_SERVICE_DATE

redundantes Service-Datum in BMSKP Setzen KWP2000: $30 InputOutputControlByLocalIdentifier $AA Local-ID für Service Datum (SERVDAT) schreiben $08 LongTermAdjustment

| Name | Type | Description |
| --- | --- | --- |
| SERV_DATE_DD | int | Service-Datum: Tag  TT = 1..28,29,30,31 |
| SERV_DATE_MM | int | Service-Datum: Monat  MM = 1..12 |
| SERV_DATE_YYYY | int | Service-Datum: Jahr  YYYY = 2006..2099 |

### STATUS_SERVICE_RESTWEG

redundanten BMSKP KM-Zaehlerstand bis zum naechsten Service auslesen KWP2000: $21 ReadDataByLocalIdentifier $1B Local-ID für Lesen SERVKM zusaetzlich wird noch der BMSKP interne KM-Stand ausgelesen daraus wird die Differenz (Intervall/Zaehlerstand) berechnet KWP2000: $21 ReadDataByLocalIdentifier KWP2000: $07 Local-ID für internen KM-Stand lesen

_No arguments._

### STEUERN_SERVICE_RESTWEG

redundanten BMSKP KM-Zaehlerstand bis zum naechsten Service setzen KWP2000: $30 InputOutputControlByLocalIdentifier $AB Local-ID für Service Datum (SERVKM) schreiben [km] $08 LongTermAdjustment zusaetzlich wird noch der BMSKP interne KM-Stand ausgelesen dazu wird das Intervall/Zaehlerstand addiert KWP2000: $21 ReadDataByLocalIdentifier KWP2000: $07 Local-ID für internen KM-Stand lesen

| Name | Type | Description |
| --- | --- | --- |
| SERV_WEG_WERT | real | Neuer Startwert fuer Serviceintervallzaehler in km oder meilen (nur ganze Werte <= 65535 eingeben) |
| STAT_SERV_WEG_EINHEIT | string | km od. miles |

### STEUERN_ABGASKLAPPE_ABGLEICH

KWP2000 :   $31 StartRoutineByLocalIdentifier Request Service Id $E7 LocalIdentifier "Abgleich Abgasklappe anfordern"  Fehlerzustände/Sperrbedingungen an der Abgasklappe werden durch das Jobresult "Error Conditions not correct" angezeigt

_No arguments._

### STEUERN_INTERFERENZROHRKLAPPE_ABGLEICH

KWP2000 :   $31 StartRoutineByLocalIdentifier Request Service Id $E8 LocalIdentifier "Abgleich Interferenzrohrklappe anfordern"  Fehlerzustände/Sperrbedingungen an der Interferenzrohrklappe werden durch das Jobresult "Error Conditions not correct" angezeigt

_No arguments._

### STATUS_ABGASKLAPPE

KWP2000:    $22     ReadDataByCommonIdentifier $40 $14 RecordCommonIdentifier "Abgasklappenstatus lesen"  AGKL_FREIGABE (Diagnosefreigabe für Abgasklappensteller) AGKL_ABGLEICH (Abgleichstatus des Abgasklappenstellers) AGKL_FEHLER (Fehler des Abgasklappenstellers) AGKL_SPERR (Abgleichsperre des Abgasklappenstellers)

_No arguments._

### STATUS_INTERFERENZROHRKLAPPE

KWP2000:    $22     ReadDataByCommonIdentifier $40 $15 RecordCommonIdentifier "Interferenzrohrklappenstatus lesen"  IFRKL_FREIGABE (Diagnosefreigabe für Interferenzrohrklappensteller) IFRKL_ABGLEICH (Abgleichstatus des Interferenzrohrklappenstellers) IFRKL_FEHLER (Fehler des Interferenzrohrklappenstellers) IFRKL_SPERR (Abgleichsperre des Interferenzrohrklappenstellers)

_No arguments._

### STEUERN_EGAS_VORGEBEN

Auftrag : KWP2000 : $30 InputOutputControlByLocalIdentifier Request Service Id $xx InputOutputLocalIdentifier $07 InputOutputControlParameter "STA - ShortTermAdjustment" $xx...xx data  1. Prüfung der Drehzahlbedingung entsprechend Tabelle Bauteilansteuerung_Egas 2. Nebenbedingung Drehzahl = 0 erforderlich für: WDKS 3. Ansteuerung der aufgelisteten Bauteile über ihr MNEMO und entsprechende [PARAMETER1]...[PARAMETER3] 4. Dauer der Ansteuerung: 20s - gilt für alle aufgeführten Bauteile 5. Nach Ablauf der Ansteuerdauer implizite Rückgabe der Kontrolle über das jeweilige Bauteil an das Steuergerät (Freigabe)

| Name | Type | Description |
| --- | --- | --- |
| MNEMO | string | MNEMO       TEXT [PARAMETER1]...[PARAMETER3] DKM         Ansteuerung Drosselklappenmotor: Start: [-95...95]%, Ende: [-95...95]%, Rampe: [0...100000]%/s WDKS        Vorgabe Sollwert Lageregelung: Start: [0...100]%, Ende: [0...100]%, Rampe: [0...50000]%/s |
| PARAMETER1 | string |  |
| PARAMETER2 | string |  |
| PARAMETER3 | string |  |

### STEUERN_EGAS_FREIGEBEN

KWP2000 :   $30 InputOutputControlByLocalIdentifier Request Service Id $xx inputOutputLocalIdentifier $00 inputOutputControlParameter "RCTECU - ReturnControlToECU"  Freigabe der aufgelisteten Bauteile über ihr MNEMO Freigabe bedeutet, daß die zeitweilige Kontrolle des jeweiligen Bauteils durch den Tester (Ansteuerung) wieder an das Steuergerät zurückgegeben wird explizite Freigabe ist notwendig, wenn Ansteuerung noch vor Ablauf der Ansteuerdauer abgebrochen werden soll Benutzung der Freigabe nach Ablauf der Ansteuerdauer ist überflüssig

| Name | Type | Description |
| --- | --- | --- |
| MNEMO | string | MNEMO       TEXT DKM         Ansteuerung Drosselklappenmotor WDKS        Vorgabe Sollwert Lageregelung |

### STATUS_FAHRZEUGMODUSSPEICHER

KWP2000:    $22     ReadDataByCommonIdentifier $40 $16 RecordCommonIdentifier "Fahrzeugmodusspeicher lesen"  FZGM_AKTUELL_KM (KM-Stand bei letztem Umschaltvorgang) FZGM_AKTUELL_MODUS (aktuell aktiver Fahrzeugmodus) FZGM_AKTUELL_ASC (Deaktivierungsstatus ASC im aktuellen Fahrzyklus) FZGM_AKTUELL_ABS (Deaktivierungsstatus ABS im aktuellen Fahrzyklus) FZGM_AKTUELL_SONDERCODIERUNG (Sondercodierung (Codierstecker) aktueller Fahrzyklus) FZGM_ZWEITLETZT_KM (KM-Stand bei vorletztem Umschaltvorgang) FZGM_ZWEITLETZT_MODUS (im vorletzten Fahrzyklus aktiver Fahrzeugmodus) FZGM_ZWEITLETZT_ASC (Deaktivierungsstatus ASC im vorletzten Fahrzyklus) FZGM_ZWEITLETZT_ABS (Deaktivierungsstatus ABS im vorletzten Fahrzyklus) FZGM_ZWEITLETZT_SONDERCODIERUNG (Sondercodierung (Codierstecker) vorletzter Fahrzyklus) FZGM_DRITTLETZT_KM (KM-Stand bei drittletztem Umschaltvorgang) FZGM_DRITTLETZT_MODUS (im drittletzten Fahrzyklus aktiver Fahrzeugmodus) FZGM_DRITTLETZT_ASC (Deaktivierungsstatus ASC im drittletzten Fahrzyklus) FZGM_DRITTLETZT_ABS (Deaktivierungsstatus ABS im drittletzten Fahrzyklus) FZGM_DRITTLETZT_SONDERCODIERUNG (Sondercodierung (Codierstecker) drittletzter Fahrzyklus) FZGM_VIERTLETZT_KM (KM-Stand bei viertletztem Umschaltvorgang) FZGM_VIERTLETZT_MODUS (im viertletzten Fahrzyklus aktiver Fahrzeugmodus) FZGM_VIERTLETZT_ASC (Deaktivierungsstatus ASC im viertletzten Fahrzyklus) FZGM_VIERTLETZT_ABS (Deaktivierungsstatus ABS im viertletzten Fahrzyklus) FZGM_VIERTLETZT_SONDERCODIERUNG (Sondercodierung (Codierstecker) viertletzter Fahrzyklus)

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
| 0xA2 |  |
| 0xA3 | CONTI VDO |
| 0xA2 | Lighting Reutlingen GmbH |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| ?F5? | ERROR_CONDITIONS_RPM |
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
| 0x2711 | Sturzsensor |
| 0x2718 | Drehzahlgeber Zahnfehler |
| 0x271A | Lambda-Sonde vor Kat |
| 0x271B | Endstufe Lamddasonden-Heizung 1 |
| 0x2722 | Lambda-Sonde2 vor Kat |
| 0x2723 | Endstufe Lamddasonden-Heizung 2 |
| 0x2736 | Kraftstoffdrucksensor |
| 0x2740 | Ölstandgeber |
| 0x2751 | Zylinderkopftemperatur 1 |
| 0x2752 | Zylinderkopftemperatur 2 |
| 0x2760 | Sekundärluftdiagnose |
| 0x2765 | Endstufe Sekundärluft-Ventil 1 |
| 0x276B | Endstufe Sekundärluft-Ventil 2 |
| 0x276C | Tankentlueftungssystem |
| 0x276D | Tankentlueftung Kleinstleck |
| 0x2772 | Tank-Entlüftungs-Ventil 1 |
| 0x2774 | SG-Defekt |
| 0x2778 | Schalter Kupplung |
| 0x2779 | SG Selbsttest RAM |
| 0x277B | SG Selbsttest ROM |
| 0x277C | SG Selbsttest RESET |
| 0x277D | Batteriespannung |
| 0x277F | Seitenstuetzenschalter |
| 0x2783 | Getriebeschaltwalzenpoti |
| 0x2784 | Schalthebelsensor |
| 0x2785 | ABS/ASC-Taster |
| 0x2786 | Vorderradgeschwindigkeit ASC |
| 0x2787 | Hinterradgeschwindigkeit ASC |
| 0x2788 | Fahrzeuggeschwindigkeit |
| 0x278A | Killschalter |
| 0x278B | Motortemperatur |
| 0x278C | Ansauglufttemperatur |
| 0x278D | Motoroeltemperatur |
| 0x279D | Elektrischer Motor-Lüfter |
| 0x27A6 | Einspritzventil Zylinder 1 |
| 0x27A7 | Einspritzventil Zylinder 2 |
| 0x27A8 | Einspritzventil Zylinder 3 |
| 0x27A9 | Einspritzventil Zylinder 4 |
| 0x27AA | Einspritzventil Zylinder 5 |
| 0x27AB | Einspritzventil Zylinder 6 |
| 0x27AC | Einspritzventil Zylinder 7 |
| 0x27AD | Einspritzventil Zylinder 8 |
| 0x27B4 | Drucksensor Umgebung |
| 0x27B7 | Endstufe Elektrische Kraftstoff Pumpe |
| 0x27B8 | Elektrisches Kraftstoff System |
| 0x27D9 | Fehler 5V-Versorgung Kraftstoffdrucksensor |
| 0x27DA | Fehler 5V-Versorgung Getriebeschaltwalzenpoti |
| 0x27DB | Fehler 5V-Versorgung Drosselklappengeber |
| 0x27E0 | alle Klopfsensoren defekt |
| 0x27E1 | Klopfsensor 1 |
| 0x27E2 | Klopfsensor 2 |
| 0x27E3 | Uebertemperatur Spannungsversorgung |
| 0x27E4 | Uebertemperatur Treiberbaustein CJ945 |
| 0x27E6 | Klopfregelung Nulltest |
| 0x27E7 | Klopfregelung Offset |
| 0x27E8 | Klopfregelung Testimpuls |
| 0x27EA | CAN-Timeout KOMBI |
| 0x27EB | CAN-Timeout ZFE |
| 0x27EC | CAN-Timeout ABS |
| 0x27ED | CAN-Botschaft ABS-Modus |
| 0x27F9 | Endstufe Starter-Relais |
| 0x283D | CAN Bus Off |
| 0x2847 | Fehler Drosselklappenpoti |
| 0x2848 | Drosselklappenadaption Grenze überschritten |
| 0x2849 | Abgasklappe |
| 0x284A | Interferenzrohrklappe |
| 0x284B | Endstufe Stellmotor Schaltsaugrohr(DISA) |
| 0x28AA | Akustik Klappe Endstufe |
| 0x28AC | Schalter Klemme 15 |
| 0x28C8 | LR-Abweichung |
| 0x28C9 | LR-Abweichung (Bank 2) |
| 0x28CA | Sicherung aktiv System-Versorgung |
| 0x28CB | Sicherung aktiv EKP |
| 0x28CC | Sicherung aktiv Zuendung |
| 0x28CD | Bezugsmarkengeber Kurbelwelle |
| 0x28CE | Phasengeber |
| 0x28FA | Endstufe Elektronische Wegfahrsperre |
| 0x28FB | Fehler Elektronische Wegfahrsperre |
| 0x2904 | Schrittmotor 1 |
| 0x2905 | Schrittmotor 2 |
| 0x2934 | LR-Adaption |
| 0x2935 | LR-Adaption (Bank 2) |
| 0x2972 | Leerlaufregler |
| 0x2973 | Schräglagensensor |
| 0x2974 | Schräglagensensor CAN 1 |
| 0x2975 | Schräglagensensor CAN 2 |
| 0x2976 | Schräglagensensor CAN 4 |
| 0x4E20 | EGAS-Steller (INI) |
| 0x4E21 | EGAS Reglerüberwachung |
| 0x4E22 | Überwachung Drosselklappenwinkel |
| 0x4E23 | Vergleichsfehler Fahrwertgeber |
| 0x4E24 | Bereichsfehler Fahrwertgeber 1 |
| 0x4E25 | Bereichsfehler Fahrwertgeber 2 |
| 0x4E26 | Vergleichsfehler Drosselklappenpositionssensoren |
| 0x4E27 | Bereichsfehler DK Sensor Kanal 1 |
| 0x4E28 | Bereichsfehler DK Sensor Kanal 2 |
| 0x4E2B | Überwachung Sensorwerte Ebene 2 |
| 0x4E2C | Überwachung Berechnungswerte Ebene 2 |
| 0x4E2D | Überwachung Ausgangswerte Ebene 2 |
| 0x4E52 | Fehler Sollwertbegrenzung auf wdkzul_um aktiv |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00654321 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx1 | 1 | Aktiv-Status der Diagnosefunktion |
| xxxxxx1x | 2 | Diagnose gestoppt oder beendet |
| xxxxx1xx | 3 | Zyklus-flag gesetzt |
| xxxx1xxx | 4 | Fehlerflag E_xyz = TRUE |
| xxx1xxxx | 5 | MIL ein |
| xx1xxxxx | 6 | Fehler in Entprellphase |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2711 | 0x01 | 0x02 | 0x0A | 0x26 |
| 0x2718 | 0x0B | 0x41 | 0x04 | 0x1A |
| 0x271A | 0x16 | 0x0A | 0x1A | 0x0F |
| 0x271B | 0x16 | 0x0A | 0x1A | 0x0F |
| 0x2722 | 0x18 | 0x0A | 0x1A | 0x10 |
| 0x2723 | 0x18 | 0x0A | 0x1A | 0x10 |
| 0x2736 | 0x3C | 0x1B | 0x0A | 0x03 |
| 0x2740 | 0x04 | 0x01 | 0x0A | 0x09 |
| 0x2751 | 0x21 | 0x04 | 0x0B | 0x1A |
| 0x2752 | 0x45 | 0x04 | 0x0B | 0x1A |
| 0x2760 | 0x0A | 0x05 | 0x09 | 0x04 |
| 0x2765 | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x276B | 0x01 | 0x01 | 0x01 | 0x01 |
| 0x276C | 0x1A | 0x03 | 0x0A | 0x85 |
| 0x276D | 0x1A | 0x03 | 0x0A | 0x85 |
| 0x2772 | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x2774 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x2778 | 0x0A | 0x41 | 0x0B | 0x23 |
| 0x2779 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x277B | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x277C | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x277D | 0x40 | 0x0B | 0x0A | 0x1A |
| 0x277F | 0x0A | 0x0B | 0x03 | 0x1A |
| 0x2783 | 0x19 | 0x0A | 0x0B | 0x03 |
| 0x2784 | 0x64 | 0x19 | 0x02 | 0x04 |
| 0x2785 | 0x02 | 0x0A | 0x27 | 0x1A |
| 0x2786 | 0x0B | 0x0A | 0x02 | 0x03 |
| 0x2787 | 0x0B | 0x0A | 0x02 | 0x03 |
| 0x2788 | 0x0A | 0x41 | 0x03 | 0x8C |
| 0x278A | 0x0A | 0x0B | 0x02 | 0x1A |
| 0x278B | 0x3E | 0x1D | 0x0B | 0x1A |
| 0x278C | 0x24 | 0x04 | 0x1A | 0x0B |
| 0x278D | 0x3E | 0x1D | 0x0B | 0x1A |
| 0x279D | 0x12 | 0x0C | 0x0A | 0x0F |
| 0x27A6 | 0x0A | 0x0B | 0x02 | 0x0D |
| 0x27A7 | 0x0A | 0x0B | 0x02 | 0x0D |
| 0x27A8 | 0x0A | 0x0B | 0x02 | 0x0D |
| 0x27A9 | 0x0A | 0x0B | 0x02 | 0x0D |
| 0x27AA | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x27AB | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x27AC | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x27AD | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x27B4 | 0x0A | 0x03 | 0x04 | 0x1A |
| 0x27B7 | 0x0A | 0x0B | 0x02 | 0x0E |
| 0x27B8 | 0x0E | 0x3C | 0x0A | 0x03 |
| 0x27D9 | 0x02 | 0x0A | 0x09 | 0x1A |
| 0x27DA | 0x02 | 0x0A | 0x09 | 0x1A |
| 0x27DB | 0x02 | 0x0A | 0x09 | 0x1A |
| 0x27E0 | 0x8D | 0x8E | 0x8F | 0x0A |
| 0x27E1 | 0x8D | 0x8E | 0x8F | 0x0A |
| 0x27E2 | 0x8E | 0x8D | 0x0A | 0x90 |
| 0x27E3 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x27E4 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x27E6 | 0x80 | 0x04 | 0x0A | 0x09 |
| 0x27E7 | 0x81 | 0x04 | 0x0A | 0x09 |
| 0x27E8 | 0x81 | 0x77 | 0x0A | 0x09 |
| 0x27EA | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x27EB | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x27EC | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x27ED | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x27F9 | 0x0A | 0x0B | 0x02 | 0x0D |
| 0x283D | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x2847 | 0x26 | 0x0A | 0x0B | 0x17 |
| 0x2848 | 0x26 | 0x0A | 0x0B | 0x17 |
| 0x2849 | 0x6E | 0x03 | 0x0A | 0x0B |
| 0x284A | 0x6F | 0x03 | 0x0A | 0x0B |
| 0x284B | 0x01 | 0x0A | 0x03 | 0x0C |
| 0x28AA | 0x0A | 0x0B | 0x02 | 0x0C |
| 0x28AC | 0x02 | 0x0C | 0x0A | 0x1A |
| 0x28C8 | 0x03 | 0x05 | 0x0A | 0x1D |
| 0x28C9 | 0x03 | 0x07 | 0x0A | 0x1D |
| 0x28CA | 0x0C | 0x0A | 0x02 | 0x1A |
| 0x28CB | 0x0E | 0x0A | 0x02 | 0x1A |
| 0x28CC | 0x0D | 0x0A | 0x02 | 0x1A |
| 0x28CD | 0x0A | 0x04 | 0x0B | 0x1A |
| 0x28CE | 0x0A | 0x04 | 0x1A | 0x0B |
| 0x28FA | 0x0D | 0x02 | 0x0A | 0x0B |
| 0x28FB | 0x0D | 0x02 | 0x0A | 0x0B |
| 0x2904 | 0x0A | 0x03 | 0x1A | 0x0C |
| 0x2905 | 0x0A | 0x03 | 0x1A | 0x0C |
| 0x2934 | 0x03 | 0x85 | 0x0A | 0x1D |
| 0x2935 | 0x03 | 0x86 | 0x0A | 0x1D |
| 0x2972 | 0x05 | 0x07 | 0x0A | 0x1D |
| 0x2973 | 0x01 | 0x02 | 0x0A | 0x26 |
| 0x2974 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x2975 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x2976 | 0x0A | 0x01 | 0x02 | 0x1A |
| 0x4E20 | 0x03 | 0x01 | 0x02 | 0x04 |
| 0x4E21 | 0x03 | 0x28 | 0x0A | 0x04 |
| 0x4E22 | 0x03 | 0x91 | 0x0A | 0x04 |
| 0x4E23 | 0x94 | 0x95 | 0x0A | 0x04 |
| 0x4E24 | 0x92 | 0x02 | 0x0A | 0x04 |
| 0x4E25 | 0x93 | 0x02 | 0x0A | 0x04 |
| 0x4E26 | 0x98 | 0x99 | 0x0A | 0x02 |
| 0x4E27 | 0x96 | 0x02 | 0x0A | 0x04 |
| 0x4E28 | 0x97 | 0x02 | 0x0A | 0x04 |
| 0x4E2B | 0x03 | 0x91 | 0x0A | 0x02 |
| 0x4E2C | 0x28 | 0x03 | 0x91 | 0x0A |
| 0x4E2D | 0x0A | 0x1E | 0x03 | 0x91 |
| 0x4E52 | 0x0A | 0x28 | 0x04 | 0x91 |
| 0xFFFF | 0xFF | 0xFF | 0xFF | 0xFF |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

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

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Ansauglufttemperatur (tans) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x02 | Batteriespannung (ub) | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x03 | Drosselklappenwinkel bezogen auf DK- Anschlag (wdkba) | %DK | - | unsigned char | - | 100 | 256 | 0 |
| 0x04 | Motortemperatur SAE J1979 (tmot_u) | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x05 | Lambda Regelfaktor Bank 1 SAE J1979 (fr_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x06 | Lambda Adaptionsfaktor Bank 1 SAE J1979 (fra_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x07 | Lambda Regelfaktor Bank 2 SAE J1979 (fr2_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x08 | Lambda Adaptionsfaktor Bank 2 SAE J1979 (fra2_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x09 | relative Luftfüllung (rl) | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x0A | Motordrehzahl SAE J1979 (nmot) | U/min | - | unsigned char | - | 40 | 1 | 0 |
| 0x0B | Fahrzeuggeschwindigkeit entspr. SAE J1979 (vfzg_u) | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x0C | Spannung System BTS (uusys) | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x0D | Spannung Zündung BTS (uuzdg) | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x0E | Spannung EKP BTS (uuekp) | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x0F | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren); (tabgmls) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x10 | Abgastemperatur vor Kat aus Modell (für LSH bei Boxer-Motoren) Bank2; (tabgmls2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x11 | Luftmassenfluß (ml) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0x12 | Motortemperatur in Systemquantisierung (tmot) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x13 | Lambda Regelstatus Bank 1 SAE J1979 (flglrs) | 0-n | - | 0xFF | Lambdaregelstatus | 1 | 1 | 0 |
| 0x14 | Lambda Regelstatus Bank 2 SAE J1979 (flglrs2) | 0-n | - | 0xFF | Lambdaregelstatus | 1 | 1 | 0 |
| 0x15 | Relative Luftmasse SAE J1979 (rml) | % | - | unsigned char | - | 100 | 256 | 0 |
| 0x16 | Lambdasondenspannung Bank 1 (usvk) | V | - | unsigned char | - | 0.0052 | 1 | -0.2 |
| 0x17 | adaptierter Spannungswert bei geschlossener Drosselklappe (udkpa_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x18 | Lambdasondenspannung Bank 2 (usvk2) | V | - | unsigned char | - | 0.0052 | 1 | -0.2 |
| 0x19 | Spannungswert von Getriebeschaltwalze (ugetrg) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x1A | Zeit nach Motorstart(tnst_u) | s | - | unsigned char | - | 64 | 100 | 0 |
| 0x1B | Einspritzzeit(te_u) | ms | - | unsigned char | - | 64 | 1000 | 0 |
| 0x1C | Kraftstoffdruck gefiltert(frps_fu) | hPa | - | unsigned char | - | 5 | 256 | 0 |
| 0x1D | Zylinderkopftemperatur(tmotzyl_u) | Grad C | - | unsigned char | - | 75 | 100 | -48 |
| 0x1E | Letzter berechneter Zuendwinkel (zw) | Grad KW | - | unsigned char | - | 191.25 | 255 | -96 |
| 0x1F | aktuelle Position Stepper 1 (st_curp1_u) | steps | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | aktuelle Position Stepper 2 (st_curp2_u) | steps | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Spannungswert Temperatursensor Zylinder 1 (utzyl1) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x22 | Pfadidentifier aus Reset (rstpfad) | 0-n | - | 0xFF | - | 1 | 1 | 0 |
| 0x23 | Normierter Fahrpedalwinkel (wped) | %PED | - | unsigned char | - | 100 | 255 | 0 |
| 0x24 | ADC-Spannung Ansauglufttemperatur (wtans) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x25 | Motortemperatur- Ersatzwert aus Modell (tmew) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x26 | Spannung DK- Poti 1 (udkp1_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x27 | Fahrzeuggeschwindigkeit aus Übersetzungsverhältnis und nmot (vfzggang_u) | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x28 | Sollwert DK, bezogen auf unteren Anschlag (wdks) | - | - | unsigned char | - | 100 | 256 | 0 |
| 0x29 | Abgastemperatur vor Katalysator aus Modell (tabgm) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2A | Abgastemperatur vor Katalysator aus Modell; Bank 2 (tabgm2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2B | Katalysatortemperatur aus Modell (tkatm) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2C | Katalysatortemperatur Bank 2 aus Modell (tkatm2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2D | Spannung an der Heizerendstufe vor Kat (uhsv) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x2E | Spannung an der Heizerendstufe 2 vor Kat (uhsv2) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x2F | aktuelle Geschw. Stepper 1 (st_curs1_u) | - | - | unsigned char | - | 4 | 1 | 0 |
| 0x30 | aktuelle Geschw. Stepper 2 (st_curs2_u) | - | - | unsigned char | - | 4 | 1 | 0 |
| 0x31 | Innenwiderstand Lambdasonde vor Kat. (rinv_u) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x32 | Innenwiderstand Lambdasonde vor Kat. Bank 2 (rinv2_u) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x35 | Umgebungsdruck (pu) | hPa | - | unsigned char | - | 5 | 1 | 0 |
| 0x36 | Gefilterte Periodendauer Lambdasonde vor Kat. (tpsvkmf_u) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x37 | Gefilterte Periodendauer Lambdasonde vor Kat Bank 2 (tpsvkmf2_u) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x38 | ersetzt durch Nr. 5 (fr_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x39 | ersetzt durch Nr. 6 (fra_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x3A | ersetzt durch Nr. 7 (fr2_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x3B | ersetzt durch Nr. 8 (fra2_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x3C | gemessener Kraftstoffdruck (frps_measu) | hPa | - | unsigned char | - | 5 | 256 | 0 |
| 0x3D | ersetzt durch Nr. 26 (rl) | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x3E | Motortemperatur, linearisiert und umgerechnet (tmotlin) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x3F | Motortemperatur-Referenzwert aus Modell (tmrw) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x40 | ADC-Wert Batteriespannung (wub) | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x41 | Ist-Gang (gangi) | Gang | - | unsigned char | - | 1 | 1 | 0 |
| 0x42 | Zulässiges indiziertes Moment vor Filter (mizuvfil) | % | - | unsigned char | - | 100 | 256 | 0 |
| 0x45 | Spannungswert Temperatursensor Zylinder 2 (utzyl2) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x64 | Spannungswert Schalthebelsensor (ushs_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x66 | Integratorgradient für Offsetkorrektur Klopfregelung (igokr_u) | V/s | - | unsigned char | - | 23.84375 | 1 | 0 |
| 0x67 | ADC- Spannung Lambdasonde vor Katalysator (uusvk)  | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x68 | ADC- Spannung Lambdasonde vor Katalysator 2 (uusvk2) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x6B | Tastverhältnis E- Lüfter (taml) | % | - | unsigned char | - | 100 | 1 | 256 |
| 0x6E | Stellmotorstatus Abgasklappe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x6F | Stellmotorstatus Interferenzrohrklappe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x72 | ADC- Spannung Motortemperatur (adtm_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x73 | ADC- Spannung Ansauglufttemperatur (adta_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x75 | ADC- Spannung Saugrohrabsolutdruck (addsu_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x77 | Integratorwert Klopfregelung Meßfensterende Testimpuls (ikrmet) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x80 | Integratorgradient für Nulltest-Diagnose Klopfregelung (igod_u) | V/s | - | unsigned char | - | 23.84375 | 1 | 0 |
| 0x81 | Integratorwert Klopfregelung Meßfensteranfang (ikrma) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0x82 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor (lamsons_u) | - | - | unsigned char | - | 16 | 256 | 0 |
| 0x83 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor bank 2 r (lamsons2_u) | - | - | unsigned char | - | 16 | 256 | 0 |
| 0x84 | Motorstarttemperatur (tmst) | Grad C | - | unsigned char | - | 0.75 | 1 | -25 |
| 0x85 | Filtered feedback (frm_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x86 | Filtered feedback Bank2 (frm2_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x87 | Festwert (dummy) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x88 | Festwert (dummy) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x8B | Faktor Luftdichte f(Ansauglufttemp., Höhe) (frhol_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0x8C | Zeitzähler ab Startende (tnse_u) | s | - | unsigned char | - | 25.6 | 1 | 0 |
| 0x8D | normierter Referenzpegel KR SW- Zylinder 0 (rkrn_u_0) | V | - | unsigned char | - | 5 | 8 | 0 |
| 0x8E | normierter Referenzpegel KR SW- Zylinder 1 (rkrn_u_1) | V | - | unsigned char | - | 5 | 8 | 0 |
| 0x8F | normierter Referenzpegel KR SW- Zylinder 2 (rkrn_u_2) | V | - | unsigned char | - | 5 | 8 | 0 |
| 0x90 | normierter Referenzpegel KR SW- Zylinder 3 (rkrn_u_3) | V | - | unsigned char | - | 5 | 8 | 0 |
| 0x91 | Fahrwertgeber (fwg_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x92 | Fahrwertgeber 1 roh (fwg1r_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x93 | Fahrwertgeber 2 roh (fwg2r_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x94 | Fahrtwertgeber 1 adaptiert (fwgad1_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x95 | Fahrtwertgeber 2 adaptiert (fwgad2_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x96 | Rohwert Drosselklappenwinkel Kanal 1 (dkp1r_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x97 | Rohwert Drosselklappenwinkel Kanal 2 (dkp2r_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x98 | Drosselklappenwinkel Kanal 1 adaptiert (dkpad1_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x99 | Drosselklappenwinkel Kanal 2 adaptiert (dkpad2_u) | % | - | unsigned char | - | 100 | 255 | 0 |
| 0xA3 | Abgasmassenfluß gefiltert, Bank 1 (msabg) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA4 | Abgasmassenfluß gefiltert, Bank 2 (msabg2) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA5 | Abstellzeit (tabst_u) | s | - | unsigned char | - | 256 | 1 | 0 |
| 0xA8 | Sondenspannung vor Kat einer Breitbandlambdasonde (uulsuv_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0xA9 | Sondenspannung vor Kat einer Breitbandlambdasonde Bank2 (uulsuv2_u) | V | - | unsigned char | - | 5 | 256 | 0 |
| 0xAC | multiplikativer Gemischadaptionsfaktor unterer mult. Bereich (frau_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0xAD | multipl. Gemischadaptionsfaktor unterer mult. Bereich der Bank 2 (frau2_u) | - | - | unsigned char | - | 2 | 256 | 0 |
| 0xFF | ohne Bedeutung | - | - | unsigned char | - | 1 | 1 | 0 |

### TAB_ADAPTIONSWERTE

| MNEMO | TEXT | INDEX | NAME | EINHEIT | ADD | FAKTOR | TYP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ABS | ABS Steuergerät verbaut/nicht verbaut | 88 | tab_Verbaut | - | - | - | - |
| LOWBAT | U-Bat war zwischen 6 Volt und 7 Volt | 89 | tab_Aktiv | - | - | - | - |
| SPERREKP | EKP, Zünd./Einsp. & Anlasser gesperrt | 90 | tab_Aktiv | - | - | - | - |
| FWGADAPT | Status Fahrwertgeberadaption | 91 | tab_Vollstaendig | - | - | - | - |
| DKPADAPT | Status Drosselklappenadaption | 92 | tab_Vollstaendig | - | - | - | - |
| DKPA | Adaptionswert Drosselklappenpoti | 24 | - | Volt | 0 | 0,001222 | word |
| GANGAN | Adaptionswert Neutral Gang | 32 | - | Volt | 0 | 0,019531 | byte |
| GANGA1 | Adaptionswert 1. Gang | 40 | - | Volt | 0 | 0,019531 | byte |
| GANGA2 | Adaptionswert 2. Gang | 48 | - | Volt | 0 | 0,019531 | byte |
| GANGA3 | Adaptionswert 3. Gang | 56 | - | Volt | 0 | 0,019531 | byte |
| GANGA4 | Adaptionswert 4. Gang | 64 | - | Volt | 0 | 0,019531 | byte |
| GANGA5 | Adaptionswert 5. Gang | 72 | - | Volt | 0 | 0,019531 | byte |
| GANGA6 | Adaptionswert 6. Gang | 80 | - | Volt | 0 | 0,019531 | byte |
| UADPSHS | Adaptionswert Schalthebelsensor Neutralstellung | 96 | - | Volt | 0 | 0,0048828 | word |
| DKP1ADO | oberer Adaptionswert Drosselklappenwinkel Kanal 1 | 112 | - | % | 0 | 0,01 | word |
| DKP1ADU | unterer Adaptionswert Drosselklappenwinkel Kanal 1 | 128 | - | % | 0 | 0,01 | word |
| DKP2ADO | oberer Adaptionswert Drosselklappenwinkel Kanal 2 | 144 | - | % | 0 | 0,01 | word |
| DKP2ADU | unterer Adaptionswert Drosselklappenwinkel Kanal 2 | 160 | - | % | 0 | 0,01 | word |
| FWGADO1 | oberer Adaptionswert Fahrwertgeber Kanal 1 | 176 | - | % | 0 | 0,01 | word |
| FWGADU1 | unterer Adaptionswert Fahrwertgeber Kanal 1 | 192 | - | % | 0 | 0,01 | word |
| FWGADO2 | oberer Adaptionswert Fahrwertgeber Kanal 2 | 208 | - | % | 0 | 0,01 | word |
| FWGADU2 | unterer Adaptionswert Fahrwertgeber Kanal 2 | 224 | - | % | 0 | 0,01 | word |
| DMVAD | Delta-Motordrehmom. aus Verlustmom.-Adapt. | - | - | % | 0 | 0,0030517578125 | word |
| UDKP1MX | Drosselklappenadaption max. Anschlag | - | - | Volt | 0 | 0.00122200 | word |
| RKA | Adaptive Korrektur Kraftstoffmasse | - | - | % | 0 | 0,046875 | word |
| RKA2 | Adaptive Korrektur Kraftstoffmasse Bank 2 | - | - | % | 0 | 0,046875 | word |
| FRAO | multipl. Gemischadapt.fakt. ob. Lastbereich | - | - | - | 0 | 0,000030517578125 | word |
| FRAO2 | multipl. Gemischadapt.fakt. ob. Lastbereich Bank 2 | - | - | - | 0 | 0,000030517578125 | word |
| FRAU | multipl.Gemischadapt.fakt. unt. mult.Bereich | - | - | - | 0 | 0,000030517578125 | word |
| FRAU2 | multipl.Gemischadapt.fakt. unt. mult.Bereich Bank 2 | - | - | - | 0 | 0,000030517578125 | word |
| RKAZ | addit.Gemischkorr. (pro Zuend.) der Gemischadapt. | - | - | % | 0 | 0,046875 | word |
| RKAZ2 | addit.Gemischkorr. (pro Zuend.) der Gemischadapt. Bank 2 | - | - | % | 0 | 0,046875 | word |
| FMSLA | Korrekturfak. SLmasse adaptiv | - | - | - | 0 | 0,0078125 | byte |
| FMSLA2 | Korrekturfak. SLmasse adaptiv Bank 2 | - | - | - | 0 | 0,0078125 | byte |
| FMSLVA | Sekundaerluft Adaptionswert | - | - | - | 0 | 0,0078125 | byte |
| FMSLVA2 | Sekundaerluft Adaptionswert Bank 2 | - | - | - | 0 | 0,0078125 | byte |
| NWFEHLER | Anzahl Nockenwellenfehler | - | - | - | 0 | 1 | byte |
| YAWRAD | Nullpunktadaption Gierrate | - | - | Grad/s | -16,384 | 0,0005 | word |
| NCOLL1 | Motorlaufzeit von 9000 - 9249 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL2 | Motorlaufzeit von 9250 - 9499 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL3 | Motorlaufzeit von 9500 - 9749 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL4 | Motorlaufzeit von 9750 - 9999 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL5 | Motorlaufzeit von 10000 - 10249 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL6 | Motorlaufzeit von 10250 - 10499 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL7 | Motorlaufzeit von 10500 - 10749 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL8 | Motorlaufzeit von 10750 - 10999 U/min in Sekunden | - | - | sec | 0 | 1 | long |
| NCOLL9 | Motorlaufzeit von 11000 - 11250 U/min in Sekunden | - | - | sec | 0 | 1 | long |

### KEYBYTES

| KB | FMT | HEADER | TIMING |
| --- | --- | --- | --- |
| 0x8FD5 | Format byte | 1 byte header | Extended timing |
| 0x8FD6 | Additional length byte | 1 byte header | Extended timing |
| 0x8F57 | Both modes possible | 1 byte header | Extended timing |
| 0x8FD9 | Format byte | Header with target and source information | Extended timing |
| 0x8FDA | Additional length byte | Header with target and source information | Extended timing |
| 0x8F5B | Both modes possible | Header with target and source information | Extended timing |
| 0x8F5D | Format byte | Both types of header supported | Extended timing |
| 0x8F5E | Additional length byte | Both types of header supported | Extended timing |
| 0x8FDF | Both modes possible | Both types of header supported | Extended timing |
| 0x8FE5 | Format byte | 1 byte header | Normal timing |
| 0x8FE6 | Additional length byte | 1 byte header | Normal timing |
| 0x8F67 | Both modes possible | 1 byte header | Normal timing |
| 0x8FE9 | Format byte | Header with target and source information | Normal timing |
| 0x8FEA | Additional length byte | Header with target and source information | Normal timing |
| 0x8F6B | Both modes possible | Header with target and source information | Normal timing |
| 0x8F6D | Format byte | Both types of header supported | Normal timing |
| 0x8F6E | Additional length byte | Both types of header supported | Normal timing |
| 0x8FEF | Both modes possible | Both types of header supported | Normal timing |

### LSUNPSTAT

| TEXT | NR |
| --- | --- |
| Abgleichltg.unterbrochen | 1 |
| Sonde nicht eingebaut aber angeschlossen | 2 |
| HW-Fehler | 4 |
| mager-Fehler | 8 |
| fett-Fehler | 16 |
| Unterbrechung | 32 |

### BAUTEILANSTEUERUNG

| MNEMO | TEXT | IOLI | TYP | FAKTOR | DREHZAHL | EINH |
| --- | --- | --- | --- | --- | --- | --- |
| Elu | E-Lüfter | 0xC1 | 3 | - | 3 | - |
| SLV | Sekundärluftventil | 0xC3 | 3 | - | 3 | - |
| AKL | Akustik Klappe | 0xC4 | 3 | - | 3 | - |
| TEV | Taktventil Tankentlüftung | 0xC5 | 0 | - | 3 | % |
| EKP | Kraftstoffpumpe | 0xC6 | 0 | 1 | 1 | % |
| HSV | Lambdasondenheizung vor Kat 1 | 0xC7 | 0 | 0,01 | 3 | ms |
| HSV2 | Lambdasondenheizung vor Kat 2 | 0xC9 | 0 | 0,01 | 3 | ms |
| EV1 | Einspritzventil 1 | 0xCB | 3 | - | 1 | - |
| EV2 | Einspritzventil 2 | 0xCC | 3 | - | 1 | - |
| EV3 | Einspritzventil 3 | 0xCD | 3 | - | 1 | - |
| EV4 | Einspritzventil 4 | 0xCE | 3 | - | 1 | - |
| STPLL2 | Stepper LL-Regelung 2 | 0xCF | 0 | 2,56 | 3 | % |
| STPLL1 | Stepper LL-Regelung 1 | 0xD1 | 0 | 2,56 | 3 | % |
| STPABGL | Stepper-Abgleich | 0xD2 | 3 | - | 1 | - |
| UETMC | Kontrollleuchte Übertemperatur | 0xD3 | 3 | - | 3 | - |
| MIL | Check-Engine-Lampe | 0xF1 | 3 | - | 1 | - |
| Gangadp | Gangadaption | 0xD5 | 3 | - | 3 | - |
| VSIDEL | VSI Kilometerstand zuruecksetzen | 0xD7 | 3 | - | 3 | - |
| AGKL | Abgasklappensteller | 0xDA | 0 | 1 | 1 | % |
| IFRKL | Interferenzrohrklappensteller | 0xDB | 0 | 1 | 1 | % |
| EV5 | Einspritzventil 5 | 0xDC | 3 | - | 1 | - |
| EV6 | Einspritzventil 6 | 0xDD | 3 | - | 1 | - |
| EV7 | Einspritzventil 7 | 0xDE | 3 | - | 1 | - |
| EV8 | Einspritzventil 8 | 0xDF | 3 | - | 1 | - |
| DISA | Sollstellung Schaltsaugrohr | 0xE6 | 0 | - | 1 | - |

### NOBDKLASSE

| CLA | MIL | FLC_TRIGGER | FLC_WERT | HLC_TRIGGER | HLC_WERT | SCAN_TOOL_AUSGABE | DLC_TRIGGER_CARB | DLC_WERT_PENDING | DLC_TRIGGER_BMW | DLC_WERT_CARB | DLC_WERT_BMW | FREEZE_FRAME_PRIORITAET | EPCL | TEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CL30LINE | 0 | 0 | 0 | 1 | 5 | 0 | 2 | 2 | 2 | 2 | 2 | 255 | 0 | nicht verwendet |
| CL31LINE | 0 | 4 | 2 | 5 | 4 | 1 | 2 | 80 | 3 | 40 | 40 | 20 | 0 | verwendet für Aussetztererkennung; FLC Trigger über Funktionsroutine; hohe FF Priorität |
| CL32LINE | 0 | 2 | 2 | 2 | 4 | 1 | 3 | 40 | 3 | 40 | 40 | 30 | 0 | identisch mit Klasse 33; früher verwendet für Fehler, die die Lambdaregelung sperren, da bei diesen Fehlern die MIL sofort anging |
| CL33LINE | 0 | 2 | 2 | 2 | 4 | 1 | 3 | 40 | 3 | 40 | 40 | 30 | 0 | Standard OBDII Klasse; MIL on nach 2 driving cycles; MIL off nach 3 fehlerfreien driving cycles (wegen Funktionsfehler DFPM auf 4 driving cycles appliziert); DTC löschen nach 40 warm up cycles |
| CL34LINE | 0 | 2 | 2 | 2 | 4 | 1 | 3 | 40 | 3 | 40 | 40 | 30 | 1 | OBDII Steuerung wie Standard Klasse 33; zusätzlich EPCL (EML lampe bzw. Motornotprogramm) ein; verwendet für DK und SG interne Fehler |
| CL35LINE | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 40 | 3 | 40 | 40 | 30 | 1 | Standard BMW Fehler; keine MIL, keine scan tool Ausgabe;EPCL ein; verwendet für PWG Fehler |
| CL36LINE | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 40 | 3 | 40 | 40 | 50 | 0 | Standard BMW Fehler; keine MIL, keine scan tool Ausgabe; keine EPCL |
| CL37LINE | 0 | 2 | 2 | 2 | 4 | 1 | 3 | 40 | 3 | 40 | 40 | 30 | 0 | Standard EOBD Fehler; keine MIL, jedoch Ausgabe an scan tool; keine EPCL; Fehler löschen nach 40 warm up cycles |
| CL38LINE | 0 | 0 | 255 | 1 | 5 | 0 | 3 | 20 | 3 | 2 | 15 | 50 | 0 | nicht verwendet |
| CL39LINE | 0 | 1 | 0 | 1 | 0 | 1 | 2 | 0 | 2 | 0 | 0 | 50 | 0 | nicht verwendet |

### TAB_FUNKTIONSSTATI

| MNEMO | TEXT | INDEX | NAME |
| --- | --- | --- | --- |
| LL | Leerlaufregelung  | 24 | tab_Aktiv |
| VL | Bedingung Vollast | 25 | tab_Aktiv |
| TEHB | Bedingung Tankentlüftung mit hoher Beladung | 26 | tab_Aktiv |
| SA | Bedingung Schubabschalten | 27 | tab_Aktiv |
| SBBVK | Bedingung Sonde betriebsbereit vor Kat  | 29 | tab_Aktiv |
| SBBVK2 | Bedingung Sonde betriebsbereit vor Kat, Bank 2  | 28 | tab_Aktiv |
| BM | Zylinder-1 Erkennung | 30 | tab_Erkannt |
| LR | Lambdaregelung | 31 | tab_Aktiv |
| NWSYN | Bedingung Synchronisierung erfolgreich | 32 | tab_synchro |
| STURZ | Bedingung Sturz | 33 | tab_Aktiv |

### DIGITALWERTE

| MNEMONIC | TEXT | INDEX | NAME | 0 | 1 |
| --- | --- | --- | --- | --- | --- |
| B_KL15_ZFE | Status KL 15 aus ZFE ueber CAN | 29 | - | nicht betätigt | betätigt |
| S_KUPP | Kupplungs-Schalter | 32 | - | nicht betätigt | betätigt |
| ES_SST1 | Seitenstützen-Schalter 1 | 33 | - | ausgeklappt | eingeklappt |
| ES_OELNIV | Ölniveau-Schwimmer-Schalter | 34 | - | nicht i.O. | Ölniveau i.O. |
| ES_POEL | Öldruck-Schalter | 35 | - | nicht vorhanden | vorhanden |
| ES_START | Startschalter | 36 | - | nicht betätigt | betätigt |
| S_KL15 | Schalter Kl 15 | 37 | - | nicht betätigt | betätigt |
| ES_KILL | Not-Aus-Schalter | 38 | - | in Betriebsstellung | Not-Aus aktiv |
| B_AKL | Akkustik Klappe | 0 | - | nicht aktiv | aktiv |
| B_SLV1 | Sekundrluft-Ventil | 33 | - | nicht aktiv | aktiv |
| B_TEV | Taktventil Tankentlüftung | 34 | - | nicht aktiv | aktiv |
| B_HSV2 | Lambdasondenheizung vor Kat 2 | 51 | - | nicht aktiv | aktiv |
| B_HSV | Lambdasondenheizung vor Kat 1 | 48 | - | nicht aktiv | aktiv |
| B_ELUE1 | Motorlüfter  | 49 | - | nicht aktiv | aktiv |
| B_EKPBTS | Kraftstoffpumpe | 50 | - | nicht aktiv | aktiv |
| A_ANLASSER | Anlasser-Relais | 54 | - | nicht aktiv | aktiv |
| B_UETMC | Kontrollleuchte Motortemperatur | 55 | - | nicht aktiv | aktiv |
| B_MOTORSTP | Motorstopp | 59 | - | nicht aktiv | aktiv |
| B_FRGANL |  Freigabe Anlasser | 60 | - | nicht aktiv | aktiv |
| A_SCHUTZ | Anlasser Stopp | 62 | - | nicht aktiv | aktiv |
| B_MIL | Motornotlauf  | 63 | - | nicht aktiv | aktiv |
| ES_SST2 | Seitenstützen-Schalter 2 | 39 | - | eingeklappt | ausgeklappt |
| ES_SST | Seitenständer (nach Diagnose) | 25 | - | ausgeklappt | eingeklappt |
| B_FZGM_AENDERN | Eingang Modustaster | 30 | - | nicht betätigt | betätigt |
| B_FZGM_SONDER | Sondermodus | 31 | - | nicht aktiv | aktiv |

### ADCLESENTABELLE

| HEX | IOLI | MNEMONIC | U_FAKTOR | EINH | TYP |
| --- | --- | --- | --- | --- | --- |
| 0x4A | Batteriespannung | UB | 0,0942 | V | byte |
| 0x4B | Spannung Schalthebelsensor | USHS | 0,0048828 | V | word |
| 0x4C | Spannung Sturzsensor | UACL | 0,0048828 | V | word |
| 0x4E | DK-Poti | DKP | 0,001222 | V | word |
| 0x4F | Heißluftmassenmesser | HFM | 0,00977 | V | word |
| 0x50 | Motortemperatur | TMOT | 0,019531 | V | byte |
| 0x51 | Ansauglufttemperatur | TANS | 0,019531 | V | byte |
| 0x53 | Spannungsversorgung E-Lüfter  | ELUE | 0,0942 | V | byte |
| 0x54 | Integrator Wert Klopfsensor 1 | KS1 | 0,019531 | V | byte |
| 0x55 | Integrator Wert Klopfsensor 2 | KS2 | 0,019531 | V | byte |
| 0x56 | Getriebe Schaltwalze | GETRG | 0,019531 | V | byte |
| 0x57 | Kraftstoffdruck | DSK | 0,019531 | V | byte |
| 0x58 | Betriebstrom E-Lüfter | IELUE | 0,0488 | A | word |
| 0x59 | Spannungsversorgung | SYS | 0,0942 | V | byte |
| 0x5A | Betriebstrom 1 | ISYS | 0,00488 | A | word |
| 0x60 | Lambdasonde 1 | LSVK1 | 0,019531 | V | byte |
| 0x61 | Lambdasonde 2 | LSVK2 | 0,019531 | V | byte |
| 0x63 | Temperatur Zylinderkopf links | TZYL1 | 0,019531 | V | byte |
| 0x64 | Temperatur Zylinderkopf rechts | TZYL2 | 0,019531 | V | byte |
| 0x67 | Spannungsversorgung 2 | ZDG | 0,0942 | V | byte |
| 0x68 | Betriebstrom 2 | IZDG | 0,00488 | A | word |
| 0x71 | Spannungsversorgung 3 | EKP | 0,0942 | V | byte |
| 0x72 | Betriebstrom 3 | IEKP | 0,00488 | A | word |

### MESSWERTE

| NR | TEXT | TYP | EINH | NAME | ADD | FAKTOR |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | Einspritzzeit EV | word | msec | te_w | 0 | 0,008 |
| 1 | Lambdaregler 1 | word | - | fr_w | 0 | 3,05176E-05 |
| 2 | Lambdaregler 2 | word | - | fr2_w | 0 | 3,05176E-05 |
| 3 | Fahrzeuggeschwindigkeit  | byte | km/h | vfzg | 0 | 1,25 |
| 4 | Motordrehzahl | word | U/min | nmot_w | 0 | 0,25 |
| 5 | Leerlauf-Solldrehzahl  | byte | U/min | nsol | 0 | 10 |
| 6 | Nockenwellenposition Einlaß | word | - | wnwkwe_w | 0 | 0,1 |
| 7 | Nockenwellenposition Auslaß | word | - | wnwkwa_w | 0 | 0,1 |
| 8 | Ansauglufttemperatur | byte | Grad C | tans | -48 | 0,75 |
| 9 | Motortemperatur | byte | Grad C | tmot | -48 | 0,75 |
| 10 | Temperatur Zylinder 1 | word | Grad C | tmotzyl1_w | -48 | 0,75 |
| 11 | Temperatur Zylinder 2 | word | Grad C | tmotzyl2_w | -48 | 0,75 |
| 12 | Zündwinkel | byte | Grad KW | zwout | -96 | 0,75 |
| 13 | Drosselklappen-Potentiometer | byte | % | wdkba | 0 | 0,39216 |
| 14 | Luftmasse | word | kg/h | mshfm_w | 0 | 0,1 |
| 15 | momentanes inneres Moment | word | % | miist | 0 | 0,0015259 |
| 16 | Spannung Kl. 30 | byte | V | ub | 0 | 0,0942 |
| 17 | Klopfsensor 1 Ref. Pegel | word | V | rkrn_w | 0 | 0,019531 |
| 18 | Klopfsensor 2 Ref. Pegel | word | V | rkrn_w | 0 | 0,019531 |
| 19 | Klopfsensor 3 Ref. Pegel | word | V | - | 0 | 0,019531 |
| 20 | Klopfsensor 4 Ref. Pegel | word | V | - | 0 | 0,019531 |
| 21 | Zündspule 1 bis 4 Schließzeit | word | msec | szout_w | 0 | 0,001 |
| 22 | Fahrstrecke des Fahrzeugs | long | km | kmstand | 0 | 1 |
| 23 | Zeitzähler | long | sec | trmin_w | 0 | 1 |
| 24 | Vorderradgeschwindigkeit | word | km/h | v_vrad | 0 | 0,0625 |
| 25 | Hinterradgeschwindigkeit | word | km/h | v_hrad | 0 | 0,0625 |
| 26 | Leerlaufregler 1 | word | ySteps | st_cur_pos | 0 | 0,1 |
| 27 | Leerlaufregler 2  | word | ySteps | st_cur_pos | 0 | 0,1 |
| 28 | Umgebungsdruck | word | hPa | pu_w | 0 | 0,0390625 |
| 29 | Getriebe-Schaltwalzen-Position | byte | Gang | gangi | 0 | 1 |
| 30 | Kurbelwelleninterrupt Zaehler | word | - | Kwirq | 0 | 1 |
| 31 | Nockenwelleninterrupt Zaehler | word | - | Nwe1_irq | 0 | 1 |
| 32 | Ansteuerposition Schaltsaugrohr | word | % | disa_pwm | 0 | 0,01 |

### FORTTEXTE2

| ORT | MAXTEXT | MINTEXT | SIGTEXT | PLAUSTEXT |
| --- | --- | --- | --- | --- |
| 0x2711 | Kurzschluss Masse, Ub oder Leitungsunterbrechung | - | - | - |
| 0x2718 | - | - | kein Signal | - |
| 0x271A | Offset über Grenzwert Sonde 1 Bank 1 | Langsame Sonde Sonde 1 Bank 1 | Nebenschluß Sonde mit Heizer Sonde 1 Bank 1 | Signal unplausibel Sonde 1 Bank 1 (siehe Umweltbedingung LSUNPSTAT) |
| 0x271B | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x2722 | Offset über Grenzwert Sonde 1 Bank 2 | Langsame Sonde Sonde 1 Bank 2 | Nebenschluß Sonde mit Heizer Sonde 1 Bank 2 | Signal unplausibel Sonde 1 Bank 2 (siehe Umweltbedingung LSUNPSTAT2) |
| 0x2723 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x2736 | Kurzschluss zur Batterie | Kurzschluss zur Masse | - | Kraftstoffdruck unplausibel |
| 0x2740 | Ölstand zu niedrig | - | - | - |
| 0x2751 | Kurzschluss Masse | Leitungsunterbrechung oder Kurzschluss UB | - | - |
| 0x2752 | Kurzschluss Masse | Leitungsunterbrechung oder Kurzschluss UB | - | - |
| 0x2760 | - | Sekundärluftmasse zu gering | - | - |
| 0x2765 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x276B | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x276C | - | Tankentlüftungssystem | - | - |
| 0x276D | - | Tankentlüftungssystem | - | - |
| 0x2772 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x2774 | - | - | Eintrag fehlt | - |
| 0x2778 | - | Kurzschluss zur Masse | - | - |
| 0x2779 | - | - | - | Rechnerüberwachung: RAM |
| 0x277B | - | - | - | Rechnerüberwachung: ROM |
| 0x277C | - | - | - | Rechnerüberwachung: RESET |
| 0x277D | Spannungsschwellwert überschritten | Spannungsschwellwert unterschritten | - | ADC-Fehler, HW-Fehler |
| 0x277F | - | - | Seitenstützenschalter defekt | - |
| 0x2783 | Leitungsunterbrechung oder Kurzschluss UB | Kurzschluss zur Masse | - | Gang unplausibel |
| 0x2784 | Kurzschluss | Leitungsunterbrechung | - | Signal unplausibel |
| 0x2785 | - | - | - | ABS-/ASC-Taster unplausibel |
| 0x2786 | - | - | - | Signal Vorderradgeschwindigkeit unplausibel |
| 0x2787 | - | - | - | Signal Hinterradgeschwindigkeit unplausibel |
| 0x2788 | - | - | fehlendes Signal Fahrzeuggeschwindigkeit | - |
| 0x278A | - | - | Defekt Killschalter | - |
| 0x278B | Kurzschluss nach Minus | Kurzschluss nach Plus oder Leitungsunterbrechung | Motortemperaturschwelle für Lambdaregelungsfreigabe nicht erreicht | Motortemperatursignal unplausibel ggü. Modell |
| 0x278C | Kurzschluss nach Minus | Kurzschluss nach Plus | - | - |
| 0x278D | Kurzschluss nach Minus | Kurzschluss nach Plus oder Leitungsunterbrechung | - | - |
| 0x279D | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27A6 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27A7 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27A8 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27A9 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27AA | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch |  |
| 0x27AB | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch |  |
| 0x27AC | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch |  |
| 0x27AD | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch |  |
| 0x27B4 | Max-Fehler Umgebungsdrucksensor | Min-Fehler Umgebungsdrucksensor | - | Umgebungsdrucksensor unplausibel |
| 0x27B7 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27B8 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x27D9 | Spannung zu hoch | Spannung zu niedrig | - | - |
| 0x27DA | Spannung zu hoch | Spannung zu niedrig | - | - |
| 0x27DB | Spannung zu hoch | Spannung zu niedrig | - | - |
| 0x27E0 | - | - | beide Klopfsensoren defekt | - |
| 0x27E1 | Motor mechanisch zu laut oder KS 1 außerhalb Toleranz (Empfindlichkeit) | elektrischer Fehler KS1 (Wackelkontakt) oder KS locker | - | - |
| 0x27E2 | Motor mechanisch zu laut oder KS 2 außerhalb Toleranz (Empfindlichkeit) | elektrischer Fehler KS2 (Wackelkontakt) oder KS locker | - | - |
| 0x27E3 | Übertemperatur bei CY315 | - | - | - |
| 0x27E4 | Übertemperatur bei CJ945 | - | - | - |
| 0x27E6 | - | - | - | Klopfbaustein defekt |
| 0x27E7 | - | - | - | Klopfbaustein defekt |
| 0x27E8 | - | - | - | Klopfbaustein defekt |
| 0x27EA | - | CAN-Schnittstelle, Timeout KOMBI | kein Signal | Plausibilitätsfehler |
| 0x27EB | - | CAN-Schnittstelle, Timeout ZFE | kein Signal | Plausibilitätsfehler |
| 0x27EC | - | CAN-Schnittstelle, Timeout ABS | kein Signal | Plausibilitätsfehler |
| 0x27ED | Timeout CAN-Botschaft MOD_VEH_ABS_MOTBK | Checksummenfehler CAN-Botschaft MOD_VEH_ABS_MOTBK | Alivefehler CAN-Botschaft MOD_VEH_ABS_MOTBK | - |
| 0x27F9 | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x283D | CAN Baustein im Zustand Passiv | DPRAM CAN- Baustein defekt | - | CAN-Baustein Bus Off oder CAN-Bus defekt |
| 0x2847 | Kurzschluss zur Batterie | Kurzschluss zur Masse | - | Versorgung Drosselklappengeber defekt |
| 0x2848 | oberer Adaptionsgrenzwert überschritten | unterer Adaptionsgrenzwert unterschritten | - | - |
| 0x2849 | - | - | Leitungsunterbrechung am Abgasklappenstellmotor | - |
| 0x284A | - | - | Leitungsunterbrechung am Interferenzrohrklappenstellmotor | - |
| 0x284B | Kurzschluss UBAT | Kurzschluss Masse | Leitungsunterbrechung | - |
| 0x28AA | Kurzschluss zur Batterie | Kurzschluss zur Masse | open load | - |
| 0x28AC | - | - | - | Schalter Klemme 15 defekt |
| 0x28C8 | obere Plausibilitätsschwelle unterschritten(short test) | untere Plausibilitätsschwelle unterschritten(short test) | - |  unplausibles Prüfresultat  erkannt (DKVS Kurztest) |
| 0x28C9 | obere Plausibilitätsschwelle unterschritten(short test) | untere Plausibilitätsschwelle unterschritten(short test) | - |  unplausibles Prüfresultat  erkannt (DKVS Kurztest) |
| 0x28CA | Sicherung System Supply | - | - | - |
| 0x28CB | Sicherung EKP | - | - | - |
| 0x28CC | Sicherung Zuendung | - | - | - |
| 0x28CD | - | - | - | Kurbelwellen-Zahnfehler / Lueckenverlust |
| 0x28CE | - | - | keine /abweichende Nockenwellenflanke | Phasenflanke / Einbaulage auserhalb zulaessiger Toleranz |
| 0x28FA | Kurzschluss zur Batterie | Kurzschluss zur Masse | Kabelbruch | - |
| 0x28FB | Fehler Ringantenne | Fehler CRC in BMSK | Schnittstelle EWS - BMSK gestoert | EWS-Daten unplausibel |
| 0x2904 | Kurzschluss UB  | Kurzschluss Masse | Kabelbruch | - |
| 0x2905 | Kurzschluss UB  | Kurzschluss Masse | Kabelbruch | - |
| 0x2934 | Eintrag fehlt | Eintrag fehlt | - | - |
| 0x2935 | Eintrag fehlt | Eintrag fehlt | - | - |
| 0x2972 | Leerlaufregler Anschlag oben | Leerlaufregler Anschlag unten |  |  |
| 0x2973 | - | Sensorversorgungsspannung n.i.O. | Sensorsignalfehler | CAN Signal gestört |
| 0x2974 | - | - | Schräglagensensor CLU1 Message fehlt | - |
| 0x2975 | - | - | Schräglagensensor CLU2 Message fehlt | - |
| 0x2976 | - | - | Schräglagensensor CLU4 Message fehlt | - |
| 0x4E20 | Fehler Abschaltpfad oder Notlaufpunkt | Fehler Adaption | Fehler DK-Motor | - |
| 0x4E21 | Regelanschlag oben | Regelanschlag unten | - | Abweichung Drosselklappe Ist- zu Sollwert |
| 0x4E22 | Abweichung FWG/DK-Winkel Rohwerte | Abweichung FWG/DK-Winkel adaptierte Werte | - | - |
| 0x4E23 | Vergleichsfehler Rohwerte | Vergleichsfehler adaptierte Werte | - | - |
| 0x4E24 | Wert oberhalb Schwelle fwg1 | Wert unterhalb Schwelle fwg1 | - | - |
| 0x4E25 | Wert oberhalb Schwelle fwg2 | Wert unterhalb Schwelle fwg2 | - | - |
| 0x4E26 | Vergleichsfehler Rohwerte | Vergleichsfehler adaptierte Werte | - | - |
| 0x4E27 | Wert oberhalb Schwelle dkp1 | Wert unterhalb Schwelle dkp1 | - | - |
| 0x4E28 | Wert oberhalb Schwelle dkp2 | Wert unterhalb Schwelle dkp2 | - | - |
| 0x4E2B | Drosselklappengeberüberwachung Ebene 2 | Fahrwertgeberüberwachung Ebene 2 | Überwachung Drehzahlsignal Ebene 2 | - |
| 0x4E2C | Vergleich Drosselklappenwinkel Ebene 2 | Notlaufstufe Ebene 2 | - | - |
| 0x4E2D | keine Fehlerreaktion Ebene 2 | Zündwinkelüberwachung Ebene 2 | - | - |
| 0x4E52 | Fehler Entwicklung Sollwertbegrenzung auf wdkzul_um aktiv | - | - | - |
| 0xFFFF | - | - | - | - |

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | MEAS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UB | 8312F1304A01 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| DKP | 8312F1304E01 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.001222 | 0 | 0 | 0 | V |
| HFM | 8312F1304F01 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.00977 | 0 | 0 | 0 | V |
| TMOT | 8312F1305001 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| TANS | 8312F1305101 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| TZYL1 | 8312F1306301 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| TZYL2 | 8312F1306401 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| KS1 | 8312F1305401 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| KS2 | 8312F1305501 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| GETRG | 8312F1305601 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| DSK | 8312F1305701 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| LSVK1 | 8312F1306001 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| LSVK2 | 8312F1306101 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| SYS | 8312F1305901 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| ISYS | 8312F1305A01 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| ZDG | 8312F1306701 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| IZDG | 8312F1306801 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| EKP | 8312F1307101 | 0 | 0 | 0x00 | 4 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| IEKP | 8312F1307201 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| FR_W | 8312F1224000 | 0 | 0 | 0x00 | 8 | 5 | -- | 0.0030517578125 | -100 | 0 | 0 | % |
| FR2_W | 8312F1224000 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.0030517578125 | -100 | 0 | 0 | % |
| RKAT | 8312F1224004 | 0 | 0 | 0x00 | 6 | 7 | -- | 0.046875 | 0 | 0 | 0 | % |
| RKAT2 | 8312F1224004 | 0 | 0 | 0x00 | 8 | 7 | -- | 0.046875 | 0 | 0 | 0 | % |
| FRA | 8312F1224004 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| FRA2 | 8312F1224004 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| LUTSFI1 | 8312F1224003 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.00390625 | 0 | 0 | 0 | 1/sec^2 |
| LUTSFI2 | 8312F1224003 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.00390625 | 0 | 0 | 0 | 1/sec^2 |
| LUTSFI3 | 8312F1224003 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.00390625 | 0 | 0 | 0 | 1/sec^2 |
| LUTSFI4 | 8312F1224003 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.00390625 | 0 | 0 | 0 | 1/sec^2 |
| SPI | 8312F1305C01 | 0 | 0 | 0x00 | 4 | 5 | -- | 1 | 0 | 0 | 0 | usec |
| EKPS | 8312F130D405 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| EKPE | 8312F130D404 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| NWTESTON | 8312F130D608 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| NWTESTOFF | 8312F130D604 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| NWTESTDATA | 8312F1224000 | 0 | 0 | 0x00 | 4 | 5 | -- | 1 | 0 | 0 | 0 | - |
| SLVTESTON | 8312F130D808 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| SLVTESTOFF | 8312F130D804 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| NMAXLIMON | 8312F130D908 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| NMAXLIMOFF | 8312F130D904 | 0 | 0 | 0x00 | 4 | 1 | -- | 1 | 0 | 0 | 0 | - |
| USHS | 8312F1304B01 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| UACL | 8312F1304C01 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |

### TAB_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht verbaut |
| 1 | verbaut |

### TAB_AKTIV

| WERT | TEXT |
| --- | --- |
| 0 | Nicht aktiv |
| 1 | aktiv |

### TAB_ERKANNT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht erkannt |
| 1 | erkannt |

### TAB_SYNCHRO

| WERT | TEXT |
| --- | --- |
| 0 | NW Notlauf |
| 1 | synchronisiert |

### MESSWERTE2

| MNEMO | TEXT | TYP | EINH | NAME | ADD | FAKTOR |
| --- | --- | --- | --- | --- | --- | --- |
| STP1 | Position Steppermotor 1 | word | % | - | 0 | 0,1 |
| STP2 | Position Steppermotor 2 | word | % | - | 0 | 0,1 |
| VSIKM | Restkilometerstand fuer Ventilspielserviceintervall | word | km | - | 0 | 10 |
| VSIDEL | Anzahl von Loeschungen der VSI-km | byte | - | - | 0 | 1 |
| KMBMSK | interner Kilometerstand der BMSK | word | km | - | 0 | 6 |
| FRPS | gefilterter Wert des Kraftstoffdrucksensors | word | hPa | - | 0 | 0,2 |
| TOEL | Motoroeltemperatur | word | °C | - | -48 | 0,75 |
| AGKL | Position Abgasklappensteller | word | % | - | 0 | 0,01 |
| IFRKL | Position Interferenzrohrklappensteller | word | % | - | 0 | 0,01 |
| PHIOUT | Schräglagenwinkel | word | Grad | - | -1440 | 0,043945 |
| FWG | Fahrwertgeber | word | % | - | 0 | 0,001526 |
| WDKS | Sollwert Drosselklappenwinkel | word | % | - | 0 | 0,024414 |
| DKP1R | Rohwert Drosselklappenwinkel Kanal 1 | word | % | - | 0 | 0,01 |
| DKP2R | Rohwert Drosselklappenwinkel Kanal 2 | word | % | - | 0 | 0,01 |
| FWG1R | Rohwert Fahrwertgeber Kanal 1 | word | % | - | 0 | 0,01 |
| FWG2R | Rohwert Fahrwertgeber Kanal 2 | word | % | - | 0 | 0,01 |
| KTDKM | Ansteuerung Drosselklappenmotor (PWM) | word | % | - | -328 | 0,01 |
| DKDISSK | Drosselklappenabschaltung bei SK Fehlern | byte | - | - | - | 1 |
| STDKREG | Statusbyte Drosselklappenregelung | byte | - | - | - | 1 |
| DREHRATE1 | Drehrate 1 der Sensorbox | word | Grad/s | - | -163,84 | 0,005 |
| DREHRATE2 | Drehrate 2 der Sensorbox | word | Grad/s | - | -163,84 | 0,005 |
| BESCHLEUNIGUNG1 | Beschleunigung 1 der Sensorbox | word | g | - | -4,1768 | 0,0001275 |
| BESCHLEUNIGUNG2 | Beschleunigung 2 der Sensorbox | word | g | - | -4,1768 | 0,0001275 |

### TAB_ASCWERTE

| MNEMO | TEXT | TYP | EINHEIT | NAME | ADD | FAKTOR | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASCACTCTR | Dauer der ASC-Regelungen | long | s | ascActCtr | 0 | 0,01 |  |  |  |  |  |  |  |  |  |
| ASCINTCTR | mittlere Intensität/Momentrücknahme der ASC-Regelungen | long | % | - | 0 | 1 |  |  |  |  |  |  |  |  |  |
| ASCSTATUS | aktueller Status der ASC-Funktion | byte | - | ascStatus | 0 | 1 | RESERVIERT | KOMFORT_STANDBY | GS_STANDBY | KEINE_FREIGABE | KEINE_FREIGABE_GS | KOMFORT_AKTIV | GS_AKTIV | AUS | FEHLER |
| ASCMODUS | gewählter Modus der ASC-Funktion | byte | - | ascModus | 0 | 1 |  | KOMFORT | GS |  |  |  |  | AUS |  |
| ES_ASC | ASC-Taster | byte | - | ES_asc_tst | 0 | 1 | ASC-Taster nicht betätigt | ASC-Taster betätigt | NOT-AUS aktiv |  |  |  |  |  |  |
| RADCOR | gesamte Radiuskorrektur der Reifenradiusadaption | word | mm | radcor | 0 | 0,061035 |  |  |  |  |  |  |  |  |  |

### TAB_DSLV_STATI

| MNEMO | TEXT | TYP | EINHEIT | NAME | 0 | 1 |
| --- | --- | --- | --- | --- | --- | --- |
| B_ANFSLV | Bedingung Anforderung SLV-Diagnose | bool | - | B_anfslv | nicht erfüllt | erfüllt |
| B_DSLVE | Bedingung Durchführung SLV-Diagnose | bool | - | B_dslve | nicht erfüllt | erfüllt |
| B_DSLVA | Bedingung Abbruch SLV-Diagnose | bool | - | B_dslva | nicht erfüllt | erfüllt |
| B_ADSLV | Bedingung SLV-Diagnose abgeschlossen | bool | - | B_adslv | nicht erfüllt | erfüllt |

### TAB_STELLERSTATI

| BITPOSITION | STATUSTEXT |
| --- | --- |
| 1 | keine Klappenverstellung aufgrund Unterspannung |
| 2 | keine PWM-Rückmeldung des Stellmotors, elektrisch nicht angeschlossen |
| 3 | elektrischer interner Fehler |
| 4 | Leitungsunterbrechung PWM an Stellmotor |
| 5 | mechanischer Fehler des Systems |

### TAB_BITS

| BITPOSITION | MASK |
| --- | --- |
| 0 | 0x01 |
| 1 | 0x02 |
| 2 | 0x04 |
| 3 | 0x08 |
| 4 | 0x10 |
| 5 | 0x20 |
| 6 | 0x40 |
| 7 | 0x80 |

### TAB_VOLLSTAENDIG

| WERT | TEXT |
| --- | --- |
| 0 | unvollständig |
| 1 | vollständig |

### BAUTEILANSTEUERUNG_EGAS

| MNEMO | TEXT | IOLI | TYP | PARAMETER | FAKTOR1 | EINHEIT1 | PARTYP1 | FAKTOR2 | EINHEIT2 | PARTYP2 | FAKTOR3 | EINHEIT3 | PARTYP3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DKM | Ansteuerung Drosselklappenmotor | 0xE0 | 0 | 3 | 100 | % | 6 | 100 | % | 6 | 0,65536 | %/s | 4 |
| WDKS | Vorgabe Sollwert Lageregelung | 0xE1 | 0 | 3 | 40,959375 | % | 4 | 40,959375 | % | 4 | 0,65536 | %/s | 4 |

### TAB_FAHRZEUGMODUS

| WERT | TEXT |
| --- | --- |
| 0 | kein Modus |
| 1 | RAIN |
| 2 | SPORT |
| 3 | RACE |
| 4 | SLICK |

### TAB_DEAKTIVIERT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht deaktiviert |
| 1 | Deaktiviert |

### TAB_AKTIVIERT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht aktiviert |
| 1 | Aktiviert |
