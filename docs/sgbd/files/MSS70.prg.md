# MSS70.prg

## General

|  |  |
| --- | --- |
| File | MSS70.prg |
| Type | PRG |
| Jobs | 365 |
| Tables | 70 |
| Origin | BMW ZS-M-57 Dr. Wittmack |
| Revision | 1.003 |
| Author | BMW ZS-M-57 Dr. Wittmack, VFTIS EA-24 Ruff, VFTIS EA-24 Ginella |
| ECU Comment | SGBD für MSS70 B-Muster |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSS70 fuer S54  |  |  |
| ORIGIN | string | BMW ZS-M-57 Dr. Wittmack |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | BMW ZS-M-57 Dr. Wittmack, VFTIS EA-24 Ruff, VFTIS EA-24 Ginella |  |  |
| COMMENT | string | SGBD für MSS70 B-Muster  |  |  |
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

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

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

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### STATUS_MESSWERTBLOCK_LESEN

Lesen eines Messwertblockes Es muss immer das BlockSchreibenFlag und mindestens ein MESSWERT uebergeben werden. KWP2000: $2C DynamicallyDefinedLocalIdentifier $F0 DynamicallyDefinedLocalIdentifier $04 ClearDynamicallyDefinedLocalIdentifier KWP2000: $2C DynamicallyDefinedLocalIdentifier $F0 DynamicallyDefinedLocalIdentifier $02 DefineByCommonIdentifier KWP2000: $21 ReadDataByLocalIdentifier $F0 DynamicallyDefinedLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Wenn 'JA' wird der Messwertblock im SG gelöscht neu ins SG geschrieben und dann gelesen Wenn 'NEIN' wird der Messwertblock im SG nicht gelöscht Es wird der im SG gespeicherte Messwertblock gelesen table MesswerteMode TEXT KOMMENTAR |
| MESSWERT | string | Dynamische Argumente Es können bis zu 42 Argumente übergeben werden Es muss mindestens ein Argument übergeben werden Er wird das zugehörige Result table MesswerteTab ARG RESULTNAME erzeugt |

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

### _STATUS_OBD_MODE_01

Auslesen der Motor-Diagnosedaten nach Mode 01 PID 01  

_No arguments._

### _STATUS_OBD_MODE_03

Auslesen der P-Codes nach Mode 3  

_No arguments._

### _STATUS_OBD_MODE_07

Auslesen der P-Codes nach Mode 7  

_No arguments._

### SET_BAUDRATE

Initialisierung der Kommunikationsparameter mit bestimmter Baudrate

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE | string | die gewuenschte Baudrate |

### SET_PARAMETER

Aenderung der Kommunikationsparameter bei Long-Parametersätzen

| Name | Type | Description |
| --- | --- | --- |
| KONZEPT | string | Konzept |
| BAUDRATE | string | Baudrate |
| TIMEOUT | string | Timeout in ms |
| REGENERATIONSZEIT | string | Regenerationszeit in ms |
| TELEGRAMMENDEZEIT | string | Telegrammendezeit in ms |

### INTERFACETYPE

Interface-Typ bestimmen und ausgeben Es wird der Name des Interfaces übergeben Wichtig für Baudratenumschaltung weil bei ADS, EADS und OBD sind nur 115200 Baud möglich, bei EDIC nur 125000 Baud möglich

_No arguments._

### ACCESS_TIMING_PARAMETER

Aenderung der Timingparameter im SG

| Name | Type | Description |
| --- | --- | --- |
| P2MIN | int | P2min, Einheit: 0.5 ms |
| P2MAX | int | P2max, Einheit: 25 ms |
| P3MIN | int | P3min, Einheit: 0.5 ms |
| P3MAX | int | P3max, Einheit: 250 ms |
| P4MIN | int | P4min, Einheit: 0.5 ms |

### ACCESS_TIMING_PARAMETER_DEFAULT

Default-Timingparameter im SG

_No arguments._

### FS_LESEN_HEX

Fehlerspeicher auslesen als Hex Dump

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | Eingabe der FehlerNummer |

### MESSWERTBLOCK_LESEN

$2C F0 02 DDLI Messwerte aus Übergabestring definieren

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_MESSWERTE_VANOS

$2C F0 02 DDLI Messwerte CAM_IN und CAM_EX auf Wunsch von VS-22

_No arguments._

### FS_LESEN_FREEZE_FRAME

Fehlerspeicher auslesen mit SAE Werten Umwelt und P-Code

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | die Nummer des zu lesenden Fehlers eingeben |

### STATUS_MESSWERTE_KD

$2C F0 02 DDLI Messwerte nach Wunsch VS-22

_No arguments._

### IDENT_AIF

Identdaten mit KWP2000: $1A ReadECUIdentification Anwender Informations Felder mit KWP 2000: $23 ReadMemoryByAddress

_No arguments._

### STATUS_OBD

$21 05 Monitoring Funktionen und Status Bits

_No arguments._

### STATUS_READINESS

$21 05 Monitoring Funktionen und Status Bits

_No arguments._

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

_No arguments._

### STATUS_FGR

$21 07 MFL MultiFunktionsLekrad STATE_MSW_CAN

_No arguments._

### DISTANCE_MIL_ON

Auslesen Fahrstrecke mit MIL-eingeschaltet KWP 2000* $21 09 DIST_ACT_MIL ReadDataByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LUFT

Stand der Diagnose KWP 2000* $21 20 Status Systemtest SLS SekundärLuftSystem

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Status und Messströme KWP 2000* $21 22 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_TEV

Stand der Diagnose KWP 2000* $21 22 TEV ReadDataByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_EVAUSBL

welches EV-Ventil ist abgeschaltet KWP 2000* $21 25 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Stand der Diagnose KWP 2000* $21 27 VVT ReadDataByLocalIdentifier

_No arguments._

### STATUS_DIGITAL_3

Statusbit KOmpressorRELais KWP 2000* $21 36 LV_ACCOUT_RLY ReadDataByLocalIdentifier

_No arguments._

### STATUS_DIGITAL_4

Statusbit LeerLauf KWP 2000* $21 3F LV_IS ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_H_2

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 41 STATE_LSH_DOWN_2 ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_H_1

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 42 STATE_LSH_DOWN_1 ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_V_2

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 43 STATE_LSH_UP_2 ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_V_1

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 44 STATE_LSH_UP_1 ReadDataByLocalIdentifier

_No arguments._

### STATUS_EWS_LOCK

Statusbit LV_LOCK_IMOB = 1 blockt Zündung und Einspritzung KWP 2000* $21 49 ReadDataByLocalIdentifier

_No arguments._

### STATUS_ZEIT_EINSPRITZ

Auslesen der Einspritzzeit Zyl. 1 KWP 2000* $21 4C BIOS_TI_0

_No arguments._

### STATUS_ZUENDWINKEL

Auslesen des Zündwinkels Zylinder 1 KWP 2000* $21 56 IGA_IGC_0 ReadDataByLocalIdentifier

_No arguments._

### STATUS_DROSSELKLAPPE

Auslesen des Drosselklappen Winkels KWP 2000* $21 57 TPS_AV ReadDataByLocalIdentifier

_No arguments._

### STATUS_KLOPFEN

Auslesen des Status Klopfen erkannt 0/1 KWP 2000* $21 71 LV_KNK ReadDataByLocalIdentifier

_No arguments._

### STATUS_KVA

Auslesen Faktor KVA KWP 2000* $21 C1 kva-faktor ReadDataByLocalIdentifier

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

$ 21 C3 Status Betriebsstundenzaehler auslesen

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Stand der Diagnose KWP 2000* $21 DA DMTL ReadDataByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE

Stand der Diagnose KWP 2000* $21 DF vertauschte L-Sonden ReadDataByLocalIdentifier

_No arguments._

### STATUS_LEISTUNGSSTUFE

Auslesen der Codierung Obere/Untere Leistungsstufe KWP2000: $22 ReadDataByCommonIdentifier $3020 RecordCommonIdentifier

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl und LL-Sollwert KWP 2000* $22 40 00 Auszug

_No arguments._

### STATUS_DFMONITOR

Generator Belastung KWP2000: $22 40 01 ReadDataByCommonIdentifier dfmonitor

_No arguments._

### STATUS_DIGITAL_1

Status Schaltzustaende

_No arguments._

### STATUS_MOTORLAUFUNRUHE

$22 40 03 Laufunruhe fuer 6 Zylinder lesen

_No arguments._

### STATUS_GEBERRAD_ADAPTION

$2C F0 02 DDLI Messwerte für NWG-Adaptionen auslesen

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

$22 40 06 Nockenwellen Adaptionen

_No arguments._

### STATUS_DIGITAL_0

Status Schaltzustaende $22 40 07 Betriebszustaende

_No arguments._

### STATUS_FUNKTIONS

Status Schaltzustaende $22 40 07 Betriebszustaende

_No arguments._

### STATUS_ADAPTION_DK

$22 40 08 Adaption DK lesen

_No arguments._

### STATUS_ADAPTION_GEMISCH

$22 40 0A Adaption Lambda Regelung lesen

_No arguments._

### STATUS_FASTA_COMMON

Messwerteblock lesen KWP2000: $2C F0 02 DynamicallyDefinedLocalIdentifier

_No arguments._

### ECU_CONFIG

$22 5F F2 Fahrzeug Varianten lesen

_No arguments._

### SPEICHER_LESEN_ASCII

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### ECU_CONFIG_RESET

$22 5F F2 04 gelernte FahrzeugVarianten löschen

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_4 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_5 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STATUS_ADD

Auslesen der additiven Korrektur Bank 1 KWP 2000*  MFF_AD_ADD_MMV_REL[1]

_No arguments._

### STATUS_ADD_2

Auslesen der additiven Korrektur Bank 2 KWP 2000*  MFF_AD_ADD_MMV_REL[2]

_No arguments._

### STATUS_MUL

Auslesen des Korrekturfaktors Bank 1 KWP 2000*  MFF_AD_FAC_MMV_REL[1]

_No arguments._

### STATUS_MUL_2

Auslesen des Korrekturfaktors Bank 1 KWP 2000*  MFF_AD_FAC_MMV_REL[2]

_No arguments._

### STATUS_INT

Auslesen des Integrator Bank 1 KWP 2000*  TI_LAM_COR[1]

_No arguments._

### STATUS_INT_2

Auslesen des Integrator Bank 1 KWP 2000*  TI_LAM_COR[1]

_No arguments._

### STATUS_LL_ABGLEICH

LL-Abgleichswerte lesen

_No arguments._

### STEUERN_LL_ABGLEICH

LL-Abgleich vorgegeben -256 bis +254

| Name | Type | Description |
| --- | --- | --- |
| STAT_OFS_ACC_DRI | int | Abgleichswert LL mit Klima und Fahrbedingung |
| STAT_OFS_DRI | int | Abgleichswert LL mit Fahrstufe |
| STAT_OFS | int | Abgleichswert LL |
| STAT_OFS_ACC | int | Abgleichswert LL mit Klimaanlage |
| STAT_OFS_VB | int | Abgleichswert LL mit niedriger UBatt |

### STEUERN_LLABG_PROG

LL-Abgleichswerte werden vorgegeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_OFS_ACC_DRI | int | Abgleichswert LL mit Klima und Fahrbedingung |
| STAT_OFS_DRI | int | Abgleichswert LL mit Fahrstufe |
| STAT_OFS | int | Abgleichswert LL |
| STAT_OFS_ACC | int | Abgleichswert LL mit Klimaanlage |
| STAT_OFS_VB | int | Abgleichswert LL mit niedriger UBatt |

### FLASH_CRC_PRUEFEN

Codier Checksumme pruefen KWP2000: $31 StartRoutineByLocalIdentifier $01 Checksum

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit in Sekunden |

### DME_STARTWERT_ABGLEICH

Kopiert die ISN auf beide Wechselcodes KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

_No arguments._

### START_SYSTEMCHECK_SEK_LUFT

$31 20 Systemdiagnose SLS SekundärLuftSystem starten

_No arguments._

### START_SYSTEMCHECK_TEV_FUNC

$31 22 Systemdiagnose TEVstarten

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

$31 25 Systemdiagnose Einspritzventil abschalten

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | Zylinder 1 bis 6 Ventil ausgeblenden oder 63 alle |

### START_SYSTEMCHECK_LLERH

$31 26 Systemdiagnose EOL LL-Erhöhen starten

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | LL-Sollwert 0 bis 2000 1/min |

### START_SYSTEMCHECK_VVT_ANSCHLAG

$31 27 Systemdiagnose VVT-Anschläge lernen starten

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | 1 unten lernen, 6 beide lernen, 2 Byte Befehl sonst |

### EWS_STARTWERT

EWS-Startwertinitialisierung

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

$31 D9 01 Systemdiagnose LambdaRegelung abschalten

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

$31 D9 01 Systemdiagnose LambdaRegelung einschalten

_No arguments._

### START_SYSTEMCHECK_DMTL

$31 DA Systemdiagnose DMTL starten

_No arguments._

### START_SYSTEMCHECK_L_SONDE

$31 DF Systemdiagnose vertauschte L-Sonden starten

_No arguments._

### RESET_CRU_OFF

$31 F4 STATE_CRU_OFF_IRR und STATE_CRU_OFF_REV löschen

_No arguments._

### START_SYSTEMCHECK_VVT_SOLLWERT

$31 FE Systemdiagnose VVT Steuerung ueber CAN freigeben

_No arguments._

### STOP_SYSTEMCHECK_VVT_SOLLWERT

$31 FE Systemdiagnose VVT Steuerung ueber CAN freigeben

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

$32 20 Systemdiagnose SekundärLuftSystem beenden

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

$32 22 Systemdiagnose TEV beenden

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

$32 25 Ende Systemtest Ventil Abschalten

_No arguments._

### STOP_SYSTEMCHECK_LLERH

$32 26 EOL-Test LL-Anheben beenden

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

$32 27 Systemdiagnose VVT-Anschläge lernen starten

_No arguments._

### STOP_SYSTEMCHECK_DMTL

$32 DA Systemdiagnose DMTL beenden

_No arguments._

### STOP_SYSTEMCHECK_L_SONDE

$32 DF Systemdiagnose vertauschte L-Sonden beenden

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LAMBDA_WERT

Status und Luftmassen KWP 2000* $33 20 RequestRoutineResultsByLocalIdentifier 

_No arguments._

### STATUS_SYSTEMCHECK_TEV_WERT

Status und Messströme KWP 2000* $33 22 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_LLERH_WERT

aktuelle Drehzahl N KWP 2000* $33 26 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_DMTL_WERT

Status und Messströme KWP 2000* $33 DA RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE_WERTE

Status und Messwerte KWP 2000* $33 DF RequestRoutineResultsByLocalIdentifier

_No arguments._

### STEUERN_KVA

Faktor KVA Korrektur vorgeben KWP 2000* $3B C1 kva-faktor WriteDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Faktor KVA 80 - 7F = -0,128 - 0,127 |

### STATUS_ANALOG

Analogen Messwert periodisch lesen KWP2000: $2C F0 02 DynamicallyDefinedLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| DEVICE | string | Nummer nach DDLI Liste |

### STATUS_FASTA2

$2C F0 02 DDLI Messwerte nach Wunsch EA-36

_No arguments._

### STATUS_MESSWERTE_NL

$2C F0 02 DDLI Messwerte Klopfen nach Wunsch VS-22

_No arguments._

### STATUS_MESSWERTBLOCK_ADC

$21 F0 DDLI Messwerteblock lesen der zuletzt mit $2C F0 definiert wurde

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

_No arguments._

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

### INNENTEMP_LESEN

0x301001     Steuergeraete-Innentemperatur auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_AGK

0x30C101     Abgasklappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

0x300A01     Ansauglufttemperatur 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ANWS

0x30EE01     Vanos Auslass Ventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ANWSF

0x30A201     Ventil Vanos Auslass Frueh auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ANWSS

0x30A301     Ventil Vanos Auslass Spaet auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_AVS

0x30C001     Absperrventil Saugstrahlpumpe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_BLS

0x300201     Bremslichtschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_BLTS

0x300301     Bremslichttestschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_CO_ABGLEICH

0x225FF1     Abgleichwert CO (Kohlenmonoxid) auslesen

_No arguments._

### STATUS_CODIERUNG_IGR

0x223210     Codierung fuer IGR (Intelligente Generator-Regelung) auslesen

_No arguments._

### STATUS_CODIERUNG_KAT

0x223001     Codierung fuer Katalysator auslesen

_No arguments._

### STATUS_CODIERUNG_MIL

0x223000     Codierung fuer MIL (Malfunction Indication Lamp) auslesen

_No arguments._

### STATUS_CODIERUNG_OEL

0x223200     Codierung fuer Oelwechselintervall auslesen

_No arguments._

### STATUS_CODIERUNG_VMAX

0x223010     Codierung fuer maximale Geschwindigkeit auslesen

_No arguments._

### STATUS_CODIERUNG_XENON

0x223211     Codierung fuer Xenon-Lichtverbau auslesen

_No arguments._

### STATUS_DFV1A

0x3328     Auslesen Diagnosefunktion Auslass A-Vanostest 1 (Verstellzeit)

_No arguments._

### STATUS_DFV1E

0x3323     Auslesen Diagnosefunktion Einlass E-Vanostest 1 (Verstellzeit)

_No arguments._

### STATUS_DFV2A

0x3329     Auslesen Diagnosefunktion Auslass A-Vanostest 2 (Dichtigkeit)

_No arguments._

### STATUS_DFV2E

0x3324     Auslesen Diagnosefunktion Einlass E-Vanostest 2 (Dichtigkeit)

_No arguments._

### STATUS_DFVFA

0x33D3     Auslesen Diagnosefunktion Auslass A-Vanostest Fruehanschlag

_No arguments._

### STATUS_DFVFE

0x33D1     Auslesen Diagnosefunktion Einlass E-Vanostest Fruehanschlag

_No arguments._

### STATUS_DFVSA

0x33D4     Auslesen Diagnosefunktion Auslass A-Vanostest Spaetanschlag

_No arguments._

### STATUS_DFVSE

0x33D2     Auslesen Diagnosefunktion Einlass E-Vanostest Spaetanschlag

_No arguments._

### STATUS_DKP_VOLT

0x302A01     Drosselklappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DMTL_HEIZUNG

0x30CE01     Diagnosemodul-Tank Leckage Heizung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DMTL_P

0x30CC01     Diagnosemodul-Tank Leckage Pumpe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DMTL_V

0x30CD01     Diagnosemodul-Tank Leckage Ventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_E_LUEFTER

0x30DA01     E-Luefter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EBL

0x30C801     E-Box-Luefter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EISYGD

0x33E1     Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403)

_No arguments._

### STATUS_EISYUGD

0x33E0     Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403)

_No arguments._

### STATUS_EKP

0x30D801     Elektrische Kraftstoffpumpe 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EML

0x30D601     EML (Engine Malfunction Lamp) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ENERGIESPARMODE

0x22100A     Status Energiesparmode START-8B

_No arguments._

### STATUS_ENWS

0x30ED01     Vanos Einlass Ventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ENWSF

0x30A001     Ventil Vanos Einlass Frueh auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ENWSS

0x30A101     Ventil Vanos Einlass Spaet auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV1

0x30E101     Einspritzventil 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV2

0x30E201     Einspritzventil 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV3

0x30E301     Einspritzventil 3 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV4

0x30E401     Einspritzventil 4 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV5

0x30E501     Einspritzventil 5 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV6

0x30E601     Einspritzventil 6 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EWAP

0x30BF01     elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_FGRL

0x30D501     Fahrgeschwindigkeitsregler-Lampe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_FWV1

0x301E01     Fahrerwunschversorgung 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_FWV2

0x301F01     Fahrerwunschversorgung 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_GLF

0x30C301     Gesteuerte Luftfuehrung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_HFMS

0x302E01     Sekundaerluft HFM (Heissfilm Luftmassenmesser) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KB1

0x303001     Klopfbaustein 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KB2

0x303101     Klopfbaustein 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KFT

0x30C901     Kennfeldthermostat auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KGEH

0x30AD01     Kurbelgehaeuseentlueftungsheizung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KOREL

0x30C701     Klimakompressor-Relais auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KRANN

0x33E3     Auslesen Krann-Adaptionswerte (Anforderung aus CP5404)

_No arguments._

### STATUS_KUP

0x300401     Kupplungsschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE

0x302101     Lambdasonde vor Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE_2

0x302301     Lambdasonde vor Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE_2_H

0x302401     Lambdasonde hinter Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE_H

0x302201     Lambdasonde hinter Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LLS

0x309F01     Leerlaufsteller auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LMM_MASSE

0x302501     Luftmassenmesser 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LRP

0x225FF7     Laufruhepruefung auslesen

_No arguments._

### STATUS_LSH1

0x30D001     Lambdasondenheizung vor Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LSH2

0x30D101     Lambdasondenheizung hinter Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LSH3

0x30D201     Lambdasondenheizung vor Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LSH4

0x30D301     Lambdasondenheizung hinter Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_MESSWERTE_LRP

0x22402D     Messwerte Laufruhepruefung auslesen

_No arguments._

### STATUS_MIL

0x30D401     MIL (Malfunction Indicator Lamp) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_MOTORTEMPERATUR

0x300C01     Motortemperatur auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ODS

0x300501     Oeldruckschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_OEL

0x300E01     Oelsensor auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

0x302801     Fahrerwunsch 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_PWG2

0x302901     Fahrerwunsch 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_RBMMODE9

0x224026     Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9)

_No arguments._

### STATUS_RBMMS1

0x224027     Rate Based Monitoring Motorsteuerung MS... Block 1 auslesen (Vorhalt)

_No arguments._

### STATUS_RBMMS2

0x224028     Rate Based Monitoring Motorsteuerung MS... Block 2 auslesen (Vorhalt)

_No arguments._

### STATUS_SLP

0x30CB01     Sekundaerluftpumpe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SOK

0x30C201     Soundklappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SPT

0x300601     Sporttaster auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SR

0x30C401     Startrelais auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_TEV

0x30CF01     Tankentlueftungsventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_TKA

0x300D01     Kuehlerauslasstemperatur auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_TTEMP

0x302F01     Taster Tempomat auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UBAT

0x302701     Batteriesensor auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UBATT

0x301C01     Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UDF

0x301701     Umgebungsdruck auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UGEN

0x303201     Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UKL15

0x301B01     Kl.15 Spannung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_AGK

0x30C107     Abgasklappe ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK_WERT | unsigned long | Sollwert LV_ACT_EF_EXT_ADJ |
| SW_TO_AGK_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s |

### STEUERN_ANWS

0x30EE07     Vanos Auslass Ventil ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Sollwert Vanos_A Ventil CAM_SP_EX_EXT_ADJ |
| SW_TO_ANWS_WERT | unsigned long | Timeout Vanos_A Ventil 1BYTE in 0 bis 510s |

### STEUERN_ANWSF

0x30A207     Ventil Vanos Auslass Frueh ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWSF_WERT | unsigned long | Tastverhaeltniss Ventil Vanos Auslass Frueh 2BYTE_in_0_65534ms |
| SW_TO_ANWSF_WERT | unsigned long | Timeout Ventil Vanos Auslass Frueh 1BYTE in 0 bis 510s |

### STEUERN_ANWSR

0x2E5FFA07     Anschlagsadaption Auslass Vanos ruecksetzen vorgeben  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden.  N_LL nur bei Leerlauf-Drehzahl

_No arguments._

### STEUERN_ANWSS

0x30A307     Ventil Vanos Auslass Spaet ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWSS_WERT | unsigned long | Tastverhaeltniss Ventil Vanos Auslass Spaet 2BYTE_in_0_65534ms |
| SW_TO_ANWSS_WERT | unsigned long | Timeout Ventil Vanos Auslass Spaet 1BYTE in 0 bis 510s |

### STEUERN_AVS

0x30C007     Absperrventil Saugstrahlpumpe ansteuern V_EQ_ZERO nur bei Fahrzeuggeschwindigkeit v=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AVS_WERT | unsigned long | Tastverhaeltniss Absperrventil Saugstrahlpumpe LV_BSUP_EXT_ADJ |
| SW_TO_AVS_WERT | unsigned long | Timeout Absperrventil Saugstrahlpumpe 1BYTE in 0 bis 510s |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

0x2E5FF108     Abgleichwert CO (Kohlenmonoxid) programmieren NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_CO_ABGLEICH_RESET

0x2E5FF104     Abgleichwert CO (Kohlenmonoxid) loeschen NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

0x2E5FF107     Abgleichwert CO (Kohlenmonoxid) vorgeben NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| STAT_CO_ABGLEICH_WERT | real | Abgleichwert CO (Kohlenmonoxid) FAC_MFF_ADD_EXT_ADJ |

### STEUERN_CODIERUNG_IGR

0x2E3210     Codierung fuer IGR (Intelligente Generator-Regelung) vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_CODIERUNG_IGR_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_CODIERUNG_KAT

0x2E3001     Codierung fuer Katalysator vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_CODIERUNG_KAT_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_CODIERUNG_MIL

0x2E3000     Codierung fuer MIL (Malfunction Indication Lamp) vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_CODIERUNG_MIL_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_CODIERUNG_OEL

0x2E3200     Codierung fuer Oelwechselintervall vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_CODIERUNG_OEL_1_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |
| STAT_CODIERUNG_OEL_2_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_CODIERUNG_VMAX

0x2E3010     Codierung fuer maximale Geschwindigkeit vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_CODIERUNG_VMAX_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_CODIERUNG_XENON

0x2E3211     Codierung fuer Xenon-Lichtverbau vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_CODIERUNG_XENON_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_DFV1A

0x3128     Ansteuern Diagnosefunktion Auslass A-Vanostest 1 (Verstellzeit)

_No arguments._

### STEUERN_DFV1E

0x3123     Ansteuern Diagnosefunktion Einlass E-Vanostest 1 (Verstellzeit)

_No arguments._

### STEUERN_DFV2A

0x3129     Ansteuern Diagnosefunktion Auslass A-Vanostest 2 (Dichtigkeit)

_No arguments._

### STEUERN_DFV2E

0x3124     Ansteuern Diagnosefunktion Einlass E-Vanostest 2 (Dichtigkeit)

_No arguments._

### STEUERN_DFVFA

0x31D3     Ansteuern Diagnosefunktion Auslass A-Vanostest Fruehanschlag

_No arguments._

### STEUERN_DFVFE

0x31D1     Ansteuern Diagnosefunktion Einlass E-Vanostest Fruehanschlag

_No arguments._

### STEUERN_DFVSA

0x31D4     Ansteuern Diagnosefunktion Auslass A-Vanostest Spaetanschlag

_No arguments._

### STEUERN_DFVSE

0x31D2     Ansteuern Diagnosefunktion Einlass E-Vanostest Spaetanschlag

_No arguments._

### STEUERN_DK

0x302A07     Drosselklappe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Sollwert Drosselklappe TPS_SP_EXT_ADJ |
| SW_TO_DK_WERT | unsigned long | Timeout Drosselklappe 1BYTE in 0 bis 510s |

### STEUERN_DMTL_HEIZUNG

0x30CE07     Diagnosemodul-Tank Leckage Heizung ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Heizung LV_ACT_DMTLH_EXT_ADJ |
| SW_TO_DMTLH_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung 1BYTE in 0 bis 510s |

### STEUERN_DMTL_P

0x30CC07     Diagnosemodul-Tank Leckage Pumpe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Pumpe LV_ACT_DMTL_PUMP_EXT_ADJ |
| SW_TO_DMTL_P_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe 1BYTE in 0 bis 510s |

### STEUERN_DMTL_V

0x30CD07     Diagnosemodul-Tank Leckage Ventil ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Ventil LV_ACT_DMTLS_EXT_ADJ |
| SW_TO_DMTL_V_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil 1BYTE in 0 bis 510s |

### STEUERN_E_LUEFTER

0x30DA07     E-Luefter ansteuern CON_ELUE nur bei Motortemperatur TMOT kleiner 115gradCelsius

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE_WERT | real | Tastverhaeltniss E-Luefter ECFPWM_ECF_EXT_ADJ |
| SW_TO_ELUE_WERT | unsigned long | Timeout E-Luefter 1BYTE in 0 bis 510s |

### STEUERN_EBL

0x30C807     E-Box-Luefter ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EBL_WERT | unsigned long | Sollwert E-Box-Luefter LV_ACT_EBOX_CFA_EXT_ADJ |
| SW_TO_EBL_WERT | unsigned long | Timeout E-Box-Luefter 1BYTE in 0 bis 510s |

### STEUERN_EISYGD

0x31E1     Ansteuern Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI |
| WDK_IST_WERT | real | Aktueller Drosselklappenwinkel WDK_IST |

### STEUERN_EISYUGD

0x31E0     Ansteuern Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI |
| HUBEV_IST_WERT | real | Istwert Einlassventilhub HUBEV_IST |

### STEUERN_EKP

0x30D807     Elektrische Kraftstoffpumpe 1 ansteuern     Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1_WERT | unsigned long | Sollwert Elektrische Kraftstoffpumpe 1  (Ausnahme fuer Rueckwaertskompatibilitaet SGBD MSV70) 1BYTE 0x00-0xFF in 0 oder 1 |
| SW_TO_EKP1_WERT | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 1BYTE in 0 bis 510s |

### STEUERN_EML

0x30D607     EML (Engine Malfunction Lamp) ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML_WERT | unsigned long | Sollwert EML (Engine Malfunction Lamp) LV_ACT_WAL_1_EXT_ADJ |
| SW_TO_EML_WERT | unsigned long | Timeout EML (Engine Malfunction Lamp) 1BYTE in 0 bis 510s |

### STEUERN_ENDE_AGK

0x30C100     Abgasklappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ANWS

0x30EE00     Vanos Auslass Ventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ANWSF

0x30A200     Ventil Vanos Auslass Frueh Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ANWSR

0x2E5FFA00     Anschlagsadaption Auslass Vanos ruecksetzen Vorgeben beenden  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden.  NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ANWSS

0x30A300     Ventil Vanos Auslass Spaet Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_AVS

0x30C000     Absperrventil Saugstrahlpumpe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DFV1A

0x3228     Ende Diagnosefunktion Auslass A-Vanostest 1 (Verstellzeit)

_No arguments._

### STEUERN_ENDE_DFV1E

0x3223     Ende Diagnosefunktion Einlass E-Vanostest 1 (Verstellzeit)

_No arguments._

### STEUERN_ENDE_DFV2A

0x3229     Ende Diagnosefunktion Auslass A-Vanostest 2 (Dichtigkeit)

_No arguments._

### STEUERN_ENDE_DFV2E

0x3224     Ende Diagnosefunktion Einlass E-Vanostest 2 (Dichtigkeit)

_No arguments._

### STEUERN_ENDE_DFVFA

0x32D3     Ende Diagnosefunktion Auslass A-Vanostest Fruehanschlag

_No arguments._

### STEUERN_ENDE_DFVFE

0x32D1     Ende Diagnosefunktion Einlass E-Vanostest Fruehanschlag

_No arguments._

### STEUERN_ENDE_DFVSA

0x32D4     Ende Diagnosefunktion Auslass A-Vanostest Spaetanschlag

_No arguments._

### STEUERN_ENDE_DFVSE

0x32D2     Ende Diagnosefunktion Einlass E-Vanostest Spaetanschlag

_No arguments._

### STEUERN_ENDE_DK

0x302A00     Drosselklappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DMTL_HEIZUNG

0x30CE00     Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DMTL_P

0x30CC00     Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DMTL_V

0x30CD00     Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_E_LUEFTER

0x30DA00     E-Luefter Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EBL

0x30C800     E-Box-Luefter Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EKP

0x30D800     Elektrische Kraftstoffpumpe 1 Ansteuerung beenden     Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EML

0x30D600     EML (Engine Malfunction Lamp) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ENWS

0x30ED00     Vanos Einlass Ventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ENWSF

0x30A000     Ventil Vanos Einlass Frueh Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ENWSR

0x2E5FF900     Anschlagsadaption Einlass Vanos ruecksetzen Vorgeben beenden  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden.  NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ENWSS

0x30A100     Ventil Vanos Einlass Spaet Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV1

0x30E100     Einspritzventil 1 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV2

0x30E200     Einspritzventil 2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV3

0x30E300     Einspritzventil 3 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV4

0x30E400     Einspritzventil 4 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV5

0x30E500     Einspritzventil 5 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV6

0x30E600     Einspritzventil 6 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EWAP

0x30BF00     elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_FGRL

0x30D500     Fahrgeschwindigkeitsregler-Lampe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_GLF

0x30C300     Gesteuerte Luftfuehrung Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_KFT

0x30C900     Kennfeldthermostat Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_KGEH

0x30AD00     Kurbelgehaeuseentlueftung Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_KOREL

0x30C700     Klimakompressor-Relais Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LLS

0x309F00     Leerlaufsteller Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LRP

0x2E5FF700     Laufruhepruefung Vorgeben beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH1

0x30D000     Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH2

0x30D100     Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH3

0x30D200     Lambdasondenheizung vor Kat Bank2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH4

0x30D300     Lambdasondenheizung hinter Kat Bank2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_MIL

0x30D400     MIL (Malfunction Indicator Lamp) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SLP

0x30CB00     Sekundaerluftpumpe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SOK

0x30C200     Soundklappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SR

0x30C400     Startrelais Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_TEV

0x30CF00     Tankentlueftungsventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_UGEN

0x303200     Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_UVSG

0x301C00     Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENERGIESPARMODE

0x310C     Energiesparmode aktivieren START-97

| Name | Type | Description |
| --- | --- | --- |
| EGY_WERT | unsigned long | recordLocalID 1BYTE IDENTICAL DEC EGY |

### STEUERN_ENWS

0x30ED07     Vanos Einlass Ventil ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS_WERT | real | Sollwert Vanos_E Ventil CAM_SP_IN_EXT_ADJ |
| SW_TO_ENWS_WERT | unsigned long | Timeout Vanos_E Ventil 1BYTE in 0 bis 510s |

### STEUERN_ENWSF

0x30A007     Ventil Vanos Einlass Frueh ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWSF_WERT | unsigned long | Tastverhaeltniss Ventil Vanos Einlass Frueh 2BYTE_in_0_65534ms |
| SW_TO_ENWSF_WERT | unsigned long | Timeout Ventil Vanos Einlass Frueh 1BYTE in 0 bis 510s |

### STEUERN_ENWSR

0x2E5FF907     Anschlagsadaption Einlass Vanos ruecksetzen vorgeben  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden.  N_LL nur bei Leerlauf-Drehzahl

_No arguments._

### STEUERN_ENWSS

0x30A107     Ventil Vanos Einlass Spaet ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWSS_WERT | unsigned long | Tastverhaeltniss Ventil Vanos Einlass Spaet 2BYTE_in_0_65534ms |
| SW_TO_ENWSS_WERT | unsigned long | Timeout Ventil Vanos Einlass Spaet 1BYTE in 0 bis 510s |

### STEUERN_EV1

0x30E107     Einspritzventil 1 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1_WERT | unsigned long | Periodendauer Einspritzventil 1 1BYTE in 0 bis 2550ms |
| SW_TV_EV1_WERT | real | Sollwert Einspritzventil 1 IV_EXT_ADJ[0] |
| SW_TO_EV1_WERT | unsigned long | Timeout Einspritzventil 1 1BYTE in 0 bis 510s |

### STEUERN_EV2

0x30E207     Einspritzventil 2 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2_WERT | unsigned long | Periodendauer Einspritzventil 2 1BYTE in 0 bis 2550ms |
| SW_TV_EV2_WERT | real | Sollwert Einspritzventil 2 IV_EXT_ADJ[4] |
| SW_TO_EV2_WERT | unsigned long | Timeout Einspritzventil 2 1BYTE in 0 bis 510s |

### STEUERN_EV3

0x30E307     Einspritzventil 3 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3_WERT | unsigned long | Periodendauer Einspritzventil 3 1BYTE in 0 bis 2550ms |
| SW_TV_EV3_WERT | real | Sollwert Einspritzventil 3 IV_EXT_ADJ[2] |
| SW_TO_EV3_WERT | unsigned long | Timeout Einspritzventil 3 1BYTE in 0 bis 510s |

### STEUERN_EV4

0x30E407     Einspritzventil 4 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4_WERT | unsigned long | Periodendauer Einspritzventil 4 1BYTE in 0 bis 2550ms |
| SW_TV_EV4_WERT | real | Sollwert Einspritzventil 4 IV_EXT_ADJ[5] |
| SW_TO_EV4_WERT | unsigned long | Timeout Einspritzventil 4 1BYTE in 0 bis 510s |

### STEUERN_EV5

0x30E507     Einspritzventil 5 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV5_WERT | unsigned long | Periodendauer Einspritzventil 5 1BYTE in 0 bis 2550ms |
| SW_TV_EV5_WERT | real | Sollwert Einspritzventil 5 IV_EXT_ADJ[1] |
| SW_TO_EV5_WERT | unsigned long | Timeout Einspritzventil 5 1BYTE in 0 bis 510s |

### STEUERN_EV6

0x30E607     Einspritzventil 6 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV6_WERT | unsigned long | Periodendauer Einspritzventil 6 1BYTE in 0 bis 2550ms |
| SW_TV_EV6_WERT | real | Sollwert Einspritzventil 6 IV_EXT_ADJ[3] |
| SW_TO_EV6_WERT | unsigned long | Timeout Einspritzventil 6 1BYTE in 0 bis 510s |

### STEUERN_EWAP

0x30BF07     elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) ansteuern CON_EWAP nur bei Fahrzeuggeschwindigkeit v=0 und Motortemperatur TMOT kleiner 115gradCelsius und Batteriespannung UBAT groesser 10Volt

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP_WERT | real | Sollwert elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) N_REL_CWP_SP_EXT_ADJ |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s |

### STEUERN_EWAP_SF

0x30BF07     Sonderfunktionen elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) ansteuern CON_EWAP nur bei Fahrzeuggeschwindigkeit v=0 und Motortemperatur TMOT kleiner 115gradCelsius und Batteriespannung UBAT groesser 10Volt

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EWAP_WERT | unsigned long | Periodendauer elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 2550ms |
| SW_TV_EWAP_SF_WERT | string | Sonderfunktionen elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE EWAP SF |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s |

### STEUERN_FGRL

0x30D507     Fahrgeschwindigkeitsregler-Lampe ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_FGRL_WERT | unsigned long | Sollwert Fahrgeschwindigkeitsregler-Lampe LV_ACT_CRU_EXT_ADJ |
| SW_TO_FGRL_WERT | unsigned long | Timeout Fahrgeschwindigkeitsregler-Lampe 1BYTE in 0 bis 510s |

### STEUERN_GLF

0x30C307     Gesteuerte Luftfuehrung ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | unsigned long | Sollwert Gesteuerte Luftfuehrung LV_ACT_ECRAS_EXT_ADJ |
| SW_TO_GLF_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung 1BYTE in 0 bis 510s |

### STEUERN_KFT

0x30C907     Kennfeldthermostat ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT_WERT | real | Sollwert Kennfeldthermostat ECTPWM_EXT_ADJ |
| SW_TO_KFT_WERT | unsigned long | Timeout Kennfeldthermostat 1BYTE in 0 bis 510s |

### STEUERN_KGEH

0x30AD07     Kurbelgehaeuseentlueftung ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KGEH_WERT | unsigned long | Sollwert Kurbelgehaeuseentlueftung LV_EVC_CRCV_OFF_EXT_ADJ |
| SW_TO_KGEH_WERT | unsigned long | Timeout Kurbelgehaeuseentlueftung 1BYTE in 0 bis 510s |

### STEUERN_KOREL

0x30C707     Klimakompressor-Relais ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KOREL_WERT | unsigned long | Sollwert Klimakompressor-Relais LV_ACT_ACCOUT_RLY_EXT_ADJ |
| SW_TO_KOREL_WERT | unsigned long | Timeout Klimakompressor-Relais 1BYTE in 0 bis 510s |

### STEUERN_KRANN

0x31E3     Ansteuern Krann-Adaptionswerte (Anforderung aus CP5404)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL |
| RF_WERT | real | Relative Luftfuellung RF |
| TANS_WERT | real | Ansauglufttemperatur TANS |
| TMOT_WERT | real | Kuehlwassertemperatur TMOT |
| BA_IST_WERT | string | Istbetriebsart BA_IST |

### STEUERN_LEISTUNGSSTUFE

0x2E3020     Codierung fuer Leistungsstufe vorgeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_LEISTUNGSSTUFE_WERT | unsigned long | Ausgabe 1 Byte in dezimaler Form, ohne Umrechnung 1BYTE in 0 bis 255 |

### STEUERN_LLS

0x309F07     Leerlaufsteller ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LLS_WERT | real | Tastverhaeltniss Leerlaufsteller ISAPWM_EXT_ADJ |
| SW_TO_LLS_WERT | unsigned long | Timeout Leerlaufsteller 1BYTE in 0 bis 510s |

### STEUERN_LRP

0x2E5FF707     Laufruhepruefung vorgeben NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_GEMISCHEINGRIFF_INAKTIV_WERT | unsigned long | Gemischeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_ZUENDWINKELEINGRIFF_INAKTIV_WERT | unsigned long | Zuendwinkeleingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_MINHUBEINGRIFF_INAKTIV_WERT | unsigned long | Minhubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_HUBEINGRIFF_INAKTIV_WERT | unsigned long | zylinderselektiver Hubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_LRP_BIT4_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT5_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT6_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT7_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |

### STEUERN_LSH1

0x30D007     Lambdasondenheizung vor Kat Bank1 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 LSHPWM_UP_EXT_ADJ[1] |
| SW_TO_LSH1_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 510s |

### STEUERN_LSH2

0x30D107     Lambdasondenheizung hinter Kat Bank1 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank1 LSHPWM_DOWN_EXT_ADJ[1] |
| SW_TO_LSH2_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank1 1BYTE in 0 bis 510s |

### STEUERN_LSH3

0x30D207     Lambdasondenheizung vor Kat Bank2 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH3_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank2 LSHPWM_UP_EXT_ADJ[2] |
| SW_TO_LSH3_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank2 1BYTE in 0 bis 510s |

### STEUERN_LSH4

0x30D307     Lambdasondenheizung hinter Kat Bank2 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH4_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank2 LSHPWM_DOWN_EXT_ADJ[2] |
| SW_TO_LSH4_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank2 1BYTE in 0 bis 510s |

### STEUERN_MIL

0x30D407     MIL (Malfunction Indicator Lamp) ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL_WERT | unsigned long | Sollwert MIL (Malfunction Indicator Lamp) LV_ACT_MIL_EXT_ADJ |
| SW_TO_MIL_WERT | unsigned long | Timeout MIL (Malfunction Indicator Lamp) 1BYTE in 0 bis 510s |

### STEUERN_PROGRAMM_LRP

0x2E5FF708     Laufruhepruefung programmieren NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_GEMISCHEINGRIFF_INAKTIV_WERT | unsigned long | Gemischeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_ZUENDWINKELEINGRIFF_INAKTIV_WERT | unsigned long | Zuendwinkeleingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_MINHUBEINGRIFF_INAKTIV_WERT | unsigned long | Minhubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_HUBEINGRIFF_INAKTIV_WERT | unsigned long | zylinderselektiver Hubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_LRP_BIT4_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT5_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT6_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT7_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |

### STEUERN_SLP

0x30CB07     Sekundaerluftpumpe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SLP_WERT | unsigned long | Sollwert Sekundaerluftpumpe LV_ACT_SAP_EXT_ADJ |
| SW_TO_SLP_WERT | unsigned long | Timeout Sekundaerluftpumpe 1BYTE in 0 bis 510s |

### STEUERN_SOK

0x30C207     Soundklappe ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SOK_WERT | unsigned long | Sollwert Soundklappe LV_ACT_SOF_EXT_ADJ |
| SW_TO_SOK_WERT | unsigned long | Timeout Soundklappe 1BYTE in 0 bis 510s |

### STEUERN_SR

0x30C407     Startrelais ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SR_WERT | unsigned long | Sollwert Startrelais LV_ACT_RLY_ST_EXT_ADJ |
| SW_TO_SR_WERT | unsigned long | Timeout Startrelais 1BYTE in 0 bis 510s |

### STEUERN_TEV

0x30CF07     Tankentlueftungsventil ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV_WERT | real | TastverhaeltnissTankentlueftungsventil CPPWM_EXT_ADJ |
| SW_TO_TEV_WERT | unsigned long | Timeout Tankentlueftungsventil 1BYTE in 0 bis 510s |

### STEUERN_UGEN

0x303207     Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern N_LL nur bei Leerlauf-Drehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UGEN_WERT | real | Spannung Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) V_ALTER_SP_EXT_ADJ |
| SW_TO_UGEN_WERT | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s |

### STEUERN_UVSG

0x301C07     Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) ansteuern V_N_EQ_ZERO nur bei Fahrzeuggeschwindigkeit v=0 und Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_UVSG_WERT | unsigned long | Sollwert Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) LV_RLY_MAIN_EXT_ADJ |
| SW_TO_UVSG_WERT | unsigned long | Timeout Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) 1BYTE in 0 bis 510s |

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

### HARTTEXTE

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

### MESSWERTEMODE

| TEXT | WERT | KOMMENTAR |
| --- | --- | --- |
| ein | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| aus | 0 | Argument ARG.   Messwertblock nur lesen |
| ja | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| nein | 0 | Argument ARG.   Messwertblock nur lesen |
| yes | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| no | 0 | Argument ARG.   Messwertblock nur lesen |
| on | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| off | 0 | Argument ARG.   Messwertblock nur lesen |
| 1 | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| 0 | 0 | Argument ARG.   Messwertblock nur lesen |
| 3 | 3 | Argument ID.    Messwertblock im SG löschen, neu schreiben und lesen |
| 2 | 2 | Argument ID.    Messwertblock nur lesen |
| 5 | 5 | Argument LABEL. Messwertblock im SG löschen, neu schreiben und lesen |
| 4 | 4 | Argument LABEL. Messwertblock nur lesen |

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
| 2 | BMW-FAST |
| 1 | KWP2000* |
| 3 | KWP2000 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | 00654301 |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | Diagnose läuft nicht |
| xxxxxxx1 | 11 | Diagnose läuft |
| xxxxx0xx | 30 | Zyklus-Flag nicht gesetzt |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt |
| xxxx0xxx | 40 | kein Fehler durch Tester |
| xxxx1xxx | 41 | Fehler durch Tester |
| xxx0xxxx | 50 | MIL aus |
| xxx1xxxx | 51 | MIL ein |
| xx0xxxxx | 60 | Fehler in Entprellphase |
| xx1xxxxx | 61 | Fehler entprellt, keine Scan Tool Ausgabe |
| xxxxxxxx | 0 | -- |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### FARTSTATUSTEXTE

| BITNR | BITTEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | Fehler momentan vorhanden |
| 0x02 | Fehler geprueft |
| 0x11 | E-Flag entprellt |
| 0x12 | CARB-entprellt |
| 0x13 | SCATT-aktiv |
| 0x14 | MIL ein |
| 0x15 | MIL blink |
| 0x16 | Fehler sporadisch |

### FARTERWTEXTE

| BITNR | BITTEXT |
| --- | --- |
| 0x00 | nicht aktiv             |
| 0x11 | Diagnose aktiv          |
| 0x12 | Diagnose gestoppt       |
| 0x13 | Zyklus-Flag gesetzt     |
| 0x14 | Error-Flag gesetzt      |
| 0x15 | MIL ein                 |
| 0x16 | Fehler in Entprellphase |
| 0xXY | Status unbekannt |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| STAT_KL15_EIN | 0 | 0x01 | 0x01 |
| STAT_MOTOR_AUS | 0 | 0x02 | 0x02 |
| STAT_KUPPL_EIN | 0 | 0x04 | 0x04 |
| STAT_BLS_EIN | 0 | 0x08 | 0x08 |
| STAT_BTS_EIN | 0 | 0x10 | 0x10 |
| STAT_KO_EIN | 0 | 0x80 | 0x80 |
| OBD_MIL | 0 | 0x80 | 0x80 |
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
| OBD_MISSFIRE_MONITOR | 0 | 0x01 | 0x01 |
| OBD_FUEL_MONITOR | 0 | 0x02 | 0x02 |
| OBD_COMPREHENSIVE_MONITOR | 0 | 0x04 | 0x04 |
| OBD_MISSFIRE | 0 | 0x10 | 0x10 |
| OBD_FUELSYSTEM | 0 | 0x20 | 0x20 |
| OBD_COMPREHENSIVE | 0 | 0x40 | 0x40 |
| OBD_KAT_UEBERWACHUNG | 1 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG | 1 | 0x02 | 0x02 |
| OBD_EVAPORATE | 1 | 0x04 | 0x04 |
| OBD_SEC_AIR | 1 | 0x08 | 0x08 |
| OBD_AC_SYSTEM | 1 | 0x10 | 0x10 |
| OBD_LAMBDA | 1 | 0x20 | 0x20 |
| OBD_LAMBDA_HEATER | 1 | 0x40 | 0x40 |
| OBD_EGR | 1 | 0x80 | 0x80 |
| OBD_KAT_UEBERWACHUNG_MONITOR | 2 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG_MONITOR | 2 | 0x02 | 0x02 |
| OBD_EVAPORATE_MONITOR | 2 | 0x04 | 0x04 |
| OBD_SEC_AIR_MONITOR | 2 | 0x08 | 0x08 |
| OBD_AC_SYSTEM_MONITOR | 2 | 0x10 | 0x10 |
| OBD_LAMBDA_MONITOR | 2 | 0x20 | 0x20 |
| OBD_LAMBDA_HEATER_MONITOR | 2 | 0x40 | 0x40 |
| OBD_EGR_MONITOR | 2 | 0x80 | 0x80 |
| STAT_STATE_MSW_CAN_PLUS | 0 | 0x03 | 0x01 |
| STAT_STATE_MSW_CAN_MINUS | 0 | 0x03 | 0x02 |
| STAT_STATE_MSW_CAN_SET | 0 | 0x03 | 0x03 |
| STAT_STATE_MSW_CAN_OFF | 0 | 0x04 | 0x04 |
| STAT_LL_EIN | 0 | 0x01 | 0x01 |
| STAT_TEILLAST_EIN | 0 | 0x03 | 0x00 |
| STAT_VL_EIN | 0 | 0x02 | 0x02 |
| STAT_LSHK2_EIN | 0 | 0x04 | 0x04 |
| STAT_LSHK1_EIN | 0 | 0x08 | 0x08 |
| STAT_LSVK2_EIN | 0 | 0x10 | 0x10 |
| STAT_LSVK1_EIN | 0 | 0x20 | 0x20 |
| STAT_LS2_REGELUNG | 0 | 0x40 | 0x40 |
| STAT_LS1_REGELUNG | 0 | 0x80 | 0x80 |
| STAT_KICKDOWN | 1 | 0x04 | 0x04 |
| STAT_FAHRSTUFE | 1 | 0x08 | 0x08 |
| STAT_SCHUBAB | 1 | 0x40 | 0x40 |
| STAT_DK_ABGLEICH | 1 | 0x80 | 0x80 |
| STAT_DYN_LIM_1 | 2 | 0x01 | 0x01 |
| STAT_DYN_LIM_2 | 2 | 0x02 | 0x02 |
| STAT_FEHLER_CLSW | 2 | 0x04 | 0x04 |
| STAT_FEHLER_MFL | 2 | 0x08 | 0x08 |
| STAT_TIMEOUT_EGS1 | 2 | 0x10 | 0x10 |
| STAT_FEHLER_BREMSE | 2 | 0x20 | 0x20 |
| STAT_MON_LEVEL2 | 3 | 0x01 | 0x01 |
| STAT_V_PLAUSIBEL | 3 | 0x02 | 0x02 |
| STAT_NOTLAUF_LL | 3 | 0x04 | 0x04 |
| STAT_NOTLAUF_DK | 3 | 0x08 | 0x08 |
| STAT_FEHLER_VS | 3 | 0x10 | 0x10 |
| STAT_ASR_TIMEOUT | 3 | 0x20 | 0x20 |
| STAT_EGAS_NOTLAUF | 3 | 0x40 | 0x40 |
| STAT_VS_DIF_HOCH | 4 | 0x01 | 0x01 |
| STAT_UEBERN_LANG | 4 | 0x02 | 0x02 |
| STAT_VS_SP_MAX | 4 | 0x04 | 0x04 |
| STAT_EXT_MOMENT | 4 | 0x08 | 0x08 |
| STAT_MFL_AUS | 4 | 0x10 | 0x10 |
| STAT_VS_CAN_LANG | 5 | 0x01 | 0x01 |
| STAT_BESCHL_MON | 5 | 0x02 | 0x02 |
| STAT_HOCHDREH_S | 5 | 0x04 | 0x04 |
| STAT_TAKEOVER_VS | 5 | 0x08 | 0x08 |
| STAT_VS_FIL_LOW | 5 | 0x10 | 0x10 |
| STAT_DREHZAHL_BEG | 5 | 0x20 | 0x20 |
| STAT_BREMSE_AKTIV | 5 | 0x40 | 0x40 |
| STAT_MFL_HARD_OFF | 5 | 0x80 | 0x80 |
| STAT_FS | 1 | 0x04 | 0x04 |

### LAMBDASTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | 1 Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | 2 Regelung EIN |
| 0x04 | 3 Regelung AUS wegen Fahrbedingung |
| 0x08 | 4 Regelung AUS wegen erkanntem Fehler |
| 0x10 | 5 Regelung EIN mit Einschraenkung (Sensor Fehler) |
| 0xXY | Status unbekannt |

### BETRIEBSSTUNDENSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Betriebsstundenzaehler verstanden und akzeptiert (top_w < 10h) |
| 0x01 | Betriebsstundenzaehler verstanden aber nicht akzeptiert (top_w > 10h) |
| 0x02 | Betriebsstundenzaehler nicht verstanden und nicht akzeptiert |
| 0xXY | Betriebsstundenzaehler kann nicht ausgegeben werden |

### STATE_GEAR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Neutral oder Park/Neutral |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x07 | R  Rückwärtsgang |
| 0xFF | FF unbekanntes Getriebe |

### STATE_TQ_CAN_PLAUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 kein externer Eingriff |
| 0x01 | 01 Traktionskontrolle |
| 0x02 | 02 Sequentielles Manuelles Getriebe |
| 0x04 | 04 Getriebesteuerung |
| 0x08 | 08 Abstandsregelung |
| 0x10 | 10 Anti Roll Stabilisierung |
| 0x20 | 20 Servolenkung Typ 2 |
| 0xFF | FF unbekannter Eingriff |

### TPS_AD_STEP

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Position Notlauf 1 |
| 0x01 |  1 Position oberer Anschlag |
| 0x02 |  2 Position Notlauf 2 |
| 0x03 |  3 Positionen Ende |
| 0x04 |  4 Adaption Notlauf 1 |
| 0x05 |  5 Adaption oberer Anschlag |
| 0x06 |  6 Adaption Notlauf 2 |
| 0x07 |  7 Adaption unterer Ansschlag |
| 0x08 |  8 Adaption Notlauf |
| 0x09 |  9 Adaption Notlauf 3 |
| 0x0A | 10 Adaption Ende |
| 0xFF | FF Status unbekannt |

### _CNV_S_3_STATE_RLY__396

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  Was soll ich hier nur ausgeben ? |
| 0x01 | Relais offen |
| 0x02 | Relais geschlossen |
| 0xFF | FF Status unbekannt |

### STATE_CP

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Tankentlüftung nicht aktiv |
| 0x01 |  1 Tankentlüftung keine |
| 0x02 |  2 Tankentlüftung Minimum |
| 0x03 |  3 Tankentlüftung öffnen |
| 0x04 |  4 Tankentlüftung schnell öffnen |
| 0x05 |  5 Tankentlüftung Maximum |
| 0x06 |  6 Tankentlüftung schliessen |
| 0x07 |  7 Tankentlüftung warten auf offen |
| 0xFF | FF Status unbekannt |

### STATE_SA

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Systemtest Sekundärluft nicht aktiv |
| 0x01 |  1 Systemtest Sekundärluft verzögert |
| 0x02 |  2 Systemtest Sekundärluft aktiv |
| 0x03 |  3 Systemtest Sekundärluft Unterbrechung |
| 0x04 |  4 Systemtest Sekundärluft Pumpe verzögert |
| 0x05 |  5 Systemtest Sekundärluft nicht aktiv |
| 0x06 |  6 Systemtest Sekundärluft abgebrochen |
| 0x07 |  7 Sekundärluft externe Ansteuerung |
| 0x08 |  8 Sekundärluft externe Ansteuerung beendet |
| 0x09 |  9 Bandendetest Sekundärluft aktiv |
| 0x0A | 10 Bandendetest Sekundärluft Pumpe |
| 0x0B | 11 Bandendetest Sekundärluft  Ende |
| 0xFF | FF Status unbekannt |

### VAL_MO3_ERR_CODE_MU

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 kein Fehler |
| 0x01 |  1 Falscher Header in der Kommunikation |
| 0x02 |  2 Fehler Prüfsumme in Kommunikation |
| 0x03 |  3 Fehler Ausgang Extension |
| 0x04 |  4 MU passt nicht zu MC Software |
| 0x05 |  5 Timeout Fehler Maximum |
| 0x06 |  6 Timeout Fehler Minimum |
| 0x07 |  7 RAM Fehler |
| 0x08 |  8 ROM Fehler |
| 0x09 |  9 Fehler Level 2 |
| 0x0A | 10 Redundant switch off path was triggerd by MC |
| 0x0B | 11 Programmablauf Überwachung 1 |
| 0x0C | 12 Programmablauf Überwachung 2 |
| 0x0D | 13 Programmablauf Überwachung 3 |
| 0x0E | 14 Programmablauf Überwachung 4 |
| 0x0F | 15 Programmablauf Überwachung 5 |
| 0x10 | 16 Programmablauf Überwachung 6 |
| 0x11 | 17 Programmablauf Überwachung 7 |
| 0x12 | 18 Programmablauf Überwachung 8 |
| 0x13 | 19 Watchdog Fehler |
| 0x14 | 20 Fehler Kommunikation, falsches enable Byte |
| 0xFF | FF Status unbekannt |

### VAL_MO3_ERR_CODE_MC

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 kein Fehler |
| 0x01 |  1 Fehler Prüfsumme in Kommunikation |
| 0x02 |  2 Falscher Header von MU |
| 0x03 |  3 Predrive Check: MU schaltet Endstufen nicht ab |
| 0x04 |  4 SW Referenz: MU sendet falsche SW Version |
| 0x05 |  5 SW Referenz: MU sendet falschen Varianten code |
| 0x06 |  6 Kopie Prozessüberwachung: MU incrementiert nicht ABC_CPM_MU |
| 0x07 |  7 Kopie Prozessüberwachung: MU incrementiert nicht Frage |
| 0x08 |  8 Programmablauf: MU ändert nicht die Kontrollbits |
| 0x09 |  9 ROM Test Level 2 |
| 0x0A | 10 RAM Test Level 2 |
| 0x0B | 11 ROM Test Level 1 |
| 0x0C | 12 ROM Test Level 2 |
| 0xFF | FF Status unbekannt |

### CONF_SOF_SWI

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 kein Sporttaster |
| 0x01 | 1 Sporttaster vorhanden |
| 0x02 | 2 Sporttaster mit SSG |
| 0xFF | FFStatus unbekannt |

### STATE_MSW_CAN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 keine Taste gedrückt |
| 0x01 | 1 Beschleunigen / Taste+ |
| 0x02 | 2 Verlangsamen / Taste- |
| 0x03 | 3 Taste Setzen / Wiederaufnahme |
| 0x04 | 4 Taste I/O |
| 0x06 | 6 Fehler |
| 0x07 | 7 kein Text in Spec |
| 0xFF | FFStatus unbekannt |

### EWSSTART

| WERT | UWTEXT |
| --- | --- |
| 0x00 | DME bereit Startwert zu empfangen |
| 0x01 | kein freier Startwert Speicherplatz vorhanden |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel |
| 0xXY | unbekannter Status |

### EWSEMPFANGSSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Startwert verstanden und akzeptiert |
| 0x01 | Startwert verstanden aber nicht akzeptiert |
| 0x02 | Startwert nicht verstanden |
| 0x03 | Interfacefehler: Frame oder Parity oder Timeout |
| 0x04 | Prozess laeuft |
| 0x05 | Startwert Programmierung/Synchronisation wird nicht ausgefuehrt in diesem Zyklus |
| 0x06 | Dieselbe Zufallszahl wie beim letzten Start |
| 0x07 | Kein Startwert programmiert |
| 0x21 | 2 aus 3 Startwert im Flasch nicht ok |
| 0xXY | unbekannter Status |

### STATE_DIAGCPS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 Systemtest TEV Initialisierung |
| 0x01 | 01 Systemtest TEV Schritt 1 |
| 0x02 | 02 Systemtest TEV Schritt 2 |
| 0x03 | 03 Systemtest TEV Schritt 3 |
| 0x04 | 04 Systemtest TEV Rampe |
| 0x05 | 05 Systemtest TEV abgeschlossen LOCK_STEP |
| 0xXY | FF Systemtest TEV unbekannter Wert |

### FUNKTIONSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Funktion nicht aktiv |
| 0x01 | 1 Systemtest kann nicht gestartet werden |
| 0x05 | 5 Systemtest ist nicht gestartet |
| 0x06 | 6 Systemtest ist beendet |
| 0x07 | 7 Externe Ansteuerung gestartet |
| 0x08 | 8 Externe Ansteuerung beendet |
| 0xXY | Status kann nicht ausgegeben werden |

### DIAGNOSE_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 01 Systemtest läuft |
| 0x03 | 03 Systemtest beendet, Messwerte gültig |
| 0x06 | 06 Systemtest Start nicht möglich |
| 0x07 | 07 Systemtest nicht gestartet |
| 0xXY | FF Systemtest unbekannter Wert |

### DIAGNOSE_DMTL_WERT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Start |
| 0x01 | 1 Referenzleck Messung |
| 0x02 | 2 Grobleck Messung Start |
| 0x03 | 3 Grobleck Messung erweitert |
| 0x04 | 4 Grobleck Messung beendet |
| 0x05 | 5 Feinleck Messung Start |
| 0x06 | 6 Feinleck Messung erweitert |
| 0x07 | 7 2. Referenzleck Messung |
| 0x08 | 8 Tank geprüft |
| 0x09 | 9 Feinleck |
| 0x0A | A Grobleck |
| 0x0B | B Modulfehler |
| 0x0C | C Ende |
| 0x11 | 11 Batteriespannung aus gültigem Bereich |
| 0x12 | 12 elektrischer Fehler |
| 0x21 | 21 Tank Nachfüllen festgestellt |
| 0x22 | 22 Tankverschluss offen |
| 0x23 | 23 Batteriespannung Fluktuation zu hoch |
| 0x24 | 24 Diagnose maximale Zeit erreicht |
| 0x25 | 25 Fluktuationen Referenzstrom zu hoch |
| 0x26 | 26 Pumpenstrom abgefallen während der Messung |
| 0x0100 | 1 Funktion läuft |
| 0x0300 | 3 Werte gültig |
| 0x0600 | 6 Start verhindert |
| 0x0700 | 7 nicht gestartet |
| 0xXY | XY Status kann nicht ausgegeben werden |

### STATUS_EOL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 01 Systemtest läuft |
| 0x03 | 03 Systemtest beendet, Messwerte gültig |
| 0x05 | 05 Systemtest abgebrochen, keine Werte |
| 0x06 | 06 Systemtest Start nicht möglich |
| 0x07 | 07 Systemtest nicht gestartet |
| 0xXY | FF Systemtest unbekannter Wert |

### EOL_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Funktionstest läuft |
| 0x01 | 1 Startbedingungen nicht erfüllt |
| 0x02 | 2 Übergabeparameter nicht plausibel |
| 0x03 | 3 Funktion wartet auf Freigabe |
| 0x05 | 5 Funktion noch nicht gestartet |
| 0x06 | 6 Funktion beendet |
| 0x07 | 7 Funktion abgebrochen |
| 0x08 | 8 Funktion durchlaufen und kein Fehler erkannt |
| 0x09 | 9 Funktion durchlaufen und Fehler erkannt |
| 0xFF | FF Status kann nicht ausgegeben werden |

### SYSTEMCHECK_STATE_CHK_LS

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Diagnose Anfang |
| 0x01 |  1 Diagnose Schritt FETT |
| 0x02 |  2 Diagnose Schritt MAGER |
| 0x03 |  3 Diagnose Ende |
| 0xFF | XY Status kann nicht ausgegeben werden |

### STATE_DIAG_SA_LS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Systemtest SLS nicht aktiv |
| 0x01 | 1 Systemtest SLS wartet |
| 0x02 | 2 Systemtest SLS Luftmassen Überwachung |
| 0x03 | 3 Systemtest SLS Diagnose unterbrochen |
| 0x04 | 4 Systemtest SLS wartet auf Ventil Diagnose |
| 0x05 | 5 Systemtest SLS Ventil Diagnose |
| 0x06 | 6 Systemtest SLS in Prüfung |
| 0x07 | 7 Systemtest SLS beendet |
| 0x08 | 8 Systemtest SLS abgebrochen |
| 0xFF | XY Status kann nicht ausgegeben werden |

### STATE_VLS_EOL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Diagnose nicht aktiv |
| 0x01 | 1 Diagnose Schritt 1 |
| 0x02 | 2 Diagnose Schritt 2 |
| 0x10 | 10 Diagnose beendet, Sonden OK |
| 0x11 | 11 Diagnose beendet, Sonden vor Kat vertauscht |
| 0x12 | 12 Diagnose beendet, Sonden nach Kat vertauscht |
| 0x13 | 13 Diagnose beendet, Sonden vor und nach Kat vertauscht |
| 0x14 | 14 Diagnose beendet, Sonden vor Kat Bank 1 nicht plausibel |
| 0x15 | 15 Diagnose beendet, Sonden vor Kat Bank 2 nicht plausibel |
| 0x16 | 16 Diagnose beendet, Sonden nach Kat Bank 1 nicht plausibel |
| 0x17 | 17 Diagnose beendet, Sonden nach Kat Bank 2 nicht plausibel |
| 0x18 | 18 Diagnose beendet, keine brauchbaren Ergebnisse |
| 0xFF | FF Status kann nicht ausgegeben werden |

### STATUS_REGLER_LSH_DOWN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 Heizung aus |
| 0x01 | 01 Heizung Vorheizphase |
| 0x02 | 02 Heizung langsam herunterregeln |
| 0x03 | 03 Heizung schnell herunterregelm |
| 0x04 | 04 Heizung langsam heraufregeln |
| 0x05 | 05 Batteriespannung Schutz |
| 0xXY | FF Heizung unbekannter Wert |

### STATUS_REGLER_LSH_UP

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 Heizung aus |
| 0x01 | 01 Heizung langsam heraufregeln |
| 0x02 | 02 Heizung schnell herunterregelm |
| 0x03 | 03 Heizung langsam herunterregeln |
| 0x04 | 04 Heizung Regelung aktiv |
| 0x05 | 05 Batteriespannung Schutz |
| 0x06 | 06 Temperatur Schutz |
| 0xXY | FF Heizung unbekannter Wert |

### GROBNAME

| ADR | GROBNAME |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | MRS |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE |
| 0x16 | AFS |
| 0x17 | EKP |
| 0x18 | EGS |
| 0x19 | VGSG |
| 0x1C | LDM |
| 0x1D | FFP |
| 0x20 | RDC |
| 0x21 | ACC |
| 0x24 | CVM |
| 0x27 | PGS |
| 0x29 | DSC |
| 0x30 | EPS |
| 0x35 | SVS |
| 0x36 | TEL |
| 0x37 | AMP |
| 0x38 | EHC |
| 0x3B | NAV |
| 0x3C | CDC |
| 0x3F | ASK |
| 0x40 | CAS |
| 0x41 | DWA |
| 0x44 | SHD/MDS |
| 0x47 | ANTTU |
| 0x4B | VIDEO |
| 0x50 | SINE |
| 0x54 | RADIO |
| 0x56 | FZD |
| 0x60 | KOMBI |
| 0x61 | FBI |
| 0x62 | MOSTGW |
| 0x63 | MASK/CCC |
| 0x64 | PDC |
| 0x67 | ZBE |
| 0x6D | FAS |
| 0x6E | BFS |
| 0x71 | AHM |
| 0x72 | FRM |
| 0x73 | CID |
| 0x78 | KLIMA |
| 0xA0 | CCC |
| 0x90 | VIRTSG90 |
| 0x91 | VIRTSG91 |
| 0x92 | VIRTSG92 |
| 0xXY | ???? |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x29CC | 0x5824 | 0x5834 | 0x583C | 0x586D |
| 0x29CD | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29CE | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29CF | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D0 | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D1 | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D2 | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D9 | 0x5811 | 0x586D | 0x581F | 0x583B |
| 0x29DA | 0x5811 | 0x583C | 0x58F8 | 0x58F9 |
| 0x29DB | 0x5811 | 0x581F | 0x5818 | 0x583C |
| 0x29DC | 0x581F | 0x5818 | 0x5811 | 0x583B |
| 0x29F4 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29F5 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x2A12 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A13 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A15 | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x2A16 | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A17 | 0x583B | 0x5859 | 0x5867 | 0x5824 |
| 0x2A18 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A19 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A1A | 0x581F | 0x5818 | 0x5811 | 0x584D |
| 0x2A1B | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A1C | 0x580D | 0x5815 | 0x583B | 0x5867 |
| 0x2A2E | 0x581F | 0x5818 | 0x5811 | 0x58E2 |
| 0x2A2F | 0x581F | 0x5818 | 0x5811 | 0x58E2 |
| 0x2A80 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A82 | 0x5811 | 0x581A | 0x581B | 0x581F |
| 0x2A85 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A87 | 0x5811 | 0x581C | 0x581D | 0x581F |
| 0x2A92 | 0x580A | 0x5812 | 0x5814 | 0x58FF |
| 0x2A93 | 0x580A | 0x5812 | 0x5814 | 0x58FF |
| 0x2A94 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A95 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A96 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A97 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A98 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A99 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9A | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9B | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9C | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A9E | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A9F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA0 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA1 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA2 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA3 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AAD | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAE | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AB2 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB3 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB4 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB5 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB6 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AC6 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AC7 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2ACB | 0x588B | 0x584A | 0x587C | 0x583C |
| 0x2ACC | 0x5843 | 0x584A | 0x587C | 0x583C |
| 0x2AD0 | 0x5832 | 0x5881 | 0x587C | 0x583C |
| 0x2ADF | 0x5811 | 0x5812 | 0x5813 | 0x5814 |
| 0x2AE0 | 0x5811 | 0x5812 | 0x5882 | 0x5815 |
| 0x2AE1 | 0x5811 | 0x5818 | 0x580E | 0x58D1 |
| 0x2AE5 | 0x5811 | 0x5812 | 0x5882 | 0x5815 |
| 0x2AE6 | 0x5811 | 0x5812 | 0x5882 | 0x5815 |
| 0x2AE7 | 0x5811 | 0x5812 | 0x5882 | 0x5815 |
| 0x2C24 | 0x5805 | 0x588B | 0x5845 | 0x5848 |
| 0x2C27 | 0x588C | 0x5849 | 0x5871 | 0x5845 |
| 0x2C28 | 0x588F | 0x584B | 0x5873 | 0x5848 |
| 0x2C2B | 0x588C | 0x5849 | 0x5871 | 0x5845 |
| 0x2C2C | 0x588F | 0x584B | 0x5873 | 0x5848 |
| 0x2C2D | 0x58FF | 0x5845 | 0x587D | 0x588C |
| 0x2C2E | 0x58FF | 0x5848 | 0x587E | 0x588F |
| 0x2C31 | 0x5849 | 0x5845 | 0x5878 | 0x58F5 |
| 0x2C32 | 0x584B | 0x5848 | 0x5879 | 0x58F6 |
| 0x2C39 | 0x582E | 0x5845 | 0x5830 | 0x588C |
| 0x2C3A | 0x582F | 0x5848 | 0x5831 | 0x588F |
| 0x2C3B | 0x588B | 0x5849 | 0x5845 | 0x588C |
| 0x2C3C | 0x588B | 0x584B | 0x5848 | 0x588F |
| 0x2C3D | 0x5871 | 0x589B | 0x5845 | 0x588C |
| 0x2C3E | 0x5873 | 0x589C | 0x5848 | 0x588F |
| 0x2C3F | 0x5837 | 0x5815 | 0x5845 | 0x5827 |
| 0x2C40 | 0x5838 | 0x5815 | 0x5848 | 0x5828 |
| 0x2C41 | 0x589B | 0x582C | 0x5845 | 0x5815 |
| 0x2C42 | 0x589C | 0x582D | 0x5848 | 0x5815 |
| 0x2C6A | 0x581F | 0x588B | 0x5849 | 0x584B |
| 0x2C6B | 0x5845 | 0x585C | 0x5811 | 0x5849 |
| 0x2C6C | 0x5848 | 0x585D | 0x5811 | 0x584B |
| 0x2C6D | 0x5896 | 0x585C | 0x5811 | 0x5849 |
| 0x2C6E | 0x5897 | 0x585D | 0x5811 | 0x584B |
| 0x2C73 | 0x5896 | 0x585C | 0x5849 | 0x588B |
| 0x2C74 | 0x5897 | 0x585D | 0x584B | 0x588B |
| 0x2C75 | 0x5896 | 0x585C | 0x5849 | 0x588B |
| 0x2C76 | 0x5897 | 0x585D | 0x584B | 0x588B |
| 0x2C77 | 0x5896 | 0x585C | 0x5849 | 0x588B |
| 0x2C78 | 0x5897 | 0x585D | 0x584B | 0x588B |
| 0x2C7B | 0x5896 | 0x585C | 0x5849 | 0x5845 |
| 0x2C7C | 0x5897 | 0x585D | 0x584B | 0x5848 |
| 0x2C7E | 0x5849 | 0x5845 | 0x5878 | 0x58F5 |
| 0x2C7F | 0x584B | 0x5848 | 0x5879 | 0x58F6 |
| 0x2C92 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x2C93 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x2C9C | 0x588C | 0x588B | 0x5815 | 0x5827 |
| 0x2C9D | 0x588F | 0x588B | 0x5815 | 0x5828 |
| 0x2C9E | 0x5896 | 0x585C | 0x5849 | 0x5829 |
| 0x2C9F | 0x5897 | 0x585D | 0x584B | 0x582A |
| 0x2CA6 | 0x5894 | 0x5815 | 0x5827 | 0x588C |
| 0x2CA7 | 0x5895 | 0x5815 | 0x5828 | 0x588F |
| 0x2CA8 | 0x5896 | 0x585C | 0x5829 | 0x5849 |
| 0x2CA9 | 0x5897 | 0x585D | 0x582A | 0x584B |
| 0x2CEC | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CED | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEE | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEF | 0x5858 | 0x583F | 0x587C | 0x583C |
| 0x2CF6 | 0x58AB | 0x5812 | 0x584C | 0x584E |
| 0x2CF7 | 0x58AC | 0x5812 | 0x584C | 0x584E |
| 0x2CF9 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFA | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFB | 0x584E | 0x584C | 0x58B0 | 0x583C |
| 0x2D06 | 0x5811 | 0x58FF | 0x58FF | 0x5812 |
| 0x2D07 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D09 | 0x5811 | 0x581E | 0x581F | 0x587C |
| 0x2D0F | 0x584F | 0x5811 | 0x5858 | 0x58FF |
| 0x2D1B | 0x5846 | 0x5847 | 0x5843 | 0x583C |
| 0x2D1C | 0x5846 | 0x5847 | 0x5854 | 0x583C |
| 0x2D1D | 0x5843 | 0x5854 | 0x5846 | 0x583C |
| 0x2D1E | 0x5843 | 0x5854 | 0x5847 | 0x583C |
| 0x2D1F | 0x5843 | 0x5854 | 0x5846 | 0x5847 |
| 0x2D20 | 0x5846 | 0x5847 | 0x5843 | 0x5814 |
| 0x2D50 | 0x58B8 | 0x580D | 0x58B7 | 0x5881 |
| 0x2D51 | 0x58BD | 0x5818 | 0x58CF | 0x58B8 |
| 0x2D52 | 0x58B8 | 0x58C0 | 0x58C1 | 0x5832 |
| 0x2D53 | 0x58B8 | 0x58B9 | 0x587C | 0x5839 |
| 0x2D54 | 0x58D9 | 0x58DA | 0x58DB | 0x58DC |
| 0x2D55 | 0x58B8 | 0x5814 | 0x5846 | 0x5847 |
| 0x2D56 | 0x58C7 | 0x58C8 | 0x58C9 | 0x58CA |
| 0x2D57 | 0x58BF | 0x5881 | 0x5893 | 0x583C |
| 0x2D58 | 0x58D4 | 0x58D6 | 0x58CD | 0x5832 |
| 0x2D59 | 0x58B8 | 0x5832 | 0x58CF | 0x58D0 |
| 0x2D5A | 0x5811 | 0x5832 | 0x58CF | 0x58D1 |
| 0x2D5C | 0x58B8 | 0x5847 | 0x5854 | 0x583C |
| 0x2DB5 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB6 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB7 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DBE | 0x580D | 0x5811 | 0x5832 | 0x587C |
| 0x2DC0 | 0x5811 | 0x5813 | 0x5832 | 0x5891 |
| 0x2DC6 | 0x580D | 0x5815 | 0x583B | 0x5867 |
| 0x2DC8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DC9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DCC | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DCD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DCE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DE0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2E18 | 0x5811 | 0x5812 | 0x58B1 | 0x583C |
| 0x2E19 | 0x5811 | 0x5812 | 0x58B5 | 0x583C |
| 0x2E1A | 0x5811 | 0x5812 | 0x58B3 | 0x583C |
| 0x2E1B | 0x5811 | 0x5812 | 0x58B6 | 0x583C |
| 0x2E1C | 0x5811 | 0x5812 | 0x58B2 | 0x583C |
| 0x2E1D | 0x5811 | 0x5812 | 0x58B4 | 0x583C |
| 0x2E24 | 0x5811 | 0x5812 | 0x58B1 | 0x583C |
| 0x2E25 | 0x5811 | 0x5812 | 0x58B5 | 0x583C |
| 0x2E26 | 0x5811 | 0x5812 | 0x58B3 | 0x583C |
| 0x2E27 | 0x5811 | 0x5812 | 0x58B6 | 0x583C |
| 0x2E28 | 0x5811 | 0x5812 | 0x58B2 | 0x583C |
| 0x2E29 | 0x5811 | 0x5812 | 0x58B4 | 0x583C |
| 0x2E30 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E31 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E32 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E33 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E34 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E35 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E68 | 0x5811 | 0x5812 | 0x5883 | 0x5885 |
| 0x2E69 | 0x5811 | 0x5812 | 0x5886 | 0x5888 |
| 0x2E77 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2E7C | 0x5811 | 0x583C | 0x5867 | 0x587C |
| 0x2E8B | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8C | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8D | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8E | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E97 | 0x5811 | 0x5898 | 0x587C | 0x583C |
| 0x2E98 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2E9F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2EA1 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2EE0 | 0x5850 | 0x581F | 0x5824 | 0x581E |
| 0x2EE1 | 0x581F | 0x5820 | 0x583C | 0x58FF |
| 0x2EE2 | 0x581F | 0x5820 | 0x5824 | 0x5882 |
| 0x2EE3 | 0x581F | 0x5820 | 0x5824 | 0x587F |
| 0x2EEA | 0x5852 | 0x5820 | 0x5824 | 0x581E |
| 0x2EEB | 0x5820 | 0x581F | 0x5824 | 0x58FF |
| 0x2EEC | 0x5820 | 0x5882 | 0x581F | 0x5832 |
| 0x2EF4 | 0x5824 | 0x5882 | 0x5820 | 0x5811 |
| 0x2EF5 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EFE | 0x5820 | 0x587F | 0x5832 | 0x583C |
| 0x2EFF | 0x5824 | 0x587F | 0x583C | 0x5820 |
| 0x2F08 | 0x5851 | 0x581E | 0x5824 | 0x583C |
| 0x2F09 | 0x581E | 0x583A | 0x5824 | 0x581F |
| 0x2F12 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F44 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F45 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F46 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F47 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F4E | 0x5811 | 0x5832 | 0x583C | 0x5881 |
| 0x2F4F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F58 | 0x588B | 0x584A | 0x5853 | 0x583C |
| 0x2F63 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F64 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F65 | 0x5814 | 0x5824 | 0x581A | 0x58FF |
| 0x2F66 | 0x5814 | 0x5824 | 0x581A | 0x58FF |
| 0x2F67 | 0x5811 | 0x580D | 0x5832 | 0x5818 |
| 0x2F71 | 0x5811 | 0x581E | 0x5821 | 0x580D |
| 0x2F76 | 0x5821 | 0x5834 | 0x5870 | 0x587C |
| 0x2F77 | 0x5834 | 0x5870 | 0x5833 | 0x5824 |
| 0x2F7B | 0x5811 | 0x5822 | 0x581F | 0x583C |
| 0x2F80 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F85 | 0x5841 | 0x5821 | 0x5824 | 0x583C |
| 0x2F8F | 0x58B7 | 0x580D | 0x5814 | 0x58CE |
| 0x2F94 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F99 | 0x5824 | 0x5833 | 0x5882 | 0x5820 |
| 0x2F9A | 0x5824 | 0x5833 | 0x581E | 0x587C |
| 0x2F9E | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2FA3 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FA4 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FC6 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCD87 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCD8B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD8F | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| 0x4203 | Massenstrom vom HFM | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4400 | Ölstand Mittelwert Langzeit | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | °C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | °C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4410 | Restweg aus Permittivität abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4413 | aufbereitete Permittivität bei letztem Ölwechsel | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4414 | Permittivität für Bewertung aufbereitet (extrapoliert) | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4415 | Offset für Permittivitätskorrektur | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4416 | zugeteilte Bonuskraftstoffmenge | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4417 | zugeteilter Permittivitätsbonus | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4419 | Statusinformation vom Ölzustandssensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x441A | Statuswort mit Biteingangsgroessen OZ | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x441B | QLT-Kommunikation iO (Statuswort St_qlt_ok, Bit0) | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4505 | Sollwert Einlassspreizung | °CRK | - | unsigned char | - | 0,375 | 1 | 59,9999982118607 |
| 0x4506 | Nockenwellenposition Einlass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| 0x4507 | Nockenwellenposition Auslass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| 0x4508 | Istwert Einlassspreizung | °CRK | - | unsigned char | - | 0,375 | 1 | 59,9999982118607 |
| 0x4509 | Istwert Auslassspreizung | °CRK | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| 0x450A | Normspreizung Auslass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x450B | Normspreizung Einlass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x4600 | aktueller Drosselklappenwinkel | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4601 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned long | - | 0,100000001490116 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | °C | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| 0x460A | Batteriespannung aktuell | V | - | unsigned integer | - | 0,0149999996647239 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,50000011874363E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4704 | Lambda Sollwert Bank1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4705 | Lambda Sollwert Bank2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4800 | Kupplungsschalter Status | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Kupplungsschalter vorhanden | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Sporttaster aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Status Klima ein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4804 | Sekundärluft Pumpe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Startrelais über CAN aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4806 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x4807 | Motor Drehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4808 | Leerlauf Solldrehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4809 | Status LL | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Kilometerstand Auflösung 1 km | km | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | Pedalwert Fahrerwunsch in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_694 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_694 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Kühlmitteltemperatur OBD | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5806 | Lambda Integrator Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| 0x5808 | Lambda Integrator Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| 0x580A | Kraftstoffdruck | kPa | - | unsigned char | - | 3,0 | 1 | 0,0 |
| 0x580C | Drehzahl | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | °CRK | - | unsigned char | - | 0,5 | 1 | -64,0 |
| 0x580F | Ansauglufttemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5810 | Luftdurchsatz OBD | g/s | - | unsigned char | - | 2,5599999427795406 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5812 | Luftmasse gemessen | kg/h | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,5599999427795406 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,2560000121593472 | 1 | 0,0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5818 | Luftmasse gerechnet | mg/stk | - | unsigned char | - | 5,425863742828365 | 1 | 0,0 |
| 0x5819 | Drehzahl OBD Byte | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x581A | Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,400000005960464 | 1 | 50,0 |
| 0x581B | Nockenwelle Einlass Sollwert | °CRK | - | unsigned char | - | 0,400000005960464 | 1 | 50,0 |
| 0x581C | Nockenwelle Auslass | °CRK | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| 0x581D | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| 0x581E | Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5825 | Abstellzeit | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5826 | Drosselklappe Sensor 1 | °TPS | - | unsigned char | - | 1,8673014640808114 | 1 | 0,0 |
| 0x5827 | Lambdasondenheizung vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5828 | Lambdasondenheizung vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5829 | Lambdasondenheizung hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582A | Lambdasondenheizung hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582B | Drehmomenteingriff über CAN | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582C | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582D | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582E | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x582F | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5830 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5831 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_146 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 21,226886749267585 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_657 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_657 | 1 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_304 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| 0x583D | Reset Quelle | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583E | Motordrehzahl bei Reset | rpm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x583F | Drosselklappe Sollwert | °TPS | - | unsigned char | - | 1,8673014640808114 | 1 | 0,0 |
| 0x5840 | CPU Last bei Reset | % | - | unsigned char | - | 25,0 | 1 | 0,0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5843 | Versorgung FWG 1 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5845 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5846 | Spannung Pedalwertgeber 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5847 | Spannung Pedalwertgeber 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5848 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5849 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584A | Spannung Kl. 15 Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584B | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584C | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584D | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x584E | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584F | Spannung Luftmasse | V | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5851 | Spannung Ansauglufttemperatur | - | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5854 | Versorgung FWG 2 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5855 | Mittelwert Bank 1 | % | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| 0x5856 | Mittelwert Bank 2 | % | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| 0x5858 | Drosselklappe aktueller Wert | °TPS | - | unsigned char | - | 1,8673014640808114 | 1 | 0,0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,195312470197678 | 1 | 0,0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,195312470197678 | 1 | 0,0 |
| 0x585B | DMTL Strom Diagnoseende | mA | - | unsigned char | - | 0,195312470197678 | 1 | 0,0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585E | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x585F | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5863 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5865 | Ölstand Mittelwert Langzeit | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Kilometerstand | km | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | Batteriespannung von IBS gemessen | - | - | unsigned char | - | 0,06400000303983693 | 1 | 6,0 |
| 0x586B | Zeit mit Ruhestrom 80 - 200 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x586C | Zeit mit Ruhestrom 200 - 1000 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x586D | Zähler Erkennung schlechte Strasse | - | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x586E | Zeit mit Ruhestrom größer 1000 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5874 | Spannung Strommessung DMTL | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5876 | Mittlere Diagnosewert minimale Luftmasse | kg/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5877 | Differenz zwischen Maximum und Minimum SAF | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x587A | Status FGR | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_105 | 1 | 1 | 0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__142 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_668 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_668 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Tastverhältnis Luftklappe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 1,5625238418579097 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_661 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_661 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5898 | Generator Sollspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| 0x589B | Spannungsoffset Signalpfad CJ120 1 | V | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| 0x589C | Spannungsoffset Signalpfad CJ120 2 | V | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| 0x58A8 | Motorabstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58A9 | Reset Zähler Überwachungsrechner | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Reset Zähler Hauptrechner | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AB | Abweichung DK-Ersatzwert und DK-Potentiometer 1 | mg/stk | - | unsigned char | - | 5,425863742828365 | 1 | 0,0 |
| 0x58AC | Abweichung DK-Ersatzwert und DK-Potentiometer 2 | mg/stk | - | unsigned char | - | 5,425863742828365 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| 0x58B7 | Bremsdruck | bar | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BD | Modellluftmasse Überwachung tiefpassgefiltert | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BF | relative Momentenforderung von MSR über CAN | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | -4096,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58C9 | I-Anteil LL passive Rampe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CD | Verlustmomentabweichung Überwachung | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CF | Motormoment Sollwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D0 | Motormoment Istwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D9 | Fehler Hauptrechner | 0-n | - | 0xFF | _CNV_S_14_TMO3_ERR_C_364 | 1 | 1 | 0 |
| 0x58DA | Fehler Überwachungsrechner | 0-n | - | 0xFF | _CNV_S_21_TMO3_ERR_C_365 | 1 | 1 | 0 |
| 0x58DB | Fehler Bitfeld high Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DC | Fehler Bitfeld low Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DF | Spannung Sportschalter | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_7_Def_ba_400 | 1 | 1 | 0 |
| 0x58E5 | Maximale Drehzahl bei Zündaussetzern | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58E6 | Maximale relative Last bei Zündaussetzern | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E7 | Minimale relative Last bei Zündaussetzern | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E8 | Minimale Drehzahl bei Zündaussetzern | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58F1 | DME - Losnummer | 0-n | - | 0xFF | _CNV_S_7_RANGE_STAT_325 | 1 | 1 | 0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | V | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| 0x58F6 | Eingangssignal Rückführregler 2 | V | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A00 | Versorgung FWG 1 | V | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| 0x5A01 | Versorgung FWG 2 | V | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| 0x5A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A06 | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A07 | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A08 | Spannung Ansauglufttemperatur | - | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| 0x5A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0C | Spannung Luftmasse | V | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| 0x5A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5A24 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| 0x5A26 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| 0x5A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A30 | Laufunruhe Zylinder 1 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A31 | Laufunruhe Zylinder 2 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A32 | Laufunruhe Zylinder 3 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A33 | Laufunruhe Zylinder 4 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A34 | Laufunruhe Zylinder 5 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A35 | Laufunruhe Zylinder 6 | µs | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A36 | Status Klopfen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A37 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A38 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A39 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3A | Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3B | Spannung Klopfwerte Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3C | Spannung Klopfwerte Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3D | Klopfsignal Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3E | Klopfsignal Zylinder 1 relativ | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A3F | Klopfsignal Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A40 | Klopfsignal Zylinder 6 relativ | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A42 | Einspritzzeit Zylinder 1 | ms | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| 0x5A43 | Einspritzzeit Zylinder 2 | ms | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| 0x5A44 | Einspritzzeit Zylinder 3 | ms | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| 0x5A45 | Einspritzzeit Zylinder 4 | ms | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| 0x5A46 | Einspritzzeit Zylinder 5 | ms | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| 0x5A47 | Einspritzzeit Zylinder 6 | ms | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| 0x5A49 | Zündwinkel Zylinder1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,6249989382923 |
| 0x5A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| 0x5A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| 0x5A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| 0x5A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| 0x5A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A59 | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5B | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A60 | Bremslichtschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A61 | Bremslichttestschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A62 | Öldruckschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A63 | E-Box-Lüfter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A66 | DMTL Pumpe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A67 | DMTL Ventil Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A68 | DMTL Heizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A69 | MIL Lampe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6D | Status Taste FGR | 0-n | - | 0xFF | _CNV_S_8_RANGE_STAT_18 | 1 | 1 | 0 |
| 0x5A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A75 | Sekundärluft Ventil | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A76 | Adaption Öffnungspunkt Tankentlüftungsventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A77 | Tankentlüftungsventil TEV PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A7A | VANOS PWM Wert Einlass früh | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7B | VANOS PWM Wert Auslass früh | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7C | VANOS PWM Wert Einlass spät | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7D | VANOS PWM Wert Auslass spät | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A81 | Integrator Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A82 | Integrator Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A83 | Adaption Offset Lambda Bank 1 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x5A84 | Adaption Offset Lambda Bank 2 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x5A85 | Adaption Multiplikation Lambda Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A86 | Adaption Multiplikation Lambda Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A87 | Adaptionswert Trimregelung Bank 1 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x5A88 | Adaptionswert Trimregelung Bank 2 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x5A89 | multiplikative Gemischadaption hohe Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A8A | multiplikative Gemischadaption hohe Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A8B | multiplikative Gemischadaption niedrige Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A8C | multiplikative Gemischadaption niedrige Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| 0x5A8D | additive Gemischadaption Leerlauf Bank 1 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x5A8E | additive Gemischadaption Leerlauf Bank 2 | mg/stk | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| 0x5A91 | Katalysatordiagnosewert Bank1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5A92 | Katalysatordiagnosewert Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5A94 | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| 0x5A95 | Adaptionswert Nockenwelle Auslass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| 0x5A96 | Adaptionswert Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| 0x5A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AA1 | Status Diagnose TEV | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| 0x5AA2 | Status Diagnose DMTL | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| 0x5AA3 | Status Diagnose Lambdasonden | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| 0x5AA4 | Status Diagnose Leerlaufdrehzahlverstellung | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| 0x5AA5 | Status Diagnose Sekundärluft | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| 0x5AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,77777780866018E-5 | 1 | 0,0 |
| 0x5AB5 | Variante Sekundärluftpumpe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AB6 | Rohwert Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| 0x5AB9 | Spannung Sportschalter | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABA | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5ABC | Luftmasse | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x5ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AC0 | Reset Status Hardware-Register | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AC1 | Reset Status Software-Register | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AC2 | Reset Adresse | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACC | Istspreizung Einlassvanos | ° KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x5ACD | Sollspreizung Einlassvanos | ° KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x5ACE | Verstellzeit (Früh) Einlassvanos | ms | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5ACF | Verstellzeit (Spät) Einlassvanos | ms | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AD0 | Status Vanos (Notlauf) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AD1 | Istspreizung Auslassvanos | ° KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x5AD2 | Sollspreizung Auslassvanos | ° KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| 0x5AD3 | Verstellzeit (Früh) Auslassvanos | ms | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AD4 | Verstellzeit (Spät) Auslassvanos | ms | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AE0 | Kühlmitteltemperatur < 98°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE1 | 98°C =< Kühlmitteltemperatur =< 112°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE2 | 113°C =< Kühlmitteltemperatur =< 120°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE3 | 121°C =< Kühlmitteltemperatur =< 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE4 | Kühlmitteltemperatur > 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE5 | Motoröltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE6 | 80°C =< Motoröltemperatur =< 110°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE7 | 110°C =< Motoröltemperatur =< 135°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE8 | 135°C =< Motoröltemperatur =< 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AE9 | Motoröltemperatur > 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEA | Getriebeöltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEB | 80°C =< Getriebeöltemperatur =< 109°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEC | 110°C =< Getriebeöltemperatur =< 124°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AED | 125°C =< Getriebeöltemperatur =< 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEE | Getriebeöltemperatur > 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEF | Umgebungstemperatur < 3°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF0 | 3°C =< Umgebungstemperatur =< 19°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF1 | 20°C =< Umgebungstemperatur =< 29°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF2 | 30°C =< Umgebungstemperatur =< 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF3 | Umgebungstemperatur > 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF4 | Status Auslass Dichtemessung  | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AF5 | Status Auslass Frühanschlag | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AF6 | Status Auslass Sollwert einregeln | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AF7 | Status Auslass Spätanschlag | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AF8 | Status Auslass Verstellzeitmessung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AF9 | Status Auslass Ventilansteuerung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AFA | Status Einlass Dichtemessung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AFB | Status Einlass Frühanschlag | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AFC | Status Einlass Sollwert einregeln | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AFD | Status Einlass Spätanschlag | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AFE | Status Einlass Verstellzeitmessung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AFF | Status Einlass Ventilansteuerung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29CC | 29CC Verbrennungsaussetzer, mehrere Zylinder |
| 0x29CD | 29CD Verbrennungsaussetzer, Zylinder 1 |
| 0x29CE | 29CE Verbrennungsaussetzer, Zylinder 2 |
| 0x29CF | 29CF Verbrennungsaussetzer, Zylinder 3 |
| 0x29D0 | 29D0 Verbrennungsaussetzer, Zylinder 4 |
| 0x29D1 | 29D1 Verbrennungsaussetzer, Zylinder 5 |
| 0x29D2 | 29D2 Verbrennungsaussetzer, Zylinder 6 |
| 0x29D9 | 29D9 Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DA | 29DA Kurbelwellensensor, Segmentadaption |
| 0x29DB | 29DB Laufunruhe, Segmentzeitmessung |
| 0x29DC | 29DC Zylindereinspritzabschaltung |
| 0x29F4 | 29F4 Katalysatorkonvertierung |
| 0x29F5 | 29F5 Katalysatorkonvertierung 2 |
| 0x2A12 | 2A12 DMTL-Magnetventil, Ansteuerung |
| 0x2A13 | 2A13 DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A15 | 2A15 DMTL, Feinleck |
| 0x2A16 | 2A16 DMTL, Feinstleck |
| 0x2A17 | 2A17 DMTL, Systemfehler |
| 0x2A18 | 2A18 DMTL, Heizung: Ansteuerung |
| 0x2A19 | 2A19 Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | 2A1A Tankentlüftungssystem, Funktion |
| 0x2A1B | 2A1B Tankdeckel |
| 0x2A1C | 2A1C Tankfüllstand, Plausibilität |
| 0x2A2E | 2A2E Gemischregelung |
| 0x2A2F | 2A2F Gemischregelung 2 |
| 0x2A80 | 2A80 Einlass-VANOS, Ansteuerung |
| 0x2A81 | 2A81 Einlass-VANOS, Ansteuerung 2 |
| 0x2A82 | 2A82 Einlass-VANOS |
| 0x2A85 | 2A85 Auslass-VANOS, Ansteuerung |
| 0x2A86 | 2A86 Auslass-VANOS, Ansteuerung 2 |
| 0x2A87 | 2A87 Auslass-VANOS, Mechanik |
| 0x2A92 | 2A92 Auslass-VANOS 1, Ansteuerung  |
| 0x2A93 | 2A93 Einlass-VANOS, Ansteuerung  |
| 0x2A94 | 2A94 Kurbelwellensensor, Signal |
| 0x2A95 | 2A95 Kurbelwellensensor, Synchronisation |
| 0x2A96 | 2A96 Kurbelwellensensor, Zahnfehler |
| 0x2A97 | 2A97 Kurbelwellensensor, Lückenfehler |
| 0x2A98 | 2A98 Kurbelwelle - Einlassnockenwelle, Korrelation |
| 0x2A99 | 2A99 Kurbelwelle - Auslassnockenwelle, Korrelation |
| 0x2A9A | 2A9A Nockenwellensensor Einlass, Signal |
| 0x2A9B | 2A9B Nockenwellensensor Auslass, Signal |
| 0x2A9C | 2A9C Kurbelwellensensor, elektrisch |
| 0x2A9E | 2A9E Nockenwellensensor Einlass, Synchonisation |
| 0x2A9F | 2A9F Nockenwellensensor Auslass, Synchronisation |
| 0x2AA0 | 2AA0 Nockenwellensensor Einlass, Signal |
| 0x2AA1 | 2AA1 Nockenwellensensor Auslass, Signal |
| 0x2AA2 | 2AA2 Nockenwellensensor Einlass, Lückenverlust |
| 0x2AA3 | 2AA3 Nockenwellengeber Auslass, Lückenverlust |
| 0x2AA4 | 2AA4 Nockenwellensensor Einlass, Zahnfehler |
| 0x2AA5 | 2AA5 Nockenwellensensor Auslass, Zahnfehler |
| 0x2AA6 | 2AA6 Nockenwellensensor 2 Einlass, Zahnfehler |
| 0x2AA7 | 2AA7 Nockenwellensensor 2 Auslass, Zahnfehler |
| 0x2AAD | 2AAD Kraftstoffpumpe, Notabschaltung |
| 0x2AAE | 2AAE Kraftstoffpumpe |
| 0x2AB2 | 2AB2 Steuergerät, interner Fehler: RAM |
| 0x2AB3 | 2AB3 Steuergerät, interner Fehler: Checksumme |
| 0x2AB4 | 2AB4 Steuergerät, interner Fehler: RAM-Checksumme |
| 0x2AB5 | 2AB5 Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2AB6 | 2AB6 Steuergerät, interner Fehler: Mehrfachendstufenbaustein |
| 0x2AC6 | 2AC6 Taster Fahrdynamik-Control (SPORT-Taste), Signal |
| 0x2AC7 | 2AC7 Sportschalterbeleuchtung, elektrisch |
| 0x2ACB | 2ACB DME-Hauptrelais, Ansteuerung |
| 0x2ACC | 2ACC DME-Hauptrelais, Schaltverzögerung |
| 0x2AD0 | 2AD0 Getriebesteuerung |
| 0x2ADF | 2ADF Leerlaufregelung, Drehzahl |
| 0x2AE0 | 2AE0 Leerlaufregelung bei Kaltstart, Plausibilität |
| 0x2AE1 | 2AE1 Leistungsbedarf im Leerlauf zu hoch |
| 0x2AE5 | 2AE5 Leerlaufsteller Position AUF |
| 0x2AE6 | 2AE6 Leerlaufsteller Position ZU |
| 0x2AE7 | 2AE7 Leerlaufsteller, mechanisch |
| 0x2C24 | 2C24 Lambdasonden vor Katalysator, vertauscht |
| 0x2C27 | 2C27 Lambdasonde vor Katalysator, Systemcheck |
| 0x2C28 | 2C28 Lambdasonde vor Katalysator 2, Systemcheck |
| 0x2C2B | 2C2B Lambdasonde vor Katalysator, Systemcheck |
| 0x2C2C | 2C2C Lambdasonde vor Katalysator 2, Systemcheck |
| 0x2C2D | 2C2D Lambdasonde vor Katalysator, Schubprüfung |
| 0x2C2E | 2C2E Lambdasonde vor Katalysator 2, Schubprüfung |
| 0x2C31 | 2C31 Lambdasonde vor Katalysator, Trimmregelung |
| 0x2C32 | 2C32 Lambdasonde vor Katalysator 2, Trimmregelung |
| 0x2C39 | 2C39 Lambdasonde vor Katalysator, Dynamik |
| 0x2C3A | 2C3A Lambdasonde vor Katalysator 2, Dynamik |
| 0x2C3B | 2C3B Lambdasonde vor Katalysator, nicht angesteckt |
| 0x2C3C | 2C3C Lambdasonde vor Katalysator 2, nicht angesteckt |
| 0x2C3D | 2C3D Lambdasonde vor Katalysator, Leitungsfehler |
| 0x2C3E | 2C3E Lambdasonde vor Katalysator 2, Leitungsfehler |
| 0x2C3F | 2C3F Steuergerät, interner Fehler: Lambdasonde, Auswertebaustein |
| 0x2C40 | 2C40 Steuergerät, interner Fehler: Lambdasonde 2, Auswertebaustein |
| 0x2C41 | 2C41 Steuergerät, interner Fehler: Lambdasonde |
| 0x2C42 | 2C42 Steuergerät, interner Fehler: Lambdasonde 2 |
| 0x2C6A | 2C6A Lambdasonden nach Katalysator, vertauscht |
| 0x2C6B | 2C6B Lambdasonde nach Katalysator, Systemcheck |
| 0x2C6C | 2C6C Lambdasonde nach Katalysator 2, Systemcheck |
| 0x2C6D | 2C6D Lambdasonde nach Katalysator, Alterung |
| 0x2C6E | 2C6E Lambdasonde nach Katalysator 2, Alterung |
| 0x2C73 | 2C73 Lambdasonde nach Katalysator, Signal |
| 0x2C74 | 2C74 Lambdasonde nach Katalysator 2, Signal |
| 0x2C75 | 2C75 Lambdasonde nach Katalysator, Signal |
| 0x2C76 | 2C76 Lambdasonde nach Katalysator 2, Signal |
| 0x2C77 | 2C77 Lambdasonde nach Katalysator, Signal |
| 0x2C78 | 2C78 Lambdasonde nach Katalysator 2, Signal |
| 0x2C7B | 2C7B Lambdasonde nach Katalysator, Signal |
| 0x2C7C | 2C7C Lambdasonde nach Katalysator 2, Signal |
| 0x2C7E | 2C7E Lambdasonde nach Katalysator, Trimmregelung |
| 0x2C7F | 2C7F Lambdasonde nach Katalysator 2, Trimmregelung |
| 0x2C92 | 2C92 Abgastemperatursensor, elektrisch |
| 0x2C93 | 2C93 Abgastemperatursensor, Plausibilität |
| 0x2C9C | 2C9C Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2C9D | 2C9D Lambdasondenbeheizung vor Katalysator 2, Ansteuerung |
| 0x2C9E | 2C9E Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2C9F | 2C9F Lambdasondenbeheizung nach Katalysator 2, Ansteuerung |
| 0x2CA6 | 2CA6 Lambdasondenbeheizung vor Katalysator, Funktion |
| 0x2CA7 | 2CA7 Lambdasondenbeheizung vor Katalysator 2, Funktion |
| 0x2CA8 | 2CA8 Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2CA9 | 2CA9 Lambdasondenbeheizung nach Katalysator 2, Funktion |
| 0x2CEC | 2CEC Drosselklappensteller, klemmt kurzzeitig |
| 0x2CED | 2CED Drosselklappensteller, klemmt dauerhaft |
| 0x2CEE | 2CEE Drosselklappensteller, schwergängig |
| 0x2CEF | 2CEF Drosselklappensteller, Ansteuerung |
| 0x2CF6 | 2CF6 Drosselklappenpotenziometer 1, Plausibilität zu Luftmasse |
| 0x2CF7 | 2CF7 Drosselklappenpotenziometer 2, Plausibilität zu Luftmasse |
| 0x2CF9 | 2CF9 Drosselklappenpotenziometer 1 |
| 0x2CFA | 2CFA Drosselklappenpotenziometer 2 |
| 0x2CFB | 2CFB Drosselklappen-Adaptionswert |
| 0x2D06 | 2D06 Luftmassensystem |
| 0x2D07 | 2D07 Drosselklappe |
| 0x2D09 | 2D09 Drosselklappe |
| 0x2D0F | 2D0F Luftmassenmesser, Signal |
| 0x2D1B | 2D1B Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | 2D1C Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D1D | 2D1D Fahrpedalmodul, Pedalwertgeber 1, Spannungsversorgung |
| 0x2D1E | 2D1E Fahrpedalmodul, Pedalwertgeber 2, Spannungsversorgung |
| 0x2D1F | 2D1F Fahrpedalmodul, Pedalwertgeber Potentiometer, Signal |
| 0x2D20 | 2D20 Fahrpedalmodul, Pedalwertgeber, Plausibilität zwischen Signal 1 und Signal 2 |
| 0x2D29 | 2D29 Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D50 | 2D50 DME, interner Fehler:  Überwachung Fahrgeschwindigkeitsregelung |
| 0x2D51 | 2D51 Überwachung Luftpfad |
| 0x2D52 | 2D52 DME, interner Fehler: Überwachung Motordrehzahl |
| 0x2D53 | 2D53 DME, interner Fehler: Überwachung Drehzahlbegrenzung |
| 0x2D54 | 2D54 DME, interner Fehler: Überwachung  Drehzahlbegrenzung Reset |
| 0x2D55 | 2D55 DME, interner Fehler: Überwachung Fahrpedalmodul |
| 0x2D56 | 2D56 DME, interner Fehler: Überwachung Leerlaufregelung |
| 0x2D57 | 2D57 DME, interner Fehler: Überwachung externe Momentenanforderung |
| 0x2D58 | 2D58 DME, interner Fehler: Überwachung Sollmoment |
| 0x2D59 | 2D59 DME, interner Fehler: Überwachung Istmoment |
| 0x2D5A | 2D5A Überwachung Motordrehmoment-Begrenzung |
| 0x2D5C | 2D5C DME, interner Fehler: Überwachung Hardware |
| 0x2DB5 | 2DB5 Fahrgeschwindigkeitsregelung, Signal |
| 0x2DB6 | 2DB6 Fahrgeschwindigkeitsregelung,Schalter Multifunktionslenkrad |
| 0x2DB7 | 2DB7 Fahrgeschwindigkeitsregelung, Zeitlimit der Datenübertragung erreicht |
| 0x2DBE | 2DBE Aktive Geschwindigkeitsregelung, gesperrt für Fahrzyklus |
| 0x2DC0 | 2DC0 Längsdynamikmanagement |
| 0x2DC6 | 2DC6 Tankfüllstandswert, Plausibilität |
| 0x2DC8 | 2DC8 Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 2DC9 Botschaft vom EGS fehlt, EGS 2 |
| 0x2DCC | 2DCC Botschaft vom ASC/DSC fehlt, ASC 1 |
| 0x2DCD | 2DCD Botschaft vom ASC/DSC fehlt, ASC 3 |
| 0x2DCE | 2DCE Botschaft vom ASC/DSC fehlt, ASC 4 |
| 0x2DD0 | 2DD0 Botschaft von der Instrumentenkombination fehlt, I-Kombi 2 |
| 0x2DD1 | 2DD1 Botschaft von der Instrumentenkombination fehlt, I-Kombi 3 |
| 0x2DD2 | 2DD2 Botschaft vom LWS-Steuergerät fehlt, LWS |
| 0x2DD3 | 2DD3 Botschaft vom SMG-Steuergerät fehlt,  SMG 1 |
| 0x2DE0 | 2DE0 Botschaft von der elektrischen Kraftstoffpumpe fehlt, EKP |
| 0x2E18 | 2E18 Zündung, Zylinder 1 |
| 0x2E19 | 2E19 Zündung, Zylinder 2 |
| 0x2E1A | 2E1A Zündung, Zylinder 3 |
| 0x2E1B | 2E1B Zündung, Zylinder 4 |
| 0x2E1C | 2E1C Zündung, Zylinder 5 |
| 0x2E1D | 2E1D Zündung, Zylinder 6 |
| 0x2E24 | 2E24 Zündspule Zylinder 1 |
| 0x2E25 | 2E25 Zündspule Zylinder 2 |
| 0x2E26 | 2E26 Zündspule Zylinder 3 |
| 0x2E27 | 2E27 Zündspule Zylinder 4 |
| 0x2E28 | 2E28 Zündspule Zylinder 5 |
| 0x2E29 | 2E29 Zündspule Zylinder 6 |
| 0x2E30 | 2E30 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | 2E31 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | 2E32 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | 2E33 Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | 2E34 Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | 2E35 Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E68 | 2E68 Klopfsensorsignal 1 |
| 0x2E69 | 2E69 Klopfsensorsignal 2 |
| 0x2E6A | 2E6A Klopfsensorsignal 3 |
| 0x2E77 | 2E77 Zündung, Spannungsversorgung |
| 0x2E7C | 2E7C Bitserielle Datenschnittstelle, Signal |
| 0x2E81 | 2E81 Elektrische Wasserpumpe, Drehzahlabweichung |
| 0x2E82 | 2E82 Elektrische Wasserpumpe, Abschaltung |
| 0x2E83 | 2E83 Elektrische Wasserpumpe, leistungsreduzierter Betrieb |
| 0x2E84 | 2E84 Elektrische Wasserpumpe, Kommunikation |
| 0x2E85 | 2E85 Elektrische Wasserpumpe, Kommunikation |
| 0x2E8B | 2E8B Intelligenter Batteriesensor, Signal |
| 0x2E8C | 2E8C Intelligenter Batteriesensor, Funktion |
| 0x2E8D | 2E8D Intelligenter Batteriesensor, Signalübertragung |
| 0x2E8E | 2E8E Intelligenter Batteriesensor, Kommunikation |
| 0x2E97 | 2E97 Generator |
| 0x2E98 | 2E98 Generator, Kommunikation |
| 0x2E9F | 2E9F Ölzustandssensor |
| 0x2EA1 | 2EA1 Ölzustandssensor, Kommunikation |
| 0x2EE0 | 2EE0 Kühlmitteltemperatursensor, Signal |
| 0x2EE1 | 2EE1 Kühlmitteltemperatursensor, Plausibilität |
| 0x2EE2 | 2EE2 Kühlmitteltemperatursensor, Plausibilität, Signal konstant |
| 0x2EE3 | 2EE3 Kühlmitteltemperatursensor, Plausibilität, Gradient |
| 0x2EEA | 2EEA Temperatursensor Kühleraustritt, Signal |
| 0x2EEB | 2EEB Temperatursensor Kühleraustritt, Plausibilität, Gradient |
| 0x2EEC | 2EEC Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | 2EF4 Kennfeldthermostat, Mechanik |
| 0x2EF5 | 2EF5 Kennfeldthermostat, Ansteuerung |
| 0x2EFE | 2EFE Elektrolüfter, Ansteuerung |
| 0x2EFF | 2EFF Elektrolüfter, Eigendiagnose |
| 0x2F08 | 2F08 Ansauglufttemperatursensor, Signal |
| 0x2F09 | 2F09 Ansauglufttemperatursensor, Plausibilität |
| 0x2F0D | 2F0D Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F0F | 2F0F Kühlerjalousie, unten |
| 0x2F12 | 2F12 Klimakompressor, Ansteuerung |
| 0x2F44 | 2F44 EWS Manipulationsschutz |
| 0x2F45 | 2F45 Schnittstelle EWS-DME |
| 0x2F46 | 2F46 EWS Wechselcode-Abspeicherng |
| 0x2F47 | 2F47 EWS Irreversibler Steuergerätefehler |
| 0x2F4E | 2F4E Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | 2F4F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F58 | 2F58 Startautomatik, Ansteuerung |
| 0x2F63 | 2F63 Bremslichtschalter, Plausibilität |
| 0x2F64 | 2F64 Bremslichttestschalter, Plausibilität |
| 0x2F65 | 2F65 Bremskraftverstärker, Systemcheck |
| 0x2F66 | 2F66 Bremskraftverstärker, elektrisch ATIC39 |
| 0x2F67 | 2F67 Kupplungsschalter, Signal |
| 0x2F71 | 2F71 E-Box-Lüfter, Ansteuerung |
| 0x2F76 | 2F76 Umgebungsdrucksensor, Signal |
| 0x2F77 | 2F77 Umgebungsdrucksensor, Plausibilität |
| 0x2F7B | 2F7B Öldruckschalter, Plausibilität |
| 0x2F80 | 2F80 Motorabstellzeit, Plausibilität |
| 0x2F85 | 2F85 DME, interner Fehler: Innentemperatursensor, Signal |
| 0x2F8F | 2F8F Fahrpedalmodul und Bremspedal, Plausibilität |
| 0x2F94 | 2F94 Kraftstoffpumpenrelais, Ansteuerung |
| 0x2F99 | 2F99 Umgebungstemperatursensor, Plausibilität |
| 0x2F9A | 2F9A Umgebungstemperatursensor, Kommunikation |
| 0x2F9E | 2F9E Thermischer Ölniveausensor |
| 0x2FA3 | 2FA3 Codierung fehlt |
| 0x2FA4 | 2FA4 Falscher Datensatz |
| 0x2FC6 | 2FC6 Energiesparmodus aktiv |
| 0x2FDA | 2FDA Kurbelgehäuseentlüftung, Systemcheck |
| 0x2FDB | 2FDB Kurbelgehäuseentlüftung, elektrisch ATIC39 |
| 0xCD87 | CD87 PT-CAN Kommunikationsfehler |
| 0xCD8B | CD8B Local-CAN Kommunikationsfehler |
| 0xCD8F | CD8F PT-CAN Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x0007 | 0x0006 | 0x0005 | 0x0003 |
| 0x29CD | 0x0000 | 0x0006 | 0x0005 | 0x0003 |
| 0x29CE | 0x0000 | 0x0006 | 0x0005 | 0x0003 |
| 0x29CF | 0x0000 | 0x0006 | 0x0005 | 0x0003 |
| 0x29D0 | 0x0000 | 0x0006 | 0x0005 | 0x0003 |
| 0x29D1 | 0x0000 | 0x0006 | 0x0005 | 0x0003 |
| 0x29D2 | 0x0000 | 0x0006 | 0x0005 | 0x0003 |
| 0x29D9 | 0x0000 | 0x0000 | 0x0009 | 0x0000 |
| 0x29DA | 0x0000 | 0x0000 | 0x000A | 0x0000 |
| 0x29DB | 0x0000 | 0x0000 | 0x000B | 0x0000 |
| 0x29DC | 0x0009 | 0x0000 | 0x0000 | 0x0000 |
| 0x29F4 | 0x0000 | 0x0000 | 0x000C | 0x000C |
| 0x29F5 | 0x0000 | 0x0000 | 0x000C | 0x000C |
| 0x2A12 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2A13 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x001B |
| 0x2A16 | 0x0000 | 0x0000 | 0x001C | 0x0000 |
| 0x2A17 | 0x001F | 0x001E | 0x0020 | 0x001D |
| 0x2A18 | 0x0000 | 0x0016 | 0x0017 | 0x0021 |
| 0x2A19 | 0x0000 | 0x0016 | 0x0017 | 0x0021 |
| 0x2A1A | 0x0023 | 0x0022 | 0x0000 | 0x0000 |
| 0x2A1B | 0x0000 | 0x0000 | 0x0000 | 0x0024 |
| 0x2A1C | 0x0025 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A2E | 0x0000 | 0x0000 | 0x0027 | 0x0026 |
| 0x2A2F | 0x0000 | 0x0000 | 0x0027 | 0x0026 |
| 0x2A80 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2A81 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2A82 | 0x0028 | 0x00C8 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2A86 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2A87 | 0x0028 | 0x00C8 | 0x0000 | 0x0000 |
| 0x2A92 | 0x0000 | 0x00CB | 0x00CA | 0x00C9 |
| 0x2A93 | 0x0000 | 0x00CB | 0x00CA | 0x00C9 |
| 0x2A94 | 0x0000 | 0x0000 | 0x0019 | 0x0029 |
| 0x2A95 | 0x0000 | 0x0000 | 0x0000 | 0x002A |
| 0x2A96 | 0x0000 | 0x0000 | 0x0000 | 0x002B |
| 0x2A97 | 0x0000 | 0x0000 | 0x0000 | 0x002C |
| 0x2A98 | 0x0000 | 0x0000 | 0x002E | 0x002D |
| 0x2A99 | 0x0000 | 0x0000 | 0x002E | 0x002D |
| 0x2A9A | 0x0000 | 0x0000 | 0x0000 | 0x002F |
| 0x2A9B | 0x0000 | 0x0000 | 0x0000 | 0x002F |
| 0x2A9C | 0x0000 | 0x0000 | 0x0000 | 0x00CC |
| 0x2A9E | 0x0000 | 0x0000 | 0x0000 | 0x002A |
| 0x2A9F | 0x0000 | 0x0000 | 0x0000 | 0x002A |
| 0x2AA0 | 0x0000 | 0x0000 | 0x0000 | 0x0029 |
| 0x2AA1 | 0x0000 | 0x0000 | 0x0000 | 0x0029 |
| 0x2AA2 | 0x0000 | 0x0000 | 0x0000 | 0x0030 |
| 0x2AA3 | 0x0000 | 0x0000 | 0x0000 | 0x0030 |
| 0x2AA4 | 0x0000 | 0x0000 | 0x0000 | 0x00CD |
| 0x2AA5 | 0x0000 | 0x0000 | 0x0000 | 0x00CD |
| 0x2AA6 | 0x0000 | 0x0000 | 0x0000 | 0x00CD |
| 0x2AA7 | 0x0000 | 0x0000 | 0x0000 | 0x00CD |
| 0x2AAD | 0x0000 | 0x0031 | 0x0000 | 0x0000 |
| 0x2AAE | 0x0033 | 0x0035 | 0x0034 | 0x0032 |
| 0x2AB2 | 0x0000 | 0x0000 | 0x0037 | 0x0036 |
| 0x2AB3 | 0x0000 | 0x0039 | 0x003A | 0x0038 |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x003B |
| 0x2AB5 | 0x0000 | 0x003C | 0x0000 | 0x0000 |
| 0x2AB6 | 0x0000 | 0x003C | 0x0000 | 0x0000 |
| 0x2AC6 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2ACB | 0x0000 | 0x0000 | 0x003F | 0x003E |
| 0x2ACC | 0x0000 | 0x0000 | 0x0000 | 0x0040 |
| 0x2AD0 | 0x0041 | 0x0000 | 0x0000 | 0x0000 |
| 0x2ADF | 0x0000 | 0x0000 | 0x0034 | 0x0032 |
| 0x2AE0 | 0x0000 | 0x0000 | 0x0034 | 0x0032 |
| 0x2AE1 | 0x0000 | 0x0000 | 0x0000 | 0x00CE |
| 0x2AE5 | 0x0000 | 0x00CB | 0x00CA | 0x00CF |
| 0x2AE6 | 0x0000 | 0x00CB | 0x00CA | 0x00C9 |
| 0x2C24 | 0x0042 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C27 | 0x0000 | 0x0000 | 0x0000 | 0x0026 |
| 0x2C28 | 0x0000 | 0x0000 | 0x0000 | 0x0026 |
| 0x2C2B | 0x0000 | 0x0000 | 0x0000 | 0x0027 |
| 0x2C2C | 0x0000 | 0x0000 | 0x0000 | 0x0027 |
| 0x2C2D | 0x0000 | 0x0000 | 0x0000 | 0x0043 |
| 0x2C2E | 0x0000 | 0x0000 | 0x0000 | 0x0043 |
| 0x2C31 | 0x0000 | 0x0000 | 0x0045 | 0x0044 |
| 0x2C32 | 0x0000 | 0x0000 | 0x0045 | 0x0044 |
| 0x2C39 | 0x0000 | 0x0000 | 0x0000 | 0x0047 |
| 0x2C3A | 0x0000 | 0x0000 | 0x0000 | 0x0047 |
| 0x2C3B | 0x0000 | 0x0000 | 0x0000 | 0x0048 |
| 0x2C3C | 0x0000 | 0x0000 | 0x0000 | 0x0048 |
| 0x2C3D | 0x004B | 0x004A | 0x0000 | 0x0049 |
| 0x2C3E | 0x004B | 0x004A | 0x0000 | 0x0049 |
| 0x2C3F | 0x0000 | 0x0000 | 0x0017 | 0x0015 |
| 0x2C40 | 0x0000 | 0x0000 | 0x0017 | 0x0015 |
| 0x2C41 | 0x0000 | 0x0000 | 0x004D | 0x004C |
| 0x2C42 | 0x0000 | 0x0000 | 0x004D | 0x004C |
| 0x2C6A | 0x004E | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6B | 0x0000 | 0x0000 | 0x0050 | 0x004F |
| 0x2C6C | 0x0000 | 0x0000 | 0x0050 | 0x004F |
| 0x2C6D | 0x0051 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6E | 0x0051 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C73 | 0x0000 | 0x0000 | 0x0000 | 0x0015 |
| 0x2C74 | 0x0000 | 0x0000 | 0x0000 | 0x0015 |
| 0x2C75 | 0x0000 | 0x0000 | 0x0017 | 0x0000 |
| 0x2C76 | 0x0000 | 0x0000 | 0x0017 | 0x0000 |
| 0x2C77 | 0x0000 | 0x0016 | 0x0000 | 0x0000 |
| 0x2C78 | 0x0000 | 0x0016 | 0x0000 | 0x0000 |
| 0x2C7B | 0x0054 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7C | 0x0054 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7E | 0x0000 | 0x0000 | 0x0045 | 0x0044 |
| 0x2C7F | 0x0000 | 0x0000 | 0x0045 | 0x0044 |
| 0x2C92 | 0x0000 | 0x0000 | 0x00CA | 0x00D0 |
| 0x2C93 | 0x0000 | 0x0000 | 0x00CA | 0x00D0 |
| 0x2C9C | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2C9D | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2C9E | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2C9F | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2CA6 | 0x0000 | 0x0057 | 0x0056 | 0x0055 |
| 0x2CA7 | 0x0000 | 0x0057 | 0x0056 | 0x0055 |
| 0x2CA8 | 0x0000 | 0x0000 | 0x0000 | 0x0058 |
| 0x2CA9 | 0x0000 | 0x0000 | 0x0000 | 0x0058 |
| 0x2CEC | 0x0000 | 0x0000 | 0x0000 | 0x0059 |
| 0x2CED | 0x0000 | 0x0000 | 0x0000 | 0x005A |
| 0x2CEE | 0x0000 | 0x0000 | 0x0000 | 0x005B |
| 0x2CEF | 0x0000 | 0x005C | 0x0000 | 0x0000 |
| 0x2CF6 | 0x005D | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF7 | 0x005E | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2CFA | 0x0000 | 0x0000 | 0x005F | 0x0015 |
| 0x2CFB | 0x0062 | 0x0061 | 0x0063 | 0x0060 |
| 0x2D06 | 0x0000 | 0x0000 | 0x0069 | 0x0068 |
| 0x2D07 | 0x006A | 0x0000 | 0x0000 | 0x0000 |
| 0x2D09 | 0x0000 | 0x006B | 0x0000 | 0x0000 |
| 0x2D0F | 0x0000 | 0x0000 | 0x005F | 0x0015 |
| 0x2D1B | 0x0000 | 0x0000 | 0x005F | 0x0015 |
| 0x2D1C | 0x0000 | 0x0000 | 0x005F | 0x0015 |
| 0x2D1D | 0x006C | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1E | 0x006D | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1F | 0x006E | 0x0000 | 0x0000 | 0x0000 |
| 0x2D20 | 0x006F | 0x0000 | 0x0000 | 0x0000 |
| 0x2D29 | 0x0000 | 0x0000 | 0x00D2 | 0x00D1 |
| 0x2D50 | 0x0000 | 0x0072 | 0x0071 | 0x0070 |
| 0x2D51 | 0x0000 | 0x0000 | 0x0073 | 0x0019 |
| 0x2D52 | 0x0074 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x0074 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D54 | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D55 | 0x0074 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D56 | 0x0000 | 0x0000 | 0x0076 | 0x0075 |
| 0x2D57 | 0x0078 | 0x0079 | 0x0000 | 0x0077 |
| 0x2D58 | 0x007B | 0x007D | 0x007C | 0x007A |
| 0x2D59 | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5A | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5C | 0x0074 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB5 | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB6 | 0x0082 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB7 | 0x0083 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DBE | 0x0000 | 0x0000 | 0x0085 | 0x0084 |
| 0x2DC0 | 0x0072 | 0x0000 | 0x0000 | 0x0086 |
| 0x2DC6 | 0x0088 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DC8 | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DC9 | 0x008B | 0x0089 | 0x008A | 0x0000 |
| 0x2DCC | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DCD | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DCE | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DD0 | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DD1 | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DD2 | 0x0000 | 0x0089 | 0x0000 | 0x0000 |
| 0x2DD3 | 0x008C | 0x0089 | 0x008A | 0x0000 |
| 0x2DE0 | 0x0000 | 0x008D | 0x0000 | 0x0000 |
| 0x2E18 | 0x0000 | 0x0000 | 0x0094 | 0x0000 |
| 0x2E19 | 0x0000 | 0x0000 | 0x0095 | 0x0000 |
| 0x2E1A | 0x0000 | 0x0000 | 0x0096 | 0x0000 |
| 0x2E1B | 0x0000 | 0x0000 | 0x0097 | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x0098 | 0x0000 |
| 0x2E1D | 0x0000 | 0x0000 | 0x0099 | 0x0000 |
| 0x2E24 | 0x0000 | 0x0000 | 0x0000 | 0x009A |
| 0x2E25 | 0x0000 | 0x0000 | 0x0000 | 0x009A |
| 0x2E26 | 0x0000 | 0x0000 | 0x0000 | 0x009A |
| 0x2E27 | 0x0000 | 0x0000 | 0x0000 | 0x009A |
| 0x2E28 | 0x0000 | 0x0000 | 0x0000 | 0x009A |
| 0x2E29 | 0x0000 | 0x0000 | 0x0000 | 0x009A |
| 0x2E30 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2E31 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2E32 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2E33 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2E34 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2E35 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2E68 | 0x0019 | 0x0000 | 0x009C | 0x009B |
| 0x2E69 | 0x0019 | 0x0000 | 0x009C | 0x009D |
| 0x2E6A | 0x0019 | 0x0000 | 0x009C | 0x009D |
| 0x2E77 | 0x0000 | 0x009E | 0x0000 | 0x0000 |
| 0x2E7C | 0x0000 | 0x004D | 0x0000 | 0x0000 |
| 0x2E81 | 0x0000 | 0x0000 | 0x0000 | 0x00D3 |
| 0x2E82 | 0x0000 | 0x00D5 | 0x008E | 0x00D4 |
| 0x2E83 | 0x00D8 | 0x00D7 | 0x0090 | 0x00D6 |
| 0x2E84 | 0x0000 | 0x004D | 0x0000 | 0x0000 |
| 0x2E85 | 0x00D9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E8B | 0x00DC | 0x00DB | 0x0000 | 0x00DA |
| 0x2E8C | 0x00DF | 0x00DE | 0x0000 | 0x00DD |
| 0x2E8D | 0x00E2 | 0x00E1 | 0x0000 | 0x00E0 |
| 0x2E8E | 0x0000 | 0x00A2 | 0x0000 | 0x0000 |
| 0x2E97 | 0x00A1 | 0x00A0 | 0x0000 | 0x0033 |
| 0x2E98 | 0x0000 | 0x00A2 | 0x0000 | 0x0000 |
| 0x2E9F | 0x00A4 | 0x004D | 0x00A5 | 0x00A3 |
| 0x2EA1 | 0x0000 | 0x00A2 | 0x0000 | 0x0000 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2EE1 | 0x00A6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE2 | 0x00A7 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE3 | 0x00A8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEA | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2EEB | 0x00A9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEC | 0x0019 | 0x0000 | 0x0000 | 0x00AA |
| 0x2EF4 | 0x001A | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2EFE | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2EFF | 0x00AB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F08 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2F09 | 0x0019 | 0x0000 | 0x00AC | 0x00AA |
| 0x2F0D | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2F0F | 0x00AB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F12 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2F44 | 0x00AF | 0x00AE | 0x00B0 | 0x00AD |
| 0x2F45 | 0x00B3 | 0x00B2 | 0x00B1 | 0x0000 |
| 0x2F46 | 0x0000 | 0x00B5 | 0x00B6 | 0x00B4 |
| 0x2F47 | 0x0000 | 0x0000 | 0x00B7 | 0x00B7 |
| 0x2F4E | 0x0000 | 0x0029 | 0x0000 | 0x0000 |
| 0x2F4F | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F58 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2F63 | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F64 | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F65 | 0x00E3 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F66 | 0x0000 | 0x00CB | 0x00CA | 0x00C9 |
| 0x2F67 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2F71 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2F76 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2F77 | 0x0000 | 0x0000 | 0x00AC | 0x00AA |
| 0x2F7B | 0x0000 | 0x0016 | 0x0000 | 0x0000 |
| 0x2F80 | 0x0019 | 0x00B8 | 0x0000 | 0x0000 |
| 0x2F85 | 0x0000 | 0x0000 | 0x0017 | 0x003D |
| 0x2F8F | 0x00B9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F94 | 0x0000 | 0x0016 | 0x0017 | 0x0015 |
| 0x2F99 | 0x0019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F9A | 0x0000 | 0x00BA | 0x0000 | 0x0000 |
| 0x2F9E | 0x0019 | 0x0029 | 0x00BB | 0x0000 |
| 0x2FA3 | 0x00BD | 0x00BC | 0x0000 | 0x0000 |
| 0x2FA4 | 0x00BF | 0x00BE | 0x0000 | 0x0000 |
| 0x2FC6 | 0x0000 | 0x00C1 | 0x00C2 | 0x00C0 |
| 0x2FDA | 0x00E4 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FDB | 0x0000 | 0x00CB | 0x00CA | 0x00C9 |
| 0xCD87 | 0x00C4 | 0x00C3 | 0x0000 | 0x0000 |
| 0xCD8B | 0x0000 | 0x00C3 | 0x0000 | 0x0000 |
| 0xCD8F | 0x00C4 | 0x00C3 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0003 | mit Kraftstoffabschaltung |
| 0x0004 | kein Signal oder Wert |
| 0x0005 | Abgasschädigend nach Startvorgang |
| 0x0006 | Abgasschädigend |
| 0x0007 | Verbrennungsaussetzer an mehreren Zylindern |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0009 |  Tankfüllstand zu gering |
| 0x000A | Segmentadaption am  Anschlag |
| 0x000B | Zahnfehler Kurbelwellengeber |
| 0x000C | Wirkungsgrad unter Schwellwert |
| 0x000D | Sekundärluftventil oder -schlauch blockiert |
| 0x000E | Sekundärluftmasse zu gering |
| 0x000F | Grobe Undichtigkeit zwischen Sekundärluftpumpe und -Ventil |
| 0x0010 | Sekundärluftpumpe nicht aktiv |
| 0x0011 | Sekundärluftmenge zu gering Bank 1 |
| 0x0012 | Sekundärluftmenge zu gering Bank 2 |
| 0x0013 | Sekundärluftmenge zu gering Bank 1 und Bank 2 |
| 0x0014 | Klemmt offen |
| 0x0015 | Kurzschluss nach Plus |
| 0x0016 | Leitungsunterbrechung |
| 0x0017 | Kurzschluss nach Minus |
| 0x0018 | Leitungsunterbrechung  |
| 0x0019 | Signal unplausibel |
| 0x001A | klemmt offen |
| 0x001B | Leckage grösser 1,0 mm |
| 0x001C | Leckage grösser 0,5 mm |
| 0x001D | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x001E | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x001F | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x0020 | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x0021 | kurzschluss nach Plus |
| 0x0022 | Funktionstest Bandende |
| 0x0023 | Funktionstest |
| 0x0024 | nicht korrekt geschlossen |
| 0x0025 | Füllstandssignalwert zum Verbrauchswert unplausibel |
| 0x0026 | Gemisch zu mager |
| 0x0027 | Gemisch zu fett |
| 0x0028 | schwergängig, klemmt mechanisch |
| 0x0029 | Signal fehlt |
| 0x002A | Synchronisation |
| 0x002B | Zahnfehler |
| 0x002C | Zahnzeitfehler |
| 0x002D | Wert außerhalb Referenzbereich |
| 0x002E | Zahnsprung |
| 0x002F | Signal ungültig für Synchronisation |
| 0x0030 | Segmentzeit |
| 0x0031 | Notabschaltung |
| 0x0032 | Drehzahl zu hoch |
| 0x0033 | Übertemperatur |
| 0x0034 | Drehzahl zu niedrig |
| 0x0035 | Notlauf |
| 0x0036 | interner RAM-Baustein |
| 0x0037 | Sicherheitsrechner RAM |
| 0x0038 | Bootsoftware |
| 0x0039 | Datenbereich |
| 0x003A | Applikationssoftware |
| 0x003B | RAM-Überprüfung |
| 0x003C | Timeout SPI Bus |
| 0x003D | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x003E | nicht abgefallen |
| 0x003F | nicht angezogen  |
| 0x0040 | schaltet zu spät |
| 0x0041 | Fehlerverwaltung Getriebe |
| 0x0042 | vertauschte Lambdasonden vor Katalysator |
| 0x0043 | Signal während Schubabschaltung unterhalb Schwelle |
| 0x0044 | Abgas nach Katalysator zu fett |
| 0x0045 | Abgas nach Katalysator zu mager |
| 0x0046 | Heiztakteinkopplung auf Signal |
| 0x0047 | Signalamplitude zu gering |
| 0x0048 | Sonde nicht angesteckt |
| 0x0049 | Unterbrechung Nernstleitung |
| 0x004A | Unterbrechung Pumpstrompfad oder virtuelle Masse |
| 0x004B | Unterbrechung Abgleichsleitung |
| 0x004C | Initialisierungsfehler |
| 0x004D | Kommunikationsfehler |
| 0x004E | vertauschte Lambdasonden nach Katalysator |
| 0x004F | Signal magerer als erwartet |
| 0x0050 | Signal fetter als erwartet |
| 0x0051 | Sondensignal zu träge |
| 0x0052 | Signal nicht plausibel |
| 0x0053 | Sondensignal zu träge nach Schubphase |
| 0x0054 | Signal während Schubabschaltung  oberhalb Schwelle |
| 0x0055 | Arbeitstemperatur Sonde nicht erreicht |
| 0x0056 | Betriebsbereitschaft Sonde zu spät erreicht |
| 0x0057 | Sondentemperatur  ungültig |
| 0x0058 | Innenwiderstand des Signalkreises zu hochohmig |
| 0x0059 | klemmt kurzzeitig |
| 0x005A | klemmt dauerhaft |
| 0x005B | schwergängig zu langsam |
| 0x005C | Ansteuerung fehlerhaft |
| 0x005D | Poti 1 unplausibel zu MAF |
| 0x005E | Poti 2 unplausibel zu MAF |
| 0x005F | Kurzschluss nach Minus oder Leitungsunterbrechung |
| 0x0060 | Randbedingungen verletzt |
| 0x0061 | Federtest und Notluftprüfung verfehlt  |
| 0x0062 | unteren Anschlag lernen während Urinitialisierung abgebrochen |
| 0x0063 | Notluftpunkt nicht adaptiert |
| 0x0064 | Federtest |
| 0x0065 | Notluftprüfung |
| 0x0066 | Neuadaption erforderlich |
| 0x0067 | unterer Anschlag nicht gelernt |
| 0x0068 | Messwert HFM zu hoch |
| 0x0069 | Messwert HFM zu niedrig |
| 0x006A | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x006B | Luftzufuhr nicht korrekt |
| 0x006C | Spannungsregler 1 |
| 0x006D | Spannungsregler 2 |
| 0x006E | Doppelfehler |
| 0x006F | Gleichlauffehler |
| 0x0070 | Momentenanforderung vom Tempomat trotz Bremssignal |
| 0x0071 | Momentenanforderung vom ACC/DCC unplausibel |
| 0x0072 | Momentenanforderung vom LDM unplausibel |
| 0x0073 | Drosselklappenstellung unplausibel |
| 0x0074 | defekt |
| 0x0075 | Anforderung I-Anteil unplausibel |
| 0x0076 | Anforderung PD-Anteil unplausibel |
| 0x0077 | Anforderung MSR unplausibel |
| 0x0078 | Anforderung EGS unplausibel |
| 0x0079 | Anforderung AMT unplausibel |
| 0x007A | maximales Kupplungsmoment unplausibel |
| 0x007B | Sporttastersignal unplausibel |
| 0x007C | minimales Kupplungsmoment unplausibel |
| 0x007D | Verlustmoment unplausibel |
| 0x007E | Software |
| 0x007F | SPI-Fehler |
| 0x0080 | Hardware |
| 0x0081 | Sicherheitsabschaltung |
| 0x0082 | Schalter defekt |
| 0x0083 | Toggle-Bit |
| 0x0084 | irreversibel aus |
| 0x0085 | reversibel aus |
| 0x0086 | Momentenanforderung vom LDM trotzt Bremssignal |
| 0x0087 | CAS-Fehler |
| 0x0088 | CAN Wert unplausibel |
| 0x0089 | kein Signal |
| 0x008A | ALIVE-Fehler |
| 0x008B | Prüfsumme |
| 0x008C | Checksumme |
| 0x008D | Timeout |
| 0x008E | Überspannung |
| 0x008F | batterieloser Betrieb |
| 0x0090 | Unterspannung |
| 0x0091 | Tiefentladung |
| 0x0092 | Powermanagement |
| 0x0093 | Ruhestromverletzung |
| 0x0094 | Zündzeit Zylinder 1 zu gering |
| 0x0095 | Zündzeit Zylinder 2 zu gering |
| 0x0096 | Zündzeit Zylinder 3 zu gering |
| 0x0097 | Zündzeit Zylinder 4 zu gering |
| 0x0098 | Zündzeit Zylinder 5 zu gering |
| 0x0099 | Zündzeit Zylinder 6 zu gering |
| 0x009A | Zündkreisüberwachung |
| 0x009B | Motor mechanisch zu laut  |
| 0x009C | Motor mechanisch zu leise |
| 0x009D | Motor mechanisch zu laut |
| 0x009E | Spannungsversorgung fehlt |
| 0x009F | Startphase |
| 0x00A0 | Elektrisch |
| 0x00A1 | Mechanisch |
| 0x00A2 | keine Kommunikation über BSD-Schnittstelle |
| 0x00A3 | Temperaturmessung |
| 0x00A4 | Permittivitätsmessung |
| 0x00A5 | Niveaumessung  |
| 0x00A6 | unplausibel bezüglich Lambdaregelung |
| 0x00A7 | Temperatursignal konstant |
| 0x00A8 | Temperaturgradient zu steil |
| 0x00A9 | Temperaturgradient zu hoch |
| 0x00AA | Signal oberhalb Schwelle |
| 0x00AB | Mechanischer- oder Hardwaredefekt |
| 0x00AC | Signal unterhalb Schwelle |
| 0x00AD | 1. Startwert im Flash zerstört. 2- aus 3-Auswahl fehlgeschlagen oder 2. Fehlerrückmeldung: Startwertprogrammierroutine |
| 0x00AE | Fehler beim Programmieren oder rücksetzen des Startwertes |
| 0x00AF | Falsche EWS-Telegramme empfangen. Die Fangbereichsrechnung ist für mindestens 5 Telegrammauswertungen fehlgeschlagen. |
| 0x00B0 | kein Startwert programmiert |
| 0x00B1 | Empfangsfehler des EWS-Telegramms (Start-, Stopbit- oder Framefehler) |
| 0x00B2 | Timeoutfehler: 10 Sekunden nach Kl.15 EIN noch kein EWS-Telegramm empfangen, evtl. Leitungsunterbrechung oder Kurzschluss nach Minus |
| 0x00B3 | Mehr als 3 Parity-Fehler erkannt |
| 0x00B4 | Lesefehler im EEPROM: Wechselcode Ablage |
| 0x00B5 | Schreibfehler im EEPROM: Wechselcode Ablage |
| 0x00B6 | Fehler Ablage |
| 0x00B7 | Steuergerät defekt |
| 0x00B8 | Timeout (Ungültigkeitswert vom Kombi) |
| 0x00B9 | Pedalwert zu Bremspedal |
| 0x00BA | Signalfehler |
| 0x00BB | Oelniveau zu niedrig |
| 0x00BC | Codierdaten im EEPROM fehlerhaft |
| 0x00BD | keine Codierung erfolgt (nach Programmierung) |
| 0x00BE | CAN Timeout |
| 0x00BF | Variantenüberwachung |
| 0x00C0 | Fertigungsmodus |
| 0x00C1 | Werkstattmodus |
| 0x00C2 | Transportmodus |
| 0x00C3 | CAN Bus off |
| 0x00C4 | CAN Baustein im Zustand passiv |
| 0x00C5 | Timeout  |
| 0x00C6 | Aktualisierungszähler inkrementiert nicht (Alive-Zähler) |
| 0x00C7 | Prüfsumme ungleich errechnetem Wert |
| 0x00C8 | kein Druck im Vanoshydrauliksystem |
| 0x00C9 | Kurzschluss nach Batterie Plus |
| 0x00CA | Kurzschluss nach Masse |
| 0x00CB | Unterbrechung |
| 0x00CC | Unterbrechung / Kurzschluss |
| 0x00CD | Nockenwellen- zur Kurbelwellenposition außerhalb Referenzbereich |
| 0x00CE | Integrierte Momentenreserve nicht erreicht |
| 0x00CF | Kurzschluss zu Batterie Plus |
| 0x00D0 | Kurzschluss nach Batterie Plus / Unterbrechung |
| 0x00D1 | IST Wert zu hoch |
| 0x00D2 | IST Wert zu niedrig |
| 0x00D3 | Drehzahl außerhalb der Toleranz |
| 0x00D4 | interne Temperatur zu hoch |
| 0x00D5 | Überstrom |
| 0x00D6 | Trockenlauf |
| 0x00D7 | Temperaturschwelle 1 überschritten |
| 0x00D8 | Temperaturschwelle 2 überschritten |
| 0x00D9 | keine Spannung am Notlauf-Eingang der Pumpe |
| 0x00DA | EBSD-Fehler |
| 0x00DB | BSD-Fehler |
| 0x00DC | Software-Fehler |
| 0x00DD | Temperatur |
| 0x00DE | Spannung |
| 0x00DF | Strom |
| 0x00E0 | Wakeupleitung Masseschluss |
| 0x00E1 | Systemfehler |
| 0x00E2 | Wakeupleitung Pegel unplausibel |
| 0x00E3 | Saugstrahlpumpe (Servo) defekt |
| 0x00E4 | Kurbelgehäuseentlüftung defekt |
| 0xFFFF | unbekannte Fehlerart |

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | °C | TIA | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x4201 | STAT_0x4201_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| ILMKG | 0x4203 | STAT_LUFTMASSE_WERT | Massenstrom vom HFM | kg/h | MAF_KGH_MES | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | °C | TCO | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x4301 | STAT_0x4301_WERT | Kühlerauslasstemperatur | °C | TCO_2 | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | - | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | °C | TOEL | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | - | OZ_KVBSM_UL | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | km | OZ_OELKM | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Ölsensor Niveau Rohwert | - | OZ_NIVR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Ölsensor Qualität Rohwert | - | OZ_PERMR | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Ölsensor Temperatur Rohwert | - | OZ_TEMPR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Ölsensor Temperatur | °C | OZ_TEMPAKT | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölsensor Niveau | - | OZ_NIVAKT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Ölsensor Qualität | - | OZ_PERMAKT | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| - | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | - | OZ_LF1C | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| - | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | - | OZ_LF2C | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| - | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | OZ_LF1T | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| - | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | OZ_LF2T | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| - | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | - | OZ_NIVKRZT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| - | 0x4410 | STAT_0x4410_WERT | Restweg aus Permittivität abgeleitet | km | OZ_RWPERM | - | signed integer | - | 10,0 | 1 | 0,0 |
| - | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | km | OZ_RWKVB | - | signed integer | - | 10,0 | 1 | 0,0 |
| - | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | - | OZ_OELZEIT | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x4413 | STAT_0x4413_WERT | aufbereitete Permittivität bei letztem Ölwechsel | - | OZ_PERMLOW | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| - | 0x4414 | STAT_0x4414_WERT | Permittivität für Bewertung aufbereitet (extrapoliert) | - | OZ_PERMEX | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| - | 0x4415 | STAT_0x4415_WERT | Offset für Permittivitätskorrektur | - | OZ_PERMOFF | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| - | 0x4416 | STAT_0x4416_WERT | zugeteilte Bonuskraftstoffmenge | - | OZ_KVBOG | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x4417 | STAT_0x4417_WERT | zugeteilter Permittivitätsbonus | - | OZ_PERMBOG | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| - | 0x4419 | STAT_0x4419_WERT | Statusinformation vom Ölzustandssensor | - | OZ_STATUS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x441A | STAT_0x441A_WERT | Statuswort mit Biteingangsgroessen OZ | - | OZ_STATUS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x441B | STAT_0x441B_WERT | QLT-Kommunikation iO (Statuswort St_qlt_ok, Bit0) | 0/1 | B_QLT_OK | - | 0xFF | - | 1 | 1 | 0 |
| SSPEI | 0x4505 | STAT_VVT_EINLASSSPREIZUNG_SOLL_WERT | Sollwert Einlassspreizung | °CRK | CAM_SP_IVVT_IN | - | unsigned char | - | 0,375 | 1 | 59,9999982118607 |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Nockenwellenposition Einlass | °CRK | PSN_CAM_IN_1 | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Nockenwellenposition Auslass | °CRK | PSN_CAM_EX_1 | - | unsigned integer | - | 0,375 | 1 | -95,9999971389771 |
| ISNWE | 0x4508 | STAT_NW_EINLASSSPREIZUNG_WERT | Istwert Einlassspreizung | °CRK | CAM_IN[1] | - | unsigned char | - | 0,375 | 1 | 59,9999982118607 |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| NSNWA | 0x450A | STAT_NW_NORMSPREIZUNG_AUSLASS_WERT | Normspreizung Auslass | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| NSNWE | 0x450B | STAT_NW_NORMSPREIZUNG_EINLASS_WERT | Normspreizung Einlass | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | aktueller Drosselklappenwinkel | °TPS | TPS_AV | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Drosselklappe Sollwert | °TPS | TPS_SP_MDL | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung über BSD | V | V_ALTER_SP | - | unsigned long | - | 0,100000001490116 | 1 | 10,6 |
| ITGEE | 0x4603 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | °C | TCHIP | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generator Strom | - | I_GEN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 1 | - | BSDGENCV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENR | 0x4606 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENH | 0x4607 | STAT_GENERATOR_HERSTELLERCODE_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGTYP | 0x4608 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | V | VB | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | Batteriespannung aktuell | V | UBT | - | unsigned integer | - | 0,0149999996647239 | 1 | 0,0 |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned integer | - | 2,50000011874363E-4 | 1 | 6,0 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | V | VB_BAS | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| - | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | - | ABSCH_KORR | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeitsgrenze | - | D_SOC | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | % | LOAD_BAT | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | % | N_PERC_ECF | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x4612 | STAT_0x4612_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 |
| - | 0x4613 | STAT_0x4613_WERT | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | U_FGEN | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x4614 | STAT_0x4614_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x4615 | STAT_0x4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 |
| - | 0x4616 | STAT_0x4616_WERT | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | TLRFGEN | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x4617 | STAT_0x4617_WERT | gefiltertes Generatormoment absolut Ausgang | Nm | MD_GENNM | - | signed integer | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x4618 | STAT_0x4618_WERT | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_LRFOFF | - | 0xFF | - | 1 | 1 | 0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | LV_INH_LSCL[1] | - | 0xFF | - | 1 | 1 | 0 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | LV_INH_LSCL[2] | - | 0xFF | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | VLS_COR_LSL[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | VLS_COR_LSL[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank1 | - | LAMB_BAS[0] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank2 | - | LAMB_BAS[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Kupplungsschalter Status | 0/1 | LV_CS | - | 0xFF | - | 1 | 1 | 0 |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Kupplungsschalter vorhanden | 0/1 | LV_CS_CUS | - | 0xFF | - | 1 | 1 | 0 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Sporttaster aktiv | 0/1 | LV_SOF_SWI | - | 0xFF | - | 1 | 1 | 0 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Status Klima ein | - | STATE_ACIN_CAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSLP | 0x4804 | STAT_SEKUNDAERLUFTPUMPE_WERT | Sekundärluft Pumpe aktiv | 0/1 | LV_SAP | - | 0xFF | - | 1 | 1 | 0 |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Startrelais über CAN aktiv | 0/1 | LV_RLY_ST_CAN | - | 0xFF | - | 1 | 1 | 0 |
| - | 0x4806 | STAT_0x4806_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motor Drehzahl | rpm | N | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlauf Solldrehzahl | rpm | N_SP_IS | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Status LL | 0/1 | LV_IS | - | 0xFF | - | 1 | 1 | 0 |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Kilometerstand Auflösung 1 km | km | CTR_KM_BN | - | unsigned long | - | 1,0 | 1 | 0,0 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Pedalwert Fahrerwunsch in % | % | PV_AV | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x5800 | STAT_0x5800_WERT | Zeit nach Start | s | OBD_T_AST | - | unsigned char | - | 256,0 | 1 | 0,0 |
| - | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | kPa | OBD_AMP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | 0-n | STATE_LS[1] | - | 0xFF | _CNV_S_5_LACO_RANGE_694 | 1 | 1 | 0 |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | 0-n | STATE_LS[2] | - | 0xFF | _CNV_S_5_LACO_RANGE_694 | 1 | 1 | 0 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x5805 | STAT_0x5805_WERT | Kühlmitteltemperatur OBD | °C | OBD_TCO | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda Integrator Gruppe 1 | % | OBD_LAM_COR[1] | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lambda Adaption Summe mul. und add. Gruppe 1 | % | OBD_LAM_AD[1] | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| ILIN2 | 0x5808 | STAT_LAMBDA_INTEGRATOR_GRUPPE2_WERT | Lambda Integrator Gruppe 2 | % | OBD_LAM_COR[2] | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Lambda Adaption Summe mul. und add. Gruppe 2 | % | OBD_LAM_AD[2] | - | unsigned char | - | 0,78125 | 1 | -100,000002235174 |
| IPKRS | 0x580A | STAT_KRAFTSTOFFDRUCK_WERT | Kraftstoffdruck | kPa | OBD_FUP | - | unsigned char | - | 3,0 | 1 | 0,0 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Drehzahl | rpm | OBD_N | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündzeitpunkt Zylinder 1 | °CRK | OBD_IGA_IGC | - | unsigned char | - | 0,5 | 1 | -64,0 |
| ITANL | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_LAW_WERT | Ansauglufttemperatur | °C | OBD_TIA | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILMGS | 0x5810 | STAT_LUFTMASSE_GRAMM_PRO_SEKUNDE_WERT | Luftdurchsatz OBD | g/s | OBD_MAF | - | unsigned char | - | 2,5599999427795406 | 1 | 0,0 |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 |
| - | 0x5812 | STAT_0x5812_WERT | Luftmasse gemessen | kg/h | MAF_KGH_MES_BAS | - | unsigned char | - | 8,0 | 1 | 0,0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | % | RF | - | signed char | - | 2,5599999427795406 | 1 | 0,0 |
| - | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x5815 | STAT_0x5815_WERT | Batteriespannung | V | OBD_VB | - | unsigned char | - | 0,2560000121593472 | 1 | 0,0 |
| - | 0x5816 | STAT_0x5816_WERT | Lambda Setpoint | - | OBD_LAMB_SP | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| - | 0x5817 | STAT_0x5817_WERT | Umgebungstemperatur | °C | OBD_TAM | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmasse gerechnet | mg/stk | MAF | - | unsigned char | - | 5,425863742828365 | 1 | 0,0 |
| - | 0x5819 | STAT_0x5819_WERT | Drehzahl OBD Byte | rpm | N_SAE_BYTE_KWP | - | unsigned char | - | 64,0 | 1 | 0,0 |
| - | 0x581A | STAT_0x581A_WERT | Nockenwelle Einlass | °CRK | CAM_IN_KWP | - | unsigned char | - | 0,400000005960464 | 1 | 50,0 |
| - | 0x581B | STAT_0x581B_WERT | Nockenwelle Einlass Sollwert | °CRK | CAM_SP_IVVT_IN_KWP | - | unsigned char | - | 0,400000005960464 | 1 | 50,0 |
| - | 0x581C | STAT_0x581C_WERT | Nockenwelle Auslass | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| - | 0x581D | STAT_0x581D_WERT | Nockenwelle Auslass Sollwert | °CRK | CAM_SP_IVVT_EX | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| - | 0x581E | STAT_0x581E_WERT | Ansauglufttemperatur | °C | TIA_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x581F | STAT_0x581F_WERT | Motortemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x5821 | STAT_0x5821_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x5822 | STAT_0x5822_WERT | (Motor)-Öltemperatur | °C | TOIL_MES | - | unsigned char | - | 1,0 | 1 | -40,0 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Zeit Motor steht | min | T_ES | - | unsigned char | - | 256,0 | 1 | 0,0 |
| - | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x5825 | STAT_0x5825_WERT | Abstellzeit | min | T_ES_CUS | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappe Sensor 1 | °TPS | TPS_AV_1 | - | unsigned char | - | 1,8673014640808114 | 1 | 0,0 |
| - | 0x5827 | STAT_0x5827_WERT | Lambdasondenheizung vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x5828 | STAT_0x5828_WERT | Lambdasondenheizung vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x5829 | STAT_0x5829_WERT | Lambdasondenheizung hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x582A | STAT_0x582A_WERT | Lambdasondenheizung hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomenteingriff über CAN | - | STATE_TQ_CAN_PLAUS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x582C | STAT_0x582C_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | CTR_ERR_LSL_IF_SPI_WR[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x582D | STAT_0x582D_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | CTR_ERR_LSL_IF_SPI_WR[2] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x582E | STAT_0x582E_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | FAC_DIAG_DYN_LSL_UP[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| - | 0x582F | STAT_0x582F_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | FAC_DIAG_DYN_LSL_UP[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| - | 0x5830 | STAT_0x5830_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | FAC_MV_DIAG_DYN_LSL_UP[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| - | 0x5831 | STAT_0x5831_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | FAC_MV_DIAG_DYN_LSL_UP[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Motor Status | 0-n | STATE_ENG | - | 0xFF | _CNV_S_6_RANGE_STAT_146 | 1 | 1 | 0 |
| - | 0x5833 | STAT_0x5833_WERT | Umgebungstemperatur beim Start | °C | TAM_ST | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned char | - | 21,226886749267585 | 1 | 0,0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | rpm/s | N_GRD | - | signed char | - | 32,0 | 1 | 0,0 |
| - | 0x5837 | STAT_0x5837_WERT | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | STATE_ERR_EL_LSL_UP[1] | - | 0xFF | _CNV_S_11_EGCP_RANGE_657 | 1 | 1 | 0 |
| - | 0x5838 | STAT_0x5838_WERT | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | STATE_ERR_EL_LSL_UP[2] | - | 0xFF | _CNV_S_11_EGCP_RANGE_657 | 1 | 1 | 0 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Status Drosselklappe Notlauf | 0-n | STATE_ETC_LIH | - | 0xFF | _CNV_S_6_RANGE_STAT_304 | 1 | 1 | 0 |
| - | 0x583A | STAT_0x583A_WERT | Ansauglufttemperatur beim Start | °C | TIA_ST | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | l | FTL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | V | VB | - | unsigned char | - | 0,101562492549419 | 1 | 0,0 |
| - | 0x583D | STAT_0x583D_WERT | Reset Quelle | - | RST_DET | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x583E | STAT_0x583E_WERT | Motordrehzahl bei Reset | rpm | N_RST_DET | - | unsigned char | - | 256,0 | 1 | 0,0 |
| - | 0x583F | STAT_0x583F_WERT | Drosselklappe Sollwert | °TPS | TPS_SP | - | unsigned char | - | 1,8673014640808114 | 1 | 0,0 |
| - | 0x5840 | STAT_0x5840_WERT | CPU Last bei Reset | % | CPU_LOAD_RST_DET | - | unsigned char | - | 25,0 | 1 | 0,0 |
| RTSGR | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_ROH_WERT | SG-Innentemperatur Rohwert | V | V_TECU_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5843 | STAT_0x5843_WERT | Versorgung FWG 1 | V | VCC_PVS_1_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| - | 0x5845 | STAT_0x5845_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5846 | STAT_0x5846_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5847 | STAT_0x5847_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5848 | STAT_0x5848_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5849 | STAT_0x5849_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RUK15 | 0x584A | STAT_KL15_SPANNUNG_ROH_WERT | Spannung Kl. 15 Rohwert | V | V_IGK_BAS_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x584B | STAT_0x584B_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x584C | STAT_0x584C_WERT | Spannung Drosselklappe Potentiometer 2 | V | V_TPS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | FLOW_COR_CPS | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| - | 0x584E | STAT_0x584E_WERT | Spannung Drosselklappe Potentiometer 1 | V | V_TPS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x584F | STAT_0x584F_WERT | Spannung Luftmasse | V | V_MAF | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| - | 0x5850 | STAT_0x5850_WERT | Spannung Motortemperatur | V | V_TCO_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5851 | STAT_0x5851_WERT | Spannung Ansauglufttemperatur | - | V_TIA | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| - | 0x5852 | STAT_0x5852_WERT | Kühlmitteltemperatur Kühlerausgang Rohwert | V | V_TCO_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5853 | STAT_0x5853_WERT | Spannung Kl.87 Rohwert | V | VB_BAS_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5854 | STAT_0x5854_WERT | Versorgung FWG 2 | V | VCC_PVS_2_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| - | 0x5855 | STAT_0x5855_WERT | Mittelwert Bank 1 | % | FAC_LAM_MV_MMV[1] | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| - | 0x5856 | STAT_0x5856_WERT | Mittelwert Bank 2 | % | FAC_LAM_MV_MMV[2] | - | signed char | - | 0,390625 | 1 | 2,22044609888115E-14 |
| - | 0x5858 | STAT_0x5858_WERT | Drosselklappe aktueller Wert | °TPS | TPS_AV | - | unsigned char | - | 1,8673014640808114 | 1 | 0,0 |
| - | 0x5859 | STAT_0x5859_WERT | DMTL Strom Referenzleck | mA | CUR_DMTL_REF_LEAK_KWP | - | unsigned char | - | 0,195312470197678 | 1 | 0,0 |
| - | 0x585A | STAT_0x585A_WERT | DMTL Strom Grobleck | mA | CUR_DMTL_ROUGH_LEAK_MIN_KWP | - | unsigned char | - | 0,195312470197678 | 1 | 0,0 |
| - | 0x585B | STAT_0x585B_WERT | DMTL Strom Diagnoseende | mA | CUR_DMTL_COR_FIL_KWP | - | unsigned char | - | 0,195312470197678 | 1 | 0,0 |
| - | 0x585C | STAT_0x585C_WERT | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | R_IT_LS_DOWN_KWP_H[1] | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_WERT | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | R_IT_LS_DOWN_KWP_H[2] | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | R_IT_LS_DOWN_KWP_L[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | R_IT_LS_DOWN_KWP_L[2] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | R_IT_LS_UP_KWP_H[1] | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | R_IT_LS_UP_KWP_H[2] | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | R_IT_LS_UP_KWP_L[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | R_IT_LS_UP_KWP_L[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| - | 0x5865 | STAT_0x5865_WERT | Ölstand Mittelwert Langzeit | - | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| - | 0x5866 | STAT_0x5866_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5867 | STAT_0x5867_WERT | Kilometerstand | km | CTR_KM_CAN | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | STAT_SV_REG1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | STAT_SV_REG2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x586A | STAT_0x586A_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned char | - | 0,06400000303983693 | 1 | 6,0 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA | min | T2HISTSHORT | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit mit Ruhestrom 200 - 1000 mA | min | T3HISTSHORT | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| IZSST | 0x586D | STAT_ZAEHLER_ERKENNUNG_SCHLECHTE_STRASSE_WERT | Zähler Erkennung schlechte Strasse | - | SUM_RR | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit mit Ruhestrom größer 1000 mA | min | T4HISTSHORT | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| - | 0x5870 | STAT_0x5870_WERT | Spannung DME Umgebungsdruck | V | V_AMP_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| SLAG1 | 0x5871 | STAT_LAMBDA_SOLLWERT_GRUPPE1_WERT | Lambda-Sollwert Gruppe 1 | - | LAMB_SP_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert Gruppe 2 | - | LAMB_SP_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| - | 0x5874 | STAT_0x5874_WERT | Spannung Strommessung DMTL | V | V_DMTL_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| ILMMM | 0x5876 | STAT_LUFTMASSE_MITTLERE_MINIMALE_WERT | Mittlere Diagnosewert minimale Luftmasse | kg/h | SAF_DIAG_MIN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDMMS | 0x5877 | STAT_DIFFERENZ_MAX_MIN_SAF_WERT | Differenz zwischen Maximum und Minimum SAF | kg/h | SAF_KGH_DIF | - | unsigned char | - | 4,0 | 1 | 0,0 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | - | LAMB_DELTA_I_LAM_ADJ_KWP[1] | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | - | LAMB_DELTA_I_LAM_ADJ_KWP[2] | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| ISFGR | 0x587A | STAT_FGR_WERT | Status FGR | 0-n | STATE_CRU | - | 0xFF | _CNV_S_6_RANGE_STAT_105 | 1 | 1 | 0 |
| ISMST | 0x587C | STAT_MOTORSTEUERUNG_WERT | Status Motorsteuerung | 0-n | ECU_STATE | - | 0xFF | _CNV_S_7_RANGE_ECU__142 | 1 | 1 | 0 |
| - | 0x587D | STAT_0x587D_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[1] | - | 0xFF | _CNV_S_4_EGCP_RANGE_668 | 1 | 1 | 0 |
| - | 0x587E | STAT_0x587E_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[2] | - | 0xFF | _CNV_S_4_EGCP_RANGE_668 | 1 | 1 | 0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x5880 | STAT_0x5880_WERT | Tastverhältnis Luftklappe | % | ECRASPWM | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | - | GEAR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | °C | TCO_ST | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| - | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5886 | STAT_0x5886_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[5] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert Gruppe 1 | - | LAMB_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Gruppe 2 | - | LAMB_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | s | T_AST | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | TTIP_MES_LS_UP[1] | - | signed char | - | 16,0 | 1 | 0,0 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit DMTL Leckmessung | s | T_ACT_LEAK_MES | - | unsigned char | - | 25,600000381469695 | 1 | 0,0 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom bei DMTL Pumpenprüfung | mA | CUR_DMTL_DMTLS_TEST | - | unsigned char | - | 1,5625238418579097 | 1 | 0,0 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | TTIP_MES_LS_UP[2] | - | signed char | - | 16,0 | 1 | 0,0 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | Nm | TQ_REQ_CLU | - | signed char | - | 8,0 | 1 | 0,0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | Nm | TQI_GS_FAST_DEC | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x5894 | STAT_0x5894_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[1] | - | 0xFF | _CNV_S_4_EGCP_RANGE_661 | 1 | 1 | 0 |
| - | 0x5895 | STAT_0x5895_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[2] | - | 0xFF | _CNV_S_4_EGCP_RANGE_661 | 1 | 1 | 0 |
| - | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Katalysator Bank 1 | °C | TEG_CAT_DOWN_MDL[1] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| - | 0x5897 | STAT_0x5897_WERT | Abgastemperatur hinter Katalysator Bank 2 | °C | TEG_CAT_DOWN_MDL[2] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Generator Sollspannung | V | V_ALTER_SP_KWP | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| IUOS1 | 0x589B | STAT_SPANNUNGSOFFSET_SIGNALPFAD1_WERT | Spannungsoffset Signalpfad CJ120 1 | V | VLS_OFS_LSL_KWP[1] | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| IUOS2 | 0x589C | STAT_SPANNUNGSOFFSET_SIGNALPFAD2_WERT | Spannungsoffset Signalpfad CJ120 2 | V | VLS_OFS_LSL_KWP[2] | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Motorabstellzeit | min | T_ES_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| - | 0x58A9 | STAT_0x58A9_WERT | Reset Zähler Überwachungsrechner | - | RST_CTR_MU_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x58AA | STAT_0x58AA_WERT | Reset Zähler Hauptrechner | - | RST_CTR_MC_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IADK1 | 0x58AB | STAT_ABWEICHUNG_DK_POTI1_WERT | Abweichung DK-Ersatzwert und DK-Potentiometer 1 | mg/stk | TPS_MAF_DIF_INT_1 | - | unsigned char | - | 5,425863742828365 | 1 | 0,0 |
| IADK2 | 0x58AC | STAT_ABWEICHUNG_DK_POTI2_WERT | Abweichung DK-Ersatzwert und DK-Potentiometer 2 | mg/stk | TPS_MAF_DIF_INT_2 | - | unsigned char | - | 5,425863742828365 | 1 | 0,0 |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Pedalwertgeber 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | Kraftstoff Anforderung an Pumpe | l/h | VFF_EFP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | DK-Adaptionsschritt | - | TPS_AD_STEP_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 | ms | V_DUR_IGC_0 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Funkenbrenndauer Zylinder 5 | ms | V_DUR_IGC_1 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 | ms | V_DUR_IGC_2 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Funkenbrenndauer Zylinder 6 | ms | V_DUR_IGC_3 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Funkenbrenndauer Zylinder 2 | ms | V_DUR_IGC_4 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 | ms | V_DUR_IGC_5 | - | unsigned char | - | 1,0240000486373915 | 1 | 0,0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | Bremsdruck | bar | BRAKE_PRS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | rpm | N_32_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| - | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | % | PV_AV_MON | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | mg/stk | MAF_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| - | 0x58BD | STAT_0x58BD_WERT | Modellluftmasse Überwachung tiefpassgefiltert | mg/stk | MAF_SUB_COR_MMV_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| IMMSR | 0x58BF | STAT_MOMENTENANFORDERUNG_VON_MSR_RELATIV_WERT | relative Momentenforderung von MSR über CAN | % | TQI_MSR_CAN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| - | 0x58C0 | STAT_0x58C0_WERT | Motordrehzahl Ersatzwert Überwachung | rpm | N_32_SUB_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit | µs | SEG_T_MES | - | unsigned char | - | 256,0 | 1 | 0,0 |
| INSUE | 0x58C7 | STAT_LEERLAUF_SOLLDREHZAHLABWEICHUNG_WERT | LL-Solldrehzahlabweichung Überwachung | rpm | N_DIF_SP_IS_MON | - | unsigned char | - | 32,0 | 1 | -4096,0 |
| - | 0x58C8 | STAT_0x58C8_WERT | I-Anteil Momentdifferenz Überwachung und Modell | Nm | TQ_DIF_I_IS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58C9 | STAT_0x58C9_WERT | I-Anteil LL passive Rampe aktiv | 0/1 | LV_PAS_RAMP_ACT_I_IS | - | 0xFF | - | 1 | 1 | 0 |
| - | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | Nm | TQ_DIF_P_D_SLOW_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | Nm | TQ_DIF_P_D_FAST_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | Nm | TQ_LOSS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58CD | STAT_0x58CD_WERT | Verlustmomentabweichung Überwachung | Nm | TQ_LOSS_DIF_MON | - | signed char | - | 2,0 | 1 | 0,0 |
| - | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | STATE_BYTE_SWI_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Motormoment Sollwert Überwachung | Nm | TQI_SP_MON | - | unsigned char | - | 2,0 | 1 | 0,0 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Motormoment Istwert Überwachung | Nm | TQI_AV_MON | - | unsigned char | - | 2,0 | 1 | 0,0 |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | Nm | TQI_AV | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58D4 | STAT_0x58D4_WERT | Abweichung maximales Moment an Kupplung Überwachung | Nm | TQ_MAX_CLU_DIF_MON | - | signed char | - | 2,0 | 1 | 0,0 |
| - | 0x58D6 | STAT_0x58D6_WERT | Abweichung minimales Moment an Kupplung Überwachung | Nm | TQ_MIN_CLU_DIF_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58D9 | STAT_0x58D9_WERT | Fehler Hauptrechner | 0-n | ERR_COD_MC_SAVE | - | 0xFF | _CNV_S_14_TMO3_ERR_C_364 | 1 | 1 | 0 |
| - | 0x58DA | STAT_0x58DA_WERT | Fehler Überwachungsrechner | 0-n | ERR_COD_MU_SAVE | - | 0xFF | _CNV_S_21_TMO3_ERR_C_365 | 1 | 1 | 0 |
| - | 0x58DB | STAT_0x58DB_WERT | Fehler Bitfeld high Byte | - | STATE_N_MAX_MON_HIGH_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x58DC | STAT_0x58DC_WERT | Fehler Bitfeld low Byte | - | STATE_N_MAX_MON_LOW_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUSPS | 0x58DF | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V | V_SOF_SWI_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| - | 0x58E0 | STAT_0x58E0_WERT | Abgleich Drosselklappenmodell (Faktor) | - | EISYDK_KORFAK_B | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| - | 0x58E1 | STAT_0x58E1_WERT | Abgleich Drosselklappenmodell (Offset) | kg/h | EISYDK_KOROFF_B | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58E2 | STAT_0x58E2_WERT | Abgleich Einlassventilmodell (Faktor) | - | EISYEV_KORFAK_B | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| - | 0x58E3 | STAT_0x58E3_WERT | Abgleich Einlassventilmodell (Offset) | kg/h | EISYEV_KOROFF_B | - | signed char | - | 8,0 | 1 | 0,0 |
| - | 0x58E4 | STAT_0x58E4_WERT | Betriebsart Istwert | 0-n | BA_IST | - | 0xFF | _CNV_S_7_Def_ba_400 | 1 | 1 | 0 |
| INMAZ | 0x58E5 | STAT_DREHZAHL_MAXIMAL_BEI_ZUENDAUSSETZER_WERT | Maximale Drehzahl bei Zündaussetzern | rpm | N_MAX_SCDN_MIS_32_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| ILMAZ | 0x58E6 | STAT_LAST_MAXIMAL_BEI_ZUENDAUSSETZER_RELATIV_WERT | Maximale relative Last bei Zündaussetzern | % | LOAD_MAX_SCDN_MIS | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ILMIZ | 0x58E7 | STAT_LAST_MINIMAL_BEI_ZUENDAUSSETZER_RELATIV_WERT | Minimale relative Last bei Zündaussetzern | % | LOAD_MIN_SCDN_MIS | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| INMIZ | 0x58E8 | STAT_DREHZAHL_MINIMAL_BEI_ZUENDAUSSETZER_WERT | Minimale Drehzahl bei Zündaussetzern | rpm | N_MIN_SCDN_MIS_32_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| IDMEL | 0x58F1 | STAT_DME_LOSNUMMER_WERT | DME - Losnummer | 0-n | STATE_LRN_ECU | - | 0xFF | _CNV_S_7_RANGE_STAT_325 | 1 | 1 | 0 |
| - | 0x58F5 | STAT_0x58F5_WERT | Eingangssignal Rückführregler 1 | V | VLS_DIF_LAM_ADJ_KWP[1] | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| - | 0x58F6 | STAT_0x58F6_WERT | Eingangssignal Rückführregler 2 | V | VLS_DIF_LAM_ADJ_KWP[2] | - | signed char | - | 0,00488278456032276 | 1 | -3,60784326466368E-6 |
| ILSA5 | 0x58F8 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL5_WERT | Segmentadaption Laufunruhe Zyl. 5 | %. | SEG_AD_MMV_ER[1] | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| ILSA3 | 0x58F9 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL3_WERT | Segmentadaption Laufunruhe Zyl. 3 | %. | SEG_AD_MMV_ER[2] | - | signed char | - | 0,06103530898690227 | 1 | 1,92095835817427E-5 |
| - | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | CL_MMV_SAE | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| - | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | SUM_DIAG_DIAGCPS_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUPV1 | 0x5A00 | STAT_PWG1_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 1 | V | VCC_PVS_1 | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| IUPV2 | 0x5A01 | STAT_PWG2_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 2 | V | VCC_PVS_2 | - | unsigned integer | - | 0,00976559147238731 | 1 | 0,0 |
| IUPW1 | 0x5A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW2 | 0x5A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUDK1 | 0x5A06 | STAT_DK1_SPANNUNG_WERT | Spannung Drosselklappe Potentiometer 1 | V | V_TPS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUDK2 | 0x5A07 | STAT_DK2_SPANNUNG_WERT | Spannung Drosselklappe Potentiometer 2 | V | V_TPS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUANS | 0x5A08 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannung Ansauglufttemperatur | - | V_TIA | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| IUKUM | 0x5A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V | V_TCO | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKUA | 0x5A0A | STAT_KUEHLERAUSLASSTEMPERATUR_SPANNUNG_WERT | Spannung Kühlmitteltemperatur Kühlerausgang | V | V_TCO_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUUMG | 0x5A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V | V_AMP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IULMM | 0x5A0C | STAT_LUFTMASSE_WERT | Spannung Luftmasse | V | V_MAF | - | unsigned char | - | 0,0196000002324581 | 1 | 0,0 |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V | V_TECU | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| - | 0x5A0F | STAT_0x5A0F_WERT | Spannung Kl.15 | V | V_IGK_BAS | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUK15 | 0x5A10 | STAT_KL15_SPANNUNG_WERT | Spannung Kl15 | V | V_IGK_MES | - | unsigned integer | - | 0,0280601158738136 | 1 | 0,0 |
| IUSV1 | 0x5A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSV2 | 0x5A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN1 | 0x5A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN2 | 0x5A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUDMT | 0x5A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Strommessung DMTL | V | V_DMTL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| ITKUA | 0x5A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| ITSGI | 0x5A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| SWDKL | 0x5A24 | STAT_DK_WINKEL_SOLL_WERT | Drosselklappe Sollwert | °TPS | TPS_SP | - | unsigned integer | - | 0,00729414634406567 | 1 | 0,0 |
| IPUMG | 0x5A26 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | MAP | - | unsigned integer | - | 0,0829175263643265 | 1 | 0,0 |
| IPPW1 | 0x5A27 | STAT_PWG1_WERT | Pedalwertgeber Potentiometer 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IPPW2 | 0x5A28 | STAT_PWG2_WERT | Pedalwertgeber Potentiometer 2 | % | PV_AV_2 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| RFPWG | 0x5A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ILUZ1 | 0x5A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | µs | ER_CYL[0] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ2 | 0x5A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | µs | ER_CYL[4] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ3 | 0x5A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | µs | ER_CYL[2] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ4 | 0x5A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | µs | ER_CYL[5] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ5 | 0x5A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | µs | ER_CYL[1] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ6 | 0x5A35 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | µs | ER_CYL[3] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ISKLO | 0x5A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | 0/1 | LV_KNK | - | 0xFF | - | 1 | 1 | 0 |
| IUKZ1 | 0x5A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ2 | 0x5A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 2 | V | NL[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ3 | 0x5A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ4 | 0x5A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ5 | 0x5A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 5 | V | NL[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ6 | 0x5A3C | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ1 | 0x5A3D | STAT_KLOPFSIGNAL_ZYL1_WERT | Klopfsignal Zylinder 1 | V | KNKS[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKRZ1 | 0x5A3E | STAT_KLOPFSIGNAL_ZYL1_RELATIV_WERT | Klopfsignal Zylinder 1 relativ | - | KNKS_REL_NL_0 | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| IKSZ6 | 0x5A3F | STAT_KLOPFSIGNAL_ZYL6_WERT | Klopfsignal Zylinder 6 | V | KNKS[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKRZ6 | 0x5A40 | STAT_KLOPFSIGNAL_ZYL6_RELATIV_WERT | Klopfsignal Zylinder 6 relativ | - | KNKS_REL_NL_5 | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| IZEZ1 | 0x5A42 | STAT_EINSPRITZZEIT_ZYL1_WERT | Einspritzzeit Zylinder 1 | ms | ti_1_0 | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| IZEZ2 | 0x5A43 | STAT_EINSPRITZZEIT_ZYL2_WERT | Einspritzzeit Zylinder 2 | ms | ti_1_4 | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| IZEZ3 | 0x5A44 | STAT_EINSPRITZZEIT_ZYL3_WERT | Einspritzzeit Zylinder 3 | ms | ti_1_2 | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| IZEZ4 | 0x5A45 | STAT_EINSPRITZZEIT_ZYL4_WERT | Einspritzzeit Zylinder 4 | ms | ti_1_5 | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| IZEZ5 | 0x5A46 | STAT_EINSPRITZZEIT_ZYL5_WERT | Einspritzzeit Zylinder 5 | ms | ti_1_1 | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| IZEZ6 | 0x5A47 | STAT_EINSPRITZZEIT_ZYL6_WERT | Einspritzzeit Zylinder 6 | ms | ti_1_3 | - | unsigned integer | - | 0,00400000018998981 | 1 | 0,0 |
| IZWZ1 | 0x5A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder1 | °CRK | IGA_IGC[0] | - | unsigned char | - | 0,375 | 1 | -35,6249989382923 |
| ILASB | 0x5A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISACR | 0x5A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN | Klimakompressorrelais Ein | 0/1 | LV_ACCOUT_RLY | - | 0xFF | - | 1 | 1 | 0 |
| ILAB1 | 0x5A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Katalysator Bank 1 | - | LAMB_LS_UP[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| ILAB2 | 0x5A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Katalysator Bank 2 | - | LAMB_LS_UP[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| IRNK1 | 0x5A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS hinter Katalysator Bank 1 | 0/1 | LV_LS_DOWN_READY[1] | - | 0xFF | - | 1 | 1 | 0 |
| IRNK2 | 0x5A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS hinter Katalysator Bank 2 | 0/1 | LV_LS_DOWN_READY[2] | - | 0xFF | - | 1 | 1 | 0 |
| ISHN1 | 0x5A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung hinter Katalysator Bank 1 | 0-n | STATE_LSH_DOWN[1] | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| ISHN2 | 0x5A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung hinter Katalysator Bank 2 | 0-n | STATE_LSH_DOWN[2] | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| ISHV1 | 0x5A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Katalysator Bank 1 | 0-n | STATE_LSH_UP[1] | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| ISHV2 | 0x5A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Katalysator Bank 2 | 0-n | STATE_LSH_UP[2] | - | 0xFF | _CNV_S_7_EGCP_RANGE_639 | 1 | 1 | 0 |
| IAHV1 | 0x5A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN1 | 0x5A59 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHV2 | 0x5A5A | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN2 | 0x5A5B | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK2_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISBLS | 0x5A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | 0/1 | LV_IM_BLS | - | 0xFF | - | 1 | 1 | 0 |
| ISBLT | 0x5A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | 0/1 | LV_IM_BTS | - | 0xFF | - | 1 | 1 | 0 |
| ISOED | 0x5A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | 0/1 | LV_POIL_SWI | - | 0xFF | - | 1 | 1 | 0 |
| ISEBO | 0x5A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Box-Lüfter Ein | 0/1 | LV_EBOX_CFA | - | 0xFF | - | 1 | 1 | 0 |
| ISDMP | 0x5A66 | STAT_DMTL_PUMPE_EIN_WERT | DMTL Pumpe Ein | 0/1 | LV_DMTL_PUMP | - | 0xFF | - | 1 | 1 | 0 |
| ISDMV | 0x5A67 | STAT_DMTL_VENTIL_EIN_WERT | DMTL Ventil Ein | 0/1 | LV_DMTLS | - | 0xFF | - | 1 | 1 | 0 |
| ISDMH | 0x5A68 | STAT_DMTL_HEIZUNG_EIN_WERT | DMTL Heizung Ein | 0/1 | LV_HDMTL_ON | - | 0xFF | - | 1 | 1 | 0 |
| ISMIL | 0x5A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | 0/1 | LV_MIL_CAN | - | 0xFF | - | 1 | 1 | 0 |
| ISFGR | 0x5A6A | STAT_LAMPE_FGR_EIN_WERT | Lampe FGR Ein | 0/1 | LV_CRU_MAIN_SWI | - | 0xFF | - | 1 | 1 | 0 |
| ISCEL | 0x5A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | 0/1 | LV_WAL_1_CAN | - | 0xFF | - | 1 | 1 | 0 |
| ISTFG | 0x5A6D | STAT_TASTE_FGR_EIN_WERT | Status Taste FGR | 0-n | STATE_MSW_CAN | - | 0xFF | _CNV_S_8_RANGE_STAT_18 | 1 | 1 | 0 |
| IAKFT | 0x5A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | % | ECTPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IASEV | 0x5A75 | STAT_SEKUNDAERLUFT_VENTIL_PWM_WERT | Sekundärluft Ventil | 0/1 | LV_SAV | - | 0xFF | - | 1 | 1 | 0 |
| - | 0x5A76 | STAT_0x5A76_WERT | Adaption Öffnungspunkt Tankentlüftungsventil | % | CPPWM_ADD_AD_MEM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IATEV | 0x5A77 | STAT_TEV_PWM_WERT | Tankentlüftungsventil TEV PWM | % | CPPWM_CPS | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAELUE | 0x5A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAVEP | 0x5A7A | STAT_VANOS_EINLASS_PWM_WERT | VANOS PWM Wert Einlass früh | % | IVVTPWM_IN_A | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IAVAP | 0x5A7B | STAT_VANOS_AUSLASS_PWM_WERT | VANOS PWM Wert Auslass früh | % | IVVTPWM_EX_A | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5A7C | STAT_0x5A7C_WERT | VANOS PWM Wert Einlass spät | % | IVVTPWM_IN_R | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5A7D | STAT_0x5A7D_WERT | VANOS PWM Wert Auslass spät | % | IVVTPWM_EX_R | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IINT1 | 0x5A81 | STAT_INTEGRATOR_BANK1_WERT | Integrator Bank 1 | % | FAC_LAM_LIM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| IINT2 | 0x5A82 | STAT_INTEGRATOR_BANK2_WERT | Integrator Bank 2 | % | FAC_LAM_LIM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| IADD1 | 0x5A83 | STAT_ADAPTION_ADDITIV_BANK1_WERT | Adaption Offset Lambda Bank 1 | mg/stk | MFF_ADD_LAM_AD_OUT[1] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| IADD2 | 0x5A84 | STAT_ADAPTION_ADDITIV_BANK2_WERT | Adaption Offset Lambda Bank 2 | mg/stk | MFF_ADD_LAM_AD_OUT[2] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| IMUL1 | 0x5A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Adaption Multiplikation Lambda Bank 1 | % | FAC_LAM_AD_OUT[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| IMUL2 | 0x5A86 | STAT_ADAPTION_MULTIPLIKATIV_BANK2_WERT | Adaption Multiplikation Lambda Bank 2 | % | FAC_LAM_AD_OUT[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| - | 0x5A87 | STAT_0x5A87_WERT | Adaptionswert Trimregelung Bank 1 | - | LAMB_DELTA_AD_LAM_ADJ[1] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| - | 0x5A88 | STAT_0x5A88_WERT | Adaptionswert Trimregelung Bank 2 | - | LAMB_DELTA_AD_LAM_ADJ[2] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| - | 0x5A89 | STAT_0x5A89_WERT | multiplikative Gemischadaption hohe Last Bank 1 | % | FAC_H_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| - | 0x5A8A | STAT_0x5A8A_WERT | multiplikative Gemischadaption hohe Last Bank 2 | % | FAC_H_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| - | 0x5A8B | STAT_0x5A8B_WERT | multiplikative Gemischadaption niedrige Last Bank 1 | % | FAC_L_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| - | 0x5A8C | STAT_0x5A8C_WERT | multiplikative Gemischadaption niedrige Last Bank 2 | % | FAC_L_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,22044609888115E-14 |
| - | 0x5A8D | STAT_0x5A8D_WERT | additive Gemischadaption Leerlauf Bank 1 | mg/stk | MFF_ADD_LAM_AD[1] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| - | 0x5A8E | STAT_0x5A8E_WERT | additive Gemischadaption Leerlauf Bank 2 | mg/stk | MFF_ADD_LAM_AD[2] | - | signed integer | - | 0,0211947802454233 | 1 | 3,08424652517705E-13 |
| - | 0x5A91 | STAT_0x5A91_WERT | Katalysatordiagnosewert Bank1 | - | EFF_CAT_DIAG[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| - | 0x5A92 | STAT_0x5A92_WERT | Katalysatordiagnosewert Bank2 | - | EFF_CAT_DIAG[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| SANWA | 0x5A94 | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Auslass Sollwert | °CRK | CAM_SP_IVVT_EX | - | unsigned char | - | -0,375 | 1 | -39,9999978542329 |
| IANWA | 0x5A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass | °CRK | PSN_AD_CAM_EX_1 | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| IANWE | 0x5A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass | °CRK | PSN_AD_CAM_IN_1 | - | unsigned char | - | 0,375 | 1 | -47,9999985694886 |
| - | 0x5A97 | STAT_0x5A97_WERT | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | B_VSEAN_LOC | - | 0xFF | - | 1 | 1 | 0 |
| IAKWF | 0x5A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | 0/1 | LV_SEG_AD_AVL_ER | - | 0xFF | - | 1 | 1 | 0 |
| IDSLS | 0x5AA1 | STAT_SLS_DIAGNOSE_WERT | Status Diagnose TEV | 0-n | STATE_EOL_KWP_CPS | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| IDTEV | 0x5AA2 | STAT_TEV_DIAGNOSE_WERT | Status Diagnose DMTL | 0-n | STATE_EOL_KWP_DMTL | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| IDDMT | 0x5AA3 | STAT_DMTL_DIAGNOSE_WERT | Status Diagnose Lambdasonden | 0-n | STATE_EOL_KWP_VLS | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| IDLSS | 0x5AA4 | STAT_LS_DIAGNOSE_WERT | Status Diagnose Leerlaufdrehzahlverstellung | 0-n | STATE_EOL_KWP_N_SP_IS | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| - | 0x5AA5 | STAT_0x5AA5_WERT | Status Diagnose Sekundärluft | 0-n | STATE_EOL_KWP_SA | - | 0xFF | _CNV_S_10_STATE_EOL__351 | 1 | 1 | 0 |
| IVKMH | 0x5AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IWMIL | 0x5AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Fahrstrecke mit MIL an | km | DIST_ACT_MIL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IZBST | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | h | TRT | - | unsigned long | - | 2,77777780866018E-5 | 1 | 0,0 |
| IVSLP | 0x5AB5 | STAT_VARIANTE_SEKUNDAERLUFTPUMPE_WERT | Variante Sekundärluftpumpe | 0/1 | LV_VAR_SAP | - | 0xFF | - | 1 | 1 | 0 |
| RTANS | 0x5AB6 | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Rohwert Ansauglufttemperatur 1 | °C | TIA_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| RTKWA | 0x5AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,9999985694886 |
| IUSST | 0x5AB9 | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V | V_SOF_SWI | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IAKSP | 0x5ABA | STAT_KRAFTSTOFFPUMPE_PWM_WERT | PWM Kraftstoffpumpe | % | EFPPWM | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IMLUF | 0x5ABC | STAT_LUFTMASSE_WERT | Luftmasse | kg/h | MAF_KGH_MES_BAS | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| IASRE | 0x5ABD | STAT_STARTRELAIS_AKTIV_WERT | Starterrelais aktiv | 0/1 | LV_RLY_ST | - | 0xFF | - | 1 | 1 | 0 |
| - | 0x5AC0 | STAT_0x5AC0_WERT | Reset Status Hardware-Register | - | RST_HW_STATUS | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x5AC1 | STAT_0x5AC1_WERT | Reset Status Software-Register | - | RST_SW_STATUS | - | unsigned long | - | 1,0 | 1 | 0,0 |
| - | 0x5AC2 | STAT_0x5AC2_WERT | Reset Adresse | - | RST_LPRC_RESET_ADDRESS | - | unsigned long | - | 1,0 | 1 | 0,0 |
| - | 0x5ACC | STAT_0x5ACC_WERT | Istspreizung Einlassvanos | ° KW | VSE_SPRI | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x5ACD | STAT_0x5ACD_WERT | Sollspreizung Einlassvanos | ° KW | VSE_SPRS | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x5ACE | STAT_0x5ACE_WERT | Verstellzeit (Früh) Einlassvanos | ms | VSE_VERSTELLZT_FRUEH | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x5ACF | STAT_0x5ACF_WERT | Verstellzeit (Spät) Einlassvanos | ms | VSE_VERSTELLZT_SPAET | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x5AD0 | STAT_0x5AD0_WERT | Status Vanos (Notlauf) | - | ST_VNS_NOTL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AD1 | STAT_0x5AD1_WERT | Istspreizung Auslassvanos | ° KW | VSA_SPRI | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x5AD2 | STAT_0x5AD2_WERT | Sollspreizung Auslassvanos | ° KW | VSA_SPRS | - | unsigned integer | - | 0,100000001490116 | 1 | 0,0 |
| - | 0x5AD3 | STAT_0x5AD3_WERT | Verstellzeit (Früh) Auslassvanos | ms | VSA_VERSTELLZT_FRUEH | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x5AD4 | STAT_0x5AD4_WERT | Verstellzeit (Spät) Auslassvanos | ms | VSA_VERSTELLZT_SPAET | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0x5AE0 | STAT_0x5AE0_WERT | Kühlmitteltemperatur < 98°C | % | TMOT_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE1 | STAT_0x5AE1_WERT | 98°C =< Kühlmitteltemperatur =< 112°C | % | TMOT_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE2 | STAT_0x5AE2_WERT | 113°C =< Kühlmitteltemperatur =< 120°C | % | TMOT_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE3 | STAT_0x5AE3_WERT | 121°C =< Kühlmitteltemperatur =< 125°C | % | TMOT_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE4 | STAT_0x5AE4_WERT | Kühlmitteltemperatur > 125°C | % | TMOT_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE5 | STAT_0x5AE5_WERT | Motoröltemperatur < 80°C | % | TOEL_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE6 | STAT_0x5AE6_WERT | 80°C =< Motoröltemperatur =< 110°C | % | TOEL_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE7 | STAT_0x5AE7_WERT | 110°C =< Motoröltemperatur =< 135°C | % | TOEL_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE8 | STAT_0x5AE8_WERT | 135°C =< Motoröltemperatur =< 150°C | % | TOEL_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AE9 | STAT_0x5AE9_WERT | Motoröltemperatur > 150°C | % | TOEL_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AEA | STAT_0x5AEA_WERT | Getriebeöltemperatur < 80°C | % | TGET_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AEB | STAT_0x5AEB_WERT | 80°C =< Getriebeöltemperatur =< 109°C | % | TGET_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AEC | STAT_0x5AEC_WERT | 110°C =< Getriebeöltemperatur =< 124°C | % | TGET_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AED | STAT_0x5AED_WERT | 125°C =< Getriebeöltemperatur =< 129°C | % | TGET_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AEE | STAT_0x5AEE_WERT | Getriebeöltemperatur > 129°C | % | TGET_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AEF | STAT_0x5AEF_WERT | Umgebungstemperatur < 3°C | % | TUMG_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AF0 | STAT_0x5AF0_WERT | 3°C =< Umgebungstemperatur =< 19°C | % | TUMG_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AF1 | STAT_0x5AF1_WERT | 20°C =< Umgebungstemperatur =< 29°C | % | TUMG_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AF2 | STAT_0x5AF2_WERT | 30°C =< Umgebungstemperatur =< 39°C | % | TUMG_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AF3 | STAT_0x5AF3_WERT | Umgebungstemperatur > 39°C | % | TUMG_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| - | 0x5AF4 | STAT_0x5AF4_WERT | Status Auslass Dichtemessung  | - | ST_BT_VSA_DICHT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AF5 | STAT_0x5AF5_WERT | Status Auslass Frühanschlag | - | ST_BT_VSA_FRUEHAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AF6 | STAT_0x5AF6_WERT | Status Auslass Sollwert einregeln | - | ST_BT_VSA_SOLL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AF7 | STAT_0x5AF7_WERT | Status Auslass Spätanschlag | - | ST_BT_VSA_SPAETAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AF8 | STAT_0x5AF8_WERT | Status Auslass Verstellzeitmessung | - | ST_BT_VSA_VERST | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AF9 | STAT_0x5AF9_WERT | Status Auslass Ventilansteuerung | - | ST_BT_VSA_VENT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AFA | STAT_0x5AFA_WERT | Status Einlass Dichtemessung | - | ST_BT_VSE_DICHT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AFB | STAT_0x5AFB_WERT | Status Einlass Frühanschlag | - | ST_BT_VSE_FRUEHAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AFC | STAT_0x5AFC_WERT | Status Einlass Sollwert einregeln | - | ST_BT_VSE_SOLL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AFD | STAT_0x5AFD_WERT | Status Einlass Spätanschlag | - | ST_BT_VSE_SPAETAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AFE | STAT_0x5AFE_WERT | Status Einlass Verstellzeitmessung | - | ST_BT_VSE_VERST | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x5AFF | STAT_0x5AFF_WERT | Status Einlass Ventilansteuerung | - | ST_BT_VSE_VENT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### _CNV_S_10_STATE_EOL__351

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ACT |
| 0x01 | ST_INH |
| 0x02 | PAR_NOT_PLAUS |
| 0x03 | WAIT_REL |
| 0x04 | UNDEF |
| 0x05 | NOT_START |
| 0x06 | END_WOUT_RESULT |
| 0x07 | ABORTED |
| 0x08 | END_WOUT_ERR |
| 0x09 | END_WITH_ERR |
| 0xFF | undefiniert |

### _CNV_S_11_EGCP_RANGE_657

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_FAULT |
| 0x01 | SCG_LINE_RCD |
| 0x02 | SCG_LINE_VIP |
| 0x03 | SCG_LINE_VG |
| 0x04 | SCG_LINE_VN |
| 0x05 | SCG |
| 0x06 | SCBAT_LINE_RCD |
| 0x07 | SCBAT_LINE_VIP |
| 0x08 | SCBAT_LINE_VG |
| 0x09 | SCBAT_LINE_VN |
| 0x0A | SCBAT |
| 0xFF | undefiniert |

### _CNV_S_14_TMO3_ERR_C_364

| WERT | UWTEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | COMM_CKS_ERR |
| 0x02 | COMM_HD_ERR |
| 0x03 | PRDR_CHK_ERR |
| 0x04 | SW_VERS_ERR |
| 0x05 | SW_VAR_ERR |
| 0x06 | ABC_MON2_MU_ERR |
| 0x07 | IDX_MON2_MU_ERR |
| 0x08 | SYN_PFM_MU_ERR |
| 0x09 | ROM_LVL2_ERR |
| 0x0A | RAM_LVL2_ERR |
| 0x0B | ROM_LVL1_ERR |
| 0x0C | RAM_LVL1_ERR |
| 0x0D | RST_LOOP_ERR |
| 0xFF | undefiniert |

### _CNV_S_21_TMO3_ERR_C_365

| WERT | UWTEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | COMM_HD_ERR |
| 0x02 | COMM_CKS_ERR |
| 0x03 | PIN_CONF_ERR |
| 0x04 | SW_VERS_ERR |
| 0x05 | COMM_TOUT_MAX_ERR |
| 0x06 | COMM_TOUT_MIN_ERR |
| 0x07 | RAM_CHK_MU_ERR |
| 0x08 | ROM_CHK_MU_ERR |
| 0x09 | RESP_MON2_MC_ERR |
| 0x0A | RED_SWI_OFF_PATH |
| 0x0B | PFM_1_MC_ERR |
| 0x0C | PFM_2_MC_ERR |
| 0x0D | PFM_3_MC_ERR |
| 0x0E | PFM_4_MC_ERR |
| 0x0F | PFM_5_MC_ERR |
| 0x10 | PFM_6_MC_ERR |
| 0x11 | PFM_7_MC_ERR |
| 0x12 | PFM_8_MC_ERR |
| 0x13 | WDG_MU_ERR |
| 0x14 | ENA_BYTE_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_661

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_668

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x03 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_694

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_105

| WERT | UWTEXT |
| --- | --- |
| 0x00 | PASSIVE |
| 0x01 | CONST_DRIVE |
| 0x03 | RESUME |
| 0x05 | SET_ACC |
| 0x07 | RETARD |
| 0x09 | TIP |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_146

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_304

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ETC_NO_LIH |
| 0x01 | ETC_LIH_1 |
| 0x02 | ETC_LIH_2_REV |
| 0x04 | ETC_LIH_2 |
| 0x08 | ETC_LIH_3 |
| 0x10 | ETC_LIH_4 |
| 0xFF | undefiniert |

### _CNV_S_7_DEF_BA_400

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_639

| WERT | UWTEXT |
| --- | --- |
| 0x00 | LSH_OFF |
| 0x01 | LSH_POW_RISE |
| 0x02 | LSH_POW_RED |
| 0x03 | LSH_POW_FALL |
| 0x04 | LSH_POW_CTL |
| 0x05 | LSH_VB_PROT |
| 0x06 | LSH_TEMP_PROT |
| 0xFF | undefiniert |

### _CNV_S_7_RANGE_ECU__142

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ENG_STOP |
| 0x01 | RUN_ENG |
| 0x02 | SYN_ENG_IGK_ON |
| 0x03 | SYN_ENG_IGK_OFF |
| 0x04 | PWL |
| 0x05 | ENG_LOCK |
| 0x06 | WAKE_UP |
| 0xFF | undefiniert |

### _CNV_S_7_RANGE_STAT_325

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | VAR_ECU_ROM_PLAUS |
| 0x5A5A | VAR_ECU_LOT1 |
| 0xA5A5 | VAR_ECU_LOT2 |
| 0xAEAE | VAR_ECU_LOT4 |
| 0xBCBC | VAR_ECU_SERIAL_ECU |
| 0xEAEA | VAR_ECU_LOT3 |
| 0xFFFF | VAR_ECU_NOT_LEARNED |
| 0xFFFF | undefiniert |

### _CNV_S_8_RANGE_STAT_18

| WERT | UWTEXT |
| --- | --- |
| 0x00 | None |
| 0x01 | Set-Acc-TipUp |
| 0x02 | Decelerate-TipDown |
| 0x03 | Resume |
| 0x04 | Off |
| 0x05 | - |
| 0x06 | - |
| 0x07 | Error |
| 0xFF | undefiniert |

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
| 0xFF | 255 Status unbekannt |
