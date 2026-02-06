# DSC_56.prg

## General

|  |  |
| --- | --- |
| File | DSC_56.prg |
| Type | PRG |
| Jobs | 76 |
| Tables | 25 |
| Origin | BMW EF-43 Kusch |
| Revision | 3.000 |
| Author | BMW EF-43 Kusch |
| ECU Comment | TRW EBC_450, DSC R56 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitaets Control DSC R56  |  |  |
| ORIGIN | string | BMW EF-43 Kusch |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW EF-43 Kusch |  |  |
| COMMENT | string | TRW EBC_450, DSC R56  |  |  |
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

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 IdentifyNumberofSubbusMembers Modus  : Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 IdentifyNumberofSubbusMembers $16xx SubbusMemberSerialNumber Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) |

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

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### STEUERN_DIGITAL

KWP2000:$30,$04,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) es koennen  maximal 17 Argumente vorgegeben werden E oder W,EVVL,AVVL,EVVR,AVVR,EVHL,AVHL,EVHR,AVHR,PUMPE,T_VLHR,T_VRHL,S_VLHR,S_VRHL Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Musterparametersatz_1: "E,EVVL,EVVR,T_VLHR,800,PUMPE," Musterparametersatz_2: "W,EVVL,EVVR,EVHL,S_VRHL,AVVL,AVVR,1000,T_VLHR,AVHL,AVHR,PUMPE" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es koennen 2 beliebige Stellgliedgruppen angesteuert werden und zwar 1 Stellgliedgruppe vor dem Zeitglied und 1 Stellgliedgruppe nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit in ms "EVVL":   EinlassVentil vorne links "AVHR":   AuslassVentil hinten rechts "S_VRHL": SaugVentil vorne_rechts hinten_links "T_VLHR": TrennVentil vorne_links hinten_rechts

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |
| ORT14 | string | gewuenschte Komponente 14 |
| ORT15 | string | gewuenschte Komponente 15 |
| ORT16 | string | gewuenschte Komponente 16 |

### STEUERN_DIGITAL_BLS

KWP2000:$30,$04,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern und Status des Bremslichtschalters ausgeben Parameterliste: (mit Strichpunkt getrennt) es koennen  maximal 17 Argumente vorgegeben werden E oder W,EVVL,AVVL,EVVR,AVVR,EVHL,AVHL,EVHR,AVHR,PUMPE,T_VLHR,T_VRHL,S_VLHR,S_VRHL Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Musterparametersatz_1: "E,EVVL,EVVR,T_VLHR,800,PUMPE," Musterparametersatz_2: "W,EVVL,EVVR,EVHL,S_VRHL,AVVL,AVVR,1000,T_VLHR,AVHL,AVHR,PUMPE" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es koennen 2 beliebige Stellgliedgruppen angesteuert werden und zwar 1 Stellgliedgruppe vor dem Zeitglied und 1 Stellgliedgruppe nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit in ms "EVVL":   EinlassVentil vorne links "AVHR":   AuslassVentil hinten rechts "S_VRHL": SaugVentil vorne_rechts hinten_links "T_VLHR": TrennVentil vorne_links hinten_rechts

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |
| ORT14 | string | gewuenschte Komponente 14 |
| ORT15 | string | gewuenschte Komponente 15 |
| ORT16 | string | gewuenschte Komponente 16 |

### STOP_STEUERN

Stop Steuerung KWP2000: $30 10     I/O Control Stop Steuerung Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Diagnose Mode = E oder Nur Sequenz = W |

### STEUERN_GESCHWINDIGKEIT_LIMIT

KWP2000:$31,$27,$07 StartRoutineByLocalID service Geschwindigkeitsbegrenzung von 10 km/h ausschalten bzw. einschalten Parameterliste: (mit Strichpunkt getrennt) es kann  maximal 1 Argument vorgegeben werden Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Sequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt 01 : Geschwindigkeitsbegrenzung ausschalten 02 : Geschwindigkeitsbegrenzung einschalten Musterparametersatz_1: "E,01 Musterparametersatz_2: "W,02 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Wenn Argument 2 leer gelassen wird oder nicht 01, default = 02

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Diagnose Mode = E oder Nur Sequenz = W |
| WERT | string | gewuenschter Wert 01 : Aus 01 = Aus , 02 = Ein |

### SS_SOFTWARE_NR

Identdaten System Supplier Software Nummer KWP2000: $1A 94 System Supplier Software Number Modus  : Default

_No arguments._

### SS_SOFTWARE_VER_NR

Identdaten System Supplier Software Version Nummer KWP2000: $1A 95 System Supplier Software Version Number Modus  : Default

_No arguments._

### STATUS_RADGESCHWINDIGKEIT

Radgeschwindigkeiten auslesen KWP2000: $21,$01 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_ANALOG

Analoge Eingänge auslesen KWP2000: $21,$02 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_DIGITAL

Analoge Eingänge auslesen KWP2000: $21,$03 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_CAN

CAN Eingänge auslesen KWP2000: $21,$04 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### START_CALIBRATION

KWP2000:$31,$2X StartRoutineByLocalID service Startet die Kalibrierung der einzelnen Sensoren Parameterliste: (mit Strichpunkt getrennt) es kann  maximal 1 Funktionsargument "LB" oder "QB" oder "GR" oder "DS" vorgegeben werden Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Sequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt 2. Parameter: LB,QB,GR,DS LB: Laengsbeschleunigung GR: Gierrate QB: Querbeschleunigung DS: Drucksensor Musterparametersatz: "e,LB jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Diagnose Mode = E oder Nur Sequenz = W |
| WERT | string | gewuenschter Wert: LB,QB,GR,DS |

### STATUS_CALIB

KWP2000:$33,$2XRequestRoutineResultByLocalID service Zeigt den Kalibrierstatus der einzelnen Sensoren an Parameterliste: (mit Strichpunkt getrennt) es kann  maximal 1 Argument vorgegeben werden Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Sequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt 2. Parameter: LB,QB,GR,DS : Lenkwinkel, Längsbeschleunigung, Querbeschleunigung Gierrate, Drucksensor Musterparametersatz: "e,LB jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Diagnose Mode = E oder Nur Sequenz = W |
| WERT | string | gewuenschter Wert: LW,LB,QB,GR,DS |

### RPA_RESET

RPA reset KWP2000: $3B,$05 WriteDataByLocalIdentifier service Mit dem Parameter"E" werden 2 Telegramme gesendet Adjustment_Mode,  und Sequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Reset gesendet

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Diagnose Mode = E oder Nur Sequenz = W |

### _FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus    : Default

_No arguments._

### _COD_SCHREIBEN_DSC

KWP2000 Dieser Job bietet die Moeglichkeit an, das DSC zu Codieren Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Session = E oder Ohne Session = W |

### _COD_SCHREIBEN_ASC

KWP2000 Dieser Job bietet die Moeglichkeit an, das ASC zu Codieren Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Session = E oder Ohne Session = W |

### _COD_SCHREIBEN_ABS

KWP2000 Dieser Job bietet die Moeglichkeit an, das ABS zu Codieren Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Session = E oder Ohne Session = W |

### _COD_SCHREIBEN_VIRG_DSC

KWP2000 Dieser Job bietet die Moeglichkeit an, das DSC zu Codieren Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Session = E oder Ohne Session = W |

### _COD_SCHREIBEN_VIRG_ASC

KWP2000 Dieser Job bietet die Moeglichkeit an, das DSC zu Codieren Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Session = E oder Ohne Session = W |

### _COD_SCHREIBEN_VIRG_ABS

KWP2000 Dieser Job bietet die Moeglichkeit an, das DSC zu Codieren Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Mit Session = E oder Ohne Session = W |

### _COD_LESEN

KWP2000 Dieser Job bietet die Moeglichkeit an, aus dem DSC den Variantencode auszulesen Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |

### _AENDERUNG_COD_RESET

KWP2000 Dieser Job bietet die Möglichkeit, den Änderungsindex der Codierdaten zurückzusetzen

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | mit Diag Session = E oder ohne Session = W |

### _TEL_SCHREIBEN

KWP2000 Dieser Job bietet die Moeglichkeit an, ein eigenes Telegramm zu verschicken Es muessen 2 Argumente eingegeben werden, beide mit "Strich_Punkt" getrennt (nicht mit Komma!): Erstes Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt Zweiter Argument: Die ersten 3 Bytes des Telegramms (Format,Target,Source) sind schon vorhanden die restlichen Bytes als ein Hex_String, alle mit Komma getrennt z.B. 00,11,22,... Keine Laenge eingeben, sie wird automatisch berechnet Musterparametersatz_1: "E,00,11,22,33" Musterparametersatz_2: "W,00,11,22,33" Aufpassen: 2 Argumente (E_OR_W,T_BYTES) mit "Strich_Punkt" getrennt (nicht mit Komma !) nach dem E oder W immer "Strich_Punkt" aber folgende T_Bytes mit Komma getrennt!

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| T_BYTES | string | Bereich: 0-255 bzw. 0x00-0xFF |

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

### VERBAUORTTABELLE

| ORT | ORTTEXT |
| --- | --- |
| 0x0100 | Batteriesensor |
| 0x0200 | Elektrische Wasserpumpe |
| 0x0300 | Generator 1 |
| 0x0350 | Generator 2 |
| 0x0400 | Schaltzentrum Lenksäule |
| 0x0500 | DSC Sensor-Cluster |
| 0x0600 | Nahbereichsradarsensor links |
| 0x0700 | Nahbereichsradarsensor rechts |
| 0x0800 | Funkempfänger |
| 0x0900 | Elektrische Lenksäulenverriegelung |
| 0x0A00 | Regen- Lichtsensor |
| 0xFFFF | unbekannter Verbauort |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

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
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D8C | Raddrehzahlfuehler vorne links offen |
| 0x5D8D | Raddrehzahlfuehler vorne rechts offen |
| 0x5D8E | Raddrehzahlfuehler hinten links offen |
| 0x5D8F | Raddrehzahlfuehler hinten rechts offen |
| 0x5E00 | Raddrehzahlfuehler vorne links kurzgeschlossen |
| 0x5E01 | Raddrehzahlfuehler vorne rechts kurzgeschlossen |
| 0x5E02 | Raddrehzahlfuehler hinten links kurzgeschlossen |
| 0x5E03 | Raddrehzahlfuehler hinten rechts kurzgeschlossen |
| 0x5DEA | Raddrehzahlfuehler vorne links kurzgeschlossen plus |
| 0x5DEB | Raddrehzahlfuehler vorne rechts kurzgeschlossen plus |
| 0x5DEC | Raddrehzahlfuehler hinten links kurzgeschlossen plus |
| 0x5DED | Raddrehzahlfuehler hinten rechts kurzgeschlossen plus |
| 0x5E04 | Raddrehzahlfuehler vorne links ausbleibend |
| 0x5E05 | Raddrehzahlfuehler vorne rechts ausbleibend |
| 0x5E06 | Raddrehzahlfuehler hinten links ausbleibend |
| 0x5E07 | Raddrehzahlfuehler hinten rechts ausbleibend |
| 0x5E08 | Raddrehzahlfuehler vorne links sprunghaft |
| 0x5E09 | Raddrehzahlfuehler vorne rechts sprunghaft |
| 0x5E0A | Raddrehzahlfuehler hinten links sprunghaft |
| 0x5E0B | Raddrehzahlfuehler hinten rechts sprunghaft |
| 0x5E0C | Raddrehzahlfuehler vorne links Aussetzer |
| 0x5E0D | Raddrehzahlfuehler vorne rechts Aussetzer |
| 0x5E0E | Raddrehzahlfuehler hinten links Aussetzer |
| 0x5E0F | Raddrehzahlfuehler hinten rechts Aussetzer |
| 0x5E10 | Raddrehzahlfuehler vorne links Spannungsbereich |
| 0x5E11 | Raddrehzahlfuehler vorne rechts Spannungsbereich |
| 0x5E12 | Raddrehzahlfuehler hinten links Spannungsbereich |
| 0x5E13 | Raddrehzahlfuehler hinten rechts Spannungsbereich |
| 0x5D90 | Uebermaeßige Raddrehzahlfuehler ungueltig |
| 0x5D91 | Fehlanpassung Rad |
| 0x5D92 | Spule Einlass Ventil (ISO) vorne links offen |
| 0x5D93 | Spule Einlass Ventil (ISO) vorne rechts offen |
| 0x5D94 | Spule Einlass Ventil (ISO) hinten links offen |
| 0x5D95 | Spule Einlass Ventil (ISO) hinten rechts offen |
| 0x5D96 | Spule Auslass Ventil (Dump) vorne links offen |
| 0x5D97 | Spule Auslass Ventil (Dump) vorne rechts offen |
| 0x5D98 | Spule Auslass Ventil (Dump) hinten links offen |
| 0x5D99 | Spule Auslass Ventil (Dump) hinten rechts offen |
| 0x5D9A | Spule TC (ISO 1) offen |
| 0x5D9B | Spule TC (ISO 2) offen |
| 0x5D9C | Spule TC (Supply 1) offen |
| 0x5D9D | Spule TC (Supply 2) offen |
| 0x5D9E | Treiber Einlass Ventil (ISO) vorne links kurzgeschlossen |
| 0x5D9F | Treiber Einlass Ventil (ISO) vorne rechts kurzgeschlossen |
| 0x5DA0 | Treiber Einlass Ventil (ISO) hinten links kurzgeschlossen |
| 0x5DA1 | Treiber Einlass Ventil (ISO) hinten rechts kurzgeschlossen |
| 0x5DA2 | Treiber Auslass Ventil (Dump) vorne links kurzgeschlossen |
| 0x5DA3 | Treiber Auslass Ventil (Dump) vorne rechts kurzgeschlossen |
| 0x5DA4 | Treiber Auslass Ventil (Dump) hinten links kurzgeschlossen |
| 0x5DA5 | Treiber Auslass Ventil (Dump) hinten rechts kurzgeschlossen |
| 0x5DA6 | Treiber TC (ISO 1) kurzgeschlossen |
| 0x5DA7 | Treiber TC (ISO 2) kurzgeschlossen |
| 0x5DA8 | Treiber TC (Supply 1) kurzgeschlossen |
| 0x5DA9 | Treiber TC (Supply 2) kurzgeschlossen |
| 0x5E14 | Spule Einlass Ventil (ISO) vorne links kurzgeschlossen |
| 0x5E15 | Spule Einlass Ventil (ISO) vorne rechts kurzgeschlossen |
| 0x5E16 | Spule Einlass Ventil (ISO) hinten links kurzgeschlossen |
| 0x5E17 | Spule Einlass Ventil (ISO) hinten rechts kurzgeschlossen |
| 0x5E18 | Spule Auslass Ventil (Dump) vorne links kurzgeschlossen |
| 0x5E19 | Spule Auslass Ventil (Dump) vorne rechts kurzgeschlossen |
| 0x5E1A | Spule Auslass Ventil (Dump) hinten links kurzgeschlossen |
| 0x5E1B | Spule Auslass Ventil (Dump) hinten rechts kurzgeschlossen |
| 0x5E1C | Spule TC (ISO 1) kurzgeschlossen |
| 0x5E1D | Spule TC (ISO 2) kurzgeschlossen |
| 0x5E1E | Spule TC (Supply 1) kurzgeschlossen |
| 0x5E1F | Spule TC (Supply 2) kurzgeschlossen |
| 0x5E20 | Spule Einlass Ventil (ISO) vorne links Uebertemperatur |
| 0x5E21 | Spule Einlass Ventil (ISO) vorne rechts Uebertemperatur |
| 0x5E22 | Spule Einlass Ventil (ISO) hinten links Uebertemperatur |
| 0x5E23 | Spule Einlass Ventil (ISO) hinten rechts Uebertemperatur |
| 0x5E24 | Spule Auslass Ventil (Dump) vorne links Uebertemperatur |
| 0x5E25 | Spule Auslass Ventil (Dump) vorne rechts Uebertemperatur |
| 0x5E26 | Spule Auslass Ventil (Dump) hinten links Uebertemperatur |
| 0x5E27 | Spule Auslass Ventil (Dump) hinten rechts Uebertemperatur |
| 0x5E28 | Spule TC (ISO 1) Uebertemperatur |
| 0x5E29 | Spule TC (ISO 2) Uebertemperatur |
| 0x5E2A | Spule TC (Supply 1) Uebertemperatur |
| 0x5E2B | Spule TC (Supply 2) Uebertemperatur |
| 0x5DEE | Spule Masse kontaktverlust |
| 0x5DAA | Steuergeraet intern: Power Schalter offen |
| 0x5E2C | Steuergeraet intern: Power Schalter kurzgeschlossen |
| 0x5DAB | Pumpen Motor Treiber oder Versorgung offen |
| 0x5E2D | Pumpen Motor offen |
| 0x5E2E | Pumpen Motor blockiert |
| 0x5DEF | Pumpen Motor Masse kontaktverlust |
| 0x5E57 | Pumpen Motor Diode kurzgeschlossen Fehler |
| 0x5E58 | Pumpen Motor Diode offen Fehler |
| 0x5DB8 | Steuergeraet intern: kontrollierter Shutdown Fehler |
| 0x5DE8 | Steuergeraet intern: EEPROM Fehler |
| 0x5DCC | Steuergeraet intern: BIST Fehler |
| 0x5DCD | Steuergeraet intern: RTOS Fehler |
| 0x5E2F | Steuergeraet intern: Rom Fehler |
| 0x5DCE | Steuergeraet intern: Dynamic Ram Fehler |
| 0x5DCF | Steuergeraet intern: HET Ram Fehler |
| 0x5DE4 | Steuergeraet intern: CAN Ram Fehler |
| 0x5DD0 | Steuergeraet intern: Stack Fehler |
| 0x5DD1 | Steuergeraet intern: Ueberlauf Fehler |
| 0x5DAD | Steuergeraet intern: Ext watchdog Fehler |
| 0x5DD2 | Steuergeraet intern: nicht ausgefuehrter Interrupt |
| 0x5DD3 | Steuergeraet intern: unerwartete Ausnahmen |
| 0x5DD4 | Steuergeraet intern: Spule timeout Fehler |
| 0x5DD5 | Steuergeraet intern: HET periodischer Interrupt Fehler |
| 0x5DD6 | Steuergeraet intern: HET watchdog timeout |
| 0x5DD7 | Steuergeraet intern: HET Programm Fehler |
| 0x5DD8 | Steuergeraet intern: HET Programm overflow |
| 0x5DD9 | Steuergeraet intern: SPI Fehler |
| 0x5DDB | Steuergeraet intern: ROM Fehler Micro2 |
| 0x5DDC | Steuergeraet intern: RAM Fehler Micro2 |
| 0x5DDD | falsche Ventil Aktivierung |
| 0x5DDE | Steuergeraet intern: nicht passende Geschwindigkeitsberechnung |
| 0x5DDF | Steuergeraet intern: Kommunikation Micro2 |
| 0x5DE0 | Steuergeraet intern: Runtime micro2 |
| 0x5DE1 | Steuergeraet intern: Stack Fehler micro2 |
| 0x5DE2 | Kodierung fehlt |
| 0x5DE3 | Kodierung falsch |
| 0x5E30 | Steuergeraet intern: System Spannung uebermaeßig niedrig |
| 0x5E31 | Steuergeraet intern: System Spannung niedrig |
| 0x5E32 | Steuergeraet intern: System Spannung hoch |
| 0x5E33 | Steuergeraet intern: System Spannung uebermaeßig hoch |
| 0x5DB0 | Steuergeraet intern: 5V Versorgungsspannungsfehler |
| 0x5DBD | Steuergeraet intern: IPT 5V Versorgungsspannungsfehler |
| 0x5DBA | Steuergeraet intern: Umgebungstemperatur Spannungsbereichfehler |
| 0x5E54 | Steuergeraet intern: 2. Umgebungstemperatur Spannungsbereichfehler |
| 0x5E55 | Steuergeraet intern: Umgebungstemperatur unplausibel |
| 0x5E59 | Steuergeraet intern: Temperatur Sensor fehlende Kalibrierung |
| 0x5DB1 | Lenkwinkel Sensorfehler Sprung |
| 0x5E34 | Lenkwinkel Sensorfehler offset Fehler |
| 0x5E35 | Lenkwinkel Sensorfehler fehlende Kalibrierung |
| 0x5E36 | Gierraten Sensorfehler offset |
| 0x5E37 | Gierraten Sensorfehler Verstaerkung |
| 0x5E38 | Gierraten Sensorfehler Sprung |
| 0x5E39 | Gierraten Sensorfehler CBIT Fehler |
| 0x5EB2 | Gierraten Sensorfehler fehlende Kalibrierung |
| 0x5E40 | Querbeschleunigung Sensorfehler offset |
| 0x5E41 | Querbeschleunigung Sensorfehler Verstaerkung |
| 0x5E42 | Querbeschleunigung Sensorfehler Sprung |
| 0x5E43 | Querbeschleunigung Sensorfehler CBIT |
| 0x5DB3 | Querbeschleunigung Sensorfehler fehlende Kalibrierung |
| 0x5E44 | Laengsbeschleunigung Sensorfehler offset |
| 0x5E45 | Laengsbeschleunigung Sensorfehler Verstaerkung |
| 0x5E46 | Laengsbeschleunigung Sensorfehler Sprung |
| 0x5E47 | Laengsbeschleunigung Sensorfehler CBIT |
| 0x5DB4 | Laengsbeschleunigung Sensorfehler fehlende Kalibrierung |
| 0x5E48 | Drucksensor kurzgeschlossen plus |
| 0x5E49 | Drucksensor offen oder kurzgeschlossen gegen Masse |
| 0x5E4A | Drucksensor sprunghaft |
| 0x5E4B | Drucksensor Sensorfehler offset |
| 0x5E4C | Drucksensor Sensorfehler Verstaerkung |
| 0x5E4D | Drucksensor Sensorfehler Sprung |
| 0x5DB5 | Drucksensor Sensorfehler fehlende Kalibrierung |
| 0x5DB6 | Ueberhoehter Initialisierung Zeitfehler |
| 0x5DAE | Basisbremse Fehler |
| 0x5E4E | Bremsfluessigkeit unplausibel |
| 0x5DB7 | Bremspedalfehler Korrelation |
| 0x5E56 | Bremspedalfehler Hardware unplausibel |
| 0x5E4F | Bremspedalfehler |
| 0x5E50 | Bremspedalfehler immer aktiv |
| 0x5E51 | Bremspedalfehler nie aktiv |
| 0x5DBE | Kupplungpedal Zuordnungsfehler |
| 0x5DBF | Rueckwaertsgang Zuordnungsfehler |
| 0x5DE9 | DSC Schalter unplausibel |
| 0x5DBB | Wakeup Leitung |
| 0x5DE7 | DFA SIM offen |
| 0x5E52 | DFA SIM kurzgeschlossen |
| 0x5E5A | Bremsbelag vorne Setzfehler |
| 0x5E5B | Bremsbelag vorne Setzfehler |
| 0x5DE5 | Bremsbelag vorne unplausibel |
| 0x5DE6 | Bremsbelag hinten unplausibel |
| 0x5E5C | Bremsbelag vorne verschlissen |
| 0x5E5D | Bremsbelag vorne verschlissen |
| 0x5DF0 | Sensor cluster Spannung niedrig |
| 0x5E53 | Sensor cluster Spannung hoch |
| 0x5DF1 | Sensor cluster intern Fehler |
| 0x5DF2 | Sensor cluster sync Fehler |
| 0x5DF3 | Interface DME DDE ungueltig |
| 0x5DF4 | Interface CAS ungueltig |
| 0x5DF5 | Interface SPEG ungueltig |
| 0x5DF7 | Interface Kombi ungueltig |
| 0x5DF8 | Interface EGS ungueltig |
| 0x5DF9 | Interface CCC GW ungueltig |
| 0x5DFA | Interface FRFMA ungueltig |
| 0x5DFB | Interface SZL LWS ungueltig |
| 0x5DFC | Interface SC VDA ungueltig |
| 0xD347 | CAN BUS OFF PT-CAN |
| 0xD34B | CAN BUS OFF F-CAN |
| 0xD355 | CAN BUS offen PT CAN |
| 0xD357 | CAN BUS offen F CAN |
| 0xD358 | CAN Botschaft: PT_CAN_GANG_RUECK ID:0x3B0 |
| 0xD359 | CAN Botschaft: PT_CAN_BEDIEN_FW ID:0x398 |
| 0xD35B | CAN Botschaft: PT_CAN_FAHRGESTNR ID:0x380 |
| 0xD35C | CAN Botschaft: PT_CAN_STAT_CT_HABR ID:0x34F |
| 0xD35D | CAN Botschaft: PT_CAN_KLEMMENSTAT ID:0x130 |
| 0xD35E | CAN Botschaft: PT_CAN_KILOMETERST ID:0x330 |
| 0xD35F | CAN Botschaft: PT_CAN_BEDIEN_RDC ID:0x319 |
| 0xD360 | CAN Botschaft: PT_CAN_TEMP_ZEIT ID:0x310 |
| 0xD362 | CAN Botschaft: PT_CAN_BEDIEN_DSC ID:0x316 |
| 0xD363 | CAN Botschaft: PT_CAN_BREMSBELAG ID:0x30C |
| 0xD364 | CAN Botschaft: PT_CAN_GETRIEBEDAT ID:0x0BA |
| 0xD365 | CAN Botschaft: PT_CAN_TORQUE_1 ID:0x0A8 |
| 0xD366 | CAN Botschaft: PT_CAN_TORQUE_2 ID:0x0A9 |
| 0xD367 | CAN Botschaft: PT_CAN_TORQUE_3 ID:0x0AA |
| 0xD370 | CAN Botschaft: PT_CAN  RQ_KOMBI ID:0x5E0 |
| 0xD36A | CAN Botschaft: F_CAN_CLU_1 ID:0x0D8 |
| 0xD36B | CAN Botschaft: F_CAN_CLU_2 ID:0x0E3 |
| 0xD36C | CAN Botschaft: F_CAN_CLU_STATUS ID:0x165 |
| 0xD36D | CAN Botschaft: F_CAN_SWA ID:0x0C9 |
| 0x5DBC | unzulaessiger Zustand |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | DIGITAL | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | high | unsigned int | - | 1 | 100 | 0 |
| 0x02 | ABS | 0/1 | high | 0x0100 | - | 1 | 1 | 0 |
| 0x03 | ASC | 0/1 | high | 0x0200 | - | 1 | 1 | 0 |
| 0x04 | DSC | 0/1 | high | 0x0400 | - | 1 | 1 | 0 |
| 0x05 | EBV | 0/1 | high | 0x0800 | - | 1 | 1 | 0 |
| 0x06 | DBC | 0/1 | high | 0x1000 | - | 1 | 1 | 0 |
| 0x07 | ABS-Lampe | 0/1 | high | 0x0001 | - | 1 | 1 | 0 |
| 0x08 | ASC/DSC-Lampe | 0/1 | high | 0x0002 | - | 1 | 1 | 0 |
| 0x09 | Bremsen-Warn-Lampe | 0/1 | high | 0x0004 | - | 1 | 1 | 0 |
| 0x0A | RPA-Warnlampe | 0/1 | high | 0x0008 | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0xD347 | 0xFFFF | 0x1004 | 0xFFFF | 0xFFFF |
| 0xD34B | 0xFFFF | 0x1004 | 0xFFFF | 0xFFFF |
| 0xD354 | 0xFFFF | 0x1004 | 0xFFFF | 0xFFFF |
| 0xD355 | 0xFFFF | 0x1004 | 0xFFFF | 0xFFFF |
| 0xD356 | 0xFFFF | 0x1004 | 0xFFFF | 0xFFFF |
| 0xD357 | 0xFFFF | 0x1004 | 0xFFFF | 0xFFFF |
| 0xD358 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD359 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD35A | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD35B | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD35C | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD35D | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD35E | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD35F | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD360 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD362 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD363 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD364 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD365 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD366 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD367 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD369 | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD36E | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD36F | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD36A | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD36B | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD36C | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0xD36D | 0x0008 | 0x0004 | 0x0002 | 0xFFFF |
| 0x5DAB | 0xFFFF | 0xFFFF | 0x3002 | 0xFFFF |
| 0x5E2D | 0xFFFF | 0xFFFF | 0xFFFF | 0x3001 |
| 0x5E2E | 0x3008 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5DEF | 0xFFFF | 0xFFFF | 0x3002 | 0xFFFF |
| 0x5D8C | 0x2008 | 0x2004 | 0x2002 | 0x2001 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0002 | Fehler Alive Zaehler |
| 0x0004 | Timeout |
| 0x0008 | Fehler Checksumme |
| 0x1004 | Bus Off |
| 0x2001 | Kurzschluss gegen +UB |
| 0x2002 | Kurzschluss gegen Masse oder Sensorleitung offen |
| 0x2004 | kein Signal oder Wert |
| 0x2008 | unplausibles Signal |
| 0x3001 | Kurzschluss gegen +UB oder Motor offen |
| 0x3002 | Keine Spannung |
| 0x3008 | Keine Spannung oder Motor blockiert |
| 0x0000 | kein passendes Fehlersymptom |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| AVVL | 0 | 0x01 |
| EVVL | 0 | 0x02 |
| AVVR | 0 | 0x04 |
| EVVR | 0 | 0x08 |
| AVHL | 0 | 0x10 |
| EVHL | 0 | 0x20 |
| AVHR | 0 | 0x40 |
| EVHR | 0 | 0x80 |
| S_VLHR | 1 | 0x01 |
| S_VRHL | 1 | 0x02 |
| T_VLHR | 1 | 0x04 |
| T_VRHL | 1 | 0x08 |
| PUMPE | 1 | 0x80 |
| XYZ | 9 | 0x00 |
