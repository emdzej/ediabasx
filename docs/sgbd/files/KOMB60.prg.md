# KOMB60.prg

## General

|  |  |
| --- | --- |
| File | KOMB60.prg |
| Type | PRG |
| Jobs | 129 |
| Tables | 28 |
| Origin | BMW TI-431 Nau |
| Revision | 3.007 |
| Author | Eurospace EE-42 Kugelmann, BMW EE-42 Cogiel, Eurospace EE-42 Kuppe, BMW TI-431 Nau |
| ECU Comment | SGBD fuer Kombiinstrument E60 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E60 |  |  |
| ORIGIN | string | BMW TI-431 Nau |  |  |
| REVISION | string | 3.007 |  |  |
| AUTHOR | string | Eurospace EE-42 Kugelmann, BMW EE-42 Cogiel, Eurospace EE-42 Kuppe, BMW TI-431 Nau |  |  |
| COMMENT | string | SGBD fuer Kombiinstrument E60 |  |  |
| PACKAGE | string | 1.31 |  |  |
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

### CBS_INFO

Ausgabe der CBS-Version

_No arguments._

### CBS_DATEN_LESEN

CBS Daten auslesen (fuer CBS Version 1-3) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS Version 1-3) KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BOS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| BOS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, keine Aenderung: 31 Defaultwert: 31 |
| BOS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter fuer Monat, keine Aenderung: 255 Defaultwert: 255 |
| BOS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine Aenderung: 255 Defaultwert: 255 |

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

### STEUERGERAETE_RESET_DELAY

Seuergeraete reset mit Delay ausloesen KWP2000: $11 ECUReset .        $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT bzw. Info zum Argument DELAY.

| Name | Type | Description |
| --- | --- | --- |
| DELAY | long | Anzahl zu wartender Sekunden Maximalwert: 255 (bzw. 256) Ohne Angabe: keine Wartezeit Wird als Delayzeit 256 angegeben, wird die notwendige Wartezeit aus dem Kombi ausgelesen. |

### SG_RESET_OHNE_UHR_DATUM

Steuergeraete Reset ausloesen Uhrzeit und Datum bleibt dabei im Kombi erhalten KWP2000: $11, $FA

_No arguments._

### UHRZEIT_DATUM_STELLEN

Uhrzeit und Datum stellen . die Daten werden vom PC bzw. Tester uebernommen KWP2000: $3B,$8E

_No arguments._

### CODIERDATEN_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | unsigned int | HEX-Wert muss folgendermassen eingegeben werden: 0x"Wert" Werte im Bereich 0x3000...0x3FFF" |

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte  21+Anzahl Daten: ETX (0x03) |

### STEUERN_LEUCHTEN

Kontrolleuchten im Kombi ansteuern Fuer Service-und Testzwecke Uebergeben werden 4 Argument im Bereich von 0x00-0xFF Dieser Argumente definieren die Leuchten Im Kombi LH Teil 3.2 Kapitel "Diagnose" sind die Uebergabeparameter des Diagnosebefehls $30 ausfuehrlich dokumentiert KWP2000: $30 $27 $06 InputOutputControlByLocalIdentifier . Hinweise: - gleichzeitig duerfen nicht mehr als 16 Leuchten . angesteuert werden! - DUO-LEDs duerfen nicht zweifarbig angesteuert werden - KL Blinker koennen nicht angesteuert werden

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |

### STEUERN_LEUCHTEN_BLAU

Blaue Leuchten im Kombi ansteuern Fuer Service-und Testzwecke . KWP2000: $30 $27 $06 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_LEUCHTEN_GELB

Gelbe Leuchten im Kombi ansteuern Fuer Service-und Testzwecke Ansteuerung inklusive Displaybeleuchtung KWP2000: $30 $27 $06 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_LEUCHTEN_GRUEN

Gruene Leuchten im Kombi ansteuern Fuer Service-und Testzwecke Zusaetzlich mit KL fuer Blinker . KWP2000: $30 $27 $06 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_LEUCHTEN_ORANGE

Gelbe Leuchten im Kombi ansteuern Fuer Service-und Testzwecke Ansteuerung inklusive Displaybeleuchtung KWP2000: $30 $27 $06 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_LEUCHTEN_ROT

Rote Leuchten im Kombi ansteuern Fuer Service-und Testzwecke Ansteuerung inklusive Displaybeleuchtung KWP2000: $30 $27 $06 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_LEUCHTE_AUS

Wenn vorher der Job STEUERN_LEUCHTEN aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_LEUCHTE_AUS gibt die Kontrolle wieder an das Kombi zurueck HINWEIS: loescht nach Beendigung auch den Blinker . (wird bei _LEUCHTEN_GRUEN mit angesteuert!)  KWP2000: $30 $27 $00 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_BLINKER

Blinker ansteuern, fuer Service-und Testzwecke Es muessen immer alle zwei Argumente uebergeben werden Dieser Jobs muss durch STEUERN_BLINKER_AUS beendet werden KWP2000: $30 $2B  Beschreibung der Arumente: BYTE 0: 1 = Normalblinken .       2 = Defektblinken .       3 = Doppelblinken .       4 = Blinker statisch ein  BYTE 1: 0 = Beide Blinker aus .       1 = Linker Blinker .       2 = Rechter Blinker .       3 = Beide Blinker

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Steuert Blinkfrequenz |
| BYTE1 | int | links, rechts, aus, beide |

### STEUERN_BLINKER_AUS

Wenn vorher der Job STEUERN_BLINKER aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_BLINKER_ENDE gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $2B, $00

_No arguments._

### STEUERN_SELBSTTEST_EIN

Schaltet den Selbttest ein Beschreibung der Arumente BYTE 0: 0  =  0000 0000   Test aus .       1  =  0000 0001   Nur 1 Durchlauf .       2  =  0000 0010   Dauerlauf KWP2000: $31, $23

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Test ein/aus, 1x oder Dauerlauf |

### STEUERN_SELBSTTEST_AUS

Schaltet den Selbsttest wieder aus KWP2000: $31, $23, $00

_No arguments._

### STEUERN_TACHO

Tacho auf beliebige Geschwindigkeit (0..340) setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Geschwindigkeitsvorgabe in km/h (0..Tachoendwert) |

### STEUERN_TACHO_AUS

Schaltet den Tacho-Vorgabemodus wieder aus KWP2000: $30, $20, $00

_No arguments._

### STEUERN_DREHZAHL

DrehZahlMesser in 1/min vorgeben KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Drehzahlvorgabe in 1/min . Minimaldrehzahl = 0 . Maximaldrehzahl wird aus Kombi bestimmt |

### STEUERN_DREHZAHL_AUS

Schaltet den DZM-Vorgabemodus wieder aus KWP2000: $30, $21, $00

_No arguments._

### STEUERN_KVA

Momentanverbrauch in L/100km vorgeben KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Verbrauch in l/100km |

### STEUERN_KVA_AUS

Schaltet den KVA-Vorgabemodus wieder aus KWP2000: $30, $23, $00

_No arguments._

### STEUERN_OELTEMP

Oeltemperatur in Grad Celsius vorgeben KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Oeltemperatur in Grad C |

### STEUERN_OELTEMP_AUS

Schaltet den Oeltemperatur-Vorgabemodus wieder aus KWP2000: $30, $23, $00

_No arguments._

### STEUERN_TANK

Tankinhalt in % vorgeben KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Tankinhalt in %  Wertebereich: 0...100 |

### STEUERN_TANK_AUS

Schaltet den Tank-Vorgabemodus wieder aus KWP2000: $30, $22, $00

_No arguments._

### STEUERN_ACC_ZEIGER

Geschwindigkeit fuer ACC-Zeiger in km/h vorgeben KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Geschwindigkeit in km/h |

### STEUERN_ACC_ZEIGER_AUS

Schaltet den ACC-Zeiger-Vorgabemodus wieder aus KWP2000: $30, $24, $00

_No arguments._

### STEUERN_VWF

Drehzahl fuer DZM-Vorwarnfeld-Zeiger in 1/min vorgeben KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Drehzahl in 1/min . Minimal- und Maximalwert wird aus Kombi bestimmt |

### STEUERN_VWF_AUS

Schaltet den VWF-Zeiger-Vorgabemodus wieder aus KWP2000: $30, $25, $00

_No arguments._

### STATUS_TANKINHALT

Literwerte der Tank-Hebelgeber 1 und 2, Summenwert ungedaempft und gedaempft sowie Tankphase KWP2000: $21 ReadDataByLocalIdentifier .        $0A Tankinhalt

_No arguments._

### STATUS_WASCHWASSER

Digitalen Eingang Waschwasser lesen Fuer Service-und Testzwecke KWP2000: $21 ReadDataByLocalIdentifier .        $23 Waschwasser

_No arguments._

### STATUS_KUEHLMITTELSTAND

Digitalen Eingang Kuehlmittelstand lesen Fuer Service-und Testzwecke KWP2000: $21 ReadDataByLocalIdentifier .        $24 Kuehlmittel

_No arguments._

### STATUS_PARKBREMSE

Zustand der Parkbremse lesen Fuer Service-und Testzwecke KWP2000: $21 ReadDataByLocalIdentifier .        $25 Parkbremse

_No arguments._

### STATUS_A_TEMP_LESEN

A-Temp, Anzeige und Rohwert lesen Fuer Service-und Testzwecke KWP2000: $21 ReadDataByLocalIdentifier .        $22 A-Temp

_No arguments._

### GWSZ_RESET

GWSZ Korrektur-Offset aendern

_No arguments._

### STATUS_ABSOLUTER_GWSZ

liefert den absoluten GWSZ KWP2000 0x21, 0x0B

_No arguments._

### STATUS_GWSZ_OFFSET

liefert den GWSZ-Offset KWP2000 0x21, 0x17

_No arguments._

### STATUS_GWSZ_ANZEIGE

liefert den angezeigeten GWSZ KWP2000 0x21, 0x0B KWP2000 0x21, 0x17

_No arguments._

### LESEN_AKTUELLES_UIF

aktuelles UIF lesen KWP2000: $1A ReadECUIdentification .        $86 currentUIFDataTable

_No arguments._

### LESEN_HW_NUMMER

HW-Nummer lesen KWP2000: $1A ReadECUIdentification .        $87 physicalECUHardwareNumber

_No arguments._

### LESEN_EEPROM_DATENINDEX

EEPROM-Datenindex lesen KWP2000: $1A ReadECUIdentification .        $8A (systemSupplierSpecific) E60: EEPROM-Datenindex

_No arguments._

### LESEN_VARIANTENINDEX

Variantenindex lesen KWP2000: $1A ReadECUIdentification .        $97 SystemName

_No arguments._

### LESEN_HW_AENDERUNGSINDEX

Hardware-Aenderungsindex lesen KWP2000: $1A ReadECUIdentification .        $9A vehicleManufacturerECUHardwareVersionNumber

_No arguments._

### LESEN_DIAGNOSEINDEX

Diagnoseindex lesen KWP2000: $1A ReadECUIdentification .        $9C vehicleManufacturerDiagnosticIndex

_No arguments._

### LESEN_FERTIGUNGSDATUM

Fertigungsdatum lesen KWP2000: $1A ReadECUIdentification .        $9D DateofECUManufacturing

_No arguments._

### LESEN_LIEFEREANTENNUMMER

Lieferantennummer lesen KWP2000: $1A ReadECUIdentification .        $9E systemSupplierIndex

_No arguments._

### LESEN_SW_LAYER_VERSION

SW-Layer Versionen lesen KWP2000: $1A ReadECUIdentification .        $9F vehicleManufECUSoftwareLayerVersionNumbers

_No arguments._

### STATUS_TACHO_LESEN

gibt die Anzeigegeschwindigleit aus (Einheit km/h) KWP2000: $21 ReadDataByLocalIdentifier .        $05 Geschwindigkeit

_No arguments._

### STATUS_DREHZAHL_LESEN

gibt die Motordrehzahl aus (Einheit Umdrehungen/min) KWP2000: $21 ReadDataByLocalIdentifier .        $06 Drehzahl lesen

_No arguments._

### STATUS_LENKSTOCK

gibt den Status des Lenkstockschalters aus KWP2000: $21 ReadDataByLocalIdentifier .        $07 Status Lenkstockschalter

_No arguments._

### STATUS_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset auslesen KWP2000: $21 ReadDataByLocalIdentifier .        $0C Kl.30 Stundenzaehler Offset

_No arguments._

### STATUS_KL30_H_ZAEHLER

Klemme 30 Stundenzaehler auslesen KWP2000: $21 ReadDataByLocalIdentifier .        $0D Kl.30 Stundenzaehler

_No arguments._

### CALC_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset ab dem momentanen Datum berechnen Dieser Job wird nur in der BMW-Fertigung im Rahmen der Codierung aufgerufen Hinweis: Schaltjahresberechnung falsch ab 2100

_No arguments._

### SET_KL30_OFFSET2AKT_DATE

Berechnet den Klemme 30 Stundenzaehler Offset ab dem momentanen Datum und schreibt diesen in das EEPROM des KOMBI CBS funtioniert nur richtig, wenn der KL30_H_OFFSET richtig gesetzt ist. Daher sollte der Job immer aufgerufen werden wenn das Fahrzeug an den Taster angeschlossen wird KWP2000: $3B, $0C Hinweis: Schaltjahresberechnung falsch ab 2100

_No arguments._

### STATUS_DATE_LAST_CODING_SESSION

Datum, gibt an, wann das Kombi zum letzten mal codiert wurde (bei BMW) KWP2000: $21, $08

_No arguments._

### STATUS_KLEMMEN

Klemmenstati auslesen KWP2000: $21, $0E

_No arguments._

### C_FG_LESEN2

Fahrgestellnummer lesen modifizierter Standard Codierjob (andere Diagnosefunktion) KWP2000: $21 ReadDataByLocalIdentifier .        $90 Vehicle Identification Number Modus  : Default

_No arguments._

### STATUS_KLEMMENSPANNUNG

liefert Wert der Kombi-Versorgungsspannung KWP2000: $21 ReadDataByLocalIdentifier .        $21 Klemmenspannung

_No arguments._

### STATUS_CHECKCONTROL_LESEN

gibt die ID Nummern der momentan aktiven CC-Meldungen aus KWP2000: $21, $09

_No arguments._

### STATUS_BETRIEBSDATEN_HEADER

gibt den KM Stand aus CBS Betriebsdaten Header aus KWP2000 $21 $B0

_No arguments._

### STATUS_BETRIEBSDATEN_LESEN

liest ausgewaehlte Daten aus CBS Betriebsdaten aus KWP2000 $21 $B1 bis $BF

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | CBS ID 1..30h |

### STATUS_ZEITSTRAHL

gibt CBS Daten fuer den Annahmerechner in der Reihenfolge Header CBS Umpfaenge, CC Umpfaenge KWP2000 $21 $C0/$C1/$C2 Fuer die exakte Beschreiung der CBS Zeitstrahldaten siehe LH Teil 3 Kapitel Diagnose, Beschreibung zu $21

_No arguments._

### STEUERN_CBS_KM_PER_YEAR

Vorgabe Km/Jahr fuer CBS KWP2000 $3B $16

| Name | Type | Description |
| --- | --- | --- |
| KM_VALUE | int | CBS Kilometervorgabe in Aufloesung 1000km Gueltige Werte: 0... 255 |

### STEUERN_BOS_CODIERUNG

BOS Codierung fuer alle einzelnen BOS Groessen. Fuer CBS3-Layout.

| Name | Type | Description |
| --- | --- | --- |
| BOS_ID | int | CBS ID 1..30h |
| BOS_CODIERUNG | int | Codierung passend zu BOS_ID, 0=Anzeige, 1=Sperre, 2=Erprobung |

### STEUERN_CBS_SC_CODIERUNG

CBS Servicecall Enable/Disable Codierung. Fuer CBS3-Layout.

| Name | Type | Description |
| --- | --- | --- |
| CBS_ID | int | CBS ID 1..30h |
| CBS_CODIERUNG | int | Codierung passend zu CBS_ID, 0=SC inaktiv, 1=SC Aktiv |

### STATUS_CBS_WOCHEN_KM

gibt die Daten des KM pro Woche-Algorithmus aus CBS Betriebsdaten Header aus KWP2000 $21 $B0

_No arguments._

### MOTORTYP

im Kombi codierten Motortyp ermitteln KWP2000: $22 ReadDataByCommonIdentifier Job ermittelt Motortyp aus Kombi

_No arguments._

### STEUERN_TESTBITMAP

Testbitmap im Display darstellen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BILD | int | Bildauswahl (0...10) .  0 = Schachbrett .  1 = Schachbrett invers .  2 = Graustufenverlauf .  3 = Graustufenverlauf integral .  4 = Positionsrahmen .  5 = Zeilen .  6 = Spalten .  7 = Graustufe 3 (hell) .  8 = Graustufe 2 .  9 = Graustufe 1 . 10 = Graustufe 0 (dunkel |

### STEUERN_TESTBITMAP_AUS

Testbitmap im Display wieder abschalten KWP2000: $30 InputOutputControlByLocalIdentifier

_No arguments._

### STATUS_CHECKCONTROL_HISTORY

CC-Meldungsspeicher aus Kombi lesen KWP2000: $21, $0F

_No arguments._

### STATUS_BOS_CODIERUNG

BOS Codierung fuer alle einzelnen BOS Groessen. Fuer CBS3-Layout.

| Name | Type | Description |
| --- | --- | --- |
| BOS_ID | int | BOS ID 1..30h |

### STATUS_GLOBAL_KM

liest den GWSZ aus KI RAM, EEPROM & CAS

_No arguments._

### STATUS_KI

Liest Block.

_No arguments._

### LESEN_RINGBUF

Liest den Ringbuffer Inhalt

_No arguments._

### RINGBUF_INIT

Initialisiert den Ringbuffer

_No arguments._

### LESEN_CODIERBLOCK

Codierdatenblock aus EEPROM auslesen

| Name | Type | Description |
| --- | --- | --- |
| HIGHBYTE | int | Highbyte der Blocknummer Eingabe als HEX: 0xFF |
| LOWBYTE | int | Lowbyte der Blocknummer Eingabe als HEX: 0xFF |

### CSUMBL_3001

Checksumme in Block 3001 berechnen

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
| 0x76 | CEL |
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

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelag vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x06 | Br_h | Bremsbelag hinten |
| 0x07 | CSF | Dieselpartikelfilter |
| 0x08 | Batt | Batterie |
| 0x09 | VTG | Verteilergetriebeoel |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x13 | H2 | H2-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x16 | DAD | Additiv fuer Partikelfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | DATEN_INKONSISTENT |
| 0x02 | ERROR_ANZAHL_ARGUMENTE |
| 0x03 | ERROR_BEREICH_ARGUMENTE |
| 0x04 | ERROR_ARGUMENT |
| 0x05 | ERROR_ZEIGER_NICHT_VORHANDEN |
| 0x06 | ERROR_PARAMETER_FALSCH |
| 0x07 | ERROR_PARAMETER_CODIERUNG_FALSCH |
| 0x08 | ERROR_PARAMETER_ID_FALSCH |
| 0x09 | ERROR_SW_VERSION |
| 0x0A | ERROR_EEPROM_DATEN |
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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9317 | 0x01 | 0x09 | - | - |
| 0x931E | 0x01 | 0x09 | - | - |
| 0xA3AA | 0x01 | 0x0D | - | - |
| 0xA3AB | 0x01 | 0x0C | - | - |
| 0xA3AD | 0x01 | 0x0B | - | - |
| 0xA3B3 | 0x01 | 0x0E | - | - |
| 0xA3B6 | 0x10 | - | - | - |
| 0xA3B9 | 0x01 | 0x0B | - | - |
| 0xA3BC | 0x1A | - | - | - |
| 0xA3BD | 0x01 | 0x0B | - | - |
| 0xA548 | 0x01 | 0x0B | - | - |
| 0xA54D | 0x01 | 0x0B | - | - |
| 0xA54E | 0x01 | 0x0B | - | - |
| 0xA54F | 0x01 | 0x0B | - | - |
| default | 0x01 | 0xFE | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | BORDNETZSPANNUNG | VOLT | - | u c | - | 1 | 10 | 0 |
| 0x09 | Fehlerschwere | 0-n | - | 0x0F | KRIT_LST | - | - | - |
| 0x0A | Botschaftenfehler | 0-n | - | 0xFF | ID_LST | - | - | - |
| 0x0B | Botschaftenfehler | 0-n | - | 0xFF | AL_ID_LST | - | - | - |
| 0x0C | Botschaftenfehler | 0-n | - | 0xFF | AL_ID_CS_LST | - | - | - |
| 0x0D | Botschaftenfehler | 0-n | - | 0xFF | AL_ID_KO_LST | - | - | - |
| 0x0E | Botschaftenfehler | 0-n | - | 0xFF | AL_ID_SARS_LST | - | - | - |
| 0x10 | Fehler RDA | 0-n | h | 0xFFFF | RDA_LST | - | - | - |
| 0x1A | Anfrage unbeantwortet | 0-n | h | 0xFFFF | INQ_LST | - | - | - |
| 0xFE | OHNE BEDEUTUNG | 1 | - | u c | - | 1 | 1 | 0 |
| 0xXY | UNBEKANNTE UW | 1 | - | s l | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### INQ_LST

| WERT | UWTEXT |
| --- | --- |
| 570 | Status Funkschluessel |
| 752 | Status Klima Standfunktion |
| 759 | Einheiten |
| 787 | Status Service Call Teleservice |
| 822 | Anzeige CC-Meldung |
| 860 | Status Bordcomputer |
| 864 | Daten Bordcomputer |
| 896 | Fahrgestellnummer |
| 897 | Elektronischer Oelmessstab |
| 904 | Fahrzeugtyp |
| 65535 | Signal ungueltig |
| xy | Eintrag unplausibel |

### RDA_LST

| WERT | UWTEXT |
| --- | --- |
| 0x0001 | GWSZ |
| 0x0002 | ZUENDKERZEN |
| 0x0004 | SICHTPRUEFUNG |
| 0x0008 | BREMSFLUESSIGKEIT |
| 0x0010 | KUEHLWASSER |
| 0x0020 | HU |
| 0x0040 | AU |
| 0x0080 | INTERVALL VERKUERZUNG |
| 0x0100 | INTERVALL VERKUERZUNG |
| xy | Eintrag unplausibel |

### KRIT_LST

| WERT | UWTEXT |
| --- | --- |
| 0x0 | kritischer Fehler |
| 0x1 | unkritischer Fehler |
| xy | Eintrag unplausibel |

### ID_LST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | keine ID |
| xy | Eintrag unplausibel |

### AL_ID_LST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | keine ID |
| 0x02 | ALIVE Fehler |
| xy | Eintrag unplausibel |

### AL_ID_SARS_LST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | keine ID |
| 0x02 | ALIVE Fehler Sicherheitssystem |
| 0x04 | ALIVE Fehler ARS |
| xy | Eintrag unplausibel |

### AL_ID_KO_LST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | keine ID |
| 0x02 | ALIVE Fehler |
| 0x04 | Komplement Fehler |
| 0x08 | Konsistenzfehler |
| xy | Eintrag unplausibel |

### AL_ID_CS_LST

| WERT | UWTEXT |
| --- | --- |
| 0x01 | keine ID |
| 0x02 | ALIVE Fehler |
| 0x04 | Checksummen Fehler |
| 0x08 | Signalfehler |
| xy | Eintrag unplausibel |

### RINGBUF_CODES

| WERT | TEXT |
| --- | --- |
| 0xF100 | Normal reset |
| 0xE101 | Reset without clock |
| 0xD102 | Watchdog reset |
| 0xE401 | Stack size 75 |
| 0xE301 | Stack size 90 |
| 0xC103 | Power on reset |
| 0xB104 | HW standby reset |
| 0xA105 | External pin reset |
| 0x9106 | Reset-bit reset |
| 0xF200 | Power fail |
| 0xF500 | Read length overflow |
| 0xE501 | Write length overflow |
| 0xD502 | ODO invalid |
| 0xC503 | Application length error |
| 0xB504 | Start address out of range |
| 0xA505 | Write 1st verify fail |
| 0x9506 | Write max verify fail |
| 0x8007 | Address error ID 0 |
| 0x8207 | Size error ID 0 |
| 0x8407 | Content error ID 0 |
| 0xF600 | Read command from TST error |
| 0xE601 | Write command from TST error |
| 0xD602 | Read for TST error |
| 0xC603 | Write for TST error |
| 0xB604 | CC message 60 set by error |
| xy | unbekannter Eintrag |
