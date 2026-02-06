# MEV9N46L.prg

## General

|  |  |
| --- | --- |
| File | MEV9N46L.prg |
| Type | PRG |
| Jobs | 236 |
| Tables | 43 |
| Origin | BMW EA-53 Rigl |
| Revision | 3.001 |
| Author | EA-53 EA-53 S.Rigl |
| ECU Comment | SGBD fuer N46-Layer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MEV9 fuer N46-Motoren  |  |  |
| ORIGIN | string | BMW EA-53 Rigl |  |  |
| REVISION | string | 3.001 |  |  |
| AUTHOR | string | EA-53 EA-53 S.Rigl |  |  |
| COMMENT | string | SGBD fuer N46-Layer  |  |  |
| PACKAGE | string | 1.26 |  |  |
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

### DATA_ID_LESEN

Data-ID des SG auslesen

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
| TASTRATE | int | zwischen 10 und 95 % Ansteuerverhaeltins |

### STEUERN_E_LUEFTER_AUS

Stellgliedansteuerung E-Luefter

_No arguments._

### STEUERN_SLP

Stellgliedansteuerung SLP

_No arguments._

### STEUERN_SLP_AUS

Stellgliedansteuerung SLP

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

### STEUERN_SLV

Stellgliedansteuerung SLV

_No arguments._

### STEUERN_SLV_AUS

Stellgliedansteuerung SLV

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

### STEUERN_STA

Stellgliedansteuerung Startrelais

_No arguments._

### STEUERN_STA_AUS

Stellgliedansteuerung Startrelais aus

_No arguments._

### STEUERN_KOE

Stellgliedansteuerung KOREL

_No arguments._

### STEUERN_KOE_AUS

Stellgliedansteuerung KOREL aus

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

### RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | long | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### RAM_BACKUP

Loeschen der RAM-Backup-Werte

_No arguments._

### START_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | gesetzter LL-Sollwert |

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

Ende Systemtest DM-TL

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STATUS_MESSWERTE

Auslesen von Messwerten

_No arguments._

### STATUS_BATTERIEINTEGRATOR

Auslesen von Messwertenund Statusflags

_No arguments._

### STATUS_SCHALTERSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_FUNKTIONSSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_LAUFUNRUHE

Auslesen von Laufunruhewerten

_No arguments._

### STATUS_DKHFM

Auslesen von DK/HFM-Abgleichswerten

_No arguments._

### STATUS_SAUGROHR

Auslesen von EISY-Größen

_No arguments._

### FS_LESEN_LANG

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers uebergeben |

### STEUERN_VVT

Stellgliedansteuerung VVT

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt einen absoluten Verstellwinkel an (0..180 Grd) |
| RAMPE | int | eine definierte Rampe wird automatisch abgefahren (VS-21 Funktion) |

### STEUERN_VVT_AUS

beenden Stellgliedansteuerung VVT

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

### STATUS_VARIANTE

Auslesen der Variante

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

Faktor KVA Korrektur vorgeben

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Faktor KVA |

### STATUS_READINESS

Auslesen des Readinessbyte

_No arguments._

### STATUS_FGR

Auslesen des FGR-Statuses

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

### IDENT_AIF

Identdaten mit KWP2000: $1A ReadECUIdentification Modus  : Default Auslesen des Anwender Informations Feldes mit KWP 2000: $23 ReadMemoryByAddress Standard Flashjob Modus   : Default

_No arguments._

### STATUS_VVT

Auslesen VVT-Messwerte

_No arguments._

### STATUS_DIFFERENZDRUCKSENSOR

Werte des Differenzdrucksensors im Ansaugluftsystem

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

### STATUS_ADC

Auslesen ADC-Werte

_No arguments._

### STEUERN_LL_ERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | gesetzter LL-Sollwert |

### START_SYSTEMCHECK_LSU

Systemdiagnose LSU starten

_No arguments._

### STATUS_SYSTEMCHECK_LSU

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

### STOP_SYSTEMCHECK_KAT

Ende Systemdiagnose KAT

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

### STEUERN_ZWANG_RAMBACKUP

Zwangssichern der RAM-Backup-Werte

_No arguments._

### STEUERN_POWER_DOWN

Anforderung Power Down Mode

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

### START_SYSTEMCHECK_SEK_LUFT

Systemdiagnose SLS

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LUFT

Status Systemdiagnose SLS

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

Ende Systemdiagnose SLS

_No arguments._

### STEUERN_ADAPTIONEN_LOESCHEN

Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | siehe LH 1 430 227, setzt REYO_01 bitweise |
| AUSWAHLBYTE_2 | int | siehe LH 1 430 227, setzt REYO_02 bitweise |

### STEUERN_ADAPTIONEN_LOESCHEN_NEU

Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | siehe LH 1 430 227, setzt REYO_01 bitweise |
| AUSWAHLBYTE_2 | int | siehe LH 1 430 227, setzt REYO_02 bitweise |
| AUSWAHLBYTE_3 | int | setzt REYO_03 bitweise |

### STATUS_MINHUB

Auslesen des VVT-Minhubes

_No arguments._

### STEUERN_MINHUB

Vorgeben des VVT-Minhubes

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | Vorsteuerwert minhubvs_w in tausendstel Milimeter |

### STEUERN_MINHUB_PROGRAMM

Programmieren des VVT-Minhubes

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | zu programmierender Wert minhubvs_w in tausendstel Milimeter |

### STATUS_BANKABGLEICH

Auslesen des VVT-Bankabgleiches

_No arguments._

### STEUERN_BANKABGLEICH_PROGRAMM

Programmieren des VVT-Minhubes

| Name | Type | Description |
| --- | --- | --- |
| OFWTSTBER | int | Offsetbereich, momentan nur ein Dummy |
| OFWNKTEST | int | Verstellung Bankabgleich (folg. Werte zulaessig: -50,...,50 in 10-er Schritten) |

### STATUS_BETRIEBSSTUNDENZAEHLER

Status Betriebsstundenzaehler auslesen

_No arguments._

### STATUS_SYSTEMCHECK_KAT

Status Systemtest KAT

_No arguments._

### EWS_STARTWERT

EWS-Startwertinitialisierung

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

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

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Auslesen des Pedalwertgebers

_No arguments._

### WECHSELCODE_SYNC_DME

EWS zuruecksetzen

_No arguments._

### TESTER

Ausfuehren eines Telegramms mit Uebergabe nur der Daten 

| Name | Type | Description |
| --- | --- | --- |
| REQUEST | binary | Daten ohne Header  |

### STATUS_OELSENSOR

Temperatur, Niveau, Permitivitaet

_No arguments._

### IDENT_GENERATOR

_No description._

_No arguments._

### START_SYSTEMCHECK_LSHV

_No description._

_No arguments._

### STOP_SYSTEMCHECK_LSHV

_No description._

_No arguments._

### STATUS_SYSTEMCHECK_LSHV

_No description._

_No arguments._

### STEUERN_EKP_SPERREN

_No description._

_No arguments._

### STEUERN_EKP_SPERREN_AUS

_No description._

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
| 0xFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
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
| 0x03 | Speicher geloescht |
| 0x04 | nicht benutzt |
| 0x05 | Signaturpruefung PAF nicht durchgefuehrt |
| 0x06 | Signaturpruefung DAF nicht durchgefuehrt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vorhanden oder nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vorhanden oder nicht vollstaendig |
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
| 0x14 | Ueb | Uebergabedurchsicht |
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
| 0x29CC | CDKMD - Aussetzererkennung Summenfehler |
| 0x29CD | CDKMD00 - Aussetzererkennung Zylinder 1 in 1.Zuendreihenfolge |
| 0x29CE | CDKMD03 - Aussetzererkennung Zylinder 2 in 4.Zuendreihenfolge |
| 0x29CF | CDKMD01 - Aussetzererkennung Zylinder 3 in 2.Zuendreihenfolge |
| 0x29D0 | CDKMD02 - Aussetzererkennung Zylinder 4 in 3.Zuendreihenfolge |
| 0x29D9 | CDKCPFLL - Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DD | CDKSWE - Schlechtwegstreckenerkennung |
| 0x29E5 | CDKFRAO - LR-Adaption multiplikativ Bereich2 (Bank1) |
| 0x29E6 | CDKFRAO2 - LR-Adaption multiplikativ Bereich2 (Bank2) |
| 0x29E7 | CDKRKAT - LR-Adaption additiv pro Zeit (Bank1) |
| 0x29E8 | CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x29E9 | CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x29EA | CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x29EB | CDKFRST - LR-Abweichung |
| 0x29EC | CDKFRST2 - LR-Abweichung Bank2 |
| 0x29ED | CDKFRAU - LR-Adaption multiplikativ Bereich1 (Bank1) |
| 0x29EE | CDKFRAU2 - LR-Adaption multiplikativ Bereich1 (Bank2) |
| 0x29F4 | CDKKAT - Katalysator-Konvertierung |
| 0x29F5 | CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x29F8 | CDKKATSP - Katalysator-Konvertierung LSU |
| 0x29F9 | CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x29FE | CDKSLS - Sekundaerluftsystem |
| 0x29FF | CDKSLS2 - Sekundaerluftsystem (Bank2) |
| 0x2A01 | CDKSLV - Sekundaerluftventil |
| 0x2A02 | CDKSLVE - Ansteuerung Sekundaerluftventil |
| 0x2A03 | CDKSLPE - Sekundaerluftpumperelais |
| 0x2A05 | CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2A0E | CDKAGRF - AGR Ventil |
| 0x2A14 | CDKDMTK - DM-TL Feinleck |
| 0x2A17 | CDKDMTL - DM-TL Modul |
| 0x2A19 | CDKTEVE - Tankentlueftungsventil |
| 0x2A1A | CDKTES - Tankentlueftung functional check |
| 0x2A1D | CDKTESK - Tankleckueberwachung |
| 0x2A1E | CDKLDP - Leckdiagnosepumpe |
| 0x2A58 | CDKVVTE - VVT-Enable Ansteuerung |
| 0x2A59 | CDKDVFFS - VVT-Fuehrungssensor |
| 0x2A5B | CDKDVFRS - VVT-Referenzsensor |
| 0x2A5D | CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x2A5F | CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x2A61 | CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x2A63 | CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x2A67 | CDKDVEST - VVT-Ansteuerung |
| 0x2A69 | CDKDVULV - VVT-Leistungsversorgung |
| 0x2A6B | CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2A6C | CDKDVALRN - VVT-Anschlaege lernen notwendig |
| 0x2A6D | CDKDVOVL - VVT-Systemueberlast |
| 0x2A6F | CDKMINHUB - Minhubadaption Anschlag mehrfach |
| 0x2A70 | CDKDIVVT - Fehler Stromplausibilisierung |
| 0x2A71 | CDKVVTRE - Endstufendiagnose Entlastungsrelais VVT |
| 0x2A72 | CDKVVTLRU - Stellgliedüberwachung VVT Hubverstellung |
| 0x2A80 | CDKENWSE - Einlass-VANOS |
| 0x2A83 | CDKENWS - Nockenwellensteuerung- Einlass |
| 0x2A85 | CDKANWSE - Auslass-VANOS |
| 0x2A88 | CDKANWS - Nockenwellensteuerung Auslass |
| 0x2B5C | CDKN - Kurbelwellengeber |
| 0x2B5D | CDKBM - Bezugsmarkengeber |
| 0x2B61 | CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x2B62 | CDKPH - Nockenwellengeber Einlass |
| 0x2B63 | CDKPH2 - Nockenwellengeber Auslass |
| 0x2B66 | CDKPHM - Master Nockenwellengeber |
| 0x2B70 | CDKSUE - DISA |
| 0x2B80 | CDKLLR - Leerlaufregelung |
| 0x2B8A | CDKKRNT - Klopfregelung Nulltest |
| 0x2B8B | CDKKROF - Klopfregelung Offset |
| 0x2B8C | CDKKRTP - Klopfregelung Testimpuls |
| 0x2B98 | CDKNVRMON - Plausibilitaetsueberwachung RAM-Backup |
| 0x2B99 | CDKNVRBUP - RAM Backup |
| 0x2B9A | CDKURRAM - SG Selbsttest RAM |
| 0x2B9B | CDKURROM - SG Selbsttest ROM |
| 0x2B9C | CDKURRST - SG Selbsttest RESET |
| 0x2B9D | CDKWDA - Ueberspanungserkennung auf VCC |
| 0x2BA7 | CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x2BB6 | CDKUBR - Überwachung Hauptrelais |
| 0x2B9E | CDKFETRWE - Energiesparmode aktiv |
| 0x2C24 | CDKLSVV - Vertauschte Lambdasonden |
| 0x2C45 | CDKLSV - Lambda-Sonde vor Kat |
| 0x2C46 | CDKLSV2 - Lambda-Sonde vor Kat(Bank2) |
| 0x2C55 | CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x2C56 | CDKLATV - Lambda-Sondenalterung TV |
| 0x2C6A | CDKLSHV - Vertauschte Lambdasonden hinter Kat |
| 0x2C6D | CDKLASH - Lambda-Sondenalterung hinter Kat (BAnk1) |
| 0x2C6E | CDKLASH2 - Lambda-Sondenalterung hinter Kat (Bank2) |
| 0x2C6F | CDKLAVH - Lambdasondenalterung hinter Kat (VL- Prüfung) |
| 0x2C70 | CDKLAVH2 - Lambdasondenalterung hinter Kat Bank2 |
| 0x2C71 | CDKLSH - Lambda-Sonde hinter Kat |
| 0x2C72 | CDKLSH2 - Lambda-Sonde hinter Kat (Bank2) |
| 0x2C9C | CDKHSVE - Endstufe Heizung Sonde vor Katalysator |
| 0x2C9D | CDKHSVE2 - Endstufe Heizung Sonde vor Katalysator Bank2 |
| 0x2C9E | CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x2C9F | CDKHSHE2 - Ansteuerung Heizung Sonde hinter Kat (Bank2) |
| 0x2CA0 | CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x2CA1 | CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2CA2 | CDKHSVSA - Heizung Lambdasonde vor Kat (Schubspannung) |
| 0x2CA3 | CDKHSVSA2 - Heizung Lambdasonde vor Kat (Schubspannung) Bank2 |
| 0x2CA8 | CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x2CA9 | CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2CEF | CDKDVEE - DK-Steller |
| 0x2CF0 | CDKDVER - DK-Steller Regelbereich |
| 0x2CF1 | CDKDVEL - DK Positionsueberwachung |
| 0x2CF8 | CDKDK - DK-Potentiometer |
| 0x2CF9 | CDKDK1P - Drosselklappenpoti 1 |
| 0x2CFA | CDKDK2P - Drosselklappenpoti 2 |
| 0x2CFF | CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2D00 | CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2D01 | CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x2D02 | CDKDVEN - Pruefung Notluftpunkt |
| 0x2D03 | CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x2D04 | CDKDVEU - Drosselklappen- Adaption |
| 0x2D05 | CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x2D08 | CDKDVET - Tauscherkennung ohne Adaption |
| 0x2D10 | CDKHFMPL - Plausibilisierung HFM |
| 0x2D11 | CDKMSLAM - Plausibilisierung, Massenstrom Lambdasonde |
| 0x2D12 | CDKMSLAM2 - Plausibilisierung, Massenstrom Lambdasonde Bank2 |
| 0x2D0F | CDKLM - Heissfilmluftmassenmesser |
| 0x2D19 | CDKBWF  - PWG-Bewegung |
| 0x2D1A | CDKFPP - Pedalwertgeber |
| 0x2D1B | CDKFP1P - Pedalwertgeber Poti1 |
| 0x2D1C | CDKFP2P - Pedalwertgeber Poti2 |
| 0x2D28 | CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x2D29 | CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x2D32 | CDKDPSRPL - Plausibilitaet Drucksensor Saugrohr |
| 0x2D6E | CDKUFMV - Momentenueberwachung Ebene 2 |
| 0x2D6F | CDKUFRLIP - Lastsensorueberwachung |
| 0x2D70 | CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2D71 | CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2D72 | CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2D73 | CDKUFPR - Kraftstoffdrucksensor |
| 0x2D74 | CDKUFRKC - Funktionsüberwachung: Lambda-Plausibilisierung |
| 0x2D75 | CDKUFNC - Motordrehzahlueberwachung |
| 0x2D76 | CDKUFSPSC - Pedalwertgeberueberwachung (Ebene2) |
| 0x2D78 | CDKUFMSAC - Ueberwachung Luftmassenstromabgleich |
| 0x2DB4 | CDKMFL - Schnittstelle MFL |
| 0x2DBF | CDKCACC  - CAN ACC Signalfehler |
| 0x2DCA | CDKCEGS - CAN Timeout Getriebesteuergeraet |
| 0x2DCB | CDKCSSG - CAN SSG Signalfehler |
| 0x2DCF | CDKCINS  - CAN- Timeout Instrumentenkombination |
| 0x2DD7 | CDKCDSC - CAN Timeout DSG SG |
| 0x2DD8 | CDKCAFS - Active Front Steering Moment |
| 0x2DD9 | CDKCARS  - CAN ARS Signalfehler |
| 0x2DDA | CDKCCAS  - CAN CAS Signalfehler |
| 0x2DDB | CDKCIHKA  - CAN IHKA Signalfehler |
| 0x2DDC | CDKCSZL  - CAN  SZL Signalfehler |
| 0x2DDD | CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x2DEB | CDKPMBN - Powermanagement Bordnetz |
| 0x2DEC | CDKPMBAT - Powermanagement Batterie |
| 0x2DED | CDKPMRUHV - Powermanagement Ruhestromverletzung |
| 0x2E24 | CDKDZKU0 - Zuendspule Zylinder 1 in 1.Zuendreihenfolge |
| 0x2E25 | CDKDZKU3 - Zuendspule Zylinder 2 in 4.Zuendreihenfolge |
| 0x2E26 | CDKDZKU1 - Zuendspule Zylinder 3 in 2.Zuendreihenfolge |
| 0x2E27 | CDKDZKU2 - Zuendspule Zylinder 4 in 3.Zuendreihenfolge |
| 0x2E30 | CDKEV1 - Einspritzventil Zylinder 1 in 1. Zylinderreihenfolge |
| 0x2E31 | CDKEV4 - Einspritzventil Zylinder 2 in 4. Zylinderreihenfolge |
| 0x2E32 | CDKEV2 - Einspritzventil Zylinder 3 in 2. Zylinderreihenfolge |
| 0x2E33 | CDKEV3 - Einspritzventil Zylinder 4 in 3. Zylinderreihenfolge |
| 0x2E68 | CDKKS1 - Klopfsensor1 |
| 0x2E69 | CDKKS2 - Klopfsensor2 (Bank1) |
| 0x2E6A | CDKKS3 - Klopfsensor3 |
| 0x2E6B | CDKKS4 - Klopfsensor4 |
| 0x2E7C | CDKBSD - BSD-Leitungsfehler |
| 0x2E86 | CDKEWAPU - Elektrische Wasserpumpe |
| 0x2E8B | CDKIBSK - IBS Kommunikation |
| 0x2E8C | CDKIBSP - IBS Eigendiagnose 1 |
| 0x2E8D | CDKIBSA - IBS Eigendiagnose 2 |
| 0x2E95 | CDKDGENBS - Generatorkommunikation |
| 0x2E97 | CDKDGEN/CDKGEN - BSD Generator |
| 0x2E9F | CDKOEZS - Fehler Oelqualitaetssensor |
| 0x2EA0 | CDKQLT - Oelzustandssensor |
| 0x2EB8 | CDKBSDD0 - BSD-Botschaft vom IBS fehlt |
| 0x2EBC | CDKBSDD4 - BSD-Botschaft vom Ölzustandssensor fehlt |
| 0x2EBD | CDKBSDD5 - BSD-Botschaft vom Generator fehlt |
| 0x2EBE | CDKBSDD6-BSD-Botschaft vom Generator fehlt |
| 0x2EE0 | CDKTM - Temperaturfuehler Motorkuehlmittel |
| 0x2EEA | CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x2EF4 | CDKTHS - Thermostat Kennfeldkühlung, mechanisch |
| 0x2EF5 | CDKETS - Thermostat Kennfeldkühlung, Ansteuerung |
| 0x2EF6 | CDKKFT - Kennfeldthermostat |
| 0x2EFE | CDKMLE - Motorluefter |
| 0x2F08 | CDKTA - Ansauglufttemperatur |
| 0x2F12 | CDKKOSE - Klimakompressorsteuerung |
| 0x2F17 | CDKMTOEL - Zwangsschaltung EGS |
| 0x2F21 | CDKWMKD - Motorsteuerung, Leistungsreduktion |
| 0x2F44 | CDKWFS - EWS3.3 Manipulationsschutz |
| 0x2F45 | CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x2F46 | CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x2F4E | CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x2F50 | CDKVAT - Geschwindigkeitsanzeige im Kombi Fehlerhaft  |
| 0x2F58 | CDKSTAE - Startautomatik Ansteuerung |
| 0x2F59 | CDKSTS - Startautomatik Eingang |
| 0x2F5A | CDKSTA - Startautomatik |
| 0x2F62 | CDKBREMS - Schalter Bremse |
| 0x2F67 | CDKKUPPL - Schalter Kupplung |
| 0x2F6C | CDKAKRE - Ansteuerung Abgasklappe |
| 0x2F71 | CDKELS - E-Box Luefter |
| 0x2F76 | CDKDSU - Drucksensor Umgebung |
| 0x2F7B | CDKPOELS - Oeldruckschalter |
| 0x2F80 | CDKCUHR - Fehler CAN / relativer Zeitgeber |
| 0x2F85 | CDKTSG - DME- Temperatur |
| 0x2F8A | CDKUB - Batteriespannung |
| 0x2F94 | CDKKPE - Kraftstoffpumpen-Relais |
| 0x2F99 | CDKTUM - Umgebungstemperatur |
| 0x2F9E | CDKTOENS - Thermischer Oelniveausensor |
| 0x2FA3 | CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0xCD87 | CDKCANA - PT - CAN Bus Off |
| 0xCD8B | CDKCANB - Local CAN Bus Off |
| 0xCD9B | CDKX315 - Status Fahrzeugmodus |
| 0xCDA1 | CDKXC4 - Lenkradwinkel |
| 0xCDA2 | CDKX3B4 - Powermanagement Batteriespannung |
| 0xCDA3 | CDKX334 - Powermanagement Ladespannung |
| 0xCDA7 | CDKX3B0 - Status Gang Rückwärts |
| 0xCDAA | CDKX135 - Steuerung Crashabschaltung EKP |
| 0xCDAC | CDKX3B5 - Status Wasserventil |
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
| 0x29CC | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x29CD | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x29CE | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x29CF | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x29D0 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x29D9 | 0x0A | 0x12 | 0x3C | 0x1A |
| 0x29DD | 0x0A | 0x1A | 0x0B | 0x8C |
| 0x29E5 | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x29E6 | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x29E7 | 0x0A | 0x1A | 0x3C | 0x05 |
| 0x29E8 | 0x0A | 0x1A | 0x3C | 0x07 |
| 0x29E9 | 0x0A | 0x1A | 0x3C | 0x05 |
| 0x29EA | 0x0A | 0x1A | 0x3C | 0x07 |
| 0x29EB | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x29EC | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x29ED | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x29EE | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x29F4 | 0xA3 | 0x1A | 0xBF | 0xB2 |
| 0x29F5 | 0xA4 | 0x1A | 0xC0 | 0xB3 |
| 0x29F8 | 0xA3 | 0x1A | 0xBF | 0xB2 |
| 0x29F9 | 0xA4 | 0x1A | 0xC0 | 0xB3 |
| 0x29FE | 0xCC | 0xCD | 0xCE | 0xCF |
| 0x29FF | 0xD0 | 0xD1 | 0xD2 | 0xD3 |
| 0x2A01 | 0x0A | 0x11 | 0x14 | 0x05 |
| 0x2A02 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2A03 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2A05 | 0x0A | 0x11 | 0x14 | 0x07 |
| 0x2A0E | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2A14 | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x2A17 | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x2A19 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2A1A | 0x0A | 0x1A | 0x24 | 0x35 |
| 0x2A1D | 0x0A | 0x24 | 0x14 | 0x12 |
| 0x2A1E | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x2A58 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2A59 | 0x14 | 0xEF | 0xE8 | 0xE9 |
| 0x2A5B | 0x14 | 0xEF | 0xE8 | 0xE9 |
| 0x2A5D | 0xEA | 0xEE | 0xE8 | 0xE9 |
| 0x2A5F | 0x14 | 0xEF | 0xE8 | 0xE9 |
| 0x2A61 | 0xF0 | 0xF1 | 0xE8 | 0xE6 |
| 0x2A63 | 0x14 | 0xE4 | 0xEB | 0xEC |
| 0x2A67 | 0x14 | 0xF7 | 0xF6 | 0xEE |
| 0x2A69 | 0x14 | 0xF5 | 0xF7 | 0xA5 |
| 0x2A6B | 0x11 | 0xF6 | 0xE8 | 0xE9 |
| 0x2A6C | 0xF0 | 0xF1 | 0xE8 | 0xE6 |
| 0x2A6D | 0x0A | 0xF6 | 0xF2 | 0xF3 |
| 0x2A6F | 0x0A | 0x12 | 0x13 | 0xF8 |
| 0x2A70 | 0xF7 | 0xE4 | 0xE2 | 0xE3 |
| 0x2A71 | 0x14 | 0xF7 | 0xF5 | 0x8C |
| 0x2A72 | 0x14 | 0xEB | 0xEC | 0xF3 |
| 0x2A80 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2A83 | 0x0A | 0x12 | 0x1A | 0x6C |
| 0x2A85 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2A88 | 0x0A | 0x12 | 0x1A | 0x14 |
| 0x2B5C | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2B5D | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2B61 | 0x0A | 0x12 | 0x1A | 0xFF |
| 0x2B62 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2B63 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2B66 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2B70 | 0x0A | 0x12 | 0x13 | 0x23 |
| 0x2B80 | 0x0A | 0x1A | 0x14 | 0x15 |
| 0x2B8A | 0x0A | 0x1A | 0x14 | 0x80 |
| 0x2B8B | 0x0A | 0x1A | 0x14 | 0x81 |
| 0x2B8C | 0x0A | 0x1A | 0x77 | 0x81 |
| 0x2B98 | 0x14 | 0xBE | 0x12 | 0x24 |
| 0x2B99 | 0x0A | 0x14 | 0x12 | 0xFF |
| 0x2B9A | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x2B9B | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x2B9C | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x2B9D | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2BA7 | 0x0A | 0x23 | 0x1A | 0x12 |
| 0x2BB6 | 0x0A | 0x14 | 0x24 | 0x12 |
| 0x2B9E | 0x0A | 0x14 | 0x24 | 0x12 |
| 0x2C24 | 0x12 | 0x8C | 0x06 | 0x08 |
| 0x2C45 | 0xA1 | 0xA8 | 0x29 | 0x17 |
| 0x2C46 | 0xA2 | 0xA9 | 0x2A | 0x19 |
| 0x2C55 | 0x0A | 0x29 | 0x31 | 0x36 |
| 0x2C56 | 0x0A | 0x29 | 0x31 | 0x36 |
| 0x2C6A | 0xB2 | 0xB3 | 0x17 | 0x19 |
| 0x2C6D | 0x0A | 0x2B | 0x33 | 0x17 |
| 0x2C6E | 0x0A | 0x2C | 0x34 | 0x19 |
| 0x2C6F | 0x82 | 0xB2 | 0x2B | 0x17 |
| 0x2C70 | 0x83 | 0xB3 | 0x2C | 0x19 |
| 0x2C71 | 0x2B | 0x8C | 0x33 | 0x17 |
| 0x2C72 | 0x2C | 0x8C | 0x34 | 0x19 |
| 0x2C9C | 0x14 | 0x2D | 0x29 | 0xA8 |
| 0x2C9D | 0x14 | 0x2E | 0x2A | 0xA9 |
| 0x2C9E | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2C9F | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2CA0 | 0x2D | 0x8C | 0x14 | 0x0B |
| 0x2CA1 | 0x2E | 0x8C | 0x14 | 0x0B |
| 0x2CA2 | 0x2D | 0xA8 | 0x29 | 0x0B |
| 0x2CA3 | 0x2E | 0xA9 | 0x2A | 0x0B |
| 0x2CA8 | 0x78 | 0x2F | 0x2B | 0x33 |
| 0x2CA9 | 0x79 | 0x30 | 0x2C | 0x34 |
| 0x2CEF | 0x14 | 0x12 | 0x15 | 0x28 |
| 0x2CF0 | 0x14 | 0x13 | 0x15 | 0x28 |
| 0x2CF1 | 0x14 | 0x13 | 0x15 | 0x28 |
| 0x2CF8 | 0x0A | 0x15 | 0x26 | 0x27 |
| 0x2CF9 | 0x0A | 0x28 | 0x24 | 0x27 |
| 0x2CFA | 0x0A | 0x28 | 0x24 | 0x26 |
| 0x2CFF | 0x14 | 0x13 | 0x26 | 0x65 |
| 0x2D00 | 0x14 | 0x13 | 0x15 | 0x64 |
| 0x2D01 | 0x14 | 0x13 | 0x15 | 0x64 |
| 0x2D02 | 0x14 | 0x13 | 0x64 | 0x76 |
| 0x2D03 | 0x0A | 0x14 | 0x13 | 0x23 |
| 0x2D04 | 0x14 | 0x13 | 0x26 | 0x65 |
| 0x2D05 | 0x0A | 0x14 | 0x13 | 0x23 |
| 0x2D08 | 0x14 | 0x26 | 0x64 | 0x76 |
| 0x2D0F | 0x0A | 0x13 | 0x15 | 0x71 |
| 0x2D10 | 0x14 | 0x11 | 0x15 | 0xEB |
| 0x2D11 | 0x0A | 0x1A | 0x44 | 0x12 |
| 0x2D12 | 0x0A | 0x1A | 0x44 | 0x12 |
| 0x2D19 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x2D1A | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x2D1B | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x2D1C | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x2D28 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2D29 | 0x14 | 0x0A | 0x12 | 0x35 |
| 0x2D32 | 0x0A | 0x1A | 0x46 | 0x09 |
| 0x2D6E | 0x0A | 0x1A | 0x20 | 0x21 |
| 0x2D6F | 0x0A | 0x1A | 0x43 | 0x40 |
| 0x2D70 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2D71 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2D72 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2D73 | 0x0A | 0x1F | 0xFF | 0xFF |
| 0x2D74 | 0x0A | 0x1A | 0xB2 | 0xB3 |
| 0x2D75 | 0x0A | 0x15 | 0x1F | 0x23 |
| 0x2D76 | 0x1B | 0x1C | 0x23 | 0x1F |
| 0x2D78 | 0x46 | 0x47 | 0x44 | 0x45 |
| 0x2DB4 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2DBF | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DCA | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DCB | 0x0B | 0x23 | 0x0A | 0xC9 |
| 0x2DCF | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DD7 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DD8 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DD9 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DDA | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DDB | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DDC | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DDD | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2DEB | 0x0A | 0x14 | 0xDF | 0xBA |
| 0x2DEC | 0xA5 | 0x14 | 0x48 | 0x49 |
| 0x2DED | 0xA5 | 0x4A | 0x4B | 0x4C |
| 0x2E24 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2E25 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2E26 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2E27 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2E30 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x2E31 | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x2E32 | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x2E33 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x2E68 | 0x0A | 0x1A | 0x8D | 0x90 |
| 0x2E69 | 0x0A | 0x1A | 0x8E | 0x8F |
| 0x2E6A | 0x0A | 0x1A | 0x8D | 0x90 |
| 0x2E6B | 0x0A | 0x1A | 0x8E | 0x8F |
| 0x2E7C | 0x4D | 0x4E | 0x14 | 0x0A |
| 0x2E86 | 0x0A | 0x12 | 0x14 | 0x13 |
| 0x2E8B | 0x0A | 0x14 | 0xD4 | 0xD5 |
| 0x2E8C | 0x0A | 0x14 | 0xD4 | 0xD5 |
| 0x2E8D | 0x0A | 0x14 | 0xD4 | 0xD5 |
| 0x2E95 | 0x0A | 0x14 | 0x13 | 0xBB |
| 0x2E97 | 0xF8 | 0x4E | 0x14 | 0x0A |
| 0x2E9F | 0x0A | 0x14 | 0x12 | 0x3C |
| 0x2EA0 | 0xFF | 0x11 | 0xFF | 0xFF |
| 0x2EB8 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2EBC | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2EBD | 0x14 | 0xBA | 0x0A | 0xBB |
| 0x2EBE | 0x14 | 0xBA | 0x0A | 0xBB |
| 0x2EE0 | 0x25 | 0x13 | 0x0A | 0x72 |
| 0x2EEA | 0x0A | 0x12 | 0x24 | 0x74 |
| 0x2EF4 | 0x0A | 0x12 | 0x13 | 0x74 |
| 0x2EF5 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2EF6 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2EFE | 0x0A | 0x12 | 0x14 | 0x6B |
| 0x2F08 | 0x0A | 0x12 | 0x24 | 0x73 |
| 0x2F12 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2F17 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2F21 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2F44 | 0x0A | 0x12 | 0x14 | 0xBE |
| 0x2F45 | 0x0A | 0x12 | 0x14 | 0xBE |
| 0x2F46 | 0x0A | 0x12 | 0x14 | 0xBE |
| 0x2F4E | 0x0A | 0x1A | 0xCB | 0x14 |
| 0x2F50 | 0x0A | 0x1A | 0x70 | 0x14 |
| 0x2F58 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2F59 | 0x0A | 0x03 | 0xFF | 0xFF |
| 0x2F5A | 0xFF | 0x1A | 0xFF | 0xFF |
| 0x2F62 | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x2F67 | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x2F6C | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2F71 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2F76 | 0x0A | 0x0B | 0x24 | 0x75 |
| 0x2F7B | 0x12 | 0x84 | 0x8C | 0xBE |
| 0x2F80 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2F85 | 0x14 | 0x8C | 0x12 | 0x24 |
| 0x2F8A | 0x0A | 0x14 | 0x24 | 0x12 |
| 0x2F94 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2F99 | 0x12 | 0x13 | 0x24 | 0x14 |
| 0x2F9E | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x2FA3 | 0x14 | 0x0A | 0x8C | 0xFF |
| 0xCD87 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCD8B | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCD9B | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCDA1 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCDA2 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCDA3 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCDA7 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCDAA | 0x0A | 0x1A | 0x14 | 0x8C |
| 0xCDAC | 0x0A | 0x1A | 0x14 | 0x8C |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | --- | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x01 | Regelstatus Bank1 (flglrs) | 1 | 0-n | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Regelstatus Bank2 (flglrs2) | 1 | 0-n | unsigned char | - | 1 | 1 | 0 |
| 0x03 | Berechnete Last (rml) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x04 | Motortemperatur  (tmot) | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x05 | Regelfaktor Bank1 (fr_u) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x06 | Adaptionsfaktor Bank1 (fra_u) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x07 | Regelfaktor Bank2 (fr2_u) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x08 | Adaptionsfaktor Bank2 (fra_u2) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x09 | Saugrohrdruck (psdss_u) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0A | Motordrehzahl (nmot) | /min | - | unsigned char | - | 40 | 1 | 0 |
| 0x0B | Fahrzeuggeschwindigkeit (vfzg_u) | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x0C | --- | 1 | - | unsigned char | - | 0 | 1 | 0 |
| 0x0D | --- | 1 | - | unsigned char | - | 0 | 1 | 0 |
| 0x0E | --- | 1 | - | unsigned char | - | 0 | 1 | 0 |
| 0x0F | --- | 1 | - | unsigned char | - | 0 | 1 | 0 |
| 0x10 | --- | 1 | - | unsigned char | - | 0 | 1 | 0 |
| 0x11 | Luftmassenfluss (ml) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0x12 | Motortemperatur (tmot) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x13 | Ansauglufttemperatur (tans) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x14 | Versorgungsspannung (ub) | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x15 | Winkel DK bez. auf DK-Anschl. (wdkba) | % DK | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x16 | Sondenspannung v. Kat Bank1  (usvk) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x17 | Sondenspannung h. Kat Bank1  (ushk) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x18 | Sondenspannung v. Kat Bank2  (usvk2) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x19 | Sondenspannung h. Kat Bank2  (ushk2) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x1A | relative Luftfuellung (rl) | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x1B | Spannung PWG Poti1 (upwg1_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1C | Spannung PWG Poti2 (upwg2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1D | verdoppelte Spannung PWG Poti2 (upwg2d_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1E | skapfad | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x1F | eagspfad | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | mpfad | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Istmoment bei M.-vergleich (mi_duf) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x22 | rstpfad | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | normierter Fahrpedalwinkel (wped) | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x24 | Umgebungstemperatur (tumg) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x25 | Motortemp.-Ersatzwert aus Modell (tmew) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x26 | Spannung DK-Poti1 (udkp1_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x27 | Spannung DK-Poti2 (udkp2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x28 | Sollwert DK bez. auf unteren Anschl.(wdks) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x29 | Abgastemp. v. Kat aus Modell (tabgm) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2A | Abgastemp. v. Kat aus Modell Bank2(tabgm2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2B | Kat-Temperatur aus Modell (tkatm) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2C | Kat-Temperatur aus Modell Bank2(tkatm2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2D | Spannung LS-Heizung v. Kat (uhsv) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2E | Spannung LS-Heizung v. Kat Bank2 (uhsv2) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2F | Spannung LS-Heizung h. Kat (uhsh) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x30 | Spannung LS-Heizung h. Kat Bank2 (uhsh2) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x31 | Innenwiderstand LS v. Kat (rinv) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x32 | Innenwiderstand LS v. Kat Bank2 (rinv2) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x33 | Innenwiderstand LS h. Kat (rinh) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x34 | Innenwiderstand LS h. Kat Bank2 (rinh2) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x35 | Umgebungdruck (pu) | hPa | - | unsigned char | - | 5 | 1 | 0 |
| 0x36 | gef Periodendauer LS v. Kat (tpsvkmf) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x37 | gef Periodendauer LS v. Kat B2 (tpsvkmf2) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x38 | fr | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x39 | fra | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3A | fr2 | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3B | fra2 | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3C | Tankfuellstand (tfst) | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x3D | rl | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x3E | Motortemperatur linear. (tmotlin) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x3F | Motortemp. Referenz aus Modell (tmrm) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x40 | Ist-Moment der Fkt-ueberwachung (mi-um) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x41 | Ist-Gang (gangi) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x42 | zul. ind. Moment vor Filter (mizuvfil) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x43 | ind. Sollmoment vor Begrenzung (mizsolv) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x44 | eisyevfkaf (Massenstromregler-Faktor) | % | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0x45 | eisyevkoff (Massenstromregler-Offset) | % | - | unsigned char | - | 8 | 1 | 0 |
| 0x46 | eisydkfkaf (Druckregler-Faktor) | % | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0x47 | eisydkkoff (Druckregler-Offset) | % | - | unsigned char | - | 8 | 1 | 0 |
| 0x48 | statsvreg1 | % | - | unsigned char | - | 1 | 1 | 0 |
| 0x49 | statsvreg2 | % | - | unsigned char | - | 1 | 1 | 0 |
| 0x4A | t2hstshort | min | - | unsigned char | - | 14.9333333 | 1 | 0 |
| 0x4B | t3hstshort | min | - | unsigned char | - | 14.9333333 | 1 | 0 |
| 0x4C | t4hstshort | min | - | unsigned char | - | 14.9333333 | 1 | 0 |
| 0x4D | dfsiggen | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0x4E | ufgen | % | - | unsigned char | - | 0.1 | 1 | 10.6 |
| 0x64 | Winkel DK in Notluftpunkt (wdknlp) | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x65 | Spannung Dk-Poti1 unt. Anschlag (udkp1a_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x66 | Integratorgradient Offset KR (igokr_u) | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x67 | ADC-Spannung LS v. Kat (uusvk_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x68 | ADC-Spannung LS v. Kat Bank2 (uusvk2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x69 | ADC-Spannung LS h. Kat (uushk_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6A | ADC-Spannung LS h. Kat Bank2 (uushk2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6B | Tastverhaelnis E-Luefter (taml) | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6C | Istwinkel für Nockenwelle 1(wnwi1_u) | Grad KW | - | signed char | - | 1 | 1 | 0 |
| 0x6D | Istwinkel für Nockenwelle 2 (wnwi2_u) | Grad KW | - | signed char | - | 1 | 1 | 0 |
| 0x6E | adapt. Haltetastung NW (tanwrhf_0) | % TV | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6F | adapt. Haltetastung NW Bank2 (tanwrhf_1) | % TV | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x70 | vfzg2 | km/h | - | unsigned char | - | 1.25 | 1 | 0 |
| 0x71 | ADC HFM (adhfm) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x72 | ADC TM  (adtm) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x73 | ADC TA  (adta) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x74 | ADC TKA (adtka) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x75 | ADC DSU (addsu) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x76 | Sollwert DK in NLP-Stellung (wdknlpr) | % DK | - | unsigned char | - | 0.3921 | 1 | 0 |
| 0x77 | Integratorw. KR Testimpuls (ikrmet) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x78 | gef. Kat-Temperatur aus Modell (tkatmf) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x79 | gef. Kat-Temperatur aus Modell B2(tkatmf2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7A | gef. Abgastemperatur aus Modell (tabgmf) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7B | gef Abgastemperatur aus Modell B2(tabgmf2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7C | phlsnv | - | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7D | phlsnv2 | - | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7E | norm. Heizleistung LS h. Kat (phlsnh) | - | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7F | norm. Heizleistung LS h. Kat B2 (phlsnh2) | - | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x80 | Integratorgradient Nulltest KR (igod) | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x81 | Integratorwert KR Messanfang (ikrma) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x82 | Lambda-Sollwert (lamsons) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x83 | Lambda-Sollwert Bank2 (lamsons2) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x84 | Motorstarttemperatur (tmst) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x85 | Mittelwert Lambdaregelfaktor (frm) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x86 | Mittelwert Lambdaregelfaktor Bank2 (frm2) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x87 | Mittelwert Sonde h. Kat (ahkat) | - | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x88 | Mittelwert Sonde h. Kat Bank2(ahkat2) | - | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x89 | I-Anteil verz. Reglerumsch.(tvlrhi) | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8A | I-Anteil verz. Reglerumsch.(tvlrhi2) | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8B | Fakt. Luftdichte TANS Hoehe (frhol_u) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x8C | Zeit nach Start (tnse_u) | s | - | unsigned char | - | 25.6 | 1 | 0 |
| 0x8D | norm. Referenzpegel KR SW-Zyl0 (rkrn_u_0) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x8E | norm. Referenzpegel KR SW-Zyl1 (rkrn_u_1) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x8F | norm. Referenzpegel KR SW-Zyl2 (rkrn_u_2) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x90 | norm. Referenzpegel KR SW-Zyl3 (rkrn_u_3) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x91 | norm. Referenzpegel KR SW-Zyl4 (rkrn_u_4) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x92 | norm. Referenzpegel KR SW-Zyl5 (rkrn_u_5) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x93 | norm. Referenzpegel KR SW-Zyl6 (rkrn_u_6) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x94 | norm. Referenzpegel KR SW-Zyl7 (rkrn_u_7) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x95 | Statusflag ti-Abschaltung (flgtiab) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x96 | Fuellstand Kraftstofftank (fstt) | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x97 | Pumpenstrom Referenzleck (iptref) | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x98 | aktuelle Zeit Leckmessung (tdmlka) | s | - | unsigned char | - | 1.6 | 1 | 0 |
| 0x99 | Pumpenstrom DM-TL Ventilpruefung (iptumv) | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x9A | Differenz Pumpenstrom (iptgh) | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x9D | I-Anteil der stetigen LRHK (dlahi_u) | - | - | signed char | - | 0.000488 | 1 | 0 |
| 0x9E | I-Anteil der stetigen LRHK Bank2(dlahi2_u) | - | - | signed char | - | 0.000488 | 1 | 0 |
| 0x9F | Korrekturfak. LSU-Spannung (kusvk_u) | V | - | signed char | - | 0.004883 | 1 | 0 |
| 0xA0 | Korrekturfak. LSU-Spannung Bank2(kusvk2_u) | V | - | signed char | - | 0.004883 | 1 | 0 |
| 0xA1 | StatusByte LSU unplausibel (lsunpstat) | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xA2 | StatusByte LSU unplausibel B2(lsunpstat2) | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xA3 | Abgasmassenfluss gefiltert (msabg) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA4 | Abgasmassenfluss gefiltert Bank2(msabg2) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA5 | Abstellzeit (tabst_u) | s | - | unsigned char | - | 256 | 1 | 0 |
| 0xA6 | LSU-Spannung vKat korr. (usvkk_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA7 | LSU-Spannung vKat korr. Bank2(usvkk2_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA8 | LSU-Spannung vKat (ADC) (uulsuv_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA9 | LSU-Spannung vKat Bank2 (ADC)(uulsuv2_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xAA | Dynamikwert LSU-Sonde (dynlsu_u) | - | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xAB | Dynamikwert LSU-Sonde Bank2(dynlsu2_u) | - | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xAC | mult. Gemischadapt.fakt. unt.Ber.(frau_u) | - | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0xAD | mult. Gemischadapt.fakt. u.Ber. B2(frau2_u) | - | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0xAE | Regelabweichung Lambda (ladiff_u) | - | - | signed char | - | 0.00195 | 1 | 0 |
| 0xAF | Regelabweichung Lambda Bank2(ladiff2_u) | - | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB0 | Lambdaamplitude nach Filterung (lamsam_u) | - | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB1 | Lambdaamplitude n. Filter. Bank2(lamsam2_u) | - | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB2 | Lambda-Istwert vKat (lamsoni_u) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xB3 | Lambda-Istwert vKat Bank2(lamsoni2_u) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xB4 | Absolutdruck Abgassystem (palsu_u) | hPa | - | unsigned char | - | 10 | 1 | 0 |
| 0xB5 | Absolutdruck Abgassystem Bank2(palsu2_u) | hPa | - | unsigned char | - | 10 | 1 | 0 |
| 0xB6 | gefilt. Abgastemperatur aus Modell (talsuf) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xB7 | gef. Abgastemperatur aus Modell B2(talsuf2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xB8 | gef. LSU-Spannung vKat (uulsuf_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xB9 | gef. LSU-Spannung vKat Bank2 (uulsuf2_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xBA | Generatorspannung (ugen) | V | - | unsigned char | - | 0.1 | 1 | 10.6 |
| 0xBB | vom Generator empf. Lastsignal (dffgen) | % | - | unsigned char | - | 0.39215 | 1 | 0 |
| 0xBC | Generatortemperatur (gentemp) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0xBD | Beladung des Aktivkohlefilters (ftead_u) | - | - | signed char | - | 0.5 | 1 | 0 |
| 0xBE | Betriebsstundenzaehler (top_u) | - | - | unsigned char | - | 1536 | 1 | 0 |
| 0xBF | Abgastemperatur Kat. aus Modell (tikatm) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xC0 | Abgastemperatur Kat. aus Modell B2(tikatm2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xC1 | Lambdasondenistwert korr.(lamzak) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xC2 | Lambdasondenistwert korr. Bank2(lamzak2) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xC3 | VVT-Sollwert (vvt_sw) | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC4 | VVT-Sollwert Bank2(vvt_sw2) | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC5 | VVT-Istwert (vvt_iw) | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC6 | VVT-Istwert Bank2(vvt_iw2) | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xC7 | Betriebsartenbyte VVT(B_fe) | bin | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xC8 | Zähler v. Deltas RAM-Backup(dnvrbupctr) | - | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xC9 | Fehlerstatus SSG-Diagnose (stssgerr) | - | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xCA | Korrekturfaktor Höhe (fho_u) | - | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xCB | Fahrzeuggeschwindigkeit v1 CAN (vfzgv1_u) | - | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xCC | Mittelwert Lambdaregelfaktor gefreezt (frm) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0xCD | Lambda-Sollwert gefreezt (lamsons) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xCE | Korrekturfaktor Höhe gefreezt (fho_u) | - | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xCF | Motorstarttemperatur gefreezt (tmst) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0xD0 | Mittelwert Lambdaregelfaktor gefreezt B2(frm2) | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0xD1 | Lambda-Sollwert gefreezt Bank2 (lamsons2) | - | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xD2 | Korrekturfaktor Höhe gefreezt B2(fho_u) | - | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xD3 | Motorstarttemperatur gefreezt (tmst) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0xD4 | intelligenter Batteriesensor Fehler 1 (ibsderrs1) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xD5 | intelligenter Batteriesensor Fehler 2 (ibsders2_u) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xD6 | Referenzmoment fuer Aussetzererkennung | % | - | unsigned char | - | 0.390625 | 1 | 0 |
| 0xD9 | relative Kraftstoffmasse | % | - | unsigned char | - | 3 | 1 | 0 |
| 0xDD | Abstand zur Startfaehigeitsgrenze(d_soc_u) | % | - | unsigned char | - | 1.0240020752 | 1 | -100 |
| 0xDE | Korrekturwert Abschaltung(abschkor_u) | % | - | unsigned char | - | 1.0240020752 | 1 | -100 |
| 0xDF | aktuelle Batteriespannung (ubatt_u) | V | - | unsigned char | - | 0.064 | 1 | 6 |
| 0xE0 | aktuelles Oelniveau korrigiert |   | - | unsigned char | - | 0.5 | 1 | 0 |
| 0xE1 | relativer Fuellstand des Motoroels |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xE2 | Bordnetzstromentnahme VVT (ivvtbn_u) | A | - | signed char | - | 1.5625 | 1 | 0 |
| 0xE3 | Motorstrom VVT (ivvtm_u) | A | - | signed char | - | 1.5625 | 1 | 0 |
| 0xE4 | Tastverhaeltnis VVT- Motoransteuerung (tvvvtm_u) | % | - | signed char | - | 0.78125 | 1 | 0 |
| 0xE5 | Abstellposition VVT- Führungssensor | ° | - | unsigned char | - | 0.703125 | 1 | 0 |
| 0xE6 | Feststellbereich Fuehrungssensor (exwnkfvb_u) | ° | - | unsigned char | - | 0.703125 | 1 | 0 |
| 0xE7 | Feststellbereich Referenzsensor | ° | - | unsigned char | - | 0.703125 | 1 | 0 |
| 0xE8 | VVT- Fuehrungssensor Rohwert (exwnkfsr_u) | ° | - | unsigned char | - | 0.703125 | 1 | 0 |
| 0xE9 | VVT- Referenzsensor Rohwert (exwnkrsr_u) | ° | - | unsigned char | - | 0.703125 | 1 | 0 |
| 0xEA | Differenz Führungs- zu Referenzsensor (dwvvtfrs_u) | ° | - | unsigned char | - | 0.703125 | 1 | 0 |
| 0xEB | Istwert Exzenterwinkel VVT (exwnki_u) | Grad | - | unsigned char | - | 0.8 | 1 | 0 |
| 0xEC | Sollwert Exzenterwinkel VVT(exwinks_u) | Grad | - | unsigned char | - | 0.8 | 1 | 0 |
| 0xED | Statusbit VVT- Lageregler |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xEE | Spannung Diagnose-Port VVT- Ansteuerung (uvvtdia) | V | - | unsigned char | - | 0.01953125 | 1 | 0 |
| 0xEF | ADC- Wert VVT- Sensorversorgungsspannung (wvvtusen) | V | - | unsigned char | - | 0.01953125 | 1 | 0 |
| 0xF0 | Status VVT- Anschlaglernen (intern)(vvtlrnst) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xF1 | Anforderung VVT- Anschlaglernen (intern)(vvtlrnaf) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xF2 | Temperatur VVT- Endstufe (tvvtes_u) | Grad C | - | unsigned char | - | 1 | 1 | 0 |
| 0xF3 | Temperatur VVT- Stellmotor (tvvtm_u) | Grad C | - | unsigned char | - | 1 | 1 | 0 |
| 0xF4 | Statusbit VVT- Lagereglerueberwachung |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xF5 | Spannung VVT- Relais (uvvtr_u) | V | - | unsigned char | - | 0.078125 | 1 | 0 |
| 0xF6 | Status Fehler Ueberlast VVT1 (stdvovrld) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xF7 | Byteorientierte Ablage fuer B_vvt im FF- Array (bitcnv_vvt) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xF8 | Erregerstrom Generator (ierr) | A | - | unsigned char | - | 0.125 | 1 | 0 |
| 0xFF | --- | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x8B | 0xFF | 0x8C | 0x8A |
| 0x29CD | 0x8B | 0xFF | 0x8C | 0x8A |
| 0x29CE | 0x8B | 0xFF | 0x8C | 0x8A |
| 0x29CF | 0x8B | 0xFF | 0x8C | 0x8A |
| 0x29D0 | 0x8B | 0xFF | 0x8C | 0x8A |
| 0x29D9 | 0xFF | 0xFF | 0xFC | 0xFF |
| 0x29DD | 0xFF | 0xF4 | 0xFF | 0xF3 |
| 0x29E5 | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29E6 | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29E7 | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29E8 | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29E9 | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29EA | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29EB | 0x04 | 0xFF | 0x97 | 0x96 |
| 0x29EC | 0x04 | 0xFF | 0x97 | 0x96 |
| 0x29ED | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29EE | 0xFF | 0xFF | 0x96 | 0x97 |
| 0x29F4 | 0xFF | 0xFF | 0x7D | 0xFF |
| 0x29F5 | 0xFF | 0xFF | 0x7D | 0xFF |
| 0x29F8 | 0xFF | 0xFF | 0x7D | 0xFF |
| 0x29F9 | 0xFF | 0xFF | 0x7D | 0xFF |
| 0x29FE | 0xFF | 0xFF | 0x98 | 0xFF |
| 0x29FF | 0xFF | 0xFF | 0x98 | 0xFF |
| 0x2A02 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2A03 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2A0E | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2A14 | 0x04 | 0x03 | 0x29 | 0x28 |
| 0x2A17 | 0x3E | 0x3D | 0x3C | 0x3B |
| 0x2A19 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2A1A | 0xFF | 0xFF | 0xA1 | 0xFF |
| 0x2A1D | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2A1E | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2A58 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2A59 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2A5B | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2A5D | 0x44 | 0xFF | 0xFF | 0xFF |
| 0x2A5F | 0xFF | 0xFF | 0x46 | 0x47 |
| 0x2A61 | 0x53 | 0xF8 | 0x54 | 0x55 |
| 0x2A63 | 0x56 | 0x57 | 0xFF | 0xFF |
| 0x2A67 | 0x4F | 0x4E | 0x07 | 0x08 |
| 0x2A69 | 0x52 | 0xFF | 0x51 | 0x50 |
| 0x2A6B | 0xFF | 0x3C | 0x6A | 0xFF |
| 0x2A6C | 0xFF | 0xFF | 0xFF | 0x59 |
| 0x2A6D | 0xFF | 0xFF | 0xBE | 0xBD |
| 0x2A6F | 0xFF | 0xFF | 0xFF | 0x3A |
| 0x2A70 | 0xEA | 0xFF | 0xFF | 0xFF |
| 0x2A71 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2A72 | 0x57 | 0xFF | 0xFF | 0xFF |
| 0x2A80 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2A83 | 0x71 | 0xFF | 0x72 | 0xFF |
| 0x2A85 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2A88 | 0x71 | 0xFF | 0x72 | 0xFF |
| 0x2B5C | 0x69 | 0x6B | 0xFF | 0xFF |
| 0x2B5D | 0x2D | 0x29 | 0xFF | 0x28 |
| 0x2B62 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x2B63 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x2B66 | 0xFF | 0x94 | 0xFF | 0xFF |
| 0x2B70 | 0x9B | 0xFF | 0xFF | 0xFF |
| 0x2B80 | 0xFF | 0xFF | 0x87 | 0x86 |
| 0x2B8A | 0x7E | 0xFF | 0xFF | 0xFF |
| 0x2B8B | 0x7E | 0xFF | 0xFF | 0xFF |
| 0x2B8C | 0x7E | 0xFF | 0xFF | 0xFF |
| 0x2B98 | 0xC1 | 0xFF | 0xFF | 0xFF |
| 0x2B99 | 0xFF | 0xFF | 0x8E | 0x8F |
| 0x2B9A | 0xB1 | 0xFF | 0xFF | 0xFF |
| 0x2B9B | 0xB2 | 0xFF | 0xFF | 0xFF |
| 0x2B9C | 0xB3 | 0xBA | 0xAF | 0xFF |
| 0x2B9D | 0xFF | 0xED | 0xEC | 0xEB |
| 0x2BA7 | 0xFF | 0xFF | 0xFF | 0x8D |
| 0x2BB6 | 0x52 | 0xFF | 0x51 | 0x50 |
| 0x2B9E | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2C24 | 0x89 | 0xFF | 0xFF | 0xFF |
| 0x2C45 | 0x88 | 0x3B | 0x82 | 0x0B |
| 0x2C46 | 0x88 | 0x3B | 0x82 | 0x0B |
| 0x2C55 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2C56 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2C6A | 0x89 | 0xFF | 0xFF | 0xFF |
| 0x2C6D | 0x82 | 0x83 | 0x84 | 0x85 |
| 0x2C6E | 0x82 | 0x83 | 0x84 | 0x85 |
| 0x2C6F | 0xFF | 0xFF | 0xFF | 0xC2 |
| 0x2C70 | 0xFF | 0xFF | 0xFF | 0xC2 |
| 0x2C71 | 0x09 | 0x22 | 0x07 | 0x08 |
| 0x2C72 | 0x09 | 0x22 | 0x07 | 0x08 |
| 0x2C9C | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2C9D | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2C9E | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2C9F | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2CA0 | 0x7B | 0xFF | 0xFF | 0xFF |
| 0x2CA1 | 0x7B | 0xFF | 0xFF | 0xFF |
| 0x2CA2 | 0x7C | 0xFF | 0xFF | 0xFF |
| 0x2CA3 | 0x7C | 0xFF | 0xFF | 0xFF |
| 0x2CA8 | 0x7B | 0x22 | 0x07 | 0x08 |
| 0x2CA9 | 0x7B | 0x22 | 0x07 | 0x08 |
| 0x2CEF | 0xF7 | 0x22 | 0x07 | 0x08 |
| 0x2CF0 | 0xFF | 0xFF | 0x61 | 0x62 |
| 0x2CF1 | 0x5F | 0xFF | 0xFF | 0xFF |
| 0x2CF8 | 0x23 | 0xFF | 0xFF | 0xFF |
| 0x2CF9 | 0x26 | 0xFF | 0x25 | 0x24 |
| 0x2CFA | 0x27 | 0xFF | 0x25 | 0x24 |
| 0x2CFF | 0x68 | 0xFF | 0xFF | 0xFF |
| 0x2D00 | 0xFF | 0xFF | 0x5A | 0x5B |
| 0x2D01 | 0xFF | 0xFF | 0x5D | 0x5E |
| 0x2D02 | 0x60 | 0xFF | 0xFF | 0xFF |
| 0x2D03 | 0xFF | 0xFF | 0x65 | 0x66 |
| 0x2D04 | 0x64 | 0xFF | 0xFF | 0xFF |
| 0x2D05 | 0x67 | 0xFF | 0xFF | 0xFF |
| 0x2D08 | 0x63 | 0xFF | 0xFF | 0xFF |
| 0x2D10 | 0xFF | 0xFF | 0x02 | 0x01 |
| 0x2D11 | 0xFF | 0xFF | 0x02 | 0x01 |
| 0x2D12 | 0xFF | 0xFF | 0x02 | 0x01 |
| 0x2D0F | 0xFF | 0xFF | 0x39 | 0x38 |
| 0x2D19 | 0x15 | 0xFF | 0xFF | 0xFF |
| 0x2D1A | 0x74 | 0xFF | 0xFF | 0xFF |
| 0x2D1B | 0x73 | 0xFF | 0x51 | 0x50 |
| 0x2D1C | 0xFF | 0xFF | 0x51 | 0x50 |
| 0x2D28 | 0xFF | 0xFF | 0x39 | 0x38 |
| 0x2D29 | 0xFF | 0xFF | 0x90 | 0x91 |
| 0x2D32 | 0xFF | 0xFF | 0x02 | 0x01 |
| 0x2D6E | 0xA4 | 0xFF | 0xFF | 0xFF |
| 0x2D6F | 0xA6 | 0xA7 | 0xA8 | 0x01 |
| 0x2D70 | 0xFF | 0xAA | 0xAB | 0xAC |
| 0x2D71 | 0xFF | 0xAE | 0xAD | 0xC7 |
| 0x2D72 | 0xE5 | 0xFF | 0xF0 | 0xEF |
| 0x2D73 | 0xE8 | 0xFF | 0xFF | 0xFF |
| 0x2D74 | 0xE9 | 0xFF | 0xFF | 0xFF |
| 0x2D75 | 0xA5 | 0xFF | 0xFF | 0xFF |
| 0x2D76 | 0xB0 | 0xFF | 0xFF | 0xFF |
| 0x2D78 | 0xBB | 0xFF | 0xFF | 0xFF |
| 0x2DB4 | 0x15 | 0xF7 | 0xF6 | 0xF5 |
| 0x2DBF | 0xC9 | 0xC6 | 0xC5 | 0xFF |
| 0x2DCA | 0xC9 | 0xC6 | 0xC5 | 0xFF |
| 0x2DCF | 0xC9 | 0xC6 | 0xC5 | 0xFF |
| 0x2DD7 | 0xC9 | 0xC6 | 0xC5 | 0xFF |
| 0x2DD8 | 0x31 | 0xC6 | 0x32 | 0xFF |
| 0x2DD9 | 0x31 | 0xC6 | 0xC5 | 0xFF |
| 0x2DDA | 0x32 | 0xC6 | 0xFF | 0xFF |
| 0x2DDB | 0xFF | 0xC6 | 0xFF | 0xFF |
| 0x2DDC | 0xC9 | 0xC6 | 0xC5 | 0xFF |
| 0x2DEB | 0xFF | 0xE3 | 0xE1 | 0xE2 |
| 0x2DEC | 0xC8 | 0xFF | 0xCA | 0xFF |
| 0x2DED | 0xE4 | 0xFF | 0xFF | 0xFF |
| 0x2E24 | 0x31 | 0xFF | 0xFF | 0xFF |
| 0x2E25 | 0x31 | 0xFF | 0xFF | 0xFF |
| 0x2E26 | 0x31 | 0xFF | 0xFF | 0xFF |
| 0x2E27 | 0x31 | 0xFF | 0xFF | 0xFF |
| 0x2E30 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2E31 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2E32 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2E33 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2E68 | 0xFF | 0xFF | 0x80 | 0x7F |
| 0x2E69 | 0xFF | 0xFF | 0x80 | 0x7F |
| 0x2E6A | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x2E6B | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x2E7C | 0x0F | 0x10 | 0xFF | 0xFF |
| 0x2E86 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2E8B | 0xC3 | 0x12 | 0xFF | 0xC4 |
| 0x2E8C | 0xCF | 0xCE | 0xFF | 0xCC |
| 0x2E8D | 0xF9 | 0xE0 | 0xFF | 0xFA |
| 0x2E95 | 0x0F | 0x10 | 0x02 | 0x01 |
| 0x2E97 | 0x0C | 0x0D | 0x0F | 0x0E |
| 0x2E9F | 0x11 | 0x12 | 0x13 | 0x14 |
| 0x2EA0 | 0xFB | 0x10 | 0x13 | 0x14 |
| 0x2EB8 | 0xFF | 0xC6 | 0xFF | 0xFF |
| 0x2EBC | 0xFF | 0xC6 | 0xFF | 0xFF |
| 0x2EBD | 0xFF | 0xC6 | 0xFF | 0xFF |
| 0x2EBE | 0xFF | 0xC6 | 0xFF | 0xFF |
| 0x2EE0 | 0x9E | 0x9F | 0x9C | 0x07 |
| 0x2EEA | 0xFF | 0xFF | 0x9C | 0x07 |
| 0x2EF4 | 0xFF | 0xFF | 0xA0 | 0xFF |
| 0x2EF5 | 0x15 | 0x22 | 0x07 | 0x08 |
| 0x2EF6 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2EFE | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2F08 | 0xFF | 0xFF | 0x08 | 0x07 |
| 0x2F12 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2F17 | 0xFF | 0xFF | 0xFF | 0x45 |
| 0x2F21 | 0xFF | 0xFF | 0xFF | 0xFF |
| 0x2F44 | 0x1B | 0x1C | 0x1D | 0x1E |
| 0x2F45 | 0x18 | 0x19 | 0x1A | 0xFF |
| 0x2F46 | 0xFF | 0x1F | 0x20 | 0x21 |
| 0x2F4E | 0xFF | 0xB6 | 0xFF | 0xFF |
| 0x2F50 | 0xB4 | 0xFF | 0xFF | 0xB5 |
| 0x2F58 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2F59 | 0xFF | 0x9A | 0xFF | 0xFF |
| 0x2F5A | 0xFF | 0x99 | 0xFF | 0xFF |
| 0x2F62 | 0x2E | 0xFF | 0xFF | 0xFF |
| 0x2F67 | 0xFF | 0x81 | 0xFF | 0xFF |
| 0x2F6C | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2F71 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2F76 | 0x3F | 0xFF | 0x46 | 0x47 |
| 0x2F7B | 0x95 | 0xFF | 0xFF | 0xFF |
| 0x2F80 | 0xE7 | 0xFF | 0xFF | 0xFF |
| 0x2F85 | 0xFF | 0xFF | 0xE6 | 0xBF |
| 0x2F8A | 0x52 | 0xFF | 0x51 | 0x50 |
| 0x2F94 | 0xFF | 0x22 | 0x07 | 0x08 |
| 0x2F99 | 0x77 | 0xA2 | 0xFF | 0xFF |
| 0x2F9E | 0x15 | 0x16 | 0x17 | 0xFF |
| 0x2FA3 | 0x36 | 0xFF | 0xFF | 0xFF |
| 0xCD87 | 0xFF | 0x35 | 0x34 | 0x33 |
| 0xCD8B | 0x35 | 0x22 | 0x34 | 0x33 |
| 0xCD9B | 0x37 | 0x37 | 0xFF | 0xFF |
| 0xCDA1 | 0xFF | 0x37 | 0xFF | 0xFF |
| 0xCDA2 | 0xFF | 0x37 | 0xFF | 0xFF |
| 0xCDA3 | 0xFF | 0x37 | 0xFF | 0xFF |
| 0xCDA7 | 0xFF | 0x37 | 0xFF | 0xFF |
| 0xCDAA | 0xFF | 0x37 | 0xFF | 0xFF |
| 0xCDAC | 0xFF | 0x37 | 0xFF | 0xFF |
| 0xFFFF | 0xFF | 0xFF | 0xFF | 0xFF |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x03 | kein Signal oder Wert |
| 0x04 | unplausibles Signal oder Wert |
| 0x05 | mangelnde Signalbereitschaft |
| 0x06 | Lastabfall |
| 0x07 | Kurzschluss nach Minus |
| 0x08 | Kurzschluss nach Plus |
| 0x09 | Heizereinkopplung Signalpfad |
| 0x0A | geringe Signaldynamik |
| 0x0B | Signal-Offset |
| 0x0C | Fehler mechanisch |
| 0x0D | Fehler elektrisch |
| 0x0E | Uebertemperatur |
| 0x0F | Generatortyp unplausibel |
| 0x10 | Kommunikationsverlust |
| 0x11 | Messfehler Oelzustand |
| 0x12 | BSD Kommunikation |
| 0x13 | Messfehler Oelniveau |
| 0x14 | Messfehler Oeltemperatur |
| 0x15 | Signal unplausibel |
| 0x16 | Signal abgefallen |
| 0x17 | Warnschwelle Oelverlust ausgeloest |
| 0x18 | Empfangsfehler serielle Schnittstelle (Paritybit > 3x) |
| 0x19 | Timeout EWS-Telegramm (kein Telegramm innerhalb 2s nach Kl.15 ein) |
| 0x1A | Empfangsfehler serielle Schnittstelle (Frame- oder Stopbit > 3x) |
| 0x1B | WC passt nicht zum erwarteten WC (Fangbereichsueberschreitung) |
| 0x1C | Fehler beim Programmieren oder Rücksetzen des Startwerts |
| 0x1D | noch kein Startwert programmiert |
| 0x1E | Startwert nicht eindeutig erkennbar (Fehler in 2-aus-3-Auswahl) |
| 0x1F | Schreibfehler EEPROM (3 Fehlversuche beim Schreiben ins EEPROM) |
| 0x20 | WC-Ablage fehlerhaft im EXRAM (z.B. nach Powerfail) |
| 0x21 | Lesefehler EEPROM (3 Fehlversuche beim Lesen aus EEPROM) |
| 0x22 | Leitungsunterbrechung |
| 0x23 | Fehler DK-Poti 1 oder DK-Poti 2 |
| 0x24 | Bereichsverletzung Poti nach oben |
| 0x25 | Bereichsverletzung Poti nach unten |
| 0x26 | Drosselklappenpotentiometer 1 unplausibel zur Luftmasse |
| 0x27 | Drosselklappenpotentiometer 2 unplausibel zur Luftmasse |
| 0x28 | Fehlereintrag durch Lueckenkorrektur |
| 0x29 | keine Bezugsmarke gefunden |
| 0x2A | VANOS hat Spaetposition nicht erreicht |
| 0x2B | VANOS hat Fruehposition nicht erreicht |
| 0x2C | VANOS hat unplausible Position |
| 0x2D | Kurbelwellen-Zahnfehler oder Lueckenverlust |
| 0x2E | Pruefresultat unplausibel |
| 0x2F | Timeout abgelaufen |
| 0x30 | Alive-Fehler |
| 0x31 | Plausibilitaetfehler |
| 0x32 | Checksumme oder Alivefehler |
| 0x33 | Baustein im Zustand Passiv |
| 0x34 | DPRAM von CAN Baustein defekt |
| 0x35 | CAN Baustein Bus off oder Bus defekt |
| 0x36 | DME noch nicht codiert |
| 0x37 | fehlerhafte Botschaft |
| 0x38 | Signal oberhalb Schwelle oder Kurzschluss nach Plus |
| 0x39 | Signal unterhalb Schwelle oder Kurzschluss nach Minus |
| 0x3A | max.Anzahl der MINHUB-Anschläge überschritten |
| 0x3B | Sondendefekt |
| 0x3C | Plausibilisierung Luftmasse zu gering |
| 0x3D | Abbruch wegen Stromschwankungen bei Feinleckpruefung |
| 0x3E | Pumpenstromschwelle bei Ventilpruefung erreicht |
| 0x3F | Sensorwert unplausibel |
| 0x40 | Magnet loss |
| 0x41 | Resetfehler |
| 0x42 | Parityfehler |
| 0x43 | Gradientenfehler |
| 0x44 | Sensoren unplausibel |
| 0x45 | Zwangshochschaltung Getriebe |
| 0x46 | Sensorspannung zu gering |
| 0x47 | Sensorspannung zu hoch |
| 0x48 | Sollwertsbotschaften nicht empfangen |
| 0x49 | VVT-Boschaften nicht empfangen |
| 0x4A | ROM-Test Fehler |
| 0x4B | Stack-Test Fehler |
| 0x4C | RAM-Test Fehler |
| 0x4D | EEPROM-Test Fehler |
| 0x4E | Kurzschluss der Motorleitung |
| 0x4F | Ansteuerungsfehler allgemein |
| 0x50 | Spannung oberhalb Schwelle |
| 0x51 | Spannung unterhalb Schwelle |
| 0x52 | Relaisfehler |
| 0x53 | keine Anschlaege gelernt |
| 0x54 | Fehler unteres Lernfenster |
| 0x55 | Verstellbereich fehlerhaft |
| 0x56 | Drehrichtungserkennung |
| 0x57 | Lagereglerueberwachung |
| 0x58 | Uebertemperatur |
| 0x59 | Vergleich Abstell- zur Startposition fehlerhaft |
| 0x5A | Klappe laesst sich vom UMA nicht oeffnen |
| 0x5B | Feder schliesst nicht |
| 0x5C | DKS Ansteuerungsfehler, Endstufe abgeschaltet |
| 0x5D | Klappe laesst sich vom UMA nicht schliessen |
| 0x5E | Feder oeffnet nicht |
| 0x5F | DKS Lageabweichung |
| 0x60 | Fehler bei NLP-Pruefung und Lernen |
| 0x61 | DKS klemmt kurzzeitig |
| 0x62 | DKS klemmt anhaltend |
| 0x63 | DKS-Tauscherkennung ohne Adaption Notluftpunkt |
| 0x64 | Fehler in Urinitialisierung des unteren mech. Anschlags (UMA) |
| 0x65 | Lernverbot unterer mech. Anschlag (UMA) wegen Unterspannung |
| 0x66 | Lernverbot unterer mech. Anschlag (UMA) wegen Umweltbedinungen |
| 0x67 | Fehler bei Wiederhollernen unterer mech. Anschlag (UMA) |
| 0x68 | Fehler bei Verstaerkerabgleich  |
| 0x69 | gestörtes Drehzahlsignal (länger als 50ms) |
| 0x6A | Ventil öffnet nicht (Winkeldetektion), Vollhub wird nicht erreicht |
| 0x6B | kein Drehzahlsignal gefunden |
| 0x6C | Uebertemperaturabschaltung |
| 0x6D | Kurzschluss nach Minus |
| 0x6E | Kurzschluss nach Plus oder niedere Impedanz  |
| 0x6F | Massenstromadaption zu klein |
| 0x70 | Massenstromadaption zu gross |
| 0x71 | Regelanschlag zu lange zu gross |
| 0x72 | Anschlagadaption ausserhalb gueltigen Bereich |
| 0x73 | Gleichlauffehler zwischen Poti1 und Poti2 |
| 0x74 | Poti1 oder Poti2 fehlerhaft oder ausserhalb der Toleranzen |
| 0x75 | untere Plausibilitaetsschwelle unterschritten |
| 0x76 | obere Plausibilitaetsschwelle ueberschritten |
| 0x77 | Umgebungstemperatur unplausibel |
| 0x78 | CAN-Fehler Tankfuellstand |
| 0x79 | Tankfuellstandssignal Tank2 fehlerhaft |
| 0x7A | Tankfuellstandssignal Tank1 fehlerhaft |
| 0x7B | Sondenheizung defekt (Innenwiderstand) |
| 0x7C | zu geringe Schubsignalspannung |
| 0x7D | Katalysatorwirkungsgrad unter Schwellwert |
| 0x7E | Klopfbaustein defekt |
| 0x7F | Motor mechanisch zu laut oder Klopfsensor ausserhalb Toleranz |
| 0x80 | elektrischer Fehler Klopfsensor (Wackelkontakt o. Klopfsensor locker) |
| 0x81 | Signal inaktiv |
| 0x82 | Sonde dynamisch zu langsam |
| 0x83 | Sondenspannung im Schub Schwelle nicht unterschritten |
| 0x84 | Sondenspannung unterschreitet Schwellwert nicht |
| 0x85 | Sondenspannung ueberschreitet Schwellwert nicht |
| 0x86 | LL-Steller Oeffnung zu gross oder Leckluft |
| 0x87 | LL-Steller Oeffnung zu gering |
| 0x88 | Adernschluss oder vergiftete Referenzluft (CSD) |
| 0x89 | vertauschte Lambdasonden |
| 0x8A | Verbrennungsaussetzer mit Zylinderabschaltung |
| 0x8B | Verbrennungsaussetzer im Warmlauf, emissionsverschlechternd |
| 0x8C | Verbrennungsaussetzer betriebswarm, emissionsverschlechternd |
| 0x8D | Drehmomentbegrenzung, Sollmoment liegt über zulässigem Moment |
| 0x8E | Schreibfehler |
| 0x8F | Lesefehler |
| 0x90 | Differenzdruck zu klein |
| 0x91 | Differenzdruck zu gross |
| 0x92 | unplausible Phasenflankenanzahl |
| 0x93 | Lage der Phasenflanken oder Einbaulage ausserhalb Toleranz |
| 0x94 | keine Masternockenwelle vorhanden |
| 0x95 | Schalter unplausibel |
| 0x96 | Gemisch zu fett |
| 0x97 | Gemisch zu mager |
| 0x98 | Sekundaerluftdurchsatz zu gering |
| 0x99 | Drehzahlimpulse innerhalb des Messfensters erkannt |
| 0x9A | Start in laufendem Motor |
| 0x9B | Fehler Ansteuerung DISA (Kurzschluesse nach Plus oder Minus) |
| 0x9C | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x9D | Kurzschluss nach Minus |
| 0x9E | Kuehlwassertemperatur unplausibel gegenueber Modell |
| 0x9F | Kuehlwassertemperatur fuer Lambdaregelungsfreigabe nicht erreicht |
| 0xA0 | Thermostat klemmt |
| 0xA1 | Funktionstest Tankentlueftung fehlerhaft |
| 0xA2 | Umgebungstemperatur vom Kombi fehlerhaft |
| 0xA3 | ADC Fehler |
| 0xA4 | Funktionsueberwachung Momentenvergleich |
| 0xA5 | Kurbelwellengeber-, Zuleitungs- oder Steuergeraetefehler |
| 0xA6 | Lastsensor-, Zuleitungs- oder Steuergeraetefehler |
| 0xA7 | VVT-Ventilplausibilisierung |
| 0xA8 | Drucksensorplausibilisierung |
| 0xA9 | Reaktionsueberwachung |
| 0xAA | ADC-Ueberwachung |
| 0xAB | Zuendwinkelueberwachung |
| 0xAC | RL-Ueberwachung |
| 0xAD | Plausibilisierung rk-ti |
| 0xAE | Variantencodierungsueberwachung |
| 0xAF | Reset TPU-RAM |
| 0xB0 | Pedalwertgeber-, Zuleitungs- oder Steuergeraetefehler |
| 0xB1 | RAM-Fehler |
| 0xB2 | ROM-Fehler |
| 0xB3 | Reset-Fehler |
| 0xB4 | Geschwindigkeitssignal vom Kombi und DSC nicht kompatibel |
| 0xB5 | Geschwindigkeitssignal vom Kombi fehlerhaft |
| 0xB6 | fehlendes Geschwindigkeitssignal (Hardwaresignal) |
| 0xB7 | Hochimpedanz |
| 0xB8 | Lagerreglerabweichung zu gross |
| 0xB9 | Uebertemperatur DISA-Stellmotor |
| 0xBA | Reset TPU-CPU |
| 0xBB | Ueberwachung Luftmassenstromabgleich |
| 0xBC | zu starke Erwaermung des Steller |
| 0xBD | Temperatur VVT-Endstufe zu hoch |
| 0xBE | Temperatur E-Motor zu hoch |
| 0xBF | Steuergeraeteinnentemperatur zu hoch |
| 0xC0 | Ueberlastschutz VVT-System |
| 0xC1 | Aktualitaetszaehler zwischen EEPROM und RAM-Backup unterschiedlich |
| 0xC2 | Signal bei Vollast unterhalb Fettschwelle |
| 0xC3 | Version unplausibel |
| 0xC4 | Erweiterte BSD Kommunikation |
| 0xC5 | Alivefehler |
| 0xC6 | Timeout |
| 0xC7 | Überwachung Kraftstoffkorektur |
| 0xC8 | Powermanagement defekt |
| 0xC9 | Checksumme |
| 0xCA | Tiefenentladung |
| 0xCB | Strom Temperatur |
| 0xCC | Temperatur |
| 0xCE | Spannung |
| 0xCF | Strom |
| 0xE0 | System |
| 0xE1 | Unterspannung |
| 0xE2 | Ueberspannung |
| 0xE3 | batterieloser Betrieb |
| 0xE4 | Ruhestrom |
| 0xE5 | Lambdatest |
| 0xE6 | Steuergeraeteinnentemperatur zu niedrig |
| 0xE7 | CAN rel. Zeitgeber unplausibel |
| 0xE8 | Kraftstoffdrucktest |
| 0xE9 | Lambda-Plausibilisierung |
| 0xEA | gemessener Strom VVT unplausibel |
| 0xEB | Ueberspannung auf VCC |
| 0xEC | WDA-Abschaltung erkannt (unbekannte Fehlerursache) |
| 0xED | fehlerhafte/fehlende F/A- Kommunikation |
| 0xEF | ADC-Queue Überwachung |
| 0xF0 | ADC-Testspannung außerhalb zulässigem Bereich |
| 0xF1 | Sondensignal zu traege |
| 0xF2 | Schaltzeiten Fett- Mager zu langsam |
| 0xF3 | Radgeschwindigkeit zu hoch |
| 0xF4 | kein Raddrehzahlsignal erhalten |
| 0xF5 | Toggle-Bit Fehler |
| 0xF6 | Frequenzfehler |
| 0xF7 | Signalfehler |
| 0xF8 | Speicherung Lernwerte in EEPROM nicht möglich |
| 0xF9 | KL15- Wakeupleitung unplausibel |
| 0xFA | KL15- Wakeupleitung Masseschluss |
| 0xFB | Permitivitätsmessung fehlerhaft |
| 0xFC | Tankfüllstand zu gering |
| 0xFF | unbekannte Fehlerart |

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
| FR_W | 8312F1224000 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0000305 | 0 | 0 | 0 |   |
| FR2_W | 8312F1224000 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0000305 | 0 | 0 | 0 |   |
| VFZG | 8312F1224000 | 0 | 0 | 0x00 | 9 | 2 | -- | 1.25 | 0 | 0 | 0 | km/h |
| NMOT_W | 8312F1224000 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| NSOL | 8312F1224000 | 0 | 0 | 0x00 | 12 | 2 | -- | 10 | 0 | 0 | 0 | min-1 |
| WNWKWE_W | 8312F1224000 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.1 | 0 | 0 | 0 | GradKW |
| WNWKWA_W | 8312F1224000 | 0 | 0 | 0x00 | 15 | 5 | -- | 0.1 | 0 | 0 | 0 | GradKW |
| TANS | 8312F1224000 | 0 | 0 | 0x00 | 17 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| TMOT | 8312F1224000 | 0 | 0 | 0x00 | 18 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| ZWOUT | 8312F1224000 | 0 | 0 | 0x00 | 19 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad |
| WDKBA | 8312F1224000 | 0 | 0 | 0x00 | 20 | 2 | -- | 0.39216 | 0 | 0 | 0 | % DK |
| MSHFM_W | 8312F1224000 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| MIIST_W | 8312F1224000 | 0 | 0 | 0x00 | 23 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| UB | 8312F1224000 | 0 | 0 | 0x00 | 25 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UPWG_W | 8312F1224000 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| TKA | 8312F1224000 | 0 | 0 | 0x00 | 28 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| RKRN_W_0 | 8312F1224000 | 0 | 0 | 0x00 | 29 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_1 | 8312F1224000 | 0 | 0 | 0x00 | 31 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_2 | 8312F1224000 | 0 | 0 | 0x00 | 33 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_3 | 8312F1224000 | 0 | 0 | 0x00 | 35 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_4 | 8312F1224000 | 0 | 0 | 0x00 | 37 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_5 | 8312F1224000 | 0 | 0 | 0x00 | 39 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_6 | 8312F1224000 | 0 | 0 | 0x00 | 41 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_7 | 8312F1224000 | 0 | 0 | 0x00 | 43 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| DFMONITOR | 8312F1224001 | 0 | 0 | 0x00 | 3 | 2 | -- | 0,390588 | 0 | 0 | 0 | % |
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
| USVK | 8312F1224003 | 0 | 0 | 0x00 | 20 | 5 | -- | 0.00488 | -1 | 0 | 0 | V |
| USVK2 | 8312F1224003 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.00488 | -1 | 0 | 0 | V |
| MSNDKO | 8312F1224008 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| FKMSDKA | 8312F1224008 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| FKMSDK | 8312F1224008 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| EISYDKFKAF | 8312F1224008 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.0078125 | 0 | 0 | 0 |   |
| EISYDKKOFF | 8312F1224008 | 0 | 0 | 0x00 | 4 | 5 | -- | 8 | 0 | 0 | 0 |   |
| EISYEVFKAF | 8312F1224008 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0078125 | 0 | 0 | 0 |   |
| EISYEVKOFF | 8312F1224008 | 0 | 0 | 0x00 | 6 | 5 | -- | 8 | 0 | 0 | 0 |   |
| RKAT | 8312F1224004 | 0 | 0 | 0x00 | 3 | 7 | -- | 0.0468 | 0 | 0 | 0 | % |
| RKAT2 | 8312F1224004 | 0 | 0 | 0x00 | 5 | 7 | -- | 0.0468 | 0 | 0 | 0 | % |
| FRA | 8312F1224004 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| FRA2 | 8312F1224004 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| TEDUB | 8312F1224004 | 0 | 0 | 0x00 | 11 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| TEDUB2 | 8312F1224004 | 0 | 0 | 0x00 | 12 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| DYNLSU | 8312F1224004 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.00024 | 0 | 0 | 0 |   |
| DYNLSU2 | 8312F1224004 | 0 | 0 | 0x00 | 15 | 5 | -- | 0.00024 | 0 | 0 | 0 |   |
| LAMSONI | 8312F1224004 | 0 | 0 | 0x00 | 17 | 5 | -- | 0.00024 | 0 | 0 | 0 | V |
| LAMSONI2 | 8312F1224004 | 0 | 0 | 0x00 | 19 | 5 | -- | 0.00024 | 0 | 0 | 0 | V |
| TATEIST | 8312F1224005 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VSASPRI | 8312F1224005 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSASPRI2 | 8312F1224005 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI | 8312F1224005 | 0 | 0 | 0x00 | 8 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI2 | 8312F1224005 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSATV | 8312F1224005 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSATV2 | 8312F1224005 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV | 8312F1224005 | 0 | 0 | 0x00 | 16 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV2 | 8312F1224005 | 0 | 0 | 0x00 | 18 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| TAML | 8312F1224005 | 0 | 0 | 0x00 | 20 | 2 | -- | 0.39215686 | 0 | 0 | 0 | % |
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
| VVTTV | 8312F122400B | 0 | 0 | 0x00 | 7 | 2 | -- | 0.392157 | 0 | 0 | 0 | % |
| VVTES | 8312F122400B | 0 | 0 | 0x00 | 8 | 2 | -- | 0.5 | -63.5 | 0 | 0 |   |
| VVTSW2 | 8312F122400B | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW2 | 8312F122400B | 0 | 0 | 0x00 | 11 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV2 | 8312F122400B | 0 | 0 | 0x00 | 13 | 2 | -- | 0.392157 | 0 | 0 | 0 | % |
| VVTES2 | 8312F122400B | 0 | 0 | 0x00 | 14 | 2 | -- | 0.5 | -63.5 | 0 | 0 |   |
| MINHUBVSI | 8312F122400B | 0 | 0 | 0x00 | 17 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| DELTAGVFI | 8312F122400B | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0019532 | 0 | 0 | 0 |   |
| FLUB1 | 8312F122400B | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0002441 | 0 | 0 | 0 |   |
| FLUB2 | 8312F122400B | 0 | 0 | 0x00 | 23 | 7 | -- | 0.0002441 | 0 | 0 | 0 |   |
| MINHUBROH | 8312F122400B | 0 | 0 | 0x00 | 27 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| TSG | 8312F122400C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVAD | 8312F122400C | 0 | 0 | 0x00 | 5 | 7 | -- | 0.00305185 | 0 | 0 | 0 | % |
| DPS | 8312F122400C | 0 | 0 | 0x00 | 7 | 7 | -- | 0.03906247 | 0 | 0 | 0 | hPa |
| DPSRAUS | 8312F122400C | 0 | 0 | 0x00 | 9 | 5 | -- | 5.01945 | 0 | 0 | 0 | hPa |
| FKMSVVT | 8312F122400C | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FPRSTEP | 8312F122400C | 0 | 0 | 0x00 | 13 | 2 | -- | 1 | 0 | 0 | 0 |   |
| LRNSTEP | 8312F122400C | 0 | 0 | 0x00 | 14 | 2 | -- | 1 | 0 | 0 | 0 |   |
| MSNVVTO | 8312F122400C | 0 | 0 | 0x00 | 15 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| NNW10 | 8312F122400C | 0 | 0 | 0x00 | 17 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW11 | 8312F122400C | 0 | 0 | 0x00 | 19 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW12 | 8312F122400C | 0 | 0 | 0x00 | 21 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW20 | 8312F122400C | 0 | 0 | 0x00 | 23 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW21 | 8312F122400C | 0 | 0 | 0x00 | 25 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NNW22 | 8312F122400C | 0 | 0 | 0x00 | 27 | 7 | -- | 1 | 0 | 0 | 0 |   |
| NSOLFASTA | 8312F122400D | 0 | 0 | 0x00 | 3 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| RL | 8312F122400D | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| RLSOL | 8312F122400D | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| TE | 8312F122400D | 0 | 0 | 0x00 | 9 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| TE2 | 8312F122400D | 0 | 0 | 0x00 | 11 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| VVTSTATUS | 8312F122400D | 0 | 0 | 0x00 | 13 | 5 | -- | 1 | 0 | 0 | 0 |   |
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
| DFFGEN | 8312F122400E | 0 | 0 | 0x00 | 12 | 2 | -- | 0.3921568 | 0 | 0 | 0 | % |
| TUMG | 8312F122400E | 0 | 0 | 0x00 | 13 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVADFS | 8312F122400E | 0 | 0 | 0x00 | 14 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DMVADKO | 8312F122400E | 0 | 0 | 0x00 | 16 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DLAHI | 8312F122400E | 0 | 0 | 0x00 | 18 | 7 | -- | 0.000030518 | 0 | 0 | 0 |   |
| DLAHI2 | 8312F122400E | 0 | 0 | 0x00 | 20 | 7 | -- | 0.000030518 | 0 | 0 | 0 |   |
| RINH | 8312F122400E | 0 | 0 | 0x00 | 22 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RINH2 | 8312F122400E | 0 | 0 | 0x00 | 24 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RKATS | 8312F122400E | 0 | 0 | 0x00 | 26 | 7 | -- | 0.0468749 | 0 | 0 | 0 | % |
| DPSSOL | 8312F122400E | 0 | 0 | 0x00 | 28 | 7 | -- | 0.03906247 | 0 | 0 | 0 | hPa |
| CO_POT | 8312F122400F | 0 | 0 | 0x00 | 5 | 7 | -- | 1 | 0 | 0 | 0 |   |
| UPWG | 8312F122400F | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| MINHUB | 8312F122400F | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| GVIST | 8312F122400F | 0 | 0 | 0x00 | 12 | 7 | -- | 0.00195314 | 0 | 0 | 0 |   |
| FTBR | 8312F122400F | 0 | 0 | 0x00 | 14 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| FHO | 8312F122400F | 0 | 0 | 0x00 | 16 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FTVDK | 8312F122400F | 0 | 0 | 0x00 | 18 | 2 | -- | 0.0078125 | 0 | 0 | 0 |   |
| MSNVVTOLL | 8312F122400F | 0 | 0 | 0x00 | 20 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| VSESPRS | 8312F122400F | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSE2SPRS | 8312F122400F | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSASPRS | 8312F122400F | 0 | 0 | 0x00 | 29 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSA2SPRS | 8312F122400F | 0 | 0 | 0x00 | 30 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| EVHUBI | 8312F1224010 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBI2 | 8312F1224010 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBS | 8312F1224010 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| OFWNKADBG | 8312F1224010 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| DFSERESZ | 8312F1224010 | 0 | 0 | 0x00 | 16 | 5 | -- | 1 | 0 | 0 | 0 |   |
| DMVADFK | 8312F1224010 | 0 | 0 | 0x00 | 18 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| DMVADLL | 8312F1224010 | 0 | 0 | 0x00 | 20 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| EXWINKI | 8312F1224010 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKI2 | 8312F1224010 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKS | 8312F1224010 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| FKMSVVTA | 8312F1224011 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FOFRESZ | 8312F1224011 | 0 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0 | 0 |   |
| MSDIF | 8312F1224011 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| TABGM | 8312F1224011 | 0 | 0 | 0x00 | 9 | 2 | -- | 5 | -50 | 0 | 0 | Grad C |
| TNSE | 8312F1224011 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | s |
| OZRWPERM | 8312F1224011 | 0 | 0 | 0x00 | 12 | 7 | -- | 10 | 0 | 0 | 0 |   |
| OZRWKVB | 8312F1224011 | 0 | 0 | 0x00 | 14 | 7 | -- | 10 | 0 | 0 | 0 |   |
| OZPERMLOW | 8312F1224011 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.00009155 | 0 | 0 | 0 |   |
| OZPERMEX | 8312F1224011 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.00009155 | 0 | 0 | 0 |   |
| OZPERMOFF | 8312F1224011 | 0 | 0 | 0x00 | 28 | 7 | -- | 0.00018311 | 0 | 0 | 0 |   |
| OZKVBOG | 8312F1224011 | 0 | 0 | 0x00 | 30 | 7 | -- | 0.01831082 | 0 | 0 | 0 |   |
| OZPERMBOG | 8312F1224011 | 0 | 0 | 0x00 | 32 | 7 | -- | 0.000030517585 | 0 | 0 | 0 |   |
| OZOELKM | 8312F1224011 | 0 | 0 | 0x00 | 34 | 7 | -- | 10 | 0 | 0 | 0 | km |
| NADMTLL | 8312F1224012 | 0 | 0 | 0x00 | 3 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NTGLM | 8312F1224012 | 0 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NTKLM | 8312F1224012 | 0 | 0 | 0x00 | 7 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NDIPFRO | 8312F1224012 | 0 | 0 | 0x00 | 9 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NKFL | 8312F1224012 | 0 | 0 | 0x00 | 11 | 2 | -- | 1 | 0 | 0 | 0 |   |
| SSLLCNT | 8312F1224012 | 0 | 0 | 0x00 | 12 | 2 | -- | 1 | 0 | 0 | 0 |   |
| MINHUBFAK | 8312F1224012 | 0 | 0 | 0x00 | 15 | 2 | -- | 0.00784314 | 0 | 0 | 0 |   |
| MINADRDY | 8312F1224012 | 0 | 0 | 0x00 | 16 | 2 | -- | 1 | 0 | 0 | 0 |   |
| FDLUBBGL | 8312F1224012 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| OFWNKBG1 | 8312F1224012 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OFWNKBG2 | 8312F1224012 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OFWNKMX | 8312F1224012 | 0 | 0 | 0x00 | 28 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| WTSG | 8312F1304101 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| USHK2 | 8312F1304501 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK2_W | 8312F1304501 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | -1 | 0 | 0 | V |
| UPWG1 | 8312F1304601 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UPWG2 | 8312F1304701 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK | 8312F1304801 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK_W | 8312F1304801 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | -1 | 0 | 0 | V |
| WUB | 8312F1304A01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UDKP2 | 8312F1304C01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001222 | 0 | 0 | 0 | V |
| UDKP1V | 8312F1304D01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UDKP1 | 8312F1304E01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001222 | 0 | 0 | 0 | V |
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
| OFWTSTBER | 8312F130A401 | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 |   |
| OFWNKTEST | 8312F130A401 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OSCDKTF | 8212F1211C | 0 | 0 | 0x00 | 4 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| OSCDKTF2 | 8212F1211C | 0 | 0 | 0x00 | 6 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| ENDE |  |  |  |  | 1 | 1 | -- | 1 | 0 | 0 | 0 |   |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_FOFR1 | 19 | 0x01 | 0x01 |
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
| B_KD | 4 | 0x04 | 0x04 |
| B_PN | 4 | 0x08 | 0x08 |
| B_ECULOCK | 4 | 0x10 | 0x10 |
| B_TEHB | 4 | 0x20 | 0x20 |
| B_SA | 4 | 0x40 | 0x40 |
| B_LRNRDY | 4 | 0x80 | 0x80 |
| B_SLV | 21 | 0x02 | 0x02 |
| B_SLP | 21 | 0x04 | 0x04 |
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
| B_DISA_GEREG_LAGEM_VAR_NEU | 3 | 0x04 | 0x04 |
| B_ANSKL_GL_VAR_NEU | 3 | 0x08 | 0x08 |
| B_AGR_VAR_NEU | 3 | 0x80 | 0x80 |
| B_ABGK_MONO_GL_VAR_NEU | 4 | 0x01 | 0x01 |
| B_ABGK_Y_GL_VAR_NEU | 4 | 0x02 | 0x02 |
| B_ABGK_STER_GL_VAR_NEU | 4 | 0x04 | 0x04 |
| B_NOKATFZ_VAR_NEU | 4 | 0x08 | 0x08 |
| B_LIN_LSVK_GL_VAR_NEU | 4 | 0x10 | 0x10 |
| B_ZWP_LSVK_GL_VAR_NEU | 4 | 0x20 | 0x20 |
| B_SLPVAR_VAR_NEU | 4 | 0x40 | 0x40 |
| B_SLVVAR_VAR_NEU | 4 | 0x80 | 0x80 |
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
| B_HS_GL_VAR_NEU | 6 | 0x10 | 0x10 |
| B_SSG_GL_VAR_NEU | 6 | 0x20 | 0x20 |
| B_EGS_GL_VAR_NEU | 6 | 0x40 | 0x40 |
| B_TXUGET_VAR_NEU | 6 | 0x80 | 0x80 |
| B_ASCPKW_VAR_NEU | 7 | 0x01 | 0x01 |
| B_ACC_VAR_NEU | 7 | 0x02 | 0x02 |
| B_ARSVAR_VAR_NEU | 7 | 0x08 | 0x08 |
| B_AFSVAR_VAR_NEU | 7 | 0x40 | 0x40 |
| B_KOVAR_VAR_NEU | 7 | 0x80 | 0x80 |
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
| 0x00 | keine Testeranforderung vorhanden |
| 0x01 | Startbedingung nicht erfüllt (Motorlauf) |
| 0x02 | nicht belegt |
| 0x03 | nicht belegt |
| 0x04 | nicht belegt |
| 0x05 | Lernvorgang aktiv |
| 0x06 | nicht belegt |
| 0x07 | Abbruch durch Motorlauf, Fehler im VVT-System, Rücknahme Lernanforderung |
| 0x08 | Lernanforderung ohne Fehler beendet |
| 0x09 | Lernvorgang mit aufgetretenem Fehler beendet |
| 0xXY | Fehlerhafter Status |

### SONDENSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfüllt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | nicht belegt |
| 0x05 | Funktion läuft |
| 0x06 | Funktion beendet ohne Ergebnis |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt)und kein Fehler erkannt |
| 0x09 | Funktion vollständig durchlaufen (Zyklusflag/Readiness gesetzt)und Fehler erkannt |
| 0xXY | Fehlerhafter Status |

### SONDENSTATUS_ERW

| STATI | TEXT |
| --- | --- |
| 0x00 | Diagnose inaktiv |
| 0x01 | Diagnose Step 1 |
| 0x02 | Diagnose Step 2 |
| 0x10 | Diagnose beendet Sensor OK |
| 0x11 | Diagnose beendet, Lambdasonde vor Kat vertauscht |
| 0x12 | Diagnose beendet, Lambdasonde hinter Kat vertauscht |
| 0x13 | Diagnose beendet, Lambdasonde vor und nach Kat vertauscht |
| 0x14 | Diagnose beendet, Lambdasonde vor Kat Bank 1 unplausibel |
| 0x15 | Diagnose beendet, Lambdasonde vor Kat Bank 2 unplausibel |
| 0x16 | Diagnose beendet, Lambdasonde nach Kat Bank 1 unplausibel |
| 0x17 | Diagnose beendet, Lambdasonde nach Kat Bank 2 unplausibel |
| 0x18 | Diagnose beendet, kein interpretierbares Ergebnis |
| 0xXY | Fehlerhafter Status |

### GENHERSTELLER

| NR | HERSTELLER_TEXT |
| --- | --- |
| 0x08 | BOSCH |
| 0x0B | VALEO |
| 0x1D | DENSO |
| 0xXY | unbekannter Hersteller |

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

### SLSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Sekundaerluftdiagnose laeuft aufgrund einer Testanforderung gerade ab |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x02 | Funktionsanforderung vorhanden |
| 0x05 | keine Funktionsanforderung an die Sekundaerluftdiagnose |
| 0x06 | Systemtest SLS ist beendet |
| 0x10 | Sekundaerluftmindermasse erkannt (bei 2 Bank Systemen gilt dies nur für Bank1) |
| 0x11 | Sekundaerluftmindermasse auf Bank2 erkannt (nur bei 2 Bank Systemen, keine Bewertung von Bank1) |
| 0x12 | Sekundaerluftmindermasse auf Bank1 und Bank2 erkannt (nur bei 2 Bank Systemen) |
| 0x13 | Sekundaerluftdiagnoseergebnis n.i.o. (bei 2 Bank Systemen gilt Aussage nur für Bank1) |
| 0x14 | Sekundaerluftdiagnoseergebnis 2 n.i.o. (nur bei 2 Bank Systemen) |
| 0x15 | Sekundaerluftdiagnoseergebnis Bank 1 + 2 n.i.o. (nur bei 2 Bank Systemen) |
| 0x16 | Sekundaerluftdiagnoseergebnis i.o. |
| 0x20 | Sekundaerluftwicklungstemperatur zu groß |
| 0x21 | SLP-Abbruch z.B. aufgrund: Sek Druckdifferenz, Batteriesp., Motorluftmasse außerhalb der Schwellen |
| 0x22 | Messphase abgebrochen wurde |
| 0x23 | Offsetphase abgebrochen wurde |
| 0x24 | Vorsteuerung auf Bank1 und Bank2 außerhalb der Schwellen lag (nur bei 2-Bank Systemen) |
| 0x25 | Vorsteuerung auf Bank1 außerhalb der Schwellen lag |
| 0x26 | Vorsteuerung auf Bank2 außerhalb der Schwellen lag |
| 0x30 | Motortemperatur noch zu gering ist |
| 0x31 | Wicklungstemperatur noch zu hoch ist |
| 0x32 | Fehler einer das Ergebnis beeinflussenden Komponente vorliegt |
| 0x33 | Motortemp., Ansauglufttemp. oder Kattemp. außerhalb der Grenzen, B_zslsp(2) noch nicht geloescht |
| 0x34 | Motorluftmasse außerhalb der Grenzen liegt |
| 0x35 | LSU(2) nicht Betriebsbereit, VVT umschaltet, r1 nicht im Diagnosefenster |
| 0x36 | Tankentlueftung aktiv ist |
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
| 0x01 | LSU Dynamikprüfung aktiv |
| 0x02 | LSU Prüfung abgeschlossen |
| 0x03 | LSU Prüfung abgeschlossen und noch aktiv |
| 0xXY | Status LSU-Diagnose kann nicht ausgegeben werden |

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
