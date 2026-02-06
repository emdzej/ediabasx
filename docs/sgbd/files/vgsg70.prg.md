# vgsg70.prg

## General

|  |  |
| --- | --- |
| File | vgsg70.prg |
| Type | PRG |
| Jobs | 87 |
| Tables | 67 |
| Origin | BMW EA-71 Frank Reuter |
| Revision | 2.302 |
| Author | MAGNA_STEYR_Fahrzeugtechnik HES Nebila_Bako, MAGNA_STEYR_Fahrze |
| ECU Comment | SGBD für VGSG70 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Verteiler-Getriebe Steuergerät |  |  |
| ORIGIN | string | BMW EA-71 Frank Reuter |  |  |
| REVISION | string | 2.302 |  |  |
| AUTHOR | string | MAGNA_STEYR_Fahrzeugtechnik HES Nebila_Bako, MAGNA_STEYR_Fahrze |  |  |
| COMMENT | string | SGBD für VGSG70 |  |  |
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
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb, H2 Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG, ZKrz_a, DAD Defaultwert: 0x00 (ungueltig) |
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

### HARDWARE_NUMMER_LESEN

ECU Hardware Nummer lesen KWP 2000: $1A ReadEcuIdentification LID91 Modus   : Default

_No arguments._

### STATUS_KUPPLUNG

Status- und Fehlerinformation des Verteiler Getriebes KWP2000: $21 ReadDataByLocalIdentifier LID01 Modus  : Default

_No arguments._

### STATUS_AKTUATOR_STROM

Verteiler Getriebe Aktuator Strom KWP2000: $21 ReadDataByLocalIdentifier LID02 Modus  : Default

_No arguments._

### STATUS_VG_AKTUATOR_POSITION

Position bzw. Winkel des Verteiler Getriebe Aktuators KWP2000: $21 ReadDataByLocalIdentifier LID03 Modus  : Default

_No arguments._

### STATUS_VG_AKTUATOR_TEMPERATUR

Temperatur des Aktuator am Verteiler Getriebe KWP2000: $21 ReadDataByLocalIdentifier LID04 Modus  : Default

_No arguments._

### STATUS_T_BELASTUNG_AKTUATOR

Thermische Belastung des Verteiler Getriebe Aktuators KWP2000: $21 ReadDataByLocalIdentifier LID05 Modus  : Default

_No arguments._

### STATUS_VG_OEL_TEMP

Oel Temperatur des Verteiler Getriebes KWP2000: $21 ReadDataByLocalIdentifier LID06 Modus  : Default

_No arguments._

### STATUS_T_BELASTUNG_KUPPLUNG

Thermische Belastung der Kupplung KWP2000: $21 ReadDataByLocalIdentifier LID07 Modus  : Default

_No arguments._

### STATUS_MK_SOLL

Sollwert des Sollmoments an der Vorderachse KWP2000: $21 ReadDataByLocalIdentifier LID08 Modus  : Default

_No arguments._

### STATUS_MK_IST

Istwert des Sollmoments an der Vorderachse KWP2000: $21 ReadDataByLocalIdentifier LID09 Modus  : Default

_No arguments._

### STATUS_CODIERSTATUS

Codierung KWP2000: $21 ReadDataByLocalIdentifier LID0A Modus  : Default

_No arguments._

### STATUS_V_FZG

Vom VGSG ermittelte Fahrzeuggeschwindigkeit KWP2000: $21 ReadDataByLocalIdentifier LID0B Modus  : Default

_No arguments._

### STATUS_N_MOT

Motordrehzahl die auf dem CAN ausgegeben wird KWP2000: $21 ReadDataByLocalIdentifier LID0C Modus  : Default

_No arguments._

### STATUS_KLEMMENSPANNUNG

Klemmenspannungen am Verteilergetriebe SG KWP2000: $21 ReadDataByLocalIdentifier LID0D Modus  : Default

_No arguments._

### STATUS_GETRIEBE_INTEGRATOREN

Getriebe Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID0E Modus  : Default

_No arguments._

### STATUS_LAMELLEN_INTEGRATOREN

Lamellen Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID0F Modus  : Default

_No arguments._

### STATUS_KLASSIERSPEICHER

Wiederstandsklassierung des Getriebe KWP2000: $21 ReadDataByLocalIdentifier LID11 Modus  : Default

_No arguments._

### STATUS_DAUERLAUFDATEN

Life Time Getriebe Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID1E Life Time Lamellen Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID1F Thermische Belastung des Verteiler Getriebe Aktuators KWP2000: $21 ReadDataByLocalIdentifier LID05 Position bzw. Winkel des Verteiler Getriebe Aktuators KWP2000: $21 ReadDataByLocalIdentifier LID03 Gefilterter Kalibrierwinkel KWP2000: $21 ReadDataByLocalIdentifier LID21 SG Temperatur und Ungefilterter Kalibrierwinkel KWP2000: $21 ReadDataByLocalIdentifier LID12 Temperatur des Aktuators am Verteiler Getriebe KWP2000: $21 ReadDataByLocalIdentifier LID04 Modus  : Default

_No arguments._

### STATUS_CODIERDATEN

Daten der Variantencodierung auslesen KWP2000: $21 ReadDataByLocalIdentifier LID1A Modus  : Default

_No arguments._

### STATUS_LT_GETRIEBE_INTEGRATOREN

Life Time Getriebe Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID1E Modus  : Default

_No arguments._

### STATUS_LT_LAMELLEN_INTEGRATOREN

Life Time Lamellen Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID1F Modus  : Default

_No arguments._

### STATUS_SW_STAENDE

Status der SW-Stände und MCU Daten KWP2000: $21 ReadDataByLocalIdentifier LID20 Modus  : Default

_No arguments._

### STATUS_KALIBRIERUNG

Gefilterter Kalibrierwinkel KWP2000: $21 ReadDataByLocalIdentifier LID21 Modus  : Default

_No arguments._

### STATUS_AKTUELLES_AIF_LESEN

Auslesen des Anwender Informations Feldes KWP 2000: $1A ReadEcuIdentification LID86 Modus   : Default

_No arguments._

### STATUS_SYSTEMFUNKTION

PIC Messwerte KWP2000: $21 ReadDataByLocalIdentifier LID22 Klemmenzustaende KWP2000: $21 ReadDataByLocalIdentifier LID23 Kilometerstand KWP2000: $21 ReadDataByLocalIdentifier LID24 Radgeschwindigkeit KWP2000: $21 ReadDataByLocalIdentifier LID25 Zustand sperre KWP2000: $21 ReadDataByLocalIdentifier LID26 Ersatzprogramme KWP2000: $21 ReadDataByLocalIdentifier LID27 Spannungen Stellmotorbruecke und andere ... KWP2000: $21 ReadDataByLocalIdentifier LID28, LID29, LID2A, LID2B, LID2C, LID2D, LID2F Modus  : Default

_No arguments._

### STEUERN_FUNKTIONSPRUEFUNG

KWP2000: $31 StartRoutineByLocalIdentifier $32 Kalibrierung loeschen KWP2000: $11 ECUReset $01 PowerOn KWP2000: $31 StartRoutineByLocalIdentifier $30 Funktionspruefung Kupplung Bedingungen: vFzg < 0,2km/h, Kl15 ein, kein Ersatzprg. aktiv Bedingungen: bei nmot>800 UpM muss MKsoll < 10Nm sein Modus  : Default

_No arguments._

### STEUERN_KUPP_FUNKTIONSPRUEFUNG

KWP2000: $31 StartRoutineByLocalIdentifier $30 Funktionspruefung Kupplung Bedingungen: vFzg < 0,2km/h, Kl15 ein Bedingungen: bei nmot>800 UpM muss MKsoll < 10Nm sein Modus  : Default

_No arguments._

### STEUERN_HO_INTEGRATOREN_LOESCHEN

KWP2000: $31 StartRoutineByLocalIdentifier $31 Funktionspruefung Kupplung Bedingungen: vFzg < 0,2km/h Modus  : Default

_No arguments._

### STEUERN_KALIBRIERUNG_LOESCHEN

KWP2000: $31 StartRoutineByLocalIdentifier $32 Funktionspruefung Kupplung Bedingungen: vFzg < 0,2km/h, Kl15 ein, kein Ersatzprg. aktiv Bedingungen: MKsoll < 10Nm Modus  : Default

_No arguments._

### STEUERN_LT_INTEGRATOREN_LOESCHEN

KWP2000: $31 StartRoutineByLocalIdentifier $33 Funktionspruefung Kupplung Bedingungen: vFzg < 0,2km/h Modus  : Default

_No arguments._

### STEUERN_KLASSIERSPEICHER_RUECKSETZEN

Widerstandsklasse des Getriebe neu setzen KWP2000: $3B WriteDataByLocalIdentifier LID11 Bedingungen: vFzg < 0,2km/h Modus: Default

_No arguments._

### STEUERN_VERSCHLEISSDATEN_AUSLIEFERZUSTAND

Auslieferzustand bei CBS (HO-Integratoren) und LT-Integratoren erstellen KWP2000: $3B WriteDataByLocalIdentifier LID12 Bedingungen: vFzg < 0,2km/h und nmot<100 UpM Modus: Default

_No arguments._

### WRITE_MK_SOLL

Sollmomentvorgabe per Diagnose KWP 2000: $3B WriteDataByLocalIdentifier LID08 Bedingungen: vFzg < 20km/h Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten Sollmoment |

### WRITE_GETRIEBE_INTEGRATOREN

Getriebe Integratoren ins EEPROM schreiben KWP 2000: $3B WriteDataByLocalIdentifier LID0E Bedingungen: vFzg < 0,2km/h Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten GetriebeArbeit1 |
| DATEN_2 | string | Daten GetriebeArbeit2 |
| DATEN_3 | string | Daten KM Stand Integrator |

### WRITE_LAMELLEN_INTEGRATOREN

Lamellen Integratoren ins EEPROM schreiben KWP 2000: $3B WriteDataByLocalIdentifier LID0F Bedingungen: vFzg < 0,2km/h Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten Lamelle1 |
| DATEN_2 | string | Daten Lamelle2 |
| DATEN_3 | string | Daten Lamelle3 |

### WRITE_LT_GETRIEBE_INTEGRATOREN

Lifetime Getriebe Integratoren ins EEPROM schreiben KWP2000: $3B WriteDataByLocalIdentifier LID1E Bedingungen: vFzg < 0,2km/h Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten GetriebeArbeit1 |
| DATEN_2 | string | Daten GetriebeArbeit2 |
| DATEN_3 | string | Daten KM Stand Integrator |

### WRITE_LT_LAMELLEN_INTEGRATOREN

Lifetime Lamellen Integratoren ins EEPROM schreiben KWP2000: $3B WriteDataByLocalIdentifier LID1F Bedingungen: vFzg < 0,2km/h Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten Lamelle1 |
| DATEN_2 | string | Daten Lamelle2 |
| DATEN_3 | string | Daten Lamelle3 |

### WRITE_PWM

manuelle Vorgabe Motor KWP 2000: $3B WriteDataByLocalIdentifier LID13 Bedingungen: (vFzd = gueltig) und (vFzg < 0.2km/h) Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | P_SMPWMMan |
| DATEN_2 | string | P_EnSMPWMMan |
| DATEN_3 | string | P_dSMPWMMan |

### VGSG_DIAGNOSE_TESTJOB

Job fuer VGSG Diagnosetest (max. 8 Daten - SID,LID,usw.) KWP 2000: Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_DATEN | int | Anzahl Datenbytes |
| DATEN_1 | int | Daten Byte 1 |
| DATEN_2 | int | Daten Byte 2 |
| DATEN_3 | int | Daten Byte 3 |
| DATEN_4 | int | Daten Byte 4 |
| DATEN_5 | int | Daten Byte 5 |
| DATEN_6 | int | Daten Byte 6 |
| DATEN_7 | int | Daten Byte 7 |
| DATEN_8 | int | Daten Byte 8 |

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
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5208 | 5208 Stellmotor Verkabelung |
| 0x52D0 | 52D0 Inkrementalgeber DIR - Leitung |
| 0x52D1 | 52D1 Inkrementalgeber Versorgung |
| 0x52D2 | 52D2 Inkrementalgeber IMP - Leitung |
| 0x52D4 | 52D4 Inkrementalgeber unplausibel |
| 0x5398 | 5398 Prüfsummenfehler Programmcode |
| 0x5399 | 5399 Prüfsummenfehler EEPROM |
| 0x539A | 539A Watchdog Fehlfunktion |
| 0x539B | 539B Prüffehler RAM |
| 0x539D | 539D Steuergerät interner Fehler |
| 0x539E | 539E Funktionsfehler VTG Gesamtsystem |
| 0x53A0 | 53A0 Steuergerät nicht codiert bzw. Codierung ist fehlerhaft |
| 0x53FB | 53FB Fehlende Versorgung |
| 0x53FC | 53FC KL30 Versorgungsspannung |
| 0x53FD | 53FD KL30g Versorgungsspannung |
| 0x53FE | 53FE Unerwarteter Reset |
| 0x53FF | 53FF Kl15 Plausibilität |
| 0x5460 | 5460 Motorstrommessung Plausibilität |
| 0x5461 | 5461 Fehler Stellmotoransteuerung |
| 0x5462 | 5462 Fehler Stellmotor oder erhöhter Kraftbedarf Kupplung |
| 0x5463 | 5463 Bruch Mechanik |
| 0x54C4 | 54C4 Kalibrierung fehlerhaft |
| 0x54C5 | 54C5 Motorstrommessung Offset Strommessung |
| 0x54C6 | 54C6 Ölverschleiss |
| 0x54C7 | 54C7 Modell - Inkrementalgeber unplausibel |
| 0x54C8 | 54C8 Klassierwiderstand am Stellmotor |
| 0x54C9 | 54C9 Temperatursensor am Stellmotor |
| 0x55C0 | 55C0 Allrad Abschaltung. Abbruch VGSG-Allrad-Notlaufregelung wegen falscher CAN-Signale. |
| 0x55C1 | 55C1 ALLRADVERLUST |
| 0x55C2 | 55C2 Allrad Abschaltung. Keine DXC Sollmomentenvorgabe. |
| 0x55C3 | 55C3 VGSG-Allrad-Notlaufregelung aktiviert. Keine DXC Sollmomentenvorgabe. |
| 0x55C4 | 55C4 CAN_MESSAGE_SOLL_MOM_ANF, BB |
| 0x55C5 | 55C5 CAN_MESSAGE_TORQUE_3, AA |
| 0x55C6 | 55C6 CAN_MESSAGE_GESCHWINDIGKEIT_RAD, CE |
| 0x55C7 | 55C7 CAN_MESSAGE_GESCHWINDIGKEIT, 1A0 |
| 0x55C8 | 55C8 CAN_MESSAGE_KLEMMENSTATUS, 130 |
| 0x55C9 | 55C9 CAN_MESSAGE_TORQUE_1, A8 |
| 0x55CA | 55CA CAN_MESSAGE_KILOMETERSTAND, 330 |
| 0x55CB | 55CB CAN_MESSAGE_A_TEMP_RELATIVZEIT, 310 |
| 0x55CD | 55CD CAN_MESSAGE_STAT_DSC, 19E |
| 0x55CE | 55CE CAN_MESSAGE_GETRIEBEDATEN, BA |
| 0x55CF | 55CF CAN_MESSAGE_GETRIEBEDATEN_2, 1A2 |
| 0x55D0 | 55D0 CAN_MESSAGE_LENKRADWINKEL, C4 |
| 0x55D1 | 55D1 CAN_MESSAGE_ENGINE_1, 1D0 |
| 0x55D2 | 55D2 CAN_MESSAGE_WMOM_DRV_1, 143 |
| 0x55D3 | 55D3 CAN_MESSAGE_WMOM_DRV_4, DC |
| 0x55D4 | 55D4 CAN_MESSAGE_WMOM_DRV_5, DD |
| 0xCF4B | CF4B CAN Bus Off |
| 0xCF54 | CF54 CAN_TIMEOUT_SOLL_MOM_ANF, BB |
| 0xCF55 | CF55 CAN_TIMEOUT_TORQUE_3, AA |
| 0xCF56 | CF56 CAN_TIMEOUT_GESCHWINDIGKEIT_RAD, CE |
| 0xCF57 | CF57 CAN_TIMEOUT_GESCHWINDIGKEIT, 1A0 |
| 0xCF58 | CF58 CAN_TIMEOUT_KLEMMENSTATUS, 130 |
| 0xCF59 | CF59 CAN_TIMEOUT_TORQUE_1, A8 |
| 0xCF5A | CF5A CAN_TIMEOUT_KILOMETERSTAND, 330 |
| 0xCF5B | CF5B CAN_TIMEOUT_A_TEMP_RELATIVZEIT, 310 |
| 0xCF5D | CF5D CAN_TIMEOUT_STAT_DSC, 19E |
| 0xCF5E | CF5E CAN_TIMEOUT_GETRIEBEDATEN, BA |
| 0xCF5F | CF5F CAN_TIMEOUT_GETRIEBEDATEN_2, 1A2 |
| 0xCF60 | CF60 CAN_TIMEOUT_LENKRADWINKEL, C4 |
| 0xCF61 | CF61 CAN_TIMEOUT_ENGINE_1, 1D0 |
| 0xCF62 | CF62 CAN_TIMEOUT_WMOM_DRV_1, 143 |
| 0xCF63 | CF63 CAN_TIMEOUT_WMOM_DRV_4, DC |
| 0xCF64 | CF64 CAN_TIMEOUT_WMOM_DRV_5, DD |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5208 | 0x01 | FF_x_a | FF_3_b | - |
| 0x54C8 | 0x01 | FF_x_a | FF_3_b | - |
| 0x54C9 | 0x01 | FF_x_a | FF_3_b | - |
| 0x52D0 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x52D1 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x52D2 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x52D4 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x5398 | 0x01 | FF_x_a | FF_7_b | - |
| 0x5399 | 0x01 | FF_x_a | FF_7_b | - |
| 0x539A | 0x01 | FF_x_a | FF_4_b | - |
| 0x539B | 0x01 | FF_x_a | FF_4_b | - |
| 0x539D | 0x01 | FF_x_a | FF_4_b | - |
| 0x53A0 | 0x01 | FF_x_a | FF_4_b | - |
| 0x53FB | 0x01 | FF_x_a | FF_1_b | 0x0F |
| 0x53FC | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x53FD | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x53FE | 0x01 | FF_x_a | FF_1_b | 0x0F |
| 0x53FF | 0x01 | FF_x_a | FF_0_b | - |
| 0x5460 | 0x01 | FF_x_a | FF_6_b | - |
| 0x5461 | 0x01 | FF_x_a | FF_6_b | - |
| 0x5462 | 0x01 | FF_x_a | FF_6_b | - |
| 0x5463 | 0x01 | FF_x_a | FF_6_b | - |
| 0x54C4 | 0x01 | FF_x_a | FF_6_b | - |
| 0x54C5 | 0x01 | FF_x_a | FF_6_b | - |
| 0x54C6 | 0x01 | FF_x_a | FF_0_b | - |
| 0x54C7 | 0x01 | FF_x_a | FF_6_b | - |
| 0x539E | 0x01 | FF_x_a | FF_6_b | - |
| 0x55C4 | 0x01 | FF_x_a | FF_A_b | - |
| 0x55C5 | 0x01 | FF_x_a | FF_B_b | - |
| 0x55C6 | 0x01 | FF_x_a | FF_C_b | - |
| 0x55C7 | 0x01 | FF_x_a | FF_D_b | - |
| 0x55C8 | 0x01 | FF_x_a | FF_E_b | - |
| 0x55C9 | 0x01 | FF_x_a | FF_F_b | - |
| 0x55CA | 0x01 | FF_x_a | FF_G_b | - |
| 0x55CB | 0x01 | FF_x_a | FF_H_b | - |
| 0x55CD | 0x01 | FF_x_a | FF_I_b | - |
| 0x55CE | 0x01 | FF_x_a | FF_J_b | - |
| 0x55CF | 0x01 | FF_x_a | FF_K_b | - |
| 0x55D0 | 0x01 | FF_x_a | FF_L_b | - |
| 0x55D1 | 0x01 | FF_x_a | FF_M_b | - |
| 0x55D2 | 0x01 | FF_x_a | FF_N_b | - |
| 0x55D3 | 0x01 | FF_x_a | FF_O_b | - |
| 0x55D4 | 0x01 | FF_x_a | FF_P_b | - |
| 0x55C1 | 0x01 | FF_x_a | FF_8_b | - |
| default | 0x01 | FF_x_a | FF_5_b | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Eingangsspannung KL30 | Volt | - | unsigned char | - | 1 | 8 | 0 |
| 0x02 | KL15 Status CAN | 0-n | - | 0x03 | KL15CAN | 1 | 1 | 0 |
| 0x03 | KL15 Intern | 0-n | - | 0x04 | KL15 | 1 | 1 | 0 |
| 0x04 | Fahrbereitschaft | 0-n | - | 0x18 | NMOT | 1 | 1 | 0 |
| 0x05 | Reset-Quelle | 0-n | - | 0xE0 | RQ | 1 | 1 | 0 |
| 0x06 | MKSOLL | Nm | - | unsigned char | - | 10 | 1 | 0 |
| 0x07 | MSperrIstPosLim | Nm | - | unsigned char | - | 8 | 1 | 0 |
| 0x08 | deltaPhiSperreCal | Grad | - | unsigned char | - | -1 | 1 | 0 |
| 0x09 | SperreError | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x0A | SperreState | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x0B | SperreMainState | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x0E | iSM | Ampere | - | signed char | - | 1 | 2 | 0 |
| 0x0F | ResetWhileEngineOn | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x10 | Fehlerzähler Kalibrierversuche | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x11 | Fehlerzähler Zeitüberschreitung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x12 | SwErrNr | HEX | - | unsigned int | H | 1 | 1 | 0 |
| 0x13 | SGTemp | Grad C | - | signed char | - | 2 | 1 | 0 |
| 0x14 | CAN_Fehlersignale | 1 | - | unsigned char | _ | 1 | 1 | 0 |
| 0x15 | uSM_IE_VCC_ST | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x16 | Plausib_Ink_Gradient | 0/1 | - | 0x02 | - | 1 | 1 | 0 |
| 0x17 | Plausib_Ink_Frequenz | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x18 | Plausib_MotorModell | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x19 | Plausib_Ink_Wackler | 0/1 | - | 0x10 | - | 1 | 1 | 0 |
| 0x1A | Page Number | HEX | - | unsigned char | - | 1 | 1 | 0 |
| 0x1B | Info | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x1C | Status | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x1D | SOLL_MOM_ANF_Fehlersignale | 0-n | - | 0x1F | SOLL_MOM_ANF | 1 | 1 | 0 |
| 0x1E | TORQUE_3_Fehlersignale | 0-n | - | 0x07 | TORQUE_3 | 1 | 1 | 0 |
| 0x1F | GESCHWINDIGKEIT_RAD_Fehlersignale | 0-n | - | 0x0F | GESCHWINDIGKEIT_RAD | 1 | 1 | 0 |
| 0x20 | SperreNotlauf | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | EP_Sperre | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | ExeptionHandlingKUPPSTAT | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | ExeptionHandlingKUPPSTATERR | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x24 | ErrorKUPPSTAT | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x25 | TORQUE_2_FehlerSignale | 0-n | - | 0x01 | TORQUE_2 | 1 | 1 | 0 |
| 0x26 | TORQUE_1_FehlerSignale | 0-n | - | 0x03 | TORQUE_1 | 1 | 1 | 0 |
| 0x27 | STAT_DSC_FehlerSignale | 0-n | - | 0x1F | STAT_DSC | 1 | 1 | 0 |
| 0x28 | LENKRADWINKEL_FehlerSignale | 0-n | - | 0x03 | LENKRADWINKEL | 1 | 1 | 0 |
| 0x29 | KLEMMENSTATUS_FehlerSignale | 0-n | - | 0x01 | KLEMMENSTATUS | 1 | 1 | 0 |
| 0x2A | KILOMETERSTAND_FehlerSignale | 0-n | - | 0x01 | KILOMETERSTAND | 1 | 1 | 0 |
| 0x2B | A_TEMP_RELATIVZEIT_FehlerSignale | 0-n | - | 0x03 | A_TEMP_RELATIVZEIT | 1 | 1 | 0 |
| 0x2C | GESCHWINDIGKEIT_FehlerSignale | 0-n | - | 0x03 | GESCHWINDIGKEIT | 1 | 1 | 0 |
| 0x2D | GETRIEBEDATEN_FehlerSignale | 0-n | - | 0x0F | GETRIEBEDATEN | 1 | 1 | 0 |
| 0x2E | GETRIEBEDATEN_2_FehlerSignale | 0-n | - | 0x01 | GETRIEBEDATEN_2 | 1 | 1 | 0 |
| 0x2F | ENGINE_1_FehlerSignale | 0-n | - | 0x01 | ENGINE_1 | 1 | 1 | 0 |
| 0x30 | WMOM_DRV_1_FehlerSignale | 0-n | - | 0x0F | WMOM_DRV_1 | 1 | 1 | 0 |
| 0x31 | WMOM_DRV_4_FehlerSignale | 0-n | - | 0x03 | WMOM_DRV_4 | 1 | 1 | 0 |
| 0x32 | WMOM_DRV_5_FehlerSignale | 0-n | - | 0x0F | WMOM_DRV_5 | 1 | 1 | 0 |
| 0xFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### FF_X_0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x02 | 0x03 | 0x04 |

### FF_X_A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x02 | 0x03 | 0x04 | 0x05 |

### FF_0_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B |

### FF_1_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x06 | 0x0B | 0x12 | 0x13 |

### FF_2_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0E | 0x07 | 0x08 | 0x09 | 0x0B |

### FF_2_C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 |

### FF_3_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x09 | 0x0B | 0x13 | 0x0E |

### FF_4_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0E | 0x0B | 0x1A | 0x12 | 0x13 |

### FF_5_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x14 |

### FF_6_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0E | 0x07 | 0x10 | 0x09 | 0x0B | 0x11 |

### FF_7_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x1B | 0x1C | 0x1A | 0x12 | 0x13 |

### FF_8_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x20 | 0x21 | 0x0B | 0x09 | 0x22 | 0x23 |

### KL15CAN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CAN Signal OK -- KL15 aus |
| 0x01 | CAN Signal OK -- KL15 ein |
| 0xXY | CAN Signal Timeout -- KL15 unbekannt |

### KL15

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KL15 aus |
| 0x04 | KL15 ein |

### NMOT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CAN Signal Ok -- VKM aus |
| 0x08 | CAN Signal Ok -- VKM ein |
| 0x10 | CAN Signal NOk -- VKM aus |
| 0x18 | CAN Signal NOk -- VKM ein |

### RQ

| WERT | UWTEXT |
| --- | --- |
| 0x00 | UNKOWN_SOURCE |
| 0x20 | EE_RST_MARKER |
| 0x40 | OSEK_SHUTDOWN |
| 0x60 | BASIS_DRIVER_ERROR |
| 0x80 | UNDER_VOLTAGE |
| 0xA0 | INTERNAL_WATCHDOG |
| 0xC0 | EXTERN_WATCHDOG |
| 0xE0 | NO RESET |

### SOLL_MOM_ANF

| WERT | UWTEXT |
| --- | --- |
| 0x01 | DSC_MOM_TAR_FTAX |
| 0x02 | DSC_ACV_OPN |
| 0x04 | DSC_DYNMC_DXC |
| 0x08 | DSC_RQ_FNT |
| 0x10 | DSC_EMMOD_OPN |
| 0xXY | multiple Signals |

### TORQUE_3

| WERT | UWTEXT |
| --- | --- |
| 0x01 | TORQUE_3_N_MOT |
| 0x02 | TORQUE_3_ANG_ACPD |
| 0x04 | TORQUE_3_TORQ_DVCH |
| 0xXY | multiple Signals |

### GESCHWINDIGKEIT_RAD

| WERT | UWTEXT |
| --- | --- |
| 0x01 | GESCHWINDIGKEIT_RAD_V_WHL_FLH |
| 0x02 | GESCHWINDIGKEIT_RAD_V_WHL_FRH |
| 0x04 | GESCHWINDIGKEIT_RAD_V_WHL_RLH |
| 0x08 | GESCHWINDIGKEIT_RAD_V_WHL_RRH |
| 0xXY | multiple Signals |

### TORQUE_2

| WERT | UWTEXT |
| --- | --- |
| 0x01 | TORQUE_2_TORQ_AVL_MIN |
| 0xXY | multiple Signals |

### TORQUE_1

| WERT | UWTEXT |
| --- | --- |
| 0x01 | TORQUE_1_ST_SW_CLT |
| 0x02 | TORQUE_1_ST_CT_BRPD_DME |
| 0xXY | multiple Signals |

### STAT_DSC

| WERT | UWTEXT |
| --- | --- |
| 0x01 | STAT_DSC_ST_CT_BRPD |
| 0x02 | STAT_DSC_BRP |
| 0x04 | STAT_DSC_ST_ABS |
| 0x08 | STAT_DSC_ST_CLCTR |
| 0x10 | STAT_DSC_ST_HBA |
| 0xXY | multiple Signals |

### LENKRADWINKEL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | SIG_STWA |
| 0x02 | SIG_STWA_ERR |
| 0xXY | multiple Signals |

### KLEMMENSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | KLEMMENSTATUS_ST_KL15 |
| 0xXY | multiple Signals |

### KILOMETERSTAND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | KILOMETERSTAND_MILE_KM |
| 0xXY | multiple Signals |

### A_TEMP_RELATIVZEIT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | A_TEMP_RELATIVZEIT_T_TEMP_EX |
| 0x02 | A_TEMP_RELATIVZEIT_T_SEC_COU_REL |
| 0xXY | multiple Signals |

### GESCHWINDIGKEIT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | GESCHWINDIGKEIT_ACLN_VEH_ACRO_DSC |
| 0x02 | GESCHWINDIGKEIT_ANGV_YAW_DSC |
| 0xXY | multiple Signals |

### GETRIEBEDATEN

| WERT | UWTEXT |
| --- | --- |
| 0x01 | GETRIEBEDATEN_ST_GR_GRB |
| 0x02 | GETRIEBEDATEN_ST_GRLV_ACV |
| 0x04 | GETRIEBEDATEN_ST_CCLT |
| 0x08 | GETRIEBEDATEN_RPM_GRB_NEGL |
| 0xXY | multiple Signals |

### GETRIEBEDATEN_2

| WERT | UWTEXT |
| --- | --- |
| 0x01 | GETRIEBEDATEN_2_RPM_GRB_TURB |
| 0xXY | multiple Signals |

### FF_A_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x1D |

### FF_B_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x1E |

### FF_C_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x1F |

### FF_D_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x2C |

### FF_E_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x29 |

### FF_F_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x26 |

### FF_G_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x2A |

### FF_H_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x2B |

### FF_I_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x27 |

### FF_J_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x2D |

### FF_K_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x2E |

### FF_L_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x28 |

### FF_M_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x2F |

### FF_N_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x30 |

### FF_O_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x31 |

### FF_P_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x32 |

### ENGINE_1

| WERT | UWTEXT |
| --- | --- |
| 0x01 | ST_ENG_RUN |
| 0xXY | multiple Signals |

### WMOM_DRV_1

| WERT | UWTEXT |
| --- | --- |
| 0x01 | AVL_WMOM_PT_SUM |
| 0x02 | QU_AVL_WMOM_PT_SUM |
| 0x04 | REIN_PT |
| 0x08 | QU_REIN_PT |
| 0xXY | multiple Signals |

### WMOM_DRV_4

| WERT | UWTEXT |
| --- | --- |
| 0x01 | AVL_RPM_BAX_RED |
| 0x02 | QU_AVL_RPM_BAX_RED |
| 0xXY | multiple Signals |

### WMOM_DRV_5

| WERT | UWTEXT |
| --- | --- |
| 0x01 | TAR_WMOM_PT_SUM_COOTD |
| 0x02 | QU_SER_WMOM_PT_SUM_DRS |
| 0x04 | QU_SER_WMOM_PT_SUM_STAB |
| 0x08 | QU_SER_COOR_TORQ_BDRV |
| 0xXY | multiple Signals |
