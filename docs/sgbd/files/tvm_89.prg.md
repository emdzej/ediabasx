# tvm_89.prg

## General

|  |  |
| --- | --- |
| File | tvm_89.prg |
| Type | PRG |
| Jobs | 77 |
| Tables | 35 |
| Origin | BMW EI-41 Alwin Gröne |
| Revision | 2.009 |
| Author | EB_Automotive ES-5 Kemmler_Alexander, EB_Automotive ES-5 Bachma |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TVM L4 RüKo |  |  |
| ORIGIN | string | BMW EI-41 Alwin Gröne |  |  |
| REVISION | string | 2.009 |  |  |
| AUTHOR | string | EB_Automotive ES-5 Kemmler_Alexander, EB_Automotive ES-5 Bachma |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.50 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers KWP2000: $85 ControlDTCSetting Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT |
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

### STATUS_LUEFTER

Auslesen Fan-Info über local Identifier FC KWP2000: $21 ReadDataByLocalIdentifier $FC Fan-Info Modus  : Default

_No arguments._

### STEUERN_LUEFTER

Aktiviert den Gehaeuseluefter fuer die in ARG_DURATION angegebene Zeit in Sekunden

| Name | Type | Description |
| --- | --- | --- |
| ARG_DURATION | unsigned char | Beschreibung: Anzahl Sekunden, die der Luefter laufen soll. |

### STEUERN_TEST_ANTENNE

Start des Antennentests KWP2000: $31 StartRoutineByLocalIdentifier $25 Test Antenna Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned long | table TAntenne WERT |

### STATUS_TEST_ANTENNE

Ergebnis des Antennentests KWP2000: $33 StartRoutineByLocalIdentifier $25 Test Antenna Modus  : Default

_No arguments._

### STATUS_ANALOG_TEMPERATUR

Abfrage der Temperaturen des Steuergerätes.

_No arguments._

### STATUS_TVSETREGION

Abfrage der Temperaturen des Steuergerätes.

_No arguments._

### STEUERN_TVSETREGION

Abfrage der Temperaturen des Steuergerätes.

| Name | Type | Description |
| --- | --- | --- |
| ARG_REGION | unsigned char | EEinstellung der Region. table TTvRegion |

### STEUERN_TVSETCHANNEL

Stellt einen bestimmten TV-Kanal ein. Zeit in Sekunden

| Name | Type | Description |
| --- | --- | --- |
| ARG_CHANNEL | unsigned int | Einstellung des TV-Kanals. |
| ARG_BOUQET | unsigned int | Einstellung des digitalen Bouqets Default: 0 0: analog Mögliche Werte für digital: 1 bis 64 |

### STATUS_TVSETCHANNEL

Stellt einen bestimmten TV-Kanal ein. Zeit in Sekunden

_No arguments._

### STEUERN_SIGNALAUSGABE

Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SIGNALART | unsigned char | Art der Signalausgabe. table TSignalArt |
| ARG_AUSGANG | unsigned int | Default: 0 In den Kommentaren des Jobs muss eine eindeutige Zuweisung des Ausgangs möglich sein. Beispiele: -Headunit: LVDS Leitung zum RSE -Videoswitch: Ausgang1 (PINs X,Y) Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. table TVideoAusang |
| ARG_TIMEOUT | unsigned char | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis -	der Job erneut mit Parameter 0 aufgeru-fen wird -	das Steuergerät neu startet (Aufwachen, Reset, &) |

### STEUERN_SELBSTTEST

Selbsttest starten.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | unsigned long | Routinen, die getestet werden sollen. Die Tabelle  TSelbsttestRoutine wird in der SGBD von der Entwicklung gepflegt. |

### STATUS_SELBSTTEST

Selbsttest starten.

_No arguments._

### STEUERN_TEST_VIDEOAUSGANG

Startet den Test der Videoausgänge. KWP2000: $31 StartRoutineByLocalIdentifier $27 Test Videoausgang Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_AUSGANG | unsigned int | table TVideoAusgang WERT |

### STATUS_TEST_VIDEOAUSGANG

Wertet den Test der Videoausgänge aus.

_No arguments._

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit, oder von TV/Video-Steuergeräten.

_No arguments._

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_ROUTING_ENGINE

Inhalt der Routing Engine

_No arguments._

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STATUS_VERSION_MPEG

Abfrage der Temperaturen des Steuergerätes.

_No arguments._

### STEUERN_ANTENNE_FELDSTAERKE

Liest die aktuelle Feldstärke auf der angegebenen Antenne aus.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned int | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### STEUERN_ANTENNEN_SIGNAL_DIGITAL

Liest die aktuelle Feldstärke auf der angegebenen Antenne aus.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ANTENNE | unsigned int | Definiert die Antenne, deren Feldstärke wiedergegeben werden soll. |

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STEUERN_SIGNALAUSGABE_AUS

Beendet die mit STEUERN_SIGNALAUSGABE erzwungene Signalausgabe und schaltet auf den Regulärbetrieb.

| Name | Type | Description |
| --- | --- | --- |
| ARG_AUSGANG | unsigned int | Default: 0 In den Kommentaren des Jobs muss eine eindeutige Zuweisung des Ausgangs möglich sein. Beispiele: -Headunit: LVDS Leitung zum RSE -Videoswitch: Ausgang1 (PINs X,Y) Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. table TVideoAusang |

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
| 0xAA88 | Dummmy Application DTC |
| 0xAA89 | Überspannung erkannt |
| 0xAA8A | Steuergeraet nicht codiert  |
| 0xAA8B | Codierdaten-Transaktion fehlgeschlagen |
| 0xAA8C | Signatur über Nettocodierdaten ungueltig  |
| 0xAA8D | Steuergeraet falsch codiert |
| 0xAA8E | Codierdaten-Transaktion mit ungueltigen Daten |
| 0xAA8F | Energiesparmode aktiv |
| 0xAA90 | Host hat bei fatalem Fehler vom INIC einen Reset ausgelöst |
| 0xAA9A | Interner Steuergerätefehler Hardware |
| 0xAA9B | Interner Steuergerätefehler Software |
| 0xAA9D | FBAS-Ausgang 1: Kurzschluss |
| 0xAA9E | FBAS-Ausgang 1: Unterbrechung oder fehlerhafte Senke |
| 0xAA9F | Kurzschluss Antenne 1 |
| 0xAAA0 | Antenne 1 nicht verbunden, hohe Impedanz |
| 0xAAA1 | Kurzschluss Antenne 2 |
| 0xAAA2 | Antenne 2 nicht verbunden, hohe Impedanz |
| 0xAAA3 | Kurzschluss Antenne 3 |
| 0xAAA4 | Antenne 3 nicht verbunden, hohe Impedanz |
| 0xAAA5 | FBAS-Ausgang 2: Unterbrechung oder fehlerhafte Senke |
| 0xAAA6 | FBAS-Ausgang 2: Kurzschluss |
| 0xDBCE | Error Light not off |
| 0x930E | Error Light not off |
| 0xDBD2 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle |
| 0xDBD0 | MOST Ring-Break-Diagnosis failed |
| 0xDBCD | MOST_WAKEUPFAILED |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | RESET |
| 0x930a | MOST: Licht geht unerwartet aus |
| 0x930b | DeviceNoAnswer |
| 0x930c | MOST_UNLOCKSHORT |
| 0x930d | Systemzustand Ok nicht fristgerecht erkannt |
| 0x9310 | Empfängerknoten: hat Nachricht nicht abgenommen; Puffer voll |
| 0x9311 | MOST: Synchronisation (PLL) arbeitet nicht korrekt |
| 0x9320 | COM Flash Error |
| 0x9321 | COM EEPROM Error |
| 0x9325 | MPEG_APPL_FLASH |
| 0x9326 | MPEG_APPL_FPGA |
| 0x9327 | MPEG_APPL_I2C |
| 0x9329 | MPEG_APPL_TUNERS |
| 0x932a | MPEG_APPL_DIBCOM |
| 0x932B | MPEG_APPL_TDA9899 |
| 0x932C | MPEG_APPL_SAA7113 |
| 0x932D | MPEG_APPL_TOSHIBA |
| 0x932E | MPEG_APPL_FRONTEND |
| 0x932F | MPEG_APPL_BWL |
| 0x9330 | MPEG_APPL_TC90400MANAGER |
| 0x9332 | MPEG_APPL_BML |
| 0x9333 | MPEG_APPL_OSDTELETEXT |
| 0x9334 | MPEG_BOOT_TVMODULE_INCOMPATIBLE |
| 0x9335 | TVM Fan Error |
| 0x9336 | Toshiba HW Error - MPEG APPL, BCAS Hardware |
| 0x9337 | Toshiba SW Error - MPEG APPL, BCAS Hardware |
| 0x9338 | COM UART Error - NEC/MPEG UART Communication |
| 0x9340 | Timing-Master: kann Audiokanal nicht reservieren; beschäftigt |
| 0x9341 | Timing-Master: kann Kanal nicht freigeben; beschäftigt |
| 0x9342 | Timing-Master: kann Kanal nicht freigeben; falsches Label |
| 0x9343 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht |
| 0x9344 | Empfängerknoten: hat Nachricht nicht abgenommen; fehlerhafte Check- Summe am Empfänger erkannt |
| 0x9345 | Übertragungsfehler im Hardware Abstraction Layer |
| 0x934a | Empfängerknoten: Kommandointerpreter kennt Nachricht nicht |
| 0x934b | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen |
| 0x934d | Senderknoten: adressierter Funktionsblock existiert nicht |
| 0x934e | Senderknoten: falsche Parameter in der Nachricht |
| 0x934f | Senderknoten: Fehler in adressierter Funktion |
| 0x9350 | Senderknoten: Fehler in Segmentierung |
| 0x9351 | Funktionsblock: sendet keine Werte trotz Notifizierung |
| 0x9352 | Funktionsblock: Notifizierung abgelehnt; Spalte der Notifizierungstabelle voll |
| 0x9353 | Funktionsblock: Notifizierung abgelehnt; keine freien Zeilen in Notifizierungstabelle |
| 0x9354 | Funktionsblock: Notifizierung abgelehnt; gewünschte Funktion existiert nicht |
| 0x9355 | Funktionsblock: Notifizierung abgelehnt; Grund unbekannt |
| 0x9356 | Funktionsblock: Notifizierung abgelehnt; Funktionswert momentan nicht vorhanden |
| 0x9360 | Versorgungsspannung: Mindestwert unterschritten |
| 0x9400 | COM_FAN |
| 0x9401 | COM_UART |
| 0x9402 | COM_I2C |
| 0x9403 | COM_TEMP_SENSOR |
| 0x9404 | COM_FLASH_INT_INTEGRITY |
| 0x9405 | COM_FLASH_EXT_INTEGRITY |
| 0x9406 | COM_FLASH_INT_COMPARE |
| 0x9407 | COM_FLASH_EXT_COMPARE |
| 0x9408 | TASK_DELAYED |
| 0x9409 | Error_MOST_INIC_NoCommunication |
| 0x9410 | Error_MPEG_WrongApplication |
| 0x9411 | Event_MPEG_Startup_Timeout_Delayed |
| 0x9412 | Event_MPEG_Software_Watchdog |
| 0x9413 | Event_MPEG_ApplicationNoReaction |
| 0xDBD0 | MOST Ring-Break-Diagnosis failed |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### TANTENNE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Antennen |
| 0x00000001 | AM/FM Antenne |
| 0x00000002 | GPS Antenne |
| 0x00000003 | AM/FM Antenne und GPS Antenne |
| 0x00000004 | DAB L-BAND Antenne |
| 0x00000005 | AM/FM Antenne und DAB L-BAND Antenne |
| 0x00000006 | GPS Antenne und DAB L-BAND Antenne |
| 0x00000007 | AM/FM Antenne, GPS Antenne und DAB L-BAND Antenne |
| 0x00000008 | DAB BAND III Antenne |
| 0x00000009 | AM/FM Antenne und DAB BAND III Antenne |
| 0x0000000A | GPS Antenne und DAB BAND III Antenne |
| 0x0000000B | AM/FM Antenne, GPS Antenne und DAB BAND III Antenne |
| 0x0000000C | DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x0000000D | AM/FM Antenne, DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x0000000E | GPS Antenne, DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x0000000F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne und DAB BAND III Antenne |
| 0x00000010 | VICS FM Antenne |
| 0x00000011 | AM/FM Antenne und VICS FM Antenne |
| 0x00000012 | GPS Antenne und VICS FM Antenne |
| 0x00000013 | AM/FM Antenne, GPS Antenne und VICS FM Antenne |
| 0x00000014 | DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000015 | AM/FM Antenne, DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000016 | GPS Antenne, DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000017 | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne und VICS FM Antenne |
| 0x00000018 | DAB BAND III Antenne und VICS FM Antenne |
| 0x00000019 | AM/FM Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001A | GPS Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001B | AM/FM Antenne, GPS Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001C | DAB L-BAND Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001D | AM/FM Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001E | GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS FM Antenne |
| 0x0000001F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und |
| 0x00000020 | VICS Beacon Antenne |
| 0x00000021 | AM/FM Antenne und VICS Beacon Antenne |
| 0x00000022 | GPS Antenne und VICS Beacon Antenne |
| 0x00000023 | AM/FM Antenne, GPS Antenne und VICS Beacon Antenne |
| 0x00000024 | DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000025 | AM/FM Antenne, DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000026 | GPS Antenne, DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000027 | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne und VICS Beacon Antenne |
| 0x00000028 | DAB BAND III Antenne und VICS Beacon Antenne |
| 0x00000029 | AM/FM Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002A | GPS Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002B | AM/FM Antenne, GPS Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002C | DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002D | AM/FM Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002E | GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x0000002F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne und VICS Beacon Antenne |
| 0x00000030 | VICS FM Antenne und VICS Beacon Antenne |
| 0x00000031 | AM/FM Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000032 | GPS Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000033 | AM/FM Antenne, GPS Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000034 | DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000035 | AM/FM Antenne, DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000036 | GPS Antenne, DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000037 | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000038 | DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000039 | AM/FM Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003A | GPS Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003B | AM/FM Antenne, GPS Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003C | DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003D | AM/FM Antenne, DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003E | GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x0000003F | AM/FM Antenne, GPS Antenne, DAB L-BAND Antenne, DAB BAND III Antenne, VICS FM Antenne und VICS Beacon Antenne |
| 0x00000040 | TV1 Antenne |
| 0x00000080 | TV2 Antenne |
| 0x000000C0 | TV1 und TV2 Antenne |
| 0x00000100 | TV3 Antenne |
| 0x00000140 | TV1 und TV3 Antenne |
| 0x00000180 | TV2 und TV3 Antenne |
| 0x000001C0 | TV1, TV2 und TV3 Antenne |
| 0x00000200 | SDARS Antenne |
| 0xFFFFFFFF | Nicht definiert |

### TANTENNEFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Falscher Antennfuß oder Diversity |
| 0xFF | Nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TTVREGION

| WERT | TEXT |
| --- | --- |
| 0x01 | Nordamerika |
| 0x02 | Mittelamerika |
| 0x03 | Südamerika |
| 0x04 | Karibik |
| 0x05 | Europa/Mitteleuropa |
| 0x06 | Frankreich |
| 0x07 | Russland |
| 0x08 | Afrika/Nordafrika |
| 0x09 | Naher Osten |
| 0x0A | Asien |
| 0x0B | Pazifik |
| 0x0C | Ozeanien/Australien |
| 0x0D | China |
| 0x0E | Hong Kong |
| 0x0F | Taiwan |
| 0x10 | Westeuropa |
| 0x11 | Osteuropa |
| 0x12 | Nordosteuropa |
| 0x13 | Türkei |
| 0x14 | Griechenland |
| 0x15 | Israel |
| 0x16 | Mittel-/Südafrika |
| 0xFF | Nicht definiert |

### TVIDEOAUSGANG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Ausgänge |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0003 | Ausgang 1 und 2 |
| 0x0004 | Ausgang 3 |
| 0x0005 | Ausgang 1 und 3 |
| 0x0006 | Ausgang 2 und 3 |
| 0x0007 | Ausgang 1, 2 und 3 |
| 0x0008 | Ausgang 4 |
| 0x0009 | Ausgang 1 und 4 |
| 0x000A | Ausgang 2 und 4 |
| 0x000B | Ausgang 1, 2 und 4 |
| 0x000C | Ausgang 3 und 4 |
| 0x000D | Ausgang 1, 2 und 4 |
| 0x000E | Ausgang 2, 3 und 4 |
| 0x000F | Ausgang 1, 2, 3 und 4 |
| 0x0010 | Ausgang 5 |
| 0x0011 | Ausgang 1 und 5 |
| 0x0012 | Ausgang 2 und 5 |
| 0x0013 | Ausgang 1,2 und 5 |
| 0x0014 | Ausgang 3 und 5 |
| 0x0015 | Ausgang 1,3 und 5 |
| 0x0016 | Ausgang 2,3 und 5 |
| 0x0017 | Ausgang 1, 2 und 3 und 5 |
| 0x0018 | Ausgang 4 und 5 |
| 0x0019 | Ausgang 1, 4 und 5 |
| 0x001A | Ausgang 2, 4 und 5 |
| 0x001B | Ausgang 1, 2, 4 und 5 |
| 0x001C | Ausgang 3, 4 und 5 |
| 0x001D | Ausgang 1, 2, 4 und 5 |
| 0x001E | Ausgang 2, 3, 4 und 5 |
| 0x001F | Ausgang 1, 2, 3, 4 und 5 |
| 0xFFFF | Nicht definiert |

### TSIGNALART

| WERT | TEXT |
| --- | --- |
| 0x01 | Realbild |
| 0x02 | Testbild |
| 0x03 | Signal abschalten |
| 0x04 | Testbild mit Alive Counter (ACNT) |
| 0x05 | Testbild mit stehendem ACNT |
| 0x06 | Testbild mit leicht gestörtem ACNT |
| 0x07 | Testbild mit stark gestörtem ACNT |
| 0x08 | Testbild mit leicht springendem ACNT |
| 0x09 | Testbild mit stark springendem ACNT |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | alle Routinen |
| 0x00000001 | Internal Supply Voltages |
| 0x00000002 | FOT Temperature |
| 0x00000004 | Board Temperature |
| 0x00000008 | NEC-Flash Checksum |
| 0x00000010 | EEPROM Checksum |
| 0x00000020 | TOSHIBA-Flash Checksum |
| 0x00000040 | TOSHIBA-RAM Integrity |
| 0x00000080 | UART-Interface Communication: NEC / TOSHIBA |
| 0x00000100 | Host-interface Communication: FPGA / TOSHIBA |
| 0x00000200 | SPI-interface Communication: FPGA / NEC |
| 0x00000400 | not used |
| 0x00000800 | Internal PLL lock of Tuner-IC´s |
| 0x00001000 | Internal PLL lock of FPGA |
| 0x00002000 | I2C Device Status |
| 0x00004000 | Antenna Input |
| 0x00008000 | Video Output |
| 0x00010000 | Fan Rotation |
| 0x00020000 | Verify the application status |
| 0xFFFFFFFF | Nicht definiert |

### TLEITUNGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss nach Plus |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Leitungsunterbrechung |
| 0xFF | Nicht definiert |

### THWVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Headunit Stufe 1 (Radio Business) |
| 0x00000001 | Headunit Stufe 2 (Radio Professional) |
| 0x00000002 | Headunit Stufe 3 (Navigation Business) |
| 0x00000004 | Headunit Stufe 4 (Navigation Professional) |
| 0x00000008 | RearSeatEntertainment Mid |
| 0x00000010 | RearSeatEntertainment High |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x000000A0 | TV-Modul China |
| 0x00000100 | VideoSwitch Mid |
| 0x00000200 | VideoSwitch High |
| 0x00010000 | mit Funktion IBOC |
| 0x00020000 | mit Funktion DAB |
| 0x00040000 | mit Funktion Video-in |
| 0x00080000 | mit Funktion SDARS |
| 0x00100000 | mit Funktion Telefon |
| 0x00200000 | mit Funktion I-Speech |
| 0x00400000 | mit Funktion CD-Laufwerk |
| 0xFFFFFFF1 | --- Bitkombinationen Headunit Stufe 1 (Radio Business) --- |
| 0x00010001 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC |
| 0x00020001 | Headunit Stufe 1 (Radio Business) mit Funktion DAB |
| 0x00080001 | Headunit Stufe 1 (Radio Business) mit Funktion SDARS |
| 0xFFFFFFF2 | --- Bitkombinationen Headunit Stufe 2 (Radio Professional) --- |
| 0x00410002 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und CD-Laufwerk |
| 0x00490002 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x006D0002 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, I-Speech und CD-Laufwerk |
| 0x002D0002 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In und I-Speech |
| 0x00500002 | Headunit Stufe 2 (Radio Professional) mit Funktion Telefon und CD-Laufwerk |
| 0x00640002 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, I-Speech und CD-Laufwerk |
| 0x00760002 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x00020002 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon, I-Speech |
| 0xFFFFFFF3 | --- Bitkombinationen Headunit Stufe 3 (Navigation Business) --- |
| 0x00340003 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon und I-Speech |
| 0x00360003 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon und I-Speech |
| 0x00090003 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC und SDARS |
| 0x004B0003 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS, I-Speech |
| 0xFFFFFFF4 | --- Bitkombinationen Headunit Stufe 4 (Navigation Professional) --- |
| 0x00040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in |
| 0x00050004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in |
| 0x00060004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in |
| 0x000D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in |
| 0x01040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als Japan-Variante |
| 0x02040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als China/Korea-Variante |
| 0x00140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon |
| 0x00150004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in und Telefon |
| 0x00160004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in und Telefon |
| 0x001D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in und Telefon |
| 0x01140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als Japan-Variante |
| 0x02140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als China/Korea-Variante |
| 0xFFFFFFF5 | --- Bitkombinationen RearSeatEntertainment Mid --- |
| 0x00040008 | RearSeatEntertainment Mid mit Funktion Video-in |
| 0x01000008 | RearSeatEntertainment Mid als Japan-Variante |
| 0x02000008 | RearSeatEntertainment Mid als China/Korea-Variante |
| 0x01040008 | RearSeatEntertainment Mid mit Funktion Video-in als Japan-Variante |
| 0x02040008 | RearSeatEntertainment Mid mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFF6 | --- Bitkombinationen RearSeatEntertainment High --- |
| 0x00040010 | RearSeatEntertainment High mit Funktion Video-in |
| 0x01000010 | RearSeatEntertainment High als Japan-Variante |
| 0x02000010 | RearSeatEntertainment High als China/Korea-Variante |
| 0x01040010 | RearSeatEntertainment High mit Funktion Video-in als Japan-Variante |
| 0x02040010 | RearSeatEntertainment High mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFFF | Nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Harman Becker |
| 0x01 | Siemens VDO |
| 0x02 | Visteon |
| 0x03 | Alpine |
| 0x04 | Lear |
| 0x05 | Fuba |
| 0x06 | Hirschmann Car Communication |
| 0xFF | Nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0x01050000 | TVM DVB-T - HW Version 005.000.000 |
| 0x01050001 | TVM DVB-T - HW Version 005.000.001 |
| 0x01050002 | TVM DVB-T - HW Version 005.000.002 |
| 0x01050003 | TVM DVB-T - HW Version 005.000.003 |
| 0x01050004 | TVM DVB-T - HW Version 005.000.004 |
| 0x01050005 | TVM DVB-T - HW Version 005.000.005 |
| 0x01050006 | TVM DVB-T - HW Version 005.000.006 |
| 0x01050007 | TVM DVB-T - HW Version 005.000.007 |
| 0x01050008 | TVM DVB-T - HW Version 005.000.008 |
| 0x01050009 | TVM DVB-T - HW Version 005.000.009 |
| 0x01050100 | TVM DVB-T - HW Version 005.001.000 |
| 0x01050101 | TVM DVB-T - HW Version 005.001.001 |
| 0x01050102 | TVM DVB-T - HW Version 005.001.002 |
| 0x01050103 | TVM DVB-T - HW Version 005.001.003 |
| 0x01050104 | TVM DVB-T - HW Version 005.001.004 |
| 0x01050105 | TVM DVB-T - HW Version 005.001.005 |
| 0x01050106 | TVM DVB-T - HW Version 005.001.006 |
| 0x01050107 | TVM DVB-T - HW Version 005.001.007 |
| 0x01050108 | TVM DVB-T - HW Version 005.001.008 |
| 0x01050109 | TVM DVB-T - HW Version 005.001.009 |
| 0x01050200 | TVM DVB-T - HW Version 005.002.000 |
| 0x01050201 | TVM DVB-T - HW Version 005.002.001 |
| 0x01050202 | TVM DVB-T - HW Version 005.002.002 |
| 0x01050203 | TVM DVB-T - HW Version 005.002.003 |
| 0x01050204 | TVM DVB-T - HW Version 005.002.004 |
| 0x01050205 | TVM DVB-T - HW Version 005.002.005 |
| 0x01050206 | TVM DVB-T - HW Version 005.002.006 |
| 0x01050207 | TVM DVB-T - HW Version 005.002.007 |
| 0x01050208 | TVM DVB-T - HW Version 005.002.008 |
| 0x01050209 | TVM DVB-T - HW Version 005.002.009 |
| 0x01050300 | TVM DVB-T - HW Version 005.003.000 |
| 0x01050301 | TVM DVB-T - HW Version 005.003.001 |
| 0x01050302 | TVM DVB-T - HW Version 005.003.002 |
| 0x01050303 | TVM DVB-T - HW Version 005.003.003 |
| 0x01050304 | TVM DVB-T - HW Version 005.003.004 |
| 0x01050305 | TVM DVB-T - HW Version 005.003.005 |
| 0x01050306 | TVM DVB-T - HW Version 005.003.006 |
| 0x01050307 | TVM DVB-T - HW Version 005.003.007 |
| 0x01050308 | TVM DVB-T - HW Version 005.003.008 |
| 0x01050309 | TVM DVB-T - HW Version 005.003.009 |
| 0x01050400 | TVM DVB-T - HW Version 005.004.000 |
| 0x01050401 | TVM DVB-T - HW Version 005.004.001 |
| 0x01050402 | TVM DVB-T - HW Version 005.004.002 |
| 0x01050403 | TVM DVB-T - HW Version 005.004.003 |
| 0x01050404 | TVM DVB-T - HW Version 005.004.004 |
| 0x01050405 | TVM DVB-T - HW Version 005.004.005 |
| 0x01050406 | TVM DVB-T - HW Version 005.004.006 |
| 0x01050407 | TVM DVB-T - HW Version 005.004.007 |
| 0x01050408 | TVM DVB-T - HW Version 005.004.008 |
| 0x01050409 | TVM DVB-T - HW Version 005.004.009 |
| 0x01050500 | TVM DVB-T - HW Version 005.005.000 |
| 0x01050501 | TVM DVB-T - HW Version 005.005.001 |
| 0x01050502 | TVM DVB-T - HW Version 005.005.002 |
| 0x01050503 | TVM DVB-T - HW Version 005.005.003 |
| 0x01050504 | TVM DVB-T - HW Version 005.005.004 |
| 0x01050505 | TVM DVB-T - HW Version 005.005.005 |
| 0x01050506 | TVM DVB-T - HW Version 005.005.006 |
| 0x01050507 | TVM DVB-T - HW Version 005.005.007 |
| 0x01050508 | TVM DVB-T - HW Version 005.005.008 |
| 0x01050509 | TVM DVB-T - HW Version 005.005.009 |
| 0x01050600 | TVM DVB-T - HW Version 005.006.000 |
| 0x01050601 | TVM DVB-T - HW Version 005.006.001 |
| 0x01050602 | TVM DVB-T - HW Version 005.006.002 |
| 0x01050603 | TVM DVB-T - HW Version 005.006.003 |
| 0x01050604 | TVM DVB-T - HW Version 005.006.004 |
| 0x01050605 | TVM DVB-T - HW Version 005.006.005 |
| 0x01050606 | TVM DVB-T - HW Version 005.006.006 |
| 0x01050607 | TVM DVB-T - HW Version 005.006.007 |
| 0x01050608 | TVM DVB-T - HW Version 005.006.008 |
| 0x01050609 | TVM DVB-T - HW Version 005.006.009 |
| 0x01050700 | TVM DVB-T - HW Version 005.007.000 |
| 0x01050701 | TVM DVB-T - HW Version 005.007.001 |
| 0x01050702 | TVM DVB-T - HW Version 005.007.002 |
| 0x01050703 | TVM DVB-T - HW Version 005.007.003 |
| 0x01050704 | TVM DVB-T - HW Version 005.007.004 |
| 0x01050705 | TVM DVB-T - HW Version 005.007.005 |
| 0x01050706 | TVM DVB-T - HW Version 005.007.006 |
| 0x01050707 | TVM DVB-T - HW Version 005.007.007 |
| 0x01050708 | TVM DVB-T - HW Version 005.007.008 |
| 0x01050709 | TVM DVB-T - HW Version 005.007.009 |
| 0x01050800 | TVM DVB-T - HW Version 005.008.000 |
| 0x01050801 | TVM DVB-T - HW Version 005.008.001 |
| 0x01050802 | TVM DVB-T - HW Version 005.008.002 |
| 0x01050803 | TVM DVB-T - HW Version 005.008.003 |
| 0x01050804 | TVM DVB-T - HW Version 005.008.004 |
| 0x01050805 | TVM DVB-T - HW Version 005.008.005 |
| 0x01050806 | TVM DVB-T - HW Version 005.008.006 |
| 0x01050807 | TVM DVB-T - HW Version 005.008.007 |
| 0x01050808 | TVM DVB-T - HW Version 005.008.008 |
| 0x01050809 | TVM DVB-T - HW Version 005.008.009 |
| 0x01050900 | TVM DVB-T - HW Version 005.009.000 |
| 0x01050901 | TVM DVB-T - HW Version 005.009.001 |
| 0x01050902 | TVM DVB-T - HW Version 005.009.002 |
| 0x01050903 | TVM DVB-T - HW Version 005.009.003 |
| 0x01050904 | TVM DVB-T - HW Version 005.009.004 |
| 0x01050905 | TVM DVB-T - HW Version 005.009.005 |
| 0x01050906 | TVM DVB-T - HW Version 005.009.006 |
| 0x01050907 | TVM DVB-T - HW Version 005.009.007 |
| 0x01050908 | TVM DVB-T - HW Version 005.009.008 |
| 0x01050909 | TVM DVB-T - HW Version 005.009.009 |
| 0x01060000 | TVM DVB-T - HW Version 006.000.000 |
| 0x01060001 | TVM DVB-T - HW Version 006.000.001 |
| 0x01060002 | TVM DVB-T - HW Version 006.000.002 |
| 0x01060003 | TVM DVB-T - HW Version 006.000.003 |
| 0x01060004 | TVM DVB-T - HW Version 006.000.004 |
| 0x01060005 | TVM DVB-T - HW Version 006.000.005 |
| 0x01060006 | TVM DVB-T - HW Version 006.000.006 |
| 0x01060007 | TVM DVB-T - HW Version 006.000.007 |
| 0x01060008 | TVM DVB-T - HW Version 006.000.008 |
| 0x01060009 | TVM DVB-T - HW Version 006.000.009 |
| 0x01060100 | TVM DVB-T - HW Version 006.001.000 |
| 0x01060101 | TVM DVB-T - HW Version 006.001.001 |
| 0x01060102 | TVM DVB-T - HW Version 006.001.002 |
| 0x01060103 | TVM DVB-T - HW Version 006.001.003 |
| 0x01060104 | TVM DVB-T - HW Version 006.001.004 |
| 0x01060105 | TVM DVB-T - HW Version 006.001.005 |
| 0x01060106 | TVM DVB-T - HW Version 006.001.006 |
| 0x01060107 | TVM DVB-T - HW Version 006.001.007 |
| 0x01060108 | TVM DVB-T - HW Version 006.001.008 |
| 0x01060109 | TVM DVB-T - HW Version 006.001.009 |
| 0x01060200 | TVM DVB-T - HW Version 006.002.000 |
| 0x01060201 | TVM DVB-T - HW Version 006.002.001 |
| 0x01060202 | TVM DVB-T - HW Version 006.002.002 |
| 0x01060203 | TVM DVB-T - HW Version 006.002.003 |
| 0x01060204 | TVM DVB-T - HW Version 006.002.004 |
| 0x01060205 | TVM DVB-T - HW Version 006.002.005 |
| 0x01060206 | TVM DVB-T - HW Version 006.002.006 |
| 0x01060207 | TVM DVB-T - HW Version 006.002.007 |
| 0x01060208 | TVM DVB-T - HW Version 006.002.008 |
| 0x01060209 | TVM DVB-T - HW Version 006.002.009 |
| 0x01060300 | TVM DVB-T - HW Version 006.003.000 |
| 0x01060301 | TVM DVB-T - HW Version 006.003.001 |
| 0x01060302 | TVM DVB-T - HW Version 006.003.002 |
| 0x01060303 | TVM DVB-T - HW Version 006.003.003 |
| 0x01060304 | TVM DVB-T - HW Version 006.003.004 |
| 0x01060305 | TVM DVB-T - HW Version 006.003.005 |
| 0x01060306 | TVM DVB-T - HW Version 006.003.006 |
| 0x01060307 | TVM DVB-T - HW Version 006.003.007 |
| 0x01060308 | TVM DVB-T - HW Version 006.003.008 |
| 0x01060309 | TVM DVB-T - HW Version 006.003.009 |
| 0x01060400 | TVM DVB-T - HW Version 006.004.000 |
| 0x01060401 | TVM DVB-T - HW Version 006.004.001 |
| 0x01060402 | TVM DVB-T - HW Version 006.004.002 |
| 0x01060403 | TVM DVB-T - HW Version 006.004.003 |
| 0x01060404 | TVM DVB-T - HW Version 006.004.004 |
| 0x01060405 | TVM DVB-T - HW Version 006.004.005 |
| 0x01060406 | TVM DVB-T - HW Version 006.004.006 |
| 0x01060407 | TVM DVB-T - HW Version 006.004.007 |
| 0x01060408 | TVM DVB-T - HW Version 006.004.008 |
| 0x01060409 | TVM DVB-T - HW Version 006.004.009 |
| 0x01060500 | TVM DVB-T - HW Version 006.005.000 |
| 0x01060501 | TVM DVB-T - HW Version 006.005.001 |
| 0x01060502 | TVM DVB-T - HW Version 006.005.002 |
| 0x01060503 | TVM DVB-T - HW Version 006.005.003 |
| 0x01060504 | TVM DVB-T - HW Version 006.005.004 |
| 0x01060505 | TVM DVB-T - HW Version 006.005.005 |
| 0x01060506 | TVM DVB-T - HW Version 006.005.006 |
| 0x01060507 | TVM DVB-T - HW Version 006.005.007 |
| 0x01060508 | TVM DVB-T - HW Version 006.005.008 |
| 0x01060509 | TVM DVB-T - HW Version 006.005.009 |
| 0x01060600 | TVM DVB-T - HW Version 006.006.000 |
| 0x01060601 | TVM DVB-T - HW Version 006.006.001 |
| 0x01060602 | TVM DVB-T - HW Version 006.006.002 |
| 0x01060603 | TVM DVB-T - HW Version 006.006.003 |
| 0x01060604 | TVM DVB-T - HW Version 006.006.004 |
| 0x01060605 | TVM DVB-T - HW Version 006.006.005 |
| 0x01060606 | TVM DVB-T - HW Version 006.006.006 |
| 0x01060607 | TVM DVB-T - HW Version 006.006.007 |
| 0x01060608 | TVM DVB-T - HW Version 006.006.008 |
| 0x01060609 | TVM DVB-T - HW Version 006.006.009 |
| 0x01060700 | TVM DVB-T - HW Version 006.007.000 |
| 0x01060701 | TVM DVB-T - HW Version 006.007.001 |
| 0x01060702 | TVM DVB-T - HW Version 006.007.002 |
| 0x01060703 | TVM DVB-T - HW Version 006.007.003 |
| 0x01060704 | TVM DVB-T - HW Version 006.007.004 |
| 0x01060705 | TVM DVB-T - HW Version 006.007.005 |
| 0x01060706 | TVM DVB-T - HW Version 006.007.006 |
| 0x01060707 | TVM DVB-T - HW Version 006.007.007 |
| 0x01060708 | TVM DVB-T - HW Version 006.007.008 |
| 0x01060709 | TVM DVB-T - HW Version 006.007.009 |
| 0x01060800 | TVM DVB-T - HW Version 006.008.000 |
| 0x01060801 | TVM DVB-T - HW Version 006.008.001 |
| 0x01060802 | TVM DVB-T - HW Version 006.008.002 |
| 0x01060803 | TVM DVB-T - HW Version 006.008.003 |
| 0x01060804 | TVM DVB-T - HW Version 006.008.004 |
| 0x01060805 | TVM DVB-T - HW Version 006.008.005 |
| 0x01060806 | TVM DVB-T - HW Version 006.008.006 |
| 0x01060807 | TVM DVB-T - HW Version 006.008.007 |
| 0x01060808 | TVM DVB-T - HW Version 006.008.008 |
| 0x01060809 | TVM DVB-T - HW Version 006.008.009 |
| 0x01060900 | TVM DVB-T - HW Version 006.009.000 |
| 0x01060901 | TVM DVB-T - HW Version 006.009.001 |
| 0x01060902 | TVM DVB-T - HW Version 006.009.002 |
| 0x01060903 | TVM DVB-T - HW Version 006.009.003 |
| 0x01060904 | TVM DVB-T - HW Version 006.009.004 |
| 0x01060905 | TVM DVB-T - HW Version 006.009.005 |
| 0x01060906 | TVM DVB-T - HW Version 006.009.006 |
| 0x01060907 | TVM DVB-T - HW Version 006.009.007 |
| 0x01060908 | TVM DVB-T - HW Version 006.009.008 |
| 0x01060909 | TVM DVB-T - HW Version 006.009.009 |
| 0x01070000 | TVM DVB-T - HW Version 007.000.000 |
| 0x01070001 | TVM DVB-T - HW Version 007.000.001 |
| 0x01070002 | TVM DVB-T - HW Version 007.000.002 |
| 0x01070003 | TVM DVB-T - HW Version 007.000.003 |
| 0x01070004 | TVM DVB-T - HW Version 007.000.004 |
| 0x01070005 | TVM DVB-T - HW Version 007.000.005 |
| 0x01070006 | TVM DVB-T - HW Version 007.000.006 |
| 0x01070007 | TVM DVB-T - HW Version 007.000.007 |
| 0x01070008 | TVM DVB-T - HW Version 007.000.008 |
| 0x01070009 | TVM DVB-T - HW Version 007.000.009 |
| 0x01070100 | TVM DVB-T - HW Version 007.001.000 |
| 0x01070101 | TVM DVB-T - HW Version 007.001.001 |
| 0x01070102 | TVM DVB-T - HW Version 007.001.002 |
| 0x01070103 | TVM DVB-T - HW Version 007.001.003 |
| 0x01070104 | TVM DVB-T - HW Version 007.001.004 |
| 0x01070105 | TVM DVB-T - HW Version 007.001.005 |
| 0x01070106 | TVM DVB-T - HW Version 007.001.006 |
| 0x01070107 | TVM DVB-T - HW Version 007.001.007 |
| 0x01070108 | TVM DVB-T - HW Version 007.001.008 |
| 0x01070109 | TVM DVB-T - HW Version 007.001.009 |
| 0x01070200 | TVM DVB-T - HW Version 007.002.000 |
| 0x01070201 | TVM DVB-T - HW Version 007.002.001 |
| 0x01070202 | TVM DVB-T - HW Version 007.002.002 |
| 0x01070203 | TVM DVB-T - HW Version 007.002.003 |
| 0x01070204 | TVM DVB-T - HW Version 007.002.004 |
| 0x01070205 | TVM DVB-T - HW Version 007.002.005 |
| 0x01070206 | TVM DVB-T - HW Version 007.002.006 |
| 0x01070207 | TVM DVB-T - HW Version 007.002.007 |
| 0x01070208 | TVM DVB-T - HW Version 007.002.008 |
| 0x01070209 | TVM DVB-T - HW Version 007.002.009 |
| 0x01070300 | TVM DVB-T - HW Version 007.003.000 |
| 0x01070301 | TVM DVB-T - HW Version 007.003.001 |
| 0x01070302 | TVM DVB-T - HW Version 007.003.002 |
| 0x01070303 | TVM DVB-T - HW Version 007.003.003 |
| 0x01070304 | TVM DVB-T - HW Version 007.003.004 |
| 0x01070305 | TVM DVB-T - HW Version 007.003.005 |
| 0x01070306 | TVM DVB-T - HW Version 007.003.006 |
| 0x01070307 | TVM DVB-T - HW Version 007.003.007 |
| 0x01070308 | TVM DVB-T - HW Version 007.003.008 |
| 0x01070309 | TVM DVB-T - HW Version 007.003.009 |
| 0x01070400 | TVM DVB-T - HW Version 007.004.000 |
| 0x01070401 | TVM DVB-T - HW Version 007.004.001 |
| 0x01070402 | TVM DVB-T - HW Version 007.004.002 |
| 0x01070403 | TVM DVB-T - HW Version 007.004.003 |
| 0x01070404 | TVM DVB-T - HW Version 007.004.004 |
| 0x01070405 | TVM DVB-T - HW Version 007.004.005 |
| 0x01070406 | TVM DVB-T - HW Version 007.004.006 |
| 0x01070407 | TVM DVB-T - HW Version 007.004.007 |
| 0x01070408 | TVM DVB-T - HW Version 007.004.008 |
| 0x01070409 | TVM DVB-T - HW Version 007.004.009 |
| 0x01070500 | TVM DVB-T - HW Version 007.005.000 |
| 0x01070501 | TVM DVB-T - HW Version 007.005.001 |
| 0x01070502 | TVM DVB-T - HW Version 007.005.002 |
| 0x01070503 | TVM DVB-T - HW Version 007.005.003 |
| 0x01070504 | TVM DVB-T - HW Version 007.005.004 |
| 0x01070505 | TVM DVB-T - HW Version 007.005.005 |
| 0x01070506 | TVM DVB-T - HW Version 007.005.006 |
| 0x01070507 | TVM DVB-T - HW Version 007.005.007 |
| 0x01070508 | TVM DVB-T - HW Version 007.005.008 |
| 0x01070509 | TVM DVB-T - HW Version 007.005.009 |
| 0x01070600 | TVM DVB-T - HW Version 007.006.000 |
| 0x01070601 | TVM DVB-T - HW Version 007.006.001 |
| 0x01070602 | TVM DVB-T - HW Version 007.006.002 |
| 0x01070603 | TVM DVB-T - HW Version 007.006.003 |
| 0x01070604 | TVM DVB-T - HW Version 007.006.004 |
| 0x01070605 | TVM DVB-T - HW Version 007.006.005 |
| 0x01070606 | TVM DVB-T - HW Version 007.006.006 |
| 0x01070607 | TVM DVB-T - HW Version 007.006.007 |
| 0x01070608 | TVM DVB-T - HW Version 007.006.008 |
| 0x01070609 | TVM DVB-T - HW Version 007.006.009 |
| 0x01070700 | TVM DVB-T - HW Version 007.007.000 |
| 0x01070701 | TVM DVB-T - HW Version 007.007.001 |
| 0x01070702 | TVM DVB-T - HW Version 007.007.002 |
| 0x01070703 | TVM DVB-T - HW Version 007.007.003 |
| 0x01070704 | TVM DVB-T - HW Version 007.007.004 |
| 0x01070705 | TVM DVB-T - HW Version 007.007.005 |
| 0x01070706 | TVM DVB-T - HW Version 007.007.006 |
| 0x01070707 | TVM DVB-T - HW Version 007.007.007 |
| 0x01070708 | TVM DVB-T - HW Version 007.007.008 |
| 0x01070709 | TVM DVB-T - HW Version 007.007.009 |
| 0x01070800 | TVM DVB-T - HW Version 007.008.000 |
| 0x01070801 | TVM DVB-T - HW Version 007.008.001 |
| 0x01070802 | TVM DVB-T - HW Version 007.008.002 |
| 0x01070803 | TVM DVB-T - HW Version 007.008.003 |
| 0x01070804 | TVM DVB-T - HW Version 007.008.004 |
| 0x01070805 | TVM DVB-T - HW Version 007.008.005 |
| 0x01070806 | TVM DVB-T - HW Version 007.008.006 |
| 0x01070807 | TVM DVB-T - HW Version 007.008.007 |
| 0x01070808 | TVM DVB-T - HW Version 007.008.008 |
| 0x01070809 | TVM DVB-T - HW Version 007.008.009 |
| 0x01070900 | TVM DVB-T - HW Version 007.009.000 |
| 0x01070901 | TVM DVB-T - HW Version 007.009.001 |
| 0x01070902 | TVM DVB-T - HW Version 007.009.002 |
| 0x01070903 | TVM DVB-T - HW Version 007.009.003 |
| 0x01070904 | TVM DVB-T - HW Version 007.009.004 |
| 0x01070905 | TVM DVB-T - HW Version 007.009.005 |
| 0x01070906 | TVM DVB-T - HW Version 007.009.006 |
| 0x01070907 | TVM DVB-T - HW Version 007.009.007 |
| 0x01070908 | TVM DVB-T - HW Version 007.009.008 |
| 0x01070909 | TVM DVB-T - HW Version 007.009.009 |
| 0x01080000 | TVM DVB-T - HW Version 008.000.000 |
| 0x01080001 | TVM DVB-T - HW Version 008.000.001 |
| 0x01080002 | TVM DVB-T - HW Version 008.000.002 |
| 0x01080003 | TVM DVB-T - HW Version 008.000.003 |
| 0x01080004 | TVM DVB-T - HW Version 008.000.004 |
| 0x01080005 | TVM DVB-T - HW Version 008.000.005 |
| 0x01080006 | TVM DVB-T - HW Version 008.000.006 |
| 0x01080007 | TVM DVB-T - HW Version 008.000.007 |
| 0x01080008 | TVM DVB-T - HW Version 008.000.008 |
| 0x01080009 | TVM DVB-T - HW Version 008.000.009 |
| 0x01080100 | TVM DVB-T - HW Version 008.001.000 |
| 0x01080101 | TVM DVB-T - HW Version 008.001.001 |
| 0x01080102 | TVM DVB-T - HW Version 008.001.002 |
| 0x01080103 | TVM DVB-T - HW Version 008.001.003 |
| 0x01080104 | TVM DVB-T - HW Version 008.001.004 |
| 0x01080105 | TVM DVB-T - HW Version 008.001.005 |
| 0x01080106 | TVM DVB-T - HW Version 008.001.006 |
| 0x01080107 | TVM DVB-T - HW Version 008.001.007 |
| 0x01080108 | TVM DVB-T - HW Version 008.001.008 |
| 0x01080109 | TVM DVB-T - HW Version 008.001.009 |
| 0x01080200 | TVM DVB-T - HW Version 008.002.000 |
| 0x01080201 | TVM DVB-T - HW Version 008.002.001 |
| 0x01080202 | TVM DVB-T - HW Version 008.002.002 |
| 0x01080203 | TVM DVB-T - HW Version 008.002.003 |
| 0x01080204 | TVM DVB-T - HW Version 008.002.004 |
| 0x01080205 | TVM DVB-T - HW Version 008.002.005 |
| 0x01080206 | TVM DVB-T - HW Version 008.002.006 |
| 0x01080207 | TVM DVB-T - HW Version 008.002.007 |
| 0x01080208 | TVM DVB-T - HW Version 008.002.008 |
| 0x01080209 | TVM DVB-T - HW Version 008.002.009 |
| 0x01080300 | TVM DVB-T - HW Version 008.003.000 |
| 0x01080301 | TVM DVB-T - HW Version 008.003.001 |
| 0x01080302 | TVM DVB-T - HW Version 008.003.002 |
| 0x01080303 | TVM DVB-T - HW Version 008.003.003 |
| 0x01080304 | TVM DVB-T - HW Version 008.003.004 |
| 0x01080305 | TVM DVB-T - HW Version 008.003.005 |
| 0x01080306 | TVM DVB-T - HW Version 008.003.006 |
| 0x01080307 | TVM DVB-T - HW Version 008.003.007 |
| 0x01080308 | TVM DVB-T - HW Version 008.003.008 |
| 0x01080309 | TVM DVB-T - HW Version 008.003.009 |
| 0x01080400 | TVM DVB-T - HW Version 008.004.000 |
| 0x01080401 | TVM DVB-T - HW Version 008.004.001 |
| 0x01080402 | TVM DVB-T - HW Version 008.004.002 |
| 0x01080403 | TVM DVB-T - HW Version 008.004.003 |
| 0x01080404 | TVM DVB-T - HW Version 008.004.004 |
| 0x01080405 | TVM DVB-T - HW Version 008.004.005 |
| 0x01080406 | TVM DVB-T - HW Version 008.004.006 |
| 0x01080407 | TVM DVB-T - HW Version 008.004.007 |
| 0x01080408 | TVM DVB-T - HW Version 008.004.008 |
| 0x01080409 | TVM DVB-T - HW Version 008.004.009 |
| 0x01080500 | TVM DVB-T - HW Version 008.005.000 |
| 0x01080501 | TVM DVB-T - HW Version 008.005.001 |
| 0x01080502 | TVM DVB-T - HW Version 008.005.002 |
| 0x01080503 | TVM DVB-T - HW Version 008.005.003 |
| 0x01080504 | TVM DVB-T - HW Version 008.005.004 |
| 0x01080505 | TVM DVB-T - HW Version 008.005.005 |
| 0x01080506 | TVM DVB-T - HW Version 008.005.006 |
| 0x01080507 | TVM DVB-T - HW Version 008.005.007 |
| 0x01080508 | TVM DVB-T - HW Version 008.005.008 |
| 0x01080509 | TVM DVB-T - HW Version 008.005.009 |
| 0x01080600 | TVM DVB-T - HW Version 008.006.000 |
| 0x01080601 | TVM DVB-T - HW Version 008.006.001 |
| 0x01080602 | TVM DVB-T - HW Version 008.006.002 |
| 0x01080603 | TVM DVB-T - HW Version 008.006.003 |
| 0x01080604 | TVM DVB-T - HW Version 008.006.004 |
| 0x01080605 | TVM DVB-T - HW Version 008.006.005 |
| 0x01080606 | TVM DVB-T - HW Version 008.006.006 |
| 0x01080607 | TVM DVB-T - HW Version 008.006.007 |
| 0x01080608 | TVM DVB-T - HW Version 008.006.008 |
| 0x01080609 | TVM DVB-T - HW Version 008.006.009 |
| 0x01080700 | TVM DVB-T - HW Version 008.007.000 |
| 0x01080701 | TVM DVB-T - HW Version 008.007.001 |
| 0x01080702 | TVM DVB-T - HW Version 008.007.002 |
| 0x01080703 | TVM DVB-T - HW Version 008.007.003 |
| 0x01080704 | TVM DVB-T - HW Version 008.007.004 |
| 0x01080705 | TVM DVB-T - HW Version 008.007.005 |
| 0x01080706 | TVM DVB-T - HW Version 008.007.006 |
| 0x01080707 | TVM DVB-T - HW Version 008.007.007 |
| 0x01080708 | TVM DVB-T - HW Version 008.007.008 |
| 0x01080709 | TVM DVB-T - HW Version 008.007.009 |
| 0x01080800 | TVM DVB-T - HW Version 008.008.000 |
| 0x01080801 | TVM DVB-T - HW Version 008.008.001 |
| 0x01080802 | TVM DVB-T - HW Version 008.008.002 |
| 0x01080803 | TVM DVB-T - HW Version 008.008.003 |
| 0x01080804 | TVM DVB-T - HW Version 008.008.004 |
| 0x01080805 | TVM DVB-T - HW Version 008.008.005 |
| 0x01080806 | TVM DVB-T - HW Version 008.008.006 |
| 0x01080807 | TVM DVB-T - HW Version 008.008.007 |
| 0x01080808 | TVM DVB-T - HW Version 008.008.008 |
| 0x01080809 | TVM DVB-T - HW Version 008.008.009 |
| 0x01080900 | TVM DVB-T - HW Version 008.009.000 |
| 0x01080901 | TVM DVB-T - HW Version 008.009.001 |
| 0x01080902 | TVM DVB-T - HW Version 008.009.002 |
| 0x01080903 | TVM DVB-T - HW Version 008.009.003 |
| 0x01080904 | TVM DVB-T - HW Version 008.009.004 |
| 0x01080905 | TVM DVB-T - HW Version 008.009.005 |
| 0x01080906 | TVM DVB-T - HW Version 008.009.006 |
| 0x01080907 | TVM DVB-T - HW Version 008.009.007 |
| 0x01080908 | TVM DVB-T - HW Version 008.009.008 |
| 0x01080909 | TVM DVB-T - HW Version 008.009.009 |
| 0x01090000 | TVM DVB-T - HW Version 009.000.000 |
| 0x01090001 | TVM DVB-T - HW Version 009.000.001 |
| 0x01090002 | TVM DVB-T - HW Version 009.000.002 |
| 0x01090003 | TVM DVB-T - HW Version 009.000.003 |
| 0x01090004 | TVM DVB-T - HW Version 009.000.004 |
| 0x01090005 | TVM DVB-T - HW Version 009.000.005 |
| 0x01090006 | TVM DVB-T - HW Version 009.000.006 |
| 0x01090007 | TVM DVB-T - HW Version 009.000.007 |
| 0x01090008 | TVM DVB-T - HW Version 009.000.008 |
| 0x01090009 | TVM DVB-T - HW Version 009.000.009 |
| 0x01090100 | TVM DVB-T - HW Version 009.001.000 |
| 0x01090101 | TVM DVB-T - HW Version 009.001.001 |
| 0x01090102 | TVM DVB-T - HW Version 009.001.002 |
| 0x01090103 | TVM DVB-T - HW Version 009.001.003 |
| 0x01090104 | TVM DVB-T - HW Version 009.001.004 |
| 0x01090105 | TVM DVB-T - HW Version 009.001.005 |
| 0x01090106 | TVM DVB-T - HW Version 009.001.006 |
| 0x01090107 | TVM DVB-T - HW Version 009.001.007 |
| 0x01090108 | TVM DVB-T - HW Version 009.001.008 |
| 0x01090109 | TVM DVB-T - HW Version 009.001.009 |
| 0x01090200 | TVM DVB-T - HW Version 009.002.000 |
| 0x01090201 | TVM DVB-T - HW Version 009.002.001 |
| 0x01090202 | TVM DVB-T - HW Version 009.002.002 |
| 0x01090203 | TVM DVB-T - HW Version 009.002.003 |
| 0x01090204 | TVM DVB-T - HW Version 009.002.004 |
| 0x01090205 | TVM DVB-T - HW Version 009.002.005 |
| 0x01090206 | TVM DVB-T - HW Version 009.002.006 |
| 0x01090207 | TVM DVB-T - HW Version 009.002.007 |
| 0x01090208 | TVM DVB-T - HW Version 009.002.008 |
| 0x01090209 | TVM DVB-T - HW Version 009.002.009 |
| 0x01090300 | TVM DVB-T - HW Version 009.003.000 |
| 0x01090301 | TVM DVB-T - HW Version 009.003.001 |
| 0x01090302 | TVM DVB-T - HW Version 009.003.002 |
| 0x01090303 | TVM DVB-T - HW Version 009.003.003 |
| 0x01090304 | TVM DVB-T - HW Version 009.003.004 |
| 0x01090305 | TVM DVB-T - HW Version 009.003.005 |
| 0x01090306 | TVM DVB-T - HW Version 009.003.006 |
| 0x01090307 | TVM DVB-T - HW Version 009.003.007 |
| 0x01090308 | TVM DVB-T - HW Version 009.003.008 |
| 0x01090309 | TVM DVB-T - HW Version 009.003.009 |
| 0x01090400 | TVM DVB-T - HW Version 009.004.000 |
| 0x01090401 | TVM DVB-T - HW Version 009.004.001 |
| 0x01090402 | TVM DVB-T - HW Version 009.004.002 |
| 0x01090403 | TVM DVB-T - HW Version 009.004.003 |
| 0x01090404 | TVM DVB-T - HW Version 009.004.004 |
| 0x01090405 | TVM DVB-T - HW Version 009.004.005 |
| 0x01090406 | TVM DVB-T - HW Version 009.004.006 |
| 0x01090407 | TVM DVB-T - HW Version 009.004.007 |
| 0x01090408 | TVM DVB-T - HW Version 009.004.008 |
| 0x01090409 | TVM DVB-T - HW Version 009.004.009 |
| 0x01090500 | TVM DVB-T - HW Version 009.005.000 |
| 0x01090501 | TVM DVB-T - HW Version 009.005.001 |
| 0x01090502 | TVM DVB-T - HW Version 009.005.002 |
| 0x01090503 | TVM DVB-T - HW Version 009.005.003 |
| 0x01090504 | TVM DVB-T - HW Version 009.005.004 |
| 0x01090505 | TVM DVB-T - HW Version 009.005.005 |
| 0x01090506 | TVM DVB-T - HW Version 009.005.006 |
| 0x01090507 | TVM DVB-T - HW Version 009.005.007 |
| 0x01090508 | TVM DVB-T - HW Version 009.005.008 |
| 0x01090509 | TVM DVB-T - HW Version 009.005.009 |
| 0x01090600 | TVM DVB-T - HW Version 009.006.000 |
| 0x01090601 | TVM DVB-T - HW Version 009.006.001 |
| 0x01090602 | TVM DVB-T - HW Version 009.006.002 |
| 0x01090603 | TVM DVB-T - HW Version 009.006.003 |
| 0x01090604 | TVM DVB-T - HW Version 009.006.004 |
| 0x01090605 | TVM DVB-T - HW Version 009.006.005 |
| 0x01090606 | TVM DVB-T - HW Version 009.006.006 |
| 0x01090607 | TVM DVB-T - HW Version 009.006.007 |
| 0x01090608 | TVM DVB-T - HW Version 009.006.008 |
| 0x01090609 | TVM DVB-T - HW Version 009.006.009 |
| 0x01090700 | TVM DVB-T - HW Version 009.007.000 |
| 0x01090701 | TVM DVB-T - HW Version 009.007.001 |
| 0x01090702 | TVM DVB-T - HW Version 009.007.002 |
| 0x01090703 | TVM DVB-T - HW Version 009.007.003 |
| 0x01090704 | TVM DVB-T - HW Version 009.007.004 |
| 0x01090705 | TVM DVB-T - HW Version 009.007.005 |
| 0x01090706 | TVM DVB-T - HW Version 009.007.006 |
| 0x01090707 | TVM DVB-T - HW Version 009.007.007 |
| 0x01090708 | TVM DVB-T - HW Version 009.007.008 |
| 0x01090709 | TVM DVB-T - HW Version 009.007.009 |
| 0x01090800 | TVM DVB-T - HW Version 009.008.000 |
| 0x01090801 | TVM DVB-T - HW Version 009.008.001 |
| 0x01090802 | TVM DVB-T - HW Version 009.008.002 |
| 0x01090803 | TVM DVB-T - HW Version 009.008.003 |
| 0x01090804 | TVM DVB-T - HW Version 009.008.004 |
| 0x01090805 | TVM DVB-T - HW Version 009.008.005 |
| 0x01090806 | TVM DVB-T - HW Version 009.008.006 |
| 0x01090807 | TVM DVB-T - HW Version 009.008.007 |
| 0x01090808 | TVM DVB-T - HW Version 009.008.008 |
| 0x01090809 | TVM DVB-T - HW Version 009.008.009 |
| 0x01090900 | TVM DVB-T - HW Version 009.009.000 |
| 0x01090901 | TVM DVB-T - HW Version 009.009.001 |
| 0x01090902 | TVM DVB-T - HW Version 009.009.002 |
| 0x01090903 | TVM DVB-T - HW Version 009.009.003 |
| 0x01090904 | TVM DVB-T - HW Version 009.009.004 |
| 0x01090905 | TVM DVB-T - HW Version 009.009.005 |
| 0x01090906 | TVM DVB-T - HW Version 009.009.006 |
| 0x01090907 | TVM DVB-T - HW Version 009.009.007 |
| 0x01090908 | TVM DVB-T - HW Version 009.009.008 |
| 0x01090909 | TVM DVB-T - HW Version 009.009.009 |
| 0x02050000 | TVM DVB-T RSE - HW Version 005.000.000 |
| 0x02050001 | TVM DVB-T RSE - HW Version 005.000.001 |
| 0x02050002 | TVM DVB-T RSE - HW Version 005.000.002 |
| 0x02050003 | TVM DVB-T RSE - HW Version 005.000.003 |
| 0x02050004 | TVM DVB-T RSE - HW Version 005.000.004 |
| 0x02050005 | TVM DVB-T RSE - HW Version 005.000.005 |
| 0x02050006 | TVM DVB-T RSE - HW Version 005.000.006 |
| 0x02050007 | TVM DVB-T RSE - HW Version 005.000.007 |
| 0x02050008 | TVM DVB-T RSE - HW Version 005.000.008 |
| 0x02050009 | TVM DVB-T RSE - HW Version 005.000.009 |
| 0x02050100 | TVM DVB-T RSE - HW Version 005.001.000 |
| 0x02050101 | TVM DVB-T RSE - HW Version 005.001.001 |
| 0x02050102 | TVM DVB-T RSE - HW Version 005.001.002 |
| 0x02050103 | TVM DVB-T RSE - HW Version 005.001.003 |
| 0x02050104 | TVM DVB-T RSE - HW Version 005.001.004 |
| 0x02050105 | TVM DVB-T RSE - HW Version 005.001.005 |
| 0x02050106 | TVM DVB-T RSE - HW Version 005.001.006 |
| 0x02050107 | TVM DVB-T RSE - HW Version 005.001.007 |
| 0x02050108 | TVM DVB-T RSE - HW Version 005.001.008 |
| 0x02050109 | TVM DVB-T RSE - HW Version 005.001.009 |
| 0x02050200 | TVM DVB-T RSE - HW Version 005.002.000 |
| 0x02050201 | TVM DVB-T RSE - HW Version 005.002.001 |
| 0x02050202 | TVM DVB-T RSE - HW Version 005.002.002 |
| 0x02050203 | TVM DVB-T RSE - HW Version 005.002.003 |
| 0x02050204 | TVM DVB-T RSE - HW Version 005.002.004 |
| 0x02050205 | TVM DVB-T RSE - HW Version 005.002.005 |
| 0x02050206 | TVM DVB-T RSE - HW Version 005.002.006 |
| 0x02050207 | TVM DVB-T RSE - HW Version 005.002.007 |
| 0x02050208 | TVM DVB-T RSE - HW Version 005.002.008 |
| 0x02050209 | TVM DVB-T RSE - HW Version 005.002.009 |
| 0x02050300 | TVM DVB-T RSE - HW Version 005.003.000 |
| 0x02050301 | TVM DVB-T RSE - HW Version 005.003.001 |
| 0x02050302 | TVM DVB-T RSE - HW Version 005.003.002 |
| 0x02050303 | TVM DVB-T RSE - HW Version 005.003.003 |
| 0x02050304 | TVM DVB-T RSE - HW Version 005.003.004 |
| 0x02050305 | TVM DVB-T RSE - HW Version 005.003.005 |
| 0x02050306 | TVM DVB-T RSE - HW Version 005.003.006 |
| 0x02050307 | TVM DVB-T RSE - HW Version 005.003.007 |
| 0x02050308 | TVM DVB-T RSE - HW Version 005.003.008 |
| 0x02050309 | TVM DVB-T RSE - HW Version 005.003.009 |
| 0x02050400 | TVM DVB-T RSE - HW Version 005.004.000 |
| 0x02050401 | TVM DVB-T RSE - HW Version 005.004.001 |
| 0x02050402 | TVM DVB-T RSE - HW Version 005.004.002 |
| 0x02050403 | TVM DVB-T RSE - HW Version 005.004.003 |
| 0x02050404 | TVM DVB-T RSE - HW Version 005.004.004 |
| 0x02050405 | TVM DVB-T RSE - HW Version 005.004.005 |
| 0x02050406 | TVM DVB-T RSE - HW Version 005.004.006 |
| 0x02050407 | TVM DVB-T RSE - HW Version 005.004.007 |
| 0x02050408 | TVM DVB-T RSE - HW Version 005.004.008 |
| 0x02050409 | TVM DVB-T RSE - HW Version 005.004.009 |
| 0x02050500 | TVM DVB-T RSE - HW Version 005.005.000 |
| 0x02050501 | TVM DVB-T RSE - HW Version 005.005.001 |
| 0x02050502 | TVM DVB-T RSE - HW Version 005.005.002 |
| 0x02050503 | TVM DVB-T RSE - HW Version 005.005.003 |
| 0x02050504 | TVM DVB-T RSE - HW Version 005.005.004 |
| 0x02050505 | TVM DVB-T RSE - HW Version 005.005.005 |
| 0x02050506 | TVM DVB-T RSE - HW Version 005.005.006 |
| 0x02050507 | TVM DVB-T RSE - HW Version 005.005.007 |
| 0x02050508 | TVM DVB-T RSE - HW Version 005.005.008 |
| 0x02050509 | TVM DVB-T RSE - HW Version 005.005.009 |
| 0x02050600 | TVM DVB-T RSE - HW Version 005.006.000 |
| 0x02050601 | TVM DVB-T RSE - HW Version 005.006.001 |
| 0x02050602 | TVM DVB-T RSE - HW Version 005.006.002 |
| 0x02050603 | TVM DVB-T RSE - HW Version 005.006.003 |
| 0x02050604 | TVM DVB-T RSE - HW Version 005.006.004 |
| 0x02050605 | TVM DVB-T RSE - HW Version 005.006.005 |
| 0x02050606 | TVM DVB-T RSE - HW Version 005.006.006 |
| 0x02050607 | TVM DVB-T RSE - HW Version 005.006.007 |
| 0x02050608 | TVM DVB-T RSE - HW Version 005.006.008 |
| 0x02050609 | TVM DVB-T RSE - HW Version 005.006.009 |
| 0x02050700 | TVM DVB-T RSE - HW Version 005.007.000 |
| 0x02050701 | TVM DVB-T RSE - HW Version 005.007.001 |
| 0x02050702 | TVM DVB-T RSE - HW Version 005.007.002 |
| 0x02050703 | TVM DVB-T RSE - HW Version 005.007.003 |
| 0x02050704 | TVM DVB-T RSE - HW Version 005.007.004 |
| 0x02050705 | TVM DVB-T RSE - HW Version 005.007.005 |
| 0x02050706 | TVM DVB-T RSE - HW Version 005.007.006 |
| 0x02050707 | TVM DVB-T RSE - HW Version 005.007.007 |
| 0x02050708 | TVM DVB-T RSE - HW Version 005.007.008 |
| 0x02050709 | TVM DVB-T RSE - HW Version 005.007.009 |
| 0x02050800 | TVM DVB-T RSE - HW Version 005.008.000 |
| 0x02050801 | TVM DVB-T RSE - HW Version 005.008.001 |
| 0x02050802 | TVM DVB-T RSE - HW Version 005.008.002 |
| 0x02050803 | TVM DVB-T RSE - HW Version 005.008.003 |
| 0x02050804 | TVM DVB-T RSE - HW Version 005.008.004 |
| 0x02050805 | TVM DVB-T RSE - HW Version 005.008.005 |
| 0x02050806 | TVM DVB-T RSE - HW Version 005.008.006 |
| 0x02050807 | TVM DVB-T RSE - HW Version 005.008.007 |
| 0x02050808 | TVM DVB-T RSE - HW Version 005.008.008 |
| 0x02050809 | TVM DVB-T RSE - HW Version 005.008.009 |
| 0x02050900 | TVM DVB-T RSE - HW Version 005.009.000 |
| 0x02050901 | TVM DVB-T RSE - HW Version 005.009.001 |
| 0x02050902 | TVM DVB-T RSE - HW Version 005.009.002 |
| 0x02050903 | TVM DVB-T RSE - HW Version 005.009.003 |
| 0x02050904 | TVM DVB-T RSE - HW Version 005.009.004 |
| 0x02050905 | TVM DVB-T RSE - HW Version 005.009.005 |
| 0x02050906 | TVM DVB-T RSE - HW Version 005.009.006 |
| 0x02050907 | TVM DVB-T RSE - HW Version 005.009.007 |
| 0x02050908 | TVM DVB-T RSE - HW Version 005.009.008 |
| 0x02050909 | TVM DVB-T RSE - HW Version 005.009.009 |
| 0x02060000 | TVM DVB-T RSE - HW Version 006.000.000 |
| 0x02060001 | TVM DVB-T RSE - HW Version 006.000.001 |
| 0x02060002 | TVM DVB-T RSE - HW Version 006.000.002 |
| 0x02060003 | TVM DVB-T RSE - HW Version 006.000.003 |
| 0x02060004 | TVM DVB-T RSE - HW Version 006.000.004 |
| 0x02060005 | TVM DVB-T RSE - HW Version 006.000.005 |
| 0x02060006 | TVM DVB-T RSE - HW Version 006.000.006 |
| 0x02060007 | TVM DVB-T RSE - HW Version 006.000.007 |
| 0x02060008 | TVM DVB-T RSE - HW Version 006.000.008 |
| 0x02060009 | TVM DVB-T RSE - HW Version 006.000.009 |
| 0x02060100 | TVM DVB-T RSE - HW Version 006.001.000 |
| 0x02060101 | TVM DVB-T RSE - HW Version 006.001.001 |
| 0x02060102 | TVM DVB-T RSE - HW Version 006.001.002 |
| 0x02060103 | TVM DVB-T RSE - HW Version 006.001.003 |
| 0x02060104 | TVM DVB-T RSE - HW Version 006.001.004 |
| 0x02060105 | TVM DVB-T RSE - HW Version 006.001.005 |
| 0x02060106 | TVM DVB-T RSE - HW Version 006.001.006 |
| 0x02060107 | TVM DVB-T RSE - HW Version 006.001.007 |
| 0x02060108 | TVM DVB-T RSE - HW Version 006.001.008 |
| 0x02060109 | TVM DVB-T RSE - HW Version 006.001.009 |
| 0x02060200 | TVM DVB-T RSE - HW Version 006.002.000 |
| 0x02060201 | TVM DVB-T RSE - HW Version 006.002.001 |
| 0x02060202 | TVM DVB-T RSE - HW Version 006.002.002 |
| 0x02060203 | TVM DVB-T RSE - HW Version 006.002.003 |
| 0x02060204 | TVM DVB-T RSE - HW Version 006.002.004 |
| 0x02060205 | TVM DVB-T RSE - HW Version 006.002.005 |
| 0x02060206 | TVM DVB-T RSE - HW Version 006.002.006 |
| 0x02060207 | TVM DVB-T RSE - HW Version 006.002.007 |
| 0x02060208 | TVM DVB-T RSE - HW Version 006.002.008 |
| 0x02060209 | TVM DVB-T RSE - HW Version 006.002.009 |
| 0x02060300 | TVM DVB-T RSE - HW Version 006.003.000 |
| 0x02060301 | TVM DVB-T RSE - HW Version 006.003.001 |
| 0x02060302 | TVM DVB-T RSE - HW Version 006.003.002 |
| 0x02060303 | TVM DVB-T RSE - HW Version 006.003.003 |
| 0x02060304 | TVM DVB-T RSE - HW Version 006.003.004 |
| 0x02060305 | TVM DVB-T RSE - HW Version 006.003.005 |
| 0x02060306 | TVM DVB-T RSE - HW Version 006.003.006 |
| 0x02060307 | TVM DVB-T RSE - HW Version 006.003.007 |
| 0x02060308 | TVM DVB-T RSE - HW Version 006.003.008 |
| 0x02060309 | TVM DVB-T RSE - HW Version 006.003.009 |
| 0x02060400 | TVM DVB-T RSE - HW Version 006.004.000 |
| 0x02060401 | TVM DVB-T RSE - HW Version 006.004.001 |
| 0x02060402 | TVM DVB-T RSE - HW Version 006.004.002 |
| 0x02060403 | TVM DVB-T RSE - HW Version 006.004.003 |
| 0x02060404 | TVM DVB-T RSE - HW Version 006.004.004 |
| 0x02060405 | TVM DVB-T RSE - HW Version 006.004.005 |
| 0x02060406 | TVM DVB-T RSE - HW Version 006.004.006 |
| 0x02060407 | TVM DVB-T RSE - HW Version 006.004.007 |
| 0x02060408 | TVM DVB-T RSE - HW Version 006.004.008 |
| 0x02060409 | TVM DVB-T RSE - HW Version 006.004.009 |
| 0x02060500 | TVM DVB-T RSE - HW Version 006.005.000 |
| 0x02060501 | TVM DVB-T RSE - HW Version 006.005.001 |
| 0x02060502 | TVM DVB-T RSE - HW Version 006.005.002 |
| 0x02060503 | TVM DVB-T RSE - HW Version 006.005.003 |
| 0x02060504 | TVM DVB-T RSE - HW Version 006.005.004 |
| 0x02060505 | TVM DVB-T RSE - HW Version 006.005.005 |
| 0x02060506 | TVM DVB-T RSE - HW Version 006.005.006 |
| 0x02060507 | TVM DVB-T RSE - HW Version 006.005.007 |
| 0x02060508 | TVM DVB-T RSE - HW Version 006.005.008 |
| 0x02060509 | TVM DVB-T RSE - HW Version 006.005.009 |
| 0x02060600 | TVM DVB-T RSE - HW Version 006.006.000 |
| 0x02060601 | TVM DVB-T RSE - HW Version 006.006.001 |
| 0x02060602 | TVM DVB-T RSE - HW Version 006.006.002 |
| 0x02060603 | TVM DVB-T RSE - HW Version 006.006.003 |
| 0x02060604 | TVM DVB-T RSE - HW Version 006.006.004 |
| 0x02060605 | TVM DVB-T RSE - HW Version 006.006.005 |
| 0x02060606 | TVM DVB-T RSE - HW Version 006.006.006 |
| 0x02060607 | TVM DVB-T RSE - HW Version 006.006.007 |
| 0x02060608 | TVM DVB-T RSE - HW Version 006.006.008 |
| 0x02060609 | TVM DVB-T RSE - HW Version 006.006.009 |
| 0x02060700 | TVM DVB-T RSE - HW Version 006.007.000 |
| 0x02060701 | TVM DVB-T RSE - HW Version 006.007.001 |
| 0x02060702 | TVM DVB-T RSE - HW Version 006.007.002 |
| 0x02060703 | TVM DVB-T RSE - HW Version 006.007.003 |
| 0x02060704 | TVM DVB-T RSE - HW Version 006.007.004 |
| 0x02060705 | TVM DVB-T RSE - HW Version 006.007.005 |
| 0x02060706 | TVM DVB-T RSE - HW Version 006.007.006 |
| 0x02060707 | TVM DVB-T RSE - HW Version 006.007.007 |
| 0x02060708 | TVM DVB-T RSE - HW Version 006.007.008 |
| 0x02060709 | TVM DVB-T RSE - HW Version 006.007.009 |
| 0x02060800 | TVM DVB-T RSE - HW Version 006.008.000 |
| 0x02060801 | TVM DVB-T RSE - HW Version 006.008.001 |
| 0x02060802 | TVM DVB-T RSE - HW Version 006.008.002 |
| 0x02060803 | TVM DVB-T RSE - HW Version 006.008.003 |
| 0x02060804 | TVM DVB-T RSE - HW Version 006.008.004 |
| 0x02060805 | TVM DVB-T RSE - HW Version 006.008.005 |
| 0x02060806 | TVM DVB-T RSE - HW Version 006.008.006 |
| 0x02060807 | TVM DVB-T RSE - HW Version 006.008.007 |
| 0x02060808 | TVM DVB-T RSE - HW Version 006.008.008 |
| 0x02060809 | TVM DVB-T RSE - HW Version 006.008.009 |
| 0x02060900 | TVM DVB-T RSE - HW Version 006.009.000 |
| 0x02060901 | TVM DVB-T RSE - HW Version 006.009.001 |
| 0x02060902 | TVM DVB-T RSE - HW Version 006.009.002 |
| 0x02060903 | TVM DVB-T RSE - HW Version 006.009.003 |
| 0x02060904 | TVM DVB-T RSE - HW Version 006.009.004 |
| 0x02060905 | TVM DVB-T RSE - HW Version 006.009.005 |
| 0x02060906 | TVM DVB-T RSE - HW Version 006.009.006 |
| 0x02060907 | TVM DVB-T RSE - HW Version 006.009.007 |
| 0x02060908 | TVM DVB-T RSE - HW Version 006.009.008 |
| 0x02060909 | TVM DVB-T RSE - HW Version 006.009.009 |
| 0x02070000 | TVM DVB-T RSE - HW Version 007.000.000 |
| 0x02070001 | TVM DVB-T RSE - HW Version 007.000.001 |
| 0x02070002 | TVM DVB-T RSE - HW Version 007.000.002 |
| 0x02070003 | TVM DVB-T RSE - HW Version 007.000.003 |
| 0x02070004 | TVM DVB-T RSE - HW Version 007.000.004 |
| 0x02070005 | TVM DVB-T RSE - HW Version 007.000.005 |
| 0x02070006 | TVM DVB-T RSE - HW Version 007.000.006 |
| 0x02070007 | TVM DVB-T RSE - HW Version 007.000.007 |
| 0x02070008 | TVM DVB-T RSE - HW Version 007.000.008 |
| 0x02070009 | TVM DVB-T RSE - HW Version 007.000.009 |
| 0x02070100 | TVM DVB-T RSE - HW Version 007.001.000 |
| 0x02070101 | TVM DVB-T RSE - HW Version 007.001.001 |
| 0x02070102 | TVM DVB-T RSE - HW Version 007.001.002 |
| 0x02070103 | TVM DVB-T RSE - HW Version 007.001.003 |
| 0x02070104 | TVM DVB-T RSE - HW Version 007.001.004 |
| 0x02070105 | TVM DVB-T RSE - HW Version 007.001.005 |
| 0x02070106 | TVM DVB-T RSE - HW Version 007.001.006 |
| 0x02070107 | TVM DVB-T RSE - HW Version 007.001.007 |
| 0x02070108 | TVM DVB-T RSE - HW Version 007.001.008 |
| 0x02070109 | TVM DVB-T RSE - HW Version 007.001.009 |
| 0x02070200 | TVM DVB-T RSE - HW Version 007.002.000 |
| 0x02070201 | TVM DVB-T RSE - HW Version 007.002.001 |
| 0x02070202 | TVM DVB-T RSE - HW Version 007.002.002 |
| 0x02070203 | TVM DVB-T RSE - HW Version 007.002.003 |
| 0x02070204 | TVM DVB-T RSE - HW Version 007.002.004 |
| 0x02070205 | TVM DVB-T RSE - HW Version 007.002.005 |
| 0x02070206 | TVM DVB-T RSE - HW Version 007.002.006 |
| 0x02070207 | TVM DVB-T RSE - HW Version 007.002.007 |
| 0x02070208 | TVM DVB-T RSE - HW Version 007.002.008 |
| 0x02070209 | TVM DVB-T RSE - HW Version 007.002.009 |
| 0x02070300 | TVM DVB-T RSE - HW Version 007.003.000 |
| 0x02070301 | TVM DVB-T RSE - HW Version 007.003.001 |
| 0x02070302 | TVM DVB-T RSE - HW Version 007.003.002 |
| 0x02070303 | TVM DVB-T RSE - HW Version 007.003.003 |
| 0x02070304 | TVM DVB-T RSE - HW Version 007.003.004 |
| 0x02070305 | TVM DVB-T RSE - HW Version 007.003.005 |
| 0x02070306 | TVM DVB-T RSE - HW Version 007.003.006 |
| 0x02070307 | TVM DVB-T RSE - HW Version 007.003.007 |
| 0x02070308 | TVM DVB-T RSE - HW Version 007.003.008 |
| 0x02070309 | TVM DVB-T RSE - HW Version 007.003.009 |
| 0x02070400 | TVM DVB-T RSE - HW Version 007.004.000 |
| 0x02070401 | TVM DVB-T RSE - HW Version 007.004.001 |
| 0x02070402 | TVM DVB-T RSE - HW Version 007.004.002 |
| 0x02070403 | TVM DVB-T RSE - HW Version 007.004.003 |
| 0x02070404 | TVM DVB-T RSE - HW Version 007.004.004 |
| 0x02070405 | TVM DVB-T RSE - HW Version 007.004.005 |
| 0x02070406 | TVM DVB-T RSE - HW Version 007.004.006 |
| 0x02070407 | TVM DVB-T RSE - HW Version 007.004.007 |
| 0x02070408 | TVM DVB-T RSE - HW Version 007.004.008 |
| 0x02070409 | TVM DVB-T RSE - HW Version 007.004.009 |
| 0x02070500 | TVM DVB-T RSE - HW Version 007.005.000 |
| 0x02070501 | TVM DVB-T RSE - HW Version 007.005.001 |
| 0x02070502 | TVM DVB-T RSE - HW Version 007.005.002 |
| 0x02070503 | TVM DVB-T RSE - HW Version 007.005.003 |
| 0x02070504 | TVM DVB-T RSE - HW Version 007.005.004 |
| 0x02070505 | TVM DVB-T RSE - HW Version 007.005.005 |
| 0x02070506 | TVM DVB-T RSE - HW Version 007.005.006 |
| 0x02070507 | TVM DVB-T RSE - HW Version 007.005.007 |
| 0x02070508 | TVM DVB-T RSE - HW Version 007.005.008 |
| 0x02070509 | TVM DVB-T RSE - HW Version 007.005.009 |
| 0x02070600 | TVM DVB-T RSE - HW Version 007.006.000 |
| 0x02070601 | TVM DVB-T RSE - HW Version 007.006.001 |
| 0x02070602 | TVM DVB-T RSE - HW Version 007.006.002 |
| 0x02070603 | TVM DVB-T RSE - HW Version 007.006.003 |
| 0x02070604 | TVM DVB-T RSE - HW Version 007.006.004 |
| 0x02070605 | TVM DVB-T RSE - HW Version 007.006.005 |
| 0x02070606 | TVM DVB-T RSE - HW Version 007.006.006 |
| 0x02070607 | TVM DVB-T RSE - HW Version 007.006.007 |
| 0x02070608 | TVM DVB-T RSE - HW Version 007.006.008 |
| 0x02070609 | TVM DVB-T RSE - HW Version 007.006.009 |
| 0x02070700 | TVM DVB-T RSE - HW Version 007.007.000 |
| 0x02070701 | TVM DVB-T RSE - HW Version 007.007.001 |
| 0x02070702 | TVM DVB-T RSE - HW Version 007.007.002 |
| 0x02070703 | TVM DVB-T RSE - HW Version 007.007.003 |
| 0x02070704 | TVM DVB-T RSE - HW Version 007.007.004 |
| 0x02070705 | TVM DVB-T RSE - HW Version 007.007.005 |
| 0x02070706 | TVM DVB-T RSE - HW Version 007.007.006 |
| 0x02070707 | TVM DVB-T RSE - HW Version 007.007.007 |
| 0x02070708 | TVM DVB-T RSE - HW Version 007.007.008 |
| 0x02070709 | TVM DVB-T RSE - HW Version 007.007.009 |
| 0x02070800 | TVM DVB-T RSE - HW Version 007.008.000 |
| 0x02070801 | TVM DVB-T RSE - HW Version 007.008.001 |
| 0x02070802 | TVM DVB-T RSE - HW Version 007.008.002 |
| 0x02070803 | TVM DVB-T RSE - HW Version 007.008.003 |
| 0x02070804 | TVM DVB-T RSE - HW Version 007.008.004 |
| 0x02070805 | TVM DVB-T RSE - HW Version 007.008.005 |
| 0x02070806 | TVM DVB-T RSE - HW Version 007.008.006 |
| 0x02070807 | TVM DVB-T RSE - HW Version 007.008.007 |
| 0x02070808 | TVM DVB-T RSE - HW Version 007.008.008 |
| 0x02070809 | TVM DVB-T RSE - HW Version 007.008.009 |
| 0x02070900 | TVM DVB-T RSE - HW Version 007.009.000 |
| 0x02070901 | TVM DVB-T RSE - HW Version 007.009.001 |
| 0x02070902 | TVM DVB-T RSE - HW Version 007.009.002 |
| 0x02070903 | TVM DVB-T RSE - HW Version 007.009.003 |
| 0x02070904 | TVM DVB-T RSE - HW Version 007.009.004 |
| 0x02070905 | TVM DVB-T RSE - HW Version 007.009.005 |
| 0x02070906 | TVM DVB-T RSE - HW Version 007.009.006 |
| 0x02070907 | TVM DVB-T RSE - HW Version 007.009.007 |
| 0x02070908 | TVM DVB-T RSE - HW Version 007.009.008 |
| 0x02070909 | TVM DVB-T RSE - HW Version 007.009.009 |
| 0x02080000 | TVM DVB-T RSE - HW Version 008.000.000 |
| 0x02080001 | TVM DVB-T RSE - HW Version 008.000.001 |
| 0x02080002 | TVM DVB-T RSE - HW Version 008.000.002 |
| 0x02080003 | TVM DVB-T RSE - HW Version 008.000.003 |
| 0x02080004 | TVM DVB-T RSE - HW Version 008.000.004 |
| 0x02080005 | TVM DVB-T RSE - HW Version 008.000.005 |
| 0x02080006 | TVM DVB-T RSE - HW Version 008.000.006 |
| 0x02080007 | TVM DVB-T RSE - HW Version 008.000.007 |
| 0x02080008 | TVM DVB-T RSE - HW Version 008.000.008 |
| 0x02080009 | TVM DVB-T RSE - HW Version 008.000.009 |
| 0x02080100 | TVM DVB-T RSE - HW Version 008.001.000 |
| 0x02080101 | TVM DVB-T RSE - HW Version 008.001.001 |
| 0x02080102 | TVM DVB-T RSE - HW Version 008.001.002 |
| 0x02080103 | TVM DVB-T RSE - HW Version 008.001.003 |
| 0x02080104 | TVM DVB-T RSE - HW Version 008.001.004 |
| 0x02080105 | TVM DVB-T RSE - HW Version 008.001.005 |
| 0x02080106 | TVM DVB-T RSE - HW Version 008.001.006 |
| 0x02080107 | TVM DVB-T RSE - HW Version 008.001.007 |
| 0x02080108 | TVM DVB-T RSE - HW Version 008.001.008 |
| 0x02080109 | TVM DVB-T RSE - HW Version 008.001.009 |
| 0x02080200 | TVM DVB-T RSE - HW Version 008.002.000 |
| 0x02080201 | TVM DVB-T RSE - HW Version 008.002.001 |
| 0x02080202 | TVM DVB-T RSE - HW Version 008.002.002 |
| 0x02080203 | TVM DVB-T RSE - HW Version 008.002.003 |
| 0x02080204 | TVM DVB-T RSE - HW Version 008.002.004 |
| 0x02080205 | TVM DVB-T RSE - HW Version 008.002.005 |
| 0x02080206 | TVM DVB-T RSE - HW Version 008.002.006 |
| 0x02080207 | TVM DVB-T RSE - HW Version 008.002.007 |
| 0x02080208 | TVM DVB-T RSE - HW Version 008.002.008 |
| 0x02080209 | TVM DVB-T RSE - HW Version 008.002.009 |
| 0x02080300 | TVM DVB-T RSE - HW Version 008.003.000 |
| 0x02080301 | TVM DVB-T RSE - HW Version 008.003.001 |
| 0x02080302 | TVM DVB-T RSE - HW Version 008.003.002 |
| 0x02080303 | TVM DVB-T RSE - HW Version 008.003.003 |
| 0x02080304 | TVM DVB-T RSE - HW Version 008.003.004 |
| 0x02080305 | TVM DVB-T RSE - HW Version 008.003.005 |
| 0x02080306 | TVM DVB-T RSE - HW Version 008.003.006 |
| 0x02080307 | TVM DVB-T RSE - HW Version 008.003.007 |
| 0x02080308 | TVM DVB-T RSE - HW Version 008.003.008 |
| 0x02080309 | TVM DVB-T RSE - HW Version 008.003.009 |
| 0x02080400 | TVM DVB-T RSE - HW Version 008.004.000 |
| 0x02080401 | TVM DVB-T RSE - HW Version 008.004.001 |
| 0x02080402 | TVM DVB-T RSE - HW Version 008.004.002 |
| 0x02080403 | TVM DVB-T RSE - HW Version 008.004.003 |
| 0x02080404 | TVM DVB-T RSE - HW Version 008.004.004 |
| 0x02080405 | TVM DVB-T RSE - HW Version 008.004.005 |
| 0x02080406 | TVM DVB-T RSE - HW Version 008.004.006 |
| 0x02080407 | TVM DVB-T RSE - HW Version 008.004.007 |
| 0x02080408 | TVM DVB-T RSE - HW Version 008.004.008 |
| 0x02080409 | TVM DVB-T RSE - HW Version 008.004.009 |
| 0x02080500 | TVM DVB-T RSE - HW Version 008.005.000 |
| 0x02080501 | TVM DVB-T RSE - HW Version 008.005.001 |
| 0x02080502 | TVM DVB-T RSE - HW Version 008.005.002 |
| 0x02080503 | TVM DVB-T RSE - HW Version 008.005.003 |
| 0x02080504 | TVM DVB-T RSE - HW Version 008.005.004 |
| 0x02080505 | TVM DVB-T RSE - HW Version 008.005.005 |
| 0x02080506 | TVM DVB-T RSE - HW Version 008.005.006 |
| 0x02080507 | TVM DVB-T RSE - HW Version 008.005.007 |
| 0x02080508 | TVM DVB-T RSE - HW Version 008.005.008 |
| 0x02080509 | TVM DVB-T RSE - HW Version 008.005.009 |
| 0x02080600 | TVM DVB-T RSE - HW Version 008.006.000 |
| 0x02080601 | TVM DVB-T RSE - HW Version 008.006.001 |
| 0x02080602 | TVM DVB-T RSE - HW Version 008.006.002 |
| 0x02080603 | TVM DVB-T RSE - HW Version 008.006.003 |
| 0x02080604 | TVM DVB-T RSE - HW Version 008.006.004 |
| 0x02080605 | TVM DVB-T RSE - HW Version 008.006.005 |
| 0x02080606 | TVM DVB-T RSE - HW Version 008.006.006 |
| 0x02080607 | TVM DVB-T RSE - HW Version 008.006.007 |
| 0x02080608 | TVM DVB-T RSE - HW Version 008.006.008 |
| 0x02080609 | TVM DVB-T RSE - HW Version 008.006.009 |
| 0x02080700 | TVM DVB-T RSE - HW Version 008.007.000 |
| 0x02080701 | TVM DVB-T RSE - HW Version 008.007.001 |
| 0x02080702 | TVM DVB-T RSE - HW Version 008.007.002 |
| 0x02080703 | TVM DVB-T RSE - HW Version 008.007.003 |
| 0x02080704 | TVM DVB-T RSE - HW Version 008.007.004 |
| 0x02080705 | TVM DVB-T RSE - HW Version 008.007.005 |
| 0x02080706 | TVM DVB-T RSE - HW Version 008.007.006 |
| 0x02080707 | TVM DVB-T RSE - HW Version 008.007.007 |
| 0x02080708 | TVM DVB-T RSE - HW Version 008.007.008 |
| 0x02080709 | TVM DVB-T RSE - HW Version 008.007.009 |
| 0x02080800 | TVM DVB-T RSE - HW Version 008.008.000 |
| 0x02080801 | TVM DVB-T RSE - HW Version 008.008.001 |
| 0x02080802 | TVM DVB-T RSE - HW Version 008.008.002 |
| 0x02080803 | TVM DVB-T RSE - HW Version 008.008.003 |
| 0x02080804 | TVM DVB-T RSE - HW Version 008.008.004 |
| 0x02080805 | TVM DVB-T RSE - HW Version 008.008.005 |
| 0x02080806 | TVM DVB-T RSE - HW Version 008.008.006 |
| 0x02080807 | TVM DVB-T RSE - HW Version 008.008.007 |
| 0x02080808 | TVM DVB-T RSE - HW Version 008.008.008 |
| 0x02080809 | TVM DVB-T RSE - HW Version 008.008.009 |
| 0x02080900 | TVM DVB-T RSE - HW Version 008.009.000 |
| 0x02080901 | TVM DVB-T RSE - HW Version 008.009.001 |
| 0x02080902 | TVM DVB-T RSE - HW Version 008.009.002 |
| 0x02080903 | TVM DVB-T RSE - HW Version 008.009.003 |
| 0x02080904 | TVM DVB-T RSE - HW Version 008.009.004 |
| 0x02080905 | TVM DVB-T RSE - HW Version 008.009.005 |
| 0x02080906 | TVM DVB-T RSE - HW Version 008.009.006 |
| 0x02080907 | TVM DVB-T RSE - HW Version 008.009.007 |
| 0x02080908 | TVM DVB-T RSE - HW Version 008.009.008 |
| 0x02080909 | TVM DVB-T RSE - HW Version 008.009.009 |
| 0x02090000 | TVM DVB-T RSE - HW Version 009.000.000 |
| 0x02090001 | TVM DVB-T RSE - HW Version 009.000.001 |
| 0x02090002 | TVM DVB-T RSE - HW Version 009.000.002 |
| 0x02090003 | TVM DVB-T RSE - HW Version 009.000.003 |
| 0x02090004 | TVM DVB-T RSE - HW Version 009.000.004 |
| 0x02090005 | TVM DVB-T RSE - HW Version 009.000.005 |
| 0x02090006 | TVM DVB-T RSE - HW Version 009.000.006 |
| 0x02090007 | TVM DVB-T RSE - HW Version 009.000.007 |
| 0x02090008 | TVM DVB-T RSE - HW Version 009.000.008 |
| 0x02090009 | TVM DVB-T RSE - HW Version 009.000.009 |
| 0x02090100 | TVM DVB-T RSE - HW Version 009.001.000 |
| 0x02090101 | TVM DVB-T RSE - HW Version 009.001.001 |
| 0x02090102 | TVM DVB-T RSE - HW Version 009.001.002 |
| 0x02090103 | TVM DVB-T RSE - HW Version 009.001.003 |
| 0x02090104 | TVM DVB-T RSE - HW Version 009.001.004 |
| 0x02090105 | TVM DVB-T RSE - HW Version 009.001.005 |
| 0x02090106 | TVM DVB-T RSE - HW Version 009.001.006 |
| 0x02090107 | TVM DVB-T RSE - HW Version 009.001.007 |
| 0x02090108 | TVM DVB-T RSE - HW Version 009.001.008 |
| 0x02090109 | TVM DVB-T RSE - HW Version 009.001.009 |
| 0x02090200 | TVM DVB-T RSE - HW Version 009.002.000 |
| 0x02090201 | TVM DVB-T RSE - HW Version 009.002.001 |
| 0x02090202 | TVM DVB-T RSE - HW Version 009.002.002 |
| 0x02090203 | TVM DVB-T RSE - HW Version 009.002.003 |
| 0x02090204 | TVM DVB-T RSE - HW Version 009.002.004 |
| 0x02090205 | TVM DVB-T RSE - HW Version 009.002.005 |
| 0x02090206 | TVM DVB-T RSE - HW Version 009.002.006 |
| 0x02090207 | TVM DVB-T RSE - HW Version 009.002.007 |
| 0x02090208 | TVM DVB-T RSE - HW Version 009.002.008 |
| 0x02090209 | TVM DVB-T RSE - HW Version 009.002.009 |
| 0x02090300 | TVM DVB-T RSE - HW Version 009.003.000 |
| 0x02090301 | TVM DVB-T RSE - HW Version 009.003.001 |
| 0x02090302 | TVM DVB-T RSE - HW Version 009.003.002 |
| 0x02090303 | TVM DVB-T RSE - HW Version 009.003.003 |
| 0x02090304 | TVM DVB-T RSE - HW Version 009.003.004 |
| 0x02090305 | TVM DVB-T RSE - HW Version 009.003.005 |
| 0x02090306 | TVM DVB-T RSE - HW Version 009.003.006 |
| 0x02090307 | TVM DVB-T RSE - HW Version 009.003.007 |
| 0x02090308 | TVM DVB-T RSE - HW Version 009.003.008 |
| 0x02090309 | TVM DVB-T RSE - HW Version 009.003.009 |
| 0x02090400 | TVM DVB-T RSE - HW Version 009.004.000 |
| 0x02090401 | TVM DVB-T RSE - HW Version 009.004.001 |
| 0x02090402 | TVM DVB-T RSE - HW Version 009.004.002 |
| 0x02090403 | TVM DVB-T RSE - HW Version 009.004.003 |
| 0x02090404 | TVM DVB-T RSE - HW Version 009.004.004 |
| 0x02090405 | TVM DVB-T RSE - HW Version 009.004.005 |
| 0x02090406 | TVM DVB-T RSE - HW Version 009.004.006 |
| 0x02090407 | TVM DVB-T RSE - HW Version 009.004.007 |
| 0x02090408 | TVM DVB-T RSE - HW Version 009.004.008 |
| 0x02090409 | TVM DVB-T RSE - HW Version 009.004.009 |
| 0x02090500 | TVM DVB-T RSE - HW Version 009.005.000 |
| 0x02090501 | TVM DVB-T RSE - HW Version 009.005.001 |
| 0x02090502 | TVM DVB-T RSE - HW Version 009.005.002 |
| 0x02090503 | TVM DVB-T RSE - HW Version 009.005.003 |
| 0x02090504 | TVM DVB-T RSE - HW Version 009.005.004 |
| 0x02090505 | TVM DVB-T RSE - HW Version 009.005.005 |
| 0x02090506 | TVM DVB-T RSE - HW Version 009.005.006 |
| 0x02090507 | TVM DVB-T RSE - HW Version 009.005.007 |
| 0x02090508 | TVM DVB-T RSE - HW Version 009.005.008 |
| 0x02090509 | TVM DVB-T RSE - HW Version 009.005.009 |
| 0x02090600 | TVM DVB-T RSE - HW Version 009.006.000 |
| 0x02090601 | TVM DVB-T RSE - HW Version 009.006.001 |
| 0x02090602 | TVM DVB-T RSE - HW Version 009.006.002 |
| 0x02090603 | TVM DVB-T RSE - HW Version 009.006.003 |
| 0x02090604 | TVM DVB-T RSE - HW Version 009.006.004 |
| 0x02090605 | TVM DVB-T RSE - HW Version 009.006.005 |
| 0x02090606 | TVM DVB-T RSE - HW Version 009.006.006 |
| 0x02090607 | TVM DVB-T RSE - HW Version 009.006.007 |
| 0x02090608 | TVM DVB-T RSE - HW Version 009.006.008 |
| 0x02090609 | TVM DVB-T RSE - HW Version 009.006.009 |
| 0x02090700 | TVM DVB-T RSE - HW Version 009.007.000 |
| 0x02090701 | TVM DVB-T RSE - HW Version 009.007.001 |
| 0x02090702 | TVM DVB-T RSE - HW Version 009.007.002 |
| 0x02090703 | TVM DVB-T RSE - HW Version 009.007.003 |
| 0x02090704 | TVM DVB-T RSE - HW Version 009.007.004 |
| 0x02090705 | TVM DVB-T RSE - HW Version 009.007.005 |
| 0x02090706 | TVM DVB-T RSE - HW Version 009.007.006 |
| 0x02090707 | TVM DVB-T RSE - HW Version 009.007.007 |
| 0x02090708 | TVM DVB-T RSE - HW Version 009.007.008 |
| 0x02090709 | TVM DVB-T RSE - HW Version 009.007.009 |
| 0x02090800 | TVM DVB-T RSE - HW Version 009.008.000 |
| 0x02090801 | TVM DVB-T RSE - HW Version 009.008.001 |
| 0x02090802 | TVM DVB-T RSE - HW Version 009.008.002 |
| 0x02090803 | TVM DVB-T RSE - HW Version 009.008.003 |
| 0x02090804 | TVM DVB-T RSE - HW Version 009.008.004 |
| 0x02090805 | TVM DVB-T RSE - HW Version 009.008.005 |
| 0x02090806 | TVM DVB-T RSE - HW Version 009.008.006 |
| 0x02090807 | TVM DVB-T RSE - HW Version 009.008.007 |
| 0x02090808 | TVM DVB-T RSE - HW Version 009.008.008 |
| 0x02090809 | TVM DVB-T RSE - HW Version 009.008.009 |
| 0x02090900 | TVM DVB-T RSE - HW Version 009.009.000 |
| 0x02090901 | TVM DVB-T RSE - HW Version 009.009.001 |
| 0x02090902 | TVM DVB-T RSE - HW Version 009.009.002 |
| 0x02090903 | TVM DVB-T RSE - HW Version 009.009.003 |
| 0x02090904 | TVM DVB-T RSE - HW Version 009.009.004 |
| 0x02090905 | TVM DVB-T RSE - HW Version 009.009.005 |
| 0x02090906 | TVM DVB-T RSE - HW Version 009.009.006 |
| 0x02090907 | TVM DVB-T RSE - HW Version 009.009.007 |
| 0x02090908 | TVM DVB-T RSE - HW Version 009.009.008 |
| 0x02090909 | TVM DVB-T RSE - HW Version 009.009.009 |
| 0x03050000 | TVM ISDB-T - HW Version 005.000.000 |
| 0x03050001 | TVM ISDB-T - HW Version 005.000.001 |
| 0x03050002 | TVM ISDB-T - HW Version 005.000.002 |
| 0x03050003 | TVM ISDB-T - HW Version 005.000.003 |
| 0x03050004 | TVM ISDB-T - HW Version 005.000.004 |
| 0x03050005 | TVM ISDB-T - HW Version 005.000.005 |
| 0x03050006 | TVM ISDB-T - HW Version 005.000.006 |
| 0x03050007 | TVM ISDB-T - HW Version 005.000.007 |
| 0x03050008 | TVM ISDB-T - HW Version 005.000.008 |
| 0x03050009 | TVM ISDB-T - HW Version 005.000.009 |
| 0x03050100 | TVM ISDB-T - HW Version 005.001.000 |
| 0x03050101 | TVM ISDB-T - HW Version 005.001.001 |
| 0x03050102 | TVM ISDB-T - HW Version 005.001.002 |
| 0x03050103 | TVM ISDB-T - HW Version 005.001.003 |
| 0x03050104 | TVM ISDB-T - HW Version 005.001.004 |
| 0x03050105 | TVM ISDB-T - HW Version 005.001.005 |
| 0x03050106 | TVM ISDB-T - HW Version 005.001.006 |
| 0x03050107 | TVM ISDB-T - HW Version 005.001.007 |
| 0x03050108 | TVM ISDB-T - HW Version 005.001.008 |
| 0x03050109 | TVM ISDB-T - HW Version 005.001.009 |
| 0x03050200 | TVM ISDB-T - HW Version 005.002.000 |
| 0x03050201 | TVM ISDB-T - HW Version 005.002.001 |
| 0x03050202 | TVM ISDB-T - HW Version 005.002.002 |
| 0x03050203 | TVM ISDB-T - HW Version 005.002.003 |
| 0x03050204 | TVM ISDB-T - HW Version 005.002.004 |
| 0x03050205 | TVM ISDB-T - HW Version 005.002.005 |
| 0x03050206 | TVM ISDB-T - HW Version 005.002.006 |
| 0x03050207 | TVM ISDB-T - HW Version 005.002.007 |
| 0x03050208 | TVM ISDB-T - HW Version 005.002.008 |
| 0x03050209 | TVM ISDB-T - HW Version 005.002.009 |
| 0x03050300 | TVM ISDB-T - HW Version 005.003.000 |
| 0x03050301 | TVM ISDB-T - HW Version 005.003.001 |
| 0x03050302 | TVM ISDB-T - HW Version 005.003.002 |
| 0x03050303 | TVM ISDB-T - HW Version 005.003.003 |
| 0x03050304 | TVM ISDB-T - HW Version 005.003.004 |
| 0x03050305 | TVM ISDB-T - HW Version 005.003.005 |
| 0x03050306 | TVM ISDB-T - HW Version 005.003.006 |
| 0x03050307 | TVM ISDB-T - HW Version 005.003.007 |
| 0x03050308 | TVM ISDB-T - HW Version 005.003.008 |
| 0x03050309 | TVM ISDB-T - HW Version 005.003.009 |
| 0x03050400 | TVM ISDB-T - HW Version 005.004.000 |
| 0x03050401 | TVM ISDB-T - HW Version 005.004.001 |
| 0x03050402 | TVM ISDB-T - HW Version 005.004.002 |
| 0x03050403 | TVM ISDB-T - HW Version 005.004.003 |
| 0x03050404 | TVM ISDB-T - HW Version 005.004.004 |
| 0x03050405 | TVM ISDB-T - HW Version 005.004.005 |
| 0x03050406 | TVM ISDB-T - HW Version 005.004.006 |
| 0x03050407 | TVM ISDB-T - HW Version 005.004.007 |
| 0x03050408 | TVM ISDB-T - HW Version 005.004.008 |
| 0x03050409 | TVM ISDB-T - HW Version 005.004.009 |
| 0x03050500 | TVM ISDB-T - HW Version 005.005.000 |
| 0x03050501 | TVM ISDB-T - HW Version 005.005.001 |
| 0x03050502 | TVM ISDB-T - HW Version 005.005.002 |
| 0x03050503 | TVM ISDB-T - HW Version 005.005.003 |
| 0x03050504 | TVM ISDB-T - HW Version 005.005.004 |
| 0x03050505 | TVM ISDB-T - HW Version 005.005.005 |
| 0x03050506 | TVM ISDB-T - HW Version 005.005.006 |
| 0x03050507 | TVM ISDB-T - HW Version 005.005.007 |
| 0x03050508 | TVM ISDB-T - HW Version 005.005.008 |
| 0x03050509 | TVM ISDB-T - HW Version 005.005.009 |
| 0x03050600 | TVM ISDB-T - HW Version 005.006.000 |
| 0x03050601 | TVM ISDB-T - HW Version 005.006.001 |
| 0x03050602 | TVM ISDB-T - HW Version 005.006.002 |
| 0x03050603 | TVM ISDB-T - HW Version 005.006.003 |
| 0x03050604 | TVM ISDB-T - HW Version 005.006.004 |
| 0x03050605 | TVM ISDB-T - HW Version 005.006.005 |
| 0x03050606 | TVM ISDB-T - HW Version 005.006.006 |
| 0x03050607 | TVM ISDB-T - HW Version 005.006.007 |
| 0x03050608 | TVM ISDB-T - HW Version 005.006.008 |
| 0x03050609 | TVM ISDB-T - HW Version 005.006.009 |
| 0x03050700 | TVM ISDB-T - HW Version 005.007.000 |
| 0x03050701 | TVM ISDB-T - HW Version 005.007.001 |
| 0x03050702 | TVM ISDB-T - HW Version 005.007.002 |
| 0x03050703 | TVM ISDB-T - HW Version 005.007.003 |
| 0x03050704 | TVM ISDB-T - HW Version 005.007.004 |
| 0x03050705 | TVM ISDB-T - HW Version 005.007.005 |
| 0x03050706 | TVM ISDB-T - HW Version 005.007.006 |
| 0x03050707 | TVM ISDB-T - HW Version 005.007.007 |
| 0x03050708 | TVM ISDB-T - HW Version 005.007.008 |
| 0x03050709 | TVM ISDB-T - HW Version 005.007.009 |
| 0x03050800 | TVM ISDB-T - HW Version 005.008.000 |
| 0x03050801 | TVM ISDB-T - HW Version 005.008.001 |
| 0x03050802 | TVM ISDB-T - HW Version 005.008.002 |
| 0x03050803 | TVM ISDB-T - HW Version 005.008.003 |
| 0x03050804 | TVM ISDB-T - HW Version 005.008.004 |
| 0x03050805 | TVM ISDB-T - HW Version 005.008.005 |
| 0x03050806 | TVM ISDB-T - HW Version 005.008.006 |
| 0x03050807 | TVM ISDB-T - HW Version 005.008.007 |
| 0x03050808 | TVM ISDB-T - HW Version 005.008.008 |
| 0x03050809 | TVM ISDB-T - HW Version 005.008.009 |
| 0x03050900 | TVM ISDB-T - HW Version 005.009.000 |
| 0x03050901 | TVM ISDB-T - HW Version 005.009.001 |
| 0x03050902 | TVM ISDB-T - HW Version 005.009.002 |
| 0x03050903 | TVM ISDB-T - HW Version 005.009.003 |
| 0x03050904 | TVM ISDB-T - HW Version 005.009.004 |
| 0x03050905 | TVM ISDB-T - HW Version 005.009.005 |
| 0x03050906 | TVM ISDB-T - HW Version 005.009.006 |
| 0x03050907 | TVM ISDB-T - HW Version 005.009.007 |
| 0x03050908 | TVM ISDB-T - HW Version 005.009.008 |
| 0x03050909 | TVM ISDB-T - HW Version 005.009.009 |
| 0x03060000 | TVM ISDB-T - HW Version 006.000.000 |
| 0x03060001 | TVM ISDB-T - HW Version 006.000.001 |
| 0x03060002 | TVM ISDB-T - HW Version 006.000.002 |
| 0x03060003 | TVM ISDB-T - HW Version 006.000.003 |
| 0x03060004 | TVM ISDB-T - HW Version 006.000.004 |
| 0x03060005 | TVM ISDB-T - HW Version 006.000.005 |
| 0x03060006 | TVM ISDB-T - HW Version 006.000.006 |
| 0x03060007 | TVM ISDB-T - HW Version 006.000.007 |
| 0x03060008 | TVM ISDB-T - HW Version 006.000.008 |
| 0x03060009 | TVM ISDB-T - HW Version 006.000.009 |
| 0x03060100 | TVM ISDB-T - HW Version 006.001.000 |
| 0x03060101 | TVM ISDB-T - HW Version 006.001.001 |
| 0x03060102 | TVM ISDB-T - HW Version 006.001.002 |
| 0x03060103 | TVM ISDB-T - HW Version 006.001.003 |
| 0x03060104 | TVM ISDB-T - HW Version 006.001.004 |
| 0x03060105 | TVM ISDB-T - HW Version 006.001.005 |
| 0x03060106 | TVM ISDB-T - HW Version 006.001.006 |
| 0x03060107 | TVM ISDB-T - HW Version 006.001.007 |
| 0x03060108 | TVM ISDB-T - HW Version 006.001.008 |
| 0x03060109 | TVM ISDB-T - HW Version 006.001.009 |
| 0x03060200 | TVM ISDB-T - HW Version 006.002.000 |
| 0x03060201 | TVM ISDB-T - HW Version 006.002.001 |
| 0x03060202 | TVM ISDB-T - HW Version 006.002.002 |
| 0x03060203 | TVM ISDB-T - HW Version 006.002.003 |
| 0x03060204 | TVM ISDB-T - HW Version 006.002.004 |
| 0x03060205 | TVM ISDB-T - HW Version 006.002.005 |
| 0x03060206 | TVM ISDB-T - HW Version 006.002.006 |
| 0x03060207 | TVM ISDB-T - HW Version 006.002.007 |
| 0x03060208 | TVM ISDB-T - HW Version 006.002.008 |
| 0x03060209 | TVM ISDB-T - HW Version 006.002.009 |
| 0x03060300 | TVM ISDB-T - HW Version 006.003.000 |
| 0x03060301 | TVM ISDB-T - HW Version 006.003.001 |
| 0x03060302 | TVM ISDB-T - HW Version 006.003.002 |
| 0x03060303 | TVM ISDB-T - HW Version 006.003.003 |
| 0x03060304 | TVM ISDB-T - HW Version 006.003.004 |
| 0x03060305 | TVM ISDB-T - HW Version 006.003.005 |
| 0x03060306 | TVM ISDB-T - HW Version 006.003.006 |
| 0x03060307 | TVM ISDB-T - HW Version 006.003.007 |
| 0x03060308 | TVM ISDB-T - HW Version 006.003.008 |
| 0x03060309 | TVM ISDB-T - HW Version 006.003.009 |
| 0x03060400 | TVM ISDB-T - HW Version 006.004.000 |
| 0x03060401 | TVM ISDB-T - HW Version 006.004.001 |
| 0x03060402 | TVM ISDB-T - HW Version 006.004.002 |
| 0x03060403 | TVM ISDB-T - HW Version 006.004.003 |
| 0x03060404 | TVM ISDB-T - HW Version 006.004.004 |
| 0x03060405 | TVM ISDB-T - HW Version 006.004.005 |
| 0x03060406 | TVM ISDB-T - HW Version 006.004.006 |
| 0x03060407 | TVM ISDB-T - HW Version 006.004.007 |
| 0x03060408 | TVM ISDB-T - HW Version 006.004.008 |
| 0x03060409 | TVM ISDB-T - HW Version 006.004.009 |
| 0x03060500 | TVM ISDB-T - HW Version 006.005.000 |
| 0x03060501 | TVM ISDB-T - HW Version 006.005.001 |
| 0x03060502 | TVM ISDB-T - HW Version 006.005.002 |
| 0x03060503 | TVM ISDB-T - HW Version 006.005.003 |
| 0x03060504 | TVM ISDB-T - HW Version 006.005.004 |
| 0x03060505 | TVM ISDB-T - HW Version 006.005.005 |
| 0x03060506 | TVM ISDB-T - HW Version 006.005.006 |
| 0x03060507 | TVM ISDB-T - HW Version 006.005.007 |
| 0x03060508 | TVM ISDB-T - HW Version 006.005.008 |
| 0x03060509 | TVM ISDB-T - HW Version 006.005.009 |
| 0x03060600 | TVM ISDB-T - HW Version 006.006.000 |
| 0x03060601 | TVM ISDB-T - HW Version 006.006.001 |
| 0x03060602 | TVM ISDB-T - HW Version 006.006.002 |
| 0x03060603 | TVM ISDB-T - HW Version 006.006.003 |
| 0x03060604 | TVM ISDB-T - HW Version 006.006.004 |
| 0x03060605 | TVM ISDB-T - HW Version 006.006.005 |
| 0x03060606 | TVM ISDB-T - HW Version 006.006.006 |
| 0x03060607 | TVM ISDB-T - HW Version 006.006.007 |
| 0x03060608 | TVM ISDB-T - HW Version 006.006.008 |
| 0x03060609 | TVM ISDB-T - HW Version 006.006.009 |
| 0x03060700 | TVM ISDB-T - HW Version 006.007.000 |
| 0x03060701 | TVM ISDB-T - HW Version 006.007.001 |
| 0x03060702 | TVM ISDB-T - HW Version 006.007.002 |
| 0x03060703 | TVM ISDB-T - HW Version 006.007.003 |
| 0x03060704 | TVM ISDB-T - HW Version 006.007.004 |
| 0x03060705 | TVM ISDB-T - HW Version 006.007.005 |
| 0x03060706 | TVM ISDB-T - HW Version 006.007.006 |
| 0x03060707 | TVM ISDB-T - HW Version 006.007.007 |
| 0x03060708 | TVM ISDB-T - HW Version 006.007.008 |
| 0x03060709 | TVM ISDB-T - HW Version 006.007.009 |
| 0x03060800 | TVM ISDB-T - HW Version 006.008.000 |
| 0x03060801 | TVM ISDB-T - HW Version 006.008.001 |
| 0x03060802 | TVM ISDB-T - HW Version 006.008.002 |
| 0x03060803 | TVM ISDB-T - HW Version 006.008.003 |
| 0x03060804 | TVM ISDB-T - HW Version 006.008.004 |
| 0x03060805 | TVM ISDB-T - HW Version 006.008.005 |
| 0x03060806 | TVM ISDB-T - HW Version 006.008.006 |
| 0x03060807 | TVM ISDB-T - HW Version 006.008.007 |
| 0x03060808 | TVM ISDB-T - HW Version 006.008.008 |
| 0x03060809 | TVM ISDB-T - HW Version 006.008.009 |
| 0x03060900 | TVM ISDB-T - HW Version 006.009.000 |
| 0x03060901 | TVM ISDB-T - HW Version 006.009.001 |
| 0x03060902 | TVM ISDB-T - HW Version 006.009.002 |
| 0x03060903 | TVM ISDB-T - HW Version 006.009.003 |
| 0x03060904 | TVM ISDB-T - HW Version 006.009.004 |
| 0x03060905 | TVM ISDB-T - HW Version 006.009.005 |
| 0x03060906 | TVM ISDB-T - HW Version 006.009.006 |
| 0x03060907 | TVM ISDB-T - HW Version 006.009.007 |
| 0x03060908 | TVM ISDB-T - HW Version 006.009.008 |
| 0x03060909 | TVM ISDB-T - HW Version 006.009.009 |
| 0x03070000 | TVM ISDB-T - HW Version 007.000.000 |
| 0x03070001 | TVM ISDB-T - HW Version 007.000.001 |
| 0x03070002 | TVM ISDB-T - HW Version 007.000.002 |
| 0x03070003 | TVM ISDB-T - HW Version 007.000.003 |
| 0x03070004 | TVM ISDB-T - HW Version 007.000.004 |
| 0x03070005 | TVM ISDB-T - HW Version 007.000.005 |
| 0x03070006 | TVM ISDB-T - HW Version 007.000.006 |
| 0x03070007 | TVM ISDB-T - HW Version 007.000.007 |
| 0x03070008 | TVM ISDB-T - HW Version 007.000.008 |
| 0x03070009 | TVM ISDB-T - HW Version 007.000.009 |
| 0x03070100 | TVM ISDB-T - HW Version 007.001.000 |
| 0x03070101 | TVM ISDB-T - HW Version 007.001.001 |
| 0x03070102 | TVM ISDB-T - HW Version 007.001.002 |
| 0x03070103 | TVM ISDB-T - HW Version 007.001.003 |
| 0x03070104 | TVM ISDB-T - HW Version 007.001.004 |
| 0x03070105 | TVM ISDB-T - HW Version 007.001.005 |
| 0x03070106 | TVM ISDB-T - HW Version 007.001.006 |
| 0x03070107 | TVM ISDB-T - HW Version 007.001.007 |
| 0x03070108 | TVM ISDB-T - HW Version 007.001.008 |
| 0x03070109 | TVM ISDB-T - HW Version 007.001.009 |
| 0x03070200 | TVM ISDB-T - HW Version 007.002.000 |
| 0x03070201 | TVM ISDB-T - HW Version 007.002.001 |
| 0x03070202 | TVM ISDB-T - HW Version 007.002.002 |
| 0x03070203 | TVM ISDB-T - HW Version 007.002.003 |
| 0x03070204 | TVM ISDB-T - HW Version 007.002.004 |
| 0x03070205 | TVM ISDB-T - HW Version 007.002.005 |
| 0x03070206 | TVM ISDB-T - HW Version 007.002.006 |
| 0x03070207 | TVM ISDB-T - HW Version 007.002.007 |
| 0x03070208 | TVM ISDB-T - HW Version 007.002.008 |
| 0x03070209 | TVM ISDB-T - HW Version 007.002.009 |
| 0x03070300 | TVM ISDB-T - HW Version 007.003.000 |
| 0x03070301 | TVM ISDB-T - HW Version 007.003.001 |
| 0x03070302 | TVM ISDB-T - HW Version 007.003.002 |
| 0x03070303 | TVM ISDB-T - HW Version 007.003.003 |
| 0x03070304 | TVM ISDB-T - HW Version 007.003.004 |
| 0x03070305 | TVM ISDB-T - HW Version 007.003.005 |
| 0x03070306 | TVM ISDB-T - HW Version 007.003.006 |
| 0x03070307 | TVM ISDB-T - HW Version 007.003.007 |
| 0x03070308 | TVM ISDB-T - HW Version 007.003.008 |
| 0x03070309 | TVM ISDB-T - HW Version 007.003.009 |
| 0x03070400 | TVM ISDB-T - HW Version 007.004.000 |
| 0x03070401 | TVM ISDB-T - HW Version 007.004.001 |
| 0x03070402 | TVM ISDB-T - HW Version 007.004.002 |
| 0x03070403 | TVM ISDB-T - HW Version 007.004.003 |
| 0x03070404 | TVM ISDB-T - HW Version 007.004.004 |
| 0x03070405 | TVM ISDB-T - HW Version 007.004.005 |
| 0x03070406 | TVM ISDB-T - HW Version 007.004.006 |
| 0x03070407 | TVM ISDB-T - HW Version 007.004.007 |
| 0x03070408 | TVM ISDB-T - HW Version 007.004.008 |
| 0x03070409 | TVM ISDB-T - HW Version 007.004.009 |
| 0x03070500 | TVM ISDB-T - HW Version 007.005.000 |
| 0x03070501 | TVM ISDB-T - HW Version 007.005.001 |
| 0x03070502 | TVM ISDB-T - HW Version 007.005.002 |
| 0x03070503 | TVM ISDB-T - HW Version 007.005.003 |
| 0x03070504 | TVM ISDB-T - HW Version 007.005.004 |
| 0x03070505 | TVM ISDB-T - HW Version 007.005.005 |
| 0x03070506 | TVM ISDB-T - HW Version 007.005.006 |
| 0x03070507 | TVM ISDB-T - HW Version 007.005.007 |
| 0x03070508 | TVM ISDB-T - HW Version 007.005.008 |
| 0x03070509 | TVM ISDB-T - HW Version 007.005.009 |
| 0x03070600 | TVM ISDB-T - HW Version 007.006.000 |
| 0x03070601 | TVM ISDB-T - HW Version 007.006.001 |
| 0x03070602 | TVM ISDB-T - HW Version 007.006.002 |
| 0x03070603 | TVM ISDB-T - HW Version 007.006.003 |
| 0x03070604 | TVM ISDB-T - HW Version 007.006.004 |
| 0x03070605 | TVM ISDB-T - HW Version 007.006.005 |
| 0x03070606 | TVM ISDB-T - HW Version 007.006.006 |
| 0x03070607 | TVM ISDB-T - HW Version 007.006.007 |
| 0x03070608 | TVM ISDB-T - HW Version 007.006.008 |
| 0x03070609 | TVM ISDB-T - HW Version 007.006.009 |
| 0x03070700 | TVM ISDB-T - HW Version 007.007.000 |
| 0x03070701 | TVM ISDB-T - HW Version 007.007.001 |
| 0x03070702 | TVM ISDB-T - HW Version 007.007.002 |
| 0x03070703 | TVM ISDB-T - HW Version 007.007.003 |
| 0x03070704 | TVM ISDB-T - HW Version 007.007.004 |
| 0x03070705 | TVM ISDB-T - HW Version 007.007.005 |
| 0x03070706 | TVM ISDB-T - HW Version 007.007.006 |
| 0x03070707 | TVM ISDB-T - HW Version 007.007.007 |
| 0x03070708 | TVM ISDB-T - HW Version 007.007.008 |
| 0x03070709 | TVM ISDB-T - HW Version 007.007.009 |
| 0x03070800 | TVM ISDB-T - HW Version 007.008.000 |
| 0x03070801 | TVM ISDB-T - HW Version 007.008.001 |
| 0x03070802 | TVM ISDB-T - HW Version 007.008.002 |
| 0x03070803 | TVM ISDB-T - HW Version 007.008.003 |
| 0x03070804 | TVM ISDB-T - HW Version 007.008.004 |
| 0x03070805 | TVM ISDB-T - HW Version 007.008.005 |
| 0x03070806 | TVM ISDB-T - HW Version 007.008.006 |
| 0x03070807 | TVM ISDB-T - HW Version 007.008.007 |
| 0x03070808 | TVM ISDB-T - HW Version 007.008.008 |
| 0x03070809 | TVM ISDB-T - HW Version 007.008.009 |
| 0x03070900 | TVM ISDB-T - HW Version 007.009.000 |
| 0x03070901 | TVM ISDB-T - HW Version 007.009.001 |
| 0x03070902 | TVM ISDB-T - HW Version 007.009.002 |
| 0x03070903 | TVM ISDB-T - HW Version 007.009.003 |
| 0x03070904 | TVM ISDB-T - HW Version 007.009.004 |
| 0x03070905 | TVM ISDB-T - HW Version 007.009.005 |
| 0x03070906 | TVM ISDB-T - HW Version 007.009.006 |
| 0x03070907 | TVM ISDB-T - HW Version 007.009.007 |
| 0x03070908 | TVM ISDB-T - HW Version 007.009.008 |
| 0x03070909 | TVM ISDB-T - HW Version 007.009.009 |
| 0x03080000 | TVM ISDB-T - HW Version 008.000.000 |
| 0x03080001 | TVM ISDB-T - HW Version 008.000.001 |
| 0x03080002 | TVM ISDB-T - HW Version 008.000.002 |
| 0x03080003 | TVM ISDB-T - HW Version 008.000.003 |
| 0x03080004 | TVM ISDB-T - HW Version 008.000.004 |
| 0x03080005 | TVM ISDB-T - HW Version 008.000.005 |
| 0x03080006 | TVM ISDB-T - HW Version 008.000.006 |
| 0x03080007 | TVM ISDB-T - HW Version 008.000.007 |
| 0x03080008 | TVM ISDB-T - HW Version 008.000.008 |
| 0x03080009 | TVM ISDB-T - HW Version 008.000.009 |
| 0x03080100 | TVM ISDB-T - HW Version 008.001.000 |
| 0x03080101 | TVM ISDB-T - HW Version 008.001.001 |
| 0x03080102 | TVM ISDB-T - HW Version 008.001.002 |
| 0x03080103 | TVM ISDB-T - HW Version 008.001.003 |
| 0x03080104 | TVM ISDB-T - HW Version 008.001.004 |
| 0x03080105 | TVM ISDB-T - HW Version 008.001.005 |
| 0x03080106 | TVM ISDB-T - HW Version 008.001.006 |
| 0x03080107 | TVM ISDB-T - HW Version 008.001.007 |
| 0x03080108 | TVM ISDB-T - HW Version 008.001.008 |
| 0x03080109 | TVM ISDB-T - HW Version 008.001.009 |
| 0x03080200 | TVM ISDB-T - HW Version 008.002.000 |
| 0x03080201 | TVM ISDB-T - HW Version 008.002.001 |
| 0x03080202 | TVM ISDB-T - HW Version 008.002.002 |
| 0x03080203 | TVM ISDB-T - HW Version 008.002.003 |
| 0x03080204 | TVM ISDB-T - HW Version 008.002.004 |
| 0x03080205 | TVM ISDB-T - HW Version 008.002.005 |
| 0x03080206 | TVM ISDB-T - HW Version 008.002.006 |
| 0x03080207 | TVM ISDB-T - HW Version 008.002.007 |
| 0x03080208 | TVM ISDB-T - HW Version 008.002.008 |
| 0x03080209 | TVM ISDB-T - HW Version 008.002.009 |
| 0x03080300 | TVM ISDB-T - HW Version 008.003.000 |
| 0x03080301 | TVM ISDB-T - HW Version 008.003.001 |
| 0x03080302 | TVM ISDB-T - HW Version 008.003.002 |
| 0x03080303 | TVM ISDB-T - HW Version 008.003.003 |
| 0x03080304 | TVM ISDB-T - HW Version 008.003.004 |
| 0x03080305 | TVM ISDB-T - HW Version 008.003.005 |
| 0x03080306 | TVM ISDB-T - HW Version 008.003.006 |
| 0x03080307 | TVM ISDB-T - HW Version 008.003.007 |
| 0x03080308 | TVM ISDB-T - HW Version 008.003.008 |
| 0x03080309 | TVM ISDB-T - HW Version 008.003.009 |
| 0x03080400 | TVM ISDB-T - HW Version 008.004.000 |
| 0x03080401 | TVM ISDB-T - HW Version 008.004.001 |
| 0x03080402 | TVM ISDB-T - HW Version 008.004.002 |
| 0x03080403 | TVM ISDB-T - HW Version 008.004.003 |
| 0x03080404 | TVM ISDB-T - HW Version 008.004.004 |
| 0x03080405 | TVM ISDB-T - HW Version 008.004.005 |
| 0x03080406 | TVM ISDB-T - HW Version 008.004.006 |
| 0x03080407 | TVM ISDB-T - HW Version 008.004.007 |
| 0x03080408 | TVM ISDB-T - HW Version 008.004.008 |
| 0x03080409 | TVM ISDB-T - HW Version 008.004.009 |
| 0x03080500 | TVM ISDB-T - HW Version 008.005.000 |
| 0x03080501 | TVM ISDB-T - HW Version 008.005.001 |
| 0x03080502 | TVM ISDB-T - HW Version 008.005.002 |
| 0x03080503 | TVM ISDB-T - HW Version 008.005.003 |
| 0x03080504 | TVM ISDB-T - HW Version 008.005.004 |
| 0x03080505 | TVM ISDB-T - HW Version 008.005.005 |
| 0x03080506 | TVM ISDB-T - HW Version 008.005.006 |
| 0x03080507 | TVM ISDB-T - HW Version 008.005.007 |
| 0x03080508 | TVM ISDB-T - HW Version 008.005.008 |
| 0x03080509 | TVM ISDB-T - HW Version 008.005.009 |
| 0x03080600 | TVM ISDB-T - HW Version 008.006.000 |
| 0x03080601 | TVM ISDB-T - HW Version 008.006.001 |
| 0x03080602 | TVM ISDB-T - HW Version 008.006.002 |
| 0x03080603 | TVM ISDB-T - HW Version 008.006.003 |
| 0x03080604 | TVM ISDB-T - HW Version 008.006.004 |
| 0x03080605 | TVM ISDB-T - HW Version 008.006.005 |
| 0x03080606 | TVM ISDB-T - HW Version 008.006.006 |
| 0x03080607 | TVM ISDB-T - HW Version 008.006.007 |
| 0x03080608 | TVM ISDB-T - HW Version 008.006.008 |
| 0x03080609 | TVM ISDB-T - HW Version 008.006.009 |
| 0x03080700 | TVM ISDB-T - HW Version 008.007.000 |
| 0x03080701 | TVM ISDB-T - HW Version 008.007.001 |
| 0x03080702 | TVM ISDB-T - HW Version 008.007.002 |
| 0x03080703 | TVM ISDB-T - HW Version 008.007.003 |
| 0x03080704 | TVM ISDB-T - HW Version 008.007.004 |
| 0x03080705 | TVM ISDB-T - HW Version 008.007.005 |
| 0x03080706 | TVM ISDB-T - HW Version 008.007.006 |
| 0x03080707 | TVM ISDB-T - HW Version 008.007.007 |
| 0x03080708 | TVM ISDB-T - HW Version 008.007.008 |
| 0x03080709 | TVM ISDB-T - HW Version 008.007.009 |
| 0x03080800 | TVM ISDB-T - HW Version 008.008.000 |
| 0x03080801 | TVM ISDB-T - HW Version 008.008.001 |
| 0x03080802 | TVM ISDB-T - HW Version 008.008.002 |
| 0x03080803 | TVM ISDB-T - HW Version 008.008.003 |
| 0x03080804 | TVM ISDB-T - HW Version 008.008.004 |
| 0x03080805 | TVM ISDB-T - HW Version 008.008.005 |
| 0x03080806 | TVM ISDB-T - HW Version 008.008.006 |
| 0x03080807 | TVM ISDB-T - HW Version 008.008.007 |
| 0x03080808 | TVM ISDB-T - HW Version 008.008.008 |
| 0x03080809 | TVM ISDB-T - HW Version 008.008.009 |
| 0x03080900 | TVM ISDB-T - HW Version 008.009.000 |
| 0x03080901 | TVM ISDB-T - HW Version 008.009.001 |
| 0x03080902 | TVM ISDB-T - HW Version 008.009.002 |
| 0x03080903 | TVM ISDB-T - HW Version 008.009.003 |
| 0x03080904 | TVM ISDB-T - HW Version 008.009.004 |
| 0x03080905 | TVM ISDB-T - HW Version 008.009.005 |
| 0x03080906 | TVM ISDB-T - HW Version 008.009.006 |
| 0x03080907 | TVM ISDB-T - HW Version 008.009.007 |
| 0x03080908 | TVM ISDB-T - HW Version 008.009.008 |
| 0x03080909 | TVM ISDB-T - HW Version 008.009.009 |
| 0x03090000 | TVM ISDB-T - HW Version 009.000.000 |
| 0x03090001 | TVM ISDB-T - HW Version 009.000.001 |
| 0x03090002 | TVM ISDB-T - HW Version 009.000.002 |
| 0x03090003 | TVM ISDB-T - HW Version 009.000.003 |
| 0x03090004 | TVM ISDB-T - HW Version 009.000.004 |
| 0x03090005 | TVM ISDB-T - HW Version 009.000.005 |
| 0x03090006 | TVM ISDB-T - HW Version 009.000.006 |
| 0x03090007 | TVM ISDB-T - HW Version 009.000.007 |
| 0x03090008 | TVM ISDB-T - HW Version 009.000.008 |
| 0x03090009 | TVM ISDB-T - HW Version 009.000.009 |
| 0x03090100 | TVM ISDB-T - HW Version 009.001.000 |
| 0x03090101 | TVM ISDB-T - HW Version 009.001.001 |
| 0x03090102 | TVM ISDB-T - HW Version 009.001.002 |
| 0x03090103 | TVM ISDB-T - HW Version 009.001.003 |
| 0x03090104 | TVM ISDB-T - HW Version 009.001.004 |
| 0x03090105 | TVM ISDB-T - HW Version 009.001.005 |
| 0x03090106 | TVM ISDB-T - HW Version 009.001.006 |
| 0x03090107 | TVM ISDB-T - HW Version 009.001.007 |
| 0x03090108 | TVM ISDB-T - HW Version 009.001.008 |
| 0x03090109 | TVM ISDB-T - HW Version 009.001.009 |
| 0x03090200 | TVM ISDB-T - HW Version 009.002.000 |
| 0x03090201 | TVM ISDB-T - HW Version 009.002.001 |
| 0x03090202 | TVM ISDB-T - HW Version 009.002.002 |
| 0x03090203 | TVM ISDB-T - HW Version 009.002.003 |
| 0x03090204 | TVM ISDB-T - HW Version 009.002.004 |
| 0x03090205 | TVM ISDB-T - HW Version 009.002.005 |
| 0x03090206 | TVM ISDB-T - HW Version 009.002.006 |
| 0x03090207 | TVM ISDB-T - HW Version 009.002.007 |
| 0x03090208 | TVM ISDB-T - HW Version 009.002.008 |
| 0x03090209 | TVM ISDB-T - HW Version 009.002.009 |
| 0x03090300 | TVM ISDB-T - HW Version 009.003.000 |
| 0x03090301 | TVM ISDB-T - HW Version 009.003.001 |
| 0x03090302 | TVM ISDB-T - HW Version 009.003.002 |
| 0x03090303 | TVM ISDB-T - HW Version 009.003.003 |
| 0x03090304 | TVM ISDB-T - HW Version 009.003.004 |
| 0x03090305 | TVM ISDB-T - HW Version 009.003.005 |
| 0x03090306 | TVM ISDB-T - HW Version 009.003.006 |
| 0x03090307 | TVM ISDB-T - HW Version 009.003.007 |
| 0x03090308 | TVM ISDB-T - HW Version 009.003.008 |
| 0x03090309 | TVM ISDB-T - HW Version 009.003.009 |
| 0x03090400 | TVM ISDB-T - HW Version 009.004.000 |
| 0x03090401 | TVM ISDB-T - HW Version 009.004.001 |
| 0x03090402 | TVM ISDB-T - HW Version 009.004.002 |
| 0x03090403 | TVM ISDB-T - HW Version 009.004.003 |
| 0x03090404 | TVM ISDB-T - HW Version 009.004.004 |
| 0x03090405 | TVM ISDB-T - HW Version 009.004.005 |
| 0x03090406 | TVM ISDB-T - HW Version 009.004.006 |
| 0x03090407 | TVM ISDB-T - HW Version 009.004.007 |
| 0x03090408 | TVM ISDB-T - HW Version 009.004.008 |
| 0x03090409 | TVM ISDB-T - HW Version 009.004.009 |
| 0x03090500 | TVM ISDB-T - HW Version 009.005.000 |
| 0x03090501 | TVM ISDB-T - HW Version 009.005.001 |
| 0x03090502 | TVM ISDB-T - HW Version 009.005.002 |
| 0x03090503 | TVM ISDB-T - HW Version 009.005.003 |
| 0x03090504 | TVM ISDB-T - HW Version 009.005.004 |
| 0x03090505 | TVM ISDB-T - HW Version 009.005.005 |
| 0x03090506 | TVM ISDB-T - HW Version 009.005.006 |
| 0x03090507 | TVM ISDB-T - HW Version 009.005.007 |
| 0x03090508 | TVM ISDB-T - HW Version 009.005.008 |
| 0x03090509 | TVM ISDB-T - HW Version 009.005.009 |
| 0x03090600 | TVM ISDB-T - HW Version 009.006.000 |
| 0x03090601 | TVM ISDB-T - HW Version 009.006.001 |
| 0x03090602 | TVM ISDB-T - HW Version 009.006.002 |
| 0x03090603 | TVM ISDB-T - HW Version 009.006.003 |
| 0x03090604 | TVM ISDB-T - HW Version 009.006.004 |
| 0x03090605 | TVM ISDB-T - HW Version 009.006.005 |
| 0x03090606 | TVM ISDB-T - HW Version 009.006.006 |
| 0x03090607 | TVM ISDB-T - HW Version 009.006.007 |
| 0x03090608 | TVM ISDB-T - HW Version 009.006.008 |
| 0x03090609 | TVM ISDB-T - HW Version 009.006.009 |
| 0x03090700 | TVM ISDB-T - HW Version 009.007.000 |
| 0x03090701 | TVM ISDB-T - HW Version 009.007.001 |
| 0x03090702 | TVM ISDB-T - HW Version 009.007.002 |
| 0x03090703 | TVM ISDB-T - HW Version 009.007.003 |
| 0x03090704 | TVM ISDB-T - HW Version 009.007.004 |
| 0x03090705 | TVM ISDB-T - HW Version 009.007.005 |
| 0x03090706 | TVM ISDB-T - HW Version 009.007.006 |
| 0x03090707 | TVM ISDB-T - HW Version 009.007.007 |
| 0x03090708 | TVM ISDB-T - HW Version 009.007.008 |
| 0x03090709 | TVM ISDB-T - HW Version 009.007.009 |
| 0x03090800 | TVM ISDB-T - HW Version 009.008.000 |
| 0x03090801 | TVM ISDB-T - HW Version 009.008.001 |
| 0x03090802 | TVM ISDB-T - HW Version 009.008.002 |
| 0x03090803 | TVM ISDB-T - HW Version 009.008.003 |
| 0x03090804 | TVM ISDB-T - HW Version 009.008.004 |
| 0x03090805 | TVM ISDB-T - HW Version 009.008.005 |
| 0x03090806 | TVM ISDB-T - HW Version 009.008.006 |
| 0x03090807 | TVM ISDB-T - HW Version 009.008.007 |
| 0x03090808 | TVM ISDB-T - HW Version 009.008.008 |
| 0x03090809 | TVM ISDB-T - HW Version 009.008.009 |
| 0x03090900 | TVM ISDB-T - HW Version 009.009.000 |
| 0x03090901 | TVM ISDB-T - HW Version 009.009.001 |
| 0x03090902 | TVM ISDB-T - HW Version 009.009.002 |
| 0x03090903 | TVM ISDB-T - HW Version 009.009.003 |
| 0x03090904 | TVM ISDB-T - HW Version 009.009.004 |
| 0x03090905 | TVM ISDB-T - HW Version 009.009.005 |
| 0x03090906 | TVM ISDB-T - HW Version 009.009.006 |
| 0x03090907 | TVM ISDB-T - HW Version 009.009.007 |
| 0x03090908 | TVM ISDB-T - HW Version 009.009.008 |
| 0x03090909 | TVM ISDB-T - HW Version 009.009.009 |
| 0x04010100 | TVM DTMB - HW Version 001.001.000 |
| 0x04020000 | TVM DTMB - HW Version 002.000.000 |
| 0x04020001 | TVM DTMB - HW Version 002.000.001 |
| 0x04020002 | TVM DTMB - HW Version 002.000.002 |
| 0x04020003 | TVM DTMB - HW Version 002.000.003 |
| 0x04020004 | TVM DTMB - HW Version 002.000.004 |
| 0x04020005 | TVM DTMB - HW Version 002.000.005 |
| 0x04020006 | TVM DTMB - HW Version 002.000.006 |
| 0x04020007 | TVM DTMB - HW Version 002.000.007 |
| 0x04020008 | TVM DTMB - HW Version 002.000.008 |
| 0x04020009 | TVM DTMB - HW Version 002.000.009 |
| 0x04020100 | TVM DTMB - HW Version 002.001.000 |
| 0x04020101 | TVM DTMB - HW Version 002.001.001 |
| 0x04020102 | TVM DTMB - HW Version 002.001.002 |
| 0x04020103 | TVM DTMB - HW Version 002.001.003 |
| 0x04020104 | TVM DTMB - HW Version 002.001.004 |
| 0x04020105 | TVM DTMB - HW Version 002.001.005 |
| 0x04020106 | TVM DTMB - HW Version 002.001.006 |
| 0x04020107 | TVM DTMB - HW Version 002.001.007 |
| 0x04020108 | TVM DTMB - HW Version 002.001.008 |
| 0x04020109 | TVM DTMB - HW Version 002.001.009 |
| 0x04020200 | TVM DTMB - HW Version 002.002.000 |
| 0x04020201 | TVM DTMB - HW Version 002.002.001 |
| 0x04020202 | TVM DTMB - HW Version 002.002.002 |
| 0x04020203 | TVM DTMB - HW Version 002.002.003 |
| 0x04020204 | TVM DTMB - HW Version 002.002.004 |
| 0x04020205 | TVM DTMB - HW Version 002.002.005 |
| 0x04020206 | TVM DTMB - HW Version 002.002.006 |
| 0x04020207 | TVM DTMB - HW Version 002.002.007 |
| 0x04020208 | TVM DTMB - HW Version 002.002.008 |
| 0x04020209 | TVM DTMB - HW Version 002.002.009 |
| 0x04020300 | TVM DTMB - HW Version 002.003.000 |
| 0x04020301 | TVM DTMB - HW Version 002.003.001 |
| 0x04020302 | TVM DTMB - HW Version 002.003.002 |
| 0x04020303 | TVM DTMB - HW Version 002.003.003 |
| 0x04020304 | TVM DTMB - HW Version 002.003.004 |
| 0x04020305 | TVM DTMB - HW Version 002.003.005 |
| 0x04020306 | TVM DTMB - HW Version 002.003.006 |
| 0x04020307 | TVM DTMB - HW Version 002.003.007 |
| 0x04020308 | TVM DTMB - HW Version 002.003.008 |
| 0x04020309 | TVM DTMB - HW Version 002.003.009 |
| 0x04030400 | TVM DTMB - HW Version 003.004.000 |
| 0x04030401 | TVM DTMB - HW Version 003.004.001 |
| 0x04030402 | TVM DTMB - HW Version 003.004.002 |
| 0x04030403 | TVM DTMB - HW Version 003.004.003 |
| 0x04030404 | TVM DTMB - HW Version 003.004.004 |
| 0x04030405 | TVM DTMB - HW Version 003.004.005 |
| 0x04030406 | TVM DTMB - HW Version 003.004.006 |
| 0x04030407 | TVM DTMB - HW Version 003.004.007 |
| 0x04030408 | TVM DTMB - HW Version 003.004.008 |
| 0x04030409 | TVM DTMB - HW Version 003.004.009 |
| 0x04030500 | TVM DTMB - HW Version 003.005.000 |
| 0x04030501 | TVM DTMB - HW Version 003.005.001 |
| 0x04030502 | TVM DTMB - HW Version 003.005.002 |
| 0x04030503 | TVM DTMB - HW Version 003.005.003 |
| 0x04030504 | TVM DTMB - HW Version 003.005.004 |
| 0x04030505 | TVM DTMB - HW Version 003.005.005 |
| 0x04030506 | TVM DTMB - HW Version 003.005.006 |
| 0x04030507 | TVM DTMB - HW Version 003.005.007 |
| 0x04030508 | TVM DTMB - HW Version 003.005.008 |
| 0x04030509 | TVM DTMB - HW Version 003.005.009 |
| 0x04030600 | TVM DTMB - HW Version 003.006.000 |
| 0x04030601 | TVM DTMB - HW Version 003.006.001 |
| 0x04030602 | TVM DTMB - HW Version 003.006.002 |
| 0x04030603 | TVM DTMB - HW Version 003.006.003 |
| 0x04030604 | TVM DTMB - HW Version 003.006.004 |
| 0x04030605 | TVM DTMB - HW Version 003.006.005 |
| 0x04030606 | TVM DTMB - HW Version 003.006.006 |
| 0x04030607 | TVM DTMB - HW Version 003.006.007 |
| 0x04030608 | TVM DTMB - HW Version 003.006.008 |
| 0x04030609 | TVM DTMB - HW Version 003.006.009 |
| 0x04030700 | TVM DTMB - HW Version 003.007.000 |
| 0x04030701 | TVM DTMB - HW Version 003.007.001 |
| 0x04030702 | TVM DTMB - HW Version 003.007.002 |
| 0x04030703 | TVM DTMB - HW Version 003.007.003 |
| 0x04030704 | TVM DTMB - HW Version 003.007.004 |
| 0x04030705 | TVM DTMB - HW Version 003.007.005 |
| 0x04030706 | TVM DTMB - HW Version 003.007.006 |
| 0x04030707 | TVM DTMB - HW Version 003.007.007 |
| 0x04030708 | TVM DTMB - HW Version 003.007.008 |
| 0x04030709 | TVM DTMB - HW Version 003.007.009 |
| 0x04030800 | TVM DTMB - HW Version 003.008.000 |
| 0x04030801 | TVM DTMB - HW Version 003.008.001 |
| 0x04030802 | TVM DTMB - HW Version 003.008.002 |
| 0x04030803 | TVM DTMB - HW Version 003.008.003 |
| 0x04030804 | TVM DTMB - HW Version 003.008.004 |
| 0x04030805 | TVM DTMB - HW Version 003.008.005 |
| 0x04030806 | TVM DTMB - HW Version 003.008.006 |
| 0x04030807 | TVM DTMB - HW Version 003.008.007 |
| 0x04030808 | TVM DTMB - HW Version 003.008.008 |
| 0x04030809 | TVM DTMB - HW Version 003.008.009 |
| 0x04030900 | TVM DTMB - HW Version 003.009.000 |
| 0x04030901 | TVM DTMB - HW Version 003.009.001 |
| 0x04030902 | TVM DTMB - HW Version 003.009.002 |
| 0x04030903 | TVM DTMB - HW Version 003.009.003 |
| 0x04030904 | TVM DTMB - HW Version 003.009.004 |
| 0x04030905 | TVM DTMB - HW Version 003.009.005 |
| 0x04030906 | TVM DTMB - HW Version 003.009.006 |
| 0x04030907 | TVM DTMB - HW Version 003.009.007 |
| 0x04030908 | TVM DTMB - HW Version 003.009.008 |
| 0x04030909 | TVM DTMB - HW Version 003.009.009 |
| 0x04040000 | TVM DTMB - HW Version 004.000.000 |
| 0x04040001 | TVM DTMB - HW Version 004.000.001 |
| 0x04040002 | TVM DTMB - HW Version 004.000.002 |
| 0x04040003 | TVM DTMB - HW Version 004.000.003 |
| 0x04040004 | TVM DTMB - HW Version 004.000.004 |
| 0x04040005 | TVM DTMB - HW Version 004.000.005 |
| 0x04040006 | TVM DTMB - HW Version 004.000.006 |
| 0x04040007 | TVM DTMB - HW Version 004.000.007 |
| 0x04040008 | TVM DTMB - HW Version 004.000.008 |
| 0x04040009 | TVM DTMB - HW Version 004.000.009 |
| 0x04040100 | TVM DTMB - HW Version 004.001.000 |
| 0x04040101 | TVM DTMB - HW Version 004.001.001 |
| 0x04040102 | TVM DTMB - HW Version 004.001.002 |
| 0x04040103 | TVM DTMB - HW Version 004.001.003 |
| 0x04040104 | TVM DTMB - HW Version 004.001.004 |
| 0x04040105 | TVM DTMB - HW Version 004.001.005 |
| 0x04040106 | TVM DTMB - HW Version 004.001.006 |
| 0x04040107 | TVM DTMB - HW Version 004.001.007 |
| 0x04040108 | TVM DTMB - HW Version 004.001.008 |
| 0x04040109 | TVM DTMB - HW Version 004.001.009 |
| 0x04040200 | TVM DTMB - HW Version 004.002.000 |
| 0x04040201 | TVM DTMB - HW Version 004.002.001 |
| 0x04040202 | TVM DTMB - HW Version 004.002.002 |
| 0x04040203 | TVM DTMB - HW Version 004.002.003 |
| 0x04040204 | TVM DTMB - HW Version 004.002.004 |
| 0x04040205 | TVM DTMB - HW Version 004.002.005 |
| 0x04040206 | TVM DTMB - HW Version 004.002.006 |
| 0x04040207 | TVM DTMB - HW Version 004.002.007 |
| 0x04040208 | TVM DTMB - HW Version 004.002.008 |
| 0x04040209 | TVM DTMB - HW Version 004.002.009 |
| 0x04040300 | TVM DTMB - HW Version 004.003.000 |
| 0x04040301 | TVM DTMB - HW Version 004.003.001 |
| 0x04040302 | TVM DTMB - HW Version 004.003.002 |
| 0x04040303 | TVM DTMB - HW Version 004.003.003 |
| 0x04040304 | TVM DTMB - HW Version 004.003.004 |
| 0x04040305 | TVM DTMB - HW Version 004.003.005 |
| 0x04040306 | TVM DTMB - HW Version 004.003.006 |
| 0x04040307 | TVM DTMB - HW Version 004.003.007 |
| 0x04040308 | TVM DTMB - HW Version 004.003.008 |
| 0x04040309 | TVM DTMB - HW Version 004.003.009 |
| 0x04040400 | TVM DTMB - HW Version 004.004.000 |
| 0x04040401 | TVM DTMB - HW Version 004.004.001 |
| 0x04040402 | TVM DTMB - HW Version 004.004.002 |
| 0x04040403 | TVM DTMB - HW Version 004.004.003 |
| 0x04040404 | TVM DTMB - HW Version 004.004.004 |
| 0x04040405 | TVM DTMB - HW Version 004.004.005 |
| 0x04040406 | TVM DTMB - HW Version 004.004.006 |
| 0x04040407 | TVM DTMB - HW Version 004.004.007 |
| 0x04040408 | TVM DTMB - HW Version 004.004.008 |
| 0x04040409 | TVM DTMB - HW Version 004.004.009 |
| 0x04040500 | TVM DTMB - HW Version 004.005.000 |
| 0x04040501 | TVM DTMB - HW Version 004.005.001 |
| 0x04040502 | TVM DTMB - HW Version 004.005.002 |
| 0x04040503 | TVM DTMB - HW Version 004.005.003 |
| 0x04040504 | TVM DTMB - HW Version 004.005.004 |
| 0x04040505 | TVM DTMB - HW Version 004.005.005 |
| 0x04040506 | TVM DTMB - HW Version 004.005.006 |
| 0x04040507 | TVM DTMB - HW Version 004.005.007 |
| 0x04040508 | TVM DTMB - HW Version 004.005.008 |
| 0x04040509 | TVM DTMB - HW Version 004.005.009 |
| 0x04040600 | TVM DTMB - HW Version 004.006.000 |
| 0x04040601 | TVM DTMB - HW Version 004.006.001 |
| 0x04040602 | TVM DTMB - HW Version 004.006.002 |
| 0x04040603 | TVM DTMB - HW Version 004.006.003 |
| 0x04040604 | TVM DTMB - HW Version 004.006.004 |
| 0x04040605 | TVM DTMB - HW Version 004.006.005 |
| 0x04040606 | TVM DTMB - HW Version 004.006.006 |
| 0x04040607 | TVM DTMB - HW Version 004.006.007 |
| 0x04040608 | TVM DTMB - HW Version 004.006.008 |
| 0x04040609 | TVM DTMB - HW Version 004.006.009 |
| 0x04040700 | TVM DTMB - HW Version 004.007.000 |
| 0x04040701 | TVM DTMB - HW Version 004.007.001 |
| 0x04040702 | TVM DTMB - HW Version 004.007.002 |
| 0x04040703 | TVM DTMB - HW Version 004.007.003 |
| 0x04040704 | TVM DTMB - HW Version 004.007.004 |
| 0x04040705 | TVM DTMB - HW Version 004.007.005 |
| 0x04040706 | TVM DTMB - HW Version 004.007.006 |
| 0x04040707 | TVM DTMB - HW Version 004.007.007 |
| 0x04040708 | TVM DTMB - HW Version 004.007.008 |
| 0x04040709 | TVM DTMB - HW Version 004.007.009 |
| 0x04040800 | TVM DTMB - HW Version 004.008.000 |
| 0x04040801 | TVM DTMB - HW Version 004.008.001 |
| 0x04040802 | TVM DTMB - HW Version 004.008.002 |
| 0x04040803 | TVM DTMB - HW Version 004.008.003 |
| 0x04040804 | TVM DTMB - HW Version 004.008.004 |
| 0x04040805 | TVM DTMB - HW Version 004.008.005 |
| 0x04040806 | TVM DTMB - HW Version 004.008.006 |
| 0x04040807 | TVM DTMB - HW Version 004.008.007 |
| 0x04040808 | TVM DTMB - HW Version 004.008.008 |
| 0x04040809 | TVM DTMB - HW Version 004.008.009 |
| 0x04040900 | TVM DTMB - HW Version 004.009.000 |
| 0x04040901 | TVM DTMB - HW Version 004.009.001 |
| 0x04040902 | TVM DTMB - HW Version 004.009.002 |
| 0x04040903 | TVM DTMB - HW Version 004.009.003 |
| 0x04040904 | TVM DTMB - HW Version 004.009.004 |
| 0x04040905 | TVM DTMB - HW Version 004.009.005 |
| 0x04040906 | TVM DTMB - HW Version 004.009.006 |
| 0x04040907 | TVM DTMB - HW Version 004.009.007 |
| 0x04040908 | TVM DTMB - HW Version 004.009.008 |
| 0x04040909 | TVM DTMB - HW Version 004.009.009 |
| 0xFFFFFFFF | Nicht definiert |

### TMOSTLIGHT

| WERT | TEXT |
| --- | --- |
| 0x00 | Lichtleistung abgesenkt |
| 0x01 | Volle Lichtleistung |
| 0xFF | Nicht definiert |

### TWAKEUPSTATUS

| WERT | TEXT | TEXT2 |
| --- | --- | --- |
| 0x00 | not initialised | off |
| 0x01 | SG will be waked up | on |
| 0x02 | SG are waked up | critical |
| 0xFF | Nicht definiert | n/a |

### TLUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFE | Lüfter läuft mit unbekannter Drehzahl |
| 0xFF | Nicht definiert |
