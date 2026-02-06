# msd85y.prg

## General

|  |  |
| --- | --- |
| File | msd85y.prg |
| Type | PRG |
| Jobs | 320 |
| Tables | 93 |
| Origin | BMW EA-410 Lorch |
| Revision | 5.003 |
| Author | P&Z EA-410 Berger, P&Z EA-413 Zeller, IAVGmbH EA-14 Koch |
| ECU Comment | SGBD für MSD85 Hybrid C-Muster mit SW 9SQE610S |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSD85 Hybrid |  |  |
| ORIGIN | string | BMW EA-410 Lorch |  |  |
| REVISION | string | 5.003 |  |  |
| AUTHOR | string | P&Z EA-410 Berger, P&Z EA-413 Zeller, IAVGmbH EA-14 Koch |  |  |
| COMMENT | string | SGBD für MSD85 Hybrid C-Muster mit SW 9SQE610S |  |  |
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

### SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

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

### FS_LESEN_DETAIL

0x17 FS_LESEN_DETAIL Fehlerspeicher lesen (ein Fehler / alle Details) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### FS_LESEN_FREEZE_FRAME

0x210A FS_LESEN_FREEZE_FRAME Fehlerspeicher auslesen mit SAE Werten Umwelt und P-Code Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | die Nummer des zu lesenden Fehlers eingeben |

### FS_LESEN_FREEZE_FRAME_EXTRA_LONG

0x224019 FS_LESEN_FREEZE_FRAME_EXTRA_LONG Fehlerspeicher auslesen mit erweiterten SAE Werten Umwelt und P-Code Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | die Nummer des zu lesenden Fehlers eingeben |

### FS_LESEN_HEX

0x17 FS_LESEN_HEX Fehlerspeicher auslesen als Hex Dump Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | Eingabe der FehlerNummer |

### IS_LESEN

0x222000 IS_LESEN Infospeicher lesen (alle Info-Meldungen / Ort und Art) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### IS_LESEN_DETAIL

0x17 IS_LESEN_DETAIL Infospeicher lesen (ein Fehler / alle Details) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### HS_LESEN

0x222100 HS_LESEN Historyspeicher lesen (alle Info-Meldungen / Ort und Art) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### IDENT_AIF

0x1A80 und 0x23 IDENT_AIF Identdaten und Anwender Informations Felder Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### INTERFACETYPE

Interface-Typ bestimmen und ausgeben (Wichtig für Baudratenumschaltung: da bei ADS, EADS und OBD nur 115200 Baud und bei EDIC nur 125000 Baud möglich sind) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### SET_BAUDRATE

Initialisierung der Kommunikationsparameter mit bestimmter Baudrate Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE | string | die gewuenschte Baudrate |

### SET_PARAMETER

Aenderung der Kommunikationsparameter bei Long-Parametersätzen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| KONZEPT | string | Konzept |
| BAUDRATE | string | Baudrate |
| TIMEOUT | string | Timeout in ms |
| REGENERATIONSZEIT | string | Regenerationszeit in ms |
| TELEGRAMMENDEZEIT | string | Telegrammendezeit in ms |

### SPEICHER_LESEN_ASCII

0x23 SPEICHER_LESEN_ASCII Auslesen des Steuergeraete-Speichers Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | SpeicherSegment aus Tabelle SEG_NAME SEG_TEXT |
| ADRESSE | long | Speicherzellenadresse 0x00000000 - 0xFFFFFFFF |
| ANZAHL | int | Anzahl auszulesende Bytes 1 - n ( 254 ) |

### STEUERN_ENDE_WAPUT

0x308300 STEUERN_ENDE_WAPUT Wasserpumpe Turbolader Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_WAPUT

0x308307 STEUERN_WAPUT Wasserpumpe Turbolader ansteuern (Lagerstuhl) Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_WAPUT_WERT | real | Tastverhaeltniss Wasserpumpe Turbolader Schalter Wasserpumpe  Einheit: 0/1   Min: 0 Max: 1 |
| SW_TO_WAPUT_WERT | unsigned long | Timeout Wasserpumpe Turbolader 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_WAPUPEB

0x307D07 STEUERN_WAPUPEB Wasserpumpe Leistungselektronik Hybrid (Power Electronic Box) ansteuern Ansteuererung nur 10 Sec möglich aufgrund Bauteilschutz und n=0 und v=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_WAPUPEB_WERT | real | Tastverhaeltniss Wasserpumpe Leistungselektronik Hybrid (Power Electronic Box) (A2L: n_rel_cwp_sp_4_ext_adj) N_REL_CWP_SP_4_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_WAPUPEB_WERT | unsigned long | Timeout Wasserpumpe Leistungselektronik Hybrid (Power Electronic Box) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 10 |

### STEUERN_ENDE_WAPUPEB

0x307D00 STEUERN_ENDE_WAPUPEB Wasserpumpe Leistungselektronik Hybrid (Power Electronic Box) Ansteuerung beenden NO_CON

| Name | Type | Description |
| --- | --- | --- |
| IOLI_WAPUPEB_WERT | string | inputOutputLocalID BMW_inputOutputLocalID |

### STATUS_MSA2HISTORIENOSTOP

0x22403A STATUS_MSA2HISTORIENOSTOP MSA2 Historienspeicher fuer verhinderte MSA-Stopps

_No arguments._

### STATUS_RBMMS1

0x224027 STATUS_RBMMS1 Rate Based Monitoring Motorsteuerung MSD85 Block 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RBMMS2

0x224028 STATUS_RBMMS2 Rate Based Monitoring Motorsteuerung MSD85 Block 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ATLDIAG

0x224044 STATUS_ATLDIAG Turboladerstatus auslesen

_No arguments._

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_BETRIEBSSTUNDENZAEHLER

0x2CF0 5AB4 STATUS_BETRIEBSSTUNDENZAEHLER Betriebsstundenzaehler auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### ADAP_SELEKTIV_LOESCHEN

0x3130 ADAP_SELEKTIV_LOESCHEN Löschen von Adaptionen und gelernte Varianten Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### ADAP2_SELEKTIV_LOESCHEN

0x3131 ADAP2_SELEKTIV_LOESCHEN Löschen von Adaptionen Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

0x3130001000 STEUERN_BATTERIETAUSCH_REGISTRIEREN Batterietausch registrieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

0x31F6 START_SYSTEMCHECK_PM_MESSEMODE Systemdiagnose BatterieSensor Messemode setzen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

0x32F6 STOP_SYSTEMCHECK_PM_MESSEMODE Systemdiagnose BatterieSensor Messmode beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_BZEINFO

0x22401A _STATUS_BZEINFO Infospeicher Batterie Zustands Erkennung (BZE) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_GENINFO

0x22401B _STATUS_GENINFO Infospeicher Generatordiagnose erweitert auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_LEMINFO

0x224017 _STATUS_LEMINFO Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_MSAINFO

0x224018 _STATUS_MSAINFO Infospeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### _STATUS_VERBREDINFO

0x22401D _STATUS_VERBREDINFO Verbraucherreduzierungsspeicher auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### ECU_CONFIG

0x225FF2 ECU_CONFIG Variante auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### ECU_CONFIG_RESET

0x2E5FF204 ECU_CONFIG_RESET Variante loeschen Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_AT_WERT | unsigned long | Automatik Getriebe LV_AT   Min: 0 Max: 1 |
| SW_AC_WERT | unsigned long | Klimaanlage LV_VAR_ACIN   Min: 0 Max: 1 |
| SW_AMT_WERT | unsigned long | SMG Sequentielles Manuelles Getriebe LV_VAR_AMT   Min: 0 Max: 1 |
| SW_ARS_WERT | unsigned long | ARS Aktive Roll-Stabilisierung LV_VAR_ARS   Min: 0 Max: 1 |
| SW_ASR_WERT | unsigned long | ASR Anti Schlupf Regelung LV_VAR_ASR   Min: 0 Max: 1 |
| SW_BN_MSW_WERT | unsigned long | Tempomat ueber CAN LV_VAR_BN_MSW   Min: 0 Max: 1 |
| SW_DCC_WERT | unsigned long | Entfernungsueberwachung LV_VAR_DCC   Min: 0 Max: 1 |
| SW_EBOX_CFA_WERT | unsigned long | E-Box-Luefter LV_VAR_EBOX_CFA   Min: 0 Max: 1 |
| SW_ETCU_WERT | unsigned long | SMG/EGS Steuergeraet LV_VAR_ETCU   Min: 0 Max: 1 |
| SW_ICL_WERT | unsigned long | Kombi ueber CAN LV_VAR_ICL   Min: 0 Max: 1 |
| SW_MSW_WERT | unsigned long | Multifunktionslenkrad LV_VAR_MSW   Min: 0 Max: 1 |
| SW_PSTE_WERT | unsigned long | Elektrische Lenkung LV_VAR_PSTE   Min: 0 Max: 1 |
| SW_SOF_SWI_WERT | unsigned long | Sport-Taster CONF_SOF_SWI   Min: 0 Max: 1 |
| SW_GEAR_WERT | unsigned long | Komfortstart LV_VAR_BN_GEAR_REV   Min: 0 Max: 1 |
| SW_EF_WERT | unsigned long | Abgasklappe LV_VAR_EF   Min: 0 Max: 1 |
| SW_ECRAS_WERT | unsigned long | Kuehlerjalousie oben und unten LV_VAR_ECRAS_UP   Min: 0 Max: 1 |
| SW_RLY_ST_WERT | unsigned long | Starterrelais LV_VAR_RLY_ST   Min: 0 Max: 1 |
| SW_ASR3_WERT | unsigned long | ASR3 Steuergeraet LV_VAR_ASR_3   Min: 0 Max: 1 |
| SW_BN_LDM_WERT | unsigned long | Laengs-Dynamik-Management LV_VAR_BN_LDM   Min: 0 Max: 1 |
| SW_BN_LTG_HDLP_L_WERT | unsigned long | Lampenzustand LV_VAR_BN_LTG_HDLP_L   Min: 0 Max: 1 |
| SW_LSH_DOWN_WERT | unsigned long | Lambdasonde hinter Katalysator LV_VAR_LSH_DOWN   Min: 0 Max: 1 |
| SW_LSH_UP_WERT | unsigned long | Lambdasonde vor Katalysator LV_VAR_LSH_UP   Min: 0 Max: 1 |
| SW_ASR_4_WERT | unsigned long | ASR4 Steuergeraet LV_VAR_ASR_4   Min: 0 Max: 1 |
| SW_MAF_WERT | unsigned long | Heissfilmluftmassenmesser LV_VAR_MAF   Min: 0 Max: 1 |
| SW_PST_2_WERT | unsigned long | AFS Active-Front-Steering LV_VAR_PSTE_2   Min: 0 Max: 1 |
| SW_BN_EFP_WERT | unsigned long | Elektrische Kraftstoffpumpe ueber CAN LV_VAR_BN_EFP   Min: 0 Max: 1 |
| SW_SENS_BAT_SMT_DET_WERT | unsigned long | Intelligenter Batteriesensor LV_SENS_BAT_SMT_DET   Min: 0 Max: 1 |
| SW_BN_TRL_WERT | unsigned long | Anhaengermodul LV_VAR_BN_TRL   Min: 0 Max: 1 |
| SW_SP_ETCU_WERT | unsigned long | Sportgetriebe (A2L-Name: lv_var_etcu) LV_VAR_ETCU   Min: 0 Max: 1 |
| SW_TCT_WERT | unsigned long | Doppelkupplungsgetriebe(A2L-Name: lv_var_tct) LV_VAR_TCT   Min: 0 Max: 1 |
| SW_AEB_WERT | unsigned long | Loeschen Variante Aktives Motorlager ( 0= nicht LÃ¶schen 1= LÃ¶schen) LV_VAR_AEB   Min: 0 Max: 1 |
| SW_TQ_PBR_WERT | unsigned long | Loeschen Variante Elektromechanische Parkbremse(0= nicht LÃ¶schen 1= LÃ¶schen) (A2L-Name: lv_var_tq_pbr) LV_VAR_TQ_PBR   Min: 0 Max: 1 |

### HS_LOESCHEN

0x3103 HS_LOESCHEN Historyspeicher loeschen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### INNENTEMP_LESEN

0x301001 INNENTEMP_LESEN Steuergeraete-Innentemperatur auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_ATL

0x31D0 START_SYSTEMCHECK_ATL Diagnosefunktion Abgasturbolader starten 

_No arguments._

### START_SYSTEMCHECK_DMTL

0x31DA START_SYSTEMCHECK_DMTL Ansteuern Diagnosefunktion DMTL Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

0x3125 START_SYSTEMCHECK_EVAUSBL Ansteuern Diagnosefunktion Einspritzventilausblendung Aktivierung: Klemme 15 = EIN UND Motorstatus = (Leerlauf ODER Teillast) UND Drehzahl < 3000 1/min Activation: LV_IGK = 1 UND STATE_ENG = (IS ODER PL) UND N < C_N_MAX_KWP

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR_WERT | unsigned long | Nummer des auszublendenden Einspritzventils INH_IV_KWP   Min: 0 Max: 255 |

### START_SYSTEMCHECK_L_REGELUNG_AUS

0x31D9 START_SYSTEMCHECK_L_REGELUNG_AUS Ansteuerung Lambdaregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_L_SONDE

0x31DF START_SYSTEMCHECK_L_SONDE Ansteuern Diagnosefunktion vertauschte Lambdasonden Aktivierung: Klemme 15 = EIN UND Leerlauf UND Motortemperatur > 77 Grad C UND Abgastemperatur[i] > -48 Grad C UND Lambdasondensignal[i] = EIN UND Bereitschaft Lambdasonde hinter Katalsyator Bank[i] rueckgesetzt = EIN UND Status Lambdasondenheizung vor Katalysator Bank[i] = LSH_POW_CTL UND Status Lambdasondenheizung hinter Katalysator Bank[i] = LSH_POW_CTL UND Startverriegelung Lambdasonden aus Signalplausibilitaetstest Bank[i] = AUS (i = 1 FUER Bank 1, i = 2 FUER Bank 2) Activation: LV_IGK = 1 UND LV_IS = 1 UND TCO > C_TCO_MIN_VLS_EOL UND TEG_CAT_DOWN_MDL[i] > C_TEG_CAT_DOWN_EOL UND LV_LAMB_LS_UP_VLD[i] = 1 UND LV_LS_DOWN_READY[i] = 1 UND STATE_LSH_UP[i] = LSH_POW_CTL UND STATE_LSH_DOWN[i] = LSH_POW_CTL UND LV_DIAG_ACT_INH_LS_UP_DOWN[i] = 0 (i = 1 FUER Bank 1, i = 2 FUER Bank 2)

_No arguments._

### START_SYSTEMCHECK_LLERH

0x3126 START_SYSTEMCHECK_LLERH Ansteuern Diagnosefunktion Leerlauf-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | unsigned long | LL-Sollwert 0 bis 3000 1/min N_SP_IS_EXT_ADJ   Einheit: rpm   Min: 0 Max: 10000 |

### START_SYSTEMCHECK_TEV

0x3122 START_SYSTEMCHECK_TEV Ansteuern Diagnosefunktion Tankentlueftungsventil Aktivierung: Klemme 15 = EIN UND Phase Motorstart beendet = EIN UND Funktionscheck TEV = EIN UND Geschwindigkeit = 0 km/h UND LV_MAF_SP_TQI_DYW_DIAGCPS = 1 UND (Betriebsart TEV = 1 ODER Betriebsart TEV = 2) UND Fehlerspeichereintrag TEV = AUS Activation: LV_IGK = 1 UND LV_ST_END = 1 UND LV_INH_DIAGCPS = 0 UND VS = 0 UND LV_MAF_SP_TQI_DYW_DIAGCPS = 1 UND (OPM_AV_DIAGCPS = 1 ODER OPM_AV_DIAGCPS = 2) UND LV_ERR_DIAGCPS = 0

_No arguments._

### STATUS_ADAPTION_DK

0x224008 STATUS_ADAPTION_DK Drosselklappenadaptionswerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ADAPTION_GEMISCH

0x22400A STATUS_ADAPTION_GEMISCH Gemischadaptionswerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_AGK

0x30C101 STATUS_AGK Abgasklappe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

0x300A01 STATUS_AN_LUFTTEMPERATUR Ansauglufttemperatur 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ANWS

0x30EE01 STATUS_ANWS Vanos Auslass Ventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BLS

0x300201 STATUS_BLS Bremslichtschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BLTS

0x300301 STATUS_BLTS Bremslichttestschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_AGK

0x223240 STATUS_CODIERUNG_AGK Codierung fuer Abgasklappe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_ASMOT

0x223260 STATUS_CODIERUNG_ASMOT Codierung elektrische Diagnose der Funktion Abschaltung Klemme 15 auslesen

_No arguments._

### STATUS_CODIERUNG_BZE

0x223230 STATUS_CODIERUNG_BZE Codierung fuer BZE (Batterie Zustands Erkennung) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_CODAUSST1

0x223300 STATUS_CODIERUNG_CODAUSST1 Codierung Fahrzeugmasse betriebstundenabhaengig auslesen

_No arguments._

### STATUS_CODIERUNG_CODAUSST2

0x223310 STATUS_CODIERUNG_CODAUSST2 Codierung Fahrzeugmasse betriebstundenunabhaengig auslesen

_No arguments._

### STATUS_CODIERUNG_GENBUS

0x223290 STATUS_CODIERUNG_GENBUS Codierung Generator Bus auslesen

_No arguments._

### STATUS_CODIERUNG_IGR

0x223210 STATUS_CODIERUNG_IGR Codierung fuer IGR (Intelligente Generator-Regelung) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_KAT

0x223001 STATUS_CODIERUNG_KAT Codierung fuer Katalysator auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_LEISTUNGSSTUFE

0x223020 STATUS_CODIERUNG_LEISTUNGSSTUFE Codierung fuer Leistungsstufe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_MIL

0x223000 STATUS_CODIERUNG_MIL Codierung fuer MIL (Malfunction Indication Lamp) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_OEL

0x223200 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_SPA

0x223220 STATUS_CODIERUNG_SPA Codierung fuer SPA (Schaltpunktanzeige) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_VMAX

0x223010 STATUS_CODIERUNG_VMAX Codierung fuer maximale Geschwindigkeit auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CYBL_HOM

0x22403D STATUS_CYBL_HOM Injektor Adaptionswerte lesen CYBL_HOM (FASTA GROESSEN)

_No arguments._

### STATUS_DFMONITOR

0x224001 STATUS_DFMONITOR Batterieladezustand auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DIGITAL_0

0x224007 STATUS_DIGITAL_0 Status Schaltzustaende 0 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DIGITAL_1

0x224002 STATUS_DIGITAL_1 Status Schaltzustaende Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DKP_VOLT

0x302A01 STATUS_DKP_VOLT Drosselklappe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DKP2

0x308501 STATUS_DKP2 Drosselklappe 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DMTL_HEIZUNG

0x30CE01 STATUS_DMTL_HEIZUNG Diagnosemodul-Tank Leckage Heizung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DMTL_P

0x30CC01 STATUS_DMTL_P Diagnosemodul-Tank Leckage Pumpe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DMTL_V

0x30CD01 STATUS_DMTL_V Diagnosemodul-Tank Leckage Ventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_E_LUEFTER

0x30DA01 STATUS_E_LUEFTER E-Luefter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EBL

0x30C801 STATUS_EBL E-Box-Luefter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EISYDR

0x33E2 STATUS_EISYDR Auslesen Eisy-Adaptionswerte mit Druckregelung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EISYGD

0x33E1 STATUS_EISYGD Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EKP

0x30D801 STATUS_EKP Elektrische Kraftstoffpumpe 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EML

0x30D601 STATUS_EML EML (Engine Malfunction Lamp) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ENERGIESPARMODE

0x22100A STATUS_ENERGIESPARMODE Status Energiesparmode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ENWS

0x30ED01 STATUS_ENWS Vanos Einlass Ventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV1

0x30E101 STATUS_EV1 Einspritzventil 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV2

0x30E201 STATUS_EV2 Einspritzventil 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV3

0x30E301 STATUS_EV3 Einspritzventil 3 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV4

0x30E401 STATUS_EV4 Einspritzventil 4 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV5

0x30E501 STATUS_EV5 Einspritzventil 5 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV6

0x30E601 STATUS_EV6 Einspritzventil 6 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV7

0x30E701 STATUS_EV7 Einspritzventil 7 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EV8

0x30E801 STATUS_EV8 Einspritzventil 8 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_EWAP

0x30BF01 STATUS_EWAP elektr. Wasserpumpe ueber LIN auslesen NO_CON

_No arguments._

### STATUS_FASTA10

0x224015 STATUS_FASTA10 FASTA-Messwertblock 10 lesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_FWV1

0x301E01 STATUS_FWV1 Fahrerwunschversorgung 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_FWV2

0x301F01 STATUS_FWV2 Fahrerwunschversorgung 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_GVOBD

0x225F80 STATUS_GVOBD Gemischvertrimmung fuer OBD-Demo und PVE lesen.

_No arguments._

### STATUS_HDPR

0x308201 STATUS_HDPR Hochdruckpumpenrelais auslesen NO_CON

_No arguments._

### STATUS_IMAALLE

0x225F90 STATUS_IMAALLE Abgleichwerte Injektoren auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KB1

0x303001 STATUS_KB1 Klopfbaustein 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KB2

0x303101 STATUS_KB2 Klopfbaustein 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KB3

0x304401 STATUS_KB3 Klopfbaustein 3 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KB4

0x304501 STATUS_KB4 Klopfbaustein 4 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KDF

0x301A01 STATUS_KDF Kraftstoffdruck im Einspritzsystem auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KDF2

0x304301 STATUS_KDF2 Kraftstoffdruck im Einspritzsystem Bank 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KDFN

0x303F01 STATUS_KDFN Kraftstoffdruck im Niederdruckbereich auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KFT

0x30C901 STATUS_KFT Kennfeldthermostat auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KLANN

0x33E4 STATUS_KLANN Auslesen Klann-Adaptionswerte (Anforderung aus CP10798) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KQE

0x224035 STATUS_KQE Messwerte Kraftstoffqualitaetserfassung auslesen

_No arguments._

### STATUS_KRANN

0x33E3 STATUS_KRANN Auslesen Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KUP

0x300401 STATUS_KUP Kupplungsschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_L_SONDE

0x302101 STATUS_L_SONDE Lambdasonde vor Kat Bank1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_L_SONDE_2

0x302301 STATUS_L_SONDE_2 Lambdasonde vor Kat Bank2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_L_SONDE_2_H

0x302401 STATUS_L_SONDE_2_H Lambdasonde hinter Kat Bank2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_L_SONDE_H

0x302201 STATUS_L_SONDE_H Lambdasonde hinter Kat Bank1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LDS1

0x30B601 STATUS_LDS1 Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LDS2

0x30B701 STATUS_LDS2 Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LL_ABGLEICH

0x225FF0 STATUS_LL_ABGLEICH Abgleichwert LL (Leerlauf) auslesen  ACHTUNG: Dieser Diagnosedienst darf nur in Ausnahmefaellen als Ersatz fuer den entsprechenden Diagnosedienst 0x30xx-xx verwendet werden.

_No arguments._

### STATUS_LMM_MASSE

0x302501 STATUS_LMM_MASSE Luftmassenmesser 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LMM2

0x302601 STATUS_LMM2 Luftmassenmesser 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LSH1

0x30D001 STATUS_LSH1 Lambdasondenheizung vor Kat Bank1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LSH2

0x30D101 STATUS_LSH2 Lambdasondenheizung hinter Kat Bank1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LSH3

0x30D201 STATUS_LSH3 Lambdasondenheizung vor Kat Bank2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LSH4

0x30D301 STATUS_LSH4 Lambdasondenheizung hinter Kat Bank2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE

0x224000 STATUS_MESSWERTE Messwerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE_LRP

0x22402D STATUS_MESSWERTE_LRP Messwerte Laufruhepruefung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MFMA

0x224032 STATUS_MFMA Messwerte Kleinstmengenadaption auslesen

_No arguments._

### STATUS_MFMA_DS

0x22403E STATUS_MFMA_DS Adaptionswerte MFMA_DS Lesen

_No arguments._

### STATUS_MIL

0x30D401 STATUS_MIL MIL (Malfunction Indicator Lamp) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORLAUFUNRUHE

0x224003 STATUS_MOTORLAUFUNRUHE Motorlaufunruhewerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORTEMPERATUR

0x300C01 STATUS_MOTORTEMPERATUR Motortemperatur auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MSA2_DEAK_SAV

0x225F85 STATUS_MSA2_DEAK_SAV Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) auslesen

_No arguments._

### STATUS_MSA2HISTORIENOSTART

0x224040 STATUS_MSA2HISTORIENOSTART MSA2HISTORIENOSTART Ringspeicher auslesen

_No arguments._

### STATUS_MSV

0x30BD01 STATUS_MSV Mengensteuerventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

0x224006 STATUS_NOCKENWELLE_ADAPTION Nockenwellenadationswerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ODS

0x300501 STATUS_ODS Oeldruckschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_OEL

0x300E01 STATUS_OEL Oelsensor auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_PM_BACKUP

0x225F8B STATUS_PM_BACKUP Auslesen des PM-Backup Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

0x302801 STATUS_PWG_POTI_SPANNUNG Fahrerwunsch 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_PWG2

0x302901 STATUS_PWG2 Fahrerwunsch 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RBMMODE9

0x224026 STATUS_RBMMODE9 Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RUHESTROMMESSUNG

0x332B STATUS_RUHESTROMMESSUNG Auslesen Ruhestrompruefung mit IBS Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SDF1

0x301801 STATUS_SDF1 Saugrohrdruck1 / Ladedruck1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SDF2

0x301901 STATUS_SDF2 Saugrohr-, Ladedruck und Ansauglufttemperatur fuer N54 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SR

0x30C401 STATUS_SR Startrelais auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_ATL

0x33D0 STATUS_SYSTEMCHECK_ATL Diagnosefunktion Abgasturbolader auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

0x33DA STATUS_SYSTEMCHECK_DMTL Auslesen Diagnosefunktion DMTL Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_EVAUSBL

0x3325 STATUS_SYSTEMCHECK_EVAUSBL Funktionsstatus Einspritzventilausblendung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

0x33D9 STATUS_SYSTEMCHECK_L_REGELUNG_AUS Auslesen Lambdaregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE

0x33DF STATUS_SYSTEMCHECK_L_SONDE Auslesen Diagnosefunktion vertauschte Lambdasonden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_LLERH

0x3326 STATUS_SYSTEMCHECK_LLERH Auslesen Diagnosefunktion Leerlauf-Erhoehung

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

0x33F6 STATUS_SYSTEMCHECK_PM_MESSEMODE Auslesen Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_TEV

0x3322 STATUS_SYSTEMCHECK_TEV Auslesen Diagnosefunktion Tankentlueftungsventil Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TANS2

0x300B01 STATUS_TANS2 Ansauglufttemperatur 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TEV

0x30CF01 STATUS_TEV Tankentlueftungsventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TKA

0x300D01 STATUS_TKA Kuehlerauslasstemperatur auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_UBAT

0x302701 STATUS_UBAT Batteriesensor auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_UBATT

0x301C01 STATUS_UBATT Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_UDF

0x301701 STATUS_UDF Umgebungsdruck auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_UKL15

0x301B01 STATUS_UKL15 Kl.15 Spannung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ULV

0x30B501 STATUS_ULV Umluftventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ULV2

0x308A01 STATUS_ULV2 Umluftventil 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_UVLSS

0x302001 STATUS_UVLSS Versorgung Einspritzung / Zuendung auslesen HDPI-Relais Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ZGH

0x3334 STATUS_ZGH Auslesen Zylinder Gleichstellung Homogen

_No arguments._

### STEUERN_AGK

0x30C107 STEUERN_AGK Abgasklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK_WERT | unsigned long | Sollwert Abgasklappe Bank 1 LV_ACT_EF_EXT_ADJ[1]   Min: 0 Max: 1 |
| SW_TO_AGK_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ANWS

0x30EE07 STEUERN_ANWS Vanos Auslass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Sollwert Ventil Auslassnockenwellensteller Bank 1 CAM_SP_EX_EXT_ADJ[1]   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ANWS_WERT | unsigned long | Timeout Ventil Auslassnockenwellensteller Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DK

0x302A07 STEUERN_DK Drosselklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Sollwert Drosselklappe Bank 1 TPS_SP_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_DK_WERT | unsigned long | Timeout Drosselklappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DKP2

0x308507 STEUERN_DKP2 Drosselklappe 2 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DKP2_WERT | real | Tastverhaeltniss Drosselklappe Bank 2 TPS_SP_2_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_DKP2_WERT | unsigned long | Timeout Drosselklappe 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DMTL_HEIZUNG

0x30CE07 STEUERN_DMTL_HEIZUNG Diagnosemodul-Tank Leckage Heizung ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Heizung LV_ACT_DMTLH_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DMTLH_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DMTL_P

0x30CC07 STEUERN_DMTL_P Diagnosemodul-Tank Leckage Pumpe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Pumpe LV_ACT_DMTL_PUMP_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DMTL_P_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DMTL_V

0x30CD07 STEUERN_DMTL_V Diagnosemodul-Tank Leckage Ventil ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Ventil LV_ACT_DMTLS_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DMTL_V_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_E_LUEFTER

0x30DA07 STEUERN_E_LUEFTER E-Luefter ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE_WERT | real | Tastverhaeltniss E-Luefter ECFPWM_ECF_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ELUE_WERT | unsigned long | Timeout E-Luefter 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EBL

0x30C807 STEUERN_EBL E-Box-Luefter ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EBL_WERT | unsigned long | Sollwert E-Box-Luefter LV_ACT_EBOX_CFA_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_EBL_WERT | unsigned long | Timeout E-Box-Luefter 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EISYDR

0x31E2 STEUERN_EISYDR Ansteuern Eisy-Adaptionswerte mit Druckregelung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| WDK_IST_WERT | real | Winkel Drosselklappe WDK_IST   Einheit: %   Min: -800 Max: 799.9755 |

### STEUERN_EISYGD

0x31E1 STEUERN_EISYGD Ansteuern Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI   Einheit: Grad KW   Min: 0 Max: 6553.5 |
| WDK_IST_WERT | real | Aktueller Drosselklappenwinkel WDK_IST   Einheit: %   Min: -800 Max: 799.9755 |

### STEUERN_EKP

0x30D807 STEUERN_EKP Elektrische Kraftstoffpumpe 1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1_WERT | real | Sollwert Elektrische Kraftstoffpumpe 1 EFPPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EKP1_WERT | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EML

0x30D607 STEUERN_EML EML (Engine Malfunction Lamp) ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML_WERT | unsigned long | Sollwert EML (Engine Malfunction Lamp) LV_ACT_WAL_1_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_EML_WERT | unsigned long | Timeout EML (Engine Malfunction Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ENDE_AGK

0x30C100 STEUERN_ENDE_AGK Abgasklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ANWS

0x30EE00 STEUERN_ENDE_ANWS Vanos Auslass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DK

0x302A00 STEUERN_ENDE_DK Drosselklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DKP2

0x308500 STEUERN_ENDE_DKP2 Drosselklappe 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DMTL_HEIZUNG

0x30CE00 STEUERN_ENDE_DMTL_HEIZUNG Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DMTL_P

0x30CC00 STEUERN_ENDE_DMTL_P Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DMTL_V

0x30CD00 STEUERN_ENDE_DMTL_V Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_E_LUEFTER

0x30DA00 STEUERN_ENDE_E_LUEFTER E-Luefter Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EBL

0x30C800 STEUERN_ENDE_EBL E-Box-Luefter Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EKP

0x30D800 STEUERN_ENDE_EKP Elektrische Kraftstoffpumpe 1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EML

0x30D600 STEUERN_ENDE_EML EML (Engine Malfunction Lamp) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ENWS

0x30ED00 STEUERN_ENDE_ENWS Vanos Einlass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_EWAP

0x30BF00 STEUERN_ENDE_EWAP elektr. Wasserpumpe ueber LIN Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_HDPR

0x308200 STEUERN_ENDE_HDPR Hochdruckpumpenrelais Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_KFT

0x30C900 STEUERN_ENDE_KFT Kennfeldthermostat Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LDS1

0x30B600 STEUERN_ENDE_LDS1 Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LDS2

0x30B700 STEUERN_ENDE_LDS2 Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH1

0x30D000 STEUERN_ENDE_LSH1 Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH2

0x30D100 STEUERN_ENDE_LSH2 Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH3

0x30D200 STEUERN_ENDE_LSH3 Lambdasondenheizung vor Kat Bank2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_LSH4

0x30D300 STEUERN_ENDE_LSH4 Lambdasondenheizung hinter Kat Bank2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_MIL

0x30D400 STEUERN_ENDE_MIL MIL (Malfunction Indicator Lamp) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_MSA_DEAK_AV

0x2E5F8F00 STEUERN_ENDE_MSA_DEAK_AV Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) Vorgeben beenden NO_CON

_No arguments._

### STEUERN_ENDE_MSA2_DEAK_SAV

0x2E5F8500 STEUERN_ENDE_MSA2_DEAK_SAV Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) Vorgeben beenden NO_CON

_No arguments._

### STEUERN_ENDE_MSV

0x30BD00 STEUERN_ENDE_MSV Mengensteuerventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_MSVHDP5

0x30EF00 STEUERN_ENDE_MSVHDP5 Mengensteuerventil HDP5 Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_MSVHDP52

0x308600 STEUERN_ENDE_MSVHDP52 Mengensteuerventil 2 Klackertest Ansteuerung beenden NO_CON

_No arguments._

### STEUERN_ENDE_SR

0x30C400 STEUERN_ENDE_SR Startrelais Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_TEV

0x30CF00 STEUERN_ENDE_TEV Tankentlueftungsventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ULV

0x30B500 STEUERN_ENDE_ULV Umluftventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ULV2

0x308A00 STEUERN_ENDE_ULV2 Umluftventil 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UVLSS

0x302000 STEUERN_ENDE_UVLSS Versorgung Einspritzung / Zuendung Ansteuerung beenden HDPI-Relais Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UVSG

0x301C00 STEUERN_ENDE_UVSG Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ZGH

0x3234 STEUERN_ENDE_ZGH Ende Zylinder Gleichstellung Homogen

_No arguments._

### STEUERN_ENERGIESPARMODE

0x310C STEUERN_ENERGIESPARMODE Energiesparmode aktivieren Aktivierung: Klemme 15 = EIN UND Setzen Energiesparmode ueber Tester freigeschaltet Activation: LV_IGK = 1 UND LC_EGY_MIN_KWP = 1

| Name | Type | Description |
| --- | --- | --- |
| EGY_WERT | unsigned long | recordLocalID STATE_EGY_MIN_KWP   Min: 0 Max: 4 |

### STEUERN_ENWS

0x30ED07 STEUERN_ENWS Vanos Einlass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS_WERT | real | Sollwert Ventil Einlassnockenwellensteller Bank 1 CAM_SP_IN_EXT_ADJ[1]   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ENWS_WERT | unsigned long | Timeout Ventil Einlassnockenwellensteller Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EWAP

0x30BF07 STEUERN_EWAP elektr. Wasserpumpe ueber LIN  ansteuern nur bei Fahrzeuggeschwindigkeit v=0 und Motortemperatur TMOT kleiner 115gradCelsius und Batteriespannung UBAT groesser 10Volt CON_EWAP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP_WERT | real | Sollwert elektr. Wasserpumpe ueber LIN N_REL_CWP_SP_2_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber LIN 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GVOBD

0x2E5F8007 STEUERN_GVOBD Gemischvertrimmung fuer OBD-Demo und PVE vorgeben. Der Korrekturfaktor soll bei Klemmenwechsel auf den Standardwert "1" zurueckgesetzt werden.

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_1_WERT | real | Faktor auf Einspritzung Zylinder 1 F_mk_korr_ext_xzyl_[1]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_5_WERT | real | Faktor auf Einspritzung Zylinder 5 F_mk_korr_ext_xzyl_[2]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_4_WERT | real | Faktor auf Einspritzung Zylinder 4 F_mk_korr_ext_xzyl_[3]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_8_WERT | real | Faktor auf Einspritzung Zylinder 8 F_mk_korr_ext_xzyl_[4]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_6_WERT | real | Faktor auf Einspritzung Zylinder 6 F_mk_korr_ext_xzyl_[5]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_3_WERT | real | Faktor auf Einspritzung Zylinder 3 F_mk_korr_ext_xzyl_[6]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_7_WERT | real | Faktor auf Einspritzung Zylinder 7 F_mk_korr_ext_xzyl_[7]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_2_WERT | real | Faktor auf Einspritzung Zylinder 2 F_mk_korr_ext_xzyl_[8]   Min: 0 Max: 1.99996948242188 |

### STEUERN_HDPR

0x308207 STEUERN_HDPR Hochdruckpumpenrelais ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_HDPR_WERT | unsigned long | Hochdruckpumpenrelais Ein/Aus-Schalten LV_ACT_RLY_VCV_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_HDPR_WERT | unsigned long | Timeout Hochdruckpumpenrelais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KFT

0x30C907 STEUERN_KFT Kennfeldthermostat ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT_WERT | real | Sollwert Kennfeldthermostat ECTPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_KFT_WERT | unsigned long | Timeout Kennfeldthermostat 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KLANN

0x31E4 STEUERN_KLANN Ansteuern Klann-Adaptionswerte (Anforderung aus CP10798) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC_WERT | long | Drehzahl NKW_LOC   Einheit: Upm   Min: -32768 Max: 32767 |
| RK_LOC_WERT | real | Relative Kraftstoffmasse RK_LOC   Min: 0 Max: 31.9995 |
| TMOT_LOC_WERT | real | Kuehlwassertemperatur TMOT_LOC   Einheit: C   Min: -327.68 Max: 327.67 |

### STEUERN_KRANN

0x31E3 STEUERN_KRANN Ansteuern Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| RK_SOLL_KR_WERT | real | Relative Kraftstofffuellung RK_SOLL_KR   Einheit: %   Min: -1600 Max: 1599.9511 |
| TANS_WERT | real | Ansauglufttemperatur TANS   Einheit: grad C   Min: -3276.8 Max: 3276.7 |
| TMOT_WERT | real | Kuehlwassertemperatur TMOT   Einheit: C   Min: -327.68 Max: 327.67 |
| BA_IST_WERT | string | Istbetriebsart BA_IST   Min: 0 Max: 8 |

### STEUERN_KVA

0x3BC1 STEUERN_KVA KraftstoffVerbrauchsAnzeige - Korrekturfaktor schreiben Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | real | correction factor for consumption (A2L-Name: fac_fco_kwp) FAC_FCO_KWP   Min: -0.128 Max: 0.127 |

### STEUERN_LDS1

0x30B607 STEUERN_LDS1 Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS1_WERT | real | Tastverhaeltniss Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) WGPWM_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.9984741210938 |
| SW_TO_LDS1_WERT | unsigned long | Timeout Ladedrucksteller 1 (z.B. Waste Gate oder VTG variable Turbinengeometrie) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LDS2

0x30B707 STEUERN_LDS2 Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LDS2_WERT | real | Tastverhaeltniss Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) WGPWM_EXT_ADJ[2]   Einheit: %   Min: 0 Max: 99.9984741210938 |
| SW_TO_LDS2_WERT | unsigned long | Timeout Ladedrucksteller 2 (z.B. Waste Gate oder VTG variable Turbinengeometrie) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH1

0x30D007 STEUERN_LSH1 Lambdasondenheizung vor Kat Bank1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 LSHPWM_UP_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH1_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH2

0x30D107 STEUERN_LSH2 Lambdasondenheizung hinter Kat Bank1 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank1 LSHPWM_DOWN_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH2_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH3

0x30D207 STEUERN_LSH3 Lambdasondenheizung vor Kat Bank2 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH3_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank2 LSHPWM_UP_EXT_ADJ[2]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH3_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_LSH4

0x30D307 STEUERN_LSH4 Lambdasondenheizung hinter Kat Bank2 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH4_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank2 LSHPWM_DOWN_EXT_ADJ[2]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_LSH4_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MIL

0x30D407 STEUERN_MIL MIL (Malfunction Indicator Lamp) ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL_WERT | unsigned long | Sollwert MIL (Malfunction Indicator Lamp) LV_ACT_MIL_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_MIL_WERT | unsigned long | Timeout MIL (Malfunction Indicator Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MSA_DEAK_AV

0x2E5F8F07 STEUERN_MSA_DEAK_AV Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) vorgeben NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA_DEAK_AV_WERT | unsigned long | Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) Swmsaav   Min: 0 Max: 4294967295 |

### STEUERN_MSA2_DEAK_SAV

0x2E5F8507 STEUERN_MSA2_DEAK_SAV Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) vorgeben NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA2_DEAK_SAV_WERT | unsigned long | Selektive Deaktivierung Abschaltverhinderer MSA2 (MotorStopAutomatik) Msa_swsavdi   Min: 0 Max: 4294967295 |

### STEUERN_MSA2HISTORIERESET

0x2E5F84 STEUERN_MSA2HISTORIERESET Service zum Ruecksetzen von Msa_histnostp, Msa_histnosrt. Beim Aufruf dieses Services soll das Bit mit dem Namen B_msahistrst fuer mindestens eine Sekunde auf 1 gesetzt werden

_No arguments._

### STEUERN_MSV

0x30BD07 STEUERN_MSV Mengensteuerventil ansteuern Aktivierung: 50000 hPa < Raildruck < 200000 hPa UND Leerlauf Activation: C_FUP_MIN_KWP < FUP < C_FUP_MAX_KWP UND LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSV_WERT | real | Solldruck Hochdruckregelung FUP_SP_EXT_ADJ   Einheit: hPa   Min: 0 Max: 347776 |
| SW_TO_MSV_WERT | unsigned long | Timeout Mengensteuerventil Bank 1 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MSVHDP5

0x30EF07 STEUERN_MSVHDP5 Mengensteuerventil HDP5 Klackertest ansteuern NO_CON

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_VDSV_WERT | real | Sollwert HDP5 Mengensteuerventil 1 Sollwert 0bis 120 CRK ARQTMSV_W_RB[0]   Einheit: CRK   Min: -3276.8 Max: 3276.7 |
| SW_TO_VDSV_WERT | unsigned long | Timeout Vanos Druckspeicherventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MSVHDP52

0x308607 STEUERN_MSVHDP52 Mengensteuerventil 2 ansteuern Klackertest nur bei Motordrehzahl n=0 N_EQ_ZERO

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSVHDP52_WERT | real | Sollwert Mengensteuerventil 2 arqtmsv_w_rb[1] ARQTMSV_W_RB[1]   Einheit: CRK   Min: -3276.8 Max: 3276.7 |
| SW_TO_MSVHDP52_WERT | unsigned long | Timeout Mengensteuerventil 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_PM_RESTORE

0x2E5F8B STEUERN_PM_RESTORE Schreiben PM-Restore Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_PMRESTORE_0_WERT | unsigned long | PM-Restore Byte 0 PMRESTORE[0]   Min: 0 Max: 255 |
| SW_PMRESTORE_1_WERT | unsigned long | PM-Restore Byte 1 PMRESTORE[1]   Min: 0 Max: 3 |
| SW_PMRESTORE_2_WERT | unsigned long | PM-Restore Byte 2 PMRESTORE[2]   Min: 0 Max: 255 |
| SW_PMRESTORE_3_WERT | unsigned long | PM-Restore Byte 3 PMRESTORE[3]   Min: 0 Max: 3 |
| SW_PMRESTORE_4_WERT | unsigned long | PM-Restore Byte 4 PMRESTORE[4]   Min: 0 Max: 255 |
| SW_PMRESTORE_5_WERT | unsigned long | PM-Restore Byte 5 PMRESTORE[5]   Min: 0 Max: 3 |
| SW_PMRESTORE_6_WERT | unsigned long | PM-Restore Byte 6 PMRESTORE[6]   Min: 0 Max: 255 |

### STEUERN_PROGRAMM_GVOBD

0x2E5F8008 STEUERN_PROGRAMM_GVOBD Gemischvertrimmung fuer OBD-Demo und PVE programmieren.

| Name | Type | Description |
| --- | --- | --- |
| SW_F_MK_KORR_EXT_XZYL_1_WERT | real | Faktor auf Einspritzung Zylinder 1 F_mk_korr_ext_xzyl_[1]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_5_WERT | real | Faktor auf Einspritzung Zylinder 5 F_mk_korr_ext_xzyl_[2]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_4_WERT | real | Faktor auf Einspritzung Zylinder 4 F_mk_korr_ext_xzyl_[3]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_8_WERT | real | Faktor auf Einspritzung Zylinder 8 F_mk_korr_ext_xzyl_[4]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_6_WERT | real | Faktor auf Einspritzung Zylinder 6 F_mk_korr_ext_xzyl_[5]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_3_WERT | real | Faktor auf Einspritzung Zylinder 3 F_mk_korr_ext_xzyl_[6]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_7_WERT | real | Faktor auf Einspritzung Zylinder 7 F_mk_korr_ext_xzyl_[7]   Min: 0 Max: 1.99996948242188 |
| SW_F_MK_KORR_EXT_XZYL_2_WERT | real | Faktor auf Einspritzung Zylinder 2 F_mk_korr_ext_xzyl_[8]   Min: 0 Max: 1.99996948242188 |

### STEUERN_PROGRAMM_IMA_ZYL_1

0x2E5F91 STEUERN_PROGRAMM_IMA_ZYL_1 Abgleichwert Injektor 01 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[0]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[0]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_2

0x2E5F98 STEUERN_PROGRAMM_IMA_ZYL_2 Abgleichwert Injektor 02 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[7]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[7]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_3

0x2E5F96 STEUERN_PROGRAMM_IMA_ZYL_3 Abgleichwert Injektor 03 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[5]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[5]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_4

0x2E5F93 STEUERN_PROGRAMM_IMA_ZYL_4 Abgleichwert Injektor 04 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[2]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[2]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_5

0x2E5F92 STEUERN_PROGRAMM_IMA_ZYL_5 Abgleichwert Injektor 02 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[1]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[1]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_6

0x2E5F95 STEUERN_PROGRAMM_IMA_ZYL_6 Abgleichwert Injektor 06 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[4]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[4]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_7

0x2E5F97 STEUERN_PROGRAMM_IMA_ZYL_7 Abgleichwert Injektor 07 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[6]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[6]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_8

0x2E5F94 STEUERN_PROGRAMM_IMA_ZYL_8 Abgleichwert Injektor 08 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[3]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[3]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMAALLE

0x2E5F90 STEUERN_PROGRAMM_IMAALLE Abgleichwerte Injektoren programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[0]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[0]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[1]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[1]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[2]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[2]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[3]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_8_WERT | real | IMA Abgleichwert Injektor 08 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[3]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[4]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[4]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[5]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[5]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[6]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_7_WERT | real | IMA Abgleichwert Injektor 07 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[6]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[7]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[7]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_RUHESTROMMESSUNG

0x312B STEUERN_RUHESTROMMESSUNG Ansteuern Ruhestrompruefung mit IBS Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Eco_max_i   Einheit: A   Min: 0 Max: 0.3187 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Eco_msb   Einheit: s   Min: 0 Max: 12.75 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Eco_mz   Einheit: s   Min: 0 Max: 12.75 |
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: s   Min: 0 Max: 255 |

### STEUERN_SR

0x30C407 STEUERN_SR Startrelais ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SR_WERT | unsigned long | Sollwert Startrelais LV_ACT_RLY_ST_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_SR_WERT | unsigned long | Timeout Startrelais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_TEV

0x30CF07 STEUERN_TEV Tankentlueftungsventil ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV_WERT | real | TastverhaeltnissTankentlueftungsventil CPPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_TEV_WERT | unsigned long | Timeout Tankentlueftungsventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ULV

0x30B507 STEUERN_ULV Umluftventil ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV_WERT | real | Tastverhaeltniss Umluftventil RFPPWM_EXT_ADJ[0]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ULV_WERT | unsigned long | Timeout Umluftventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ULV2

0x308A07 STEUERN_ULV2 Umluftventil 2 ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ULV2_WERT | real | Tastverhaeltniss Umluftventil 2 RFPPWM_EXT_ADJ[1]   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ULV2_WERT | unsigned long | Timeout Umluftventil 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_UVLSS

0x302007 STEUERN_UVLSS Versorgung Einspritzung / Zuendung ansteuern HDPI-Relais Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UVLSS_WERT | unsigned long | Sollwert Versorgung HPDI-Relais LV_RLY_HPDI_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_UVLSS_WERT | unsigned long | Timeout Versorgung HPDI-Relais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_UVSG

0x301C07 STEUERN_UVSG Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) ansteuern Aktivierung: Geschwindigkeit < 5 km/h UND Drehzahl = 0 1/min Activation: VS < C_VS_MAX_KWP UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_UVSG_WERT | unsigned long | Sollwert Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) LV_RLY_MAIN_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_UVSG_WERT | unsigned long | Timeout Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ZGH

0x3134 STEUERN_ZGH Ansteuern Zylinder Gleichstellung Homogen

_No arguments._

### STOP_SYSTEMCHECK_ATL

0x32D0 STOP_SYSTEMCHECK_ATL Diagnosefunktion Abgasturbolader stoppen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_DMTL

0x32DA STOP_SYSTEMCHECK_DMTL Diagnosefunktion DMTL beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

0x3125 STOP_SYSTEMCHECK_EVAUSBL Ansteuern Diagnosefunktion Einspritzventilausblendung beenden Aktivierung: Klemme 15 = EIN UND Motorstatus = (Leerlauf ODER Teillast) UND Drehzahl < 3000 1/min Activation: LV_IGK = 1 UND STATE_ENG = (IS ODER PL) UND N < C_N_MAX_KWP

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

0x32D9 STOP_SYSTEMCHECK_L_REGELUNG_AUS Ansteuerung Lambdaregelung deaktivieren beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_L_SONDE

0x32DF STOP_SYSTEMCHECK_L_SONDE Diagnosefunktion vertauschte Lambdasonden beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_LLERH

0x3226 STOP_SYSTEMCHECK_LLERH Diagnosefunktion Leerlauf-Erhoehung beenden

_No arguments._

### STOP_SYSTEMCHECK_TEV

0x3222 STOP_SYSTEMCHECK_TEV Diagnosefunktion Tankentlueftungsventil beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29DF | 0x29DF Raildrucksensor 2, elektrisch |
| 0x29E0 | 0x29E0 Gemischregelung |
| 0x29E1 | 0x29E1 Gemischregelung 2 |
| 0x29E2 | 0x29E2 Kraftstoffeinspritzleiste, Drucksensorsignal |
| 0x29F3 | 0x29F3 Kraftstoffdrucksensor, elektrisch |
| 0x29F4 | 0x29F4 Katalysatorkonvertierung |
| 0x29F5 | 0x29F5 Katalysatorkonvertierung 2 |
| 0x2A12 | 0x2A12 DMTL-Magnetventil, Ansteuerung |
| 0x2A18 | 0x2A18 DMTL, Heizung: Ansteuerung |
| 0x2A19 | 0x2A19 Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | 0x2A1A Tankentlüftungssystem, Funktion |
| 0x2A22 | 0x2A22 Tankfüllstand, Korrelation |
| 0x2A28 | 0x2A28 Kraftstoffniederdruck, Arbeitsbereich |
| 0x2A2B | 0x2A2B Gemischregelung |
| 0x2A2C | 0x2A2C Gemischregelung 2 |
| 0x2A7A | 0x2A7A VANOS, Auslass, Kaltstart |
| 0x2A7B | 0x2A7B VANOS, Auslass 2, Kaltstart |
| 0x2A7C | 0x2A7C VANOS, Einlass, Kaltstart |
| 0x2A7D | 0x2A7D VANOS, Einlass 2, Kaltstart |
| 0x2A7E | 0x2A7E Auslass-VANOS 2, Mechanik |
| 0x2A7F | 0x2A7F Einlass-VANOS 2 |
| 0x2A80 | 0x2A80 Einlass-VANOS, Ansteuerung |
| 0x2A81 | 0x2A81 Einlass-VANOS, Ansteuerung 2 |
| 0x2A82 | 0x2A82 Einlass-VANOS |
| 0x2A85 | 0x2A85 Auslass-VANOS, Ansteuerung |
| 0x2A86 | 0x2A86 Auslass-VANOS, Ansteuerung 2 |
| 0x2A87 | 0x2A87 Auslass-VANOS, Mechanik |
| 0x2A94 | 0x2A94 Kurbelwellensensor, Signal |
| 0x2A95 | 0x2A95 Kurbelwellensensor, Synchronisation |
| 0x2A96 | 0x2A96 Kurbelwellensensor, Zahnfehler |
| 0x2A97 | 0x2A97 Kurbelwellensensor, Lückenfehler |
| 0x2A98 | 0x2A98 Kurbelwelle - Einlassnockenwelle, Referenz |
| 0x2A99 | 0x2A99 Kurbelwelle - Auslassnockenwelle, Referenz |
| 0x2A9A | 0x2A9A Kurbelwelle - Einlassnockenwelle, Synchronisation |
| 0x2A9B | 0x2A9B Kurbelwelle - Auslassnockenwelle, Synchronisation |
| 0x2A9C | 0x2A9C Kurbelwelle - Einlassnockenwelle 2, Referenz |
| 0x2A9D | 0x2A9D Kurbelwelle - Auslassnockenwelle 2, Referenz |
| 0x2A9E | 0x2A9E Nockenwellensensor Einlass, Synchonisation |
| 0x2A9F | 0x2A9F Nockenwellensensor Auslass, Synchronisation |
| 0x2AA0 | 0x2AA0 Nockenwellensensor Einlass, Signal |
| 0x2AA1 | 0x2AA1 Nockenwellensensor Auslass, Signal |
| 0x2AA2 | 0x2AA2 Nockenwellensensor Einlass, Lückenverlust |
| 0x2AA3 | 0x2AA3 Nockenwellensensor Auslass, Lückenverlust |
| 0x2AA4 | 0x2AA4 Einlassnockenwelle, Positionsüberwachung |
| 0x2AA5 | 0x2AA5 Auslassnockenwelle, Positionsüberwachung |
| 0x2AA6 | 0x2AA6 Einlassnockenwelle 2, Positionsüberwachung |
| 0x2AA7 | 0x2AA7 Auslassnockenwelle 2, Positionsüberwachung |
| 0x2AAD | 0x2AAD Kraftstoffpumpe, Notabschaltung |
| 0x2AAE | 0x2AAE Kraftstoffpumpe |
| 0x2AB0 | 0x2AB0 Kurbelwelle - Einlassnockenwelle 2, Synchronisation |
| 0x2AB1 | 0x2AB1 Kurbelwelle - Auslassnockenwelle 2, Synchronisation |
| 0x2AB2 | 0x2AB2 DME, interner Fehler: RAM |
| 0x2AB3 | 0x2AB3 DME, interner Fehler: Checksumme |
| 0x2AB4 | 0x2AB4 DME, interner Fehler: RAM-Checksumme |
| 0x2AB5 | 0x2AB5 DME, interner Fehler: Klopfsensorbaustein |
| 0x2AB6 | 0x2AB6 DME, interner Fehler: Mehrfachendstufenbaustein |
| 0x2AB8 | 0x2AB8 Nockenwellensensor Einlass Bank 2, Synchronisation |
| 0x2AB9 | 0x2AB9 Nockenwellensensor Auslass Bank 2, Synchronisation |
| 0x2ABA | 0x2ABA Nockenwellensensor Einlass, Bank 2: Signal |
| 0x2ABB | 0x2ABB Nockenwellensensor Auslass, Bank 2: Signal |
| 0x2ABC | 0x2ABC Ladedrucksensor, elektrisch |
| 0x2ABD | 0x2ABD Ladedrucksensor, Nachlauf |
| 0x2ABE | 0x2ABE Ladedrucksensor 2, elektrisch |
| 0x2ABF | 0x2ABF Ladedrucksensor 2, Plausibilität, Nachlauf |
| 0x2AC2 | 0x2AC2 Nockenwellensensor Einlass, Bank 2: Lückenverlust |
| 0x2AC3 | 0x2AC3 Nockenwellensensor Auslass, Bank 2: Lückenverlust |
| 0x2AC4 | 0x2AC4 Kraftstoffniederdruckregelung, Plausibilität |
| 0x2ACA | 0x2ACA Klemme 15_3, Leitung vom CAS: elektrisch |
| 0x2ACB | 0x2ACB DME-Hauptrelais, Ansteuerung |
| 0x2ACC | 0x2ACC DME-Hauptrelais, Schaltverzögerung |
| 0x2AD4 | 0x2AD4 Getriebeölkühlung |
| 0x2ADF | 0x2ADF Leerlaufregelung, Drehzahl |
| 0x2AE0 | 0x2AE0 Leerlaufregelung bei Kaltstart, Plausibilität |
| 0x2B00 | 0x2B00 Überdrehzahl, Magerbereich |
| 0x2B02 | 0x2B02 Warm Reset Diagnose |
| 0x2B0F | 0x2B0F Kurbelwellensensor, Segmentadaption |
| 0x2B10 | 0x2B10 Laufunruhemessung |
| 0x2B12 | 0x2B12 Zylindereinspritzabschaltung |
| 0x2B16 | 0x2B16 Verbrennungsaussetzer, Zylinder 1 |
| 0x2B17 | 0x2B17 Verbrennungsaussetzer, Zylinder 2 |
| 0x2B18 | 0x2B18 Verbrennungsaussetzer, Zylinder 3 |
| 0x2B19 | 0x2B19 Verbrennungsaussetzer, Zylinder 4 |
| 0x2B1A | 0x2B1A Verbrennungsaussetzer, Zylinder 5 |
| 0x2B1B | 0x2B1B Verbrennungsaussetzer, Zylinder 6 |
| 0x2B1C | 0x2B1C Verbrennungsaussetzer, Zylinder 7 |
| 0x2B1D | 0x2B1D Verbrennungsaussetzer, Zylinder 8 |
| 0x2B22 | 0x2B22 Verbrennungsaussetzer, mehrere Zylinder |
| 0x2B23 | 0x2B23 Verbrennungsaussetzer |
| 0x2B26 | 0x2B26 DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2B27 | 0x2B27 DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2B28 | 0x2B28 Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2B29 | 0x2B29 DMTL, Systemfehler |
| 0x2B2A | 0x2B2A Kraftstoffhochdruck, Plausibilität |
| 0x2B2B | 0x2B2B Kraftstoffhochdruck 2, Plausibilität |
| 0x2B2C | 0x2B2C Kraftstoffhochdrucksystem, Kaltstart |
| 0x2B2D | 0x2B2D Kraftstoffhochdrucksystem 2, Kaltstart |
| 0x2B2E | 0x2B2E Raildrucksensor, Plausibilität |
| 0x2B2F | 0x2B2F Raildrucksensor 2, Plausibilität |
| 0x2BA2 | 0x2BA2 Klemme 15 Abschaltung, Ansteuerung |
| 0x2C24 | 0x2C24 Lambdasonden vor Katalysator, vertauscht |
| 0x2C27 | 0x2C27 Lambdasonde vor Katalysator, Systemcheck |
| 0x2C28 | 0x2C28 Lambdasonde vor Katalysator 2, Systemcheck |
| 0x2C2B | 0x2C2B Lambdasonde vor Katalysator, Systemcheck |
| 0x2C2C | 0x2C2C Lambdasonde vor Katalysator 2, Systemcheck |
| 0x2C2D | 0x2C2D Lambdasonde vor Katalysator, Schubprüfung |
| 0x2C2E | 0x2C2E Lambdasonde vor Katalysator 2, Schubprüfung |
| 0x2C31 | 0x2C31 Lambdasonde vor Katalysator, Trimmregelung |
| 0x2C32 | 0x2C32 Lambdasonde vor Katalysator 2, Trimmregelung |
| 0x2C39 | 0x2C39 Lambdasonde vor Katalysator, Dynamik |
| 0x2C3A | 0x2C3A Lambdasonde vor Katalysator 2, Dynamik |
| 0x2C3B | 0x2C3B Lambdasonde vor Katalysator, nicht angesteckt |
| 0x2C3C | 0x2C3C Lambdasonde vor Katalysator 2, nicht angesteckt |
| 0x2C3D | 0x2C3D Lambdasonde vor Katalysator, Leitungsfehler |
| 0x2C3E | 0x2C3E Lambdasonde vor Katalysator 2, Leitungsfehler |
| 0x2C3F | 0x2C3F DME, interner Fehler: Lambdasonde, Auswertebaustein |
| 0x2C40 | 0x2C40 DME, interner Fehler: Lambdasonde 2, Auswertebaustein |
| 0x2C41 | 0x2C41 DME, interner Fehler: Lambdasonde |
| 0x2C42 | 0x2C42 DME, interner Fehler: Lambdasonde 2 |
| 0x2C6A | 0x2C6A Lambdasonden nach Katalysator, vertauscht |
| 0x2C6B | 0x2C6B Lambdasonde nach Katalysator, Systemcheck |
| 0x2C6C | 0x2C6C Lambdasonde nach Katalysator 2, Systemcheck |
| 0x2C6D | 0x2C6D Lambdasonde nach Katalysator, Alterung |
| 0x2C6E | 0x2C6E Lambdasonde nach Katalysator 2, Alterung |
| 0x2C73 | 0x2C73 Lambdasonde nach Katalysator, Signal |
| 0x2C74 | 0x2C74 Lambdasonde nach Katalysator 2, Signal |
| 0x2C75 | 0x2C75 Lambdasonde nach Katalysator, Signal |
| 0x2C76 | 0x2C76 Lambdasonde nach Katalysator 2, Signal |
| 0x2C77 | 0x2C77 Lambdasonde nach Katalysator, Signal |
| 0x2C78 | 0x2C78 Lambdasonde nach Katalysator 2, Signal |
| 0x2C79 | 0x2C79 Lambdasonde nach Katalysator, Signal |
| 0x2C7A | 0x2C7A Lambdasonde nach Katalysator 2, Signal |
| 0x2C7B | 0x2C7B Lambdasonde nach Katalysator, Signal |
| 0x2C7C | 0x2C7C Lambdasonde nach Katalysator 2, Signal |
| 0x2C7E | 0x2C7E Lambdasonde nach Katalysator, Trimmregelung |
| 0x2C7F | 0x2C7F Lambdasonde nach Katalysator 2, Trimmregelung |
| 0x2C9C | 0x2C9C Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2C9D | 0x2C9D Lambdasondenbeheizung vor Katalysator 2, Ansteuerung |
| 0x2C9E | 0x2C9E Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2C9F | 0x2C9F Lambdasondenbeheizung nach Katalysator 2, Ansteuerung |
| 0x2CA6 | 0x2CA6 Lambdasondenbeheizung vor Katalysator, Funktion |
| 0x2CA7 | 0x2CA7 Lambdasondenbeheizung vor Katalysator 2, Funktion |
| 0x2CA8 | 0x2CA8 Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2CA9 | 0x2CA9 Lambdasondenbeheizung nach Katalysator 2, Funktion |
| 0x2CAA | 0x2CAA Lambdasonde vor Katalysator, Temperatur |
| 0x2CAB | 0x2CAB Lambdasonde 2 vor Katalysator, Temperatur |
| 0x2CF3 | 0x2CF3 Drosselklappe 2, Drosselklappenpotenziometer 1 und 2 |
| 0x2CF4 | 0x2CF4 Drosselklappe, Startprüfung |
| 0x2CF5 | 0x2CF5 Drosselklappe 2, Startprüfung |
| 0x2CFB | 0x2CFB Drosselklappen-Adaptionswert |
| 0x2D06 | 0x2D06 Luftmassensystem |
| 0x2D07 | 0x2D07 Drosselklappe 1 |
| 0x2D09 | 0x2D09 Drosselklappe |
| 0x2D0A | 0x2D0A Drosselklappe 2, Drosselklappenpotenziometer, Plausibilität |
| 0x2D0D | 0x2D0D Luftmasse 2, Plausibilität |
| 0x2D15 | 0x2D15 Luftmassenmesser, Messbereich |
| 0x2D16 | 0x2D16 Luftmassenmesser, Signal |
| 0x2D1B | 0x2D1B Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | 0x2D1C Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D1D | 0x2D1D Fahrpedalmodul, Pedalwertgeber 1, Spannungsversorgung |
| 0x2D1E | 0x2D1E Fahrpedalmodul, Pedalwertgeber 2, Spannungsversorgung |
| 0x2D1F | 0x2D1F Fahrpedalmodul, Pedalwertgeber Potentiometer, Signal |
| 0x2D20 | 0x2D20 Fahrpedalmodul, Pedalwertgeber, Plausibilität zwischen Signal 1 und Signal 2 |
| 0x2D22 | 0x2D22 Luftmassenmesser 2, Messbereich |
| 0x2D23 | 0x2D23 Luftmassenmesser 2, elektrisch |
| 0x2D26 | 0x2D26 Luftmassenmesser, Laststeuerung |
| 0x2D2B | 0x2D2B Saugrohrdrucksensor, Nachlauf |
| 0x2D2C | 0x2D2C Absolutdrucksensor, Saugrohr, elektrisch |
| 0x2D2D | 0x2D2D Absolutdrucksensor 2, Saugrohr, elektrisch |
| 0x2D2E | 0x2D2E Drosselklappenwinkel - Saugrohr-Unterdruck, Korrelation |
| 0x2D2F | 0x2D2F Drosselklappenwinkel 2 - Absolutdruck Saugrohr 2, Vergleich |
| 0x2D30 | 0x2D30 Absolutdrucksensor 2, Saugrohr, Plausibilität, Nachlauf |
| 0x2D3A | 0x2D3A Drosselklappe, Drosselklappenpotenziometer 1 |
| 0x2D3B | 0x2D3B Drosselklappe 2, Drosselklappenpotenziometer 1 |
| 0x2D3C | 0x2D3C Drosselklappe 2, Adaption |
| 0x2D3D | 0x2D3D Drosselklappe, Adaption, Federtest |
| 0x2D3E | 0x2D3E Drosselklappe 2, Adaption, Federtest |
| 0x2D3F | 0x2D3F Drosselklappe, Drosselklappenpotenziometer 2 |
| 0x2D40 | 0x2D40 Drosselklappe 2, Drosselklappenpotenziometer 2 |
| 0x2D43 | 0x2D43 Drosselklappe, klemmt oder schwergängig |
| 0x2D44 | 0x2D44 Drosselklappe 2, klemmt oder schwergängig |
| 0x2D45 | 0x2D45 DME, interner Fehler, Ansteuerung Drosselklappe |
| 0x2D46 | 0x2D46 DME, interner Fehler, Ansteuerung Drosselklappe 2 |
| 0x2D47 | 0x2D47 Drosselklappe, PWM-Signal |
| 0x2D48 | 0x2D48 Drosselklappe 2, PWM-Signal |
| 0x2D4B | 0x2D4B Drosselklappe, Drosselklappenpotenziometer 1, elektrisch |
| 0x2D4C | 0x2D4C Drosselklappe 2, Drosselklappenpotenziometer 1, elektrisch |
| 0x2D4D | 0x2D4D Drosselklappe, Drosselklappenpotenziometer 2, elektrisch |
| 0x2D4E | 0x2D4E Drosselklappe 2, Drosselklappenpotenziometer 2, elektrisch |
| 0x2D50 | 0x2D50 DME, interner Fehler:  Überwachung Fahrgeschwindigkeitsregelung |
| 0x2D52 | 0x2D52 DME, interner Fehler: Überwachung Motordrehzahl |
| 0x2D53 | 0x2D53 DME, interner Fehler: Überwachung Drehzahlbegrenzung |
| 0x2D55 | 0x2D55 DME, interner Fehler: Überwachung Fahrpedalmodul |
| 0x2D56 | 0x2D56 DME, interner Fehler: Überwachung Leerlaufregelung |
| 0x2D57 | 0x2D57 DME, interner Fehler: Überwachung externe Momentenanforderung |
| 0x2D58 | 0x2D58 DME, interner Fehler: Überwachung Sollmoment |
| 0x2D59 | 0x2D59 DME, interner Fehler: Überwachung Istmoment |
| 0x2D5A | 0x2D5A Überwachung Motordrehmoment-Begrenzung |
| 0x2D5C | 0x2D5C DME, interner Fehler: Überwachung Hardware |
| 0x2D60 | 0x2D60 Kraftstoffmenge, Überwachung |
| 0x2D61 | 0x2D61 Drosselklappe, Überwachung |
| 0x2D62 | 0x2D62 DME, interner Fehler |
| 0x2D67 | 0x2D67 DME, interner Fehler: Überwachung Prozessoren |
| 0x2D7D | 0x2D7D Motorölniveau |
| 0x2D82 | 0x2D82 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 1 |
| 0x2D83 | 0x2D83 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 2 |
| 0x2D84 | 0x2D84 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 3 |
| 0x2D85 | 0x2D85 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 4 |
| 0x2D86 | 0x2D86 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 5 |
| 0x2D87 | 0x2D87 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 6 |
| 0x2D88 | 0x2D88 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 7 |
| 0x2D89 | 0x2D89 Zylindergleichstellung, Adaption, oberer Bereich: Zylinder 8 |
| 0x2D8E | 0x2D8E Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 1 |
| 0x2D8F | 0x2D8F Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 2 |
| 0x2D90 | 0x2D90 Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 3 |
| 0x2D91 | 0x2D91 Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 4 |
| 0x2D92 | 0x2D92 Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 5 |
| 0x2D93 | 0x2D93 Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 6 |
| 0x2D94 | 0x2D94 Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 7 |
| 0x2D95 | 0x2D95 Zylindergleichstellung, Adaption, unterer Bereich: Zylinder 8 |
| 0x2D9A | 0x2D9A Zylindergleichstellung, Eigendiagnose: Zylinder 1 |
| 0x2D9B | 0x2D9B Zylindergleichstellung, Eigendiagnose: Zylinder 2 |
| 0x2D9C | 0x2D9C Zylindergleichstellung, Eigendiagnose: Zylinder 3 |
| 0x2D9D | 0x2D9D Zylindergleichstellung, Eigendiagnose: Zylinder 4 |
| 0x2D9E | 0x2D9E Zylindergleichstellung, Eigendiagnose: Zylinder 5 |
| 0x2D9F | 0x2D9F Zylindergleichstellung, Eigendiagnose: Zylinder 6 |
| 0x2DA0 | 0x2DA0 Zylindergleichstellung, Eigendiagnose: Zylinder 7 |
| 0x2DA1 | 0x2DA1 Zylindergleichstellung, Eigendiagnose: Zylinder 8 |
| 0x2DBE | 0x2DBE Aktive Geschwindigkeitsregelung, gesperrt für Fahrzyklus |
| 0x2DC0 | 0x2DC0 Längsdynamikmanagement |
| 0x2DC3 | 0x2DC3 Überwachung Klemme 15 |
| 0x2DC5 | 0x2DC5 Momentenanforderung über CAN, Plausibilität |
| 0x2DE4 | 0x2DE4 Tankfüllstandssensor, links: Signal |
| 0x2DE5 | 0x2DE5 Tankfüllstandssensor, rechts: Signal |
| 0x2DEB | 0x2DEB Powermanagement, Bordnetzüberwachung |
| 0x2DEC | 0x2DEC Powermanagement, Batterieüberwachung |
| 0x2DED | 0x2DED Powermanagement, Ruhestromüberwachung |
| 0x2E18 | 0x2E18 Zündung, Zylinder 1 |
| 0x2E19 | 0x2E19 Zündung, Zylinder 2 |
| 0x2E1A | 0x2E1A Zündung, Zylinder 3 |
| 0x2E1B | 0x2E1B Zündung, Zylinder 4 |
| 0x2E1C | 0x2E1C Zündung, Zylinder 5 |
| 0x2E1D | 0x2E1D Zündung, Zylinder 6 |
| 0x2E1E | 0x2E1E Zündung, Zylinder 7 |
| 0x2E1F | 0x2E1F Zündung, Zylinder 8 |
| 0x2E30 | 0x2E30 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | 0x2E31 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | 0x2E32 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | 0x2E33 Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | 0x2E34 Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | 0x2E35 Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E36 | 0x2E36 Einspritzventil Zylinder 7, Ansteuerung |
| 0x2E37 | 0x2E37 Einspritzventil Zylinder 8, Ansteuerung |
| 0x2E63 | 0x2E63 Entlastungsrelais für Zündung und Einspritzung |
| 0x2E64 | 0x2E64 Entlastungsrelais für Zündung und Einspritzung, Schaltverzögerung |
| 0x2E65 | 0x2E65 Relais Mengensteuerventil, elektrisch |
| 0x2E68 | 0x2E68 Klopfsensorsignal 1 |
| 0x2E69 | 0x2E69 Klopfsensorsignal 2 |
| 0x2E6A | 0x2E6A Klopfsensorsignal 3 |
| 0x2E6B | 0x2E6B Klopfsensorsignal 4 |
| 0x2E77 | 0x2E77 Zündung, Spannungsversorgung |
| 0x2E7A | 0x2E7A Zündwinkelverstellung im Leerlauf, Kaltstart |
| 0x2E7B | 0x2E7B Zündwinkelverstellung in Teillast, Kaltstart |
| 0x2E7C | 0x2E7C Bitserielle Datenschnittstelle, Signal |
| 0x2E89 | 0x2E89 Kühlmittelpumpe Power Electronic Box, Steuerleitung, elektrisch |
| 0x2E8A | 0x2E8A Kühlmittelpumpe Power Electronic Box, Abschaltung |
| 0x2E8B | 0x2E8B Intelligenter Batteriesensor, Signal |
| 0x2E8C | 0x2E8C Intelligenter Batteriesensor, Funktion |
| 0x2E8D | 0x2E8D Intelligenter Batteriesensor, Signalübertragung |
| 0x2E8E | 0x2E8E Intelligenter Batteriesensor, Kommunikation |
| 0x2E9F | 0x2E9F Ölzustandssensor |
| 0x2EA1 | 0x2EA1 Ölzustandssensor, Kommunikation |
| 0x2EA2 | 0x2EA2 Ladeluft-Kühlsystem |
| 0x2EA3 | 0x2EA3 Ladeluft-Kühlsystem |
| 0x2EA4 | 0x2EA4 Ladeluft-Kühlsystem |
| 0x2EA5 | 0x2EA5 Ladeluft-Kühlsystem |
| 0x2EA6 | 0x2EA6 Ladeluft-Kühlsystem, leistungsreduzierter Betrieb |
| 0x2EA8 | 0x2EA8 Ladeluft-Kühlsystem |
| 0x2EA9 | 0x2EA9 Turbolader-Kühlmittelpumpe, Steuerleitung, elektrisch |
| 0x2EAA | 0x2EAA Turbolader-Kühlmittelpumpe, Abschaltung |
| 0x2EAB | 0x2EAB Ladeluft-Kühlsystem |
| 0x2EAC | 0x2EAC Ladeluft-Kühlsystem, leistungsreduzierter Betrieb |
| 0x2EB3 | 0x2EB3 Ladeluft-Kühlsystem |
| 0x2EB4 | 0x2EB4 Ladeluft-Kühlsystem |
| 0x2EC3 | 0x2EC3 LIN Bus, Kommunikationsfehler |
| 0x2EE0 | 0x2EE0 Kühlmitteltemperatursensor, Signal |
| 0x2EE2 | 0x2EE2 Kühlmitteltemperatursensor, Plausibilität: Signal konstant |
| 0x2EE3 | 0x2EE3 Kühlmitteltemperatursensor, Plausibilität: Gradient |
| 0x2EE7 | 0x2EE7 Kühlmitteltemperatursensor, Signal |
| 0x2EEA | 0x2EEA Temperatursensor Kühleraustritt, Signal |
| 0x2EEB | 0x2EEB Temperatursensor Kühleraustritt, Plausibilität, Gradient |
| 0x2EEC | 0x2EEC Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | 0x2EF4 Kennfeldthermostat, Mechanik |
| 0x2EF5 | 0x2EF5 Kennfeldthermostat, Ansteuerung |
| 0x2EFE | 0x2EFE Elektrolüfter, Ansteuerung |
| 0x2EFF | 0x2EFF Elektrolüfter, Eigendiagnose |
| 0x2F07 | 0x2F07 Ansauglufttemperatursensor 2, elektrisch |
| 0x2F08 | 0x2F08 Ansauglufttemperatursensor, Signal |
| 0x2F0D | 0x2F0D Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F10 | 0x2F10 Kühlerjalousie, unten |
| 0x2F11 | 0x2F11 Kühlerjalousie, oben |
| 0x2F13 | 0x2F13 Ladelufttemperatursensor, elektrisch |
| 0x2F14 | 0x2F14 Ladelufttemperatursensor 2, elektrisch |
| 0x2F15 | 0x2F15 Ladelufttemperatur |
| 0x2F16 | 0x2F16 Ladelufttemperatur 2 |
| 0x2F2B | 0x2F2B Ansauglufttemperatursensor, Plausibilität |
| 0x2F2C | 0x2F2C Ansauglufttemperatur 2 |
| 0x2F30 | 0x2F30 Ladelufttemperatursensor |
| 0x2F31 | 0x2F31 Ladelufttemperatursensor 2 |
| 0x2F36 | 0x2F36 Luftmassenmesser, Eigendiagnose |
| 0x2F37 | 0x2F37 Luftmassenmesser 2, Eigendiagnose |
| 0x2F3A | 0x2F3A Luftmassenmesser, Korrektursignal, elektrisch |
| 0x2F3B | 0x2F3B Luftmassenmesser 2, Korrektursignal, elektrisch |
| 0x2F3E | 0x2F3E Luftmassenmesser, Korrektursignal, Arbeitsbereich |
| 0x2F3F | 0x2F3F Luftmassenmesser 2, Korrektursignal, Arbeitsbereich |
| 0x2F49 | 0x2F49 EWS Manipulationsschutz |
| 0x2F4A | 0x2F4A Schnittstelle EWS-DME |
| 0x2F4B | 0x2F4B DME, interner Fehler: EWS-Daten |
| 0x2F4C | 0x2F4C Botschaft EWS-DME fehlerhaft |
| 0x2F4D | 0x2F4D DME-Sperrung |
| 0x2F4E | 0x2F4E Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | 0x2F4F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F58 | 0x2F58 Startautomatik, Ansteuerung |
| 0x2F63 | 0x2F63 Bremslichtschalter, Plausibilität |
| 0x2F64 | 0x2F64 Bremslichttestschalter, Plausibilität |
| 0x2F67 | 0x2F67 Kupplungsschalter, Signal |
| 0x2F6C | 0x2F6C Abgasklappe, Ansteuerung |
| 0x2F71 | 0x2F71 E-Box-Lüfter, Ansteuerung |
| 0x2F76 | 0x2F76 Umgebungsdrucksensor, Signal |
| 0x2F77 | 0x2F77 Umgebungsdrucksensor, Plausibilität |
| 0x2F79 | 0x2F79 Umgebungsdrucksensor, Nachlauf |
| 0x2F7B | 0x2F7B Öldruckschalter, Plausibilität |
| 0x2F7E | 0x2F7E Motorabstellzeit, Plausibilität |
| 0x2F7F | 0x2F7F Motorabstellzeit, Plausibilität |
| 0x2F81 | 0x2F81 Motorabstellzeit |
| 0x2F82 | 0x2F82 Motorabstellzeit |
| 0x2F83 | 0x2F83 Motorabstellzeit |
| 0x2F84 | 0x2F84 Motorabstellzeit |
| 0x2F85 | 0x2F85 DME, interner Fehler: Innentemperatursensor, Signal |
| 0x2F8F | 0x2F8F Fahrpedalmodul und Bremspedal, Plausibilität |
| 0x2F91 | 0x2F91 Drehzahlbegrenzung bei stehendem Fahrzeug |
| 0x2F99 | 0x2F99 Außentemperatursensor, Plausibilität |
| 0x2F9A | 0x2F9A Außentemperatursensor, Kommunikation |
| 0x2F9E | 0x2F9E Thermischer Ölniveausensor |
| 0x2FA3 | 0x2FA3 Codierung fehlt |
| 0x2FA4 | 0x2FA4 Falscher Datensatz |
| 0x2FC1 | 0x2FC1 Mengensteuerventil |
| 0x2FC2 | 0x2FC2 Mengensteuerventil 2 |
| 0x2FC6 | 0x2FC6 Energiesparmodus aktiv |
| 0x2FC8 | 0x2FC8 Kraftstoffhochdruck, Arbeitsbereich |
| 0x2FC9 | 0x2FC9 Kraftstoffhochdruck 2, Arbeitsbereich |
| 0x30A0 | 0x30A0 Zündspule Zylinder 1, Ansteuerung |
| 0x30A1 | 0x30A1 Zündspule Zylinder 2, Ansteuerung |
| 0x30A2 | 0x30A2 Zündspule Zylinder 3, Ansteuerung |
| 0x30A3 | 0x30A3 Zündspule Zylinder 4, Ansteuerung |
| 0x30A4 | 0x30A4 Zündspule Zylinder 5, Ansteuerung |
| 0x30A5 | 0x30A5 Zündspule Zylinder 6, Ansteuerung |
| 0x30A6 | 0x30A6 Zündspule Zylinder 7, Ansteuerung |
| 0x30A7 | 0x30A7 Zündspule Zylinder 8, Ansteuerung |
| 0x30BA | 0x30BA Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BB | 0x30BB Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BC | 0x30BC Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BD | 0x30BD Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BE | 0x30BE Injektor, Kalibrierung: Plausibilität |
| 0x30CA | 0x30CA Schubumluftventil, Ansteuerung |
| 0x30CB | 0x30CB Schubumluftventil 2, Ansteuerung |
| 0x30CF | 0x30CF Wastegate, Ansteuerung |
| 0x30D0 | 0x30D0 Wastegate 2, Ansteuerung |
| 0x30ED | 0x30ED Superklopfen Zylinder 1 |
| 0x30EE | 0x30EE Superklopfen Zylinder 2 |
| 0x30EF | 0x30EF Superklopfen Zylinder 3 |
| 0x30F0 | 0x30F0 Superklopfen Zylinder 4 |
| 0x30F1 | 0x30F1 Superklopfen Zylinder 5 |
| 0x30F2 | 0x30F2 Superklopfen Zylinder 6 |
| 0x30F3 | 0x30F3 Superklopfen Zylinder 7 |
| 0x30F4 | 0x30F4 Superklopfen Zylinder 8 |
| 0x30FC | 0x30FC Ladedruckregelung, Ladedruck zu niedrig: Dichtheit |
| 0x30FE | 0x30FE Ladedruckregelung, Ladedruck zu hoch |
| 0x30FF | 0x30FF Ladedruckregelung, Ladedruck zu niedrig |
| 0x3100 | 0x3100 Ladedruckregelung, Abschaltung  |
| 0x3108 | 0x3108 Ladedruckregelung 2, Ladedruck zu niedrig: Dichtheit |
| 0x310A | 0x310A Ladedruckregelung 2, Plausibilität |
| 0x310B | 0x310B Ladedruckregelung 2, Plausibilität |
| 0x315F | 0x315F HS-CAN, Botschaft (Radmoment, 0x123) |
| 0x3160 | 0x3160 HL-CAN, Botschaft (APM Service Daten, 0x48A) |
| 0x3162 | 0x3162 HL-CAN, Botschaft (TCM, 0xB4) |
| 0x3165 | 0x3165 HS-CAN, Botschaft (Drehmomentanforderung TCM, 0xA9) |
| 0x3166 | 0x3166 PT-CAN, Botschaft (Status Sitzbelegung Gurtkontakt Fahrer, 0x2F1) |
| 0x3167 | 0x3167 PT-CAN, Botschaft (Status Sitzbelegung Gurtkontakte, 0x2FA) |
| 0x3168 | 0x3168 HL-CAN, Botschaft (Status Kombi, 0x1D7) |
| 0x316A | 0x316A PT-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7) |
| 0x316B | 0x316B HS-CAN, Botschaft (Temperatur Inverter Antriebsmotoren, 0x385) |
| 0x316C | 0x316C HS-CAN, Botschaft (Temperatur PEB-Kühlkreislauf, 0x386) |
| 0x316D | 0x316D PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 0x15D) |
| 0x316E | 0x316E HS-CAN, Botschaft (Drehmoment HCP, 0xB0) |
| 0x316F | 0x316F HS-CAN, Botschaft (Prozessorüberwachung HCP, 0xA6) |
| 0x3171 | 0x3171 HL-CAN, Botschaft (Getriebeöltemperatur, 0x4C9) |
| 0x3173 | 0x3173 HL-CAN, Botschaft (Radmoment, 0xA3) |
| 0x3174 | 0x3174 HS-CAN, Botschaft (Status rekuperatives Bremsen, 0x1C6) |
| 0x3175 | 0x3175 HL-CAN, Botschaft (HCP, 0x2A5) |
| 0x3176 | 0x3176 HS-CAN, Botschaft (Drehmomentsteuerung Motor, 0xB1) |
| 0x3177 | 0x3177 HL-CAN, Botschaft (Drehzahl Antriebsmotor 1, 0xA4) |
| 0x3179 | 0x3179 PT-CAN, Botschaft (Radgeschwindigkeit, 0xCE) |
| 0x317A | 0x317A PT-CAN, Botschaft (Austausch EHB3 SBA, 0xE7) |
| 0x317B | 0x317B PT-CAN, Botschaft (Status Türsensoren, 0x1E1) |
| 0x3180 | 0x3180 Tankdrucksensor |
| 0x3181 | 0x3181 Tankabsperrventil, Ansteuerung |
| 0x3183 | 0x3183 HL-CAN Bus |
| 0x3184 | 0x3184 HS-CAN Bus |
| 0x3185 | 0x3185 HCP |
| 0x3188 | 0x3188 Tankdrucksensor |
| 0x3189 | 0x3189 Tankabsperrventil |
| 0xCD87 | 0xCD87 PT-CAN Kommunikationsfehler |
| 0xCD8B | 0xCD8B Local-CAN Kommunikationsfehler |
| 0xCD94 | 0xCD94 Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD98 | 0xCD98 Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD9C | 0xCD9C Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | 0xCD9D Botschaft (Getriebedaten, BA) |
| 0xCD9F | 0xCD9F Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | 0xCDA0 Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | 0xCDA1 Botschaft (Lenkradwinkel, C4) |
| 0xCDA4 | 0xCDA4 Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | 0xCDA5 Botschaft (Status DSC, 19E) |
| 0xCDA6 | 0xCDA6 Botschaft (Status Elektrische Kraftstoffpumpe, 335) |
| 0xCDA7 | 0xCDA7 Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | 0xCDA8 Botschaft (Status KOMBI, 1B4) |
| 0xCDA9 | 0xCDA9 Botschaft (Wärmestrom/Lastmoment Klimaanlage, 1B5) |
| 0xCDAA | 0xCDAA Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | 0xCDAB Botschaft (Lampenzustand,  21A) |
| 0xCDAD | 0xCDAD Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0xCDAE | 0xCDAE Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | 0xCDAF Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | 0xCDB0 Botschaft (Anzeige Getriebedaten, 1D2) |
| 0xCDB1 | 0xCDB1 Botschaft (Status Zentralveriegelung, 2FC) |
| 0xCDB9 | 0xCDB9 Botschaft (Status EMF, 201) |
| 0xCDBA | 0xCDBA Botschaft (Stellanforderung EMF, 1A7) |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | ja |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x29DF | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x29E0 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E1 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E2 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x29F3 | 0x5811 | 0x58F4 | 0x58F3 | 0x583B |
| 0x29F4 | 0x5811 | 0x5810 | 0x581F | 0x580F |
| 0x29F5 | 0x5811 | 0x5810 | 0x581F | 0x580F |
| 0x2A12 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A18 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A19 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A1A | 0x581F | 0x5810 | 0x5811 | 0x584D |
| 0x2A22 | 0x580D | 0x5815 | 0x583B | 0x581F |
| 0x2A28 | 0x58F3 | 0x58F0 | 0x58EF | 0x58AF |
| 0x2A2B | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2A2C | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2A7A | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A7B | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A7C | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A7D | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A7E | 0x5811 | 0x581C | 0x5826 | 0x581F |
| 0x2A7F | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A80 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A81 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A82 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A85 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A86 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A87 | 0x5811 | 0x581C | 0x583F | 0x581F |
| 0x2A94 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A95 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A96 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A97 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A98 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A99 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9A | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9B | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9C | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9D | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9E | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9F | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA0 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA1 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA2 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA3 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA4 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA5 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA6 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA7 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AAD | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAE | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AB0 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AB1 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AB2 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB3 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB4 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB5 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB6 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB8 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AB9 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2ABA | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2ABB | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2ABC | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2ABD | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2ABE | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2ABF | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2AC2 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AC3 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AC4 | 0x58BB | 0x58AF | 0x5811 | 0x58F3 |
| 0x2ACA | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2ACB | 0x5823 | 0x584A | 0x587C | 0x583C |
| 0x2ACC | 0x5823 | 0x584A | 0x587C | 0x583C |
| 0x2AD4 | 0x5867 | 0x5817 | 0x580D | 0x5815 |
| 0x2ADF | 0x5811 | 0x5810 | 0x5813 | 0x5814 |
| 0x2AE0 | 0x5811 | 0x581F | 0x5882 | 0x5815 |
| 0x2B00 | 0x58B8 | 0x58C0 | 0x58C1 | 0x5832 |
| 0x2B02 | 0x5867 | 0x583D | 0x583E | 0x5840 |
| 0x2B0F | 0x5811 | 0x583C | 0x58F8 | 0x58F9 |
| 0x2B10 | 0x5811 | 0x581F | 0x5818 | 0x583C |
| 0x2B12 | 0x583B | 0x5811 | 0x58D1 | 0x58EF |
| 0x2B16 | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x2B17 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x2B18 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x2B19 | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x2B1A | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x2B1B | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x2B1C | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x2B1D | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x2B22 | 0x5824 | 0x58EF | 0x58F0 | 0x586D |
| 0x2B23 | 0x58EF | 0x58F0 | 0x5834 | 0x583B |
| 0x2B26 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2B27 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2B28 | 0x583B | 0x5811 | 0x585B | 0x588D |
| 0x2B29 | 0x583B | 0x5811 | 0x581F | 0x5824 |
| 0x2B2A | 0x58F0 | 0x58EF | 0x58F3 | 0x58BA |
| 0x2B2C | 0x5811 | 0x581F | 0x58EF | 0x58F3 |
| 0x2B2D | 0x5811 | 0x581F | 0x58F0 | 0x58F3 |
| 0x2B2B | 0x58F0 | 0x58EF | 0x58F3 | 0x58BA |
| 0x2B2E | 0x58F0 | 0x58EF | 0x58F3 | 0x58BA |
| 0x2B2F | 0x58F0 | 0x58EF | 0x58F3 | 0x58BA |
| 0x2BA2 | 0x5811 | 0x580C | 0x586A | 0x5823 |
| 0x2C24 | 0x5805 | 0x588B | 0x5845 | 0x5848 |
| 0x2C27 | 0x588C | 0x5849 | 0x5871 | 0x5845 |
| 0x2C28 | 0x588F | 0x584B | 0x5873 | 0x5848 |
| 0x2C2B | 0x588C | 0x5849 | 0x5871 | 0x5845 |
| 0x2C2C | 0x588F | 0x584B | 0x5873 | 0x5848 |
| 0x2C2D | 0x580B | 0x5845 | 0x587D | 0x588C |
| 0x2C2E | 0x580B | 0x5848 | 0x587E | 0x588F |
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
| 0x2C79 | 0x5896 | 0x585C | 0x5806 | 0x5849 |
| 0x2C7A | 0x5897 | 0x585D | 0x5808 | 0x584B |
| 0x2C7B | 0x5896 | 0x585C | 0x5849 | 0x5845 |
| 0x2C7C | 0x5897 | 0x585D | 0x584B | 0x5848 |
| 0x2C7E | 0x5849 | 0x5845 | 0x5878 | 0x58F5 |
| 0x2C7F | 0x584B | 0x5848 | 0x5879 | 0x58F6 |
| 0x2C9C | 0x588C | 0x588B | 0x5815 | 0x5827 |
| 0x2C9D | 0x588F | 0x588B | 0x5815 | 0x5828 |
| 0x2C9E | 0x588C | 0x588B | 0x5815 | 0x5827 |
| 0x2C9F | 0x588F | 0x588B | 0x5815 | 0x5827 |
| 0x2CA6 | 0x5894 | 0x5815 | 0x5827 | 0x588C |
| 0x2CA7 | 0x5895 | 0x5815 | 0x5828 | 0x588F |
| 0x2CA8 | 0x5896 | 0x585C | 0x5829 | 0x5849 |
| 0x2CA9 | 0x5897 | 0x585D | 0x582A | 0x584B |
| 0x2CAA | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2CAB | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2CF3 | 0x581C | 0x581E | 0x589F | 0x584C |
| 0x2CF4 | 0x581A | 0x581B | 0x58B0 | 0x583F |
| 0x2CF5 | 0x581C | 0x581E | 0x584C | 0x5826 |
| 0x2CFB | 0x581A | 0x581B | 0x58B0 | 0x583F |
| 0x2D06 | 0x5801 | 0x5810 | 0x58AE | 0x580B |
| 0x2D07 | 0x581A | 0x581B | 0x5811 | 0x581F |
| 0x2D09 | 0x581A | 0x581B | 0x589E | 0x58B0 |
| 0x2D0A | 0x581C | 0x581E | 0x5811 | 0x581F |
| 0x2D0D | 0x5801 | 0x5810 | 0x58AE | 0x580B |
| 0x2D15 | 0x581F | 0x5810 | 0x580C | 0x580F |
| 0x2D16 | 0x581F | 0x5810 | 0x580C | 0x580F |
| 0x2D1B | 0x5846 | 0x5847 | 0x5843 | 0x583C |
| 0x2D1C | 0x5846 | 0x5847 | 0x5854 | 0x583C |
| 0x2D1D | 0x5843 | 0x5854 | 0x5815 | 0x5814 |
| 0x2D1E | 0x5843 | 0x5854 | 0x5815 | 0x5814 |
| 0x2D1F | 0x5843 | 0x5854 | 0x5846 | 0x5847 |
| 0x2D20 | 0x5846 | 0x5847 | 0x5843 | 0x5814 |
| 0x2D22 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2D23 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2D26 | 0x5801 | 0x5810 | 0x58AE | 0x580B |
| 0x2D2B | 0x5811 | 0x5826 | 0x580B | 0x5810 |
| 0x2D2C | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2D2D | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2D2E | 0x5811 | 0x5826 | 0x580B | 0x5810 |
| 0x2D2F | 0x5811 | 0x5826 | 0x580B | 0x5810 |
| 0x2D30 | 0x5811 | 0x5826 | 0x580B | 0x5810 |
| 0x2D3A | 0x589E | 0x5810 | 0x5811 | 0x5858 |
| 0x2D3B | 0x589F | 0x5810 | 0x5811 | 0x584E |
| 0x2D3C | 0x581C | 0x581E | 0x584C | 0x5826 |
| 0x2D3D | 0x581A | 0x581B | 0x58B0 | 0x583F |
| 0x2D3E | 0x581C | 0x581E | 0x584C | 0x5826 |
| 0x2D3F | 0x589E | 0x5810 | 0x5811 | 0x5858 |
| 0x2D40 | 0x589F | 0x5810 | 0x5811 | 0x584E |
| 0x2D43 | 0x5858 | 0x583F | 0x5811 | 0x5815 |
| 0x2D44 | 0x584E | 0x5826 | 0x5811 | 0x5815 |
| 0x2D45 | 0x589E | 0x587C | 0x5815 | 0x5811 |
| 0x2D46 | 0x589F | 0x587C | 0x5815 | 0x5811 |
| 0x2D47 | 0x58A0 | 0x5858 | 0x589E | 0x5815 |
| 0x2D48 | 0x58A1 | 0x584E | 0x589F | 0x5815 |
| 0x2D4B | 0x581A | 0x581B | 0x589E | 0x5843 |
| 0x2D4C | 0x581C | 0x581E | 0x589F | 0x5843 |
| 0x2D4D | 0x581A | 0x581B | 0x589E | 0x5843 |
| 0x2D4E | 0x581C | 0x581E | 0x589F | 0x5843 |
| 0x2D50 | 0x58B8 | 0x580D | 0x58B7 | 0x5881 |
| 0x2D52 | 0x58B8 | 0x58C0 | 0x58C1 | 0x5832 |
| 0x2D53 | 0x58B8 | 0x58B9 | 0x587C | 0x5839 |
| 0x2D55 | 0x58B8 | 0x5814 | 0x5846 | 0x5847 |
| 0x2D56 | 0x58C7 | 0x58C8 | 0x58C9 | 0x58CA |
| 0x2D57 | 0x58BF | 0x5881 | 0x5893 | 0x583C |
| 0x2D58 | 0x58D4 | 0x58D6 | 0x58CD | 0x5832 |
| 0x2D59 | 0x58B8 | 0x5832 | 0x58CF | 0x58D0 |
| 0x2D5A | 0x5811 | 0x5832 | 0x58CF | 0x58D1 |
| 0x2D5C | 0x58B8 | 0x5847 | 0x5854 | 0x583C |
| 0x2D60 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2D61 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2D62 | 0x58BF | 0x5881 | 0x5893 | 0x583C |
| 0x2D67 | 0x580D | 0x5811 | 0x5832 | 0x587C |
| 0x2D7D | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D82 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D83 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D84 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D85 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D86 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D87 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D88 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D89 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D8E | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D8F | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D90 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D91 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D92 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D93 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D94 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D95 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D9A | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D9B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D9C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D9D | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D9E | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2D9F | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DA0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DA1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DBE | 0x580D | 0x5811 | 0x5832 | 0x587C |
| 0x2DC0 | 0x5811 | 0x5813 | 0x5832 | 0x5891 |
| 0x2DC3 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2DC5 | 0x5811 | 0x582B | 0x583C | 0x587C |
| 0x2DE4 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE5 | 0x580E | 0x5816 | 0x5867 | 0x5861 |
| 0x2DEB | 0x5811 | 0x586A | 0x587C | 0x583C |
| 0x2DEC | 0x5868 | 0x5869 | 0x586A | 0x58A8 |
| 0x2DED | 0x586B | 0x586C | 0x586E | 0x583C |
| 0x2E18 | 0x581F | 0x583C | 0x5811 | 0x58B1 |
| 0x2E19 | 0x581F | 0x583C | 0x5811 | 0x58BE |
| 0x2E1A | 0x581F | 0x583C | 0x5811 | 0x58B6 |
| 0x2E1B | 0x581F | 0x583C | 0x5811 | 0x58B3 |
| 0x2E1C | 0x581F | 0x583C | 0x5811 | 0x58B2 |
| 0x2E1D | 0x581F | 0x583C | 0x5811 | 0x58B5 |
| 0x2E1E | 0x581F | 0x583C | 0x5811 | 0x58BD |
| 0x2E1F | 0x581F | 0x583C | 0x5811 | 0x58B4 |
| 0x2E30 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E31 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E32 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E33 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E34 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E35 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E36 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E37 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E63 | 0x5823 | 0x584A | 0x587C | 0x583C |
| 0x2E64 | 0x5823 | 0x584A | 0x587C | 0x583C |
| 0x2E65 | 0x5811 | 0x581F | 0x583C | 0x587C |
| 0x2E68 | 0x5811 | 0x581F | 0x5883 | 0x5885 |
| 0x2E69 | 0x5811 | 0x581F | 0x5886 | 0x5888 |
| 0x2E6A | 0x5811 | 0x581F | 0x5886 | 0x5888 |
| 0x2E6B | 0x5811 | 0x581F | 0x5886 | 0x5888 |
| 0x2E77 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2E7A | 0x5811 | 0x580E | 0x581F | 0x5804 |
| 0x2E7B | 0x5811 | 0x580E | 0x581F | 0x5804 |
| 0x2E7C | 0x5811 | 0x583C | 0x5867 | 0x587C |
| 0x2E89 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2E8A | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2E8B | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8C | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8D | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8E | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E9F | 0x5811 | 0x5822 | 0x5865 | 0x583C |
| 0x2EA1 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2EA2 | 0x5811 | 0x580F | 0x587C | 0x583C |
| 0x2EA3 | 0x580F | 0x580A | 0x5890 | 0x5892 |
| 0x2EA4 | 0x580F | 0x58E9 | 0x58EA | 0x58EB |
| 0x2EA5 | 0x580F | 0x58E9 | 0x58EC | 0x581D |
| 0x2EA6 | 0x580F | 0x58E9 | 0x58EC | 0x58DF |
| 0x2EA8 | 0x5811 | 0x580F | 0x587C | 0x583C |
| 0x2EA9 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2EAA | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2EAB | 0x580F | 0x580A | 0x5899 | 0x58F2 |
| 0x2EAC | 0x580F | 0x580A | 0x5890 | 0x587B |
| 0x2EB3 | 0x580F | 0x58EC | 0x58EA | 0x583C |
| 0x2EB4 | 0x580F | 0x5890 | 0x5899 | 0x583C |
| 0x2EC3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2EE0 | 0x5850 | 0x581F | 0x5824 | 0x580F |
| 0x2EE2 | 0x581F | 0x5820 | 0x5824 | 0x5882 |
| 0x2EE3 | 0x581F | 0x5820 | 0x5824 | 0x587F |
| 0x2EE7 | 0x5825 | 0x5882 | 0x583A | 0x5833 |
| 0x2EEA | 0x5852 | 0x5820 | 0x5824 | 0x580F |
| 0x2EEB | 0x5820 | 0x581F | 0x5824 | 0x58EA |
| 0x2EEC | 0x5820 | 0x5882 | 0x581F | 0x5832 |
| 0x2EF4 | 0x5824 | 0x5882 | 0x5820 | 0x5811 |
| 0x2EF5 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EFE | 0x5820 | 0x587F | 0x5832 | 0x583C |
| 0x2EFF | 0x5824 | 0x587F | 0x583C | 0x5820 |
| 0x2F07 | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F08 | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F0D | 0x5811 | 0x580D | 0x583C | 0x5880 |
| 0x2F10 | 0x583C | 0x5824 | 0x5880 | 0x5881 |
| 0x2F11 | 0x583C | 0x5824 | 0x5880 | 0x5881 |
| 0x2F13 | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2F14 | 0x5811 | 0x581F | 0x5824 | 0x583C |
| 0x2F15 | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F16 | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F2B | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F2C | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F30 | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F31 | 0x5801 | 0x581F | 0x5824 | 0x583C |
| 0x2F36 | 0x580C | 0x580F | 0x5810 | 0x58AE |
| 0x2F37 | 0x580C | 0x580F | 0x5812 | 0x5818 |
| 0x2F3A | 0x580C | 0x580F | 0x5810 | 0x58AE |
| 0x2F3B | 0x580C | 0x580F | 0x5812 | 0x5818 |
| 0x2F3E | 0x580C | 0x580F | 0x5810 | 0x58AE |
| 0x2F3F | 0x580C | 0x580F | 0x5812 | 0x5818 |
| 0x2F49 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F4A | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F4B | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F4C | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F4D | 0x5811 | 0x580D | 0x587C | 0x583C |
| 0x2F4E | 0x5811 | 0x5832 | 0x583C | 0x5881 |
| 0x2F4F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F58 | 0x588B | 0x584A | 0x5853 | 0x583C |
| 0x2F63 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F64 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F67 | 0x5811 | 0x580D | 0x5832 | 0x5810 |
| 0x2F6C | 0x580D | 0x588B | 0x58AD | 0x583C |
| 0x2F71 | 0x5811 | 0x581F | 0x5821 | 0x580D |
| 0x2F76 | 0x5821 | 0x5834 | 0x5870 | 0x587C |
| 0x2F77 | 0x5834 | 0x5870 | 0x5833 | 0x5824 |
| 0x2F79 | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2F7B | 0x5811 | 0x5822 | 0x581F | 0x583C |
| 0x2F7E | 0x5811 | 0x5833 | 0x5882 | 0x5823 |
| 0x2F7F | 0x5811 | 0x5833 | 0x5882 | 0x5823 |
| 0x2F81 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F82 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F83 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F84 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F85 | 0x5841 | 0x5821 | 0x5824 | 0x583C |
| 0x2F8F | 0x58B7 | 0x580D | 0x5814 | 0x58CE |
| 0x2F91 | 0x580C | 0x580D | 0x5810 | 0x587C |
| 0x2F99 | 0x5824 | 0x5833 | 0x5882 | 0x5820 |
| 0x2F9A | 0x5824 | 0x5833 | 0x5810 | 0x587C |
| 0x2F9E | 0x5811 | 0x5822 | 0x588B | 0x5865 |
| 0x2FA3 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FA4 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FC1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2FC2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2FC6 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2FC8 | 0x58F0 | 0x58EF | 0x58F3 | 0x58BA |
| 0x2FC9 | 0x58F0 | 0x58EF | 0x58F3 | 0x58BA |
| 0x30A0 | 0x581F | 0x583C | 0x5811 | 0x58B1 |
| 0x30A1 | 0x581F | 0x583C | 0x5811 | 0x58BE |
| 0x30A2 | 0x581F | 0x583C | 0x5811 | 0x58B6 |
| 0x30A3 | 0x581F | 0x583C | 0x5811 | 0x58B3 |
| 0x30A4 | 0x581F | 0x583C | 0x5811 | 0x58B2 |
| 0x30A5 | 0x581F | 0x583C | 0x5811 | 0x58B5 |
| 0x30A6 | 0x581F | 0x583C | 0x5811 | 0x58BD |
| 0x30A7 | 0x581F | 0x583C | 0x5811 | 0x58B4 |
| 0x30BA | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BB | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BC | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BD | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BE | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x30CA | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x30CB | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x30CF | 0x5801 | 0x580B | 0x5803 | 0x5807 |
| 0x30D0 | 0x5801 | 0x580B | 0x5803 | 0x5807 |
| 0x30ED | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30EE | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30EF | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30F0 | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30F1 | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30F2 | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30F3 | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30F4 | 0x5810 | 0x5811 | 0x5813 | 0x5883 |
| 0x30FC | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x30FE | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x30FF | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x3100 | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x3108 | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x310A | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x310B | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x315F | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3160 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3162 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3165 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3166 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3167 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3168 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x316A | 0x5811 | 0x588D | 0x583B | 0x5815 |
| 0x316B | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x316C | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x316D | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x316E | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x316F | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3171 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3173 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3174 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3175 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3176 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3177 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3179 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x317A | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x317B | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3180 | 0x5811 | 0x588D | 0x583B | 0x5815 |
| 0x3181 | 0x5811 | 0x588D | 0x583B | 0x5815 |
| 0x3183 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3184 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0x3185 | 0x584A | 0x5811 | 0x5815 | 0x587C |
| 0x3188 | 0x5811 | 0x588D | 0x583B | 0x5815 |
| 0x3189 | 0x5811 | 0x588D | 0x583B | 0x5815 |
| 0xCD87 | 0x5812 | 0x583C | 0x5868 | 0x587C |
| 0xCD8B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD94 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD98 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9D | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9F | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAA | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDAB | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAF | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB0 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDB1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB9 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCDBA | 0x5831 | 0x5841 | 0x583C | 0x587C |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4206 | Rohwert Luftmassenstrom vom HFM Bank 1 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4207 | Rohwert Luftmassenstrom vom HFM Bank 2 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4208 | Luftmassenstrom vom HFM Bank 1 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4209 | Luftmassenstrom vom HFM Bank 2 | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4307 | Betriebsart Wasserpumpe | 0-n | - | 0xFF | _CNV_S_12__CNV_S_12__705 | 1 | 1 | 0 |
| 0x4310 | Wasserpumpe Leistung, relativ CWP_2_1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4311 | Wasserpumpe Leistung, relativ CWP_2_2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4312 | Wasserpumpe Elektronik Temperatur, CWP_2_1 | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x4313 | Wasserpumpe Elektronik Temperatur, CWP_2_2 | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x4314 | Wasserpumpe Stromaufnahme, CWP_2_1 | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x4315 | Wasserpumpe Stromaufnahme, CWP_2_2 | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x4316 | Wasserpumpe Ist-Drehzahl, CWP_2_1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4317 | Wasserpumpe Ist-Drehzahl, CWP_2_2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4318 | Wasserpumpe Soll-Drehzahl, CWP_2_1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4319 | Wasserpumpe Soll-Drehzahl, CWP_2_2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x431A | Wasserpumpe Spannung; CWP_2_1 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x431B | Wasserpumpe Spannung; CWP_2_2 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x431C | Wasserpumpe Drehzahl Soll-Ist-Differenz, CWP_2_1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x431D | Wasserpumpe Drehzahl Soll-Ist-Differenz, CWP_2_2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4400 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | ° C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4416 | zugeteilte Bonuskraftstoffmenge | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x441E | Kurzzeitmittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x441F | Vormittelwert | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4421 | Orientierungswert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4422 | Vormittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4423 | Kurzzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4424 | Langzeitmittelwert Counter | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x442A | DME initialisiert | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4506 | Nockenwellenposition Einlass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4507 | Nockenwellenposition Auslass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4509 | Istwert Auslassspreizung Bank 1 | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x450C | VANOS PWM Wert Einlass Bank 1 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x450D | VANOS PWM Wert Einlass Bank 2 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x450E | VANOS PWM Wert Auslass Bank 1 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x450F | VANOS PWM Wert Auslass Bank 2 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4510 | Istwert Einlassspreizung Bank 1 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4511 | Istwert Einlassspreizung Bank 2 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4512 | Istwert Auslassspreizung Bank 2 | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x4513 | Sollwert Einlassspreitzung Bank1  | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4514 | Sollwert Einlassspreitzung Bank2  | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4515 | Sollwert Auslassspreitzung Bank1 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4516 | Sollwert Auslassspreitzung Bank2 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4517 | Normspreitzung Einlass Bank 1 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4518 | Normspreitzung Einlass Bank 2 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4519 | Normspreitzung Einlass Bank 1 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x451A | Normspreitzung Einlass Bank 2 | °CRK | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x451B | Nockenwellenposition Einlass Bank 2 | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x451C | Nockenwellenposition Auslass Bank 2 | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x451D | Adaptionswert Nockenwelle Auslass Bank 2 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x451E | Adaptionswert Nockenwelle Einlass Bank 2 | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x460A | Batteriespannung aktuell | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 4,861343768425286E-4 | 1 | 0,0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 4,861343768425286E-4 | 1 | 0,0 |
| 0x4704 | Lambda Sollwert Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4705 | Lambda Sollwert Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4706 | STATUS-BIT MSV-Relais | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4707 | PWM-Signal Umluftventil 1 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4708 | PWM-Signal Umluftventil 2 | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x4709 | Lernvariante Hochdruckpumpenrelais | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x470A | Versorgungsspannung Einspritzung /Zündung (HDPI-Relais) | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x4800 | Kupplungsschalter Status | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4801 | Kupplungsschalter vorhanden | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4802 | Sporttaster aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4803 | Status Klima ein | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4805 | Startrelais über CAN aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4806 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4807 | Motor Drehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4808 | Leerlauf Solldrehzahl | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4809 | Status LL | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x480A | Kilometerstand Auflösung 1 km | km | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x480B | Pedalwert Fahrerwunsch in % | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x480C | Spannung Ansauglufttemperatur 1 | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x480D | Spannung Ansauglufttemperatur 2 | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x480E | Rohwert Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x480F | Rohwert Ansauglufttemperatur 2 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4814 | Druck vor Drosselklappe Bank 1 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4815 | Druck nach Drosselklappe Bank 1 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4816 | Temperatur vor Drosselklappe Bank 1 | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4817 | Druck vor Drosselklappe Bank 2 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4818 | Druck nach Drosselklappe Bank 2 | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x4819 | Temperatur vor Drosselklappe Bank 2 | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x481A | Raildruck Bank 1 | hPa | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| 0x481B | Raildruck Bank 2 | hPa | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| 0x481C | ADC-Wert1 Drosselklappe Bank 1 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| 0x481D | ADC-Wert2 Drosselklappe Bank 1 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| 0x481E | ADC-Wert1 Drosselklappe Bank 2 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| 0x481F | ADC-Wert2 Drosselklappe Bank 2 | V | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| 0x4820 | Drosselklappenwinkel Bank 1 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4821 | Drosselklappenwinkel Bank 2 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4822 | Drosselklappe Sollwert Bank 1 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4823 | Drosselklappe Sollwert Bank 2 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4828 | Status Abgasklappe 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x482C | Drosselklappe Sollwert Bank 1 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x482D | Drosselklappe Sollwert Bank 2 | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x482E | Status Wasserpumpe Lagerstuhlkuehlung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4830 | L2R Dynamik-Diagnose HK - Zähler für abgeschlossene Diagnose-Durchläufe Bank1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4831 | L2R Dynamik-Diagnose HK - Zähler für abgeschlossene Diagnose-Durchläufe Bank2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4832 | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse Bank1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4833 | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse Bank2 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4834 | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse Bank1 | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4835 | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4836 | L2R Dynamik-Diagnose HK - Max-Ergebnis aller Fahrzyklen | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4837 | L2R Dynamik-Diagnose HK - Max-Ergebnis aller Fahrzyklen | mV/s | - | signed integer | - | 2,0 | 1 | 0,0 |
| 0x4838 | L2R Dynamik-Diagnose HK - Min-Ergebnis aller Fahrzyklen Bank1 | (V/s)² | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| 0x4839 | L2R Dynamik-Diagnose HK - Min-Ergebnis aller Fahrzyklen Bank2 | (V/s)² | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| 0x4840 | berechneter Hochdrucksollwert, Bank 1 | hPa | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| 0x4841 | berechneter Hochdrucksollwert, Bank 2 | hPa | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| 0x4842 | Drehzahl Kraftsstoffpumpe | rpm | - | unsigned char | - | 50,0 | 1 | 0,0 |
| 0x4843 | Hochdruckreglerwert Ausgang, Bank 1 | MPa | - | signed integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x4844 | Hochdruckreglerwert Ausgang, Bank 2 | MPa | - | signed integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| 0x4850 | Zaehler Zuendaussetzerkennung Zylinder 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4851 | Zaehler Zuendaussetzerkennung Zylinder 5 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4852 | Zaehler Zuendaussetzerkennung Zylinder 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4853 | Zaehler Zuendaussetzerkennung Zylinder 8 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4854 | Zaehler Zuendaussetzerkennung Zylinder 6 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4855 | Zaehler Zuendaussetzerkennung Zylinder 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4856 | Zaehler Zuendaussetzerkennung Zylinder 7 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4857 | Zaehler Zuendaussetzerkennung Zylinder 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_307 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_307 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Kühlmitteltemperatur OBD | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5806 | Lambda Integrator Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5808 | Lambda Integrator Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x580A | Wasserpumpe Spannung CWP_2_2 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x580B | Saugrohrdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580C | Drehzahl | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | °CRK | - | unsigned char | - | 0,5 | 1 | -64,0 |
| 0x580F | Ansauglufttemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5810 | Luftdurchsatz OBD | g/s | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5812 | Luftmasse gemessen Bank 1 | kg/h | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5818 | Luftmasse gerechnet | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x5819 | Drehzahl OBD Byte | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x581A | Rohwert Drosselklapenpoti 1 Bank 1 | V | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| 0x581B | Rohwert Drosselklapenpoti 2 Bank 1 | V | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| 0x581C | Rohwert Drosselklapenpoti 1 Bank 2 | V | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| 0x581D | Wasserpumpe Stromaufnahme CWP2_1 | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x581E | Rohwert Drosselklapenpoti 2 Bank 2 | V | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5825 | Abstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5826 | Drosselklappe 2 Sollwert | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| 0x5827 | Lambdasondenheizung vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5828 | Lambdasondenheizung vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5829 | Lambdasondenheizung hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582A | Lambdasondenheizung hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x582B | Drehmomenteingriff über CAN | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582C | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582D | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x582E | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x582F | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5830 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| 0x5831 | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_58 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_254 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_254 | 1 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0-n | - | 0xFF | _CNV_S_3_THRO_RANGE_913 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x583D | Resettyp | 0-n | - | 0xFF | _CNV_S_19_ECOP_RANGE_814 | 1 | 1 | 0 |
| 0x583E | Motordrehzahl bei Reset | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x583F | Drosselklappe Sollwert | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| 0x5840 | CPU Last bei Reset | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5843 | Versorgung Fahrtwertgeber 1 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5845 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5846 | Spannung Pedalwertgeber 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5847 | Spannung Pedalwertgeber 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5848 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5849 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584A | Spannung Kl. 15 Rohwert | V | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 |
| 0x584B | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x584C | Drosselklappe Adaptionsschritte Drosselklappe 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x584D | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| 0x584E | Drosselklappe sollwert Bank2 | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x584F | Spannung Ansauglufttemperatur Sensor 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5851 | Spannung Ansauglufttemperatur Sensor 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 |
| 0x5854 | Versorgung Fahrtwertgeber 2 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5855 | Mittelwert Lambda Bank 1  | % | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| 0x5856 | Mittelwert Lambda  Bank 2 | % | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| 0x5858 | Drosselklappe aktueller Wert Bank1 | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585B | DMTL Strom Diagnoseende | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1High Byte | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 High Byte | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585E | Widerstand Lambdasonde hinter Katalysator Bank 1 Low Byte | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x585F | Widerstand Lambdasonde hinter Katalysator Bank 2 Low Byte | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 High Byte | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 High Byte | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5863 | Widerstand Lambdasonde vor Katalysator Bank 1 Low Byte | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 Low Byte | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5865 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x5866 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5867 | Kilometerstand | km | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5868 | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5869 | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586A | Batteriespannung von IBS gemessen | - | - | unsigned char | - | 0,06400000303983688 | 1 | 6,0 |
| 0x586B | Zeit mit Ruhestrom 80 - 200 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586C | Zeit mit Ruhestrom 200 - 1000 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586D | Zähler Erkennung schlechte Strasse | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x586E | Zeit mit Ruhestrom größer 1000 mA | min | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| 0x586F | Ist-Oeldruck | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5874 | Spannung Strommessung DMTL | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5875 | Sollwert Motormoment | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x5876 | OBD Kraftstoffdruck Hochdruckseite High Byte | kPa | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5877 | OBD Kraftstoffdruck Hochdruckseite Low Byte | kPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x587B | Wasserpumpe Leistung relativ CWP2_2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__56 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_266 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_266 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Ansteuerung Luftklappe unten | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5884 | Rückgelesener Erregergrenzstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 1,5625238418579102 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5890 | Wasserpumpe Elektroniktemperatur CWP2_2 | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5892 | Wasserpumpe Stromaufnahme CWP2_2 | A | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_258 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_258 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5899 | Wasserpumpe Istdrehzahl CWP2_2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589A | Wasserpumpen Solldrehzahl CWP2_1 und CWP2_2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x589B | Spannungsoffset Signalpfad CJ120 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589C | Spannungsoffset Signalpfad CJ120 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589D | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | - | signed char | - | 0,015624979510903358 | 1 | -2,509803727102794E-6 |
| 0x589E | Status_Drosselklapendiagnose Bank1 | 0-n | - | 0xFF | _CNV_S_5_THRO_RANGE_908 | 1 | 1 | 0 |
| 0x589F | Status Drosselklappendiagnose Bank2 | 0-n | - | 0xFF | _CNV_S_5_THRO_RANGE_908 | 1 | 1 | 0 |
| 0x58A0 | Signal Ansteuerung Drosselklappe  Bank1 | % | - | signed char | - | 0,78125 | 1 | 0,0 |
| 0x58A1 | Signal Ansteuerung Drosselklappe  Bank2 | % | - | signed char | - | 0,78125 | 1 | 0,0 |
| 0x58A8 | Motorabstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58A9 | Resetzähler Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Fehlercode Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AB | Motordrehzahl Auflosung 32 Umdrehungen | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58AC | Batterietemperatur | °C | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AE | Periodendauer Luftmasse Bank 1 | us | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | DK-Adaptionsschritt Drosselklappe Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 8 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B7 | Bremsdruck | bar | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BA | eingespritze Kraftstoffmasse | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BB | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BD | Funkenbrenndauer Zylinder 7 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58BE | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit high Byte | µs | - | unsigned char | - | 7812,21826171875 | 1 | 0,0 |
| 0x58C2 | Statusbyte MFF-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C3 | Statusbyte ISC-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C5 | Drehzahl Überwachung (resetsicher) | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C6 | Status Einspritzventile (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CD | Entladung während Ruhestromverletzung | Ah | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CF | Motormoment Sollwert Überwachung | Nm | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58D0 | Motormoment Istwert Überwachung | Nm | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D2 | Status Luftklappe High Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D3 | Status Luftklappe Low  Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D7 | Druck vor Drosselklappe Bank 2 | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D8 | Sensorspannung Sensor Druck vor Drosselklappe Bank 2 | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58D9 | Fehlercode Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | Resetzähler Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DB | Inhalt Statusbyte 1 Drehzahlüberwachung (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DC | Inhalt Statusbyte 2 Drehzahlüberwachung (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe Bank 1(Turbo) | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DE | Sensorspannung Sensor Druck vor Drosselkappe Bank 1 | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58DF | Wasserpumpe Leistung relativ CWP2_1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | Abgleich Einlassventilmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_5__CNV_S_5_D_634 | 1 | 1 | 0 |
| 0x58E5 | Lastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E6 | Nulllastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E7 | Spannung Pedalwertgeber 1 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E8 | Spannung Pedalwertgeber 2 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E9 | Wasserpumpe Spannung CWP2_1 | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Wasserpumpe Drehzahl CWP2_1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | Wasserpumpe Soll -Ist_Differenz CWP2_1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Wasserpumpe Temperatur Elektronik CWP2_1 | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Spannung gemittelter Raildruck Bank 1 | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58EE | Spannung gemittelter Raildruck Bank 2 | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58EF | gemittelter Raildruck Bank 1 | hPa | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| 0x58F0 | gemittelter Raildruck Bank 2 | hPa | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| 0x58F1 | DME - Losnummer | 0-n | - | 0xFF | _CNV_S_11_RANGE_STAT_872 | 1 | 1 | 0 |
| 0x58F2 | Wasserpumpe Differenz Ist-Soll Drehzahl CWP2_2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58F3 | Kraftstoffdruck von EFP | hPa | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| 0x58F4 | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F6 | Eingangssignal Rückführregler 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F7 | Laufunruhe Segmentzeit Low Byte | µs | - | unsigned char | - | 30,516477584838867 | 1 | 0,0 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FC | Aufwärmfunktion aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A00 | Versorgung Fahrwertgeber 1 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x5A01 | Versorgung Fahrwertgeber 2 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x5A02 |  Bedingungen für Ablaufen der Turboladerdiagnose erfüllt Lader 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A03 | Turboladerdiagnose gesamthaft abgelaufen Lader 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x5A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A15 | Turboladerdiagnose im Niederdruckbereich abgelaufen Lader 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A16 | Turboladerdiagnose im Hochdruckbereich abgelaufen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A18 | Diagnose von zu niedrigem Ladedruck beendet Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A19 | Diagnose von zu hohem Ladedruck beendet Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A1A | Bedinung Turboladerdiagnose Niederdruckbereich Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A1B | Bedinung Turboladerdiagnose Niederdruckbereich Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A1C | Bedinung Turboladerdiagnose Hochdruckbereich Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A1D | Bedinung Turboladerdiagnose Hochdruckbereich Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5A26 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x5A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A2A | Sollwert Kraftstoffpumpe | hPa | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| 0x5A2E | Kraftstoffniederdrucksensor | hPa | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| 0x5A2F | Gemessener Kraftstoffdruck | MPa | - | unsigned integer | - | 0,00390625 | 1 | 0,0 |
| 0x5A30 | Laufunruhe Zylinder 1 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A31 | Laufunruhe Zylinder 6 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A32 | Laufunruhe Zylinder 4 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A33 | Laufunruhe Zylinder 3 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A34 | Laufunruhe Zylinder 5 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A35 | Laufunruhe Zylinder 8 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A36 | Status Klopfen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A37 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A38 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A39 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3A | Spannung Klopfwerte Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3B | Spannung Klopfwerte Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3C | Spannung Klopfwerte Zylinder 8 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3D | Klopfsignal Zylinder 1 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3E | Klopfsignal Zylinder 5 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A3F | Klopfsignal Zylinder 3 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A40 | Klopfsignal Zylinder 4 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A41 | Klopfsignal Zylinder 8 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A42 | Klopfsignal Zylinder 6 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A43 | Klopfsignal Zylinder 7 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A44 | Klopfsignal Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A45 | Laufunruhe Zylinder 7 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A46 | Laufunruhe Zylinder 2 | µs | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| 0x5A47 | Spannung Klopfwerte Zylinder 7 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A48 | Spannung Klopfwerte Zylinder 2 | V | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| 0x5A49 | Zündwinkel Zylinder 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| 0x5A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| 0x5A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| 0x5A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| 0x5A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
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
| 0x5A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6C | Verbrauchskorrekturfaktor | - | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5A73 | Kurbelgehäuseentlüftungsheizung ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A77 | Tankentlüftungsventil PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A81 | Integrator Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A82 | Integrator Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A83 | Adaption Offset Lambda Bank 1 | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A84 | Adaption Offset Lambda Bank 2 | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A85 | Adaption Multiplikation Lambda Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A86 | Adaption Multiplikation Lambda Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A87 | Adaptionswert Trimregelung Bank 1 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x5A88 | Adaptionswert Trimregelung Bank 2 | - | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| 0x5A89 | multiplikative Gemischadaption hohe Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A8A | multiplikative Gemischadaption hohe Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A8B | multiplikative Gemischadaption niedrige Last Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A8C | multiplikative Gemischadaption niedrige Last Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A8D | additive Gemischadaption Leerlauf Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5A8E | additive Gemischadaption Leerlauf Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5A8F | Adaption Schubabgleich Bank 1 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5A90 | Adaption Schubabgleich Bank 2 | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5A91 | Katalysatordiagnosewert Bank1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5A92 | Katalysatordiagnosewert Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5A95 | Adaptionswert Nockenwelle Auslass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x5A96 | Adaptionswert Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x5A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A9A | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AA7 | Leckluftadaption Istwert | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5AA8 | Status Luftklappensystem | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AA9 | Tastverhältniss Luftklappe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5AAB | Wastegate 1 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAC | Wastegate 2 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAD | Vorsteuernung Ladedruck | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAF | Adaptionswert von der Ladedruckregelung | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5AB0 | Solladedruck | hPa | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| 0x5AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AB2 | Periodendauer Luftmasse | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x5AB5 | Periodendauer Luftmasse Bank 2 | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5AB8 | Spannung Saugrohrdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABA | Kraftstoffpumpe PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5ABB | Spannung Saugrohrdruck 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AC2 | Reset Adresse | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AC4 | Minimale Pumpengeschwindigkeit der elektrischen Kraftsoffpumpe | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AC5 | Aditiver I-Anteil des EKP-Controllers | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AD0 | DME-Temperaturstatistik Zähler 5 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD1 | DME-Temperaturstatistik Zähler 6 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD2 | DME-Temperaturstatistik Zähler 7 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD3 | DME-Temperaturstatistik Zähler 8 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD5 | DME-Temperaturstatistik Zähler 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD6 | DME-Temperaturstatistik Zähler 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD7 | DME-Temperaturstatistik Zähler 3 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD8 | DME-Temperaturstatistik Zähler 4 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD9 | DME-Temperaturstatistik Zähler 5 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ADA | DME-Temperaturstatistik Zähler 6 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ADB | DME-Temperaturstatistik Zähler 7 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ADC | DME-Temperaturstatistik Zähler 8 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AE2 | Resetart des letzten Resets | 0-n | - | 0xFF | _CNV_S_19_ECOP_RANGE_814 | 1 | 1 | 0 |
| 0x5AE3 | Hintegrundinformationen zum letzten gültigen Reset | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AE4 | Zusätzliche Resetinformationen zur Resetursache | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AE5 | Fahrstrecke bei Reset | m | - | unsigned long | - | 100,0 | 1 | 0,0 |
| 0x5AE6 | Betriebsstundenzähler bei Reset | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x5AE7 | Maximale CPU-Last bei Reseterkennung | % | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| 0x5AE8 | Geschwindigkeit bei maximaler CPU-Last bei Reseterkennung | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5B00 | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B01 | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B02 | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B03 | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B04 | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B05 | Einspritzzeit Zylinder 8 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B06 | Einspritzzeit Zylinder 7 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B07 | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B10 | Tastverhältnis Injektor 1 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B11 | Tastverhältnis Injektor 6 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B12 | Tastverhältnis Injektor 4 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B13 | Tastverhältnis Injektor 3 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B14 | Tastverhältnis Injektor 5 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B15 | Tastverhältnis Injektor 8 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B16 | Tastverhältnis Injektor 7 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B17 | Tastverhältnis Injektor 2 an Endstufe | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B20 | Elektrische Ladung Injektor 1 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B21 | Elektrische Ladung Injektor 6 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B22 | Elektrische Ladung Injektor 4 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B23 | Elektrische Ladung Injektor 3 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B24 | Elektrische Ladung Injektor 5 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B25 | Elektrische Ladung Injektor 8 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B26 | Elektrische Ladung Injektor 7 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B27 | Elektrische Ladung Injektor 2 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B30 | Spannung Injektor 1 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B31 | Spannung Injektor 6 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B32 | Spannung Injektor 4 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B33 | Spannung Injektor 3 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B34 | Spannung Injektor 5 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B35 | Spannung Injektor 8 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B36 | Spannung Injektor 7 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B37 | Spannung Injektor 2 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B40 | Adaptionswert der Enstufe Injektor 1 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B41 | Adaptionswert der Enstufe Injektor 6 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B42 | Adaptionswert der Enstufe Injektor 4 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B43 | Adaptionswert der Enstufe Injektor 3 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B44 | Adaptionswert der Enstufe Injektor 5 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B45 | Adaptionswert der Enstufe Injektor 8 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B46 | Adaptionswert der Enstufe Injektor 7 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B47 | Adaptionswert der Enstufe Injektor 2 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B60 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B61 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B62 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B63 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 8 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B64 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B65 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B66 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 7 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B67 | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BBE | Plausibilität Injektorcodierung Energieabgleich | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5BBF | Plausibilität Injektorcodierung Durchflussabgleich | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5BCA | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt A | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BCB | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt A | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BCC | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt B | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BCD | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt B | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BCE | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt C | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BCF | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt C | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BD0 | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt D | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BD1 | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt D | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BD2 | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt E | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BD3 | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt E | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE0 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE1 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE2 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE3 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 8 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE4 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE5 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE6 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 7 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE7 | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF0 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF1 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF2 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF3 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 8 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF4 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF5 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF6 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 7 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF7 | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29DF | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x29E0 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x29E1 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x29E2 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x29F3 | 0x1636 | 0x0000 | 0x163A | 0x163B |
| 0x29F4 | 0x0000 | 0x0000 | 0x100B | 0x162B |
| 0x29F5 | 0x0000 | 0x0000 | 0x100B | 0x162B |
| 0x2A12 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A18 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A19 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A1A | 0x1021 | 0x1022 | 0x0000 | 0x0000 |
| 0x2A22 | 0x1024 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A28 | 0x0000 | 0x128C | 0x128D | 0x128E |
| 0x2A2B | 0x0000 | 0x0000 | 0x1673 | 0x1674 |
| 0x2A2C | 0x0000 | 0x0000 | 0x128A | 0x128B |
| 0x2A7A | 0x0000 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A7B | 0x0000 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A7C | 0x0000 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A7D | 0x0000 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A7E | 0x1048 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7F | 0x1048 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A80 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A81 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A82 | 0x1048 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A86 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A87 | 0x1048 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A94 | 0x0000 | 0x0000 | 0x1018 | 0x1049 |
| 0x2A95 | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2A96 | 0x0000 | 0x0000 | 0x0000 | 0x104B |
| 0x2A97 | 0x0000 | 0x0000 | 0x0000 | 0x104C |
| 0x2A98 | 0x0000 | 0x0000 | 0x0000 | 0x104D |
| 0x2A99 | 0x0000 | 0x0000 | 0x0000 | 0x104D |
| 0x2A9A | 0x0000 | 0x0000 | 0x0000 | 0x104E |
| 0x2A9B | 0x0000 | 0x0000 | 0x0000 | 0x104E |
| 0x2A9C | 0x0000 | 0x0000 | 0x0000 | 0x104D |
| 0x2A9D | 0x0000 | 0x0000 | 0x0000 | 0x104D |
| 0x2A9E | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2A9F | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2AA0 | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2AA1 | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2AA2 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2AA3 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2AA4 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA5 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA6 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA7 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AAD | 0x0000 | 0x1054 | 0x0000 | 0x0000 |
| 0x2AAE | 0x1055 | 0x1058 | 0x1056 | 0x1057 |
| 0x2AB0 | 0x0000 | 0x0000 | 0x0000 | 0x104E |
| 0x2AB1 | 0x0000 | 0x0000 | 0x0000 | 0x104E |
| 0x2AB2 | 0x0000 | 0x0000 | 0x1059 | 0x105A |
| 0x2AB3 | 0x0000 | 0x105B | 0x105C | 0x105D |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x15C9 |
| 0x2AB5 | 0x0000 | 0x105F | 0x0000 | 0x0000 |
| 0x2AB6 | 0x0000 | 0x105F | 0x0000 | 0x0000 |
| 0x2AB8 | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2AB9 | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2ABA | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2ABB | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2ABC | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2ABD | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2ABE | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2ABF | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2AC2 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2AC3 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2AC4 | 0x0000 | 0x15A5 | 0x15A6 | 0x15A4 |
| 0x2ACA | 0x0000 | 0x0000 | 0x15A2 | 0x1014 |
| 0x2ACB | 0x0000 | 0x0000 | 0x1559 | 0x1062 |
| 0x2ACC | 0x0000 | 0x0000 | 0x0000 | 0x1063 |
| 0x2AD4 | 0x0000 | 0x0000 | 0x0000 | 0x15D3 |
| 0x2ADF | 0x0000 | 0x0000 | 0x1056 | 0x1057 |
| 0x2AE0 | 0x0000 | 0x0000 | 0x1056 | 0x1057 |
| 0x2B00 | 0x0000 | 0x0000 | 0x0000 | 0x12E6 |
| 0x2B02 | 0x1555 | 0x1556 | 0x1558 | 0x1557 |
| 0x2B0F | 0x0000 | 0x0000 | 0x1005 | 0x0000 |
| 0x2B10 | 0x0000 | 0x0000 | 0x1006 | 0x0000 |
| 0x2B12 | 0x1007 | 0x0000 | 0x1680 | 0x167F |
| 0x2B16 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B17 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B18 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B19 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B1A | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B1B | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B1C | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B1D | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x2B22 | 0x1345 | 0x162C | 0x162D | 0x158A |
| 0x2B23 | 0x0000 | 0x0000 | 0x1007 | 0x0000 |
| 0x2B26 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2B27 | 0x0000 | 0x1016 | 0x11F8 | 0x0000 |
| 0x2B28 | 0x0000 | 0x0000 | 0x162E | 0x0000 |
| 0x2B29 | 0x101D | 0x15A3 | 0x101F | 0x101C |
| 0x2B2A | 0x0000 | 0x0000 | 0x1571 | 0x1570 |
| 0x2B2B | 0x0000 | 0x0000 | 0x1571 | 0x1570 |
| 0x2B2C | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2B2D | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2B2E | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2B2F | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2BA2 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2C24 | 0x1605 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C27 | 0x0000 | 0x0000 | 0x0000 | 0x1606 |
| 0x2C28 | 0x0000 | 0x0000 | 0x0000 | 0x1606 |
| 0x2C2B | 0x0000 | 0x0000 | 0x0000 | 0x1607 |
| 0x2C2C | 0x0000 | 0x0000 | 0x0000 | 0x1607 |
| 0x2C2D | 0x0000 | 0x0000 | 0x0000 | 0x1608 |
| 0x2C2E | 0x0000 | 0x0000 | 0x0000 | 0x1608 |
| 0x2C31 | 0x0000 | 0x0000 | 0x106A | 0x106B |
| 0x2C32 | 0x0000 | 0x0000 | 0x106A | 0x106B |
| 0x2C39 | 0x0000 | 0x0000 | 0x1602 | 0x0000 |
| 0x2C3A | 0x0000 | 0x0000 | 0x1602 | 0x0000 |
| 0x2C3B | 0x0000 | 0x0000 | 0x0000 | 0x162F |
| 0x2C3C | 0x0000 | 0x0000 | 0x0000 | 0x162F |
| 0x2C3D | 0x0000 | 0x1609 | 0x1609 | 0x106F |
| 0x2C3E | 0x0000 | 0x1609 | 0x1609 | 0x106F |
| 0x2C3F | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2C40 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2C41 | 0x0000 | 0x0000 | 0x1071 | 0x1072 |
| 0x2C42 | 0x0000 | 0x0000 | 0x1071 | 0x1072 |
| 0x2C6A | 0x1605 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6B | 0x0000 | 0x0000 | 0x1606 | 0x1607 |
| 0x2C6C | 0x0000 | 0x0000 | 0x1606 | 0x1607 |
| 0x2C6D | 0x1602 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6E | 0x1602 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C73 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2C74 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2C75 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2C76 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x2C77 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2C78 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2C79 | 0x1602 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7A | 0x1602 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7B | 0x160A | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7C | 0x160A | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7E | 0x0000 | 0x0000 | 0x106A | 0x106B |
| 0x2C7F | 0x0000 | 0x0000 | 0x106A | 0x106B |
| 0x2C9C | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2C9D | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2C9E | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2C9F | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2CA6 | 0x0000 | 0x1647 | 0x160B | 0x14D1 |
| 0x2CA7 | 0x0000 | 0x1647 | 0x160B | 0x14D1 |
| 0x2CA8 | 0x0000 | 0x0000 | 0x0000 | 0x132A |
| 0x2CA9 | 0x0000 | 0x0000 | 0x0000 | 0x132A |
| 0x2CAA | 0x0000 | 0x1647 | 0x160B | 0x14D1 |
| 0x2CAB | 0x0000 | 0x1647 | 0x160B | 0x14D1 |
| 0x2CF3 | 0x0000 | 0x0000 | 0x1094 | 0x0000 |
| 0x2CF4 | 0x0000 | 0x0000 | 0x1612 | 0x1087 |
| 0x2CF5 | 0x0000 | 0x0000 | 0x1612 | 0x1087 |
| 0x2CFB | 0x1611 | 0x0000 | 0x160F | 0x160E |
| 0x2D06 | 0x0000 | 0x0000 | 0x1648 | 0x163F |
| 0x2D07 | 0x1615 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D09 | 0x0000 | 0x0000 | 0x1094 | 0x0000 |
| 0x2D0A | 0x1615 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D0D | 0x0000 | 0x0000 | 0x1648 | 0x163F |
| 0x2D15 | 0x0000 | 0x0000 | 0x15A9 | 0x15AA |
| 0x2D16 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D1B | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D1C | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D1D | 0x1630 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1E | 0x1631 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1F | 0x1094 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D20 | 0x1632 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D22 | 0x0000 | 0x0000 | 0x15A9 | 0x15AA |
| 0x2D23 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D26 | 0x15CF | 0x0000 | 0x0000 | 0x0000 |
| 0x2D2B | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D2C | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D2D | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D2E | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D2F | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D30 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D3A | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2D3B | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2D3C | 0x1611 | 0x0000 | 0x160F | 0x160E |
| 0x2D3D | 0x1575 | 0x1618 | 0x15B8 | 0x1574 |
| 0x2D3E | 0x1575 | 0x1618 | 0x15B8 | 0x1574 |
| 0x2D3F | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2D40 | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2D43 | 0x0000 | 0x0000 | 0x0000 | 0x160C |
| 0x2D44 | 0x0000 | 0x0000 | 0x0000 | 0x160C |
| 0x2D45 | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2D46 | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2D47 | 0x0000 | 0x0000 | 0x0000 | 0x1619 |
| 0x2D48 | 0x0000 | 0x0000 | 0x0000 | 0x1619 |
| 0x2D4B | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D4C | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D4D | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D4E | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D50 | 0x0000 | 0x1099 | 0x109A | 0x0000 |
| 0x2D52 | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D55 | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D56 | 0x109D | 0x109E | 0x0000 | 0x0000 |
| 0x2D57 | 0x109F | 0x1582 | 0x0000 | 0x10A1 |
| 0x2D58 | 0x0000 | 0x10A4 | 0x10A3 | 0x10A5 |
| 0x2D59 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5A | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5C | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D60 | 0x1649 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D61 | 0x163C | 0x0000 | 0x0000 | 0x0000 |
| 0x2D62 | 0x1623 | 0x1624 | 0x1626 | 0x1625 |
| 0x2D67 | 0x1628 | 0x1627 | 0x10AC | 0x10AD |
| 0x2D7D | 0x0000 | 0x0000 | 0x15C0 | 0x0000 |
| 0x2D82 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D83 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D84 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D85 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D86 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D87 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D88 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D89 | 0x0000 | 0x0000 | 0x0000 | 0x15AB |
| 0x2D8E | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D8F | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D90 | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D91 | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D92 | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D93 | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D94 | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D95 | 0x0000 | 0x0000 | 0x0000 | 0x15AC |
| 0x2D9A | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2D9B | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2D9C | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2D9D | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2D9E | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2D9F | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2DA0 | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2DA1 | 0x0000 | 0x0000 | 0x0000 | 0x15AD |
| 0x2DBE | 0x0000 | 0x0000 | 0x10B0 | 0x10B1 |
| 0x2DC0 | 0x10B2 | 0x0000 | 0x0000 | 0x10B3 |
| 0x2DC3 | 0x1018 | 0x10B4 | 0x1015 | 0x1014 |
| 0x2DC5 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DE4 | 0x10BA | 0x0000 | 0x11F8 | 0x1060 |
| 0x2DE5 | 0x10BA | 0x0000 | 0x11F8 | 0x1060 |
| 0x2DEB | 0x0000 | 0x10BB | 0x1031 | 0x1032 |
| 0x2DEC | 0x10BC | 0x0000 | 0x10BD | 0x0000 |
| 0x2DED | 0x10BE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E18 | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E19 | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1A | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1B | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1D | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1E | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1F | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E30 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E31 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E32 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E33 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E34 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E35 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E36 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E37 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E63 | 0x1559 | 0x1062 | 0x0000 | 0x0000 |
| 0x2E64 | 0x1063 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E65 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2E68 | 0x1018 | 0x0000 | 0x10C6 | 0x10C8 |
| 0x2E69 | 0x1018 | 0x0000 | 0x10C6 | 0x10C8 |
| 0x2E6A | 0x1018 | 0x0000 | 0x10C6 | 0x10C8 |
| 0x2E6B | 0x1018 | 0x0000 | 0x10C6 | 0x10C8 |
| 0x2E77 | 0x10C9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E7A | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7B | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7C | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x2E89 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2E8A | 0x155C | 0x0000 | 0x0000 | 0x0000 |
| 0x2E8B | 0x10D1 | 0x10D2 | 0x0000 | 0x10D3 |
| 0x2E8C | 0x10D4 | 0x10D6 | 0x0000 | 0x10D5 |
| 0x2E8D | 0x10D7 | 0x10D8 | 0x0000 | 0x10D9 |
| 0x2E8E | 0x0000 | 0x10DA | 0x0000 | 0x0000 |
| 0x2E9F | 0x10DE | 0x1071 | 0x15B6 | 0x10DF |
| 0x2EA1 | 0x0000 | 0x10DA | 0x0000 | 0x0000 |
| 0x2EA2 | 0x16E4 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EA3 | 0x0000 | 0x155C | 0x161B | 0x10CC |
| 0x2EA4 | 0x0000 | 0x0000 | 0x0000 | 0x16D3 |
| 0x2EA5 | 0x0000 | 0x155C | 0x161B | 0x10CC |
| 0x2EA6 | 0x16DA | 0x16D9 | 0x16D8 | 0x16D7 |
| 0x2EA8 | 0x1620 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EA9 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EAA | 0x155C | 0x0000 | 0x0000 | 0x0000 |
| 0x2EAB | 0x0000 | 0x0000 | 0x0000 | 0x161A |
| 0x2EAC | 0x16E2 | 0x16E1 | 0x16E3 | 0x16E0 |
| 0x2EB3 | 0x0000 | 0x0000 | 0x16D0 | 0x16CF |
| 0x2EB4 | 0x0000 | 0x0000 | 0x16D1 | 0x16D2 |
| 0x2EC3 | 0x0000 | 0x0000 | 0x1016 | 0x117A |
| 0x2EE0 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2EE2 | 0x1633 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE3 | 0x1634 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE7 | 0x1635 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEA | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2EEB | 0x1634 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEC | 0x1636 | 0x0000 | 0x0000 | 0x1637 |
| 0x2EF4 | 0x1019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EFE | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EFF | 0x10ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2F07 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F08 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F0D | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F10 | 0x0000 | 0x0000 | 0x0000 | 0x1091 |
| 0x2F11 | 0x10F0 | 0x0000 | 0x10DD | 0x10F2 |
| 0x2F13 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F14 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F15 | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F16 | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F2B | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F2C | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F30 | 0x0000 | 0x1637 | 0x0000 | 0x1640 |
| 0x2F31 | 0x0000 | 0x1637 | 0x0000 | 0x1640 |
| 0x2F36 | 0x103D | 0x0000 | 0x0000 | 0x0000 |
| 0x2F37 | 0x103D | 0x0000 | 0x0000 | 0x0000 |
| 0x2F3A | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F3B | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F3E | 0x0000 | 0x0000 | 0x1591 | 0x1590 |
| 0x2F3F | 0x0000 | 0x0000 | 0x1591 | 0x1590 |
| 0x2F49 | 0x10F3 | 0x0000 | 0x10F4 | 0x0000 |
| 0x2F4A | 0x10F5 | 0x10B9 | 0x10F6 | 0x10F7 |
| 0x2F4B | 0x10F5 | 0x10FA | 0x10F9 | 0x10F8 |
| 0x2F4C | 0x0000 | 0x10B9 | 0x10F6 | 0x0000 |
| 0x2F4D | 0x0000 | 0x0000 | 0x0000 | 0x15CA |
| 0x2F4E | 0x0000 | 0x1049 | 0x0000 | 0x0000 |
| 0x2F4F | 0x16E9 | 0x16E8 | 0x16E7 | 0x0000 |
| 0x2F58 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F63 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F64 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F67 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2F6C | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2F71 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F76 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F77 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2F79 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2F7B | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2F7E | 0x15CB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7F | 0x15CC | 0x0000 | 0x0000 | 0x0000 |
| 0x2F81 | 0x0000 | 0x1018 | 0x0000 | 0x0000 |
| 0x2F82 | 0x15CD | 0x0000 | 0x0000 | 0x0000 |
| 0x2F83 | 0x15CE | 0x0000 | 0x0000 | 0x0000 |
| 0x2F84 | 0x14E2 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F85 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2F8F | 0x1638 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F91 | 0x0000 | 0x0000 | 0x0000 | 0x153E |
| 0x2F99 | 0x1067 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F9A | 0x0000 | 0x1639 | 0x163A | 0x163B |
| 0x2F9E | 0x0000 | 0x0000 | 0x10FE | 0x0000 |
| 0x2FA3 | 0x10FF | 0x1100 | 0x0000 | 0x0000 |
| 0x2FA4 | 0x1101 | 0x1102 | 0x0000 | 0x0000 |
| 0x2FC1 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2FC2 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2FC6 | 0x0000 | 0x1103 | 0x1104 | 0x1105 |
| 0x2FC8 | 0x0000 | 0x129B | 0x129A | 0x129A |
| 0x2FC9 | 0x0000 | 0x129B | 0x129A | 0x129A |
| 0x30A0 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A1 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A2 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A3 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A4 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A5 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A6 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A7 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30BA | 0x0000 | 0x12A7 | 0x12A8 | 0x1072 |
| 0x30BB | 0x0000 | 0x12A7 | 0x12A8 | 0x1072 |
| 0x30BC | 0x0000 | 0x12A7 | 0x12A8 | 0x1072 |
| 0x30BD | 0x0000 | 0x12A7 | 0x12A8 | 0x1072 |
| 0x30BE | 0x1589 | 0x1588 | 0x0000 | 0x0000 |
| 0x30CA | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30CB | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30CF | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30D0 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30ED | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30EE | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30EF | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30F0 | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30F1 | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30F2 | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30F3 | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30F4 | 0x158A | 0x0000 | 0x0000 | 0x0000 |
| 0x30FC | 0x12BF | 0x0000 | 0x0000 | 0x0000 |
| 0x30FE | 0x129A | 0x0000 | 0x0000 | 0x0000 |
| 0x30FF | 0x129B | 0x0000 | 0x0000 | 0x0000 |
| 0x3100 | 0x167A | 0x0000 | 0x0000 | 0x0000 |
| 0x3108 | 0x12BF | 0x0000 | 0x0000 | 0x0000 |
| 0x310A | 0x129A | 0x0000 | 0x0000 | 0x0000 |
| 0x310B | 0x129B | 0x0000 | 0x0000 | 0x0000 |
| 0x315F | 0x15F1 | 0x10B9 | 0x124B | 0x0000 |
| 0x3160 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3162 | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x3165 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3166 | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x3167 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3168 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x316A | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x316B | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x316C | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x316D | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x316E | 0x0000 | 0x15DA | 0x124B | 0x0000 |
| 0x316F | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x3171 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3173 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3174 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3175 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x3176 | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x3177 | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x3179 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x317A | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x317B | 0x15D9 | 0x15DA | 0x124B | 0x0000 |
| 0x3180 | 0x0000 | 0x15DB | 0x1468 | 0x1049 |
| 0x3181 | 0x117A | 0x1016 | 0x11F8 | 0x1014 |
| 0x3183 | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x3184 | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x3185 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x3188 | 0x0000 | 0x0000 | 0x0000 | 0x10F1 |
| 0x3189 | 0x0000 | 0x0000 | 0x15DC | 0x1019 |
| 0xCD87 | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCD8B | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCD94 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD98 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9C | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9D | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9F | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA0 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA4 | 0x0000 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA5 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA6 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA7 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA8 | 0x0000 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA9 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAA | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAB | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAD | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAF | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB0 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB9 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDBA | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1000 | mit Kraftstoffabschaltung |
| 0x1001 | Abgasschädigend nach Startvorgang |
| 0x1002 | Abgasschädigend |
| 0x1003 | Verbrennungsaussetzer an mehreren Zylindern |
| 0x1005 | Segmentadaption am  Anschlag |
| 0x1006 | Zahnfehler Kurbelwellengeber |
| 0x1007 | Tankfüllstand zu gering |
| 0x1008 | Gemisch zu mager |
| 0x1009 | Gemisch zu fett |
| 0x100A | Wirkungsgrad unter Schwellwert |
| 0x100B | defekt |
| 0x1014 | Kurzschluss nach Plus |
| 0x1015 | Kurzschluss nach Minus |
| 0x1016 | Leitungsunterbrechung |
| 0x1018 | Signal unplausibel |
| 0x1019 | klemmt offen |
| 0x101B | Leckage grösser 0,5 mm |
| 0x101C | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x101D | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x101F | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x1020 | kurzschluss nach Plus |
| 0x1021 | Funktionstest |
| 0x1022 | Funktionstest Bandende |
| 0x1024 | Füllstandssignalwert zum Verbrauchswert unplausibel |
| 0x1031 | Unterspannung |
| 0x1032 | Überspannung |
| 0x103D | Sensor defekt |
| 0x1048 | schwergängig, klemmt mechanisch |
| 0x1049 | Signal fehlt |
| 0x104A | Synchronisation |
| 0x104B | Zahnfehler |
| 0x104C | Zahnzeitfehler |
| 0x104D | Wert außerhalb Referenzbereich |
| 0x104E | Signal ungültig für Synchronisation |
| 0x104F | Segmentzeit |
| 0x1050 | Zahnsprung |
| 0x1054 | Notabschaltung |
| 0x1055 | Übertemperatur |
| 0x1056 | Drehzahl zu niedrig |
| 0x1057 | Drehzahl zu hoch |
| 0x1058 | Notlauf |
| 0x1059 | Sicherheitsrechner RAM |
| 0x105A | interner RAM-Baustein |
| 0x105B | Datenbereich |
| 0x105C | Applikationssoftware |
| 0x105D | Bootsoftware |
| 0x105F | Timeout SPI Bus |
| 0x1060 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1062 | nicht abgefallen |
| 0x1063 | schaltet zu spät |
| 0x1067 | Temperatur unplausibel |
| 0x1068 | vertauschte Lambdasonden vor Katalysator |
| 0x1069 | Signal während Schubabschaltung unterhalb Schwelle |
| 0x106A | Abgas nach Katalysator zu mager |
| 0x106B | Abgas nach Katalysator zu fett |
| 0x106C | Signalamplitude zu gering |
| 0x106D | Sonde nicht angesteckt |
| 0x106F | Unterbrechung Nernstleitung |
| 0x1070 | Unterbrechung Pumpstrompfad oder virtuelle Masse |
| 0x1071 | Kommunikationsfehler |
| 0x1072 | Initialisierungsfehler |
| 0x1073 | vertauschte Lambdasonden nach Katalysator |
| 0x1074 | Signal magerer als erwartet |
| 0x1075 | Signal fetter als erwartet |
| 0x1076 | Sondensignal zu träge |
| 0x1077 | Signal während Schubabschaltung  oberhalb Schwelle |
| 0x1078 | Sondentemperaturmessung im Steuergerät fehlgeschlagen |
| 0x1079 | Betriebsbereitschaft Sonde zu spät erreicht |
| 0x107A | Innenwiderstand des Signalkreises zu hochohmig |
| 0x1081 | Kurzschluss nach Minus oder Leitungsunterbrechung |
| 0x1082 | unteren Anschlag lernen während Urinitialisierung abgebrochen |
| 0x1083 | Randbedingungen verletzt |
| 0x1085 | Notluftpunkt nicht adaptiert |
| 0x1086 | Notluftprüfung |
| 0x1087 | Federtest |
| 0x1089 | Messwert HFM zu hoch |
| 0x108A | Messwert HFM zu niedrig |
| 0x108C | Luftzufuhr nicht korrekt |
| 0x1090 | Signal oberhalb Schwelle |
| 0x1091 | elektrisch |
| 0x1092 | Spannungsregler 1 |
| 0x1093 | Spannungsregler 2 |
| 0x1094 | Doppelfehler |
| 0x1095 | Gleichlauffehler |
| 0x1099 | LDM Überwachung |
| 0x109A | ACC Überwachung |
| 0x109D | Anforderung PD-Anteil unplausibel |
| 0x109E | Anforderung I-Anteil unplausibel |
| 0x109F | Anforderung EGS unplausibel |
| 0x10A1 | Anforderung MSR unplausibel |
| 0x10A3 | minimales Kupplungsmoment unplausibel |
| 0x10A4 | Verlustmoment unplausibel |
| 0x10A5 | maximales Kupplungsmoment unplausibel |
| 0x10AA | Hauptrechnerüberwachung; Befehlssatztestfehler |
| 0x10AB | Rechnerüberwachung, allgemeiner Sammelfehler |
| 0x10AC | RAM-Fehler |
| 0x10AD | ROM-Fehler |
| 0x10B0 | reversibel aus |
| 0x10B1 | irreversibel aus |
| 0x10B2 | Momentenanforderung unplausibel |
| 0x10B3 | Momentenanforderung trotzt Bremssignal |
| 0x10B4 | CAS-Fehler |
| 0x10B9 | Timeout |
| 0x10BA | CAN Wert unplausibel |
| 0x10BB | batterieloser Betrieb |
| 0x10BC | Powermanagement |
| 0x10BD | Tiefentladung |
| 0x10BE | Ruhestromverletzung |
| 0x10C6 | Motor mechanisch zu leise |
| 0x10C8 | Motor mechanisch zu laut |
| 0x10C9 | Spannungsversorgung fehlt |
| 0x10CA | Drehzahl außerhalb der Toleranz |
| 0x10CB | Überstrom |
| 0x10CC | interne Temperatur zu hoch |
| 0x10CD | Temperaturschwelle 2 überschritten |
| 0x10CE | Trockenlauf |
| 0x10CF | Temperaturschwelle 1 überschritten |
| 0x10D0 | keine Spannung am Notlauf-Eingang der Pumpe |
| 0x10D1 | Software-Fehler |
| 0x10D2 | BSD-Fehler |
| 0x10D3 | EBSD-Fehler |
| 0x10D4 | Strom |
| 0x10D5 | Temperatur |
| 0x10D6 | Spannung |
| 0x10D7 | Wakeupleitung Pegel unplausibel |
| 0x10D8 | Systemfehler |
| 0x10D9 | Wakeupleitung Masseschluss |
| 0x10DA | keine Kommunikation über BSD-Schnittstelle |
| 0x10DD | mechanisch |
| 0x10DE | Permittivitätsmessung |
| 0x10DF | Temperaturmessung |
| 0x10E4 | elektrisch berechnet |
| 0x10E5 | Übertemperatur berechnet |
| 0x10E6 | Reglertyp nicht plausibel |
| 0x10E7 | Generatortyp nicht plausibel |
| 0x10E9 | Temperatursignal konstant |
| 0x10EA | Temperaturgradient zu steil |
| 0x10EB | Signal festliegend hoch |
| 0x10EC | Temperaturgradient zu hoch |
| 0x10ED | Mechanischer- oder Hardwaredefekt |
| 0x10EE | Signal unterhalb Schwelle |
| 0x10F0 | keine Kommunikation |
| 0x10F1 | mechanischer Fehler |
| 0x10F2 | Hardwaredefekt |
| 0x10F3 | erwartete Antwort unplausible |
| 0x10F4 | kein Startwert programmiert |
| 0x10F5 | Checksum |
| 0x10F6 | Framefehler |
| 0x10F7 | Hardwarefehler |
| 0x10F8 | keine verfügbare Speichermöglichkeit |
| 0x10F9 | Fehlerfreischaltcodeablage |
| 0x10FA | Startwert zerstört/ 2- aus 3-Auswahl fehlgeschlagen |
| 0x10FC | Pedalwert zu Bremspedal |
| 0x10FD | Signalfehler |
| 0x10FE | Oelniveau zu niedrig |
| 0x10FF | keine Codierung erfolgt (nach Programmierung) |
| 0x1100 | Codierdaten im EEPROM fehlerhaft |
| 0x1101 | Variantenüberwachung |
| 0x1102 | CAN Timeout |
| 0x1103 | Werkstattmodus |
| 0x1104 | Transportmodus |
| 0x1105 | Fertigungsmodus |
| 0x110F | CAN Bus off |
| 0x1111 | Prüfsumme ungleich errechnetem Wert |
| 0x1112 | Aktualisierungszähler inkrementiert nicht (Alive-Zähler) |
| 0x1118 | Fehlfunktion |
| 0x117A | Kurzschluss |
| 0x11BD | Keine Kommunikation über BSD-Schnittstelle |
| 0x11C2 | unplausibel |
| 0x11F8 | Kurzschluss nach Masse |
| 0x124B | Aliveprüfung |
| 0x1276 | Druck zu niedrig im Hochdruck-System |
| 0x1277 | Druck zu niedrig im Niederdruck-System |
| 0x128A | Gemisch zu fett (große Abweichung) |
| 0x128B | Gemisch zu mager (große Abweichung) |
| 0x128C | untere Schwelle1 erreicht |
| 0x128D | obere Schwelle2 erreicht |
| 0x128E | obere Schwelle1 erreicht |
| 0x1296 | Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x1297 | Leitungsunterbrechung bei aufgeladenem Injektor |
| 0x129A | Druck zu hoch |
| 0x129B | Druck zu niedrig |
| 0x12A3 | Kurzschluss Niederspannungsseite nach Minus |
| 0x12A4 | Kurzschluss Hochspannungsseite nach Minus |
| 0x12A5 | Kurzschluss Hochspannungsseite nach Plus |
| 0x12A6 | Kurzschluss Niederspannungsseite nach Plus |
| 0x12A7 | Entladungsfehler |
| 0x12A8 | Verbindungsfehler |
| 0x12AC | Kurzschluss nach minus |
| 0x12BF | Ladedruck zu niedrig |
| 0x12C0 | Ladedruck zu hoch |
| 0x12CD | Sondensignal zu träge nach Schubphase |
| 0x12E6 | überdrehzahl |
| 0x12E7 | Einspritzung wird verboten |
| 0x12E9 | Brenndauer zu kurz |
| 0x132A | Innenwiderstand zu hoch |
| 0x1345 | Summenfehler |
| 0x137D | Zeitüberschreitung |
| 0x13AA | Signal zu hoch |
| 0x13C0 | Poti unplausibel zu MAF |
| 0x144E | Signal zu niedrig |
| 0x1468 | Druck unplausibel |
| 0x148C | langfristige Adaption zu hoch |
| 0x14D1 | Betriebstemperatur nicht erreicht |
| 0x14E2 | Signal im Nachlauf unplausibel |
| 0x153B | Grenzwert überschritten |
| 0x153C | Grenzwert unterschritten |
| 0x153E | Leerlaufdrehzahl zu lange zu hoch |
| 0x154E | obere Soll-Position nicht erreicht |
| 0x1552 | Kurzschluss nach Minus  oder Leitungsunterbrechung |
| 0x1555 | Hardware Reset |
| 0x1556 | Power On Reset |
| 0x1557 | Geplanter Software Reset |
| 0x1558 | unerwünschter Software Reset |
| 0x1559 | nicht angezogen |
| 0x155A | Gradient zu hoch oder Sprung |
| 0x155B | Offset zu hoch |
| 0x155C | Pumpe blockiert |
| 0x155D | unterer Grenzwert unterschritten |
| 0x155E | oberer Grenzwert überschritten |
| 0x1570 | Maximaldruck überschritten |
| 0x1571 | Minimaldruck unterschritten |
| 0x1572 | Drosselklappenpotentiometer 1/2 Gleichlauf (Bank 1) - Korrelationsfehler |
| 0x1573 | Drosselklappenpotentiometer 1/2 Gleichlauf (Bank 2) - Korrelationsfehler |
| 0x1574 | unterer Anschlag nicht erreicht |
| 0x1575 | Fehler obere Rückstellfeder |
| 0x1577 | Drosselklappe (Bank 1) - schwergängig |
| 0x1578 | Drosselklappe (Bank 2) - schwergängig |
| 0x1579 | Drosselklappensteller Stellmotor 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x157A | Drosselklappensteller Stellmotor 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x1580 | Drosselklappen Lageregelung (Bank 2) - klemmt |
| 0x1582 | Anforderung ICM unplausibel |
| 0x1587 | Zeitüberschreitung oder Ungültigkeitswert |
| 0x1588 | Energie-Normalwert |
| 0x1589 | Kleinmengen-Normalwert |
| 0x158A | Einspritzung wird abgeschaltet |
| 0x158B | Ladedruckaufbau gesperrt |
| 0x158F | interner Fehler |
| 0x1590 | Periodendauer zu groß |
| 0x1591 | Periodendauer zu niedrig |
| 0x15A2 | Kurzschluss nach Masse oder Leitungsunterbrechung |
| 0x15A3 | Abbruch wegen Stromschwankungen bei Referenzmessung |
| 0x15A4 | Förderleistungsregelung außerhalb gültigem Bereich |
| 0x15A5 | minimale Förderleistung außerhalb Grenzwert wegen Alterung |
| 0x15A6 | Förderleistung außerhalb Grenzwert wegen Alterung |
| 0x15A7 | Kraftstoffmasse außerhalb Grenzwert |
| 0x15A8 | berechnete Kraftstoffmasse ungültig |
| 0x15A9 | Periodendauer zu niedrig, Luftmasse zu hoch |
| 0x15AA | Periodendauer zu groß, Luftmasse zu gering |
| 0x15AB | Adaption über gültigem Bereich |
| 0x15AC | Adaption unter gültigem Bereich |
| 0x15AD | Adaptionen nicht mehr möglich |
| 0x15AF | Kurzschluss  nach Masse oder Leitungsunterbrechung |
| 0x15B0 | Kleinmengen-Normalwerrt |
| 0x15B6 | Niveaumessung |
| 0x15B8 | Fehler untere Rückstellfeder |
| 0x15B9 | Drosselklappen Lageregelung (Bank 1) - klemmt |
| 0x15C0 | zu niedrig |
| 0x15C9 | NVMY-Überprüfung |
| 0x15CA | EWS nicht freigeschalten |
| 0x15CB | Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CC | Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CD | Signal nach Nachlauf unplausibel |
| 0x15CE | Signal im Motorlauf unplausibel |
| 0x15CF | Massenstrom zu hoch |
| 0x15D0 | nicht regelbar |
| 0x15D3 | Getriebeöltemperatur zu hoch |
| 0x15D4 | Zündwinkel zu früh |
| 0x15D9 | Prüfsumme falsch |
| 0x15DA | fehlt |
| 0x15DB | Kommunikation Framefehler |
| 0x15DC | klemmt geschlossen |
| 0x15DD | Ungültige Botschaft |
| 0x15DE | Timeout fehlt |
| 0x15F1 | Prüfsumme  |
| 0x1602 | langsame Reaktion |
| 0x1605 | vertauscht |
| 0x1606 | Signal festliegend auf Mager |
| 0x1607 | Signal festliegend auf Fett |
| 0x1608 | Signal außerhalb Grenzwert |
| 0x1609 | Unterbrechung virtuelle Masse oder Pumpstromleitung |
| 0x160A | verzögerte Reaktion |
| 0x160B | Betriebstemperatur im Warmlauf nicht erreicht |
| 0x160C | schwergängig, zu langsam |
| 0x160D | Signal unplausibel zur Luftmasse |
| 0x160E | Randbedingungen nicht erfüllt |
| 0x160F | Notluftposition nicht adaptiert |
| 0x1611 | Erstadaption, unterer Anschlag nicht gelernt |
| 0x1612 | Prüfung Notluftposition |
| 0x1615 | Gleichlauffehler zwischen Poti 1 und Poti 2 |
| 0x1618 | obere Sollposition nicht erreicht |
| 0x1619 | klemmt |
| 0x161A | außerhalb der Toleranz |
| 0x161B | Überspannung erkannt |
| 0x161C | Trockenlauf erkannt |
| 0x161D | Unterspannung erkannt |
| 0x161E | Temperaturgrenze 1 überschritten |
| 0x161F | Temperaturgrenze 2 überschritten |
| 0x1620 | keine Spannung |
| 0x1622 | langsame Reaktion  |
| 0x1623 | Sende-Überwachung CAN-Botschaft unplausibel |
| 0x1624 | Sende-Überwachung Sollmoment unplausibel |
| 0x1625 | Überwachung externer Momentenanforderung HCP unplausibel |
| 0x1626 | Sende-Überwachung aktuelles Moment unplausibel |
| 0x1627 | Prozessor-Fehler |
| 0x1628 | Hauptprozessor-Fehler |
| 0x162B | Wirkungsgrad unterhalb Grenzwert |
| 0x162C | abgasschädigend |
| 0x162D | abgasschädigend nach Startvorgang |
| 0x162E | Leckage größer 0,5 mm |
| 0x162F | Sonde nicht korrekt montiert in Abgasanlage |
| 0x1630 | Spannungsversorgung Pedalwertgeber 1 |
| 0x1631 | Spannungsversorgung Pedalwertgeber 2 |
| 0x1632 | Gleichlauffehler zwischen Pedalwertgeber 1 und Pedalwertgeber 2 |
| 0x1633 | festliegend auf niedrig |
| 0x1634 | zu schnell |
| 0x1635 | festliegend auf hoch |
| 0x1636 | Signal, festliegend |
| 0x1637 | Plausibilität, Kaltstart, Temperatur zu hoch |
| 0x1638 | Pedalwerte zueinander unplausibel |
| 0x1639 | Signal, CAN-Botschaft fehlerhaft |
| 0x163A | elektrisch, Kurzschluss nach Masse |
| 0x163B | elektrisch, Kurzschluss nach Plus |
| 0x163C | Drosselklappenwinkel unplausibel |
| 0x163D | Plausibilität, Temperatur zu hoch |
| 0x163E | Plausibilität, Temperatur zu niedrig |
| 0x163F | Luftmasse zu hoch |
| 0x1640 | Signaländerung, zu schnell |
| 0x1647 | Messung im Steuergerät fehlgeschlagen |
| 0x1648 | Luftmasse zu niedrig |
| 0x1649 | Luftmasse zu Kraftstoffmasse unplausibel |
| 0x1673 | Gemisch zu fett, große Abweichung |
| 0x1674 | Gemisch zu mager, große Abweichung |
| 0x167A | Druckaufbau gesperrt |
| 0x167F | Druck zu niedrig im Hochdrucksystem |
| 0x1680 | Druck zu niedrig im Niederdrucksystem |
| 0x16CF | Kommunikation mit Kühlmittelpumpe fehlt |
| 0x16D0 | Kommunikation mit Kühlmittelpumpe fehlerhaft |
| 0x16D1 | Kommunikation mit Kühlmittelpumpe 2 fehlerhaft |
| 0x16D2 | Kommunikation mit Kühlmittelpumpe 2 fehlt |
| 0x16D3 | Drehzahl Kühlmittelpumpe außerhalb der Toleranz |
| 0x16D7 | Kühlmittelverlust durch Kühlmittelpumpe erkannt |
| 0x16D8 | Versorgungsspannung Kühlmittelpumpe zu niedrig |
| 0x16D9 | Kühlmittelpumpe Temperaturschwelle 1 überschritten |
| 0x16DA | Kühlmittelpumpe Temperaturschwelle 2 überschritten |
| 0x16DB | kein Notlaufsignal an Kühlmittelpumpe |
| 0x16DC | Drehzahl Kühlmittelpumpe 2 außerhalb der Toleranz |
| 0x16E0 | Kühlmittelverlust durch Kühlmittelpumpe 2 erkannt |
| 0x16E1 | Kühlmittelpumpe 2 Temperaturschwelle 1 überschritten |
| 0x16E2 | Kühlmittelpumpe 2 Temperaturschwelle 2 überschritten |
| 0x16E3 | Versorgungsspannung Kühlmittelpumpe 2 zu niedrig |
| 0x16E4 | kein Notlaufsignal an Kühlmittelpumpe 2 |
| 0x16E7 | Signal vom Hybrid-Getriebe unplausibel |
| 0x16E8 | Signal vom Raddrehzahlsensor unplausibel |
| 0x16E9 | CAN-Signal vom DSC unplausibel |
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
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | °C | TIA | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| IPSAU | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck | hPa | MAP_MES | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IMLUF | 0x4206 | STAT_LUFTMASSE_WERT | Rohwert Luftmassenstrom vom HFM Bank 1 | kg/h | MAF_KGH_MES_BAS[1] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| IMLU2 | 0x4207 | STAT_LUFTMASSE_2_WERT | Rohwert Luftmassenstrom vom HFM Bank 2 | kg/h | MAF_KGH_MES_BAS[2] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| STAT_0x4208_WERT | 0x4208 | STAT_0x4208_WERT | Luftmassenstrom vom HFM Bank 1 | kg/h | MAF_KGH_MES[1] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| STAT_0x4209_WERT | 0x4209 | STAT_0x4209_WERT | Luftmassenstrom vom HFM Bank 2 | kg/h | MAF_KGH_MES[2] | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | °C | TCO | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x4301_WERT | 0x4301 | STAT_0x4301_WERT | Kühlerauslasstemperatur | °C | TCO_2 | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x4307_WERT | 0x4307 | STAT_0x4307_WERT | Betriebsart Wasserpumpe | 0-n | BA_WM_IST | - | unsigned char | _CNV_S_12__CNV_S_12__705 | 1 | 1 | 0 |
| STAT_0x4310_WERT | 0x4310 | STAT_0x4310_WERT | Wasserpumpe Leistung, relativ CWP_2_1 | % | REL_CWP_2_1_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4311_WERT | 0x4311 | STAT_0x4311_WERT | Wasserpumpe Leistung, relativ CWP_2_2 | % | REL_CWP_2_2_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4312_WERT | 0x4312 | STAT_0x4312_WERT | Wasserpumpe Elektronik Temperatur, CWP_2_1 | °C | TEMP_EL_CWP_2_1 | - | unsigned char | - | 1,0 | 1 | -50,0 |
| STAT_0x4313_WERT | 0x4313 | STAT_0x4313_WERT | Wasserpumpe Elektronik Temperatur, CWP_2_2 | °C | TEMP_EL_CWP_2_2 | - | unsigned char | - | 1,0 | 1 | -50,0 |
| STAT_0x4314_WERT | 0x4314 | STAT_0x4314_WERT | Wasserpumpe Stromaufnahme, CWP_2_1 | A | CUR_CNS_CWP_2_1 | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| STAT_0x4315_WERT | 0x4315 | STAT_0x4315_WERT | Wasserpumpe Stromaufnahme, CWP_2_2 | A | CUR_CNS_CWP_2_2 | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| INWAP | 0x4316 | STAT_WASSERPUMPE_DREHZAHL_WERT | Wasserpumpe Ist-Drehzahl, CWP_2_1 | - | N_REL_CWP_2_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INWA2 | 0x4317 | STAT_WASSERPUMPE2_DREHZAHL_WERT | Wasserpumpe Ist-Drehzahl, CWP_2_2 | - | N_REL_CWP_2_2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SNWAP | 0x4318 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Wasserpumpe Soll-Drehzahl, CWP_2_1 | - | N_REL_CWP_SP_2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SNWA2 | 0x4319 | STAT_WASSERPUMPE2_DREHZAHL_SOLL_WERT | Wasserpumpe Soll-Drehzahl, CWP_2_2 | - | N_REL_CWP_SP_2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x431A_WERT | 0x431A | STAT_0x431A_WERT | Wasserpumpe Spannung; CWP_2_1 | V | V_CWP_2_1 | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x431B_WERT | 0x431B | STAT_0x431B_WERT | Wasserpumpe Spannung; CWP_2_2 | V | V_CWP_2_2 | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x431C_WERT | 0x431C | STAT_0x431C_WERT | Wasserpumpe Drehzahl Soll-Ist-Differenz, CWP_2_1 | - | N_REL_CWP_2_1_DIF | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x431D_WERT | 0x431D | STAT_0x431D_WERT | Wasserpumpe Drehzahl Soll-Ist-Differenz, CWP_2_2 | - | N_REL_CWP_2_2_DIF | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | ° C | TOEL | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | - | OZ_KVBSM_UL | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | km | OZ_OELKM | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Ölsensor Niveau Rohwert | - | OZ_NIVR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Ölsensor Qualität Rohwert | - | OZ_PERMR | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Ölsensor Temperatur Rohwert | - | OZ_TEMPR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Ölsensor Temperatur | ° C | OZ_TEMPAKT | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölsensor Niveau | mm | OZ_NIVAKT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Ölsensor Qualität | - | OZ_PERMAKT | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | - | OZ_LF1C | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | - | OZ_LF2C | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | OZ_LF1T | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | OZ_LF2T | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | mm | OZ_NIVKRZT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | km | OZ_RWKVB | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | - | OZ_OELZEIT | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4416_WERT | 0x4416 | STAT_0x4416_WERT | zugeteilte Bonuskraftstoffmenge | - | OZ_KVBOG | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4418_WERT | 0x4418 | STAT_0x4418_WERT | Status Peilstabanzeige | - | OZ_LV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x441E_WERT | 0x441E | STAT_0x441E_WERT | Kurzzeitmittelwert | mm | OZ_KRZOR | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x441F_WERT | 0x441F | STAT_0x441F_WERT | Vormittelwert | mm | OZ_VORMW | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4421_WERT | 0x4421 | STAT_0x4421_WERT | Orientierungswert Counter | - | OZ_ORICNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4422_WERT | 0x4422 | STAT_0x4422_WERT | Vormittelwert Counter | - | OZ_VORMWCNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4423_WERT | 0x4423 | STAT_0x4423_WERT | Kurzzeitmittelwert Counter | - | OZ_KRZCNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4424_WERT | 0x4424 | STAT_0x4424_WERT | Langzeitmittelwert Counter | - | OZ_LGMWCNT | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x442A_WERT | 0x442A | STAT_0x442A_WERT | DME initialisiert | 0/1 | B_DMEINI | - | unsigned char | - | 1 | 1 | 0 |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Nockenwellenposition Einlass | °CRK | PSN_CAM_IN_1 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Nockenwellenposition Auslass | °CRK | PSN_CAM_EX_1 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung Bank 1 | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| STAT_0x450C_WERT | 0x450C | STAT_0x450C_WERT | VANOS PWM Wert Einlass Bank 1 | % | IVVTPWM_IN[0] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x450D_WERT | 0x450D | STAT_0x450D_WERT | VANOS PWM Wert Einlass Bank 2 | % | IVVTPWM_IN[1] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x450E_WERT | 0x450E | STAT_0x450E_WERT | VANOS PWM Wert Auslass Bank 1 | % | IVVTPWM_EX[0] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x450F_WERT | 0x450F | STAT_0x450F_WERT | VANOS PWM Wert Auslass Bank 2 | % | IVVTPWM_EX[1] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4510_WERT | 0x4510 | STAT_0x4510_WERT | Istwert Einlassspreizung Bank 1 | °CRK | CAM_IN_H[1] | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4511_WERT | 0x4511 | STAT_0x4511_WERT | Istwert Einlassspreizung Bank 2 | °CRK | CAM_IN_H[2] | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4512_WERT | 0x4512 | STAT_0x4512_WERT | Istwert Auslassspreizung Bank 2 | °CRK | CAM_EX[2] | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| STAT_0x4513_WERT | 0x4513 | STAT_0x4513_WERT | Sollwert Einlassspreitzung Bank1  | °CRK | CAM_SP_IVVT_IN | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4514_WERT | 0x4514 | STAT_0x4514_WERT | Sollwert Einlassspreitzung Bank2  | °CRK | CAM_SP_IVVT_IN | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4515_WERT | 0x4515 | STAT_0x4515_WERT | Sollwert Auslassspreitzung Bank1 | °CRK | CAM_SP_IVVT_EX | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4516_WERT | 0x4516 | STAT_0x4516_WERT | Sollwert Auslassspreitzung Bank2 | °CRK | CAM_SP_IVVT_EX | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4517_WERT | 0x4517 | STAT_0x4517_WERT | Normspreitzung Einlass Bank 1 | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4518_WERT | 0x4518 | STAT_0x4518_WERT | Normspreitzung Einlass Bank 2 | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4519_WERT | 0x4519 | STAT_0x4519_WERT | Normspreitzung Einlass Bank 1 | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x451A_WERT | 0x451A | STAT_0x451A_WERT | Normspreitzung Einlass Bank 2 | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x451B_WERT | 0x451B | STAT_0x451B_WERT | Nockenwellenposition Einlass Bank 2 | °CRK | PSN_CAM_IN_2 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| STAT_0x451C_WERT | 0x451C | STAT_0x451C_WERT | Nockenwellenposition Auslass Bank 2 | °CRK | PSN_CAM_EX_2 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| STAT_0x451D_WERT | 0x451D | STAT_0x451D_WERT | Adaptionswert Nockenwelle Auslass Bank 2 | °CRK | PSN_AD_CAM_EX_2 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| STAT_0x451E_WERT | 0x451E | STAT_0x451E_WERT | Adaptionswert Nockenwelle Einlass Bank 2 | °CRK | PSN_AD_CAM_IN_2 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | V | VB | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | Batteriespannung aktuell | V | UBT | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | V | VB_BAS | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | - | ABSCH_KORR | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x460E_WERT | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeitsgrenze | - | D_SOC | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | % | LOAD_BAT | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | % | N_PERC_ECF | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | LV_IPLSL_VLD[1] | - | unsigned char | - | 1 | 1 | 0 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | LV_IPLSL_VLD[2] | - | unsigned char | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | VLS_UP_COR[1] | - | unsigned integer | - | 4,861343768425286E-4 | 1 | 0,0 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | VLS_UP_COR[2] | - | unsigned integer | - | 4,861343768425286E-4 | 1 | 0,0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank 1 | - | LAMB_BAS[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank 2 | - | LAMB_BAS[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| STAT_0x4706_WERT | 0x4706 | STAT_0x4706_WERT | STATUS-BIT MSV-Relais | 0/1 | LV_RLY_VCV | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4707_WERT | 0x4707 | STAT_0x4707_WERT | PWM-Signal Umluftventil 1 | % | RFPPWM[1] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4708_WERT | 0x4708 | STAT_0x4708_WERT | PWM-Signal Umluftventil 2 | % | RFPPWM[2] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x4709_WERT | 0x4709 | STAT_0x4709_WERT | Lernvariante Hochdruckpumpenrelais | 0/1 | LV_RLY_HPDI | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x470A_WERT | 0x470A | STAT_0x470A_WERT | Versorgungsspannung Einspritzung /Zündung (HDPI-Relais) | V | VB_RLY_HPDI | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Kupplungsschalter Status | 0/1 | LV_CS | - | unsigned char | - | 1 | 1 | 0 |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Kupplungsschalter vorhanden | 0/1 | LV_CS_CUS | - | unsigned char | - | 1 | 1 | 0 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Sporttaster aktiv | 0/1 | LV_SOF_SWI | - | unsigned char | - | 1 | 1 | 0 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Status Klima ein | - | STATE_ACIN_CAN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Startrelais über CAN aktiv | 0/1 | LV_RLY_ST_CAN | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4806_WERT | 0x4806 | STAT_0x4806_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motor Drehzahl | rpm | N | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlauf Solldrehzahl | rpm | N_SP_IS | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Status LL | 0/1 | LV_IS | - | unsigned char | - | 1 | 1 | 0 |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Kilometerstand Auflösung 1 km | km | CTR_KM_BN | - | unsigned long | - | 1,0 | 1 | 0,0 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Pedalwert Fahrerwunsch in % | % | PV_AV | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x480C_WERT | 0x480C | STAT_0x480C_WERT | Spannung Ansauglufttemperatur 1 | V | VP_TIA[1] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| STAT_0x480D_WERT | 0x480D | STAT_0x480D_WERT | Spannung Ansauglufttemperatur 2 | V | VP_TIA[2] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| STAT_0x480E_WERT | 0x480E | STAT_0x480E_WERT | Rohwert Ansauglufttemperatur 1 | °C | TIA_MES[1] | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x480F_WERT | 0x480F | STAT_0x480F_WERT | Rohwert Ansauglufttemperatur 2 | °C | TIA_MES[2] | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x4814_WERT | 0x4814 | STAT_0x4814_WERT | Druck vor Drosselklappe Bank 1 | hPa | PVDKDS_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4815_WERT | 0x4815 | STAT_0x4815_WERT | Druck nach Drosselklappe Bank 1 | hPa | PS_IST_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4816_WERT | 0x4816 | STAT_0x4816_WERT | Temperatur vor Drosselklappe Bank 1 | °C | TANS_I | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4817_WERT | 0x4817 | STAT_0x4817_WERT | Druck vor Drosselklappe Bank 2 | hPa | PVDKDS_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4818_WERT | 0x4818 | STAT_0x4818_WERT | Druck nach Drosselklappe Bank 2 | hPa | PS_IST_I | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| STAT_0x4819_WERT | 0x4819 | STAT_0x4819_WERT | Temperatur vor Drosselklappe Bank 2 | °C | TANS_I | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x481A_WERT | 0x481A | STAT_0x481A_WERT | Raildruck Bank 1 | hPa | FUP_H_MPL[0] | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| STAT_0x481B_WERT | 0x481B | STAT_0x481B_WERT | Raildruck Bank 2 | hPa | FUP_H_MPL[1] | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| STAT_0x481C_WERT | 0x481C | STAT_0x481C_WERT | ADC-Wert1 Drosselklappe Bank 1 | V | VP_TPS_1[1] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| STAT_0x481D_WERT | 0x481D | STAT_0x481D_WERT | ADC-Wert2 Drosselklappe Bank 1 | V | VP_TPS_2[1] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| STAT_0x481E_WERT | 0x481E | STAT_0x481E_WERT | ADC-Wert1 Drosselklappe Bank 2 | V | VP_TPS_1[2] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| STAT_0x481F_WERT | 0x481F | STAT_0x481F_WERT | ADC-Wert2 Drosselklappe Bank 2 | V | VP_TPS_2[2] | - | signed integer | - | 1,52587890625E-4 | 1 | 2,220446016163089E-15 |
| STAT_0x4820_WERT | 0x4820 | STAT_0x4820_WERT | Drosselklappenwinkel Bank 1 | °TPS | TPS_AV[1] | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x4821_WERT | 0x4821 | STAT_0x4821_WERT | Drosselklappenwinkel Bank 2 | °TPS | TPS_AV[2] | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x4822_WERT | 0x4822 | STAT_0x4822_WERT | Drosselklappe Sollwert Bank 1 | °TPS | TPS_SP_MDL[1] | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x4823_WERT | 0x4823 | STAT_0x4823_WERT | Drosselklappe Sollwert Bank 2 | °TPS | TPS_SP_MDL[2] | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x4828_WERT | 0x4828 | STAT_0x4828_WERT | Status Abgasklappe 1 | 0/1 | LV_EF | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x482C_WERT | 0x482C | STAT_0x482C_WERT | Drosselklappe Sollwert Bank 1 | °TPS | TPS_SP[1] | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x482D_WERT | 0x482D | STAT_0x482D_WERT | Drosselklappe Sollwert Bank 2 | °TPS | TPS_SP[2] | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x482E_WERT | 0x482E | STAT_0x482E_WERT | Status Wasserpumpe Lagerstuhlkuehlung | 0/1 | LV_PWL_CWP | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4830_WERT | 0x4830 | STAT_0x4830_WERT | L2R Dynamik-Diagnose HK - Zähler für abgeschlossene Diagnose-Durchläufe Bank1 | - | CTR_NR_DIAG_PUE_LS_DOWN[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4831_WERT | 0x4831 | STAT_0x4831_WERT | L2R Dynamik-Diagnose HK - Zähler für abgeschlossene Diagnose-Durchläufe Bank2 | - | CTR_NR_DIAG_PUE_LS_DOWN[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4832_WERT | 0x4832 | STAT_0x4832_WERT | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse Bank1 | mV/s | VLS_DOWN_PUE_MMV[1] | - | signed integer | - | 2,0 | 1 | 0,0 |
| STAT_0x4833_WERT | 0x4833 | STAT_0x4833_WERT | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse Bank2 | mV/s | VLS_DOWN_PUE_MMV[2] | - | signed integer | - | 2,0 | 1 | 0,0 |
| STAT_0x4834_WERT | 0x4834 | STAT_0x4834_WERT | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse Bank1 | mV/s | VLS_DOWN_PUE_SAVE_MAX[1] | - | signed integer | - | 2,0 | 1 | 0,0 |
| STAT_0x4835_WERT | 0x4835 | STAT_0x4835_WERT | L2R Dynamik-Diagnose HK - Gleitender Mittelwert der Diagnose-Ergebnisse | mV/s | VLS_DOWN_PUE_SAVE_MAX[2] | - | signed integer | - | 2,0 | 1 | 0,0 |
| STAT_0x4836_WERT | 0x4836 | STAT_0x4836_WERT | L2R Dynamik-Diagnose HK - Max-Ergebnis aller Fahrzyklen | mV/s | VLS_DOWN_PUE_SAVE_MIN[1] | - | signed integer | - | 2,0 | 1 | 0,0 |
| STAT_0x4837_WERT | 0x4837 | STAT_0x4837_WERT | L2R Dynamik-Diagnose HK - Max-Ergebnis aller Fahrzyklen | mV/s | VLS_DOWN_PUE_SAVE_MIN[2] | - | signed integer | - | 2,0 | 1 | 0,0 |
| STAT_0x4838_WERT | 0x4838 | STAT_0x4838_WERT | L2R Dynamik-Diagnose HK - Min-Ergebnis aller Fahrzyklen Bank1 | (V/s)² | VLS_DOWN_PUE_STD[1] | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| STAT_0x4839_WERT | 0x4839 | STAT_0x4839_WERT | L2R Dynamik-Diagnose HK - Min-Ergebnis aller Fahrzyklen Bank2 | (V/s)² | VLS_DOWN_PUE_STD[2] | - | unsigned long | - | 1,2799999967683107E-4 | 1 | 0,0 |
| STAT_0x4840_WERT | 0x4840 | STAT_0x4840_WERT | berechneter Hochdrucksollwert, Bank 1 | hPa | FUP_SP_MPL[0] | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| STAT_0x4841_WERT | 0x4841 | STAT_0x4841_WERT | berechneter Hochdrucksollwert, Bank 2 | hPa | FUP_SP_MPL[1] | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| STAT_0x4842_WERT | 0x4842 | STAT_0x4842_WERT | Drehzahl Kraftsstoffpumpe | rpm | N_EFP_AV | - | unsigned char | - | 50,0 | 1 | 0,0 |
| STAT_0x4813_WERT | 0x4843 | STAT_0x4813_WERT | Hochdruckreglerwert Ausgang, Bank 1 | MPa | PRDR_W_RB[0] | - | signed integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x4844_WERT | 0x4844 | STAT_0x4844_WERT | Hochdruckreglerwert Ausgang, Bank 2 | MPa | PRDR_W_RB[1] | - | signed integer | - | 5,000000237487257E-4 | 1 | 0,0 |
| STAT_0x4850_WERT | 0x4850 | STAT_0x4850_WERT | Zaehler Zuendaussetzerkennung Zylinder 1 | - | CTR_MIS_DET_CYL[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4851_WERT | 0x4851 | STAT_0x4851_WERT | Zaehler Zuendaussetzerkennung Zylinder 5 | - | CTR_MIS_DET_CYL[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4852_WERT | 0x4852 | STAT_0x4852_WERT | Zaehler Zuendaussetzerkennung Zylinder 4 | - | CTR_MIS_DET_CYL[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4853_WERT | 0x4853 | STAT_0x4853_WERT | Zaehler Zuendaussetzerkennung Zylinder 8 | - | CTR_MIS_DET_CYL[3] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4854_WERT | 0x4854 | STAT_0x4854_WERT | Zaehler Zuendaussetzerkennung Zylinder 6 | - | CTR_MIS_DET_CYL[4] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4855_WERT | 0x4855 | STAT_0x4855_WERT | Zaehler Zuendaussetzerkennung Zylinder 3 | - | CTR_MIS_DET_CYL[5] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4856_WERT | 0x4856 | STAT_0x4856_WERT | Zaehler Zuendaussetzerkennung Zylinder 7 | - | CTR_MIS_DET_CYL[6] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4857_WERT | 0x4857 | STAT_0x4857_WERT | Zaehler Zuendaussetzerkennung Zylinder 2 | - | CTR_MIS_DET_CYL[7] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5800_WERT | 0x5800 | STAT_0x5800_WERT | Zeit nach Start | s | T_AST_SAE_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5801_WERT | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | kPa | OBD_AMP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | 0-n | STATE_LS[1] | - | unsigned char | _CNV_S_5_LACO_RANGE_307 | 1 | 1 | 0 |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | 0-n | STATE_LS[2] | - | unsigned char | _CNV_S_5_LACO_RANGE_307 | 1 | 1 | 0 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5805_WERT | 0x5805 | STAT_0x5805_WERT | Kühlmitteltemperatur OBD | °C | OBD_TCO | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda Integrator Gruppe 1 | % | OBD_LAM_COR[1] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lambda Adaption Summe mul. und add. Gruppe 1 | % | OBD_LAM_AD[1] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| ILIN2 | 0x5808 | STAT_LAMBDA_INTEGRATOR_GRUPPE2_WERT | Lambda Integrator Gruppe 2 | % | OBD_LAM_COR[2] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Lambda Adaption Summe mul. und add. Gruppe 2 | % | OBD_LAM_AD[2] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| STAT_0x580A_WERT | 0x580A | STAT_0x580A_WERT | Wasserpumpe Spannung CWP_2_2 | V | V_CWP_2_2 | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| IPSA2 | 0x580B | STAT_SAUGROHRDRUCK_2_WERT | Saugrohrdruck | kPa | MAP_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Drehzahl | rpm | OBD_N | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündzeitpunkt Zylinder 1 | °CRK | OBD_IGA_IGC | - | unsigned char | - | 0,5 | 1 | -64,0 |
| ITANL | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_LAW_WERT | Ansauglufttemperatur | °C | OBD_TIA | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILMGS | 0x5810 | STAT_LUFTMASSE_GRAMM_PRO_SEKUNDE_WERT | Luftdurchsatz OBD | g/s | OBD_MAF | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x5812_WERT | 0x5812 | STAT_0x5812_WERT | Luftmasse gemessen Bank 1 | kg/h | MAF_KGH_MES_BAS_KWP[0] | - | unsigned char | - | 8,0 | 1 | 0,0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | % | RF | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5815_WERT | 0x5815 | STAT_0x5815_WERT | Batteriespannung | V | OBD_VB | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| STAT_0x5816_WERT | 0x5816 | STAT_0x5816_WERT | Lambda Setpoint | - | OBD_LAMB_SP | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5817_WERT | 0x5817 | STAT_0x5817_WERT | Umgebungstemperatur | °C | OBD_TAM | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmasse gerechnet | mg/stk | MAF_KWP | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| STAT_0x5819_WERT | 0x5819 | STAT_0x5819_WERT | Drehzahl OBD Byte | rpm | N_SAE_BYTE_KWP | - | unsigned char | - | 64,0 | 1 | 0,0 |
| STAT_0x581A_WERT | 0x581A | STAT_0x581A_WERT | Rohwert Drosselklapenpoti 1 Bank 1 | V | VP_TPS_1_KWP[0] | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| STAT_0x581B_WERT | 0x581B | STAT_0x581B_WERT | Rohwert Drosselklapenpoti 2 Bank 1 | V | VP_TPS_2_KWP[0] | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| STAT_0x581C_WERT | 0x581C | STAT_0x581C_WERT | Rohwert Drosselklapenpoti 1 Bank 2 | V | VP_TPS_1_KWP[1] | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| STAT_0x581D_WERT | 0x581D | STAT_0x581D_WERT | Wasserpumpe Stromaufnahme CWP2_1 | A | CUR_CNS_CWP_2_1 | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| STAT_0x581E_WERT | 0x581E | STAT_0x581E_WERT | Rohwert Drosselklapenpoti 2 Bank 2 | V | VP_TPS_2_KWP[1] | - | signed char | - | 0,03905882313847542 | 1 | -4,7058822283200315E-4 |
| STAT_0x581F_WERT | 0x581F | STAT_0x581F_WERT | Motortemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | (Motor)-Öltemperatur | °C | TOIL_MES | - | unsigned char | - | 1,0 | 1 | -40,0 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Zeit Motor steht | min | T_ES_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| STAT_0x5824_WERT | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5825_WERT | 0x5825 | STAT_0x5825_WERT | Abstellzeit | min | T_ES_CUS_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| STAT_5826_WERT | 0x5826 | STAT_5826_WERT | Drosselklappe 2 Sollwert | °TPS | TPS_SP[2] | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| STAT_0x5827_WERT | 0x5827 | STAT_0x5827_WERT | Lambdasondenheizung vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5828_WERT | 0x5828 | STAT_0x5828_WERT | Lambdasondenheizung vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5829_WERT | 0x5829 | STAT_0x5829_WERT | Lambdasondenheizung hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x582A_WERT | 0x582A | STAT_0x582A_WERT | Lambdasondenheizung hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomenteingriff über CAN | - | STATE_TQ_CAN_PLAUS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x582C_WERT | 0x582C | STAT_0x582C_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 1 | - | CTR_ERR_LSL_IF_SPI_WR[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x582D_WERT | 0x582D | STAT_0x582D_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Katalysator Bank 2 | - | CTR_ERR_LSL_IF_SPI_WR[2] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x582E_WERT | 0x582E | STAT_0x582E_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 1 | - | FAC_DIAG_DYN_LSL_UP[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| STAT_0x582F_WERT | 0x582F | STAT_0x582F_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Katalysator Bank 2 | - | FAC_DIAG_DYN_LSL_UP[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| STAT_0x5830_WERT | 0x5830 | STAT_0x5830_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 1 | - | FAC_MV_DIAG_DYN_LSL_UP_KWP[1] | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| STAT_0x5831_WERT | 0x5831 | STAT_0x5831_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Katalysator Bank 2 | - | FAC_MV_DIAG_DYN_LSL_UP_KWP[2] | - | unsigned char | - | 0,004000000189989805 | 1 | 0,0 |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Motor Status | 0-n | STATE_ENG | - | unsigned char | _CNV_S_6_RANGE_STAT_58 | 1 | 1 | 0 |
| STAT_0x5833_WERT | 0x5833 | STAT_0x5833_WERT | Umgebungstemperatur beim Start | °C | TAM_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | hPa | AMP_MES_KWP | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | rpm/s | N_GRD | - | signed char | - | 32,0 | 1 | 0,0 |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | STATE_ERR_EL_LSL_UP[1] | - | unsigned char | _CNV_S_11_EGCP_RANGE_254 | 1 | 1 | 0 |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | STATE_ERR_EL_LSL_UP[2] | - | unsigned char | _CNV_S_11_EGCP_RANGE_254 | 1 | 1 | 0 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Status Drosselklappe Notlauf | 0-n | STATE_N_LIM_ETC_REQ | - | unsigned char | _CNV_S_3_THRO_RANGE_913 | 1 | 1 | 0 |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansauglufttemperatur beim Start | °C | TIA_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | l | FTL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | V | VB | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| STAT_0x583D_WERT | 0x583D | STAT_0x583D_WERT | Resettyp | 0-n | STATE_RST_TYP[0] | - | unsigned char | _CNV_S_19_ECOP_RANGE_814 | 1 | 1 | 0 |
| STAT_0x583E_WERT | 0x583E | STAT_0x583E_WERT | Motordrehzahl bei Reset | rpm | N_RST_DET_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x583F_WERT | 0x583F | STAT_0x583F_WERT | Drosselklappe Sollwert | °TPS | TPS_SP[1] | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| STAT_0x5840_WERT | 0x5840 | STAT_0x5840_WERT | CPU Last bei Reset | % | CPU_LOAD_RST_DET_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| RTSGR | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_ROH_WERT | SG-Innentemperatur Rohwert | V | VP_TECU_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5843_WERT | 0x5843 | STAT_0x5843_WERT | Versorgung Fahrtwertgeber 1 | V | VCC_PVS_1_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| STAT_0x5845_WERT | 0x5845 | STAT_0x5845_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5846_WERT | 0x5846 | STAT_0x5846_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5847_WERT | 0x5847 | STAT_0x5847_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5848_WERT | 0x5848 | STAT_0x5848_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5849_WERT | 0x5849 | STAT_0x5849_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RUK15 | 0x584A | STAT_KL15_SPANNUNG_ROH_WERT | Spannung Kl. 15 Rohwert | V | V_IGK_BAS_KWP | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 |
| STAT_0x584B_WERT | 0x584B | STAT_0x584B_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x584C_WERT | 0x584C | STAT_0x584C_WERT | Drosselklappe Adaptionsschritte Drosselklappe 2 | - | TPS_AD_STEP_KWP[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | FLOW_COR_CPS | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| STAT_0x584E_WERT | 0x584E | STAT_0x584E_WERT | Drosselklappe sollwert Bank2 | °TPS | TPS_AV_KWP[1] | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| STAT_0x584F_WERT | 0x584F | STAT_0x584F_WERT | Spannung Ansauglufttemperatur Sensor 2 | V | VP_TIA_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5850_WERT | 0x5850 | STAT_0x5850_WERT | Spannung Motortemperatur | V | VP_TCO_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5851_WERT | 0x5851 | STAT_0x5851_WERT | Spannung Ansauglufttemperatur Sensor 1 | V | VP_TIA_KWP[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5852_WERT | 0x5852 | STAT_0x5852_WERT | Kühlmitteltemperatur Kühlerausgang Rohwert | V | VP_TCO_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5853_WERT | 0x5853 | STAT_0x5853_WERT | Spannung Kl.87 Rohwert | V | VB_BAS_KWP | - | unsigned char | - | 0,11294117569923401 | 1 | 0,0 |
| STAT_0x5854_WERT | 0x5854 | STAT_0x5854_WERT | Versorgung Fahrtwertgeber 2 | V | VCC_PVS_2_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | Mittelwert Lambda Bank 1  | % | FAC_LAM_MV_MMV[1] | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| STAT_0x5856_WERT | 0x5856 | STAT_0x5856_WERT | Mittelwert Lambda  Bank 2 | % | FAC_LAM_MV_MMV[2] | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| STAT_0x5858_WERT | 0x5858 | STAT_0x5858_WERT | Drosselklappe aktueller Wert Bank1 | °TPS | TPS_AV_KWP[1] | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| STAT_0x5859_WERT | 0x5859 | STAT_0x5859_WERT | DMTL Strom Referenzleck | mA | CUR_DMTL_REF_LEAK_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| STAT_0x585A_WERT | 0x585A | STAT_0x585A_WERT | DMTL Strom Grobleck | mA | CUR_DMTL_ROUGH_LEAK_MIN_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| STAT_0x585B_WERT | 0x585B | STAT_0x585B_WERT | DMTL Strom Diagnoseende | mA | CUR_DMTL_COR_FIL_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| STAT_0x585C_WERT | 0x585C | STAT_0x585C_WERT | Widerstand Lambdasonde hinter Katalysator Bank 1High Byte | ohm | R_IT_LS_DOWN_KWP_H[1] | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_WERT | Widerstand Lambdasonde hinter Katalysator Bank 2 High Byte | ohm | R_IT_LS_DOWN_KWP_H[2] | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | Widerstand Lambdasonde hinter Katalysator Bank 1 Low Byte | ohm | R_IT_LS_DOWN_KWP_L[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | Widerstand Lambdasonde hinter Katalysator Bank 2 Low Byte | ohm | R_IT_LS_DOWN_KWP_L[2] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Widerstand Lambdasonde vor Katalysator Bank 1 High Byte | ohm | R_IT_LS_UP_KWP_H[1] | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Widerstand Lambdasonde vor Katalysator Bank 2 High Byte | ohm | R_IT_LS_UP_KWP_H[2] | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | Widerstand Lambdasonde vor Katalysator Bank 1 Low Byte | ohm | R_IT_LS_UP_KWP_L[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 Low Byte | ohm | R_IT_LS_UP_KWP_L[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| STAT_0x5865_WERT | 0x5865 | STAT_0x5865_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x5866_WERT | 0x5866 | STAT_0x5866_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5867_WERT | 0x5867 | STAT_0x5867_WERT | Kilometerstand | km | CTR_KM_CAN_KWP | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | - | STAT_SV_REG1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | - | STAT_SV_REG2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x586A_WERT | 0x586A | STAT_0x586A_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned char | - | 0,06400000303983688 | 1 | 6,0 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA | min | T2HISTSHORT | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit mit Ruhestrom 200 - 1000 mA | min | T3HISTSHORT | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| IZSST | 0x586D | STAT_ZAEHLER_ERKENNUNG_SCHLECHTE_STRASSE_WERT | Zähler Erkennung schlechte Strasse | - | SUM_RR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit mit Ruhestrom größer 1000 mA | min | T4HISTSHORT | - | unsigned char | - | 14,933333396911621 | 1 | 0,0 |
| STAT_0x586F_WERT | 0x586F | STAT_0x586F_WERT | Ist-Oeldruck | hPa | P_OEL_IST_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x5870_WERT | 0x5870 | STAT_0x5870_WERT | Spannung DME Umgebungsdruck | V | V_AMP_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| SLAG1 | 0x5871 | STAT_LAMBDA_SOLLWERT_GRUPPE1_WERT | Lambda-Sollwert Gruppe 1 | - | LAMB_SP_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert Gruppe 2 | - | LAMB_SP_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5874_WERT | 0x5874 | STAT_0x5874_WERT | Spannung Strommessung DMTL | V | V_DMTL_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5875_WERT | 0x5875 | STAT_0x5875_WERT | Sollwert Motormoment | Nm | TQI_SP_KWP | - | signed char | - | 2,0 | 1 | 0,0 |
| STAT_0x5876_WERT | 0x5876 | STAT_0x5876_WERT | OBD Kraftstoffdruck Hochdruckseite High Byte | kPa | OBD_FUP_RNG_H_H | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| STAT_0x5877_WERT | 0x5877 | STAT_0x5877_WERT | OBD Kraftstoffdruck Hochdruckseite Low Byte | kPa | OBD_FUP_RNG_H_L | - | unsigned char | - | 10,0 | 1 | 0,0 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | - | LAMB_DELTA_I_LAM_ADJ_KWP[1] | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | - | LAMB_DELTA_I_LAM_ADJ_KWP[2] | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| STAT_0x587B_WERT | 0x587B | STAT_0x587B_WERT | Wasserpumpe Leistung relativ CWP2_2 | % | REL_CWP_2_2_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISMST | 0x587C | STAT_MOTORSTEUERUNG_WERT | Status Motorsteuerung | 0-n | ECU_STATE | - | unsigned char | _CNV_S_7_RANGE_ECU__56 | 1 | 1 | 0 |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[1] | - | unsigned char | _CNV_S_4_EGCP_RANGE_266 | 1 | 1 | 0 |
| STAT_0x587E_WERT | 0x587E | STAT_0x587E_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[2] | - | unsigned char | _CNV_S_4_EGCP_RANGE_266 | 1 | 1 | 0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5880_WERT | 0x5880 | STAT_0x5880_WERT | Ansteuerung Luftklappe unten | - | LV_ECRAS_DOWN_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | - | GEAR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | °C | TCO_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Rückgelesener Erregergrenzstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5886_WERT | 0x5886 | STAT_0x5886_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[5] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert Gruppe 1 | - | LAMB_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Gruppe 2 | - | LAMB_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | s | T_AST | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | TTIP_MES_LS_UP[1] | - | signed char | - | 16,0 | 1 | 0,0 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit DMTL Leckmessung | s | T_ACT_LEAK_MES | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom bei DMTL Pumpenprüfung | mA | CUR_DMTL_DMTLS_TEST | - | unsigned char | - | 1,5625238418579102 | 1 | 0,0 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | TTIP_MES_LS_UP[2] | - | signed char | - | 16,0 | 1 | 0,0 |
| STAT_0x5890_WERT | 0x5890 | STAT_0x5890_WERT | Wasserpumpe Elektroniktemperatur CWP2_2 | °C | TEMP_EL_CWP_2_2 | - | unsigned char | - | 1,0 | 1 | -50,0 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | Nm | TQ_REQ_CLU | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x5892_WERT | 0x5892 | STAT_0x5892_WERT | Wasserpumpe Stromaufnahme CWP2_2 | A | CUR_CNS_CWP_2_2 | - | unsigned char | - | 0,20000000298023224 | 1 | 0,0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | Nm | TQI_GS_FAST_DEC | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[1] | - | unsigned char | _CNV_S_4_EGCP_RANGE_258 | 1 | 1 | 0 |
| STAT_0x5895_WERT | 0x5895 | STAT_0x5895_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[2] | - | unsigned char | _CNV_S_4_EGCP_RANGE_258 | 1 | 1 | 0 |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Katalysator Bank 1 | °C | TEG_CAT_DOWN_MDL[1] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| STAT_0x5897_WERT | 0x5897 | STAT_0x5897_WERT | Abgastemperatur hinter Katalysator Bank 2 | °C | TEG_CAT_DOWN_MDL[2] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| STAT_0x5899_WERT | 0x5899 | STAT_0x5899_WERT | Wasserpumpe Istdrehzahl CWP2_2 | - | N_REL_CWP_2_2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x589A_WERT | 0x589A | STAT_0x589A_WERT | Wasserpumpen Solldrehzahl CWP2_1 und CWP2_2 | - | N_REL_CWP_SP_2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUOS1 | 0x589B | STAT_SPANNUNGSOFFSET_SIGNALPFAD1_WERT | Spannungsoffset Signalpfad CJ120 1 | V | VLS_OFS_LSL_KWP[1] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| IUOS2 | 0x589C | STAT_SPANNUNGSOFFSET_SIGNALPFAD2_WERT | Spannungsoffset Signalpfad CJ120 2 | V | VLS_OFS_LSL_KWP[2] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| STAT_0x589D_WERT | 0x589D | STAT_0x589D_WERT | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | LAMB_DIF_MON_KWP | - | signed char | - | 0,015624979510903358 | 1 | -2,509803727102794E-6 |
| STAT_0x589E_WERT | 0x589E | STAT_0x589E_WERT | Status_Drosselklapendiagnose Bank1 | 0-n | STATE_TPS_DIAG[1] | - | unsigned char | _CNV_S_5_THRO_RANGE_908 | 1 | 1 | 0 |
| STAT_0x589F_WERT | 0x589F | STAT_0x589F_WERT | Status Drosselklappendiagnose Bank2 | 0-n | STATE_TPS_DIAG[2] | - | unsigned char | _CNV_S_5_THRO_RANGE_908 | 1 | 1 | 0 |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0x58A0_WERT | Signal Ansteuerung Drosselklappe  Bank1 | % | PWM_ETC_KWP[0] | - | signed char | - | 0,78125 | 1 | 0,0 |
| STAT_0x58A1_WERT | 0x58A1 | STAT_0x58A1_WERT | Signal Ansteuerung Drosselklappe  Bank2 | % | PWM_ETC_KWP[1] | - | signed char | - | 0,78125 | 1 | 0,0 |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Motorabstellzeit | min | T_ES_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | Resetzähler Rechnerüberwachung: alter Wert | - | ENVD_3_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Fehlercode Rechnerüberwachung: alter Wert | - | ENVD_2_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58AB_WERT | 0x58AB | STAT_0x58AB_WERT | Motordrehzahl Auflosung 32 Umdrehungen | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x58AC_WERT | 0x58AC | STAT_0x58AC_WERT | Batterietemperatur | °C | T_BATT_KWP | - | signed char | - | 1,0 | 1 | 0,0 |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Pedalwertgeber 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58AE_WERT | 0x58AE | STAT_0x58AE_WERT | Periodendauer Luftmasse Bank 1 | us | T_PER_MAF_FRQ_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | Kraftstoff Anforderung an Pumpe | l/h | VFF_EFP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58B0_WERT | 0x58B0 | STAT_0x58B0_WERT | DK-Adaptionsschritt Drosselklappe Bank 1 | - | TPS_AD_STEP_KWP[0] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 | ms | V_DUR_IGC_KWP[0] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Funkenbrenndauer Zylinder 5 | ms | V_DUR_IGC_KWP[1] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ4 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 | ms | V_DUR_IGC_KWP[2] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ8 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL8_WERT | Funkenbrenndauer Zylinder 8 | ms | V_DUR_IGC_KWP[3] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ6 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Funkenbrenndauer Zylinder 6 | ms | V_DUR_IGC_KWP[4] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ3 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 | ms | V_DUR_IGC_KWP[5] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | Bremsdruck | bar | BRAKE_PRS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | rpm | N_32_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | % | PV_AV_MON | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58BA_WERT | 0x58BA | STAT_0x58BA_WERT | eingespritze Kraftstoffmasse | l/h | VFF_MFF_SP_FUP_CTL_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58BB_WERT | 0x58BB | STAT_0x58BB_WERT | PWM Kraftstoffpumpe | % | EFPPWM_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | mg/stk | MAF_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| STAT_0x58BD_WERT | 0x58BD | STAT_0x58BD_WERT | Funkenbrenndauer Zylinder 7 | ms | V_DUR_IGC_KWP[6] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| STAT_0x58BE_WERT | 0x58BE | STAT_0x58BE_WERT | Funkenbrenndauer Zylinder 2 | ms | V_DUR_IGC_KWP[7] | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | Motordrehzahl Ersatzwert Überwachung | rpm | N_32_SUB_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit high Byte | µs | SEG_T_MES_KWP_H | - | unsigned char | - | 7812,21826171875 | 1 | 0,0 |
| STAT_0x58C2_WERT | 0x58C2 | STAT_0x58C2_WERT | Statusbyte MFF-Monitoring | - | STATE_LV_ERR_MFF_MON_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C3_WERT | 0x58C3 | STAT_0x58C3_WERT | Statusbyte ISC-Monitoring | - | STATE_LV_ERR_TQ_DIF_ISC_MON_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C5_WERT | 0x58C5 | STAT_0x58C5_WERT | Drehzahl Überwachung (resetsicher) | rpm | N_32_MON_SAVE | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x58C6_WERT | 0x58C6 | STAT_0x58C6_WERT | Status Einspritzventile (resetsicher) | - | PREV_STATE_IV_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INSUE | 0x58C7 | STAT_LEERLAUF_SOLLDREHZAHLABWEICHUNG_WERT | LL-Solldrehzahlabweichung Überwachung | rpm | N_DIF_SP_IS_MON | - | signed char | - | 32,0 | 1 | 0,0 |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | I-Anteil Momentdifferenz Überwachung und Modell | Nm | TQ_DIF_I_IS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | Nm | TQ_DIF_P_D_SLOW_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | Nm | TQ_DIF_P_D_FAST_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | Nm | TQ_LOSS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CD_WERT | 0x58CD | STAT_0x58CD_WERT | Entladung während Ruhestromverletzung | Ah | Q_IRUHE2_KWP | - | unsigned char | - | 0,49803921580314636 | 1 | 0,0 |
| STAT_0x58CE_WERT | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | STATE_BYTE_SWI_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Motormoment Sollwert Überwachung | Nm | TQI_SP_H_RNG_MON_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Motormoment Istwert Überwachung | Nm | TQI_AV_H_RNG_MON_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | Nm | TQI_AV | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D2_WERT | 0x58D2 | STAT_0x58D2_WERT | Status Luftklappe High Byte | - | STATE_ECRAS_SYS_KWP_H | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0x58D3_WERT | Status Luftklappe Low  Byte | - | STATE_ECRAS_SYS_KWP_L | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Abweichung maximales Moment an Kupplung Überwachung | Nm | TQ_AX_MAX_KWP | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D6_WERT | 0x58D6 | STAT_0x58D6_WERT | Abweichung minimales Moment an Kupplung Überwachung | Nm | TQ_AX_MIN_KWP | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D7_WERT | 0x58D7 | STAT_0x58D7_WERT | Druck vor Drosselklappe Bank 2 | kPa | PUT_KWP[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0x58D8_WERT | Sensorspannung Sensor Druck vor Drosselklappe Bank 2 | V | V_PUT_KWP[1] | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Fehlercode Rechnerüberwachung: aktueller Wert | - | ENVD_0_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | Resetzähler Rechnerüberwachung: aktueller Wert | - | ENVD_1_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DB_WERT | 0x58DB | STAT_0x58DB_WERT | Inhalt Statusbyte 1 Drehzahlüberwachung (resetsicher) | - | STATE_TQI_N_MAX_MON_1_1_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DC_WERT | 0x58DC | STAT_0x58DC_WERT | Inhalt Statusbyte 2 Drehzahlüberwachung (resetsicher) | - | STATE_TQI_N_MAX_MON_1_2_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DD_WERT | 0x58DD | STAT_0x58DD_WERT | Druck vor Drosselklappe Bank 1(Turbo) | kPa | PUT_KWP[0] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DE_WERT | 0x58DE | STAT_0x58DE_WERT | Sensorspannung Sensor Druck vor Drosselkappe Bank 1 | V | V_PUT_KWP[0] | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| STAT_0x58DF_WERT | 0x58DF | STAT_0x58DF_WERT | Wasserpumpe Leistung relativ CWP2_1 | % | REL_CWP_2_1_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0x58E0_WERT | Abgleich Drosselklappenmodell (Faktor) | - | EISYDK_KORFAK_B_I | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0x58E1_WERT | Abgleich Drosselklappenmodell (Offset) | kg/h | EISYDK_KOROFF_B_I | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0x58E2_WERT | Abgleich Einlassventilmodell (Faktor) | - | EISYEV_KORFAK_B_I | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0x58E3_WERT | Abgleich Einlassventilmodell (Offset) | kg/h | EISYEV_KOROFF_B_I | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Betriebsart Istwert | 0-n | BA_IST | - | unsigned char | _CNV_S_5__CNV_S_5_D_634 | 1 | 1 | 0 |
| STAT_0x58E5_WERT | 0x58E5 | STAT_0x58E5_WERT | Lastwert für Aussetzererkennung | % | LOAD_MIS_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58E6_WERT | 0x58E6 | STAT_0x58E6_WERT | Nulllastwert für Aussetzererkennung | % | LOAD_MIN_MIS_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58E7_WERT | 0x58E7 | STAT_0x58E7_WERT | Spannung Pedalwertgeber 1 Überwachung | V | V_PVS_1_MON_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x58E8_WERT | 0x58E8 | STAT_0x58E8_WERT | Spannung Pedalwertgeber 2 Überwachung | V | V_PVS_2_MON_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x58E9_WERT | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | Wasserpumpe Spannung CWP2_1 | V | V_CWP_2_1 | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58EA_WERT | 0x58EA | STAT_0x58EA_WERT | Wasserpumpe Drehzahl CWP2_1 | - | N_REL_CWP_2_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58EB_WERT | 0x58EB | STAT_WASSERPUMPE_DREHZAHL_SOLL_IST_DIFFERENZ_WERT | Wasserpumpe Soll -Ist_Differenz CWP2_1 | - | N_REL_CWP_2_1_DIF | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58EC_WERT | 0x58EC | STAT_0x58EC_WERT | Wasserpumpe Temperatur Elektronik CWP2_1 | °C | TEMP_EL_CWP_2_1 | - | unsigned char | - | 1,0 | 1 | -50,0 |
| STAT_0x58ED_WERT | 0x58ED | STAT_0x58ED_WERT | Spannung gemittelter Raildruck Bank 1 | V | V_FUP_MV_0_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| STAT_0x58EE_WERT | 0x58EE | STAT_0x58EE_WERT | Spannung gemittelter Raildruck Bank 2 | V | V_FUP_MV_1_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| STAT_0x58EF_WERT | 0x58EF | STAT_0x58EF_WERT | gemittelter Raildruck Bank 1 | hPa | FUP_KWP[0] | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| STAT_0x58F0_WERT | 0x58F0 | STAT_0x58F0_WERT | gemittelter Raildruck Bank 2 | hPa | FUP_KWP[1] | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| IDMEL | 0x58F1 | STAT_DME_LOSNUMMER_WERT | DME - Losnummer | 0-n | STATE_LRN_ECU_KWP | - | unsigned char | _CNV_S_11_RANGE_STAT_872 | 1 | 1 | 0 |
| STAT_0x58F2_WERT | 0x58F2 | STAT_0x58F2_WERT | Wasserpumpe Differenz Ist-Soll Drehzahl CWP2_2 | - | N_REL_CWP_2_2_DIF | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0x58F3_WERT | Kraftstoffdruck von EFP | hPa | FUP_EFP_KWP | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0x58F4_WERT | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | V_FUP_EFP_MV_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0x58F5_WERT | Eingangssignal Rückführregler 1 | V | VLS_DIF_LAM_ADJ_KWP[1] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0x58F6_WERT | Eingangssignal Rückführregler 2 | V | VLS_DIF_LAM_ADJ_KWP[2] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0x58F7_WERT | Laufunruhe Segmentzeit Low Byte | µs | SEG_T_MES_KWP_L | - | unsigned char | - | 30,516477584838867 | 1 | 0,0 |
| ILSA5 | 0x58F8 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL5_WERT | Segmentadaption Laufunruhe Zyl. 5 | %. | SEG_AD_MMV_ER[1] | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| ILSA3 | 0x58F9 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL3_WERT | Segmentadaption Laufunruhe Zyl. 3 | %. | SEG_AD_MMV_ER[2] | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | CL_MMV_SAE | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58FB_WERT | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | SUM_DIAG_DIAGCPS_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58FC_WERT | 0x58FC | STAT_0x58FC_WERT | Aufwärmfunktion aktiv | 0/1 | LV_WUP | - | unsigned char | - | 1 | 1 | 0 |
| IUPV1 | 0x5A00 | STAT_PWG1_VERSORGUNGSSPANNUNG_WERT | Versorgung Fahrwertgeber 1 | V | VCC_PVS_1 | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| IUPV2 | 0x5A01 | STAT_PWG2_VERSORGUNGSSPANNUNG_WERT | Versorgung Fahrwertgeber 2 | V | VCC_PVS_2 | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| STAT_0x5A02_WERT | 0x5A02 | STAT_0x5A02_WERT |  Bedingungen für Ablaufen der Turboladerdiagnose erfüllt Lader 1 | 0/1 | LV_CDN_DIAG_TCHA_LEAK_1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A03_WERT | 0x5A03 | STAT_0x5A03_WERT | Turboladerdiagnose gesamthaft abgelaufen Lader 1 | 0/1 | LV_END_DIAG_TCHA_LEAK_1 | - | unsigned char | - | 1 | 1 | 0 |
| IUPW1 | 0x5A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW2 | 0x5A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUKUM | 0x5A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V | VP_TCO[1] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| IUKUA | 0x5A0A | STAT_KUEHLERAUSLASSTEMPERATUR_SPANNUNG_WERT | Spannung Kühlmitteltemperatur Kühlerausgang | V | VP_TCO[2] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| IUUMG | 0x5A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V | V_AMP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V | VP_TECU | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| STAT_0x5A0F_WERT | 0x5A0F | STAT_0x5A0F_WERT | Spannung Kl.15 | V | V_IGK_BAS | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| IUK15 | 0x5A10 | STAT_KL15_SPANNUNG_WERT | Spannung Kl15 | V | V_IGK_MES | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| IUSV1 | 0x5A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSV2 | 0x5A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN1 | 0x5A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN2 | 0x5A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5A15_WERT | 0x5A15 | STAT_0x5A15_WERT | Turboladerdiagnose im Niederdruckbereich abgelaufen Lader 1 | 0/1 | LV_END_DIAG_TCHA_PRS_LOW_1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A16_WERT | 0x5A16 | STAT_0x5A16_WERT | Turboladerdiagnose im Hochdruckbereich abgelaufen | 0/1 | LV_END_DIAG_TCHA_PRS_HIGH_1 | - | unsigned char | - | 1 | 1 | 0 |
| IUDMT | 0x5A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Strommessung DMTL | V | V_DMTL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5A18_WERT | 0x5A18 | STAT_0x5A18_WERT | Diagnose von zu niedrigem Ladedruck beendet Bank 2 | 0/1 | LV_END_DIAG_TCHA_PRS_LOW_2 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A19_WERT | 0x5A19 | STAT_0x5A19_WERT | Diagnose von zu hohem Ladedruck beendet Bank 2 | 0/1 | LV_END_DIAG_TCHA_PRS_HIGH_2 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A1A_WERT | 0x5A1A | STAT_0x5A1A_WERT | Bedinung Turboladerdiagnose Niederdruckbereich Bank 1 | 0/1 | LV_CDN_DIAG_TCHA_PRS_LOW_1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A1B_WERT | 0x5A1B | STAT_0x5A1B_WERT | Bedinung Turboladerdiagnose Niederdruckbereich Bank 2 | 0/1 | LV_CDN_DIAG_TCHA_PRS_LOW_2 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A1C_WERT | 0x5A1C | STAT_0x5A1C_WERT | Bedinung Turboladerdiagnose Hochdruckbereich Bank 1 | 0/1 | LV_CDN_DIAG_TCHA_PRS_HIGH_1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A1D_WERT | 0x5A1D | STAT_0x5A1D_WERT | Bedinung Turboladerdiagnose Hochdruckbereich Bank 1 | 0/1 | LV_CDN_DIAG_TCHA_PRS_HIGH_2 | - | unsigned char | - | 1 | 1 | 0 |
| ITKUA | 0x5A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| ITSGI | 0x5A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5A26_WERT | 0x5A26 | STAT_0x5A26_WERT | Saugrohrdruck | hPa | map | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| IPPW1 | 0x5A27 | STAT_PWG1_WERT | Pedalwertgeber Potentiometer 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IPPW2 | 0x5A28 | STAT_PWG2_WERT | Pedalwertgeber Potentiometer 2 | % | PV_AV_2 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| RFPWG | 0x5A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5A2A_WERT | 0x5A2A | STAT_0x5A2A_WERT | Sollwert Kraftstoffpumpe | hPa | FUP_EFP_SP | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| STAT_0x5A2E_WERT | 0x5A2E | STAT_0x5A2E_WERT | Kraftstoffniederdrucksensor | hPa | FUP_EFP | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| STAT_0x5A2F_WERT | 0x5A2F | STAT_0x5A2F_WERT | Gemessener Kraftstoffdruck | MPa | FUP_RNG_H_MES | - | unsigned integer | - | 0,00390625 | 1 | 0,0 |
| ILUZ1 | 0x5A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | µs | ER_CYL[0] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ILUZ6 | 0x5A31 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | µs | ER_CYL[4] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ILUZ7 | 0x5A32 | STAT_LAUFUNRUHE_ZYL7_WERT | Laufunruhe Zylinder 4 | µs | ER_CYL[2] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ILUZ3 | 0x5A33 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | µs | ER_CYL[5] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ILUZ5 | 0x5A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | µs | ER_CYL[1] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ILUZ8 | 0x5A35 | STAT_LAUFUNRUHE_ZYL8_WERT | Laufunruhe Zylinder 8 | µs | ER_CYL[3] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ISKLO | 0x5A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | 0/1 | LV_KNK | - | unsigned char | - | 1 | 1 | 0 |
| IUKZ1 | 0x5A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ6 | 0x5A38 | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ7 | 0x5A39 | STAT_KLOPFWERT_ZYL7_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ3 | 0x5A3A | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ5 | 0x5A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 5 | V | NL[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ8 | 0x5A3C | STAT_KLOPFWERT_ZYL8_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 8 | V | NL[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ1 | 0x5A3D | STAT_KLOPFSIGNAL_ZYL1_WERT | Klopfsignal Zylinder 1 | V | KNKS[0] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ5 | 0x5A3E | STAT_KLOPFSIGNAL_ZYL5_WERT | Klopfsignal Zylinder 5 | V | KNKS[1] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ3 | 0x5A3F | STAT_KLOPFSIGNAL_ZYL3_WERT | Klopfsignal Zylinder 3 | V | KNKS[5] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ4 | 0x5A40 | STAT_KLOPFSIGNAL_ZYL4_WERT | Klopfsignal Zylinder 4 | V | KNKS[2] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ8 | 0x5A41 | STAT_KLOPFSIGNAL_ZYL8_WERT | Klopfsignal Zylinder 8 | V | KNKS[3] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ6 | 0x5A42 | STAT_KLOPFSIGNAL_ZYL6_WERT | Klopfsignal Zylinder 6 | V | KNKS[4] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ7 | 0x5A43 | STAT_KLOPFSIGNAL_ZYL7_WERT | Klopfsignal Zylinder 7 | V | KNKS[6] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IKSZ2 | 0x5A44 | STAT_KLOPFSIGNAL_ZYL2_WERT | Klopfsignal Zylinder 2 | V | KNKS[7] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| ILUZ4 | 0x5A45 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 7 | µs | ER_CYL[6] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| ILUZ2 | 0x5A46 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | µs | ER_CYL[7] | - | signed long | - | 0,2384185791015625 | 1 | 0,0 |
| IUKZ4 | 0x5A47 | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 7 | V | NL[6] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IUKZ2 | 0x5A48 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 2 | V | NL[7] | - | unsigned integer | - | 7,62939453125E-5 | 1 | 0,0 |
| IZWZ1 | 0x5A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder 1 | °CRK | IGA_IGC[0] | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| ILASB | 0x5A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISACR | 0x5A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN | Klimakompressorrelais Ein | 0/1 | LV_ACCOUT_RLY | - | unsigned char | - | 1 | 1 | 0 |
| ILAB1 | 0x5A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Katalysator Bank 1 | - | LAMB_LS_UP[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| ILAB2 | 0x5A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Katalysator Bank 2 | - | LAMB_LS_UP[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| IRNK1 | 0x5A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS hinter Katalysator Bank 1 | 0/1 | LV_LS_DOWN_READY[1] | - | unsigned char | - | 1 | 1 | 0 |
| IRNK2 | 0x5A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS hinter Katalysator Bank 2 | 0/1 | LV_LS_DOWN_READY[2] | - | unsigned char | - | 1 | 1 | 0 |
| ISHN1 | 0x5A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung hinter Katalysator Bank 1 | 0-n | STATE_LSH_DOWN[1] | - | unsigned char | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| ISHN2 | 0x5A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung hinter Katalysator Bank 2 | 0-n | STATE_LSH_DOWN[2] | - | unsigned char | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| ISHV1 | 0x5A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Katalysator Bank 1 | 0-n | STATE_LSH_UP[1] | - | unsigned char | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| ISHV2 | 0x5A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Katalysator Bank 2 | 0-n | STATE_LSH_UP[2] | - | unsigned char | _CNV_S_7_EGCP_RANGE_238 | 1 | 1 | 0 |
| IAHV1 | 0x5A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN1 | 0x5A59 | STAT_STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHV2 | 0x5A5A | STAT_STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN2 | 0x5A5B | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK2_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISBLS | 0x5A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | 0/1 | LV_IM_BLS | - | unsigned char | - | 1 | 1 | 0 |
| ISBLT | 0x5A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | 0/1 | LV_IM_BTS | - | unsigned char | - | 1 | 1 | 0 |
| ISOED | 0x5A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | 0/1 | LV_POIL_SWI | - | unsigned char | - | 1 | 1 | 0 |
| ISEBO | 0x5A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Box-Lüfter Ein | 0/1 | LV_EBOX_CFA | - | unsigned char | - | 1 | 1 | 0 |
| ISDMP | 0x5A66 | STAT_DMTL_PUMPE_EIN_WERT | DMTL Pumpe Ein | 0/1 | LV_DMTL_PUMP | - | unsigned char | - | 1 | 1 | 0 |
| ISDMV | 0x5A67 | STAT_DMTL_VENTIL_EIN_WERT | DMTL Ventil Ein | 0/1 | LV_DMTLS | - | unsigned char | - | 1 | 1 | 0 |
| ISDMH | 0x5A68 | STAT_DMTL_HEIZUNG_EIN_WERT | DMTL Heizung Ein | 0/1 | LV_HDMTL_ON | - | unsigned char | - | 1 | 1 | 0 |
| ISMIL | 0x5A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | 0/1 | LV_MIL_CAN | - | unsigned char | - | 1 | 1 | 0 |
| ISCEL | 0x5A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | 0/1 | LV_WAL_1_CAN | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A6C_WERT | 0x5A6C | STAT_0x5A6C_WERT | Verbrauchskorrekturfaktor | - | FAC_FCO_KWP | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5A73 | 0x5A73 | STAT_0x5A73 | Kurbelgehäuseentlüftungsheizung ein | 0/1 | LV_RLY_CRCV_HEAT | - | unsigned char | - | 1 | 1 | 0 |
| IAKFT | 0x5A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | % | ECTPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IATEV | 0x5A77 | STAT_TEV_PWM_WERT | Tankentlüftungsventil PWM | % | CPPWM_CPS | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAELUE | 0x5A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IINT1 | 0x5A81 | STAT_INTEGRATOR_BANK1_WERT | Integrator Bank 1 | % | FAC_LAM_LIM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IINT2 | 0x5A82 | STAT_INTEGRATOR_BANK2_WERT | Integrator Bank 2 | % | FAC_LAM_LIM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IADD1 | 0x5A83 | STAT_ADAPTION_ADDITIV_BANK1_WERT | Adaption Offset Lambda Bank 1 | % | FAC_MFF_ADD_LAM_AD_OUT[1] | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| IADD2 | 0x5A84 | STAT_ADAPTION_ADDITIV_BANK2_WERT | Adaption Offset Lambda Bank 2 | % | FAC_MFF_ADD_LAM_AD_OUT[2] | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| IMUL1 | 0x5A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Adaption Multiplikation Lambda Bank 1 | % | FAC_LAM_AD_CUS[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IMUL2 | 0x5A86 | STAT_ADAPTION_MULTIPLIKATIV_BANK2_WERT | Adaption Multiplikation Lambda Bank 2 | % | FAC_LAM_AD_CUS[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A87_WERT | 0x5A87 | STAT_0x5A87_WERT | Adaptionswert Trimregelung Bank 1 | - | LAMB_DELTA_AD_LAM_ADJ[1] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| STAT_0x5A88_WERT | 0x5A88 | STAT_0x5A88_WERT | Adaptionswert Trimregelung Bank 2 | - | LAMB_DELTA_AD_LAM_ADJ[2] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| STAT_0x5A89_WERT | 0x5A89 | STAT_0x5A89_WERT | multiplikative Gemischadaption hohe Last Bank 1 | % | FAC_H_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A8A_WERT | 0x5A8A | STAT_0x5A8A_WERT | multiplikative Gemischadaption hohe Last Bank 2 | % | FAC_H_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A8B_WERT | 0x5A8B | STAT_0x5A8B_WERT | multiplikative Gemischadaption niedrige Last Bank 1 | % | FAC_L_RNG_LAM_AD[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A8C_WERT | 0x5A8C | STAT_0x5A8C_WERT | multiplikative Gemischadaption niedrige Last Bank 2 | % | FAC_L_RNG_LAM_AD[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A8D_WERT | 0x5A8D | STAT_0x5A8D_WERT | additive Gemischadaption Leerlauf Bank 1 | mg/stk | MFF_ADD_LAM_AD[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5A8E_WERT | 0x5A8E | STAT_0x5A8E_WERT | additive Gemischadaption Leerlauf Bank 2 | mg/stk | MFF_ADD_LAM_AD[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5A8F_WERT | 0x5A8F | STAT_0x5A8F_WERT | Adaption Schubabgleich Bank 1 | - | FAC_LSL_GAIN_AD[1] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5A90_WERT | 0x5A90 | STAT_0x5A90_WERT | Adaption Schubabgleich Bank 2 | - | FAC_LSL_GAIN_AD[2] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5A91_WERT | 0x5A91 | STAT_0x5A91_WERT | Katalysatordiagnosewert Bank1 | - | EFF_CAT_DIAG_OBD[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5A92_WERT | 0x5A92 | STAT_0x5A92_WERT | Katalysatordiagnosewert Bank 2 | - | EFF_CAT_DIAG_OBD[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| IANWA | 0x5A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass | °CRK | PSN_AD_CAM_EX_1 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| IANWE | 0x5A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass | °CRK | PSN_AD_CAM_IN_1 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| STAT_0x5A97_WERT | 0x5A97 | STAT_0x5A97_WERT | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | B_VSEAN_LOC | - | unsigned char | - | 1 | 1 | 0 |
| IAKWF | 0x5A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | 0/1 | LV_SEG_AD_AVL_ER | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A9A_WERT | 0x5A9A | STAT_0x5A9A_WERT | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | LV_VAR_MAF_LEARNT | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AA7_WERT | 0x5AA7 | STAT_0x5AA7_WERT | Leckluftadaption Istwert | kg/h | MSNLGOFS_TMP | - | signed integer | - | 0,03125 | 1 | 0,0 |
| STAT_0x5AA8_WERT | 0x5AA8 | STAT_0x5AA8_WERT | Status Luftklappensystem | - | STATE_ECRAS_SYS | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5AA9_WERT | 0x5AA9 | STAT_0x5AA9_WERT | Tastverhältniss Luftklappe | % | ECRASPWM | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5AAB_WERT | 0x5AAB | STAT_0x5AAB_WERT | Wastegate 1 PWM | % | WGPWM[1] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAC_WERT | 0x5AAC | STAT_0x5AAC_WERT | Wastegate 2 PWM | % | WGPWM[2] | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAD_WERT | 0x5AAD | STAT_0x5AAD_WERT | Vorsteuernung Ladedruck | % | ATLVST | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAF_WERT | 0x5AAF | STAT_0x5AAF_WERT | Adaptionswert von der Ladedruckregelung | - | F_ATLAD | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5AB0_WERT | 0x5AB0 | STAT_0x5AB0_WERT | Solladedruck | hPa | PLDR_SOLL | - | unsigned integer | - | 0,125 | 1 | 0,0 |
| IVKMH | 0x5AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AB2_WERT | 0x5AB2 | STAT_0x5AB2_WERT | Periodendauer Luftmasse | µs | T_PER_MAF_FRQ[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IWMIL | 0x5AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Fahrstrecke mit MIL an | km | DIST_ACT_MIL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IZBST | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | h | TRT | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| STAT_0x5AB5_WERT | 0x5AB5 | STAT_0x5AB5_WERT | Periodendauer Luftmasse Bank 2 | µs | T_PER_MAF_FRQ[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTKWA | 0x5AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IUSAU | 0x5AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Saugrohrdruck | V | V_MAP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IAKSP | 0x5ABA | STAT_KRAFTSTOFFPUMPE_PWM_WERT | Kraftstoffpumpe PWM | % | EFPPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5ABB_WERT | 0x5ABB | STAT_0x5ABB_WERT | Spannung Saugrohrdruck 2 | V | V_MAP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IASRE | 0x5ABD | STAT_STARTRELAIS_AKTIV_WERT | Starterrelais aktiv | 0/1 | LV_RLY_ST | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AC2_WERT | 0x5AC2 | STAT_0x5AC2_WERT | Reset Adresse | - | STACK_ADR_RST[0][0] | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AC4_WERT | 0x5AC4 | STAT_0x5AC4_WERT | Minimale Pumpengeschwindigkeit der elektrischen Kraftsoffpumpe | % | EFPPWM_MIN_AD | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AC5_WERT | 0x5AC5 | STAT_0x5AC5_WERT | Aditiver I-Anteil des EKP-Controllers | % | EFPPWM_I_AD | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5AD0_WERT | 0x5AD0 | STAT_0x5AD0_WERT | DME-Temperaturstatistik Zähler 5 | - | CTR_STC_TECU_5 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD1_WERT | 0x5AD1 | STAT_0x5AD1_WERT | DME-Temperaturstatistik Zähler 6 | - | CTR_STC_TECU_6 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD2_WERT | 0x5AD2 | STAT_0x5AD2_WERT | DME-Temperaturstatistik Zähler 7 | - | CTR_STC_TECU_7 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD3_WERT | 0x5AD3 | STAT_0x5AD3_WERT | DME-Temperaturstatistik Zähler 8 | - | CTR_STC_TECU_8 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD5_WERT | 0x5AD5 | STAT_0x5AD5_WERT | DME-Temperaturstatistik Zähler 1 | - | CTR_STC_TECU_1 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD6_WERT | 0x5AD6 | STAT_0x5AD6_WERT | DME-Temperaturstatistik Zähler 2 | - | CTR_STC_TECU_2 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD7_WERT | 0x5AD7 | STAT_0x5AD7_WERT | DME-Temperaturstatistik Zähler 3 | - | CTR_STC_TECU_3 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD8_WERT | 0x5AD8 | STAT_0x5AD8_WERT | DME-Temperaturstatistik Zähler 4 | - | CTR_STC_TECU_4 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD9_WERT | 0x5AD9 | STAT_0x5AD9_WERT | DME-Temperaturstatistik Zähler 5 | - | CTR_STC_TECU_5 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| -STAT_0x5ADA_WERT | 0x5ADA | -STAT_0x5ADA_WERT | DME-Temperaturstatistik Zähler 6 | - | CTR_STC_TECU_6 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5ADB_WERT | 0x5ADB | STAT_0x5ADB_WERT | DME-Temperaturstatistik Zähler 7 | - | CTR_STC_TECU_7 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5ADC_WERT | 0x5ADC | STAT_0x5ADC_WERT | DME-Temperaturstatistik Zähler 8 | - | CTR_STC_TECU_8 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE2_WERT | 0x5AE2 | STAT_0x5AE2_WERT | Resetart des letzten Resets | 0-n | STATE_RST_TYP_ACT | - | unsigned char | _CNV_S_19_ECOP_RANGE_814 | 1 | 1 | 0 |
| STAT_0x5AE3_WERT | 0x5AE3 | STAT_0x5AE3_WERT | Hintegrundinformationen zum letzten gültigen Reset | 0/1 | LV_DBG_INFO_VLD[0] | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AE4_WERT | 0x5AE4 | STAT_0x5AE4_WERT | Zusätzliche Resetinformationen zur Resetursache | - | STATE_RST_INFO_ADD[0] | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE5_WERT | 0x5AE5 | STAT_0x5AE5_WERT | Fahrstrecke bei Reset | m | DIST_RST_DET[0] | - | unsigned long | - | 100,0 | 1 | 0,0 |
| STAT_0x5AE6_WERT | 0x5AE6 | STAT_0x5AE6_WERT | Betriebsstundenzähler bei Reset | h | TRT_RST_DET[0] | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| STAT_0x5AE7_WERT | 0x5AE7 | STAT_0x5AE7_WERT | Maximale CPU-Last bei Reseterkennung | % | CPU_LOAD_MAX_RST_DET[0] | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| STAT_0x5AE8_WERT | 0x5AE8 | STAT_0x5AE8_WERT | Geschwindigkeit bei maximaler CPU-Last bei Reseterkennung | rpm | N_CPU_LOAD_MAX_RST_DET[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5B00_WERT | 0x5B00 | STAT_0x5B00_WERT | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen  | ms | TI_1_MES[0] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B01_WERT | 0x5B01 | STAT_0x5B01_WERT | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen  | ms | TI_1_MES[4] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B02_WERT | 0x5B02 | STAT_0x5B02_WERT | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen  | ms | TI_1_MES[2] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B03_WERT | 0x5B03 | STAT_0x5B03_WERT | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen  | ms | TI_1_MES[5] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B04_WERT | 0x5B04 | STAT_0x5B04_WERT | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen  | ms | TI_1_MES[1] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B05_WERT | 0x5B05 | STAT_0x5B05_WERT | Einspritzzeit Zylinder 8 von der Endstufe rückgemessen  | ms | TI_1_MES[3] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B06_WERT | 0x5B06 | STAT_0x5B06_WERT | Einspritzzeit Zylinder 7 von der Endstufe rückgemessen | ms | TI_1_MES[6] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B07_WERT | 0x5B07 | STAT_0x5B07_WERT | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen | ms | TI_1_MES[7] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B10_WERT | 0x5B10 | STAT_0x5B10_WERT | Tastverhältnis Injektor 1 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[0] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B11_WERT | 0x5B11 | STAT_0x5B11_WERT | Tastverhältnis Injektor 6 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[4] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B12_WERT | 0x5B12 | STAT_0x5B12_WERT | Tastverhältnis Injektor 4 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[2] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B13_WERT | 0x5B13 | STAT_0x5B13_WERT | Tastverhältnis Injektor 3 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[5] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B14_WERT | 0x5B14 | STAT_0x5B14_WERT | Tastverhältnis Injektor 5 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[1] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B15_WERT | 0x5B15 | STAT_0x5B15_WERT | Tastverhältnis Injektor 8 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[3] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B16_WERT | 0x5B16 | STAT_0x5B16_WERT | Tastverhältnis Injektor 7 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[6] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B17_WERT | 0x5B17 | STAT_0x5B17_WERT | Tastverhältnis Injektor 2 an Endstufe | % | EGY_STEP_INJ_CHA_GRD[7] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B20_WERT | 0x5B20 | STAT_0x5B20_WERT | Elektrische Ladung Injektor 1 | uAs | CHA_IV_1_MES[0] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B21_WERT | 0x5B21 | STAT_0x5B21_WERT | Elektrische Ladung Injektor 6 | uAs | CHA_IV_1_MES[4] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B22_WERT | 0x5B22 | STAT_0x5B22_WERT | Elektrische Ladung Injektor 4 | uAs | CHA_IV_1_MES[2] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B23_WERT | 0x5B23 | STAT_0x5B23_WERT | Elektrische Ladung Injektor 3 | uAs | CHA_IV_1_MES[5] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B24_WERT | 0x5B24 | STAT_0x5B24_WERT | Elektrische Ladung Injektor 5 | uAs | CHA_IV_1_MES[1] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B25_WERT | 0x5B25 | STAT_0x5B25_WERT | Elektrische Ladung Injektor 8 | uAs | CHA_IV_1_MES[3] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B26_WERT | 0x5B26 | STAT_0x5B26_WERT | Elektrische Ladung Injektor 7 | uAs | CHA_IV_1_MES[6] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B27_WERT | 0x5B27 | STAT_0x5B27_WERT | Elektrische Ladung Injektor 2 | uAs | CHA_IV_1_MES[7] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B30_WERT | 0x5B30 | STAT_0x5B30_WERT | Spannung Injektor 1 | V | V_IV_1_MES[0] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B31_WERT | 0x5B31 | STAT_0x5B31_WERT | Spannung Injektor 6 | V | V_IV_1_MES[4] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B32_WERT | 0x5B32 | STAT_0x5B32_WERT | Spannung Injektor 4 | V | V_IV_1_MES[2] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B33_WERT | 0x5B33 | STAT_0x5B33_WERT | Spannung Injektor 3 | V | V_IV_1_MES[5] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B34_WERT | 0x5B34 | STAT_0x5B34_WERT | Spannung Injektor 5 | V | V_IV_1_MES[1] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B35_WERT | 0x5B35 | STAT_0x5B35_WERT | Spannung Injektor 8 | V | V_IV_1_MES[3] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B36_WERT | 0x5B36 | STAT_0x5B36_WERT | Spannung Injektor 7 | V | V_IV_1_MES[6] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B37_WERT | 0x5B37 | STAT_0x5B37_WERT | Spannung Injektor 2 | V | V_IV_1_MES[7] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B40_WERT | 0x5B40 | STAT_0x5B40_WERT | Adaptionswert der Enstufe Injektor 1 | %/mJ | FAC_EGY_PWM_AD[0] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B41_WERT | 0x5B41 | STAT_0x5B41_WERT | Adaptionswert der Enstufe Injektor 6 | %/mJ | FAC_EGY_PWM_AD[4] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B42_WERT | 0x5B42 | STAT_0x5B42_WERT | Adaptionswert der Enstufe Injektor 4 | %/mJ | FAC_EGY_PWM_AD[2] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B43_WERT | 0x5B43 | STAT_0x5B43_WERT | Adaptionswert der Enstufe Injektor 3 | %/mJ | FAC_EGY_PWM_AD[5] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B44_WERT | 0x5B44 | STAT_0x5B44_WERT | Adaptionswert der Enstufe Injektor 5 | %/mJ | FAC_EGY_PWM_AD[1] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B45_WERT | 0x5B45 | STAT_0x5B45_WERT | Adaptionswert der Enstufe Injektor 8 | %/mJ | FAC_EGY_PWM_AD[3] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B46_WERT | 0x5B46 | STAT_0x5B46_WERT | Adaptionswert der Enstufe Injektor 7 | %/mJ | FAC_EGY_PWM_AD[6] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B47_WERT | 0x5B47 | STAT_0x5B47_WERT | Adaptionswert der Enstufe Injektor 2 | %/mJ | FAC_EGY_PWM_AD[7] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B60_WERT | 0x5B60 | STAT_0x5B60_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 1 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B61_WERT | 0x5B61 | STAT_0x5B61_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 5 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B62_WERT | 0x5B62 | STAT_0x5B62_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 4 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B63_WERT | 0x5B63 | STAT_0x5B63_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 8 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B64_WERT | 0x5B64 | STAT_0x5B64_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 6 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B65_WERT | 0x5B65 | STAT_0x5B65_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 3 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B66_WERT | 0x5B66 | STAT_0x5B66_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 7 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[6] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B67_WERT | 0x5B67 | STAT_0x5B67_WERT | Adaptionswert Zylindergleichstellung HOM Leerlauf Zylinder 2 | % | FAC_COR_AD_RNG_IS_ER_BAL_HOM[7] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BBE_WERT | 0x5BBE | STAT_0x5BBE_WERT | Plausibilität Injektorcodierung Energieabgleich | - | LF_ERR_PLAUS_IV_EGY_CAL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5BBF_WERT | 0x5BBF | STAT_0x5BBF_WERT | Plausibilität Injektorcodierung Durchflussabgleich | - | LF_ERR_PLAUS_IV_MFF_CAL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5BCA_WERT | 0x5BCA | STAT_0x5BCA_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt A | % | FAC_LAM_TCO_A[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BCB_WERT | 0x5BCB | STAT_0x5BCB_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt A | % | FAC_LAM_TCO_A[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BCC_WERT | 0x5BCC | STAT_0x5BCC_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt B | % | FAC_LAM_TCO_B[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BCD_WERT | 0x5BCD | STAT_0x5BCD_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt B | % | FAC_LAM_TCO_B[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BCE_WERT | 0x5BCE | STAT_0x5BCE_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt C | % | FAC_LAM_TCO_C[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BCF_WERT | 0x5BCF | STAT_0x5BCF_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt C | % | FAC_LAM_TCO_C[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BD0_WERT | 0x5BD0 | STAT_0x5BD0_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt D | % | FAC_LAM_TCO_D[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BD1_WERT | 0x5BD1 | STAT_0x5BD1_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt D | % | FAC_LAM_TCO_D[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BD2_WERT | 0x5BD2 | STAT_0x5BD2_WERT | Lambda-Teillastadaption Bank 1 im Kühlmitteltemperaturmesspunkt E | % | FAC_LAM_TCO_E[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BD3_WERT | 0x5BD3 | STAT_0x5BD3_WERT | Lambda-Teillastadaption Bank 2 im Kühlmitteltemperaturmesspunkt E | % | FAC_LAM_TCO_E[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE0_WERT | 0x5BE0 | STAT_0x5BE0_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 1 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE1_WERT | 0x5BE1 | STAT_0x5BE1_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 5 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE2_WERT | 0x5BE2 | STAT_0x5BE2_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 4 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE3_WERT | 0x5BE3 | STAT_0x5BE3_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 8 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE4_WERT | 0x5BE4 | STAT_0x5BE4_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 6 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE5_WERT | 0x5BE5 | STAT_0x5BE5_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 3 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE6_WERT | 0x5BE6 | STAT_0x5BE6_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 7 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[6] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE7_WERT | 0x5BE7 | STAT_0x5BE7_WERT | Adaptionswert Zylindergleichstellung HOM High Range Zylinder 2 | % | FAC_COR_AD_RNG_H_ER_BAL_HOM[7] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF0_WERT | 0x5BF0 | STAT_0x5BF0_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 1 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF1_WERT | 0x5BF1 | STAT_0x5BF1_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 5 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF2_WERT | 0x5BF2 | STAT_0x5BF2_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 4 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF3_WERT | 0x5BF3 | STAT_0x5BF3_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 8 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF4_WERT | 0x5BF4 | STAT_0x5BF4_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 6 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF5_WERT | 0x5BF5 | STAT_0x5BF5_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 3 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF6_WERT | 0x5BF6 | STAT_0x5BF6_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 7 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[6] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF7_WERT | 0x5BF7 | STAT_0x5BF7_WERT | Adaptionswert Zylindergleichstellung HOM Low Range Zylinder 2 | % | FAC_COR_AD_RNG_L_ER_BAL_HOM[7] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### FARTERWTEXTE

| BITNR | BITTEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x11 | Diagnose aktiv |
| 0x12 | Diagnose gestoppt |
| 0x13 | Zyklus-Flag gesetzt |
| 0x14 | Error-Flag gesetzt |
| 0x15 | MIL ein |
| 0x16 | Fehler in Entprellphase |
| 0xXY | Status unbekannt |

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

### _CNV_S_11_EGCP_RANGE_254

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

### _CNV_S_11_RANGE_STAT_872

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VAR_ECU_NOT_LEARNED |
| 0x11 | VAR_ECU_LEARNING_FAILED |
| 0x2A | VAR_ECU_C2_LOT2 |
| 0x4E | VAR_ECU_C1_LOT3 |
| 0x5A | VAR_ECU_C1_LOT1 |
| 0xA2 | VAR_ECU_C2_LOT1 |
| 0xA5 | VAR_ECU_C1_LOT2 |
| 0xAE | VAR_ECU_C1_LOT4 |
| 0xBC | VAR_ECU_SERIAL_ECU |
| 0xE4 | VAR_ECU_C2_LOT3 |
| 0xFF | VAR_ECU_ROM_NOT_PLAUS |

### _CNV_S_12__CNV_S_12__705

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine |
| 0x01 | WARMLAUF |
| 0x02 | ECO |
| 0x03 | NORMAL |
| 0x04 | HIGH |
| 0x05 | HIGH+KFT |
| 0x06 | BAUTEILSCHUTZ |
| 0x07 | HEIZLEISTUNG |
| 0x08 | NOTLAUF |
| 0x09 | APPLIKATION |
| 0x0A | Befuellen/Entlueften |
| 0x0B | Verbrennungsmotor steht |
| 0xFF | undefiniert |

### _CNV_S_19_ECOP_RANGE_814

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO |
| 0x01 | DET_ERROR |
| 0x02 | DISABLED |
| 0x10 | PORST_UNINTENDED |
| 0x11 | PORST_CPL_FAIL |
| 0x12 | PORST_INTENDED |
| 0x13 | PORST_VDD_ERROR |
| 0x20 | EXTRST_UNINTENDED |
| 0x30 | WDTRST_UNINTENDED |
| 0x40 | LLRST_UNINTENDED |
| 0x50 | LCRST_UNINTENDED |
| 0x60 | CSRST_UNINTENDED |
| 0xA0 | SWRST_UNINTENDED |
| 0xA1 | SWRST_CPL_FAIL |
| 0xA2 | SWRST_INTENDED |
| 0xA3 | SWRST_VDD_ERROR |
| 0xA4 | SWRST_EXCEPTION |
| 0xA5 | SWRST_NMI |
| 0xA6 | SWRST_ERROR |
| 0xFF | undefiniert |

### _CNV_S_3_THRO_RANGE_913

| WERT | UWTEXT |
| --- | --- |
| 0x00 | N_NOT_LIM |
| 0x01 | N_LIM_CON |
| 0x02 | N_LIM_PVS |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_258

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_266

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x04 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_307

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_5_THRO_RANGE_908

| WERT | UWTEXT |
| --- | --- |
| 0x00 | TPS_NO_ERROR |
| 0x01 | TPS_1_ERROR |
| 0x02 | TPS_2_ERROR |
| 0x04 | TPS_RATIO_ERR |
| 0x08 | TPS_DBL_ERROR |
| 0xFF | undefiniert |

### _CNV_S_5__CNV_S_5_D_634

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | Schicht |
| 0x02 | Homogen |
| 0x03 | Homogen_Schicht |
| 0x08 | NOTLAUF |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_58

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_238

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

### _CNV_S_7_RANGE_ECU__56

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

### FUNKTIONALEADRESSE

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xE9 | K-CAN | Karosserie-CAN Steuergeräte |
| 0xEA | PT-CAN | Powertrain-CAN Steuergeräte |
| 0xEB | SI | Sicherheits-BUS Steuergeräte |
| 0xEC | MOST | MOST-BUS Steuergeräte |
| 0xED | CBS | Bedarfsorientierter Service |
| 0xEE | PERSONAL | Personalisierung |
| 0xEF | ALL | alle Steuergeräte |

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0xFF | 01 | 12 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 00 |  | 00 |  | PM.Recovery |

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

### _AUSLESEMODE

| NR | MODE |
| --- | --- |
| 0x00 | GROESSE |
| 0x01 | INPA |
| 0x02 | SGBD |
| 0x03 | FASTA |
| 0xFF | 0 |

### _EISYGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 105.0 | 2.00 |
| 0x01 | 720 | 120.0 | 105.0 | 3.00 |
| 0x02 | 900 | 120.0 | 105.0 | 4.00 |
| 0x03 | 1200 | 120.0 | 104.0 | 5.00 |
| 0x04 | 1500 | 120.0 | 103.0 | 6.00 |
| 0x05 | 2000 | 119.0 | 100.0 | 7.00 |
| 0x06 | 2500 | 118.0 | 98.0 | 8.00 |
| 0x07 | 3000 | 116.0 | 98.0 | 9.00 |
| 0x08 | 4000 | 112.0 | 95.0 | 10.0 |
| 0x09 | 5000 | 107.0 | 91.0 | 11.0 |
| 0x0A | 6000 | 107.0 | 86.0 | 12.0 |
| 0x0B | 7000 | 107.0 | 84.0 | 13.0 |
| 0x0C | 660 | 118.0 | 103.0 | 5.0 |
| 0x0D | 720 | 118.0 | 103.0 | 6.0 |
| 0x0E | 900 | 118.0 | 101.0 | 7.0 |
| 0x0F | 1200 | 116.0 | 95.0 | 8.0 |
| 0x10 | 1500 | 113.0 | 91.0 | 9.0 |
| 0x11 | 2000 | 111.0 | 95.0 | 10.0 |
| 0x12 | 2500 | 109.0 | 92.0 | 11.0 |
| 0x13 | 3000 | 108.0 | 95.0 | 12.0 |
| 0x14 | 4000 | 102.0 | 97.0 | 13.0 |
| 0x15 | 5000 | 91.0 | 95.0 | 14.0 |
| 0x16 | 6000 | 99.0 | 94.0 | 15.0 |
| 0x17 | 7000 | 103.0 | 81.0 | 16.0 |
| 0x18 | 660 | 113.0 | 98.0 | 7.0 |
| 0x19 | 720 | 112.0 | 98.0 | 8.0 |
| 0x1A | 900 | 111.0 | 97.0 | 10.0 |
| 0x1B | 1200 | 109.0 | 92.0 | 11.0 |
| 0x1C | 1500 | 108.0 | 88.0 | 12.0 |
| 0x1D | 2000 | 105.0 | 95.0 | 13.0 |
| 0x1E | 2500 | 104.0 | 92.0 | 15.0 |
| 0x1F | 3000 | 98.0 | 98.0 | 17.0 |
| 0x20 | 4000 | 92.0 | 95.0 | 18.0 |
| 0x21 | 5000 | 91.0 | 96.0 | 19.0 |
| 0x22 | 6000 | 97.0 | 96.0 | 22.0 |
| 0x23 | 7000 | 101.0 | 95.0 | 24.0 |
| 0x24 | 660 | 109.0 | 98.0 | 9.0 |
| 0x25 | 720 | 108.0 | 98.0 | 10.0 |
| 0x26 | 900 | 107.0 | 97.0 | 12.0 |
| 0x27 | 1200 | 103.0 | 92.0 | 13.0 |
| 0x28 | 1500 | 101.0 | 88.0 | 15.0 |
| 0x29 | 2000 | 99.0 | 95.0 | 17.0 |
| 0x2A | 2500 | 97.0 | 92.0 | 18.0 |
| 0x2B | 3000 | 95.0 | 98.0 | 19.0 |
| 0x2C | 4000 | 94.0 | 95.0 | 22.0 |
| 0x2D | 5000 | 102.0 | 96.0 | 24.0 |
| 0x2E | 6000 | 108.0 | 96.0 | 25.0 |
| 0x2F | 7000 | 113.0 | 95.0 | 27.0 |
| 0x30 | 660 | 109.0 | 98.0 | 13.0 |
| 0x31 | 720 | 108.0 | 98.0 | 14.0 |
| 0x32 | 900 | 107.0 | 97.0 | 16.0 |
| 0x33 | 1200 | 103.0 | 92.0 | 17.0 |
| 0x34 | 1500 | 101.0 | 88.0 | 19.0 |
| 0x35 | 2000 | 99.0 | 95.0 | 21.0 |
| 0x36 | 2500 | 97.0 | 92.0 | 22.0 |
| 0x37 | 3000 | 95.0 | 98.0 | 23.0 |
| 0x38 | 4000 | 94.0 | 95.0 | 26.0 |
| 0x39 | 5000 | 102.0 | 96.0 | 28.0 |
| 0x3A | 6000 | 108.0 | 96.0 | 29.0 |
| 0x3B | 7000 | 113.0 | 95.0 | 30.0 |
| 0x3C | 660 | 109.0 | 98.0 | 15.0 |
| 0x3D | 720 | 108.0 | 98.0 | 16.0 |
| 0x3E | 900 | 107.0 | 97.0 | 18.0 |
| 0x3F | 1200 | 103.0 | 92.0 | 19.0 |
| 0x40 | 1500 | 101.0 | 88.0 | 20.0 |
| 0x41 | 2000 | 99.0 | 95.0 | 22.0 |
| 0x42 | 2500 | 97.0 | 92.0 | 24.0 |
| 0x43 | 3000 | 95.0 | 98.0 | 25.0 |
| 0x44 | 4000 | 94.0 | 95.0 | 28.0 |
| 0x45 | 5000 | 102.0 | 96.0 | 30.0 |
| 0x46 | 6000 | 108.0 | 96.0 | 31.0 |
| 0x47 | 7000 | 113.0 | 95.0 | 32.0 |
| 0x48 | 660 | 109.0 | 98.0 | 17.0 |
| 0x49 | 720 | 108.0 | 98.0 | 18.0 |
| 0x4A | 900 | 107.0 | 97.0 | 20.0 |
| 0x4B | 1200 | 103.0 | 92.0 | 21.0 |
| 0x4C | 1500 | 101.0 | 88.0 | 22.0 |
| 0x4D | 2000 | 99.0 | 95.0 | 24.0 |
| 0x4E | 2500 | 97.0 | 92.0 | 26.0 |
| 0x4F | 3000 | 95.0 | 98.0 | 27.0 |
| 0x50 | 4000 | 94.0 | 95.0 | 30.0 |
| 0x51 | 5000 | 102.0 | 96.0 | 32.0 |
| 0x52 | 6000 | 108.0 | 96.0 | 34.0 |
| 0x53 | 7000 | 113.0 | 95.0 | 36.0 |
| 0x54 | 660 | 109.0 | 98.0 | 20.0 |
| 0x55 | 720 | 108.0 | 98.0 | 21.0 |
| 0x56 | 900 | 107.0 | 97.0 | 23.0 |
| 0x57 | 1200 | 103.0 | 92.0 | 24.0 |
| 0x58 | 1500 | 101.0 | 88.0 | 25.0 |
| 0x59 | 2000 | 99.0 | 95.0 | 27.0 |
| 0x5A | 2500 | 97.0 | 92.0 | 29.0 |
| 0x5B | 3000 | 95.0 | 98.0 | 30.0 |
| 0x5C | 4000 | 94.0 | 95.0 | 33.0 |
| 0x5D | 5000 | 102.0 | 96.0 | 35.0 |
| 0x5E | 6000 | 108.0 | 96.0 | 37.0 |
| 0x5F | 7000 | 113.0 | 95.0 | 39.0 |
| 0x60 | 660 | 109.0 | 98.0 | 22.0 |
| 0x61 | 720 | 108.0 | 98.0 | 23.0 |
| 0x62 | 900 | 107.0 | 97.0 | 25.0 |
| 0x63 | 1200 | 103.0 | 92.0 | 26.0 |
| 0x64 | 1500 | 101.0 | 88.0 | 27.0 |
| 0x65 | 2000 | 99.0 | 95.0 | 29.0 |
| 0x66 | 2500 | 97.0 | 92.0 | 31.0 |
| 0x67 | 3000 | 95.0 | 98.0 | 32.0 |
| 0x68 | 4000 | 94.0 | 95.0 | 35.0 |
| 0x69 | 5000 | 102.0 | 96.0 | 37.0 |
| 0x6A | 6000 | 108.0 | 96.0 | 39.0 |
| 0x6B | 7000 | 113.0 | 95.0 | 41.0 |
| 0x6C | 660 | 109.0 | 98.0 | 25.0 |
| 0x6D | 720 | 108.0 | 98.0 | 26.0 |
| 0x6E | 900 | 107.0 | 97.0 | 27.0 |
| 0x6F | 1200 | 103.0 | 92.0 | 28.0 |
| 0x70 | 1500 | 101.0 | 88.0 | 29.0 |
| 0x71 | 2000 | 99.0 | 95.0 | 31.0 |
| 0x72 | 2500 | 97.0 | 92.0 | 33.0 |
| 0x73 | 3000 | 95.0 | 98.0 | 34.0 |
| 0x74 | 4000 | 94.0 | 95.0 | 37.0 |
| 0x75 | 5000 | 102.0 | 96.0 | 39.0 |
| 0x76 | 6000 | 108.0 | 96.0 | 41.0 |
| 0x77 | 7000 | 113.0 | 95.0 | 43.0 |
| 0x78 | 660 | 109.0 | 98.0 | 30.0 |
| 0x79 | 720 | 108.0 | 98.0 | 30.0 |
| 0x7A | 900 | 107.0 | 97.0 | 32.0 |
| 0x7B | 1200 | 103.0 | 92.0 | 33.0 |
| 0x7C | 1500 | 101.0 | 88.0 | 34.0 |
| 0x7D | 2000 | 99.0 | 95.0 | 35.0 |
| 0x7E | 2500 | 97.0 | 92.0 | 38.0 |
| 0x7F | 3000 | 95.0 | 98.0 | 39.0 |
| 0x80 | 4000 | 94.0 | 95.0 | 42.0 |
| 0x81 | 5000 | 102.0 | 96.0 | 45.0 |
| 0x82 | 6000 | 108.0 | 96.0 | 47.0 |
| 0x83 | 7000 | 113.0 | 95.0 | 50.0 |
| 0x84 | 660 | 99.9 | 101.0 | 100.0 |
| 0x85 | 720 | 108.0 | 98.0 | 100.0 |
| 0x86 | 900 | 107.0 | 97.0 | 100.0 |
| 0x87 | 1200 | 103.0 | 92.0 | 100.0 |
| 0x88 | 1500 | 101.0 | 88.0 | 100.0 |
| 0x89 | 2000 | 99.0 | 95.0 | 100.0 |
| 0x8A | 2500 | 97.0 | 92.0 | 100.0 |
| 0x8B | 3000 | 95.0 | 98.0 | 100.0 |
| 0x8C | 4000 | 94.0 | 95.0 | 100.0 |
| 0x8D | 5000 | 102.0 | 96.0 | 100.0 |
| 0x8E | 6000 | 108.0 | 96.0 | 100.0 |
| 0x8F | 7000 | 113.0 | 95.0 | 100.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYDR_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 105.0 | 2.00 |
| 0x01 | 720 | 120.0 | 105.0 | 3.00 |
| 0x02 | 900 | 120.0 | 105.0 | 4.00 |
| 0x03 | 1200 | 120.0 | 104.0 | 5.00 |
| 0x04 | 1500 | 120.0 | 103.0 | 6.00 |
| 0x05 | 2000 | 119.0 | 100.0 | 7.00 |
| 0x06 | 2500 | 118.0 | 98.0 | 8.00 |
| 0x07 | 3000 | 116.0 | 98.0 | 9.00 |
| 0x08 | 4000 | 112.0 | 95.0 | 10.0 |
| 0x09 | 5000 | 107.0 | 91.0 | 11.0 |
| 0x0A | 6000 | 107.0 | 86.0 | 12.0 |
| 0x0B | 7000 | 107.0 | 84.0 | 13.0 |
| 0x0C | 660 | 118.0 | 103.0 | 5.0 |
| 0x0D | 720 | 118.0 | 103.0 | 6.0 |
| 0x0E | 900 | 118.0 | 101.0 | 7.0 |
| 0x0F | 1200 | 116.0 | 95.0 | 8.0 |
| 0x10 | 1500 | 113.0 | 91.0 | 9.0 |
| 0x11 | 2000 | 111.0 | 95.0 | 10.0 |
| 0x12 | 2500 | 109.0 | 92.0 | 11.0 |
| 0x13 | 3000 | 108.0 | 95.0 | 12.0 |
| 0x14 | 4000 | 102.0 | 97.0 | 13.0 |
| 0x15 | 5000 | 91.0 | 95.0 | 14.0 |
| 0x16 | 6000 | 99.0 | 94.0 | 15.0 |
| 0x17 | 7000 | 103.0 | 81.0 | 16.0 |
| 0x18 | 660 | 113.0 | 98.0 | 7.0 |
| 0x19 | 720 | 112.0 | 98.0 | 8.0 |
| 0x1A | 900 | 111.0 | 97.0 | 10.0 |
| 0x1B | 1200 | 109.0 | 92.0 | 11.0 |
| 0x1C | 1500 | 108.0 | 88.0 | 12.0 |
| 0x1D | 2000 | 105.0 | 95.0 | 13.0 |
| 0x1E | 2500 | 104.0 | 92.0 | 15.0 |
| 0x1F | 3000 | 98.0 | 98.0 | 17.0 |
| 0x20 | 4000 | 92.0 | 95.0 | 18.0 |
| 0x21 | 5000 | 91.0 | 96.0 | 19.0 |
| 0x22 | 6000 | 97.0 | 96.0 | 22.0 |
| 0x23 | 7000 | 101.0 | 95.0 | 24.0 |
| 0x24 | 660 | 109.0 | 98.0 | 9.0 |
| 0x25 | 720 | 108.0 | 98.0 | 10.0 |
| 0x26 | 900 | 107.0 | 97.0 | 12.0 |
| 0x27 | 1200 | 103.0 | 92.0 | 13.0 |
| 0x28 | 1500 | 101.0 | 88.0 | 15.0 |
| 0x29 | 2000 | 99.0 | 95.0 | 17.0 |
| 0x2A | 2500 | 97.0 | 92.0 | 18.0 |
| 0x2B | 3000 | 95.0 | 98.0 | 19.0 |
| 0x2C | 4000 | 94.0 | 95.0 | 22.0 |
| 0x2D | 5000 | 102.0 | 96.0 | 24.0 |
| 0x2E | 6000 | 108.0 | 96.0 | 25.0 |
| 0x2F | 7000 | 113.0 | 95.0 | 27.0 |
| 0x30 | 660 | 109.0 | 98.0 | 13.0 |
| 0x31 | 720 | 108.0 | 98.0 | 14.0 |
| 0x32 | 900 | 107.0 | 97.0 | 16.0 |
| 0x33 | 1200 | 103.0 | 92.0 | 17.0 |
| 0x34 | 1500 | 101.0 | 88.0 | 19.0 |
| 0x35 | 2000 | 99.0 | 95.0 | 21.0 |
| 0x36 | 2500 | 97.0 | 92.0 | 22.0 |
| 0x37 | 3000 | 95.0 | 98.0 | 23.0 |
| 0x38 | 4000 | 94.0 | 95.0 | 26.0 |
| 0x39 | 5000 | 102.0 | 96.0 | 28.0 |
| 0x3A | 6000 | 108.0 | 96.0 | 29.0 |
| 0x3B | 7000 | 113.0 | 95.0 | 30.0 |
| 0x3C | 660 | 109.0 | 98.0 | 15.0 |
| 0x3D | 720 | 108.0 | 98.0 | 16.0 |
| 0x3E | 900 | 107.0 | 97.0 | 18.0 |
| 0x3F | 1200 | 103.0 | 92.0 | 19.0 |
| 0x40 | 1500 | 101.0 | 88.0 | 20.0 |
| 0x41 | 2000 | 99.0 | 95.0 | 22.0 |
| 0x42 | 2500 | 97.0 | 92.0 | 24.0 |
| 0x43 | 3000 | 95.0 | 98.0 | 25.0 |
| 0x44 | 4000 | 94.0 | 95.0 | 28.0 |
| 0x45 | 5000 | 102.0 | 96.0 | 30.0 |
| 0x46 | 6000 | 108.0 | 96.0 | 31.0 |
| 0x47 | 7000 | 113.0 | 95.0 | 32.0 |
| 0x48 | 660 | 109.0 | 98.0 | 17.0 |
| 0x49 | 720 | 108.0 | 98.0 | 18.0 |
| 0x4A | 900 | 107.0 | 97.0 | 20.0 |
| 0x4B | 1200 | 103.0 | 92.0 | 21.0 |
| 0x4C | 1500 | 101.0 | 88.0 | 22.0 |
| 0x4D | 2000 | 99.0 | 95.0 | 24.0 |
| 0x4E | 2500 | 97.0 | 92.0 | 26.0 |
| 0x4F | 3000 | 95.0 | 98.0 | 27.0 |
| 0x50 | 4000 | 94.0 | 95.0 | 30.0 |
| 0x51 | 5000 | 102.0 | 96.0 | 32.0 |
| 0x52 | 6000 | 108.0 | 96.0 | 34.0 |
| 0x53 | 7000 | 113.0 | 95.0 | 36.0 |
| 0x54 | 660 | 109.0 | 98.0 | 20.0 |
| 0x55 | 720 | 108.0 | 98.0 | 21.0 |
| 0x56 | 900 | 107.0 | 97.0 | 23.0 |
| 0x57 | 1200 | 103.0 | 92.0 | 24.0 |
| 0x58 | 1500 | 101.0 | 88.0 | 25.0 |
| 0x59 | 2000 | 99.0 | 95.0 | 27.0 |
| 0x5A | 2500 | 97.0 | 92.0 | 29.0 |
| 0x5B | 3000 | 95.0 | 98.0 | 30.0 |
| 0x5C | 4000 | 94.0 | 95.0 | 33.0 |
| 0x5D | 5000 | 102.0 | 96.0 | 35.0 |
| 0x5E | 6000 | 108.0 | 96.0 | 37.0 |
| 0x5F | 7000 | 113.0 | 95.0 | 39.0 |
| 0x60 | 660 | 109.0 | 98.0 | 22.0 |
| 0x61 | 720 | 108.0 | 98.0 | 23.0 |
| 0x62 | 900 | 107.0 | 97.0 | 25.0 |
| 0x63 | 1200 | 103.0 | 92.0 | 26.0 |
| 0x64 | 1500 | 101.0 | 88.0 | 27.0 |
| 0x65 | 2000 | 99.0 | 95.0 | 29.0 |
| 0x66 | 2500 | 97.0 | 92.0 | 31.0 |
| 0x67 | 3000 | 95.0 | 98.0 | 32.0 |
| 0x68 | 4000 | 94.0 | 95.0 | 35.0 |
| 0x69 | 5000 | 102.0 | 96.0 | 37.0 |
| 0x6A | 6000 | 108.0 | 96.0 | 39.0 |
| 0x6B | 7000 | 113.0 | 95.0 | 41.0 |
| 0x6C | 660 | 109.0 | 98.0 | 25.0 |
| 0x6D | 720 | 108.0 | 98.0 | 26.0 |
| 0x6E | 900 | 107.0 | 97.0 | 27.0 |
| 0x6F | 1200 | 103.0 | 92.0 | 28.0 |
| 0x70 | 1500 | 101.0 | 88.0 | 29.0 |
| 0x71 | 2000 | 99.0 | 95.0 | 31.0 |
| 0x72 | 2500 | 97.0 | 92.0 | 33.0 |
| 0x73 | 3000 | 95.0 | 98.0 | 34.0 |
| 0x74 | 4000 | 94.0 | 95.0 | 37.0 |
| 0x75 | 5000 | 102.0 | 96.0 | 39.0 |
| 0x76 | 6000 | 108.0 | 96.0 | 41.0 |
| 0x77 | 7000 | 113.0 | 95.0 | 43.0 |
| 0x78 | 660 | 109.0 | 98.0 | 30.0 |
| 0x79 | 720 | 108.0 | 98.0 | 30.0 |
| 0x7A | 900 | 107.0 | 97.0 | 32.0 |
| 0x7B | 1200 | 103.0 | 92.0 | 33.0 |
| 0x7C | 1500 | 101.0 | 88.0 | 34.0 |
| 0x7D | 2000 | 99.0 | 95.0 | 35.0 |
| 0x7E | 2500 | 97.0 | 92.0 | 38.0 |
| 0x7F | 3000 | 95.0 | 98.0 | 39.0 |
| 0x80 | 4000 | 94.0 | 95.0 | 42.0 |
| 0x81 | 5000 | 102.0 | 96.0 | 45.0 |
| 0x82 | 6000 | 108.0 | 96.0 | 47.0 |
| 0x83 | 7000 | 113.0 | 95.0 | 50.0 |
| 0x84 | 660 | 99.9 | 101.0 | 100.0 |
| 0x85 | 720 | 108.0 | 98.0 | 100.0 |
| 0x86 | 900 | 107.0 | 97.0 | 100.0 |
| 0x87 | 1200 | 103.0 | 92.0 | 100.0 |
| 0x88 | 1500 | 101.0 | 88.0 | 100.0 |
| 0x89 | 2000 | 99.0 | 95.0 | 100.0 |
| 0x8A | 2500 | 97.0 | 92.0 | 100.0 |
| 0x8B | 3000 | 95.0 | 98.0 | 100.0 |
| 0x8C | 4000 | 94.0 | 95.0 | 100.0 |
| 0x8D | 5000 | 102.0 | 96.0 | 100.0 |
| 0x8E | 6000 | 108.0 | 96.0 | 100.0 |
| 0x8F | 7000 | 113.0 | 95.0 | 100.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _KRANN_INPA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 660 | 30 | 30 |
| 0x01 | 720 | 30 | 30 |
| 0x02 | 900 | 30 | 30 |
| 0x03 | 1200 | 30 | 30 |
| 0x04 | 1500 | 30 | 30 |
| 0x05 | 2000 | 30 | 30 |
| 0x06 | 2500 | 30 | 30 |
| 0x07 | 3000 | 30 | 30 |
| 0x08 | 4000 | 30 | 30 |
| 0x09 | 5000 | 30 | 30 |
| 0x0A | 6000 | 30 | 30 |
| 0x0B | 7000 | 30 | 30 |
| 0x0C | 660 | 40 | 30 |
| 0x0D | 720 | 40 | 30 |
| 0x0E | 900 | 40 | 30 |
| 0x0F | 1200 | 40 | 30 |
| 0x10 | 1500 | 40 | 30 |
| 0x11 | 2000 | 40 | 30 |
| 0x12 | 2500 | 40 | 30 |
| 0x13 | 3000 | 40 | 30 |
| 0x14 | 4000 | 40 | 30 |
| 0x15 | 5000 | 40 | 30 |
| 0x16 | 6000 | 40 | 30 |
| 0x17 | 7000 | 40 | 30 |
| 0x18 | 660 | 50 | 30 |
| 0x19 | 720 | 50 | 30 |
| 0x1A | 900 | 50 | 30 |
| 0x1B | 1200 | 50 | 30 |
| 0x1C | 1500 | 50 | 30 |
| 0x1D | 2000 | 50 | 30 |
| 0x1E | 2500 | 50 | 30 |
| 0x1F | 3000 | 50 | 30 |
| 0x20 | 4000 | 50 | 30 |
| 0x21 | 5000 | 50 | 30 |
| 0x22 | 6000 | 50 | 30 |
| 0x23 | 7000 | 50 | 30 |
| 0x24 | 660 | 60 | 30 |
| 0x25 | 720 | 60 | 30 |
| 0x26 | 900 | 60 | 30 |
| 0x27 | 1200 | 60 | 30 |
| 0x28 | 1500 | 60 | 30 |
| 0x29 | 2000 | 60 | 30 |
| 0x2A | 2500 | 60 | 30 |
| 0x2B | 3000 | 60 | 30 |
| 0x2C | 4000 | 60 | 30 |
| 0x2D | 5000 | 60 | 30 |
| 0x2E | 6000 | 60 | 30 |
| 0x2F | 7000 | 60 | 30 |
| 0x30 | 660 | 70 | 30 |
| 0x31 | 720 | 70 | 30 |
| 0x32 | 900 | 70 | 30 |
| 0x33 | 1200 | 70 | 30 |
| 0x34 | 1500 | 70 | 30 |
| 0x35 | 2000 | 70 | 30 |
| 0x36 | 2500 | 70 | 30 |
| 0x37 | 3000 | 70 | 30 |
| 0x38 | 4000 | 70 | 30 |
| 0x39 | 5000 | 70 | 30 |
| 0x3A | 6000 | 70 | 30 |
| 0x3B | 7000 | 70 | 30 |
| 0x3C | 660 | 80 | 30 |
| 0x3D | 720 | 80 | 30 |
| 0x3E | 900 | 80 | 30 |
| 0x3F | 1200 | 80 | 30 |
| 0x40 | 1500 | 80 | 30 |
| 0x41 | 2000 | 80 | 30 |
| 0x42 | 2500 | 80 | 30 |
| 0x43 | 3000 | 80 | 30 |
| 0x44 | 4000 | 80 | 30 |
| 0x45 | 5000 | 80 | 30 |
| 0x46 | 6000 | 80 | 30 |
| 0x47 | 7000 | 80 | 30 |
| 0x48 | 660 | 90 | 30 |
| 0x49 | 720 | 90 | 30 |
| 0x4A | 900 | 90 | 30 |
| 0x4B | 1200 | 90 | 30 |
| 0x4C | 1500 | 90 | 30 |
| 0x4D | 2000 | 90 | 30 |
| 0x4E | 2500 | 90 | 30 |
| 0x4F | 3000 | 90 | 30 |
| 0x50 | 4000 | 90 | 30 |
| 0x51 | 5000 | 90 | 30 |
| 0x52 | 6000 | 90 | 30 |
| 0x53 | 7000 | 90 | 30 |
| 0x54 | 660 | 100 | 30 |
| 0x55 | 720 | 100 | 30 |
| 0x56 | 900 | 100 | 30 |
| 0x57 | 1200 | 100 | 30 |
| 0x58 | 1500 | 100 | 30 |
| 0x59 | 2000 | 100 | 30 |
| 0x5A | 2500 | 100 | 30 |
| 0x5B | 3000 | 100 | 30 |
| 0x5C | 4000 | 100 | 30 |
| 0x5D | 5000 | 100 | 30 |
| 0x5E | 6000 | 100 | 30 |
| 0x5F | 7000 | 100 | 30 |
| 0x60 | 660 | 110 | 30 |
| 0x61 | 720 | 110 | 30 |
| 0x62 | 900 | 110 | 30 |
| 0x63 | 1200 | 110 | 30 |
| 0x64 | 1500 | 110 | 30 |
| 0x65 | 2000 | 110 | 30 |
| 0x66 | 2500 | 110 | 30 |
| 0x67 | 3000 | 110 | 30 |
| 0x68 | 4000 | 110 | 30 |
| 0x69 | 5000 | 110 | 30 |
| 0x6A | 6000 | 110 | 30 |
| 0x6B | 7000 | 110 | 30 |
| 0x6C | 660 | 120 | 30 |
| 0x6D | 720 | 120 | 30 |
| 0x6E | 900 | 120 | 30 |
| 0x6F | 1200 | 120 | 30 |
| 0x70 | 1500 | 120 | 30 |
| 0x71 | 2000 | 120 | 30 |
| 0x72 | 2500 | 120 | 30 |
| 0x73 | 3000 | 120 | 30 |
| 0x74 | 4000 | 120 | 30 |
| 0x75 | 5000 | 120 | 30 |
| 0x76 | 6000 | 120 | 30 |
| 0x77 | 7000 | 120 | 30 |
| 0x78 | 660 | 130 | 30 |
| 0x79 | 720 | 130 | 30 |
| 0x7A | 900 | 130 | 30 |
| 0x7B | 1200 | 130 | 30 |
| 0x7C | 1500 | 130 | 30 |
| 0x7D | 2000 | 130 | 30 |
| 0x7E | 2500 | 130 | 30 |
| 0x7F | 3000 | 130 | 30 |
| 0x80 | 4000 | 130 | 30 |
| 0x81 | 5000 | 130 | 30 |
| 0x82 | 6000 | 130 | 30 |
| 0x83 | 7000 | 130 | 30 |
| 0x84 | 660 | 140 | 30 |
| 0x85 | 720 | 140 | 30 |
| 0x86 | 900 | 140 | 30 |
| 0x87 | 1200 | 140 | 30 |
| 0x88 | 1500 | 140 | 30 |
| 0x89 | 2000 | 140 | 30 |
| 0x8A | 2500 | 140 | 30 |
| 0x8B | 3000 | 140 | 30 |
| 0x8C | 4000 | 140 | 30 |
| 0x8D | 5000 | 140 | 30 |
| 0x8E | 6000 | 140 | 30 |
| 0x8F | 7000 | 140 | 30 |
| 0xFF | 0 | 0 | 0 |

### _KLANN_INPA

| NR | NKW_LOC_WERT | RK_LOC_WERT | TMOT_LOC_WERT |
| --- | --- | --- | --- |
| 0x00 | 700 | 0.12 | 100 |
| 0x01 | 700 | 0.15 | 100 |
| 0x02 | 1000 | 0.12 | 100 |
| 0x03 | 1000 | 0.20 | 100 |
| 0x04 | 1000 | 0.30 | 100 |
| 0x05 | 1000 | 0.40 | 100 |
| 0x06 | 1000 | 0.50 | 100 |
| 0x07 | 1000 | 0.70 | 100 |
| 0x08 | 1000 | 1.00 | 100 |
| 0x09 | 1000 | 1.20 | 100 |
| 0x0A | 1000 | 1.40 | 100 |
| 0x0B | 1000 | 1.60 | 100 |
| 0x0C | 1500 | 0.12 | 100 |
| 0x0D | 1500 | 0.20 | 100 |
| 0x0E | 1500 | 0.30 | 100 |
| 0x0F | 1500 | 0.40 | 100 |
| 0x10 | 1500 | 0.50 | 100 |
| 0x11 | 1500 | 0.70 | 100 |
| 0x12 | 1500 | 1.00 | 100 |
| 0x13 | 1500 | 1.20 | 100 |
| 0x14 | 1500 | 1.40 | 100 |
| 0x15 | 1500 | 1.60 | 100 |
| 0x16 | 2000 | 0.12 | 100 |
| 0x17 | 2000 | 0.20 | 100 |
| 0x18 | 2000 | 0.30 | 100 |
| 0x19 | 2000 | 0.40 | 100 |
| 0x1A | 2000 | 0.50 | 100 |
| 0x1B | 2000 | 0.70 | 100 |
| 0x1C | 2000 | 1.00 | 100 |
| 0x1D | 2000 | 1.20 | 100 |
| 0x1E | 2000 | 1.40 | 100 |
| 0x1F | 2000 | 1.60 | 100 |
| 0x20 | 2000 | 1.80 | 100 |
| 0x21 | 2500 | 0.12 | 100 |
| 0x22 | 2500 | 0.20 | 100 |
| 0x23 | 2500 | 0.30 | 100 |
| 0x24 | 2500 | 0.40 | 100 |
| 0x25 | 2500 | 0.50 | 100 |
| 0x26 | 2500 | 0.70 | 100 |
| 0x27 | 2500 | 1.00 | 100 |
| 0x28 | 2500 | 1.20 | 100 |
| 0x29 | 2500 | 1.40 | 100 |
| 0x2A | 2500 | 1.60 | 100 |
| 0x2B | 2500 | 1.80 | 100 |
| 0x2C | 3000 | 0.15 | 100 |
| 0x2D | 3000 | 0.20 | 100 |
| 0x2E | 3000 | 0.30 | 100 |
| 0x2F | 3000 | 0.40 | 100 |
| 0x30 | 3000 | 0.50 | 100 |
| 0x31 | 3000 | 0.70 | 100 |
| 0x32 | 3000 | 1.00 | 100 |
| 0x33 | 3000 | 1.20 | 100 |
| 0x34 | 3000 | 1.50 | 100 |
| 0x35 | 3000 | 1.80 | 100 |
| 0x36 | 4000 | 0.15 | 100 |
| 0x37 | 4000 | 0.20 | 100 |
| 0x38 | 4000 | 0.30 | 100 |
| 0x39 | 4000 | 0.40 | 100 |
| 0x3A | 4000 | 0.50 | 100 |
| 0x3B | 4000 | 0.70 | 100 |
| 0x3C | 4000 | 1.00 | 100 |
| 0x3D | 4000 | 1.20 | 100 |
| 0x3E | 4000 | 1.50 | 100 |
| 0x3F | 4000 | 1.80 | 100 |
| 0x40 | 5000 | 0.30 | 100 |
| 0x41 | 5000 | 0.40 | 100 |
| 0x42 | 5000 | 0.50 | 100 |
| 0x43 | 5000 | 0.70 | 100 |
| 0x44 | 5000 | 1.00 | 100 |
| 0x45 | 5000 | 1.20 | 100 |
| 0x46 | 5000 | 1.50 | 100 |
| 0x47 | 5000 | 1.80 | 100 |
| 0x48 | 6000 | 0.30 | 100 |
| 0x49 | 6000 | 0.50 | 100 |
| 0x4A | 6000 | 0.70 | 100 |
| 0x4B | 6000 | 1.00 | 100 |
| 0x4C | 6000 | 1.20 | 100 |
| 0x4D | 6000 | 1.40 | 100 |
| 0x4E | 6000 | 1.60 | 100 |
| 0x4F | 6000 | 1.80 | 100 |
| 0x50 | 700 | 0.12 | 20 |
| 0x51 | 700 | 0.15 | 20 |
| 0x52 | 1000 | 0.12 | 20 |
| 0x53 | 1000 | 0.30 | 20 |
| 0x54 | 1000 | 0.50 | 20 |
| 0x55 | 1000 | 0.70 | 20 |
| 0x56 | 1000 | 1.00 | 20 |
| 0x57 | 1000 | 1.40 | 20 |
| 0x58 | 1000 | 1.80 | 20 |
| 0x59 | 1500 | 0.12 | 20 |
| 0x5A | 1500 | 0.15 | 20 |
| 0x5B | 1500 | 0.20 | 20 |
| 0x5C | 1500 | 0.30 | 20 |
| 0x5D | 1500 | 0.50 | 20 |
| 0x5E | 1500 | 0.70 | 20 |
| 0x5F | 1500 | 1.00 | 20 |
| 0x60 | 1500 | 1.20 | 20 |
| 0x61 | 1500 | 1.40 | 20 |
| 0x62 | 1500 | 1.60 | 20 |
| 0x63 | 1500 | 1.80 | 20 |
| 0x64 | 2000 | 0.15 | 20 |
| 0x65 | 2000 | 0.20 | 20 |
| 0x66 | 2000 | 0.50 | 20 |
| 0x67 | 2000 | 0.70 | 20 |
| 0x68 | 2000 | 1.00 | 20 |
| 0x69 | 2000 | 1.20 | 20 |
| 0x6A | 2000 | 1.40 | 20 |
| 0x6B | 2000 | 1.60 | 20 |
| 0x6C | 2000 | 1.80 | 20 |
| 0x6D | 3000 | 0.15 | 20 |
| 0x6E | 3000 | 0.20 | 20 |
| 0x6F | 3000 | 0.60 | 20 |
| 0x70 | 3000 | 1.00 | 20 |
| 0x71 | 3000 | 1.40 | 20 |
| 0x72 | 4000 | 0.40 | 20 |
| 0x73 | 4000 | 0.80 | 20 |
| 0x74 | 4000 | 1.00 | 20 |
| 0x75 | 4000 | 1.20 | 20 |
| 0x76 | 4000 | 1.40 | 20 |
| 0x77 | 700 | 0.12 | 0 |
| 0x78 | 700 | 0.15 | 0 |
| 0x79 | 1000 | 0.12 | 0 |
| 0x7A | 1000 | 0.20 | 0 |
| 0x7B | 1000 | 0.30 | 0 |
| 0x7C | 1000 | 0.70 | 0 |
| 0x7D | 1000 | 1.00 | 0 |
| 0x7E | 2000 | 0.15 | 0 |
| 0x7F | 2000 | 0.20 | 0 |
| 0x80 | 2000 | 0.30 | 0 |
| 0x81 | 2000 | 0.70 | 0 |
| 0x82 | 2000 | 1.00 | 0 |
| 0x83 | 2000 | 1.30 | 0 |
| 0x84 | 2000 | 1.60 | 0 |
| 0x85 | 3000 | 0.15 | 0 |
| 0x86 | 3000 | 0.30 | 0 |
| 0x87 | 3000 | 0.70 | 0 |
| 0x88 | 3000 | 1.00 | 0 |
| 0x89 | 3000 | 1.30 | 0 |
| 0x8A | 3000 | 1.60 | 0 |
| 0x8B | 3000 | 1.60 | 0 |
| 0x8C | 3000 | 1.60 | 0 |
| 0x8D | 3000 | 1.60 | 0 |
| 0x8E | 3000 | 1.60 | 0 |
| 0x8F | 3000 | 1.60 | 0 |
| 0xFF | 0 | 0 | 0 |

### _EISYAGR_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT |
| --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 105.0 |
| 0x01 | 720 | 120.0 | 105.0 |
| 0x02 | 900 | 120.0 | 105.0 |
| 0x03 | 1200 | 120.0 | 104.0 |
| 0x04 | 1500 | 120.0 | 103.0 |
| 0x05 | 2000 | 119.0 | 100.0 |
| 0x06 | 2500 | 118.0 | 98.0 |
| 0x07 | 3000 | 116.0 | 98.0 |
| 0x08 | 4000 | 112.0 | 95.0 |
| 0x09 | 5000 | 107.0 | 91.0 |
| 0x0A | 6000 | 107.0 | 86.0 |
| 0x0B | 7000 | 107.0 | 84.0 |
| 0x0C | 660 | 118.0 | 103.0 |
| 0x0D | 720 | 118.0 | 103.0 |
| 0x0E | 900 | 118.0 | 101.0 |
| 0x0F | 1200 | 116.0 | 95.0 |
| 0x10 | 1500 | 113.0 | 91.0 |
| 0x11 | 2000 | 111.0 | 95.0 |
| 0x12 | 2500 | 109.0 | 92.0 |
| 0x13 | 3000 | 108.0 | 95.0 |
| 0x14 | 4000 | 102.0 | 97.0 |
| 0x15 | 5000 | 91.0 | 95.0 |
| 0x16 | 6000 | 99.0 | 94.0 |
| 0x17 | 7000 | 103.0 | 81.0 |
| 0x18 | 660 | 113.0 | 98.0 |
| 0x19 | 720 | 112.0 | 98.0 |
| 0x1A | 900 | 111.0 | 97.0 |
| 0x1B | 1200 | 109.0 | 92.0 |
| 0x1C | 1500 | 108.0 | 88.0 |
| 0x1D | 2000 | 105.0 | 95.0 |
| 0x1E | 2500 | 104.0 | 92.0 |
| 0x1F | 3000 | 98.0 | 98.0 |
| 0x20 | 4000 | 92.0 | 95.0 |
| 0x21 | 5000 | 91.0 | 96.0 |
| 0x22 | 6000 | 97.0 | 96.0 |
| 0x23 | 7000 | 101.0 | 95.0 |
| 0x24 | 660 | 109.0 | 98.0 |
| 0x25 | 720 | 108.0 | 98.0 |
| 0x26 | 900 | 107.0 | 97.0 |
| 0x27 | 1200 | 103.0 | 92.0 |
| 0x28 | 1500 | 101.0 | 88.0 |
| 0x29 | 2000 | 99.0 | 95.0 |
| 0x2A | 2500 | 97.0 | 92.0 |
| 0x2B | 3000 | 95.0 | 98.0 |
| 0x2C | 4000 | 94.0 | 95.0 |
| 0x2D | 5000 | 102.0 | 96.0 |
| 0x2E | 6000 | 108.0 | 96.0 |
| 0x2F | 7000 | 113.0 | 95.0 |
| 0x30 | 660 | 109.0 | 98.0 |
| 0x31 | 720 | 108.0 | 98.0 |
| 0x32 | 900 | 107.0 | 97.0 |
| 0x33 | 1200 | 103.0 | 92.0 |
| 0x34 | 1500 | 101.0 | 88.0 |
| 0x35 | 2000 | 99.0 | 95.0 |
| 0x36 | 2500 | 97.0 | 92.0 |
| 0x37 | 3000 | 95.0 | 98.0 |
| 0x38 | 4000 | 94.0 | 95.0 |
| 0x39 | 5000 | 102.0 | 96.0 |
| 0x3A | 6000 | 108.0 | 96.0 |
| 0x3B | 7000 | 113.0 | 95.0 |
| 0x3C | 660 | 109.0 | 98.0 |
| 0x3D | 720 | 108.0 | 98.0 |
| 0x3E | 900 | 107.0 | 97.0 |
| 0x3F | 1200 | 103.0 | 92.0 |
| 0x40 | 1500 | 101.0 | 88.0 |
| 0x41 | 2000 | 99.0 | 95.0 |
| 0x42 | 2500 | 97.0 | 92.0 |
| 0x43 | 3000 | 95.0 | 98.0 |
| 0x44 | 4000 | 94.0 | 95.0 |
| 0x45 | 5000 | 102.0 | 96.0 |
| 0x46 | 6000 | 108.0 | 96.0 |
| 0x47 | 7000 | 113.0 | 95.0 |
| 0x48 | 660 | 109.0 | 98.0 |
| 0x49 | 720 | 108.0 | 98.0 |
| 0x4A | 900 | 107.0 | 97.0 |
| 0x4B | 1200 | 103.0 | 92.0 |
| 0x4C | 1500 | 101.0 | 88.0 |
| 0x4D | 2000 | 99.0 | 95.0 |
| 0x4E | 2500 | 97.0 | 92.0 |
| 0x4F | 3000 | 95.0 | 98.0 |
| 0x50 | 4000 | 94.0 | 95.0 |
| 0x51 | 5000 | 102.0 | 96.0 |
| 0x52 | 6000 | 108.0 | 96.0 |
| 0x53 | 7000 | 113.0 | 95.0 |
| 0x54 | 660 | 109.0 | 98.0 |
| 0x55 | 720 | 108.0 | 98.0 |
| 0x56 | 900 | 107.0 | 97.0 |
| 0x57 | 1200 | 103.0 | 92.0 |
| 0x58 | 1500 | 101.0 | 88.0 |
| 0x59 | 2000 | 99.0 | 95.0 |
| 0x5A | 2500 | 97.0 | 92.0 |
| 0x5B | 3000 | 95.0 | 98.0 |
| 0x5C | 4000 | 94.0 | 95.0 |
| 0x5D | 5000 | 102.0 | 96.0 |
| 0x5E | 6000 | 108.0 | 96.0 |
| 0x5F | 7000 | 113.0 | 95.0 |
| 0x60 | 660 | 109.0 | 98.0 |
| 0x61 | 720 | 108.0 | 98.0 |
| 0x62 | 900 | 107.0 | 97.0 |
| 0x63 | 1200 | 103.0 | 92.0 |
| 0x64 | 1500 | 101.0 | 88.0 |
| 0x65 | 2000 | 99.0 | 95.0 |
| 0x66 | 2500 | 97.0 | 92.0 |
| 0x67 | 3000 | 95.0 | 98.0 |
| 0x68 | 4000 | 94.0 | 95.0 |
| 0x69 | 5000 | 102.0 | 96.0 |
| 0x6A | 6000 | 108.0 | 96.0 |
| 0x6B | 7000 | 113.0 | 95.0 |
| 0x6C | 660 | 109.0 | 98.0 |
| 0x6D | 720 | 108.0 | 98.0 |
| 0x6E | 900 | 107.0 | 97.0 |
| 0x6F | 1200 | 103.0 | 92.0 |
| 0x70 | 1500 | 101.0 | 88.0 |
| 0x71 | 2000 | 99.0 | 95.0 |
| 0x72 | 2500 | 97.0 | 92.0 |
| 0x73 | 3000 | 95.0 | 98.0 |
| 0x74 | 4000 | 94.0 | 95.0 |
| 0x75 | 5000 | 102.0 | 96.0 |
| 0x76 | 6000 | 108.0 | 96.0 |
| 0x77 | 7000 | 113.0 | 95.0 |
| 0x78 | 660 | 109.0 | 98.0 |
| 0x79 | 720 | 108.0 | 98.0 |
| 0x7A | 900 | 107.0 | 97.0 |
| 0x7B | 1200 | 103.0 | 92.0 |
| 0x7C | 1500 | 101.0 | 88.0 |
| 0x7D | 2000 | 99.0 | 95.0 |
| 0x7E | 2500 | 97.0 | 92.0 |
| 0x7F | 3000 | 95.0 | 98.0 |
| 0x80 | 4000 | 94.0 | 95.0 |
| 0x81 | 5000 | 102.0 | 96.0 |
| 0x82 | 6000 | 108.0 | 96.0 |
| 0x83 | 7000 | 113.0 | 95.0 |
| 0x84 | 660 | 99.9 | 101.0 |
| 0x85 | 720 | 108.0 | 98.0 |
| 0x86 | 900 | 107.0 | 97.0 |
| 0x87 | 1200 | 103.0 | 92.0 |
| 0x88 | 1500 | 101.0 | 88.0 |
| 0x89 | 2000 | 99.0 | 95.0 |
| 0x8A | 2500 | 97.0 | 92.0 |
| 0x8B | 3000 | 95.0 | 98.0 |
| 0x8C | 4000 | 94.0 | 95.0 |
| 0x8D | 5000 | 102.0 | 96.0 |
| 0x8E | 6000 | 108.0 | 96.0 |
| 0x8F | 7000 | 113.0 | 95.0 |
| 0xFF | 0 | 0 | 0 |

### _EISYGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 3.00 |
| 0x01 | 1000 | 100.0 | 90.00 | 8.00 |
| 0x02 | 1500 | 85.00 | 80.00 | 15.0 |
| 0x03 | 3000 | 90.00 | 100.0 | 30.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYDR_FASTA

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
| 0x00 | 700 | 0.12 | 100 |
| 0x01 | 700 | 0.15 | 100 |
| 0x02 | 1000 | 0.12 | 100 |
| 0x03 | 1000 | 0.20 | 100 |
| 0x04 | 1000 | 0.30 | 100 |
| 0x05 | 1000 | 0.40 | 100 |
| 0xFF | 0 | 0 | 0 |

### _EISYAGR_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT |
| --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 105.0 |
| 0x01 | 720 | 120.0 | 105.0 |
| 0x02 | 900 | 120.0 | 105.0 |
| 0x03 | 1200 | 120.0 | 104.0 |
| 0x04 | 1500 | 120.0 | 103.0 |
| 0x05 | 2000 | 119.0 | 100.0 |
| 0x06 | 2500 | 118.0 | 98.0 |
| 0x07 | 3000 | 116.0 | 98.0 |
| 0x08 | 4000 | 112.0 | 95.0 |
| 0x09 | 5000 | 107.0 | 91.0 |
| 0x0A | 6000 | 107.0 | 86.0 |
| 0x0B | 7000 | 107.0 | 84.0 |
| 0x0C | 660 | 118.0 | 103.0 |
| 0x0D | 720 | 118.0 | 103.0 |
| 0x0E | 900 | 118.0 | 101.0 |
| 0x0F | 1200 | 116.0 | 95.0 |
| 0xFF | 0 | 0 | 0 |

### _MSD85YL4_TABLE_MSA_URSACHE_AV

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

### _MSD85YL4_TABLE_MSA_URSACHE_EA

| NR | TEXT |
| --- | --- |
| 0 | kein EA |
| 1 | EA infolge I_BN |
| 2 | EA infolge D_SoC |
| 3 | nicht definiert |

### _MSD85YL4_CNV_S_2_DEF_BIT_UB_755_CM_4DC3300S

| NR | TEXT |
| --- | --- |
| 0 | Auslieferungszustand |
| 1 | Abweichung zum Auslieferungszustand |

### _MSD85YL4_CNV_S_2_DEF_BIT_UB_755_CM0X2_4DC3300S

| NR | TEXT |
| --- | --- |
| 0 | Schaltpunktanzeige inaktiv |
| 1 | Schaltpunktanzeige aktiv |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 2 nicht geschlossen |
| 1 | Regelkreis Bank 2 geschlossen |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 2 aktiv |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 2 aktiv |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 1 aktiv |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### _MSD85YL4_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### _MSD85YL4_TABLE_SWITCH_POSITION_LOW_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich nicht erforderlich |
| 1 | Drosselklappen-Neuabgleich erforderlich |

### _MSD85YL4_TABLE_SWITCH_POSITION_LOW_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### _MSD85YL4_TABLE_SWITCH_POSITION_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### _MSD85YL4_TABLE_SWITCH_POSITION_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### _MSD85YL4_TABLE_SWITCH_POSITION_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### _MSD85YL4_TABLE_SWITCH_POSITION_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### _MSD85YL4_TABLE_SWITCH_POSITION_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### _MSD85YL4_TABLE_SWITCH_POSITION_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### _MSD85YL4_TABLE_SWITCH_POSITION_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Motor laeuft |
| 1 | Motor steht |

### _MSD85YL4_TABLE_SWITCH_POSITION_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### _MSD85YL4_CNV_S_2_DEF_BIT_UB_716_CM0X4

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 4 | Wahr |

### _MSD85YL4_CNV_S_4_RANGE_STAT_455_CM_4DC3200S

| NR | TEXT |
| --- | --- |
| 0 | Deaktiviert |
| 1 | Fertigungsmodus |
| 2 | Transportmodus |
| 3 | Werkstattmodus |

### _MSD85YL4_TABLE_ECOS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Startbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### _MSD85YL4DEF_ST_ATLSVC_BMSNF

| NR | TEXT |
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

### _MSD85YL4DEF_ST_ATLSVC_PVDK_BMSNF

| NR | TEXT |
| --- | --- |
| 0 | Ladedruckdiagnose ohne Ergebnis |
| 1 | Ladedruck fehlerfrei |
| 2 | Gesamtladedruck zu niedrig |
| 3 | Turbolader 1 mit Ladedruckfehler |
| 4 | Turbolader 2 mit Ladedruckfehler |
| 5 | Gesamtladedruck zu niedrig, Bank nicht identifiziert |

### _MSD85YL4_CNV_S_2_DEF_BIT_UW_683_CM_4DC3500S

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### _MSD85YL4_CNV_S_10_STATE_EOL__449_CM_4DC3200S_

| NR | TEXT |
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

### _MSD85YL4_CNV_S_13_STATE_DMTL_140_CM

| NR | TEXT |
| --- | --- |
| 0 | Start |
| 1 | DMTL-Check ueber Tank oder Leitungen |
| 2 | Erste Referenzleck Messung |
| 3 | FTIV Plausibilitaetstest |
| 4 | Feinstleckpruefung |
| 5 | Zweite Referenzleck Messung |
| 6 | Tank dicht |
| 7 | Leck erkannt |
| 8 | FTIV Plausibilitaetsfehler |
| 9 | TEV-Check durch DMTL |
| 10 | Modulfehler |
| 11 | Ende |
| 17 | Spannung ausserhalb Bereich |
| 18 | Elektrischer Fehler |
| 33 | Nachtanken erkannt |
| 34 | Tankdeckel offen |
| 35 | Spannungsschwankungen |
| 36 | DMTL maximale Zeit ueberschritten |
| 37 | Referenzstromschwankungen |
| 38 | Stromdifferenz zu gross |

### _MSD85YL4_CNV_S_14_STATE_VLS__226_CM_4DC3200S

| NR | TEXT |
| --- | --- |
| 0 | Diagnose nicht aktiv |
| 1 | Diagnose Schritt 1: Fett/Mager |
| 2 | Diagnose Schritt 2: Mager/Fett |
| 3 | Diagnose wartet auf Freigabe |
| 4 | Diagnose Timeout |
| 16 | Diagnose beendet, Sonden in Ordnung |
| 17 | Diagnose beendet, Sonden vor Katalysator vertauscht |
| 18 | Diagnose beendet, Sonden nach Katalysator vertauscht |
| 19 | Diagnose beendet, Sonden vor und nach Katalysator vertauscht |
| 20 | Diagnose beendet, Sonden vor Katalysator Bank 1 nicht plausibel |
| 21 | Diagnose beendet, Sonden vor Katalysator Bank 2 nicht plausibel |
| 22 | Diagnose beendet, Sonden nach Katalysator Bank 1 nicht plausibel |
| 23 | Diagnose beendet, Sonden nach Katalysator Bank 2 nicht plausibel |
| 24 | Diagnose beendet, keine brauchbaren Ergebnisse |

### _MSD85YL4_CNV_S_10_STATE_EOL__449_CM_4DC3200S

| NR | TEXT |
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

### _MSD85YL4_CNV_S_6_STATE_DIAG_157_CM

| NR | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Schritt 1 |
| 2 | Schritt 2 |
| 3 | Schritt 3 |
| 4 | Rampe |
| 5 | Ende LOCK_STEP |

### _MSD85YL4_TABLE_FS

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

### _MSD85YL4_CNV_S_4_CYBL_RANGE_180_CM_792A900S

| NR | TEXT |
| --- | --- |
| 0 | INITIALIZATION |
| 1 | LOCK |
| 2 | WAIT |
| 3 | CYLINDER_BALANCING |

### _MSD85YL4_CNV_S_4_CYBL_RANGE_179_CM_792A900S

| NR | TEXT |
| --- | --- |
| 0 | NO |
| 1 | LOW |
| 2 | HIGH |
| 3 | IS |

### _MSD85YL4_CNV_S_5_DEF_BA_GDI_588_CM

| NR | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |
