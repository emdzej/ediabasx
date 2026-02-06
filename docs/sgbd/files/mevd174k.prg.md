# mevd174k.prg

## General

|  |  |
| --- | --- |
| File | mevd174k.prg |
| Type | PRG |
| Jobs | 350 |
| Tables | 160 |
| Origin | BMW EA-360 Lorch |
| Revision | 10.015 |
| Author | P+Z EA-360 Berger, P+Z EA-360 Kunze |
| ECU Comment | SGBD für MEVD1724 / MEVD1729 C-Muster zum Programmstand 9ZP1C00B, 99V2EH0B |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorelektronik MEVD17.2.4 für 4 Zylinder N20 im Bordnetz 2000 |  |  |
| ORIGIN | string | BMW EA-360 Lorch |  |  |
| REVISION | string | 10.015 |  |  |
| AUTHOR | string | P+Z EA-360 Berger, P+Z EA-360 Kunze |  |  |
| COMMENT | string | SGBD für MEVD1724 / MEVD1729 C-Muster zum Programmstand 9ZP1C00B, 99V2EH0B |  |  |
| PACKAGE | string | 1.66 |  |  |
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

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | SpeicherSegment aus table SpeicherSegment SEG_NAME |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n ( 254 ) |

### STATUS_EWS

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC000 Zurücklesen verschiedener interner Stati für EWS

_No arguments._

### STATUS_EWS4_SK

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC002 Lesen des SecretKey des Server sowie Client für EWS4

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben KWP 2000: $2E WriteDataByCommonIdentifier CommonIdentifier=0xC001

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATA | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 es können 40 Messwerte in einem Block zusammengefasst werden

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### IS_LESEN

0x222000 IS_LESEN Infospeicher lesen (alle Info-Meldungen / Ort und Art) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### ABGLEICHWERTE_SCHREIBEN

0x2E5F90 ABGLEICHWERTE_SCHREIBEN Abgleichwerte Injektoren programmieren für CASCADE mit Übernahme Daten aus COD-Datei Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### ABGLEICHWERTE_LESEN

0x225F90 ABGLEICHWERTE_LESEN Abgleichwerte Injektoren auslesen für CASCADE für Vergleich mit Daten aus COD-Datei Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten für alle Injektoren aus COD-Datei |

### FLASH_SCHREIBEN_XXL

0x36 FLASH_SCHREIBEN_XXL Flash Daten schreiben XXL-Format, Standard Flashjob, Modus  : Default Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN_ADRESSE_4BYTE

0x34 FLASH_SCHREIBEN_ADRESSE_4BYTE Flash Daten schreiben, Standard Flashjob, Modus  : Default Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_LOESCHEN_4BYTE

0x3102 FLASH_LOESCHEN_4BYTE Flash löschen, Standard Flashjob, Modus  : Default Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden (Byteparameter 1) Byte 5,6            : Loeschzeit in Sekunden (WordParameter 1 (low/high)) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN_ENDE_4BYTE

0x37 FLASH_SCHREIBEN_ENDE_4BYTE Flashprogrammierung abschliessen, Standard Flashjob, Modus  : Default Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

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

### STATUS_IGRINFO

0x224016 STATUS_IGRINFO Infospeicher Intelligente Generator Regelung (IGR) auslesen

_No arguments._

### STATUS_LEMINFO

0x224017 STATUS_LEMINFO Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

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

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

KWP 2000 $31 30 00 10 00 Bit setzen Batterietausch registrieren

_No arguments._

### STATUS_RUHESTROMMESSUNG

Auslesen Ruhestrompruefung mit IBS RUHESTROMMESSUNG (0x2B)

_No arguments._

### STEUERN_RUHESTROMMESSUNG

Ansteuern Ruhestrompruefung mit IBS RUHESTROMMESSUNG (0x2B) Aktivierung: Klemme 15 = EIN

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Einheit: A Min: 0 Max: 0.3178 default: 0.08 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Einheit: s Min: 0 Max: 12.75 default: 0.05 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Einheit: s Min: 0 Max: 12.75 default: 0.05 |
| TO_WERT | unsigned char | Ecos Messung Timeout (Eco_timo) Einheit: s Min: 0 Max: 255 default: 30 |

### IDENT_IBS

$22 40 21 BMW Nr, Seriennummer, SW/HW Index

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

0x2CF0 5AB4 STATUS_BETRIEBSSTUNDENZAEHLER Betriebsstundenzaehler auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_EISYUGD

0x31E0 & 0x33E0 _STATUS_EISYUGD Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_EISYGD

0x31E1 & 0x33E1 _STATUS_EISYGD Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_KRANN

0x31E3 & 0x33E3 _STATUS_KRANN Ansteuern und Auslesen Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_KLANN

0x31E4 & 0x33E4 _STATUS_KLANN Ansteuern und Auslesen Klann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### STATUS_DAROL

0x224061 STATUS_DAROL Darol Lastkollektivdaten lesen (FASTA)

_No arguments._

### STATUS_DAROL1

0x224062 STATUS_DAROL1 Darol Lastkollektivdaten Teil 2/5 lesen (FASTA)

_No arguments._

### STATUS_DAROL2

0x224063 STATUS_DAROL2 Darol Lastkollektivdaten Teil 3/5 lesen (FASTA)

_No arguments._

### STATUS_DAROL3

0x224064 STATUS_DAROL3 Darol Lastkollektivdaten Teil 4/5 lesen (FASTA)

_No arguments._

### STATUS_DAROL4

0x224065 STATUS_DAROL4 Darol Lastkollektivdaten Teil 5/5 lesen (FASTA)

_No arguments._

### STATUS_DAROL_LESEN

0x22406x STATUS_DAROL_LESEN Job zum Auslesen der DAROL Lastkollektivdaten

_No arguments._

### STATUS_CODIERUNG_OEL

0x223200 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_FREISCHALTUNG

TPROT Zertifikat lesen Zertifikate für CCP Freischaltung auslesen  (0x22 FD03)

_No arguments._

### STATUS_MSAINFO

0x224018 STATUS_MSAINFO Infospeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### START_SYSTEMCHECK_TEV

Ansteuern Diagnosefunktion Tankentlueftungsventil SYSTEMCHECK_TEV (0x31 22)

_No arguments._

### STATUS_SYSTEMCHECK_TEV

Auslesen Diagnosefunktion Tankentlueftungsventil SYSTEMCHECK_TEV (0x33 22)

_No arguments._

### STOP_SYSTEMCHECK_TEV

Diagnosefunktion Tankentlueftungsventil beenden SYSTEMCHECK_TEV (0x32 22)

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

Ansteuern Diagnosefunktion Einspritzventilausblendung SYSTEMCHECK_EVAUSBL (0x31 25)

| Name | Type | Description |
| --- | --- | --- |
| DEVOFF | unsigned char | Min: 0.0 Max: 255.0 a2l-Name: devoff |

### STATUS_SYSTEMCHECK_EVAUSBL

Auslesen Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0x33 25)

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

Ende Diagnosefunktion EinspritzVentile EV-Ausblendung SYSTEMCHECK_EVAUSBL (0x32 25)

_No arguments._

### START_SYSTEMCHECK_LLERH

Ansteuern Diagnosefunktion Leerlauf-Erhoehung SYSTEMCHECK_LLERH (0x31 26)

| Name | Type | Description |
| --- | --- | --- |
| LL | unsigned long | Drehzahlaenderung Einheit: 1/min Min: 0.0 Max: 2550.0 a2l-Name: nsolfa |

### STATUS_SYSTEMCHECK_LLERH

Auslesen Diagnosefunktion Leerlauf-Erhoehung SYSTEMCHECK_LLERH (0x33 26)

_No arguments._

### STOP_SYSTEMCHECK_LLERH

Diagnosefunktion Leerlauf-Erhoehung beenden SYSTEMCHECK_LLERH (0x32 26)

_No arguments._

### START_SYSTEMCHECK_VVT_ANSCHLAG

Ansteuern Diagnosefunktion VVT-Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0x31 27)

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Auslesen VVT Anschlag lernen SYSTEMCHECK_VVT_ANSCHLAG (0x33 27)

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

Diagnosefunktion VVT Anschlag lernen beenden SYSTEMCHECK_VVT_ANSCHLAG (0x32 27)

_No arguments._

### START_SYSTEMCHECK_ODR

Diagnosefunktion Oeldruckregelung SYSTEMCHECK_ODR (0x31 2C)

_No arguments._

### STATUS_SYSTEMCHECK_ODR

Auslesen Diagnosefunktion Oeldruckregelung SYSTEMCHECK_ODR (0x33 2C)

_No arguments._

### STOP_SYSTEMCHECK_ODR

Diagnosefunktion Oeldruckregelung beenden SYSTEMCHECK_ODR (0x32 2C)

_No arguments._

### STEUERN_NULLGANG_LERNEN

Ansteuern Nullgang lernen (Der Nullgang-Lernwert ist nichtfluechtig so abzulegen, dass er bei Reprogrammierung nicht überschrieben wird.) NULLGANG_LERNEN (0x31 2E)

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

Ansteuern Adaptionen selektiv loeschen ADAP_SELEKTIV_LOESCHEN (0x31 30)

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | unsigned char | AUSWAHLBYTE_1_BIT_7 -- > Adaption Abgasrueckfuehrungsventil (NOT USED) AUSWAHLBYTE_1_BIT_6 --> Adaption Lambdaregelung AUSWAHLBYTE_1_BIT_5 --> Adaption Drosselklappe AUSWAHLBYTE_1_BIT_4 --> Adaption Saugrohrmodell AUSWAHLBYTE_1_BIT_3 --> Adaption Tankentlueftung AUSWAHLBYTE_1_BIT_2 --> Adaption Lambdasonden AUSWAHLBYTE_1_BIT_1 --> Adaption Klopfregelung AUSWAHLBYTE_1_BIT_0 --> Adaption Leerlaufabgleich Min: 0.0 Max: 255.0 |
| AUSWAHLBYTE_2 | unsigned char | AUSWAHLBYTE_2_BIT_7 --> Adaption Variabler Ventiltrieb (VVT) AUSWAHLBYTE_2_BIT_6 --> Adaption gelernte Varainten AUSWAHLBYTE_2_BIT_5 --> Adaption Oktanzahl AUSWAHLBYTE_2_BIT_4 --> Registrierung Batterietausch AUSWAHLBYTE_2_BIT_3 --> Adaption Hochdruckpumpe AUSWAHLBYTE_2_BIT_2 --> Adaption Sekundaerluftsystem (NOT USED) AUSWAHLBYTE_2_BIT_1 --> Adaption NOx-Sensor (NOT USED) AUSWAHLBYTE_2_BIT_0 --> Adaption Lastregelung |
| AUSWAHLBYTE_3 | unsigned char | AUSWAHLBYTE_3_BIT_7 --> Energieadaption Injektoren (NOT USED) AUSWAHLBYTE_3_BIT_6 --> NOT USED AUSWAHLBYTE_3_BIT_5 --> NOT USED AUSWAHLBYTE_3_BIT_4 --> Adaption Laufunruhe (Faktor und Offset) und zylinderindividuelle Lambdaregelung(NOT USED) AUSWAHLBYTE_3_BIT_3 --> Adaption Zylindergleichstellung fuer Bandende und Fahrzyklus AUSWAHLBYTE_3_BIT_2 --> Adaption Verbrennungsregelung AUSWAHLBYTE_3_BIT_1 --> Adaption Segmentzeit AUSWAHLBYTE_3_BIT_0 --> Adaption VANOS Min: 0.0 Max: 255.0 |

### ADAP2_SELEKTIV_LOESCHEN

Ansteuern Adaptionen 2 selektiv loeschen ADAP2_SELEKTIV_LOESCHEN (0x31 31)

| Name | Type | Description |
| --- | --- | --- |
| ADAV2_AUSWAHLBYTE_1 | unsigned char | ADAV2_AUSWAHLBYTE_1_BIT_7 -- > Kleinstmengenadaption ADAV2_AUSWAHLBYTE_1_BIT_6 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_5 --> Zähler VVT Notlauf löschen (anznlvvtaust) ADAV2_AUSWAHLBYTE_1_BIT_4 --> Neustart der Hinterachslernfunktion: BasSvrAppl_flgRstRrAxlAdpn ADAV2_AUSWAHLBYTE_1_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_1_BIT_2 --> Adaption Langzeit fuer Injektoralterung Bank 2(NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_1 --> Adaption Langzeit fuer Injektoralterung Bank 1(NOT USED) ADAV2_AUSWAHLBYTE_1_BIT_0 --> Adaption Nullgangsensor (Achtung: Mit diesem Bit darf die Adaption des Nullgangsensors nicht mehr geloescht werden! Bei Austausch des Nullgangsensors soll die Adaption mit dem dafuer vorgesehenen Dienst durchgefuehrt werden)(NOT USED) Min: 0.0 Max: 255.0 |
| ADAV2_AUSWAHLBYTE_2 | unsigned char | ADAV2_AUSWAHLBYTE_2_BIT_7 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_6 --> Verlustmomentadaption Reset ADAV2_AUSWAHLBYTE_2_BIT_5 --> Adaption NOx-Katalysator (NOT USED) ADAV2_AUSWAHLBYTE_2_BIT_4 --> Bereichserkennung Benzin im Oel (B_clradbo) ADAV2_AUSWAHLBYTE_2_BIT_3 --> Zähler für Startabbrüche löschen (BasSvrAppl_stRstCntrDetdFaildStrtEng) ADAV2_AUSWAHLBYTE_2_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_2_BIT_0 --> Infospeicher Superklopffunktion löschen AVS_SKRKO_CLRSKINFO_U8 Min: 0.0 Max: 255.0 |
| ADAV2_AUSWAHLBYTE_3 | unsigned char | ADAV2_AUSWAHLBYTE_3_BIT_7 --> Zuruecksetzen der Hubkorrekturstatistik per Tester (Bit-Name = B_vbr_stat_reset_ext und Basisvariable = St_vbr_stat) ADAV2_AUSWAHLBYTE_3_BIT_6 --> Anforderung Nockenwellen Referenzadaption durch Tester (Kurbelwelle-Nockenwellenzuordnung). Der Neustart der Adaptation sollte immer nach Arbeit in der Umgebung der Nocken- oder Kurbelwelle ausgeführt werden. ADAV2_AUSWAHLBYTE_3_BIT_5 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_4 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_3 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_2 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_1 --> NOT USED ADAV2_AUSWAHLBYTE_3_BIT_0 --> NOT USED Min: 0.0 Max: 255.0 |

### START_ZGH

Ansteuern Zylinder Gleichstellung Homogen Startvoraussetzungen: T_mot > 70 °C, Fahrstuffe P (bei Fzg. mit Automatikgetriebe), Die entsprechenden Adaptionen müssen gelöscht sein. ZGH (0x31 34)

_No arguments._

### STATUS_ZGH

Auslesen Zylinder Gleichstellung Homogen ZGH (0x33 34)

_No arguments._

### STOP_ZGH

Ende Zylinder Gleichstellung Homogen ZGH (0x32 34)

_No arguments._

### START_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Start-Routine ZWDIAG (0x31 3A)

| Name | Type | Description |
| --- | --- | --- |
| FAC_CH_DIAG_EXT_ADJ_IS | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen im Leerlauf Min: 0.0 Max: 1.9921875 a2l-Name: fetakhllfa |
| FAC_CH_DIAG_EXT_ADJ_PL | real | Faktor zur Korrektur des Soll-Wirkungsgrades bei Katheizen in der Teillast Min: 0.0 Max: 1.9921875 a2l-Name: fetakhtlfa |
| LV_CH_DIAG_EXT_REQ | unsigned char | Anforderung an Anpassung der geforderten Momentenreserve durch Katheizen über Tester (Leerlauf/Teillastbetrieb) Min: 0.0 Max: 3.0 a2l-Name: Bit 0x00: B_fetakhll Bit 0x01: B_fetakhtl |

### STATUS_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Status-Routine ZWDIAG (0x33 3A)

_No arguments._

### STOP_ZWDIAG

CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose) Stop-Routine ZWDIAG (0x32 3A)

_No arguments._

### START_BETRIEBSART_LUFT

Umschalten ind die verschiedenen Modis der Luft-Betriebsarten BETRIEBSART_LUFT (0x31 3C)

| Name | Type | Description |
| --- | --- | --- |
| SW_BA_LUFT | unsigned char | Vorgabe Betriebsart Luft über St_dps_svc(BMW Größe) Min: 0.0 Max: 255.0 a2l-Name: SwSABMW_modAir |

### STOP_BETRIEBSART_LUFT

Umschalten ind die verschiedenen Modis der Luft-Betriebsarten BETRIEBSART_LUFT (0x32 3C)

_No arguments._

### START_SAUGROHRDRUCK

Manuele Vorgabe des einzustellenden Saugrohrdruckes STDPSFA wird vom Service auf 2 geschalten Startvorraussetzung: SAUGROHRDRUCK (0x31 3D)

| Name | Type | Description |
| --- | --- | --- |
| SW_SAUGROHRDRUCK_SOLL | real | Sollwert Saugrohrdruckkdifferenz a2l-Name: SwSABMW_pSuctnPip |

### STOP_SAUGROHRDRUCK

Manuele Vorgabe des einzustellenden Saugrohrdruckes SAUGROHRDRUCK (0x32 3D)

_No arguments._

### START_SYSTEMCHECK_KURBELGEH_DICHT

Systemtest für die Prüfung auf dichtheit des Kurbelgehäuses Es werden die Saugrohrdrücke variiert um die Lekagevolumen zu ermittel Startvorraussetzung: Tmot> K_TMOT_DPS_SVC3_MIN, Vfz <=0 (Prüfung in BMW Funktion) STDPSFA wird vom Service auf 3 geschalten. SYSTEMCHECK_KURBELGEH_DICHT (0x31 3E)

_No arguments._

### STATUS_SYSTEMCHECK_KURBELGEH_DICHT

Systemtest für die Prüfung auf dichtheit des Kurbelgehäuses Es werden die Saugrohrdrücke variiert um die Lekagevolumen zu ermittel SYSTEMCHECK_KURBELGEH_DICHT (0x33 3E)

_No arguments._

### STOP_SYSTEMCHECK_KURBELGEH_DICHT

Systemtest für die Prüfung auf dichtheit des Kurbelgehäuses Es werden die Saugrohrdrücke variiert um die Lekagevolumen zu ermittel SYSTEMCHECK_KURBELGEH_DICHT (0x32 3E)

_No arguments._

### START_DEAK_CVODIAG

Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurückgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. DEAK_CVODIAG (0x31 3F)

_No arguments._

### STATUS_DEAK_CVODIAG

Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurückgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. DEAK_CVODIAG (0x33 3F)

_No arguments._

### STOP_DEAK_CVODIAG

Deaktivieren der CVO Diagnosefunktionen. Nach 5 maligem Klemmenwechsel der Klemme 15 wird der Testerservice vom SG Automatisch zurückgesetzt. Die vorgabe der Deaktivierung ist non Volatiel. DEAK_CVODIAG (0x32 3F)

_No arguments._

### START_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x31 42)

| Name | Type | Description |
| --- | --- | --- |
| VANOSSPL_M_MODUS | unsigned char | 1=gleichzeitiges Verstellen von Ein- und Auslass-Vanos. und 2=erst Verstellen Einlass, dann Verstellen Auslass. Default-Wert = 1. (A2L-Name: modenwstcl) Min: 1.0 Max: 2.0 a2l-Name: modenwstcl |
| VANOSSPL_N_AZLVERSTL | unsigned char | Anzahl Verstellungen. Default-Wert = 10 Dez. (A2L-Name: anztvtcl) Min: 1.0 Max: 50.0 a2l-Name: anztvtcl |
| VANOSSPL_T_HLTZVERSTL | real | Haltezeit Verstellung (0 bis 5 s). Default-Wert = 2.0 s. Gesamtzeit Vanosspuelen = N * 2 * T * m. (A2L-Name: takttcl) Min: 0.0 Max: 5.0 a2l-Name: takttcl |
| VANOSSPL_N1_UDZLGRNZ | unsigned long | Untere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min unter LL-Solldrehzahl . Default-Wert = 1000. (A2L-Name: nmotmintcl) Min: 500.0 Max: 2000.0 a2l-Name: nmotmintcl |
| VANOSSPL_N2_ODZLGRNZ | unsigned long | Obere Drehzahlgrenze (500 bis 2000 U/min) ca 100 U/min ueber LL-Solldrehzahl . Default-Wert = 1200. (A2L-Name: nmotmaxtcl) Min: 500.0 Max: 2000.0 a2l-Name: nmotmaxtcl |
| VANOSSPL_V_MAX | unsigned char | Max. Fahrzeuggeschwindigkeit (0 bis 100 km/h). Default-Wert = 0 (A2L-Name: vfzgmxtcl) Min: 0.0 Max: 100.0 a2l-Name: vfzgmxtcl |
| VANOSSPL_T2_ZUBRZ | real | Zulaessige Unterbrechungszeit (0 bis 20 s). Default-Wert = 5s. (A2L-Name: taktumxtcl) Min: 0.0 Max: 20.0 a2l-Name: taktumxtcl |
| VANOSSPL_DVSE1_VO1EV | real | Verstelloffset 1 Einlass-Vanos (von -102,4 bis 101,6°KW). Default-Wert=5.6°Grad. (A2L-Name: ofstclnwe1) Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwe1 |
| VANOSSPL_DVSE2_VO2EV | real | Verstelloffset 2 Einlass-Vanos (von -102,4 bis 101,6°KW). Default-Wert=-5.6°Grad. (A2L-Name: ofstclnwe2) Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwe2 |
| VANOSSPL_DVSA1_VO1AV | real | Verstelloffset 1 Auslas-Vanos (von -102,4 bis 101,6°KW). Default-Wert=-5.6°Grad. (A2L-Name: ofstclnwa1) Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwa1 |
| VANOSSPL_DVSA2_VO1AV | real | Verstelloffset 2 Auslas-Vanos (von -102,4 bis 101,6°KW). Default-Wert=5.6°Grad. (A2L-Name: ofstclnwa2) Min: -102.4 Max: 101.60000000000001 a2l-Name: ofstclnwa2 |

### STATUS_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x33 42)

_No arguments._

### STOP_VANOSSPUELEN

VANOS Spuelen fuer OBD und PVE. VANOSSPUELEN (0x32 42)

_No arguments._

### STATUS_MONTAGEMODUS

Auslesen Montage-Modus MONTAGEMODUS (0x33 43)

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

Ende Montage-Modus MONTAGEMODUS (0x32 43)

_No arguments._

### STEUERN_MONTAGEMODUS

Ansteuern Montage-Modus. MONTAGEMODUS (0x31 43)

_No arguments._

### START_KLACKERTEST

Aktivierung der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. KLACKERTEST (0x31 44)

_No arguments._

### STATUS_KLACKERTEST

Lesen der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. KLACKERTEST (0x33 44)

_No arguments._

### STOP_KLACKERTEST

Ende der Ansteuerfunktion Klackertest fuer die Ueberpruefung der elektrischen Funktion des Mengensteuerventils der HDP5. Bei der Ausfuehrung dieses Diagnoseservices soll die Funktion ACTR_TST_MFVLV1_ACT aus dem Softwaremodul MFDD aktiviert werden. KLACKERTEST (0x32 44)

_No arguments._

### START_SYSTEMCHECK_EWG

Diagnosefunktion elektrisches Wastegate starten. Voraussetzung: B_nmot == false && B_kl15 == true && B_ewg == true, SY_WGPS > 0 SYSTEMCHECK_EWG (0x31 45)

_No arguments._

### STATUS_SYSTEMCHECK_EWG

Diagnosefunktion elektrisches Wastegate lesen. Voraussetzung: B_ewg == true, SY_WGPS > 0 SYSTEMCHECK_EWG (0x33 45)

_No arguments._

### STOP_SYSTEMCHECK_EWG

Diagnosefunktion elektrisches Wastegate beenden SYSTEMCHECK_EWG (0x32 45)

_No arguments._

### START_SYSTEMCHECK_DKVSFS

Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) Start. Beim Ausfuehren dieses Testerjobs muss das Bit B_falra auf 1 gesetzt werden. SYSTEMCHECK_DKVSFS (0x31 46)

_No arguments._

### STATUS_SYSTEMCHECK_DKVSFS

Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) Status lesen. SYSTEMCHECK_DKVSFS (0x33 46)

_No arguments._

### STOP_SYSTEMCHECK_DKVSFS

Kurztest Kraftstoffsystem Diagnose (Teilfunktion DKVSFS) steuern-Ende. SYSTEMCHECK_DKVSFS (0x32 46)

_No arguments._

### START_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader starten SYSTEMCHECK_ATL (0x31 D0)

_No arguments._

### STATUS_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader auslesen SYSTEMCHECK_ATL (0x33 D0)

_No arguments._

### STOP_SYSTEMCHECK_ATL

Diagnosefunktion Abgasturbolader beenden SYSTEMCHECK_ATL (0x32 D0)

_No arguments._

### START_SYSTEMCHECK_GLF

Ansteuern Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0x31 D5)

_No arguments._

### STATUS_SYSTEMCHECK_GLF

Auslesen Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0x33 D5)

_No arguments._

### STOP_SYSTEMCHECK_GLF

Ende Gesteuerte Luftfuehrung Systemcheck SYSTEMCHECK_GLF (0x32 D5)

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

Ansteuerung Lambdaregelung deaktivieren SYSTEMCHECK_L_REGELUNG_AUS (0x31 D9)

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

Auslesen Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0x33 D9)

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

Ende Lambdaregelung ausschalten SYSTEMCHECK_L_REGELUNG_AUS (0x32 D9)

_No arguments._

### START_SYSTEMCHECK_DMTL

Ansteuern Diagnosefunktion DMTL SYSTEMCHECK_DMTL (0x31 DA)

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Auslesen Diagnosefunktion DMTL SYSTEMCHECK_DMTL (0x33 DA)

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Diagnosefunktion DMTL beenden SYSTEMCHECK_DMTL (0x32 DA)

_No arguments._

### START_EISYUGD

Ansteuern Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0x31 E0)

| Name | Type | Description |
| --- | --- | --- |
| NKW | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw |
| VSE_SPRI | real | Istwert Einlassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vse_spri |
| VSA_SPRI | real | Istwert Auslassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vsa_spri |
| HUBEV_IST | real | Istwert Einlassventilhub Einheit: mm Min: 0.0 Max: 65.535 a2l-Name: hubev_mareg |
| PS | real | Absolut Druck im Saugrohr (A2L-Name: Ps) (Istwert Umgebungsdruck) Einheit: hPa Min: 0.0 Max: 8191.875 a2l-Name: ps |

### STATUS_EISYUGD

Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403) EISYUGD (0x33 E0)

_No arguments._

### START_EISYGD

Ansteuern Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) EISYGD (0x31 E1)

| Name | Type | Description |
| --- | --- | --- |
| NKW | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw |
| VSE_SPRI | real | Istwert Einlassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vse_spri |
| VSA_SPRI | real | Istwert Auslassspreizung variable NWS Einheit: ° KW Min: 0.0 Max: 6553.5 a2l-Name: vsa_spri |
| WDK_IST | real | Aktueller Drosselklappenwinkel Einheit: % Min: -800.0 Max: 799.9755859375 a2l-Name: wdk_ist |

### STATUS_EISYGD

Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403) EISYGD (0x33 E1)

_No arguments._

### START_KLANN

Ansteuern Klann-Adaptionswerte (Anforderung aus CP10798) KLANN (0x31 E4)

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC | int | Drehzahl Einheit: 1/min Min: -32768.0 Max: 32767.0 a2l-Name: nkw_loc |
| RK_LOC | real | Relative Kraftstoffmasse Min: 0.0 Max: 3199.951171875 a2l-Name: rk_loc |
| TMOT_LOC | real | Kuehlwassertemperatur Einheit: °C Min: -327.68 Max: 327.67 a2l-Name: tmot_loc |

### STATUS_KLANN

Auslesen Klann-Adaptionswerte (Anforderung aus CP10798) KLANN (0x33 E4)

_No arguments._

### START_SYSTEMCHECK_LSVK

Ansteuern Lambdasonden vor Kat SYSTEMCHECK_LSVK (0x31 E8)

_No arguments._

### STATUS_SYSTEMCHECK_LSVK

Auslesen Lambdasonden vor Kat SYSTEMCHECK_LSVK (0x33 E8)

_No arguments._

### STOP_SYSTEMCHECK_LSVK

Ende Lambdasonden vor Kat SYSTEMCHECK_LSVK (0x32 E8)

_No arguments._

### START_CRAM

Ansteuern RAM-Backup-Werte loeschen CRAM (0x31 E9)

_No arguments._

### STATUS_CRAM

Auslesen RAM-Backup-Werte loeschen CRAM (0x33 E9)

_No arguments._

### START_SYSTEMCHECK_DKAT

Ansteuern Kurztest Kat SYSTEMCHECK_DKAT (0x31 EB)

_No arguments._

### STATUS_SYSTEMCHECK_DKAT

Auslesen Kurztest Kat SYSTEMCHECK_DKAT (0x33 EB)

_No arguments._

### STOP_SYSTEMCHECK_DKAT

Ende Kurztest Kat SYSTEMCHECK_DKAT (0x32 EB)

_No arguments._

### START_SYSTEMCHECK_ON_QNTMSSNG

Ansteuern Kurztest Oelniveau Detailmessung. Detailmessung ist ab Motoroeltemperatur von 10 Grad_C moeglich, dabei ist ein Messwert unter 65 Grad_C ein grober Schaetzwert. B_on_dtlmssgsrv = TRUE B_kl15 == true && Epm_nEng == LL && VehV <= 3km/h && Toel >= 10C && St_oelniveau_msb.Bit4 == true SYSTEMCHECK_ON_QNTMSSNG (0x31 EC)

_No arguments._

### STATUS_SYSTEMCHECK_ON_QNTMSSNG

Auslesen Kurztest Oelniveau Detailmessung. Detailmessung ist ab Motoroeltemperatur von 10 Grad_C moeglich, dabei ist ein Messwert unter 65 Grad_C ein grober Schaetzwert. SYSTEMCHECK_ON_QNTMSSNG (0x33 EC)

_No arguments._

### STOP_SYSTEMCHECK_ON_QNTMSSNG

Ende Kurztest Oelniveau Detailmessung. B_on_dtlmssgsrv = FALSE SYSTEMCHECK_ON_QNTMSSNG (0x32 EC)

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

Ansteuern Messemode SYSTEMCHECK_PM_MESSEMODE (0x31 F6)

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

Auslesen Messemode SYSTEMCHECK_PM_MESSEMODE (0x33 F6)

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

Ende Messemode SYSTEMCHECK_PM_MESSEMODE (0x32 F6)

_No arguments._

### START_SYSTEMCHECK_IGR_AUS

Ansteuerung Intelligente Generatorregelung deaktivieren SYSTEMCHECK_IGR_AUS (0x31 F7)

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

Auslesen Intelligente Generatorregelung deaktivieren SYSTEMCHECK_IGR_AUS (0x33 F7)

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

Ende Intelligente Generatorregelung deaktivieren SYSTEMCHECK_IGR_AUS (0x32 F7)

_No arguments._

### STATUS_ENERGIESPARMODE

Status Energiesparmode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1 ENERGIESPARMODE (0x22 100A)

_No arguments._

### STEUERN_ENDE_VERS_EINSPRIT_ZUND

Versorgung Einspritzung / Zuendung Ansteuerung beenden VERS_EINSPRIT_ZUND (0x30 2000)

_No arguments._

### STEUERN_VERS_EINSPRIT_ZUND

Versorgung Einspritzung / Zuendung Ansteuerung ansteuern VERS_EINSPRIT_ZUND (0x30 2007)

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UVLSS | unsigned char | Spannung Versorgung Einspritzung / Zuendung Min: 0.0 Max: 1.0 a2l-Name: B_injrtst |
| SW_TO_UVLSS | unsigned long | Timeout Versorgung Einspritzung / Zuendung Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DK

Drosselklappe Ansteuerung beenden DK (0x30 2A00)

_No arguments._

### STEUERN_DK

Drosselklappe ansteuern DK (0x30 2A07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK | real | Tastverhaeltniss Drosselklappe Einheit: % Min: 0.0 Max: 99.99999999999986 a2l-Name: wdktest_w |
| SW_TO_DK | unsigned long | Timeout Drosselklappe Einheit: s Min: 0.0 Max: 510.0 |

### STATUS_MESSWERTE

Messwerte auslesen MESSWERTE (0x22 4000)

_No arguments._

### STATUS_DFMONITOR

Batterieladezustand auslesen DFMONITOR (0x22 4001)

_No arguments._

### STATUS_DIGITAL_1

Status Schaltzustaende 1 DIGITAL_1 (0x22 4002)

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

Nockenwellenadationswerte auslesen NOCKENWELLE_ADAPTION (0x22 4006)

_No arguments._

### STATUS_DIGITAL_0

Status Schaltzustaende 0 DIGITAL_0 (0x22 4007)

_No arguments._

### STATUS_ADAPTION_DK

Drosselklappenadaptionswerte auslesen ADAPTION_DK (0x22 4008)

_No arguments._

### STATUS_ADAPTION_GEMISCH

Gemischadaptionswerte auslesen ADAPTION_GEMISCH (0x22 400A)

_No arguments._

### STATUS_MESSWERTE_VVT

VVT Messwerte auslesen MESSWERTE_VVT (0x22 400B)

_No arguments._

### FASTA10

FASTA-Messwertblock 10 lesen FASTA10 (0x22 4015)

_No arguments._

### STATUS_VERBREDINFO

Verbraucherreduzierungsspeicher auslesen VERBREDINFO (0x22 401D)

_No arguments._

### STATUS_DMEREF

BMW Programmstands-Bezeichnung auslesen DMEREF (0x22 401F)

_No arguments._

### STATUS_MESSWERTE_EWAP

elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Messwerte auslesen MESSWERTE_EWAP (0x22 4024)

_No arguments._

### STATUS_MESSWERTE_VAD

Variantenadaptionen auslesen MESSWERTE_VAD (0x22 4025)

_No arguments._

### STATUS_RBMMODE9

Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) RBMMODE9 (0x22 4026)

_No arguments._

### STATUS_RBMME1

Rate Based Monitoring Motorsteuerung ME... Block 1 auslesen (Vorhalt) RBMME1 (0x22 4029)

_No arguments._

### STATUS_RBMME2

Rate Based Monitoring Motorsteuerung ME... Block 2 auslesen (Vorhalt) RBMME2 (0x22 402A)

_No arguments._

### STATUS_MESSWERTE_IBS

Messwerte IBS auslesen MESSWERTE_IBS (0x22 402B)

_No arguments._

### STATUS_MESSWERTE_LRP

Messwerte Laufruhepruefung auslesen MESSWERTE_LRP (0x22 402D)

_No arguments._

### STATUS_NULLGANG_ERKENNUNG

Nullgang Erkennung auslesen NULLGANG_ERKENNUNG (0x22 402E)

_No arguments._

### STATUS_KQE

Messwerte zur Kraftstoffqualitaet auslesen KQE (0x22 4035)

_No arguments._

### STATUS_MSA2

MSA2 (MotorStopAutomatik 2) auslesen MSA2 (0x22 4036)

_No arguments._

### STATUS_SGR

SGR Startergenerator SGR (0x22 4037)

_No arguments._

### STATUS_IDENT_GEN

Auslesen Identifikationsdaten Generator IDENT_GEN (0x22 4038)

_No arguments._

### STATUS_MSA2HISTORIENOSTOP

MSA2 Historienspeicher fuer verhinderte MSA-Stopps MSA2HISTORIENOSTOP (0x22 403A)

_No arguments._

### STATUS_CYBL_HOM

Injektor Adaptionswerte lesen CYBL_HOM (FASTA GROESSEN) CYBL_HOM (0x22 403D)

_No arguments._

### STATUS_INJAD

Injektor Adaptionswerte lesen INJAD (Kleinstmengen-Adaption RB-Umfaenge) INJAD (0x22 403F)

_No arguments._

### STATUS_MSA2HISTORIENOSTART

MSA2HISTORIENOSTART Ringspeicher auslesen MSA2HISTORIENOSTART (0x22 4040)

_No arguments._

### STATUS_ATLDIAG

Turboladerstatus auslesen ATLDIAG (0x22 4044)

_No arguments._

### STATUS_KLANNADAP

KLANN Adaptionen auslesen KLANNADAP (0x22 4046)

_No arguments._

### STATUS_ZDKSHDP

Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) auslesen. ZDKSHDP (0x22 404C)

_No arguments._

### STATUS_EWPVRS

Variante der el. Hauptwasserpumpe lesen. EWPVRS (0x22 404D)

_No arguments._

### STATUS_CBSMOTOROELHIST

CBS Motoroel Historien-Funktion lesen (FASTA) CBSMOTOROELHIST (0x22 404F)

_No arguments._

### STATUS_DRLTEMPVER1

Entwicklung DAROL Statistiken 1 auslesen (Temperaturverteilung Getriebeoel, Temperaturverteilung Getriebeglocke, Kupplungsreibung) DRLTEMPVER1 (0x22 407A)

_No arguments._

### STATUS_DRLGANGWECHSELHFKT

Auslesen Getriebelastkollektiv: Übertragung Getriebe-Gangwechsel Häufigkeit. DRLGANGWECHSELHFKT (0x22 407B)

_No arguments._

### STATUS_DRLSTRECKENPROFIL

Auslesen Getriebelastkollektiv: Uebertragung Geschwindigkeitsverteilung und Fahrstrecke (Streckenprofil). DRLSTRECKENPROFIL (0x22 407C)

_No arguments._

### STATUS_DRLTEMPVER2

Entwicklung DAROL Statistiken 2 auslesen (Temperaturverteilung Getriebeoel, Temperaturverteilung Getriebeglocke, Kupplungsreibung) DRLTEMPVER2 (0x22 407D)

_No arguments._

### STATUS_SUPERKLOPFER

Infospeicher Superklopfer auslesen SUPERKLOPFER (0x22 407F)

_No arguments._

### STATUS_NMDSFNP

Sekundaeres n/Md Kennfeld zur Erfassung von Fahrzeugnutzungsprofilen auslesen. NMDSFNP (0x22 4080)

_No arguments._

### STATUS_DFDSPROFLE

Generatorauslastungsprofil auslesen. DFDSPROFLE (0x22 4081)

_No arguments._

### STATUS_CVO1

Auslesen CVO-Adaptionen Teil 1 (Continuous Valve Operation). CVO1 (0x22 408F)

_No arguments._

### STATUS_CVO2

Auslesen CVO-Adaptionen Teil 2 (Continuous Valve Operation). CVO2 (0x22 4090)

_No arguments._

### STATUS_CVO3

Auslesen CVO-Adaptionen Teil 3 (Continuous Valve Operation). CVO3 (0x22 4091)

_No arguments._

### STATUS_BETRIEB_ZMS

Auslesen der Betriebszustände des Zweimassenschwungrades, die in DMD zu Ausblendzeiten führen. BETRIEB_ZMS (0x22 4094)

_No arguments._

### STATUS_READINESS

Monitorfunktionen und Readinessflags aus DME auslesen READINESS (0x22 4105)

_No arguments._

### STATUS_SEGELVERH

Auslesung des großen und kleinen Segelverhinderers. Dieser Job dient nur für Entwicklungszwecke. SEGELVERH (0x22 4106)

_No arguments._

### STATUS_FLEXFUEL

Flexfuel-Status f. FASTA Messwerte auslesen FLEXFUEL (0x22 4158)

_No arguments._

### STATUS_GENDATEN

NV-RAM abgespeicherten Daten lesen. GENDATEN (0x22 5F71)

_No arguments._

### STEUERN_GENDATENRESET

Ruecksetzen der im NV-RAM abgespeicherten Daten. Wenn dieser Job aktiv wird, muss die Layergroeße B_isgtst_datenreset auf TRUE gesetzt werden. Bei Initialisierung, Klemmenwechsel und Beendigung des Jobs ist B_isgtst_datenreset auf FALSE zu setzen. GENDATENRESET (0x2E 5F71)

_No arguments._

### STATUS_DKATSPOSC

Vermessener Sauerstoffspeicher (OSC) des überwachten Katalysatorvolumens lesen. DKATSPOSC (0x22 5F73)

_No arguments._

### STEUERN_DKATSPOSC

Vermessener Sauerstoffspeicher (OSC) des überwachten Katalysatorvolumens vorgeben. Beim Aufruf dieses Services wird das Bit BasSvrAppl_stMeasOSCCat für 1 Sekunde auf 1 gesetzt. DKATSPOSC (0x2E 5F73)

_No arguments._

### STATUS_KATHEIZFUNKTION_DEAKTIVIERUNG

Status Deaktivierung der Katheizfunktionalität (1 = aktiv / 0 = inaktiv) auslesen KATHEIZFUNKTION_DEAKTIVIERUNG (0x22 5F74)

_No arguments._

### STEUERN_KATHEIZFUNKTION_DEAKTIVIERUNG

Deaktivierung der Katheizfunktionalitaet aktiv / inaktiv. (1=aktiv, 0=inaktiv). Nach 50 Km muss die Deaktivierung der Katheizfunktionalitaet zurückgenommen werden. KATHEIZFUNKTION_DEAKTIVIERUNG (0x2E 5F74)

| Name | Type | Description |
| --- | --- | --- |
| SW_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV | string | Deaktivierung der Katheizfunktionalitaet aktiv / inaktiv. (1=aktiv, 0=inaktiv). Nach 50 Km muss die Deaktivierung der Katheizfunktionalitaet zurückgenommen werden. Werttabelle 0 = 0 1 = 1 a2l-Name: BasSvrAppl_stDeactvnCatHeatg |

### STATUS_WRUECKDREHWINKEL

VVT: Mehrfaches Rueckdrehen (Wiederholter Rueckdrehwinkel) lesen. WRUECKDREHWINKEL (0x22 5F75)

_No arguments._

### STEUERN_WRUECKDREHWINKEL

VVT: Mehrfaches Rueckdrehen (Wiederholter Rueckdrehwinkel). Wenn B_favvtexwinksrev gesetzt ist, dann wird der Wert vom Tester (vvt_exwinksrev_count) auf den Zaehler (vvt_exwinksrev) kopiert. WRUECKDREHWINKEL (0x2E 5F75)

| Name | Type | Description |
| --- | --- | --- |
| SW_VVT_EXWINKSREV | unsigned int | Sollwert Zaehler Rueckdrehereignisse aufgrund von Lagereglerabweichung VVT-Steller Min: 0.0 Max: 65535.0 a2l-Name: vvt_exwinksrev_count |

### STEUERN_OELNIVEAUSENSOR

Deaktivierung des Oelniveausensors. OELNIVEAUSENSOR (0x2E 5F77)

| Name | Type | Description |
| --- | --- | --- |
| SW_B_ONABK_OZDEAKTIV | string | Deaktivierung des Oelniveausensors Werttabelle 0 = 0 1 = 1 a2l-Name: BasSvrAppl_stDeactvOilLvlSens |

### STEUERN_VVTHIGHCURRENT

Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible (VVT-Schwergaengigkeit) vorgeben. VVTHIGHCURRENT (0x2E 5F7A)

| Name | Type | Description |
| --- | --- | --- |
| SW_VVTHIGHCURRENT | unsigned int | Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible Min: 0.0 Max: 65535.0 a2l-Name: vvt_highcurrent_count |

### STATUS_VVTSCHWERGAENGIGKEIT

Anzahl erkannter VVT Lageregelungsfehler, Anzahl erkannter VVT Lageregelungsfehlerwarnungen irrreversible und Anzahl erkannter VVT Lageregelungsfehlerwarnungen reversible (VVT-Schwergaengigkeit) lesen. VVTSCHWERGAENGIGKEIT (0x22 5F7B)

_No arguments._

### STEUERN_VVTDEVIATION

Anzahl erkannter VVT Lageregelungsfehler vorgeben. VVTDEVIATION (0x2E 5F7B)

| Name | Type | Description |
| --- | --- | --- |
| SW_VVTDEVIATION | unsigned int | Anzahl erkannter VVT Lageregelungsfehler Min: 0.0 Max: 65535.0 a2l-Name: vvt_deviation_count |

### STATUS_MSA2STARTERTAUSCH

Startzaehler fuer Startertausch lesen MSA2STARTERTAUSCH (0x22 5F7C)

_No arguments._

### STEUERN_MSA2STARTERTAUSCH

Startzaehler fuer Startertausch vorgeben. Bei der Ausfuehrung dieses Jobs soll das Bit B_msastrtzrst fuer ca. 1 Sekunde auf TRUE gesetzt werden. Ansonsten muss B_msastrtzrst immer FALSE sein. MSA2STARTERTAUSCH (0x2E 5F7C)

| Name | Type | Description |
| --- | --- | --- |
| SW_MSA_STRTZGESCHK | unsigned long | abgefragte Gesamtstartzahl Min: 0.0 Max: 4.294967295E9 a2l-Name: msastrtzgeschk_l |

### STEUERN_DAROLRESET

Darol Lastkollektivdaten ruecksetzen (FASTA) DAROLRESET (0x2E 5F7D)

_No arguments._

### STATUS_DISCODBSR

Verriegelung des betriebsstundenrelevanten Kodierbereichs lesen DISCODBSR (0x22 5F7E)

_No arguments._

### STEUERN_DISCODBSR

Verriegelung des betriebsstundenrelevanten Kodierbereichs vorgeben DISCODBSR (0x2E 5F7E)

_No arguments._

### STEUERN_ZDKSHDPRESET

Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) zuruecksetzen. Beim Aufruf dieses Services soll das Bit B_prail_mon_clr gesetzt werden ZDKSHDPRESET (0x2E 5F7F)

_No arguments._

### STATUS_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE auslesen. GVOBD (0x22 5F80)

_No arguments._

### STEUERN_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE vorgeben. Der Korrekturfaktor soll bei Klemmenwechsel auf den Standardwert 1 zurueckgesetzt werden. STEUERN_GVOBD (0x2E 5F80)

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_1 | real | Faktor auf Einspritzung Zylinder 1 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_3 | real | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_4 | real | Faktor auf Einspritzung Zylinder 3 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_2 | real | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |

### STEUERN_PROGRAMM_GVOBD

Gemischvertrimmung fuer OBD-Demo und PVE programmieren. STEUERN_PROGRAMM_GVOBD (0x2E 5F80)

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_1 | real | Faktor auf Einspritzung Zylinder 1 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_3 | real | Faktor auf Einspritzung Zylinder 5 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_4 | real | Faktor auf Einspritzung Zylinder 3 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |
| SW_F_MK_KORR_EXT_XZYL_2 | real | Faktor auf Einspritzung Zylinder 6 (Physikalische Reihenfolge) Min: 0.0 Max: 1.999969482421875 |

### STEUERN_MSA2HISTORIERESET

Service zum Ruecksetzen von Msa_histnostp, Msa_histnosrt. Beim Aufruf dieses Services soll das Bit mit dem Namen B_msahistrst fuer mindestens eine Sekunde auf 1 gesetzt werden MSA2HISTORIERESET (0x2E 5F84)

_No arguments._

### STATUS_MSA2_DEAK_SAV

Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) auslesen MSA2_DEAK_SAV (0x22 5F85)

_No arguments._

### STEUERN_ENDE_MSA2_DEAK_SAV

Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_ENDE_MSA2_DEAK_SAV (0x2E 5F85)

_No arguments._

### STEUERN_MSA2_DEAK_SAV

Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_SAV (0x2E 5F85)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_SAV | unsigned long | Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) |

### STEUERN_NULLGANG_SCHREIBEN

Schreiben Nullgang Lernwert NULLGANG_SCHREIBEN (0x2E 5F8A)

| Name | Type | Description |
| --- | --- | --- |
| STAT_NGS_WERT | real | Nullgang Lernwert Einheit: % Min: 0.0 Max: 655.35 |

### STATUS_PM_BACKUP

Auslesen des PM-Backup PM_BACKUP (0x22 5F8B)

_No arguments._

### STEUERN_PM_RESTORE

Schreiben PM-Restore PM_RESTORE (0x2E 5F8B)

| Name | Type | Description |
| --- | --- | --- |
| STAT_PMRESTORE_0 | unsigned char | PM-Restore Byte 0 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [0] |
| STAT_PMRESTORE_1 | unsigned char | PM-Restore Byte 1 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [1] |
| STAT_PMRESTORE_2 | unsigned char | PM-Restore Byte 2 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [2] |
| STAT_PMRESTORE_3 | unsigned char | PM-Restore Byte 3 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [3] |
| STAT_PMRESTORE_4 | unsigned char | PM-Restore Byte 4 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [4] |
| STAT_PMRESTORE_5 | unsigned char | PM-Restore Byte 5 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [5] |
| STAT_PMRESTORE_6 | unsigned char | PM-Restore Byte 6 Min: 0.0 Max: 255.0 a2l-Name: pmrestr Array [6] |

### STATUS_HUBKORR

Hubkorrektur auslesen HUBKORR (0x22 5F8C)

_No arguments._

### STEUERN_HUBKORR_PROGRAMMIEREN

Hubkorrektur programmieren STEUERN_HUBKORR_PROGRAMMIEREN (0x2E 5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSNNV | unsigned char | Codierdaten Hub Korrektur Min: 0.0 Max: 255.0 |

### STEUERN_HUBKORR_RESET

Hubkorrektur loeschen STEUERN_HUBKORR_RESET (0x2E 5F8C)

_No arguments._

### STEUERN_HUBKORR_VERSTELLEN

Hubkorrektur vorgeben STEUERN_HUBKORR_VERSTELLEN (0x2E 5F8C)

| Name | Type | Description |
| --- | --- | --- |
| SW_STVBRVSIN | unsigned char | Codierdaten Hub Korrektur Min: 0.0 Max: 255.0 |

### STATUS_MSA2_DEAK

MSA (MotorStopAutomatik) deaktivieren auslesen MSA2_DEAK (0x22 5F8E)

_No arguments._

### STEUERN_ENDE_MSA2_DEAK

MSA (MotorStopAutomatik) deaktivieren Vorgeben beenden (Aktivierung MSA egal ob MSA dauerhaft oder temporaer deaktiviert ist) (siehe auch CP18096) STEUERN_ENDE_MSA2_DEAK (0x2E 5F8E)

_No arguments._

### STEUERN_MSA2_DEAK

MSA (MotorStopAutomatik) MSA temporaer (bis Zuendungswechsel) deaktivieren vorgeben Bei deaktivierter MSA ist kein FS zu erzeugen. Bei deaktivierter MSA muessen alle MSA Diagnosen aktiv bleiben. (siehe auch CP18096) STEUERN_MSA2_DEAK (0x2E 5F8E)

_No arguments._

### STEUERN_MSA2_DEAK_DAUERHAFT

MSA (MotorStopAutomatik) MSA dauerhaft (ueber Zuendungswechsel hinweg) deaktivieren vorgeben Der Diagnosejob zur dauerhaften MSA Deaktivierung ist an den Km-Zaehler zu koppeln. Nach Ablauf von 250 km, wird die permanente MSA Deaktivierung automatisch zurueckgenommen (d.h. MSA permanent aktiviert) und der Job zur dauerhaften MSA Deaktivierung kann nicht mehr ausgefuehrt werden. Dadurch wird noch ein mal mehr sichergestellt, dass im Feld MSA aktiv ist und MSA nicht dauerhaft deaktiviert werden kann. Bei deaktivierter MSA ist kein FS zu erzeugen. Bei deaktivierter MSA muessen alle MSA Diagnosen aktiv bleiben. (siehe auch CP18096) STEUERN_MSA2_DEAK_DAUERHAFT (0x2E 5F8E)

_No arguments._

### STATUS_IMAALLE

Abgleichwerte Injektoren auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. IMAALLE (0x22 5F90)

_No arguments._

### STEUERN_IMAALLE

Abgleichwerte Injektoren programmieren IMAALLE (0x2E 5F90)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | Abgleichwert Injektor 01 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | Abgleichwert Injektor 02 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | Abgleichwert Injektor 03 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | Abgleichwert Injektor 04 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 |

### STEUERN_IMA_ZYL_1

Abgleichwert Injektor 01 programmieren IMA_ZYL_1 (0x2E 5F91)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_1 | real | Abgleichwert Injektor 01 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [0] |

### STEUERN_IMA_ZYL_2

Abgleichwert Injektor 02 programmieren IMA_ZYL_2 (0x2E 5F92)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_2 | real | Abgleichwert Injektor 02 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [4] |

### STEUERN_IMA_ZYL_3

Abgleichwert Injektor 03 programmieren IMA_ZYL_3 (0x2E 5F93)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_3 | real | Abgleichwert Injektor 03 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [2] |

### STEUERN_IMA_ZYL_4

Abgleichwert Injektor 04 programmieren IMA_ZYL_4 (0x2E 5F94)

| Name | Type | Description |
| --- | --- | --- |
| SW_DURCHFLUSSABGLEICH_ZYL_4 | real | Abgleichwert Injektor 04 (Durchfluss) Einheit: mg/stroke Min: 0.0 Max: 7.9998779296875 a2l-Name: qdyninjad_w Array [5] |

### STEUERN_KVA

KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben KVA (0x2E 5FC1)

| Name | Type | Description |
| --- | --- | --- |
| KVA | real | KraftstoffVerbrauchsAnzeige - Korrekturfaktor Min: -0.128 Max: 0.127 a2l-Name: kva_korr |

### _STATUS_MSA2_DEAK_DEAKT

Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. MSA2_DEAK_DEAKT (0x22 5FDB)

_No arguments._

### _STEUERN_ENDE_MSA2_DEAK_DEAKT

Selektive Blockierung der Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben ende STEUERN_ENDE_MSA2_DEAK_DEAKT (0x2E 5FDB)

_No arguments._

### _STEUERN_MSA2_DEAK_DEAKT

Selektive Blockierung der Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_DEAKT (0x2E 5FDB)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_DEAKT | unsigned long | Selektive Blockierung der Deaktivierer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstDeactvn |

### _STATUS_MSA2_DEAK_DFSP

Selektieve Blockierung der Deaktivierer aufgrund FSP-Einträgen MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. MSA2_DEAK_DFSP (0x22 5FDC)

_No arguments._

### _STEUERN_ENDE_MSA2_DEAK_DFSP

Selektive Blockierung der Deaktivierer aufgrund Fehlerspeichereintraege MSA2 (MotorStopAutomatik) vorgeben ende STEUERN_ENDE_MSA2_DEAK_DFSP (0x2E 5FDC)

_No arguments._

### _STEUERN_MSA2_DEAK_DFSP

Selektive Blockierung der Deaktivierer aufgrund Fehlerspeichereintraege MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_DFSP (0x2E 5FDC)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_DFSP | unsigned long | Selektive Blockierung der Deaktivierer aufgrund Fehlerspeichereintraegen MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstDeactvnFcm |

### _STATUS_MSA2_DEAK_EA

Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. MSA2_DEAK_EA (0x22 5FDD)

_No arguments._

### _STEUERN_ENDE_MSA2_DEAK_EA

Selektive Blockierung der Einschaltaufforderer MSA2 (MotorStopAutomatik) vorgeben ende STEUERN_ENDE_MSA2_DEAK_EA (0x2E 5FDD)

_No arguments._

### _STEUERN_MSA2_DEAK_EA

Selektive Blockierung der Einschaltaufforderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_EA (0x2E 5FDD)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_EINSCHAUFVOR | unsigned long | Selektive Blockierung der Einschaltaufforderer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstSwtOnReq |

### _STATUS_MSA2_DEAK_FAV

Selektive Blockierung der Fahrerabschaltverhinderer MSA2 (Motor Start/Stopp Automatik) auslesen. Die Umsetzung ist ausschließlich für Entwicklung gedacht. MSA2_DEAK_FAV (0x22 5FDF)

_No arguments._

### _STEUERN_ENDE_MSA2_DEAK_FAV

Selektive Blockierung der Fahrabschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben ende STEUERN_ENDE_MSA2_DEAK_FAV (0x2E 5FDF)

_No arguments._

### _STEUERN_MSA2_DEAK_FAV

Selektive Blockierung der Fahrabschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_FAV (0x2E 5FDF)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_FAHRABSCHVERH | unsigned long | Selektive Blockierung der Fahrabschaltverhinderer MSA2 (Motor Start/Stop Automatik) Min: 0.0 Max: 4.294967295E9 a2l-Name: BasSvrAppl_DiagBlkEngSpstDrvSwtOffPrevn |

### _STATUS_MSA2_DEAK_EV

Selektive Blockierung der Einschaltverhinderer MSA2 (Motor Start/Stopp Automatik) auslesen Die Umsetzung ist ausschließlich für Entwicklung gedacht. MSA2_DEAK_EV (0x22 5FE5)

_No arguments._

### _STEUERN_ENDE_MSA2_DEAK_EV

Selektive Blockierung der Einschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben ende STEUERN_ENDE_MSA2_DEAK_EV (0x2E 5FE5)

_No arguments._

### _STEUERN_MSA2_DEAK_EV

Selektive Blockierung der Einschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben STEUERN_MSA2_DEAK_EV (0x2E 5FE5)

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_EINSCHVERH | unsigned long | Selektive Deaktivierung der Einschaltverhinderer MSA2 (Motor Start/Stop Automatik) (A2L-NAME: Msa_swevdi) Min: 0.0 Max: 4.294967295E9 |

### STATUS_LL_ABGLEICH

Abgleichwert LL (Leerlauf) auslesen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. LL_ABGLEICH (0x22 5FF0)

_No arguments._

### STEUERN_ENDE_ABLL

Abgleichwert LL (Leerlauf) Vorgeben beenden ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. STEUERN_ENDE_ABLL (0x2E 5FF0)

_No arguments._

### STEUERN_LLABG_PROG

Abgleichwert LL (Leerlauf) programmieren ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. START-CONDITION: nur bei LL und Motor warm und Kupplung nicht getreten fuer AG: nur bei P,N Stellung und Bremse nicht betaetigt STEUERN_LLABG_PROG (0x2E 5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnllmv |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnsacmv |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsmv |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsacmv |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnslbv |

### STEUERN_LL_ABGLEICH

Abgleichwert LL (Leerlauf) vorgeben ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. START-CONDITION: nur bei LL und Motor warm und Kupplung nicht getreten fuer AG: nur bei P,N Stellung und Bremse nicht betaetigt STEUERN_LL_ABGLEICH (0x2E 5FF0)

| Name | Type | Description |
| --- | --- | --- |
| SW_ABLL1 | long | Drehzahlanhebung im Leerlauf Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnllmv |
| SW_ABLL2 | long | Drehzahlanhebung im Leerlauf mit Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnsacmv |
| SW_ABLL3 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsmv |
| SW_ABLL4 | long | Drehzahlanhebung im Leerlauf mit Fahrstufe und Klimaanlage ein Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnfsacmv |
| SW_ABLL5 | long | Drehzahlanhebung im Leerlauf zum Batterie laden Einheit: 1/min Min: -256.0 Max: 254.0 a2l-Name: dnslbv |

### ECU_CONFIG

Variante auslesen ECU_CONFIG (0x22 5FF2)

_No arguments._

### ECU_CONFIG_RESET

Variante loeschen ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden. ECU_CONFIG_RESET (0x2E 5FF2)

_No arguments._

### STATUS_SOUNDTUNING_DEAK

Codierung Sound-Tuning Off lesen. SOUNDTUNING_DEAK (0x22 5FFD)

_No arguments._

### STEUERN_SOUNDTUNING_DEAK

Codierung Sound-Tuning Off. SOUNDTUNING_DEAK (0x2E 5FFD)

| Name | Type | Description |
| --- | --- | --- |
| SW_SOUNDTUNING_DEAK | unsigned char | Codierung Sound-Tuning Off: (BasSvrAppl_stSTOff) 0 = Soundtuning aktiv 1 = Soundtuning deaktiviert Min: 0.0 Max: 1.0 a2l-Name: BasSvrAppl_stSTOff |

### STEUERN_ENDE_USOLL

Sollspannungswert (des Generators) (ueber Isgtst_testerusoll) steuern-Ende. USOLL (0x30 7300)

_No arguments._

### STEUERN_USOLL

Sollspannungswert (des Generators) (ueber Isgtst_testerusoll) vorgeben. Wenn dieser Job aktiv wird, ist B_isgtst_testerusoll auf TRUE zu setzen. USOLL (0x30 7307)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_USOLL | real | Tastverhaeltniss Sollspannungswert (ueber Isgtst_testerusoll) (UGEN). Einheit: V Min: 0.0 Max: 16.0 a2l-Name: BasSvrAppl_uDflTstr |
| SW_TO_USOLL | unsigned long | Timeout Sollspannungswert (ueber Isgtst_testerusoll) (UGEN). Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_RRZ

Loadresponsewert (des Generators) Steuern-Ende. RRZ (0x30 7400)

_No arguments._

### STEUERN_RRZ

Loadresponsewert (des Generators) vorgegeben. Wenn der Job aktiv wird, ist B_isgtst_testerrrz auf TRUE zu setzen. RRZ (0x30 7407)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_RRZ | real | Tastverhaeltniss Loadresponsewert (des Generators) vorgeben (UGEN). Einheit: s Min: 0.0 Max: 15.0 a2l-Name: BasSvrAppl_tiLdRespTstr |
| SW_TO_RRZ | unsigned long | Timeout Loadresponsewert (des Generators) vorgeben (UGEN). Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_IERRGRENZ

Grenzerregerstromwert (des Generators) steuern-Ende. IERRGRENZ (0x30 7500)

_No arguments._

### STEUERN_IERRGRENZ

Grenzerregerstromwert (des Generators) vorgegeben. Wenn der Job aktiv wird, ist B_isgtst_testerierrg auf TRUE zu setzen. IERRGRENZ (0x30 7507)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_IERRGRENZ | real | Tastverhaeltniss Grenzerregerstromwert (des Generators) (UGEN). Einheit: A Min: 0.0 Max: 25.5 a2l-Name: BasSvrAppl_iDesCrntTstr |
| SW_TO_IERRGRENZ | unsigned long | Timeout Grenzerregerstromwert (des Generators) (UGEN). Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EWG

Elektrische Wastegate Ansteuerung beenden EWG (0x30 7800)

_No arguments._

### STEUERN_EWG

Elektrische Wastegate Ansteuerung EWG (0x30 7807)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWG | real | Sollwert vom Elektrischen Wastgate Einheit: % Min: 0.0 Max: 99.609375 a2l-Name: BasSvrAppl_nrmDesPosEwgTstr |
| SW_TO_EWG | unsigned long | Timeout der Ansteuerung Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_GLF2

Gesteuerte Luftfuehrung Klappe 2 Ansteuerung beenden GLF2 (0x30 A400)

_No arguments._

### STEUERN_GLF2

Gesteuerte Luftfuehrung Klappe 2 ansteuern GLF2 (0x30 A407)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF2 | unsigned char | Komponentenansteuerung: Gesteuerte Luftfuehrung Klappe 2 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_act_pkks_ext_adj |
| SW_TO_GLF2 | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 2 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ODR

Oel Druck Regelung (Geregeltes Oeldrucksystem) Ansteuerung beenden ODR (0x30 AB00)

_No arguments._

### STEUERN_ODR

Oel Druck Regelung (Geregeltes Oeldrucksystem) ansteuern ODR (0x30 AB07)

| Name | Type | Description |
| --- | --- | --- |
| SW_P_OELSOL_TST | unsigned long | Oeldruck Sollwert durch Testereingriff Einheit: hPa Min: 0.0 Max: 8160.0 a2l-Name: B_bkvpset |
| SW_TO_ODR | unsigned long | Timeout Oel Druck Regelung (Geregeltes Oeldrucksystem) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ODV

Oeldruckventil (Geregeltes Oeldrucksystem) Ansteuerung beenden ODV (0x30 AC00)

_No arguments._

### STEUERN_ODV

Oeldruckventil (Geregeltes Oeldrucksystem) ansteuern ODV (0x30 AC07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ODV | real | Tastverhaeltniss Oeldruckventil (Geregeltes Oeldrucksystem) Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: tvpoeltst |
| SW_TO_ODV | unsigned long | Timeout Oeldruckventil (Geregeltes Oeldrucksystem) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ULV

Umluftventil Ansteuerung beenden ULV (0x30 B500)

_No arguments._

### STEUERN_ULV

Umluftventil ansteuern ULV (0x30 B507)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV | real | Tastverhaeltniss Umluftventil Einheit: % Min: 0.0 Max: 99.99999999999986 |
| SW_TO_ULV | unsigned long | Timeout Umluftventil Einheit: s Min: 0.0 Max: 510.0 a2l-Name: arqtuvs_w |

### STEUERN_ENDE_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden LDS1 (0x30 B600)

_No arguments._

### STEUERN_LDS1

Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern LDS1 (0x30 B607)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS1 | real | Tastverhaeltniss Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Einheit: % Min: 0.0 Max: 99.99999999999986 |
| SW_TO_LDS1 | unsigned long | Timeout Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Einheit: s Min: 0.0 Max: 510.0 a2l-Name: arqtwgv_w |

### STEUERN_ENDE_MSV

Mengensteuerventil Ansteuerung beenden MSV (0x30 BD00)

_No arguments._

### STEUERN_MSV

Mengensteuerventil ansteuern MSV (0x30 BD07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSV | real | Tastverhaeltniss Mengensteuerventil |
| SW_TO_MSV | unsigned long | Timeout Mengensteuerventil Einheit: s Min: 0.0 Max: 510.0 a2l-Name: arqtprs_w |

### STEUERN_ENDE_EWAP

elektr. Wasserpumpe Ansteuerung beenden EWAP (0x30 BF00)

_No arguments._

### STEUERN_EWAP

elektr. Wasserpumpe (Bit Serielle Datenschnittstelle) ansteuern EWAP (0x30 BF07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP | unsigned char | Sollwert elektr. Wasserpumpe (0 bis 255 Upm) Min: 0.0 Max: 255.0 a2l-Name: newpsolltst |
| SW_TO_EWAP | unsigned long | Timeout elektr. Wasserpumpe Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_AGK

Abgasklappe Ansteuerung beenden AGK (0x30 C100)

_No arguments._

### STEUERN_AGK

Abgasklappe ansteuern AGK (0x30 C107)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK | unsigned char | Komponentenansteuerung: Abgasklappe 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_btakrst |
| SW_TO_AGK | unsigned long | Timeout 0 bis 508s Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_GLF

Gesteuerte Luftfuehrung (Klappe 1) Ansteuerung beenden GLF (0x30 C300)

_No arguments._

### STEUERN_GLF

Gesteuerte Luftfuehrung (Klappe 1) ansteuern GLF (0x30 C307)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF | unsigned char | Komponentenansteuerung: Gesteuerte Luftfuehrung 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_act_akks_ext_adj |
| SW_TO_GLF | unsigned long | Timeout Gesteuerte Luftfuehrung Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_KFT

Kennfeldthermostat Ansteuerung beenden KFT (0x30 C900)

_No arguments._

### STEUERN_KFT

Kennfeldthermostat ansteuern KFT (0x30 C907)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT | unsigned char | Komponentenansteuerung: Kennfeldthermostat 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_etret |
| SW_TO_KFT | unsigned long | Timeout Kennfeldthermostat Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DMTL_P

Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden DMTL_P (0x30 CC00)

_No arguments._

### STEUERN_DMTL_P

Diagnosemodul-Tank Leckage Pumpe ansteuern DMTL_P (0x30 CC07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P | unsigned char | Komponentenansteuerung: Diagnosemodul-Tank Leckage Pumpe 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_dmpmet |
| SW_TO_DMTL_P | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DMTL_V

Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden DMTL_V (0x30 CD00)

_No arguments._

### STEUERN_DMTL_V

Diagnosemodul-Tank Leckage Ventil ansteuern DMTL_V (0x30 CD07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V | unsigned char | Komponentenansteuerung: Diagnosemodul-Tank Leckage Ventil 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_dmmvet |
| SW_TO_DMTL_V | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_DMTL_HEIZUNG

Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden DMTL_HEIZUNG (0x30 CE00)

_No arguments._

### STEUERN_DMTL_HEIZUNG

Diagnosemodul-Tank Leckage Heizung ansteuern DMTL_HEIZUNG (0x30 CE07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH | unsigned char | Komponentenansteuerung: Diagnosemodul-Tank Leckage Heizung 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_btdmh |
| SW_TO_DMTLH | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_TEV

Tankentlueftungsventil Ansteuerung beenden TEV (0x30 CF00)

_No arguments._

### STEUERN_TEV

Tankentlueftungsventil ansteuern TEV (0x30 CF07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV | real | Tastverhaeltniss Tankentlueftungsventil Einheit: % Min: -327.68 Max: 327.67 a2l-Name: arqttev_w |
| SW_TO_TEV | unsigned long | Timeout Tankentlueftungsventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_LSH1

Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden LSH1 (0x30 D000)

_No arguments._

### STEUERN_LSH1

Lambdasondenheizung vor Kat Bank1 ansteuern LSH1 (0x30 D007)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1 | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: resdhlsu |
| SW_TO_LSH1 | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_LSH2

Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden LSH2 (0x30 D100)

_No arguments._

### STEUERN_LSH2

Lambdasondenheizung hinter Kat Bank1 ansteuern LSH2 (0x30 D107)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2 | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank1 Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: resdhshe |
| SW_TO_LSH2 | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_MIL

MIL (Malfunction Indicator Lamp) Ansteuerung beenden MIL (0x30 D400)

_No arguments._

### STEUERN_MIL

MIL (Malfunction Indicator Lamp) ansteuern MIL (0x30 D407)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL | unsigned char | Tastverhaeltniss MIL (Malfunction Indicator Lamp) Min: 0.0 Max: 255.0 |
| SW_TO_MIL | unsigned long | Timeout MIL (Malfunction Indicator Lamp) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EML

EML (Engine Malfunction Lamp) Ansteuerung beenden EML (0x30 D600)

_No arguments._

### STEUERN_EML

EML (Engine Malfunction Lamp) ansteuern EML (0x30 D607)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML | unsigned char | Tastverhaeltniss EML (Engine Malfunction Lamp) Min: 0.0 Max: 255.0 |
| SW_TO_EML | unsigned long | Timeout EML (Engine Malfunction Lamp) Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_E_LUEFTER

E-Luefter Ansteuerung beenden E_LUEFTER (0x30 DA00)

_No arguments._

### STEUERN_E_LUEFTER

E-Luefter ansteuern E_LUEFTER (0x30 DA07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE | real | Tastverhaeltniss E-Luefter Einheit: % Min: 0.0 Max: 93.359375 a2l-Name: tamldia |
| SW_TO_ELUE | unsigned long | Timeout E-Luefter Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_VVT

VVT Ansteuerung beenden VVT (0x30 DD00)

_No arguments._

### STEUERN_VVT

VVT ansteuern VVT (0x30 DD07)

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_VVT | real | Stellbereich VVT Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: vvtaet |
| SW_TO_VVT | unsigned long | Timeout VVT Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV1

Einspritzventil 1 (physikalisch) Ansteuerung beenden EV1 (0x30 E100)

_No arguments._

### STEUERN_EV1

Einspritzventil 1 (physikalisch) ansteuern EV1 (0x30 E107)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1 | unsigned long | Periodendauer Einspritzventil 1 Einheit: ms Min: 0.0 Max: 2550.0 |
| SW_TV_EV1 | real | Tastverhaeltniss Einspritzventil 1 Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E1 |
| SW_TO_EV1 | unsigned long | Timeout Einspritzventil 1 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV2

Einspritzventil 2 (physikalisch) Ansteuerung beenden EV2 (0x30 E200)

_No arguments._

### STEUERN_EV2

Einspritzventil 2 (physikalisch) ansteuern EV2 (0x30 E207)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2 | unsigned long | Periodendauer Einspritzventil 2 Einheit: ms Min: 0.0 Max: 2550.0 |
| SW_TV_EV2 | real | Tastverhaeltniss Einspritzventil 2 Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E2 |
| SW_TO_EV2 | unsigned long | Timeout Einspritzventil 2 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV3

Einspritzventil 3 (physikalisch) Ansteuerung beenden EV3 (0x30 E300)

_No arguments._

### STEUERN_EV3

Einspritzventil 3 (physikalisch) ansteuern EV3 (0x30 E307)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3 | unsigned long | Periodendauer Einspritzventil 3 Einheit: ms Min: 0.0 Max: 2550.0 |
| SW_TV_EV3 | real | Tastverhaeltniss Einspritzventil 3 Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E3 |
| SW_TO_EV3 | unsigned long | Timeout Einspritzventil 3 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_EV4

Einspritzventil 4 (physikalisch) Ansteuerung beenden EV4 (0x30 E400)

_No arguments._

### STEUERN_EV4

Einspritzventil 4 (physikalisch) ansteuern EV4 (0x30 E407)

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4 | unsigned long | Periodendauer Einspritzventil 4 Einheit: ms Min: 0.0 Max: 2550.0 |
| SW_TV_EV4 | real | Tastverhaeltniss Einspritzventil 4 Einheit: % Min: 0.0 Max: 99.999999999975 a2l-Name: BasSvrAppl_IOCtlDutyCycle60E4 |
| SW_TO_EV4 | unsigned long | Timeout Einspritzventil 4 Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ENWS

Vanos Einlass Ventil Ansteuerung beenden ENWS (0x30 ED00)

_No arguments._

### STEUERN_ENWS

Vanos Einlass Ventil ansteuern ENWS (0x30 ED07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS | real | Tastverhältnis Vanos_E Ventil Einheit: ° KW Min: -102.4 Max: 101.6 a2l-Name: wnwetst |
| SW_TO_ENWS | unsigned long | Timeout Vanos_E Ventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_ANWS

Vanos Auslass Ventil Ansteuerung beenden ANWS (0x30 EE00)

_No arguments._

### STEUERN_ANWS

Vanos Auslass Ventil ansteuern ANWS (0x30 EE07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS | real | Tastverhältnis Vanos_A Ventil Einheit: ° KW Min: -102.4 Max: 101.6 a2l-Name: wnwatst |
| SW_TO_ANWS | unsigned long | Timeout Vanos_A Ventil Einheit: s Min: 0.0 Max: 510.0 |

### STEUERN_ENDE_TEAV

Absperrventil Tankentlueftung (Steuern-Ende) TEAV (0x30 FC00)

_No arguments._

### STEUERN_TEAV

Absperrventil Tankentlueftung Ansteuerung TEAV (0x30 FC07)

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEAV | unsigned char | Komponentenansteuerung: Absperrventil Tankentlueftung 1 = Ansteuern 0 = Aussteuern (default) Min: 0.0 Max: 1.0 a2l-Name: B_facpimv |
| SW_TO_TEAV | unsigned long | Timeout Absperrventil Tankentlueftung Einheit: s Min: 0.0 Max: 510.0 |

### _STATUS_SEGELVERH

Auslesung des großen und kleinen Segelverhinderers. Dieser Job dient nur für Entwicklungszwecke. SEGELVERH (0x22 4106)

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
| 0xB7 | Robert Bosch Battery Systems GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
| 0xBA | BorgWarner |
| 0xBB | BMW - Fahrzeugsimulator |
| 0xBC | Benteler Duncan Plant |
| 0xBD | U-Shin |
| 0xBE | Schaeffler Technologies |
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
| 0x20 | Fehler momentan nicht vorhanden, nicht OBD-entprellt |
| 0x21 | Fehler momentan nicht vorhanden, OBD-entprellt |
| 0x22 | Fehler momentan vorhanden, noch nicht OBD-entprellt |
| 0x23 | Fehler momentan vorhanden, OBD-entprellt |
| 0x30 | Fehler verursacht kein Aufleuchten der Warnlampe (MIL) |
| 0x31 | Fehler wuerde das Aufleuchten der Warnlampe (MIL) verursachen |
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
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
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
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
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
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
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

### COENG_ST_COMPU_VERB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | COENG_STANDBY |
| 0x01 | COENG_READY |
| 0x02 | COENG_CRANKING |
| 0x03 | COENG_RUNNING |
| 0x04 | COENG_STOPPING |
| 0x05 | COENG_FINISH |
| 0xFF | undefiniert |

### EPM_STSYNC_STATE_T

| WERT | UWTEXT |
| --- | --- |
| 0x00 | EPM_NO_SYNC |
| 0x0A | EPM_ALE_SYNC |
| 0x14 | EPM_CAS_SYNC |
| 0x15 | EPM_DIRSTALE_SYNC |
| 0x1E | EPM_FULL_SYNC |
| 0xFF | undefiniert |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 00654321 |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x2710 | 0x2710 Drosselklappe, Funktion: klemmt dauerhaft |
| 0x2711 | 0x2711 Drosselklappe, Funktion: klemmt kurzzeitig |
| 0x2714 | 0x2714 Drosselklappe, Funktion: schwergängig, zu langsam |
| 0x2774 | 0x2774 Luftmasse, Plausibilität: Luftmasse zu hoch |
| 0x2775 | 0x2775 Luftmasse, Plausibilität: Luftmasse zu niedrig |
| 0x2778 | 0x2778 Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig, Luftmasse zu hoch |
| 0x2779 | 0x2779 Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß, Luftmasse zu niedrig |
| 0x277A | 0x277A Luftmassenmesser, Signal: elektrischer Fehler |
| 0x278A | 0x278A DME, interner Fehler, Luftmassenmesser: Leitungsunterbrechung Standby-Schalter |
| 0x278C | 0x278C Luftmassenmesser, Arbeitsbereich: Luftmasse zu hoch |
| 0x278D | 0x278D Luftmassenmesser, Arbeitsbereich: Luftmasse zu niedrig |
| 0x278E | 0x278E Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß |
| 0x278F | 0x278F Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig |
| 0x27D7 | 0x27D7 Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig |
| 0x27D8 | 0x27D8 Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch |
| 0x27D9 | 0x27D9 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus |
| 0x27DA | 0x27DA Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse |
| 0x27DB | 0x27DB Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus |
| 0x27DC | 0x27DC Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse |
| 0x27DD | 0x27DD Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig |
| 0x27DE | 0x27DE Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch |
| 0x27E4 | 0x27E4 Fahrpedalmodul, Pedalwertgeber: Sammelfehler |
| 0x27E8 | 0x27E8 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 |
| 0x280E | 0x280E Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch |
| 0x280F | 0x280F Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig |
| 0x281A | 0x281A Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus |
| 0x281B | 0x281B Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse |
| 0x2820 | 0x2820 Absolutdrucksensor, Saugrohr: Sammelfehler |
| 0x283C | 0x283C DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Plus] |
| 0x283D | 0x283D DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Masse] |
| 0x2841 | 0x2841 DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu hoch im Nachlauf] |
| 0x2842 | 0x2842 DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu niedrig im Nachlauf] |
| 0x2848 | 0x2848 DME: interner Fehler [Umgebungsdrucksensor: Sammelfehler] |
| 0x284C | 0x284C DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu hoch] |
| 0x284D | 0x284D DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu niedrig] |
| 0x284E | 0x284E DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] |
| 0x284F | 0x284F DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] |
| 0x28A0 | 0x28A0 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch |
| 0x28A1 | 0x28A1 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig |
| 0x28A4 | 0x28A4 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus |
| 0x28A5 | 0x28A5 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse |
| 0x28A8 | 0x28A8 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus |
| 0x28A9 | 0x28A9 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse |
| 0x28AB | 0x28AB Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler |
| 0x28AC | 0x28AC Drosselklappe, Drosselklappenpotenziometer 1 und 2: Sammelfehler |
| 0x28B0 | 0x28B0 Drosselklappe: Notlauf aktiv |
| 0x28B4 | 0x28B4 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 |
| 0x28B8 | 0x28B8 Drosselklappe, Ansteuerung: Kurzschluss |
| 0x28B9 | 0x28B9 Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch |
| 0x28BA | 0x28BA DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler |
| 0x28BB | 0x28BB Drosselklappe, Ansteuerung: Leitungsunterbrechung |
| 0x28BC | 0x28BC Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht |
| 0x28BD | 0x28BD Drosselklappe, schliessende Federprüfung: Fehlfunktion |
| 0x28C0 | 0x28C0 Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht |
| 0x28C1 | 0x28C1 Drosselklappe, öffnende Federprüfung: Fehlfunktion |
| 0x28C4 | 0x28C4 Drosselklappe, Adaption: Notluftposition nicht adaptiert |
| 0x28CC | 0x28CC Drosselklappe, Adaption: Randbedingungen nicht erfüllt |
| 0x28CD | 0x28CD Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig |
| 0x28D0 | 0x28D0 Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt |
| 0x28D4 | 0x28D4 Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt |
| 0x28D9 | 0x28D9 Tuningschutz: Luftmasse zu hoch |
| 0x2904 | 0x2904 Ladelufttemperatursensor: Sammelfehler |
| 0x2906 | 0x2906 Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen |
| 0x2908 | 0x2908 Ladelufttemperatursensor: Sammelfehler |
| 0x2936 | 0x2936 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse |
| 0x2937 | 0x2937 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus |
| 0x293A | 0x293A Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch |
| 0x293B | 0x293B Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig |
| 0x293E | 0x293E Kühlmitteltemperatursensor: Sammelfehler |
| 0x2943 | 0x2943 Kühlmitteltemperatursensor, Signaländerung: zu schnell |
| 0x2947 | 0x2947 Kühlmitteltemperatursensor, Signal: festliegend auf niedrig |
| 0x2948 | 0x2948 Kühlmitteltemperatursensor, Signal: festliegend |
| 0x299A | 0x299A Außentemperatursensor, Signal: Oberen Schwellwert überschritten |
| 0x299B | 0x299B Außentemperatursensor, Signal: Unteren Schwellwert unterschritten |
| 0x299C | 0x299C Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft |
| 0x299E | 0x299E Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität |
| 0x29A2 | 0x29A2 Außentemperatursensor, Plausibilität: Umgebungstemperatur größer als Modelltemperatur |
| 0x29A3 | 0x29A3 Außentemperatursensor, Plausibilität: Umgebungstemperatur kleiner als Modelltemperatur |
| 0x29DC | 0x29DC Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch |
| 0x29DD | 0x29DD Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig |
| 0x29E0 | 0x29E0 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus |
| 0x29E1 | 0x29E1 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse |
| 0x29E2 | 0x29E2 Ladelufttemperatursensor, Spannungsänderung: zu schnell |
| 0x29E4 | 0x29E4 Ladelufttemperatur, Plausibilität: Temperatur zu hoch |
| 0x29E5 | 0x29E5 Ladelufttemperatur, Signal: festliegend |
| 0x29E6 | 0x29E6 Ladelufttemperatursensor, Kaltstart: Sammelfehler |
| 0x29E7 | 0x29E7 Ladelufttemperatursensor: Sammelfehler |
| 0x29E8 | 0x29E8 Ladelufttemperatursensor, Signaländerung: zu schnell |
| 0x29FE | 0x29FE Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x29FF | 0x29FF Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A00 | 0x2A00 Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A01 | 0x2A01 Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A02 | 0x2A02 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x2A03 | 0x2A03 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A04 | 0x2A04 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A05 | 0x2A05 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A06 | 0x2A06 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x2A07 | 0x2A07 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A08 | 0x2A08 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A09 | 0x2A09 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A0A | 0x2A0A Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x2A0B | 0x2A0B Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A0C | 0x2A0C Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A0D | 0x2A0D Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A30 | 0x2A30 Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A31 | 0x2A31 Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A32 | 0x2A32 Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A33 | 0x2A33 Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A40 | 0x2A40 Injektor Zylinder 1, Stromanstieg: zu langsam |
| 0x2A41 | 0x2A41 Injektor Zylinder 2, Stromanstieg: zu langsam |
| 0x2A42 | 0x2A42 Injektor Zylinder 3, Stromanstieg: zu langsam |
| 0x2A43 | 0x2A43 Injektor Zylinder 4, Stromanstieg: zu langsam |
| 0x2A4C | 0x2A4C Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung |
| 0x2A4D | 0x2A4D Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung |
| 0x2A4E | 0x2A4E Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung |
| 0x2A4F | 0x2A4F Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung |
| 0x2A5F | 0x2A5F Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus |
| 0x2A60 | 0x2A60 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse |
| 0x2A61 | 0x2A61 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung |
| 0x2A70 | 0x2A70 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft |
| 0x2A72 | 0x2A72 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel |
| 0x2A74 | 0x2A74 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation gestört |
| 0x2A80 | 0x2A80 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu mager |
| 0x2A81 | 0x2A81 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu mager |
| 0x2A82 | 0x2A82 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu mager |
| 0x2A83 | 0x2A83 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu mager |
| 0x2A90 | 0x2A90 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu fett |
| 0x2A91 | 0x2A91 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett |
| 0x2A92 | 0x2A92 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett |
| 0x2A93 | 0x2A93 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett |
| 0x2A96 | 0x2A96 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu mager: Sammelfehler |
| 0x2A97 | 0x2A97 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu fett: Sammelfehler |
| 0x2AC6 | 0x2AC6 Kleinstmengenadaption, Injektor Zylinder 1: Adaptionswert außerhalb gültigem Bereich |
| 0x2AC7 | 0x2AC7 Kleinstmengenadaption, Injektor Zylinder 1: Reglerwert außerhalb gültigem Bereich |
| 0x2AC8 | 0x2AC8 Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AC9 | 0x2AC9 Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2ACA | 0x2ACA Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2ACB | 0x2ACB Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2ACC | 0x2ACC Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung: Fehlfunktion |
| 0x2ACD | 0x2ACD Kleinstmengenadaption, Injektor Zylinder 1, Plausibilität: Signal unplausibel |
| 0x2ACE | 0x2ACE Kleinstmengenadaption, Injektor Zylinder 3: Adaptionswert außerhalb gültigem Bereich |
| 0x2ACF | 0x2ACF Kleinstmengenadaption, Injektor Zylinder 3: Reglerwert außerhalb gültigem Bereich |
| 0x2AD0 | 0x2AD0 Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AD1 | 0x2AD1 Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2AD2 | 0x2AD2 Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2AD3 | 0x2AD3 Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2AD4 | 0x2AD4 Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung: Fehlfunktion |
| 0x2AD5 | 0x2AD5 Kleinstmengenadaption, Injektor Zylinder 3, Plausibilität: Signal unplausibel |
| 0x2AD6 | 0x2AD6 Kleinstmengenadaption, Injektor Zylinder 4: Adaptionswert außerhalb gültigem Bereich |
| 0x2AD7 | 0x2AD7 Kleinstmengenadaption, Injektor Zylinder 4: Reglerwert außerhalb gültigem Bereich |
| 0x2AD8 | 0x2AD8 Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AD9 | 0x2AD9 Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2ADA | 0x2ADA Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2ADB | 0x2ADB Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2ADC | 0x2ADC Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung: Fehlfunktion |
| 0x2ADD | 0x2ADD Kleinstmengenadaption, Injektor Zylinder 4, Plausibilität: Signal unplausibel |
| 0x2ADE | 0x2ADE Kleinstmengenadaption, Injektor Zylinder 2: Adaptionswert außerhalb gültigem Bereich |
| 0x2ADF | 0x2ADF Kleinstmengenadaption, Injektor Zylinder 2: Reglerwert außerhalb gültigem Bereich |
| 0x2AE0 | 0x2AE0 Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AE1 | 0x2AE1 Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2AE2 | 0x2AE2 Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2AE3 | 0x2AE3 Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2AE4 | 0x2AE4 Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung: Fehlfunktion |
| 0x2AE5 | 0x2AE5 Kleinstmengenadaption, Injektor Zylinder 2, Plausibilität: Signal unplausibel |
| 0x2BC0 | 0x2BC0 Gemischregelung: Gemisch zu mager |
| 0x2BC1 | 0x2BC1 Gemischregelung: Gemisch zu fett |
| 0x2BC2 | 0x2BC2 Gemischadaption, Leerlauf: Gemisch zu mager |
| 0x2BC3 | 0x2BC3 Gemischadaption, Leerlauf: Gemisch zu fett |
| 0x2BCA | 0x2BCA Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett |
| 0x2BCB | 0x2BCB Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager |
| 0x2BD9 | 0x2BD9 Raildrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x2BDA | 0x2BDA Raildrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x2BDE | 0x2BDE Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig |
| 0x2BE5 | 0x2BE5 Raildrucksensor, Plausibilität: Druck zu hoch |
| 0x2BE6 | 0x2BE6 Raildrucksensor, Plausibilität: Druck zu niedrig |
| 0x2BE9 | 0x2BE9 Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem |
| 0x2BEA | 0x2BEA Gemischregelung: Gemisch zu mager, große Abweichung |
| 0x2BEB | 0x2BEB Gemischregelung: Gemisch zu fett, große Abweichung |
| 0x2BED | 0x2BED Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch |
| 0x2BEE | 0x2BEE Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig |
| 0x2BEF | 0x2BEF Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig |
| 0x2BF0 | 0x2BF0 Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig |
| 0x2BF2 | 0x2BF2 Raildrucksensor, Arbeitsbereich: Druck zu hoch |
| 0x2BF4 | 0x2BF4 Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart |
| 0x2BF5 | 0x2BF5 Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart |
| 0x2BF8 | 0x2BF8 Raildrucksensor, Signal: festliegend |
| 0x2C00 | 0x2C00 Kraftstoffhochdruck, Plausibilität: Druck zu hoch |
| 0x2C01 | 0x2C01 Kraftstoffhochdruck, Plausibilität: Druck zu niedrig |
| 0x2C20 | 0x2C20 Ethanolsensor, elektrisch: Kurzschluss nach Plus |
| 0x2C21 | 0x2C21 Ethanolsensor, elektrisch: Kurzschluss nach Masse |
| 0x2C22 | 0x2C22 Ethanolsensor, Arbeitsbereich: Ethanolgehalt zu hoch |
| 0x2C23 | 0x2C23 Ethanolsensor, Arbeitsbereich: Ethanolgehalt zu niedrig |
| 0x2C24 | 0x2C24 Ethanolsensor, Eigendiagnose: Ethanolgehalt unplausibel |
| 0x2C25 | 0x2C25 Ethanolsensor, Arbeitsbereich: Temperatur zu hoch |
| 0x2C26 | 0x2C26 Ethanolsensor, Arbeitsbereich: Temperatur zu niedrig |
| 0x2C27 | 0x2C27 Ethanolsensor, Eigendiagnose: Temperatur unplausibel |
| 0x2C28 | 0x2C28 Ethanolsensor, Plausibilität: Ethanolgehalt unplausibel |
| 0x2C3D | 0x2C3D Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus |
| 0x2C3E | 0x2C3E Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse |
| 0x2C3F | 0x2C3F Mengensteuerventil, Ansteuerung: Leitungsunterbrechung |
| 0x2C42 | 0x2C42 Gemischregelung: Sammelfehler |
| 0x2C56 | 0x2C56 Ladedruckregelung, Plausibilität: Druck zu hoch |
| 0x2C57 | 0x2C57 Ladedruckregelung, Plausibilität: Druck zu niedrig |
| 0x2C58 | 0x2C58 Ladedruckregelung: Abschaltung als Folgereaktion |
| 0x2C6F | 0x2C6F Ladedrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x2C70 | 0x2C70 Ladedrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x2C71 | 0x2C71 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch |
| 0x2C72 | 0x2C72 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig |
| 0x2C7F | 0x2C7F Ladedrucksensor: Sammelfehler |
| 0x2C82 | 0x2C82 Ladedruck, Arbeitsbereich: Druck zu hoch |
| 0x2C83 | 0x2C83 Ladedruck, Plausibilität: Druck zu hoch |
| 0x2C84 | 0x2C84 Ladedruck, Arbeitsbereich: Druck zu niedrig |
| 0x2C85 | 0x2C85 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch |
| 0x2C86 | 0x2C86 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig |
| 0x2C88 | 0x2C88 Schubumluftventil, Ansteuerung: Kurzschluss nach Plus |
| 0x2C89 | 0x2C89 Schubumluftventil, Ansteuerung: Kurzschluss nach Masse |
| 0x2C8A | 0x2C8A Schubumluftventil, Ansteuerung: Leitungsunterbrechung |
| 0x2C90 | 0x2C90 Schubumluftventil: klemmt geschlossen |
| 0x2C91 | 0x2C91 Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil |
| 0x2CA1 | 0x2CA1 Wastegate, Ansteuerung: Kurzschluss nach Plus |
| 0x2CA2 | 0x2CA2 Wastegate, Ansteuerung: Kurzschluss nach Masse |
| 0x2CA3 | 0x2CA3 Wastegate, Ansteuerung: Leitungsunterbrechung |
| 0x2CA4 | 0x2CA4 Elektrisches Wastegate, Anschlag-Lernen, Kaltstart: Fehlfunktion |
| 0x2CA5 | 0x2CA5 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) nicht gefunden |
| 0x2CA6 | 0x2CA6 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) nicht gefunden |
| 0x2CA7 | 0x2CA7 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate offen) nicht gefunden |
| 0x2CA8 | 0x2CA8 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate geschlossen) nicht gefunden |
| 0x2CA9 | 0x2CA9 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) außerhalb Toleranz |
| 0x2CAA | 0x2CAA Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) außerhalb Toleranz |
| 0x2CAB | 0x2CAB Elektrisches Wastegate, Anschlag-Lernen: Verstellbereich außerhalb Toleranz |
| 0x2CAC | 0x2CAC Elektrisches Wastegate, Wastegate-Klappe: schwergängig |
| 0x2CAD | 0x2CAD Elektrisches Wastegate, Wastegate-Klappe, Kaltstart: schwergängig |
| 0x2CAE | 0x2CAE Elektrisches Wastegate, Positionssensor, Versorgungsspannung, Plausibilität: Spannung zu niedrig |
| 0x2CAF | 0x2CAF Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Plus |
| 0x2CB3 | 0x2CB3 Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung |
| 0x2CB4 | 0x2CB4 Elektrisches Wastegate, Anschlag-Lernen, Kaltstart: Fehlfunktion |
| 0x2CB5 | 0x2CB5 Elektrisches Wastegate, Ansteuerung: Leitungsunterbrechung |
| 0x2CB6 | 0x2CB6 Elektrisches Wastegate, Ansteuerung: Kurzschluss |
| 0x2CB7 | 0x2CB7 Elektrisches Wastegate, Endstufe: Temperatur zu hoch |
| 0x2CB8 | 0x2CB8 DME, interner Fehler, Elektrisches Wastegate: SPI-Kommunikation fehlerhaft |
| 0x2CB9 | 0x2CB9 Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Masse |
| 0x2CED | 0x2CED Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion |
| 0x2CEE | 0x2CEE Lambdasondenbeheizung vor Katalysator, Funktion: Heizelement fehlerhaft |
| 0x2CF1 | 0x2CF1 Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion |
| 0x2CF2 | 0x2CF2 Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion |
| 0x2CF3 | 0x2CF3 Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion |
| 0x2CF4 | 0x2CF4 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion |
| 0x2CF5 | 0x2CF5 Lambdasonde nach Katalysator: Signal festliegend auf Fett |
| 0x2CF6 | 0x2CF6 Lambdasonde nach Katalysator: Signal festliegend auf Mager |
| 0x2CF8 | 0x2CF8 Lambdasonde vor Katalysator: Falschluft erkannt |
| 0x2CFA | 0x2CFA Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung |
| 0x2CFF | 0x2CFF Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus |
| 0x2D00 | 0x2D00 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse |
| 0x2D03 | 0x2D03 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch |
| 0x2D04 | 0x2D04 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung |
| 0x2D05 | 0x2D05 DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler |
| 0x2D06 | 0x2D06 DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler |
| 0x2D0B | 0x2D0B Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus |
| 0x2D0C | 0x2D0C Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse |
| 0x2D0D | 0x2D0D Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung |
| 0x2D0F | 0x2D0F Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus |
| 0x2D10 | 0x2D10 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse |
| 0x2D11 | 0x2D11 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung |
| 0x2D13 | 0x2D13 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch |
| 0x2D15 | 0x2D15 Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion |
| 0x2D1B | 0x2D1B Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager |
| 0x2D1C | 0x2D1C Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett |
| 0x2D1F | 0x2D1F Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus |
| 0x2D20 | 0x2D20 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse |
| 0x2D22 | 0x2D22 Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung |
| 0x2D23 | 0x2D23 Lambdasonde vor Katalysator, Pumpstromleitung: Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x2D24 | 0x2D24 Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert |
| 0x2D25 | 0x2D25 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung |
| 0x2D27 | 0x2D27 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse |
| 0x2D2F | 0x2D2F Lambdasonde vor Katalysator: Sammelfehler |
| 0x2D33 | 0x2D33 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager |
| 0x2D34 | 0x2D34 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett |
| 0x2D41 | 0x2D41 Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen |
| 0x2D42 | 0x2D42 Valvetronic, Verstellbereich: Anschlag nicht gelernt |
| 0x2D43 | 0x2D43 Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung |
| 0x2D44 | 0x2D44 Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen |
| 0x2D45 | 0x2D45 Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen |
| 0x2D51 | 0x2D51 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus |
| 0x2D52 | 0x2D52 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse |
| 0x2D53 | 0x2D53 VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung |
| 0x2D54 | 0x2D54 VANOS, Auslass, Kaltstart: nicht regelbar |
| 0x2D55 | 0x2D55 VANOS, Einlass, Kaltstart: nicht regelbar |
| 0x2D56 | 0x2D56 VANOS, Auslass, Kaltstart: Position nicht erreicht |
| 0x2D57 | 0x2D57 VANOS, Einlass, Kaltstart: Position nicht erreicht |
| 0x2D5A | 0x2D5A VANOS, Einlass: Regelfehler, Nockenwelle klemmt |
| 0x2D5B | 0x2D5B VANOS, Einlass: Regelfehler, Position nicht erreicht |
| 0x2D60 | 0x2D60 VANOS, Auslass: Regelfehler, Nockenwelle klemmt |
| 0x2D61 | 0x2D61 VANOS, Auslass: Regelfehler, Position nicht erreicht |
| 0x2D9B | 0x2D9B VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus |
| 0x2D9C | 0x2D9C VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse |
| 0x2D9D | 0x2D9D VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung |
| 0x2D9F | 0x2D9F Einlassnockenwellensensor, Plausibilität: Signal unplausibel |
| 0x2DA0 | 0x2DA0 Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz |
| 0x2DA1 | 0x2DA1 Auslassnockenwellensensor, Plausibilität: Signal unplausibel |
| 0x2DA2 | 0x2DA2 Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz |
| 0x2DAD | 0x2DAD VANOS, Auslass: Sammelfehler |
| 0x2DAE | 0x2DAE VANOS, Einlass: Sammelfehler |
| 0x2DAF | 0x2DAF VANOS: Sammelfehler |
| 0x2DB0 | 0x2DB0 VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition |
| 0x2DB1 | 0x2DB1 VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition |
| 0x2DB4 | 0x2DB4 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus |
| 0x2DB5 | 0x2DB5 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse |
| 0x2DB6 | 0x2DB6 Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung |
| 0x2DBA | 0x2DBA DME, interner Fehler, Valvetronic: Bauteileschutz, Abschaltung System |
| 0x2DBB | 0x2DBB Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System |
| 0x2DBC | 0x2DBC Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht |
| 0x2DBD | 0x2DBD Valvetronic-Stellmotor, Positionssensoren: Exzenterwinkel falsch |
| 0x2DBF | 0x2DBF Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus |
| 0x2DC0 | 0x2DC0 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse |
| 0x2DC4 | 0x2DC4 Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb |
| 0x2DC5 | 0x2DC5 Valvetronic-Stellmotor, Ansteuerung: Fehlfunktion |
| 0x2DC6 | 0x2DC6 Valvetronic, Versorgungsspannung: Fehlfunktion |
| 0x2DCA | 0x2DCA DME, interner Fehler, Valvetronic: Endstufe überlastet |
| 0x2DCB | 0x2DCB Valvetronic-Stellmotor: Überlastung |
| 0x2DCC | 0x2DCC DME, interner Fehler, Valvetronic: Warnschwelle Überlastschutz überschritten |
| 0x2DCD | 0x2DCD Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten |
| 0x2DCE | 0x2DCE Valvetronic System: keine Verstellung möglich |
| 0x2DCF | 0x2DCF Valvetronic System: keine Bewegung erkannt |
| 0x2DD0 | 0x2DD0 Valvetronic System: Warnschwelle Regelabweichung überschritten |
| 0x2DD6 | 0x2DD6 Valvetronic-Stellmotor, Positionssensoren: Kurzschluss oder Leitungsunterbrechung |
| 0x2DD7 | 0x2DD7 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlerhaft |
| 0x2DD8 | 0x2DD8 Valvetronic-Stellmotor, Positionssensoren: Signal unplausibel |
| 0x2DE1 | 0x2DE1 Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Feinhallsignale zueinander unplausibel |
| 0x2DE2 | 0x2DE2 Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung |
| 0x2DE3 | 0x2DE3 Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung |
| 0x2DE4 | 0x2DE4 Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung |
| 0x2DE5 | 0x2DE5 Valvetronic-Stellmotor: Überlastung |
| 0x2DE6 | 0x2DE6 Valvetronic: Warnschwelle Überlastschutz überschritten |
| 0x2DE7 | 0x2DE7 Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten |
| 0x2DE8 | 0x2DE8 Valvetronic: Bauteileschutz, Abschaltung System |
| 0x2DE9 | 0x2DE9 Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System |
| 0x2DEA | 0x2DEA Valvetronic: Endstufe überlastet |
| 0x2E0A | 0x2E0A Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung |
| 0x2E0B | 0x2E0B Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung |
| 0x2E0C | 0x2E0C Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung |
| 0x2E0D | 0x2E0D Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt |
| 0x2E0E | 0x2E0E Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel |
| 0x2E0F | 0x2E0F Valvetronic System: deaktiviert, zu häufiger Verstellfehler |
| 0x2E10 | 0x2E10 Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten |
| 0x2E11 | 0x2E11 Valvetronic System: unterer Anschlag gelernt |
| 0x2E4A | 0x2E4A Abgasklappe, Ansteuerung: Kurzschluss nach Plus |
| 0x2E4B | 0x2E4B Abgasklappe, Ansteuerung: Kurzschluss nach Masse |
| 0x2E4C | 0x2E4C Abgasklappe, Ansteuerung: Leitungsunterbrechung |
| 0x2E4D | 0x2E4D Abgasklappe, Plausibilität: Verstellzeit unplausibel |
| 0x2E7C | 0x2E7C Kühlerjalousie, oben, Eigendiagnose: Hardwaredefekt |
| 0x2E7D | 0x2E7D Kühlerjalousie, oben, Eigendiagnose: mechanischer Fehler |
| 0x2E7E | 0x2E7E Kühlerjalousie, oben, Eigendiagnose: Kommunikationsfehler |
| 0x2E80 | 0x2E80 Kühlerjalousie, Ansteuerung: Kurzschluss nach Plus |
| 0x2E81 | 0x2E81 Kühlerjalousie, Ansteuerung: Kurzschluss nach Masse |
| 0x2E82 | 0x2E82 Kühlerjalousie, Ansteuerung: Leitungsunterbrechung |
| 0x2E84 | 0x2E84 Kühlerjalousie, unten, Eigendiagnose, elektrisch: Fehlfunktion |
| 0x2EE0 | 0x2EE0 Verbrennungsaussetzer, mehrere Zylinder: Einspritzabschaltung |
| 0x2EE1 | 0x2EE1 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend |
| 0x2EE2 | 0x2EE2 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang |
| 0x2EE4 | 0x2EE4 Verbrennungsaussetzer, Zylinder 1: Einspritzabschaltung |
| 0x2EE5 | 0x2EE5 Verbrennungsaussetzer, Zylinder 1: abgasschädigend |
| 0x2EE6 | 0x2EE6 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang |
| 0x2EE7 | 0x2EE7 Verbrennungsaussetzer, Zylinder 2: Einspritzabschaltung |
| 0x2EE8 | 0x2EE8 Verbrennungsaussetzer, Zylinder 2: abgasschädigend |
| 0x2EE9 | 0x2EE9 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang |
| 0x2EEA | 0x2EEA Verbrennungsaussetzer, Zylinder 3: Einspritzabschaltung |
| 0x2EEB | 0x2EEB Verbrennungsaussetzer, Zylinder 3: abgasschädigend |
| 0x2EEC | 0x2EEC Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang |
| 0x2EED | 0x2EED Verbrennungsaussetzer, Zylinder 4: Einspritzabschaltung |
| 0x2EEF | 0x2EEF Verbrennungsaussetzer, Zylinder 4: abgasschädigend |
| 0x2EF0 | 0x2EF0 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang |
| 0x2EF7 | 0x2EF7 Verbrennungsaussetzer: Einspritzabschaltung |
| 0x2EFE | 0x2EFE Verbrennungsaussetzer, mehrere Zylinder: erkannt |
| 0x2EFF | 0x2EFF Verbrennungsaussetzer, Zylinder 1: erkannt |
| 0x2F00 | 0x2F00 Verbrennungsaussetzer, Zylinder 2: erkannt |
| 0x2F01 | 0x2F01 Verbrennungsaussetzer, Zylinder 3: erkannt |
| 0x2F02 | 0x2F02 Verbrennungsaussetzer, Zylinder 4: erkannt |
| 0x2F44 | 0x2F44 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall |
| 0x2F76 | 0x2F76 Superklopfen Zylinder 1: Einspritzungsabschaltung |
| 0x2F77 | 0x2F77 Superklopfen Zylinder 2: Einspritzungsabschaltung |
| 0x2F78 | 0x2F78 Superklopfen Zylinder 3: Einspritzungsabschaltung |
| 0x2F79 | 0x2F79 Superklopfen Zylinder 4: Einspritzungsabschaltung |
| 0x2F7C | 0x2F7C Superklopfen: Einspritzungsabschaltung |
| 0x2F83 | 0x2F83 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh |
| 0x2F84 | 0x2F84 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh |
| 0x2F8A | 0x2F8A Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus |
| 0x2F8B | 0x2F8B Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse |
| 0x2F94 | 0x2F94 Superklopfen Zylinder 1: dauerhafte Einspritzabschaltung |
| 0x2F95 | 0x2F95 Superklopfen Zylinder 2: dauerhafte Einspritzabschaltung |
| 0x2F96 | 0x2F96 Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung |
| 0x2F97 | 0x2F97 Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung |
| 0x2FA8 | 0x2FA8 Zündung, Zylinder 1: Brenndauer zu kurz |
| 0x2FA9 | 0x2FA9 Zündung, Zylinder 2: Brenndauer zu kurz |
| 0x2FAA | 0x2FAA Zündung, Zylinder 3: Brenndauer zu kurz |
| 0x2FAB | 0x2FAB Zündung, Zylinder 4: Brenndauer zu kurz |
| 0x2FB3 | 0x2FB3 Zündung, Zylinder 1: Brenndauer außerhalb Toleranz |
| 0x2FB4 | 0x2FB4 Zündung, Zylinder 2: Brenndauer außerhalb Toleranz |
| 0x2FB5 | 0x2FB5 Zündung, Zylinder 3: Brenndauer außerhalb Toleranz |
| 0x2FB6 | 0x2FB6 Zündung, Zylinder 4: Brenndauer außerhalb Toleranz |
| 0x2FDA | 0x2FDA Kurbelwellensensor, Signal: fehlt |
| 0x2FDB | 0x2FDB Kurbelwellensensor, Signal: unplausibel |
| 0x2FDD | 0x2FDD Kurbelwellensensor, Plausibilität: Drehrichtung unplausibel |
| 0x2FDE | 0x2FDE Kurbelwellensensor: allgemeiner Synchronisationsverlust |
| 0x300C | 0x300C Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus |
| 0x300D | 0x300D Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse |
| 0x300E | 0x300E Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus |
| 0x300F | 0x300F Ausassnockenwellensensor, elektrisch: Kurzschluss nach Masse |
| 0x3011 | 0x3011 Einlassnockenwelle: Montage fehlerhaft |
| 0x3012 | 0x3012 Auslassnockenwelle: Montage fehlerhaft |
| 0x303E | 0x303E Klopfregelung: Systemfehler |
| 0x303F | 0x303F Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Plus |
| 0x3040 | 0x3040 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Masse |
| 0x3041 | 0x3041 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Plus |
| 0x3042 | 0x3042 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Masse |
| 0x3043 | 0x3043 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus |
| 0x3044 | 0x3044 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse |
| 0x3045 | 0x3045 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus |
| 0x3046 | 0x3046 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse |
| 0x3048 | 0x3048 Klopfsensor 1, Signal: Motorgeräusch über Grenzwert |
| 0x3049 | 0x3049 Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung |
| 0x304C | 0x304C Klopfsensor 2, Signal: Motorgeräusch über Grenzwert |
| 0x304D | 0x304D Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung |
| 0x3106 | 0x3106 Katalysator: Wirkungsgrad unterhalb Grenzwert |
| 0x3107 | 0x3107 Katalysator, Plausibilität: Abgasgegendruck zu hoch |
| 0x3155 | 0x3155 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus |
| 0x3156 | 0x3156 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse |
| 0x3157 | 0x3157 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung |
| 0x315A | 0x315A Tankentlüftungsventil: klemmt offen |
| 0x3160 | 0x3160 Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Plus |
| 0x3161 | 0x3161 Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Masse |
| 0x3162 | 0x3162 Tankentlüftungssystem Absperrventil, Ansteuerung: Leitungsunterbrechung |
| 0x3163 | 0x3163 Tankentlüftungssystem Absperrventil: klemmt offen |
| 0x3164 | 0x3164 Tankentlüftungssystem, 2. Einleitestelle: Fehlfunktion |
| 0x3166 | 0x3166 Tankentlüftungssystem: Fehlfunktion |
| 0x3183 | 0x3183 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Plus |
| 0x3184 | 0x3184 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Masse |
| 0x3185 | 0x3185 Tankfüllstandssensor, rechts, Signal: CAN Wert unplausibel |
| 0x3187 | 0x3187 Tankfüllstandssensor, links, Signal: Kurzschluss nach Plus |
| 0x3188 | 0x3188 Tankfüllstandssensor, links, Signal: Kurzschluss nach Masse |
| 0x3189 | 0x3189 Tankfüllstandssensor, links, Signal: Tankfüllstandsignal unplausibel zu hoch |
| 0x318A | 0x318A Tankfüllstandssensor, links, Signal: CAN Wert unplausibel |
| 0x318B | 0x318B Tankfüllstandssensor: Signal unplausibel wegen festhängendem Tankfüllstandsgeber |
| 0x318C | 0x318C Tankfüllstandssensor: Tankfüllstand größer als Tankvolumen |
| 0x318D | 0x318D Tankfüllstandssensor: Abweichung zwischen Verbrauch und Füllstandsänderung |
| 0x318F | 0x318F Tankfüllstand, Sammelfehler: Signal und elektrisch |
| 0x3191 | 0x3191 Tankfüllstandssensor, rechts, Signal: Tankfüllstandsignal unplausibel zu hoch |
| 0x31E7 | 0x31E7 Elektrolüfter, Ansteuerungleitung: Kurzschluss nach Plus |
| 0x31E8 | 0x31E8 Elektrolüfter, Ansteuerungleitung: Kurzschluss nach Masse |
| 0x31E9 | 0x31E9 Elektrolüfter, Ansteuerungleitung: Leitungsunterbrechung |
| 0x31EA | 0x31EA Elektrolüfter, Eigendiagnose: Mechanischer- oder Hardwaredefekt |
| 0x3219 | 0x3219 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus |
| 0x321A | 0x321A DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse |
| 0x321B | 0x321B DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung |
| 0x321C | 0x321C Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1,0 mm |
| 0x321D | 0x321D Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm |
| 0x321E | 0x321E DMTL, Systemfehler: Pumpenstrom zu groß bei Referenzmessung |
| 0x321F | 0x321F DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung |
| 0x3220 | 0x3220 DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung |
| 0x3221 | 0x3221 DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert |
| 0x3222 | 0x3222 DMTL, Heizung, Ansteuerung: Kurzschluss nach Plus |
| 0x3223 | 0x3223 DMTL, Heizung, Ansteuerung: Kurzschluss nach Masse |
| 0x3224 | 0x3224 DMTL, Heizung, Ansteuerung: Leitungsunterbrechung |
| 0x3225 | 0x3225 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Plus |
| 0x3226 | 0x3226 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Masse |
| 0x3227 | 0x3227 DMTL-Leckdiagnosepumpe, Ansteuerung: Leitungsunterbrechung |
| 0x3228 | 0x3228 Tankentlüftungssystem, 2. Einleitestelle, Nachlauf: Fehlfunktion |
| 0x32AB | 0x32AB FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler |
| 0x32C8 | 0x32C8 Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch |
| 0x32C9 | 0x32C9 Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten |
| 0x32CC | 0x32CC Fahrzeuggeschwindigkeit, Plausibilität: Kombi hat Ungültigkeitssignal gesendet |
| 0x32CD | 0x32CD Fahrzeuggeschwindigkeit, Plausibilität: DSC-Signal unplausibel gegenüber Kombi-Anzeige |
| 0x32D0 | 0x32D0 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch |
| 0x32D3 | 0x32D3 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion |
| 0x32D4 | 0x32D4 Fahrzeuggeschwindigkeit: Sammelfehler |
| 0x32D5 | 0x32D5 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion |
| 0x32D6 | 0x32D6 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion |
| 0x32D7 | 0x32D7 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion |
| 0x32D8 | 0x32D8 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel |
| 0x32D9 | 0x32D9 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel |
| 0x32DA | 0x32DA Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel |
| 0x32DC | 0x32DC Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel |
| 0x32DD | 0x32DD Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel |
| 0x32DE | 0x32DE Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel |
| 0x32DF | 0x32DF Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel |
| 0x32E0 | 0x32E0 Fahrzeuggeschwindigkeit, Raddrehzahlsensoren/DSC: Fehlfunktion |
| 0x32E1 | 0x32E1 EWS Manipulationsschutz: kein Startwert programmiert |
| 0x32E2 | 0x32E2 EWS Manipulationsschutz: Antwort unplausibel |
| 0x32E3 | 0x32E3 Schnittstelle EWS-DME: Hardwarefehler |
| 0x32E4 | 0x32E4 Schnittstelle EWS-DME: Framefehler |
| 0x32E5 | 0x32E5 Schnittstelle EWS-DME: Zeitüberschreitung |
| 0x32E6 | 0x32E6 Schnittstelle EWS-DME: Empfangsfehler CAS Schnittstelle |
| 0x32E7 | 0x32E7 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit |
| 0x32E8 | 0x32E8 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage |
| 0x32E9 | 0x32E9 DME, interner Fehler, EWS-Daten: Prüfsummenfehler |
| 0x32EA | 0x32EA DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key |
| 0x32EB | 0x32EB EWS-Manipulationsschutz: Motorlauf durch EWS gesperrt |
| 0x32EC | 0x32EC FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt |
| 0x32F0 | 0x32F0 FlexRay, Botschaft (EWS Information FEM, 103.1.4): fehlt |
| 0x3325 | 0x3325 Bremslichtschalter, Plausibilität: Signal unplausibel |
| 0x332C | 0x332C Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse |
| 0x332D | 0x332D Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus |
| 0x332E | 0x332E Klemme 87_1: keine Spannung |
| 0x332F | 0x332F Klemme 87_2: keine Spannung |
| 0x3330 | 0x3330 Klemme 87_3: keine Spannung |
| 0x335B | 0x335B Bremsunterdrucksensor, Plausibilität: Druckdifferenz unplausibel |
| 0x335C | 0x335C Bremsunterdrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x335D | 0x335D Bremsunterdrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x3392 | 0x3392 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x3393 | 0x3393 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x3394 | 0x3394 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf |
| 0x3395 | 0x3395 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf |
| 0x3396 | 0x3396 Motorabstellzeit, Signal: fehlt |
| 0x3398 | 0x3398 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf |
| 0x3399 | 0x3399 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf |
| 0x339A | 0x339A Motorabstellzeit: Sammelfehler |
| 0x33DB | 0x33DB Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) |
| 0x33DC | 0x33DC Nullgangsensor, Plausibilität: Signal unplausibel |
| 0x33DD | 0x33DD Nullgangsensor, Signal: Tastverhältnis zu hoch |
| 0x33DE | 0x33DE Nullgangsensor, Signal: Tastverhältnis zu niedrig |
| 0x33DF | 0x33DF Nullgangsensor, elektrisch: Kurzschluss nach Plus |
| 0x33E0 | 0x33E0 Nullgangsensor, elektrisch: Kurzschluss nach Masse |
| 0x33E1 | 0x33E1 Nullgangsensor, Signal: Periodendauer außerhalb gültigem Bereich |
| 0x33FC | 0x33FC Motoröldruckregelung, Plausibilität: Druckschwankungen |
| 0x33FD | 0x33FD Motoröldruckregelung, Plausibilität, statisch: Druck zu hoch |
| 0x33FE | 0x33FE Motoröldruckregelung, Plausibilität, statisch: Druck zu niedrig |
| 0x33FF | 0x33FF Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus |
| 0x3400 | 0x3400 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse |
| 0x3401 | 0x3401 Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung |
| 0x3404 | 0x3404 Motoröldruckregelung: instabil |
| 0x3405 | 0x3405 Motorölpumpe: Druck zu hoch |
| 0x3406 | 0x3406 Motorölpumpe: Druck zu niedrig |
| 0x3408 | 0x3408 Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) |
| 0x3409 | 0x3409 Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) |
| 0x3426 | 0x3426 Motoröldrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x3427 | 0x3427 Motoröldrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x3429 | 0x3429 Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu hoch |
| 0x342A | 0x342A Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu niedrig |
| 0x342B | 0x342B Motoröldrucksensor, Signal: festliegend |
| 0x342D | 0x342D Motoröl-Druck-Temperatursensor, elektrisch: Fehlfunktion |
| 0x342E | 0x342E Motoröl-Druck-Temperatursensor: defekt |
| 0x342F | 0x342F Motoröl-Druck-Temperatursensor, Plausibilität: Signal unplausibel |
| 0x3430 | 0x3430 Motoröl-Druck-Temperatursensor, Plausibilität: Signal unplausibel |
| 0x3431 | 0x3431 Motoröl-Druck-Temperatursensor, Plausibilität: Druck unplausibel |
| 0x3432 | 0x3432 Motoröl-Druck-Temperatursensor, Arbeitsbereich: Druck unplausibel |
| 0x3433 | 0x3433 Motoröl-Druck-Temperatursensor, Plausibilität: Temperatur unplausibel |
| 0x3434 | 0x3434 Motoröl-Druck-Temperatursensor, Arbeitsbereich: Temperatur unplausibel |
| 0x343F | 0x343F Ölzustand, Status Niveau: Fehlfunktion |
| 0x3440 | 0x3440 Ölzustandssensor, Status Temperatur: Fehlfunktion |
| 0x3447 | 0x3447 Motorölniveau: zu niedrig |
| 0x3449 | 0x3449 Ölzustandssensor: Fehlfunktion |
| 0x344C | 0x344C Motoröltemperatursensor, elektrisch: Fehlfunktion |
| 0x344E | 0x344E Ölzustandssensor, Plausibilität: Signal unplausibel |
| 0x344F | 0x344F Ölzustandssensor, Plausibilität: Signal Fehlfunktion |
| 0x348A | 0x348A Kennfeldthermostat: klemmt offen |
| 0x348E | 0x348E Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus |
| 0x348F | 0x348F Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse |
| 0x3490 | 0x3490 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung |
| 0x34A2 | 0x34A2 Hinterachsgetriebe, Plausibilität: Übersetzung unplausibel |
| 0x34A3 | 0x34A3 Kupplungsschalter, Plausibilität: Signal unplausibel |
| 0x34A5 | 0x34A5 Kupplungsschalter: Positionen zueinander unplausibel |
| 0x34A6 | 0x34A6 Kommunikation: Signal (Drehzahl_Getriebestrang_Turbine) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig |
| 0x34A7 | 0x34A7 Kommunikation: Signal (Status_Gangwahl_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig |
| 0x34A8 | 0x34A8 Kupplungstemperatur: Warnschwellenwert 1 ohne Schädigung überschritten |
| 0x34A9 | 0x34A9 Kupplungstemperatur: Warnschwellenwert 2 ohne Schädigung überschritten |
| 0x34AD | 0x34AD Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung leicht geschädigt |
| 0x34AE | 0x34AE Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung geschädigt |
| 0x34AF | 0x34AF Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung stark geschädigt |
| 0x34B0 | 0x34B0 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit möglicher Schädigung Getriebölkühlerleitungen erkannt |
| 0x34B1 | 0x34B1 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit Schädigung Getriebeöl erkannt |
| 0x34B2 | 0x34B2 EGS: elektrischer Notlauf aktiv |
| 0x3520 | 0x3520 Leerlaufregelung: Drehzahl zu hoch |
| 0x3521 | 0x3521 Leerlaufregelung: Drehzahl zu niedrig |
| 0x3524 | 0x3524 Leerlaufregelung, Kaltstart: Drehzahl zu hoch |
| 0x3525 | 0x3525 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig |
| 0x3526 | 0x3526 Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel |
| 0x3528 | 0x3528 Antrieb, Sicherheitsfunktion: Leistungsreduzierung durch Sicherheitskonzept |
| 0x3529 | 0x3529 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch |
| 0x352A | 0x352A Manipulationsschutz: Motorleistung zu hoch |
| 0x3539 | 0x3539 Motoröl, Kaltstart: Ethanolgehalt Warnschwelle 1 überschritten |
| 0x353A | 0x353A Motoröl, Kaltstart: Ethanolgehalt Warnschwelle 2 überschritten |
| 0x3584 | 0x3584 DME, interner Fehler, Innentemperatursensor: Wert zu hoch |
| 0x3585 | 0x3585 DME, interner Fehler, Innentemperatursensor: Wert zu niedrig |
| 0x3586 | 0x3586 DME Temperatur: Übertemperatur |
| 0x36AE | 0x36AE DME, interner Fehler, Valvetronic: Strom unplausibel |
| 0x36AF | 0x36AF DME, interner Fehler, Valvetronic: Spannung außerhalb gültigem Bereich |
| 0x36B0 | 0x36B0 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion |
| 0x36B3 | 0x36B3 DME, interner Fehler, Überwachung SPI-Kommunikation: Fehlfunktion an Baustein TLE6232/1 |
| 0x36B4 | 0x36B4 DME, interner Fehler: Überwachung SPI-Kommunikation |
| 0x36B5 | 0x36B5 DME, interner Fehler: Löschen EEPROM fehlerhaft |
| 0x36B6 | 0x36B6 DME, interner Fehler: Lesen EEPROM fehlerhaft |
| 0x36B7 | 0x36B7 DME, interner Fehler: Schreiben EEPROM fehlerhaft |
| 0x36B8 | 0x36B8 DME, interner Fehler: Überwachungsmodulfehler |
| 0x36B9 | 0x36B9 DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt |
| 0x36BA | 0x36BA DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt |
| 0x36BB | 0x36BB DME, interner Fehler, Watchdog-Ausgang: Fehlfunktion |
| 0x36BC | 0x36BC DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation |
| 0x36BD | 0x36BD DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung |
| 0x36BE | 0x36BE DME, Kodierung: fehlt oder Fahrgestellnummer falsch |
| 0x36BF | 0x36BF DME, interner Fehler, MSA-Überwachung: fehlerhafte Berechnung |
| 0x36C0 | 0x36C0 Antrieb, Sicherheitsfunktion: AD-Wandler Leerlauftestimpulsprüfung |
| 0x36C1 | 0x36C1 Antrieb, Sicherheitsfunktion: AD-Wandler Testspannungsprüfung |
| 0x36C2 | 0x36C2 DME, interner Fehler, Sicherheitsfunktion: Luftmengenabgleich |
| 0x36C3 | 0x36C3 Antrieb, Sicherheitsfunktion: Fahrpedalmodul oder Pedalwertgeber unplausibel |
| 0x36C4 | 0x36C4 Antrieb, Sicherheitsfunktion: Drehzahlgeber unplausibel |
| 0x36C5 | 0x36C5 DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung der Gemischkorrekturfaktoren |
| 0x36C6 | 0x36C6 DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 1 |
| 0x36C7 | 0x36C7 Antrieb, Sicherheitsfunktion: Sicherheitsabschaltung Einspritzung |
| 0x36C8 | 0x36C8 DME, interner Fehler, Sicherheitsfunktion: Lambda-Sollwert |
| 0x36C9 | 0x36C9 DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung relative Kraftstoffmasse |
| 0x36CA | 0x36CA DME, interner Fehler, Sicherheitsfunktion: Momentenvergleich |
| 0x36CB | 0x36CB DME, interner Fehler, Sicherheitsfunktion: Antriebstrangübersetzungsverhältnis unplausibel |
| 0x36CC | 0x36CC Antrieb, Sicherheitsfunktion: Getriebevariante unplausibel |
| 0x36CD | 0x36CD DME, interner Fehler, Sicherheitsfunktion: Zündwinkelüberwachung |
| 0x36CE | 0x36CE Antrieb, Sicherheitsfunktion: Abschaltpfad-Test negativ |
| 0x36CF | 0x36CF DME, interner Fehler, Sicherheitsfunktion: Plausiblisierung Kraftstoffmasse |
| 0x36D0 | 0x36D0 DME, interner Fehler, Überwachung MSC-Kommunikation: Fehlfunktion an Baustein R2S2/1 |
| 0x36D1 | 0x36D1 DME, interner Fehler, Ansteuerung Mengensteuerventil: Fehlfunktion |
| 0x36D3 | 0x36D3 DME, interner Fehler, Überwachung SPI-Kommunikation: Fehlfunktion an Baustein TLE6232/2 |
| 0x36D4 | 0x36D4 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion |
| 0x36D5 | 0x36D5 DME, interner Fehler, Sicherheitsfunktion: Momentenanforderung unplausibel |
| 0x36D6 | 0x36D6 Elektrisches Wastegate, thermischer Überlastschutz: Notlauf aktiv |
| 0x36D7 | 0x36D7 Elektrisches Wastegate, thermischer Überlastschutz: Warnschwelle überschritten |
| 0x36D8 | 0x36D8 DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung Ethanolgehalt |
| 0x36D9 | 0x36D9 DME, interner Fehler, Sicherheitsfunktion: Momentenanforderung unplausibel |
| 0x36E2 | 0x36E2 Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich |
| 0x36E3 | 0x36E3 Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich |
| 0x36E4 | 0x36E4 Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich |
| 0x36E5 | 0x36E5 DME, interner Fehler: Software-Reset |
| 0x36E6 | 0x36E6 DME, interner Fehler: Software-Reset |
| 0x36E7 | 0x36E7 DME, interner Fehler: Software-Reset |
| 0x36FA | 0x36FA Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Plus |
| 0x36FB | 0x36FB Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Masse |
| 0x36FC | 0x36FC Startaggregat Ritzelstarter, Ansteuerung: Leitungsunterbrechung |
| 0x36FD | 0x36FD DME-Hauptrelais, Plausibilität: vorzeitig abgefallen |
| 0x36FE | 0x36FE DME-Hauptrelais, Ansteuerung: Kurzschluss nach Masse |
| 0x36FF | 0x36FF DME-Hauptrelais: nicht abgefallen |
| 0x3714 | 0x3714 Bordnetzspannung, DME-Hauptrelais, Arbeitsbereich: Spannung zu hoch |
| 0x3719 | 0x3719 Valvetronic, Versorgungsspannung: Kurzschluss nach Masse |
| 0x371A | 0x371A Valvetronic, Versorgungsspannung: Leitungsunterbrechung |
| 0x371B | 0x371B Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse |
| 0x371C | 0x371C Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus |
| 0x371E | 0x371E Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung |
| 0x375A | 0x375A CBS-Client: Ausgabe von Ersatzwert |
| 0x375C | 0x375C DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt |
| 0x375F | 0x375F DME, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt |
| 0x3760 | 0x3760 DME, falscher Datensatz: Variantenüberwachung |
| 0x3761 | 0x3761 Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt |
| 0x3778 | 0x3778 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur |
| 0x3779 | 0x3779 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung |
| 0x377A | 0x377A Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung |
| 0x377B | 0x377B Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt |
| 0x377C | 0x377C Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig |
| 0x377D | 0x377D Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten |
| 0x377E | 0x377E Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten |
| 0x378E | 0x378E Motor-Kühlsystem: verschmutzt oder Luft im Kühlsystem |
| 0x3791 | 0x3791 Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe |
| 0x3792 | 0x3792 Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz |
| 0x3794 | 0x3794 Motor-Kühlsystem: Bauteileschutz Temporäre Motorleistungsreduzierung |
| 0x3796 | 0x3796 Kupplungsschalter, Signal: fehlt |
| 0x3840 | 0x3840 Generator, elektrisch: Fehlfunktion |
| 0x3841 | 0x3841 Generator, elektrisch: Fehlfunktion |
| 0x3844 | 0x3844 Generator, Plausibilität, elektrisch: berechnet |
| 0x3846 | 0x3846 Generator: Typ falsch |
| 0x3847 | 0x3847 Generator, Kommunikation: Bus-Fehler |
| 0x3848 | 0x3848 Generator, Temperatur: Übertemperatur |
| 0x3849 | 0x3849 Generator, elektrisch: Fehlfunktion |
| 0x384A | 0x384A Generator, Plausibilität, elektrisch: berechnet |
| 0x384B | 0x384B Generator, Temperatur: Übertemperatur |
| 0x384D | 0x384D Generator, mechanisch: Fehlfunktion |
| 0x3850 | 0x3850 Generator, mechanisch: Fehlfunktion |
| 0x3858 | 0x3858 Generator: Typ falsch |
| 0x385B | 0x385B Generator/Startergenerator: Kodierung oder Programmstand falsch |
| 0x385D | 0x385D Generator, Kommunikation: Bus-Fehler |
| 0x385F | 0x385F Generator/Startergenerator: Kodierung fehlt |
| 0x3865 | 0x3865 BSD-Bus: Kommunikationsfehler |
| 0x3866 | 0x3866 BSD, Botschaft (Intelligenter Batteriesensor): fehlt |
| 0x3872 | 0x3872 Powermanagement, Batteriezustandserkennung: Batteriedefekt |
| 0x3873 | 0x3873 Powermanagement, Batteriezustandserkennung: Tiefentladung |
| 0x3875 | 0x3875 Powermanagement: zentrale Überspannung |
| 0x3876 | 0x3876 Powermanagement: zentrale Unterspannung |
| 0x3877 | 0x3877 Powermanagement, Überspannung: Überspannung erkannt |
| 0x3878 | 0x3878 Powermanagement, Unterspannung: Unterspannung erkannt |
| 0x3879 | 0x3879 Powermanagement: Batterieloser Betrieb |
| 0x387C | 0x387C Powermanagement: Batterie Tiefentladung |
| 0x387D | 0x387D Powermanagement: Transportüberwachung Ladezustand Batterie tiefentladen |
| 0x387E | 0x387E Powermanagement: Batterie Tiefentladung |
| 0x387F | 0x387F Powermanagement: Ruhestromverletzung |
| 0x3886 | 0x3886 Bordnetzspannung, Arbeitsbereich: Spannung zu hoch |
| 0x3887 | 0x3887 Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig |
| 0x3888 | 0x3888 Bordnetzspannung: Analog-Digital-Wandler defekt |
| 0x38A4 | 0x38A4 Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion |
| 0x38A7 | 0x38A7 Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel |
| 0x38A8 | 0x38A8 Intelligenter Batteriesensor, Eigendiagnose: Systemfehler |
| 0x38A9 | 0x38A9 Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel |
| 0x38AA | 0x38AA Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel |
| 0x38AB | 0x38AB Intelligenter Batteriesensor, Plausibilität: Strom unplausibel |
| 0x38AC | 0x38AC Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse |
| 0x38B2 | 0x38B2 Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung |
| 0x38B4 | 0x38B4 BSD, Kommunikation (Intelligenter Batteriesensor): fehlt |
| 0x38EF | 0x38EF Freigabeleitung, MSA, Ansteuerung: Kurzschluss nach Plus |
| 0x38F0 | 0x38F0 Freigabeleitung, MSA, Ansteuerung: Kurzschluss nach Masse |
| 0x38F1 | 0x38F1 Freigabeleitung, MSA, Ansteuerung: Leitungsunterbrechung |
| 0x38F2 | 0x38F2 MSA, Überwachung: Zeitüberschreitung |
| 0x38F3 | 0x38F3 MSA, Überwachung: Startverzögerung |
| 0x38F4 | 0x38F4 Startaggregat Ritzelstarter: Anzahl MSA-Reflexstarts überschritten |
| 0x38F5 | 0x38F5 Startaggregat Ritzelstarter: Anzahl Motorstarts überschritten |
| 0x3908 | 0x3908 Batterieladeeinheit: Interner Fehler |
| 0x3909 | 0x3909 Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion |
| 0x390A | 0x390A Batterieladeeinheit: Zusatzbatterie defekt |
| 0x390B | 0x390B Batterieladeeinheit: Fehler im Trennrelais oder Kabelbaum oder Zusatzbatterie tiefentladen |
| 0x390C | 0x390C Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Plus |
| 0x390D | 0x390D Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Masse |
| 0x390E | 0x390E Startspannungswandler/Startergenerator, Ansteuerung: Leitungsunterbrechung |
| 0x3939 | 0x3939 Verbrennungsmotor: Fehlstart oder Motor ausgegangen ohne Fahrereinfluss |
| 0x393A | 0x393A Motordrehmomentbegrenzung: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393B | 0x393B Motordrehzahlbegrenzung, Stufe 1: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393C | 0x393C Motordrehzahlbegrenzung, Stufe 2: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393D | 0x393D Motordrehzahlbegrenzung, Stufe 3: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393E | 0x393E Notlauf 1: Sammelfehler für DME Kopplung |
| 0x393F | 0x393F Notlauf 2: Sammelfehler für DME Kopplung |
| 0x3940 | 0x3940 Notlauf 3: Sammelfehler für DME Kopplung |
| 0x3941 | 0x3941 Notlauf 4: Sammelfehler für DME Kopplung |
| 0x3942 | 0x3942 Notlauf 5: Sammelfehler für DME Kopplung |
| 0x3944 | 0x3944 Montagemode: aktiv |
| 0x3B97 | 0x3B97 LIN Bus: Kommunikationsfehler |
| 0x3B98 | 0x3B98 LIN, Kommunikation (intelligenter Batteriesensor): fehlt |
| 0x3B99 | 0x3B99 LIN, Kommunikation (Motor-Kühlmittelpumpe): fehlt |
| 0x3B9A | 0x3B9A Kühlmittelpumpe, Kommunikation: ungültige Botschaft |
| 0x3B9D | 0x3B9D LIN, Kommunikation (Generator): fehlt |
| 0x3BC4 | 0x3BC4 PT-CAN, Botschaft (Status ARS-Modul, 0x1AC): Aliveprüfung |
| 0x3BC5 | 0x3BC5 PT-CAN, Botschaft (Status ARS-Modul, 0x1AC): fehlt |
| 0x3BC6 | 0x3BC6 PT-CAN, Botschaft (Status ARS-Modul, 0x1AC): Prüfsumme falsch |
| 0x3BC7 | 0x3BC7 PT-CAN, Botschaft (Klemmenstatus, 0x130): fehlt |
| 0x3BC8 | 0x3BC8 PT-CAN, Botschaft (Klemmenstatus, 0x130): Prüfsumme falsch/Aliveprüfung |
| 0x3BCC | 0x3BCC PT-CAN, Botschaft (Wärmestrom/Lastmoment Klima, 0x1B5): fehlt |
| 0x3BCD | 0x3BCD PT-CAN, Botschaft (Status Kombi, 0x1B4): Aliveprüfung |
| 0x3BCE | 0x3BCE PT-CAN, Botschaft (Status Kombi, 0x1B4): fehlt |
| 0x3BCF | 0x3BCF PT-CAN, Botschaft (Status Kombi, 0x1B4): MIL-Ansteuerung unplausibel |
| 0x3BD0 | 0x3BD0 PT-CAN, Botschaft (Anforderung Drehmoment DSC, 0x0B6): Prüfsumme falsch/Aliveprüfung |
| 0x3BD1 | 0x3BD1 PT-CAN, Botschaft (Anforderung Drehmoment DSC, 0x0B6): fehlt |
| 0x3BD2 | 0x3BD2 PT-CAN, Botschaft (Radgeschwindigkeit, 0xCE): fehlt |
| 0x3BD3 | 0x3BD3 PT-CAN, Botschaft (Getriebedaten 4, 0x10A): Prüfsumme falsch/Aliveprüfung |
| 0x3BD4 | 0x3BD4 PT-CAN, Botschaft (Getriebedaten 4, 0x10A): fehlt |
| 0x3BD5 | 0x3BD5 PT-CAN, Botschaft (Status DSC, 0x19E): fehlt |
| 0x3BD6 | 0x3BD6 PT-CAN, Botschaft (Geschwindigkeit, 0x1A0): Prüfsumme falsch/Aliveprüfung |
| 0x3BD7 | 0x3BD7 PT-CAN, Botschaft (Geschwindigkeit, 0x1A0): fehlt |
| 0x3BD8 | 0x3BD8 PT-CAN, Botschaft (Getriebedaten 2, 0x1A2): fehlt |
| 0x3BD9 | 0x3BD9 PT-CAN, Botschaft (Status DKG, 0x37D): fehlt |
| 0x3BDA | 0x3BDA PT-CAN, Botschaft (Getriebedaten 3, 0x3B1): Prüfsumme falsch/Aliveprüfung |
| 0x3BDB | 0x3BDB PT-CAN, Botschaft (Getriebedaten 3, 0x3B1): fehlt |
| 0x3BDC | 0x3BDC PT-CAN, Botschaft (Anforderung Drehmoment EGS, 0xB5): Prüfsumme falsch/Aliveprüfung |
| 0x3BDD | 0x3BDD PT-CAN, Botschaft (Anforderung Drehmoment EGS, 0xB5): fehlt |
| 0x3BDE | 0x3BDE PT-CAN, Botschaft (Anforderung Drehmoment DKG, 0xB8): Prüfsumme falsch/Aliveprüfung |
| 0x3BDF | 0x3BDF PT-CAN, Botschaft (Anforderung Drehmoment DKG, 0xB8): fehlt |
| 0x3BE0 | 0x3BE0 PT-CAN, Botschaft (Getriebedaten, 0xBA): Prüfsumme falsch/Aliveprüfung |
| 0x3BE1 | 0x3BE1 PT-CAN, Botschaft (Getriebedaten, 0xBA): fehlt |
| 0x3BE2 | 0x3BE2 PT-CAN, Botschaft (DKG Drehzahlregelung, 0xB8): Überwachungseingriff |
| 0x3BE7 | 0x3BE7 PT-CAN, Botschaft (Bedienung Taster MSA, 0x195): fehlt |
| 0x3BEC | 0x3BEC PT-CAN, Botschaft (Bedienung Tempomat, 0x194): Prüfsumme falsch/Aliveprüfung |
| 0x3BED | 0x3BED PT-CAN, Botschaft (Bedienung Tempomat, 0x194): fehlt |
| 0x3BF0 | 0x3BF0 PT-CAN, Botschaft (Status Fahrererkennung, 0x2F1): Prüfsumme falsch |
| 0x3BF1 | 0x3BF1 PT-CAN, Botschaft (Status Fahrererkennung, 0x2F1): fehlt |
| 0x3BF4 | 0x3BF4 PT-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt |
| 0x3C5A | 0x3C5A Kommunikation: Signal (Drehzahl_Getriebestrang_Turbine) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig |
| 0x3C5C | 0x3C5C Kommunikation: Signal (Status_Gangwahl_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig |
| 0xCD83 | 0xCD83 Energiesparmodus: aktiv |
| 0xCD85 | 0xCD85 PT-CAN, Botschaft (Klemmenstatus, 0x130): Prüfsumme falsch |
| 0xCD86 | 0xCD86 PT-CAN, Botschaft (Klemmenstatus, 0x130): fehlt |
| 0xCD87 | 0xCD87 PT-CAN Kommunikationsfehler: CAN-Bus Off oder CAN-Bus defekt |
| 0xCD89 | 0xCD89 PT-CAN, Botschaft (Status Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt |
| 0xCD8B | 0xCD8B PT-CAN, Botschaft (Stellanforderung EMF, 0x1A7): Prüfsumme falsch |
| 0xCD8C | 0xCD8C PT-CAN, Botschaft (Stellanforderung EMF, 0x1A7): fehlt |
| 0xCD8F | 0xCD8F PT-CAN, Botschaft (Anzeige Getriebedaten, 0x1D2): fehlt |
| 0xCD91 | 0xCD91 PT-CAN, Botschaft (Status EMF, 0x201): Prüfsumme falsch |
| 0xCD92 | 0xCD92 PT-CAN, Botschaft (Status EMF, 0x201): fehlt |
| 0xCD95 | 0xCD95 PT-CAN, Botschaft (Lampenzustand, 0x21A): fehlt |
| 0xCD98 | 0xCD98 PT-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt |
| 0xCD9B | 0xCD9B PT-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt |
| 0xCD9D | 0xCD9D PT-CAN, Botschaft (Fahrzeugmodus, 0x315): Prüfsumme falsch |
| 0xCD9E | 0xCD9E PT-CAN, Botschaft (Fahrzeugmodus, 0x315): fehlt |
| 0xCDA1 | 0xCDA1 PT-CAN, Botschaft (Powermanagement Ladespannung, 0x334): fehlt |
| 0xCDA2 | 0xCDA2 PT-CAN, Botschaft (Status Verdeck Cabrio, 0x27E): fehlt |
| 0xCDA4 | 0xCDA4 PT-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt |
| 0xCDA5 | 0xCDA5 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): AFS/STE disabled oder Lenkmoment ungültig |
| 0xCDA6 | 0xCDA6 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): Prüfsumme falsch |
| 0xCDA7 | 0xCDA7 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): fehlt |
| 0xCDA8 | 0xCDA8 PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): AFS/STE disabled oder Lenkmoment ungültig |
| 0xCDA9 | 0xCDA9 PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): Prüfsumme falsch |
| 0xCDAA | 0xCDAA PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): fehlt |
| 0xCDAB | 0xCDAB PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang, 0xBF): Aliveprüfung |
| 0xCDAC | 0xCDAC PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang, 0xBF): Prüfsumme falsch |
| 0xCDAD | 0xCDAD PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang, 0xBF): fehlt |
| 0xCDB0 | 0xCDB0 PT-CAN, Botschaft (Lenkradwinkel, 0xC4): fehlt |
| 0xCDB1 | 0xCDB1 PT-CAN Kommunikationsfehler: DPRAM CAN Baustein defekt |
| 0xCDB2 | 0xCDB2 PT-CAN, Botschaft (Sollmomentanforderung, 0xBB): fehlt |
| 0xCDB3 | 0xCDB3 PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): Verlustmoment zu gross |
| 0xCDB4 | 0xCDB4 PT-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi |
| 0xCDB6 | 0xCDB6 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): Verlustmoment zu gross |
| 0xCDB7 | 0xCDB7 PT-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt |
| 0xCDB8 | 0xCDB8 PT-CAN, Botschaft (Status Klemmenanforderung, 0x365): fehlt |
| 0xCDB9 | 0xCDB9 PT-CAN, Botschaft (Status Türsensoren abgesichert BN2000, 0x1E1): Prüfsumme falsch |
| 0xCDBA | 0xCDBA PT-CAN, Botschaft (Status Türsensoren abgesichert BN2000, 0x1E1): fehlt |
| 0xCDBB | 0xCDBB PT-CAN, Botschaft (Status Anforderung EMF, 0x1FD): Prüfsumme falsch/Aliveprüfung |
| 0xCDBC | 0xCDBC PT-CAN, Botschaft (Status Anforderung EMF, 0x1FD): fehlt |
| 0xCDBD | 0xCDBD PT-CAN, Botschaft (Bedienung Taster HDC, 0x31A): fehlt |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x2710 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x2711 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x2714 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x2774 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2775 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2778 | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x2779 | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x277A | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x278A | 0x580C | 0x5821 | 0x5815 | 0x5832 |
| 0x278C | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x278D | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x278E | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x278F | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x27D7 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27D8 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27D9 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DA | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DB | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DC | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DD | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DE | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27E4 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27E8 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x280E | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x280F | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x281A | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x281B | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x2820 | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x283C | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x283D | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x2841 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2842 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2848 | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284C | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284D | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284E | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284F | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x28A0 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x28A1 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x28A4 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28A5 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28A8 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28A9 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28AB | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x28AC | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x28B0 | 0x5813 | 0x584E | 0x584C | 0x5858 |
| 0x28B4 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x28B8 | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28B9 | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28BA | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28BB | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28BC | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28BD | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28C0 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28C1 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28C4 | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28CC | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28CD | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28D0 | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28D4 | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28D9 | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x2904 | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x2906 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2908 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x2936 | 0x580C | 0x5850 | 0x580F | 0x5817 |
| 0x2937 | 0x580C | 0x5850 | 0x580F | 0x5817 |
| 0x293A | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x293B | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x293E | 0x5817 | 0x5850 | 0x58EA | 0x580F |
| 0x2943 | 0x5817 | 0x5850 | 0x5836 | 0x5815 |
| 0x2947 | 0x5817 | 0x5850 | 0x58EA | 0x580F |
| 0x2948 | 0x5817 | 0x5850 | 0x58EA | 0x580F |
| 0x299A | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x299B | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x299C | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x299E | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x29A2 | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x29A3 | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x29DC | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x29DD | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x29E0 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E1 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E2 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E4 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E5 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E6 | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x29E7 | 0x580C | 0x5814 | 0x5817 | 0x580F |
| 0x29E8 | 0x580C | 0x5814 | 0x5817 | 0x580F |
| 0x29FE | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x29FF | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A00 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A01 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A02 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A03 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A04 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A05 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A06 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A07 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A08 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A09 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0A | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0B | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0C | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0D | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A30 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A31 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A32 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A33 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A40 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A41 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A42 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A43 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4C | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4D | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4E | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4F | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A5F | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A60 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A61 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A70 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A72 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A74 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A80 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A81 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A82 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A83 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A90 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A91 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A92 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A93 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A96 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A97 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2AC6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AC7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AC8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AC9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACE | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD0 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD1 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD2 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD3 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADE | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE0 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE1 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE2 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE3 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2BC0 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2BC1 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2BCA | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2BCB | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2BD9 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BDA | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BDE | 0x58EF | 0x583B | 0x5882 | 0x5815 |
| 0x2BE5 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BE6 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BE9 | 0x580C | 0x58EF | 0x583B | 0x5805 |
| 0x2BEA | 0x580C | 0x5855 | 0x5807 | 0x5804 |
| 0x2BEB | 0x580C | 0x5855 | 0x5807 | 0x5804 |
| 0x2BED | 0x580C | 0x58EF | 0x5837 | 0x5805 |
| 0x2BEE | 0x580C | 0x58EF | 0x5837 | 0x583B |
| 0x2BEF | 0x58EF | 0x580C | 0x5882 | 0x5823 |
| 0x2BF0 | 0x58EF | 0x580C | 0x5817 | 0x5823 |
| 0x2BF2 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BF4 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BF5 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BF8 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2C00 | 0x580C | 0x58EF | 0x5837 | 0x5805 |
| 0x2C01 | 0x580C | 0x58EF | 0x5837 | 0x583B |
| 0x2C20 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C21 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C22 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C23 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C24 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C25 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C26 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C27 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C28 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C3D | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x2C3E | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x2C3F | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x2C42 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2C56 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C57 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C58 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C6F | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C70 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C71 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2C72 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2C7F | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C82 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C83 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C84 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C85 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C86 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C88 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2C89 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2C8A | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2C90 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C91 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2CA1 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x2CA2 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x2CA3 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x2CA4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAE | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB3 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2CB4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CED | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2CEE | 0x5827 | 0x588C | 0x5860 | 0x5863 |
| 0x2CF1 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x2CF2 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x2CF3 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2CF4 | 0x580C | 0x5855 | 0x5807 | 0x5804 |
| 0x2CF5 | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2CF6 | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2CF8 | 0x588C | 0x5800 | 0x5845 | 0x5849 |
| 0x2CFA | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2CFF | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D00 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D03 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D04 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D05 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D06 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D0B | 0x588C | 0x5800 | 0x5845 | 0x5815 |
| 0x2D0C | 0x588C | 0x5800 | 0x5845 | 0x5815 |
| 0x2D0D | 0x588C | 0x5800 | 0x5845 | 0x5815 |
| 0x2D0F | 0x5800 | 0x5815 | 0x5849 | 0x585C |
| 0x2D10 | 0x5800 | 0x5815 | 0x5849 | 0x585C |
| 0x2D11 | 0x5800 | 0x5815 | 0x5849 | 0x585C |
| 0x2D13 | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2D15 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D1B | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2D1C | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2D1F | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D20 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D22 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D23 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D24 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D25 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D27 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D2F | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D33 | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2D34 | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2D41 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D42 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D43 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D44 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D45 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2D51 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D52 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D53 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D54 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D55 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D56 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D57 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D5A | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D5B | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D60 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D61 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D9B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D9C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D9D | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D9F | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DA0 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DA1 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DA2 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DAD | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2DAE | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2DAF | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2DB0 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2DB1 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2DB4 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DB5 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DB6 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DBA | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DBB | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DBC | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2DBD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2DBF | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC0 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC4 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC5 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC6 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCA | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCB | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCC | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCD | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCE | 0x580C | 0x587B | 0x5822 | 0x58A2 |
| 0x2DCF | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DD0 | 0x589E | 0x5877 | 0x58BB | 0x58A2 |
| 0x2DD6 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DD7 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DD8 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE1 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE2 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE3 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE4 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE5 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DE6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2DE7 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DE8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2DE9 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DEA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E0A | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0B | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0C | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0D | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2E0E | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0F | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2E10 | 0x580C | 0x587B | 0x5822 | 0x58A2 |
| 0x2E11 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2E4A | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E4B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E4C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E4D | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E7C | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E7D | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E7E | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E80 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E81 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E82 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E84 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2EE0 | 0x58EF | 0x5837 | 0x5817 | 0x5815 |
| 0x2EE1 | 0x58EF | 0x5837 | 0x5817 | 0x5815 |
| 0x2EE2 | 0x58EF | 0x5837 | 0x5817 | 0x5815 |
| 0x2EE4 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE5 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE6 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE7 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE8 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE9 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEA | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEB | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEC | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EED | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEF | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EF0 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EF7 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EFE | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x2EFF | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F00 | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F01 | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F02 | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F44 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2F76 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F77 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F78 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F79 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F7C | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F83 | 0x580C | 0x5813 | 0x580E | 0x58CA |
| 0x2F84 | 0x580C | 0x5813 | 0x580E | 0x58CA |
| 0x2F8A | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2F8B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2F94 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F95 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F96 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F97 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2FA8 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FA9 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FAA | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FAB | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB3 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB4 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB5 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB6 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FDA | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FDB | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FDD | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FDE | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300C | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300D | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300E | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300F | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3011 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3012 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x303E | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x303F | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3040 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3041 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3042 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3043 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3044 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3045 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3046 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3048 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3049 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x304C | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x304D | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3106 | 0x580C | 0x5805 | 0x58AD | 0x5818 |
| 0x3107 | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x3155 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3156 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3157 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x315A | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3160 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3161 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3162 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3163 | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3164 | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3166 | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3183 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3184 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3185 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3187 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3188 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3189 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318A | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318B | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318C | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318D | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318F | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3191 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x31E7 | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x31E8 | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x31E9 | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x31EA | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x3219 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x321A | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x321B | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x321C | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x321D | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x321E | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x321F | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x3220 | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x3221 | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x3222 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3223 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3224 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3225 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3226 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3227 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3228 | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x32AB | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32C8 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x32C9 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x32CC | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x32CD | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x32D0 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D3 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D4 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D5 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D6 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D7 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D8 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D9 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DA | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DC | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DD | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DE | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DF | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32E0 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32E1 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E2 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E3 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E4 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E5 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E6 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E7 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E8 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E9 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32EA | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32EB | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32EC | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32F0 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x3325 | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x332C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x332D | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x332E | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x332F | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3330 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x335B | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x335C | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x335D | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x3392 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3393 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3394 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3395 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3396 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3398 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3399 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x339A | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x33DB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x33DC | 0x5817 | 0x5850 | 0x5836 | 0x5815 |
| 0x33DD | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33DE | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33DF | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33E0 | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33E1 | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33FC | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x33FD | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x33FE | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x33FF | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x3400 | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x3401 | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x3404 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3405 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3406 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3408 | 0x580C | 0x5822 | 0x586F | 0x586A |
| 0x3409 | 0x580C | 0x5822 | 0x586F | 0x586A |
| 0x3426 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3427 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3429 | 0x580C | 0x5822 | 0x586F | 0x5801 |
| 0x342A | 0x580C | 0x5822 | 0x586F | 0x5801 |
| 0x342B | 0x580C | 0x5822 | 0x586F | 0x5801 |
| 0x342D | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x342E | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x342F | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3430 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3431 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3432 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3433 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3434 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x343F | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x3440 | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x3447 | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x3449 | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x344C | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x344E | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x344F | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x348A | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x348E | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x348F | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x3490 | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x34A2 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x34A3 | 0x58D4 | 0x5881 | 0x580D | 0x58B8 |
| 0x34A5 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x34A6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x34A7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x34A8 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34A9 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34AD | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34AE | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34AF | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34B0 | 0x582E | 0x5800 | 0x5805 | 0x5817 |
| 0x34B1 | 0x582E | 0x5800 | 0x5805 | 0x5817 |
| 0x34B2 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x3520 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3521 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3524 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3525 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3526 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3528 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x3529 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x352A | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x3539 | 0x580C | 0x5805 | 0x5817 | 0x5822 |
| 0x353A | 0x580C | 0x5805 | 0x5817 | 0x5822 |
| 0x3584 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x3585 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x3586 | 0x580C | 0x5805 | 0x580F | 0x5821 |
| 0x36AE | 0x58BB | 0x588B | 0x58CD | 0x58A2 |
| 0x36AF | 0x58BB | 0x588B | 0x58CD | 0x58A2 |
| 0x36B0 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x36B3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36B4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36B5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36B6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36B7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36B8 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36B9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36BA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36BB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36BC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36BD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36BE | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x36BF | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x36C0 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36C1 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36C2 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C3 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36C4 | 0x58B8 | 0x5814 | 0x58CF | 0x58D0 |
| 0x36C5 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C6 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C7 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C8 | 0x58B8 | 0x5816 | 0x5889 | 0x58D0 |
| 0x36C9 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36CA | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36CB | 0x58B8 | 0x5881 | 0x580D | 0x58D0 |
| 0x36CC | 0x58B8 | 0x5814 | 0x58CF | 0x58D0 |
| 0x36CD | 0x58B8 | 0x58BC | 0x58BA | 0x580E |
| 0x36CE | 0x58B8 | 0x5858 | 0x583F | 0x5815 |
| 0x36CF | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36D0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36D1 | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x36D3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36D4 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x36D6 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x36D7 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x36D8 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36D9 | 0x58B8 | 0x5814 | 0x58CF | 0x58D0 |
| 0x36E2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36E3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36E4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36E5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36E6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36E7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FD | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x36FE | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x36FF | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x3714 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x3719 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x371A | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x371B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x371C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x371E | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x375A | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x375C | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x375F | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x3760 | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x3761 | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x3778 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x3779 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377A | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377B | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377C | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377D | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377E | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x378E | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3791 | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3792 | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3794 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3796 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x3840 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3841 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3844 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3846 | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x3847 | 0x5835 | 0x5800 | 0x584A | 0x58AC |
| 0x3848 | 0x5884 | 0x5844 | 0x584A | 0x5815 |
| 0x3849 | 0x5857 | 0x5898 | 0x584A | 0x58AC |
| 0x384A | 0x5857 | 0x5898 | 0x584A | 0x58AC |
| 0x384B | 0x5884 | 0x5844 | 0x584A | 0x58AC |
| 0x384D | 0x5857 | 0x5898 | 0x584A | 0x58AC |
| 0x3850 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3858 | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x385B | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x385D | 0x5835 | 0x5800 | 0x584A | 0x5815 |
| 0x385F | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x3865 | 0x580C | 0x5852 | 0x5854 | 0x5817 |
| 0x3866 | 0x580C | 0x5852 | 0x5854 | 0x5817 |
| 0x3872 | 0x5868 | 0x5869 | 0x5823 | 0x586A |
| 0x3873 | 0x5868 | 0x5869 | 0x5823 | 0x586A |
| 0x3875 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3876 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3877 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3878 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3879 | 0x580C | 0x586A | 0x5898 | 0x584F |
| 0x387C | 0x580C | 0x586A | 0x5823 | 0x5869 |
| 0x387D | 0x589F | 0x5868 | 0x5869 | 0x5898 |
| 0x387E | 0x580C | 0x586A | 0x58A7 | 0x5869 |
| 0x387F | 0x586B | 0x586C | 0x586E | 0x5823 |
| 0x3886 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x3887 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x3888 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x38A4 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38A7 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38A8 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38A9 | 0x580C | 0x5852 | 0x5854 | 0x5817 |
| 0x38AA | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38AB | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38AC | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38B2 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38B4 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38EF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x38F0 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x38F1 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x38F2 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x38F3 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x38F4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x38F5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3908 | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x3909 | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x390A | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x390B | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x390C | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x390D | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x390E | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x393A | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393B | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393C | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393D | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393E | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x393F | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3940 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3941 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3942 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3944 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3B97 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3B98 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x3B99 | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3B9A | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3B9D | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCE | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCF | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD9 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDA | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDE | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDF | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BEC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BED | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BF0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BF1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BF4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3C5A | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3C5C | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD83 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0xCD85 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD86 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD87 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD89 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD8B | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD8C | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD8F | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD91 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD92 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD95 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD98 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD9B | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD9D | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD9E | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA9 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAA | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB9 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBA | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4205 | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4206 | [0] Massenstrom ueber Drosselklappe | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4300 | Motor-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4306 | Quittung Solldrehzahl von EWP | rpm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | empf. Status von EWP | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4308 | EWAPU Volumenstrom soll (gesamt) | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4310 | Solltemperatur Kuehlmittel | °C | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4402 | Oeltemperatur nach Filter | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x4403 | Kraftstoffverbrauch seit letztem Oelwechsel | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | Oelkilometer | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Sensorrohwert Oelniveau | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Sensorrohwert Oeltemperatur | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4408 | Oeltemperatur ungefiltert | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Oelniveau ungefiltert in [mm] | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440B | CodingDataSet-OeL-Laenderfaktor1- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | CodingDataSet-OeL-Laenderfaktor2- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Laenderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Laenderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzzeit-Oelniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | - | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Oellaufzeit | month | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Oelzustandssensor | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4420 | Eingangstemperatur Oeldruckregler | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4421 | Oeldruckregler P-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4422 | Oeldruckregler I-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4423 | Oeldruckregler D-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4424 | Motoroelniveausensor Fehler | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4425 | Oz_tempsmpf | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4426 | Ist- Betriebsart Oeldruck Regelung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4427 | Rueckmeldung auf Anfrage zur Oelniveaumessung bitcodiert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4428 | Freigabe Funktion Oeldruck-Regler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4429 | B_onqntmssg_anf | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x442A | Motoroeltemperatur (Oz_temp) gueltig | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442B | B_on_antriebsart_cod | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442C | Rohwert Oelniveau | mm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442D | Korrigiertes Niveau aus TP in MinErk | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442E | Niv- Mittelwert QntMssg | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442F | ABK Schnittstelle Oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4430 | LSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4431 | MSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4432 | Status des ÖNS- Komponententreibes | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4433 | Status des ÖNS- Sensors | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4434 | Bedingung Niveaumessfehler vom Oelzustandssensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4436 | Oeldruck Istwert (Absolutdruck) | hPa | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4500 | Bedingung drehende Kurbelwelle erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4501 | Offset Hubadaption | - | - | signed integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4505 | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4506 | Nockenwellenposition Einlass | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4507 | Nockenwellenposition Auslass | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4508 | Bedingung fuel-off Adaption im eingeschwungenen Bereich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4509 | Bedingung fuel-off Adaption für Katheizen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450C | Adaption Kurbel/Einlassnockenwelle erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450D | Adaption Kurbel/Auslassnockenwelle erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450E | [0] Nullpunktverschiebg in Grad KW für die Winkelversatzdiagn., bedingt d. Toleranzen der Einbaulage | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4510 | Bedingung VVT-Lagereglerueberwachung hat bleibende Regelabweichung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4511 | Bedingung VVT-Lageregler schwingt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4512 | Bedingung: VVT Motor Ueberlast Warnschwelle | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4513 | Bedingung VVT-Ueberlastung (klemmender Steller) | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4514 | Bedingung VVT-Adaption moeglich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4515 | Anforderung VVT-Anschlaglernen (intern) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4516 | Status VVT-Anschlaglernen (intern) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4517 | [0] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 0 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4518 | [1] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4519 | [2] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 2 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451A | [3] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 3 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451B | [4] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 4 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451C | [5] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 5 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451D | Gesamtzeit VVT-Performancetest | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x451E | Stromsumme VVT-Performancetest | A | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4520 | Effektive Motorleistung | - | - | unsigned integer | - | 0,0152587890625 | 1 | 0,0 |
| 0x4521 | Kraftstoffmassenstrom | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4522 | [0] Kraftstoff Einspritzzeit oder -menge Zylinder 1 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4523 | [3] Kraftstoff Einspritzzeit oder -menge Zylinder 3 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4524 | [6] Kraftstoff Einspritzzeit oder -menge Zylinder 4 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4525 | [9] Kraftstoff Einspritzzeit oder -menge Zylinder 2 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x452A | Sollwert Auslassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452B | Sollwert Einlassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452C | Istwert Auslassspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452E | Istwert Einlassspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4530 | [0] Einspritzmodi Zylinderindividuell Zylinder 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4531 | [1] Einspritzmodi Zylinderindividuell Zylinder 3 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4532 | [2] Einspritzmodi Zylinderindividuell Zylinder 4 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4533 | [3] Einspritzmodi Zylinderindividuell Zylinder 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4536 | [0] Regeldifferenz Ladedruck - bankspezifisch Bank1 | hPa | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4538 | [0] Mittlerer Versatz der aequidistanten Flanken der Nockenwelle | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4539 | [1] Mittlerer Versatz der aequidistanten Flanken der Nockenwelle | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4600 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x4601 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4602 | Einlassventilhub (aus Exzenterwinkel gerechnet, mit Hub-Adaption und mit Hubpraediktion) | mm | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4603 | Sollwert Einlassventilhub gefiltert | mm | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4604 | Generatorstrom | A | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4605 | Chipversion Generator | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x460A | momentane Batteriespannung | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460C | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | - | unsigned integer | - | 0,02348100021481514 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460E | Abstand zur Startfaehigkeit | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460F | DF-Monitor für Batterie-Ladezustand in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4613 | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4616 | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominalspannung Regler Generator 1 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x461B | Abschaltschwelle Loadresponse | 1/min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4650 | Getriebetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4651 | Tastverhältnis Wastegateanstuerung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4653 | Sensorspannung Positionssensor elektrisches Wastegate | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x4654 | Rohwert Positionssensor elektrisches Wastegate | mm | - | signed integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4680 | Leerlaufdrehzahl gelernt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4681 | Getriebe ist bereit die Neutralposition anzulernen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4700 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x4704 | Lambdasoll Begrenzung (word) | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x4800 | Bedingung Kupplungspedal betaetigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Schalter Kupplung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Bedingung umschalten auf KFPEDS | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Bedingung für Kompressoreinschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Schalter Klemme 50 von CAN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4807 | Motordrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4808 | Leerlaufsolldrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4809 | Bedingung Leerlaufregelung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x480C | Soll Relative Luftfuellung des Momentenmanagers | % | - | unsigned integer | - | 0,0234375 | 1 | 0,0 |
| 0x480D | Fahrbahnlaengsneigung (geschätzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x480E | Qualifier Fahrbahnlaengsneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x480F | Qualifier Fahrbahnquerneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4810 | Fahrbahnquerneigung (geschaetzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x4811 | Fahrzeuglaengsbeschleunigung | m/s^2 | - | signed char | - | 0,21699999272823334 | 1 | 0,0 |
| 0x4812 | Fahrzeugquerbeschleunigung | m/s^2 | - | signed integer | - | 0,0015625000232830644 | 1 | 0,0 |
| 0x4880 | Max. Quotient Zuendwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4881 | Max. Quotient Zuendwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4882 | Zaehler Startabbrueche oder Ausgeher nach Schluesselstart, Lambda-Regler nicht aktiv | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4883 | Zaehler Startabbrueche oder Ausgeher gesamt | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4890 | Status Manipulation | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4891 | Deaktivierung des OBD Radars durch Erreichen der Grenzänderungshäufigkeit der NVRam-Variablen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x580B | Saugrohr-Absolutdruck (Word) | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,25 | 1 | 0,0 |
| 0x580E | Zündwinkel Zylinder 1 | Grad KW | - | signed char | - | 0,75 | 1 | 0,0 |
| 0x580F | Ansaugluft-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5812 | Massenstrom HFM 16-Bit Größe | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5813 | relative Luftfüllung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x5814 | Normierter Fahrpedalwinkel | %PED | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x5816 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5818 | Luftmassenfluß | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5819 | Motordrehzahl [1/min] | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x581A | Winkel Einlassventil oeffnet bezogen auf LWOT | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581B | Sollwinkel Nockenwelle Einlass oeffnet | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581C | Winkel Auslassventil schließt bezogen auf LWOT | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581D | Sollwinkel Nockenwelle Auslass schließt | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581E | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5820 | Status Klemme 15 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5821 | Steuergeraetetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5822 | Oeltemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -60,0 |
| 0x5823 | Abstellzeit | s | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5825 | Spannung BCU LIN | V | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5827 | Tastverhaeltnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582B | Drehmomentaufnahme des Wandlers ueber CAN | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x582C | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x582D | Korrekturwert der LSU-Spannung vor Kat | V | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x582E | Temperatur Getriebeoeltemperaturmodell | Grad C | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582F | Abgastemperatur nach Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5832 | Zustand Motor-Koordinator | 0-n | - | 0xFF | CoEng_st_COMPU_VERB | 1 | 1 | 0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100,0 | 1 | 0,0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x583A | Ansaugluft-Temperatur bei Start | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x583B | Fuellstand Kraftstofftank | L | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x583D | Betriebsstundenzaehler | min | - | unsigned integer | - | 6,0 | 1 | 0,0 |
| 0x583E | Dauer-RAM: Sollwert DK-Winkel in NLP-Stellung, bez. auf UMA | %DK | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5840 | DK-Winkel der Notluftposition | %DK | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x5841 | Wert Temperatur Steuergerät | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Bedingung Startanforderung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x584A | Aktueller Status Generator | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584D | Massenstrom Tankentlueftung in das Saugrohr | kg/h | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilitaet | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Signalspannung des Kuehlmitteltemperatursensors | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5852 | Batteriestrom von IBS | A | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| 0x5853 | Batt Spannung von IBS | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5854 | BattTemp von IBS | deg C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5859 | Pumpenstrom Referenzleck | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585A | min. Pumpenstrom bei Grobleckmessung | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585B | Pumpenstrom am Ende der Feinstleckmessung | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585C | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 512,0 | 1 | 0,0 |
| 0x585E | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x5860 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5862 | Sollwert Oeldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5863 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 0,0390625 | 1 | 0,0 |
| 0x5865 | Langzeit-Oelniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Relativer Fuellstand des Motoroels | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information ueber CAN | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586E | Zeit, indem der Ruhestrom groeßer als 1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Oeldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5871 | Zaehler Pruefzustand für VVT Endstufenpruefung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5875 | Indiziertes Soll-Motormoment MSR | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert PID$23 | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5877 | Rotorposition VVT-Motor | ° | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x587B | Soll-Bestromung VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x587F | Tastverhaeltnis E-Luefter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Tastverhaeltnis GLF System | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5883 | [0] Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5884 | Begrenzter Erregerstrom Generator1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | [1] Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| 0x5888 | [2] Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x588B | Zeit nach Startende | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x588C | Keramiktemperatur der LSU | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x588D | aktuelle Zeit Leckmessung | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x588E | Pumpenstrom Tankdiagnose | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5894 | [3] Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589A | Tastverhaeltnis Nullgangsensor | % | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x589B | Bedingung unzulaessig hoher Motorstrom bei Kurzschluss erkannt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589E | Sollwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x589F | Batterietemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58A0 | Entladung waehrend Ruhestromverletzung | Ah | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| 0x58A1 | Umweltbedingung Kilometerstand für Fehlerspeichereintrag | Km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A6 | Relativer Exzenterwinkel | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzaehler bis Motorstart | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A8 | rel. Exzenterwinkel am unteren mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58AC | Klemmenspannung E-Maschine | V | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58AD | Sauerstoffspeichervermögen des Katalysators, temperatur- und luftmassenstrombezogen | mg | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | Zaehler für Lerndauer eines Lernsteps | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B7 | aktueller Bremsdruck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Motordrehzahl in der Funktionsueberwachung | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsueberwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Kraftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x58BC | relative Luftfuellung in der Funktionsueberwachung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x58BD | Status Fehler Ueberlast VVT1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BE | DV-E-Adaption: Status Pruefbedingungen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C0 | VVT-Endstufentemperatur aus Modell | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x58C8 | geforderte Drehmomentaenderung von der LLR (I-Anteil) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58C9 | Ansteuerungsmodus für den VVT Motor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CA | geforderte MD-Aenderung von der LLR (PD-Zuendungsanteil) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58CB | Aufsummierte thermische Belastung VVT | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CC | Tastverhältnis zur Ansteuerung des VVT-Stellmotors | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58CD | Spannung hinter VVT/Motor-Relais | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CF | Momentenanforderung vom Getriebe in der Funktionsueberwachung | Nm | - | signed integer | - | 0,0625 | 1 | 0,0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsueberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58D2 | Status Luftklappensystem High Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D3 | Status Luftklappensystem Low Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D4 | Startbedingung Kraftschluss erfuellt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert (wdkdlr_w - wdkba_w) | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x58D9 | Schrittzaehler DK-Rückstellfeder-Pruefung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | koordiniertes Moment für Fuellung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58DB | Fehlerzaehler Summe, zaehlt abgasrelevante Aussetzer ueber alle Zylinder | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DC | Intervallzaehler für abgasrelevante Aussetzer | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich DK-Modell (Offset) HIGH Byte | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich EV-Modell (Offset) HIGH Byte | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58E5 | [0] Gefilterte Funkenbrenndauer Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E6 | [1] Gefilterte Funkenbrenndauer Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E7 | [2] Gefilterte Funkenbrenndauer Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E8 | [3] Gefilterte Funkenbrenndauer Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E9 | Versorgungsspannung elektr. | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Istdrehzahl elektr. Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Elektroniktemperatur elektr. | Grad C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Stromaufnahme elektr. | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F2 | PWM signal for the VCV | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| 0x58F7 | Statusbyte Strommessung plausibel | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58F9 | Maschinen-Typ | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FA | gefilterter Faktor Tankentlueftungs-Adaption | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5900 | Gefiltertes zusaetzlicher Sondendelay Mager-Fett, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5901 | Gefiltertes zusaetzlicher Sondendelay Fett-Mager, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5904 | [1] IBS Status-/Fehlerbyte 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5905 | [2] IBS Status-/Fehlerbyte 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x591F | Abgleich Drosselklappenmodell (Offset) LOW Byte | - | - | signed char | - | 0,25 | 1 | 0,0 |
| 0x5920 | Abgleich Einlassventilmodell (Offset)  LOW Byte | - | - | signed char | - | 0,25 | 1 | 0,0 |
| 0x5927 | Ist Position Elektrisches Wastegate | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x592A | Motordrehzahl, hochaufgelöst | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x592B | Pulsbreite DGI-Sensor min | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592C | Pulsbreite DGI-Sensor max | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592D | KW-Winkelversatz im Motorstart | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592E | Motorabstellposition | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592F | Status Synchronisationsmodul | 0-n | - | 0xFF | Epm_stSync_State_t | 1 | 1 | 0 |
| 0x5938 | Ethanolgehalt - Rohwert vom Sensor | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5939 | Ethanolgehalt am Einspritzventil | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x593A | Gesamte Masse Benzin und Alkohol im Öl | g | - | unsigned integer | - | 0,02133333310484886 | 1 | 0,0 |
| 0x5945 | Anzahl der VVT Notlaeufe bis zum Tausch | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5946 | Anzahl der VVT Notlaeufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5948 | Korrekturfaktor Kraftstoffmischung für Einspritzzeit | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5953 | Zaehler fuer Intervalle mit kritischen ZMS-Stoerungen lesen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5954 | Zaehler für Intervalle mit kritischen ZMS-Stoerungen ueber Lebenszeit lesen | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5A02 | ATL-Leckagediagnose laeuft | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A04 | Spannung PWG-Poti 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A05 | Spannung PWG-Poti 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A06 | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5A07 | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5A08 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A09 | Signalspannung des Kuehlmitteltemperatursensor | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0B | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0E | Wert Temperatur Steuergeraet | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x5A17 | Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A1B | Elektrische Kraftstoffpumpe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A1D | Spannung Bremsenunterdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A1E | Differenz zwischen Umgebungsdruck und Bremskraftverstaerkerdruck von Drucksensor (Rohwert) | hPa | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| 0x5A20 | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A21 | Kuehlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5A23 | Sollwert Oeldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A24 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A25 | Oeldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A29 | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x5A2B | physikalischer Temperaturwert, ergibt sich bei Wandlung der tiefpassgefilterten Sensorspg. wtfa1f_w | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5A2D | Saugrohr-Absolutdruck gemessen | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x5A2E | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A2F | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5A30 | [0] Laufunruhe Zylinder 1 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A32 | [2] Laufunruhe Zylinder 4 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A34 | [1] Laufunruhe Zylinder 3 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A35 | [3] Laufunruhe Zylinder 2 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A36 | Bedingung für erkannte Klopfer | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A37 | [0] normierter Referenzpegel Klopfregelung Zylinder 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A39 | [2] normierter Referenzpegel Klopfregelung Zylinder 4 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A3B | [1] normierter Referenzpegel Klopfregelung Zylinder 3 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A3C | [3] normierter Referenzpegel Klopfregelung Zylinder 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A49 | [0] Zuendwinkel Zylinder 1 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A4A | [1] Zuendwinkel Zylinder 3 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A4C | [2] Zuendwinkel Zylinder 4 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A4D | [3] Zuendwinkel Zylinder 2 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A52 | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A54 | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A56 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A58 | Tastverhaeltnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A59 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5A60 | Bedingung Bremslichtschalter betaetigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A61 | Bedingung Bremstestschalter betaetigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A65 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A66 | Bedingung DMTL-Pumpenmotor an | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A67 | Bedingung DMTL-Magnetventil an | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A68 | Bedingung Heizung DMTL Portansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A69 | MIL-Ansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6B | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6C | Korrekturfaktor für die Kraftstoffmenge | % | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5A74 | Tastverhaeltnis Kennfeldthermostat | - | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A77 | ausgegebenes Tastverhaeltnis für Tankentlueftungsventil (16 Bit) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A78 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A7A | Tastverhaeltnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7B | Tastverhaeltnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A81 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5A85 | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5A91 | Amplitudenverhaeltnis laafh/laafv gefiltert | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x5A93 | Fehlerzaehler für Lernen Nullgang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A94 | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x5A95 | [0] Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x5A96 | [0] Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x5A97 | Bedi. Vanos Einlass im Anschlag | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A99 | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A9D | multiplikative Gemischkorrektur der Gemischadaption | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5AA1 | Zyklusflag: Tankentlueftungsventil Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AA2 | Funktionsstatus-Zaehler DM-TL fuer Testerausgabe aus letztem Fahrzyklus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AA4 | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AA9 | Tastverhaeltnis GLF System | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AAA | Tastverhaeltnis PWM Ansteuerung Oeldruck | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAB | Tastverhaeltnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AB0 | Ladedruck- Sollwert | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5AB1 | Fahrzeuggeschwindigkeit | km/h | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| 0x5AB3 | Zaehler fuer gefahrene Kilometer mit MIL EIN | km | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5AB4 | sekundengenauer Betriebsstundenzaehler als 32 Bitwert | s | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5AB6 | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5AB7 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5AB8 | Spannung Drucksensor Saugrohrdruck (word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABC | Luftmassenfluss gefiltert (Word) | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5ABD | Bedingung automatischer Start | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AC2 | Reset Information  | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AC4 | Raildruck Kraftstoffsystem Sollwert | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5AD5 | Kraftstofftemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5AD6 | Bedingung Schubabschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AE2 | Reset Information - Reset-group-ID of the last reset reason | 0-n | - | 0xFF | Reset_GrpID | 1 | 1 | 0 |
| 0x5AE3 | Reset Information - Reset-ID of the last reset | 0-n | - | 0xFFFF | Reset_ID | 1 | 1 | 0 |
| 0x5AE4 | Reset Information - User defined value of the last reset reason | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AEB | Kuehlmitteltemperatur < 98°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEC | 98°C =< Kuehlmitteltemperatur =< 112°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AED | 113°C =< Kuehlmitteltemperatur =< 120°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEE | 121°C =< Kuehlmitteltemperatur =< 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEF | Kuehlmitteltemperatur > 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF0 | Motoroeltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF1 | 80°C =< Motoroeltemperatur =< 110°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF2 | 110°C =< Motoroeltemperatur =< 135°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF3 | 135°C =< Motoroeltemperatur =< 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF4 | Motoroeltemperatur > 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF5 | Getriebeoeltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF6 | 80°C =< Getriebeoeltemperatur =< 109°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF7 | 110°C =< Getriebeoeltemperatur =< 124°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF8 | 125°C =< Getriebeoeltemperatur =< 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF9 | Getriebeoeltemperatur > 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFA | Umgebungstemperatur < 3°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFB | 3°C =< Umgebungstemperatur =< 19°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFC | 20°C =< Umgebungstemperatur =< 29°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFD | 30°C =< Umgebungstemperatur =< 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFE | Umgebungstemperatur > 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5B10 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B11 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B12 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B13 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B14 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B15 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B20 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B21 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B22 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B23 | [0] Aussetzerzaehler im Abgasintervall Zyl. 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B25 | [2] Aussetzerzaehler im Abgasintervall Zyl. 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B31 | [1] Aussetzerzaehler im Abgasintervall Zyl. 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B32 | [3] Aussetzerzaehler im Abgasintervall Zyl. 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0xFFFF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x2710 | 0x2710 Drosselklappe, Funktion: klemmt dauerhaft |
| 0x2711 | 0x2711 Drosselklappe, Funktion: klemmt kurzzeitig |
| 0x2714 | 0x2714 Drosselklappe, Funktion: schwergängig, zu langsam |
| 0x2774 | 0x2774 Luftmasse, Plausibilität: Luftmasse zu hoch |
| 0x2775 | 0x2775 Luftmasse, Plausibilität: Luftmasse zu niedrig |
| 0x2778 | 0x2778 Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig, Luftmasse zu hoch |
| 0x2779 | 0x2779 Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß, Luftmasse zu niedrig |
| 0x277A | 0x277A Luftmassenmesser, Signal: elektrischer Fehler |
| 0x278A | 0x278A DME, interner Fehler, Luftmassenmesser: Leitungsunterbrechung Standby-Schalter |
| 0x278C | 0x278C Luftmassenmesser, Arbeitsbereich: Luftmasse zu hoch |
| 0x278D | 0x278D Luftmassenmesser, Arbeitsbereich: Luftmasse zu niedrig |
| 0x278E | 0x278E Luftmassenmesser, Arbeitsbereich: Periodendauer zu groß |
| 0x278F | 0x278F Luftmassenmesser, Arbeitsbereich: Periodendauer zu niedrig |
| 0x27D7 | 0x27D7 Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu niedrig |
| 0x27D8 | 0x27D8 Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu hoch |
| 0x27D9 | 0x27D9 Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Plus |
| 0x27DA | 0x27DA Fahrpedalmodul, Pedalwertgeber 1, elektrisch: Kurzschluss nach Masse |
| 0x27DB | 0x27DB Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Plus |
| 0x27DC | 0x27DC Fahrpedalmodul, Pedalwertgeber 2, elektrisch: Kurzschluss nach Masse |
| 0x27DD | 0x27DD Fahrpedalmodul, Pedalwertgeber 1, Arbeitsbereich: Spannung zu niedrig |
| 0x27DE | 0x27DE Fahrpedalmodul, Pedalwertgeber 2, Arbeitsbereich: Spannung zu hoch |
| 0x27E4 | 0x27E4 Fahrpedalmodul, Pedalwertgeber: Sammelfehler |
| 0x27E8 | 0x27E8 Fahrpedalmodul, Pedalwertgeber, Plausibilität: Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 |
| 0x280E | 0x280E Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu hoch |
| 0x280F | 0x280F Absolutdrucksensor, Saugrohr, Plausibilität, Nachlauf: Druck zu niedrig |
| 0x281A | 0x281A Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Plus |
| 0x281B | 0x281B Absolutdrucksensor, Saugrohr, elektrisch: Kurzschluss nach Masse |
| 0x2820 | 0x2820 Absolutdrucksensor, Saugrohr: Sammelfehler |
| 0x283C | 0x283C DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Plus] |
| 0x283D | 0x283D DME: interner Fehler [Umgebungsdrucksensor: Kurzschluss nach Masse] |
| 0x2841 | 0x2841 DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu hoch im Nachlauf] |
| 0x2842 | 0x2842 DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck zu niedrig im Nachlauf] |
| 0x2848 | 0x2848 DME: interner Fehler [Umgebungsdrucksensor: Sammelfehler] |
| 0x284C | 0x284C DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu hoch] |
| 0x284D | 0x284D DME: interner Fehler [Umgebungsdrucksensor, Arbeitsbereich: Druck zu niedrig] |
| 0x284E | 0x284E DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] |
| 0x284F | 0x284F DME: interner Fehler [Umgebungsdrucksensor, Plausibilität: Druck unplausibel] |
| 0x28A0 | 0x28A0 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu hoch |
| 0x28A1 | 0x28A1 Drosselklappenwinkel - Absolutdruck Saugrohr, Vergleich: Druck zu niedrig |
| 0x28A4 | 0x28A4 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Plus |
| 0x28A5 | 0x28A5 Drosselklappe, Drosselklappenpotenziometer 1, elektrisch: Kurzschluss nach Masse |
| 0x28A8 | 0x28A8 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Plus |
| 0x28A9 | 0x28A9 Drosselklappe, Drosselklappenpotenziometer 2, elektrisch: Kurzschluss nach Masse |
| 0x28AB | 0x28AB Drosselklappe, Drosselklappenpotenziometer 1 und 2: Doppelfehler |
| 0x28AC | 0x28AC Drosselklappe, Drosselklappenpotenziometer 1 und 2: Sammelfehler |
| 0x28B0 | 0x28B0 Drosselklappe: Notlauf aktiv |
| 0x28B4 | 0x28B4 Drosselklappe, Drosselklappenpotenziometer, Plausibilität: Gleichlauffehler zwischen Potentiometer 1 und 2 |
| 0x28B8 | 0x28B8 Drosselklappe, Ansteuerung: Kurzschluss |
| 0x28B9 | 0x28B9 Drosselklappe, Ansteuerung: Übertemperatur oder Strom zu hoch |
| 0x28BA | 0x28BA DME, interner Fehler, Ansteuerung Drosselklappe: interner Kommunikationsfehler |
| 0x28BB | 0x28BB Drosselklappe, Ansteuerung: Leitungsunterbrechung |
| 0x28BC | 0x28BC Drosselklappe, schliessende Federprüfung: Abbruch Prüfung, Feder schliesst nicht |
| 0x28BD | 0x28BD Drosselklappe, schliessende Federprüfung: Fehlfunktion |
| 0x28C0 | 0x28C0 Drosselklappe, öffnende Federprüfung: Abbruch Prüfung, Feder öffnet nicht |
| 0x28C1 | 0x28C1 Drosselklappe, öffnende Federprüfung: Fehlfunktion |
| 0x28C4 | 0x28C4 Drosselklappe, Adaption: Notluftposition nicht adaptiert |
| 0x28CC | 0x28CC Drosselklappe, Adaption: Randbedingungen nicht erfüllt |
| 0x28CD | 0x28CD Drosselklappe, Adaption: Randbedingungen nicht erfüllt, Batteriespannung zu niedrig |
| 0x28D0 | 0x28D0 Drosselklappe, Adaption: Erstadaption, unterer Anschlag nicht gelernt |
| 0x28D4 | 0x28D4 Drosselklappe, Adaption: Wiederlernen, unterer Anschlag nicht gelernt |
| 0x28D9 | 0x28D9 Tuningschutz: Luftmasse zu hoch |
| 0x2904 | 0x2904 Ladelufttemperatursensor: Sammelfehler |
| 0x2906 | 0x2906 Ansaugluftsystem: Verdacht auf Undichtigkeit zwischen Turbolader und Einlassventilen |
| 0x2908 | 0x2908 Ladelufttemperatursensor: Sammelfehler |
| 0x2936 | 0x2936 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Masse |
| 0x2937 | 0x2937 Kühlmitteltemperatursensor, elektrisch: Kurzschluss nach Plus |
| 0x293A | 0x293A Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch |
| 0x293B | 0x293B Kühlmitteltemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig |
| 0x293E | 0x293E Kühlmitteltemperatursensor: Sammelfehler |
| 0x2943 | 0x2943 Kühlmitteltemperatursensor, Signaländerung: zu schnell |
| 0x2947 | 0x2947 Kühlmitteltemperatursensor, Signal: festliegend auf niedrig |
| 0x2948 | 0x2948 Kühlmitteltemperatursensor, Signal: festliegend |
| 0x299A | 0x299A Außentemperatursensor, Signal: Oberen Schwellwert überschritten |
| 0x299B | 0x299B Außentemperatursensor, Signal: Unteren Schwellwert unterschritten |
| 0x299C | 0x299C Außentemperatursensor, Signal: CAN-Botschaft fehlerhaft |
| 0x299E | 0x299E Außentemperatursensor, Sammelfehler: elektrisch und Plausibilität |
| 0x29A2 | 0x29A2 Außentemperatursensor, Plausibilität: Umgebungstemperatur größer als Modelltemperatur |
| 0x29A3 | 0x29A3 Außentemperatursensor, Plausibilität: Umgebungstemperatur kleiner als Modelltemperatur |
| 0x29DC | 0x29DC Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu hoch |
| 0x29DD | 0x29DD Ladelufttemperatursensor, Plausibilität, Kaltstart: Temperatur zu niedrig |
| 0x29E0 | 0x29E0 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Plus |
| 0x29E1 | 0x29E1 Ladelufttemperatursensor, elektrisch: Kurzschluss nach Masse |
| 0x29E2 | 0x29E2 Ladelufttemperatursensor, Spannungsänderung: zu schnell |
| 0x29E4 | 0x29E4 Ladelufttemperatur, Plausibilität: Temperatur zu hoch |
| 0x29E5 | 0x29E5 Ladelufttemperatur, Signal: festliegend |
| 0x29E6 | 0x29E6 Ladelufttemperatursensor, Kaltstart: Sammelfehler |
| 0x29E7 | 0x29E7 Ladelufttemperatursensor: Sammelfehler |
| 0x29E8 | 0x29E8 Ladelufttemperatursensor, Signaländerung: zu schnell |
| 0x29FE | 0x29FE Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x29FF | 0x29FF Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A00 | 0x2A00 Injektor Zylinder 1, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A01 | 0x2A01 Injektor Zylinder 1, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A02 | 0x2A02 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x2A03 | 0x2A03 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A04 | 0x2A04 Injektor Zylinder 2, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A05 | 0x2A05 Injektor Zylinder 2, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A06 | 0x2A06 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x2A07 | 0x2A07 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A08 | 0x2A08 Injektor Zylinder 3, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A09 | 0x2A09 Injektor Zylinder 3, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A0A | 0x2A0A Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Masse |
| 0x2A0B | 0x2A0B Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Plus |
| 0x2A0C | 0x2A0C Injektor Zylinder 4, Ansteuerung: Hochspannungsseite; Kurzschluss nach Plus |
| 0x2A0D | 0x2A0D Injektor Zylinder 4, Ansteuerung: Niederspannungsseite; Kurzschluss nach Masse |
| 0x2A30 | 0x2A30 Injektor Zylinder 1, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A31 | 0x2A31 Injektor Zylinder 2, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A32 | 0x2A32 Injektor Zylinder 3, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A33 | 0x2A33 Injektor Zylinder 4, Ansteuerung: Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x2A40 | 0x2A40 Injektor Zylinder 1, Stromanstieg: zu langsam |
| 0x2A41 | 0x2A41 Injektor Zylinder 2, Stromanstieg: zu langsam |
| 0x2A42 | 0x2A42 Injektor Zylinder 3, Stromanstieg: zu langsam |
| 0x2A43 | 0x2A43 Injektor Zylinder 4, Stromanstieg: zu langsam |
| 0x2A4C | 0x2A4C Injektor Zylinder 1, Ansteuerung: Leitungsunterbrechung |
| 0x2A4D | 0x2A4D Injektor Zylinder 2, Ansteuerung: Leitungsunterbrechung |
| 0x2A4E | 0x2A4E Injektor Zylinder 3, Ansteuerung: Leitungsunterbrechung |
| 0x2A4F | 0x2A4F Injektor Zylinder 4, Ansteuerung: Leitungsunterbrechung |
| 0x2A5F | 0x2A5F Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Plus |
| 0x2A60 | 0x2A60 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Kurzschluss nach Masse |
| 0x2A61 | 0x2A61 Relais Zündung und Injektoren, Versorgungsspannung Einspritzung: Leitungsunterbrechung |
| 0x2A70 | 0x2A70 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation fehlerhaft |
| 0x2A72 | 0x2A72 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation unplausibel |
| 0x2A74 | 0x2A74 DME, interner Fehler, HDEV-Endstufen-Baustein 1: SPI-Kommunikation gestört |
| 0x2A80 | 0x2A80 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu mager |
| 0x2A81 | 0x2A81 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu mager |
| 0x2A82 | 0x2A82 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu mager |
| 0x2A83 | 0x2A83 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu mager |
| 0x2A90 | 0x2A90 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 1: Gemisch zu fett |
| 0x2A91 | 0x2A91 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 2: Gemisch zu fett |
| 0x2A92 | 0x2A92 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 3: Gemisch zu fett |
| 0x2A93 | 0x2A93 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Zylinder 4: Gemisch zu fett |
| 0x2A96 | 0x2A96 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu mager: Sammelfehler |
| 0x2A97 | 0x2A97 Zylinderindividuelle Gemischüberwachung über Laufunruhe, Gemisch zu fett: Sammelfehler |
| 0x2AC6 | 0x2AC6 Kleinstmengenadaption, Injektor Zylinder 1: Adaptionswert außerhalb gültigem Bereich |
| 0x2AC7 | 0x2AC7 Kleinstmengenadaption, Injektor Zylinder 1: Reglerwert außerhalb gültigem Bereich |
| 0x2AC8 | 0x2AC8 Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AC9 | 0x2AC9 Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2ACA | 0x2ACA Kleinstmengenadaption, Injektor Zylinder 1, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2ACB | 0x2ACB Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2ACC | 0x2ACC Kleinstmengenadaption, Injektor Zylinder 1, Signalerkennung: Fehlfunktion |
| 0x2ACD | 0x2ACD Kleinstmengenadaption, Injektor Zylinder 1, Plausibilität: Signal unplausibel |
| 0x2ACE | 0x2ACE Kleinstmengenadaption, Injektor Zylinder 3: Adaptionswert außerhalb gültigem Bereich |
| 0x2ACF | 0x2ACF Kleinstmengenadaption, Injektor Zylinder 3: Reglerwert außerhalb gültigem Bereich |
| 0x2AD0 | 0x2AD0 Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AD1 | 0x2AD1 Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2AD2 | 0x2AD2 Kleinstmengenadaption, Injektor Zylinder 3, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2AD3 | 0x2AD3 Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2AD4 | 0x2AD4 Kleinstmengenadaption, Injektor Zylinder 3, Signalerkennung: Fehlfunktion |
| 0x2AD5 | 0x2AD5 Kleinstmengenadaption, Injektor Zylinder 3, Plausibilität: Signal unplausibel |
| 0x2AD6 | 0x2AD6 Kleinstmengenadaption, Injektor Zylinder 4: Adaptionswert außerhalb gültigem Bereich |
| 0x2AD7 | 0x2AD7 Kleinstmengenadaption, Injektor Zylinder 4: Reglerwert außerhalb gültigem Bereich |
| 0x2AD8 | 0x2AD8 Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AD9 | 0x2AD9 Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2ADA | 0x2ADA Kleinstmengenadaption, Injektor Zylinder 4, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2ADB | 0x2ADB Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2ADC | 0x2ADC Kleinstmengenadaption, Injektor Zylinder 4, Signalerkennung: Fehlfunktion |
| 0x2ADD | 0x2ADD Kleinstmengenadaption, Injektor Zylinder 4, Plausibilität: Signal unplausibel |
| 0x2ADE | 0x2ADE Kleinstmengenadaption, Injektor Zylinder 2: Adaptionswert außerhalb gültigem Bereich |
| 0x2ADF | 0x2ADF Kleinstmengenadaption, Injektor Zylinder 2: Reglerwert außerhalb gültigem Bereich |
| 0x2AE0 | 0x2AE0 Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption: Einschwingen des Reglers fehlgeschlagen |
| 0x2AE1 | 0x2AE1 Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber Defaultwert |
| 0x2AE2 | 0x2AE2 Kleinstmengenadaption, Injektor Zylinder 2, Grundadaption, Plausibilität: Öffnungsverzugszeit unplausibel gegenüber zuletzt gelernten Wert |
| 0x2AE3 | 0x2AE3 Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung, Grundadaption: Fehlfunktion |
| 0x2AE4 | 0x2AE4 Kleinstmengenadaption, Injektor Zylinder 2, Signalerkennung: Fehlfunktion |
| 0x2AE5 | 0x2AE5 Kleinstmengenadaption, Injektor Zylinder 2, Plausibilität: Signal unplausibel |
| 0x2BC0 | 0x2BC0 Gemischregelung: Gemisch zu mager |
| 0x2BC1 | 0x2BC1 Gemischregelung: Gemisch zu fett |
| 0x2BC2 | 0x2BC2 Gemischadaption, Leerlauf: Gemisch zu mager |
| 0x2BC3 | 0x2BC3 Gemischadaption, Leerlauf: Gemisch zu fett |
| 0x2BCA | 0x2BCA Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu fett |
| 0x2BCB | 0x2BCB Lambdasonde vor Katalysator, Gemischfeinregelung: Abgas nach Katalysator zu mager |
| 0x2BD9 | 0x2BD9 Raildrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x2BDA | 0x2BDA Raildrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x2BDE | 0x2BDE Kraftstoffhochdruck bei Freigabe der Einspritzung: Druck zu niedrig |
| 0x2BE5 | 0x2BE5 Raildrucksensor, Plausibilität: Druck zu hoch |
| 0x2BE6 | 0x2BE6 Raildrucksensor, Plausibilität: Druck zu niedrig |
| 0x2BE9 | 0x2BE9 Zylindereinspritzabschaltung: Druck zu niedrig im Hochdrucksystem |
| 0x2BEA | 0x2BEA Gemischregelung: Gemisch zu mager, große Abweichung |
| 0x2BEB | 0x2BEB Gemischregelung: Gemisch zu fett, große Abweichung |
| 0x2BED | 0x2BED Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu hoch |
| 0x2BEE | 0x2BEE Kraftstoffhochdruck, Plausibilität, Kaltstart: Druck zu niedrig |
| 0x2BEF | 0x2BEF Kraftstoffhochdruck nach Freigabe der Einspritzung: Druck zu niedrig |
| 0x2BF0 | 0x2BF0 Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung): Druck zu niedrig |
| 0x2BF2 | 0x2BF2 Raildrucksensor, Arbeitsbereich: Druck zu hoch |
| 0x2BF4 | 0x2BF4 Raildrucksensor, Plausibilität: Druck zu hoch vor Motorstart |
| 0x2BF5 | 0x2BF5 Raildrucksensor, Plausibilität: Druck zu niedrig vor Motorstart |
| 0x2BF8 | 0x2BF8 Raildrucksensor, Signal: festliegend |
| 0x2C00 | 0x2C00 Kraftstoffhochdruck, Plausibilität: Druck zu hoch |
| 0x2C01 | 0x2C01 Kraftstoffhochdruck, Plausibilität: Druck zu niedrig |
| 0x2C20 | 0x2C20 Ethanolsensor, elektrisch: Kurzschluss nach Plus |
| 0x2C21 | 0x2C21 Ethanolsensor, elektrisch: Kurzschluss nach Masse |
| 0x2C22 | 0x2C22 Ethanolsensor, Arbeitsbereich: Ethanolgehalt zu hoch |
| 0x2C23 | 0x2C23 Ethanolsensor, Arbeitsbereich: Ethanolgehalt zu niedrig |
| 0x2C24 | 0x2C24 Ethanolsensor, Eigendiagnose: Ethanolgehalt unplausibel |
| 0x2C25 | 0x2C25 Ethanolsensor, Arbeitsbereich: Temperatur zu hoch |
| 0x2C26 | 0x2C26 Ethanolsensor, Arbeitsbereich: Temperatur zu niedrig |
| 0x2C27 | 0x2C27 Ethanolsensor, Eigendiagnose: Temperatur unplausibel |
| 0x2C28 | 0x2C28 Ethanolsensor, Plausibilität: Ethanolgehalt unplausibel |
| 0x2C3D | 0x2C3D Mengensteuerventil, Ansteuerung: Kurzschluss nach Plus |
| 0x2C3E | 0x2C3E Mengensteuerventil, Ansteuerung: Kurzschluss nach Masse |
| 0x2C3F | 0x2C3F Mengensteuerventil, Ansteuerung: Leitungsunterbrechung |
| 0x2C42 | 0x2C42 Gemischregelung: Sammelfehler |
| 0x2C56 | 0x2C56 Ladedruckregelung, Plausibilität: Druck zu hoch |
| 0x2C57 | 0x2C57 Ladedruckregelung, Plausibilität: Druck zu niedrig |
| 0x2C58 | 0x2C58 Ladedruckregelung: Abschaltung als Folgereaktion |
| 0x2C6F | 0x2C6F Ladedrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x2C70 | 0x2C70 Ladedrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x2C71 | 0x2C71 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu hoch |
| 0x2C72 | 0x2C72 Ladedrucksensor, Plausibilität, Nachlauf: Druck zu niedrig |
| 0x2C7F | 0x2C7F Ladedrucksensor: Sammelfehler |
| 0x2C82 | 0x2C82 Ladedruck, Arbeitsbereich: Druck zu hoch |
| 0x2C83 | 0x2C83 Ladedruck, Plausibilität: Druck zu hoch |
| 0x2C84 | 0x2C84 Ladedruck, Arbeitsbereich: Druck zu niedrig |
| 0x2C85 | 0x2C85 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu hoch |
| 0x2C86 | 0x2C86 Ladedruck - Umgebungsdruck, Vergleich: Ladedruck zu niedrig |
| 0x2C88 | 0x2C88 Schubumluftventil, Ansteuerung: Kurzschluss nach Plus |
| 0x2C89 | 0x2C89 Schubumluftventil, Ansteuerung: Kurzschluss nach Masse |
| 0x2C8A | 0x2C8A Schubumluftventil, Ansteuerung: Leitungsunterbrechung |
| 0x2C90 | 0x2C90 Schubumluftventil: klemmt geschlossen |
| 0x2C91 | 0x2C91 Schubumluftventil, Mechanik: Verdacht auf offen klemmendes Schubumluftventil |
| 0x2CA1 | 0x2CA1 Wastegate, Ansteuerung: Kurzschluss nach Plus |
| 0x2CA2 | 0x2CA2 Wastegate, Ansteuerung: Kurzschluss nach Masse |
| 0x2CA3 | 0x2CA3 Wastegate, Ansteuerung: Leitungsunterbrechung |
| 0x2CA4 | 0x2CA4 Elektrisches Wastegate, Anschlag-Lernen, Kaltstart: Fehlfunktion |
| 0x2CA5 | 0x2CA5 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) nicht gefunden |
| 0x2CA6 | 0x2CA6 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) nicht gefunden |
| 0x2CA7 | 0x2CA7 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate offen) nicht gefunden |
| 0x2CA8 | 0x2CA8 Elektrisches Wastegate, Anschlag-Lernen: Startposition (Wastegate geschlossen) nicht gefunden |
| 0x2CA9 | 0x2CA9 Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate offen) außerhalb Toleranz |
| 0x2CAA | 0x2CAA Elektrisches Wastegate, Anschlag-Lernen: Anschlagposition (Wastegate geschlossen) außerhalb Toleranz |
| 0x2CAB | 0x2CAB Elektrisches Wastegate, Anschlag-Lernen: Verstellbereich außerhalb Toleranz |
| 0x2CAC | 0x2CAC Elektrisches Wastegate, Wastegate-Klappe: schwergängig |
| 0x2CAD | 0x2CAD Elektrisches Wastegate, Wastegate-Klappe, Kaltstart: schwergängig |
| 0x2CAE | 0x2CAE Elektrisches Wastegate, Positionssensor, Versorgungsspannung, Plausibilität: Spannung zu niedrig |
| 0x2CAF | 0x2CAF Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Plus |
| 0x2CB3 | 0x2CB3 Wastegate, Ansteuerung: Verdacht auf Fehler in der Wastegateansteuerung |
| 0x2CB4 | 0x2CB4 Elektrisches Wastegate, Anschlag-Lernen, Kaltstart: Fehlfunktion |
| 0x2CB5 | 0x2CB5 Elektrisches Wastegate, Ansteuerung: Leitungsunterbrechung |
| 0x2CB6 | 0x2CB6 Elektrisches Wastegate, Ansteuerung: Kurzschluss |
| 0x2CB7 | 0x2CB7 Elektrisches Wastegate, Endstufe: Temperatur zu hoch |
| 0x2CB8 | 0x2CB8 DME, interner Fehler, Elektrisches Wastegate: SPI-Kommunikation fehlerhaft |
| 0x2CB9 | 0x2CB9 Elektrisches Wastegate, Positionssensor, elektrisch: Kurzschluss nach Masse |
| 0x2CED | 0x2CED Lambdasonde nach Katalysator, Dynamik, von Fett nach Mager: langsame Reaktion |
| 0x2CEE | 0x2CEE Lambdasondenbeheizung vor Katalysator, Funktion: Heizelement fehlerhaft |
| 0x2CF1 | 0x2CF1 Lambdasonde nach Katalysator, von Mager nach Fett: verzögerte Reaktion |
| 0x2CF2 | 0x2CF2 Lambdasonde nach Katalysator, von Fett nach Mager: verzögerte Reaktion |
| 0x2CF3 | 0x2CF3 Lambdasonde nach Katalysator, Dynamik, von Mager nach Fett: langsame Reaktion |
| 0x2CF4 | 0x2CF4 Lambdasonde vor Katalysator, Dynamik: langsame Reaktion |
| 0x2CF5 | 0x2CF5 Lambdasonde nach Katalysator: Signal festliegend auf Fett |
| 0x2CF6 | 0x2CF6 Lambdasonde nach Katalysator: Signal festliegend auf Mager |
| 0x2CF8 | 0x2CF8 Lambdasonde vor Katalysator: Falschluft erkannt |
| 0x2CFA | 0x2CFA Lambdasonde vor Katalysator, elektrisch: Unterbrechung Nernstleitung |
| 0x2CFF | 0x2CFF Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Plus |
| 0x2D00 | 0x2D00 Lambdasonde vor Katalysator, Signalleitungen: Kurzschluss nach Masse |
| 0x2D03 | 0x2D03 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Signalkreisadaptionswerte zu hoch |
| 0x2D04 | 0x2D04 DME, interner Fehler, Lambdasonde vor Katalysator: Lambdasondenbaustein, Unterspannung |
| 0x2D05 | 0x2D05 DME, interner Fehler, Lambdasonde vor Katalysator: Initialisierungsfehler |
| 0x2D06 | 0x2D06 DME, interner Fehler, Lambdasonde vor Katalysator: Kommunikationsfehler |
| 0x2D0B | 0x2D0B Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Plus |
| 0x2D0C | 0x2D0C Lambdasondenbeheizung vor Katalysator, Ansteuerung: Kurzschluss nach Masse |
| 0x2D0D | 0x2D0D Lambdasondenbeheizung vor Katalysator, Ansteuerung: Leitungsunterbrechung |
| 0x2D0F | 0x2D0F Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Plus |
| 0x2D10 | 0x2D10 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Kurzschluss nach Masse |
| 0x2D11 | 0x2D11 Lambdasondenbeheizung nach Katalysator, Ansteuerung: Leitungsunterbrechung |
| 0x2D13 | 0x2D13 Lambdasondenbeheizung nach Katalysator, Funktion: Innenwiderstand zu hoch |
| 0x2D15 | 0x2D15 Lambdasonde nach Katalysator, im Schub, von Fett nach Mager: verzögerte Reaktion |
| 0x2D1B | 0x2D1B Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Mager |
| 0x2D1C | 0x2D1C Lambdasonde nach Katalysator, Systemprüfung: Signal festliegend auf Fett |
| 0x2D1F | 0x2D1F Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Plus |
| 0x2D20 | 0x2D20 Lambdasonde nach Katalysator, elektrisch: Kurzschluss nach Masse |
| 0x2D22 | 0x2D22 Lambdasonde nach Katalysator, elektrisch: Leitungsunterbrechung |
| 0x2D23 | 0x2D23 Lambdasonde vor Katalysator, Pumpstromleitung: Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x2D24 | 0x2D24 Lambdasonde vor Katalysator, im Schub: Signal außerhalb Grenzwert |
| 0x2D25 | 0x2D25 Lambdasonde vor Katalysator, elektrisch: Unterbrechung Pumpstromleitung |
| 0x2D27 | 0x2D27 Lambdasonde vor Katalysator, elektrisch: Unterbrechung virtuelle Masse |
| 0x2D2F | 0x2D2F Lambdasonde vor Katalysator: Sammelfehler |
| 0x2D33 | 0x2D33 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Mager |
| 0x2D34 | 0x2D34 Lambdasonde vor Katalysator, Systemprüfung: Signal festliegend auf Fett |
| 0x2D41 | 0x2D41 Valvetronic, Verstellbereich: Urlernen ausserhalb Toleranzen |
| 0x2D42 | 0x2D42 Valvetronic, Verstellbereich: Anschlag nicht gelernt |
| 0x2D43 | 0x2D43 Valvetronic, Verstellbereich: Fehler Bereichsüberprüfung |
| 0x2D44 | 0x2D44 Valvetronic, Verstellbereich: Bereichsüberprüfung Abweichung zu Urlernen |
| 0x2D45 | 0x2D45 Valvetronic, Verstellbereich: Anschlag nicht gelernt wegen Umweltbedingungen |
| 0x2D51 | 0x2D51 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Plus |
| 0x2D52 | 0x2D52 VANOS-Magnetventil Einlass, Ansteuerung: Kurzschluss nach Masse |
| 0x2D53 | 0x2D53 VANOS-Magnetventil Einlass, Ansteuerung: Leitungsunterbrechung |
| 0x2D54 | 0x2D54 VANOS, Auslass, Kaltstart: nicht regelbar |
| 0x2D55 | 0x2D55 VANOS, Einlass, Kaltstart: nicht regelbar |
| 0x2D56 | 0x2D56 VANOS, Auslass, Kaltstart: Position nicht erreicht |
| 0x2D57 | 0x2D57 VANOS, Einlass, Kaltstart: Position nicht erreicht |
| 0x2D5A | 0x2D5A VANOS, Einlass: Regelfehler, Nockenwelle klemmt |
| 0x2D5B | 0x2D5B VANOS, Einlass: Regelfehler, Position nicht erreicht |
| 0x2D60 | 0x2D60 VANOS, Auslass: Regelfehler, Nockenwelle klemmt |
| 0x2D61 | 0x2D61 VANOS, Auslass: Regelfehler, Position nicht erreicht |
| 0x2D9B | 0x2D9B VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Plus |
| 0x2D9C | 0x2D9C VANOS-Magnetventil Auslass, Ansteuerung: Kurzschluss nach Masse |
| 0x2D9D | 0x2D9D VANOS-Magnetventil Auslass, Ansteuerung: Leitungsunterbrechung |
| 0x2D9F | 0x2D9F Einlassnockenwellensensor, Plausibilität: Signal unplausibel |
| 0x2DA0 | 0x2DA0 Einlassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz |
| 0x2DA1 | 0x2DA1 Auslassnockenwellensensor, Plausibilität: Signal unplausibel |
| 0x2DA2 | 0x2DA2 Auslassnockenwelle: Winkelversatz zur Kurbelwelle außerhalb Toleranz |
| 0x2DAD | 0x2DAD VANOS, Auslass: Sammelfehler |
| 0x2DAE | 0x2DAE VANOS, Einlass: Sammelfehler |
| 0x2DAF | 0x2DAF VANOS: Sammelfehler |
| 0x2DB0 | 0x2DB0 VANOS, Auslass: Nockenwelle beim Start nicht in Verriegelungsposition |
| 0x2DB1 | 0x2DB1 VANOS, Einlass: Nockenwelle beim Start nicht in Verriegelungsposition |
| 0x2DB4 | 0x2DB4 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Plus |
| 0x2DB5 | 0x2DB5 Valvetronic-Relais, Ansteuerung: Kurzschluss nach Masse |
| 0x2DB6 | 0x2DB6 Valvetronic-Relais, Ansteuerung: Leitungsunterbrechung |
| 0x2DBA | 0x2DBA DME, interner Fehler, Valvetronic: Bauteileschutz, Abschaltung System |
| 0x2DBB | 0x2DBB Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System |
| 0x2DBC | 0x2DBC Valvetronic, Exzenterwellenadaption: unterer Anschlag erreicht |
| 0x2DBD | 0x2DBD Valvetronic-Stellmotor, Positionssensoren: Exzenterwinkel falsch |
| 0x2DBF | 0x2DBF Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Plus |
| 0x2DC0 | 0x2DC0 Valvetronic-Stellmotor, Ansteuerung: Kurzschluss nach Masse |
| 0x2DC4 | 0x2DC4 Valvetronic-Stellmotor, Ansteuerung: Abschaltung im Fahrbetrieb |
| 0x2DC5 | 0x2DC5 Valvetronic-Stellmotor, Ansteuerung: Fehlfunktion |
| 0x2DC6 | 0x2DC6 Valvetronic, Versorgungsspannung: Fehlfunktion |
| 0x2DCA | 0x2DCA DME, interner Fehler, Valvetronic: Endstufe überlastet |
| 0x2DCB | 0x2DCB Valvetronic-Stellmotor: Überlastung |
| 0x2DCC | 0x2DCC DME, interner Fehler, Valvetronic: Warnschwelle Überlastschutz überschritten |
| 0x2DCD | 0x2DCD Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten |
| 0x2DCE | 0x2DCE Valvetronic System: keine Verstellung möglich |
| 0x2DCF | 0x2DCF Valvetronic System: keine Bewegung erkannt |
| 0x2DD0 | 0x2DD0 Valvetronic System: Warnschwelle Regelabweichung überschritten |
| 0x2DD6 | 0x2DD6 Valvetronic-Stellmotor, Positionssensoren: Kurzschluss oder Leitungsunterbrechung |
| 0x2DD7 | 0x2DD7 Valvetronic-Stellmotor, Positionssensoren: Versorgungsspannung fehlerhaft |
| 0x2DD8 | 0x2DD8 Valvetronic-Stellmotor, Positionssensoren: Signal unplausibel |
| 0x2DE1 | 0x2DE1 Valvetronic-Stellmotor, Positionssensoren, Plausibilität: Feinhallsignale zueinander unplausibel |
| 0x2DE2 | 0x2DE2 Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung |
| 0x2DE3 | 0x2DE3 Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung |
| 0x2DE4 | 0x2DE4 Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung |
| 0x2DE5 | 0x2DE5 Valvetronic-Stellmotor: Überlastung |
| 0x2DE6 | 0x2DE6 Valvetronic: Warnschwelle Überlastschutz überschritten |
| 0x2DE7 | 0x2DE7 Valvetronic-Stellmotor: Warnschwelle Überlastschutz überschritten |
| 0x2DE8 | 0x2DE8 Valvetronic: Bauteileschutz, Abschaltung System |
| 0x2DE9 | 0x2DE9 Valvetronic-Stellmotor: Bauteileschutz, Abschaltung System |
| 0x2DEA | 0x2DEA Valvetronic: Endstufe überlastet |
| 0x2E0A | 0x2E0A Valvetronic-Stellmotor, Ansteuerung Phase U: Leitungsunterbrechung |
| 0x2E0B | 0x2E0B Valvetronic-Stellmotor, Ansteuerung Phase V: Leitungsunterbrechung |
| 0x2E0C | 0x2E0C Valvetronic-Stellmotor, Ansteuerung Phase W: Leitungsunterbrechung |
| 0x2E0D | 0x2E0D Valvetronic-Stellmotor, Positionssensoren: Fehler erkannt |
| 0x2E0E | 0x2E0E Valvetronic-Stellmotor, Positionssensoren: Signale unplausibel |
| 0x2E0F | 0x2E0F Valvetronic System: deaktiviert, zu häufiger Verstellfehler |
| 0x2E10 | 0x2E10 Valvetronic System: deaktiviert, Warnschwelle Regelabweichung zu oft überschritten |
| 0x2E11 | 0x2E11 Valvetronic System: unterer Anschlag gelernt |
| 0x2E4A | 0x2E4A Abgasklappe, Ansteuerung: Kurzschluss nach Plus |
| 0x2E4B | 0x2E4B Abgasklappe, Ansteuerung: Kurzschluss nach Masse |
| 0x2E4C | 0x2E4C Abgasklappe, Ansteuerung: Leitungsunterbrechung |
| 0x2E4D | 0x2E4D Abgasklappe, Plausibilität: Verstellzeit unplausibel |
| 0x2E7C | 0x2E7C Kühlerjalousie, oben, Eigendiagnose: Hardwaredefekt |
| 0x2E7D | 0x2E7D Kühlerjalousie, oben, Eigendiagnose: mechanischer Fehler |
| 0x2E7E | 0x2E7E Kühlerjalousie, oben, Eigendiagnose: Kommunikationsfehler |
| 0x2E80 | 0x2E80 Kühlerjalousie, Ansteuerung: Kurzschluss nach Plus |
| 0x2E81 | 0x2E81 Kühlerjalousie, Ansteuerung: Kurzschluss nach Masse |
| 0x2E82 | 0x2E82 Kühlerjalousie, Ansteuerung: Leitungsunterbrechung |
| 0x2E84 | 0x2E84 Kühlerjalousie, unten, Eigendiagnose, elektrisch: Fehlfunktion |
| 0x2EE0 | 0x2EE0 Verbrennungsaussetzer, mehrere Zylinder: Einspritzabschaltung |
| 0x2EE1 | 0x2EE1 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend |
| 0x2EE2 | 0x2EE2 Verbrennungsaussetzer, mehrere Zylinder: abgasschädigend nach Startvorgang |
| 0x2EE4 | 0x2EE4 Verbrennungsaussetzer, Zylinder 1: Einspritzabschaltung |
| 0x2EE5 | 0x2EE5 Verbrennungsaussetzer, Zylinder 1: abgasschädigend |
| 0x2EE6 | 0x2EE6 Verbrennungsaussetzer, Zylinder 1: abgasschädigend nach Startvorgang |
| 0x2EE7 | 0x2EE7 Verbrennungsaussetzer, Zylinder 2: Einspritzabschaltung |
| 0x2EE8 | 0x2EE8 Verbrennungsaussetzer, Zylinder 2: abgasschädigend |
| 0x2EE9 | 0x2EE9 Verbrennungsaussetzer, Zylinder 2: abgasschädigend nach Startvorgang |
| 0x2EEA | 0x2EEA Verbrennungsaussetzer, Zylinder 3: Einspritzabschaltung |
| 0x2EEB | 0x2EEB Verbrennungsaussetzer, Zylinder 3: abgasschädigend |
| 0x2EEC | 0x2EEC Verbrennungsaussetzer, Zylinder 3: abgasschädigend nach Startvorgang |
| 0x2EED | 0x2EED Verbrennungsaussetzer, Zylinder 4: Einspritzabschaltung |
| 0x2EEF | 0x2EEF Verbrennungsaussetzer, Zylinder 4: abgasschädigend |
| 0x2EF0 | 0x2EF0 Verbrennungsaussetzer, Zylinder 4: abgasschädigend nach Startvorgang |
| 0x2EF7 | 0x2EF7 Verbrennungsaussetzer: Einspritzabschaltung |
| 0x2EFE | 0x2EFE Verbrennungsaussetzer, mehrere Zylinder: erkannt |
| 0x2EFF | 0x2EFF Verbrennungsaussetzer, Zylinder 1: erkannt |
| 0x2F00 | 0x2F00 Verbrennungsaussetzer, Zylinder 2: erkannt |
| 0x2F01 | 0x2F01 Verbrennungsaussetzer, Zylinder 3: erkannt |
| 0x2F02 | 0x2F02 Verbrennungsaussetzer, Zylinder 4: erkannt |
| 0x2F44 | 0x2F44 Zündkreis, Versorgungsspannung: Bankausfall oder Motorausfall |
| 0x2F76 | 0x2F76 Superklopfen Zylinder 1: Einspritzungsabschaltung |
| 0x2F77 | 0x2F77 Superklopfen Zylinder 2: Einspritzungsabschaltung |
| 0x2F78 | 0x2F78 Superklopfen Zylinder 3: Einspritzungsabschaltung |
| 0x2F79 | 0x2F79 Superklopfen Zylinder 4: Einspritzungsabschaltung |
| 0x2F7C | 0x2F7C Superklopfen: Einspritzungsabschaltung |
| 0x2F83 | 0x2F83 Zündwinkelverstellung im Leerlauf, Kaltstart: Zündwinkel zu früh |
| 0x2F84 | 0x2F84 Zündwinkelverstellung in Teillast, Kaltstart: Zündwinkel zu früh |
| 0x2F8A | 0x2F8A Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Plus |
| 0x2F8B | 0x2F8B Relais Zündung und Injektoren, Versorgungsspannung Zündung: Kurzschluss nach Masse |
| 0x2F94 | 0x2F94 Superklopfen Zylinder 1: dauerhafte Einspritzabschaltung |
| 0x2F95 | 0x2F95 Superklopfen Zylinder 2: dauerhafte Einspritzabschaltung |
| 0x2F96 | 0x2F96 Superklopfen Zylinder 3: dauerhafte Einspritzabschaltung |
| 0x2F97 | 0x2F97 Superklopfen Zylinder 4: dauerhafte Einspritzabschaltung |
| 0x2FA8 | 0x2FA8 Zündung, Zylinder 1: Brenndauer zu kurz |
| 0x2FA9 | 0x2FA9 Zündung, Zylinder 2: Brenndauer zu kurz |
| 0x2FAA | 0x2FAA Zündung, Zylinder 3: Brenndauer zu kurz |
| 0x2FAB | 0x2FAB Zündung, Zylinder 4: Brenndauer zu kurz |
| 0x2FB3 | 0x2FB3 Zündung, Zylinder 1: Brenndauer außerhalb Toleranz |
| 0x2FB4 | 0x2FB4 Zündung, Zylinder 2: Brenndauer außerhalb Toleranz |
| 0x2FB5 | 0x2FB5 Zündung, Zylinder 3: Brenndauer außerhalb Toleranz |
| 0x2FB6 | 0x2FB6 Zündung, Zylinder 4: Brenndauer außerhalb Toleranz |
| 0x2FDA | 0x2FDA Kurbelwellensensor, Signal: fehlt |
| 0x2FDB | 0x2FDB Kurbelwellensensor, Signal: unplausibel |
| 0x2FDD | 0x2FDD Kurbelwellensensor, Plausibilität: Drehrichtung unplausibel |
| 0x2FDE | 0x2FDE Kurbelwellensensor: allgemeiner Synchronisationsverlust |
| 0x300C | 0x300C Einlassnockenwellensensor, elektrisch: Kurzschluss nach Plus |
| 0x300D | 0x300D Einlassnockenwellensensor, elektrisch: Kurzschluss nach Masse |
| 0x300E | 0x300E Auslassnockenwellensensor, elektrisch: Kurzschluss nach Plus |
| 0x300F | 0x300F Ausassnockenwellensensor, elektrisch: Kurzschluss nach Masse |
| 0x3011 | 0x3011 Einlassnockenwelle: Montage fehlerhaft |
| 0x3012 | 0x3012 Auslassnockenwelle: Montage fehlerhaft |
| 0x303E | 0x303E Klopfregelung: Systemfehler |
| 0x303F | 0x303F Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Plus |
| 0x3040 | 0x3040 Klopfsensor, elektrisch: Signal-Eingang A, Kurzschluss nach Masse |
| 0x3041 | 0x3041 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Plus |
| 0x3042 | 0x3042 Klopfsensor, elektrisch: Signal-Eingang B, Kurzschluss nach Masse |
| 0x3043 | 0x3043 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Plus |
| 0x3044 | 0x3044 Klopfsensor 2, elektrisch: Signal-Eingang A, Kurzschluss nach Masse |
| 0x3045 | 0x3045 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Plus |
| 0x3046 | 0x3046 Klopfsensor 2, elektrisch: Signal-Eingang B, Kurzschluss nach Masse |
| 0x3048 | 0x3048 Klopfsensor 1, Signal: Motorgeräusch über Grenzwert |
| 0x3049 | 0x3049 Klopfsensor 1, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung |
| 0x304C | 0x304C Klopfsensor 2, Signal: Motorgeräusch über Grenzwert |
| 0x304D | 0x304D Klopfsensor 2, Signal: Motorgeräusch unter Grenzwert oder Leitungsunterbrechung |
| 0x3106 | 0x3106 Katalysator: Wirkungsgrad unterhalb Grenzwert |
| 0x3107 | 0x3107 Katalysator, Plausibilität: Abgasgegendruck zu hoch |
| 0x3155 | 0x3155 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Plus |
| 0x3156 | 0x3156 Tankentlüftungsventil, Ansteuerung: Kurzschluss nach Masse |
| 0x3157 | 0x3157 Tankentlüftungsventil, Ansteuerung: Leitungsunterbrechung |
| 0x315A | 0x315A Tankentlüftungsventil: klemmt offen |
| 0x3160 | 0x3160 Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Plus |
| 0x3161 | 0x3161 Tankentlüftungssystem Absperrventil, Ansteuerung: Kurzschluss nach Masse |
| 0x3162 | 0x3162 Tankentlüftungssystem Absperrventil, Ansteuerung: Leitungsunterbrechung |
| 0x3163 | 0x3163 Tankentlüftungssystem Absperrventil: klemmt offen |
| 0x3164 | 0x3164 Tankentlüftungssystem, 2. Einleitestelle: Fehlfunktion |
| 0x3166 | 0x3166 Tankentlüftungssystem: Fehlfunktion |
| 0x3183 | 0x3183 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Plus |
| 0x3184 | 0x3184 Tankfüllstandssensor, rechts, Signal: Kurzschluss nach Masse |
| 0x3185 | 0x3185 Tankfüllstandssensor, rechts, Signal: CAN Wert unplausibel |
| 0x3187 | 0x3187 Tankfüllstandssensor, links, Signal: Kurzschluss nach Plus |
| 0x3188 | 0x3188 Tankfüllstandssensor, links, Signal: Kurzschluss nach Masse |
| 0x3189 | 0x3189 Tankfüllstandssensor, links, Signal: Tankfüllstandsignal unplausibel zu hoch |
| 0x318A | 0x318A Tankfüllstandssensor, links, Signal: CAN Wert unplausibel |
| 0x318B | 0x318B Tankfüllstandssensor: Signal unplausibel wegen festhängendem Tankfüllstandsgeber |
| 0x318C | 0x318C Tankfüllstandssensor: Tankfüllstand größer als Tankvolumen |
| 0x318D | 0x318D Tankfüllstandssensor: Abweichung zwischen Verbrauch und Füllstandsänderung |
| 0x318F | 0x318F Tankfüllstand, Sammelfehler: Signal und elektrisch |
| 0x3191 | 0x3191 Tankfüllstandssensor, rechts, Signal: Tankfüllstandsignal unplausibel zu hoch |
| 0x31E7 | 0x31E7 Elektrolüfter, Ansteuerungleitung: Kurzschluss nach Plus |
| 0x31E8 | 0x31E8 Elektrolüfter, Ansteuerungleitung: Kurzschluss nach Masse |
| 0x31E9 | 0x31E9 Elektrolüfter, Ansteuerungleitung: Leitungsunterbrechung |
| 0x31EA | 0x31EA Elektrolüfter, Eigendiagnose: Mechanischer- oder Hardwaredefekt |
| 0x3219 | 0x3219 DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Plus |
| 0x321A | 0x321A DMTL-Magnetventil, Ansteuerung: Kurzschluss nach Masse |
| 0x321B | 0x321B DMTL-Magnetventil, Ansteuerung: Leitungsunterbrechung |
| 0x321C | 0x321C Tankentlüftungs- und Spülluftsystem, Feinleck: Leckage größer 1,0 mm |
| 0x321D | 0x321D Tankentlüftungs- und Spülluftsystem, Feinstleck: Leckage größer 0,5 mm |
| 0x321E | 0x321E DMTL, Systemfehler: Pumpenstrom zu groß bei Referenzmessung |
| 0x321F | 0x321F DMTL, Systemfehler: Pumpenstrom zu klein bei Referenzmessung |
| 0x3220 | 0x3220 DMTL, Systemfehler: Abbruch wegen Stromschwankungen bei Referenzmessung |
| 0x3221 | 0x3221 DMTL, Systemfehler: Pumpenstrom bei Ventilprüfung erreicht Grenzwert |
| 0x3222 | 0x3222 DMTL, Heizung, Ansteuerung: Kurzschluss nach Plus |
| 0x3223 | 0x3223 DMTL, Heizung, Ansteuerung: Kurzschluss nach Masse |
| 0x3224 | 0x3224 DMTL, Heizung, Ansteuerung: Leitungsunterbrechung |
| 0x3225 | 0x3225 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Plus |
| 0x3226 | 0x3226 DMTL-Leckdiagnosepumpe, Ansteuerung: Kurzschluss nach Masse |
| 0x3227 | 0x3227 DMTL-Leckdiagnosepumpe, Ansteuerung: Leitungsunterbrechung |
| 0x3228 | 0x3228 Tankentlüftungssystem, 2. Einleitestelle, Nachlauf: Fehlfunktion |
| 0x32AB | 0x32AB FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): Framefehler |
| 0x32C8 | 0x32C8 Schlechtwegstreckenerkennung: Radgeschwindigkeit zu hoch |
| 0x32C9 | 0x32C9 Schlechtwegstreckenerkennung: Kein Raddrehzahlsignal erhalten |
| 0x32CC | 0x32CC Fahrzeuggeschwindigkeit, Plausibilität: Kombi hat Ungültigkeitssignal gesendet |
| 0x32CD | 0x32CD Fahrzeuggeschwindigkeit, Plausibilität: DSC-Signal unplausibel gegenüber Kombi-Anzeige |
| 0x32D0 | 0x32D0 Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeit zu hoch |
| 0x32D3 | 0x32D3 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch: Fehlfunktion |
| 0x32D4 | 0x32D4 Fahrzeuggeschwindigkeit: Sammelfehler |
| 0x32D5 | 0x32D5 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch: Fehlfunktion |
| 0x32D6 | 0x32D6 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch: Fehlfunktion |
| 0x32D7 | 0x32D7 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch: Fehlfunktion |
| 0x32D8 | 0x32D8 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit unter Last unplausibel |
| 0x32D9 | 0x32D9 Fahrzeuggeschwindigkeit, Plausibilität: Mindestgeschwindigkeit im Schub unplausibel |
| 0x32DA | 0x32DA Fahrzeuggeschwindigkeit, Plausibilität: Geschwindigkeitssignal unplausibel |
| 0x32DC | 0x32DC Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung: unplausibel |
| 0x32DD | 0x32DD Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung: unplausibel |
| 0x32DE | 0x32DE Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung: unplausibel |
| 0x32DF | 0x32DF Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung: unplausibel |
| 0x32E0 | 0x32E0 Fahrzeuggeschwindigkeit, Raddrehzahlsensoren/DSC: Fehlfunktion |
| 0x32E1 | 0x32E1 EWS Manipulationsschutz: kein Startwert programmiert |
| 0x32E2 | 0x32E2 EWS Manipulationsschutz: Antwort unplausibel |
| 0x32E3 | 0x32E3 Schnittstelle EWS-DME: Hardwarefehler |
| 0x32E4 | 0x32E4 Schnittstelle EWS-DME: Framefehler |
| 0x32E5 | 0x32E5 Schnittstelle EWS-DME: Zeitüberschreitung |
| 0x32E6 | 0x32E6 Schnittstelle EWS-DME: Empfangsfehler CAS Schnittstelle |
| 0x32E7 | 0x32E7 DME, interner Fehler, EWS-Daten: keine verfügbare Speichermöglichkeit |
| 0x32E8 | 0x32E8 DME, interner Fehler, EWS-Daten: Fehlerfreischaltcodeablage |
| 0x32E9 | 0x32E9 DME, interner Fehler, EWS-Daten: Prüfsummenfehler |
| 0x32EA | 0x32EA DME, interner Fehler, EWS-Daten: Schreibfehler Secret Key |
| 0x32EB | 0x32EB EWS-Manipulationsschutz: Motorlauf durch EWS gesperrt |
| 0x32EC | 0x32EC FA-CAN, Botschaft (EWS Dienst DME1/DDE1, 0x5C0): fehlt |
| 0x32F0 | 0x32F0 FlexRay, Botschaft (EWS Information FEM, 103.1.4): fehlt |
| 0x3325 | 0x3325 Bremslichtschalter, Plausibilität: Signal unplausibel |
| 0x332C | 0x332C Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Masse |
| 0x332D | 0x332D Klemme 15_3, Leitung vom CAS, elektrisch: Kurzschluss nach Plus |
| 0x332E | 0x332E Klemme 87_1: keine Spannung |
| 0x332F | 0x332F Klemme 87_2: keine Spannung |
| 0x3330 | 0x3330 Klemme 87_3: keine Spannung |
| 0x335B | 0x335B Bremsunterdrucksensor, Plausibilität: Druckdifferenz unplausibel |
| 0x335C | 0x335C Bremsunterdrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x335D | 0x335D Bremsunterdrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x3392 | 0x3392 Motorabstellzeit, Plausibilität: Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x3393 | 0x3393 Motorabstellzeit, Plausibilität: Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x3394 | 0x3394 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Motorlauf |
| 0x3395 | 0x3395 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Motorlauf |
| 0x3396 | 0x3396 Motorabstellzeit, Signal: fehlt |
| 0x3398 | 0x3398 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu hoch im Nachlauf |
| 0x3399 | 0x3399 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich: Wert Zeitzähler Kombi zu niedrig im Nachlauf |
| 0x339A | 0x339A Motorabstellzeit: Sammelfehler |
| 0x33DB | 0x33DB Nullgangsensor, Adaption: nicht gelernt (MSA deaktiviert) |
| 0x33DC | 0x33DC Nullgangsensor, Plausibilität: Signal unplausibel |
| 0x33DD | 0x33DD Nullgangsensor, Signal: Tastverhältnis zu hoch |
| 0x33DE | 0x33DE Nullgangsensor, Signal: Tastverhältnis zu niedrig |
| 0x33DF | 0x33DF Nullgangsensor, elektrisch: Kurzschluss nach Plus |
| 0x33E0 | 0x33E0 Nullgangsensor, elektrisch: Kurzschluss nach Masse |
| 0x33E1 | 0x33E1 Nullgangsensor, Signal: Periodendauer außerhalb gültigem Bereich |
| 0x33FC | 0x33FC Motoröldruckregelung, Plausibilität: Druckschwankungen |
| 0x33FD | 0x33FD Motoröldruckregelung, Plausibilität, statisch: Druck zu hoch |
| 0x33FE | 0x33FE Motoröldruckregelung, Plausibilität, statisch: Druck zu niedrig |
| 0x33FF | 0x33FF Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Plus |
| 0x3400 | 0x3400 Motoröldruckregelventil, Ansteuerung: Kurzschluss nach Masse |
| 0x3401 | 0x3401 Motoröldruckregelventil, Ansteuerung: Leitungsunterbrechung |
| 0x3404 | 0x3404 Motoröldruckregelung: instabil |
| 0x3405 | 0x3405 Motorölpumpe: Druck zu hoch |
| 0x3406 | 0x3406 Motorölpumpe: Druck zu niedrig |
| 0x3408 | 0x3408 Motoröldruckregelventil: klemmt in voll bestromter Stellung (minimaler Öldruck) |
| 0x3409 | 0x3409 Motoröldruckregelventil: klemmt in unbestromter Stellung (maximaler Öldruck) |
| 0x3426 | 0x3426 Motoröldrucksensor, elektrisch: Kurzschluss nach Plus |
| 0x3427 | 0x3427 Motoröldrucksensor, elektrisch: Kurzschluss nach Masse |
| 0x3429 | 0x3429 Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu hoch |
| 0x342A | 0x342A Motoröldrucksensor, Plausibilität: Druck vor Motorstart zu niedrig |
| 0x342B | 0x342B Motoröldrucksensor, Signal: festliegend |
| 0x342D | 0x342D Motoröl-Druck-Temperatursensor, elektrisch: Fehlfunktion |
| 0x342E | 0x342E Motoröl-Druck-Temperatursensor: defekt |
| 0x342F | 0x342F Motoröl-Druck-Temperatursensor, Plausibilität: Signal unplausibel |
| 0x3430 | 0x3430 Motoröl-Druck-Temperatursensor, Plausibilität: Signal unplausibel |
| 0x3431 | 0x3431 Motoröl-Druck-Temperatursensor, Plausibilität: Druck unplausibel |
| 0x3432 | 0x3432 Motoröl-Druck-Temperatursensor, Arbeitsbereich: Druck unplausibel |
| 0x3433 | 0x3433 Motoröl-Druck-Temperatursensor, Plausibilität: Temperatur unplausibel |
| 0x3434 | 0x3434 Motoröl-Druck-Temperatursensor, Arbeitsbereich: Temperatur unplausibel |
| 0x343F | 0x343F Ölzustand, Status Niveau: Fehlfunktion |
| 0x3440 | 0x3440 Ölzustandssensor, Status Temperatur: Fehlfunktion |
| 0x3447 | 0x3447 Motorölniveau: zu niedrig |
| 0x3449 | 0x3449 Ölzustandssensor: Fehlfunktion |
| 0x344C | 0x344C Motoröltemperatursensor, elektrisch: Fehlfunktion |
| 0x344E | 0x344E Ölzustandssensor, Plausibilität: Signal unplausibel |
| 0x344F | 0x344F Ölzustandssensor, Plausibilität: Signal Fehlfunktion |
| 0x348A | 0x348A Kennfeldthermostat: klemmt offen |
| 0x348E | 0x348E Kennfeldthermostat, Ansteuerung: Kurzschluss nach Plus |
| 0x348F | 0x348F Kennfeldthermostat, Ansteuerung: Kurzschluss nach Masse |
| 0x3490 | 0x3490 Kennfeldthermostat, Ansteuerung: Leitungsunterbrechung |
| 0x34A2 | 0x34A2 Hinterachsgetriebe, Plausibilität: Übersetzung unplausibel |
| 0x34A3 | 0x34A3 Kupplungsschalter, Plausibilität: Signal unplausibel |
| 0x34A5 | 0x34A5 Kupplungsschalter: Positionen zueinander unplausibel |
| 0x34A6 | 0x34A6 Kommunikation: Signal (Drehzahl_Getriebestrang_Turbine) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig |
| 0x34A7 | 0x34A7 Kommunikation: Signal (Status_Gangwahl_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig |
| 0x34A8 | 0x34A8 Kupplungstemperatur: Warnschwellenwert 1 ohne Schädigung überschritten |
| 0x34A9 | 0x34A9 Kupplungstemperatur: Warnschwellenwert 2 ohne Schädigung überschritten |
| 0x34AD | 0x34AD Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung leicht geschädigt |
| 0x34AE | 0x34AE Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung geschädigt |
| 0x34AF | 0x34AF Kupplung, Plausibilität: Übertragbares Moment zu niedrig, Kupplung stark geschädigt |
| 0x34B0 | 0x34B0 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit möglicher Schädigung Getriebölkühlerleitungen erkannt |
| 0x34B1 | 0x34B1 Getriebeöltemperatur Wandleraustritt: Übertemperatur mit Schädigung Getriebeöl erkannt |
| 0x34B2 | 0x34B2 EGS: elektrischer Notlauf aktiv |
| 0x3520 | 0x3520 Leerlaufregelung: Drehzahl zu hoch |
| 0x3521 | 0x3521 Leerlaufregelung: Drehzahl zu niedrig |
| 0x3524 | 0x3524 Leerlaufregelung, Kaltstart: Drehzahl zu hoch |
| 0x3525 | 0x3525 Leerlaufregelung, Kaltstart: Drehzahl zu niedrig |
| 0x3526 | 0x3526 Leerlaufregelung, Plausibilität, Kaltstart: Drehzahl unplausibel |
| 0x3528 | 0x3528 Antrieb, Sicherheitsfunktion: Leistungsreduzierung durch Sicherheitskonzept |
| 0x3529 | 0x3529 Drehzahlbegrenzung bei stehendem Fahrzeug: Leerlaufdrehzahl zu lange zu hoch |
| 0x352A | 0x352A Manipulationsschutz: Motorleistung zu hoch |
| 0x3539 | 0x3539 Motoröl, Kaltstart: Ethanolgehalt Warnschwelle 1 überschritten |
| 0x353A | 0x353A Motoröl, Kaltstart: Ethanolgehalt Warnschwelle 2 überschritten |
| 0x3584 | 0x3584 DME, interner Fehler, Innentemperatursensor: Wert zu hoch |
| 0x3585 | 0x3585 DME, interner Fehler, Innentemperatursensor: Wert zu niedrig |
| 0x3586 | 0x3586 DME Temperatur: Übertemperatur |
| 0x36AE | 0x36AE DME, interner Fehler, Valvetronic: Strom unplausibel |
| 0x36AF | 0x36AF DME, interner Fehler, Valvetronic: Spannung außerhalb gültigem Bereich |
| 0x36B0 | 0x36B0 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion |
| 0x36B3 | 0x36B3 DME, interner Fehler, Überwachung SPI-Kommunikation: Fehlfunktion an Baustein TLE6232/1 |
| 0x36B4 | 0x36B4 DME, interner Fehler: Überwachung SPI-Kommunikation |
| 0x36B5 | 0x36B5 DME, interner Fehler: Löschen EEPROM fehlerhaft |
| 0x36B6 | 0x36B6 DME, interner Fehler: Lesen EEPROM fehlerhaft |
| 0x36B7 | 0x36B7 DME, interner Fehler: Schreiben EEPROM fehlerhaft |
| 0x36B8 | 0x36B8 DME, interner Fehler: Überwachungsmodulfehler |
| 0x36B9 | 0x36B9 DME, interner Fehler, Überwachung 5V-Versorgung: Überspannung erkannt |
| 0x36BA | 0x36BA DME, interner Fehler, Überwachung 5V-Versorgung: Unterspannung erkannt |
| 0x36BB | 0x36BB DME, interner Fehler, Watchdog-Ausgang: Fehlfunktion |
| 0x36BC | 0x36BC DME, interner Fehler, Watchdog-Ausgang: fehlerhafte Frage-/Antwort-Kommunikation |
| 0x36BD | 0x36BD DME, interner Fehler, Watchdog-Ausgang: Überspannungserkennung |
| 0x36BE | 0x36BE DME, Kodierung: fehlt oder Fahrgestellnummer falsch |
| 0x36BF | 0x36BF DME, interner Fehler, MSA-Überwachung: fehlerhafte Berechnung |
| 0x36C0 | 0x36C0 Antrieb, Sicherheitsfunktion: AD-Wandler Leerlauftestimpulsprüfung |
| 0x36C1 | 0x36C1 Antrieb, Sicherheitsfunktion: AD-Wandler Testspannungsprüfung |
| 0x36C2 | 0x36C2 DME, interner Fehler, Sicherheitsfunktion: Luftmengenabgleich |
| 0x36C3 | 0x36C3 Antrieb, Sicherheitsfunktion: Fahrpedalmodul oder Pedalwertgeber unplausibel |
| 0x36C4 | 0x36C4 Antrieb, Sicherheitsfunktion: Drehzahlgeber unplausibel |
| 0x36C5 | 0x36C5 DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung der Gemischkorrekturfaktoren |
| 0x36C6 | 0x36C6 DME, interner Fehler, Sicherheitsfunktion: Einspritzmengenbegrenzung Ebene 1 |
| 0x36C7 | 0x36C7 Antrieb, Sicherheitsfunktion: Sicherheitsabschaltung Einspritzung |
| 0x36C8 | 0x36C8 DME, interner Fehler, Sicherheitsfunktion: Lambda-Sollwert |
| 0x36C9 | 0x36C9 DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung relative Kraftstoffmasse |
| 0x36CA | 0x36CA DME, interner Fehler, Sicherheitsfunktion: Momentenvergleich |
| 0x36CB | 0x36CB DME, interner Fehler, Sicherheitsfunktion: Antriebstrangübersetzungsverhältnis unplausibel |
| 0x36CC | 0x36CC Antrieb, Sicherheitsfunktion: Getriebevariante unplausibel |
| 0x36CD | 0x36CD DME, interner Fehler, Sicherheitsfunktion: Zündwinkelüberwachung |
| 0x36CE | 0x36CE Antrieb, Sicherheitsfunktion: Abschaltpfad-Test negativ |
| 0x36CF | 0x36CF DME, interner Fehler, Sicherheitsfunktion: Plausiblisierung Kraftstoffmasse |
| 0x36D0 | 0x36D0 DME, interner Fehler, Überwachung MSC-Kommunikation: Fehlfunktion an Baustein R2S2/1 |
| 0x36D1 | 0x36D1 DME, interner Fehler, Ansteuerung Mengensteuerventil: Fehlfunktion |
| 0x36D3 | 0x36D3 DME, interner Fehler, Überwachung SPI-Kommunikation: Fehlfunktion an Baustein TLE6232/2 |
| 0x36D4 | 0x36D4 DME, interner Fehler, Ansteuerung Valvetronic: Fehlfunktion |
| 0x36D5 | 0x36D5 DME, interner Fehler, Sicherheitsfunktion: Momentenanforderung unplausibel |
| 0x36D6 | 0x36D6 Elektrisches Wastegate, thermischer Überlastschutz: Notlauf aktiv |
| 0x36D7 | 0x36D7 Elektrisches Wastegate, thermischer Überlastschutz: Warnschwelle überschritten |
| 0x36D8 | 0x36D8 DME, interner Fehler, Sicherheitsfunktion: Plausibilisierung Ethanolgehalt |
| 0x36D9 | 0x36D9 DME, interner Fehler, Sicherheitsfunktion: Momentenanforderung unplausibel |
| 0x36E2 | 0x36E2 Überwachung 5V Sensor-Versorgung: Spannung außerhalb gültigem Bereich |
| 0x36E3 | 0x36E3 Überwachung 5V Sensor-Versorgung 2: Spannung außerhalb gültigem Bereich |
| 0x36E4 | 0x36E4 Überwachung 5V Sensor-Versorgung 3: Spannung außerhalb gültigem Bereich |
| 0x36E5 | 0x36E5 DME, interner Fehler: Software-Reset |
| 0x36E6 | 0x36E6 DME, interner Fehler: Software-Reset |
| 0x36E7 | 0x36E7 DME, interner Fehler: Software-Reset |
| 0x36FA | 0x36FA Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Plus |
| 0x36FB | 0x36FB Startaggregat Ritzelstarter, Ansteuerung: Kurzschluss nach Masse |
| 0x36FC | 0x36FC Startaggregat Ritzelstarter, Ansteuerung: Leitungsunterbrechung |
| 0x36FD | 0x36FD DME-Hauptrelais, Plausibilität: vorzeitig abgefallen |
| 0x36FE | 0x36FE DME-Hauptrelais, Ansteuerung: Kurzschluss nach Masse |
| 0x36FF | 0x36FF DME-Hauptrelais: nicht abgefallen |
| 0x3714 | 0x3714 Bordnetzspannung, DME-Hauptrelais, Arbeitsbereich: Spannung zu hoch |
| 0x3719 | 0x3719 Valvetronic, Versorgungsspannung: Kurzschluss nach Masse |
| 0x371A | 0x371A Valvetronic, Versorgungsspannung: Leitungsunterbrechung |
| 0x371B | 0x371B Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Masse |
| 0x371C | 0x371C Relais Zündung und Injektoren, Ansteuerung: Kurzschluss nach Plus |
| 0x371E | 0x371E Relais Zündung und Injektoren, Ansteuerung: Leitungsunterbrechung |
| 0x375A | 0x375A CBS-Client: Ausgabe von Ersatzwert |
| 0x375C | 0x375C DME, Manipulationsschutz: Programm oder Datenmanipulation erkannt |
| 0x375F | 0x375F DME, falscher Datensatz: FA-CAN, Botschaft (Fahrzeugtyp, 0x388): fehlt |
| 0x3760 | 0x3760 DME, falscher Datensatz: Variantenüberwachung |
| 0x3761 | 0x3761 Funktionsfreischaltung, Leistungserhöhung: nicht erfolgt |
| 0x3778 | 0x3778 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Übertemperatur |
| 0x3779 | 0x3779 Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Überspannung |
| 0x377A | 0x377A Motor-Kühlsystem: Abschaltung Kühlmittelpumpe wegen Blockierung |
| 0x377B | 0x377B Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelverlust durch Kühlmittelpumpe erkannt |
| 0x377C | 0x377C Motor-Kühlsystem, leistungsreduzierter Betrieb: Versorgungsspannung Kühlmittelpumpe zu niedrig |
| 0x377D | 0x377D Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 1 überschritten |
| 0x377E | 0x377E Motor-Kühlsystem, leistungsreduzierter Betrieb: Kühlmittelpumpe Temperaturschwelle 2 überschritten |
| 0x378E | 0x378E Motor-Kühlsystem: verschmutzt oder Luft im Kühlsystem |
| 0x3791 | 0x3791 Motor-Kühlsystem: kein Notlaufsignal an Kühlmittelpumpe |
| 0x3792 | 0x3792 Motor-Kühlsystem: Drehzahl Kühlmittelpumpe außerhalb der Toleranz |
| 0x3794 | 0x3794 Motor-Kühlsystem: Bauteileschutz Temporäre Motorleistungsreduzierung |
| 0x3796 | 0x3796 Kupplungsschalter, Signal: fehlt |
| 0x3840 | 0x3840 Generator, elektrisch: Fehlfunktion |
| 0x3841 | 0x3841 Generator, elektrisch: Fehlfunktion |
| 0x3844 | 0x3844 Generator, Plausibilität, elektrisch: berechnet |
| 0x3846 | 0x3846 Generator: Typ falsch |
| 0x3847 | 0x3847 Generator, Kommunikation: Bus-Fehler |
| 0x3848 | 0x3848 Generator, Temperatur: Übertemperatur |
| 0x3849 | 0x3849 Generator, elektrisch: Fehlfunktion |
| 0x384A | 0x384A Generator, Plausibilität, elektrisch: berechnet |
| 0x384B | 0x384B Generator, Temperatur: Übertemperatur |
| 0x384D | 0x384D Generator, mechanisch: Fehlfunktion |
| 0x3850 | 0x3850 Generator, mechanisch: Fehlfunktion |
| 0x3858 | 0x3858 Generator: Typ falsch |
| 0x385B | 0x385B Generator/Startergenerator: Kodierung oder Programmstand falsch |
| 0x385D | 0x385D Generator, Kommunikation: Bus-Fehler |
| 0x385F | 0x385F Generator/Startergenerator: Kodierung fehlt |
| 0x3865 | 0x3865 BSD-Bus: Kommunikationsfehler |
| 0x3866 | 0x3866 BSD, Botschaft (Intelligenter Batteriesensor): fehlt |
| 0x3872 | 0x3872 Powermanagement, Batteriezustandserkennung: Batteriedefekt |
| 0x3873 | 0x3873 Powermanagement, Batteriezustandserkennung: Tiefentladung |
| 0x3875 | 0x3875 Powermanagement: zentrale Überspannung |
| 0x3876 | 0x3876 Powermanagement: zentrale Unterspannung |
| 0x3877 | 0x3877 Powermanagement, Überspannung: Überspannung erkannt |
| 0x3878 | 0x3878 Powermanagement, Unterspannung: Unterspannung erkannt |
| 0x3879 | 0x3879 Powermanagement: Batterieloser Betrieb |
| 0x387C | 0x387C Powermanagement: Batterie Tiefentladung |
| 0x387D | 0x387D Powermanagement: Transportüberwachung Ladezustand Batterie tiefentladen |
| 0x387E | 0x387E Powermanagement: Batterie Tiefentladung |
| 0x387F | 0x387F Powermanagement: Ruhestromverletzung |
| 0x3886 | 0x3886 Bordnetzspannung, Arbeitsbereich: Spannung zu hoch |
| 0x3887 | 0x3887 Bordnetzspannung, Arbeitsbereich: Spannung zu niedrig |
| 0x3888 | 0x3888 Bordnetzspannung: Analog-Digital-Wandler defekt |
| 0x38A4 | 0x38A4 Erweiterte Kommunikation, Intelligenter Batteriesensor: Fehlfunktion |
| 0x38A7 | 0x38A7 Intelligenter Batteriesensor, Kompatibilität: Version nicht plausibel |
| 0x38A8 | 0x38A8 Intelligenter Batteriesensor, Eigendiagnose: Systemfehler |
| 0x38A9 | 0x38A9 Intelligenter Batteriesensor, Plausibilität: Temperatur unplausibel |
| 0x38AA | 0x38AA Intelligenter Batteriesensor, Plausibilität: Spannung unplausibel |
| 0x38AB | 0x38AB Intelligenter Batteriesensor, Plausibilität: Strom unplausibel |
| 0x38AC | 0x38AC Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Kurzschluss nach Plus oder Masse |
| 0x38B2 | 0x38B2 Intelligenter Batteriesensor, Wake-up-Leitung, elektrisch: Leitungsunterbrechung |
| 0x38B4 | 0x38B4 BSD, Kommunikation (Intelligenter Batteriesensor): fehlt |
| 0x38EF | 0x38EF Freigabeleitung, MSA, Ansteuerung: Kurzschluss nach Plus |
| 0x38F0 | 0x38F0 Freigabeleitung, MSA, Ansteuerung: Kurzschluss nach Masse |
| 0x38F1 | 0x38F1 Freigabeleitung, MSA, Ansteuerung: Leitungsunterbrechung |
| 0x38F2 | 0x38F2 MSA, Überwachung: Zeitüberschreitung |
| 0x38F3 | 0x38F3 MSA, Überwachung: Startverzögerung |
| 0x38F4 | 0x38F4 Startaggregat Ritzelstarter: Anzahl MSA-Reflexstarts überschritten |
| 0x38F5 | 0x38F5 Startaggregat Ritzelstarter: Anzahl Motorstarts überschritten |
| 0x3908 | 0x3908 Batterieladeeinheit: Interner Fehler |
| 0x3909 | 0x3909 Batterieladeeinheit, Leitungsüberwachung: Fehlfunktion |
| 0x390A | 0x390A Batterieladeeinheit: Zusatzbatterie defekt |
| 0x390B | 0x390B Batterieladeeinheit: Fehler im Trennrelais oder Kabelbaum oder Zusatzbatterie tiefentladen |
| 0x390C | 0x390C Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Plus |
| 0x390D | 0x390D Startspannungswandler/Startergenerator, Ansteuerung: Kurzschluss nach Masse |
| 0x390E | 0x390E Startspannungswandler/Startergenerator, Ansteuerung: Leitungsunterbrechung |
| 0x3939 | 0x3939 Verbrennungsmotor: Fehlstart oder Motor ausgegangen ohne Fahrereinfluss |
| 0x393A | 0x393A Motordrehmomentbegrenzung: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393B | 0x393B Motordrehzahlbegrenzung, Stufe 1: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393C | 0x393C Motordrehzahlbegrenzung, Stufe 2: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393D | 0x393D Motordrehzahlbegrenzung, Stufe 3: infolge Notlaufanforderung vom EME-Notlaufmanager |
| 0x393E | 0x393E Notlauf 1: Sammelfehler für DME Kopplung |
| 0x393F | 0x393F Notlauf 2: Sammelfehler für DME Kopplung |
| 0x3940 | 0x3940 Notlauf 3: Sammelfehler für DME Kopplung |
| 0x3941 | 0x3941 Notlauf 4: Sammelfehler für DME Kopplung |
| 0x3942 | 0x3942 Notlauf 5: Sammelfehler für DME Kopplung |
| 0x3944 | 0x3944 Montagemode: aktiv |
| 0x3B97 | 0x3B97 LIN Bus: Kommunikationsfehler |
| 0x3B98 | 0x3B98 LIN, Kommunikation (intelligenter Batteriesensor): fehlt |
| 0x3B99 | 0x3B99 LIN, Kommunikation (Motor-Kühlmittelpumpe): fehlt |
| 0x3B9A | 0x3B9A Kühlmittelpumpe, Kommunikation: ungültige Botschaft |
| 0x3B9D | 0x3B9D LIN, Kommunikation (Generator): fehlt |
| 0x3BC4 | 0x3BC4 PT-CAN, Botschaft (Status ARS-Modul, 0x1AC): Aliveprüfung |
| 0x3BC5 | 0x3BC5 PT-CAN, Botschaft (Status ARS-Modul, 0x1AC): fehlt |
| 0x3BC6 | 0x3BC6 PT-CAN, Botschaft (Status ARS-Modul, 0x1AC): Prüfsumme falsch |
| 0x3BC7 | 0x3BC7 PT-CAN, Botschaft (Klemmenstatus, 0x130): fehlt |
| 0x3BC8 | 0x3BC8 PT-CAN, Botschaft (Klemmenstatus, 0x130): Prüfsumme falsch/Aliveprüfung |
| 0x3BCC | 0x3BCC PT-CAN, Botschaft (Wärmestrom/Lastmoment Klima, 0x1B5): fehlt |
| 0x3BCD | 0x3BCD PT-CAN, Botschaft (Status Kombi, 0x1B4): Aliveprüfung |
| 0x3BCE | 0x3BCE PT-CAN, Botschaft (Status Kombi, 0x1B4): fehlt |
| 0x3BCF | 0x3BCF PT-CAN, Botschaft (Status Kombi, 0x1B4): MIL-Ansteuerung unplausibel |
| 0x3BD0 | 0x3BD0 PT-CAN, Botschaft (Anforderung Drehmoment DSC, 0x0B6): Prüfsumme falsch/Aliveprüfung |
| 0x3BD1 | 0x3BD1 PT-CAN, Botschaft (Anforderung Drehmoment DSC, 0x0B6): fehlt |
| 0x3BD2 | 0x3BD2 PT-CAN, Botschaft (Radgeschwindigkeit, 0xCE): fehlt |
| 0x3BD3 | 0x3BD3 PT-CAN, Botschaft (Getriebedaten 4, 0x10A): Prüfsumme falsch/Aliveprüfung |
| 0x3BD4 | 0x3BD4 PT-CAN, Botschaft (Getriebedaten 4, 0x10A): fehlt |
| 0x3BD5 | 0x3BD5 PT-CAN, Botschaft (Status DSC, 0x19E): fehlt |
| 0x3BD6 | 0x3BD6 PT-CAN, Botschaft (Geschwindigkeit, 0x1A0): Prüfsumme falsch/Aliveprüfung |
| 0x3BD7 | 0x3BD7 PT-CAN, Botschaft (Geschwindigkeit, 0x1A0): fehlt |
| 0x3BD8 | 0x3BD8 PT-CAN, Botschaft (Getriebedaten 2, 0x1A2): fehlt |
| 0x3BD9 | 0x3BD9 PT-CAN, Botschaft (Status DKG, 0x37D): fehlt |
| 0x3BDA | 0x3BDA PT-CAN, Botschaft (Getriebedaten 3, 0x3B1): Prüfsumme falsch/Aliveprüfung |
| 0x3BDB | 0x3BDB PT-CAN, Botschaft (Getriebedaten 3, 0x3B1): fehlt |
| 0x3BDC | 0x3BDC PT-CAN, Botschaft (Anforderung Drehmoment EGS, 0xB5): Prüfsumme falsch/Aliveprüfung |
| 0x3BDD | 0x3BDD PT-CAN, Botschaft (Anforderung Drehmoment EGS, 0xB5): fehlt |
| 0x3BDE | 0x3BDE PT-CAN, Botschaft (Anforderung Drehmoment DKG, 0xB8): Prüfsumme falsch/Aliveprüfung |
| 0x3BDF | 0x3BDF PT-CAN, Botschaft (Anforderung Drehmoment DKG, 0xB8): fehlt |
| 0x3BE0 | 0x3BE0 PT-CAN, Botschaft (Getriebedaten, 0xBA): Prüfsumme falsch/Aliveprüfung |
| 0x3BE1 | 0x3BE1 PT-CAN, Botschaft (Getriebedaten, 0xBA): fehlt |
| 0x3BE2 | 0x3BE2 PT-CAN, Botschaft (DKG Drehzahlregelung, 0xB8): Überwachungseingriff |
| 0x3BE7 | 0x3BE7 PT-CAN, Botschaft (Bedienung Taster MSA, 0x195): fehlt |
| 0x3BEC | 0x3BEC PT-CAN, Botschaft (Bedienung Tempomat, 0x194): Prüfsumme falsch/Aliveprüfung |
| 0x3BED | 0x3BED PT-CAN, Botschaft (Bedienung Tempomat, 0x194): fehlt |
| 0x3BF0 | 0x3BF0 PT-CAN, Botschaft (Status Fahrererkennung, 0x2F1): Prüfsumme falsch |
| 0x3BF1 | 0x3BF1 PT-CAN, Botschaft (Status Fahrererkennung, 0x2F1): fehlt |
| 0x3BF4 | 0x3BF4 PT-CAN, Botschaft (ZV und Klappenzustand, 0x2FC): fehlt |
| 0x3C5A | 0x3C5A Kommunikation: Signal (Drehzahl_Getriebestrang_Turbine) in A-CAN, Botschaft (Daten Getriebestrang, 0x1AF): ungültig |
| 0x3C5C | 0x3C5C Kommunikation: Signal (Status_Gangwahl_Getriebe) in A- / FA-CAN, Botschaft (Status Getriebesteuerung, 0x39A): ungültig |
| 0xCD83 | 0xCD83 Energiesparmodus: aktiv |
| 0xCD85 | 0xCD85 PT-CAN, Botschaft (Klemmenstatus, 0x130): Prüfsumme falsch |
| 0xCD86 | 0xCD86 PT-CAN, Botschaft (Klemmenstatus, 0x130): fehlt |
| 0xCD87 | 0xCD87 PT-CAN Kommunikationsfehler: CAN-Bus Off oder CAN-Bus defekt |
| 0xCD89 | 0xCD89 PT-CAN, Botschaft (Status Crashabschaltung elektrische Kraftstoffpumpe, 0x135): fehlt |
| 0xCD8B | 0xCD8B PT-CAN, Botschaft (Stellanforderung EMF, 0x1A7): Prüfsumme falsch |
| 0xCD8C | 0xCD8C PT-CAN, Botschaft (Stellanforderung EMF, 0x1A7): fehlt |
| 0xCD8F | 0xCD8F PT-CAN, Botschaft (Anzeige Getriebedaten, 0x1D2): fehlt |
| 0xCD91 | 0xCD91 PT-CAN, Botschaft (Status EMF, 0x201): Prüfsumme falsch |
| 0xCD92 | 0xCD92 PT-CAN, Botschaft (Status EMF, 0x201): fehlt |
| 0xCD95 | 0xCD95 PT-CAN, Botschaft (Lampenzustand, 0x21A): fehlt |
| 0xCD98 | 0xCD98 PT-CAN, Botschaft (Status Anhänger, 0x2E4): fehlt |
| 0xCD9B | 0xCD9B PT-CAN, Botschaft (Uhrzeit/Datum, 0x2F8): fehlt |
| 0xCD9D | 0xCD9D PT-CAN, Botschaft (Fahrzeugmodus, 0x315): Prüfsumme falsch |
| 0xCD9E | 0xCD9E PT-CAN, Botschaft (Fahrzeugmodus, 0x315): fehlt |
| 0xCDA1 | 0xCDA1 PT-CAN, Botschaft (Powermanagement Ladespannung, 0x334): fehlt |
| 0xCDA2 | 0xCDA2 PT-CAN, Botschaft (Status Verdeck Cabrio, 0x27E): fehlt |
| 0xCDA4 | 0xCDA4 PT-CAN, Botschaft (Status Gang Rückwärts, 0x3B0): fehlt |
| 0xCDA5 | 0xCDA5 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): AFS/STE disabled oder Lenkmoment ungültig |
| 0xCDA6 | 0xCDA6 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): Prüfsumme falsch |
| 0xCDA7 | 0xCDA7 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): fehlt |
| 0xCDA8 | 0xCDA8 PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): AFS/STE disabled oder Lenkmoment ungültig |
| 0xCDA9 | 0xCDA9 PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): Prüfsumme falsch |
| 0xCDAA | 0xCDAA PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): fehlt |
| 0xCDAB | 0xCDAB PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang, 0xBF): Aliveprüfung |
| 0xCDAC | 0xCDAC PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang, 0xBF): Prüfsumme falsch |
| 0xCDAD | 0xCDAD PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang, 0xBF): fehlt |
| 0xCDB0 | 0xCDB0 PT-CAN, Botschaft (Lenkradwinkel, 0xC4): fehlt |
| 0xCDB1 | 0xCDB1 PT-CAN Kommunikationsfehler: DPRAM CAN Baustein defekt |
| 0xCDB2 | 0xCDB2 PT-CAN, Botschaft (Sollmomentanforderung, 0xBB): fehlt |
| 0xCDB3 | 0xCDB3 PT-CAN, Botschaft (Drehmomentanforderung AFS, 0xB9): Verlustmoment zu gross |
| 0xCDB4 | 0xCDB4 PT-CAN, Botschaft (OBD Sensor Diagnosestatus, 0x5E0): fehlt, Sender Kombi |
| 0xCDB6 | 0xCDB6 PT-CAN, Botschaft (Drehmomentanforderung Lenkung, 0xB1): Verlustmoment zu gross |
| 0xCDB7 | 0xCDB7 PT-CAN, Botschaft (Status Elektrische Kraftstoffpumpe, 0x335): fehlt |
| 0xCDB8 | 0xCDB8 PT-CAN, Botschaft (Status Klemmenanforderung, 0x365): fehlt |
| 0xCDB9 | 0xCDB9 PT-CAN, Botschaft (Status Türsensoren abgesichert BN2000, 0x1E1): Prüfsumme falsch |
| 0xCDBA | 0xCDBA PT-CAN, Botschaft (Status Türsensoren abgesichert BN2000, 0x1E1): fehlt |
| 0xCDBB | 0xCDBB PT-CAN, Botschaft (Status Anforderung EMF, 0x1FD): Prüfsumme falsch/Aliveprüfung |
| 0xCDBC | 0xCDBC PT-CAN, Botschaft (Status Anforderung EMF, 0x1FD): fehlt |
| 0xCDBD | 0xCDBD PT-CAN, Botschaft (Bedienung Taster HDC, 0x31A): fehlt |
| 0xFFFF | unbekannter Fehlerort |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x2710 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x2711 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x2714 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x2774 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2775 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2778 | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x2779 | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x277A | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x278A | 0x580C | 0x5821 | 0x5815 | 0x5832 |
| 0x278C | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x278D | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x278E | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x278F | 0x580C | 0x5818 | 0x5812 | 0x58AE |
| 0x27D7 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27D8 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27D9 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DA | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DB | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DC | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DD | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27DE | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27E4 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x27E8 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x280E | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x280F | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x281A | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x281B | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x2820 | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x283C | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x283D | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x2841 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2842 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2848 | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284C | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284D | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284E | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x284F | 0x58DD | 0x580B | 0x5821 | 0x5801 |
| 0x28A0 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x28A1 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x28A4 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28A5 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28A8 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28A9 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28AB | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x28AC | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x28B0 | 0x5813 | 0x584E | 0x584C | 0x5858 |
| 0x28B4 | 0x583F | 0x584E | 0x584C | 0x5858 |
| 0x28B8 | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28B9 | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28BA | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28BB | 0x5815 | 0x584E | 0x584C | 0x5821 |
| 0x28BC | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28BD | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28C0 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28C1 | 0x586A | 0x584E | 0x584C | 0x5858 |
| 0x28C4 | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28CC | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28CD | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28D0 | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28D4 | 0x58B0 | 0x584E | 0x584C | 0x5858 |
| 0x28D9 | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x2904 | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x2906 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2908 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x2936 | 0x580C | 0x5850 | 0x580F | 0x5817 |
| 0x2937 | 0x580C | 0x5850 | 0x580F | 0x5817 |
| 0x293A | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x293B | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x293E | 0x5817 | 0x5850 | 0x58EA | 0x580F |
| 0x2943 | 0x5817 | 0x5850 | 0x5836 | 0x5815 |
| 0x2947 | 0x5817 | 0x5850 | 0x58EA | 0x580F |
| 0x2948 | 0x5817 | 0x5850 | 0x58EA | 0x580F |
| 0x299A | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x299B | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x299C | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x299E | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x29A2 | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x29A3 | 0x580F | 0x5818 | 0x5805 | 0x5817 |
| 0x29DC | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x29DD | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x29E0 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E1 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E2 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E4 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E5 | 0x5805 | 0x58D7 | 0x5817 | 0x5818 |
| 0x29E6 | 0x5882 | 0x5817 | 0x583A | 0x58A7 |
| 0x29E7 | 0x580C | 0x5814 | 0x5817 | 0x580F |
| 0x29E8 | 0x580C | 0x5814 | 0x5817 | 0x580F |
| 0x29FE | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x29FF | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A00 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A01 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A02 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A03 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A04 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A05 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A06 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A07 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A08 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A09 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0A | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0B | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0C | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A0D | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A30 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A31 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A32 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A33 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A40 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A41 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A42 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A43 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4C | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4D | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4E | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A4F | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x2A5F | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A60 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A61 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A70 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A72 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A74 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2A80 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A81 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A82 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A83 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A90 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A91 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A92 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A93 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A96 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2A97 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2AC6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AC7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AC8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AC9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACE | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ACF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD0 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD1 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD2 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD3 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AD9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADE | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2ADF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE0 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE1 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE2 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE3 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2AE5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2BC0 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2BC1 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2BCA | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2BCB | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2BD9 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BDA | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BDE | 0x58EF | 0x583B | 0x5882 | 0x5815 |
| 0x2BE5 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BE6 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BE9 | 0x580C | 0x58EF | 0x583B | 0x5805 |
| 0x2BEA | 0x580C | 0x5855 | 0x5807 | 0x5804 |
| 0x2BEB | 0x580C | 0x5855 | 0x5807 | 0x5804 |
| 0x2BED | 0x580C | 0x58EF | 0x5837 | 0x5805 |
| 0x2BEE | 0x580C | 0x58EF | 0x5837 | 0x583B |
| 0x2BEF | 0x58EF | 0x580C | 0x5882 | 0x5823 |
| 0x2BF0 | 0x58EF | 0x580C | 0x5817 | 0x5823 |
| 0x2BF2 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BF4 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BF5 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2BF8 | 0x5806 | 0x5805 | 0x58F0 | 0x583B |
| 0x2C00 | 0x580C | 0x58EF | 0x5837 | 0x5805 |
| 0x2C01 | 0x580C | 0x58EF | 0x5837 | 0x583B |
| 0x2C20 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C21 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C22 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C23 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C24 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C25 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C26 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C27 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C28 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2C3D | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x2C3E | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x2C3F | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x2C42 | 0x580C | 0x5813 | 0x5807 | 0x5806 |
| 0x2C56 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C57 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C58 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C6F | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C70 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C71 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2C72 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2C7F | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C82 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C83 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C84 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C85 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C86 | 0x580C | 0x58DD | 0x58DE | 0x5801 |
| 0x2C88 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2C89 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2C8A | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2C90 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2C91 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2CA1 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x2CA2 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x2CA3 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x2CA4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CA9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAE | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CAF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB3 | 0x580C | 0x5801 | 0x5817 | 0x5813 |
| 0x2CB4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CB9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2CED | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2CEE | 0x5827 | 0x588C | 0x5860 | 0x5863 |
| 0x2CF1 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x2CF2 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x2CF3 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2CF4 | 0x580C | 0x5855 | 0x5807 | 0x5804 |
| 0x2CF5 | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2CF6 | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2CF8 | 0x588C | 0x5800 | 0x5845 | 0x5849 |
| 0x2CFA | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2CFF | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D00 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D03 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D04 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D05 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D06 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D0B | 0x588C | 0x5800 | 0x5845 | 0x5815 |
| 0x2D0C | 0x588C | 0x5800 | 0x5845 | 0x5815 |
| 0x2D0D | 0x588C | 0x5800 | 0x5845 | 0x5815 |
| 0x2D0F | 0x5800 | 0x5815 | 0x5849 | 0x585C |
| 0x2D10 | 0x5800 | 0x5815 | 0x5849 | 0x585C |
| 0x2D11 | 0x5800 | 0x5815 | 0x5849 | 0x585C |
| 0x2D13 | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2D15 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D1B | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2D1C | 0x5849 | 0x5818 | 0x588B | 0x582F |
| 0x2D1F | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D20 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D22 | 0x5806 | 0x5815 | 0x5849 | 0x585C |
| 0x2D23 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D24 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D25 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D27 | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D2F | 0x588C | 0x5815 | 0x5845 | 0x5860 |
| 0x2D33 | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2D34 | 0x5878 | 0x5817 | 0x588B | 0x5801 |
| 0x2D41 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D42 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D43 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D44 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2D45 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2D51 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D52 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D53 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D54 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D55 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D56 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D57 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D5A | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D5B | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2D60 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D61 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2D9B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D9C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D9D | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2D9F | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DA0 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DA1 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DA2 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2DAD | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2DAE | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2DAF | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2DB0 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2DB1 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2DB4 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DB5 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DB6 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DBA | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DBB | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DBC | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x2DBD | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2DBF | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC0 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC4 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC5 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DC6 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCA | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCB | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCC | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCD | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DCE | 0x580C | 0x587B | 0x5822 | 0x58A2 |
| 0x2DCF | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DD0 | 0x589E | 0x5877 | 0x58BB | 0x58A2 |
| 0x2DD6 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DD7 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DD8 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE1 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE2 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE3 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE4 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2DE5 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DE6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2DE7 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DE8 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2DE9 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2DEA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E0A | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0B | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0C | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0D | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2E0E | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x2E0F | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2E10 | 0x580C | 0x587B | 0x5822 | 0x58A2 |
| 0x2E11 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x2E4A | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E4B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E4C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E4D | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2E7C | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E7D | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E7E | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E80 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E81 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E82 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2E84 | 0x5817 | 0x580D | 0x58D3 | 0x58D2 |
| 0x2EE0 | 0x58EF | 0x5837 | 0x5817 | 0x5815 |
| 0x2EE1 | 0x58EF | 0x5837 | 0x5817 | 0x5815 |
| 0x2EE2 | 0x58EF | 0x5837 | 0x5817 | 0x5815 |
| 0x2EE4 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE5 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE6 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE7 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE8 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EE9 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEA | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEB | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEC | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EED | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EEF | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EF0 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EF7 | 0x580C | 0x5805 | 0x583B | 0x5838 |
| 0x2EFE | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x2EFF | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F00 | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F01 | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F02 | 0x5855 | 0x588B | 0x5814 | 0x5858 |
| 0x2F44 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2F76 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F77 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F78 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F79 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F7C | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F83 | 0x580C | 0x5813 | 0x580E | 0x58CA |
| 0x2F84 | 0x580C | 0x5813 | 0x580E | 0x58CA |
| 0x2F8A | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2F8B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x2F94 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F95 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F96 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2F97 | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x2FA8 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FA9 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FAA | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FAB | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB3 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB4 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB5 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FB6 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x2FDA | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FDB | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FDD | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2FDE | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300C | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300D | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300E | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x300F | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3011 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3012 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x303E | 0x580C | 0x5813 | 0x5805 | 0x580F |
| 0x303F | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3040 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3041 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3042 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3043 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3044 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3045 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3046 | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3048 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x3049 | 0x580C | 0x5883 | 0x5894 | 0x5885 |
| 0x304C | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x304D | 0x580C | 0x5894 | 0x5885 | 0x5888 |
| 0x3106 | 0x580C | 0x5805 | 0x58AD | 0x5818 |
| 0x3107 | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x3155 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3156 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3157 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x315A | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3160 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3161 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3162 | 0x5821 | 0x583B | 0x580D | 0x586A |
| 0x3163 | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3164 | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3166 | 0x580C | 0x583B | 0x58FA | 0x586A |
| 0x3183 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3184 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3185 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3187 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3188 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3189 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318A | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318B | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318C | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318D | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x318F | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x3191 | 0x580C | 0x583B | 0x580D | 0x586A |
| 0x31E7 | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x31E8 | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x31E9 | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x31EA | 0x5805 | 0x587F | 0x580D | 0x5815 |
| 0x3219 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x321A | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x321B | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x321C | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x321D | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x321E | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x321F | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x3220 | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x3221 | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x3222 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3223 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3224 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3225 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3226 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3227 | 0x5815 | 0x5874 | 0x5820 | 0x5823 |
| 0x3228 | 0x580C | 0x583B | 0x5859 | 0x585A |
| 0x32AB | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32C8 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x32C9 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x32CC | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x32CD | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x32D0 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D3 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D4 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D5 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D6 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D7 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D8 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32D9 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DA | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DC | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DD | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DE | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32DF | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32E0 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x32E1 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E2 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E3 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E4 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E5 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E6 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E7 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E8 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32E9 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32EA | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32EB | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32EC | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x32F0 | 0x580C | 0x5821 | 0x5805 | 0x5815 |
| 0x3325 | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x332C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x332D | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x332E | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x332F | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3330 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x335B | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x335C | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x335D | 0x58B7 | 0x5821 | 0x580D | 0x5815 |
| 0x3392 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3393 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3394 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3395 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3396 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3398 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x3399 | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x339A | 0x580C | 0x5817 | 0x5882 | 0x5823 |
| 0x33DB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x33DC | 0x5817 | 0x5850 | 0x5836 | 0x5815 |
| 0x33DD | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33DE | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33DF | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33E0 | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33E1 | 0x587C | 0x587D | 0x589A | 0x5891 |
| 0x33FC | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x33FD | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x33FE | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x33FF | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x3400 | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x3401 | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x3404 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3405 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3406 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3408 | 0x580C | 0x5822 | 0x586F | 0x586A |
| 0x3409 | 0x580C | 0x5822 | 0x586F | 0x586A |
| 0x3426 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3427 | 0x580C | 0x5822 | 0x586F | 0x5862 |
| 0x3429 | 0x580C | 0x5822 | 0x586F | 0x5801 |
| 0x342A | 0x580C | 0x5822 | 0x586F | 0x5801 |
| 0x342B | 0x580C | 0x5822 | 0x586F | 0x5801 |
| 0x342D | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x342E | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x342F | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3430 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3431 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3432 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3433 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x3434 | 0x580C | 0x5813 | 0x5805 | 0x5815 |
| 0x343F | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x3440 | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x3447 | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x3449 | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x344C | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x344E | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x344F | 0x580C | 0x5822 | 0x588B | 0x5865 |
| 0x348A | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x348E | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x348F | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x3490 | 0x580C | 0x5805 | 0x5882 | 0x5817 |
| 0x34A2 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x34A3 | 0x58D4 | 0x5881 | 0x580D | 0x58B8 |
| 0x34A5 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x34A6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x34A7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x34A8 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34A9 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34AD | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34AE | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34AF | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x34B0 | 0x582E | 0x5800 | 0x5805 | 0x5817 |
| 0x34B1 | 0x582E | 0x5800 | 0x5805 | 0x5817 |
| 0x34B2 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x3520 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3521 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3524 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3525 | 0x580C | 0x5813 | 0x580D | 0x5881 |
| 0x3526 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3528 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x3529 | 0x580C | 0x58A2 | 0x5858 | 0x580B |
| 0x352A | 0x580C | 0x5812 | 0x5814 | 0x580B |
| 0x3539 | 0x580C | 0x5805 | 0x5817 | 0x5822 |
| 0x353A | 0x580C | 0x5805 | 0x5817 | 0x5822 |
| 0x3584 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x3585 | 0x5841 | 0x5805 | 0x5821 | 0x586A |
| 0x3586 | 0x580C | 0x5805 | 0x580F | 0x5821 |
| 0x36AE | 0x58BB | 0x588B | 0x58CD | 0x58A2 |
| 0x36AF | 0x58BB | 0x588B | 0x58CD | 0x58A2 |
| 0x36B0 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x36B3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36B4 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36B5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36B6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36B7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36B8 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36B9 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36BA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36BB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36BC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36BD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36BE | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x36BF | 0x580C | 0x5813 | 0x580D | 0x5814 |
| 0x36C0 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36C1 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36C2 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C3 | 0x580C | 0x5846 | 0x5847 | 0x5815 |
| 0x36C4 | 0x58B8 | 0x5814 | 0x58CF | 0x58D0 |
| 0x36C5 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C6 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C7 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36C8 | 0x58B8 | 0x5816 | 0x5889 | 0x58D0 |
| 0x36C9 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36CA | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36CB | 0x58B8 | 0x5881 | 0x580D | 0x58D0 |
| 0x36CC | 0x58B8 | 0x5814 | 0x58CF | 0x58D0 |
| 0x36CD | 0x58B8 | 0x58BC | 0x58BA | 0x580E |
| 0x36CE | 0x58B8 | 0x5858 | 0x583F | 0x5815 |
| 0x36CF | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36D0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36D1 | 0x58F2 | 0x580D | 0x580C | 0x586A |
| 0x36D3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36D4 | 0x58BB | 0x58CD | 0x5822 | 0x58AA |
| 0x36D6 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x36D7 | 0x58DD | 0x580C | 0x5821 | 0x586A |
| 0x36D8 | 0x58B8 | 0x58BA | 0x58CF | 0x58D0 |
| 0x36D9 | 0x58B8 | 0x5814 | 0x58CF | 0x58D0 |
| 0x36E2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36E3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36E4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x36E5 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36E6 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36E7 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FA | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FB | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FC | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x36FD | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x36FE | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x36FF | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x3714 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x3719 | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x371A | 0x580C | 0x58CD | 0x5822 | 0x58A2 |
| 0x371B | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x371C | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x371E | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x375A | 0x580C | 0x586F | 0x5866 | 0x586A |
| 0x375C | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x375F | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x3760 | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x3761 | 0x5832 | 0x583D | 0x58FC | 0x5815 |
| 0x3778 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x3779 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377A | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377B | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377C | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377D | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x377E | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x378E | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3791 | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3792 | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3794 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x3796 | 0x580C | 0x586A | 0x580D | 0x5881 |
| 0x3840 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3841 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3844 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3846 | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x3847 | 0x5835 | 0x5800 | 0x584A | 0x58AC |
| 0x3848 | 0x5884 | 0x5844 | 0x584A | 0x5815 |
| 0x3849 | 0x5857 | 0x5898 | 0x584A | 0x58AC |
| 0x384A | 0x5857 | 0x5898 | 0x584A | 0x58AC |
| 0x384B | 0x5884 | 0x5844 | 0x584A | 0x58AC |
| 0x384D | 0x5857 | 0x5898 | 0x584A | 0x58AC |
| 0x3850 | 0x5857 | 0x5898 | 0x584A | 0x5815 |
| 0x3858 | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x385B | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x385D | 0x5835 | 0x5800 | 0x584A | 0x5815 |
| 0x385F | 0x5835 | 0x5842 | 0x584A | 0x58F9 |
| 0x3865 | 0x580C | 0x5852 | 0x5854 | 0x5817 |
| 0x3866 | 0x580C | 0x5852 | 0x5854 | 0x5817 |
| 0x3872 | 0x5868 | 0x5869 | 0x5823 | 0x586A |
| 0x3873 | 0x5868 | 0x5869 | 0x5823 | 0x586A |
| 0x3875 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3876 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3877 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3878 | 0x586A | 0x5898 | 0x5887 | 0x584A |
| 0x3879 | 0x580C | 0x586A | 0x5898 | 0x584F |
| 0x387C | 0x580C | 0x586A | 0x5823 | 0x5869 |
| 0x387D | 0x589F | 0x5868 | 0x5869 | 0x5898 |
| 0x387E | 0x580C | 0x586A | 0x58A7 | 0x5869 |
| 0x387F | 0x586B | 0x586C | 0x586E | 0x5823 |
| 0x3886 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x3887 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x3888 | 0x580C | 0x583C | 0x5898 | 0x586A |
| 0x38A4 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38A7 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38A8 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38A9 | 0x580C | 0x5852 | 0x5854 | 0x5817 |
| 0x38AA | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38AB | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38AC | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38B2 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38B4 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x38EF | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x38F0 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x38F1 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x38F2 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x38F3 | 0x580C | 0x58EF | 0x5805 | 0x5815 |
| 0x38F4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x38F5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3908 | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x3909 | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x390A | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x390B | 0x5825 | 0x586A | 0x5817 | 0x5820 |
| 0x390C | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x390D | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x390E | 0x580C | 0x5823 | 0x5821 | 0x586A |
| 0x393A | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393B | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393C | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393D | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x393E | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x393F | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3940 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3941 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3942 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3944 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0x3B97 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3B98 | 0x580C | 0x5852 | 0x5853 | 0x5815 |
| 0x3B99 | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3B9A | 0x580C | 0x5805 | 0x58EA | 0x5815 |
| 0x3B9D | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BC8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCE | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BCF | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BD9 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDA | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDE | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BDF | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BE7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BEC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BED | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BF0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BF1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3BF4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3C5A | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0x3C5C | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD83 | 0x580C | 0x5821 | 0x580D | 0x5815 |
| 0xCD85 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD86 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD87 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD89 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD8B | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD8C | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD8F | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD91 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD92 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD95 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD98 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD9B | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD9D | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCD9E | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA5 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDA9 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAA | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDAD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB0 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB1 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB2 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB3 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB4 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB6 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB7 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB8 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDB9 | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBA | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBB | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBC | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xCDBD | 0x580C | 0x5821 | 0x586A | 0x588B |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x4205 | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x4206 | [0] Massenstrom ueber Drosselklappe | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4300 | Motor-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4306 | Quittung Solldrehzahl von EWP | rpm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | empf. Status von EWP | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4308 | EWAPU Volumenstrom soll (gesamt) | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4310 | Solltemperatur Kuehlmittel | °C | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x4402 | Oeltemperatur nach Filter | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x4403 | Kraftstoffverbrauch seit letztem Oelwechsel | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | Oelkilometer | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Sensorrohwert Oelniveau | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Sensorrohwert Oeltemperatur | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4408 | Oeltemperatur ungefiltert | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Oelniveau ungefiltert in [mm] | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440B | CodingDataSet-OeL-Laenderfaktor1- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | CodingDataSet-OeL-Laenderfaktor2- EEPROM | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Laenderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Laenderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzzeit-Oelniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | - | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Oellaufzeit | month | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Oelzustandssensor | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4420 | Eingangstemperatur Oeldruckregler | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4421 | Oeldruckregler P-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4422 | Oeldruckregler I-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4423 | Oeldruckregler D-Anteil | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4424 | Motoroelniveausensor Fehler | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4425 | Oz_tempsmpf | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4426 | Ist- Betriebsart Oeldruck Regelung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4427 | Rueckmeldung auf Anfrage zur Oelniveaumessung bitcodiert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4428 | Freigabe Funktion Oeldruck-Regler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4429 | B_onqntmssg_anf | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x442A | Motoroeltemperatur (Oz_temp) gueltig | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442B | B_on_antriebsart_cod | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442C | Rohwert Oelniveau | mm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442D | Korrigiertes Niveau aus TP in MinErk | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442E | Niv- Mittelwert QntMssg | mm | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| 0x442F | ABK Schnittstelle Oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4430 | LSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4431 | MSB Status für On_oelniveau | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4432 | Status des ÖNS- Komponententreibes | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4433 | Status des ÖNS- Sensors | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4434 | Bedingung Niveaumessfehler vom Oelzustandssensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4436 | Oeldruck Istwert (Absolutdruck) | hPa | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4500 | Bedingung drehende Kurbelwelle erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4501 | Offset Hubadaption | - | - | signed integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4505 | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x4506 | Nockenwellenposition Einlass | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4507 | Nockenwellenposition Auslass | Grad KW | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4508 | Bedingung fuel-off Adaption im eingeschwungenen Bereich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4509 | Bedingung fuel-off Adaption für Katheizen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450C | Adaption Kurbel/Einlassnockenwelle erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450D | Adaption Kurbel/Auslassnockenwelle erfolgt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x450E | [0] Nullpunktverschiebg in Grad KW für die Winkelversatzdiagn., bedingt d. Toleranzen der Einbaulage | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4510 | Bedingung VVT-Lagereglerueberwachung hat bleibende Regelabweichung erkannt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4511 | Bedingung VVT-Lageregler schwingt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4512 | Bedingung: VVT Motor Ueberlast Warnschwelle | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4513 | Bedingung VVT-Ueberlastung (klemmender Steller) | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4514 | Bedingung VVT-Adaption moeglich | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4515 | Anforderung VVT-Anschlaglernen (intern) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4516 | Status VVT-Anschlaglernen (intern) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4517 | [0] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 0 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4518 | [1] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4519 | [2] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 2 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451A | [3] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 3 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451B | [4] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 4 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451C | [5] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 5 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x451D | Gesamtzeit VVT-Performancetest | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x451E | Stromsumme VVT-Performancetest | A | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4520 | Effektive Motorleistung | - | - | unsigned integer | - | 0,0152587890625 | 1 | 0,0 |
| 0x4521 | Kraftstoffmassenstrom | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4522 | [0] Kraftstoff Einspritzzeit oder -menge Zylinder 1 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4523 | [3] Kraftstoff Einspritzzeit oder -menge Zylinder 3 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4524 | [6] Kraftstoff Einspritzzeit oder -menge Zylinder 4 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x4525 | [9] Kraftstoff Einspritzzeit oder -menge Zylinder 2 | mg/Hub | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| 0x452A | Sollwert Auslassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452B | Sollwert Einlassspreizung variable NWS BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452C | Istwert Auslassspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x452E | Istwert Einlassspreizung BMW | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4530 | [0] Einspritzmodi Zylinderindividuell Zylinder 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4531 | [1] Einspritzmodi Zylinderindividuell Zylinder 3 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4532 | [2] Einspritzmodi Zylinderindividuell Zylinder 4 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4533 | [3] Einspritzmodi Zylinderindividuell Zylinder 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4536 | [0] Regeldifferenz Ladedruck - bankspezifisch Bank1 | hPa | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4538 | [0] Mittlerer Versatz der aequidistanten Flanken der Nockenwelle | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4539 | [1] Mittlerer Versatz der aequidistanten Flanken der Nockenwelle | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x4600 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x4601 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4602 | Einlassventilhub (aus Exzenterwinkel gerechnet, mit Hub-Adaption und mit Hubpraediktion) | mm | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4603 | Sollwert Einlassventilhub gefiltert | mm | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x4604 | Generatorstrom | A | - | signed integer | - | 0,125 | 1 | 0,0 |
| 0x4605 | Chipversion Generator | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x460A | momentane Batteriespannung | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460C | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | - | unsigned integer | - | 0,02348100021481514 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460E | Abstand zur Startfaehigkeit | % | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| 0x460F | DF-Monitor für Batterie-Ladezustand in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4613 | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4616 | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominalspannung Regler Generator 1 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x461B | Abschaltschwelle Loadresponse | 1/min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4650 | Getriebetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x4651 | Tastverhältnis Wastegateanstuerung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4653 | Sensorspannung Positionssensor elektrisches Wastegate | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x4654 | Rohwert Positionssensor elektrisches Wastegate | mm | - | signed integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4680 | Leerlaufdrehzahl gelernt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4681 | Getriebe ist bereit die Neutralposition anzulernen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4700 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x4704 | Lambdasoll Begrenzung (word) | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x4800 | Bedingung Kupplungspedal betaetigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Schalter Kupplung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Bedingung umschalten auf KFPEDS | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Bedingung für Kompressoreinschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4805 | Schalter Klemme 50 von CAN | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4807 | Motordrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4808 | Leerlaufsolldrehzahl | 1/min | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| 0x4809 | Bedingung Leerlaufregelung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Wegstrecke_km auf 1km genau | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x480C | Soll Relative Luftfuellung des Momentenmanagers | % | - | unsigned integer | - | 0,0234375 | 1 | 0,0 |
| 0x480D | Fahrbahnlaengsneigung (geschätzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x480E | Qualifier Fahrbahnlaengsneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x480F | Qualifier Fahrbahnquerneigung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4810 | Fahrbahnquerneigung (geschaetzt) in Grad | deg | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| 0x4811 | Fahrzeuglaengsbeschleunigung | m/s^2 | - | signed char | - | 0,21699999272823334 | 1 | 0,0 |
| 0x4812 | Fahrzeugquerbeschleunigung | m/s^2 | - | signed integer | - | 0,0015625000232830644 | 1 | 0,0 |
| 0x4880 | Max. Quotient Zuendwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4881 | Max. Quotient Zuendwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x4882 | Zaehler Startabbrueche oder Ausgeher nach Schluesselstart, Lambda-Regler nicht aktiv | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4883 | Zaehler Startabbrueche oder Ausgeher gesamt | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4890 | Status Manipulation | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4891 | Deaktivierung des OBD Radars durch Erreichen der Grenzänderungshäufigkeit der NVRam-Variablen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeitzähler ab Startende (16bit) | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5804 | relative Luftmasse (calc. load value) nach SAE J1979 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5806 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5807 | Faktor aus Lambdaregelungsadaption für Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x580B | Saugrohr-Absolutdruck (Word) | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x580C | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x580D | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,25 | 1 | 0,0 |
| 0x580E | Zündwinkel Zylinder 1 | Grad KW | - | signed char | - | 0,75 | 1 | 0,0 |
| 0x580F | Ansaugluft-Temperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5812 | Massenstrom HFM 16-Bit Größe | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5813 | relative Luftfüllung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x5814 | Normierter Fahrpedalwinkel | %PED | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x5816 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5818 | Luftmassenfluß | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5819 | Motordrehzahl [1/min] | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x581A | Winkel Einlassventil oeffnet bezogen auf LWOT | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581B | Sollwinkel Nockenwelle Einlass oeffnet | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581C | Winkel Auslassventil schließt bezogen auf LWOT | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581D | Sollwinkel Nockenwelle Auslass schließt | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x581E | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5820 | Status Klemme 15 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5821 | Steuergeraetetemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5822 | Oeltemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -60,0 |
| 0x5823 | Abstellzeit | s | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5825 | Spannung BCU LIN | V | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5826 | Drosselklappenwinkel aus Poti 1 | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5827 | Tastverhaeltnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5829 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582B | Drehmomentaufnahme des Wandlers ueber CAN | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x582C | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x582D | Korrekturwert der LSU-Spannung vor Kat | V | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| 0x582E | Temperatur Getriebeoeltemperaturmodell | Grad C | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x582F | Abgastemperatur nach Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x5830 | Dynamikwert der LSU | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x5832 | Zustand Motor-Koordinator | 0-n | - | 0xFF | CoEng_st_COMPU_VERB | 1 | 1 | 0 |
| 0x5834 | Umgebungsdruck von Sensor | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5835 | Kennung Generator Hersteller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | gefilterter Drehzahlgradient | 1/min/s | - | signed char | - | 100,0 | 1 | 0,0 |
| 0x5837 | Solldruck Hochdrucksystem | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5838 | Relatives Moment für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5839 | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x583A | Ansaugluft-Temperatur bei Start | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x583B | Fuellstand Kraftstofftank | L | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Batteriespannung; vom AD-Wandler erfasster Wert | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x583D | Betriebsstundenzaehler | min | - | unsigned integer | - | 6,0 | 1 | 0,0 |
| 0x583E | Dauer-RAM: Sollwert DK-Winkel in NLP-Stellung, bez. auf UMA | %DK | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x583F | Sollwert DK-Winkel, bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5840 | DK-Winkel der Notluftposition | %DK | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x5841 | Wert Temperatur Steuergerät | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Bedingung Startanforderung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | Grad C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5845 | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5846 | Spannung PWG-Poti 1 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5847 | Spannung PWG-Poti 2 (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5849 | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x584A | Aktueller Status Generator | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x584C | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584D | Massenstrom Tankentlueftung in das Saugrohr | kg/h | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| 0x584E | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x584F | Erkennung Bordnetzinstabilitaet | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5850 | Signalspannung des Kuehlmitteltemperatursensors | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5852 | Batteriestrom von IBS | A | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| 0x5853 | Batt Spannung von IBS | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5854 | BattTemp von IBS | deg C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5855 | schneller Mittelwert des Lambdaregelfaktors (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| 0x5858 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| 0x5859 | Pumpenstrom Referenzleck | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585A | min. Pumpenstrom bei Grobleckmessung | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585B | Pumpenstrom am Ende der Feinstleckmessung | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x585C | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 512,0 | 1 | 0,0 |
| 0x585E | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x5860 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5862 | Sollwert Oeldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5863 | Innenwiderstand der Nernstzelle der LSU | Ohm | - | unsigned char | - | 0,0390625 | 1 | 0,0 |
| 0x5865 | Langzeit-Oelniveau-Mittelwert für den DIS-Tester | - | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Relativer Fuellstand des Motoroels | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Fahrstrecke des Fahrzeugs als Information ueber CAN | Km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | aktuelle Batteriespannung | V | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x586B | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586E | Zeit, indem der Ruhestrom groeßer als 1000mA liegt | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Oeldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5870 | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5871 | Zaehler Pruefzustand für VVT Endstufenpruefung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5872 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5874 | ADC-Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5875 | Indiziertes Soll-Motormoment MSR | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5876 | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert PID$23 | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5877 | Rotorposition VVT-Motor | ° | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5878 | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x587B | Soll-Bestromung VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x587C | Periodendauer des Nullgangsensorsignals | ms | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| 0x587D | Status Nullgangsensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x587F | Tastverhaeltnis E-Luefter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Tastverhaeltnis GLF System | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5881 | Ist-Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5883 | [0] Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5884 | Begrenzter Erregerstrom Generator1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | [1] Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | - | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| 0x5888 | [2] Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert | - | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| 0x588B | Zeit nach Startende | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x588C | Keramiktemperatur der LSU | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x588D | aktuelle Zeit Leckmessung | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x588E | Pumpenstrom Tankdiagnose | mA | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5891 | Kupplungsmotormoment Istwert | Nm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x5893 | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5894 | [3] Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5896 | Abgastemperatur hinter Hauptkat aus Modell | Grad C | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| 0x5898 | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5899 | Bedingung Anforderung Motorrelais einschalten | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589A | Tastverhaeltnis Nullgangsensor | % | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x589B | Bedingung unzulaessig hoher Motorstrom bei Kurzschluss erkannt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589C | Bedingung Freigabe VVT-Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589E | Sollwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x589F | Batterietemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58A0 | Entladung waehrend Ruhestromverletzung | Ah | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| 0x58A1 | Umweltbedingung Kilometerstand für Fehlerspeichereintrag | Km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x58A2 | Istwert Exzenterwinkel VVT | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A3 | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A6 | Relativer Exzenterwinkel | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A7 | Abstellzeit aus relativem Minutenzaehler bis Motorstart | min | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58A8 | rel. Exzenterwinkel am unteren mech. Anschlag | Grad | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58A9 | VVT Verstellbereich aus Urlernvorgang | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AA | Verstellbereich des Exzenterwinkels | Grad | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AB | DLR für DV-E: Summe der PID-Anteile | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58AC | Klemmenspannung E-Maschine | V | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x58AD | Sauerstoffspeichervermögen des Katalysators, temperatur- und luftmassenstrombezogen | mg | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AE | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58AF | EKP-Sollvolumenstrom | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | Zaehler für Lerndauer eines Lernsteps | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B2 | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B3 | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B4 | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58B7 | aktueller Bremsdruck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Motordrehzahl in der Funktionsueberwachung | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58B9 | Pedalsollwert (8 Bit) in der Funktionsueberwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58BA | Bank mittel eingespritzte effektive relative Kraftstoffmasse (inkl. Reduzierstufe) | % | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| 0x58BB | Strom für VVT-Motor | A | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| 0x58BC | relative Luftfuellung in der Funktionsueberwachung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x58BD | Status Fehler Ueberlast VVT1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BE | DV-E-Adaption: Status Pruefbedingungen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C0 | VVT-Endstufentemperatur aus Modell | Grad C | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| 0x58C8 | geforderte Drehmomentaenderung von der LLR (I-Anteil) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58C9 | Ansteuerungsmodus für den VVT Motor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CA | geforderte MD-Aenderung von der LLR (PD-Zuendungsanteil) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58CB | Aufsummierte thermische Belastung VVT | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CC | Tastverhältnis zur Ansteuerung des VVT-Stellmotors | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x58CD | Spannung hinter VVT/Motor-Relais | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58CF | Momentenanforderung vom Getriebe in der Funktionsueberwachung | Nm | - | signed integer | - | 0,0625 | 1 | 0,0 |
| 0x58D0 | Berechnetes Ist-Moment in der Funktionsueberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58D2 | Status Luftklappensystem High Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D3 | Status Luftklappensystem Low Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D4 | Startbedingung Kraftschluss erfuellt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58D5 | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x58D7 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58D8 | Differenz-DK-Winkel Sollwert - Istwert (wdkdlr_w - wdkba_w) | %DK | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| 0x58D9 | Schrittzaehler DK-Rückstellfeder-Pruefung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | koordiniertes Moment für Fuellung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58DB | Fehlerzaehler Summe, zaehlt abgasrelevante Aussetzer ueber alle Zylinder | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DC | Intervallzaehler für abgasrelevante Aussetzer | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe Rohwert | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x58DE | Spannung Drucksensor vor Drosselklappe | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58E0 | Abgleich DK-Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich DK-Modell (Offset) HIGH Byte | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich EV-Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich EV-Modell (Offset) HIGH Byte | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Ist-Betriebsart | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58E5 | [0] Gefilterte Funkenbrenndauer Zylinder 1 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E6 | [1] Gefilterte Funkenbrenndauer Zylinder 3 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E7 | [2] Gefilterte Funkenbrenndauer Zylinder 4 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E8 | [3] Gefilterte Funkenbrenndauer Zylinder 2 | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x58E9 | Versorgungsspannung elektr. | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Istdrehzahl elektr. Wasserpumpe | 1/min | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Elektroniktemperatur elektr. | Grad C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Stromaufnahme elektr. | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EF | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F0 | ungefilterter Raildruck Istwert (abs.) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x58F2 | PWM signal for the VCV | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x58F3 | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58F4 | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x58F5 | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| 0x58F6 | Sollspannung des VVT Lagereglers | V | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| 0x58F7 | Statusbyte Strommessung plausibel | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F8 | Zeitdauer anliegende Erregerstrombegrenzung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x58F9 | Maschinen-Typ | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FA | gefilterter Faktor Tankentlueftungs-Adaption | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x58FC | Fertigungs-Werkstatt-,Transportmodus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5900 | Gefiltertes zusaetzlicher Sondendelay Mager-Fett, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5901 | Gefiltertes zusaetzlicher Sondendelay Fett-Mager, Sonde 2 | s | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5904 | [1] IBS Status-/Fehlerbyte 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5905 | [2] IBS Status-/Fehlerbyte 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x591F | Abgleich Drosselklappenmodell (Offset) LOW Byte | - | - | signed char | - | 0,25 | 1 | 0,0 |
| 0x5920 | Abgleich Einlassventilmodell (Offset)  LOW Byte | - | - | signed char | - | 0,25 | 1 | 0,0 |
| 0x5927 | Ist Position Elektrisches Wastegate | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x592A | Motordrehzahl, hochaufgelöst | rpm | - | signed integer | - | 0,5 | 1 | 0,0 |
| 0x592B | Pulsbreite DGI-Sensor min | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592C | Pulsbreite DGI-Sensor max | us | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x592D | KW-Winkelversatz im Motorstart | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592E | Motorabstellposition | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x592F | Status Synchronisationsmodul | 0-n | - | 0xFF | Epm_stSync_State_t | 1 | 1 | 0 |
| 0x5938 | Ethanolgehalt - Rohwert vom Sensor | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5939 | Ethanolgehalt am Einspritzventil | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x593A | Gesamte Masse Benzin und Alkohol im Öl | g | - | unsigned integer | - | 0,02133333310484886 | 1 | 0,0 |
| 0x5945 | Anzahl der VVT Notlaeufe bis zum Tausch | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5946 | Anzahl der VVT Notlaeufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5948 | Korrekturfaktor Kraftstoffmischung für Einspritzzeit | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5953 | Zaehler fuer Intervalle mit kritischen ZMS-Stoerungen lesen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5954 | Zaehler für Intervalle mit kritischen ZMS-Stoerungen ueber Lebenszeit lesen | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5A02 | ATL-Leckagediagnose laeuft | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A04 | Spannung PWG-Poti 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A05 | Spannung PWG-Poti 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A06 | Spannung DK-Poti 1 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5A07 | Spannung DK-Poti 2 | V | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| 0x5A08 | Spannungswert des Ansauglufttemperatursensors tfa1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A09 | Signalspannung des Kuehlmitteltemperatursensor | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0B | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0E | Wert Temperatur Steuergeraet | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator | V | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| 0x5A17 | Spannung Pumpenstrom Tankdiagnose | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A1B | Elektrische Kraftstoffpumpe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A1D | Spannung Bremsenunterdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A1E | Differenz zwischen Umgebungsdruck und Bremskraftverstaerkerdruck von Drucksensor (Rohwert) | hPa | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| 0x5A20 | Peridendauer für Massenstrom aus HFM | us | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A21 | Kuehlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5A23 | Sollwert Oeldruck | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A24 | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A25 | Oeldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A29 | normierter Fahrpedalwinkel | %PED | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| 0x5A2B | physikalischer Temperaturwert, ergibt sich bei Wandlung der tiefpassgefilterten Sensorspg. wtfa1f_w | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5A2D | Saugrohr-Absolutdruck gemessen | hPa | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| 0x5A2E | Ungefilterter Niederdruck Rohwert | kPa | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A2F | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5A30 | [0] Laufunruhe Zylinder 1 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A32 | [2] Laufunruhe Zylinder 4 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A34 | [1] Laufunruhe Zylinder 3 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A35 | [3] Laufunruhe Zylinder 2 | (Umdr./sec)^2 | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| 0x5A36 | Bedingung für erkannte Klopfer | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A37 | [0] normierter Referenzpegel Klopfregelung Zylinder 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A39 | [2] normierter Referenzpegel Klopfregelung Zylinder 4 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A3B | [1] normierter Referenzpegel Klopfregelung Zylinder 3 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A3C | [3] normierter Referenzpegel Klopfregelung Zylinder 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A49 | [0] Zuendwinkel Zylinder 1 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A4A | [1] Zuendwinkel Zylinder 3 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A4C | [2] Zuendwinkel Zylinder 4 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A4D | [3] Zuendwinkel Zylinder 2 | Grad KW | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A52 | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A54 | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A56 | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A58 | Tastverhaeltnis für Lambdasondenheizung | % | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A59 | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5A60 | Bedingung Bremslichtschalter betaetigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A61 | Bedingung Bremstestschalter betaetigt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A65 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A66 | Bedingung DMTL-Pumpenmotor an | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A67 | Bedingung DMTL-Magnetventil an | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A68 | Bedingung Heizung DMTL Portansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A69 | MIL-Ansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6B | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6C | Korrekturfaktor für die Kraftstoffmenge | % | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5A74 | Tastverhaeltnis Kennfeldthermostat | - | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A77 | ausgegebenes Tastverhaeltnis für Tankentlueftungsventil (16 Bit) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A78 | Bedingung Abgasklappe mit Resonator | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A7A | Tastverhaeltnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7B | Tastverhaeltnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A81 | Lambda-Regler-Ausgang (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5A85 | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5A91 | Amplitudenverhaeltnis laafh/laafv gefiltert | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x5A93 | Fehlerzaehler für Lernen Nullgang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A94 | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| 0x5A95 | [0] Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x5A96 | [0] Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| 0x5A97 | Bedi. Vanos Einlass im Anschlag | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A99 | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A9D | multiplikative Gemischkorrektur der Gemischadaption | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5AA1 | Zyklusflag: Tankentlueftungsventil Endstufe | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AA2 | Funktionsstatus-Zaehler DM-TL fuer Testerausgabe aus letztem Fahrzyklus | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AA4 | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AA9 | Tastverhaeltnis GLF System | % | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AAA | Tastverhaeltnis PWM Ansteuerung Oeldruck | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAB | Tastverhaeltnis an Endstufe des Ladedruckstellers | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AB0 | Ladedruck- Sollwert | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5AB1 | Fahrzeuggeschwindigkeit | km/h | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| 0x5AB3 | Zaehler fuer gefahrene Kilometer mit MIL EIN | km | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| 0x5AB4 | sekundengenauer Betriebsstundenzaehler als 32 Bitwert | s | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5AB6 | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5AB7 | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5AB8 | Spannung Drucksensor Saugrohrdruck (word) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABC | Luftmassenfluss gefiltert (Word) | kg/h | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5ABD | Bedingung automatischer Start | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AC2 | Reset Information  | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AC4 | Raildruck Kraftstoffsystem Sollwert | MPa | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x5AD5 | Kraftstofftemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x5AD6 | Bedingung Schubabschalten | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AE2 | Reset Information - Reset-group-ID of the last reset reason | 0-n | - | 0xFF | Reset_GrpID | 1 | 1 | 0 |
| 0x5AE3 | Reset Information - Reset-ID of the last reset | 0-n | - | 0xFFFF | Reset_ID | 1 | 1 | 0 |
| 0x5AE4 | Reset Information - User defined value of the last reset reason | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AEB | Kuehlmitteltemperatur < 98°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEC | 98°C =< Kuehlmitteltemperatur =< 112°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AED | 113°C =< Kuehlmitteltemperatur =< 120°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEE | 121°C =< Kuehlmitteltemperatur =< 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEF | Kuehlmitteltemperatur > 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF0 | Motoroeltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF1 | 80°C =< Motoroeltemperatur =< 110°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF2 | 110°C =< Motoroeltemperatur =< 135°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF3 | 135°C =< Motoroeltemperatur =< 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF4 | Motoroeltemperatur > 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF5 | Getriebeoeltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF6 | 80°C =< Getriebeoeltemperatur =< 109°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF7 | 110°C =< Getriebeoeltemperatur =< 124°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF8 | 125°C =< Getriebeoeltemperatur =< 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF9 | Getriebeoeltemperatur > 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFA | Umgebungstemperatur < 3°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFB | 3°C =< Umgebungstemperatur =< 19°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFC | 20°C =< Umgebungstemperatur =< 29°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFD | 30°C =< Umgebungstemperatur =< 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFE | Umgebungstemperatur > 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5B10 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B11 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B12 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B13 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B14 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B15 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B20 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B21 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B22 | Superklopfen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B23 | [0] Aussetzerzaehler im Abgasintervall Zyl. 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B25 | [2] Aussetzerzaehler im Abgasintervall Zyl. 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B31 | [1] Aussetzerzaehler im Abgasintervall Zyl. 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B32 | [3] Aussetzerzaehler im Abgasintervall Zyl. 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0xFFFF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR |
| 0xXY | ERROR_UNKNOWN |

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | pu_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Druck vor Drosselklappe | hPa | pvd_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| STAT_0x4206_WERT | 0x4206 | STAT_0x4206_WERT | [0] Massenstrom ueber Drosselklappe | kg/h | Msdk_i | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Motor-Temperatur | Grad C | tmot | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x4306_WERT | 0x4306 | STAT_0x4306_WERT | Quittung Solldrehzahl von EWP | rpm | Layer_nEwpDes | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4307_WERT | 0x4307 | STAT_0x4307_WERT | empf. Status von EWP | - | BasSvrAppl_stComPmp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4308_WERT | 0x4308 | STAT_0x4308_WERT | EWAPU Volumenstrom soll (gesamt) | 1/min | newpsoll | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4310_WERT | 0x4310 | STAT_0x4310_WERT | Solltemperatur Kuehlmittel | °C | Tkwsoll | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Oeltemperatur nach Filter | Grad C | toel_w | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoffverbrauch seit letztem Oelwechsel | - | ozkvbsm_ul | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | Oelkilometer | Km | ozoelkm | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Sensorrohwert Oelniveau | - | oznivr | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Sensorrohwert Oeltemperatur | - | oztempr | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Oeltemperatur ungefiltert | Grad C | oztemp_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Oelniveau ungefiltert in [mm] | - | ozniv | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | CodingDataSet-OeL-Laenderfaktor1- EEPROM | - | ozlf1c_eep | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | CodingDataSet-OeL-Laenderfaktor2- EEPROM | - | ozlf2c_eep | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Laenderfaktor 1 | - | ozlf1t | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Laenderfaktor 2 | - | ozlf2t | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzzeit-Oelniveau-Mittelwert für den DIS-Tester | - | oznivkrzt | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | - | ozrwkvb | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Oellaufzeit | month | ozoelzeit | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4418_WERT | 0x4418 | STAT_0x4418_WERT | Status Oelzustandssensor | - | ozstatus | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4420_WERT | 0x4420 | STAT_0x4420_WERT | Eingangstemperatur Oeldruckregler | Grad C | tpoelreg_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4421_WERT | 0x4421 | STAT_0x4421_WERT | Oeldruckregler P-Anteil | - | poelregp_w | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4422_WERT | 0x4422 | STAT_0x4422_WERT | Oeldruckregler I-Anteil | - | poelregi_w | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4423_WERT | 0x4423 | STAT_0x4423_WERT | Oeldruckregler D-Anteil | - | poelregd_w | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4424_WERT | 0x4424 | STAT_0x4424_WERT | Motoroelniveausensor Fehler | - | B_ozniverr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4425_WERT | 0x4425 | STAT_0x4425_WERT | Oz_tempsmpf | Grad C | oztempsmpf_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4426_WERT | 0x4426 | STAT_0x4426_WERT | Ist- Betriebsart Oeldruck Regelung | - | bapoelrist | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4427_WERT | 0x4427 | STAT_0x4427_WERT | Rueckmeldung auf Anfrage zur Oelniveaumessung bitcodiert | - | stoelnivena | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4428_WERT | 0x4428 | STAT_0x4428_WERT | Freigabe Funktion Oeldruck-Regler | 0/1 | B_poelfuncon | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4429_WERT | 0x4429 | STAT_0x4429_WERT | B_onqntmssg_anf | 0/1 | B_onqntmssganf | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x442A_WERT | 0x442A | STAT_0x442A_WERT | Motoroeltemperatur (Oz_temp) gueltig | - | B_oznivtemp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x442B_WERT | 0x442B | STAT_0x442B_WERT | B_on_antriebsart_cod | - | onantriebsartcod | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x442C_WERT | 0x442C | STAT_0x442C_WERT | Rohwert Oelniveau | mm | Oil_niveau | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x442D_WERT | 0x442D | STAT_0x442D_WERT | Korrigiertes Niveau aus TP in MinErk | mm | On_minerk_nivmw | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| STAT_0x442E_WERT | 0x442E | STAT_0x442E_WERT | Niv- Mittelwert QntMssg | mm | On_qntmssg_nivmw | - | unsigned integer | - | 0,29296875 | 1 | 0,0 |
| STAT_0x442F_WERT | 0x442F | STAT_0x442F_WERT | ABK Schnittstelle Oelniveau | - | SwSABMW_lenRelOilLvl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4430_WERT | 0x4430 | STAT_0x4430_WERT | LSB Status für On_oelniveau | - | St_oelniveau_lsb | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4431_WERT | 0x4431 | STAT_0x4431_WERT | MSB Status für On_oelniveau | - | SwSABMW_stOilLvlDescr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4432_WERT | 0x4432 | STAT_0x4432_WERT | Status des ÖNS- Komponententreibes | - | Oil_stKTResults | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4433_WERT | 0x4433 | STAT_0x4433_WERT | Status des ÖNS- Sensors | - | Oil_stSensor | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4434_WERT | 0x4434 | STAT_0x4434_WERT | Bedingung Niveaumessfehler vom Oelzustandssensor | - | B_oznivlerr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4436_WERT | 0x4436 | STAT_0x4436_WERT | Oeldruck Istwert (Absolutdruck) | hPa | P_oelist_abs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4500_WERT | 0x4500 | STAT_0x4500_WERT | Bedingung drehende Kurbelwelle erkannt | 0/1 | B_nmot | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4501_WERT | 0x4501 | STAT_0x4501_WERT | Offset Hubadaption | - | hubadmrofs_w | - | signed integer | - | 0,0010000000474974513 | 1 | 0,0 |
| SSPEI | 0x4505 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | Sollwinkel vom BMW Layer (Einlass-VANOS) | Grad KW | wnwsaeb_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x4506_WERT | 0x4506 | STAT_0x4506_WERT | Nockenwellenposition Einlass | Grad KW | wnwkwe_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4507_WERT | 0x4507 | STAT_0x4507_WERT | Nockenwellenposition Auslass | Grad KW | wnwkwa_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4508_WERT | 0x4508 | STAT_0x4508_WERT | Bedingung fuel-off Adaption im eingeschwungenen Bereich | 0/1 | B_fofr | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4509_WERT | 0x4509 | STAT_0x4509_WERT | Bedingung fuel-off Adaption für Katheizen | 0/1 | B_fofrkh | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x450C_WERT | 0x450C | STAT_0x450C_WERT | Adaption Kurbel/Einlassnockenwelle erfolgt | 0/1 | B_phade | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x450D_WERT | 0x450D | STAT_0x450D_WERT | Adaption Kurbel/Auslassnockenwelle erfolgt | 0/1 | B_phada | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x450E_WERT | 0x450E | STAT_0x450E_WERT | [0] Nullpunktverschiebg in Grad KW für die Winkelversatzdiagn., bedingt d. Toleranzen der Einbaulage | deg CrS | EpmCaS_phiDiffAvrgLim | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4510_WERT | 0x4510 | STAT_0x4510_WERT | Bedingung VVT-Lagereglerueberwachung hat bleibende Regelabweichung erkannt | 0/1 | B_dvvtregelabweichung | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4511_WERT | 0x4511 | STAT_0x4511_WERT | Bedingung VVT-Lageregler schwingt | 0/1 | B_dvvtschwingung | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4512_WERT | 0x4512 | STAT_0x4512_WERT | Bedingung: VVT Motor Ueberlast Warnschwelle | 0/1 | B_vvttempovl_wrn | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4513_WERT | 0x4513 | STAT_0x4513_WERT | Bedingung VVT-Ueberlastung (klemmender Steller) | 0/1 | B_vvttempovl | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4514_WERT | 0x4514 | STAT_0x4514_WERT | Bedingung VVT-Adaption moeglich | 0/1 | B_enadpvvt | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4515_WERT | 0x4515 | STAT_0x4515_WERT | Anforderung VVT-Anschlaglernen (intern) | - | vvtlrnaf | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4516_WERT | 0x4516 | STAT_0x4516_WERT | Status VVT-Anschlaglernen (intern) | - | vvtlrnst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4517_WERT | 0x4517 | STAT_0x4517_WERT | [0] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 0 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4518_WERT | 0x4518 | STAT_0x4518_WERT | [1] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 1 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4519_WERT | 0x4519 | STAT_0x4519_WERT | [2] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 2 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451A_WERT | 0x451A | STAT_0x451A_WERT | [3] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 3 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451B_WERT | 0x451B | STAT_0x451B_WERT | [4] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 4 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451C_WERT | 0x451C | STAT_0x451C_WERT | [5] Adaptierte Referenzposition einer NW-Flanke der Einlassnockenwelle Wert 5 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x451D_WERT | 0x451D | STAT_0x451D_WERT | Gesamtzeit VVT-Performancetest | - | vvtdtperf_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x451E_WERT | 0x451E | STAT_0x451E_WERT | Stromsumme VVT-Performancetest | A | ivvtsumperf_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4520_WERT | 0x4520 | STAT_0x4520_WERT | Effektive Motorleistung | - | peffm_w | - | unsigned integer | - | 0,0152587890625 | 1 | 0,0 |
| STAT_0x4521_WERT | 0x4521 | STAT_0x4521_WERT | Kraftstoffmassenstrom | kg/h | mkkgh_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4522_WERT | 0x4522 | STAT_0x4522_WERT | [0] Kraftstoff Einspritzzeit oder -menge Zylinder 1 | mg/Hub | mkhs_w | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| STAT_0x4523_WERT | 0x4523 | STAT_0x4523_WERT | [3] Kraftstoff Einspritzzeit oder -menge Zylinder 3 | mg/Hub | mkhs_w | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| STAT_0x4524_WERT | 0x4524 | STAT_0x4524_WERT | [6] Kraftstoff Einspritzzeit oder -menge Zylinder 4 | mg/Hub | mkhs_w | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| STAT_0x4525_WERT | 0x4525 | STAT_0x4525_WERT | [9] Kraftstoff Einspritzzeit oder -menge Zylinder 2 | mg/Hub | mkhs_w | - | unsigned integer | - | 0,021194782108068466 | 1 | 0,0 |
| STAT_0x452A_WERT | 0x452A | STAT_0x452A_WERT | Sollwert Auslassspreizung variable NWS BMW | Grad KW | wsprnwsa_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x452B_WERT | 0x452B | STAT_0x452B_WERT | Sollwert Einlassspreizung variable NWS BMW | Grad KW | wsprnwse_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x452C_WERT | 0x452C | STAT_0x452C_WERT | Istwert Auslassspreizung BMW | Grad KW | wsprnwa_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x452E_WERT | 0x452E | STAT_0x452E_WERT | Istwert Einlassspreizung BMW | Grad KW | wsprnwe_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4530_WERT | 0x4530 | STAT_0x4530_WERT | [0] Einspritzmodi Zylinderindividuell Zylinder 1 | - | InjMdChgA | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4531_WERT | 0x4531 | STAT_0x4531_WERT | [1] Einspritzmodi Zylinderindividuell Zylinder 3 | - | InjMdChgA | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4532_WERT | 0x4532 | STAT_0x4532_WERT | [2] Einspritzmodi Zylinderindividuell Zylinder 4 | - | InjMdChgA | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4533_WERT | 0x4533 | STAT_0x4533_WERT | [3] Einspritzmodi Zylinderindividuell Zylinder 2 | - | InjMdChgA | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4536_WERT | 0x4536 | STAT_0x4536_WERT | [0] Regeldifferenz Ladedruck - bankspezifisch Bank1 | hPa | Pld_diff_xeb | - | signed integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4538_WERT | 0x4538 | STAT_0x4538_WERT | [0] Mittlerer Versatz der aequidistanten Flanken der Nockenwelle | deg CrS | EpmCaS_phiDiffAvrg | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x4539_WERT | 0x4539 | STAT_0x4539_WERT | [1] Mittlerer Versatz der aequidistanten Flanken der Nockenwelle | deg CrS | EpmCaS_phiDiffAvrg | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | wdkba_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4602_WERT | 0x4602 | STAT_0x4602_WERT | Einlassventilhub (aus Exzenterwinkel gerechnet, mit Hub-Adaption und mit Hubpraediktion) | mm | Hubev_ist | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x4603_WERT | 0x4603 | STAT_0x4603_WERT | Sollwert Einlassventilhub gefiltert | mm | Hubev_soll | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generatorstrom | A | isgusmi_w | - | signed integer | - | 0,125 | 1 | 0,0 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator | - | isgusmchipvers | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | momentane Batteriespannung | V | ubt | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung; vom AD-Wandler erfaßter Wert  | V | wub_w | - | unsigned integer | - | 0,02348100021481514 | 1 | 0,0 |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | % | abschkor_w | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| STAT_0x460E_WERT | 0x460E | STAT_0x460E_WERT | Abstand zur Startfaehigkeit | % | dsoc_w | - | unsigned integer | - | 0,004000000189989805 | 1 | -100,0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | DF-Monitor für Batterie-Ladezustand in % | % | dfmonitor | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4613_WERT | 0x4613 | STAT_0x4613_WERT | vom Generator empfangene Generatorsollspannung (Kopie gesendeter Wert) | V | ufgen | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| STAT_0x4616_WERT | 0x4616 | STAT_0x4616_WERT | vom Generator empfangene Load response Zeit (Kopie gesendeter Wert) | s | tlrgen | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4617_WERT | 0x4617 | STAT_0x4617_WERT | gefiltertes Generatormoment absolut | Nm | isgusmm_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4618_WERT | 0x4618 | STAT_0x4618_WERT | Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_lroff | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4619_WERT | 0x4619 | STAT_0x4619_WERT | Bedingung BSD Protokollinhalt für BSD2 Regler | 0/1 | B_bsdprot2 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x461A_WERT | 0x461A | STAT_0x461A_WERT | Nominalspannung Regler Generator 1 | V | uregnom | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| STAT_0x461B_WERT | 0x461B | STAT_0x461B_WERT | Abschaltschwelle Loadresponse | 1/min | tlrgensch_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4650_WERT | 0x4650 | STAT_0x4650_WERT | Getriebetemperatur | Grad C | tget | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x4651_WERT | 0x4651 | STAT_0x4651_WERT | Tastverhältnis Wastegateanstuerung | % | tvldsten_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4653_WERT | 0x4653 | STAT_0x4653_WERT | Sensorspannung Positionssensor elektrisches Wastegate | V | ukrkp_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| STAT_0x4654_WERT | 0x4654 | STAT_0x4654_WERT | Rohwert Positionssensor elektrisches Wastegate | mm | elwgposri_w | - | signed integer | - | 9,765625E-4 | 1 | 0,0 |
| STAT_0x4680_WERT | 0x4680 | STAT_0x4680_WERT | Leerlaufdrehzahl gelernt | 0/1 | B_nggelernt | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4681_WERT | 0x4681 | STAT_0x4681_WERT | Getriebe ist bereit die Neutralposition anzulernen | 0/1 | B_ngimlf | - | unsigned char | - | 1 | 1 | 0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Bedingung Sonde betriebsbereit vor Kat | 0/1 | B_sbbvk | - | unsigned char | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Offset korrigierte Sondenspannung vor Kat einer Breitbandlambdasonde | V | ua10mo_w | - | unsigned integer | - | 4,8828125E-4 | 1 | 0,0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambdasoll Begrenzung (word) | - | lamsbg_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Bedingung Kupplungspedal betaetigt | 0/1 | B_kuppl | - | unsigned char | - | 1 | 1 | 0 |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Schalter Kupplung | 0/1 | S_kupp | - | unsigned char | - | 1 | 1 | 0 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Bedingung umschalten auf KFPEDS | 0/1 | B_pedsport | - | unsigned char | - | 1 | 1 | 0 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Bedingung für Kompressoreinschalten | 0/1 | B_koe | - | unsigned char | - | 1 | 1 | 0 |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Schalter Klemme 50 von CAN | 0/1 | S_ckl50 | - | unsigned char | - | 1 | 1 | 0 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motordrehzahl | 1/min | nmot_w | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlaufsolldrehzahl | 1/min | nsol_w | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Bedingung Leerlaufregelung | 0/1 | B_llr | - | unsigned char | - | 1 | 1 | 0 |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Wegstrecke_km auf 1km genau | - | kmstand_l | - | unsigned long | - | 1,0 | 1 | 0,0 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | normierter Fahrpedalwinkel | %PED | wped_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| STAT_0x480C_WERT | 0x480C | STAT_0x480C_WERT | Soll Relative Luftfuellung des Momentenmanagers | % | rlsol_w | - | unsigned integer | - | 0,0234375 | 1 | 0,0 |
| STAT_0x480D_WERT | 0x480D | STAT_0x480D_WERT | Fahrbahnlaengsneigung (geschätzt) in Grad | deg | neigl_w | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| STAT_0x480E_WERT | 0x480E | STAT_0x480E_WERT | Qualifier Fahrbahnlaengsneigung | - | neiglqual | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x480F_WERT | 0x480F | STAT_0x480F_WERT | Qualifier Fahrbahnquerneigung | - | neigqqual | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4810_WERT | 0x4810 | STAT_0x4810_WERT | Fahrbahnquerneigung (geschaetzt) in Grad | deg | neigq_w | - | unsigned integer | - | 0,05000000074505806 | 1 | -64,0 |
| STAT_0x4811_WERT | 0x4811 | STAT_0x4811_WERT | Fahrzeuglaengsbeschleunigung | m/s^2 | bfzglfgr | - | signed char | - | 0,21699999272823334 | 1 | 0,0 |
| STAT_0x4812_WERT | 0x4812 | STAT_0x4812_WERT | Fahrzeugquerbeschleunigung | m/s^2 | bfzgqoz_w | - | signed integer | - | 0,0015625000232830644 | 1 | 0,0 |
| STAT_0x4880_WERT | 0x4880 | STAT_0x4880_WERT | Max. Quotient Zuendwinkelwirkungsgrad-Fehlerintegral im Leerlauf bez. auf Schwellwert | % | etkhlmx | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| STAT_0x4881_WERT | 0x4881 | STAT_0x4881_WERT | Max. Quotient Zuendwinkelwirkungsgrad-Fehlerintegral im Teillast bez. auf Schwellwert | % | etkhtmx | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| STAT_0x4882_WERT | 0x4882 | STAT_0x4882_WERT | Zaehler Startabbrueche oder Ausgeher nach Schluesselstart, Lambda-Regler nicht aktiv | - | Zr_stabbr | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4883_WERT | 0x4883 | STAT_0x4883_WERT | Zaehler Startabbrueche oder Ausgeher gesamt | - | Zr_stabbr_ges | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4890_WERT | 0x4890 | STAT_0x4890_WERT | Status Manipulation | - | BasUtil_stECUMode | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4891_WERT | 0x4891 | STAT_0x4891_WERT | Deaktivierung des OBD Radars durch Erreichen der Grenzänderungshäufigkeit der NVRam-Variablen | - | SysDiag_flgObdObsvrSectChgEnbl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5800_WERT | 0x5800 | STAT_0x5800_WERT | Zeitzähler ab Startende (16bit) | s | tnse_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x5801_WERT | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | hPa | pu | - | unsigned char | - | 5,0 | 1 | 0,0 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | - | flglrs | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | relative Luftmasse (calc. load value) nach SAE J1979 | % | rml | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5805_WERT | 0x5805 | STAT_0x5805_WERT | Motortemperatur, linearisiert und umgerechnet | Grad C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda-Regler-Ausgang (Word) | - | fr_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Faktor aus Lambdaregelungsadaption für Bank 1 | - | frann_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IPSAU | 0x580B | STAT_SAUGROHRDRUCK_WERT | Saugrohr-Absolutdruck (Word) | hPa | ps_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Motordrehzahl | 1/min | nmot | - | unsigned char | - | 40,0 | 1 | 0,0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg | - | unsigned char | - | 1,25 | 1 | 0,0 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündwinkel Zylinder 1 | Grad KW | zwzyl1 | - | signed char | - | 0,75 | 1 | 0,0 |
| ITANS | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansaugluft-Temperatur | Grad C | tans | - | unsigned char | - | 0,75 | 1 | -48,0 |
| ILMKG | 0x5812 | STAT_LUFTMASSE_WERT | Massenstrom HFM 16-Bit Größe | kg/h | mshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | relative Luftfüllung | % | rl | - | unsigned char | - | 0,75 | 1 | 0,0 |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Normierter Fahrpedalwinkel | %PED | wped | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| IUK87 | 0x5815 | STAT_KL87_SPANNUNG_WERT | Batteriespannung | V | ub | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| STAT_0x5816_WERT | 0x5816 | STAT_0x5816_WERT | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | lamsons_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| ITUMG | 0x5817 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | Grad C | tumg | - | unsigned char | - | 0,75 | 1 | -48,0 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmassenfluß | kg/h | ml | - | unsigned char | - | 4,0 | 1 | 0,0 |
| STAT_0x5819_WERT | 0x5819 | STAT_0x5819_WERT | Motordrehzahl [1/min] | rpm | Epm_nEng | - | signed integer | - | 0,5 | 1 | 0,0 |
| STAT_0x581A_WERT | 0x581A | STAT_0x581A_WERT | Winkel Einlassventil oeffnet bezogen auf LWOT | Grad KW | wnwe_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x581B_WERT | 0x581B | STAT_0x581B_WERT | Sollwinkel Nockenwelle Einlass oeffnet | Grad KW | wnwse_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x581C_WERT | 0x581C | STAT_0x581C_WERT | Winkel Auslassventil schließt bezogen auf LWOT | Grad KW | wnwa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x581D_WERT | 0x581D | STAT_0x581D_WERT | Sollwinkel Nockenwelle Auslass schließt | Grad KW | wnwsa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x581E_WERT | 0x581E | STAT_0x581E_WERT | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | tanslin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | Status Klemme 15 | - | B_kl15_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergeraetetemperatur | Grad C | tsg | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | Oeltemperatur | Grad C | toel | - | unsigned char | - | 1,0 | 1 | -60,0 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Abstellzeit | s | tabst_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5825_WERT | 0x5825 | STAT_0x5825_WERT | Spannung BCU LIN | V | BcuEcu_u | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappenwinkel aus Poti 1 | %DK | wdk1 | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| STAT_0x5827_WERT | 0x5827 | STAT_0x5827_WERT | Tastverhaeltnis für Lambdasondenheizung | % | tahrlsu_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x5829_WERT | 0x5829 | STAT_0x5829_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomentaufnahme des Wandlers ueber CAN | % | mdwancan_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x582C_WERT | 0x582C | STAT_0x582C_WERT | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | lamzak_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| STAT_0x582D_WERT | 0x582D | STAT_0x582D_WERT | Korrekturwert der LSU-Spannung vor Kat | V | kusvk_w | - | signed integer | - | 4,8828125E-4 | 1 | 0,0 |
| STAT_0x582E_WERT | 0x582E | STAT_0x582E_WERT | Temperatur Getriebeoeltemperaturmodell | Grad C | SwSABMW_tTrsmModLimp | - | signed integer | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x582F_WERT | 0x582F | STAT_0x582F_WERT | Abgastemperatur nach Katalysator aus Modell | Grad C | tkatm | - | unsigned char | - | 5,0 | 1 | -50,0 |
| STAT_0x5830_WERT | 0x5830 | STAT_0x5830_WERT | Dynamikwert der LSU | - | dynlsu_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Zustand Motor-Koordinator | 0-n | CoEng_st | - | unsigned char | CoEng_st_COMPU_VERB | 1 | 1 | 0 |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck von Sensor | hPa | pur_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| STAT_0x5835_WERT | 0x5835 | STAT_0x5835_WERT | Kennung Generator Hersteller | - | isgusmherst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | gefilterter Drehzahlgradient | 1/min/s | ngfil | - | signed char | - | 100,0 | 1 | 0,0 |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Solldruck Hochdrucksystem | MPa | prsoll_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Relatives Moment für Aussetzererkennung | % | midmd | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Bedingung Sicherheitskraftstoffabschaltung (SKA) | 0/1 | B_dkpu | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansaugluft-Temperatur bei Start | Grad C | tansst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Fuellstand Kraftstofftank | L | fstt | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Batteriespannung; vom AD-Wandler erfasster Wert | V | wub | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| STAT_0x583D_WERT | 0x583D | STAT_0x583D_WERT | Betriebsstundenzaehler | min | top_w | - | unsigned integer | - | 6,0 | 1 | 0,0 |
| STAT_0x583E_WERT | 0x583E | STAT_0x583E_WERT | Dauer-RAM: Sollwert DK-Winkel in NLP-Stellung, bez. auf UMA | %DK | wdknlpr_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| STAT_0x583F_WERT | 0x583F | STAT_0x583F_WERT | Sollwert DK-Winkel, bezogen auf unteren Anschlag | %DK | wdks | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| STAT_0x5840_WERT | 0x5840 | STAT_0x5840_WERT | DK-Winkel der Notluftposition | %DK | wdknlp_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| RTSGR | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_ROH_WERT | Wert Temperatur Steuergerät | V | wtsg | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5842_WERT | 0x5842 | STAT_0x5842_WERT | Kennung Generatortyp | - | isgusmmakenn | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5843_WERT | 0x5843 | STAT_0x5843_WERT | Bedingung Startanforderung | - | B_staanf_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITGEE | 0x5844 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | Grad C | isgusmtchip_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x5845_WERT | 0x5845 | STAT_0x5845_WERT | Sondenspannung vor Kat einer Breitbandlambdasonde (ADC-Wert) | V | uulsuv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5846_WERT | 0x5846 | STAT_0x5846_WERT | Spannung PWG-Poti 1 (Word) | V | upwg1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5847_WERT | 0x5847 | STAT_0x5847_WERT | Spannung PWG-Poti 2 (Word) | V | upwg2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5849_WERT | 0x5849 | STAT_0x5849_WERT | ADC-Spannung Lambdasonde hinter Katalysator (Word) | V | ushk_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| STAT_0x584A_WERT | 0x584A | STAT_0x584A_WERT | Aktueller Status Generator | - | stisgusmstatus_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x584C_WERT | 0x584C | STAT_0x584C_WERT | Spannung DK-Poti 2 | V | udkp2_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | Massenstrom Tankentlueftung in das Saugrohr | kg/h | mste_w | - | unsigned integer | - | 3,906250058207661E-4 | 1 | 0,0 |
| STAT_0x584E_WERT | 0x584E | STAT_0x584E_WERT | Spannung DK-Poti 1 | V | udkp1_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| STAT_0x584F_WERT | 0x584F | STAT_0x584F_WERT | Erkennung Bordnetzinstabilitaet | - | statbnserr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5850_WERT | 0x5850 | STAT_0x5850_WERT | Signalspannung des Kuehlmitteltemperatursensors | V | utcw_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5852_WERT | 0x5852 | STAT_0x5852_WERT | Batteriestrom von IBS | A | BattuEcu_i | - | unsigned integer | - | 0,019999999552965164 | 1 | -200,0 |
| STAT_0x5853_WERT | 0x5853 | STAT_0x5853_WERT | Batt Spannung von IBS | V | BattuEcu_u | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5854_WERT | 0x5854 | STAT_0x5854_WERT | BattTemp von IBS | deg C | BattuEcu_t | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | schneller Mittelwert des Lambdaregelfaktors (Word) | - | frm_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5857_WERT | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | isgusmierr_w | - | unsigned integer | - | 0,0012499999720603228 | 1 | 0,0 |
| STAT_0x5858_WERT | 0x5858 | STAT_0x5858_WERT | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | wdkba | - | unsigned char | - | 0,3921568691730499 | 1 | 0,0 |
| STAT_0x5859_WERT | 0x5859 | STAT_0x5859_WERT | Pumpenstrom Referenzleck | mA | iptrefr_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x585A_WERT | 0x585A | STAT_0x585A_WERT | min. Pumpenstrom bei Grobleckmessung | mA | iptglmn_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x585B_WERT | 0x585B | STAT_0x585B_WERT | Pumpenstrom am Ende der Feinstleckmessung | mA | iptkl_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| IRLN1 | 0x585C | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_OBERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned char | - | 512,0 | 1 | 0,0 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | Istwert (word) Innenwiderstand Ri-Nernstzelle der Lambdasonde hinter KAT | Ohm | rinh_w | - | unsigned char | - | 2,0 | 1 | 0,0 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned char | - | 10,0 | 1 | 0,0 |
| STAT_0x5862_WERT | 0x5862 | STAT_0x5862_WERT | Sollwert Oeldruck | kPa | poels_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | Innenwiderstand der Nernstzelle der LSU | Ohm | rinlsu_w | - | unsigned char | - | 0,0390625 | 1 | 0,0 |
| STAT_0x5865_WERT | 0x5865 | STAT_0x5865_WERT | Langzeit-Oelniveau-Mittelwert für den DIS-Tester | - | oznivlangt | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IFSOE | 0x5866 | STAT_FUELLSTAND_MOTOROEL_WERT | Relativer Fuellstand des Motoroels | - | oelstandr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5867_WERT | 0x5867 | STAT_0x5867_WERT | Fahrstrecke des Fahrzeugs als Information ueber CAN | Km | kmstand | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | statsvreg1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | statsvreg2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x586A_WERT | 0x586A | STAT_0x586A_WERT | aktuelle Batteriespannung | V | ubatt_w | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit, indem der Ruhestrom bei 80..200mA liegt | min | t2hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit, indem der Ruhestrom bei 200..1000mA liegt | min | t3hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit, indem der Ruhestrom groeßer als 1000mA liegt | min | t4hstshort | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| STAT_0x586F_WERT | 0x586F | STAT_0x586F_WERT | Oeldruck | hPa | poel_w | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5870_WERT | 0x5870 | STAT_0x5870_WERT | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | udsu_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5871_WERT | 0x5871 | STAT_0x5871_WERT | Zaehler Pruefzustand für VVT Endstufenpruefung | - | dvestanznmotctr | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5872_WERT | 0x5872 | STAT_0x5872_WERT | Reglerversion on Generator 1 | - | bsdgenregv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5874_WERT | 0x5874 | STAT_0x5874_WERT | ADC-Spannung Pumpenstrom Tankdiagnose | V | urptes_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| STAT_0x5875_WERT | 0x5875 | STAT_0x5875_WERT | Indiziertes Soll-Motormoment MSR | % | mimsr_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5876_WERT | 0x5876 | STAT_0x5876_WERT | Schnittstelle für Scan Tool Mode $01/$02 Raildruck Rohwert PID$23 | MPa | prrohr_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x5877_WERT | 0x5877 | STAT_0x5877_WERT | Rotorposition VVT-Motor | ° | vvtrotwn_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | I-Anteil der stetigen LRSHK Variante kontinuierlich | - | dlahi_w | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x587B_WERT | 0x587B | STAT_0x587B_WERT | Soll-Bestromung VVT-Motor | A | ivvtlrs_w | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x587C_WERT | 0x587C | STAT_0x587C_WERT | Periodendauer des Nullgangsensorsignals | ms | GbxNPos_tiPwmPer | - | unsigned integer | - | 9,999999747378752E-5 | 1 | 0,0 |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Status Nullgangsensor | - | stngang | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhaeltnis E-Luefter | % | taml | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5880_WERT | 0x5880 | STAT_0x5880_WERT | Tastverhaeltnis GLF System | % | glfpwm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motorstarttemperatur | Grad C | tmst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | [0] Spannung Klopfwerte Zylinder 1 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Begrenzter Erregerstrom Generator1 | A | ierrfgrenz | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | [1] Spannung Klopfwerte Zylinder 3 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5887_WERT | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | - | isgusmdf_w | - | unsigned integer | - | 0,004999999888241291 | 1 | 0,0 |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | [2] Spannung Klopfwerte Zylinder 4 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned integer | - | 2,44140625E-4 | 1 | 0,0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit nach Startende | s | tnst_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur der LSU | Grad C | tkerlsu_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit Leckmessung | s | tdmlka_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom Tankdiagnose | mA | iptes_w | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Kupplungsmotormoment Istwert | Nm | mkist_w | - | signed integer | - | 0,5 | 1 | 0,0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Indiziertes Soll-Motormoment GS für schnellen Eingriff | % | migs_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | [3] Spannung Klopfwerte Zylinder 2 | V | rkr_w | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Hauptkat aus Modell | Grad C | tanhkm_w | - | unsigned integer | - | 0,0234375 | 1 | -273,1499938964844 |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | phys. Wert Generatorsollspannung (Volt) für Komponententreiber Generator | V | Isgusmusoll | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5899_WERT | 0x5899 | STAT_0x5899_WERT | Bedingung Anforderung Motorrelais einschalten | - | B_amtr_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x589A_WERT | 0x589A | STAT_0x589A_WERT | Tastverhaeltnis Nullgangsensor | % | tngang_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x589B_WERT | 0x589B | STAT_0x589B_WERT | Bedingung unzulaessig hoher Motorstrom bei Kurzschluss erkannt | - | B_ivvtkse_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x589C_WERT | 0x589C | STAT_0x589C_WERT | Bedingung Freigabe VVT-Endstufe | - | B_vvten_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x589E_WERT | 0x589E | STAT_0x589E_WERT | Sollwert Exzenterwinkel VVT | Grad | exwinks_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x589F_WERT | 0x589F | STAT_0x589F_WERT | Batterietemperatur | Grad C | tbatt | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0x58A0_WERT | Entladung waehrend Ruhestromverletzung | Ah | qiruhe2_w | - | unsigned integer | - | 0,018204445019364357 | 1 | 0,0 |
| STAT_0x58A1_WERT | 0x58A1 | STAT_0x58A1_WERT | Umweltbedingung Kilometerstand für Fehlerspeichereintrag | Km | kmstfsp_w | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0x58A2_WERT | Istwert Exzenterwinkel VVT | Grad | exwnki_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0x58A3_WERT | rel. Exzenterwinkel am oberen mech. Anschlag | Grad | exwnkoar_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0x58A6_WERT | Relativer Exzenterwinkel | Grad | exwnkr_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A7_WERT | 0x58A7 | STAT_0x58A7_WERT | Abstellzeit aus relativem Minutenzaehler bis Motorstart | min | tabsmn_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58A8_WERT | 0x58A8 | STAT_0x58A8_WERT | rel. Exzenterwinkel am unteren mech. Anschlag | Grad | exwnkuar_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | VVT Verstellbereich aus Urlernvorgang | Grad | exwnkvb_ur_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Verstellbereich des Exzenterwinkels | Grad | exwnkvb_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58AB_WERT | 0x58AB | STAT_0x58AB_WERT | DLR für DV-E: Summe der PID-Anteile | % | dlrspid_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x58AC_WERT | 0x58AC | STAT_0x58AC_WERT | Klemmenspannung E-Maschine | V | Isgusm_uist | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x58AD_WERT | 0x58AD | STAT_0x58AD_WERT | Sauerstoffspeichervermögen des Katalysators, temperatur- und luftmassenstrombezogen | mg | oscdktt_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58AE_WERT | 0x58AE | STAT_0x58AE_WERT | Peridendauer für Massenstrom aus HFM | us | tpmshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | EKP-Sollvolumenstrom | l | vssekp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | Zaehler für Lerndauer eines Lernsteps | - | lrnstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | [0] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 1 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ3 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | [1] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 3 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ4 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | [2] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 4 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IZFZ2 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | [3] Diagnose Zuendung: Brenndauer des Zuendfunkens aus dem HW-nahen SW-RAM, Zylinder 2 | ms | dztbd_w | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | aktueller Bremsdruck | - | pbrems | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Motordrehzahl in der Funktionsueberwachung | 1/min | MoF_nEng | - | unsigned char | - | 40,0 | 1 | 0,0 |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalsollwert (8 Bit) in der Funktionsueberwachung | V | MoF_uAPP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x58BA_WERT | 0x58BA | STAT_0x58BA_WERT | Bank mittel eingespritzte effektive relative Kraftstoffmasse (inkl. Reduzierstufe) | % | rkmeeff_w | - | unsigned integer | - | 0,046875 | 1 | 0,0 |
| STAT_0x58BB_WERT | 0x58BB | STAT_0x58BB_WERT | Strom für VVT-Motor | A | ivvtm_w | - | signed integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | relative Luftfuellung in der Funktionsueberwachung | % | rl_um | - | unsigned char | - | 0,75 | 1 | 0,0 |
| STAT_0x58BD_WERT | 0x58BD | STAT_0x58BD_WERT | Status Fehler Ueberlast VVT1 | - | stdvovrld | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58BE_WERT | 0x58BE | STAT_0x58BE_WERT | DV-E-Adaption: Status Pruefbedingungen | - | dveadchst | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | VVT-Endstufentemperatur aus Modell | Grad C | tvvtes_w | - | unsigned integer | - | 0,75 | 1 | -48,0 |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | geforderte Drehmomentaenderung von der LLR (I-Anteil) | % | dmllri_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x58C9_WERT | 0x58C9 | STAT_0x58C9_WERT | Ansteuerungsmodus für den VVT Motor | - | vvtmode | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | geforderte MD-Aenderung von der LLR (PD-Zuendungsanteil) | % | dmllrz_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | Aufsummierte thermische Belastung VVT | - | dvvttempovl | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Tastverhältnis zur Ansteuerung des VVT-Stellmotors | % | tvvvtm_w | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| STAT_0x58CD_WERT | 0x58CD | STAT_0x58CD_WERT | Spannung hinter VVT/Motor-Relais | V | umtr | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58CE_WERT | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | funst_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Momentenanforderung vom Getriebe in der Funktionsueberwachung | Nm | MoF_trqClthTra16 | - | signed integer | - | 0,0625 | 1 | 0,0 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Berechnetes Ist-Moment in der Funktionsueberwachung | % | MoF_rTrqInrAct | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58D2_WERT | 0x58D2 | STAT_0x58D2_WERT | Status Luftklappensystem High Byte | - | state_glf_sys_hb | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0x58D3_WERT | Status Luftklappensystem Low Byte | - | state_glf_sys_lb | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Startbedingung Kraftschluss erfuellt | 0/1 | B_kupp1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0x58D5_WERT | physikalischer Temperaturwert, der sich bei Wandlung der elektrischen Sensorspannung wtfa1_w ergibt | Grad C | tfa1lin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x58D7_WERT | 0x58D7 | STAT_0x58D7_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0x58D8_WERT | Differenz-DK-Winkel Sollwert - Istwert (wdkdlr_w - wdkba_w) | %DK | dwdkdlr_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Schrittzaehler DK-Rückstellfeder-Pruefung | - | fprstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | koordiniertes Moment für Fuellung | % | milsol_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x58DB_WERT | 0x58DB | STAT_0x58DB_WERT | Fehlerzaehler Summe, zaehlt abgasrelevante Aussetzer ueber alle Zylinder | - | fzabgs_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58DC_WERT | 0x58DC | STAT_0x58DC_WERT | Intervallzaehler für abgasrelevante Aussetzer | - | ivzabg_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58DD_WERT | 0x58DD | STAT_0x58DD_WERT | Druck vor Drosselklappe Rohwert | hPa | pvdr_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| STAT_0x58DE_WERT | 0x58DE | STAT_0x58DE_WERT | Spannung Drucksensor vor Drosselklappe | V | udsvd_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0x58E0_WERT | Abgleich DK-Modell (Faktor) | - | eisydkfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0x58E1_WERT | Abgleich DK-Modell (Offset) HIGH Byte | kg/h | eisydkkoff | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0x58E2_WERT | Abgleich EV-Modell (Faktor) | - | eisyevfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0x58E3_WERT | Abgleich EV-Modell (Offset) HIGH Byte | kg/h | eisyevkoff | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58E5_WERT | 0x58E5 | STAT_0x58E5_WERT | [0] Gefilterte Funkenbrenndauer Zylinder 1 | ms | dztbd_fil | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x58E6_WERT | 0x58E6 | STAT_0x58E6_WERT | [1] Gefilterte Funkenbrenndauer Zylinder 3 | ms | dztbd_fil | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x58E7_WERT | 0x58E7 | STAT_0x58E7_WERT | [2] Gefilterte Funkenbrenndauer Zylinder 4 | ms | dztbd_fil | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x58E8_WERT | 0x58E8 | STAT_0x58E8_WERT | [3] Gefilterte Funkenbrenndauer Zylinder 2 | ms | dztbd_fil | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | Versorgungsspannung elektr. | V | BasSvrAppl_uSplyPmp | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| INWAP | 0x58EA | STAT_WASSERPUMPE_DREHZAHL_WERT | Istdrehzahl elektr. Wasserpumpe | 1/min | BasSvrAppl_nActPmp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITWAE | 0x58EC | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | Elektroniktemperatur elektr. | Grad C | BasSvrAppl_tPmp | - | unsigned char | - | 1,0 | 1 | -50,0 |
| IIWAP | 0x58ED | STAT_WASSERPUMPE_STROM_WERT | Stromaufnahme elektr. | A | BasSvrAppl_iPmp | - | unsigned char | - | 0,5 | 1 | 0,0 |
| STAT_0x58EF_WERT | 0x58EF | STAT_0x58EF_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0x58F0_WERT | ungefilterter Raildruck Istwert (abs.) | MPa | prroh_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x58F2_WERT | 0x58F2 | STAT_0x58F2_WERT | PWM signal for the VCV | % | PWM_VCV | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0x58F3_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0x58F4_WERT | Spannung Kraftstoffniederdrucksensor im 1 ms Raster | V | upnd1ms_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0x58F5_WERT | Spannung Diagnose-Port VVT-Ansteuerung (3V ADC) | V | uvvtdia3V | - | unsigned char | - | 0,012890624813735485 | 1 | 0,0 |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0x58F6_WERT | Sollspannung des VVT Lagereglers | V | uvvtlrs_w | - | signed integer | - | 7,812500116415322E-4 | 1 | 0,0 |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0x58F7_WERT | Statusbyte Strommessung plausibel | - | vvtipl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58F8_WERT | 0x58F8 | STAT_0x58F8_WERT | Zeitdauer anliegende Erregerstrombegrenzung | - | Isgusmierrgrenzz | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x58F9_WERT | 0x58F9 | STAT_0x58F9_WERT | Maschinen-Typ | - | Lin_stISGTyp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | gefilterter Faktor Tankentlueftungs-Adaption | - | fteadf | - | signed char | - | 0,5 | 1 | 0,0 |
| STAT_58FC_WERT | 0x58FC | STAT_58FC_WERT | Fertigungs-Werkstatt-,Transportmodus | - | fetrawemod | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5900_WERT | 0x5900 | STAT_0x5900_WERT | Gefiltertes zusaetzlicher Sondendelay Mager-Fett, Sonde 2 | s | dtlrfS2_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x5901_WERT | 0x5901 | STAT_0x5901_WERT | Gefiltertes zusaetzlicher Sondendelay Fett-Mager, Sonde 2 | s | dtrlfS2_w | - | unsigned integer | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x5904_WERT | 0x5904 | STAT_0x5904_WERT | [1] IBS Status-/Fehlerbyte 1 | - | BattuEcu_stInfoDiag | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5905_WERT | 0x5905 | STAT_0x5905_WERT | [2] IBS Status-/Fehlerbyte 2 | - | BattuEcu_stInfoDiag | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x591F_WERT | 0x591F | STAT_0x591F_WERT | Abgleich Drosselklappenmodell (Offset) LOW Byte | - | SwSABMW_AdjmtThrVlvMdl | - | signed char | - | 0,25 | 1 | 0,0 |
| STAT_0x5920_WERT | 0x5920 | STAT_0x5920_WERT | Abgleich Einlassventilmodell (Offset)  LOW Byte | - | SwSABMW_AdjmtIntkVlvMdl | - | signed char | - | 0,25 | 1 | 0,0 |
| STAT_0x5927_WERT | 0x5927 | STAT_0x5927_WERT | Ist Position Elektrisches Wastegate | % | SwSABMW_ratPosWgeTst | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x592A_WERT | 0x592A | STAT_0x592A_WERT | Motordrehzahl, hochaufgelöst | rpm | Epm_nEng10ms | - | signed integer | - | 0,5 | 1 | 0,0 |
| STAT_0x592B_WERT | 0x592B | STAT_0x592B_WERT | Pulsbreite DGI-Sensor min | us | EpmCrS_tiPlsDgiMin | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x592C_WERT | 0x592C | STAT_0x592C_WERT | Pulsbreite DGI-Sensor max | us | EpmCrS_tiPlsDgiMax | - | signed long | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x592D_WERT | 0x592D | STAT_0x592D_WERT | KW-Winkelversatz im Motorstart | deg CrS | Epm_phiDiffRRS | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x592E_WERT | 0x592E | STAT_0x592E_WERT | Motorabstellposition | deg CrS | EpmRRS_phiEngStop | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x592F_WERT | 0x592F | STAT_0x592F_WERT | Status Synchronisationsmodul | 0-n | Epm_stSync | - | unsigned char | Epm_stSync_State_t | 1 | 1 | 0 |
| STAT_0x5938_WERT | 0x5938 | STAT_0x5938_WERT | Ethanolgehalt - Rohwert vom Sensor | - | fethr_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5939_WERT | 0x5939 | STAT_0x5939_WERT | Ethanolgehalt am Einspritzventil | - | fethev_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x593A_WERT | 0x593A | STAT_0x593A_WERT | Gesamte Masse Benzin und Alkohol im Öl | g | mkioel_w | - | unsigned integer | - | 0,02133333310484886 | 1 | 0,0 |
| STAT_0x5945_WERT | 0x5945 | STAT_0x5945_WERT | Anzahl der VVT Notlaeufe bis zum Tausch | - | anznlvvtaust_eep | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5946_WERT | 0x5946 | STAT_0x5946_WERT | Anzahl der VVT Notlaeufe | - | anzvvtnlanfh_eep | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5948_WERT | 0x5948 | STAT_0x5948_WERT | Korrekturfaktor Kraftstoffmischung für Einspritzzeit | - | ffueli_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5953_WERT | 0x5953 | STAT_0x5953_WERT | Zaehler fuer Intervalle mit kritischen ZMS-Stoerungen lesen | - | MisfDet_CntrItvlCritDsbcDmf | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5954_WERT | 0x5954 | STAT_0x5954_WERT | Zaehler für Intervalle mit kritischen ZMS-Stoerungen ueber Lebenszeit lesen | - | MisfDet_CntrItvlCritDsbcDmfLfTi | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5A02_WERT | 0x5A02 | STAT_0x5A02_WERT | ATL-Leckagediagnose laeuft | 0/1 | B_atlberlek | - | unsigned char | - | 1 | 1 | 0 |
| IUPW1 | 0x5A04 | STAT_PWG1_SPANNUNG_WERT | Spannung PWG-Poti 1 | V | upwg1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW2 | 0x5A05 | STAT_PWG2_SPANNUNG_WERT | Spannung PWG-Poti 2 | V | upwg2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUDK1 | 0x5A06 | STAT_DK1_SPANNUNG_WERT | Spannung DK-Poti 1 | V | udkp1_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| IUDK2 | 0x5A07 | STAT_DK2_SPANNUNG_WERT | Spannung DK-Poti 2 | V | udkp2_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| IUANS | 0x5A08 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannungswert des Ansauglufttemperatursensors tfa1 | V | wtfa1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKUM | 0x5A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Signalspannung des Kuehlmitteltemperatursensor | V | utcw_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUUMG | 0x5A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung Umgebungsdrucksensor (word 10-Bit von ADC) | V | udsu_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Wert Temperatur Steuergeraet | V | wtsg | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| IUSV1 | 0x5A11 | STAT_SONDENSPANNUNG_VORKAT_WERT | Spannung Lambdasonde vor Katalysator | V | uulsuv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN1 | 0x5A13 | STAT_SONDENSPANNUNG_NACHKAT_WERT | Spannung Lambdasonde hinter Katalysator | V | ushk_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| IUDMT | 0x5A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Pumpenstrom Tankdiagnose | V | uptes_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5A1B_WERT | 0x5A1B | STAT_0x5A1B_WERT | Elektrische Kraftstoffpumpe | 0/1 | B_ekp | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A1D_WERT | 0x5A1D | STAT_0x5A1D_WERT | Spannung Bremsenunterdruck | V | udsbkv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5A1E_WERT | 0x5A1E | STAT_0x5A1E_WERT | Differenz zwischen Umgebungsdruck und Bremskraftverstaerkerdruck von Drucksensor (Rohwert) | hPa | dpbkvur_w | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| STAT_0x5A20_WERT | 0x5A20 | STAT_0x5A20_WERT | Peridendauer für Massenstrom aus HFM | us | tpmshfm_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| ITKUA | 0x5A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kuehlmitteltemperatur (Sensorwert) nach Tiefpassfilterung | Grad C | tmotlinf | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5A23_WERT | 0x5A23 | STAT_0x5A23_WERT | Sollwert Oeldruck | kPa | poels_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x5A24_WERT | 0x5A24 | STAT_DK_WINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel, bezogen auf (unteren) Anschlag | % | wdks_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5A25_WERT | 0x5A25 | STAT_0x5A25_WERT | Oeldruck | hPa | poel_w | - | signed integer | - | 1,0 | 1 | 0,0 |
| RFPWG | 0x5A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | normierter Fahrpedalwinkel | %PED | wped_w | - | unsigned integer | - | 0,0015259021893143654 | 1 | 0,0 |
| STAT_0x5A2B_WERT | 0x5A2B | STAT_0x5A2B_WERT | physikalischer Temperaturwert, ergibt sich bei Wandlung der tiefpassgefilterten Sensorspg. wtfa1f_w | Grad C | tfa1linf | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5A2D_WERT | 0x5A2D | STAT_0x5A2D_WERT | Saugrohr-Absolutdruck gemessen | hPa | psrg_w | - | unsigned integer | - | 0,078125 | 1 | 0,0 |
| STAT_0x5A2E_WERT | 0x5A2E | STAT_0x5A2E_WERT | Ungefilterter Niederdruck Rohwert | kPa | pistndr_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x5A2F_WERT | 0x5A2F | STAT_0x5A2F_WERT | Gefilterter Raildruck-Istwert (Absolutdruck) | MPa | prist_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| ILUZ1 | 0x5A30 | STAT_LAUFUNRUHE_ZYL1_WERT | [0] Laufunruhe Zylinder 1 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| ILUZ4 | 0x5A32 | STAT_LAUFUNRUHE_ZYL4_WERT | [2] Laufunruhe Zylinder 4 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| ILUZ3 | 0x5A34 | STAT_LAUFUNRUHE_ZYL3_WERT | [1] Laufunruhe Zylinder 3 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| ILUZ2 | 0x5A35 | STAT_LAUFUNRUHE_ZYL2_WERT | [3] Laufunruhe Zylinder 2 | (Umdr./sec)^2 | lutskzyl_w | - | signed integer | - | 0,007105452008545399 | 1 | 0,0 |
| ISKLO | 0x5A36 | STAT_STATUS_KLOPFEN_WERT | Bedingung für erkannte Klopfer | 0/1 | B_kl | - | unsigned char | - | 1 | 1 | 0 |
| IUKZ1 | 0x5A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | [0] normierter Referenzpegel Klopfregelung Zylinder 1 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ4 | 0x5A39 | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | [2] normierter Referenzpegel Klopfregelung Zylinder 4 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ3 | 0x5A3B | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | [1] normierter Referenzpegel Klopfregelung Zylinder 3 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKZ2 | 0x5A3C | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | [3] normierter Referenzpegel Klopfregelung Zylinder 2 | V | rkrnv6_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IZWZ1 | 0x5A49 | STAT_ZUENDWINKEL_ZYL1_WERT | [0] Zuendwinkel Zylinder 1 | Grad KW | zwoutzyl_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IZWZ3 | 0x5A4A | STAT_ZUENDWINKEL_ZYL3_WERT | [1] Zuendwinkel Zylinder 3 | Grad KW | zwoutzyln_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IZWZ4 | 0x5A4C | STAT_ZUENDWINKEL_ZYL4_WERT | [2] Zuendwinkel Zylinder 4 | Grad KW | zwoutzyln_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IZWZ2 | 0x5A4D | STAT_ZUENDWINKEL_ZYL2_WERT | [3] Zuendwinkel Zylinder 2 | Grad KW | zwoutzyln_w | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IRNK1 | 0x5A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Bedingung Sonde betriebsbereit hinter Kat | 0/1 | B_sbbhk | - | unsigned char | - | 1 | 1 | 0 |
| ISHN1 | 0x5A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Bedingung Sonde hinter Kat ausreichend beheizt | 0/1 | B_hsha | - | unsigned char | - | 1 | 1 | 0 |
| ISHV1 | 0x5A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Bedingung: Heizerstatus A liegt vor, Sonde ist ausreichend aufgeheizt | 0/1 | B_hstlsua | - | unsigned char | - | 1 | 1 | 0 |
| IAHV1 | 0x5A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Tastverhaeltnis für Lambdasondenheizung | % | tahrlsu_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| IAHN1 | 0x5A59 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | normierte Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| ISBLS | 0x5A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bedingung Bremslichtschalter betaetigt | 0/1 | B_bl | - | unsigned char | - | 1 | 1 | 0 |
| ISBLT | 0x5A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bedingung Bremstestschalter betaetigt | 0/1 | B_br | - | unsigned char | - | 1 | 1 | 0 |
| ISAGK | 0x5A65 | STAT_ABGASKLAPPE_EIN_WERT | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | 1 | 1 | 0 |
| ISDMP | 0x5A66 | STAT_DMTL_PUMPE_EIN_WERT | Bedingung DMTL-Pumpenmotor an | 0/1 | B_admtpm | - | unsigned char | - | 1 | 1 | 0 |
| ISDMV | 0x5A67 | STAT_DMTL_VENTIL_EIN_WERT | Bedingung DMTL-Magnetventil an | 0/1 | B_admtmv | - | unsigned char | - | 1 | 1 | 0 |
| ISDMH | 0x5A68 | STAT_DMTL_HEIZUNG_EIN_WERT | Bedingung Heizung DMTL Portansteuerung | 0/1 | B_hdmtlp | - | unsigned char | - | 1 | 1 | 0 |
| ISMIL | 0x5A69 | STAT_MIL_EIN_WERT | MIL-Ansteuerung | 0/1 | B_mil | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A6A_WERT | 0x5A6A | STAT_0x5A6A_WERT | Lampe FGR Ein | 0/1 | B_fgr | - | unsigned char | - | 1 | 1 | 0 |
| ISCEL | 0x5A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Bedingung für Ansteuerung EGAS-Fehlerlampe | 0/1 | B_epcl | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A6C_WERT | 0x5A6C | STAT_0x5A6C_WERT | Korrekturfaktor für die Kraftstoffmenge | % | kva_korr | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| IAKFT | 0x5A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Tastverhaeltnis Kennfeldthermostat | - | tkwpwm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IATEV | 0x5A77 | STAT_TEV_PWM_WERT | ausgegebenes Tastverhaeltnis für Tankentlueftungsventil (16 Bit) | % | tateout_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IAAGK | 0x5A78 | STAT_ABGASKLAPPE_ANSTEUERUNG_WERT | Bedingung Abgasklappe mit Resonator | 0/1 | B_akr | - | unsigned char | - | 1 | 1 | 0 |
| IAVEP | 0x5A7A | STAT_VANOS_EINLASS_PWM_WERT | Tastverhaeltnis Einlaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwree_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IAVAP | 0x5A7B | STAT_VANOS_AUSLASS_PWM_WERT | Tastverhaeltnis Auslaßnockenwellenregelung Ansteuerung Endstufe(word) | % | tanwraa_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IINT1 | 0x5A81 | STAT_INTEGRATOR_BANK1_WERT | Lambda-Regler-Ausgang (Word) | - | fr_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IMUL1 | 0x5A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | multiplikative Gemischkorrektur der Gemischadaption (Word) | - | fra_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5A91_WERT | 0x5A91 | STAT_0x5A91_WERT | Amplitudenverhaeltnis laafh/laafv gefiltert | - | avkatf | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| STAT_0x5A93_WERT | 0x5A93 | STAT_0x5A93_WERT | Fehlerzaehler für Lernen Nullgang | - | GbxNPos_ctDefPlausDia | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SANWA | 0x5A94 | STAT_NW_AUSLASS_SOLL_WERT | gespeicherter Nockenwellensollwinkel Auslaß | Grad KW | wnwsswa_w | - | signed integer | - | 0,0078125 | 1 | 0,0 |
| IANWA | 0x5A95 | STAT_NW_ADAPTION_AUSLASS_WERT | [0] Adaptionswert Nockenwelle Auslass Bank 1 | deg CrS | EpmCaS_phiAdapRefPosO1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| IANWE | 0x5A96 | STAT_NW_ADAPTION_EINLASS_WERT | [0] Adaptionswert Nockenwelle Einlass Bank 1 | deg CrS | EpmCaS_phiAdapRefPosI1_mp | - | signed integer | - | 0,02197265625 | 1 | 0,0 |
| STAT_0x5A97_WERT | 0x5A97 | STAT_0x5A97_WERT | Bedi. Vanos Einlass im Anschlag | 0/1 | B_vseansch | - | unsigned char | - | 1 | 1 | 0 |
| IAKWF | 0x5A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5A9D_WERT | 0x5A9D | STAT_0x5A9D_WERT | multiplikative Gemischkorrektur der Gemischadaption | - | frai_w | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IDSLS | 0x5AA1 | STAT_SLS_DIAGNOSE_WERT | Zyklusflag: Tankentlueftungsventil Endstufe | - | Z_teve_byte | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDTEV | 0x5AA2 | STAT_TEV_DIAGNOSE_WERT | Funktionsstatus-Zaehler DM-TL fuer Testerausgabe aus letztem Fahrzyklus | - | stpdmtla | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDLSS | 0x5AA4 | STAT_LS_DIAGNOSE_WERT | Funktionsstatus LLRNS bei Anforderung Systemcheck | - | llsstat | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AA9_WERT | 0x5AA9 | STAT_0x5AA9_WERT | Tastverhaeltnis GLF System | % | glfpwm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AAA_WERT | 0x5AAA | STAT_0x5AAA_WERT | Tastverhaeltnis PWM Ansteuerung Oeldruck | % | tvpoel_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAB_WERT | 0x5AAB | STAT_0x5AAB_WERT | Tastverhaeltnis an Endstufe des Ladedruckstellers | % | tvldste_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AB0_WERT | 0x5AB0 | STAT_0x5AB0_WERT | Ladedruck- Sollwert | hPa | psolldr_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IVKMH | 0x5AB1 | STAT_GESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit | km/h | vfzg_w | - | unsigned integer | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5AB3_WERT | 0x5AB3 | STAT_0x5AB3_WERT | Zaehler fuer gefahrene Kilometer mit MIL EIN | km | DSMDur_ctPID21h | - | unsigned long | - | 0,009999999776482582 | 1 | 0,0 |
| IZBST | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | sekundengenauer Betriebsstundenzaehler als 32 Bitwert | s | topcod_l | - | unsigned long | - | 0,10000000149011612 | 1 | 0,0 |
| RTANS | 0x5AB6 | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Ansauglufttemperatur, linearisiert und umgerechnet | Grad C | tanslin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| RTKWA | 0x5AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Motortemperatur, linearisiert und umgerechnet | Grad C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| IUSAU | 0x5AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Drucksensor Saugrohrdruck (word) | V | udss_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IMLUF | 0x5ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert (Word) | kg/h | ml_w | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IASRE | 0x5ABD | STAT_STARTRELAIS_AKTIV_WERT | Bedingung automatischer Start | 0/1 | B_sta | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AC2_WERT | 0x5AC2 | STAT_0x5AC2_WERT | Reset Information  | - | Reset_Env.adLoc | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AC4_WERT | 0x5AC4 | STAT_0x5AC4_WERT | Raildruck Kraftstoffsystem Sollwert | MPa | prsoll_w | - | unsigned integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x5AD5_WERT | 0x5AD5 | STAT_0x5AD5_WERT | Kraftstofftemperatur | Grad C | tkrst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| STAT_0x5AD6_WERT | 0x5AD6 | STAT_0x5AD6_WERT | Bedingung Schubabschalten | 0/1 | B_sa | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AE2_WERT | 0x5AE2 | STAT_0x5AE2_WERT | Reset Information - Reset-group-ID of the last reset reason | 0-n | Reset_Env.xGrp | - | unsigned char | Reset_GrpID | 1 | 1 | 0 |
| STAT_0x5AE3_WERT | 0x5AE3 | STAT_0x5AE3_WERT | Reset Information - Reset-ID of the last reset | 0-n | Reset_Env.xId | - | unsigned integer | Reset_ID | 1 | 1 | 0 |
| STAT_0x5AE4_WERT | 0x5AE4 | STAT_0x5AE4_WERT | Reset Information - User defined value of the last reset reason | - | Reset_Env.xUserValue | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AEB_WERT | 0x5AEB | STAT_0x5AEB_WERT | Kuehlmitteltemperatur < 98°C | % | tmotb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AEC_WERT | 0x5AEC | STAT_0x5AEC_WERT | 98°C =< Kuehlmitteltemperatur =< 112°C | % | tmotb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AED_WERT | 0x5AED | STAT_0x5AED_WERT | 113°C =< Kuehlmitteltemperatur =< 120°C | % | tmotb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AEE_WERT | 0x5AEE | STAT_0x5AEE_WERT | 121°C =< Kuehlmitteltemperatur =< 125°C | % | tmotb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AEF_WERT | 0x5AEF | STAT_0x5AEF_WERT | Kuehlmitteltemperatur > 125°C | % | tmotb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF0_WERT | 0x5AF0 | STAT_0x5AF0_WERT | Motoroeltemperatur < 80°C | % | toelb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF1_WERT | 0x5AF1 | STAT_0x5AF1_WERT | 80°C =< Motoroeltemperatur =< 110°C | % | toelb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF2_WERT | 0x5AF2 | STAT_0x5AF2_WERT | 110°C =< Motoroeltemperatur =< 135°C | % | toelb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF3_WERT | 0x5AF3 | STAT_0x5AF3_WERT | 135°C =< Motoroeltemperatur =< 150°C | % | toelb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF4_WERT | 0x5AF4 | STAT_0x5AF4_WERT | Motoroeltemperatur > 150°C | % | toelb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF5_WERT | 0x5AF5 | STAT_0x5AF5_WERT | Getriebeoeltemperatur < 80°C | % | tgetb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF6_WERT | 0x5AF6 | STAT_0x5AF6_WERT | 80°C =< Getriebeoeltemperatur =< 109°C | % | tgetb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF7_WERT | 0x5AF7 | STAT_0x5AF7_WERT | 110°C =< Getriebeoeltemperatur =< 124°C | % | tgetb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF8_WERT | 0x5AF8 | STAT_0x5AF8_WERT | 125°C =< Getriebeoeltemperatur =< 129°C | % | tgetb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF9_WERT | 0x5AF9 | STAT_0x5AF9_WERT | Getriebeoeltemperatur > 129°C | % | tgetb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFA_WERT | 0x5AFA | STAT_0x5AFA_WERT | Umgebungstemperatur < 3°C | % | tumgb1_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFB_WERT | 0x5AFB | STAT_0x5AFB_WERT | 3°C =< Umgebungstemperatur =< 19°C | % | tumgb2_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFC_WERT | 0x5AFC | STAT_0x5AFC_WERT | 20°C =< Umgebungstemperatur =< 29°C | % | tumgb3_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFD_WERT | 0x5AFD | STAT_0x5AFD_WERT | 30°C =< Umgebungstemperatur =< 39°C | % | tumgb4_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFE_WERT | 0x5AFE | STAT_0x5AFE_WERT | Umgebungstemperatur > 39°C | % | tumgb5_w | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5B10_WERT | 0x5B10 | STAT_0x5B10_WERT | Superklopfen | - | iskn1r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B11_WERT | 0x5B11 | STAT_0x5B11_WERT | Superklopfen | - | iskn1r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B12_WERT | 0x5B12 | STAT_0x5B12_WERT | Superklopfen | - | iskn1r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B13_WERT | 0x5B13 | STAT_0x5B13_WERT | Superklopfen | - | iskn2r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B14_WERT | 0x5B14 | STAT_0x5B14_WERT | Superklopfen | - | iskn2r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B15_WERT | 0x5B15 | STAT_0x5B15_WERT | Superklopfen | - | iskn2r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B20_WERT | 0x5B20 | STAT_0x5B20_WERT | Superklopfen | - | iskn3r1_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B21_WERT | 0x5B21 | STAT_0x5B21_WERT | Superklopfen | - | iskn3r2_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B22_WERT | 0x5B22 | STAT_0x5B22_WERT | Superklopfen | - | iskn3r3_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B23_WERT | 0x5B23 | STAT_0x5B23_WERT | [0] Aussetzerzaehler im Abgasintervall Zyl. 1 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B25_WERT | 0x5B25 | STAT_0x5B25_WERT | [2] Aussetzerzaehler im Abgasintervall Zyl. 4 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B31_WERT | 0x5B31 | STAT_0x5B31_WERT | [1] Aussetzerzaehler im Abgasintervall Zyl. 3 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B32_WERT | 0x5B32 | STAT_0x5B32_WERT | [3] Aussetzerzaehler im Abgasintervall Zyl. 2 | - | fzabgzyl_w | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| - | 0xFFFF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### RESET_GRPID

| WERT | UWTEXT |
| --- | --- |
| 0x00 | SWRESET_GRP_POWERON_E |
| 0x01 | SWRESET_GRP_HWRESET_E |
| 0x02 | SWRESET_GRP_WDT_E |
| 0x03 | SWRESET_GRP_WAKEUP_E |
| 0x04 | SWRESET_GRP_TRAP_E |
| 0x05 | SWRESET_GRP_SB_E |
| 0x06 | SWRESET_GRP_CB_E |
| 0x07 | SWRESET_SOFTRESETGRP_E |
| 0x08 | SWRESET_GRP_DUMMY_01 |
| 0x09 | SWRESET_GRP_DUMMY_02 |
| 0x0A | SWRESET_GRP_SYC_KL15RST_E |
| 0x0B | RESET_EEP_GRP_E |
| 0x0C | RESET_SWRESET_EPM_E |
| 0x0D | RESET_SWRESET_ESC_E |
| 0x0E | RESET_EXECON_GRP_E |
| 0x0F | RESET_SWRESET_ASW_01 |
| 0x10 | SWRESET_GRP_MO_PREICO |
| 0x11 | RESET_SWRESET_MOC |
| 0x12 | RESET_SWRESET_SOP |
| 0x13 | RESET_SWRESET_MOFICO |
| 0x14 | SWRESET_OCWDA |
| 0x15 | RESET_SWRESET_OS_01 |
| 0x16 | RESET_HWEMONGRP_E |
| 0x17 | RESET_ERRINTRGRP_E |
| 0x18 | SWRESET_SYCGRP_E |
| 0x19 | RESET_SWRESET_TPROT |
| 0x1A | RESET_ADCI_E |
| 0x1B | SWRESET_UNSUPPORTED_CPU_E |
| 0x1C | RESET_CANGRP_E |
| 0x1D | RESET_DMA_E |
| 0x1E | RESET_FLASH_E |
| 0x1F | SWRESET_PCP_GRP_E |
| 0xFF | undefiniert |

### RESET_ID

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | SWRESET_POWERON_E |
| 0x0001 | SWRESET_POWERON_WDT_E |
| 0x0002 | SWRESET_POWERON_KL15_E |
| 0x0003 | SWRESET_HW_E |
| 0x0004 | SWRESET_WDT_E |
| 0x1000 | TRAP_MMU_VAF_E |
| 0x1001 | TRAP_MMU_VAP_E |
| 0x1002 | TRAP_INTPROT_PRIV_E |
| 0x1003 | TRAP_INTPROT_MPR_E |
| 0x1004 | TRAP_INTPROT_MPW_E |
| 0x1005 | TRAP_INTPROT_MPX_E |
| 0x1006 | TRAP_INTPROT_MPP_E |
| 0x1007 | TRAP_INTPROT_MPN_E |
| 0x1008 | TRAP_INTPROT_GRWP_E |
| 0x1009 | TRAP_INSTRERR_IOPC_E |
| 0x100A | TRAP_INSTRERR_UOPC_E |
| 0x100B | TRAP_INSTRERR_OPD_E |
| 0x100C | TRAP_INSTRERR_ALN_E |
| 0x100D | TRAP_INSTRERR_MEM_E |
| 0x100E | TRAP_CONTMANA_FCD_E |
| 0x100F | TRAP_CONTMANA_CDO_E |
| 0x1010 | TRAP_CONTMANA_CDU_E |
| 0x1011 | TRAP_CONTMANA_FCU_E |
| 0x1012 | TRAP_CONTMANA_CSU_E |
| 0x1013 | TRAP_CONTMANA_CTYP_E |
| 0x1014 | TRAP_CONTMANA_NEST_E |
| 0x1015 | TRAP_SYSBUSERR_PSE_E |
| 0x1016 | TRAP_SYSBUSERR_DSE_E |
| 0x1017 | TRAP_SYSBUSERR_DAE_E |
| 0x1018 | TRAP_SYSBUSERR_CAE_E |
| 0x1019 | TRAP_SYSBUSERR_PIE_E |
| 0x101A | TRAP_SYSBUSERR_DIE_E |
| 0x101B | TRAP_ASSTRAP_OVF_E |
| 0x101C | TRAP_ASSTRAP_SOVF_E |
| 0x101D | TRAP_SYSCALL_SYS_E |
| 0x101E | TRAP_NMI_ESR0_E |
| 0x101F | TRAP_NMI_ESR1_E |
| 0x1020 | TRAP_NMI_RES0_E |
| 0x1021 | TRAP_NMI_WDT_E |
| 0x1022 | TRAP_NMI_PE_E |
| 0x1023 | TRAP_NMI_OSCLWD_E |
| 0x1024 | TRAP_NMI_OSCHWD_E |
| 0x1025 | TRAP_NMI_OSCSPWD_E |
| 0x1026 | TRAP_NMI_SYSVCOLCK_E |
| 0x1027 | TRAP_NMI_ERAYVCOLCKT |
| 0x1028 | TRAP_NMI_FLOT_E |
| 0x1029 | TRAP_PE_P_IED_E |
| 0x102A | TRAP_PE_P_IE_T_E |
| 0x102B | TRAP_PE_P_IE_C_E |
| 0x102C | TRAP_PE_P_IE_S_E |
| 0x102D | TRAP_PE_P_IE_B_E |
| 0x102E | TRAP_PE_D_IED_E |
| 0x102F | TRAP_PE_D_IE_T_E |
| 0x1030 | TRAP_PE_D_IE_C_E |
| 0x1031 | TRAP_PE_D_IE_S_E |
| 0x1032 | TRAP_PE_D_IE_B_E |
| 0x1033 | TRAP_NMIPE_LDRAM_DSPR_E |
| 0x1034 | TRAP_NMIPE_DTAG_E |
| 0x1035 | TRAP_NMIPE_SPRAM_PSPR_E |
| 0x1036 | TRAP_NMIPE_PTAG_E |
| 0x1037 | TRAP_NMIPE_PMU_LMU_E |
| 0x1038 | TRAP_NMIPE_PRAM_E |
| 0x1039 | TRAP_NMIPE_CMEM_E |
| 0x103A | TRAP_NMIPE_CAN_E |
| 0x103B | TRAP_NMIPE_ERAY_E |
| 0x103C | TRAP_NMIPE_SRI_E |
| 0x103D | TRAP_NMIPE_EBU_E |
| 0x103E | TRAP_NMIPE_BMU_E |
| 0x2000 | SWRESET_POWERON_SIMU_E |
| 0x2001 | SWRESET_HRESET_SIMU_E |
| 0x2002 | SWRESET_RB_PROG_E |
| 0x2003 | SWRESET_SOFTRESET_5VUNDERVOLTAGE_E |
| 0x2004 | SWRESET_SOFTRESET_POSTDRV2PREDRV_E |
| 0x2005 | SWRESET_CBPROG_E |
| 0x2006 | SWRESET_CBCPU_E |
| 0x2007 | SWRESET_SBDUMMY_1_E |
| 0x2008 | SWRESET_SBDUMMY_2_E |
| 0x2009 | SWRESET_SBDUMMY_3_E |
| 0x200A | SWRESET_SBDUMMY_4_E |
| 0x200B | SWRESET_SBDUMMY_5_E |
| 0x200C | SWRESET_SBDUMMY_6_E |
| 0x200D | SWRESET_SBDUMMY_7_E |
| 0x200E | SWRESET_SBDUMMY_8_E |
| 0x3000 | SWRST_EEPBANDGAP_E |
| 0x3001 | SWRST_EEPNODEBUGGER_E |
| 0x3002 | SWRST_EEPDELENVRAM_E |
| 0x3003 | SWRST_WRITE_ERRORS_SECTORCHANGE_E |
| 0x3004 | SWRST_EEPACTFIRSTINIT_E |
| 0x3005 | RESET_SWRESET_EPMHCRS_WAIT_PCP_RESET_E |
| 0x3006 | RESET_SWRESET_ESC_SCHED_RESET_E |
| 0x3007 | SWRST_EXECON_FAULTYSTATE_E |
| 0x3008 | RESET_SWRESET_ILLEGAL_OPCODE |
| 0x3009 | RESET_SWRESET_ILLEGAL_RETURN_TO_MAIN |
| 0x300A | RESET_SWRESET_MEMLAY_MP_ACCESS |
| 0x300B | SWRESET_MOCADCNTP_PREICO |
| 0x300C | SWRESET_MOCADCTST_PREICO |
| 0x300D | RESET_SWRESET_ILLEGAL_SW_PATH |
| 0x300E | RESET_SWRESET_MOCCOM_SPI_ERROR |
| 0x300F | RESET_SWRESET_MOCCOM_CTSOPTST |
| 0x3010 | RESET_SWRESET_MOCCOM_SOPTST |
| 0x3011 | RESET_SWRESET_MOCCOM_CPLCHK_FAILED |
| 0x3012 | RESET_SWRESET_MOCCOM_OS_TIMEOUT_ERROR |
| 0x3013 | RESET_SWRESET_MOCGPTA |
| 0x3014 | RESET_SWRESET_MOCMEM_CPLCHK_FAILED |
| 0x3015 | RESET_SWRESET_MOCMEM_CHKRAM_FAILED |
| 0x3016 | RESET_SWRESET_MOCMEM_CHKROM_FAILED |
| 0x3017 | RESET_SWRESET_MOCMEM_WTRAM_FAILED |
| 0x3018 | RESET_SWRESET_MOCMEM_WTROM_FAILED |
| 0x3019 | RESET_SWRESET_MOCPCP |
| 0x301A | RESET_SWRESET_MOCRAM_WRI |
| 0x301B | RESET_SWRESET_MOCRAM_CPL |
| 0x301C | RESET_SWRESET_MOCRAM_RAMTAB |
| 0x301D | RESET_SWRESET_MOCRAM_RSTPTRRAM |
| 0x301E | RESET_SWRESET_MOCRAM_STACKRAM |
| 0x301F | RESET_SWRESET_MOCRAM_CSARAM |
| 0x3020 | RESET_SWRESET_MOCRAM_XRAM |
| 0x3021 | RESET_SWRESET_MOCRAM_IRAM |
| 0x3022 | RESET_SWRESET_MOCRAM_EXRAM |
| 0x3023 | RESET_SWRESET_MOCRAM_PROTRAM |
| 0x3024 | RESET_SWRESET_MOCRAM_EEPCPL |
| 0x3025 | RESET_SWRESET_MOCRAM_REPEXOK |
| 0x3026 | RESET_SWRESET_MOCROM |
| 0x3027 | RESET_SWRESET_MOCROM_CPL |
| 0x3028 | RESET_SWRESET_MOCROM_INDEX |
| 0x3029 | RESET_SWRESET_SOPTEST_FAILED |
| 0x302A | RESET_SWRESET_CPLCHK_FAILED |
| 0x302B | RESET_SWRESET_MOCSOP_MSC_ERROR |
| 0x302C | RESET_SWRESET_MOCSOP_SPI_ERROR |
| 0x302D | RESET_SWRESET_MOCSOP_OS_TIMEOUT_ERROR |
| 0x302E | RESET_SWRESET_MOCSOP_TIRESPTIME_ERROR |
| 0x302F | SWRESET_MOFAIR_ADJ_PREICO |
| 0x3030 | SWRESET_MOFRKTI_PREICO |
| 0x3031 | SWRESET_MOFGKC_PREICO |
| 0x3032 | SWRESET_MOFRLC_PREICO |
| 0x3033 | SWRESET_MOFMODC_PREICO |
| 0x3034 | SWRESET_MOFAPP_PREICO |
| 0x3035 | SWRESET_MOFESPD_PREICO |
| 0x3036 | SWRESET_MOFZWC_PREICO |
| 0x3037 | RESET_SWRESET_MOFICO_CHK_SYEGAS_FAILED |
| 0x3038 | SWRESET_MOFTRQCMP_PREICO |
| 0x3039 | SWRESET_MOFTRQRAT_PREICO |
| 0x303A | SWRESET_MOFVAR_PREICO |
| 0x303B | SWRESET_OCWDA_WDA_ACTV |
| 0x303C | SWRESET_OCWDA_WDA_MONITOR |
| 0x303D | SWRESET_OCWDA_LOW_VLTG |
| 0x303E | SWRESET_OCWDA_OVR_VLTG |
| 0x303F | RESET_SWRESET_INTERRUPTLOCK_EXPECTED |
| 0x3040 | RESET_USERSTACKOVERFLOW_DETECTED |
| 0x3041 | SWRST_HWEMONDEFAULT_E |
| 0x3042 | RESET_ERRINTR_E |
| 0x3043 | SWRESET_CALWAKEUP_E |
| 0x3044 | SWRESET_DEADLINE1MS_E |
| 0x3045 | SWRESET_DEADLINE10MS_E |
| 0x3046 | SWRESET_DEADLINEBG_E |
| 0x3047 | SWRESET_NMIDISABLED_E |
| 0x3048 | SWRESET_POSTDRIVE_E |
| 0x3049 | SWRESET_SOFTRESET_WAKEUP_E |
| 0x304A | SWRESET_SOFTRESET_SHUTDOWN_E |
| 0x304B | SWRESET_T15RSTSHUTDOWN_E |
| 0x304C | SWRESET_UNDERVOLTAGE_E |
| 0x304D | SWRESET_T15_PRE_E |
| 0x304E | RESET_SWRESET_SWOVER_DONE |
| 0x304F | SWRST_ADCI_ERROR_E |
| 0x3050 | SWRESET_CORE_ENV_E |
| 0x3051 | SWRST_CAN_MESSAGECONFIG |
| 0x3052 | RESET_DMA_ERROR_E |
| 0x3053 | SWRST_FLASHCONFIG_E |
| 0x3054 | SWRESET_PCP_ERROR_E |
| 0xFFFF | undefiniert |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### _CNV_S_3_DEF_BA_POE_391

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | SLR |
| 0x02 | KFR |
| 0xFF | undefiniert |

### _CNV_S_3_DEF_BA_POE_408

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | SLR |
| 0x02 | KFR |
| 0xFF | undefiniert |

### BA_VCV_STATE_TEXT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VCV_TEST |
| 0x01 | START |
| 0x02 | MFP_CTL |
| 0x03 | VCV_CLOSE |
| 0x04 | VCV_CRASH |
| 0x05 | MFP_MAX |
| 0x06 | VCV_LIH |
| 0xFF | undefiniert |

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

### SWTFEHLER_TAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x31 | OUT_OF_RANGE |
| 0xCD | KEYFAKTOR_NICHT_VORHANDEN |
| 0xD0 | EXTENSION_CHECK_FEHLERHAFT |
| 0xD1 | FSC_UNGUELTIG |
| 0xD2 | FGN_ZUGRIFF_FEHLERHAFT |
| 0xD3 | KEIN_SPEICHERPLATZ_MEHR_VORHANDEN |
| 0xD4 | FALSCHER_ZERTIFIKATSINHALT_UNBEKANNTES_CRIT-ELEMENT |
| 0xD5 | FALSCHER_FSC_INHALT |
| 0xD6 | FALSCHE_PARAMETERS |
| 0xD7 | FSCS_ZERTIFIKAT_ABGELEHNT |
| 0xD8 | KEINE_DATEN_ZU_ANGEGEBENEM_SG_VORHANDEN |
| 0xD9 | KEINE_AUTHENTISIERUNG |
| 0xDA | FINGER_PRINT_MECHANISMUS_NOT_OK |
| 0xDB | SIGS_ID_UND_ZERTIFIKAT_PASSEN_NICHT_ZUSAMMEN |
| 0xDC | GUELTIGKEITS_PRUEFUNG_SCHLUG_FEHL |
| 0xDD | FAHRGESTELLNUMMER_FEHLERHAFT |
| 0xDE | FGN_PRUEFUNG_SCHLUG_FEHL |
| 0xDF | FLASH_LESEFEHLER |
| 0xE0 | FLASH_SCHREIBFEHLER |
| 0xE1 | FALSCHER_ZERTIFIKATSINHALT_KEY_USAGE |
| 0xE2 | FALSCHER_ZERTIFIKATSINHALT_ISSUER |
| 0xE3 | FALSCHER_ZERTIFIKATSINHALT_VALIDITY |
| 0xE4 | FSCS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE5 | FSCS_ZERTIFIKAT_UNGUELTIG |
| 0xE6 | FSCS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xE7 | FSCS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xE8 | SIGS_ZERTIFIKAT__PRUEFUNG_SCHLUG_FEHL |
| 0xE9 | SIGS_ZERTIFIKAT_UNGUELTIG |
| 0xEA | SIGS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xEB | SIGS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xEC | ROOT_ZERTIFIKAT_UNGUELTIG |
| 0xED | ROOT_ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xEE | ROOT_ZERTIFIKAT_FEHLERHAFT |
| 0xEF | ROOT_ZERTIFIKAT_NICHT_LESBAR |
| 0xF0 | ROOT_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF1 | ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xF2 | ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF3 | FSC_PRUEFUNG_SCHLUG_FEHL |
| 0xF4 | FSC_STORNIERT |
| 0xF5 | FSC_STATUS_ABGELEHNT |
| 0xF6 | FSC_NICHT_VORHANDEN |
| 0xF7 | FALSCHE_FSCS_ID_IM_FSC |
| 0xF8 | UNGUELTIGES_FSC_ERSTELLUNGSDDATUM |
| 0xF9 | SIGNATUR_PRUEFUNG_SCHLUG_FEHL |
| 0xFA | SW_SIGNATURPRUEFUNG_SCHLUG_FEHL |
| 0xFB | SW_SIG_STATUS_ABGELEHNT |
| 0xFC | SW_ID_PRUEFUNG_SCHLUG_FEHL |
| 0xFD | SW_NICHT_AKTIVIERT |
| 0xFE | SW_NICHT_EINGESPIELT |
| 0xFF | UNBEKANNTER_FEHLER |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### _MSD80N43_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

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

### _AUSLESEMODE

| NR | MODE |
| --- | --- |
| 0x00 | GROESSE |
| 0x01 | INPA |
| 0x02 | SGBD |
| 0x03 | FASTA |
| 0xFF | 0 |

### _EISYUGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT | PS_WERT |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 660 | 90 | 105 | 0.4 | 900 |
| 0x01 | 660 | 90 | 105 | 1.5 | 900 |
| 0x02 | 660 | 90 | 105 | 2.0 | 900 |
| 0x03 | 1500 | 60 | 72 | 1.5 | 900 |
| 0x04 | 2000 | 56 | 70 | 2.5 | 900 |
| 0x05 | 3000 | 88 | 98 | 9.7 | 1500 |
| 0x06 | 4000 | 108 | 110 | 9.7 | 1500 |
| 0x07 | 6000 | 108 | 110 | 9.7 | 1500 |
| 0xFF | 0 | 0 | 0 | 0 | 0 |

### _EISYUGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT | PS_WERT |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 660 | 90 | 105 | 0.4 | 900 |
| 0x01 | 1500 | 60 | 72 | 1.5 | 900 |
| 0x02 | 2000 | 56 | 70 | 2.5 | 900 |
| 0x03 | 3000 | 88 | 98 | 9.7 | 1500 |
| 0x04 | 4000 | 108 | 110 | 9.7 | 1500 |
| 0xFF | 0 | 0 | 0 | 0 | 0 |

### _EISYGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 4.00 |
| 0x01 | 2000 | 65.0 | 85.0 | 10.00 |
| 0x02 | 3000 | 90.0 | 100.0 | 15.00 |
| 0x03 | 4000 | 100.0 | 100.0 | 20.00 |
| 0x04 | 5000 | 110.0 | 110.0 | 30.00 |
| 0xFF | 0 | 0 | 0 | 0 |

### _KRANN_INPA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 660 | 15 | 30 |
| 0x01 | 720 | 15 | 30 |
| 0x02 | 900 | 15 | 30 |
| 0x03 | 1200 | 15 | 30 |
| 0x04 | 1500 | 15 | 30 |
| 0x05 | 2000 | 15 | 30 |
| 0x06 | 2500 | 15 | 30 |
| 0x07 | 3000 | 15 | 30 |
| 0x08 | 4000 | 15 | 30 |
| 0x09 | 5000 | 15 | 30 |
| 0x0A | 6000 | 15 | 30 |
| 0x0B | 7000 | 15 | 30 |
| 0x0C | 660 | 20 | 30 |
| 0x0D | 720 | 20 | 30 |
| 0x0E | 900 | 20 | 30 |
| 0x0F | 1200 | 20 | 30 |
| 0x10 | 1500 | 20 | 30 |
| 0x11 | 2000 | 20 | 30 |
| 0x12 | 2500 | 20 | 30 |
| 0x13 | 3000 | 20 | 30 |
| 0x14 | 4000 | 20 | 30 |
| 0x15 | 5000 | 20 | 30 |
| 0x16 | 6000 | 20 | 30 |
| 0x17 | 7000 | 20 | 30 |
| 0x18 | 660 | 25 | 30 |
| 0x19 | 720 | 25 | 30 |
| 0x1A | 900 | 25 | 30 |
| 0x1B | 1200 | 25 | 30 |
| 0x1C | 1500 | 25 | 30 |
| 0x1D | 2000 | 25 | 30 |
| 0x1E | 2500 | 25 | 30 |
| 0x1F | 3000 | 25 | 30 |
| 0x20 | 4000 | 25 | 30 |
| 0x21 | 5000 | 25 | 30 |
| 0x22 | 6000 | 25 | 30 |
| 0x23 | 7000 | 25 | 30 |
| 0x24 | 660 | 30 | 30 |
| 0x25 | 720 | 30 | 30 |
| 0x26 | 900 | 30 | 30 |
| 0x27 | 1200 | 30 | 30 |
| 0x28 | 1500 | 30 | 30 |
| 0x29 | 2000 | 30 | 30 |
| 0x2A | 2500 | 30 | 30 |
| 0x2B | 3000 | 30 | 30 |
| 0x2C | 4000 | 30 | 30 |
| 0x2D | 5000 | 30 | 30 |
| 0x2E | 6000 | 30 | 30 |
| 0x2F | 7000 | 30 | 30 |
| 0x30 | 660 | 35 | 30 |
| 0x31 | 720 | 35 | 30 |
| 0x32 | 900 | 35 | 30 |
| 0x33 | 1200 | 35 | 30 |
| 0x34 | 1500 | 35 | 30 |
| 0x35 | 2000 | 35 | 30 |
| 0x36 | 2500 | 35 | 30 |
| 0x37 | 3000 | 35 | 30 |
| 0x38 | 4000 | 35 | 30 |
| 0x39 | 5000 | 35 | 30 |
| 0x3A | 6000 | 35 | 30 |
| 0x3B | 7000 | 35 | 30 |
| 0x3C | 660 | 40 | 30 |
| 0x3D | 720 | 40 | 30 |
| 0x3E | 900 | 40 | 30 |
| 0x3F | 1200 | 40 | 30 |
| 0x40 | 1500 | 40 | 30 |
| 0x41 | 2000 | 40 | 30 |
| 0x42 | 2500 | 40 | 30 |
| 0x43 | 3000 | 40 | 30 |
| 0x44 | 4000 | 40 | 30 |
| 0x45 | 5000 | 40 | 30 |
| 0x46 | 6000 | 40 | 30 |
| 0x47 | 7000 | 40 | 30 |
| 0x48 | 660 | 50 | 30 |
| 0x49 | 720 | 50 | 30 |
| 0x4A | 900 | 50 | 30 |
| 0x4B | 1200 | 50 | 30 |
| 0x4C | 1500 | 50 | 30 |
| 0x4D | 2000 | 50 | 30 |
| 0x4E | 2500 | 50 | 30 |
| 0x4F | 3000 | 50 | 30 |
| 0x50 | 4000 | 50 | 30 |
| 0x51 | 5000 | 50 | 30 |
| 0x52 | 6000 | 50 | 30 |
| 0x53 | 7000 | 50 | 30 |
| 0x54 | 660 | 60 | 30 |
| 0x55 | 720 | 60 | 30 |
| 0x56 | 900 | 60 | 30 |
| 0x57 | 1200 | 60 | 30 |
| 0x58 | 1500 | 60 | 30 |
| 0x59 | 2000 | 60 | 30 |
| 0x5A | 2500 | 60 | 30 |
| 0x5B | 3000 | 60 | 30 |
| 0x5C | 4000 | 60 | 30 |
| 0x5D | 5000 | 60 | 30 |
| 0x5E | 6000 | 60 | 30 |
| 0x5F | 7000 | 60 | 30 |
| 0x60 | 660 | 70 | 30 |
| 0x61 | 720 | 70 | 30 |
| 0x62 | 900 | 70 | 30 |
| 0x63 | 1200 | 70 | 30 |
| 0x64 | 1500 | 70 | 30 |
| 0x65 | 2000 | 70 | 30 |
| 0x66 | 2500 | 70 | 30 |
| 0x67 | 3000 | 70 | 30 |
| 0x68 | 4000 | 70 | 30 |
| 0x69 | 5000 | 70 | 30 |
| 0x6A | 6000 | 70 | 30 |
| 0x6B | 7000 | 70 | 30 |
| 0x6C | 660 | 80 | 30 |
| 0x6D | 720 | 80 | 30 |
| 0x6E | 900 | 80 | 30 |
| 0x6F | 1200 | 80 | 30 |
| 0x70 | 1500 | 80 | 30 |
| 0x71 | 2000 | 80 | 30 |
| 0x72 | 2500 | 80 | 30 |
| 0x73 | 3000 | 80 | 30 |
| 0x74 | 4000 | 80 | 30 |
| 0x75 | 5000 | 80 | 30 |
| 0x76 | 6000 | 80 | 30 |
| 0x77 | 7000 | 80 | 30 |
| 0x78 | 660 | 120 | 30 |
| 0x79 | 720 | 120 | 30 |
| 0x7A | 900 | 120 | 30 |
| 0x7B | 1200 | 120 | 30 |
| 0x7C | 1500 | 120 | 30 |
| 0x7D | 2000 | 120 | 30 |
| 0x7E | 2500 | 120 | 30 |
| 0x7F | 3000 | 120 | 30 |
| 0x80 | 4000 | 120 | 30 |
| 0x81 | 5000 | 120 | 30 |
| 0x82 | 6000 | 120 | 30 |
| 0x83 | 7000 | 120 | 30 |
| 0x84 | 660 | 150 | 30 |
| 0x85 | 720 | 150 | 30 |
| 0x86 | 900 | 150 | 30 |
| 0x87 | 1200 | 150 | 30 |
| 0x88 | 1500 | 150 | 30 |
| 0x89 | 2000 | 150 | 30 |
| 0x8A | 2500 | 150 | 30 |
| 0x8B | 3000 | 150 | 30 |
| 0x8C | 4000 | 150 | 30 |
| 0x8D | 5000 | 150 | 30 |
| 0x8E | 6000 | 150 | 30 |
| 0x8F | 7000 | 150 | 30 |
| 0xFF | 0 | 0 | 0 |

### _KLANN_INPA

| NR | NKW_LOC_WERT | RK_LOC_WERT | TMOT_LOC_WERT |
| --- | --- | --- | --- |
| 0x00 | 700 | 0.12 | 100 |
| 0x01 | 700 | 0.15 | 100 |
| 0x02 | 700 | 0.20 | 100 |
| 0x03 | 700 | 0.30 | 100 |
| 0x04 | 700 | 0.40 | 100 |
| 0x05 | 700 | 0.50 | 100 |
| 0x06 | 700 | 0.70 | 100 |
| 0x07 | 700 | 1.00 | 100 |
| 0x08 | 700 | 1.20 | 100 |
| 0x09 | 700 | 1.40 | 100 |
| 0x0A | 700 | 1.60 | 100 |
| 0x0B | 700 | 1.80 | 100 |
| 0x0C | 1000 | 0.12 | 100 |
| 0x0D | 1000 | 0.15 | 100 |
| 0x0E | 1000 | 0.20 | 100 |
| 0x0F | 1000 | 0.30 | 100 |
| 0x10 | 1000 | 0.40 | 100 |
| 0x11 | 1000 | 0.50 | 100 |
| 0x12 | 1000 | 0.70 | 100 |
| 0x13 | 1000 | 1.00 | 100 |
| 0x14 | 1000 | 1.20 | 100 |
| 0x15 | 1000 | 1.40 | 100 |
| 0x16 | 1000 | 1.60 | 100 |
| 0x17 | 1000 | 1.80 | 100 |
| 0x18 | 1500 | 0.12 | 100 |
| 0x19 | 1500 | 0.15 | 100 |
| 0x1A | 1500 | 0.20 | 100 |
| 0x1B | 1500 | 0.30 | 100 |
| 0x1C | 1500 | 0.40 | 100 |
| 0x1D | 1500 | 0.50 | 100 |
| 0x1E | 1500 | 0.70 | 100 |
| 0x1F | 1500 | 1.00 | 100 |
| 0x20 | 1500 | 1.20 | 100 |
| 0x21 | 1500 | 1.40 | 100 |
| 0x22 | 1500 | 1.60 | 100 |
| 0x23 | 1500 | 1.80 | 100 |
| 0x24 | 2000 | 0.12 | 100 |
| 0x25 | 2000 | 0.15 | 100 |
| 0x26 | 2000 | 0.20 | 100 |
| 0x27 | 2000 | 0.30 | 100 |
| 0x28 | 2000 | 0.40 | 100 |
| 0x29 | 2000 | 0.50 | 100 |
| 0x2A | 2000 | 0.70 | 100 |
| 0x2B | 2000 | 1.00 | 100 |
| 0x2C | 2000 | 1.20 | 100 |
| 0x2D | 2000 | 1.40 | 100 |
| 0x2E | 2000 | 1.60 | 100 |
| 0x2F | 2000 | 1.80 | 100 |
| 0x30 | 2500 | 0.12 | 100 |
| 0x31 | 2500 | 0.15 | 100 |
| 0x32 | 2500 | 0.20 | 100 |
| 0x33 | 2500 | 0.30 | 100 |
| 0x34 | 2500 | 0.40 | 100 |
| 0x35 | 2500 | 0.50 | 100 |
| 0x36 | 2500 | 0.70 | 100 |
| 0x37 | 2500 | 1.00 | 100 |
| 0x38 | 2500 | 1.20 | 100 |
| 0x39 | 2500 | 1.40 | 100 |
| 0x3A | 2500 | 1.60 | 100 |
| 0x3B | 2500 | 1.80 | 100 |
| 0x3C | 3000 | 0.12 | 100 |
| 0x3D | 3000 | 0.15 | 100 |
| 0x3E | 3000 | 0.20 | 100 |
| 0x3F | 3000 | 0.30 | 100 |
| 0x40 | 3000 | 0.40 | 100 |
| 0x41 | 3000 | 0.50 | 100 |
| 0x42 | 3000 | 0.70 | 100 |
| 0x43 | 3000 | 1.00 | 100 |
| 0x44 | 3000 | 1.20 | 100 |
| 0x45 | 3000 | 1.40 | 100 |
| 0x46 | 3000 | 1.60 | 100 |
| 0x47 | 3000 | 1.80 | 100 |
| 0x48 | 4000 | 0.12 | 100 |
| 0x49 | 4000 | 0.15 | 100 |
| 0x4A | 4000 | 0.20 | 100 |
| 0x4B | 4000 | 0.30 | 100 |
| 0x4C | 4000 | 0.40 | 100 |
| 0x4D | 4000 | 0.50 | 100 |
| 0x4E | 4000 | 0.70 | 100 |
| 0x4F | 4000 | 1.00 | 100 |
| 0x50 | 4000 | 1.20 | 100 |
| 0x51 | 4000 | 1.40 | 100 |
| 0x52 | 4000 | 1.60 | 100 |
| 0x53 | 4000 | 1.80 | 100 |
| 0x54 | 5000 | 0.12 | 100 |
| 0x55 | 5000 | 0.15 | 100 |
| 0x56 | 5000 | 0.20 | 100 |
| 0x57 | 5000 | 0.30 | 100 |
| 0x58 | 5000 | 0.40 | 100 |
| 0x59 | 5000 | 0.50 | 100 |
| 0x5A | 5000 | 0.70 | 100 |
| 0x5B | 5000 | 1.00 | 100 |
| 0x5C | 5000 | 1.20 | 100 |
| 0x5D | 5000 | 1.40 | 100 |
| 0x5E | 5000 | 1.60 | 100 |
| 0x5F | 5000 | 1.80 | 100 |
| 0x60 | 6000 | 0.12 | 100 |
| 0x61 | 6000 | 0.15 | 100 |
| 0x62 | 6000 | 0.20 | 100 |
| 0x63 | 6000 | 0.30 | 100 |
| 0x64 | 6000 | 0.40 | 100 |
| 0x65 | 6000 | 0.50 | 100 |
| 0x66 | 6000 | 0.70 | 100 |
| 0x67 | 6000 | 1.00 | 100 |
| 0x68 | 6000 | 1.20 | 100 |
| 0x69 | 6000 | 1.40 | 100 |
| 0x6A | 6000 | 1.60 | 100 |
| 0x6B | 6000 | 1.80 | 100 |
| 0x6C | 700 | 0.12 | 20 |
| 0x6D | 700 | 0.15 | 20 |
| 0x6E | 700 | 0.20 | 20 |
| 0x6F | 700 | 0.30 | 20 |
| 0x70 | 700 | 0.40 | 20 |
| 0x71 | 700 | 0.50 | 20 |
| 0x72 | 700 | 0.70 | 20 |
| 0x73 | 700 | 1.00 | 20 |
| 0x74 | 700 | 1.20 | 20 |
| 0x75 | 700 | 1.40 | 20 |
| 0x76 | 700 | 1.60 | 20 |
| 0x77 | 700 | 1.80 | 20 |
| 0x78 | 1000 | 0.12 | 20 |
| 0x79 | 1000 | 0.15 | 20 |
| 0x7A | 1000 | 0.20 | 20 |
| 0x7B | 1000 | 0.30 | 20 |
| 0x7C | 1000 | 0.40 | 20 |
| 0x7D | 1000 | 0.50 | 20 |
| 0x7E | 1000 | 0.70 | 20 |
| 0x7F | 1000 | 1.00 | 20 |
| 0x80 | 1000 | 1.20 | 20 |
| 0x81 | 1000 | 1.40 | 20 |
| 0x82 | 1000 | 1.60 | 20 |
| 0x83 | 1000 | 1.80 | 20 |
| 0x84 | 1500 | 0.12 | 20 |
| 0x85 | 1500 | 0.15 | 20 |
| 0x86 | 1500 | 0.20 | 20 |
| 0x87 | 1500 | 0.30 | 20 |
| 0x88 | 1500 | 0.40 | 20 |
| 0x89 | 1500 | 0.50 | 20 |
| 0x8A | 1500 | 0.70 | 20 |
| 0x8B | 1500 | 1.00 | 20 |
| 0x8C | 1500 | 1.20 | 20 |
| 0x8D | 1500 | 1.40 | 20 |
| 0x8E | 1500 | 1.60 | 20 |
| 0x8F | 1500 | 1.80 | 20 |
| 0x90 | 2000 | 0.12 | 20 |
| 0x91 | 2000 | 0.15 | 20 |
| 0x92 | 2000 | 0.20 | 20 |
| 0x93 | 2000 | 0.30 | 20 |
| 0x94 | 2000 | 0.40 | 20 |
| 0x95 | 2000 | 0.50 | 20 |
| 0x96 | 2000 | 0.70 | 20 |
| 0x97 | 2000 | 1.00 | 20 |
| 0x98 | 2000 | 1.20 | 20 |
| 0x99 | 2000 | 1.40 | 20 |
| 0x9A | 2000 | 1.60 | 20 |
| 0x9B | 2000 | 1.80 | 20 |
| 0x9C | 3000 | 0.12 | 20 |
| 0x9D | 3000 | 0.15 | 20 |
| 0x9E | 3000 | 0.20 | 20 |
| 0x9F | 3000 | 0.30 | 20 |
| 0xA0 | 3000 | 0.40 | 20 |
| 0xA1 | 3000 | 0.50 | 20 |
| 0xA2 | 3000 | 0.70 | 20 |
| 0xA3 | 3000 | 1.00 | 20 |
| 0xA4 | 3000 | 1.20 | 20 |
| 0xA5 | 3000 | 1.40 | 20 |
| 0xA6 | 3000 | 1.60 | 20 |
| 0xA7 | 3000 | 1.80 | 20 |
| 0xA8 | 4000 | 0.12 | 20 |
| 0xA9 | 4000 | 0.15 | 20 |
| 0xAA | 4000 | 0.20 | 20 |
| 0xAB | 4000 | 0.30 | 20 |
| 0xAC | 4000 | 0.40 | 20 |
| 0xAD | 4000 | 0.50 | 20 |
| 0xAE | 4000 | 0.70 | 20 |
| 0xAF | 4000 | 1.00 | 20 |
| 0xB0 | 4000 | 1.20 | 20 |
| 0xB1 | 4000 | 1.40 | 20 |
| 0xB2 | 4000 | 1.60 | 20 |
| 0xB3 | 4000 | 1.80 | 20 |
| 0xB4 | 700 | 0.12 | 0 |
| 0xB5 | 700 | 0.15 | 0 |
| 0xB6 | 700 | 0.20 | 0 |
| 0xB7 | 700 | 0.30 | 0 |
| 0xB8 | 700 | 0.40 | 0 |
| 0xB9 | 700 | 0.50 | 0 |
| 0xBA | 700 | 0.70 | 0 |
| 0xBB | 700 | 1.00 | 0 |
| 0xBC | 700 | 1.20 | 0 |
| 0xBD | 700 | 1.40 | 0 |
| 0xBE | 700 | 1.60 | 0 |
| 0xBF | 700 | 1.80 | 0 |
| 0xC0 | 1000 | 0.12 | 0 |
| 0xC1 | 1000 | 0.15 | 0 |
| 0xC2 | 1000 | 0.20 | 0 |
| 0xC3 | 1000 | 0.30 | 0 |
| 0xC4 | 1000 | 0.40 | 0 |
| 0xC5 | 1000 | 0.50 | 0 |
| 0xC6 | 1000 | 0.70 | 0 |
| 0xC7 | 1000 | 1.00 | 0 |
| 0xC8 | 1000 | 1.20 | 0 |
| 0xC9 | 1000 | 1.40 | 0 |
| 0xCA | 1000 | 1.60 | 0 |
| 0xCB | 1000 | 1.80 | 0 |
| 0xCC | 2000 | 0.12 | 0 |
| 0xCD | 2000 | 0.15 | 0 |
| 0xCE | 2000 | 0.20 | 0 |
| 0xCF | 2000 | 0.30 | 0 |
| 0xD0 | 2000 | 0.40 | 0 |
| 0xD1 | 2000 | 0.50 | 0 |
| 0xD2 | 2000 | 0.70 | 0 |
| 0xD3 | 2000 | 1.00 | 0 |
| 0xD4 | 2000 | 1.20 | 0 |
| 0xD5 | 2000 | 1.40 | 0 |
| 0xD6 | 2000 | 1.60 | 0 |
| 0xD7 | 2000 | 1.80 | 0 |
| 0xD8 | 3000 | 0.12 | 0 |
| 0xD9 | 3000 | 0.15 | 0 |
| 0xDA | 3000 | 0.20 | 0 |
| 0xDB | 3000 | 0.30 | 0 |
| 0xDC | 3000 | 0.40 | 0 |
| 0xDD | 3000 | 0.50 | 0 |
| 0xDE | 3000 | 0.70 | 0 |
| 0xDF | 3000 | 1.00 | 0 |
| 0xE0 | 3000 | 1.20 | 0 |
| 0xE1 | 3000 | 1.40 | 0 |
| 0xE2 | 3000 | 1.60 | 0 |
| 0xE3 | 3000 | 1.80 | 0 |

### _EISYGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 3.00 |
| 0x01 | 1000 | 100.0 | 90.00 | 8.00 |
| 0x02 | 1500 | 85.00 | 80.00 | 15.0 |
| 0x03 | 3000 | 90.00 | 100.0 | 30.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _KRANN_FASTA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 1000 | 60 | 30 |
| 0x01 | 2000 | 85 | 30 |
| 0x02 | 2500 | 40 | 30 |
| 0x03 | 2900 | 85 | 30 |
| 0x04 | 5000 | 80 | 30 |
| 0x05 | 6000 | 80 | 30 |
| 0xFF | 0 | 0 | 0 |

### _KLANN_FASTA

| NR | NKW_LOC_WERT | RK_LOC_WERT | TMOT_LOC_WERT |
| --- | --- | --- | --- |
| 0x00 | 700 | 0.10 | 100 |
| 0x01 | 3000 | 0.10 | 100 |
| 0x02 | 3000 | 0.70 | 100 |
| 0x03 | 1500 | 0.70 | 100 |
| 0x04 | 5000 | 1.00 | 100 |
| 0x05 | 5000 | 1.70 | 100 |
| 0x06 | 800 | 0.20 | 20 |
| 0x07 | 1000 | 0.60 | 20 |
| 0x08 | 2000 | 0.80 | 20 |
| 0x09 | 800 | 0.40 | 0 |
| 0x0A | 1500 | 1.00 | 0 |
| 0xFF | 0 | 0 | 0 |

### T_BA_IST_NN

| NR | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |

### MOTORSG_TABLE_MSA_URSACHE_AV

| NR | TEXT |
| --- | --- |
| 0 | Ursache AV ausserhalb PM |
| 1 | Batterieladezustand-Erkennung nicht plausibel und FIT-Korrektur |
| 2 | Batterieladezustand-Erkennung nicht plausibel |
| 3 | FIT-Korrektur |
| 4 | Batterieladezustand zu niedrig  |
| 5 | Batterieladezustand zu niedrig und (Startspannung zu niedrig ODER Bordnetzstrom zu hoch ODER T_batt zu hoch) |
| 6 | T_batt zu hoch |
| 7 | T_batt zu hoch und (Startspannung zu niedrig ODER Bordnetzstrom zu hoch) |
| 8 | Startspannung zu niedrig |
| 9 | Startspannung zu niedrig und Bordnetzstrom zu hoch |
| 10 | Bordnetzstrom zu hoch |
| 11 | Reserve-Prio 1 |
| 12 | Reserve-Prio 2 |
| 13 | Reserve-Prio 3 |
| 14 | Reserve-Prio 4 |
| 15 | ungueltig |

### MOTORSG_TABLE_MSA_URSACHE_EA

| NR | TEXT |
| --- | --- |
| 0 | kein EA |
| 1 | EA infolge I_BN |
| 2 | EA infolge D_SoC |
| 3 | nicht definiert |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | Diagnose läuft nicht |
| xxxxxxx1 | 11 | Diagnose läuft |
| xxxxxx0x | 20 | Diagnose nicht für Fahrzyklus unterbrochen |
| xxxxxx1x | 21 | Diagnose für Fahrzyklus unterbrochen |
| xxxxx0xx | 30 | Zyklus-Flag nicht gesetzt |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt |
| xxxx0xxx | 40 | kein Fehler durch Tester |
| xxxx1xxx | 41 | Fehler durch Tester |
| xxx0xxxx | 50 | MIL aus |
| xxx1xxxx | 51 | MIL ein |
| xx0xxxxx | 60 | Fehler in Entprellphase |
| xx1xxxxx | 61 | Fehler entprellt, keine Scan Tool Ausgabe |
| xxxxxxxx | 0 | -- |

### T_1BIT_C_STATE_READY_OBD_2_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_C_STATE_READY_OBD_2_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_FS_ERW_LR_AUS_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 0 - Open Loop - Start-/Ansteuerbedingung für Regelung nicht erfüllt |
| 1 | Bit 0 - Open Loop - Start-/Ansteuerbedingung für Regelung nicht erfüllt |

### T_1BIT_FS_ERW_LR_AUS_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 1 - Closed Loop - Lambdaregelung-Diagnose |
| 1 | Bit 1 - Closed Loop - Lambdaregelung-Diagnose |

### T_1BIT_FS_ERW_LR_AUS_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 2 - Open Loop - Keine Regelung durch Fahrzustand. Gemisch zu fett/mager |
| 1 | Bit 2 - Open Loop - Keine Regelung durch Fahrzustand. Gemisch zu fett/mager |

### T_1BIT_FS_ERW_LR_AUS_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 3 - Open Loop - Fehler erkannt |
| 1 | Bit 3 - Open Loop - Fehler erkannt |

### T_1BIT_FS_ERW_LR_AUS_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 4 - Closed Loop - Min. eine Lambdasonde fehlerhaft. U.u. in Einzelbetrieb |
| 1 | Bit 4 - Closed Loop - Min. eine Lambdasonde fehlerhaft. U.u. in Einzelbetrieb |

### T_1BIT_FS_ERW_VVTL_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 0 - Fehler unterer Anschlag nicht gefunden |
| 1 | Bit 0 - Fehler unterer Anschlag nicht gefunden |

### T_1BIT_FS_ERW_VVTL_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 1 - Fehler oberer Anschlag nicht gefunden |
| 1 | Bit 1 - Fehler oberer Anschlag nicht gefunden |

### T_1BIT_FS_ERW_VVTL_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 2 - Fehler Verstellbereich Fuehrungssensor unplausibel |
| 1 | Bit 2 - Fehler Verstellbereich Fuehrungssensor unplausibel |

### T_1BIT_FS_ERW_VVTL_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 3 - Fehler Verstellbereich Referenzsensor unplausibel |
| 1 | Bit 3 - Fehler Verstellbereich Referenzsensor unplausibel |

### T_1BIT_FS_ERW_VVTL_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 4 - Fehler zulaessige Hoechstzeit Anschlaglernvorgang ueberschritten |
| 1 | Bit 4 - Fehler zulaessige Hoechstzeit Anschlaglernvorgang ueberschritten |

### T_1BIT_FS_ERW_VVTL_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 5 - Fehler Spannungsversorgung |
| 1 | Bit 5 - Fehler Spannungsversorgung |

### T_1BIT_FS_ERW_VVTL_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 6 - Fehler VVT-Sensor, Leistungsversorgung oder Stellglied |
| 1 | Bit 6 - Fehler VVT-Sensor, Leistungsversorgung oder Stellglied |

### T_1BIT_FS_ERW_VVTL_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bit 7 - Ruecknahme Lernanforderung |
| 1 | Bit 7 - Ruecknahme Lernanforderung |

### T_1BIT_GLF_HIGH_BYTE_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Systemtest noch nicht gestartet bzw. noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, Systemtest beendet |

### T_1BIT_GLF_HIGH_BYTE_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, elektrische Diagnose noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, elektrische Diagnose beendet |

### T_1BIT_GLF_HIGH_BYTE_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Eigendiagnose obere Luftklappe noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, Eigendiagnose obere Luftklappe beendet |

### T_1BIT_GLF_HIGH_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Eigendiagnose untere Luftklappe noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, Eigendiagnose untere Luftklappe beendet |

### T_1BIT_GLF_HIGH_BYTE_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Testeransteuerung untere Luftklappe nicht aktiv |
| 1 | gesteuerte Luftfuehrung, Testeransteuerung untere Luftklappe aktiv |

### T_1BIT_GLF_HIGH_BYTE_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Testeransteuerung obere Luftklappe nicht aktiv |
| 1 | gesteuerte Luftfuehrung, Testeransteuerung obere Luftklappe aktiv |

### T_1BIT_GLF_HIGH_BYTE_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Kommunikation noch nicht getestet |
| 1 | gesteuerte Luftfuehrung, Kommunikation in Ordnung |

### T_1BIT_GLF_HIGH_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, kein Fehler erkannt |
| 1 | gesteuerte Luftfuehrung, Fehler erkannt |

### T_1BIT_GLF_LOW_BYTE_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Varianten lernen noch nicht abgeschlossen |
| 1 | Varianten haetten gelernt werden koennen |

### T_1BIT_GLF_LOW_BYTE_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, obere Luftklappe nicht verbaut |
| 1 | gesteuerte Luftfuehrung, obere Luftklappe verbaut |

### T_1BIT_GLF_LOW_BYTE_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, untere Luftklappe nicht verbaut |
| 1 | gesteuerte Luftfuehrung, untere Luftklappe verbaut |

### T_1BIT_GLF_LOW_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine Fehlerabfrage aktiv, Verstellung moeglich (Normalbetrieb) |
| 1 | Fehlerabfrage aktiv, keine Verstellung moeglich |

### T_1BIT_GLF_LOW_BYTE_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, kein elektrischer Fehler |
| 1 | gesteuerte Luftfuehrung, elektrischer Fehler |

### T_1BIT_GLF_LOW_BYTE_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | obere Luftklappe, kein Fehler durch Eigendiagnose erkannt |
| 1 | obere Luftklappe, Fehler durch Eigendiagnose erkannt |

### T_1BIT_GLF_LOW_BYTE_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | untere Luftklappe, kein Fehler durch Eigendiagnose erkannt |
| 1 | untere Luftklappe, Fehler durch Eigendiagnose erkannt |

### T_1BIT_GLF_LOW_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, kein Systemtest aktiv (Normalbetrieb) |
| 1 | gesteuerte Luftfuehrung, Systemtest aktiv |

### T_1BIT_STATE_READY_OBD_1_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### T_1BIT_STATE_READY_OBD_1_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_1_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_1_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_STATE_READY_OBD_2_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### T_1BIT_SWITCH_POSITION_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### T_1BIT_SWITCH_POSITION_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor laeuft |

### T_1BIT_SWITCH_POSITION_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### T_1BIT_SWITCH_POSITION_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### T_1BIT_SWITCH_POSITION_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### T_1BIT_SWITCH_POSITION_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT0_DOP

| WERT | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 2 aktiv |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT5_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### T_1BIT_SWITCH_POSITION_HIGH_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Umschalten auf KFPEDS nicht erfolgt |
| 1 | Umschalten auf KFPEDS erfolgt |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT3_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT4_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Verriegelungsanforderung Wegfahrsperre für Einspritzung nicht aktiv |
| 1 | Verriegelungsanforderung Wegfahrsperre für Einspritzung aktiv |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT6_DOP

| WERT | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### T_1BIT_SWITCH_POSITION_LOW_BYTE_BIT7_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich erforderlich |
| 1 | Drosselklappen-Neuabgleich nicht erforderlich |

### T_1BYTE_FETRAFLA_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kein Energiesparmode gesetzt |
| 1 | Produktionsmode gesetzt |
| 2 | Transportmode gesetzt |
| 4 | Flashmode gesetzt |
| 255 | Ungueltig |

### T_1BYTE_FS_DKVS_DOP

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
| 8 | Funktion vollständig durchlaufen Fehler erkannt, fehlerhafte Gemischadaption |
| 9 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 255 | ungueltiger Wert |

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

### T_1BYTE_FS_LSVK

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Lambda-Sollwert geprüft |
| 2 | Dynamik LSU geprüft |
| 255 | Ungültiger Wert |

### T_1BYTE_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV_0_1_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_1BYTE_KATHEIZFUNKTION_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivierung der Katheizfunktion inaktiv |
| 1 | Deaktivierung der Katheizfunktion aktiv |

### T_1BYTE_MSA_KUP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Kupplung nicht oder zu weniger als 10% betaetigt |
| 1 | Kupplung zu mindestens 10% betaetigt |
| 2 | Kupplungssensorsignal unplausibel |
| 3 | Kupplung zu mindestens 90% betaetigt |

### T_1BYTE_SOUNDTUNING_DEAKTIVIERUNG_AKTIV_INAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Deaktivierung des Sound-Tuning inaktiv |
| 1 | Deaktivierung des Sound-Tuning aktiv |

### T_1BYTE_ST_MONTAGE_MODUS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Montage-Modus ist inaktiv |
| 1 | Montage-Modus ist aktiv |

### T_BA_IST_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |

### T_B_1BYTE_LESEN_0_1

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_EFRAMAX_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_EFRAMIN_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_FRASTAB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_KUPPLEXT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_KUPPL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_MSAFZG_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_MSRDKAD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Massestromregler auf DK nicht erfolgt |
| 1 | Massestromregler auf DK erstmalig erfolgt |

### T_B_MSRHUBAD_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Massestromregler auf Hub nicht erfolgt |
| 1 | Massestromregler auf Hub erstmalig erfolgt |

### T_B_NMOT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_ONABK_OZDEAKTIV_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_STANDARD_1BYTE_LESEN_0_1

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 255 | Groesser 1 |

### T_B_TEAKT_DOP

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_TEAKT_DOP_1

| WERT | TEXT |
| --- | --- |
| 0 | ---- |
| 1 | TRUE |

### T_B_VVTNOTL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_B_SGRHWLSIKO_DOP

| WERT | TEXT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |

### T_CILCN_STDIAGTSTR_TEXT_DOP

| WERT | TEXT |
| --- | --- |
| 1 | Bedingung für mind. 1 Fehler (E_abc) im System erkannt |
| 2 | Bedingung Summenfehler durch DAFIM gesetzt |
| 4 | Bedingung Summenfehler durch DAFIM gesetzt (ungefilterte Adaptionswerte) |
| 16 | Adaption abgeschlossen |
| 32 | Erkennung eines Fehlers während der Diagnose |
| 64 | Lambda-Imbalance Diagnose aktiv |
| 128 | Lambda-Imbalance Diagnose ist freigegeben |
| 255 | Zustand nicht definiert |

### T_CILCN_STTSTR_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Adaption läuft |
| 1 | Adaption blockiert, Motor außerhalb Drehzahl-/Lastbereich |
| 2 | Adaption blockiert, Motortemperatur außerhalb zul. Bereich |
| 3 | Adaption blockiert, KAT-Temperatur außerhalb zul. Bereich |
| 4 | Adaption blockiert wegen Fehlerspeichereintrag |
| 5 | Adaption blockiert, weil Lambdawert nicht 1, Kraftstoffversorgungssystem nicht i.O., KAT-Heizen aktiv oder Bauteileschutz aktiv |
| 6 | Adaption blockiert, weil Tankentlüftung oder Gemischadaption aktiv |
| 255 | Adaption ist blockiert (sonstige Freigabebedingung nicht erfüllt) |

### T_EOL_RAM_1__DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Startbedingungen nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | Undefinierter Zustand |
| 5 | Funktionstest laeuft |
| 6 | Funktion ergebnislos beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion durchlaufen und kein Fehler erkannt |
| 9 | Funktion durchlaufen und Fehler erkannt |

### T_STATE_DMTL_DOP

| WERT | TEXT |
| --- | --- |
| 0 | START |
| 1 | Referenzleck Messung |
| 2 | Grobleck Messung |
| 3 | Feinleck Messung |
| 4 | Zweite Referenzleck Messung |
| 6 | Diagnose beendet |
| 10 | Funktion nicht startbar |
| 11 | Batteriespannnug ausserhalb Bereich |
| 12 | Schwankung vom Referenzstrom zu groß |
| 13 | Elektrischer Fehler vorhanden |
| 14 | Max. Diagnosezeit erreicht |
| 15 | Keine Freigabe TEV aktiv |
| 20 | Funktion wurde abgebrochen |
| 23 | Spannungsschwankung zu groß |
| 24 | Zündung an |
| 30 | Funktion beendet: Tank dicht |
| 31 | Funktion beendet: Feinleck erkannt |
| 32 | Funktion beendet: Grobleck erkannt |
| 33 | Funktion beendet: Modulfehler |
| 34 | Funktion beendet: Kein Grobleck erkannt |
| 255 | Funktion noch nicht gestartet |

### T_STATE_HAL_INTERN_DOP

| WERT | TEXT |
| --- | --- |
| 0 | HAL_RESET |
| 1 | HAL_INITIALES_LERNEN |
| 2 | HAL_INITIAL_GELERNT |
| 3 | HAL_VERIFIKATION_FEHLGESCHLAGEN (1-mal) |
| 4 | HAL_VERIFIKATION_FEHLGESCHLAGEN (2-mal) |
| 5 | HAL_VERIFIKATION_FEHLGESCHLAGEN (3-mal) |
| 6 | HAL_VERIFIKATION_FEHLGESCHLAGEN (4-mal) |
| 7 | HAL_VERIFIKATION_FEHLERHAFT |
| 8 | HAL_ADAPTION_LERNEN |
| 9 | HAL_VERIFIKATION_OK |

### T_STATE_KSU_INTERN_DOP

| WERT | TEXT |
| --- | --- |
| 0 | HAL_HA_UNPLAUSIBEL |
| 1 | HAL_INT_STATUS_NDIFF |
| 2 | HAL_INT_STATUS_PLAUSFREIGABE_DME |

### T_ST_ATLSVC_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Startbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 5 | Funktionstest laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### T_ST_ATLSVC_PVDK_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Ladedruckdiagnose ohne Ergebnis |
| 1 | Ladedruck fehlerfrei |
| 2 | Gesamtladedruck zu niedrig |
| 3 | Turbolader 1 mit Ladedruckfehler |
| 4 | Turbolader 2 mit Ladedruckfehler |
| 5 | Gesamtladedruck zu niedrig, Bank nicht identifiziert |

### T_ST_TESTPOELSYS2_DOP

| WERT | TEXT |
| --- | --- |
| 0 | -- |
| 1 | Abbruch durch Tester |
| 2 | Warmlauf (Oeltemperatur zu niedrig) |
| 3 | Abbruch aufgrund zu hoher Oeltemperatur |
| 4 | Abbruch aufgrund fehlender Reglerfreigabe |
| 5 | Abbruch der Diagnosefunktion nach Schritt 1 (Fehlerspeicher auslesen) |
| 6 | Abbruch der Diagnosefunktion nach Schritt 2 (Fehlerspeicher auslesen) |
| 7 | Abbruch der Diagnosefunktion nach Schritt 3 (Fehlerspeicher auslesen) |
| 8 | Testfunktion 1 laeuft (konstante Drehzahl, Solldruck-Spruenge) |
| 9 | Testfunktion 2 laeuft (konstante Drehzahl, Solldruck-Rampen) |
| 10 | Testfunktion 3 laeuft (Drehzahl-Rampen, konstanter Solloeldruck) |

### T_ST_TESTPOELSYS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktionstest laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### T_S_VSMNHB_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Schalter für Testereingriff nicht aktiv |
| 1 | Schalter für Testereingriff aktiv |

### T_STAT_EWG_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Start |
| 1 | geregelter Betrieb |
| 2 | Zuhaltebetrieb |
| 3 | unteren Anschlag lernen (WG geschlossen) |
| 4 | oberen Anschlag lernen (WG offen) |
| 5 | Notbetrieb, Abschaltung |
| 6 | Notbetrieb, gesteuert Auffahren |
| 7 | Abschaltung im Nachlauf |
| 8 | Standby wegen nicht gültigem Sensor |
| 255 | Status nicht Definiert |

### T_VVTCHKSF1_FS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Keine Testeranforderung vorhanden. |
| 1 | Startbedingungen nicht erfüllt (Motorlauf). |
| 2 | nicht belegt |
| 3 | nicht belegt |
| 4 | nicht belegt |
| 5 | Lernvorgang aktiv. |
| 6 | nicht belegt |
| 7 | Abbruch durch Motorlauf, Fehler im VVT-System, Rücknahme Lernanforderung. |
| 8 | Lernvorgang ohne Fehler beendet. |
| 9 | Lernvorgang mit aufgetretenem Fehler beendet. |
