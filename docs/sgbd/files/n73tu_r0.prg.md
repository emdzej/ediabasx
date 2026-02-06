# n73tu_r0.prg

## General

|  |  |
| --- | --- |
| File | n73tu_r0.prg |
| Type | PRG |
| Jobs | 193 |
| Tables | 38 |
| Origin | BMWAG EA-740 Markus_Lorch |
| Revision | 1.015 |
| Author | BMW EA-41 Roth, ValleyForge-T.I.S. EA-41 Wieser, P+Z EA-740 Ber |
| ECU Comment | SGBD fuer Master-SG MED9.2.2 (PST 744AJ0AX) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MED9.2.2 fuer NG-Motoren  |  |  |
| ORIGIN | string | BMWAG EA-740 Markus_Lorch |  |  |
| REVISION | string | 1.015 |  |  |
| AUTHOR | string | BMW EA-41 Roth, ValleyForge-T.I.S. EA-41 Wieser, P+Z EA-740 Ber |  |  |
| COMMENT | string | SGBD fuer Master-SG MED9.2.2 (PST 744AJ0AX) |  |  |
| PACKAGE | string | 1.62 |  |  |
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
| BOS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb, H2 Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| BOS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
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

### DATA_ID_LESEN

Auslesen der Data-ID (PST+DS) des SG

_No arguments._

### IDENT_AIF

(1) Auslesen der Identdaten mit KWP2000: $1A ReadECUIdentification (2) Auslesen des Anwender Informations Feldes mit KWP2000: $23 ReadMemoryByAddress (3) =Standard Flashjob

_No arguments._

### FS_LESEN_LANG

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | Eingabe Fehlerortnummer des auszulesenden Fehlers Eingabe in hex- oder dez-Format |

### FS_HEX_LESEN

Fehlerspeicher auslesen als Hex Dump

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | Eingabe Fehlerortnummer des auszulesenden Fehlers Eingabe in hex- oder dez-Format |

### STEUERN_E_LUEFTER

Stellgliedansteuerung E-Luefter

| Name | Type | Description |
| --- | --- | --- |
| TASTRATE | int | Eingabe Ansteuerverhältnis (0%...100%) |

### STEUERN_E_LUEFTER_AUS

Stop Stellgliedansteuerung E-Luefter

_No arguments._

### STEUERN_KFK

Stellgliedansteuerung Kennfeldkühlung

_No arguments._

### STEUERN_KFK_AUS

Stop Stellgliedansteuerung Kennfeldkühlung

_No arguments._

### STEUERN_EKP

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_EKP_AUS

Stellgliedansteuerung EKP stoppen

_No arguments._

### STEUERN_DMTLP

Stellgliedansteuerung DMTL-Pumpe

_No arguments._

### STEUERN_DMTLP_AUS

Stop Stellgliedansteuerung DMTL-Pumpe

_No arguments._

### STEUERN_DMTLV

Stellgliedansteuerung DMTL-Ventil

_No arguments._

### STEUERN_DMTLV_AUS

Stop Stellgliedansteuerung DMTL-Ventil

_No arguments._

### STEUERN_DMTLH

Stellgliedansteuerung DMTL-Heizung

_No arguments._

### STEUERN_DMTLH_AUS

Stop Stellgliedansteuerung DMTL-Heizung

_No arguments._

### STEUERN_HLS1

Stellgliedansteuerung Lambdasondenheizung 1 (LS vor Kat)

_No arguments._

### STEUERN_HLS1_AUS

Stop Stellgliedansteuerung Lambdasondenheizung 1 (LS vor Kat)

_No arguments._

### STEUERN_HLS2

Stellgliedansteuerung Lambdasondenheizung 1 (LS hinter Kat)

_No arguments._

### STEUERN_HLS2_AUS

Stop Stellgliedansteuerung Lambdasondenheizung 2 (LS hinter Kat)

_No arguments._

### STEUERN_RBVE

Stellgliedansteuerung Rücklaufbelüftungsventil

_No arguments._

### STEUERN_RBVE_AUS

Stellgliedansteuerung Rücklaufbelüftungsventil

_No arguments._

### STEUERN_EBL

Stellgliedansteuerung E-Box-Lüfter

_No arguments._

### STEUERN_EBL_AUS

Stop Stellgliedansteuerung E-Box-Lüfter

_No arguments._

### STEUERN_AGK

Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_AGK_AUS

Stop Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_AGK_INV

Stellgliedansteuerung Abgasklappe invertiert

_No arguments._

### STEUERN_AGK_INV_AUS

Stop invertierte Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_ANSKL

Stellgliedansteuerung Ansaugklappe

_No arguments._

### STEUERN_ANSKL_AUS

Stop Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_RAVE

Stellgliedansteuerung Rücklaufabsperrventil

_No arguments._

### STEUERN_RAVE_AUS

Stop Stellgliedansteuerung Rücklaufabsperrventil

_No arguments._

### STEUERN_TEV

Stellgliedansteuerung Tankentlüftungsventil

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERRATE | int | Tastverhältnis (0%...100%) |

### STEUERN_TEV_AUS

Stop Stellgliedansteuerung Tankentlüftungsventil

_No arguments._

### STEUERN_VVT

Stellgliedansteuerung VVT Für die VVT-Ansteuerung gibt es 2 Möglichkeiten: (1) Anst. durch Verstellung der Excenterwelle auf einen vorgegebenen Winkel (2) Anst. durch Fahren einer Rampe von Position f. LL -> Maxhub -> LL

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | -> Bei Verstellung über Winkel => WINKEL = Vorgabewert (0..180) / RAMPE = 0 -> Bei Verstellung über Rampe => WINKEL = beliebig wählbar (wird eh nicht ausgewertet) RAMPE = beliebig außer '0' wählbar, da eine fest definierte Rampe gefahren wird |
| RAMPE | int | -> Bei Verstellung über Winkel => WINKEL = Vorgabewert (0..180) / RAMPE = 0 -> Bei Verstellung über Rampe => WINKEL = beliebig wählbar (wird eh nicht ausgewertet) RAMPE = beliebig außer '0' wählbar, da eine fest definierte Rampe gefahren wird |

### STEUERN_VVT_AUS

Stop Stellgliedansteuerung VVT

_No arguments._

### STEUERN_VVT_ENABLE

Generierung eines Testsignals auf der VVT-Enable-Leitung

_No arguments._

### STEUERN_VVT_ENABLE_AUS

Testsignal von VVT-Enable-Leitung zurücknehmen

_No arguments._

### STEUERN_VANOS_EINLASS

Stellgliedansteuerung Einlass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | Verstellwinkel Vanos (-102....+102) |

### STEUERN_VANOS_EINLASS_AUS

Stop Stellgliedansteuerung Einlass-VANOS

_No arguments._

### STEUERN_VANOS_AUSLASS

Stellgliedansteuerung Auslass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | Verstellwinkel Vanos (-102....+102) |

### STEUERN_VANOS_AUSLASS_AUS

Stop Stellgliedansteuerung Auslass-VANOS

_No arguments._

### STEUERN_MIL

Stellgliedansteuerung MIL (Lampe Motorfehler)

_No arguments._

### STEUERN_MIL_AUS

Stop Stellgliedansteuerung MIL (Lampe Motorfehler)

_No arguments._

### STEUERN_EML

Stellgliedansteuerung EML (Lampe Fehler Gesamtfahrzeug)

_No arguments._

### STEUERN_EML_AUS

Stop Stellgliedansteuerung EML (Lampe Fehler Gesamtfahrzeug)

_No arguments._

### STATUS_VARIANTE

Auslesen der Varianten

_No arguments._

### STEUERN_VARIANTE

Löschen der Varianten

_No arguments._

### STEUERN_ADAPTIONEN_LOESCHEN

Selektives Löschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | siehe LH 1 430 227, setzt REYO_01 bitweise |
| AUSWAHLBYTE_2 | int | siehe LH 1 430 227, setzt REYO_02 bitweise |

### STATUS_KVA

Auslesen Faktor kva_korr

_No arguments._

### STEUERN_KVA

Programmieren Korrekturfaktor Kraftstoffverbrauch kva_korr

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Wertebereich für Eingabeparameter: -128 ... 127 kva_korr = KVA_WERT \ 1000 zB: KVA_WERT = -55   => kva_korr = -0.055% |

### STATUS_CO_ABGLEICH

Abgleichwert Korrektur CO-Einstellung lesen

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

Abgleichwert Korrektur CO-Einstellung verstellen

| Name | Type | Description |
| --- | --- | --- |
| CO_WERT | int | LL-CO-Abgleichswert co_pot |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

Abgleichwert Korrektur CO-Einstellung programmieren

| Name | Type | Description |
| --- | --- | --- |
| CO_FEST | int | LL-CO-Abgleichswert co_pot |

### STATUS_LLABG

Auslesen LL-Abgleichswerte

_No arguments._

### STEUERN_LLABG

LL-Abgleichswerte vorgeben

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne Fahrstufe (dnllmv) |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne Fahrstufe (dnsacmv) |
| DNSLBV | int | Abgleichswert LL bei niedriger UBatt (dnslbv) |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit Fahrstufe (dnfsacmv) |
| DNFSMV | int | Abgleichswert LL mit Fahrstufe (dnfsmv) |

### STEUERN_LLABG_PROG

LL-Abgleichswerte programmieren

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne Fahrstufe (dnllmv) |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne Fahrstufe (dnsacmv) |
| DNSLBV | int | Abgleichswert LL bei niedriger UBatt (dnslbv) |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit Fahrstufe (dnfsacmv) |
| DNFSMV | int | Abgleichswert LL mit Fahrstufe (dnfsmv) |

### STEUERN_EVAUSBL

Ausblenden von EVs

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt Ventile an, die ausgeblendet werden (binaer, jedes Bit ein EV) |

### STEUERN_EVAUSBL_AUS

Ausblenden von EVs beenden

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt Ventile an, die ausgeblendet werden (binaer, jedes Bit ein EV) |

### START_SYSTEMCHECK_TEV_FUNC

Anstoßen Systemtest TEV

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Auslesen Status Systemtest TEV

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

Stop Systemtest TEV

_No arguments._

### START_SYSTEMCHECK_LLERH

Anstoßen Systemtest LL-Erhöhung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | Eingabewert = 0....2550 wg. Begr. i. PST sind nur Werte zw. 400 u. 1200 sinnvoll |

### STATUS_SYSTEMCHECK_LLERH

Auslesen Status Systemtest LL-Erhöhung

_No arguments._

### STOP_SYSTEMCHECK_LLERH

Systemtest LL-Erhöhung beenden

_No arguments._

### STEUERN_VVT_ANSCHLAG

Anstoßen Diagnose 'VVT-Anschläge lernen'

_No arguments._

### STATUS_VVT_ANSCHLAG

Auslesen Status Diagnose 'VVT-Anschläge lernen'

_No arguments._

### STOP_VVT_ANSCHLAG

Diagnose 'VVT-Anschläge lernen' beenden

_No arguments._

### START_SYSTEMCHECK_DMTL

Anstoßen Tankdiagnose DMTL

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Status Tankdiagnose DMTL

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Tankdiagnose DMTL beenden

_No arguments._

### START_SYSTEMCHECK_LSU

Anstoßen LSU-Systemdiagnose

_No arguments._

### STATUS_SYSTEMCHECK_LSU

Status Systemdiagnose LSU

_No arguments._

### STOP_SYSTEMCHECK_LSU

LSU-Systemdiagnose beenden

_No arguments._

### STATUS_DIAGNOSE_LSV

Auslesen Zyklusflags Z_LSV

_No arguments._

### START_SYSTEMCHECK_KAT

Anstoßen Kurztest KAT

_No arguments._

### STATUS_SYSTEMCHECK_KAT

Status Kurztest KAT

_No arguments._

### STOP_SYSTEMCHECK_KAT

Kurztest KAT beenden

_No arguments._

### START_SYSTEMCHECK_LSH

Anstoßen Systemttest LS hinter KAT

_No arguments._

### STATUS_SYSTEMCHECK_LSH

Status Systemttest LS hinter KAT

_No arguments._

### STOP_SYSTEMCHECK_LSH

Systemttest LS hinter KAT beenden

_No arguments._

### START_SYSTEMCHECK_GEMISCHADAPT_SPERR

Anstoßen Systemttest 'Gemischadaption sperren'

_No arguments._

### STOP_SYSTEMCHECK_GEMISCHADAPT_SPERR

Systemttest 'Gemischadaption sperren' beenden

_No arguments._

### START_SYSTEMCHECK_GRUNDADAPT

Anstoßen Systemttest 'Grundadaption starten'

_No arguments._

### STATUS_SYSTEMCHECK_GRUNDADAPT

Status Systemttest 'Grundadaption starten'

_No arguments._

### STOP_SYSTEMCHECK_GRUNDADAPT

Systemttest 'Grundadaption starten' beenden

_No arguments._

### START_SYSTEMCHECK_LAMBDA_AUS

Systemttest 'Lambdaregelung aus' anstoßen

_No arguments._

### STATUS_SYSTEMCHECK_LAMBDA_AUS

Status Systemttest 'Lambdaregelung aus'

_No arguments._

### STOP_SYSTEMCHECK_LAMBDA_AUS

Systemttest 'Lambdaregelung aus' beenden

_No arguments._

### START_SYSTEMCHECK_KOMPRESSION

Kompressionstest anstoßen

_No arguments._

### STOP_SYSTEMCHECK_KOMPRESSION

Kompressionstest beenden

_No arguments._

### STEUERN_POWER_DOWN

Anforderung Power Down Mode

_No arguments._

### STEUERN_ZWANG_RAMBACKUP

Zwangssichern der RAM-Backup-Werte

_No arguments._

### RAM_BACKUP

Loeschen der RAM-Backup-Werte

_No arguments._

### RAM_LESEN

Auslesen von beliebigen RAM-Zellen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | long | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### STATUS_RBM_MODE9

Lesen der RBM-Werte Mode9

_No arguments._

### STATUS_RBM_BLOCK1

Lesen der RBM-Werte Block1

_No arguments._

### STATUS_RBM_BLOCK2

Lesen der RBM-Werte Block2

_No arguments._

### STATUS_MESSWERTE

Auslesen des allgemeinen Messwerteblocks

_No arguments._

### STATUS_MESSWERTE_DI

Auslesen der DI-Messwerte

_No arguments._

### STATUS_BATTERIEINTEGRATOR

Auslesen des Batterie-Ladezustands

_No arguments._

### STATUS_SCHALTERSTATI

Auslesen der Schalterstati

_No arguments._

### STATUS_FUNKTIONSSTATI

Auslesen der Funktionsstati

_No arguments._

### STATUS_DIGITAL

Auslesen der Funktions- und Schalterstati

_No arguments._

### STATUS_LAUFUNRUHE

Auslesen der Laufunruhewerte

_No arguments._

### STATUS_DKHFM

Auslesen der DK/HFM-Abgleichswerte

_No arguments._

### STATUS_GEMISCH

Auslesen der Gemischwerte

_No arguments._

### STATUS_AUSGAENGE

Auslesen der Ausgänge

_No arguments._

### STATUS_NWGADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_READINESS

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_FGR

Auslesen des FGR-Status

_No arguments._

### STATUS_VVT

Auslesen der VVT-Messwerte

_No arguments._

### STATUS_MINHUB

Auslesen des Minhub-Wertes

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

Auslesen des Betriebsstundenzähler-Status

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Auslesen der Ansauglufttemperatur

_No arguments._

### STATUS_LMM_MASSE

Auslesen des Luftmassenstroms

_No arguments._

### STATUS_L_SONDE

Auslesen der Lambdasondenspannung 1

_No arguments._

### STATUS_L_SONDE_H

Auslesen der Lambdasondenspannung 1

_No arguments._

### STATUS_INT

Auslesen des Lambdaregler-Ausgangs

_No arguments._

### STATUS_ADD

Auslesen der additiven Lambdaregelung

_No arguments._

### STATUS_MUL

Auslesen der multipikativen Lambdaregelung

_No arguments._

### STATUS_UBATT

Auslesen der Batteriespannung

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Auslesen der NWG-Adaption

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Auslesen des Pedalwertgeber-Status

_No arguments._

### STATUS_ADC

Auslesen der ADC-Werte

_No arguments._

### STATUS_FASTA1

Auslesen FASTA-Messwertblock 1

_No arguments._

### STATUS_FASTA2

Auslesen FASTA-Messwertblock 2

_No arguments._

### STATUS_FASTA3

Auslesen FASTA-Messwertblock 3

_No arguments._

### STATUS_FASTA4

Auslesen FASTA-Messwertblock 4

_No arguments._

### STATUS_FASTA5

Auslesen FASTA-Messwertblock 5

_No arguments._

### STATUS_FASTA6

Auslesen FASTA-Messwertblock 6

_No arguments._

### STATUS_FASTA7

Auslesen FASTA-Messwertblock 7

_No arguments._

### EWS_STARTWERT

EWS-Startwertinitialisierung

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

_No arguments._

### WECHSELCODE_SYNC_DME

EWS zuruecksetzen

_No arguments._

### START_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Start-Routine ZWDIAG (0x31 3A)

| Name | Type | Description |
| --- | --- | --- |
| FAC_CH_DIAG_EXT_ADJ_IS | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen im Leerlauf Min: 0.0 Max: 1.9921875 a2l-Name: f_mrkhll_t |
| FAC_CH_DIAG_EXT_ADJ_PL | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen in der Teillast Min: 0.0 Max: 1.9921875 a2l-Name: f_mrkhtl_t |
| LV_CH_DIAG_EXT_REQ | unsigned char | Anforderung an Anpassung der geforderten Momentenreserve durch Katheizen über Tester (Leerlauf/Teillastbetrieb) Min: 0.0 Max: 3.0 a2l-Name:  B_mrkhll_t, B_mrkhtl_t |

### STATUS_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Status-Routine ZWDIAG (0x33 3A)

_No arguments._

### STOP_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Stop-Routine ZWDIAG (0x32 3A)

_No arguments._

### STATUS_ENERGIESPARMODE

0x22100A STATUS_ENERGIESPARMODE Status Energiesparmode Aktivierung: Klemme 15 = EIN

_No arguments._

### STATUS_CODIERUNG_OEL

0x223200 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN

_No arguments._

### STATUS_ETKH

0x2CF099 und 0x2CF19A STATUS_ETKH Auslesen der Quotient Zündwinkelwirkungsgrad-Fehlerintegral Aktivierung: Klemme 15 = EIN

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
| 0xA2 | Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | ADC Automotive Distance Control Systems GmbH |
| 0xA5 | Funkwerk Dabendorf GmbH |
| 0xA6 | Lame |
| 0xA7 | Magna/Closures |
| 0xA8 | Wanyu |
| 0xA9 | Thyssen Krupp Presta |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
| 0xAC | SMR Automotive Mirrors |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA |
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive World Headquarters |
| 0xB6 | Hans Widmaier |
| 0xB7 | SB LiMotive Germany GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
| 0xBA | BorgWarner |
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
| 0x09 | QMV | QMV-H-Oel |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x13 | H2 | H2-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x15 | Efk | Einfahrkontrolle |
| 0x16 | DAD | Additiv fuer Partikelfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
| 0x23 | DKG | DK-Getriebeoel |
| 0x0A | ZKrz_a | Zuendkerzen adaptiv |
| 0x0D | NOx_a | NOx-Additiv |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xCDB7 | CDKX5E0 0xCDB7 - Botschaft (OBD-Sensor Diagnosestatus, 5E0) |
| 0x2F44 | CDKWFS 0x2F44 - EWS Manipulationsschutz |
| 0x2F46 | CDKWCA 0x2F46 - EWS Wechselcode-Abspeicherng |
| 0x2A58 | CDKVVTE 0x2A58 - Valvetronic,  Spannungsversorgung |
| 0x2F4F | CDKVFZNP 0x2F4F - Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F4E | CDKVFZE 0x2F4E - Fahrzeuggeschwindigkeit, Signal |
| 0x2F50 | CDKVAT 0x2F50 - Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2B9C | CDKURRST 0x2B9C - Steuergerät, interner Fehler: Reset |
| 0x2B9B | CDKURROM 0x2B9B - Steuergerät, interner Fehler: ROM |
| 0x2B9A | CDKURRAM 0x2B9A - Steuergerät, interner Fehler: RAM |
| 0x2C3B | CDKULSU 0x2C3B - Lambdasonde vor Katalysator, nicht angesteckt |
| 0x2D76 | CDKUFSPSC 0x2D76 - DME, interner Fehler: Überwachung Fahrpedalmodul |
| 0x2D72 | CDKUFSGC 0x2D72 - DME, interner Fehler: Überwachung Hardware |
| 0x2D71 | CDKUFSGB 0x2D71 - DME, interner Fehler: Überwachung Eingangsgrößen |
| 0x2D70 | CDKUFSGA 0x2D70 - DME, interner Fehler: Überwachung Motorfunktionen |
| 0x2D6F | CDKUFRLIP 0x2D6F - DME, interner Fehler: Überwachung Luftpfad |
| 0x2D74 | CDKUFRKC 0x2D74 - DME, interner Fehler: Überwachung Kraftstoffdrucksensor |
| 0x2D75 | CDKUFNC 0x2D75 - DME, interner Fehler: Überwachung Motordrehzahl |
| 0x2D6E | CDKUFMV 0x2D6E - DME, interner Fehler: Überwachung Istmoment |
| 0x2D6D | CDKUF2SG 0x2D6D - DME, interner Fehler: Überwachung DME/DME2 |
| 0x2F8A | CDKUB 0x2F8A - Batteriespannung |
| 0x2BC0 | CDKTUMP 0x2BC0 - Umgebungstemperatursensor, Plausibilität |
| 0x2BC1 | CDKTUME 0x2BC1 - Umgebungstemperatursensor, Signal |
| 0x2EE1 | CDKTMP 0x2EE1 - Kühlmitteltemperatursensor, Plausibilität |
| 0x2EE0 | CDKTME 0x2EE0 - Kühlmitteltemperatursensor, Signal |
| 0x2EE4 | CDKTMCS 0x2EE4 - Kühlmitteltemperatursensor, Messbereich |
| 0x2EEA | CDKTKA 0x2EEA - Temperatursensor Kühleraustritt, Signal |
| 0x2EF4 | CDKTHM 0x2EF4 - Kennfeldthermostat, Mechanik |
| 0x2A19 | CDKTEVE 0x2A19 - Tankentlüftungsventil, Ansteuerung |
| 0x2A15 | CDKTESG 0x2A15 - Tankentlüftungs- und Spülluftsystem, Feinleck |
| 0x2A1A | CDKTES 0x2A1A - Tankentlüftungssystem, Funktion |
| 0x2F09 | CDKTAR 0x2F09 - Ansauglufttemperatursensor, Plausibilität |
| 0x2F08 | CDKTAE 0x2F08 - Ansauglufttemperatursensor, Signal |
| 0x2F0B | CDKTACS 0x2F0B - Ansauglufttemperatursensor, Plausibilität, Kaltstart |
| 0x29DD | CDKSWE 0x29DD - Schlechtwegstreckenerkennung |
| 0x2F59 | CDKSTS 0x2F59 - Startautomatik, Startsignal |
| 0x2F5A | CDKSTA 0x2F5A - Startautomatik |
| 0x2BAC | CDKSGAPL 0x2BAC - DME, DME2: Programmstandsunterschied |
| 0x2BAD | CDKSGA 0x2BAD - DME,DME2: Hardware, Plausibilität |
| 0x30E8 | CDKRLMAX 0x30E8 - Füllungsbegrenzung |
| 0x29E7 | CDKRKAT 0x29E7 - Gemischadaption im Leerlauf pro Zeit |
| 0x2A2A | CDKRBVE 0x2A2A - Rücklaufbelüftungsventil, Ansteuerung |
| 0x2F77 | CDKPUR 0x2F77 - Umgebungsdrucksensor, Plausibilität |
| 0x2F78 | CDKPUE 0x2F78 - DME, interner Fehler: Umgebungsdrucksensor |
| 0x2F7B | CDKPOELS 0x2F7B - Öldruckschalter, Plausibilität |
| 0x2C49 | CDKPLLSU 0x2C49 - Lambdasonde vor Katalysator, Plausibilität |
| 0x2B66 | CDKPHM 0x2B66 - Nockenwellensensor, Master |
| 0x2B63 | CDKPH2 0x2B63 - Nockenwellensensor, Auslass |
| 0x2B62 | CDKPH 0x2B62 - Nockenwellensensor, Einlass |
| 0x2D29 | CDKPDDSS 0x2D29 - Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2E9F | CDKOEZS 0x2E9F - Ölzustandssensor |
| 0x2A8E | CDKNWEKW 0x2A8E - Einlassnockenwelle, Zahnversatz zur Kurbelwelle |
| 0x2A90 | CDKNWAKW 0x2A90 - Auslassnockenwelle, Zahnversatz zur Kurbelwelle |
| 0x2B98 | CDKNVRMON 0x2B98 - Steuergerät, interner Fehler: RAM Backup, Plausibilität |
| 0x2B99 | CDKNVRBUP 0x2B99 - Steuergerät, interner Fehler: RAM Backup |
| 0x2B5C | CDKN 0x2B5C - Kurbelwellensensor, Signal |
| 0x2F17 | CDKMTOEL 0x2F17 - Motoröltemperatur, zeitweise zu hoch, EGS-Zwangsschaltung |
| 0x29E4 | CDKMSVE 0x29E4 - Mengensteuerventil, Ansteuerung |
| 0x2EFE | CDKMLE 0x2EFE - Elektrolüfter, Ansteuerung |
| 0x2EFC | CDKMLE 0x2EFC - Elektrolüfter 2, Ansteuerung |
| 0x2A6F | CDKMINHUB 0x2A6F - Valvetronic, Minimalhub |
| 0x2BA7 | CDKMDB 0x2BA7 - DME, interner Fehler: Überwachung Momentenbegrenzung Ebene 1 |
| 0x29D6 | CDKMD11 0x29D6 - Verbrennungsaussetzer, Zylinder 10 |
| 0x29D0 | CDKMD10 0x29D0 - Verbrennungsaussetzer, Zylinder 4 |
| 0x29D4 | CDKMD09 0x29D4 - Verbrennungsaussetzer, Zylinder 8 |
| 0x29CE | CDKMD08 0x29CE - Verbrennungsaussetzer, Zylinder 2 |
| 0x29D8 | CDKMD07 0x29D8 - Verbrennungsaussetzer, Zylinder 12 |
| 0x29D2 | CDKMD06 0x29D2 - Verbrennungsaussetzer, Zylinder 6 |
| 0x29D5 | CDKMD05 0x29D5 - Verbrennungsaussetzer, Zylinder 9 |
| 0x29CF | CDKMD04 0x29CF - Verbrennungsaussetzer, Zylinder 3 |
| 0x29D7 | CDKMD03 0x29D7 - Verbrennungsaussetzer, Zylinder 11 |
| 0x29D1 | CDKMD02 0x29D1 - Verbrennungsaussetzer, Zylinder 5 |
| 0x29D3 | CDKMD01 0x29D3 - Verbrennungsaussetzer, Zylinder 7 |
| 0x29CD | CDKMD00 0x29CD - Verbrennungsaussetzer, Zylinder 1 |
| 0x29CC | CDKMD 0x29CC - Verbrennungsaussetzer, mehrere Zylinder |
| 0x2D77 | CDKMBV 0x2D77 - DME, DME2: Momentenvergleich |
| 0x2C24 | CDKLSVV 0x2C24 - Lambdasonden vor Katalysator, vertauscht |
| 0x2C61 | CDKLSVE 0x2C61 - Lamdasonde vor Katalysator, elektrischer Fehler |
| 0x2C53 | CDKLSUVM 0x2C53 - Lambdasonde vor Katalysator, virtuelle Masse |
| 0x2C51 | CDKLSUUN 0x2C51 - Lambdasonde vor Katalysator, Nernstleitung |
| 0x2C47 | CDKLSUKS 0x2C47 - Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2C4D | CDKLSUIP 0x2C4D - Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2C4F | CDKLSUIA 0x2C4F - Lambdasonde vor Katalysator, Abgleichleitung |
| 0x2C71 | CDKLSH 0x2C71 - Lambdasonde nach Katalysator |
| 0x2B82 | CDKLLRKH 0x2B82 - Leerlaufregelung bei Katalysatorbeheizung |
| 0x2B81 | CDKLLRH 0x2B81 - Leerlaufregelung bei homogenem Betrieb |
| 0x2AE2 | CDKLLRCS 0x2AE2 - Leerlaufregelung, Plausibilität, Kaltstart |
| 0x2C6D | CDKLASH 0x2C6D - Lambdasonde nach Katalysator, Alterung |
| 0x2E6A | CDKKS3 0x2E6A - Klopfsensorsignal 3 |
| 0x2E69 | CDKKS2 0x2E69 - Klopfsensorsignal 2 |
| 0x2E68 | CDKKS1 0x2E68 - Klopfsensorsignal 1 |
| 0x2E73 | CDKKRSPI 0x2E73 - Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2E72 | CDKKRIC 0x2E72 - Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x29F4 | CDKKAT 0x29F4 - Katalysatorkonvertierung |
| 0x2C4B | CDKICLSU 0x2C4B - Steuergerät, interner Fehler: Lambdasondenbaustein |
| 0x2C9C | CDKHSVE 0x2C9C - Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2CA0 | CDKHSV 0x2CA0 - Lambdasondenbeheizung vor Katalysator |
| 0x2C9E | CDKHSHE 0x2C9E - Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2CA8 | CDKHSH 0x2CA8 - Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2D13 | CDKHFMR 0x2D13 - Luftmassenmesser, Rationalität |
| 0x2D0F | CDKHFME 0x2D0F - Luftmassenmesser, Signal |
| 0x2C37 | CDKHELSU 0x2C37 - Lambdasonde vor Katalysator, Heizereinkopplung |
| 0x29F1 | CDKHDRPL 0x29F1 - Kraftstoffdruck, Plausibilität |
| 0x2B2C | CDKHDRKH 0x2B2C - Kraftstoffhochdruck, Plausibilität, Kaltstart |
| 0x29E3 | CDKHDR 0x29E3 - Kraftstoffdruckregelung, Plausibilität |
| 0x2E60 | CDKHDEVK 0x2E60 - HDEV-Steuergerät, interner Fehler: Kommunikation |
| 0x30B5 | CDKHDEV6 0x30B5 - Einspritzventil Zylinder 10, Ansteuerung |
| 0x30AF | CDKHDEV6 0x30AF - Einspritzventil Zylinder 4, Ansteuerung |
| 0x30B3 | CDKHDEV5 0x30B3 - Einspritzventil Zylinder 8, Ansteuerung |
| 0x30AD | CDKHDEV5 0x30AD - Einspritzventil Zylinder 2, Ansteuerung |
| 0x30B7 | CDKHDEV4 0x30B7 - Einspritzventil Zylinder 12, Ansteuerung |
| 0x30B1 | CDKHDEV4 0x30B1 - Einspritzventil Zylinder 6, Ansteuerung |
| 0x30B4 | CDKHDEV3 0x30B4 - Einspritzventil Zylinder 9, Ansteuerung |
| 0x30AE | CDKHDEV3 0x30AE - Einspritzventil Zylinder 3, Ansteuerung |
| 0x30B6 | CDKHDEV2 0x30B6 - Einspritzventil Zylinder 11, Ansteuerung |
| 0x30B0 | CDKHDEV2 0x30B0 - Einspritzventil Zylinder 5, Ansteuerung |
| 0x30B2 | CDKHDEV1 0x30B2 - Einspritzventil Zylinder 7, Ansteuerung |
| 0x30AC | CDKHDEV1 0x30AC - Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E53 | CDKHBOOST6 0x2E53 - Booster Hochdruckeinspritzventil  10 |
| 0x2E4D | CDKHBOOST6 0x2E4D - Booster Hochdruckeinspritzventil  4 |
| 0x2E52 | CDKHBOOST5 0x2E52 - Booster Hochdruckeinspritzventil  8 |
| 0x2E4C | CDKHBOOST5 0x2E4C - Booster Hochdruckeinspritzventil  2 |
| 0x2E51 | CDKHBOOST4 0x2E51 - Booster Hochdruckeinspritzventil  12 |
| 0x2E4B | CDKHBOOST4 0x2E4B - Booster Hochdruckeinspritzventil  6 |
| 0x2E50 | CDKHBOOST3 0x2E50 - Booster Hochdruckeinspritzventil  9 |
| 0x2E4A | CDKHBOOST3 0x2E4A - Booster Hochdruckeinspritzventil  3 |
| 0x2E4F | CDKHBOOST2 0x2E4F - Booster Hochdruckeinspritzventil  11 |
| 0x2E49 | CDKHBOOST2 0x2E49 - Booster Hochdruckeinspritzventil  5 |
| 0x2E4E | CDKHBOOST1 0x2E4E - Booster Hochdruckeinspritzventil  7 |
| 0x2E48 | CDKHBOOST1 0x2E48 - Booster Hochdruckeinspritzventil  1 |
| 0x2C31 | CDKFTDLA 0x2C31 - Lambdasonde vor Katalysator, Trimmregelung |
| 0x2A1E | CDKFSTSI 0x2A1E - Tankfüllstand, Signal |
| 0x2A21 | CDKFSTS2 0x2A21 - Tankfüllstand 2, Signal |
| 0x2A22 | CDKFSTP 0x2A22 - Tankfüllstand, Korrelation |
| 0x2A1D | CDKFSTP 0x2A1D - Tankfüllstand, Plausibilität |
| 0x29ED | CDKFRAU 0x29ED - Gemischadaption, unterer Drehzahlbereich |
| 0x29E5 | CDKFRAO 0x29E5 - Gemischadaption, oberer Drehzahlbereich |
| 0x2D1A | CDKFPP 0x2D1A - Fahrpedalmodul, Pedalwertgeber |
| 0x2D37 | CDKFP2PRG 0x2D37 - Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich |
| 0x2D1C | CDKFP2P 0x2D1C - Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D36 | CDKFP1PRG 0x2D36 - Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich |
| 0x2D1B | CDKFP1P 0x2D1B - Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x29F0 | CDKFMAS 0x29F0 - Gemischadaption 2, Summenfehler |
| 0x29EF | CDKFMAS 0x29EF - Gemischadaption, Summenfehler |
| 0x2E45 | CDKEVLE6 0x2E45 - HDEV-Steuergerät Leitung 4, Ansteuerung |
| 0x2E3F | CDKEVLE6 0x2E3F - HDEV-Steuergerät Leitung 10, Ansteuerung |
| 0x2E44 | CDKEVLE5 0x2E44 - HDEV-Steuergerät Leitung 2, Ansteuerung |
| 0x2E3E | CDKEVLE5 0x2E3E - HDEV-Steuergerät Leitung 8, Ansteuerung |
| 0x2E43 | CDKEVLE4 0x2E43 - HDEV-Steuergerät Leitung 6, Ansteuerung |
| 0x2E3D | CDKEVLE4 0x2E3D - HDEV-Steuergerät Leitung 12, Ansteuerung |
| 0x2E42 | CDKEVLE3 0x2E42 - HDEV-Steuergerät Leitung 3, Ansteuerung |
| 0x2E3C | CDKEVLE3 0x2E3C - HDEV-Steuergerät Leitung 9, Ansteuerung |
| 0x2E47 | CDKEVLE2 0x2E47 - HDEV-Steuergerät Leitung 11, Ansteuerung |
| 0x2E41 | CDKEVLE2 0x2E41 - HDEV-Steuergerät Leitung 5, Ansteuerung |
| 0x2E46 | CDKEVLE1 0x2E46 - HDEV-Steuergerät Leitung 7, Ansteuerung |
| 0x2E40 | CDKEVLE1 0x2E40 - HDEV-Steuergerät Leitung 1, Ansteuerung |
| 0x2EF5 | CDKETS 0x2EF5 - Kennfeldthermostat, Ansteuerung |
| 0x2E7B | CDKETAKHT 0x2E7B - Zündwinkelverstellung in Teillast, Kaltstart |
| 0x2E7A | CDKETAKHL 0x2E7A - Zündwinkelverstellung im Leerlauf, Kaltstart |
| 0x2A80 | CDKENWSE 0x2A80 - Einlass-VANOS, Ansteuerung |
| 0x2A8A | CDKENWSAD 0x2A8A - Einlass-VANOS, Adaption Anschlag |
| 0x2A83 | CDKENWS 0x2A83 - Einlass-VANOS |
| 0x2A79 | CDKENWCX 0x2A79 - VANOS, Einlass, Kaltstart |
| 0x2A7C | CDKENWCS 0x2A7C - VANOS, Einlass, Kaltstart |
| 0x2F71 | CDKELS 0x2F71 - E-Box-Lüfter, Ansteuerung |
| 0x2B7F | CDKEGFE 0x2B7F - Abgleich Drosselklappe-Luftmassenmesser |
| 0x2E6F | CDKDZKUB1 0x2E6F - Zündung 2, Überwachung: Brenndauer |
| 0x2E6E | CDKDZKUB1 0x2E6E - Zündung, Überwachung: Brenndauer |
| 0x2E2D | CDKDZKU5 0x2E2D - Zündspule Zylinder 10 |
| 0x2E27 | CDKDZKU5 0x2E27 - Zündspule Zylinder 4 |
| 0x2E2B | CDKDZKU4 0x2E2B - Zündspule Zylinder 8 |
| 0x2E25 | CDKDZKU4 0x2E25 - Zündspule Zylinder 2 |
| 0x2E2F | CDKDZKU3 0x2E2F - Zündspule Zylinder 12 |
| 0x2E29 | CDKDZKU3 0x2E29 - Zündspule Zylinder 6 |
| 0x2E2C | CDKDZKU2 0x2E2C - Zündspule Zylinder 9 |
| 0x2E26 | CDKDZKU2 0x2E26 - Zündspule Zylinder 3 |
| 0x2E2E | CDKDZKU1 0x2E2E - Zündspule Zylinder 11 |
| 0x2E28 | CDKDZKU1 0x2E28 - Zündspule Zylinder 5 |
| 0x2E2A | CDKDZKU0 0x2E2A - Zündspule Zylinder 7 |
| 0x2E24 | CDKDZKU0 0x2E24 - Zündspule Zylinder 1 |
| 0x2C39 | CDKDYLSU 0x2C39 - Lambdasonde vor Katalysator, Dynamik |
| 0x2C84 | CDKDYLSH 0x2C84 - Lambdasonde nach Katalysator, Dynamik |
| 0x2F45 | CDKDWA 0x2F45 - Schnittstelle EWS-DME |
| 0x2A5F | CDKDVUSE 0x2A5F - Valvetronic, Exzenterwellensensor: Spannungsversorgung |
| 0x2A69 | CDKDVULV 0x2A69 - Valvetronic, Stellmotor: Spannungsversorgung |
| 0x2A63 | CDKDVSTE 0x2A63 - Valvetronic, Stellmotor: Überwachung Schwergängigkeit, Drehrichtung |
| 0x2A6B | CDKDVPMN 0x2A6B - Valvetronic, Leistungsbegrenzung |
| 0x2A5D | CDKDVPLA 0x2A5D - Valvetronic, Exzenterwellensensor: Plausibilität |
| 0x2A6D | CDKDVOVL 0x2A6D - Valvetronic, elektrischer Überlastschutz |
| 0x2A61 | CDKDVLRN 0x2A61 - Valvetronic, Verstellbereich |
| 0x2A65 | CDKDVFSG 0x2A65 - Valvetronic,  interner Fehler |
| 0x2A5B | CDKDVFRS 0x2A5B - Valvetronic, Exzenterwellensensor: Referenz |
| 0x2A59 | CDKDVFFS 0x2A59 - Valvetronic, Exzenterwellensensor: Führung |
| 0x2CFF | CDKDVEV 0x2CFF - Drosselklappensteller, Verstärkerabgleich |
| 0x2D05 | CDKDVEUW 0x2D05 - Drosselklappensteller, Abbruch bei UMA-Wiederlernen |
| 0x2D03 | CDKDVEUB 0x2D03 - Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2D04 | CDKDVEU 0x2D04 - Drosselklappensteller, Prüfung unterer Anschlag |
| 0x2A67 | CDKDVEST 0x2A67 - Valvetronic, Stellmotor: Ansteuerung |
| 0x2CF0 | CDKDVER 0x2CF0 - Drosselklappensteller, Regelbereich |
| 0x2D02 | CDKDVEN 0x2D02 - Drosselklappensteller, Notluftpunkt |
| 0x2CF1 | CDKDVEL 0x2CF1 - Drosselklappensteller, Positionsüberwachung |
| 0x2D01 | CDKDVEFO 0x2D01 - Drosselklappensteller, Federprüfung öffnende Feder |
| 0x2D00 | CDKDVEF 0x2D00 - Drosselklappensteller, Federprüfung schliessende Feder |
| 0x2CEF | CDKDVEE 0x2CEF - Drosselklappensteller, Ansteuerung |
| 0x2DDE | CDKDVCAN 0x2DDE - Local-CAN Kommunikation |
| 0x2A6C | CDKDVAN 0x2A6C - Valvetronic, Position bei Neustart: Plausibilität |
| 0x29E2 | CDKDSKV 0x29E2 - Kraftstoffeinspritzleiste, Drucksensorsignal |
| 0x2A17 | CDKDMTL 0x2A17 - DMTL, Systemfehler |
| 0x2A16 | CDKDMTKNM 0x2A16 - Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2A14 | CDKDMTK 0x2A14 - Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2A13 | CDKDMPME 0x2A13 - DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A12 | CDKDMMVE 0x2A12 - DMTL-Magnetventil, Ansteuerung |
| 0x2CFA | CDKDK2P 0x2CFA - Drosselklappenpotenziometer 2 |
| 0x2CF9 | CDKDK1P 0x2CF9 - Drosselklappenpotenziometer 1 |
| 0x2CF8 | CDKDK 0x2CF8 - Drosselklappenpotenziometer |
| 0x2A18 | CDKDHDMTE 0x2A18 - DMTL, Heizung: Ansteuerung |
| 0x2E98 | CDKDGENBS 0x2E98 - Generator, Kommunikation |
| 0x2E9A | CDKDGENB2 0x2E9A - Generator 2, Kommunikation |
| 0x2E99 | CDKDGEN2 0x2E99 - Generator 2 |
| 0x2E97 | CDKDGEN 0x2E97 - Generator |
| 0x2D28 | CDKDDSS 0x2D28 - Differenzdrucksensor, Saugrohr: Signal |
| 0x2DDD | CDKCVVT 0x2DDD - Botschaft vom Valvetronic-Steuergerät fehlt |
| 0x2F80 | CDKCUHR 0x2F80 - Motorabstellzeit, Plausibilität |
| 0x2DDC | CDKCSZL 0x2DDC - Botschaft vom SZL fehlt |
| 0x2DC1 | CDKCPWML 0x2DC1 - Botschaft vom Powermodul fehlt |
| 0x2FA3 | CDKCOD 0x2FA3 - Codierung fehlt |
| 0x2F87 | CDKCNCLKT 0x2F87 - Motorabstellzeit |
| 0x2F7E | CDKCNCLKL 0x2F7E - Motorabstellzeit, Plausibilität |
| 0x2F7F | CDKCNCLKH 0x2F7F - Motorabstellzeit, Plausibilität |
| 0x2F88 | CDKCNCLKD 0x2F88 - Motorabstellzeit |
| 0x2DCF | CDKCINS 0x2DCF - CAN, Instrumentenkombination: Signalfehler |
| 0x2DDB | CDKCIHKA 0x2DDB - CAN, IHKA: Signalfehler |
| 0x30D4 | CDKCHDEV 0x30D4 - Botschaft vom HDEV fehlt |
| 0xCDDD | CDKCGE 0xCDDD - Botschaft (Getriebedaten, BA) |
| 0x2DE6 | CDKCDM 0x2DE6 - Local-CAN, DME/DME2: Kommunikation |
| 0x2DDA | CDKCCAS 0x2DDA - CAN, CAS: Signalfehler |
| 0xCDE0 | CDKCAS 0xCDE0 - Botschaft (Klemmenstatus, 130) |
| 0x2DD7 | CDKCAS 0x2DD7 - Botschaft vom DSC fehlt, Timeout |
| 0x2DD9 | CDKCARS 0x2DD9 - CAN, ARS: Signalfehler |
| 0xCDCB | CDKCANB 0xCDCB - Local-CAN Kommunikationsfehler |
| 0xCD8B | CDKCANB 0xCD8B - Local-CAN Kommunikationsfehler |
| 0xCDC7 | CDKCANA 0xCDC7 - PT-CAN Kommunikationsfehler |
| 0xCD87 | CDKCANA 0xCD87 - PT-CAN Kommunikationsfehler |
| 0x2DBF | CDKCACC 0x2DBF - CAN, ACC: Signalfehler |
| 0x2F62 | CDKBREMS 0x2F62 - Bremslichtschalter |
| 0x2B5D | CDKBM 0x2B5D - Kurbelwellensensor, Plausibilität |
| 0x2B7A | CDKASVE 0x2B7A - Rücklaufabsperrventil, Ansteuerung |
| 0x2A85 | CDKANWSE 0x2A85 - Auslass-VANOS, Ansteuerung |
| 0x2A8C | CDKANWSAD 0x2A8C - Auslass-VANOS, Adaption Anschlag |
| 0x2A88 | CDKANWS 0x2A88 - Auslass-VANOS |
| 0x2A78 | CDKANWCX 0x2A78 - VANOS, Auslass, Kaltstart |
| 0x2A7A | CDKANWCS 0x2A7A - VANOS, Auslass, Kaltstart |
| 0x2B84 | CDKANSKE 0x2B84 - Zusatzluftklappe, Ansteuerung |
| 0x2F6C | CDKAKRE 0x2F6C - Abgasklappe, Ansteuerung |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | 00654321 |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | -- |
| xxxxxxx1 | 11 | Diagnose aktiv  |
| xxxxxx0x | 20 | -- |
| xxxxxx1x | 21 | Diagnose gestoppt |
| xxxxx0xx | 30 | -- |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt |
| xxxx0xxx | 40 | -- |
| xxxx1xxx | 41 | Error-Flag gesetzt |
| xxx0xxxx | 50 | -- |
| xxx1xxxx | 51 | MIL ein |
| xx0xxxxx | 60 | -- |
| xx1xxxxx | 61 | MIL Entprellung war bereits erreicht, HLC=0 |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x00FF | 0x00FF | 0x00FF | 0x00FF |
| 0x29CC | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29CD | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29CE | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29CF | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D0 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D1 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D2 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D3 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D4 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D5 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D6 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D7 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29D8 | 0x000A | 0x00D6 | 0x0012 | 0x003C |
| 0x29DD | 0x000A | 0x001A | 0x000B | 0x008C |
| 0x29E2 | 0x000A | 0x0012 | 0x0014 | 0x003C |
| 0x29E3 | 0x000A | 0x001A | 0x003C | 0x0035 |
| 0x29E4 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x29E5 | 0x000B | 0x001A | 0x0006 | 0x0005 |
| 0x29E7 | 0x000A | 0x0013 | 0x003C | 0x0005 |
| 0x29ED | 0x000A | 0x001A | 0x00AC | 0x0006 |
| 0x29EF | 0x0005 | 0x0006 | 0x001A | 0x000A |
| 0x29F0 | 0x0005 | 0x0006 | 0x001A | 0x000A |
| 0x29F4 | 0x00A3 | 0x001A | 0x00BF | 0x00C1 |
| 0x2A12 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A13 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A14 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A15 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A16 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A17 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A18 | 0x000A | 0x0014 | 0x0024 | 0x000B |
| 0x2A19 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A1A | 0x0012 | 0x0013 | 0x0041 | 0x00BD |
| 0x2A1D | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A1E | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A21 | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A22 | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A2A | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A58 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A59 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A5B | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A5D | 0x000A | 0x0014 | 0x0012 | 0x00C3 |
| 0x2A5F | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A61 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A63 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A65 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A67 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A69 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A6B | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A6C | 0x000A | 0x0014 | 0x0012 | 0x00BE |
| 0x2A6D | 0x000A | 0x008C | 0x0012 | 0x00C5 |
| 0x2A6F | 0x0012 | 0x00BE | 0x000A | 0x001A |
| 0x2A78 | 0x000A | 0x001A | 0x00FF | 0x00FF |
| 0x2A79 | 0x000A | 0x001A | 0x00FF | 0x00FF |
| 0x2A7A | 0x000A | 0x001A | 0x00FF | 0x00FF |
| 0x2A7C | 0x000A | 0x001A | 0x00FF | 0x00FF |
| 0x2A80 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A83 | 0x000A | 0x001A | 0x0012 | 0x0014 |
| 0x2A85 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A88 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8A | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8C | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8E | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A90 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2AE2 | 0x000A | 0x003E | 0x0024 | 0x0014 |
| 0x2B2C | 0x000A | 0x00FF | 0x00FF | 0x003E |
| 0x2B5C | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B5D | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B62 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B63 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B66 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B7A | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2B7F | 0x0011 | 0x0015 | 0x0013 | 0x0035 |
| 0x2B81 | 0x000A | 0x001A | 0x0014 | 0x0015 |
| 0x2B82 | 0x000A | 0x001A | 0x0014 | 0x0015 |
| 0x2B84 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2B98 | 0x0014 | 0x00BE | 0x0012 | 0x0024 |
| 0x2B99 | 0x000A | 0x0014 | 0x0012 | 0x00BE |
| 0x2B9A | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9B | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9C | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2BA7 | 0x000A | 0x0023 | 0x001A | 0x0012 |
| 0x2BAC | 0x000A | 0x001A | 0x0014 | 0x000B |
| 0x2BAD | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2BC0 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2BC1 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2C24 | 0x0012 | 0x008C | 0x00A6 | 0x00A8 |
| 0x2C31 | 0x009D | 0x00A8 | 0x0017 | 0x0085 |
| 0x2C37 | 0x0082 | 0x00A8 | 0x0029 | 0x003C |
| 0x2C39 | 0x00AA | 0x00B0 | 0x00A8 | 0x0085 |
| 0x2C3B | 0x008C | 0x00A8 | 0x0017 | 0x0044 |
| 0x2C47 | 0x0014 | 0x000B | 0x00A8 | 0x009F |
| 0x2C49 | 0x009D | 0x00A8 | 0x0017 | 0x0085 |
| 0x2C4B | 0x009F | 0x008C | 0x0014 | 0x00A8 |
| 0x2C4D | 0x00A8 | 0x0082 | 0x0044 | 0x009F |
| 0x2C4F | 0x00A8 | 0x0082 | 0x0044 | 0x008C |
| 0x2C51 | 0x00A8 | 0x0082 | 0x0044 | 0x009F |
| 0x2C53 | 0x0014 | 0x00A8 | 0x0082 | 0x009F |
| 0x2C61 | 0x0029 | 0x0044 | 0x00A8 | 0x000B |
| 0x2C6D | 0x000A | 0x002B | 0x0033 | 0x0017 |
| 0x2C71 | 0x002B | 0x008C | 0x0033 | 0x0017 |
| 0x2C84 | 0x002B | 0x008C | 0x0033 | 0x0017 |
| 0x2C9C | 0x000B | 0x008C | 0x0014 | 0x0044 |
| 0x2C9E | 0x007E | 0x002F | 0x002B | 0x0033 |
| 0x2CA0 | 0x000B | 0x008C | 0x0029 | 0x0044 |
| 0x2CA8 | 0x007E | 0x0017 | 0x002B | 0x0033 |
| 0x2CEF | 0x0014 | 0x0012 | 0x0015 | 0x0028 |
| 0x2CF0 | 0x0014 | 0x0013 | 0x0015 | 0x0028 |
| 0x2CF1 | 0x0014 | 0x0013 | 0x0015 | 0x0028 |
| 0x2CF8 | 0x000A | 0x0015 | 0x0026 | 0x0027 |
| 0x2CF9 | 0x000A | 0x0028 | 0x0024 | 0x0027 |
| 0x2CFA | 0x000A | 0x0028 | 0x0024 | 0x0026 |
| 0x2CFF | 0x0014 | 0x0013 | 0x0026 | 0x0065 |
| 0x2D00 | 0x0014 | 0x0013 | 0x0015 | 0x0064 |
| 0x2D01 | 0x0014 | 0x0013 | 0x0015 | 0x0064 |
| 0x2D02 | 0x0014 | 0x0013 | 0x0064 | 0x0076 |
| 0x2D03 | 0x000A | 0x0014 | 0x0013 | 0x0023 |
| 0x2D04 | 0x0014 | 0x0013 | 0x0026 | 0x0065 |
| 0x2D05 | 0x000A | 0x0014 | 0x0013 | 0x0023 |
| 0x2D0F | 0x000A | 0x0013 | 0x0015 | 0x0071 |
| 0x2D13 | 0x000A | 0x0013 | 0x0015 | 0x0071 |
| 0x2D1A | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1B | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1C | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D28 | 0x000A | 0x001A | 0x0012 | 0x0014 |
| 0x2D29 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2D36 | 0x000A | 0x001B | 0x001C | 0x0014 |
| 0x2D37 | 0x000A | 0x001B | 0x001C | 0x0014 |
| 0x2D6D | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2D6E | 0x000A | 0x001A | 0x0020 | 0x0021 |
| 0x2D6F | 0x000A | 0x001A | 0x0043 | 0x0040 |
| 0x2D70 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D71 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D72 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D74 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2D75 | 0x000A | 0x0015 | 0x001F | 0x0023 |
| 0x2D76 | 0x001B | 0x001C | 0x0023 | 0x001F |
| 0x2D77 | 0x000A | 0x001A | 0x0021 | 0x000B |
| 0x2DBF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DC1 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DCF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD9 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDB | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDC | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDD | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDE | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2DE6 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2E24 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E25 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E26 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E27 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E28 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E29 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2A | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2B | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2C | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2D | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2E | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2F | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E3C | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E3D | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E3E | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E3F | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E40 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E41 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E42 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E43 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E44 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E45 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E46 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E47 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E48 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E49 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E4A | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E4B | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E4C | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E4D | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E4E | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E4F | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E50 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E51 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E52 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E53 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E60 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2E68 | 0x000A | 0x001A | 0x008D | 0x0094 |
| 0x2E69 | 0x000A | 0x001A | 0x0092 | 0x008F |
| 0x2E6A | 0x000A | 0x001A | 0x008E | 0x0091 |
| 0x2E6E | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E6F | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E72 | 0x000A | 0x001A | 0x0080 | 0x0081 |
| 0x2E73 | 0x000A | 0x001A | 0x0080 | 0x0081 |
| 0x2E7A | 0x000A | 0x001A | 0x00FF | 0x00FF |
| 0x2E7B | 0x000A | 0x001A | 0x00FF | 0x00FF |
| 0x2E97 | 0x0014 | 0x00BA | 0x000A | 0x00BB |
| 0x2E98 | 0x000A | 0x0014 | 0x0013 | 0x00BB |
| 0x2E99 | 0x0014 | 0x00BA | 0x000A | 0x00BB |
| 0x2E9A | 0x000A | 0x0014 | 0x0013 | 0x00BB |
| 0x2E9F | 0x000A | 0x0014 | 0x0012 | 0x003C |
| 0x2EE0 | 0x0025 | 0x0013 | 0x000A | 0x0072 |
| 0x2EE1 | 0x0025 | 0x0013 | 0x000A | 0x0072 |
| 0x2EE4 | 0x00A5 | 0x0013 | 0x003E | 0x0024 |
| 0x2EEA | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EF4 | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EF5 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2EFC | 0x000A | 0x0012 | 0x0014 | 0x006B |
| 0x2EFE | 0x000A | 0x0012 | 0x0014 | 0x006B |
| 0x2F08 | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F09 | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F0B | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F17 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2F44 | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2F45 | 0x000A | 0x0012 | 0x0014 | 0x00BE |
| 0x2F46 | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2F4E | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F4F | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F50 | 0x000A | 0x001A | 0x0014 | 0x00CB |
| 0x2F59 | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2F5A | 0x000A | 0x001A | 0x0014 | 0x000B |
| 0x2F62 | 0x000A | 0x0012 | 0x000B | 0x0014 |
| 0x2F6C | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F71 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F77 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F78 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F7B | 0x000A | 0x0012 | 0x001A | 0x008C |
| 0x2F7E | 0x000A | 0x0024 | 0x0012 | 0x00A5 |
| 0x2F7F | 0x000A | 0x0024 | 0x0012 | 0x00A5 |
| 0x2F80 | 0x0014 | 0x0024 | 0x00A5 | 0x008C |
| 0x2F87 | 0x000A | 0x0024 | 0x0012 | 0x00A5 |
| 0x2F88 | 0x000A | 0x0024 | 0x0012 | 0x00A5 |
| 0x2F8A | 0x000A | 0x0014 | 0x0024 | 0x0012 |
| 0x2FA3 | 0x0014 | 0x000A | 0x008C | 0x00BE |
| 0x30AC | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30AD | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30AE | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30AF | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B0 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B1 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B2 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B3 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B4 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B5 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B6 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30B7 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x30D4 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x30E8 | 0x000A | 0x001A | 0x0011 | 0x0023 |
| 0xCD87 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCD8B | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDB7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDC7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDCB | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDDD | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDE0 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xFFFF | 0x00FF | 0x00FF | 0x00FF | 0x00FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Regelstatus Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0003 | Relative Luftmasse | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0004 | Motortemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x0005 | Regelfaktor Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0006 | Adaptionsfaktor Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x000A | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x000B | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0011 | Luftmassenfluß | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x0012 | Motortemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0013 | Ansauglufttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0014 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x0015 | Drosselklappenwinkel bez. auf unteren Anschlag | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0,0 |
| 0x0016 | Sondenspannung vor Katalysator Bank 1 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
| 0x0017 | Sondenspannung hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
| 0x001A | relative Luftfüllung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x001B | Spannung Pedalwertgeber Poti 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x001C | Spannung Pedalwertgeber Poti 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x001D | Verdoppelte Spannung Pedalwertgeber Poti 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x001E | Pfadidentifier SKA-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x001F | Pfadidentifier EGAS-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0020 | Pfadidentifier Momenten-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0021 | Istmoment beim Momentenvergleich | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0022 | Pfadidentifier Reset-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0023 | normierter Fahrpedalwinkel | %PED | - | unsigned char | - | 0,39215686917305 | 1 | 0,0 |
| 0x0024 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0025 |  Motortemperatur Ersatzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0026 | Spannung Drosselklappenpotenziometer 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0027 | Spannung Drosselklappenpotenziometer 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0028 | Sollwert DK-Winkel bez. auf unteren Anschlag | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0029 | Abgastemperatur vor Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002B | Katalysatortemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002F | Spannung an der Heizerendstufe hinter Kat | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0033 | Innenwiderstand Lambdasonde hinter Kat. | Ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x0035 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x003C | Tankfüllstand 1L / Ink. | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x003E | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x003F | Motortemperatur-Referenzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0040 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0041 | Ist Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0042 | Zulässiges indiziertes Moment vor Filter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0043 | Indiziertes Sollmoment für ZW-Eingriff vor Momentenbegrenzung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0044 | Innenwiderstand LSU | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x0064 | DK-Winkel der Notluftposition | % | - | unsigned char | - | 0,390630960464478 | 1 | 0,0 |
| 0x0065 | Spannung Drosselklappen-Poti 1 am unteren Anschlag | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0066 | Integratorgradient für Offsetkorrektur Klopfregelung | V/s | - | signed char | - | 23,841869354248 | 1 | 0,0 |
| 0x0069 | Spannung Lambdasonde hinter Katalysator | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x006B | Tastverhältnis Elektrolüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0071 | ADC- Spannung Luftmasse | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0072 | ADC- Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0073 | ADC- Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0074 | ADC- Spannung Temperaturkuehleraustritt | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0075 | ADC- Spannung Umgebungsdrucksensor | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0076 | Dauer-RAM: Sollwert DK-Winkel in Notluftposition, bez. auf UMA | % | - | unsigned char | - | 0,390630960464478 | 1 | 0,0 |
| 0x0077 | Integratorwert Klopfregelung Meßfensterende Testimpuls | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0078 | gefilterte Katalysatortemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x007E | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x0080 | Integratorgradient für Nulltest-Diagnose Klopfregelung | V/s | - | signed char | - | 23,841869354248 | 1 | 0,0 |
| 0x0081 | Integratorwert Klopfregelung Meßfensteranfang | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0082 | Lambda-Sollwert bez. auf Einbauort Lambdasonde | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x0084 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0085 | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0087 | Mittelwert der Amplitude Sondensignal hinter Kat. korrigiert mit KB | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x008B | Faktor Luftdichte f(Ansauglufttemp., Höhe) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x008C | Zeitzähler ab Startende | s | - | unsigned char | - | 25,6000003814697 | 1 | 0,0 |
| 0x008D | normierter Referenzpegel KR SW- Zylinder 0 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x008E | normierter Referenzpegel KR SW- Zylinder 1 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x008F | normierter Referenzpegel KR SW- Zylinder 2 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0090 | normierter Referenzpegel KR SW- Zylinder 3 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0091 | normierter Referenzpegel KR SW- Zylinder 4 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0092 | normierter Referenzpegel KR SW- Zylinder 5 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0093 | normierter Referenzpegel KR SW- Zylinder 6 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0094 | normierter Referenzpegel KR SW- Zylinder 7 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0095 | Statusflag ti- Abschaltung bei kat. schädigenden Aussetzerraten | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0096 | Tankfüllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0097 | DMTL Pumpenstrom Referenzleck | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x0098 | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 1,60000002384186 | 1 | 0,0 |
| 0x009A | Differenz Pumpstrom zwischen Referenz und min. bei Grobleckmessung | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x009D | I-Anteil der stetigen LRHK (Byte) | - | - | signed char | - | 4,8828125E-4 | 1 | 0,0 |
| 0x009F | Korrekturwert der LSU-Spannung vor Kat (Byte) | V | - | signed char | - | 0,001953125 | 1 | 0,0 |
| 0x00A1 | Statusbyte: Teilprüfungserkennung für Plausibilitätsfehler | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00A3 | Abgasmassenfluß gefiltert, Bank 1 | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x00A5 | Abstellzeit (Byte) | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x00A6 | LSU-Spannung vor Kat, korrigiert (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A8 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00AA | Dynamikwert der LSU (Byte) | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00AC | multiplikativer Gemischadaptionsfaktor unterer mult. Bereich (Byte) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00AE | Regelabweichung Lambda (Byte) | - | - | signed char | - | 0,0078125 | 1 | 0,0 |
| 0x00B0 | Lambdaamplitude nach Filterung (Byte) | - | - | signed char | - | 0,0625 | 1 | 0,0 |
| 0x00B2 | Lambda-Istwert (Byte) | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00B4 | Absolutdruck Abgassystem (Byte) | hPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x00B6 | gefilterte Abgastemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00B8 | gefilterte Sondenspannung vor Kat einer Breitbandlambdasonde (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00BA | Generatorspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x00BB | vom Generator empfangenes Lastsignal | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00BC | Generatortemperatur | Grad C | - | unsigned char | - | 192,0 | 1 | -48,0 |
| 0x00BD | Beladung des Aktivkohlefilters | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x00BE | Betriebszeit | min | - | unsigned char | - | 1536,0 | 1 | 0,0 |
| 0x00BF | Abgastemperatur im Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00C1 | Istwert Lambdasonde, korrigiert um Zusatzamplitude | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00C3 | VVT-Sollwert in Prozent bzgl Verstellbereich Bank1 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C5 | VVT-Istwert in Prozent bzgl. Verstellbereich Bank1 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C7 | Betriebsartenbyte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00C8 | Delta Counter NVRAM-Backup | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00C9 | Status SMG-Diagnose | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00CA | Korrekturfaktor Höhe (byte) | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00CB | Fahrzeuggeschwindigkeit, CAN-Signal | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00D4 | intelligenter Batteriesensor Fehler 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00D5 | intelligenter Batteriesensor Fehler 2 | - | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x00D6 | Referenzmoment für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00D9 | relative Kraftstoffmasse | % | - | unsigned char | - | 3,0 | 1 | 0,0 |
| 0x00DA | O2- Überschuss bzw. O2-Mangel der LSU im Abgas | % O2 | - | signed char | - | 0,25 | 1 | 0,0 |
| 0x00DB | Korrekturwert für den Innenwiderstand der Nernstzelle der LSU (Byte) | Ohm | - | signed char | - | 10,0 | 1 | 0,0 |
| 0x00DC | Korrekturfaktor für Funktionspumstrom LSU aus Schubabgleich | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00DD | Abstand zur Startfähigkeitsgrenze | % | - | unsigned char | - | 1,02400004863739 | 1 | -100,0 |
| 0x00DF | aktuelle Batteriespannung | V | - | unsigned char | - | 0,0640000030398369 | 1 | 6,0 |
| 0x00E0 | aktuelles Oelniveau korrigiert | - | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x00E1 | relativer Fuellstand des Motoroels | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00F9 | vom Generator empfangene Generatorsollspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x00FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29CD | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29CE | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29CF | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D0 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D1 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D2 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D3 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D4 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D5 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D6 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D7 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D8 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29DD | 0x0000 | 0x1116 | 0x0000 | 0x1117 |
| 0x29E2 | 0x1644 | 0x1645 | 0x11F8 | 0x1014 |
| 0x29E3 | 0x1118 | 0x1119 | 0x111B | 0x111A |
| 0x29E4 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x29E5 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x29E7 | 0x0000 | 0x0000 | 0x111C | 0x111D |
| 0x29ED | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x29EF | 0x111E | 0x111F | 0x1009 | 0x1008 |
| 0x29F0 | 0x111E | 0x111F | 0x1009 | 0x1008 |
| 0x29F4 | 0x0000 | 0x0000 | 0x100A | 0x0000 |
| 0x2A12 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A13 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A14 | 0x0000 | 0x0000 | 0x0000 | 0x15F4 |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x1121 |
| 0x2A16 | 0x0000 | 0x0000 | 0x15F4 | 0x0000 |
| 0x2A17 | 0x101D | 0x15F5 | 0x101F | 0x101C |
| 0x2A18 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A19 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A1A | 0x0000 | 0x0000 | 0x1123 | 0x0000 |
| 0x2A1D | 0x1124 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A1E | 0x0000 | 0x13C5 | 0x1015 | 0x1060 |
| 0x2A21 | 0x0000 | 0x13C5 | 0x1015 | 0x1060 |
| 0x2A22 | 0x1024 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A2A | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A58 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A59 | 0x108E | 0x1025 | 0x1127 | 0x1126 |
| 0x2A5B | 0x1128 | 0x112A | 0x1127 | 0x1129 |
| 0x2A5D | 0x1028 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A5F | 0x0000 | 0x0000 | 0x112B | 0x112C |
| 0x2A61 | 0x0000 | 0x102A | 0x112D | 0x112E |
| 0x2A63 | 0x112F | 0x1029 | 0x0000 | 0x0000 |
| 0x2A65 | 0x1130 | 0x1132 | 0x1133 | 0x1131 |
| 0x2A67 | 0x1134 | 0x102F | 0x1015 | 0x1014 |
| 0x2A69 | 0x102E | 0x0000 | 0x1135 | 0x1136 |
| 0x2A6B | 0x0000 | 0x1137 | 0x1039 | 0x1138 |
| 0x2A6C | 0x0000 | 0x0000 | 0x0000 | 0x1139 |
| 0x2A6D | 0x113A | 0x113D | 0x113C | 0x113B |
| 0x2A6F | 0x0000 | 0x0000 | 0x0000 | 0x113E |
| 0x2A78 | 0x16F9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A79 | 0x16F9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7A | 0x15D0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7C | 0x15D0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A80 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A83 | 0x113F | 0x0000 | 0x1140 | 0x0000 |
| 0x2A85 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A88 | 0x113F | 0x0000 | 0x1140 | 0x0000 |
| 0x2A8A | 0x0000 | 0x0000 | 0x1141 | 0x0000 |
| 0x2A8C | 0x0000 | 0x0000 | 0x1142 | 0x0000 |
| 0x2A8E | 0x0000 | 0x0000 | 0x1143 | 0x0000 |
| 0x2A90 | 0x0000 | 0x0000 | 0x1143 | 0x0000 |
| 0x2AE2 | 0x0000 | 0x16FD | 0x0000 | 0x0000 |
| 0x2B2C | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2B5C | 0x0000 | 0x1144 | 0x0000 | 0x0000 |
| 0x2B5D | 0x1145 | 0x1146 | 0x0000 | 0x1147 |
| 0x2B62 | 0x1148 | 0x1149 | 0x1015 | 0x1014 |
| 0x2B63 | 0x1148 | 0x1149 | 0x1015 | 0x1014 |
| 0x2B66 | 0x0000 | 0x114A | 0x0000 | 0x0000 |
| 0x2B7A | 0x0000 | 0x1016 | 0x1015 | 0x1020 |
| 0x2B7F | 0x0000 | 0x0000 | 0x114B | 0x114C |
| 0x2B81 | 0x0000 | 0x0000 | 0x114D | 0x114E |
| 0x2B82 | 0x0000 | 0x0000 | 0x114F | 0x1150 |
| 0x2B84 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2B98 | 0x1151 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B99 | 0x0000 | 0x0000 | 0x1152 | 0x1153 |
| 0x2B9A | 0x1154 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B9B | 0x1155 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B9C | 0x1156 | 0x1157 | 0x1158 | 0x0000 |
| 0x2BA7 | 0x0000 | 0x0000 | 0x0000 | 0x1159 |
| 0x2BAC | 0x115A | 0x0000 | 0x0000 | 0x0000 |
| 0x2BAD | 0x115B | 0x115C | 0x0000 | 0x0000 |
| 0x2BC0 | 0x10EE | 0x1090 | 0x0000 | 0x0000 |
| 0x2BC1 | 0x0000 | 0x13C5 | 0x13C7 | 0x13C6 |
| 0x2C24 | 0x1160 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C31 | 0x0000 | 0x0000 | 0x1161 | 0x1162 |
| 0x2C37 | 0x0000 | 0x1163 | 0x0000 | 0x0000 |
| 0x2C39 | 0x0000 | 0x0000 | 0x1076 | 0x0000 |
| 0x2C3B | 0x1164 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C47 | 0x0000 | 0x0000 | 0x1015 | 0x1014 |
| 0x2C49 | 0x1165 | 0x1166 | 0x1309 | 0x130A |
| 0x2C4B | 0x1072 | 0x1169 | 0x1167 | 0x1168 |
| 0x2C4D | 0x116A | 0x116B | 0x0000 | 0x116C |
| 0x2C4F | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2C51 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2C53 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2C61 | 0x0000 | 0x0000 | 0x0000 | 0x116D |
| 0x2C6D | 0x116E | 0x1171 | 0x1170 | 0x116F |
| 0x2C71 | 0x1172 | 0x1016 | 0x1173 | 0x1014 |
| 0x2C84 | 0x0000 | 0x15F3 | 0x0000 | 0x1490 |
| 0x2C9C | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2C9E | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2CA0 | 0x1174 | 0x1177 | 0x1175 | 0x1176 |
| 0x2CA8 | 0x1178 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CEF | 0x1179 | 0x117B | 0x117C | 0x117A |
| 0x2CF0 | 0x0000 | 0x0000 | 0x117D | 0x117E |
| 0x2CF1 | 0x117F | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF8 | 0x1180 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x1181 | 0x0000 | 0x1015 | 0x1014 |
| 0x2CFA | 0x1181 | 0x0000 | 0x1015 | 0x1014 |
| 0x2CFF | 0x1182 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D00 | 0x0000 | 0x0000 | 0x1183 | 0x1184 |
| 0x2D01 | 0x0000 | 0x0000 | 0x1185 | 0x1186 |
| 0x2D02 | 0x1187 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D03 | 0x0000 | 0x0000 | 0x1188 | 0x1189 |
| 0x2D04 | 0x118A | 0x0000 | 0x0000 | 0x0000 |
| 0x2D05 | 0x118B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D0F | 0x0000 | 0x0000 | 0x1015 | 0x1014 |
| 0x2D13 | 0x0000 | 0x0000 | 0x118C | 0x118D |
| 0x2D1A | 0x118E | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1B | 0x1632 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D1C | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D28 | 0x0000 | 0x0000 | 0x1192 | 0x1193 |
| 0x2D29 | 0x1194 | 0x0000 | 0x1196 | 0x1195 |
| 0x2D36 | 0x0000 | 0x0000 | 0x1355 | 0x1136 |
| 0x2D37 | 0x0000 | 0x0000 | 0x1355 | 0x1136 |
| 0x2D6D | 0x115A | 0x0000 | 0x0000 | 0x0000 |
| 0x2D6E | 0x1197 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D6F | 0x1198 | 0x1199 | 0x119A | 0x0000 |
| 0x2D70 | 0x119B | 0x119E | 0x119C | 0x119D |
| 0x2D71 | 0x119F | 0x11A1 | 0x11A2 | 0x11A0 |
| 0x2D72 | 0x0000 | 0x0000 | 0x0000 | 0x11A3 |
| 0x2D74 | 0x11A4 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D75 | 0x11A5 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D76 | 0x11A6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D77 | 0x0000 | 0x0000 | 0x0000 | 0x11A7 |
| 0x2DBF | 0x11A8 | 0x10B9 | 0x11AA | 0x11A9 |
| 0x2DC1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2DCF | 0x11AB | 0x10B9 | 0x11AA | 0x0000 |
| 0x2DD7 | 0x1418 | 0x10B9 | 0x1417 | 0x0000 |
| 0x2DD9 | 0x11AC | 0x10B9 | 0x11AA | 0x0000 |
| 0x2DDA | 0x11AD | 0x10B9 | 0x0000 | 0x0000 |
| 0x2DDB | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2DDC | 0x11A8 | 0x10B9 | 0x11AA | 0x0000 |
| 0x2DDD | 0x11AE | 0x10B9 | 0x0000 | 0x0000 |
| 0x2DDE | 0x10B9 | 0x11AF | 0x0000 | 0x11AA |
| 0x2DE6 | 0x11B0 | 0x1102 | 0x0000 | 0x0000 |
| 0x2E24 | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E25 | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E26 | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E27 | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E28 | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E29 | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E2A | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E2B | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E2C | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E2D | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E2E | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E2F | 0x11B1 | 0x11B2 | 0x11B4 | 0x11B3 |
| 0x2E3C | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E3D | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E3E | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E3F | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E40 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E41 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E42 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E43 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E44 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E45 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E46 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E47 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E48 | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E49 | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4A | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4B | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4C | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4D | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4E | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4F | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E50 | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E51 | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E52 | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E53 | 0x10B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E60 | 0x1071 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E68 | 0x11B5 | 0x0000 | 0x11B7 | 0x11B6 |
| 0x2E69 | 0x11B5 | 0x0000 | 0x11B7 | 0x11B6 |
| 0x2E6A | 0x11B5 | 0x0000 | 0x11B7 | 0x11B6 |
| 0x2E6E | 0x12ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2E6F | 0x12ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2E72 | 0x1025 | 0x0000 | 0x11B9 | 0x11B8 |
| 0x2E73 | 0x11BA | 0x0000 | 0x0000 | 0x0000 |
| 0x2E7A | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7B | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E97 | 0x11BB | 0x11BC | 0x0000 | 0x1055 |
| 0x2E98 | 0x10E7 | 0x11BD | 0x0000 | 0x0000 |
| 0x2E99 | 0x11BB | 0x11BC | 0x0000 | 0x1055 |
| 0x2E9A | 0x10E7 | 0x11BD | 0x0000 | 0x0000 |
| 0x2E9F | 0x11BE | 0x11BF | 0x11C1 | 0x11C0 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2EE1 | 0x13BD | 0x11C4 | 0x13BE | 0x13BC |
| 0x2EE4 | 0x0000 | 0x0000 | 0x0000 | 0x1646 |
| 0x2EEA | 0x1194 | 0x0000 | 0x1060 | 0x1015 |
| 0x2EF4 | 0x11C7 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2EFC | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2EFE | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F08 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F09 | 0x1636 | 0x0000 | 0x118C | 0x1646 |
| 0x2F0B | 0x0000 | 0x0000 | 0x12E1 | 0x1646 |
| 0x2F17 | 0x0000 | 0x0000 | 0x0000 | 0x11C8 |
| 0x2F44 | 0x11C9 | 0x11CC | 0x11CA | 0x11CB |
| 0x2F45 | 0x11CD | 0x11CE | 0x11CF | 0x0000 |
| 0x2F46 | 0x0000 | 0x11D0 | 0x11D1 | 0x11D2 |
| 0x2F4E | 0x11D3 | 0x115F | 0x118C | 0x118D |
| 0x2F4F | 0x11D4 | 0x0000 | 0x11D5 | 0x11D6 |
| 0x2F50 | 0x11D7 | 0x0000 | 0x0000 | 0x11D8 |
| 0x2F59 | 0x0000 | 0x11D9 | 0x0000 | 0x0000 |
| 0x2F5A | 0x0000 | 0x11DA | 0x0000 | 0x0000 |
| 0x2F62 | 0x11DB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F6C | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F71 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F77 | 0x11DC | 0x11DF | 0x11DE | 0x11DD |
| 0x2F78 | 0x0000 | 0x0000 | 0x1015 | 0x1014 |
| 0x2F7B | 0x108D | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7E | 0x15CB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7F | 0x15CC | 0x0000 | 0x0000 | 0x0000 |
| 0x2F80 | 0x1194 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2F87 | 0x0000 | 0x0000 | 0x15D8 | 0x15D7 |
| 0x2F88 | 0x0000 | 0x0000 | 0x15D6 | 0x15D5 |
| 0x2F8A | 0x11E0 | 0x11E1 | 0x1191 | 0x1190 |
| 0x2FA3 | 0x11E2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30AC | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30AD | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30AE | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30AF | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B0 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B1 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B2 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B3 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B4 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B5 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B6 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30B7 | 0x0000 | 0x11E3 | 0x11E5 | 0x11E4 |
| 0x30D4 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x30E8 | 0x115A | 0x0000 | 0x11E6 | 0x11E7 |
| 0xCD87 | 0x0000 | 0x11E8 | 0x11EA | 0x11E9 |
| 0xCD8B | 0x0000 | 0x11E8 | 0x11EA | 0x11E9 |
| 0xCDB7 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDC7 | 0x0000 | 0x11E8 | 0x11EA | 0x11E9 |
| 0xCDCB | 0x0000 | 0x11E8 | 0x11EA | 0x11E9 |
| 0xCDDD | 0x11A8 | 0x10B9 | 0x11AA | 0x0000 |
| 0xCDE0 | 0x115A | 0x10B9 | 0x11AA | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1008 | Gemisch zu mager |
| 0x1009 | Gemisch zu fett |
| 0x100A | Wirkungsgrad unter Schwellwert |
| 0x1014 | Kurzschluss nach Plus |
| 0x1015 | Kurzschluss nach Minus |
| 0x1016 | Leitungsunterbrechung |
| 0x101C | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x101D | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x101E | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x101F | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x1020 | kurzschluss nach Plus |
| 0x1023 | nicht korrekt geschlossen |
| 0x1024 | Füllstandssignalwert zum Verbrauchswert unplausibel |
| 0x1025 | Parity-Fehler |
| 0x1028 | Sensorsignale zueinander unplausibel |
| 0x1029 | Lagereglerüberwachung |
| 0x102A | keine Anschläge gelernt |
| 0x102E | Relais-Fehler |
| 0x102F | Kurzschluss der Motorleitungen |
| 0x1039 | Exzenterwinkel fährt nicht auf Vollhubposition |
| 0x1055 | Übertemperatur |
| 0x1060 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1071 | Kommunikationsfehler |
| 0x1072 | Initialisierungsfehler |
| 0x1076 | Sondensignal zu träge |
| 0x108D | elektrischer Fehler |
| 0x108E | Gradientenfehler |
| 0x1090 | Signal oberhalb Schwelle |
| 0x10B9 | Timeout |
| 0x10E7 | Generatortyp nicht plausibel |
| 0x10EE | Signal unterhalb Schwelle |
| 0x1102 | CAN Timeout |
| 0x1113 | Verbrennungsaussetzer im Warmlauf, emissionsverschlechternd |
| 0x1114 | Verbrennungsaussetzer betriebswarm, emissionsverschlechternd |
| 0x1115 | Verbrennungsaussetzer mit Zylinderabschaltung |
| 0x1116 | kein Raddrehzahlsignal erhalten |
| 0x1117 | Radgeschwindigkeit zu hoch |
| 0x1118 | Fehlfunktion |
| 0x1119 | Druckschwingungen |
| 0x111A | Raildruck zu hoch |
| 0x111B | Raildruck zu niedrig |
| 0x111C | System zu fett additiv pro Zeit zu groß |
| 0x111D | System zu mager additiv pro Zeit zu groß |
| 0x111E | System zu fett additiv pro Zeit zu gross |
| 0x111F | System zu mager additiv pro Zeit zu gross |
| 0x1120 | Feinleck erkannt |
| 0x1121 | Leckage größer 1,0mm |
| 0x1122 | sehr kleines Leck detektiert |
| 0x1123 | Tankentlüftungssystem |
| 0x1124 | Tankfüllstandssignal unplausibel |
| 0x1125 | CAN, Ungültigkeitswert empfangen |
| 0x1126 | Magnetloss-Fehler |
| 0x1127 | Reset-Fehler |
| 0x1128 | Gradientenüberschreitung |
| 0x1129 | Magnetloss |
| 0x112A | Parity-Fehler oder kein Signal |
| 0x112B | Sensorversorgungsspannung zu klein |
| 0x112C | Sensorversorgungsspannung zu hoch |
| 0x112D | Fehler unteres Lernfenster |
| 0x112E | Verstellbereich fehlerhaft |
| 0x112F | Drehrichtungserkennung |
| 0x1130 | ROM-Test-Fehler |
| 0x1131 | EEPROM-Test-Fehler |
| 0x1132 | Watchdog oder Temperatursensorfehler |
| 0x1133 | RAM-Test-Fehler |
| 0x1134 | Ansteuerungsfehler allgemein |
| 0x1135 | Spannung zu klein |
| 0x1136 | Spannung zu hoch |
| 0x1137 | Plausibilitätsfehler Luftmasse |
| 0x1138 | Drehzahlfüllungsbegrenzung |
| 0x1139 | Anschläge lernen notwendig |
| 0x113A | Überlastschutz Valvetronic-System |
| 0x113B | Strom E-Motor zu hoch |
| 0x113C | Temperatur E-Motor zu hoch |
| 0x113D | Steuergerätetemperatur zu hoch |
| 0x113E | maximale Anzahl der Minhubanschläge überschritten |
| 0x113F | Regelanschlag zu lange zu groß |
| 0x1140 | Anschlagadaption außerhalb gültigem Bereich |
| 0x1141 | Anschlagadaptionen außerhalb gültigem Bereich |
| 0x1142 | llenverstellung hat Spätposition nicht erreicht |
| 0x1143 | Korrelationsfehler, ein Zahn Versatz |
| 0x1144 | Leitungsunterbrechung, Drehzahlsignal |
| 0x1145 | Kurbelwellen Zahnfehler oder Lückenverlust |
| 0x1146 | Zahnkorrektur bei einem Zahn zuwenig |
| 0x1147 | Zahnkorrektur bei einem Zahn zuviel |
| 0x1148 | unplausible Phasenflankenanzahl |
| 0x1149 | Lage der Phasenflanken oder Einbaulage außerhalb Toleranzen |
| 0x114A | keine Master-Nockenwelle vorhanden |
| 0x114B | Massenstromadaption zu klein |
| 0x114C | Massenstromadaption zu groß |
| 0x114D | Unterdrehzahlfehler (LL-Steller Öffnung zu gering) |
| 0x114E | Überdrehzahlfehler (LL-Steller oder Leckluft) |
| 0x114F | Unterdrehzahlfehler (Leerlauf-Steller Öffnung zu gering) |
| 0x1150 | Überdrehzahlfehler (Leerlauf-Steller oder Leckluft) |
| 0x1151 | Aktualitätszähler EEPROM und RAMBACKUP unterschiedlich |
| 0x1152 | Schreibfehler, RAM Backup fehlerhaft |
| 0x1153 | Lesefehler, RAM Backup fehlerhaft |
| 0x1154 | Rechnerüberwachung: RAM |
| 0x1155 | Rechnerüberwachung: ROM |
| 0x1156 | Rechnerüberwachung: RESET |
| 0x1157 | Reset aus der TPU-Überwachung |
| 0x1158 | Reset aus dem TPU-RAM-Test |
| 0x1159 | maximal zulässiges Sollmoment wird dauerhaft überschritten |
| 0x115A | Plausibilitätsfehler |
| 0x115B | Master/Slave-DME - Plausibilitätsfehler |
| 0x115C | Master/Slave-DME - Identifizierung fehlerhaft |
| 0x115D | Umgebungstemperatur grösser als Modelltemperatur |
| 0x115E | Umgebungstemperatur kleiner als Modelltemperatur |
| 0x115F | CAN Botschaft fehlerhaft |
| 0x1160 | vertauschte Lambdasonden |
| 0x1161 | Offsetprüfung, System zu mager |
| 0x1162 | Offsetprüfung, System zu fett |
| 0x1163 | Heizereinkopplung auf Signalpfad |
| 0x1164 | Sonde an Luft |
| 0x1165 | Signal zu mager |
| 0x1166 | Signal zu fett |
| 0x1167 | Betriebsspannung am IC zu niedrig |
| 0x1168 | Signalkreisaptionswert zu hoch |
| 0x1169 | SPI Kommunikation gestört |
| 0x116A | Signalspannung im Schub zu klein infolge offener Pumpstromleitung |
| 0x116B | Unterbrechung Pumpstrompfad |
| 0x116C | Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x116D | Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizerfehler |
| 0x116E | Sonde dynamisch zu langsam |
| 0x116F | Signal überschreitet Schwellwert nicht |
| 0x1170 | Signal unterschreitet Schwellwert nicht |
| 0x1171 | Schubspannungsschwelle nicht erreicht |
| 0x1172 | Heiztakteinkopplung auf Signal |
| 0x1173 | Adernschluss oder CSD (Referenzluft vergiftet) |
| 0x1174 | Innenwiderstand der Nernstzelle unplausibel oder zu späte Betriebsbereitschaft |
| 0x1175 | RI-Regler dauerhaft am unteren Anschlag |
| 0x1176 | RI-Regler dauerhaft am oberen Anschlag |
| 0x1177 | Kalibrierwiderstand in DME fehlerhaft |
| 0x1178 | Sondenheizung defekt (Innenwiderstand) |
| 0x1179 | interner SPI Kommunikationfehler |
| 0x117A | Kurzschluss |
| 0x117B | Lastabfall |
| 0x117C | Überlastung |
| 0x117D | Lageregelung klemmt kurzzeitig |
| 0x117E | Lageregelung klemmt anhaltend |
| 0x117F | Lageabweichung |
| 0x1180 | Poti 1 oder Poti 2 fehlerhaft , oder beide unplausibel zum Ersatzwert |
| 0x1181 | unplausibel zu Ersatzwert aus Füllung |
| 0x1182 | DVE-Fehler bei Verstärkerabgleich |
| 0x1183 | Fehler bei Prüfung der öffnenden Feder |
| 0x1184 | Fehler bei Prüfung der Rückstellfeder |
| 0x1185 | Fehler bei Federprüfung Öffnen |
| 0x1186 | Fehler bei Federprüfung Öffnen, Abbruch Feder öffnet nicht |
| 0x1187 | DVE-Fehler bei Prüfung Notluftposition |
| 0x1188 | Lernverbot, Batteriespannung zu niedrig |
| 0x1189 | Lernfreigabe, aber Umweltbedingungen unplausibel |
| 0x118A | UMA-Lernen während Urinitialisierung abgebrochen |
| 0x118B | wiederholtes UMA-Lernen fehlerhaft |
| 0x118C | untere Schwelle unterschritten |
| 0x118D | obere Schwelle überschritten |
| 0x118E | Geber 1 oder Geber 2 fehlerhaft oder außerhalb der Toleranz |
| 0x118F | Gleichlauffehler zwischen PWG1 und PWG2 |
| 0x1190 | Spannungsschwellwert überschritten |
| 0x1191 | Spannungsschwellwert unterschritten |
| 0x1192 | Signal unterhalb Schwelle, Kurzschluss nach Minus |
| 0x1193 | Signal oberhalb Schwelle, Kurzschluss nach Plus |
| 0x1194 | Unplausibel |
| 0x1195 | Drucksensor hat obere Schwelle überschritten |
| 0x1196 | Drucksensor hat untere Schwelle unterschritten |
| 0x1197 | Funktionsüberwachung Momentenvergleich |
| 0x1198 | Lastsensor-, Zuleitung- oder DME-Fehler |
| 0x1199 | Valvetronic, Ventil Plausibilisierung |
| 0x119A | Drucksensor Plausibilisierung |
| 0x119B | Reaktionsüberwachung |
| 0x119C | Zündwinkelüberwachung |
| 0x119D | RL-Überwachung |
| 0x119E | ADC-Überwachung |
| 0x119F | Drosselklappen-Anschlagüberwachung (UMA) Ebene 2 |
| 0x11A0 | Rkti - Plausibilisierung |
| 0x11A1 | Varianten Codierungsüberwachung |
| 0x11A2 | GKC Kraftstoffkorrektur |
| 0x11A3 | TPU-Überwachung |
| 0x11A4 | Funktionsüberwachung  Lambdaplausibilisierung |
| 0x11A5 | Funktionsüberwachung Drehzahlgeber-, Zuleitung- oder DME-Fehler |
| 0x11A6 | Pedalwertgeber-, Zuleitung- oder DME-Fehler |
| 0x11A7 | Bankabweichung zu gross |
| 0x11A8 | Checksumme fehlerhaft |
| 0x11A9 | Bremsüberwachung, keine ACC Reaktion |
| 0x11AA | Alive-Fehler |
| 0x11AB | MIL-Check |
| 0x11AC | Delta-Ist- oder Delta-Soll-Moment unplausibel |
| 0x11AD | Checksumme fehlerhaft oder Alive-Fehler |
| 0x11AE | Checksumme oder Alive-Fehler |
| 0x11AF | Valvetronic, Sollwert-Botschaft nicht empfangen |
| 0x11B0 | interner Prüfsummenfehler |
| 0x11B1 | Signal nicht plausibel, Zündkreisüberwachung |
| 0x11B2 | Übertemperaturabschaltung oder Signalabfall |
| 0x11B3 | Kurzschluss nach Plus, Nichtimpedanz |
| 0x11B4 | Übergangswiderstand, Hochimpedanz |
| 0x11B5 | mehrere Leitungsfehler detektiert |
| 0x11B6 | Motor mechanisch zu laut oder Sensor außerhalb Toleranz (Empfindlichkeit) |
| 0x11B7 | elektrischer Fehler (Wackelkontakt oder Sensor locker) |
| 0x11B8 | Testimpulsfehler |
| 0x11B9 | Nulltestfehler |
| 0x11BA | SPI Kommunikation unplausibel |
| 0x11BB | Mechanisch |
| 0x11BC | Elektrisch |
| 0x11BD | Keine Kommunikation über BSD-Schnittstelle |
| 0x11BE | Permittivitätsmessung fehlerhaft |
| 0x11BF | Kommunikationsfehler Ölsensor |
| 0x11C0 | Temperaturmessung fehlerhaft |
| 0x11C1 | Niveaumessung fehlerhaft |
| 0x11C2 | unplausibel |
| 0x11C3 | Signalfehler aus High-Side-Check erkannt |
| 0x11C4 | Motortemperaturschwelle für Lambdaregelungsfreigabe nicht erreicht |
| 0x11C5 | Motortemperatursignal im unteren Bereich nicht plausibel |
| 0x11C6 | Kaltstart, Nebenschluss erkannt |
| 0x11C7 | Thermostat fehlerhaft |
| 0x11C8 | Maximalwert Öltemperatur überschritten |
| 0x11C9 | EWS-Telegramme fehlerhaft. Fangbereichsrechnung fehlgeschlagen |
| 0x11CA | Startwert nicht programmiert |
| 0x11CB | Startwert im Flash zerstört oder 2- aus 3-Auswahl fehlgeschlagen oder Startwertprogrammierroutine fehlerhaft |
| 0x11CC | Fehler beim Programmieren oder Rücksetzen des Startwertes |
| 0x11CD | Mehr als 3 Parity-Fehler erkannt |
| 0x11CE | Timeoutfehler: 10 Sekunden nach Kl. 15 EIN noch kein EWS-Telegramm empfangen, evtl. Leitungsunterbre |
| 0x11CF | Empfangsfehler des EWS-Telegramms (Start-, Stopbit- oder Framefehler) |
| 0x11D0 | Schreibfehler, Wechselcodeablage im EEPROM-Spiegel |
| 0x11D1 | Fehler Wechselcode-Ablage (z.B. Powerfail) |
| 0x11D2 | Lesefehler, Wechselcodeablage im EEPROM-Spiegel |
| 0x11D3 | keine Signaländerungen |
| 0x11D4 | Geschwindigkeit unplausibel |
| 0x11D5 | Mindestgeschwindigkeit im Schub nicht erreicht |
| 0x11D6 | Mindestgeschwindigkeit unter Last nicht erreicht |
| 0x11D7 | Geschwindigkeitssignal vom Kombi und ASC nicht kompatibel |
| 0x11D8 | Kombi hat ungültiges Signal gesendet |
| 0x11D9 | Start in laufenden Motor |
| 0x11DA | Signalfehler Startautomatik |
| 0x11DB | Prüfresultat unplausibel |
| 0x11DC | Differenz Umgebungsdruck zwischen Master- und Slave-DME zu gross |
| 0x11DD | Signal oder Wert oberhalb Schwelle |
| 0x11DE | Signal oder Wert unterhalb Schwelle |
| 0x11DF | Stetigkeitsfehler |
| 0x11E0 | ADC-defekt, Hardwarefehler |
| 0x11E1 | Stromversorgung instabil |
| 0x11E2 | DME nicht codiert |
| 0x11E3 | Lastabfall Lowside oder Highside |
| 0x11E4 | Windungsschluss oder Kurzschluss nach Plus Lowside |
| 0x11E5 | Kurzschluss nach Minus Lowside oder Highside oder Kurzschluss nach Plus Highside |
| 0x11E6 | Lambda zu fett |
| 0x11E7 | Überlast Hochdruckpumpe |
| 0x11E8 | CAN Baustein Bus Off oder CAN-Bus defekt |
| 0x11E9 | CAN Baustein im Zustand Passiv |
| 0x11EA | CAN Baustein DPRAM defekt |
| 0x11F8 | Kurzschluss nach Masse |
| 0x129A | Druck zu hoch |
| 0x129B | Druck zu niedrig |
| 0x12E1 | Temperatur zu niedrig |
| 0x12ED | Bankabschaltung |
| 0x1309 | System zu mager |
| 0x130A | System zu fett |
| 0x1355 | Spannung zu niedrig |
| 0x13BC | High-Side Check unplausibel |
| 0x13BD | Stuck-Check unplausibel |
| 0x13BE | Low-Side Check unplausibel |
| 0x13C5 | CAN Botschaft Ungültig |
| 0x13C6 | Wert oberhalb Schwelle |
| 0x13C7 | Wert unterhalb Schwelle |
| 0x1417 | Alivefehler |
| 0x1418 | Checksummenfehler |
| 0x1490 | langsame Reaktion von Fett nach Mager (Transient Time) |
| 0x15CB | Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CC | Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15D0 | nicht regelbar |
| 0x15D4 | Zündwinkel zu früh |
| 0x15D5 | zu schnell im Motorlauf |
| 0x15D6 | zu langsam im Motorlauf |
| 0x15D7 | zu schnell im Nachlauf |
| 0x15D8 | zu langsam im Nachlauf |
| 0x15F3 | verzögerte Reaktion von Fett nach Mager (Response Time) |
| 0x15F4 | Leckage größer 0,5mm |
| 0x15F5 | Abbruch wegen Stromschwankungen bei Referenzleckmessung |
| 0x1632 | Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 |
| 0x1636 | Signal, festliegend |
| 0x1644 | Arbeitsbereich, Druck zu niedrig |
| 0x1645 | Arbeitsbereich, Druck zu hoch |
| 0x1646 | Temperatur zu hoch |
| 0x16F9 | Position nicht erreicht |
| 0x16FD | Drehzahl unplausibel |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### VVTSTATUSBG2_2

| STATI | TEXT |
| --- | --- |
| 0x00 | Anschlaege werden gerade gelernt |
| 0x01 | Lernanforderung durch VVT-SG zurueckgewiesen |
| 0x02 | Lernen durch DME abgebrochen |
| 0x03 | Lernen durch VVT abgebrochen |
| 0x05 | Keine Anforderung zum Anschlaglernen |
| 0x06 | Lernvorgang beendet |
| 0x07 | Signal ungueltig |
| 0xXY | Fehlerhafter Status |

### EWSSTART

| STATI | TEXT |
| --- | --- |
| 0x00 | MED9.2.2 bereit, Startwert zu empfangen |
| 0x01 | Kein freier Startwert mit Freigabe vorhanden |
| 0x02 | Noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel (wie im DS2-LH definiert) |
| 0xXY | Fehlerhafter Status |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwertprogrammierung bzw. Wechselcoderuecksetzung war erfolgreich |
| 0x01 | Falscher Startwert b. Ruecksetzen (EWS u. DME haben nicht den gl. Startwert) |
| 0x02 | Telegramminhalt war kein Startwert (event. Wechselcode) |
| 0x03 | Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout) |
| 0x04 | Prozess laeuft |
| 0x05 | Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt |
| 0x06 | Gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung |
| 0x07 | Noch kein Startwert programmiert |
| 0x10 | Startwert nicht korrekt in Flash programmiert |
| 0x11 | Wechselcode nicht korrekt in EEPROM-Spiegel programmiert |
| 0x12 | Zufallszahl nicht korrekt in EEPROM-Spiegel programmiert |
| 0x20 | Fehler bei Startwert-Programmierroutine |
| 0x21 | 2-aus-3-Startwertablage im Flash nicht in Ordnung |
| 0x22 | Ablage im EEPROM-Spiegel nicht in Ordnung |
| 0xXY | Fehlerhafter Status |

### REGEL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | --                                                                    |
| 0x01 | Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | Regelung EIN |
| 0x04 | Regelung AUS wegen Fahrbedingung |
| 0x08 | Regelung AUS wegen erkanntem Fehler |
| 0x10 | Regelung EIN mit Einschraenkung |
| 0xXY | ??                          |

### SLSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Sekundaerluftdiagnose laeuft gerade ab |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x02 | Funktionsanforderung vorhanden |
| 0x05 | keine Funktionsanforderung an die Sekundaerluftdiagnose |
| 0x06 | Systemtest SLS ist beendet |
| 0x10 | Sekundaerluftmindermasse erkannt |
| 0x11 | Sekundaerluftmindermasse erkannt |
| 0x12 | Sekundaerluftmindermasse erkannt  |
| 0x13 | Sekundaerluftdiagnoseergebnis n.i.o. |
| 0x14 | Sekundaerluftdiagnoseergebnis n.i.o |
| 0x15 | Sekundaerluftdiagnoseergebnis n.i.o. |
| 0x16 | Sekundaerluftdiagnoseergebnis i.o. |
| 0x20 | Sekundaerluftwicklungstemperatur zu groß |
| 0x21 | SLP-Abbruch (wg. Sek Druckdifferenz, Batteriesp., Motorluftmasse ...) |
| 0x22 | Messphase abgebrochen |
| 0x23 | Offsetphase abgebrochen |
| 0x24 | Vorsteuerung auf außerhalb der Schwellen |
| 0x25 | Vorsteuerung auf außerhalb der Schwellen |
| 0x26 | Vorsteuerung auf außerhalb der Schwellen |
| 0x30 | Motortemperatur noch zu gering ist |
| 0x31 | Wicklungstemperatur noch zu hoch ist |
| 0x32 | Fehler einer das Ergebnis beeinflussenden Komonente |
| 0x33 | Motor-,Ansaugluft- o. Kattemperaturen außerh. Grenzen, B_zslsp nicht geloescht |
| 0x34 | Motorluftmasse außerhalb der Grenzen |
| 0x35 | LSU nicht betriebsbereit, VVT umgeschaltet, r1 nicht im Fenster |
| 0x36 | Tankentlueftung ist aktiv |
| 0xFE | nicht genau spezifizierter Grund |
| 0xFF | Ungueltigkeitswert (wird zur Zeit nicht benutzt) |
| 0xXY | Status Systemtest SLS kann nicht ausgegeben werden |

### TEVSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest TEV laeuft |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x05 | Systemtest ist nicht gestartet |
| 0x06 | Systemtest TEV ist beendet |
| 0x08 | TEV noch nicht geschlossen für Drehzahlpruefung |
| 0x09 | Beladungspruefung laeuft |
| 0x0A | Systemtest TEV beendet ohne Fehler |
| 0x0B | Systemtest TEV beendet mit Fehler |
| 0xXY | Status Systemtest TEV kann nicht ausgegeben werden |

### STAGEDMTL

| STAGE | TEXT |
| --- | --- |
| 0x00 | Funktion laeuft |
| 0x01 | Referenzleckmessung laeuft |
| 0x02 | Grobleckpruefung/verlaengerte Grobleckpruefung laeuft |
| 0x03 | Feinstleckpruefung laeuft |
| 0x04 | Referenzleckmessung 2 laeuft |
| 0x05 | Funktion nicht aktiv |
| 0x06 | Funktion beendet |
| 0x0A | Funktion kann nicht gestartet werden |
| 0x0B | Funktion nicht startbar  --> Ubatt ausserhalb Bereich |
| 0x0C | Funktion nicht startbar  --> Schwankung Referenzstrom zu gross |
| 0x0D | Funktion nicht startbar  --> Elektrische Fehler liegen vor |
| 0x0E | Funktion nicht startbar  --> max. Diagnosedauer erreicht |
| 0x0F | Funktion nicht startbar  --> keine Grobleckfreigabe |
| 0x14 | Funktion wurde abgebrochen |
| 0x15 | Abbruch  -->  Betankung erkannt |
| 0x16 | Abbruch  -->  Tankdeckel geoeffnet |
| 0x17 | Abbruch  -->  Ubatt-Schwankung zu gross |
| 0x18 | Abbruch  -->  Bedingung Kl.15 AUS/EIN erkannt |
| 0xXY | Stagepointer unbekannt |

### STAGEDMTLFREEZE

| STAGE | TEXT |
| --- | --- |
| 0x00 | Funktion laeuft |
| 0x01 | Referenzleckmessung |
| 0x02 | Grobleckpruefung/verlaengerte Grobleckpruefung |
| 0x03 | Feinstleckpruefung |
| 0x04 | Referenzleckmessung 2 |
| 0x0A | Funktion kann nicht gestartet werden |
| 0x0B | Funktion war nicht startbar  --> Ubatt ausserhalb Bereich |
| 0x0C | Funktion war nicht startbar  --> Schwankung Referenzstrom zu gross |
| 0x0D | Funktion war nicht startbar  --> Elektrische Fehler liegen vor |
| 0x0E | Funktion war nicht startbar  --> max. Diagnosedauer erreicht |
| 0x0F | Funktion war nicht startbar  --> keine Grobleckfreigabe |
| 0x14 | Funktion wurde abgebrochen |
| 0x15 | Abbruch  -->  Betankung erkannt |
| 0x16 | Abbruch  -->  Tankdeckel geoeffnet |
| 0x17 | Abbruch  -->  Ubatt-Schwankung zu gross |
| 0x18 | Abbruch  -->  Bedingung Kl.15 AUS/EIN erkannt |
| 0x1E | Funktion beendet, Dicht erkannt |
| 0x1F | Funktion beendet, Feinleck erkannt |
| 0x20 | Funktion beendet, Grobleck erkannt |
| 0x21 | Funktion beendet, Modulfehler erkannt |
| 0x22 | Funktion beendet, kein Grobleck erkannt |
| 0xFF | DM-TL Diagnose noch nie durchlaufen |
| 0xXY | Stagepointer unbekannt |

### LSUSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | LSU-Dynamikprüfung noch nicht aktiv |
| 0x01 | Dynamikprüfung aktiv |
| 0x02 | LSU-Prüfung abgeschlossen |
| 0x03 | LSU-Prüfung abgeschlossen (Dynamikprüfung noch aktiv) |
| 0xXY | Status LSU-Diagnose kann nicht ausgegeben werden |

### LAMBDASTATUS

| STATI | TEXT |
| --- | --- |
| 0x01 | Steuerbetrieb, Startbedingungen noch nicht erfuellt |
| 0x02 | Regelbetrieb mit zwei Sonden |
| 0x04 | Steuerbetrieb durch Betriebsbedingungen |
| 0x08 | Steuerbetrieb nach Systemfehler |
| 0x10 | Regelung mit nur einer Sonde (vor Kat) |
| 0xXY | Status LSU-Diagnose kann nicht ausgegeben werden |

### KATSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest KAT laeuft |
| 0x01 | Startbedingungen nicht erfüllt |
| 0x05 | Systemtest ist noch nicht gestartet |
| 0x07 | Funktion abgebrochen wegen anderer Fehlereinträge |
| 0x08 | Funktion vollständig durchlaufen, kein Fehler |
| 0x09 | Funktion vollständig durchlaufen, Fehler erkannt |
| 0xXY | Status Systemtest KAT kann nicht ausgegeben werden |

### BETRIEBSSTUNDENSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Betriebsstundenzaehler verstanden und akzeptiert (top_w < 10h) |
| 0x01 | Betriebsstundenzaehler verstanden aber nicht akzeptiert (top_w > 10h) |
| 0x02 | Betriebsstundenzaehler nicht verstanden und nicht akzeptiert |
| 0xXY | Betriebsstundenzaehler kann nicht ausgegeben werden |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_MILFB | 12 | 0x01 | 0x01 |
| B_MILSL | 13 | 0x01 | 0x01 |
| B_FOFR1 | 19 | 0x01 | 0x01 |
| B_KL15 | 3 | 0x01 | 0x01 |
| B_ESTART | 3 | 0x02 | 0x02 |
| B_KUPPL | 3 | 0x04 | 0x04 |
| B_BL | 3 | 0x08 | 0x08 |
| B_BR | 3 | 0x10 | 0x10 |
| B_KO | 3 | 0x80 | 0x80 |
| B_LL | 3 | 0x01 | 0x01 |
| B_VL | 3 | 0x02 | 0x02 |
| B_SBBHK | 3 | 0x08 | 0x08 |
| B_SBBVK | 3 | 0x20 | 0x20 |
| B_LR | 3 | 0x80 | 0x80 |
| B_KD | 4 | 0x04 | 0x04 |
| B_PN | 4 | 0x08 | 0x08 |
| B_ECULOCK | 4 | 0x10 | 0x10 |
| B_TEHB | 4 | 0x20 | 0x20 |
| B_SA | 4 | 0x40 | 0x40 |
| B_LRNRDY | 4 | 0x80 | 0x80 |
| B_KOE | 21 | 0x08 | 0x08 |
| B_HSVE | 21 | 0x20 | 0x20 |
| B_HSHE | 21 | 0x80 | 0x80 |
| B_AKR | 22 | 0x08 | 0x08 |
| B_EBL | 22 | 0x10 | 0x10 |
| B_EKP | 22 | 0x20 | 0x20 |
| B_ETR | 22 | 0x40 | 0x40 |
| B_STA | 22 | 0x80 | 0x80 |
| B_NOKATFZ | 3 | 0x01 | 0x01 |
| B_AUTGET | 3 | 0x02 | 0x02 |
| B_ACC | 3 | 0x04 | 0x04 |
| B_ASCPKW | 3 | 0x08 | 0x08 |
| B_ARSVAR | 3 | 0x10 | 0x10 |
| B_TXUGET | 3 | 0x20 | 0x20 |
| B_KOGER | 3 | 0x40 | 0x40 |
| B_AGR | 3 | 0x80 | 0x80 |
| B_MFL | 4 | 0x01 | 0x01 |
| B_AKRFZ | 4 | 0x02 | 0x02 |
| B_KATFZ | 2 | 0x01 | 0x01 |
| B_CDTES | 2 | 0x04 | 0x04 |
| B_CDSLS | 2 | 0x08 | 0x08 |
| B_CDLSV | 2 | 0x20 | 0x20 |
| B_CDHSV | 2 | 0x40 | 0x40 |
| B_CDAGR | 2 | 0x80 | 0x80 |
| B_KATRDY | 3 | 0x01 | 0x01 |
| B_TESRDY | 3 | 0x04 | 0x04 |
| B_SLSRDY | 3 | 0x08 | 0x08 |
| B_LSRDY | 3 | 0x20 | 0x20 |
| B_HSRDY | 3 | 0x40 | 0x40 |
| B_AGRRDY | 3 | 0x80 | 0x80 |
| B_FGRAT | 2 | 0x01 | 0x01 |
| B_FGRHSA | 2 | 0x02 | 0x02 |
| B_FGRTBE | 2 | 0x04 | 0x04 |
| B_FGRTSE | 2 | 0x08 | 0x08 |
| B_FGRTVE | 2 | 0x10 | 0x10 |
| B_FGRTWA | 2 | 0x20 | 0x20 |
| L_FGR | 2 | 0x40 | 0x40 |
| B_ACC_FGR | 2 | 0x80 | 0x80 |
| B_NMOT | 15 | 0x01 | 0x01 |
| B_MINHUBVS | 16 | 0x01 | 0x01 |
| B_KRDWS | 4 | 0x01 | 0x01 |
| B_MIL | 22 | 0x01 | 0x01 |
| B_FS | 7 | 0x01 | 0x01 |
| B_ECULOCKF | 3 | 0x01 | 0x01 |
| B_LRNRDYFAST | 4 | 0x01 | 0x01 |
| B_LLTD | 11 | 0x01 | 0x01 |
| B_LLK | 19 | 0x01 | 0x01 |
| B_TEAKT | 22 | 0x01 | 0x01 |
| B_VVTNOTL | 23 | 0x01 | 0x01 |
| B_NVRBUPOK | 32 | 0x01 | 0x01 |
| B_ATMTPA | 3 | 0x01 | 0x01 |
| B_ATMTPK | 4 | 0x01 | 0x01 |
| B_KH | 13 | 0x01 | 0x01 |
| B_NSUB | 14 | 0x01 | 0x01 |
| B_TE | 15 | 0x01 | 0x01 |
| B_SSLL | 13 | 0x01 | 0x01 |
| B_TDAON | 14 | 0x01 | 0x01 |
| B_GAD | 2 | 0x01 | 0x01 |
| OBD_VERBRENNUNGSAUSSETZER_MONITOR | 1 | 0x01 | 0x01 |
| OBD_KRAFTSTOFFSYSTEM_MONITOR | 1 | 0x02 | 0x02 |
| OBD_KOMPONENTEN_MONITOR | 1 | 0x04 | 0x04 |
| OBD_VERBRENNUNGSAUSSETZER_READINESS | 1 | 0x10 | 0x10 |
| OBD_KRAFTSTOFFSYSTEM_READINESS | 1 | 0x20 | 0x20 |
| OBD_KOMPONENTEN_READINESS | 1 | 0x40 | 0x40 |
| OBD_KAT_UEBERWACHUNG_MONITOR | 2 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG_MONITOR | 2 | 0x02 | 0x02 |
| OBD_TANKENTLUEFTUNG_MONITOR | 2 | 0x04 | 0x04 |
| OBD_SEKUNDAERLUFTSYSTEM_MONITOR | 2 | 0x08 | 0x08 |
| OBD_KLIMA_MONITOR | 2 | 0x10 | 0x10 |
| OBD_LAMBDASONDE_MONITOR | 2 | 0x20 | 0x20 |
| OBD_LAMBDASONDENHEIZUNG_MONITOR | 2 | 0x40 | 0x40 |
| OBD_ABGASRUECKFUEHRUNG_MONITOR | 2 | 0x80 | 0x80 |
| OBD_KAT_UEBERWACHUNG_READINESS | 3 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG_READINESS | 3 | 0x02 | 0x02 |
| OBD_TANKENTLUEFTUNG_READINESS | 3 | 0x04 | 0x04 |
| OBD_SEKUNDAERLUFTSYSTEM_READINESS | 3 | 0x08 | 0x08 |
| OBD_KLIMA_READINESS | 3 | 0x10 | 0x10 |
| OBD_LAMBDASONDE_READINESS | 3 | 0x20 | 0x20 |
| OBD_LAMBDASONDENHEIZUNG_READINESS | 3 | 0x40 | 0x40 |
| OBD_ABGASRUECKFUEHRUNG_READINESS | 3 | 0x80 | 0x80 |
| Z_LSH | 2 | 0x02 | 0x02 |
| ENDE | 0 | 0x01 | 0x01 |

### T_1BYTE_FS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 8 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 255 | ungueltiger Wert |

### T_B_STANDARD_1BYTE_LESEN_0_1

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 255 | Groesser 1 |

### T_ENERGIESPARMODUS_LESEN

| NR | TEXT |
| --- | --- |
| 0 | Deaktiviert |
| 1 | Fertigungsmodus |
| 2 | Transportmodus |
| 3 | Werkstattmodus |
