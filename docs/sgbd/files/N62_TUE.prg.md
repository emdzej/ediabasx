# N62_TUE.prg

## General

|  |  |
| --- | --- |
| File | N62_TUE.prg |
| Type | PRG |
| Jobs | 240 |
| Tables | 39 |
| Origin | BMW EA-41 Holger Dieffenbach |
| Revision | 4.300 |
| Author | BMW EA-41 Roth, ValleyForge-T.I.S. EA-41 Wieser |
| ECU Comment | SGBD fuer ME9.2.2 TUE (Programmstände 729) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME9.2.2 TUE fuer NG-Motoren  |  |  |
| ORIGIN | string | BMW EA-41 Holger Dieffenbach |  |  |
| REVISION | string | 4.300 |  |  |
| AUTHOR | string | BMW EA-41 Roth, ValleyForge-T.I.S. EA-41 Wieser |  |  |
| COMMENT | string | SGBD fuer ME9.2.2 TUE (Programmstände 729)  |  |  |
| PACKAGE | string | 1.29 |  |  |
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

CBS Daten auslesen (fuer CBS-Version 4) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS-Version 4) KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default Musterparametersatz fuer Bremsbelagverschleiss Vorder/Hinterachse br_v,100,1,0,0,0,1,0,0 br_h,100,1,0,0,0,1,0,0 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma!)

| Name | Type | Description |
| --- | --- | --- |
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 255 Defaultwert: 100 |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 8000h Defaultwert: 8000h |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0hex -> % 1hex -> km*10 Fhex -> d.c. Defaultwert: Fh |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0h Schalter, keine Aenderung: FFh Defaultwert: FFh |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 0-254 Monate Schalter, keine Aenderung: FFh Defaultwert: FFh |
| Res_Byte | int | Reserve Byte (noch unbenutzt) Defaultwert: 00h |

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

Data-ID des SG auslesen

_No arguments._

### PROGSTAND_LONG_LESEN

Programmstand-Nr. des SG auslesen

_No arguments._

### IDENT_AIF

Identdaten mit KWP2000: $1A ReadECUIdentification Modus  : Default Auslesen des Anwender Informations Feldes mit KWP 2000: $23 ReadMemoryByAddress Standard Flashjob Modus   : Default

_No arguments._

### STATUS_RBM_MODE9

Lesen der RBM-Werte Mode9

_No arguments._

### STATUS_RBM_BLOCK1

Lesen der RBM-Werte Block1

_No arguments._

### STATUS_RBM_BLOCK2

Lesen der RBM-Werte Block2

_No arguments._

### STEUERN_VVT_ANSCHLAG

Lernen der VVT-Anschlaege

_No arguments._

### STATUS_VVT_ANSCHLAG

Status Lernen VVT-Anschlaege

_No arguments._

### STOP_VVT_ANSCHLAG

Ende von Lernen der VVT-Anschlaege

_No arguments._

### FS_HEX_LESEN

Fehlerspeicher auslesen als Hex Dump

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers im Fehlerspeicher uebergeben |

### FS_LESEN_LANG

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers uebergeben |

### STEUERN_EV_1

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_2

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_3

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_4

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_5

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_6

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_7

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_8

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_1_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_2_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_3_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_4_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_5_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_6_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_7_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_8_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_E_LUEFTER

Stellgliedansteuerung E-Luefter

| Name | Type | Description |
| --- | --- | --- |
| TASTRATE | int | zwischen 0 und 100 % Ansteuerverhaeltins |

### STEUERN_E_LUEFTER_AUS

Stellgliedansteuerung E-Luefter

_No arguments._

### START_SYSTEMCHECK_TEV_FUNC

Systemtest von TEV

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Status Systemtest TEV

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

Beenden von TEV-Systemtest

_No arguments._

### STEUERN_TEV_AUS

Stellgliedansteuerung TEV vom Tester an DME freigeben

_No arguments._

### STEUERN_TEV

Stellgliedansteuerung TEV

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERRATE | int | Sollwert 0 - 100% |

### STEUERN_KFK

Stellgliedansteuerung KFK

_No arguments._

### STEUERN_KFK_AUS

Stellgliedansteuerung KFK

_No arguments._

### STEUERN_MIL

Ansteuerung MIL (MIL blinken)

_No arguments._

### STEUERN_MIL_AUS

Beenden der MIL-Ansteuerung

_No arguments._

### STEUERN_EML

Stellgliedansteuerung EML

_No arguments._

### STEUERN_EML_AUS

Beenden der Stellgliedansteuerung EML

_No arguments._

### STEUERN_EKP

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_EKP_AUS

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_HLS1

Stellgliedansteuerung Lambdasondenheizung1

_No arguments._

### STEUERN_HLS1_AUS

Stellgliedansteuerung Lambdasondeheizung 1 aus

_No arguments._

### STEUERN_HLS2

Stellgliedansteuerung Lambdasondenheizung 2

_No arguments._

### STEUERN_HLS2_AUS

Stellgliedansteuerung Lambdasondeheizung 2 aus

_No arguments._

### STEUERN_HLS3

Stellgliedansteuerung Lambdasondenheizung3

_No arguments._

### STEUERN_HLS3_AUS

Stellgliedansteuerung Lambdasondeheizung 3 aus

_No arguments._

### STEUERN_HLS4

Stellgliedansteuerung Lambdasondenheizung 4

_No arguments._

### STEUERN_HLS4_AUS

Stellgliedansteuerung Lambdasondeheizung 4 aus

_No arguments._

### STEUERN_EBL

Stellgliedansteuerung E-Box-Luefter

_No arguments._

### STEUERN_EBL_AUS

Stellgliedansteuerung E-Box-Luefter aus

_No arguments._

### STEUERN_AGK

Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_AGK_AUS

Stellgliedansteuerung Abgasklappe aus

_No arguments._

### STEUERN_DMTLP

Stellgliedansteuerung DM-TL Pumpe

_No arguments._

### STEUERN_DMTLP_AUS

Stellgliedansteuerung DM-TL Pumpe aus

_No arguments._

### STEUERN_DMTLV

Stellgliedansteuerung DM-TL Ventil

_No arguments._

### STEUERN_DMTLV_AUS

Stellgliedansteuerung DM-TL Ventil aus

_No arguments._

### STEUERN_DMTLH

Ansteuerung DMTL-Heizung (nur bei US-Fahrzeugen)

_No arguments._

### STEUERN_DMTLH_AUS

Beenden Ansteuerung DMTL-Heizung

_No arguments._

### RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | long | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### RAM_BACKUP

Loeschen der RAM-Backup-Werte

_No arguments._

### STEUERN_ZWANG_RAMBACKUP

Zwangssichern der RAM-Backup-Werte

_No arguments._

### STEUERN_POWER_DOWN

Anforderung Power Down Mode

_No arguments._

### START_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | Eingabewert: 0....2550 wg. Begr. i. PST sind nur Werte zw. 400 u. 2500 sinnvoll |

### STATUS_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung Status lesen

_No arguments._

### STOP_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung Status lesen

_No arguments._

### START_SYSTEMCHECK_DMTL

Start Systemtest DMTL

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Status Systemtest DMTL

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Ende Systemtest DM-TL

_No arguments._

### STEUERN_VANOS_EINLASS

Stellgliedansteuerung Einlass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_EINLASS_AUS

Stellgliedansteuerung Einlass-VANOS freigeben

_No arguments._

### STEUERN_VANOS_AUSLASS

Stellgliedansteuerung Auslass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_AUSLASS_AUS

Stellgliedansteuerung Auslass-VANOS freigeben

_No arguments._

### STEUERN_DISA

Stellgliedansteuerung DISA

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (0..100) |

### STEUERN_DISA_AUS

Stellgliedansteuerung DISA freigeben

_No arguments._

### STEUERN_EVAUSBL

Systemdiagnose Einspritzventile ausblenden

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STEUERN_EVAUSBL_AUS

Ende Systemtest Einspritzventile ausblenden

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STATUS_MESSWERTE

Auslesen von Messwerten

_No arguments._

### STATUS_MESSWERTE_OEL

Auslesen von Oelwerten

_No arguments._

### STATUS_BATTERIEINTEGRATOR

Auslesen des Batterie-Ladezustands

_No arguments._

### STATUS_SCHALTERSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_FUNKTIONSSTATI

Auslesen der Funktionsstati

_No arguments._

### STATUS_LAUFUNRUHE

Auslesen von Laufunruhewerten

_No arguments._

### STATUS_DKHFM

Auslesen von DK/HFM-Abgleichswerten

_No arguments._

### STEUERN_VVT

Stellgliedansteuerung VVT Für die VVT-Ansteuerung gibt es 2 Möglichkeiten: (1) Anst. durch Verstellung der NW auf einen vorgegebenen Winkel (2) Anst. durch Fahren einer Rampe von NW-Position f. LL -> Maxhub -> LL

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | WINKEL = 0, wenn Verstellung über Rampe WINKEL = Vorgabewert (0..180), wenn Verstellung über Winkel |
| RAMPE | int | RAMPE = 0, wenn Verstellung über Winkel RAMPE = 1, wenn Verstellung über Rampe |

### STEUERN_VVT_AUS

beenden Stellgliedansteuerung VVT

_No arguments._

### STEUERN_VVT_ENABLE

Generieren eines Testsignals auf der VVT-Enable-Leitung

_No arguments._

### STEUERN_VVT_ENABLE_AUS

Testsignal von VVT-Enable-Leitung zurücknehmen

_No arguments._

### STATUS_CO_ABGLEICH

Auslesen des LL-CO-Wertes

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

LL-CO-Wert vorgeben

| Name | Type | Description |
| --- | --- | --- |
| CO_WERT | int | LL CO-Abgleichswert |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

LL-CO-WERT programmieren

| Name | Type | Description |
| --- | --- | --- |
| CO_FEST | int | LL CO-Abgleichswert |

### STATUS_GEMISCH

Auslesen von Gemischwerten

_No arguments._

### STATUS_AUSGAENGE

Auslesen von Ausgaengen

_No arguments._

### STATUS_NWGADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### ECU_CONFIG

Auslesen der Variante

_No arguments._

### STEUERN_VARIANTE

Loeschen der Varianten

_No arguments._

### STATUS_KVA

Auslesen Faktor KVA

_No arguments._

### STEUERN_KVA

Korrekturfaktor Kraftstoffverbrauch kva_korr programmieren

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Wertebereich Übergabeparameter: -128 ... 127 kva_korr = KVA_WERT \ 1000 zB: KVA_WERT = -55   => kva_korr = -0.055% |

### STATUS_READINESS

Auslesen des Readinessbyte

_No arguments._

### STATUS_FGR

Auslesen der FGR-Stati

_No arguments._

### STEUERN_LLABG

LL-Abgleichswerte werden vorgegeben

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne FS |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne FS |
| DNSLBV | int | Abgleichswert LL aus %LLRUB, niedriger UBatt |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit FS |
| DNFSMV | int | Abgleichswert LL mit FS |

### STEUERN_LLABG_PROG

LL-Abgleichswerte werden programmiert

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne FS |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne FS |
| DNSLBV | int | Abgleichswert LL aus %LLRUB, niedriger UBatt |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit FS |
| DNFSMV | int | Abgleichswert LL mit FS |

### STATUS_LLABG

LL-Abgleichswerte werden gelesen

_No arguments._

### STATUS_LRP

Auslesen Funktionseingriffe bei der Laufruheprüfung

_No arguments._

### STEUERN_LRP

Funktionseingriffe für die Laufruheprüfung vorgeben

| Name | Type | Description |
| --- | --- | --- |
| HUBEINGRIFF_INAKTIV | int | zyl.selektiver Hubeingriff (1=deaktiviert, 0=aktiviert) |
| MINHUBEINGRIFF_INAKTIV | int | Minhubeingriff (1=deaktiviert, 0=aktiviert) |
| ZUENDWINKELEINGRIFF_INAKTIV | int | Zuendwinkeleingriff (1=deaktiviert, 0=aktiviert) |
| GEMISCHEINGRIFF_INAKTIV | int | Gemischeingriff (1=deaktiviert, 0=aktiviert) |

### STEUERN_LRP_STOP

Vorgabe Funktionseingriffe für die Laufruheprüfung stoppen

_No arguments._

### STEUERN_LRP_PROG

Prüfeingriffe für die Laufruheprüfung programmieren

| Name | Type | Description |
| --- | --- | --- |
| HUBEINGRIFF_INAKTIV | int | zyl.selektiver Hubeingriff (1=deaktiviert, 0=aktiviert) |
| MINHUBEINGRIFF_INAKTIV | int | Minhubeingriff (1=deaktiviert, 0=aktiviert) |
| ZUENDWINKELEINGRIFF_INAKTIV | int | Zuendwinkeleingriff (1=deaktiviert, 0=aktiviert) |
| GEMISCHEINGRIFF_INAKTIV | int | Gemischeingriff (1=deaktiviert, 0=aktiviert) |

### STATUS_MESSWERTE_LRP

Ausgelesen der Messwerte Laufruheprüfung

_No arguments._

### STATUS_VVT

Auslesen VVT-Messwerte

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

### STATUS_FASTA10

Auslesen FASTA-Messwertblock 10

_No arguments._

### STATUS_ADC

Auslesen ADC-Werte

_No arguments._

### STEUERN_LL_ERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | Eingabewert: 0....255  (f. LL-Werte v. 0...2550 Upmin) wg. Begr. i. PST sind nur Werte zw. 400 Upmin u. 1200 Upmin wirksam |

### START_SYSTEMCHECK_LSU

Systemdiagnose LSU starten

_No arguments._

### STATUS_SYSTEMCHECK_LSU

Status Systemdiagnose LSU

_No arguments._

### STATUS_SYSTEMCHECK_LSU_NEU

Status Systemdiagnose LSU

_No arguments._

### STOP_SYSTEMCHECK_LSU

Ende Systemdiagnose LSU

_No arguments._

### START_SYSTEMCHECK_KAT

Systemdiagnose KAT

| Name | Type | Description |
| --- | --- | --- |
| BANK | int | selektiert die Bank aus (1--> Bank1, 2--> Bank2, 3--> Bank1 und 2) |

### STATUS_SYSTEMCHECK_KAT

Status Systemtest KAT

_No arguments._

### STOP_SYSTEMCHECK_KAT

Ende Systemdiagnose KAT

_No arguments._

### STATUS_DIAGNOSE_LSV

Status LSV-Diagnose auslesen

_No arguments._

### START_SYSTEMCHECK_LSH

Start der Systemdiagnose LSH

| Name | Type | Description |
| --- | --- | --- |
| BANK | int | selektiert die Bank aus (1--> Bank1, 2--> Bank2, 3--> Bank1 und 2) |

### STATUS_SYSTEMCHECK_LSH

Status LSH-Diagnose auslesen

_No arguments._

### STOP_SYSTEMCHECK_LSH

Ende der Systemdiagnose LSH

_No arguments._

### START_SYSTEMCHECK_GRUNDADAPT

Systemdiagnose Grundadaptionenen

_No arguments._

### STATUS_SYSTEMCHECK_GRUNDADAPT

Status Systemdiagnose Grundadaptionen starten

_No arguments._

### STOP_SYSTEMCHECK_GRUNDADAPT

Ende Systemdiagnose Grundadaptionen starten

_No arguments._

### START_SYSTEMCHECK_GEMISCHADAPT_SPERR

Systemdiagnose Gemischadaptionen sperren

_No arguments._

### STOP_SYSTEMCHECK_GEMISCHADAPT_SPERR

Ende Systemdiagnose Gemischadaptionen sperren

_No arguments._

### START_SYSTEMCHECK_LAMBDA_AUS

Systemdiagnose Labdaregelung aus

_No arguments._

### STATUS_SYSTEMCHECK_LAMBDA_AUS

Status Systemdiagnose Lambdaregelung aus

_No arguments._

### STOP_SYSTEMCHECK_LAMBDA_AUS

Ende Systemdiagnose Lambdaregelung aus

_No arguments._

### START_SYSTEMCHECK_KOMPRESSION

Systemdiagnose Kompressionstest

_No arguments._

### STOP_SYSTEMCHECK_KOMPRESSION

Ende Systemdiagnose Kompressiostest

_No arguments._

### STEUERN_DISA_ANSCHLAG

lernen der DISA-Anschlaege

_No arguments._

### STATUS_DISA_ANSCHLAG

Status Lernen der DISA-Anschlaege

_No arguments._

### STOP_DISA_ANSCHLAG

Ende des Lernes DISA-Anschlaege

_No arguments._

### STEUERN_ADAPTIONEN_LOESCHEN_NEU

Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | siehe LH 1 430 227, setzt REYO_01 bitweise |
| AUSWAHLBYTE_2 | int | siehe LH 1 430 227, setzt REYO_02 bitweise |
| AUSWAHLBYTE_3 | int | setzt REYO_03 bitweise |

### STATUS_MINHUB

Auslesen VVT-Minhub

_No arguments._

### STEUERN_MINHUB

VVT-Minhub vorgeben

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | Vorsteuerwert minhubvs_w in tausendstel Milimeter |

### STEUERN_MINHUB_PROGRAMM

Programmieren VVT-Minhub

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | zu programmierender Wert minhubvs_w in tausendstel Milimeter |

### STATUS_BANKABGLEICH

Auslesen des VVT-Bankabgleiches

_No arguments._

### STEUERN_BANKABGLEICH_PROGRAMM

Programmieren des Winkeloffset Excenterwelle (ofwnktest) Verstellbereich Bank1: 0°...5° Verstellbereich Bank2: 0°...-5°

| Name | Type | Description |
| --- | --- | --- |
| OFWTSTBER | int | Offsetbereich, nur ein Dummy, wird nicht ausgewertet |
| OFWNKTEST | int | Eingabewert für Winkeloffset (Eingabebereich: -50....50) zB: OFWNKTEST = 30  => ofwnktest = 3° |

### STATUS_BETRIEBSSTUNDENZAEHLER

Status Betriebsstundenzaehler auslesen

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

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Auslesen der Lufttemperatur

_No arguments._

### STATUS_LMM_MASSE

Auslesen der Luftmasse

_No arguments._

### STATUS_L_SONDE

Auslesen der Lambdasondenspannung vorne Bank 1

_No arguments._

### STATUS_L_SONDE_2

Auslesen der Lambdasondenspannung vorne Bank 2

_No arguments._

### STATUS_L_SONDE_H

Auslesen der Lambdasondenspannung hinten Bank 1

_No arguments._

### STATUS_L_SONDE_2_H

Auslesen der Lambdasondenspannung hinten Bank 2

_No arguments._

### STATUS_INT

Auslesen der Lambdaregelung

_No arguments._

### STATUS_INT_2

Auslesen der Lambdaregelung Bank2

_No arguments._

### STATUS_ADD

Auslesen der additiven Lambdaregelung

_No arguments._

### STATUS_ADD_2

Auslesen der additiven Lambdaregelung Bank2

_No arguments._

### STATUS_MUL

Auslesen der multipikativen Lambdaregelung

_No arguments._

### STATUS_MUL_2

Auslesen der multipikativen Lambdaregelung Bank 2

_No arguments._

### STATUS_MOTORLAUFUNRUHE

Auslesen der Laufunruhewerte

_No arguments._

### STATUS_UBATT

Auslesen der Batteriespannung

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_DIGITAL

Auslesen der Schalter- und Funktionsstati

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Auslesen des Pedalwertgebers

_No arguments._

### IDENT_IBS

$22 40 21 BMW Nr, Seriennummer, SW/HW Index

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_1

$22 40 22 Bytefeld 1 Batterie Powermanagement lesen

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_2

$22 40 23 Bytefeld 2 Batterie Powermanagement lesen

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

$30 F5 04 Loeschen von pminfo1 index 23-30

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_RESET | int | Ein=255/ Aus=0 |

### ADAP_SELEKTIV_LOESCHEN

Löschen von Adaptionen und gelernte Varianten KWP 2000 $31 30 xx xx xx Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

KWP 2000 $31 30 00 10 00 Bit setzen Batterietausch registrieren

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

$31 F6 Systemdiagnose BatterieSensor reset

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

$32 F6 Systemdiagnose BatterieSensor reset beenden

_No arguments._

### STATUS_IBS_MESSWERTE

Auslesen von Temperatur, Spannung und Strom der Batterie

_No arguments._

### STATUS_GENERATOR_MESSWERTE

Auslesen der Generator-Messwerte

_No arguments._

### STATUS_MESSWERTE_VAD

Variantenadaptionen auslesen

_No arguments._

### STATUS_DK_KT

Auslesen DK-Messwerte fuer Kalttest

_No arguments._

### STATUS_DKLERN_KT

Auslesen DK-Lernwerte fuer Kalttest

_No arguments._

### STATUS_VANOS_KT

Auslesen VANOS-Messwerte fuer Kalttest

_No arguments._

### STATUS_DISA_KT

Auslesen Spannungswert DISA fuer Kalttest

_No arguments._

### STATUS_MESSW_KT

Auslesen von Messwerten fuer Kalttest

_No arguments._

### BOS_DATEN_LESEN

BOS Daten auslesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### BOS_RESET

BOS Daten Zuruecksetzen KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BOS_KENNUNG | string | gewuenschte BOS-Kennung table BosKennung BOS_K BOS_K_TEXT Werte: Oel, Br_v, Brfl, Filt, Batt, Br_h, ZKrz, Sic, Kfl, TUV, AU Defaultwert: Oel |
| BOS_VERFUEGBARKEIT | string | gewuenschte Verfuegbarkeit in Prozent: 0-200 Schalter, kein Rueckstellen: 255 Defaultwert: 100 |
| BOS_ANZAHL_SERVICE | string | Anzahl der durchgefuehrten Services: 0-30 Schalter, keine Aenderung: 31 Defaultwert: 31 |
| BOS_ZIEL_MONAT | string | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter fuer Monat, keine AEnderung: 255 Defaultwert: 255 |
| BOS_ZIEL_JAHR | string | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine AEnderung: 255 Defaultwert: 255 |

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
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
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29CC | CDKMD - Verbrennungsaussetzer, mehrere Zylinder |
| 0x29CD | CDKMD00 - Verbrennungsaussetzer, Zylinder 1 |
| 0x29CE | CDKMD07 - Verbrennungsaussetzer, Zylinder 2 |
| 0x29CF | CDKMD05 - Verbrennungsaussetzer, Zylinder 3 |
| 0x29D0 | CDKMD02 - Verbrennungsaussetzer, Zylinder 4 |
| 0x29D1 | CDKMD01 - Verbrennungsaussetzer, Zylinder 5 |
| 0x29D2 | CDKMD04 - Verbrennungsaussetzer, Zylinder 6 |
| 0x29D3 | CDKMD06 - Verbrennungsaussetzer, Zylinder 7 |
| 0x29D4 | CDKMD03 - Verbrennungsaussetzer, Zylinder 8 |
| 0x29D9 | CDKCPFLL - Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DD | CDKSWE - Schlechtwegstreckenerkennung |
| 0x29E5 | CDKFRAO - Gemischadaption, oberer Drehzahlbereich |
| 0x29E6 | CDKFRAO2 - Gemischadaption 2, oberer Drehzahlbereich |
| 0x29E7 | CDKRKAT - Gemischadaption im Leerlauf pro Zeit |
| 0x29E8 | CDKRKAT2 - Gemischadaption 2 im Leerlauf pro Zeit |
| 0x29E9 | CDKRKAZ - Gemischadaption im Leerlauf pro Zündung |
| 0x29EA | CDKRKAZ2 - Gemischadaption 2 im Leerlauf pro Zündung |
| 0x29EB | CDKFRST - Gemischadaption, Abweichung |
| 0x29EC | CDKFRST2 - Gemischadaption 2, Abweichung |
| 0x29ED | CDKFRAU - Gemischadaption, unterer Drehzahlbereich |
| 0x29EE | CDKFRAU2 - Gemischadaption 2, unterer Drehzahlbereich |
| 0x29EF | CDKFMAS - Gemischadaption, Summenfehler |
| 0x29F0 | CDKFMAS2 - Gemischadaption 2, Summenfehler |
| 0x29F4 | CDKKAT - Katalysatorkonvertierung |
| 0x29F5 | CDKKAT2 - Katalysatorkonvertierung 2 |
| 0x29FE | CDKSLS - Sekundärluftsystem |
| 0x2A01 | CDKSLV - Sekundärluftventil, Mechanik |
| 0x2A02 | CDKSLVE - Sekundärluftventil, Ansteuerung |
| 0x2A03 | CDKSLPE - Sekundärluftpumpenrelais, Ansteuerung |
| 0x2A05 | CDKSLV2 - Sekundärluftventil 2, Mechanik |
| 0x2A08 | CDKSLS2 - Sekundärluftsystem 2 |
| 0x2A09 | CDKSLPPL - Sekundärluftpumpe, Plausibilität |
| 0x2A12 | CDKDMMVE - DMTL-Magnetventil, Ansteuerung |
| 0x2A13 | CDKDMPME - DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A14 | CDKDMTK - DMTL, Feinstleck |
| 0x2A15 | CDKTESG - DMTL, Feinleck |
| 0x2A16 | CDKDMTKNM - DMTL, Feinstleck |
| 0x2A17 | CDKDMTL - DMTL, Systemfehler |
| 0x2A18 | CDKDHDMTE - DMTL, Heizung: Ansteuerung |
| 0x2A19 | CDKTEVE - Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | CDKTES - Tankentlüftungssystem, Funktion |
| 0x2A1B | CDKCFC - Tankdeckel |
| 0x2A1C | CDKFST - Tankfüllstand, Plausibilität |
| 0x2A1D | CDKFSTP - Tankfüllstand, Plausibilität |
| 0x2A1E | CDKFSTSI - Tankfüllstand, Signal |
| 0x2A20 | CDKTEVPL - Tankentlüftungsventil, Plausibilität |
| 0x2A23 | CDKDPMEE - DMTL, Leckdiagnosepumpe |
| 0x2A58 | CDKVVTE - Valvetronic,  Spannungsversorgung |
| 0x2A59 | CDKDVFFS - Valvetronic, Exzenterwellensensor: Führung |
| 0x2A5A | CDKDVFFS2 - Valvetronic, Exzenterwellensensor 2: Führung |
| 0x2A5B | CDKDVFRS - Valvetronic, Exzenterwellensensor: Referenz |
| 0x2A5C | CDKDVFRS2 - Valvetronic, Exzenterwellensensor 2: Referenz |
| 0x2A5D | CDKDVPLA - Valvetronic, Exzenterwellensensor: Plausibilität |
| 0x2A5E | CDKDVPLA2 - Valvetronic, Exzenterwellensensor 2: Plausibilität |
| 0x2A5F | CDKDVUSE - Valvetronic, Exzenterwellensensor: Spannungsversorgung |
| 0x2A60 | CDKDVUSE2 - Valvetronic, Exzenterwellensensor 2: Spannungsversorgung |
| 0x2A61 | CDKDVLRN - Valvetronic, Verstellbereich |
| 0x2A62 | CDKDVLRN2 - Valvetronic, Verstellbereich 2 |
| 0x2A63 | CDKDVSTE - Valvetronic, Stellmotor: Überwachung Schwergängigkeit, Drehrichtung |
| 0x2A64 | CDKDVSTE2 - Valvetronic, Stellmotor 2: Überwachung Schwergängigkeit, Drehrichtung |
| 0x2A65 | CDKDVFSG - Valvetronic,  interner Fehler |
| 0x2A66 | CDKDVFSG2 - Valvetronic,  interner Fehler 2 |
| 0x2A67 | CDKDVEST - Valvetronic, Stellmotor: Ansteuerung |
| 0x2A68 | CDKDVEST2 - Valvetronic, Stellmotor 2: Ansteuerung |
| 0x2A69 | CDKDVULV - Valvetronic, Stellmotor: Spannungsversorgung |
| 0x2A6A | CDKDVULV2 - Valvetronic, Stellmotor 2: Spannungsversorgung |
| 0x2A6B | CDKDVPMN - Valvetronic, Leistungsbegrenzung |
| 0x2A6C | CDKDVAN - Valvetronic, Position bei Neustart: Plausibilität |
| 0x2A6D | CDKDVOVL - Valvetronic, elektrischer Überlastschutz |
| 0x2A6E | CDKDVOVL2 - Valvetronic, elektrischer Überlastschutz 2 |
| 0x2A6F | CDKMINHUB - Valvetronic, Minimalhub |
| 0x2A80 | CDKENWSE - Einlass-VANOS, Ansteuerung |
| 0x2A81 | CDKENWSE2 - Einlass-VANOS, Ansteuerung 2 |
| 0x2A83 | CDKENWS - Einlass-VANOS |
| 0x2A84 | CDKENWS2 - Einlass-VANOS 2 |
| 0x2A85 | CDKANWSE - Auslass-VANOS, Ansteuerung |
| 0x2A86 | CDKANWSE2 - Auslass-VANOS, Ansteuerung 2 |
| 0x2A88 | CDKANWS - Auslass-VANOS |
| 0x2A89 | CDKANWS2 - Auslass-VANOS 2 |
| 0x2A8A | CDKENWSAD - Einlass-VANOS, Adaption Anschlag |
| 0x2A8B | CDKENWSAD2 - Einlass-VANOS, Adaption Anschlag 2 |
| 0x2A8C | CDKANWSAD - Auslass-VANOS, Adaption Anschlag |
| 0x2A8D | CDKANWSAD2 - Auslass-VANOS, Adaption Anschlag 2 |
| 0x2A8E | CDKNWEKW - Einlassnockenwelle, Zahnversatz zur Kurbelwelle |
| 0x2A8F | CDKNWEKW2 - Einlassnockenwelle 2, Zahnversatz zur Kurbelwelle |
| 0x2A90 | CDKNWAKW - Auslassnockenwelle, Zahnversatz zur Kurbelwelle |
| 0x2A91 | CDKNWAKW2 - Auslassnockenwelle 2, Zahnversatz zur Kurbelwelle |
| 0x2B5C | CDKN - Kurbelwellensensor, Signal |
| 0x2B5D | CDKBM - Kurbelwellensensor, Plausibilität |
| 0x2B61 | CDKNWKW - Kurbelwelle - Nockenwelle, Korrelation |
| 0x2B62 | CDKPH - Nockenwellensensor, Einlass |
| 0x2B63 | CDKPH2 - Nockenwellensensor, Auslass |
| 0x2B64 | CDKPH3 - Nockenwellensensor 2, Einlass |
| 0x2B65 | CDKPH4 - Nockenwellensensor 2, Auslass |
| 0x2B66 | CDKPHM - Nockenwellensensor, Master |
| 0x2B70 | CDKSUE - Variable Sauganlage, Ansteuerung |
| 0x2B71 | CDKDISA - Variable Sauganlage |
| 0x2B72 | CDKDISAT - Variable Sauganlage, Temperaturwarnschwelle |
| 0x2B73 | CDKDISAPL - Variable Sauganlage, Plausibilität |
| 0x2B80 | CDKLLR - Leerlaufregelung |
| 0x2B98 | CDKNVRMON - Steuergerät, interner Fehler: RAM Backup, Plausibilität |
| 0x2B99 | CDKNVRBUP - Steuergerät, interner Fehler: RAM Backup |
| 0x2B9A | CDKURRAM - Steuergerät, interner Fehler: RAM |
| 0x2B9B | CDKURROM - Steuergerät, interner Fehler: ROM |
| 0x2B9C | CDKURRST - Steuergerät, interner Fehler: Reset |
| 0x2B9D | CDKWDA - Steuergerät, interner Fehler: Überspannung |
| 0x2BC0 | CDKTUMP - Umgebungstemperatursensor, Plausibilität |
| 0x2BC1 | CDKTUME - Umgebungstemperatursensor, Signal |
| 0x2C24 | CDKLSVV - Lambdasonden vor Katalysator, vertauscht |
| 0x2C31 | CDKFTDLA - Lambdasonde vor Katalysator, Trimmregelung |
| 0x2C32 | CDKFTDLA2 - Lambdasonde vor Katalysator 2, Trimmregelung |
| 0x2C37 | CDKHELSU - Lambdasonde vor Katalysator, Heizereinkopplung |
| 0x2C38 | CDKHELSU2 - Lambdasonde vor Katalysator 2, Heizereinkopplung |
| 0x2C39 | CDKDYLSU - Lambdasonde vor Katalysator, Dynamik |
| 0x2C3A | CDKDYLSU2 - Lambdasonde vor Katalysator 2, Dynamik |
| 0x2C3B | CDKULSU - Lambdasonde vor Katalysator, nicht angesteckt |
| 0x2C3C | CDKULSU2 - Lambdasonde vor Katalysator 2, nicht angesteckt |
| 0x2C45 | CDKLSV - Lambdasonde vor Katalysator |
| 0x2C46 | CDKLSV2 - Lambdasonde vor Katalysator 2 |
| 0x2C47 | CDKLSUKS - Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2C48 | CDKLSUKS2 - Lambdasonde vor Katalysator 2, Sondenleitungen |
| 0x2C49 | CDKPLLSU - Lambdasonde vor Katalysator, Plausibilität |
| 0x2C4A | CDKPLLSU2 - Lambdasonde vor Katalysator 2, Plausibilität |
| 0x2C4B | CDKICLSU - Steuergerät, interner Fehler: Lambdasondenbaustein |
| 0x2C4C | CDKICLSU2 - Steuergerät, interner Fehler: Lambdasondenbaustein 2 |
| 0x2C4D | CDKLSUIP - Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2C4E | CDKLSUIP2 - Lambdasonde vor Katalysator 2, Pumpstromleitung |
| 0x2C4F | CDKLSUIA - Lambdasonde vor Katalysator, Abgleichleitung |
| 0x2C50 | CDKLSUIA2 - Lambdasonde vor Katalysator 2, Abgleichleitung |
| 0x2C51 | CDKLSUUN - Lambdasonde vor Katalysator, Nernstleitung |
| 0x2C52 | CDKLSUUN2 - Lambdasonde vor Katalysator 2, Nernstleitung |
| 0x2C53 | CDKLSUVM - Lambdasonde vor Katalysator, virtuelle Masse |
| 0x2C54 | CDKLSUVM2 - Lambdasonde vor Katalysator 2, virtuelle Masse |
| 0x2C61 | CDKLSVE - Lamdasonde vor Katalysator, elektrischer Fehler |
| 0x2C62 | CDKLSVE2 - Lamdasonde vor Katalysator 2, elektrischer Fehler |
| 0x2C6D | CDKLASH - Lambdasonde nach Katalysator, Alterung |
| 0x2C6E | CDKLASH2 - Lambdasonde nach Katalysator 2, Alterung |
| 0x2C71 | CDKLSH - Lambdasonde nach Katalysator |
| 0x2C72 | CDKLSH2 - Lambdasonde nach Katalysator 2 |
| 0x2C9C | CDKHSVE - Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2C9D | CDKHSVE2 - Lambdasondenbeheizung vor Katalysator 2, Ansteuerung |
| 0x2C9E | CDKHSHE - Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2C9F | CDKHSHE2 - Lambdasondenbeheizung nach Katalysator 2, Ansteuerung |
| 0x2CA0 | CDKHSV - Lambdasondenbeheizung vor Katalysator |
| 0x2CA1 | CDKHSV2 - Lambdasondenbeheizung vor Katalysator 2 |
| 0x2CA2 | CDKHSVSA - Lambdasondenbeheizung vor Katalysator, Schubspannung |
| 0x2CA3 | CDKHSVSA2 - Lambdasondenbeheizung vor Katalysator 2, Schubspannung |
| 0x2CA8 | CDKHSH - Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2CA9 | CDKHSH2 - Lambdasondenbeheizung nach Katalysator 2, Funktion |
| 0x2CEF | CDKDVEE - Drosselklappensteller, Ansteuerung |
| 0x2CF0 | CDKDVER - Drosselklappensteller, Regelbereich |
| 0x2CF1 | CDKDVEL - Drosselklappensteller, Positionsüberwachung |
| 0x2CF8 | CDKDK - Drosselklappenpotenziometer |
| 0x2CF9 | CDKDK1P - Drosselklappenpotenziometer 1 |
| 0x2CFA | CDKDK2P - Drosselklappenpotenziometer 2 |
| 0x2CFF | CDKDVEV - Drosselklappensteller, Verstärkerabgleich |
| 0x2D00 | CDKDVEF - Drosselklappensteller, Federprüfung schliessende Feder |
| 0x2D01 | CDKDVEFO - Drosselklappensteller, Federprüfung öffnende Feder |
| 0x2D02 | CDKDVEN - Drosselklappensteller, Notluftpunkt |
| 0x2D03 | CDKDVEUB - Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2D04 | CDKDVEU - Drosselklappensteller, Prüfung unterer Anschlag |
| 0x2D05 | CDKDVEUW - Drosselklappensteller, Abbruch bei UMA-Wiederlernen |
| 0x2D08 | CDKDVET - Drosselklappensteller, Tauscherkennung ohne Adaption |
| 0x2D0F | CDKHFME - Luftmassenmesser, Signal |
| 0x2D10 | CDKHFMPL - Luftmassenmesser, Plausibilität |
| 0x2D11 | CDKHFM - Luftmassenstrom, Plausibilität |
| 0x2D13 | CDKHFMR - Luftmassenmesser, Rationalität |
| 0x2D14 | CDKKHFME - Luftmassenmesser, Korrektursignal |
| 0x2D19 | CDKBWF - Fahrpedalmodul, Pedalwertgeber |
| 0x2D1A | CDKFPP - Fahrpedalmodul, Pedalwertgeber |
| 0x2D1B | CDKFP1P - Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | CDKFP2P - Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D28 | CDKDDSS - Differenzdrucksensor, Saugrohr: Signal |
| 0x2D29 | CDKPDDSS - Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D32 | CDKDPSRPL - Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D6E | CDKUFMV - DME, interner Fehler: Überwachung Istmoment |
| 0x2D70 | CDKUFSGA - DME, interner Fehler: Überwachung Motorfunktionen |
| 0x2D71 | CDKUFSGB - DME, interner Fehler: Überwachung Eingangsgrößen |
| 0x2D72 | CDKUFSGC - DME, interner Fehler: Überwachung Hardware |
| 0x2D75 | CDKUFNC - DME, interner Fehler: Überwachung Motordrehzahl |
| 0x2D76 | CDKUFSPSC - DME, interner Fehler: Überwachung Fahrpedalmodul |
| 0x2D78 | CDKUFMSAC - Luftmassenstromabgleich |
| 0x2DB4 | CDKMFL - Multifunktionslenkrad, Kommunikation |
| 0x2DBF | CDKCACC - CAN, ACC: Signalfehler |
| 0x2DCA | CDKCEGS - Botschaft vom EGS fehlt, Timeout |
| 0x2DCB | CDKCSSG - CAN, SSG: Signalfehler |
| 0x2DCF | CDKCINS - CAN, Instrumentenkombination: Signalfehler |
| 0x2DD7 | CDKCDSC - Botschaft vom DSC fehlt, Timeout |
| 0x2DD8 | CDKCAFS - Botschaft vom AFS fehlt, Timeout |
| 0x2DD9 | CDKCARS - CAN, ARS: Signalfehler |
| 0x2DDA | CDKCCAS - CAN, CAS: Signalfehler |
| 0x2DDB | CDKCIHKA - CAN, IHKA: Signalfehler |
| 0x2DDC | CDKCSZL - Botschaft vom SZL fehlt |
| 0x2DDD | CDKCVVT - Botschaft vom Valvetronic-Steuergerät fehlt |
| 0x2DDE | CDKDVCAN - Local-CAN Kommunikation |
| 0x2DDF | CDKDVCAN2 - Local-CAN Kommunikation 2 |
| 0x2DEB | CDKPMBN - Powermanagement, Bordnetzüberwachung |
| 0x2DEC | CDKPMBAT - Powermanagement, Batterieüberwachung |
| 0x2DED | CDKPMRUHV - Powermanagement, Ruhestromüberwachung |
| 0x2E24 | CDKDZKU0 - Zündspule Zylinder 1 |
| 0x2E25 | CDKDZKU7 - Zündspule Zylinder 2 |
| 0x2E26 | CDKDZKU5 - Zündspule Zylinder 3 |
| 0x2E27 | CDKDZKU2 - Zündspule Zylinder 4 |
| 0x2E28 | CDKDZKU1 - Zündspule Zylinder 5 |
| 0x2E29 | CDKDZKU4 - Zündspule Zylinder 6 |
| 0x2E2A | CDKDZKU6 - Zündspule Zylinder 7 |
| 0x2E2B | CDKDZKU3 - Zündspule Zylinder 8 |
| 0x2E30 | CDKEV1 - Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | CDKEV8 - Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | CDKEV6 - Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | CDKEV3 - Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | CDKEV2 - Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | CDKEV5 - Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E36 | CDKEV7 - Einspritzventil Zylinder 7, Ansteuerung |
| 0x2E37 | CDKEV4 - Einspritzventil Zylinder 8, Ansteuerung |
| 0x2E68 | CDKKS1 - Klopfsensorsignal 1 |
| 0x2E69 | CDKKS2 - Klopfsensorsignal 2 |
| 0x2E6A | CDKKS3 - Klopfsensorsignal 3 |
| 0x2E6B | CDKKS4 - Klopfsensorsignal 4 |
| 0x2E72 | CDKKRIC - Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2E73 | CDKKRSPI - Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2E7C | CDKBSD - Bitserielle Datenschnittstelle, Signal |
| 0x2E86 | CDKEWAPU - Elektrische Wasserpumpe |
| 0x2E8B | CDKIBSK - Intelligenter Batteriesensor, Signal |
| 0x2E8C | CDKIBSA - Intelligenter Batteriesensor, Funktion |
| 0x2E8D | CDKIBSP - Intelligenter Batteriesensor, Signalübertragung |
| 0x2E97 | CDKGEN - Generator |
| 0x2EA0 | CDKQLT - Ölzustandssensor |
| 0x2EB8 | CDKBSDD0 - BSD-Botschaft vom intelligenten Batteriesensor fehlt |
| 0x2EB9 | CDKBSDD1 - BSD-Botschaft vom Glühsteuergerät fehlt |
| 0x2EBA | CDKBSDD2 - BSD-Botschaft von der elektrischen Kühlmittelpumpe, Elektronik fehlt |
| 0x2EBB | CDKBSDD3 - BSD-Botschaft von der elektrischen Kühlmittelpumpe, Motor fehlt |
| 0x2EBC | CDKBSDD4 - BSD-Botschaft vom Ölzustandssensor fehlt |
| 0x2EBD | CDKBSDD6 - BSD-Botschaft vom Generator fehlt |
| 0x2EBE | CDKBSDD5 - BSD-Botschaft vom Generator 2 fehlt |
| 0x2EBF | CDKBSDD7 - Vorhalt: BSD-Botschaft fehlt |
| 0x2EE0 | CDKTME - Kühlmitteltemperatursensor, Signal |
| 0x2EE1 | CDKTMR - Kühlmitteltemperatursensor, Plausibilität |
| 0x2EE4 | CDKTMCS - Kühlmitteltemperatursensor, Plausibilität, Nebenschluss |
| 0x2EEA | CDKTKAE - Temperatursensor Kühleraustritt, Signal |
| 0x2EEC | CDKTKAR - Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | CDKTHM - Kennfeldthermostat, Mechanik |
| 0x2EF5 | CDKETS - Kennfeldthermostat, Ansteuerung |
| 0x2EF6 | CDKKFT - Kennfeldthermostat |
| 0x2EFE | CDKMLE - Elektrolüfter, Ansteuerung |
| 0x2F08 | CDKTAE - Ansauglufttemperatursensor, Signal |
| 0x2F09 | CDKTAR - Ansauglufttemperatursensor, Plausibilität |
| 0x2F0D | CDKGLFE - Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F0F | CDKALKS - Kühlerjalousie, unten |
| 0x2F12 | CDKKOSE - Klimakompressor, Ansteuerung |
| 0x2F17 | CDKMTOEL - Motoröltemperatur, zeitweise zu hoch, EGS-Zwangsschaltung |
| 0x2F26 | CDKWMKD - Koordinator Wärmemanagment |
| 0x2F44 | CDKWFS - EWS Manipulationsschutz |
| 0x2F45 | CDKDWA - Schnittstelle EWS-DME |
| 0x2F46 | CDKWCA - EWS Wechselcode-Abspeicherng |
| 0x2F4E | CDKVFZE - Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | CDKVFZNP - Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F50 | CDKVAT - Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F59 | CDKSTS - Startautomatik, Startsignal |
| 0x2F5A | CDKSTA - Startautomatik |
| 0x2F62 | CDKBREMS - Bremslichtschalter |
| 0x2F67 | CDKKUPPL - Kupplungsschalter, Signal |
| 0x2F6C | CDKAKRE - Abgasklappe, Ansteuerung |
| 0x2F71 | CDKELS - E-Box-Lüfter, Ansteuerung |
| 0x2F76 | CDKDSU - Umgebungsdrucksensor, Signal |
| 0x2F77 | CDKPUR - Umgebungsdrucksensor, Plausibilität |
| 0x2F78 | CDKPUE - DME, interner Fehler: Umgebungsdrucksensor |
| 0x2F7B | CDKPOELS - Öldruckschalter, Plausibilität |
| 0x2F80 | CDKCUHR - Motorabstellzeit, Plausibilität |
| 0x2F8A | CDKUB - Batteriespannung |
| 0x2F94 | CDKKPE - Kraftstoffpumpenrelais, Ansteuerung |
| 0x2F99 | CDKTUM - Umgebungstemperatursensor, Plausibilität |
| 0x2F9E | CDKTOENS - Thermischer Ölniveausensor |
| 0x2FA3 | CDKCOD - Codierung fehlt |
| 0xCD87 | CDKCANA - PT-CAN Kommunikationsfehler |
| 0xCD8B | CDKCANB - Local-CAN Kommunikationsfehler |
| 0xCD9B | CDKX315 - Botschaft (Fahrzeugmodus, 315) |
| 0xCDA1 | CDKXC4 - Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | CDKX3B4 - Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | CDKX334 - Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA7 | CDKX3B0 - Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDAA | CDKX135 - Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAC | CDKX3B5 - Botschaft (Status Wasserventil,  3B5) |
| 0xCDEB | CDKX21A - Botschaft (Lampenzustand,  21A) |
| 0xCDED | CDKXBF - Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0xCDEE | CDKX2F8 - Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDEF | CDKX2E4 - Botschaft (Status Anhänger, 2E4) |
| 0xEA60 | CDKCAT - Dummy |
| 0xEA61 | CDKCIF - Dummy |
| 0xEA62 | CDKPU - Dummy |
| 0xEA63 | CDKTA - Dummy |
| 0xEA64 | CDKTM - Dummy |
| 0xEA65 | CDKVFZ - Dummy |
| 0xEA6A | CDKDKALRN - Dummy |
| 0xEA6B | CDKDKOBD - Dummy |
| 0xEA6C | CDKDKVL - Dummy |
| 0xEA6D | CDKDKVL2 - Dummy |
| 0xEA6E | CDKDVALRN - Dummy |
| 0xEA6F | CDKPWRVAR - Dummy |
| 0xEA70 | CDKSEGRADP - Dummy |
| 0xEA71 | CDKLM - Dummy |
| 0xEA72 | CDKDKRAT - Dummy |
| 0xEA73 | CDKTKA - Dummy |
| 0xEA74 | CDKPUSPL - Dummy |
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
| xx1xxxxx | 61 | Fehler in Entprellphase |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x00FF | 0x00FF | 0x00FF | 0x00FF |
| 0x29CC | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29CD | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29CE | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29CF | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D0 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D1 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D2 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D3 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D4 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D9 | 0x003C | 0x0005 | 0x00B2 | 0x00B3 |
| 0x29DD | 0x000A | 0x001A | 0x000B | 0x008C |
| 0x29E5 | 0x000B | 0x001A | 0x0008 | 0x0006 |
| 0x29E6 | 0x000B | 0x001A | 0x0006 | 0x0008 |
| 0x29E7 | 0x000A | 0x0013 | 0x003C | 0x0005 |
| 0x29E8 | 0x000A | 0x0013 | 0x003C | 0x0007 |
| 0x29E9 | 0x000A | 0x001A | 0x003C | 0x0005 |
| 0x29EA | 0x000A | 0x001A | 0x003C | 0x0007 |
| 0x29EB | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x29EC | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x29ED | 0x000A | 0x001A | 0x00AD | 0x00AC |
| 0x29EE | 0x000B | 0x001A | 0x00AD | 0x00AC |
| 0x29EF | 0x0005 | 0x0006 | 0x001A | 0x000A |
| 0x29F0 | 0x0007 | 0x0008 | 0x001A | 0x000A |
| 0x29F4 | 0x00A3 | 0x001A | 0x00BF | 0x00C1 |
| 0x29F5 | 0x00A4 | 0x001A | 0x00C0 | 0x00C2 |
| 0x29FE | 0x0085 | 0x0082 | 0x00CA | 0x0084 |
| 0x2A01 | 0x000A | 0x0011 | 0x0014 | 0x0005 |
| 0x2A02 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2A03 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2A05 | 0x000A | 0x0011 | 0x0014 | 0x0007 |
| 0x2A08 | 0x0086 | 0x0083 | 0x00CA | 0x0084 |
| 0x2A09 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2A12 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A13 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A14 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A15 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A16 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A17 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A18 | 0x000A | 0x0014 | 0x0024 | 0x000B |
| 0x2A19 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A1A | 0x000A | 0x001A | 0x0024 | 0x0035 |
| 0x2A1B | 0x003C | 0x0035 | 0x0024 | 0x000B |
| 0x2A1C | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A1D | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A1E | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A20 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A58 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A59 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A5A | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A5B | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A5C | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A5D | 0x000A | 0x0014 | 0x0012 | 0x00C3 |
| 0x2A5E | 0x000A | 0x0014 | 0x0012 | 0x00C4 |
| 0x2A5F | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A60 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A61 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A62 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A63 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A64 | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A65 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A66 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A67 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A68 | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A69 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A6A | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A6B | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A6C | 0x000A | 0x0014 | 0x0012 | 0x00BE |
| 0x2A6D | 0x000A | 0x008C | 0x0012 | 0x00C5 |
| 0x2A6E | 0x000A | 0x008C | 0x0012 | 0x00C6 |
| 0x2A6F | 0x0012 | 0x00BE | 0x000A | 0x001A |
| 0x2A80 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A81 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A83 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A84 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A85 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A86 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A88 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A89 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8A | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8B | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8C | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8D | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8E | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8F | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A90 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A91 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2B5C | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B5D | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B61 | 0x000A | 0x0012 | 0x001A | 0x00FF |
| 0x2B62 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B63 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B64 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B65 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B66 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B70 | 0x000A | 0x0012 | 0x0013 | 0x0023 |
| 0x2B71 | 0x0012 | 0x000A | 0x0013 | 0x0023 |
| 0x2B72 | 0x0012 | 0x000A | 0x0013 | 0x0023 |
| 0x2B73 | 0x0012 | 0x000A | 0x0013 | 0x0023 |
| 0x2B80 | 0x000A | 0x001A | 0x0014 | 0x0015 |
| 0x2B98 | 0x0014 | 0x00BE | 0x0012 | 0x0024 |
| 0x2B99 | 0x000A | 0x0014 | 0x0012 | 0x00BE |
| 0x2B9A | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9B | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9C | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9D | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2BC0 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2BC1 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2C24 | 0x0012 | 0x008C | 0x00A8 | 0x00A9 |
| 0x2C31 | 0x009D | 0x00A8 | 0x0017 | 0x0085 |
| 0x2C32 | 0x009E | 0x00A9 | 0x0019 | 0x0086 |
| 0x2C37 | 0x0082 | 0x00A8 | 0x0029 | 0x003C |
| 0x2C38 | 0x0083 | 0x00A9 | 0x002A | 0x003C |
| 0x2C39 | 0x00AA | 0x00B0 | 0x00A8 | 0x0085 |
| 0x2C3A | 0x00AB | 0x00B1 | 0x00A9 | 0x0086 |
| 0x2C3B | 0x008C | 0x00A8 | 0x0017 | 0x0044 |
| 0x2C3C | 0x008C | 0x00A9 | 0x0019 | 0x0045 |
| 0x2C45 | 0x00A1 | 0x00A8 | 0x0029 | 0x0017 |
| 0x2C46 | 0x00A2 | 0x00A9 | 0x002A | 0x0019 |
| 0x2C47 | 0x0014 | 0x000B | 0x00A8 | 0x009F |
| 0x2C48 | 0x0014 | 0x000B | 0x00A9 | 0x00A0 |
| 0x2C49 | 0x009D | 0x00A8 | 0x0017 | 0x0085 |
| 0x2C4A | 0x009E | 0x00A9 | 0x0019 | 0x0086 |
| 0x2C4B | 0x009F | 0x008C | 0x0014 | 0x00A8 |
| 0x2C4C | 0x00A0 | 0x008C | 0x0014 | 0x00A9 |
| 0x2C4D | 0x00A8 | 0x0082 | 0x0044 | 0x009F |
| 0x2C4E | 0x00A9 | 0x0083 | 0x0045 | 0x00A0 |
| 0x2C4F | 0x00A8 | 0x0082 | 0x0044 | 0x008C |
| 0x2C50 | 0x00A9 | 0x0083 | 0x0045 | 0x008C |
| 0x2C51 | 0x00A8 | 0x0082 | 0x0044 | 0x009F |
| 0x2C52 | 0x00A9 | 0x0083 | 0x0045 | 0x00A0 |
| 0x2C53 | 0x0014 | 0x00A8 | 0x0082 | 0x009F |
| 0x2C54 | 0x0014 | 0x00A9 | 0x0083 | 0x00A0 |
| 0x2C61 | 0x0029 | 0x0044 | 0x00A8 | 0x000B |
| 0x2C62 | 0x002A | 0x0045 | 0x00A9 | 0x000B |
| 0x2C6D | 0x000A | 0x002B | 0x0033 | 0x0017 |
| 0x2C6E | 0x000A | 0x002C | 0x0034 | 0x0019 |
| 0x2C71 | 0x002B | 0x008C | 0x0033 | 0x0017 |
| 0x2C72 | 0x002C | 0x008C | 0x0034 | 0x0019 |
| 0x2C9C | 0x000B | 0x008C | 0x0014 | 0x0044 |
| 0x2C9D | 0x000B | 0x008C | 0x0014 | 0x0045 |
| 0x2C9E | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2C9F | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2CA0 | 0x000B | 0x008C | 0x0029 | 0x0044 |
| 0x2CA1 | 0x000B | 0x008C | 0x002A | 0x0045 |
| 0x2CA8 | 0x007E | 0x0017 | 0x002B | 0x0033 |
| 0x2CA9 | 0x007F | 0x0019 | 0x002C | 0x0034 |
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
| 0x2D08 | 0x0014 | 0x0026 | 0x0064 | 0x0076 |
| 0x2D0F | 0x000A | 0x0013 | 0x0014 | 0x001A |
| 0x2D10 | 0x000A | 0x0011 | 0x0013 | 0x0071 |
| 0x2D11 | 0x000A | 0x0013 | 0x0015 | 0x0071 |
| 0x2D13 | 0x000A | 0x0011 | 0x0013 | 0x0071 |
| 0x2D14 | 0x000A | 0x0013 | 0x0014 | 0x001A |
| 0x2D19 | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1A | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1B | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1C | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D28 | 0x000A | 0x001A | 0x0012 | 0x0014 |
| 0x2D29 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2D32 | 0x000A | 0x0013 | 0x0015 | 0x0071 |
| 0x2D6E | 0x000A | 0x001A | 0x0020 | 0x0021 |
| 0x2D70 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D71 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D72 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D75 | 0x000A | 0x0015 | 0x001F | 0x0023 |
| 0x2D76 | 0x001B | 0x001C | 0x0023 | 0x001F |
| 0x2D78 | 0x0011 | 0x000A | 0x0015 | 0x0014 |
| 0x2DB4 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2DBF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DCA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DCB | 0x000A | 0x001A | 0x0014 | 0x00C9 |
| 0x2DCF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD8 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD9 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDB | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDC | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDD | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDE | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2DDF | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2DEB | 0x00DF | 0x00BA | 0x000A | 0x00BC |
| 0x2DEC | 0x00DD | 0x00DE | 0x00DF | 0x00A5 |
| 0x2DED | 0x00FB | 0x00FC | 0x00FD | 0x00BE |
| 0x2E24 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E25 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E26 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E27 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E28 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E29 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2A | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2B | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E30 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E31 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E32 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E33 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E34 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E35 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E36 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E37 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E68 | 0x000A | 0x001A | 0x008D | 0x0094 |
| 0x2E69 | 0x000A | 0x001A | 0x0092 | 0x008F |
| 0x2E6A | 0x000A | 0x001A | 0x008E | 0x0091 |
| 0x2E6B | 0x000A | 0x001A | 0x0093 | 0x0090 |
| 0x2E72 | 0x000A | 0x001A | 0x0080 | 0x0081 |
| 0x2E73 | 0x000A | 0x001A | 0x0080 | 0x0081 |
| 0x2E7C | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2E8B | 0x00D4 | 0x00D5 | 0x000A | 0x0014 |
| 0x2E8C | 0x00D4 | 0x00D5 | 0x000A | 0x0014 |
| 0x2E8D | 0x00D4 | 0x00D5 | 0x000A | 0x0014 |
| 0x2E97 | 0x0014 | 0x00F9 | 0x00FA | 0x00F8 |
| 0x2EA0 | 0x000A | 0x00E0 | 0x00E1 | 0x0014 |
| 0x2EB8 | 0x00D4 | 0x00D5 | 0x0014 | 0x008C |
| 0x2EBA | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2EBB | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2EBC | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2EBD | 0x0014 | 0x00F9 | 0x00FA | 0x00F8 |
| 0x2EBE | 0x0014 | 0x00F9 | 0x00FA | 0x00F8 |
| 0x2EE0 | 0x0025 | 0x0013 | 0x000A | 0x0072 |
| 0x2EE1 | 0x0025 | 0x0013 | 0x000A | 0x0072 |
| 0x2EE4 | 0x00A5 | 0x0013 | 0x003E | 0x0024 |
| 0x2EEA | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EEC | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EF4 | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EF5 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2EFE | 0x000A | 0x0012 | 0x0014 | 0x006B |
| 0x2F08 | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F09 | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F0D | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2F0F | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2F12 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F17 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2F26 | 0x0012 | 0x0024 | 0x001A | 0x0014 |
| 0x2F44 | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2F45 | 0x000A | 0x0012 | 0x0014 | 0x00BE |
| 0x2F46 | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2F4E | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F4F | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F50 | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F59 | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2F5A | 0x000A | 0x001A | 0x0014 | 0x000B |
| 0x2F62 | 0x000A | 0x0012 | 0x000B | 0x0014 |
| 0x2F67 | 0x000A | 0x0012 | 0x000B | 0x0014 |
| 0x2F6C | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F71 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F76 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F77 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F78 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F7B | 0x000A | 0x0012 | 0x001A | 0x008C |
| 0x2F80 | 0x0014 | 0x0024 | 0x00A5 | 0x008C |
| 0x2F8A | 0x000A | 0x0014 | 0x0024 | 0x0012 |
| 0x2F94 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F99 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2F9E | 0x000A | 0x00E0 | 0x00E1 | 0x0014 |
| 0x2FA3 | 0x0014 | 0x000A | 0x008C | 0x00BE |
| 0xCD87 | 0x000A | 0x0014 | 0x0013 | 0x000B |
| 0xCD8B | 0x000A | 0x0014 | 0x0013 | 0x000B |
| 0xCD9B | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA1 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA2 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA3 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDAA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDAC | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDEB | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDED | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDEE | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDEF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xFFFF | 0x00FF | 0x00FF | 0x00FF | 0x00FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Regelstatus Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0002 | Regelstatus Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0003 | Relative Luftmasse | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0004 | Motortemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x0005 | Regelfaktor Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0006 | Adaptionsfaktor Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0007 | Regelfaktor Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0008 | Adaptionsfaktor Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0009 | - | unsigned char | - | --- | - | 0 | 1 | 0 |
| 0x000A | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x000B | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0011 | Luftmassenfluß | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x0012 | Motortemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0013 | Ansauglufttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0014 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x0015 | Drosselklappenwinkel bez. auf unteren Anschlag | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0,0 |
| 0x0016 | Sondenspannung vor Katalysator Bank 1 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
| 0x0017 | Sondenspannung hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
| 0x0019 | Sondenspannung hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
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
| 0x002A | Abgastemperatur vor Katalysator aus Modell Bank 2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002B | Katalysatortemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002C | Katalysatortemperatur aus Modell Bank 2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002E | Spannung an der Heizerendstufe 2 vor Katalysator | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x002F | Spannung an der Heizerendstufe hinter Kat | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0030 | Spannung an der Heizerendstufe 2 hinter Kat | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0033 | Innenwiderstand Lambdasonde hinter Kat. | Ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x0034 | Innenwiderstand Lambdasonde hinter Kat. Bank 2 | Ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x0035 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x003C | Tankfüllstand 1L / Ink. | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x003E | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x003F | Motortemperatur-Referenzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0040 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0041 | Ist Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0042 | Zulässiges indiziertes Moment vor Filter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0043 | Indiziertes Sollmoment für ZW-Eingriff vor Momentenbegrenzung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0044 | Innenwiderstand LSU | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x0045 | Innenwiderstand LSU, Bank 2 | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x0064 | DK-Winkel der Notluftposition | % | - | unsigned char | - | 0,390630960464478 | 1 | 0,0 |
| 0x0065 | Spannung Drosselklappen-Poti 1 am unteren Anschlag | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0066 | Integratorgradient für Offsetkorrektur Klopfregelung | V/s | - | signed char | - | 23,841869354248 | 1 | 0,0 |
| 0x0069 | Spannung Lambdasonde hinter Katalysator | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x006A | Spannung Lambdasonde hinter Katalysator 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x006B | Tastverhältnis Elektrolüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x006C | Istwinkel für Einlass-Nockenwelle | Grad KW | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x006D | Istwinkel für Einlass-Nockenwelle Bank 2 | Grad KW | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x006E | Abgleich DK Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x006F | Abgleich DK Modell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x0071 | ADC- Spannung Luftmasse | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0072 | ADC- Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0073 | ADC- Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0074 | ADC- Spannung Temperaturkuehleraustritt | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0075 | ADC- Spannung Umgebungsdrucksensor | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0076 | Dauer-RAM: Sollwert DK-Winkel in Notluftposition, bez. auf UMA | % | - | unsigned char | - | 0,390630960464478 | 1 | 0,0 |
| 0x0077 | Integratorwert Klopfregelung Meßfensterende Testimpuls | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0078 | gefilterte Katalysatortemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x0079 | gefilterte Katalysatortemperatur aus Modell, Bank2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x007E | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x007F | normierte Heizleistung der Lambdasonde hinter Kat 2 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x0080 | Integratorgradient für Nulltest-Diagnose Klopfregelung | V/s | - | signed char | - | 23,841869354248 | 1 | 0,0 |
| 0x0081 | Integratorwert Klopfregelung Meßfensteranfang | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0082 | Lambda-Sollwert bez. auf Einbauort Lambdasonde | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x0083 | Lambda-Sollwert bez. auf Einbauort Lambdasonde Bank 2 | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x0084 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0085 | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0086 | schneller Mittelwert des Lambdaregelfaktors Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0087 | Mittelwert der Amplitude Sondensignal hinter Kat. korrigiert mit KB | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x0088 | Mittelwert der Amplitude Sondensignal hinter Kat. korrigiert mit KB  Bank2 | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
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
| 0x0099 | Abgleich EV Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x009A | Differenz Pumpstrom zwischen Referenz und min. bei Grobleckmessung | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x009B | Abgleich EV Modell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x009D | I-Anteil der stetigen LRHK (Byte) | - | - | signed char | - | 4,8828125E-4 | 1 | 0,0 |
| 0x009E | I-Anteil der stetigen LRHK Bank2 (Byte) | - | - | signed char | - | 4,8828125E-4 | 1 | 0,0 |
| 0x009F | Korrekturwert der LSU-Spannung vor Kat (Byte) | V | - | signed char | - | 0,001953125 | 1 | 0,0 |
| 0x00A0 | Korrekturwert der LSU-Spannung vor Kat Bank2 (Byte) | V | - | signed char | - | 0,001953125 | 1 | 0,0 |
| 0x00A1 | Statusbyte: Teilprüfungserkennung für Plausibilitätsfehler | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00A2 | Statusbyte: Teilprüfungserkennung für Plausibilitätsfehler Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00A3 | Abgasmassenfluß gefiltert, Bank 1 | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x00A4 | Abgasmassenfluß gefiltert, Bank 2 | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x00A5 | Abstellzeit (Byte) | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x00A6 | LSU-Spannung vor Kat, korrigiert (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A7 | LSU-Spannung vor Kat, korrigiert Bank2 (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A8 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A9 | Sondenspannung vor Kat einer Breitbandlambdasonde Bank2 (ADC-Wert) (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00AA | Dynamikwert der LSU (Byte) | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00AB | Dynamikwert der LSU Bank2 (Byte) | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00AC | multiplikativer Gemischadaptionsfaktor unterer mult. Bereich (Byte) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00AD | multipl. Gemischadaptionsfaktor unterer mult. Bereich der Bank 2 (Byte) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00AE | Regelabweichung Lambda (Byte) | - | - | signed char | - | 0,0078125 | 1 | 0,0 |
| 0x00AF | Regelabweichung Lambda;Bank2 (Byte) | - | - | signed char | - | 0,0078125 | 1 | 0,0 |
| 0x00B0 | Lambdaamplitude nach Filterung (Byte) | - | - | signed char | - | 0,0625 | 1 | 0,0 |
| 0x00B1 | Lambdaamplitude nach Filterung Bank 2 (Byte) | - | - | signed char | - | 0,0625 | 1 | 0,0 |
| 0x00B2 | Lambda-Istwert (Byte) | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00B3 | Lambda-Istwert Bank2 (Byte) | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00B4 | Absolutdruck Abgassystem (Byte) | hPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x00B5 | Absolutdruck Abgassystem 2 (Byte) | hPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x00B6 | gefilterte Abgastemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00B7 | gefilterte Abgastemperatur aus Modell, Bank2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00B8 | gefilterte Sondenspannung vor Kat einer Breitbandlambdasonde (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00B9 | gefilterte Sondenspannung vor Kat einer Breitbandlambdasonde Bank2 (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00BA | Generatorspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x00BB | vom Generator empfangenes Lastsignal | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00BC | Generatortemperatur | Grad C | - | unsigned char | - | 192,0 | 1 | -48,0 |
| 0x00BD | Beladung des Aktivkohlefilters | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x00BE | Betriebszeit | min | - | unsigned char | - | 1536,0 | 1 | 0,0 |
| 0x00BF | Abgastemperatur im Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00C0 | Abgastemperatur im Katalysator aus Modell Bank 2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00C1 | Istwert Lambdasonde, korrigiert um Zusatzamplitude | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00C2 | Istwert Lambdasonde, korrigiert um Zusatzamplitude, Bank2 | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00C3 | VVT-Sollwert in Prozent bzgl Verstellbereich Bank1 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C4 | VVT-Sollwert in Prozent bzgl Verstellbereich Bank 2 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C5 | VVT-Istwert in Prozent bzgl. Verstellbereich Bank1 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C6 | VVT-Istwert in Prozent bzgl. Verstellbereich Bank2 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
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
| 0x00DD | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00DE | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00DF | aktuelle Batteriespannung | V | - | unsigned char | - | 0,0640000030398369 | 1 | 6,0 |
| 0x00E0 | aktuelles Oelniveau korrigiert | - | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x00E1 | relativer Fuellstand des Motoroels | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00F8 | Erregerstrom Generator | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x00F9 | vom Generator empfangene Generatorsollspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x00FA | Auslastungsgrad Generator | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00FB | Verweildauer des Ruhestroms innerhalb 80-200mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x00FC | Verweildauer des Ruhestroms innerhalb 200-1000mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x00FD | Verweildauer des Ruhestroms grösser 1000mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x00FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29CD | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29CE | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29CF | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29D0 | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29D1 | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29D2 | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29D3 | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29D4 | 0x0006 | 0x0000 | 0x0005 | 0x0003 |
| 0x29D9 | 0x0000 | 0x0000 | 0x0007 | 0x0000 |
| 0x29DD | 0x0000 | 0x000A | 0x0000 | 0x0009 |
| 0x29E5 | 0x0000 | 0x0000 | 0x000C | 0x000B |
| 0x29E6 | 0x0000 | 0x0000 | 0x000C | 0x000B |
| 0x29E7 | 0x0000 | 0x0000 | 0x000E | 0x000D |
| 0x29E8 | 0x0000 | 0x0000 | 0x000E | 0x000D |
| 0x29ED | 0x0000 | 0x0000 | 0x0010 | 0x000F |
| 0x29EE | 0x0000 | 0x0000 | 0x0010 | 0x000F |
| 0x29EF | 0x0012 | 0x0013 | 0x0014 | 0x0011 |
| 0x29F0 | 0x0012 | 0x0013 | 0x0014 | 0x0011 |
| 0x29F4 | 0x0000 | 0x0000 | 0x0015 | 0x0000 |
| 0x29F5 | 0x0000 | 0x0000 | 0x0015 | 0x0000 |
| 0x29FE | 0x0018 | 0x0000 | 0x0017 | 0x0016 |
| 0x2A02 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A03 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A08 | 0x0018 | 0x0000 | 0x0017 | 0x0016 |
| 0x2A12 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A13 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A14 | 0x0000 | 0x0000 | 0x0000 | 0x001C |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x001D |
| 0x2A16 | 0x0000 | 0x0000 | 0x001E | 0x0000 |
| 0x2A17 | 0x0021 | 0x0022 | 0x0020 | 0x001F |
| 0x2A18 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A19 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A1A | 0x0000 | 0x0000 | 0x0023 | 0x0000 |
| 0x2A1B | 0x0000 | 0x0000 | 0x0000 | 0x0024 |
| 0x2A1C | 0x0026 | 0x0025 | 0x0000 | 0x0000 |
| 0x2A1D | 0x0026 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A1E | 0x0000 | 0x0025 | 0x0000 | 0x0000 |
| 0x2A58 | 0x0000 | 0x001A | 0x0028 | 0x0027 |
| 0x2A59 | 0x002C | 0x002B | 0x002A | 0x0029 |
| 0x2A5A | 0x002C | 0x002B | 0x002A | 0x0029 |
| 0x2A5B | 0x002C | 0x002B | 0x002A | 0x0029 |
| 0x2A5C | 0x002C | 0x002B | 0x002A | 0x0029 |
| 0x2A5D | 0x002E | 0x002D | 0x0000 | 0x0000 |
| 0x2A5E | 0x002E | 0x002D | 0x0000 | 0x0000 |
| 0x2A5F | 0x0000 | 0x0000 | 0x0030 | 0x002F |
| 0x2A60 | 0x0000 | 0x0000 | 0x0030 | 0x002F |
| 0x2A61 | 0x0000 | 0x0033 | 0x0032 | 0x0031 |
| 0x2A62 | 0x0000 | 0x0033 | 0x0032 | 0x0031 |
| 0x2A63 | 0x0035 | 0x0034 | 0x0000 | 0x0000 |
| 0x2A64 | 0x0035 | 0x0034 | 0x0000 | 0x0000 |
| 0x2A65 | 0x0038 | 0x0037 | 0x0039 | 0x0036 |
| 0x2A66 | 0x0038 | 0x003A | 0x0039 | 0x0036 |
| 0x2A67 | 0x003C | 0x003B | 0x001B | 0x0019 |
| 0x2A68 | 0x003C | 0x003B | 0x001B | 0x0019 |
| 0x2A69 | 0x003E | 0x0000 | 0x003F | 0x003D |
| 0x2A6A | 0x003E | 0x0000 | 0x003F | 0x003D |
| 0x2A6B | 0x0000 | 0x0042 | 0x0041 | 0x0040 |
| 0x2A6C | 0x0000 | 0x0000 | 0x0000 | 0x0043 |
| 0x2A6D | 0x0045 | 0x0047 | 0x0046 | 0x0044 |
| 0x2A6E | 0x0045 | 0x0047 | 0x0046 | 0x0044 |
| 0x2A6F | 0x0000 | 0x0000 | 0x0000 | 0x0048 |
| 0x2A80 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A81 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A83 | 0x0049 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A84 | 0x0049 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A86 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2A88 | 0x004A | 0x0000 | 0x0000 | 0x0000 |
| 0x2A89 | 0x004A | 0x0000 | 0x0000 | 0x0000 |
| 0x2A8A | 0x0000 | 0x0000 | 0x004B | 0x0000 |
| 0x2A8B | 0x0000 | 0x0000 | 0x004B | 0x0000 |
| 0x2A8C | 0x0000 | 0x0000 | 0x004C | 0x0000 |
| 0x2A8D | 0x0000 | 0x0000 | 0x004C | 0x0000 |
| 0x2A8E | 0x0000 | 0x0000 | 0x004D | 0x0000 |
| 0x2A8F | 0x0000 | 0x0000 | 0x004D | 0x0000 |
| 0x2A90 | 0x0000 | 0x0000 | 0x004D | 0x0000 |
| 0x2A91 | 0x0000 | 0x0000 | 0x004D | 0x0000 |
| 0x2B5C | 0x004F | 0x004E | 0x0000 | 0x0000 |
| 0x2B5D | 0x0052 | 0x0051 | 0x0000 | 0x0050 |
| 0x2B62 | 0x0055 | 0x0054 | 0x001B | 0x0053 |
| 0x2B63 | 0x0055 | 0x0054 | 0x001B | 0x0053 |
| 0x2B64 | 0x0055 | 0x0054 | 0x001B | 0x0053 |
| 0x2B65 | 0x0055 | 0x0054 | 0x001B | 0x0053 |
| 0x2B66 | 0x0000 | 0x0056 | 0x0000 | 0x0000 |
| 0x2B70 | 0x0057 | 0x0000 | 0x001B | 0x0019 |
| 0x2B71 | 0x0059 | 0x005A | 0x005B | 0x0058 |
| 0x2B72 | 0x0000 | 0x0000 | 0x005C | 0x0000 |
| 0x2B73 | 0x0000 | 0x0000 | 0x005E | 0x005D |
| 0x2B80 | 0x0000 | 0x0000 | 0x0060 | 0x005F |
| 0x2B98 | 0x0061 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B99 | 0x0000 | 0x0000 | 0x0063 | 0x0062 |
| 0x2B9A | 0x0064 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B9B | 0x0065 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B9C | 0x0068 | 0x0067 | 0x0066 | 0x0000 |
| 0x2B9D | 0x0000 | 0x006B | 0x006A | 0x0069 |
| 0x2BC0 | 0x006C | 0x006D | 0x0002 | 0x0001 |
| 0x2BC1 | 0x0000 | 0x006E | 0x0000 | 0x0000 |
| 0x2C24 | 0x006F | 0x0000 | 0x0000 | 0x0000 |
| 0x2C31 | 0x0000 | 0x0000 | 0x0071 | 0x0070 |
| 0x2C32 | 0x0000 | 0x0000 | 0x0071 | 0x0070 |
| 0x2C37 | 0x0000 | 0x0072 | 0x0000 | 0x0000 |
| 0x2C38 | 0x0000 | 0x0072 | 0x0000 | 0x0000 |
| 0x2C39 | 0x0000 | 0x0000 | 0x0073 | 0x0000 |
| 0x2C3A | 0x0000 | 0x0000 | 0x0073 | 0x0000 |
| 0x2C3B | 0x0074 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C3C | 0x0074 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C45 | 0x0077 | 0x0076 | 0x0078 | 0x0075 |
| 0x2C46 | 0x0077 | 0x0076 | 0x0079 | 0x0075 |
| 0x2C47 | 0x0000 | 0x0000 | 0x001B | 0x0019 |
| 0x2C48 | 0x0000 | 0x0000 | 0x001B | 0x0019 |
| 0x2C49 | 0x007B | 0x007A | 0x0000 | 0x0000 |
| 0x2C4A | 0x007B | 0x007A | 0x0000 | 0x0000 |
| 0x2C4B | 0x007E | 0x007D | 0x007F | 0x007C |
| 0x2C4C | 0x007E | 0x007D | 0x007F | 0x007C |
| 0x2C4D | 0x0081 | 0x0082 | 0x0000 | 0x0080 |
| 0x2C4E | 0x0081 | 0x0082 | 0x0000 | 0x0080 |
| 0x2C4F | 0x0000 | 0x0083 | 0x0000 | 0x0000 |
| 0x2C50 | 0x0000 | 0x0083 | 0x0000 | 0x0000 |
| 0x2C51 | 0x0000 | 0x0084 | 0x0000 | 0x0000 |
| 0x2C52 | 0x0000 | 0x0084 | 0x0000 | 0x0000 |
| 0x2C53 | 0x0000 | 0x0085 | 0x0000 | 0x0000 |
| 0x2C54 | 0x0000 | 0x0085 | 0x0000 | 0x0000 |
| 0x2C61 | 0x0000 | 0x0000 | 0x0000 | 0x0135 |
| 0x2C62 | 0x0000 | 0x0000 | 0x0000 | 0x0135 |
| 0x2C6D | 0x0087 | 0x0088 | 0x0089 | 0x0086 |
| 0x2C6E | 0x0087 | 0x0088 | 0x0089 | 0x0086 |
| 0x2C71 | 0x008A | 0x001A | 0x008B | 0x0019 |
| 0x2C72 | 0x008A | 0x001A | 0x008B | 0x0019 |
| 0x2C9C | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2C9D | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2C9E | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2C9F | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2CA0 | 0x008E | 0x008D | 0x008F | 0x008C |
| 0x2CA1 | 0x008E | 0x008D | 0x008F | 0x008C |
| 0x2CA8 | 0x0090 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CA9 | 0x0090 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CEF | 0x0092 | 0x0094 | 0x0093 | 0x0091 |
| 0x2CF0 | 0x0000 | 0x0000 | 0x0096 | 0x0095 |
| 0x2CF1 | 0x0097 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF8 | 0x0098 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x009B | 0x0000 | 0x009A | 0x0099 |
| 0x2CFA | 0x009B | 0x0000 | 0x009A | 0x0099 |
| 0x2CFF | 0x009C | 0x0000 | 0x0000 | 0x0000 |
| 0x2D00 | 0x0000 | 0x0000 | 0x009E | 0x009D |
| 0x2D01 | 0x0000 | 0x0000 | 0x00A0 | 0x009F |
| 0x2D02 | 0x00A1 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D03 | 0x0000 | 0x0000 | 0x00A3 | 0x00A2 |
| 0x2D04 | 0x00A4 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D05 | 0x00A5 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D08 | 0x00A6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D0F | 0x0000 | 0x00A9 | 0x00A8 | 0x00A7 |
| 0x2D10 | 0x0000 | 0x0000 | 0x00AB | 0x00AA |
| 0x2D13 | 0x00AA | 0x00AB | 0x00AD | 0x00AC |
| 0x2D14 | 0x0000 | 0x0000 | 0x00AF | 0x00AE |
| 0x2D1A | 0x00B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1B | 0x00B3 | 0x0000 | 0x00B2 | 0x00B1 |
| 0x2D1C | 0x0000 | 0x0000 | 0x00B2 | 0x00B1 |
| 0x2D28 | 0x0000 | 0x0000 | 0x00B5 | 0x00B4 |
| 0x2D29 | 0x00B8 | 0x0000 | 0x00B7 | 0x00B6 |
| 0x2D32 | 0x0000 | 0x0000 | 0x00BA | 0x00B9 |
| 0x2D6E | 0x00BB | 0x0000 | 0x0000 | 0x0000 |
| 0x2D70 | 0x00BE | 0x00BD | 0x00BF | 0x00BC |
| 0x2D71 | 0x00C3 | 0x00C2 | 0x00C1 | 0x00C0 |
| 0x2D72 | 0x0000 | 0x0000 | 0x00C5 | 0x00C4 |
| 0x2D75 | 0x00C6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D76 | 0x00C7 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D78 | 0x00C8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB4 | 0x00CB | 0x00CC | 0x00CA | 0x00C9 |
| 0x2DBF | 0x00CE | 0x00CF | 0x00D0 | 0x00CD |
| 0x2DCA | 0x00D3 | 0x00D2 | 0x00D1 | 0x0000 |
| 0x2DCB | 0x00D5 | 0x00D4 | 0x0000 | 0x0000 |
| 0x2DCF | 0x00D6 | 0x00D2 | 0x00D1 | 0x0000 |
| 0x2DD7 | 0x00D8 | 0x00D2 | 0x00D7 | 0x0000 |
| 0x2DD8 | 0x00D9 | 0x00DA | 0x00D7 | 0x0000 |
| 0x2DD9 | 0x00DC | 0x00CF | 0x00DB | 0x0000 |
| 0x2DDA | 0x00DD | 0x00D2 | 0x0000 | 0x0000 |
| 0x2DDB | 0x0000 | 0x00D2 | 0x0000 | 0x0000 |
| 0x2DDC | 0x00D8 | 0x00D2 | 0x00D1 | 0x0000 |
| 0x2DDD | 0x00DE | 0x00CF | 0x0000 | 0x0000 |
| 0x2DDE | 0x00DF | 0x00E0 | 0x0000 | 0x00DE |
| 0x2DDF | 0x00DF | 0x00E0 | 0x0000 | 0x00DE |
| 0x2DEB | 0x0000 | 0x00E3 | 0x00E2 | 0x00E1 |
| 0x2DEC | 0x00E5 | 0x0000 | 0x00E4 | 0x0000 |
| 0x2DED | 0x00E6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E24 | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E25 | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E26 | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E27 | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E28 | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E29 | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E2A | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E2B | 0x00E9 | 0x00EA | 0x00E8 | 0x00E7 |
| 0x2E30 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E31 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E32 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E33 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E34 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E35 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E36 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E37 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2E68 | 0x00EB | 0x0000 | 0x00EC | 0x00ED |
| 0x2E69 | 0x00EB | 0x0000 | 0x00EC | 0x00ED |
| 0x2E6A | 0x00EB | 0x0000 | 0x00EC | 0x00ED |
| 0x2E6B | 0x00EB | 0x0000 | 0x00EC | 0x00EE |
| 0x2E72 | 0x00EB | 0x0000 | 0x00F0 | 0x00EF |
| 0x2E73 | 0x00F1 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E7C | 0x00F3 | 0x00F2 | 0x0000 | 0x0000 |
| 0x2E8B | 0x0137 | 0x00F2 | 0x0000 | 0x0136 |
| 0x2E8C | 0x0138 | 0x0139 | 0x0000 | 0x00FE |
| 0x2E8D | 0x013B | 0x013C | 0x0000 | 0x013A |
| 0x2E97 | 0x00FD | 0x00FC | 0x00F3 | 0x00FB |
| 0x2EA0 | 0x00FF | 0x0101 | 0x0100 | 0x00FE |
| 0x2EB8 | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EB9 | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EBA | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EBB | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EBC | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EBD | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EBE | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EBF | 0x0000 | 0x00DA | 0x0000 | 0x0000 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x0053 | 0x001B |
| 0x2EE1 | 0x0104 | 0x0103 | 0x0105 | 0x0102 |
| 0x2EE4 | 0x0106 | 0x0106 | 0x0106 | 0x0106 |
| 0x2EEA | 0x0000 | 0x0000 | 0x0053 | 0x001B |
| 0x2EEC | 0x0108 | 0x0000 | 0x0000 | 0x0107 |
| 0x2EF4 | 0x0109 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2EFE | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2F08 | 0x0000 | 0x0000 | 0x0019 | 0x001B |
| 0x2F09 | 0x010A | 0x0000 | 0x00AD | 0x00AC |
| 0x2F0D | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2F0F | 0x010B | 0x0000 | 0x0000 | 0x0000 |
| 0x2F12 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2F17 | 0x0000 | 0x0000 | 0x0000 | 0x010C |
| 0x2F44 | 0x010F | 0x0110 | 0x010E | 0x010D |
| 0x2F45 | 0x0112 | 0x0113 | 0x0111 | 0x0000 |
| 0x2F46 | 0x0000 | 0x0116 | 0x0115 | 0x0114 |
| 0x2F4E | 0x0000 | 0x0117 | 0x0118 | 0x00AC |
| 0x2F4F | 0x011B | 0x0000 | 0x011A | 0x0119 |
| 0x2F50 | 0x011D | 0x0000 | 0x0000 | 0x011C |
| 0x2F59 | 0x0000 | 0x011E | 0x0000 | 0x0000 |
| 0x2F5A | 0x0000 | 0x011F | 0x0000 | 0x0000 |
| 0x2F62 | 0x0120 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F67 | 0x0000 | 0x0121 | 0x0000 | 0x0000 |
| 0x2F6C | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2F71 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2F76 | 0x0123 | 0x0000 | 0x0124 | 0x0122 |
| 0x2F77 | 0x0126 | 0x0125 | 0x00AD | 0x00AC |
| 0x2F78 | 0x0000 | 0x0000 | 0x001B | 0x0019 |
| 0x2F7B | 0x0127 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F80 | 0x010A | 0x00DA | 0x0000 | 0x0000 |
| 0x2F8A | 0x012B | 0x012A | 0x0129 | 0x0128 |
| 0x2F94 | 0x0000 | 0x001A | 0x001B | 0x0019 |
| 0x2F99 | 0x012C | 0x006E | 0x00AD | 0x00AC |
| 0x2F9E | 0x012E | 0x0101 | 0x012D | 0x0000 |
| 0x2FA3 | 0x012F | 0x0000 | 0x0000 | 0x0000 |
| 0xCD87 | 0x0000 | 0x0131 | 0x0000 | 0x0130 |
| 0xCD8B | 0x0000 | 0x0131 | 0x0000 | 0x0130 |
| 0xCD9B | 0x0133 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDA1 | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDA2 | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDA3 | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDA7 | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDAA | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDAC | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDEB | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDED | 0x0134 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDEE | 0x0000 | 0x0132 | 0x0000 | 0x0000 |
| 0xCDEF | 0x0000 | 0x0132 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0003 | Verbrennungsaussetzer mit Zylinderabschaltung |
| 0x0004 | kein Signal oder Wert |
| 0x0005 | Verbrennungsaussetzer betriebswarm, emissionsverschlechternd |
| 0x0006 | Verbrennungsaussetzer im Warmlauf, emissionsverschlechternd |
| 0x0007 | Aussetzer aufgrund leerem Tank |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0009 | Radgeschwindigkeit zu hoch |
| 0x000A | kein Raddrehzahlsignal erhalten |
| 0x000B | Obere Plausibilitätsschwelle überschritten (obere Multipl.) |
| 0x000C | Untere Plausibilitätsschwelle unterschritten (obere Multipl.) |
| 0x000D | System zu mager additiv pro Zeit zu groß |
| 0x000E | System zu fett additiv pro Zeit zu klein |
| 0x000F | Obere Plausibilitätsschwelle überschritten (Gemisch zu mager) |
| 0x0010 | Untere Plausibilitätsschwelle unterschritten (Gemisch zu fett) |
| 0x0011 | max Fehler multiplikativ |
| 0x0012 | min Fehler additiv |
| 0x0013 | max Fehler additiv |
| 0x0014 | min Fehler multiplikativ |
| 0x0015 | Katalysator-Wirkungsgrad unter Schwellwert |
| 0x0016 | Sekundärluftmasse und Summe Sekundärluftmasse Bank 1 und Bank 2 zu gering |
| 0x0017 | Sekundärluftmasse zu gering |
| 0x0018 | Summe Sekundärluftmasse Bank 1 und Bank 2 zu gering |
| 0x0019 | Kurzschluss nach Plus |
| 0x001A | Leitungsunterbrechung |
| 0x001B | Kurzschluss nach Minus |
| 0x001C | Feinleck erkannt |
| 0x001D | Leckage größer 1,0mm |
| 0x001E | 'Minimalwert' erkannt (Kleinstleck, keine MIL on) |
| 0x001F | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x0020 | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x0021 | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x0022 | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x0023 | Tankentlüftungssystem |
| 0x0024 | nicht  korrekt geschlossen |
| 0x0025 | CAN-Fehler Tankfüllstand |
| 0x0026 | Tankfüllstandssignal unplausibel |
| 0x0027 | Kurzschluss nach Ubatt |
| 0x0028 | Kurzschluss nach Masse |
| 0x0029 | Magnetloss-Fehler |
| 0x002A | Reset-Fehler |
| 0x002B | Parity-Fehler oder kein Signal |
| 0x002C | Gradientenüberschreitung / Ident |
| 0x002D | Datenkonformität |
| 0x002E | Sensorsignale zueinander unplausibel |
| 0x002F | Sensorversorgungsspannung zu hoch |
| 0x0030 | Sensorversorgungsspannung zu klein |
| 0x0031 | Verstellbereich fehlerhaft |
| 0x0032 | Fehler unteres Lernfenster |
| 0x0033 | keine Anschläge gelernt |
| 0x0034 | Lagereglerüberwachung |
| 0x0035 | Drehrichtungserkennung |
| 0x0036 | EEPROM-Test-Fehler |
| 0x0037 | Watchdog oder Temperatursensorfehler |
| 0x0038 | ROM-Test-Fehler |
| 0x0039 | RAM-Test-Fehler |
| 0x003A | Stack-Test-Fehler |
| 0x003B | Kurzschluss der Motorleitungen |
| 0x003C | Ansteuerungsfehler allgemein |
| 0x003D | Spannung zu hoch |
| 0x003E | Relais-Fehler |
| 0x003F | Spannung zu klein |
| 0x0040 | Drehzahlfüllungsbegrenzung |
| 0x0041 | Exzenterwinkel fährt nicht auf Vollhubposition |
| 0x0042 | Exzenterwinkel Überlast erkennt Fehler |
| 0x0043 | Anschläge lernen notwendig |
| 0x0044 | Strom E-Motoransteuerung zu hoch |
| 0x0045 | Überlastschutz VVT-System |
| 0x0046 | Temperatur E-Motor zu hoch |
| 0x0047 | Steuergerätetemperatur zu hoch |
| 0x0048 | maximale Anzahl der Minhubanschläge überschritten |
| 0x0049 | Regelanschlag zu lange, zu groß |
| 0x004A | Nockenwellenverstellung hat Frühposition nicht erreicht |
| 0x004B | Anschlagadaptionen außerhalb gültigem Bereich |
| 0x004C | Nockenwellenverstellung hat Spätposition nicht erreicht |
| 0x004D | Korrelationsfehler, ein Zahn Versatz |
| 0x004E | Leitungsunterbrechung, Drehzahlsignal |
| 0x004F | gestörtes Drehzahlsignal |
| 0x0050 | Zahnkorrektur bei einem Zahn zuviel |
| 0x0051 | Zahnkorrektur bei einem Zahn zuwenig |
| 0x0052 | Kurbelwellenzahnfehler oder Lückenverlust |
| 0x0053 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x0054 | Lage der Phasenflanken oder Einbaulage außerhalb Toleranzen |
| 0x0055 | unplausible Phasenflankenanzahl |
| 0x0056 | keine Master NW vorhanden |
| 0x0057 | Leitungsunterbrechung oder Überlastung |
| 0x0058 | Potimax 'Potispannung im oberen Diagnosebereich' (30 ms entprellt) |
| 0x0059 | E_Disamot 'Temperaturgrenzwert Motorschutzmodell' (5 s entprellt) |
| 0x005A | Reglerüberwachung 'Regeldifferenz zu groß' (0,1 s entprellt) |
| 0x005B | Potimin 'Potispannung im unteren Diagnosebereich' (30 ms entprellt) |
| 0x005C | E_Disawarn 'Temperaturschwelle Motorschutzmodell' (5 s entprellt) |
| 0x005D | Pulsation oberhalb Schwelle |
| 0x005E | Pulsation unterhalb Schwelle |
| 0x005F | LL-Steller Öffnung zu groß oder Leckluft |
| 0x0060 | LL-Steller Öffnung zu gering |
| 0x0061 | Aktualitätszähler EEPROM und RAMBACKUP unterschiedlich |
| 0x0062 | Lesefehler, RAM Backup Fehler |
| 0x0063 | Schreibfehler, RAM Backup Fehler |
| 0x0064 | Rechnerüberwachung: RAM |
| 0x0065 | Rechnerüberwachung: ROM |
| 0x0066 | Reset TPU-RAM |
| 0x0067 | Reset TPU-Überwachung |
| 0x0068 | Rechnerüberwachung RESET |
| 0x0069 | Uberspannung auf VCC aktiv, SG-Fehler |
| 0x006A | Uberspannung auf VCC geheilt, SG-Fehler |
| 0x006B | Fehler F/A-Kom. FR-UM aktiv, SG-Fehler |
| 0x006C | Umgebungstemperatur grösser Modelltemperatur |
| 0x006D | Umgebungstemperatur kleiner Modelltemperatur |
| 0x006E | CAN Botschaft fehlerhaft |
| 0x006F | Vertauschte Lambdasonden |
| 0x0070 | Offsetprüfung, System zu fett |
| 0x0071 | Offsetprüfung, System zu mager |
| 0x0072 | Heizereinkopplung auf Signalpfad |
| 0x0073 | Sondensignal zu träge |
| 0x0074 | Sonde an Luft |
| 0x0075 | Offset über Grenzwert |
| 0x0076 | Nebenschluss Signalpfad mit Heizer |
| 0x0077 | Signal unplausibel (s. Umweltbedingung LSUNPSTAT) |
| 0x0078 | Langsame Sonde |
| 0x0079 | langsame Sonde |
| 0x007A | Signal zu fett |
| 0x007B | Signal zu mager |
| 0x007C | Signalkreisaptionswert zu hoch |
| 0x007D | Kommunikation SPI gestört |
| 0x007E | Initialisierungsfehler |
| 0x007F | Ubatt low |
| 0x0080 | Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x0081 | Signalspannung im Schub zu klein infolge offener Pumpstromleitung |
| 0x0082 | Unterbrechung Pumpstrompfad |
| 0x0083 | Unterbrechung Abgleichsleitung |
| 0x0084 | Unterbrechung Nernstleitung |
| 0x0085 | Unterbrechung virtuelle Masse |
| 0x0086 | Signal überschreitet Schwellwert nicht |
| 0x0087 | Sonde dynamisch zu langsam |
| 0x0088 | Schubspannungsschwelle nicht erreicht |
| 0x0089 | Signal unterschreitet Schwellwert nicht |
| 0x008A | Heiztakteinkopplung auf Signal |
| 0x008B | Adernschluß oder CSD (Referenzluft vergiftet) |
| 0x008C | RI-Regler dauerhaft am oberen Anschlag |
| 0x008D | Kalibrierwiderstand im SG fehlerhaft |
| 0x008E | Innenwiderstand der Nernstzelle unplausibel oder zu späte Betriebsbereitschaft |
| 0x008F | RI-Regler dauerhaft am unteren Anschlag |
| 0x0090 | Sondenheizung defekt (Innenwiderstand) |
| 0x0091 | Kurzschluss |
| 0x0092 | interner Kommunikationfehler |
| 0x0093 | Überlastung |
| 0x0094 | Lastabfall |
| 0x0095 | DK-Lagereg. klemmt anhaltend |
| 0x0096 | DK-Lagereg. klemmt kurzzeitig |
| 0x0097 | DV-E Lageabweichung |
| 0x0098 | Fehler DK-Poti 1 oder DK-Poti 2 |
| 0x0099 | Bereichsverletzung nach oben |
| 0x009A | Bereichsverletzung nach unten |
| 0x009B | unplausibel zu Ersatzwert aus Füllung |
| 0x009C | DV-E Fehler bei Verstärkerabgleich |
| 0x009D | DV-E Fehler bei Prüfung der Rückstellfeder |
| 0x009E | DV-E Fehler bei Prüfung der öffnenden Feder |
| 0x009F | Fehler bei Federprüfung 'Öffnen', Abbruch Feder öffnet nicht |
| 0x00A0 | Klappe läßt sich nicht von UMA schließen, weil Feder nicht öffnet |
| 0x00A1 | DV-E Fehler bei Prüfung Notluftposition |
| 0x00A2 | Lernverbot Status Prüfbedingung >0 aber nicht 27 |
| 0x00A3 | Lernverbot Status Prüfbedingung = 27 |
| 0x00A4 | UMA-Lernen während Urinitialisierung abgebrochen |
| 0x00A5 | Fehler bei UMA-Lernen (Wiederholung) |
| 0x00A6 | DVE-Tauscherkennung ohne Adaption |
| 0x00A7 | Wackelkontakt (Periodendauer unplausibel), niedrige Frequenz |
| 0x00A8 | Wackelkontakt (Periodendauer unplausibel), hohe Frequenz |
| 0x00A9 | Kurzschluss oder Leitungsunterbrechung |
| 0x00AA | Luftmasse gegenüber Modell zu gross |
| 0x00AB | Luftmasse gegenüber Modell zu gering |
| 0x00AC | obere Schwelle überschritten |
| 0x00AD | untere Schwelle unterschritten |
| 0x00AE | Kurzschluss, maximale Periodendauer überschritten |
| 0x00AF | Kurzschluss, minimale Periodendauer unterschritten |
| 0x00B0 | PWG1 oder PWG2 fehlerhaft oder außerhalb der Toleranz |
| 0x00B1 | Spannung oberhalb Max-Wert |
| 0x00B2 | Spannung unterhalb Min-Wert |
| 0x00B3 | Gleichlauffehler zwischen PWG1 und PWG2 |
| 0x00B4 | Signal oberhalb Schwelle, Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x00B5 | Signal unterhalb Schwelle, Kurzschluss nach Minus |
| 0x00B6 | Drucksensor hat obere Schwelle überschritten |
| 0x00B7 | Drucksensor hat untere Schwelle unterschritten |
| 0x00B8 | Plausibilität Differenzdrucksensor |
| 0x00B9 | Saugrohrdruck oberhalb Schwelle |
| 0x00BA | Saugrohrdruck unterhalb Schwelle |
| 0x00BB | Funktionsüberwachung Momentenvergleich |
| 0x00BC | RL-Überwachung |
| 0x00BD | ADC-Überwachung |
| 0x00BE | Reaktionsüberwachung |
| 0x00BF | Zündwinkelüberwachung |
| 0x00C0 | Kraftstoffkorrektur |
| 0x00C1 | Plausibilisierung relative Kraftstoffmasse / eingespritzte Kraftstoffmasse |
| 0x00C2 | Varianten Codierungsüberwachung |
| 0x00C3 | DK-Anschlagüberwachung (UMA) Ebene 2 |
| 0x00C4 | TPU-Überwachung |
| 0x00C5 | ADC-Testspannung außerhalb zulässigem Bereich |
| 0x00C6 | Funktionsüberwachung Drehzahlgeber-, Zuleitung- oder SG-Fehler |
| 0x00C7 | Fktüberwachung: Pedalwertgeber-, Zuleitung- oder SG-Fehler |
| 0x00C8 | Regelbereichsüberwachung fehlerhaft |
| 0x00C9 | Toggle-Bit fehlerhaft |
| 0x00CA | MFL-Signal weist Frequenzfehler |
| 0x00CB | MFL-Signal unplausibel |
| 0x00CC | Signalfehler Multifunktionslenkrad |
| 0x00CD | keine Reaktion |
| 0x00CE | CACC-Signal unplausibel |
| 0x00CF | kein Signal |
| 0x00D0 | Alive |
| 0x00D1 | Alive-Fehler |
| 0x00D2 | Timeouterkennung |
| 0x00D3 | Plausibilitätsfehler |
| 0x00D4 | CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Timeout |
| 0x00D5 | CAN-Schnittstelle, Timeout EGS |
| 0x00D6 | Plausibilitätsfehler MIL Ansteuerung |
| 0x00D7 | Aliveprüfung |
| 0x00D8 | Checksumme fehlerhaft |
| 0x00D9 | angefordertes Moment unplausibel |
| 0x00DA | Timeout |
| 0x00DB | Aktivitätsfehler CAN-ARS-Botschaft |
| 0x00DC | Plausfehler der ARS-Botschaft |
| 0x00DD | Checksumme fehlerhaft/Alive-Fehler |
| 0x00DE | Botschaftüberwachung fehlerhaft |
| 0x00DF | VVT-Botschaft nicht empfangen (DME ALL) |
| 0x00E0 | VVT-Botschaft (Sollwertbotschaft) nicht empfangen |
| 0x00E1 | Überspannung |
| 0x00E2 | Unterspannung |
| 0x00E3 | batterieloser Betrieb |
| 0x00E4 | Tiefentladung |
| 0x00E5 | Powermanagement defekt |
| 0x00E6 | Ruhestromverletzung |
| 0x00E7 | Kurzschluss nach Plus, Nichtimpedanz |
| 0x00E8 | Übergangswiderstand, Hochimpedanz |
| 0x00E9 | Signal nicht plausibel, Zündkreisüberwachung |
| 0x00EA | Übertemperaturabschaltung oder Signalabfall |
| 0x00EB | Parityfehler |
| 0x00EC | elektrischer Fehler (Wackelkontakt) oder Sensor locker |
| 0x00ED | Motor mechanisch zu laut oder Sensor außerhalb Toleranz (Empfindlichkeit) |
| 0x00EE | Motor mechanisch zu laut oder Sensor außerhalb Toelranz (Empfindlichkeit) |
| 0x00EF | Testimpulsfehler |
| 0x00F0 | Nulltestfehler |
| 0x00F1 | SPI Kommunikation unplausibel |
| 0x00F2 | Kommunikationsverlust |
| 0x00F3 | Generatortyp unplausibel |
| 0x00F4 | EBSD-Fehler |
| 0x00F5 | SW-Fehler |
| 0x00F6 | BSD-Fehler |
| 0x00F7 | Strom, Temperatur |
| 0x00F8 | Strom |
| 0x00F9 | Spannung |
| 0x00FA | System |
| 0x00FB | Übertemperatur |
| 0x00FC | Fehler elektrisch |
| 0x00FD | Fehler mechanisch |
| 0x00FE | Temperaturmessung fehlerhaft |
| 0x00FF | Permittivitätsmessung fehlerhaft |
| 0x0100 | Niveaumessung fehlerhaft |
| 0x0101 | Kommunikationsfehler |
| 0x0102 | TMOT-Signalfehler aus High-Side-Check erkannt |
| 0x0103 | Motortemperaturschwelle für Lambdaregelungsfreigabe nicht erreicht |
| 0x0104 | Motortemperatursignal unplausibel ggü. Modell |
| 0x0105 | Motortemperatursignal im unteren Bereich nicht plausibel |
| 0x0106 | Kaltstart, Nebenschluss erkannt |
| 0x0107 | Signalfehler aus Highside-Check erkannt |
| 0x0108 | Kühleraustrittstemperatur unplausibel |
| 0x0109 | Thermostat fehlerhaft |
| 0x010A | unplausibel |
| 0x010B | Fehlfunktion |
| 0x010C | Maximalwert Öltemperatur überschritten |
| 0x010D | 1. Startwert im Flash zerstört. 2- aus 3-Auswahl fehlgeschlagen oder 2. Fehlerrückmeldung: Startwertprogrammierroutine |
| 0x010E | Kein Startwert programmiert |
| 0x010F | Falsche EWS-Telegramme empfangen. Die Fangbereichsrechnung ist für mindestens 5 Telegrammauswertungen fehlgeschlagen. |
| 0x0110 | Fehler beim Programmieren oder Rücksetzen des Startwertes. |
| 0x0111 | Empfangsfehler des EWS-Telegramms (Start-, Stopbit- oder Framefehler) |
| 0x0112 | Mehr als 3 Parity-Fehler erkannt |
| 0x0113 | Timeoutfehler: 10 Sekunden nach Kl. 15 EIN noch kein EWS-Telegramm empfangen, evtl. Leitungsunterbrechung oder Kurzschluss nach Minus) |
| 0x0114 | Lesen der Wechselcodeablage in EEPROM-Spiegel war fehlerhaft |
| 0x0115 | Fehler Ablage (z.B. Powerfail) |
| 0x0116 | Schreiben auf die Wechselcodeablage im EEPROM fehlerhaft |
| 0x0117 | CAN Botschaften fehlerhaft |
| 0x0118 | keine Signaländerungen |
| 0x0119 | Mindestgeschwindigkeit unter Last nicht erreicht |
| 0x011A | Mindestgeschwindigkeit im Schub nicht erreicht |
| 0x011B | Geschwindigkeit unplausibel |
| 0x011C | Kombi hat ein Ungültigkeitssignal gesendet |
| 0x011D | Geschwindigkeitssignal vom Kombi und ASC nicht kompatibel |
| 0x011E | Start in laufenden Motor |
| 0x011F | Signalfehler Startautomatik |
| 0x0120 | Prüfresultat unplausibel |
| 0x0121 | Signal inaktiv |
| 0x0122 | Max-Fehler Umgebungsdrucksensor |
| 0x0123 | Umgebungsdrucksensor unplausibel |
| 0x0124 | Min-Fehler Umgebungsdrucksensor |
| 0x0125 | Kontinuitätsfehler |
| 0x0126 | Vergleich aktueller/letzter Fahrzyklus unplausibel |
| 0x0127 | unplausibler Öldruckschalter |
| 0x0128 | Spannungsschwellwert überschritten |
| 0x0129 | Spannungsschwellwert unterschritten |
| 0x012A | Stromversorgung instabil |
| 0x012B | ADC-Fehler, HW-Fehler |
| 0x012C | Umgebungstemperatur unplausibel |
| 0x012D | Ölverlust |
| 0x012E | Signal unplausibel |
| 0x012F | DME noch nicht codiert |
| 0x0130 | CAN-Baustein im Zustand Passiv |
| 0x0131 | CAN-Baustein Bus Off oder CAN-Bus defekt |
| 0x0132 | Timeout CAN-Kommunikation |
| 0x0133 | Prüfsumme ungleich errechnetem Wert |
| 0x0134 | Alive oder Checksummenfehler |
| 0x0135 | Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizerfehler |
| 0x0136 | erweiterte Kommunikation gestört |
| 0x0137 | IBS Softwareversion nicht kompatibel |
| 0x0138 | Strommessung fehlerhaft |
| 0x0139 | Spannungsmessung fehlerhaft |
| 0x013A | KL15 Masseschluss (Pegel Wakeupleitung) |
| 0x013B | Kl 15 Wakeupleitung (Pegel unplausibel) |
| 0x013C | Systemfehler |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | MEAS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TE_W | 8312F1224000 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| FR_W | 8312F1224000 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0000305 | 0 | 0 | 0 | - |
| FR2_W | 8312F1224000 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0000305 | 0 | 0 | 0 | - |
| VFZG | 8312F1224000 | 0 | 0 | 0x00 | 9 | 2 | -- | 1.25 | 0 | 0 | 0 | km/h |
| NMOT_W | 8312F1224000 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| NSOL | 8312F1224000 | 0 | 0 | 0x00 | 12 | 2 | -- | 10 | 0 | 0 | 0 | min-1 |
| WNWKWE_W | 8312F1224000 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.1 | 0 | 0 | 0 | GradKW |
| WNWKWA_W | 8312F1224000 | 0 | 0 | 0x00 | 15 | 5 | -- | 0.1 | 0 | 0 | 0 | GradKW |
| TANS | 8312F1224000 | 0 | 0 | 0x00 | 17 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| TMOT | 8312F1224000 | 0 | 0 | 0x00 | 18 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| ZWOUT | 8312F1224000 | 0 | 0 | 0x00 | 19 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad |
| WDKBA | 8312F1224000 | 0 | 0 | 0x00 | 20 | 2 | -- | 0.392156 | 0 | 0 | 0 | % DK |
| MSHFM_W | 8312F1224000 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| MIIST_W | 8312F1224000 | 0 | 0 | 0x00 | 23 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| UB | 8312F1224000 | 0 | 0 | 0x00 | 25 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UPWG_W | 8312F1224000 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| TKA | 8312F1224000 | 0 | 0 | 0x00 | 28 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| RKRN_W_0 | 8312F1224000 | 0 | 0 | 0x00 | 29 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_1 | 8312F1224000 | 0 | 0 | 0x00 | 31 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_2 | 8312F1224000 | 0 | 0 | 0x00 | 33 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_3 | 8312F1224000 | 0 | 0 | 0x00 | 35 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_4 | 8312F1224000 | 0 | 0 | 0x00 | 37 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_5 | 8312F1224000 | 0 | 0 | 0x00 | 39 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_6 | 8312F1224000 | 0 | 0 | 0x00 | 41 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_7 | 8312F1224000 | 0 | 0 | 0x00 | 43 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| DFMONITOR | 8312F1224001 | 0 | 0 | 0x00 | 3 | 2 | -- | 0,390625 | 0 | 0 | 0 | % |
| LUTSFI1 | 8312F1224003 | 0 | 0 | 0x00 | 3 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI2 | 8312F1224003 | 0 | 0 | 0x00 | 5 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI3 | 8312F1224003 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI4 | 8312F1224003 | 0 | 0 | 0x00 | 9 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI5 | 8312F1224003 | 0 | 0 | 0x00 | 11 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI6 | 8312F1224003 | 0 | 0 | 0x00 | 13 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI7 | 8312F1224003 | 0 | 0 | 0x00 | 15 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI8 | 8312F1224003 | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| UULSUV | 8312F1224003 | 0 | 0 | 0x00 | 20 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UULSUV2 | 8312F1224003 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| MSNDKO | 8312F1224008 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| FKMSDKA | 8312F1224008 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.00006103 | 0 | 0 | 0 | - |
| FKMSDK | 8312F1224008 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00006103 | 0 | 0 | 0 | - |
| RKAT | 8312F1224004 | 0 | 0 | 0x00 | 3 | 7 | -- | 0.04687 | 0 | 0 | 0 | % |
| RKAT2 | 8312F1224004 | 0 | 0 | 0x00 | 5 | 7 | -- | 0.04687 | 0 | 0 | 0 | % |
| FRA | 8312F1224004 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00003052 | 0 | 0 | 0 | - |
| FRA2 | 8312F1224004 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.00003052 | 0 | 0 | 0 | - |
| TEDUB | 8312F1224004 | 0 | 0 | 0x00 | 11 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| TEDUB2 | 8312F1224004 | 0 | 0 | 0x00 | 12 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| DYNLSU | 8312F1224004 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.00024 | 0 | 0 | 0 | - |
| DYNLSU2 | 8312F1224004 | 0 | 0 | 0x00 | 15 | 5 | -- | 0.00024 | 0 | 0 | 0 | - |
| LAMSONI | 8312F1224004 | 0 | 0 | 0x00 | 17 | 5 | -- | 0.00024 | 0 | 0 | 0 | - |
| LAMSONI2 | 8312F1224004 | 0 | 0 | 0x00 | 19 | 5 | -- | 0.00024 | 0 | 0 | 0 | - |
| TATEIST | 8312F1224005 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VSASPRI | 8312F1224005 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSASPRI2 | 8312F1224005 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI | 8312F1224005 | 0 | 0 | 0x00 | 8 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI2 | 8312F1224005 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSATV | 8312F1224005 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSATV2 | 8312F1224005 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV | 8312F1224005 | 0 | 0 | 0x00 | 16 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV2 | 8312F1224005 | 0 | 0 | 0x00 | 18 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| TAML | 8312F1224005 | 0 | 0 | 0x00 | 20 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VSAADP | 8312F1224006 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSAADP2 | 8312F1224006 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSEADP | 8312F1224006 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSEADP2 | 8312F1224006 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSAADPFL0 | 8312F1224006 | 0 | 0 | 0x00 | 11 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADPFL1 | 8312F1224006 | 0 | 0 | 0x00 | 12 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADPFL2 | 8312F1224006 | 0 | 0 | 0x00 | 13 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADPFL3 | 8312F1224006 | 0 | 0 | 0x00 | 14 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL0 | 8312F1224006 | 0 | 0 | 0x00 | 15 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL1 | 8312F1224006 | 0 | 0 | 0x00 | 16 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL2 | 8312F1224006 | 0 | 0 | 0x00 | 17 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL3 | 8312F1224006 | 0 | 0 | 0x00 | 18 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL0 | 8312F1224006 | 0 | 0 | 0x00 | 19 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL1 | 8312F1224006 | 0 | 0 | 0x00 | 20 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL2 | 8312F1224006 | 0 | 0 | 0x00 | 21 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL3 | 8312F1224006 | 0 | 0 | 0x00 | 22 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL0 | 8312F1224006 | 0 | 0 | 0x00 | 23 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL1 | 8312F1224006 | 0 | 0 | 0x00 | 24 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL2 | 8312F1224006 | 0 | 0 | 0x00 | 25 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL3 | 8312F1224006 | 0 | 0 | 0x00 | 26 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| KVA_KORR | 8212F121C1 | 0 | 0 | 0x00 | 2 | 3 | -- | 0.001 | 0 | 0 | 0 | % |
| DNLLMV | 8312F130A101 | 0 | 0 | 0x00 | 6 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNSACMV | 8312F130A101 | 0 | 0 | 0x00 | 7 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNSLBV | 8312F130A101 | 0 | 0 | 0x00 | 8 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNFSACMV | 8312F130A101 | 0 | 0 | 0x00 | 9 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNFSMV | 8312F130A101 | 0 | 0 | 0x00 | 10 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| VVTSW | 8312F122400B | 0 | 0 | 0x00 | 3 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW | 8312F122400B | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV | 8312F122400B | 0 | 0 | 0x00 | 7 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VVTES | 8312F122400B | 0 | 0 | 0x00 | 8 | 2 | -- | 0.5 | -63.5 | 0 | 0 |   |
| VVTSW2 | 8312F122400B | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW2 | 8312F122400B | 0 | 0 | 0x00 | 11 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV2 | 8312F122400B | 0 | 0 | 0x00 | 13 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VVTES2 | 8312F122400B | 0 | 0 | 0x00 | 14 | 2 | -- | 0.5 | -63.5 | 0 | 0 | - |
| MINHUBVSI | 8312F122400B | 0 | 0 | 0x00 | 17 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| DELTAGVFI | 8312F122400B | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0019532 | 0 | 0 | 0 | - |
| FLUB1 | 8312F122400B | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0002441 | 0 | 0 | 0 | - |
| FLUB2 | 8312F122400B | 0 | 0 | 0x00 | 23 | 7 | -- | 0.0002441 | 0 | 0 | 0 | - |
| MINHUBROH | 8312F122400B | 0 | 0 | 0x00 | 27 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| TSG | 8312F122400C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVAD | 8312F122400C | 0 | 0 | 0x00 | 5 | 7 | -- | 0.00305175 | 0 | 0 | 0 | % |
| DPS | 8312F122400C | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0390625 | 0 | 0 | 0 | hPa |
| DPSRAUS | 8312F122400C | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0390625 | -1280 | 0 | 0 | hPa |
| FKMSVVT | 8312F122400C | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00006104 | 0 | 0 | 0 | - |
| FPRSTEP | 8312F122400C | 0 | 0 | 0x00 | 13 | 2 | -- | 1 | 0 | 0 | 0 | - |
| LRNSTEP | 8312F122400C | 0 | 0 | 0x00 | 14 | 2 | -- | 1 | 0 | 0 | 0 | - |
| MSNVVTO | 8312F122400C | 0 | 0 | 0x00 | 15 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| NNW10 | 8312F122400C | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW11 | 8312F122400C | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW12 | 8312F122400C | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW20 | 8312F122400C | 0 | 0 | 0x00 | 23 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW21 | 8312F122400C | 0 | 0 | 0x00 | 25 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW22 | 8312F122400C | 0 | 0 | 0x00 | 27 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NSOLFASTA | 8312F122400D | 0 | 0 | 0x00 | 3 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| RL | 8312F122400D | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| RLSOL | 8312F122400D | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| TE | 8312F122400D | 0 | 0 | 0x00 | 9 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| TE2 | 8312F122400D | 0 | 0 | 0x00 | 11 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| VVTSTATUS | 8312F122400D | 0 | 0 | 0x00 | 13 | 5 | -- | 1 | 0 | 0 | 0 | - |
| WDKBAFASTA | 8312F122400D | 0 | 0 | 0x00 | 15 | 5 | -- | 0.02441406 | 0 | 0 | 0 | %DK |
| WDKS | 8312F122400D | 0 | 0 | 0x00 | 17 | 5 | -- | 0.00152588 | 0 | 0 | 0 | % |
| WPED | 8312F122400D | 0 | 0 | 0x00 | 19 | 5 | -- | 0.0015259 | 0 | 0 | 0 | %PED |
| ZWIST | 8312F122400D | 0 | 0 | 0x00 | 21 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DMLLRI | 8312F122400D | 0 | 0 | 0x00 | 23 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| MIMIN | 8312F122400D | 0 | 0 | 0x00 | 25 | 5 | -- | 0.00152588 | 0 | 0 | 0 | % |
| MDGEN | 8312F122400E | 0 | 0 | 0x00 | 3 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| MDKO | 8312F122400E | 0 | 0 | 0x00 | 4 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| DMRLLR | 8312F122400E | 0 | 0 | 0x00 | 5 | 5 | -- | 0.097647 | 0 | 0 | 0 | % |
| MDWAN | 8312F122400E | 0 | 0 | 0x00 | 8 | 5 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DWKR | 8312F122400E | 0 | 0 | 0x00 | 10 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DZWS | 8312F122400E | 0 | 0 | 0x00 | 11 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DFFGEN | 8312F122400E | 0 | 0 | 0x00 | 12 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| TUMG | 8312F122400E | 0 | 0 | 0x00 | 13 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVADFS | 8312F122400E | 0 | 0 | 0x00 | 14 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DMVADKO | 8312F122400E | 0 | 0 | 0x00 | 16 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DLAHI | 8312F122400E | 0 | 0 | 0x00 | 18 | 7 | -- | 0.000030518 | 0 | 0 | 0 | - |
| DLAHI2 | 8312F122400E | 0 | 0 | 0x00 | 20 | 7 | -- | 0.000030518 | 0 | 0 | 0 | - |
| RINH | 8312F122400E | 0 | 0 | 0x00 | 22 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RINH2 | 8312F122400E | 0 | 0 | 0x00 | 24 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RKATS | 8312F122400E | 0 | 0 | 0x00 | 26 | 7 | -- | 0.0468749 | 0 | 0 | 0 | % |
| DPSSOL | 8312F122400E | 0 | 0 | 0x00 | 28 | 7 | -- | 0.0390625 | 0 | 0 | 0 | hPa |
| CO_POT | 8312F122400F | 0 | 0 | 0x00 | 5 | 7 | -- | 1 | 0 | 0 | 0 | - |
| UPWG | 8312F122400F | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| MINHUB | 8312F122400F | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| GVIST | 8312F122400F | 0 | 0 | 0x00 | 12 | 7 | -- | 0.001953125 | 0 | 0 | 0 | - |
| FTBR | 8312F122400F | 0 | 0 | 0x00 | 14 | 5 | -- | 0.00003052 | 0 | 0 | 0 | - |
| FHO | 8312F122400F | 0 | 0 | 0x00 | 16 | 5 | -- | 0.00006104 | 0 | 0 | 0 | - |
| FTVDK | 8312F122400F | 0 | 0 | 0x00 | 18 | 2 | -- | 0.0078125 | 0 | 0 | 0 | - |
| MSNVVTOLL | 8312F122400F | 0 | 0 | 0x00 | 20 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| VSESPRS | 8312F122400F | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSE2SPRS | 8312F122400F | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSASPRS | 8312F122400F | 0 | 0 | 0x00 | 29 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSA2SPRS | 8312F122400F | 0 | 0 | 0x00 | 30 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| EVHUBI | 8312F1224010 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBI2 | 8312F1224010 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBS | 8312F1224010 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| OFWNKADBG | 8312F1224010 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| DFSERESZ | 8312F1224010 | 0 | 0 | 0x00 | 16 | 5 | -- | 1 | 0 | 0 | 0 | - |
| DMVADFK | 8312F1224010 | 0 | 0 | 0x00 | 18 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| DMVADLL | 8312F1224010 | 0 | 0 | 0x00 | 20 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| EXWINKI | 8312F1224010 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKI2 | 8312F1224010 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKS | 8312F1224010 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| FKMSVVTA | 8312F1224011 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00006104 | 0 | 0 | 0 | - |
| FOFRESZ | 8312F1224011 | 0 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0 | 0 | - |
| MSDIF | 8312F1224011 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| TABGM | 8312F1224011 | 0 | 0 | 0x00 | 9 | 2 | -- | 5 | -50 | 0 | 0 | Grad C |
| TNSE | 8312F1224011 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | s |
| OZRWPERM | 8312F1224011 | 0 | 0 | 0x00 | 12 | 7 | -- | 10 | 0 | 0 | 0 | - |
| OZRWKVB | 8312F1224011 | 0 | 0 | 0x00 | 14 | 7 | -- | 10 | 0 | 0 | 0 | - |
| OZPERMLOW | 8312F1224011 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.00009155 | 0 | 0 | 0 | - |
| OZPERMEX | 8312F1224011 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.00009155 | 0 | 0 | 0 | - |
| OZPERMOFF | 8312F1224011 | 0 | 0 | 0x00 | 28 | 7 | -- | 0.0001831 | 0 | 0 | 0 | - |
| OZKVBOG | 8312F1224011 | 0 | 0 | 0x00 | 30 | 7 | -- | 0.01831082 | 0 | 0 | 0 | - |
| OZPERMBOG | 8312F1224011 | 0 | 0 | 0x00 | 32 | 7 | -- | 0.000030517585 | 0 | 0 | 0 | - |
| OZOELKM | 8312F1224011 | 0 | 0 | 0x00 | 34 | 7 | -- | 10 | 0 | 0 | 0 | km |
| NADMTLL | 8312F1224012 | 0 | 0 | 0x00 | 3 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NTGLM | 8312F1224012 | 0 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NTKLM | 8312F1224012 | 0 | 0 | 0x00 | 7 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NDIPFRO | 8312F1224012 | 0 | 0 | 0x00 | 9 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NKFL | 8312F1224012 | 0 | 0 | 0x00 | 11 | 2 | -- | 1 | 0 | 0 | 0 | - |
| SSLLCNT | 8312F1224012 | 0 | 0 | 0x00 | 12 | 2 | -- | 1 | 0 | 0 | 0 | - |
| MINHUBFAK | 8312F1224012 | 0 | 0 | 0x00 | 15 | 2 | -- | 0.00784314 | 0 | 0 | 0 | - |
| MINADRDY | 8312F1224012 | 0 | 0 | 0x00 | 16 | 2 | -- | 1 | 0 | 0 | 0 | - |
| FDLUBBGL | 8312F1224012 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.00024414 | 0 | 0 | 0 | - |
| OFWNKBG1 | 8312F1224012 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OFWNKBG2 | 8312F1224012 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OFWNKMX | 8312F1224012 | 0 | 0 | 0x00 | 28 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| WTSG | 8312F1304101 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| USHK2 | 8312F1304501 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UPWG1 | 8312F1304601 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UPWG2 | 8312F1304701 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK | 8312F1304801 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| WUB | 8312F1304A01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UDKP2 | 8312F1304C01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001221 | 0 | 0 | 0 | V |
| UDKP1V | 8312F1304D01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UDKP1 | 8312F1304E01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001221 | 0 | 0 | 0 | V |
| UHFM | 8312F1304F01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00977 | 0 | 0 | 0 | V |
| WTMOT | 8312F1305001 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| WTANS | 8312F1305101 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| WTKA | 8312F1305201 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSV | 8312F1305C01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSV2 | 8312F1305D01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSH | 8312F1305E01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSH2 | 8312F1305F01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| DISA | 8312F1306D01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UDDSS | 8312F1306F01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UDSU | 8312F1307001 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UUPTES | 8312F1307401 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| MINHUB_W | 8312F130A301 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| OFWTSTBER | 8312F130A401 | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| OFWNKTEST | 8312F130A401 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OSCDKTF | 8212F1211C | 0 | 0 | 0x00 | 4 | 5 | -- | 0.00024414 | 0 | 0 | 0 | - |
| OSCDKTF2 | 8212F1211C | 0 | 0 | 0x00 | 6 | 5 | -- | 0.00024414 | 0 | 0 | 0 | - |
| UBATT | 8312F122402B | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00025 | 6 | 0 | 0 | V |
| IBATT | 8312F122402B | 0 | 0 | 0x00 | 3 | 5 | -- | 0.08 | -200 | 0 | 0 | A |
| TBATT | 8312F122402B | 0 | 0 | 0x00 | 3 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| GENMANUFAK | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| GENTYPKENN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| BSDGENREGV | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| DFFGEN1 | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| UGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 10.6 | 0 | 0 | V |
| UFGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 10.6 | 0 | 0 | V |
| TLRGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 0 | 0 | 0 | s |
| TLRFGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 0 | 0 | 0 | s |
| MDGENVF | 8312F122402C | 0 | 0 | 0x00 | 3 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| STIGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | A |
| IERR | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.125 | 0 | 0 | 0 | A |
| IERRGRENZ | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.125 | 0 | 0 | 0 | A |
| IERRFGRENZ | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.125 | 0 | 0 | 0 | A |
| TCHIP | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | -40 | 0 | 0 | Grad C |
| FAKIHA | 8312F1224025 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.01 | 0 | 0 | 0 | - |
| OZNIVKRZT | 8312F1224000 | 0 | 0 | 0x00 | 45 | 2 | -- | 0.29296875 | 0 | 0 | 0 | mm |
| OZNIVLANGT | 8312F1224000 | 0 | 0 | 0x00 | 46 | 2 | -- | 0.29296875 | 0 | 0 | 0 | mm |
| OZNIV | 8312F1300E01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.29296875 | 0 | 0 | 0 | mm |
| OZTEMP | 8312F1300E01 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.1 | 0 | 0 | 0 | Grad C |
| OZPERM | 8312F1300E01 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.000091553 | 0 | 0 | 0 | - |
| EISYDKFKAF | 8312F1224008 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.007813 | 0 | 0 | 0 | - |
| EISYDKKOFF | 8312F1224008 | 0 | 0 | 0x00 | 4 | 3 | -- | 8 | 0 | 0 | 0 | kg/h |
| EISYEVFKAF | 8312F1224008 | 0 | 0 | 0x00 | 5 | 2 | -- | 0.007813 | 0 | 0 | 0 | - |
| EISYEVKOFF | 8312F1224008 | 0 | 0 | 0x00 | 6 | 3 | -- | 8 | 0 | 0 | 0 | kg/h |
| AMO_05 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00024414062 | 0 | 0 | 0 | - |
| AMO_10 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00024414062 | 0 | 0 | 0 | - |
| AMO_15 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00024414062 | 0 | 0 | 0 | - |
| AMO_20 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00024414062 | 0 | 0 | 0 | - |
| EXWINKKOR | 8312F122402D | 0 | 0 | 0x00 | 0 | 7 | -- | 0.021972656 | 0 | 0 | 0 | Grad |
| MNHUB | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| F_MNHUB | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00001525879 | 0 | 0 | 0 | - |
| MNHUB_ROH | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| MNHUBVS | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| MNHUBVS_IST | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| MNHUBVSNV | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| F_TIKORRVR | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00003051758 | 0 | 0 | 0 | mm |
| LURABS_F | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.1 | 0 | 0 | 0 | mm |
| LURDIF_F | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.1 | 0 | 0 | 0 | mm |
| ZW_OFFKORRVR | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| ENDE |  |  |  |  | 1 | 1 | -- | 1 | 0 | 0 | 0 | - |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_FOFR1 | 19 | 0x01 | 0x01 |
| B_HUBEINGR_INAKT | 3 | 0x08 | 0x08 |
| B_MINHUBEINGR_INAKT | 3 | 0x04 | 0x04 |
| B_ZWEINGR_INAKT | 3 | 0x02 | 0x02 |
| B_GEMISCHEINGR_INAKT | 3 | 0x01 | 0x01 |
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
| B_FE | 28 | 0x01 | 0x01 |
| B_SSLL | 13 | 0x01 | 0x01 |
| B_TDAON | 14 | 0x01 | 0x01 |
| B_BGLRDY | 23 | 0x01 | 0x01 |
| B_KL15 | 3 | 0x01 | 0x01 |
| B_ESTART | 3 | 0x02 | 0x02 |
| B_KUPPL | 3 | 0x04 | 0x04 |
| B_BL | 3 | 0x08 | 0x08 |
| B_BR | 3 | 0x10 | 0x10 |
| B_KO | 3 | 0x80 | 0x80 |
| B_LL | 3 | 0x01 | 0x01 |
| B_VL | 3 | 0x02 | 0x02 |
| B_SBBHK2 | 3 | 0x04 | 0x04 |
| B_SBBHK | 3 | 0x08 | 0x08 |
| B_SBBVK2 | 3 | 0x10 | 0x10 |
| B_SBBVK | 3 | 0x20 | 0x20 |
| B_LR2 | 3 | 0x40 | 0x40 |
| B_LR | 3 | 0x80 | 0x80 |
| B_PEDSPORT | 4 | 0X02 | 0X02 |
| B_KD | 4 | 0x04 | 0x04 |
| B_PN | 4 | 0x08 | 0x08 |
| B_ECULOCK | 4 | 0x10 | 0x10 |
| B_TEHB | 4 | 0x20 | 0x20 |
| B_SA | 4 | 0x40 | 0x40 |
| B_LRNRDY | 4 | 0x80 | 0x80 |
| B_KOE | 21 | 0x08 | 0x08 |
| B_HSVE2 | 21 | 0x10 | 0x10 |
| B_HSVE | 21 | 0x20 | 0x20 |
| B_HSHE2 | 21 | 0x40 | 0x40 |
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
| B_DISA_GESCH_GL_VAR_NEU | 3 | 0x01 | 0x01 |
|  | 3 | 0x02 | 0x02 |
| B_DISA_GEREG_LAGEM_VAR_NEU | 3 | 0x04 | 0x04 |
| B_ANSKL_GL_VAR_NEU | 3 | 0x08 | 0x08 |
|  | 3 | 0x10 | 0x10 |
|  | 3 | 0x20 | 0x20 |
|  | 3 | 0x40 | 0x40 |
| B_AGR_VAR_NEU | 3 | 0x80 | 0x80 |
| B_ABGK_MONO_GL_VAR_NEU | 4 | 0x01 | 0x01 |
| B_ABGK_Y_GL_VAR_NEU | 4 | 0x02 | 0x02 |
| B_ABGK_STER_GL_VAR_NEU | 4 | 0x04 | 0x04 |
| B_NOKATFZ_VAR_NEU | 4 | 0x08 | 0x08 |
| B_LIN_LSVK_GL_VAR_NEU | 4 | 0x10 | 0x10 |
| B_ZWP_LSVK_GL_VAR_NEU | 4 | 0x20 | 0x20 |
| B_AKRFZ_VAR_NEU | 5 | 0x01 | 0x01 |
| B_SOUNDKL_VAR_NEU | 5 | 0x02 | 0x02 |
| B_GLFVAR_VAR_NEU | 5 | 0x04 | 0x04 |
| B_ELUE400_GL_VAR_NEU | 5 | 0x08 | 0x08 |
| B_ELUE600_GL_VAR_NEU | 5 | 0x10 | 0x10 |
| B_EBLVAR_VAR_NEU | 5 | 0x20 | 0x20 |
| B_MFL_VAR_NEU | 5 | 0x40 | 0x40 |
| B_SPTVAR_VAR_NEU | 5 | 0x80 | 0x80 |
| B_STRVAR_VAR_NEU | 6 | 0x01 | 0x01 |
| B_TOENSVAR_VAR_NEU | 6 | 0x02 | 0x02 |
|  | 6 | 0x04 | 0x04 |
|  | 6 | 0x08 | 0x08 |
| B_HS_GL_VAR_NEU | 6 | 0x10 | 0x10 |
| B_SSG_GL_VAR_NEU | 6 | 0x20 | 0x20 |
| B_EGS_GL_VAR_NEU | 6 | 0x40 | 0x40 |
| B_TXUGET_VAR_NEU | 6 | 0x80 | 0x80 |
| B_ASCPKW_VAR_NEU | 7 | 0x01 | 0x01 |
| B_ACC_VAR_NEU | 7 | 0x02 | 0x02 |
|  | 7 | 0x04 | 0x04 |
| B_ARSVAR_VAR_NEU | 7 | 0x08 | 0x08 |
|  | 7 | 0x20 | 0x20 |
| B_AFSVAR_VAR_NEU | 7 | 0x40 | 0x40 |
| B_KOVAR_VAR_NEU | 7 | 0x80 | 0x80 |
|  | 8 | 0x01 | 0x01 |
|  | 8 | 0x02 | 0x02 |
|  | 8 | 0x04 | 0x04 |
|  | 8 | 0x08 | 0x08 |
|  | 8 | 0x10 | 0x10 |
|  | 8 | 0x20 | 0x20 |
|  | 8 | 0x40 | 0x40 |
| B_IBSDETEC_VAR_NEU | 8 | 0x80 | 0x80 |
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
| B_GAD | 2 | 0x01 | 0x01 |
| Z_LSH | 2 | 0x02 | 0x02 |
| Z_LSH2 | 2 | 0x02 | 0x02 |
| B_NMOT | 15 | 0x01 | 0x01 |
| B_MINHUBVS | 16 | 0x01 | 0x01 |
| B_FBGL | 25 | 0x01 | 0x01 |
| B_BGL | 26 | 0x01 | 0x01 |

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
| 0x00 | ME9.2 bereit, Startwert zu empfangen |
| 0x01 | kein freier Startwert mit Freigabe vorhanden |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel (wie im DS2-LH definiert) |
| 0xXY | Fehlerhafter Status |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwertprogrammierung bzw. -ruecksetzen war erfolgreich |
| 0x01 | falscher Startwert beim Ruecksetzen (EWS u. DME passen ni. zusammen)  |
| 0x02 | Telegramminhalt war kein Startwert (event. Wechselcode) |
| 0x03 | Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout) |
| 0x04 | Prozess laeuft |
| 0x05 | Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt |
| 0x06 | gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung |
| 0x07 | noch kein Startwert programmiert |
| 0x10 | Startwert nicht korrekt in Flash programmiert |
| 0x11 | Wechselcode nicht korrekt in EEPROM-Spiegel programmiert |
| 0x12 | Zufallszahl nicht korrekt in EEPROM-Spiegel programmiert |
| 0x20 | Fehler bei Startwertprogrammierroutine |
| 0x21 | 2-aus-3-Startwertablage im Flash nicht in Ordnung |
| 0x22 | Ablage im EEPROM-Spiegel nicht in Ordnung |
| 0xXY | Fehlerhafter Status |

### REGEL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | Regelung EIN |
| 0x04 | Regelung AUS wegen Fahrbedingung |
| 0x08 | Regelung AUS wegen erkanntem Fehler |
| 0x10 | Regelung EIN mit Einschraenkung |
| 0xXY | ?? |

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
| 0x00 | LSU Dynamikprüfung wegen Umweltbedingung nicht aktiv |
| 0x01 | LSU Prüfung aktiv |
| 0xXY | LSU Prüfung abgeschlossen  |

### LSUSTATUS_NEU

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest noch nicht gestartet wegen fehlender Bedingung oder Fehlereintrag |
| 0x01 | Systemtest für Bank 1 läuft, für Bank 2 noch nicht gestartet |
| 0x02 | Systemtest für Bank 2 läuft, für Bank 1 noch nicht gestartet |
| 0x03 | Systemtest läuft |
| 0x04 | Systemtest für Bank 1 abgeschlossen, für Bank 2 noch nicht gestartet |
| 0x05 | Systemtest für Bank 1 abgeschlossen, Fehler im System auf Bank 2 |
| 0x06 | Systemtest für Bank 2 abgeschlossen, für Bank 1 noch nicht gestartet |
| 0x07 | Systemtest für Bank 2 abgeschlossen, Fehler im System auf Bank 1 |
| 0x08 | Systemtest für Bank 1 abgeschlossen, für Bank 2 noch nicht abgeschlossen |
| 0x09 | Systemtest für Bank 2 abgeschlossen, für Bank 1 noch nicht abgeschlossen |
| 0x10 | Systemtest abgeschlossen |
| 0xFF | Status LSU-Diagnose kann nicht ausgegeben werden |

### DISASTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | nicht gelernt |
| 0x01 | Lernschritt 1 (Naehe Unterer mech. Anschlag) |
| 0x02 | Lernschritt 2 (Langsames Fahren gegen unteren mech. Anschlag) |
| 0x03 | Lernen erfolgreich beendet |
| 0x04 | Poti MIN- oder MAX-Fehler (Verlassen des Diagnosebereichs) |
| 0x05 | Lagereglerfehler |
| 0x06 | Temperaturwarnung |
| 0x07 | Uebertemperatur Antriebseinheit |
| 0xXY | Status DISA-Diagnose kann nicht ausgegeben werden |

### LAMBDASTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Steuerbetrieb, Startbedingungen noch nicht erfuellt |
| 0x01 | Regelbetrieb mit zwei Sonden |
| 0x02 | Steuerbetrieb durch Betriebsbedingungen |
| 0x04 | Steuerbetrieb nach Systemfehler |
| 0x08 | Regelung mit nur einer Sonde (vor Kat) |
| 0xXY | Status LSU-Diagnose kann nicht ausgegeben werden |

### BETRIEBSSTUNDENSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Betriebsstundenzaehler verstanden und akzeptiert (top_w < 10h) |
| 0x01 | Betriebsstundenzaehler verstanden aber nicht akzeptiert (top_w > 10h) |
| 0x02 | Betriebsstundenzaehler nicht verstanden und nicht akzeptiert |
| 0xXY | Betriebsstundenzaehler kann nicht ausgegeben werden |

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

### BOSKENNUNG

| NR | BOS_K | BOS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Oelqualitaet |
| 0x02 | Br_v | Bremsbelagverschleiss vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x05 | Batt | Batteriezustand |
| 0x06 | Br_h | Bremsbelagverschleiss hinten |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x20 | TUV | TUEV |
| 0x21 | AU | AU |

### STAT_RUHESTROM

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 keine Ruhestromverletzung, keine Standverbraucher aktiv |
| 0x01 | 1 Ruhestrom 80 bis 200mA aktiv, keine Standverbraucher aktiv |
| 0x02 | 2 Ruhestrom 200 bis 1000mA aktiv, keine Standverbraucher aktiv |
| 0x03 | 3 Ruhestrom über 1000mA aktiv, keine Standverbraucher aktiv |
| 0x04 | 4 keine Ruhestromverletzung, Standverbraucher Licht aktiv |
| 0x05 | 5 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Licht aktiv |
| 0x06 | 6 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Licht aktiv |
| 0x07 | 7 Ruhestrom über 1000mA aktiv, Standverbraucher Licht aktiv |
| 0x08 | 8 keine Ruhestromverletzung, Standverbraucher Standheizung aktiv |
| 0x09 | 9 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0A | 10 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0B | 11 Ruhestrom über 1000mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0C | 12 keine Ruhestromverletzung, Standverbraucher Sonstige aktiv |
| 0x0D | 13 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Sonstige aktiv |
| 0x0E | 14 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Sonstige aktiv |
| 0x0F | 15 Ruhestrom über 1000mA aktiv, Standverbraucher Sonstige aktiv |
| 0xFF | FF Status unbekannt |
