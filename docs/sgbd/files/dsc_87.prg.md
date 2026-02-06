# dsc_87.prg

## General

|  |  |
| --- | --- |
| File | dsc_87.prg |
| Type | PRG |
| Jobs | 121 |
| Tables | 37 |
| Origin | BMW EF-513 Kusch |
| Revision | 21.000 |
| Author | BMW EF-513 Kusch |
| ECU Comment | Conti_Teves MK60, BMW_FAST, E8x,E9x ausser E83 / 84 und E9x-16 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitaets Control DSC E87,E90  |  |  |
| ORIGIN | string | BMW EF-513 Kusch |  |  |
| REVISION | string | 21.000 |  |  |
| AUTHOR | string | BMW EF-513 Kusch |  |  |
| COMMENT | string | Conti_Teves MK60, BMW_FAST, E8x,E9x ausser E83 / 84 und E9x-16 |  |  |
| PACKAGE | string | 1.52 |  |  |
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

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

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

### SEED

Status Eingaenge E87 DSC_MK60 KWP2000:$27,$03 oder  $27,$07 SecurityAccess service

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### IDENT_PRODUCTION_DATA

KWP2000: $1A,$8F ReadECUIdentification Ident-Daten des SG ...

_No arguments._

### IDENT_VIN

KWP2000: $1A,$90 ReadECUIdentification Ident-Daten des SG: Fahrgestellnummer

_No arguments._

### IDENT_TEVES_ECU_SW_NR

KWP2000: $1A,$94 ReadECUIdentification Ident-Daten des SG: SW Nummer

_No arguments._

### IDENT_PROGRAMMING_DATE

KWP2000: $1A,$99 ReadECUIdentification Ident-Daten des SG: Herstelldatum

_No arguments._

### C_C_SCHREIBEN

Codierdaten schreiben Standard Codierjob Fuer die Codierdaten werden als Argument ein vorgefuellter Binaerbuffer uebergeben KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_AUFTRAG

Codierdaten schreiben und ruecklesen Standard Codierjob Fuer die Codierdaten werden als Argument ein vorgefuellter Binaerbuffer uebergeben KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### _COD_SCHREIBEN_DSC

KWP2000: $2E WriteDataByCommonIdentifier $3000 Codierdaten schreiben Es koennen beliebige viele Codierdaten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 16 Keine Checksumme im ersten Datenbyte eingeben die Checksumme wird automatisch berechnet die Telegrammlaenge wird automatisch berechnet Job DIAGNOSE_MODE ist integriert

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Bereich: 0-255 bzw. 0x00-0xFF |

### _COD_SCHREIBEN_ZUSATZFUNKTIONEN

Zusatzfunktionen auscodieren Es kann max. 1 Argument uebergeben werden BB_ON oder BB_OFF:    Bremsbereitschaft SST_ON oder SST_OFF:  Softstop TB_ON oder TB_OFF:    Trockenbremsen AFA_ON oder AFA_OFF:  Anfahrassistent FBS_ON oder FBS_OFF:  Fading Brake Support ASL_ON oder ASL_OFF:  Anhaengerschlingerlogik DEF_E5:               setzt die Defaultcodierung fuer MK60_E5 DEF_PSI:              setzt die Defaultcodierung fuer MK60_PSI Argument: z.B.: SST_OFF werden keine Argumente übergeben, dann werden die ausgelesenen Codierdaten unveraendert zurueckgeschrieben KWP2000: $2E WriteDataByCommonIdentifier $300x codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | Zusatzfunktion |

### _COD_SCHREIBEN_SZL

KWP2000: $2E WriteDataByCommonIdentifier $3001 Codierdaten schreiben Es muss 1 Codierbyte uebergeben werden Bereich: 0-255 bzw. 0x00-0xFF Musterametersatz: 12 oder 0x0C Job DIAGNOSE_MODE ist integriert

| Name | Type | Description |
| --- | --- | --- |
| C_BYTE | int | Bereich: 0-255 bzw. 0x00-0xFF |

### _COD_LESEN

Auslesen der Codierdaten Es muessen 2 Byte (Blocknummer) als Hex_String uebergeben werden Argument fur DSC: z.B.: 30,00 Argument fur SZL: z.B.: 30,01 KWP2000: $22 ReadDataByCommonIdentifier $300x Codierdaten Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BLOCK | string | Codierblock 30,00 ... 30,05 |

### STATUS_RADGESCHWINDIGKEIT

Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle RAD KWP2000: $21,$07 ReadDataByLocalIdentifier service Radgeschwindigkeiten auslesen

_No arguments._

### STATUS_SCHALTER

KWP2000: $21,$05 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_SENSOREN

KWP2000: $21,$06 ReadDataByLocalIdentifier service gueltig ab I3.70

_No arguments._

### STATUS_SENSOREN_OFFSET

KWP2000: $21,$02 ReadDataByLocalIdentifier service gueltig ab I3.70

_No arguments._

### BET_AKTIV

Bandendetest aktivieren KWP2000: $31 StartRoutineByLocalIdentifier service $23 BET BET_AKTIV beinhaltet den Job DIAGNOSE_MODE

_No arguments._

### BET_PASSIV

Bandendetest passiv schalten KWP2000: $31 StartRoutineByLocalIdentifier service $23 BET BET_PASSIV beinhaltet den Job DIAGNOSE_MODE

_No arguments._

### STEUERN_DIGITAL_DX

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) davon koennen bis maximal 9 Argumente vorgegeben werden E or W EVVL AVVL EVVR AVVR EVHL AVHL EVHR AVHR PUMPE SV1 SV2 EUV1 EUV2 Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Musterparametersatz_1: "E,EVVL,EVVR,SV1,0,0,0,0,0,0,800,PUMPE,0,0,0,0,0,0,0,0,1000" Musterparametersatz_2: "W,EVVL,EVVR,EVHL,EVHR,AVVL,AVVR,AVHL,AVHR,0,200,PUMPE,0,0,0,0,0,0,0,0,2000" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) in jedem Job koennen dann 9 beliebige Stellglieder angesteuert werden und zwar 1 Stellgliedgruppe vor dem Zeitglied und 1 Stellgliedgruppe nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit:  W_ZEIT in ms als letzter Parameter steht eine Wartezeit zum Job Status OK WAIT_STATUS_JOB in ms NUR volle tausender Werte eingeben (1000,2000....) eine Stellgliedgruppe besteht immer aus 9 Argumenten (9 Stellglieder) werden weniger als 9 Stellglieder angesteuert so sind die restlichen mit "0" zu besetzen(siehe Musterparametersatz_1)

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
| W_ZEIT | int | Wartezeit vor Ansteuerung  naechster Stellgliedersequenz |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |
| ORT14 | string | gewuenschte Komponente 14 |
| ORT15 | string | gewuenschte Komponente 15 |
| ORT16 | string | gewuenschte Komponente 16 |
| ORT17 | string | gewuenschte Komponente 17 |
| ORT18 | string | gewuenschte Komponente 18 |
| WAIT_STATUS_JOB | int | Wartezeit bis Job Status kommt |

### STEUERN_DIGITAL

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) es koennen  maximal 17 Argumente vorgegeben werden E oder W,EVVL, AVVL,EVVR,AVVR,EVHL,AVHL,EVHR,AVHR,PUMPE,SV1,SV2,EUV1,EUV2 Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Musterparametersatz_1: "E,EVVL,EVVR,SV1,800,PUMPE," Musterparametersatz_2: "W,EVVL,EVVR,EVHL,EVHR,AVVL,AVVR,1000,AVHL,AVHR,PUMPE" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es koennen 2 beliebige Stellgliedgruppen angesteuert werden und zwar 1 Stellgliedgruppe vor dem Zeitglied und 1 Stellgliedgruppe nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit in ms

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

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) Es koennen max 13 Ausgaenge vorgegeben werden E or W EVVL AVVL EVVR AVVR EVHL AVHL EVHR AVHR PUMPE SV1 SV2 EUV1 EUV2 BLS Musterparametersatz: "W,EVVL,EVVR,EVHL,EVHR,AVVL,AVVR,PUMPE" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Die Ventilansteuerung wird solange wiederholt, bis der Bremslichtschalter wieder geloest wird, max. jedoch 200 Zyklen lang (ca.8sec) die Ventilansteuersequenz wird vor und hinter dem Zeitglied identisch eingetragen der Defaultzeitwert (Zeitglied) beträgt 10ms

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

### NA_ENTLUEFTUNG_RE_DX

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### NA_ENTLUEFTUNG_LI_DX

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### NA_ENTLUEFTUNG_VA_DX

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### NA_ENTLUEFTUNG_HA_DX

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### _VAKUUM_DX

Job dient der Vakuumbefuellung waehrend der Evakuierungsphase werden die AV- und die DSC-Umschaltventile fuer 10 sec angetaktet Job DIAGNOSE_MODE ist integriert

_No arguments._

### _VAKUUM_PUMPE_DX

Job dient der Vakuumbefuellung waehrend der Befuellphase wird die Pumpe und es werden die AV- und die DSC-Umschaltventile fuer 10 sec angetaktet Job DIAGNOSE_MODE ist integriert

_No arguments._

### IDENT_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $80 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 29 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 29 Bereich:  0x00-0xFF |

### IDENT_PROGRAMMING_DATE_SCHREIBEN

KWP2000:$3B,$99 WriteDataByLocalIdentifier service Ident-Daten des SG schreiben: Herstelldatum

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 4 Ident_Daten als ein Hex_String uebergeben werden: z.B. 19,99,12,27 Datum: 27.12.1999 Bereich:  0x00-0xFF |

### IDENT_PRODUCTION_DATA_SCHREIBEN

KWP2000:$3B,$8F WriteDataByLocalIdentifier service Ident-Daten des SG schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 12 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,02,03,04,05 ... 12 Bereich:  0x00-0xFF |

### STATUS_LWS_LI_RE_MAX

Auslesen der CAN Botschaft LWS_1 KWP2000: $22 ReadDataByCommonIdentifier $01F5 CAN_LWS_1 Job laeuft max. 16 sec: werden die Max-Werte vorher erreicht, wird der Job abgebrochen

_No arguments._

### STATUS_LESEN_RPA

KWP2000:$21,$04 ReadDataByLocalIdentifier service Alle RPA Daten auslesen

_No arguments._

### RPA_RESET

KWP2000:$31,$25 StartRoutineByLocalIdentifier service resertiert alle gelernten RPA Werte

_No arguments._

### RPA_EOL_PASSIV

KWP2000:$31,$26 StartRoutineByLocalIdentifier service Auslieferungsmodus der Werke lernt keinen neuen RPA Werte RPA muss beim Kunden resertiert werden

_No arguments._

### _FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus    : Default

_No arguments._

### _ANZAHL_SUBBUS_TEILNEHMER_LESEN

Anzahl Subbus Teilnehmer lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 Anzahl Subbus Teilnehmer lesen Modus    : Default

_No arguments._

### DF_AUSGANG_AKTIVIEREN

KWP2000:$31,$27 StartRoutineByLocalIdentifier service 5. Drehzahlfühlerausgang aktivieren

| Name | Type | Description |
| --- | --- | --- |
| DF_AUSGANG_ZUSTAND | string | P = passiv, nicht aktivieren oder S = Stillstand oder F = Fahrt |

### STATUS_CBS_SENSOR_BBV

CBS Bremsbelagverschleiss (BBV) Sensor auslesen Verschleiss-Schwellen: 2_stufig Fuer die Zuordnung Text-Wert siehe Tabelle CBS_BBV KWP2000: $21 $09 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_CBS_BBV_DICKE

Lesen  CBS Bremsbelagdicke und Korrekturfaktoren KWP2000: $23 $03ReadMemoryByAddress

_No arguments._

### DRUCKSENSOR_DSC_ABGLEICHEN

KWP2000: $31,$20 StartRoutineByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |

### QUERBESCHLEUNIGUNG_DSC_ABGLEICHEN

KWP2000: $31,$22 StartRoutineByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |

### LAENGSBESCHLEUNIGUNG_DSC_ABGLEICHEN

KWP2000: $31,$24 StartRoutineByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |

### LENKWINKEL_DSC_ABGLEICHEN

KWP2000: $31,$21 StartRoutineByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| LWS_OFFSET_KORREKTUR_GRAD | real | LWS-Offset in Grad Unbedingt ein PUNKT als Dezimaltrennzeichen benutzen Format: -0.123 Gueltigkeitsbereich: -1°.. 1° Offset=0 (Defaultwert), wenn kein Argument uebergeben wird |

### ABGLEICH_ANALOG_EV

KWP2000:$31,$28 StartRoutineByLocalIdentifier service Abgleich Analog Einlassventil

_No arguments._

### ABGLEICH_ANALOG_MCI_V

KWP2000:$31,$29 StartRoutineByLocalIdentifier service Abgleich Analog MCI Ventile

_No arguments._

### STAT_ERGEBNIS_ABGLEICH_ROUTINE

Ergebnis der Routine abholen Musterparametersatz: "ANALOG_MCI_V" fuer Abgleich Analog MCI Ventil Musterparametersatz: "ANALOG_EV" fuer Abgleich der analogen Einlassventile Musterparametersatz: "LWS" fuer Abgleich Lenkwinkelsensor oder mit 2. Argument "R": "ANALOG_EV,R" oder "ANALOG_MCI_V,R" oder "LWS,R" dann wird eine Schleife max. 20sec durchlaufen, bis endgueltiges Ergebnis der Routine vorliegt jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Fuer die Zuordnung der Ausgabe Text-Wert siehe Tabelle ABGLEICH_V_ERGEBNIS KWP2000: $33 $28/$29 RequestRoutineResultsByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TYP | string | Typ der Routine angeben |
| RESULT | string | mit R als Argument wird das Result mehrfach abgefragt, bis pos. Ergebnis vorliegt ohne R als Argument liefert dieser Job nur einmal das Result der Routine zurück |

### STATUS_F_CAN_TASTER_AUDIO_TEL

Botschaft des Tasters Audio/Telefon auslesen Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle AUDIO_TEL KWP2000: $22 ReadDataByCommonIdentifier $01D6 Botschaft des Tasters Audio/Telefon auslesen Modus    : Default

_No arguments._

### STATUS_F_CAN_TEMPOMAT_ACC

Botschaft des Tempomats/ACC auslesen Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle TEMP_ACC KWP2000: $22 ReadDataByCommonIdentifier $0194 - Botschaft des Tempomats/ACC auslesen Modus    : Default

_No arguments._

### STATUS_F_CAN_WISCHERTASTER

Botschaft desWischertasters auslesen Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle WISCHER KWP2000: $22 ReadDataByCommonIdentifier $02A6 - Botschaft des Wischertasters auslesen Modus    : Default

_No arguments._

### _FS_BUS_LOESCHEN

KWP2000: $14 ClearDiagnosticInformation FFFE Fehlerspeicher loeschen Job DIAGNOSE_MODE ist integriert

_No arguments._

### _FS_BUS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus nur fuer Bus-Fehlercodes:0xFF,0xFE Modus  : Default

_No arguments._

### _CCP_MODE

KWP2000:$31,$31 StartRoutineByLocalIdentifier service CCP Mode aktivieren wird nur im Access-Level D unterstuetzt Job nicht mehr in Serienprojekten verfuegbar

| Name | Type | Description |
| --- | --- | --- |
| CCP_MODE_ZUSTAND | string | P = passiv, nicht aktivieren oder A = aktivieren |

### _TEL_SCHREIBEN

KWP2000 Dieser Job bietet die Moeglichkeit an, ein eigenes Telegramm zu verschicken Es muessen 2 Argumente eingegeben werden, beide mit "Strich_Punkt" getrennt (nicht mit Komma!): Erstes Argument: E oder W Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode und Telegramm-Ausfuehren: Mit dem Parameter"W" wird nur das Telegramm ausgefuehrt Zweiter Argument: Die ersten 3 Bytes des Telegramms (Format,Target,Source) sind schon vorhanden die restlichen Bytes als ein Hex_String, alle mit Komma getrennt z.B. 00,11,22,... Keine Laenge eingeben, sie wird automatisch berechnet Musterparametersatz_1: "E,00,11,22,33" Musterparametersatz_2: "W,00,11,22,33" Aufpassen: 2 Argumente (E_OR_W,T_BYTES) mit "Strich_Punkt" getrennt (nicht mit Komma !) nach dem E oder W immer "Strich_Punkt" aber folgende T_Bytes mit Komma getrennt!

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| T_BYTES | string | Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_F_CAN_LW

ab V10.000 wird nur noch die C9 Botschaft ausgelesen (vorher C8) Botschaft des Lenkwinkels auslesen (wird von VS benoetigt), um zwischen Lenkwinkel_Oben (LWS) und Summen_LW (AFS) zu unterscheiden Fuer die Zuordnung Text-Wert siehe Tabelle F_CAN_LW KWP2000: $22 ReadDataByCommonIdentifier $0118 Botschaft des Austausch_AFS_DSC auslesen KWP2000: $22 ReadDataByCommonIdentifier $00C9 Botschaft des Lenkradwinkel_Oben auslesen Modus    : Default

_No arguments._

### STATUS_F_CAN_TYP_SENSORCLUSTER

F_CAN Botschaft CLU6 (Clustertyp: Anforderung der Werke), Unterscheidung ohne/mit redundantem Gierratensensor Fuer die Zuordnung Text-Wert siehe Tabelle F_CAN_CLUSTER KWP2000: $22 ReadDataByCommonIdentifier $0140 Botschaft CLU6 auslesen Modus    : Default

_No arguments._

### _FS_LESEN_INPA

KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes KWP2000: $18 ReadDiagnosticTroubleCodesByStatus kombinierter Job §17 und §18 Fehlerspeicher lesen mit allen Umweltdaten Ausgabe der Results wie INPA

_No arguments._

### _EEPROM_LESEN

Lesen  EEPROM Zellen Zwei Argumente muessen eingegeben werden: die Start-Adresse und die End-Adresse. Musterparametersatz: "Start-Adresse,End-Adresse", jedoch mit "Strichpunkt" getrennt. Musterparametersatz: "224,244", jedoch mit "Strichpunkt" getrennt. Musterparametersatz: "0x00E0,0x00F4", jedoch mit "Strichpunkt" getrennt. Adressenbereich: 0x000000 - 0x0003FF KWP2000: $23 $03 ReadMemoryByAddress

| Name | Type | Description |
| --- | --- | --- |
| ARG_START_ADRESSE | int | Start Adresse min 0000 hex |
| ARG_END_ADRESSE | int | End Adresse max FF hex |

### _STATUS_ADCR

Lesen  EEPROM Zellen Adressenbereich: 0x000000 - 0x0003FF KWP2000: $23 $03 ReadMemoryByAddress

_No arguments._

### _FS_LESEN_SELEKTIV

Fehlerspeicher lesen (Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Es muss ein Argument eingegeben werden: "DSC" oder "dsc", um DSC Fehler auszulesen "BUS" oder "bus", um BUS Fehler auszulesen "SZL" oder "szl", um SZL Fehler auszulesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLER | string | welche Fehler sollen ausgelesen werden "DSC" oder "dsc" fuer DSC Fehler "BUS" oder "bus" fuer BUS Fehler "SZL" oder "szl" fuer SZL Fehler |

### BET_AKTIV_1

Bandendetest aktivieren KWP2000: $31 StartRoutineByLocalIdentifier service $23 BET BET_AKTIV beinhaltet den Job DIAGNOSE_MODE

_No arguments._

### STATUS_EVENT_COUNTER

KWP2000: $22,$F01x ReadDataByCommonIdentifier service

_No arguments._

### LAENGSBESCHLEUNIGUNG_PLAUSICHECK_PASSIV

KWP2000: $31,$30 StartRoutineByLocalIdentifier service deaktiviert den Laengsbeschleunigungsplausicheck waehrend der Rollenfahrt im Prüfstand

_No arguments._

### STATUS_EVENT_LOESCHEN

KWP2000: $2E,$F01x WriteDataByCommonIdentifier service loescht den Event Counter Es kann max. 1 Argument uebergeben werden FLR:   loescht den Zaehler Eingriffe Fahrleistungsreduzierung FBS_1: loescht den Zaehler Fading Brake Support Schwelle 1 FBS_2: loescht den Zaehler Fading Brake Support Schwelle 2 DSC:   loescht die km-Laufleistung DSC passiv getastet SPORT: loescht die km-Laufleistung Sport Mode aktiv getastet DTC:   loescht den Zaehler DTC Taster EIN getastet ASC:   loescht den Zaehler ASC Temperaturabschaltungen Argument: z.B.: DSC

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | zu loeschender Zaehler |

### STATUS_IDENT_HYDRAULIK

Auslesen des DSC Sensor-Clusters KWP2000: $22 ReadDataByCommonIdentifier $1603 DSC Ident Hydraulik lesen Modus    : Default

_No arguments._

### STATUS_IDENT_SENSORCLUSTER

Auslesen des DSC Sensor-Clusters KWP2000: $22 ReadDataByCommonIdentifier $1602 DSC Sensor-Cluster  lesen Modus    : Default

_No arguments._

### STATUS_IDENT_SZL

Auslesen der Schalt_Zentrum_Lenksäule KWP2000: $22 ReadDataByCommonIdentifier $1601 Schalt_Zentrum_Lenksäule lesen Modus    : Default

_No arguments._

### STATUS_IDENT_SENSORCLUSTER_2

Auslesen des 2. DSC Sensor-Clusters (nur AFS) KWP2000: $22 ReadDataByCommonIdentifier $1604 DSC Sensor-Cluster  lesen Modus    : Default

_No arguments._

### STATUS_WLC_ZAEHLER

KWP2000: $21,$0A ReadDataByLocalIdentifier service Anzahl der Wandler Launch Control (WLC) Beschleunigungsvorgaenge bei Zaehlerstand 500 wird die WLC-Funktion deaktiviert es erfolgt ein Info-Eintrag in den Fehlerspeicher Wechsel der DSC Hydraulikeinheit erforderlich

_No arguments._

### WLC_ZAEHLER_SCHREIBEN

KWP2000: $3B,$0A WriteDataByLocalIdentifier service schreibt den WLC Zaehlerstand, Security Level B erforderlich Eingabe des Zaehlerstandes als Dezimalzahl Argument: z.B.: 431 kein Argument schreibt den Zaehlerstand 0xFFFF (Anlieferungszustand)

| Name | Type | Description |
| --- | --- | --- |
| ARG | long | zu schreibender Zaehlerstand |

### STEUERN_HYDRO_SPUELEN

DSC Hydroaggregat spuelen nach der Befuellung soll Nacharbeit beim Pedalchecker reduzieren dieser Job ist nur fuer die Fertigung relevant Job DIAGNOSE_MODE ist integriert

_No arguments._

### STATUS_LESEN_RPA_M5

KWP2000:$21,$04 ReadDataByLocalIdentifier service Alle RPA Daten auslesen

_No arguments._

### _STATUS_LESEN_RPA_M3

KWP2000:$21,$0B ReadDataByLocalIdentifier service Alle RPA Daten auslesen

_No arguments._

### PRE_VENTIL_KALIBRIERUNG

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

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
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
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
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
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
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
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
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0xFFFF | unbekannter Verbauort | - |

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
| 0x5D8E | 5D8E - falscher Sensorcluster. |
| 0x5D8F | 5D8F - Sensorcluster Fehler intern. |
| 0x5D97 | 5D97 - Sensorcluster Versorgungsspannung ausserhalb gueltigem Bereich. |
| 0x5D9A | 5D9A - Drucksensor vorne links elektrisch defekt. |
| 0x5D9B | 5D9B - Drucksensor vorne links Plausibilitaet. |
| 0x5D9C | 5D9C - Drucksensor vorne links Vorderachse Plausibilitaet. |
| 0x5D9D | 5D9D - Drucksensor vorne links hydraulische Leckage Vorderachse |
| 0x5D9E | 5D9E - Drucksensor vorne links p1 Gradient Fehler. |
| 0x5D9F | 5D9F - Drucksensor vorne links Plausibilitaet Feinabstimmungsfehler. |
| 0x5DA7 | 5DA7 - hydraulische Leckage Vorderachse oder Hinterachse |
| 0x5DAA | 5DAA - Drucksensor vorne rechts elektrisch defekt. |
| 0x5DAB | 5DAB - Drucksensor vorne rechts Plausibilitaet. |
| 0x5DAC | 5DAC - Drucksensor vorne rechts Vorderachse Plausibilitaet. |
| 0x5DAD | 5DAD - Drucksensor vorne rechts hydraulische Leckage Vorderachse |
| 0x5DAE | 5DAE - Drucksensor vorne rechts p1 Gradient Fehler. |
| 0x5DAF | 5DAF - Drucksensor vorne rechts Plausibilitaet Feinabstimmungsfehler. |
| 0x5DBA | 5DBA - Drucksensor hinten links elektrisch defekt. |
| 0x5DBB | 5DBB - Drucksensor hinten links Plausibilitaet. |
| 0x5DBC | 5DBC - Drucksensor hinten links Hinterachse Plausibilitaet. |
| 0x5DBD | 5DBD - Drucksensor hinten links hydraulische Leckage Hinterachse |
| 0x5DBE | 5DBE - Drucksensor hinten links p1 Gradient Fehler. |
| 0x5DBF | 5DBF - Drucksensor hinten links Plausibilitaet Feinabstimmungsfehler. |
| 0x5DCA | 5DCA - Drucksensor hinten rechts elektrisch defekt. |
| 0x5DCB | 5DCB - Drucksensor hinten rechts Plausibilitaet. |
| 0x5DCC | 5DCC - Drucksensor hinten rechts Hinterachse Plausibilitaet. |
| 0x5DCD | 5DCD - Drucksensor hinten rechts hydraulische Leckage Hinterachse |
| 0x5DCE | 5DCE - Drucksensor hinten rechts p1 Gradient Fehler. |
| 0x5DCF | 5DCF - Drucksensor hinten rechts Plausibilitaet Feinabstimmungsfehler. |
| 0x5DD0 | 5DD0 - Ventil Abgleich Daten fehlen. |
| 0x5DD1 | 5DD1 - RPA EEPROM Checksumme-Fehler. |
| 0x5DD2 | 5DD2 - Einlassventil Abgleichdaten fehlen. |
| 0x5DD3 | 5DD3 - ECU intern: ECU-Betriebssystem (OSEC) erkennt ECU-internen Fehler |
| 0x5D90 | 5D90 - Drehzahlfuehler vorne links elektrisch defekt. |
| 0x5D91 | 5D91 - Drehzahlfuehler vorne links Extrapolation. |
| 0x5D92 | 5D92 - Drehzahlfuehler Impulsrad vorne links periodische Ueberwachung. |
| 0x5D93 | 5D93 - Drehzahlfuehler vorne links Anfahrerkennung v_Vergleich. |
| 0x5D94 | 5D94 - Drehzahlfuehler vorne links Langzeitueberwachung. |
| 0x5D95 | 5D95 - Drehzahlfuehler vorne links Check auf doppelte Impulsradfrequenz. |
| 0x5D96 | 5D96 - Drehrichtungserkennung vorne links. |
| 0x5DA0 | 5DA0 - Drehzahlfuehler vorne rechts elektrisch defekt. |
| 0x5DA1 | 5DA1 - Drehzahlfuehler vorne rechts Extrapolation. |
| 0x5DA2 | 5DA2 - Drehzahlfuehler Impulsrad vorne rechts periodische Ueberwachung. |
| 0x5DA3 | 5DA3 - Drehzahlfuehler vorne rechts Anfahrerkennung v_Vergleich. |
| 0x5DA4 | 5DA4 - Drehzahlfuehler vorne rechts Langzeitueberwachung. |
| 0x5DA5 | 5DA5 - Drehzahlfuehler vorne rechts Check auf doppelte Impulsradfrequenz. |
| 0x5DA6 | 5DA6 - Drehrichtungserkennung vorne rechts. |
| 0x5DB0 | 5DB0 - Drehzahlfuehler hinten links elektrisch defekt. |
| 0x5DB1 | 5DB1 - Drehzahlfuehler hinten links Extrapolation. |
| 0x5DB2 | 5DB2 - Drehzahlfuehler Impulsrad hinten links periodische Ueberwachung. |
| 0x5DB3 | 5DB3 - Drehzahlfuehler hinten links Anfahrerkennung v_Vergleich. |
| 0x5DB4 | 5DB4 - Drehzahlfuehler hinten links Langzeitueberwachung. |
| 0x5DB5 | 5DB5 - Drehzahlfuehler hinten links Check auf doppelte Impulsradfrequenz. |
| 0x5DB6 | 5DB6 - Drehrichtungserkennung hinten links. |
| 0x5DC0 | 5DC0 - Drehzahlfuehler hinten rechts elektrisch defekt. |
| 0x5DC1 | 5DC1 - Drehzahlfuehler hinten rechts Extrapolation. |
| 0x5DC2 | 5DC2 - Drehzahlfuehler Impulsrad hinten rechts periodische Ueberwachung. |
| 0x5DC3 | 5DC3 - Drehzahlfuehler hinten rechts Anfahrerkennung v_Vergleich. |
| 0x5DC4 | 5DC4 - Drehzahlfuehler hinten rechts Langzeitueberwachung. |
| 0x5DC5 | 5DC5 - Drehzahlfuehler hinten rechts Check auf doppelte Impulsradfrequenz. |
| 0x5DC6 | 5DC6 - Drehrichtungserkennung hinten rechts. |
| 0x5DF0 | 5DF0 - Pumpenmotor defekt. |
| 0x5DF1 | 5DF1 - Pumpenmotor Stecker defekt. |
| 0x5DF2 | 5DF2 - Ventil/ECU_Hardware Fehler,ROM/RAM_Check Fehler. |
| 0x5DF4 | 5DF4 - Bordnetzspannung < 9 Volt. |
| 0x5DF5 | 5DF5 - Steuergeraet Fehler intern. |
| 0x5DF7 | 5DF7 - Bordnetzspannung > 18 Volt. |
| 0x5DFF | 5DFF - Pumpenmotor max.Drehzahl ueberschritten. |
| 0x5E00 | 5E00 - Bandendetest aktiv. |
| 0x5E01 | 5E01 - Bandendetest Timeout. |
| 0x5E02 | 5E02 - Bandendetest Gierratensensor Justierung Fehler. |
| 0x5E03 | 5E03 - Bandendetest Gierratensensor Fehler. |
| 0x5E04 | 5E04 - Bandendetest Querbeschleunigungssensor Fehler. |
| 0x5E05 | 5E05 - Bandendetest Querbeschleunigung und Gierraten Fehler: vertauscht. |
| 0x5E06 | 5E06 - Bandendetest Gierratensensor falsch montiert. |
| 0x5E07 | 5E07 - Bandendetest Querbeschleunigungssensor falsch montiert. |
| 0x5E08 | 5E08 - Bandendetest Lenkwinkelsensor Fehler. |
| 0x5E09 | 5E09 - Bandendetest Bremslichtschalter Fehler. |
| 0xF14A | F14A - Bandendetest Bremslichtschalter Fehler. |
| 0x5E18 | 5E18 - CAN DME/DDE Botschaft unplausibel. |
| 0x5E19 | 5E19 - CAN DME/DDE, Motormoment nicht einstellbar. |
| 0x5E1A | 5E1A - CAN DME/DDE Signal Fehler. |
| 0x5E1B | 5E1B - CAN DME/DDE Motormoment Signal Fehler. |
| 0x5E1C | 5E1C - PT-CAN HSA Signal Fehler. |
| 0x5E1D | 5E1D - PT-CAN Fahrgestellnummer ungueltig. |
| 0x5E1F | 5E1F - PT-CAN Fahrgestellnummer falsch / ECU nicht initialisiert. |
| 0x5E3F | 5E3F - F-CAN SZL Codierfehler. |
| 0xD347 | D347 - PT-CAN-Bus Off. |
| 0xD34B | D34B - F-CAN-Bus Off. |
| 0xD354 | D354 - PT-CAN DME/DDE_1 - Drehmoment 1 Botschaft 168 fehlt |
| 0xD355 | D355 - PT-CAN DME/DDE_2 - Drehmoment 2 Botschaft 169 fehlt |
| 0xD356 | D356 - PT-CAN DME/DDE_3 - Drehmoment 3 Botschaft 170 fehlt |
| 0xD357 | D357 - PT-CAN Getriebe 1 - Getriebedaten Botschaft 186 fehlt |
| 0xD358 | D358 - PT-CAN Instrumentcluster_1 - Aussentemperatur/Relativzeit Botschaft 784 fehlt |
| 0xD359 | D359 - PT-CAN Instrumentcluster_2 - Kilometerstand Botschaft 816 fehlt |
| 0xD35A | D35A - PT-CAN Gateway_1 - Klemmenstatus Botschaft 304 fehlt |
| 0xD35B | D35B - PT-CAN LDM-Fehler - Botschaft 213: Anforderung Radmoment Bremse, ANF_RADMOM_BREMSE (ID 0xD5) |
| 0xD35C | D35C - PT-CAN ACC_2. |
| 0xD35D | D35D - PT-CAN ACC Langzeit Timeout Botschaft 419 fehlt |
| 0xD360 | D360 - PT-CAN Motronic_4 Plausibilitaet |
| 0xD361 | D361 - PT-CAN Fahrgestellnummer Timeout Botschaft 896 fehlt |
| 0xD362 | D362 - PT-CAN Motronic_5 |
| 0xD363 | D363 - PT-CAN Instrument_cluster_3 |
| 0xD364 | D364 - PT-CAN Operator_Key_Tempo |
| 0xD370 | D370 - F-CAN Sensorcluster_1 Botschaft 205 fehlt |
| 0xD371 | D371 - F-CAN Sensorcluster_2 Botschaft 209 fehlt |
| 0xD372 | D372 - F-CAN Sensorcluster_3 Botschaft 212 fehlt |
| 0xD373 | D373 - F-CAN SWA-Top-Sensor Botschaft 200 oder 201 fehlt |
| 0xD374 | D374 - F-CAN SWA-Raw-Sensor Botschaft 195 fehlt |
| 0xD375 | D375 - F-CAN AFS - Austausch AFS-DSC Botschaft 118 fehlt |
| 0xD376 | D376 - F-CAN AFS Botschaft 11F fehlt |
| 0xD377 | D377 - PT_CAN_Timeout Botschaft 740 (Status_Anhaenger)  fehlt |
| 0xD378 | D378 - PT_CAN_Timeout Botschaft 944  (Status_Gang_Rueckwaerts) fehlt |
| 0x5E50 | 5E50 - F-CAN SZL Seriennummer falsch. |
| 0x5E51 | 5E51 - F-CAN SZL Seriennummer ungueltig. |
| 0x5E52 | 5E52 - AFS Aktuator Signal unplausibel. |
| 0x5E53 | 5E53 - GMK gesperrt durch AFS. |
| 0x5E54 | 5E54 - GMK gesperrt wegen dauernder GMK-Regelung. |
| 0xC987 | C987 - F-CAN SZL keine Botschaften Bus-Off. |
| 0xC994 | C994 - F-CAN SZL Radgeschwindigkeit, Kommunikation mit DSC, Timeout (Nachricht in applizierbarer Zeit nicht empfangen) |
| 0xC995 | C995 - F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit >300km/h |
| 0xC996 | C996 - F-CAN SZL Radgeschwindigkeit Plausibilitaet, Kommunikation mit DSC, Radgeschwindigkeit <300km/h |
| 0xC997 | C997 - F-CAN SZL Radtoleranzabgleich, Kommunikation mit DSC, Timeout (Nachricht in applizierbarer Zeit nicht empfangen) |
| 0xC998 | C998 - F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich < -5% |
| 0xC99A | C99A - F-CAN SZL Radtoleranzabgleich Plausibilitaet, Kommunikation mit DSC, Radtoleranzabgleich > 5% |
| 0xC99B | C99B - F-CAN SZL Sync, keine Kommunikation mit DSC, Timeout. |
| 0xC99C | C99C - F-CAN SZL, Klemmenstatus, keine Kommunikation mit DSC, Timeout. |
| 0x5E20 | 5E20 - Drucksensor 1 elektrisch defekt. |
| 0x5E24 | 5E24 - Drucksensor 1 unplausibel. |
| 0x5E25 | 5E25 - Drucksensor 1 unplausibel Feinabstimmungsfehler. |
| 0x5E26 | 5E26 - Spannungsversorgung Sensoren. |
| 0x5E28 | 5E28 - LDM-Fehler: Fahrpedal ueberwachung, LDM-Bremsanforderung gegenueber Fahrpedal unplausibel |
| 0x5E29 | 5E29 - LDM-Fehler: Freigabe ueberwachung, LDM-Bremsanforderung ohne Freigabe |
| 0x5E2A | 5E2A - Ueberbremserkennung durch DCC Abbremsvorgang |
| 0x5E2B | 5E2B - Unterbremserkennung durch DCC Abbremsvorgang |
| 0x5E2C | 5E2C - hydraulische Leckage Vorderachse |
| 0x5E2D | 5E2D - DSC Differenzdruckueberwachung VA/HA zulaessiger Differenzdruck ueberschritten |
| 0x5E2E | 5E2E - Schalter Rueckwaertsgang Plausibilitaet. |
| 0x5E2F | 5E2F - Temperatur Sensor. |
| 0x5E30 | 5E30 - Querbeschleunigungssensor Signal ausserhalb gueltigem Bereich oder elektrisch defekt. |
| 0x5E31 | 5E31 - Querbeschleunigungssensor Offset Fehler. |
| 0x5E32 | 5E32 - Querbeschleunigungssensor unplausibel. |
| 0x5E33 | 5E33 - Querbeschleunigungssensor Offset Fehler. |
| 0x5E34 | 5E34 - Laengsbeschleunigungssensor Signal ausserhalb gueltigem Bereich oder elektrisch defekt. |
| 0x5E35 | 5E35 - Laengsbeschleunigungssensor unplausibel. |
| 0x5E36 | 5E36 - Laengsbeschleunigungssensor Offset Fehler. |
| 0x5E37 | 5E37 - Laengsbeschleunigungssensor Fehler beim Selbsttest. |
| 0x5E38 | 5E38 - Gierratensensor Signal ausserhalb gueltigem Bereich oder elektrisch defekt. |
| 0x5E39 | 5E39 - Gierratensensor Offset Fehler. |
| 0x5E3A | 5E3A - Gierratensensor Offset Fehler Stillstand. |
| 0x5E3B | 5E3B - Gierratensensor Offset Fehler CBit. |
| 0x5E3C | 5E3C - Gierratensensor unplausibel. |
| 0x5E3D | 5E3D - Querbeschleunigungssensor Fehler beim Selbsttest. |
| 0x5E40 | 5E40 - Lenkwinkelsensor Signal unplausibel,Offset. |
| 0x5E43 | 5E43 - Lenkwinkelsensor intern. |
| 0x5E46 | 5E46 - Lenkwinkelsensor Signal, Offset Fehler |
| 0x5E47 | 5E47 - Lenkwinkelsensor Fehler Klemmen Status |
| 0x5E48 | 5E48 - Lenkwinkelsensor Signal Fehler Toleranz Check |
| 0x5E49 | 5E49 - Lenkwinkelsensor Initialisierungs Fehler |
| 0x5E4E | 5E4E - DSC Sensor Offset Check. |
| 0x5E4F | 5E4F - DSC Dauerregelung. |
| 0x5E58 | 5E58 - ASC ECU im falschen Fahrzeug. |
| 0x5E59 | 5E59 - Codierfehler. |
| 0x5E5B | 5E5B - DSC Taster laenger als 10sec gedrueckt oder Fehler. |
| 0x5E5C | 5E5C - RPA Taster Fehler. |
| 0x5E5D | 5E5D - Bremsfluessigkeitsniveau niedrig / Schalter defekt. |
| 0x5E5E | 5E5E - Bremslichtschalter Fehler, Plausibilitaets Fehler. |
| 0x5E60 | 5E60 - PT-CAN Engine4 Signal Fehler |
| 0x5E61 | 5E61 - PT-CAN Engine5 Signal Fehler |
| 0x5E62 | 5E62 - PT-CAN Gear1 Signal Fehler |
| 0x5E63 | 5E63 - PT-CAN Instr_Cluster3 Signal Fehler |
| 0x5E64 | 5E64 - PT-CAN Instr_Cluster3 Plausibilitaets Fehler_1 |
| 0x5E65 | 5E65 - PT-CAN Instr_Cluster3 Plausibilitaets Fehler_2 |
| 0x5E66 | 5E66 - F-CAN Engine4 Signal Fehler |
| 0x5E67 | 5E67 - PT-CAN DCC Signal Fehler_1 |
| 0x5E68 | 5E68 - PT-CAN DCC Signal Fehler_2 |
| 0x5DE0 | 5DE0 - Bremsbelagverschleiss VA nicht/falsch initialisiert. |
| 0x5DE1 | 5DE1 - Bremsbelagverschleiss HA nicht/falsch initialisiert. |
| 0x5DE2 | 5DE2 - Bremsbelagverschleiss VA kritische Belagdicke erreicht. |
| 0x5DE3 | 5DE3 - Bremsbelagverschleiss HA kritische Belagdicke erreicht. |
| 0x94B0 | 94B0 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Synchronisation mit Sub nicht moeglich. |
| 0x94B1 | 94B1 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Verbindungstest zur PDA fehlgeschlagen. |
| 0x94B2 | 94B2 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Umgebungshelligkeit zu hoch. |
| 0x94B3 | 94B3 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - keine Referenzspur gefunden. |
| 0x94B4 | 94B4 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Referenzspurabstand ausserhalb des Toleranzbandes |
| 0x94B5 | 94B5 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Illegaler Code. |
| 0x94B6 | 94B6 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkelsprung zu gross. |
| 0x94B7 | 94B7 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Lenkwinkel-Messbereich ueberschritten (Rundenoverflow) |
| 0x94B8 | 94B8 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Winkelverifizierung durch Main und Sub fehlerhaft |
| 0x94B9 | 94B9 - F-CAN SZL Lenkwinkelsensor : Sensor nicht abgeglichen - EEPROM defekt (nach Anklemmen der KL30) |
| 0x94BA | 94BA - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_BelZeit_0 Interner Softwarefehler. |
| 0x94BB | 94BB - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_VglAbwurf Fehler im Sub Lenkwinkel. |
| 0x94BC | 94BC - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCFehlInCDB Fehler in EEPROM-Daten. |
| 0x94BD | 94BD - F-CAN SZL Lenkwinkelsensor : Sensorfehler - Info: Unterspannung, LWS_CRCRamSave Fehler im RAM-Bereich |
| 0x94BE | 94BE - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_Winkelpraediktion Codescheibe defekt. |
| 0x94BF | 94BF - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_TimeoutSubCom Verbindung zum SUB defekt. |
| 0x94C0 | 94C0 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_BelTimeout Klemme 30 Startzeit zu lang. |
| 0x94C1 | 94C1 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_TimeoutSub Kommunikationsfehler Sub. |
| 0x94C2 | 94C2 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_KeinAbgleich Nullpunktdaten fehlerhaft. |
| 0x94C3 | 94C3 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_ERROR allgemeiner Sensorfehler. |
| 0x94C4 | 94C4 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_REF_NOTFOUND keine Referenzspur gefunden. |
| 0x94C5 | 94C5 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCSaveRamCopy Fehler im RAM. |
| 0x94C7 | 94C7 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCLwsNullShw Nullpunktdaten CRC Fehler. |
| 0x94C8 | 94C8 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_CRCLwsShw Konfigurationsdaten CRC Fehler. |
| 0x94C9 | 94C9 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS_TimeoutEEPROM EEPROM Fehler. |
| 0x94E0 | 94E0 - F-CAN SZL EEPROM defekt - Prozessor defekt. |
| 0x94E1 | 94E1 - F-CAN SZL EEPROM defekt - Fehler intern Autocodierung. |
| 0x9500 | 9500 - F-CAN SZL Unterspannung   UBatt < 8.5 V. |
| 0x9501 | 9501 - F-CAN SZL Ueberspannung    UBatt > 16,5 V. |
| 0x9510 | 9510 - FGR/ACC-Lenkstockschalter (LST) haengt (alle tastenden Schalter)- mechanisch defekt, Kontakt |
| 0x9511 | 9511 - FGR/ACC-Lenkstockschalter (LST) unplausibel - Unzulaessige Kombination mit Tempomatschalter |
| 0x9512 | 9512 - FGR/ACC-Lenkstockschalter (LST) elektrisch defekt. |
| 0x9518 | 9518 - Scheibenwischerschalter (SWS) (alle tastenden Schalter)- mechanisch defekt, Kontakt. |
| 0x9519 | 9519 - Scheibenwischerschalter (SWS) unplausibel- Unzulaessige Kombination im Scheibenwischerschalter |
| 0x951A | 951A - Scheibenwischerschalter (SWS) -Schalter defekt - elektrisch defekt. |
| 0x9520 | 9520 - Lenkrad MFL: mechanisch defekt, Kontakt. |
| 0x5DD4 | 5DD4 - RPA abgeschaltet durch das Luftfeder Steuergeraet |
| 0x5DEF | 5DEF - Info. WLC (Wandler Launch Control) deaktiviert/stillgelegt |
| 0x5DEC | 5DEC - Info. FLR (Fahrleistungsreduzierung) aktiviert |
| 0x5DF8 | 5DF8 - Unterspannung Kl30 |
| 0x5E44 | 5E44 - Lenkwinkelsensor hat die Initialisierung verloren |
| 0x5E45 | 5E45 - Lenkwinkelsensor Fehler bei der Auswertung des Lenkwinkelsignals im DSC |
| 0x94C6 | 94C5 - F-CAN SZL Lenkwinkelsensor : Sensorfehler - LWS Nullpunkt CRC Fehler |
| 0x9502 | 9502 - F-CAN SZL Lenkwinkelsensor Unterspannung erkannt |
| 0x9503 | 9503 - F-CAN SZL Lenkwinkelsensor Ueberspannung erkannt |
| 0xD365 | D365 - PT-CAN Botschaft Luftfeder Fehler |
| 0x5E70 | 5E70 - Info: auf Grund der Fahrweise ergeben sich bei passiv getastetem DSC unplausible Sensorsignale, RPA und andere Zusatzfunktionen werden stillgelegt |
| 0xD36E | D36E - PT-CAN   Botschaft 310h A_TEMP_RELATIVZEIT fehlt oder ungueltig, Reifentemperaturmodell im RPA+ kann nicht berechnet werden |
| 0x5DD7 | 5DD7 - RPA+ kann nicht aufsetzen, waehrend der Initialisierungsphase werden keine oder nicht genuegend Kalibrierwerte gesammelt, Reifen fuer RPA+ nicht geeignet |
| 0xD379 | D379 - PT_CAN Botschaft 776 Status MSA fehlt |
| 0x5EFB | 5EFB - ELUP/Unterdrucksystem: Leckage Unterdrucksystem |
| 0x5EFE | 5EFE - ELUP/Unterdrucksystem: Unterdruck Sensor defekt |
| 0x5EFF | 5EFF -ELUP/Unterdrucksystem:  elektrische Unterdruckpumpe oder Ansteuerung (AE) defekt |
| 0xD368 | D368 - ELUP/Unterdrucksystem: PT_CAN Botschaft 8Dh STAT_ELUP ungueltig |
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
| default | 0x01 | DIGITAL1 | DIGITAL2 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Bremslichtschalter | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x03 | Bremsfluessigkeitsschalter | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x04 | ASC/DSC_aktiv (Tasterfunktion) | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x05 | Bremsdruck erkannt | 0/1 | - | 0x20 | - | 1 | 1 | 0 |
| 0x06 | ABS-Regelung | 0/1 | high | 0x0100 | - | 1 | 1 | 0 |
| 0x07 | ASC-Regelung (BMR) | 0/1 | high | 0x0200 | - | 1 | 1 | 0 |
| 0x08 | ASC-Regelung (AMR) | 0/1 | high | 0x0400 | - | 1 | 1 | 0 |
| 0x09 | GMR-Regelung (GMR) | 0/1 | high | 0x0800 | - | 1 | 1 | 0 |
| 0x0A | GMR-Regelung (MMR) | 0/1 | high | 0x1000 | - | 1 | 1 | 0 |
| 0x0B | CBC-Regelung | 0/1 | high | 0x2000 | - | 1 | 1 | 0 |
| 0x0C | MSR-Regelung | 0/1 | high | 0x4000 | - | 1 | 1 | 0 |
| 0x0D | TDR-Regelung | 0/1 | high | 0x8000 | - | 1 | 1 | 0 |
| 0x0E | SDR-Regelung | 0/1 | high | 0x0001 | - | 1 | 1 | 0 |
| 0x0F | DBC-Regelung | 0/1 | high | 0x0002 | - | 1 | 1 | 0 |
| 0x10 | RTA aktiv | 0/1 | high | 0x0004 | - | 1 | 1 | 0 |
| 0x11 | Run-Up Mode | 0/1 | high | 0x0008 | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0xD347 | 0x0000 | 0x1004 | 0x0000 | 0x0000 |
| 0xD34B | 0x0000 | 0x1004 | 0x0000 | 0x0000 |
| 0xD354 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD355 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD356 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD357 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD358 | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xD359 | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xD35A | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD377 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD35B | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD35C | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD35D | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xD361 | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xD370 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD371 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD372 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD373 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD374 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD375 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD376 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0xD378 | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xD379 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| 0x5E18 | 0x1008 | 0x0000 | 0x0000 | 0x0000 |
| 0x5E19 | 0x1008 | 0x0000 | 0x0000 | 0x0000 |
| 0x5E1A | 0x1008 | 0x0000 | 0x0000 | 0x0000 |
| 0x5E1B | 0x1008 | 0x0000 | 0x0000 | 0x0000 |
| 0x5E1C | 0x1008 | 0x0000 | 0x0000 | 0x0000 |
| 0xC987 | 0x0000 | 0x0000 | 0x0000 | 0x1004 |
| 0xC994 | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xC995 | 0x0000 | 0x0000 | 0x0000 | 0x1008 |
| 0xC996 | 0x0000 | 0x0000 | 0x0000 | 0x1008 |
| 0xC997 | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xC998 | 0x0000 | 0x0000 | 0x0000 | 0x1008 |
| 0xC99A | 0x0000 | 0x0000 | 0x0000 | 0x1008 |
| 0xC99B | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xC99C | 0x0000 | 0x0004 | 0x0000 | 0x0000 |
| 0xD368 | 0x0008 | 0x0004 | 0x0002 | 0x0000 |
| default | 0x0000 | 0x0000 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom. |
| 0x0002 | Fehler Alive-Zaehler. |
| 0x0004 | Timeout. |
| 0x0008 | Fehler Checksumme. |
| 0x1004 | Bus Off. |
| 0x1008 | physikalischer Wert ausserhalb gueltigem Bereich |
| 0x0010 | Testbedingungen erfuellt. |
| 0x0011 | Testbedingungen noch nicht erfuellt. |
| 0x0020 | Fehler bisher nicht aufgetreten. |
| 0x0021 | Fehler momentan nicht vorhanden, aber bereits gespeichert. |
| 0x0022 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase). |
| 0x0023 | Fehler momentan vorhanden und bereits gespeichert. |
| 0x0030 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen. |
| 0x0031 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen. |
| 0xFFFF | unbekannte Fehlerart. |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### DIGITAL1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x02 | 0x03 | 0x04 | 0x05 |

### DIGITAL2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F | 0x10 | 0x11 |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| EVVL | 0 | 0x01 |
| AVVL | 0 | 0x02 |
| EVVR | 0 | 0x04 |
| AVVR | 0 | 0x08 |
| EVHL | 0 | 0x10 |
| AVHL | 0 | 0x20 |
| EVHR | 0 | 0x40 |
| AVHR | 0 | 0x80 |
| SV1 | 1 | 0x01 |
| SV2 | 1 | 0x02 |
| EUV1 | 1 | 0x04 |
| EUV2 | 1 | 0x08 |
| PUMPE | 1 | 0x10 |
| XYZ | 9 | 0x00 |

### AUDIO_TEL

| BIT | TEXT_TASTER_TEL | TEXT_TASTER_AUDIO | TEXT_TASTER_SUCH | TEXT_TASTER_TALK | TEXT_TASTER_HORN | TEXT_TASTER_SONDER | TEXT_TASTER_HEAR | WERT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | 1 |
| 0x01 | Taster_TEL_gedrueckt | - | - | Taster_PTT_gedrueckt | - | - | - | 2 |
| 0x03 | Signal_ungueltig | - | - | Signal_ungueltig | - | - | - | 4 |
| 0x04 | - | Lautstaerke_leiser | - | - | Taster_HORN_gedrueckt | - | - | 2 |
| 0x08 | - | Lautstaerke_lauter | - | - | - | - | - | 3 |
| 0x0C | - | Signal_ungueltig | - | - | Signal_ungueltig | - | - | 4 |
| 0x10 | - | - | Suchlauf_abwaerts | - | - | Taster_gedrueckt | - | 2 |
| 0x20 | - | - | Suchlauf_aufwaerts | - | - | - | - | 3 |
| 0x30 | - | - | Signal_ungueltig | - | - | Signal_ungueltig | - | 4 |
| 0x40 | - | - | - | - | - | - | Taster_PTH_gedrueckt | 2 |
| 0xC0 | - | - | - | - | - | - | Signal_ungueltig | 4 |
| 0xXY | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | 99 |

### TEMP_ACC

| BIT | TEXT_TASTER | TEXT_ABSTAND | TEXT_MODUS | WERT |
| --- | --- | --- | --- | --- |
| 0x00 | Keine_Aktion | Keine_Aktion | Taster_Mode_Wahl_nicht_gedrueckt | 1 |
| 0x01 | Tippen_nach_vorne | Tippen_nach_oben | - | 2 |
| 0x02 | Ueberdruecken_nach_vorne | Tippen_nach_unten | - | 3 |
| 0x03 | - | Signal_ungueltig | - | 4 |
| 0x04 | Tippen_nach_hinten | - | Taster_Mode_Wahl_gedrueckt | 4 |
| 0x08 | Ueberdruecken_nach_hinten | - | - | 5 |
| 0x0C | - | - | Signal_ungueltig | 3 |
| 0x10 | Tippen_nach_unten | - | - | 6 |
| 0x40 | Axial_Tippen | - | - | 7 |
| 0x90 | Tippen_nach_oben | - | - | 8 |
| 0xFF | Signal_ungueltig | - | - | 9 |
| 0xXY | nicht_definiert | nicht_definiert | nicht_definiert | 99 |

### WISCHER

| BIT | TEXT_TASTER | TEXT_POTI | WERT |
| --- | --- | --- | --- |
| 0x00 | Keine_Aktion | Stufe_1 | 1 |
| 0x01 | Intervall/Automatik | Stufe_2 | 2 |
| 0x02 | Stufe_1 | Stufe_3 | 3 |
| 0x03 | Stufe_2 | - | 4 |
| 0x04 | - | Stufe_4 | 4 |
| 0x07 | - | Signal_ungueltig | 5 |
| 0x08 | Tippwischen | - | 5 |
| 0x10 | Frontwaschen | - | 6 |
| 0x40 | Heckwischen | - | 7 |
| 0x80 | Heckwaschen | - | 8 |
| 0xFF | Signal_ungueltig | - | 9 |
| 0xXY | nicht_definiert | nicht_definiert | 99 |

### RAD

| BIT | DREHRICHTUNG_TEXT | DFA_TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | Drehrichtungserkennung in ECU nicht konfiguriert | - | 1 |
| 0x01 | vorwaerts | Stillstand | 2 |
| 0x02 | rueckwaerts | Fahrzeug faehrt | 3 |
| 0xFF | Signal nicht plausibel / nicht konfiguriert | keine Ausgabe | 4 |
| 0xXY | nicht_definiert | nicht_definiert | 99 |

### CBS_BBV

| BIT | CBS_BBV_TEXT | WERT |
| --- | --- | --- |
| 0x00 | OK | 1 |
| 0x01 | 1. Schwelle erreicht | 2 |
| 0x02 | nicht OK | 3 |
| 0xFF | Signal nicht verfuegbar | 4 |
| 0xXY | nicht_definiert | 99 |

### SENSOR_CLUSTER

| BIT | CLUSTER_TYPE | WERT |
| --- | --- | --- |
| 0x01 | Sensor Cluster VDO einfach | 1 |
| 0x02 | Sensor Cluster SYSTRON DONNER einfach | 2 |
| 0x03 | Sensor Cluster SYSTRON DONNER redundant | 3 |
| 0xFF | Signal ungueltig | 98 |
| 0xXY | nicht_definiert | 99 |

### ABGLEICH_V_ERGEBNIS

| BIT | TEXT | WERT |
| --- | --- | --- |
| 0x01 | Keine_gueltigen_Abgleichswerte_gefunden | 1 |
| 0x02 | Gueltige_Abgleichswerte_gefunden | 2 |
| 0x03 | Abgleich_erfolgreich_mit_gutem_Ergebnis | 3 |
| 0x04 | Externer_Fehler_waehrend_Abgleich_entdeckt | 4 |
| 0x05 | Abgleich_laeuft_gerade | 5 |
| 0x06 | Interner_Fehler_entdeckt_nach_IGN_ON | 6 |
| 0x07 | Externer_Fehler_entdeckt_nach_IGN_ON | 7 |
| 0x08 | Interner_Fehler_waehrend_Abgleich_entdeckt | 8 |
| 0x00 | Randbedingungen_fuer_Kalibrierung_erfuellt | 0 |
| 0x10 | externe_Leckage | 16 |
| 0x20 | Raeder_drehen_sich | 32 |
| 0x30 | Bremse_wurde_betaetigt | 48 |
| 0x40 | Bremdruck_wurde_nicht_in_der_vorgeschriebenen_Zeit_erreicht | 64 |
| 0x50 | Spannungsversorgung_ausserhalb_gueltigem_Bereich | 80 |
| 0x0F | Keine_Einlassventile_ausgewaehlt | 15 |
| 0xF0 | Keine_MCI_Ventile_ausgewaehlt | 240 |
| 0xXY | kein_Ergebnis | 99 |

### ABGLEICH_LWS_ERGEBNIS

| BIT | TEXT | WERT |
| --- | --- | --- |
| 0x00 | Routine_nicht_erfolgreich_beendet_oder_Routine_wurde_nicht_gestartet | 0 |
| 0x01 | Routine_erfolgreich_beendet | 1 |
| 0xXY | kein_Ergebnis | 99 |

### F_CAN_LW

| BIT | LW_RAD_FEHLER_TEXT | LW_OBEN_FEHLER_TEXT | WERT |
| --- | --- | --- | --- |
| 0x00 | in Ordnung | in Ordnung | 0 |
| 0x01 | LWS Verifizierung | Radlenkwinkelverifizierung | 1 |
| 0x02 | LWS-Signal fehlerhaft | Lenkwinkel_Rad-Signal fehlerhaft | 2 |
| 0x03 | Signal ungueltig | Signal ungueltig | 3 |
| 0xXY | nicht_definiert | nicht_definiert | 99 |

### CODIERUNG

| FUNKTION | BLOCK | BYTE | MASKE | DEFAULT |
| --- | --- | --- | --- | --- |
| ECD | 0x3005 | 0x00 | 0x01 | 0x01 |
| CBS | 0x3005 | 0x00 | 0x04 | 0x04 |
| FLR | 0x3005 | 0x00 | 0x10 | 0x00 |
| VCH | 0x3005 | 0x00 | 0x20 | 0x20 |
| HBA | 0x3005 | 0x00 | 0xC0 | 0xC0 |
| AY | 0x3005 | 0x01 | 0x01 | 0x00 |
| LW | 0x3005 | 0x01 | 0x02 | 0x00 |
| PSI_STAND | 0x3005 | 0x01 | 0x04 | 0x00 |
| PSI_FAHRT | 0x3005 | 0x01 | 0x08 | 0x00 |
| PSI_EMPF | 0x3005 | 0x01 | 0x10 | 0x00 |
| SW | 0x3005 | 0x01 | 0x20 | 0x00 |
| HVV | 0x3005 | 0x02 | 0x01 | 0x01 |
| SST | 0x3005 | 0x02 | 0x02 | 0x02 |
| EVB | 0x3005 | 0x02 | 0x04 | 0x04 |
| BSW | 0x3005 | 0x02 | 0x08 | 0x08 |
| HHC | 0x3005 | 0x02 | 0x10 | 0x10 |
| HPS | 0x3005 | 0x02 | 0x20 | 0x20 |
| ASL | 0x3005 | 0x02 | 0x40 | 0x40 |
| HDC | 0x3005 | 0x02 | 0x80 | 0x80 |
| XXX | 0xXY | 0xXY | 0xXY | 0xXY |

### RPA

| BYTE | M5_M6 | E85 | E85HP | M3 | E8X_E9X | WARN |
| --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 15-50 km/h | 20-40 km/h | 20_50 km/h | 15-50 km/h | 15-70 km/h | Raderkennung |
| 0x02 | 50-90 km/h | 40-80 km/h | 50-90 km/h | 50-90 km/h | 70-110 km/h | over_all_HA>Schwellwert |
| 0x03 | 90-130 km/h | 80-120 km/h | 90-130 km/h | 90-130 km/h | 110-150 km/h | over_all_VA>Schwellwert |
| 0x04 | 130-170 km/h | 120-160 km/h | 130-170 km/h | 130-170 km/h | 150-190 km/h | grosser_Druckverlust |
| 0x05 | 170-210 km/h | 160-200 km/h | 170-210 km/h | 170-210 km/h | 190-220 km/h | Plattfuss |
| 0x06 | >210 km/h | >200 km/h | >210 km/h | >210 km/h | 220-250 km/h | alle_halbe_Druckschwelle |
| 0x07 | - | - | - | - | - | hinterer_Abfall |
| 0x08 | - | - | - | - | - | Delta_M |
| 0x11 | rechts_50%_bis_90_km/h | rechts_50%_bis_80_km/h | rechts_50%_bis_90_km/h | rechts_freirollend_bis_70_km/h | rechts_freirollend_bis_70_km/h | - |
| 0x12 | rechts_bis_90_km/h | rechts_bis_80_km/h | rechts_bis_90_km/h | rechts_bis_70_km/h | rechts_bis_70_km/h | - |
| 0x13 | links_50%_bis_90_km/h | links_50%_bis_80_km/h | links_50%_bis_90_km/h | links_freirollend_bis_70_km/h | links_freirollend_bis_70_km/h | - |
| 0x14 | links_bis_90_km/h | links_bis_80_km/h | links_bis_90_km/h | links_bis_70_km/h | links_bis_70_km/h | - |
| 0x15 | rechts_50%_ab_90_km/h | rechts_50%_ab_80_km/h | rechts_50%_ab_90_km/h | rechts_freirollend_ab_70_km/h | rechts_freirollend_ab_70_km/h | - |
| 0x16 | rechts_ab_90_km/h | rechts_ab_80_km/h | rechts_ab_90_km/h | rechts_ab_70_km/h | rechts_ab_70_km/h | - |
| 0x17 | links_50%_ab_90_km/h | links_50%_ab_80_km/h | links_50%_ab_90_km/h | links_freirollend_ab_70_km/h | links_freirollend_ab_70_km/h | - |
| 0x18 | links_ab_90_km/h | links_ab_90_km/h | links_ab_90_km/h | links_ab_70_km/h | links_ab_70_km/h | - |
