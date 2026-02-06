# Kopie von me17n45.prg

## General

|  |  |
| --- | --- |
| File | Kopie von me17n45.prg |
| Type | PRG |
| Jobs | 224 |
| Tables | 77 |
| Origin | BMW EA-53 Juan Gimeno |
| Revision | 6.000 |
| Author | BMW EA-53 Gimeno |
| ECU Comment | ME17.2.1 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME17_2_1 |  |  |
| ORIGIN | string | BMW EA-53 Juan Gimeno |  |  |
| REVISION | string | 6.000 |  |  |
| AUTHOR | string | BMW EA-53 Gimeno |  |  |
| COMMENT | string | ME17.2.1 |  |  |
| PACKAGE | string | 1.43 |  |  |
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

### STATUS_EWS

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC000 Zurücklesen verschiedener interner Stati für EWS

_No arguments._

### STATUS_EWS4_SK

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC002 Lesen des SecretKey des Server sowie Client für EWS4

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben KWP 2000: $2E ReadDataByCommonIdentifier CommonIdentifier=0xC001

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK |
| DATA | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

### _STEUERN_EWS4_E_SK_MEX17

17 "EWS4-data" schreiben KWP 2000: $2E ReadDataByCommonIdentifier CommonIdentifier=0xC001 Schreiben Entwicklungs-SecretKey MEx17 V1.0 !!!

_No arguments._

### DATA_ID_LESEN

Data-ID des SG auslesen

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

### STATUS_OELSENSOR

Temperatur, Niveau, Permitivitaet

_No arguments._

### _TESTER

Ausfuehren eines Telegramms mit Uebergabe nur der Daten 

| Name | Type | Description |
| --- | --- | --- |
| REQUEST | binary | Daten ohne Header  |

### STATUS_BETRIEBSSTUNDENZAEHLER

Status Betriebsstundenzaehler auslesen

_No arguments._

### _STATUS_BZEINFO

0x22401A _STATUS_BZEINFO Infospeicher Batterie Zustands Erkennung (BZE) auslesen Klemme 15 ein KL15_ON

_No arguments._

### _STATUS_GENINFO

0x22401B _STATUS_GENINFO Infospeicher Generatordiagnose erweitert auslesen Klemme 15 ein KL15_ON

_No arguments._

### ECU_CONFIG

0x30F201 ECU_CONFIG Variante auslesen Klemme 15 ein KL15_ON

_No arguments._

### ECU_CONFIG_RESET

0x30F204 ECU_CONFIG_RESET Variante loeschen nur bei Motordrehzahl n=0 N_EQ_ZERO

_No arguments._

### INNENTEMP_LESEN

0x301001 INNENTEMP_LESEN Steuergeraete-Innentemperatur auslesen Klemme 15 ein KL15_ON

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

0x3125 START_SYSTEMCHECK_EVAUSBL Ansteuern Diagnosefunktion Einspritzventilausblendung Klemme 15 = EIN und Motorstatus = Leerlauf CON_EVAUSBL

| Name | Type | Description |
| --- | --- | --- |
| EV_AUS_WERT | unsigned long | EV-Ausblendmaske bei Testeranforderung (A2L-Name: devoff) devoff   Min: 0 Max: 255 |

### START_SYSTEMCHECK_GEN

0x312A START_SYSTEMCHECK_GEN Diagnosefunktion Generatortest Klemme 15 ein KL15_ON

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

0x31D9 START_SYSTEMCHECK_L_REGELUNG_AUS Ansteuerung Lambdaregelung deaktivieren Klemme 15 ein KL15_ON

_No arguments._

### START_SYSTEMCHECK_LLERH

0x3126 START_SYSTEMCHECK_LLERH Ansteuern Diagnosefunktion Leerlauf-Erhoehung nur bei Leerlauf-Drehzahl N_LL

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | unsigned long | Leerlaufsolldrehzahl, Funktionsanforderung Tester (A2L-Name: nsolfa) nsolfa   Einheit: 1/min   Min: 0 Max: 2550 |

### START_SYSTEMCHECK_PM_MESSEMODE

0x31F6 START_SYSTEMCHECK_PM_MESSEMODE Ansteuern Messemode Klemme 15 ein KL15_ON

_No arguments._

### STATUS_ABLL

0x30F001 STATUS_ABLL Abgleichwert LL (Leerlauf) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

0x300A01 STATUS_AN_LUFTTEMPERATUR Ansauglufttemperatur 1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_ANWS

0x30EE01 STATUS_ANWS Vanos Auslass Ventil auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_AVS

0x30C001 STATUS_AVS Absperrventil Saugstrahlpumpe auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_BLS

0x300201 STATUS_BLS Bremslichtschalter auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_BLTS

0x300301 STATUS_BLTS Bremslichttestschalter auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CODIERUNG_ASMOT

0x223260 STATUS_CODIERUNG_ASMOT Codierung elektrische Diagnose der Funktion Abschaltung Klemme 15 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CODIERUNG_BZE

0x223230 STATUS_CODIERUNG_BZE Codierung fuer BZE (Batterie Zustands Erkennung) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CODIERUNG_MIL

0x223000 STATUS_CODIERUNG_MIL Codierung fuer MIL (Malfunction Indication Lamp) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CODIERUNG_OEL

0x223200 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CODIERUNG_VMAX

0x223010 STATUS_CODIERUNG_VMAX Codierung fuer maximale Geschwindigkeit auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CODIERUNG_XENON

0x223211 STATUS_CODIERUNG_XENON Codierung fuer Xenon-Lichtverbau auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_CRAM

0x33E9 STATUS_CRAM Auslesen RAM-Backup-Werte loeschen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_DFAD

0x33D8 STATUS_DFAD Auslesen Gemischadaption sperren Klemme 15 ein KL15_ON

_No arguments._

### STATUS_DIGITAL_0

0x224007 STATUS_DIGITAL_0 Status Schaltzustaende 0 Klemme 15 ein KL15_ON

_No arguments._

### STATUS_DIGITAL_1

0x224002 STATUS_DIGITAL_1 Status Schaltzustaende 1 Klemme 15 ein KL15_ON

_No arguments._

### STATUS_DKAT

0x33EB STATUS_DKAT Auslesen Kurztest Kat Klemme 15 ein KL15_ON

_No arguments._

### STATUS_DKP_VOLT

0x302A01 STATUS_DKP_VOLT Drosselklappe auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_E_LUEFTER

0x30DA01 STATUS_E_LUEFTER E-Luefter auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EISYGD

0x33E1 STATUS_EISYGD Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EKP

0x30D801 STATUS_EKP Elektrische Kraftstoffpumpe 1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EML

0x30D601 STATUS_EML EML (Engine Malfunction Lamp) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_ENWS

0x30ED01 STATUS_ENWS Vanos Einlass Ventil auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EUP

0x30A501 STATUS_EUP Elektrische Unterdruckpumpe auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EV1

0x30E101 STATUS_EV1 Einspritzventil 1 (physikalisch) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EV2

0x30E201 STATUS_EV2 Einspritzventil 2 (physikalisch) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EV3

0x30E301 STATUS_EV3 Einspritzventil 3 (physikalisch) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_EV4

0x30E401 STATUS_EV4 Einspritzventil 4 (physikalisch) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_FASTA10

0x224015 STATUS_FASTA10 FASTA-Messwertblock 10 lesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_GAS

0x3332 STATUS_GAS Auslesen Grundadaption starten Klemme 15 ein KL15_ON

_No arguments._

### STATUS_KB1

0x303001 STATUS_KB1 Klopfbaustein 1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_KL15

0x300101 STATUS_KL15 Klemme 15 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_KRANN

0x33E3 STATUS_KRANN Auslesen Krann-Adaptionswerte (Anforderung aus CP5404) Klemme 15 ein KL15_ON

_No arguments._

### STATUS_KUP

0x300401 STATUS_KUP Kupplungsschalter auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_KVA

0x21C1 STATUS_KVA KraftstoffVerbrauchsAnzeige - Korrekturfaktor auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_L_SONDE

0x302101 STATUS_L_SONDE Lambdasonde vor Kat Bank1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_L_SONDE_H

0x302201 STATUS_L_SONDE_H Lambdasonde hinter Kat Bank1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_LSH1

0x30D001 STATUS_LSH1 Lambdasondenheizung vor Kat Bank1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_LSH2

0x30D101 STATUS_LSH2 Lambdasondenheizung hinter Kat Bank1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_LSHK

0x33ED STATUS_LSHK Auslesen Lamdasonden hinter Kat Klemme 15 ein KL15_ON

_No arguments._

### STATUS_LSVK

0x33E8 STATUS_LSVK Auslesen Lambdasonden vor Kat Klemme 15 ein KL15_ON

_No arguments._

### STATUS_MIL

0x30D401 STATUS_MIL MIL (Malfunction Indicator Lamp) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_MOTORTEMPERATUR

0x300C01 STATUS_MOTORTEMPERATUR Motortemperatur auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

0x224006 STATUS_NOCKENWELLE_ADAPTION Nockenwellenadationswerte auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_ODS

0x300501 STATUS_ODS Oeldruckschalter auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_OEL

0x300E01 STATUS_OEL Oelsensor auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

0x302801 STATUS_PWG_POTI_SPANNUNG Fahrerwunsch 1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_PWG2

0x302901 STATUS_PWG2 Fahrerwunsch 2 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_RUHESTROMMESSUNG

0x332B STATUS_RUHESTROMMESSUNG Auslesen Ruhestrompruefung mit IBS Klemme 15 ein KL15_ON

_No arguments._

### STATUS_SDF1

0x301801 STATUS_SDF1 Saugrohrdruck1 / Ladedruck1 auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_SYSTEMCHECK_EVAUSBL

0x3325 STATUS_SYSTEMCHECK_EVAUSBL Auslesen Diagnosefunktion EinspritzVentile EV-Ausblendung Klemme 15 ein KL15_ON

_No arguments._

### STATUS_SYSTEMCHECK_GEN

0x332A STATUS_SYSTEMCHECK_GEN Auslesen Diagnosefunktion Generatortest Klemme 15 ein KL15_ON

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

0x33D9 STATUS_SYSTEMCHECK_L_REGELUNG_AUS Auslesen Lambdaregelung ausschalten Klemme 15 ein KL15_ON

_No arguments._

### STATUS_SYSTEMCHECK_LLERH

0x3326 STATUS_SYSTEMCHECK_LLERH Auslesen Diagnosefunktion Leerlauf-Erhoehung Klemme 15 ein KL15_ON

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

0x33F6 STATUS_SYSTEMCHECK_PM_MESSEMODE Auslesen Messemode Klemme 15 ein KL15_ON

_No arguments._

### STATUS_TEV

0x30CF01 STATUS_TEV Tankentlueftungsventil auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_TGET

0x300F01 STATUS_TGET Getriebeoeltemperatur auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_TKA

0x300D01 STATUS_TKA Kuehlerauslasstemperatur auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_TTEMP

0x302F01 STATUS_TTEMP Taster Tempomat auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_TUMG

0x301101 STATUS_TUMG Umgebungstemperatur auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_UBAT

0x302701 STATUS_UBAT Batteriesensor auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_UBATT

0x301C01 STATUS_UBATT Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_UDF

0x301701 STATUS_UDF Umgebungsdruck auslesen Klemme 15 ein KL15_ON

_No arguments._

### STATUS_UGEN

0x303201 STATUS_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) auslesen Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ABLL

0x30F007 STEUERN_ABLL Abgleichwert LL (Leerlauf) vorgeben nur bei LL und Motor warm und Kupplung nicht getreten fuer AG: nur bei P,N Stellung und Bremse nicht betaetigt CON_ABL

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1_WERT | long | Drehzahlanhebung im Leerlauf 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL2_WERT | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL3_WERT | long | Drehzahlanhebung im Leerlauf zum Batterie laden 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL4_WERT | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL5_WERT | long | Drehzahlanhebung im Leerlauf mit Fahrstufe 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |

### STEUERN_ANWS

0x30EE07 STEUERN_ANWS Vanos Auslass Ventil ansteuern nur im Leerlauf und bei Motordrehzahl >1000 CON_ENWS/ANWS

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Tastverhaeltniss Vanos_A Ventil (A2L-Name: wnwatst) wnwatst   Einheit: Grad KW   Min: -102.4 Max: 101.6 |
| SW_TO_ANWS_WERT | unsigned long | Timeout Vanos_A Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_AVS

0x30C007 STEUERN_AVS Absperrventil Saugstrahlpumpe ansteuern nur bei Fahrzeuggeschwindigkeit v=0 V_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AVS_WERT | unsigned long | Tastverhaeltniss Absperrventil Saugstrahlpumpe 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_AVS_WERT | unsigned long | Timeout Absperrventil Saugstrahlpumpe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_CRAM

0x31E9 STEUERN_CRAM Ansteuern RAM-Backup-Werte loeschen nur bei Motordrehzahl n=0 N_EQ_ZERO

_No arguments._

### STEUERN_DEAKTIVIEREN_EKP1

0x3BC4 STEUERN_DEAKTIVIEREN_EKP1 Deaktivierung Elektrische Kraftstoffpumpe 1  - Deaktivierung wird durch Ansteuern oder Ansteuern beenden wieder aufgehoben Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| RV_EKP1_WERT | string | Deaktivierung Elektrische Kraftstoffpumpe 1 1BYTE_AKTIVIERUNG |

### STEUERN_DFAD

0x31D8 STEUERN_DFAD Ansteuern Gemischadaption sperren Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_DK

0x302A07 STEUERN_DK Drosselklappe ansteuern nur bei Motordrehzahl n=0 N_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Tastverhaeltniss Drosselklappe 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_DK_WERT | unsigned long | Timeout Drosselklappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DKAT

0x31EB STEUERN_DKAT Ansteuern Kurztest Kat nur bei laufenden Motor N_RUN

_No arguments._

### STEUERN_E_LUEFTER

0x30DA07 STEUERN_E_LUEFTER E-Luefter ansteuern Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE_WERT | real | Tastverhaeltniss E-Luefter Diagnoseeingriff (A2L-Name: tamldia) 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ELUE_WERT | unsigned long | Timeout E-Luefter 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EISYGD

0x31E1 STEUERN_EISYGD Ansteuern Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| WDK_IST_WERT | real | Aktueller Drosselklappenwinkel WDK_IST   Einheit: %   Min: -800 Max: 799.9755 |

### STEUERN_EKP

0x30D807 STEUERN_EKP Elektrische Kraftstoffpumpe 1 ansteuern  Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben nur bei Motordrehzahl n=0 N_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1_WERT | unsigned long | Stellglieddiagnose EKP: Eingriff Tester (A2L-Name: B_ekpet) 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_EKP1_WERT | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EML

0x30D607 STEUERN_EML EML (Engine Malfunction Lamp) ansteuern Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML_WERT | unsigned long | Ansteuerung EML (Engine Malfunction Lamp) (0: EML aus, 1: EML ein) 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_EML_WERT | unsigned long | Timeout EML (Engine Malfunction Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ENDE_ABLL

0x30F000 STEUERN_ENDE_ABLL Abgleichwert LL (Leerlauf) Vorgeben beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_ANWS

0x30EE00 STEUERN_ENDE_ANWS Vanos Auslass Ventil Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_AVS

0x30C000 STEUERN_ENDE_AVS Absperrventil Saugstrahlpumpe Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_DFAD

0x32D8 STEUERN_ENDE_DFAD Ende Gemischadaption sperren Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_DK

0x302A00 STEUERN_ENDE_DK Drosselklappe Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_DKAT

0x32EB STEUERN_ENDE_DKAT Ende Kurztest Kat Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_E_LUEFTER

0x30DA00 STEUERN_ENDE_E_LUEFTER E-Luefter Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EKP

0x30D800 STEUERN_ENDE_EKP Elektrische Kraftstoffpumpe 1 Ansteuerung beenden  Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EML

0x30D600 STEUERN_ENDE_EML EML (Engine Malfunction Lamp) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_ENWS

0x30ED00 STEUERN_ENDE_ENWS Vanos Einlass Ventil Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EUP

0x30A500 STEUERN_ENDE_EUP Elektrische Unterdruckpumpe Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EV1

0x30E100 STEUERN_ENDE_EV1 Einspritzventil 1 (physikalisch) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EV2

0x30E200 STEUERN_ENDE_EV2 Einspritzventil 2 (physikalisch) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EV3

0x30E300 STEUERN_ENDE_EV3 Einspritzventil 3 (physikalisch) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_EV4

0x30E400 STEUERN_ENDE_EV4 Einspritzventil 4 (physikalisch) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_GAS

0x3232 STEUERN_ENDE_GAS Ende Grundadaption starten Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_LSH1

0x30D000 STEUERN_ENDE_LSH1 Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_LSH2

0x30D100 STEUERN_ENDE_LSH2 Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_LSHK

0x32ED STEUERN_ENDE_LSHK Ende Lamdasonden hinter Kat Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_LSVK

0x32E8 STEUERN_ENDE_LSVK Ende Lambdasonden vor Kat Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_MIL

0x30D400 STEUERN_ENDE_MIL MIL (Malfunction Indicator Lamp) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_TEV

0x30CF00 STEUERN_ENDE_TEV Tankentlueftungsventil Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENDE_UGEN

0x303200 STEUERN_ENDE_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_ENERGIESPARMODE

0x310C STEUERN_ENERGIESPARMODE Energiesparmode aktivieren Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| EGY_WERT | unsigned long | recordLocalID 1BYTE IDENTICAL DEC EGY   Min: 0 Max: 3 |

### STEUERN_ENWS

0x30ED07 STEUERN_ENWS Vanos Einlass Ventil ansteuern nur im Leerlauf und bei Motordrehzahl >1000 CON_ENWS/ANWS

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS_WERT | real | Vorsteuerwert fuer Einlass-Nockenwellenwinkel (A2L-Name: wnwetst) wnwetst   Einheit: Grad KW   Min: -102.4 Max: 101.6 |
| SW_TO_ENWS_WERT | unsigned long | Timeout Vanos_E Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EUP

0x30A507 STEUERN_EUP Elektrische Unterdruckpumpe ansteuern nur bei Fahrzeuggeschwindigkeit v=0 V_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EUP_WERT | unsigned long | Tastverhaeltniss Elektrische Unterdruckpumpe 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_EUP_WERT | unsigned long | Timeout Elektrische Unterdruckpumpe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV1

0x30E107 STEUERN_EV1 Einspritzventil 1 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1_WERT | unsigned long | Periodendauer Einspritzventil 1 1BYTE in 0 bis 2550ms   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV1_WERT | real | Tastverhaeltniss Einspritzventil 1 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EV1_WERT | unsigned long | Timeout Einspritzventil 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV2

0x30E207 STEUERN_EV2 Einspritzventil 2 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2_WERT | unsigned long | Periodendauer Einspritzventil 2 1BYTE in 0 bis 2550ms   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV2_WERT | real | Tastverhaeltniss Einspritzventil 2 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EV2_WERT | unsigned long | Timeout Einspritzventil 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV3

0x30E307 STEUERN_EV3 Einspritzventil 3 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3_WERT | unsigned long | Periodendauer Einspritzventil 3 1BYTE in 0 bis 2550ms   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV3_WERT | real | Tastverhaeltniss Einspritzventil 3 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EV3_WERT | unsigned long | Timeout Einspritzventil 3 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EV4

0x30E407 STEUERN_EV4 Einspritzventil 4 (physikalisch) ansteuern nur bei Motordrehzahl n=0 und EKP aus CON_EV

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4_WERT | unsigned long | Periodendauer Einspritzventil 4 1BYTE in 0 bis 2550ms   Einheit: ms   Min: 0 Max: 2550 |
| SW_TV_EV4_WERT | real | Tastverhaeltniss Einspritzventil 4 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EV4_WERT | unsigned long | Timeout Einspritzventil 4 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GAS

0x3132 STEUERN_GAS Ansteuern Grundadaption starten nur bei laufenden Motor N_RUN

_No arguments._

### STEUERN_KRANN

0x31E3 STEUERN_KRANN Ansteuern Krann-Adaptionswerte (Anforderung aus CP5404) Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| RF_WERT | real | Relative Luftfuellung RF   Einheit: %   Min: -327.68 Max: 327.67 |
| TANS_WERT | real | Ansauglufttemperatur TANS   Einheit: C   Min: -3276.8 Max: 3276.7 |
| TMOT_WERT | real | Kuehlwassertemperatur TMOT   Einheit: C   Min: -327.68 Max: 327.67 |
| BA_IST_WERT | string | Istbetriebsart BA_IST   Min: 0 Max: 8 |

### STEUERN_KVA

0x3BC1 STEUERN_KVA KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | real | Umrechnung: 0x80 bis 0x7F in -0.128 bis 0.127 1BYTE in -0.128 bis 0.127   Min: -0.128 Max: 0.127 |

### STEUERN_LSH1

0x30D007 STEUERN_LSH1 Lambdasondenheizung vor Kat Bank1 ansteuern  Anmerk.: Aus Sicherheitsgruenden kann dieser Service die Lambdasondenheizung lediglich abschalten  es muss ein Tastverhaeltnis von 0% vorgegeben werden. nur bei Motordrehzahl >0 und Bedingung Lambdasonde einschaltbereit CON_LSH

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 100 Prozent   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH1_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH2

0x30D107 STEUERN_LSH2 Lambdasondenheizung hinter Kat Bank1 ansteuern nur bei Motordrehzahl >0 und Bedingung Lambdasonde einschaltbereit CON_LSH

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2_WERT | unsigned long | Bedingung Lambdasondenheizung hinter Kat Bank 1 ein Ã¼ber Tester (A2L-Name: B_hshet) 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_LSH2_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSHK

0x31ED STEUERN_LSHK Ansteuern Lamdasonden hinter Kat nur bei laufenden Motor N_RUN

_No arguments._

### STEUERN_LSVK

0x31E8 STEUERN_LSVK Ansteuern Lambdasonden vor Kat nur bei laufenden Motor N_RUN

_No arguments._

### STEUERN_MIL

0x30D407 STEUERN_MIL MIL (Malfunction Indicator Lamp) ansteuern Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL_WERT | unsigned long | Ansteuerung MIL (0: MIL aus, 1: MIL ein) 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_MIL_WERT | unsigned long | Timeout MIL (Malfunction Indicator Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_PROGRAMM_ABLL

0x30F008 STEUERN_PROGRAMM_ABLL Abgleichwert LL (Leerlauf) programmieren nur bei LL und Motor warm und Kupplung nicht getreten fuer AG: nur bei P,N Stellung und Bremse nicht betaetigt CON_ABL

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1_WERT | long | Drehzahlanhebung im Leerlauf 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL2_WERT | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL3_WERT | long | Drehzahlanhebung im Leerlauf zum Batterie laden 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL4_WERT | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |
| SW_ABLL5_WERT | long | Drehzahlanhebung im Leerlauf mit Fahrstufe 1BYTE in -256 bis +254 1/min (rpm)   Einheit: 1/min   Min: -256 Max: 254 |

### STEUERN_RESET_PMHIS

0x30F504 STEUERN_RESET_PMHIS Powermanagement Histogramm loeschen Klemme 15 ein KL15_ON

_No arguments._

### STEUERN_RUHESTROMMESSUNG

0x312B STEUERN_RUHESTROMMESSUNG Ansteuern Ruhestrompruefung mit IBS Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Eco_max_i   Einheit: A   Min: 0 Max: 0.3187 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Eco_msb   Einheit: s   Min: 0 Max: 12.75 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Eco_mz   Einheit: s   Min: 0 Max: 12.75 |
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: s   Min: 0 Max: 255 |

### STEUERN_TEV

0x30CF07 STEUERN_TEV Tankentlueftungsventil ansteuern Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV_WERT | unsigned long | Condition purge valve on by tester (A2L-Name: B_tevet) 1BYTE in 0 bis 100 Prozent DIGITAL   Min: 0 Max: 1 |
| SW_TO_TEV_WERT | unsigned long | Timeout Tankentlueftungsventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_UGEN

0x303207 STEUERN_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern Klemme 15 ein KL15_ON

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UGEN_WERT | real | Spannung Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) 2BYTE in -128 bis 128Volt   Einheit: V   Min: -127.99609375 Max: 127.99609375 |
| SW_TO_UGEN_WERT | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ZYK

0x3140 STEUERN_ZYK Ansteuern Zyklusflags

| Name | Type | Description |
| --- | --- | --- |
| TCNR_WERT | unsigned long | Umrechnung: 0x0000 bis 0xFFFE in 0 bis 65534 0xFFFF ungueltig  kann als Zaehler verwendet werden 2BYTE in 0 bis 65534   Min: 0 Max: 65534 |

### STOP_SYSTEMCHECK_EVAUSBL

0x3225 STOP_SYSTEMCHECK_EVAUSBL Ende Diagnosefunktion EinspritzVentile EV-Ausblendung Klemme 15 ein KL15_ON

_No arguments._

### STOP_SYSTEMCHECK_GEN

0x322A STOP_SYSTEMCHECK_GEN Diagnosefunktion Generatortest beenden Klemme 15 ein KL15_ON

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

0x32D9 STOP_SYSTEMCHECK_L_REGELUNG_AUS Ende Lambdaregelung ausschalten Klemme 15 ein KL15_ON

_No arguments._

### STOP_SYSTEMCHECK_LLERH

0x3226 STOP_SYSTEMCHECK_LLERH Diagnosefunktion Leerlauf-Erhoehung beenden Klemme 15 ein KL15_ON

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

0x32F6 STOP_SYSTEMCHECK_PM_MESSEMODE Ende Messemode Klemme 15 ein KL15_ON

_No arguments._

### IDENT_IBS

0x224021 IDENT_IBS Identifikationsdaten für IBS auslesen (BMW Nr, Seriennummer, SW/HW Index) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_1

0x224022 STATUS_SYSTEMCHECK_PM_INFO_1 Batterie Powermanagement Bytefeld 1 lesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_2

0x224023 STATUS_SYSTEMCHECK_PM_INFO_2 Batterie Powermanagement Bytefeld 2 lesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

0x2E5FF504 STEUERN_PM_HISTOGRAM_RESET Löschen der Powermanagement-Infofelder Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

0x3130001000 STEUERN_BATTERIETAUSCH_REGISTRIEREN Batterietausch registrieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

_No arguments._

### STATUS_LEMINFO

0x224017 STATUS_LEMINFO Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

_No arguments._

### STATUS_MOTORDREHZAHL

0x2CF0 4807 & 4808 STATUS_MOTORDREHZAHL Auslesen des Soll- und Istwertes der Motordrehzahl Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### IDENT_GEN

0x2CF0 IDENT_GEN Identifikationsdaten Generator Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_INT

0x2CF0 5A81 STATUS_INT Auslesen des Integrator Bank 1 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ADD

0x2CF0 5A8D STATUS_ADD Auslesen additive Gemischadaption Leerlauf Bank 1 und Bank 2 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MUL

0x2CF0 5A89, 5A8B STATUS_MUL Auslesen multiplikative Gemischadaption hohe und niedrige Last Bank 1 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SAUGROHR

0x2CF0 58E0, 58E1, 58E2, 58E3 STATUS_SAUGROHR Auslesen der Abgleichwerte Drosselklappenmodell und Einlassventil (Faktor und Offset) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORLAUFUNRUHE

0x2CF0 5A30, 5A31, 5A32, 5A33, 5A99, 5845 STATUS_MOTORLAUFUNRUHE Abfrage der Laufunruhewerte Zylinder 1 bis 4 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_GEBERRAD_ADAPTION

0x2CF0 0x5A95,0x5A96,0x5A99 STATUS_GEBERRAD_ADAPTION Auslesen der Adpationswerte der Nockenwellen Ein-/Auslass und überprüfen der Kurbelwellen Adaption Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE

STATUS_MESSWERTE Auslesen von Messwerten Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DIFFERENZDRUCKSENSOR

0x2CF0 4205 STATUS_DIFFERENZDRUCKSENSOR Werte des Differenzdrucksensors im Ansaugluftsystem Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE_VANOS

0x2CF0 0x4508,0x450B,0x4509,0x450A STATUS_MESSWERTE_VANOS Messwerte für Ist- und Sollwerte für Einlass- und Auslass-Spreizung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### LESEN_INDIVIDUALDATA_LISTE

Lesen eines Listeneintrags der Individualisierungsdaten KWP2000: $21 ReadDataByLocalIdentifier (not used) $01 recordLocalIdentifier (not used)

| Name | Type | Description |
| --- | --- | --- |
| ARG_LISTENTRY | unsigned int | Nummer des angeforderten Listenelements (0,1,2,...) 0x0000 = Anforderung, das 1. Listelement zu senden 0x0001 = Anforderung, das 2. Listelement zu senden |

### LESE_INDIVIDUALDATA

Lesen von Individualisierungsdaten Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der RET_DATA zugeordnet ist 0xFF	   Aktuell gesteckter Schlüssel ist RET_DATA zugeordnet (not used) |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Strategienummer 0x01	= PM Recovery 0x02	= AD Recovery |
| ARG_INQY_LEN | unsigned char | Länge des folgenden Anfragedatenstreams (not used) z.B. 0x02 für 2 Byte |
| ARG_INQY_DATA | string | ASCII-codiert Anfrage Individualdatenstream (not used) |
| ARG_RESP_LEN | unsigned char | Länge der folgenden Information wie die Antwort erhalten wird. Also ein Antwortfilter bzw. -hinweis (not used) |
| ARG_RESP_DATA | string | ASCII-codiert Information wie die Antwort erhalten wird: Also ein Antwortfilter bzw. -hinweis (not used) |

### SCHREIBEN_INDIVIDUALDATA

Schreiben von Individualisierungsdaten Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der ARG_DATA zugeordnet ist 0xFF	   Aktuell gesteckter Schlüssel ist ARG_DATA zugeordnet (not used) |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Strategienummer 0x01	= PM Recovery 0x02	= AD Recovery |
| ARG_STATUS | unsigned char | 0xFF letztes oder einziges element des Datenstreams 0x00 es folgen weitere Datenstreamstücke |
| ARG_WRITE_LEN | unsigned char | Länge des folgenden Schreibauftrags z.B. 0x02 für 2 Byte |
| ARG_WRITE_DATA | string | ASCII-codiert Schreibauftrag für Individualdatenstream (not used) |
| ARG_W_RESP_LEN | unsigned char | Optional, Laenge des folgenden Antwortfilters  (not used) z.B. 0x02 für 2 Byte |
| ARG_W_RESP_DATA | string | ASCII-codiert, Optional, Antwortfilter des Schreibauftrags (not used) |
| ARG_LEN | int | Länge des Individualisierungs Datenstream oder -streamstücks |
| ARG_DATA | string | ASCII-codiert Datenstream |

### ADAP_SELEKTIV_LOESCHEN

Löschen von Adaptionen und gelernte Varianten KWP 2000 $31 30 xx xx xx Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STATUS_READINESS

Auslesen Readiness Systemchecks

_No arguments._

### STATUS_MSARING

0x22401C STATUS_MSARING Ringspeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

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

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x5000 | PMA Sensor links | - |
| 0x5100 | PMA Sensor rechts | - |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x2715 | 0x2715 Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x273D | 0x273D Zündspule Zylinder 1, Zündkreisüberwachung |
| 0x273E | 0x273E Zündspule Zylinder 3, Zündkreisüberwachung |
| 0x273F | 0x273F Zündspule Zylinder 4, Zündkreisüberwachung |
| 0x2740 | 0x2740 Zündspule Zylinder 2, Zündkreisüberwachung |
| 0x2755 | 0x2755 Kraftstoff-Füllstandsgeber |
| 0x2756 | 0x2756 Kraftstoff-Füllstandsgeber |
| 0x2757 | 0x2757 Kraftstoff-Füllstandsgeber |
| 0x2758 | 0x2758 Kraftstoff-Füllstandsgeber |
| 0x275D | 0x275D Kraftstoff-Füllstandsgeber |
| 0x275E | 0x275E Kraftstoff-Füllstandsgeber |
| 0x275F | 0x275F Kraftstoff-Füllstandsgeber |
| 0x276A | 0x276A Katalysatorkonvertierung |
| 0x276D | 0x276D Kraftstoffpumpe, Ansteuerung |
| 0x276E | 0x276E Kraftstoffpumpe, Ansteuerung |
| 0x2770 | 0x2770 Kraftstoffpumpe, Ansteuerung |
| 0x2771 | 0x2771 Verbrennungsaussetzer, Zylinder 1 |
| 0x2772 | 0x2772 Verbrennungsaussetzer, Zylinder 1 |
| 0x2773 | 0x2773 Verbrennungsaussetzer, Zylinder 1 |
| 0x2775 | 0x2775 Verbrennungsaussetzer, Zylinder 3 |
| 0x2776 | 0x2776 Verbrennungsaussetzer, Zylinder 3 |
| 0x2777 | 0x2777 Verbrennungsaussetzer, Zylinder 3 |
| 0x2779 | 0x2779 Verbrennungsaussetzer, Zylinder 4 |
| 0x277A | 0x277A Verbrennungsaussetzer, Zylinder 4 |
| 0x277B | 0x277B Verbrennungsaussetzer, Zylinder 4 |
| 0x277D | 0x277D Verbrennungsaussetzer, Zylinder 2 |
| 0x277E | 0x277E Verbrennungsaussetzer, Zylinder 2 |
| 0x277F | 0x277F Verbrennungsaussetzer, Zylinder 2 |
| 0x2781 | 0x2781 Verbrennungsaussetzer, mehrere Zylinder |
| 0x2782 | 0x2782 Verbrennungsaussetzer, mehrere Zylinder |
| 0x2783 | 0x2783 Verbrennungsaussetzer, mehrere Zylinder |
| 0x2789 | 0x2789 Gemischadaption im Leerlauf pro Zeit |
| 0x278A | 0x278A Gemischadaption im Leerlauf pro Zeit |
| 0x27B1 | 0x27B1 Tankentlüftungsventil, Ansteuerung |
| 0x27B2 | 0x27B2 Tankentlüftungsventil, Ansteuerung |
| 0x27B4 | 0x27B4 Tankentlüftungsventil, Ansteuerung |
| 0x27C4 | 0x27C4 Kraftstoff-Füllstandsgeber 2 |
| 0x27C5 | 0x27C5 Kraftstoff-Füllstandsgeber 2 |
| 0x27C6 | 0x27C6 Kraftstoff-Füllstandsgeber 2 |
| 0x283D | 0x283D VANOS, Auslass: Adaption Anschlag |
| 0x2840 | 0x2840 VANOS-Magnetventil Auslass, Ansteuerung |
| 0x2841 | 0x2841 VANOS-Magnetventil Auslass, Ansteuerung |
| 0x2842 | 0x2842 VANOS-Magnetventil Auslass, Ansteuerung |
| 0x2845 | 0x2845 VANOS, Auslass: Stellerbewegung |
| 0x2870 | 0x2870 VANOS, Einlass: Adaption Anschlag |
| 0x2877 | 0x2877 VANOS-Magnetventil Einlass, Ansteuerung |
| 0x2878 | 0x2878 VANOS-Magnetventil Einlass, Ansteuerung |
| 0x287A | 0x287A VANOS-Magnetventil Einlass, Ansteuerung |
| 0x287D | 0x287D VANOS, Einlass: Stellerbewegung |
| 0x2888 | 0x2888 Valvetronic, Minimalhub |
| 0x2968 | 0x2968 Einlassnockenwellensensor |
| 0x296A | 0x296A Einlassnockenwellensensor |
| 0x296B | 0x296B Auslassnockenwellensensor |
| 0x296D | 0x296D Auslassnockenwellensensor |
| 0x296E | 0x296E Kurbelwellensensor |
| 0x296F | 0x296F Kurbelwellensensor |
| 0x2978 | 0x2978 Elektrolüfter, Ansteuerung |
| 0x2979 | 0x2979 Elektrolüfter, Ansteuerung |
| 0x297B | 0x297B Elektrolüfter, Ansteuerung |
| 0x2982 | 0x2982 Einlassnockenwellensensor |
| 0x2983 | 0x2983 Einlassnockenwellensensor |
| 0x2986 | 0x2986 Auslassnockenwellensensor |
| 0x2987 | 0x2987 Auslassnockenwellensensor |
| 0x2A35 | 0x2A35 Lambdasonde vor Katalysator, Dynamik |
| 0x2A47 | 0x2A47 Lambdasonde vor Katalysator, Heizereinkopplung |
| 0x2A50 | 0x2A50 Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2A51 | 0x2A51 Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2A53 | 0x2A53 Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2A56 | 0x2A56 Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2A60 | 0x2A60 Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2A61 | 0x2A61 Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2A63 | 0x2A63 Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2A64 | 0x2A64 Lambdasondenbeheizung vor Katalysator, Funktion |
| 0x2A66 | 0x2A66 Lambdasondenbeheizung vor Katalysator, Funktion |
| 0x2A67 | 0x2A67 Lambdasondenbeheizung vor Katalysator, Funktion |
| 0x2A6C | 0x2A6C DME, interner Fehler |
| 0x2A6D | 0x2A6D DME, interner Fehler |
| 0x2A6E | 0x2A6E DME, interner Fehler |
| 0x2A6F | 0x2A6F DME, interner Fehler |
| 0x2A74 | 0x2A74 Lambdasonde nach Katalysator, Alterung |
| 0x2A75 | 0x2A75 Lambdasonde nach Katalysator, Alterung |
| 0x2A77 | 0x2A77 Lambdasonde nach Katalysator, Alterung |
| 0x2A7C | 0x2A7C Lambdasonde nach Katalysator, elektrisch |
| 0x2A7D | 0x2A7D Lambdasonde nach Katalysator, elektrisch |
| 0x2A7E | 0x2A7E Lambdasonde nach Katalysator, elektrisch |
| 0x2A7F | 0x2A7F Lambdasonde nach Katalysator, elektrisch |
| 0x2A8B | 0x2A8B Lambdasonde vor Katalysator, Abgleichleitung |
| 0x2A90 | 0x2A90 Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2A92 | 0x2A92 Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2A93 | 0x2A93 Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2A98 | 0x2A98 Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2A99 | 0x2A99 Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2AA3 | 0x2AA3 Lambdasonde vor Katalysator, Nernstleitung |
| 0x2AAB | 0x2AAB Lambdasonde vor Katalysator, virtuelle Masse |
| 0x2AB4 | 0x2AB4 Lambdasonde vor Katalysator, elektrisch |
| 0x2AC1 | 0x2AC1 Lambdasonde vor Katalysator, Plausibilität |
| 0x2AC2 | 0x2AC2 Lambdasonde vor Katalysator, Plausibilität |
| 0x2AC3 | 0x2AC3 Lambdasonde vor Katalysator, Plausibilität |
| 0x2AC4 | 0x2AC4 Lambdasonde vor Katalysator, Plausibilität |
| 0x2ACB | 0x2ACB Lambdasonde vor Katalysator,  Anschluss |
| 0x2ACD | 0x2ACD Lambdasonde nach Katalysator, Dynamik im Schubbetrieb |
| 0x2AD2 | 0x2AD2 Lambdasonde nach Katalysator, Dynamik im Schubbetrieb |
| 0x2AF8 | 0x2AF8 Fahrpedalmodul, Plausibilität |
| 0x2AF9 | 0x2AF9 Differenzdrucksensor Saugrohr, Signal |
| 0x2AFA | 0x2AFA Differenzdrucksensor Saugrohr, Signal |
| 0x2AFC | 0x2AFC Differenzdrucksensor Saugrohr, Signal |
| 0x2B01 | 0x2B01 Drosselklappenpotenziometer 1 |
| 0x2B02 | 0x2B02 Drosselklappenpotenziometer 1 |
| 0x2B03 | 0x2B03 Drosselklappenpotenziometer 1 |
| 0x2B05 | 0x2B05 Drosselklappenpotenziometer 2 |
| 0x2B06 | 0x2B06 Drosselklappenpotenziometer 2 |
| 0x2B07 | 0x2B07 Drosselklappenpotenziometer 2 |
| 0x2B0B | 0x2B0B Drosselklappenpotenziometer |
| 0x2B15 | 0x2B15 Differenzdrucksensor Saugrohr,  Plausibilität |
| 0x2B16 | 0x2B16 Differenzdrucksensor Saugrohr,  Plausibilität |
| 0x2B1D | 0x2B1D Drosselklappensteller, Ansteuerung |
| 0x2B1E | 0x2B1E Drosselklappensteller, Ansteuerung |
| 0x2B1F | 0x2B1F Drosselklappensteller, Ansteuerung |
| 0x2B20 | 0x2B20 Drosselklappensteller, Ansteuerung |
| 0x2B21 | 0x2B21 Drosselklappensteller, schliessende Federprüfung |
| 0x2B22 | 0x2B22 Drosselklappensteller, schliessende Federprüfung |
| 0x2B25 | 0x2B25 Drosselklappensteller, öffnende Federprüfung |
| 0x2B26 | 0x2B26 Drosselklappensteller, öffnende Federprüfung |
| 0x2B2B | 0x2B2B Drosselklappensteller, Positionsüberwachung |
| 0x2B2F | 0x2B2F Drosselklappensteller, Notluftpunkt |
| 0x2B31 | 0x2B31 Drosselklappensteller, Regelbereich |
| 0x2B32 | 0x2B32 Drosselklappensteller, Regelbereich |
| 0x2B37 | 0x2B37 Drosselklappensteller |
| 0x2B39 | 0x2B39 Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2B3A | 0x2B3A Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2B3F | 0x2B3F Drosselklappensteller, Prüfung unterer Anschlag |
| 0x2B43 | 0x2B43 Drosselklappensteller, unterer mechanischer Anschlag: Abbruch beim Wiederlernen |
| 0x2B47 | 0x2B47 Drosselklappensteller, Verstärkerabgleich |
| 0x2B49 | 0x2B49 Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2B4A | 0x2B4A Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2B4B | 0x2B4B Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2B4C | 0x2B4C Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2B4D | 0x2B4D Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2B4E | 0x2B4E Fahrpedalmodul, Pedalwertgeber |
| 0x2B65 | 0x2B65 Luftmassenstrom 2, Plausibilität |
| 0x2B66 | 0x2B66 Luftmassenstrom 2, Plausibilität |
| 0x2B67 | 0x2B67 Luftmassenstrom, Plausibilität |
| 0x2B68 | 0x2B68 Luftmassenstrom, Plausibilität |
| 0x2B7A | 0x2B7A Luftmassenstromabgleich |
| 0x2BC0 | 0x2BC0 DME, interner Fehler |
| 0x2BC1 | 0x2BC1 DME, interner Fehler |
| 0x2BC2 | 0x2BC2 DME, interner Fehler |
| 0x2BC3 | 0x2BC3 DME, interner Fehler |
| 0x2BC4 | 0x2BC4 DME, interner Fehler |
| 0x2BC5 | 0x2BC5 DME, interner Fehler |
| 0x2BC6 | 0x2BC6 DME, interner Fehler |
| 0x2BC7 | 0x2BC7 DME, interner Fehler |
| 0x2BC8 | 0x2BC8 DME, interner Fehler |
| 0x2BC9 | 0x2BC9 Klemme 15, Überwachung |
| 0x2BCA | 0x2BCA Klemme 15, Überwachung |
| 0x2BCB | 0x2BCB Überwachung Motordrehmoment-Begrenzung |
| 0x2BCC | 0x2BCC DME, interner Fehler |
| 0x2BCD | 0x2BCD DME, interner Fehler |
| 0x2BCE | 0x2BCE DME, interner Fehler |
| 0x2BCF | 0x2BCF DME, interner Fehler: Watchdog-Ausgang |
| 0x2BD0 | 0x2BD0 DME, interner Fehler: Watchdog-Ausgang |
| 0x2BD1 | 0x2BD1 DME, interner Fehler: Watchdog-Ausgang |
| 0x2BD2 | 0x2BD2 Überwachung Versorgungsspannung 1, Sensor CY320 |
| 0x2BD3 | 0x2BD3 Überwachung Versorgungsspannung 2,  Sensor CY320 |
| 0x2BD4 | 0x2BD4 Überwachung Versorgungsspannung 3, Sensor CY320 |
| 0x2BD9 | 0x2BD9 DME, interner Fehler |
| 0x2BDA | 0x2BDA DME, interner Fehler |
| 0x2BDD | 0x2BDD DME, interner Fehler |
| 0x2BDE | 0x2BDE DME, interner Fehler |
| 0x2BDF | 0x2BDF DME, interner Fehler |
| 0x2BE0 | 0x2BE0 DME, interner Fehler |
| 0x2BE1 | 0x2BE1 DME, interner Fehler |
| 0x2BE2 | 0x2BE2 DME, interner Fehler |
| 0x2BE3 | 0x2BE3 DME, interner Fehler |
| 0x2BE4 | 0x2BE4 DME, interner Fehler |
| 0x2BE5 | 0x2BE5 DME, interner Fehler |
| 0x2BE6 | 0x2BE6 DME, interner Fehler |
| 0x2BE8 | 0x2BE8 DME, interner Fehler |
| 0x2BE9 | 0x2BE9 DME, interner Fehler |
| 0x2BEA | 0x2BEA DME, interner Fehler |
| 0x2C88 | 0x2C88 Multifunktionslenkrad, Kommunikation |
| 0x2C89 | 0x2C89 Multifunktionslenkrad, Kommunikation |
| 0x2C8A | 0x2C8A Multifunktionslenkrad, Kommunikation |
| 0x2C8B | 0x2C8B Multifunktionslenkrad, Kommunikation |
| 0x2C8D | 0x2C8D Powermanagement, Batterieüberwachung |
| 0x2C8E | 0x2C8E Powermanagement, Batterieüberwachung |
| 0x2C90 | 0x2C90 Powermanagement, Bordnetzüberwachung |
| 0x2C91 | 0x2C91 Powermanagement, Bordnetzüberwachung |
| 0x2C93 | 0x2C93 Powermanagement, Bordnetzüberwachung |
| 0x2C96 | 0x2C96 Powermanagement, Ruhestromverletzung |
| 0x2C9C | 0x2C9C Bordnetzspannung, DME-Hauptrelais |
| 0x2C9D | 0x2C9D Bordnetzspannung, DME-Hauptrelais |
| 0x2C9E | 0x2C9E Bordnetzspannung, DME-Hauptrelais |
| 0x2D53 | 0x2D53 Klopfregelung, Fehlerprüfung |
| 0x2D54 | 0x2D54 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2D55 | 0x2D55 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2D57 | 0x2D57 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2D58 | 0x2D58 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2D59 | 0x2D59 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2D5A | 0x2D5A Einspritzventil Zylinder 3, Ansteuerung |
| 0x2D5C | 0x2D5C Einspritzventil Zylinder 4, Ansteuerung |
| 0x2D5D | 0x2D5D Einspritzventil Zylinder 4, Ansteuerung |
| 0x2D5F | 0x2D5F Einspritzventil Zylinder 4, Ansteuerung |
| 0x2D60 | 0x2D60 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2D61 | 0x2D61 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2D63 | 0x2D63 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2D8B | 0x2D8B Klopfsensor, elektrisch |
| 0x2D8C | 0x2D8C Klopfsensor, elektrisch |
| 0x2D8D | 0x2D8D Klopfsensor, elektrisch |
| 0x2D8E | 0x2D8E Klopfsensor, elektrisch |
| 0x2D8F | 0x2D8F Klopfsensor 2, elektrisch |
| 0x2D90 | 0x2D90 Klopfsensor 2, elektrisch |
| 0x2D91 | 0x2D91 Klopfsensor 2, elektrisch |
| 0x2D92 | 0x2D92 Klopfsensor 2, elektrisch |
| 0x2D9B | 0x2D9B Klopfsensor, Signal |
| 0x2D9C | 0x2D9C Klopfsensor, Signal |
| 0x2D9F | 0x2D9F Klopfsensor 2, Signal |
| 0x2DA0 | 0x2DA0 Klopfsensor 2, Signal |
| 0x2DC6 | 0x2DC6 Zündkreis, Versorgungsspannung |
| 0x2E1C | 0x2E1C Generator, Kommunikation |
| 0x2E20 | 0x2E20 Generator, Plausibilität:elektrisch |
| 0x2E24 | 0x2E24 Generator, elektrisch |
| 0x2E28 | 0x2E28 Generator, Plausibilität: Temperatur |
| 0x2E2C | 0x2E2C Generator, Übertemperatur |
| 0x2E30 | 0x2E30 Generator |
| 0x2E31 | 0x2E31 Generator |
| 0x2E32 | 0x2E32 Generator |
| 0x2E33 | 0x2E33 Generator |
| 0x2E34 | 0x2E34 Generator, mechanisch |
| 0x2E38 | 0x2E38 Generator, Regler falsch |
| 0x2E3C | 0x2E3C Generator, Typ falsch |
| 0x2E40 | 0x2E40 Intelligenter Batteriesensor, Eigendiagnose 2 |
| 0x2E42 | 0x2E42 Intelligenter Batteriesensor, Eigendiagnose 2 |
| 0x2E43 | 0x2E43 Intelligenter Batteriesensor, Eigendiagnose 2 |
| 0x2E44 | 0x2E44 Intelligenter Batteriesensor, Signalübertragung |
| 0x2E46 | 0x2E46 Intelligenter Batteriesensor, Signalübertragung |
| 0x2E47 | 0x2E47 Intelligenter Batteriesensor, Signalübertragung |
| 0x2E48 | 0x2E48 Intelligenter Batteriesensor, Eigendiagnose 1 |
| 0x2E4A | 0x2E4A Intelligenter Batteriesensor, Eigendiagnose 1 |
| 0x2E4B | 0x2E4B Intelligenter Batteriesensor, Eigendiagnose 1 |
| 0x2E4F | 0x2E4F BSD-Botschaft vom intelligenten Batteriesensor fehlt |
| 0x2E5F | 0x2E5F BSD-Botschaft vom Ölzustandssensor fehlt |
| 0x2EE9 | 0x2EE9 Motoröltemperatur, EGS-Zwangshochschaltung |
| 0x2EF1 | 0x2EF1 Ansauglufttemperatursensor, Signal |
| 0x2EF2 | 0x2EF2 Ansauglufttemperatursensor, Signal |
| 0x2F09 | 0x2F09 Temperatursensor Kühleraustritt, Signal |
| 0x2F0A | 0x2F0A Temperatursensor Kühleraustritt, Signal |
| 0x2F19 | 0x2F19 Kühlmitteltemperatursensor, Signal |
| 0x2F1A | 0x2F1A Kühlmitteltemperatursensor, Signal |
| 0x2F25 | 0x2F25 Umgebungstemperatursensor, Signal |
| 0x2F26 | 0x2F26 Umgebungstemperatursensor, Signal |
| 0x2F28 | 0x2F28 Umgebungstemperatursensor, Signal |
| 0x2FAA | 0x2FAA Bremslichtschalter |
| 0x2FAC | 0x2FAC Motorabstellzeit, Plausibilität |
| 0x2FAD | 0x2FAD Motorabstellzeit, Plausibilität |
| 0x2FB7 | 0x2FB7 Energiesparmodus |
| 0x2FC1 | 0x2FC1 Kupplungsschalter, Signal |
| 0x2FC4 | 0x2FC4 Öldruckschalter, Plausibilität |
| 0x2FC5 | 0x2FC5 DME, interner Fehler |
| 0x2FC6 | 0x2FC6 DME, interner Fehler |
| 0x2FD1 | 0x2FD1 Ölzustandssensor |
| 0x2FD2 | 0x2FD2 Ölzustandssensor |
| 0x2FD3 | 0x2FD3 Ölzustandssensor |
| 0x2FD4 | 0x2FD4 Ölzustandssensor |
| 0x2FD5 | 0x2FD5 EWS-Manipulationsschutz |
| 0x2FD6 | 0x2FD6 EWS-Manipulationsschutz |
| 0x2FD7 | 0x2FD7 EWS-Manipulationsschutz |
| 0x2FD9 | 0x2FD9 Schnittstelle EWS-DME |
| 0x2FDA | 0x2FDA Schnittstelle EWS-DME |
| 0x2FDB | 0x2FDB Schnittstelle EWS-DME |
| 0x2FDC | 0x2FDC Schnittstelle EWS-DME |
| 0x2FDD | 0x2FDD DME interner Fehler |
| 0x2FDE | 0x2FDE DME interner Fehler |
| 0x2FDF | 0x2FDF DME interner Fehler |
| 0x2FE0 | 0x2FE0 DME interner Fehler |
| 0x2FE2 | 0x2FE2 Botschaft EWS-DME fehlerhaft |
| 0x2FE4 | 0x2FE4 Botschaft EWS-DME fehlerhaft |
| 0x2FEA | 0x2FEA Schlechtwegstreckenerkennung |
| 0x2FED | 0x2FED Schlechtwegstreckenerkennung |
| 0x2FEF | 0x2FEF Thermischer Ölniveausensor |
| 0x2FF0 | 0x2FF0 Thermischer Ölniveausensor |
| 0x2FF1 | 0x2FF1 Thermischer Ölniveausensor |
| 0x2FF2 | 0x2FF2 DME,  interner Fehler |
| 0x2FF3 | 0x2FF3 DME,  interner Fehler |
| 0x2FF4 | 0x2FF4 Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2FF5 | 0x2FF5 Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2FF6 | 0x2FF6 Fahrzeuggeschwindigkeit, Signal |
| 0x2FF8 | 0x2FF8 Fahrzeuggeschwindigkeit, Signal |
| 0x2FFF | 0x2FFF Fahrzeuggeschwindigkeit, Plausibilität |
| 0x300C | 0x300C Saugstrahlpumpe, Bremskraftverstärker: Ansteuerung |
| 0x300D | 0x300D Saugstrahlpumpe, Bremskraftverstärker: Ansteuerung |
| 0x300F | 0x300F Saugstrahlpumpe, Bremskraftverstärker: Ansteuerung |
| 0x3010 | 0x3010 Elektrische Unterdruckpumpe, Bremskraftverstärker: Ansteuerung |
| 0x3011 | 0x3011 Elektrische Unterdruckpumpe, Bremskraftverstärker: Ansteuerung |
| 0x3012 | 0x3012 Elektrische Unterdruckpumpe, Bremskraftverstärker: Ansteuerung |
| 0x3034 | 0x3034 DME-Hauptrelais |
| 0x3035 | 0x3035 DME-Hauptrelais |
| 0x3038 | 0x3038 Batteriespannung, DME-Hauptrelais |
| 0x3039 | 0x3039 Batteriespannung, DME-Hauptrelais |
| 0x303E | 0x303E Kodierung, fehlt |
| 0x3048 | 0x3048 Klemme 15 Abschaltung, Ansteuerung |
| 0x3049 | 0x3049 Klemme 15 Abschaltung, Ansteuerung |
| 0x304A | 0x304A Klemme 15 Abschaltung, Ansteuerung |
| 0x3090 | 0x3090 PT-CAN Kommunikationsfehler |
| 0x3091 | 0x3091 PT-CAN Kommunikationsfehler |
| 0x3094 | 0x3094 CAN-Botschaft DSC |
| 0x3095 | 0x3095 CAN-Botschaft DSC |
| 0x3096 | 0x3096 CAN-Botschaft DSC fehlt |
| 0x3097 | 0x3097 CAN-Botschaft EGS |
| 0x3098 | 0x3098 CAN-Botschaft EGS |
| 0x3099 | 0x3099 CAN-Botschaft EGS fehlt |
| 0x309D | 0x309D CAN-Botschaft IHKA fehlt |
| 0x309F | 0x309F CAN-Botschaft KOMBI |
| 0x30A0 | 0x30A0 CAN-Botschaft KOMBI |
| 0x30A1 | 0x30A1 CAN-Botschaft KOMBI fehlt |
| 0x30A4 | 0x30A4 CAN-Botschaft SZL |
| 0x30A5 | 0x30A5 CAN-Botschaft SZL |
| 0x30A6 | 0x30A6 CAN-Botschaft SZL fehlt |
| 0x3131 | 0x3131 Botschaft (Fahrzeugmodus, 315) |
| 0x3132 | 0x3132 Botschaft (Fahrzeugmodus, 315) fehlt |
| 0x3145 | 0x3145 Botschaft (Klemmenstatus, 130) |
| 0x3146 | 0x3146 Botschaft (Klemmenstatus, 130) fehlt |
| 0x314A | 0x314A Botschaft (Lenkradwinkel, C4) fehlt |
| 0x314E | 0x314E Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0x3152 | 0x3152 Botschaft (Powermanagement Ladespannung, 334) |
| 0x3162 | 0x3162 Botschaft (Status Rückwärtsgang, 3B0) fehlt |
| 0x316E | 0x316E Botschaft (Status Crashabschaltung EKP, 135) fehlt |
| 0x3177 | 0x3177 Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0x3179 | 0x3179 Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0x317A | 0x317A Botschaft (Anforderung Radmoment Antriebstrang,  BF) fehlt |
| 0x317E | 0x317E Botschaft (Uhrzeit/ Datum, 2F8) fehlt |
| 0x3182 | 0x3182 Botschaft (Status Anhänger, 2E4) fehlt |
| 0x31A2 | 0x31A2 Botschaft (Status Standverbraucher, 5E0) |
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
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x2715 | 0x580C | 0x5805 | 0x583B | 0x5813 |
| 0x273D | 0x580C | 0x5805 | 0x5804 | 0x580E |
| 0x273E | 0x580C | 0x5805 | 0x5804 | 0x580E |
| 0x273F | 0x580C | 0x5805 | 0x5804 | 0x580E |
| 0x2740 | 0x580C | 0x5805 | 0x5804 | 0x580E |
| 0x2755 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x2756 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x2757 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x2758 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x275D | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x275E | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x275F | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x276A | 0x581F | 0x5818 | 0x5849 | 0x5889 |
| 0x276D | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x276E | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2770 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2771 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2772 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2773 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2775 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2776 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2777 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2779 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x277A | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x277B | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x277D | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x277E | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x277F | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2781 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2782 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2783 | 0x580C | 0x5813 | 0x5805 | 0x5800 |
| 0x2789 | 0x580C | 0x5813 | 0x583B | 0x5806 |
| 0x278A | 0x580C | 0x5813 | 0x583B | 0x5806 |
| 0x27B1 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x27B2 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x27B4 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x27C4 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x27C5 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x27C6 | 0x583B | 0x5815 | 0x5867 | 0x580D |
| 0x283D | 0x580C | 0x5815 | 0x5813 | 0x581C |
| 0x2840 | 0x580C | 0x5815 | 0x5813 | 0x581C |
| 0x2841 | 0x580C | 0x5815 | 0x5813 | 0x581C |
| 0x2842 | 0x580C | 0x5815 | 0x5813 | 0x581C |
| 0x2845 | 0x580C | 0x5815 | 0x5813 | 0x581C |
| 0x2870 | 0x580C | 0x5815 | 0x5813 | 0x581A |
| 0x2877 | 0x580C | 0x5815 | 0x5813 | 0x581A |
| 0x2878 | 0x580C | 0x5815 | 0x5813 | 0x581A |
| 0x287A | 0x580C | 0x5815 | 0x5813 | 0x581A |
| 0x287D | 0x580C | 0x5815 | 0x5813 | 0x581A |
| 0x2888 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2968 | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x296A | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x296B | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x296D | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x296E | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x296F | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2978 | 0x580C | 0x5805 | 0x5815 | 0x587F |
| 0x2979 | 0x580C | 0x5805 | 0x5815 | 0x587F |
| 0x297B | 0x580C | 0x5805 | 0x5815 | 0x587F |
| 0x2982 | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x2983 | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x2986 | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x2987 | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x2A35 | 0x5889 | 0x5827 | 0x5845 | 0x5830 |
| 0x2A47 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A50 | 0x5829 | 0x5800 | 0x585E | 0x585C |
| 0x2A51 | 0x5829 | 0x5800 | 0x585E | 0x585C |
| 0x2A53 | 0x5829 | 0x5800 | 0x585E | 0x585C |
| 0x2A56 | 0x5829 | 0x5800 | 0x585E | 0x585C |
| 0x2A60 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A61 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A63 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A64 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A66 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A67 | 0x5827 | 0x5800 | 0x5863 | 0x5860 |
| 0x2A6C | 0x580C | 0x5815 | 0x5845 | 0x5855 |
| 0x2A6D | 0x580C | 0x5815 | 0x5845 | 0x5855 |
| 0x2A6E | 0x580C | 0x5815 | 0x5845 | 0x5855 |
| 0x2A6F | 0x580C | 0x5815 | 0x5845 | 0x5855 |
| 0x2A74 | 0x580C | 0x5818 | 0x5849 | 0x5806 |
| 0x2A75 | 0x580C | 0x5818 | 0x5849 | 0x5806 |
| 0x2A77 | 0x580C | 0x5818 | 0x5849 | 0x5806 |
| 0x2A7C | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A7D | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A7E | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A7F | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A8B | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A90 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A92 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A93 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A98 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2A99 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2AA3 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2AAB | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2AB4 | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2AC1 | 0x580C | 0x5818 | 0x5849 | 0x5878 |
| 0x2AC2 | 0x580C | 0x5818 | 0x5849 | 0x5878 |
| 0x2AC3 | 0x580C | 0x5818 | 0x5849 | 0x5878 |
| 0x2AC4 | 0x580C | 0x5818 | 0x5849 | 0x5878 |
| 0x2ACB | 0x588C | 0x585E | 0x585C | 0x5849 |
| 0x2ACD | 0x580C | 0x5818 | 0x5849 | 0x5806 |
| 0x2AD2 | 0x580C | 0x5818 | 0x5849 | 0x5806 |
| 0x2AF8 | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2AF9 | 0x5870 | 0x580B | 0x5801 | 0x5818 |
| 0x2AFA | 0x5870 | 0x580B | 0x5801 | 0x5818 |
| 0x2AFC | 0x5870 | 0x580B | 0x5801 | 0x5818 |
| 0x2B01 | 0x580C | 0x583F | 0x5817 | 0x584C |
| 0x2B02 | 0x580C | 0x583F | 0x5817 | 0x584C |
| 0x2B03 | 0x580C | 0x583F | 0x5817 | 0x584C |
| 0x2B05 | 0x580C | 0x583F | 0x5817 | 0x584E |
| 0x2B06 | 0x580C | 0x583F | 0x5817 | 0x584E |
| 0x2B07 | 0x580C | 0x583F | 0x5817 | 0x584E |
| 0x2B0B | 0x580C | 0x5858 | 0x584E | 0x584C |
| 0x2B15 | 0x5870 | 0x580B | 0x5801 | 0x5818 |
| 0x2B16 | 0x5870 | 0x580B | 0x5801 | 0x5818 |
| 0x2B1D | 0x580E | 0x5805 | 0x5858 | 0x583F |
| 0x2B1E | 0x580E | 0x5805 | 0x5858 | 0x583F |
| 0x2B1F | 0x580E | 0x5805 | 0x5858 | 0x583F |
| 0x2B20 | 0x580E | 0x5805 | 0x5858 | 0x583F |
| 0x2B21 | 0x580E | 0x580F | 0x5858 | 0x5826 |
| 0x2B22 | 0x580E | 0x580F | 0x5858 | 0x5826 |
| 0x2B25 | 0x580E | 0x580F | 0x5858 | 0x5826 |
| 0x2B26 | 0x580E | 0x580F | 0x5858 | 0x5826 |
| 0x2B2B | 0x580E | 0x580F | 0x5858 | 0x583F |
| 0x2B2F | 0x580E | 0x580F | 0x5826 | 0x5839 |
| 0x2B31 | 0x580E | 0x580F | 0x5858 | 0x583F |
| 0x2B32 | 0x580E | 0x580F | 0x5858 | 0x583F |
| 0x2B37 | 0x580C | 0x580E | 0x580F | 0x5814 |
| 0x2B39 | 0x580C | 0x580E | 0x580F | 0x5814 |
| 0x2B3A | 0x580C | 0x580E | 0x580F | 0x5814 |
| 0x2B3F | 0x580E | 0x580F | 0x584E | 0x5826 |
| 0x2B43 | 0x580C | 0x580E | 0x580F | 0x5814 |
| 0x2B47 | 0x580E | 0x580F | 0x584E | 0x5826 |
| 0x2B49 | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2B4A | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2B4B | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2B4C | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2B4D | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2B4E | 0x580C | 0x5814 | 0x5846 | 0x5847 |
| 0x2B65 | 0x580C | 0x5818 | 0x58E0 | 0x58E2 |
| 0x2B66 | 0x580C | 0x5818 | 0x58E0 | 0x58E2 |
| 0x2B67 | 0x580C | 0x5818 | 0x58E0 | 0x58E2 |
| 0x2B68 | 0x580C | 0x5818 | 0x58E0 | 0x58E2 |
| 0x2B7A | 0x580C | 0x5818 | 0x58E0 | 0x58E2 |
| 0x2BC0 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC1 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC2 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC3 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC4 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC5 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC6 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC7 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC8 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BC9 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BCA | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BCB | 0x580C | 0x5814 | 0x5813 | 0x58D1 |
| 0x2BCC | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BCD | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BCE | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BCF | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BD0 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BD1 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BD2 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BD3 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BD4 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BD9 | 0x580C | 0x5814 | 0x5813 | 0x58D1 |
| 0x2BDA | 0x580C | 0x5858 | 0x58E7 | 0x5814 |
| 0x2BDD | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BDE | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BDF | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE0 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE1 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE2 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE3 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE4 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE5 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE6 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BE8 | 0x5846 | 0x5847 | 0x5814 | 0x58E7 |
| 0x2BE9 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2BEA | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2C88 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2C89 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2C8A | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2C8B | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2C8D | 0x5825 | 0x586A | 0x5868 | 0x5869 |
| 0x2C8E | 0x5825 | 0x586A | 0x5868 | 0x5869 |
| 0x2C90 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x2C91 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x2C93 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x2C96 | 0x5825 | 0x586B | 0x586C | 0x586E |
| 0x2C9C | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2C9D | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2C9E | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2D53 | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D54 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D55 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D57 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D58 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D59 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D5A | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D5C | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D5D | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D5F | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D60 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D61 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D63 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2D8B | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D8C | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D8D | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D8E | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D8F | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D90 | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D91 | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D92 | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D9B | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D9C | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2D9F | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2DA0 | 0x580C | 0x5813 | 0x5890 | 0x5883 |
| 0x2DC6 | 0x580C | 0x5805 | 0x5813 | 0x5815 |
| 0x2E1C | 0x5800 | 0x5815 | 0x5835 | 0x5842 |
| 0x2E20 | 0x5898 | 0x5815 | 0x5887 | 0x5857 |
| 0x2E24 | 0x5898 | 0x5815 | 0x5887 | 0x5857 |
| 0x2E28 | 0x5844 | 0x5815 | 0x5887 | 0x5857 |
| 0x2E2C | 0x5844 | 0x5815 | 0x5887 | 0x5857 |
| 0x2E30 | 0x5857 | 0x5898 | 0x580E | 0x580C |
| 0x2E31 | 0x5857 | 0x5898 | 0x580E | 0x580C |
| 0x2E32 | 0x5857 | 0x5898 | 0x580E | 0x580C |
| 0x2E33 | 0x5857 | 0x5898 | 0x580E | 0x580C |
| 0x2E34 | 0x5898 | 0x5815 | 0x5887 | 0x5857 |
| 0x2E38 | 0x5872 | 0x5815 | 0x5835 | 0x5842 |
| 0x2E3C | 0x5898 | 0x5815 | 0x5887 | 0x5844 |
| 0x2E40 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E42 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E43 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E44 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E46 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E47 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E48 | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E4A | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E4B | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E4F | 0x580C | 0x580E | 0x5815 | 0x583C |
| 0x2E5F | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x2EE9 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2EF1 | 0x580C | 0x5805 | 0x5817 | 0x581E |
| 0x2EF2 | 0x580C | 0x5805 | 0x5817 | 0x581E |
| 0x2F09 | 0x5805 | 0x5817 | 0x580C | 0x5882 |
| 0x2F0A | 0x5805 | 0x5817 | 0x580C | 0x5882 |
| 0x2F19 | 0x580C | 0x5805 | 0x5817 | 0x581E |
| 0x2F1A | 0x580C | 0x5805 | 0x5817 | 0x581E |
| 0x2F25 | 0x5805 | 0x580F | 0x5817 | 0x5818 |
| 0x2F26 | 0x5805 | 0x580F | 0x5817 | 0x5818 |
| 0x2F28 | 0x5805 | 0x580F | 0x5817 | 0x5818 |
| 0x2FAA | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FAC | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x2FAD | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x2FB7 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FC1 | 0x580D | 0x5814 | 0x580C | 0x5813 |
| 0x2FC4 | 0x580C | 0x580E | 0x5817 | 0x5805 |
| 0x2FC5 | 0x580C | 0x580B | 0x5817 | 0x5851 |
| 0x2FC6 | 0x580C | 0x580B | 0x5817 | 0x5851 |
| 0x2FD1 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FD2 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FD3 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FD4 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FD5 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FD6 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FD7 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FD9 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FDA | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FDB | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FDC | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FDD | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FDE | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FDF | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FE0 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FE2 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FE4 | 0x580C | 0x5805 | 0x5815 | 0x588B |
| 0x2FEA | 0x580C | 0x5813 | 0x580D | 0x5800 |
| 0x2FED | 0x580C | 0x5813 | 0x580D | 0x5800 |
| 0x2FEF | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FF0 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FF1 | 0x5822 | 0x5818 | 0x5865 | 0x5866 |
| 0x2FF2 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2FF3 | 0x580C | 0x5821 | 0x5815 | 0x5825 |
| 0x2FF4 | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x2FF5 | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x2FF6 | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x2FF8 | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x2FFF | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x300C | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x300D | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x300F | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x3010 | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x3011 | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x3012 | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x3034 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x3035 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x3038 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x3039 | 0x580C | 0x580E | 0x586A | 0x5898 |
| 0x303E | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3048 | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x3049 | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x304A | 0x580C | 0x5804 | 0x5865 | 0x5866 |
| 0x3090 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3091 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3094 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3095 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3096 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3097 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3098 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3099 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x309D | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x309F | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x30A0 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x30A1 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x30A4 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x30A5 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x30A6 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3131 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3132 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3145 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3146 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x314A | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x314E | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3152 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3162 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x316E | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3177 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3179 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x317A | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x317E | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x3182 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0x31A2 | 0x580C | 0x5815 | 0x5825 | 0x5800 |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0 |
| 0x4203 | Massenstrom vom HFM | kg/h | - | unsigned integer | - | 0,10 | 1 | 0 |
| 0x4204 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x4205 | Saugrohrdruck 1 / Ladedruck 1 | hPa | - | signed integer | - | 0,0390625 | 1 | 0 |
| 0x4300 | Kühlwassertemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x4400 | Ölstand Mittelwert Langzeit | - | - | unsigned char | - | 0,29296875 | 1 | 0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x4402 | Öltemperatur | Grad C | - | unsigned integer | - | 0,75 | 1 | -48 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0 |
| 0x4408 | Ölsensor Temperatur | Grad C | - | signed integer | - | 0,10 | 1 | 0 |
| 0x4409 | Ölsensor Niveau | - | - | unsigned char | - | 0,29296875 | 1 | 0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0 |
| 0x4410 | Restweg aus Permittivität abgeleitet | - | - | signed integer | - | 10,0 | 1 | 0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | - | - | signed integer | - | 10,0 | 1 | 0 |
| 0x4412 | Öl-Alter in Monate | min | - | unsigned integer | - | 1,0 | 1 | 0 |
| 0x4413 | aufbereitete Permittivität bei letztem Ölwechsel | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| 0x4414 | Permittivität für Bewertung aufbereitet (extrapoliert) | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| 0x4415 | Offset für Permittivitätskorrektur | - | - | signed integer | - | 1,8310546875E-4 | 1 | 0 |
| 0x4416 | zugeteilte Bonuskraftstoffmenge | - | - | unsigned integer | - | 1,0 | 1 | 0 |
| 0x4417 | zugeteilter Permittivitätsbonus | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned integer | - | 1,0 | 1 | 0 |
| 0x4500 | VVT-Excenter Istwert | Grad | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4501 | VVT-Excenter Sollwert | Grad | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4502 | Mechanischer Verstellbereich VVT aus Lernroutine | ° | - | unsigned integer | - | 0,02197265625 | 1 | 0 |
| 0x4504 | Sollwert für Lageregler vom Tester | Grad | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4505 | Sollwert Einlassspreizung | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4506 | Nockenwellenposition Einlass | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4507 | Nockenwellenposition Auslass | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4508 | Istwert Einlassspreizung | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4509 | Istwert Auslassspreizung | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x450A | Normspreizung Auslass | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x450B | Normspreizung Einlass | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4515 | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 5 | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x4600 | aktueller Drosselklappenwinkel | %DK | - | signed integer | - | 0,0244140625 | 1 | 0 |
| 0x4601 | Drosselklappe Sollwert | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1,0 | 1 | -40 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned integer | - | 0,094200000166893 | 1 | 0 |
| 0x460A | Batteriespannung aktuell | V | - | unsigned integer | - | 0,0149999996647239 | 1 | 0 |
| 0x460B | Batteriespannung von IBS gemessen | V | - | unsigned integer | - | 2,50000011874363E-4 | 1 | 6 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,0235500000417233 | 1 | 0 |
| 0x460D | Korrekturwert Abschaltung | % | - | unsigned integer | - | 0,00400000018998981 | 1 | -100 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | Ah | - | unsigned integer | - | 0,0182044450193644 | 1 | 0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x4610 | aktuelle Position Disaklappen | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,100000001490116 | 1 | 0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | unsigned integer | - | 0,00152587890625 | 1 | 0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0 |
| 0x4704 | Lambda Sollwert Bank1 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| 0x4705 | Lambda Sollwert Bank2 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| 0x4800 | Kupplungsschalter Status | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4802 | Sporttaster aktiv | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4803 | Status Klima ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4804 | Sekundärluft Pumpe aktiv | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4805 | Startrelais über CAN aktiv | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x4806 | Steuergeräte-Innentemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x4807 | Motor Drehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0 |
| 0x4808 | Leerlauf Solldrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0 |
| 0x4809 | Status LL | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x480A | Kilometerstand Auflösung 1 km | - | - | unsigned long | - | 1,0 | 1 | 0 |
| 0x480B | Pedalwert Fahrerwunsch in % | %PED | - | unsigned integer | - | 0,00152590218931437 | 1 | 0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 25,600000381469695 | 1 | 0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5805 | Kühlmitteltemperatur OBD | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5806 | Lambda Integrator Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | signed char | - | 0,2 | 1 | 0 |
| 0x5808 | Lambda Integrator Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | signed char | - | 0,2 | 1 | 0 |
| 0x580B | Saugrohrdruck | hPa | - | unsigned char | - | 7,8125 | 1 | 0 |
| 0x580C | Drehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,25 | 1 | 0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | Grad KW | - | signed char | - | 0,75 | 1 | 0 |
| 0x580F | Ansauglufttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5811 | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0 |
| 0x5812 | Luftmasse gemessen | kg/h | - | unsigned char | - | 3,2 | 1 | 0 |
| 0x5813 | Relative Last | % | - | unsigned char | - | 0,75 | 1 | 0 |
| 0x5814 | Fahrpedalwert | %PED | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x5817 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5818 | Luftmasse gerechnet | kg/h | - | unsigned char | - | 4,0 | 1 | 0 |
| 0x5819 | Drehzahl OBD Byte | 1/min | - | unsigned char | - | 40,0 | 1 | 0 |
| 0x581A | Nockenwelle Einlass | Grad KW | - | unsigned char | - | 1 | 1 | 0 |
| 0x581B | Nockenwelle Einlass Sollwert | Grad KW | - | unsigned char | - | 1 | 1 | 0 |
| 0x581C | Nockenwelle Auslass | Grad KW | - | unsigned char | - | 1 | 1 | 0 |
| 0x581D | Nockenwelle Auslass Sollwert | Grad KW | - | unsigned char | - | 1 | 1 | 0 |
| 0x581E | Ansauglufttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x581F | Motortemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5821 | Steuergeräte-Innentemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5822 | (Motor)-Öltemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -60 |
| 0x5824 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5825 | Abstellzeit | s | - | unsigned char | - | 256,0 | 1 | 0 |
| 0x5826 | Drosselklappe Sensor 1 | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x5827 | Lambdasondenheizung vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5828 | Lambdasondenheizung vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5829 | Lambdasondenheizung hinter Katalysator Bank 1 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| 0x582A | Lambdasondenheizung hinter Katalysator Bank 2 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| 0x582B | Drehmomenteingriff über CAN | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x582C | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x582D | Korrekturwert der Lambdasondespannung vor Katalysator  | V | - | signed char | - | 0,001953125 | 1 | -0,25 |
| 0x582E | Lambdaamplitude nach Filterung | - | - | signed char | - | 0,0625 | 1 | 0 |
| 0x582F | Abgastemperatur nach Kat aus Modell | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x5830 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,015625 | 1 | 0 |
| 0x5831 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,015625 | 1 | 0 |
| 0x5832 | Abgastemperatur nach Kat aus Modell Bank2 | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x5833 | Lambdasondenistwert, korrigiert um Zusatzamplitude Bank2 | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 7,8125 | 1 | 0 |
| 0x5835 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5836 | Drehzahlgradient | 1/min/s | - | signed char | - | 100,0 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x583B | Kraftstofftank Füllstand | L | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,094200000166893 | 1 | 0 |
| 0x583D | Betriebsstundenzähler | min | - | unsigned char | - | 1536 | 1 | 0 |
| 0x583E | Sollwert Drosselklappenwinkel der Notluftposition | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x583F | Drosselklappe Sollwert | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x5840 | Drosselklappenwinkel der Notluftposition | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x5842 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5843 | Korrekturwert der Lambdasondespannung vor Katalysator Bank 2 | V | - | signed char | - | 0,001953125 | 1 | 0 |
| 0x5844 | Chiptemperatur Generator 1 | Grad C | - | unsigned char | - | 1,0 | 1 | -40 |
| 0x5845 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5846 | Spannung Pedalwertgeber 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5847 | Spannung Pedalwertgeber 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5848 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5849 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x584B | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x584C | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x584D | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | - | unsigned char | - | 0,078125 | 1 | 0 |
| 0x584E | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5851 | Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,094200000166893 | 1 | 0 |
| 0x5855 | Mittelwert Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x5856 | Mittelwert Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0 |
| 0x5858 | Drosselklappe aktueller Wert | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,1953125 | 1 | 0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,1953125 | 1 | 0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1 | - | - | unsigned char | - | 2 | 1 | 0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 | - | - | unsigned char | - | 2 | 1 | 0 |
| 0x585E | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | - | - | unsigned char | - | 2 | 1 | 0 |
| 0x585F | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | - | - | unsigned char | - | 2 | 1 | 0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,0390625 | 1 | 0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,0390625 | 1 | 0 |
| 0x5863 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,0390625 | 1 | 0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,0390625 | 1 | 0 |
| 0x5865 | Ölstand Mittelwert Langzeit | - | - | unsigned char | - | 0,29296875 | 1 | 0 |
| 0x5866 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5867 | Kilometerstand | km | - | unsigned char | - | 2560,0 | 1 | 0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x586A | Batteriespannung von IBS gemessen | V | - | unsigned char | - | 0,064 | 1 | 6 |
| 0x586B | Zeit mit Ruhestrom 80 - 200 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0 |
| 0x586C | Zeit mit Ruhestrom 200 - 1000 mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0 |
| 0x586E | Zeit mit Ruhestrom größer 1000 mA | - | - | unsigned char | - | 14,933333333 | 1 | 0 |
| 0x586F | multiplikativer Gemischadaptionsfaktor | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x5872 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x5876 | vom Generator empfangenes Lastsignal | % | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x5877 | multiplikativer Gemischadaptionsfaktor Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 0,00048828125 | 1 | -0,0625 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 0,00048828125 | 1 | -0,0625 |
| 0x587A | Status FGR | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x587B | Spannung Lambdasonde hinter Kat | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x587C | Spannung Lambdasonde hinter Kat Bank2 | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x587D | Winkel Excenterwelle Rohwert Führungssensor | ° | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| 0x587E | Winkel Excenterwelle Rohwert Referenzsensor | ° | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5882 | Motortemperatur beim Start | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0625 | 1 | 0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 25,6 | 1 | 0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | Grad C | - | unsigned char | - | 6,0 | 1 | -273,15 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 1,6 | 1 | 0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 0,195312500000000 | 1 | 0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | Grad C | - | unsigned char | - | 6,0 | 1 | -273,15 |
| 0x5890 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 4 | 1 | -220 |
| 0x5892 | Lambdaamplitude nach Filterung Bank2 | - | - | signed char | - | 0,0625 | 1 | 0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5894 | Verstellbereich VVT-Führungssensor | ° | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| 0x5895 | Verstellbereich VVT-Referenzsensor | ° | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | ° | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | ° | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| 0x5898 | Generator Sollspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x5899 | Istwert DISA-Position | % | - | unsigned char | - | 0,78125 | 1 | 0 |
| 0x589A | O2-Speicherfähigkeit Katalysator | mg | - | unsigned char | - | 2 | 1 | 0 |
| 0x589B | O2-Speicherfähigkeit Katalysator Bank2 | mg | - | unsigned char | - | 2 | 1 | 0 |
| 0x589C | Bit Schubabschaltung | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x589D | Abstellposition  Führungssensor Rohwert | ° | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| 0x589E | Status VVT- Entlastungsrelais | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x589F | VVT Istwinkel | Grad | - | unsigned char | - | 0,8 | 1 | 0 |
| 0x58A0 | VVT Sollwinkel | Grad | - | unsigned char | - | 0,8 | 1 | 0 |
| 0x58A1 | Ausgegeben Tastverhältnis | % | - | signed char | - | 0,78125 | 1 | 0 |
| 0x58A2 | VVT Motorstrom | A | - | signed char | - | 1,5625 | 1 | 0 |
| 0x58A3 | VVT Motortemperatur | Grad C | - | unsigned char | - | 1 | 1 | 0 |
| 0x58A5 | VVT Sensorversorgungsspannung | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x58A6 | VVT Sensordifferenz | ° | - | unsigned char | - | 0,703125 | 1 | 0 |
| 0x58A7 | VVT Endstufentemperatur | Grad C | - | unsigned char | - | 1 | 1 | 0 |
| 0x58A8 | Referenzmoment für Aussetzererkennung | % | - | unsigned char | - | 0,390625000000000 | 1 | 0 |
| 0x58A9 | SLS-Status über CAN | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58AA | Korrekturfaktor höhe | - | - | unsigned char | - | 0,015625000000000 | 1 | 0 |
| 0x58AD | Spannung HFM | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x58B2 | Spannung Diagnose-Port VVT-Ansteuerung | V | - | unsigned char | - | 0,012890625000000 | 1 | 0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x58B4 | Versorgungsspannung VVT | V | - | unsigned char | - | 0,078125000000000 | 1 | 0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x58B7 | Bremsdruck | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x58B8 | Drehzahl Überwachung | 1/min | - | unsigned char | - | 40,0 | 1 | 0 |
| 0x58B9 | Pedalwert Überwachung | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x58BA | Status VVT-Anschlaglernen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58BB | Stromentnahme Bordnetz durch VVT-Motor | A | - | signed char | - | 1,562500000000000 | 1 | 0 |
| 0x58BC | Luftmasse Überwachung | % | - | unsigned char | - | 0,75 | 1 | 0 |
| 0x58BD | relativer Füllstand Kraftstofftank | % | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| 0x58BE | Motortemperatur-Ersatzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x58BF | relative Momentenforderung von MSR über CAN | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x58C0 | Abgasmassenstrom ohne Kraftstoffanteil Bank2 | kg/h | - | unsigned char | - | 3,2 | 1 | 0 |
| 0x58C1 | Laufunruhe Segmentzeit | us | - | unsigned char | - | 6553,6 | 1 | 0 |
| 0x58C2 | Bedingung Kupplung | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x58C5 | Kraftstofftemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x58C6 | Abgasmassenstrom ohne Kraftstoffanteil | kg/h | - | unsigned char | - | 3,2 | 1 | 0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | % | - | signed char | - | 0,390625 | 1 | 0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | % | - | signed char | - | 0,390625 | 1 | 0 |
| 0x58CD | Berechnete Wicklungstemperatur der Sekundärluftpumpe  | Grad C | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| 0x58CE | Motortemperatur-Referenzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x58CF | SLS in Fahrzeug eingebaut | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x58D0 | Bedingung für Sekundärluftpumpe | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 4 | 1 | -220 |
| 0x58D2 | Status VVT Lageregler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58D3 | Status Fehler Überlast VVT1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58D5 | Koord. Moment für die Füllung | % | - | unsigned char | - | 0,390625000000000 | 1 | 0 |
| 0x58D9 | Massenstrom Abgas vor Hauptkat | kg/h | - | unsigned char | - | 3,2 | 1 | 0 |
| 0x58DA | Massenstrom Abgas vor Hauptkat Bank2 | kg/h | - | unsigned char | - | 3,2 | 1 | 0 |
| 0x58DB | Modelltemperatur im Kat | Grad C | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| 0x58DC | Modelltemperatur im Kat Bank 2 | Grad C | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| 0x58DD | Summenzähler Aussetzer | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58DE | Funktionsinterner Zähler | - | - | unsigned char | - | 10 | 1 | 0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0 |
| 0x58E3 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0 |
| 0x58E4 | Betriebsart Istwert | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x58E7 | Spannung Pedalwertgeber 1 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x58E8 | Spannung Pedalwertgeber 2 Überwachung | V | - | unsigned char | - | 0,009765625 | 1 | 0 |
| 0x58E9 | Relative Heizleistungsanforderung für Lambdasondenheizung | % | - | unsigned char | - | 0,781250000000000 | 1 | 0 |
| 0x58EB | Egaspfad als Umweltbedingung  | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58EC | Momentenpfad | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58ED | Spannung DK Poti 1 am unteren Anschlag | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x58EE | Spannung PWG Poti 2 | V | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| 0x58EF | Tankfüllstand 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58F3 | Ladedruck Istwert/Druck vor Drosselklappe | hPa | - | unsigned char | - | 7,812500000000000 | 1 | 0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | - | - | signed char | - | 0,00048828125 | 1 | 0 |
| 0x58F6 | Eingangssignal Rückführregler 2 | - | - | signed char | - | 0,00048828125 | 1 | 0 |
| 0x58F8 | IBS Fehler 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x58F9 | IBS Fehler 1 | - | - | unsigned char | - | 256 | 1 | 0 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | signed char | - | 0,5 | 1 | 0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5A02 | Versorgung VVT Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5A03 | Versorgung VVT | V | - | unsigned char | - | 0,094200000000000 | 1 | 0 |
| 0x5A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5A06 | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0 |
| 0x5A07 | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0 |
| 0x5A08 | Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5A0E | Spannung SG-Innentemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | -1 |
| 0x5A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | -1 |
| 0x5A18 | Bedingung EKP | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A22 | Steuergeräte-Innentemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5A24 | Drosselklappe Sollwert | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0 |
| 0x5A26 | Umgebungsdruck | hPa | - | signed integer | - | 0,0390625 | 1 | 0 |
| 0x5A29 | Fahrpedalwert | %PED | - | unsigned integer | - | 0,00152590218931437 | 1 | 0 |
| 0x5A30 | Laufunruhe Zylinder 1 | - | - | signed integer | - | 0,007105452 | 1 | 0 |
| 0x5A31 | Laufunruhe Zylinder 2 | - | - | signed integer | - | 0,007105452 | 1 | 0 |
| 0x5A32 | Laufunruhe Zylinder 3 | - | - | signed integer | - | 0,007105452 | 1 | 0 |
| 0x5A33 | Laufunruhe Zylinder 4 | - | - | signed integer | - | 0,007105452 | 1 | 0 |
| 0x5A36 | Status Klopfen | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A37 | Spannung Klopfwerte Zylinder 1 | - | - | signed integer | - | 0,0048828125 | 1 | 0 |
| 0x5A38 | Spannung Klopfwerte Zylinder 2 | - | - | signed integer | - | 0,0048828125 | 1 | 0 |
| 0x5A39 | Spannung Klopfwerte Zylinder 3 | - | - | signed integer | - | 0,0048828125 | 1 | 0 |
| 0x5A3A | Spannung Klopfwerte Zylinder 4 | - | - | signed integer | - | 0,0048828125 | 1 | 0 |
| 0x5A42 | Einspritzzeit Zylinder 1 | - | - | unsigned long | - | 0,001 | 1 | 0 |
| 0x5A43 | Einspritzzeit Zylinder 2 | - | - | unsigned long | - | 0,001 | 1 | 0 |
| 0x5A44 | Einspritzzeit Zylinder 3 | - | - | unsigned long | - | 0,001 | 1 | 0 |
| 0x5A45 | Einspritzzeit Zylinder 4 | - | - | unsigned long | - | 0,001 | 1 | 0 |
| 0x5A49 | Zündwinkel Zylinder1 | - | - | signed char | - | 0,75 | 1 | 0 |
| 0x5A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5A4E | Klimakompressorrelais Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A4F | VVT- Entlastungsrelais Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| 0x5A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| 0x5A52 | Status LS hinter Katalysator Bank 1 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A53 | Status LS hinter Katalysator Bank 2 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A54 | Status LS Heizung hinter Katalysator Bank 1 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A55 | Status LS Heizung hinter Katalysator Bank 2 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A56 | Status LS Heizung vor Katalysator Bank 1 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A57 | Status LS Heizung vor Katalysator Bank 2 | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0 |
| 0x5A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0 |
| 0x5A60 | Bremslichtschalter Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A61 | Bremslichttestschalter Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A62 | Öldruckschalter Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A63 | E-Box-Lüfter Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A66 | DMTL Pumpe Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A67 | DMTL Ventil Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A69 | MIL Lampe Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A6A | Lampe FGR Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A6B | Lampe Check Engine Ein | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A6C | Korrekturfaktor Kraftstoffanzeige | % | - | signed char | - | 0,00100000004749745 | 1 | 0 |
| 0x5A6D | Status Taste FGR | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5A74 | Beheizter Thermostat PWM | - | - | signed integer | - | 0,100000001490116 | 1 | 0 |
| 0x5A75 | Sekundärluft Ventil | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A77 | Tankentlüftungsventil TEV PWM | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0 |
| 0x5A7A | VANOS PWM Wert Einlass | % | - | unsigned integer | - | 0,00999999977648258 | 1 | 0 |
| 0x5A7B | VANOS PWM Wert Auslass | % | - | unsigned integer | - | 0,00999999977648258 | 1 | 0 |
| 0x5A81 | Integrator Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| 0x5A82 | Integrator Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| 0x5A89 | multiplikative Gemischadaption hohe Last Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| 0x5A8A | multiplikative Gemischadaption hohe Last Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| 0x5A8B | multiplikative Gemischadaption niedrige Last Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| 0x5A8C | multiplikative Gemischadaption niedrige Last Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| 0x5A8D | additive Gemischadaption Leerlauf Bank 1 | % | - | signed integer | - | 0,046875 | 1 | 0 |
| 0x5A8E | additive Gemischadaption Leerlauf Bank 2 | % | - | signed integer | - | 0,046875 | 1 | 0 |
| 0x5A8F | Anzahl der Starts mit Benzin im Öl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A90 | Aktueller Startmengenadaptionsfaktor  | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5A91 | Katalysatordiagnosewert Bank1 | - | - | unsigned char | - | 0,00390625 | 1 | 0 |
| 0x5A92 | Katalysatordiagnosewert Bank2 | - | - | unsigned char | - | 0,00390625 | 1 | 0 |
| 0x5A94 | Nockenwelle Auslass Sollwert | Grad KW | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x5A95 | Adaptionswert Nockenwelle Auslass | Grad KW | - | signed char | - | 0,0500000007450581 | 1 | 0 |
| 0x5A96 | Adaptionswert Nockenwelle Einlass | Grad KW | - | signed char | - | 0,0500000007450581 | 1 | 0 |
| 0x5A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A99 | Kurbelwellen Adaption beendet | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5AA1 | Status Diagnose TEV | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5AA6 | Status Diagnose VVT Anschläge lernen | - | - | unsigned char | - | 1,0 | 1 | 0 |
| 0x5AB1 | Geschwindigkeit | km/h | - | unsigned integer | - | 0,0078125 | 1 | 0 |
| 0x5AB4 | Betriebsstundenzähler | min | - | unsigned integer | - | 6,0 | 1 | 0 |
| 0x5AB5 | Variante Sekundärluftpumpe | 0_1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5AB6 | Rohwert Ansauglufttemperatur 1 | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5AB7 | Rohwert Kühlwassertemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48 |
| 0x5AB8 | Spannung Saugrohrdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| 0x5ABB | Ausgewählter VVT Istwinkel | Grad | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x5ABC | Luftmasse | kg/h | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| 0x5ABD | Starterrelais aktiv | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5AF6 | Zyl. Individueller Zähler Aussetzerkennung Zylinder 1 | - | - | unsigned integer | - | 1 | 1 | 0 |
| 0x5AF7 | Zyl. Individueller Zähler Aussetzerkennung Zylinder 2 | - | - | unsigned integer | - | 1 | 1 | 0 |
| 0x5AF8 | Zyl. Individueller Zähler Aussetzerkennung Zylinder 3 | - | - | unsigned integer | - | 1 | 1 | 0 |
| 0x5AF9 | Zyl. Individueller Zähler Aussetzerkennung Zylinder 4 | - | - | unsigned integer | - | 1 | 1 | 0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x2715 | 0x0000 | 0x0000 | 0x11EB | 0x0000 |
| 0x273D | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x273E | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x273F | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2740 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2755 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2756 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2757 | 0x14CA | 0x0000 | 0x0000 | 0x0000 |
| 0x2758 | 0x0000 | 0x1300 | 0x0000 | 0x0000 |
| 0x275D | 0x0000 | 0x0000 | 0x0000 | 0x1303 |
| 0x275E | 0x0000 | 0x0000 | 0x1304 | 0x0000 |
| 0x275F | 0x1305 | 0x0000 | 0x0000 | 0x0000 |
| 0x276A | 0x0000 | 0x0000 | 0x1306 | 0x0000 |
| 0x276D | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x276E | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2770 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2771 | 0x0000 | 0x0000 | 0x0000 | 0x1307 |
| 0x2772 | 0x0000 | 0x0000 | 0x1114 | 0x0000 |
| 0x2773 | 0x1308 | 0x0000 | 0x0000 | 0x0000 |
| 0x2775 | 0x0000 | 0x0000 | 0x0000 | 0x1307 |
| 0x2776 | 0x0000 | 0x0000 | 0x1114 | 0x0000 |
| 0x2777 | 0x1308 | 0x0000 | 0x0000 | 0x0000 |
| 0x2779 | 0x0000 | 0x0000 | 0x0000 | 0x1307 |
| 0x277A | 0x0000 | 0x0000 | 0x1114 | 0x0000 |
| 0x277B | 0x1308 | 0x0000 | 0x0000 | 0x0000 |
| 0x277D | 0x0000 | 0x0000 | 0x0000 | 0x1307 |
| 0x277E | 0x0000 | 0x0000 | 0x1114 | 0x0000 |
| 0x277F | 0x1308 | 0x0000 | 0x0000 | 0x0000 |
| 0x2781 | 0x0000 | 0x0000 | 0x0000 | 0x1307 |
| 0x2782 | 0x0000 | 0x0000 | 0x1114 | 0x0000 |
| 0x2783 | 0x1308 | 0x0000 | 0x0000 | 0x0000 |
| 0x2789 | 0x0000 | 0x0000 | 0x0000 | 0x1309 |
| 0x278A | 0x0000 | 0x0000 | 0x130A | 0x0000 |
| 0x27B1 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x27B2 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x27B4 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x27C4 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x27C5 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x27C6 | 0x0000 | 0x14AA | 0x0000 | 0x0000 |
| 0x283D | 0x0000 | 0x0000 | 0x14CB | 0x0000 |
| 0x2840 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2841 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2842 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2845 | 0x14CC | 0x0000 | 0x0000 | 0x0000 |
| 0x2870 | 0x0000 | 0x0000 | 0x14CD | 0x0000 |
| 0x2877 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2878 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x287A | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x287D | 0x14CC | 0x0000 | 0x0000 | 0x0000 |
| 0x2888 | 0x0000 | 0x0000 | 0x0000 | 0x1437 |
| 0x2968 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x296A | 0x0000 | 0x0000 | 0x0000 | 0x14CE |
| 0x296B | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x296D | 0x0000 | 0x0000 | 0x0000 | 0x14CE |
| 0x296E | 0x13D0 | 0x0000 | 0x0000 | 0x0000 |
| 0x296F | 0x0000 | 0x1144 | 0x0000 | 0x0000 |
| 0x2978 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2979 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x297B | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2982 | 0x0000 | 0x0000 | 0x0000 | 0x14CF |
| 0x2983 | 0x0000 | 0x0000 | 0x14D0 | 0x0000 |
| 0x2986 | 0x0000 | 0x0000 | 0x0000 | 0x14CF |
| 0x2987 | 0x0000 | 0x0000 | 0x14D0 | 0x0000 |
| 0x2A35 | 0x0000 | 0x0000 | 0x1076 | 0x0000 |
| 0x2A47 | 0x0000 | 0x1329 | 0x0000 | 0x0000 |
| 0x2A50 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2A51 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2A53 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2A56 | 0x132A | 0x0000 | 0x0000 | 0x0000 |
| 0x2A60 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2A61 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2A63 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2A64 | 0x0000 | 0x0000 | 0x0000 | 0x14D1 |
| 0x2A66 | 0x132B | 0x0000 | 0x0000 | 0x0000 |
| 0x2A67 | 0x0000 | 0x14D2 | 0x0000 | 0x0000 |
| 0x2A6C | 0x0000 | 0x0000 | 0x0000 | 0x14D7 |
| 0x2A6D | 0x0000 | 0x0000 | 0x14D8 | 0x0000 |
| 0x2A6E | 0x14D9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A6F | 0x0000 | 0x14DA | 0x0000 | 0x0000 |
| 0x2A74 | 0x0000 | 0x0000 | 0x0000 | 0x14DB |
| 0x2A75 | 0x0000 | 0x0000 | 0x14DC | 0x0000 |
| 0x2A77 | 0x0000 | 0x1171 | 0x0000 | 0x0000 |
| 0x2A7C | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2A7D | 0x0000 | 0x0000 | 0x133B | 0x0000 |
| 0x2A7E | 0x1172 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7F | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2A8B | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2A90 | 0x0000 | 0x0000 | 0x0000 | 0x116C |
| 0x2A92 | 0x116A | 0x0000 | 0x0000 | 0x0000 |
| 0x2A93 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2A98 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2A99 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2AA3 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2AAB | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x1341 |
| 0x2AC1 | 0x0000 | 0x0000 | 0x0000 | 0x14DE |
| 0x2AC2 | 0x0000 | 0x0000 | 0x14DF | 0x0000 |
| 0x2AC3 | 0x14E0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AC4 | 0x0000 | 0x14E1 | 0x0000 | 0x0000 |
| 0x2ACB | 0x1342 | 0x0000 | 0x0000 | 0x0000 |
| 0x2ACD | 0x0000 | 0x1076 | 0x0000 | 0x0000 |
| 0x2AD2 | 0x0000 | 0x0000 | 0x0000 | 0x1076 |
| 0x2AF8 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AF9 | 0x0000 | 0x0000 | 0x0000 | 0x1060 |
| 0x2AFA | 0x0000 | 0x0000 | 0x1015 | 0x0000 |
| 0x2AFC | 0x0000 | 0x14E2 | 0x0000 | 0x0000 |
| 0x2B01 | 0x0000 | 0x0000 | 0x0000 | 0x1060 |
| 0x2B02 | 0x0000 | 0x0000 | 0x1015 | 0x0000 |
| 0x2B03 | 0x1343 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B05 | 0x0000 | 0x0000 | 0x0000 | 0x1060 |
| 0x2B06 | 0x0000 | 0x0000 | 0x1015 | 0x0000 |
| 0x2B07 | 0x1343 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B0B | 0x1344 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B15 | 0x0000 | 0x0000 | 0x0000 | 0x1347 |
| 0x2B16 | 0x0000 | 0x0000 | 0x1348 | 0x0000 |
| 0x2B1D | 0x0000 | 0x0000 | 0x0000 | 0x117A |
| 0x2B1E | 0x0000 | 0x0000 | 0x1349 | 0x0000 |
| 0x2B1F | 0x134A | 0x0000 | 0x0000 | 0x0000 |
| 0x2B20 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2B21 | 0x0000 | 0x0000 | 0x0000 | 0x14E3 |
| 0x2B22 | 0x0000 | 0x0000 | 0x14E4 | 0x0000 |
| 0x2B25 | 0x0000 | 0x0000 | 0x0000 | 0x14E5 |
| 0x2B26 | 0x0000 | 0x0000 | 0x14E4 | 0x0000 |
| 0x2B2B | 0x117F | 0x0000 | 0x0000 | 0x0000 |
| 0x2B2F | 0x134D | 0x0000 | 0x0000 | 0x0000 |
| 0x2B31 | 0x0000 | 0x0000 | 0x0000 | 0x134E |
| 0x2B32 | 0x0000 | 0x0000 | 0x134F | 0x0000 |
| 0x2B37 | 0x1350 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B39 | 0x0000 | 0x0000 | 0x0000 | 0x1351 |
| 0x2B3A | 0x0000 | 0x0000 | 0x1352 | 0x0000 |
| 0x2B3F | 0x118A | 0x0000 | 0x0000 | 0x0000 |
| 0x2B43 | 0x122E | 0x0000 | 0x0000 | 0x0000 |
| 0x2B47 | 0x1353 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B49 | 0x0000 | 0x0000 | 0x0000 | 0x1136 |
| 0x2B4A | 0x0000 | 0x0000 | 0x1355 | 0x0000 |
| 0x2B4B | 0x1356 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B4C | 0x0000 | 0x0000 | 0x0000 | 0x1136 |
| 0x2B4D | 0x0000 | 0x0000 | 0x1355 | 0x0000 |
| 0x2B4E | 0x1357 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B65 | 0x0000 | 0x0000 | 0x0000 | 0x14E6 |
| 0x2B66 | 0x0000 | 0x0000 | 0x14E7 | 0x0000 |
| 0x2B67 | 0x0000 | 0x0000 | 0x0000 | 0x14E6 |
| 0x2B68 | 0x0000 | 0x0000 | 0x14E7 | 0x0000 |
| 0x2B7A | 0x135D | 0x0000 | 0x0000 | 0x0000 |
| 0x2BC0 | 0x0000 | 0x0000 | 0x0000 | 0x143F |
| 0x2BC1 | 0x0000 | 0x0000 | 0x0000 | 0x1440 |
| 0x2BC2 | 0x0000 | 0x0000 | 0x0000 | 0x143F |
| 0x2BC3 | 0x0000 | 0x0000 | 0x0000 | 0x1440 |
| 0x2BC4 | 0x0000 | 0x0000 | 0x0000 | 0x1441 |
| 0x2BC5 | 0x0000 | 0x0000 | 0x0000 | 0x1441 |
| 0x2BC6 | 0x0000 | 0x0000 | 0x0000 | 0x13D1 |
| 0x2BC7 | 0x0000 | 0x0000 | 0x0000 | 0x13D2 |
| 0x2BC8 | 0x0000 | 0x0000 | 0x0000 | 0x13D3 |
| 0x2BC9 | 0x0000 | 0x0000 | 0x1015 | 0x0000 |
| 0x2BCA | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2BCB | 0x0000 | 0x0000 | 0x0000 | 0x135E |
| 0x2BCC | 0x0000 | 0x0000 | 0x0000 | 0x13D4 |
| 0x2BCD | 0x0000 | 0x0000 | 0x0000 | 0x15B3 |
| 0x2BCE | 0x0000 | 0x0000 | 0x0000 | 0x15B3 |
| 0x2BCF | 0x0000 | 0x0000 | 0x0000 | 0x14E8 |
| 0x2BD0 | 0x0000 | 0x0000 | 0x0000 | 0x14E9 |
| 0x2BD1 | 0x0000 | 0x0000 | 0x0000 | 0x13D7 |
| 0x2BD2 | 0x0000 | 0x0000 | 0x0000 | 0x13D8 |
| 0x2BD3 | 0x0000 | 0x0000 | 0x0000 | 0x13D8 |
| 0x2BD4 | 0x0000 | 0x0000 | 0x0000 | 0x13D8 |
| 0x2BD9 | 0x135F | 0x0000 | 0x0000 | 0x0000 |
| 0x2BDA | 0x1360 | 0x0000 | 0x0000 | 0x0000 |
| 0x2BDD | 0x0000 | 0x0000 | 0x0000 | 0x14EA |
| 0x2BDE | 0x0000 | 0x0000 | 0x1364 | 0x0000 |
| 0x2BDF | 0x0000 | 0x1365 | 0x0000 | 0x0000 |
| 0x2BE0 | 0x0000 | 0x0000 | 0x0000 | 0x1366 |
| 0x2BE1 | 0x0000 | 0x0000 | 0x1367 | 0x0000 |
| 0x2BE2 | 0x0000 | 0x1368 | 0x0000 | 0x0000 |
| 0x2BE3 | 0x0000 | 0x0000 | 0x0000 | 0x1369 |
| 0x2BE4 | 0x0000 | 0x0000 | 0x136A | 0x0000 |
| 0x2BE5 | 0x136B | 0x0000 | 0x0000 | 0x0000 |
| 0x2BE6 | 0x0000 | 0x0000 | 0x0000 | 0x136C |
| 0x2BE8 | 0x136D | 0x0000 | 0x0000 | 0x0000 |
| 0x2BE9 | 0x0000 | 0x0000 | 0x0000 | 0x14EB |
| 0x2BEA | 0x0000 | 0x0000 | 0x14EC | 0x0000 |
| 0x2C88 | 0x0000 | 0x0000 | 0x0000 | 0x1371 |
| 0x2C89 | 0x0000 | 0x0000 | 0x14ED | 0x0000 |
| 0x2C8A | 0x10FD | 0x0000 | 0x0000 | 0x0000 |
| 0x2C8B | 0x0000 | 0x1018 | 0x0000 | 0x0000 |
| 0x2C8D | 0x0000 | 0x0000 | 0x10BD | 0x0000 |
| 0x2C8E | 0x1252 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C90 | 0x0000 | 0x0000 | 0x0000 | 0x1032 |
| 0x2C91 | 0x0000 | 0x0000 | 0x1031 | 0x0000 |
| 0x2C93 | 0x0000 | 0x1375 | 0x0000 | 0x0000 |
| 0x2C96 | 0x10BE | 0x0000 | 0x0000 | 0x0000 |
| 0x2C9C | 0x0000 | 0x0000 | 0x0000 | 0x1136 |
| 0x2C9D | 0x0000 | 0x0000 | 0x1355 | 0x0000 |
| 0x2C9E | 0x14EF | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x0000 | 0x0000 | 0x0000 | 0x14F0 |
| 0x2D54 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2D55 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2D57 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2D58 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2D59 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2D5A | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2D5C | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2D5D | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2D5F | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2D60 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2D61 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2D63 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2D8B | 0x0000 | 0x0000 | 0x0000 | 0x13D9 |
| 0x2D8C | 0x0000 | 0x0000 | 0x13DA | 0x0000 |
| 0x2D8D | 0x0000 | 0x0000 | 0x0000 | 0x13DB |
| 0x2D8E | 0x0000 | 0x0000 | 0x13DC | 0x0000 |
| 0x2D8F | 0x0000 | 0x0000 | 0x0000 | 0x13D9 |
| 0x2D90 | 0x0000 | 0x0000 | 0x13DA | 0x0000 |
| 0x2D91 | 0x0000 | 0x0000 | 0x0000 | 0x13DB |
| 0x2D92 | 0x0000 | 0x0000 | 0x13DC | 0x0000 |
| 0x2D9B | 0x0000 | 0x0000 | 0x0000 | 0x1379 |
| 0x2D9C | 0x0000 | 0x0000 | 0x1443 | 0x0000 |
| 0x2D9F | 0x0000 | 0x0000 | 0x0000 | 0x1379 |
| 0x2DA0 | 0x0000 | 0x0000 | 0x137A | 0x0000 |
| 0x2DC6 | 0x1444 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x0000 | 0x10DA |
| 0x2E20 | 0x0000 | 0x0000 | 0x0000 | 0x10E4 |
| 0x2E24 | 0x0000 | 0x0000 | 0x0000 | 0x108D |
| 0x2E28 | 0x0000 | 0x0000 | 0x0000 | 0x10E5 |
| 0x2E2C | 0x0000 | 0x0000 | 0x0000 | 0x1055 |
| 0x2E30 | 0x0000 | 0x0000 | 0x0000 | 0x1055 |
| 0x2E31 | 0x0000 | 0x0000 | 0x10DC | 0x0000 |
| 0x2E32 | 0x125D | 0x0000 | 0x0000 | 0x0000 |
| 0x2E33 | 0x0000 | 0x125E | 0x0000 | 0x0000 |
| 0x2E34 | 0x0000 | 0x0000 | 0x0000 | 0x10DD |
| 0x2E38 | 0x0000 | 0x0000 | 0x0000 | 0x10E6 |
| 0x2E3C | 0x0000 | 0x0000 | 0x0000 | 0x10E7 |
| 0x2E40 | 0x0000 | 0x0000 | 0x0000 | 0x125C |
| 0x2E42 | 0x137B | 0x0000 | 0x0000 | 0x0000 |
| 0x2E43 | 0x0000 | 0x10D8 | 0x0000 | 0x0000 |
| 0x2E44 | 0x0000 | 0x0000 | 0x0000 | 0x137C |
| 0x2E46 | 0x1257 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E47 | 0x0000 | 0x1256 | 0x0000 | 0x0000 |
| 0x2E48 | 0x0000 | 0x0000 | 0x0000 | 0x11C0 |
| 0x2E4A | 0x1259 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4B | 0x0000 | 0x125A | 0x0000 | 0x0000 |
| 0x2E4F | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2E5F | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2EE9 | 0x0000 | 0x0000 | 0x0000 | 0x14F1 |
| 0x2EF1 | 0x0000 | 0x0000 | 0x0000 | 0x1381 |
| 0x2EF2 | 0x0000 | 0x0000 | 0x1382 | 0x0000 |
| 0x2F09 | 0x0000 | 0x0000 | 0x0000 | 0x1384 |
| 0x2F0A | 0x0000 | 0x0000 | 0x1385 | 0x0000 |
| 0x2F19 | 0x0000 | 0x0000 | 0x0000 | 0x14F2 |
| 0x2F1A | 0x0000 | 0x0000 | 0x129C | 0x0000 |
| 0x2F25 | 0x0000 | 0x0000 | 0x0000 | 0x14F4 |
| 0x2F26 | 0x0000 | 0x0000 | 0x14F5 | 0x0000 |
| 0x2F28 | 0x0000 | 0x138A | 0x0000 | 0x0000 |
| 0x2FAA | 0x14F6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FAC | 0x138E | 0x0000 | 0x0000 | 0x0000 |
| 0x2FAD | 0x0000 | 0x14F7 | 0x0000 | 0x0000 |
| 0x2FB7 | 0x0000 | 0x0000 | 0x1445 | 0x0000 |
| 0x2FC1 | 0x0000 | 0x1049 | 0x0000 | 0x0000 |
| 0x2FC4 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FC5 | 0x0000 | 0x0000 | 0x0000 | 0x1390 |
| 0x2FC6 | 0x0000 | 0x0000 | 0x1391 | 0x0000 |
| 0x2FD1 | 0x0000 | 0x0000 | 0x0000 | 0x1393 |
| 0x2FD2 | 0x0000 | 0x0000 | 0x1394 | 0x0000 |
| 0x2FD3 | 0x14FA | 0x0000 | 0x0000 | 0x0000 |
| 0x2FD4 | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x2FD5 | 0x0000 | 0x0000 | 0x0000 | 0x1544 |
| 0x2FD6 | 0x0000 | 0x0000 | 0x1397 | 0x0000 |
| 0x2FD7 | 0x14FB | 0x0000 | 0x0000 | 0x0000 |
| 0x2FD9 | 0x0000 | 0x0000 | 0x0000 | 0x1399 |
| 0x2FDA | 0x0000 | 0x0000 | 0x139A | 0x0000 |
| 0x2FDB | 0x139B | 0x0000 | 0x0000 | 0x0000 |
| 0x2FDC | 0x0000 | 0x139C | 0x0000 | 0x0000 |
| 0x2FDD | 0x0000 | 0x0000 | 0x0000 | 0x139D |
| 0x2FDE | 0x0000 | 0x0000 | 0x139E | 0x0000 |
| 0x2FDF | 0x139F | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE0 | 0x0000 | 0x13A0 | 0x0000 | 0x0000 |
| 0x2FE2 | 0x0000 | 0x0000 | 0x13A1 | 0x0000 |
| 0x2FE4 | 0x0000 | 0x13A2 | 0x0000 | 0x0000 |
| 0x2FEA | 0x0000 | 0x0000 | 0x0000 | 0x1117 |
| 0x2FED | 0x0000 | 0x13A3 | 0x0000 | 0x0000 |
| 0x2FEF | 0x0000 | 0x0000 | 0x13A4 | 0x0000 |
| 0x2FF0 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FF1 | 0x0000 | 0x1049 | 0x0000 | 0x0000 |
| 0x2FF2 | 0x0000 | 0x0000 | 0x0000 | 0x14FC |
| 0x2FF3 | 0x0000 | 0x0000 | 0x14FD | 0x0000 |
| 0x2FF4 | 0x0000 | 0x0000 | 0x0000 | 0x13A8 |
| 0x2FF5 | 0x14AE | 0x0000 | 0x0000 | 0x0000 |
| 0x2FF6 | 0x0000 | 0x0000 | 0x0000 | 0x13AA |
| 0x2FF8 | 0x151B | 0x0000 | 0x0000 | 0x0000 |
| 0x2FFF | 0x0000 | 0x0000 | 0x11D5 | 0x0000 |
| 0x300C | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x300D | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x300F | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x3010 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x3011 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x3012 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x3034 | 0x0000 | 0x0000 | 0x0000 | 0x1447 |
| 0x3035 | 0x0000 | 0x0000 | 0x1448 | 0x0000 |
| 0x3038 | 0x0000 | 0x0000 | 0x0000 | 0x1425 |
| 0x3039 | 0x0000 | 0x0000 | 0x1427 | 0x0000 |
| 0x303E | 0x14FE | 0x0000 | 0x0000 | 0x0000 |
| 0x3048 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x3049 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x304A | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x3090 | 0x0000 | 0x0000 | 0x13AE | 0x0000 |
| 0x3091 | 0x0000 | 0x13AF | 0x0000 | 0x0000 |
| 0x3094 | 0x0000 | 0x0000 | 0x13B0 | 0x0000 |
| 0x3095 | 0x13B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x3096 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3097 | 0x0000 | 0x0000 | 0x13B0 | 0x0000 |
| 0x3098 | 0x13B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x3099 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x309D | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x309F | 0x0000 | 0x0000 | 0x13B0 | 0x0000 |
| 0x30A0 | 0x13B2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30A1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x30A4 | 0x0000 | 0x0000 | 0x13B5 | 0x0000 |
| 0x30A5 | 0x13B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x30A6 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3131 | 0x13B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x3132 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3145 | 0x13B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x3146 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x314A | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x314E | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3152 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3162 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x316E | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3177 | 0x0000 | 0x0000 | 0x0000 | 0x14FF |
| 0x3179 | 0x1500 | 0x0000 | 0x0000 | 0x0000 |
| 0x317A | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x317E | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x3182 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x31A2 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1008 | Gemisch zu mager |
| 0x1009 | Gemisch zu fett |
| 0x1014 | Kurzschluss nach Plus |
| 0x1015 | Kurzschluss nach Minus |
| 0x1016 | Leitungsunterbrechung |
| 0x1018 | Signal unplausibel |
| 0x1019 | klemmt offen |
| 0x1029 | Lagereglerüberwachung |
| 0x1031 | Unterspannung |
| 0x1032 | Überspannung |
| 0x1049 | Signal fehlt |
| 0x1055 | Übertemperatur |
| 0x1056 | Drehzahl zu niedrig |
| 0x1057 | Drehzahl zu hoch |
| 0x1060 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1071 | Kommunikationsfehler |
| 0x1076 | Sondensignal zu träge |
| 0x108D | elektrischer Fehler |
| 0x1091 | elektrisch |
| 0x10B9 | Timeout |
| 0x10BD | Tiefentladung |
| 0x10BE | Ruhestromverletzung |
| 0x10D8 | Systemfehler |
| 0x10DA | keine Kommunikation über BSD-Schnittstelle |
| 0x10DC | Generatortyp unplausibel |
| 0x10DD | mechanisch |
| 0x10E4 | elektrisch berechnet |
| 0x10E5 | Übertemperatur berechnet |
| 0x10E6 | Reglertyp nicht plausibel |
| 0x10E7 | Generatortyp nicht plausibel |
| 0x10FD | Signalfehler |
| 0x1114 | Verbrennungsaussetzer betriebswarm, emissionsverschlechternd |
| 0x1117 | Radgeschwindigkeit zu hoch |
| 0x1118 | Fehlfunktion |
| 0x1126 | Magnetloss-Fehler |
| 0x1127 | Reset-Fehler |
| 0x112A | Parity-Fehler oder kein Signal |
| 0x112D | Fehler unteres Lernfenster |
| 0x112E | Verstellbereich fehlerhaft |
| 0x1136 | Spannung zu hoch |
| 0x113E | maximale Anzahl der Minhubanschläge überschritten |
| 0x1141 | Anschlagadaptionen außerhalb gültigem Bereich |
| 0x1144 | Leitungsunterbrechung, Drehzahlsignal |
| 0x115A | Plausibilitätsfehler |
| 0x115E | Umgebungstemperatur kleiner als Modelltemperatur |
| 0x115F | CAN Botschaft fehlerhaft |
| 0x1161 | Offsetprüfung, System zu mager |
| 0x1162 | Offsetprüfung, System zu fett |
| 0x116A | Signalspannung im Schub zu klein infolge offener Pumpstromleitung |
| 0x116C | Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x116E | Sonde dynamisch zu langsam |
| 0x116F | Signal überschreitet Schwellwert nicht |
| 0x1170 | Signal unterschreitet Schwellwert nicht |
| 0x1171 | Schubspannungsschwelle nicht erreicht |
| 0x1172 | Heiztakteinkopplung auf Signal |
| 0x1176 | RI-Regler dauerhaft am oberen Anschlag |
| 0x117A | Kurzschluss |
| 0x117F | Lageabweichung |
| 0x1183 | Fehler bei Prüfung der öffnenden Feder |
| 0x1184 | Fehler bei Prüfung der Rückstellfeder |
| 0x118A | UMA-Lernen während Urinitialisierung abgebrochen |
| 0x1192 | Signal unterhalb Schwelle, Kurzschluss nach Minus |
| 0x11C0 | Temperaturmessung fehlerhaft |
| 0x11C6 | Kaltstart, Nebenschluss erkannt |
| 0x11C7 | Thermostat fehlerhaft |
| 0x11D5 | Mindestgeschwindigkeit im Schub nicht erreicht |
| 0x11D6 | Mindestgeschwindigkeit unter Last nicht erreicht |
| 0x11EB | Aussetzer aufgrund leerem Tank |
| 0x11F8 | Kurzschluss nach Masse |
| 0x11FA | Gradientenüberschreitung / Ident |
| 0x11FE | Strom E-Motoransteuerung zu hoch |
| 0x1202 | Nockenwellenverstellung hat Spätposition nicht erreicht |
| 0x1225 | Bereichsverletzung nach unten |
| 0x1226 | Bereichsverletzung nach oben |
| 0x122E | Fehler bei UMA-Lernen (Wiederholung) |
| 0x1239 | Signal oberhalb Schwelle, Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1247 | Timeouterkennung |
| 0x124E | Checksumme fehlerhaft/Alive-Fehler |
| 0x1252 | Powermanagement defekt |
| 0x1256 | Kommunikationsverlust |
| 0x1257 | IBS Softwareversion nicht kompatibel |
| 0x1259 | Strommessung fehlerhaft |
| 0x125A | Spannungsmessung fehlerhaft |
| 0x125C | KL15 Masseschluss (Pegel Wakeupleitung) |
| 0x125D | Fehler mechanisch |
| 0x125E | Fehler elektrisch |
| 0x125F | Kühleraustrittstemperatur unplausibel |
| 0x1260 | Signalfehler aus Highside-Check erkannt |
| 0x126D | Kontinuitätsfehler |
| 0x129A | Druck zu hoch |
| 0x129B | Druck zu niedrig |
| 0x129C | Unterer Schwellwert unterschritten |
| 0x12C1 | tbd |
| 0x12F2 | Tankdeckel offen bei Fahrt |
| 0x12F3 | Tankdeckel offen im Nachlauf |
| 0x12F4 | Sammelfehlerpfad |
| 0x12F5 | Momentenreserve zu hoch |
| 0x12FA | Obere Diagnoseschwelle überschritten (Gemisch zu fett) |
| 0x12FB | Untere Diagnoseschwelle unterschritten (Gemisch zu mager) |
| 0x12FD | Obere Plausibilitätsschwelle überschritten (Gemisch zu fett) |
| 0x12FE | Untere Plausibilitätsschwelle unterschritten (Gemisch zu mager) |
| 0x12FF | Anforderung Lambdaschnelltest fehlerhaft |
| 0x1300 | CAN-Botschaft  unplausibel |
| 0x1301 | Tankfüllstandsignal unplausibel |
| 0x1302 | Summenfehler: Signal und elektrisch |
| 0x1303 | Sensorsignal hängt |
| 0x1304 | Tankfüllstand größer als Tankvolumen |
| 0x1305 | Abweichung zwischen Verbrauch und Füllstandsänderung |
| 0x1306 | Katalysator-Wirkungsgrad zu niedrig |
| 0x1307 | Verbrennungsaussetzer mit  Zylinderabschaltung |
| 0x1308 | Verbrennungsaussetzer im Warmlauf emissionsverschlechternd |
| 0x1309 | System zu mager |
| 0x130A | System zu fett |
| 0x130B | untere Fehlerschwelle Sekundärluft-HFM unterschritten |
| 0x130C | obere Fehlerschwelle Sekundärluft-HFM überschritten |
| 0x130D | Wert Sekundärluft-HFM unplausibel |
| 0x130E | Signal-Fehler |
| 0x130F | Plausibilisierung |
| 0x1312 | Leckage 1.0 mm |
| 0x1313 | Spätposition der Nockenwellenverstellung nicht erreicht |
| 0x1314 | Anschlagadaption außerhalb gütligem Bereich |
| 0x1315 | NW-Verstellsystem hat Frühposition nicht erreicht |
| 0x1316 | Motorstrom unplausibel gegenüber Bordnetzstrom |
| 0x1317 | Differenz Abstell/Startposition |
| 0x1318 | Nebenschluss |
| 0x1319 | Speicherung Lernwerte in EEPROM nicht möglich |
| 0x131A | Keine Anschläge gelernt |
| 0x131B | Temperatur E-Motor oder Endstufe zu hoch |
| 0x131C | Führungs- und Referenzsensorsignale unplausibel zueinander |
| 0x131D | Exzenterwelle fährt nicht auf Vollhubposition |
| 0x131E | Plausibilisierung Luftmassenstrom zu gering |
| 0x131F | Fehler bei Drehrichtungserkennung |
| 0x1320 | Fehler bei  Lagereglerüberwachung |
| 0x1321 | Ansteuerung Valvetronic Relais fehlerhaft |
| 0x1322 | Versorgungsspannung zu hoch |
| 0x1323 | Versorgungsspannung zu niedrig |
| 0x1324 | Anschlagadaptionen ungültig |
| 0x1325 | Nockenwellen-Verstellsystem zu langsam (Schleppfehler über Zeit) |
| 0x1326 | Nockenwellen-Verstellsystem reagiert nicht auf Sollwertänderungen (NW klemmt) |
| 0x1327 | Zahnversatz |
| 0x1328 | Schwergängigkeit in Richtung Vollhub oder kein Strom bei höherem Tastverhältnis |
| 0x1329 | Kurzschluss Signaleitung mit Heizleitung |
| 0x132A | Innenwiderstand zu hoch |
| 0x132B | Mangelnde Signalbereitschaft |
| 0x132C | Sondenheizung zu langsam |
| 0x132D | Signalbereitschaft mangelhaft |
| 0x132E | Kalibrierwiderstand im Steuergerät fehlerhaft |
| 0x132F | Lambdasondenbaustein 2: Signalkreisadaptionswerte zu hoch |
| 0x1330 | Lambdasondenbaustein 2: Unterspannung |
| 0x1331 | Lambdasondenbaustein 2: Initialisierungsfehler |
| 0x1332 | Lambdasondenbaustein 2: Kommunikation SPI gestört |
| 0x1333 | Lambdasondenbaustein: Signalkreisadaptionswerte zu hoch |
| 0x1334 | Lambdasondenbaustein: Unterspannung |
| 0x1335 | Lambdasondenbaustein: Initialisierungsfehler |
| 0x1336 | Lambdasondenbaustein: Kommunikation SPI gestört |
| 0x1337 | Schubspannungsschwelle nicht erreicht oder Signal bei Vollast kleiner Schwelle |
| 0x1338 | Signal zu niedrig, dauerhaft zu mager |
| 0x1339 | Signal zu hoch, dauerhaft zu fett |
| 0x133A | Adernschluss |
| 0x133B | Adernschluss oder Lambdasonde vergiftet |
| 0x133C | Stecker vertauscht |
| 0x133D | Unterbrechung Abgleichleitung |
| 0x133E | Unterbrechung Sondenleitung Nernstspannung |
| 0x133F | Unterbrechung Sondenleitung virtuelle Masse |
| 0x1340 | Sammelfehler |
| 0x1341 | Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizungfehler |
| 0x1342 | Sonde nicht angesteckt, Sonde an Luft |
| 0x1343 | Signal unplausibel zu Ersatzwert aus Füllung |
| 0x1344 | Drosselklappenpotenziometer 1 oder 2, Funktion |
| 0x1345 | Summenfehler |
| 0x1346 | Drosselklappenpotenziometer 1 undr 2 unplausibel zueinander |
| 0x1347 | Saugrohrdruck zu hoch |
| 0x1348 | Saugrohrdruck zu niedrig |
| 0x1349 | Überlastung: Übertemperatur oder Strom zu hoch |
| 0x134A | Interner Kommunikationsfehler |
| 0x134B | Feder öffnet nicht aus Notluftposition |
| 0x134C | Feder öffnet nicht von unterem mechanischen Anschlag |
| 0x134D | Fehler bei Prüfung Notluftposition |
| 0x134E | Drosselklappensteller klemmt anhaltend |
| 0x134F | Drosselklappensteller klemmt kurzfristig |
| 0x1350 | Tauscherkennung ohne Adaption |
| 0x1351 | Lernverbot: Prüfbedingungen nicht erfüllt |
| 0x1352 | Lernverbot: Batteriespannung zu niedrig |
| 0x1353 | Fehler bei Verstärkerabgleich |
| 0x1354 | Spannung oberhalb Maximalwert |
| 0x1355 | Spannung zu niedrig |
| 0x1356 | Fehler bei Vergleich der beiden normierten Potenziometer-Spannungen |
| 0x1357 | Pedalwertgeber 1oder 2 fehlerhaft oder außerhalb der Toleranz |
| 0x1358 | Luftmasse gegenüber Modell zu hoch |
| 0x1359 | Luftmasse gegenüber Modell zu niedrig |
| 0x135A | Summenfehler: elektrisch und Plausibilität |
| 0x135B | Wert zu hoch |
| 0x135C | Wert zu niedrig |
| 0x135D | Fehler in der Regelbereichsüberwachung |
| 0x135E | Maximal zulässiges Sollmoment wird dauerhaft überschritten |
| 0x135F | Überwachung Istmoment, Fehler in der Funktionsüberwachung Momentenvergleich |
| 0x1360 | Überwachung Motordrehzahl, Funktionsüberwachung Drehzahlgeber-, Zuleitung- oder SG-Fehler |
| 0x1361 | Überwachung Kraftstoffdruck, Kraftstoffdrucksensor-, Zuleitung- oder SG-Fehler |
| 0x1362 | Überwachung Lambdaplausibilisierung, Fehler bei Lambdasignal |
| 0x1363 | Motorfunktionen, RL-Überwachung |
| 0x1364 | Motorfunktionen, Zündwinkelüberwachung |
| 0x1365 | Motorfunktionen, ADC-Überwachung |
| 0x1366 | Überwachung Eingangsgrößen, Kraftstoffkorrektur |
| 0x1367 | Überwachung Eingangsgrößen, Plausibilisierung relative / eingespritzte Kraftstoffmasse |
| 0x1368 | Überwachung Eingangsgrößen, Varianten Codierungsüberwachung |
| 0x1369 | Überwachung Hardware, Fehler bei ADC-Queue Überwachung |
| 0x136A | Überwachung Hardware, ADC-Testspannung ausserhalb zulässigem Bereich |
| 0x136B | Überwachung Hardware, Fehler bei Überwachung Lambdatest |
| 0x136C | Funktionsüberwachung, Prüfung Vorsteuerfaktoren |
| 0x136D | Überwachung Fahrpedalmodul, Pedalwertgeber-, Zuleitung- oder SG-Fehler |
| 0x136E | Überwachung Überspannung, SG-Fehler, Überspannung auf VCC aktiv |
| 0x136F | Überwachung Überspannung, SG-Fehler, Überspannung auf VCC geheilt |
| 0x1370 | Überwachung Überspannung, Fehler F/A-Kom. FR-UM aktiv, SG-Fehler |
| 0x1371 | Toggle-Bit-fehlerhaft |
| 0x1372 | MFL-weist Frequenzfehler |
| 0x1373 | Signalfehler Multifunktionslenkrad |
| 0x1374 | MFL-Signal unplausibel |
| 0x1375 | Batterieloser Betrieb |
| 0x1376 | Ruhestromverletzung erkannt |
| 0x1377 | AD-Wandler defekt |
| 0x1378 | Schaltverzögerung |
| 0x1379 | Motor mechanisch zu laut oder KS außerhalb Toleranz (Empfindlichkeit) |
| 0x137A | elektrischer Fehler KS (Wackelkontakt) oder KS locker |
| 0x137B | KL15 Wakeupleitung (Pegel unplausibel) |
| 0x137C | Erweiterte Kommunikation gestört |
| 0x137D | Zeitüberschreitung |
| 0x137E | Timeout erkannt |
| 0x137F | Motoröltemperatur zeitweise zu hoch |
| 0x1380 | Minimalwert unterschritten |
| 0x1381 | Ansauglufttemperatur zu hoch |
| 0x1382 | Ansauglufttemperatur zu niedrig |
| 0x1383 | Summenfehler: elektrisch, Plausibilität und Kaltdiagnose |
| 0x1384 | Obere Schwelle überschritten |
| 0x1385 | Untere Schwelle unterschritten |
| 0x1386 | Summenfehler: elektrisch und Signal |
| 0x1387 | Unplausibler Wert bez. modellierter Referenztemperatur (high side check) |
| 0x1388 | Motortemperatur unplausibel |
| 0x1389 | Lambda-Regelung-Motortemperaturschwelle nach Wartezeit nicht erreicht |
| 0x138A | CAN-Botschaft fehlerhaft |
| 0x138B | Summenfehler aus elektrischer Diagnose und Plausibilitätsprüfung |
| 0x138C | Umgebungstemperatur größer als Modelltemperatur |
| 0x138D | Prüfergebnis unplausibel |
| 0x138E | CAN-Uhrzeit ist unplausibel |
| 0x138F | Zeitüberschreitung, CAN-Uhrzeit nicht empfangen |
| 0x1390 | Umgebungsdrucksensor, Kurzschluss nach Plus |
| 0x1391 | Umgebungsdrucksensor, Kurzschluss nach Masse |
| 0x1392 | Vergleich aktueller mit letztem Fahrzyklus unplausibel |
| 0x1393 | Motorölqualitätssensor Temperaturmessung - Fehlfunktion |
| 0x1394 | Motorölqualitätssensor Niveaumessung - Fehlfunktion |
| 0x1395 | Kommunikation fehlerhaft |
| 0x1396 | Motorölqualitätssensor Permeabilitätsmessung - Fehlfunktion |
| 0x1397 | Noch kein Secret Key programmiert |
| 0x1398 | keinen authentischen Response erhalten |
| 0x1399 | CAS-Bus HW-Fehler |
| 0x139A | Empfangsfehler der CAS-Schnittstelle, Frame-Fehler |
| 0x139B | Empfangsfehler der CAS-Schnittstelle, CRC-Fehler |
| 0x139C | Timeout EWS4 Telegramm |
| 0x139D | EWS-Daten, kein freier Secret Key verfügbar |
| 0x139E | EWS-Daten, Schreibfehler FSC |
| 0x139F | EWS-Daten, Checksummenfehler |
| 0x13A0 | EWS-Daten, Schreibfehler Secret Key |
| 0x13A1 | Empfangsfehler CAN-Bus |
| 0x13A2 | Timeout EWS4-Telegramm |
| 0x13A3 | Kein Raddrehzahlsignal erhalten |
| 0x13A4 | Warnschwelle Ölverlust ausgelöst |
| 0x13A5 | Signal abgefallen |
| 0x13A6 | Innentemperatursensor: Wert zu hoch |
| 0x13A7 | Innentemperatursensor: Wert zu niedrig |
| 0x13A8 | Kombi hat Ungültigkeitssignal gesendet |
| 0x13A9 | Prüfresultat nicht plausibel |
| 0x13AA | Signal zu hoch |
| 0x13AB | Keine Signaländerung |
| 0x13AC | Summenfehler: Signal und Plausibilität |
| 0x13AD | Unplausibles Geschwindigkeitssignal |
| 0x13AE | DPRAM CAN Baustein defekt |
| 0x13AF | CAN-Bus Off oder CAN-Bus deffekt |
| 0x13B0 | Aliveprüfung fehlerhaft |
| 0x13B1 | Prüfsumme fehlerhaft |
| 0x13B2 | MIL-Ansteuerung unplausibel |
| 0x13B3 | CAN-Botschaftsüberwachung EGS |
| 0x13B4 | CAN- Schnittstelle Timeout EGS |
| 0x13B5 | Aliveprüfung  fehlerhaft |
| 0x13CF | Winkelversatz der äquidistanten Flanken zu groß |
| 0x13D0 | Gestörtes Kurbelwellensignal |
| 0x13D1 | Löschen EEPROM fehlerhaft |
| 0x13D2 | Lesen EEPROM fehlerhaft |
| 0x13D3 | Schreiben EEPROM fehlerhaft |
| 0x13D4 | Überwachungsmodulfehler |
| 0x13D5 | ”WDA-Activ” mit unbekannter Ursache |
| 0x13D6 | fehlerhafter Frage-/Antwort-Kommunikation |
| 0x13D7 | Überspannungserkennung |
| 0x13D8 | Versorgungsspannung außerhalb der Schaltschwellen |
| 0x13D9 | Signal-Eingang A, Kurzschluss nach Plus |
| 0x13DA | Signal-Eingang A, Kurzschluss nach Masse |
| 0x13DB | Signal-Eingang B, Kurzschluss nach Plus |
| 0x13DC | Signal-Eingang B, Kurzschluss nach Masse |
| 0x13DD | Kein Signal |
| 0x1425 | Spannung oberhalb Schwelle |
| 0x1427 | Spannung unterhalb Schwelle |
| 0x1437 | Maximale Anzahl der Minhubanschläge überschritten |
| 0x1438 | High Level Signal fehlt |
| 0x1439 | Low Level Signal fehlt |
| 0x143A | festliegend auf Mager |
| 0x143B | festliegend auf Fett |
| 0x143C | Signal im Nachlauf zu hoch |
| 0x143D | HFM-Signal unplausibel zu hoch |
| 0x143E | HFM-Signal unplausibel zu niedrig |
| 0x143F | AD-Wandler, Zeit für Selbstkalibrierung überschritten |
| 0x1440 | AD-Wandler, keine AD-Wandlung möglich |
| 0x1441 | Überwachung SPI-Kommunikation |
| 0x1442 | Überwachung Versorgungsspannung  |
| 0x1443 | Elektrischer Fehler KS (Wackelkontakt) oder KS locker |
| 0x1444 | Bank- oder Motorausfall |
| 0x1445 | Energiesparmodus aktiv |
| 0x1446 | DSC-Signal unplausibel gegenüber Kombi-Anzeige  |
| 0x1447 | Hauptrelais ist noch nicht abgefallen |
| 0x1448 | Hauptrelais hat nicht angezogen |
| 0x1449 | DME noch nicht Kodiert |
| 0x144A | Fehler bei Diagnose erkannt |
| 0x144B | Summenfehler: Gemischadaption additiv und multiplikativ |
| 0x144C | Tankentlüftungsventil klemmt geschlossen |
| 0x144D | Tankentlüftungsventi klemmt geöffnet |
| 0x144E | Signal zu niedrig |
| 0x144F | Regelabweichung zu groß, obere Schwelle überschritten |
| 0x1450 | Regelabweichung zu groß, untere Schwelle unterschritten |
| 0x1451 | Einlassnockenwelle beim Start nicht in Verriegelungsposition |
| 0x1452 | Druck vor Drosselklappe zu hoch |
| 0x1453 | Druck vor Drosselklappe zu niedrig |
| 0x1454 | Druck vor Drosselklappe unplausibel |
| 0x1455 | Montage fehlerhaft |
| 0x1456 | Kurzschluss IA oder IP nach Plus |
| 0x1457 | Kurzschluss IA oder IP nach Minus |
| 0x1458 | langsame Sonde |
| 0x1459 | Nebenschluss Signalpfad mit Heizer |
| 0x145A | Signal unplausibel (s. Umweltbedingung LSUNPSTAT2) |
| 0x145B | HFM-Signal, obere Schwelle überschritten |
| 0x145C | HFM-Signal, untere Schwelle unterschritten |
| 0x145D | Leckluft nach Drosselklappe festgestellt |
| 0x145E | Sensorsignal unplausibel |
| 0x145F | Windungsschluss |
| 0x1460 | HDEV-Endstufen-Baustein |
| 0x1461 | Boosterzeitfenster |
| 0x1462 | Ventil klemmt offen |
| 0x1463 | Druck im Kraftstoffsystem zu niedrig |
| 0x1464 | Sensorwert zu hoch |
| 0x1465 | Sensorwert zu niedrig |
| 0x1466 | wert zu niedrig |
| 0x1467 | Kabelabfall |
| 0x1468 | Druck unplausibel |
| 0x1469 | Tastverhältnis > 90 % |
| 0x146A | Tastverhältnis < 10 % |
| 0x146B | Nullgangsensor konnte nicht gelernt werden |
| 0x14AA | CAN-Botschaft unplausibel |
| 0x14AE | DSC-Signal unplausibel gegenüber Kombi-Anzeige |
| 0x14C8 | Obere Diagnoseschwelle überschritten (Gemisch zu mager) |
| 0x14C9 | Untere Diagnoseschwelle unterschritten (Gemisch zu fett) |
| 0x14CA | Tankfüllstandssignal fehlerhaft |
| 0x14CB | Anschlagadaption ausserhalb Toleranz |
| 0x14CC | Regelabweichung zu lange zu gross |
| 0x14CD | Anschlagadaptionen ausserhalb Toleranz |
| 0x14CE | Winkelversatz ausserhalb Toleranz |
| 0x14CF | Level am Eingang vom Steuergerät ist high |
| 0x14D0 | Level am Eingang vom Steuergerät ist low |
| 0x14D1 | Betriebstemperatur nicht erreicht |
| 0x14D2 | Innenwiderstand des Signalkeises zu hochohmig |
| 0x14D7 | Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch |
| 0x14D8 | Lambdasondenbaustein, Unterspannung |
| 0x14D9 | Lambdasondenbaustein, Initialisierungsfehler |
| 0x14DA | Lambdasondenbaustein, Kommunikation SPI gestört |
| 0x14DB | Signal dauerhaft zu mager |
| 0x14DC | Signal dauerhaft zu fett |
| 0x14DD | Lambdasonden vertauscht |
| 0x14DE | Gemisch nach Katalysator zu fett |
| 0x14DF | Gemisch nach Katalysator zu mager |
| 0x14E0 | festliegend auf mager |
| 0x14E1 | festliegend auf fett |
| 0x14E2 | Signal im Nachlauf unplausibel |
| 0x14E3 | Abbruch Prüfung, Feder schliesst nicht |
| 0x14E4 | Fehler bei Federprüfung |
| 0x14E5 | Abbruch Prüfung, Feder öffnet nicht |
| 0x14E6 | Messwert Lambdasonde zu hoch |
| 0x14E7 | Messwert Lambdasonde zu niedrig |
| 0x14E8 | WDA-Activ mit unbekannter Ursache |
| 0x14E9 | fehlerhafte Frage-/Antwort-Kommunikation |
| 0x14EA | Motorfunktionen, Überwachung relative Luftmasse |
| 0x14EB | Überwachung Überspannung, SG-Fehler, Überspannung auf Versorgungsspannung aktiv |
| 0x14EC | Überwachung Überspannung, SG-Fehler, Überspannung auf Versorgungsspannung geheilt |
| 0x14ED | Frequenzfehler |
| 0x14EE | Sapnnung zu niedrig |
| 0x14EF | Analog-Digital-Wandler defekt |
| 0x14F0 | Fehlfunktion, Systemfehler |
| 0x14F1 | Motoröl- oder Kühlmitteltemperatur zeitweise zu hoch |
| 0x14F2 | Oberer Schwellwert überschritten |
| 0x14F3 | Unplausibler Wert bez. modellierter Referenztemperatur (low side check) |
| 0x14F4 | Oberen Schwellwert überschritten |
| 0x14F5 | Unteren Schwellwert unterschritten |
| 0x14F6 | Bremlichtschalter zu Bremstestschalter unplausibel |
| 0x14F7 | Timeout, CAN-Uhrzeit nicht empfangen |
| 0x14F8 | Differenz aktueller mit letztem Fahrzyklus zu hoch |
| 0x14F9 | Differenz aktueller mit letztem Fahrzyklus zu niedrig |
| 0x14FA | Permittivitätsmessung unplausibel |
| 0x14FB | keine authentische Response erhalten |
| 0x14FC | Innentemperatursensor, Wert zu hoch |
| 0x14FD | Innentemperatursensor, Wert zu niedrig |
| 0x14FE | DME noch nicht kodiert |
| 0x14FF | Momentenanforderung trotz Bremssignal |
| 0x1500 | Prüfsumme/Alivezähler fehlerhaft |
| 0x151B | hängender Sensor |
| 0x1544 | EWS-Manipulationsschutz |
| 0x15B3 | Überwachung Versorgungsspannung |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | Grad C | tans | - | unsigned char | - | 0,75 | 1 | -48 |
| _2 | 0x4201 | STAT_0x4201_WERT | Umgebungsdruck | hPa | pu_w | - | unsigned integer | - | 0,0390625 | 1 | 0 |
| IPSAU | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck | hPa | ps_w | - | unsigned integer | - | 0,0390625 | 1 | 0 |
| ILMKG | 0x4203 | STAT_LUFTMASSE_WERT | Massenstrom vom HFM | kg/h | mshfm_w | - | unsigned integer | - | 0,10 | 1 | 0 |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | Grad C | tumg | - | unsigned char | - | 0,75 | 1 | -48 |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Saugrohrdruck 1 / Ladedruck 1 | hPa | dps_w | - | signed integer | - | 0,0390625 | 1 | 0 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | Grad C | tmot | - | unsigned char | - | 0,75 | 1 | -48 |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | - | oznivlangt | - | unsigned char | - | 0,29296875 | 1 | 0 |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_WERT | Füllstand Motoröl | - | oelstandr | - | unsigned char | - | 1,0 | 1 | 0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | Grad C | toel_w | - | unsigned integer | - | 0,75 | 1 | -48 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | - | ozkvbsm_ul | - | unsigned long | - | 1,220703125E-4 | 1 | 0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | km | ozoelkm | - | unsigned integer | - | 10,0 | 1 | 0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Ölsensor Niveau Rohwert | - | oznivr | - | unsigned integer | - | 1,0 | 1 | 0 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Ölsensor Qualität Rohwert | - | ozpermr_w | - | unsigned integer | - | 1,0 | 1 | 0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Ölsensor Temperatur Rohwert | - | oztempr | - | unsigned integer | - | 1,0 | 1 | 0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Ölsensor Temperatur | Grad C | oztmpakt_w | - | signed integer | - | 0,10 | 1 | 0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölsensor Niveau | - | oznivakt | - | unsigned char | - | 0,29296875 | 1 | 0 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Ölsensor Qualität | - | ozprmakt_w | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| _19 | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | - | ozlf1c_eep | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| _20 | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | - | ozlf2c_eep | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| _21 | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | ozlf1t | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| _22 | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | ozlf2t | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| _23 | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | - | oznivkrzt | - | unsigned char | - | 0,29296875 | 1 | 0 |
| _24 | 0x4410 | STAT_0x4410_WERT | Restweg aus Permittivität abgeleitet | - | ozrwperm | - | signed integer | - | 10,0 | 1 | 0 |
| _25 | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | - | ozrwkvb | - | signed integer | - | 10,0 | 1 | 0 |
| _26 | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | min | ozoelzeit | - | unsigned integer | - | 1,0 | 1 | 0 |
| _27 | 0x4413 | STAT_0x4413_WERT | aufbereitete Permittivität bei letztem Ölwechsel | - | ozpermlow | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| _28 | 0x4414 | STAT_0x4414_WERT | Permittivität für Bewertung aufbereitet (extrapoliert) | - | ozpermex | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| _29 | 0x4415 | STAT_0x4415_WERT | Offset für Permittivitätskorrektur | - | ozpermoff | - | signed integer | - | 1,8310546875E-4 | 1 | 0 |
| _30 | 0x4416 | STAT_0x4416_WERT | zugeteilte Bonuskraftstoffmenge | - | ozkvbog | - | unsigned integer | - | 1,0 | 1 | 0 |
| _31 | 0x4417 | STAT_0x4417_WERT | zugeteilter Permittivitätsbonus | - | ozpermbog | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0 |
| ISOPS | 0x4418 | STAT_PEILSTABANZEIGE_WERT | Status Peilstabanzeige | - | ozstatus | - | unsigned integer | - | 1,0 | 1 | 0 |
| _33 | 0x4500 | STAT_VVT_EXCENTER_WERT | VVT-Excenter Istwert | Grad | exwnki_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| _34 | 0x4501 | STAT_VVT_EXCENTER_SOLL_WERT | VVT-Excenter Sollwert | Grad | exwinks_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| _35 | 0x4502 | STAT_VVT_VERSTELLBEREICH_LERNROUTINE_WERT | Mechanischer Verstellbereich VVT aus Lernroutine | ° | vbvvtexw_w | - | unsigned integer | - | 0,02197265625 | 1 | 0 |
| _36 | 0x4504 | STAT_VVT_LAGEREGLER_SOLL_WERT | Sollwert für Lageregler vom Tester | Grad | exwnstst_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| SSPEI | 0x4505 | STAT_VVT_LAGEREGLER_SOLL_VON_TESTER_WERT | Sollwert Einlassspreizung | Grad KW | vse_sprs | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Nockenwellenposition Einlass | Grad KW | wnwkwe_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Nockenwellenposition Auslass | Grad KW | wnwkwa_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| ISNWE | 0x4508 | STAT_NW_EINLASSSPREIZUNG_WERT | Istwert Einlassspreizung | Grad KW | vse_spri | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung | Grad KW | vsa_spri | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| NSNWA | 0x450A | STAT_NW_NORMSPREIZUNG_AUSLASS_WERT | Normspreizung Auslass | Grad KW | vsa_sprn | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| NSNWE | 0x450B | STAT_NW_NORMSPREIZUNG_EINLASS_WERT | Normspreizung Einlass | Grad KW | vse_sprn | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| _44 | 0x4515 | STAT_0x4515_WERT | Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 5 | Grad KW | vse_sprn | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | aktueller Drosselklappenwinkel | %DK | wdkba_w | - | signed integer | - | 0,0244140625 | 1 | 0 |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Drosselklappe Sollwert | % | wdks_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0 |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung über BSD | V | ugen | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| ITGEE | 0x4603 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | °C | tchip | - | unsigned char | - | 1,0 | 1 | -40 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generator Strom | - | st_i_gen | - | unsigned char | - | 1,0 | 1 | 0 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 1 | - | bsdgencv | - | unsigned char | - | 1,0 | 1 | 0 |
| VGENR | 0x4606 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion Generator 1 | - | bsdgenregv | - | unsigned char | - | 1,0 | 1 | 0 |
| VGENH | 0x4607 | STAT_GENERATOR_HERSTELLERCODE_WERT | Herstellercode Generator 1 | - | genmanufak | - | unsigned char | - | 1,0 | 1 | 0 |
| VGTYP | 0x4608 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp Generator 1 | - | gentypkenn | - | unsigned char | - | 1,0 | 1 | 0 |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | V | ub_w | - | unsigned integer | - | 0,094200000166893 | 1 | 0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | Batteriespannung aktuell | V | ubt | - | unsigned integer | - | 0,0149999996647239 | 1 | 0 |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | V | ubatt_w | - | unsigned integer | - | 2,50000011874363E-4 | 1 | 6 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | V | wub_w | - | unsigned integer | - | 0,0235500000417233 | 1 | 0 |
| _57 | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | - | unsigned integer | - | 0,00400000018998981 | 1 | -100 |
| TDSTF | 0x460E | STAT_ABSTAND_ZUR_STARTFAEHIGKEITSGRENZE_WERT | Abstand zur Startfähigkeitsgrenze | Ah | qstrtfgk_w | - | unsigned integer | - | 0,0182044450193644 | 1 | 0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | % | dfmonitor | - | unsigned char | - | 0,390625 | 1 | 0 |
| IPDIS | 0x4610 | STAT_DISAKLAPPEN_POSITION_WERT | aktuelle Position Disaklappen | % | disa_ist | - | unsigned integer | - | 0,0030517578125 | 1 | 0 |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | % | taml | - | unsigned char | - | 0,390625 | 1 | 0 |
| IIEGE | 0x4612 | STAT_GENERATOR_ERREGERSTROM_WERT | Erregerstrom Generator 1 | A | ierr | - | unsigned char | - | 0,125 | 1 | 0 |
| _63 | 0x4613 | STAT_0x4613_WERT | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | ufgen | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| IGENA | 0x4614 | STAT_AUSLASTUNGSGRAD_GENERATOR_WERT | Auslastungsgrad Generator 1 | % | dfsiggen | - | unsigned char | - | 0,390625 | 1 | 0 |
| _65 | 0x4615 | STAT_0x4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | ierrfgrenz | - | unsigned char | - | 0,125 | 1 | 0 |
| _66 | 0x4616 | STAT_0x4616_WERT | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | tlrfgen | - | unsigned char | - | 0,100000001490116 | 1 | 0 |
| MGENG | 0x4617 | STAT_GEFILTERTES_GENERATORMOMENT_ABSOLUT_(AUSGANG)_WERT | gefiltertes Generatormoment absolut Ausgang | Nm | mdgen_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0 |
| _68 | 0x4618 | STAT_0x4618_WERT | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0_1 | B_lrfoff | - | unsigned char | - | 1 | 1 | 0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1_WERT | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0_1 | B_sbbvk | - | unsigned char | - | 1 | 1 | 0 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2_WERT | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0_1 | B_sbbvk2 | - | unsigned char | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | ua10mo_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | ua10mo2_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank1 | - | lamsbg_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank2 | - | lamsbg2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Kupplungsschalter Status | 0_1 | B_kuppl | - | unsigned char | - | 1 | 1 | 0 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Sporttaster aktiv | 0_1 | B_pedsport | - | unsigned char | - | 1 | 1 | 0 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN_WERT | Status Klima ein | 0_1 | B_koe | - | unsigned char | - | 1 | 1 | 0 |
| _78 | 0x4804 | STAT_SEKUNDAERLUFTPUMPE_WERT | Sekundärluft Pumpe aktiv | 0_1 | B_slp | - | unsigned char | - | 1 | 1 | 0 |
| _79 | 0x4805 | STAT_0x4805_WERT | Startrelais über CAN aktiv | 0_1 | B_estart | - | unsigned char | - | 1 | 1 | 0 |
| _80 | 0x4806 | STAT_0x4806_WERT | Steuergeräte-Innentemperatur | Grad C | tsg | - | unsigned char | - | 0,75 | 1 | -48 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motor Drehzahl | 1/min | nmot_w | - | unsigned integer | - | 0,25 | 1 | 0 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlauf Solldrehzahl | 1/min | nsol_w | - | unsigned integer | - | 0,25 | 1 | 0 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV_WERT | Status LL | 0_1 | B_llr | - | unsigned char | - | 1 | 1 | 0 |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Kilometerstand Auflösung 1 km | - | kmstand_l | - | unsigned long | - | 1,0 | 1 | 0 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Pedalwert Fahrerwunsch in % | %PED | wped_w | - | unsigned integer | - | 0,00152590218931437 | 1 | 0 |
| _85 | 0x5800 | STAT_0x5800_WERT | Zeit nach Start | s | tnse_w | - | unsigned char | - | 25,600000381469695 | 1 | 0 |
| _86 | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | hPa | pu | - | unsigned char | - | 5,0 | 1 | 0 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | - | flglrs | - | unsigned char | - | 1,0 | 1 | 0 |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | - | flglrs2 | - | unsigned char | - | 1,0 | 1 | 0 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | % | rml | - | unsigned char | - | 0,390625 | 1 | 0 |
| _90 | 0x5805 | STAT_0x5805_WERT | Kühlmitteltemperatur OBD | Grad C | tmot | - | unsigned char | - | 0,75 | 1 | -48 |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda Integrator Gruppe 1 | - | fr_w | - | unsigned char | - | 0,0078125 | 1 | 0 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lambda Adaption Summe mul. und add. Gruppe 1 | % | rkat_w | - | signed char | - | 0,2 | 1 | 0 |
| ILIN2 | 0x5808 | STAT_LAMBDA_INTEGRATOR_GRUPPE2_WERT | Lambda Integrator Gruppe 2 | - | fr2_w | - | unsigned char | - | 0,0078125 | 1 | 0 |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Lambda Adaption Summe mul. und add. Gruppe 2 | % | rkat2_w | - | signed char | - | 0,2 | 1 | 0 |
| IPSA2 | 0x580B | STAT_SAUGROHRDRUCK_2_WERT | Saugrohrdruck | hPa | ps_w | - | unsigned char | - | 7,8125 | 1 | 0 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Drehzahl | 1/min | nmot | - | unsigned char | - | 40,0 | 1 | 0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | km/h | vfzg | - | unsigned char | - | 1,25 | 1 | 0 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündzeitpunkt Zylinder 1 | Grad KW | zwout | - | signed char | - | 0,75 | 1 | 0 |
| ITANL | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_LAW_WERT | Ansauglufttemperatur | Grad C | tans | - | unsigned char | - | 0,75 | 1 | -48 |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | 1/min | nmot | - | unsigned char | - | 40,0 | 1 | 0 |
| _100 | 0x5812 | STAT_0x5812_WERT | Luftmasse gemessen | kg/h | mshfm_w | - | unsigned char | - | 3,2 | 1 | 0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | % | rl | - | unsigned char | - | 0,75 | 1 | 0 |
| _102 | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | %PED | wped | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| IBATT | 0x5815 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | ub | - | unsigned char | - | 0,094200000166893 | 1 | 0 |
| _104 | 0x5816 | STAT_0x5816_WERT | Lambda Setpoint | - | lamsons_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| _105 | 0x5817 | STAT_0x5817_WERT | Umgebungstemperatur | Grad C | tumg | - | unsigned char | - | 0,75 | 1 | -48 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmasse gerechnet | kg/h | ml | - | unsigned char | - | 4,0 | 1 | 0 |
| _107 | 0x5819 | STAT_0x5819_WERT | Drehzahl OBD Byte | 1/min | nmot | - | unsigned char | - | 40,0 | 1 | 0 |
| _108 | 0x581A | STAT_0x581A_WERT | Nockenwelle Einlass | Grad KW | vse_spri | - | unsigned char | - | 1 | 1 | 0 |
| SANWE | 0x581B | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Einlass Sollwert | Grad KW | vse_sprs | - | unsigned char | - | 1 | 1 | 0 |
| _110 | 0x581C | STAT_0x581C_WERT | Nockenwelle Auslass | Grad KW | vsa_spri | - | unsigned char | - | 1 | 1 | 0 |
| _111 | 0x581D | STAT_0x581D_WERT | Nockenwelle Auslass Sollwert | Grad KW | vsa_sprs | - | unsigned char | - | 1 | 1 | 0 |
| _112 | 0x581E | STAT_0x581E_WERT | Ansauglufttemperatur | Grad C | tanslin | - | unsigned char | - | 0,75 | 1 | -48 |
| ITMOT | 0x581F | STAT_MOTORTEMPERATUR_WERT | Motortemperatur | Grad C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48 |
| _113 | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | Grad C | tkalin | - | unsigned char | - | 0,75 | 1 | -48 |
| _114 | 0x5821 | STAT_0x5821_WERT | Steuergeräte-Innentemperatur | Grad C | tsg | - | unsigned char | - | 0,75 | 1 | -48 |
| _115 | 0x5822 | STAT_0x5822_WERT | (Motor)-Öltemperatur | Grad C | toel | - | unsigned char | - | 1,0 | 1 | -60 |
| _116 | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | Grad C | tumg | - | unsigned char | - | 0,75 | 1 | -48 |
| _117 | 0x5825 | STAT_0x5825_WERT | Abstellzeit | s | tabst_w | - | unsigned char | - | 256,0 | 1 | 0 |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappe Sensor 1 | %DK | wdk1 | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _119 | 0x5827 | STAT_0x5827_WERT | Lambdasondenheizung vor Katalysator Bank 1 | % | tahrlsu_w | - | unsigned char | - | 0,390625 | 1 | 0 |
| _120 | 0x5828 | STAT_0x5828_WERT | Lambdasondenheizung vor Katalysator Bank 2 | % | tahrlsu2_w | - | unsigned char | - | 0,390625 | 1 | 0 |
| _121 | 0x5829 | STAT_0x5829_WERT | Lambdasondenheizung hinter Katalysator Bank 1 | - | phlsnh | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| _122 | 0x582A | STAT_0x582A_WERT | Lambdasondenheizung hinter Katalysator Bank 2 | - | phlsnh2 | - | unsigned char | - | 0,00999999977648258 | 1 | 0 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomenteingriff über CAN | 0_1 | B_miext | - | unsigned char | - | 1 | 1 | 0 |
| _124 | 0x582C | STAT_0x582C_WERT | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | lamzak_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| _125 | 0x582D | STAT_0x582D_WERT | Korrekturwert der Lambdasondespannung vor Katalysator  | V | kusvk_w | - | signed char | - | 0,001953125 | 1 | -0,25 |
| _126 | 0x582E | STAT_0x582E_WERT | Lambdaamplitude nach Filterung | - | lamsam_w | - | signed char | - | 0,0625 | 1 | 0 |
| _127 | 0x582F | STAT_0x582F_WERT | Abgastemperatur nach Kat aus Modell | Grad C | tkatm | - | unsigned char | - | 5 | 1 | -50 |
| _128 | 0x5830 | STAT_0x5830_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | dynlsu_w | - | unsigned char | - | 0,015625 | 1 | 0 |
| _129 | 0x5831 | STAT_0x5831_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | dynlsu2_w | - | unsigned char | - | 0,015625 | 1 | 0 |
| _130 | 0x5832 | STAT_0x5832_WERT | Abgastemperatur nach Kat aus Modell Bank2 | Grad C | tkatm2 | - | unsigned char | - | 5 | 1 | -50 |
| _131 | 0x5833 | STAT_0x5833_WERT | Lambdasondenistwert, korrigiert um Zusatzamplitude Bank2 | - | lamzak2_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| _132 | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | hPa | pur_w | - | unsigned char | - | 7,8125 | 1 | 0 |
| _133 | 0x5835 | STAT_0x5835_WERT | Herstellercode Generator 1 | - | genmanufak | - | unsigned char | - | 1,0 | 1 | 0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | 1/min/s | ngfil | - | signed char | - | 100,0 | 1 | 0 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Status Drosselklappe Notlauf | 0_1 | B_dkpu | - | unsigned char | - | 1 | 1 | 0 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | L | fstt | - | unsigned char | - | 1,0 | 1 | 0 |
| _137 | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | V | ub | - | unsigned char | - | 0,094200000166893 | 1 | 0 |
| _138 | 0x583D | STAT_0x583D_WERT | Betriebsstundenzähler | min | top_w | - | unsigned char | - | 1536 | 1 | 0 |
| _139 | 0x583E | STAT_0x583E_WERT | Sollwert Drosselklappenwinkel der Notluftposition | %DK | wdknlpr | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _140 | 0x583F | STAT_0x583F_WERT | Drosselklappe Sollwert | %DK | wdks | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _141 | 0x5840 | STAT_0x5840_WERT | Drosselklappenwinkel der Notluftposition | %DK | wdknlp | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _142 | 0x5841 | STAT_0x5841_WERT | SG-Innentemperatur Rohwert | V | wtsg | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _143 | 0x5842 | STAT_0x5842_WERT | Kennung Generatortyp Generator 1 | - | gentypkenn | - | unsigned char | - | 1,0 | 1 | 0 |
| _144 | 0x5843 | STAT_0x5843_WERT | Korrekturwert der Lambdasondespannung vor Katalysator Bank 2 | V | kusvk2_w | - | signed char | - | 0,001953125 | 1 | 0 |
| _145 | 0x5844 | STAT_0x5844_WERT | Chiptemperatur Generator 1 | Grad C | tchip | - | unsigned char | - | 1,0 | 1 | -40 |
| _146 | 0x5845 | STAT_0x5845_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | uulsuv_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _147 | 0x5846 | STAT_0x5846_WERT | Spannung Pedalwertgeber 1 | V | upwg1_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _148 | 0x5847 | STAT_0x5847_WERT | Spannung Pedalwertgeber 2 | V | upwg2_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _149 | 0x5848 | STAT_0x5848_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | uulsuv2_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _150 | 0x5849 | STAT_0x5849_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | uushk_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _151 | 0x584B | STAT_0x584B_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | uushk2_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _152 | 0x584C | STAT_0x584C_WERT | Spannung Drosselklappe Potentiometer 2 | V | udkp2_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | mste_w | - | unsigned char | - | 0,078125 | 1 | 0 |
| _153 | 0x584E | STAT_0x584E_WERT | Spannung Drosselklappe Potentiometer 1 | V | udkp1_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _154 | 0x5850 | STAT_0x5850_WERT | Spannung Motortemperatur | V | wtmot_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _155 | 0x5851 | STAT_0x5851_WERT | Spannung Ansauglufttemperatur | V | wtans | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _156 | 0x5852 | STAT_0x5852_WERT | Kühlmitteltemperatur Kühlerausgang Rohwert | V | wtka | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _157 | 0x5853 | STAT_0x5853_WERT | Spannung Kl.87 Rohwert | V | wub | - | unsigned char | - | 0,094200000166893 | 1 | 0 |
| _158 | 0x5855 | STAT_0x5855_WERT | Mittelwert Bank 1 | - | frm_w | - | unsigned char | - | 0,0078125 | 1 | 0 |
| _159 | 0x5856 | STAT_0x5856_WERT | Mittelwert Bank 2 | - | frm2_w | - | unsigned char | - | 0,0078125 | 1 | 0 |
| _160 | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | ierr | - | unsigned char | - | 0,125 | 1 | 0 |
| IADKA | 0x5858 | STAT_AKTUELLER_DK_WINKEL_WERT | Drosselklappe aktueller Wert | %DK | wdkba | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _162 | 0x5859 | STAT_0x5859_WERT | DMTL Strom Referenzleck | mA | iptrefr_w | - | unsigned char | - | 0,1953125 | 1 | 0 |
| _163 | 0x585A | STAT_0x585A_WERT | DMTL Strom Grobleck | mA | iptglmn_w | - | unsigned char | - | 0,1953125 | 1 | 0 |
| IRLN1 | 0x585C | STAT_0x585C_WERT | Widerstand Lambdasonde hinter Katalysator Bank 1 |  | rinh_w | - | unsigned char | - | 2 | 1 | 0 |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_WERT | Widerstand Lambdasonde hinter Katalysator Bank 2 |  | rinh2_w | - | unsigned char | - | 2 | 1 | 0 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 |  | rinh_w | - | unsigned char | - | 2 | 1 | 0 |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 |  | rinh2_w | - | unsigned char | - | 2 | 1 | 0 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Widerstand Lambdasonde vor Katalysator Bank 1 |  | rinlsu_w | - | unsigned char | - | 0,0390625 | 1 | 0 |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Widerstand Lambdasonde vor Katalysator Bank 2 |  | rinlsu2_w | - | unsigned char | - | 0,0390625 | 1 | 0 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 |  | rinlsu_w | - | unsigned char | - | 0,0390625 | 1 | 0 |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 |  | rinlsu2_w | - | unsigned char | - | 0,0390625 | 1 | 0 |
| _172 | 0x5865 | STAT_0x5865_WERT | Ölstand Mittelwert Langzeit | - | oznivlangt | - | unsigned char | - | 0,29296875 | 1 | 0 |
| _173 | 0x5866 | STAT_0x5866_WERT | Füllstand Motoröl | - | oelstandr | - | unsigned char | - | 1,0 | 1 | 0 |
| _174 | 0x5867 | STAT_0x5867_WERT | Kilometerstand | km | kmstand | - | unsigned char | - | 2560,0 | 1 | 0 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | statsvreg1 | - | unsigned char | - | 1,0 | 1 | 0 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | statsvreg2 | - | unsigned char | - | 1,0 | 1 | 0 |
| _177 | 0x586A | STAT_0x586A_WERT | Batteriespannung von IBS gemessen | V | ubatt_w | - | unsigned char | - | 0,064 | 1 | 6 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA | min | t2hstshort | - | unsigned char | - | 14,9333333969116 | 1 | 0 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit mit Ruhestrom 200 - 1000 mA | min | t3hstshort | - | unsigned char | - | 14,9333333969116 | 1 | 0 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit mit Ruhestrom größer 1000 mA |  | t4hstshort | - | unsigned char | - | 14,933333333 | 1 | 0 |
| _181 | 0x586F | STAT_0x586F_WERT | multiplikativer Gemischadaptionsfaktor | - | frau_w | - | unsigned char | - | 0,0078125 | 1 | 0 |
| _182 | 0x5870 | STAT_0x5870_WERT | Spannung DME Umgebungsdruck | V | udsu_w | - | unsigned char | - | 0,01953125 | 1 | 0 |
| SLAG1 | 0x5871 | STAT_LAMBDA_SOLLWERT_GRUPPE1_WERT | Lambda-Sollwert Gruppe 1 | - | lamsons_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| _184 | 0x5872 | STAT_0x5872_WERT | Reglerversion Generator 1 | - | bsdgenregv | - | unsigned char | - | 1,0 | 1 | 0 |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert Gruppe 2 | - | lamsons2_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| _186 | 0x5876 | STAT_0x5876_WERT | vom Generator empfangenes Lastsignal | % | dffgen | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _187 | 0x5877 | STAT_0x5877_WERT | multiplikativer Gemischadaptionsfaktor Bank2 | - | frau2_w | - | unsigned char | - | 0,0078125 | 1 | 0 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | - | dlahi_w | - | signed char | - | 0,00048828125 | 1 | -0,0625 |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | - | dlahi2_w | - | signed char | - | 0,00048828125 | 1 | -0,0625 |
| ISFGR | 0x587A | STAT_FGR_WERT | Status FGR | - | zstfgr | - | unsigned char | - | 1,0 | 1 | 0 |
| _190 | 0x587B | STAT_0x587B_WERT | Spannung Lambdasonde hinter Kat | V | ushk_w | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _191 | 0x587C | STAT_0x587C_WERT | Spannung Lambdasonde hinter Kat Bank2 | V | ushk2_w | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _192 | 0x587D | STAT_0x587D_WERT | Winkel Excenterwelle Rohwert Führungssensor | ° | exwnkfsr_w | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| _193 | 0x587E | STAT_0x587E_WERT | Winkel Excenterwelle Rohwert Referenzsensor | ° | exwnkrsr_w | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | taml | - | unsigned char | - | 0,390625 | 1 | 0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | - | gangi | - | unsigned char | - | 1,0 | 1 | 0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | Grad C | tmst | - | unsigned char | - | 0,75 | 1 | -48 |
| _197 | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | V | rkr_w[0] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _198 | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | V | rkr_w[1] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _199 | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | % | dfsiggen | - | unsigned char | - | 0,390625 | 1 | 0 |
| _200 | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | V | rkr_w[2] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert Gruppe 1 | - | lamsoni_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Gruppe 2 | - | lamsoni2_w | - | unsigned char | - | 0,0625 | 1 | 0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | s | tnse_w | - | unsigned char | - | 25,6 | 1 | 0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | Grad C | tkerlsu_w | - | unsigned char | - | 6,0 | 1 | -273,15 |
| _2005 | 0x588D | STAT_0x588D_WERT | aktuelle Zeit DMTL Leckmessung | s | tdmlka_w | - | unsigned char | - | 1,6 | 1 | 0 |
| _206 | 0x588E | STAT_0x588E_WERT | Pumpenstrom bei DMTL Pumpenprüfung | mA | iptes_w | - | unsigned char | - | 0,195312500000000 | 1 | 0 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | Grad C | tkerlsu2_w | - | unsigned char | - | 6,0 | 1 | -273,15 |
| _208 | 0x5890 | STAT_0x5890_WERT | Spannung Klopfwerte Zylinder 2 | V | rkr_w[3] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | Nm | mkist_w | - | signed char | - | 4 | 1 | -220 |
| _210 | 0x5892 | STAT_0x5892_WERT | Lambdaamplitude nach Filterung Bank2 | - | lamsam2_w | - | signed char | - | 0,0625 | 1 | 0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | % | migs_w | - | unsigned char | - | 0,390625 | 1 | 0 |
| _212 | 0x5894 | STAT_0x5894_WERT | Verstellbereich VVT-Führungssensor | ° | exwnkfvb_w | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| _213 | 0x5895 | STAT_0x5895_WERT | Verstellbereich VVT-Referenzsensor | ° | exwnkrvb_w | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| _214 | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Katalysator Bank 1 | ° | tanhkm_w | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| _215 | 0x5897 | STAT_0x5897_WERT | Abgastemperatur hinter Katalysator Bank 2 | ° | tanhkm2_w | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Generator Sollspannung | V | ugen | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| _217 | 0x5899 | STAT_0x5899_WERT | Istwert DISA-Position | % | disa_ist | - | unsigned char | - | 0,78125 | 1 | 0 |
| _218 | 0x589A | STAT_0x589A_WERT | O2-Speicherfähigkeit Katalysator | mg | oscdkta_w | - | unsigned char | - | 2 | 1 | 0 |
| _219 | 0x589B | STAT_0x589B_WERT | O2-Speicherfähigkeit Katalysator Bank2 | mg | oscdkta2_w | - | unsigned char | - | 2 | 1 | 0 |
| _220 | 0x589C | STAT_0x589C_WERT | Bit Schubabschaltung | 0_1 | B_sa | - | unsigned char | - | 1 | 1 | 0 |
| _221 | 0x589D | STAT_0x589D_WERT | Abstellposition  Führungssensor Rohwert | ° | exwnabfs_w | - | unsigned char | - | 0,703125000000000 | 1 | 0 |
| _222 | 0x589E | STAT_0x589E_WERT | Status VVT- Entlastungsrelais | 0_1 | B_vvt | - | unsigned char | - | 1 | 1 | 0 |
| _223 | 0x589F | STAT_0x589F_WERT | VVT Istwinkel | Grad | exwnki_w | - | unsigned char | - | 0,8 | 1 | 0 |
| _224 | 0x58A0 | STAT_0x58A0_WERT | VVT Sollwinkel | Grad | exwinks_w | - | unsigned char | - | 0,8 | 1 | 0 |
| _225 | 0x58A1 | STAT_0x58A1_WERT | Ausgegeben Tastverhältnis | % | tvvvtm_w | - | signed char | - | 0,78125 | 1 | 0 |
| _226 | 0x58A2 | STAT_0x58A2_WERT | VVT Motorstrom | A | ivvtm_w | - | signed char | - | 1,5625 | 1 | 0 |
| _227 | 0x58A3 | STAT_0x58A3_WERT | VVT Motortemperatur | Grad C | tvvtm_w | - | unsigned char | - | 1 | 1 | 0 |
| _228 | 0x58A5 | STAT_0x58A5_WERT | VVT Sensorversorgungsspannung | V | wvvtusen | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _229 | 0x58A6 | STAT_0x58A6_WERT | VVT Sensordifferenz | ° | dwvvtfrs_w | - | unsigned char | - | 0,703125 | 1 | 0 |
| _230 | 0x58A7 | STAT_0x58A7_WERT | VVT Endstufentemperatur | Grad C | tvvtes_w | - | unsigned char | - | 1 | 1 | 0 |
| _231 | 0x58A8 | STAT_0x58A8_WERT | Referenzmoment für Aussetzererkennung | % | midmd_w | - | unsigned char | - | 0,390625000000000 | 1 | 0 |
| _232 | 0x58A9 | STAT_0x58A9_WERT | SLS-Status über CAN | - | slsstat | - | unsigned char | - | 1 | 1 | 0 |
| _233 | 0x58AA | STAT_0x58AA_WERT | Korrekturfaktor höhe | - | fho_w | - | unsigned char | - | 0,015625000000000 | 1 | 0 |
| IUHFM | 0x58AD | STAT_SPANNUNG_HFM_WERT | Spannung HFM | V | uhfm_w | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | DK-Adaptionsschritt | - | lrnstep_c | - | unsigned char | - | 1,0 | 1 | 0 |
| _236 | 0x58B1 | STAT_0x58B1_WERT | Funkenbrenndauer Zylinder 1 | ms | dztbd_w[0] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _237 | 0x58B2 | STAT_0x58B2_WERT | Spannung Diagnose-Port VVT-Ansteuerung | V | uvvtdia3v | - | unsigned char | - | 0,012890625000000 | 1 | 0 |
| _238 | 0x58B3 | STAT_0x58B3_WERT | Funkenbrenndauer Zylinder 3 | ms | dztbd_w[1] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _239 | 0x58B4 | STAT_0x58B4_WERT | Versorgungsspannung VVT | V | uvvtr_w | - | unsigned char | - | 0,078125000000000 | 1 | 0 |
| _240 | 0x58B5 | STAT_0x58B5_WERT | Funkenbrenndauer Zylinder 2 | ms | dztbd_w[3] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _241 | 0x58B6 | STAT_0x58B6_WERT | Funkenbrenndauer Zylinder 4 | ms | dztbd_w[2] | - | unsigned char | - | 0,01953125 | 1 | 0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | Bremsdruck | - | pbrems | - | unsigned char | - | 1,0 | 1 | 0 |
| _243 | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | 1/min | nmot_um | - | unsigned char | - | 40,0 | 1 | 0 |
| _244 | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | V | spsn_um | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _245 | 0x58BA | STAT_0x58BA_WERT | Status VVT-Anschlaglernen | - | vvtlrnst | - | unsigned char | - | 1 | 1 | 0 |
| _246 | 0x58BB | STAT_0x58BB_WERT | Stromentnahme Bordnetz durch VVT-Motor | A | ivvtbn_w | - | signed char | - | 1,562500000000000 | 1 | 0 |
| _247 | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | % | rl_um | - | unsigned char | - | 0,75 | 1 | 0 |
| _248 | 0x58BD | STAT_0x58BD_WERT | relativer Füllstand Kraftstofftank | % | rfstt2sv | - | unsigned char | - | 0,39215686917305 | 1 | 0 |
| _249 | 0x58BE | STAT_0x58BE_WERT | Motortemperatur-Ersatzwert aus Modell | Grad C | tmew | - | unsigned char | - | 0,75 | 1 | -48 |
| IMMSR | 0x58BF | STAT_MOMENTENANFORDERUNG_VON_MSR_RELATIV_WERT | relative Momentenforderung von MSR über CAN | % | mimsr | - | unsigned char | - | 0,390625 | 1 | 0 |
| _251 | 0x58C0 | STAT_0x58C0_WERT | Abgasmassenstrom ohne Kraftstoffanteil Bank2 | kg/h | msaovhk2_w | - | unsigned char | - | 3,2 | 1 | 0 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit | us | tsk_l | - | unsigned char | - | 6553,6 | 1 | 0 |
| _253 | 0x58C2 | STAT_0x58C2_WERT | Bedingung Kupplung | 0_1 | B_kuppl | - | unsigned char | - | 1 | 1 | 0 |
| _254 | 0x58C5 | STAT_0x58C5_WERT | Kraftstofftemperatur | Grad C | tkrst | - | unsigned char | - | 0,75 | 1 | -48 |
| _255 | 0x58C6 | STAT_0x58C6_WERT | Abgasmassenstrom ohne Kraftstoffanteil | kg/h | msaovhk_w | - | unsigned char | - | 3,2 | 1 | 0 |
| _256 | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | % | dmllrp_w | - | signed char | - | 0,390625 | 1 | 0 |
| _257 | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | % | dmllrpz_w | - | signed char | - | 0,390625 | 1 | 0 |
| _258 | 0x58CD | STAT_0x58CD_WERT | Berechnete Wicklungstemperatur der Sekundärluftpumpe  | Grad C | twslp_w | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| _259 | 0x58CE | STAT_0x58CE_WERT | Motortemperatur-Referenzwert aus Modell | Grad C | tmrw | - | unsigned char | - | 0,75 | 1 | -48 |
| _260 | 0x58CF | STAT_0x58CF_WERT | SLS in Fahrzeug eingebaut | 0_1 | B_slsfz | - | unsigned char | - | 1 | 1 | 0 |
| _261 | 0x58D0 | STAT_0x58D0_WERT | Bedingung für Sekundärluftpumpe | 0_1 | B_slp | - | unsigned char | - | 1 | 1 | 0 |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | Nm | mkist_w | - | signed char | - | 4 | 1 | -220 |
| _263 | 0x58D2 | STAT_0x58D2_WERT | Status VVT Lageregler | - | stvvtlr | - | unsigned char | - | 1 | 1 | 0 |
| _264 | 0x58D3 | STAT_0x58D3_WERT | Status Fehler Überlast VVT1 | - | stdvovrld | - | unsigned char | - | 1 | 1 | 0 |
| _265 | 0x58D5 | STAT_0x58D5_WERT | Koord. Moment für die Füllung | % | milsol_w | - | unsigned char | - | 0,390625000000000 | 1 | 0 |
| _266 | 0x58D9 | STAT_0x58D9_WERT | Massenstrom Abgas vor Hauptkat | kg/h | msabvhk_w | - | unsigned char | - | 3,2 | 1 | 0 |
| _267 | 0x58DA | STAT_0x58DA_WERT | Massenstrom Abgas vor Hauptkat Bank2 | kg/h | msabvhk2_w | - | unsigned char | - | 3,2 | 1 | 0 |
| _268 | 0x58DB | STAT_0x58DB_WERT | Modelltemperatur im Kat | Grad C | tkihkm_w | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| _269 | 0x58DC | STAT_0x58DC_WERT | Modelltemperatur im Kat Bank 2 | Grad C | tkihkm2_w | - | unsigned char | - | 6,000000000000000 | 1 | -273,15 |
| _270 | 0x58DD | STAT_0x58DD_WERT | Summenzähler Aussetzer | - | fzabgs_w | - | unsigned char | - | 1 | 1 | 0 |
| _271 | 0x58DE | STAT_0x58DE_WERT | Funktionsinterner Zähler | - | ivzabg_w | - | unsigned char | - | 10 | 1 | 0 |
| ADKMF | 0x58E0 | STAT_ABGLEICH_DK_MODELL_FAKTOR_WERT | Abgleich Drosselklappenmodell (Faktor) | - | eisydkfkaf | - | unsigned char | - | 0,0078125 | 1 | 0 |
| ADKMO | 0x58E1 | STAT_ABGLEICH_DK_MODELL_OFFSET_WERT | Abgleich Drosselklappenmodell (Offset) | kg/h | eisydkkoff | - | signed char | - | 8,0 | 1 | 0 |
| AEVMF | 0x58E2 | STAT_ABGLEICH_EV_MODELL_FAKTOR_WERT | Abgleich Einlassventilmodell (Faktor) | - | eisyevfkaf | - | unsigned char | - | 0,0078125 | 1 | 0 |
| AEVMO | 0x58E3 | STAT_ABGLEICH_EV_MODELL_OFFSET_WERT | Abgleich Einlassventilmodell (Offset) | kg/h | eisyevkoff | - | signed char | - | 8,0 | 1 | 0 |
| _276 | 0x58E4 | STAT_0x58E4_WERT | Betriebsart Istwert | - | opmodi | - | unsigned char | - | 1,0 | 1 | 0 |
| _277 | 0x58E7 | STAT_0x58E7_WERT | Spannung Pedalwertgeber 1 Überwachung | V | sp1s_um | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _278 | 0x58E8 | STAT_0x58E8_WERT | Spannung Pedalwertgeber 2 Überwachung | V | sp2s_um | - | unsigned char | - | 0,009765625 | 1 | 0 |
| _279 | 0x58E9 | STAT_0x58E9_WERT | Relative Heizleistungsanforderung für Lambdasondenheizung | % | prhrlsu_w | - | unsigned char | - | 0,781250000000000 | 1 | 0 |
| _280 | 0x58EB | STAT_0x58EB_WERT | Egaspfad als Umweltbedingung  | - | egaspfad | - | unsigned char | - | 1 | 1 | 0 |
| _281 | 0x58EC | STAT_0x58EC_WERT | Momentenpfad | - | mpfad | - | unsigned char | - | 1 | 1 | 0 |
| _282 | 0x58ED | STAT_0x58ED_WERT | Spannung DK Poti 1 am unteren Anschlag | V | udkp1a | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _283 | 0x58EE | STAT_0x58EE_WERT | Spannung PWG Poti 2 | V | upwg2_w | - | unsigned char | - | 0,019531250000000 | 1 | 0 |
| _284 | 0x58EF | STAT_0x58EF_WERT | Tankfüllstand 1 | - | tfstq1l | - | unsigned char | - | 1 | 1 | 0 |
| _285 | 0x58F3 | STAT_0x58F3_WERT | Ladedruck Istwert/Druck vor Drosselklappe | hPa | pvd_w | - | unsigned char | - | 7,812500000000000 | 1 | 0 |
| _286 | 0x58F5 | STAT_0x58F5_WERT | Eingangssignal Rückführregler 1 | - | dlahi_w | - | signed char | - | 0,00048828125 | 1 | 0 |
| _287 | 0x58F6 | STAT_0x58F6_WERT | Eingangssignal Rückführregler 2 | - | dlahi2_w | - | signed char | - | 0,00048828125 | 1 | 0 |
| _288 | 0x58F8 | STAT_0x58F8_WERT | IBS Fehler 1 | - | ibsderrs1 | - | unsigned char | - | 1 | 1 | 0 |
| _289 | 0x58F9 | STAT_0x58F9_WERT | IBS Fehler 1 | - | ibsderrs2 | - | unsigned char | - | 256 | 1 | 0 |
| _290 | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | fteadf | - | signed char | - | 0,5 | 1 | 0 |
| _291 | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | - | zdtev | - | unsigned char | - | 1,0 | 1 | 0 |
| _292 | 0x5A02 | STAT_0x5A02_WERT | Versorgung VVT Rohwert | V | wvvtusen | - | unsigned char | - | 0,01953125 | 1 | 0 |
| _293 | 0x5A03 | STAT_0x5A03_WERT | Versorgung VVT | V | wuvvtr | - | unsigned char | - | 0,094200000000000 | 1 | 0 |
| IUPW1 | 0x5A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V | upwg1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| IUPW2 | 0x5A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V | upwg2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| IUDK1 | 0x5A06 | STAT_DK1_SPANNUNG_WERT | Spannung Drosselklappe Potentiometer 1 | V | udkp1_w | - | unsigned integer | - | 0,001220703125 | 1 | 0 |
| IUDK2 | 0x5A07 | STAT_DK2_SPANNUNG_WERT | Spannung Drosselklappe Potentiometer 2 | V | udkp2_w | - | unsigned integer | - | 0,001220703125 | 1 | 0 |
| IUANS | 0x5A08 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannung Ansauglufttemperatur | V | wtans | - | unsigned char | - | 0,01953125 | 1 | 0 |
| IUKUM | 0x5A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V | wtmot_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| IUUMG | 0x5A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V | udsu_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V | wtsg | - | unsigned char | - | 0,01953125 | 1 | 0 |
| IUSV1 | 0x5A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | uulsuv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| IUSV2 | 0x5A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | uulsuv2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| IUSN1 | 0x5A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | ushk_w | - | unsigned integer | - | 0,0048828125 | 1 | -1 |
| IUSN2 | 0x5A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | ushk2_w | - | unsigned integer | - | 0,0048828125 | 1 | -1 |
| IUAGT | 0x5A18 | STAT_SPANNUNG_ABGASTEMPERATURSENSOR_WERT | Bedingung EKP | 0_1 | B_ekp | - | unsigned char | - | 1 | 1 | 0 |
| ITSGI | 0x5A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | Grad C | tsg | - | unsigned char | - | 0,75 | 1 | -48 |
| WDKS_W | 0x5A24 | STAT_DK_WINKEL_SOLL_WERT | Drosselklappe Sollwert | % | wdks_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0 |
| IPUMG | 0x5A26 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | - | signed integer | - | 0,0390625 | 1 | 0 |
| RFPWG | 0x5A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | %PED | wped_w | - | unsigned integer | - | 0,00152590218931437 | 1 | 0 |
| ILUZ1 | 0x5A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 |  | lutskzyl_w[0] | - | signed integer | - | 0,007105452 | 1 | 0 |
| ILUZ2 | 0x5A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 |  | lutskzyl_w[3] | - | signed integer | - | 0,007105452 | 1 | 0 |
| ILUZ3 | 0x5A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 |  | lutskzyl_w[1] | - | signed integer | - | 0,007105452 | 1 | 0 |
| ILUZ4 | 0x5A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 |  | lutskzyl_w[2] | - | signed integer | - | 0,007105452 | 1 | 0 |
| ISKLO | 0x5A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | 0_1 | B_kl | - | unsigned char | - | 1 | 1 | 0 |
| IUKZ1 | 0x5A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 1 |  | rkrnv6_w[0] | - | signed integer | - | 0,0048828125 | 1 | 0 |
| IUKZ2 | 0x5A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 2 |  | rkrnv6_w[3] | - | signed integer | - | 0,0048828125 | 1 | 0 |
| IUKZ3 | 0x5A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 3 |  | rkrnv6_w[1] | - | signed integer | - | 0,0048828125 | 1 | 0 |
| IUKZ4 | 0x5A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 4 |  | rkrnv6_w[2] | - | signed integer | - | 0,0048828125 | 1 | 0 |
| _319 | 0x5A42 | STAT_0x5A42_WERT | Einspritzzeit Zylinder 1 |  | tez_l[0] | - | unsigned long | - | 0,001 | 1 | 0 |
| _320 | 0x5A43 | STAT_0x5A43_WERT | Einspritzzeit Zylinder 2 |  | tez_l[3] | - | unsigned long | - | 0,001 | 1 | 0 |
| _321 | 0x5A44 | STAT_0x5A44_WERT | Einspritzzeit Zylinder 3 |  | tez_l[1] | - | unsigned long | - | 0,001 | 1 | 0 |
| _322 | 0x5A45 | STAT_0x5A45_WERT | Einspritzzeit Zylinder 4 |  | tez_l[2] | - | unsigned long | - | 0,001 | 1 | 0 |
| IZWZ1 | 0x5A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder1 |  | zwcalcar[0] | - | signed char | - | 0,75 | 1 | 0 |
| ILASB | 0x5A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | % | rml | - | unsigned char | - | 0,390625 | 1 | 0 |
| ISACR | 0x5A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN_WERT | Klimakompressorrelais Ein | 0_1 | B_koe | - | unsigned char | - | 1 | 1 | 0 |
| _326 | 0x5A4F | STAT_0x5A4F_WERT | VVT- Entlastungsrelais Ein | 0_1 | B_vvt | - | unsigned char | - | 1 | 1 | 0 |
| ILAB1 | 0x5A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Katalysator Bank 1 | - | lamsoni_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| ILAB2 | 0x5A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Katalysator Bank 2 | - | lamsoni2_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0 |
| IRNK1 | 0x5A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS hinter Katalysator Bank 1 | 0_1 | B_sbbhk | - | unsigned char | - | 1 | 1 | 0 |
| IRNK2 | 0x5A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS hinter Katalysator Bank 2 | 0_1 | B_sbbhk2 | - | unsigned char | - | 1 | 1 | 0 |
| ISHN1 | 0x5A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung hinter Katalysator Bank 1 | 0_1 | B_hsha | - | unsigned char | - | 1 | 1 | 0 |
| ISHN2 | 0x5A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung hinter Katalysator Bank 2 | 0_1 | B_hsha2 | - | unsigned char | - | 1 | 1 | 0 |
| ISHV1 | 0x5A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Katalysator Bank 1 | 0_1 | B_hstlsua | - | unsigned char | - | 1 | 1 | 0 |
| ISHV2 | 0x5A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Katalysator Bank 2 | 0_1 | B_hstlsua2 | - | unsigned char | - | 1 | 1 | 0 |
| IAHV1 | 0x5A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | tahrlsu_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0 |
| IAHV2 | 0x5A5A | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | tahrlsu2_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0 |
| ISBLS | 0x5A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | 0_1 | S_bls | - | unsigned char | - | 1 | 1 | 0 |
| ISBLT | 0x5A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | 0_1 | S_brs | - | unsigned char | - | 1 | 1 | 0 |
| ISOED | 0x5A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | 0_1 | B_oeldr | - | unsigned char | - | 1 | 1 | 0 |
| ISEBO | 0x5A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Box-Lüfter Ein | 0_1 | B_ebl | - | unsigned char | - | 1 | 1 | 0 |
| _341 | 0x5A66 | STAT_0x5A66_WERT | DMTL Pumpe Ein | 0_1 | B_admtpm | - | unsigned char | - | 1 | 1 | 0 |
| _342 | 0x5A67 | STAT_0x5A67_WERT | DMTL Ventil Ein | 0_1 | B_admtmv | - | unsigned char | - | 1 | 1 | 0 |
| ISMIL | 0x5A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | 0_1 | B_mil | - | unsigned char | - | 1 | 1 | 0 |
| _344 | 0x5A6A | STAT_0x5A6A_WERT | Lampe FGR Ein | 0_1 | L_fgr | - | unsigned char | - | 1 | 1 | 0 |
| ISCEL | 0x5A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | 0_1 | B_epcl | - | unsigned char | - | 1 | 1 | 0 |
| _346 | 0x5A6C | STAT_0x5A6C_WERT | Korrekturfaktor Kraftstoffanzeige | % | kva_korr | - | signed char | - | 0,00100000004749745 | 1 | 0 |
| ISTFG | 0x5A6D | STAT_TASTE_FGR_EIN_WERT | Status Taste FGR | - | zstfgr | - | unsigned char | - | 1,0 | 1 | 0 |
| IAKFT | 0x5A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | - | tkwpwm | - | signed integer | - | 0,100000001490116 | 1 | 0 |
| _349 | 0x5A75 | STAT_0x5A75_WERT | Sekundärluft Ventil | 0_1 | B_slv | - | unsigned char | - | 1 | 1 | 0 |
| IATEV | 0x5A77 | STAT_TEV_PWM_WERT | Tankentlüftungsventil TEV PWM | % | tateout | - | unsigned char | - | 0,390625 | 1 | 0 |
| IAELUE | 0x5A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | % | taml | - | unsigned char | - | 0,390625 | 1 | 0 |
| IAVEP | 0x5A7A | STAT_VANOS_EINLASS_PWM_WERT | VANOS PWM Wert Einlass | % | vse_tv | - | unsigned integer | - | 0,00999999977648258 | 1 | 0 |
| IAVAP | 0x5A7B | STAT_VANOS_AUSLASS_PWM_WERT | VANOS PWM Wert Auslass | % | vsa_tv | - | unsigned integer | - | 0,00999999977648258 | 1 | 0 |
| IINT1 | 0x5A81 | STAT_INTEGRATOR_BANK1_WERT | Integrator Bank 1 | - | fr_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| IINT2 | 0x5A82 | STAT_INTEGRATOR_BANK2_WERT | Integrator Bank 2 | - | fr2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| IMHL1 | 0x5A89 | STAT_MULTIPLIKATIVE_GEMISCHADAPTION_HOHE_LAST_BANK_1_WERT | multiplikative Gemischadaption hohe Last Bank 1 | - | frao_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| IMHL2 | 0x5A8A | STAT_MULTIPLIKATIVE_GEMISCHADAPTION_HOHE_LAST_BANK_2_WERT | multiplikative Gemischadaption hohe Last Bank 2 | - | frao2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| IMNL1 | 0x5A8B | STAT_MULTIPLIKATIVE_GEMISCHADAPTION_NIEDRIGE_LAST_BANK_1_WERT | multiplikative Gemischadaption niedrige Last Bank 1 | - | frau_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| IMNL2 | 0x5A8C | STAT_MULTIPLIKATIVE_GEMISCHADAPTION_NIEDRIGE_LAST_BANK_2_WERT | multiplikative Gemischadaption niedrige Last Bank 2 | - | frau2_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0 |
| IADD1 | 0x5A8D | STAT_ADDITIVE_GEMISCHADAPTION_LEERLAUF_BANK_1_WERT | additive Gemischadaption Leerlauf Bank 1 | % | rkat_w | - | signed integer | - | 0,046875 | 1 | 0 |
| IADD2 | 0x5A8E | STAT_ADDITIVE_GEMISCHADAPTION_LEERLAUF_BANK_2_WERT | additive Gemischadaption Leerlauf Bank 2 | % | rkat2_w | - | signed integer | - | 0,046875 | 1 | 0 |
| _360 | 0x5A8F | STAT_0x5A8F_WERT | Anzahl der Starts mit Benzin im Öl | - | abo | - | unsigned char | - | 1 | 1 | 0 |
| _361 | 0x5A90 | STAT_0x5A90_WERT | Aktueller Startmengenadaptionsfaktor  | - | kstaa | - | unsigned char | - | 0,0078125 | 1 | 0 |
| _362 | 0x5A91 | STAT_0x5A91_WERT | Katalysatordiagnosewert Bank1 | - | avkatf | - | unsigned char | - | 0,00390625 | 1 | 0 |
| _363 | 0x5A92 | STAT_0x5A92_WERT | Katalysatordiagnosewert Bank2 | - | avkatf2 | - | unsigned char | - | 0,00390625 | 1 | 0 |
| SANWA | 0x5A94 | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Auslass Sollwert | Grad KW | vsa_sprs | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| IANWA | 0x5A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass | Grad KW | vsa_adp_fl | - | signed char | - | 0,0500000007450581 | 1 | 0 |
| IANWE | 0x5A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass | Grad KW | vse_adp_fl | - | signed char | - | 0,0500000007450581 | 1 | 0 |
| _367 | 0x5A97 | STAT_0x5A97_WERT | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0_1 | B_vseansch | - | unsigned char | - | 1 | 1 | 0 |
| IAKWF | 0x5A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | - | fofstat | - | unsigned char | - | 1,0 | 1 | 0 |
| IDSLS | 0x5AA1 | STAT_SLS_DIAGNOSE_WERT | Status Diagnose TEV |  | Z_teve_byte | - | unsigned char | - | 1 | 1 | 0 |
| _370 | 0x5AA6 | STAT_0x5AA6_WERT | Status Diagnose VVT Anschläge lernen | - | vvt_ansio | - | unsigned char | - | 1,0 | 1 | 0 |
| IVKMH | 0x5AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | km/h | vfzg_w | - | unsigned integer | - | 0,0078125 | 1 | 0 |
| IZBST | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | min | top_w | - | unsigned integer | - | 6,0 | 1 | 0 |
| _373 | 0x5AB5 | STAT_0x5AB5_WERT | Variante Sekundärluftpumpe | 0_1 | B_slsfz | - | unsigned char | - | 1 | 1 | 0 |
| RTANS | 0x5AB6 | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Rohwert Ansauglufttemperatur 1 | Grad C | tanslin | - | unsigned char | - | 0,75 | 1 | -48 |
| RTKWA | 0x5AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | Grad C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48 |
| IUSAU | 0x5AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Saugrohrdruck | V | uddss_w | - | unsigned integer | - | 0,0048828125 | 1 | 0 |
| _377 | 0x5ABB | STAT_0x5ABB_WERT | Ausgewählter VVT Istwinkel | Grad | exwnki_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| IMLUF | 0x5ABC | STAT_LUFTMASSE_WERT | Luftmasse | kg/h | ml_w | - | unsigned integer | - | 0,100000001490116 | 1 | 0 |
| _379 | 0x5ABD | STAT_0x5ABD_WERT | Starterrelais aktiv | - | B_sta | - | unsigned char | - | 1 | 1 | 0 |
| _380 | 0x5AF6 | STAT_0x5AF6_WERT | Zyl. Individueller Zähler Aussetzerkennung Zylinder 1 | - | fzabgzyl_w[0] | - | unsigned integer | - | 1 | 1 | 0 |
| _381 | 0x5AF7 | STAT_0x5AF7_WERT | Zyl. Individueller Zähler Aussetzerkennung Zylinder 2 | - | fzabgzyl_w[3] | - | unsigned integer | - | 1 | 1 | 0 |
| _382 | 0x5AF8 | STAT_0x5AF8_WERT | Zyl. Individueller Zähler Aussetzerkennung Zylinder 3 | - | fzabgzyl_w[1] | - | unsigned integer | - | 1 | 1 | 0 |
| _383 | 0x5AF9 | STAT_0x5AF9_WERT | Zyl. Individueller Zähler Aussetzerkennung Zylinder 4 | - | fzabgzyl_w[2] | - | unsigned integer | - | 1 | 1 | 0 |
| - | 0x58FF | STAT_UMWELTBEDINGUNG_UNBEKANNT_WERT | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### STATUS_GENMANUFAK

| NR | HERSTELLER |
| --- | --- |
| 0x00 | Hersteller: Bosch |
| 0x01 | Hersteller: Valeo |
| 0x02 | Hersteller: Denso |
| 0x03 | Hersteller: Hitachi |
| 0x04 | Hersteller: nicht definiert |
| 0x05 | Hersteller: Melco |
| 0xFF | Hersteller: unbekannt |

### STATUS_GENTYPKENN

| NR | TYP |
| --- | --- |
| 0x0001 | Generatortyp: C2.1 |
| 0x0002 | Generatortyp: C2.4 |
| 0x0003 | Generatortyp: H3.1 |
| 0x0006 | Generatortyp: M2.5 |
| 0x0009 | Generatortyp: C1.9 |
| 0x000A | Generatortyp: M2.3 |
| 0x000B | Generatortyp: H3.8 |
| 0x000C | Generatortyp: E4 |
| 0x000D | Generatortyp: M3.0 |
| 0x0014 | Generatortyp: E8 |
| 0x001C | Generatortyp: E8+ (mit BSD I) |
| 0x001F | Generatortyp: E8+ (mit BSD II) |
| 0x0100 | Generatortyp: SG7 |
| 0x0103 | Generatortyp: TG23 |
| 0x0104 | Generatortyp: SG9 |
| 0x0108 | Generatortyp: SG12 |
| 0x010C | Generatortyp: SG11 |
| 0x0110 | Generatortyp: TG17 |
| 0x0111 | Generatortyp: TG17 (mit Bosch) |
| 0x0114 | Generatortyp: SG14 |
| 0x0115 | Generatortyp: FG18 |
| 0x0118 | Generatortyp: TG15 |
| 0x0119 | Generatortyp: FG23 |
| 0x0203 | Generatortyp: SC3 |
| 0x0206 | Generatortyp: SC6 |
| 0x0507 | Generatortyp: CL 8+ Prince |
| 0x0513 | Generatortyp: CL 12+ Prince |
| 0xFFFF | Generatortyp: unbekannt |

### _ME17_N45TUE_TABEL_STATUS_OBD_MONITOR

| NR | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### _ME17_N45TUE_TABLE_FS

| NR | TEXT |
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

### _ME17_N45TUE_TABLE_ST_DFAD

| NR | TEXT |
| --- | --- |
| 0 | Gemischadaption gesperrt |
| 1 | Gemischadaption freigegeben |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_LOW_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Drosselklappen Adaption nicht abgeschlossen |
| 1 | Drosselklappen Adaption abgeschlossen |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_LOW_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_LOW_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Tankentlueftung mit hoher Beladung inaktiv |
| 1 | Tankentlueftung mit hoher Beladung aktiv |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_LOW_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Verriegelungsanforderung Wegfahrsperre fuer Einspritzung inaktiv |
| 1 | Verriegelungsanforderung Wegfahrsperre fuer Einspritzung aktiv |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung Bank 1 nicht aktiv |
| 1 | Lambdaregelung Bank 1 aktiv |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung Bank 2 nicht aktiv |
| 1 | Lambdaregelung Bank 2 aktiv |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Lambdasonde vor Katalysator Bank 1 nicht betriebsbereit |
| 1 | Lambdasonde vor Katalysator Bank 1 betriebsbereit |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Lambdasonde vor Katalysator Bank 2 nicht betriebsbereit |
| 1 | Lambdasonde vor Katalysator Bank 2 betriebsbereit |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Lambdasonde hinter Katalysator Bank 1 nicht betriebsbereit |
| 1 | Lambdasonde hinter Katalysator Bank 1 betriebsbereit |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Lambdasonde hinter Katalysator Bank 2 nicht betriebsbereit |
| 1 | Lambdasonde hinter Katalysator Bank 2 betriebsbereit |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### _ME17_N45TUE_TABLE_SWITCH_POSITION_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### _ME17_N45TUE_TABLE_ST_DKAT

| NR | TEXT |
| --- | --- |
| 0 | Funktionstest aktiv - Freigabebedingung fuer Katalysatordiagnose gegeben |
| 1 | Funktionstest inaktiv - Freigabebedingungen fuer Katalysatordiagnose nicht gegeben |
| 2 | -- [Status 2 DKAT not used] |
| 3 | -- [Status 3 DKAT not used] |
| 4 | -- [Status 4 DKAT not used] |
| 5 | Funktionsanforderung ueber Kurztest nicht gegeben |
| 6 | -- [Status 6 DKAT not used] |
| 7 | Funktionsabbruch aufgrund von Fehlereintraegen |
| 8 | Funktion vollstaendig durchlaufen (Zyklus-Flag = true) und kein Fehler erkannt (Error-Flag = false) |
| 9 | Funktion vollstaendig durchlaufen (Zyklus-Flag = true) und Fehler erkannt (Error-Flag = true) |

### _ME17_N45TUE_TABLE_ST_EISYGD

| NR | TEXT |
| --- | --- |
| 0 | Massestromregler auf DK nicht erfolgt |
| 1 | Massestromregler auf DK erstmalig erfolgt |

### _ME17_N45TUE_TABLE_ST_GAS

| NR | TEXT |
| --- | --- |
| 0 | Gemischadaptionsphase inaktiv |
| 1 | Gemischadatpionsphase aktiv |

### _ME17_N45TUE_TABLE_ST_LSVK_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Dynamik LSU noch nicht geprueft |
| 1 | Dynamik LSU geprueft |

### _ME17_N45TUE_TABLE_ST_LSVK_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Dynamikueberwachung LSU inaktiv |
| 1 | Dynamikueberwachung LSU aktiv |

### _ME17_N45TUE_TABLE_ST_GENTEST

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

### _ME17_N45TUE_TABLE_GENIUTEST_ERR_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorregler plausibel |
| 1 | Generatortest, Generatorregler unplausibel |

### _ME17_N45TUE_TABLE_GENIUTEST_AB_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### _ME17_N45TUE_TABLE_ST_DFL0

| NR | TEXT |
| --- | --- |
| 1 | Lambdaregelung inaktiv - Bedingungen fuer geregelten Betrieb sind noch nicht erfuellt |
| 2 | Lambdaregelung aktiv - Lambdasonde(n) Signale werden fuer den geregelten Betrieb genutzt |
| 4 | Lambdaregelung inaktiv - aufgrund von Fahrzustaenden (z.B. Beschleunigungsanreicherung, Verzoegerungsabmagerung) |
| 8 | Lambdaregelung inaktiv - aufgrund eines erkannten Fehlers |
| 16 | Lambdaregelung aktiv - allerdings ein Sensor fehlerhaft, es wird nur ein Sensor fuer den geregelten Betrieb genutzt |
| 32 | - [Bit 5 not used] |
| 64 | - [Bit 6 not used] |
| 128 | - [Bit 7 not used] |
| 0xFF | --- |

### _ME17_N45TUE_TABLE_ST_LLERH

| NR | TEXT |
| --- | --- |
| 0 | Funktion aktiv |
| 1 | -- [Status 1 LLERH not used] |
| 2 | -- [Status 2 LLERH not used] |
| 3 | -- [Status 3 LLERH not used] |
| 4 | -- [Status 4 LLERH not used] |
| 5 | Funktion inaktiv |

### _ME17_N45TUE_TABLE_TTEMP

| NR | TEXT |
| --- | --- |
| 0 | 0x0000000: keine Aktion |
| 1 | 0xbbb0001: Setzen/Beschleunigen |
| 2 | 0xbbb0010: Naechsthoehere Stufe waehlen (nur wenn ACC nicht verbaut) |
| 4 | 0xbbb0100: Setzen/Verzoegern |
| 8 | 0xbbb1000: Naechstniedrigere Stufe waehlen (nur wenn ACC nicht verbaut) |
| 16 | 0xb01bbbb: Aus |
| 32 | 0x1bbbbbb: Wiederaufnahme |
| 127 | 0x1111111: Signal ungueltig |

### _ME17_N45TUE_TABLE_AKTIVIERUNG

| NR | TEXT |
| --- | --- |
| 0 | Aktiviert |
| 1 | Deaktiviert |

### _ME17_N45TUEENERGIESPARMODEOPTION

| NR | TEXT |
| --- | --- |
| 0 | energiesparmode deaktiviert |
| 1 | Fertigungsmodus |
| 2 | Transportmodus |
| 4 | Werkstattmodus |

### _ME17_N45TUE_CNV_S_7_DEF_BA_470_CM

| NR | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | ungedrosselter Betrieb |
| 2 | gedrosselter Betrieb |
| 3 | gedrosselter Betrieb mit kleinem Hub |
| 6 | Drosselklappennotlauf |
| 7 | VVT-Notlauf 1 |
| 8 | VVT-Notlauf 2 |

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

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0xFF | 01 | 12 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 00 |  | 00 |  | PM.Recovery |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe von Zuendung und Einspritzung (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört, Motorlauf gesperrt) |
| 0x01 | Freigabe von Zuendung und Einspritzung erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe von Zuendung und Einspritzung abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |

### RDYSTATUS

| STATUS | TEXT |
| --- | --- |
| 0x00 | READY |
| 0x01 | NOT READY |
| 0x02 | MONITOR NOT SUPPORTED |
