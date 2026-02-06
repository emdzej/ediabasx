# komb65_2.prg

## General

|  |  |
| --- | --- |
| File | komb65_2.prg |
| Type | PRG |
| Jobs | 121 |
| Tables | 35 |
| Origin | BMW TI-431 Dennert |
| Revision | 3.002 |
| Author | BMW TI-431 Lothar, SiemensVDO EI-42 Neudecker |
| ECU Comment | SGBD in KWP2000-format |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E65 |  |  |
| ORIGIN | string | BMW TI-431 Dennert |  |  |
| REVISION | string | 3.002 |  |  |
| AUTHOR | string | BMW TI-431 Lothar, SiemensVDO EI-42 Neudecker |  |  |
| COMMENT | string | SGBD in KWP2000-format |  |  |
| PACKAGE | string | 1.33 |  |  |
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

### MOST_VERSION_LESEN

Auslesen von Most Version KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $A0 MOSTVersion MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_MOST_3DB

Auslesen des Status der Lichtleistungsabsenkung KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_MOST_3DB

Lichtleistungsabsenkung einschalten KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch $00 S1 geoeffnet = 3dB Absenkung MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_WAKE_UP_STATUS

Auslesen des Status WakeupStatus KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_ABILITY_TO_WAKE

Auslesen des Status AbilityToWake KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_ABILITY_TO_WAKE

AbilityToWake einstellen KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD AbilityToWake $00 of, $01 on, $02 critical MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter AbilityToWake Modus table  AbilityToWake Status Defaultwert: DEFAULT 00 |

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

### C_FG_LESEN2

Fahrgestellnummer lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

_No arguments._

### SG_RESET_OHNE_UHR_DATUM

Steuergeraete Reset ausloesen Uhrzeit und Datum bleibt dabei im Kombi erhalten KWP2000: $31, $20

_No arguments._

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte  21+Anzahl Daten: ETX (0x03) |

### STEUERN_LEUCHTE

Kontrolleuchten einzeln ansteuern Fuer Service-und Testzwecke Es muessen immer sieben Argumente im Bereich von 0x00-0xFF uebergeben werden.  Im Kombi LH Teil 3.1 Kapitel "Diagnose" sind die Übergabeparameter des Diagnosebefehls $30 $07 ausführlich dokumentiert  KWP2000: $30 $07 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | kann beliebig verwendet werden |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |
| BYTE5 | int | kann beliebig verwendet werden |
| BYTE6 | int | kann beliebig verwendet werden |
| BYTE7 | int | kann beliebig verwendet werden |

### STEUERN_LEUCHTE_AUS

Wenn vorher der Job STEUERN_LEUCHTE aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_LEUCHTE_ENDE gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $23, $00

_No arguments._

### STEUERN_BLINKER

Blinker, zentrales Warnfeld, Ganganzeigenbeeleuchtung, Fernlicht ansteuern Fuer Service-und Testzwecke Es muessen immer alle zwei Argumente übergeben werden Nach Aufruf dieses Jobs muss der Vorgabemodus durch STEUERN_BLINKER_AUS beendet werden KWP2000: $30 $24  Beschreibung der Arumente: -------------------------- BYTE 0: High Nibble: 0 = beide Blinkkontrolleuchten aus 1 = Blinker links 2 = Blinker rechts 3 = Blinker rechts und links LOW Nibble:  1 = normales Blinken 2 = Blinker defekt (doppelte Blinkgeschwindigkeit) 3 = Doppelblinkimpuls Warnblinken Beispiel: BYTE 1= 0x12h bedeutet: Blinker links blinkt mit doppelter Geschwindigkeit  BYTE 1: 04h = Fernlicht ein 10h = zentr. Warnfeld rot ein 20h = zentr. Warnfeld gelb ein 40h = Beleuchtung Ganganzeigenfeld 80h = zentr. Warnfeld orange ein 00h = Fernlicht aus, zentr. Warnfeld aus, Beleuchtung Ganganzeigenfeld aus

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int |  |
| BYTE1 | int | kann beliebig verwendet werden |

### STEUERN_BLINKER_AUS

Wenn vorher der Job STEUERN_BLINKER aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_BLINKER_ENDE gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $24, $00

_No arguments._

### STEUERN_PPC_IO_SCHREIBEN

I/O Ports des MPC555 schreiben Fuer Service-und Testzwecke Es muessen immer alle drei Argumente im Bereich von 0x00-0xFF uebergeben werden. KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Angabe des Ports (0..F) |
| BYTE1 | int | Wert der in das Port geschrieben werden kann |

### STATUS_PPC_IO_LESEN

I/O Ports des MPC555 lesen Fuer Service-und Testzwecke  KWP2000: $30,$93,$01, $XX -> InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| PORT | int | Angabe des Ports (0..F) |

### STEUERN_PPC_IO_SCHREIBEN_AUS

Wenn vorher der Job ADC_SCHREIBEN aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_LEUCHTE_ENDE gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $23, $00

_No arguments._

### STEUERN_SELBSTTEST_EIN

Schaltet den Selbttest ein KWP2000: $30, $26, $06

_No arguments._

### STEUERN_SELBSTTEST_AUS

Schaltet den Selbsttest wieder aus KWP2000: $30, $23, $00

_No arguments._

### STEUERN_TESTBITMAP_ANZEIGEN

Anzeige des Testbitmaps im Kombi Zustand ist erst durch Sleep Modus beendet KWP2000: $30, $FD, $06

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Nummer des Testbitmaps anzeigen (0..0xFE) |

### STEUERN_TACHO

Tacho auf einen bel winkel zwischen 0..300 Grad setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Winkelvorgabe in Grad (0..300 Grad) |

### STEUERN_TACHO_AUS

Schaltet den Tacho-Vorgabemodus wieder aus KWP2000: $30, $20, $00

_No arguments._

### STEUERN_DREHZAHL

Tacho auf einen bel winkel zwischen 0..300 Grad setzen KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Winkelvorgabe: z.B. 180 Grad -> 180 * 17.77=0xC7E |

### STEUERN_DREHZAHL_AUS

Schaltet den Tacho-Vorgabemodus wieder aus KWP2000: $30, $20, $00

_No arguments._

### STATUS_TACHO_LESEN

gibt die Anzeigegeschwindigleit aus (Einheit km/h) KWP2000: $21, $05

_No arguments._

### STATUS_DREHZAHL_LESEN

gibt die Motordrehzahl aus (Einheit Umdrehungen/min) KWP2000: $21, $06

_No arguments._

### STATUS_LENKSTOCK_LESEN

gibt den Status des Lenkstockschalters aus KWP2000: $21, $07 

_No arguments._

### STATUS_CHECKCONTROL_LESEN

gibt die ID Nummern der momentan aktiven CC-Meldungen aus KWP2000: $21, $09 Es bedeudet Rückgabewert ANZAHL     = Anzahl der aktiven Meldungen CC_Nummern = CC-Meldungen als Datenarray (pro Zahl 2 Byte)

_No arguments._

### STATUS_DATE_LAST_CODING_SESSION

Datum, gibt an, wann das Kombi zum letzten mal codiert wurde (bei BMW) KWP2000: $21, $08

_No arguments._

### STATUS_TANKINHALT_LESEN

Literwerte der Tank Hebelgeber links und rechts, Summerwert ungedämpft und gedämpft KWP2000: $21, $0A

_No arguments._

### STATUS_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset auslesen KWP2000: $21, $0C

_No arguments._

### STEUERN_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset schreiben KWP2000: $3B, $0C

| Name | Type | Description |
| --- | --- | --- |
| STAT_KL30_H_OFFSET_WERT | long | ZAHLENWERT von KL30 Stundenzaehler Offset |

### STEUERN_KL30_H_COUNTER

Klemme 30 Stundenzaehler schreiben KWP2000: $3B, $0D

| Name | Type | Description |
| --- | --- | --- |
| STAT_KL30_H_WERT | long | ZAHLENWERT von KL30 Stundenzaehler |

### CALC_KL30_H_OFFSET

Klemme 30 Stundenzaehler Offset ab dem momentanen Datum berechnen Dieser Job wird nur in der BMW-Fertigung im Rahmen der Codierung aufgerufen

_No arguments._

### SET_KL30_OFFSET2AKT_DATE

Berechnet den Klemme 30 Stundenzaehler Offset ab dem momentanen Datum und schreibt diesen in das EEPROM des KOMBI BOS funtioniert nur richtig, wenn der KL30_H_OFFSET richtig gesetzt ist. Daher sollte der Job immer aufgerufen werden wenn das Fahrzeug an den Taster angeschlossen wird KWP2000: $3B, $0C

_No arguments._

### UHRZEIT_DATUM_STELLEN

Uhrzeit auf das aktuelle Datum stellen KWP2000: $3B, $0E

_No arguments._

### STATUS_KL30_H_ZAEHLER

Klemme 30 Stundenzaehler auslesen KWP2000: $21, $0D

_No arguments._

### STATUS_BETRIEBSDATEN_LESEN

liest ausgewählte Daten aus CBS Betriebsdaten aus KWP2000 $21 $B1 bis $BE

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | CBS ID 1..30h |

### STATUS_BETRIEBSDATEN_HEADER

gibt den KM Stand aus CBS Betriebsdaten Header aus KWP2000 $21 $B0

_No arguments._

### STATUS_ZEITSTRAHL

gibt BOS Daten für den Annahmerechner in der Reihenfolge Header BOS Umpfänge, CC Umpfänge KWP2000 $21 $C0 Für die exakte Beschreiung der BOS Zeitstrahldaten siehe LH Teil 3 Kapitel Diagnose, Beschreibung zu $21

_No arguments._

### STEUERN_PPC_ADC_SCHREIBEN

AD Kanaele des MPC555 schreiben Fuer Service-und Testzwecke  Es muessen immer alle Argumente im Bereich von 0x00-0xFF uebergeben werden.  Eine exakte Dokumentation der möglichen Argumente kann LH Kombi E65 Teil 3.1 Kapittel "Diagnose" unter Befehl $30 "Lesen/Schreiben der AD Kanäle des MPC555" entnommen werden  KWP2000: $30 $91 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| KANAL | int | Angabe des ADC Ports (0..E) |
| MSB | int | MSB-Wert der in den KANAL geschrieben werden kann |
| LSB | int | LSB-Wert der in den KANAL geschrieben werden kann |

### STATUS_PPC_ADC_LESEN

AD Kanaele des MPC555 auslesen Fuer Service-und Testzwecke  Dieser Service liefert die Rohwerte am ADC Converter Die Inkremente gehen dabei von 0 bis 1023 (dies entspricht 0..5V die am ADC anliegen)  KWP2000: $30,$91 -> InputOutputControlByLocalIdentifier

_No arguments._

### STATUS_WASCHWASSER

AD Kanal mit Schalterfunktion des MPC555 lesen (Waschwasser) Fuer Service-und Testzwecke KWP2000: $30,$94,$01, $0D -> InputOutputControlByLocalIdentifier

_No arguments._

### STATUS_KUEHLMITTELSTAND

AD Kanal mit Schalterfunktion des MPC555 lesen (Kueehlmittelstand) Fuer Service-und Testzwecke KWP2000: $30,$94,$01, $03 -> InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_PPC_ADC_SCHREIBEN_AUS

Wenn vorher der Job ADC_SCHREIBEN aufgerufen wurde wird die Ansteuerung der KL durch Diagnose vorgegeben STEUERN_LEUCHTE_ENDE gibt die Kontrolle wieder an das Kombi zurueck KWP2000: $30, $91, $00

_No arguments._

### GWSZ_RESET

GWSZ Korrektur-Offset aendern 

_No arguments._

### STATUS_ANGEZEIGTER_GWSZ

liefert den angezeigten GWSZ 

_No arguments._

### STATUS_ABSOLUTER_GWSZ

liefert den absoluten GWSZ 

_No arguments._

### STEUERN_BOS_CODIERUNG

BOS Codierung für alle einzelnen BOS Grössen 

| Name | Type | Description |
| --- | --- | --- |
| BOS_ID | int | BOS ID 1..30h |
| BOS_CODIERUNG | int | Codierung passend zu BOS_ID, 0=Anzeige, 1=Sperre, 2=Erprobung |

### CODIERDATEN_LESEN

GWSZ Korrektur-Offset aendern 

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | int |  |

### STEUERN_MOST_REDUZIERTE_SENDELEIST

Modus  : Fuer 1 [s] Reduzierte Sendeleistung auf Most Bus

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

### STATUS_KLEMMEN

Klemmenstati auslesen KWP2000: $21, $0E

_No arguments._

### STEUERGERAETE_RESET_DELAY

Seuergeraete reset mit Delay ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| DELAY | long | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter fuer Jahr, keine AEnderung: 255 Defaultwert: 255 |

### STEUERN_CBS_KM_PER_YEAR

Vorgabe Km/Jahr für CBS (ab CBS2) 

| Name | Type | Description |
| --- | --- | --- |
| KM_VALUE | int | CBS kilometervorgabe (Gültige Grössen: 0... 255) |

### STEUERN_CBS_SC_CODIERUNG

CBS Servicecall Enable/Disable Codierung 

| Name | Type | Description |
| --- | --- | --- |
| CBS_ID | int | CBS ID 1..30h |
| CBS_CODIERUNG | int | Codierung passend zu CBS_ID, 0=SC inaktiv, 1=SC Aktiv |

### STEUERN_CBS_SC_STATUS

CBS Status Servicecall ändern 

| Name | Type | Description |
| --- | --- | --- |
| SC_STATUS | int | 0x00 = 0  Idle 0x01 = 1  Pending 0x02 = 2  Successfull 0x03 = 3  Error |

### STEUERN_CBS_SC_NOTIFIED

CBS Servicecall notification 

| Name | Type | Description |
| --- | --- | --- |
| CBS_ID | int | CBS ID 1..30h |
| CBS_CODIERUNG | int | Codierung passend zu CBS_ID, 0=SC notified Inaktiv, 1=SC Notified Aktiv |

### STATUS_QUARZABGLEICH

QUARZABGLEICH Status prüfen (Wert >  860) und (Wert <  32767) fehlerhaft (Wert <= 860) und (Wert >= 32767)  OKAY

_No arguments._

### STATUS_CBS_ERROR_MODE_EXT

gibt fehlende externe CBS-SG aus KWP2000 $22 $30 $18

_No arguments._

### STATUS_DEBUG_SLAVE

gibt Debug-Informationen des Slaves KWP2000 $21 $13 Nur fuer Entwickler

_No arguments._

### STATUS_DEBUG_MASTER

gibt Debug-Informationen des Masters KWP2000 $21 $1$ Nur fuer Entwickler

_No arguments._

### STATUS_UHRZEIT_DATUM

Uhrzeit und Datum lesen KWP2000: $21, $8E

_No arguments._

### STEUERN_CCM_CAS205_EGS169_DIS

CC-Meldung CAS ID 205 und EGS ID 169 disable 

_No arguments._

### STATUS_CHECKCONTROL_HISTORY

CC-Meldungsspeicher aus Kombi lesen KWP2000: $21, $0F

_No arguments._

### STATUS_GLOBAL_KM

liest den GWSZ aus KI RAM, EEPROM & CAS

_No arguments._

### STATUS_RDUE_BLOCK_LESEN

gibt RDÜ Speicher aus KWP2000 $22 $30 $22 Nur fuer Entwickler

_No arguments._

### STATUS_CHECKCONTROL_HISTORY_CLEAR

CCM Histoty löschen KWP2000 $31 $21 Nur fuer Entwickler

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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
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

### ABILITY_TO_WAKE

| ABILITY_TO_WAKE_NR | ABILITY_TO_WAKE_MODE |
| --- | --- |
| 0x00 | off |
| 0x01 | on |
| 0x02 | critical |
| 0xXY | unbekannter Mode |

### MOST_3DB

| MOST_3DB_NR | MOST_3DB_MODE |
| --- | --- |
| 0x00 | Lichtleistung abgesenkt |
| 0x01 | Volle Lichtleistung |
| 0xXY | unbekannter Mode |

### WAKE_UP_STATUS

| WAKE_UP_STATUS_NR | WAKE_UP_STATUS_MODE |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | SG hat geweckt |
| 0x02 | SG wurde geweckt |
| 0xXY | unbekannter Mode |

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
| 0x0A | ZKrz_a | Zuendkerzen adaptiv |

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
| 0x930E | GANGANZEIGE_P |
| 0x930F | GANGANZEIGE_N |
| 0x9310 | GANGANZEIGE_D |
| 0x9311 | GANGANZEIGE_R |
| 0x9313 | TEMPERATURFÜHLER_LCD |
| 0x9315 | GWSZ_FEHLER_CAS_ODER_KOMBI |
| 0x9316 | GWSZ_FEHLER_EEPROM_KOMBI |
| 0x9317 | EEPROM: CHECKSUM ERROR CODING DATA BMW |
| 0x9318 | VMC_COMMUNICATION_ERROR |
| 0x9319 | HEBELGEBER_RECHTS |
| 0x9312 | Energiesparmode aktiv. |
| 0x931A | HEBELGEBER_LINKS |
| 0x931B | AUSSENTEMPERATUR |
| 0x931C | KURZSCHUSS_DISPLAYHEIZUNG |
| 0x931D | BORDNETZSPANNUNG, UEBERSPANNUNG ODER UNTERSPANNUNG |
| 0x931E | EEPROM: CHECKSUM ERROR CODING DATA VDO |
| 0x9327 | ZGM_ALIVE_ERROR |
| 0xA3A8 | CAN_NO_ID_ERROR |
| 0xA3A9 | CAN_ID_1EE_ERROR_Ausfall_Botschaft_LSS |
| 0xA3AA | CAN_ID_1D2_ERROR_Ausfall_Botschaft_Getriebedaten |
| 0xA3AB | CAN_ID_190_ERROR_Ausfall_Botschaft_Anzeige_ACC |
| 0xA3AC | CAN_ID_1A6_ERROR_Ausfall_Botschaft_Wegstrecke |
| 0xA3AD | CAN_ID_1D0_ERROR_Ausfall_Botschaft_Motordaten |
| 0xA3AE | CAN_ID_0AA_ERROR_Ausfall_Botschaft_Drehmoment3 |
| 0xA3AF | CAN_ID_200_ERROR_Ausfall_Botschaft_Regelgeschw_Stufentempomat |
| 0xA3B0 | CAN_ID_202_ERROR_Ausfall_Botschaft_Dimmung |
| 0xA3B1 | CAN_ID_1F6_ERROR_Ausfall_Botschaft_Blinken |
| 0xA3B2 | CAN_ID_130_ERROR_Ausfall_Botschaft_Klemmenstatus |
| 0xA3B3 | CAN_ID_0BE_ERROR_Ausfall_Botschaft_ARS_SSY_Alive_Zaehler |
| 0xA3B4 | CAN_ID_21A_ERROR_Ausfall_Botschaft_Lampenzustand |
| 0xA3B5 | CAN_ID_3B4_ERROR_Ausfall_Botschaft_Powermanagement |
| 0xA3B6 | CAN_ID_394_ERROR_Ausfall_Botschaft_RDA_Anfrage_Datenablage |
| 0xA3B7 | CAN_ID_2E4_ERROR_Ausfall_Botschaft_Status_Anhaenger |
| 0xA3B8 | CAN_ID_326_ERROR_Ausfall_Botschaft_Status_Daempferprogramm |
| 0xA3B9 | CAN_ID_19E_ERROR_Ausfall_Botschaft_Status_DSC |
| 0xA3BA | CAN_ID_0AE_ERROR_Ausfall_Botschaft_Alive_EMF |
| 0xA3BB | CAN_ID_2FC_ERROR_Ausfall_Botschaft_ZV_Klappenzustand |
| 0xA3BC | NO_ANSWER_TO_REQUEST (580h+60h) |
| 0xA3BD | CAN_ID_0C0_ERROR_Ausfall_Botschaft_Alive_ZGM |
| 0xA548 | CAN_ID_1A0_ERROR_Ausfall_Botschaft_Geschwindigkeit |
| 0xA54A | CAN_ID_5C0_ERROR_CAS_Checksumme_Wegstrecke |
| 0xA54C | CAN_ID_2FF_ERROR_Ausfall_Botschaft_CleanEnergy |
| 0xA3BE | CAS_ALIVE_ERROR |
| 0xA3BF | CIM_ALIVE_ERROR |
| 0xA3C0 | AHM_ALIVE_ERROR |
| 0xA3C1 | LSZ_ALIVE_ERROR |
| 0xA3C2 | POWERMODUL_ALIVE_ERROR |
| 0xA3C3 | RDC_ALIVE_ERROR |
| 0xA3C4 | SECURITY1_ALIVE_ERROR |
| 0xA3C5 | SECURITY2_ALIVE_ERROR |
| 0xA3C6 | WISCHERMODUL_ALIVE_ERROR |
| 0xA3C7 | LUFTFEDER_ALIVE_ERROR |
| 0xE104 | CAN LOW ERROR |
| 0xE105 | CAN HIGH ERROR |
| 0xE106 | GROUND SHIFT ERROR |
| 0xE107 | CAN BUS OFF |
| 0xE10C | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK) |
| 0xE10E | Obwohl Shutdown (Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE110 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE111 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
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
| 0x931E | 0x01 | 0x02 | - | - |
| 0x9317 | 0x01 | 0x02 | - | - |
| 0xE107 | 0x01 | 0xFE | 0xFD | 0xFF |
| 0xE10C | 0x01 | 0xFE | MOST_NAK | - |
| 0xE10E | 0x01 | 0xFE | 0xFF | 0xFD |
| 0xE110 | 0x01 | 0xFE | 0x07 | 0xFF |
| 0xE111 | 0x01 | 0xFE | 0xFF | 0xFD |
| 0xA3AA | 0x01 | ID_ALIVE_KOMPL | - | - |
| 0xA3AB | 0x01 | ID_ALIVE_CC | - | - |
| 0xA3AC | 0x01 | ID_ALIVE | - | - |
| 0xA3AD | 0x01 | ID_ALIVE | - | - |
| 0xA3B3 | 0x01 | ID_ARS_SFY | - | - |
| 0xA3B6 | RDA | - | - | - |
| 0xA3B8 | 0x01 | ID_ALIVE | - | - |
| 0xA3B9 | 0x01 | ID_ALIVE | - | - |
| 0xA3BA | 0x01 | ID_ALIVE | - | - |
| 0xA3BC | 0x1A | - | - | - |
| 0xA3BD | 0x01 | ID_ALIVE | - | - |
| default | 0x01 | 0xFE | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | BORDNETZSPANNUNG | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x02 | Tachometerfunktion betroffen | 0/1 | - | 0x01 | - | - | - | - |
| 0x03 | DEVICE ADRESSE NAK | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0x04 | FUNCTION BLOCK | HEX | - | unsigned char | - | 1 | 1 | 0 |
| 0x05 | INSTANCE ID | HEX | - | unsigned char | - | 1 | 1 | 0 |
| 0x06 | FUNCTION ID | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0x07 | POSITION NODE REGISTER | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0x08 | DEVICE ADRESSE | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0x09 | RESET MIT RAM ERHALT | 0/1 | - | 0x01 | - | - | - | - |
| 0x0A | NO ID | 0/1 | - | 0x01 | - | - | - | - |
| 0x0B | ALIVE ERROR | 0/1 | - | 0x02 | - | - | - | - |
| 0x0C | CHECKSUM ERROR | 0/1 | - | 0x04 | - | - | - | - |
| 0x0D | KOMPLEMENT FEHLER | 0/1 | - | 0x04 | - | - | - | - |
| 0x0E | ARS ALIVE ERROR | 0/1 | - | 0x10 | - | - | - | - |
| 0x0F | SFY ALIVE ERROR | 0/1 | - | 0x20 | - | - | - | - |
| 0x10 | 00h GWSZ | 0/1 | - | 0x0001 | - | - | - | - |
| 0x11 | 01h ZUENDKERZEN | 0/1 | - | 0x0002 | - | - | - | - |
| 0x12 | 02h FAHRZEUGCHECK | 0/1 | - | 0x0004 | - | - | - | - |
| 0x13 | 03h BREMSFLÜSSIGKEIT | 0/1 | - | 0x0008 | - | - | - | - |
| 0x14 | 04h KUEHLWASSER | 0/1 | - | 0x0010 | - | - | - | - |
| 0x15 | 05h HU | 0/1 | - | 0x0020 | - | - | - | - |
| 0x16 | 06h AU | 0/1 | - | 0x0040 | - | - | - | - |
| 0x17 | 07h RESERVE_1 | 0/1 | - | 0x0080 | - | - | - | - |
| 0x18 | 08h RESERVE_2 | 0/1 | - | 0x0100 | - | - | - | - |
| 0x19 | 0Dh SERVICE_CALL | 0/1 | - | 0x2000 | - | - | - | - |
| 0x20 | 0Eh KM/WOCHE | 0/1 | - | 0x4000 | - | - | - | - |
| 0x21 | 0Fh STUNDENZAEHLER/OFFSET | 0/1 | - | 0x8000 | - | - | - | - |
| 0x1A | ANFRAGE ID | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0xFE | OHNE BEDEUTUNG | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xFD | OHNE BEDEUTUNG | 1 | - | unsigned int | - | 1 | 1 | 0 |
| 0xFF | OHNE BEDEUTUNG | 1 | - | signed long | - | 1 | 1 | 0 |
| 0xXY | UNBEKANNTE UW | 1 | - | signed long | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_unlock_Short). |
| 0x930D | Kein Broadcast Configuration.Status vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930E | Weckendes Device hat erfolglos versucht das Netzwerk zu wecken (Error_WakeUp_Failed). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9308 | 0x01 | 0x02 | 0xFD | 0xFF |
| 0x930B | 0x01 | 0xFE | MOST_NO_ANSWER | - |
| 0x9310 | 0x01 | 0xFE | MOST_NO_ANSWER | - |
| default | 0x01 | 0xFE | 0xFD | 0xFF |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | BORDNETZSPANNUNG | VOLT | - | unsigned char | - | 1 | 10 | 0 |
| 0x02 | RESET MIT RAM ERHALT | 0/1 | - | 0x01 | - | - | - | - |
| 0x08 | DEVICE ADRESSE | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0x04 | FUNCTION BLOCK | HEX | - | unsigned char | - | 1 | 1 | 0 |
| 0x05 | INSTANCE ID | HEX | - | unsigned char | - | 1 | 1 | 0 |
| 0x06 | FUNCTION ID | HEX | - | unsigned int | - | 1 | 1 | 0 |
| 0xFF | OHNE BEDEUTUNG | 1 | - | signed long | - | 1 | 1 | 0 |
| 0xFE | OHNE BEDEUTUNG | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xFD | OHNE BEDEUTUNG | 1 | - | unsigned int | - | 1 | 1 | 0 |
| 0xXY | UNBEKANNTE UW | 1 | - | signed long | - | 1 | 1 | 0 |

### RDA

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x20 | 0x21 |

### MOST_NAK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x03 | 0x04 | 0x05 | 0x06 |

### MOST_NO_ANSWER

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x08 | 0x04 | 0x05 | 0x06 |

### ID_ALIVE_CC

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0A | 0x0B | 0x0C |

### ID_ALIVE_KOMPL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0A | 0x0B | 0x0D |

### ID_ARS_SFY

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0A | 0x0B | 0x0E | 0x0F |

### ID_ALIVE

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0A | 0x0B |

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

### CCM_TEXT_TABELLE

| CC_NR | CC_TEXT |
| --- | --- |
| 0 | Keine Störungen |
| 1 | ACC deaktiviert! Gemäßigt fahren |
| 2 | ACC deaktiviert! Auf Abstand achten |
| 3 | ACC ausgefallen! Auf Abstand achten |
| 4 | Anhänger, Standlicht links! Prüfen |
| 5 | Anhänger, Standlicht rechts! Prüfen |
| 6 | Anhänger, Blinker links! Prüfen |
| 7 | Anhänger, Blinker rechts! Prüfen |
| 8 | Anhänger, Brems- leuchten! Prüfen |
| 9 | Anhänger, Nebel- leuchte! Prüfen |
| 10 | Dynamic Drive gestört! |
| 11 | Lenkung! |
| 12 | Dynamic Drive ausgefallen! |
| 13 | Fernbedienung identifiziert! |
| 14 | Tür offen! |
| 15 | Tür offen! |
| 16 | Tür offen! |
| 17 | Tür offen! |
| 18 | Motorhaube offen! |
| 19 | Kofferraum offen! |
| 20 | Trigger Start! |
| 21 | Zündung! Vor- sichtig anhalten |
| 22 | Anlasser! Motor ggf. nicht abstellen |
| 23 | Trigger Stop! |
| 24 | DBC ausgefallen! Gemäßigt fahren |
| 25 | Vorglühen! Bitte warten |
| 26 | Geschwindigkeits- regelung! |
| 27 | Motorölstand auf Minimum! |
| 28 | Motorölstand unter Min.! Nachfüllen |
| 29 | Motorstörung! Leistungsabfall |
| 30 | Motor! Vorsichtig anhalten |
| 31 | Erhöhte Emissionen! |
| 32 | Tankverschluss schließen |
| 33 | Motorstörung! Gemäßigt fahren |
| 34 |  |
| 35 | DSC ausgefallen! Gemäßigt fahren |
| 36 | DSC deaktiviert! |
| 37 | Trigger |
| 38 | Falscher Schlüssel! |
| 39 | Motor überhitzt! Vor- sichtig anhalten |
| 40 | Zum Motor Starten Bremse treten |
| 41 | Service fällig! |
| 42 | Brems-/Fahrstabilität! Gemäßigt fahren |
| 43 | Stoßdämpferregelung ausgefallen! |
| 44 | #kein Datensatz# |
| 45 | Niveauregulierung ausgefallen! |
| 46 | Bitte angurten |
| 47 | Servotronic gestört! Gemäßigt fahren |
| 48 |  |
| 49 | Partikelfilter gestört! |
| 50 | Reifen Pannen Anzeige ausgef.! |
| 51 | Parkbremse überhitzt! |
| 52 | Parkbremse ausgefallen! |
| 53 | Automatic Hold gestört! |
| 54 | Parkbremse gestört! |
| 55 | Parkbremse lösen |
| 56 |  |
| 57 |  |
| 58 |  |
| 59 | ACC deaktiviert! Parkbremse |
| 60 | Geschwindigkeits- anzeige gestört! |
| 61 | Reichweite %s |
| 62 | Tempolimit überschritten |
| 63 | Reifenpanne! |
| 64 | Code eingeben |
| 65 | Akku in Fernbedie- nung! Laden |
| 66 | Fernbedienung reagiert nicht! |
| 67 | Fernbedienung Batterie leer! |
| 68 | Batterien Fernbed. Standfunktionen! |
| 69 | ACC deaktiviert! Auf Abstand achten |
| 70 | Servotronic ausgefallen! |
| 71 | Bremsbeläge ersetzen |
| 72 | Kindersicherung ausgefallen! |
| 73 | #kein Datensatz# |
| 74 | Bremsflüssigkeit! Vor- sichtig anhalten |
| 75 | Anhängerelektrik ausgefallen! |
| 76 |  |
| 77 |  |
| 78 | Geschwindigkeitslimit überschritten! |
| 79 | Außentemperatur %s |
| 80 |  |
| 81 | Fehler Fahrer- Frontairbag! |
| 82 | Fehler Fahrer- Frontairbag! |
| 83 | Beifahrer-Frontairbag gestört! |
| 84 | Beifahrer-Frontairbag gestört! |
| 85 | ACC deaktiviert! Selbst bremsen |
| 86 | ACC deaktiviert! Parkbremse |
| 87 | Rückleuchte rechts ausgefallen! |
| 88 | Abblendlicht links ausgefallen! |
| 89 | Abblendlicht rechts ausgefallen! |
| 90 | Anhänger, Rückfahr- scheinwerfer! |
| 91 | Gurt anlegen |
| 92 | Beifahrer-Rückhalte- system gestört! |
| 93 | Fahrer-Rückhalte- system gestört! |
| 94 | Rückhaltesyst. Fond links gestört! |
| 95 | Rückhaltesyst. Fond rechts gestört! |
| 96 | #kein Datensatz# |
| 97 | Sicherheitssystem! |
| 98 | Pre-Crash-Sensoren verschmutzt! |
| 99 | Pre-Crash-Sensor verschmutzt! |
| 100 | Pre-Crash-Sensor verschmutzt! |
| 101 | Pre-Crash-Sensor verschmutzt! |
| 102 | Pre-Crash-Sensor verschmutzt! |
| 103 | CC MSG |
| 104 | Getriebe wird zu heiß! Gemäßigt fahren |
| 105 | Getriebe überhitzt! Vorsichtig halten |
| 106 | Seitenairbag Fond links gestört! |
| 107 | Seitenairbag Fond rechts gestört! |
| 108 | Fahrerairbags gestört! |
| 109 | Beifahrerairbags gestört! |
| 110 | Kindersitzerkennung gestört! |
| 111 | Kennzeichenlicht links ausgefallen! |
| 112 | ACC deaktiviert! Gemäßigt fahren |
| 113 | Standlicht an! |
| 114 | Nebelschlussleuchte links! |
| 115 | Rückfahrscheinwerfer rechts! |
| 116 | Blinker hinten links ausgefallen! |
| 117 | Rückfahrscheinwerfer links ausgefallen! |
| 118 | Rückleuchte rechts ausgefallen! |
| 119 | Blinker vorn rechts ausgefallen! |
| 120 | Abblendlicht links ausgefallen! |
| 121 | Abblendlicht rechts ausgefallen! |
| 122 | Blinker vorn links ausgefallen! |
| 123 | Rückleuchte links ausgefallen! |
| 124 | Seitlicher Blinker rechts! |
| 125 | Blinker hinten rechts ausgefallen! |
| 126 | Nebelscheinwerfer rechts! |
| 127 | Seitlicher Blinker links! |
| 128 | Fernlicht links ausgefallen! |
| 129 | Nebelschlussleuchte rechts! |
| 130 | Fernlicht rechts ausgefallen! |
| 131 | Standlicht vorn links ausgefallen! |
| 132 | Standlicht vorn rechts ausgefallen! |
| 133 | Rückleuchte links ausgefallen! |
| 134 | Bremslicht rechts ausgefallen! |
| 135 | Bremslicht Mitte ausgefallen! |
| 136 | Bremslicht links ausgefallen! |
| 137 | Kennzeichenlicht rechts! |
| 138 | Nebelscheinwerfer links ausgefallen! |
| 139 | Reifenpanne vorn links! |
| 140 | Reifenpanne hinten rechts! |
| 141 | Reifenpanne hinten links! |
| 142 | Reifenfülldruck! Prüfen |
| 143 | Reifenpanne vorn rechts! |
| 144 | Reifen Druck Control gestört! |
| 145 | Reifen Druck Control ausgefallen! |
| 146 | #kein Datensatz# |
| 147 | Reifenpanne! |
| 148 | Bremslichtsteuerung ausgefallen! |
| 149 | Reifen Druck Control ausgefallen! |
| 150 | Panzertür Gepäck- raum offen! |
| 151 | Gaswarnung! Luftanlage ein |
| 152 | Ladekabel abklemmen! |
| 153 | Waffenhalterung Fehler |
| 154 | Fehler Reizgas- Sensor |
| 155 | Zwangsschaltung aktiv (Vorgehalten) |
| 156 | Luftanlage ohne Funktion |
| 157 | Luftanlage, Taste 3 s drücken |
| 158 | ACC deaktiviert! Auf Abstand achten |
| 159 | Türen nicht verriegelt |
| 160 | Fensterheber Notfkt. verwenden! |
| 161 | Kurzschluss Bord- batterieleitung! |
| 162 | Blitzleuchte, Lampe prüfen |
| 163 | Löschanlage, Taster 3 s drücken |
| 164 | Stand Waschflüssig- keit zu niedrig! |
| 165 | Außentemperatur %s |
| 166 | Kühlmittelstand zu niedrig! |
| 167 | Uhrzeit und Datum einstellen |
| 168 | Getriebe gestört! Gemäßigt fahren |
| 169 | Getriebe-Position N nur bei Motor an! |
| 170 | Getriebe- notprogramm! |
| 171 | Getriebenotprogr.! Gemäßigt fahren |
| 172 | Getriebenotprogr.! Gemäßigt fahren |
| 173 | Getriebenotprogr.! Gemäßigt fahren |
| 174 | Getriebe-Position P nur im Stillstand! |
| 175 | Getriebe-Position P gestört! |
| 176 | ACC Sensorsicht! Auf Abstand achten |
| 177 | ACC Sensorsicht! Auf Abstand achten |
| 178 | Getriebe in Position N! |
| 179 | Getriebe gestört! Gemäßigt fahren |
| 180 | Stoßdämpferregelung gestört! |
| 181 |  |
| 182 | Ölniveausensor gestört! |
| 183 | Scheibenwischer gestört! |
| 184 | DTC aktiviert! |
| 185 | Ganganzeige ausgefallen! |
| 186 | #kein Datensatz# |
| 187 | #kein Datensatz# |
| 188 | #kein Datensatz# |
| 189 | #kein Datensatz# |
| 190 | #kein Datensatz# |
| 191 | #kein Datensatz# |
| 192 | RDC wird initialisiert! |
| 193 | Notausstieg gestört! |
| 194 | Fenster offen! |
| 195 | PDC ausgefallen! |
| 196 | Blinker vorn rechts ausgefallen! |
| 197 | Blinker vorn links ausgefallen! |
| 198 | #kein Datensatz# |
| 199 | ACC ausgefallen! Auf Abstand achten |
| 200 | CAN Bus off |
| 201 | Automatic Hold deaktiviert! |
| 202 |  |
| 203 | Getriebe in Position N! |
| 204 | Dynamic Drive deaktiviert! |
| 205 | Fernbedienung! Motor nicht abstellen |
| 206 | Nächster Tastendruck startet Motor! |
| 207 | Vorsichtig anhalten |
| 208 | #kein Datensatz# |
| 209 | Fernbedienung im Innenraum! |
| 210 | Parkbremse ausgefallen! |
| 211 | Parkbremse ausgefallen! |
| 212 | Motoröldruck! Vor- sichtig anhalten |
| 213 | Generator gestört! |
| 214 | #kein Datensatz# |
| 215 |  |
| 216 | Kraftstoffpumpe! Gemäßigt fahren |
| 217 | Fernbedienung nicht vorhanden! |
| 218 | Notprogramm EVS |
| 219 | Batterieschalter auf OFF! |
| 220 | Erhöhter Ruhestrom! |
| 221 | Gaswarnung! Ort verlassen |
| 222 | Standheizung/-lüftung ausgeschaltet! |
| 223 | Elektrik gestört! Gemäßigt fahren |
| 224 | Isolationsfehler |
| 225 | Frontscheibe entriegelt! |
| 226 | Feuerlöschanlage Fehler! |
| 227 | Power Modul! Gemäßigt fahren |
| 228 | Heiz-/Klimafunktionen eingeschränkt! |
| 229 | Batterie nachladen! |
| 230 | Batterie leer! Not- aufladung aktiv |
| 231 | Lichtanlage! Vor- sichtig anhalten! |
| 232 | Schutzsysteme gestört! |
| 233 | Kommunikation gestört! |
| 234 | Überfallalarm gestört! |
| 235 | KSG |
| 236 | Brems-/Fahrstabilität! Gemäßigt fahren |
| 237 | Fahrregelsysteme! Gemäßigt fahren |
| 238 | ACC deaktiviert! Selbst bremsen |
| 239 | Parkbremse ausgefallen! |
| 240 | Parkbremse ausgefallen! |
| 241 | Parkbremse ausgefallen! |
| 242 | Parkbremse ausgefallen! |
| 243 | Parkbremse ausgefallen! |
| 244 | Zum Gangeinlegen Bremse treten |
| 245 | Niveauregulierung gestört! |
| 246 | ACC deaktiviert! Auf Abstand achten |
| 247 | Power Modul ausgefallen! |
| 248 | Gangeinlegen ohne Bremse möglich! |
| 249 | Schaltwunsch wiederholen |
| 250 | #kein Datensatz# |
| 251 | Getriebe-Position P wird eingelegt! |
| 252 |  |
| 253 |  |
| 254 | Getriebenotprogr.! Gemäßigt fahren |
| 255 | Pos. R, N, D nur bei Motor an möglich |
| 256 | Leuchtweitenregu- lierung gestört! |
| 257 | Motor wird zu heiß! Gemäßigt fahren |
| 258 |  |
| 259 | Fensterheber nicht initialisiert! |
| 260 | Schiebe-Hebedach nicht initialisiert! |
| 261 | Fensterheber gestört! |
| 262 | Schiebedach gestört! |
| 263 | Parkbremse gestört! |
| 264 |  |
| 265 | Reifenfülldruck! Erneut prüfen |
| 266 | #kein Datensatz# |
| 267 | #kein Datensatz# |
| 268 | #kein Datensatz# |
| 269 | #kein Datensatz# |
| 270 | #kein Datensatz# |
| 271 | #kein Datensatz# |
| 272 | #kein Datensatz# |
| 273 | #kein Datensatz# |
| 274 | #kein Datensatz# |
| 275 | #kein Datensatz# |
| 276 | #kein Datensatz# |
| 277 | #kein Datensatz# |
| 278 | #kein Datensatz# |
| 279 | #kein Datensatz# |
| 280 | #kein Datensatz# |
| 281 | #kein Datensatz# |
| 282 | #kein Datensatz# |
| 283 | #kein Datensatz# |
| 284 | #kein Datensatz# |
| 285 | #kein Datensatz# |
| 286 | #kein Datensatz# |
| 287 | #kein Datensatz# |
| 288 | #kein Datensatz# |
| 289 | #kein Datensatz# |
| 290 | #kein Datensatz# |
| 291 | #kein Datensatz# |
| 292 | #kein Datensatz# |
| 293 | #kein Datensatz# |
| 294 | #kein Datensatz# |
| 295 | Kurvenlicht ausgefallen! |
| 296 | Kein Notruf! Mobiltelefon? |
| 297 | Assist-Notruf nicht freigeschaltet! |
| 298 | Assist-Notruf nicht verfügbar! |
| 299 | Notruf-Systemfehler! |
| 300 | Assist-Notruf nicht verfügbar! SIM? |
| 301 | #kein Datensatz# |
| 302 | #kein Datensatz# |
| 303 | #kein Datensatz# |
| 304 | #kein Datensatz# |
| 305 | #kein Datensatz# |
| 306 | #kein Datensatz# |
| 307 | #kein Datensatz# |
| 308 | #kein Datensatz# |
| 309 | #kein Datensatz# |
| 310 | Wasserstoff tanken nicht möglich! |
| 311 | Türen und Fenster schließen! |
| 312 | H2-Betrieb nicht möglich! |
| 313 | Benzinbetrieb nicht möglich! |
| 314 | Wasserstoff-System gestört! |
| 315 | H2-System erheblich gestört! |
| 316 | H2-Tankklappe offen! |
| 317 | #kein Datensatz# |
| 318 | Ca. 3 Min. Leistungs- begrenzung! |
| 319 | Tankvorbereitungen treffen! |
| 320 | #kein Datensatz# |
| 321 | #kein Datensatz# |
| 322 | #kein Datensatz# |
| 323 | #kein Datensatz# |
| 324 | Funktion Power Modul eingeschränkt |
| 325 | #kein Datensatz# |
| 326 | Getriebe in Fahrposition |
| 327 | RDC wird initialisiert! |
| 328 | #kein Datensatz# |
| 329 | Reduzierter Batterie- ladezustand! |
| 330 | #kein Datensatz# |
| 331 | #kein Datensatz# |
| 332 | #kein Datensatz# |
| 333 | #kein Datensatz# |
| 334 | #kein Datensatz# |
| 335 | Zündung eingeschaltet |
| 336 |  |
| 337 | #kein Datensatz# |
| 338 | #kein Datensatz# |
| 339 | #kein Datensatz# |
| 340 | #kein Datensatz# |
| 341 | #kein Datensatz# |
| 342 | #kein Datensatz# |
| 343 | #kein Datensatz# |
| 344 | #kein Datensatz# |
| 345 | #kein Datensatz# |
| 346 | #kein Datensatz# |
| 347 | #kein Datensatz# |
| 348 | #kein Datensatz# |
| 349 | #kein Datensatz# |
| 350 | #kein Datensatz# |
| 351 | #kein Datensatz# |
| 352 | #kein Datensatz# |
| 353 | #kein Datensatz# |
| 354 | #kein Datensatz# |
| 355 | #kein Datensatz# |
| 356 | Nachtsicht - Kamera ausgefallen! |
| 357 | #kein Datensatz# |
| 358 | #kein Datensatz# |
| 359 | H2-Betrieb zurzeit nicht möglich! |
| 360 | H2 tanken zurzeit nicht möglich! |
| 361 | Wasserstoffsystem gestört! |
| 362 | Nicht in geschlossene Räume fahren! |
| 363 | #kein Datensatz# |
| 364 | #kein Datensatz# |
| 365 | #kein Datensatz# |
| 366 | #kein Datensatz# |
| 367 | #kein Datensatz# |
| 368 | #kein Datensatz# |
| 369 | #kein Datensatz# |
| 370 | #kein Datensatz# |
| 371 | #kein Datensatz# |
| 372 | #kein Datensatz# |
| 373 | #kein Datensatz# |
| 374 | Fernlicht-Assistent defekt! |
| 375 | Fernlicht-Assistent aktiv! |
| 376 | Fernlicht-Assistent nicht aktiv! |
| 377 | Empfindlichkeit verstellt |
